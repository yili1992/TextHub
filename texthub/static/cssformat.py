import re
import sys
import os
fp=open('bd80dcc4ec449adf06670b068226708b.z.css','rb')
s=fp.read()
s=re.sub("}","\n}\n",s)
s=re.sub("{","\n{\n",s)
s=re.sub(";",";\n",s)
print s
fp.close()
op=open('bd80dcc4ec449adf06670b068226708b.z.css','wb')
op.write(s)
op.close()
print "Íê³É"
