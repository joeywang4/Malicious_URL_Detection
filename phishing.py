import requests
from bs4 import BeautifulSoup as bs
import google
import etld
from difflib import SequenceMatcher

def get_title(r):
    soup = bs(r.text, 'html.parser')
    if soup.title is not None:
        return soup.title.string
    else:
        return None

def compare(search_result, domain, title):
    for found in search_result:
        found_domain = etld.split(found[1])
        if domain == found_domain:
            #print("Found site on Google: {}".format(found))
            score = 0
            return score
        d = SequenceMatcher(None, title, found[0])
        if d.ratio() > 0.75:
            #print("Found site with similar title: {}".format(found))
            score = round(100*d.ratio())
            return score

def phish_detect(url, debug=False):
    domain = etld.split(url)
    score = 0
    if debug:
        print("Requesting Site...")
    try:
        r = requests.get(url, allow_redirects=True)
        #for i in r.history:
            #print("Reditecting from:",i.url, "...")
    except:
        #print("This site seems to be offline...")
        return
        
    title = get_title(r)
    if title is not None:
        if debug:
            print("Searching for google...")
        search_result = google.search(title)
        score = compare(search_result, domain, title)
    if debug:
        print("Site url: {}".format(url))
        print("Site title: {}".format(title))
        print("Site Domain: {}".format(domain))
        #print("Search result: {}".format(search_result))
    
    #print("Score: {}".format(score))
    return score

if __name__ == '__main__':
    print(phish_detect("https://sites.google.com/site/ntusands/", False))