from django.contrib import admin
from .models import Lancamento, Categoria, MetodoDePagamento as Pagamento

admin.site.register(Lancamento)
admin.site.register(Categoria)
admin.site.register(Pagamento)