from django.shortcuts import render
from rest_framework import generics
from themovieDB.models import movie
from .serializers import PostSerializer

class ListPost(generics.ListCreateAPIView):
    queryset = movie.objects.all()
    serializer_class = PostSerializer

class DetailPost(generics.RetrieveUpdateDestroyAPIView):
    queryset = movie.objects.all()
    serializer_class = PostSerializer