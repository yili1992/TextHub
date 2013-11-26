# -*- coding: utf-8 -*-  
import os  
import  jieba  
import nltk  
  
## 由搜狗语料库 生成数据  
folder_path = 'D:\\texthub\\test_data\\data'  
#folder_path = 'C:\LIFEITENG\SogouC.mini\Sample'  
folder_list = os.listdir(folder_path)  
class_list = [] ##由于乱码等问题 仅以数字[0,1,...]来代表文件分类  
nClass = 0  
N = 100  #每类文件 最多取 50 个样本 70%train 30%test  
train_set = []  
test_set = []  
all_words = {}  
import time  
process_times = [] ## 统计处理每个文件的时间  
for i in range(len(folder_list)):  
    new_folder_path = folder_path + '\\' + folder_list[i]  
    files = os.listdir(new_folder_path)  
    class_list.append(nClass)  
    nClass += 1  
    j = 0  
    nFile = min([len(files), N])  
    for file in files:  
        if j > N:  
            break  
        starttime = time.clock()  
  
        fobj = open(new_folder_path+'\\'+file, 'r')  
        raw = fobj.read()  
        word_cut = jieba.cut(raw, cut_all=False)  
        word_list = list(word_cut)  
        for word in word_list:  
            if all_words.has_key(word):#if word in all_words.keys():  
                all_words[word] += 1  
            else:  
                all_words[word] = 0  
        if j > 0.3 * nFile:  
            train_set.append((word_list, class_list[i]))  
        else:  
            test_set.append((word_list, class_list[i]))  
        fobj.close()  
        j += 1  
        endtime = time.clock()  
        process_times.append(endtime-starttime)  
  
        print "Folder ",i,"-file-",j, "all_words length = ", len(all_words.keys()),"process time:",(endtime-starttime)  

  
## 根据word的词频排序  
all_words_list = sorted(all_words.items(), key=lambda e:e[1], reverse=True)  
  
## 由于乱码的问题，没有正确使用 stopwords；简单去掉 前100个高频项  
## word_features 是选用的 word-词典  
stopwords_file = open('stopwords_cn.txt', 'r')  
stopwords_list = []  
for line in stopwords_file.readlines():  
    #print line.decode('gbk')  
    stopwords_list.append(line)  
#print stopwords_list  
  
def words_dict_no_use_stopwords(deleteN):  
    #dict_name = "dict_"+str(deleteN)+".txt"  
    #dict = open(dict_name, 'w')  
    n = 0  
    word_features = []  
    for t in range(deleteN, len(all_words), 1):  
            if n > 1000:  
                        break  
            #print all_words_list[t][0]  
            #dict.writelines(str(all_words_list[t][0]))  
            #dict.writelines(' ')  
            n += 1  
            word_features.append(all_words_list[t][0])  
    return word_features  
    #dict.close()  
  
def words_dict_use_stopwords(deleteN):  
    #dict_name = "dict_stopwords_"+str(deleteN)+".txt"  
    #dict = open(dict_name, 'w')  
    n = 0  
    word_features = []  
    for t in range(deleteN, len(all_words), 1):  
            if n > 1000:  
                        break   
            if all_words_list[t][0] not in stopwords_list and (not all_words_list[t][0].isdigit()):  
                #dict.writelines(str(all_words_list[t][0]))  
                #dict.writelines(' ')  
                n += 1  
                word_features.append(all_words_list[t][0]) 
                 
    return word_features  
    #dict.close()  
  
def document_features(document):  
    document_words = set(document)  
    features = {}  
    for word in word_features: ## 根据词典生成 每个document的feature True or False  
        features['contains(%s)' % word] = (word in document_words)  
    return features  
  
def TextClassification():  
    ## 根据每个document 分词生成的 word_list 生成 feature  
    train_data = [(document_features(d), c) for (d,c) in train_set]  
    test_data = [(document_features(d), c) for (d,c) in test_set]  
    print "train number:",len(train_data),"\n test number:",len(test_data)  
    ## 朴素贝叶斯分类器  
    classifier = nltk.NaiveBayesClassifier.train(train_data)
    test_error = nltk.classify.accuracy(classifier, test_data)  
    print "test accuracy:", test_error  
    return test_error  
  
deleteNs = range(0, 1000, 20)  
test_errors_no_use = []  
test_errors_use = []  
for n in deleteNs: 
    print "N:%d",n
    word_features = words_dict_no_use_stopwords(n)  
    test_error = TextClassification()  
    test_errors_no_use.append(test_error)  
  
    word_features = words_dict_use_stopwords(n)  
    test_error = TextClassification()  
    test_errors_use.append(test_error)  
  
  
## 处理每个文件所用的时间 可见到后面 处理单个文件的时间显著增长  
## 原因 已查明  
import pylab  
plot1 = pylab.plot(deleteNs, test_errors_no_use)  
plot2 = pylab.plot(deleteNs, test_errors_use)  
pylab.legend(('no use stopwords', 'using stopwords'), 'best')  
#pylab.xlabel("no using stopwords")  
pylab.show()  
