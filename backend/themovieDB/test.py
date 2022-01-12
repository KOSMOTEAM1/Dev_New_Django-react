import pymysql
from urllib.error import HTTPError
import requests
from datetime import datetime

url = 'http://localhost:8000/apimovie/recent?format=json'
r = requests.get(url)

print(r.json())