from pyjsparser import PyJsParser
import requests
from bs4 import BeautifulSoup as bs

subFuncDict = {}
FuncCallTimes = {}
#funcDeclare：現在在那些FunctionDeclartion下
funcDeclare = []

def addFuncCallTimes(funcname):
    if funcname not in FuncCallTimes:
        FuncCallTimes[funcname] = 1
    else:
        FuncCallTimes[funcname] += 1
    if funcname in subFuncDict:
        for subfunc in subFuncDict[funcname]:
            if subfunc not in FuncCallTimes:
                FuncCallTimes[subfunc] = subFuncDict[funcname][subfunc]
            else:
                FuncCallTimes[subfunc] += subFuncDict[funcname][subfunc]
    #把自己和subfunc都加+=1

def addsubFuncToFunc(subfuncname):
    for func in funcDeclare:
        if func not in subFuncDict:
            subFuncDict[func] = {}
            subFuncDict[func][subfuncname] = 1
        else:
            if subfuncname not in subFuncDict[func]:
                subFuncDict[func][subfuncname] = 1
            else:
                subFuncDict[func][subfuncname] += 1


def read_dic(dic):
    if not isinstance(dic, dict):
        return
    if dic['type'] == 'CallExpression':
        funcname = ""
        tmp = dic['callee']
        while tmp['type'] != 'Identifier':
            funcname = tmp['property']['name'] + '.' + funcname
            tmp = tmp['object']
        funcname = tmp['name'] + '.' + funcname
        addFuncCallTimes(funcname[:-1])
        addsubFuncToFunc(funcname[:-1])
        return
    elif dic['type'] == 'FunctionDeclaration':
        funcDeclare.append(dic['id']['name'])
    for key, val in dic.items():
        if isinstance(val, dict):
            read_dic(val)
        elif isinstance(val, list):
            read_list(val)
    return

def read_list(li):
    if not isinstance(li, list):
        return
    for item in li:
        if isinstance(item, dict):
            read_dic(item)
        elif isinstance(item, list):
            read_list(item)
    return


class js_detect:
    url = ""
    debug = True
    call_count = list()
    sub_func_dict = dict()
    parsed = ""

    def stat(self, script):
        read_dic(script)
        self.sub_func_dict = subFuncDict
        self.call_count  = [(k, FuncCallTimes[k]) for k in sorted(FuncCallTimes, key=FuncCallTimes.get, reverse=True)]
        return

    def __init__(self, url, debug):
        self.url = url
        if debug:
            print("Requesting Site...")
        try:
            r = requests.get(url, allow_redirects=True)
            for i in r.history:
                print("Reditecting from:",i.url, "...")
        except:
            print("This site seems to be offline...")
            return

        soup = bs(r.text, 'html.parser')
        tot_script = ""
        for script in soup.find_all('script'):
            tot_script += script.get_text()

        p = PyJsParser()
        a = p.parse(tot_script)
        self.stat(a)