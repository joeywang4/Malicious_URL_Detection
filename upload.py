import requests
import os

def is_downloadable(url):
    """
    Does the url contain a downloadable resource
    """
    try:
        h = requests.get(url, allow_redirects=True)
        header = h.headers
        content_type = header.get('content-type')
    except requests.exceptions.ConnectionError:
        if url[:5] != "https":
            print("{\"Status\": \"Offline\"}")
            exit() 
        else:
            return False
    except (requests.exceptions.MissingSchema, requests.exceptions.InvalidSchema):
        print("{\"Status\": \"Invalid URL, please start with http://...\"}")
        exit()
    if 'text' in content_type.lower():
        return False
    if 'html' in content_type.lower():
        return False
    return True
    #if apikey == '':
        #print("No API key!")
        #exit()

filename = ""
i = 0

def upload(content, output):
    base_path = os.path.normpath(os.path.dirname(__file__))+'/'
    keys = list()
    with open(base_path+"api_key", "r") as f:
        for line in f:
            line = line.split()
            if line[0] == 'virus_total':
                keys.append(line[1])
    filename = "suspicious_file1" #+ chr(i) #i<256
    #url = input("Suspicious url : ")
    #if(url == 'quit') :
        #break
    #i += 1
    '''
    if is_downloadable(url) :
        r = requests.get(url, allow_redirects=True)
    else:
        output["Malicious Download"]["Download"] = False
        return
        #print("Url is not downloadable!") 
    '''
    avail = 0
    for i in range(len(keys)):
        apikey = keys[i]
        params = {'apikey': apikey}
        files = {'file': (filename, content)}
        response = requests.post('https://www.virustotal.com/vtapi/v2/file/scan', files=files, params=params)
        try:
            json_response = response.json()
            avail = i
        except:
            pass
    
    if avail != 0:
        with open(base_path+"api_key", 'w') as f:
            num = avail
            while num < len(keys):
                f.write("virus_total {}\n".format(keys[num]))
                num+=1
            num = 0
            while num < avail:
                f.write("virus_total {}\n".format(keys[num]))
                num+=1
 
    params = {'apikey': apikey, 'resource': json_response["resource"]}
    headers = {
        "Accept-Encoding": "gzip, deflate",
        "User-Agent" : "gzip,  My Python requests library example client or username"
    }
    response = requests.get('https://www.virustotal.com/vtapi/v2/file/report',
        params=params, headers=headers)
        #json_response = response.json()
    if response.json()['response_code'] == 1:
        scan_result = response.json()['scans']

        #print(scan_result)
        antiList = list(scan_result.keys())
        for anti in antiList :
            output["Malicious Download"][anti] = scan_result[anti]['detected']
            #print(anti + " detected " + scan_result[anti]['result'])
            #print("detected rate : " + str(count) + "/" + str(j))
    output["Malicious Download"]["Download"] = True
    return output