# Generated by Django 4.0.2 on 2022-02-06 01:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('helpers', '0002_remove_helper_rating'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='helper',
            name='topics',
        ),
        migrations.AddField(
            model_name='helper',
            name='topic',
            field=models.CharField(default='', max_length=30),
            preserve_default=False,
        ),
    ]
