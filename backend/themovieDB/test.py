from PIL import Image
import pymysql
import requests
from bs4 import BeautifulSoup
import urllib.request

for i in range(1, 13):
    result = str(i)
            
    print(result)
    print(type(result))
            
    if i is None:
           break
    else:
        url = "https://image.tmdb.org/t/p/original"+result
        r = requests.get(url)
        file = open("D:\otteimgDB"+result,"wb")
        file.write(r.content)
        file.close()