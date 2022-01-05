#backend/post/models.py
from datetime import datetime
from django.db import models

class insertcnt(models.Model):
    text = models.TextField(max_length=200)
    sysdate = models.DateField(auto_now='sysdate')
    systime = models.TimeField(auto_now='sysdate')

    
    def __str__(self):
        """A string representation of the model."""
        return self.title