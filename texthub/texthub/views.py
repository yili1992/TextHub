from django.http import HttpResponse,HttpResponseRedirect
from django.template import Context, loader
from managehub.models import *
from django.core.urlresolvers import reverse
def home(request):
    template = loader.get_template('logo.html')
    context = Context({
    })
    return HttpResponse(template.render(context))

    