from managehub.models import Users,EssayType,Essay 
from django.contrib import admin  
from django.core.urlresolvers import reverse
from tinymce.widgets import TinyMCE

class EssayAdmin (admin.ModelAdmin):
	def formfield_for_dbfield(self,db_field,**kwargs):
		if db_field.name in('content','abstract'):
			return db_field.formfield(widget=TinyMCE(
				attrs={'cols':80,'rows':30},
				mce_attrs={'external_link_list_url':reverse('tinymce.views.flatpages_link_list')},))
		return super(EssayAdmin,self).formfield_for_dbfield(db_field,**kwargs)

admin.site.register(Users)  
admin.site.register(EssayType)  
admin.site.register(Essay,EssayAdmin)  