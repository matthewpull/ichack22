from django.contrib.postgres.fields import ArrayField
from django.db import models
from django.db.models import Avg


class Helper(models.Model):
    name = models.CharField(max_length=50)
    image = models.URLField(blank=True, null=True)
    bio = models.TextField()
    topics = ArrayField(models.SlugField())

    @property
    def rating(self):
        return self.call_set.filter(rating__isnull=False).aggregate(Avg("rating"))

    def __str__(self):
        return self.name
