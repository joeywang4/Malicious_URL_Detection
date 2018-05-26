import requests
from bs4 import BeautifulSoup as bs

class search:
    content = dict()

    def __init__(self, text):
        url = "https://www.google.com.tw/search?q={}".format(text)
        r = requests.get(url)
        soup = bs(r.text, 'html.parser')
        div = soup.find("div", {"id": "ires"})
        div = div.find_all("div", {"class": "g"})
        for d in div:
            a = d.find('a')
            for tag in a.find_all(True):
                tag.unwrap()
            s = ""
            for c in a.contents:
                s += c
            if s == "":
                continue
            index = a['href'].find('&')
            url = a['href'][7:index]
            if url == "":
                pass
            self.content[s] = url

if __name__ == "__main__":
    s = search("ntu")
    print(s.content)