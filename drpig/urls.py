from django.urls import path

from . import views

app_name = 'lancamentos'

urlpatterns = [
    path("lancamentos", views.LancamentoListAPIView.as_view(), name="lancamentos-list"),
    path("categorias", views.CategoriaListAPIView.as_view(), name="categorias-list"),
    path("pagamentos", views.PagamentoListAPIView.as_view(), name="pagamentos-list"),
]