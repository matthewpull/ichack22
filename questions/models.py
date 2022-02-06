from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from django.db.models import UniqueConstraint
from django.utils import timezone

from helpers.models import Helper


class Question(models.Model):
    title = models.CharField(max_length=100)
    text = models.TextField()
    level = models.CharField(max_length=20)
    topic = models.CharField(max_length=30)
    answered = models.BooleanField(default=False)
    hidden = models.BooleanField(default=False)

    def __str__(self):
        output = self.title
        if self.answered:
            output += " [ANSWERED]"
        return output


class Reply(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    helper = models.ForeignKey(Helper, on_delete=models.CASCADE)
    answer = models.TextField(blank=True, null=True)

    class Meta:
        constraints = [UniqueConstraint(fields=["question", "helper"], name="unique_question_helper")]

    def __str__(self):
        return f"Reply to '{self.question.title}' by '{self.helper.name}'"


class Call(models.Model):
    helper = models.ForeignKey(Helper, on_delete=models.CASCADE)
    started_at = models.DateTimeField(default=timezone.now)
    ended_at = models.DateTimeField(blank=True, null=True)
    rating = models.PositiveSmallIntegerField(blank=True, null=True, validators=[
        MinValueValidator(0), MaxValueValidator(5)
    ])

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
