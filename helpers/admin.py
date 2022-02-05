from django.contrib import admin

from helpers.models import Helper


@admin.register(Helper)
class HelperAdmin(admin.ModelAdmin):
    pass
