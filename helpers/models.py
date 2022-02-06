from django.contrib.postgres.fields import ArrayField
from django.db import models
from django.db.models import Avg


class Helper(models.Model):
    name = models.CharField(max_length=50)
    image = models.URLField(blank=True, null=True)
    bio = models.TextField()
    topic = models.CharField(max_length=30)

    @property
    def rating(self):
        return f"{self.call_set.filter(rating__isnull=False).aggregate(avg=Avg('rating'))['avg']:.2f}"

    def __str__(self):
        return self.name
