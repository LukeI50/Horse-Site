from django.shortcuts import render, get_object_or_404, redirect
from django.views import generic
from django.contrib import messages
from django.http import HttpResponse, HttpResponseRedirect

# Create your views here.

def TestHome(request):
    return render(
        request,
        "equiworm/home.html",
    )

# Homepage

# Blogposts Page

# Quiz View - Paginate by Question - Or Do something slightly different but a little more complicated, maybe, to reduce having to reload the page

