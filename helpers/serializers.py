from rest_framework import serializers

from helpers.models import Helper


class HelperSerializer(serializers.ModelSerializer):
    class Meta:
        model = Helper
        fields = ("id", "name", "image", "bio", "topic", "rating")
        read_only_fields = ("id", "rating")
