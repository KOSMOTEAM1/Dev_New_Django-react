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
class insertcntrank(models.Model):
    text = models.TextField(max_length=200)
    #rank = models.DecimalField(max_digits=3,decimal_places=2)
    def __str__(self):
        """A string representation of the model."""
        return self.title

class totalrank(models.Model):
    text = models.TextField(max_length=200)
    rank = models.IntegerField(null=True)
    sysdate = models.DateField(null=True)
    def __str__(self):
        """A string representation of the model."""
        return self.title


#class insertcnt_top(models.Model):
#    sysdate = models.DateField(auto_now='sysdate')
#    systime = models.TimeField(auto_now='sysdate')
#    text = models.ForeignKey('insercnt.text', related_name='text', on_delete=models.CASCADE)
