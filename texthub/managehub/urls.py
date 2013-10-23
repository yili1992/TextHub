from django.conf.urls import patterns, url
from django.views.generic import DetailView, ListView
from managehub.models import *
from django.utils import timezone


urlpatterns = patterns('',
    url(r'^index','managehub.views.index',name='index'),

)
