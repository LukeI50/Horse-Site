# Generated by Django 4.2.17 on 2024-12-17 13:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0003_remove_questionnaire_questionaires_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='possible_questionnaires',
            field=models.ManyToManyField(to='questions.questionnaire'),
        ),
        migrations.AlterField(
            model_name='questionnaire',
            name='questions',
            field=models.ManyToManyField(to='questions.question'),
        ),
    ]
