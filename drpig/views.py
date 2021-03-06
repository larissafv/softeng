from rest_framework import mixins, generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Lancamento, Categoria, MetodoDePagamento as Pagamento
from .serializers import LancamentoSerializer, CategoriaSerializer, PagamentoSerializer

class DashboardAPI(APIView):
    def get(self, request):
        queryset = Lancamento.objects.all()
        ganho = 0 
        despesa = 0
        for obj in queryset:
            if obj.Valor > 0:
                ganho += obj.Valor
            else:
                despesa += obj.Valor
        total = ganho + despesa
        return Response({
            "Investimentos": 0,
            "Receitas": ganho,
            "Despesas": despesa,
            "Saldo": total,
        }, status=status.HTTP_200_OK)

class LancamentosAPI(APIView):
    def get(self, request):
        queryset = Lancamento.objects.all()
        serializer = LancamentoSerializer(queryset, many=True)
        print(str(dict(serializer.data[0])).replace("'", '"'))
        return Response(serializer.data)

    def post(self, request):
        serializer = LancamentoSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class CategoriaListAPIView(generics.ListAPIView):
    serializer_class = CategoriaSerializer
    permission_classes = [permissions.AllowAny]
    queryset = Categoria.objects.all()
    
class PagamentoListAPIView(generics.ListAPIView):
    serializer_class = PagamentoSerializer
    permission_classes = [permissions.AllowAny]
    queryset = Pagamento.objects.all()