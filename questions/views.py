from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from questions.models import Question, Reply, Call
from questions.serializers import QuestionSerializer, ReplySerializer, CallSerializer


class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    permission_classes = [AllowAny]

    @action(detail=False)
    def unanswered(self, request):
        items = self.queryset.filter(answered=False)
        serializer = self.serializer_class(items, many=True)
        return Response(serializer.data)


class ReplyViewSet(viewsets.ModelViewSet):
    queryset = Reply.objects.all()
    serializer_class = ReplySerializer
    permission_classes = [AllowAny]


class CallViewSet(viewsets.ModelViewSet):
    queryset = Call.objects.all()
    serializer_class = CallSerializer
    permission_classes = [AllowAny]
