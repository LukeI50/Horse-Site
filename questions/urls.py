from django.urls import path
from . import views

urlpatterns = [
    path("<slug:questionnaire_slug>", views.questionnaire_view.as_view(), name="questionnaire_view"),
    path("<slug:questionnaire_slug>/<int:question_id>", views.question_view.as_view(), name="question_view"),
    ]