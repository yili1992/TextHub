from django.conf.urls import patterns, include, url
from django.contrib import admin
from views import *
admin.autodiscover()
urlpatterns = patterns('',
	url(r'^$', home),
	url(r'^essay/(?P<eid>\d+)/$','managehub.views.essay_details',name='essay_details'),
	url(r'^search/$','managehub.views.search',name='search'),
	url(r'^logo/$','managehub.views.login_view',name='login_view'),
	url(r'^logoout/$','managehub.views.logout_view',name='logout_view'),
	url(r'^publish/','managehub.views.publish',name='publish'),
	url(r'^mulpulish/','managehub.views.mulpulish',name='mulpulish'),
	url(r'^delete/(?P<eid>\d+)/$','managehub.views.delete',name='delete'),
	url(r'^save/(?P<eid>\d+)/$','managehub.views.save',name='save'),
	url(r'^mody/(?P<eid>\d+)/$','managehub.views.mody',name='mody'),
	url(r'^etype/(?P<etype>\d+)/$','managehub.views.index'),
	url(r'^fabu/$','managehub.views.fabu'),
	url(r'^uploadify_script/', 'managehub.views.uploadify_script',name="uploadify_script"),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^tinymce/',include('tinymce.urls')),
)
urlpatterns += patterns('managehub.views',
    url(r'^managehub/',include('managehub.urls',namespace="managehub")),
)
