from rest_framework import routers

from .views import AccountViewSet

core_router = routers.DefaultRouter()
core_router.register("accounts", AccountViewSet)
