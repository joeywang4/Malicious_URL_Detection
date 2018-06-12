import requests
import json

api_key = "AIzaSyAlB0vEbTkpNyfPg2Fc_xhHk9oofWBPabc"
api_url = "https://safebrowsing.googleapis.com/v4/threatMatches:find?key={}".format(api_key)
url = "http://bamazons.com/bigcartel/BigCartel.zip"

payload = {'client':{"clientId": "123","clientVersion": "1.1"},
           'threatInfo': 
             {"threatTypes": ["THREAT_TYPE_UNSPECIFIED", "MALWARE", "SOCIAL_ENGINEERING", 
                              "POTENTIALLY_HARMFUL_APPLICATION", "UNWANTED_SOFTWARE"],
              "platformTypes": ["PLATFORM_TYPE_UNSPECIFIED","WINDOWS","LINUX", "ANDROID",
                                "OSX", "IOS", "ANY_PLATFORM", "ALL_PLATFORMS", "CHROME"],
              "threatEntryTypes": ["URL", "THREAT_ENTRY_TYPE_UNSPECIFIED", "EXECUTABLE"],
              "threatEntries": [{"url": url}]
             }
          }

r = requests.post(api_url, data=json.dumps(payload))
result = json.loads(r.text)
print(result)