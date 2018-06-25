from phishing.phishing import phish_detect
from dbd import js_detect
from pyjsparser.parser import PyJsParser
import selenium_browser.browser as browser
import sys
import json
import upload


if len(sys.argv) > 2 or len(sys.argv) == 1:
    print("usage: python3 main.py [target url]")
else:
    output_json = {"Phishing Site": 0, \
                   "Malicious Download": {}, \
                   "Malicious Javascript": {"Drive-by-Download": 0, "Suspicios Code": 0}}
    d = js_detect(sys.argv[1], True)
    upload.upload(sys.argv[1], output_json)
    output_json["Phishing Site"] = phish_detect(sys.argv[1], False)
    browser.browse(sys.argv[1], output_json)
    print(json.dumps(output_json))


'''
subFuncDict = dict()
FuncCallTimes = dict()
funcDeclare = list()
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
p = PyJsParser()
with open('test.js', 'r') as f:
    tot_script = f.read()
    a = p.parse(tot_script)
    print(a)
    read_dic(a)
    print(subFuncDict)
    print(FuncCallTimes)
'''
