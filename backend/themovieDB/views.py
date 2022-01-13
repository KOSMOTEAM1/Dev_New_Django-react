from django.db.models import query
from django.views import generic
from rest_framework import generics
from themovieDB.models import movie, moviegenres, movieactors, moviedirectors
from django.db.models import F
from .serializers import PostSerializer, SortSerializer, AllGenreSerializer, ActorSerializer, DirectorSerializer
from rest_framework.response import Response
from django.http import Http404
from rest_framework.views import APIView
import pymysql

conn = pymysql.connect(host='192.168.0.41', port=3306,
                       user='team1', password='team1', db='otte_dev')
cur = conn.cursor()

class ListPost(generics.ListCreateAPIView):
    queryset = movie.objects.all()
    serializer_class = PostSerializer

class DetailPost(generics.RetrieveUpdateDestroyAPIView):
    queryset = movie.objects.all()
    serializer_class = PostSerializer

class RecentPost(generics.ListCreateAPIView):
    queryset = movie.objects.filter(status = 'Released').order_by('-release_date')[:20]
    serializer_class = SortSerializer

class KoreaPost(generics.ListCreateAPIView):
    queryset = movie.objects.filter(original_language = 'ko').order_by('?')[:100]
    serializer_class = SortSerializer

class GenredetailPost(APIView):   
    def get(self, request, pk):
        try:
            queryset = moviegenres.objects.filter(otteid=pk).select_related('genreid').values('genreid__name','genreid__id').annotate(name =F('genreid__name'),id=F('genreid__id'))
            print("@@@@@@@",queryset.query)
            print(queryset)
            serializer = AllGenreSerializer(queryset, many=True)
            return Response(serializer.data)
        except moviegenres.DoesNotExist:
            raise Http404

class ActordetailPost(APIView):   
    def get(self, request, pk):
        try:
            queryset = movieactors.objects.filter(otteid=pk).values('personname')
            print("@@@@@@@",queryset.query)
            print(queryset)
            serializer = DirectorSerializer(queryset, many=True)
            return Response(serializer.data)
        except moviegenres.DoesNotExist:
            raise Http404

class DirectordetailPost(APIView):   
    def get(self, request, pk):
        try:
            queryset = moviedirectors.objects.filter(otteid=pk).values('personname')
            print("@@@@@@@",queryset.query)
            print(queryset)
            serializer = ActorSerializer(queryset, many=True)
            return Response(serializer.data)
        except moviegenres.DoesNotExist:
            raise Http404
