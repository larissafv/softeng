from rest_framework import mixins, generics, permissions
from .models import Lancamento, Categoria, MetodoDePagamento as Pagamento
from .serializers import LancamentoSerializer, CategoriaSerializer, PagamentoSerializer

class LancamentoListAPIView(generics.ListAPIView):
    serializer_class = LancamentoSerializer
    permission_classes = [permissions.AllowAny]
    queryset = Lancamento.objects.all()
    
class CategoriaListAPIView(generics.ListAPIView):
    serializer_class = CategoriaSerializer
    permission_classes = [permissions.AllowAny]
    queryset = Categoria.objects.all()
    
class PagamentoListAPIView(generics.ListAPIView):
    serializer_class = PagamentoSerializer
    permission_classes = [permissions.AllowAny]
    queryset = Pagamento.objects.all()