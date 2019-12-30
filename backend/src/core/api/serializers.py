from abc import ABC

from rest_framework import serializers

from ..models import Account


class AccountSerializer(serializers.ModelSerializer):

    class Meta:
        model = Account
        fields = ("id", "name", "color", "initial_balance")


class AccountColorSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=10)
    value = serializers.CharField(max_length=10)
