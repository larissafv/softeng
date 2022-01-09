from django.contrib import admin
from .models import Lancamento, Categoria, MetodoDePagamento

admin.site.register(Lancamento)
admin.site.register(Categoria)
admin.site.register(MetodoDePagamento)
