# -*- coding: utf-8 -*-  
import os  
import  jieba  
  
folder_path = 'D:\\texthub\\test_data\\data'  
#folder_path = 'C:\LIFEITENG\SogouC.mini\Sample'  
folder_list = os.listdir(folder_path)  
class_list = [] 
N = 100  #each classify 70%train 30%test  
nClass =0
train_set = []  
test_set = []  
all_words = {}  
import time  
process_times = [] ## Statistical processing time of each file
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
  
        print "Folder ",folder_list[i],"-file-",j, "all_words length = ", len(all_words.keys()),"process time:",(endtime-starttime)  
  
f=open('train_set.txt','w')
f.write(str(train_set))
f.close()  
f=open('test_set.txt','w')
f.write(str(test_set))
f.close()   
## According to the word of the word order  
all_words_list = sorted(all_words.items(), key=lambda e:e[1], reverse=True)  
f=open('words_list.txt','w')
f.write(str(all_words_list))
f.close()

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
    #dict.close()
def document_features(document):  
    document_words = set(document)
    features = {}  
    for word in word_features: ## 根据词典生成 每个document的feature True or False  
        features['contains(%s)' % word] = (word in document_words)  
    return features  

def Create_traindata() :
    train_data = [(document_features(d), c) for (d,c) in train_set]
    f=open('train_data.txt','w')
    f.write(str(train_data ))
    f.close()
word_features = words_dict_use_stopwords(0)
f=open('word_features.txt','w')
f.write(str(word_features))
f.close()
Create_traindata() 
for i in range(len(folder_list)): 
    print folder_list[i]
