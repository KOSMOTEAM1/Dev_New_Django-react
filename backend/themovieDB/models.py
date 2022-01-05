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
    original_title = models.CharField(max_length=200)
    overview = models.TextField(null=True)
    popularity = models.FloatField(null=True)
    poster_path = models.CharField(max_length=100,null=True)
    release_date = models.CharField(max_length=10, null=True)
    runtime = models.IntegerField(null=True)
    status = models.CharField(max_length=30,null=True)
    title = models.CharField(max_length=200,null=True)
    naverid = models.IntegerField(null=True)
    naverscore = models.FloatField(null=True)
    imdbscore = models.FloatField(null=True)
# 동적쿼리

def __str__(self):
    return self.title