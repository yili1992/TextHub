# -*- coding:utf-8 -*-  
from django.db import models 
class Users(models.Model): 
    id=models.AutoField('id',primary_key=True) 
    #相当于varchar字符类型  
    uname=models.CharField(verbose_name='用户名',max_length=25)  
    baseUser=models.ForeignKey('self','id',  
    null=True, blank=True,  
    verbose_name='所属用户')  
    pwd=models.CharField(verbose_name='密码',max_length=12)  
    email=models.CharField(max_length=25)     
    last_login_ip=models.IPAddressField(verbose_name='最后登录IP')  
    last_login_date=models.DateTimeField(verbose_name='最后登录日期')  
    #重载meta模块,修改Admin后台中显示的名称  
    class Meta:  
        verbose_name = '用户'  
        verbose_name_plural = '用户列表'  
    def __unicode__(self):  
        return self.uname   
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
    eType=models.ForeignKey(EssayType,  
    verbose_name='所属类别')
    eUser=models.ForeignKey(Users,
    verbose_name='所属用户')  
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
