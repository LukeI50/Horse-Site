from django.shortcuts import get_object_or_404, render
from django.views import generic
from .models import Questionnaire, Question
from .forms import *

# Create your views here.


class questionnaire_view(generic.ListView):
    
    def get_template_names(self):
        return ["questions/questionnaire_template.html"]
    
    def get_queryset(self):
        return Questionnaire.objects.all()
    
    def get_object(self, queryset=None):
        # questionnaire_id = self.kwargs.get("questionnaire_id")
        questionnaire_slug = self.kwargs.get("questionnaire_slug")

        return get_object_or_404(Questionnaire, slug = questionnaire_slug, is_current=True)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["questionnaire"] = self.get_object()
        context["questions"] = self.get_object().questions.all()
        return context
    
class question_view(generic.ListView):

    def get_template_names(self):
        return ["questions/question_template.html"]

    def get_queryset(self):
        return Question.objects.all()
    
    def get_object(self, queryset=None):
        return get_object_or_404(Question, id = self.kwargs.get("question_id"))
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["question"] = self.get_object()
        context["answers"] = self.get_object().answers.all()
        return context

    pass
