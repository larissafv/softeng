import datetime

from django.db import models
from django.utils import timezone

class Lancamento(models.Model):
    Id = models.BigAutoField(primary_key=True)
    Titulo = models.CharField(max_length=50)
    Valor = models.IntegerField()
    Descricao = models.CharField(max_length=500)
    DataHoraEnvio = models.DateTimeField()

    def __str__(self):
        return f'"{self.Titulo}" modificou seu saldo em {self.Valor}'

    def FoiLancadoEsteMes(self):
        return self.DataHoraEnvio >= timezone.now() - datetime.timedelta(days=30)

    def FoiLancadoEstaSemana(self):
        return self.DataHoraEnvio >= timezone.now() - datetime.timedelta(weeks=1)

    def FoiLancadoHoje(self):
        return self.DataHoraEnvio >= timezone.now() - datetime.timedelta(days=1)