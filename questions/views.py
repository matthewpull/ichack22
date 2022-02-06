from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from questions.models import Question, Reply, Call
from questions.serializers import QuestionSerializer, UserQuestionSerializer, ReplySerializer, CallSerializer


class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    permission_classes = [AllowAny]

    @action(detail=False)
    def unanswered(self, request):
        items = self.queryset.filter(answered=False)
        serializer = self.serializer_class(items, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def tutor(self, request):
        items = self.queryset.filter(answered=False, hidden=False)
        serializer = self.serializer_class(items, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def me(self, request):
        items = self.queryset.filter(answered=False).prefetch_related("reply_set", "reply_set__helper")
        serializer = UserQuestionSerializer(items, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def hidden(self, request):
        items = self.queryset.filter(answered=False, hidden=False)
        serializer = self.serializer_class(items, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=["POST"])
    def accept(self, request, pk=None):
        serializer = ReplySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.data
        question = self.get_object()
        Reply(helper_id=data["helper"], question=question).save()
        question.hidden = True
        question.save()
        return Response(status=status.HTTP_204_NO_CONTENT)

    @action(detail=True, methods=["POST"])
    def reject(self, request, pk=None):
        question = self.get_object()
        question.hidden = True
        question.save()
        return Response(status=status.HTTP_204_NO_CONTENT)


class ReplyViewSet(viewsets.ModelViewSet):
    queryset = Reply.objects.all()
    serializer_class = ReplySerializer
    permission_classes = [AllowAny]


class CallViewSet(viewsets.ModelViewSet):
    queryset = Call.objects.all()
    serializer_class = CallSerializer
    permission_classes = [AllowAny]
