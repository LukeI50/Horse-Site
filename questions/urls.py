from django.urls import path
from . import views

urlpatterns = [
    path("<int:questionnaire_id>", views.questionnaire_view.as_view(), name="questionnaire view"),
    path("<int:questionnaire_id>/<int:question_id>", views.question_view.as_view(), name="question view"),
    ]