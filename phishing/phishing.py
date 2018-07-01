from bs4 import BeautifulSoup as bs
from phishing import etld
from phishing.alexa import alexa
import requests
from difflib import SequenceMatcher

debug = False
file_name = "test.html"

def search(text):
    content = list()
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
        content.append((s, url))
    
    return content

def get_title(r):
    soup = bs(r, 'html.parser')
    if soup.title is not None:
        return soup.title.string
    else:
        return None

def compare(search_result, domain, title, rank):
    for found in search_result:
        found_domain = etld.split(found[1])
        if domain[0] == found_domain[0]:
            if debug:
                print("Found site on Google: {}".format(found))
            score = 0
            return score
        elif debug:
            print("domain:{}, found domain:{}".format(domain, found_domain))
        d = SequenceMatcher(None, title, found[0])
        if d.ratio() > 0.75:
            if debug:
                print("Found site with similar title: {}".format(found))
            score = round(rank*d.ratio())
            return score
    return 0

def phish_detect(url, r, d=False):
    global debug
    debug = d
    domain = etld.split(url)

    rank = alexa(url)
    if rank is None:
        rank = 100
    title = get_title(r)
    if title is not None:
        if debug:
            print("Searching for google...")
        search_result = search(title)
        score = compare(search_result, domain, title, rank)
    if debug:
        print("Site url: {}".format(url))
        print("Site title: {}".format(title))
        print("Site Domain: {}".format(domain))
        print("Search result: {}".format(search_result))
    
    #print("Score: {}".format(score))
    return score

if __name__ == '__main__':
    print(phish_detect("https://www.alexa.com/siteinfo/", True))