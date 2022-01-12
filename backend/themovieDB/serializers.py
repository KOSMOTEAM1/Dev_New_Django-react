from rest_framework import serializers
from themovieDB.models import genresinmovie, movie

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('__all__')
        model = movie

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'name',
        )
        model = genresinmovie

class SortSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('__all__')
        model = movie