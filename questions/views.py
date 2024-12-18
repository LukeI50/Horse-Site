from django.shortcuts import get_object_or_404, render
from django.views import generic
from .models import Questionnaire2, Question2, Answer2
from .forms import *

# Create your views here.


class questionnaire_view(generic.ListView):
    
    def get_template_names(self):
        return ["questions/questionnaire_template.html"]
    
    def get_queryset(self):
        return Questionnaire2.objects.all()
    
    def get_object(self, queryset=None):
        # questionnaire_id = self.kwargs.get("questionnaire_id")
        questionnaire_slug = self.kwargs.get("questionnaire_slug")

        return get_object_or_404(Questionnaire2, slug = questionnaire_slug, is_current=True)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["questionnaire"] = self.get_object()
        # questionsList = list(questions)
        # questions_and_answers = []
        # for question in questionsList:
        #     temp_list = [question]
        #     temp_list.append(list(Answer2.objects.all().filter(question = question)))
        #     questions_and_answers.append(temp_list)
            
        # context["questions"] = Question2.objects.filter(questionnaire = self.get_object())
        # context["answers"] = Answer2.objects.all()

        # answers = Answer2.objects.all().first()
        # context["answers"] = answers

        questions = Question2.objects.filter(questionnaire = self.get_object())
        context["questions"] = questions

        # bury the questions answers into each question dictionary/object
        for question in questions:
            question.answers_list = Answer2.objects.filter(question=question)

        return context
    
class question_view(generic.ListView):

    def get_template_names(self):
        return ["questions/question_template.html"]

    def get_queryset(self):
        return Question2.objects.all()
    
    def get_object(self, queryset=None):
        return get_object_or_404(Question2, id = self.kwargs.get("question_id"))
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["question"] = self.get_object()
        context["answers"] = self.get_object().answers.all()        
        return context

    pass
