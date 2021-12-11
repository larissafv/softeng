from rest_framework import serializers
from .models import Lancamento

class LancamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lancamento
        fields = ('Id', 'Titulo', 'Valor', 'Descricao', 'DataHoraEnvio')
        read_only_fields = ('Id', 'DataHoraEnvio')