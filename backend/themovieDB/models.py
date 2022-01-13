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
    original_title = models.CharField(max_length=300)
    overview = models.TextField(null=True)
    popularity = models.FloatField(null=True)
    poster_path = models.CharField(max_length=100,null=True)
    release_date = models.DateField(null=True)
    runtime = models.IntegerField(null=True)
    status = models.CharField(max_length=30,null=True)
    title = models.CharField(max_length=300,null=True)
    naverid = models.IntegerField(null=True)
    naverscore = models.FloatField(null=True)
    imdbscore = models.FloatField(null=True)
    ottescore = models.FloatField(null=True)
    
class genresinmovie(models.Model):
    id = models.IntegerField(null=False, primary_key=True)
    name = models.CharField(max_length=10,null=False)

class person(models.Model):
    ottepersonid = models.AutoField(primary_key=True)
    themovieid = models.IntegerField(null=False)
    name = models.CharField(max_length=100,null=False)


class moviegenres(models.Model):
    combineid = models.AutoField(primary_key=True)
    otteid = models.IntegerField(null=False)
    genreid = models.ForeignKey('genresinmovie', on_delete=models.SET_NULL, null=True, db_column='genreid')

class movieactors(models.Model):
    maid = models.AutoField(primary_key=True)
    personname = models.CharField(max_length=100,null = True)
    otteid = models.ForeignKey('movie', on_delete=models.SET_NULL, null=True, db_column='otteid')

class moviedirectors(models.Model):
    mdid = models.AutoField(primary_key=True)
    personname = models.CharField(max_length=100,null = True)
    otteid = models.ForeignKey('movie', on_delete=models.SET_NULL, null=True, db_column='otteid')

def __str__(self):
    return self.title