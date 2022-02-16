from rest_framework import serializers
from themovieDB.models import genresinmovie, movie, movieactors, movieott

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

class OttSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('ottname',)
        model = movieott

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('__all__')
        model = movie