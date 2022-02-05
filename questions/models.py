from django.contrib.postgres.fields import ArrayField
from django.db import models
from django.utils import timezone

from helpers.models import Helper


class Question(models.Model):
    text = models.TextField()
    tags = ArrayField(models.SlugField())
    answered = models.BooleanField(default=False)

    def __str__(self):
        output = self.text[:50]
        if self.answered:
            output += " [ANSWERED]"
        return output


class Reply(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    helper = models.ForeignKey(Helper, on_delete=models.CASCADE)
    answer = models.TextField()

    def __str__(self):
        return self.answer[:50]


class Call(models.Model):
    helper = models.ForeignKey(Helper, on_delete=models.CASCADE)
    started_at = models.DateTimeField(default=timezone.now)
    ended_at = models.DateTimeField(blank=True, null=True)

    @property
    def ended(self):
        return self.ended_at is not None

    @property
    def duration(self):
        if not self.ended:
            return None
        return self.ended_at - self.started_at

    def __str__(self):
        return str(self.started_at) + " to " + str(self.ended_at)
