import requests
from bs4 import BeautifulSoup as bs
import google
import etld
from difflib import SequenceMatcher

class phish_detect:
    url = str()
    domain = tuple()
    title = str()
    score = 0.0
    search_result = list()

    def get_title(self):
        try:
            r = requests.get(self.url)
        except:
            print("This site seems to be offline... Exiting...")
            exit()
        soup = bs(r.text, 'html.parser')
        return soup.title.string

    def compare(self):
        for found in self.search_result:
            found_domain = etld.split(found[1])
            if self.domain == found_domain:
                print("Found site on Google: {}".format(found))
                self.score = 0.0
                return
            d = SequenceMatcher(None, self.title, found[0])
            if d.ratio() > 0.75:
                print("Found site with similar title: {}".format(found))
                self.score += 50.0*d.ratio()
                return

    def __init__(self, text, debug=False):
        self.url = text
        self.domain = etld.split(text)
        if debug:
            print("Requesting title...")
        self.title = self.get_title()
        if self.title is not None:
            if debug:
                print("Searching for google...")
            self.search_result = google.search(self.title)
            self.compare()

        if debug:
            print("Site url: {}".format(self.url))
            print("Site title: {}".format(self.title))
            print("Site Domain: {}".format(self.domain))
            #print("Search result: {}".format(self.search_result))
        
        print("Score: {}".format(self.score))