from PIL import Image
import pymysql
import requests
from bs4 import BeautifulSoup
import urllib.request

conn = pymysql.connect(host='192.168.0.41', port=3306,
                       user='team1', password='team1', db='otte_dev')
cur = conn.cursor()

def postersaver(start_id, finish_id):
    for i in range(start_id, finish_id):
        sql = 'select poster_path from themoviedb_movie where otteid = %s'
        print(i)
        print(type(i))
        cur.execute(sql, i)
        result = cur.fetchone()
        
        path = result[0]
        print(path)
        print(type(path))

        url = "https://image.tmdb.org/t/p/original"+path
        r = requests.get(url)
        file = open("C:\posterDB"+path,"wb")
        file.write(r.content)
        file.close()

        print("다운로드 완료")