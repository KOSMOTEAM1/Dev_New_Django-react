from django.db import models

# Create your models here. ORM(Object Relational Mapping)
class movie(models.Model):
    otteid = models.AutoField(primary_key=True)
    adult = models.BooleanField(null=True)
    collection_id = models.IntegerField(null=True)
    collection_name = models.CharField(max_length=10,null=True)
    themovieid = models.CharField(max_length=10)
    imdb_id = models.CharField(max_length=10,null=True)
    original_language = models.CharField(max_length=10,null=True)
    original_title = models.CharField(max_length=100)
    overview = models.TextField(null=True)
    release_date = models.CharField(max_length=10, null=True)
    runtime = models.IntegerField(null=True)
    status = models.CharField(max_length=10,null=True)
    title = models.CharField(max_length=100,null=True)
    #naverid = models.IntegerField(null=True)
    #naverscore = models.FloatField(null=True)

def __str__(self):
    return self.title