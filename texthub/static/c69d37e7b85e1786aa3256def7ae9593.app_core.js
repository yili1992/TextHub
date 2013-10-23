PLOVR_MODULE_INFO=
{
"sign":["app_core"],"app":["app_core","sign"],"app_core":[],"rich_text_editor":["app"]
}
;

PLOVR_MODULE_URIS=
{
"sign":"http://static.zhihu.com/static/compiled/sign.js","app":"http://static.zhihu.com/static/compiled/app.js","app_core":"http://static.zhihu.com/static/compiled/app_core.js","rich_text_editor":"http://static.zhihu.com/static/compiled/rich_text_editor.js"
}
;

PLOVR_MODULE_USE_DEBUG_MODE=false;

zhihu=
{

}
;
(function(a)
{
with(a)
{

a.f=function(b)
{
throw b;

}
,a.i=void 0,a.j=!0,a.k=null,a.n=!1,a.aa=function()
{
return function(b)
{
return b
}

}
,a.ba=function()
{
return function()
{

}

}
,a.ca=function(b)
{
return function(c)
{
this[b]=c
}

}
,a.q=function(b)
{
return function()
{
return this[b]
}

}
,a.s=function(b)
{
return function()
{
return b
}

}
,a.t=void 0,a.da=[],a.u=function(b)
{
return function()
{
return da[b].apply(this,arguments)
}

}
,a.ea=a.ea||
{

}
,a.fa=this,a.ga=function(b)
{
for(var b=b.split("."),c=fa,d;
d=b.shift();
)if(c[d]!=k)c=c[d];
else return k;
return c
}
,
a.ha=function()
{

}
,a.ia=function(b)
{
b.D=function()
{
return b.Oj?b.Oj:b.Oj=new b
}

}
,a.ja=function(b)
{
var c=typeof b;
if("object"==c)if(b)
{
if(b instanceof Array)return"array";
if(b instanceof Object)return c;
var d=Object.prototype.toString.call(b);
if("[object Window]"==d)return"object";
if("[object Array]"==d||"number"==typeof b.length&&"undefined"!=typeof b.splice&&"undefined"!=typeof b.propertyIsEnumerable&&!b.propertyIsEnumerable("splice"))return"array";
if("[object Function]"==d||"undefined"!=typeof b.call&&
"undefined"!=typeof b.propertyIsEnumerable&&!b.propertyIsEnumerable("call"))return"function"
}
else return"null";
else if("function"==c&&"undefined"==typeof b.call)return"object";
return c
}
,a.la=function(b)
{
return b!==i
}
,a.ma=function(b)
{
return"array"==ja(b)
}
,a.na=function(b)
{
var c=ja(b);
return"array"==c||"object"==c&&"number"==typeof b.length
}
,a.oa=function(b)
{
return"string"==typeof b
}
,a.pa=function(b)
{
return"number"==typeof b
}
,a.qa=function(b)
{
return"function"==ja(b)
}
,a.ra=function(b)
{
var c=typeof b;

return"object"==c&&b!=k||"function"==c
}
,a.ua=function(b)
{
return b[sa]||(b[sa]=++ta)
}
,a.sa="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36),a.ta=0,a.va=function(b,c,d)
{
return b.call.apply(b.bind,arguments)
}
,a.wa=function(b,c,d)
{
b||f(Error());
if(2<arguments.length)
{
var e=Array.prototype.slice.call(arguments,2);
return function()
{
var d=Array.prototype.slice.call(arguments);
Array.prototype.unshift.apply(d,e);
return b.apply(c,d)
}

}
return function()
{
return b.apply(c,arguments)
}

}
,a.v=function(b,
c,d)
{
v=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?va:wa;
return v.apply(k,arguments)
}
,a.xa=function(b,c)
{
var d=Array.prototype.slice.call(arguments,1);
return function()
{
var c=Array.prototype.slice.call(arguments);
c.unshift.apply(c,d);
return b.apply(this,c)
}

}
,a.ya=function(b,c)
{
for(var d in c)b[d]=c[d]
}
,a.za=Date.now||function()
{
return+new Date
}
,a.Ba=function(b)
{
if(fa.execScript)fa.execScript(b,"JavaScript");
else if(fa.eval)if(Aa==k&&(fa.eval("var _et_ = 1;
"),
"undefined"!=typeof fa._et_?(delete fa._et_,Aa=j):Aa=n),Aa)fa.eval(b);
else
{
var c=fa.document,d=c.createElement("script");
d.type="text/javascript";
d.defer=n;
d.appendChild(c.createTextNode(b));
c.body.appendChild(d);
c.body.removeChild(d)
}
else f(Error("goog.globalEval not available"))
}
,a.Aa=k,a.w=function(b,c)
{
var d=c||
{

}
,e;
for(e in d)var g=(""+d[e]).replace(/\$/g,"$$$$"),b=b.replace(RegExp("\\
{
\\$"+e+"\\
}
","gi"),g);
return b
}
,a.Ca=function(b,c)
{
var d=b.split("."),e=fa;
!(d[0]in e)&&e.execScript&&e.execScript("var "+
d[0]);
for(var g;
d.length&&(g=d.shift());
)!d.length&&la(c)?e[g]=c:e=e[g]?e[g]:e[g]=
{

}

}
,a.y=function(b,c)
{
function d()
{

}
d.prototype=c.prototype;
b.m=c.prototype;
b.prototype=new d;
b.prototype.constructor=b
}
;
a.Da=function(b)
{
Error.captureStackTrace?Error.captureStackTrace(this,Da):this.stack=Error().stack||"";
b&&(this.message=String(b))
}
;
y(Da,Error);
Da.prototype.name="CustomError";
a.Fa=function(b,c)
{
return 0==b.lastIndexOf(c,0)
}
,a.Ga=function(b,c)
{
for(var d=1;
d<arguments.length;
d++)var e=String(arguments[d]).replace(/\$/g,"$$$$"),b=b.replace(/\%s/,e);
return b
}
,a.Ha=function(b)
{
return/^[\s\xa0]*$/.test(b)
}
,a.Ia=function(b)
{
return b.replace(/(\r\n|\r|\n)+/g," ")
}
,a.Ja=function(b)
{
return b.replace(/(\r\n|\r|\n)/g,"\n")
}
,a.Ka=function(b)
{
return b.replace(/[\t\r\n ]+/g," ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g,"")
}
,a.La=function(b)
{
return b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")
}
,a.Na=
function(b)
{
return b.replace(/[\s\xa0]+$/,"")
}
,a.Oa=function(b)
{
return b.replace(/(\r\n|\r|\n)/g,"<br>")
}
,a.Ua=function(b)
{
if(!Pa.test(b))return b;
-1!=b.indexOf("&")&&(b=b.replace(Qa,"&amp;
"));
-1!=b.indexOf("<")&&(b=b.replace(Ra,"&lt;
"));
-1!=b.indexOf(">")&&(b=b.replace(Sa,"&gt;
"));
-1!=b.indexOf('"')&&(b=b.replace(Ta,"&quot;
"));
return b
}
,a.Qa=/&/g,a.Ra=/</g,a.Sa=/>/g,a.Ta=/\"/g,a.Pa=/[&<>\"]/,a.Ya=function(b)
{
if(Wa(b,"&"))if("document"in fa)var c=
{
"&amp;
":"&","&lt;
":"<","&gt;
":">","&quot;
":'"'
}
,d=
document.createElement("div"),b=b.replace(Xa,function(b,g)
{
var h=c[b];
if(h)return h;
if("#"==g.charAt(0))
{
var l=Number("0"+g.substr(1));
isNaN(l)||(h=String.fromCharCode(l))
}
h||(d.innerHTML=b+" ",h=d.firstChild.nodeValue.slice(0,-1));
return c[b]=h
}
);
else b=b.replace(/&([^;
]+);
/g,function(b,c)
{
switch(c)
{
case "amp":return"&";
case "lt":return"<";
case "gt":return">";
case "quot":return'"';
default:if("#"==c.charAt(0))
{
var d=Number("0"+c.substr(1));
if(!isNaN(d))return String.fromCharCode(d)
}
return b
}

}
);
return b
}
,
a.Xa=/&([^;
\s<&]+);
?/g,a.Za=function(b,c,d)
{
d&&(b=Ya(b));
b.length>c&&(b=b.substring(0,c-3)+"...");
d&&(b=Ua(b));
return b
}
,a.Wa=function(b,c)
{
return-1!=b.indexOf(c)
}
,a.$a=function(b)
{
return String(b).replace(/([-()\[\]
{

}
+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")
}
,a.ab=function(b,c)
{
return Array(c+1).join(b)
}
,a.bb=function(b)
{
var b=la(i)?b.toFixed(i):String(b),c=b.indexOf(".");
-1==c&&(c=b.length);
return ab("0",Math.max(0,2-c))+b
}
,a.cb=function()
{
return Math.floor(2147483648*Math.random()).toString(36)+
Math.abs(Math.floor(2147483648*Math.random())^za()).toString(36)
}
,a.db=function(b,c)
{
for(var d=0,e=La(String(b)).split("."),g=La(String(c)).split("."),h=Math.max(e.length,g.length),l=0;
0==d&&l<h;
l++)
{
var m=e[l]||"",p=g[l]||"",r=RegExp("(\\d*)(\\D*)","g"),x=RegExp("(\\d*)(\\D*)","g");
do
{
var F=r.exec(m)||["","",""],H=x.exec(p)||["","",""];
if(0==F[0].length&&0==H[0].length)break;
d=((0==F[1].length?0:parseInt(F[1],10))<(0==H[1].length?0:parseInt(H[1],10))?-1:(0==F[1].length?0:parseInt(F[1],10))>(0==H[1].length?
0:parseInt(H[1],10))?1:0)||((0==F[2].length)<(0==H[2].length)?-1:(0==F[2].length)>(0==H[2].length)?1:0)||(F[2]<H[2]?-1:F[2]>H[2]?1:0)
}
while(0==d)
}
return d
}
,a.eb=2147483648*Math.random()|0,a.fb=function()
{
return"goog_"+eb++
}
,a.gb=function(b)
{
return String(b).replace(/\-([a-z])/g,function(b,d)
{
return d.toUpperCase()
}
)
}
;
a.z=
{
Cf:function(b)
{
return b[b.length-1]
}

}
;
z.xb=Array.prototype;
z.indexOf=z.xb.indexOf?function(b,c,d)
{
return z.xb.indexOf.call(b,c,d)
}
:function(b,c,d)
{
d=d==k?0:0>d?Math.max(0,b.length+d):d;
if(oa(b))return!oa(c)||1!=c.length?-1:b.indexOf(c,d);
for(;
d<b.length;
d++)if(d in b&&b[d]===c)return d;
return-1
}
;

z.lastIndexOf=z.xb.lastIndexOf?function(b,c,d)
{
return z.xb.lastIndexOf.call(b,c,d==k?b.length-1:d)
}
:function(b,c,d)
{
d=d==k?b.length-1:d;
0>d&&(d=Math.max(0,b.length+d));
if(oa(b))return!oa(c)||1!=c.length?-1:b.lastIndexOf(c,d);
for(;
0<=d;
d--)if(d in b&&b[d]===c)return d;
return-1
}
;
z.forEach=z.xb.forEach?function(b,c,d)
{
z.xb.forEach.call(b,c,d)
}
:function(b,c,d)
{
for(var e=b.length,g=oa(b)?b.split(""):b,h=0;
h<e;
h++)h in g&&c.call(d,g[h],h,b)
}
;

z.IN=function(b,c)
{
for(var d=oa(b)?b.split(""):b,e=b.length-1;
0<=e;
--e)e in d&&c.call(i,d[e],e,b)
}
;
z.filter=z.xb.filter?function(b,c,d)
{
return z.xb.filter.call(b,c,d)
}
:function(b,c,d)
{
for(var e=b.length,g=[],h=0,l=oa(b)?b.split(""):b,m=0;
m<e;
m++)if(m in l)
{
var p=l[m];
c.call(d,p,m,b)&&(g[h++]=p)
}
return g
}
;
z.map=z.xb.map?function(b,c,d)
{
return z.xb.map.call(b,c,d)
}
:function(b,c,d)
{
for(var e=b.length,g=Array(e),h=oa(b)?b.split(""):b,l=0;
l<e;
l++)l in h&&(g[l]=c.call(d,h[l],l,b));
return g
}
;

z.reduce=function(b,c,d,e)
{
if(b.reduce)return e?b.reduce(v(c,e),d):b.reduce(c,d);
var g=d;
z.forEach(b,function(d,l)
{
g=c.call(e,g,d,l,b)
}
);
return g
}
;
z.reduceRight=function(b,c,d,e)
{
if(b.reduceRight)return e?b.reduceRight(v(c,e),d):b.reduceRight(c,d);
var g=d;
z.IN(b,function(d,l)
{
g=c.call(e,g,d,l,b)
}
);
return g
}
;
z.some=z.xb.some?function(b,c,d)
{
return z.xb.some.call(b,c,d)
}
:function(b,c,d)
{
for(var e=b.length,g=oa(b)?b.split(""):b,h=0;
h<e;
h++)if(h in g&&c.call(d,g[h],h,b))return j;
return n
}
;

z.every=z.xb.every?function(b,c,d)
{
return z.xb.every.call(b,c,d)
}
:function(b,c,d)
{
for(var e=b.length,g=oa(b)?b.split(""):b,h=0;
h<e;
h++)if(h in g&&!c.call(d,g[h],h,b))return n;
return j
}
;
z.count=function(b,c,d)
{
var e=0;
z.forEach(b,function(b,h,l)
{
c.call(d,b,h,l)&&++e
}
,d);
return e
}
;
z.find=function(b,c,d)
{
c=z.Jw(b,c,d);
return 0>c?k:oa(b)?b.charAt(c):b[c]
}
;
z.Jw=function(b,c,d)
{
for(var e=b.length,g=oa(b)?b.split(""):b,h=0;
h<e;
h++)if(h in g&&c.call(d,g[h],h,b))return h;
return-1
}
;

z.KZ=function(b,c,d)
{
c=z.Kw(b,c,d);
return 0>c?k:oa(b)?b.charAt(c):b[c]
}
;
z.Kw=function(b,c,d)
{
for(var e=oa(b)?b.split(""):b,g=b.length-1;
0<=g;
g--)if(g in e&&c.call(d,e[g],g,b))return g;
return-1
}
;
z.contains=function(b,c)
{
return 0<=z.indexOf(b,c)
}
;
z.Hb=function(b)
{
return 0==b.length
}
;
z.clear=function(b)
{
if(!ma(b))for(var c=b.length-1;
0<=c;
c--)delete b[c];
b.length=0
}
;
z.ws=function(b,c)
{
z.contains(b,c)||b.push(c)
}
;
z.Ao=function(b,c,d)
{
z.splice(b,d,0,c)
}
;

z.d_=function(b,c,d)
{
xa(z.splice,b,d,0).apply(k,c)
}
;
z.insertBefore=function(b,c,d)
{
var e;
2==arguments.length||0>(e=z.indexOf(b,d))?b.push(c):z.Ao(b,c,e)
}
;
z.remove=function(b,c)
{
var d=z.indexOf(b,c),e;
(e=0<=d)&&z.Xz(b,d);
return e
}
;
z.Xz=function(b,c)
{
return 1==z.xb.splice.call(b,c,1).length
}
;
z.TT=function(b,c)
{
var d=z.Jw(b,c,i);
return 0<=d?(z.Xz(b,d),j):n
}
;
z.concat=function(b)
{
return z.xb.concat.apply(z.xb,arguments)
}
;

z.toArray=function(b)
{
var c=b.length;
if(0<c)
{
for(var d=Array(c),e=0;
e<c;
e++)d[e]=b[e];
return d
}
return[]
}
;
z.clone=z.toArray;
z.extend=function(b,c)
{
for(var d=1;
d<arguments.length;
d++)
{
var e=arguments[d],g;
if(ma(e)||(g=na(e))&&Object.prototype.hasOwnProperty.call(e,"callee"))b.push.apply(b,e);
else if(g)for(var h=b.length,l=e.length,m=0;
m<l;
m++)b[h+m]=e[m];
else b.push(e)
}

}
;
z.splice=function(b,c,d,e)
{
return z.xb.splice.apply(b,z.slice(arguments,1))
}
;

z.slice=function(b,c,d)
{
return 2>=arguments.length?z.xb.slice.call(b,c):z.xb.slice.call(b,c,d)
}
;
z.Yz=function(b,c)
{
for(var d=c||b,e=
{

}
,g=0,h=0;
h<b.length;
)
{
var l=b[h++],m=ra(l)?"o"+ua(l):(typeof l).charAt(0)+l;
Object.prototype.hasOwnProperty.call(e,m)||(e[m]=j,d[g++]=l)
}
d.length=g
}
;
z.KC=function(b,c,d)
{
return z.LC(b,d||z.fj,n,c)
}
;
z.fZ=function(b,c,d)
{
return z.LC(b,c,j,i,d)
}
;

z.LC=function(b,c,d,e,g)
{
for(var h=0,l=b.length,m;
h<l;
)
{
var p=h+l>>1,r;
r=d?c.call(g,b[p],p,b):c(e,b[p]);
0<r?h=p+1:(l=p,m=!r)
}
return m?h:~h
}
;
z.sort=function(b,c)
{
z.xb.sort.call(b,c||z.fj)
}
;
z.b0=function(b,c)
{
for(var d=0;
d<b.length;
d++)b[d]=
{
index:d,value:b[d]
}
;
var e=c||z.fj;
z.sort(b,function(b,c)
{
return e(b.value,c.value)||b.index-c.index
}
);
for(d=0;
d<b.length;
d++)b[d]=b[d].value
}
;
z.KI=function(b,c,d)
{
var e=d||z.fj;
z.sort(b,function(b,d)
{
return e(b[c],d[c])
}
)
}
;

z.k_=function(b,c,d)
{
for(var c=c||z.fj,e=1;
e<b.length;
e++)
{
var g=c(b[e-1],b[e]);
if(0<g||0==g&&d)return n
}
return j
}
;
z.dg=function(b,c,d)
{
if(!na(b)||!na(c)||b.length!=c.length)return n;
for(var e=b.length,d=d||z.WM,g=0;
g<e;
g++)if(!d(b[g],c[g]))return n;
return j
}
;
z.sZ=function(b,c,d)
{
return z.dg(b,c,d)
}
;
z.tZ=function(b,c,d)
{
for(var d=d||z.fj,e=Math.min(b.length,c.length),g=0;
g<e;
g++)
{
var h=d(b[g],c[g]);
if(0!=h)return h
}
return z.fj(b.length,c.length)
}
;
z.fj=function(b,c)
{
return b>c?1:b<c?-1:0
}
;

z.WM=function(b,c)
{
return b===c
}
;
z.dZ=function(b,c,d)
{
d=z.KC(b,c,d);
return 0>d?(z.Ao(b,c,-(d+1)),j):n
}
;
z.eZ=function(b,c,d)
{
c=z.KC(b,c,d);
return 0<=c?z.Xz(b,c):n
}
;
z.mZ=function(b,c)
{
for(var d=
{

}
,e=0;
e<b.length;
e++)
{
var g=b[e],h=c(g,e,b);
la(h)&&(d[h]||(d[h]=[])).push(g)
}
return d
}
;
z.ju=function(b,c,d)
{
var e=
{

}
;
z.forEach(b,function(g,h)
{
e[c.call(d,g,h,b)]=g
}
);
return e
}
;
z.repeat=function(b,c)
{
for(var d=[],e=0;
e<c;
e++)d[e]=b;
return d
}
;

z.flatten=function(b)
{
for(var c=[],d=0;
d<arguments.length;
d++)
{
var e=arguments[d];
ma(e)?c.push.apply(c,z.flatten.apply(k,e)):c.push(e)
}
return c
}
;
z.rotate=function(b,c)
{
b.length&&(c%=b.length,0<c?z.xb.unshift.apply(b,b.splice(-c,c)):0>c&&z.xb.push.apply(b,b.splice(0,-c)));
return b
}
;
z.s0=function(b)
{
if(!arguments.length)return[];
for(var c=[],d=0;
;
d++)
{
for(var e=[],g=0;
g<arguments.length;
g++)
{
var h=arguments[g];
if(d>=h.length)return c;
e.push(h[d])
}
c.push(e)
}

}
;

z.ZU=function(b)
{
for(var c=Math.random,d=b.length-1;
0<d;
d--)
{
var e=Math.floor(c()*(d+1)),g=b[d];
b[d]=b[e];
b[e]=g
}

}
;
a.hb=void 0,a.ib=void 0,a.jb=void 0,a.kb=void 0,a.lb=void 0,a.mb=void 0,a.nb=void 0,a.ob=void 0,a.pb=function()
{
return fa.navigator?fa.navigator.userAgent:k
}
,a.qb=function()
{
return fa.navigator
}
;
lb=kb=jb=ib=hb=n;
a.rb=void 0;
if(rb=pb())
{
var sb=qb();
hb=0==rb.indexOf("Opera");
ib=!hb&&-1!=rb.indexOf("MSIE");
kb=(jb=!hb&&-1!=rb.indexOf("WebKit"))&&-1!=rb.indexOf("Mobile");
lb=!hb&&!jb&&"Gecko"==sb.product
}
a.tb=hb,a.A=ib,a.B=lb,a.C=jb,a.ub=kb,a.vb=void 0,a.wb=qb();
vb=wb&&wb.platform||"";
mb=Wa(vb,"Mac");

nb=Wa(vb,"Win");
ob=Wa(vb,"Linux");
a.xb=!!qb()&&Wa(qb().appVersion||"","X11"),a.yb=function()
{
var b=fa.document;
return b?b.documentMode:i
}
,a.zb=void 0;
a:
{
var Ab="",Bb;
if(tb&&fa.opera)var Cb=fa.opera.version,Ab="function"==typeof Cb?Cb():Cb;
else if(B?Bb=/rv\:([^\);
]+)(\)|;
)/:A?Bb=/MSIE\s+([^\);
]+)(\)|;
)/:C&&(Bb=/WebKit\/(\S+)/),Bb)var Db=Bb.exec(pb()),Ab=Db?Db[1]:"";
if(A)
{
var Eb=yb();
if(Eb>parseFloat(Ab))
{
zb=String(Eb);
break a
}

}
zb=Ab
}

a.Fb=
{

}
,a.Gb=function(b)
{
return Fb[b]||(Fb[b]=0<=db(zb,b))
}
,a.Ib=function(b)
{
return A&&Hb>=b
}
,a.Jb=fa.document,a.Hb=!Jb||!A?i:yb()||("CSS1Compat"==Jb.compatMode?parseInt(zb,10):5);
a.Kb=void 0,a.Lb=!A||Ib(9),a.Mb=!B&&!A||A&&Ib(9)||B&&Gb("1.9.1"),a.Nb=A&&!Gb("9");
a.D=
{
set:function(b,c)
{
b.className=c
}
,get:function(b)
{
b=b.className;
return oa(b)&&b.match(/\S+/g)||[]
}
,add:function(b,c)
{
var d=D.get(b),e=z.slice(arguments,1),g=d.length+e.length;
D.jC(d,e);
b.className=d.join(" ");
return d.length==g
}
,remove:function(b,c)
{
var d=D.get(b),e=z.slice(arguments,1),g=D.yE(d,e);
b.className=g.join(" ");
return g.length==d.length-e.length
}
,jC:function(b,c)
{
for(var d=0;
d<c.length;
d++)z.contains(b,c[d])||b.push(c[d])
}
,yE:function(b,c)
{
return z.filter(b,function(b)
{
return!z.contains(c,
b)
}
)
}
,qV:function(b,c,d)
{
for(var e=D.get(b),g=n,h=0;
h<e.length;
h++)e[h]==c&&(z.splice(e,h--,1),g=j);
g&&(e.push(d),b.className=e.join(" "));
return g
}
,Ti:function(b,c,d)
{
var e=D.get(b);
oa(c)?z.remove(e,c):ma(c)&&(e=D.yE(e,c));
oa(d)&&!z.contains(e,d)?e.push(d):ma(d)&&D.jC(e,d);
b.className=e.join(" ")
}
,has:function(b,c)
{
return z.contains(D.get(b),c)
}
,enable:function(b,c,d)
{
d?D.add(b,c):D.remove(b,c)
}
,toggle:function(b,c)
{
var d=!D.has(b,c);
D.enable(b,c,d);
return d
}

}
;
a.Ob=function(b,c)
{
this.x=la(b)?b:0;
this.y=la(c)?c:0
}
;
Ob.prototype.clone=function()
{
return new Ob(this.x,this.y)
}
;
a.Pb=function(b,c)
{
return new Ob(b.x-c.x,b.y-c.y)
}
;
a.Qb=function(b,c)
{
this.width=b;
this.height=c
}
,a.Rb=function(b,c)
{
return b==c?j:!b||!c?n:b.width==c.width&&b.height==c.height
}
;
t=Qb.prototype;
t.clone=function()
{
return new Qb(this.width,this.height)
}
;
t.Hb=function()
{
return!(this.width*this.height)
}
;
t.ceil=function()
{
this.width=Math.ceil(this.width);
this.height=Math.ceil(this.height);
return this
}
;
t.floor=function()
{
this.width=Math.floor(this.width);
this.height=Math.floor(this.height);
return this
}
;

t.round=function()
{
this.width=Math.round(this.width);
this.height=Math.round(this.height);
return this
}
;
a.E=
{
forEach:function(b,c,d)
{
for(var e in b)c.call(d,b[e],e,b)
}
,filter:function(b,c,d)
{
var e=
{

}
,g;
for(g in b)c.call(d,b[g],g,b)&&(e[g]=b[g]);
return e
}
,map:function(b,c,d)
{
var e=
{

}
,g;
for(g in b)e[g]=c.call(d,b[g],g,b);
return e
}
,some:function(b,c,d)
{
for(var e in b)if(c.call(d,b[e],e,b))return j;
return n
}
,every:function(b,c,d)
{
for(var e in b)if(!c.call(d,b[e],e,b))return n;
return j
}
,Va:function(b)
{
var c=0,d;
for(d in b)c++;
return c
}
,RZ:function(b)
{
for(var c in b)return c
}
,SZ:function(b)
{
for(var c in b)return b[c]
}
,
contains:function(b,c)
{
return E.Ng(b,c)
}
,Ja:function(b)
{
var c=[],d=0,e;
for(e in b)c[d++]=b[e];
return c
}
,Fb:function(b)
{
var c=[],d=0,e;
for(e in b)c[d++]=e;
return c
}
,XZ:function(b,c)
{
for(var d=na(c),e=d?c:arguments,d=d?0:1;
d<e.length&&!(b=b[e[d]],!la(b));
d++);
return b
}
,Pd:function(b,c)
{
return c in b
}
,Ng:function(b,c)
{
for(var d in b)if(b[d]==c)return j;
return n
}
,kE:function(b,c,d)
{
for(var e in b)if(c.call(d,b[e],e,b))return e
}
,Mr:function(b,c,d)
{
return(c=E.kE(b,c,d))&&b[c]
}
,Hb:function(b)
{
for(var c in b)return n;

return j
}
,clear:function(b)
{
for(var c in b)delete b[c]
}
,remove:function(b,c)
{
var d;
(d=c in b)&&delete b[c];
return d
}
,add:function(b,c,d)
{
c in b&&f(Error('The object already contains the key "'+c+'"'));
E.set(b,c,d)
}
,get:function(b,c,d)
{
return c in b?b[c]:d
}
,set:function(b,c,d)
{
b[c]=d
}
,Z_:function(b,c,d)
{
return c in b?b[c]:b[c]=d
}
,clone:function(b)
{
var c=
{

}
,d;
for(d in b)c[d]=b[d];
return c
}
,ZV:function(b)
{
var c=ja(b);
if("object"==c||"array"==c)
{
if(b.clone)return b.clone();
var c="array"==c?[]:
{

}
,d;
for(d in b)c[d]=
E.ZV(b[d]);
return c
}
return b
}
,Ym:function(b)
{
var c=
{

}
,d;
for(d in b)c[b[d]]=d;
return c
}
,YB:"constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),extend:function(b,c)
{
for(var d,e,g=1;
g<arguments.length;
g++)
{
e=arguments[g];
for(d in e)b[d]=e[d];
for(var h=0;
h<E.YB.length;
h++)d=E.YB[h],Object.prototype.hasOwnProperty.call(e,d)&&(b[d]=e[d])
}

}
,create:function(b)
{
var c=arguments.length;
if(1==c&&ma(arguments[0]))return E.create.apply(k,arguments[0]);
c%2&&
f(Error("Uneven number of arguments"));
for(var d=
{

}
,e=0;
e<c;
e+=2)d[arguments[e]]=arguments[e+1];
return d
}
,Uh:function(b)
{
var c=arguments.length;
if(1==c&&ma(arguments[0]))return E.Uh.apply(k,arguments[0]);
for(var d=
{

}
,e=0;
e<c;
e++)d[arguments[e]]=j;
return d
}
,xZ:function(b)
{
var c=b;
Object.isFrozen&&!Object.isFrozen(b)&&(c=Object.create(b),Object.freeze(c));
return c
}
,j_:function(b)
{
return!!Object.isFrozen&&Object.isFrozen(b)
}

}
;
a.Ub=function(b)
{
return b?new Sb(Tb(b)):Kb||(Kb=new Sb)
}
,a.I=function(b)
{
return oa(b)?document.getElementById(b):b
}
,a.Wb=function(b,c,d)
{
return Vb(document,b,c,d)
}
,a.Xb=function(b,c)
{
var d=c||document;
return d.querySelectorAll&&d.querySelector?d.querySelectorAll("."+b):d.getElementsByClassName?d.getElementsByClassName(b):Vb(document,"*",b,c)
}
,a.J=function(b,c)
{
var d=c||document,e=k;
return(e=d.querySelectorAll&&d.querySelector?d.querySelector("."+b):Xb(b,c)[0])||k
}
,a.Vb=function(b,c,d,e)
{
b=e||b;
c=
c&&"*"!=c?c.toUpperCase():"";
if(b.querySelectorAll&&b.querySelector&&(c||d))return b.querySelectorAll(c+(d?"."+d:""));
if(d&&b.getElementsByClassName)
{
b=b.getElementsByClassName(d);
if(c)
{
for(var e=
{

}
,g=0,h=0,l;
l=b[h];
h++)c==l.nodeName&&(e[g++]=l);
e.length=g;
return e
}
return b
}
b=b.getElementsByTagName(c||"*");
if(d)
{
e=
{

}
;
for(h=g=0;
l=b[h];
h++)c=l.className,"function"==typeof c.split&&z.contains(c.split(/\s+/),d)&&(e[g++]=l);
e.length=g;
return e
}
return b
}
,a.Zb=function(b,c)
{
E.forEach(c,function(c,e)
{
"style"==
e?b.style.cssText=c:"class"==e?b.className=c:"for"==e?b.htmlFor=c:e in Yb?b.setAttribute(Yb[e],c):Fa(e,"aria-")||Fa(e,"data-")?b.setAttribute(e,c):b[e]=c
}
)
}
,a.Yb=
{
cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"
}
,a.$b=function(b)
{
b=(b||window).document;
b="CSS1Compat"==b.compatMode?b.documentElement:b.body;
return new Qb(b.clientWidth,
b.clientHeight)
}
,a.bc=function(b)
{
var c=ac(b),b=b.parentWindow||b.defaultView;
return new Ob(b.pageXOffset||c.scrollLeft,b.pageYOffset||c.scrollTop)
}
,a.ac=function(b)
{
return!C&&"CSS1Compat"==b.compatMode?b.documentElement:b.body
}
,a.cc=function(b)
{
return b?b.parentWindow||b.defaultView:window
}
,a.K=function(b,c,d)
{
return dc(document,arguments)
}
,a.dc=function(b,c)
{
var d=c[0],e=c[1];
if(!Lb&&e&&(e.name||e.type))
{
d=["<",d];
e.name&&d.push(' name="',Ua(e.name),'"');
if(e.type)
{
d.push(' type="',Ua(e.type),'"');

var g=
{

}
;
E.extend(g,e);
delete g.type;
e=g
}
d.push(">");
d=d.join("")
}
d=b.createElement(d);
e&&(oa(e)?d.className=e:ma(e)?D.add.apply(k,[d].concat(e)):Zb(d,e));
2<c.length&&ec(b,d,c,2);
return d
}
,a.ec=function(b,c,d,e)
{
function g(d)
{
d&&c.appendChild(oa(d)?b.createTextNode(d):d)
}
for(;
e<d.length;
e++)
{
var h=d[e];
na(h)&&!(ra(h)&&0<h.nodeType)?z.forEach(fc(h)?z.toArray(h):h,g):g(h)
}

}
,a.hc=function(b)
{
return gc(document,b)
}
,a.gc=function(b,c)
{
var d=b.createElement("div");
A?(d.innerHTML="<br>"+c,d.removeChild(d.firstChild)):
d.innerHTML=c;
if(1==d.childNodes.length)return d.removeChild(d.firstChild);
for(var e=b.createDocumentFragment();
d.firstChild;
)e.appendChild(d.firstChild);
return e
}
,a.ic=function(b)
{
if(1!=b.nodeType)return n;
switch(b.tagName)
{
case "APPLET":case "AREA":case "BASE":case "BR":case "COL":case "COMMAND":case "EMBED":case "FRAME":case "HR":case "IMG":case "INPUT":case "IFRAME":case "ISINDEX":case "KEYGEN":case "LINK":case "NOFRAMES":case "NOSCRIPT":case "META":case "OBJECT":case "PARAM":case "SCRIPT":case "SOURCE":case "STYLE":case "TRACK":case "WBR":return n
}
return j
}
,
a.jc=function(b,c)
{
ec(Tb(b),b,arguments,1)
}
,a.kc=function(b)
{
for(var c;
c=b.firstChild;
)b.removeChild(c)
}
,a.lc=function(b,c)
{
c.parentNode&&c.parentNode.insertBefore(b,c)
}
,a.mc=function(b,c)
{
c.parentNode&&c.parentNode.insertBefore(b,c.nextSibling)
}
,a.nc=function(b,c,d)
{
b.insertBefore(c,b.childNodes[d]||k)
}
,a.L=function(b)
{
return b&&b.parentNode?b.parentNode.removeChild(b):k
}
,a.oc=function(b,c)
{
var d=c.parentNode;
d&&d.replaceChild(b,c)
}
,a.pc=function(b)
{
var c,d=b.parentNode;
if(d&&11!=d.nodeType)
{
if(b.removeNode)return b.removeNode(n);

for(;
c=b.firstChild;
)d.insertBefore(c,b);
return L(b)
}

}
,a.qc=function(b)
{
return Mb&&b.children!=i?b.children:z.filter(b.childNodes,function(b)
{
return 1==b.nodeType
}
)
}
,a.sc=function(b)
{
return b.firstElementChild!=i?b.firstElementChild:rc(b.firstChild,j)
}
,a.tc=function(b)
{
return b.previousElementSibling!=i?b.previousElementSibling:rc(b.previousSibling,n)
}
,a.rc=function(b,c)
{
for(;
b&&1!=b.nodeType;
)b=c?b.nextSibling:b.previousSibling;
return b
}
,a.uc=function(b,c)
{
if(b.contains&&1==c.nodeType)return b==
c||b.contains(c);
if("undefined"!=typeof b.compareDocumentPosition)return b==c||Boolean(b.compareDocumentPosition(c)&16);
for(;
c&&b!=c;
)c=c.parentNode;
return c==b
}
,a.xc=function(b,c)
{
if(b==c)return 0;
if(b.compareDocumentPosition)return b.compareDocumentPosition(c)&2?1:-1;
if(A&&!Ib(9))
{
if(9==b.nodeType)return-1;
if(9==c.nodeType)return 1
}
if("sourceIndex"in b||b.parentNode&&"sourceIndex"in b.parentNode)
{
var d=1==b.nodeType,e=1==c.nodeType;
if(d&&e)return b.sourceIndex-c.sourceIndex;
var g=b.parentNode,h=
c.parentNode;
return g==h?vc(b,c):!d&&uc(g,c)?-1*wc(b,c):!e&&uc(h,b)?wc(c,b):(d?b.sourceIndex:g.sourceIndex)-(e?c.sourceIndex:h.sourceIndex)
}
e=Tb(b);
d=e.createRange();
d.selectNode(b);
d.collapse(j);
e=e.createRange();
e.selectNode(c);
e.collapse(j);
return d.compareBoundaryPoints(fa.Range.START_TO_END,e)
}
,a.wc=function(b,c)
{
var d=b.parentNode;
if(d==c)return-1;
for(var e=c;
e.parentNode!=d;
)e=e.parentNode;
return vc(e,b)
}
,a.vc=function(b,c)
{
for(var d=c;
d=d.previousSibling;
)if(d==b)return-1;
return 1
}
,a.yc=function(b)
{
var c,
d=arguments.length;
if(d)
{
if(1==d)return arguments[0]
}
else return k;
var e=[],g=Infinity;
for(c=0;
c<d;
c++)
{
for(var h=[],l=arguments[c];
l;
)h.unshift(l),l=l.parentNode;
e.push(h);
g=Math.min(g,h.length)
}
h=k;
for(c=0;
c<g;
c++)
{
for(var l=e[0][c],m=1;
m<d;
m++)if(l!=e[m][c])return h;
h=l
}
return h
}
,a.Tb=function(b)
{
return 9==b.nodeType?b:b.ownerDocument||b.document
}
,a.zc=function(b,c)
{
if("textContent"in b)b.textContent=c;
else if(b.firstChild&&3==b.firstChild.nodeType)
{
for(;
b.lastChild!=b.firstChild;
)b.removeChild(b.lastChild);

b.firstChild.data=c
}
else kc(b),b.appendChild(Tb(b).createTextNode(c))
}
,a.Bc=function(b,c)
{
var d=[];
Ac(b,c,d,n);
return d
}
,a.Ac=function(b,c,d,e)
{
if(b!=k)for(b=b.firstChild;
b;
)
{
if(c(b)&&(d.push(b),e)||Ac(b,c,d,e))return j;
b=b.nextSibling
}
return n
}
,a.Cc=
{
SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1
}
,a.Dc=
{
IMG:" ",BR:"\n"
}
,a.Ec=function(b)
{
var c=b.getAttributeNode("tabindex");
return c&&c.specified?(b=b.tabIndex,pa(b)&&0<=b&&32768>b):n
}
,a.Fc=function(b,c)
{
c?b.tabIndex=0:(b.tabIndex=-1,b.removeAttribute("tabIndex"))
}
,
a.Hc=function(b)
{
if(Nb&&"innerText"in b)b=Ja(b.innerText);
else
{
var c=[];
Gc(b,c,j);
b=c.join("")
}
b=b.replace(/ \xAD /g," ").replace(/\xAD/g,"");
b=b.replace(/\u200B/g,"");
Nb||(b=b.replace(/ +/g," "));
" "!=b&&(b=b.replace(/^\s*/,""));
return b
}
,a.Ic=function(b)
{
var c=[];
Gc(b,c,n);
return c.join("")
}
,a.Gc=function(b,c,d)
{
if(!(b.nodeName in Cc))if(3==b.nodeType)d?c.push(String(b.nodeValue).replace(/(\r\n|\r|\n)/g,"")):c.push(b.nodeValue);
else if(b.nodeName in Dc)c.push(Dc[b.nodeName]);
else for(b=b.firstChild;
b;
)Gc(b,
c,d),b=b.nextSibling
}
,a.fc=function(b)
{
if(b&&"number"==typeof b.length)
{
if(ra(b))return"function"==typeof b.item||"string"==typeof b.item;
if(qa(b))return"function"==typeof b.item
}
return n
}
,a.Kc=function(b,c,d)
{
if(!c&&!d)return k;
var e=c?c.toUpperCase():k;
return Jc(b,function(b)
{
return(!e||b.nodeName==e)&&(!d||D.has(b,d))
}
,j)
}
,a.Jc=function(b,c,d,e)
{
d||(b=b.parentNode);
for(var d=e==k,g=0;
b&&(d||g<=e);
)
{
if(c(b))return b;
b=b.parentNode;
g++
}
return k
}
,a.Lc=function(b)
{
try
{
return b&&b.activeElement
}
catch(c)
{

}
return k
}
,
a.Sb=function(b)
{
this.Fa=b||fa.document||document
}
;
t=Sb.prototype;
t.J=Ub;
t.wa=q("Fa");
t.h=function(b)
{
return oa(b)?this.Fa.getElementById(b):b
}
;
t.yu=Sb.prototype.h;
t.bi=function(b,c)
{
return J(b,c||this.Fa)
}
;
t.o=function(b,c,d)
{
return dc(this.Fa,arguments)
}
;
t.createElement=function(b)
{
return this.Fa.createElement(b)
}
;
t.createTextNode=function(b)
{
return this.Fa.createTextNode(b)
}
;
t.Rv=u(21);
a.Mc=function(b)
{
return"CSS1Compat"==b.Fa.compatMode
}
;
t.Sa=function()
{
return this.Fa.parentWindow||this.Fa.defaultView
}
;

a.Nc=function(b)
{
return bc(b.Fa)
}
;
t.Or=function(b)
{
return Lc(b||this.Fa)
}
;
t.appendChild=function(b,c)
{
b.appendChild(c)
}
;
t.append=jc;
t.zt=kc;
t.Bo=lc;
t.gy=mc;
t.removeNode=L;
t.BN=pc;
t.xE=qc;
t.zE=sc;
t.contains=uc;
t.PN=Kc;
a.Oc=function(b,c)
{
b.setAttribute("role",c)
}
,a.Pc=function(b,c,d)
{
b.setAttribute("aria-"+c,d)
}
,a.Qc=function(b,c)
{
var d=b.getAttribute("aria-"+c);
return d===j||d===n?d?"true":"false":d?String(d):""
}
;
a.M=function()
{
0!=Rc&&(this.yZ=Error().stack,Sc[ua(this)]=this)
}
,a.Rc=0,a.Sc=
{

}
;
M.prototype.$f=n;
M.prototype.F=function()
{
if(!this.$f&&(this.$f=j,this.p(),0!=Rc))
{
var b=ua(this);
delete Sc[b]
}

}
;
a.Tc=function(b,c)
{
b.tr||(b.tr=[]);
b.tr.push(c)
}
;
M.prototype.p=function()
{
this.tr&&Uc.apply(k,this.tr);
if(this.dp)for(;
this.dp.length;
)this.dp.shift()()
}
;
a.Vc=function(b)
{
b&&"function"==typeof b.F&&b.F()
}
,a.Uc=function(b)
{
for(var c=0,d=arguments.length;
c<d;
++c)
{
var e=arguments[c];
na(e)?Uc.apply(k,e):Vc(e)
}

}
;
a.Wc=
{
dn:"activedescendant",JW:"atomic",QJ:"autocomplete",RW:"busy",vq:"checked",YW:"controls",bX:"describedby",WJ:"disabled",eX:"dropeffect",RB:"expanded",hX:"flowto",oX:"grabbed",Vk:"haspopup",uX:"hidden",BX:"invalid",xq:"label",Lu:"labelledby",HX:"level",KX:"live",TX:"multiline",UX:"multiselectable",$X:"orientation",bY:"owns",dY:"posinset",iK:"pressed",jY:"readonly",mY:"relevant",nY:"required",mK:"selected",yY:"setsize",AY:"sort",FK:"valuemax",GK:"valuemin",HK:"valuenow",XY:"valuetext"
}
,a.Xc=
{
FW:"alert",
GW:"alertdialog",HW:"application",IW:"article",LW:"banner",uq:"button",TJ:"checkbox",UW:"columnheader",UJ:"combobox",WW:"complementary",VJ:"dialog",cX:"directory",dX:"document",mX:"form",qX:"grid",rX:"gridcell",sX:"group",tX:"heading",zX:"img",aK:"link",IX:"list",SB:"listbox",JX:"listitem",MX:"log",bK:"main",NX:"marquee",OX:"math",cK:"menu",RX:"menubar",dK:"menuitem",eK:"menuitemcheckbox",fK:"menuitemradio",VX:"navigation",XX:"note",WB:"option",eY:"presentation",fY:"progressbar",hY:"radio",iY:"radiogroup",
lY:"region",pY:"row",qY:"rowgroup",rY:"rowheader",uY:"scrollbar",vY:"search",oK:"separator",tK:"slider",BY:"spinbutton",DY:"status",aC:"tab",AK:"tablist",HY:"tabpanel",IY:"textbox",JY:"timer",CK:"toolbar",LY:"tooltip",MY:"tree",NY:"treegrid",OY:"treeitem"
}
;
a.Yc=function(b)
{
b=String(b);
if(/^\s*$/.test(b)?0:/^[\],:
{

}
\s\u2028\u2029]*$/.test(b.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try
{
return eval("("+b+")")
}
catch(c)
{

}
f(Error("Invalid JSON string: "+b))
}
,a.Zc=function(b)
{
return eval("("+b+")")
}
,a.ad=function(b,c)
{
return(new $c(c)).serialize(b)
}
,a.$c=function(b)
{
this.Dt=b
}
;

$c.prototype.serialize=function(b)
{
var c=[];
bd(this,b,c);
return c.join("")
}
;

a.bd=function(b,c,d)
{
switch(typeof c)
{
case "string":cd(c,d);
break;
case "number":d.push(isFinite(c)&&!isNaN(c)?c:"null");
break;
case "boolean":d.push(c);
break;
case "undefined":d.push("null");
break;
case "object":if(c==k)
{
d.push("null");
break
}
if(ma(c))
{
b.serializeArray(c,d);
break
}
d.push("
{
");
var e="",g;
for(g in c)if(Object.prototype.hasOwnProperty.call(c,g))
{
var h=c[g];
"function"!=typeof h&&(d.push(e),cd(g,d),d.push(":"),bd(b,b.Dt?b.Dt.call(c,g,h):h,d),e=",")
}
d.push("
}
");
break;
case "function":break;
default:f(Error("Unknown type: "+
typeof c))
}

}
,a.dd=
{
'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"
}
,a.ed=/\uffff/.test("￿")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,a.cd=function(b,c)
{
c.push('"',b.replace(ed,function(b)
{
if(b in dd)return dd[b];
var c=b.charCodeAt(0),g="\\u";
16>c?g+="000":256>c?g+="00":4096>c&&(g+="0");
return dd[b]=g+c.toString(16)
}
),'"')
}
;

$c.prototype.serializeArray=function(b,c)
{
var d=b.length;
c.push("[");
for(var e="",g=0;
g<d;
g++)c.push(e),e=b[g],bd(this,this.Dt?this.Dt.call(b,String(g),e):e,c),e=",";
c.push("]")
}
;
a.fd=!A||Ib(9),a.gd=!A||Ib(9),a.hd=A&&!Gb("9");
!C||Gb("528");
B&&Gb("1.9b")||A&&Gb("8")||tb&&Gb("9.5")||C&&Gb("528");
B&&!Gb("8")||A&&Gb("9");
a.id=function(b,c)
{
this.type=b;
this.currentTarget=this.target=c
}
;
t=id.prototype;
t.p=ba();
t.F=ba();
t.ik=n;
t.defaultPrevented=n;
t.Gt=j;
t.stopPropagation=function()
{
this.ik=j
}
;
t.preventDefault=function()
{
this.defaultPrevented=j;
this.Gt=n
}
;
a.jd=function(b)
{
b.preventDefault()
}
;
a.kd=A?"focusin":"DOMFocusIn";
a.ld=function(b)
{
ld[" "](b);
return b
}
;
ld[" "]=ha;
a.md=function(b,c)
{
b&&this.v(b,c)
}
;
y(md,id);
a.nd=[1,4,2];
t=md.prototype;
t.target=k;
t.relatedTarget=k;
t.offsetX=0;
t.offsetY=0;
t.clientX=0;
t.clientY=0;
t.screenX=0;
t.screenY=0;
t.button=0;
t.keyCode=0;
t.charCode=0;
t.ctrlKey=n;
t.altKey=n;
t.shiftKey=n;
t.metaKey=n;
t.Iz=n;
t.Yb=k;

t.v=function(b,c)
{
var d=this.type=b.type;
id.call(this,d);
this.target=b.target||b.srcElement;
this.currentTarget=c;
var e=b.relatedTarget;
if(e)
{
if(B)
{
var g;
a:
{
try
{
ld(e.nodeName);
g=j;
break a
}
catch(h)
{

}
g=n
}
g||(e=k)
}

}
else"mouseover"==d?e=b.fromElement:"mouseout"==d&&(e=b.toElement);
this.relatedTarget=e;
this.offsetX=C||b.offsetX!==i?b.offsetX:b.layerX;
this.offsetY=C||b.offsetY!==i?b.offsetY:b.layerY;
this.clientX=b.clientX!==i?b.clientX:b.pageX;
this.clientY=b.clientY!==i?b.clientY:b.pageY;
this.screenX=b.screenX||
0;
this.screenY=b.screenY||0;
this.button=b.button;
this.keyCode=b.keyCode||0;
this.charCode=b.charCode||("keypress"==d?b.keyCode:0);
this.ctrlKey=b.ctrlKey;
this.altKey=b.altKey;
this.shiftKey=b.shiftKey;
this.metaKey=b.metaKey;
this.Iz=mb?b.metaKey:b.ctrlKey;
this.state=b.state;
this.Yb=b;
b.defaultPrevented&&this.preventDefault();
delete this.ik
}
;
a.od=function(b)
{
return(fd?0==b.Yb.button:"click"==b.type?j:!!(b.Yb.button&nd[0]))&&!(C&&mb&&b.ctrlKey)
}
;

t.stopPropagation=function()
{
md.m.stopPropagation.call(this);
this.Yb.stopPropagation?this.Yb.stopPropagation():this.Yb.cancelBubble=j
}
;
t.preventDefault=function()
{
md.m.preventDefault.call(this);
var b=this.Yb;
if(b.preventDefault)b.preventDefault();
else if(b.returnValue=n,hd)try
{
if(b.ctrlKey||112<=b.keyCode&&123>=b.keyCode)b.keyCode=-1
}
catch(c)
{

}

}
;
t.vE=q("Yb");
t.p=ba();
a.pd=function()
{

}
,a.qd=0;
t=pd.prototype;
t.key=0;
t.mk=n;
t.Tq=n;
t.v=function(b,c,d,e,g,h)
{
qa(b)?this.KF=j:b&&b.handleEvent&&qa(b.handleEvent)?this.KF=n:f(Error("Invalid listener argument"));
this.rg=b;
this.proxy=c;
this.src=d;
this.type=e;
this.capture=!!g;
this.hi=h;
this.Tq=n;
this.key=++qd;
this.mk=n
}
;
t.handleEvent=function(b)
{
return this.KF?this.rg.call(this.hi||this.src,b):this.rg.handleEvent.call(this.rg,b)
}
;
a.rd=
{

}
,a.sd=
{

}
,a.td=
{

}
,a.ud=
{

}
,a.N=function(b,c,d,e,g)
{
if(ma(c))
{
for(var h=0;
h<c.length;
h++)N(b,c[h],d,e,g);
return k
}
return vd(b,c,d,n,e,g)
}
,a.vd=function(b,c,d,e,g,h)
{
c||f(Error("Invalid event type"));
var g=!!g,l=sd;
c in l||(l[c]=
{
la:0,Xe:0
}
);
l=l[c];
g in l||(l[g]=
{
la:0,Xe:0
}
,l.la++);
var l=l[g],m=ua(b),p;
l.Xe++;
if(l[m])
{
p=l[m];
for(var r=0;
r<p.length;
r++)if(l=p[r],l.rg==d&&l.hi==h)
{
if(l.mk)break;
e||(p[r].Tq=n);
return p[r].key
}

}
else p=l[m]=[],l.la++;
var x=wd,F=gd?function(b)
{
return x.call(F.src,F.key,
b)
}
:function(b)
{
b=x.call(F.src,F.key,b);
if(!b)return b
}
,r=F;
r.src=b;
l=new pd;
l.v(d,r,b,c,g,h);
l.Tq=e;
d=l.key;
r.key=d;
p.push(l);
rd[d]=l;
td[m]||(td[m]=[]);
td[m].push(l);
b.addEventListener?(b==fa||!b.BD)&&b.addEventListener(c,r,g):b.attachEvent(c in ud?ud[c]:ud[c]="on"+c,r);
return d
}
,a.xd=function(b,c,d,e,g)
{
if(ma(c))
{
for(var h=0;
h<c.length;
h++)xd(b,c[h],d,e,g);
return k
}
return vd(b,c,d,j,e,g)
}
,a.yd=function(b,c,d,e,g)
{
if(ma(c))for(var h=0;
h<c.length;
h++)yd(b,c[h],d,e,g);
else if(e=!!e,b=zd(b,c,e))for(h=
0;
h<b.length;
h++)if(b[h].rg==d&&b[h].capture==e&&b[h].hi==g)
{
Ad(b[h].key);
break
}

}
,a.Ad=function(b)
{
if(!rd[b])return n;
var c=rd[b];
if(c.mk)return n;
var d=c.src,e=c.type,g=c.proxy,h=c.capture;
d.removeEventListener?(d==fa||!d.BD)&&d.removeEventListener(e,g,h):d.detachEvent&&d.detachEvent(e in ud?ud[e]:ud[e]="on"+e,g);
d=ua(d);
td[d]&&(g=td[d],z.remove(g,c),0==g.length&&delete td[d]);
c.mk=j;
if(c=sd[e][h][d])c.JG=j,Bd(e,h,d,c);
delete rd[b];
return j
}
,a.Bd=function(b,c,d,e)
{
if(!e.Ss&&e.JG)
{
for(var g=0,h=0;
g<
e.length;
g++)e[g].mk?e[g].proxy.src=k:(g!=h&&(e[h]=e[g]),h++);
e.length=h;
e.JG=n;
0==h&&(delete sd[b][c][d],sd[b][c].la--,0==sd[b][c].la&&(delete sd[b][c],sd[b].la--),0==sd[b].la&&delete sd[b])
}

}
,a.Cd=function(b)
{
var c,d=0,e=c==k;
c=!!c;
if(b==k)E.forEach(td,function(b)
{
for(var g=b.length-1;
0<=g;
g--)
{
var h=b[g];
if(e||c==h.capture)Ad(h.key),d++
}

}
);
else if(b=ua(b),td[b])for(var b=td[b],g=b.length-1;
0<=g;
g--)
{
var h=b[g];
if(e||c==h.capture)Ad(h.key),d++
}

}
,a.zd=function(b,c,d)
{
var e=sd;
return c in e&&(e=e[c],
d in e&&(e=e[d],b=ua(b),e[b]))?e[b]:k
}
,a.Ed=function(b,c,d,e,g)
{
var h=1,c=ua(c);
if(b[c])
{
b.Xe--;
b=b[c];
b.Ss?b.Ss++:b.Ss=1;
try
{
for(var l=b.length,m=0;
m<l;
m++)
{
var p=b[m];
p&&!p.mk&&(h&=Dd(p,g)!==n)
}

}
finally
{
b.Ss--,Bd(d,e,c,b)
}

}
return Boolean(h)
}
,a.Dd=function(b,c)
{
b.Tq&&Ad(b.key);
return b.handleEvent(c)
}
,a.wd=function(b,c)
{
if(!rd[b])return j;
var d=rd[b],e=d.type,g=sd;
if(!(e in g))return j;
var g=g[e],h,l;
if(!gd)
{
h=c||ga("window.event");
var m=j in g,p=n in g;
if(m)
{
if(0>h.keyCode||h.returnValue!=i)return j;

a:
{
var r=n;
if(0==h.keyCode)try
{
h.keyCode=-1;
break a
}
catch(x)
{
r=j
}
if(r||h.returnValue==i)h.returnValue=j
}

}
r=new md;
r.v(h,this);
h=j;
try
{
if(m)
{
for(var F=[],H=r.currentTarget;
H;
H=H.parentNode)F.push(H);
l=g[j];
l.Xe=l.la;
for(var G=F.length-1;
!r.ik&&0<=G&&l.Xe;
G--)r.currentTarget=F[G],h&=Ed(l,F[G],e,j,r);
if(p)
{
l=g[n];
l.Xe=l.la;
for(G=0;
!r.ik&&G<F.length&&l.Xe;
G++)r.currentTarget=F[G],h&=Ed(l,F[G],e,n,r)
}

}
else h=Dd(d,r)
}
finally
{
F&&(F.length=0)
}
return h
}
e=new md(c,this);
return h=Dd(d,e)
}
,a.Fd=0,a.Gd=function(b)
{
return b+
"_"+Fd++
}
;
a.Hd=function()
{
M.call(this)
}
;
y(Hd,M);
t=Hd.prototype;
t.BD=j;
t.tm=k;
t.Pt=ca("tm");
t.addEventListener=function(b,c,d,e)
{
N(this,b,c,d,e)
}
;
t.removeEventListener=function(b,c,d,e)
{
yd(this,b,c,d,e)
}
;

t.dispatchEvent=function(b)
{
var c=b.type||b,d=sd;
if(c in d)
{
if(oa(b))b=new id(b,this);
else if(b instanceof id)b.target=b.target||this;
else
{
var e=b,b=new id(c,this);
E.extend(b,e)
}
var e=1,g,d=d[c],c=j in d,h;
if(c)
{
g=[];
for(h=this;
h;
h=h.tm)g.push(h);
h=d[j];
h.Xe=h.la;
for(var l=g.length-1;
!b.ik&&0<=l&&h.Xe;
l--)b.currentTarget=g[l],e&=Ed(h,g[l],b.type,j,b)&&b.Gt!=n
}
if(n in d)if(h=d[n],h.Xe=h.la,c)for(l=0;
!b.ik&&l<g.length&&h.Xe;
l++)b.currentTarget=g[l],e&=Ed(h,g[l],b.type,n,b)&&b.Gt!=n;
else for(g=this;
!b.ik&&
g&&h.Xe;
g=g.tm)b.currentTarget=g,e&=Ed(h,g,b.type,n,b)&&b.Gt!=n;
b=Boolean(e)
}
else b=j;
return b
}
;
t.p=function()
{
Hd.m.p.call(this);
Cd(this);
this.tm=k
}
;
a.Jd=function(b,c)
{
M.call(this);
this.dh=b||1;
this.Xp=c||Id;
this.wv=v(this.CV,this);
this.By=za()
}
;
y(Jd,Hd);
Jd.prototype.enabled=n;
a.Id=fa.window;
t=Jd.prototype;
t.qa=k;
t.setInterval=u(11);
t.CV=function()
{
if(this.enabled)
{
var b=za()-this.By;
0<b&&b<0.8*this.dh?this.qa=this.Xp.setTimeout(this.wv,this.dh-b):(this.dispatchEvent(Kd),this.enabled&&(this.qa=this.Xp.setTimeout(this.wv,this.dh),this.By=za()))
}

}
;
t.start=function()
{
this.enabled=j;
this.qa||(this.qa=this.Xp.setTimeout(this.wv,this.dh),this.By=za())
}
;

t.stop=function()
{
this.enabled=n;
this.qa&&(this.Xp.clearTimeout(this.qa),this.qa=k)
}
;
t.p=function()
{
Jd.m.p.call(this);
this.stop();
delete this.Xp
}
;
a.Kd="tick",a.Ld=function(b,c,d)
{
qa(b)?d&&(b=v(b,d)):b&&"function"==typeof b.handleEvent?b=v(b.handleEvent,b):f(Error("Invalid listener argument"));
return 2147483647<c?-1:Id.setTimeout(b,c||0)
}
;
a.Md=
{
Va:function(b)
{
return"function"==typeof b.Va?b.Va():na(b)||oa(b)?b.length:E.Va(b)
}
,Ja:function(b)
{
if("function"==typeof b.Ja)return b.Ja();
if(oa(b))return b.split("");
if(na(b))
{
for(var c=[],d=b.length,e=0;
e<d;
e++)c.push(b[e]);
return c
}
return E.Ja(b)
}
,Fb:function(b)
{
if("function"==typeof b.Fb)return b.Fb();
if("function"!=typeof b.Ja)
{
if(na(b)||oa(b))
{
for(var c=[],b=b.length,d=0;
d<b;
d++)c.push(d);
return c
}
return E.Fb(b)
}

}
,contains:function(b,c)
{
return"function"==typeof b.contains?b.contains(c):
"function"==typeof b.Ng?b.Ng(c):na(b)||oa(b)?z.contains(b,c):E.Ng(b,c)
}
,Hb:function(b)
{
return"function"==typeof b.Hb?b.Hb():na(b)||oa(b)?z.Hb(b):E.Hb(b)
}
,clear:function(b)
{
"function"==typeof b.clear?b.clear():na(b)?z.clear(b):E.clear(b)
}
,forEach:function(b,c,d)
{
if("function"==typeof b.forEach)b.forEach(c,d);
else if(na(b)||oa(b))z.forEach(b,c,d);
else for(var e=Md.Fb(b),g=Md.Ja(b),h=g.length,l=0;
l<h;
l++)c.call(d,g[l],e&&e[l],b)
}
,filter:function(b,c,d)
{
if("function"==typeof b.filter)return b.filter(c,
d);
if(na(b)||oa(b))return z.filter(b,c,d);
var e,g=Md.Fb(b),h=Md.Ja(b),l=h.length;
if(g)
{
e=
{

}
;
for(var m=0;
m<l;
m++)c.call(d,h[m],g[m],b)&&(e[g[m]]=h[m])
}
else
{
e=[];
for(m=0;
m<l;
m++)c.call(d,h[m],i,b)&&e.push(h[m])
}
return e
}
,map:function(b,c,d)
{
if("function"==typeof b.map)return b.map(c,d);
if(na(b)||oa(b))return z.map(b,c,d);
var e,g=Md.Fb(b),h=Md.Ja(b),l=h.length;
if(g)
{
e=
{

}
;
for(var m=0;
m<l;
m++)e[g[m]]=c.call(d,h[m],g[m],b)
}
else
{
e=[];
for(m=0;
m<l;
m++)e[m]=c.call(d,h[m],i,b)
}
return e
}
,some:function(b,c,d)
{
if("function"==
typeof b.some)return b.some(c,d);
if(na(b)||oa(b))return z.some(b,c,d);
for(var e=Md.Fb(b),g=Md.Ja(b),h=g.length,l=0;
l<h;
l++)if(c.call(d,g[l],e&&e[l],b))return j;
return n
}
,every:function(b,c,d)
{
if("function"==typeof b.every)return b.every(c,d);
if(na(b)||oa(b))return z.every(b,c,d);
for(var e=Md.Fb(b),g=Md.Ja(b),h=g.length,l=0;
l<h;
l++)if(!c.call(d,g[l],e&&e[l],b))return n;
return j
}

}
;
a.O=
{

}
;
O.fb="StopIteration"in fa?fa.StopIteration:Error("StopIteration");
a.Nd=function()
{

}
;
Nd.prototype.next=function()
{
f(O.fb)
}
;
Nd.prototype.gd=function()
{
return this
}
;
O.ed=function(b)
{
if(b instanceof Nd)return b;
if("function"==typeof b.gd)return b.gd(n);
if(na(b))
{
var c=0,d=new Nd;
d.next=function()
{
for(;
;
)
{
c>=b.length&&f(O.fb);
if(c in b)return b[c++];
c++
}

}
;
return d
}
f(Error("Not implemented"))
}
;

O.forEach=function(b,c,d)
{
if(na(b))try
{
z.forEach(b,c,d)
}
catch(e)
{
e!==O.fb&&f(e)
}
else
{
b=O.ed(b);
try
{
for(;
;
)c.call(d,b.next(),i,b)
}
catch(g)
{
g!==O.fb&&f(g)
}

}

}
;
O.filter=function(b,c,d)
{
var e=O.ed(b),b=new Nd;
b.next=function()
{
for(;
;
)
{
var b=e.next();
if(c.call(d,b,i,e))return b
}

}
;
return b
}
;
O.zm=function(b,c,d)
{
var e=0,g=b,h=d||1;
1<arguments.length&&(e=b,g=c);
0==h&&f(Error("Range step argument must not be zero"));
var l=new Nd;
l.next=function()
{
(0<h&&e>=g||0>h&&e<=g)&&f(O.fb);
var b=e;
e+=h;
return b
}
;
return l
}
;

O.join=function(b,c)
{
return O.toArray(b).join(c)
}
;
O.map=function(b,c,d)
{
var e=O.ed(b),b=new Nd;
b.next=function()
{
for(;
;
)
{
var b=e.next();
return c.call(d,b,i,e)
}

}
;
return b
}
;
O.reduce=function(b,c,d,e)
{
var g=d;
O.forEach(b,function(b)
{
g=c.call(e,g,b)
}
);
return g
}
;
O.some=function(b,c,d)
{
b=O.ed(b);
try
{
for(;
;
)if(c.call(d,b.next(),i,b))return j
}
catch(e)
{
e!==O.fb&&f(e)
}
return n
}
;
O.every=function(b,c,d)
{
b=O.ed(b);
try
{
for(;
;
)if(!c.call(d,b.next(),i,b))return n
}
catch(e)
{
e!==O.fb&&f(e)
}
return j
}
;

O.cM=function(b)
{
var c=arguments,d=c.length,e=0,g=new Nd;
g.next=function()
{
try
{
return e>=d&&f(O.fb),O.ed(c[e]).next()
}
catch(b)
{
return(b!==O.fb||e>=d)&&f(b),e++,this.next()
}

}
;
return g
}
;
O.lN=function(b,c)
{
var d=O.ed(b),e=new Nd,g=j;
e.next=function()
{
for(;
;
)
{
var b=d.next();
if(!g||!c.call(i,b,i,d))return g=n,b
}

}
;
return e
}
;
O.cB=function(b,c)
{
var d=O.ed(b),e=new Nd,g=j;
e.next=function()
{
for(;
;
)if(g)
{
var b=d.next();
if(c.call(i,b,i,d))return b;
g=n
}
else f(O.fb)
}
;
return e
}
;

O.toArray=function(b)
{
if(na(b))return z.toArray(b);
var b=O.ed(b),c=[];
O.forEach(b,function(b)
{
c.push(b)
}
);
return c
}
;
O.dg=function(b,c)
{
var b=O.ed(b),c=O.ed(c),d,e;
try
{
for(;
;
)
{
d=e=n;
var g=b.next();
d=j;
var h=c.next();
e=j;
if(g!=h)break
}

}
catch(l)
{
l!==O.fb&&f(l);
if(d&&!e)return n;
if(!e)try
{
c.next()
}
catch(m)
{
return m!==O.fb&&f(m),j
}

}
return n
}
;
O.z_=function(b,c)
{
try
{
return O.ed(b).next()
}
catch(d)
{
return d!=O.fb&&f(d),c
}

}
;

O.product=function(b)
{
if(z.some(arguments,function(b)
{
return!b.length
}
)||!arguments.length)return new Nd;
var c=new Nd,d=arguments,e=z.repeat(0,d.length);
c.next=function()
{
if(e)
{
for(var b=z.map(e,function(b,c)
{
return d[c][b]
}
),c=e.length-1;
0<=c;
c--)
{
if(e[c]<d[c].length-1)
{
e[c]++;
break
}
if(0==c)
{
e=k;
break
}
e[c]=0
}
return b
}
f(O.fb)
}
;
return c
}
;

O.Wv=function(b)
{
var c=O.ed(b),d=[],e=0,b=new Nd,g=n;
b.next=function()
{
var b=k;
if(!g)try
{
return b=c.next(),d.push(b),b
}
catch(l)
{
(l!=O.fb||z.Hb(d))&&f(l),g=j
}
b=d[e];
e=(e+1)%d.length;
return b
}
;
return b
}
;
a.Od=function(b,c)
{
this.ub=
{

}
;
this.Ta=[];
var d=arguments.length;
if(1<d)
{
d%2&&f(Error("Uneven number of arguments"));
for(var e=0;
e<d;
e+=2)this.set(arguments[e],arguments[e+1])
}
else b&&this.Wu(b)
}
;
t=Od.prototype;
t.la=0;
t.hq=0;
t.Va=q("la");
t.Ja=function()
{
Pd(this);
for(var b=[],c=0;
c<this.Ta.length;
c++)b.push(this.ub[this.Ta[c]]);
return b
}
;
t.Fb=function()
{
Pd(this);
return this.Ta.concat()
}
;
t.Pd=function(b)
{
return Qd(this.ub,b)
}
;

t.Ng=function(b)
{
for(var c=0;
c<this.Ta.length;
c++)
{
var d=this.Ta[c];
if(Qd(this.ub,d)&&this.ub[d]==b)return j
}
return n
}
;
t.dg=function(b,c)
{
if(this===b)return j;
if(this.la!=b.Va())return n;
var d=c||Rd;
Pd(this);
for(var e,g=0;
e=this.Ta[g];
g++)if(!d(this.get(e),b.get(e)))return n;
return j
}
;
a.Rd=function(b,c)
{
return b===c
}
;
t.Hb=function()
{
return 0==this.la
}
;
t.clear=function()
{
this.ub=
{

}
;
this.hq=this.la=this.Ta.length=0
}
;

t.remove=function(b)
{
return Qd(this.ub,b)?(delete this.ub[b],this.la--,this.hq++,this.Ta.length>2*this.la&&Pd(this),j):n
}
;
a.Pd=function(b)
{
if(b.la!=b.Ta.length)
{
for(var c=0,d=0;
c<b.Ta.length;
)
{
var e=b.Ta[c];
Qd(b.ub,e)&&(b.Ta[d++]=e);
c++
}
b.Ta.length=d
}
if(b.la!=b.Ta.length)
{
for(var g=
{

}
,d=c=0;
c<b.Ta.length;
)e=b.Ta[c],Qd(g,e)||(b.Ta[d++]=e,g[e]=1),c++;
b.Ta.length=d
}

}
;
t.get=function(b,c)
{
return Qd(this.ub,b)?this.ub[b]:c
}
;

t.set=function(b,c)
{
Qd(this.ub,b)||(this.la++,this.Ta.push(b),this.hq++);
this.ub[b]=c
}
;
t.Wu=function(b)
{
var c;
b instanceof Od?(c=b.Fb(),b=b.Ja()):(c=E.Fb(b),b=E.Ja(b));
for(var d=0;
d<c.length;
d++)this.set(c[d],b[d])
}
;
t.clone=function()
{
return new Od(this)
}
;
t.Ym=function()
{
for(var b=new Od,c=0;
c<this.Ta.length;
c++)
{
var d=this.Ta[c];
b.set(this.ub[d],d)
}
return b
}
;
t.ju=function()
{
Pd(this);
for(var b=
{

}
,c=0;
c<this.Ta.length;
c++)
{
var d=this.Ta[c];
b[d]=this.ub[d]
}
return b
}
;

t.gd=function(b)
{
Pd(this);
var c=0,d=this.Ta,e=this.ub,g=this.hq,h=this,l=new Nd;
l.next=function()
{
for(;
;
)
{
g!=h.hq&&f(Error("The map has changed since the iterator was created"));
c>=d.length&&f(O.fb);
var l=d[c++];
return b?l:e[l]
}

}
;
return l
}
;
a.Qd=function(b,c)
{
return Object.prototype.hasOwnProperty.call(b,c)
}
;
a.Sd=function(b)
{
this.ub=new Od;
b&&this.Wu(b)
}
,a.Td=function(b)
{
var c=typeof b;
return"object"==c&&b||"function"==c?"o"+ua(b):c.substr(0,1)+b
}
;
t=Sd.prototype;
t.Va=function()
{
return this.ub.Va()
}
;
t.add=function(b)
{
this.ub.set(Td(b),b)
}
;
t.Wu=function(b)
{
for(var b=Md.Ja(b),c=b.length,d=0;
d<c;
d++)this.add(b[d])
}
;
t.Pc=function(b)
{
for(var b=Md.Ja(b),c=b.length,d=0;
d<c;
d++)this.remove(b[d])
}
;
t.remove=function(b)
{
return this.ub.remove(Td(b))
}
;
t.clear=function()
{
this.ub.clear()
}
;
t.Hb=function()
{
return this.ub.Hb()
}
;

t.contains=function(b)
{
return this.ub.Pd(Td(b))
}
;
t.EF=function(b)
{
for(var c=new Sd,b=Md.Ja(b),d=0;
d<b.length;
d++)
{
var e=b[d];
this.contains(e)&&c.add(e)
}
return c
}
;
t.Ja=function()
{
return this.ub.Ja()
}
;
t.clone=function()
{
return new Sd(this)
}
;
t.dg=function(b)
{
var c;
if(c=this.Va()==Md.Va(b))
{
var d=b,b=Md.Va(d);
this.Va()>b?c=n:(!(d instanceof Sd)&&5<b&&(d=new Sd(d)),c=Md.every(this,function(b)
{
return Md.contains(d,b)
}
))
}
return c
}
;
t.gd=function()
{
return this.ub.gd(n)
}
;
a.Vd=function(b)
{
return Ud(b||arguments.callee.caller,[])
}
,a.Ud=function(b,c)
{
var d=[];
if(z.contains(c,b))d.push("[...circular reference...]");
else if(b&&50>c.length)
{
d.push(Wd(b)+"(");
for(var e=b.arguments,g=0;
g<e.length;
g++)
{
0<g&&d.push(", ");
var h;
h=e[g];
switch(typeof h)
{
case "object":h=h?"object":"null";
break;
case "string":break;
case "number":h=String(h);
break;
case "boolean":h=h?"true":"false";
break;
case "function":h=(h=Wd(h))?h:"[fn]";
break;
default:h=typeof h
}
40<h.length&&(h=h.substr(0,40)+"...");

d.push(h)
}
c.push(b);
d.push(")\n");
try
{
d.push(Ud(b.caller,c))
}
catch(l)
{
d.push("[exception trying to get caller]\n")
}

}
else b?d.push("[...long stack...]"):d.push("[end]");
return d.join("")
}
,a.Wd=function(b)
{
if(Xd[b])return Xd[b];
b=String(b);
if(!Xd[b])
{
var c=/function ([^\(]+)/.exec(b);
Xd[b]=c?c[1]:"[Anonymous]"
}
return Xd[b]
}
,a.Xd=
{

}
;
a.Yd=function(b,c,d,e,g)
{
this.reset(b,c,d,e,g)
}
;
Yd.prototype.DU=0;
Yd.prototype.fE=k;
Yd.prototype.eE=k;
a.Zd=0;
Yd.prototype.reset=function(b,c,d,e,g)
{
this.DU="number"==typeof g?g:Zd++;
this.g0=e||za();
this.Po=b;
this.GG=c;
this.p_=d;
delete this.fE;
delete this.eE
}
;
Yd.prototype.vI=ca("Po");
Yd.prototype.Bi=u(56);
a.$d=function(b)
{
this.wR=b
}
;
$d.prototype.Wa=k;
$d.prototype.Po=k;
$d.prototype.Xb=k;
$d.prototype.dF=k;
a.ae=function(b,c)
{
this.name=b;
this.value=c
}
;
ae.prototype.toString=q("name");
a.be=new ae("SHOUT",1200),a.ce=new ae("SEVERE",1E3),a.de=new ae("WARNING",900),a.ee=new ae("INFO",800),a.fe=new ae("CONFIG",700),a.ge=new ae("FINE",500);
t=$d.prototype;
t.getParent=q("Wa");
t.xE=function()
{
this.Xb||(this.Xb=
{

}
);
return this.Xb
}
;
t.vI=ca("Po");
a.he=function(b)
{
return b.Po?b.Po:b.Wa?he(b.Wa):k
}
;

t.log=function(b,c,d)
{
if(b.value>=he(this).value)
{
b=this.TN(b,c,d);
c="log:"+b.GG;
fa.console&&(fa.console.timeStamp?fa.console.timeStamp(c):fa.console.markTimeline&&fa.console.markTimeline(c));
fa.msWriteProfilerMark&&fa.msWriteProfilerMark(c);
for(c=this;
c;
)
{
var d=c,e=b;
if(d.dF)for(var g=0,h=i;
h=d.dF[g];
g++)h(e);
c=c.getParent()
}

}

}
;

t.TN=function(b,c,d)
{
var e=new Yd(b,String(c),this.wR);
if(d)
{
e.fE=d;
var g;
var h=arguments.callee.caller;
try
{
var l;
var m=ga("window.location.href");
if(oa(d))l=
{
message:d,name:"Unknown error",lineNumber:"Not available",fileName:m,stack:"Not available"
}
;
else
{
var p,r,x=n;
try
{
p=d.lineNumber||d.o_||"Not available"
}
catch(F)
{
p="Not available",x=j
}
try
{
r=d.fileName||d.filename||d.sourceURL||m
}
catch(H)
{
r="Not available",x=j
}
l=x||!d.lineNumber||!d.fileName||!d.stack?
{
message:d.message,name:d.name,lineNumber:p,
fileName:r,stack:d.stack||"Not available"
}
:d
}
g="Message: "+Ua(l.message)+'\nUrl: <a href="view-source:'+l.fileName+'" target="_new">'+l.fileName+"</a>\nLine: "+l.lineNumber+"\n\nBrowser stack:\n"+Ua(l.stack+"-> ")+"[end]\n\nJS stack traversal:\n"+Ua(Vd(h)+"-> ")
}
catch(G)
{
g="Exception trying to expose exception! You win, we lose. "+G
}
e.eE=g
}
return e
}
;
t.Mk=function(b,c)
{
this.log(de,b,c)
}
;
t.info=function(b,c)
{
this.log(ee,b,c)
}
;
t.fD=u(13);

a.ie=function(b,c)
{
b.log(ge,c,i)
}
,a.je=
{

}
,a.ke=k,a.le=function(b)
{
ke||(ke=new $d(""),je[""]=ke,ke.vI(fe));
var c;
if(!(c=je[b]))
{
c=new $d(b);
var d=b.lastIndexOf("."),e=b.substr(d+1),d=le(b.substr(0,d));
d.xE()[e]=c;
c.Wa=d;
je[b]=c
}
return c
}
;
a.me=function(b)
{
M.call(this);
this.ha=b;
this.Ta=[]
}
;
y(me,M);
a.oe=[];
t=me.prototype;
t.c=function(b,c,d,e,g)
{
ma(c)||(oe[0]=c,c=oe);
for(var h=0;
h<c.length;
h++)
{
var l=N(b,c[h],d||this,e||n,g||this.ha||this);
this.Ta.push(l)
}
return this
}
;
a.P=function(b,c,d,e,g,h)
{
if(ma(d))for(var l=0;
l<d.length;
l++)P(b,c,d[l],e,g,h);
else c=xd(c,d,e||b,g,h||b.ha||b),b.Ta.push(c)
}
;

t.va=function(b,c,d,e,g)
{
if(ma(c))for(var h=0;
h<c.length;
h++)this.va(b,c[h],d,e,g);
else
{
a:
{
d=d||this;
g=g||this.ha||this;
e=!!e;
if(b=zd(b,c,e))for(c=0;
c<b.length;
c++)if(!b[c].mk&&b[c].rg==d&&b[c].capture==e&&b[c].hi==g)
{
b=b[c];
break a
}
b=k
}
b&&(b=b.key,Ad(b),z.remove(this.Ta,b))
}
return this
}
;
t.Pc=function()
{
z.forEach(this.Ta,Ad);
this.Ta.length=0
}
;
t.p=function()
{
me.m.p.call(this);
this.Pc()
}
;
t.handleEvent=function()
{
f(Error("EventHandler.handleEvent not implemented"))
}
;
a.pe=function(b)
{
M.call(this);
this.Eg=b;
this.Ft=[]
}
;
y(pe,M);
pe.prototype.Ca=le("goog.net.BulkLoaderHelper");
pe.prototype.mx=q("Eg");
pe.prototype.hx=q("Ft");
pe.prototype.p=function()
{
pe.m.p.call(this);
this.Ft=this.Eg=k
}
;
a.qe=function()
{

}
;
qe.prototype.SC=k;
a.se=function(b)
{
var c;
if(!(c=b.SC))c=
{

}
,re(b)&&(c[0]=j,c[1]=j),c=b.SC=c;
return c
}
;
a.te=void 0,a.ue=function()
{

}
;
y(ue,qe);
a.ve=function(b)
{
return(b=re(b))?new ActiveXObject(b):new XMLHttpRequest
}
,a.re=function(b)
{
if(!b.kF&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject)
{
for(var c=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],d=0;
d<c.length;
d++)
{
var e=c[d];
try
{
return new ActiveXObject(e),b.kF=e
}
catch(g)
{

}

}
f(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
}
return b.kF
}
;

te=new ue;
a.we=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
a.xe=function(b)
{
M.call(this);
this.headers=new Od;
this.wu=b||k
}
;
y(xe,Hd);
xe.prototype.Ca=le("goog.net.XhrIo");
a.ye=/^https?$/i;
t=xe.prototype;
t.Jh=n;
t.da=k;
t.vu=k;
t.Js="";
t.YF="";
t.Ko=0;
t.Lo="";
t.Bw=n;
t.ps=n;
t.Xx=n;
t.Hj=n;
t.eu=0;
t.Fk=k;
t.bI="";
t.vW=n;

t.send=function(b,c,d,e)
{
this.da&&f(Error("[goog.net.XhrIo] Object is active with another request="+this.Js+";
 newUri="+b));
c=c?c.toUpperCase():"GET";
this.Js=b;
this.Lo="";
this.Ko=0;
this.YF=c;
this.Bw=n;
this.Jh=j;
this.da=this.wu?ve(this.wu):ve(te);
this.vu=this.wu?se(this.wu):se(te);
this.da.onreadystatechange=v(this.gH,this);
try
{
ie(this.Ca,ze(this,"Opening Xhr")),this.Xx=j,this.da.open(c,b,j),this.Xx=n
}
catch(g)
{
ie(this.Ca,ze(this,"Error opening Xhr: "+g.message));
Ae(this,g);
return
}
var b=d||"",h=this.headers.clone();

e&&Md.forEach(e,function(b,c)
{
h.set(c,b)
}
);
e=fa.FormData&&b instanceof fa.FormData;
"POST"==c&&(!h.Pd("Content-Type")&&!e)&&h.set("Content-Type","application/x-www-form-urlencoded;
charset=utf-8");
Md.forEach(h,function(b,c)
{
this.da.setRequestHeader(c,b)
}
,this);
this.bI&&(this.da.responseType=this.bI);
E.Pd(this.da,"withCredentials")&&(this.da.withCredentials=this.vW);
try
{
this.Fk&&(Id.clearTimeout(this.Fk),this.Fk=k),0<this.eu&&(ie(this.Ca,ze(this,"Will abort after "+this.eu+"ms if incomplete")),this.Fk=
Id.setTimeout(v(this.fu,this),this.eu)),ie(this.Ca,ze(this,"Sending request")),this.ps=j,this.da.send(b),this.ps=n
}
catch(l)
{
ie(this.Ca,ze(this,"Send error: "+l.message)),Ae(this,l)
}

}
;
t.fu=function()
{
"undefined"!=typeof ea&&this.da&&(this.Lo="Timed out after "+this.eu+"ms, aborting",this.Ko=8,ie(this.Ca,ze(this,this.Lo)),this.dispatchEvent("timeout"),this.abort(8))
}
;

a.Ae=function(b,c)
{
b.Jh=n;
b.da&&(b.Hj=j,b.da.abort(),b.Hj=n);
b.Lo=c;
b.Ko=5;
Be(b);
Ce(b)
}
,a.Be=function(b)
{
b.Bw||(b.Bw=j,b.dispatchEvent("complete"),b.dispatchEvent("error"))
}
;
t.abort=function(b)
{
this.da&&this.Jh&&(ie(this.Ca,ze(this,"Aborting")),this.Jh=n,this.Hj=j,this.da.abort(),this.Hj=n,this.Ko=b||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Ce(this))
}
;
t.p=function()
{
this.da&&(this.Jh&&(this.Jh=n,this.Hj=j,this.da.abort(),this.Hj=n),Ce(this,j));
xe.m.p.call(this)
}
;

t.gH=function()
{
!this.Xx&&!this.ps&&!this.Hj?this.wS():De(this)
}
;
t.wS=function()
{
De(this)
}
;

a.De=function(b)
{
if(b.Jh&&"undefined"!=typeof ea)if(b.vu[1]&&4==Ee(b)&&2==Fe(b))ie(b.Ca,ze(b,"Local request error detected and ignored"));
else if(b.ps&&4==Ee(b))Id.setTimeout(v(b.gH,b),0);
else if(b.dispatchEvent("readystatechange"),4==Ee(b))
{
ie(b.Ca,ze(b,"Request complete"));
b.Jh=n;
try
{
if(Ge(b))b.dispatchEvent("complete"),b.dispatchEvent("success");
else
{
b.Ko=6;
var c;
try
{
c=2<Ee(b)?b.da.statusText:""
}
catch(d)
{
ie(b.Ca,"Can not get status: "+d.message),c=""
}
b.Lo=c+" ["+Fe(b)+"]";
Be(b)
}

}
finally
{
Ce(b)
}

}

}
,
a.Ce=function(b,c)
{
if(b.da)
{
var d=b.da,e=b.vu[0]?ha:k;
b.da=k;
b.vu=k;
b.Fk&&(Id.clearTimeout(b.Fk),b.Fk=k);
c||b.dispatchEvent("ready");
try
{
d.onreadystatechange=e
}
catch(g)
{
b.Ca.log(ce,"Problem encountered resetting onreadystatechange: "+g.message,i)
}

}

}
;
t.Gb=function()
{
return!!this.da
}
;

a.Ge=function(b)
{
var c=Fe(b),d;
a:switch(c)
{
case 200:case 201:case 202:case 204:case 206:case 304:case 1223:d=j;
break a;
default:d=n
}
if(!d)
{
if(c=0===c)b=String(b.Js).match(we)[1]||k,!b&&self.location&&(b=self.location.protocol,b=b.substr(0,b.length-1)),c=!ye.test(b?b.toLowerCase():"");
d=c
}
return d
}
,a.Ee=function(b)
{
return b.da?b.da.readyState:0
}
,a.Fe=function(b)
{
try
{
return 2<Ee(b)?b.da.status:-1
}
catch(c)
{
return b.Ca.Mk("Can not get status: "+c.message),-1
}

}
,a.He=function(b)
{
try
{
return b.da?b.da.responseText:
""
}
catch(c)
{
return ie(b.Ca,"Can not get responseText: "+c.message),""
}

}
,a.Ie=function(b)
{
if(b.da)return Yc(b.da.responseText)
}
;
t.getResponseHeader=function(b)
{
return this.da&&4==Ee(this)?this.da.getResponseHeader(b):i
}
;
a.ze=function(b,c)
{
return c+" ["+b.YF+" "+b.Js+" "+Fe(b)+"]"
}
;
a.Je=function(b)
{
M.call(this);
this.Ej=new pe(b);
this.P=new me(this)
}
;
y(Je,Hd);
t=Je.prototype;
t.Ca=le("goog.net.BulkLoader");
t.hx=function()
{
return this.Ej.hx()
}
;
t.load=function()
{
var b=this.P,c=this.Ej.mx();
this.Ca.info("Starting load of code with "+c.length+" uris.");
for(var d=0;
d<c.length;
d++)
{
var e=new xe;
b.c(e,"complete",v(this.CO,this,d));
e.send(c[d])
}

}
;

t.CO=function(b,c)
{
this.Ca.info('Received event "'+c.type+'" for id '+b+" with uri "+this.Ej.Eg[b]);
var d=c.target;
Ge(d)?this.Jx(b,d):this.zx(b,d)
}
;
t.Jx=function(b,c)
{
var d=He(c);
this.Ej.Ft[b]=d;
a:
{
var e=this.Ej,d=e.Ft;
if(d.length==e.Eg.length)
{
for(e=0;
e<d.length;
e++)if(d[e]==k)
{
d=n;
break a
}
d=j
}
else d=n
}
d&&(this.Ca.info("All uris loaded."),this.dispatchEvent("success"));
c.F()
}
;
t.zx=function(b,c)
{
this.dispatchEvent("error");
c.F()
}
;

t.p=function()
{
Je.m.p.call(this);
this.P.F();
this.P=k;
this.Ej.F();
this.Ej=k
}
;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
a.Ke=function(b,c)
{
this.Gn=[];
this.UC=b;
this.HD=c||k
}
;
t=Ke.prototype;
t.Zh=n;
t.lo=n;
t.lp=0;
t.LA=n;
t.dM=n;
t.xv=0;
t.cancel=function(b)
{
if(this.Zh)this.up instanceof Ke&&this.up.cancel();
else
{
if(this.Wa)
{
var c=this.Wa;
delete this.Wa;
b?c.cancel(b):(c.xv--,0>=c.xv&&c.cancel())
}
this.UC?this.UC.call(this.HD,this):this.LA=j;
this.Zh||Le(this,new Me(this))
}

}
;
t.lD=function(b,c)
{
Ne(this,b,c);
this.lp--;
0==this.lp&&this.Zh&&Oe(this)
}
;
a.Ne=function(b,c,d)
{
b.Zh=j;
b.up=d;
b.lo=!c;
Oe(b)
}
;

t.Oh=function()
{
this.Zh&&(this.LA||f(new Pe(this)),this.LA=n)
}
;
t.hl=function(b)
{
this.Oh();
Ne(this,j,b)
}
;

a.Le=function(b,c)
{
b.Oh();
Ne(b,n,c)
}
,a.Qe=function(b)
{
return z.some(b.Gn,function(b)
{
return qa(b[1])
}
)
}
,a.Oe=function(b)
{
b.tB&&(b.Zh&&Qe(b))&&(fa.clearTimeout(b.tB),delete b.tB);
b.Wa&&(b.Wa.xv--,delete b.Wa);
for(var c=b.up,d=n,e=n;
b.Gn.length&&0==b.lp;
)
{
var g=b.Gn.shift(),h=g[0],l=g[1],g=g[2];
if(h=b.lo?l:h)try
{
var m=h.call(g||b.HD,c);
la(m)&&(b.lo=b.lo&&(m==c||m instanceof Error),b.up=c=m);
c instanceof Ke&&(e=j,b.lp++)
}
catch(p)
{
c=p,b.lo=j,Qe(b)||(d=j)
}

}
b.up=c;
e&&b.lp&&(e=c,m=v(b.lD,b,j),h=v(b.lD,b,
n),e.Gn.push([m,h,i]),e.Zh&&Oe(e),c.dM=j);
d&&(b.tB=fa.setTimeout(function()
{
f(c)
}
,0))
}
,a.Pe=function(b)
{
Da.call(this);
this.deferred=b
}
;
y(Pe,Da);
Pe.prototype.message="Deferred has already fired";
Pe.prototype.name="AlreadyCalledError";
a.Me=function(b)
{
Da.call(this);
this.deferred=b
}
;
y(Me,Da);
Me.prototype.message="Deferred was cancelled";
Me.prototype.name="CancelledError";
a.Re=[],a.Te=function()
{
if(this&&this.jI)
{
var b=this.jI;
b&&"SCRIPT"==b.tagName&&Se(b,j,this.fu)
}

}
,a.Se=function(b,c,d)
{
d!=k&&fa.clearTimeout(d);
b.onload=ha;
b.onerror=ha;
b.onreadystatechange=ha;
c&&window.setTimeout(function()
{
L(b)
}
,0)
}
,a.Ue=function(b,c)
{
var d="Jsloader error (code #"+b+")";
c&&(d+=": "+c);
Da.call(this,d);
this.code=b
}
;
y(Ue,Da);
a.Ve=function()
{
M.call(this);
this.P=new me(this);
this.lh=
{

}

}
;
y(Ve,Hd);
t=Ve.prototype;
t.Ob=le("goog.module.ModuleLoader");
t.FD=n;
t.dV=n;

t.WQ=function(b,c,d,e)
{
var g=this.lh[b]||new We;
g.kG=j;
g.ZA=d||k;
g.Cw=e||k;
if(this.lh[b])g.bA!=k&&Xe(this,b);
else
{
this.lh[b]=g;
d=[];
for(e=0;
e<b.length;
e++)z.extend(d,c[b[e]].mx());
this.Ob.info("downloadModules ids:"+b+" uris:"+d);
if(this.FD)
{
var h=d;
if(h.length&&(b=Re.length,z.extend(Re,h),!b))
{
var h=Re,l=function()
{
var b=h.shift(),c=
{

}
,d=c.document||document,e=document.createElement("SCRIPT"),g=
{
jI:e,fu:i
}
,H=new Ke(Te,g),G=k,Q=c.timeout!=k?c.timeout:5E3;
0<Q&&(G=window.setTimeout(function()
{
Se(e,
j);
Le(H,new Ue(1,"Timeout reached for loading script "+b))
}
,Q),g.fu=G);
e.onload=e.onreadystatechange=function()
{
if(!e.readyState||"loaded"==e.readyState||"complete"==e.readyState)Se(e,c.pZ||n,G),H.hl(k)
}
;
e.onerror=function()
{
Se(e,j,G);
Le(H,new Ue(0,"Error while loading script "+b))
}
;
Zb(e,
{
type:"text/javascript",charset:"UTF-8",src:b
}
);
g=d.getElementsByTagName("HEAD");
(!g||z.Hb(g)?d.documentElement:g[0]).appendChild(e);
h.length&&(H.Gn.push([l,l,i]),H.Zh&&Oe(H))
}
;
l()
}

}
else this.lh[b].aI=d,c=new Je(d),
d=this.P,d.c(c,"success",v(this.Jx,this,c,b),n,k),d.c(c,"error",v(this.zx,this,c,b),n,k),c.load()
}

}
;
a.Xe=function(b,c)
{
b.dispatchEvent(new Ye(Ze,c));
b.Ob.info("evaluateCode ids:"+c);
var d=j,e=b.lh[c],g=e.aI,h=e.bA;
try
{
if(b.dV)for(var l=0;
l<g.length;
l++)Ba(h[l]+" //@ sourceURL="+g[l]);
else Ba(h.join("\n"))
}
catch(m)
{
d=n,b.Ob.Mk("Loaded incomplete code for module(s): "+c,m)
}
b.dispatchEvent(new Ye($e,c));
d?e.ZA&&e.ZA():af(b,c,e.Cw,k);
delete b.lh[c]
}
;

t.Jx=function(b,c)
{
this.Ob.info("Code loaded for module(s): "+c);
var d=this.lh[c];
d.bA=b.hx();
d.kG&&Xe(this,c);
Ld(b.F,5,b)
}
;
t.zx=function(b,c,d)
{
var e=this.lh[c];
e&&(delete this.lh[c],af(this,c,e.Cw,d));
Ld(b.F,5,b)
}
;
a.af=function(b,c,d,e)
{
b.dispatchEvent(new Ye(bf,c));
b.Ob.Mk("Request failed for module(s): "+c);
d&&d(e)
}
;
t.p=function()
{
Ve.m.p.call(this);
this.P.F();
this.P=k
}
;
a.$e=Gd("evaluateCode"),a.Ze=Gd("requestSuccess"),a.bf=Gd("requestError"),a.Ye=function(b,c)
{
id.call(this,b);
this.v_=c
}
;

y(Ye,id);
a.We=function()
{
this.bA=this.aI=k;
this.kG=n;
this.Cw=this.ZA=k
}
;
a.cf=function(b,c)
{
M.call(this);
this.qG=c;
this.Wg=[];
b>this.qG&&f(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
for(var d=0;
d<b;
d++)this.Wg.push(this.ml())
}
;
y(cf,M);
t=cf.prototype;
t.mD=k;
t.QD=k;
a.df=function(b,c)
{
b.Wg.length<b.qG?b.Wg.push(c):b.iw(c)
}
;
t.ml=function()
{
return this.mD?this.mD():
{

}

}
;
t.iw=function(b)
{
if(this.QD)this.QD(b);
else if(ra(b))if(qa(b.F))b.F();
else for(var c in b)delete b[c]
}
;

t.p=function()
{
cf.m.p.call(this);
for(var b=this.Wg;
b.length;
)this.iw(b.pop());
delete this.Wg
}
;
a.gf=function()
{
this.eg=[];
this.Az=new Od;
this.mu=this.cJ=this.dJ=this.OI=0;
this.zk=new Od;
this.Lv=this.bJ=0;
this.dz=1;
this.Bl=new cf(0,4E3);
this.Bl.ml=function()
{
return new ef
}
;
this.Rp=new cf(0,50);
this.Rp.ml=function()
{
return new ff
}
;
var b=this;
this.Px=new cf(0,2E3);
this.Px.ml=function()
{
return String(b.dz++)
}
;
this.Px.iw=ba();
this.$M=3
}
;
gf.prototype.Ca=le("goog.debug.Trace");
a.ff=function()
{
this.AB=this.time=this.count=0
}
;

ff.prototype.toString=function()
{
var b=[];
b.push(this.type," ",this.count," (",Math.round(10*this.time)/10," ms)");
this.AB&&b.push(" [VarAlloc = ",this.AB,"]");
return b.join("")
}
;
a.ef=function()
{

}
,a.kf=function(b,c,d,e)
{
var g=[];
-1==d?g.push("    "):g.push(hf(b.Fr-d));
g.push(" ",jf(b.Fr-c));
0==b.Gr?g.push(" Start        "):1==b.Gr?(g.push(" Done "),g.push(hf(b.d0-b.startTime)," ms ")):g.push(" Comment      ");
g.push(e,b);
0<b.aJ&&g.push("[VarAlloc ",b.aJ,"] ");
return g.join("")
}
;

ef.prototype.toString=function()
{
return this.type==k?this.cD:"["+this.type+"] "+this.cD
}
;
gf.prototype.reset=function(b)
{
this.$M=b;
for(b=0;
b<this.eg.length;
b++)
{
var c=this.Bl.id;
c&&df(this.Px,c);
df(this.Bl,this.eg[b])
}
this.eg.length=0;
this.Az.clear();
this.OI=za();
this.Lv=this.bJ=this.mu=this.cJ=this.dJ=0;
c=this.zk.Fb();
for(b=0;
b<c.length;
b++)
{
var d=this.zk.get(c[b]);
d.count=0;
d.time=0;
d.AB=0;
df(this.Rp,d)
}
this.zk.clear()
}
;
gf.prototype.Bq=u(14);

gf.prototype.toString=function()
{
for(var b=[],c=-1,d=[],e=0;
e<this.eg.length;
e++)
{
var g=this.eg[e];
1==g.Gr&&d.pop();
b.push(" ",kf(g,this.OI,c,d.join("")));
c=g.Fr;
b.push("\n");
0==g.Gr&&d.push("|  ")
}
if(0!=this.Az.Va())
{
var h=za();
b.push(" Unstopped timers:\n");
O.forEach(this.Az,function(c)
{
b.push("  ",c," (",h-c.startTime," ms, started at ",jf(c.startTime),")\n")
}
)
}
c=this.zk.Fb();
for(e=0;
e<c.length;
e++)d=this.zk.get(c[e]),1<d.count&&b.push(" TOTAL ",d,"\n");
b.push("Total tracers created ",this.bJ,
"\n","Total comments created ",this.Lv,"\n","Overhead start: ",this.dJ," ms\n","Overhead end: ",this.cJ," ms\n","Overhead comment: ",this.mu," ms\n");
return b.join("")
}
;
a.hf=function(b)
{
var b=Math.round(b),c="";
1E3>b&&(c=" ");
100>b&&(c="  ");
10>b&&(c="   ");
return c+b
}
,a.jf=function(b)
{
b=Math.round(b);
return String(100+b/1E3%60).substring(1,3)+"."+String(1E3+b%1E3).substring(1,4)
}
;
new gf;
a.lf=function(b)
{
return function()
{
return b
}

}
,a.mf=lf(n),a.nf=lf(j),a.of=function(b)
{
return b
}
,a.pf=function(b,c)
{
var d=arguments,e=d.length;
return function()
{
var b;
e&&(b=d[e-1].apply(this,arguments));
for(var c=e-2;
0<=c;
c--)b=d[c].call(this,b);
return b
}

}
,a.qf=function(b)
{
return function()
{
return!b.apply(this,arguments)
}

}
;
a.rf=function()
{
M.call(this)
}
;
y(rf,M);
a.sf=function(b,c)
{
this.Nr=b;
this.ha=c
}
;
sf.prototype.execute=function(b)
{
this.Nr&&(this.Nr.call(this.ha||k,b),this.Nr=this.ha=k)
}
;
sf.prototype.abort=function()
{
this.ha=this.Nr=k
}
;
a.tf=function(b,c)
{
M.call(this);
this.JD=b;
this.Fd=c;
this.vz=[];
this.jz=[];
this.WD=[]
}
;
y(tf,M);
t=tf.prototype;
t.Eg=k;
t.sR=rf;
t.$y=k;
t.$d=q("Fd");
t.mx=function()
{
var b=[];
return jQuery.support.cors?this.Eg:ma(this.Eg)?(z.forEach(this.Eg,function(c)
{
b.push(uf(new vf(c)))
}
),b):uf(new vf(this.Eg))
}
;
t.xt=function(b,c)
{
return this.yt(this.vz,b,c)
}
;
t.yt=function(b,c,d)
{
c=new sf(c,d);
b.push(c);
return c
}
;
t.ee=function()
{
return!!this.$y
}
;

t.hp=function(b)
{
var c=new this.sR;
b();
this.$y=c;
c=(c=!!wf(this.WD,b()))||!!wf(this.vz,b());
c||(this.jz.length=0);
return c
}
;
t.si=function(b)
{
if(b=wf(this.jz,b))
{
var c="Module errback failures: "+b;
window.setTimeout(function()
{
f(Error(c))
}
,0)
}
this.WD.length=0;
this.vz.length=0
}
;
a.wf=function(b,c)
{
for(var d=[],e=0;
e<b.length;
e++)try
{
b[e].execute(c)
}
catch(g)
{
d.push(g)
}
b.length=0;
return d.length?d:k
}
;
t.p=function()
{
tf.m.p.call(this);
Vc(this.$y)
}
;
a.xf=function()
{
M.call(this);
this.od=
{

}
;
this.xf=[];
this.pk=[];
this.sd=[];
this.Oi=[];
this.Uq=
{

}
;
this.AD=this.Pq=new tf([],"")
}
;
y(xf,M);
ia(xf);
t=xf.prototype;
t.Ca=le("goog.module.ModuleManager");
t.IC=n;
t.Ky=k;
t.er=0;
t.VF=n;
t.vJ=n;
t.DG=k;
t.CE=q("DG");
t.Gb=function()
{
return 0<this.xf.length
}
;

a.zf=function(b)
{
var c=b.Gb();
c!=b.VF&&(yf(b,c?"active":"idle"),b.VF=c);
c=0<b.Oi.length;
c!=b.vJ&&(yf(b,c?"userActive":"userIdle"),b.vJ=c)
}
,a.Bf=function(b,c,d,e,g)
{
d.xt(g.hl,g);
d.yt(d.jz,function(b)
{
Le(g,Error(b))
}
,i);
Af(b,c)?e&&(b.Ca.info("User initiated module already loading: "+c),z.contains(b.Oi,c)||b.Oi.push(c),zf(b)):e?(b.Ca.info("User initiated module load: "+c),z.contains(b.Oi,c)||b.Oi.push(c)):b.Ca.info("Initiating module load: "+c)
}
,a.Df=function(b,c)
{
z.Hb(b.xf)?Cf(b,c):(b.sd.push(c),zf(b))
}
,
a.Cf=function(b,c,d,e)
{
d||(b.er=0);
for(var g=0;
g<c.length;
g++)b.od[c[g]].ee()&&f(Error("Module already loaded: "+c[g]));
d=[];
for(g=0;
g<c.length;
g++)d=d.concat(Ef(b,c[g]));
z.Yz(d);
!b.IC&&1<d.length&&(g=d.shift(),b.Ca.info("Must load "+g+" module before "+c),b.sd=z.map(d,function(b)
{
return[b]
}
).concat(b.sd),d=[g]);
b.Ca.info("Loading module(s): "+d);
b.xf=d;
b.pk=b.IC?c:z.clone(d);
zf(b);
c=v(b.Ky.WQ,b.Ky,z.clone(d),b.od,k,v(b.OO,b),v(b.PO,b),!!e);
(b=5E3*Math.pow(b.er,2))?window.setTimeout(c,b):c()
}
,a.Ef=
function(b,c)
{
for(var d=[c],e=z.clone(b.od[c].JD);
e.length;
)
{
var g=e.pop();
b.od[g].ee()||(d.unshift(g),Array.prototype.unshift.apply(e,b.od[g].JD))
}
z.Yz(d);
return d
}
,a.If=function(b)
{
var c=xf.D();
c.$f?c.Ca.Mk("Module loaded after module manager was disposed: "+b):(c.Ca.info("Module loaded: "+b),c.od[b].hp(v(c.CE,c))&&Ff(c,Gf),z.remove(c.Oi,b),z.remove(c.xf,b),z.Hb(c.xf)&&Hf(c),zf(c))
}
,a.Af=function(b,c)
{
if(z.contains(b.xf,c))return j;
for(var d=0;
d<b.sd.length;
d++)if(z.contains(b.sd[d],c))return j;

return n
}
;
t.load=function(b,c)
{
var d=[];
z.Yz([b],d);
for(var e=[],g=
{

}
,h=0;
h<d.length;
h++)
{
var l=d[h],m=this.od[l],p=new Ke;
g[l]=p;
m.ee()?p.hl(this.DG):(Bf(this,l,m,!!c,p),Af(this,l)||e.push(l))
}
0<e.length&&Df(this,e);
return g[b]
}
;
a.Gf=4;
t=xf.prototype;

t.OO=function(b)
{
this.er++;
401==b?(this.Ca.info("Module loading unauthorized"),Ff(this,0),this.sd.length=0):410==b?(Jf(this,3),Hf(this)):3<=this.er?(this.Ca.info("Aborting after failure to load: "+this.xf),Jf(this,1),Hf(this)):(this.Ca.info("Retrying after failure to load: "+this.xf),Cf(this,this.pk,j,8001==b))
}
;
t.PO=function()
{
this.Ca.info("Aborting after timeout: "+this.xf);
Jf(this,2);
Hf(this)
}
;

a.Jf=function(b,c)
{
1<b.pk.length?b.sd=z.map(b.pk,function(b)
{
return[b]
}
).concat(b.sd):Ff(b,c)
}
,a.Ff=function(b,c)
{
var d=b.pk;
b.xf.length=0;
for(var e=[],g=0;
g<b.sd.length;
g++)
{
var h=z.filter(b.sd[g],function(b)
{
var c=Ef(this,b);
return z.some(d,function(b)
{
return z.contains(c,b)
}
)
}
,b);
z.extend(e,h)
}
for(g=0;
g<d.length;
g++)z.ws(e,d[g]);
for(g=0;
g<e.length;
g++)
{
for(h=0;
h<b.sd.length;
h++)z.remove(b.sd[h],e[g]);
z.remove(b.Oi,e[g])
}
var l=b.Uq.error;
if(l)for(g=0;
g<l.length;
g++)for(var m=l[g],h=0;
h<e.length;
h++)m("error",
e[h],c);
for(g=0;
g<d.length;
g++)b.od[d[g]]&&b.od[d[g]].si(c);
b.pk.length=0;
zf(b)
}
,a.Hf=function(b)
{
for(;
b.sd.length;
)
{
var c=z.filter(b.sd.shift(),function(b)
{
return!this.od[b].ee()
}
,b);
if(0<c.length)
{
Cf(b,c);
return
}

}
zf(b)
}
;
t.xt=function(b,c)
{
ma(b)||(b=[b]);
for(var d=0;
d<b.length;
d++)this.yt(b[d],c)
}
;
t.yt=function(b,c)
{
var d=this.Uq;
d[b]||(d[b]=[]);
d[b].push(c)
}
;
a.yf=function(b,c)
{
for(var d=b.Uq[c],e=0;
d&&e<d.length;
e++)d[e](c)
}
;

t.p=function()
{
xf.m.p.call(this);
Uc(E.Ja(this.od),this.Pq);
this.Uq=this.sd=this.Oi=this.pk=this.xf=this.od=k
}
;
a.Kf=function(b)
{
this.Fa=b
}
,a.Lf=/\s*;
\s*/;
t=Kf.prototype;
t.isEnabled=function()
{
return navigator.cookieEnabled
}
;
t.set=function(b,c,d,e,g,h)
{
/[;
=\s]/.test(b)&&f(Error('Invalid cookie name "'+b+'"'));
/[;
\r\n]/.test(c)&&f(Error('Invalid cookie value "'+c+'"'));
la(d)||(d=-1);
g=g?";
domain="+g:"";
e=e?";
path="+e:"";
h=h?";
secure":"";
d=0>d?"":0==d?";
expires="+(new Date(1970,1,1)).toUTCString():";
expires="+(new Date(za()+1E3*d)).toUTCString();
this.Fa.cookie=b+"="+c+g+e+d+h
}
;

t.get=function(b,c)
{
for(var d=b+"=",e=(this.Fa.cookie||"").split(Lf),g=0,h;
h=e[g];
g++)
{
if(0==h.lastIndexOf(d,0))return h.substr(d.length);
if(h==b)return""
}
return c
}
;
t.remove=function(b,c,d)
{
var e=this.Pd(b);
this.set(b,"",0,c,d);
return e
}
;
t.Fb=function()
{
return Mf(this).keys
}
;
t.Ja=function()
{
return Mf(this).wJ
}
;
t.Hb=function()
{
return!this.Fa.cookie
}
;
t.Va=function()
{
return!this.Fa.cookie?0:(this.Fa.cookie||"").split(Lf).length
}
;
t.Pd=function(b)
{
return la(this.get(b))
}
;

t.Ng=function(b)
{
for(var c=Mf(this).wJ,d=0;
d<c.length;
d++)if(c[d]==b)return j;
return n
}
;
t.clear=function()
{
for(var b=Mf(this).keys,c=b.length-1;
0<=c;
c--)this.remove(b[c])
}
;
a.Mf=function(b)
{
for(var b=(b.Fa.cookie||"").split(Lf),c=[],d=[],e,g,h=0;
g=b[h];
h++)e=g.indexOf("="),-1==e?(c.push(""),d.push(g)):(c.push(g.substring(0,e)),d.push(g.substring(e+1)));
return
{
keys:c,wJ:d
}

}
,a.Nf=new Kf(document);
Nf.PX=3950;
a.Of=function(b,c,d,e)
{
this.top=b;
this.right=c;
this.bottom=d;
this.left=e
}
;
Of.prototype.clone=function()
{
return new Of(this.top,this.right,this.bottom,this.left)
}
;
Of.prototype.contains=function(b)
{
return!this||!b?n:b instanceof Of?b.left>=this.left&&b.right<=this.right&&b.top>=this.top&&b.bottom<=this.bottom:b.x>=this.left&&b.x<=this.right&&b.y>=this.top&&b.y<=this.bottom
}
;
Of.prototype.expand=u(64);

a.Pf=function(b,c)
{
var d=c.x<b.left?c.x-b.left:c.x>b.right?c.x-b.right:0,e=c.y<b.top?c.y-b.top:c.y>b.bottom?c.y-b.bottom:0;
return Math.sqrt(d*d+e*e)
}
;
a.Qf=function(b,c,d,e)
{
this.left=b;
this.top=c;
this.width=d;
this.height=e
}
;
Qf.prototype.clone=function()
{
return new Qf(this.left,this.top,this.width,this.height)
}
;
a.Rf=function(b)
{
return new Of(b.top,b.left+b.width,b.top+b.height,b.left)
}
;

Qf.prototype.EF=function(b)
{
var c=Math.max(this.left,b.left),d=Math.min(this.left+this.width,b.left+b.width);
if(c<=d)
{
var e=Math.max(this.top,b.top),b=Math.min(this.top+this.height,b.top+b.height);
if(e<=b)return this.left=c,this.top=e,this.width=d-c,this.height=b-e,j
}
return n
}
;

Qf.prototype.contains=function(b)
{
return b instanceof Qf?this.left<=b.left&&this.left+this.width>=b.left+b.width&&this.top<=b.top&&this.top+this.height>=b.top+b.height:b.x>=this.left&&b.x<=this.left+this.width&&b.y>=this.top&&b.y<=this.top+this.height
}
;
Qf.prototype.Ql=function()
{
return new Qb(this.width,this.height)
}
;
a.Tf=function(b,c,d)
{
oa(c)?Sf(b,d,c):E.forEach(c,xa(Sf,b))
}
,a.Sf=function(b,c,d)
{
(d=Uf(b,d))&&(b.style[d]=c)
}
,a.Uf=function(b,c)
{
var d=gb(c);
if(b.style[d]===i)
{
var e=C?"Webkit":B?"Moz":A?"ms":tb?"O":k,g;
g=oa(i)?$a(i):"\\s";
g=c.replace(RegExp("(^"+(g?"|["+g+"]+":"")+")([a-z])","g"),function(b,c,d)
{
return c+d.toUpperCase()
}
);
e+=g;
if(b.style[e]!==i)return e
}
return d
}
,a.Vf=function(b,c)
{
var d=Tb(b);
return d.defaultView&&d.defaultView.getComputedStyle&&(d=d.defaultView.getComputedStyle(b,k))?d[c]||d.getPropertyValue(c)||
"":""
}
,a.Wf=function(b,c)
{
return b.currentStyle?b.currentStyle[c]:k
}
,a.Xf=function(b,c)
{
return Vf(b,c)||Wf(b,c)||b.style&&b.style[c]
}
,a.Yf=function(b)
{
return Xf(b,"position")
}
,a.$f=function(b,c,d)
{
var e,g=B&&(mb||xb)&&Gb("1.9");
c instanceof Ob?(e=c.x,c=c.y):(e=c,c=d);
b.style.left=Zf(e,g);
b.style.top=Zf(c,g)
}
,a.ag=function(b)
{
b=b?Tb(b):document;
return A&&!Ib(9)&&!Mc(Ub(b))?b.body:b.documentElement
}
,a.bg=function(b)
{
var c=b.getBoundingClientRect();
A&&(b=b.ownerDocument,c.left-=b.documentElement.clientLeft+
b.body.clientLeft,c.top-=b.documentElement.clientTop+b.body.clientTop);
return c
}
,a.cg=function(b)
{
if(A&&!Ib(8))return b.offsetParent;
for(var c=Tb(b),d=Xf(b,"position"),e="fixed"==d||"absolute"==d,b=b.parentNode;
b&&b!=c;
b=b.parentNode)if(d=Xf(b,"position"),e=e&&"static"==d&&b!=c.documentElement&&b!=c.body,!e&&(b.scrollWidth>b.clientWidth||b.scrollHeight>b.clientHeight||"fixed"==d||"absolute"==d||"relative"==d))return b;
return k
}
,a.fg=function(b)
{
for(var c=new Of(0,Infinity,Infinity,0),d=Ub(b),e=d.wa().body,
g=d.wa().documentElement,h=ac(d.Fa);
b=cg(b);
)if((!A||0!=b.clientWidth)&&(!C||0!=b.clientHeight||b!=e)&&b!=e&&b!=g&&"visible"!=Xf(b,"overflow"))
{
var l=dg(b),m;
m=b;
if(B&&!Gb("1.9"))
{
var p=parseFloat(Vf(m,"borderLeftWidth"));
if(eg(m))var r=m.offsetWidth-m.clientWidth-p-parseFloat(Vf(m,"borderRightWidth")),p=p+r;
m=new Ob(p,parseFloat(Vf(m,"borderTopWidth")))
}
else m=new Ob(m.clientLeft,m.clientTop);
l.x+=m.x;
l.y+=m.y;
c.top=Math.max(c.top,l.y);
c.right=Math.min(c.right,l.x+b.clientWidth);
c.bottom=Math.min(c.bottom,
l.y+b.clientHeight);
c.left=Math.max(c.left,l.x)
}
e=h.scrollLeft;
h=h.scrollTop;
c.left=Math.max(c.left,e);
c.top=Math.max(c.top,h);
d=$b(d.Sa());
c.right=Math.min(c.right,e+d.width);
c.bottom=Math.min(c.bottom,h+d.height);
return 0<=c.top&&0<=c.left&&c.bottom>c.top&&c.right>c.left?c:k
}
,a.hg=function(b,c)
{
var d,e=dg(b),g=dg(c),h=gg(c);
d=e.x-g.x-h.left;
var e=e.y-g.y-h.top,g=c.clientHeight-b.offsetHeight,h=c.scrollLeft,l=c.scrollTop,h=h+Math.min(d,Math.max(d-(c.clientWidth-b.offsetWidth),0)),l=l+Math.min(e,
Math.max(e-g,0));
d=new Ob(h,l);
c.scrollLeft=d.x;
c.scrollTop=d.y
}
,a.dg=function(b)
{
var c,d=Tb(b),e=Xf(b,"position"),g=B&&d.getBoxObjectFor&&!b.getBoundingClientRect&&"absolute"==e&&(c=d.getBoxObjectFor(b))&&(0>c.screenX||0>c.screenY),h=new Ob(0,0),l=ag(d);
if(b==l)return h;
if(b.getBoundingClientRect)c=bg(b),b=Nc(Ub(d)),h.x=c.left+b.x,h.y=c.top+b.y;
else if(d.getBoxObjectFor&&!g)c=d.getBoxObjectFor(b),b=d.getBoxObjectFor(l),h.x=c.screenX-b.screenX,h.y=c.screenY-b.screenY;
else
{
c=b;
do
{
h.x+=c.offsetLeft;

h.y+=c.offsetTop;
c!=b&&(h.x+=c.clientLeft||0,h.y+=c.clientTop||0);
if(C&&"fixed"==Yf(c))
{
h.x+=d.body.scrollLeft;
h.y+=d.body.scrollTop;
break
}
c=c.offsetParent
}
while(c&&c!=b);
if(tb||C&&"absolute"==e)h.y-=d.body.offsetTop;
for(c=b;
(c=cg(c))&&c!=d.body&&c!=l;
)if(h.x-=c.scrollLeft,!tb||"TR"!=c.tagName)h.y-=c.scrollTop
}
return h
}
,a.jg=function(b,c)
{
var d=ig(b),e=ig(c);
return new Ob(d.x-e.x,d.y-e.y)
}
,a.ig=function(b)
{
var c=new Ob;
if(1==b.nodeType)
{
if(b.getBoundingClientRect)
{
var d=bg(b);
c.x=d.left;
c.y=d.top
}
else
{
var d=
Nc(Ub(b)),e=dg(b);
c.x=e.x-d.x;
c.y=e.y-d.y
}
if(B&&!Gb(12))
{
var g;
A?g="-ms-transform":C?g="-webkit-transform":tb?g="-o-transform":B&&(g="-moz-transform");
var h;
g&&(h=Xf(b,g));
h||(h=Xf(b,"transform"));
h?(b=h.match(kg),b=!b?new Ob(0,0):new Ob(parseFloat(b[1]),parseFloat(b[2]))):b=new Ob(0,0);
c=new Ob(c.x+b.x,c.y+b.y)
}

}
else g=qa(b.vE),h=b,b.targetTouches?h=b.targetTouches[0]:g&&b.Yb.targetTouches&&(h=b.Yb.targetTouches[0]),c.x=h.clientX,c.y=h.clientY;
return c
}
,a.lg=function(b,c,d)
{
var e=dg(b);
c instanceof
Ob&&(d=c.y,c=c.x);
$f(b,b.offsetLeft+(c-e.x),b.offsetTop+(d-e.y))
}
,a.mg=function(b,c,d)
{
c instanceof Qb?(d=c.height,c=c.width):d==i&&f(Error("missing height argument"));
b.style.width=Zf(c,j);
b.style.height=Zf(d,j)
}
,a.Zf=function(b,c)
{
"number"==typeof b&&(b=(c?Math.round(b):b)+"px");
return b
}
,a.og=function(b)
{
if("none"!=Xf(b,"display"))return ng(b);
var c=b.style,d=c.display,e=c.visibility,g=c.position;
c.visibility="hidden";
c.position="absolute";
c.display="inline";
b=ng(b);
c.display=d;
c.position=g;
c.visibility=
e;
return b
}
,a.ng=function(b)
{
var c=b.offsetWidth,d=b.offsetHeight,e=C&&!c&&!d;
return(!la(c)||e)&&b.getBoundingClientRect?(b=bg(b),new Qb(b.right-b.left,b.bottom-b.top)):new Qb(c,d)
}
,a.pg=function(b)
{
var c=dg(b),b=og(b);
return new Qf(c.x,c.y,b.width,b.height)
}
,a.qg=function(b,c)
{
var d=b.style;
"opacity"in d?d.opacity=c:"MozOpacity"in d?d.MozOpacity=c:"filter"in d&&(d.filter=""===c?"":"alpha(opacity="+100*c+")")
}
,a.R=function(b,c)
{
b.style.display=c?"":"none"
}
,a.rg=function(b)
{
return"none"!=b.style.display
}
,
a.eg=function(b)
{
return"rtl"==Xf(b,"direction")
}
,a.sg=B?"MozUserSelect":C?"WebkitUserSelect":k,a.tg=function(b,c,d)
{
d=!d?b.getElementsByTagName("*"):k;
if(sg)
{
if(c=c?"none":"",b.style[sg]=c,d)for(var b=0,e;
e=d[b];
b++)e.style[sg]=c
}
else if(A||tb)if(c=c?"on":"",b.setAttribute("unselectable",c),d)for(b=0;
e=d[b];
b++)e.setAttribute("unselectable",c)
}
,a.ug=function(b)
{
return new Qb(b.offsetWidth,b.offsetHeight)
}
,a.vg=function(b,c,d,e)
{
if(/^\d+px?$/.test(c))return parseInt(c,10);
var g=b.style[d],h=b.runtimeStyle[d];

b.runtimeStyle[d]=b.currentStyle[d];
b.style[d]=c;
c=b.style[e];
b.style[d]=g;
b.runtimeStyle[d]=h;
return c
}
,a.wg=function(b,c)
{
var d=Wf(b,c);
return d?vg(b,d,"left","pixelLeft"):0
}
,a.xg=function(b)
{
if(A)
{
var c=wg(b,"paddingLeft"),d=wg(b,"paddingRight"),e=wg(b,"paddingTop"),b=wg(b,"paddingBottom");
return new Of(e,d,b,c)
}
c=Vf(b,"paddingLeft");
d=Vf(b,"paddingRight");
e=Vf(b,"paddingTop");
b=Vf(b,"paddingBottom");
return new Of(parseFloat(e),parseFloat(d),parseFloat(b),parseFloat(c))
}
,a.yg=
{
thin:2,medium:4,
thick:6
}
,a.zg=function(b,c)
{
if("none"==Wf(b,c+"Style"))return 0;
var d=Wf(b,c+"Width");
return d in yg?yg[d]:vg(b,d,"left","pixelLeft")
}
,a.gg=function(b)
{
if(A)
{
var c=zg(b,"borderLeft"),d=zg(b,"borderRight"),e=zg(b,"borderTop"),b=zg(b,"borderBottom");
return new Of(e,d,b,c)
}
c=Vf(b,"borderLeftWidth");
d=Vf(b,"borderRightWidth");
e=Vf(b,"borderTopWidth");
b=Vf(b,"borderBottomWidth");
return new Of(parseFloat(e),parseFloat(d),parseFloat(b),parseFloat(c))
}
,a.kg=/matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
a.Ag="/update",a.Bg=n;
a.Cg=void 0,a.S=void 0,a.Dg=void 0,a.Eg=void 0,a.Fg=void 0,a.Gg=void 0,a.Hg=void 0,a.Ig=void 0,a.Jg=void 0,a.Kg=void 0,a.Lg=void 0,a.Mg=void 0,a.Ng=void 0,a.Og=void 0,a.Pg=void 0,a.Qg=void 0,a.Rg=void 0,a.Sg=
{

}
,a.Tg=
{

}
;

z.forEach(window.DZMT,function(b)
{
var c=b[1];
switch(b[0])
{
case "form_key":Cg=c;
break;
case "current_user":S=c;
S.Uw=c[0];
S.Ha=function()
{
return"-1"!==S[3]
}
;
S.Xj=c[3];
S.xe=1===c[7];
S.Dr=c[8];
S.Ro=c[9];
S.Nx=c[10];
S.cz=c[11];
S.RN=function()
{
return S[2].replace("_s","_is")
}
;
break;
case "env":Dg=
{
Fm:c[0],dr:c[1],Nc:c[2],HF:c[3],c0:"http://static."+c[0],RF:n,f0:j
}
;
break;
case "env_comet_path":Dg.dr=c;
break;
case "current_question":Eg=
{
X:c[0],Jq:c[1],ar:c[2],Xm:c[3],rZ:c[4],nn:c[5],lb:c[6],Ho:c[7],g_:c[8],h0:c[9],
BZ:c[10],Wb:c[11],oV:c[12],wi:c[13],bZ:c[14],status:c[15]
}
;
break;
case "current_question_owner":S.wi=c;
break;
case "bio":Fg=c;
break;
case "current_topic":Gg=c;
break;
case "current_people":Hg=c;
Hg.Uw=c[0];
Hg.id=c[3];
break;
case "current_list":Ig=c;
break;
case "block_topic":Jg=c;
break;
case "draft":Kg=c.length?c:k;
break;
case "editing_queue":Lg=c;
break;
case "sina_bind_info":c.length&&(Sg.id=c[0],Sg.name=c[1]);
break;
case "qq_bind_info":c.length&&(Tg.id=c[0],Tg.name=c[1]);
break;
case "disabled_components":Mg=
c;
break;
case "comet_path":Ag=c;
break;
case "enforce_realname":Ng=c;
break;
case "action_ban":Og=c;
break;
case "admin_reasons":Pg=c;
break;
case "permissions":Qg=c,Rg=function(b)
{
return z.contains(Qg,b)
}

}

}
);
window.DZMT=k;
Eg&&(Eg.NF=n);
Mg||(Mg=[]);
navigator.userAgent.match(/iPad/i)&&(Dg.RF=j,Dg.Nc=j);
Dg.Fm&&(document.domain=Dg.Fm);
Dg.dr&&(Ag="http://"+Dg.dr+Ag);
Dg.Nc&&window.scrollTo(0,1);
a.Vg=function(b,c,d,e,g)
{
if(!A&&(!C||!Gb("525")))return j;
if(mb&&g)return Ug(b);
if(g&&!e||!d&&(17==c||18==c||mb&&91==c))return n;
if(C&&e&&d)switch(b)
{
case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return n
}
if(A&&e&&c==b)return n;
switch(b)
{
case 13:return!(A&&Ib(9));
case 27:return!C
}
return Ug(b)
}
,a.Ug=function(b)
{
if(48<=b&&57>=b||96<=b&&106>=b||65<=b&&90>=b||C&&0==b)return j;
switch(b)
{
case 32:case 63:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:return j;

default:return n
}

}
,a.Wg=function(b)
{
switch(b)
{
case 61:return 187;
case 59:return 186;
case 224:return 91;
case 0:return 224;
default:return b
}

}
;
a.Xg=function(b)
{
var c=b.offsetLeft,d=b.offsetParent;
!d&&"fixed"==Yf(b)&&(d=Tb(b).documentElement);
if(!d)return c;
if(B)var e=gg(d),c=c+e.left;
else Ib(8)&&(e=gg(d),c-=e.left);
return eg(d)?d.clientWidth-(c+b.offsetWidth):c
}
;
a.Yg=function(b,c,d)
{
M.call(this);
this.target=b;
this.handle=c||b;
this.Ms=d||new Qf(NaN,NaN,NaN,NaN);
this.Fa=Tb(b);
this.P=new me(this);
N(this.handle,["touchstart","mousedown"],this.Um,n,this)
}
;
y(Yg,Hd);
a.Zg=A||B&&Gb("1.9.3");
t=Yg.prototype;
t.clientX=0;
t.clientY=0;
t.screenX=0;
t.screenY=0;
t.Yt=0;
t.Zt=0;
t.gj=0;
t.hj=0;
t.ic=j;
t.lj=n;
t.Ox=0;
t.tR=0;
t.QP=n;
t.Ni=n;
t.bg=u(52);
t.g=q("P");
t.uI=function(b)
{
this.Ox=Math.pow(b,2)
}
;
t.cb=ca("ic");

t.p=function()
{
Yg.m.p.call(this);
yd(this.handle,["touchstart","mousedown"],this.Um,n,this);
this.P.Pc();
Zg&&this.Fa.releaseCapture();
this.P=this.handle=this.target=k
}
;
a.$g=function(b)
{
la(b.Df)||(b.Df=eg(b.target));
return b.Df
}
;

t.Um=function(b)
{
var c="mousedown"==b.type;
if(this.ic&&!this.lj&&(!c||od(b)))
{
ah(b);
if(0==this.Ox)if(this.dispatchEvent(new bh("start",this,b.clientX,b.clientY,b)))this.lj=j,b.preventDefault();
else return;
else b.preventDefault();
var c=this.Fa,d=c.documentElement,e=!Zg;
this.P.c(c,["touchmove","mousemove"],this.TO,e);
this.P.c(c,["touchend","mouseup"],this.Er,e);
Zg?(d.setCapture(n),this.P.c(d,"losecapture",this.Er)):this.P.c(cc(c),"blur",this.Er);
A&&this.QP&&this.P.c(c,"dragstart",jd);
this.wU&&this.P.c(this.wU,
"scroll",this.pz,e);
this.clientX=this.Yt=b.clientX;
this.clientY=this.Zt=b.clientY;
this.screenX=b.screenX;
this.screenY=b.screenY;
this.gj=this.Ni?Xg(this.target):this.target.offsetLeft;
this.hj=this.target.offsetTop;
this.Dz=Nc(Ub(this.Fa));
this.tR=za()
}
else this.dispatchEvent("earlycancel")
}
;

t.Er=function(b,c)
{
this.P.Pc();
Zg&&this.Fa.releaseCapture();
if(this.lj)
{
ah(b);
this.lj=n;
var d=ch(this,this.gj),e=dh(this,this.hj);
this.dispatchEvent(new bh("end",this,b.clientX,b.clientY,b,d,e,c||"touchcancel"==b.type))
}
else this.dispatchEvent("earlycancel");
("touchend"==b.type||"touchcancel"==b.type)&&b.preventDefault()
}
;
a.ah=function(b)
{
var c=b.type;
"touchstart"==c||"touchmove"==c?b.v(b.Yb.targetTouches[0],b.currentTarget):("touchend"==c||"touchcancel"==c)&&b.v(b.Yb.changedTouches[0],b.currentTarget)
}
;

t.TO=function(b)
{
if(this.ic)
{
ah(b);
var c=(this.Ni&&$g(this)?-1:1)*(b.clientX-this.clientX),d=b.clientY-this.clientY;
this.clientX=b.clientX;
this.clientY=b.clientY;
this.screenX=b.screenX;
this.screenY=b.screenY;
if(!this.lj)
{
var e=this.Yt-this.clientX,g=this.Zt-this.clientY;
if(e*e+g*g>this.Ox)if(this.dispatchEvent(new bh("start",this,b.clientX,b.clientY,b)))this.lj=j;
else
{
this.$f||this.Er(b);
return
}

}
d=eh(this,c,d);
c=d.x;
d=d.y;
this.lj&&this.dispatchEvent(new bh("beforedrag",this,b.clientX,b.clientY,b,
c,d))&&(fh(this,b,c,d),b.preventDefault())
}

}
;
a.eh=function(b,c,d)
{
var e=Nc(Ub(b.Fa)),c=c+(e.x-b.Dz.x),d=d+(e.y-b.Dz.y);
b.Dz=e;
b.gj+=c;
b.hj+=d;
c=ch(b,b.gj);
b=dh(b,b.hj);
return new Ob(c,b)
}
;
t.pz=function(b)
{
var c=eh(this,0,0);
b.clientX=this.clientX;
b.clientY=this.clientY;
fh(this,b,c.x,c.y)
}
;

a.fh=function(b,c,d,e)
{
b.Zv(d,e);
b.dispatchEvent(new bh("drag",b,c.clientX,c.clientY,c,d,e))
}
,a.ch=function(b,c)
{
var d=b.Ms,e=!isNaN(d.left)?d.left:k,d=!isNaN(d.width)?d.width:0;
return Math.min(e!=k?e+d:Infinity,Math.max(e!=k?e:-Infinity,c))
}
,a.dh=function(b,c)
{
var d=b.Ms,e=!isNaN(d.top)?d.top:k,d=!isNaN(d.height)?d.height:0;
return Math.min(e!=k?e+d:Infinity,Math.max(e!=k?e:-Infinity,c))
}
;

t.Zv=function(b,c)
{
this.Ni&&$g(this)?this.target.style.right=b+"px":this.target.style.left=b+"px";
this.target.style.top=c+"px"
}
;
a.bh=function(b,c,d,e,g,h,l,m)
{
id.call(this,b);
this.clientX=d;
this.clientY=e;
this.QC=g;
this.left=la(h)?h:c.gj;
this.top=la(l)?l:c.hj;
this.yr=c;
this.DZ=!!m
}
;
y(bh,id);
a.gh=function(b)
{
M.call(this);
this.e=b;
b=A?"focusout":"blur";
this.UQ=N(this.e,A?"focusin":"focus",this,!A);
this.VQ=N(this.e,b,this,!A)
}
;
y(gh,Hd);
gh.prototype.handleEvent=function(b)
{
var c=new md(b.Yb);
c.type="focusin"==b.type||"focus"==b.type?"focusin":"focusout";
this.dispatchEvent(c)
}
;
gh.prototype.p=function()
{
gh.m.p.call(this);
Ad(this.UQ);
Ad(this.VQ);
delete this.e
}
;
a.hh=function()
{

}
;
ia(hh);
hh.prototype.dz=0;
a.ih=function(b)
{
return":"+(b.dz++).toString(36)
}
;
hh.D();
a.T=function(b)
{
M.call(this);
this.G=b||Ub();
this.Df=jh
}
;
y(T,Hd);
T.prototype.PP=hh.D();
a.jh=k,a.kh=function(b,c)
{
switch(b)
{
case 1:return c?"disable":"enable";
case 2:return c?"highlight":"unhighlight";
case 4:return c?"activate":"deactivate";
case 8:return c?"select":"unselect";
case 16:return c?"check":"uncheck";
case 32:return c?"focus":"blur";
case 64:return c?"open":"close"
}
f(Error("Invalid component state"))
}
;
t=T.prototype;
t.Fd=k;
t.Aa=n;
t.e=k;
t.Df=k;
t.Zy=k;
t.Wa=k;
t.Xb=k;
t.ef=k;
t.zJ=n;

t.$d=function()
{
return this.Fd||(this.Fd=ih(this.PP))
}
;
a.lh=function(b,c)
{
b.Wa&&b.Wa.ef&&(E.remove(b.Wa.ef,b.Fd),E.add(b.Wa.ef,c,b));
b.Fd=c
}
;
t.h=q("e");
t.bi=function(b)
{
return this.e?this.G.bi(b,this.e):k
}
;
t.g=function()
{
return this.Rl||(this.Rl=new me(this))
}
;
a.nh=function(b,c)
{
b==c&&f(Error("Unable to set parent component"));
c&&(b.Wa&&b.Fd&&mh(b.Wa,b.Fd)&&b.Wa!=c)&&f(Error("Unable to set parent component"));
b.Wa=c;
T.m.Pt.call(b,c)
}
;
t.getParent=q("Wa");

t.Pt=function(b)
{
this.Wa&&this.Wa!=b&&f(Error("Method not supported"));
T.m.Pt.call(this,b)
}
;
t.J=q("G");
t.o=function()
{
this.e=this.G.createElement("div")
}
;
t.Y=function(b)
{
this.Bt(b)
}
;
t.Bt=function(b,c)
{
this.Aa&&f(Error("Component already rendered"));
this.e||this.o();
b?b.insertBefore(this.e,c||k):this.G.wa().body.appendChild(this.e);
(!this.Wa||this.Wa.Aa)&&this.z()
}
;

t.n=function(b)
{
this.Aa&&f(Error("Component already rendered"));
if(b&&this.Vc(b))
{
this.zJ=j;
if(!this.G||this.G.wa()!=Tb(b))this.G=Ub(b);
this.Z(b);
this.z()
}
else f(Error("Invalid element to decorate"))
}
;
t.Vc=s(j);
t.Z=ca("e");
t.z=function()
{
this.Aa=j;
oh(this,function(b)
{
!b.Aa&&b.h()&&b.z()
}
)
}
;
t.Za=function()
{
oh(this,function(b)
{
b.Aa&&b.Za()
}
);
this.Rl&&this.Rl.Pc();
this.Aa=n
}
;

t.p=function()
{
T.m.p.call(this);
this.Aa&&this.Za();
this.Rl&&(this.Rl.F(),delete this.Rl);
oh(this,function(b)
{
b.F()
}
);
!this.zJ&&this.e&&L(this.e);
this.Wa=this.Zy=this.e=this.ef=this.Xb=k
}
;
t.H=function(b,c)
{
this.Xk(b,ph(this),c)
}
;

t.Xk=function(b,c,d)
{
b.Aa&&(d||!this.Aa)&&f(Error("Component already rendered"));
(0>c||c>ph(this))&&f(Error("Child component index out of bounds"));
if(!this.ef||!this.Xb)this.ef=
{

}
,this.Xb=[];
b.getParent()==this?(E.set(this.ef,b.$d(),b),z.remove(this.Xb,b)):E.add(this.ef,b.$d(),b);
nh(b,this);
z.Ao(this.Xb,b,c);
b.Aa&&this.Aa&&b.getParent()==this?(d=this.aa(),d.insertBefore(b.h(),d.childNodes[c]||k)):d?(this.e||this.o(),c=qh(this,c+1),b.Bt(this.aa(),c?c.e:k)):this.Aa&&(!b.Aa&&b.e&&b.e.parentNode&&1==
b.e.parentNode.nodeType)&&b.z()
}
;
t.aa=q("e");
t.Hd=function()
{
this.Df==k&&(this.Df=eg(this.Aa?this.e:this.G.wa().body));
return this.Df
}
;
t.Ci=function(b)
{
this.Aa&&f(Error("Component already rendered"));
this.Df=b
}
;
a.ph=function(b)
{
return b.Xb?b.Xb.length:0
}
,a.mh=function(b,c)
{
return b.ef&&c?E.get(b.ef,c)||k:k
}
,a.qh=function(b,c)
{
return b.Xb?b.Xb[c]||k:k
}
,a.oh=function(b,c,d)
{
b.Xb&&z.forEach(b.Xb,c,d)
}
;

t.removeChild=function(b,c)
{
if(b)
{
var d=oa(b)?b:b.$d(),b=mh(this,d);
d&&b&&(E.remove(this.ef,d),z.remove(this.Xb,b),c&&(b.Za(),b.e&&L(b.e)),nh(b,k))
}
b||f(Error("Child is not in parent component"));
return b
}
;
t.zt=function(b)
{
for(var c=[];
this.Xb&&0!=this.Xb.length;
)c.push(this.removeChild(qh(this,0),b));
return c
}
;
a.rh=function(b,c)
{
M.call(this);
this.ha=new me(this);
this.rh(b||k);
c&&(this.Ki=c)
}
;
y(rh,Hd);
t=rh.prototype;
t.e=k;
t.el=j;
t.EC=k;
t.Rj=n;
t.LU=n;
t.Ay=-1;
t.yy=-1;
t.fF=n;
t.qN=j;
t.Ki="toggle_display";
t.fi=q("Ki");
t.h=q("e");
t.rh=function(b)
{
sh(this);
this.e=b
}
;
t.Ap=u(62);
a.sh=function(b)
{
b.Rj&&f(Error("Can not change this state of the popup while showing."))
}
;
t.R=q("Rj");
t.qy=u(55);
t.w=function(b)
{
this.Mp&&this.Mp.stop();
this.to&&this.to.stop();
b?this.HA():this.Yl()
}
;
t.na=ha;

t.HA=function()
{
if(!this.Rj&&this.$o())
{
this.e||f(Error("Caller must call setElement before trying to show the popup"));
this.na();
var b=Tb(this.e);
this.fF&&this.ha.c(b,"keydown",this.XR,j);
if(this.el)if(this.ha.c(b,"mousedown",this.ZG,j),A)
{
var c;
try
{
c=b.activeElement
}
catch(d)
{

}
for(;
c&&"IFRAME"==c.nodeName;
)
{
try
{
var e=c.contentDocument||c.contentWindow.document
}
catch(g)
{
break
}
b=e;
c=b.activeElement
}
this.ha.c(b,"mousedown",this.ZG,j);
this.ha.c(b,"deactivate",this.XG)
}
else this.ha.c(b,"blur",this.XG);

"toggle_display"==this.Ki?(this.e.style.visibility="visible",R(this.e,j)):"move_offscreen"==this.Ki&&this.na();
this.Rj=j;
this.Mp?(xd(this.Mp,"end",this.et,n,this),this.Mp.play()):this.et()
}

}
;
t.Yl=function(b)
{
if(!this.Rj||!this.dispatchEvent(
{
type:"beforehide",target:b
}
))return n;
this.ha&&this.ha.Pc();
this.Rj=n;
this.yy=za();
this.to?(xd(this.to,"end",xa(this.kD,b),n,this),this.to.play()):this.kD(b);
return j
}
;

t.kD=function(b)
{
"toggle_display"==this.Ki?this.LU?Ld(this.gF,0,this):this.gF():"move_offscreen"==this.Ki&&(this.e.style.top="-10000px");
this.ak(b)
}
;
t.gF=function()
{
this.e.style.visibility="hidden";
R(this.e,n)
}
;
t.$o=function()
{
return this.dispatchEvent("beforeshow")
}
;
t.et=function()
{
this.Ay=za();
this.yy=-1;
this.dispatchEvent("show")
}
;
t.ak=function(b)
{
this.dispatchEvent(
{
type:"hide",target:b
}
)
}
;
t.ZG=function(b)
{
b=b.target;
!uc(this.e,b)&&((!this.EC||uc(this.EC,b))&&!(150>za()-this.Ay))&&this.Yl(b)
}
;

t.XR=function(b)
{
27==b.keyCode&&this.Yl(b.target)&&(b.preventDefault(),b.stopPropagation())
}
;
t.XG=function(b)
{
if(this.qN)
{
var c=Tb(this.e);
if(A||tb)
{
if(b=c.activeElement,!b||uc(this.e,b)||"BODY"==b.tagName)return
}
else if(b.target!=c)return;
150>za()-this.Ay||this.Yl()
}

}
;
t.p=function()
{
rh.m.p.call(this);
this.ha.F();
Vc(this.Mp);
Vc(this.to);
delete this.e;
delete this.ha
}
;
a.th=function(b,c)
{
T.call(this,c);
this.gW=!!b
}
;
y(th,T);
t=th.prototype;
t.Nw=k;
t.nb=n;
t.Uc=k;
t.Fc=k;
t.Lf=k;
t.N=s("goog-modalpopup");
t.co=q("Uc");
t.o=function()
{
th.m.o.call(this);
var b=this.h();
D.add(b,this.N());
Fc(b,j);
R(b,n);
this.Ny();
uh(this)
}
;

t.Ny=function()
{
this.gW&&!this.Fc&&(this.Fc=this.J().o("iframe",
{
frameborder:0,style:"border:0;
vertical-align:bottom;
",src:'javascript:""'
}
),this.Fc.className=this.N()+"-bg",R(this.Fc,n),qg(this.Fc,0));
this.Uc||(this.Uc=this.J().o("div",this.N()+"-bg"),R(this.Uc,n))
}
;
a.uh=function(b)
{
b.Lf||(b.Lf=b.J().createElement("span"),R(b.Lf,n),Fc(b.Lf,j),b.Lf.style.position="absolute")
}
;
t.Vc=function(b)
{
return!!b&&"DIV"==b.tagName
}
;

t.Z=function(b)
{
th.m.Z.call(this,b);
D.add(this.h(),this.N());
this.Ny();
uh(this);
R(this.h(),n)
}
;
t.z=function()
{
this.Fc&&lc(this.Fc,this.h());
lc(this.Uc,this.h());
th.m.z.call(this);
mc(this.Lf,this.h());
this.Nw=new gh(this.J().wa());
this.g().c(this.Nw,"focusin",this.bS)
}
;
t.Za=function()
{
this.R()&&this.w(n);
Vc(this.Nw);
th.m.Za.call(this);
L(this.Fc);
L(this.Uc);
L(this.Lf)
}
;

t.w=function(b)
{
b!=this.nb&&(this.wm&&this.wm.stop(),this.vn&&this.vn.stop(),this.vm&&this.vm.stop(),this.un&&this.un.stop(),b?this.HA():this.Yl())
}
;
t.HA=function()
{
this.dispatchEvent("beforeshow")&&(this.aA(),this.na(),this.g().c(this.J().Sa(),"resize",this.aA),vh(this,j),this.focus(),this.nb=j,this.wm&&this.vn?(xd(this.wm,"end",this.ti,n,this),this.vn.play(),this.wm.play()):this.ti())
}
;

t.Yl=function()
{
this.dispatchEvent("beforehide")&&(this.g().va(this.J().Sa(),"resize",this.aA),this.nb=n,this.vm&&this.un?(xd(this.vm,"end",this.nm,n,this),this.un.play(),this.vm.play()):this.nm())
}
;
a.vh=function(b,c)
{
b.Fc&&R(b.Fc,c);
b.Uc&&R(b.Uc,c);
R(b.h(),c);
R(b.Lf,c)
}
;
t.ti=function()
{
this.dispatchEvent("show")
}
;
t.nm=function()
{
vh(this,n);
this.dispatchEvent("hide")
}
;
t.R=q("nb");
t.focus=function()
{
this.nE()
}
;

t.aA=function()
{
this.Fc&&R(this.Fc,n);
this.Uc&&R(this.Uc,n);
var b=this.J().wa(),c=$b(cc(b)||window),d=Math.max(c.width,Math.max(b.body.scrollWidth,b.documentElement.scrollWidth)),b=Math.max(c.height,Math.max(b.body.scrollHeight,b.documentElement.scrollHeight));
this.Fc&&(R(this.Fc,j),mg(this.Fc,d,b));
this.Uc&&(R(this.Uc,j),mg(this.Uc,d,b))
}
;

t.na=function()
{
var b=this.J().wa(),c=cc(b)||window;
if("fixed"==Yf(this.h()))var d=b=0;
else d=Nc(this.J()),b=d.x,d=d.y;
var e=og(this.h()),c=$b(c),b=Math.max(b+c.width/2-e.width/2,0),d=Math.max(d+c.height/2-e.height/2,0);
$f(this.h(),b,d);
$f(this.Lf,b,d)
}
;
t.bS=function(b)
{
b.target==this.Lf&&Ld(this.nE,0,this)
}
;
t.nE=function()
{
try
{
A&&this.J().wa().body.focus(),this.h().focus()
}
catch(b)
{

}

}
;
t.p=function()
{
Vc(this.wm);
this.wm=k;
Vc(this.vm);
this.vm=k;
Vc(this.vn);
this.vn=k;
Vc(this.un);
this.un=k;
th.m.p.call(this)
}
;
a.wh=function(b,c,d)
{
th.call(this,c,d);
this.Gc=b||"modal-dialog"
}
;
y(wh,th);
t=wh.prototype;
t.wN=j;
t.so=j;
t.Yy=j;
t.VD=j;
t.Mq=0.5;
t.iu="";
t.uc="";
t.Cb=k;
t.jw=n;
t.Bc=k;
t.Pf=k;
t.hu=k;
t.Of=k;
t.Fe=k;
t.fc=k;
t.gk=Xc.VJ;
t.N=q("Gc");
t.eb=function(b)
{
this.iu=b;
this.Pf&&zc(this.Pf,b)
}
;
t.Na=function(b)
{
this.uc=b;
this.Fe&&(this.Fe.innerHTML=b)
}
;
t.hb=q("uc");
t.Gp=u(18);
a.xh=function(b)
{
b.h()||b.Y()
}
;
t.aa=function()
{
xh(this);
return this.Fe
}
;
a.yh=function(b)
{
xh(b);
return b.Bc
}
;
t.Xw=function()
{
xh(this);
return this.fc
}
;

a.zh=function(b)
{
xh(b);
return b.h()
}
;
t.co=function()
{
xh(this);
return wh.m.co.call(this)
}
;

a.Ah=function(b,c)
{
b.Mq=c;
if(b.h())
{
var d=b.co();
d&&qg(d,b.Mq)
}

}
,a.Ch=function(b,c)
{
c!=b.Yy&&Bh(b,c)
}
,a.Bh=function(b,c)
{
b.Yy=c;
if(b.Aa)
{
var d=b.J(),e=b.co(),g=b.Fc;
c?(g&&d.Bo(g,b.h()),d.Bo(e,b.h())):(d.removeNode(g),d.removeNode(e))
}

}
,a.Dh=function(b,c)
{
b.h()&&D.enable(b.Bc,b.Gc+"-title-draggable",c);
c&&!b.Cb?(b.Cb=new Yg(b.h(),b.Bc),D.add(b.Bc,b.Gc+"-title-draggable"),N(b.Cb,"start",b.EU,n,b)):!c&&b.Cb&&(b.Cb.F(),b.Cb=k)
}
;

t.o=function()
{
wh.m.o.call(this);
var b=this.h(),c=this.J();
this.Bc=c.o("div",
{
className:this.Gc+"-title",id:this.$d()
}
,this.Pf=c.o("span",this.Gc+"-title-text",this.iu),this.Of=c.o("span",this.Gc+"-title-close"));
jc(b,this.Bc,this.Fe=c.o("div",this.Gc+"-content"),this.fc=c.o("div",this.Gc+"-buttons"));
this.hu=this.Bc.id;
Oc(b,this.gk);
Pc(b,"labelledby",this.hu||"");
this.uc&&(this.Fe.innerHTML=this.uc);
R(this.Of,this.so);
this.tc&&(b=this.tc,b.e=this.fc,b.Y());
R(this.fc,!!this.tc);
Ah(this,this.Mq)
}
;

t.Z=function(b)
{
wh.m.Z.call(this,b);
b=this.Gc+"-content";
(this.Fe=Wb(k,b,this.h())[0])?this.uc=this.Fe.innerHTML:(this.Fe=this.J().o("div",b),this.uc&&(this.Fe.innerHTML=this.uc),this.h().appendChild(this.Fe));
var b=this.Gc+"-title",c=this.Gc+"-title-text",d=this.Gc+"-title-close";
(this.Bc=Wb(k,b,this.h())[0])?(this.Pf=Wb(k,c,this.Bc)[0],this.Of=Wb(k,d,this.Bc)[0],this.Bc.id||(this.Bc.id=this.$d())):(this.Bc=this.J().o("div",
{
className:b,id:this.$d()
}
),this.h().insertBefore(this.Bc,this.Fe));
this.hu=
this.Bc.id;
this.Pf?this.iu=Hc(this.Pf):(this.Pf=this.J().o("span",c,this.iu),this.Bc.appendChild(this.Pf));
Pc(this.h(),"labelledby",this.hu||"");
this.Of||(this.Of=this.J().o("span",d),this.Bc.appendChild(this.Of));
R(this.Of,this.so);
b=this.Gc+"-buttons";
(this.fc=Wb(k,b,this.h())[0])?(this.tc=new Eh(this.J()),this.tc.n(this.fc)):(this.fc=this.J().o("div",b),this.h().appendChild(this.fc),this.tc&&(b=this.tc,b.e=this.fc,b.Y()),R(this.fc,!!this.tc));
Ah(this,this.Mq)
}
;

t.z=function()
{
wh.m.z.call(this);
this.g().c(this.h(),"keydown",this.gp).c(this.h(),"keypress",this.gp);
this.g().c(this.fc,"click",this.PR);
Dh(this,this.VD);
this.g().c(this.Of,"click",this.LS);
Oc(this.h(),this.gk);
""!==this.Pf.id&&Pc(this.h(),"labelledby",this.Pf.id);
this.Yy||Bh(this,n)
}
;
t.Za=function()
{
this.R()&&this.w(n);
Dh(this,n);
wh.m.Za.call(this)
}
;
t.w=function(b)
{
b!=this.R()&&(this.Aa||this.Y(),wh.m.w.call(this,b))
}
;
t.ti=function()
{
wh.m.ti.call(this);
this.dispatchEvent(Fh)
}
;

t.nm=function()
{
wh.m.nm.call(this);
this.dispatchEvent(Gh);
this.jw&&this.F()
}
;
t.focus=function()
{
wh.m.focus.call(this);
if(this.tc)
{
var b=this.tc.rr;
if(b)for(var c=this.J().wa(),d=this.fc.getElementsByTagName("button"),e=0,g;
g=d[e];
e++)if(g.name==b)
{
try
{
if(C||tb)
{
var h=c.createElement("input");
h.style.cssText="position:fixed;
width:0;
height:0;
left:0;
top:0;
";
this.h().appendChild(h);
h.focus();
this.h().removeChild(h)
}
g.focus()
}
catch(l)
{

}
break
}

}

}
;

t.EU=function()
{
var b=this.J().wa(),c=$b(cc(b)||window),d=Math.max(b.body.scrollWidth,c.width),b=Math.max(b.body.scrollHeight,c.height),e=og(this.h());
"fixed"==Yf(this.h())?(c=new Qf(0,0,Math.max(0,c.width-e.width),Math.max(0,c.height-e.height)),this.Cb.Ms=c||new Qf(NaN,NaN,NaN,NaN)):this.Cb.Ms=new Qf(0,0,d-e.width,b-e.height)||new Qf(NaN,NaN,NaN,NaN)
}
;
t.LS=function()
{
if(this.so)
{
var b=this.tc,c=b&&b.Cv;
c?(b=b.get(c),this.dispatchEvent(new Hh(c,b))&&this.w(n)):this.w(n)
}

}
;

t.Ot=function(b)
{
this.so=b;
this.Of&&R(this.Of,this.so)
}
;
t.p=function()
{
this.fc=this.Of=k;
wh.m.p.call(this)
}
;
a.Ih=function(b,c)
{
b.tc=c;
if(b.fc)
{
if(b.tc)
{
var d=b.tc;
d.e=b.fc;
d.Y()
}
else b.fc.innerHTML="";
R(b.fc,!!b.tc)
}

}
;
t.PR=function(b)
{
a:
{
for(b=b.target;
b!=k&&b!=this.fc;
)
{
if("BUTTON"==b.tagName)break a;
b=b.parentNode
}
b=k
}
if(b&&!b.disabled)
{
var b=b.name,c=this.tc.get(b);
this.dispatchEvent(new Hh(b,c))&&this.w(n)
}

}
;

t.gp=function(b)
{
var c=n,d=n,e=this.tc,g=b.target;
if("keydown"==b.type)if(this.wN&&27==b.keyCode)
{
var h=e&&e.Cv,g="SELECT"==g.tagName&&!g.disabled;
h&&!g?(d=j,c=e.get(h),c=this.dispatchEvent(new Hh(h,c))):g||(c=j)
}
else 9==b.keyCode&&(b.shiftKey&&g==this.h())&&(d=j);
else if(13==b.keyCode)
{
if("BUTTON"==g.tagName)h=g.name;
else if(e)
{
var l=e.rr,m=l&&e.Xc(l),g=("TEXTAREA"==g.tagName||"SELECT"==g.tagName||"A"==g.tagName)&&!g.disabled;
m&&(!m.disabled&&!g)&&(h=l)
}
h&&e&&(d=j,c=this.dispatchEvent(new Hh(h,String(e.get(h)))))
}
if(c||
d)b.stopPropagation(),b.preventDefault();
c&&this.w(n)
}
;
a.Hh=function(b,c)
{
this.type=Jh;
this.key=b;
this.caption=c
}
;
y(Hh,id);
a.Jh="dialogselect",a.Gh="afterhide",a.Fh="aftershow",a.Eh=function(b)
{
this.G=b||Ub();
Od.call(this)
}
,a.Kh=void 0;
y(Eh,Od);
t=Eh.prototype;
t.Gc="goog-buttonset";
t.rr=k;
t.e=k;
t.Cv=k;
t.set=function(b,c,d,e)
{
Od.prototype.set.call(this,b,c);
d&&(this.rr=b);
e&&(this.Cv=b);
return this
}
;
t.ye=function(b,c,d)
{
return this.set(b.key,b.caption,c,d)
}
;

t.Y=function()
{
if(this.e)
{
this.e.innerHTML="";
var b=Ub(this.e);
Md.forEach(this,function(c,d)
{
var e=b.o("button",
{
name:d
}
,c);
d==this.rr&&(e.className=this.Gc+"-default");
this.e.appendChild(e)
}
,this)
}

}
;
t.n=function(b)
{
if(b&&1==b.nodeType)
{
this.e=b;
for(var b=this.e.getElementsByTagName("button"),c=0,d,e,g;
d=b[c];
c++)if(e=d.name||d.id,g=Hc(d)||d.value,e)
{
var h=0==c;
this.set(e,g,h,d.name==Lh);
h&&D.add(d,this.Gc+"-default")
}

}

}
;
t.h=q("e");
t.J=q("G");

t.Xc=function(b)
{
for(var c=this.e.getElementsByTagName("BUTTON"),d=0,e;
e=c[d];
d++)if(e.name==b||e.id==b)return e;
return k
}
;
a.Lh="cancel",a.Mh=
{
YX:"ok",RJ:Lh,JK:"yes",WX:"no",tY:"save",XW:"continue"
}
,a.Nh=w("确定"),a.Oh=w("取消"),a.Ph=w("Yes"),a.Qh=w("No"),a.Rh=w("Save"),a.Sh=w("Continue"),a.Th=
{
key:"ok",caption:Nh
}
,a.Uh=
{
key:Lh,caption:Oh
}
,a.Vh=
{
key:"yes",caption:Ph
}
,a.Wh=
{
key:"no",caption:Qh
}
,a.Xh=
{
key:"save",caption:Rh
}
,a.Yh=
{
key:"continue",caption:Sh
}
;

"undefined"!=typeof document&&((new Eh).ye(Th,j,j),Kh=(new Eh).ye(Uh,n,j).ye(Th,j),(new Eh).ye(Vh,j).ye(Wh,n,j),(new Eh).ye(Vh).ye(Wh,j).ye(Uh,n,j),(new Eh).ye(Yh).ye(Xh).ye(Uh,j,j));
a.Zh=void 0,a.$h=void 0,a.ai=void 0,a.bi=void 0,a.ci=void 0,a.di=void 0,a.ei=void 0;
ei=di=ci=bi=ai=$h=Zh=n;
a.fi=pb();
fi&&(-1!=fi.indexOf("Firefox")?Zh=j:-1!=fi.indexOf("Camino")?$h=j:-1!=fi.indexOf("iPhone")||-1!=fi.indexOf("iPod")?ai=j:-1!=fi.indexOf("iPad")?bi=j:-1!=fi.indexOf("Android")?ci=j:-1!=fi.indexOf("Chrome")?di=j:-1!=fi.indexOf("Safari")&&(ei=j));
a.gi=Zh,a.hi=$h,a.ii=ai,a.ji=bi,a.ki=ci,a.li=di,a.mi=ei;
a.ni=void 0,a.oi=void 0,a.pi=void 0,a.qi=void 0,a.ri=ii||ji,a.si=ri&&navigator.userAgent.match(/OS\s(\w+)/)[1].slice(0,3).replace(/_/g,".");
ni="contentEditable"in document.documentElement&&!(ri&&5>si)&&!(ki&&3>navigator.userAgent.match(/Android (\d)/)[1]);
a.ti=$(document.documentElement);
oi="ontouchstart"in window;
ti.addClass(ub?"mobile":"no-mobile");
pi=ri&&6<=si||!ub;
document.createElement("input");
qi=1.5<=window.devicePixelRatio;
window.JSON||(window.JSON=
{
parse:Yc,stringify:ad
}
);
a.ui=void 0;

"orientation"in window&&(ui=function()
{
var b=
{
"0":"portrait",90:"landscape landscape-left","-90":"landscape landscape-right"
}
,c=b[window.orientation]||"";
ti.removeClass(E.Ja(b).join(" ")).addClass(c)
}
,$(window).on("orientationchange",ui),ui());
$.support.fixedPosition=j;
a:
{
var vi=document.createElement("bootstrap"),wi=
{
WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"
}
,xi;
for(xi in wi)if(vi.style[xi]!==i)break a
}
;
a.yi=function(b,c,d)
{
wh.call(this,b,c,d)
}
;
y(yi,wh);
t=yi.prototype;
t.CJ=k;
t.z=function()
{
var b=!oi;
this.VD=b;
Dh(this,b&&this.Aa);
yi.m.z.call(this);
this.el&&zi(this);
this.Ei(this.CJ)
}
;
a.zi=function(b)
{
b.el&&b.g().c(b.Uc||b.Fc,"click",function()
{
this.el&&this.w(n)
}
)
}
;
t.Ap=u(61);
t.na=function()
{
yi.m.na.call(this);
if(!this.JN)
{
var b=$(this.h()),c=Math.min(b.offset().top-$(window).scrollTop(),60),c=ub&&!ji?"-1px":"-="+c+"px";
b.add(this.Lf).css("top",c)
}

}
;

t.Ei=function(b)
{
if(this.e&&(this.Aa&&pa(b))&&(!ub||ji))this.e.style.width=Zf(b,j),this.CJ=b;
oa(b)&&(this.e.style.width=b);
return this
}
;
a.Ci=function(b,c,d,e)
{
ra(b)?(e=d,d=c):b=
{
title:b,content:c
}
;
qa(d)||(d=ha);
var g=$.extend(
{

}
,Ai,b),h=Bi=Bi||new yi;
(c=g.Zi.length)?(b=new Eh,1<c?b.set(Lh,g.Zi[0],n,j).set("yes",g.Zi[1],j):b.set("yes",g.Zi[0],j),Ih(h,b),h.Xw(),b.Xc("yes").className="zg-btn-blue",b.Xc(Lh)&&(b.Xc(Lh).className="zg-link-btn zm-command-cancel")):Ih(h,k);
D.enable(zh(h),"with-button",!!c);
Cd(h);
h.on(Gh,function()
{
D.remove(h.h(),g.className)
}
).on(Jh,function(b)
{
return d.call(e||h,"yes"===b.key)
}
);
D.add(zh(h),g.className);

h.eb(g.title);
Ch(h,g.AG);
h.Na(g.content);
h.w(g.open);
return h
}
,a.Bi=void 0,a.Ai=
{
open:j,AG:n,title:"确认",content:"",className:"",Zi:["取消","确认"]
}
,a.U=function(b,c)
{
if(b)
{
var d=Ci(
{
title:"提示信息",content:Oa(b),Zi:[],className:"no-close-button"
}
);
setTimeout(function()
{
d.w(n)
}
,c||3E3)
}

}
;
a.V=function(b)
{
xe.call(this);
this.TU=!!b;
this.headers.set("AuthToken",Cg);
this.headers.set("X-Requested-With","XMLHttpRequest");
this.on("complete",this.kO,n,this)
}
,a.Di=void 0;
y(V,xe);
a.Ei=function(b,c,d,e)
{
var g=new V;
if(c)g.on("complete",c);
g.ajax(b,e,d)
}
,a.Fi=/#.*$/,a.Gi=
{
"text/html":"html","text/plain":"text","application/json":"json","application/javascript":"script","application/x-javascript":"script"
}
,a.Hi=[];

V.prototype.kO=function()
{
R(Ii(),n);
var b=this.getResponseHeader("content-type");
if(b)
{
var c=Gi[b.split(";
")[0].toLowerCase()];
if(c&&Hi.length)
{
var d=He(this);
z.forEach(Hi,function(b)
{
b.uW===c&&b.filter("json"===c?JSON.parse(d):d)
}
,this)
}

}

}
;
V.prototype.ajax=function(b,c,d)
{
b=encodeURI(decodeURI(b));
b=b.replace(Fi,"");
if(!this.da)
{
this.TU&&R(Ii(),j);
d=d||"POST";
if("POST"===d.toUpperCase())
{
var e=Nf.get("_xsrf");
e&&(c=(c?c+"&_xsrf=":"_xsrf=")+e)
}
return this.send(b,d,c,this.headers)
}

}
;

a.Ii=function()
{
if(Di)return Di;
var b=K("div",
{
id:"zh-global-spinner",style:"display:none",innerHTML:"加载中…"
}
);
document.body.appendChild(b);
return Di=b
}
;
a.Ji=function()
{
M.call(this)
}
;
y(Ji,Hd);
Ji.prototype.g=function()
{
return this.hi||(this.hi=new me(this))
}
;
a.Ki=new Ji;
a.vf=function(b,c)
{
var d;
b instanceof vf?(this.Ne=la(c)?c:b.Ne,Li(this,b.yi),Mi(this,b.fq),Ni(this,b.kj),Oi(this,b.xm),Pi(this,b.xg),Qi(this,b.Kc().clone()),Ri(this,b.bo)):b&&(d=String(b).match(we))?(this.Ne=!!c,Li(this,d[1]||"",j),Mi(this,d[2]||"",j),Ni(this,d[3]||"",j),Oi(this,d[4]),Pi(this,d[5]||"",j),Qi(this,d[6]||"",j),Ri(this,d[7]||"",j)):(this.Ne=!!c,this.Kd=new Si(k,0,this.Ne))
}
;
t=vf.prototype;
t.yi="";
t.fq="";
t.kj="";
t.xm=k;
t.xg="";
t.bo="";
t.FQ=n;
t.Ne=n;

t.toString=function()
{
var b=[],c=this.yi;
c&&b.push(Ti(c,Ui),":");
if(c=this.kj)
{
b.push("//");
var d=this.fq;
d&&b.push(Ti(d,Ui),"@");
b.push(encodeURIComponent(String(c)));
c=this.xm;
c!=k&&b.push(":",String(c))
}
if(c=this.xg)this.kj&&"/"!=c.charAt(0)&&b.push("/"),b.push(Ti(c,"/"==c.charAt(0)?Vi:Wi));
(c=this.Kd.toString())&&b.push("?",c);
(c=this.bo)&&b.push("#",Ti(c,Xi));
return b.join("")
}
;

t.resolve=function(b)
{
var c=this.clone(),d=!!b.yi;
d?Li(c,b.yi):d=!!b.fq;
d?Mi(c,b.fq):d=!!b.kj;
d?Ni(c,b.kj):d=b.xm!=k;
var e=b.xg;
if(d)Oi(c,b.xm);
else if(d=!!b.xg)
{
if("/"!=e.charAt(0))if(this.kj&&!this.xg)e="/"+e;
else
{
var g=c.xg.lastIndexOf("/");
-1!=g&&(e=c.xg.substr(0,g+1)+e)
}
g=e;
if(".."==g||"."==g)e="";
else if(!Wa(g,"./")&&!Wa(g,"/."))e=g;
else
{
for(var e=Fa(g,"/"),g=g.split("/"),h=[],l=0;
l<g.length;
)
{
var m=g[l++];
"."==m?e&&l==g.length&&h.push(""):".."==m?((1<h.length||1==h.length&&""!=h[0])&&h.pop(),
e&&l==g.length&&h.push("")):(h.push(m),e=j)
}
e=h.join("/")
}

}
d?Pi(c,e):d=""!==b.Kd.toString();
d?Qi(c,b.Kd.toString()?decodeURIComponent(b.Kd.toString()):""):d=!!b.bo;
d&&Ri(c,b.bo);
return c
}
;
t.clone=function()
{
return new vf(this)
}
;

a.Li=function(b,c,d)
{
Yi(b);
b.yi=d?c?decodeURIComponent(c):"":c;
b.yi&&(b.yi=b.yi.replace(/:$/,""))
}
,a.Mi=function(b,c,d)
{
Yi(b);
b.fq=d?c?decodeURIComponent(c):"":c
}
,a.Ni=function(b,c,d)
{
Yi(b);
b.kj=d?c?decodeURIComponent(c):"":c
}
,a.Oi=function(b,c)
{
Yi(b);
c?(c=Number(c),(isNaN(c)||0>c)&&f(Error("Bad port number "+c)),b.xm=c):b.xm=k
}
,a.uf=function(b)
{
return b.xg
}
,a.Pi=function(b,c,d)
{
Yi(b);
b.xg=d?c?decodeURIComponent(c):"":c
}
,a.Qi=function(b,c,d)
{
Yi(b);
c instanceof Si?(b.Kd=c,b.Kd.qA(b.Ne)):(d||(c=Ti(c,
Zi)),b.Kd=new Si(c,0,b.Ne))
}
;
t.Kc=q("Kd");
a.Ri=function(b,c,d)
{
Yi(b);
b.bo=d?c?decodeURIComponent(c):"":c
}
,a.Yi=function(b)
{
b.FQ&&f(Error("Tried to modify a read-only Uri"))
}
;
t.qA=function(b)
{
this.Ne=b;
this.Kd&&this.Kd.qA(b);
return this
}
;

a.Ti=function(b,c)
{
return oa(b)?encodeURI(b).replace(c,$i):k
}
,a.$i=function(b)
{
b=b.charCodeAt(0);
return"%"+(b>>4&15).toString(16)+(b&15).toString(16)
}
,a.Ui=/[#\/\?@]/g,a.Wi=/[\#\?:]/g,a.Vi=/[\#\?]/g,a.Zi=/[\#\?@]/g,a.Xi=/#/g,a.Si=function(b,c,d)
{
this.Vd=b||k;
this.Ne=!!d
}
,a.bj=function(b)
{
if(!b.Ib&&(b.Ib=new Od,b.la=0,b.Vd))for(var c=b.Vd.split("&"),d=0;
d<c.length;
d++)
{
var e=c[d].indexOf("="),g=k,h=k;
0<=e?(g=c[d].substring(0,e),h=c[d].substring(e+1)):g=c[d];
g=decodeURIComponent(g.replace(/\+/g," "));

g=aj(b,g);
b.add(g,h?decodeURIComponent(h.replace(/\+/g," ")):"")
}

}
;
t=Si.prototype;
t.Ib=k;
t.la=k;
t.Va=function()
{
bj(this);
return this.la
}
;
t.add=function(b,c)
{
bj(this);
this.Vd=k;
var b=aj(this,b),d=this.Ib.get(b);
d||this.Ib.set(b,d=[]);
d.push(c);
this.la++;
return this
}
;
t.remove=function(b)
{
bj(this);
b=aj(this,b);
return this.Ib.Pd(b)?(this.Vd=k,this.la-=this.Ib.get(b).length,this.Ib.remove(b)):n
}
;
t.clear=function()
{
this.Ib=this.Vd=k;
this.la=0
}
;
t.Hb=function()
{
bj(this);
return 0==this.la
}
;

t.Pd=function(b)
{
bj(this);
b=aj(this,b);
return this.Ib.Pd(b)
}
;
t.Ng=function(b)
{
var c=this.Ja();
return z.contains(c,b)
}
;
t.Fb=function()
{
bj(this);
for(var b=this.Ib.Ja(),c=this.Ib.Fb(),d=[],e=0;
e<c.length;
e++)for(var g=b[e],h=0;
h<g.length;
h++)d.push(c[e]);
return d
}
;
t.Ja=function(b)
{
bj(this);
var c=[];
if(b)this.Pd(b)&&(c=z.concat(c,this.Ib.get(aj(this,b))));
else for(var b=this.Ib.Ja(),d=0;
d<b.length;
d++)c=z.concat(c,b[d]);
return c
}
;

t.set=function(b,c)
{
bj(this);
this.Vd=k;
b=aj(this,b);
this.Pd(b)&&(this.la-=this.Ib.get(b).length);
this.Ib.set(b,[c]);
this.la++;
return this
}
;
t.get=function(b,c)
{
var d=b?this.Ja(b):[];
return 0<d.length?String(d[0]):c
}
;
t.toString=function()
{
if(this.Vd)return this.Vd;
if(!this.Ib)return"";
for(var b=[],c=this.Ib.Fb(),d=0;
d<c.length;
d++)for(var e=c[d],g=encodeURIComponent(String(e)),e=this.Ja(e),h=0;
h<e.length;
h++)
{
var l=g;
""!==e[h]&&(l+="="+encodeURIComponent(String(e[h])));
b.push(l)
}
return this.Vd=b.join("&")
}
;

t.clone=function()
{
var b=new Si;
b.Vd=this.Vd;
this.Ib&&(b.Ib=this.Ib.clone(),b.la=this.la);
return b
}
;
a.aj=function(b,c)
{
var d=String(c);
b.Ne&&(d=d.toLowerCase());
return d
}
;
t.qA=function(b)
{
b&&!this.Ne&&(bj(this),this.Vd=k,Md.forEach(this.Ib,function(b,d)
{
var e=d.toLowerCase();
d!=e&&(this.remove(d),this.remove(e),0<b.length&&(this.Vd=k,this.Ib.set(aj(this,e),z.clone(b)),this.la+=b.length))
}
,this));
this.Ne=b
}
;

t.extend=function(b)
{
for(var c=0;
c<arguments.length;
c++)Md.forEach(arguments[c],function(b,c)
{
this.add(c,b)
}
,this)
}
;
Hd.prototype.on=function()
{
Hd.prototype.addEventListener.apply(this,arguments);
return this
}
;
Hd.prototype.off=function()
{
Hd.prototype.removeEventListener.apply(this,arguments);
return this
}
;
Hd.prototype.U=Hd.prototype.dispatchEvent;
a.cj=function(b)
{
var c=b.Cc;
c.category&&c.action&&W(c.category,b.type.replace("!","")+"_"+c.action,c.label,c.value)
}
,a.W=function(b,c,d,e,g)
{
window._gaq||(window._gaq=[]);
"feed"===b&&Wa(window.location.href,"topstory")&&(b="topstory");
var h=$("#zh-question-list");
"feed"===b&&h.length&&"topstory"===h.attr("data-feedtype")&&(b="topstory");
d&&(d=""+d);
e&&(e=parseInt(e,10));
window._gaq.push(["_trackEvent",b,c,d,e,!!g]);
!Wa(location.host,"zhihu.com")&&window.console&&console.log("trackEvent(new)",z.toArray(arguments))
}
;
a.dj=void 0;

dj=
{
ZJ:["BC","AD"],YJ:["Before Christ","Anno Domini"],hK:"JFMAMJJASOND".split(""),uK:"JFMAMJJASOND".split(""),gK:"January February March April May June July August September October November December".split(" "),gn:"January February March April May June July August September October November December".split(" "),rK:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),wK:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),IK:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),yK:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
$B:"Sun Mon Tue Wed Thu Fri Sat".split(" "),xK:"Sun Mon Tue Wed Thu Fri Sat".split(" "),TB:"SMTWTFS".split(""),vK:"SMTWTFS".split(""),sK:["Q1","Q2","Q3","Q4"],jK:["1st quarter","2nd quarter","3rd quarter","4th quarter"],PJ:["AM","PM"],QB:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],BK:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],Ju:6,Pu:[5,6],Ku:5
}
;
a.ej=function(b,c)
{
switch(c)
{
case 1:return 0==b%4&&(0!=b%100||0==b%400)?29:28;
case 5:case 8:case 10:case 3:return 30
}
return 31
}
,a.gj=function(b,c,d)
{
pa(b)?(this.$=new Date(b,c||0,d||1),fj(this,d||1)):ra(b)?(this.$=new Date(b.getFullYear(),b.getMonth(),b.getDate()),fj(this,b.getDate())):(this.$=new Date(za()),this.$.setHours(0),this.$.setMinutes(0),this.$.setSeconds(0),this.$.setMilliseconds(0))
}
;
t=gj.prototype;
t.Vg=dj.Ju;
t.El=dj.Ku;

t.clone=function()
{
var b=new gj(this.$);
b.Vg=this.Vg;
b.El=this.El;
return b
}
;
t.getFullYear=function()
{
return this.$.getFullYear()
}
;
t.getYear=function()
{
return this.getFullYear()
}
;
t.getMonth=function()
{
return this.$.getMonth()
}
;
t.getDate=function()
{
return this.$.getDate()
}
;
t.getTime=function()
{
return this.$.getTime()
}
;
t.getDay=u(49);
t.getUTCHours=function()
{
return this.$.getUTCHours()
}
;
t.getTimezoneOffset=function()
{
return this.$.getTimezoneOffset()
}
;

a.hj=function(b)
{
b=b.getTimezoneOffset();
if(0==b)b="Z";
else var c=Math.abs(b)/60,d=Math.floor(c),c=60*(c-d),b=(0<b?"-":"+")+bb(d)+":"+bb(c);
return b
}
;
t.set=function(b)
{
this.$=new Date(b.getFullYear(),b.getMonth(),b.getDate())
}
;
t.setFullYear=function(b)
{
this.$.setFullYear(b)
}
;
t.setMonth=function(b)
{
this.$.setMonth(b)
}
;
t.setDate=function(b)
{
this.$.setDate(b)
}
;
t.setTime=u(36);

t.add=function(b)
{
if(b.re||b.je)
{
var c=this.getMonth()+b.je+12*b.re,d=this.getYear()+Math.floor(c/12),c=c%12;
0>c&&(c+=12);
var e=Math.min(ej(d,c),this.getDate());
this.setDate(1);
this.setFullYear(d);
this.setMonth(c);
this.setDate(e)
}
b.Qd&&(c=new Date(this.getYear(),this.getMonth(),this.getDate(),12),b=new Date(c.getTime()+864E5*b.Qd),this.setDate(1),this.setFullYear(b.getFullYear()),this.setMonth(b.getMonth()),this.setDate(b.getDate()),fj(this,b.getDate()))
}
;

t.Gk=function(b,c)
{
return[this.getFullYear(),bb(this.getMonth()+1),bb(this.getDate())].join(b?"-":"")+(c?hj(this):"")
}
;
t.dg=function(b)
{
return this.getYear()==b.getYear()&&this.getMonth()==b.getMonth()&&this.getDate()==b.getDate()
}
;
t.toString=function()
{
return this.Gk()
}
;
a.fj=function(b,c)
{
if(b.getDate()!=c)
{
var d=b.getDate()<c?1:-1;
b.$.setUTCHours(b.$.getUTCHours()+d)
}

}
;
t.valueOf=function()
{
return this.$.valueOf()
}
;
a.jj=function()
{
M.call(this);
this.ca=ij;
this.Wn=this.startTime=k
}
;
y(jj,Hd);
a.ij=0;
jj.prototype.qi=function()
{
this.Sd("begin")
}
;
jj.prototype.ri=function()
{
this.Sd("end")
}
;
jj.prototype.Sd=function(b)
{
this.dispatchEvent(b)
}
;
a.kj=function(b,c,d)
{
M.call(this);
this.Uj=b;
this.dh=c||0;
this.ha=d;
this.Bv=v(this.Ug,this)
}
;
y(kj,M);
t=kj.prototype;
t.Fd=0;
t.p=function()
{
kj.m.p.call(this);
this.stop();
delete this.Uj;
delete this.ha
}
;
t.start=function(b)
{
this.stop();
this.Fd=Ld(this.Bv,la(b)?b:this.dh)
}
;
t.stop=function()
{
this.Gb()&&Id.clearTimeout(this.Fd);
this.Fd=0
}
;
t.fire=function()
{
this.stop();
this.Ug()
}
;
t.Gb=function()
{
return 0!=this.Fd
}
;
t.Ug=function()
{
this.Fd=0;
this.Uj&&this.Uj.call(this.ha)
}
;
a.lj=
{

}
,a.mj=k,a.nj=function(b)
{
b=ua(b);
delete lj[b];
E.Hb(lj)&&mj&&mj.stop()
}
,a.oj=function()
{
mj||(mj=new kj(function()
{
var b=za();
E.forEach(lj,function(d)
{
d.Wv(b)
}
);
E.Hb(lj)||oj()
}
,20));
var b=mj;
b.Gb()||b.start()
}
;
a.pj=function(b,c,d,e)
{
jj.call(this);
(!ma(b)||!ma(c))&&f(Error("Start and end parameters must be arrays"));
b.length!=c.length&&f(Error("Start and end points must be the same length"));
this.Qp=b;
this.sN=c;
this.duration=d;
this.cC=e;
this.coords=[];
this.Ni=n
}
;
y(pj,jj);
t=pj.prototype;
t.bg=u(51);
t.tE=0;
t.progress=0;
t.xy=k;

t.play=function(b)
{
if(b||this.ca==ij)this.progress=0,this.coords=this.Qp;
else if(1==this.ca)return n;
nj(this);
this.startTime=b=za();
-1==this.ca&&(this.startTime-=this.duration*this.progress);
this.Wn=this.startTime+this.duration;
this.xy=this.startTime;
this.progress||this.qi();
this.Sd("play");
-1==this.ca&&this.Sd("resume");
this.ca=1;
var c=ua(this);
c in lj||(lj[c]=this);
oj();
this.Wv(b);
return j
}
;
t.stop=function(b)
{
nj(this);
this.ca=ij;
b&&(this.progress=1);
qj(this,this.progress);
this.Sd("stop");
this.ri()
}
;

t.p=function()
{
this.ca==ij||this.stop(n);
this.Sd("destroy");
pj.m.p.call(this)
}
;
t.Wv=function(b)
{
this.progress=(b-this.startTime)/(this.Wn-this.startTime);
1<=this.progress&&(this.progress=1);
this.tE=1E3/(b-this.xy);
this.xy=b;
qj(this,this.progress);
1==this.progress?(this.ca=ij,nj(this),this.Sd("finish"),this.ri()):1==this.ca&&this.gz()
}
;
a.qj=function(b,c)
{
qa(b.cC)&&(c=b.cC(c));
b.coords=Array(b.Qp.length);
for(var d=0;
d<b.Qp.length;
d++)b.coords[d]=(b.sN[d]-b.Qp[d])*c+b.Qp[d]
}
;
t.gz=function()
{
this.Sd("animate")
}
;

t.Sd=function(b)
{
this.dispatchEvent(new rj(b,this))
}
;
a.rj=function(b,c)
{
id.call(this,b);
this.coords=c.coords;
this.x=c.coords[0];
this.y=c.coords[1];
this.r0=c.coords[2];
this.duration=c.duration;
this.progress=c.progress;
this.PZ=c.tE;
this.state=c.ca;
this.$Y=c
}
;
y(rj,id);
a.sj=function(b,c,d,e,g)
{
pj.call(this,c,d,e,g);
this.element=b
}
;
y(sj,pj);
t=sj.prototype;
t.Dh=ha;
t.Hd=function()
{
la(this.Df)||(this.Df=eg(this.element));
return this.Df
}
;
t.gz=function()
{
this.Dh();
sj.m.gz.call(this)
}
;
t.ri=function()
{
this.Dh();
sj.m.ri.call(this)
}
;
t.qi=function()
{
this.Dh();
sj.m.qi.call(this)
}
;
a.tj=function(b,c,d,e,g)
{
(2!=c.length||2!=d.length)&&f(Error("Start and end points must be 2D"));
sj.apply(this,arguments)
}
;
y(tj,sj);

tj.prototype.Dh=function()
{
if(this.Ni)
{
var b=this.element,c=Math.round(this.coords[0]),c=Math.max(c,0);
b.scrollLeft=eg(b)?B?-c:!A||!Gb("8")?b.scrollWidth-c-b.clientWidth:c:c
}
else this.element.scrollLeft=Math.round(this.coords[0]);
this.element.scrollTop=Math.round(this.coords[1])
}
;
a.uj=function(b,c,d,e,g)
{
pa(c)&&(c=[c]);
pa(d)&&(d=[d]);
sj.call(this,b,c,d,e,g);
(1!=c.length||1!=d.length)&&f(Error("Start and end points must be 1D"))
}
;
y(uj,sj);
uj.prototype.Dh=function()
{
qg(this.element,this.coords[0])
}
;

uj.prototype.show=function()
{
this.element.style.display=""
}
;
uj.prototype.hide=function()
{
this.element.style.display="none"
}
;
a.vj=function(b,c,d)
{
uj.call(this,b,1,0,c,d)
}
;
y(vj,uj);
vj.prototype.qi=function()
{
this.show();
vj.m.qi.call(this)
}
;
vj.prototype.ri=function()
{
this.hide();
vj.m.ri.call(this)
}
;
a.wj=function(b,c,d)
{
uj.call(this,b,0,1,c,d)
}
;
y(wj,uj);
wj.prototype.qi=function()
{
this.show();
wj.m.qi.call(this)
}
;

a.xj=function(b,c,d,e,g)
{
(3!=c.length||3!=d.length)&&f(Error("Start and end points must be 3D"));
sj.apply(this,arguments)
}
;
y(xj,sj);
xj.prototype.Dh=function()
{
for(var b=[],c=0;
c<this.coords.length;
c++)b[c]=Math.round(this.coords[c]);
b="rgb("+b.join(",")+")";
this.element.style.backgroundColor=b
}
;
a.yj=function(b)
{
return b*b*b
}
,a.zj=function(b)
{
return 1-Math.pow(1-b,3)
}
,a.Aj=function(b)
{
return 3*b*b-2*b*b*b
}
;
a.Bj=/^\/node\//;
$.ajaxPrefilter(function(b,c)
{
var d=c.data,e;
if(d&&(e=d.params)&&"object"===$.type(e)&&Bj.test(c.url))d.params=JSON.stringify(e),b.data=$.param(d)
}
);

a.Cj=function(b,c)
{
return $.post("/node/MemberFollowBaseV2",
{
method:c?"follow_member":"unfollow_member",params:
{
hash_id:b
}

}
)
}
,a.Dj=function(b,c)
{
return $.post("/node/QuestionFollowBaseV2",
{
method:c?"follow_question":"unfollow_question",params:
{
question_id:b
}

}
)
}
,a.Ej=function(b,c)
{
return $.post(c?"/collection/follow":"/collection/unfollow",
{
favlist_id:b
}
)
}
,a.Fj=function(b,c)
{
return $.post("/node/TopicFollowBaseV2",
{
method:c?"follow_topic":"unfollow_topic",params:
{
topic_id:b
}

}
)
}
,a.Gj=function(b,c,d,
e)
{
var g=k;
e&&(d&&(d=$.proxy(d,e)),g&&(g=$.proxy(g,e)));
$.get("/node/"+b,
{
params:c
}
,function(b)
{
b&&b.r?g&&g(b):d&&d(b)
}
)
}
;
a.Hj=function(b,c)
{
return $.post("/node/ColumnFollowBaseV2",
{
method:c?"follow_column":"unfollow_column",params:
{
column_id:b
}

}
)
}
;
a.Ij=function(b,c)
{
return $.post("/roundtable/"+b,
{
action:c?"follow":"unfollow"
}
)
}
;
a.Jj=function()
{
this.ns=[];
this.loaded=[];
this.AH=[];
this.bs=n
}
;
Jj.prototype.add=function(b)
{
b&&!z.find(this.ns,function(c)
{
return c===b
}
)&&(this.bs?b.src=b.getAttribute("data-source"):(this.ns.push(b),this.loaded.push(0)))
}
;
Jj.prototype.v=function()
{
z.forEach(this.ns,function(b)
{
this.AH.push(dg(b).y)
}
,this);
this.XC();
N(window,"scroll",this.XC,n,this);
this.bs=j
}
;

Jj.prototype.hM=function()
{
var b=bc(document).y+1200;
z.forEach(this.ns,function(c,d)
{
!this.loaded[d]&&b>this.AH[d]&&(this.loaded[d]=1,c.src=c.getAttribute("data-source"))
}
,this)
}
;
Jj.prototype.XC=function()
{
this.YC&&clearTimeout(this.YC);
this.YC=setTimeout(v(this.hM,this),100)
}
;
a.Kj=new Jj;
a.Lj=
{
hidden:"visibilitychange",msHidden:"msvisibilitychange",mozHidden:"mozvisibilitychange",webkitHidden:"webkitvisibilitychange"
}
,a.Mj=E.kE(Lj,function(b,c)
{
return c in document
}
),a.Nj=Lj[Mj],a.Oj=la(Mj);
a.Qj=
{
8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"caps-lock",27:"esc",32:"space",33:"pg-up",34:"pg-down",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"delete",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:"semicolon",61:"equals",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",93:"context",
96:"num-0",97:"num-1",98:"num-2",99:"num-3",100:"num-4",101:"num-5",102:"num-6",103:"num-7",104:"num-8",105:"num-9",106:"num-multiply",107:"num-plus",109:"num-minus",110:"num-period",111:"num-division",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",186:"semicolon",187:"equals",189:"dash",188:",",190:".",191:"/",192:"~",219:"open-square-bracket",220:"\\",221:"close-square-bracket",222:"single-quote",224:"win"
}
;
a.Tj=function(b)
{
M.call(this);
this.Qm=
{

}
;
this.hh=
{
Dk:[],time:0
}
;
this.YN=E.Uh(Rj);
this.xV=E.Uh(Sj);
this.sC=j;
this.nL=this.qL=n;
this.rR=j;
this.gh=b;
N(this.gh,"keydown",this.sf,n,this);
mb&&(B&&Gb("1.8"))&&N(this.gh,"keyup",this.KE,n,this);
nb&&!B&&(N(this.gh,"keypress",this.aF,n,this),N(this.gh,"keyup",this.bF,n,this))
}
,a.Uj=void 0;
y(Tj,Hd);

a.Rj=[27,112,113,114,115,116,117,118,119,120,121,122,123,19],a.Sj="color date datetime datetime-local email month number password search tel text time url week".split(" "),a.Vj=
{
qK:"shortcut",pK:"shortcut_"
}
;
t=Tj.prototype;
t.OT=function(b,c)
{
Wj(this.Qm,Xj(1,arguments),b)
}
;
t.XV=function(b)
{
Wj(this.Qm,Xj(0,arguments),k)
}
;

a.Xj=function(b,c)
{
var d;
if(oa(c[b]))
{
d=c[b];
d=d.replace(/[ +]*\+[ +]*/g,"+").replace(/[ ]+/g," ").toLowerCase();
d=d.split(" ");
for(var e=[],g,h=0;
g=d[h];
h++)
{
var l=g.split("+"),m;
g=0;
for(var p,r=0;
p=l[r];
r++)
{
switch(p)
{
case "shift":g|=1;
continue;
case "ctrl":g|=2;
continue;
case "alt":g|=4;
continue;
case "meta":g|=8;
continue
}
m=p;
if(!Uj)
{
l=
{

}
;
p=i;
for(p in Qj)l[Qj[p]]=p;
Uj=l
}
m=Uj[m];
break
}
e.push(
{
keyCode:m,CG:g
}
)
}
d=e
}
else
{
e=c;
h=b;
ma(c[b])&&(e=c[b],h=0);
for(d=[];
h<e.length;
h+=2)d.push(
{
keyCode:e[h],CG:e[h+
1]
}
)
}
return d
}
;
t.uB=function()
{
this.Qm=
{

}

}
;
t.p=function()
{
Tj.m.p.call(this);
this.uB();
yd(this.gh,"keydown",this.sf,n,this);
mb&&(B&&Gb("1.8"))&&yd(this.gh,"keyup",this.KE,n,this);
nb&&!B&&(yd(this.gh,"keypress",this.aF,n,this),yd(this.gh,"keyup",this.bF,n,this));
this.gh=k
}
;
t.KE=function(b)
{
if(224==b.keyCode)this.xG=j,Ld(function()
{
this.xG=n
}
,400,this);
else
{
var c=b.metaKey||this.xG;
if((67==b.keyCode||88==b.keyCode||86==b.keyCode)&&c)b.metaKey=c,this.sf(b)
}

}
;

a.Yj=function(b)
{
return nb&&!B&&b.ctrlKey&&b.altKey&&!b.shiftKey
}
;
t.aF=function(b)
{
32<b.keyCode&&Yj(b)&&(this.PF=j)
}
;
t.bF=function(b)
{
!this.PF&&Yj(b)&&this.sf(b)
}
;
a.Wj=function(b,c,d)
{
var e=c.shift(),e=e.keyCode&255|e.CG<<8,g=b[e];
g&&(d&&(0==c.length||oa(g)))&&f(Error("Keyboard shortcut conflicts with existing shortcut"));
c.length?(g||(g=b[e]=
{

}
),Wj(g,c,d)):b[e]=d
}
,a.Zj=function(b,c,d,e)
{
d=d||0;
return(e=(e||b.Qm)[c[d]])&&!oa(e)&&1<c.length-d?Zj(b,c,d+1,e):e
}
;

t.sf=function(b)
{
var c;
c=b.keyCode;
if(16==c||17==c||18==c)c=n;
else
{
var d=b.target,e="TEXTAREA"==d.tagName||"INPUT"==d.tagName||"BUTTON"==d.tagName||"SELECT"==d.tagName,g=!e&&(d.isContentEditable||d.ownerDocument&&"on"==d.ownerDocument.designMode);
c=!e&&!g||this.YN[c]||this.nL?j:g?n:this.rR&&(b.altKey||b.ctrlKey||b.metaKey)?j:"INPUT"==d.tagName&&this.xV[d.type]?13==c:"INPUT"==d.tagName||"BUTTON"==d.tagName?32!=c:n
}
if(c)if("keydown"==b.type&&Yj(b))this.PF=n;
else
{
c=(B?Wg(b.keyCode):b.keyCode)&255|((b.shiftKey?
1:0)|(b.ctrlKey?2:0)|(b.altKey?4:0)|(b.metaKey?8:0))<<8;
var h,l,d=za();
this.hh.Dk.length&&1500>=d-this.hh.time?h=Zj(this,this.hh.Dk):this.hh.Dk.length=0;
h=h?h[c]:this.Qm[c];
h||(h=this.Qm[c],this.hh.Dk=[]);
h&&oa(h)?l=h:h?(this.hh.Dk.push(c),this.hh.time=d,B&&b.preventDefault()):this.hh.Dk.length=0;
l&&(this.sC&&b.preventDefault(),this.qL&&b.stopPropagation(),h=b.target,c=this.dispatchEvent(new $j(Vj.qK,l,h)),(c&=this.dispatchEvent(new $j(Vj.pK+l,l,h)))||b.preventDefault(),this.hh.Dk.length=0)
}

}
;

a.$j=function(b,c,d)
{
id.call(this,b,d);
this.identifier=c
}
;
y($j,id);
a.ak=function(b)
{
M.call(this);
this.vf(b)
}
;
y(ak,M);
a.bk=[];
t=ak.prototype;
t.vf=function(b)
{
bk.push(this);
this.gl=new Od;
this.ha=new Tj(b);
this.ha.sC=n;
this.ha.addEventListener("shortcut",this.OS,n,this)
}
;
a.ck=function(b,c,d,e)
{
b.wn=
{
key:c,action:d,context:e
}
;
b.ha.OT(c,c);
b.gl.set(c,b.wn);
return b
}
;
t.YV=function(b)
{
this.wn=k;
this.ha.XV(b,b);
this.gl.remove(b);
return this
}
;
t.uB=function()
{
this.wn=k;
this.ha.uB();
this.gl.clear();
return this
}
;
a.dk=function(b,c)
{
b.wn.Ab=c;
return b
}
;

t.OS=function(b)
{
var c=this.gl.get(b.identifier);
c&&c.action.call(c.context,b)
}
;
t.p=function()
{
ak.m.p.call(this);
z.remove(bk,this);
this.ha.F();
this.gl=this.wn=this.ha=k
}
;
a.ek=new ak(document);
ek.CB=function(b)
{
return new ak(b)
}
;
a.fk=function(b)
{
var c=n,d;
return function()
{
if(c)return d;
c=j;
return d=b.apply(this,arguments)
}

}
,a.gk=function(b,c)
{
var d=Bc(b,function(b)
{
return 3===b.nodeType&&!Ha(b.nodeValue)
}
)[0];
d&&(d.nodeValue=c)
}
,a.hk=function(b,c)
{
var d=new vj(b,500);
c&&N(d,"finish",v(function()
{
L(this)
}
,b));
d.play()
}
,a.ik=function(b,c,d,e)
{
"bottom"===e&&(e="b");
var g="";
(d===n?n:j)&&(g='data-tip="t$'+(e||"t")+"$"+b[1]+'"');
return["<a ",g,' class="',c||"zm-item-tag",'" href="/topic/',b[1],'">',b[0],"</a>"].join("")
}
,a.jk=
function(b)
{
return!b?"":b.replace(/^\s+/,"").replace(/\s+$/,"")
}
,a.kk=void 0,a.lk=RegExp("^⁠+|⁠+$");
kk=function(b)
{
return b.replace(lk,"")
}
;

a.mk=function()
{
return'<a href="javascript:;
" class="zu-edit-button" name="edit"><i class="zu-edit-button-icon"></i>修改</a>'
}
,a.nk=function(b,c,d)
{
var e;
b&&(c=$(b).data("animation")||new xj(b,[255,255,150],c||[255,255,255],d||2E3),$(b).data("animation",c),1==c.ca&&c.stop(j),e=b.style.backgroundColor,xd(c,"end",function()
{
Tf(this.element,"background-color",e)
}
,n,c),c.play())
}
,a.ok=function(b,c,d)
{
Oj&&document[Mj]?N(document,Nj,function g()
{
document[Mj]||(nk(b,c,d),yd(document,Nj,g))
}
):nk(b,c,d)
}
,a.pk=
function(b)
{
var c=0,d=0;
do d=b.indexOf("?",d),-1!==d&&(c++,d+=1);
while(-1!==d);
return c
}
,a.qk=function(b,c,d)
{
c=z.slice(b.data,1);
if("topic"===b.data[0])
{
var b=(c[2]?'<img class="zm-item-img-avatar zg-left" src="'+c[2]+'">':"")+'<span class="zu-autocomplete-row-name'+(c[3]?"":" zu-autocomplete-row-name-info")+'" title="'+c[0]+'">'+c[0]+"</span>",e=5<c.length&&c[5],b=b+'<span class="zg-gray-normal zu-autocomplete-row-description">';
c[4]||e?(e&&(b+="又称 "+c[5]),c[4]&&e&&(b+="，"),c[4]&&(b+=c[4]+" 人关注")):
b+="&nbsp;
";
d.innerHTML=b+"</span>"
}
else"people"===b.data[0]?d.innerHTML='<img class="zm-item-img-avatar zg-left" src="'+c[2]+'"><span class="zu-autocomplete-row-name" title="'+c[0]+'">'+c[0]+'</span><span class="zg-gray-normal zu-autocomplete-row-description">'+(c[4]||"&nbsp;
")+"</span>":"question"===b.data[0]?d.innerHTML=c[0]+'<span class="zm-ac-gray">问题</span>':"plain_text"===b.data[0]?(d.innerHTML=b.data[1],D.add(d,c[1])):"sina"===b.data[0]&&(d.innerHTML=c[0])
}
,a.rk=function(b,c,d)
{
var e,c=z.slice(b.data,
1);
if("topic"===b.data[0])
{
b=["<a ",' style="display:block" href="/topic/'+c[1]+'"><span class="zm-item-tag">',c[0],"</span>"].join("");
e=6<c.length&&c[6];
if(c[5]||e)
{
var b=b+'<span class="zm-ac-gray">',g=[];
e&&g.push("又称 "+c[6]);
(e=parseInt(c[5],10))&&g.push(e+" 个精华问答");
b+=g.join("，");
b+="</span>"
}
else b+='<span class="zm-ac-gray" >&nbsp;
</span>';
d.innerHTML=b+"</a>"
}
else"people"===b.data[0]?d.innerHTML='<a href="/people/'+c[1]+'" title="'+c[0]+'" class="zm-ac-link zm-ac-link-people"><img class="zm-item-img-avatar zg-left" src="'+
c[2]+'"><span class="zu-autocomplete-row-name" title="'+c[0]+'">'+c[0]+'</span><span class="zg-gray-normal zu-autocomplete-row-description">'+(c[4]||"&nbsp;
")+"</span></a>":"question"===b.data[0]?(e=parseInt(c[3],10),d.innerHTML=(c[4]?'<a class="zg-star" data-tip="s$b$优质问答" href="/question/'+c[2]+'"></a>':"")+['<a class="zm-ac-link"','href="/question/'+c[2]+'">',c[0]].join("")+('<span class="zm-ac-gray">'+(e?e+" 个回答":"还没有回答")+"</span></a>")):"search_link"===b.data[0]?(d.innerHTML='<a href="/search?q='+
c[0]+'&type=question">查看全部搜索结果<i class="zg-icon arrow"></i></a>',D.add(d,"zu-autocomplete-row-search-link")):"plain_text"===b.data[0]?d.innerHTML=c[0]:"sina"===b.data[0]&&(c=['<a href="javascript:;
" title="'+c[0]+'">','<img class="zm-item-img-avatar" src="'+c[2]+'" />',c[0],"</a>"].join(""),d.innerHTML=c);
$(d).on("click","a",function(b)
{
b.preventDefault()
}
)
}
,a.sk=function(b,c)
{
for(var d=c;
d!=k&&d!==b;
)
{
if("A"===d.tagName)return d;
d=d.parentNode
}
return k
}
,a.tk=function(b)
{
this.wQ=b;
this.data=new Od
}
;

tk.prototype.add=function(b,c)
{
this.wQ===n?this.data.set(b,c):this.data.set(encodeURIComponent(b),encodeURIComponent(c))
}
;
tk.prototype.Kc=function()
{
var b=[];
z.forEach(this.data.Fb(),function(c)
{
b.push(c+"="+this.data.get(c))
}
,this);
return b.join("&")
}
;

a.wk=function(b,c,d,e,g)
{
if(S.Ha())
{
uk&&"pending"===uk.state()&&uk.abort();
var g=g||
{

}
,c=c||b.getAttribute("data-focustype"),e=e||["zg-follow","zg-unfollow"],h=e[0],l=e[1],m=D.has(b,h);
Y.U(
{
type:"ga_click_follow",target:b,data:
{
type:c,Qj:m
}

}
);
var p=function(c)
{
c?(D.Ti(b,h,l),gk(b,g.unfollow_text||"取消关注")):(D.Ti(b,l,h),gk(b,g.follow_text||"关注"));
qa(d)&&d()
}
,e=function(b)
{
b.r?U(b.msg):p(m)
}
,r;
r=
{
roundtable:Ij,column:Hj,people:Cj,question:Dj,topic:Fj,favlist:Ej
}
[c];
var x=b.getAttribute("data-id")||b.id.match(/-(.*)/)[1];

r&&(r=r(x,m),"people"===c&&m?r.done(e):p(m),uk=r)
}
else e=vk.D(),e.Ga=c+"_follow_button",e.w(j),e.Sc.apply(e,
{
question:["follow","加入知乎，即可订阅最新回答","有新回答时通知你"],people:["follow","加入知乎，即可和 TA 互动交流","结识好友、搭档和大牛"],topic:["follow","加入知乎，即可关注话题","订阅话题下更多精彩内容"]
}
[c])
}
,a.uk=void 0,a.xk=function(b)
{
b=jk(b);
return!b?0:Math.ceil(b.replace(/(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g,"aaaaaaaaaaaaaaaaaaaa").replace(/\n/g,"a").replace(/\s/g,"a").replace(/[\u3000-\u303F\u4E00-\u9FA5\uf900-\ufa2d\uFF00-\uFFEF]/g,
"aa").length/2)
}
,a.zk=function(b,c,d,e)
{
window._gaq||(window._gaq=[]);
d&&(d=""+d);
e&&(e=parseInt(e,10));
window._gaq.push(["_trackEvent",b,c,d,e]);
Bg&&yk("trackEvent(deprecated)",z.toArray(arguments))
}
,a.Ak=function(b)
{
window._gaq||(window._gaq=[]);
window._gaq.push(["_trackPageview",b])
}
,a.Bk=void 0,a.Ck=
{
vV:
{
evaluate:/<%([\s\S]+?)%>/g,qQ:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g
}
,escape:function(b)
{
return(""+b).replace(/&/g,"&amp;
").replace(/</g,"&lt;
").replace(/>/g,"&gt;
").replace(/"/g,"&quot;
").replace(/'/g,
"&#x27;
").replace(/\//g,"&#x2F;
")
}

}
,a.Dk=/.^/,a.Ek=function(b)
{
return b.replace(/\\\\/g,"\\").replace(/\\'/g,"'")
}
;

Bk=function(b,c)
{
var d=Ck.vV,d="var __p=[],print=function()
{
__p.push.apply(__p,arguments);

}
;
with(data||
{

}
)
{
__p.push('"+b.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(d.escape||Dk,function(b,c)
{
return"',_.escape("+Ek(c)+"),'"
}
).replace(d.qQ||Dk,function(b,c)
{
return"',"+Ek(c)+",'"
}
).replace(d.evaluate||Dk,function(b,c)
{
return"');
"+Ek(c).replace(/[\r\n\t]/g," ")+";
__p.push('"
}
).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');

}
return __p.join('');
",e=new Function("data","_",d);

return c?e(c,Ck):function(b)
{
return e.call(this,b,Ck)
}

}
;
$(function()
{
var b=xg(document.body).top;
Fk.paddingTop=b
}
);
a.Fk=
{
offsetTop:0,paddingTop:0,vC:n
}
,a.Gk=function(b)
{
$(b.target.M.e).off("click.disable-a").on("click.disable-a","a",function(b)
{
b.preventDefault()
}
)
}
,a.Hk=function(b,c)
{
var d=k;
return function()
{
var e=this,g=arguments;
clearTimeout(d);
d=setTimeout(function()
{
c.apply(e,g)
}
,b)
}

}
;
a.Ik=
{
"rt:button":function()
{
wk(this,"roundtable",k,["zg-btn-green","zg-btn-white"])
}
,"rt:link":function()
{
wk(this,"roundtable",k,k,
{
follow_text:"关注活动"
}
)
}
,"c:link":function()
{
wk(this,"column",k,k,
{
follow_text:"关注专栏"
}
)
}
,"c:button":function()
{
wk(this,"column",k,["zg-btn-follow","zg-btn-unfollow"])
}
,"q:link":function()
{
wk(this,"question",k,k,
{
follow_text:"关注问题"
}
)
}
,"m:link":function()
{
wk(this,"people")
}
,"t:link":function()
{
wk(this,"topic")
}
,"m:button":function()
{
var b=this;
wk(b,"people",function()
{
b.getAttribute("data-focusme")&&
(D.has(b,"zg-btn-follow")?b.setAttribute("data-tip","s$b$对方已关注你"):b.setAttribute("data-tip","s$b$已互相关注"))
}
,["zg-btn-follow","zg-btn-unfollow"])
}
,"q:m:button":function()
{
wk(this,"question",k,["zg-btn-green","zg-btn-white"])
}
,"f:button":function()
{
wk(this,"favlist",k,["zg-btn-follow","zg-btn-unfollow"])
}
,"t:button":function()
{
wk(this,"topic",k,["zg-btn-follow","zg-btn-unfollow"])
}

}
;
$(function()
{
$(document.body).on("click.video","div[data-swfurl]",function(b)
{
var c=b.currentTarget,d=$(b.currentTarget).data("swfurl");
if(!Kc(c,k,"zh-summary"))if(ub||ji)b=J("video-url",c),window.open(b.innerHTML);
else
{
var e=K("embed"),b=-1<d.indexOf("tudou");
if(-1<d.indexOf("youku"))
{
var g=d.match(/\w
{
10,
}
/g),h="";
g&&g.length&&(h="http://static.youku.com/v1.0.0179/v/swf/loader.swf?VideoIDS="+g[0]+"&embedid=-&showAd=0&isAutoPlay=true&isShowRelatedVideo=false");
d=h||d
}
b&&(d=d.replace("/v.swf","&autoPlay=true/v.swf"));

d=[["src",d],["type","application/x-shockwave-flash"],["allowscriptaccess","never"],["allowfullscreen","true"],["wmode","opaque"],["class","video"],["pluginspage","http://get.adobe.com/cn/flashplayer/"]];
b&&d.push(["flashvars","playMovie=true&auto=true"]);
z.forEach(d,function(b)
{
e.setAttribute(b[0],b[1])
}
);
var b=K("a",
{
innerHTML:'<i class="icon-fold"></i>收起视频',"class":"video-player-close",href:"#"
}
),l=K("div","video-player-box",[e,K("div","video-player-foot",b)]);
xd(b,"click",function(b)
{
b.preventDefault();

L(l);
R(c,j)
}
);
mc(l,c);
R(c,n)
}

}
)
}
);
a.Jk=void 0,a.Kk=function(b)
{
if(ub||ji)window.open("http://v.youku.com/v_show/id_"+b+".html");
else if(window.YKU)
{
var c,d;
Jk?c=Jk:(c=new yi,c.on("beforehide",function()
{
var b="close_video_finished";
try
{
b=58<+d.currentTime()?"close_video_finished":"close_video_playing",d.pauseVideo()
}
catch(c)
{

}
Y.U(
{
type:"ga_click_close_video",label:b
}
)
}
));
c.w(j);
$(c.h()).addClass("videopopup-dialog");
var e=$(c.aa());
e.children().remove();
var g=$(yh(c));
e.append($('<div id="youkuplayer"></div>').width(860).height(524)).append($('<div class="share-wrap">  分享视频：   <a href="javascript:;
" class="share sina-share" data-type="sina" ><span class="icon-sina-white"></span>分享到新浪微博</a>  <a href="javascript:;
" class="share qzone-share" data-type="qzone" ><span class="icon-qq-white"></span>分享到 QQ 空间</a></div>').on("click",
".share",function(c)
{
var c=$(c.target),d;
"sina"===c.data("type")?(Y.U(
{
type:"ga_click_share_video",label:"share_video_sina_weibo"
}
),d="http://service.weibo.com/share/share.php?"+$.param(
{
type:"6",count:"1",appkey:"3063806388",title:"『如果每个人都变得乐于分享自己的知识，这个世界总会好上一点儿的吧。』 ——分享自@知乎  http://www.zhihu.com/#play-video http://v.youku.com/v_show/id_"+b+".html",pic:"http://s0.zhimg.com/misc/weibo.png",language:"zh_cn",rnd:(new Date).valueOf()
}
)):"qzone"===c.data("type")&&(Y.U(
{
type:"ga_click_share_video",label:"share_video_qqzone"
}
),
d="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?"+$.param(
{
url:"http://www.zhihu.com/#play-video",showcount:"1",desc:"『如果每个人都变得乐于分享自己的知识，这个世界总会好上一点儿的吧。』 ——分享自@知乎 ",summary:"在知乎，认真你就赢了",title:"知乎 —— 可能是最好的中文问答社区。",site:"知乎网",pics:"http://s0.zhimg.com/misc/weibo.png",style:"203",width:98,height:22
}
));
d&&window.open(d,"","width=700, height=580, top=100, left=100, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no")
}
));
g.removeClass("modal-dialog-title").addClass("videopopup-title");

c.Ei("auto");
$(c.co()).css("backgroundColor","#000");
Ah(c,0.8);
d=new window.YKU.Player("youkuplayer",
{
client_id:"31cc1eceae589704",vid:b,autoplay:j,show_related:n
}
);
Jk=c;
c.na()
}

}
;
$(function()
{
$(document.body).on("click.videopopup","div[data-vid]",function(b)
{
b=$(b.currentTarget).data();
Y.U(
{
type:"ga_click_play_video",label:b.label||"home_play_video"
}
);
Kk(b.vid)
}
)
}
);
$(function()
{
Wa(location.hash,"play-video")&&(window.setTimeout(function()
{
Y.U(
{
type:"ga_visit_home_video"
}
)
}
,10),Kk("XNjEwNTk4MjIw"))
}
);
a.Lk=void 0,a.Mk=window.FastClick;
Lk=[".ac-row *",".goog-menu *",".goog-menu-button *"];
if(Mk)
{
var Nk=Mk.prototype.needsClick,Ok;
if(window.xX)
{
var Pk=z.find(["matchesSelector","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector"],function(b)
{
return HTMLElement.prototype[b]
}
);
Ok=Pk&&HTMLElement.prototype[Pk]
}
var Qk=Ok?function(b,c)
{
return Ok.call(b,c)
}
:function(b,c)
{
return $(b).is(c)
}
;
Mk.prototype.needsClick=function(b)
{
return z.some(Lk,function(c)
{
return Qk(b,c)
}
)?j:Nk.call(this,b)
}

}
;
a.Rk=function()
{
M.call(this)
}
;
y(Rk,Hd);
Rk.prototype.g=function()
{
return this.hi||(this.hi=new me(this))
}
;
Rk.prototype.pf=function(b,c)
{
if(!this.e)return k;
for(var d=c||"A",e=b;
e!=k&&e!==this.e;
)
{
if(e.tagName===d)return e;
e=e.parentNode
}
return k
}
;
a.Sk=function()
{
M.call(this);
this.last=this.HZ=0;
this.LZ=n
}
;
y(Sk,Rk);
Sk.prototype.v=function()
{
if(this.e=I("zh-global-message"))this.EG=J("zu-global-notify-msg",this.e),this.g().c(this.e,"click",this.ga)
}
;
Sk.prototype.ga=function(b)
{
b.target&&b.target.name&&R(this.e,n)
}
;
a.Uk=function(b,c)
{
c&&c.length&&z.forEach(c,function(b)
{
this.dispatchEvent(new Tk(b[0],b[1]))
}
,b)
}
;
Sk.prototype.fireEvent=u(37);

a.Vk=function(b)
{
var c=Y;
c.EG?(c.EG.innerHTML=b,R(c.e,j)):U(b)
}
,a.Tk=function(b,c)
{
this.type=b;
this.mb=c
}
;
y(Tk,id);
a.Y=new Sk;
Y.v();
a.Wk=function(b)
{
function c()
{
r.onload=r.onerror=r.onreadystatechange=k;
document.body.removeChild(r)
}
function d()
{
c();
p.resolve()
}
function e()
{
clearTimeout(m);
m=k;
try
{
delete window[h]
}
catch(b)
{
window[h]=k
}

}
"string"===$.type(b)&&(b=
{
url:b
}
);
var b=b||
{

}
,g=$.Deferred(),h="zh"+za()+cb(),l=$.extend(
{

}
,b.data||
{

}
,
{
callback:h
}
),m=k;
b.timeout&&(m=setTimeout(function()
{
window[h]&&(window[h]=e,g.reject("timeout"))
}
,b.timeout));
window[h]=g.resolve;
var b=b.url+(-1===b.url.indexOf("?")?"?":"&")+$.param(l),p=$.Deferred(),
r=document.createElement("script");
r.onload=d;
r.onerror=function()
{
c();
p.reject()
}
;
r.onreadystatechange=function()
{
("loaded"===r.readyState||"complete"===r.readyState)&&d()
}
;
r.src=b;
document.body.appendChild(r);
p.promise().fail(g.reject).always(e);
return g.promise()
}
;
a.Xk=function(b)
{
this.options=$.extend(j,
{

}
,this.Q,b||
{

}
);
this.promise=k;
this.dI=1E3;
this.Ry=3E4;
this.Sj=this.dI;
this.UP=1.5
}
;
y(Xk,Hd);
Xk.prototype.Q=
{
type:"GET",url:"",data:
{

}
,timeout:6E4,xhrFields:
{
withCredentials:j
}

}
;
Xk.prototype.Jz=function()
{
if(!(this.promise&&"pending"===this.promise.state()))
{
var b=this.options;
this.promise=($.support.cors?$.ajax(b):Wk(b)).done($.proxy(this.pS,this)).fail($.proxy(this.si,this))
}

}
;

Xk.prototype.pS=function(b)
{
this.Sj=this.dI;
try
{
this.dispatchEvent(
{
type:"message",data:b
}
)
}
catch(c)
{

}
this.Jz()
}
;
Xk.prototype.si=function()
{
this.Sj!==this.Ry&&(this.Sj*=this.UP);
this.Sj>this.Ry&&(this.Sj=this.Ry);
this.Ac=setTimeout($.proxy(this.Jz,this),this.Sj);
this.dispatchEvent("error")
}
;
a.Yk=function(b)
{
this.Id=b
}
,a.Zk=function(b)
{
return function()
{
this.Id=b.apply(k,[this.Id].concat(z.toArray(arguments)));
return this
}

}
;
Yk.prototype.filter=Zk(z.filter);
Yk.prototype.map=Zk(z.map);
Yk.prototype.reduce=Zk(z.reduce);
Yk.prototype.reduceRight=Zk(z.reduceRight);
Yk.prototype.flatten=Zk(z.flatten);
Yk.prototype.size=function()
{
return this.Id.length
}
;
Yk.prototype.toArray=q("Id");
a.$k=function(b)
{
E.extend(this.C=
{

}
,this.Q,b||
{

}
);
this.vf()
}
,a.al=["group","key","name"],a.bl=function(b)
{
return z.every(al,function(c)
{
return b[c]
}
)
}
,a.cl=function(b)
{
return $.extend(
{

}
,
{
key:b.key
}
,b.Ab)
}
,a.dl=function(b,c)
{
z.every(b,function(b)
{
return!z.every(al,function(e)
{
return b[e]===c[e]
}
)
}
)&&b.push(c);
return b
}
,a.el=function(b,c)
{
var d=b[c.group];
d?d.push(c):b[c.group]=[c];
return b
}
;
$k.prototype.Q=
{
gN:"帮助信息",dw:"shortcut-tips-dialog"
}
;

$k.prototype.vf=function()
{
dk(ck(ek,"shift+/",this.show,this),
{
group:"导航",name:"帮助",key:"?"
}
)
}
;

$k.prototype.show=function()
{
var b=this.C,c=b.gN,d;
d=(new Yk(bk)).map(function(b)
{
return E.Ja(b.gl.ju())
}
).flatten().map(cl).filter(bl).reduce(dl,[]).reduce(el,
{

}
).toArray();
var e=['<div class="shortcut-tips">'],g=
{
nU:/([^\s+])+|([\s+])/g,LN:function(b)
{
return b.replace(this.nU,function(b,c)
{
return c?"<kbd>"+b+"</kbd>":" "+b+" "
}
)
}

}
;
E.forEach(d,function(b,c)
{
e.push('<div class="group"><h2>',c,"</h2><dl>");
z.forEach(b,function(b)
{
e.push("<dt>",g.LN(b.key),"</dt>");
e.push("<dd>",b.name,"</dd>")
}
);
e.push("</dl></div>")
}
);

e.push("</div>");
d=e.join("");
Ci(
{
title:c,content:d,Zi:["确定"],className:b.dw
}
)
}
;
$.easing.easeOutCubic=function(b,c,d,e,g)
{
return e*((c=c/g-1)*c*c+1)+d
}
;
a.fl=function(b)
{
T.call(this);
this.Ij=-1;
E.extend(this.C=
{

}
,this.Q,b||
{

}
)
}
;
y(fl,T);
t=fl.prototype;
t.Q=
{
items:">li",kM:n,HN:j,className:"navigable",pE:"navigable-focusin"
}
;
t.z=function()
{
fl.m.z.call(this);
var b=this.C;
this.K=$(this.e).addClass(b.className).data("navigable",this).on("focusin.navigable focusout.navigable",b.items,$.proxy(this.aS,this));
this.Lh()
}
;
t.p=function()
{
fl.m.p.call(this);
this.K.removeClass(this.C.className).data("navigable",k).off(".navigable");
this.K=k
}
;
t.Lh=ha;
t.index=q("Ij");

t.size=function()
{
return this.items().length
}
;
t.prev=function()
{
gl(this,this.index()-1)
}
;
t.next=function()
{
gl(this,this.index()+1)
}
;
t.first=function()
{
gl(this,0)
}
;
t.last=function()
{
gl(this,this.size()-1)
}
;
a.gl=function(b,c)
{
if(c!==b.index())
{
var d=b.size(),e=d-1;
b.C.kM&&(c>e?c=0:0>c&&(c=e));
b.dispatchEvent(
{
data:
{
index:c,size:d
}
,type:"action"
}
);
0>c||c>e||(b.Ij=c,b.kz(b.items()[b.index()]))
}

}
;

t.aS=function(b)
{
var c=this.C,d=b.currentTarget,e=$(d);
"focusin"===b.type?(e.addClass(c.pE),this.Ij=$.inArray(d,this.items())):e.removeClass(c.pE)
}
;
t.kz=function(b)
{
this.C.HN&&(b.tabIndex=-1,b.focus());
this.dispatchEvent(
{
data:
{
item:b
}
,type:"focus"
}
)
}
;
fl.prototype.items=function()
{
var b=this.C.items;
return!b?this.K.children().get():$(b,this.K).get()
}
;
a.hl=function(b)
{
fl.call(this,b);
this.MJ=$($.browser.webkit?document.body:document.documentElement)
}
;
y(hl,fl);
E.extend(hl.prototype.Q=
{
vU:200,offsetTop:0
}
,fl.prototype.Q);
a.il=function(b)
{
return
{
k:
{
action:b.prev,Ab:
{
group:"导航",name:"上一条目"
}

}
,j:
{
action:b.next,Ab:
{
group:"导航",name:"下一条目"
}

}
,"g g":
{
action:b.first,Ab:
{
group:"导航",name:"第一个条目"
}

}
,"shift+g":
{
action:b.last,Ab:
{
group:"导航",name:"最后一个条目"
}

}
,"shift+k":
{
action:b.xU,Ab:
{
group:"导航",name:"屏幕上移"
}

}
,"shift+j":
{
action:b.tU,Ab:
{
group:"导航",name:"屏幕下移"
}

}

}

}
;

t=hl.prototype;
t.Lh=function()
{
E.forEach(il(this),function(b,c)
{
dk(ck(ek,c,b.action,this),b.Ab)
}
,this)
}
;
t.p=function()
{
hl.m.p.call(this);
var b=E.Fb(il(this));
z.forEach(ma(b)?b:[b],ek.YV,ek)
}
;
t.kz=function(b)
{
hl.m.kz.call(this,b);
var c=this.C;
this.scrollTo($(b).offset().top+c.offsetTop,c.vU,"easeOutCubic")
}
;
t.scrollTo=function(b,c,d)
{
this.MJ.stop().animate(
{
scrollTop:b
}
,c,d)
}
;
t.tU=function()
{
this.scrollTo("+=60",100)
}
;
t.xU=function()
{
this.scrollTo("-=60",100)
}
;
a.jl=function()
{
T.call(this)
}
;
y(jl,T);
a.kl=new jl;
kl.n(document);
a.ll=function()
{
wh.call(this,i,i,i);
this.MM=S.Dr;
this.Ro=S.Ro;
this.Nx=S.Nx;
this.AI=""!==this.Ro;
this.g().c(Ki,"/activation/resend-email",xa(this.GU,j))
}
;
ia(ll);
y(ll,yi);
t=ll.prototype;
t.Ik=Bk('    <% if (showTopTip) 
{
 %>       <div class="top-tip well-blue"><%= topTip %></div>    <% 
}
 %>    <% if (showForm) 
{
 %>    <form class="js-email-form">    <dl class="zm-form-table zm-form-table-wide" style="">      <dt class="zm-form-table-head zm-form-table-head-align-middle">        <label class="" for="cur-login-passwd">您的注册邮箱：</label>      </dt>      <dd class="zm-form-table-field zg-form-table-count">        <label class=""><%= curEmail %></label></dd>      <% if (hasPassword) 
{
 %>      <dt class="zm-form-table-head zm-form-table-head-align-middle">        <label class="" for="cur-login-passwd">您的密码：</label>      </dt>      <dd class="zm-form-table-field">        <input class="zg-form-text-input" type="password" name="pw"></dd>      <% 
}
 %>      <dt class="zm-form-table-head zm-form-table-head-align-middle">        <label class="" for="new-email">新的登录邮箱：</label>      </dt>      <dd class="zm-form-table-field">        <input class="zg-form-text-input" type="text" name="newemail"></dd>      <dd class="zm-form-table-field">        <button class="js-update-email zg-btn-blue">更新邮箱</button>        <a class="js-cancel zm-form-btn-collapse" href="javascript:;
">取消</a>      </dd>    </dl>    </form>    <% 
}
 %>    <% if (showMiddleTip) 
{
 %>    <div class="middle-tip"><%= middleTip %></div>    <% 
}
 %>    <% if (showSendEmail) 
{
 %>    <div class="">      <dl class="zm-form-table zm-form-table-wide" >        <dt class="zm-form-table-head zm-form-table-head-align-middle">          <label class="">您的<%= isMobile ? "" : "注册" %>邮箱：</label>        </dt>        <dd class="zm-form-table-field zg-form-table-count">          <label class="login-email"><%= curEmail %></label>          <a class="js-change-email" href="javascript:;
">修改</a>          <br>        </dd>      </dl>    <% if (sent) 
{
 %>    <div style="text-align:center;
clear:both;
"><span class="zg-medium-gray">已发送</span></div>    <% 
}
 else 
{
 %>    <div style="text-align:center;
margin-bottom:15px;
clear:both;
"><a class="js-resend" href="javascript:;
">重新发送激活邮件</a></div>    <% 
}
 %>    </div>    <% 
}
 %>    <% if (showEmailUrl) 
{
 %>    <div class="email-url">      <a class="zg-btn-blue" target="_blank" href="<%= emailUrl %>">进入我的邮箱 »</a>    </div>    <% 
}
 %>    <% if (showBottomTip) 
{
 %>    <div class="bottom-tip"><%= bottomTip %></div>    <% 
}
 %>    ');

t.$t=
{
showTopTip:j,showSendEmail:j,showBottomTip:j
}
;
t.gV=
{
showTopTip:j,showForm:j,showBottomTip:j,showEmailUrl:n
}
;
t.hV=
{
showMiddleTip:j
}
;
t.Y=function()
{
ll.m.Y.call(this);
this.eb("请激活帐号");
ml(this,ll.prototype.$t);
this.K=$(this.aa()).addClass("activate-dialog");
$(this.e).css("width","400px");
this.qv()
}
;

a.ml=function(b,c)
{
var d=$.extend(
{
showTopTip:n,showMiddleTip:n,showBottomTip:n,showEmailUrl:b.AI,showForm:n,showSendEmail:n,isMobile:ub,sent:b.tI,topTip:"为正常使用知乎提问、回答、评论和编辑功能，请验证您的邮箱、激活帐号。",middleTip:Ga("一封验证邮件已经发到您的新邮箱：<br>%s，请注意查收。",b.yR),bottomTip:"请进入邮箱收取验证邮件、并通过邮件中链接激活你的知乎帐号。",curEmail:b.MM,emailUrl:b.Ro,hasPassword:b.Nx
}
,c);
b.Na(b.Ik(d))
}
;

t.qv=function()
{
var b=this;
$.each(
{
".js-update-email":b.bW,".js-cancel":b.cancel,".js-change-email":b.eM,".js-resend":b.eU
}
,function(c,d)
{
b.K.on("click",c,$.proxy(d,b))
}
)
}
;
t.bW=function()
{
var b=this;
$.post("/settings/update_email",b.K.find(".js-email-form").serialize()).done(function(c)
{
c.r?U(c.msg):(b.yR=c.msg[0],b.AI=""!==c.msg[1],b.Ro=c.msg[1],ml(b,ll.prototype.hV))
}
);
return n
}
;
t.GU=function(b)
{
this.tI=b;
ml(this,ll.prototype.$t)
}
;
t.cancel=function()
{
ml(this,ll.prototype.$t)
}
;

t.eM=function()
{
ml(this,ll.prototype.gV)
}
;
t.eU=function()
{
var b=this;
$.post("/reactive").done(function(c)
{
c.r?U(c.msg):(b.tI=j,ml(b,ll.prototype.$t))
}
)
}
;
a.nl=function(b)
{
T.call(this);
this.oF=k;
this.nv=b;
this.U_=0;
this.r_=3;
this.Io=n
}
;
y(nl,T);
t=nl.prototype;
t.n=function(b)
{
this.wrap=b;
if(b=J("zm-entry-head-avatar-edit-button",this.wrap))this.Io=j,this.g().c(b,"click",function(b)
{
b.stopPropagation();
b.preventDefault();
S.Ha()&&!S.xe&&"people"!==this.nv?ll.D().w(j):S.Ha()?(this.dy(),this.T.w(j)):vk.D().w(j)
}
);
this.oF=J("zm-avatar-editor-preview",this.wrap);
if(!this.Io&&(ol(this),b=J("zm-form-table-field",this.wrap)))b.appendChild(this.Hl),this.Da()
}
;

t.dy=function()
{
this.sT||(ol(this),this.sT=j,this.T=new yi(k,n),this.T.eb("图片上传"),this.T.aa().appendChild(this.Hl),this.Da())
}
;

a.ol=function(b)
{
b.Hl=K("div",b.Io?k:"zg-section",[b.vT=K("iframe",
{
id:"av_up_frame",src:"about:_blank",name:"av_up_frame",style:"visible:hidden;
position:absolute;
height:0;
width:0;
left:-9000px"
}
),b.FG=K("div",
{
"class":"zm-modal-dialog-warnmsg",style:"display:none"
}
,"上传失败， 请重试"),b.ai=K("div","avt_form"),b.cZ=K("label",
{
"class":"zg-gray zg-section",style:"display: block;
padding:12px 0;
","for":"avt_file"
}
,"支持 JPG、GIF、PNG 格式，不要超过 2MB。"),b.Io?K("div","zm-command",[b.jl=K("a",
{
"class":"zm-command-cancel",
href:"javascript:;
"
}
,"关闭"),b.ll=K("a",
{
"class":"zg-btn-blue",href:"javascript:;
"
}
,"开始上传")]):b.ll=K("a",
{
"class":"zg-btn-blue",href:"javascript:;
"
}
,"开始上传")]);
b.ai.innerHTML=['<form target="av_up_frame" method="post" enctype="multipart/form-data" action="'+("http://upload."+Dg.Fm+":"+location.port)+'">','<input type="hidden" name="type" value="'+("people"===b.nv?"1":"2")+'" />','<input type="hidden" name="dest_id" value="',"people"===b.nv?S[3]:Gg[0][3],'" /><input type="file" name="picture" id="avt_file" /><input type="hidden" name="return_size" value="l" /></form>'].join("");

b.eW=b.ai.firstChild
}
;
t.Da=function()
{
this.g().c(this.ll,"click",this.fV);
this.g().c(Y,"iframe_data",this.cW);
this.jl&&this.g().c(this.jl,"click",function()
{
this.T.w(n)
}
)
}
;
t.fV=function()
{
R(this.FG,n);
var b=I("avt_file");
b&&b.value&&(pl(this,j),this.eW.submit())
}
;
t.cW=function(b)
{
var b=b.mb,c;
b&&!b.r&&(c=b.url||b.msg)?(this.oF.src=c+"?r="+ +new Date,pl(this,n),this.Io&&this.T.w(n),this.dispatchEvent(
{
type:"uploadSuccess",data:c
}
)):R(this.FG,j)
}
;

a.pl=function(b,c)
{
b.Ho=c;
b.Ho?(b.ll.innerHTML="上传中…",D.Ti(b.ll,"zg-btn-blue","zg-btn-white")):(b.ll.innerHTML="开始上传",D.Ti(b.ll,"zg-btn-white","zg-btn-blue"))
}
;
$.fn.placeholder=function(b)
{
return this.each(function()
{
var c=$(this),d=c.data("placeholder");
d||c.data("placeholder",d=new ql(this,b));
d.Wq()
}
)
}
;
a.ql=function(b,c)
{
b&&(this.input=b,"string"===typeof c&&(c=
{
text:c
}
),E.extend(this.C=
{

}
,this.Q,c||
{

}
),this.$g=k,this.Tu())
}
,a.rl="placeholder"in document.createElement("input");
t=ql.prototype;
t.Q=
{
text:"",offsetParent:k,FC:n
}
;
t.UL=["paddingBottom","paddingTop","paddingLeft","paddingRight"];

t.uk=function(b)
{
var c=this.input,d=this.C;
d.text=b||"";
rl?(sl(c)||Pc(c,Wc.xq,d.text),c.setAttribute("placeholder",d.text)):zc(this.label,d.text)
}
;
a.tl=function(b)
{
rl?D.enable(b.input,"placeholder-hilight",n):D.enable(b.label,"placeholder-label-hilight",n)
}
;
t.F=function()
{
this.$g&&(this.$g.Pc(),this.$g.F());
L(this.label);
this.label=k
}
;

t.Tu=function()
{
var b=this.input,c=this.C;
c.text||(c.text=b.getAttribute("placeholder"));
if(rl)return this.uk(c.text);
var d=this.input,e=gg(d),g=K("label"),h=jg(d,this.offsetParent());
Tf(g,
{
color:"gray",cursor:"text",position:"absolute",left:h.x+e.left+"px",top:h.y+e.top+"px",display:this.Hb()?"block":"none",width:ul(d,"width"),fontSize:ul(d,"fontSize"),lineHeight:ul(d,"lineHeight"),fontFamily:ul(d,"fontFamily")
}
);
d=this.label=g;
this.uk(c.text);
this.offsetParent().appendChild(d);
e=this.$g=new me(this);

e.c(b,"blur",this.Wq);
e.c(b,"focus",this.hide);
c.FC&&e.c(b,"keydown",this.hide);
e.c(d,"click",function()
{
this.hide();
rg(b)&&b.focus()
}
);
b.B_=v(this.Wq,this);
c=this.input;
d=this.label;
sl(c)||(c.id?d.htmlFor=c.id:(d.id=ih(hh.D()),Pc(c,Wc.Lu,d.id)));
this.position();
this.Wq()
}
;
a.sl=function(b)
{
if(("labels"in b?b.labels.length:b.id&&z.some(document.getElementsByTagName("label"),function(c)
{
return c.htmlFor===b.id
}
))||Qc(b,Wc.xq)||Qc(b,Wc.Lu))return j
}
,a.ul=function(b,c)
{
return Vf(b,c)||Wf(b,c)||b.style[c]
}
;

t.offsetParent=function()
{
return this.C.offsetParent||this.input.offsetParent
}
;
t.Wq=function()
{
if(!rl)if(this.Hb()&&rg(this.input))
{
this.show();
var b=this.input,c=gg(b),d=this.label,e=jg(b,this.offsetParent());
Tf(d,
{
left:e.x+c.left+"px",top:e.y+c.top+"px",width:ul(b,"width"),fontSize:ul(b,"fontSize"),lineHeight:ul(b,"lineHeight"),fontFamily:ul(b,"fontFamily")
}
);
this.offsetParent().appendChild(d)
}
else this.hide()
}
;
t.show=function()
{
this.label&&R(this.label,j)
}
;

t.hide=function()
{
this.label&&R(this.label,n)
}
;
t.Hb=function()
{
return!this.input.value
}
;
t.position=function()
{
z.forEach(this.UL,function(b)
{
this.label.style[b]=ul(this.input,b)
}
,this)
}
;
a.vl=function()
{
M.call(this);
this.Wc=[];
this.vl=[];
this.kw=
{

}
;
this.P=new me(this);
this.uQ=this.MF=n;
this.wB=j
}
;
y(vl,Hd);
t=vl.prototype;
t.iF=0;
t.uI=ca("iF");
a.wl=function(b,c,d)
{
c.RD=d;
c.jj=i;
b.Wc.push(c)
}
;

t.v=function()
{
if(!this.MF)
{
for(var b=0,c=this.Wc.length;
b<c;
b++)for(var d=qc(this.Wc[b]),e=0,g=d.length;
e<g;
++e)
{
var h=d[e],l=h,m=ua(l);
this.kw[m]=h;
this.UD&&(this.P.c(h,"mouseover",this.uO),this.P.c(h,"mouseout",this.tO));
this.TD&&(this.P.c(l,"mouseover",this.sO),this.P.c(l,"mouseout",this.rO));
this.vl.push(h);
this.P.c(l,["mousedown","touchstart"],this.bP)
}
this.MF=j
}

}
;

t.p=function()
{
this.P.F();
for(var b=0,c=this.Wc.length;
b<c;
b++)
{
var d=this.Wc[b];
d.RD=i;
d.jj=i
}
this.Wc.length=0;
this.vl.length=0;
this.kw=k;
xl(this);
vl.m.p.call(this)
}
;
a.yl=function(b,c)
{
for(var d=0,e=b.Wc.length;
d<e;
d++)
{
var g=b.Wc[d];
g.ul=pg(g)
}
d=0;
for(e=b.vl.length;
d<e;
d++)g=b.vl[d],g!=c&&(g.ul=pg(g))
}
;

t.bP=function(b)
{
var c=ua(b.currentTarget);
this.ya=this.kw[c];
a:
{
var c=this.ya,d=c.cloneNode(j);
switch(c.tagName.toLowerCase())
{
case "tr":c=K("table",k,K("tbody",k,d));
break a;
case "td":case "th":c=K("table",k,K("tbody",k,K("tr",k,d)));
break a;
default:c=d
}

}
this.Bb=c;
this.zr&&D.add(this.Bb,this.zr);
this.Bb.style.margin="0";
this.Bb.style.position="absolute";
this.Bb.style.visibility="hidden";
Tb(this.ya).body.appendChild(this.Bb);
c=dg(this.ya);
lg(this.Bb,c);
this.Cb=new Yg(this.Bb);
this.Cb.uI(this.iF);

N(this.Cb,"start",this.wx,n,this);
N(this.Cb,"end",this.pO,n,this);
N(this.Cb,"earlycancel",this.Fv,n,this);
this.Cb.Um(b)
}
;

t.wx=function(b)
{
if(this.dispatchEvent(new zl("beforedragstart",this,b.QC,this.ya,k,k)))
{
this.gt=this.ya.parentNode;
this.oD=this.yz=this.ya.nextElementSibling!=i?this.ya.nextElementSibling:rc(this.ya.nextSibling,j);
this.Uv=this.gt;
this.Tv?D.add.apply(k,z.concat(this.ya,this.Tv)):this.ya.style.visibility="hidden";
var c=og(this.Bb);
this.Bb.$N=c.width/2;
this.Bb.ZN=c.height/2;
this.Bb.style.visibility="";
this.wB&&(this.ya.style.display="none");
yl(this,this.ya);
this.ya.style.display="";
N(this.Cb,"drag",
this.vO,n,this);
this.dispatchEvent(new zl("dragstart",this,b.QC,this.ya,this.Bb,this.Cb))
}
else b.preventDefault(),this.Fv()
}
;

t.vO=function(b)
{
var c=dg(this.Bb),c=new Ob(c.x+this.Bb.$N,c.y+this.Bb.ZN),d;
a:
{
d=k;
if("none"!=this.ya.style.display)
{
d=this.ya.parentNode;
var e=pg(d);
if(Al(c,e))break a
}
for(var e=0,g=this.Wc.length;
e<g;
e++)
{
var h=this.Wc[e];
if(h!=d&&Al(c,h.ul))
{
d=h;
break a
}

}
d=k
}
var l;
if(d)
{
d==k&&f(Error("getHoverNextItem_ called with null hoverList."));
var m,p,e=n,g=i;
switch(d.RD)
{
case 0:l=c.y;
m=Bl;
p=Cl;
break;
case 4:e=j;
case 2:l=c.x;
m=Dl;
p=Cl;
break;
case 5:e=j;
case 3:l=c.x,m=El,p=Fl
}
for(var h=k,r,x=qc(d),F=0,H=x.length;
F<
H;
F++)
{
var G=x[F];
if(G!=this.ya)
{
var Q=m(G.ul);
if(e)
{
var X=Gl(G,c);
la(g)||(g=X);
if(p(l,Q)&&(r==i||X<g||X==g&&(p(Q,r)||Q==r)))h=G,r=Q;
X<g&&(g=X)
}
else if(p(l,Q)&&(r==i||p(Q,r)))h=G,r=Q
}

}
l=h!==k&&Gl(h,c)>g?k:h
}
else l=k;
if(!this.dispatchEvent(new zl("beforedragmove",this,b,this.ya,this.Bb,this.Cb,c,d,l)))return n;
if(d)this.wB?(this.ya.parentNode!=d||(this.ya.nextElementSibling!=i?this.ya.nextElementSibling:rc(this.ya.nextSibling,j))!=l)&&d.insertBefore(this.ya,l):l&&(this.oD=l),this.ya.style.display=
"",d.jj&&D.add(d,d.jj);
else
{
this.uQ||(this.ya.style.display="none");
m=0;
for(p=this.Wc.length;
m<p;
m++)r=this.Wc[m],r.jj&&D.remove(r,r.jj)
}
d!=this.Uv&&(this.Uv=d,yl(this,this.ya));
this.dispatchEvent(new zl("dragmove",this,b,this.ya,this.Bb,this.Cb,c,d,l));
return n
}
;
t.Fv=function()
{
xl(this);
this.Cb=this.Bb=this.yz=this.gt=this.Uv=this.ya=k;
for(var b=0,c=this.Wc.length;
b<c;
b++)this.Wc[b].ul=k;
b=0;
for(c=this.vl.length;
b<c;
b++)this.vl[b].ul=k
}
;

t.pO=function(b)
{
if(!this.dispatchEvent(new zl("beforedragend",this,b,this.ya,this.Bb,this.Cb)))return n;
this.wB||this.gt.insertBefore(this.ya,this.oD);
xl(this);
this.dispatchEvent(new zl("dragend",this,b,this.ya,this.Bb,this.Cb));
this.Fv();
return j
}
;

a.xl=function(b)
{
Vc(b.Cb);
b.Bb&&L(b.Bb);
b.ya&&"none"==b.ya.style.display&&(b.gt.insertBefore(b.ya,b.yz),b.ya.style.display="");
b.Tv&&b.ya?D.remove.apply(k,z.concat(b.ya,b.Tv)):b.ya&&(b.ya.style.visibility="visible");
for(var c=0,d=b.Wc.length;
c<d;
c++)
{
var e=b.Wc[c];
e.jj&&D.remove(e,e.jj)
}

}
;
t.uO=function(b)
{
D.add.apply(k,z.concat(b.currentTarget,this.UD))
}
;
t.tO=function(b)
{
D.remove.apply(k,z.concat(b.currentTarget,this.UD))
}
;
t.sO=function(b)
{
D.add.apply(k,z.concat(b.currentTarget,this.TD))
}
;

t.rO=function(b)
{
D.remove.apply(k,z.concat(b.currentTarget,this.TD))
}
;

a.Al=function(b,c)
{
return b.x>c.left&&b.x<c.left+c.width&&b.y>c.top&&b.y<c.top+c.height
}
,a.Gl=function(b,c)
{
var d=b.ul;
return Math.abs(c.y-(d.top+(d.height-1)/2))
}
,a.Bl=function(b)
{
return b.top+b.height-1
}
,a.Dl=function(b)
{
return b.left+b.width-1
}
,a.El=function(b)
{
return b.left||0
}
,a.Cl=function(b,c)
{
return b<c
}
,a.Fl=function(b,c)
{
return b>c
}
,a.zl=function(b,c,d,e,g,h,l,m,p)
{
id.call(this,b);
this.EZ=c;
this.event=d;
this.zZ=e;
this.FZ=g;
this.yr=h;
this.GZ=l;
this.ZZ=m;
this.$Z=p
}
;
y(zl,id);
a.Ll=function(b,c,d)
{
M.call(this);
this.yf=b;
this.Ff=d;
this.M=c;
N(c,[Hl,Il,Jl,Kl],this);
this.dc=k;
this.bb=[];
this.Mc=-1;
this.Ic=0;
this.Rd=this.Ub=k;
this.CF=
{

}

}
;
y(Ll,Hd);
t=Ll.prototype;
t.ni=10;
t.pn=j;
t.rC=n;
t.EJ=n;
t.gJ=n;
a.Hl="hilite",a.Il="select",a.Kl="dismiss",a.Jl="canceldismiss",a.Ml=
{
sY:"rowhilite",vX:Hl,wY:Il,XJ:Kl,SW:Jl,WY:"update",Ri:"suggestionsupdate"
}
;
t=Ll.prototype;

t.handleEvent=function(b)
{
if(b.target==this.M)switch(b.type)
{
case Hl:this.Me(b.vp);
break;
case Il:this.zi();
break;
case Jl:Nl(this);
break;
case Kl:this.ij()
}

}
;
t.Qt=function(b,c)
{
this.dc!=b&&(this.dc=b,this.yf.xi(this.dc,this.ni,v(this.eR,this),c),Nl(this))
}
;
t.tb=function()
{
return this.M.R()
}
;

a.Ol=function(b)
{
var c=b.Ic+b.bb.length-1;
b.Mc>=b.Ic&&b.Mc<c?b.Me(b.Mc+1):-1==b.Mc?b.Me(b.Ic):b.Mc==c&&(b.rC?b.Me(-1):b.EJ&&b.Me(b.Ic))
}
,a.Pl=function(b)
{
b.Mc>b.Ic?b.Me(b.Mc-1):b.rC&&b.Mc==b.Ic?b.Me(-1):b.EJ&&(-1==b.Mc||b.Mc==b.Ic)&&b.Me(b.Ic+b.bb.length-1)
}
;
t.Me=function(b)
{
this.Mc=b;
this.M.Me(b);
return-1!=Ql(this,b)
}
;

t.zi=function()
{
var b=Ql(this,this.Mc);
if(-1!=b)
{
var b=this.bb[b],c=this.Ff.Ai(b);
this.gJ?(this.dc=k,this.ij()):this.Hc();
c||(this.dispatchEvent(
{
type:"update",vp:b
}
),this.gJ&&this.Ff.update(j));
return j
}
this.Hc();
this.dispatchEvent(
{
type:"update",vp:k
}
);
return n
}
;
t.Hc=function()
{
this.Mc=-1;
this.dc=k;
this.Ic+=this.bb.length;
this.bb=[];
window.clearTimeout(this.Rd);
this.Rd=k;
this.M.Hc();
this.dispatchEvent("suggestionsupdate");
this.dispatchEvent(Kl)
}
;

t.ij=function()
{
this.Rd||(this.Rd=window.setTimeout(v(this.Hc,this),100))
}
;
t.pF=function()
{
return this.Rd?(window.clearTimeout(this.Rd),this.Rd=k,j):n
}
;
a.Nl=function(b)
{
b.pF()||window.setTimeout(v(b.pF,b),10)
}
;
t.p=function()
{
Ll.m.p.call(this);
delete this.CF;
this.M.F();
this.Ff.F();
this.yf=k
}
;
t.eR=function(b,c,d)
{
this.dc==b&&this.Cm(c,d)
}
;

t.Cm=function(b,c)
{
var d="object"==ja(c)&&c,e=(d?d.VZ():c)?Ql(this,this.Mc):-1;
this.Ic+=this.bb.length;
this.bb=b;
for(var g=[],h=0;
h<b.length;
++h)g.push(
{
id:this.Ic+h,data:b[h]
}
);
h=k;
this.Ub&&(h=this.CF[ua(this.Ub)]||this.Ub);
this.M.rL=h;
this.M.Cm(g,this.dc,this.Ub);
h=this.pn;
d&&d.QN()!==i&&(h=d.QN());
(h||0<=e)&&0!=g.length&&this.dc?this.Me(0<=e?this.Ic+e:this.Ic):this.Mc=-1;
this.dispatchEvent("suggestionsupdate")
}
;
a.Ql=function(b,c)
{
var d=c-b.Ic;
return 0>d||d>=b.bb.length?-1:d
}
;

t.dl=function(b)
{
var c=this.Ff;
c.dl.apply(c,arguments)
}
;
t.update=function(b)
{
this.Ff.update(b)
}
;
a.Tl=function(b)
{
var c;
a:
{
var d=0,e=0;
if(Rl(b))d=b.selectionStart,e=-1;
else if(A)
{
var g=Sl(b);
c=g[0];
g=g[1];
if(c.inRange(g))
{
c.setEndPoint("EndToStart",g);
if("textarea"==b.type)
{
g.duplicate();
d=b=c.text;
for(e=n;
!e;
)0==c.compareEndPoints("StartToEnd",c)?e=j:(c.moveEnd("character",-1),c.text==b?d+="\r\n":e=j);
c=[d.length,-1];
break a
}
d=c.text.length;
e=-1
}

}
c=[d,e]
}
return c[0]
}
,a.Sl=function(b)
{
var c=b.ownerDocument||b.document,d=c.selection.createRange();
"textarea"==b.type?(c=c.body.createTextRange(),
c.moveToElementText(b)):c=b.createTextRange();
return[c,d]
}
,a.Ul=function(b,c)
{
"textarea"==b.type&&(c=Ja(b.value.substring(0,c)).length);
return c
}
,a.Rl=function(b)
{
try
{
return"number"==typeof b.selectionStart
}
catch(c)
{
return n
}

}
;
a.Vl=function(b,c)
{
M.call(this);
b&&this.attach(b,c)
}
;
y(Vl,Hd);
t=Vl.prototype;
t.e=k;
t.Es=k;
t.ty=k;
t.Fs=k;
t.ge=-1;
t.mi=-1;
t.gv=n;

a.Wl=
{
3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45
}
,a.Xl=
{
Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45
}
,a.Yl=A||C&&Gb("525"),a.Zl=mb&&B;
t=Vl.prototype;

t.sf=function(b)
{
if(C&&(17==this.ge&&!b.ctrlKey||18==this.ge&&!b.altKey||mb&&91==this.ge&&!b.metaKey))this.mi=this.ge=-1;
-1==this.ge&&(b.ctrlKey&&17!=b.keyCode?this.ge=17:b.altKey&&18!=b.keyCode?this.ge=18:b.metaKey&&91!=b.keyCode&&(this.ge=91));
Yl&&!Vg(b.keyCode,this.ge,b.shiftKey,b.ctrlKey,b.altKey)?this.handleEvent(b):(this.mi=B?Wg(b.keyCode):b.keyCode,Zl&&(this.gv=b.altKey))
}
;
t.NO=function(b)
{
this.mi=this.ge=-1;
this.gv=b.altKey
}
;

t.handleEvent=function(b)
{
var c=b.Yb,d,e,g=c.altKey;
A&&"keypress"==b.type?(d=this.mi,e=13!=d&&27!=d?c.keyCode:0):C&&"keypress"==b.type?(d=this.mi,e=0<=c.charCode&&63232>c.charCode&&Ug(d)?c.charCode:0):tb?(d=this.mi,e=Ug(d)?c.keyCode:0):(d=c.keyCode||this.mi,e=c.charCode||0,Zl&&(g=this.gv),mb&&(63==e&&224==d)&&(d=191));
var h=d,l=c.keyIdentifier;
d?63232<=d&&d in Wl?h=Wl[d]:25==d&&b.shiftKey&&(h=9):l&&l in Xl&&(h=Xl[l]);
b=h==this.ge;
this.ge=h;
c=new $l(h,e,b,c);
c.altKey=g;
this.dispatchEvent(c)
}
;
t.h=q("e");

t.attach=function(b,c)
{
this.Fs&&this.detach();
this.e=b;
this.Es=N(this.e,"keypress",this,c);
this.ty=N(this.e,"keydown",this.sf,c,this);
this.Fs=N(this.e,"keyup",this.NO,c,this)
}
;
t.detach=function()
{
this.Es&&(Ad(this.Es),Ad(this.ty),Ad(this.Fs),this.Fs=this.ty=this.Es=k);
this.e=k;
this.mi=this.ge=-1
}
;
t.p=function()
{
Vl.m.p.call(this);
this.detach()
}
;
a.$l=function(b,c,d,e)
{
e&&this.v(e,i);
this.type="key";
this.keyCode=b;
this.charCode=c;
this.repeat=d
}
;
y($l,md);
a.am=function(b,c,d,e)
{
M.call(this);
e=e||150;
this.km=d!=k?d:j;
this.xp=b||",;
";
this.ZM=this.xp.substring(0,1);
b=this.km?"[\\s"+this.xp+"]+":"[\\s]+";
this.hJ=RegExp("^"+b+"|"+b+"$","g");
this.AU=RegExp("\\s*["+this.xp+"]$");
this.eG=c||"";
this.yT=this.km;
this.qa=0<e?new Jd(e):k;
this.hc=new me(this);
this.Su=new me(this);
this.pb=new Vl;
this.XF=-1
}
;
y(am,M);
a.bm=(ii||ji)&&!Gb("533.17.9");
t=am.prototype;
t.sW=j;
t.NN=j;
t.oJ=n;
t.CU=j;
t.BU=j;
t.Vu=k;
t.gb=k;
t.Oo="";
t.Pi=n;
t.dA=n;
t.mJ=j;
t.Or=q("gb");
t.W=function()
{
return this.gb.value
}
;

t.ta=function(b)
{
this.gb.value=b
}
;
t.Kq=function(b)
{
ra(b)&&1==b.nodeType&&Pc(b,"haspopup",j);
this.hc.c(b,"focus",this.Ke);
this.hc.c(b,"blur",this.Zc);
this.gb||(this.Su.c(b,"keydown",this.lS),ra(b)&&1==b.nodeType&&Lc(Tb(b))==b&&cm(this,b))
}
;
t.dl=function(b)
{
for(var c=0;
c<arguments.length;
c++)this.Kq(arguments[c])
}
;
t.Ai=function(b,c)
{
dm(this,b.toString(),c);
return n
}
;

a.dm=function(b,c,d)
{
if(la(d)?d:b.km)
{
var d=em(b,b.W(),Tl(b.gb)),e=fm(b,b.W());
b.AU.test(c)||(c=Na(c)+b.ZM);
b.sW&&(0!=d&&!Ha(e[d-1])&&(c=" "+c),d==e.length-1&&(c+=" "));
if(c!=e[d])
{
e[d]=c;
c=b.gb;
(B||A&&Gb("9"))&&c.blur();
c.value=e.join("");
for(var g=0,h=0;
h<=d;
h++)g+=e[h].length;
c.focus();
d=g;
e=b.gb;
c=d;
Rl(e)?e.selectionStart=c:A&&(g=Sl(e),h=g[0],h.inRange(g[1])&&(c=Ul(e,c),h.collapse(j),h.move("character",c),h.select()));
e=b.gb;
Rl(e)?e.selectionEnd=d:A&&(g=Sl(e),c=g[1],g[0].inRange(c)&&(d=Ul(e,d),
e=Ul(e,Tl(e)),c.collapse(j),c.moveEnd("character",d-e),c.select()))
}

}
else b.ta(c);
b.dA=j
}
;
t.p=function()
{
am.m.p.call(this);
this.Vu!=k&&window.clearTimeout(this.Vu);
this.hc.F();
delete this.hc;
this.Su.F();
this.pb.F()
}
;

t.Zb=function(b)
{
switch(b.keyCode)
{
case 40:if(this.ba.tb())return this.oJ?Pl(this.ba):Ol(this.ba),b.preventDefault(),j;
if(!this.km)return this.update(j),b.preventDefault(),j;
break;
case 38:if(this.ba.tb())return this.oJ?Ol(this.ba):Pl(this.ba),b.preventDefault(),j;
break;
case 9:if(this.ba.tb()&&!b.shiftKey)
{
if(this.update(),this.ba.zi()&&this.yT)return b.preventDefault(),j
}
else this.ba.Hc();
break;
case 13:if(this.ba.tb())
{
if(this.update(),this.ba.zi())return b.preventDefault(),b.stopPropagation(),j
}
else this.ba.Hc();

break;
case 27:if(this.ba.tb())return this.ba.Hc(),b.preventDefault(),b.stopPropagation(),j;
break;
case 229:if(!this.Pi)return this.Pi||(this.hc.c(this.gb,"keyup",this.dH),this.hc.c(this.gb,"keypress",this.cH),this.Pi=j),j;
break;
default:this.qa&&!this.mJ&&(this.qa.stop(),this.qa.start())
}
return gm(this,b)
}
;
a.gm=function(b,c)
{
var d=b.km&&c.charCode&&-1!=b.xp.indexOf(String.fromCharCode(c.charCode));
b.CU&&d&&b.update();
return b.BU&&d&&b.ba.zi()?(c.preventDefault(),j):n
}
;
t.Yr=s(n);

a.hm=function(b)
{
b.pb.attach(b.gb);
b.hc.c(b.pb,"key",b.gp);
b.hc.c(b.gb,"mousedown",b.eH);
A&&b.hc.c(b.gb,"keypress",b.bH)
}
;
t.Ke=function(b)
{
cm(this,b.target||k)
}
;
a.cm=function(b,c)
{
b.Su.Pc();
b.ba&&Nl(b.ba);
c!=b.gb&&(b.gb=c,b.qa&&(b.qa.start(),b.hc.c(b.qa,Kd,b.qm)),b.Oo=b.W(),hm(b))
}
;
t.Zc=function()
{
bm?this.Vu=window.setTimeout(v(this.FH,this),0):this.FH()
}
;

t.FH=function()
{
this.gb&&(this.hc.va(this.pb,"key",this.gp),this.pb.detach(),this.hc.va(this.gb,"keyup",this.Yr),this.hc.va(this.gb,"mousedown",this.eH),A&&this.hc.va(this.gb,"keypress",this.bH),this.Pi&&im(this),this.gb=k,this.qa&&(this.qa.stop(),this.hc.va(this.qa,Kd,this.qm)),this.ba&&this.ba.ij())
}
;
t.qm=function()
{
this.update()
}
;
t.lS=function(b)
{
this.Ke(b)
}
;
t.gp=function(b)
{
this.XF=b.keyCode;
this.ba&&this.Zb(b)
}
;
t.cH=function()
{
this.Pi&&229!=this.XF&&im(this)
}
;

t.dH=function(b)
{
this.Pi&&(13==b.keyCode||77==b.keyCode&&b.ctrlKey)&&im(this)
}
;
t.eH=function(b)
{
this.ba&&this.Le(b)
}
;
t.Le=ba();
a.im=function(b)
{
b.Pi&&(b.Pi=n,b.hc.va(b.gb,"keypress",b.cH),b.hc.va(b.gb,"keyup",b.dH))
}
;
t.bH=function(b)
{
gm(this,b)
}
;
t.update=function(b)
{
if(this.gb&&(b||this.W()!=this.Oo))
{
if(b||!this.dA)
{
var b=Tl(this.gb),c=this.W(),b=fm(this,c)[em(this,c,b)],b=this.hJ?String(b).replace(this.hJ,""):b;
this.ba&&(this.ba.Ub=this.gb,this.ba.Qt(b,this.W()))
}
this.Oo=this.W()
}
this.dA=n
}
;

a.em=function(b,c,d)
{
b=fm(b,c);
if(d==c.length)return b.length-1;
for(var e=c=0,g=0;
e<b.length&&g<=d;
e++)g+=b[e].length,c=e;
return c
}
,a.fm=function(b,c)
{
if(!b.km)return[c];
for(var d=String(c).split(""),e=[],g=[],h=0,l=n;
h<d.length;
h++)b.eG&&-1!=b.eG.indexOf(d[h])?(b.NN&&!l&&(e.push(g.join("")),g.length=0),g.push(d[h]),l=!l):!l&&-1!=b.xp.indexOf(d[h])?(g.push(d[h]),e.push(g.join("")),g.length=0):g.push(d[h]);
e.push(g.join(""));
return e
}
;
a.jm=function(b,c)
{
M.call(this);
this.fW=b;
this.zB=!c;
this.da=new xe
}
;
y(jm,M);
t=jm.prototype;
t.yG="GET";
t.uc=i;
t.GP=k;
t.zy=k;
t.rA=ca("yG");
t.Na=ca("uc");
t.yW=function(b,c,d)
{
var d=He(d.target),e=[];
if(d)try
{
e=Zc(d)
}
catch(g)
{

}
c(b,e)
}
;

t.xi=function(b,c,d)
{
var e,g=this.zB;
e=new vf(this.fW);
Yi(e);
e.Kd.set("token",b);
c=String(c);
Yi(e);
e.Kd.set("max_matches",c);
g=String(Number(g));
Yi(e);
e.Kd.set("use_similar",g);
if(e=e.toString())b=v(this.yW,this,b,d),this.da.Gb()&&this.da.abort(),this.zy&&Ad(this.zy),this.zy=xd(this.da,"success",b),this.da.send(e,this.yG,this.uc,this.GP)
}
;
t.p=function()
{
this.da.F();
jm.m.p.call(this)
}
;
a.mm=function(b,c,d,e,g,h,l,m,p)
{
var r=km(d),x=pg(b),F=fg(b);
F&&x.EF(new Qf(F.left,F.top,F.right-F.left,F.bottom-F.top));
var F=Ub(b),H=Ub(d);
if(F.wa()!=H.wa())
{
var G=F.wa().body,H=H.Sa(),Q=new Ob(0,0),X=cc(Tb(G)),ka=G;
do
{
var Ma=X==H?dg(ka):ig(ka);
Q.x+=Ma.x;
Q.y+=Ma.y
}
while(X&&X!=H&&(ka=X.frameElement)&&(X=X.parent));
G=Pb(Q,dg(G));
A&&!Mc(F)&&(G=Pb(G,Nc(F)));
x.left+=G.x;
x.top+=G.y
}
b=(c&4&&eg(b)?c^2:c)&-5;
x=new Ob(b&2?x.left+x.width:x.left,b&1?x.top+x.height:x.top);
x=Pb(x,r);
g&&(x.x+=(b&2?-1:1)*g.x,x.y+=
(b&1?-1:1)*g.y);
var Ea;
if(l)if(p)Ea=p;
else if(Ea=fg(d))Ea.top-=r.y,Ea.right-=r.x,Ea.bottom-=r.y,Ea.left-=r.x;
return lm(x,d,e,h,Ea,l,m)
}
,a.km=function(b)
{
var c;
if(b=b.offsetParent)
{
var d="HTML"==b.tagName||"BODY"==b.tagName;
if(!d||"static"!=Yf(b))c=dg(b),d||(d=(d=eg(b))&&B?-b.scrollLeft:d&&(!A||!Gb("8"))?b.scrollWidth-b.clientWidth-b.scrollLeft:b.scrollLeft,c=Pb(c,new Ob(d,b.scrollTop)))
}
return c||new Ob
}
,a.lm=function(b,c,d,e,g,h,l)
{
var b=b.clone(),m=0,p=(d&4&&eg(c)?d^2:d)&-5,d=og(c),l=l?l.clone():
d.clone();
if(e||0!=p)p&2?b.x-=l.width+(e?e.right:0):e&&(b.x+=e.left),p&1?b.y-=l.height+(e?e.bottom:0):e&&(b.y+=e.top);
if(h)
{
if(g)
{
m=b;
e=0;
if(65==(h&65)&&(m.x<g.left||m.x>=g.right))h&=-2;
if(132==(h&132)&&(m.y<g.top||m.y>=g.bottom))h&=-5;
m.x<g.left&&h&1&&(m.x=g.left,e|=1);
m.x<g.left&&(m.x+l.width>g.right&&h&16)&&(l.width=Math.max(l.width-(m.x+l.width-g.right),0),e|=4);
m.x+l.width>g.right&&h&1&&(m.x=Math.max(g.right-l.width,g.left),e|=1);
h&2&&(e|=(m.x<g.left?16:0)|(m.x+l.width>g.right?32:0));
m.y<g.top&&
h&4&&(m.y=g.top,e|=2);
m.y>=g.top&&(m.y+l.height>g.bottom&&h&32)&&(l.height=Math.max(l.height-(m.y+l.height-g.bottom),0),e|=8);
m.y+l.height>g.bottom&&h&4&&(m.y=Math.max(g.bottom-l.height,g.top),e|=2);
h&8&&(e|=(m.y<g.top?64:0)|(m.y+l.height>g.bottom?128:0));
m=e
}
else m=256;
if(m&496)return m
}
$f(c,b);
Rb(d,l)||(g=Mc(Ub(Tb(c))),A&&(!g||!Gb("8"))?(b=c.style,g?(g=xg(c),c=gg(c),b.pixelWidth=l.width-c.left-g.left-g.right-c.right,b.pixelHeight=l.height-c.top-g.top-g.bottom-c.bottom):(b.pixelWidth=l.width,b.pixelHeight=
l.height)):(c=c.style,B?c.MozBoxSizing="border-box":C?c.WebkitBoxSizing="border-box":c.boxSizing="border-box",c.width=Math.max(l.width,0)+"px",c.height=Math.max(l.height,0)+"px"));
return m
}
;
a.nm=function(b,c,d,e)
{
M.call(this);
this.Wa=b||document.body;
this.G=Ub(this.Wa);
this.sp=!b;
this.e=k;
this.dc="";
this.bb=[];
this.Ag=[];
this.NI=this.Fj=-1;
this.nb=n;
this.className="ac-renderer";
this.Ht="ac-row";
this.$F="active";
this.Uu="ac-active";
this.KP="ac-highlighted";
this.pl=c||k;
this.rJ=e!=k?e:j;
this.gs=n;
this.mU=!!d;
this.ku=n;
this.Vs=0
}
;
y(nm,Hd);
t=nm.prototype;
t.h=q("e");
t.Jf=ca("rJ");

t.Cm=function(b,c,d)
{
this.dc=c;
this.bb=b;
this.Fj=-1;
this.NI=za();
this.Ub=d;
this.Ag=[];
this.e||(this.e=b=this.G.o("div",
{
style:"display:none"
}
),D.add(b,this.className),Oc(b,Xc.SB),b.id=ih(hh.D()),this.G.appendChild(this.Wa,b),N(b,"click",this.Ur,n,this),N(b,"mousedown",this.yj,n,this),N(b,"mouseover",this.NE,n,this));
this.ku&&(this.e.style.visibility="hidden");
this.tW&&(this.e.style.minWidth=this.tW.clientWidth+"px");
this.Ag.length=0;
this.G.zt(this.e);
if(this.pl&&this.pl.Y)this.pl.Y(this,this.e,this.bb,
this.dc);
else
{
var e=k;
O.forEach(this.bb,function(b)
{
b=om(this,b,this.dc);
this.ku?this.e.insertBefore(b,e):this.G.appendChild(this.e,b);
e=b
}
,this)
}
0==this.bb.length?this.Hc():(this.show(),this.na(),tg(this.e,j))
}
;
t.Hc=function()
{
this.Ub&&Pc(this.Ub,"activedescendant","");
this.nb&&(this.nb=n,this.Ub&&Pc(this.Ub,Wc.Vk,n),0<this.Vs?(Vc(this.Zk),this.Zk=new vj(this.e,this.Vs),this.Zk.play()):R(this.e,n))
}
;

t.show=function()
{
this.nb||(this.nb=j,this.Ub&&(Oc(this.Ub,Xc.UJ),Pc(this.Ub,Wc.QJ,"list"),Pc(this.Ub,Wc.Vk,j)),0<this.Vs?(Vc(this.Zk),this.Zk=new wj(this.e,this.Vs),this.Zk.play()):R(this.e,j))
}
;
t.R=q("nb");
a.pm=function(b,c)
{
var d=0<=c&&c<b.Ag.length?b.Ag[c]:i;
b.dispatchEvent(
{
type:"rowhilite",V_:d
}
)&&(0<=b.Fj&&D.remove(b.Ag[b.Fj],b.Uu,b.$F),b.Fj=c,d&&(D.add(d,b.Uu,b.$F),b.Ub&&Pc(b.Ub,"activedescendant",d?d.id:""),hg(d,b.e)))
}
;

t.Me=function(b)
{
if(-1==b)pm(this,-1);
else for(var c=0;
c<this.bb.length;
c++)if(this.bb[c].id==b)
{
pm(this,c);
break
}

}
;
t.na=function()
{
if(this.Ub&&this.sp)
{
var b;
b=this.mU?3:1;
this.ku&&(b^=1);
mm(this.rL||this.Ub,b,this.e,b^1,k,k,65);
this.ku&&(this.e.style.visibility="visible")
}

}
;
t.p=function()
{
this.e&&(yd(this.e,"click",this.Ur,n,this),yd(this.e,"mousedown",this.yj,n,this),yd(this.e,"mouseover",this.NE,n,this),this.G.removeNode(this.e),this.e=k,this.nb=n);
Vc(this.Zk);
this.Wa=k;
nm.m.p.call(this)
}
;

t.XH=function(b,c,d)
{
d.innerHTML=Ua(b.data.toString())
}
;

a.qm=function(b,c,d)
{
if(3==c.nodeType)
{
var e=k;
ma(d)&&(1<d.length&&!b.gs)&&(e=z.slice(d,1));
var g="";
d&&(ma(d)&&(d=z.filter(d,function(b)
{
return!Ha(b==k?"":String(b))
}
)),b.gs?ma(d)?g=z.map(d,$a).join("|"):(g=d.replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,""),g=$a(g),g=g.replace(/ /g,"|")):ma(d)?g=0<d.length?$a(d[0]):"":/^\W/.test(d)||(g=$a(d)));
d=g;
if(0!=d.length)
{
for(var g=c.nodeValue,h=RegExp("([\\s\\S]*?)\\b("+d+")","gi"),d=[],l=0,m=h.exec(g),p=0;
m;
)p++,d.push(m[1]),d.push(m[2]),l=h.lastIndex,
m=h.exec(g);
d.push(g.substring(l));
if(1<d.length)
{
e=!b.gs?1:p;
for(g=0;
g<e;
g++)h=2*g,c.nodeValue=d[h],l=b.G.createElement("b"),l.className=b.KP,b.G.appendChild(l,b.G.createTextNode(d[h+1])),l=c.parentNode.insertBefore(l,c.nextSibling),c.parentNode.insertBefore(b.G.createTextNode(""),l.nextSibling),c=l.nextSibling;
b=z.slice(d,2*e);
c.nodeValue=b.join("")
}
else e&&qm(b,c,e)
}

}
else for(c=c.firstChild;
c;
)e=c.nextSibling,qm(b,c,d),c=e
}
,a.om=function(b,c,d)
{
var e=b.G.o("div",
{
className:b.Ht,id:ih(hh.D())
}
);

Oc(e,Xc.WB);
b.pl&&b.pl.cd?b.pl.cd(c,d,e):b.XH(c,d,e);
d&&b.rJ&&qm(b,e,d);
D.add(e,b.Ht);
b.Ag.push(e);
return e
}
,a.rm=function(b,c)
{
for(;
c&&c!=b.e&&!D.has(c,b.Ht);
)c=c.parentNode;
return c?z.indexOf(b.Ag,c):-1
}
;
t.Ur=function(b)
{
var c=rm(this,b.target);
0<=c&&this.dispatchEvent(
{
type:Il,vp:this.bb[c].id
}
);
b.stopPropagation()
}
;
t.yj=function(b)
{
b.stopPropagation();
b.preventDefault()
}
;
t.NE=function(b)
{
b=rm(this,b.target);
0<=b&&!(300>za()-this.NI)&&this.dispatchEvent(
{
type:Hl,vp:this.bb[b].id
}
)
}
;
a.sm=function()
{

}
;

sm.prototype.Y=ba();
sm.prototype.cd=ba();
a.tm=function(b,c,d,e)
{
this.yf=b=new jm(b,!e);
e=new nm;
d=new am(k,k,!!d,300);
Ll.call(this,b,e,d);
d.ba=this;
d.dl(c)
}
;
y(tm,Ll);
tm.prototype.Jf=function(b)
{
this.M.Jf(b)
}
;
tm.prototype.rA=function(b)
{
this.yf.rA(b)
}
;
tm.prototype.Na=function(b)
{
this.yf.Na(b)
}
;
a.um=function(b)
{
T.call(this);
this.jT=b
}
;
y(um,T);
t=um.prototype;
t.Z=function(b)
{
um.m.Z.call(this,b);
this.ve=$("input",b);
this.xd=$(".zm-profile-details-items",this.e);
this.yq=[];
var c=this;
c.yq=this.ve.map(function()
{
var b=new vm("/topic/autocomplete",this,c.jT||$(this).parents(".topic-input-wrap")[0]);
b.pn=n;
var e=v(c.filter,c);
b.filter=e;
return b
}
);
this.Em()
}
;

t.z=function()
{
this.g().c(J("add",this.e),"click",this.add);
var b=this;
this.ve.each(function()
{
b.g().c(this,"keydown",function(b)
{
this.keydown(b)
}
)
}
);
z.forEach(this.yq,function(c)
{
b.g().c(c.M,Il,b.select)
}
);
this.xd.on("click","[name='del']",$.proxy(this.remove,this));
this.Em()
}
;
t.Em=function()
{
if(!Dg.Nc)
{
var b=this;
this.ag&&this.ag.F();
var c=new vl;
c.zr="profile-edit-item-moving";
wl(c,this.xd[0],0);
c.v();
this.ag=c;
$('a, input, [role="button"]',this.xd).each(function()
{
b.g().c(this,"mousedown",function(b)
{
b.stopPropagation()
}
)
}
)
}

}
;

t.keydown=function(b)
{
13===b.keyCode&&setTimeout(v(function()
{
wm(this)&&this.add();
this.ve[0].value&&(this.ve[1]&&!this.ve[1].value)&&this.ve[1].focus()
}
,this));
return j
}
;
a.wm=function(b)
{
return z.every(b.ve,function(b)
{
return!!b.value
}
)
}
,a.xm=function(b)
{
z.forEach(b.ve,function(b)
{
b.value=""
}
);
b.ve[0].focus()
}
;
t.select=function()
{
wm(this)&&this.add()
}
;

t.add=function()
{
var b=La(this.ve[0].value);
b&&(b=
{
title:b,member_url_token:Hg["1"]
}
,this.ve[1]&&(b.sub_title=this.ve[1].value||""),Gj("ProfileEditItemV2",b,this.GR,this))
}
;
t.GR=function(b)
{
var b=$(b),c;
if(b.data("title"))
{
if(c=this.xd.find("[data-title='"+b.data("title")+"']")[0])
{
ok(c);
xm(this);
return
}

}
else if(b.data("sub-title")&&(c=this.xd.find("[data-sub-title='"+b.data("sub-title")+"']")[0]))
{
ok(c);
xm(this);
return
}
this.xd.append(b);
this.Em();
xm(this);
this.dispatchEvent("add")
}
;

t.remove=function(b)
{
$(b.target).parents("li").remove();
this.dispatchEvent("remove")
}
;
um.prototype.filter=function(b)
{
return z.filter(b,function(b)
{
return!this.xd.find("[data-title='"+b+"']")[0]
}
,this)
}
;
a.vm=function(b,c,d,e,g)
{
this.yf=b=new jm(b,!g);
d=new nm(d);
e=new am(k,k,!!e,300);
Ll.call(this,b,d,e);
e.ba=this;
e.dl(c);
(e=c.getAttribute("placeholder"))&&new ql(c,e)
}
;
y(vm,tm);

vm.prototype.Cm=function(b,c)
{
b=b[0].slice(1);
b=z.filter(b,function(b)
{
return 3<b.length
}
);
b=z.map(b,function(b)
{
return b[1]
}
);
this.filter&&(b=this.filter(b));
vm.m.Cm.call(this,b,c)
}
;
a.ym=function(b)
{
T.call(this);
$.extend(this.options=
{

}
,this.Q,b||
{

}
);
this.MG=(new vf(location.href)).Kc().get("next")
}
;
y(ym,T);
t=ym.prototype;
t.Q=
{
lw:function(b,c)
{
zm(this,b).toggle(c);
Am(this);
Bm(this,b)
}

}
;
t.ng=n;
t.Hu=
{
signup:["signcontrol","signup","sina"],signin:["signcontrol","signin","sina"]
}
;
a.Cm=function(b)
{
b.ew();
b.MG?location.href=b.MG:b.ng?location.href="/":location.reload()
}
;
t.z=function()
{
ym.m.z.call(this);
this.K.show();
this.eb("登录或注册");
this.Ei(500);
Am(this)
}
;

t.Z=function(b)
{
ym.m.Z.call(this,b);
this.K=$(b);
ub&&!ji?this.K.addClass("mobile"):this.K.addClass("dialog");
this.ng&&(this.K=$(document.body));
var b=this.ng?k:function(b,c)
{
var d=c.parent();
c.is("[type=checkbox]")||c.is("[type=radio]")?b.insertAfter(d):d.hasClass("zg-form-text-input-group")||d.hasClass("zg-form-text-input-group-horizontal")?d.append(b):b.insertAfter(c)
}
,c=
{
confirm_password:
{
equalTo:"密码不一致",minlength:$.validator.format("密码长度不应小于 
{
0
}
 位"),maxlength:$.validator.format("密码长度不应大于 
{
0
}
 位")
}
,
password:
{
minlength:$.validator.format("密码长度不应小于 
{
0
}
 位"),maxlength:$.validator.format("密码长度不应大于 
{
0
}
 位"),required:"密码未填写"
}
,last_name:
{
required:"姓氏未填写"
}
,first_name:
{
required:"名字未填写"
}
,email:
{
required:"邮箱未填写"
}

}
,b=
{
submitHandler:this.cS,errorPlacement:b,messages:c,onfocusout:$.noop,highlight:function(b,c,d)
{
"radio"===b.type?this.jE(b.name).addClass("error").removeClass(d):$(b).addClass("error").removeClass(d)
}
,errorClass:"validate-error"
}
;
this.ng&&(b=$.extend(
{

}
,b,
{
errorContainer:"#summary",errorLabelContainer:"#summary ul",
wrapper:"li",showErrors:function(b,c)
{
if(0<c.length)
{
var d=[];
d.push("<ul>");
$.each(c,function(b,c)
{
d.push('<li><i class="icon-sign icon-sign-error"></i>'+c.message+"</li>")
}
);
d.push("</ul>");
$("#summary").html(d.join("")).show()
}
else $("#summary").hide().html("")
}

}
));
this.St=b;
(b=Nf.get("r_e"))?(this.Dr=(c=b.match(/\"(.+)\"/))?c[1]:b,this.sl="signup"):this.sl=this.sl||"signup";
Dm(this,this.Hu[this.sl]);
var d=this;
this.K.on("click",".js-signup",$.proxy(this.JA,this));
this.K.on("click",".js-signin",
$.proxy(this.EI,this));
this.K.on("click",".js-bindsignin",function(b)
{
Y.U(
{
type:"ga_click_sign_in_link_account",target:b.target
}
);
Dm(d,["bindsignin"]);
d.cg()
}
);
this.K.on("click",".js-bindweibo",function()
{
Y.U(
{
type:"ga_click_sign_in_weibo",label:"sign_in_box_weibo"
}
);
window.open("/oauth/auth/sina?next="+Em(),"_blank","top=200,left=400,width=600,height=380,directories=no,menubar=no,toolbar=no");
return n
}
).on("click",".js-weiboname",function()
{
Y.U(
{
type:"ga_click_sign_in_connect",label:"sign_in_connect_weibo"
}
);

window.open("/oauth/auth/sina?next="+Em(),"_blank","top=200,left=400,width=600,height=380,directories=no,menubar=no,toolbar=no");
return n
}
).on("click",".js-bindqq",function()
{
Y.U(
{
type:"ga_click_sign_in_qq",label:"sign_in_box_qq"
}
);
window.open("/oauth/auth/qqconn?next="+Em(),"_blank","top=200,left=400,width=600,height=380,directories=no,menubar=no,toolbar=no");
return n
}
).on("click",".js-qqname",function()
{
Y.U(
{
type:"ga_click_sign_in_connect",label:"sign_in_connect_weibo"
}
);
window.open("/oauth/auth/qqconn?next="+
Em(),"_blank","top=200,left=400,width=600,height=380,directories=no,menubar=no,toolbar=no");
return n
}
);
this.Fu=$(".view-signcontrol",this.e);
this.Fu.find('[type="radio"]').on("change",$.proxy(function(b)
{
b=$(b.target).val();
Fm(this,"signin","signin"===b);
Fm(this,"signup","signup"===b);
Y.U(
{
type:"ga_click_sign_in_switch",data:b
}
)
}
,this)).filter("[value="+this.sl+"]").prop("checked",j);
this.n0=(this.sq=$(".view-signin",this.e)).find("form").validate($.extend(
{

}
,this.St,
{
Hs:$.proxy(this.jH,this)
}
));

var e=this;
e.o0=(e.Ig=$(".view-signup",e.e)).find("form").validate($.extend(
{

}
,e.St,
{
Hs:$.proxy(e.FS,e)
}
));
e.Dr&&(e.JA(),e.Ig.find("[name=email]").val(e.Dr));
e.Ig.find('input[name="accept_terms"]').on("change",function()
{
e.Ig.find("[type=submit]").prop("disabled",!$(this).prop("checked")).toggleClass("disabled",!$(this).prop("checked"))
}
);
if(!A||!Gb("8"))e.Ig.on("change","input, textarea, select",function()
{
e.vw()
}
);
this.g().c(Y,["accountcallback","sina_callback","qqconn_callback"],$.proxy(this.SG,
this));
this.JJ=$(".view-bindtip",this.e);
var g=this;
g.m0=(g.wd=$(".view-info",g.e)).find("form").validate($.extend(
{

}
,g.St,
{
Hs:$.proxy(g.fS,g)
}
));
g.wd.on("change",'input[name="iamstudent"]',function()
{
$(this).prop("checked")?(g.wd.find(".js-workerinfo").hide(),g.wd.find(".js-studentinfo").show(),Am(g),Gm(g)):(g.wd.find(".js-workerinfo").show(),g.wd.find(".js-studentinfo").hide())
}
).on("change",'input[name="gender"]',function()
{
var b=$(".js-avatar",g.K),c=b.attr("src");
if("http://p2.zhimg.com/c0/e3/c0e310228_xl.jpg"===
c||"http://p2.zhimg.com/54/5a/545a51608_xl.jpg"===c)"0"===$(this).val()?b.attr("src","http://p2.zhimg.com/54/5a/545a51608_xl.jpg"):b.attr("src","http://p2.zhimg.com/c0/e3/c0e310228_xl.jpg")
}
);
Gm(g);
var h=this;
(h.kq=$(".view-bindsignin",h.e)).find("form").validate($.extend(
{

}
,h.St,
{
Hs:$.proxy(h.MR,h)
}
));
h.kq.on("click",".js-backto-info",function(b)
{
Y.U(
{
type:"ga_click_sign_in_link_account",target:b.target
}
);
Dm(h,["bindtip","info"]);
return n
}
);
ub&&h.kq.find("input[type=submit]").val("登录");
var l=this;

l.EW=$(".view-warmup",l.e).on("click",".js-gotoinfo",function()
{
l.EP=j;
Ak("/signup/form");
Dm(l,["info"]);
l.ng&&(Dm(l,["info","bindtip"]),l.JJ.find("span").hide());
l.cg();
return n
}
);
var m=this;
m.oq=$(".view-followtopic",m.e).on("click",".js-gotofollowpeople",function()
{
Y.U(
{
type:"ga_click_follow_topic",data:m.RV||0
}
);
$.get("/register/recommendations").done(function(b)
{
m.bn.find("ul").html(Bk(m.nT,
{
each:z.forEach,persons:b.msg
}
));
m.bn.find("a.box.followed").length&&m.bn.find(".friendsfollowed").show()
}
);

Dm(m,["followpeople"]);
m.bn.find("ul").html($("<div>").text("加载中…").css("margin-top","150px").css("text-align","center"));
Ak("/signup/suggested_users");
return n
}
).on("click","a.box",m.qE);
$(document).on("followchange",function()
{
var b=m.oq.find("a.box.followed").length;
m.oq.find(".js-gotofollowpeople").text(0<b?"下一步":"跳过");
m.RV=b;
m.mT=m.bn.find("a.box.followed").length
}
);
var p=this;
p.bn=$(".view-followpeople",p.e).on("click",".js-gotofollowtopoic",function()
{
Y.U(
{
type:"ga_click_sign_in_previous_step"
}
);

Hm(p)
}
).on("click",".js-startuse",function()
{
Y.U(
{
type:"ga_click_follow_people",data:p.mT||0
}
);
Ak("/signup/succeed");
Cm(p)
}
).on("click","a.box",p.qE);
this.cg();
var r=this;
A&&Gb("8")&&$(function()
{
$("input",r.e).keydown(function(b)
{
if(13===b.keyCode)return $(this).parents("form").submit(),n
}
)
}
)
}
;
t.vw=function()
{
$(window).on("beforeunload.SignFlow",v(s("注册还未完成，确认离开该页面吗？"),this))
}
;
t.ew=function()
{
$(window).off("beforeunload.SignFlow")
}
;

a.Am=function(b)
{
rl||setTimeout(function()
{
$("input[placeholder]:visible",b.e).placeholder()
}
,10)
}
,a.Em=function()
{
return S.Ha()?"/oauth/callback":"/oauth/account_callback"
}
;

t.SG=function(b)
{
b=b.mb;
if(1===b.login)return Ak("/signin/connect/weibo"),Cm(this),n;
this.EP?Dm(this,["info","bindtip"]):(Dm(this,["warmup","bindtip"]),this.K.find(".js-weibo-bind-name-transfer").insertAfter(".main-info>div:first-child"));
"qqconn"===b.type?(this.wd.find(".js-qqname").text(b.name).removeClass("zg-btn-blue js-qqname").addClass("binded"),this.K.find(".js-avatar").attr("src",b.img)):"sina"===b.type&&(0===$("#follow-official-weibo").length&&this.K.find(".sns-wrap").append('<div id="follow-official-weibo" style="margin-top:15px;
"><label><input name="followzhihu" type="checkbox" checked> 关注 <a target="_blank" href="http://e.weibo.com/zhihu">@知乎</a> 官方微博</label></div>'),
this.wd.find(".js-weiboname").text(b.name).removeClass("zg-btn-red js-weiboname").addClass("binded"),this.K.find(".js-avatar").attr("src",b.img));
this.wd.find(".zm-entry-head-avatar-edit-button").remove()
}
;
a.Gm=function(b)
{
ub||b.wd.find("input[aria-haspopup]").each(function()
{
var b=$(this).data();
b.FP||(new vm("/topic/autocomplete",this,$(this).parent()[0]),b.FP=j)
}
)
}
;

t.JA=function()
{
this.ng&&(location.hash="signup");
this.Fu.find("input[type=radio][value=signup]").prop("checked",j);
Dm(this,this.Hu.signup);
this.Ig.find("[name=email]").val(this.sq.find("[name=email]").val());
Am(this);
this.cg();
return n
}
;
t.EI=function()
{
this.ng&&(location.hash="signin");
this.Fu.find("input[type=radio][value=signin]").prop("checked",j);
Dm(this,this.Hu.signin);
this.sq.find("[name=email]").val(this.Ig.find("[name=email]").val());
this.cg();
return n
}
;
a.Im=
{
people:Cj,topic:Fj
}
;
t=ym.prototype;

t.qE=function()
{
var b=$(this),c=b.data();
c.disabled||(c.disabled=j,Im[c.type](c.id,!b.hasClass("followed")).done(function()
{
var c=b.hasClass("followed")?"关注":"已关注";
b.toggleClass("followed");
$(document).trigger("followchange");
b.find(".follow-tip span").text(c)
}
).always(function()
{
c.disabled=n
}
))
}
;
t.ez=n;

t.cS=function(b)
{
function c()
{
d.disabled=n
}
var d=$(b).data();
if(!d.disabled)
{
d.disabled=j;
var e=this;
var g=$(b);
if(g.data("nosubmit")===j)b=$.Deferred().resolve().promise();
else
{
var h=$(b).serializeArray();
(g=g.data("otherform"))&&$.each($(g).serializeArray(),function(b,c)
{
z.some(h,function(b)
{
return b.name===c.name
}
)||h.push(c)
}
);
b=$.post(b.action,$.param(h))
}
b.done(e.settings.Hs).done(function(b)
{
b&&b.r&&($.isPlainObject(b.msg)?e.showErrors(b.msg):"string"===$.type(b.msg)&&U(b.msg))
}
).always(c)
}

}
;

t.jH=function(b)
{
b&&!b.r?(Ak("/signin"),Cm(this)):b.msg&&this.cg()
}
;
t.MR=function(b)
{
Y.U(
{
type:"ga_click_sign_in_link_account",label:"sign_in_box_sign_in_link_account"
}
);
this.jH(b)
}
;

t.cg=function()
{
var b=$(".js-captcha");
"1"===Nf.get("l_c")||"1"===Nf.get("r_c")?("1"===Nf.get("r_c")&&(this.wd.find("input[name=email]").is(":visible")?b.appendTo(this.wd.find(".main-info")).show():this.Ig.is(":visible")&&b.insertBefore(this.Ig.find(".captcha-holder")).show()),"1"===Nf.get("l_c")&&(this.kq.is(":visible")?b.appendTo(this.kq.find(".formbar")).show():this.sq.is(":visible")&&b.insertBefore(this.sq.find(".captcha-holder")).show()),this.cg.aM||$(".js-refresh-captcha",this.K).click($.proxy(this.SH,
this)),this.cg.aM=j,b.find('input[name="checkcode"]').prop("disabled",n),this.SH()):(b.hide(),b.find('input[name="checkcode"]').prop("disabled",j))
}
;
t.SH=function()
{
$(".js-captcha-img",this.K).attr("src","/checkcode.jpg?r="+za())
}
;

t.FS=function(b)
{
if(b&&!b.r)
{
S[3]="1";
var c=this,b=new nl("people");
b.n(this.wd.find(".avatar-info").get(0));
b.on("uploadSuccess",function(b)
{
Y.U(
{
type:"ga_click_sign_in_avatar"
}
);
(b=b.data.match(/\/(\w+)_\w.\w+$/))&&c.wd.find('input[name="avatar_path"]').val(b[1])
}
,n,this);
Dm(this,["warmup"]);
this.wd.find("input[name=email]").val(this.Ig.find("input[name=email]").val()).parent().hide();
Ak("/signup/splash");
this.ez=j
}
else this.cg()
}
;
t.fS=function(b)
{
b&&!b.r?(Hm(this),this.ez=j):this.cg()
}
;

a.Hm=function(b)
{
$.get("/register/interests").done(function(c)
{
b.oq.find("ul").html(Bk(b.SV,
{
each:z.forEach,topics:c.msg
}
))
}
);
Dm(b,["followtopic"]);
$(document).trigger("followchange");
b.oq.find("ul").html($("<div>").text("加载中…").css("margin-top","150px").css("text-align","center"));
Ak("/signup/suggested_topics")
}
;
t.eb=function(b)
{
var c=this.getParent();
c&&c.eb&&(c.eb(b),$(yh(c)).removeClass("title-rich"))
}
;
t.Ot=function(b)
{
var c=this.getParent();
c&&c.Ot&&c.Ot(b)
}
;

t.Ei=function(b)
{
var c=this.getParent(),d;
if(c&&c.h&&(d=c.h(),!ub||ji))$(d).width(b),c.na()
}
;

a.Dm=function(b,c)
{
function d(b)
{
return z.contains(c,b)
}
if(b.ng)
{
$("#summary").hide();
d("signin")?($(".hideinlogin").hide(),$(".hideinreg").css("display","inline-block")):($(".hideinlogin").css("display","inline-block"),$(".hideinreg").hide());
if(d("warmup")||d("info"))b.K.addClass("regflow"),$(".hideinlogin").hide();
(d("signin")||d("signup"))&&b.K.removeClass("regflow");
if(d("info"))$("#summary").prependTo($(".main-info"));
else if(d("bindsignin"))$("#summary").insertAfter($(".formbar"));
else
{
var e=
zm(b,d("signin")?"signin":"signup");
$("#summary").insertBefore(e.find(".command"))
}
(d("followtopic")||d("followpeople"))&&$(".hideinlogin").hide()
}
b.qF=d("signin")||d("signup")?j:n;
if(d("warmup")||d("info"))b.Ot(n),e=b.getParent(),$(e&&e.h?e.h():document.body).addClass("bg-signup"),b.eb("注册知乎"),b.Ei(550),Am(b);
d("bindsignin")&&b.eb("登录并绑定微博");
if(d("followtopic")&&(b.eb("关注话题"),b.Ei(825),b.ng&&(!ub||ji)))$("#js-form-wrapper").width(825).css("margin","0 0 0 -412px").css("top","150px").css("height",
"auto"),$(".footer").css("bottom","-100px"),$(".view-followtopic").width(825),$(".view-followpeople").width(825);
d("followpeople")&&b.eb("关注用户");
$("div.view",b.e).hide();
$.each(c,function(c,d)
{
Fm(b,d)
}
);
b.RM=c
}
,a.zm=function(b,c)
{
return $(".view-"+c,b.e)
}
,a.Fm=function(b,c,d)
{
d="undefined"===$.type(d)?j:!!d;
b.options.lw.call(b,c,d);
d&&(b.RM=[c])
}
,a.Bm=function(b,c)
{
var d=zm(b,c).find("input:text,input[type=email]").filter(":visible").get(0);
setTimeout(function()
{
d&&d.focus()
}
)
}
;
t.SV='<% each(topics, function(topic, i) 
{
 %> <li><a class="box <%= topic.is_following ? "followed" : "" %> " href="javascript:;
" data-type="topic" data-id="<%=topic.topic_id%>" ><img src="<%=topic.topic_avatar%>" alt="<%-topic.topic_name%>" /><div><strong class="topicname"><%=topic.topic_name%></strong><div class="extra-info"><strong><%=topic.topic_follower_num%></strong> 人关注<br><strong><%=topic.topic_answer_num%></strong> 个精彩回答</div><div class="follow-tip"><i class="icon-green-check"></i><span><%= topic.is_following ? "已关注" : "关注" %></span></div></div></a></li><% 
}
) %>';

t.nT='<% each(persons, function(person, i) 
{
 %> <li><a class="box <%= person.is_following ? "followed" : "" %>" href="javascript:;
" data-type="people" data-id="<%=person.member_id %>"><img src="<%=person.member_avatar %>" alt="<%-person.member_fullname %>" /><div><strong class="peoplename"><%=person.member_fullname %></strong><div class="extra-info"><%=person.description %></div><div class="follow-tip"><i class="icon-green-check"></i><span><%= person.is_following ? "已关注" : "关注" %></span></div></div></a></li><% 
}
) %>';
a.vk=function()
{
wh.call(this,i,i,i)
}
;
y(vk,yi);
ia(vk);
t=vk.prototype;
t.Y=function()
{
S.Ha()||vk.m.Y.call(this)
}
;
t.KA=j;
t.EV=Bk('    <span class="sign-icon sign-icon-<%- icon %>"></span>    <div class="title"><%= title %></div>    <div class="sub-title"><%= subTitle %></div>  ');
t.Sc=function(b,c,d)
{
var e=$;
xh(this);
var e=e(this.Pf),g=$(yh(this));
b?(e.html(this.EV(
{
icon:b,title:c,subTitle:d
}
)),g.addClass("title-rich")):(e.text("登录或注册"),g.removeClass("title-rich"))
}
;

a.Jm=function(b,c)
{
b.KA=c;
if(b.$h)if(b.KA)
{
var d=b.$h;
d.qF&&d.JA()
}
else d=b.$h,d.qF&&d.EI()
}
,a.Km=function(b)
{
b.g().c(Y,"accountcallback",function(c)
{
if(1===c.mb.login)return location.reload(),n;
b.w(j);
b.$h&&b.$h.SG(c)
}
)
}
;

t.z=function()
{
vk.m.z.call(this);
$(this.h()).addClass("sign-dialog");
this.g().c(this,"aftershow",function()
{
var b=this.KA?"signup":"signin";
if(this.$h)Bm(this.$h,b);
else
{
var c=I("js-sign-flow");
this.aa().appendChild(c);
var d=this.$h=new ym;
this.H(d);
d.sl=b;
d.n(c);
this.na()
}

}
).c(this,"afterhide",function()
{
Y.U(
{
type:"ga_click_sign_in_close"
}
);
this.$h.ez&&location.reload()
}
).c(this,"beforeshow",function()
{
Y.U(
{
type:"ga_click_sign_in",data:
{
label:this.Ga
}

}
)
}
)
}
;

$(function()
{
$("#js-reg-with-mail-in-top").click(function()
{
var b=vk.D();
b.Ga="header_sign_up";
b.Sc();
Jm(b,j);
b.w(j)
}
);
$("#js-reg-with-sina-in-top").click(function()
{
var b=vk.D();
Y.U(
{
type:"ga_click_sign_in_weibo",label:"header_sign_up"
}
);
b.Sc();
Jm(b,j);
Km(b)
}
);
$("#js-reg-with-qq-in-top").click(function()
{
var b=vk.D();
Y.U(
{
type:"ga_click_sign_in_qq",label:"header_sign_up"
}
);
b.Sc();
Jm(b,j);
Km(b)
}
)
}
);
Ki.on("init",function()
{
$("#js-open-in-app").on("click",function()
{
var b=$('meta[name="apple-itunes-app"]').attr("content");
if(b)
{
var b=(new Si(b.replace(/,\s*/,"&"))).get("app-argument")||"",c=n;
-1===b.indexOf("zhihu://")&&(b="zhihu://"+b);
window.location=b;
window.setTimeout(function()
{
c=j;
window.location="http://itunes.apple.com/cn/app/id432274380"
}
,250);
window.setTimeout(function()
{
c&&window.location.reload()
}
,500);
W("app-promotion","click_zhihu_ios_open_dl_link","header_not_logged_in")
}

}
)
}
);

Ki.on("init",function()
{
$(document.body).on("click.follow","[data-follow]",function()
{
if(this.name)return yk("末清除的 name 属性:",this);
var b=this.getAttribute("data-follow");
(b=b&&Ik[b])&&b.call(this)
}
)
}
);
Ki.on("postinit",function()
{
window.FastClick&&FastClick.attach(document.body)
}
);

Ki.on("postinit",function()
{
if(S.Ha())if(window.MozWebSocket||window.WebSocket&&!("__addTask"in window.WebSocket))io.connect("http://"+Dg.dr).on("live",function(b)
{
Uk(Y,JSON.parse(b.replace(/^\+;
/,"")))
}
);
else
{
var b=new Xk(
{
url:Ag,data:
{
loc:location.href,channel:za()+cb()
}
,dataType:"polling",converters:
{
"text polling":function(b)
{
return JSON.parse(b.replace(/^\+;
/,""))
}

}

}
);
b.addEventListener("message",function(b)
{
Uk(Y,b.data)
}
);
b.Jz()
}

}
);

Ki.on("init",function()
{
new $k;
hl.prototype.Q.offsetTop=-60;
var b=$('div[data-widget="navigable"], ul[data-widget="navigable"]');
if(1===b.length)
{
var c=b.data("navigable-options"),c=new hl(c);
c.n(b.get(0));
var d=$("#zh-load-more");
c.on("action",function(b)
{
b.data.index>=b.data.size&&d.is(":visible")&&d[0].click()
}
)
}

}
);
Ki.on("postinit",function()
{
kl.on("requestLogin",function()
{
if(!S.Ha())return vk.D().w(j),n
}
)
}
);
a.Lm=function()
{
jj.call(this);
this.queue=[]
}
;
y(Lm,jj);
Lm.prototype.add=function(b)
{
z.contains(this.queue,b)||(this.queue.push(b),N(b,"finish",this.TG,n,this))
}
;
Lm.prototype.remove=function(b)
{
z.remove(this.queue,b)&&yd(b,"finish",this.TG,n,this)
}
;
Lm.prototype.p=function()
{
z.forEach(this.queue,function(b)
{
b.F()
}
);
this.queue.length=0;
Lm.m.p.call(this)
}
;
a.Mm=function()
{
Lm.call(this);
this.Lw=0
}
;
y(Mm,Lm);

Mm.prototype.play=function(b)
{
if(0==this.queue.length)return n;
if(b||this.ca==ij)this.Lw=0,this.qi();
else if(1==this.ca)return n;
this.Sd("play");
-1==this.ca&&this.Sd("resume");
var c=-1==this.ca&&!b;
this.startTime=za();
this.Wn=k;
this.ca=1;
z.forEach(this.queue,function(d)
{
(!c||-1==d.ca)&&d.play(b)
}
);
return j
}
;
Mm.prototype.stop=function(b)
{
z.forEach(this.queue,function(c)
{
c.ca==ij||c.stop(b)
}
);
this.ca=ij;
this.Wn=za();
this.Sd("stop");
this.ri()
}
;

Mm.prototype.TG=function()
{
this.Lw++;
this.Lw==this.queue.length&&(this.Wn=za(),this.ca=ij,this.Sd("finish"),this.ri())
}
;
a.Nm=function(b,c,d)
{
M.call(this);
this.Uj=b;
this.dh=c;
this.ha=d;
this.Bv=v(this.KS,this)
}
;
y(Nm,M);
t=Nm.prototype;
t.Tt=n;
t.yH=0;
t.qa=k;
t.fire=function()
{
!this.qa&&!this.yH?this.Ug():this.Tt=j
}
;
t.stop=function()
{
this.qa&&(Id.clearTimeout(this.qa),this.qa=k,this.Tt=n)
}
;
t.p=function()
{
Nm.m.p.call(this);
this.stop()
}
;
t.KS=function()
{
this.qa=k;
this.Tt&&!this.yH&&(this.Tt=n,this.Ug())
}
;
t.Ug=function()
{
this.qa=Ld(this.Bv,this.dh);
this.Uj.call(this.ha)
}
;
a.Om=function()
{
M.call(this);
this.e=k;
this.lastPosition=0;
this.Iw=this.uU=300;
this.es=j;
this.jv=n;
this.AV=150
}
;
y(Om,Rk);
t=Om.prototype;
t.v=function()
{
if(!(ub&&!ki||z.contains(Mg,"back_to_top")))
{
this.e=hc(this.wV);
document.body.appendChild(this.e);
var b=this.g(),c=new Nm(this.pz,this.AV,this);
b.c(window,"scroll",function()
{
c.fire()
}
);
b.c(this.e,"click",this.ML)
}

}
;
t.wV='<div class="zh-backtotop" style="display:none"><a data-action="backtotop" data-tip="s$r$回到顶部" href="javascript:;
" class="btn-backtotop btn-action"><div class="arrow"></div><div class="stick"></div></a></div>';

t.ML=function()
{
var b=ac(document),c=bc(document),d=c.x,c=c.y,e=new Mm,g=this.g();
e.add(new tj(b,[d,c],[0,0],this.uU,Aj));
e.add(new vj(this.e,this.Iw,zj));
g.c(e,"finish",this.ZR);
g.c(e,"begin",this.LR);
e.play();
Y.U("ga_click_back_to_top")
}
;
t.LR=function()
{
this.jv=this.es=j
}
;
t.ZR=function()
{
this.jv=n
}
;
t.pz=function()
{
if(!this.jv)
{
var b=bc(document).y,c=ub?500:1E3;
this.es?b>=c&&((new wj(this.e,this.Iw,yj)).play(),this.es=n):b<c&&((new vj(this.e,this.Iw,zj)).play(),this.es=j)
}

}
;
a.Pm=function()
{

}
;
Pm.prototype.link="想来知乎工作？请发送邮件到 jobs@zhihu.com";
Pm.prototype.DL="          _____                    _____                    _____                    _____          \n         /\\    \\                  /\\    \\                  /\\    \\                  /\\    \\         \n        /::\\____\\                /::\\    \\                /::\\    \\                /::\\    \\        \n       /:::/    /                \\:::\\    \\              /::::\\    \\              /::::\\    \\       \n      /:::/    /                  \\:::\\    \\            /::::::\\    \\            /::::::\\    \\      \n     /:::/    /                    \\:::\\    \\          /:::/\\:::\\    \\          /:::/\\:::\\    \\     \n    /:::/____/                      \\:::\\    \\        /:::/__\\:::\\    \\        /:::/__\\:::\\    \\    \n   /::::\\    \\                      /::::\\    \\      /::::\\   \\:::\\    \\      /::::\\   \\:::\\    \\   \n  /::::::\\    \\   _____    ____    /::::::\\    \\    /::::::\\   \\:::\\    \\    /::::::\\   \\:::\\    \\  \n /:::/\\:::\\    \\ /\\    \\  /\\   \\  /:::/\\:::\\    \\  /:::/\\:::\\   \\:::\\____\\  /:::/\\:::\\   \\:::\\    \\ \n/:::/  \\:::\\    /::\\____\\/::\\   \\/:::/  \\:::\\____\\/:::/  \\:::\\   \\:::|    |/:::/__\\:::\\   \\:::\\____\\\n\\::/    \\:::\\  /:::/    /\\:::\\  /:::/    \\::/    /\\::/   |::::\\  /:::|____|\\:::\\   \\:::\\   \\::/    /\n \\/____/ \\:::\\/:::/    /  \\:::\\/:::/    / \\/____/  \\/____|:::::\\/:::/    /  \\:::\\   \\:::\\   \\/____/ \n          \\::::::/    /    \\::::::/    /                 |:::::::::/    /    \\:::\\   \\:::\\    \\     \n           \\::::/    /      \\::::/____/                  |::|\\::::/    /      \\:::\\   \\:::\\____\\    \n           /:::/    /        \\:::\\    \\                  |::| \\::/____/        \\:::\\   \\::/    /    \n          /:::/    /          \\:::\\    \\                 |::|  ~|               \\:::\\   \\/____/     \n         /:::/    /            \\:::\\    \\                |::|   |                \\:::\\    \\         \n        /:::/    /              \\:::\\____\\               \\::|   |                 \\:::\\____\\        \n        \\::/    /                \\::/    /                \\:|   |                  \\::/    /        \n         \\/____/                  \\/____/                  \\|___|                   \\/____/         \n";
a.Qm=function()
{
M.call(this)
}
;
y(Qm,Rk);
a.Rm=k;
Qm.prototype.v=function()
{
Rm=this;
Sm(this)
}
;
a.Sm=function(b)
{
b.$j=new V(n);
P(b.g(),b.$j,"success",b.uS);
b.$j.ajax("/noti7/new?r="+ +new Date,k,"GET")
}
;
Qm.prototype.uS=function()
{
var b=Ie(this.$j);
b&&!b.r&&Uk(Y,[b])
}
;
a.Tm=function()
{

}
;
Tm.prototype.na=ba();
a.Um=function(b,c,d)
{
this.element=b;
this.Yf=c;
this.gT=d
}
;
y(Um,Tm);
Um.prototype.na=function(b,c,d)
{
mm(this.element,this.Yf,b,c,i,d,this.gT)
}
;
a.Vm=function(b,c)
{
this.Th=b instanceof Ob?b:new Ob(b,c)
}
;
y(Vm,Tm);
Vm.prototype.na=function(b,c,d,e)
{
mm(ag(b),0,b,c,this.Th,d,k,e)
}
;
a.Wm=function(b,c)
{
this.Lz=4;
this.ot=c||i;
rh.call(this,b)
}
;
y(Wm,rh);
Wm.prototype.dd=function(b)
{
this.ot=b||i;
this.R()&&this.na()
}
;
Wm.prototype.na=function()
{
if(this.ot)
{
var b=!this.R()&&"move_offscreen"!=this.fi(),c=this.h();
b&&(c.style.visibility="hidden",R(c,j));
this.ot.na(c,this.Lz,this.Oy);
b&&R(c,n)
}

}
;
a.Xm=function(b,c,d)
{
this.G=d||(b?Ub(I(b)):Ub());
Wm.call(this,this.G.o("div",
{
style:"position:absolute;
display:none;
"
}
));
this.ej=new Ob(1,1);
this.Ya=new Sd;
b&&this.attach(b);
c!=k&&zc(this.h(),c)
}
;
y(Xm,Wm);
a.Ym=[];
t=Xm.prototype;
t.ec=k;
t.className="goog-tooltip";
t.Wt=500;
t.fs=0;
t.J=q("G");
t.attach=function(b)
{
b=I(b);
this.Ya.add(b);
N(b,"mouseover",this.nd,n,this);
N(b,"mouseout",this.Wl,n,this);
N(b,"mousemove",this.Vl,n,this);
N(b,"focus",this.Ke,n,this);
N(b,"blur",this.Wl,n,this)
}
;

t.detach=function(b)
{
if(b)b=I(b),Zm(this,b),this.Ya.remove(b);
else
{
for(var c=this.Ya.Ja(),d=0;
b=c[d];
d++)Zm(this,b);
this.Ya.clear()
}

}
;
a.Zm=function(b,c)
{
yd(c,"mouseover",b.nd,n,b);
yd(c,"mouseout",b.Wl,n,b);
yd(c,"mousemove",b.Vl,n,b);
yd(c,"focus",b.Ke,n,b);
yd(c,"blur",b.Wl,n,b)
}
;
t.$w=q("fs");
t.ne=function(b)
{
this.h().innerHTML=b
}
;
t.rh=function(b)
{
var c=this.h();
c&&L(c);
Xm.m.rh.call(this,b);
b&&(c=this.G.wa().body,c.insertBefore(b,c.lastChild))
}
;
t.Lc=u(31);
t.bx=u(10);

t.ae=function()
{
return this.Sm?this.R()?4:1:this.Xl?3:this.R()?2:0
}
;
t.ys=function(b)
{
if(!this.R())return n;
var c=dg(this.h()),d=og(this.h());
return c.x<=b.x&&b.x<=c.x+d.width&&c.y<=b.y&&b.y<=c.y+d.height
}
;
t.$o=function()
{
if(!rh.prototype.$o.call(this))return n;
if(this.anchor)for(var b,c=0;
b=Ym[c];
c++)uc(b.h(),this.anchor)||b.w(n);
z.ws(Ym,this);
b=this.h();
b.className=this.className;
$m(this);
N(b,"mouseover",this.Kx,n,this);
N(b,"mouseout",this.ZE,n,this);
an(this);
return j
}
;

t.ak=function()
{
z.remove(Ym,this);
for(var b=this.h(),c,d=0;
c=Ym[d];
d++)c.anchor&&uc(b,c.anchor)&&c.w(n);
this.vH&&bn(this.vH);
yd(b,"mouseover",this.Kx,n,this);
yd(b,"mouseout",this.ZE,n,this);
this.anchor=i;
0==this.ae()&&(this.Mt=n);
rh.prototype.ak.call(this)
}
;
t.Sy=function(b,c)
{
this.anchor==b&&this.Ya.contains(this.anchor)&&(this.Mt||!this.T_?(this.w(n),this.R()||(this.anchor=b,this.dd(c||cn(this,0)),this.w(j))):this.anchor=i);
this.Sm=i
}
;
t.ci=q("Ya");
t.Or=q("ec");

t.tG=function(b)
{
this.Xl=i;
b==this.anchor&&(this.ec==k||this.ec!=this.h()&&!this.Ya.contains(this.ec))&&(!this.kl||!this.kl.ec)&&this.w(n)
}
;
a.dn=function(b,c)
{
var d=Nc(b.G);
b.ej.x=c.clientX+d.x;
b.ej.y=c.clientY+d.y
}
;
t.nd=function(b)
{
var c=en(this,b.target);
this.ec=c;
$m(this);
c!=this.anchor&&(this.anchor=c,fn(this,c),gn(this),dn(this,b))
}
;
a.en=function(b,c)
{
try
{
for(;
c&&!b.Ya.contains(c);
)c=c.parentNode;
return c
}
catch(d)
{
return k
}

}
;
t.Vl=function(b)
{
dn(this,b);
this.Mt=j
}
;

t.Ke=function(b)
{
this.ec=b=en(this,b.target);
this.Mt=j;
if(this.anchor!=b)
{
this.anchor=b;
var c=cn(this,1);
$m(this);
fn(this,b,c);
gn(this)
}

}
;
a.cn=function(b,c)
{
if(0==c)
{
var d=b.ej.clone();
return new hn(d)
}
return new jn(b.ec)
}
,a.gn=function(b)
{
if(b.anchor)for(var c,d=0;
c=Ym[d];
d++)uc(c.h(),b.anchor)&&(c.kl=b,b.vH=c)
}
;

t.Wl=function(b)
{
var c=en(this,b.target),d=en(this,b.relatedTarget);
c!=d&&(c==this.ec&&(this.ec=k),an(this),this.Mt=n,this.R()&&(!b.relatedTarget||!uc(this.h(),b.relatedTarget))?bn(this):this.anchor=i)
}
;
t.Kx=function()
{
var b=this.h();
this.ec!=b&&($m(this),this.ec=b)
}
;
t.ZE=function(b)
{
var c=this.h();
if(this.ec==c&&(!b.relatedTarget||!uc(c,b.relatedTarget)))this.ec=k,bn(this)
}
;

a.fn=function(b,c,d)
{
b.Sm||(b.Sm=Ld(v(b.Sy,b,c,d),b.Wt))
}
,a.an=function(b)
{
b.Sm&&(Id.clearTimeout(b.Sm),b.Sm=i)
}
,a.bn=function(b)
{
2==b.ae()&&(b.Xl=Ld(v(b.tG,b,b.anchor),b.$w()))
}
,a.$m=function(b)
{
b.Xl&&(Id.clearTimeout(b.Xl),b.Xl=i)
}
;
t.p=function()
{
this.w(n);
an(this);
this.detach();
this.h()&&L(this.h());
this.ec=k;
delete this.G;
Xm.m.p.call(this)
}
;
a.hn=function(b,c)
{
Vm.call(this,b,c)
}
;
y(hn,Vm);

hn.prototype.na=function(b,c,d)
{
c=ag(b);
c=fg(c);
d=d?new Of(d.top+10,d.right,d.bottom,d.left+10):new Of(10,0,0,10);
lm(this.Th,b,4,d,c,9)&496&&lm(this.Th,b,4,d,c,5)
}
;
a.jn=function(b)
{
Um.call(this,b,3)
}
;
y(jn,Um);
jn.prototype.na=function(b,c,d)
{
var e=new Ob(10,0);
mm(this.element,this.Yf,b,c,e,d,9)&496&&mm(this.element,2,b,1,e,d,5)
}
;
a.kn=function(b,c,d)
{
Xm.call(this,b,c,d)
}
;
y(kn,Xm);
t=kn.prototype;
t.TM=n;
t.SM=100;
t.aq=n;
t.et=function()
{
kn.m.et.call(this);
this.Rq=Rf(pg(this.h()));
this.anchor&&(this.iv=Rf(pg(this.anchor)));
this.aq=this.TM;
N(this.J().wa(),"mousemove",this.Vl,n,this)
}
;
t.ak=function()
{
yd(this.J().wa(),"mousemove",this.Vl,n,this);
this.iv=this.Rq=k;
this.aq=n;
kn.m.ak.call(this)
}
;

t.ys=function(b)
{
if(this.Zl)
{
var c=dg(this.h()),d=og(this.h());
return c.x-this.Zl.left<=b.x&&b.x<=c.x+d.width+this.Zl.right&&c.y-this.Zl.top<=b.y&&b.y<=c.y+d.height+this.Zl.bottom
}
return kn.m.ys.call(this,b)
}
;
a.ln=function(b,c)
{
if(b.iv&&b.iv.contains(c)||b.ys(c))return j;
var d=b.kl;
return!!d&&d.ys(c)
}
;
t.tG=function(b)
{
this.Xl=i;
b==this.anchor&&(!ln(this,this.ej)&&(!this.Or()&&(!this.kl||!this.kl.ec))&&(!B||!(0==this.ej.x&&0==this.ej.y)))&&this.w(n)
}
;

t.Vl=function(b)
{
var c=this.R();
if(this.Rq)
{
var d=Nc(this.J()),d=new Ob(b.clientX+d.x,b.clientY+d.y);
ln(this,d)?c=n:this.aq&&(c=Pf(this.Rq,d)>=Pf(this.Rq,this.ej))
}
if(c)
{
if(bn(this),this.ec=k,c=this.kl)c.ec=k
}
else 3==this.ae()&&$m(this);
kn.m.Vl.call(this,b)
}
;
t.Kx=function()
{
this.Or()!=this.h()&&(this.aq=n,this.ec=this.h())
}
;
t.$w=function()
{
return this.aq?this.SM:kn.m.$w.call(this)
}
;
a.mn=function(b,c,d,e)
{
Xm.call(this,k,k,d);
qa(b)?this.jy=b:this.uC=b;
this.gM=c!=n;
this.fB=[];
this.Fa=e||(d?d.wa():document);
N(this.Fa,"mouseover",this.$E,n,this)
}
;
y(mn,kn);
t=mn.prototype;
t.p=function()
{
mn.m.p.call(this);
yd(this.Fa,"mouseover",this.$E,n,this)
}
;
t.jy=function(b)
{
return b.tagName in this.uC&&!!b.getAttribute(this.uC[b.tagName])
}
;
t.$E=function(b)
{
if(b=b.target)if(this.jy(b))this.dd(k),nn(this,b);
else if(this.gM&&(b=Jc(b,v(this.jy,this),n,this.s_)))this.dd(k),nn(this,b)
}
;

a.nn=function(b,c,d)
{
if(c==b.ff)$m(b);
else if(c!=b.anchor)
{
if(1==b.ae()||4==b.ae())an(b),on(b);
var e=new pn("trigger",b,c,i);
b.ci().contains(c)||(b.attach(c),b.fB.push(c));
b.anchor=c;
b.tz(e)?fn(b,c,d||b.ot):on(b)
}

}
,a.qn=function(b,c)
{
var d=z.indexOf(b.fB,c);
-1!=d&&(b.detach(c),b.fB.splice(d,1))
}
;
t.tz=function(b)
{
return this.dispatchEvent(b)
}
;
a.on=function(b)
{
b.dispatchEvent(new pn("canceltrigger",b,b.anchor||k));
qn(b,b.anchor);
delete b.anchor
}
;

t.ak=function()
{
mn.m.ak.call(this);
k!=this.ff&&qn(this,this.ff);
this.ff=k
}
;
t.nd=function(b)
{
var c=en(this,b.target);
c&&c!=this.anchor?nn(this,c):mn.m.nd.call(this,b)
}
;
t.Wl=function(b)
{
var c=this.anchor,d=this.ae();
mn.m.Wl.call(this,b);
if(d!=this.ae()&&(1==d||4==d))this.anchor=c,on(this)
}
;
t.Sy=function(b,c)
{
mn.m.Sy.call(this,b,c);
this.R()?(b!=this.ff&&qn(this,this.ff),this.ff=b):(an(this),on(this))
}
;
a.pn=function(b,c,d,e)
{
id.call(this,b,c);
this.anchor=d;
this.data=e
}
;
y(pn,id);
a.rn=function(b,c,d)
{
Um.call(this,b,c);
this.lC=d
}
;
y(rn,Um);
rn.prototype.ho=s(5);

rn.prototype.na=function(b,c,d,e)
{
var g=
{
"1-4":"bottom","0-4":"top","0-5":"top","1-5":"bottom","2-5":"top","3-5":"bottom","3-4":"bottom","2-6":"left","2-4":"right"
}
,h;
if(this.lC)
{
h=mm(this.element,this.Yf,b,c,k,d,10,e);
var l=sn(h,this.Yf),m=sn(h,c);
h&496&&(h=mm(this.element,l,b,m,k,d,10,e),h&496&&(l=sn(h,l),m=sn(h,m),this.lC?mm(this.element,l,b,m,k,d,this.ho(),e):mm(this.element,l,b,m,k,d,0,e)));
this.nt&&(b=(la(l)?l:this.Yf)+"-"+(la(c)?c:m),this.nt(g[b],b))
}
else mm(this.element,this.Yf,b,c,i,d),this.nt&&
(b=this.Yf+"-"+c,this.nt(g[b],b))
}
;
a.sn=function(b,c)
{
b&48&&(c^=2);
b&192&&(c^=1);
return c
}
;
a.tn=function()
{
M.call(this);
this.SU=this.JP=250;
this.className="tooltip";
this.En=
{

}

}
;
y(tn,Rk);
t=tn.prototype;
t.NP=
{
t:0,r:2,b:1,l:2
}
;
a.un=function(b)
{
return'<div class="popover-inner"><div class="popover-content">'+b+'</div></div><div class="arrow"></div><div class="arrow2"></div><div class="arrow3"></div>'
}
;

t.v=function()
{
if(!Dg.Nc&&!z.contains(Mg,"tooltiop"))
{
var b=this.S=new mn(
{
A:"data-tip",SPAN:"data-tip",BUTTON:"data-tip",I:"data-tip",DIV:"data-tip"
}
);
this.S.className=this.className;
var c=K("div",
{
id:"zh-tooltip"
}
);
document.body.appendChild(c);
this.S.rh(c);
this.S.Wt=this.SU;
this.S.fs=this.JP;
this.g().c(this.S,"trigger",this.tz);
var d=$(c),e=k;
b.on("show",function(b)
{
clearTimeout(e);
d.addClass("in");
Y.U(
{
type:"ga_hover_hovercard",target:b.target.ff||b.target.anchor
}
)
}
).on("hide",function()
{
d.css(
{
display:"block",
visibility:"visible"
}
).removeClass("in").addClass("out");
e=setTimeout(function()
{
d.removeClass("out").css(
{
display:"none",visibility:"hidden"
}
)
}
,1E3)
}
);
this.g().c(this.S,"beforeshow",this.$o)
}

}
;

t.$o=function()
{
var b=this.S.ff||this.S.anchor,c=b&&b.getAttribute("data-tip");
if(c&&-1!==c.indexOf("$"))
{
this.yD=b;
c=c.split("$");
b=c[1];
var d=c[0],e=c[2];
this.zD=d;
this.PM=e;
this.On=b;
if("s"===d)c=[],c.push('<div class="tooltip-arrow'),c.push('"></div><div class="tooltip-inner">'),c.push(Ya(e)),c.push("</div></div>"),c=c.join(""),vn(this,c);
else
{
var g="t"===d?"topic":"people";
if(c=this.En[g]&&this.En[g][e])vn(this,un(c));
else
{
vn(this,un('<div class="zh-hovercard-spinner"></div>'));
var h=new V(n),
c="/"+g+"/"+encodeURIComponent(e)+"/profilecard";
P(this.g(),h,"success",function()
{
var b=He(h);
this.zD===d&&this.PM===e&&(wn(this,this.On),vn(this,un(b)),nn(this.S,this.yD,this.On));
this.En[g]=this.En[g]||
{

}
;
this.En[g][e]=b
}
);
h.ajax(c,k,"GET")
}

}
wn(this,b)
}

}
;
a.wn=function(b,c)
{
var d;
switch(c)
{
case "t":d=5;
break;
case "r":d=4;
break;
case "b":d=4;
break;
case "l":d=6
}
var e=b.S;
e.Lz=d;
e.R()&&e.na()
}
,a.vn=function(b,c)
{
b.S.ne(c);
b.S.dd(b.NM)
}
;

t.tz=function(b)
{
var b=b.anchor,c=b.getAttribute("data-tip"),d=c.split("$"),e=k;
this.S.className="s"!==d[0]?"goog-hovercard popover":"tooltip";
if(c)return b.title&&(b.setAttribute("data-original_title",b.title),b.removeAttribute("title")),e=d[1],"s"!==d[0]&&(210>ig(b).y?"t"===e&&(e="b",b.setAttribute("data-tip",c.replace("$t$","$b$"))):(e="t",b.setAttribute("data-tip",c.replace("$b$","$t$")))),this.NM=e=new rn(b,this.NP[e],"b"===e||"t"===e),b=v(this.GS,this),e.nt=b,j
}
;

t.GS=function(b,c)
{
var d=this.S.h();
D.remove(d,"top","bottom","left","right");
D.add(d,b);
var e=ug(d),g=ug(this.yD),h=new Ob(d.offsetLeft,d.offsetTop);
if("t"===this.On||"b"===this.On)
{
var e=(e.width-g.width)/2,l=h.x-e;
if("s"===this.zD)Tf(d,"left",l+"px");
else
{
var l=z.contains(["2-5","3-5","3-4","2-4"],c),m=$(".zh-hovercard-spinner",d)[0],p=J("arrow",d),r=J("arrow2",d),x=J("arrow3",d);
m?Tf(d,"left",h.x-e+"px"):l?Tf(d,"left",h.x+83+"px"):Tf(d,"left",h.x-70+"px");
var F=g.width/2;
p&&(r&&x)&&(m||(l?z.forEach([p,
r,x],function(b)
{
Tf(b,"left","auto");
Tf(b,"right",F+70+"px")
}
):z.forEach([p,r,x],function(b)
{
Tf(b,"left",F+70+"px")
}
)))
}

}
else Tf(d,"top",h.y-(e.height-g.height)/2+"px"),"l"===this.On&&$f(d,h.x-g.width)
}
;
a.xn=function()
{
var b=
{
warning:"您的知乎用户名 "+S.Uw+' 不符合 <a href="http://www.zhihu.com/question/19791408">知乎用户名规范</a>，请您 <a href="/settings/account#rename-section">修改</a>。',pending:"您提交的用户名修改正在审核中，帐号暂时锁定。"
}
,c=Og,d=Ng,e=n;
c?(U(c,4E3),e=j):d&&(b[d]&&U(b[d],4E3),e=j);
return e
}
;
Ll.Hh=Ml;
a.yn=function()
{

}
;
a.zn=function()
{

}
;
y(zn,yn);
zn.prototype.Va=function()
{
var b=0;
O.forEach(this.gd(j),function()
{
b++
}
);
return b
}
;
zn.prototype.clear=function()
{
var b=O.toArray(this.gd(j)),c=this;
z.forEach(b,function(b)
{
c.remove(b)
}
)
}
;
a.An=function(b)
{
this.vh=b
}
;
y(An,zn);
t=An.prototype;
t.ky=function()
{
try
{
return!!this.vh&&!!this.vh.getItem
}
catch(b)
{

}
return n
}
;
t.set=function(b,c)
{
try
{
this.vh.setItem(b,c)
}
catch(d)
{
f("Storage mechanism: Quota exceeded")
}

}
;
t.get=function(b)
{
b=this.vh.getItem(b);
!oa(b)&&b!==k&&f("Storage mechanism: Invalid value was encountered");
return b
}
;
t.remove=function(b)
{
this.vh.removeItem(b)
}
;
t.Va=function()
{
return this.vh.length
}
;

t.gd=function(b)
{
var c=0,d=this.vh,e=new Nd;
e.next=function()
{
c>=d.length&&f(O.fb);
var e=d.key(c++);
if(b)return e;
e=d.getItem(e);
oa(e)||f("Storage mechanism: Invalid value was encountered");
return e
}
;
return e
}
;
t.clear=function()
{
this.vh.clear()
}
;
a.Bn=function()
{
var b=k;
try
{
b=window.localStorage||k
}
catch(c)
{

}
this.vh=b
}
;
y(Bn,An);
a.Dn=function(b,c)
{
if(A&&!Ib(9))
{
Cn||(Cn=new Od);
this.vd=Cn.get(b);
this.vd||(c?this.vd=document.getElementById(c):(this.vd=document.createElement("userdata"),this.vd.addBehavior("#default#userData"),document.body.appendChild(this.vd)),Cn.set(b,this.vd));
this.XA=b;
try
{
this.vd.load(this.XA)
}
catch(d)
{
this.vd=k
}

}

}
;
y(Dn,zn);
a.En=
{
".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."
}
,a.Cn=k;
t=Dn.prototype;
t.vd=k;
t.XA=k;

a.Fn=function(b)
{
return"_"+encodeURIComponent(b).replace(/[.!~*'()%]/g,function(b)
{
return En[b]
}
)
}
;
t.ky=function()
{
return!!this.vd
}
;
t.set=function(b,c)
{
this.vd.setAttribute(Fn(b),c);
Gn(this)
}
;
t.get=function(b)
{
b=this.vd.getAttribute(Fn(b));
!oa(b)&&b!==k&&f("Storage mechanism: Invalid value was encountered");
return b
}
;
t.remove=function(b)
{
this.vd.removeAttribute(Fn(b));
Gn(this)
}
;
t.Va=function()
{
return Hn(this).attributes.length
}
;

t.gd=function(b)
{
var c=0,d=Hn(this).attributes,e=new Nd;
e.next=function()
{
c>=d.length&&f(O.fb);
var e=d[c++];
if(b)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);
e=e.nodeValue;
oa(e)||f("Storage mechanism: Invalid value was encountered");
return e
}
;
return e
}
;
t.clear=function()
{
for(var b=Hn(this),c=b.attributes.length;
0<c;
c--)b.removeAttribute(b.attributes[c-1].nodeName);
Gn(this)
}
;
a.Gn=function(b)
{
try
{
b.vd.save(b.XA)
}
catch(c)
{
f("Storage mechanism: Quota exceeded")
}

}
,a.Hn=function(b)
{
return b.vd.XMLDocument.documentElement
}
;
a.In=function(b,c)
{
this.hm=b;
this.hk=c+"::"
}
;
y(In,zn);
t=In.prototype;
t.hm=k;
t.hk="";
t.set=function(b,c)
{
this.hm.set(this.hk+b,c)
}
;
t.get=function(b)
{
return this.hm.get(this.hk+b)
}
;
t.remove=function(b)
{
this.hm.remove(this.hk+b)
}
;
t.gd=function(b)
{
var c=this.hm.gd(j),d=this,e=new Nd;
e.next=function()
{
for(var e=c.next();
e.substr(0,d.hk.length)!=d.hk;
)e=c.next();
return b?e.substr(d.hk.length):d.hm.get(e)
}
;
return e
}
;
a.Jn=function(b)
{
var c=new Bn;
return c.ky()?b?new In(c,b):c:k
}
,a.Kn=function(b)
{
b=new Dn(b||"UserDataSharedStore");
return b.ky()?b:k
}
;
a.Ln=Jn(i)||Kn(i);
a.Mn=function(b)
{
T.call(this);
$.extend(this.C=
{

}
,this.Q,b||
{

}
)
}
;
y(Mn,T);
t=Mn.prototype;
t.Q=
{
trigger:"hover",nH:"open",hideFocus:n
}
;
t.Vc=function()
{
return this.Hg.length&&this.fd.length
}
;
t.n=function(b)
{
if(b)
{
var c=$(b),d=c.prev();
this.Hg=c;
this.fd=d;
this.Cu=c.parent();
Mn.m.n.call(this,b);
return this
}

}
;
t.toggle=function()
{
this.tb()?this.close():this.open()
}
;
t.tb=function()
{
return this.Hg.is(":visible")
}
;

t.open=function()
{
this.Hg.attr("aria-hidden","false").parent().addClass(this.C.nH);
this.fd.attr("aria-expanded","true")
}
;
t.close=function()
{
this.Hg.attr("aria-hidden","true").parent().removeClass(this.C.nH);
this.fd.attr("aria-expanded","false")
}
;
a.Nn=function(b,c)
{
var d=b.Hg.children().find("a"),e=d.size();
c>=e?c=0:-1>=c&&(c=e-1);
d=d.eq(c);
b.fd.attr("aria-activedescendant",d.attr("id"));
d.focus();
b.index=c
}
;

t.QR=function(b)
{
var c=b.keyCode;
switch(c)
{
case 32:b.preventDefault();
this.toggle();
break;
case 27:case 9:this.close();
break;
case 38:case 40:Nn(this,38===c?-1:0)
}

}
;
t.nS=function(b)
{
var c=b.keyCode;
switch(c)
{
case 27:case 9:this.close();
this.fd.focus();
break;
case 38:case 40:b.preventDefault(),Nn(this,this.index+(38===c?-1:1))
}

}
;

t.z=function()
{
var b=this,c=this.C,d=this.Hg,e=this.fd,g=e.attr("id");
g||(g=ih(hh.D()),e.attr("id",g),d.attr("aria-labelledby",g));
e.attr("role")||e.attr("role","button");
this.fd.attr("aria-haspopup","true").attr("aria-activedescendant","");
this.Hg.children().find("a").attr("tabindex",-1).attr("id",v(function(b,c)
{
return c||ih(hh.D())
}
,this));
this.Hg.on("keydown",v(this.nS,this));
this.fd.on("keydown",v(this.QR,this));
d=oi?"click":c.trigger;
if("hover"===d)this.Cu.on("hover",v(function(b)
{
"mouseenter"===
b.type?this.open():this.close()
}
,this));
else if("click"===d)this.fd.on("click",v(function(b)
{
b.preventDefault();
this.toggle();
this.fd.focus()
}
,this));
this.Cu.on("focusout",function()
{
setTimeout(function()
{
b.Cu.get(0).contains(document.activeElement)||b.close()
}
)
}
);
if(c.hideFocus)this.Hg.children().find("a").on("click",function()
{
this.blur()
}
)
}
;
a.On=function(b)
{
T.call(this);
this.options=$.extend(
{
stopPropagation:j,OL:"#000",ov:0.5,CM:"#666",eD:0.2,top:2,width:6,right:2,JL:j
}
,b);
this.bz=0;
this.Ar=n
}
;
y(On,T);
t=On.prototype;

t.Z=function(b)
{
this.e=b;
this.K=$(this.e);
this.K.addClass("zh-scroller").css(
{
position:"relative",overflow:"hidden"
}
).wrapInner('<div class="zh-scroller-content"></div>');
this.K.wrapInner('<div class="zh-scroller-inner"></div>');
this.K.append("<div class='zh-scroller-bar-container'><div>");
this.K.append('<div class="zh-scroller-bar"></div>');
this.ue=this.K.children(".zh-scroller-inner");
this.Qk=this.K.children(".zh-scroller-bar-container");
this.se=this.K.children(".zh-scroller-bar");
this.Sf=this.ue.children(".zh-scroller-content");

this.Nq=this.se[0];
this.gQ=this.ue[0];
this.content=this.Sf[0];
this.Oq=this.Qk[0];
this.ue.css(
{
height:"100%",width:"150%",overflow:"auto"
}
);
this.se.css(
{
position:"absolute",right:this.options.right,top:this.options.top,opacity:this.options.ov,background:this.options.OL,width:this.options.width,"border-radius":3,cursor:"default"
}
);
this.Qk.css(
{
position:"absolute",right:this.options.right-1,top:0,height:"100%",width:this.options.width,background:this.options.CM,border:"1px solid #444",opacity:0,cursor:"default",
"border-radius":"2px"
}
);
this.Di(this.Nq,n);
this.Di(this.Oq,n);
this.update()
}
;
t.z=function()
{
On.m.z.call(this);
this.hB=new Nm(this.oz,50,this);
this.options.stopPropagation&&this.ue.bind("mousewheel DOMMouseScroll",function(b)
{
var c=k;
"mousewheel"===b.type?c=-1*b.originalEvent.wheelDelta:"DOMMouseScroll"===b.type&&(c=40*b.originalEvent.detail);
c&&(b.preventDefault(),$(this).scrollTop(c+$(this).scrollTop()))
}
)
}
;

t.rS=function(b)
{
b.target===this.Nq&&(this.Ar=j,this.PL=b.clientY,this.QL=parseInt(this.se.css("top"),10));
(b.target===this.Nq||b.target===this.Oq)&&this.Di(document.body,n)
}
;
t.tS=function()
{
this.Ar=n;
this.Di(document.body,j)
}
;
t.sS=function(b)
{
if(this.Ar)
{
var c=Pn(this,this.QL+(b.clientY-this.PL));
this.ue.scrollTop(c)
}
this.bz=b.target===this.Nq?2:b.target===this.Oq?1:0
}
;

a.Qn=function(b)
{
b.Lp&&(b.se.stop().css(
{
opacity:b.options.ov
}
).show(),b.sn&&(clearTimeout(b.sn),b.sn=n))
}
,a.Rn=function(b,c)
{
b.sn=setTimeout(v(function()
{
this.se.stop().fadeOut();
this.sn=n
}
,b),c||0)
}
;
t.oz=function()
{
var b=this.ue.scrollTop(),c=this.Sf.height(),d=this.ue.height(),e=b/c*(d-2*this.options.top);
Qn(this);
this.se.css(
{
top:e+this.options.top
}
);
this.dispatchEvent(new Sn(this,b,c-b-d,b/(c-d)))
}
;

t.update=function()
{
var b=this.Ql(this.ue).height,c=this.Ql(this.Sf).height;
b>=c?(this.Lp=n,this.se.hide()):(this.Lp=j,this.se.show());
this.se.css(
{
height:b/c*(b-2*this.options.top)
}
);
this.Qk.css(
{
height:b-2
}
);
this.Sf.css(
{
overflow:"hidden",width:this.K.width(),"min-height":"100%"
}
);
return this
}
;

t.Ql=function(b)
{
var c=
{
height:b.height(),width:b.width()
}
;
if(!c.height)
{
var d=b.css("display"),e=b.css("position"),g=b.css("visibility");
b.css(
{
position:"absolute",display:"block",visibility:"hidden"
}
);
c=
{
height:b.height(),width:b.width()
}
;
b.css(
{
position:e,display:d,visibility:g
}
)
}
return c
}
;
t.KR=function(b)
{
this.scrollTo(Pn(this,b.offsetY-this.se.height()/2))
}
;
a.Pn=function(b,c)
{
var d=b.ue.height()-2*b.options.top-b.se.height(),e=b.Sf.height()-b.ue.height();
return c/d*e
}
;

t.scrollTop=function(b)
{
this.Lp&&(b=b||200,Qn(this),this.ue.stop().animate(
{
scrollTop:0
}
,b));
return this
}
;
t.Di=function(b,c)
{
tg(b,!c)
}
;
t.scrollTo=function(b)
{
this.Lp&&(Qn(this),this.ue.stop().animate(
{
scrollTop:b
}
,200));
return this
}
;
a.Sn=function(b,c,d,e)
{
id.call(this,"scroll",b);
this.scrollTop=c;
this.X_=d;
this.Y_=e
}
;
y(Sn,id);
a.Tn=function(b,c,d,e)
{
M.call(this);
this.e=b;
this.Ow=c||"people";
this.DN=d||["zg-btn-follow","zg-btn-unfollow"];
this.text=e||["关注","取消关注"]
}
;
y(Tn,Rk);
Tn.prototype.v=function()
{
this.g().c(this.e,"click",this.bp)
}
;
Tn.prototype.bp=function(b)
{
b=sk(this.e,b.target);
"focus"===(b&&b.name)&&wk(b,this.Ow,k,this.DN,
{
follow_text:this.text[0],unfollow_text:this.text[1]
}
)
}
;
a.Un=function(b)
{
T.call(this);
this.C=$.extend(
{

}
,this.Q,b||
{

}
)
}
;
y(Un,T);
Un.prototype.Q=
{
IG:".tab-nav",uH:".tab-panel",Wk:"active"
}
;
Un.prototype.Z=function(b)
{
if(b)
{
this.e=b;
var c=this,d=this.C;
this.Uk=$(d.IG,b);
this.KB=$(d.uH,b);
this.Ij=this.Uk.index("."+d.Wk);
this.Uk.on("click",function()
{
c.select(c.Uk.index(this))
}
)
}

}
;

Un.prototype.select=function(b)
{
if(!(0>b||b>this.Uk.size()))if(this.dispatchEvent(
{
type:"action",data:
{
index:b
}

}
),b!==this.Ij)
{
this.Ij=b;
var c=this.C,d=this.Uk.eq(b);
this.Uk.not(d.addClass(c.Wk)).removeClass(c.Wk);
c=this.KB.eq(b);
this.KB.not(c.show()).hide();
this.dispatchEvent(
{
type:"select",data:
{
index:b
}

}
)
}

}
;
Un.prototype.index=q("Ij");
a.Vn=function()
{
M.call(this);
this.Qg=[0,0,0];
this.RG=[0,0,0];
this.types=["default","follow","vote_thank"];
this.uw=j;
this.df=[n,n,n];
this.Ol=[0,0,0];
this.Rm=[n,n,n]
}
;
y(Vn,Rk);
t=Vn.prototype;

t.v=function()
{
this.wrap=I("zh-top-nav-live-new");
this.OB=$(this.wrap);
this.wrapInner=I("zh-top-nav-live-new-inner");
this.hr=I("zh-top-nav-count-wrap");
this.Kn=K("span",
{
id:"zh-top-nav-count",className:"zu-top-nav-count zg-noti-number",style:"display:none"
}
);
this.contents=Xb("zm-noti7-content",this.wrap);
this.YQ=Xb("zm-noti7-popup-refresh",this.wrap);
this.Ov=Xb("zm-noti7-content-body",this.wrap);
this.hr.appendChild(this.Kn);
this.g().c(this.hr,"click",this.KV);
this.g().c(Y,"noti7",this.XO);
this.g().c(this.wrap,
"click",this.ga);
this.g().c(this.wrap,"click",function(b)
{
b=b.target;
b.href&&/group_id=/.test(b.href+"")&&$(b).parent(".unread").removeClass("unread")
}
);
var b=J("zm-noti7-popup-tab-container");
this.KG=Xb("new-noti",b);
this.xh=new Un(
{
IG:".zm-noti7-popup-tab-item",uH:".zm-noti7-content",Wk:"current"
}
);
this.g().c(this.xh,"action",function(b)
{
this.wD=b=b.data.index;
Wn(this,b);
var d=this.Gm&&this.Gm[b];
d&&(setTimeout(function()
{
d.update()
}
),this.xh.index()===b&&d.scrollTop())
}
).c(this.xh,"select",function(b)
{
this.wD=
b=b.data.index;
Xn(this,b);
Y.U(
{
type:"ga_click_top_nav_noti_tab",data:
{
xh:+b
}

}
);
!this.pc&&window.localStorage&&localStorage.setItem("noti7-tab",b)
}
);
this.xh.n(this.wrap);
!Dg.Nc&&navigator.userAgent.match(/iPad/i)==k&&(this.Gm=z.map(this.contents,function(b)
{
var d=new On;
d.n(b);
return d
}
));
Dg.Nc&&(this.uw=n);
(new Tn(this.Ov[1],"people",["zg-follow","zg-unfollow"])).v();
this.um=I("zh-top-nav-pm-count");
this.um||(this.um=K("span"));
this.lm=I("zh-top-nav-new-pm");
this.lm||(this.lm=K("span"));
this.vo=parseInt($(this.lm).attr("data-count")||
$(this.um).attr("data-count"),10)||0;
this.fG=I("zh-top-nav-count-wrap");
this.fG.innerHTML&&(this.count=+this.fG.innerHTML);
this.g().c(Y,"inbox",this.IO)
}
;
t.Vr=function(b)
{
!uc(this.wrap,b.target)&&!uc(this.hr,b.target)&&Yn(this,n)
}
;

a.Xn=function(b,c)
{
b.Gm&&z.forEach(b.Gm,function(b,e)
{
c===e?b.Aw||(b.g().c(b.gQ,"scroll",function()
{
this.hB.fire()
}
),A||(b.g().c(b.Oq,"click",b.KR),b.g().c(document,"mousedown",b.rS),b.g().c(document,"mouseup",b.tS),b.g().c(document,"mousemove",b.sS)),b.options.JL?(b.Ac=new Jd(200),b.g().c(b.Ac,Kd,function()
{
2===this.bz||1===this.bz?(Qn(this),this.Lp&&this.Qk.css(
{
opacity:this.options.eD
}
)):!this.Ar&&!this.sn&&(Rn(this,1E3),this.Qk.css(
{
opacity:0
}
))
}
)):(b.se.css(
{
opacity:b.options.ov
}
),b.Qk.css(
{
opacity:b.options.eD
}
)),
b.Ac&&b.Ac.start(),Rn(b),b.Aw=j):b.Aw&&(b.g().Pc(),b.Ac&&b.Ac.stop(),b.Aw=n)
}
)
}
;
t.ga=function(b)
{
var c=b.target;
c&&c.name&&"set"===c.name&&this.A_(b)
}
;
t.XO=function(b)
{
this.RG=this.Qg;
this.Qg=b.mb;
this.pc=this.Qg[0]+this.Qg[1]+this.Qg[2];
R(this.Kn,!!this.pc);
this.Kn.innerHTML=99<this.pc?"99+":this.pc;
z.forEach(this.Qg,function(b,d)
{
R(this.KG[d],b);
b&&(this.df[d]=n);
this.uw&&0<b-this.RG[d]&&this.Nl(d)
}
,this);
Zn(this)
}
;

a.Zn=function(b)
{
var c=99<b.pc?"99+":b.pc,d=99<b.vo?"99+":b.vo;
window.document.title=(c||d?"("+(b.vo?d+" 封私信":"")+(b.pc&&b.vo?" / ":"")+(b.pc?c+" 条消息":"")+") ":"")+window.document.title.replace(/^(\(|\uff08)(\d)*(\+)?( )?(\u5c01\u79c1\u4fe1)?( \/ )?(\d)*(\+)?( )?(\u6761\u6d88\u606f)?(\)|\uff09)( )?/g,"")
}
;

t.KV=function()
{
if(Dg.Nc&&this.visible)Yn(this,n);
else if(this.visible&&!this.pc)Yn(this,n);
else
{
Yn(this,j);
var b;
!this.Sv&&!this.pc?(b=(b=window.localStorage&&localStorage.getItem("noti7-tab"))?Number(b):0,this.xh.select(b),this.Rm[b]=j):this.pc&&(b=z.Kw(this.Qg,of),b=-1===b?0:b,this.xh.select(b),this.Rm[b]=j);
Y.U(
{
type:"ga_click_top_nav_noti",data:
{
xh:this.wD,kJ:+(this.pc||0)
}

}
)
}
Zn(this)
}
;

a.$n=function(b,c)
{
b.pc-=b.Qg[c];
R(b.KG[c],n);
0>b.pc&&(b.pc=0);
R(b.Kn,!!b.pc);
b.Kn.innerHTML=b.pc
}
,a.Wn=function(b,c)
{
var d;
b.uw?b.visible&&(b.df[c]?("$$used$$"!==b.df[c]&&(b.Ov[c].innerHTML=b.df[c],b.df[c]="$$used$$"),b.Qg[c]&&(d=new V(n),d.ajax("/noti7/readall","tab="+b.types[c],"POST")),$n(b,c),b.Gm&&b.Gm[c].update().scrollTop(),!b.pc&&window.localStorage&&localStorage.setItem("noti7-tab",c)):(b.Rm[c]=j,b.Nl(c))):b.df[c]?("$$used$$"!==b.df[c]&&(b.Ov[c].innerHTML=b.df[c],b.df[c]="$$used$$"),$n(b,
c)):(b.Rm[c]=j,b.Nl(c),d=new V(n),d.ajax("/noti7/readall","tab="+b.types[c],"POST"))
}
,a.Yn=function(b,c)
{
c?b.OB.fadeIn(50):b.OB.fadeOut(50);
b.visible=c;
D.enable(b.hr,"open",b.visible);
c?(z.forEach(b.df,function(b,c)
{
b||this.Nl(c)
}
,b),b.g().c(document,"click",b.Vr)):b.g().va(document,"click",b.Vr);
Xn(b,-1)
}
;
t.Nl=function(b)
{
if(!this.Ol[b]||!this.Ol[b].Gb())this.Ol[b]=new V(n),this.g().c(this.Ol[b],"success",function(c)
{
this.mz(c,b)
}
),this.Ol[b].ajax("/noti7/stack/"+this.types[b]+"?r="+za(),"","GET")
}
;

t.mz=function(b,c)
{
$(this.YQ[c]).hide();
var d=Ie(this.Ol[c]);
if(d)if(d.r)U(d.msg);
else
{
this.Sv=j;
if(d=d.msg)1===c&&(d='<div class="zm-noti7-content-head-item"><span class="zg-gray-normal">这些人最近关注了你</span></div>'+d);
else switch(c)
{
case 0:d="<div class='zm-noti7-popup-empty'>暂无新消息</div>";
break;
case 1:d="<div class='zm-noti7-popup-empty'>有人关注你时会显示在这里</div>";
break;
case 2:d="<div class='zm-noti7-popup-empty'>你的答案收到赞同、感谢时会显示在这里</div>"
}
this.df[c]=d;
this.Rm[c]&&(Wn(this,c),this.Rm[c]=n)
}

}
;

t.IO=function(b)
{
this.vo=b=$.isNumeric(b)?b:b.mb;
0!==b?(this.lm.innerHTML=this.um.innerHTML=b,this.lm.style.visibility=this.um.style.visibility="visible"):this.lm.style.visibility=this.um.style.visibility="hidden";
Zn(this)
}
;
Ll.wq=am;
Ll.wq.CY=",;
";
Ll.wq.gY='"';
a.ao=function(b,c,d,e)
{
am.call(this,b,c,d,e)
}
;
y(ao,am);
ao.prototype.Ai=function(b)
{
var c=ao.m.Ai.call(this,b);
b.select(this.ba.Ub);
return c
}
;
Ll.lK=ao;
Ll.Ou=nm;
Ll.Ou.aX=300;
Ll.Ou.ZW=sm;
Ll.ZB=jm;
Ll.kK=tm;
a.bo=function(b,c)
{
Ll.ZB.call(this,b,c);
this.cA=k;
this.iE=j
}
;
y(bo,Ll.ZB);
bo.prototype.CT=["根话题","未归类话题"];
bo.prototype.Hp=ca("cA");
bo.prototype.xi=function(b,c,d)
{
var e=v(function(b,c)
{
for(var e=[],m,p=0;
p<c.length;
p++)for(var r=1;
r<c[p].length;
r++)
{
m=c[p][r];
var x=j;
this.iE&&z.forEach(this.CT,function(b)
{
m[2]===b&&(x=n)
}
);
x&&e.push(m)
}
this.cA&&(e=this.cA(e));
d(b,e)
}
,this);
bo.m.xi.call(this,b,c,e)
}
;
a.co=function(b,c,d,e)
{
this.zG=0;
Ll.wq.call(this,b,c,!!d,e||300)
}
;
y(co,Ll.wq);
t=co.prototype;

t.Ai=function(b)
{
var c=Ll.lK.m.Ai.call(this,b),d=this.ba.Ub,e=this.ba;
e.nI=b;
e.dispatchEvent("select");
d.value="";
return c
}
;
t.ta=ba();
t.update=function(b)
{
var c=jk(this.W());
!c||"搜索用户"===c||"搜索话题"===c||"在这里输入问题"===c||z.contains(this.ba.Ew||[],c)||(!c?0:unescape(encodeURIComponent(c)).length)<this.zG||c===this.oG?(this.ba.ij(),this.Oo=c):(this.oG=k,this.ba.dispatchEvent(
{
type:eo
}
),co.m.update.call(this,b))
}
;

t.Ke=function(b)
{
this.ba&&Nl(this.ba);
b.target!==this.gb&&(this.gb=b.target||k,this.qa&&(this.qa.start(),this.hc.c(this.qa,Kd,this.qm)),this.Oo=this.W(),hm(this));
this.qa&&this.qa.start();
this.update(j)
}
;
t.Zc=function()
{
this.qa&&this.qa.stop();
this.ba&&this.ba.ij()
}
;

t.Zb=function(b)
{
if(13===b.keyCode)
{
if(this.ba.tb())
{
if(this.ba.zi())return b.preventDefault(),b.stopPropagation(),j;
b.preventDefault();
b.stopPropagation();
this.ba.dc="";
this.ba.Hc();
this.update(j);
return n
}
b.stopPropagation();
b.preventDefault();
return n
}
co.m.Zb.call(this,b)
}
;
t.Kq=function(b)
{
co.m.Kq.call(this,b);
this.hc.c(b,"mousedown",function(b)
{
b.stopPropagation();
return j
}
)
}
;
a.fo=function(b,c,d,e)
{
co.call(this,b,c,!!d,e)
}
;
y(fo,co);

fo.prototype.Ai=function(b)
{
var c=this.ba;
c.nI=b;
c.dispatchEvent("select");
return n
}
;
a.go=function(b,c,d,e,g,h,l,m,p)
{
var r=
{

}
;
"question_suggest"===h?(r.Y=v(this.YT,this),r.cd=rk):"topic_question"===h?(r.Y=v(this.$T,this),r.cd=qk):r.cd=h?qk:rk;
h=new Ll.Ou(g,r);
g&&(h.sp=n);
h.gs=j;
this.M=h;
this.yf=new bo(b,!e);
b=p?p:new co(k,k,d);
l&&l.length&&new ql(c,l[0]);
b.mJ=n;
Ll.call(this,this.yf,h,b);
b.ba=this;
b.Kq(c);
m&&(b.zG=m)
}
;
y(go,Ll.kK);
a.eo="before_update";
t=go.prototype;
t.gw=j;

t.YT=function(b,c,d)
{
O.forEach(d,function(b)
{
b=om(this,b,this.dc);
this.G.appendChild(this.e,b)
}
,b);
nc(b.e,b.G.o("div","zh-question-suggest-info",[b=b.G.o("a",
{
href:"javascript:;
",title:"关闭",name:"close",id:"zh-question-suggest-info-close"
}
,[b.G.o("span","x-m"),"不是"]),"您想问的是不是下面的问题？"]),0);
N(b,"click",function()
{
var b=this.Ff;
b.Zc();
this.Hc();
b.oG=b.W()
}
,n,this)
}
;

t.$T=function(b,c,d)
{
0===d.length?this.Hc():(O.forEach(d,function(b)
{
b=om(this,b,this.dc);
this.G.appendChild(this.e,b)
}
,b),c=b.G.o("div","zh-question-topic-autocomplete-plaintext",["建议添加的话题",b.G.o("span","x-m")]),nc(b.e,c,0),Dg.Nc&&N(c,"click",function()
{
this.Ff.Zc();
this.Hc()
}
,n,this))
}
;
t.kg=q("nI");
t.Hp=function(b)
{
this.yf.Hp(b)
}
;
t.Hc=function()
{
if(this.gw)return go.m.Hc.call(this)
}
;
t.zi=function()
{
return-1===Ql(this,this.Mc)?n:go.m.zi.call(this)
}
;

t.ij=function()
{
Dg.Nc?xd(document,"click",v(this.Hc,this)):go.m.ij.call(this)
}
;
a.ho=function()
{

}
,a.jo=void 0;
ia(ho);
t=ho.prototype;
t.vc=ba();
t.o=function(b)
{
var c=b.J().o("div",this.rf(b).join(" "),b.hb());
ko(this,b,c);
return c
}
;
t.aa=aa();
t.pj=function(b,c,d)
{
if(b=b.h?b.h():b)if(A&&!Gb("7"))
{
var e=lo(D.get(b),c);
e.push(c);
xa(d?D.add:D.remove,b).apply(k,e)
}
else D.enable(b,c,d)
}
;
t.Vc=s(j);

t.n=function(b,c)
{
c.id&&lh(b,c.id);
var d=this.aa(c);
d&&d.firstChild?b.Mm(d.firstChild.nextSibling?z.clone(d.childNodes):d.firstChild):b.Mm(k);
var e=0,g=this.N(),h=this.N(),l=n,m=n,d=n,p=D.get(c);
z.forEach(p,function(b)
{
!l&&b==g?(l=j,h==g&&(m=j)):!m&&b==h?m=j:e|=this.jx(b)
}
,this);
b.ca=e;
l||(p.push(g),h==g&&(m=j));
m||p.push(h);
var r=b.of;
r&&p.push.apply(p,r);
if(A&&!Gb("7"))
{
var x=lo(p);
0<x.length&&(p.push.apply(p,x),d=j)
}
(!l||!m||r||d)&&D.set(c,p.join(" "));
ko(this,b,c);
return c
}
;

t.Oe=function(b)
{
b.Hd()&&this.Ci(b.h(),j);
b.isEnabled()&&this.Ye(b,b.R())
}
;
a.ko=function(b,c,d)
{
c.isEnabled()||b.Dg(d,1,j);
c.ca&8&&b.Dg(d,8,j);
c.Tb&16&&b.Dg(d,16,c.de());
c.Tb&64&&b.Dg(d,64,c.tb())
}
;
t.yp=function(b,c)
{
tg(b,!c,!A&&!tb)
}
;
t.Ci=function(b,c)
{
this.pj(b,this.N()+"-rtl",c)
}
;
t.ki=function(b)
{
var c;
return b.Tb&32&&(c=b.kc())?Ec(c):n
}
;
t.Ye=function(b,c)
{
var d;
if(b.Tb&32&&(d=b.kc()))
{
if(!c&&b.ca&32)
{
try
{
d.blur()
}
catch(e)
{

}
b.ca&32&&b.Zc(k)
}
Ec(d)!=c&&Fc(d,c)
}

}
;
t.w=function(b,c)
{
R(b,c)
}
;

t.bc=function(b,c,d)
{
var e=b.h();
if(e)
{
var g=this.eo(c);
g&&this.pj(b,g,d);
this.Dg(e,c,d)
}

}
;
t.Dg=function(b,c,d)
{
jo||(jo=E.create(1,Wc.WJ,8,Wc.mK,16,Wc.vq,64,Wc.RB));
(c=jo[c])&&Pc(b,c,d)
}
;
t.Na=function(b,c)
{
var d=this.aa(b);
if(d&&(kc(d),c))if(oa(c))zc(d,c);
else
{
var e=function(b)
{
if(b)
{
var c=Tb(d);
d.appendChild(oa(b)?c.createTextNode(b):b)
}

}
;
ma(c)?z.forEach(c,e):na(c)&&!("nodeType"in c)?z.forEach(z.clone(c),e):e(c)
}

}
;
t.kc=function(b)
{
return b.h()
}
;
t.N=s("goog-control");

t.rf=function(b)
{
var c=this.N(),d=[c],e=this.N();
e!=c&&d.push(e);
c=b.ae();
for(e=[];
c;
)
{
var g=c&-c;
e.push(this.eo(g));
c&=~g
}
d.push.apply(d,e);
(b=b.of)&&d.push.apply(d,b);
A&&!Gb("7")&&d.push.apply(d,lo(d));
return d
}
;
a.lo=function(b,c)
{
var d=[];
c&&(b=b.concat([c]));
z.forEach([],function(e)
{
z.every(e,xa(z.contains,b))&&(!c||z.contains(e,c))&&d.push(e.join("_"))
}
);
return d
}
;
t.eo=function(b)
{
this.Zq||mo(this);
return this.Zq[b]
}
;

t.jx=function(b)
{
this.QI||(this.Zq||mo(this),this.QI=E.Ym(this.Zq));
b=parseInt(this.QI[b],10);
return isNaN(b)?0:b
}
;
a.mo=function(b)
{
var c=b.N();
b.Zq=E.create(1,c+"-disabled",2,c+"-hover",4,c+"-active",8,c+"-selected",16,c+"-checked",32,c+"-focused",64,c+"-open")
}
;
a.no=function()
{

}
;
y(no,ho);
ia(no);
t=no.prototype;
t.vc=function()
{
return Xc.uq
}
;
t.Dg=function(b,c,d)
{
16==c?Pc(b,Wc.iK,d):no.m.Dg.call(this,b,c,d)
}
;
t.o=function(b)
{
var c=no.m.o.call(this,b),d=b.lg();
d&&this.Tc(c,d);
(d=b.W())&&this.ta(c,d);
b.Tb&16&&this.Dg(c,16,b.de());
return c
}
;
t.n=function(b,c)
{
var c=no.m.n.call(this,b,c),d=this.W(c);
b.Dc=d;
b.Rt(this.lg(c));
b.Tb&16&&this.Dg(c,16,b.de());
return c
}
;
t.W=ha;
t.ta=ha;
t.lg=function(b)
{
return b.title
}
;
t.Tc=function(b,c)
{
b&&(b.title=c||"")
}
;
t.Gf=u(20);

t.N=s("goog-button");
a.po=function(b,c)
{
b||f(Error("Invalid class name "+b));
qa(c)||f(Error("Invalid decorator function "+c));
oo[b]=c
}
,a.qo=
{

}
,a.oo=
{

}
;
a.ro=function(b,c,d)
{
T.call(this,d);
if(!c)
{
for(var c=this.constructor,e;
c;
)
{
e=ua(c);
if(e=qo[e])break;
c=c.m?c.m.constructor:k
}
c=e?qa(e.D)?e.D():new e:k
}
this.M=c;
this.Mm(b)
}
;
y(ro,T);
t=ro.prototype;
t.uc=k;
t.ca=0;
t.Tb=39;
t.Wi=255;
t.yk=0;
t.nb=j;
t.of=k;
t.zj=j;
t.Gq=n;
t.gk=k;
t.Ep=function(b)
{
this.Aa&&b!=this.zj&&so(this,b);
this.zj=b
}
;
t.kc=function()
{
return this.M.kc(this)
}
;
t.Qr=function()
{
return this.pb||(this.pb=new Vl)
}
;

t.Kh=function(b)
{
b&&(this.of?z.contains(this.of,b)||this.of.push(b):this.of=[b],this.M.pj(this,b,j))
}
;
t.pj=function(b,c)
{
c?this.Kh(b):b&&this.of&&(z.remove(this.of,b),0==this.of.length&&(this.of=k),this.M.pj(this,b,n))
}
;
t.o=function()
{
var b=this.M.o(this);
this.e=b;
var c=this.gk||this.M.vc();
c&&Oc(b,c);
this.Gq||this.M.yp(b,n);
this.R()||this.M.w(b,n)
}
;
t.Gp=u(17);
t.aa=function()
{
return this.M.aa(this.h())
}
;
t.Vc=function(b)
{
return this.M.Vc(b)
}
;

t.Z=function(b)
{
this.e=b=this.M.n(this,b);
var c=this.gk||this.M.vc();
c&&Oc(b,c);
this.Gq||this.M.yp(b,n);
this.nb="none"!=b.style.display
}
;
t.z=function()
{
ro.m.z.call(this);
this.M.Oe(this);
if(this.Tb&-2&&(this.zj&&so(this,j),this.Tb&32))
{
var b=this.kc();
if(b)
{
var c=this.Qr();
c.attach(b);
this.g().c(c,"key",this.Zb).c(b,"focus",this.Ke).c(b,"blur",this.Zc)
}

}

}
;

a.so=function(b,c)
{
var d=b.g(),e=b.h();
c?(d.c(e,"mouseover",b.nd).c(e,"mousedown",b.Le).c(e,"mouseup",b.mg).c(e,"mouseout",b.gi),b.po!=ha&&d.c(e,"contextmenu",b.po),A&&d.c(e,"dblclick",b.EE)):(d.va(e,"mouseover",b.nd).va(e,"mousedown",b.Le).va(e,"mouseup",b.mg).va(e,"mouseout",b.gi),b.po!=ha&&d.va(e,"contextmenu",b.po),A&&d.va(e,"dblclick",b.EE))
}
;
t.Za=function()
{
ro.m.Za.call(this);
this.pb&&this.pb.detach();
this.R()&&this.isEnabled()&&this.M.Ye(this,n)
}
;

t.p=function()
{
ro.m.p.call(this);
this.pb&&(this.pb.F(),delete this.pb);
delete this.M;
this.of=this.uc=k
}
;
t.hb=q("uc");
t.Na=function(b)
{
this.M.Na(this.h(),b);
this.Mm(b)
}
;
t.Mm=ca("uc");
t.Xg=function()
{
var b=this.hb();
if(!b)return"";
b=oa(b)?b:ma(b)?z.map(b,Ic).join(""):Hc(b);
return Ka(b)
}
;
t.Km=u(57);
t.Ci=function(b)
{
ro.m.Ci.call(this,b);
var c=this.h();
c&&this.M.Ci(c,b)
}
;
t.yp=function(b)
{
this.Gq=b;
var c=this.h();
c&&this.M.yp(c,b)
}
;
t.R=q("nb");

t.w=function(b,c)
{
if(c||this.nb!=b&&this.dispatchEvent(b?"show":"hide"))
{
var d=this.h();
d&&this.M.w(d,b);
this.isEnabled()&&this.M.Ye(this,b);
this.nb=b;
return j
}
return n
}
;
t.isEnabled=function()
{
return!(this.ca&1)
}
;
t.cb=function(b)
{
var c=this.getParent();
if((!c||"function"!=typeof c.isEnabled||c.isEnabled())&&to(this,1,!b))b||(this.setActive(n),this.td(n)),this.R()&&this.M.Ye(this,b),this.bc(1,!b)
}
;
t.td=function(b)
{
to(this,2,b)&&this.bc(2,b)
}
;
t.Gb=function()
{
return!!(this.ca&4)
}
;

t.setActive=function(b)
{
to(this,4,b)&&this.bc(4,b)
}
;
t.Om=function(b)
{
to(this,8,b)&&this.bc(8,b)
}
;
t.de=function()
{
return!!(this.ca&16)
}
;
t.Rc=function(b)
{
to(this,16,b)&&this.bc(16,b)
}
;
t.tb=function()
{
return!!(this.ca&64)
}
;
t.vb=function(b)
{
to(this,64,b)&&this.bc(64,b)
}
;
t.ae=q("ca");
t.bc=function(b,c)
{
this.Tb&b&&c!=!!(this.ca&b)&&(this.M.bc(this,b,c),this.ca=c?this.ca|b:this.ca&~b)
}
;

a.uo=function(b,c,d)
{
b.Aa&&(b.ca&c&&!d)&&f(Error("Component already rendered"));
!d&&b.ca&c&&b.bc(c,n);
b.Tb=d?b.Tb|c:b.Tb&~c
}
,a.vo=function(b,c)
{
return!!(b.Wi&c)&&!!(b.Tb&c)
}
,a.to=function(b,c,d)
{
return!!(b.Tb&c)&&!!(b.ca&c)!=d&&(!(b.yk&c)||b.dispatchEvent(kh(c,d)))&&!b.$f
}
;
t.nd=function(b)
{
(!b.relatedTarget||!uc(this.h(),b.relatedTarget))&&(this.dispatchEvent("enter")&&this.isEnabled()&&vo(this,2))&&this.td(j)
}
;

t.gi=function(b)
{
if((!b.relatedTarget||!uc(this.h(),b.relatedTarget))&&this.dispatchEvent("leave"))vo(this,4)&&this.setActive(n),vo(this,2)&&this.td(n)
}
;
t.po=ha;
t.Le=function(b)
{
this.isEnabled()&&(vo(this,2)&&this.td(j),od(b)&&(vo(this,4)&&this.setActive(j),this.M.ki(this)&&this.kc().focus()));
!this.Gq&&od(b)&&b.preventDefault()
}
;
t.mg=function(b)
{
this.isEnabled()&&(vo(this,2)&&this.td(j),this.Gb()&&(this.ke(b)&&vo(this,4))&&this.setActive(n))
}
;
t.EE=function(b)
{
this.isEnabled()&&this.ke(b)
}
;

t.ke=function(b)
{
vo(this,16)&&this.Rc(!this.de());
vo(this,8)&&this.Om(j);
vo(this,64)&&this.vb(!this.tb());
var c=new id("action",this);
b&&(c.altKey=b.altKey,c.ctrlKey=b.ctrlKey,c.metaKey=b.metaKey,c.shiftKey=b.shiftKey,c.Iz=b.Iz);
return this.dispatchEvent(c)
}
;
t.Ke=function()
{
vo(this,32)&&to(this,32,j)&&this.bc(32,j)
}
;
t.Zc=function()
{
vo(this,4)&&this.setActive(n);
vo(this,32)&&to(this,32,n)&&this.bc(32,n)
}
;

t.Zb=function(b)
{
return this.R()&&this.isEnabled()&&this.tf(b)?(b.preventDefault(),b.stopPropagation(),j):n
}
;
t.tf=function(b)
{
return 13==b.keyCode&&this.ke(b)
}
;
qa(ro)||f(Error("Invalid component class "+ro));
qa(ho)||f(Error("Invalid renderer class "+ho));
a.wo=ua(ro);
qo[wo]=ho;
po("goog-control",function()
{
return new ro(k)
}
);
a.xo=function()
{

}
;
y(xo,no);
ia(xo);
t=xo.prototype;
t.vc=ba();
t.o=function(b)
{
b.Ep(n);
b.Wi&=-256;
uo(b,32,n);
return b.J().o("button",
{
"class":this.rf(b).join(" "),disabled:!b.isEnabled(),title:b.lg()||"",value:b.W()||""
}
,b.Xg()||"")
}
;
t.Vc=function(b)
{
return"BUTTON"==b.tagName||"INPUT"==b.tagName&&("button"==b.type||"submit"==b.type||"reset"==b.type)
}
;
t.n=function(b,c)
{
b.Ep(n);
b.Wi&=-256;
uo(b,32,n);
c.disabled&&D.add(c,this.eo(1));
return xo.m.n.call(this,b,c)
}
;
t.Oe=function(b)
{
b.g().c(b.h(),"click",b.ke)
}
;

t.yp=ha;
t.Ci=ha;
t.ki=function(b)
{
return b.isEnabled()
}
;
t.Ye=ha;
t.bc=function(b,c,d)
{
xo.m.bc.call(this,b,c,d);
if((b=b.h())&&1==c)b.disabled=d
}
;
t.W=function(b)
{
return b.value
}
;
t.ta=function(b,c)
{
b&&(b.value=c)
}
;
t.Dg=ha;
a.yo=function(b,c,d)
{
ro.call(this,b,c||xo.D(),d)
}
;
y(yo,ro);
t=yo.prototype;
t.W=q("Dc");
t.ta=function(b)
{
this.Dc=b;
this.M.ta(this.h(),b)
}
;
t.lg=q("Zp");
t.Tc=function(b)
{
this.Zp=b;
this.M.Tc(this.h(),b)
}
;
t.Rt=ca("Zp");
t.Gf=u(19);
t.p=function()
{
yo.m.p.call(this);
delete this.Dc;
delete this.Zp
}
;
t.z=function()
{
yo.m.z.call(this);
if(this.Tb&32)
{
var b=this.kc();
b&&this.g().c(b,"keyup",this.tf)
}

}
;
t.tf=function(b)
{
return 13==b.keyCode&&"key"==b.type||32==b.keyCode&&"keyup"==b.type?this.ke(b):32==b.keyCode
}
;

po("goog-button",function()
{
return new yo(k)
}
);
a.zo=function()
{

}
;
y(zo,ho);
ia(zo);
zo.prototype.o=function(b)
{
var c=b.J().o("span",this.rf(b).join(" "));
Ao(this,c,b.Ph);
return c
}
;
zo.prototype.n=function(b,c)
{
var c=zo.m.n.call(this,b,c),d=D.get(c),e=Bo;
z.contains(d,Co(this,Do))?e=Do:z.contains(d,Co(this,Eo))?e=Eo:z.contains(d,Co(this,Bo))&&(e=Bo);
b.Ph=e;
Pc(c,Wc.vq,e==Do?"mixed":e==Eo?"true":"false");
return c
}
;
zo.prototype.vc=function()
{
return Xc.TJ
}
;

a.Ao=function(b,c,d)
{
if(c)
{
var e=Co(b,d);
D.has(c,e)||(E.forEach(Fo,function(b)
{
b=Co(this,b);
D.enable(c,b,b==e)
}
,b),Pc(c,Wc.vq,d==Do?"mixed":d==Eo?"true":"false"))
}

}
;
zo.prototype.N=s("goog-checkbox");
a.Co=function(b,c)
{
var d=b.N();
if(c==Eo)return d+"-checked";
if(c==Bo)return d+"-unchecked";
if(c==Do)return d+"-undetermined";
f(Error("Invalid checkbox state: "+c))
}
;
a.Go=function(b,c,d)
{
d=d||zo.D();
ro.call(this,k,d,c);
this.Ph=la(b)?b:Bo
}
;
y(Go,ro);
a.Eo=j,a.Bo=n,a.Do=k,a.Fo=
{
vq:Eo,QY:Bo,SY:Do
}
;
t=Go.prototype;
t.Ga=k;
t.de=function()
{
return this.Ph==Eo
}
;
t.Rc=function(b)
{
b!=this.Ph&&(this.Ph=b,Ao(this.M,this.h(),this.Ph))
}
;
t.toggle=function()
{
this.Rc(this.Ph?Bo:Eo)
}
;

t.z=function()
{
Go.m.z.call(this);
if(this.zj)
{
var b=this.g();
this.Ga&&b.c(this.Ga,"click",this.tx).c(this.Ga,"mouseover",this.nd).c(this.Ga,"mouseout",this.gi).c(this.Ga,"mousedown",this.Le).c(this.Ga,"mouseup",this.mg);
b.c(this.h(),"click",this.tx)
}
if(this.Ga)
{
if(!this.Ga.id)
{
var b=this.Ga,c;
c=this.$d()+".lbl";
b.id=c
}
Pc(this.h(),Wc.Lu,this.Ga.id)
}

}
;
t.cb=function(b)
{
Go.m.cb.call(this,b);
if(b=this.h())b.tabIndex=this.isEnabled()?0:-1
}
;

t.tx=function(b)
{
b.stopPropagation();
var c=this.Ph?"uncheck":"check";
this.isEnabled()&&this.dispatchEvent(c)&&(b.preventDefault(),this.toggle(),this.dispatchEvent("change"))
}
;
t.tf=function(b)
{
32==b.keyCode&&this.tx(b);
return n
}
;
po("goog-checkbox",function()
{
return new Go
}
);
a.Ho=function()
{

}
;
y(Ho,no);
ia(Ho);
t=Ho.prototype;
t.o=function(b)
{
var c=
{
"class":"goog-inline-block "+this.rf(b).join(" "),title:b.lg()||""
}
;
return b.J().o("div",c,b.hb())
}
;
t.vc=function()
{
return Xc.uq
}
;
t.Vc=function(b)
{
return"DIV"==b.tagName
}
;
t.n=function(b,c)
{
D.add(c,"goog-inline-block");
return Ho.m.n.call(this,b,c)
}
;
t.W=s("");
t.N=s("goog-flat-button");
po("goog-flat-button",function()
{
return new yo(k,Ho.D())
}
);
a.Io=function()
{

}
;
y(Io,Ho);
ia(Io);
Io.prototype.N=s("goog-link-button");
po("goog-link-button",function()
{
return new yo(k,Io.D())
}
);
a.Ko=function(b,c,d,e,g)
{
function h(b)
{
b&&(b.tabIndex=0,Oc(b,l.vc()),D.add(b,"goog-zippy-header"),Jo(l,b),b&&l.TF.c(b,"keydown",l.eS))
}
M.call(this);
this.G=g||Ub();
this.Xh=this.G.h(b)||k;
this.Un=this.G.h(e||k);
this.zl=(this.Cy=qa(c)?c:k)||!c?k:this.G.h(c);
this.ld=d==j;
this.TF=new me(this);
this.az=new me(this);
var l=this;
h(this.Xh);
h(this.Un);
this.Ka(this.ld)
}
;
y(Ko,Hd);
t=Ko.prototype;
t.zj=j;
t.p=function()
{
Ko.m.p.call(this);
Vc(this.TF);
Vc(this.az)
}
;
t.vc=function()
{
return Xc.aC
}
;
t.aa=q("zl");

t.expand=u(63);
t.collapse=function()
{
this.Ka(n)
}
;
t.toggle=function()
{
this.Ka(!this.ld)
}
;
t.Ka=function(b)
{
this.zl?R(this.zl,b):b&&this.Cy&&(this.zl=this.Cy());
this.zl&&D.add(this.zl,"goog-zippy-content");
this.Un?(R(this.Xh,!b),R(this.Un,b)):this.Xh&&(D.enable(this.Xh,"goog-zippy-expanded",b),D.enable(this.Xh,"goog-zippy-collapsed",!b),Pc(this.Xh,Wc.RB,b));
this.ld=b;
this.dispatchEvent(new Lo("toggle",this,this.ld))
}
;
t.$b=q("ld");

t.Ep=function(b)
{
this.zj!=b&&((this.zj=b)?(Jo(this,this.Xh),Jo(this,this.Un)):this.az.Pc())
}
;
a.Jo=function(b,c)
{
c&&b.az.c(c,"click",b.dS)
}
;
t.eS=function(b)
{
if(13==b.keyCode||32==b.keyCode)this.toggle(),this.dispatchEvent(new id("action",this)),b.preventDefault(),b.stopPropagation()
}
;
t.dS=function()
{
this.toggle();
this.dispatchEvent(new id("action",this))
}
;
a.Lo=function(b,c,d)
{
id.call(this,b,c);
this.Wd=d
}
;
y(Lo,id);
a.Mo=function()
{
this.Bd=k
}
;
ia(Mo);
Mo.prototype.refresh=function()
{
return this.Bd&&"pending"===this.Bd.state()?this.Bd:this.Bd=$.post("/oauth/refresh",function(b)
{
var c=b.qq,b=b.sina;
E.extend(Tg,c);
E.extend(Sg,b);
b.id&&Y.dispatchEvent(new Tk("sina_callback",b));
c.id&&Y.dispatchEvent(new Tk("qq_callback",c))
}
)
}
;
a.Po=function(b,c)
{
M.call(this);
this.E_=k;
this.minHeight=c||66;
this.Nb=b;
this.g().c(this.Nb,["input","propertychange"],this.cq);
No(this);
Oo(this,j);
D.add(this.Nb,"zu-seamless-input-origin-element")
}
;
y(Po,Rk);
Po.prototype.cq=function()
{
return Oo(this)
}
;

a.Oo=function(b,c)
{
var d=b.Nb.value.replace(/[<>]/g,"a").replace(/[\n\r]/g,"<br>");
if(c||b.fT!==d)b.fT=d,b.mh&&(b.mh.innerHTML=d,d=b.mh.scrollHeight,d=d>b.minHeight?d:b.minHeight,b.Nb.style.height=Zf(d,j),b.Nb.style.minHeight=d+"px",b.dispatchEvent("change"))
}
,a.No=function(b)
{
if(!b.mh)
{
var c=$(b.Nb).css("white-space","pre");
if(0!==ug(b.Nb).width)
{
var d=K("div",
{
style:"overflow:hidden;
position:relative;
height:0;
"
}
,b.mh=K("div","zu-seamless-input-mock-element"));
document.body.appendChild(d);
$.each("fontFamily fontSize fontWeight fontStyle letterSpacing textTransform wordSpacing textIndent lineHeight width white-space".split(" "),
function(d,g)
{
b.mh.style[g]=c.css(g)
}
);
b.mh.innerHTML=b.Nb.value
}

}

}
;
a.Qo=function()
{

}
;
y(Qo,ho);
ia(Qo);
Qo.prototype.o=function(b)
{
return b.J().o("div",this.N())
}
;
Qo.prototype.n=function(b,c)
{
c.id&&lh(b,c.id);
if("HR"==c.tagName)
{
var d=c,c=this.o(b);
lc(c,d);
L(d)
}
else D.add(c,this.N());
return c
}
;
Qo.prototype.Na=ba();
Qo.prototype.N=s("goog-menuseparator");
a.Ro=function(b,c)
{
ro.call(this,k,b||Qo.D(),c);
uo(this,1,n);
uo(this,2,n);
uo(this,4,n);
uo(this,32,n);
this.ca=1
}
;
y(Ro,ro);
Ro.prototype.z=function()
{
Ro.m.z.call(this);
Oc(this.h(),"separator")
}
;
po("goog-menuseparator",function()
{
return new Ro
}
);
a.So=function()
{

}
;
ia(So);
t=So.prototype;
t.vc=ba();
t.o=function(b)
{
return b.J().o("div",this.rf(b).join(" "))
}
;
t.aa=aa();
t.Vc=function(b)
{
return"DIV"==b.tagName
}
;
t.n=function(b,c)
{
c.id&&lh(b,c.id);
var d=this.N(),e=n,g=D.get(c);
g&&z.forEach(g,function(c)
{
c==d?e=j:c&&this.uA(b,c,d)
}
,this);
e||D.add(c,d);
To(this,b,this.aa(c));
return c
}
;
t.uA=function(b,c,d)
{
c==d+"-disabled"?b.cb(n):c==d+"-horizontal"?b.Fp(Uo):c==d+"-vertical"&&b.Fp(Vo)
}
;

a.To=function(b,c,d)
{
if(d)for(var e=d.firstChild,g;
e&&e.parentNode==d;
)
{
g=e.nextSibling;
if(1==e.nodeType)
{
var h=b.fo(e);
h&&(h.e=e,c.isEnabled()||h.cb(n),c.H(h),h.n(e))
}
else(!e.nodeValue||""==La(e.nodeValue))&&d.removeChild(e);
e=g
}

}
;
t.fo=function(b)
{
a:
{
for(var c=D.get(b),d=0,e=c.length;
d<e;
d++)if(b=c[d]in oo?oo[c[d]]():k)break a;
b=k
}
return b
}
;
t.Oe=function(b)
{
b=b.h();
tg(b,j,B);
A&&(b.hideFocus=j);
var c=this.vc();
c&&Oc(b,c)
}
;
t.kc=function(b)
{
return b.h()
}
;
t.N=s("goog-container");

t.rf=function(b)
{
var c=this.N(),d=[c,b.zb==Uo?c+"-horizontal":c+"-vertical"];
b.isEnabled()||d.push(c+"-disabled");
return d
}
;
t.Yw=u(12);
a.Uo="horizontal",a.Vo="vertical";
a.Wo=function()
{
T.call(this);
this.xu=[]
}
;
y(Wo,T);
t=Wo.prototype;
t.Ob=le("ZH.ui.Accordion");
t.Ea=function(b)
{
this.xu.push(b);
b.Pt(this)
}
;
t.z=function()
{
Wo.m.z.call(this);
this.g().c(this,"toggle",this.rP)
}
;
t.rP=function(b)
{
z.forEach(this.xu,function(c)
{
b.target!==c&&c.$b()&&c.Ka(n,j)
}
,this)
}
;
t.p=function()
{
Wo.m.p.call(this);
z.forEach(this.xu,function(b)
{
b.F()
}
,this);
this.xu=[]
}
;
a.Xo=function(b,c)
{
var d=this,e=
{

}
;
E.extend(e,this.Q,c||
{

}
);
this.C=e;
var g=e.cd?
{
cd:v(e.cd,d)
}
:k;
g&&(g.Y=e.Y?v(e.Y,d):k);
this.M=g=new nm(e.nk,g);
var h=new jm(e.source,!e.kW);
this.yf=h;
var l=e.fy;
l||(l=new am(e.separator,e.dN,!!e.multiple,e.delay),l.Ai=function(b,c)
{
var g;
qa(e.select)&&(g=e.select.call(d,b,d.M.Ag[d.M.Fj]));
dm(this,la(g)?g:b.label||b.toString(),c);
return n
}
);
Ll.call(this,h,g,l);
l.ba=this;
l.dl(b);
b.setAttribute("autocomplete","off");
h.xi=function(b,c,g)
{
var h=g;
qa(e.format)&&(h=function(b,
c)
{
var h=e.format.call(d,c,b);
qa(e.filter)&&(h=e.filter.call(d,h,b));
g(b,h)
}
);
return jm.prototype.xi.call(this,b,c,h)
}
;
g.XH=function(b,c,d)
{
b=b.data;
d.innerHTML=b.HV?b.HV():b.label||b.toString()
}
;
this.Ub=b;
e.ie&&(this.ni=e.ie);
e.placeholder&&(this.le=new ql(b,e.placeholder));
this.addEventListener("suggestionsupdate",function()
{
this.dispatchEvent(this.tb()?"show":"hide")
}
)
}
;
y(Xo,tm);

Xo.prototype.Q=
{
source:"",ie:10,kW:n,filter:k,format:k,fy:k,delay:300,separator:k,dN:k,multiple:n,nk:k,S_:k,placeholder:"",cd:k,Y:k
}
;
a.$o=function(b)
{
var c;
return(c=Yo[this.C.source])||(c=Yo[Zo][b[0]])?c(b):b
}
;
Xo.prototype.Q.format=function(b,c)
{
return La(c)&&ma(b)&&ma(b[0])?z.map(b[0].slice(1),$o,this):[]
}
;
a.Zo="/autocomplete",a.Yo=
{

}
;

Yo[Zo]=
{
topic:function(b)
{
return
{
type:b[0],name:b[1],url_token:b[2],avatar:b[3],id:b[4],answers:b[6],alias:b[7],raw:b,value:b[4],label:b[1]
}

}
,question:function(b)
{
return
{
type:b[0],title:b[1],id:b[2],url_token:b[3],answers:b[4],is_star:!!b[5],raw:b,label:b[1],value:b[2]
}

}
,people:function(b)
{
return
{
type:b[0],fullname:b[1],url_token:b[2],avatar:b[3],id:b[4],headline:b[5],raw:b,label:b[1],value:b[4]
}

}
,search_link:function(b)
{
return
{
type:b[0],raw:b,label:b[1],value:b[1]
}

}

}
;

Yo["/topic/autocomplete"]=function(b)
{
return
{
type:b[0],name:b[1],url_token:b[2],avatar:b[3],id:b[4],followers:b[5],alias:b[6],label:b[1]
}

}
;
Yo["/question/autocomplete"]=function(b)
{
return
{
type:b[0],title:b[1],id:b[2],url_token:b[3],is_duplicated:Boolean(+b[4]),answer_count:b[5],raw:b,label:b[1],value:b[2]
}

}
;
a.ap=function(b,c,d,e)
{
am.call(this,b,c,d,e)
}
;
y(ap,am);
ap.prototype.Zc=ha;
ap.prototype.Zb=ha;
ap.prototype.Ai=s(n);
a.bp=!!window.DOMTokenList,a.cp=bp?function(b)
{
return b.classList
}
:function(b)
{
b=b.className;
return oa(b)&&b.match(/\S+/g)||[]
}
,a.dp=bp?function(b,c)
{
return b.classList.contains(c)
}
:function(b,c)
{
return z.contains(cp(b),c)
}
,a.ep=bp?function(b,c)
{
b.classList.add(c)
}
:function(b,c)
{
dp(b,c)||(b.className+=0<b.className.length?" "+c:c)
}
,a.fp=bp?function(b,c)
{
b.classList.remove(c)
}
:function(b,c)
{
dp(b,c)&&(b.className=z.filter(cp(b),function(b)
{
return b!=c
}
).join(" "))
}
;
a.gp=function(b,c)
{
T.call(this,c);
this.Ga=b||""
}
;
y(gp,T);
gp.prototype.hg=k;
a.hp="placeholder"in document.createElement("input");
t=gp.prototype;
t.ro=n;
t.o=function()
{
this.e=this.J().o("input",
{
type:"text"
}
)
}
;
t.Z=function(b)
{
gp.m.Z.call(this,b);
this.Ga||(this.Ga=b.getAttribute("label")||"");
Lc(Tb(b))==b&&(this.ro=j,fp(this.h(),this.en));
hp?this.h().placeholder=this.Ga:Pc(this.h(),Wc.xq,this.Ga)
}
;

t.z=function()
{
gp.m.z.call(this);
var b=new me(this);
b.c(this.h(),"focus",this.JE);
b.c(this.h(),"blur",this.qx);
hp?this.P=b:(B&&b.c(this.h(),["keypress","keydown","keyup"],this.BO),b.c(cc(Tb(this.h())),"load",this.vP),this.P=b,ip(this));
this.Oh();
this.h().PQ=this
}
;
t.Za=function()
{
gp.m.Za.call(this);
this.P&&(this.P.F(),this.P=k);
this.h().PQ=k
}
;
a.ip=function(b)
{
!b.KN&&(b.P&&b.h().form)&&(b.P.c(b.h().form,"submit",b.DO),b.KN=j)
}
;
t.p=function()
{
gp.m.p.call(this);
this.P&&(this.P.F(),this.P=k)
}
;
t.en="label-input-label";

t.JE=function()
{
this.ro=j;
fp(this.h(),this.en);
if(!hp&&!jp(this)&&!this.TP)
{
var b=this,c=function()
{
b.h().value=""
}
;
A?Ld(c,10):c()
}

}
;
t.qx=function()
{
hp||(this.P.va(this.h(),"click",this.JE),this.hg=k);
this.ro=n;
this.Oh()
}
;
t.BO=function(b)
{
27==b.keyCode&&("keydown"==b.type?this.hg=this.h().value:"keypress"==b.type?this.h().value=this.hg:"keyup"==b.type&&(this.hg=k),b.preventDefault())
}
;
t.DO=function()
{
jp(this)||(this.h().value="",Ld(this.dO,10,this))
}
;
t.dO=function()
{
jp(this)||(this.h().value=this.Ga)
}
;

t.vP=function()
{
this.Oh()
}
;
a.jp=function(b)
{
return!!b.h()&&""!=b.h().value&&b.h().value!=b.Ga
}
;
t.clear=function()
{
this.h().value="";
this.hg!=k&&(this.hg="")
}
;
t.reset=function()
{
jp(this)&&(this.clear(),this.Oh())
}
;
t.ta=function(b)
{
this.hg!=k&&(this.hg=b);
this.h().value=b;
this.Oh()
}
;
t.W=function()
{
return this.hg!=k?this.hg:jp(this)?this.h().value:""
}
;

t.Oh=function()
{
hp?this.h().placeholder!=this.Ga&&(this.h().placeholder=this.Ga):(ip(this),Pc(this.h(),Wc.xq,this.Ga));
if(jp(this))b=this.h(),fp(b,this.en);
else
{
if(!this.TP&&!this.ro)
{
var b=this.h();
ep(b,this.en)
}
hp||Ld(this.hU,10,this)
}

}
;
t.cb=function(b)
{
this.h().disabled=!b;
var c=this.h(),d=this.en+"-disabled";
!b?ep(c,d):fp(c,d)
}
;
t.isEnabled=function()
{
return!this.h().disabled
}
;
t.hU=function()
{
this.h()&&(!jp(this)&&!this.ro)&&(this.h().value=this.Ga)
}
;
a.lp=function(b,c,d)
{
M.call(this);
this.$c=d||"搜索话题";
this.X=c;
this.data=b||[];
this.status=kp;
this.VH="/topic/unbind";
this.iC="/topic/bind";
this.isEnabled=j;
this.ss='<a class="zm-tag-editor-tip-link" href="#" name="edit">帮忙给这个问题选个话题吧，好让别人来回答</a><a name="edit" class="zu-edit-button" href="#"><i class="zu-edit-button-icon"></i>添加</a>';
this.ie=10;
this.at=n;
this.Ts=Infinity;
this.Ws=0
}
;
y(lp,Rk);
a.kp="view",a.mp="零一二三四五六七八九十".split("");
t=lp.prototype;

t.n=function(b)
{
this.e=b;
this.Ze=J("zm-tag-editor-labels",this.e);
this.at&&(this.data=this.Ez());
np(this);
this.Be();
this.Da()
}
;
t.Ez=function()
{
var b=Xb("zm-item-tag",this.Ze);
return z.map(b,function(b)
{
var d=[La(b.innerHTML),b.getAttribute("data-token"),k,b.getAttribute("data-topicid")];
d.WV=!!b.getAttribute("data-uneditable");
return d
}
)
}
;

a.np=function(b)
{
if(b.data.length)
{
var c=z.map(b.data,function(b)
{
return ik(b,"",k,"b")
}
,b);
b.isEnabled&&c.push(mk());
b.Ze.innerHTML=c.join("")
}
else b.isEnabled&&(b.Ze.innerHTML=b.ss)
}
;

t.Xn=function()
{
this.gc||(this.gc=K("div","zm-tag-editor-editor",[this.Tn=K("div","zg-section zg-clear"),this.kf=K("div","zg-section zm-tag-editor-command-buttons-wrap",[this.Qa=K("input",
{
"class":"zg-form-text-input zg-mr15",type:"text"
}
),K("a",
{
"class":"zg-mr15 zg-btn-blue",href:"#",name:"add",style:"display:none;
"
}
,"添加"),this.lE=K("a",
{
href:"#",name:"close"
}
,"完成")]),this.Us=K("div",
{
className:"zm-tag-editor-maxcount zg-section",style:"display:none;
"
}
,[K("span",
{

}
,"最多只能为一个问题绑定 "+this.Ts+" 个话题"),
K("a",
{
href:"#",name:"close"
}
,"完成")])]),mc(this.gc,this.Ze),this.$c&&(this.wy=new gp(this.$c),this.wy.n(this.Qa),this.Qa.title=this.$c),this.uf(this.kf))
}
;
t.uf=function(b,c)
{
this.L=new go(c||"/topic/autocomplete",this.Qa,k,k,b,j);
this.L.Jf(j);
this.L.ni=this.ie;
this.L.Hp(this.sk());
this.L.Ew=[this.$c];
this.g().c(this.L,"select",this.Zo);
this.g().c(this.L,Ll.Hh.Ri,this.$u)
}
;

t.sk=function()
{
return v(function(b)
{
return z.filter(b,function(b)
{
return z.every(this.data,function(d)
{
return d[0]!==b[1]
}
)
}
,this)
}
,this)
}
;
t.$u=function()
{
1<this.L.bb.length&&!this.L.bb[0][4]&&Ol(this.L)
}
;
t.Da=function()
{
this.g().c(this.e,"click",this.ga);
Ki&&this.g().c(Ki,"anon_change",this.xj)
}
;
t.xj=function(b)
{
b.lb?D.add(this.e,"zm-tag-editor-disabled"):D.remove(this.e,"zm-tag-editor-disabled")
}
;

t.ga=function(b)
{
var c=this.pf(b.target);
if(c&&c.name)switch(b.preventDefault(),c.name)
{
case "edit":if(!S.xe)
{
ll.D().w(j);
break
}
this.he(j);
break;
case "add":(b=jk(!this.Qa.value?"":this.Qa.value.replace(/<[^>]+>/g,"")))&&b!==this.Qa.title&&this.af("",b);
break;
case "close":this.he(n);
break;
case "remove":this.hH(c)
}

}
;
t.he=function(b)
{
b&&this.dispatchEvent("start_editing");
this.status=b?"edit":kp;
this.Xn();
this.We();
this.Be();
op(this)
}
;

t.hH=function(b)
{
var c=b.id.split("-")[1],d=tc(b).innerHTML;
this.Ws&&this.data.length<=this.Ws?U("请至少绑定"+mp[this.Ws]+"个话题"):(this.data=z.filter(this.data,function(b)
{
return!c?b[1]!==d:String(b[3])!==c
}
),this.ip(c))
}
;
t.ip=function(b)
{
if(!this.At||!this.At.Gb())
{
this.At=new V(j);
var c=new Si;
c.add("qid",this.X).add("question_id",this.X).add("topic_id",b);
P(this.g(),this.At,"complete",this.dP);
this.At.ajax(this.VH,c.toString())
}

}
;

t.dP=function(b)
{
b=Ie(b.target);
b.r?U(b.msg):(this.dispatchEvent("remove_tag"),np(this),this.We(),op(this))
}
;
t.Be=function()
{
this.status===kp?(R(this.Ze,j),this.gc&&R(this.gc,n)):(R(this.Ze,n),this.gc&&this.isEnabled&&R(this.gc,j),this.Us&&R(this.Us,n))
}
;
t.af=function(b,c)
{
this.jh||(this.dispatchEvent("add_tag"),this.jh=j,this.xhr=new V(j),P(this.g(),this.xhr,"complete",this.av),this.xhr.ajax(this.iC,"qid="+this.X+"&question_id="+this.X+"&topic_id="+b+"&topic_text="+encodeURIComponent(c)))
}
;

t.Zo=function()
{
var b="",c="",d=z.slice(this.L.kg(),1);
3<d.length?(b=d[3],c=d[0]):c=d[1];
var e=n;
z.forEach(this.data,function(d)
{
if(d[3]&&String(d[3])===b||d[0]===c)e=j
}
);
e||this.af(b,c)
}
;
t.av=function()
{
this.jh=n;
var b=Ie(this.xhr);
this.vk(b);
op(this)
}
;
t.vk=function(b)
{
var c=k;
b&&b.r?b.notify?Vk(b.notify):U(b.msg,2E3):(4<b.length&&Vk(b[4]),this.pI=c=b,this.data.push(c),np(this),this.We(),this.Qa.value="",this.dispatchEvent("select"))
}
;
t.sE=function(b)
{
return ik(b,"nor",n)
}
;

t.We=function()
{
var b=z.map(this.data,function(b)
{
return['<span class="zm-tag-editor-edit-item">',this.sE(b),b.WV?"":'<a id="rmid-'+b[3]+'" href="#" class="zg-r3px zm-tag-editor-remove-button" name="remove"></a>',"</span>"].join("")
}
,this);
this.Tn.innerHTML=b.join("")
}
;
t.kg=q("pI");
t.cb=function(b)
{
this.isEnabled=b;
this.status=kp;
this.Be()
}
;

a.op=function(b)
{
var c=b.data.length>=b.Ts;
b.kf&&R(b.kf,!c);
b.Us&&R(b.Us,c)
}
,a.pp=function(b)
{
lp.call(this);
this.ss="";
this.$c=b||"";
this.Ts=this.ie=5;
this.rq=$("#zh-question-suggest-title-content")
}
;
y(pp,lp);
t=pp.prototype;

t.n=function(b)
{
pp.m.n.call(this,b);
this.he(j);
z.forEach(Wb("a",k,b),function(b)
{
R(b,n)
}
);
this.g().c(this.Qa,"focus",function()
{
this.rq.val()&&!this.ZD&&(this.ZD=j,this.vB());
this.placeholder&&(this.placeholder.uk("搜索话题"),tl(this.placeholder))
}
);
this.SF=new Vl;
this.SF.attach(this.Qa);
this.g().c(this.SF,"key",function(b)
{
8===b.keyCode&&(1===this.Qa.value.length&&(this.GC=j,this.NL=setTimeout(v(function()
{
this.GC=n;
clearTimeout(this.NL)
}
,this))),!this.Qa.value.length&&!this.GC&&(this.data.pop(),this.We(),
this.dispatchEvent("remove_tag")))
}
);
this.nV=new Nm(this.vB,2E3,this);
this.g().c(this.rq[0],"keyup",function()
{
var b=this.rq.val();
this.au!==b&&(this.nV.fire(),this.au=b)
}
);
this.g().c(this,["remove_tag","add_tag"],function()
{
qp(this);
0<this.data.length&&this.placeholder&&(this.placeholder.uk("搜索话题"),tl(this.placeholder));
5<=this.data.length?(this.cb(n),this.nq.show(),this.placeholder&&this.placeholder.hide(),this.Eu.hide()):(this.cb(j),this.nq.hide(),this.placeholder&&this.placeholder.show(),this.Eu.show(),
this.nq.removeClass("light"))
}
)
}
;
t.sk=function()
{
return v(function(b)
{
return z.filter(b,function(b)
{
return z.every(this.data,function(d)
{
return d[1]!==b[1]
}
)
}
,this)
}
,this)
}
;
t.ip=function()
{
this.dispatchEvent("remove_tag");
np(this);
this.We()
}
;

t.Xn=function()
{
this.gc||(pp.m.Xn.call(this),D.add(this.gc,"zg-clear"),D.set(this.Tn,"zg-inline"),D.add(this.kf,"zg-left"),D.remove(this.kf,"zg-section"),D.set(this.Qa,"zu-question-suggest-topic-input"),D.add(this.Qa,"label-input-label"),this.tq=$("<div class='sug-con zg-clear' style='display:none;
'></div>").append("<span class='zg-gray-normal zg-left tip'>推荐添加</span>").append(this.NJ=$("<span class='sugs zg-clear zg-inline'></span>")).append(this.MB=$("<img src='/static/img/spinner2.gif' style=''/>")),
this.tq.insertAfter(this.e),this.tq.on("click","a[name='add']",v(function(b)
{
b=b.currentTarget;
if(5>this.data.length)this.af($(b).attr("data-id"),$(b).attr("data-text"));
else
{
this.nq.addClass("light");
var c=$(this.gc);
c.parent().addClass("sandbox");
c.addClass("animated shake");
setTimeout(function()
{
c.removeClass("animated shake");
c.parent().removeClass("sandbox");
qa(i)&&i()
}
,1E3)
}

}
,this)),this.Eu=$("<label for='topic' class='zg-icon search-icon'></label>"),$(this.kf).append(this.Eu),this.placeholder=
new ql(this.Qa,
{
text:"搜索话题",FC:j
}
),$(this.kf).append(this.nq=$("<label class='err-tip' style='display:none;
'>最多添加五个话题</label>")),this.g().c(this.gc,"click",this.UV))
}
;
t.UV=function(b)
{
sk(this.e,b.target)||(b=J("zu-question-suggest-topic-input",this.gc),rg(b)&&b.focus())
}
;

t.vB=function()
{
this.ZD&&(this.au=this.rq.val(),8>this.au.length?(this.Sp=[],qp(this)):(this.Tp&&this.Tp.abort(),this.Tp=new V(n),this.g().c(this.Tp,"success",this.HS),this.Tp.ajax("/topic-question/autocomplete?token="+this.au+"&max_matches=5&use_similar=0","GET"),this.MB.show()))
}
;
t.HS=function()
{
this.Sp=Ie(this.Tp)[0].slice(1);
qp(this)
}
;

a.qp=function(b)
{
var c;
c=b.Sp?z.filter(b.Sp,function(b)
{
return z.every(this.data,function(c)
{
return c[1]!==b[1]
}
)
}
,b):[];
b.tq.show();
(!c||0===c.length)&&b.tq.hide();
var d="";
c=z.map(c,function(b)
{
return"<a href='javascript:;
' name='add' data-id='"+b[4]+"' data-text='"+b[1]+"' class='zg-r3px zm-item-tag'><span>"+b[1]+"</span></a>"
}
);
d+=c.join("");
b.NJ.html(d);
b.MB.hide()
}
;

t.We=function()
{
var b=[];
z.forEach(this.data,function(c)
{
b.push(['<div class="zm-tag-editor-edit-item"><span>',c[0],'</span><a id="rmid-',c[3],'" href="#" class="zg-r3px zm-tag-editor-remove-button" name="remove"></a></div>'].join(""))
}
,this);
this.Tn.innerHTML=b.join("")
}
;
t.reset=function()
{
this.data=[];
np(this);
this.We()
}
;
t.hH=function(b)
{
var c=b.id.split("-")[1],d=tc(b).innerHTML;
this.data=z.filter(this.data,function(b)
{
return!c?b[1]!==d:String(b[3])!==c
}
);
this.ip(c)
}
;

t.af=function(b,c)
{
var d=[c,c,"",b];
this.pI=d;
this.data.push(d);
np(this);
this.We();
this.Qa.value="";
this.dispatchEvent("select");
this.dispatchEvent("add_tag")
}
;
t.cb=function(b)
{
this.Qa&&R(this.Qa,b)
}
;
a.rp=function()
{
M.call(this)
}
;
y(rp,M);
a.sp=le("goog.dom.SavedRange");
rp.prototype.restore=u(35);
a.tp=function(b,c,d,e,g)
{
this.Qc=!!c;
b&&this.dd(b,e);
this.depth=g!=i?g:this.cc||0;
this.Qc&&(this.depth*=-1);
this.fr=!d
}
;
y(tp,Nd);
t=tp.prototype;
t.fa=k;
t.cc=0;
t.TA=n;
t.dd=function(b,c,d)
{
if(this.fa=b)this.cc=pa(c)?c:1!=this.fa.nodeType?0:this.Qc?-1:1;
pa(d)&&(this.depth=d)
}
;
t.Pg=function(b)
{
this.fa=b.fa;
this.cc=b.cc;
this.depth=b.depth;
this.Qc=b.Qc;
this.fr=b.fr
}
;
t.clone=function()
{
return new tp(this.fa,this.Qc,!this.fr,this.cc,this.depth)
}
;
t.Op=u(16);

t.next=function()
{
var b;
if(this.TA)
{
(!this.fa||this.fr&&0==this.depth)&&f(O.fb);
b=this.fa;
var c=this.Qc?-1:1;
if(this.cc==c)
{
var d=this.Qc?b.lastChild:b.firstChild;
d?this.dd(d):this.dd(b,-1*c)
}
else(d=this.Qc?b.previousSibling:b.nextSibling)?this.dd(d):this.dd(b.parentNode,-1*c);
this.depth+=this.cc*(this.Qc?-1:1)
}
else this.TA=j;
(b=this.fa)||f(O.fb);
return b
}
;
t.dg=function(b)
{
return b.fa==this.fa&&(!this.fa||b.cc==this.cc)
}
;

t.splice=function(b)
{
var c=this.fa,d=this.Qc?1:-1;
this.cc==d&&(this.cc=-1*d,this.depth+=this.cc*(this.Qc?-1:1));
this.Qc=!this.Qc;
tp.prototype.next.call(this);
this.Qc=!this.Qc;
for(var d=na(arguments[0])?arguments[0]:arguments,e=d.length-1;
0<=e;
e--)mc(d[e],c);
L(c)
}
;
a.up=function()
{

}
,a.vp=function(b)
{
if(b.getSelection)return b.getSelection();
var b=b.document,c=b.selection;
if(c)
{
try
{
var d=c.createRange();
if(d.parentElement)
{
if(d.parentElement().document!=b)return k
}
else if(!d.length||d.item(0).document!=b)return k
}
catch(e)
{
return k
}
return c
}
return k
}
,a.wp=function(b)
{
for(var c=[],d=0,e=b.wj();
d<e;
d++)c.push(b.Je(d));
return c
}
;
t=up.prototype;
t.Db=u(54);

a.xp=function(b)
{
return b.li()?b.ia():b.V()
}
,a.yp=function(b)
{
return b.li()?b.V():b.ia()
}
,a.zp=function(b)
{
return b.li()?b.sa():b.Ia()
}
;
t.li=s(n);
t.wa=function()
{
return Tb(A?this.wc():this.V())
}
;
t.Sa=function()
{
return cc(this.wa())
}
;
t.containsNode=function(b,c)
{
return this.Mg(Ap(b),c)
}
;
t.zg=u(39);
a.Bp=function(b,c)
{
tp.call(this,b,c,j)
}
;
y(Bp,tp);
a.Cp=function()
{

}
;
y(Cp,up);
Cp.prototype.Mg=function(b,c)
{
var d=wp(this),e=wp(b);
return(c?z.some:z.every)(e,function(b)
{
return z.some(d,function(d)
{
return d.Mg(b,c)
}
)
}
)
}
;
Cp.prototype.insertNode=function(b,c)
{
c?lc(b,this.V()):mc(b,this.ia());
return b
}
;
Cp.prototype.wh=u(9);
a.Dp=function(b,c,d,e,g)
{
var h;
b&&(this.ua=b,this.Ba=c,this.ra=d,this.za=e,1==b.nodeType&&"BR"!=b.tagName&&(b=b.childNodes,(c=b[c])?(this.ua=c,this.Ba=0):(b.length&&(this.ua=z.Cf(b)),h=j)),1==d.nodeType&&((this.ra=d.childNodes[e])?this.za=0:this.ra=d));
tp.call(this,g?this.ra:this.ua,g,j);
if(h)try
{
this.next()
}
catch(l)
{
l!=O.fb&&f(l)
}

}
;
y(Dp,Bp);
t=Dp.prototype;
t.ua=k;
t.ra=k;
t.Ba=0;
t.za=0;
t.vj=u(60);
t.tj=u(42);
t.V=q("ua");
t.ia=q("ra");
t.Go=function()
{
return this.TA&&this.fa==this.ra&&(!this.za||1!=this.cc)
}
;

t.next=function()
{
this.Go()&&f(O.fb);
return Dp.m.next.call(this)
}
;
t.Op=u(15);
t.Pg=function(b)
{
this.ua=b.ua;
this.ra=b.ra;
this.Ba=b.Ba;
this.za=b.za;
this.wf=b.wf;
Dp.m.Pg.call(this,b)
}
;
t.clone=function()
{
var b=new Dp(this.ua,this.Ba,this.ra,this.za,this.wf);
b.Pg(this);
return b
}
;
a.Ep=function()
{

}
;
Ep.prototype.Mg=function(b,c)
{
var d=c&&!b.isCollapsed(),e=b.O;
try
{
return d?0<=this.Ee(e,0,1)&&0>=this.Ee(e,1,0):0<=this.Ee(e,0,0)&&0>=this.Ee(e,1,1)
}
catch(g)
{
return A||f(g),n
}

}
;
Ep.prototype.containsNode=function(b,c)
{
return this.Mg(Fp(b),c)
}
;
Ep.prototype.Yg=u(25);
Ep.prototype.gd=function()
{
return new Dp(this.V(),this.sa(),this.ia(),this.Ia())
}
;
a.Gp=function(b)
{
this.O=b
}
;
y(Gp,Ep);
a.Ip=function(b)
{
var c=Tb(b).createRange();
if(3==b.nodeType)c.setStart(b,0),c.setEnd(b,b.length);
else if(Hp(b))
{
for(var d,e=b;
(d=e.firstChild)&&Hp(d);
)e=d;
c.setStart(e,0);
for(e=b;
(d=e.lastChild)&&Hp(d);
)e=d;
c.setEnd(e,1==e.nodeType?e.childNodes.length:e.length)
}
else d=b.parentNode,b=z.indexOf(d.childNodes,b),c.setStart(d,b),c.setEnd(d,b+1);
return c
}
,a.Jp=function(b,c,d,e)
{
var g=Tb(b).createRange();
g.setStart(b,c);
g.setEnd(d,e);
return g
}
;
t=Gp.prototype;
t.clone=function()
{
return new this.constructor(this.O.cloneRange())
}
;

t.wc=function()
{
return this.O.commonAncestorContainer
}
;
t.V=function()
{
return this.O.startContainer
}
;
t.sa=function()
{
return this.O.startOffset
}
;
t.ia=function()
{
return this.O.endContainer
}
;
t.Ia=function()
{
return this.O.endOffset
}
;
t.Ee=function(b,c,d)
{
return this.O.compareBoundaryPoints(1==d?1==c?fa.Range.START_TO_START:fa.Range.START_TO_END:1==c?fa.Range.END_TO_START:fa.Range.END_TO_END,b)
}
;
t.isCollapsed=function()
{
return this.O.collapsed
}
;
t.Lc=u(30);
t.be=u(47);

t.select=function(b)
{
var c=cc(Tb(this.V()));
this.wp(c.getSelection(),b)
}
;
t.wp=function(b)
{
b.removeAllRanges();
b.addRange(this.O)
}
;
t.bd=u(5);
t.insertNode=function(b,c)
{
var d=this.O.cloneRange();
d.collapse(c);
d.insertNode(b);
d.detach();
return b
}
;
t.wh=u(8);
t.collapse=function(b)
{
this.O.collapse(b)
}
;
a.Kp=function(b)
{
this.O=b
}
;
y(Kp,Gp);
Kp.prototype.wp=function(b,c)
{
!c||this.isCollapsed()?Kp.m.wp.call(this,b,c):(b.collapse(this.ia(),this.Ia()),b.extend(this.V(),this.sa()))
}
;
a.Lp=function(b,c)
{
this.O=b;
this.xr=c
}
;
y(Lp,Ep);
a.Mp=le("goog.dom.browserrange.IeRange"),a.Np=function(b)
{
var c=Tb(b).body.createTextRange();
if(1==b.nodeType)c.moveToElementText(b),Hp(b)&&!b.childNodes.length&&c.collapse(n);
else
{
for(var d=0,e=b;
e=e.previousSibling;
)
{
var g=e.nodeType;
if(3==g)d+=e.length;
else if(1==g)
{
c.moveToElementText(e);
break
}

}
e||c.moveToElementText(b.parentNode);
c.collapse(!e);
d&&c.move("character",d);
c.moveEnd("character",b.length)
}
return c
}
;
t=Lp.prototype;
t.wg=k;
t.ua=k;

t.ra=k;
t.Ba=-1;
t.za=-1;
t.clone=function()
{
var b=new Lp(this.O.duplicate(),this.xr);
b.wg=this.wg;
b.ua=this.ua;
b.ra=this.ra;
return b
}
;
t.De=function()
{
this.wg=this.ua=this.ra=k;
this.Ba=this.za=-1
}
;

t.wc=function()
{
if(!this.wg)
{
var b=this.O.text,c=this.O.duplicate(),d=b.replace(/ +$/,"");
(d=b.length-d.length)&&c.moveEnd("character",-d);
d=c.parentElement();
c=Ia(c.htmlText).length;
if(this.isCollapsed()&&0<c)return this.wg=d;
for(;
c>Ia(d.outerHTML).length;
)d=d.parentNode;
for(;
1==d.childNodes.length&&d.innerText==(3==d.firstChild.nodeType?d.firstChild.nodeValue:d.firstChild.innerText)&&Hp(d.firstChild);
)d=d.firstChild;
0==b.length&&(d=Op(this,d));
this.wg=d
}
return this.wg
}
;

a.Op=function(b,c)
{
for(var d=c.childNodes,e=0,g=d.length;
e<g;
e++)
{
var h=d[e];
if(Hp(h))
{
var l=Np(h),m=l.htmlText!=h.outerHTML;
if(b.isCollapsed()&&m?0<=b.Ee(l,1,1)&&0>=b.Ee(l,1,0):b.O.inRange(l))return Op(b,h)
}

}
return c
}
;
t.V=function()
{
this.ua||(this.ua=Pp(this,1),this.isCollapsed()&&(this.ra=this.ua));
return this.ua
}
;
t.sa=function()
{
0>this.Ba&&(this.Ba=Qp(this,1),this.isCollapsed()&&(this.za=this.Ba));
return this.Ba
}
;

t.ia=function()
{
if(this.isCollapsed())return this.V();
this.ra||(this.ra=Pp(this,0));
return this.ra
}
;
t.Ia=function()
{
if(this.isCollapsed())return this.sa();
0>this.za&&(this.za=Qp(this,0),this.isCollapsed()&&(this.Ba=this.za));
return this.za
}
;
t.Ee=function(b,c,d)
{
return this.O.compareEndPoints((1==c?"Start":"End")+"To"+(1==d?"Start":"End"),b)
}
;

a.Pp=function(b,c,d)
{
d=d||b.wc();
if(!d||!d.firstChild)return d;
for(var e=1==c,g=0,h=d.childNodes.length;
g<h;
g++)
{
var l=e?g:h-g-1,m=d.childNodes[l],p;
try
{
p=Fp(m)
}
catch(r)
{
continue
}
var x=p.O;
if(b.isCollapsed())if(Hp(m))
{
if(p.Mg(b))return Pp(b,c,m)
}
else
{
if(0==b.Ee(x,1,1))
{
b.Ba=b.za=l;
break
}

}
else
{
if(b.Mg(p))
{
if(!Hp(m))
{
e?b.Ba=l:b.za=l+1;
break
}
return Pp(b,c,m)
}
if(0>b.Ee(x,1,0)&&0<b.Ee(x,0,1))return Pp(b,c,m)
}

}
return d
}
,a.Qp=function(b,c)
{
var d=1==c,e=d?b.V():b.ia();
if(1==e.nodeType)
{
for(var e=e.childNodes,
g=e.length,h=d?1:-1,l=d?0:g-1;
0<=l&&l<g;
l+=h)
{
var m=e[l];
if(!Hp(m)&&0==b.O.compareEndPoints((1==c?"Start":"End")+"To"+(1==c?"Start":"End"),Fp(m).O))return d?l:l+1
}
return-1==l?0:l
}
g=b.O.duplicate();
h=Np(e);
g.setEndPoint(d?"EndToEnd":"StartToStart",h);
g=g.text.length;
return d?e.length-g:g
}
;
t.pg=u(68);
t.isCollapsed=function()
{
return 0==this.O.compareEndPoints("StartToEnd",this.O)
}
;
t.Lc=u(29);
t.be=u(46);
t.select=function()
{
this.O.select()
}
;
t.bd=u(4);

a.Rp=function(b,c,d)
{
var e;
e=e||Ub(b.parentElement());
var g;
1!=c.nodeType&&(g=j,c=e.o("DIV",k,c));
b.collapse(d);
var d=e||Ub(b.parentElement()),h,l=h=c.id;
h||(h=c.id=fb());
b.pasteHTML(c.outerHTML);
(c=d.h(h))&&(l||c.removeAttribute("id"));
g&&(b=c.firstChild,e.BN(c),c=b);
return c
}
;
t.insertNode=function(b,c)
{
var d=Rp(this.O.duplicate(),b,c);
this.De();
return d
}
;
t.wh=u(7);
t.collapse=function(b)
{
this.O.collapse(b);
b?(this.ra=this.ua,this.za=this.Ba):(this.ua=this.ra,this.Ba=this.za)
}
;
a.Sp=function(b)
{
this.O=b
}
;
y(Sp,Gp);
Sp.prototype.wp=function(b)
{
b.collapse(this.V(),this.sa());
(this.ia()!=this.V()||this.Ia()!=this.sa())&&b.extend(this.ia(),this.Ia());
0==b.rangeCount&&b.addRange(this.O)
}
;
a.Tp=function(b)
{
this.O=b
}
;
y(Tp,Gp);
Tp.prototype.Ee=function(b,c,d)
{
return Gb("528")?Tp.m.Ee.call(this,b,c,d):this.O.compareBoundaryPoints(1==d?1==c?fa.Range.START_TO_START:fa.Range.END_TO_START:1==c?fa.Range.START_TO_END:fa.Range.END_TO_END,b)
}
;
Tp.prototype.wp=function(b,c)
{
b.removeAllRanges();
c?b.setBaseAndExtent(this.ia(),this.Ia(),this.V(),this.sa()):b.setBaseAndExtent(this.V(),this.sa(),this.ia(),this.Ia())
}
;
a.Up=function(b)
{
return A&&!Ib(9)?new Lp(b,Tb(b.parentElement())):C?new Tp(b):B?new Kp(b):tb?new Sp(b):new Gp(b)
}
,a.Fp=function(b)
{
if(A&&!Ib(9))
{
var c=new Lp(Np(b),Tb(b));
if(Hp(b))
{
for(var d,e=b;
(d=e.firstChild)&&Hp(d);
)e=d;
c.ua=e;
c.Ba=0;
for(e=b;
(d=e.lastChild)&&Hp(d);
)e=d;
c.ra=e;
c.za=1==e.nodeType?e.childNodes.length:e.length;
c.wg=b
}
else c.ua=c.ra=c.wg=b.parentNode,c.Ba=z.indexOf(c.wg.childNodes,b),c.za=c.Ba+1;
b=c
}
else b=C?new Tp(Ip(b)):B?new Kp(Ip(b)):tb?new Sp(Ip(b)):new Gp(Ip(b));
return b
}
,a.Hp=
function(b)
{
return ic(b)||3==b.nodeType
}
;
a.Vp=function()
{

}
;
y(Vp,up);
a.Wp=function(b,c)
{
var d=new Vp;
d.Xi=b;
d.wf=!!c;
return d
}
,a.Yp=function(b,c,d,e)
{
var g=new Vp;
g.wf=Xp(b,c,d,e);
if("BR"==b.tagName)var h=b.parentNode,c=z.indexOf(h.childNodes,b),b=h;
"BR"==d.tagName&&(h=d.parentNode,e=z.indexOf(h.childNodes,d),d=h);
g.wf?(g.ua=d,g.Ba=e,g.ra=b,g.za=c):(g.ua=b,g.Ba=c,g.ra=d,g.za=e);
return g
}
;
t=Vp.prototype;
t.Xi=k;
t.ua=k;
t.Ba=k;
t.ra=k;
t.za=k;
t.wf=n;

t.clone=function()
{
var b=new Vp;
b.Xi=this.Xi;
b.ua=this.ua;
b.Ba=this.Ba;
b.ra=this.ra;
b.za=this.za;
b.wf=this.wf;
return b
}
;
t.fi=s("text");
t.Zd=function()
{
return Zp(this).O
}
;
t.De=function()
{
this.ua=this.Ba=this.ra=this.za=k
}
;
t.wj=s(1);
t.Je=function()
{
return this
}
;

a.Zp=function(b)
{
var c;
if(!(c=b.Xi))
{
c=b.V();
var d=b.sa(),e=b.ia(),g=b.Ia();
if(A&&!Ib(9))
{
var h=c,l=d,m=e,p=g,r=n;
1==h.nodeType&&(l>h.childNodes.length&&Mp.log(ce,"Cannot have startOffset > startNode child count",i),l=h.childNodes[l],r=!l,h=l||h.lastChild||h,l=0);
var x=Np(h);
l&&x.move("character",l);
h==m&&l==p?x.collapse(j):(r&&x.collapse(n),r=n,1==m.nodeType&&(p>m.childNodes.length&&Mp.log(ce,"Cannot have endOffset > endNode child count",i),m=(l=m.childNodes[p])||m.lastChild||m,p=0,r=!l),h=Np(m),
h.collapse(!r),p&&h.moveEnd("character",p),x.setEndPoint("EndToEnd",h));
p=new Lp(x,Tb(c));
p.ua=c;
p.Ba=d;
p.ra=e;
p.za=g;
c=p
}
else c=C?new Tp(Jp(c,d,e,g)):B?new Kp(Jp(c,d,e,g)):tb?new Sp(Jp(c,d,e,g)):new Gp(Jp(c,d,e,g));
c=b.Xi=c
}
return c
}
;
t.wc=function()
{
return Zp(this).wc()
}
;
t.V=function()
{
return this.ua||(this.ua=Zp(this).V())
}
;
t.sa=function()
{
return this.Ba!=k?this.Ba:this.Ba=Zp(this).sa()
}
;
t.ia=function()
{
return this.ra||(this.ra=Zp(this).ia())
}
;
t.Ia=function()
{
return this.za!=k?this.za:this.za=Zp(this).Ia()
}
;

t.li=q("wf");
t.Mg=function(b,c)
{
var d=b.fi();
return"text"==d?Zp(this).Mg(Zp(b),c):"control"==d?(d=b.ci(),(c?z.some:z.every)(d,function(b)
{
return this.containsNode(b,c)
}
,this)):n
}
;
t.pg=u(67);
t.isCollapsed=function()
{
return Zp(this).isCollapsed()
}
;
t.Lc=u(28);
t.Yg=u(24);
t.be=u(45);
t.gd=function()
{
return new Dp(this.V(),this.sa(),this.ia(),this.Ia())
}
;
t.select=function()
{
Zp(this).select(this.wf)
}
;
t.bd=u(3);
t.insertNode=function(b,c)
{
var d=Zp(this).insertNode(b,c);
this.De();
return d
}
;
t.wh=u(6);
t.fA=function()
{
return new $p(this)
}
;

t.collapse=function(b)
{
b=this.li()?!b:b;
this.Xi&&this.Xi.collapse(b);
b?(this.ra=this.ua,this.za=this.Ba):(this.ua=this.ra,this.Ba=this.za);
this.wf=n
}
;
a.$p=function(b)
{
this.tC=xp(b);
this.sL=b.li()?b.Ia():b.sa();
this.oE=yp(b);
this.FN=zp(b)
}
;
y($p,rp);
$p.prototype.rk=u(34);
$p.prototype.p=function()
{
$p.m.p.call(this);
this.oE=this.tC=k
}
;
a.aq=function()
{

}
;
y(aq,Cp);
a.bq=function(b)
{
var c=new aq;
c.O=b;
return c
}
,a.cq=function(b)
{
for(var c=Tb(arguments[0]).body.createControlRange(),d=0,e=arguments.length;
d<e;
d++)c.addElement(arguments[d]);
return bq(c)
}
;
t=aq.prototype;
t.O=k;
t.Ya=k;
t.Pp=k;
t.De=function()
{
this.Pp=this.Ya=k
}
;
t.clone=function()
{
return cq.apply(this,this.ci())
}
;
t.fi=s("control");
t.Zd=function()
{
return this.O||document.body.createControlRange()
}
;
t.wj=function()
{
return this.O?this.O.length:0
}
;

t.Je=function(b)
{
b=this.O.item(b);
return Wp(Fp(b),i)
}
;
t.wc=function()
{
return yc.apply(k,this.ci())
}
;
t.V=function()
{
return dq(this)[0]
}
;
t.sa=s(0);
t.ia=function()
{
var b=dq(this),c=z.Cf(b);
return z.find(b,function(b)
{
return uc(b,c)
}
)
}
;
t.Ia=function()
{
return this.ia().childNodes.length
}
;
t.ci=function()
{
if(!this.Ya&&(this.Ya=[],this.O))for(var b=0;
b<this.O.length;
b++)this.Ya.push(this.O.item(b));
return this.Ya
}
;

a.dq=function(b)
{
b.Pp||(b.Pp=b.ci().concat(),b.Pp.sort(function(b,d)
{
return b.sourceIndex-d.sourceIndex
}
));
return b.Pp
}
;
t.pg=u(66);
t.isCollapsed=function()
{
return!this.O||!this.O.length
}
;
t.Lc=u(27);
t.Yg=u(23);
t.be=u(44);
t.gd=function()
{
return new eq(this)
}
;
t.select=function()
{
this.O&&this.O.select()
}
;
t.bd=u(2);
t.zg=u(38);
t.fA=function()
{
return new fq(this)
}
;
t.collapse=function()
{
this.O=k;
this.De()
}
;
a.fq=function(b)
{
this.Ya=b.ci()
}
;
y(fq,rp);
fq.prototype.rk=u(33);

fq.prototype.p=function()
{
fq.m.p.call(this);
delete this.Ya
}
;
a.eq=function(b)
{
b&&(this.Ya=dq(b),this.ua=this.Ya.shift(),this.ra=z.Cf(this.Ya)||this.ua);
tp.call(this,this.ua,n,j)
}
;
y(eq,Bp);
t=eq.prototype;
t.ua=k;
t.ra=k;
t.Ya=k;
t.vj=u(59);
t.tj=u(41);
t.V=q("ua");
t.ia=q("ra");
t.Go=function()
{
return!this.depth&&!this.Ya.length
}
;
t.next=function()
{
this.Go()&&f(O.fb);
if(!this.depth)
{
var b=this.Ya.shift();
this.dd(b,1,1);
return b
}
return eq.m.next.call(this)
}
;

t.Pg=function(b)
{
this.Ya=b.Ya;
this.ua=b.ua;
this.ra=b.ra;
eq.m.Pg.call(this,b)
}
;
t.clone=function()
{
var b=new eq(k);
b.Pg(this);
return b
}
;
a.gq=function()
{
this.cf=[];
this.Am=[];
this.gr=this.Tm=k
}
;
y(gq,Cp);
t=gq.prototype;
t.Ca=le("goog.dom.MultiRange");
t.De=function()
{
this.Am=[];
this.gr=this.Tm=k
}
;
t.clone=function()
{
var b=new gq;
b.cf=z.clone(this.cf);
return b
}
;
t.fi=s("mutli");
t.Zd=function()
{
1<this.cf.length&&this.Ca.Mk("getBrowserRangeObject called on MultiRange with more than 1 range");
return this.cf[0]
}
;
t.wj=function()
{
return this.cf.length
}
;
t.Je=function(b)
{
this.Am[b]||(this.Am[b]=Wp(Up(this.cf[b]),i));
return this.Am[b]
}
;

t.wc=function()
{
if(!this.gr)
{
for(var b=[],c=0,d=this.wj();
c<d;
c++)b.push(this.Je(c).wc());
this.gr=yc.apply(k,b)
}
return this.gr
}
;
a.hq=function(b)
{
b.Tm||(b.Tm=wp(b),b.Tm.sort(function(b,d)
{
var e=b.V(),g=b.sa(),h=d.V(),l=d.sa();
return e==h&&g==l?0:Xp(e,g,h,l)?1:-1
}
));
return b.Tm
}
;
t.V=function()
{
return hq(this)[0].V()
}
;
t.sa=function()
{
return hq(this)[0].sa()
}
;
t.ia=function()
{
return z.Cf(hq(this)).ia()
}
;
t.Ia=function()
{
return z.Cf(hq(this)).Ia()
}
;
t.pg=u(65);

t.isCollapsed=function()
{
return 0==this.cf.length||1==this.cf.length&&this.Je(0).isCollapsed()
}
;
t.Lc=u(26);
t.Yg=u(22);
t.be=u(43);
t.gd=function()
{
return new iq(this)
}
;
t.select=function()
{
var b=vp(this.Sa());
b.removeAllRanges();
for(var c=0,d=this.wj();
c<d;
c++)b.addRange(this.Je(c).Zd())
}
;
t.bd=u(1);
t.fA=function()
{
return new jq(this)
}
;
t.collapse=function(b)
{
if(!this.isCollapsed())
{
var c=b?this.Je(0):this.Je(this.wj()-1);
this.De();
c.collapse(b);
this.Am=[c];
this.Tm=[c];
this.cf=[c.Zd()]
}

}
;

a.jq=function(b)
{
this.hA=z.map(wp(b),function(b)
{
return b.fA()
}
)
}
;
y(jq,rp);
jq.prototype.rk=u(32);
jq.prototype.p=function()
{
jq.m.p.call(this);
z.forEach(this.hA,function(b)
{
b.F()
}
);
delete this.hA
}
;
a.iq=function(b)
{
b&&(this.qg=z.map(hq(b),function(b)
{
return O.ed(b)
}
));
b=b?this.V():k;
tp.call(this,b,n,j)
}
;
y(iq,Bp);
t=iq.prototype;
t.qg=k;
t.ol=0;
t.vj=u(58);
t.tj=u(40);
t.V=function()
{
return this.qg[0].V()
}
;
t.ia=function()
{
return z.Cf(this.qg).ia()
}
;
t.Go=function()
{
return this.qg[this.ol].Go()
}
;

t.next=function()
{
try
{
var b=this.qg[this.ol],c=b.next();
this.dd(b.fa,b.cc,b.depth);
return c
}
catch(d)
{
return(d!==O.fb||this.qg.length-1==this.ol)&&f(d),this.ol++,this.next()
}

}
;
t.Pg=function(b)
{
this.qg=z.clone(b.qg);
iq.m.Pg.call(this,b)
}
;
t.clone=function()
{
var b=new iq(k);
b.Pg(this);
return b
}
;
a.lq=function(b)
{
return(b=vp(b||window))&&kq(b)
}
,a.kq=function(b)
{
var c,d=n;
if(b.createRange)try
{
c=b.createRange()
}
catch(e)
{
return k
}
else if(b.rangeCount)
{
if(1<b.rangeCount)
{
c=new gq;
for(var d=0,g=b.rangeCount;
d<g;
d++)c.cf.push(b.getRangeAt(d));
return c
}
c=b.getRangeAt(0);
d=Xp(b.anchorNode,b.anchorOffset,b.focusNode,b.focusOffset)
}
else return k;
return mq(c,d)
}
,a.mq=function(b,c)
{
return b&&b.addElement?bq(b):Wp(Up(b),c)
}
,a.Ap=function(b)
{
return Wp(Fp(b),i)
}
,a.nq=function(b,c)
{
return Yp(b,c,b,c)
}
,a.Xp=
function(b,c,d,e)
{
if(b==d)return e<c;
var g;
if(1==b.nodeType&&c)if(g=b.childNodes[c])b=g,c=0;
else if(uc(b,d))return j;
if(1==d.nodeType&&e)if(g=d.childNodes[e])d=g,e=0;
else if(uc(d,b))return n;
return 0<(xc(b,d)||c-e)
}
;
a.oq=function(b)
{
return(b=b.exec(pb()))?b[1]:""
}
,a.pq=function()
{
if(gi)return oq(/Firefox\/([0-9.]+)/);
if(A||tb)return zb;
if(li)return oq(/Chrome\/([0-9.]+)/);
if(mi)return oq(/Version\/([0-9.]+)/);
if(ii||ji)
{
var b=/Version\/(\S+).*Mobile\/(\S+)/.exec(pb());
if(b)return b[1]+"."+b[2]
}
else
{
if(ki)return(b=oq(/Android\s+([0-9.]+)/))?b:oq(/Version\/([0-9.]+)/);
if(hi)return oq(/Camino\/([0-9.]+)/)
}
return""
}
();
a.qq=A&&!Ib(9),a.rq=B||C||tb||A&&Ib(9),a.sq=C||n,a.tq=A||C||tb,a.uq=B||C;
C&&Gb("534.16");
a.vq=B&&j,a.wq=B||C||tb,a.xq=B||tb;
A&&Gb("7.0");
a.yq=B&&Gb("1.8")||C||tb,a.zq=C||A&&Gb("9");
A||tb||B&&Gb("1.9");
a.Aq=B||C&&!Gb("527"),a.Bq=A||tb,a.Cq=A||C&&Gb("525"),a.Dq=C&&!Gb("531"),a.Eq=C&&!Gb("528");
B&&Gb("1.9")||A||tb||C&&Gb("531");
a.Fq=A||B||tb,a.Gq=B||C&&!Gb("526"),a.Hq=A||tb,a.Iq=!A&&!tb,a.Jq=!C;
li&&0<=db(pq,"4")||mi&&Gb("533")||B&&Gb("2.0")||A&&Gb("10");
a.Kq=tb&&Gb("11.10");
li&&db(pq,"12");
a.Lq=E.Uh("ADDRESS","ARTICLE","ASIDE","BLOCKQUOTE","BODY","CAPTION","CENTER","COL","COLGROUP","DETAILS","DIR","DIV","DL","DD","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","ISINDEX","OL","LI","MAP","MENU","NAV","OPTGROUP","OPTION","P","PRE","SECTION","SUMMARY","TABLE","TBODY","TD","TFOOT","TH","THEAD","TR","UL"),a.Mq=E.Uh("IMG","IFRAME","EMBED");
a.Nq=E.Uh("text","file","url");
a.Pq=function(b,c)
{
var d=b?Ub(b):c;
T.call(this,d);
this.kT=b||this.J().wa().body;
this.zz=
{

}
;
Oq.push(this);
this.Kt=j
}
;
y(Pq,T);
a.Qq=0,a.Oq=[];
Pq.prototype.le=k;
Pq.prototype.Gl=n;
Pq.prototype.ht=0;
a.Rq=A?"styleFloat":"cssFloat",a.Sq=["position","top","left","width",Rq],a.Tq=["position","top","left","display",Rq,"marginTop","marginLeft","marginRight","marginBottom"];
t=Pq.prototype;
t.o=function()
{
Pq.m.o.call(this);
this.Z(this.h())
}
;
t.Z=function(b)
{
Pq.m.Z.call(this,b);
D.add(b,"goog-scrollfloater")
}
;

t.z=function()
{
Pq.m.z.call(this);
this.tv=xg(document.body).top-2;
this.le||(this.le=this.J().o("div",
{
style:"visibility:hidden"
}
));
this.ht=dg(this.h()).y;
Uq(this,this.Kt);
var b=this.Wp=new Nm(this.dq,150,this);
this.g().c(window,"scroll",b.fire,n,b);
this.g().c(window,"resize",Hk(150,this.Ix))
}
;
t.p=function()
{
Pq.m.p.call(this);
z.remove(Oq,this);
this.Wp.F();
this.oy&&(Qq-=this.sD);
delete this.le
}
;
a.Uq=function(b,c)
{
(b.Kt=c)?b.dq():Vq(b)
}
;

t.dq=function()
{
this.Kt&&(Nc(this.J()).y+this.tv>this.ht?Wq(this):Vq(this))
}
;
a.Wq=function(b)
{
if(!b.Gl)
{
var c=b.h(),d=dg(c).x,e=ug(c).width;
b.zz=
{

}
;
E.forEach(Sq,function(b)
{
this.zz[b]=c.style[b]
}
,b);
E.forEach(Tq,function(b)
{
this.le.style[b]=c.style[b]||Wf(c,b)||Vf(c,b)
}
,b);
mg(b.le,c.offsetWidth,c.offsetHeight);
Tf(c,
{
left:d+"px",width:e+"px",cssFloat:"none"
}
);
c.parentNode.replaceChild(b.le,c);
b.kT.appendChild(c);
c.style.position="fixed";
b.sp();
D.add(c,"goog-scrollfloater-floating");
b.Gl=j
}

}
;

t.sp=function()
{
var b=this.h(),c=this.tv;
!this.oy&&0<Qq&&(c+=Qq);
b.style.top=c+"px"
}
;
a.Vq=function(b)
{
if(b.Gl)
{
var c=b.h();
E.forEach(b.zz,function(b,e)
{
c.style[e]=b
}
);
b.le.parentNode.replaceChild(c,b.le);
D.remove(c,"goog-scrollfloater-floating");
b.Gl=n
}

}
;
t.Ix=function()
{
Vq(this);
this.ht=dg(this.h()).y;
this.dq()
}
;
a.Xq=function(b,c,d)
{
Pq.call(this,b,d);
this.LT=c;
this.Gi="";
this.Cz=100
}
;
y(Xq,Pq);

Xq.prototype.dq=function()
{
var b,c=this.Gi;
b=c&&z.find(Oq,function(b)
{
return c===b.Gi&&b.Gl
}
);
if(this.Kt&&(!b||b===this))
{
b=this.LT.getBoundingClientRect();
var d=this.tv+Qq,e=d+this.Cz;
b.top<d&&b.bottom>e?Wq(this):Vq(this)
}

}
;
a.Yq=function()
{

}
;
ia(Yq);

Yq.prototype.Rg=function(b,c,d)
{
function e()
{
var e=window.ZH.createRichTextEditor(b,c),g=e[0],e=e[1];
d&&d(g,e)
}
var g=xf.D(),h=g.od.rich_text_editor;
h.ee()?(g.Ca.info("rich_text_editor module already loaded"),g=new sf(e,i),window.setTimeout(v(g.execute,g),0)):Af(g,"rich_text_editor")?(g.Ca.info("rich_text_editor module already loading"),h.xt(e,i)):(g.Ca.info("Registering callback for module: rich_text_editor"),h.xt(e,i),g.Ca.info("Initiating module load: rich_text_editor"),Df(g,["rich_text_editor"]))
}
;
a.Zq=function(b,c)
{
this.K=$(b);
this.C=$.extend(
{

}
,this.Q,c||
{

}
);
this.Jg()
}
;
Zq.prototype.Q=
{
fU:[],$z:[],oM:j
}
;
a.$q="data-tip class style id bgcolor color size width height".split(" ");

Zq.prototype.Jg=function()
{
var b=this;
if(this.C.oM)this.K.on("paste",function()
{
setTimeout(function()
{
var c=b.C,d=c.fU,e=c.$z,g=
{
id:function(b,c)
{
b.id&&!z.contains(d,b.id)&&b.removeAttribute(c)
}
,"class":function(b,c)
{
if(b.className)if(e.length)
{
var d=D.get(b),d=z.filter(d,qf(xa(z.contains,e)));
d.length&&D.remove.apply(k,[b].concat(d))
}
else b.removeAttribute(c)
}

}
;
$("*",b.K).each(function()
{
var b=this;
$.each($q,function(c,d)
{
var e=g&&E.get(g,d);
e?e(b,d):b.removeAttribute(d)
}
)
}
)
}
)
}
)
}
;
a.ar=function(b)
{
this.C=$.extend(j,
{

}
,this.Q,b||
{

}
);
this.zv();
this.uf()
}
;
y(ar,Hd);
t=ar.prototype;
t.Q=
{
hn:
{
ie:6,content:"",method:"POST",source:"/people/autocomplete"
}
,rT:"mention-popup",ek:document.body,fC:"activated"
}
;
t.zv=function()
{
var b=this.e=hc(this.rB);
this.np=b.getElementsByTagName("input")[0];
b.className=this.C.rT;
b.style.display="none";
this.C.ek.appendChild(b)
}
;
t.wc=function()
{
return this.C.ek
}
;
t.rB='<div><div class="writing-bg"><input></div><div class="tip">想用 @ 提到谁？</div></div>';

t.zh=Bk('<% if (data.id) 
{
 %><img class="avatar" src="<%=avatar%>"><span class="name"><%=label%></span><% 
}
 %>');
t.tb=function()
{
return rg(this.e)
}
;
t.open=function()
{
this.tb()||(R(this.e,j),this.np.focus(),this.Jg(),this.dispatchEvent("open"))
}
;
t.close=function()
{
this.tb()&&(R(this.e,n),D.remove(this.e,this.C.fC),this.np.value="",this.np.blur(),this.Xv(),this.dispatchEvent("close"))
}
;
a.br=function(b,c)
{
b.close();
b.dispatchEvent(
{
type:"cancel",data:
{
originalEvent:c
}

}
)
}
;

t.YG=function(b)
{
this.tb()&&!uc(this.e,b.target)&&br(this,b)
}
;
t.fp=function(b)
{
var c=b.keyCode,d=this.np;
if(27===c||d===b.target&&""===d.value&&(8===c||32===c))br(this,b),b.preventDefault(),b.stopPropagation()
}
;
t.Jg=function()
{
N(document,"click",this.YG,n,this);
N(this.e,"keydown",this.fp,n,this)
}
;
t.Xv=function()
{
yd(document,"click",this.YG,n,this);
yd(this.e,"keydown",this.fp,n,this)
}
;

t.uf=function()
{
var b=this,c=this.C.hn,d=new Xo(this.np,
{
nk:this.e,ie:c.ie,source:c.source,select:function(c)
{
setTimeout(function()
{
b.close();
b.dispatchEvent(
{
type:"select",data:
{
pT:c
}

}
)
}
);
return""
}
,cd:function(c,d,h)
{
h.innerHTML=b.zh(c.data)
}

}
);
d.rA(c.method);
d.Na(c.content);
d.addEventListener("suggestionsupdate",function()
{
D.enable(this.e,this.C.fC,d.tb())
}
,n,this);
this.ba=d
}
;
t.position=function(b)
{
$f(this.e,b)
}
;
t.Ve=u(50);
a.cr=function(b,c)
{
this.input=b;
E.extend(this.C=
{

}
,this.Q,c||
{

}
);
this.vi=new ar(
{
hn:this.C.hn,ek:this.C.ek
}
);
this.Jg()
}
;
y(cr,Hd);
a.dr=!!window.getSelection;
cr.prototype.Q=
{
hn:
{

}
,ek:document.body,aG:"member_mention",hs:"mention-holder",position:function(b,c)
{
b.x+=c.width+7;
b.y-=5;
A&&7<zb&&(b.y+=c.height/2-9)
}

}
;
a.er=E.Ja(
{
QX:"member_mention"
}
);
cr.prototype.h=q("input");

a.fr=function(b)
{
var b=J(b.C.hs,b.input),c;
if(b)return c=document.createTextNode("@"),oc(c,b),c
}
,a.gr=function(b,c)
{
var d;
B&&(d=bc(document),b.input.focus(),window.scrollTo(d.x,d.y));
var e;
dr?(d=window.getSelection(),e=document.createRange(),e.setStartAfter(c),d.removeAllRanges(),d.addRange(e)):3===c.nodeType&&nq(c,c.length).select()
}
;

cr.prototype.Jg=function()
{
var b=this.vi;
N(b,"cancel",function(b)
{
var d=fr(this),b=b.data.originalEvent;
d&&"click"!==b.type&&("keydown"===b.type&&32===b.keyCode&&(d=d.parentNode.insertBefore(document.createTextNode(" "),d.nextSibling)),gr(this,d))
}
,n,this);
N(b,"select",function(b)
{
var d=b.data.pT,b=J(this.C.hs,this.input),e=document.createTextNode(" "),d=this.kr(d);
oc(d,b);
d.parentNode.insertBefore(e,d.nextSibling);
gr(this,e)
}
,n,this);
N(this.input,"click",function()
{
b.tb()&&fr(this)
}
,n,this);
N(this.input,
"keydown",function(b)
{
var d;
if(8===b.keyCode&&(d=lq()))
{
var b=d.V(),e=d.ia(),g=d.sa();
d=d.Ia();
var h=n;
hr(b.parentNode)&&(g=0,h=j);
hr(e.parentNode)&&(d=e.length,h=j);
h&&Yp(b,g,e,d).select()
}

}
,n,this);
N(this.input,mb||ii||ji?"keypress":"keyup",function(b)
{
function d(b,c)
{
if(3!==b.nodeType||"@"===b.nodeValue&&b.previousSibling&&"A"===b.previousSibling.nodeName||b.parentNode&&"A"===b.parentNode.nodeName)return n;
var d=b.nodeValue,e=c-1;
if("@"!==d.slice(e,e+1))return n;
var g=d;
0<=e&&e<d.length&&(g=d.substr(0,
e)+d.substr(e+1,d.length-e-1));
b.nodeValue=g;
return j
}
if(!("keypress"===b.type&&"@"!==String.fromCharCode(b.charCode)))
{
var e,g,h,l;
if("keyup"===b.type)
{
if(50!==b.keyCode)return;
if(dr)
{
e=window.getSelection();
h=e.anchorNode;
l=e.anchorOffset;
if(!d(h,l))return;
C&&!h.nextSibling&&(h.nodeValue+=" ");
g=document.createRange();
e.removeAllRanges();
g.setStart(h,l-1);
g.setEnd(h,l-1);
e.addRange(g)
}
else
{
g=mq(document.selection.createRange());
h=xp(g);
l=g.sa();
if(!d(h,l))return;
nq(h,l-1).select()
}

}
this.bu(b)
}

}
,
n,this)
}
;

cr.prototype.bu=function(b)
{
var c=this,d=this.vi;
if(!d.tb())
{
var e=function(d)
{
return!(d&&"A"===d.nodeName)&&d.className!==c.C.aG?(b&&b.preventDefault(),j):n
}
;
if(dr)
{
var g=window.getSelection();
if(e(g.anchorNode.parentNode))
{
var e=g.getRangeAt(0),h=ir(c);
e.insertNode(h);
e.selectNode(h);
g.removeAllRanges();
g.addRange(e);
e=jr(c,window.getSelection().getRangeAt(0));
d.position(e);
d.open()
}

}
else g=document.selection.createRange(),h=g.parentElement(),e(h)&&(g.pasteHTML(ir(c).outerHTML),g.moveToElementText(J(c.C.hs,c.input)),
g.select(),e=jr(c,g),"7.0"===zb&&(e.x-=2),d.position(e),d.open())
}

}
;
a.jr=function(b,c)
{
var d;
d=c.getBoundingClientRect();
var e;
A&&(e=
{
width:c.boundingWidth,height:c.boundingHeight
}
,ya(e,d),d=e);
e=bc(document);
var g=dg(b.vi.wc());
g.x=d.left-g.x+e.x;
g.y=d.top-g.y+e.y;
b.C.position.call(b,g,d);
return g
}
,a.hr=function(b)
{
return b&&1===b.nodeType&&"A"===b.tagName&&z.contains(er,b.className)
}
;
cr.prototype.kr=function(b,c)
{
return K("a",
{
href:"/people/"+b.url_token,className:c||this.C.aG,innerHTML:"@"+b.label
}
)
}
;

a.ir=function(b)
{
return K("a",
{
className:b.C.hs,innerHTML:"@"
}
)
}
;
a.kr=function(b,c,d,e)
{
T.call(this);
this.status=this.Ab=k;
this.OF=b;
this.hR=e||0;
this.hI=c;
this.or=d;
this.isEnabled=j;
this.rE=n;
this.qd=[];
this.content=k;
this.f_=this.hR?j:n;
this.pu=n;
this.CD=$.Deferred()
}
;
y(kr,T);
t=kr.prototype;
t.p=function()
{
this.Ma=k;
kr.m.p.call(this)
}
;

t.Z=function(b)
{
kr.m.Z.call(this,b);
var c=b.getAttribute("data-resourceid");
c&&(this.gU=b.getAttribute("data-action"),this.Et=c);
this.status||(this.status="normal");
b=this.J();
this.Ad||(this.Ad=b.bi("zm-editable-content",this.e),"1"===this.Ad.getAttribute("data-disabled")&&(this.disabled=j));
this.Vb?this.Ab&&(this.Vb.innerHTML=this.Ab):(this.Vb=b.bi("zm-editable-tip",this.e),this.Ab&&!this.Vb&&(this.Vb=b.o("div","zm-editable-tip"),this.Vb.innerHTML=this.Ab,b.Bo(this.Vb,this.Ad)));
this.Mb=b.bi("zm-editable-editor-wrap",
this.e);
this.content=La(this.content||this.pu?Hc(this.Ad):this.Ad.innerHTML);
this.Be();
lr(this)
}
;
t.o=function()
{
var b=this.J(),b=b.o("div","zm-editable-item-wrap",[this.Vb=b.o("div","zm-editable-tip"),this.Ad=b.o("div","zm-editable-content",this.content)]);
this.Z(b)
}
;
t.z=function()
{
kr.m.z.call(this);
this.g().c(this.Ad,"click",this.ga);
this.Vb&&this.g().c(this.Vb,"click",this.ga)
}
;
t.Na=function(b)
{
this.content=b;
lr(this)
}
;

t.ga=function(b)
{
var c=sk(this.e,b.target),d=this.J();
if(!c||!c.name)return b=d.PN(b.target,"div","zm-editable-tip-label"),this.isEnabled&&b&&this.ud(),j;
b=c.name;
switch(b)
{
case "expand":lr(this);
break;
case "collapse":lr(this);
break;
case "edit":if(!S.xe)
{
ll.D().w(j);
return
}
this.v();
this.ud();
this.dispatchEvent("click_edit");
break;
case "save":this.VE();
break;
case "cancel":this.dispatchEvent("cancel_edit");
this.uh();
break;
default:return this.Tl(b)
}
return j
}
;

t.VE=function()
{
var b=jk(this.jg()),c=/<embed/i.test(b);
if(/<img/i.test(b)||c||this.OF||(!b?0:(!b?"":b.replace(/<[^>]+>/g,"")).length))b===this.content&&!this.rE?(this.dispatchEvent("save_unchanged"),this.uh()):(this.dispatchEvent("save_changed"),this.Af(b))
}
;
t.Af=function(b)
{
if(!this.da||!this.da.Gb())if(this.or&&this.hI)
{
this.da=new V(j);
P(this.g(),this.da,"success",this.nC);
var c=new Si(this.qd.join("&"));
c.add(this.or,b).add("field_name",this.or);
this.da.ajax(this.hI,c.toString())
}
else this.dispatchEvent("change")
}
;

t.uh=function()
{
this.status="normal";
this.Be()
}
;
t.nC=function()
{
var b=Ie(this.da);
b&&(b.r?U(b.msg):(this.Na(b.msg),this.uh(),this.dispatchEvent("change")))
}
;
t.hb=q("content");
t.Pr=u(0);
t.isContentEditable=function()
{
return!this.Dd
}
;
t.jg=function()
{
return kk(Oa(this.Ma.value))
}
;
t.Tl=function(b)
{
this.dispatchEvent(b);
return j
}
;
t.v=function()
{
this.bs||(this.bs=j,this.Rg())
}
;

t.us=function()
{
var b=this.Ma;
if(b.h)
{
var c=v(function()
{
this.u_=new cr(b.h(),
{
ek:this.nj
}
)
}
,this);
b.ee()?c():b.addEventListener("load",c)
}

}
;

t.Rg=function()
{
var b=this.J();
this.Mb?(this.zd=b.bi("zm-command",this.Mb),this.Ma=b.bi("zm-editable-editor-input",this.Mb)):(this.Mb=b.o("div","zm-editable-editor-wrap clearfix",this.nj=b.o("div","zm-editable-editor-outer",b.o("div","zm-editable-editor-inner zg-form-text-input",this.Ma=b.o("textarea","zm-editable-editor-input")))),b.gy(this.Mb,this.Ad),this.cj());
this.Ma&&(this.Ma.tagName&&"TEXTAREA"===this.Ma.tagName&&!this.ur)&&new Po(this.Ma,66);
this.ep()
}
;
t.ready=function(b)
{
this.CD.done(b)
}
;

t.ep=function()
{
this.g().c(this.zd,"click",this.ga);
this.ou&&this.us();
var b=this.Ma;
if(b.h)b.on("load",function()
{
new Zq(b.h(),
{
$z:this.ou?er:[]
}
)
}
,n,this);
this.CD.resolveWith(this)
}
;
t.cj=function()
{
this.zd=K("div","zm-command",[this.nZ=K("a",
{
"class":"zm-command-cancel",name:"cancel",href:"javascript:;
"
}
,"取消"),this.Jn=K("a",
{
"class":"zg-r3px zg-btn-blue",name:"save",href:"javascript:;
"
}
,"保存")]);
this.Mb.appendChild(this.zd)
}
;

t.Be=function()
{
this.nr&&D.remove(this.e,this.nr);
"editing"===this.status?(this.Vb&&R(this.Vb,n),this.Mb&&R(this.Mb,j),R(this.Ad,n),this.nr="zm-editable-status-editing"):(this.Vb&&(this.OF&&!this.content&&!this.disabled?R(this.Vb,j):R(this.Vb,n)),this.Mb&&R(this.Mb,n),this.content?R(this.Ad,j):R(this.Ad,n),this.nr="zm-editable-status-normal");
D.add(this.e,this.nr)
}
;
t.ud=function()
{
this.Jr||(this.v(),this.ready(function()
{
this.status="editing";
this.Be();
this.Dp()
}
))
}
;

t.Dp=function()
{
if(this.Et)this.Jr=j,mr(this);
else
{
var b=this.Ma,c;
c=Ya(this.content.replace(/<br \/>/g,"\n").replace(/<br>/g,"\n")).replace(/<a.*?href="(.*?)".*?<\/a>/g,"$1");
b.value=c
}

}
;

a.lr=function(b)
{
if(b.dispatchEvent("shouldUpdateContent"))
{
var c=b.content,d=b.Ad,e;
e=[];
b.disabled||e.push('<a href="javascript:;
" class="zu-edit-button" name="edit"><i class="zu-edit-button-icon"></i>修改</a>');
e=e.join("");
b.pu?(zc(d,c),d.appendChild(hc(e))):d.innerHTML=c+e;
$("img.lazy",d).lazyload(
{
data_attribute:"actualsrc",threshold:400
}
)
}

}
,a.mr=function(b)
{
b.Jr||(b.Jr=j,Ei(b.gU+"?id="+b.Et,v(function(b)
{
this.Jr=n;
b=Ie(b.target);
b.r?U(b.msg):this.oA(b.msg)
}
,b),"GET"))
}
;

t.oA=function(b)
{
this.Ma.value=b
}
;
a.nr=function(b,c,d,e)
{
kr.call(this,b,c,d,e);
this.qR="mock"+this.$d();
this.tw=n;
this.Vq=j;
this.Dd=!ni||ki;
this.ou=n;
this.qJ=this.iW=j;
this.Ly=""
}
;
y(nr,kr);
t=nr.prototype;
t.oA=function(b)
{
this.Dd?nr.m.oA.call(this,b):(b||(b=B?"":"<div></div>"),this.Ma.ne(n,b,j))
}
;
t.Dp=function()
{
this.ready(function()
{
this.Et?mr(this):this.Dd?nr.m.Dp.call(this):this.content?this.Ma.ne(n,this.content,n,j):this.Ma.ne(n,C?"<div><br></div>":"<div></div>",n,j)
}
)
}
;

t.p=function()
{
Vc(this.Ma);
L(this.Mb);
this.lq=this.NB=this.mh=this.yl=this.mB=this.nj=this.Mb=k;
nr.m.p.call(this)
}
;

t.Rg=function()
{
if(this.Dd)nr.m.Rg.call(this);
else
{
var b=this.J();
this.Mb=b.o("div","zm-editable-editor-wrap",this.nj=b.o("div","zm-editable-editor-outer",[this.mB=b.o("div","zm-editable-toolbar-container"),this.yl=b.o("div","zm-editable-editor-field-wrap",this.mh=b.o("div",
{
id:this.qR,className:"zm-editable-editor-field-element"
}
))]));
this.NB=$(this.mB);
this.lq=$(this.Mb);
this.lq.hide();
b.gy(this.Mb,this.Ad);
this.Et||(this.mh.innerHTML=this.content);
b=
{
loremIpsum_:this.Ly,enableFullScreen:this.tw,
content:this.content,useScraper_:this.iW,canUploadMedia_:this.Vq,useRemoveFormat_:this.qJ
}
;
this.cj();
Yq.D().Rg(this.Mb,b,v(this.ep,this));
ub||(this.Cg=new Xq(k,this.nj),this.Cg.n(this.mB),Uq(this.Cg,n),Vq(this.Cg),Tc(this,this.Cg))
}

}
;

t.ep=function(b,c)
{
if(this.Dd)nr.m.ep.call(this);
else
{
this.Ma=b;
this.lq.show();
nr.m.ep.call(this);
var d=b.uj("FullScreenPlugin");
if(d)
{
var e=mh(c,"toggleFullScreen");
d.on("save",this.VE,n,this).on("willEnterFullScreen",function()
{
or(this,n)
}
,n,this).on("enterFullScreen",function()
{
e.Tc("退出写作模式")
}
).on("exitFullScreen",function()
{
e.Tc("写作模式")
}
).on("shouldExitFullScreenOnEscape",function()
{
return!b.bh
}
)
}
if(d=b.uj("CodePlugin"))d.FU(c),d.Jg()
}

}
;

a.or=function(b,c)
{
if(b.Cg)if(c)
{
D.add(b.yl,"zm-editable-editor-field-wrap-active");
var d=b.Cg;
d.ht=dg(d.h()).y;
Uq(b.Cg,j)
}
else D.remove(b.yl,"zm-editable-editor-field-wrap-active"),Uq(b.Cg,n)
}
;
t.ud=function()
{
nr.m.ud.call(this);
this.ready(function()
{
!this.Dd&&!this.oN&&(this.oN=j,xd(this.Ma,"load",function()
{
var b=this.Ma,c=b.uj("FullScreenPlugin");
B&&(b=b.field);
N(b,["focus","blur"],function(b)
{
(!c||!c.ny())&&or(this,"focus"===b.type)
}
,n,this)
}
,n,this),this.Ma.he())
}
)
}
;

t.jg=function()
{
if(this.Dd)return nr.m.jg.call(this);
var b=this.Ma,c=b.h();
return(z.some(["img","embed"],function(b)
{
return c.getElementsByTagName(b).length
}
)?0:!pf(kk,La,Hc)(c))?"":b.Il()
}
;
t.Be=function()
{
nr.m.Be.call(this);
this.Cg&&Uq(this.Cg,"editing"===this.status)
}
;
a.pr=function(b)
{
b.NB.toggle();
b.lq.toggleClass("no-toolbar")
}
;
a.qr=function()
{
wh.call(this,i,i,i);
this.LD=j;
this.l_=n;
this.h_=j;
this.x_=!!S[5];
this.cz=S.cz;
this.KU=-1===window.location.href.indexOf("psq");
this.GI=this.zc=this.IH=this.xc=k
}
;
y(qr,yi);
ia(qr);
a.rr=Jn("AddQuestionForm"+S.Xj)||Kn("AddQuestionForm"+S.Xj);
t=qr.prototype;

t.z=function()
{
qr.m.z.call(this);
this.aa().appendChild(I("zh-add-question-wrap"));
this.ad=Xb("zg-editor-input",this.e)[0];
this.Sq=J("zu-question-form-add",this.e);
this.zn=J("zu-question-form-jump",this.e);
this.Wo=I("zm-modal-dialog-warnmsg-wrapper");
this.Ks=I("js-title-length-err-msg");
this.Rz=J("zm-modal-dialog-warnmsg-wrapper",this.e);
this.KD=I("zh-question-form-detail-err");
this.bB=I("zh-question-form-tag-err");
this.tM=J("zu-global-notify-close",this.Wo);
this.QV=J("zu-global-notify-close",this.Rz);

this.WP=I("zm-modal-dialog-info-wrapper");
this.Vo=J("zm-modal-dialog-warnmsg",this.Wo);
this.O_=J("zm-modal-dialog-warnmsg",this.Rz);
this.Fn=J("zg-addq-isanon",this.e);
this.IV=J("js-toggle-editor-toolbar",this.e);
this.OK=J("js-editor-add-pic",this.e);
this.PK=J("js-editor-add-video",this.e);
this.eV=J("js-add-question-splash",this.e);
this.bR=J("js-add-question-form",this.e);
this.JC=I("js-before-ask");
this.fN=I("zh-question-suggest-detail-container");
this.PV=I("zh-question-suggest-topic-container");
this.cy();

this.cz?(sr(this,j),this.ay()):(this.Lj(),sr(this,n))
}
;
a.tr=function(b,c)
{
c&&(b.c_=c,b.ad&&(b.ad.value=c,b.mH(),b.LH.cq(),b.Pa&&b.Pa.vB()))
}
;
t.show=function(b)
{
this.C=$.extend(
{
Xm:k,cp:k
}
,b||
{

}
);
this.w(j)
}
;
t.nm=function()
{
qr.m.nm.call(this);
this.C=
{

}

}
;
t.cy=function()
{
this.eb("提问");
this.Ei(550);
Ih(this,k);
this.K=$(this.e);
this.K.addClass("absolute-position");
this.w(j);
this.na()
}
;

t.Iy=function()
{
var b=this,c=rr.get("add_question_form_title");
c&&tr(this,c);
var d=rr.get("add_question_form_des");
if(d)
{
var e=this.Lb;
setTimeout(function()
{
e.Na(d);
e.Dp()
}
)
}
c=this.C.Xm;
c||(c=rr.get("add_question_form_topics"))&&(c=JSON.parse(c));
c&&z.forEach(c,function(c)
{
b.Pa.vk(c)
}
)
}
;

t.Lj=fk(function()
{
function b()
{
var b=$('<div><div style="text-align:center"><img src="http://static.zhihu.com/static/img/spinner2.gif"/></div></div>'),c=this.Un,d=$(c&&rg(c)?c:this.Xh);
$.get("/question/"+d.data("url_token")+"/answers/summary").done(function(c)
{
if(c&&!c.r)
{
var c=c.msg,e=+d.data("answer_count"),e=0<e?"的全部 "+e+" 个回答":"";
b.html(p(
{
forEach:z.forEach,truncate:Za,answers:c,question_url_token:d.data("url_token")
}
)).append(Ga('<div class="zippy-row"><a class="zg-link-litblue" href="/question/%s">查看该问题%s</a></div>',
d.data("url_token"),e))
}
else U(c.msg)
}
);
d.after(b);
return b.get(0)
}
function c(b,c)
{
b.h().title=c;
b.h().setAttribute("data-tip","s$b$"+c)
}
var d=this;
this.Pa=new pp;
this.Pa.n(this.PV);
this.g().c(this.Pa,["add_tag","remove_tag"],this.kH);
new ql(this.ad,"写下你的问题");
var e=this.fN;
this.Lb=new nr;
this.Lb.Ly='<span style="font-style: normal;
color: #999;
">问题背景、条件等详细信息</span>';
this.Lb.n(e);
this.Lb.v();
this.Lb.ud();
(!ub||ji)&&pr(this.Lb);
setTimeout(function()
{
d.na()
}
);
this.g().c(this.Fn,"click",this.tL);
Mo.D().refresh();

var e=J("zm-add-question-form-sns-wrap",this.e),g=new Go,h=new Go;
g.Y(e);
h.Y(e);
D.add(g.h(),"icon sina");
D.add(h.h(),"icon qq");
c(g,"分享到新浪微博");
c(h,"分享到腾讯微博");
g.MC="/oauth/auth/sina?next=/oauth/callback";
h.MC="/oauth/auth/qq?next=/oauth/callback";
this.g().c(g,"change",this.iH).c(h,"change",this.iH);
this.zc=g;
this.xc=h;
if(!ub||ji)e=Io.D(),g=new yo("",e),uo(g,32,n),this.g().c(g,"action",this.YR),g.n(this.IV),g.Tc("切换工具栏"),g=new yo("",e),uo(g,32,n),this.g().c(g,"action",function()
{
this.Lb.Ma.execCommand("image")
}
),
g.n(this.OK),g.Tc("添加图片"),e=new yo("",e),uo(e,32,n),this.g().c(e,"action",function()
{
this.Lb.Ma.execCommand("video")
}
),e.n(this.PK),e.Tc("添加视频");
var l=this,m=Bk(l.Ik.JH),p=Bk(l.Ik.AL),e=l.ad,g=new ap;
l.bC=new Xo(e,
{
source:"/question/autocomplete",nk:I("zh-question-suggest-ac-wrap"),cd:$.noop,Y:function(c,d,e)
{
l.dC&&l.dC.F();
var d=$(c.h()),g=l.dC=new Wo;
d.html(m(
{
forEach:z.forEach,questions:e,token:encodeURIComponent(this.dc)
}
));
d.prepend('<div class="ac-head zg-gray">你的问题可能已经有答案</div>');
$(".ac-row",
d).each(function()
{
g.Ea(new Ko($(this).get(0),b,n))
}
);
g.n(c.h())
}
,fy:g
}
);
this.Da();
this.Iy()
}
);
t.Ik=
{

}
;
t.Ik.JH='<% forEach(questions, function(q, i) 
{
 q = q.data;
 %><div class="ac-row" data-url_token="<%=q.url_token%>" data-answer_count="<%=q.answer_count%>"><% if (q.is_star) 
{
 %><a class="zg-star" data-tip="s$b$优质问答" href="/question/<%=q.url_token%>"></a><% 
}
 %><a class="zippy-indicator"><i></i></a><a style="color:#222" href="/question/<%=q.url_token%>?q=<%= token %>"><%- q.title%></a><span class="zm-ac-gray"><%= parseInt(q.answer_count) > 0 ? q.answer_count + "个回答" : "还没有回答" %> </span></div><% 
}
) %>';

t.Ik.AL='<% forEach(answers, function(a, i) 
{
 %><div class="zippy-row"><div class="summary-item"><a href="/question/<%=question_url_token%>/answer/<%=a.url_token%>"><span class="zm-item-vote-count"><%=a.vote_count%></span></a><% if (a.author.url_token) 
{
 %><a style="vertical-align: top;
" href="/people/<%=a.author.url_token%>"><span class="author"><%-a.author.name%></span> </a><% 
}
 else 
{
 %><span class="anou-author"><%-a.author.name%></span> <% 
}
 %><div class="ellipsis" style="max-width: 65%;
display: inline-block;
 "><%=truncate(a.summary, 30, true)%></div><a  style="vertical-align: top;
" href="/question/<%=question_url_token%>/answer/<%=a.url_token%>"><span class="readall">阅读全部 »</span></a></div></div><% 
}
) %>';

t.ay=function()
{
function b()
{
sr(c,n);
c.ad.value=e.value
}
var c=this,d=Bk(this.Ik.JH),e=this.JC,g=new ap;
this.KK=new Xo(e,
{
source:"/question/autocomplete",nk:e.offsetParent,cd:ba(),Y:function(c,g,m)
{
c=$(c.h());
c.html(d(
{
forEach:z.forEach,questions:m,token:encodeURIComponent(this.dc)
}
));
0<m.length&&c.prepend('<div class="ac-row ac-first"><b>你想问的是不是：</b></div>').append($('<div class="ac-row ac-last iwanttoask"><b>不是，我要提一个新问题 »</b></div>'));
0===m.length&&e.value&&(c.html('<div class="ac-row ac-last iwanttoask"><b>没有找到相关问题，马上提问 »</b></div>').show(),
m.push("fake row"));
c.off("click").on("click",".iwanttoask",b)
}
,fy:g
}
);
this.KK.pn=n
}
;
a.sr=function(b,c)
{
$(b.eV).toggle(!!c);
$(b.bR).toggle(!c);
c?b.JC.focus():(b.Lj(),b.ad.focus());
b.na()
}
;
t.iH=function(b)
{
b=b.target;
if(b===this.zc&&!this.GI||b===this.xc&&!this.IH)window.open(b.MC),b.Rc(n)
}
;
t.tL=function()
{
var b=J("zm-add-question-form-sns-wrap"),c=J("zm-question-form-split"),d=this.Fn.checked;
R(b,!d);
R(c,!d)
}
;
a.ur=function(b,c,d)
{
"title"===d?b.IQ=c:"detail"===d?b.vQ=c:b.JQ=c;
b.LD=b.IQ||b.vQ||b.JQ
}
;

t.Da=function()
{
this.g().c(this.e,"click",this.sx);
this.RQ&&this.RQ.n(this.ad);
this.LH=new Po(this.ad,22);
this.g().c(this.LH,"change",this.mH);
this.g().c(this.tM,"click",function()
{
R(this.Wo,n);
R(this.WP,j)
}
);
this.g().c(this.QV,"click",function()
{
R(this.Rz,n)
}
);
this.g().c(Y,"sina_callback",this.mm);
this.g().c(Y,"qq_callback",this.mm);
this.g().c(this,"afterhide",function()
{
this.Jt()
}
);
this.ww()
}
;
t.ww=function()
{
$(window).on("beforeunload.AddQuestionForm",v(function()
{
this.Jt()
}
,this))
}
;
t.fw=function()
{
$(window).off("beforeunload.AddQuestionForm")
}
;

t.mm=function(b)
{
var c=
{
id:b.mb.id,name:b.mb.name
}
;
"sina_callback"===b.type?(this.GI=c,this.zc.Rc(n)):"qq_callback"===b.type&&(this.IH=c,this.xc.Rc(n))
}
;
t.Jt=function()
{
this.ad.value&&rr.set("add_question_form_title",this.ad.value);
var b=this.Lb.jg();
b&&rr.set("add_question_form_des",b);
(b=this.Pa.data)&&rr.set("add_question_form_topics",JSON.stringify(b))
}
;
t.Gv=function()
{
rr.remove("add_question_form_title");
rr.remove("add_question_form_des");
rr.remove("add_question_form_topics")
}
;

t.sx=function(b)
{
if(b=sk(this.e,b.target))switch(b=b.name,b)
{
case "expand":D.add(this.e,"zg-qform-expanded");
break;
default:this.Tl(b)
}

}
;

t.fk=function()
{
if(!this.Nz)
{
this.Nz=j;
setTimeout(v(function()
{
this.Nz=n
}
,this),3E4);
this.xhr=new V(j);
P(this.g(),this.xhr,"success",this.cp);
this.xhr.ajax("/question/add",vr(this).Kc());
var b=this.Pa;
if(b.Sp)
{
var c=0,d=b.data.length;
z.forEach(b.data,function(b)
{
z.forEach(this.Sp,function(d)
{
b[1]===d[1]&&c++
}
,this)
}
,b);
Y.U(
{
type:"ga_click_add_question",data:
{
bu:c,total:d
}

}
)
}

}

}
;

t.cp=function()
{
this.Nz=n;
var b=Ie(this.xhr);
if(b)if(b.r)if(281===b.errcode)
{
var c=new wr;
c.He=b.msg;
c.lc=3;
xr(this,c,j)
}
else U(b.msg);
else Ln.set("__Q_ISNEWLYCREATED__","yep"),this.Gv(),this.fw(),b=b.msg,c=b.match(/\/question\/(\d+)/)[1],this.C.cp?this.C.cp(
{
url:b,Wb:c
}
):location.href=b;
else U("网络异常")
}
;

t.Tl=function(b)
{
if("cancel"===b)this.w(n);
else if("addq"===b)
{
var b=yr(this),c=zr(this);
if(!(1<c.lc)&&!(1<b.lc))
{
var d=Ar(this),e=new wr;
3E3<xk(d)?(e.lc=3,e.He="请控制在 3000 字以下"):e.lc=0;
d=1<e.lc;
this.KD.innerHTML=e.He;
R(this.KD,d);
ur(this,d,"detail");
this.kH()
}
ur(this,1<c.lc||1<b.lc,"title");
this.LD?xr(this,1<b.lc?b:c,j):this.fk()
}

}
;
a.xr=function(b,c,d)
{
b.Vo.innerHTML=c.He;
0===c.lc?R(b.Wo,n):(3!==c.lc&&(R(b.Sq,j),R(b.zn,n)),R(b.Wo,d),d&&b.ad.focus())
}
;

t.mH=function()
{
var b=yr(this),c=zr(this);
"toolong"===b.name||"buffer"===b.name?(this.Ks.innerHTML=b.He,R(this.Ks,j)):(this.Ks.innerHTML=b.He,R(this.Ks,n));
"multiquestionmark"===c.name||"duplicatedquestion"===c.name?xr(this,c,j):xr(this,c,n);
ur(this,1<c.lc,"title")
}
;

a.zr=function(b)
{
var c=jk(b.ad.value).replace(/？/g,"?"),d;
var e="#";
d=b.No||new wr;
var g=n;
if(b.bC&&b.KU)
{
var h=b.bC.bb;
h&&h.length?(z.forEach(h,function(b)
{
4<b.raw.length&&1===+b.raw[4]&&(g=j,e="/question/"+b.url_token+"?q="+encodeURIComponent(this.ad.value)+"&psq=0")
}
,b),g?(d.He='我们找到了一个也许是你想问的问题，<a href="'+e+'">查看问题</a>',d.lc=3,d.name="duplicatedquestion",d.live=j,b.zn.href=e,R(b.Sq,n),R(b.zn,j)):(d=new wr,R(b.Sq,j),R(b.zn,n)),b.No=d):(d=new wr,b.No=d,R(b.Sq,j),R(b.zn,n));
b.No||(b.No=d);
d=b.No
}
1<
d.lc||(1>pk(jk(b.ad.value).replace("？","?"))?(d.He="您还没有给问题添加问号",d.lc=3,d.name="noquestionmark"):1<pk(c)&&(d.He="如果有多个问题，最好拆分一下",d.lc=1,d.name="multiquestionmark"));
return d
}
,a.yr=function(b)
{
var b=jk(b.ad.value).replace(/？/g,"?"),b=xk(b),c=new wr;
3>b?(c.lc=3,c.He="问题字数太少了吧",c.name="tooshort"):40<b&&50>=b?(c.lc=1,c.He='还可以输入 <span class="warning">'+(50-b)+"</span> 字",c.name="buffer"):50<b&&(c.lc=3,c.He='已超出 <span class="error">'+(b-50)+"</span> 字",c.name="toolong");
return c
}
;

t.kH=function()
{
var b=n;
1>this.Pa.data.length?(b=j,this.bB.innerHTML="至少添加一个话题"):5<this.Pa.data.length&&(b=j,this.bB.innerHTML="最多添加五个话题");
R(this.bB,b);
ur(this,b,"topic")
}
;

a.Ar=function(b)
{
var b=b.Lb,c=La(b.jg());
return b.isContentEditable()?c:Oa(c)
}
,a.vr=function(b)
{
var c=new tk,d=[],e=[];
c.add("question_title",b.ad.value);
c.add("question_detail",Ar(b));
b.Fn&&c.add("anon",b.Fn.checked?"1":"0");
z.forEach(b.Pa.data,function(b)
{
b[3]?d.push(b[3]):e.push(b[1])
}
);
c.add("topic_ids",d.join(","));
c.add("new_topics",e.join("$"));
Hg&&c.add("uid",Hg[3]);
b.Fn.checked||(c.add("share_qq",Number(b.xc.de())),c.add("share_sina",Number(b.zc.de())));
return c
}
;

t.YR=function()
{
this.Lb&&pr(this.Lb)
}
;
a.wr=function()
{
this.lc=isNaN(i)?0:i;
this.He=""
}
;
a.Br=function()
{
M.call(this)
}
;
y(Br,Rk);
t=Br.prototype;

t.eP=function(b)
{
var c=this.L.kg(),d=this.L.M.Fj,e=z.slice(c,1),g=k;
"topic"===c[0]?(g="/topic/"+e[1],g=Cr(this,g)):"people"===c[0]?(g="/people/"+e[1],g=Cr(this,g)):"question"===c[0]?(g="/question/"+e[2],g=Cr(this,g)):"search_link"===c[0]&&(g="/search?q="+encodeURI(e[0])+"&type=question");
g&&(e=["/search?q="+encodeURI(this.L.dc)+"&type1="+("search_link"===c[0]?"autocomplete_"+c[0]:"autocomplete")],window.localStorage&&(e=(Yc(localStorage.getItem("zhga"))||[]).concat([e]),localStorage.setItem("zhga",
ad(e))),Y.U(
{
type:"ga_serach_select",data:
{
type:c[0],index:d
}

}
),c=window.top,this.metaKey?c.open(g):c.location.href=g);
b.stopPropagation();
b.preventDefault()
}
;

a.Cr=function(b,c)
{
return window.localStorage?(b.metaKey||localStorage.setItem("query",b.L.dc),c):c+"?q="+encodeURIComponent(b.L.dc)
}
,a.Dr=function(b,c)
{
if(ub&&c.length&&c.children("ul").length)
{
var d=function(d)
{
d=d.target;
!c[0].contains(d)&&!d.contains(b[0])&&e()
}
,e=function()
{
b.parent().removeClass("open");
c.hide();
$(document.body).off("mousedown",d)
}
;
b.click(function(g)
{
g.preventDefault();
c.is(":visible")?e():(b.parent().addClass("open"),c.show(),$(document.body).mousedown(d))
}
).attr("href","javascript:;
");

c.find(".slide-up").click(e)
}

}
;

t.v=function()
{
Ln.get("__Q_ISNEWLYCREATED__")&&(Ln.remove("__Q_ISNEWLYCREATED__"),Eg&&(Eg.NF=j));
var b=(new vf(location)).Kc().get("q");
b&&(b=decodeURIComponent(b));
b==k&&window.localStorage&&(b=localStorage.getItem("query"))&&localStorage.removeItem("query");
if(S.Ha())(new Vn).v();
else
{
var c=$("#zh-top-inner"),d=vk.D();
c.on("click",'a[href="/topic"]',function()
{
Jm(d,n);
d.Ga="top_nav_topics";
d.w(j);
d.Sc();
return n
}
).on("click",".js-signin-noauth",function()
{
Jm(d,n);
d.Ga="top_nav_sign_in";
d.w(j);
d.Sc();

return n
}
).on("click",".js-signup-noauth",function()
{
Jm(d,j);
d.Ga="top_nav_sign_up";
d.w(j);
d.Sc()
}
)
}
if(this.Br=I("zh-top-search"))
{
c=I("zu-top-add-question");
this.g().c(c,"click",function()
{
this.Ut()
}
);
this.jZ=c;
if(ji||!ub)(new Mn(
{
hideFocus:j
}
)).n($("#top-nav-profile-dropdown").get(0));
else
{
var c=$("#top-nav-dd-topic"),e=$("#mobile-top-nav-topic-popup");
Dr(c,e);
qi&&$("img",e).each(function()
{
var b=$(this).data("2x");
b&&(this.src=b)
}
);
Dr($("#js-top-nav-link-profile"),$("#mobile-top-nav-profile-popup"))
}
this.g().c(Y,
"query_string_change",this.Ut);
this.jF=J("icon-magnify-q",this.Br);
var g=this.Gd=J("zu-top-search-input",this.Br);
b&&(g.value=b);
dk(ck(ek,"/",function()
{
setTimeout(function()
{
g.focus()
}
);
ok(g,k,500)
}
),
{
group:"导航",name:"搜索"
}
);
b=new fo;
this.L=new go("/autocomplete",this.Gd,k,k,this.Br,k,["搜索话题、问题或人..."],k,b);
this.L.pn=n;
this.L.Jf(j);
this.g().c(this.L,"select",this.eP);
this.g().c(this.Gd,"keydown",function(b)
{
13===b.keyCode&&(this.Gd.value&&"show me the money"!==this.Gd.value&&!/^ +$/.test(this.Gd.value))&&
(b=(new Si(location.href.match(we)[6]||k)).get("type"),(window.parent||window).location.href="/search?q="+encodeURIComponent(this.Gd.value)+"&type="+(b||"question"))
}
);
this.g().c(this.L,Ll.Hh.Ri,this.Xu);
this.g().c(document,"keydown",function(b)
{
b.metaKey&&(this.metaKey=j,this.L.gw=n)
}
);
this.g().c(document,"keyup",function(b)
{
if(91===b.keyCode||224===b.keyCode)this.metaKey=n,this.L.gw=j
}
);
this.g().c(this.Gd,["keyup","focus"],this.ZI);
this.g().c(this.Gd,"blur",this.ZI);
this.g().c(this.Gd,"mousedown",
function(b)
{
b.stopPropagation();
return j
}
)
}

}
;
t.ZI=function()
{
this.Gd.value?D.add(this.jF,"icon-magnify-active"):D.remove(this.jF,"icon-magnify-active")
}
;

t.Xu=function()
{
var b=this.L.bb,c=this.L.M.Ag;
if(b&&0!==b.length)
{
if(1===b.length)
{
var d=K("div",
{
className:"zu-autocomplete-empty"
}
,"没有找到相关的结果");
lc(d,c[0]);
L(c[0])
}
z.forEach(b,function(d,g)
{
if(0===g||d[0]!==b[g-1][0])
{
var h=c[g],l=
{
people:"用户",topic:"话题",question:"问题"
}
[d[0]];
l&&(l=K("div",
{
className:"zu-autocomplete-row-label"
}
,l),lc(l,h),this.g().c(this.L,Ll.Hh.Ri,Gk))
}

}
,this)
}

}
;

t.Ut=function()
{
var b;
S.Ha()?xn()||(S.xe?(b=qr.D(),b.show(),this.Gd.value&&this.Gd.value!==this.Gd.title&&tr(b,this.Gd.value)):ll.D().w(j)):(b=vk.D(),b.w(j),b.Ga="top_nav_ask",b.Sc("ask","加入知乎，即可继续「提问」","这里有专业人士提供专业的见解，让你得到满意的答案"))
}
;
a.Er=function()
{
T.call(this)
}
;
y(Er,T);
a.Fr=function(b)
{
ya(this,b)
}
,a.Gr=function(b)
{
this.BG=b;
this.K=$("<li>");
this.Tu()
}
,a.Hr=function(b)
{
this.vM=b;
this.K=$("<ul>")
}
;
Er.prototype.z=function()
{
Er.m.z.call(this);
this.XT()
}
;
Er.prototype.XT=function()
{
var b=this.e;
$.get("/trending").done(function(c)
{
c=$.map(c,Fr.KM);
b.appendChild((new Hr(c)).Y().K.get(0))
}
)
}
;

Fr.KM=function(b)
{
var c=
{
"0":"fullname",1:"url_token",2:"avatar",3:"id",4:"headline",5:"reason",6:"type"
}
,b=z.reduce(b,function(b,e,g)
{
b[c[g]]=e;
return b
}
,
{

}
);
return new Fr(b)
}
;
Gr.prototype.zh=Bk('<a href="#" data-tip="s$r$不感兴趣" class="del"><i class="icon icon-ignore"></i></a><a data-tip="p$t$<%=url_token%>" href="/people/<%=url_token%>" class="avatar"><img src="<%=avatar%>"></a><div class="bd"><a href="/people/<%=url_token%>" data-tip="p$t$<%=url_token%>"><%=fullname%></a><div class="headline"><span title="<%-headline%>"><%-headline%></span></div><div class="ft"><span class="reason"><%=reason%></span> <span class="zg-bull">&bull;
</span> <a class="zg-follow follow" href="#" id="sugg-<%=id%>">关注</a></div></div>');

Gr.prototype.Tu=function()
{
var b=this.BG,c=this.K;
c.on("click",".del",function(d)
{
d.preventDefault();
$.post("/un_trending",
{
id:b.id,type:b.type
}
);
c.remove()
}
).on("click",".follow",function(c)
{
c.preventDefault();
wk(this,b.type,xa(ok,this),k,
{
follow_text:"关注"
}
)
}
)
}
;
Gr.prototype.Y=function()
{
this.K.html(this.zh(this.BG));
return this
}
;
Hr.prototype.Y=function()
{
var b=this.K;
$.each(this.vM,function(c,d)
{
b.append((new Gr(d)).Y().K)
}
);
return this
}
;
$(function()
{
var b=I("zh-trendings");
b&&(new Er).n(b)
}
);
a.Ir=function()
{
$(".shameimaru-placeholder").map(function()
{
var b=$(this);
$.get("/node/"+b.attr("data-class"),
{
params:b.attr("data-params")
}
,function(c)
{
var d=$(c);
b.replaceWith(d);
var e=d.attr("data-id"),g=d.attr("data-location");
(c=$(".shameimaru-close",d))&&c.click(function(b)
{
b.preventDefault();
$.post("/shameimaru/close?"+$.param(
{
id:e,location:g
}
));
hk(d[0],j)
}
)
}
)
}
)
}
;
a.Jr=function()
{
$("#js-sidebar-app-link").click(function()
{
var b=$(this).hasClass("iphone")?"click_zhihu_ios_dl_link":"click_zhihu_android_dl_link";
W("app-promotion",b,"sidebar_not_logged_in")
}
);
$("#zh-top-link-logo").click(function()
{
W("navigation","visit_home","top_logo")
}
);
$("#zh-top-link-home").click(function()
{
W("navigation","visit_home","top_nav_home")
}
);
$("#top-nav-dd-topic").click(function()
{
W("navigation","visit_topics_activities","top_nav_topic")
}
);
$("#ga_sidebar_topic_all").click(function()
{
W("navigation",
"visit_topics_activities","sidebar_topic_all")
}
);
$(".zm-side-pinned-topics .zm-side-nav a.zm-side-nav-link").eq(0).click(function()
{
W("navigation","visit_topic","sidebar_topic_1")
}
).end().eq(1).click(function()
{
W("navigation","visit_topic","sidebar_topic_2")
}
).end().eq(2).click(function()
{
W("navigation","visit_topic","sidebar_topic_3")
}
);
var b=$("#zh-trendings");
b.on("click",'li:nth-child(1) a[href^="/topic/"]',function()
{
W("navigation","visit_topic","sidebar_intresting_people_1_topic")
}
).on("click",
'li:nth-child(2) a[href^="/topic/"]',function()
{
W("navigation","visit_topic","sidebar_intresting_people_2_topic")
}
).on("click",'li:nth-child(3) a[href^="/topic/"]',function()
{
W("navigation","visit_topic","sidebar_intresting_people_3_topic")
}
);
$("#zh-single-question .zm-tag-editor-labels a.zm-item-tag").click(function()
{
W("question_answer","visit_topic","question_topic")
}
);
N(Y,"ga_serach_select",function(b)
{
"topic"===b.data.type&&W("search","visit_topic","top_search_list_"+(b.data.index+1))
}
);
var c=
$(".zm-search-result-topic-wrap").on("click",'.title-container a[href^="/topic/"]',function()
{
W("search","visit_topic","search_result_card_topic_name")
}
).on("click",'a[href^="/topic/"] .zm-search-result-topic-avatar',function()
{
W("search","visit_topic","search_result_card_topic_avatar")
}
).on("click",".meta a.question",function()
{
W("search","visit_topic","search_result_card_topic_questions_count")
}
).on("click",".meta a.follow",function()
{
W("search","visit_topic_followers","search_result_card_topic_followers_count")
}
),
d=$('.zm-search3-side-topic .zm-search3-side-topic-item .content a[href^="/topic/"]').click(function()
{
var b=d.index(this)+1;
W("search","visit_topic","search_result_sidebar_topics_"+b+"_name")
}
),e=$(".zm-search3-side-topic .zm-search3-side-topic-item .zm-item-link-avatar").click(function()
{
var b=e.index(this)+1;
W("search","visit_topic","search_result_sidebar_topics_"+b+"_avatar")
}
),g=$('#zh-search3-list[data-type="topic"]').on("click",".zm-search3-item .user-info a.user-name",function()
{
var b=$('#zh-search3-list[data-type="topic"] .zm-search3-item .user-info a.user-name').index(this)+
1;
W("search","visit_topic","search_result_topic_list_"+b+"_name")
}
).on("click",".zm-search3-item .user-info .meta a.follow",function(b)
{
b=$(b.delegateTarget).find(".zm-search3-item .user-info .meta a.follow").index(this)+1;
W("search","visit_topic_followers","search_result_topic_list_"+b+"_followers_count")
}
);
g.on("click",".zm-search3-item img.user-avatar",function(b)
{
b=$(b.delegateTarget).find(".zm-search3-item img.user-avatar").index(this)+1;
W("search","visit_topic","search_result_topic_list_"+b+
"_avatar")
}
);
var h=$(".zm-topic-list-container").on("click",'.subtopic a[href^="/topic/"]',function()
{
W("topic","visit_topic","topic_activity_children_topic")
}
);
$(".zm-side-section-inner.child-topic").on("click",'a.zm-item-tag[href^="/topic/"]',function()
{
W("topic","visit_topic","topic_sidebar_children_topic")
}
);
$(".zm-topic-cat-hot").on("click",'a[href^="/topic/"]',function()
{
W("topic","visit_topic","topic_square_sidebar")
}
);
$(".zm-topic-cat-sub").on("click",'a[href^="/topic/"]',function()
{
W("topic",
"visit_topic","topic_square_list_item")
}
);
$('a.zm-side-nav-link[href="/topics"]').click(function()
{
W("navigation","visit_topic_square","sidebar_topic_square")
}
);
$('a.zm-side-nav-link[href="/invitation/email"]').click(function()
{
W("navigation","visit_invite_by_email","sidebar_invite_friend")
}
);
$("#zh-tooltip").on("click","#zh-tooltip-people .zu-hovercard-head-wrap a",function()
{
W("navigation","visit_people_profile","hovercard_people_name")
}
);
var l=$("#zh-top-nav-live-new").on("click",'.zm-noti7-content-item[data-notigroupname="FOLLOW"] .zm-list-content-medium a[href^="/people"]',
function()
{
W("notification","visit_people_profile","top_nav_noti_follower_people_name")
}
).on("click",'.zm-noti7-content-item[data-notigroupname="FOLLOW"] .zm-item-link-avatar',function()
{
W("notification","visit_people_profile","top_nav_noti_follower_people_avatar")
}
);
l.on("click",'.zm-noti7-content-item[data-notigroupname="VOTE_THANK"] a[href^="/people"]',function()
{
W("notification","visit_people_profile","top_nav_noti_vote_thank_people_name")
}
);
l.on("click",'.zm-noti7-content-item[data-notigroupname="INVITE"] a[href^="/people"]',
function()
{
W("notification","visit_people_profile","top_nav_noti_message_invitation_people_name")
}
).on("click",'.zm-noti7-content-item[data-notigroupname="QUESTION_COMMENT"] a[href^="/people"]',function()
{
W("notification","visit_people_profile","top_nav_noti_message_qcomment_people_name")
}
).on("click",'.zm-noti7-content-item[data-notigroupname="ANSWER_COMMENT"] a[href^="/people"]',function()
{
W("notification","visit_people_profile","top_nav_noti_message_acomment_people_name")
}
).on("click",'.zm-noti7-content-item[data-notigroupname="ANSWER"] a[href^="/people"]',
function()
{
W("notification","visit_people_profile","top_nav_noti_message_new_answer_people_name")
}
).on("click",'.zm-noti7-content-item[data-notigroupname="QUESTION"] a[href^="/people"]',function()
{
W("notification","visit_people_profile","top_nav_noti_message_edit_people_name")
}
);
var m=$("#js-home-feed-list");
m.on("click",'div[data-feedtype="ANSWER_VOTE_UP"] .source a[href^="/people"]',function()
{
W("feed","visit_people_profile","feed_answer_vote_source_people_name")
}
);
m.on("click",'div[data-feedtype="ANSWER_VOTE_UP"] >.avatar a[href^="/people"]',
function()
{
W("feed","visit_people_profile","feed_answer_vote_source_people_avatar")
}
);
m.on("click",'div[data-feedtype="ANSWER_VOTE_UP"] .zm-item-answer-author-info a[href^="/people"]',function()
{
W("feed","visit_people_profile","feed_answer_vote_author_name")
}
);
m.on("click",'div[data-feedtype="ANSWER_CREATE"] .source a[href^="/people"]',function()
{
W("feed","visit_people_profile","feed_answer_answer_source_people_name")
}
);
m.on("click",'div[data-feedtype="ANSWER_CREATE"] >.avatar a[href^="/people"]',
function()
{
W("feed","visit_people_profile","feed_answer_answer_source_people_avatar")
}
);
m.on("click",'div[data-feedtype="QUESTION_FOLLOW"] .source a[href^="/people"]',function()
{
W("feed","visit_people_profile","feed_question_follow_source_people_name")
}
);
m.on("click",'div[data-feedtype="QUESTION_FOLLOW"] >.avatar a[href^="/people"]',function()
{
W("feed","visit_people_profile","feed_question_follow_source_people_avatar")
}
);
m.on("click",'div[data-feedtype="QUESTION_CREATE"] .source a[href^="/people"]',
function()
{
W("feed","visit_people_profile","feed_question_ask_source_people_name")
}
);
m.on("click",'div[data-feedtype="QUESTION_CREATE"] >.avatar a[href^="/people"]',function()
{
W("feed","visit_people_profile","feed_question_ask_source_people_avatar")
}
);
b.on("click",'li:nth-child(1) a[href^="/people"]:not(.zg-link-gray-14)',function()
{
W("navigation","visit_people_profile","sidebar_interesting_people_1")
}
).on("click",'li:nth-child(2) a[href^="/people"]:not(.zg-link-gray-14)',function()
{
W("navigation",
"visit_people_profile","sidebar_interesting_people_2")
}
).on("click",'li:nth-child(3) a[href^="/people"]:not(.zg-link-gray-14)',function()
{
W("navigation","visit_people_profile","sidebar_interesting_people_3")
}
);
b.on("click",'li:nth-child(1) a.zg-link-gray-14[href^="/people"]',function()
{
W("navigation","visit_people_profile","sidebar_interesting_people_1")
}
).on("click",'li:nth-child(2) a.zg-link-gray-14[href^="/people"]',function()
{
W("navigation","visit_people_profile","sidebar_interesting_people_2")
}
).on("click",
'li:nth-child(3) a.zg-link-gray-14[href^="/people"]',function()
{
W("navigation","visit_people_profile","sidebar_interesting_people_3")
}
);
var p=$("#zh-question-answer-wrap").on("click",'.zm-item-answer-author-wrap >a[href^="/people"]',function()
{
W("question_answer","visit_people_profile","question_answer_author_name")
}
).on("click",".zm-item-answer-author-wrap img.zm-list-avatar",function()
{
W("question_answer","visit_people_profile","question_answer_author_avatar")
}
);
p.on("click",".voters a",function()
{
var b=
$(this).parents(".voters").find("a").index(this)+1;
W("question_answer","visit_people_profile","question_answer_voters_"+b)
}
);
p.on("click",'.zm-comment-hd a[href^="/people"]',function()
{
W("question_answer","visit_people_profile","question_answer_comment_author_name")
}
).on("click",".zm-comment-list img.zm-item-img-avatar",function()
{
W("question_answer","visit_people_profile","question_answer_comment_author_avatar")
}
);
$(".zh-question-followers-sidebar",'a[href^="/people"]',function()
{
W("question_answer",
"visit_people_profile","question_sidebar_followers_avatar")
}
);
N(Y,"ga_serach_select",function(b)
{
"people"===b.data.type&&W("search","visit_people_profile","top_search_list_"+(b.data.index+1))
}
);
c.on("click",'.title-container a[href^="/people/"]',function()
{
W("search","visit_people_profile","search_result_card_people_name")
}
).on("click",'a[href^="/people/"] .zm-search-result-topic-avatar',function()
{
W("search","visit_people_profile","search_result_card_people_avatar")
}
);
var r=$('.zm-search3-side.user a[href^="/people/"]').click(function()
{
var b=
r.index(this);
W("search","visit_people_profile","search_result_sidebar_people_"+b+"_avatar")
}
),x=$('#zh-search3-list[data-type="people"]').on("click",".zm-search3-item .user-info a.user-name",function(b)
{
b=$(b.delegateTarget).find(".zm-search3-item .user-info a.user-name").index(this)+1;
W("search","visit_people_profile","search_result_user_list_"+b+"_people_name")
}
).on("click",".zm-search3-item  img.user-avatar",function(b)
{
b=$(b.delegateTarget).find(".zm-search3-item img.user-avatar").index(this)+
1;
W("search","visit_people_profile","search_result_user_list_"+b+"_people_name")
}
);
$("#zh-topic-top-answerer").on("click",'.zm-topic-side-person-item-content a[href^="/people/"]',function()
{
W("topic","visit_people_profile","topic_sidebar_top_answerer_people_name")
}
).on("click","img.zm-list-avatar",function()
{
W("topic","visit_people_profile","topic_sidebar_top_answerer_people_avatar")
}
);
c.on("click",'a[href^="/people"][href$="/answers"]',function()
{
W("search","visit_people_answers","search_result_card_people_answers_count")
}
);

x.on("click",'a[href^="/people"][href$="/answers"]',function(b)
{
b=$(b.delegateTarget).find('a[href^="/people"][href$="/answers"]').index(this);
W("search","visit_people_answers","search_result_user_list_"+b+"_people_answers_count")
}
);
c.on("click",'a[href^="/people"][href$="/followers"]',function()
{
W("search","visit_people_followers","search_result_card_people_followers_count")
}
);
x.on("click",'a[href^="/people"][href$="/followers"]',function(b)
{
b=$(b.delegateTarget).find('a[href^="/people"][href$="/followers"]').index(this);

W("search","visit_people_followers","search_result_user_list_"+b+"_people_followers_count")
}
);
l.on("click",'.zm-noti7-content-item[data-notigroupname="VOTE_THANK"] a[href^="/question"]',function()
{
W("notification","visit_question","top_nav_noti_vote_thank_question")
}
);
l.on("click",'.zm-noti7-content-item[data-notigroupname="INVITE"] a[href^="/question"]',function()
{
W("notification","visit_question","top_nav_noti_message_invitation_question")
}
).on("click",'.zm-noti7-content-item[data-notigroupname="QUESTION_COMMENT"] a[href^="/question"]',
function()
{
W("notification","visit_question","top_nav_noti_message_qcomment_question")
}
).on("click",'.zm-noti7-content-item[data-notigroupname="ANSWER_COMMENT"] a[href^="/question"]',function()
{
W("notification","visit_question","top_nav_noti_message_acomment_question")
}
).on("click",'.zm-noti7-content-item[data-notigroupname="ANSWER"] a[href^="/question"]',function()
{
W("notification","visit_question","top_nav_noti_message_new_answser_question")
}
);
m.on("click",'div[data-feedtype="ROUNDTABLE_ADD_RELATED"] h2 a[href^="/question"]',
function()
{
var b="q"===$(this).closest("div[data-feedtype]").data("type");
W("feed","visit_question",b?"roundtable_question_add":"roundtable_answer_add")
}
).on("click",'div[data-feedtype="ANSWER_VOTE_UP"] h2 a[href^="/question"]',function()
{
W("feed","visit_question","feed_answer_vote_question")
}
).on("click",'div[data-feedtype="ANSWER_CREATE"] h2 a[href^="/question"]',function()
{
W("feed","visit_question","feed_answer_answer_question")
}
).on("click",'div[data-feedtype="QUESTION_FOLLOW"] h2 a[href^="/question"]',
function()
{
W("feed","visit_question","feed_question_follow_question")
}
).on("click",'div[data-feedtype="QUESTION_CREATE"] a.meta-item[href^="/question"]',function()
{
var b=parseInt($(this).text(),10);
b?W("feed","visit_question","feed_question_follow_has_answers",b):W("feed","visit_question","feed_question_follow_has_no_answer")
}
).on("click",'div[data-feedtype="QUESTION_CREATE"] h2 a[href^="/question"]',function()
{
W("feed","visit_question","feed_question_ask_question")
}
);
N(Y,"ga_serach_select",function(b)
{
"question"===
b.data.type&&W("search","visit_question","top_search_list_"+(b.data.index+1))
}
);
var F=$('#zh-search3-list[data-type="question"]').on("click",'.zm-search3-item .question-title a[href^="/question"]',function(b)
{
b=$(b.delegateTarget).find('.zm-search3-item .question-title a[href^="/question"]').index(this)+1;
W("search","visit_question","search_result_all_list_"+b+"_question")
}
).on("click",'.zm-search3-item .question-content a[href^="/question"]',function(b)
{
b=$(b.delegateTarget).find(".zm-search3-item").index($(this).parents(".zm-search3-item"))+
1;
W("search","visit_question","search_result_all_list_"+b+"_answer")
}
).on("click",'.zm-search3-item .meta a.answer[href^="/question"]',function(b)
{
b=$(b.delegateTarget).find('.zm-search3-item .meta a.answer[href^="/question"]').index(this)+1;
W("search","visit_question","search_result_all_list_"+b+"_answers_count")
}
);
$("#zh-question-related-questions").on("click","a",function(b)
{
b=$(b.delegateTarget).find("a").index(this)+1;
W("question_answer","visit_question","question_answer_sidebar_related_questions_"+
b)
}
);
F.on("click",'a[href^="/question"][href$="/followers"]',function(b)
{
b=$(b.delegateTarget).find('a[href^="/question"][href$="/followers"]').index(this)+1;
W("search","visit_question_followers","search_result_all_list_"+b+"_followers_count")
}
);
$('#zh-question-followers-sidebar a[href^="/question"][href$="/followers"]').click(function()
{
W("question_answer","visit_question_followers","question_followers_count")
}
);
l.on("click",'.zm-noti7-content-item[data-notigroupname="QUESTION"] a[href^="/question"]',
function()
{
W("notification","visit_question_log","top_nav_noti_message_edit_question")
}
);
$('.zu-main-sidebar a[href^="/question"][href$="/log"]').click(function()
{
W("question_answer","visit_question_log","question_log")
}
);
$('div[data-feedtype="ANSWER_CREATE"] .answer-date-link').click(function()
{
W("feed","visit_answer","feed_answer_answer_date")
}
);
$('div[data-feedtype="ANSWER_VOTE_UP"] .answer-date-link').click(function()
{
W("feed","visit_answer","feed_answer_vote_date")
}
);
$("zh-single-question-page .answer-date-link").click(function()
{
W("question_answer",
"visit_answer","question_answer_date")
}
);
$('a.zm-side-nav-link[href="/draft"]').click(function()
{
var b=parseInt($(this).find(".zg-num").text()||0,10);
W("navigation","visit_draft","sidebar_my_draft",b)
}
);
$('a.zm-side-nav-link[href="/collections"]').click(function()
{
var b=parseInt($(this).find(".zg-num").text()||0,10);
W("navigation","visit_collections","sidebar_my_collections",b)
}
);
$('a.zm-side-nav-link[href="/question/invited"]').click(function()
{
var b=parseInt($(this).find(".zg-num").text()||0,10);

W("navigation","visit_question_invited","sidebar_question_invited",b)
}
);
$('a[href="http://creativecommons.org"]').click(function()
{
W("navigation","visit_cc_license")
}
);
N(Y,"ga_click_back_to_top",function()
{
W("navigation","click_back_to_top")
}
);
N(Y,"ga_click_collapse_answer",function()
{
W("navigation","click_collapse_answer")
}
);
N(Y,"ga_click_follow",function(c)
{
if("people"===c.data.type&&c.data.Qj)
{
var d=$(c.target);
0<d.parents("#zh-top-nav-live-new").length?(c=l.find('a[name="focus"]').index(c.target)+
1,W("notification","click_follow_people","top_nav_noti_follower_follow",c)):0<d.parents("#zh-tooltip").length?W("navigation","click_follow_people","hovercard_follow"):0<d.parents("#zh-trendings").length?(c=b.find("a.follow").index(c.target)+1,W("navigation","click_follow_people","sidebar_intresting_people_"+c+"_follow")):0<d.parents(".zm-search-result-topic-wrap").length?W("search","click_follow_people","search_result_card_people_follow"):0<d.parents('#zh-search3-list[data-type="people"]').length?
(c=x.find(".zm-search3-item").index(d.parents(".zm-search3-item").get(0)),W("search","click_follow_people","search_result_user_list_"+c+"_people_follow")):0<d.parents("#zh-topic-top-answerer").length&&W("topic","click_follow_people","topic_sidebar_top_answerer_follow")
}

}
);
N(Y,"ga_click_follow",function(c)
{
if("people"===c.data.type&&!c.data.Qj)
{
var d=$(c.target);
0<d.parents("#zh-top-nav-live-new").length?(c=l.find('a[name="focus"]').index(c.target)+1,W("notification","click_unfollow_people","top_nav_noti_follower_unfollow",
c)):0<d.parents("#zh-tooltip").length?W("navigation","click_unfollow_people","hovercard_unfollow"):0<d.parents("#zh-trendings").length?(c=b.find("a.follow").index(c.target)+1,W("navigation","click_unfollow_people","sidebar_intresting_people_"+c+"_unfollow")):0<d.parents(".zm-search-result-topic-wrap").length?W("search","click_unfollow_people","search_result_card_people_unfollow"):0<d.parents('#zh-search3-list[data-type="people"]').length?(c=x.find(".zm-search3-item").index(d.parents(".zm-search3-item").get(0))+
1,W("search","click_unfollow_people","search_result_user_list_"+c+"_people_unfollow")):0<d.parents("#zh-topic-top-answerer").length&&W("topic","click_unfollow_people","topic_sidebar_top_answerer_unfollow")
}

}
);
N(Y,"ga_click_follow",function(b)
{
"question"===b.data.type&&b.data.Qj&&(b=$(b.target),0<b.parents('div[data-feedtype="ANSWER_VOTE_UP"]').length?W("feed","click_follow_question","feed_answer_vote_follow_question"):0<b.parents('div[data-feedtype="ANSWER_CREATE"]').length?W("feed","click_follow_question",
"feed_answer_answer_follow_question"):0<b.parents('div[data-feedtype="QUESTION_FOLLOW"]').length?W("feed","click_follow_question","feed_question_follow_follow_question"):0<b.parents('div[data-feedtype="QUESTION_CREATE"]').length?W("feed","click_follow_question","feed_question_ask_follow_question"):0<b.parents("#zh-question-side-header-wrap").length?W("question_answer","click_follow_question","question_follow_question"):0<b.parents('#zh-search3-list[data-type="question"]').length?(b=F.find(".zm-search3-item").index(b.parents(".zm-search3-item").get(0))+
1,W("search","click_follow_question","search_result_all_list_"+b+"_follow_question")):0<b.parents(".zm-topic-list-container").length&&W("topic","click_follow_question","topic_activity_follow_question"))
}
);
N(Y,"ga_click_follow",function(b)
{
"question"===b.data.type&&!b.data.Qj&&(b=$(b.target),0<b.parents('div[data-feedtype="ANSWER_VOTE_UP"]').length?W("feed","click_unfollow_question","feed_answer_vote_unfollow_question"):0<b.parents('div[data-feedtype="ANSWER_CREATE"]').length?W("feed","click_unfollow_question",
"feed_answer_answer_unfollow_question"):0<b.parents('div[data-feedtype="QUESTION_unFOLLOW"]').length?W("feed","click_unfollow_question","feed_question_follow_unfollow_question"):0<b.parents('div[data-feedtype="QUESTION_CREATE"]').length?W("feed","click_unfollow_question","feed_question_ask_unfollow_question"):0<b.parents("#zh-question-side-header-wrap").length?W("question_answer","click_unfollow_question","question_unfollow_question"):0<b.parents('#zh-search3-list[data-type="question"]').length?(b=
F.find(".zm-search3-item").index(b.parents(".zm-search3-item").get(0))+1,W("search","click_unfollow_question","search_result_all_list_"+b+"_unfollow_question")):0<b.parents(".zm-topic-list-container").length&&W("topic","click_unfollow_question","topic_activity_unfollow_question"))
}
);
N(Y,"ga_click_follow",function(b)
{
if("topic"===b.data.type&&b.data.Qj)
{
var c=$(b.target);
0<c.parents(".zm-search-result-topic-wrap").length?W("search","click_follow_topic","search_result_card_topic_follow"):0<c.parents(".zm-search3-side-topic").length?
(b=$(".zm-search3-side-topic").find('a[name="focus"][id^="topic"]').index(b.target)+1,W("search","click_follow_topic","search_result_sidebar_topics_"+b+"_follow")):0<c.parents('#zh-search3-list[data-type="topic"]').length&&(b=g.find(".zm-search3-item").index(c.parents(".zm-search3-item").get(0))+1,W("search","click_follow_topic","search_result_topic_list_"+b+"_follow"))
}

}
);
N(Y,"ga_click_follow",function(b)
{
"topic"===b.data.type&&!b.data.Qj&&0<$(b.target).parents(".zm-search-result-topic-wrap").length&&
W("search","click_unfollow_topic","search_result_card_topic_unfollow")
}
);
N(Y,"ga_click_follow",function(b)
{
"favlist"===b.data.type&&(b.data.Qj?W("collection","click_follow_collection","collection_follow"):W("collection","click_unfollow_collection","collection_follow"))
}
);
N(Y,"ga_click_top_nav_noti",function(b)
{
0<b.data.kJ?W("notification","click_top_nav_noti","top_nav_noti_alert",b.data.kJ):W("notification","click_top_nav_noti","top_nav_noti_no_alert")
}
);
N(Y,"ga_click_top_nav_noti_tab",function(b)
{
W("notification",
"click_top_nav_noti_tab",["top_nav_noti_tab_message","top_nav_noti_tab_follower","top_nav_noti_tab_vote"][b.data.xh])
}
);
N(Y,"ga_click_enlarge_image",function(b)
{
b=$(b.target).parents("div[data-feedtype]").attr("data-feedtype");
"ANSWER_CREATE"===b?W("navigation","click_enlarge_image","feed_answer_answer_image"):"ANSWER_VOTE_UP"===b&&W("navigation","click_enlarge_image","feed_answer_vote_image")
}
);
N(Y,"ga_click_feed_more",function(b)
{
b.data&&b.data.Eo?W("feed","click_feed_more","feed_more_button"):
W("feed","click_feed_more","feed_more_auto_load")
}
);
N(Y,"ga_click_feed_fresh",function(b)
{
W("feed","click_feed_fresh","feed_fresh_button",b.data.count)
}
);
F.on("click","#zh-load-more",function()
{
W("search","click_search_result_more","search_result_all_more_buttion")
}
);
x.on("click","#zh-load-more",function()
{
W("search","click_search_result_more","search_result_user_more_buttion")
}
);
g.on("click","#zh-load-more",function()
{
W("search","click_search_result_more","search_result_topic_more_buttion")
}
);
N(Y,
"ga_click_topic_more",function(b)
{
var c="activity";
-1<location.href.indexOf("questions")&&(c="questions");
b.data&&b.data.Eo?W("feed","click_topic_more","topic_"+c+"_more_button"):W("feed","click_topic_more","topic_"+c+"_more_auto_load")
}
);
m.on("click",'div[data-feedtype="ANSWER_VOTE_UP"] a.inline-block[name="toggleExpanded"]',function()
{
W("feed","click_expand","feed_answer_vote_expand")
}
).on("click",'div[data-feedtype="ANSWER_VOTE_UP"] a.zm-item-vote-count[name="toggleExpanded"]',function()
{
W("feed",
"click_expand","feed_answer_vote_vote_count")
}
).on("click",'div[data-feedtype="ANSWER_CREATE"] a.inline-block[name="toggleExpanded"]',function()
{
W("feed","click_expand","feed_answer_answer_expand")
}
).on("click",'div[data-feedtype="ANSWER_CREATE"] a.zm-item-vote-count[name="toggleExpanded"]',function()
{
W("feed","click_expand","feed_answer_answer_vote_count")
}
);
c=$("zh-single-question").on("click",'#zh-question-detail a.inline-block[name="expand"]',function()
{
W("question_answer","click_expand","question_supplement_expand")
}
);

c.on("click",'.zm-item-answer a[name="more"]',function()
{
W("question_answer","click_expand","question_answer_voters_more")
}
);
c.on("click","#zh-question-collapsed-switcher",function()
{
W("question_answer","click_expand","question_answer_folded_expand")
}
);
h.on("click",'a.inline-block[name="expand"]',function()
{
W("topic","click_expand","topic_activity_expand")
}
).on("click",'a.zm-item-vote-count[name="expand"]',function()
{
W("topic","click_expand","topic_activity_vote_count")
}
);
N(Y,"ga_click_sorter_item",
function(b)
{
(b=
{
added_time:"time",vote:"vote"
}
[b.data.key])&&W("question_answer","click_sort_answer","question_answer_sorting_"+b)
}
);
N(Y,"ga_click_vote_up",function(b)
{
b=$(b.target.h());
if(0<b.parents('div[data-feedtype="ANSWER_VOTE_UP"]').length)b="feed_answer_vote_up";
else if(0<b.parents('div[data-feedtype="ANSWER_CREATE"]').length)b="feed_answer_answer_up";
else if(0<b.parents("#zh-single-question-page").length)b="question_answer_vote_up";
else return;
W("vote","click_vote_up_answer",b)
}
);
N(Y,"ga_click_vote_down",
function(b)
{
b=$(b.target.h());
if(0<b.parents('div[data-feedtype="ANSWER_VOTE_UP"]').length)b="feed_answer_vote_down";
else if(0<b.parents('div[data-feedtype="ANSWER_CREATE"]').length)b="feed_answer_answer_down";
else if(0<b.parents("#zh-single-question-page").length)b="question_answer_vote_down";
else return;
W("vote","click_vote_down_answer",b)
}
);
N(Y,"ga_click_thank_answer",function(b)
{
b=$(b.target);
if(0<b.parents('div[data-feedtype="ANSWER_VOTE_UP"]').length)b="feed_answer_vote_thank";
else if(0<b.parents('div[data-feedtype="ANSWER_CREATE"]').length)b=
"feed_answer_answer_thank";
else if(0<b.parents("#zh-question-answer-wrap").length)b="question_answer_thank";
else if(0<b.parents(".zm-topic-list-container").length)b="topic_activity_thank";
else return;
W("vote","click_thank_answer",b)
}
);
N(Y,"ga_click_share_answer_box",function(b)
{
b=$(b.target);
if(0<b.parents('div[data-feedtype="ANSWER_VOTE_UP"]').length)b="feed_answer_vote_share";
else if(0<b.parents('div[data-feedtype="ANSWER_CREATE"]').length)b="feed_answer_answer_share";
else if(0<b.parents("#zh-question-answer-wrap").length)b=
"question_answer_share";
else if(0<b.parents(".zm-topic-list-container").length)b="topic_activity_share";
else return;
W("share","click_share_answer_box",b)
}
);
N(Y,"ga_click_share_question_box",function(b)
{
$(b.target);
var c="question_question_share",d=
{
sina:"question_sidebar_share_weibo",mail:"question_sidebar_share_email",letter:"question_sidebar_share_message"
}
;
b.data&&b.data.type&&(c=d[b.data.type]);
W("share","click_share_answer_box",c)
}
);
N(Y,"ga_click_share_answer_weibo",function(b)
{
b=b.data.xJ;
if(z.contains(b,
"qq")&&z.contains(b,"sina"))b="share_answer_sina_tencent_weibo";
else if(z.contains(b,"qq"))b="share_answer_tencent_weibo";
else if(z.contains(b,"sina"))b="share_answer_sina_weibo";
else return;
W("share","click_share_answer_weibo",b)
}
);
N(Y,"ga_click_share_answer_email",function()
{
W("share","click_share_answer_email")
}
);
N(Y,"ga_click_share_answer_message",function()
{
W("share","click_share_answer_message")
}
);
N(Y,"ga_click_share_question_weibo",function(b)
{
b=b.data.xJ;
if(z.contains(b,"qq")&&z.contains(b,
"sina"))b="share_question_sina_tencent_weibo";
else if(z.contains(b,"qq")&&!z.contains(b,"sina"))b="share_question_tencent_weibo";
else if(!z.contains(b,"qq")&&z.contains(b,"sina"))b="share_question_sina_weibo";
else return;
W("share","click_share_answer_weibo",b)
}
);
N(Y,"ga_click_share_question_email",function()
{
W("share","click_share_question_email")
}
);
N(Y,"ga_click_share_question_message",function()
{
W("share","click_share_question_message")
}
);
N(Y,"ga_click_report_box",function(b)
{
W("share","click_report_"+

{
member:"people",answer:"answer",comment:"comment",favlist:"collection",question:"question"
}
[b.data.type]+"_box")
}
);
N(Y,"ga_click_report",function(b)
{
W("share","click_report_"+
{
member:"people",answer:"answer",comment:"comment",favlist:"collection",question:"question"
}
[b.data.type])
}
);
N(Y,"ga_click_collect_answer_box",function(b)
{
b=$(b.target);
if(0<b.parents('div[data-feedtype="ANSWER_VOTE_UP"]').length)b="feed_answer_vote_collect";
else if(0<b.parents('div[data-feedtype="ANSWER_CREATE"]').length)b=
"feed_answer_answer_collect";
else if(0<b.parents("#zh-single-question-page").length)b="question_answer_collect";
else if(0<b.parents(".zm-topic-list-container").length)b="topic_activity_collect";
else return;
W("collection","click_collect_answer_box",b)
}
);
N(Y,"ga_click_collect_answer",function(b)
{
W("collection","click_collect_answer","collection_count",b.data.count)
}
);
N(Y,"ga_click_add_collection",function()
{
W("collection","click_add_collection","collect_answer_window_add_collection")
}
);
N(Y,"ga_click_answer_not_helpful",
function(b)
{
b=$(b.target);
if(0<b.closest('div[data-feedtype="ANSWER_VOTE_UP"]').length)b="feed_answer_vote_not_helpful";
else if(0<b.closest('div[data-feedtype="ANSWER_CREATE"]').length)b="feed_answer_answer_not_helpful";
else if(0<b.closest("#zh-question-answer-wrap").length)b="question_answer_not_helpful";
else if(0<b.closest(".zm-topic-list-container").length)b="topic_activity_not_helpful";
else return;
W("vote","click_answer_not_helpful",b)
}
);
m.on("click");
N(Y,"ga_click_question_ignore",function(b)
{
b=
$(b.target);
if(0<b.parents('div[data-feedtype="ANSWER_VOTE_UP"]').length)b="feed_answer_vote_ignore_question";
else if(0<b.parents('div[data-feedtype="ANSWER_CREATE"]').length)b="feed_answer_answer_ignore_question";
else if(0<b.parents('div[data-feedtype="QUESTION_FOLLOW"]').length)b="feed_question_follow_ignore_question";
else if(0<b.parents('div[data-feedtype="QUESTION_CREATE"]').length)b="feed_question_ask_ignore_question";
else return;
W("feed","click_question_ignore",b)
}
);
N(Y,"ga_question_topic_edit_start",
function()
{
W("edit","click_edit_question_topic","question_topic_edit_start")
}
);
N(Y,"ga_question_topic_edit_finish_changed",function()
{
W("edit","click_edit_question_topic","question_topic_edit_finish_changed")
}
);
N(Y,"ga_question_title_edit_start",function()
{
W("edit","click_edit_question_titile","question_title_edit_start")
}
);
N(Y,"ga_question_title_edit_cancel",function()
{
W("edit","click_edit_question_titile","question_title_edit_cancel")
}
);
N(Y,"ga_question_title_edit_save_changed",function()
{
W("edit",
"click_edit_question_titile","question_title_edit_save_changed")
}
);
N(Y,"ga_question_title_edit_save_unchanged",function()
{
W("edit","click_edit_question_titile","question_title_edit_save_unchanged")
}
);
N(Y,"ga_question_supplement_edit_start",function()
{
W("edit","click_edit_question_supplement","question_supplement_edit_start")
}
);
N(Y,"ga_question_supplement_edit_cancel",function()
{
W("edit","click_edit_question_supplement","question_supplement_edit_cancel")
}
);
N(Y,"ga_question_supplement_edit_save_changed",
function()
{
W("edit","click_edit_question_supplement","question_supplement_edit_save_changed")
}
);
N(Y,"ga_question_supplement_edit_save_unchanged",function()
{
W("edit","click_edit_question_supplement","question_supplement_edit_save_unchanged")
}
);
$("#zu-top-add-question").click(function()
{
W("question_answer","click_add_question","top_nav_question_add_start")
}
);
$(".zm-topic-ask-in-topic").click(function()
{
W("question_answer","click_add_question","topic_question_add_start")
}
);
N(Y,"ga_click_add_question",
function(b)
{
W("question_answer","click_add_question","question_add_submit_with_topics",b.data.total);
W("question_answer","click_add_question","question_add_submit_with_suggested_topics",b.data.bu);
W("question_answer","click_add_question","question_add_submit_with_suggested_topics_percent",Math.round(100*(b.data.bu/b.data.total)))
}
);
$("#zh-question-answer-form-wrap .editable").focus(function()
{
W("question_answer","click_add_answer","question_answer_add_start")
}
);
$("#zh-question-answer-form-wrap .submit-button").click(function()
{
W("question_answer",
"click_add_answer","question_answer_add_publish")
}
);
N(Y,"ga_hover_hovercard",function(c)
{
var c=$(c.target),d,e,g,h;
c.is('[href^="/people"]')?(e="hover_people_hovercard",0<c.parents("div[data-feedtype]").length?(d="feed",0<c.parents('div[data-feedtype="ANSWER_VOTE_UP"]').length?0<c.parents(".zm-item-answer-author-wrap").length?g="feed_answer_vote_author_name":0<c.parents("div.source").length&&(g=0<c.find("img").length?"feed_answer_vote_source_people_avatar":"feed_answer_vote_author_name"):0<c.parents('div[data-feedtype="ANSWER_CREATE"]').length?
0<c.parents("div.source").length&&(g=0<c.find("img").length?"feed_answer_answer_source_people_avatar":"feed_answer_answer_source_people_name"):0<c.parents('div[data-feedtype="QUESTION_FOLLOW"]').length?0<c.parents("div.source").length&&(g=0<c.find("img").length?"feed_question_follow_source_people_avatar":"feed_question_follow_source_people_name"):0<c.parents('div[data-feedtype="QUESTION_CREATE"]').length&&0<c.parents("div.source").length&&(g=0<c.find("img").length?"feed_question_ask_source_people_avatar":
"feed_question_ask_source_people_name")):0<c.parents("#zh-trendings").length?(d="navigation",$.contains(b.find("li:nth-child(1)").get(0),c.get(0))?g="sidebar_intresting_people_1":$.contains(b.find("li:nth-child(2)").get(0),c.get(0))?g="sidebar_intresting_people_2":$.contains(b.find("li:nth-child(3)").get(0),c.get(0))&&(g="sidebar_intresting_people_3")):0<c.parents("#zh-single-question-page").length?(d="question_answer",0<c.parents(".zm-item-answer-author-wrap").length?g=0<c.find("img").length?"question_answer_author_avatar":
"question_answer_author_name":0<c.parents(".voters").length?(g=c.parents(".voters").find('a[href^="/people"]').index(c.get(0))+1,g="question_answer_voters_"+g):0<c.parents(".zm-comment-list").length&&(g=0<c.find("img").length?"question_answer_comment_author_avatar":"question_answer_comment_author_name")):0<c.parents(".zm-search3-side.user").length?(d="search",g=c.parents(".zm-search3-side.user").find('a[href^="/people"]').index(c.get(0))+1,g="search_result_sidebar_people_"+g+"_avatar"):0<c.parents("#zh-topic-top-answerer").length&&
(d="topic",g=0<c.find("img").length?"topic_sidebar_top_answerer_people_avatar":"topic_sidebar_top_answerer_people_name")):c.is('[href^="/topic"]')&&(e="hover_topic_hovercard",h=j,0<c.parents("#zh-single-question-page").length?(d="question_answer",g="question_topic"):0<c.parents(".zm-search3-side-topic").length&&(d="search",0<c.find("img").length?(g=c.parents(".zm-search3-side-topic").find("a.zm-item-link-avatar").index(c.get(0)),g="search_result_sidebar_topics_"+g+"_avatar"):(g=c.parents(".zm-search3-side-topic").find('.content a[href^="/topic/"]').index(c.get(0))+
1,g="search_result_sidebar_topics_"+g+"_name")));
d&&(e&&g)&&W(d,e,g,i,h)
}
);
0<$(".zm-search3-card.people").length&&W("search","show_search_result_card","search_result_card_people");
0<$(".zm-search3-card.topic").length&&W("search","show_search_result_card","search_result_card_topic");
N(Y,"ga_click_sign_in",function(b)
{
b.data&&b.data.label?W("sign_in","click_sign_in",b.data.label):W("sign_in","click_sign_in")
}
);
N(Y,"ga_click_sign_in_close",function()
{
W("sign_in","click_sign_in_close","sign_in_box_main")
}
);

N(Y,"ga_click_sign_in_weibo",function(b)
{
W("sign_in","click_sign_in_weibo",b.label)
}
);
N(Y,"ga_click_sign_in_qq",function(b)
{
W("sign_in","click_sign_in_qq",b.label)
}
);
N(Y,"ga_click_sign_in_switch",function(b)
{
"signin"===b.data?W("sign_in","click_sign_in_switch","sign_in_box_switch_to_sign_in"):"signup"===b.data&&W("sign_in","click_sign_in_switch","sign_in_box_switch_to_sign_up")
}
);
N(Y,"ga_click_sign_in_link_account",function(b)
{
b.target?(b=$(b.target),Wa(b.parent().text(),"该邮箱已注册")?W("sign_in","click_sign_in_link_account",
"sign_up_error_user_exists_link_account"):Wa(b.parent().text(),"如果你已有知乎帐号")?$(".view-warmup").is(":visible")?W("sign_in","click_sign_in_link_account","sign_in_box_splash_link_account"):$(".view-info").is(":visible")&&W("sign_in","click_sign_in_link_account","sign_in_box_sign_up_link_account"):Wa(b.text(),"返回注册")&&W("sign_in","click_sign_in_link_account","sign_in_box_link_account_back")):b.label&&W("sign_in","click_sign_in_link_account",b.label)
}
);
N(Y,"ga_click_sign_in_connect",function(b)
{
W("sign_in",
"click_sign_in_weibo",b.label)
}
);
N(Y,"ga_click_sign_in_avatar",function()
{
W("sign_in","click_sign_in_avatar","sign_in_avatar_upload")
}
);
N(Y,"ga_click_sign_in_previous_step",function()
{
W("sign_in","click_sign_in_previous_step","sign_in_box_follow_user_previous")
}
);
N(Y,"ga_click_follow_topic",function(b)
{
0<b.data?W("sign_in","click_follow_topic","sign_in_box_follow_topic_next",b.data):0===b.data&&W("sign_in","click_follow_topic","sign_in_box_follow_topic_skip")
}
);
N(Y,"ga_click_follow_people",function(b)
{
0<
b.data?W("sign_in","click_follow_people","sign_in_box_follow_people_next",b.data):0===b.data&&W("sign_in","click_follow_people","sign_in_box_follow_people_skip")
}
);
N(Y,"ga_click_play_video",function(b)
{
W("video","click_play_video",b.label)
}
);
N(Y,"ga_visit_home_video",function()
{
W("video","visit_home_video","home_play_video_auto")
}
);
N(Y,"ga_click_close_video",function(b)
{
W("video","click_close_video",b.label)
}
);
N(Y,"ga_click_share_video",function(b)
{
W("video","click_share_video",b.label)
}
)
}
,a.Kr=function()
{
(new Om).v();

(new tn).v();
var b=$("#rq3-sidenav-link"),c=$(".tour",b);
c.length&&$(".close-button",c).click(function()
{
var b=$(this).data("feature");
$.get("/notifeature",
{
feature:b
}
);
c.fadeOut(100,function()
{
c.remove()
}
)
}
);
b=new Pm;
window.console&&console.info&&console.info(b.DL+"\n\n"+b.link)
}
,a.Lr=function(b,c)
{
c=c||3E3;
if(b)
{
var d=I("zh-message-container");
d&&(d.innerHTML=b[1],D.set(d,b[0]?"zg-error-message":"zg-info-message"),R(d,j),0<c&&$(d).delay(c).fadeOut())
}

}
,a.yk=function()
{
if(window.console)
{
var b=z.toArray(arguments);

b.unshift("["+(new Date).toLocaleTimeString()+"]:\t");
console.log.apply?console.log.apply(console,b):console.log(b[0],b.slice(1).join(","))
}

}
,a.Mr=xf.D(),a.Nr=new Ve;
Nr.FD=n;
Mr.Ky=Nr;
a.Or=fa.PLOVR_MODULE_INFO,a.Pr=void 0;
for(Pr in Or)Mr.od[Pr]=new tf(Or[Pr],Pr);
Mr.AD==Mr.Pq&&(Mr.AD=k,Mr.Pq.hp(v(Mr.CE,Mr))&&Ff(Mr,Gf));
a.Qr=fa.PLOVR_MODULE_URIS,a.Rr=void 0;
for(Rr in Qr)Mr.od[Rr].Eg=Qr[Rr];
If("app_core");

Ca("ZH.main",function()
{
window.console||(window.console=
{
info:ha,log:ha,warning:ha,error:ha
}
);
kl.on(["click!","show!","visit!"],cj);
Id=window;
ub=Dg.Nc;
$.ajaxPrefilter(function(b,c)
{
var d,e;
c.processData!==n&&"get"!==b.type&&(e=Nf.get("_xsrf"),d=c.data||
{

}
,"string"===$.type(d)?d=d+"&_xsrf="+e:(d._xsrf=e,d=$.param(d)),b.data=d)
}
);
(new Br).v();
Ki.dispatchEvent("init");
$(function()
{
Ki.dispatchEvent("postinit")
}
);
S.Ha()?(Hi.push(
{
uW:"json",filter:function(b)
{
(b=b.profile_result)&&$(b).css("border-top",
"1px solid #eee").appendTo(document.body)
}

}
),Dg.Nc&&($.fx.off=j),$(function()
{
(new Qm).v()
}
),Ir()):$("body").addClass("no-auth");
$("img.lazy").lazyload(
{
load:function()
{
$(this).trigger("contentchange")
}
,data_attribute:"actualsrc",event:"scroll updatelazy",threshold:400
}
);
Wa(location.host,"zhihu.com")||(Bg=j);
$(function()
{
if(window.localStorage)
{
var b=Yc(localStorage.getItem("zhga"));
localStorage.removeItem("zhga");
"null"===b||"undefined"===b||b&&z.forEach(b,function(b)
{
1===b.length?Ak(b[0]):zk(b[0],
b[1],b[2],b[3])
}
)
}

}
);
$(document.body).children("div.zu-main").attr("role",Xc.bK);
document.addEventListener&&document.addEventListener("touchstart",ha,n);
$(Kr);
$(Jr)
}
);
Ca("ZH.setGlobalInfoMessage",function(b)
{
Y&&b&&Vk(b)
}
);
Ca("ZH.cm",function(b,c)
{
Y.dispatchEvent(new Tk(b,c))
}
);
Ca("ZH.m",Lr);
Ca("ZH.i",function(b)
{
Y.dispatchEvent(new Tk("iframe_data",b))
}
);
Ca("ZH.ill",function()
{
Kj&&Kj.v()
}
);

}

}
)(zhihu);
