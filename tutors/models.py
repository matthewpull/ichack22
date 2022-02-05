from django.contrib.postgres.fields import ArrayField
from django.db import models


class Tutor(models.Model):
    name = models.CharField(max_length=50)
    image = models.URLField(blank=True, null=True)
    bio = models.TextField()
    topics = ArrayField(models.SlugField())
    rating = models.FloatField()
