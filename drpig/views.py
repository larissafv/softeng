from rest_framework import mixins, generics, permissions
from .models import Lancamento
from .serializers import LancamentoSerializer

class LancamentoListAPIView(generics.ListAPIView):
    serializer_class = LancamentoSerializer
    permission_classes = [permissions.AllowAny]
    queryset = Lancamento.objects.all()