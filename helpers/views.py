from rest_framework import viewsets
from rest_framework.permissions import AllowAny

from helpers.models import Helper
from helpers.serializers import HelperSerializer


class HelperViewSet(viewsets.ModelViewSet):
    queryset = Helper.objects.all()
    serializer_class = HelperSerializer
    permission_classes = [AllowAny]
