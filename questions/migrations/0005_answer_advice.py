# Generated by Django 4.2.17 on 2024-12-19 12:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0004_answer_result'),
    ]

    operations = [
        migrations.AddField(
            model_name='answer',
            name='advice',
            field=models.TextField(null=True),
        ),
    ]