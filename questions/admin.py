from django.contrib import admin
from .models import *

# Register your models here.


@admin.register(Questionnaire)
class questionnaire_admin(admin.ModelAdmin):
    list_display = ("name", "slug", "description", "is_current")
    search_fields = ["name"]
    prepopulated_fields = {
        "slug" : ("name",)
    }


@admin.register(Question)
class question_admin(admin.ModelAdmin):
    list_display = ("question_title",)



@admin.register(Answer)
class answer_admin(admin.ModelAdmin):
    list_display = ("answer_text",)
    search_fields = ["question"]
    list_filter = ["question"]
