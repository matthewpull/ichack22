from rest_framework import serializers

from helpers.serializers import HelperSerializer
from questions.models import Question, Reply, Call


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ("id", "title", "text", "level", "topic", "answered")
        read_only_fields = ("id",)


class UserReplySerializer(serializers.ModelSerializer):
    helper = HelperSerializer()

    class Meta:
        model = Reply
        fields = "__all__"


class UserQuestionSerializer(serializers.ModelSerializer):
    replies = UserReplySerializer(source="reply_set", many=True)

    class Meta:
        model = Question
        fields = ("id", "title", "text", "level", "topic", "answered", "replies")
        read_only_fields = ("id", "replies")


class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Reply
        fields = "__all__"
        read_only_fields = ("id", "question")


class CallSerializer(serializers.ModelSerializer):
    class Meta:
        model = Call
        fields = ("id", "helper", "started_at", "ended_at")
        read_only_fields = ("id", "started_at")
