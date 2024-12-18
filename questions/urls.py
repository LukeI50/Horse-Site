from django.urls import path
from . import views

urlpatterns = [
    path("", views.questionnaire_view.as_view(), name="questionnaire view")
    ]