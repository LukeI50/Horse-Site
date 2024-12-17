from django.shortcuts import render, get_object_or_404, redirect
from django.views import generic
from django.contrib import messages
from django.http import HttpResponse, HttpResponseRedirect

# Create your views here.

def TestHome(request):
    return HttpResponse("This is the Home page")