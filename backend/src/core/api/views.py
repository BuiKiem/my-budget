from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.request import Request
from rest_framework.response import Response

from .serializers import AccountSerializer, AccountColorSerializer
from ..models import Account


class AccountViewSet(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer
    http_method_names = ["get", "post", "put", "delete", "head", "options"]

    @action(detail=False, methods=["get"], url_path="get-color-list")
    def get_color_list(self, request: Request):
        colors = [{"value": color[0], "name": color[1]} for color in Account.ColorChoices.choices]
        serializer = AccountColorSerializer(colors, many=True)
        return Response(serializer.data)
