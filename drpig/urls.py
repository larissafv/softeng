from django.urls import path

from . import views

app_name = 'lancamentos'

urlpatterns = [
    path("dash", views.DashboardAPI.as_view(), name="Dashboard"),
    path("lancamentos", views.LancamentosAPI.as_view(), name="lancamentos"),
    path("categorias", views.CategoriaListAPIView.as_view(), name="categorias-list"),
    path("pagamentos", views.PagamentoListAPIView.as_view(), name="pagamentos-list"),
]