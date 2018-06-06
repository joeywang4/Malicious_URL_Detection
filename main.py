from phishing import phish_detect


with open("site_list", 'r') as sites:
    for url in sites:
        if url[-1:] == '\n':
            url = url[:-1]
        phish_detect(url, True)
