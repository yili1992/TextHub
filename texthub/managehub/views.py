#coding=utf-8
from django.http import HttpResponse,HttpResponseRedirect
from django.template import Context, loader
from managehub.models import *
from django.http import Http404
from django.core.urlresolvers import reverse
from django.shortcuts import render,get_object_or_404,render_to_response 
import datetime  
from PIL import ImageFile
import os,uuid,glob
from django.conf import settings
from django.db.models import Q  
from django.core.context_processors import csrf
from django.views.decorators.csrf import csrf_protect,csrf_exempt
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.decorators import login_required


logoUser=None
superuser=None
temp=None
classs_list=["交通","体育","军事","医药","政治","教育","环境","经济","艺术","计算机"]

@csrf_protect
@login_required
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
    detaillist=datas.order_by('-pub_date')[:10] 
    detaillist2=datas.order_by('-pub_date') 
    if keyword or etype :
        context={
            'super':superuser,
            'user':logoUser,
            'essaydetails':detaillist2,
            'essay_type':EssayType.objects.all(),  
            'vies':viewsList}
        context.update(csrf(request))
    else:
        context={
            'super':superuser,
            'user':logoUser,
            'essaydetails':detaillist,
            'essay_type':EssayType.objects.all(),  
            'vies':viewsList}
        context.update(csrf(request))
    return render_to_response('managehub/index.html',context)
#文章详细信息
@csrf_protect
def essay_details(request,eid=None):
    #返回文章详细信息或者404页面
    essay=get_object_or_404(Essay,id=eid)
    #新用户的Session
    if request.session.get('e'+str(eid),True):
        request.session['e'+str(eid)]=False
        #这里可以用一个timer实现，浏览次数保存在内存中，
        #timer定期将浏览次数提交到数据库
        #文章浏览次数+1
        essay.view_count=essay.view_count+1
        essay.save()
    viewsList=Essay.objects.all().order_by('-view_count')[:5]
    context={
    'essay':essay,
    'user':logoUser,
    'essay_type':EssayType.objects.all(),
    'date_format':essay.pub_date.strftime('%A %B %d %Y').split(),
    'vies':viewsList
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
#更新文章
def mody(request,eid=None):
    essay=get_object_or_404(Essay,id=eid)
    #新用户的Session
    if request.session.get('e'+str(eid),True):
        request.session['e'+str(eid)]=False
        #这里可以用一个timer实现，浏览次数保存在内存中，
        #timer定期将浏览次数提交到数据库
        #文章浏览次数+1
        essay.view_count=essay.view_count+1
        essay.save()
    datas=Essay.objects.all()
    viewsList=datas.order_by('-view_count')[:5]   
    context={
            'essay':essay,
            'user':logoUser,
            'essaydetails':datas.order_by('-pub_date'),
            'essay_type':EssayType.objects.all(),  
            'vies':viewsList}
    context.update(csrf(request))
    return render_to_response('managehub/mody.html',context)
#保存更新
def save(request,eid=None):
    essay=get_object_or_404(Essay,id=eid)
    if request.method == 'POST':
        title=request.POST.get('MTITLE',None)
        content=request.POST.get('MCONTENT',None)
        if title and content :
            essay.title=title
            essay.content=content
            essay.pub_date=datetime.datetime.now()
            essay.save()
            return index(request)
        return HttpResponse('error1.')
    return HttpResponse('请勿重复提交')


#发布信息
def publish(request):
    if request.method == 'POST':
        title=request.POST.get('TITLE',None)
        content=request.POST.get('ECONTENT',None)
        etypename=request.POST.get('ETYPE',None)
        if etypename == u'\u81ea\u52a8\u5206\u7c7b':
            etypeid=classify(content)
            etypename=classs_list[etypeid]
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
def fabu(request):
    template = loader.get_template('managehub/fabu.html')
    viewsList=Essay.objects.all().order_by('-view_count')[:5]
    path=os.path.join(settings.MEDIA_ROOT,'upload')
    os.chdir(path)
    file_list=[]
    extension='*.txt'
    file_list+=[os.path.realpath(e) for e in glob.glob(extension)]
    for fpath in file_list:
        os.remove(fpath)
    context = Context({
    'user':logoUser,
    'essay_type':EssayType.objects.all(),
    'vies':viewsList
    })
    return HttpResponse(template.render(context))

@csrf_exempt
def uploadify_script(request):
    response=HttpResponse()
    response['Content-Type']="text/javascript"
    ret="0"        
    file = request.FILES.get("Filedata",None)       
    if file:            
        if _upload(file):
            ret="1"
        ret="2"
    response.write(ret)
    return response
"""
def _upload(file):
    '''文件上传函数'''
    if file:            
        path=os.path.join(settings.MEDIA_ROOT,'upload')
        file_name=file.name    
        path_file=os.path.join(path,file_name)
        file_upload = open( path_file, 'ab+')
        for chunk in file.chunks():  
           file_upload.write(chunk)  
        file_upload.close()
        fpath=os.path.join(path,file_name.encode('gb18030'))
        fp=open(fpath,'rb')
        etype=EssayType.objects.get(id=6)
        essay=Essay()
        essay.title=file_name
        essay.content= fp.read().decode('gbk').encode('utf-8')
        essay.eType=etype
        essay.pub_date=datetime.datetime.now()
        essay.save()
        fp.close()
        return True
    return False"""
def _upload(file):
    '''文件上传函数'''
    if file:            
        path=os.path.join(settings.MEDIA_ROOT,'upload')
        file_name=file.name    
        path_file=os.path.join(path,file_name)
        file_upload = open( path_file, 'ab+')
        for chunk in file.chunks():  
           file_upload.write(chunk)  
        file_upload.close()
        return True
    return False
def mulpulish(request):
    if request.method == 'GET':
        etypename=request.GET.get('ETYPE',None)
        path=os.path.join(settings.MEDIA_ROOT,'upload')
        os.chdir(path)
        file_list=[]
        extension='*.txt'
        file_list+=[os.path.realpath(e) for e in glob.glob(extension)]
        if etypename :
            for fpath in file_list:
                fp=open(fpath,'rb')
                ptitle=fpath.split('\\')[-1]
                conlist=[]
                pcontent=fp.read().decode('gbk').encode('utf-8')
                if etypename == u'\u81ea\u52a8\u5206\u7c7b':
                    etypeid=classify(pcontent)
                    etypename=classs_list[etypeid]
                if etypename == u'\u672a\u9009\u62e9':
                    newtype=EssayType()
                    newtype.tname=request.GET.get('Newtype',None)
                    newtype.save()
                    etypename=newtype.tname
                etype=EssayType.objects.get(tname=etypename)
                conlist=pcontent.split("\n    ")
                for flist in conlist:
                    if not flist.strip():
                        continue
                    essay=Essay()
                    essay.title=ptitle
                    essay.content= flist
                    essay.eType=etype
                    essay.pub_date=datetime.datetime.now()
                    essay.save()
                fp.close()
                os.remove(fpath)
            return index(request)
        else:
            return HttpResponse('error1.')
    return HttpResponse('请勿重复提交')
def classify(text):
    import jieba
    all_words = {}  
    all_words_test = {} 
    word_cut=jieba.cut(text,cut_all=False) 
    word_list=list(word_cut)
    for word in word_list:
        if all_words_test.has_key(word):#if word in all_words.keys():  
                all_words_test[word] += 1  
        else:  
                all_words_test[word] = 0  
## 由于乱码的问题，没有正确使用 stopwords；简单去掉 前100个高频项  
## word_features 是选用的 word-词典 
    test_data = document_features(all_words_test.keys())
    classify_test = TextClassification(test_data) 
    return classify_test 




def words_dict_use_stopwords(deleteN):  
    #dict_name = "dict_stopwords_"+str(deleteN)+".txt"  
    #dict = open(dict_name, 'w') 
   # stopwords_file = open('D:\\texthub\\texthub\\managehub\\stopwords_cn.txt', 'r')  
   # stopwords_list = []  
   # for line in stopwords_file.readlines():  
        #print line.decode('gbk')  
   #     stopwords_list.append(line)
    #print stopwords_list  
    f=open('D:\\texthub\\texthub\\managehub\\words_list.txt','r')
    all_words_list=eval(f.read()) 
    f.close() 
    n = 0  
    word_features = []  
    for t in range(deleteN, len(all_words_list), 1):  
            if n > 1000:  
                        break  
            #print all_words_list[t][0]  
           # if all_words_list[t][0] not in stopwords_list and (not all_words_list[t][0].isdigit()):  
                #dict.writelines(str(all_words_list[t][0]))  
                #dict.writelines(' ')  
            n += 1  
            word_features.append(all_words_list[t][0]) 
    return word_features  
  
def document_features(document):  
    document_words = set(document)
    document_words = [i for i in document_words ]
    word_features = words_dict_use_stopwords(0)
    features = {}
    for word in word_features: ## 根据词典生成 每个document的feature True or False
        #print word  
        features['contains(%s)' % word] = (word in document_words)  
    return features  
 
def TextClassification(test_data): 
    import nltk  
    ## 根据每个document 分词生成的 word_list 生成 feature
    f=open('D:\\texthub\\texthub\\managehub\\train_data.txt','r')
    train_data=eval(f.read()) 
    f.close()  
    ## 朴素贝叶斯分类器  
    classifier = nltk.NaiveBayesClassifier.train(train_data)
    class_test = classifier.classify(test_data) 
    return class_test  
def login_view(request):      
    user = authenticate(username=request.GET['username'], password=request.GET['password']) 
    if user is not None:  
        login(request, user) 
        global logoUser   
        logoUser = request.user
        global superuser 
        superuser=request.user.is_superuser       
        return index(request) 
    else:  
        #验证失败
        return HttpResponse('请输入正确的用户名和密码') 
@csrf_exempt  
def logout_view(request):  
    logout(request)  
    template = loader.get_template('managehub/logo.html')
    context = Context({
    })
    return HttpResponse(template.render(context))