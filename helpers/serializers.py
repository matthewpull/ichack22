from rest_framework import serializers


class HelperSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ("id", "name", "image", "bio", "topics", "rating")
        read_only_fields = ("id", "rating")
