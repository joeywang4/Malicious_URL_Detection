import os
from contextlib import closing
from selenium import webdriver
import time
import platform

def clean_up(curr_name):
    for f in os.listdir(curr_name):
        if os.path.isdir(curr_name+'/'+f):
            clean_up(curr_name+'/'+f)
            os.rmdir(curr_name+'/'+f)
            #print("Deleated dir: {}".format(curr_name+'/'+f))
        else:
            os.remove(curr_name+'/'+f)
            #print("Deleated: {}".format(curr_name+'/'+f))

def browse(url, output):
    user_os = platform.system()
    if user_os == "Darwin":
        suffix = "mac"
    elif user_os == "Linux":
        suffix = "linux"
    else:
        raise OSError('Unknown OS')
    if 'tmp' in os.listdir():
        clean_up('tmp')
    else:
        os.mkdir('tmp')
    with open('selenium_browser/request_type.txt', 'r') as f:
        MIME_types = f.readline()
        if MIME_types[-2:] == '\n':
            MIME_types = MIME_types[:-2]
    
    options = webdriver.firefox.options.Options()
    options.add_argument("--headless")
    profile = webdriver.FirefoxProfile()
    profile.set_preference('browser.download.folderList', 2) # custom location
    profile.set_preference('browser.download.manager.showWhenStarting', False)
    profile.set_preference('browser.download.dir', os.getcwd()+'/tmp')
    profile.set_preference('browser.helperApps.neverAsk.saveToDisk', MIME_types)
    profile.set_preference("browser.download.manager.showWhenStarting",False)
    profile.set_preference("browser.helperApps.alwaysAsk.force", False)
    # use firefox to get page with javascript generated content
    with closing(webdriver.Firefox(firefox_options=options, firefox_profile=profile, executable_path="selenium_browser/geckodriver-"+suffix)) as browser:
        try:
            browser.set_page_load_timeout(5)
            browser.get(url)
            time.sleep(5)
        except:
            if len(os.listdir('tmp')) == 0 and len(browser.page_source) == 0:
                #print("Connection timed out. This site may be offlined.")
                return
    

        page_source = browser.page_source
        #print("source length: ",len(page_source))
        #if len(page_source) < 100:
            #print("source:", page_source)
        for f in os.listdir('tmp'):
            output["Malicious Javascript"]["Drive-by-Download"] = 100
            #print("Downloaded: {}".format(f))
    return output