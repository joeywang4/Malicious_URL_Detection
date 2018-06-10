from phishing import phish_detect
from dbd import js_detect
from pyjsparser.parser import PyJsParser

'''
js_detect("https://ceiba.ntu.edu.tw/index.php", True)
'''
def read_dic(dic):
    if not isinstance(dic, dict):
        return
    if dic['type'] == 'CallExpression':
        func = ""
        tmp = dic['callee']
        while tmp['type'] is "MemberExpression":
            func += "1"
    for key, val in dic.items():
        if isinstance(val, dict):
            read_dic(val)
        elif isinstance(val, list):
            read_list(val)

def read_list(li):
    if not isinstance(li, list):
        return
    for item in li:
        if isinstance(item, dict):
            read_dic(item)
        elif isinstance(item, list):
            read_list(item)

p = PyJsParser()
with open('test.js', 'r') as f:
    tot_script = f.read()
    a = p.parse(tot_script)
    print(a)
    #read_dic(a)