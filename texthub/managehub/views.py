#coding=utf-8
from django.http import HttpResponse,HttpResponseRedirect
from django.template import Context, loader
from managehub.models import *
from django.http import Http404
from django.core.urlresolvers import reverse
from django.shortcuts import render,get_object_or_404,render_to_response
from django.core.paginator import Paginator  
import datetime  
from django.db.models import Q  
from django.core.context_processors import csrf
from django.views.decorators.csrf import csrf_protect

temp=None

@csrf_protect
def index(request,etype=None,keyword=None):  
    try:  
        etype=int(etype)  
    except:  
        etype=None 
    if temp and keyword:
        datas=Essay.objects.all().filter(eType=temp).filter(Q(title__icontains=keyword)|Q(content__icontains=keyword)).distinct()
        global temp
        temp=None   
    elif etype:  
        datas=Essay.objects.all().filter(eType=etype)
        global temp
        temp=etype
    elif keyword:  
        datas=Essay.objects.all().filter(Q(title__icontains=keyword)|Q(content__icontains=keyword)).distinct() 
    else:  
        datas=Essay.objects.all()
    viewsList=datas.order_by('-view_count')[:5]   
    context={
            'essaydetails':datas.order_by('-pub_date'),
            'essay_type':EssayType.objects.all(),  
            'vies':viewsList}
    context.update(csrf(request))
    return render_to_response('managehub/index.html',context)
#文章详细信息
@csrf_protect
def essay_details(request,eid=None):
    #返回文章详细信息或者404页面
    essay=get_object_or_404(Essay,id=eid)
    recentList=Essay.objects.all()[:5]
    #新用户的Session
    if request.session.get('e'+str(eid),True):
        request.session['e'+str(eid)]=False
        #这里可以用一个timer实现，浏览次数保存在内存中，
        #timer定期将浏览次数提交到数据库
        #文章浏览次数+1
        essay.view_count=essay.view_count+1
        essay.save()
    context={
    'essay':essay,
    'essay_type':EssayType.objects.all(),
    'date_format':essay.pub_date.strftime('%A %B %d %Y').split(),
    'recent':recentList
    }
    context.update(csrf(request))
    return render_to_response('managehub/details.html',context)
#根据关键字来搜索文章    
def search(request):
    if request.method == 'POST':
        #从POST请求中获取查询关键字
        key=request.POST.get('keyword',None)
        return index(request,keyword=key)
    else:
        return index(request)
#删除文章
def delete(request,eid=None):
    essay=Essay.objects.get(id=eid)
    essay.delete()
    return index(request)
    return index(request)

#发布信息
def publish(request):
    if request.method == 'POST':
        title=request.POST.get('TITLE',None)
        content=request.POST.get('ECONTENT',None)
        etypename=request.POST.get('ETYPE',None)
        if etypename == u'\u672a\u9009\u62e9':
            newtype=EssayType()
            newtype.tname=request.POST.get('Newtype',None)
            newtype.save()
            etypename=newtype.tname
        etype=EssayType.objects.get(tname=etypename)
        if title and content and etype :
            essay=Essay()
            essay.title=title
            essay.content=content
            essay.eType=etype
            essay.pub_date=datetime.datetime.now()
            essay.save()
            return index(request)
        return HttpResponse('error1.')
    return HttpResponse('请勿重复提交')

