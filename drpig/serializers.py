from rest_framework import serializers
from .models import Lancamento, Categoria, MetodoDePagamento as Pagamento

class LancamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lancamento
        fields = ('Id', 'Titulo', 'Valor', 'Descricao', 'DataHoraEnvio', 'Categoria','MetodoDePagamento')
        read_only_fields = ('Id', 'DataHoraEnvio')

class PagamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pagamento
        fields = ('Id', 'Titulo')

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = ('Id', 'Titulo')