# Generated by Django 4.2.17 on 2024-12-17 13:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Questionnaire',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_on', models.DateTimeField(auto_created=True)),
                ('last_edited', models.DateTimeField(auto_created=True, auto_now=True)),
                ('name', models.CharField(max_length=128)),
                ('slug', models.SlugField()),
                ('is_current', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question_text', models.TextField()),
                ('questions', models.ManyToManyField(related_name='questions', to='questions.questionnaire')),
            ],
        ),
        migrations.CreateModel(
            name='Answer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('answer', models.CharField(max_length=256)),
                ('score', models.IntegerField()),
                ('next_question', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='questions.question')),
                ('preceeding_question', models.ManyToManyField(related_name='answers', to='questions.question')),
            ],
        ),
    ]
