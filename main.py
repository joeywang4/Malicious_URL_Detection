from phishing.phishing import phish_detect
from dbd import js_detect
from pyjsparser.parser import PyJsParser
from selenium_browser import browser
import upload
import sys
import json
import requests


if len(sys.argv) > 2 or len(sys.argv) == 1:
    print("usage: python3 main.py [target url]")
else:
    output_json = {"Phishing Site": 0, \
                   "Malicious Download": {"Download": False}, \
                   "Malicious Javascript": {"Drive-by-Download": 0, "Suspicios Code": 0}, \
                   "Regex Match": list()}
    
    #get -> chromeriver
    url = sys.argv[1]
    if upload.is_downloadable(url):
        r = requests.get(url, allow_redirects=True)
        upload.upload(r.content, output_json)
    else:
        browser.browse(url, output_json)
    print(json.dumps(output_json))