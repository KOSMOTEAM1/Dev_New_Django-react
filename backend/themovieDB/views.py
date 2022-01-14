from django.db.models import query
from django.views import generic
from rest_framework import generics
from themovieDB.models import movie, moviegenres, movieactors, moviedirectors
from django.db.models import F
from .serializers import PostSerializer, SortSerializer, AllGenreSerializer, ActorSerializer, DirectorSerializer
from rest_framework.response import Response
from django.http import Http404
from rest_framework.views import APIView
from datetime import datetime
from rest_framework.pagination import PageNumberPagination

class ListPost(generics.ListCreateAPIView):
    queryset = movie.objects.all()
    serializer_class = PostSerializer

# 디테일뷰
class DetailPost(generics.RetrieveUpdateDestroyAPIView):
    queryset = movie.objects.all()
    serializer_class = PostSerializer

# 최신영화 50개 sorting
class RecentPost(generics.ListCreateAPIView):
    queryset = movie.objects.filter(status = 'Released').order_by('-release_date')[:50]
    serializer_class = SortSerializer

# 한국 작품들 중 19년도 이후에 나온 작품들 sorting
class KoreaPost(generics.ListCreateAPIView):
    """ queryset = movie.objects.filter(original_language = 'ko', popularity__gt = 30).order_by('?')[:100] """
    queryset = movie.objects.filter(original_language = 'ko', release_date__range=["2019-01-01", datetime.today()]).order_by('?')[:100]
    serializer_class = SortSerializer

# imdb 평점이 8점 이상인작품들 sorting
class FamousPost(generics.ListCreateAPIView):
    queryset = movie.objects.filter(imdbscore__gt = 8).order_by('?')[:50]
    serializer_class = SortSerializer

# 인기 컨텐츠
class PopularPost(generics.ListCreateAPIView):
    queryset = movie.objects.order_by('-popularity')
    serializer_class = SortSerializer

# 영화 장르
class GenredetailPost(APIView):   
    def get(self, request, pk):
        try:
            queryset = moviegenres.objects.filter(otteid=pk).select_related('genreid').values('genreid__name','genreid__id').annotate(name =F('genreid__name'),id=F('genreid__id'))
            print("@@@@@@@",queryset.query)
            serializer = AllGenreSerializer(queryset, many=True)
            return Response(serializer.data)
        except moviegenres.DoesNotExist:
            raise Http404

# 영화 출연배우
class ActordetailPost(APIView):   
    def get(self, request, pk):
        try:
            queryset = movieactors.objects.filter(otteid=pk).values('personname')
            print("@@@@@@@",queryset.query)
            serializer = DirectorSerializer(queryset, many=True)
            return Response(serializer.data)
        except moviegenres.DoesNotExist:
            raise Http404

# 영화 감독
class DirectordetailPost(APIView):   
    def get(self, request, pk):
        try:
            queryset = moviedirectors.objects.filter(otteid=pk).values('personname')
            print("@@@@@@@",queryset.query)
            serializer = ActorSerializer(queryset, many=True)
            return Response(serializer.data)
        except moviegenres.DoesNotExist:
            raise Http404
