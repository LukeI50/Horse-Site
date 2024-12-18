from django.contrib import admin
from .models import *

# Register your models here.


@admin.register(Questionnaire2)
class questionnaire2_admin(admin.ModelAdmin):
    list_display = ("name", "slug", "description", "is_current")
    search_fields = ["name"]
    prepopulated_fields = {
        "slug" : ("name",)
    }


@admin.register(Question2)
class question2_admin(admin.ModelAdmin):
    list_display = ("question_text",)



@admin.register(Answer2)
class answer2_admin(admin.ModelAdmin):
    list_display = ("answer_text",)
