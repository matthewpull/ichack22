# Generated by Django 4.0.2 on 2022-02-06 00:28

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0002_rename_tutor_reply_helper_call'),
    ]

    operations = [
        migrations.AddField(
            model_name='call',
            name='rating',
            field=models.PositiveSmallIntegerField(blank=True, null=True, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(5)]),
        ),
    ]