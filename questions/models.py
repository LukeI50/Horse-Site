from django.db import models

# Create your models here.


class Answer(models.Model):
    answer = models.CharField(max_length=256)
    score = models.IntegerField()
    next_question = models.ForeignKey('Question', on_delete=models.SET_NULL, blank=True, null=True)
    possible_questionnaires = models.ManyToManyField('Questionnaire')
    # image = models.ImageField()

    def __str__(self):
        return self.answer


class Question(models.Model):
    question_text = models.TextField()
    answers = models.ManyToManyField(Answer)
    possible_questionnaires = models.ManyToManyField('Questionnaire')

    def __str__(self):
        return self.question_text


class Questionnaire(models.Model):
    name = models.CharField(max_length=128)
    slug = models.SlugField()
    last_edited = models.DateTimeField(auto_created=True, auto_now=True)
    created_on = models.DateTimeField(auto_created=True, auto_now=False)
    is_current = models.BooleanField()
    questions = models.ManyToManyField(Question)

    def __str__(self):
        return self.name
