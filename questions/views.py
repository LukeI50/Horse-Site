from django.shortcuts import render
from django.views import generic
from .models import Questionnaire
from .forms import *

# Create your views here.


class questionnaire_view(generic.ListView):
    
    def get_template_names(self):
        return ["questions/questionnaire_template.html"]
    
    def get_queryset(self):
        return Questionnaire.objects.all()
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["Questionnaires"] = Questionnaire.objects.all()
        return context