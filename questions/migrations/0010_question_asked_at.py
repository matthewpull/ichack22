# Generated by Django 4.0.2 on 2022-02-06 07:15

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0009_question_hidden'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='asked_at',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
