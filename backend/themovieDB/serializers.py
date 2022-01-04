from rest_framework import serializers
from themovieDB.models import movie

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'otteid',
            'adult', 
            'collection_id', 
            'collection_name',
            'themovieid',
            'imdb_id',
            'original_language', 
            'original_title',
            'overview',
            'release_date',
            'runtime',
            'status',
            'title'
        )
        model = movie