# Generated by Django 3.2.9 on 2022-01-05 19:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Categoria',
            fields=[
                ('Id', models.BigAutoField(primary_key=True, serialize=False)),
                ('Titulo', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='MetodoDePagamento',
            fields=[
                ('Id', models.BigAutoField(primary_key=True, serialize=False)),
                ('Titulo', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Lancamento',
            fields=[
                ('Id', models.BigAutoField(primary_key=True, serialize=False)),
                ('Titulo', models.CharField(max_length=50)),
                ('Valor', models.FloatField()),
                ('Descricao', models.CharField(max_length=500)),
                ('DataHoraEnvio', models.DateTimeField()),
                ('Categoria', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='drpig.categoria')),
                ('MetodoDePagamento', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='drpig.metododepagamento')),
            ],
        ),
    ]
