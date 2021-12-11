from django.urls import path

from . import views

app_name = 'lancamentos'

urlpatterns = [
    path("lancamentos", views.LancamentoListAPIView.as_view(), name="lancamentos-list"),
]