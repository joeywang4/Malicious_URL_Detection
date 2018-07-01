from pyjsparser import PyJsParser
import requests
from bs4 import BeautifulSoup as bs
from urllib.parse import urljoin
from regex import regex


##########計算function次數##############
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
    if 'type' not in dic:
        return
    if dic['type'] == 'CallExpression':
        funcname = ""
        tmp = dic['callee']
        while tmp['type'] != 'Identifier':
            if 'property' not in tmp:
                return
            elif 'name' not in tmp['property']:
                return
            funcname = tmp['property']['name'] + '.' + funcname
            tmp = tmp['object']
        funcname = tmp['name'] + '.' + funcname
        addFuncCallTimes(funcname[:-1])
        addsubFuncToFunc(funcname[:-1])
        return
    elif dic['type'] == 'FunctionDeclaration':
        funcDeclare.append(dic['id']['name'])
    for _, val in dic.items():
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
####################################

def get_outer_js(url):
    r = requests.get(url)
    return r.text

##########計算字元次數##############
CharFreqDict = {}
def count_char(sc):
    for char in sc:
        if char not in CharFreqDict:
            CharFreqDict[char] = 1
        else:
            CharFreqDict[char] += 1
####################################

##########計算字串內容次數##############
StringLenDict = {}
def read_dic_2(dic):
    if not isinstance(dic, dict):
        return
    for key in dic.keys():
        item = dic[key]
        if isinstance(item, dict):
            read_dic_2(item)
        elif isinstance(item, list):
            read_list_2(item)
        elif key == 'value' and isinstance(item, str) :
            num = str(len(dic['value']))
            if num not in StringLenDict:
                StringLenDict[num] = 1
            else:
                StringLenDict[num] += 1
    return

def read_list_2(li):
    if not isinstance(li, list):
        return
    for item in li:
        if isinstance(item, dict):
            read_dic_2(item)
        elif isinstance(item, list):
            read_list_2(item)
    return
def cmp_to_key(mycmp):
    'Convert a cmp= function into a key= function'
    class K:
        def __init__(self, obj, *args):
            self.obj = obj
        def __lt__(self, other):
            return mycmp(self.obj, other.obj) < 0
        def __gt__(self, other):
            return mycmp(self.obj, other.obj) > 0
        def __eq__(self, other):
            return mycmp(self.obj, other.obj) == 0
        def __le__(self, other):
            return mycmp(self.obj, other.obj) <= 0
        def __ge__(self, other):
            return mycmp(self.obj, other.obj) >= 0
        def __ne__(self, other):
            return mycmp(self.obj, other.obj) != 0
    return K
def string_to_int_compare(s1, s2):
    return int(s1) - int(s2)

#####################################
def js_detect(url, r, debug=False):
    '''
    url = ""
    debug = False
    call_count = list()
    sub_func_dict = dict()
    char_freq_dict = dict()
    string_len_dict = dict()
    parsed = ""
    reg_result = ""
    '''
    parser = PyJsParser()
    soup = bs(r, 'html.parser')
    tot_script = ""
    for script in soup.find_all('script'):
        out = ""
        try:
            out = script['src']
            if debug:
                print("getting outer js")
            #getting scripts not in site
            '''
            if out[:4] != "http":
                tot_script = get_outer_js(urljoin(self.url, out))
            else:
                tot_script = get_outer_js(out)
            '''
        except:
            tot_script += script.get_text()
    
    reg_result = []
    if tot_script != "":
        '''
        count_char(tot_script)
        a = parser.parse(tot_script)
        read_dic_2(a)
        read_dic(a)
        '''
        reg_result = regex().match(tot_script)
    return reg_result        
'''    sub_func_dict = subFuncDict
    call_count  = [(k, FuncCallTimes[k]) for k in sorted(FuncCallTimes, key=FuncCallTimes.get, reverse=True)]
    char_freq_dict = [(k, CharFreqDict[k]) for k in sorted(CharFreqDict, key=CharFreqDict.get, reverse=True)]
    string_len_dict = [(k, StringLenDict[k]) for k in sorted(StringLenDict, key=cmp_to_key(string_to_int_compare), reverse=True)]'''