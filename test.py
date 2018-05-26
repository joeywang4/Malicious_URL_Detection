import requests
from bs4 import BeautifulSoup as bs
from google import search

url = "https://reurl.cc/jnlM"
r = requests.get(url, allow_redirects=True)
for i in r.history:
    print("Reditecting from:",i.url, "...")

print("Requests for", r.url)
print("Status code:' {}'".format(r.status_code))
print(r.text)

soup = bs(r.text, 'html.parser')

with open('test.html', 'w') as f:
    f.write(str(soup.find("div", {"id": "ires"})))
