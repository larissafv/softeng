# Generated by Django 3.2.9 on 2021-12-11 00:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('drpig', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lancamento',
            name='Valor',
            field=models.FloatField(),
        ),
    ]
