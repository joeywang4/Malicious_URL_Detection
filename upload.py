import requests

def is_downloadable(url):
    """
    Does the url contain a downloadable resource
    """
    h = requests.head(url, allow_redirects=True)
    header = h.headers
    content_type = header.get('content-type')
    if 'text' in content_type.lower():
        return False
    if 'html' in content_type.lower():
        return False
    return True

apikey = "781839844fa3b5e99b166234425fb573a8b0bf8ffb3f45b23653578c284dfc50"
'''
with open("api_key", "r") as f:
    line = f.readline()
    if line[-1:] == '\n':
        apikey = line[:-1]
    else:
        apikey = line
'''
filename = ""
i = 0

while True:
    filename = "suspicious_file" + chr(i) #i<256
    url = input("Suspicious url : ")
    if(url == 'quit') :
        break
    i += 1
    if is_downloadable(url) :
        r = requests.get(url, allow_redirects=True)
    else:
        print("Url is not downloadable!")
        continue
    params = {'apikey': apikey}
    files = {'file': (filename, r.content)}
    response = requests.post('https://www.virustotal.com/vtapi/v2/file/scan', files=files, params=params)
    json_response = response.json()
 
    params = {'apikey': apikey, 'resource': json_response["resource"]}
    headers = {
        "Accept-Encoding": "gzip, deflate",
        "User-Agent" : "gzip,  My Python requests library example client or username"
    }
    response = requests.get('https://www.virustotal.com/vtapi/v2/file/report',
        params=params, headers=headers)
        #json_response = response.json()
    scan_result = response.json()['scans']

    #print(json_response['scans'])
    j = count = 0
    antiList = list(scan_result.keys())
    #print(antiList)
    for anti in antiList :
        if scan_result[anti]['detected'] == True :
            count += 1
            print(anti + " detected " + scan_result[anti]['result'])
        j += 1
    print("detected rate : " + str(count) + "/" + str(j))