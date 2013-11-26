# -*- coding: utf-8 -*-  
import os  
import nltk  
import jieba
 
all_words = {}  
all_words_test = {} 
f=open('words_list.txt','r')
all_words_list=eval(f.read()) 
f.close() 
cname="教育"
classs_list=["交通","体育","军事","医药","政治","教育","环境","经济","艺术","计算机"]
file_path="D:\\texthub\\train_data\\data\\"+cname.decode('utf-8')+"\\32.TXT"
fobj=open(file_path,'r')
raw=fobj.read()
word_cut=jieba.cut(raw,cut_all=False)
word_list=list(word_cut)
for word in word_list:
    if all_words_test.has_key(word):#if word in all_words.keys():  
            all_words_test[word] += 1  
    else:  
            all_words_test[word] = 0  
test_words_list = sorted(all_words_test.items(), key=lambda e:e[1], reverse=True)  
## 由于乱码的问题，没有正确使用 stopwords；简单去掉 前100个高频项  
## word_features 是选用的 word-词典  
stopwords_file = open('stopwords_cn.txt', 'r')  
stopwords_list = []  
for line in stopwords_file.readlines():  
    #print line.decode('gbk')  
    stopwords_list.append(line)
#print stopwords_list  
  
  
def words_dict_use_stopwords(deleteN):  
    #dict_name = "dict_stopwords_"+str(deleteN)+".txt"  
    #dict = open(dict_name, 'w')  
    n = 0  
    word_features = []  
    for t in range(deleteN, len(all_words_list), 1):  
            if n > 1000:  
                        break  
            #print all_words_list[t][0]  
            if all_words_list[t][0] not in stopwords_list and (not all_words_list[t][0].isdigit()):  
                #dict.writelines(str(all_words_list[t][0]))  
                #dict.writelines(' ')  
                n += 1  
                word_features.append(all_words_list[t][0]) 
    return word_features  
  
def document_features(document):  
    document_words = set(document)
    document_words = [i for i in document_words ]
    features = {}
    for word in word_features: ## 根据词典生成 每个document的feature True or False
        #print word  
        features['contains(%s)' % word] = (word in document_words)  
    return features  
 
def TextClassification():  
    ## 根据每个document 分词生成的 word_list 生成 feature
    f=open('train_data.txt','r')
    train_data=eval(f.read()) 
    f.close()  
    test_data = document_features(all_words_test.keys())
    print "train number:",len(train_data),"\n test number:",len(test_data)  
    ## 朴素贝叶斯分类器  
    classifier = nltk.NaiveBayesClassifier.train(train_data)
    classifier.show_most_informative_features (10)
    class_test = classifier.classify(test_data) 
    print "class_test:", class_test 
    return class_test  

word_features = words_dict_use_stopwords(0)
classify_test = TextClassification()  
print "完成"
