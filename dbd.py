from pyjsparser import PyJsParser
import requests
from bs4 import BeautifulSoup as bs

class js_detect:
    url = ""
    debug = True
    call_count = list()
    parsed = ""

    def stat(self):
        call_count = []
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
        for l in a['body']:
            print(l)
            print("")