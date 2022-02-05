from rest_framework import viewsets
from rest_framework.permissions import AllowAny

from questions.models import Question, Reply, Call
from questions.serializers import QuestionSerializer, ReplySerializer, CallSerializer


class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    permission_classes = [AllowAny]


class ReplyViewSet(viewsets.ModelViewSet):
    queryset = Reply.objects.all()
    serializer_class = ReplySerializer
    permission_classes = [AllowAny]


class CallViewSet(viewsets.ModelViewSet):
    queryset = Call.objects.all()
    serializer_class = CallSerializer
    permission_classes = [AllowAny]
