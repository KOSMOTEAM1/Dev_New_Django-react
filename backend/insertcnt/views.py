#backend/post/views.py
from django.shortcuts import render
from rest_framework import generics
from django.http import Http404
from rest_framework.response import Response

from .models import insertcnt
from .serializers import insertcntSerializer
from rest_framework.views import APIView
from datetime import datetime, timedelta, time, date
##################################################################


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




        