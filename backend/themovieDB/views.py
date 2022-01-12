from django.db.models import query
from django.views import generic
from rest_framework import generics
from themovieDB.models import moviegenres
from themovieDB.models import movie 
from themovieDB.models import genresinmovie
from .serializers import PostSerializer, SortSerializer, GenreSerializer
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
            queryset = genresinmovie.objects.select_related('genreid').filter(otteid=pk)
            print("@@@@@@@",queryset.query)
            serializer = GenreSerializer(queryset, many=True)

            return Response({'detail': serializer.data})
        except moviegenres.DoesNotExist:
            raise Http404
