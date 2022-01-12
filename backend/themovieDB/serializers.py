from rest_framework import serializers
from themovieDB.models import genresinmovie, movie, moviegenres

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('__all__')
        model = movie

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('__all__')
        model = moviegenres

class AllGenreSerializer(serializers.ModelSerializer):
    """ id = GenreSerializer(read_only=True) """
    class Meta:
        fields = ('id','name')
        model = genresinmovie

class SortSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('__all__')
        model = movie