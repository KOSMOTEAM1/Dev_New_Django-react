#backend/post/serializers.py
from rest_framework import serializers
from .models import insertcnt

class insertcntSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'text',
            'sysdate',
            'systime',
        )
        model = insertcnt