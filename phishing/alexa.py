import requests
import math
from bs4 import BeautifulSoup as bs
from urllib.parse import urlparse

def alexa(url):
    url = urlparse(url).netloc
    alexo = "https://www.alexa.com/siteinfo/"
    a = requests.get(alexo+url)
    soup = bs(a.text, 'html.parser')
    with open('test.html', 'w') as out:
        out.write(a.text)
    for script in soup.find_all('script', type="text/javascript"):
        sc = script.string
        if sc is not None:
            beg = sc.find("{\"siteinfo\"")
            end = sc.find(",\"rating\"")
            info = sc[beg:end]+"}}"
            f = info.find('false')
            while f > 0:
                info = info[:f]+'F'+info[f+1:]
                f = info.find('false')
            info = eval(info)
            return None if info['siteinfo']['rank']['global'] == False else 100*math.log10(info['siteinfo']['rank']['global'])/7
    return None

if __name__ == "__main__":
    print(alexa("http://oil.tnepb.gov.tw/"))