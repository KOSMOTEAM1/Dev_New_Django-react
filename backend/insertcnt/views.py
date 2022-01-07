#backend/post/views.py
from django.shortcuts import render
from requests.api import request
from rest_framework import generics
from django.http import Http404
from rest_framework.response import Response

from .models import insertcnt
from .models import insertcntrank
from .serializers import insertcntSerializer
from .serializers import insertcntrankSerializer
from rest_framework.views import APIView
from datetime import datetime, timedelta, time, date
from django.db import models
from django.db.models import Count
from django.db import connection
import pymysql
from urllib.error import HTTPError

import pymysql
import json
import requests
from datetime import datetime
##################################################################

conn = pymysql.connect(host='192.168.0.41', port=3306,
                       user='team1', password='team1', db='otte_dev')
cur = conn.cursor()



class Listinsertcnt(generics.ListCreateAPIView):
    queryset = insertcnt.objects.all()
    serializer_class = insertcntSerializer

class Detailinsertcnt(generics.RetrieveUpdateDestroyAPIView):
    queryset = insertcnt.objects.all()
    serializer_class = insertcntSerializer

##################################################################
#class DetailComment(APIView):
#    def get_object(self, pk):
#        try:
#            return comment.objects.filter(board_id=pk)
#        except comment.DoesNotExist:
#            raise Http404

#   def get(self, request, pk, format=None):
#       comment = self.get_object(pk)
#       serializer = commentSerializer(comment, many=True)
#       return Response(serializer.data)
##################################################################

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
        for i in range(0, 4):
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







        