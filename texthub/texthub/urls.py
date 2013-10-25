from django.conf.urls import patterns, include, url
from django.contrib import admin
from views import *
admin.autodiscover()
urlpatterns = patterns('',
	url(r'^$', home),
	url(r'^essay/(?P<eid>\d+)/$','managehub.views.essay_details',name='essay_details'),
	url(r'^search/$','managehub.views.search',name='search'),
	url(r'^leavemsg/(?P<eid>\d+)/$','managehub.views.leave_comment',name='leave_comment'),
	url(r'^(?P<pageNo>\d+)/(?P<etype>\d+)/$','managehub.views.index'),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^tinymce/',include('tinymce.urls')),
)
urlpatterns += patterns('managehub.views',
    url(r'^managehub/',include('managehub.urls',namespace="managehub")),
)
