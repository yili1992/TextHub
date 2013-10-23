from django.http import HttpResponse,HttpResponseRedirect
from django.template import Context, loader
from managehub.models import *
from django.core.urlresolvers import reverse
def home(request):
    template = loader.get_template('index.html')
    context = Context({
    })
    return HttpResponse(template.render(context))
def appliction(request):
    template = loader.get_template('appliction.html')
    context = Context({
    })
    return HttpResponse(template.render(context))
    