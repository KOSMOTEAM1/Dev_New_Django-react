from rest_framework import serializers
from themovieDB.models import movie

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('__all__')
        model = movie