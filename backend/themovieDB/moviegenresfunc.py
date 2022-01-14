from moviegenres import genrescrawling
import pymysql

conn = pymysql.connect(host='192.168.0.41', port=3306,
                       user='team1', password='team1', db='otte_dev')
cur = conn.cursor()

sql = "select themovieid from themoviedb_movie;"
cur.execute(sql)
result = cur.fetchall()

for i in result:
    genrescrawling(i[0])
#themovieid
#genrescrawling(602400, 624649)