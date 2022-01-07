from django.shortcuts import render
from django.views import generic
from django.views.generic.dates import ArchiveIndexView
from rest_framework import generics
from themovieDB.models import movie
from .serializers import PostSerializer, RecentSerializer

class ListPost(generics.ListCreateAPIView):
    queryset = movie.objects.all()
    serializer_class = PostSerializer

class DetailPost(generics.RetrieveUpdateDestroyAPIView):
    queryset = movie.objects.all()
    serializer_class = PostSerializer

class RecentPost(generics.ListCreateAPIView):
    queryset = movie.objects.filter(status = 'Released').values('otteid','title').order_by('-release_date')[:10]
    serializer_class = RecentSerializer