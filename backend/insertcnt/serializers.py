#backend/post/serializers.py
from rest_framework import serializers
from .models import insertcnt, insertcntrank, totalrank
from themovieDB.models import movie

class insertcntSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'text',
            'sysdate',
            'systime',
        )
        model = insertcnt

class insertcntrankSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'rank',
            'text',
        )
        model = insertcntrank


class searchSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'otteid',
            'original_title',
            'title',
        )
        model = movie


class totalrankSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'text',
            'rank',
            'sysdate',
        )
        model = totalrank