from django.db import models

# Create your models here.
class Country(models.Model):
    name = models.CharField(max_length=64)

class President(models.Model):
    firstname = models.CharField(max_length=32)
    surname = models.CharField(max_length=32)
    country = models.ForeignKey(Country, on_delete=models.CASCADE)