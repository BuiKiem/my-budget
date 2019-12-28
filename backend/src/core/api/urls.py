from rest_framework import routers

from .views import AccountViewSet

app_name = "core"

core_router = routers.DefaultRouter()
core_router.register("accounts", AccountViewSet)
