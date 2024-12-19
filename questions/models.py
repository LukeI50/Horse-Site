from django.db import models

# Create your models here.


# class Answer(models.Model):
#     answer = models.CharField(max_length=256)
#     score = models.IntegerField()
#     next_question = models.ForeignKey('Question', on_delete=models.SET_NULL, blank=True, null=True)
#     # image = models.ImageField()

#     def __str__(self):
#         return self.answer


# class Question(models.Model):
#     question_text = models.TextField()
#     answers = models.ManyToManyField(Answer)

#     def __str__(self):
#         return self.question_text


# class Questionnaire(models.Model):
#     name = models.CharField(max_length=128)
#     slug = models.SlugField()
#     last_edited = models.DateTimeField(auto_created=True, auto_now=True)
#     created_on = models.DateTimeField(auto_created=True, auto_now=False)
#     is_current = models.BooleanField()
#     questions = models.ManyToManyField(Question)
#     answers = models.ManyToManyField(Answer)
#     first_question = models.ForeignKey(Question, on_delete=models.SET_NULL, blank=True, null=True, related_name="root_of")

#     def __str__(self):
#         return self.name

class Questionnaire(models.Model):
    name = models.CharField(max_length=128)
    slug = models.SlugField()
    description = models.TextField(null=True, blank=True)
    is_current = models.BooleanField()

    def __str__(self):
        return self.name


class Question(models.Model):
    questionnaire = models.ForeignKey(Questionnaire, related_name="questions", on_delete=models.CASCADE)
    question_title = models.CharField(max_length=128)
    question_text = models.TextField(blank=True, null=True)
    question_type = models.CharField(max_length=50, choices = [
        ('text', 'Text'),
        ('multiple_choice', "Multiple Choice"),
        ('boolean', 'Yes/No'),
    ])

    def __str__(self):
        return self.question_text


class Answer(models.Model):
    question = models.ForeignKey(Question, related_name = 'answers', on_delete=models.CASCADE)
    answer_text = models.CharField(max_length=256)
    weighting = models.IntegerField(default=0)

    def __str__(self):
        return self.answer_text