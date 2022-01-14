from rest_framework import serializers
from themovieDB.models import genresinmovie, movie, movieactors

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('__all__')
        model = movie

class AllGenreSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('__all__')
        model = genresinmovie

class SortSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('__all__')
        model = movie

class ActorSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('personname',)
        model = movieactors

class DirectorSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('personname',)
        model = movieactors