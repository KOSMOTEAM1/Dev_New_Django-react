#backend/post/views.py
from django.shortcuts import render
from requests.api import request
from rest_framework import generics
from django.http import Http404
from rest_framework.response import Response

from .models import insertcnt
from .models import insertcntrank
from .serializers import insertcntSerializer, searchSerializer
from .serializers import insertcntrankSerializer
from rest_framework.views import APIView
from datetime import datetime, timedelta, time, date
from django.db import models
from django.db.models import Count
from django.db import connection
import pymysql
from urllib.error import HTTPError
import json
import requests
from datetime import datetime
from themovieDB.models import movie
##################################################################

conn = pymysql.connect(host='192.168.0.41', port=3306,
                       user='team1', password='team1', db='otte_dev')
cur = conn.cursor()

class Search(APIView):
    def get_object(self, text):
        try:
            return movie.objects.filter(title='인질') | movie.objects.filter(original_title='영웅')
        except movie.DoesNotExist:
            raise Http404
    def get(self, format=None):
        search = self.get_object('')
        serializer_class = searchSerializer(search, many=True)
        return Response(serializer_class.data)

class Listinsertcnt(generics.ListCreateAPIView):
    
    #if pram.select =='t': 
    #    filter_str="text='fdsfds'"
    #elif(pram.select=='c'):
    #    filter_str="text='fddddd'"
    #else:
    #    filter_str="text='fddddddffff'"
    #queryset = insertcnt.objects.filter(filter_str)
    queryset = insertcnt.objects.filter()
#filter 안에 페이징도 있어야 함! 
    queryset = insertcnt.objects.filter(text='')
    serializer_class = insertcntSerializer

class Detailinsertcnt(generics.RetrieveUpdateDestroyAPIView):
    queryset = insertcnt.objects.all()
    serializer_class = insertcntSerializer

class Sortinsertcnt_today(APIView):
    #today = datetime.today().date()
    #yesterday = date.today() - timedelta(days=1)
    #lastweek = 
    def get_object(self, sysdate):
        try:
            return insertcnt.objects.filter(sysdate=date.today())
        except insertcnt.DoesNotExist:
            raise Http404
    def get(self, format=None):
        insertcnt = self.get_object('')
        #print(insertcnt.type)
        serializer_class = insertcntSerializer(insertcnt, many=True)
        return Response(serializer_class.data)

class Sortinsertcnt_yesterday(APIView):
    #today = datetime.today().date()
    #yesterday = date.today() - timedelta(days=1)
    #lastweek = 
    def get_object(self, sysdate):
        try:
            return insertcnt.objects.filter(sysdate=date.today() - timedelta(days=1))
        except insertcnt.DoesNotExist:
            raise Http404
    def get(self, format=None):
        insertcnt = self.get_object('')
        serializer_class = insertcntSerializer(insertcnt, many=True)
        return Response(serializer_class.data)

class Sortinsertcnt_top(generics.ListCreateAPIView):
    queryset = insertcntrank.objects.all()
    serializer_class = insertcntSerializer

    def __init__(self):
        self.insertrank()

    def insertrank(self):
        print('start')
        for i in range(0, 5):
            try:
                a=date.today()
                print(a)
                data = []
                data.append([a, i,i+1])
                sql = "update otte_dev.insertcnt_insertcntrank set text =(select text from (SELECT id, text, count(text)as cnt FrOM otte_dev.insertcnt_insertcnt where sysdate =%s group by text having count(text)>0)as a order by a.cnt desc limit %s,1)where id =%s;"
                cur.executemany(sql, data)         
                conn.commit()
            except KeyError:
                pass
            except HTTPError as e:
                pass
            finally:
                print(i)
                print('완료')

class Inserttotalrank(generics.ListCreateAPIView):
    # 그래프를 불러올 때 하루 딱 한번만 수행되어야 함
    # sysdate컬럼에 어제 날짜가 없으면 수행 있으면 수행 X
    def __init__(self):
        self.inserttotalrank()

    def inserttotalrank(self):
        print('start')
        try:
            a=date.today() - timedelta(days=1)
            print(a)
            data = []
            data.append([a])
            #어제날짜 까지만
            sql = "insert into otte_dev.insertcnt_totalrank (text, rank, sysdate)select text, @ROWNUM := @ROWNUM +1 as rank, sysdate from (SELECT id, text, count(text)as cnt, sysdate FrOM otte_dev.insertcnt_insertcnt where sysdate = %s group by text having count(text)>0)as a, (select @rownum :=0) as rank, otte_dev.themoviedb_movie as b where a.text=b.title and not exists(select sysdate from otte_dev.insertcnt_totalrank where sysdate=%s) order by a.cnt desc limit 0,100;"
            #insertcnt_totalrank 테이블에 어제날짜의 데이터가 없을경우 
            #어제날짜의 검색기록을 카운트해서 1-100순위로 나눈후 insert한다.

            cur.executemany(sql, data)         
            conn.commit()
        except KeyError:
            pass
        except HTTPError as e:
            pass
        finally:
            print(i)
            print('완료')





        