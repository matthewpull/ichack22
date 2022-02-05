from rest_framework import serializers

from questions.models import Question, Reply, Call


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = "__all__"


class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Reply
        fields = "__all__"


class CallSerializer(serializers.ModelSerializer):
    class Meta:
        model = Call
        fields = ("id", "helper", "started_at", "ended_at")
        read_only_fields = ("id", "started_at")
