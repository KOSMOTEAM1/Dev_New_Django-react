import pymysql
import json
import requests
from datetime import datetime
conn = pymysql.connect(host='192.168.0.41', port = 3306, user='team1', password='team1', db='otte_dev')
cur = conn.cursor()

data = []

themovieid = str(123)
req_url = "https://api.themoviedb.org/3/movie/"+themovieid + \
    "?api_key=5605da5e202977c4ef4b7125796e1173&language=ko-KR"

# [데이터 요청]
r = requests.get(req_url)

# [JSON 형태로 응답받은 데이터를 딕셔너리 데이터로 변환]
items = r.json()
print(items)
""" for n in range(len(items['genres'])):   
                genreid = items['genres'][n]['id']
                genrename = items['genres'][n]['name'] """

data.append([items['id'],items['original_title']])
print(type(items['id']))
sql = "insert into themoviedb_movie(themovieid,original_title) VALUES(%s,%s);"
cur.executemany(sql, data)
cur.execute("SELECT * FROM themoviedb;")
result = cur.fetchall()
print(result)  # 값 보기
