from django.db import models

# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=128)
    slug = models.SlugField()
    content = models.TextField(blank=True, null=True)
    