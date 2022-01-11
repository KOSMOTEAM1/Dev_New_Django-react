from django.shortcuts import render
from django.views import generic
from django.views.generic.dates import ArchiveIndexView
from rest_framework import generics
from themovieDB.models import movie
from .serializers import PostSerializer, SortSerializer

class ListPost(generics.ListCreateAPIView):
    queryset = movie.objects.all()
    serializer_class = PostSerializer

class DetailPost(generics.RetrieveUpdateDestroyAPIView):
    queryset = movie.objects.all()
    serializer_class = PostSerializer

class RecentPost(generics.ListCreateAPIView):
    queryset = movie.objects.filter(status = 'Released').order_by('-release_date')[:100]
    serializer_class = SortSerializer

class KoreaPost(generics.ListCreateAPIView):
    queryset = movie.objects.filter(original_language = 'ko').order_by('?')[:100]
    serializer_class = SortSerializer