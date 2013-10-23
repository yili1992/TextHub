(function(a)
{
with(a)
{

a.YC=function(b,c)
{
var d=k;
if("delete"===c&&(d=zt.zs?"debugger":window.prompt("请输入删除理由"),!d))return;
b.xhr=new V(j);
b.ob&&P(b.g(),b.xhr,"success",b.Ce);
b.xhr.ajax("/reviewq/answer?queue_id="+b.Kb+"&is_realm="+b.fe,"action="+c+"&answer_id="+b.ea.getAttribute("data-answer_id")+"&task_id="+b.ea.getAttribute("data-task_id")+(d?"&reason="+d:"")+"&none_queue="+b.ea.getAttribute("data-none_queue"))
}
,a.ZC=function(b,c)
{
b.xhr=new V(j);
b.ob&&P(b.g(),b.xhr,"success",b.Ce);
b.xhr.ajax("/reviewq/question?queue_id="+
b.Kb+"&is_realm="+b.fe,"action="+c+"&question_id="+b.ea.getAttribute("data-question_id")+"&task_id="+b.ea.getAttribute("data-task_id")+"&none_queue="+b.ea.getAttribute("data-none_queue"))
}
,a.$C=["delete","delete_answer"],a.aD=function(b)
{
if(A&&!Ib(9))
{
var c=n;
try
{
c=b.parentNode
}
catch(d)
{

}
return!!c
}
return uc(b.ownerDocument.body,b)
}
,a.bD=function(b,c)
{
return b.G.h(c?b.MI:b.$D)
}
,a.cD=function(b)
{
if("outerHTML"in b)return b.outerHTML;
var c=Tb(b).createElement("div");
c.appendChild(b.cloneNode(j));
return c.innerHTML
}
;

Lp.prototype.pg=Z(68,function()
{
var b=this.xr.body.createTextRange();
b.moveToElementText(this.xr.body);
return this.Mg(new Lp(b,this.xr),j)
}
);
Vp.prototype.pg=Z(67,function()
{
return(!this.ua||aD(this.ua))&&(!this.ra||aD(this.ra))&&(!(A&&!Ib(9))||Zp(this).pg())
}
);
aq.prototype.pg=Z(66,function()
{
var b=n;
try
{
b=z.every(this.ci(),function(b)
{
return A?!!b.parentNode:uc(b.ownerDocument.body,b)
}
)
}
catch(c)
{

}
return b
}
);
gq.prototype.pg=Z(65,function()
{
return z.every(wp(this),function(b)
{
return b.pg()
}
)
}
);

Dp.prototype.vj=Z(60,function()
{
return 3!=this.fa.nodeType?-1:this.fa==this.ua?this.Ba:0
}
);
eq.prototype.vj=Z(59,s(0));
iq.prototype.vj=Z(58,function()
{
return this.qg[this.ol].vj()
}
);
Uy.prototype.ox=Z(53,function(b,c,d,e,g)
{
var h=g||"question",b="question"===h?"问题":"答案";
z.contains($C,e)?Ci(
{
title:d+b,content:"确定要"+d+"这个"+b+"吗？",Zi:["取消","确定"+d]
}
,function(b)
{
b?"question"===h?ZC(this,e):YC(this,e):this.locked=n
}
,this):"question"===h?ZC(this,e):YC(this,e)
}
);

Gp.prototype.be=Z(47,function()
{
var b=Ub(this.O.startContainer).o("div");
b.appendChild(this.O.cloneContents());
b=b.innerHTML;
if(Fa(b,"<")||!this.isCollapsed()&&!Wa(b,"<"))return b;
var c=this.wc(),c=1==c.nodeType?c:c.parentNode;
return cD(c.cloneNode(n)).replace(">",">"+b)
}
);
Lp.prototype.be=Z(46,function()
{
return this.O.htmlText
}
);
Vp.prototype.be=Z(45,function()
{
return Zp(this).be()
}
);
aq.prototype.be=Z(44,function()
{
return this.Yg()
}
);
gq.prototype.be=Z(43,function()
{
return z.map(wp(this),function(b)
{
return b.be()
}
).join("")
}
);

Dp.prototype.tj=Z(42,function()
{
return 3!=this.fa.nodeType?-1:this.fa==this.ra?this.za:this.fa.nodeValue.length
}
);
eq.prototype.tj=Z(41,s(0));
iq.prototype.tj=Z(40,function()
{
return this.qg[this.ol].tj()
}
);
up.prototype.zg=Z(39,function(b)
{
this.isCollapsed()||this.bd();
return this.insertNode(b,j)
}
);
aq.prototype.zg=Z(38,function(b)
{
b=this.insertNode(b,j);
this.isCollapsed()||this.bd();
return b
}
);

rp.prototype.restore=Z(35,function(b)
{
this.$f&&sp.log(ce,"Disposed SavedRange objects cannot be restored.",i);
var c=this.rk();
b||this.F();
return c
}
);
$p.prototype.rk=Z(34,function()
{
return Yp(this.tC,this.sL,this.oE,this.FN)
}
);
fq.prototype.rk=Z(33,function()
{
for(var b=(this.Ya.length?Tb(this.Ya[0]):document).body.createControlRange(),c=0,d=this.Ya.length;
c<d;
c++)b.addElement(this.Ya[c]);
return bq(b)
}
);

jq.prototype.rk=Z(32,function()
{
var b=z.map(this.hA,function(b)
{
return b.restore()
}
),c=new gq;
c.Am=b;
c.cf=z.map(b,function(b)
{
return b.Zd()
}
);
return c
}
);
Ep.prototype.Yg=Z(25,function()
{
var b=new Zr;
O.forEach(this,function(c,d,e)
{
3==c.nodeType?b.append(Ua(c.nodeValue.substring(e.vj(),e.tj()))):1==c.nodeType&&(-1==e.cc?ic(c)&&b.append("</"+c.tagName+">"):(d=c.cloneNode(n),d=cD(d),A&&"LI"==c.tagName?b.append(d):(c=d.lastIndexOf("<"),b.append(c?d.substr(0,c):d))))
}
,this);
return b.toString()
}
);

Vp.prototype.Yg=Z(24,function()
{
return Zp(this).Yg()
}
);
aq.prototype.Yg=Z(23,function()
{
return z.map(dq(this),cD).join("")
}
);
gq.prototype.Yg=Z(22,function()
{
return this.be()
}
);
tp.prototype.Op=Z(16,function()
{
var b=this.Qc?-1:1;
this.cc==b&&(this.cc=-1*b,this.depth+=this.cc*(this.Qc?-1:1))
}
);
Dp.prototype.Op=Z(15,function()
{
Dp.m.Op.apply(this);
uc(this.fa,this.ra)&&f(O.fb)
}
);
$d.prototype.fD=Z(13,function(b,c)
{
this.log(fe,b,c)
}
);

Jd.prototype.setInterval=Z(11,function(b)
{
this.dh=b;
this.qa&&this.enabled?(this.stop(),this.start()):this.qa&&this.stop()
}
);
Xm.prototype.bx=Z(10,function()
{
return this.h().innerHTML
}
);
Cp.prototype.wh=Z(9,function(b,c)
{
this.insertNode(b,j);
this.insertNode(c,n)
}
);

Gp.prototype.wh=Z(8,function(b,c)
{
var d=cc(Tb(this.V()));
if(d=lq(d))var e=d.V(),g=d.ia(),h=d.sa(),l=d.Ia();
var m=this.O.cloneRange(),p=this.O.cloneRange();
m.collapse(n);
p.collapse(j);
m.insertNode(c);
p.insertNode(b);
m.detach();
p.detach();
if(d)
{
if(3==e.nodeType)for(;
h>e.length;
)
{
h-=e.length;
do e=e.nextSibling;
while(e==b||e==c)
}
if(3==g.nodeType)for(;
l>g.length;
)
{
l-=g.length;
do g=g.nextSibling;
while(g==b||g==c)
}
Yp(e,h,g,l).select()
}

}
);

Lp.prototype.wh=Z(7,function(b,c)
{
var d=this.O.duplicate(),e=this.O.duplicate();
Rp(d,b,j);
Rp(e,c,n);
this.De()
}
);
Vp.prototype.wh=Z(6,function(b,c)
{
Zp(this).wh(b,c);
this.De()
}
);
Gp.prototype.bd=Z(5,function()
{
var b=this.O;
b.extractContents();
if(b.startContainer.hasChildNodes()&&(b=b.startContainer.childNodes[b.startOffset]))
{
var c=b.previousSibling;
""==Ic(b)&&L(b);
c&&""==Ic(c)&&L(c)
}

}
);

Lp.prototype.bd=Z(4,function()
{
if(!this.isCollapsed()&&this.O.htmlText)
{
var b=this.V(),c=this.ia(),d=this.O.text,e=this.O.duplicate();
e.moveStart("character",1);
e.moveStart("character",-1);
e.text==d&&(this.O=e);
this.O.text="";
this.De();
d=this.V();
e=this.sa();
try
{
var g=b.nextSibling;
b==c&&(b.parentNode&&3==b.nodeType&&g&&3==g.nodeType)&&(b.nodeValue+=g.nodeValue,L(g),this.O=Np(d),this.O.move("character",e),this.De())
}
catch(h)
{

}

}

}
);
Vp.prototype.bd=Z(3,function()
{
Zp(this).bd();
this.De()
}
);

aq.prototype.bd=Z(2,function()
{
if(this.O)
{
for(var b=[],c=0,d=this.O.length;
c<d;
c++)b.push(this.O.item(c));
z.forEach(b,L);
this.collapse(n)
}

}
);
gq.prototype.bd=Z(1,function()
{
z.forEach(wp(this),function(b)
{
b.bd()
}
)
}
);

a.dD=function(b,c)
{
var d=c.md();
b.rd[d]&&b.Ob.log(ce,"Cannot register the same class of plugin twice.",i);
b.rd[d]=c;
for(var e in xv)c[xv[e]]&&b.Jj[e].push(c);
c.B=b;
b.ee()&&c.enable(b)
}
,a.eD=function(b)
{
return b.B&&b.B.kb
}
,a.fD=function(b)
{
var c=b.fa.parentNode;
return new Wr(c,z.indexOf(c.childNodes,b.fa))
}
,a.gD=function(b,c,d,e)
{
return Yp(b,c,d,e)
}
,a.hD=function(b)
{
M.call(this);
this.MI=fb();
this.$D=fb();
this.G=Ub(b.wa());
b.wh(this.G.o("SPAN",
{
id:this.MI
}
),this.G.o("SPAN",
{
id:this.$D
}
))
}
;
y(hD,rp);

hD.prototype.qp=function(b)
{
L(bD(this,j));
L(bD(this,n));
return b
}
;
hD.prototype.rk=function()
{
var b=k,c=bD(this,j),d=bD(this,n);
if(c&&d)
{
var b=c.parentNode,c=z.indexOf(b.childNodes,c),e=d.parentNode,d=z.indexOf(e.childNodes,d);
e==b&&(d-=1);
b=Yp(b,c,e,d);
b=this.qp(b);
b.select()
}
else this.qp();
return b
}
;
hD.prototype.p=function()
{
this.qp();
this.G=k
}
;

a.iD=function(b)
{
var c;
if(3==b.fa.nodeType)for(c=b.fa.previousSibling;
c&&3==c.nodeType;
c=c.previousSibling)b.offset+=Xr(c);
else c=b.fa.previousSibling;
var d=b.fa.parentNode;
b.fa=c?c.nextSibling:d.firstChild;
return b
}
,a.jD=function(b,c)
{
return c?Yr(b.V(),b.sa()):Yr(b.ia(),b.Ia())
}
,a.kD=function(b)
{
for(var c=k,d=b.firstChild;
d;
)
{
var e=d.nextSibling;
3==d.nodeType?""==d.nodeValue?b.removeChild(d):c?(c.nodeValue+=d.nodeValue,b.removeChild(d)):c=d:(kD(d),c=k);
d=e
}

}
,a.lD=function(b)
{
var c=b&&b.nodeName.toLowerCase();

return!(!b||"block"!=(1!=b.nodeType?k:A?Wf(b,"display"):Vf(b,"display"))&&!("td"==c||"table"==c||"li"==c))
}
,a.mD=function(b)
{
return Jc(b,lD,j)
}
,a.nD=function(b,c)
{
if(c)
{
var d,e=iD(jD(c,j)),g=fD(e),h=e.fa.previousSibling;
3==e.fa.nodeType&&(e.fa=k);
var l=iD(jD(c,n)),m=fD(l),p=l.fa.previousSibling;
3==l.fa.nodeType&&(l.fa=k);
d=function()
{
!e.fa&&h&&(e.fa=h.nextSibling,e.fa||(e=new Wr(h,Xr(h))));
!l.fa&&p&&(l.fa=p.nextSibling,l.fa||(l=new Wr(p,Xr(p))));
return Yp(e.fa||g.fa.firstChild||g.fa,e.offset,l.fa||
m.fa.firstChild||m.fa,l.offset)
}
;
var r=mD(c.Db())
}
r?(r=yc(r,b),A?kD(r):r.normalize()):b&&(A?kD(b):b.normalize());
return d?d():k
}
,a.oD=function(b,c,d)
{
Us.call(this,c,b||Sz.D(),d)
}
;
y(oD,Us);
a.pD=function(b)
{
return b.getAttribute&&"true"==b.getAttribute("g_editable")
}
,a.qD=function(b)
{
hD.call(this,b)
}
;
y(qD,hD);
qD.prototype.qp=function(b)
{
var c=bD(this,j),d=bD(this,n),c=c&&d?yc(c,d):c||d;
qD.m.qp.call(this);
if(b)return nD(c,b);
c&&(b=lq(cc(Tb(c))),(b=nD(c,b))&&b.select())
}
;

a.rD=function(b,c,d)
{
for(var e=(c=1==c)?b.V():b.ia(),g=c?b.sa():b.Ia(),h=b.Db();
e!=h&&e!=d&&!(c&&0!=g||!c&&g!=Xr(e));
)var l=e.parentNode,e=z.indexOf(l.childNodes,e),g=c?e:e+1,e=l;
return gD(c?e:b.V(),c?g:b.sa(),c?b.ia():e,c?b.Ia():g)
}
,a.sD=function(b)
{
tg(b,n);
if(uq)for(var c=b,b=b.parentNode;
b&&"HTML"!=b.tagName;
)
{
if(sg?"none"==b.style[sg].toLowerCase():(A||tb)&&"on"==b.getAttribute("unselectable"))
{
tg(b,n,j);
for(var d=0,e=b.childNodes.length;
d<e;
d++)
{
var g=b.childNodes[d];
g!=c&&1==g.nodeType&&tg(b.childNodes[d],
j)
}

}
c=b;
b=b.parentNode
}

}
,a.tD=function(b)
{
var c=b.target.tagName;
"TEXTAREA"!=c&&"INPUT"!=c&&b.preventDefault()
}
,a.uD=void 0,a.vD=function(b)
{
var c=b.Db();
return b.V()!=c.parentElement&&pD(c)||!!Jc(c,pD)
}
,a.wD=function(b,c)
{
var d=rD(b,1,c),d=rD(d,0,c),e=d.V(),g=d.ia(),h=d.sa(),d=d.Ia();
if(e==g)
{
for(;
g!=c&&0==h&&d==Xr(g);
)e=g.parentNode,h=z.indexOf(e.childNodes,g),d=h+1,g=e;
e=g
}
return Yp(e,h,g,d)
}
,a.xD=function(b,c)
{
uq&&c.c(b,"mousedown",tD,j);
tg(b,j);
for(var d=b.getElementsByTagName("INPUT"),e=0,g=
d.length;
e<g;
e++)
{
var h=d[e];
h.type in Nq&&sD(h)
}
z.forEach(b.getElementsByTagName("TEXTAREA"),sD)
}
,a.yD=function(b)
{
return!!Lq[b.tagName]
}
,a.zD=function(b)
{
return ns(O.filter(new ls(b),ms))
}
,a.AD=void 0,a.BD=function(b)
{
var c=arguments,d=c.length;
return function()
{
for(var b=0;
b<d;
b++)if(!c[b].apply(this,arguments))return n;
return j
}

}
,a.CD=function(b)
{
this.Tf=b;
this.BQ=j;
this.Gw=[]
}
,a.DD=function(b)
{
b.Vv||(b.Vv=Ic(b.Tf));
return b.Vv
}
;
a.ED=function()
{
wv.call(this)
}
;
y(ED,wv);
ED.prototype.md=s("BTF");
ED.prototype.Ob=le("goog.editor.plugins.BasicTextFormatter");
a.FD=E.Ym(
{
aK:"+link",nX:"+formatBlock",AX:"+indent",aY:"+outdent",EY:"+strikeThrough",wX:"+insertHorizontalRule",FY:"+subscript",GY:"+superscript",RY:"+underline",QW:"+bold",CX:"+italic",lX:"+fontSize",kX:"+fontName",jX:"+foreColor",KW:"+backColor",ZX:"+insertOrderedList",VY:"+insertUnorderedList",DX:"+justifyCenter",EX:"+justifyFull",GX:"+justifyRight",FX:"+justifyLeft"
}
);

t=ED.prototype;
t.Qe=function(b)
{
return b in FD
}
;
t.Ie=function()
{
return Zv(this.B)
}
;
a.GD=function(b)
{
return eD(b).wa()
}
;

t.nf=function(b,c)
{
var d,e,g,h,l,m=c;
switch(b)
{
case "+backColor":if(m!==k)if(Aq)
{
e=m;
g=Zv(this.B);
var p,r;
g&&g.isCollapsed()&&(p=eD(this).createTextNode(B?" ":""),m=g.V(),r=1==m.nodeType?m:m.parentNode,""==r.innerHTML?(r.style.textIndent="-10000px",r.appendChild(p)):(r=eD(this).o("span",
{
style:"text-indent:-10000px"
}
,p),g.zg(r)),Ap(p).select());
HD(this,"hiliteColor",e,n,j);
p&&(B&&(p.data=""),r.style.textIndent="")
}
else tb?HD(this,"hiliteColor",m):HD(this,b,m);
break;
case "+link":a:
{
l=m;
this.B.Pe||
eD(this).Sa().focus();
g=(e=this.Ie())&&e.Db();
if((g=Kc(g,"A"))&&Jc(g,pD))pc(g);
else
{
g=k;
var x=[];
if((m=e&&e.Db())&&"IMG"==m.tagName)l=k;
else
{
if(e&&e.isCollapsed())e=e.Je(0).Zd(),rq?(g=eD(this).createElement("A"),e.insertNode(g)):qq&&(e.pasteHTML("<a id='newLink'></a>"),g=eD(this).h("newLink"),g.removeAttribute("id"));
else
{
var F=fb();
HD(this,"CreateLink",F);
z.forEach(this.B.h().getElementsByTagName("A"),function(b)
{
Ks(b.href,F)&&x.push(b)
}
);
x.length&&(g=x.pop())
}
e=g;
g=new CD(e);
g.Tf.href="/";
l&&(e.target=
l);
x&&(g.Gw=x);
l=g
}
if(l)
{
if(!this.B.execCommand("link",l))if(h=this.B.cl.prompt(KA,"http://"))if(e=l,g=DD(l)||h,m=e.Tf,m.href=h,p=DD(e),g!=p&&(h=zs(m),3==h.nodeType&&(h=h.parentNode),Ic(h)!=p&&(h=m),kc(h),m=Ub(h),h.appendChild(m.createTextNode(g)),e.Vv=k),e.BQ=n,e=l.Tf,Eq)
{
g=e.nextSibling;
if(!g||!(3==g.nodeType&&(Fa(g.data," ")||Fa(g.data," "))))g=Ub(e).createTextNode(" "),mc(g,e);
nq(g,1).select()
}
else bs(e,n);
else
{
e=Ap(l.Tf);
e=new qD(e);
pc(l.Tf);
for(l.Tf=k;
l.Gw.length;
)pc(l.Gw.pop());
e.restore().select();

l=k;
break a
}
break a
}

}
l=k
}
break;
case "+justifyCenter":case "+justifyFull":case "+justifyRight":case "+justifyLeft":HD(this,b,k,n,j);
B&&HD(this,b,k,n,j);
(!yq||!B)&&O.forEach(Zv(this.B),ID);
break;
default:A&&("+formatBlock"==b&&m)&&(m="<"+m+">");
if("+foreColor"==b&&m===k)break;
switch(b)
{
case "+indent":case "+outdent":yq&&(B&&(e=j),tb&&(e="+outdent"==b?!GD(this).queryCommandEnabled("outdent"):j));
case "+insertOrderedList":case "+insertUnorderedList":if(p=Hq)p=GD(this),p=JD(this,j,p,b,i);
if(p)g="P"!=this.B.queryCommandValue("+defaultTag");

else if(!Iq&&(A||tb))
{
d=this.Ie();
p=d.Db();
var H=GD(this);
KD.lastIndex=0;
KD.test(p.innerHTML)&&(d=d.V()&&d.ia()?new hD(d):k,"P"==p.tagName?LD(p,j):(p.innerHTML=p.innerHTML.replace(KD,'<p$1 trtempbr="temp_br">'),p=z.toArray(p.getElementsByTagName("P")),O.forEach(p,function(b)
{
if("temp_br"==b.getAttribute("trtempbr"))
{
b.removeAttribute("trtempbr");
if(ks(Hc(b)))
{
var c=A?H.createTextNode(" "):H.createElement("BR");
b.appendChild(c)
}
LD(b)
}

}
)),d.restore())
}
B&&(Gq&&!this.queryCommandValue(b))&&(p=this.B.queryCommandValue("+defaultTag"),
"P"==p||"DIV"==p?p=n:(p=this.Ie(),p.isCollapsed()&&3!=p.wc().nodeType?(d=eD(this).createTextNode(" "),p.insertNode(d,n),Ap(d).select(),p=j):p=n),h|=p);
case "+formatBlock":d=!!this.B.uj("Bidi");
break;
case "+subscript":case "+superscript":Fq&&!this.queryCommandValue(b)&&(p="+subscript"==b?"+superscript":"+subscript",r=MD(p),this.queryCommandValue(p)||GD(this).execCommand(r,n,k),GD(this).execCommand(r,n,k));
break;
case "+underline":case "+bold":case "+italic":e=B&&yq&&this.queryCommandValue(b);
break;

case "+foreColor":case "+fontName":e=yq&&B
}
HD(this,b,m,d,!!e);
h&&GD(this).execCommand("Delete",n,j);
g&&GD(this).execCommand("FormatBlock",n,"<div>")
}
B&&!this.B.bh&&eD(this).Sa().focus();
return l
}
;

t.queryCommandValue=function(b)
{
var c;
switch(b)
{
case "+link":return b=(b=this.Ie())&&b.Db(),b=Kc(b,"A"),!!b&&!!Jc(b,pD);
case "+justifyCenter":case "+justifyFull":case "+justifyRight":case "+justifyLeft":return ND(this,b);
case "+formatBlock":var b=Zv(this.B),d=k;
O.forEach(b,function(b,c,e)
{
-1!=e.cc&&(b=mD(b).tagName,d=d||b,d!=b&&(d=k,f(O.fb)),e.Op())
}
);
return d;
case "+indent":case "+outdent":case "+insertHorizontalRule":return n;
case "+fontSize":case "+fontName":case "+foreColor":case "+backColor":return this.tt(GD(this),
b,yq&&B);
case "+underline":case "+bold":case "+italic":c=yq&&B;
default:var e=GD(this);
return JD(this,j,e,b,c)
}

}
;
t.CH=function(b)
{
wq&&b.match(/^\s*<script/i)&&(b="&nbsp;
"+b);
xq&&(b=b.replace(/<(\/?)strong([^\w])/gi,"<$1b$2"),b=b.replace(/<(\/?)em([^\w])/gi,"<$1i$2"));
return b
}
;

t.mM=function(b)
{
for(var b=b.getElementsByTagName("IMG"),c=0,d;
d=b[c];
c++)if(A)
{
d.removeAttribute("tabIndex");
d.removeAttribute("tabIndexSet");
var e=d;
"removeAttribute"in e&&e.removeAttribute(sa);
try
{
delete e[sa]
}
catch(g)
{

}
d.DR&&(d.tabIndex=d.DR)
}

}
;
t.nM=function(b)
{
if(C)
{
for(var c=Vb(this.B.kb.Fa,"HEAD",i,i),d=[],e=c.length,g=1;
g<e;
++g)for(var h=c[g].getElementsByTagName("STYLE"),l=h.length,m=0;
m<l;
++m)d.push(h[m].outerHTML);
return d.join("")+b
}
return b
}
;

t.Zr=function(b,c,d)
{
if(!d)return n;
var e;
switch(c)
{
case "b":e="+bold";
break;
case "i":e="+italic";
break;
case "u":e="+underline";
break;
case "s":return j
}
return e?(this.B.execCommand(e),j):n
}
;

a.KD=A?/<br([^\/>]*)\/?>/gi:/<br([^\/>]*)\/?>(?!<\/(div|p)>)/gi,a.LD=function(b,c)
{
if(A||tb)
{
var d=b.outerHTML.replace(/<(\/?)p/gi,"<$1div");
c&&(d=d.replace(KD,"</div><div$1>"));
tb&&!/<\/div>$/i.test(d)&&(d+="</div>");
b.outerHTML=d
}

}
,a.MD=function(b)
{
return 0==b.indexOf("+")?b.substring(1):b
}
,a.ID=function(b)
{
b=mD(b);
b.align&&(b.style.textAlign=b.align,b.removeAttribute("align"))
}
,a.HD=function(b,c,d,e,g)
{
var h=k;
e&&(h=b.B.queryCommandValue("rtl")?"rtl":b.B.queryCommandValue("ltr")?"ltr":k);
var c=
MD(c),l,m;
if(A)
{
var p=c;
m=[];
var e=k,r=b.Ie();
l=eD(b);
if(p in OD)
{
var x=r&&r.Db();
if(x)
{
for(var F=Wb("BLOCKQUOTE",k,x),H,G=0;
G<F.length;
G++)if(r.containsNode(F[G]))
{
H=F[G];
break
}
if(x=H||Kc(x,"BLOCKQUOTE"))e=l.o("div",
{
style:"height:0"
}
),x.appendChild(e),m.push(e),H?r=Yp(H,0,e,0):r.containsNode(e)&&(r=gD(r.V(),r.sa(),e,0)),r.select()
}

}
H=b.B;
!H.qc()&&!e&&p in QD&&(H=H.h(),r&&(r.isCollapsed()&&!sc(H))&&(e=r.Je(0).Zd(),r=e.duplicate(),r.moveToElementText(H),r.collapse(n),r.isEqual(e)&&(r=l.createTextNode(" "),
H.appendChild(r),e.move("character",1),e.move("character",-1),e.select(),m.push(r))),e=l.o("div",
{
style:"height:0"
}
),H.appendChild(e),m.push(e));
l=m[0];
m=m[1]
}
if(C)
{
l=c;
var Q;
RD[l]&&(Q=eD(b).o("div",
{
style:"height: 0"
}
,"x"),b.B.h().appendChild(Q));
SD[l]&&(l=b.B.h(),Q=eD(b).o("div",
{
style:"height: 0"
}
,"x"),l.insertBefore(Q,l.firstChild));
l=Q
}
if(B&&(Q=c,Gb("1.9")&&"formatblock"==Q.toLowerCase()&&(Q=b.Ie(),H=Q.V(),Q.isCollapsed()&&(H&&"BODY"==H.tagName)&&(e=Q.sa(),(H=H.childNodes[e])&&"BR"==H.tagName))))Q=
Q.Zd(),Q.setStart(H,0),Q.setEnd(H,0);
if(Jq&&"fontsize"==c.toLowerCase())
{
var X=wD(Zv(b.B),b.B.h());
O.forEach(O.filter(X,function(b,c,d)
{
return 1==d.cc&&X.containsNode(b)
}
),function(b)
{
Tf(b,"font-size","");
B&&(0==b.style.length&&b.getAttribute("style")!=k)&&b.removeAttribute("style")
}
)
}
Q=GD(b);
if(g&&yq&&(Q.execCommand("styleWithCSS",n,j),tb))
{
H=[];
e=Zv(b.B).Db();
do H.push(e);
while(e=e.parentNode);
H=O.cM(O.ed(Zv(b.B)),O.ed(H));
H=O.filter(H,lD);
O.forEach(H,function(b)
{
var c=b.style.outline;
b.style.outline=
"0px solid red";
b.style.outline=c
}
)
}
Q.execCommand(c,n,d);
g&&yq&&Q.execCommand("styleWithCSS",n,n);
C&&(!Gb("526")&&"formatblock"==c.toLowerCase()&&d&&/^[<]?h\d[>]?$/i.test(d))&&O.forEach(b.Ie(),function(b)
{
"Apple-style-span"==b.className&&(b.style.fontSize="",b.style.fontWeight="")
}
);
if(/insert(un)?orderedlist/i.test(c))
{
if(C)
{
var ka=n;
O.forEach(b.Ie(),function(b)
{
var c=b.tagName;
if("UL"==c||"OL"==c)if(ka)
{
if(c=tc(b))
{
var d=b.ownerDocument.createRange();
d.setStartAfter(c);
d.setEndBefore(b);
if(Ha(d.toString())&&
c.nodeName==b.nodeName)
{
for(;
c.lastChild;
)b.insertBefore(c.lastChild,b.firstChild);
c.parentNode.removeChild(c)
}

}

}
else ka=j
}
)
}
if(A)
{
for(c=(c=b.Ie())&&c.wc();
c&&"UL"!=c.tagName&&"OL"!=c.tagName;
)c=c.parentNode;
c&&(c=c.parentNode);
c&&(d=z.toArray(c.getElementsByTagName("UL")),z.extend(d,z.toArray(c.getElementsByTagName("OL"))),z.forEach(d,function(b)
{
var c=b.type;
if(c&&!("UL"==b.tagName?TD:UD)[c])b.type=""
}
));
m&&L(m)
}

}
l&&L(l);
h&&b.B.execCommand(h)
}
,a.QD=
{
indent:1,outdent:1,insertOrderedList:1,insertUnorderedList:1,
justifyCenter:1,justifyFull:1,justifyRight:1,justifyLeft:1,ltr:1,rtl:1
}
,a.OD=
{
insertOrderedList:1,insertUnorderedList:1
}
,a.UD=
{
1:1,a:1,A:1,i:1,I:1
}
,a.TD=
{
disc:1,circle:1,square:1
}
,a.RD=
{
justifyCenter:1,justifyFull:1,justifyRight:1,justifyLeft:1,formatBlock:1
}
,a.SD=
{
insertOrderedList:1,insertUnorderedList:1
}
,a.VD=
{
center:1,justify:1,right:1,left:1
}
,a.ND=function(b,c)
{
var d=c.replace("+justify","").toLowerCase();
"full"==d&&(d="justify");
var e=b.B.uj("Bidi");
if(e)return d==e.WZ();
var g=b.Ie();
if(!g)return n;

for(var h=g.Db(),e=z.filter(h.childNodes,function(b)
{
return ms(b)&&g.containsNode(b,j)
}
),e=e.length?e:[h],h=0;
h<e.length;
h++)
{
var l=mD(e[h]),m=d,p=Xf(l,"textAlign"),p=p.replace(/^-(moz|webkit)-/,"");
VD[p]||(p=l.align||"left");
if(m!=p)return n
}
return j
}
;
ED.prototype.tt=function(b,c,d)
{
return JD(this,n,b,c,d)
}
;
a.JD=function(b,c,d,e,g)
{
e=MD(e);
if(g)
{
var h=GD(b);
h.execCommand("styleWithCSS",n,j)
}
b=c?d.queryCommandState(e):d.queryCommandValue(e);
g&&h.execCommand("styleWithCSS",n,n);
return b
}
;
a.WD=function(b,c)
{
M.call(this);
this.dt=[];
for(this.Zs=[];
b&&"BODY"!=b.nodeName&&b!=c;
)
{
for(var d=0,e=b.previousSibling;
e;
)e=e.previousSibling,++d;
this.dt.unshift(d);
this.Zs.unshift(b.nodeName);
b=b.parentNode
}

}
;
y(WD,M);
WD.prototype.toString=function()
{
for(var b=[],c,d=0;
c=this.Zs[d];
d++)b.push(this.dt[d]+","+c);
return b.join("\n")
}
;
a.XD=function(b,c)
{
for(var d,e=c,g=0;
d=b.Zs[g];
++g)if(e=e.childNodes[b.dt[g]],!e||e.nodeName!=d)return k;
return e
}
;
WD.prototype.p=function()
{
delete this.dt;
delete this.Zs
}
;
le("goog.editor.plugins.Blockquote");
a.YD=function()
{
wv.call(this)
}
;
y(YD,wv);
t=YD.prototype;
t.Gi="DIV";
t.md=s("EnterHandler");
t.enable=function(b)
{
YD.m.enable.call(this,b);
Kq&&("P"==this.Gi||"DIV"==this.Gi)&&eD(this).wa().execCommand("opera-defaultBlock",n,this.Gi)
}
;
t.CH=function(b)
{
return!b||ks(b)?wq?this.VN():"":b
}
;
t.VN=lf("<br>");

t.KO=function(b)
{
if(B&&this.B.bh)return n;
if(8==b.keyCode)
{
var c=Zv(this.B),d=this.B.h(),c=c&&c.V();
d.firstChild==c&&Ms(c)&&(b.preventDefault(),b.stopPropagation())
}
else if(13==b.keyCode)if(B)
{
if(!b.shiftKey)
{
var d=Zv(this.B),c=!d||d.isCollapsed(),e=rq?ZD(this):$D(this),g=this.B.execCommand("+splitBlockquote",e);
g&&(b.preventDefault(),b.stopPropagation());
rq||e.removeNode(j);
g||this.zO(b,c,d)
}

}
else
{
this.B.Vh();
d=rq?ZD(this):$D(this);
if(c=!!this.B.execCommand("+splitBlockquote",d))b.preventDefault(),
b.stopPropagation();
rq||d.removeNode(j);
C&&this.AO(b);
if(A||tb)aE(this);
else if(!c&&C)
{
if(c=d=Zv(this.B))a:
{
for(c=d.Db();
c;
c=c.parentNode)if(yD(c))
{
c="BLOCKQUOTE"==c.tagName;
break a
}
c=n
}
if(c)
{
c=eD(this);
e=c.createElement("BR");
d.insertNode(e,j);
if(d=yD(e.parentNode))
{
for(d=e.nextSibling;
d&&3==d.nodeType&&!d.nodeValue;
)d=d.nextSibling;
d=!d
}
d&&lc(c.createElement("BR"),e);
bs(e,n);
b.preventDefault()
}

}
this.B.jf()
}
else if(B&&46==b.keyCode&&(c=Zv(this.B),c.isCollapsed()&&(d=c.ia(),1==d.nodeType&&(c=d.childNodes[c.Ia()])&&
"BR"==c.tagName)))e=ns(O.filter(new ls(c,n,j),ms)),g=c.nextSibling,d.removeChild(c),b.preventDefault(),g&&yD(g)&&(e&&!("BR"==e.tagName||yD(e))?nq(e,Xr(e)).select():(b=zs(g),nq(b,0).select()));
return n
}
;
t.Yr=function(b)
{
if(B&&this.B.bh)return n;
(A||tb)&&13==b.keyCode&&aE(this,j);
return n
}
;
t.AO=ha;
t.zO=ha;

a.bE=E.Uh("LI","DIV","H1","H2","H3","H4","H5","H6"),a.aE=function(b,c)
{
for(var d=Zv(b.B),e=d.wc(),g=b.B.h(),h;
e&&e!=g;
)
{
var l=e.nodeName;
if("DIV"==l||bE[l]&&(!c||!(Ms(e)&&1==e.getElementsByTagName("BR").length)))
{
if(tb&&h)
{
"DIV"==l&&(h==e.lastChild&&Ms(h))&&(mc(h,e),Ap(h).select());
break
}
return
}
tb&&(c&&"P"==l&&"DIV"!=l)&&(h=e);
e=e.parentNode
}
if(A&&!Gb(9))
{
var m=n,d=d.Zd(),e=d.duplicate();
e.moveEnd("character",1);
if(e.text.length&&(m=e.parentElement(),e=e.duplicate(),e.collapse(n),e=e.parentElement(),
m=m!=e&&e!=d.parentElement()))d.move("character",-1),d.select()
}
b.B.kb.wa().execCommand("FormatBlock",n,"<DIV>");
m&&(d.move("character",1),d.select())
}
,a.$D=function(b)
{
var b=eD(b).wa(),c=b.selection.createRange(),d=fb();
c.pasteHTML('<span id="'+d+'"></span>');
b=b.getElementById(d);
b.id="";
return b
}
,a.ZD=function(b)
{
b=Zv(b.B);
if(!b.isCollapsed())
{
var c=j;
if(tb)
{
var d=b.V(),e=b.sa();
d==b.ia()&&(d.lastChild&&"BR"==d.lastChild.tagName&&e==d.childNodes.length-1)&&(c=n)
}
if(c)
{
var g=b;
if(g&&!g.isCollapsed())
{
var h=
j,c=g.Db(),d=new WD(g.V(),c),e=g.sa(),l;
l=g;
var m=l.V();
lD(m)&&(m=m.childNodes[l.sa()]||m);
var m=mD(m),p=l.ia();
lD(p)&&(p=p.childNodes[l.Ia()]||p);
p=mD(p);
l=m==p;
if(m=!l)a:
{
var p=g,m=p.ia(),p=p.Ia(),r=m;
if(lD(r))
{
var x=r.childNodes[p];
if(!x||1==x.nodeType&&lD(x))
{
m=n;
break a
}

}
for(x=mD(r);
x!=r;
)
{
if(zD(r))
{
m=j;
break a
}
r=r.parentNode
}
m=p!=Xr(m)
}
g.bd();
(g=XD(d,c))?g=nq(g,e):(g=nq(c,c.childNodes.length),h=n);
g.select();
l&&(l=mD(g.V()),Ms(l,j)&&(h="&nbsp;
",tb&&"LI"==l.tagName&&(h="<br>"),l.innerHTML=h,
Ls(l.firstChild),h=n));
m&&(g=mD(g.V()),l=zD(g),g&&l&&(jc(g,l.childNodes),L(l)));
h&&(g=nq(XD(d,c),e),g.select())
}

}

}
return jD(b,j)
}
;
a.cE=function()
{

}
,a.dE=new cE,a.eE=["click",B?"keypress":"keydown"];
cE.prototype.c=function(b,c,d,e,g)
{
function h(b)
{
if("click"==b.type&&od(b))c.call(e,b);
else if(13==b.keyCode||3==b.keyCode)b.type="keypress",c.call(e,b)
}
h.Uj=c;
h.rU=e;
g?g.c(b,eE,h):N(b,eE,h)
}
;
cE.prototype.va=function(b,c,d,e,g)
{
for(var h=0;
d=eE[h];
h++)
{
var l;
l=zd(b,d,n)||[];
for(var m,p=0;
m=l[p];
p++)if(m.rg.Uj==c&&m.rg.rU==e)
{
g?g.va(b,d,m.rg):yd(b,d,m.rg);
break
}

}

}
;
a.gE=function(b)
{
M.call(this);
this.Pk=b||window;
this.Qs=N(this.Pk,"resize",this.Ix,n,this);
this.nc=$b(this.Pk);
if(C&&nb||tb&&this.Pk.self!=this.Pk.top)this.uu=window.setInterval(v(this.VC,this),fE)
}
;
y(gE,Hd);
a.fE=500;
t=gE.prototype;
t.Qs=k;
t.Pk=k;
t.nc=k;
t.uu=k;
t.Ql=function()
{
return this.nc?this.nc.clone():k
}
;
t.p=function()
{
gE.m.p.call(this);
this.Qs&&(Ad(this.Qs),this.Qs=k);
this.uu&&(window.clearInterval(this.uu),this.uu=k);
this.nc=this.Pk=k
}
;
t.Ix=function()
{
this.VC()
}
;

t.VC=function()
{
var b=$b(this.Pk);
Rb(b,this.nc)||(this.nc=b,this.dispatchEvent("resize"))
}
;
a.iE=function(b,c)
{
M.call(this);
this.G=Ub(b);
this.P=new me(this);
this.BB=new gE(this.G.Sa());
this.pd=
{

}
;
this.yd=this.G.o("DIV",
{
className:hE
}
);
R(this.yd,n);
b.appendChild(this.yd);
Tf(this.yd,"zIndex",c);
this.An=this.yd;
this.rM=this.G.o("DIV",
{
className:"tr_bubble_closebox",innerHTML:"&nbsp;
"
}
);
this.An.appendChild(this.rM);
xD(this.yd,this.P);
this.vi=new rh(this.yd)
}
;
y(iE,Hd);
a.hE="tr_bubble";
t=iE.prototype;
t.Ob=le("goog.ui.editor.Bubble");

t.p=function()
{
iE.m.p.call(this);
L(this.yd);
this.yd=k;
this.P.F();
this.P=k;
this.BB.F();
this.BB=k
}
;
t.aa=q("An");
t.Db=q("yd");
t.wP=function()
{
this.R()&&this.na()
}
;
t.aP=function()
{
for(var b in this.pd)L(this.pd[b].element);
this.pd=
{

}
;
D.remove(this.yd,"tr_multi_bubble");
this.P.Pc();
this.dispatchEvent("hide")
}
;
t.R=function()
{
return this.vi.R()
}
;
a.jE=A?4:2,a.kE=new Of(jE,0,jE,0);

iE.prototype.na=function()
{
var b=k,c=j,d;
for(d in this.pd)var e=this.pd[d],b=e.dB,c=c&&e.xT;
d=496;
b=eg(this.yd)!=eg(b);
c&&(d=lE(this,b?7:5,4,9));
d&496&&(d=lE(this,b?6:4,5,9));
d&496&&(d=lE(this,b?7:5,4,5),d&496&&this.Ob.Mk("reposition(): positionAtAnchor() failed with "+d))
}
;

a.lE=function(b,c,d,e)
{
var g=k,h;
for(h in b.pd)
{
var l=b.pd[h].dB;
if(!g||uc(l,g))g=b.pd[h].dB
}
return mm(g,c,b.yd,d,k,kE,e)
}
,a.mE=function(b,c,d,e,g,h)
{
this.type=d;
this.dB=g;
this.xT=h;
this.element=b.o("DIV",
{
className:"tr_bubble_panel",id:c
}
,b.o("DIV",
{
className:"tr_bubble_panel_title"
}
,e+":"),b.o("DIV",
{
className:"tr_bubble_panel_content"
}
))
}
;
mE.prototype.aa=function()
{
return this.element.lastChild
}
;
a.nE=function()
{
wv.call(this);
this.jc=new me(this)
}
;
y(nE,wv);
a.oE=function(b,c)
{
return new iE(b,c)
}
,a.pE=
{

}
;
t=nE.prototype;
t.ck=k;
t.vy=n;
t.md=lf("AbstractBubblePlugin");
t.Yr=function()
{
this.R()&&this.Cj();
return n
}
;

t.Cj=function(b,c)
{
var d;
if(b)d=b.target;
else if(c)d=c;
else
{
var e=Zv(this.B);
if(e)
{
var g=e.V(),h=e.ia(),l=e.sa(),m=e.Ia();
A&&(e.isCollapsed()&&g!=h)&&(e=nq(g,l));
1==g.nodeType&&(g==h&&l==m-1)&&(g=g.childNodes[l],1==g.nodeType&&(d=g))
}
d=d||e&&e.Db()
}
var p;
a:
{
if(d&&(l=this.SN(d)))
{
if(l!=this.du||!this.ck)
{
qE(this);
this.ph&&fs(this.ph);
d=rE(this);
var r=this.Ww();
if(!E.some(d.pd,function(b)
{
return b.type==r
}
))
{
this.du=l;
var g=this.Ww(),m=this.wE(),h=v(this.JM,this),x=this.NU(),e=fb(),l=new mE(d.G,e,g,
m,l,!x);
d.pd[e]=l;
m=0;
for(x=d.An.childNodes.length-1;
m<x;
m++)
{
var F=d.An.childNodes[m];
if(d.pd[F.id].type>g)
{
p=F;
break
}

}
lc(l.element,p||d.An.lastChild);
h(l.aa());
xD(l.element,d.P);
p=E.Va(d.pd);
1==p?(d.P.c(d.BB,"resize",d.wP).c(d.vi,"hide",d.aP),d.vi.w(j),d.na()):2==p&&D.add(d.yd,"tr_multi_bubble");
d.na();
this.ck=e;
this.jc.c(d,"hide",this.SE);
this.ti();
this.vy&&this.jc.c(d.aa(),"keydown",this.OR);
this.jc.c(d.aa(),"mouseover",function()
{
this.ph&&this.ph.stop()
}
,this)
}

}
else this.ph&&this.ph.stop();
p=
n;
break a
}
qE(this);
p=n
}
return p
}
;
t.disable=function(b)
{
if(b.Vj==Jv)
{
var c=pE[b.id];
c&&(c.F(),delete pE[b.id])
}

}
;
a.rE=function(b)
{
var c=b.lZ||b.B.cl.document.body;
b.G=Ub(c);
var d=pE[b.B.id];
d||(d=oE.call(k,c,b.B.RL||0),pE[b.B.id]=d);
return d
}
;
t.Ww=s("");
t.wE=s("");
t.NU=mf;

a.qE=function(b)
{
if(b.ck&&(!b.ph||!b.ph.Gb()))b.ph=new kj(function()
{
if(this.ck)
{
var b=rE(this),d=this.ck;
L(b.pd[d].element);
delete b.pd[d];
d=E.Va(b.pd);
1>=d&&D.remove(b.yd,"tr_multi_bubble");
0==d?b.vi.w(n):b.na();
this.SE()
}

}
,250,b),b.ph.start()
}
;
t.ti=ha;
t.SE=function()
{
this.ck=this.du=k;
this.jc.Pc()
}
;
t.Ex=function(b)
{
if(this.vy&&this.R()&&9==b.keyCode&&!b.shiftKey)
{
var c=rE(this).aa();
if(c=J("tr_bubble_link",c))return c.focus(),b.preventDefault(),j
}
return n
}
;

t.OR=function(b)
{
if(this.R()&&9==b.keyCode)
{
var c=rE(this).aa(),c=Xb("tr_bubble_link",c);
if(b.shiftKey?c[0]==b.target:c.length&&c[c.length-1]==b.target)this.B.focus(),b.preventDefault()
}

}
;
t.R=function()
{
return!!this.ck
}
;
t.na=function()
{
var b=rE(this);
b&&b.na()
}
;

t.kr=function(b,c,d,e,g)
{
c=this.G.o("SPAN",
{
className:"tr_bubble_link"
}
,g?this.G.o("I",
{
className:g
}
,c):c);
this.vy&&c.setAttribute("tabindex",0);
c.setAttribute("role","link");
e?e.appendChild(c):(e=this.G.h(b))&&oc(c,e);
c.id=b;
xD(c,this.jc);
d&&(b=this.jc,dE.c(c,d,i,b.ha||b,b));
return c
}
;
w("Go to link: ");
w("Change");
w("Remove");
a.sE=function(b)
{
M.call(this);
this.jd=b
}
;
y(sE,Hd);
sE.prototype.show=function()
{
this.hf||(this.hf=this.Qv(),this.hf.addEventListener(Gh,this.cO,n,this));
this.hf.w(j)
}
;
sE.prototype.hide=function()
{
this.hf&&this.hf.w(n)
}
;
sE.prototype.tb=function()
{
return!!this.hf&&this.hf.R()
}
;
a.tE=function(b)
{
this.xl=b;
this.Qi=new wh("",j,this.xl.jd);
this.Dn=new Eh(this.xl.jd);
this.Cn=
{

}
;
this.Kh("tr-dialog")
}
;
tE.prototype.eb=function(b)
{
this.Qi.eb(b);
return this
}
;

a.uE=function(b,c)
{
var d=w("OK");
b.Dn.set("ok",c||d,j);
b.Cn.ok=v(b.xl.YO,b.xl)
}
,a.vE=function(b)
{
var c=Lh,d=w("取消");
b.Dn.set(c,d,n,j);
b.Cn[c]=v(b.xl.rx,b.xl);
return b
}
;
tE.prototype.ye=function(b,c,d)
{
d=d||fb();
this.Dn.set(d,b);
this.Cn[d]=c;
return this
}
;
tE.prototype.Kh=function(b)
{
D.add(zh(this.Qi),b);
return this
}
;
tE.prototype.Na=function(b)
{
this.Qi.aa().appendChild(b);
return this
}
;

a.wE=function(b)
{
b.Dn.Hb()&&(uE(b),vE(b));
Ih(b.Qi,b.Dn);
var c=b.Cn;
b.Cn=k;
b.Qi.addEventListener(Jh,function(b)
{
if(c[b.key])return c[b.key](b)
}
);
Ch(b.Qi,j);
var d=b.Qi;
b.Qi=k;
return d
}
;
t=sE.prototype;
t.Xw=function(b)
{
return this.hf.tc.Xc(b)
}
;
t.YO=function(b)
{
return(b=this.Ln(b))?this.dispatchEvent(b):n
}
;
t.rx=function()
{
return this.dispatchEvent("cancel")
}
;
t.p=function()
{
this.hf&&(this.hide(),this.hf.F(),this.hf=k);
sE.m.p.call(this)
}
;
t.cO=function()
{
this.dispatchEvent("afterhide")
}
;
a.xE=function(b)
{
wv.call(this);
this.yM=b
}
;
y(xE,wv);
t=xE.prototype;
t.Qe=function(b)
{
return b==this.yM
}
;
t.execCommand=function(b,c)
{
return this.nf.apply(this,arguments)
}
;
t.nf=function(b,c)
{
this.eI||yE(this);
this.yb||(this.yb=this.Pv(Ub(this.B.cl),c));
var d=Zv(this.B);
this.gA=d&&new qD(d);
Os(this.B.kb.Sa());
xd(this.yb,"afterhide",this.mo,n,this);
this.B.bh=j;
this.yb.show();
this.dispatchEvent("dialogOpened");
Av(this.B);
return j
}
;

t.mo=function()
{
this.B.bh=n;
zE(this);
this.eI||yE(this);
this.dispatchEvent("dialogClosed");
Av(this.B);
this.B.qr.selectionchange=za()
}
;
a.zE=function(b)
{
b.gA&&(b.gA.restore(),b.gA=k);
b.B.focus()
}
;
t.p=function()
{
yE(this);
xE.m.p.call(this)
}
;
t.eI=n;
t.ly=n;
a.yE=function(b)
{
b.yb&&!b.ly&&(b.ly=j,b.yb.F(),b.yb=k,b.ly=n)
}
;
a.AE=function()
{

}
;
y(AE,ho);
ia(AE);
t=AE.prototype;
t.N=s("goog-tab");
t.vc=function()
{
return Xc.aC
}
;
t.o=function(b)
{
var c=AE.m.o.call(this,b);
(b=b.lg())&&this.Tc(c,b);
return c
}
;
t.n=function(b,c)
{
var c=AE.m.n.call(this,b,c),d=this.lg(c);
d&&b.Rt(d);
if(b.ca&8&&(d=b.getParent())&&qa(d.Pm))b.bc(8,n),d.Pm(b);
return c
}
;
t.lg=function(b)
{
return b.title||""
}
;
t.Tc=function(b,c)
{
b&&(b.title=c||"")
}
;
a.BE=function(b,c,d)
{
ro.call(this,b,c||AE.D(),d);
uo(this,8,j);
this.yk|=9
}
;
y(BE,ro);
BE.prototype.lg=q("Zp");
BE.prototype.Tc=function(b)
{
this.M.Tc(this.h(),b);
this.Rt(b)
}
;
BE.prototype.Rt=ca("Zp");
po("goog-tab",function()
{
return new BE(k)
}
);
a.CE=function()
{

}
;
y(CE,So);
ia(CE);
CE.prototype.N=s("goog-tab-bar");
CE.prototype.vc=function()
{
return Xc.AK
}
;
CE.prototype.uA=function(b,c,d)
{
this.mG||(this.Yq||DE(this),this.mG=E.Ym(this.Yq));
var e=this.mG[c];
e?(b.Fp(e==EE||e==FE?Vo:Uo),b.nG=e):CE.m.uA.call(this,b,c,d)
}
;
CE.prototype.rf=function(b)
{
var c=CE.m.rf.call(this,b);
this.Yq||DE(this);
c.push(this.Yq[b.nG]);
return c
}
;
a.DE=function(b)
{
var c=b.N();
b.Yq=E.create(GE,c+"-top",HE,c+"-bottom",EE,c+"-start",FE,c+"-end")
}
;
a.JE=function(b,c,d)
{
b=b||GE;
this.Fp(b==EE||b==FE?Vo:Uo);
this.nG=b;
Us.call(this,this.zb,c||CE.D(),d);
IE(this)
}
;
y(JE,Us);
a.GE="top",a.HE="bottom",a.EE="start",a.FE="end";
t=JE.prototype;
t.KL=j;
t.Ef=k;
t.z=function()
{
JE.m.z.call(this);
IE(this)
}
;
t.p=function()
{
JE.m.p.call(this);
this.Ef=k
}
;
t.removeChild=function(b,c)
{
KE(this,b);
return JE.m.removeChild.call(this,b,c)
}
;
t.pA=function(b)
{
JE.m.pA.call(this,b);
this.KL&&this.Pm(qh(this,b))
}
;
t.Pm=function(b)
{
b?b.Om(j):this.Ef&&this.Ef.Om(n)
}
;

a.KE=function(b,c)
{
if(c&&c==b.Ef)
{
for(var d=is(b,c),e=d-1;
c=qh(b,e);
e--)if(c.R()&&c.isEnabled())
{
b.Pm(c);
return
}
for(d+=1;
c=qh(b,d);
d++)if(c.R()&&c.isEnabled())
{
b.Pm(c);
return
}
b.Pm(k)
}

}
;
t.mP=function(b)
{
this.Ef&&this.Ef!=b.target&&this.Ef.Om(n);
this.Ef=b.target
}
;
t.nP=function(b)
{
b.target==this.Ef&&(this.Ef=k)
}
;
t.kP=function(b)
{
KE(this,b.target)
}
;
t.lP=function(b)
{
KE(this,b.target)
}
;
t.Ke=function()
{
Xs(this)||this.td(this.Ef||qh(this,0))
}
;

a.IE=function(b)
{
b.g().c(b,"select",b.mP).c(b,"unselect",b.nP).c(b,"disable",b.kP).c(b,"hide",b.lP)
}
;
po("goog-tab-bar",function()
{
return new JE
}
);
a.LE=function()
{
wv.call(this)
}
;
y(LE,wv);
LE.prototype.Zr=function(b)
{
if(B&&this.B.bh)b=n;
else if(9==b.keyCode&&!b.metaKey&&!b.ctrlKey)
{
var c=Zv(this.B);
Kc(c.Db(),"LI")||O.some(c,function(b)
{
return"LI"==b.tagName
}
)?(this.B.execCommand(b.shiftKey?"+outdent":"+indent"),b.preventDefault(),b=j):b=n
}
else b=n;
return b
}
;
a.ME=function()
{
wv.call(this)
}
;
y(ME,LE);
ME.prototype.md=s("ListTabHandler");
a.NE=function(b)
{
wv.call(this);
this.mR=b
}
;
y(NE,wv);
t=NE.prototype;
t.md=lf("LoremIpsum");
t.Aq=nf;
t.gq=n;
t.queryCommandValue=function(b)
{
return"usinglorem"==b&&this.gq
}
;

t.execCommand=function(b,c)
{
if("clearlorem"==b)
{
var d=!!c,e=this.B;
if(this.gq&&!e.bh)
{
var g=e.h();
g||(g=e.Oc);
this.gq=n;
g.style.fontStyle=this.CR;
e.ne(j,k,j);
d&&e.ee()&&(C?(Tb(e.h()).body.focus(),e.ig()):tb&&dw(e))
}

}
else"updatelorem"==b&&(d=this.B,!this.gq&&(!d.bh&&Lv!=d.id)&&((e=d.h())||(e=d.Oc),Ms(e)&&(this.gq=j,this.CR=e.style.fontStyle,e.style.fontStyle="italic",d.ne(j,this.mR,j))))
}
;
t.Qe=function(b)
{
return"clearlorem"==b||"updatelorem"==b||"usinglorem"==b
}
;
a.OE=function()
{
wv.call(this);
this.bT=k
}
;
y(OE,wv);
a.PE=/^(DIV|TR|LI|BLOCKQUOTE|H\d|PRE|XMP)/,a.QE=function(b)
{
b.push("<br>")
}
;
t=OE.prototype;
t.md=s("RemoveFormatting");
t.Qe=function(b)
{
return"+removeFormat"==b
}
;
t.nf=function(b)
{
"+removeFormat"==b&&!Zv(this.B).isCollapsed()&&(b=this.bT||v(this.UH,this),RE(this,b),eD(this).wa().execCommand("RemoveFormat",n,i),Dq&&RE(this,function(b)
{
var d=Gb("528")?/&nbsp;
/g:/\u00A0/g;
return b.replace(d," ")
}
))
}
;

t.Zr=function(b,c,d)
{
return!d?n:" "==c?(this.B.execCommand("+removeFormat"),j):n
}
;

a.SE=function(b,c)
{
for(var d=b.B.h();
c&&c!=d;
)
{
if("TABLE"==c.tagName)return c;
c=c.parentNode
}
return k
}
,a.RE=function(b,c)
{
var d=Zv(b.B);
if(!(1<d.wj()))
{
if(B)
{
var e=wD(d,b.B.h()),g=SE(b,e.V()),h=SE(b,e.ia());
if(g||h)
{
if(g==h)return;
var l,m=d;
l=g;
var d=h,e=new qD(m),p=m.V(),r=m.sa(),x=m.ia(),m=m.Ia(),F=eD(b);
if(l)
{
var H=F.createTextNode("");
mc(H,l);
p=H;
r=0
}
d&&(H=F.createTextNode(""),lc(H,d),x=H,m=0);
Yp(p,r,x,m).select();
l=e;
g||(d=L(bD(l,j)),b.QA=d);
h||(d=L(bD(l,n)),b.xw=d);
d=Zv(b.B);
e=wD(d,b.B.h())
}
e.select();

d=e
}
p=d;
d=eD(b).o("div");
e=p.Zd();
rq?d.appendChild(e.cloneContents()):qq&&(r=p.Lc(),r=r.replace(/\r\n/g,"\r"),x=r.length,p=x-r.replace(/^[\s\xa0]+/,"").length,r=x-Na(r).length,e.moveStart("character",p),e.moveEnd("character",-r),p=e.htmlText,"Formatted"==e.queryCommandValue("formatBlock")&&(p=Oa(e.htmlText)),d.innerHTML=p);
p=c(d.innerHTML);
F=Zv(b.B);
d=eD(b);
r=fb();
e=fb();
p='<span id="'+r+'"></span>'+p+'<span id="'+e+'"></span>';
m=fb();
x='<span id="'+m+'"></span>';
if(qq)
{
H=F.Je(0).Zd();
H.pasteHTML(x);

for(var G;
(G=H.parentElement())&&Ms(G)&&!pD(G);
)
{
F=G.nodeName;
if("TD"==F||"TR"==F||"TH"==F)break;
L(G)
}
H.pasteHTML(p);
(m=d.h(m))&&L(m)
}
else if(rq)
{
d.wa().execCommand("insertImage",n,m);
F=RegExp("<[^<]*"+m+"[^>]*>");
G=Zv(b.B).Db();
3==G.nodeType&&(G=G.parentNode);
for(;
!F.test(G.innerHTML);
)G=G.parentNode;
if(B)G.innerHTML=G.innerHTML.replace(F,p);
else
{
G.innerHTML=G.innerHTML.replace(F,x);
for(G=m=d.h(m);
(G=m.parentNode)&&Ms(G)&&!pD(G);
)
{
F=G.nodeName;
if("TD"==F||"TR"==F||"TH"==F)break;
mc(m,G);
L(G)
}
G.innerHTML=
G.innerHTML.replace(RegExp(x,"i"),p)
}

}
G=d.h(r);
d=d.h(e);
Yp(G,0,d,d.childNodes.length).select();
L(G);
L(d);
B&&l&&(d=Zv(b.B),G=b.B.h(),b.QA&&(G.insertBefore(b.QA,G.firstChild),b.QA=k),b.xw&&(G.appendChild(b.xw),b.xw=k),G=k,e=bD(l,j),p=bD(l,n),e&&p&&(G=Yp(e,0,p,0)),gD((g?G:d).V(),(g?G:d).sa(),(h?G:d).ia(),(h?G:d).Ia()).select(),l.F())
}

}
;

t.UH=function(b)
{
var c=document.createElement("div");
c.innerHTML=b;
for(var b=[],c=[c.childNodes,0],d=[],e=0,g=[],h=0,l=0;
0<=l;
l-=2)
{
for(var m=n;
0<h&&l<=g[h-1];
)h--,m=j;
m&&QE(b);
for(m=n;
0<e&&l<=d[e-1];
)e--,m=j;
m&&QE(b);
for(var m=c[l],p=c[l+1];
p<m.length;
)
{
var r=m[p++],x=r.nodeName;
switch(x)
{
case "#text":r=0<e?r.nodeValue:Ia(r.nodeValue);
r=Ua(r);
b.push(r);
continue;
case "P":QE(b);
QE(b);
break;
case "BR":QE(b);
continue;
case "TABLE":QE(b);
g[h++]=l;
break;
case "PRE":case "XMP":d[e++]=l;
break;
case "STYLE":case "SCRIPT":case "SELECT":continue;

case "A":if(r.href&&""!=r.href)
{
b.push("<a href='");
b.push(r.href);
b.push("'>");
b.push(this.UH(r.innerHTML));
b.push("</a>");
continue
}
else break;
case "IMG":b.push("<img src='");
b.push(r.src);
b.push("'");
"0"==r.border&&b.push(" border='0'");
b.push(">");
continue;
case "TD":r.previousSibling&&b.push(" ");
break;
case "TR":r.previousSibling&&QE(b);
break;
case "DIV":var F=r.parentNode;
if(F.firstChild==r&&PE.test(F.tagName))break;
default:PE.test(x)&&QE(b)
}
r=r.childNodes;
0<r.length&&(c[l++]=m,c[l++]=p,m=r,p=
0)
}

}
return b.join("").replace(/\xa0|[ \t]+/g," ")
}
;
a.TE=function(b)
{
this.AC=b
}
;
y(TE,Hd);
a.UE=function()
{
M.call(this);
this.gR=100;
this.Nd=[];
this.kk=[];
this.kt=[]
}
;
y(UE,Hd);
t=UE.prototype;
t.os=k;
t.sB=function()
{
VE(this,this.Nd,this.kk)
}
;
t.Tz=function()
{
VE(this,this.kk,this.Nd)
}
;
a.VE=function(b,c,d)
{
if(c.length)
{
var e=c.pop();
d.push(e);
b.kt.push(
{
type:c==b.Nd?"before_undo":"before_redo",uE:c==b.Nd?e.sB:e.Tz,state:e
}
);
1==b.kt.length&&b.Ug();
(0==c.length||1==d.length)&&b.dispatchEvent("state_change")
}

}
;

t.Ug=function()
{
if(!(this.os||0==this.kt.length))
{
var b=this.kt.shift();
this.dispatchEvent(
{
type:b.type,state:b.state
}
)&&(b.state.AC?(this.os=N(b.state,"action_completed",this.AN,n,this),b.uE.call(b.state)):(b.uE.call(b.state),this.Ug()))
}

}
;
t.AN=function()
{
Ad(this.os);
this.os=k;
this.Ug()
}
;
a.WE=function(b)
{
wv.call(this);
b=b||new UE;
this.pG&&Ad(this.pG);
this.pe=b;
this.pG=N(this.pe,"state_change",this.iN,n,this);
this.rj=
{

}
;
this.Pn=
{

}
;
this.zF=k;
this.TL=v(this.iU,this)
}
;
y(WE,wv);
WE.prototype.Ob=le("goog.editor.plugins.UndoRedo");
WE.prototype.uo=k;
a.XE=E.Ym(
{
TY:"+undo",kY:"+redo"
}
);
t=WE.prototype;
t.Qe=function(b)
{
return b in XE
}
;
t.lJ=function(b)
{
this.disable(b);
this.B=k
}
;

t.enable=function(b)
{
if(!this.isEnabled(b))
{
$v(b);
var c=new me(this);
B||c.c(b,"beforechange",this.eO);
c.c(b,Fv,this.lO);
c.c(b,"blur",this.qx);
this.rj[b.ah]=c;
YE(this,b)
}

}
;
t.disable=function(b)
{
$v(b);
var c=this.rj[b.ah];
c&&(c.F(),delete this.rj[b.ah]);
this.Pn[b.ah]&&delete this.Pn[b.ah]
}
;
t.isEnabled=function(b)
{
return!!this.rj[b.ah]
}
;
t.p=function()
{
WE.m.p.call(this);
for(var b in this.rj)this.rj[b].F(),delete this.rj[b];
this.B=k;
this.pe&&(this.pe.F(),delete this.pe)
}
;
t.md=s("UndoRedo");

t.execCommand=function(b)
{
"+undo"==b?this.pe.sB():"+redo"==b&&this.pe.Tz()
}
;
t.queryCommandValue=function(b)
{
var c=k;
"+undo"==b?c=0<this.pe.Nd.length:"+redo"==b&&(c=0<this.pe.kk.length);
return c
}
;
t.iN=function()
{
this.B.dispatchEvent(
{
type:"cvc",zM:["+redo","+undo"]
}
)
}
;

t.iU=function(b,c,d)
{
var e=this.B;
if(e)
{
zv(e,j,j);
try
{
e.Vh();
e.execCommand("clearlorem",j);
e.h().innerHTML=c;
d&&d.select();
var g=this.B;
e.focus();
g&&g.ah!=b.$n&&g.execCommand("updatelorem");
var h=this.Pn[b.$n];
h.Li=c;
h.jJ=d
}
catch(l)
{
this.Ob.log(ce,"Error while restoring undo state",l)
}
finally
{
this.uo=b,e.jf(),Av(e)
}

}

}
;

t.Zr=function(b,c,d)
{
if(d)
{
var e;
"z"==c?e=b.shiftKey?"+redo":"+undo":"y"==c&&(e="+redo");
if(e)return(b="+undo"==e?this.pe.Nd[this.pe.Nd.length-1]:this.pe.kk[this.pe.kk.length-1])&&b.$n?this.B.execCommand(e):this.execCommand(e),j
}
return n
}
;
t.eO=function(b)
{
if(!this.uo)
{
var b=b.target,c=b.ah;
this.zF!=c&&(this.zF=c,YE(this,b))
}

}
;
t.lO=function(b)
{
this.uo?(b=this.uo,this.uo=k,b.dispatchEvent("action_completed")):YE(this,b.target)
}
;
t.qx=function(b)
{
(b=b.target)&&$v(b)
}
;

a.YE=function(b,c)
{
var d=c.ah,e,g;
c.queryCommandValue("usinglorem")?(e="",g=k):(e=c.h().innerHTML,g=new ZE(c),g=!g.isValid()?k:g);
var h=b.Pn[d];
if(h)
{
if(h.Li==e)return;
if(""==e||""==h.Li)
{
var l=c.wt(8,"",
{

}
);
if(e==l&&""==h.Li||h.Li==l&&""==e)return
}
h.Uz=e;
h.KT=g;
l=b.pe;
if(0==l.Nd.length||!h.dg(l.Nd[l.Nd.length-1]))
{
l.Nd.push(h);
l.Nd.length>l.gR&&l.Nd.shift();
var m=l.kk.length;
l.kk.length=0;
l.dispatchEvent(
{
type:"state_added",state:h
}
);
(1==l.Nd.length||m)&&l.dispatchEvent("state_change")
}

}
b.Pn[d]=
new $E(d,e,g,b.TL)
}
,a.$E=function(b,c,d,e)
{
this.AC=j;
this.$n=b;
this.cI=e;
this.Li=c;
this.jJ=d
}
;
y($E,TE);
$E.prototype.sB=function()
{
this.cI(this,this.Li,this.jJ)
}
;
$E.prototype.Tz=function()
{
this.cI(this,this.Uz,this.KT)
}
;
$E.prototype.dg=function(b)
{
return this.$n==b.$n&&this.Li==b.Li&&this.Uz==b.Uz
}
;

a.ZE=function(b)
{
this.Xd=b;
var c=b.kb.Sa(),b=(b=Zv(b))&&b.pg()&&b.Sa()==c?b:k;
if(rq)
{
if(c=b,this.Ds=n,c)
{
var d=xp(c),e=yp(c);
if(d&&e)
{
var b=c.li()?c.Ia():c.sa(),d=new WD(d,this.Xd.h()),g=zp(c),e=new WD(e,this.Xd.h());
c.li()?(this.Ba=e,this.RA=g,this.za=d,this.yw=b):(this.Ba=d,this.RA=b,this.za=e,this.yw=g);
this.Ds=j
}

}

}
else qq&&(c=b,this.Ds=n,c&&(b=c.Je(0).Zd(),uc(this.Xd.h(),b.parentElement())&&(c=this.Xd.kb.wa().body.createTextRange(),c.moveToElementText(this.Xd.h()),e=b.duplicate(),e.collapse(j),
e.setEndPoint("StartToStart",c),this.Ba=aF(e),b=b.duplicate(),b.setEndPoint("StartToStart",c),this.za=aF(b),this.Ds=j)))
}
;
ZE.prototype.isValid=q("Ds");
ZE.prototype.toString=function()
{
return rq?"W3C:"+this.Ba.toString()+"\n"+this.RA+":"+this.za.toString()+"\n"+this.yw:"IE:"+this.Ba+","+this.za
}
;
ZE.prototype.select=function()
{
var b=this.Ie(this.Xd.h());
b&&(qq&&this.Xd.h().focus(),mq(b).select())
}
;

ZE.prototype.Ie=function(b)
{
if(rq)
{
var c=XD(this.Ba,b),b=XD(this.za,b);
return!c||!b?k:Yp(c,this.RA,b,this.yw).Zd()
}
c=b.ownerDocument.body.createTextRange();
c.moveToElementText(b);
c.collapse(j);
c.moveEnd("character",this.za);
c.moveStart("character",this.Ba);
return c
}
;

a.aF=function(b)
{
var c=b.duplicate(),d=b.text,e=d.length;
c.collapse(j);
c.moveEnd("character",e);
for(var g,h=10;
(g=c.compareEndPoints("EndToEnd",b))&&!(e-=g,c.moveEnd("character",-g),--h,0==h);
);
b=0;
for(c=d.indexOf("\n\r");
-1!=c;
)++b,c=d.indexOf("\n\r",c+1);
return e+b
}
;
a.bF=function(b,c)
{
Ro.call(this,b||Rz.D(),c)
}
;
y(bF,Ro);
po("goog-toolbar-separator",function()
{
return new bF
}
);
a.dF=function(b,c)
{
M.call(this);
this.ha=new me(this);
this.Xd=b;
this.wb=c;
this.Qz=[];
oh(this.wb,function(b)
{
b.jb&&this.Qz.push(cF(b.$d()))
}
,this);
this.wb.Ye(n);
this.ha.c(this.Xd,"cvc",this.dW).c(this.wb,"action",this.ox)
}
;
y(dF,Hd);
a.cF=function(b)
{
return b
}
;
t=dF.prototype;
t.g=q("ha");
t.Pr=q("Xd");
t.R=function()
{
return this.wb.R()
}
;
t.w=function(b)
{
this.wb.w(b)
}
;
t.isEnabled=function()
{
return this.wb.isEnabled()
}
;
t.cb=function(b)
{
this.wb.cb(b)
}
;
t.blur=function()
{
this.wb.Zc(k)
}
;

t.p=function()
{
dF.m.p.call(this);
this.ha&&(this.ha.F(),delete this.ha);
this.wb&&(this.wb.F(),delete this.wb);
delete this.Xd;
delete this.Qz
}
;
t.dW=function(b)
{
if(this.wb.isEnabled()&&this.dispatchEvent("change"))
{
var c;
try
{
c=this.Xd.queryCommandValue(b.zM||this.Qz)
}
catch(d)
{
c=
{

}

}
var b=c,e;
for(e in b)if(c=mh(this.wb,e))
{
var g=b[e];
c.Mi?c.Mi(g):c.Rc(!!g)
}

}

}
;
t.ox=function(b)
{
var c=b.target.$d();
this.Xd.execCommand(c,b.target.W())
}
;
a.eF=function(b)
{
this.vN=b
}
;
y(eF,id);
eF.prototype.type="ok";
a.fF=function(b)
{
id.call(this,"change");
this.isValid=b
}
;
y(fF,id);
a.gF=function(b)
{
return!b?"":"//www.zhihu.com/equation?tex="+encodeURIComponent(b)
}
;
a.hF=function(b)
{
T.call(this,b)
}
;
y(hF,T);
hF.prototype.Dj="";
hF.prototype.w=function(b)
{
R(this.h(),b)
}
;
a.jF=function(b,c,d,e,g,h,l,m)
{
this.Ki=c;
this.Ih=l||[];
for(var c=m||iF.D(),m=[],d=-d,e=-e,p=0;
p<l.length;
p++)m.push(K("DIV",
{
"class":c.N()+"-item",style:"width:"+g+"px;
height:"+h+"px;
background-position:"+d+"px "+e+"px;
"
}
)),d-=g;
this.vg=b;
fA.call(this,m,c)
}
;
y(jF,fA);
jF.prototype.fi=q("Ki");
jF.prototype.mg=function(b)
{
jF.m.mg.call(this,b);
this.vg.dispatchEvent(new kF(lF,this))
}
;
jF.prototype.gi=function(b)
{
jF.m.gi.call(this,b);
b.relatedTarget&&!uc(this.h(),b.relatedTarget)&&this.vg.Xv()
}
;

jF.prototype.nd=function(b)
{
jF.m.nd.call(this,b);
b.relatedTarget&&!uc(this.h(),b.relatedTarget)&&this.vg.Yv.stop()
}
;
a.kF=function(b,c,d)
{
id.call(this,b,d);
this.iT=c
}
,a.lF="a";
kF.prototype.gx=q("iT");
a.iF=function()
{

}
;
y(iF,Yz);
ia(iF);
iF.prototype.N=s("ee-palette");
a.mF=function(b)
{
jF.call(this,b,"a",0,150,18,18,"\\leftarrow \\rightarrow \\leftrightarrow \\Leftarrow \\Rightarrow \\Leftrightarrow \\uparrow \\downarrow \\updownarrow \\Uparrow \\Downarrow \\Updownarrow".split(" "));
jA(this,new Qb(12,1))
}
;
y(mF,jF);
a.nF=function(b)
{
jF.call(this,b,"c",0,70,18,18,"\\leq \\geq \\prec \\succ \\preceq \\succeq \\ll \\gg \\equiv \\sim \\simeq \\asymp \\approx \\ne \\subset \\supset \\subseteq \\supseteq \\in \\ni \\notin".split(" "));
jA(this,new Qb(7,3))
}
;
y(nF,jF);
a.oF=function(b)
{
jF.call(this,b,"g",0,30,18,18,"\\alpha \\beta \\gamma \\delta \\epsilon \\varepsilon \\zeta \\eta \\theta \\vartheta \\iota \\kappa \\lambda \\mu \\nu \\xi \\pi \\varpi \\rho \\varrho \\sigma \\varsigma \\tau \\upsilon \\phi \\varphi \\chi \\psi \\omega \\Gamma \\Delta \\Theta \\Lambda \\Xi \\Pi \\Sigma \\Upsilon \\Phi \\Psi \\Omega".split(" "));
jA(this,new Qb(7,6))
}
;
y(oF,jF);
a.pF=function(b)
{
jF.call(this,b,"m",0,90,30,56,"x_
{
a
}
;
x^
{
b
}
;
x_
{
a
}
^
{
b
}
;
\\bar
{
x
}
;
\\tilde
{
x
}
;
\\frac
{
a
}

{
b
}
;
\\sqrt
{
x
}
;
\\sqrt[n]
{
x
}
;
\\bigcap_
{
a
}
^
{
b
}
;
\\bigcup_
{
a
}
^
{
b
}
;
\\prod_
{
a
}
^
{
b
}
;
\\coprod_
{
a
}
^
{
b
}
;
\\left( x \\right);
\\left[ x \\right];
\\left
{
 x \\right
}
;
\\left| x \\right|;
\\int_
{
a
}
^
{
b
}
;
\\oint_
{
a
}
^
{
b
}
;
\\sum_
{
a
}
^
{
b
}

{
x
}
;
\\lim_
{
a \\rightarrow b
}

{
x
}
".split(";
"));
jA(this,new Qb(10,2))
}
;
y(pF,jF);
a.rF=function(b)
{
jF.call(this,b,"mn",0,0,46,18,["g","s","c","m","a"],qF.D());
jA(this,new Qb(5,1))
}
;
y(rF,jF);
rF.prototype.w=function(b,c)
{
return rF.m.w.call(this,j,c)
}
;
a.qF=function()
{

}
;
y(qF,iF);
ia(qF);
qF.prototype.N=s("ee-menu-palette");
a.sF=function(b)
{
jF.call(this,b,"s",0,50,18,18,"\\times \\div \\cdot \\pm \\mp \\ast \\star \\circ \\bullet \\oplus \\ominus \\oslash \\otimes \\odot \\dagger \\ddagger \\vee \\wedge \\cap \\cup \\aleph \\Re \\Im \\top \\bot \\infty \\partial \\forall \\exists \\neg \\angle \\triangle \\diamond".split(" "));
jA(this,new Qb(7,5))
}
;
y(sF,jF);
a.tF=function()
{
M.call(this);
this.tH=
{

}
;
this.jn=k;
this.P=new me(this);
this.Yv=new Jd(300);
this.P.c(this.Yv,Kd,this.FE)
}
;
y(tF,Hd);
t=tF.prototype;
t.gx=function(b)
{
var c=this.tH,d=c[b];
if(!d)
{
switch(b)
{
case "mn":d=new rF(this);
break;
case "g":d=new oF(this);
break;
case "s":d=new sF(this);
break;
case "c":d=new nF(this);
break;
case "m":d=new pF(this);
break;
case "a":d=new mF(this);
break;
default:f(Error("Invalid palette type!"))
}
c[b]=d
}
return d
}
;

t.setActive=function(b)
{
var c=this.jn;
c&&c.w(n);
this.jn=c=this.gx(b);
c.w(j);
return c
}
;
t.Xv=function()
{
this.Yv.start()
}
;
t.FE=function()
{
this.setActive("mn")
}
;
t.p=function()
{
tF.m.p.call(this);
this.tH=this.jn=k
}
;
a.uF=function(b,c,d)
{
T.call(this,d);
this.Dj=c;
this.vg=b.hT
}
;
y(uF,hF);
t=uF.prototype;
t.ZF="";
t.Dv=0;

t.o=function()
{
var b=w("TeX 公式"),c=w("预览"),d=w("Learn more"),e=this.G,d=e.o("DIV",
{
style:"display: none;
"
}
,e.o("SPAN",
{
"class":"ee-section-title ee-section-title-floating"
}
,b),this.Dj?e.o("A",
{
id:"ee-section-learn-more",target:"_blank",href:this.Dj
}
,d):k,e.o("DIV",
{
style:"clear: both;
"
}
),b=this.hQ=e.o("DIV",
{
style:"position: relative"
}
));
this.vg.setActive("mn").Y(b);
b.appendChild(e.o("DIV",
{
style:"clear:both"
}
));
var g=this.Ah=e.o("textarea",
{
"class":"ee-tex",dir:"ltr"
}
);
b.appendChild(g);
b.appendChild(e.o("DIV",

{
"class":"ee-section-title"
}
,c));
c=this.zT=e.o("DIV",
{
"class":"ee-preview-container"
}
);
b.appendChild(c);
this.e=d
}
;
t.z=function()
{
this.WI=new wu(this.Ah);
N(this.WI,"input",this.WE,n,this);
this.g().c(this.Ah,"keydown",this.WE);
this.g().c(this.vg,lF,this.$O,n,this)
}
;
t.w=function(b)
{
uF.m.w.call(this,b);
b&&Ld(this.GN,0,this)
}
;
t.GN=function()
{
this.Ah.focus();
ds(this.Ah,this.Ah.value.length)
}
;

a.vF=function(b)
{
var c=b.Ll();
if(c!=b.ZF)
{
b.ZF=c;
var d=!(1024<c.length);
b.dispatchEvent(new fF(d));
var b=b.zT,e=Ub(b);
e.zt(b);
c&&(d?c=e.o("IMG",
{
src:gF(c)
}
):(c=w("Equation is too long"),c=e.o("DIV",
{
"class":"ee-warning"
}
,c)),e.appendChild(b,c))
}

}
;
t.WE=function()
{
this.Dv++;
Ld(v(this.oP,this,this.Dv),500)
}
;
t.oP=function(b)
{
b==this.Dv&&vF(this)
}
;

t.$O=function(b)
{
var c=b.gx(),d=this.vg,e=d.jn,b=this.Ah;
if("mn"==c.fi())
{
var g=c.sb,g=-1!=g?0<=g&&g<c.Ih.length?c.Ih[g]:k:k;
if(e!=c&&e.fi()==g)
{
d.FE();
return
}
g&&(c=this.vg.setActive(g),c.h()||c.Y(this.hQ),c=c.h(),$f(c,0,-c.clientHeight))
}
else
{
e=this.vg.jn;
g=0<=e.sb&&e.sb<e.Ih.length?e.Ih[e.sb]:k;
if(!g)return;
Ld(v(this.pQ,this,g+" "),0)
}
b.focus()
}
;
t.pQ=function(b)
{
var c=this.Ah,d=Tl(c),e=c.value,e=e.substring(0,d)+b+e.substring(d);
c.value=e;
ds(c,d+b.length);
vF(this)
}
;
t.Ll=function()
{
return this.Ah.value
}
;

t.nA=function(b)
{
this.Ah.value=b;
vF(this)
}
;
t.p=function()
{
this.WI.F();
this.vg=k;
uF.m.p.call(this)
}
;
a.wF=function(b,c,d)
{
T.call(this,d);
this.jD=b;
this.Dj=c
}
;
y(wF,T);
t=wF.prototype;
t.Bh=k;
t.o=function()
{
wF.m.o.call(this);
this.ir()
}
;
t.ir=function()
{
var b=this.h();
this.Bh=new uF(this.jD,this.Dj,this.G);
this.H(this.Bh);
this.Bh.Y(b);
this.Bh.w(j)
}
;
t.Z=function(b)
{
this.e=b;
this.ir()
}
;
t.Ll=function()
{
return this.Bh.Ll()
}
;
t.nA=function(b)
{
this.Bh.nA(b)
}
;
t.bx=function()
{
var b=this.Ll(),c=gF(b);
return!c?"":'<img src="'+c+'" alt="'+Ua(b)+'" class="ee_img tr_noresize" eeimg="1" style="vertical-align: middle">'
}
;

t.isValid=function()
{
return 1024<this.Ll().length
}
;
t.w=function(b)
{
this.Bh.w(b)
}
;
t.p=function()
{
this.Bh&&this.Bh.F();
this.jD=k;
wF.m.p.call(this)
}
;
a.xF=function(b,c,d,e)
{
sE.call(this,c);
this.qj=new wF(b,e);
this.qj.Y();
this.qj.nA(d);
this.qj.addEventListener("+equation",this.ap,n,this)
}
;
y(xF,sE);
xF.prototype.Qv=function()
{
var b=new tE(this),c=w("公式编辑器"),d=w("插入公式"),e=w("保存"),d=this.qj.Ll()?e:d;
uE(vE(b.eb(c).Na(this.qj.h())),d);
return wE(b)
}
;
xF.prototype.Ln=function()
{
if(this.qj.isValid())return k;
var b=this.qj.bx();
return new eF(b)
}
;
xF.prototype.ap=function(b)
{
this.QG||(this.QG=this.Xw("ok"));
this.QG.disabled=!b.isValid
}
;
a.yF=function(b)
{
this.Dj=b||"";
xE.call(this,"+equation")
}
;
y(yF,xE);
t=yF.prototype;
t.Ca=le("goog.editor.plugins.EquationEditorPlugin");
t.md=lf("EquationEditorPlugin");
t.Pv=function(b,c)
{
var d=c||k,e;
d?(e=d.getAttribute("alt"),e||(e=d.getAttribute("src"),e=!e?"":decodeURIComponent(e.match(we)[6]||k).slice(4)||"")):e="";
this.sH=d;
d=
{

}
;
d.hT=new tF;
d=new xF(d,b,e,this.Dj);
d.addEventListener("ok",this.Aj,n,this);
return d
}
;
t.enable=function(b)
{
yF.m.enable.call(this,b)
}
;

t.disable=function(b)
{
yF.m.disable.call(this,b)
}
;
t.Aj=function(b)
{
zE(this);
this.B.Vh();
b=gc(eD(this).Fa,b.vN);
if(this.sH)oc(b,this.sH);
else
{
var c=Zv(this.B);
c.isCollapsed()||c.bd();
b=c.insertNode(b,n)
}
bs(b,n);
this.B.jf()
}
;
a.zF=function()
{
nE.call(this)
}
;
y(zF,nE);
w("Equation:");
a.AF=w("Edit"),a.BF=w("Remove");
t=zF.prototype;
t.md=s("EquationBubble");
t.SN=function(b)
{
return b&&"IMG"==b.nodeName&&(b.getAttribute("eeimg")||D.has(b,"ee_img"))?b:k
}
;
t.JM=function(b)
{
this.kr("ee_bubble_edit",AF,this.mN,b,"zg-icon zg-icon-pen");
this.kr("ee_remove_remove",BF,this.ST,b,"zg-icon zg-icon-trash")
}
;
t.Ww=s("IMG");
t.wE=function()
{
return w("Equation")
}
;
t.ST=function()
{
this.B.Vh();
L(this.du);
qE(this);
this.B.jf()
}
;

t.mN=function()
{
var b=this.du;
qE(this);
this.B.execCommand("+equation",b)
}
;
a.CF=function(b)
{
wv.call(this);
this.xB="http://upload."+Dg.Fm+":"+location.port+"/upload";
E.extend(this.C=
{

}
,this.Q,b||
{

}
)
}
;
y(CF,wv);
t=CF.prototype;
t.Q=
{
C_:ha
}
;
t.md=lf("FastUpload");

t.enable=function(b)
{
if(!this.isEnabled(b)&&!(!window.URL&&!window.webkitURL||!window.FileReader||!window.FormData||!document.addEventListener))
{
$.fn.draghover=function()
{
return this.each(function()
{
var b=$(),c=$(this),d=j;
c.on("dragenter",function(l)
{
l=l.originalEvent;
0===b.size()&&(d&&z.contains(l.dataTransfer.types,"Files"))&&c.trigger("draghoverstart",l);
b=b.add(l.target)
}
);
c.on("dragleave",function(l)
{
setTimeout(function()
{
b=b.not(l.target);
0===b.size()&&d&&c.trigger("draghoverend",l)
}
,1)
}
);

c.on("dragstart",function()
{
d=n
}
);
c.on("drop dragend",function()
{
b=$();
c.trigger("draghoverend");
d=j
}
)
}
)
}
;
this.GB=$(this.B.h());
var c=eD(this),d=$('<div class="editable-dropzone"><div class="row"><div class="cell"><div>拖拽至此处上传</div></div></div></div>');
c.gy(d[0],this.B.h());
c=this.KJ=d;
new me(this);
b.h().addEventListener("paste",v(this.Hx,this));
document.addEventListener("dragover",v(this.xO,this),n);
c.on("dragover",v(this.wO,this));
c.get(0).addEventListener("drop",v(this.Wr,this),n);
$(window).draghover().on(
{
draghoverstart:v(this.HE,
this),draghoverend:v(this.yO,this)
}
);
c.draghover().on(
{
draghoverstart:v(this.qO,this),draghoverend:v(this.HE,this)
}
)
}

}
;
t.xO=function(b)
{
z.contains(b.dataTransfer.types,"Files")&&(b.dataTransfer.dropEffect="none",b.preventDefault())
}
;
t.wO=function(b)
{
b=b.originalEvent;
b.dataTransfer.dropEffect="copy";
b.preventDefault();
b.stopPropagation()
}
;
t.HE=function(b)
{
b.preventDefault();
b.stopPropagation();
DF(this,1)
}
;
t.qO=function(b)
{
DF(this,2);
b.stopPropagation()
}
;

t.yO=function(b)
{
b.preventDefault();
DF(this,0)
}
;
a.DF=function(b,c)
{
var d=[
{
display:"none"
}
,
{
display:"table",width:b.GB.width(),height:b.GB.height(),"background-color":"rgba(255, 255, 255, 0.5)"
}
];
d[2]=$.extend(
{

}
,d[1],
{
"background-color":"rgba(245, 245, 245, 0.5)"
}
);
b.KJ.css(d[c])
}
;
t.Hx=function(b)
{
var c=this;
b.clipboardData&&z.contains(b.clipboardData.types,"Files")&&z.forEach(b.clipboardData.items,function(d)
{
-1<d.type.indexOf("image")&&(EF(c,d.getAsFile()),b.preventDefault())
}
)
}
;

t.Wr=function(b)
{
var c=this;
c.B.execCommand("clearlorem");
var d=b.dataTransfer.files;
document.createElement("img");
b.preventDefault();
var e=[];
z.forEach(d,function(b)
{
-1<b.type.indexOf("image")?(EF(c,b),e.push(j)):e.push(n)
}
);
z.every(e,function(b)
{
return!b
}
)&&U("文件类型不支持！");
DF(c,0)
}
;

a.EF=function(b,c)
{
var d=new FormData;
d.append("via","xhr2");
d.append("upload_file",c);
var e;
e=$.ajaxSettings.xhr();
e.withCredentials=j;
var g=$.ajax(
{
url:b.xB,data:d,processData:n,contentType:n,xhr:function()
{
return e
}
,type:"POST"
}
).done(function(b)
{
"string"===$.type(b)&&(b=JSON.parse(b));
if(1===b.code)U(b.msg);
else
{
var c=new Image;
c.src=b.msg[0];
c.setAttribute("originImgSrc",c.src.replace("_m.jpg","_r.jpg"));
c.setAttribute("data-rawWidth",b.msg[1]);
c.setAttribute("data-rawHeight",b.msg[2]);
g.LB.after(c)
}

}
).fail(function()
{
U("上传失败！>_<")
}
).always(function()
{
g.LB.remove()
}
),
d=g,h;
h=eD(b);
var l=h.o("IMG",
{
"class":"",style:"display:block",src:"/static/img/spinner2.gif"
}
),m=Zv(b.B);
!m||!vD(m)||!uc(b.B.h(),m.Db())?Ms(b.B.field)?nc(b.B.h(),l,0):b.B.h().appendChild(l):m.zg(l);
A||(bs(l,n),h.Sa().focus());
zv(b.B);
h=$(l);
d.LB=h
}
;
a.FF=
{

}
,a.LF=function(b,c,d)
{
function e(b)
{
pc(b)
}
function g(c,d)
{
for(;
c!==b;
)
{
if(d(c))return c;
c=c.parentNode
}
return k
}
function h(b)
{
return b.tagName&&b.tagName===c
}
b||f("Missing Editable Container");
c||(c="blockquote");
var c=c.toUpperCase(),l=lq();
if(l&&GF(b,xp(l))&&GF(b,yp(l)))
{
var m=gD(l.V(),l.sa(),l.ia(),l.Ia()),p;
if(l.isCollapsed())p=[];
else
{
var r=l.wc(),x=l.V(),F=l.ia();
p=r.childNodes;
var H=function(b)
{
return x!==r&&!GF(b,x)
}
,G=function(b)
{
return!(b.previousSibling&&GF(b.previousSibling,F))
}
;

p=O.toArray(1===p.length?p:O.cB(O.lN(p,H),G))
}
var H=l.Db(),G=g(H,h),Q=z.reduce(p,function(b,d)
{
1===d.nodeType&&(h(d)?b.push(d):b.push.apply(b,z.toArray(d.getElementsByTagName(c))));
return b
}
,[]),X;
if(G)
{
if(d)return HF.Mu;
pc(G)
}
else if(Q.length)
{
if(d)return HF.Mu;
z.forEach(Q,e)
}
else
{
if(d)return HF.VB;
if(d=g(H,function(b)
{
return z.contains(IF,b.tagName.toLowerCase())
}
))X=document.createElement(c),d.parentNode.insertBefore(X,d),X.appendChild(d);
else if(l.V()!==l.ia())X=document.createElement(c),p[0].parentNode.insertBefore(X,
p[0]),z.forEach(p,function(b)
{
X.appendChild(b)
}
);
else
{
m=c;
JF.EK?document.execCommand("formatBlock",n,m):(d=lq(),l=d.wc(),ra(l)&&1==l.nodeType&&Ms(l)?(m=document.createElement(m),l===b?l.appendChild(m):oc(m,l),(C||B)&&m.appendChild(document.createElement("br")),Ls(m)):(d=d.ia(),d=Jc(d,function(b)
{
return yD(b.parentNode)||lD(b.parentNode)
}
,j),l=O.cB(new ls(d,j,j),qf(KF)),d=O.cB(new ls(d,n,n),qf(KF)),l=O.toArray(l).reverse().concat(O.toArray(d)),l.length&&(m=document.createElement(m),d=z.Cf(l),(p=d.nextSibling)&&
(p&&"BR"===p.tagName)&&L(p),mc(m,d),jc(m,l),(C||B)&&m.appendChild(document.createElement("br")),bs(m.lastChild))));
return
}

}
m&&(l=function(c,d)
{
return c&&GF(b,c)&&Xr(c)>=d
}
,l(m.V(),m.sa())&&l(m.ia(),m.Ia())&&m.select())
}
else if(d)return HF.VB
}
,a.KF=function(b)
{
return b&&"BR"===b.tagName||yD(b)||lD(b)
}
,a.GF=function(b,c)
{
return 3===b.nodeType?b===c:b.contains(3===c.nodeType?c.parentNode:c)
}
,a.IF=["ul","ol","dl","table"],a.HF=
{
Mu:1,VB:0
}
,a.JF=FF;
JF.EK=!A;
JF.toggle=LF;

JF.ae=function(b,c)
{
return LF(b,c,j)
}
;
JF.zK=HF;
a.MF=function()
{
wv.call(this)
}
;
y(MF,wv);
t=MF.prototype;
t.md=lf("Blockquote");
t.Qe=function(b)
{
return"+blockquote"===b
}
;
t.nf=function(b)
{
this.Qe(b)&&FF.toggle(this.B.h())
}
;
t.queryCommandValue=function()
{
return FF.zK.Mu===FF.ae(this.B.h())
}
;
t.Ex=function(b)
{
if(13===b.keyCode)return this.yx(b)
}
;
t.yA=function(b,c)
{
return NF(b,c).yA
}
;

a.NF=function(b,c)
{
function d(b,c)
{
return
{
yA:b,NG:c
}

}
C&&(b.normalize(),c=lq());
var e,g=c;
e=g.ia();
var h=g.Ia(),g=g.wc(),l=g.childNodes.length;
3!==e.nodeType&&l&&(e=g.childNodes[h===l?l-1:h]);
if(!e)return d(n,k);
if(Ms(b))return d(j,b);
for(h=e;
h!==b;
)
{
if(zD(h))return d(n,k);
h=h.parentNode
}
return e&&"BR"===e.tagName&&e.previousSibling&&"BR"===e.previousSibling.tagName?d(j,e):(e=c.Db())&&1===e.nodeType&&(!e.childNodes.length||Ms(e))?d(j,e):d(n,k)
}
;

t.yx=function(b)
{
var c=Zv(this.B);
if(c.isCollapsed())
{
var d;
a:
{
d=c.ia();
for(var e=this.B.field;
d!==e;
)
{
if("BLOCKQUOTE"===d.tagName)break a;
d=d.parentNode
}
d=i
}
if(d&&(c=NF(d,c),c.yA))
{
b.preventDefault();
b=document.createElement("div");
mc(b,d);
if(C||B)(d=(d=d.nextSibling)&&"BR"===d.tagName&&d)||(d=document.createElement("br")),b.appendChild(d);
nq(b,0).select();
c.NG&&L(c.NG)
}

}

}
;
FB["+blockquote"]=
{
jb:j,S:"引用内容",xa:"+blockquote",La:"tr-icon tr-blockquote",factory:GA
}
;
a.OF=function(b,c)
{
this.bb=b;
this.zB=!c
}
;

OF.prototype.xi=function(b,c,d)
{
var e,g=[];
if(""!=b)
{
e=$a(b);
var h=RegExp("(^|\\W+)"+e,"i");
O.some(this.bb,function(b)
{
String(b).match(h)&&g.push(b);
return g.length>=c
}
)
}
e=g;
if(0==e.length&&this.zB)
{
var l=[];
O.forEach(this.bb,function(c,d)
{
var e=b.toLowerCase(),g=String(c).toLowerCase(),h=0;
if(-1!=g.indexOf(e))h=parseInt((g.indexOf(e)/4).toString(),10);
else for(var m=e.split(""),Q=-1,X=10,ka=0,Ma;
Ma=m[ka];
ka++)Ma=g.indexOf(Ma),Ma>Q?(Q=Ma-Q-1,Q>X-5&&(Q=X-5),h+=Q,Q=Ma):(h+=X,X+=5);
h<6*e.length&&l.push(
{
lV:c,
iI:h,index:d
}
)
}
);
l.sort(function(b,c)
{
var d=b.iI-c.iI;
return 0!=d?d:b.index-c.index
}
);
e=[];
for(var m=0;
m<c&&m<l.length;
m++)e.push(l[m].lV)
}
d(b,e)
}
;
a.PF=function(b)
{
T.call(this);
E.extend(this.C=
{

}
,this.Q,b||
{

}
);
this.Dc=k
}
;
y(PF,T);

a.QF=[["ABAP",["abap"]],["ActionScript",["as","actionscript"]],["Ada",["ada","ada95ada2005"]],["ANTLR",["antlr"]],["ApacheConf",["apacheconf","aconf","apache"]],["AppleScript",["applescript"]],["AspectJ",["aspectj"]],["Asymptote",["asy","asymptote"]],["AutoHotkey",["ahk"]],["Awk",["awk","gawk","mawk","nawk"]],["BBCode",["bbcode"]],["Base Makefile",["basemake"]],["Bash",["bash","sh","ksh"]],["Batchfile",["bat"]],["Befunge",["befunge"]],["BlitzMax",["blitzmax","bmax"]],["Boo",["boo"]],["Brainfuck",
["brainfuck","bf"]],["Bro",["bro"]],["BUGS",["bugs","winbugs","openbugs"]],["C",["c"]],["CMake",["cmake"]],["c-objdump",["c-objdump"]],["aspx-cs",["aspx-cs"]],["C#",["csharp","c#"]],["Ceylon",["ceylon"]],["CFEngine3",["cfengine3","cf3"]],["Cheetah",["cheetah","spitfire"]],["Clojure",["clojure","clj"]],["CoffeeScript",["coffee-script","coffeescript"]],["Coldfusion HTML",["cfm"]],["cfstatement",["cfs"]],["Common Lisp",["common-lisp","cl"]],["Coq",["coq"]],["C++",["cpp","c++"]],["cpp-objdump",["cpp-objdump",
"c++-objdumb","cxx-objdump"]],["Croc",["croc"]],["CSS",["css"]],["CUDA",["cuda","cu"]],["Cython",["cython","pyx"]],["D",["d"]],["d-objdump",["d-objdump"]],["Darcs Patch",["dpatch"]],["Dart",["dart"]],["Delphi",["delphi","pas","pascal","objectpascal"]],["dg",["dg"]],["Diff",["diff","udiff"]],["Django/Jinja",["django","jinja"]],["DTD",["dtd"]],["Duel","duel;
Duel Engine;
Duel View;
JBST;
jbst;
JsonML+BST".split(";
")],["Dylan",["dylan"]],["ECL",["ecl"]],["eC",["ec"]],["Erlang",["erlang"]],["Elixir",["elixir",
"ex","exs"]],["ERB",["erb"]],["Evoque",["evoque"]],["FSharp",["fsharp"]],["Factor",["factor"]],["Fancy",["fancy","fy"]],["Fantom",["fan"]],["Felix",["felix","flx"]],["Fortran",["fortran"]],["GLSL",["glsl"]],["GAS",["gas"]],["Genshi",["genshi","kid","xml+genshi","xml+kid"]],["Gettext Catalog",["pot","po"]],["Gherkin",["Cucumber","cucumber","Gherkin","gherkin"]],["Gnuplot",["gnuplot"]],["Go",["go"]],["GoodData-CL",["gooddata-cl"]],["Gosu",["gosu"]],["Gosu Template",["gst"]],["Groff",["groff","nroff",
"man"]],["Groovy",["groovy"]],["Haml",["haml","HAML"]],["Haskell",["haskell","hs"]],["haXe",["hx","haXe"]],["HTML",["html"]],["HTTP",["http"]],["Hxml",["haxeml","hxml"]],["Hybris",["hybris","hy"]],["INI",["ini","cfg"]],["Io",["io"]],["Ioke",["ioke","ik"]],["IRC logs",["irc"]],["Jade",["jade","JADE"]],["JavaScript",["js","javascript"]],["JSON",["json"]],["Java",["java"]],["Java Server Page",["jsp"]],["Julia console",["jlcon"]],["Julia",["julia","jl"]],["Kconfig",["kconfig","menuconfig","linux-config",
"kernel-config"]],["Koka",["koka"]],["Kotlin",["kotlin"]],["Lasso",["lasso","lassoscript"]],["Lighttpd configuration file",["lighty","lighttpd"]],["Literate Haskell",["lhs","literate-haskell"]],["LiveScript",["live-script","livescript"]],["LLVM",["llvm"]],["Logtalk",["logtalk"]],["Lua",["lua"]],["MOOCode",["moocode"]],["Makefile",["make","makefile","mf","bsdmake"]],["Mako",["mako"]],["MAQL",["maql"]],["Mason",["mason"]],["Matlab",["matlab"]],["Matlab session",["matlabsession"]],["MiniD",["minid"]],
["Modelica",["modelica"]],["Modula-2",["modula2","m2"]],["MoinMoin/Trac Wiki markup",["trac-wiki","moin"]],["Monkey",["monkey"]],["MoonScript",["moon","moonscript"]],["Mscgen",["mscgen","msc"]],["MuPAD",["mupad"]],["MXML",["mxml"]],["MySQL",["mysql"]],["Myghty",["myghty"]],["NASM",["nasm"]],["Nemerle",["nemerle"]],["NewLisp",["newlisp"]],["Newspeak",["newspeak"]],["Nginx configuration file",["nginx"]],["Nimrod",["nimrod","nim"]],["NumPy",["numpy"]],["objdump",["objdump"]],["Objective-C",["objective-c",
"objectivec","obj-c","objc"]],["Objective-J",["objective-j","objectivej","obj-j","objj"]],["OCaml",["ocaml"]],["Octave",["octave"]],["Ooc",["ooc"]],["Opa",["opa"]],["OpenEdge ABL",["openedge","abl","progress"]],["Perl",["perl","pl"]],["PHP",["php","php3","php4","php5"]],["PL/pgSQL",["plpgsql"]],["PostScript",["postscript"]],["PostgreSQL console (psql)",["psql","postgresql-console","postgres-console"]],["PostgreSQL SQL dialect",["postgresql","postgres"]],["POVRay",["pov"]],["PowerShell",["powershell",
"posh","ps1"]],["Prolog",["prolog"]],["Properties",["properties"]],["Protocol Buffer",["protobuf"]],["Python",["python","py","sage"]],["Python Traceback",["pytb"]],["RConsole",["rconsole","rout"]],["Racket",["racket","rkt"]],["Embedded Ragel",["ragel-em"]],["Raw token data",["raw"]],["Rd",["rd"]],["REBOL",["rebol"]],["Redcode",["redcode"]],["RHTML",["rhtml","html+erb","html+ruby"]],["RobotFramework",["RobotFramework","robotframework"]],["reStructuredText",["rst","rest","restructuredtext"]],["Ruby",
["rb","ruby","duby"]],["Rust",["rust"]],["S",["splus","s","r"]],["Standard ML",["sml"]],["Sass",["sass","SASS"]],["Scala",["scala"]],["Scaml",["scaml","SCAML"]],["Scheme",["scheme","scm"]],["Scilab",["scilab"]],["SCSS",["scss"]],["Smali",["smali"]],["Smalltalk",["smalltalk","squeak"]],["Smarty",["smarty"]],["Snobol",["snobol"]],["SourcePawn",["sp"]],["Debian Sourcelist",["sourceslist","sources.list"]],["SQL",["sql"]],["sqlite3con",["sqlite3"]],["SquidConf",["squidconf","squid.conf","squid"]],["Scalate Server Page",
["ssp"]],["Stan",["stan"]],["systemverilog",["sv"]],["Tcl",["tcl"]],["Tcsh",["tcsh","csh"]],["Tea",["tea"]],["TeX",["tex","latex"]],["Text",["text"]],["Treetop",["treetop"]],["UrbiScript",["urbiscript"]],["VGL",["vgl"]],["Vala",["vala","vapi"]],["aspx-vb",["aspx-vb"]],["VB.net",["vb.net","vbnet"]],["Velocity",["velocity"]],["verilog",["v"]],["vhdl",["vhdl"]],["VimL",["vim"]],["XQuery",["xquery","xqy","xq","xql","xqm"]],["XML",["xml"]],["XSLT",["xslt"]],["Xtend",["xtend"]],["YAML",["yaml"]]],a.RF=
function(b)
{
return
{
label:b[0],value:b[1][0],toString:lf(b[0])
}

}
,a.SF=z.map(QF,RF);
t=PF.prototype;
t.Q=
{
yU:"lang-select",br:"collapsed",SQ:"lang-list",eT:"lang-option",Wk:"active",ZC:"checked"
}
;
t.p=function()
{
PF.m.p.call(this);
this.g().F();
this.ba.F();
L(this.e);
this.Lr=this.gu=this.e=k
}
;
t.o=function()
{
var b=this.C;
this.e=K("div",
{
innerHTML:this.zh,className:[b.yU,b.br].join(" ")
}
)
}
;
t.zh='<div class="title-button">选择语言</div><i class="zg-icon zg-icon-double-arrow"></i><div class="input-wrapper"><input class="filter-input zg-form-text-input" placeholder="搜索语言"></div>';

t.z=function()
{
PF.m.z.call(this);
this.gu=J("title-button",this.e);
this.Lr=J("filter-input",this.e);
tg(this.gu,j);
var b=this.Lr,c=this.e,d=this.C,e=this.g(),g=this,h=g.C,l=
{

}
,m=new OF(SF,n),c=new nm(c,l),p=new am(k,k,n),r=m.xi;
m.xi=function(b,c,d)
{
La(b)?r.apply(this,arguments):d(b,SF)
}
;
l.cd=function(b,c,d)
{
b=b.data;
b.value===g.Dc&&(D.add(d,h.ZC),d.appendChild(K("i","icon "+h.ZC)));
d.appendChild(document.createTextNode(b.toString()))
}
;
var x=new Ll(m,c,p);
p.ba=x;
p.dl(b);
x.ni=20;
e.c(x,"suggestionsupdate",
function()
{
x.Me(x.Ic+0)
}
).c(x,"update",function(b)
{
this.qz(b.vp)
}
).c(x,"dismiss",function()
{
this.Gf(j)
}
);
b=x.M;
b.className=d.SQ;
b.Ht=d.eT;
b.Uu=d.Wk;
this.ba=x;
this.g().c(this.e,"click",this.Ur).c(this.gu,"click",this.pP)
}
;
t.W=q("Dc");
t.ta=function(b)
{
var c=b&&z.find(SF,function(c)
{
return c.value===b
}
);
c&&(this.uk(c.label),this.dispatchEvent(
{
type:"change",dT:c
}
));
this.Dc=b
}
;

t.Ur=function(b)
{
var c=this.ba,d=c.M.h();
d&&(document.activeElement!==this.Lr&&!d.contains(b.target))&&(b.preventDefault(),b.stopPropagation(),Nl(c))
}
;
t.pP=function()
{
this.isCollapsed()&&this.Gf(n)
}
;
t.isCollapsed=function()
{
return D.has(this.e,this.C.br)
}
;
t.Gf=function(b)
{
if(this.isCollapsed()!==b)
{
var c=this.Lr,d=this.C;
b?D.add(this.e,d.br):(D.remove(this.e,d.br),b=this.ba,d=b.M,b.Cm(SF),d.h().scrollTop=0,d.show(),c.value="",c.focus())
}

}
;
t.uk=function(b)
{
var c=this.gu;
c.title=b;
zc(c,b)
}
;

t.qz=function(b)
{
this.ta(b.value);
this.ba.Hc()
}
;
a.TF=function(b)
{
wv.call(this);
E.extend(this.C=
{

}
,this.Q,b||
{

}
);
this.Fw=this.wb=k
}
;
y(TF,wv);

a.UF=C||tb||B,a.VF=function(b)
{
return"P"===b.tagName
}
,a.WF=function(b)
{
return 3===b.nodeType
}
,a.XF=function(b)
{
return b&&"PRE"===b.tagName
}
,a.YF=function(b)
{
function c(b)
{
return z.contains(g,b)
}
function d()
{
var b=document.createTextNode("\n");
g.push(b);
return b
}
var e=document.createElement("div");
e.innerHTML=b;
var g=[],h=qf(c),b=Bc(e,yD);
(0,z.forEach)(b,function(b)
{
b.lastChild&&"BR"===b.lastChild.tagName&&b.removeChild(b.lastChild);
b.firstChild||b.appendChild(document.createTextNode(""));
b.insertBefore(d(),
b.firstChild);
b.appendChild(d())
}
);
b=z.toArray(e.getElementsByTagName("br"));
(0,z.forEach)(b,function(b)
{
b!==b.parentNode.lastChild&&oc(document.createTextNode("\n"),b)
}
);
e=Bc(e,WF);
e=pf(function(b)
{
return z.filter(b,function(d,e)
{
var g=b[e-1];
return!g||!(c(g)&&c(d))
}
)
}
,function(b)
{
var c=z.Kw(b,h);
return-1!==c?b.slice(0,c+1):b
}
,function(b)
{
var c=z.Jw(b,h);
return-1!==c?b.slice(c):b
}
)(e);
return(0,z.map)(e,function(b)
{
return b.nodeValue
}
).join("").replace(/\xa0/g," ")
}
;
t=TF.prototype;
t.md=lf("CodePlugin");

t.Qe=function(b)
{
return"+code"===b
}
;
t.nf=function(b)
{
this.Qe(b)&&this.trigger()
}
;
t.queryCommandValue=function()
{
var b="1"===ZF(this).state,c=this.B.uj("EnterHandler");
c&&(b?c.disable(this.B):c.enable(this.B));
this.wb&&this.Fw&&oh(this.wb,function(c)
{
c instanceof Uz&&c.cb(!b||z.contains(this.Fw,c.$d()))
}
,this);
return b
}
;
t.Q=
{
XM:""
}
;
t.FU=function(b)
{
this.wb=b;
this.Fw=["toggleFullScreen"].concat("+code")
}
;
t.p=function()
{
TF.m.p.call(this);
this.wb=k
}
;

a.$F=function(b,c,d)
{
for(b=b.B.field;
c!==b;
)
{
if(d(c))return c;
c=c.parentNode
}

}
,a.ZF=function(b)
{
var c,d=lq();
d&&b.B.field.contains(d.Db())?(c=d.V(),b=(c=$F(b,c,XF))?"1":"2"):b="0";
return
{
state:b,zm:d,code:c
}

}
;

t.trigger=function()
{
var b=ZF(this),c=b.zm,d=b.code;
switch(b.state)
{
case "1":var e=!La(Ic(d)),b=zD(d);
e?(d.parentNode.removeChild(d),b&&bs(b,j)):(c=c.V()&&c.ia()?new hD(c):k,e=Oa(d.innerHTML),ns(O.filter(new ls(d,n,j),ms))&&(e="<br>"+e),b&&"BR"!==b.tagName&&(e+="<br>"),b=hc(e),d.parentNode.replaceChild(b,d),c.restore());
break;
case "2":this.ws(c,La(c.Lc())?YF(c.be()):UF?"\n":"")
}

}
;

t.dj=function(b,c)
{
var d=document.createElement(b);
d.id=ih(hh.D());
return c(d,function()
{
d=I(d.id);
d.removeAttribute("id");
return d
}
)
}
;

t.Jg=function()
{
var b=this.B,c=this.B.field,d,e=new mn(XF,n,k,c),g=K("div",
{
style:"display:none"
}
);
cs(e,new Of(4,0,0,0));
e.Zl=new Of(4,0,0,0)||k;
e.Wt=150;
e.fs=100;
e.rh(g);
e.className="hc-lang-select";
N(e,"beforeshow",function(b)
{
d=b.target.anchor;
e.dd(new Um(d,1));
if(d.lang)
{
var b=h,c,g=d.lang;
(c=(c=z.find(QF,function(b)
{
return b[0]===g||z.contains(b[1],g)
}
))&&RF(c))&&b.ta(c.value);
h.Gf(j)
}
else h.uk("选择语言")
}
);
N(e,"beforehide",function(b)
{
d=k;
h.ta(k);
if((b=b.target)&&c.contains(b)&&XF(b))return n
}
);

var h=new PF;
h.Y(g);
N(h,"change",function(b)
{
d&&(d.lang=b.dT.value,e.w(n))
}
);
this.zq=
{
ax:lf(e),UZ:lf(h),F:function()
{
e.F();
h.F()
}

}
;
Tc(b,this.zq);
N(b,"delayedchange",this.cU,n,this);
N(b.field,"paste",this.Hx,n,this)
}
;
t.cU=function()
{
var b=this.zq&&this.zq.ax();
b&&(b.R()&&b.anchor)&&b.na()
}
;

t.Hx=function(b)
{
var c=ZF(this),d=c.zm,e=c.code;
if("1"===c.state)if(c=b.Yb.clipboardData)c.types&&z.contains(c.types,"text/plain")&&(b.preventDefault(),c=c.getData("text/plain"),b=document.createTextNode(c),d.zg(b),bs(b));
else if(window.clipboardData)
{
if(c=window.clipboardData.getData("Text"))
{
b.preventDefault();
var g=c;
this.dj("i",function(b,c)
{
d.zg(b);
b=c();
g=Ja(g);
oc(document.createTextNode(g),b)
}
)
}

}
else
{
var h=d.sa(),b=d.Lc().length,l=(e.firstChild?Xr(e.firstChild):0)-h-b;
setTimeout(function()
{
var b=
YF(e.innerHTML);
zc(e,b);
b=(e.firstChild?Xr(e.firstChild):0)-l;
e.firstChild&&nq(e.firstChild,Math.max(h,b)).select()
}
)
}

}
;

t.Ex=function(b)
{
if(13===b.keyCode)return this.yx(b);
if(40===b.keyCode)
{
var c=ZF(this),d=c.zm,b=c.code;
if("1"===c.state)
{
for(var e=c=d.ia(),g=[];
e&&e!==b;
)g.push([e.parentNode.childNodes.length,z.indexOf(e.parentNode.childNodes,e)]),e=e.parentNode;
g=!g.length||z.every(g,function(b)
{
return b[0]===b[1]+1
}
);
e=WF(c);
if(g&&!(g=!e))e&&(c=c.nodeValue,d=d.Ia(),e=d===c.length||UF&&d===c.length-1&&"\n"===c.slice(-1)),g=e;
g&&(zD(b)||mc(document.createElement("br"),b))
}

}

}
;

t.yx=function(b)
{
var c=ZF(this),d=c.zm;
if("1"===c.state)return b.preventDefault(),A?this.dj("i",function(b,c)
{
d.zg(b);
setTimeout(function()
{
var d=document.createTextNode("\r");
b=c();
oc(d,b);
bs(d)
}
)
}
):document.queryCommandSupported("insertLineBreak")?document.execCommand("insertLineBreak"):(b=document.createTextNode("\n"),d.insertNode(b),bs(b)),this.B.jf(),j
}
;

t.ws=function(b,c)
{
var d=this.C,e;
b.bd();
var g;
var h=jD(b,j),l=h.fa,m,p=this.B.field;
g=$F(this,l,BD(yD,qf(VF)))||p;
var r=function(b)
{
return b.parentNode.insertBefore(document.createTextNode(""),b)
}
;
if(WF(l))
{
var x=l.parentNode;
!l.nodeValue&&x!==p&&Ms(x)?(m=r(x),l=r(m),x.parentNode.removeChild(x)):m=A&&h.offset===l.length?mc(document.createTextNode(""),l):l.splitText(h.offset)
}
else"BR"===l.tagName&&(m=l,l=r(l));
if(m)
{
for(var F,h=l,l=m;
h!=g&&(F=h.parentNode);
)
{
m=h;
h=l;
for(l=F.cloneNode(n);
m.nextSibling;
)l.appendChild(m.nextSibling);

h&&l.insertBefore(h,l.firstChild);
h=F
}
F=l;
m=F.firstChild;
jc(g,F.childNodes);
g=m
}
else g=k;
g?(e=document.createElement("PRE"),g.parentNode.insertBefore(e,g)):this.dj("PRE",function(c,d)
{
b.insertNode(c);
e=d()
}
);
!c&&A&&(c=" ");
e.lang=d.XM;
zc(e,c);
Ms(e)?Ls(e.firstChild):bs(e.lastChild);
d=e;
zD(d)||mc(document.createElement("br"),d)
}
;
FB["+code"]=
{
jb:j,S:"插入代码",xa:"+code",La:"tr-icon tr-code",factory:GA
}
;
a.aG=function(b)
{
sE.call(this,b);
this.P=new me(this);
this.xB="http://upload."+Dg.Fm+":"+location.port+"/upload";
this.$L=!A
}
;
y(aG,sE);
a.bG=function(b)
{
id.call(this,"ok");
var c=b[0];
this.$l=c;
this.rH=c.replace("_m.jpg","_r.jpg");
this.NH=b[1];
this.MH=b[2]
}
;
y(bG,id);
t=aG.prototype;
t.zh=Bk('<div class="zm-img-uploader"><iframe src="about:blank" name="av_up_frame" style="position: absolute;
 height: 0;
 width: 0;
 left: -9000px;
 "></iframe><div class="zg-section zm-img-uploader-tab"><a href="javascript:;
" class="tab-nav selected">上传图片</a> 或 <a href="javascript:;
" class="tab-nav">引用站外图片</a></div><form class="zg-clear" target="av_up_frame" method="POST" enctype="multipart/form-data" action="<%= uploadURL %>"><div class="tab-content selected <% if (canStylize) 
{
 %>inline<% 
}
 %>"><% if (canStylize) 
{
 %><input type="file" name="upload_file" style="opacity:0;
height:0;
width:0;
font-size:0;
position:absolute;
"><a href="javascript:;
" class="browser zg-btn-blue">选择图片</a><% 
}
 else 
{
 %><input type="file" name="upload_file"><% 
}
 %></div><div class="tab-content"><input type="text" autocomplete="off" name="upload_file_url" class="zm-editable-editor-input zg-form-text-input"><a href="javascript:;
" class="insert zg-btn-blue zm-uploader-button-fix">确认</a></div><span style="display: none;
 " class="zm-img-uploader-loading">正在上传</span><span style="display: none;
 " class="zm-img-uploader-error">上传图片失败，请稍后重试</span></form><div class="zg-gray">请不要上传与回答问题无关的图片，详细请看 <a href="http://www.zhihu.com/question/20064580" target="_blank">知乎图片使用规范</a></div><div class="zm-command"><a class="cancel" href="javascript:;
">取消</a></div></div>');

t.Qv=function()
{
var b=hc(this.zh(
{
uploadURL:this.xB,canStylize:this.$L
}
));
E.forEach(
{
form:"form",$A:".zm-img-uploader-tab",kh:".zm-img-uploader-loading",mf:".zm-img-uploader-error",XI:"input[type=text]",ao:"input[type=file]",PC:".browser",jl:".cancel",nQ:".insert"
}
,function(c,e)
{
this[e]=$(c,b).get(0)
}
,this);
this.P.c(Y,"iframe_data",this.bv).c(this.ao,"change",this.wT).c(this.nQ,"click",this.oQ).c(this.jl,"click",function()
{
this.rx();
this.hide()
}
).c(this.$A,"click",function(b)
{
b=$(b.target);
b.is("a")&&
!b.is(".selected")&&cG(this,b.index())
}
);
this.iD=b;
pi||(cG(this,1),$(this.$A).replaceWith("<strong>输入站外图片地址：</strong>"));
this.PC&&this.P.c(this.PC,"click",function()
{
this.ao.click()
}
);
var c=new tE(this);
c.eb("插入图片").Na(this.iD);
c=wE(c);
Ih(c,k);
return c
}
;
t.wT=function()
{
if(this.ao.value)
{
var b=this.ao.value,b=String(b).toLowerCase();
(!b?0:z.some([".jpg",".jpeg",".gif",".png"],function(c)
{
return Ks(b,c)
}
))?(this.XI.value="",R(this.kh,j),R(this.mf,n),this.form.submit()):dG(this,"图片不是 .jpg、.png 或 .gif 格式，无法上传。")
}

}
;

t.oQ=function()
{
var b=jk(this.XI.value);
b?Fa(b,"http://")?(this.ao.value="",R(this.kh,j),R(this.mf,n),this.form.submit()):dG(this,"我们目前不支持该协议。"):dG(this,"请填写图片地址。")
}
;
a.cG=function(b,c)
{
function d(b)
{
b.eq(c).addClass("selected").siblings().removeClass("selected")
}
var e=$(".tab-nav",b.$A),g=$(".tab-content",b.form);
R(b.mf,n);
var h=g.eq(c);
h.find("input").val("");
d(e);
d(g);
h.find(":text").focus()
}
,a.dG=function(b,c)
{
R(b.kh,n);
b.mf.innerHTML=c;
R(b.mf,j)
}
;
t.bv=function(b)
{
R(this.kh,n);
this.vk(b.mb)
}
;

t.vk=function(b)
{
b&&!b.r?(this.dispatchEvent(this.Ln(b.msg)),this.hide()):dG(this,b.msg)
}
;
t.Ln=function(b)
{
return new bG(b)
}
;
t.p=function()
{
this.P.F();
this.P=k;
aG.m.p.call(this)
}
;
a.eG=function()
{
xE.call(this,"image");
this.P=new me(this)
}
;
y(eG,xE);
t=eG.prototype;
t.md=lf("ImageDialogPlugin");
t.nf=function(b,c)
{
var d=this.B;
return!d.Pe&&(d.ig(),!d.Pe)?n:eG.m.nf.call(this,b,c)
}
;

t.Cj=function(b)
{
if(b&&"mouseup"===b.type)
{
var c=b.target;
c&&"IMG"===c.nodeName&&(b=zD(c),b||(b=document.createElement("br"),mc(b,c)),Ls(b))
}

}
;
t.mo=function(b)
{
eG.m.mo.call(this,b)
}
;
t.Pv=function(b)
{
b=new aG(b);
this.P.c(b,"ok",this.Aj).c(b,"cancel",this.no);
return b
}
;
t.p=function()
{
eG.m.p.call(this);
this.P.F()
}
;

t.Aj=function(b)
{
zE(this);
var c=eD(this),d;
d=b.rH?c.o("IMG",
{
"class":"origin_image zh-lightbox-thumb","data-original":b.rH,title:"点击查看原图",src:b.$l
}
):c.o("IMG",
{
"class":"content_image",src:b.$l
}
);
b.NH&&d.setAttribute("data-rawwidth",b.NH);
b.MH&&d.setAttribute("data-rawheight",b.MH);
b=Zv(this.B);
if(vD(b))b.zg(d),A||(bs(d,n),c.Sa().focus()),Av(this.B),this.B.jf();
else return k;
this.P.Pc()
}
;
t.no=function()
{
this.P.Pc()
}
;
a.fG=function(b)
{
sE.call(this,b);
this.P=new me(this)
}
;
y(fG,sE);
a.gG=function(b,c,d,e,g)
{
id.call(this,"ok");
this.nW=b;
this.lW=c;
this.mW=g;
this.cV=d;
this.poster=e
}
;
y(gG,id);
t=fG.prototype;
t.show=function()
{
fG.m.show.call(this);
this.ru.focus()
}
;
t.hide=function()
{
fG.m.hide.call(this)
}
;

t.Qv=function()
{
var b="http://upload."+Dg.Fm+":"+location.port+"/upload_video",b=this.jd.o("div","zm-img-uploader zm-img-uploader-upload-tab-selected",[this.jd.o("div","zg-section",this.jd.o("strong",k,"输入视频页地址：")),this.vT=this.jd.o("iframe",
{
id:"video_up_frame",src:"about:_blank",name:"video_up_frame",style:"visible:hidden;
position:absolute;
height:0;
width:0;
left:-9000px"
}
),this.ai=this.jd.o("form",
{
"class":"zg-section-title",target:"video_up_frame",method:"post",enctype:"multipart/form-data",action:b
}
,
[this.ru=this.jd.o("input",
{
type:"text","class":"zg-form-text-input",name:"upload_file_url",autocomplete:"off"
}
),this.Jn=this.jd.o("a",
{
"class":"zg-btn-blue zm-uploader-button-fix",name:"save",href:"javascript:;
"
}
,"确定"),this.jd.o("div","zm-video-uploader-info",[this.kh=this.jd.o("span",
{
style:"display:none","class":"zm-img-uploader-loading"
}
,"正在上传"),this.mf=this.jd.o("span",
{
style:"display:none","class":"zm-img-uploader-error"
}
,"插入视频失败，请稍后重试")])]),this.XP=this.jd.o("div","zg-gray"),this.aj=this.jd.o("div",
"zm-command",[this.jl=this.jd.o("a",
{
href:"javascript:;
"
}
,"取消")])]);
this.XP.innerHTML='我们目前支持<a class="zg-link-gray" target="_blank" href="http://youku.com">优酷</a>、<a class="zg-link-gray" target="_blank" href="http://tudou.com">土豆</a>、<a href="http://video.sina.com.cn/" class="zg-link-gray" target="_blank">新浪</a>、<a href="http://v.qq.com/" class="zg-link-gray" target="_blank">腾讯</a>、<a href="http://www.56.com/" class="zg-link-gray" target="_blank">56</a>、<a href="http://tv.sohu.com/" class="zg-link-gray" target="_blank">搜狐</a>、<a href="http://www.iqiyi.com/" class="zg-link-gray" target="_blank">爱奇艺</a>视频服务。<br />请不要上传与回答问题无关的视频，详细请看 <a href="http://www.zhihu.com/question/20118966" target="_blank">知乎视频使用规范</a>';

this.P.c(this.jl,"click",function()
{
this.rx();
this.hide()
}
).c(this.Jn,"click",this.BH).c(this.aj,"click",this.ga).c(this.ai,"submit",function()
{
return hG(this,this.ru.value)
}
).c(Y,"iframe_data",this.bv);
this.iD=b;
var c=new tE(this);
c.eb("插入视频").Na(b);
b=wE(c);
Ih(b,k);
return b
}
;
a.hG=function(b,c)
{
c=jk(c);
if(!c)return n;
var d=c.match(/[\-a-zA-Z0-9@:%_\+.~#?&\/\/=]
{
2,256
}
\.[a-z]
{
2,4
}
\b(\/[\-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?/gi);
d||(R(b.kh,n),b.mf.innerHTML="我们无法识别你输入的视频页地址",R(b.mf,j));
return d
}
;

t.BH=function()
{
if(this.ru.value)
{
var b=jk(this.ru.value);
b&&hG(this,b)&&(R(this.kh,j),R(this.mf,n),this.ai.submit())
}

}
;
t.ga=function(b)
{
"save"===(b.target&&b.target.name)&&this.BH()
}
;
t.bv=function(b)
{
R(this.kh,n);
this.vk(b.mb)
}
;
t.vk=function(b)
{
b&&!b.r?(this.dispatchEvent(this.Ln(b.msg[0],b.msg[1],b.msg[2],b.msg[3],b.msg[4])),this.hide()):(b=b.msg,R(this.kh,n),this.mf.innerHTML=b,R(this.mf,j))
}
;
t.Ln=function(b,c,d,e,g)
{
return new gG(b,c,d,e,g)
}
;
t.p=function()
{
this.P.F();
this.P=k;
fG.m.p.call(this)
}
;

a.iG=function()
{
xE.call(this,uD);
this.P=new me(this)
}
;
y(iG,xE);
t=iG.prototype;
t.md=lf("VideoDialogPlugin");
t.nf=function(b,c)
{
var d=this.B;
return!d.Pe&&(d.ig(),!d.Pe)?n:iG.m.nf.call(this,b,c)
}
;
t.mo=function(b)
{
iG.m.mo.call(this,b)
}
;
t.Pv=function(b)
{
b=new fG(b);
this.P.c(b,"ok",this.Aj).c(b,"cancel",this.no);
return b
}
;
t.p=function()
{
iG.m.p.call(this);
this.P.F()
}
;

t.Aj=function(b)
{
zE(this);
var c=eD(this),d=c.o("embed");
E.forEach(
{
type:"application/x-shockwave-flash",allowscriptaccess:"always",allowfullscreen:"true",wmode:"opaque","class":"video",width:"420",height:"350",src:b.nW,"data-poster":b.poster,"data-name":b.mW,"data-videoid":b.lW,"data-sourceurl":b.cV
}
,function(b,c)
{
d.setAttribute(c,b)
}
);
b=cD(d);
Ks(b,'">')&&(b+="</embed>");
var b=hc(b+" "),e=b.firstChild,g=Zv(this.B);
if(vD(g))g.zg(b),A?document.selection&&(c=document.selection.createRange(),c.move("character",
-1),c.select()):(bs(e),c.Sa().focus()),Av(this.B),this.B.jf();
else return k;
this.P.Pc()
}
;
t.no=function()
{
this.P.Pc()
}
;
a.Ns=j,a.jG=wv.prototype.execCommand,a.kG=["+insertOrderedList","+insertUnorderedList","+link"];
wv.prototype.execCommand=function(b)
{
var c=this.B;
return z.contains(kG,b)&&!c.Pe&&(c.ig(),!c.Pe)?n:jG.apply(this,arguments)
}
;
a.lG=xE.prototype.execCommand,a.mG=["+equation"];
xE.prototype.execCommand=function(b)
{
var c=this.B;
return z.contains(mG,b)&&!c.Pe&&(c.ig(),!c.Pe)?n:lG.apply(this,arguments)
}
;
uD="video";
AD=mb?"⌘":"ctrl";
FB[uD]=
{
xa:uD,S:"插入视频",La:"tr-icon tr-video",factory:FA
}
;

FB["+equation"]=
{
xa:"+equation",S:LA.SX,La:"tr-icon tr-equation",factory:FA
}
;
FB["+bold"].S="粗体 ("+AD+"+b)";
FB["+italic"].S="斜体 ("+AD+"+i)";
FB["+underline"].S="下划线 ("+AD+"+u)";
FB["+superscript"].S="引用内容";
FB["+insertOrderedList"].S="有序列表";
FB["+insertUnorderedList"].S="无序列表";
FB["+removeFormat"].S="清除格式";
FB.image.S="插入图片";
FB[uD].S="插入视频";
FB["+equation"].S="插入公式";
a.nG=function()
{

}
;
ia(nG);

nG.prototype.Rg=function(b,c)
{
this.fD=c;
var d,e,g;
e=J("zm-editable-toolbar-container",b);
d=J("zm-editable-editor-outer",b);
g=J("zm-editable-editor-field-element",b);
var h=new Aw(g.id);
h.RL=89;
var l=[];
c.enableFullScreen&&l.push("toggleFullScreen");
l.push("+bold","+italic","+underline",new bF,"+blockquote","+code","+insertOrderedList","+insertUnorderedList","+equation");
c.canUploadMedia_&&l.push(new bF,"image",uD);
c.useRemoveFormat_&&l.push(new bF,"+removeFormat");
var m=Ub(e);
g=[];
for(var p=0,r;
r=
l[p];
p++)
{
if(oa(r))
{
var x=i;
if(r=FB[r])
{
var x=r.factory||GA,F=r.xa,H=r.S,G=r.caption,Q=r.La,X=m||Ub(),x=x(F,H,G,Q,k,X);
r.jb&&(x.jb=j)
}
r=x
}
r&&g.push(r)
}
var l=Ub(e),ka=new oD(Sz.D(),Uo,l),l=eg(e);
ka.Ci(l);
ka.Ye(n);
for(m=0;
p=g[m];
m++)uo(p,32,n),p.Ci(l),ka.H(p,j);
ka.Y(e);
new dF(h,ka);
Tc(h,ka);
dD(h,new ED);
dD(h,new ME);
if(c.loremIpsum_&&(dD(h,new NE(c.loremIpsum_)),B))h.on("load",function()
{
xd(h.h(),"focus",function()
{
h.execCommand("clearlorem",j)
}
)
}
);
dD(h,new YD);
dD(h,new OE);
dD(h,new WE);
e=new TF;
dD(h,
e);
dD(h,new eG);
dD(h,new iG);
dD(h,new CF);
dD(h,new yF);
dD(h,new zF);
dD(h,new MF);
c.enableFullScreen&&(d=new JB(
{
title:"写作模式",Jk:d
}
),dD(h,d));
h.on("load",function()
{
c.useScraper_&&this.vs(h,ka)
}
,n,this);
return[h,ka]
}
;
nG.prototype.vs=function(b,c)
{
var d=b.h(),e=new Kw;
e.n(d);
var g=K("div",
{
style:"display:none",className:"tr-spinner spinner-gray"
}
);
c.h().appendChild(g);
e.on("willScrape",function()
{
R(g,j)
}
).on("didScrape",function()
{
R(g,n)
}
);
Tc(b,e)
}
;

Ca("ZH.createRichTextEditor",function(b,c)
{
return nG.D().Rg(b,c)
}
);
If("rich_text_editor");

}

}
)(zhihu);

//@ sourceURL=http://static.zhihu.com/static/compiled/rich_text_editor.js