from django.contrib import admin
from .models import *

# Register your models here.


@admin.register(Questionnaire)
class questionnaire_admin(admin.ModelAdmin):
    list_display = ("name", "slug", "created_on", "last_edited", "is_current")
    search_fields = ["name", "created_on"]
    prepopulated_fields = {
        "slug" : ("name",)
    }


@admin.register(Question)
class question_admin(admin.ModelAdmin):
    list_display = ("question_text",)



@admin.register(Answer)
class answer_admin(admin.ModelAdmin):
    list_display = ("answer",)
