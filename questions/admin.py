from django.contrib import admin

from questions.models import Question, Reply, Call


@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    pass


@admin.register(Reply)
class ReplyAdmin(admin.ModelAdmin):
    pass


@admin.register(Call)
class CallAdmin(admin.ModelAdmin):
    pass
