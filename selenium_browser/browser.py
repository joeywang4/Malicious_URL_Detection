import os
from contextlib import closing
from selenium import webdriver
import time
import platform
from phishing.phishing import phish_detect
from dbd import js_detect
from pyjsparser.parser import PyJsParser
import upload
import threading
import hashlib

def null():
    return

class ThreadWithReturnValue(threading.Thread):
    def __init__(self, group=None, target=None, name=None,
                 args=(), kwargs={}, Verbose=None):
        threading.Thread.__init__(self, group, target, name, args, kwargs)
        self._return = None
    def run(self):
        #print(type(self._target))
        if self._target is not None:
            self._return = self._target(*self._args, **self._kwargs)
    def join(self):
        threading.Thread.join(self)
        return self._return

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
    base_path = os.path.normpath(os.path.dirname(__file__)+'/../')+'/'
    if user_os == "Darwin":
        suffix = "mac"
    elif user_os == "Linux":
        suffix = "linux"
    else:
        raise OSError('Unknown OS')
    if 'tmp' not in os.listdir(base_path):
        os.mkdir(base_path+'tmp')
    hash_val = hashlib.md5(url.encode()).hexdigest()
    path = base_path+'tmp/'+hash_val+'/'
    if hash_val not in os.listdir(base_path+'tmp/'):
        os.mkdir(path)
    else:
        clean_up(path)
    with open(base_path+'selenium_browser/request_type.txt', 'r') as f:
        MIME_types = f.readline()
        if MIME_types[-2:] == '\n':
            MIME_types = MIME_types[:-2]

    options = webdriver.firefox.options.Options()
    options.add_argument("--headless")
    profile = webdriver.FirefoxProfile()
    profile.set_preference('browser.download.folderList', 2) # custom location
    profile.set_preference('browser.download.manager.showWhenStarting', False)
    profile.set_preference('browser.download.dir', path)
    profile.set_preference('browser.helperApps.neverAsk.saveToDisk', MIME_types)
    profile.set_preference("browser.download.manager.showWhenStarting",False)
    profile.set_preference("browser.helperApps.alwaysAsk.force", False)
    # use firefox to get page with javascript generated content
    with closing(webdriver.Firefox(firefox_options=options, firefox_profile=profile, executable_path=base_path+"selenium_browser/geckodriver-"+suffix)) as browser:
        try:
            browser.set_page_load_timeout(15)
            browser.get(url)
            page_source = browser.page_source
            
            t_thr = threading.Timer(5, null)
            js_thr = ThreadWithReturnValue(target=js_detect, args=(url, page_source))
            ph_thr = ThreadWithReturnValue(target=phish_detect, args=(url, page_source))
            '''
            js_thr = threading.Thread(target=test, args=(3, 4))
            ph_thr = threading.Thread(target=test, args=(2, 7))
            '''
            
            t_thr.start()
            ph_thr.start()
            
            js_thr.start()
            
            output["Regex Match"] = js_thr.join()
            output["Phishing Site"] = ph_thr.join()
            t_thr.join()
            #time.sleep(5)
        except:
            if len(os.listdir(path)) == 0 and len(browser.page_source) == 0:
                #print("Connection timed out. This site may be offlined.")
                return
    

        page_source = browser.page_source
        #print("source length: ",len(page_source))
        #if len(page_source) < 100:
            #print("source:", page_source)
        for f in os.listdir(path):
            #only test first file
            with open(path + f, 'rb') as file:
                upload.upload(file.read(), output)
            output["Malicious Javascript"]["Drive-by-Download"] = 100
            break
            #print("Downloaded: {}".format(f))
        clean_up(path)
        os.rmdir(path)
    return output