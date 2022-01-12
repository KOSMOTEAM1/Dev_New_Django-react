import pymysql
import json
import requests
from urllib.error import HTTPError
from datetime import datetime
# -*- encoding: cp949 -*-

conn = pymysql.connect(host='192.168.0.41', port=3306,
                       user='team1', password='team1', db='otte_dev')
cur = conn.cursor()

def moviepersoncrawling(start_id, finish_id):
    for i in range(start_id, finish_id):
        url = 'https://api.themoviedb.org/3/person/' + \
            str(i) + '/movie_credits?api_key=5605da5e202977c4ef4b7125796e1173&language=ko-KR'
        try:
            # [데이터 요청]
            r = requests.get(url)
            
            # [JSON 형태로 응답받은 데이터를 딕셔너리 데이터로 변환]
            items = r.json()
            
            sel_sql = "select ottepersonid from themoviedb_person where themovieid = %s;"
            cur.execute(sel_sql,i)
            ottepersonid = cur.fetchall()
            ottepersonid = int(ottepersonid[0][0])
            print(ottepersonid)

            if items['cast'] is not None:
                for j in range(len(items['cast'])):
                    idslist = []
                    if items['cast'][j]["order"] == 1 or items['cast'][j]["order"] == 0:
                        idslist.append([items['cast'][j]['id'], ottepersonid])
                        sql = "insert into themoviedb_movieactors(themovieid, ottepersonid) VALUES(%s,%s);"
                        cur.executemany(sql, idslist)

            if items['crew'] is not None:
                for j in range(len(items['cast'])):
                    idslist = []
                    if items['cast'][j]["department"] == "Directing":
                        idslist.append(items['crew'][j]['id'],ottepersonid)   
                        sql = "insert into themoviedb_moviedirectors(themovieid, ottepersonid) VALUES(%s,%s);"
                        cur.executemany(sql, idslist)
            
            else:
                print(i+"없음")
                pass
            conn.commit()

        except KeyError:
            pass
        except IndexError:
            pass
        except HTTPError as e:
            
            pass
        finally:
            print(i)
            print('완료')


"""  
cur.close()
conn.close() """
