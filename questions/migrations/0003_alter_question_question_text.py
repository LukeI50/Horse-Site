# Generated by Django 4.2.17 on 2024-12-18 21:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0002_question_question_title_alter_answer_answer_text'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='question_text',
            field=models.TextField(blank=True, null=True),
        ),
    ]