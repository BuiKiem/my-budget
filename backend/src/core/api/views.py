from rest_framework import viewsets

from .serializers import AccountSerializer
from ..models import Account


class AccountViewSet(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer
    http_method_names = ["get", "post", "put", "delete", "head", "options"]
