#backend/post/serializers.py
from rest_framework import serializers
from .models import insertcnt, insertcntrank

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
