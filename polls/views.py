from django.shortcuts import render, get_object_or_404
from django.utils import timezone
from django.http import HttpResponse
from .models import Lancamento

def index(request):
    lanc = Lancamento(
        Id = 0,
        Titulo = "Teste",
        Valor = 777,
        Descricao = "Descrição teste",
        DataHoraEnvio = timezone.now()
    )
    lanc.save()
    _aux = Lancamento.objects.all()[0]
    return HttpResponse(f"Lancamento type -> {_aux}")