# -*- coding:utf-8 -*-  
from django.db import models 

#文章类型列表     
class EssayType(models.Model):  
    id=models.AutoField('id',primary_key=True)  
    #相当于varchar字符类型,最大长度25  
    tname=models.CharField(  
    verbose_name='文章类名',max_length=25)  
    baseType=models.ForeignKey('self','id',  
    null=True, blank=True,  
    verbose_name='所属类别')  
    #重写Meta模块,修改在管理后台中的显示名称  
    class Meta:  
        verbose_name = '文章类型'  
        verbose_name_plural = '文章类型列表'  
        #按名称排序  
        ordering = ['tname']  
    def __unicode__(self):  
        return self.tname  
#文章列表,verbose_name就是等下再后台中字段的名称        
class Essay(models.Model):
    id=models.AutoField('id',primary_key=True)   
    eType=models.ForeignKey(EssayType,  
    verbose_name='所属类别')
    title=models.CharField(max_length=25,  
    verbose_name='文章标题')  
    content=models.TextField(max_length=2000,  
    verbose_name='文章内容')  
    pub_date=models.DateTimeField(  
    verbose_name='发表日期')  
    view_count=models.IntegerField(  
    verbose_name='浏览次数',default=0)  
    class Meta:  
        verbose_name = '文章'  
        verbose_name_plural = '文章列表'  
        #按时间排序  
        ordering = ['-pub_date']  
    def __unicode__(self):  
        return self.title   
