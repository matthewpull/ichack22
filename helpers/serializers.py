from rest_framework import serializers


class HelperSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
