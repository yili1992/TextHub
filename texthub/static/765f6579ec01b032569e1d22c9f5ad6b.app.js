(function(a)
{
with(a)
{

a.Wr=function(b,c)
{
this.fa=b;
this.offset=c
}
,a.Xr=function(b)
{
return b.length||b.childNodes.length
}
,a.Yr=function(b,c,d)
{
for(;
1==b.nodeType;
)
{
var e=b.childNodes[c];
if(!e&&!b.lastChild)break;
e?(b=e.previousSibling,d&&b?c=Xr(b):(b=e,c=0)):(b=b.lastChild,c=Xr(b))
}
return new Wr(b,c)
}
,a.Zr=function(b,c)
{
b!=k&&this.append.apply(this,arguments)
}
;
t=Zr.prototype;
t.Nh="";
t.set=function(b)
{
this.Nh=""+b
}
;
t.append=function(b,c,d)
{
this.Nh+=b;
if(c!=k)for(var e=1;
e<arguments.length;
e++)this.Nh+=arguments[e];
return this
}
;

t.clear=function()
{
this.Nh=""
}
;
t.Rr=u(48);
t.toString=q("Nh");
a.$r=function(b)
{
this.type="anon_change";
this.lb=b
}
;
y($r,id);
a.Z=function(b,c)
{
return da[b]=c
}
;
Of.prototype.expand=Z(64,function(b,c,d,e)
{
ra(b)?(this.top-=b.top,this.right+=b.right,this.bottom+=b.bottom,this.left-=b.left):(this.top-=b,this.right+=c,this.bottom+=d,this.left-=e);
return this
}
);
Ko.prototype.expand=Z(63,function()
{
this.Ka(j)
}
);
rh.prototype.Ap=Z(62,function(b)
{
sh(this);
this.el=b
}
);

yi.prototype.Ap=Z(61,function(b)
{
this.el=b;
this.Aa&&zi(this)
}
);
ro.prototype.Km=Z(57,function(b)
{
this.Na(b)
}
);
Yd.prototype.Bi=Z(56,ca("GG"));
rh.prototype.qy=Z(55,function()
{
return this.Rj||150>za()-this.yy
}
);
up.prototype.Db=Z(54,function()
{
var b=this.wc();
return 1==b.nodeType?b:b.parentNode
}
);
Yg.prototype.bg=Z(52,ca("Ni"));
pj.prototype.bg=Z(51,ca("Ni"));
ar.prototype.Ve=Z(50,function(b)
{
this.ba.Qt(b)
}
);
gj.prototype.getDay=Z(49,function()
{
return this.$.getDay()
}
);
Zr.prototype.Rr=Z(48,function()
{
return this.Nh.length
}
);

Sk.prototype.fireEvent=Z(37,function(b)
{
this.dispatchEvent(b)
}
);
gj.prototype.setTime=Z(36,function(b)
{
this.$.setTime(b)
}
);
Xm.prototype.Lc=Z(31,function()
{
return Hc(this.h())
}
);
Gp.prototype.Lc=Z(30,function()
{
return this.O.toString()
}
);
Lp.prototype.Lc=Z(29,function()
{
return this.O.text
}
);
Vp.prototype.Lc=Z(28,function()
{
return Zp(this).Lc()
}
);
aq.prototype.Lc=Z(27,s(""));
gq.prototype.Lc=Z(26,function()
{
return z.map(wp(this),function(b)
{
return b.Lc()
}
).join("")
}
);

Sb.prototype.Rv=Z(21,function(b,c,d)
{
for(var e=this.Fa,g=!!d,d=["<tr>"],h=0;
h<c;
h++)d.push(g?"<td>&nbsp;
</td>":"<td></td>");
d.push("</tr>");
d=d.join("");
c=["<table>"];
for(h=0;
h<b;
h++)c.push(d);
c.push("</table>");
b=e.createElement("DIV");
b.innerHTML=c.join("");
return b.removeChild(b.firstChild)
}
);
no.prototype.Gf=Z(20,function(b,c)
{
var d=b.Hd(),e=this.N()+"-collapse-left",g=this.N()+"-collapse-right";
b.pj(d?g:e,!!(c&1));
b.pj(d?e:g,!!(c&2))
}
);
yo.prototype.Gf=Z(19,function(b)
{
this.M.Gf(this,b)
}
);

wh.prototype.Gp=Z(18,ca("gk"));
ro.prototype.Gp=Z(17,ca("gk"));

gf.prototype.Bq=Z(14,function(b,c,d)
{
var e=za(),g=d?d:e,h=this.Bl.Wg.length?this.Bl.Wg.pop():this.Bl.ml();
h.Gr=2;
h.Fr=g;
h.type=c;
h.cD=b;
b=(b=this.QZ)&&b.isTracing()?b.totalVarAlloc:-1;
h.aJ=b;
this.Lv++;
if(d)
{
d=this.eg.length;
for(b=0;
b<d;
b++)if(this.eg[b].Fr>g)
{
z.Ao(this.eg,h,b);
break
}
b==d&&this.eg.push(h)
}
else this.eg.push(h);
if(g=h.type)h=this.zk.get(g),h||(h=this.Rp.Wg.length?this.Rp.Wg.pop():this.Rp.ml(),h.type=g,this.zk.set(g,h)),h.count++;
this.mu+=za()-e
}
);
So.prototype.Yw=Z(12,function()
{
return Vo
}
);

kr.prototype.Pr=Z(0,q("Ma"));

a.as=function(b)
{
b.oy=j;
b.sD=ug(b.h()).height;
Qq+=b.sD;
z.forEach(Oq,function(b)
{
b&&(!b.oy&&b.Gl)&&b.sp()
}
)
}
,a.bs=function(b,c)
{
var d=b.parentNode,e=z.indexOf(d.childNodes,b)+(c?0:1),d=Yr(d,e,c);
A&&(Gb("9")&&1==d.fa.nodeType&&"HR"==d.fa.tagName)&&(e=d.fa,d.fa=e.parentNode,d.offset=z.indexOf(d.fa.childNodes,e)+(c?0:1));
nq(d.fa,d.offset).select()
}
,a.cs=function(b,c)
{
b.Oy=c==k||c instanceof Of?c:new Of(c,i,i,i);
b.R()&&b.na()
}
,a.ds=function(b,c)
{
if(Rl(b))b.selectionStart=c,b.selectionEnd=c;
else if(A)
{
var c=
Ul(b,c),d=b.createTextRange();
d.collapse(j);
d.move("character",c);
d.select()
}

}
,a.es=function(b)
{
var c=
{

}
;
z.forEach(b.data.Fb(),function(b)
{
c[b]=this.data.get(b)
}
,b);
return c
}
,a.fs=function(b)
{
b.Gb()&&b.fire()
}
,a.gs=function(b,c)
{
return b.Kd.get(c)
}
,a.hs=function(b,c,d)
{
var e=Ki,g=
{
title:"确认使用匿名身份？",content:'<p>使用匿名身份后，你将</p><ul style="margin: 5px 0 0 5px;
list-style-position: inside;
"><li>不能在该问题下评论（你之前的评论将被隐藏）</li><li>不能邀请别人回答该问题</li></ul>'
}
,h=
{
title:"确认放弃匿名身份？",content:"你对该问题的回答、赞同和关注行为将以实名显示。"
}
;

Ci(b?g:h,function(g)
{
if(g)
{
var h=new V(j),p="/question/"+(b?"set_anonymous":"set_public"),r="qid="+(d||Eg.X);
h.on("success",function()
{
var c=Ie(h);
c&&!c.r&&e.dispatchEvent(new $r(b))
}
);
h.ajax(p,r)
}
c&&c(g)
}
)
}
,a.is=function(b,c)
{
return b.Xb&&c?z.indexOf(b.Xb,c):-1
}
,a.js=function(b)
{
return b!=k
}
,a.ks=function(b)
{
return!/[^\t\n\r ]/.test(b)
}
,a.ls=function(b,c,d)
{
this.OG=b;
this.kU=!!d;
b&&!c&&this.next()
}
;
y(ls,Nd);

ls.prototype.next=function()
{
var b=this.OG;
b||f(O.fb);
this.OG=this.kU?b.previousSibling:b.nextSibling;
return b
}
;
a.ms=function(b)
{
return 1==b.nodeType||3==b.nodeType&&!ks(b.nodeValue)
}
,a.ns=function(b)
{
try
{
return b.next()
}
catch(c)
{
return k
}

}
,a.os=function(b,c,d)
{
la(d)||(d=c&&b.childNodes.length?b.childNodes.length-1:0);
ls.call(this,b.childNodes[d],j,c)
}
;
y(os,ls);

a.ps=function(b,c,d,e,g,h)
{
oa(b)?(this.re="y"==b?c:0,this.je="m"==b?c:0,this.Qd="d"==b?c:0,this.Ed="h"==b?c:0,this.Jd="n"==b?c:0,this.Ld="s"==b?c:0):(this.re=b||0,this.je=c||0,this.Qd=d||0,this.Ed=e||0,this.Jd=g||0,this.Ld=h||0)
}
;

ps.prototype.Gk=function(b)
{
var c=Math.min(this.re,this.je,this.Qd,this.Ed,this.Jd,this.Ld),d=Math.max(this.re,this.je,this.Qd,this.Ed,this.Jd,this.Ld);
if(0>c&&0<d)return k;
if(!b&&0==c&&0==d)return"PT0S";
d=[];
0>c&&d.push("-");
d.push("P");
(this.re||b)&&d.push(Math.abs(this.re)+"Y");
(this.je||b)&&d.push(Math.abs(this.je)+"M");
(this.Qd||b)&&d.push(Math.abs(this.Qd)+"D");
if(this.Ed||this.Jd||this.Ld||b)d.push("T"),(this.Ed||b)&&d.push(Math.abs(this.Ed)+"H"),(this.Jd||b)&&d.push(Math.abs(this.Jd)+"M"),
(this.Ld||b)&&d.push(Math.abs(this.Ld)+"S");
return d.join("")
}
;
ps.prototype.dg=function(b)
{
return b.re==this.re&&b.je==this.je&&b.Qd==this.Qd&&b.Ed==this.Ed&&b.Jd==this.Jd&&b.Ld==this.Ld
}
;
ps.prototype.clone=function()
{
return new ps(this.re,this.je,this.Qd,this.Ed,this.Jd,this.Ld)
}
;
ps.prototype.add=function(b)
{
this.re+=b.re;
this.je+=b.je;
this.Qd+=b.Qd;
this.Ed+=b.Ed;
this.Jd+=b.Jd;
this.Ld+=b.Ld
}
;

a.qs=function(b)
{
return 1==b.length?"0"+b:b
}
,a.rs=/^#(?:[0-9a-f]
{
3
}
)
{
1,2
}
$/i,a.ss=/Z|(?:([-+])(\d
{
2
}
)(?::?(\d
{
2
}
))?)$/,a.ts=/^(\d
{
2
}
)(?::?(\d
{
2
}
)(?::?(\d
{
2
}
)(\.\d+)?)?)?$/,a.us=/^(\d
{
4
}
)(?:(?:-?(\d
{
2
}
)(?:-?(\d
{
2
}
))?)|(?:-?(\d
{
3
}
))|(?:-?W(\d
{
2
}
)(?:-?([1-7]))?))?$/,a.vs=function(b,c)
{
var d=$.extend(
{
all:n
}
,vs.Q,c||
{

}
),e=$(b).get(0).getBoundingClientRect();
return!d.all&&(e.bottom<d.paddingTop||e.bottom>$(window).height())||d.all&&(e.top<d.paddingTop||e.bottom>$(window).height())?n:j
}
;
vs.Q=
{
paddingTop:0
}
;

a.ws=/^(?:rgb)?\((0|[1-9]\d
{
0,2
}
),\s?(0|[1-9]\d
{
0,2
}
),\s?(0|[1-9]\d
{
0,2
}
)\)$/i,a.xs=/#(.)(.)(.)/,a.ys=function(b)
{
var c=b.body,b=b.documentElement;
return new Ob(c.scrollLeft||b.scrollLeft,c.scrollTop||b.scrollTop)
}
,a.zs=function(b)
{
for(var c;
c=!b||1!=b.nodeType?k:ns(O.filter(new os(b,n),ms));
)b=c;
return b
}
,a.As=function(b,c,d)
{
lp.call(this,b,0,d?"添加父话题":"添加子话题");
this.ry=d;
this.Nf=c;
this.ss="";
this.WH="/topic/parent/remove";
this.qC=j
}
;
y(As,lp);
t=As.prototype;

t.n=function(b)
{
if(this.isEnabled=!b.getAttribute("data-disabled"))As.m.n.call(this,b),this.he(j),R(this.lE,n)
}
;
t.uf=function(b)
{
var c;
this.ry&&(c="/topic/autocomplete?no_create=true");
As.m.uf.call(this,b,c);
this.L.yf.iE=n
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
return!this.qC&&3>=b.length?n:d[0]!==b[1]
}
)
}
,this)
}
,this)
}
;

t.af=function(b,c)
{
this.jh||(this.jh=j,this.xhr=new V(j),P(this.g(),this.xhr,"complete",this.av),b||(b=-1),this.ry?this.xhr.ajax("/topic/add","tid="+this.Nf+"&pid="+b+"&topic_text="+encodeURIComponent(c)):this.xhr.ajax("/topic/add","tid="+this.Nf+"&cid="+b+"&topic_text="+encodeURIComponent(c)))
}
;
t.sE=function(b)
{
return'<a class="nor" href="/topic/'+b[1]+'/organize">'+b[0]+"</a>"
}
;

t.ip=function(b)
{
if(!this.da||!this.da.Gb())
{
var c=new V(j);
this.g().c(c,"success",function()
{
var d=Ie(c);
d.r?U(d.msg):(np(this),this.We(),this.dispatchEvent(
{
type:"remove_tag",data:
{
id:b
}

}
))
}
);
this.ry?c.ajax(this.WH,"cid="+this.Nf+"&pid="+b):c.ajax(this.WH,"pid="+this.Nf+"&cid="+b);
this.da=c
}

}
;
a.Bs=function(b,c)
{
this.Th=b instanceof Ob?b:new Ob(b,c)
}
;
y(Bs,Tm);
Bs.prototype.na=function(b,c,d,e)
{
var g=ys(Tb(b)),h=this.Th.x+g.x,g=this.Th.y+g.y,l=km(b),h=h-l.x,g=g-l.y;
lm(new Ob(h,g),b,c,d,k,k,e)
}
;

a.Cs=function(b,c)
{
"number"===$.type(c)&&(c=
{
offsetTop:c
}
);
var d=$.extend(
{
yJ:vs
}
,Fk,c||
{

}
);
if(!d.yJ(b,d))
{
var e=$(b).offset().top-d.paddingTop-d.offsetTop||0;
d.vC?$(document.documentElement).add(document.body).animate(
{
scrollTop:e
}
):$(window).scrollTop(e)
}

}
,a.Ds=function(b,c)
{
c.all=j;
return vs(b,c)
}
,a.Es=function(b)
{
var c=b.match(ws);
if(c)
{
var b=Number(c[1]),d=Number(c[2]),c=Number(c[3]);
if(0<=b&&255>=b&&0<=d&&255>=d&&0<=c&&255>=c)return[b,d,c]
}
return[]
}
,a.Fs=function(b)
{
rs.test(b)||f(Error("'"+
b+"' is not a valid hex color"));
4==b.length&&(b=b.replace(xs,"#$1$1$2$2$3$3"));
return b.toLowerCase()
}
,a.Gs=
{
aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",
darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",
firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",
lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",
mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",
rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"
}
,
a.Hs=function(b,c,d,e,g,h,l)
{
this.$=pa(b)?new Date(b,c||0,d||1,e||0,g||0,h||0,l||0):new Date(b?b.getTime():za())
}
;
y(Hs,gj);
t=Hs.prototype;
t.getHours=function()
{
return this.$.getHours()
}
;
t.getMinutes=function()
{
return this.$.getMinutes()
}
;
t.getSeconds=function()
{
return this.$.getSeconds()
}
;
t.getUTCHours=function()
{
return this.$.getUTCHours()
}
;
t.setHours=function(b)
{
this.$.setHours(b)
}
;
t.setMinutes=function(b)
{
this.$.setMinutes(b)
}
;
t.setSeconds=function(b)
{
this.$.setSeconds(b)
}
;
t.setMilliseconds=function(b)
{
this.$.setMilliseconds(b)
}
;

t.setUTCHours=function(b)
{
this.$.setUTCHours(b)
}
;
t.add=function(b)
{
gj.prototype.add.call(this,b);
b.Ed&&this.setHours(this.$.getHours()+b.Ed);
b.Jd&&this.setMinutes(this.$.getMinutes()+b.Jd);
b.Ld&&this.setSeconds(this.$.getSeconds()+b.Ld)
}
;
t.Gk=function(b,c)
{
var d=gj.prototype.Gk.call(this,b);
return b?d+" "+bb(this.getHours())+":"+bb(this.getMinutes())+":"+bb(this.getSeconds())+(c?hj(this):""):d+"T"+bb(this.getHours())+bb(this.getMinutes())+bb(this.getSeconds())+(c?hj(this):"")
}
;

a.Is=function(b)
{
return gj.prototype.Gk.call(b,j)+"T"+bb(b.getHours())+":"+bb(b.getMinutes())+":"+bb(b.getSeconds())+hj(b)
}
;
t.dg=function(b)
{
return this.getTime()==b.getTime()
}
;
t.toString=function()
{
return this.Gk()
}
;
t.clone=function()
{
var b=new Hs(this.$);
b.Vg=this.Vg;
b.El=this.El;
return b
}
;

a.Js=/[^\d]+$/,a.Ks=function(b,c)
{
var d=b.length-c.length;
return 0<=d&&b.indexOf(c,d)==d
}
,a.Ls=function(b)
{
nq(zs(b),0).select()
}
,a.Ms=function(b,c)
{
var d=Ic(b);
if(b.getElementsByTagName)for(var e in Mq)if(b.tagName==e||0<b.getElementsByTagName(e).length)return n;
return!c&&" "==d||ks(d)
}
,a.Ns=j,a.Os=function(b)
{
if(b=vp(b||window))if(b.empty)try
{
b.empty()
}
catch(c)
{

}
else try
{
b.removeAllRanges()
}
catch(d)
{

}

}
,a.Ps=function(b)
{
lp.call(this);
this.tD=k;
this.$c="例如：互联网、医学、法律、数学...";
this.data=b||[]
}
;
y(Ps,lp);

t=Ps.prototype;

t.n=function(b)
{
this.e=b;
this.Ze=J("zm-tag-editor-labels",this.e);
this.he(j);
this.Be();
this.Da();
this.fg=I("zh-expert-topics");
this.kn=I("zh-active-topics");
if(this.fg)$(this.fg).on("click",".del",$.proxy(function(b)
{
var d=$(b.target).parents(".item");
d.data("active")?(nc(this.kn,d[0],0),ok(d[0])):L(d[0]);
z.forEach(this.data,function(b,c)
{
b+""===d.data("url-token")+""&&this.data.splice(c,1)
}
,this);
Qs(this);
this.dispatchEvent("remove")
}
,this));
if(this.kn)$(this.kn).on("click",".add",$.proxy(function(b)
{
b=
$(b.target).parents(".item");
nc(this.fg,b[0],0);
ok(b[0]);
Qs(this);
this.dispatchEvent("add")
}
,this));
this.data=$("#zh-expert-topics .item").map(function()
{
return $(this).data("url-token")
}
).get();
this.Em()
}
;
t.Xn=function()
{
this.gc||(this.gc=K("div","zm-tag-editor-editor",[this.kf=K("div","zg-section zm-tag-editor-command-buttons-wrap",[this.Qa=I("profile-expert-edit-input")])]),this.$c&&(this.wy=new gp(this.$c),this.wy.n(this.Qa),this.Qa.title=this.$c),mc(this.gc,this.Ze),this.uf(this.kf))
}
;

t.uf=function(b)
{
this.L=new go("/topic/autocomplete",this.Qa,k,k,b,j);
this.L.Jf(j);
this.L.ni=this.ie;
this.L.Hp(this.sk());
this.L.Ew=[this.$c];
this.g().c(this.L,"select",this.Zo);
this.g().c(this.L,Ll.Hh.Ri,this.$u);
this.g().c(this.L,Ll.Hh.Ri,this.Xu);
this.g().c(this.L,Ll.Hh.XJ,function()
{
$(this.L.M.e).hide()
}
)
}
;
t.Xu=function()
{
if(0===this.L.bb.length)
{
var b=K("div",
{
className:"zu-autocomplete-empty"
}
,"没有名字为 "+$(this.Qa).val()+" 的话题");
$(this.L.M.e).html(b).show()
}

}
;

t.Zo=function()
{
var b=z.slice(this.L.kg(),1);
b&&3<b.length&&(this.xD=b,this.af(b))
}
;
t.af=function(b)
{
this.data.push(b[1]);
var c=$(this.fg).find("[data-url-token='"+b[1]+"']")[0];
c?ok(c):(Gj("TopicMediumV2",
{
member_url_token:S[1],topic_url_token:b[1]
}
,this.jr,this),$(this.kn).find("[data-url-token='"+b[1]+"']").remove(),this.dispatchEvent("add"))
}
;
t.jr=function(b)
{
b=$(b)[0];
nc(this.fg,b,0);
ok(b);
Qs(this)
}
;
t.We=ba();

t.Em=function()
{
if(!Dg.Nc)
{
var b=this;
this.ag&&this.ag.F();
var c=new vl;
c.zr="expert-item-moving";
wl(c,this.fg,4);
c.v();
this.ag=c;
this.g().c(this.ag,"dragend",function()
{
this.dispatchEvent("sort")
}
);
$("a, input, .del, .add",this.fg).each(function()
{
b.g().c(this,"mousedown",function(b)
{
b.stopPropagation()
}
)
}
);
this.g().c(this.ag,"beforedragstart",function()
{
return J("editing",this.fg)?n:j
}
)
}

}
;

a.Qs=function(b)
{
var c=$(b.fg).children().length;
6<c&&L($(b.fg).children()[6]);
R(I("zh-profile-expert-empty"),0>=c);
0<c&&R(I("zh-profile-expert-warning"),n);
R(I("active-topics-wrap"),$(b.kn).children().length);
b.Em()
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
return d+""!==b[2]+""&&3<b.length
}
)
}
,this)
}
,this)
}
;
a.Rs=function(b)
{
lp.call(this,b,0);
this.ss="";
this.NC="/topic/ignore"
}
;
y(Rs,As);

Rs.prototype.af=function(b)
{
this.jh||(this.jh=j,this.xhr=new V(j),P(this.g(),this.xhr,"complete",this.av),this.xhr.ajax(this.NC,"tid="+b+"&method=add"))
}
;
Rs.prototype.ip=function(b)
{
this.jh||(this.jh=j,this.xhr=new V(j),this.g().c(this.xhr,"complete",function()
{
np(this);
this.We();
this.jh=n
}
),this.xhr.ajax(this.NC,"tid="+b+"&method=del"))
}
;
a.Ss=function()
{
lp.call(this,k,k,"搜索话题");
this.tD=k;
this.$c="";
this.data=[Gg[0]]
}
;
y(Ss,lp);
t=Ss.prototype;

t.n=function(b)
{
this.e=b;
this.Ze=J("zm-tag-editor-labels",this.e);
this.he(j);
this.Be();
this.Da()
}
;
t.Xn=function()
{
this.gc||(this.gc=K("div","zm-tag-editor-editor",[this.Tn=K("div","zg-section zg-clear"),this.kf=K("div","zg-section zm-tag-editor-command-buttons-wrap",[this.Qa=I("zh-topic-merge-input"),K("a",
{
"class":"zg-mr15 zg-btn-blue",href:"#",name:"add",style:"display:none;
"
}
,"添加"),this.lE=I("zh-topic-merge-btn")])]),mc(this.gc,this.Ze),this.uf(this.kf))
}
;

t.uf=function(b)
{
this.L=new go("/topic/autocomplete",this.Qa,k,k,b,j);
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
return d[1]!==b[1]&&3<b.length
}
)
}
,this)
}
,this)
}
;
t.Zo=function()
{
var b=z.slice(this.L.kg(),1);
b&&3<b.length&&(this.xD=b,this.af(b[3],b[0]))
}
;

t.af=function(b,c)
{
var d=this;
setTimeout(function()
{
d.Qa.value=c
}
);
this.tD=b
}
;
t.We=ba();
a.Ts=function(b)
{
lp.call(this,[],0);
this.rD=this.Gs=k;
this.HC="/reviewq/question?queue_id="+b+"&task_id="
}
;
y(Ts,lp);
Ts.prototype.NS=function()
{
this.locked=n;
var b=Ie(this.oB);
b&&b.r?U(b.msg):(this.data=b.msg,this.he(j),np(this))
}
;
a.Us=function(b,c,d)
{
T.call(this,d);
this.M=c||So.D();
this.zb=b||this.M.Yw()
}
;
y(Us,T);
t=Us.prototype;
t.uy=k;
t.pb=k;
t.M=k;
t.zb=k;
t.nb=j;
t.ic=j;
t.Pw=j;
t.sb=-1;
t.mc=k;
t.tg=n;
t.oL=n;
t.YS=j;

t.Lg=k;
t.kc=function()
{
return this.uy||this.M.kc(this)
}
;
t.Qr=function()
{
return this.pb||(this.pb=new Vl(this.kc()))
}
;
t.o=function()
{
this.e=this.M.o(this)
}
;
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
this.e=this.M.n(this,b);
"none"==b.style.display&&(this.nb=n)
}
;

t.z=function()
{
Us.m.z.call(this);
oh(this,function(b)
{
b.Aa&&Vs(this,b)
}
,this);
var b=this.h();
this.M.Oe(this);
this.w(this.nb,j);
this.g().c(this,"enter",this.xx).c(this,"highlight",this.Cx).c(this,"unhighlight",this.Lx).c(this,"open",this.ZO).c(this,"close",this.iO).c(b,"mousedown",this.Le).c(Tb(b),"mouseup",this.oO).c(b,["mousedown","mouseup","mouseover","mouseout","contextmenu"],this.hO);
this.ki()&&Ws(this,j)
}
;

a.Ws=function(b,c)
{
var d=b.g(),e=b.kc();
c?d.c(e,"focus",b.Ke).c(e,"blur",b.Zc).c(b.Qr(),"key",b.Zb):d.va(e,"focus",b.Ke).va(e,"blur",b.Zc).va(b.Qr(),"key",b.Zb)
}
;
t.Za=function()
{
this.Sb(-1);
this.mc&&this.mc.vb(n);
this.tg=n;
Us.m.Za.call(this)
}
;
t.p=function()
{
Us.m.p.call(this);
this.pb&&(this.pb.F(),this.pb=k);
this.M=this.mc=this.Lg=this.uy=k
}
;
t.xx=s(j);

t.Cx=function(b)
{
var c=is(this,b.target);
if(-1<c&&c!=this.sb)
{
var d=Xs(this);
d&&d.td(n);
this.sb=c;
d=Xs(this);
this.tg&&d.setActive(j);
this.YS&&(this.mc&&d!=this.mc)&&(d.Tb&64?d.vb(j):this.mc.vb(n))
}
Pc(this.h(),Wc.dn,b.target.h().id)
}
;
t.Lx=function(b)
{
b.target==Xs(this)&&(this.sb=-1);
Pc(this.h(),Wc.dn,"")
}
;
t.ZO=function(b)
{
if((b=b.target)&&b!=this.mc&&b.getParent()==this)this.mc&&this.mc.vb(n),this.mc=b
}
;
t.iO=function(b)
{
b.target==this.mc&&(this.mc=k)
}
;

t.Le=function(b)
{
this.ic&&(this.tg=j);
var c=this.kc();
c&&Ec(c)?c.focus():b.preventDefault()
}
;
t.oO=function()
{
this.tg=n
}
;
t.hO=function(b)
{
var c;
a:
{
c=b.target;
if(this.Lg)for(var d=this.h();
c&&c!==d;
)
{
var e=c.id;
if(e in this.Lg)
{
c=this.Lg[e];
break a
}
c=c.parentNode
}
c=k
}
if(c)switch(b.type)
{
case "mousedown":c.Le(b);
break;
case "mouseup":c.mg(b);
break;
case "mouseover":c.nd(b);
break;
case "mouseout":c.gi(b);
break;
case "contextmenu":c.po(b)
}

}
;
t.Ke=ba();
t.Zc=function()
{
this.Sb(-1);
this.tg=n;
this.mc&&this.mc.vb(n)
}
;

t.Zb=function(b)
{
return this.isEnabled()&&this.R()&&(0!=ph(this)||this.uy)&&this.tf(b)?(b.preventDefault(),b.stopPropagation(),j):n
}
;

t.tf=function(b)
{
var c=Xs(this);
if(c&&"function"==typeof c.Zb&&c.Zb(b)||this.mc&&this.mc!=c&&"function"==typeof this.mc.Zb&&this.mc.Zb(b))return j;
if(b.shiftKey||b.ctrlKey||b.metaKey||b.altKey)return n;
switch(b.keyCode)
{
case 27:if(this.ki())this.kc().blur();
else return n;
break;
case 36:Ys(this);
break;
case 35:Zs(this,function(b,c)
{
b--;
return 0>b?c-1:b
}
,0);
break;
case 38:if(this.zb==Vo)$s(this);
else return n;
break;
case 37:if(this.zb==Uo)this.Hd()?at(this):$s(this);
else return n;
break;
case 40:if(this.zb==
Vo)at(this);
else return n;
break;
case 39:if(this.zb==Uo)this.Hd()?$s(this):at(this);
else return n;
break;
default:return n
}
return j
}
;
a.Vs=function(b,c)
{
var d=c.h(),d=d.id||(d.id=c.$d());
b.Lg||(b.Lg=
{

}
);
b.Lg[d]=c
}
;
t.H=function(b,c)
{
Us.m.H.call(this,b,c)
}
;
t.Xk=function(b,c,d)
{
b.yk|=2;
b.yk|=64;
(this.ki()||!this.oL)&&uo(b,32,n);
b.Ep(n);
Us.m.Xk.call(this,b,c,d);
b.Aa&&this.Aa&&Vs(this,b);
c<=this.sb&&this.sb++
}
;

t.removeChild=function(b,c)
{
if(b=oa(b)?mh(this,b):b)
{
var d=is(this,b);
-1!=d&&(d==this.sb?b.td(n):d<this.sb&&this.sb--);
(d=b.h())&&(d.id&&this.Lg)&&E.remove(this.Lg,d.id)
}
b=Us.m.removeChild.call(this,b,c);
b.Ep(j);
return b
}
;
t.Fp=function(b)
{
this.h()&&f(Error("Component already rendered"));
this.zb=b
}
;
t.R=q("nb");

t.w=function(b,c)
{
if(c||this.nb!=b&&this.dispatchEvent(b?"show":"hide"))
{
this.nb=b;
var d=this.h();
if(d)
{
R(d,b);
if(this.ki()&&(d=this.kc()))d.tabIndex=this.ic&&this.nb?0:-1;
c||this.dispatchEvent(this.nb?"aftershow":"afterhide")
}
return j
}
return n
}
;
t.isEnabled=q("ic");

t.cb=function(b)
{
if(this.ic!=b&&this.dispatchEvent(b?"enable":"disable"))if(b?(this.ic=j,oh(this,function(b)
{
b.AJ?delete b.AJ:b.cb(j)
}
)):(oh(this,function(b)
{
b.isEnabled()?b.cb(n):b.AJ=j
}
),this.tg=this.ic=n),this.ki())
{
var c=this.kc();
c&&(c.tabIndex=b&&this.nb?0:-1)
}

}
;
t.ki=q("Pw");
t.Ye=function(b)
{
b!=this.Pw&&this.Aa&&Ws(this,b);
this.Pw=b;
if(this.ic&&this.nb)
{
var c=this.kc();
c&&(c.tabIndex=b?0:-1)
}

}
;
t.Sb=function(b)
{
(b=qh(this,b))?b.td(j):-1<this.sb&&Xs(this).td(n)
}
;

t.td=function(b)
{
this.Sb(is(this,b))
}
;
a.Xs=function(b)
{
return qh(b,b.sb)
}
,a.Ys=function(b)
{
Zs(b,function(b,d)
{
return(b+1)%d
}
,ph(b)-1)
}
,a.at=function(b)
{
Zs(b,function(b,d)
{
return(b+1)%d
}
,b.sb)
}
,a.$s=function(b)
{
Zs(b,function(b,d)
{
b--;
return 0>b?d-1:b
}
,b.sb)
}
,a.Zs=function(b,c,d)
{
for(var d=0>d?is(b,b.mc):d,e=ph(b),d=c.call(b,d,e),g=0;
g<=e;
)
{
var h=qh(b,d);
if(h&&b.TC(h))
{
b.pA(d);
break
}
g++;
d=c.call(b,d,e)
}

}
;
t.TC=function(b)
{
return b.R()&&b.isEnabled()&&!!(b.Tb&2)
}
;
t.pA=function(b)
{
this.Sb(b)
}
;

a.bt=function(b,c)
{
Bs.call(this,b,c)
}
;
y(bt,Bs);
bt.prototype.Mo=0;
bt.prototype.Nm=ca("Mo");
bt.prototype.na=function(b,c,d,e)
{
var g=ag(b),g=fg(g),h;
h=Ub(b);
h=ac(h.Fa);
h=new Ob(this.Th.x+h.scrollLeft,this.Th.y+h.scrollTop);
var l=c,m=lm(h,b,l,d,g,10,e);
if(0!=(m&496))
{
if(m&16||m&32)l^=2;
if(m&64||m&128)l^=1;
m=lm(h,b,l,d,g,10,e);
0!=(m&496)&&lm(h,b,c,d,g,this.Mo,e)
}

}
;
a.ct=function(b,c,d,e)
{
Um.call(this,b,c);
this.Mo=d?5:0;
this.Bz=e||i
}
;
y(ct,Um);
ct.prototype.ho=q("Mo");
ct.prototype.Nm=ca("Mo");

ct.prototype.na=function(b,c,d,e)
{
var g=mm(this.element,this.Yf,b,c,k,d,10,e,this.Bz);
if(g&496)
{
var h=dt(g,this.Yf),c=dt(g,c),g=mm(this.element,h,b,c,k,d,10,e,this.Bz);
g&496&&(h=dt(g,h),c=dt(g,c),mm(this.element,h,b,c,k,d,this.ho(),e,this.Bz))
}

}
;

a.dt=function(b,c)
{
b&48&&(c^=2);
b&192&&(c^=1);
return c
}
,a.et=
{

}
,a.ft=
{

}
,a.gt=function(b)
{
function c(b)
{
return $.isNumeric(b)?b+" ":b
}
var d;
d=d||+new Date;
if(0>=d-b)return"刚刚";
b=Math.floor((d-b)/1E3);
d=Math.floor(b/31536E3);
if(1<=d)return c(d)+"年前";
d=Math.floor(b/2592E3);
if(1<=d)return c(d)+"月前";
d=Math.floor(b/604800);
if(1<=d)return c(d)+"周前";
d=Math.floor(b/86400);
if(1<=d)return c(d)+"天前";
d=Math.floor(b/3600);
if(1<=d)return c(d)+"小时前";
d=Math.floor(b/60);
if(1<=d)return c(d)+"分钟前";
d=Math.floor(b);
return c(d)+
"秒前"
}
,a.ht=function()
{
var b=S;
return 1===b||0===b?"匿名用户":['<a data-tip="p$t$',b[1],'" href="/people/',b[1],'" title="'+b[0]+'" class="','zm-item-link-avatar">','<img class="zm-item-img-avatar" src="'+b[2]+'" />',"</a>"].join("")
}
,a.it=function(b,c)
{
return!ma(b)?"匿名用户":['<a data-tip="p$t$',b[1],'" href="/people/',b[1],'"',c?' class="'+c+'"':"",' title="',b[0],'">',b[0],"</a>"].join("")
}
,a.jt=function(b)
{
if(0===b||1===b)return"匿名用户";
var c=K("a",
{
href:"/people/"+b[1],title:b[0]
}
,b[0]);
c.setAttribute("data-tip",
"p$t$"+b[1]);
return c
}
,a.kt=function(b)
{
if(0===b||1===b)return K("span");
if(ma(b))
{
var c=K("a",
{
href:"/people/"+b[1],title:b[0],"class":"zm-item-link-avatar"
}
,K("img",
{
src:b[2],"class":"zm-list-avatar"
}
));
c.setAttribute("data-tip","p$t$"+b[1]);
return c
}

}
,a.lt=function(b)
{
return 1===b?j:ma(b)?b[3]===S[3]:n
}
,a.mt=function(b,c)
{
return $.post("/roundtable/"+b,
{
action:"add_question",url_token:c
}
)
}
,a.nt=function(b,c,d,e,g,h)
{
h&&(e&&(e=$.proxy(e,h)),g&&(g=$.proxy(g,h)));
$.post("/node/"+b,
{
method:c,params:d
}
,
function(b)
{
b&&b.r?g&&g(b):e&&e(b)
}
)
}
,a.ot=function(b,c)
{
return $.post("/question/askpeople",
{
qid:b,uid:c,op:"remove"
}
)
}
,a.pt=function(b,c,d)
{
return $.post("/question/askpeople",
{
qid:b,uid:c,_source_type:d,op:"add"
}
)
}
,a.qt=function(b,c)
{
return $.post("/node/AnswerVoteBarV2",
{
method:c,params:
{
answer_id:b
}

}
)
}
,a.rt=function(b,c)
{
return $.get(c?"/node/AnswerFullVoteInfoV2":"/node/AnswerVoteInfoV2",
{
params:
{
answer_id:b
}

}
)
}
,a.st=function(b,c,d,e,g)
{
sj.call(this,b,[c],[d],e,g)
}
;
y(st,sj);

st.prototype.Dh=function()
{
this.element.style.height=Math.round(this.coords[0])+"px"
}
;
a.tt=function(b,c,d,e,g)
{
sj.call(this,b,[c],[d],e,g)
}
;
y(tt,sj);
tt.prototype.Dh=function()
{
this.element.style.width=Math.round(this.coords[0])+"px"
}
;
a.ut=function(b,c,d,e,g)
{
(2!=c.length||2!=d.length)&&f(Error("Start and end points must be 2D"));
sj.apply(this,arguments)
}
;
y(ut,sj);

ut.prototype.Dh=function()
{
var b=this.Ni&&this.Hd()?"right":"left";
this.element.style[b]=Math.round(this.coords[0])+"px";
this.element.style.top=Math.round(this.coords[1])+"px"
}
;

a.vt=function(b)
{
var c=
{

}
,b=String(b),d="#"==b.charAt(0)?b:"#"+b;
if(rs.test(d))return c.ds=Fs(d),c.type="hex",c;
d=Es(b);
if(d.length)
{
var e=d[0],b=d[1],d=d[2],e=Number(e),b=Number(b),d=Number(d);
(isNaN(e)||0>e||255<e||isNaN(b)||0>b||255<b||isNaN(d)||0>d||255<d)&&f(Error('"('+e+","+b+","+d+'") is not a valid RGB color'));
e=qs(e.toString(16));
b=qs(b.toString(16));
d=qs(d.toString(16));
c.ds="#"+e+b+d;
c.type="rgb";
return c
}
if(Gs&&(d=Gs[b.toLowerCase()]))return c.ds=d,c.type="named",c;
f(Error(b+" is not a valid color string"))
}
,
a.wt=function(b)
{
var c=new Hs(2E3),b=La(b),d=-1==b.indexOf("T")?" ":"T",b=b.split(d);
var e=b[0].match(us);
if(e)
{
var g=Number(e[2]),h=Number(e[3]),l=Number(e[4]),d=Number(e[5]),m=Number(e[6])||1;
c.setFullYear(Number(e[1]));
l?(c.setDate(1),c.setMonth(0),c.add(new ps("d",l-1))):d?(c.setMonth(0),c.setDate(1),e=c.getDay()||7,c.add(new ps("d",(4>=e?1-e:8-e)+(Number(m)+7*(Number(d)-1))-1))):(g&&(c.setDate(1),c.setMonth(g-1)),h&&c.setDate(h));
d=j
}
else d=n;
if(d&&!(d=2>b.length))b=b[1],d=b.match(ss),m=0,d&&
("Z"!=d[0]&&(m=60*d[2]+Number(d[3]),m*="-"==d[1]?1:-1),m-=c.getTimezoneOffset(),b=b.substr(0,b.length-d[0].length)),(d=b.match(ts))?(c.setHours(Number(d[1])),c.setMinutes(Number(d[2])||0),c.setSeconds(Number(d[3])||0),c.setMilliseconds(d[4]?1E3*d[4]:0),0!=m&&c.setTime(c.getTime()+6E4*m),d=j):d=n;
return d?c:k
}
,a.xt=
{
ZJ:["公元前","公元"],YJ:["公元前","公元"],hK:"1 2 3 4 5 6 7 8 9 10 11 12".split(" "),uK:"1月 2月 3月 4月 5月 6月 7月 8月 9月 10月 11月 12月".split(" "),gK:"1月 2月 3月 4月 5月 6月 7月 8月 9月 10月 11月 12月".split(" "),
gn:"一月 二月 三月 四月 五月 六月 七月 八月 九月 十月 十一月 十二月".split(" "),rK:"1月 2月 3月 4月 5月 6月 7月 8月 9月 10月 11月 12月".split(" "),wK:"一月 二月 三月 四月 五月 六月 七月 八月 九月 十月 十一月 十二月".split(" "),IK:"星期日 星期一 星期二 星期三 星期四 星期五 星期六".split(" "),yK:"星期日 星期一 星期二 星期三 星期四 星期五 星期六".split(" "),$B:"周日 周一 周二 周三 周四 周五 周六".split(" "),xK:"周日 周一 周二 周三 周四 周五 周六".split(" "),TB:"日一二三四五六".split(""),vK:"日一二三四五六".split(""),sK:["1季","2季","3季","4季"],jK:["第1季度","第2季度","第3季度","第4季度"],PJ:["上午","下午"],QB:["y年M月d日EEEE","y年M月d日","yyyy-M-d","yy-M-d"],BK:["zzzzah时mm分ss秒",
"zah时mm分ss秒","ah:mm:ss","ah:mm"],Ju:6,Pu:[5,6],Ku:5
}
,a.yt=function(b)
{
if(b.altKey&&!b.ctrlKey||b.metaKey||112<=b.keyCode&&123>=b.keyCode)return n;
switch(b.keyCode)
{
case 18:case 20:case 93:case 17:case 40:case 35:case 27:case 36:case 45:case 37:case 224:case 91:case 144:case 12:case 34:case 33:case 19:case 255:case 44:case 39:case 145:case 16:case 38:case 224:case 92:return n;
case 0:return!B;
default:return 166>b.keyCode||183<b.keyCode
}

}
,a.zt=
{

}
,a.At=function(b)
{
var c=Tb(b),d=A&&b.currentStyle;
if(d&&
Mc(Ub(c))&&"auto"!=d.width&&"auto"!=d.height&&!d.boxSizing)return c=vg(b,d.width,"width","pixelWidth"),b=vg(b,d.height,"height","pixelHeight"),new Qb(c,b);
d=ug(b);
c=xg(b);
b=gg(b);
return new Qb(d.width-b.left-c.left-c.right-b.right,d.height-b.top-c.top-c.bottom-b.bottom)
}
,a.Bt=function(b,c)
{
var d=Ub(c),e=k;
if(A)d=e=d.wa().createStyleSheet(),A?d.cssText=b:d.innerHTML=b;
else
{
var g=Vb(d.Fa,"head",i,i)[0];
g||(e=Vb(d.Fa,"body",i,i)[0],g=d.o("head"),e.parentNode.insertBefore(g,e));
var h=e=d.o("style");
A?
h.cssText=b:h.innerHTML=b;
d.appendChild(g,e)
}

}
,a.Ct=function(b,c)
{
var d=b.style[gb(c)];
return"undefined"!==typeof d?d:b.style[Uf(b,c)]||""
}
,a.Dt=function(b,c,d)
{
return Math.min(Math.max(b,c),d)
}
,a.Et=function()
{
f(Error("unimplemented abstract method"))
}
,a.Ft=function()
{
M.call(this)
}
;
y(Ft,Rk);

Ft.prototype.v=function()
{
this.qs=I("help-index");
(new Pq).n(this.qs);
var b=window.location.href,c="";
0<b.indexOf("#")&&(c=b.substring(b.indexOf("#")),b=b.substring(0,b.indexOf("#")));
"/help"===b.substring(b.length-5)&&(b+="/faq");
var d=Wb("a",k,this.qs);
z.forEach(d,function(d)
{
(d.href===b||d.href===b+c)&&Jc(d,function(b)
{
"UL"===b.tagName&&D.add(b,"force-display");
"LI"===b.tagName&&D.add(b,"current")
}
)
}
,this);
this.g().c(this.qs,"click",this.GO)
}
;

Ft.prototype.GO=function(b)
{
if((b=sk(this.qs,b.target))&&0<b.href.indexOf("#"))
{
var c=Kc(b,"ul",k),c=Wb("li",k,c);
z.forEach(c,function(b)
{
D.remove(b,"current")
}
,this);
D.add(b.parentNode,"current")
}

}
;
a.Gt=function(b,c)
{
M.call(this);
this.Zm=j;
this.Hi=this.Wm=-1;
this.YI="";
this.sg=b||500;
this.hN=c;
this.yb=k
}
;
y(Gt,Rk);
a.Ht=Jn("PMForm"+S.Xj)||Kn("PMForm"+S.Xj);
t=Gt.prototype;
t.rh=ca("e");
t.h=q("e");
t.cy=function()
{
this.yb=new yi(k,n);
this.yb.eb("发送私信");
Ih(this.yb,k);
this.yb.w(j);
this.e=this.yb.aa()
}
;
t.focus=function()
{
this.v();
this.Nb.focus()
}
;

t.v=function()
{
this.CP||(this.CP=j,this.Zm&&(this.yb||this.cy(),this.e.innerHTML='<div class="zm-pm-wrap"><dl class="zm-form-table zm-form-table-medium"><dt class="zm-form-table-head zm-form-table-head-align-middle"><label class="zg-medium-gray">发给：</label></dt><dd class="zm-form-table-field"><div class="zm-pm-selector-wrap"><div class="zg-user-name" style="display:none;
padding:4px 0 0 0"></div><input class="zg-form-text-input zm-pm-user-selector" type="text" /></div></dd><dt class="zm-form-table-head zm-form-table-head-align-middle"><label class="zg-medium-gray">内容：</label></dt><dd class="zm-form-table-field zm-form-table-field-last"><div class="zg-editor-simple-wrap zg-form-text-input"><textarea class="zg-editor-input" style="font-weight:normal"></textarea></div></dd></dl><div class="zh-pm-warnmsg" style="display:none;
text-align:right;
color:#C3412F;
"></div><div class="zm-command zg-clear"><div class="zm-item-meta zg-left" style="margin: 0 0 0 57px;
"><span class="zg-text-counter" style="display:none">还可以输入 500 字</span><span class="additional-info" ></span></div><a name="cancel" href="javascript:;
" class="zm-command-cancel">取消</a><a name="send" href="javascript:;
" class="zg-btn-blue zg-r3px" id="zh-question-pm-send-button">发送</a></div></div>'),this.Qf=
J("zg-user-name",this.e),this.Nb=J("zg-editor-input",this.e),this.yc=J("zm-pm-user-selector",this.e),this.aj=J("zm-command",this.e),this.vZ=J("zg-text-counter",this.e),this.Vo=J("zh-pm-warnmsg",this.e),this.AW=$(".additional-info",$(this.e)),this.zH=new Po(this.Nb),this.g().c(this.aj,"click",this.ga).c(this.Qf,"click",this.ga).c(this.Nb,"keydown",this.JO),this.yc&&((new gp("搜索用户")).n(this.yc),this.g().c(this.yc,"blur",this.iM),this.L=new go("/people/autocomplete",this.yc,k,k,J("zm-pm-wrap",this.e),
j),this.L.Jf(j),this.g().c(this.L,"select",this.jp)),this.ww(),this.Iy())
}
;
t.JO=function(b)
{
if(13===b.keyCode&&(b.ctrlKey||b.metaKey))It(this),b.preventDefault()
}
;
t.iM=function()
{
this.WC&&clearTimeout(this.WC);
this.WC=setTimeout(v(this.jM,this),200)
}
;
t.jM=function()
{
var b=jk(this.yc.value);
-1===this.Hi&&(b&&"搜索用户"!==b)&&Jt(this,"请输入对方姓名，从下拉菜单里选择收件人")
}
;
t.Qt=ca("zU");
t.tp=function()
{
this.Nb.value="";
this.Zm&&(this.yc.value="");
R(this.Vo,n);
this.Qf.innerHTML="搜索用户";
this.Wm=-1
}
;

t.show=function()
{
this.v();
this.Zm&&(this.yb.w(j),this.yb.na())
}
;
t.ww=function()
{
if(this.il)$(window).on("beforeunload.PMForm",v(function()
{
this.Jt()
}
,this))
}
;
t.fw=function()
{
this.il&&$(window).off("beforeunload.PMForm")
}
;
t.Jt=function()
{
this.il&&this.Nb.value&&Ht.set("content",this.Nb.value)
}
;
t.Iy=function()
{
if(this.il)
{
var b=Ht.get("content");
b&&(this.Nb.value=b)
}

}
;
t.Gv=function()
{
this.il&&Ht.remove("content")
}
;
t.jp=function()
{
var b=z.slice(this.L.kg(),1);
Kt(this,b[3],b[0],j)
}
;

a.Kt=function(b,c,d,e)
{
-1===c?(c=b.Qf,R(b.yc,j),R(c,n)):c!==S[3]&&(b.Hi=c,b.YI=d,b.Qf&&b.yc&&(b.Qf.innerHTML=b.YI+(e?mk():""),c=b.yc,R(b.Qf,j),R(c,n),b.yc.value=""))
}
,a.It=function(b)
{
if(!(b.Bd&&"pending"===b.Bd.state()))if(-1===b.Hi)Jt(b,"请填写收信人。");
else
{
var c=b.Nb.value;
La(c)?(c=-1!==b.Wm?$.post("/inbox/reply",
{
message_id:b.Wm,content:c,type:b.gB
}
):$.post("/inbox/post",
{
member_id:b.Hi,content:c,token:b.zU
}
),c.done(v(b.ES,b)),b.Bd=c):Jt(b,"请填写私信内容。")
}

}
;

t.ga=function(b)
{
if(b=(b=this.pf(b.target))&&b.name)switch(b)
{
case "edit":this.Hi=-1;
b=this.Qf;
R(this.yc,j);
R(b,n);
break;
case "cancel":this.Zm&&this.yb.w(n);
break;
case "send":It(this)
}

}
;
a.Jt=function(b,c)
{
b.Vo.innerHTML=c;
R(b.Vo,j)
}
;
t.ES=function(b)
{
zk("message","send_message");
b&&!b.r?(this.fw(),this.Gv(),this.Zm&&this.yb.w(n),this.hN?U("发送成功"):window.location.reload()):Jt(this,b.msg)
}
;
t.il=j;
a.Lt=function(b)
{
M.call(this);
this.view=this.name=k;
E.extend(this.options=
{

}
,this.Q,b||
{

}
)
}
;
y(Lt,Hd);
a.Mt=
{

}
,a.Nt=function(b,c)
{
function d(c)
{
Lt.call(this,c);
this.name=b
}
y(d,Lt);
ya(d.prototype,c);
Mt[b]=d
}
;
Lt.prototype.Q=
{

}
;
Lt.prototype.g=function()
{
return this.$g||(this.$g=new me(this))
}
;
Lt.prototype.v=ba();
Lt.prototype.p=function()
{
Lt.m.p.call(this);
this.view&&(E.remove(this.view.rd,this.name),this.view=k);
this.$g&&(this.$g.F(),this.$g=k)
}
;
a.Ot=function(b)
{
T.call(this);
E.extend(this.C=
{

}
,this.Q,b||
{

}
);
this.source=this.C.source;
this.promise=$.Deferred().resolve();
this.rd=
{

}

}
;
y(Ot,T);
t=Ot.prototype;
t.Q=
{
source:k,Oa:["autoload","shortcut"],zA:j,Bn:"zg-btn-white zu-button-more"
}
;
t.Oa=function(b,c)
{
var d,e=Mt[b];
e||f(Error("Cannot find constructor"));
d=new e(c);
d.view=this;
this.Aa?d.v(this):this.g().c(this,"initialized",function()
{
d.v(this)
}
);
this.rd[b]=d;
return this
}
;

t.bj=function()
{
!this.Wf&&this.C.zA&&(this.Wf=this.yv(),mc(this.Wf,this.e),this.g().c(this.Wf,"click",this.Jy))
}
;
t.z=function()
{
Ot.m.z.call(this);
this.bj();
z.forEach(this.Eb(),this.jr,this);
z.forEach(this.C.Oa,this.Oa,this);
this.dispatchEvent("initialized")
}
;
t.p=function()
{
E.forEach(this.rd,function(b)
{
b.F()
}
);
this.rd=k;
Ot.m.p.call(this)
}
;
a.Pt=function(b,c,d)
{
b.Aa&&z.forEach(b.Eb(),c,d);
b.g().c(b,"itemcreated",function(b)
{
c.call(d,b.item)
}
)
}
;
t.Eb=function()
{
return qc(this.e)
}
;

t.jr=function(b)
{
this.bk(b);
this.dispatchEvent(
{
type:"itemcreated",item:b
}
)
}
;
t.bk=ha;
a.Qt=function(b)
{
b.Wf&&(L(b.Wf),b.Wf=k);
b.dispatchEvent("complete")
}
;
t.mS=function(b)
{
if(b)
{
var c=b.results,d=!c||!c.length;
d||this.Y(c);
this.dispatchEvent("next");
(d||b.next===n)&&Qt(this)
}

}
;
t.Y=function(b,c)
{
var b=$.isArray(b)?b.join(""):b,d=hc(b+" ");
z.forEach(qc(d),this.jr,this);
nc(this.e,d,c)
}
;

t.Jy=function()
{
"pending"!==this.promise.state()&&(this.CI(j),this.promise=this.source().done(v(this.mS,this)).always(v(xa(this.CI,n),this)))
}
;
t.Xc=q("Wf");
t.yv=function()
{
return K("a",
{
"aria-role":"button","class":this.C.Bn
}
,"更多")
}
;
t.CI=function(b)
{
this.Wf&&(this.Wf.innerHTML=b?'<i class="spinner-gray"></i> 加载中':"更多",D.enable(this.Wf,"loading",b))
}
;
a.St=function(b,c)
{
var d=Array.prototype.slice.call(arguments),e=d.shift();
"undefined"==typeof e&&f(Error("[goog.string.format] Template required"));
return e.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g,function(b,c,e,m,p,r,x,F)
{
if("%"==r)return"%";
var H=d.shift();
"undefined"==typeof H&&f(Error("[goog.string.format] Not enough arguments"));
arguments[0]=H;
return Rt[r].apply(k,arguments)
}
)
}
,a.Rt=
{
s:function(b,c,d)
{
return isNaN(d)||""==d||b.length>=d?b:b=-1<c.indexOf("-",0)?b+ab(" ",d-b.length):
ab(" ",d-b.length)+b
}
,f:function(b,c,d,e,g)
{
e=b.toString();
isNaN(g)||""==g||(e=b.toFixed(g));
var h;
h=0>b?"-":0<=c.indexOf("+")?"+":0<=c.indexOf(" ")?" ":"";
0<=b&&(e=h+e);
if(isNaN(d)||e.length>=d)return e;
e=isNaN(g)?Math.abs(b).toString():Math.abs(b).toFixed(g);
b=d-e.length-h.length;
0<=c.indexOf("-",0)?e=h+e+ab(" ",b):(c=0<=c.indexOf("0",0)?"0":" ",e=h+ab(c,b)+e);
return e
}
,d:function(b,c,d,e,g,h,l,m)
{
return Rt.f(parseInt(b,10),c,d,e,0,h,l,m)
}

}
;
Rt.i=Rt.d;
Rt.u=Rt.d;
Nt("activeSource",
{
Q:
{
RC:"%d 条新动态",Bn:"zu-main-feed-fresh-button",a0:ha
}
,v:function(b)
{
this.data=[];
this.button=this.yv();
lc(this.button,b.h());
this.g().c(this.button,"click",function()
{
b.Y(this.data,0);
this.setData([])
}
);
var c=this,d=this.options.source(function(b)
{
b&&b.length&&c.setData(b.concat(c.data))
}
,function()
{
return c.data
}
);
(!d||!qa(d.F))&&f(Error("Source must return a disposable object."));
this.jN=d
}
,setData:function(b)
{
this.data=b;
this.VR()
}
,VR:function()
{
var b=this.data.length;
zc(this.button,
St(this.options.RC,b));
R(this.button,!!b)
}
,yv:function()
{
return K("a",
{
href:"javascript:;
",style:"display:none","class":this.options.Bn
}
)
}
,F:function()
{
Lt.prototype.F.call(this);
Vc(this.jN);
this.options=k;
this.button&&(L(this.button),this.button=k)
}

}
);
a.Tt=function()
{
M.call(this);
this.size=k;
this.hZ=xg(document.body).top;
this.ha=new me(this);
this.Wp=k;
this.bN=250;
this.vf()
}
;
y(Tt,Hd);
ia(Tt);
Tt.prototype.vf=function()
{
this.size=$b();
var b=this.Wp=new Nm(this.update,this.bN,this);
this.ha.c(window,"scroll",b.fire,n,b).c(window,"resize",b.fire,n,b)
}
;
Tt.prototype.g=q("ha");
Tt.prototype.p=function()
{
Tt.m.p.call(this);
this.ha.F();
this.ha=k;
this.Wp.F();
this.Wp=k
}
;
Tt.prototype.update=function()
{
this.size=$b();
this.dispatchEvent("update")
}
;

a.Vt=function(b,c,d)
{
var e=Ut;
e.ha.c(e,"update",function h()
{
b.getBoundingClientRect().bottom<this.size.height&&(c.call(d),this.ha.va(this,"update",h))
}
)
}
,a.Ut=Tt.D();
$(function()
{
Ut.update()
}
);
Nt("autoload",
{
Q:
{
pU:function(b)
{
return 0!==b%3
}

}
,v:function(b)
{
if(b.Xc())
{
var c=this,d=Ut;
c.g().c(d,"update",function(d)
{
var e;
e=ua(c);
var l=td[e];
if(l)
{
var m=la("abouttosee"),p=la(i);
m&&p?(l=sd.abouttosee,e=!!l&&!!l[i]&&e in l[i]):e=!m&&!p?j:z.some(l,function(b)
{
return m&&"abouttosee"==b.type||p&&b.capture==i
}
)
}
else e=n;
e&&(rg(b.Xc())&&400>=b.Xc().getBoundingClientRect().top-d.target.size.height)&&c.dispatchEvent("abouttosee")
}
);
var e=0;
this.g().c(b,"complete",this.F).c(b,"next",function()
{
e+=1;

this.options.pU(e)&&this.enable()
}
);
this.enable()
}

}
,enable:function()
{
P(this.g(),this,"abouttosee",function()
{
this.view.Jy()
}
)
}

}
);
Nt("childConstructor",
{
Q:
{
Sg:k
}
,v:function(b)
{
qa(this.options.Sg)&&Pt(b,this.FM,this)
}
,FM:function(b)
{
var c=new this.options.Sg;
this.view.H(c);
c.n(b)
}

}
);
Nt("locationSource",
{
Q:
{
Fy:20,param:k,jt:n,offset:function(b)
{
return b.length
}

}
,v:function(b)
{
function c(b)
{
return
{
start:e.jt?z.Cf(b).id.split("-")[1]:0,offset:e.offset(b)
}

}
var d=location.href,e=this.options,g=b.Eb().length;
(!g||g<e.Fy)&&Qt(b);
b.source=function()
{
return $.post(d,(e.param||c)(b.Eb())).then(function(c)
{
if(!c.r)
{
var c=c.msg,d=c[0];
pa(d)&&d<e.Fy&&Qt(b);
return
{
results:c[1]
}

}

}
)
}

}

}
);
Nt("nodeSource",
{
v:function(b)
{
var c=$(b.h()).data("init"),d="/node/"+c.nodename,e=c.params,g=e.offset||0;
(c=e.limit)&&b.Eb().length<c&&Qt(b);
b.source=function()
{
return $.post(d,
{
method:"next",params:$.extend(e,
{
offset:g+b.Eb().length
}
)
}
).then(function(b)
{
return!b.r&&
{
results:b.msg
}

}
)
}

}

}
);
Nt("shortcut",
{
Q:
{
items:">div"
}
,v:function(b)
{
b.Eb().length&&(this.Xo=new hl(this.options),this.Xo.n(b.h()),this.g().c(this.Xo,"action",function(c)
{
c.data.index>=c.data.size&&b.Xc()&&rg(b.Xc())&&b.Xc().click()
}
))
}
,F:function()
{
Lt.prototype.F.call(this);
this.Xo&&(this.Xo.F(),this.Xo=k)
}

}
);
a.Wt=function(b)
{
Ot.call(this,b)
}
;
y(Wt,Ot);
a.Xt=function()
{
this.hd=k
}
;
ia(Xt);
a.Yt=
{
"0":"其他",501:"不构成问题",502:"广告等垃圾信息",503:"违法违规内容",504:"不宜公开讨论的政治内容",505:"不友善内容",506:"个人信息不合规范",507:"发布不友善内容",508:"发布广告等垃圾信息"
}
,a.Zt=
{
question:
{
title:"为什么举报这个问题？",qb:[]
}
,comment:
{
title:"为什么举报这个评论？",qb:[505,502,503,504,0]
}
,answer:
{
title:"为什么举报这个回答？",qb:[505,502,503,504,0]
}
,favlist:
{
title:"为什么举报这个收藏？",qb:[505,503,0]
}
,member:
{
title:"为什么举报这个用户？",qb:[506,507,508,0]
}
,message:
{
title:"为什么举报这个私信？",qb:[505,502,0]
}

}
;
t=Xt.prototype;
t.className="report-form-dialog";

t.WN=Ur(function(b)
{
var c=Zt[b];
return c.qb.length?$.Deferred().resolve(c):$.getJSON("/report/reason",
{
type:b
}
).then(function(b)
{
c.qb=b;
return c
}
)
}
);
t.mO=function(b)
{
if("ok"===b.key)return this.submit()
}
;

t.Dm=function(b,c,d)
{
var e=this;
this.WN(b).done(function(g)
{
var h=new yi;
Ch(h,j);
h.jw=j;
Ih(h,Kh);
h.addEventListener(Jh,e.mO,n,e);
e.hd=h;
h.eb(g.title);
h.Na("<form>"+("question"===b?$t(g.qb):au(g.qb))+'<p class="input-container"><input placeholder="请填写举报或申诉原因" type="text" name="detail" class="reason-text hidden zg-form-text-input"></p><p class="error-container"></p><p class="footnote">'+(d||"")+"</p></form>");
h.w(j);
e.uN=
{
type:b,id:c
}
;
e.rv(b);
D.add(h.h(),Xt.prototype.className);
h.na();
h.Ei(450);
Y.U(
{
type:"ga_click_report_box",
data:
{
type:b
}

}
)
}
)
}
;
t.submit=function()
{
var b=this.hd,c=this.uN,d=$("form",b.h()),e=d.valid();
e&&($.post("/report",d.serialize()+"&"+$.param(c)).done(function(c)
{
b.w(n);
c.r?U(c.msg):U("您的举报我们已经收到，处理完成后会私信告知处理结果。",2E3)
}
),Y.U(
{
type:"ga_click_report",data:
{
type:c.type
}

}
));
return e
}
;

t.rv=function(b)
{
var c=$(this.hd.aa()),d=$("form",c),e=$(".reason-text",c);
c.on("change",":radio",function(b)
{
c.find("li").removeClass("checked");
$(b.target).parents("li").addClass("checked");
b="0"===this.value;
e.toggle(b);
b&&e.placeholder()
}
);
"question"===b&&e.appendTo(c.find("li").has('input[value="0"]'));
d.validate(
{
rules:
{
reason:"required",detail:
{
rangelength:[2,100],required:function()
{
return!!$("input[name=reason]:checked",c).length
}

}

}
,messages:
{
reason:"请选择举报理由",detail:"举报理由为 2-100 字"
}
,errorLabelContainer:$(".error-container",
d)
}
)
}
;

a.au=function(b)
{
var c=['<ul class="options clearfix">'];
z.forEach(b,function(b)
{
c.push('<li><label><input value="'+b+'" name="reason" type="radio"> '+Yt[b]+"</label></li>")
}
);
c.push("</ul>");
return c.join("")
}
,a.$t=function(b)
{
var c=['<div><a href="http://www.zhihu.com/question/19806261" class="zg-right zg-link-gray">知乎提问规范</a>请选择举报原因</div>','<ul class="question-options clearfix">'];
z.forEach(b,function(b)
{
b.nodes?(c.push('<li><label><input name="reason" value="'+b.id+'" type="radio"> '+b.text+'</label><ul class="sub-list">'),
z.forEach(b.nodes,function(e)
{
c.push('<li><label><input required data-msg-required="请选择举报理由" name="reason-'+b.id+'" value="'+e.id+'" type="radio"> '+e.text+"</label>");
e.note&&c.push('<div class="note">'+e.note+"</div>");
c.push("</li>")
}
),c.push("</ul></li>")):(c.push('<li><label><input value="'+b.id+'" name="reason" type="radio"> '+b.text+"</label>"),b.note&&c.push('<div class="note">'+b.note+"</div>"),c.push("</li>"))
}
);
c.push("</ul>");
return c.join("")
}
,a.bu=Xt.D();
a.cu=function()
{
M.call(this);
this.Re="zm-pm-item"
}
;
y(cu,Rk);
cu.prototype.v=function()
{
var b=I("zh-create-pm");
b&&this.g().c(b,"click",this.TR);
var b=I("zh-pm-item-wrap"),c=new Wt;
c.Oa("locationSource",
{
param:function(b)
{
return
{
start:b[b.length-1].getAttribute("data-token")
}

}

}
);
c.n(b);
this.g().c(b,"click",this.ga);
$(function()
{
$("#zh-change-pm-admin").change(function()
{
var b=$(this).find("option:selected").attr("data-token");
location.href="self"===b?"/admin_feedback":"/admin_feedback/"+b
}
)
}
)
}
;

cu.prototype.TR=function()
{
var b;
this.Lj();
this.Rb.show();
Kt(this.Rb,-1);
(b=Wa(location.pathname,"admin_inbox")?"admin":$("#zh-change-pm-admin option:selected").attr("data-token"))&&this.Rb.Qt(b)
}
;
cu.prototype.Lj=function()
{
this.Rb||(this.Rb=new Gt)
}
;

cu.prototype.ga=function(b)
{
if(b=sk(this.I_,b.target))
{
var c=b.name,d=Kc(b,k,this.Re);
if(!d||!b.name)return j;
var b=$(d).data(),e=b.member,g=b.name;
switch(c)
{
case "reply":d.getAttribute("data-adminmessagetoken");
this.Lj();
this.Rb.show();
c=this.Rb;
d=b.type;
c.Wm=b.token;
c.gB=d;
Kt(this.Rb,e,g,n);
this.Rb.Nb.focus();
break;
case "delete":var h=d.getAttribute("data-token");
Ci("删除私信会话","你确定要删除与 "+g+"的所有会话吗？",function(b)
{
if(b)
{
var c=new V(j);
c.on("success",function()
{
var b=Ie(c);
b.r?U(b.msg):window.location.reload()
}
);

c.ajax("/inbox/delete","type=thread&token="+h)
}

}
,this);
break;
case "edit":b=this.Qf,R(this.yc,j),R(b,n),this.Hi=-1
}

}

}
;
a.du=function()
{
M.call(this);
this.Re="zm-pm-item"
}
;
y(du,Rk);

du.prototype.v=function()
{
this.Os=I("zh-pm-detail-item-wrap");
this.g().c(this.Os,"click",this.ga);
var b=I("zh-pm-editor-form");
if(b)
{
this.Rb=new Gt;
this.Rb.Zm=n;
this.Rb.rh(b);
this.Rb.show();
if(b=this.Eb()[0])
{
var b=$(b).data(),c=this.Rb,d=b.type;
c.Wm=b.token;
c.gB=d;
Kt(this.Rb,b.member,b.name)
}
else b=Hg,Kt(this.Rb,b.id,b.Uw);
this.Rb.focus()
}
else this.Rb=new Gt;
this.Eb().length&&(b=new Wt,b.Oa("locationSource",
{
param:function(b)
{
return
{
start:b[b.length-1].getAttribute("data-token")
}

}

}
),b.n(this.Os))
}
;

du.prototype.Eb=function()
{
return qc(this.Os)
}
;

du.prototype.ga=function(b)
{
var c=sk(this.Os,b.target);
if(c&&(b=c.name,c=Kc(c,k,this.Re)))
{
var c=$(c).data(),d=c.token;
switch(b)
{
case "reply":this.Rb.show();
var b=this.Rb,e=c.type;
b.Wm=d;
b.gB=e;
Kt(this.Rb,c.member,c.name,n);
this.Rb.focus();
break;
case "delete":Ci("删除私信","你确定要删除这封私信吗？",function(b)
{
if(b)
{
var c=new V(j);
P(this.g(),c,"success",function()
{
var b=Ie(c);
b.r?U(b.msg):window.location.reload()
}
);
c.ajax("/inbox/delete","type=single&token="+d)
}

}
,this);
break;
case "report":bu.Dm("message",d,"被举报私信将会被管理员查阅")
}

}

}
;
a.eu=function()
{

}
;
y(eu,ho);
ia(eu);
eu.prototype.N=s("goog-menuheader");
a.fu=function(b,c,d)
{
ro.call(this,b,d||eu.D(),c);
uo(this,1,n);
uo(this,2,n);
uo(this,4,n);
uo(this,32,n);
this.ca=1
}
;
y(fu,ro);
po("goog-menuheader",function()
{
return new fu(k)
}
);
a.gu=function()
{
this.Ev=[]
}
;
y(gu,ho);
ia(gu);
a.hu=function(b,c)
{
var d=b.Ev[c];
if(!d)
{
switch(c)
{
case 0:d=b.N()+"-highlight";
break;
case 1:d=b.N()+"-checkbox";
break;
case 2:d=b.N()+"-content"
}
b.Ev[c]=d
}
return d
}
;
t=gu.prototype;
t.vc=function()
{
return Xc.dK
}
;
t.o=function(b)
{
var c=b.J().o("div",this.rf(b).join(" "),iu(this,b.hb(),b.J()));
ju(this,b,c,!!(b.Tb&8)||!!(b.Tb&16));
ko(this,b,c);
return c
}
;
t.aa=function(b)
{
return b&&b.firstChild
}
;

t.n=function(b,c)
{
var d=sc(c),e=hu(this,2);
d&&D.has(d,e)||c.appendChild(iu(this,c.childNodes,b.J()));
D.has(c,"goog-option")&&(b.Bp(j),this.Bp(b,c,j));
return gu.m.n.call(this,b,c)
}
;
t.Na=function(b,c)
{
var d=this.aa(b),e=ku(this,b)?d.firstChild:k;
gu.m.Na.call(this,b,c);
e&&!ku(this,b)&&d.insertBefore(e,d.firstChild||k)
}
;
a.iu=function(b,c,d)
{
b=hu(b,2);
return d.o("div",b,c)
}
;
t.Di=function(b,c,d)
{
c&&(Oc(c,d?Xc.fK:this.vc()),ju(this,b,c,d))
}
;
t.Bp=function(b,c,d)
{
c&&(Oc(c,d?Xc.eK:this.vc()),ju(this,b,c,d))
}
;

a.ku=function(b,c)
{
var d=b.aa(c);
if(d)
{
var d=d.firstChild,e=hu(b,1);
return!!d&&D.has(d,e)
}
return n
}
,a.ju=function(b,c,d,e)
{
e!=ku(b,d)&&(D.enable(d,"goog-option",e),d=b.aa(d),e?(b=hu(b,1),d.insertBefore(c.J().o("div",b),d.firstChild||k)):d.removeChild(d.firstChild))
}
;
t.eo=function(b)
{
switch(b)
{
case 2:return hu(this,0);
case 16:case 8:return"goog-option-selected";
default:return gu.m.eo.call(this,b)
}

}
;

t.jx=function(b)
{
var c=hu(this,0);
switch(b)
{
case "goog-option-selected":return 16;
case c:return 2;
default:return gu.m.jx.call(this,b)
}

}
;
t.N=s("goog-menuitem");
a.lu=function(b,c,d,e)
{
ro.call(this,b,e||gu.D(),d);
this.ta(c)
}
;
y(lu,ro);
t=lu.prototype;
t.W=function()
{
var b=this.Zy;
return b!=k?b:this.Xg()
}
;
t.ta=ca("Zy");
t.Di=function(b)
{
uo(this,8,b);
this.de()&&!b&&this.Rc(n);
var c=this.h();
c&&this.M.Di(this,c,b)
}
;
t.Bp=function(b)
{
uo(this,16,b);
var c=this.h();
c&&this.M.Bp(this,c,b)
}
;

t.Xg=function()
{
var b=this.hb();
return ma(b)?(b=z.map(b,function(b)
{
var d=D.get(b);
return z.contains(d,"goog-menuitem-accel")||z.contains(d,"goog-menuitem-mnemonic-separator")?"":Ic(b)
}
).join(""),Ka(b)):lu.m.Xg.call(this)
}
;
t.mg=function(b)
{
var c=this.getParent();
if(c)
{
var d=c.oH;
c.oH=k;
if(c=d&&pa(b.clientX))c=new Ob(b.clientX,b.clientY),c=d==c?j:!d||!c?n:d.x==c.x&&d.y==c.y;
if(c)return
}
lu.m.mg.call(this,b)
}
;
t.tf=function(b)
{
return b.keyCode==this.Xy&&this.ke(b)?j:lu.m.tf.call(this,b)
}
;
t.UN=q("Xy");

po("goog-menuitem",function()
{
return new lu(k)
}
);
a.mu=function()
{

}
;
y(mu,So);
ia(mu);
t=mu.prototype;
t.vc=function()
{
return Xc.cK
}
;
t.Vc=function(b)
{
return"UL"==b.tagName||mu.m.Vc.call(this,b)
}
;
t.fo=function(b)
{
return"HR"==b.tagName?new Ro:mu.m.fo.call(this,b)
}
;
t.Xf=function(b,c)
{
return uc(b.h(),c)
}
;
t.N=s("goog-menu");
t.Oe=function(b)
{
mu.m.Oe.call(this,b);
Pc(b.h(),Wc.Vk,"true")
}
;
a.nu=function(b)
{
Ro.call(this,Qo.D(),b)
}
;
y(nu,Ro);
po("goog-menuseparator",function()
{
return new Ro
}
);
a.ou=function(b,c)
{
Us.call(this,Vo,c||mu.D(),b);
this.Ye(n)
}
;
y(ou,Us);
t=ou.prototype;
t.ln=j;
t.pL=n;
t.N=function()
{
return this.M.N()
}
;
t.Xf=function(b)
{
if(this.M.Xf(this,b))return j;
for(var c=0,d=ph(this);
c<d;
c++)
{
var e=qh(this,c);
if("function"==typeof e.Xf&&e.Xf(b))return j
}
return n
}
;
t.Ea=function(b)
{
this.H(b,j)
}
;
t.Si=function(b,c)
{
this.Xk(b,c,j)
}
;
t.removeItem=function(b)
{
(b=this.removeChild(b,j))&&b.F()
}
;
t.ei=function(b)
{
return qh(this,b)
}
;
t.Ml=function()
{
return ph(this)
}
;

t.Eb=function()
{
var b=[];
oh(this,function(c)
{
b.push(c)
}
);
return b
}
;
t.dd=function(b,c)
{
var d=this.R();
d||R(this.h(),j);
lg(this.h(),b,c);
d||R(this.h(),n)
}
;
t.w=function(b,c,d)
{
(c=ou.m.w.call(this,b,c))&&(b&&this.Aa&&this.ln)&&this.kc().focus();
this.oH=b&&d&&pa(d.clientX)?new Ob(d.clientX,d.clientY):k;
return c
}
;
t.xx=function(b)
{
this.ln&&this.kc().focus();
return ou.m.xx.call(this,b)
}
;
t.TC=function(b)
{
return(this.pL||b.isEnabled())&&b.R()&&!!(b.Tb&2)
}
;

t.Z=function(b)
{
var c=this.M,d;
d=this.J();
d=Vb(d.Fa,"div",c.N()+"-content",b);
for(var e=d.length,g=0;
g<e;
g++)To(c,this,d[g]);
ou.m.Z.call(this,b)
}
;
t.tf=function(b)
{
var c=ou.m.tf.call(this,b);
c||oh(this,function(d)
{
!c&&(d.UN&&d.Xy==b.keyCode)&&(this.isEnabled()&&this.td(d),c=d.Zb(b))
}
,this);
return c
}
;
t.Sb=function(b)
{
ou.m.Sb.call(this,b);
(b=qh(this,b))&&hg(b.h(),this.h())
}
;
a.pu=function(b,c,d)
{
T.call(this);
this.offset=this.Fi=0;
this.MU=d;
this.pN=b;
this.url=c||window.location.href;
this.fh="zm-item";
this.qd=
{

}

}
;
y(pu,T);
t=pu.prototype;
t.qu=!ub;
t.nu=!ub;
t.Hf=ca("fh");
t.v=function()
{
this.ac=I("zh-load-more");
this.n(this.pN)
}
;

t.z=function()
{
pu.m.z.call(this);
this.qn=1;
qu(this);
this.Tk=$(this.ac);
this.ac&&ru(this)&&(this.g().c(this.ac,"click",function()
{
this.Eo=j;
this.Fh&&"pending"===this.Fh.state()&&1===this.qn?(this.Fh.done(v(this.zf,this)),this.BA=j,su(this,j)):this.rz()
}
),this.qu&&(this.hB=new Nm(this.oz,100,this),this.g().c(window,"scroll",function()
{
this.hB.fire()
}
)));
tu(this,this.Eb())
}
;
a.su=function(b,c)
{
c?b.Tk.html('<i class="spinner-gray"></i>正在加载').prop("disabled",j):b.Tk.html("更多").prop("disabled",n)
}
;

t.oz=function()
{
var b=this.ac;
if(b&&rg(b)&&1E3>=b.getBoundingClientRect().top-$b().height&&!(this.pt||this.Fh&&"pending"===this.Fh.state()))this.nu&&(3===this.qn?(this.qn=1,this.BA=n):(this.Eo=n,this.qn++,this.BA=j)),uu(this)
}
;
t.rz=function()
{
this.qu&&this.pt?(this.zf(this.pt),this.pt=k):(su(this,j),uu(this))
}
;

a.ru=function(b)
{
var c=b.Eb();
b.offset=b.ct?b.ct(c):c.length;
if(b.cs)return c=b.cs(),R(b.ac,c),c;
if(b.ac)
{
if("-1"===b.Tk.attr("data-next")||!c||10>c.length)return b.Tk.hide(),n;
b.Tk.removeClass("hidden").show()
}
return j
}
,a.uu=function(b,c,d)
{
d=d||ha;
if(!(b.Fh&&"pending"===b.Fh.state()))
{
var e=b.DH($.extend(b.qd,
{
offset:b.offset,start:b.Fi
}
));
b.Fh=$.post(b.url,e).done(d).done($.proxy(function(b)
{
this.qu&&!c?this.BA?this.zf(b):(this.pt=b,su(this,n)):this.zf(b)
}
,b));
1!==b.qn&&su(b,j);
return b.Fh
}

}
;

t.DH=aa();
t.zf=function(b)
{
if(b&&!b.r)
{
var c=b.msg,d=c[0],e=c[1],g;
2<c.length&&(g=c[2],this.ac.setAttribute("data-next",g));
0<d&&(this.lv(e),this.offset=this.ct?this.ct(this.Eb()):this.offset+d);
c=j;
c=this.cs?this.cs(b):!(-1===g||10>d);
R(this.ac,c);
su(this,n);
vu(this)
}

}
;
a.vu=function(b)
{
b.dispatchEvent(
{
data:
{
Eo:b.Eo,nu:b.nu
}
,type:"afterload"
}
)
}
;
t.Eb=function()
{
return Xb(this.fh,this.e)
}
;
t.xH=function(b)
{
return b.id.split("-")[1]
}
;

a.qu=function(b)
{
var c=b.Eb(),d;
if(b.MU)if(b.ac&&(d=b.ac.getAttribute("data-next")),d)b.Fi=d;
else if(c=z.Cf(c))b.Fi=b.xH(c)
}
;
t.lv=function(b)
{
var b=ma(b)?b.join(""):b,b=hc(b+" "),c=Xb(this.fh,b);
tu(this,c);
this.e.appendChild(b);
qu(this)
}
;
a.tu=function(b,c)
{
z.forEach(c,function(b)
{
var c=this.bk(b);
this.dispatchEvent(
{
data:
{
item:b,MQ:c
}
,type:"itemcreated"
}
)
}
,b)
}
;
t.bk=ha;
a.wu=function(b)
{
M.call(this);
this.e=b;
b=A||C&&!Gb("531")&&"TEXTAREA"==b.tagName;
this.P=new me(this);
this.P.c(this.e,b?["keydown","paste","cut","drop","input"]:"input",this)
}
;
y(wu,Hd);
wu.prototype.qa=k;

wu.prototype.handleEvent=function(b)
{
if("input"==b.type)xu(this),(!tb||this.e==Tb(this.e).activeElement)&&this.dispatchEvent(yu(b));
else if("keydown"!=b.type||yt(b))
{
var c="keydown"==b.type?this.e.value:k;
A&&229==b.keyCode&&(c=k);
var d=yu(b);
xu(this);
this.qa=Ld(function()
{
this.qa=k;
this.e.value!=c&&this.dispatchEvent(d)
}
,0,this)
}

}
;
a.xu=function(b)
{
b.qa!=k&&(Id.clearTimeout(b.qa),b.qa=k)
}
,a.yu=function(b)
{
b=new md(b.Yb);
b.type="input";
return b
}
;

wu.prototype.p=function()
{
wu.m.p.call(this);
this.P.F();
xu(this);
delete this.e
}
;
a.Au=function(b,c,d,e)
{
M.call(this);
this.Td=b;
this.Wh=c;
this.sg=d;
this.PD=e||zu;
this.Nj=new wu(b);
N(this.Nj,"input",this.ap,n,this);
this.$i()
}
;
y(Au,Hd);
a.zu=0;
t=Au.prototype;
t.ap=function()
{
this.$i()
}
;
t.$i=function()
{
var b=this.Rr();
this.Wh&&(0>this.sg-b?(zc(this.Wh,"已超出 "+(b-this.sg)+" 字"),D.add(this.Wh,"zg-text-error")):(zc(this.Wh,"还可以输入 "+(this.sg-b)+" 字"),D.remove(this.Wh,"zg-text-error")))
}
;
t.p=function()
{
Au.m.p.call(this);
delete this.Td;
this.Nj.F();
this.Nj=k
}
;

t.isValid=function()
{
return 0<=this.sg-this.Td.value.length
}
;
t.Rr=function()
{
return this.Td.value.length
}
;
a.Bu=function(b,c,d,e)
{
Au.call(this,b,c,d,e)
}
;
y(Bu,Au);
Bu.prototype.Rr=function()
{
return xk(this.Td.value)
}
;
a.Cu=function()
{
M.call(this);
this.T=k;
this.JI=n;
this.Og=
{

}

}
;
y(Cu,Rk);
ia(Cu);
t=Cu.prototype;
t.v=function()
{
this.ji||(this.g().c(Ki,"question_title_change",function()
{
this.Og[this.Ch]=k;
this.tp()
}
),this.ji=j,this.o(),this.Da(),this.Bf())
}
;
t.show=function()
{
this.v();
this.tp();
this.zc&&(this.zc.checked=n,this.Bf());
this.xc&&(this.xc.checked=n,this.Bf());
Mo.D().refresh();
this.T.w(j)
}
;
t.hide=function()
{
this.T.w(n)
}
;
t.wk=function(b,c,d,e)
{
this.th=
{
title:b,type:c,NV:d,qd:e
}
;
this.Ch=c.type+":"+d
}
;

t.tp=function()
{
this.T.eb(this.th.title);
this.Og[this.Ch]||(this.xhr=new V(j),P(this.g(),this.xhr,"success",this.HU),this.xhr.ajax("/"+this.th.type+"/"+this.th.NV+"/sharetext","","GET"));
I("zh-webshare-sina-pm").value=this.Og[this.Ch]&&this.Og[this.Ch].sina||"加载中...";
this.HI.$i();
No(this.MA);
this.MA.cq();
I("zh-webshare-mail-content").value=this.Og[this.Ch]&&this.Og[this.Ch].mail||"加载中...";
No(this.YD);
this.YD.cq();
var b=this.Ok;
b.v();
b.tp();
b.Nb.value=this.Og[this.Ch]&&this.Og[this.Ch].pm||"加载中...";

b.fM&&b.fM.$i();
No(b.zH);
b.zH.cq();
R(b.yc,j);
R(b.Qf,n)
}
;
t.HU=function()
{
var b=Ie(this.xhr);
b&&b.r?U(b.msg):(this.Og[this.Ch]=b,this.tp())
}
;
t.o=function()
{
var b=I("zh-webshare-dialog");
b?(this.e=b,this.T=new yi(k,n),Ih(this.T,k),this.T.aa().appendChild(this.e),this.Ok=new Gt,this.Ok.yb=this.T,this.Ok.rh(I("tb-webshare-letter-content")),this.Ok.il=n,this.Ok.v()):yk("module WebshareDialog does not exist!")
}
;
t.tA=function()
{
this.zc.checked=j;
this.Bf()
}
;
t.sA=function()
{
this.xc.checked=j;
this.Bf()
}
;

a.Du=function(b,c)
{
var d=I(c+"-content"),e=I(c);
z.forEach(b.tV,function(b)
{
D.remove(b,"zm-common-nav-bar-current-light")
}
);
z.forEach(b.sV,function(b)
{
R(b,n)
}
);
D.add(e,"zm-common-nav-bar-current-light");
R(d,j);
b.dU||(b.T.na(),b.dU=j)
}
;

t.Da=function()
{
var b=J("zm-common-nav-bar",this.e);
this.g().c(b,"click",this.IS);
this.tV=Xb("zm-common-nav-bar-link",this.e);
this.sV=Xb("zm-tab-content",this.e);
this.Jv=Xb("zm-command",this.e);
this.g().c(this.Jv[0],"click",this.ga);
this.g().c(this.Jv[1],"click",this.ga);
this.g().c(this.Jv[2],"click",this.ga);
this.mp=I("zh-webshare-sina-pm");
this.MA=new Po(this.mp);
this.HI=new Bu(this.mp,I("zg-webshare-sina-counter"),140,zu);
this.rw=I("zh-webshare-mail-reciiver");
this.qw=I("zh-webshare-mail-content");

this.YD=new Po(this.qw);
this.g().c(Y,"sina_callback",function(b)
{
this.tA(b.mb.id,b.mb.name)
}
).c(Y,"qq_callback",function(b)
{
this.sA(b.mb.id,b.mb.name)
}
);
this.pv();
this.g().c(J("zg-btn-blue",this.Ok.h()),"click",this.ga)
}
;
t.pv=function()
{
this.zc=J("sina-checkbox",this.e);
this.g().c(this.zc,"change",this.kp);
this.xc=J("qq-checkbox",this.e);
this.g().c(this.xc,"change",this.kp)
}
;

t.Bf=function()
{
var b=J("weibo-share-button",this.e),c=this.zc.checked||this.xc.checked;
D.enable(b,"zg-btn-blue",c);
D.enable(b,"zg-btn-disabled",!c)
}
;
t.kp=function(b)
{
var b=b.target,c=b.getAttribute("data-bindurl");
b===this.zc&&!Sg.id||b===this.xc&&!Tg.id?(window.open(c),b.checked=n):this.Bf()
}
;
t.IS=function(b)
{
(b=this.pf(b.target))&&Du(this,b.id)
}
;

t.ga=function(b)
{
var c=this.pf(b.target);
if(c&&c.name)switch(c.name)
{
case "cancel":this.hide();
break;
case "send_sina":if(!D.has(c,"zg-btn-disabled")&&this.mp.value&&Eu(this.mp.value))
{
c=new tk(j);
c.add("content",this.mp.value);
var d=[];
this.zc.checked&&d.push("sina");
this.xc.checked&&d.push("qq");
c.add("via",d.join(","));
this.fk(c);
this.th&&Y.U(
{
type:"ga_click_share_"+this.th.type+"_weibo",data:
{
xJ:d
}

}
)
}
break;
case "send_mail":this.rw.value&&Eu(this.qw.value)&&(c=new tk(j),c.add("via","email"),c.add("email",
this.rw.value),c.add("title",""),c.add("content",this.qw.value),this.fk(c));
break;
case "send":if(c=this.Ok,"-1"===String(c.Hi))Jt(c,"请填写收信人。");
else if(d=c.Nb.value,Eu(d))if(La(d))
{
var e=new tk(j);
e.add("talker_id",c.Hi);
e.add("content",d);
e.add("via","pm");
this.fk(e);
this.th&&Y.U("ga_click_share_"+this.th.type+"_message")
}
else Jt(c,"请填写私信内容。")
}
b.stopPropagation();
b.preventDefault()
}
;
a.Eu=function(b)
{
return 0!==b.indexOf("加载中")
}
;

t.fk=function(b)
{
E.forEach(this.th.qd,function(c,d)
{
b.add(d,c)
}
);
this.xhr=new V(j);
P(this.g(),this.xhr,"complete",this.cv);
this.xhr.ajax("/"+this.th.type+"/share",b.Kc())
}
;
t.cv=function()
{
var b=Ie(this.xhr);
b&&b.r?U(b.msg):(this.T.w(n),U("分享发送完毕"),this.rw.value="")
}
;
t.R=function()
{
return this.T.R()
}
;
a.Fu=void 0,a.Gu=[],a.Hu=[].slice,a.Iu=Hk(550,function()
{
if(Gu.length)
{
var b=
{
items:JSON.stringify(Gu)
}
;
$.post("/lastread/touch",b);
Gu=[]
}

}
);
Fu=function()
{
Gu.push(Hu.call(arguments));
Iu()
}
;
a.Ju=function(b,c,d,e)
{
ct.call(this,b,c,d||e);
if(d||e)this.Nm(65|(e?32:132))
}
;
y(Ju,ct);
a.Ku=function()
{

}
;
y(Ku,no);
ia(Ku);
t=Ku.prototype;
t.o=function(b)
{
var c=
{
"class":"goog-inline-block "+this.rf(b).join(" "),title:b.lg()||""
}
,c=b.J().o("div",c,this.bj(b.hb(),b.J()));
ko(this,b,c);
return c
}
;
t.vc=function()
{
return Xc.uq
}
;
t.aa=function(b)
{
return b&&b.firstChild.firstChild
}
;
t.bj=function(b,c)
{
return c.o("div","goog-inline-block "+(this.N()+"-outer-box"),c.o("div","goog-inline-block "+(this.N()+"-inner-box"),b))
}
;
t.Vc=function(b)
{
return"DIV"==b.tagName
}
;

t.n=function(b,c)
{
Lu(c,j);
Lu(c,n);
var d;
a:
{
d=b.J().zE(c);
var e=this.N()+"-outer-box";
if(d&&D.has(d,e)&&(d=b.J().zE(d),e=this.N()+"-inner-box",d&&D.has(d,e)))
{
d=j;
break a
}
d=n
}
d||c.appendChild(this.bj(c.childNodes,b.J()));
D.add(c,"goog-inline-block",this.N());
return Ku.m.n.call(this,b,c)
}
;
t.N=s("goog-custom-button");

a.Lu=function(b,c)
{
if(b)for(var d=c?b.firstChild:b.lastChild,e;
d&&d.parentNode==b;
)
{
e=c?d.nextSibling:d.previousSibling;
if(3==d.nodeType)
{
var g=d.nodeValue;
if(""==La(g))b.removeChild(d);
else
{
d.nodeValue=c?g.replace(/^[\s\xa0]+/,""):Na(g);
break
}

}
else break;
d=e
}

}
;
a.Mu=function()
{

}
;
y(Mu,Ku);
ia(Mu);
B&&(Mu.prototype.Na=function(b,c)
{
var d=Mu.m.aa.call(this,b&&b.firstChild);
d&&oc(this.createCaption(c,Ub(b)),d)
}
);
t=Mu.prototype;
t.aa=function(b)
{
b=Mu.m.aa.call(this,b&&b.firstChild);
B&&(b&&b.__goog_wrapper_div)&&(b=b.firstChild);
return b
}
;
t.n=function(b,c)
{
var d=Wb("*","goog-menu",c)[0];
if(d)
{
R(d,n);
Tb(d).body.appendChild(d);
var e=new ou;
e.n(d);
b.sh(e)
}
return Mu.m.n.call(this,b,c)
}
;

t.bj=function(b,c)
{
return Mu.m.bj.call(this,[this.createCaption(b,c),c.o("div","goog-inline-block "+(this.N()+"-dropdown")," ")],c)
}
;
t.createCaption=function(b,c)
{
return Nu(b,this.N(),c)
}
;
a.Nu=function(b,c,d)
{
return d.o("div","goog-inline-block "+(c+"-caption"),b)
}
;
t.N=s("goog-menu-button");
a.Ou=function(b,c,d,e)
{
yo.call(this,b,d||Mu.D(),e);
uo(this,64,j);
this.im=new Ju(k,5);
c&&this.sh(c);
this.uG=k;
this.qa=new Jd(500);
if((ii||ji)&&!Gb("533.17.9"))this.Bs=j
}
;
y(Ou,yo);
t=Ou.prototype;
t.Bs=n;
t.rp=n;
t.z=function()
{
Ou.m.z.call(this);
this.ka&&Pu(this,this.ka,j);
Pc(this.h(),Wc.Vk,"true")
}
;
t.Za=function()
{
Ou.m.Za.call(this);
if(this.ka)
{
this.vb(n);
this.ka.Za();
Pu(this,this.ka,n);
var b=this.ka.h();
b&&L(b)
}

}
;
t.p=function()
{
Ou.m.p.call(this);
this.ka&&(this.ka.F(),delete this.ka);
delete this.uT;
this.qa.F()
}
;

t.Le=function(b)
{
Ou.m.Le.call(this,b);
this.Gb()&&(this.vb(!this.tb(),b),this.ka&&(b=this.tb(),this.ka.tg=b))
}
;
t.mg=function(b)
{
Ou.m.mg.call(this,b);
this.ka&&!this.Gb()&&(this.ka.tg=n)
}
;
t.ke=function()
{
this.setActive(n);
return j
}
;
t.nO=function(b)
{
this.ka&&(this.ka.R()&&!this.Xf(b.target))&&this.vb(n)
}
;
t.Xf=function(b)
{
return b&&uc(this.h(),b)||this.ka&&this.ka.Xf(b)||n
}
;

t.tf=function(b)
{
if(32==b.keyCode)
{
if(b.preventDefault(),"keyup"!=b.type)return j
}
else if("key"!=b.type)return n;
if(this.ka&&this.ka.R())
{
var c=this.ka.Zb(b);
return 27==b.keyCode?(this.vb(n),j):c
}
return 40==b.keyCode||38==b.keyCode||32==b.keyCode||13==b.keyCode?(this.vb(j),j):n
}
;
t.qo=function()
{
this.vb(n)
}
;
t.QO=function()
{
this.Gb()||this.vb(n)
}
;
t.Zc=function(b)
{
this.Bs||this.vb(n);
Ou.m.Zc.call(this,b)
}
;
t.$a=function()
{
this.ka||this.sh(new ou(this.J()));
return this.ka||k
}
;

t.sh=function(b)
{
var c=this.ka;
if(b!=c&&(c&&(this.vb(n),this.Aa&&Pu(this,c,n),delete this.ka),b))
{
this.ka=b;
nh(b,this);
b.w(n);
var d=this.Bs;
(b.ln=d)&&b.Ye(j);
this.Aa&&Pu(this,b,j)
}
return c
}
;
t.Ea=function(b)
{
this.$a().H(b,j)
}
;
t.Si=function(b,c)
{
this.$a().Xk(b,c,j)
}
;
t.removeItem=function(b)
{
(b=this.$a().removeChild(b,j))&&b.F()
}
;
t.ei=function(b)
{
return this.ka?qh(this.ka,b):k
}
;
t.Ml=function()
{
return this.ka?ph(this.ka):0
}
;
t.w=function(b,c)
{
var d=Ou.m.w.call(this,b,c);
d&&!this.R()&&this.vb(n);
return d
}
;

t.cb=function(b)
{
Ou.m.cb.call(this,b);
this.isEnabled()||this.vb(n)
}
;
a.Qu=function(b)
{
b.im.Nm&&b.im.Nm(33)
}
;
t.BI=function()
{
this.vb(j)
}
;

t.vb=function(b,c)
{
Ou.m.vb.call(this,b);
if(this.ka&&!!(this.ca&64)==b)
{
if(b)this.ka.Aa||(this.rp?this.ka.Y(this.h().parentNode):this.ka.Y()),this.Kk=fg(this.h()),this.Yi=pg(this.h()),Ru(this),this.ka.Sb(-1);
else if(this.setActive(n),this.ka.tg=n,this.h()&&Pc(this.h(),Wc.dn,""),this.it!=k)
{
this.it=i;
var d=this.ka.h();
d&&mg(d,"","")
}
this.ka.w(b,n,c);
if(!this.$f)
{
var d=this.g(),e=b?d.c:d.va;
e.call(d,this.J().wa(),"mousedown",this.nO,j);
this.Bs&&e.call(d,this.ka,"blur",this.QO);
e.call(d,this.qa,Kd,this.qm);

b?this.qa.start():this.qa.stop()
}

}

}
;
a.Ru=function(b)
{
if(b.ka.Aa)
{
var c=b.im;
b.im.element=b.uT||b.h();
var d=b.ka.h();
b.ka.R()||(d.style.visibility="hidden",R(d,j));
!b.it&&(b.im.ho&&b.im.ho()&32)&&(b.it=og(d));
c.na(d,c.Yf^1,b.uG,b.it);
b.ka.R()||(R(d,n),d.style.visibility="visible")
}

}
;

t.qm=function()
{
var b=pg(this.h()),c=fg(this.h());
if(!(this.Yi==b||(!this.Yi||!b?0:this.Yi.left==b.left&&this.Yi.width==b.width&&this.Yi.top==b.top&&this.Yi.height==b.height))||!(this.Kk==c||(!this.Kk||!c?0:this.Kk.top==c.top&&this.Kk.right==c.right&&this.Kk.bottom==c.bottom&&this.Kk.left==c.left)))this.Yi=b,this.Kk=c,Ru(this)
}
;
a.Pu=function(b,c,d)
{
var e=b.g(),d=d?e.c:e.va;
d.call(e,c,"action",b.qo);
d.call(e,c,"highlight",b.Cx);
d.call(e,c,"unhighlight",b.Lx)
}
;
t.Cx=function(b)
{
Pc(this.h(),Wc.dn,b.target.h().id)
}
;

t.Lx=function()
{
Xs(this.ka)||Pc(this.h(),Wc.dn,"")
}
;
po("goog-menu-button",function()
{
return new Ou(k)
}
);
a.Su=function(b,c)
{
ou.call(this,b,c);
this.ln=j;
this.Ye(j);
this.w(n,j);
this.Mf=new Od
}
;
y(Su,ou);
t=Su.prototype;
t.JV=n;
t.WF=0;
t.ff=k;
t.Z=function(b)
{
Su.m.Z.call(this,b);
(b=b.getAttribute("for")||b.htmlFor)&&this.attach(this.J().h(b),1)
}
;
t.z=function()
{
Su.m.z.call(this);
Md.forEach(this.Mf,this.CC,this);
var b=this.g();
b.c(this,"action",this.ER);
b.c(this.J().wa(),"mousedown",this.WG,j);
C&&b.c(this.J().wa(),"contextmenu",this.WG,j)
}
;

t.attach=function(b,c,d,e,g)
{
if(!b||!this.Mf.Pd(ua(b)))b?(c=
{
e:b,UI:c,lR:d,dE:e?"contextmenu":"mousedown",Oy:g
}
,this.Mf.set(ua(b),c),b=c):b=k,this.Aa&&this.CC(b)
}
;
t.CC=function(b)
{
this.g().c(b.e,b.dE,this.lH)
}
;
t.detach=function(b)
{
(!b||!this.Mf.Pd(ua(b)))&&f(Error("Menu not attached to provided element, unable to detach."));
b=ua(b);
if(this.Aa)
{
var c=this.Mf.get(b);
this.g().va(c.e,c.dE,this.lH)
}
this.Mf.remove(b)
}
;

a.Tu=function(b,c,d,e,g)
{
var h=b.R();
b.qy()&&b.JV?b.hide():(b.ff=g||k,b.dispatchEvent("beforeshow")&&(d="undefined"!=typeof d?d:4,h||(b.h().style.visibility="hidden"),R(b.h(),j),c.na(b.h(),d,e),h||(b.h().style.visibility="visible"),b.Sb(-1),b.w(j)))
}
;
t.BI=function(b,c,d)
{
c=la(b.UI)?new ct(b.e,b.UI,j):new bt(c,d);
c.Nm&&c.Nm(5);
Tu(this,c,b.lR,b.Oy,b.e)
}
;
t.hide=function()
{
this.R()&&(this.w(n),this.R()||(this.WF=za(),this.ff=k))
}
;
t.qy=function()
{
return this.R()||150>za()-this.WF
}
;
t.ER=function()
{
this.hide()
}
;

t.lH=function(b)
{
for(var c=this.Mf.Fb(),d=0;
d<c.length;
d++)
{
var e=this.Mf.get(c[d]);
if(e.e==b.currentTarget)
{
this.BI(e,b.clientX,b.clientY);
b.preventDefault();
b.stopPropagation();
break
}

}

}
;
t.WG=function(b)
{
this.R()&&!this.Xf(b.target)&&this.hide()
}
;
t.Zc=function(b)
{
Su.m.Zc.call(this,b);
this.hide()
}
;
t.p=function()
{
Su.m.p.call(this);
this.Mf&&(this.Mf.clear(),delete this.Mf)
}
;
a.Uu=function(b)
{
kr.call(this,j,"/topic/bio/update","bio");
this.$p=b[0];
this.qd=["tid="+this.$p[3]];
this.content=b[1];
this.Ab='<a href="javascript:;
" name="edit">描述你关于 '+this.$p[0]+" 的经验</a>";
this.pu=j
}
;
y(Uu,kr);
Uu.prototype.cj=function()
{
Uu.m.cj.call(this);
this.Jn.innerHTML="更新"
}
;
Uu.prototype.Z=function(b)
{
Uu.m.Z.call(this,b);
var b=this.J(),c=b.o("strong",k,K("a",
{
href:"/topic/"+this.$p[1],title:this.$p[0],"class":""
}
,this.$p[0]));
b.Bo(c,this.Vb)
}
;
a.Vu=function(b,c)
{
M.call(this);
this.fQ=c;
this.ql=b;
this.items=[];
this.k0="/url_to_fetch_question_related_topic_bio_items";
this.Dy=n
}
;
y(Vu,Rk);

a.Wu=k,a.Xu=function()
{
Wu||(Wu=new Vu(Fg,n));
return Wu
}
,a.Yu=function(b)
{
if(!b.locked)if(!b.nR&&b.Dy)
{
b.locked=j;
var c=new V(j);
b.g().c(c,"success",function(b)
{
this.nR=j;
this.locked=n;
b=Ie(b.target);
b.r||(this.ql=b.msg,Yu(this))
}
);
c.ajax("/question/"+b.TH+"/bios",k,"GET")
}
else b.T||(b.T=new yi,b.T.eb("修改话题经验"),Ih(b.T,k),Ch(b.T,n),c=b.T.aa(),c.innerHTML='<div class="zg-section-title">修改每个话题旁边靠近你名字的简介：</div>',b.Y(c)),b.T.w(j)
}
;

Vu.prototype.Y=function(b)
{
this.e=K("div","zu-bio-editor-wrap",[this.iQ=K("div","zu-bio-editor-inner-wrap"),this.zd=K("div","zm-command",[this.Jn=K("a",
{
name:"save",href:"javascript:;
",className:"zg-r3px zg-btn-blue"
}
,"完成")])]);
z.forEach(this.ql,function(b)
{
b=new Uu(b);
b.Y(this.iQ);
this.items.push(b)
}
,this);
this.fQ&&R(this.zd,n);
b.appendChild(this.e);
this.g().c(this.zd,"click",this.ga)
}
;

Vu.prototype.Vw=function()
{
var b=this.items.length,c;
if(!b&&this.ql.length)for(c=0;
c<this.ql.length;
c++)if(this.ql[c][1])return this.ql[c][1];
var d=k;
for(c=0;
c<b;
c++)if(d=this.items[c].hb())return d
}
;
Vu.prototype.ga=function(b)
{
if((b=this.pf(b.target))&&"save"===b.name)this.T&&this.T.w(n),this.dispatchEvent("change")
}
;
a.Zu=function()
{
M.call(this);
this.T=k;
this.pa=0;
this.Gy=[];
this.Ns=[];
this.jB="最多输入 20 字";
this.bw="最多输入 256 字"
}
;
y(Zu,Rk);
a.$u=k,a.av=function()
{
$u||($u=new Zu);
return $u
}
;
t=Zu.prototype;
t.v=function(b)
{
b||this.Sr()
}
;

t.o=function()
{
this.SD=j;
this.e=K("div",k,[this.Tj=K("div",k,[this.ih=K("div","zm-favo-list-content"),this.hC=K("div","zh-favo-add-new-wrap zm-command",this.iV=K("a",
{
"class":"zm-favo-dialog-create zg-left",href:"javascript:;
"
}
,"+ 创建收藏夹"),this.Iv=K("a",
{
href:"javascript:;
","class":"zg-btn-blue"
}
,"关闭")),this.Yu=K("div","zh-favo-add-new-wrap zm-command",this.sM=K("a",
{
href:"javascript:;
","class":""
}
,"取消"),this.jV=K("a",
{
"class":"zm-favo-dialog-create zg-btn-blue",href:"javascript:;
"
}
,"创建收藏夹"))]),this.Hl=
K("div",
{
style:"display:none"
}
,[K("div",k,"标题"),K("div","zg-section",this.gm=K("input",
{
"class":"zg-form-text-input",style:"width:97%;
font-size:13px"
}
)),K("div",k,"描述（可选）"),K("div","zg-section zg-editor-simple-wrap zg-form-text-input",this.fm=K("textarea",
{
"class":"zg-editor-input",style:"height:66px"
}
)),this.DT=K("label",k,[this.EQ=K("input",
{
type:"radio",checked:"checked",value:"public",name:"mode"
}
),K("strong",k," 公开 "),K("span","zg-gray-normal","公开后不能设置为私密")]),this.OQ=K("br"),this.BT=K("label",
k,[this.DQ=K("input",
{
type:"radio",value:"private",name:"mode"
}
),K("strong",k," 私密 "),K("span","zg-gray-normal","只有你可以查看这个收藏夹")]),K("div","zm-command",[this.UA=K("a",
{
href:"javascript:;
","class":"zg-mr10"
}
,"取消"),this.$q=K("a",
{
href:"javascript:;
","class":"zg-mr10"
}
,"完成"),this.gC=K("a",
{
"class":"zg-btn-blue"
}
,"确认创建")])])]);
R(this.Yu,n);
(new gp(this.jB)).n(this.gm);
(new gp(this.bw)).n(this.fm);
z.forEach(this.Gy,function(b)
{
bv(this,b)
}
,this);
this.Gy.length||(this.ih.innerHTML='<div id="zh-fav-list-item-place-holder" class="zg-r5px zm-fav-list-item-place-holder">你可以创建多个收藏夹，将答案分类收藏</div> ',
R(this.Yu,j),R(this.hC,n));
this.T=new yi(k,n);
Ih(this.T,k);
this.T.aa().appendChild(this.e);
this.g().c(this.T,"afterhide",function()
{
this.Ge()
}
)
}
;

a.bv=function(b,c,d)
{
var e=I("zh-fav-list-item-place-holder");
e&&R(e,n);
b.Pz=c[5]?"":K("a","zm-fav-list-item-lock zg-locked");
e=K("span","zm-favo-list-item-title");
zc(e,c[1]);
e=K("a",
{
"class":"zg-r5px zm-favo-list-item-link",href:"javascript:;
"
}
,[b.Pz,e,K("span",
{
className:"zg-gray",innerHTML:'<span class="num">'+c[3]+'</span> 条答案 <span class="zg-bull">•</span> '+c[4]+" 人关注"
}
)]);
b.Pz&&b.Pz.setAttribute("data-tip","s$b$私密收藏夹");
e.setAttribute("data-lid",c[0]);
z.contains(b.Ns,c[0])&&D.add(e,"zm-favo-list-item-link-active");

c=J("zm-favo-list-item-link",b.ih);
d&&c?lc(e,c):b.ih.appendChild(e)
}
;
t.Da=function()
{
this.g().c(this.UA,"click",function()
{
this.pa?cv(this,0):dv(this)
}
).c(this.iV,"click",function()
{
Y.U(
{
type:"ga_click_add_collection"
}
);
cv(this,1)
}
).c(this.Iv,"click",function()
{
dv(this)
}
).c(this.jV,"click",function()
{
Y.U(
{
type:"ga_click_add_collection"
}
);
cv(this,1)
}
).c(this.sM,"click",function()
{
dv(this)
}
).c(this.$q,"click",function()
{
dv(this)
}
).c(this.gC,"click",this.Af).c(this.ih,"click",this.CS)
}
;

t.CS=function(b)
{
var c=Kc(b.target,"A");
if(c&&!this.locked)
{
var b=c.getAttribute("data-lid"),d=n;
D.has(c,"zm-favo-list-item-link-active")?(d=j,this.vD=b):this.pD=b;
c=new tk;
c.add("answer_id",this.pa);
c.add("favlist_id",b);
this.kA=new V(j);
this.locked=j;
P(this.g(),this.kA,"complete",this.iL);
this.kA.ajax(d?"/collection/remove":"/collection/add",c.Kc())
}

}
;

t.iL=function()
{
this.locked=n;
this.Iv.innerHTML="关闭";
var b=Ie(this.kA);
b&&!b.r?(b=Xb("zm-favo-list-item-link",this.ih),z.forEach(b,function(b)
{
var d=b.getAttribute("data-lid"),e=J("num",b),g=parseInt(e.innerHTML,10);
d===this.vD?(e.innerHTML=g-1+"",D.remove(b,"zm-favo-list-item-link-active")):d===this.pD&&(e.innerHTML=g+1+"",D.add(b,"zm-favo-list-item-link-active"))
}
,this),this.pD=this.vD=k,zk("Favorite","add_favorite")):U("添加失败: "+b.msg)
}
;

t.show=function(b)
{
this.v(b);
this.Wy&&(this.T.w(j),this.Iv.innerHTML="关闭",this.pa?(R(this.$q,n),cv(this,0)):(cv(this,1),R(this.UA,n),this.$q.innerHTML="取消"))
}
;

a.gv=function(b,c,d,e)
{
var g=I("zh-fav-head-title"),h=I("zh-fav-head-description-source"),c=c||(g?Hc(g):""),d=d||(h?Hc(h):"");
b.uD=e||Ig;
b.SD?ev(b):b.o();
b.Wy=j;
b.Da();
cv(b,1);
R(b.UA,n);
b.$q.innerHTML="取消";
b.gC.innerHTML="保存";
b.T.eb("编辑收藏夹");
b.gm.value=Ya(c);
b.fm.value=Ya(d);
b.uD[1]?(R(b.DT,n),R(b.BT,n),R(b.OQ,n)):b.DQ.setAttribute("checked",j);
b.eQ=fv(b);
b.T.w(j);
b.As=j
}
;
t.Sr=function()
{
(this.pa||!this.Wy)&&$.get("/collections/json",
{
answer_id:this.pa
}
).done(v(this.qS,this))
}
;

a.ev=function(b)
{
var c=Xb("zm-favo-list-item-link",b.ih);
z.forEach(c,function(b)
{
var c=b.getAttribute("data-lid");
D.remove(b,"zm-favo-list-item-link-active");
z.contains(this.Ns,+c)&&D.add(b,"zm-favo-list-item-link-active")
}
,b)
}
;
t.qS=function(b)
{
b&&!b.r&&(this.Gy=b.msg[0],this.Ns=b.msg[1],this.SD?ev(this):this.o(),this.Wy=j,this.Da(),this.show(j))
}
;

a.cv=function(b,c)
{
var d=!!c;
b.T.eb(0===c?"添加到收藏夹":"创建新收藏夹");
R(b.Tj,!d);
R(b.Hl,d);
new ql(b.gm,b.jB);
new ql(b.fm,b.bw);
if(1===c)$(b.Hl).on("change.FavoDiag","input, textarea, select",function()
{
b.Ud()
}
);
else $(b.Hl).off("change.FavoDiag"),b.Ge()
}
,a.fv=function(b)
{
var c=new tk,d=jk(b.gm.value),e=Ua(b.fm.value===b.bw?"":b.fm.value);
e||(e=-1);
c.add("title",d);
c.add("description",e);
c.add("is_public",b.EQ.checked?1:0);
return c
}
;

t.Af=function()
{
var b=jk(this.gm.value);
if(b&&b!==this.jB)
{
b=fv(this);
this.pa&&b.add("answer_id",this.pa);
if(this.As)
{
if(this.eQ.Kc()===b.Kc())
{
dv(this);
return
}
b.add("favlist_id",this.uD[0])
}
this.xhr=new V(j);
P(this.g(),this.xhr,"complete",this.TK);
this.xhr.ajax(this.As?"/collection/update":"/collection/create",b.Kc())
}

}
;

t.TK=function()
{
var b=Ie(this.xhr);
b&&!b.r?this.As?(dv(this),U("编辑成功"),setTimeout(function()
{
window.location.reload()
}
,1E3),this.As=n):this.pa?(R(this.Yu,n),R(this.hC,j),cv(this,0),this.Ns.push(b.msg[0]),bv(this,b.msg,j),this.gm.value="",this.fm.value=""):(dv(this),U("创建成功"),setTimeout(function()
{
window.location.href="/collections/mine"
}
,1E3)):U(b.msg)
}
;
t.R=function()
{
return this.T.R()
}
;

a.dv=function(b)
{
b.T.w(n);
b.dispatchEvent(hv);
Y.U(
{
type:"ga_click_collect_answer",data:
{
count:$(".zm-favo-list-item-link-active",b.ih).length
}

}
)
}
,a.hv="close";
Zu.prototype.Ud=function()
{
$(window).on("beforeunload.FavoDiag",v(s("你对收藏夹的修改还未保存，确认离开该页面吗？"),this))
}
;
Zu.prototype.Ge=function()
{
$(window).off("beforeunload.FavoDiag")
}
;
a.iv=function(b,c)
{
return $.post("/node/ColumnPostVoteBarV2",
{
method:c,params:
{
post_id:b
}

}
)
}
,a.jv=function(b,c)
{
return $.get(c?"/node/ColumnPostFullVoteInfoV2":"/node/ColumnPostVoteInfoV2",
{
params:
{
post_id:b
}

}
)
}
;
a.kv=function(b,c,d)
{
T.call(this);
this.kd=b;
this.entryType=c||"answer";
this.Bd=k;
this.C=$.extend(
{

}
,this.Q,d||
{

}
)
}
;
y(kv,T);
a.lv=
{
we:1,Gh:-1,UB:0
}
;
kv.prototype.Q=
{
$V:"up",kN:"down",IM:"count",qt:"pressed"
}
;
E.extend(kv.prototype,lv);
t=kv.prototype;
t.ca=lv.UB;

t.n=function(b)
{
kv.m.n.call(this,b);
var c=this.C,b=this.K=$(b);
this.Gu=$("."+c.$V,b);
this.Au=$("."+c.kN,b);
this.EB=$("."+c.IM,b);
c=this.Au.hasClass(this.C.qt);
this.Gu.hasClass(this.C.qt)?this.ca=lv.we:c&&(this.ca=lv.Gh);
mv(this);
this.Gu.click($.proxy(this.lB,this));
this.Au.click($.proxy(this.kB,this));
return this
}
;
t.ae=q("ca");

t.bc=function(b)
{
if(S.Ha())
{
if(b!==this.ca&&E.Ng(lv,b))
{
this.dispatchEvent(
{
type:"action",data:
{
state:b
}

}
);
this.Bd&&"pending"===this.Bd.state()&&this.Bd.abort();
var c=this.ca,d=+this.EB.text(),e=0;
b===lv.we?e=1:c===lv.we&&(e=-1);
this.EB.text(d+e);
this.ca=b;
mv(this);
b=
{

}
;
b[lv.we]="vote_up";
b[lv.Gh]="vote_down";
b[lv.UB]="vote_neutral";
this.Bd=("post"===this.entryType?iv:qt)(this.kd,b[this.ca]);
this.Bd.done(v(function(b)
{
b.r||this.Te()
}
,this))
}

}
else c=vk.D(),b=b===lv.we?"question_answer_vote_up":"question_answer_vote_down",
c.Ga=b,c.w(j),c.Sc.apply(c,
{
question_answer_vote_up:["voteup","加入知乎，即可投「赞同」票","精彩回答值得推荐"],question_answer_vote_down:["votedown","加入知乎，即可投「反对」票","把错误的认知踩在脚下"]
}
[b])
}
;
t.TV=function(b)
{
b===lv.we?zk("vote","voteup","side_vote"):b===lv.Gh&&zk("vote","votedown","side_vote")
}
;
t.lB=function()
{
this.bc(this.ca===lv.Gh?lv.we:this.ca^lv.we)
}
;
t.kB=function()
{
this.bc(this.ca===lv.we?lv.Gh:this.ca^lv.Gh)
}
;

a.mv=function(b)
{
var c=b.ca,d=b.C,e=c===lv.we,c=c===lv.Gh,g=e?"取消赞同":"赞同",h=c?"取消反对":"反对，不会显示你的姓名";
b.Gu.toggleClass(d.qt,e).find(".label").text(g).end().attr("aria-pressed",e).attr("title",g);
b.Au.toggleClass(d.qt,c).find(".label").text(h).end().attr("aria-pressed",c).attr("title",h)
}
;
t.Te=function()
{
this.dispatchEvent("change")
}
;
a.nv=function(b,c)
{
this.kd=b;
this.entryType=c;
this.ym=k;
this.ld=n
}
;
y(nv,T);
t=nv.prototype;
t.$b=q("ld");
t.Ka=function(b)
{
this.ld=!!b
}
;
t.Va=function()
{
return this.mq.data("votecount")
}
;
t.lk=function()
{
this.ym&&"pending"===this.ym.state()||(this.ym=("post"===this.entryType?jv:rt)(this.kd,this.ld).done(v(this.Bt,this)))
}
;
t.Bt=function(b)
{
if(b=La(b))b=$(b),this.mq.replaceWith(b),this.mq=b,this.Da(),this.dispatchEvent("change")
}
;
t.Da=function()
{
var b=this;
$("a.more",this.mq).click(function()
{
b.Ka(j);
b.lk()
}
)
}
;

t.z=function()
{
this.mq=$(this.e);
this.Da()
}
;
a.ov=function()
{
M.call(this);
this.qb=[];
this.YY="";
this.Al=this.hd=k;
this.vf()
}
;
y(ov,Rk);
ia(ov);

a.pv=Pg,a.qv=
{
"remove-question":
{
Rf:"删除",title:"确定要删除该问题吗？",qb:[300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,99,0]
}
,"mute-question":
{
Rf:"隔离",title:"确定要隔离该问题吗？",qb:[130,131,132,0]
}
,"unmute-question":
{
Rf:"解除隔离",title:"确定要解除隔离该问题吗？",qb:[0]
}
,"lock-question":
{
Rf:"锁定",title:"确定要锁定该问题吗？",qb:[140]
}
,"unlock-question":
{
Rf:"解除锁定",title:"确定要解除锁定该问题吗？",qb:[0]
}
,"remove-answer":
{
Rf:"删除",title:"确定要删除该答案吗？",qb:[300,301,302,303,304,305,99,0]
}
,"collapse-answer":
{
Rf:"折叠",title:"确定要折叠该答案吗？",qb:[220,
221,222,223,224,225]
}
,"uncollapse-answer":
{
Rf:"解除折叠",title:"确定要解除折叠该答案吗？",qb:[0]
}
,"remove-comment":
{
Rf:"删除",title:"确定要删除该评论吗？",qb:[300,301,302,303,304,305,99,0]
}
,"remove-image":
{
Rf:"删除",title:"确定要删除该图片吗？",qb:[180,181,182,183,184]
}
,"remove-video":
{
Rf:"删除",title:"确定要删除该视频吗？",qb:[200,201,202,203,204]
}

}
,a.rv=
{
"delete":'<span class="zg-gray-normal">删除后将私信通知作者并备份该内容</span>'
}
,a.sv=function(b,c,d)
{
var e=new V(j);
e.addEventListener("success",function(b)
{
b=Ie(b.target);
if(b.r)U(b.msg);
else
{
var c=b.msg;
if(c)
{
if(c.refresh)
{
setTimeout(function()
{
window.location.reload()
}
,
2E3);
return
}
if(c.redirect)
{
window.location.href=c.redirect;
return
}

}
U("操作成功！");
d&&d(b)
}

}
);
e.ajax(b,c)
}
;
t=ov.prototype;
t.vf=function()
{
this.o();
this.Da()
}
;

t.o=function()
{
var b=K("div",
{
style:"min-height:80px;
padding:15px 0 0 0"
}
,[this.D_=K("div","zg-section",[this.jk=K("select",
{
style:"min-width: 250px;
 max-width: 100%;
"
}
),this.Yn=K("label",
{
className:"zg-error-text",style:"display:none;
margin-left:.5em;
white-space: nowrap;
"
}
,"请填写修改理由")]),this.Zu=K("div"),this.kR=K("div",
{
"class":"zg-gray-normal"
}
),this.OH=K("div",
{
"class":"zg-form-text-input",style:"display:none"
}
,this.oh=K("textarea",
{
style:"width:100%"
}
))]);
this.hd=new yi;
Ch(this.hd,j);
Ih(this.hd,
Kh);
this.hd.aa().appendChild(b)
}
;
t.Da=function()
{
this.g().c(this.oh,["change","input"],function()
{
R(this.Yn,!La(this.oh.value))
}
).c(this.jk,"change",this.fP).c(this.hd,Gh,this.Bx).c(this.hd,Jh,function(b)
{
if("ok"===b.key)return this.Aj();
if(b.key===Lh)return this.no()
}
)
}
;
t.Bx=function()
{
this.Al=this.pr=k;
tv(this)
}
;
t.no=function()
{
this.da&&this.da.Gb()&&this.da.abort();
this.hd.w(n);
this.dispatchEvent("cancel")
}
;

t.Aj=function()
{
if(this.da&&this.da.Gb())return n;
var b="0"===this.jk.value,c=this.oh.value;
if(this.pr&&this.jk)
{
if(b&&!c)return R(this.Yn,j),this.oh.focus(),n;
R(this.Yn,n);
var d=this.pr.getAttribute("data-action"),e=this.pr.getAttribute("data-content");
e&&this.Qu&&(e=e+"&"+this.Qu);
e=new Si(e||this.Qu);
e.add("reason",this.jk.value);
b&&e.add("detail",c);
sv(d,e.toString(),v(this.hP,this))
}

}
;
t.hP=function(b)
{
this.hd.w(n);
this.ob&&this.ob(b)
}
;
t.w=function(b)
{
this.hd.w(b)
}
;

a.tv=function(b)
{
b.oh.value="";
b.jk.innerHTML="";
b.Zu.innerHTML="";
R(b.Yn,n)
}
,a.vv=function(b,c,d,e,g)
{
tv(b);
b.ob=d;
b.Qu=g;
b.pr=c;
(c=qv[c.getAttribute("data-op")])?(b.hd.eb(c.title),zc(b.hd.tc.Xc("ok"),c.Rf||"确定"),c=c.qb,R(b.OH,1===c.length&&0===c[0]),e="delete"===e||z.contains(c,99),b.Zu.innerHTML=e?rv["delete"]:"",z.forEach(c,function(b)
{
this.jk.appendChild(K("option",
{
value:b
}
,pv[+b]))
}
,b),uv(b,Number(b.jk.firstChild.value))):yk("no op code!")
}
,a.uv=function(b,c)
{
var d=b.kR;
b.Al&&z.contains([300,
301,302],c)?$.post("/manage",$.extend(
{
action:"get_member_info",reason:c
}
,b.Al)).done(function(b)
{
d.innerHTML="用户已被警告 "+b.warn_num+" 次，禁言 "+b.ban_num+" 次"
}
):d.innerHTML=""
}
;
t.fP=function(b)
{
var b=Number(b.target.value),c=0===b,d=99===b;
R(this.OH,c);
c||R(this.Yn,n);
uv(this,b);
R(this.Zu,!d);
return j
}
;
a.wv=function()
{
M.call(this);
this.ic=this.Aq()
}
;
y(wv,Hd);
t=wv.prototype;
t.B=k;
t.IL=j;
t.Ob=le("goog.editor.Plugin");
t.lJ=function()
{
this.B&&(this.disable(this.B),this.B=k)
}
;
t.enable=function(b)
{
this.B==b?this.ic=j:this.Ob.log(ce,"Trying to enable an unregistered field with this plugin.",i)
}
;
t.disable=function(b)
{
this.B==b?this.ic=n:this.Ob.log(ce,"Trying to disable an unregistered field with this plugin.",i)
}
;
t.isEnabled=function(b)
{
return this.B==b?this.ic:n
}
;
t.Aq=mf;
t.HQ=mf;

t.p=function()
{
this.B&&this.lJ(this.B);
wv.m.p.call(this)
}
;
a.xv=E.Ym(
{
Ex:1,KO:2,Yr:3,Cj:4,Zr:5,execCommand:6,queryCommandValue:7,CH:8,nM:10,mM:11
}
),a.yv=E.Uh(8,10,11);
wv.prototype.execCommand=function(b,c)
{
var d=this.HQ(b);
d||(B&&zv(this.B,j,j),this.B.Vh());
try
{
var e=this.nf.apply(this,arguments)
}
finally
{
d||(this.B.jf(),Av(this.B))
}
return e
}
;
wv.prototype.Qe=s(n);
a.Bv=function(b,c,d,e,g)
{
this.hE=b;
this.PA=c;
this.Qq=d;
this.mE=e;
this.Hw=g||
{

}

}
,a.Cv=function(b,c)
{
this.wW=b;
this.nD=c
}
,a.Dv=function(b,c,d,e)
{
var g=[];
b.Qq&&b.PA&&g.push("<!DOCTYPE HTML>");
g.push('<html style="background:none transparent;
min-width:0;
');
b.Qq&&g.push("height:",b.mE?"100%":"auto");
g.push('">');
g.push("<head><style>");
d&&d.nD&&g.push(d.nD);
B&&b.PA&&g.push(" img 
{
-moz-force-broken-image-icon: 1;

}
");
g.push("</style></head>");
g.push('<body g_editable="true" hidefocus="true" ');
Ns&&g.push("contentEditable ");

g.push('class="editable ');
g.push('" id="',b.hE,'" style="min-width:0;
');
B&&b.Qq&&(g.push(";
width:100%;
border:0;
margin:0;
background:none transparent;
",";
height:",b.PA?"100%":"auto"),b.mE?g.push(";
overflow:auto"):g.push(";
overflow-y:hidden;
overflow-x:auto"));
tb&&g.push(";
outline:hidden");
for(var h in b.Hw)g.push(";
"+h+":"+b.Hw[h]);
g.push('">',c,"</body></html>");
b=g.join("");
e=e.contentDocument||e.contentWindow.document;
e.open();
e.write(b);
e.close()
}
;
a.Kv=function(b,c)
{
M.call(this);
this.ah=this.id=b;
this.kb=k;
this.rd=
{

}
;
this.Jj=
{

}
;
for(var d in xv)this.Jj[d]=[];
this.nl="";
this.Ck=
{

}
;
this.Ck[Ev]=1;
this.Ck[Fv]=1;
this.my=this.Cs=n;
this.sr=new kj(this.ND,Gv,this);
this.qr=
{

}
;
for(var e in Hv)this.qr[Hv[e]]=0;
B&&(this.Ae=new kj(this.oo,Iv,this));
this.jc=new me(this);
this.xW=[];
this.Vj=Jv;
this.sm=Ub(c||document);
this.Oc=this.sm.h(this.id);
this.cl=this.sm.Sa()
}
;
y(Kv,Hd);
Kv.prototype.field=k;
Kv.prototype.Oc=k;
Kv.prototype.Ob=le("goog.editor.Field");

a.Ev="change",a.Fv="delayedchange",a.Hv=
{
VW:"cvc",LX:"load",UY:"unload",MW:"beforechange",TW:Ev,$W:Fv,NW:"beforefocus",iX:"focus",PW:"blur",OW:"beforetab",yX:"ifrsz",xY:"selectionchange"
}
,a.Jv=0,a.Lv=k;
t=Kv.prototype;
t.bh=n;
t.sJ=n;
t.su=n;
t.h=q("field");
t.addListener=function(b,c,d,e)
{
var g=this.h();
vq&&(g&&this.qc())&&(g=g.ownerDocument);
this.jc.c(g,b,c,d,e)
}
;
t.uj=function(b)
{
return this.rd[b]
}
;
a.Iv=15,a.Gv=250;
Kv.prototype.qc=nf;
Kv.prototype.Fo=nf;
Kv.prototype.zI=mf;
a.Mv=
{
46:j,8:j
}
;
A||(Mv[9]=j);

a.Nv=
{
86:j,88:j
}
;
A&&(Mv[229]=j);
a.Ov=function(b)
{
var c=!(b.ctrlKey||b.metaKey)&&b.keyCode in Mv;
return(b.ctrlKey||b.metaKey)&&b.keyCode in Nv||c
}
,a.Pv=function(b,c)
{
b.Vj=2;
b.field=c;
b.kb=Ub(c);
b.Cs=n;
b.my=n;
c.setAttribute("g_editable","true")
}
;

Kv.prototype.Hv=function()
{
this.jc&&this.jc.Pc();
if((ii||ji)&&this.qc()&&this.zI())
{
try
{
var b=this.kb.Sa();
b.removeEventListener("keydown",this.yn,n);
b.removeEventListener("touchend",this.yn,n)
}
catch(c)
{

}
delete this.yn
}
if(tb&&this.qc())
{
try
{
b=this.kb.Sa(),b.removeEventListener("focus",this.vv,n),b.removeEventListener("blur",this.uv,n)
}
catch(d)
{

}
delete this.vv;
delete this.uv
}
this.Ae&&this.Ae.stop();
this.sr.stop()
}
;

Kv.prototype.p=function()
{
(1==this.Vj||this.ee())&&this.Ob.Mk("Disposing a field that is in use.");
this.Oc&&this.execCommand("clearlorem");
this.Vj=Jv;
for(var b in this.rd)
{
var c=this.rd[b];
c.Aq()||c.disable(this)
}
this.kb=this.field=k;
this.Hv();
this.Dl&&(Ad(this.Dl),this.Dl=k);
this.sm=k;
this.jc&&(this.jc.F(),this.jc=k);
for(;
b=this.xW.pop();
)b.F();
Lv==this.id&&(Lv=k);
for(var d in this.rd)b=this.rd[d],b.IL&&b.F();
delete this.rd;
Kv.m.p.call(this)
}
;

a.Qv=["DOMNodeInserted","DOMNodeRemoved","DOMNodeRemovedFromDocument","DOMNodeInsertedIntoDocument","DOMCharacterDataModified"];
Kv.prototype.wA=function()
{
if(sq||!this.qc())this.jc.c(this.h(),"DOMSubtreeModified",this.Fx);
else
{
var b=this.kb.wa();
this.jc.c(b,Qv,this.Fx,j);
this.jc.c(b,"DOMAttrModified",v(this.GE,this,this.Fx),j)
}

}
;

a.Rv=function(b,c)
{
if(9==c.keyCode&&!b.dispatchEvent(
{
type:"beforetab",shiftKey:c.shiftKey,altKey:c.altKey,ctrlKey:c.ctrlKey
}
)||B&&c.metaKey&&(37==c.keyCode||39==c.keyCode))return c.preventDefault(),n;
var d;
if(!(d=c.charCode))d=Ov(c)?j:!(!B||c.ctrlKey||c.metaKey||B&&!c.charCode);
b.nx=d;
b.nx&&b.Vh();
return j
}
,a.Sv=
{
8:1,9:1,13:1,33:1,34:1,35:1,36:1,37:1,38:1,39:1,40:1,46:1
}
,a.Tv=
{
65:j,86:j,88:j
}
,a.Uv=
{
8:1,9:1,13:1,27:1,33:1,34:1,37:1,38:1,39:1,40:1
}
;
t=Kv.prototype;

t.Do=function(b,c)
{
for(var d=this.Jj[b],e=z.slice(arguments,1),g=0;
g<d.length;
++g)
{
var h=d[g];
if((h.isEnabled(this)||yv[b])&&h[xv[b]].apply(h,e))return j
}
return n
}
;
t.tQ=function(b,c)
{
for(var d=this.Jj[b],e=z.slice(arguments,1),g=0;
g<d.length;
++g)
{
var h=d[g];
(h.isEnabled(this)||yv[b])&&h[xv[b]].apply(h,e)
}

}
;
t.wt=function(b,c,d)
{
for(var e=this.Jj[b],g=z.slice(arguments,1),h=0;
h<e.length;
++h)
{
var l=e[h];
if(l.isEnabled(this)||yv[b])g[0]=l[xv[b]].apply(l,g)
}
return g[0]
}
;

a.Vv=function(b,c,d)
{
var e=
{

}
,b=b.wt(8,c||"",e);
Tf(d,e);
d.innerHTML=b
}
;
t.sf=function(b)
{
(B||Rv(this,b))&&!this.Do(1,b)&&Cq&&Wv(this,b)
}
;
t.LO=function(b)
{
if(B)
{
if(!Rv(this,b))return
}
else this.nx=j,this.Vh();
!this.Do(2,b)&&!Cq&&Wv(this,b)
}
;
t.MO=function(b)
{
!B&&(this.nx||Ov(b))&&this.oo();
this.Do(3,b);
Xv(this,"selectionchange")||(Sv[b.keyCode]||(b.ctrlKey||b.metaKey)&&Tv[b.keyCode])&&this.rI.start()
}
;

a.Wv=function(b,c)
{
if(!c.altKey)
{
var d=mb?c.metaKey:c.ctrlKey;
if(d||Uv[c.keyCode])
{
var e=c.charCode||c.keyCode;
17!=e&&b.Do(5,c,String.fromCharCode(e).toLowerCase(),d)&&c.preventDefault()
}

}

}
;
t.execCommand=function(b,c)
{
for(var d=arguments,e,g=this.Jj[6],h=0;
h<g.length;
++h)
{
var l=g[h];
if(l.isEnabled(this)&&l.Qe(b))
{
e=l.execCommand.apply(l,d);
break
}

}
return e
}
;

t.queryCommandValue=function(b)
{
var c=this.ee()&&this.Pe;
if(oa(b))return this.tt(b,c);
for(var d=
{

}
,e=0;
e<b.length;
e++)d[b[e]]=this.tt(b[e],c);
return d
}
;
t.tt=function(b,c)
{
for(var d=this.Jj[7],e=0;
e<d.length;
++e)
{
var g=d[e];
if(g.isEnabled(this)&&g.Qe(b)&&(c||g.Aq()))return g.queryCommandValue(b)
}
return c?k:n
}
;
t.GE=function(b,c)
{
if(!Xv(this,Ev))
{
var d=c.Yb;
try
{
if(d.originalTarget.prefix||"scrollbar"==d.originalTarget.nodeName)return
}
catch(e)
{
return
}
d.prevValue!=d.newValue&&b.call(this,d)
}

}
;

t.Fx=function(b)
{
Xv(this,Ev)||(b=b.vE?b.Yb:b,b.target.firebugIgnore||(this.my=this.Cs=j,this.Ae.start()))
}
;
t.Wr=function()
{
A&&this.execCommand("clearlorem",j);
B&&this.hw();
this.jf()
}
;
a.Yv=function(b)
{
var c;
return b.qc()&&(c=b.kb)?(b=c.Sa())&&b.frameElement:k
}
,a.Zv=function(b)
{
return(b=b.kb&&b.kb.Sa())&&lq(b)
}
,a.Av=function(b,c,d)
{
if(!Xv(b,"selectionchange"))
{
var e=Zv(b),e=e&&e.Db();
b.Pe=!!e&&uc(b.h(),e);
b.dispatchEvent("cvc");
b.dispatchEvent(
{
type:"selectionchange",G_:c&&c.type
}
);
b.Do(4,c,d)
}

}
;

t.gP=function()
{
var b=this.qI;
this.qI=k;
Av(this,i,b)
}
;
t.Vh=function()
{
Xv(this,"beforechange")||this.dispatchEvent("beforechange")
}
;
a.zv=function(b,c,d)
{
c&&(b.Ae&&fs(b.Ae),b.Ck[Ev]=1);
d&&($v(b),b.Ck[Fv]=1)
}
,a.aw=function(b,c,d)
{
!c&&b.Ae&&fs(b.Ae);
b.Ck[Ev]=0;
b.Ck[Fv]=0;
c&&b.oo();
d&&b.ND()
}
,a.Xv=function(b,c)
{
return!!b.Ck[c]||b.qr[c]&&500>=za()-b.qr[c]
}
;
t.jf=function(b)
{
aw(this,j,b)
}
;
t.oo=function()
{
Xv(this,Ev)||(this.Ae&&this.Ae.stop(),this.my=this.Cs=j,Xv(this,Fv)||this.sr.start())
}
;

t.ND=function()
{
Xv(this,Fv)||(this.sr.stop(),this.Cs=n,this.dispatchEvent(Fv))
}
;
a.$v=function(b)
{
b.Ae&&fs(b.Ae);
fs(b.sr)
}
;
t.hw=function()
{
this.MD();
this.OD()
}
;
t.MD=function()
{
Xv(this,"beforefocus")||(this.execCommand("clearlorem",j),this.dispatchEvent("beforefocus"))
}
;
t.OD=function()
{
if(!Xv(this,"focus"))
{
Lv=this.id;
this.Pe=j;
this.dispatchEvent("focus");
if(B)
{
var b=this.h(),c=Zv(this);
if(c)
{
var d=yp(c);
0==zp(c)&&(!d||d==b||"BODY"==d.tagName)&&Ls(b)
}

}
!tq&&this.qc()&&this.kb.Sa().parent.getSelection().removeAllRanges()
}

}
;

t.wr=function()
{
Xv(this,"blur")||(Lv==this.id&&(Lv=k),this.Pe=n,this.dispatchEvent("blur"))
}
;
a.bw=function(b)
{
Kc(b.target,"A")&&b.preventDefault()
}
;
t.yj=function(b)
{
Lv=this.id;
if(A)
{
var c=b.target;
c&&("A"==c.tagName&&b.ctrlKey)&&this.sm.Sa().open(c.href)
}
this.su=j
}
;
t.wx=function()
{
this.su=n
}
;
t.OE=function(b)
{
if(!this.sJ||this.su)this.su=n,Av(this,b),A&&(this.qI=b.target,this.rI.start())
}
;
t.SO=function(b)
{
Av(this,b)
}
;

t.Il=function()
{
if(this.queryCommandValue("usinglorem"))return" ";
if(!this.ee())
{
var b=this.Oc;
b||this.Ob.log(be,"Couldn't get the field element to read the contents",i);
return b.innerHTML
}
var c=this.h(),b=c.cloneNode(n),c=c.innerHTML;
A&&c.match(/^\s*<script/i)&&(c=" "+c);
b.innerHTML=c;
this.tQ(11,b);
return this.wt(10,b.innerHTML)
}
;

t.ne=function(b,c,d,e)
{
if(1==this.Vj)this.Ob.log(ce,"Can't set html while loading Trogedit",i);
else
{
e&&this.execCommand("clearlorem");
c&&b&&(c="<p>"+c+"</p>");
d&&zv(this,n,j);
b=c;
if(c=this.h())
{
if(this.qc()&&C)for(var g=c.ownerDocument.getElementsByTagName("HEAD"),h=g.length-1;
1<=h;
--h)g[h].parentNode.removeChild(g[h])
}
else c=this.Oc;
c&&Vv(this,b,c);
e&&this.execCommand("updatelorem");
this.ee()&&(d?(B&&fs(this.Ae),aw(this)):this.jf())
}

}
;

t.qB=function()
{
var b=this.kb.wa();
b.designMode="on";
yq&&b.execCommand("styleWithCSS",n,n)
}
;
t.DF=function()
{
this.nl&&cw(this)&&Bt(this.nl,this.h())
}
;
t.ee=function()
{
return 2==this.Vj
}
;
t.focus=function()
{
if(!Ns&&this.qc())this.kb.Sa().focus();
else
{
if(tb)var b=this.cl.pageXOffset,c=this.cl.pageYOffset;
this.h().focus();
tb&&this.cl.scrollTo(b,c)
}

}
;
t.ig=function()
{
(qq||C)&&dw(this);
this.focus()
}
;
a.dw=function(b)
{
var c=b.h();
if(c)
{
var d=zs(c);
c==d?nq(c,0).select():bs(d,j);
Av(b)
}

}
;

t.he=function(b)
{
this.Vj=1;
var c=this.Oc;
this.nodeName=c.nodeName;
this.W_=c.className;
this.cssText=c.style.cssText;
c.className+=" editable";
this.My(b)
}
;
t.My=function(b)
{
var c=this.Oc;
if(c)
{
var c=c.innerHTML,d=
{

}
,c=this.wt(8,c,d),e=this.sm.o("IFRAME",this.BE());
if(cw(this))
{
var g=v(this.lF,this,e,c,d);
this.Dl=N(e,"load",g,j);
b&&(e.src=b)
}
this.DC(e);
cw(this)||this.lF(e,c,d)
}

}
;

t.Xr=function()
{
A&&Os(this.kb.Sa());
Lv!=this.id&&this.execCommand("updatelorem");
if((ii||ji)&&this.qc()&&this.zI())
{
var b=this.kb.Sa();
this.yn=v(b.focus,b);
b.addEventListener("keydown",this.yn,n);
b.addEventListener("touchend",this.yn,n)
}
tb&&this.qc()?(this.vv=v(this.hw,this),this.uv=v(this.wr,this),b=this.kb.Sa(),b.addEventListener("focus",this.vv,n),b.addEventListener("blur",this.uv,n)):(Bq?(this.addListener("focus",this.OD),this.addListener(kd,this.MD)):this.addListener("focus",this.hw),this.addListener("blur",
this.wr,B));
if(B)this.wA();
else
{
this.addListener(["beforecut","beforepaste","drop","dragend"],this.Vh);
var c=this.jf,d;
d=d||0;
this.addListener(["cut","paste"],function()
{
return c.apply(this,Array.prototype.slice.call(arguments,0,d))
}
);
this.addListener("drop",this.Wr)
}
this.addListener(C?"dragend":"dragdrop",this.Wr);
this.addListener("keydown",this.sf);
this.addListener("keypress",this.LO);
this.addListener("keyup",this.MO);
this.rI=new kj(this.gP,250,this);
zq&&this.addListener("click",bw);
this.addListener("mousedown",
this.yj);
this.sJ?(this.jc.c(this.kb.wa(),"mouseup",this.OE),this.addListener("dragstart",this.wx)):this.addListener("mouseup",this.OE);
this.addListener("mouseover",this.SO);
this.DF();
aw(this);
this.Ob.info("Dispatching load "+this.id);
this.dispatchEvent("load");
for(var e in this.rd)this.rd[e].enable(this)
}
;
a.cw=function(b)
{
if(!la(b.py)&&(b.py=n,A&&b.qc()))
{
for(var c=b.sm.Sa();
c!=c.parent;
)try
{
c=c.parent
}
catch(d)
{
break
}
c=c.location;
b.py="https:"==c.protocol&&-1==c.search.indexOf("nocheckhttps")
}
return b.py
}
;

t.DC=function(b)
{
var c=this.Oc;
b.className=c.className;
b.id=c.id;
oc(b,c)
}
;
t.Zw=function(b)
{
var c=Mc(Ub(this.Oc));
return new Bv(this.id,c,n,n,b)
}
;
t.FJ=function(b,c,d)
{
d=this.Zw(d);
cw(this)?(b=(b.contentDocument||b.contentWindow.document).body,Ns&&(b.contentEditable=j),b.className="editable",b.setAttribute("g_editable",j),b.hideFocus=j,b.id=d.hE,Tf(b,d.Hw),b.innerHTML=c):Dv(d,c,new Cv(this.h(),this.nl),b)
}
;

t.lF=function(b,c,d)
{
this.Dl&&(Ad(this.Dl),this.Dl=k);
b.ZY="true";
this.FJ(b,c,d);
Pv(this,(b.contentDocument||b.contentWindow.document).body);
!Ns&&this.qc()&&this.qB();
this.Xr()
}
;
t.BE=function()
{
var b="padding:0;
"+this.Oc.style.cssText;
Ks(b,";
")||(b+=";
");
b+="background-color:white;
";
A&&(b+="overflow:visible;
");
return
{
frameBorder:0,style:b
}

}
;
a.ew=function(b)
{
T.call(this);
this.rb=b;
this.IZ=this.rb.Pr();
this.Kr=this.rb.Dd?this.rb.Ma:this.rb.Ma.h();
this.isContentEditable=this.rb.isContentEditable();
this.DV=30;
this.Ac=new Jd(1E3*this.DV);
this.X=Eg?Eg.X:0
}
;
y(ew,T);
t=ew.prototype;
t.p=function()
{
fw(this);
this.Ac.F();
ew.m.p.call(this)
}
;

t.n=function(b)
{
this.e=b;
this.Kj=J("draft-saved-info",b);
R(this.Kj,n);
this.Zx=J("draft-saved-time",b);
this.pM=J("draft-clear-button",b);
this.uZ=this.isContentEditable?Fv:["change","input"];
b=this.g().c(this.Ac,Kd,this.eA).c(this.pM,"click",this.qM).c(this.Kr,"keydown",this.NQ);
"oninput"in this.Kr&&!A?b.c(this.Kr,"input",this.kQ):b.c(this.Kr,"keydown",this.lQ);
var c=Kg&&1E3*Kg[1];
c&&(gw(this,c),this.iB=setInterval(v(function()
{
gw(this,c)
}
,this),22E3))
}
;

t.NQ=function(b)
{
if((b.metaKey||b.ctrlKey)&&"s"===Qj[b.keyCode])this.$Q(),this.isContentEditable||b.preventDefault()
}
;
a.hw=function(b)
{
R(b.Kj,j);
zc(b.Zx,"保存中…");
b.jQ()
}
;
t.kQ=function()
{
hw(this)
}
;
t.lQ=function(b)
{
Ug(b.keyCode)&&hw(this)
}
;
t.SA=function()
{
this.Ac.start()
}
;
t.WA=function()
{
this.Ac.stop()
}
;
t.Na=function(b)
{
this.rb.Na(b);
this.rb.Dp()
}
;
t.hb=function()
{
return this.rb.jg()
}
;

t.gI=function()
{
if(!this.$f)
{
var b=this.hb();
b&&(b=(new Si).add("qid",this.X).add("content",b),Ei("/answer/draft/save",k,"POST",b.toString()),this.Af())
}

}
;
t.qW=150;
t.eA=Hk(ew.prototype.qW,ew.prototype.gI);
t.aR=350;
t.$Q=Hk(ew.prototype.aR,ew.prototype.gI);
t.mQ=3E3;
t.jQ=Hk(ew.prototype.mQ,function()
{
this.$f||(this.hb()?this.eA():iw(this))
}
);
a.fw=function(b)
{
b.iB&&(clearInterval(b.iB),b.iB=k)
}
;
t.Af=function()
{
fw(this);
R(this.Kj,j);
R(this.Kj,j);
zc(this.Zx,"已保存");
this.dispatchEvent("saveContent")
}
;

a.gw=function(b,c)
{
var d=gt(c||za());
/^\d/.test(d)&&(d=" "+d);
d="已存于"+d;
R(b.Kj,j);
zc(b.Zx,d)
}
;
t.qM=function(b)
{
b.preventDefault();
Ci("清除草稿","你确定要清除保存的草稿吗？",function(b)
{
b&&(this.Na(""),iw(this),this.rb.ready(function()
{
var b=this.Ma;
this.Dd?ds(b,b.value.length):b.field.lastChild?bs(b.field.lastChild):b.ig();
this.yl&&(this.yl.scrollTop=this.yl.scrollHeight)
}
))
}
,this)
}
;
a.iw=function(b)
{
Ei("/answer/draft/delete",k,"POST","qid="+b.X);
fw(b);
R(b.Kj,n);
b.dispatchEvent("clearContent")
}
;
a.jw=function(b,c,d)
{
nr.call(this,n);
this.lb=!!b;
this.tJ=c;
this.Ab="&nbsp;
";
this.xn=d;
this.ou=this.tw=this.rE=this.enabled=j;
if(S.xe||!S.Ha())this.Ly='<span style="font-style: normal;
color: #999;
">写回答…</span>'
}
;
y(jw,nr);
t=jw.prototype;
t.AE=function()
{
var b=Wb("h2","zm-editable-content",I("zh-question-title"))[0];
return
{
title:b&&(/answer\/\d+$/.test(location.pathname)?Hc(b):b.firstChild.nodeValue)||"",Jk:this.nj
}

}
;
t.Vw=q("xn");
t.zp=ca("lb");

t.Nt=function(b)
{
this.xn=b?b:S[4];
this.ji&&$.trim(b)&&(b=Za(b,20),this.SL.innerHTML="，"+Ua(b)+'<a name="edit_bio" class="zu-edit-button" href="javascript:;
"><i class="zu-edit-button-icon"></i>修改话题经验</a>')
}
;
t.cb=function(b,c)
{
this.enabled=b;
this.ji?(this.uh(),this.Ab=c,this.Vb.innerHTML=this.Ab):c&&(this.Ab=c)
}
;
t.Z=function(b)
{
jw.m.Z.call(this,b);
this.ji=j;
D.add(this.Vb,"zu-answer-form-disabled-wrap")
}
;
t.p=function()
{
this.ts&&(L(this.ts),this.uJ=this.ts=k);
jw.m.p.call(this)
}
;

t.xj=function(b)
{
this.zp(b.lb);
this.Hq&&(this.Hq.checked=b.lb)
}
;
t.z=function()
{
jw.m.z.call(this);
this.g().c(Ki,"anon_change",this.xj)
}
;

t.Rg=function()
{
jw.m.Rg.call(this);
var b=this.J(),c=S.Ha();
this.ts=b.o("div","zh-answer-form clearfix",[c?kt(this.tJ):"",this.uJ=b.o("div",k,[b.o("div","zu-answer-form-title",[c?jt(this.tJ):"我来回答这个问题",this.SL=b.o("span")])])]);
this.Nt(this.xn);
b.Bo(this.ts,this.nj);
this.g().c(this.uJ,"click",this.ga);
S.Ha()||kw(this,'<div class="signin-mask-tip-answer"></div>','<div class="zm-command"><a class="zg-r3px zg-btn-blue" href="javascript:;
">我要回答</a></div>',function(b,c)
{
function g()
{
vk.D().w(j);
vk.D().Ga=
"question_answer_add_start";
vk.D().Sc("answer","加入知乎，即可回答该问题","你的知识、经验和见解可以帮助别人")
}
b.on("click",g);
c.on("click",g)
}
);
S.Ha()&&!S.xe&&kw(this,'<div class="active-mask-tip-answer">为正常使用知乎提问、回答、评论和编辑功能，请验证您的邮箱、激活帐号。</div>','<div class="zm-command"><a class="zg-r3px zg-btn-blue" href="javascript:;
">我要激活</a></div>',function(b,c)
{
function g()
{
ll.D().w(j)
}
b.on("click",g);
c.on("click",g)
}
)
}
;

a.kw=function(b,c,d,e)
{
c=$(c).css("top",0).css("z-index",9);
$(b.zd).hide();
d=$(d);
$(b.nj).append(c).after(d);
e&&e.call(b,c,d)
}
;

t.Tl=function(b)
{
switch(b)
{
case "edit_bio":b=Xu();
if(!this.sv)
{
var c=Eg.Wb;
b.Dy=j;
b.TH=c;
this.g().c(b,"change",this.iz)
}
this.sv=j;
Yu(b);
break;
case "cancel_delete":this.dispatchEvent("cancel_delete_answer");
break;
case "answer_my_question":var d=this;
this.Rk?this.Rk.show():(d.Rk=$('<div class="question-tip-box-bottom">确定想要回答你自己提出的问题吗？<br>如果需要对问题做出更多的解释和说明，请编辑问题描述。 如果需要对其他回答做出回应，请在相应回答下通过评论发布。<br><div class="zg-clear"><a href="javascript:;
" class="zg-right zg-btn zg-btn-blue" name="confirm">确定</a><a href="javascript:;
" class="zg-right zg-link-gray " name="cancel">取消</a></div></div>'),d.Rk.on("click",
'[name="cancel"]',function()
{
d.Rk.hide()
}
).on("click",'[name="confirm"]',function()
{
d.Rk.hide();
$(d.Vb).hide();
d.cb(j);
d.ud()
}
),$(d.Vb).after(d.Rk))
}
return j
}
;
t.Be=function()
{
"editing"===this.status?this.Mb&&R(this.Mb,j):this.Mb&&R(this.Mb,n);
R(this.Ad,n);
this.Vb&&R(this.Vb,!this.enabled)
}
;
t.xM='<div class="zm-command clearfix"><div class="draft-controls zg-left"><span class="draft-saved-info"><a class="draft-clear-button goog-inline-block" href="#" data-tip="s$b$删除草稿"><i class="zg-icon zg-icon-bin"></i><span class="hide-text">清除草稿</span></a><span class="draft-saved-time"></span></span></div><% if (questionStatus !== "normal") 
{
 %><span class="zg-gray-normal" style="margin-right:5px;
">被<%= statusText %>的问题不允许添加新的回答</span><a class="zg-right" data-tip="s$b$为什么部分问题会被「关闭」「建议修改」？" href="//www.zhihu.com/question/21290061 "><i class="zg-icon zg-icon-question-mark"></i></a><% 
}
 %><span class="<%= (questionStatus !== "normal" ? "hidden" : "") %>"><label style="cursor:pointer"><input name="anno-checkbox" type="checkbox">匿名</label> <a class="submit-button zg-btn-blue" name="save" href="javascript:;
">发布回答</a></span></div>';

t.cj=function()
{
var b=Bk(this.xM);
this.zd=hc(b(
{
questionStatus:Eg.status,statusText:
{
suggest:"建议修改",evaluate:"建议修改",close:"关闭"
}
[Eg.status]
}
));
this.Jn=$(".submit-button",this.zd)[0];
var b=$("input[name=anno-checkbox]",this.zd)[0],c=$("label",this.zd)[0];
this.Hq=b;
Eg.lb&&(this.Hq.checked=j);
tg(c,j);
this.Mb.appendChild(this.zd);
this.ready(function()
{
if(this.Ma&&this.Ma.on)this.Ma.on("load",this.$P,n,this)
}
)
}
;

t.$P=function()
{
var b=new ew(this);
Tc(this,b);
this.g().c(b,"saveContent",function()
{
var b=!this.Dd&&this.Ma.uj("FullScreenPlugin");
if(b&&b.Yp)
{
var c=$(b.Yp);
c.stop().text("草稿已经保存").fadeTo(600,0.5).delay(3E3).fadeOut(600,function()
{
c.text("")
}
)
}

}
,n,this);
var c=this.Dd?this.Ma:this.Ma.h();
this.g().c(c,"focus",function()
{
b.SA()
}
).c(c,"blur",function()
{
b.WA();
b.eA()
}
);
b.n(this.zd)
}
;
t.iz=function()
{
var b=Xu().Vw();
b&&this.Nt(b)
}
;
a.lw=function(b)
{
var c=k;
try
{
c=b.rules||b.cssRules
}
catch(d)
{
15==d.code&&(d.styleSheet=b,f(d))
}
return c
}
,a.mw=function(b)
{
var c=[],b=b||document.styleSheets,d=la(i)?i:n;
if(b.imports&&b.imports.length)for(var e=0,g=b.imports.length;
e<g;
e++)z.extend(c,mw(b.imports[e]));
else if(b.length)
{
e=0;
for(g=b.length;
e<g;
e++)z.extend(c,mw(b[e]))
}
else
{
var h=lw(b);
if(h&&h.length)for(var e=0,g=h.length,l;
e<g;
e++)l=h[e],l.styleSheet&&z.extend(c,mw(l.styleSheet))
}
(b.type||b.rules||b.cssRules)&&(!b.disabled||d)&&c.push(b);

return c
}
;
a.nw=/a(:(link|visited|active|hover))?/,a.ow=function()
{
this.Rn="";
this.qh=[]
}
;
ow.prototype.clone=function()
{
var b=new ow;
b.qh=this.qh.concat();
b.Rn=this.Rn;
return b
}
;

a.pw=function(b,c,d)
{
var e=[],g;
for(g in c)
{
var h=c[g];
h&&e.push(g,":",h,d?" !important":"",";
")
}
b.Rn=e.join("")
}
,a.qw=/(^|;
|
{
)\s*color:([^;
]+);
/g,a.sw=function(b)
{
this.Hz=[];
this.hv=
{

}
;
if(b)
{
for(var c=[],b=b.split(/\s+/gm),d=0;
d<b.length;
d++)if(b[d])
{
var e=new rw(b[d]);
c.push(e)
}
this.ui=c
}

}
,a.rw=function(b)
{
var c=tw[b];
if(c)return c;
for(var c=b.match(/[#\.]/)?b.split(/(?=[#\.])/):[b],d=
{

}
,e=0;
e<c.length;
e++)
{
var g=c[e];
"."==g.charAt(0)?d.className=g.substring(1,g.length):"#"==g.charAt(0)?d.id=g.substring(1,
g.length):d.tagName=g.toUpperCase()
}
this.BF=b;
this.fR=d;
this.VI=
{

}
;
tw[b]=this
}
,a.tw=
{

}
,a.uw=function(b,c)
{
var d=c.uid,e=b.VI[d];
if("undefined"!=typeof e)return e;
var g=b.fR,e=g.tagName,h=g.className,g=g.id,l=j;
e&&"*"!=e&&e!=c.nodeName?l=n:g&&g!=c.id?l=n:h&&!c.lM[h]&&(l=n);
return b.VI[d]=l
}
,a.ww=function(b)
{
var c=ua(b),d=vw[c];
if(d)return d;
d=[];
do
{
var e=
{
id:b.id,nodeName:b.nodeName
}
;
e.uid=ua(e);
var g=
{

}
;
if(b.className)for(var h=D.get(b),l=0;
l<h.length;
l++)g[h[l]]=1;
e.lM=g;
d.unshift(e)
}
while(b=b.parentNode);

this.PG=d;
this.uid=ua(this);
vw[c]=this
}
,a.vw=
{

}
,a.xw=
{

}
,a.yw="color visibility quotes list-style-type list-style-image list-style-position list-style page-break-inside orphans widows font-family font-style font-variant font-weight text-indent text-align text-transform white-space caption-side border-collapse border-spacing empty-cells cursor".split(" "),a.zw="font-family font-size font-weight font-variant font-style color text-align text-decoration text-indent text-transform letter-spacing white-space word-spacing".split(" ");
a.Aw=function(b,c)
{
Kv.call(this,b,c)
}
,a.Bw=void 0;
y(Aw,Kv);
t=Aw.prototype;
t.Ob=le("goog.editor.SeamlessField");
t.JF=n;
t.yQ=n;
t.Fo=q("JF");
t.RE=function()
{
Xv(this,Ev)||Cw(this)
}
;

t.NA=function()
{
if(this.Np?0:this.Np=j)
{
var b=n,c=Yv(this);
if(c)
{
var d,e=Yv(this),g=e.contentDocument.body;
d=g.parentNode;
0===parseInt(Ct(e,"height"),10)&&Tf(e,"height","1px");
if(Mc(Ub(g)))e=d.offsetHeight;
else if(e=d.scrollHeight,d.clientHeight!=d.offsetHeight)
{
d=e;
if(!(e=Bw))e=document.createElement("div"),e.style.cssText="overflow:auto;
position:absolute;
top:0;
width:100px;
height:100px",g=document.createElement("div"),mg(g,"200px","200px"),e.appendChild(g),document.body.appendChild(e),g=e.offsetWidth-
e.clientWidth,L(e),e=Bw=g;
e=d+e
}
d=e;
this.oR&&(d=Math.max(d,this.oR));
parseInt(Ct(c,"height"),10)!=d&&(c.style.height=d+"px",b=j)
}
this.Np=n;
b&&this.dispatchEvent("ifrsz")
}

}
;

a.Cw=function(b)
{
if(b.Np?0:b.Np=j)
{
var c=Yv(b),d=b.h(),e=n;
if(c&&d)
{
var g,h=c.parentNode,l=h.offsetWidth;
parseInt(Ct(c,"width"),10)!=l&&(g=xg(d),c.style.width=l+"px",d.style.width=l-g.left-g.right+"px",e=j);
h=h.offsetHeight;
b.Fo()&&parseInt(Ct(c,"height"),10)!=h&&(g||(g=xg(d)),c.style.height=h+"px",d.style.height=h-g.top-g.bottom+"px",e=j)
}
b.Np=n;
e&&b.dispatchEvent("ifrsz")
}

}
,a.Dw=function(b)
{
b.h()&&(Cw(b),b.Fo()||b.NA())
}
;
t.Rx="";
a.Ew=n;
t=Aw.prototype;
t.qc=function()
{
return!Ns
}
;

t.wA=function()
{
Aw.m.wA.call(this);
if(this.qc())
{
var b=Yv(this).ownerDocument;
this.jc.c(b,Qv,this.RE,j);
this.TQ=xd(this.kb.Sa(),"load",this.NA,j,this);
this.jc.c(b,"DOMAttrModified",v(this.GE,this,this.RE),j)
}

}
;
t.oo=function()
{
Xv(this,Ev)||(Aw.m.oo.call(this),this.qc()&&this.NA())
}
;

t.wr=function()
{
if(!Xv(this,"blur")&&(Aw.m.wr.call(this),!Ns&&!tq))
{
var b=this.kb.Sa(),c=n;
Ad(this.cG);
this.cG=xd(b.document.body,"dragover",function()
{
c=j
}
);
fa.setTimeout(v(function()
{
if(!c&&this.kb)
{
var b=Zv(this),e=this.kb.Sa();
Os(e);
b&&(b.collapse(j),b.select())
}

}
,this),0)
}

}
;
t.qB=function()
{
Aw.m.qB.call(this);
var b=this.kb.wa();
b.execCommand("enableInlineTableEditing",n,"false");
b.execCommand("enableObjectResizing",n,"false")
}
;

t.DF=function()
{
!this.qc()&&!Ew&&(this.nl&&Bt(this.nl,this.h()),Ew=j)
}
;
t.My=function(b)
{
if(this.qc())Aw.m.My.call(this,b);
else if(b=this.Oc)Pv(this,b),b.contentEditable=j,Vv(this,b.innerHTML,b),this.Xr()
}
;
t.Xr=function()
{
if(this.qc())
{
var b=this;
fa.setTimeout(function()
{
Dw(b)
}
,0)
}
Aw.m.Xr.call(this)
}
;
t.BE=function()
{
return
{
frameBorder:0,style:"padding:0;
"
}

}
;

t.DC=function(b)
{
if(!this.yQ)
{
var c=this.Oc;
c&&(this.JF="auto"==Xf(c,"overflowY"))
}
var c=this.Oc,d=Ub(c),e=c.style.width,g=c.style.height;
Tf(c,"visibility","hidden");
var d=d.o("DIV",
{
style:"height:0;
clear:both",innerHTML:"&nbsp;
"
}
),h=d.cloneNode(j);
c.insertBefore(d,c.firstChild);
c.appendChild(h);
var h=At(c),d=h.width,h=h.height,l="";
this.Fo()&&(l="&nbsp;
",Tf(c,"position","relative"),Tf(c,"overflow","visible"),Tf(b,"position","absolute"),Tf(b,"top","0"),Tf(b,"left","0"));
mg(c,d,h);
Mc(Ub(c))&&(this.F_=
c.style.lineHeight,Tf(c,"lineHeight","0"));
c.innerHTML=l;
mg(b,d,h);
mg(c,e,g);
Tf(c,"visibility","");
c.appendChild(b);
cw(this)||(c=b.contentWindow.document,Mc(Ub(b.ownerDocument))&&(c.open(),c.write("<!DOCTYPE HTML><html></html>"),c.close()))
}
;
t.Zw=function(b)
{
var c=this.Oc;
if(c)return new Bv(this.id,Mc(Ub(c)),j,this.Fo(),b);
f(Error("no field"))
}
;

t.FJ=function(b,c,d)
{
Tf(b,"visibility","hidden");
var d=this.Zw(d),e=this.Oc,g=this.nl;
if(!this.Rx)
{
var h=this.Oc;
if(h)
{
var l=h.ownerDocument,m=ua(l);
if(!xw[m])
{
for(var p=ua(l),r=[],l=mw(l.styleSheets),x=0,F;
F=l[x];
x++)if((F=lw(F))&&F.length)for(var H=0,G=F.length;
H<G;
H++)
{
var Q=new ow,X;
X=Q;
var ka=F[H],Ma=ka.style;
if(Ma)
{
var Ea=i,Va=i;
Ma&&(Ea=ka.selectorText)&&(Va=Ma.cssText)?A&&(Va+="/* */"):ka.cssText&&(Va=/([^\
{
]+)\
{
/,Ea=Va.exec(ka.cssText)[1],Va=ka.cssText.replace(Va,"").replace(/\
}
[^\
}
]*$/g,
""));
if(Ea)
{
ka=X;
ka.qh=[];
Ea=Ea.split(/,\s*/gm);
for(Ma=0;
Ma<Ea.length;
Ma++)
{
var ne=Ea[Ma];
0<ne.length&&ka.qh.push(new sw(ne))
}
X.Rn=Va;
X=j
}
else X=n
}
else X=n;
X&&r.push(Q)
}
xw[p]=r
}
p=xw[m];
m=[];
for(r=0;
r<p.length;
r++)m.push(p[r].clone());
l=new ww(h);
x=new rw("body");
for(p=0;
p<m.length;
p++)
{
F=m[p].qh;
r=F.length;
for(H=0;
H<r;
H++)
{
G=F[H];
Q=G;
X=l.uid;
if(Q.hv[X])X=Q.hv[X];
else
{
for(var Va=0,Ma=Ea=ka=k,ne=l.PG,PD=ne.length,Pj=0;
Pj<=Q.ui.length;
Pj++)
{
for(Ea=Q.ui[Pj];
Va<PD;
)
{
var yx=ne[Va];
if(Ea&&uw(Ea,yx))
{
ka=

{
XD:Va,sI:Pj
}
;
Va++;
break
}
else Ma&&uw(Ma,yx)&&(ka=
{
XD:Va,sI:Pj-1
}
);
Va++
}
Ma=Ea
}
X=Q.hv[X]=ka
}
X&&(Q=X.sI,G=G.ui,Va=G.length-1,X.XD==l.PG.length-1||Q<Va?(G=G.concat(),G.splice(0,Q+1,x),Q=new sw,Q.ui=G,F.push(Q)):0<Q&&Q==Va&&(Q=new sw,Q.ui=[x,G[Va]],F.push(Q)))
}

}
l=new ow;
h=h.currentStyle||Tb(h).defaultView.getComputedStyle(h,"")||
{

}
;
p=new sw;
p.ui=[new rw("html")];
l.qh=[p];
x=
{

}
;
for(p=0;
r=yw[p];
p++)x[r]=h[gb(r)];
pw(l,x);
m.push(l);
l=new ow;
x=new sw;
x.ui=[new rw("body")];
F=
{
position:"relative",top:"0",left:"0",
right:"auto",display:"block",visibility:"visible"
}
;
for(p=0;
r=zw[p];
p++)F[r]=h[gb(r)];
pw(l,F,j);
l.qh=[x];
m.push(l);
h=[];
r=m.length;
for(p=0;
p<r;
p++)
{
F=m[p];
l=h;
H=F.qh.length;
x=n;
for(G=0;
G<H;
G++)
{
Q=F.qh[G].ui;
X=Q.length;
for(Va=0;
Va<X;
Va++)l.push(Q[Va].BF," ");
G<H-1&&l.push(",");
B&&!Gb("1.9a")&&(x=x||nw.test(Q[X-1].BF))
}
F=F.Rn;
x&&(F=F.replace(qw,"$1 color: $2 ! important;
 "));
l.push("
{
",F,"
}
\n")
}
this.Rx=h.join("")
}

}
e=new Cv(e,g+this.Rx);
d.Qq&&(g=xg(e.wW),(g.top||g.left||g.right||g.bottom)&&Tf(b,"margin",
-g.top+"px "+-g.right+"px "+-g.bottom+"px "+-g.left+"px"));
Dv(d,c,e,b);
Dw(this);
Tf(b,"visibility","visible")
}
;
t.Hv=function()
{
Ad(this.cG);
Ad(this.TQ);
Aw.m.Hv.call(this)
}
;
a.Fw=
{

}
;
Fw._default_=
{
cx:function(b)
{
return $.get("/node/CommentV2",
{
params:
{
comment_id:b
}

}
)
}
,Jl:Et,Kl:Et,add:function(b)
{
return $.post("/node/AnswerCommentAddV2",
{
method:"add_comment",params:b
}
)
}
,remove:function(b)
{
return $.post("/node/CommentV2",
{
method:"remove_comment",params:
{
comment_id:b
}

}
)
}
,Ey:function(b,c)
{
return $.post("/node/CommentV2",
{
method:c?"like_comment":"undo_like_comment",params:
{
comment_id:b
}

}
)
}

}
;

Fw.answer=
{
Jl:function(b,c)
{
return $.get("/node/AnswerCommentBoxV2",
{
params:
{
answer_id:b,load_all:c
}

}
)
}
,Kl:function(b)
{
return $.get("/node/AnswerCommentListV2",
{
params:
{
answer_id:b
}

}
)
}
,add:function(b)
{
return $.post("/node/AnswerCommentAddV2",
{
method:"add_comment",params:b
}
)
}
,HL:function(b,c)
{
return $.post("/node/AnswerCommentV2",
{
method:"author_remove_comment",params:
{
comment_id:b,is_block:c
}

}
)
}

}
;

Fw.question=
{
Jl:function(b)
{
return $.get("/node/QuestionCommentBoxV2",
{
params:
{
question_id:b
}

}
)
}
,Kl:function(b)
{
return $.get("/node/QuestionCommentListV2",
{
params:
{
question_id:b
}

}
)
}
,add:function(b)
{
return $.post("/node/QuestionCommentAddV2",
{
method:"add_comment",params:b
}
)
}

}
;

Fw.favlist=
{
Jl:function(b)
{
return $.get("/node/FavlistCommentBoxV2",
{
params:
{
favlist_id:b
}

}
)
}
,Kl:function(b)
{
return $.get("/node/FavlistCommentListV2",
{
params:
{
favlist_id:b
}

}
)
}
,add:function(b)
{
return $.post("/node/FavlistCommentAddV2",
{
method:"add_comment",params:b
}
)
}

}
;

Fw.post=
{
cx:function(b)
{
return $.get("/node/PostCommentV2",
{
params:
{
comment_id:b
}

}
)
}
,Jl:function(b,c)
{
return $.get("/node/PostCommentBoxV2",
{
params:
{
post_id:b,load_all:c
}

}
)
}
,Kl:function(b)
{
return $.get("/node/PostCommentListV2",
{
params:
{
post_id:b
}

}
)
}
,add:function(b)
{
return $.post("/node/PostCommentV2",
{
method:"add_comment",params:b
}
)
}
,Ey:function(b,c)
{
return $.post("/node/PostCommentV2",
{
method:c?"like_comment":"undo_like_comment",params:
{
comment_id:b
}

}
)
}
,remove:function(b)
{
return $.post("/node/PostCommentV2",

{
method:"remove_comment",params:
{
comment_id:b
}

}
)
}

}
;

Fw.roundtable=
{
cx:function(b)
{
return $.get("/node/RoundtableCommentV2",
{
params:
{
comment_id:b
}

}
)
}
,Jl:function(b,c)
{
return $.get("/node/RoundtableCommentBoxV2",
{
params:
{
roundtable_id:b,load_all:c
}

}
)
}
,Kl:function(b)
{
return $.get("/node/RoundtableCommentListV2",
{
params:
{
roundtable_id:b
}

}
)
}
,add:function(b)
{
return $.post("/node/RoundtableCommentV2",
{
method:"add_comment",params:b
}
)
}
,Ey:function(b,c)
{
return $.post("/node/RoundtableCommentV2",
{
method:c?"like_comment":"undo_like_comment",params:
{
comment_id:b
}

}
)
}
,
remove:function(b)
{
return $.post("/node/RoundtableCommentV2",
{
method:"remove_comment",params:
{
comment_id:b
}

}
)
}

}
;
a.Hw=function(b,c)
{
var d=b.split("!");
this.type=d[0]+"!";
this.namespace=d[1];
this.Cc=new Gw(c)
}
;
y(Hw,id);
a.Gw=function(b)
{
this.category=b.category;
this.action=b.action;
this.label=b.label;
this.value=b.value
}
;
Gw.prototype.fill=function(b,c)
{
this[b]=this[b].replace("?",c);
return this
}
;
a.Iw=function(b)
{
T.call(this);
E.extend(this.C=
{

}
,this.Q,b||
{

}
);
this.Ih=new Od;
this.Tf=k
}
;
y(Iw,T);
t=Iw.prototype;
t.Q=
{
trigger:
{
A:"data-editable"
}
,MK:"hc-actionbar",KQ:"checked",RU:100,IP:100
}
;

t.z=function()
{
Iw.m.z.call(this);
this.tn=K("div");
document.body.appendChild(this.tn);
var b=this.C,c=new mn(b.trigger,n,k,this.e);
c.Wt=b.RU;
c.fs=b.IP;
c.rh(this.tn);
N(c,"trigger",function(b)
{
c.dd(new Um(b.anchor,1))
}
);
N(c,"beforeshow",function(b)
{
this.Tf=b.target.anchor;
this.Y()
}
,n,this);
c.className=b.MK;
this.OP=c
}
;
t.ax=q("OP");

a.Jw=function(b,c)
{
var d=b.C.KQ,e=qc(b.tn),g=z.find(e,function(b)
{
return b.getAttribute("data-action")===c
}
);
if(!g||D.has(g,d))return n;
z.forEach(e,function(b)
{
D.remove(b,d)
}
);
D.add(g,d);
return j
}
;
t.XL=function(b,c,d)
{
c=K("div",
{
title:b.S,"data-action":b.name,className:"button "+b.name+(0===c?" first":c===d.length-1?" last":"")
}
,[K("i","icon icon-actionbar-"+b.name)]);
tg(c,j);
this.g().c(c,"click",function()
{
Jw(this,b.name)&&b.hl(this.Tf)
}
);
return c
}
;

t.Y=function()
{
this.tn.innerHTML="";
jc(this.tn,z.map(E.Ja(this.Ih.ju()),this.XL,this))
}
;
a.Kw=function(b)
{
T.call(this);
E.extend(this.C=
{

}
,this.Q,b||
{

}
)
}
;
y(Kw,T);
Kw.prototype.Q=
{
cF:
{

}
,EL:j
}
;

Kw.prototype.z=function()
{
Kw.m.z.call(this);
var b=this,c=this.e;
if(this.C.EL)
{
var d=new Iw(
{

}
);
d.Ih.set("link",
{
name:"link",S:"链接",hl:function(b)
{
zc(b,b.href)
}
||ha
}
);
d.Ih.set("text",
{
name:"text",S:"文本",hl:function(b)
{
zc(b,b.getAttribute("data-title"))
}
||ha
}
);
d.n(c);
var e=d.ax();
cs(e,new Of(2,0,0,0));
e.Zl=new Of(2,0,0,0)||k;
var g=d.g();
g.c(e,"beforeshow",function(b)
{
var b=b.target.anchor,c=Hc(b);
c===b.href?Jw(d,"link"):(c!==b.getAttribute("data-title")&&b.setAttribute("data-title",c),Jw(d,"text"))
}
).c(e,
"beforehide",function(b)
{
if((b=b.target)&&c.contains(b)&&Lw(b))return n
}
);
var h;
g.c(e,"show",function(b)
{
h=b.target.anchor;
D.add(h,"hover")
}
).c(e,"hide",function()
{
h&&(D.remove(h,"hover"),h=k)
}
);
this.zq=d
}
this.g().c(c,"paste",function()
{
setTimeout(function()
{
var c=b.C,d=b.e,e=Bc(d,function(b)
{
return 3===b.nodeType&&!Mw(b,d,function(b)
{
return Lw(b)||"CODE"===b.nodeName||"PRE"===b.nodeName
}
)
}
),g,h=lq(),F=h&&xp(h);
z.forEach(e,function(b)
{
var c=b.nodeValue,d=c.replace(Nw,function(b)
{
Fa(b,"http")||(b=
"http://"+b);
return b.link(b)
}
);
d!==c&&(c=hc(d),F===b&&(g=c.lastChild),oc(c,b))
}
);
g&&bs(g);
var H=c.cF,c=z.filter(d.getElementsByTagName("A"),function(b)
{
var c=b.getAttribute("href");
if(c=!(!c||"#"===c))if(c=!b.getAttribute("data-editable"))if(c=z.contains(Ow,b.protocol))c=Hc(b),Fa(b.href,c)?b=i:(b.setAttribute("data-editable",j),b.setAttribute("data-title",c),b=j),c=!b;
return c
}
),c=z.map(c,function(b)
{
return Pw(b.href).done(function(c)
{
var e=H;
if(c&&d.contains(b))
{
var e=e||
{

}
,g=function(b,c,d)
{
var e=
lq();
if(e)
{
var g=e.V(),h=e.sa(),l=e.ia(),m=e.Ia();
uc(c,g)&&(g=b,h=0);
uc(c,l)&&(l=b,m=0);
d(function()
{
g===b&&l===b?bs(b):Yp(g,h,l,m).select()
}
)
}
else d(ha)
}
,h=
{
link:function(b,c)
{
b.setAttribute("data-editable",j);
c.title===b.href?b.setAttribute("data-title",b.hostname.split(".").slice(/(.com|.edu|.gov|.net|.org)$/.test(b.hostname)?-2:-3).join(".").replace(/^www\./,"")+" 的页面"):(b.setAttribute("data-title",c.title),g(b,b,function(d)
{
zc(b,c.title);
d()
}
))
}
,image:function(b,c)
{
var d=document.createElement("img");

d.src=c.src;
d.setAttribute("data-rawwidth",c.width);
d.setAttribute("data-rawheight",c.height);
g(d,b,function(c)
{
oc(d,b);
c()
}
)
}

}
;
(e=e[c.type]||h[c.type])&&e(b,c)
}

}
)
}
);
c.length&&(b.dispatchEvent("willScrape"),$.when.apply($,c).always(function()
{
b.dispatchEvent("didScrape")
}
))
}
)
}
).c(c,"keydown",this.zP)
}
;

Kw.prototype.zP=function(b)
{
var c=Ug(b.keyCode),d=8===b.keyCode;
if(!(b.ctrlKey||(b.altKey||b.metaKey)||!c&&!d))
{
var c=lq(),e=c.V(),g=c.ia(),h=this.e,l,m=Mw(e,h,Lw)||g!==e&&(l||(l=Mw(g,h,Lw)));
if(m)
{
var p=Hc(m),r=c.sa(),x=c.Ia();
if(m.getAttribute("data-editable")&&p===m.href)
{
var F=n;
l=l||Mw(g,h,Lw)||m;
var h=m.contains(e),H=l.contains(g);
if(d)h&&(e=m,r=0,F=j),H&&(g=l,x=Xr(l),F=j),F&&Yp(e,r,g,x).select();
else if(h&&H&&l===m)
{
if(!c.isCollapsed()||!(0===r||p.length===r))b.preventDefault(),bs(m)
}
else h&&
(e=m.nextSibling,r=0,F=j),H&&(g=l.previousSibling,x=Xr(g),F=j),F&&Yp(e,r,g,x).select()
}

}

}

}
;
a.Nw=/\b(?:(?:https?):\/\/|www\.)(?:\([\-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[\-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([\-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/ig,a.Ow=["http:","https:"],a.Mw=function(b,c,d)
{
for(;
b&&b!==c;
)
{
if(d(b))return b;
b=b.parentNode
}

}
,a.Lw=function(b)
{
return"A"===b.nodeName
}
,a.Pw=Ur(function(b)
{
return $.post("/scraper",
{
url:b
}
)
}
);
a.Qw=function(b,c,d)
{
T.call(this);
this.id=b;
this.type=c;
this.field=k;
this.Wd=this.yg=n;
this.le="写下你的评论…";
this.placeholder='<p style="color:#999">'+this.le+"</p>";
this.em="";
this.la=0;
this.jG=$.Deferred().resolve();
this.Oz=this.Rs=k;
this.$C="zm-comment-box";
this.Hk=k;
(b=Fw[c])||f(Error("API not found"));
this.Vi=$.extend(
{

}
,Fw._default_,b);
E.extend(this.C=
{

}
,this.Q,d||
{

}
)
}
;
y(Qw,T);
t=Qw.prototype;
t.Q=
{
gG:n,autofocus:j,sw:"empty",Re:"zm-item-comment"
}
;

t.Z=function(b)
{
Qw.m.Z.call(this,b);
Rw(this);
var b=location.hash.slice(1).split("-"),c="comment"===b[0]&&b[1];
c&&(b=z.find(Sw(this),function(b)
{
return b.getAttribute("data-id")===c
}
),ok(b));
this.Wd=j;
z.forEach(Sw(this),this.lz,this)
}
;
a.Tw=function(b,c,d)
{
var e=J(b.$C,c);
d&&(b.Hk=d);
e?b.n(e):(b.yg=j,b.Y(c))
}
;
t.CL="zm-comment-bubble";
t.zC="."+Qw.prototype.CL;
t.yu=function(b)
{
return $(b,this.e)
}
;
t.o=function()
{
this.e=K("div",
{
"class":this.$C,style:"display:none"
}
);
this.Ud()
}
;
t.dj=s('<i class="icon icon-spike zm-comment-bubble"></i><div class="zm-comment-spinner">正在加载，请稍等 <i class="spinner-lightgray"></i></div>');

t.p=function()
{
Qw.m.p.call(this);
this.field=this.dD=this.In=this.pC=this.Hk=this.Oz=this.hG=k
}
;
a.Uw=function(b)
{
var c=b.wl,d=c.h();
if(c.Il()!==b.placeholder)
{
c.ne(n,b.placeholder);
var e=["click","focus","keydown"],g=function()
{
c.ne(n,this.em||"");
this.field.lastChild?bs(this.field.lastChild):c.ig();
yd(d,e,g,n,this)
}
;
N(d,e,g,n,b);
var h;
window.getSelection?(h=window.getSelection(),h.anchorNode&&uc(b.field,h.anchorNode)&&h.removeAllRanges()):document.selection&&b.field.blur()
}

}
;

t.vs=function(b)
{
(b=b.h&&b.h())&&(new Kw(
{
cF:
{
image:ha
}

}
)).n(b)
}
;
t.us=function(b,c)
{
if(b.h)
{
var d=(new Si).add("type",this.type+"_comment").add("resource_id",this.id),e=b.h();
this.t_=d=new cr(e,
{
hn:
{
content:d.toString()
}
,ek:J("zu-main")
}
);
new Zq(e,
{
$z:er
}
);
qa(c)&&c(d)
}

}
;
a.Vw=function(b)
{
b.focus();
b=Ap(b);
b.collapse();
b.select()
}
,a.Sw=function(b)
{
return $(b.In).children(".zm-item-comment").get()
}
;
t.Vt=function(b)
{
D.enable(this.dD,"expanded",b)
}
;

t.Ji=function(b,c)
{
this.dispatchEvent(new Hw("click!comment",
{
category:"?",action:this.type+"_comments",label:"?_"+b,value:pa(c)?c:this.Va()
}
))
}
;
t.xj=function()
{
this.Wd?Ww(this):this.yg=j
}
;
t.kS=function(b)
{
if(13===b.keyCode&&(b.ctrlKey||b.metaKey))this.Bq(),$(this.field).blur(),b.preventDefault();
27===b.keyCode&&Xw(this)
}
;

t.ga=function(b)
{
var c=sk(this.e,b.target);
if(c&&c.name)
{
var d=Kc(c,k,this.C.Re);
b.preventDefault();
switch(c.name)
{
case "reply_comment":a:if(S.Ha())
{
var c=J("zm-comment-content-wrap",d),e=J("zm-comment-form",c),g=d.getAttribute("data-id"),h=this,l;
if(e)
{
l=J("zm-comment-editable",e);
if(rg(e))
{
if(vs(e))
{
R(e,n);
break a
}

}
else R(e,j);
Vw(l)
}
else
{
d="";
S.Ha()&&(d='<img class="avatar" src="'+S.RN()+'">');
e=hc('<div class="zm-comment-form expanded"><div class="zm-comment-editable-wrap">'+d+'<div class="zm-comment-editable" aria-label="写下你的回复"></div></div><div class="zm-command zg-clear"><a href="javascript:;
" class="zm-comment-submit zg-right zg-btn-blue">评论</a><a href="javascript:;
" class="zm-comment-close zm-command-cancel">取消</a></div></div>');

c.appendChild(e);
l=J("zm-comment-editable",e);
var m=new Aw(l);
m.he();
this.us(m,function()
{
Vw(l)
}
);
this.vs(m);
var d=J("zm-comment-close",e),c=J("zm-comment-submit",e),p=function()
{
var b=La(m.Il()),c=La(Hc(l));
b&&c?Yw(h,
{
content:b,bU:g
}
,function(b)
{
b.r||(R(e,n),m.ne(n,""),(b=z.Cf(Sw(h)))&&Cs(b,
{
offsetTop:100,vC:j
}
))
}
):(U("请填写内容"),l.focus())
}
;
N(d,"click",function()
{
R(e,n)
}
);
N(c,"click",p);
N(l,"keydown",function(b)
{
if(13===b.keyCode&&(b.ctrlKey||b.metaKey))p(),b.preventDefault()
}
)
}
Cs(e,100)
}
else d=vk.D(),
"question"===this.type?d.Ga="question_comment_reply":"answer"===this.type&&(d.Ga="question_answer_comment_reply"),d.w(j),d.Sc();
break;
case "cancelanon":d=$(this.e).parents(".feed-item-hook").data("qid");
hs(0,k,d);
break;
case "delcomment":this.Ul(c);
break;
case "like_comment":if(S.Ha())
{
var d=$(c),b=Kc(c,k,this.C.Re),c=$(".like-num",b),r=b.getAttribute("data-id"),b=!d.hasClass("liked");
this.Vi.Ey(r,b);
var r=$("em",c),x=+r.text()+(b?1:-1);
c.toggleClass("liked",b).toggleClass("nil",0>=x).attr("data-tip",
"s$r$"+x+" 人觉得这个很赞");
r.text(x);
d.toggleClass("liked",b);
gk(d[0],b?"取消赞":"赞")
}
else d=vk.D(),d.w(j),d.Sc();
break;
case "author_delcomment":var F=Kc(c,k,this.C.Re),H=F.getAttribute("data-id"),G=Ci("删除评论",'你确定要删除这条评论吗？<p style="margin-top: 0.2em;
color:#999;
"><label><input type="checkbox">同时将此人屏蔽</label></p>',function(b)
{
if(b)
{
var b=$(":checkbox",G.h()).prop("checked"),c=xa(L,F);
this.Vi.HL(H,Number(b)).done(v(function()
{
qa(c)&&c();
this.la-=1;
Zw(this)
}
,this))
}

}
,this);
break;
case "admin_delcomment":var d=
ov.D(),Q=Kc(c,k,this.C.Re),b=
{
id:Q.getAttribute("data-id"),type:"comment"
}
;
d.Al=b;
vv(d,c,v(function()
{
L(Q);
this.la-=1;
Zw(this)
}
,this),"delete");
d.w(j);
break;
case "closeform":Xw(this);
break;
case "report":this.$r(c);
b.stopPropagation();
break;
case "addnew":this.Bq();
break;
case "load-more":this.Ji("comments_all"),this.hG(c)
}

}

}
;

t.hG=function(b)
{
this.Rs&&"pending"===this.Rs.state()||(b&&D.add(b,"loading"),this.Rs=this.Oz||this.iG(),this.Rs.done(v(function(c)
{
c=$(c).filter(".zm-item-comment").get();
if(c.length)
{
var d=Sw(this);
d.length&&(c=z.filter(c,function(b)
{
return!z.find(d,function(c)
{
return c.getAttribute("data-id")===b.getAttribute("data-id")
}
)
}
),c=z.concat(d,c).sort(function(b,c)
{
return b.getAttribute("data-id")-c.getAttribute("data-id")
}
),z.forEach(c,this.BC,this),b&&L(b));
jc(this.In,c)
}

}
,this)))
}
;

a.Xw=function(b)
{
0<b.Va()?(b.em=b.hb(),b.Vt(n),Uw(b)):b.Hk?b.collapse():b.Vt();
b.Ge()
}
;
t.expand=function()
{
this.Ka(j)
}
;
t.collapse=function()
{
this.Ka(n)
}
;
t.$b=q("Wd");
t.Ka=function(b)
{
if(b!==this.Wd)
{
b&&(this.yu(this.zC).hide(),this.Ud());
this.Wd=b;
this.dispatchEvent(b?"beforeexpand":"beforecollapse");
R(this.e,this.Wd);
var c=v(function()
{
b&&$w(this);
this.dispatchEvent(b?"expand":"collapse")
}
,this);
b&&this.yg?Ww(this).done(c):c()
}

}
;
t.oe=function()
{
this.Ka(!this.Wd)
}
;

a.$w=function(b)
{
if(b.Hk)
{
var c=$(b.Hk);
b.yu(b.zC).show().css("left",c.position().left+c.width()/2)
}

}
,a.Ww=function(b)
{
if("pending"!==b.jG.state())
{
b.Za();
b.e.innerHTML=b.dj();
b.expand();
var c=b.Vi.Jl(b.id,b.C.gG).done(v(b.VT,b));
return b.jG=c
}

}
;
t.iG=function()
{
return this.Vi.Kl(this.id)
}
;
a.ax=function(b,c,d,e)
{
var c=$(c),g=$(d);
d?($(".zm-command, .zm-comment-info",b.e).hide(),$(b.field).hide().after(g).after(c)):c.insertAfter(b.field);
e&&e.call(b,c,g)
}
;

t.VT=function(b)
{
b=hc(La(b));
z.forEach($("."+this.C.Re,b).get(),this.lz,this);
this.yg=n;
this.Za();
oc(b,this.e);
this.e=b;
Rw(this)
}
;

a.Rw=function(b)
{
E.forEach(
{
pC:".load-more",In:".zm-comment-list",dD:".zm-comment-form",field:".zm-comment-editable"
}
,function(b,c)
{
this[c]=$(b,this.e)[0]
}
,b);
b.field.setAttribute("aria-label",b.le);
if(ni)
{
var c=b.field;
c.setAttribute("contentEditable",j);
var d=b.wl=
{
h:function()
{
return c
}
,Il:function()
{
return c.innerHTML
}
,ne:function(b,d)
{
c.innerHTML=d
}
,ig:function()
{
Ls(c)
}

}
;
b.us(d);
b.vs(d)
}
else
{
var e=K("textarea",
{
placeholder:b.le,"class":"zm-comment-textarea"
}
);
oc(e,b.field);
new Po(e,22);
b.field=
e;
b.wl=
{
h:function()
{
return e
}
,Il:function()
{
return e.value
}
,ne:function()
{
e.value="";
e.style.height=Zf(22,j)
}
,ig:function()
{
e.focus()
}

}

}
b.g().c(b.field,["change","keyup"],function(b)
{
27!==b.keyCode&&(this.em=Ms(this.field)?"":this.hb())
}
);
S.Ha()&&!S.xe&&ax(b,'<div class="active-mask-tip-comment">为正常使用知乎提问、回答、评论和编辑功能，请验证您的邮箱、激活帐号。</div>','<div class="zm-command"><a class="zg-r3px zg-btn-blue" href="javascript:;
">我要激活</a></div>',function(b,c)
{
function d()
{
ll.D().w(j)
}
b.on("click",d);
c.on("click",d)
}
);

S.Ha()||ax(b,'<div class="signin-mask-tip-comment"></div>',k,function(c,d)
{
function e()
{
vk.D().w(j);
"question"===b.type?vk.D().Ga="question_comment_box":"answer"===b.type&&(vk.D().Ga="question_answer_comment_box");
vk.D().Sc("comment","加入知乎，即可发表你的评论","你的参与，会让讨论更加全面")
}
c.on("click",e);
d.on("click",e)
}
);
Uw(b);
b.g().c(b.e,"click",b.ga).c(b.field,"keydown",b.kS).c(Ki,"anon_change",b.xj).c(b.wl.h(),["click","focus"],xa(b.Vt,j)).c(b.wl.h(),"focus",xa(b.Ji,"add_comment_start"));
b.la=Number(b.e.getAttribute("data-count"));

$(b.e).on("focusin focusout","."+b.C.Re,function(b)
{
$(this).toggleClass("focusin","focusin"===b.type)
}
);
!ub&&b.pC&&(b.Oz=$.Deferred(function(b)
{
setTimeout(b.resolve,2E3)
}
).promise().then($.proxy(b.iG,b)));
Zw(b);
$w(b)
}
,a.Zw=function(b)
{
var c=b.C,d=!b.Va();
D.enable(b.e,c.sw,d);
if(b.Hk)
{
var e=b.Va();
gk(b.Hk,e?e+" 条评论":"添加评论")
}
d&&b.field&&c.autofocus&&b.field.focus();
b.dispatchEvent("change")
}
;
t.hb=function()
{
var b=La(this.wl.Il());
return b===this.placeholder?"":b
}
;

t.Bq=function()
{
var b=this.hb(),c=La(Hc(this.field));
b&&"TEXTAREA"===this.field.tagName&&c||b?Yw(this,b):(U("请填写内容"),this.field.focus())
}
;
t.Va=q("la");
a.Yw=function(b,c,d)
{
if(!(b.ym&&"pending"===b.ym.state()))
{
var e;
ra(c)&&(e=c.bU,c=c.content);
var c=Oa(c),g=new Od;
g.set(b.type+"_id",b.id);
g.set("content",c);
e&&g.set("reply",e);
c=b.Vi.add(g.ju());
c.done($.proxy(b.bO,b)).done(d);
b.ym=c;
b.em=b.hb();
b.Ji("add_comment_submit")
}

}
;

t.bO=function(b)
{
if(b.r)return U(b.msg);
this.Vi.cx(b.msg).done($.proxy(this.WT,this));
this.wl.ne("");
Uw(this);
this.Vt(n)
}
;
t.lz=function(b)
{
this.BC(b)
}
;

t.BC=function(b)
{
if(Rg("auth_f_manage")&&!("favlist"===this.type||$(".del",b).length))
{
var c=b.getAttribute("data-id");
$("<a>",
{
href:"#",name:"admin_delcomment","class":"del zm-comment-op-link needsfocus",html:'<i class="zg-icon zg-icon-comment-del"></i>删除',"data-op":"remove-comment","data-action":"/manage?"+$.param(
{
comment_id:c,action:"remove_comment2"
}
)
}
).appendTo($(".zm-comment-ft",b))
}

}
;
t.WT=function(b)
{
this.em="";
b=hc(b);
this.In.appendChild(b);
this.lz(b);
this.la+=1;
Zw(this)
}
;

t.$r=function(b)
{
S.Ha()?(b=Kc(b,k,this.C.Re).getAttribute("data-id"),bu.Dm("comment",b)):(b=vk.D(),b.w(j),b.Sc())
}
;
t.Ul=function(b)
{
var c=Kc(b,k,this.C.Re),d=c.getAttribute("data-id");
Ci("删除评论","你确定要删除这条评论吗？",function(b)
{
if(b)
{
var g=xa(L,c);
this.Vi.remove(d).done(v(function()
{
qa(g)&&g();
this.la-=1;
Zw(this)
}
,this))
}

}
,this)
}
;
t.Ud=function()
{
$(window).on("beforeunload.CommentForm",v(function()
{
if(this.em)return"你的评论还未保存，确认离开该页面吗？"
}
,this))
}
;
t.Ge=function()
{
$(window).off("beforeunload.CommentForm")
}
;
a.bx=function(b)
{
this.K=$(b);
this.vf()
}
;
bx.prototype.vf=function()
{
var b=[this.K.get(0)].concat(this.K.parents().get()),c=$.map(b,function(b)
{
return $(b).data("navigable")
}
)[0],d=c&&$.grep(c.items(),function(c)
{
return~$.inArray(c,b)
}
)[0];
this.w_=c;
this.xR=d
}
;
bx.prototype.getItem=q("xR");
a.cx=function(b,c,d,e)
{
nr.call(this,b,c,d,e)
}
;
y(cx,nr);
cx.prototype.Ud=function()
{
$(window).on("beforeunload.AnswerEditor",v(s("你的修改还未保存，确认离开该页面吗？"),this))
}
;
cx.prototype.Ge=function()
{
$(window).off("beforeunload.AnswerEditor")
}
;
cx.prototype.uh=function()
{
cx.m.uh.call(this);
this.Ge()
}
;
cx.prototype.ud=function()
{
cx.m.ud.call(this);
this.Ud()
}
;
a.dx=function()
{
this.Ev=[]
}
;
y(dx,gu);
ia(dx);
dx.prototype.o=function(b)
{
var c=dx.m.o.call(this,b);
D.add(c,"goog-submenu");
ex(this,b,c);
return c
}
;
dx.prototype.n=function(b,c)
{
c=dx.m.n.call(this,b,c);
D.add(c,"goog-submenu");
ex(this,b,c);
var d=Wb("div","goog-menu",c);
if(d.length)
{
var e=new ou(b.J()),d=d[0];
R(d,n);
b.J().wa().body.appendChild(d);
e.n(d);
b.sh(e,j)
}
return c
}
;

dx.prototype.Na=function(b,c)
{
var d=this.aa(b),e=d&&d.lastChild;
dx.m.Na.call(this,b,c);
e&&(d.lastChild!=e&&D.has(e,"goog-submenu-arrow"))&&d.appendChild(e)
}
;
dx.prototype.Oe=function(b)
{
dx.m.Oe.call(this,b);
var c=b.aa(),d=b.J(),d=Vb(d.Fa,"span","goog-submenu-arrow",c)[0];
fx(b,d);
d!=c.lastChild&&c.appendChild(d);
Pc(b.h(),Wc.Vk,"true")
}
;

a.ex=function(b,c,d)
{
var e=c.J().o("span");
e.className="goog-submenu-arrow";
fx(c,e);
b.aa(d).appendChild(e)
}
,a.fx=function(b,c)
{
b.Hd()?(D.add(c,"goog-submenu-arrow-rtl"),zc(c,b.Eq?"◄":"►")):(D.remove(c,"goog-submenu-arrow-rtl"),zc(c,b.Eq?"►":"◄"))
}
;
a.gx=function(b,c,d,e)
{
lu.call(this,b,c,d,e||dx.D())
}
;
y(gx,lu);
a.hx=218;
t=gx.prototype;
t.Rd=k;
t.DA=k;
t.eF=n;
t.oc=k;
t.Hr=n;
t.Eq=j;
t.CQ=n;
t.z=function()
{
gx.m.z.call(this);
this.g().c(this.getParent(),"hide",this.fH);
this.oc&&ix(this,this.oc,j)
}
;
t.Za=function()
{
this.g().va(this.getParent(),"hide",this.fH);
this.oc&&(ix(this,this.oc,n),this.Hr||(this.oc.Za(),L(this.oc.h())));
gx.m.Za.call(this)
}
;
t.p=function()
{
this.oc&&!this.Hr&&this.oc.F();
this.oc=k;
gx.m.p.call(this)
}
;

t.td=function(b,c)
{
gx.m.td.call(this,b);
c&&(this.$a().tg=j);
b||(this.Rd&&Id.clearTimeout(this.Rd),this.Rd=Ld(this.Tg,hx,this))
}
;
t.Xt=function()
{
var b=this.getParent();
b&&Xs(b)==this&&(jx(this,j),kx(this),this.m_=n)
}
;
t.Tg=function()
{
var b=this.oc;
b&&b.getParent()==this&&(jx(this,n),oh(b,function(b)
{
"function"==typeof b.Tg&&b.Tg()
}
))
}
;
a.lx=function(b)
{
b.Rd&&Id.clearTimeout(b.Rd);
b.DA&&Id.clearTimeout(b.DA)
}
;
t.w=function(b,c)
{
var d=gx.m.w.call(this,b,c);
d&&!this.R()&&this.Tg();
return d
}
;

a.kx=function(b)
{
oh(b.getParent(),function(b)
{
b!=this&&"function"==typeof b.Tg&&(b.Tg(),lx(b))
}
,b)
}
;
t.Zb=function(b)
{
var c=b.keyCode,d=this.Hd()?37:39,e=this.Hd()?39:37;
if(this.eF)
{
if(!this.$a().Zb(b))if(c==e)this.Tg();
else return n
}
else if(this.isEnabled()&&(c==d||c==this.Xy))this.Xt(),Ys(this.$a()),lx(this);
else return n;
b.preventDefault();
return j
}
;
t.SR=function()
{
this.oc.getParent()==this&&(lx(this),this.tm.td(this),kx(this))
}
;
t.fH=function(b)
{
b.target==this.tm&&(this.Tg(),lx(this))
}
;

t.nd=function(b)
{
this.isEnabled()&&(lx(this),this.DA=Ld(this.Xt,hx,this));
gx.m.nd.call(this,b)
}
;
t.ke=function(b)
{
lx(this);
if(this.Tb&8)return gx.m.ke.call(this,b);
this.Xt();
return j
}
;

a.jx=function(b,c)
{
b.dispatchEvent(kh(64,c));
var d=b.$a();
if(c!=d.R()&&(c&&(d.Aa||d.Y(),d.Sb(-1)),b.eF=c,D.enable(b.h(),"goog-submenu-open",c),d.w(c),c))
{
var d=new ct(b.h(),b.Eq?6:4,b.CQ),e=b.$a(),g=e.h();
e.R()||(g.style.visibility="hidden",R(g,j));
d.na(g,b.Eq?4:6);
e.R()||(R(g,n),g.style.visibility="visible")
}

}
,a.ix=function(b,c,d)
{
var e=b.g();
(d?e.c:e.va).call(e,c,"highlight",b.SR)
}
;
t.Ea=function(b)
{
this.$a().H(b,j)
}
;
t.Si=function(b,c)
{
this.$a().Xk(b,c,j)
}
;

t.removeItem=function(b)
{
(b=this.$a().removeChild(b,j))&&b.F()
}
;
t.ei=function(b)
{
return qh(this.$a(),b)
}
;
t.Ml=function()
{
return ph(this.$a())
}
;
t.Eb=function()
{
return this.$a().Eb()
}
;
t.$a=function()
{
this.oc?this.Hr&&this.oc.getParent()!=this&&nh(this.oc,this):this.sh(new ou(this.J()),j);
this.oc.h()||this.oc.o();
return this.oc
}
;
t.sh=function(b,c)
{
var d=this.oc;
b!=d&&(d&&(this.Tg(),this.Aa&&ix(this,d,n)),this.oc=b,this.Hr=!c,b&&(nh(b,this),b.w(n,j),b.ln=n,b.Ye(n),this.Aa&&ix(this,b,j)))
}
;
t.Xf=function(b)
{
return this.$a().Xf(b)
}
;

po("goog-submenu",function()
{
return new gx(k)
}
);
a.mx=function(b,c,d,e)
{
gx.call(this,b,c,d,e)
}
;
y(mx,gx);
mx.prototype.Zb=function(b)
{
var c=mx.m.Zb.call(this,b),b=parseInt(Qj[b.keyCode],10);
isNaN(b)||this.$a().Sb(b-1);
return c
}
;
a.nx=function(b)
{
E.extend(this.C=
{

}
,this.Q,b||
{

}
);
this.content="";
this.fd=this.Sf=this.Eh=k;
this.Wd=n;
this.valid=j
}
;
y(nx,T);
t=nx.prototype;
t.Q=
{
yV:"textarea.content",YL:".toggle-expand",pV:".summary",HM:"zm-editable-content"
}
;

t.z=function()
{
nx.m.z.call(this);
var b=this.e,c=this.C;
this.content=$(c.yV,b).remove().val();
this.Eh=$(c.pV,b);
this.fd=$(c.YL,this.Eh);
if(this.Eh.length)
{
if(this.fd.length)this.fd.click(n).on("click",$.proxy(this.expand,this));
this.Eh.on("click",$.proxy(this.jP,this))
}
else this.valid=n,this.expand=this.collapse=ha,this.dispatchEvent("invalid")
}
;
t.Xc=function()
{
return this.fd.get(0)
}
;
t.hb=q("content");
t.Ka=function(b)
{
b?this.expand():this.collapse()
}
;

t.jP=function(b)
{
var c=lq();
if(!c||!c.Lc())c=$(b.target).closest("a").get(0),c&&"javascript:"!==c.protocol||(b.preventDefault(),b.stopPropagation(),this.expand())
}
;
t.expand=function()
{
this.Wd||(this.Wd=j,this.Sf?this.Sf.show():this.Eh.length&&(this.Sf=$("<div>",
{
html:this.content,"class":this.C.HM
}
).insertBefore(this.Eh)),this.Eh.hide(),this.dispatchEvent("expand"))
}
;
t.collapse=function()
{
this.Wd&&(this.Wd=n,this.Sf.hide(),this.Eh.show())
}
;
a.ox=function(b)
{
T.call(this);
this.oW="votebar-mobile";
this.dw="votebar-mobile-dialog";
this.pW=b;
L(b.h());
D.add(b.h(),this.oW);
Tc(this,b);
this.g().c(b,"action",function()
{
this.yb&&this.yb.w(n)
}
)
}
;
y(ox,T);
ox.prototype.Z=function(b)
{
ox.m.Z.call(this,b);
this.g().c(b,"click",this.aT)
}
;
ox.prototype.QQ='<div class="text zg-clear"><label class="zg-left">赞同</label><label class="zg-right">反对</label></div>';

ox.prototype.aT=function()
{
this.yb&&this.yb.F();
var b=new yi(k,n);
b.jw=j;
b.Ap(j);
b.JN=j;
var c=b.aa();
c.appendChild(this.pW.h());
c.appendChild(hc(this.QQ));
D.add(b.h(),this.dw);
b.w(j);
this.yb=b;
Tc(this,b)
}
;
a.px=function(b,c,d)
{
T.call(this);
this.X=b;
this.pa=d;
this.QM=c||Eg;
this.Mv=k
}
;
y(px,T);
a.qx=
{
all_can_comment:"允许任何人评论",followee_can_comment:"允许我关注的人评论",nobody_can_comment:"关闭评论"
}
;
t=px.prototype;

t.Fz=function()
{
var b=J("zm-item-answer",this.e)||this.e;
this.pa=b.getAttribute("data-aid");
this.Ue="1"===b.getAttribute("data-isowner");
this.Wb=b.getAttribute("data-atoken");
this.og="1"===b.getAttribute("data-deleted");
this.Sv=+b.getAttribute("data-created");
this.HP=+b.getAttribute("data-helpful");
this.zQ="1"===b.getAttribute("data-good");
this.eh="1"===b.getAttribute("data-collapsed");
this.lb=k
}
;
t.Py=function()
{
Fu("answer",this.Wb,"read")
}
;

t.Qy=function()
{
Fu("answer",this.Wb,/^\/question\//.test(location.pathname)?"read":"touch")
}
;

t.z=function()
{
function b()
{
c();
var b=l.Cq.ei(0);
b.$a&&b.$a()&&(b.Xt(),b.$a().Sb(0))
}
function c()
{
rx(l);
l.Cq.Sb(0)
}
px.m.z.call(this);
this.Fz();
this.Kg=J("zm-item-answer-author-info",this.e);
var d=this.Vp=new nx;
this.H(d);
d.n(this.e);
d.Xc()&&P(this.g(),d,"expand",this.Py);
Vt(this.e,this.Qy,this);
(this.Pb=this.Pb||J("zm-item-meta",this.e))&&this.g().c(this.Pb,"click",this.om);
if(this.Ue)this.Kg&&(this.qH=(this.lb=Wa(this.Kg.innerHTML,"匿名用户"))?k:this.Kg.innerHTML.replace(/src=".+?"/g,'src="'+S[2]+'"'),
this.g().c(this.Kg,"click",function(b)
{
"cancel-anon"===b.target.name&&hs(n)
}
));
else
{
var e=J("zm-votebar",this.e)||J("zm-votebar",this.Pb);
e&&(d=new kv(this.pa),d.n(e),this.rc=d,this.g().c(d,"change",this.QT).c(d,"action",function(b)
{
b.data.state===lv.we?Y.U(
{
type:"ga_click_vote_up",target:this
}
):b.data.state===lv.Gh&&Y.U(
{
type:"ga_click_vote_down",target:this
}
)
}
),(e=J("votenum-mobile",this.Pb))&&(new ox(d)).n(e))
}
if(d=J("zm-item-vote-info",this.e))
{
this.Lk=new nv(this.pa);
this.H(this.Lk);
this.Lk.n(d);

d=$(".zm-item-vote-count",this.e);
d[0]||(d=$(".zm-item-vote-count",this.Pb));
var g=[d[0],$(".zm-votebar .count",this.e)[0]];
if(g.length)
{
var h=this.Lk;
this.Lk.on("change",function()
{
z.forEach(g,function(b)
{
gk(b,h.Va())
}
)
}
)
}

}
this.zo();
$(this.e).on("contentchange",$.proxy(this.zo,this));
this.by();
this.Da();
d=new bx(this.e);
d=ek.CB(d.getItem()||this.e);
dk(ck(dk(ck(dk(ck(dk(ck(dk(ck(dk(ck(dk(ck(d,"v",function()
{
this.rc&&this.rc.lB()
}
,this),
{
group:"操作",name:"赞同"
}
),"d",function()
{
this.rc&&this.rc.kB()
}
,
this),
{
group:"操作",name:"反对"
}
),"f x",this.ce,this),
{
group:"操作",name:"分享"
}
),"s c",this.ux,this),
{
group:"操作",name:"收藏"
}
),"t",this.XE,this),
{
group:"操作",name:"感谢"
}
),"c",this.vx,this),
{
group:"操作",name:"打开评论"
}
),"shift+c",this.px,this),
{
group:"操作",name:"定位到评论框"
}
);
var e=mb?"⌘":"ctrl",l=this;
Dg.HF&&$("a[name=admin]",this.Pb)[0]&&dk(ck(dk(ck(d,"meta+.",c),
{
group:"管理",name:"展开菜单",key:e+"+."
}
),"meta+k",b),
{
group:"管理",name:"展开折叠子菜单 (Kill)",key:e+"+k"
}
);
if(ub&&!ji&&(d=J("more-actions",this.Pb)))
{
var m=
{
share:
{
label:"分享",
action:this.ce
}
,fav:
{
label:"收藏",action:this.ux
}
,report:
{
label:"举报",action:this.$r
}
,nohelp:
{
label:this.HP?"没有帮助":"撤销没有帮助",action:this.QE
}

}
,p=new ou,e=function(b)
{
ph(p)&&p.Ea(new nu);
var c=new lu(m[b].label);
c.ta(b);
p.Ea(c)
}
;
e("share");
e("fav");
this.Ue||(e("nohelp"),S.Ha()&&e("report"));
e=new Ou("operation",p);
e.rp=j;
Qu(e);
e.uG=new Of(7,0,7,0);
e.qm=ba();
e.Vc=nf;
e.n(d);
D.add(p.h(),"zh-answer-more-actions");
this.g().c(p,"action",function(b)
{
var c=m[b.target.W()];
c&&c.action.call(this,b)
}
)
}

}
;

t.vA=function(b)
{
var c=this.zo();
c&&Uq(c,b)
}
;
t.zo=function()
{
if(this.iq)return this.iq;
var b=J("zm-editable-content",this.e),c=this.rc&&this.rc.h();
!this.Ue&&(!ub&&S.Ha())&&(c&&$(c).is(":visible")&&b&&230<$(b).height())&&(b=this.iq=new Xq(k,b),this.H(b),b.Gi="votebar",b.Cz=50,b.n(c))
}
;
t.QT=function()
{
this.Lk&&this.Lk.lk()
}
;

a.sx=function(b)
{
if(!b.ze&&b.Ue&&Eg&&b.pa)
{
b.ze=new cx(n,"/answer/content","content");
Tc(b,b.ze);
b.ze.ou=j;
b.ze.tw=j;
b.ze.AE=jw.prototype.AE;
var c=J("zm-item-rich-text",b.e);
b.ze.qd=["id="+b.X];
b.ze.n(c);
b.g().c(b.ze,"shouldUpdateContent",function(b)
{
if(ma(b.data))return n
}
);
b.g().c(b.e,"click",function(b)
{
"suggest_edit"===b.target.name&&(this.ze.ud(),$(".zh-question-censor-tip",this.e).hide());
return j
}
)
}

}
;

t.Da=function()
{
this.Kg&&this.g().c(this.Kg,"click",this.ga);
this.Ue&&(this.FL=S);
this.g().c(Ki,"anon_change",function(b)
{
this.Ue?this.zp(b.lb):this.rc.ae()===lv.we&&this.Lk.lk()
}
);
sx(this);
$(this.e).on("focusin focusout",function(b)
{
$(this).toggleClass("focusin","focusin"===b.type)
}
)
}
;
t.pf=function(b)
{
return sk(this.e,b)
}
;

t.ga=function(b)
{
if(b=(b=this.pf(b.target))&&b.name)if("edit"===b)
{
b=Xu();
if(!this.sv)
{
var c=Eg.Wb;
b.Dy=j;
b.TH=c;
this.g().c(b,"change",this.iz)
}
this.sv=j;
Yu(b)
}
else"complex"===b&&(b=J("zm-item-answer-summary",this.e),c=J("zm-item-rich-text",this.e),R(b,n),R(c,j))
}
;
t.iz=function()
{
var b=Xu().Vw()||S[4]||"";
b&&this.Nt(b)
}
;
t.Nt=function(b)
{
this.xn=b;
this.zp(n)
}
;
t.by=function()
{
var b=J("zm-item-answer-author-wrap",this.e),b=J("zm-list-avatar",b);
Kj.add(b)
}
;

t.zp=function(b)
{
b?this.Kg.innerHTML='<h3 class="zm-item-answer-author-wrap">匿名用户<a class="zg-link-gray cancel-anon" href="javascript:void(0);
" name="cancel-anon">取消匿名</a></h3>':this.Ue&&(this.qH?this.Kg.innerHTML=this.qH.replace("</h3>","").replace("</H3>","")+'<a name="edit" class="zu-edit-button" href="javascript:;
"><i class="zu-edit-button-icon"></i>修改话题经验</a></h3>':(b=[],b.push('<h3 class="zm-item-answer-author-wrap">'),b.push(ht()),b.push(it(S,"zm-item-answer-creator")),b.push("</h3>"),this.Kg.innerHTML=
b.join("")))
}
;
t.AQ=q("Ue");

a.tx=function(b,c)
{
b.ma||(b.ma=new Qw(b.pa,"answer",c),b.H(b.ma),Tw(b.ma,b.Pb,$(".toggle-comment",b.Pb)[0]))
}
,a.rx=function(b)
{
if(b.Cq)b.Cq.w(j);
else
{
var c;
var d=$("a[name=admin]",b.Pb)[0];
if(d)
{
b.RK=d;
hx=0;
c=new Su;
b.H(c);
c.attach(d,5);
d=b.eh?new lu("取消折叠"):new mx("折叠");
d.ta("collapse");
if(!b.eh)
{
for(var e=0;
e<qv["collapse-answer"].qb.length;
e++)
{
var g=new lu([K("span","",(e+1).toString()+" "),document.createTextNode(pv[qv["collapse-answer"].qb[e]])]);
g.ta(qv["collapse-answer"].qb[e]);
d.Ea(g)
}
D.add(d.$a().h(),
"manage-menu")
}
e=new lu("删除");
e.ta("delete");
c.Ea(d);
c.Ea(e);
c.Y(b.e);
D.add(c.h(),"manage-menu")
}
else c=i;
c&&(Tu(c,new ct(b.RK,1,j),0,new Of(5,0,5,0)),b.g().c(c,"action",function(b)
{
var c=b.target,b=c.W(),c=c.h(),d=new Si;
if("collapse"===b)d.add("answer_id",this.pa).add("action","collapse2").add("collapse",this.eh?"cancel":"done"),c.setAttribute("data-op",this.eh?"uncollapse-answer":"collapse-answer"),c.setAttribute("data-action","/manage?"+d.toString()),ux(this,c);
else if("delete"===b)d.add("answer_id",
this.pa).add("action","remove_answer2"),c.setAttribute("data-op","remove-answer"),c.setAttribute("data-action","/manage?"+d.toString()),ux(this,c,"delete");
else if(pa(b))
{
var e=$(this.e),c=new Si;
c.add("answer_id",this.pa).add("action","collapse2").add("collapse",this.eh?"cancel":"done").add("reason",b);
sv("/manage",c.toString(),function()
{
e.hide("fast",function()
{
e.remove()
}
)
}
)
}

}
),vx(b,c),b.Cq=c)
}

}
,a.ux=function(b,c,d)
{
var e=ov.D();
e.Al=
{
id:b.pa,type:"answer"
}
;
vv(e,c,v(function()
{
R(this.e,n)
}
,b),
d);
e.w(j)
}
;

t.om=function(b)
{
var c=this.pf(b.target),d=c&&c.name;
if(d)switch(d)
{
case "addcomment":if("添加评论"===$.trim($(c).text())&&this.pi("comment","question_answer_add_comment_start"))break;
this.vx();
this.ma.$b()&&this.ma.Ji("view_comments",parseInt(Hc(c),10)||0);
break;
case "remove":this.Ul();
break;
case "thanks":Y.U(
{
type:"ga_click_thank_answer",target:c
}
);
this.XE();
break;
case "comment_opt":this.PU=c;
if(!this.aD||!this.aD.Gb())
{
b=this.AM;
if(!b)
{
var c=$(c).data(),e=new Su,b=new wx("禁止转载");
b.Rc(!c.copyable);
e.Ea(b);

e.Ea(new nu);
this.Nv=[];
E.forEach(qx,function(b,c)
{
var d=new wx(b);
d.ta(c);
d.Rc(c===this.Mv);
this.Nv.push(d);
e.Ea(d)
}
,this);
e.Ea(new nu);
e.Ea(new lu("删除"));
this.g().c(e,"action",this.jO);
vx(this,e);
e.Y(document.body);
D.add(e.h(),"zm-question-answer-meta-comment-option-menu");
b=this.AM=e
}
this.Mv||(c=new V(j),P(this.g(),c,"success",function(b)
{
if((b=Ie(b.target))&&!b.r)
{
var c=b.msg;
z.forEach(this.Nv,function(b)
{
b.W()===c&&b.Rc(j)
}
);
this.Mv=c
}
else U(b.msg)
}
),c.ajax("/answer/comment_permission?answer_id="+
this.pa,k,"GET"),this.aD=c);
b.R()?b.w(n):Tu(b,new ct(this.PU,1,j),0,new Of(5,0,5,0))
}
break;
case "admin":rx(this);
break;
case "share":Y.U(
{
type:"ga_click_share_answer_box",target:c
}
);
this.ce();
break;
case "nohelp":this.QE(b);
break;
case "report":this.$r(b);
break;
case "favo":Y.U(
{
type:"ga_click_collect_answer_box",target:c
}
),this.ux()
}

}
;

t.pi=function(b,c)
{
var d=
{
thank:["thank","加入知乎，即可「感谢」作者","用最简单的方式赞美认真的态度认真的人"],favo:["favo","加入知乎，即可收藏精彩回答","你可以把好内容装进一个收藏夹，方便随时查看"],share:["share","加入知乎，即可和朋友分享精彩内容","分享到新浪微博、腾讯微博或通过私信分享"],comment:["comment","加入知乎，即可发表你的评论","你的参与，会让讨论更加全面"],nohelp:[]
}
;
if(!S.Ha())
{
var e=vk.D();
e.Ga=c;
e.w(j);
e.Sc.apply(e,d[b]);
return j
}
return n
}
;
t.$r=function()
{
this.pi("report")||bu.Dm("answer",this.pa)
}
;

t.QE=function(b)
{
var b=b.target,c=!!b.h;
Y.U(
{
type:"ga_click_answer_not_helpful",target:c?b.h():b
}
);
if(!this.pi("nohelp","question_answer_not_helpful"))
{
this.cw&&"pending"===this.cw.state()&&this.cw.abort();
var d,e;
e=c?b.Xg():b.innerHTML;
e=(d=-1<e.indexOf("撤销"))?"没有帮助":"撤销没有帮助";
c?b.Km(e):b.innerHTML=e;
d=d?"/answer/helpful":"/answer/not_helpful";
c||ok(b);
this.cw=$.post(d,
{
aid:this.pa
}
)
}

}
;

t.ce=function()
{
if(!this.pi("share","question_question_share"))
{
var b=Cu.D();
b.wk("分享回答","answer",this.Wb,
{
aid:this.pa
}
);
b.show();
Du(b,"tb-webshare-sina")
}

}
;
t.ux=function()
{
if(!this.pi("favo","question_answer_collect"))if(S.Ha()&&!S.xe)ll.D().w(j);
else
{
var b=av(),c=this.pa;
if(b.pa!==c&&b.ih)
{
var d=Xb("zm-favo-list-item-link",b.ih);
z.forEach(d,function(b)
{
D.remove(b,"zm-favo-list-item-link-active")
}
,b)
}
b.pa=c;
b.show()
}

}
;
t.vx=function()
{
this.ma||tx(this);
this.ma.oe()
}
;

t.px=function(b)
{
this.ma?this.ma.field.focus():this.vx();
b.preventDefault()
}
;
t.XE=function()
{
if(!this.pi("thank","question_answer_thank"))
{
var b=$("a[name=thanks]",this.Pb)[0];
b&&!D.has(b,"disabled")&&(gk(b,"已感谢"),D.add(b,"disabled"),ok(b),$.post("/answer/thanks",
{
aid:this.pa
}
))
}

}
;
a.vx=function(b,c)
{
b.g().c(c,"show",function()
{
D.add(this.Pb,"zm-item-meta-has-menu")
}
).c(c,"hide",function(b)
{
b.currentTarget===b.target&&D.remove(this.Pb,"zm-item-meta-has-menu")
}
)
}
;

t.jO=function(b)
{
var c=b.target,b=c.W();
"禁止转载"===b?(b=!c.de(),$.post("/node/AnswerMetaV2",
{
method:"set_copyright",params:
{
answer_id:this.pa,is_copyable:Number(b)
}

}
),$(".copyright",this.Pb).html(b?"":'<span class="zg-bull">&bull;
</span> 禁止转载')):"删除"===b?this.Ul():b in qx&&$.post("/answer/comment_permission",
{
answer_id:this.pa,permission:b
}
).done(v(function(b)
{
b&&!b.r&&z.forEach(this.Nv,function(b)
{
b.Rc(b===c)
}
)
}
,this))
}
;

t.Ul=function()
{
Ci("你确定要删除自己的答案吗？","答案内容不会被永久删除，你还可以撤消本次删除操作。",function(b)
{
b&&(this.og=j,this.status=-1,xx(this))
}
,this)
}
;
a.xx=function(b)
{
var c=new V(j);
P(b.g(),c,"success",function()
{
R(this.e,!this.og);
this.og?this.Ru="set_delete":(sx(this),this.Ru="cancel_delete");
this.dispatchEvent("change");
$(this.e).parent(".zm-item").hide()
}
);
c.ajax("/answer/"+(b.og?"remove":"unremove"),"aid="+b.pa)
}
;
t.h=q("e");
a.zx=function()
{
T.call(this)
}
;
y(zx,T);
t=zx.prototype;
t.Zn="zm-item-expanded";
t.$k="zm-item-answer";
t.z=function()
{
zx.m.z.call(this);
this.Fz();
this.Da();
this.by();
this.Lh();
this.am();
!this.Ui&&this.rt&&Vt(this.e,this.dR,this)
}
;
t.p=function()
{
this.Ui=k;
Vc(this.bf);
Vc(this.yI);
zx.m.p.call(this)
}
;
t.Lh=function()
{
this.yI=dk(ck(ek.CB(this.e),"o",this.oe,this),
{
group:"操作",name:"显示全部/收起"
}
)
}
;

t.Fz=function()
{
var b=this.e,c=this.$k&&J(this.$k,b);
c&&(this.pa=c.getAttribute("data-aid"),this.cm=c.getAttribute("data-isowner"),this.aZ=c.getAttribute("data-atoken"));
this.X=b.getAttribute("data-qid");
if(!(b=b.getAttribute("data-qtoken")))b=(b=J("question_link",this.e))&&b.pathname.split("/")[2];
this.rt=b;
this.Ui=c
}
;
t.by=function()
{
var b=J("zm-item-answer-author-wrap",this.e),b=J("zm-list-avatar",b);
Kj.add(b)
}
;
t.$b=function()
{
return D.has(this.e,this.Zn)
}
;
t.oe=function()
{
this.Ka(!this.$b())
}
;

a.Ax=function(b,c)
{
$(".feed-question-detail-item",b.e).toggleClass("question-detail-expanded",c)
}
;
t.Ka=function(b)
{
b!==this.$b()&&(b||(this.mv(this.e),Ax(this,n)),D.enable(this.e,this.Zn,b),b&&At(this.e).height<$b().height&&1<$("a.collapse",this.e).length&&$("a.collapse",this.e).eq(0).remove(),this.Ui&&b&&this.am(),this.Ui&&this.bf&&(this.bf.vA(b),this.bf.Vp.Ka(b)),this.dispatchEvent(b?"expand":"collapse"))
}
;
t.Da=function()
{
this.g().c(this.e,"click",this.ga)
}
;

t.ga=function(b)
{
var b=b.target,c=b.name;
if(!c)
{
b=Kc(b,"A");
if(!b||!b.name)return;
c=b.name
}
this.Ra=b;
var d="new"===$("#feed-ver").val()?j:n;
switch(c)
{
case "expand":this.Ka(j);
if(d||this.cm)b.name="toggleExpanded";
break;
case "toggleExpanded":this.oe();
break;
case "expandQuestionDetail":Ax(this,j);
break;
case "complex":this.Ka(j);
break;
case "collapse":this.Ka(n);
break;
case "focus":d&&zk("follow","follow_question","v2");
wk(this.Ra,"question",v(this.LP,this),i,
{
follow_text:"关注问题"
}
);
break;
case "follow-p":c=
b;
wk(this.Ra,"people",xa(ok,c),i,
{
follow_text:c.getAttribute("data-follow_text")
}
);
break;
case "ignore":Y.U(
{
type:"ga_click_question_ignore",target:b
}
);
this.dispatchEvent(
{
type:"ignore",X:this.X
}
);
"ROUNDTABLE_FOLLOW"===this.e.getAttribute("data-feedtype")?(c=this.e.getAttribute("data-rtoken"),$.post("/roundtable/"+c,
{
action:"mute"
}
)):$.post("/question/uninterest",
{
qid:this.X
}
);
break;
case "share":this.bf||this.ce();
break;
case "toggle-comment":this.Ii&&this.Ii(),this.ma.$b()&&this.ma.Ji("view_comments",
parseInt(Hc(b),10)||0)
}
this.Qh&&this.Qh(b)
}
;
t.mv=function(b)
{
var c=b.getBoundingClientRect().bottom;
c<$b().height&&setTimeout(function()
{
var d=b.getBoundingClientRect().bottom,e=ys(document);
window.scrollTo(e.x,e.y+d-c)
}
)
}
;
t.LP=function()
{
this.Ra&&ok(this.Ra)
}
;
t.dR=function()
{
Fu("question",this.rt,"touch")
}
;

t.am=function()
{
if(this.Ui)
{
this.bf=new px(this.X,
{
Wb:this.rt
}
,this.pa);
var b=J("zm-item-meta",this.e);
this.bf.Pb=b;
this.H(this.bf);
this.bf.n(this.Ui);
b=this.bf.Vp;
this.g().c(b,"expand",function()
{
this.Ka(j)
}
);
this.am=ha
}

}
;
t.Lm=ca("Qh");
a.Bx=function(b,c,d)
{
pu.call(this,b,c,d)
}
;
y(Bx,pu);
Bx.prototype.bk=function(b)
{
var c=new zx;
this.H(c);
c.n(b);
c.Ka(n)
}
;
a.Cx=function()
{
T.call(this);
this.ma=k
}
;
y(Cx,zx);
t=Cx.prototype;
t.$k="entry-body";
t.p=function()
{
Vc(this.ma);
Cx.m.p.call(this)
}
;

t.Lh=function()
{
Cx.m.Lh.call(this);
var b=this.yI;
this.Ui||dk(ck(dk(ck(dk(ck(b,"c",this.Ii,this),
{
group:"操作",name:"打开评论"
}
),"f x",this.ce,this),
{
group:"操作",name:"分享"
}
),"shift+c",this.Ax,this),
{
group:"操作",name:"定位到评论框"
}
);
dk(ck(b,"shift+o",this.$S,this),
{
group:"操作",name:"新窗口打开条目"
}
);
this.e.getAttribute("tabindex")===k&&(this.e.tabIndex="-1")
}
;
t.$S=function()
{
window.open($(".question_link",this.e).attr("href"))
}
;
t.ce=function()
{
var b=Cu.D();
b.wk("分享问题","question",this.rt,
{
qid:this.X
}
);
b.show();
Du(b,"tb-webshare-sina")
}
;

t.Ii=function()
{
this.ma||this.zw();
this.ma.oe()
}
;
t.Ax=function()
{
this.ma?this.ma.field.focus():this.Ii()
}
;
t.zw=function()
{
if(!this.ma)
{
var b=$(".zm-item-meta",this.e).get(0),c=$(".toggle-comment",this.e)[0];
this.ma=new Qw(this.X,"question");
this.H(this.ma);
Tw(this.ma,b,c)
}

}
;
a.Dx=function(b)
{
var c=b.type;
if(!la(c))return k;
switch(c.toLowerCase())
{
case "checkbox":case "radio":return b.checked?b.value:k;
case "select-one":return c=b.selectedIndex,0<=c?b.options[c].value:k;
case "select-multiple":for(var c=[],d,e=0;
d=b.options[e];
e++)d.selected&&c.push(d.value);
return c.length?c:k;
default:return la(b.value)?b.value:k
}

}
,a.Ex=function(b,c)
{
var d=b.elements[c];
if(d.type)return Dx(d);
for(var e=0;
e<d.length;
e++)
{
var g=Dx(d[e]);
if(g)return g
}
return k
}
;
a.Fx=function(b)
{
M.call(this);
this.e=b;
b=ra(this.e)&&1==this.e.nodeType?this.e:this.e?this.e.body:k;
this.GQ=!!b&&eg(b);
this.dG=N(this.e,B?"DOMMouseScroll":"mousewheel",this)
}
;
y(Fx,Hd);

Fx.prototype.handleEvent=function(b)
{
var c=0,d=0,e=0,b=b.Yb;
if("mousewheel"==b.type)
{
d=1;
if(A||C&&(nb||Gb("532.0")))d=40;
e=Gx(-b.wheelDelta,d);
la(b.wheelDeltaX)?(c=Gx(-b.wheelDeltaX,d),d=Gx(-b.wheelDeltaY,d)):d=e
}
else e=b.detail,100<e?e=3:-100>e&&(e=-3),la(b.axis)&&b.axis===b.HORIZONTAL_AXIS?c=e:d=e;
pa(this.rG)&&(c=Dt(c,-this.rG,this.rG));
pa(this.sG)&&(d=Dt(d,-this.sG,this.sG));
this.GQ&&(c=-c);
c=new Hx(e,b,c,d);
this.dispatchEvent(c)
}
;
a.Gx=function(b,c)
{
return C&&(mb||ob)&&0!=b%c?b:b/c
}
;

Fx.prototype.p=function()
{
Fx.m.p.call(this);
Ad(this.dG);
delete this.dG
}
;
a.Hx=function(b,c,d,e)
{
c&&this.v(c,i);
this.type="mousewheel";
this.detail=b;
this.gj=d;
this.hj=e
}
;
y(Hx,md);
a.Ix=function()
{
M.call(this)
}
;
y(Ix,Hd);
t=Ix.prototype;
t.Dc=0;
t.Uo=0;
t.So=100;
t.Cl=0;
t.Bk=1;
t.IF=n;
t.Ys=n;
t.ta=function(b)
{
b=Jx(this,b);
this.Dc!=b&&(this.Dc=b+this.Cl>this.So?this.So-this.Cl:b<this.Uo?this.Uo:b,!this.IF&&!this.Ys&&this.dispatchEvent("change"))
}
;
t.W=function()
{
return Jx(this,this.Dc)
}
;
t.Cp=function(b)
{
b=Jx(this,b);
this.Cl!=b&&(this.Cl=0>b?0:this.Dc+b>this.So?this.So-this.Dc:b,!this.IF&&!this.Ys&&this.dispatchEvent("change"))
}
;

t.di=function()
{
return this.Bk==k?this.Cl:Math.round(this.Cl/this.Bk)*this.Bk
}
;
t.Jc=function()
{
return Jx(this,this.Uo)
}
;
t.Yc=function()
{
return Jx(this,this.So)
}
;
t.kx=q("Bk");
a.Jx=function(b,c)
{
return b.Bk==k?c:b.Uo+Math.round((c-b.Uo)/b.Bk)*b.Bk
}
;
a.Kx=function(b)
{
T.call(this,b);
this.kC=k;
this.Ua=new Ix;
N(this.Ua,"change",this.TE,n,this)
}
;
y(Kx,T);
a.Lx=Gd("dragvaluestart"),a.Mx=Gd("dragvalueend"),a.Nx=Gd("dragextentstart"),a.Ox=Gd("dragextentend"),a.Px=Gd("dragstart"),a.Qx=Gd("dragend");
t=Kx.prototype;
t.zb="horizontal";
t.xs=n;
t.uR=n;
t.Vf=10;
t.To=0;
t.LF=j;
t.ic=j;
t.Yd=n;
t.o=function()
{
Kx.m.o.call(this);
var b=this.J().o("div",this.N(this.zb));
this.Z(b)
}
;

t.Z=function(b)
{
Kx.m.Z.call(this,b);
D.add(b,this.N(this.zb));
var b=this.h(),c=Wb(k,"goog-slider-thumb",b)[0];
c||(c=this.J().o("div","goog-slider-thumb"),Oc(c,Xc.uq),b.appendChild(c));
this.Xa=this.Cd=c;
Oc(this.h(),Xc.tK);
Rx(this)
}
;
t.z=function()
{
Kx.m.z.call(this);
this.qe=new Yg(this.Xa);
this.gg=new Yg(this.Cd);
this.qe.bg(this.Yd);
this.gg.bg(this.Yd);
this.qe.Zv=this.gg.Zv=ha;
this.pb=new Vl(this.h());
Sx(this,j);
this.h().tabIndex=0;
Tx(this)
}
;

a.Sx=function(b,c)
{
c?(b.g().c(b.qe,"beforedrag",b.Tr).c(b.gg,"beforedrag",b.Tr).c(b.qe,["start","end"],b.as).c(b.gg,["start","end"],b.as).c(b.pb,"key",b.sf).c(b.h(),"mousedown",b.yj),b.LF&&Ux(b,j)):(b.g().va(b.qe,"beforedrag",b.Tr).va(b.gg,"beforedrag",b.Tr).va(b.qe,["start","end"],b.as).va(b.gg,["start","end"],b.as).va(b.pb,"key",b.sf).va(b.h(),"mousedown",b.yj),b.LF&&Ux(b,n))
}
;
t.Za=function()
{
Kx.m.Za.call(this);
Uc(this.qe,this.gg,this.pb,this.Zj)
}
;

t.Tr=function(b)
{
var c=b.yr==this.qe?this.Xa:this.Cd,d;
"vertical"==this.zb?(d=this.h().clientHeight-c.offsetHeight,d=(d-b.top)/d*(this.Yc()-this.Jc())+this.Jc()):d=b.left/(this.h().clientWidth-c.offsetWidth)*(this.Yc()-this.Jc())+this.Jc();
d=b.yr==this.qe?Math.min(Math.max(d,this.Jc()),this.W()+this.di()):Math.min(Math.max(d,this.W()),this.Yc());
Vx(this,c,d)
}
;

t.as=function(b)
{
var c="start"==b.type;
D.enable(this.h(),"goog-slider-dragging",c);
D.enable(b.target.handle,"goog-slider-thumb-dragging",c);
b=b.yr==this.qe;
c?(this.dispatchEvent(Px),this.dispatchEvent(b?Lx:Nx)):(this.dispatchEvent(Qx),this.dispatchEvent(b?Mx:Ox))
}
;

t.sf=function(b)
{
var c=j;
switch(b.keyCode)
{
case 36:Wx(this,this.Jc());
break;
case 35:Wx(this,this.Yc());
break;
case 33:Xx(this,this.Vf);
break;
case 34:Xx(this,-this.Vf);
break;
case 37:var d=this.Yd&&this.Hd()?1:-1;
Xx(this,b.shiftKey?d*this.Vf:d*this.bq);
break;
case 40:Xx(this,b.shiftKey?-this.Vf:-this.bq);
break;
case 39:d=this.Yd&&this.Hd()?-1:1;
Xx(this,b.shiftKey?d*this.Vf:d*this.bq);
break;
case 38:Xx(this,b.shiftKey?this.Vf:this.bq);
break;
default:c=n
}
c&&b.preventDefault()
}
;

t.yj=function(b)
{
this.h().focus&&this.h().focus();
var c=b.target;
!uc(this.Xa,c)&&!uc(this.Cd,c)&&(this.uR?Wx(this,Yx(this,b)):(this.YA(b),this.$e=Zx(this,Yx(this,b)),this.rF="vertical"==this.zb?this.Is<this.$e.offsetTop:this.Is>$x(this,this.$e)+this.$e.offsetWidth,b=Tb(this.h()),this.g().c(b,"mouseup",this.VA,j).c(this.h(),"mousemove",this.YA),this.ii||(this.ii=new Jd(200),this.g().c(this.ii,Kd,this.YE)),this.YE(),this.ii.start()))
}
;
t.PE=function(b)
{
Xx(this,(0<b.detail?-1:1)*this.bq);
b.preventDefault()
}
;

t.YE=function()
{
var b;
if("vertical"==this.zb)
{
var c=this.Is,d=this.$e.offsetTop;
this.rF?c<d&&(b=ay(this,this.$e)+this.Vf):c>d+this.$e.offsetHeight&&(b=ay(this,this.$e)-this.Vf)
}
else c=this.Is,d=$x(this,this.$e),this.rF?c>d+this.$e.offsetWidth&&(b=ay(this,this.$e)+this.Vf):c<d&&(b=ay(this,this.$e)-this.Vf);
la(b)&&Vx(this,this.$e,b)
}
;
t.VA=function()
{
this.ii&&this.ii.stop();
var b=Tb(this.h());
this.g().va(b,"mouseup",this.VA,j).va(this.h(),"mousemove",this.YA)
}
;

a.by=function(b,c)
{
var d=jg(c,b.h());
return"vertical"==b.zb?d.y:b.Yd&&b.Hd()?b.h().clientWidth-d.x:d.x
}
;
t.YA=function(b)
{
this.Is=by(this,b)
}
;

a.Yx=function(b,c)
{
var d=b.Jc(),e=b.Yc();
if("vertical"==b.zb)
{
var g=b.Xa.offsetHeight,h=b.h().clientHeight-g,g=by(b,c)-g/2;
return(e-d)*(h-g)/h+d
}
g=b.Xa.offsetWidth;
h=b.h().clientWidth-g;
g=by(b,c)-g/2;
return(e-d)*g/h+d
}
,a.ay=function(b,c)
{
if(c==b.Xa)return b.Ua.W();
if(c==b.Cd)return b.Ua.W()+b.Ua.di();
f(Error("Illegal thumb element. Neither minThumb nor maxThumb"))
}
,a.Xx=function(b,c)
{
var d=ay(b,b.Xa)+c,e=ay(b,b.Cd)+c,d=Dt(d,b.Jc(),b.Yc()-b.To),e=Dt(e,b.Jc()+b.To,b.Yc());
cy(b,d,e-d)
}
,a.Vx=function(b,
c,d)
{
var e=k;
c==b.Cd&&(d<=b.Ua.Yc()&&d>=b.Ua.W()+b.To)&&(e=d-b.Ua.W());
var g=e||b.Ua.di();
c==b.Xa&&(d>=b.Jc()&&d<=b.Ua.W()+g-b.To)&&(c=g-(d-b.Ua.W()),Jx(b.Ua,d)+Jx(b.Ua,c)==Jx(b.Ua,d+c)&&(cy(b,d,c),e=k));
e!=k&&b.Ua.Cp(e)
}
,a.cy=function(b,c,d)
{
b.Jc()<=c&&(c<=b.Yc()-d&&b.To<=d&&d<=b.Yc()-c)&&!(c==b.W()&&d==b.di())&&(b.Ua.Ys=j,b.Ua.Cp(0),b.Ua.ta(c),b.Ua.Cp(d),b.Ua.Ys=n,b.TE())
}
;
t.Jc=function()
{
return this.Ua.Jc()
}
;
t.Yc=function()
{
return this.Ua.Yc()
}
;

a.Zx=function(b,c)
{
return c<=b.Ua.W()+b.Ua.di()/2?b.Xa:b.Cd
}
;
t.TE=function()
{
Tx(this);
Rx(this);
this.dispatchEvent("change")
}
;

a.Tx=function(b)
{
if(b.Xa&&!b.xs)
{
var c=dy(b,ay(b,b.Xa)),d=dy(b,ay(b,b.Cd));
if("vertical"==b.zb)b.Xa.style.top=c.y+"px",b.Cd.style.top=d.y+"px",b.Qb&&(c=ey(d.y,c.y,b.Xa.offsetHeight),b.Qb.style.top=c.offset+"px",b.Qb.style.height=c.size+"px");
else
{
var e=b.Yd&&b.Hd()?"right":"left";
b.Xa.style[e]=c.x+"px";
b.Cd.style[e]=d.x+"px";
b.Qb&&(c=ey(c.x,d.x,b.Xa.offsetWidth),b.Qb.style[e]=c.offset+"px",b.Qb.style.width=c.size+"px")
}

}

}
,a.ey=function(b,c,d)
{
var e=Math.ceil(d/2);
return
{
offset:b+e,size:Math.max(c-
b+d-2*e,0)
}

}
,a.dy=function(b,c)
{
var d=new Ob;
if(b.Xa)
{
var e=b.Jc(),g=b.Yc(),g=c==e&&e==g?0:(c-e)/(g-e);
"vertical"==b.zb?(e=b.h().clientHeight-b.Xa.offsetHeight,g=Math.round(g*e),d.x=$x(b,b.Xa),d.y=e-g):(e=Math.round(g*(b.h().clientWidth-b.Xa.offsetWidth)),d.x=e,d.y=b.Xa.offsetTop)
}
return d
}
,a.Wx=function(b,c)
{
c=Dt(c,b.Jc(),b.Yc());
b.xs&&b.lr.stop(j);
var d=new Mm,e,g=Zx(b,c),h=b.W(),l=b.di(),m=ay(b,g),p=dy(b,m);
e=b.kx();
Math.abs(c-m)<e&&(c=Dt(m+(c>m?e:-e),b.Jc(),b.Yc()));
Vx(b,g,c);
m=dy(b,ay(b,g));

e="vertical"==b.zb?[$x(b,g),m.y]:[m.x,g.offsetTop];
p=new ut(g,[p.x,p.y],e,100);
p.bg(b.Yd);
d.add(p);
if(b.Qb)
{
var p=dy(b,h),r=dy(b,h+l),l=p;
e=r;
g==b.Xa?l=m:e=m;
"vertical"==b.zb?(g=ey(r.y,p.y,b.Xa.offsetHeight),l=ey(e.y,l.y,b.Xa.offsetHeight),m=new ut(b.Qb,[$x(b,b.Qb),g.offset],[$x(b,b.Qb),l.offset],100),g=new st(b.Qb,g.size,l.size,100)):(g=ey(p.x,r.x,b.Xa.offsetWidth),l=ey(l.x,e.x,b.Xa.offsetWidth),m=new ut(b.Qb,[g.offset,b.Qb.offsetTop],[l.offset,b.Qb.offsetTop],100),g=new tt(b.Qb,g.size,l.size,100));

m.bg(b.Yd);
g.bg(b.Yd);
d.add(m);
d.add(g)
}
b.kC&&(h=b.kC.wZ(h,c,100),z.forEach(h,function(b)
{
d.add(b)
}
));
b.lr=d;
b.g().c(d,"end",b.rN);
b.xs=j;
d.play(n)
}
;
t.rN=function()
{
this.xs=n
}
;
t.Fp=function(b)
{
if(this.zb!=b)
{
var c=this.N(this.zb),d=this.N(b);
this.zb=b;
this.h()&&(D.qV(this.h(),c,d),b=this.Yd&&this.Hd()?"right":"left",this.Xa.style[b]=this.Xa.style.top="",this.Cd.style[b]=this.Cd.style.top="",this.Qb&&(this.Qb.style[b]=this.Qb.style.top="",this.Qb.style.width=this.Qb.style.height=""),Tx(this))
}

}
;

t.p=function()
{
Kx.m.p.call(this);
this.ii&&this.ii.F();
delete this.ii;
this.lr&&this.lr.F();
delete this.lr;
delete this.Xa;
delete this.Cd;
this.Qb&&delete this.Qb;
this.Ua.F();
delete this.Ua;
this.pb&&(this.pb.F(),delete this.pb);
this.Zj&&(this.Zj.F(),delete this.Zj);
this.qe&&(this.qe.F(),delete this.qe);
this.gg&&(this.gg.F(),delete this.gg)
}
;
t.bq=1;
t.kx=function()
{
return this.Ua.kx()
}
;
t.W=function()
{
return this.Ua.W()
}
;
t.ta=function(b)
{
Vx(this,this.Xa,b)
}
;
t.di=function()
{
return this.Ua.di()
}
;

t.Cp=function(b)
{
Vx(this,this.Cd,this.Ua.W()+b)
}
;
t.w=function(b)
{
R(this.h(),b);
b&&Tx(this)
}
;
a.Rx=function(b)
{
var c=b.h();
if(c)
{
var d=b.Jc();
Pc(c,Wc.GK,d);
d=b.Yc();
Pc(c,Wc.FK,d);
b=b.W();
Pc(c,Wc.HK,b)
}

}
,a.Ux=function(b,c)
{
c?(b.Zj||(b.Zj=new Fx(b.h())),b.g().c(b.Zj,"mousewheel",b.PE)):b.g().va(b.Zj,"mousewheel",b.PE)
}
;
t.cb=function(b)
{
if(this.ic!=b&&this.dispatchEvent(b?"enable":"disable"))this.ic=b,Sx(this,b),b||this.VA(),D.enable(this.h(),"goog-slider-disabled",!b)
}
;
t.isEnabled=q("ic");

a.$x=function(b,c)
{
return b.Yd?Xg(c):c.offsetLeft
}
;
a.fy=function(b)
{
Kx.call(this,b);
this.Ua.Cp(0)
}
;
y(fy,Kx);
fy.prototype.N=function(b)
{
return"vertical"==b?"goog-slider-vertical":"goog-slider-horizontal"
}
;
a.gy=function(b)
{
this.options=$.extend(
{

}
,this.Q,b)
}
;
y(gy,T);
t=gy.prototype;
t.Q=
{
gD:310,hD:310,Fg:250,Gg:250,iR:2,opacity:0.25,q0:"#eee"
}
;
t.Z=function(b)
{
gy.m.Z.call(this,b);
this.src=this.e.src;
this.options.src=this.src;
this.options.an=(this.options.gD-this.options.Fg)/2;
this.options.$m=(this.options.hD-this.options.Gg)/2;
this.ir()
}
;

t.ir=function()
{
var b=this.options;
this.DB=$(Bk('            <div class="avatar-editor-container" style="width:<%=containerWidth%>px">              <div class="avatar-editor-container-inner" style="height:<%=containerHeight%>px;
">                <div class="avatar-editor-window" style="height:<%=windowHeight%>px;
width:<%=windowWidth%>px;
margin:<%=windowMarginTop%>px <%=windowMarginLeft%>px;
">                  <div class="avatar-editor-window-shadow" style="height:<%=windowHeight%>px;
width:<%=windowWidth%>px;
"></div>                  <div class="avatar-editor-window-inner" style="width:<%=containerWidth%>px;
 height:<%=containerHeight%>px;
margin:-<%=windowMarginTop%>px 0 0 -<%=windowMarginLeft%>px;
">                    <img class="inner" title="拖动相片"/>                  </div>                </div>                <img class="outer" style="opacity:<%=opacity%>;
"/>              </div>              <div class="goog-slider-wrap">                  <i class="zg-icon image-minus"></i>                  <i class="zg-icon image-plus"></i>                  <div class="goog-slider">                      <div class="line"></div>                      <div class="goog-slider-thumb"></div>                  </div>              </div>            </div>',
{
containerWidth:b.hD,
containerHeight:b.gD,windowHeight:b.Fg,windowWidth:b.Gg,windowMarginTop:b.an,windowMarginLeft:b.$m,src:b.src,opacity:b.opacity
}
));
this.Jb=this.DB[0];
this.DB.insertBefore(this.e);
R(this.e,n);
this.GM=J("avatar-editor-container-inner",this.Jb);
this.ms=J("outer",this.Jb);
this.Wx=J("inner",this.Jb);
this.cn=$(this.ms);
this.Bu=$(this.Wx);
this.nF=0;
this.cn.load(v(this.iJ,this));
this.Bu.load(v(this.iJ,this));
this.Wx.src=this.ms.src=this.options.src;
this.bV=J("goog-slider",this.Jb)
}
;

t.z=function()
{
this.OA=new fy;
this.OA.n(this.bV);
this.g().c(this.GM,["mousedown","touchstart"],function(b)
{
var c=new Yg(this.Jb);
c.addEventListener("drag",v(function(b)
{
var c=this.zoom;
this.Se=
{
jq:this.options.Gg/c,jo:this.options.Fg/c,x:(this.options.$m-(this.AF.left+(b.clientX-this.Yt)))/c,y:(this.options.an-(this.AF.top+(b.clientY-this.Zt)))/c
}
;
hy(this)
}
,this));
c.addEventListener("end",v(function()
{
c.F()
}
,this));
c.Um(b);
this.Um(b)
}
);
this.g().c(this.Jb,["touchmove"],function(b)
{
b.stopPropagation();

b.preventDefault()
}
);
this.g().c(this.OA,"change",function()
{
var b=this.OA.W(),c=this.IJ;
iy(this,(this.zW-c)*b/100+c)
}
)
}
;
a.iy=function(b,c)
{
b.n_=b.zoom;
b.zoom=c;
jy(b,b.Se.jq/2+b.Se.x,b.Se.jo/2+b.Se.y)
}
,a.jy=function(b,c,d)
{
var e=b.zoom;
b.Se=
{
jq:b.options.Gg/e,jo:b.options.Fg/e,x:c-b.options.Gg/e/2,y:d-b.options.Fg/e/2
}
;
hy(b)
}
;
t.iJ=function()
{
this.dQ||(this.Wx.complete&&this.ms.complete?this.v():(this.nF++,2<=this.nF&&this.v()))
}
;

t.v=function()
{
this.ls=this.cn.width();
this.ks=this.cn.height();
var b=this.options.Gg/this.ls,c=this.options.Fg/this.ks;
this.IJ=b=c>b?c:b;
this.zW=this.IJ*this.options.iR;
this.Se=
{
jo:this.options.Gg/b,jq:this.options.Fg/b,x:0,y:0
}
;
iy(this,b);
jy(this,this.ls/2,this.ks/2);
this.dQ=j
}
;
t.Um=function(b)
{
this.Yt=b.clientX;
this.Zt=b.clientY;
this.AF=this.Bu.position();
this.H_=this.cn.position()
}
;

a.hy=function(b)
{
var c=b.zoom,d=Dt(b.options.$m-b.Se.x*c,b.options.Gg+b.options.$m-b.ls*c,b.options.$m),e=Dt(b.options.an-b.Se.y*c,b.options.Fg+b.options.an-b.ks*c,b.options.an),g=
{
width:c*b.ls,height:c*b.ks,left:d,top:e
}
;
b.cn.css(g);
b.Bu.css(g);
b.Se.x=(b.options.$m-d)/c;
b.Se.y=(b.options.an-e)/c
}
;
t.support=function()
{
return"getContext"in document.createElement("canvas")&&n
}
;
a.ly=function(b,c,d)
{
T.call(this);
this.Lq=b||ky;
this.tN=c;
this.jU=d||"l"
}
;
y(ly,T);
a.ky=1;
t=ly.prototype;
t.Z=function(b)
{
this.e=b;
S.Ha()&&(S.xe||this.Lq===ky)?this.o():$(b).click($.proxy(this.jR,this))
}
;

t.o=function()
{
this.Sk=$(Bk('            <form target="av_up_frame" style="display:none;
" method="post" enctype="multipart/form-data" action="<%=uploadAction%>">                <label for="avt_file"></label>                <input type="file" accept="image/*" name="picture" id="avt_file" />                <input type="hidden" name="handle_mode" value="server1" />            </form>',
{
uploadAction:"/upload"
}
));
this.LJ=$('<iframe id="av_up_frame" src="about:_blank" name="av_up_frame" style="position: absolute;
 height: 0px;
 width: 0px;
 left: -9000px;
"></iframe>');

this.LJ.appendTo(document.body);
this.input=this.Sk.find("input[type=file]")[0];
A?(this.Sk.find("label").html($(this.e).html()),this.e.innerHTML="",$(this.e).append(this.Sk),this.Sk.addClass("avatar-editor-form-ie")):(this.Sk.insertAfter(this.e),$(this.e).click($.proxy(function()
{
this.input.click()
}
,this)));
this.g().c(this.input,"change",this.Te)
}
;
t.jR=function()
{
return S.Ha()&&!S.xe&&this.Lq!==ky?(ll.D().w(j),n):!S.Ha()?(vk.D().w(j),n):j
}
;

t.Te=function(b)
{
b=this.input=b.target;
this.$l=this.Vx=this.Gj="";
if(this.gf)this.gf.na();
else
{
this.gf=new yi(k,n);
this.gf.eb("修改图片");
var c=Mh.RJ,d=Mh.JK,e=new Eh;
e.set(c,"取消",n,j).set(d,"确定",j);
Ih(this.gf,e);
this.g().c(this.gf,Jh,function(b)
{
if(b.key===d)
{
if(this.Mn.support())
{
var c=this.Mn,b=$("<canvas>",
{
width:c.options.Gg,height:c.options.Fg
}
),e=b[0];
$(document.body).append(e);
var m=b[0].getContext("2d"),p=c.Se;
m.drawImage(c.ms,p.x,p.y,p.jq,p.jo,0,0,c.options.Gg,c.options.Fg);
c=e.toDataURL("image/png");

b.remove();
b=c
}
else b=this.Mn.Se;
this.Gj=b;
my(this);
this.gf.w(n);
return n
}

}
)
}
e=this.gf.aa();
c=$("<div class='new-avatar-editor-loading'><div><span></span></div><div>正在上传...</div></div>");
e=$(e);
e.html("");
e.append(c);
this.gf.w(j);
D.add(this.gf.e,"avatar-edit-dialog");
window.FileReader&&(b.files&&b.files[0])&&(this.file=b=b.files[0],c=new window.FileReader,c.onload=v(function(b)
{
this.$l=b.target.result;
this.hp()
}
,this),c.readAsDataURL(b));
this.g().c(Y,"iframe_data",function(b)
{
(b=b.mb)&&!b.r?(this.$l=
b.data.pic_url,this.Vx=b.data.hashval,window.FileReader||this.hp(),my(this)):U(b.msg)
}
);
this.Sk[0].submit();
b=this.input.cloneNode();
oc(b,this.input);
this.input=b;
this.g().c(this.input,"change",this.Te)
}
;
t.hp=function()
{
var b=this.gf.aa();
this.Ux=new Image;
this.Ux.src=this.$l;
b=$(b);
b.html("");
b.append(this.Ux);
this.Mn=new gy;
this.Mn.n(this.Ux)
}
;

a.my=function(b)
{
if(b.Vx&&b.Gj)
{
b.dispatchEvent("beforepost");
var c=
{
type:b.Lq,dest_id:b.Lq===ky?S[3]:b.tN,return_size:b.jU
}
,c=b.Mn.support()?$.extend(c,
{
handle_mode:"client",pic_body:b.Gj.replace(/data\:image\/\w
{
3,4
}
;
base64,/,""),fileName:b.file.name
}
):$.extend(c,
{
handle_mode:"server2",x:Math.round(b.Gj.x),y:Math.round(b.Gj.y),height:Math.round(b.Gj.jo),width:Math.round(b.Gj.jq),hashval:b.Vx
}
);
$.post("/upload",c,$.proxy(function(b)
{
b&&!b.r?this.data=b.msg:U(b.msg);
this.dispatchEvent(
{
type:"success",
src:this.data
}
);
this.gf.w(n)
}
,b),"json")
}

}
;
t.getData=function()
{
return!this.data?k:/(\w*)_\w/.exec(this.data)[1]
}
;
a.ny=function()
{
T.call(this)
}
;
y(ny,T);
ny.prototype.Z=function(b)
{
ny.m.Z.call(this,b);
this.g().c(Y,"sina_callback",this.mm);
this.g().c(Y,"qq_callback",this.mm);
this.g().c(Y,"qqconn_callback",this.mm);
this.g().c(I("zh-setting-page-bind-sina-unbindbtn"),"click",this.uz);
this.g().c(I("zh-setting-page-bind-qq-unbindbtn"),"click",this.uz);
this.g().c(I("zh-setting-page-bind-qqconn-unbindbtn"),"click",this.uz)
}
;

ny.prototype.mm=function(b)
{
if("qq_callback"===b.type)
{
var c=Tg.name=b.mb.name,b=Tg.id=b.mb.id;
I("zh-setting-page-bind-qqname").innerHTML='<a href="http://t.qq.com/'+b+'" target="_blank">@'+c+"</a>";
oy(j)
}
else"sina_callback"===b.type?(c=Sg.name=b.mb.name,b=Sg.id=b.mb.id,I("zh-setting-page-bind-sinaname").innerHTML='<a href="http://weibo.com/'+b+'" target="_blank">@'+c+"</a>",py(j)):"qqconn_callback"===b.type&&(I("zh-setting-page-bind-qqconnname").innerHTML=b.mb.name,qy(j))
}
;

ny.prototype.uz=function(b)
{
var c=b.target.getAttribute("data-weibotype");
if(window.confirm("你确定要解除与"+
{
sina:"新浪微博",qq:"腾讯微博",qqconn:" QQ "
}
[c]+"的绑定吗？"))
{
var d=new V(j);
P(this.g(),d,"success",function()
{
var b=Ie(d);
b&&!b.r?"sina"===c?py():"qq"===c?oy():"qqconn"===c&&qy():U(b.msg)
}
);
d.ajax("/oauth/unbind/"+c)
}

}
;

a.py=function(b)
{
R(I("zh-setting-page-bind-sina-binded-wrap"),!!b);
R(I("zh-setting-page-bind-sina-tobind-wrap"),!b)
}
,a.oy=function(b)
{
R(I("zh-setting-page-bind-qq-binded-wrap"),!!b);
R(I("zh-setting-page-bind-qq-tobind-wrap"),!b)
}
,a.qy=function(b)
{
R(I("zh-setting-page-bind-qqconn-binded-wrap"),!!b);
R(I("zh-setting-page-bind-qqconn-tobind-wrap"),!b)
}
;
a.ry=function()
{
T.call(this)
}
;
y(ry,T);
t=ry.prototype;

t.Z=function(b)
{
ry.m.Z.call(this,b);
if(b=J("profile-edit-avatar-btn"))this.rn=new ly,this.rn.n(b),this.g().c(this.rn,"beforepost",function()
{
$(".zm-avatar-editor-preview").parent().append($("<div class='avatar-edit-preview-loading'><span></span></div>"))
}
),this.g().c(this.rn,"success",function(b)
{
$("img.zm-avatar-editor-preview").attr("src",b.src);
$(".avatar-edit-preview-loading").remove()
}
);
this.L=[];
var c=this;
$(".editable-group",this.e).each(function()
{
var b=new um;
c.L.push(b);
b.n(this)
}
);
b=I("zm-profile-edit-submit");

this.g().c(b,"click",this.sz);
(new ny).n(this.e);
$(this.e).on("change","input, textarea, select",function()
{
c.Ud()
}
)
}
;

t.z=function()
{
ry.m.z.call(this);
var b=I("zm-profile-progress-anim"),c=new sy;
c.addEventListener("update",function()
{
var d=100*c.W()|0;
10>d&&(d=10);
b.style.width=b.innerHTML=d+"%"
}
);
z.forEach(this.L,function(b,d)
{
c.watch(
{
name:"name"+d,target:b,Yh:["add","remove"],Sh:function()
{
return!!b.xd.children().length
}

}
)
}
,this);
var d=this.e,e=I("zm-profile-edit-male"),g=I("zm-profile-edit-female"),h=I("zm-profile-edit-description"),l=$(".business-selection select")[0],m=I("zm-profile-edit-expert-disable");

c.watch(
{
name:"expert_progress",target:I("zm-profile-edit-expert-enable"),Yh:["change"],Sh:function()
{
return k!==Ex(d,"enable_expert")
}

}
).watch(
{
name:"expert_progress",target:m,Yh:["change"],Sh:function()
{
return k!==Ex(d,"enable_expert")
}

}
).watch(
{
name:"gender_progress",target:e,Yh:["change"],Sh:function()
{
return k!==Ex(d,"gender")
}

}
).watch(
{
name:"gender_progress",target:g,Yh:["change"],Sh:function()
{
return k!==Ex(d,"gender")
}

}
).watch(
{
name:"desc_progress",target:h,Yh:["blur"],Sh:function()
{
return!!La(h.value)
}

}
).watch(
{
name:"business_progress",
target:h,Yh:["blur"],Sh:function()
{
return!!La(h.value)
}

}
).watch(
{
name:"headline_progress",target:l,Yh:["blur"],Sh:function()
{
return!!La(l.value)
}

}
)
}
;
t.Ud=function()
{
$(window).on("beforeunload.profileedit",v(s("你的更改还未保存，确认离开该页面吗？"),this))
}
;
t.Ge=function()
{
$(window).off("beforeunload.profileedit")
}
;

t.sz=function()
{
function b(b)
{
U(ma(b)?b[0][1]:b)
}
var c=$("#zm-profile-edit-male").is(":checked")?1:0,d=$("#zm-profile-edit-headline").val(),e=$("#zm-profile-edit-description").val(),g=$(".business-selection select").val(),h=[];
$("#zm-profile-edit-loc-container").children().each(function()
{
h.push($(this).data("title"))
}
);
var l=[];
$("#zm-profile-edit-co-container").children().each(function()
{
var b=$(this);
l.push([b.data("title"),b.data("sub-title")||""])
}
);
var m=[];
$("#zm-profile-edit-edu-container").children().each(function()
{
var b=
$(this);
m.push([b.data("title"),b.data("sub-title")||""])
}
);
var p=$("#zm-profile-edit-weibo-enable").is(":checked")?1:0,r=$("#zm-profile-edit-expert-enable").is(":checked")?1:0,c=E.filter(
{
avatar_path:this.rn?this.rn.getData():k,gender:c,headline:d,description:e,location:h,business:g,employment:l,education:m,enable_weibo:p,enable_expert:r
}
,js),x=v(function()
{
this.Ge();
window.location.href="/people/"+S[1]+"/about"
}
,this),d=new V(j);
d.addEventListener("complete",function()
{
var c;
try
{
c=Ie(this)
}
catch(d)
{

}
c&&
!c.r&&qa(x)?x.call(this,c):qa(b)&&b.call(this,c.msg)
}
);
d.ajax("/people/edit","data="+encodeURIComponent(ad(c)))
}
;
a.sy=function()
{
this.Hz=
{

}

}
;
y(sy,Hd);
sy.prototype.update=function(b,c)
{
this.Hz[b]=c;
this.dispatchEvent(
{
type:"update"
}
);
return this
}
;
sy.prototype.watch=function(b)
{
var c=v(function()
{
this.update(b.name,b.Sh())
}
,this);
N(b.target,b.Yh,c);
c();
return this
}
;
sy.prototype.W=function()
{
var b=E.Ja(this.Hz);
return b.length&&z.filter(b,Boolean).length/b.length
}
;
a.ty=function()
{
this.mj="editing";
T.call(this)
}
;
y(ty,T);
ty.prototype.Z=function(b)
{
ty.m.Z.call(this,b);
this.K=$(b);
this.K.on("click",'a[href^="javascript"]',$.proxy(this.ga,this));
this.K.on("click",'a[href^="javascript"], input',n);
this.K.on("click",".item",$.proxy(this.ZS,this))
}
;
a.uy=function(b,c,d)
{
if(!Dg.Nc||navigator.userAgent.match(/iPad/i)!=k)b=$(".item",b.K).index(c),c.siblings().eq(b-b%2).height(d?"auto":c.height())
}
;

ty.prototype.ZS=function(b)
{
var c=$(b.currentTarget),d=c.data("href"),b=b.metaKey||b.ctrlKey;
d&&!c.hasClass(this.mj)&&(b?window.open(d):location.href=d)
}
;

ty.prototype.ga=function(b)
{
var c=$(b.currentTarget),d=c.closest(".item"),b=c.attr("name");
if("edit"===b)c.closest(".description").hide().siblings(".description-edit").show().find("input").focus().closest(".item").addClass(this.mj).closest(".skilled-topics").addClass(this.mj),uy(this,d);
else if("cancel"===b)c.closest(".description-edit").hide().siblings(".description").show().closest(".item").removeClass(this.mj).closest(".skilled-topics").removeClass(this.mj),uy(this,d,j);
else if("save"===b)
{
var e=
new V(j);
this.g().c(e,"success",function()
{
var b=Ie(e);
b.r?U(b.msg):(c.closest(".description-edit").hide().siblings(".description").show().children(".des").text(b.msg).siblings(".edit").addClass("zu-edit-button").children(".edit-msg").html("修改").closest(".item").removeClass(this.mj).closest(".skilled-topics").removeClass(this.mj),uy(this,d,j))
}
);
e.ajax("/topic/bio/update","tid="+c.closest(".item").data("id")+"&bio="+c.parent().siblings("input").val(),"POST")
}

}
;
a.vy=function()
{
T.call(this)
}
;
y(vy,T);

vy.prototype.Z=function(b)
{
vy.m.Z.call(this);
if(b&&(this.K=$(b),$(".editable-group",this.K).each(function()
{
(new wy).n(this)
}
),(b=I("profile-header-description-input"))&&new Po(b),(b=J("zm-profile-header-avatar-container"))&&D.has(b,"self")))
{
var c=new ly(ky);
c.n(b);
this.g().c(c,"beforepost",function()
{
$(".zm-avatar-editor-preview").parent().append($("<div class='avatar-edit-preview-loading'><span></span></div>"))
}
);
this.g().c(c,"success",function(b)
{
b.src&&(J("zm-avatar-editor-preview").src=b.src,
nt("ProfileHeaderV2","save",
{
data:
{
avatar_path:c.getData()
}

}
,function()
{
$(".avatar-edit-preview-loading").remove()
}
))
}
)
}

}
;
a.wy=function()
{
T.call(this)
}
;
y(wy,T);
t=wy.prototype;
t.Z=function(b)
{
wy.m.Z.call(this);
this.K=$(b);
this.te=$(".info-wrap",this.K);
this.Od=$(".edit-wrap",this.K);
this.DW=$(".title",this.te);
this.BW=$("input",this.Od)
}
;

t.z=function()
{
wy.m.z.call(this);
this.K.on("click","[name='edit']",$.proxy(function()
{
this.K.addClass("editing");
var b=this.Od.find("input").get(0);
b?b.focus():(b=this.Od.find("textarea").get(0))&&b.focus()
}
,this));
var b=this;
this.yq=[];
$("input[type=text]",this.K).each(function()
{
var c=new vm("/topic/autocomplete",this,$(this).parents(".topic-input-wrap")[0]);
b.yq.push(c)
}
);
this.Od.on("keydown","input",function(b)
{
13===b.keyCode&&setTimeout(function()
{
var c=$(b.target),g=c.parents(".edit-wrap").children().index(c.parent()),
h=c.parents(".edit-wrap").find("input, select").get(g+1),g=c.parents(".edit-wrap").find("input, select").get(g-1);
c.val()&&(h?h.focus():g&&!$(g).val()&&g.focus())
}
)
}
);
this.Od.on("click","[name='cancel'], [name='save']",$.proxy(function(b)
{
b=b.target.name;
"cancel"===b?this.cancel():"save"===b&&this.save()
}
,this));
var c=$(".fold-wrap");
c.click(function(b)
{
"fold"===b.target.name?c.addClass("fold"):"unfold"===b.target.name&&c.removeClass("fold")
}
)
}
;

t.save=function()
{
var b=this.K.data("name");
if("location"===b)
{
var b=this.Od.find("input.location"),c=this.Od.find("select"),d=this.Od.find("input.male").is(":checked")?1:0;
nt("ProfileHeaderV2","save",
{
data:
{
location:[b.val()],business:c.val(),gender:d
}

}
,function(b)
{
b=b.msg;
b.location[0].html||(b.location[0].html="<a href='javascript:;
' class='zg-link-litblue-normal' name='edit'>填写居住地</a>");
b.business.html||(b.business.html="<a href='javascript:;
' class='zg-link-litblue-normal' name='edit'>填写行业</a>");

this.te.find("span.location").attr("title",b.location[0].text).html(b.location[0].html);
this.te.find("span.business").attr("title",b.business.text).html(b.business.html);
this.te.find("i.gender").removeClass("male female").addClass(1===parseInt(b.gender,10)?"male":"female");
this.cancel()
}
,this.si,this)
}
else"employment"===b?(c=this.Od.find("input.employment"),b=this.Od.find("input.position"),c=c.val(),b=b.val(),nt("ProfileHeaderV2","save",
{
data:
{
employment:[[c,b]]
}

}
,function(b)
{
b=b.msg;
!b.employment[0][0].text&&
!b.employment[0][1].text?this.K.addClass("empty"):this.K.removeClass("empty");
b.employment[0][0].html||(b.employment[0][0].html="<a href='javascript:;
' class='zg-link-litblue-normal' name='edit'>填写公司信息</a>");
b.employment[0][1].html||(b.employment[0][1].html="<a href='javascript:;
' class='zg-link-litblue-normal' name='edit'>填写职位</a>");
this.te.find(".employment").attr("title",b.employment[0][0].text).html(b.employment[0][0].html);
this.te.find(".position").attr("title",b.employment[0][1].text).html(b.employment[0][1].html);

this.cancel()
}
,this.si,this)):"education"===b?(c=[this.Od.find("input.education"),this.Od.find("input.education-extra")],b=c[0].val(),c=c[1].val(),nt("ProfileHeaderV2","save",
{
data:
{
education:[[b,c]]
}

}
,function(b)
{
b=b.msg;
!b.education[0][0].text&&!b.education[0][1].text?this.K.addClass("empty"):this.K.removeClass("empty");
b.education[0][0].html||(b.education[0][0].html="<a href='javascript:;
' class='zg-link-litblue-normal' name='edit'>填写学校信息</a>");
b.education[0][1].html||(b.education[0][1].html="<a href='javascript:;
' class='zg-link-litblue-normal' name='edit'>填写专业</a>");

this.te.find(".education").attr("title",b.education[0][0].text).html(b.education[0][0].html);
this.te.find(".education-extra").attr("title",b.education[0][1].text).html(b.education[0][1].html);
this.cancel()
}
,this.si,this)):"description"===b&&(b=this.Od.find("textarea.description"),nt("ProfileHeaderV2","save",
{
data:
{
description:b.val()
}

}
,function(b)
{
b=b.msg;
b.description.text?this.K.removeClass("empty"):(b.description.fold_html="<a href='javascript:;
' class='zg-link-litblue-normal' name='edit'>填写个人简介</a>",
b.description.unfold_html="<a href='javascript:;
' class='zg-link-litblue-normal' name='edit'>填写个人简介</a>",this.K.addClass("empty"));
this.te.find(".fold-item .content").empty().html(b.description.fold_html);
this.te.find(".unfold-item .content").html(b.description.unfold_html);
b.description.shortened?this.te.removeClass("disable-fold"):this.te.addClass("disable-fold");
this.cancel()
}
,this.si,this))
}
;
t.si=function(b)
{
U(b.msg)
}
;
t.cancel=function()
{
this.K.removeClass("editing")
}
;
a.xy=function()
{
M.call(this);
this.fh="zm-item";
this.kZ="zm-item-top-btn";
this.sU=j
}
;
y(xy,Rk);
t=xy.prototype;
t.v=function(b)
{
this.Jb=b;
this.g().c(b,"click",this.ga);
this.refresh()
}
;
t.Hf=ca("fh");

t.ga=function(b)
{
if(b.target)
{
var c=sk(this.Jb,b.target);
c&&(this.type=c.getAttribute("data-type"),this.id=c.getAttribute("data-id"),this.action=c.name,this.item=Kc(b.target,k,this.fh),this.type&&(this.id&&this.action&&this.item)&&(this.HJ||(this.HJ=j,this.xhr=new V(j),this.g().c(this.xhr,"complete",this.zf),this.xhr.ajax("/people/"+("top"===this.action?"pin":"unpin")+"_"+this.type,this.type+"_id="+this.id,"POST")),this.iZ=c))
}

}
;

t.zf=function()
{
if("cancel-top"===this.action)hk(this.item,j);
else if("top"===this.action)
{
var b=Xb(this.fh,this.Jb);
this.M_=dg(this.item).y;
b&&2<=b.length&&lc(L(this.item),J(this.fh,this.Jb));
this.scroll();
ok(this.item);
R(J("zm-item-top-btn-top",this.item),n);
R(J("zm-item-top-btn-cancel",this.item),j);
this.refresh()
}
this.HJ=n
}
;
t.scroll=function()
{
if(this.sU)
{
var b=J("zm-profile-section-wrap"),c=Nc(Ub((fa||window).document)).y;
b&&0>dg(b).y-c&&b.scrollIntoView()
}

}
;

t.refresh=function()
{
var b=Xb(this.fh,this.Jb);
b&&0<b.length&&z.forEach(b,function(b,d)
{
if(0!==d)
{
var e=J("zm-item-top-btn-top",b);
e&&R(e,j)
}

}
,this)
}
;
a.yy=function(b,c)
{
b.g().c(c,"next",b.refresh)
}
;
a.zy=function()
{
this.Qw=["zg-btn-follow","zg-btn-unfollow"];
this.Rw="people"
}
;
y(zy,T);
zy.prototype.z=function()
{
this.g().c(this.e,"click",this.ga)
}
;
zy.prototype.ga=function(b)
{
var c=sk(this.e,b.target);
this.Qh&&this.Qh(c);
c&&(c.name&&"focus"===c.name)&&wk(c,this.Rw,function()
{
c.getAttribute("data-focusme")&&(D.has(c,"zg-btn-follow")?c.setAttribute("data-tip","s$b$对方已关注你"):c.setAttribute("data-tip","s$b$已互相关注"))
}
,this.Qw,
{
NZ:"question"===this.Rw?"关注问题":k
}
)
}
;
zy.prototype.Lm=ca("Qh");
a.By=function(b,c,d,e)
{
M.call(this);
this.Td=b;
this.Wh=c;
this.sg=d;
this.PD=e||Ay;
b.maxLength=d;
this.Nj=new wu(b);
N(this.Nj,"input",this.ap,n,this);
this.$i()
}
;
y(By,Hd);
a.Ay=0;
By.prototype.ap=function()
{
this.$i()
}
;
By.prototype.$i=function()
{
var b=this.Td.value.length;
if(b>this.sg)
{
var c=this.Td.scrollTop,d=this.Td.scrollLeft;
this.Td.value=this.Td.value.substring(0,this.sg);
b=this.sg;
this.Td.scrollTop=c;
this.Td.scrollLeft=d
}
this.Wh&&zc(this.Wh,1==this.PD?b:this.sg-b)
}
;

By.prototype.p=function()
{
By.m.p.call(this);
delete this.Td;
this.Nj.F();
this.Nj=k
}
;
a.Cy=function(b)
{
M.call(this);
this.T=k;
this.X=b;
this.It=0;
this.HH=""
}
,a.Dy=void 0;
y(Cy,Rk);
t=Cy.prototype;
t.v=function()
{
this.ji||(this.ji=j,this.o(),this.Da())
}
;
t.Da=function()
{
A||(new gp("搜索问题")).n(this.yc);
this.L=new go("/redirect-question/autocomplete",this.yc,k,k,I("zh-question-redirect-diag-content"),n);
this.L.pn=n;
this.L.Jf(j);
this.g().c(this.L,Ll.Hh.Ri,Gk);
this.g().c(this.L,"select",this.DS).c(this.VL,"click",function()
{
this.T.w(n)
}
)
}
;

t.DS=function()
{
var b=this.L.kg();
this.yc.value="";
var c=b[3],b=b[1];
this.T.w(n);
this.yc.value="";
this.xhr=new V(j);
P(this.g(),this.xhr,"complete",this.jL);
this.xhr.ajax("/question/redirect","qid="+this.X+"&rqid="+c);
this.It=c;
this.HH=b
}
;
t.jL=function()
{
var b=Ie(this.xhr);
b&&(b.r?U(b.msg):this.Ra?(this.Ra.innerHTML="已经重定向",this.Ra.setAttribute("data-disabled",1)):this.dispatchEvent("change"))
}
;

t.o=function()
{
this.e=K("div",
{
id:"zh-question-redirect-diag"
}
,["将问题跳转至",K("div",
{
id:"zh-question-redirect-diag-content"
}
,this.yc=K("input",
{
type:"text","class":"zg-form-text-input"
}
)),K("div","zm-command",this.VL=K("a",
{
href:"javascript:;
","class":"zm-command-cancel",name:"cancel"
}
,"放弃操作"))]);
this.T=new yi(k,n);
this.T.eb("问题重定向");
Ih(this.T,k);
this.T.aa().appendChild(this.e)
}
;
t.show=function()
{
this.v();
this.T.w(j)
}
;
a.Ey=
{

}
,a.Ey=function()
{
M.call(this)
}
;
y(Ey,Rk);
Ey.Nu=[["需要详细阐述","答案过于简短或表述不清晰，请完善答案。"],["答非所问","没有正面或直接回答问题，请修改答案。"],["应作为问题的评论","该内容是对问题本身的评论而不是回答，请改为发布到评论。"],["应作为答案的评论","该内容是对另外一个答案的评论或回应，而不是回答问题，请改为发布到评论。"],["内容重复","与已有答案重复，请修改答案。"],["内容已过期","答案的时效性已过，请更新答案。"],["需要注明关联利益","有广告、推销嫌疑，请注明作者与利益方的关系。"]];
Ey.Oj=k;
Ey.D=function()
{
Ey.Oj||(Ey.Oj=new Ey,Ey.Oj.v());
return Ey.Oj
}
;
t=Ey.prototype;
t.v=function()
{
this.e||(this.o(),this.Da(),this.dy())
}
;
t.Da=function()
{
this.g().c(this.e,"click",this.BS)
}
;

t.BS=function(b)
{
"A"===b.target.tagName&&(b=b.target.getAttribute("data-index"),this.OM.MZ(b),this.Kz.w(n))
}
;
t.dy=function()
{
var b=new Wm(this.e);
sh(b);
b.fF=j;
b.Ap(j);
b.w(n);
b.Lz=0;
b.R()&&b.na();
cs(b,new Of(13,0,0,-22));
this.Kz=b
}
;

t.o=function()
{
var b=K("div",
{
id:"zh-answer-flag-popup","class":"zg-r5px zu-hovercard-wrap"
}
,[K("div","zg-r5px zu-hovercard-inner",[K("div",
{
id:"zh-answer-flag-popup-header"
}
,[K("a",
{
"class":"zg-right",href:"http://www.zhihu.com/question/19867017",target:"_blank"
}
,"这是什么？"),"选择一个理由："]),this.pH=K("div",
{
id:"zh-answer-flog-options-wrap"
}
)]),K("div","zu-hovercard-spin-top")]);
z.forEach(Ey.Nu,function(b,d)
{
var e=K("a",
{
href:"javascript:;
","class":"zm-menu-item-link"
}
,b[0]);
e.setAttribute("data-index",
d);
this.pH.appendChild(e)
}
,this);
document.body.appendChild(b);
this.e=b
}
;
t.show=function(b,c)
{
this.Kz.dd(new Um(b,1));
var d=c.TZ(),e=Xb("zm-menu-item-link",this.pH);
z.forEach(e,function(b,c)
{
R(b,!z.contains(d,c))
}
,this);
this.Kz.w(j);
this.OM=c
}
;
a.Fy=function()
{
M.call(this)
}
,a.Gy=void 0;
y(Fy,Rk);

Fy.prototype.v=function()
{
this.o();
this.g().c(this.Fl,"change",function()
{
var b=this.Fl.value;
this.oh.value="no"===b?"":Ey.Nu[+b][1]
}
).c(this.aj,"click",function(b)
{
"cancel"===b.target.name?this.T.w(n):this.oh.value&&"no"!==this.Fl.value&&(this.Mw=new V(j),this.g().c(this.Mw,"complete",function()
{
var b=Ie(this.Mw);
b&&!b.r?(this.Ra.innerHTML="已经标记",this.T.w(n)):U(b.msg)
}
),b=jk(this.oh.value),this.Mw.ajax("/answer/flag","answer_id="+this.LK+"&flag="+this.Fl.value+"&reason="+encodeURIComponent(b)))
}
)
}
;

Fy.prototype.o=function()
{
this.e=K("div",k,[K("div","zg-section",[K("div",k,"标记："),this.Fl=K("select")]),K("div",k,[K("div",k,"原因"),this.oh=K("textarea",
{
style:"width:96%;
border:solid 1px #666;
height:66px;
padding:5px"
}
)]),this.aj=K("div","zm-command",[K("a",
{
"class":"zg-mr10",href:"javascript:void(0);
",name:"cancel"
}
,"取消"),K("a",
{
"class":"zg-btn-blue",href:"javascript:void(0);
",name:"confirm"
}
,"确定")])]);
this.Fl.appendChild(K("option",
{
value:"no"
}
,"选择标记原因"));
z.forEach(Ey.Nu,function(b,c)
{
this.Fl.appendChild(K("option",

{
value:c
}
,b[0]))
}
,this);
this.T=new yi(k,n);
this.T.eb("标记答案");
Ih(this.T,k);
this.T.aa().appendChild(this.e)
}
;
Fy.prototype.show=function()
{
this.T.w(j)
}
;
a.Hy=function(b)
{
var c=b&&b.name;
if(c)switch(c)
{
case "adminflag":Gy||(Gy=new Fy,Gy.v());
c=Gy;
c.Ra=b;
c.LK=b.id.split("-")[1];
c.show();
break;
case "redirect":case "cancel_redirect":if(!b.getAttribute("data-disabled"))
{
var d;
Dy||(Dy=new Cy,Dy.v());
d=Dy;
d.Ra=b;
d.X=b.id.split("-")[1];
"redirect"===c?d.show():(Ei("/question/unredirect",k,"POST","qid="+d.X+"&rqid="+d.It),d.Ra.innerHTML="重定向已撤销",d.Ra.setAttribute("data-disabled",1))
}
break;
case "revert":var e=Ci("撤销",'<div class="zg-form-text-input"><textarea class="zg-editor-input content" title="请输入撤销原因" placeholder="请输入撤销原因"></textarea></div>',
function(c)
{
if(c)
{
var c=g.value,d=b.getAttribute("id").split("-")[1],c=(new Si).add("revision",d).add("reason",c),m=new V(j);
m.on("success",function()
{
var b=Ie(m);
b.r?U(b.msg):(e.w(n),b.msg?window.location.href=b.msg:location.reload())
}
);
m.ajax("/revert",c.toString());
return n
}

}
),g=J("content",e.aa());
new ql(g);
new Po(g,48);
new By(g,k,200)
}

}
,a.Iy=function(b)
{
$(b).on("click",'a[name="revert"]',function()
{
Hy(this)
}
)
}
;
a.Jy=function()
{
T.call(this)
}
;
y(Jy,T);
t=Jy.prototype;
t.v=function()
{
kl.H(this);
this.n(document.body)
}
;

t.z=function()
{
Jy.m.z.call(this);
var b=J("zm-profile-header-operation");
b&&(new zy).n(b);
(b=J("zm-profile-header"))&&(new vy).n(b);
(b=I("zh-profile-activity-wrap"))&&this.g().c(b,"click",function(b)
{
if((b=b.target)&&"focus"===b.name)
{
var c=b.getAttribute("data-type");
wk(b,c,k,["zm-profile-follow-link-gray","zm-profile-unfollow-link-gray"])
}

}
);
(this.Sw=b=I("zh-profile-page-force-to-rename"))&&this.g().c(b,"click",this.LV);
this.ey();
if(b=I("zh-profile-activity-page-list"))b=new Bx(b,"/people/"+Hg[1]+
"/activities",j),this.H(b),this.g().c(b,"click!",function(b)
{
"comment"===b.namespace&&b.Cc.fill("category","profile").fill("label","profile_feed")
}
),b.Hf("zm-profile-section-item"),b.qu=n,b.nu=n,b.v();
(b=J("zm-profile-fav-wrap"))&&this.g().c(b,"click",this.yN);
(b=I("zm-profile-details-editform"))&&(new ry).n(b);
if(b=J("zm-profile-answer-sort"))this.Mh=new ou,this.Mh.Ea(this.yL=new lu("按时间排序")),this.Mh.Ea(this.zL=new lu("按投票排序")),this.Mh.Ea(this.xL=new lu("问"+S[0]+"的问题")),this.Mh.Y(b),this.Mh.w(n),
this.g().c(b,"click",function(b)
{
this.Mh.w(j);
b.stopPropagation();
P(this.g(),document,"click",function()
{
this.Mh.w(n)
}
)
}
),this.g().c(this.Mh,"action",this.iP);
(b=I("zh-profile-edit-expert"))&&(new Ky).n(b);
var c=J("profile-expert-tip");
c&&this.g().c(c,"click",function(b)
{
var d=b.target;
("enable"===d.name||"close"===d.name)&&nt("ProfileExpertTopicsV2",d.name,k,function()
{
"enable"===d.name?location.reload():hk(c,j)
}
)
}
);
$(".zm-profile-section-wrap.skilled-topics").each(function()
{
(new ty).n(this)
}
);

$(".zm-profile-module.skilled-topics").each(function()
{
(new ty).n(this)
}
);
$(".zm-profile-module.active-topics").each(function()
{
(new ty).n(this)
}
);
var d=I("zh-profile-ask-list");
if(d&&(b=new Wt(
{
Oa:["autoload","locationSource"]
}
),this.H(b),b.n(d),d=J("zm-profile-section-list")))
{
var e=new xy;
e.Hf("zm-profile-section-item");
yy(e,b);
e.v(d)
}
if(d=$("#zh-profile-answer-list").children().get(0))if(b=new Wt,this.H(b),b.Oa("nodeSource").Oa("childConstructor",
{
Sg:zx
}
),b.n(d),this.g().c(b,"click!",function(b)
{
"comment"===
b.namespace&&b.Cc.fill("category","profile").fill("label","profile_answers_list")
}
),d=J("zm-profile-section-list"))e=new xy,yy(e,b),e.v(d);
if(b=$("#zh-profile-log-list").get(0))d=new Wt,d.Oa("locationSource",
{
jt:j
}
),this.H(d),d.n(b),Iy(b);
if(d=I("zh-profile-topic-list"))if(b=new Wt(
{
Oa:["autoload","locationSource"]
}
),this.H(b),this.g().c(b,"itemcreated",function(b)
{
var b=b.item,c=b.getAttribute("data-tid").split("-")[1];
if(S[3]===Hg[3])
{
var d=new kr(j,"/topic/bio/update","bio");
d.pu=j;
d.qd=["tid="+
c];
d.Ab='<a href="javascript:;
" name="edit">添加你在该话题的经验</a>';
d.n(b)
}

}
),b.n(d),d=J("zm-profile-section-list"))e=new xy,e.Hf("zm-profile-section-item"),yy(e,b),e.v(d);
if(b=$("#zh-profile-column-list > .zh-general-list").get(0))d=new Wt(
{
Oa:["autoload","nodeSource"]
}
),this.H(d),d.n(b);
if(b=$("#zh-profile-follows-list > .zh-general-list").get(0))d=new Wt(
{
Oa:["autoload","nodeSource"]
}
),this.H(d),d.n(b);
if(b=$("#zh-profile-follows-list-old").get(0))d=new Wt(
{
Oa:["autoload","locationSource"]
}
),this.H(d),
d.n(b);
if(b=$("#zh-profile-fav-list > .zh-general-list").get(0))d=new Wt(
{
Oa:["autoload","nodeSource"]
}
),this.H(d),d.n(b);
this.xo();
-1<location.search.indexOf("clean-followers-noti=1")&&(new V(j)).ajax("/notification/clear","no_refresh_content=true&type=follow");
$("#__signin").click(function()
{
var b=vk.D();
Jm(b,n);
b.w(j)
}
)
}
;
t.LV=function()
{
Ci("确定","确定要强制此用户改名吗？",function(b)
{
b&&(I("realname_form").submit(),this.Sw.innerHTML="已发送",D.add(this.Sw,"zg-gray"),Cd(this.Sw))
}
,this)
}
;

t.xo=function()
{
this.Mj();
var b=I("zm-profile-header-pm-btn");
b&&N(b,"click",function(c)
{
c.preventDefault();
if(S.Ha())
{
c=new Gt(k,j);
c.show();
Kt(c,Hg[3],Hg[0]);
var e=b.href;
c.YZ=e;
c.Qf.innerHTML+='<a class="zm-profile-email-history-link" href="'+e+'">私信记录  »</a>';
c.Nb.focus()
}
else c=vk.D(),Jm(c,n),c.w(j)
}
);
var c=I("zh-profile-cancel-block");
c&&this.g().c(c,"click",this.UG);
(c=I("zh-report-people"))&&this.g().c(c,"click",this.$H);
(c=I("zh-profile-search-query-mirro"))&&new ql(c,c.getAttribute("placeholder"))
}
;

t.UG=function()
{
Ci("确定取消屏蔽？","取消屏蔽后，对方将可以关注你、向你发私信、评论你的回答、使用「@」提及你，邀请你回答问题。",function(b)
{
b&&Ly(this,n)
}
,this)
}
;
t.fl=function()
{
P(this.g(),document,"click",function()
{
this.ib.w(n)
}
)
}
;
t.Mj=function()
{
var b=I("profile-side-op");
b&&this.g().c(b,"click",this.Bj)
}
;
t.iP=function(b)
{
var c="";
b.target===this.yL?c="time":b.target===this.zL?c="vote":b.target===this.xL&&(c="ask");
location.href="/people/"+S[1]+"/answers?sort="+c
}
;

t.Bj=function(b)
{
b=b.target.name;
"block"===b?Ci("确定要屏蔽该用户？","屏蔽用户后，对方将不能关注你、向你发私信、评论你的实名回答、使用「@」提及你，邀请你回答问题，但仍然可以查看你的公开信息。",function(b)
{
b&&Ly(this,j)
}
,this):"report"===b?this.$H():"cancel-block"===b&&this.UG()
}
;
t.$H=function()
{
bu.Dm("member",Hg[3])
}
;
a.Ly=function(b,c)
{
var d=new V(j);
P(b.g(),d,"complete",function()
{
window.location.reload()
}
);
d.ajax("/people/"+Hg[1]+"/block","action="+(c?"add":"cancel"))
}
;

t.yN=function(b)
{
if(b&&b.target&&(b=sk(this.e,b.target)))
{
var c=J("zm-profile-fav-item-title",b),d=J("zm-profile-fav-item-des",b);
c&&d&&"fav-edit"===b.name&&(c=c.innerHTML,d=d.innerHTML||"",b=[Number(b.getAttribute("data-id")),Number(b.getAttribute("data-public"))],gv(av(),c,d,b))
}

}
;

t.ey=function()
{
if(this.iA=I("zh-profile-search-form"))
{
var b=I("zh-profile-search-type");
b&&this.g().c(b,"click",this.zS);
this.tk=this.iA.getAttribute("data_type");
this.g().c(this.iA,"submit",this.search);
N(window,"popstate",function(b)
{
var b=b.state,c;
b&&b.GH&&(c=I("zh-profile-search-query"),c.value=decodeURIComponent(b.GH),My(this,b.type),this.search(i,n),c.focus())
}
,n,this);
var b=(new vf(location)).Kc().get("pq"),c=(new vf(location)).Kc().get("type");
c||(c="all");
if(b&&c)
{
var d=I("zh-profile-search-info");

d&&R(d,j);
My(this,c);
I("zh-profile-search-query").value=b;
this.search(i,i,n)
}

}

}
;
t.zS=function(b)
{
if((b=b.target)&&b.name)My(this,b.name),this.search()
}
;
a.My=function(b,c)
{
var d=Xb("zm-profile-search-type-item");
if(d)for(var e=0;
e<d.length;
e++)D.remove(d[e],"current"),d[e].name===c&&D.add(d[e],"current");
b.tk=c
}
;

t.search=function(b,c,d)
{
this.Ve=I("zh-profile-search-query").value;
this.Hm="/people/"+I("zh-profile-search-form").getAttribute("data_url")+"/search";
if(this.Ve)
{
c===i&&(c=j);
d===i&&(d=j);
if(window.history.pushState)
{
if(this.jA)return;
b&&b.preventDefault();
this.Im=new V(j);
this.jA=j;
this.g().c(this.Im,"complete",this.GJ);
c&&window.history.pushState(
{
GH:encodeURIComponent(this.Ve),type:this.tk
}
,"","?pq="+encodeURIComponent(this.Ve)+"&type="+this.tk);
this.Im.ajax(this.Hm,"type="+this.tk+"&pq="+encodeURIComponent(this.Ve),
"","POST")
}
else b||(d?(this.Ve=I("zh-profile-search-query").value,this.Hm="/people/"+I("zh-profile-search-form").getAttribute("data_url")+"/search",window.location.href=this.Hm+"?type="+this.tk+"&pq="+encodeURIComponent(this.Ve)):(this.Im=new V(j),this.jA=j,this.g().c(this.Im,"success",this.GJ),this.Ve=I("zh-profile-search-query").value,this.Hm="/people/"+I("zh-profile-search-form").getAttribute("data_url")+"/search",this.Im.ajax(this.Hm,"type="+this.tk+"&pq="+encodeURIComponent(this.Ve),"","POST")));

(b=I("zh-profile-search-info"))&&R(b,j)
}
else b&&b.preventDefault()
}
;

t.GJ=function()
{
this.jA=n;
zc(I("zh-profile-search-word"),this.Ve);
var b=Ie(this.Im);
if(b&&!b.r)
{
var c=I("zh-profile-search-list");
if(c)if(0===b.msg[0])I("zh-profile-list-container").innerHTML='<div id="'+c.id+'"><div style="margin: 20px;
color: #999;
text-align: center;
">抱歉，没有找到任何结果</div></div>';
else
{
var d;
d=""+('<div id="'+c.id+'">');
d+=b.msg[1]+"</div>";
I("zh-profile-list-container").innerHTML=d+'<a href="javascript:;
" id="zh-load-more" class="zg-btn-white zu-button-more" style="">更多</a>';
if((b=Xb("zm-item",
c))&&b.length)this.Fi=b[b.length-1].id.split("-")[1];
this.ab=k;
this.ab=new Bx(I(c.id),k,j);
this.ab.v();
this.ab.Fi=this.Fi;
this.ab.url=this.Hm;
this.ab.qd.pq=this.Ve;
this.ab.qd.type=this.tk;
I("zh-profile-search-query").focus()
}

}

}
;
a.Ky=function()
{
T.call(this)
}
;
y(Ky,T);

Ky.prototype.Z=function(b)
{
this.e=b;
this.Pa=new Ps;
this.Pa.n(this.e);
this.form=I("zm-profile-expert-editform");
this.g().c(this.form,"submit",this.sz);
this.g().c(this.Pa,["add","remove","sort"],function()
{
this.Ud()
}
);
$(".enable").on("change","input",$.proxy(function()
{
this.Ud()
}
,this));
var c=I("zh-profile-expert-warning");
c&&this.g().c(c,"click",function(b)
{
"close"===b.target.name&&hk(c)
}
);
$(".enable input[type='radio']").click(function(b)
{
R(I("zh-profile-expert-reopen-tip"),!Number($(b.target).val()))
}
)
}
;

Ky.prototype.Ud=function()
{
$(window).on("beforeunload.profile",v(s("你的更改还未保存，确认离开该页面吗？"),this))
}
;
Ky.prototype.Ge=function()
{
$(window).off("beforeunload.profile")
}
;

Ky.prototype.sz=function()
{
var b=[];
z.forEach(this.Pa.data,function(c)
{
b.push(c[3])
}
);
var c=$(this.form).serializeArray()[0].value,d=$("#zh-expert-topics .item").map(function()
{
return $(this).data("url-token")
}
).get();
nt("ProfileEditExpertTopicsV2","save",
{
settings:
{
enable_expert:c,expert_topic:d
}

}
,function()
{
this.Ge();
window.location.href="/people/"+S[1]
}
,k,this)
}
;
a.Ny=function(b,c,d,e,g)
{
pu.call(this,b,c,g);
this.Ow=d||"people";
this.EN=e||["zg-follow","zg-unfollow"]
}
;
y(Ny,pu);
Ny.prototype.v=function(b)
{
Ny.m.v.call(this,b);
this.Da(this.e)
}
;
Ny.prototype.yB=ca("yB");
Ny.prototype.Da=function(b)
{
if(this.yB)
{
var c=new zy,d=this.EN;
c.Rw=this.Ow;
c.Qw=d||c.Qw;
this.Qh&&c.Lm(this.Qh);
c.n(b)
}

}
;
Ny.prototype.Lm=ca("Qh");
a.Oy=function()
{

}
;
t=Oy.prototype;
t.XB=
{
"lock-question":"block","unlock-question":"unblock","mute-question":"mute","unmute-question":"unmute","remove-question":"delete","collapse-answer":"collapse","uncollapse-answer":"uncollapse","remove-answer":"delete"
}
;
t.dx=ba();
t.ex=function(b)
{
var c=new Si(b),d=this.dx();
if(!d)return yk("OP META DATA ELEMENT DOES NOT PROVIDED");
z.forEach(["question_id","task_id","answer_id","none_queue"],function(b)
{
var g=d.getAttribute("data-"+b);
g&&c.add(b,g)
}
);
return c
}
;

a.Py=function(b,c)
{
var d=qv[c];
if(d)
{
var e;
e=[];
(e=Ac(b,function(b)
{
return 3===b.nodeType&&La(b.nodeValue)
}
,e,j)?e[0]:i)&&zc(e,b.getAttribute("data-label")||d.label);
b.setAttribute("data-op",c)
}
else yk("NO SUCH OP NAME")
}
;
t.nz=ba();
t.ON=fk(function()
{
var b=ov.D();
b.on("cancel",this.nz,n,this);
return b
}
);
a.Qy=function(b,c,d,e)
{
var g=c.getAttribute("data-op");
if(g)
{
Py(c,g);
var h=b.ON(),e=b.ex(e).add("action",b.XB[g]);
vv(h,c,v(d||ha,b),"",e.toString());
h.w(j)
}

}
;
a.Ry=function(b)
{
this.ie=10;
this.$c="搜索用户";
this.path=b||"/people/autocomplete"
}
;
y(Ry,Rk);
t=Ry.prototype;
t.o=function()
{
var b=K("div","zg-section zm-tag-editor-command-buttons-wrap",[this.Qa=K("input","zg-form-text-input zg-mr15"),this.oI=K("span","zg-mr15"),this.EM=K("a",
{
"class":"zg-mr15 zg-btn-blue",href:"javascript:;
",name:"add"
}
,"移交")]);
this.e.appendChild(b);
this.$c&&((new gp(this.$c)).n(this.Qa),this.Qa.title=this.$c);
this.uf(b);
this.g().c(this.EM,"click",this.jp)
}
;

t.uf=function(b)
{
this.L=new go(this.path,this.Qa,k,k,b,j);
this.L.Jf(j);
this.L.ni=this.ie;
this.g().c(this.L,"select",this.vS)
}
;
t.jp=function()
{
this.mA&&this.dispatchEvent("select")
}
;
t.vS=function()
{
var b=this.L.kg().slice(1);
this.mA=[b[3],b[0]];
this.oI.innerHTML=b[0]
}
;
t.h=q("e");
t.n=function(b)
{
this.e=b;
this.o()
}
;
t.hide=function()
{
R(this.e,n);
this.mA=k;
this.oI.innerHTML=""
}
;
a.Sy=function(b,c,d,e,g,h)
{
nr.call(this,e,c,d,h);
this.X=b;
this.cm=this.qk=n;
this.cT=g
}
;
y(Sy,nr);
a.Ty=[
{
value:"精简文字描述",label:"精简文字描述"
}
,
{
value:"补充必要的信息",label:"补充必要的信息"
}
,
{
value:"改进标点或格式",label:"改进标点或格式"
}
,
{
value:"other",label:"其他"
}
];
t=Sy.prototype;
t.n=function(b)
{
Sy.m.n.call(this,b);
this.g().c(Ki,"anon_change",this.xj)
}
;
t.xj=function(b)
{
this.cm||D.enable(this.e,"zm-editable-disabled",b.lb)
}
;

t.cj=function()
{
Sy.m.cj.call(this);
var b=K("a",
{
"class":"zg-right zg-link-litblue",href:"http://www.zhihu.com/question/19550238/answer/12202028",target:"_blank"
}
,"为什么问题可以被公共编辑？"),c=K("select",
{
style:"1px solid #999 "
}
),d=K("option",
{
value:"none"
}
,"请选择一个修改理由...");
c.appendChild(d);
z.forEach(Ty,function(b,d)
{
var e=K("option",
{
value:b.value
}
,d+1+". "+b.label);
c.appendChild(e)
}
);
this.Sz=K("div",
{
"class":"zm-editable-require-reason-wrap",style:"padding:10px 0 0 0"
}
,[b,this.Q_=c,this.wG=K("span"),this.JT=
K("div",
{
"class":"zg-form-text-input",style:"height:22px;
margin:10px 0 0 0;
display:none"
}
,this.IT=K("textarea",
{
style:"width:100%;
height:22px !important;
min-height:22px !important;
"
}
))]);
lc(this.Sz,this.zd);
this.qk&&this.Bi(" * 必选","zg-gray-normal");
var e=Wb("select",k,this.Sz)[0];
this.g().c(e,"change",function()
{
R(this.JT,"other"===e.value);
this.Bi(" * 必选","zg-gray-normal")
}
)
}
;

t.Af=function(b)
{
var c=Wb("select",k,this.Sz)[0],d=c.value;
if(this.qk)
{
if("none"===d)
{
this.Bi("请选择一个修改理由");
return
}
if("other"===c.value&&(d=jk(this.IT.value),!d))
{
this.Bi("请填写修改理由");
return
}

}
"title"===this.or&&-1===b.indexOf("?")&&-1===b.indexOf("？")?this.Bi("还没有输入问号"):("none"===d&&(d=""),this.qd=["id="+this.X+"&reason="+encodeURIComponent(d)+"&question_id="+this.X],this.dispatchEvent("change"),Sy.m.Af.call(this,b),this.Bi("* 必选","zg-gray-normal"),this.qk=j)
}
;

t.Bi=function(b,c)
{
this.wG.innerHTML=b;
D.set(this.wG,c||"zg-error-text")
}
;
t.jg=function()
{
return this.Dd&&this.cT?kk(Ia(this.Ma.value)):Sy.m.jg.call(this)
}
;
t.Ud=function()
{
$(window).on("beforeunload.EditorWithReason",v(s("你对问题的修改还未保存，确认离开该页面吗？"),this))
}
;
t.Ge=function()
{
$(window).off("beforeunload.EditorWithReason")
}
;
t.uh=function()
{
Sy.m.uh.call(this);
this.Ge()
}
;
t.ud=function()
{
Sy.m.ud.call(this);
this.Ud()
}
;
a.Uy=function()
{
M.call(this);
this.K_=[];
this.Hy=0;
this.nB=this.L_=k;
this.ED=5;
this.AP="/reviewq/handover"
}
;
y(Uy,Rk);
ya(Uy.prototype,Oy.prototype);
t=Uy.prototype;
t.dx=q("ea");
t.ex=function(b)
{
return Oy.prototype.ex.call(this,b).add("queue_id",this.Kb).add("is_realm",this.fe)
}
;
t.nz=function()
{
this.locked=n
}
;

t.v=function(b)
{
this.e=b;
this.Kb=(b=I("queue_id"))?b.value:0;
this.fe=(b=I("is_realm"))?b.value:0;
this.o();
this.Da();
zt.zs||(b=new Jd(1E3*this.ED),b.start(),this.g().c(b,Kd,this.aW));
I("zh-load-more")&&(new Ny(this.e,window.location.href,"queue",["zg-btn-follow","zg-btn-unfollow"],j)).v();
this.g().c(this.e,"click",this.ga)
}
;
t.ga=function(b)
{
this.sx(b.target)
}
;

t.aW=function()
{
var b=Xb("zm-review-queue-deadline");
b&&b.length&&z.forEach(b,function(b)
{
var d=b.getAttribute("data-lefttime");
if(d)if(d=+d,2E3<d&&(d-=Math.floor(+new Date/1E3)),0>=d&&-1E3<d)b.innerHTML="已流通";
else
{
60>d&&D.add(b,"zm-review-queue-time-warning");
var e=Math.floor(d/60),g=d%60;
b.setAttribute("data-lefttime",d-this.ED+"");
b.innerHTML=(0<e?e+"分":"")+(g+"秒")
}

}
,this)
}
;
t.YK=function()
{
Vy(this,["删除话题","已删除"],["delete_topic",""]);
Wy(this);
zt.zs||this.ea.setAttribute("data-lockdown")
}
;
t.ox=u(53);

t.AS=function()
{
this.lI=this.dk.mA;
this.xhr=new V(j);
this.ob&&P(this.g(),this.xhr,"success",this.Ce);
this.xhr.ajax(this.AP+"?queue_id="+this.Kb+"&is_realm="+this.fe,"action=assign&assigned_to="+this.lI[0]+"&task_id="+this.ea.getAttribute("data-task_id")+"&none_queue="+this.ea.getAttribute("data-none_queue"))
}
;
t.o=function()
{
this.Kj=I("zh-queue-new-info");
var b=K("div",
{
style:"display:none"
}
,this.gc=K("div","zu-review-queue-topic-editor",K("div","zm-tag-editor-labels")));
mc(b,this.e)
}
;

t.Da=function()
{
zt.zs||this.xk()
}
;
t.xk=function()
{
this.Ak=new V(n);
P(this.g(),this.Ak,"success",this.Gx);
this.Ak.ajax("/reviewq/sidebar?queue_id="+this.Kb,k,"GET")
}
;
t.Gx=function()
{
var b=Ie(this.Ak);
if(!b||!b.r)
{
var c=b.msg,b=Xb("zm-review-queue-live-udatable-num");
z.forEach(b,function(b)
{
var e=b.getAttribute("data-key");
e&&(e=c[e],e||(b.innerHTML=e))
}
);
setTimeout(v(this.xk,this),1E4)
}

}
;
t.dL=function()
{
Xy(this,this.Ra,"已流通")
}
;

a.Xy=function(b,c,d)
{
c=c||b.Ra;
d=d||"已处理";
D.remove(c,"zg-btn-white");
"pass"===c.name&&(c.innerHTML=d,zt.zs||(c.name=""));
b.ea=Kc(c,k,"zm-item");
Wy(b);
(b=J("zm-review-queue-deadline",b.ea))&&R(b,n)
}
;
t.ZK=function()
{
Vy(this,["移交","已经移交给："+this.lI[1]],["handover",""]);
this.dk.hide();
Wy(this);
R(this.ea,n)
}
;

a.Vy=function(b,c,d)
{
var e=0;
b.Ra.name===d[0]&&(e=1);
b.Ra.name=d[e];
var d="",g=b.Ra.innerHTML.indexOf("</span>");
-1<g&&(d=b.Ra.innerHTML.substring(0,g+7));
b.Ra.innerHTML=d+c[e]
}
,a.Wy=function(b)
{
D.remove(b.ea,"zm-item-unread");
b.locked=n
}
;

t.sx=function(b)
{
if(this.locked)this.UF&&yk(this.UF,"last action");
else
{
this.locked=j;
var c=b.name;
this.UF=c;
var d=Kc(b,k,"zm-item");
this.Ra=b;
this.ea=d;
if(d.getAttribute("data-lockdown"))this.locked=n;
else
{
var e=b.getAttribute("data-op");
if(e)switch(e)
{
case "lock-question":case "unlock-question":Qy(this,b,function()
{
Py(b,"lock-question"===e?"unlock-question":"lock-question");
Wy(this)
}
);
break;
case "mute-question":case "unmute-question":Qy(this,b,function()
{
Py(b,"mute-question"===e?"unmute-question":
"mute-question");
Wy(this)
}
);
break;
case "remove-question":Qy(this,b,function()
{
L(d);
this.locked=n
}
);
break;
case "collapse-answer":case "uncollapse-answer":Qy(this,b,function()
{
Py(b,"collapse-answer"===e?"uncollapse-answer":"collapse-answer");
Wy(this)
}
);
break;
case "remove-answer":Qy(this,b,function()
{
L(d);
this.locked=n
}
)
}
else
{
switch(c)
{
case "edit_title":var c=d.getAttribute("data-question_id"),g=d.getAttribute("data-task_id"),c=new Sy(c,"/reviewq/question?queue_id="+this.Kb+"&action=edit_title&task_id="+
g,"title",n,j);
c.ur=j;
c.Dd=j;
c.n(b.parentNode);
c.qk=j;
c.v();
c.ud();
this.i0=c;
L(b);
this.locked=n;
break;
case "bind_topic":this.locked=n;
this.nB||(c=new Ts(this.Kb),c.n(this.gc),this.nB=c);
c=this.nB;
g=J("zm-review-queue-tags-wrap",d);
if(!c.locked)
{
c.locked=j;
c.X=d.getAttribute("data-question_id");
var h=d.getAttribute("data-task_id");
c.iC=c.HC+h+"&question_id="+c.X+"&action=bind_topic";
c.VH=c.HC+h+"&question_id="+c.X+"&action=unbind_topic";
c.Gs&&(h=J("zm-tag-editor-labels",c.Gs),np(c),h.innerHTML=c.Ze.innerHTML,
D.remove(c.Gs,"zm-review-queue-editing"));
c.rD=d;
c.Gs=d;
D.add(c.rD,"zm-review-queue-editing");
mc(c.e,g);
R(c.Ze,n);
c.oB=new V(j);
c.g().c(c.oB,"complete",c.NS);
c.oB.ajax("/reviewq/fetch_topic","question_id="+c.X)
}
break;
case "delete_topic":this.ob=this.YK;
this.xhr=new V(j);
this.ob&&P(this.g(),this.xhr,"success",this.Ce);
this.xhr.ajax("/reviewq/topic?queue_id="+this.Kb+"&is_realm="+this.fe,"action=delete&topic_id="+this.ea.getAttribute("data-topicid")+"&task_id="+this.ea.getAttribute("data-task_id")+
"&none_queue="+this.ea.getAttribute("data-none_queue"));
break;
case "handover":this.locked=n;
this.ob=this.ZK;
this.dk?R(this.dk.h(),j):(c=new Ry("/reviewq/auto"),g=K("div",
{
id:"zh-review-queue-people-selector"
}
),this.e.appendChild(g),c.n(g),this.dk=c,this.g().c(this.dk,"select",this.AS));
c=+d.getAttribute("data-hotype");
this.dk.L.ni=c;
c=Kc(b,"DIV");
mc(this.dk.h(),c);
break;
case "pass":case "unpass":this.ob=this.dL;
this.xhr=new V(j);
this.ob&&P(this.g(),this.xhr,"success",this.Ce);
this.xhr.ajax("/reviewq/pass",
"queue_id="+this.Kb+"&is_realm="+this.fe+"&action="+c+"&task_id="+this.ea.getAttribute("data-task_id")+"&none_queue="+this.ea.getAttribute("data-none_queue"));
break;
case "unflag":break;
case "add_question_comment":case "add_answer_comment":this.BM=c.split("_")[1];
this.locked=n;
(c=Yy(this))?R(c,j):(g=K("div"),g.innerHTML=I("zh-review-queue-comment-form-template").innerHTML,mc(g,J("zm-item-comment-el",this.ea)));
$(".zm-command",c).show();
break;
case "delete_comment":this.locked=n;
break;
case "addnew":this.locked=
n;
c=Wb("TEXTAREA",k,this.ea);
c=c[c.length-1].value;
if(!c)return;
this.ob=this.VK;
this.px(c);
break;
case "closeform":this.locked=n;
R(Yy(this),n);
break;
case "unbind_topic":this.ob=this.lL;
c=this.ea.getAttribute("data-question_id");
g=this.ea.getAttribute("data-topicid");
h=this.ea.getAttribute("data-task_id");
this.xhr=new V(j);
this.ob&&P(this.g(),this.xhr,"success",this.Ce);
this.xhr.ajax("/reviewq/question?queue_id="+this.Kb+"&is_realm="+this.fe+"&task_id="+h,"action=unbind_topic&question_id="+c+"&topic_id="+
g+"&none_queue="+this.ea.getAttribute("data-none_queue"));
break;
case "rebind_topic":this.ob=this.eL;
c=this.ea.getAttribute("data-question_id");
g=this.ea.getAttribute("data-topicid");
h=this.ea.getAttribute("data-task_id");
this.xhr=new V(j);
this.ob&&P(this.g(),this.xhr,"success",this.Ce);
this.xhr.ajax("/reviewq/question?queue_id="+this.Kb+"&is_realm="+this.fe+"&task_id="+h,"action=bind_topic&question_id="+c+"&topic_id="+g+"&none_queue="+this.ea.getAttribute("data-none_queue"));
break;
case "cancel_nohelp":this.ob=
this.WK;
c=this.ea.getAttribute("data-answer_id");
g=this.ea.getAttribute("data-task_id");
this.xhr=new V(j);
this.ob&&P(this.g(),this.xhr,"success",this.Ce);
this.xhr.ajax("/reviewq/answer?queue_id="+this.Kb+"&is_realm="+this.fe+"&task_id="+g,"action=cancel_nohelp&answer_id="+c+"&none_queue="+this.ea.getAttribute("data-none_queue"));
break;
case "nohelp":this.ob=this.cL;
c=this.ea.getAttribute("data-answer_id");
g=this.ea.getAttribute("data-task_id");
this.xhr=new V(j);
this.ob&&P(this.g(),this.xhr,"success",
this.Ce);
this.xhr.ajax("/reviewq/answer?queue_id="+this.Kb+"&is_realm="+this.fe+"&task_id="+g,"action=nohelp&answer_id="+c+"&none_queue="+this.ea.getAttribute("data-none_queue"));
break;
case "edit_detail":c=d.getAttribute("data-question_id");
g=d.getAttribute("data-task_id");
c=new Sy(c,"/reviewq/question?queue_id="+this.Kb+"&action=edit_detail&task_id="+g,"detail_text",j,n);
c.Ab='<div style="font-weight:bold"><a href="javascript:;
" name="edit">添加补充说明</a></div>';
c.ur=j;
c.n(b.parentNode);
c.qk=j;
c.v();

c.ud();
this.CZ=c;
L(b);
this.locked=n;
break;
case "voteup":case "votedown":c="voteup"===c?"vote_up":"vote_down";
this.ob=this.mL;
g=this.ea.getAttribute("data-answer_id");
h=this.ea.getAttribute("data-task_id");
this.xhr=new V(j);
this.ob&&P(this.g(),this.xhr,"success",this.Ce);
this.xhr.ajax("/reviewq/answer?queue_id="+this.Kb+"&is_realm="+this.fe+"&task_id="+h,"action="+c+"&answer_id="+g+"&none_queue="+this.ea.getAttribute("data-none_queue"));
break;
case "thanks":this.ob=this.kL;
c=this.ea.getAttribute("data-answer_id");

g=this.ea.getAttribute("data-task_id");
this.xhr=new V(j);
this.ob&&P(this.g(),this.xhr,"success",this.Ce);
this.xhr.ajax("/reviewq/answer?queue_id="+this.Kb+"&is_realm="+this.fe+"&task_id="+g,"action=thanks&answer_id="+c+"&none_queue="+this.ea.getAttribute("data-none_queue"));
break;
default:this.locked=n
}
return n
}

}

}

}
;
t.kL=function()
{
this.Ra.name="";
var b=$(this.Ra),c=$("i",b);
b.html(c).append("感谢已发出");
Xy(this,Zy(this),"已流通")
}
;

t.mL=function()
{
var b=Ie(this.xhr),c=J("vote-bar-hook",this.ea);
D.set(c,"zm-item-vote-bar");
"up"===b.msg?(D.add(c,"zm-item-vote-up-active"),Xy(this,Zy(this),"已流通")):"down"===b.msg?D.add(c,"zm-item-vote-down-active"):(D.remove(c,"zm-item-vote-up-active"),D.remove(c,"zm-item-vote-down-active"));
this.locked=n
}
;
a.Zy=function(b)
{
return J("zg-btn-white",b.ea)
}
;

t.Ce=function()
{
var b=Ie(this.xhr);
if(b&&b.r)
{
if("deleted"===b.msg)
{
if(this.ea&&(D.add(this.ea,"zm-queue-disabled"),this.ea.setAttribute("data-lockdown"),b=Wb("A",k,this.ea),z.forEach(b,function(b)
{
if("delete_question"===b.name||"delete_answer"===b.name)b.style.color="red !important",b.innerHTML="已删除"
}
),b=J("zm-review-queue-deadline",this.ea)))b.setAttribute("data-lefttime",-9E3),b.innerHTML=""
}
else U(b.msg);
this.locked=n
}
else this.ob()
}
;

t.cL=function()
{
this.Ra.name="cancel_nohelp";
var b=$(this.Ra),c=$("i",b);
b.html(c).append("撤销没有帮助");
this.locked=n;
Xy(this,Zy(this))
}
;
t.WK=function()
{
this.Ra.name="nohelp";
var b=$(this.Ra),c=$("i",b);
b.html(c).append("没有帮助");
this.locked=n;
Xy(this,Zy(this))
}
;
t.eL=function()
{
this.Ra.name="unbind_topic";
this.Ra.innerHTML="解除绑定";
this.locked=n
}
;
t.lL=function()
{
this.Ra.name="rebind_topic";
this.Ra.innerHTML="重新绑定";
this.locked=n
}
;

t.VK=function()
{
var b=Yy(this),c=K("div","zm-comment-list");
c.innerHTML='<div class="zm-comment-content">已评论</div>';
mc(c,b);
ok(c);
setTimeout(function()
{
L(c)
}
,2500);
var d=Wb("TEXTAREA",k,this.ea);
d.length&&(d[d.length-1].value="");
R(b,n)
}
;

t.px=function(b)
{
this.xhr=new V(j);
this.ob&&P(this.g(),this.xhr,"success",this.Ce);
var c=this.ea.getAttribute("data-question_id"),c=c?"&question_id="+c:"&question_id=0",d=this.ea.getAttribute("data-answer_id");
this.xhr.ajax("/reviewq/"+this.BM,"queue_id="+this.Kb+"&is_realm="+this.fe+"&action=add_comment&task_id="+this.ea.getAttribute("data-task_id")+c+(d?"&answer_id="+d:"&answer_id=0")+"&comment="+encodeURIComponent(b)+"&none_queue="+this.ea.getAttribute("data-none_queue"))
}
;

a.Yy=function(b)
{
return J("zm-comment-form",b.ea)
}
;
a.$y=function(b)
{
this.ZQ=this.locked=n;
this.url=b||"/reviewq/image"
}
;
y($y,Rk);
ya($y.prototype,Oy.prototype);
t=$y.prototype;
t.dx=q("e");
t.XB=
{
"remove-question":"delete_question","collapse-answer":"collapse","uncollapse-answer":"uncollapse","remove-answer":"delete_answer","remove-image":"delete_image","remove-video":"delete_video"
}
;
t.nz=function()
{
this.locked=n
}
;

t.n=function(b)
{
this.e=b;
var b=J("zm-item-rich-text",this.e),c=K("div","zm-item-answer-summary"),d=b.innerHTML.replace(/<br>/g," "),e;
e=d.replace(/<p class="video-info">(.+?)<\/p>/g,"");
e=e.replace(/<(\/)?b>/g,"").replace(/<(\/)?i>/g,"").replace(/<(\/)?u>/g,"");
d=e.replace(/<[^>]+>/g," ").replace(/\s+/g," ");
e=-1<b.innerHTML.indexOf("<img")||-1<b.innerHTML.indexOf("<IMG");
var g=-1<b.innerHTML.indexOf("video-box"),h=xk(d),l="",m=e||g;
150<h?(m=j,l=d.substring(0,100)+"… "):3<b.innerHTML.split("br").length?
(m=j,l=d):l=m?d:b.innerHTML;
d=g?' <span class="zg-content-video-icon"></span>':' <span class="zg-content-img-icon"></span>';
if(e||g)l+=d;
m&&(l+='<a href="javascript:;
" class="zg-inline-block" name="expand">显示全部 »</a>');
c.innerHTML=l;
mc(c,b);
this.Ez();
this.Da()
}
;
t.Ez=function()
{
this.vL=this.e.getAttribute("data-answer_id");
this.P_=this.e.getAttribute("data-question_id");
this.LQ=this.e.getAttribute("data-task_id")
}
;
t.Da=function()
{
this.g().c(this.e,"click",this.Tl)
}
;

t.Tl=function(b)
{
if(!b.target.name||this.ZQ)return j;
this.ga(b.target.name,b.target)
}
;
a.az=function(b)
{
D.has(b.e,"zm-item-unread")&&(b.locked=j,D.remove(b.e,"zm-item-unread"),Ei(b.url,v(function()
{
this.locked=n
}
,b),"POST","task_id="+b.LQ));
if(b=J("zm-image-queue-button-pass",b.e))b.innerHTML="已处理",D.Ti(b,"zm-image-queue-button-pass","zg-link-gray-normal zg-right")
}
;

t.ga=function(b,c)
{
if(!this.locked)
{
this.AZ=c;
var d=j,e=c.getAttribute("data-op");
if(e)switch(e)
{
case "collapse-answer":case "uncollapse-answer":Qy(this,c,function()
{
Py(c,"collapse-answer"===e?"uncollapse-answer":"collapse-answer");
az(this)
}
);
break;
case "remove-answer":Qy(this,c,function()
{
L(this.e);
az(this)
}
);
break;
case "remove-question":Qy(this,c,function()
{
L(this.e);
az(this)
}
);
break;
case "remove-image":case "remove-video":var g=tc(c),h,d=g.getAttribute("data-imageid"),l=g.getAttribute("data-videoid");

d?h="image_hash="+d:l&&(h="video_id="+l);
Qy(this,c,function()
{
var b=Kc(g,"li");
R(b,n);
this.locked=n
}
,h)
}
else
{
switch(b)
{
case "pass":az(this);
R(this.e,n);
break;
case "expand":D.remove(this.e,"zm-item-collap");
break;
default:d=n
}
if(!d)return j
}

}

}
;
a.bz=function(b,c,d)
{
M.call(this);
this.j0=d;
this.DK=b;
this.MV=c;
this.eB=n
}
;
y(bz,Rk);
bz.prototype.v=function()
{
this.g().c(this.DK,"click",this.aO)
}
;
bz.prototype.aO=function()
{
this.eB=!this.eB;
R(this.MV,this.eB)
}
;
a.cz=function()
{
M.call(this);
this.vt=0;
this.Yk=[];
this.Hy=0
}
;
y(cz,Rk);
t=cz.prototype;
t.Gf=function(b)
{
var c=b.id.split("-")[1],d=new V(j),e=0,g=Kc(b,k,"zm-item");
g&&(-1<b.innerHTML.indexOf("取消")?(Tf(g,"background","#fff"),b.innerHTML="折叠",D.Ti(b,"zg-unfollow","zg-follow"),e=0):(Tf(g,"background","#ddd"),b.innerHTML="取消折叠",D.Ti(b,"zg-follow","zg-unfollow"),e=1));
d.ajax("/review/api/collapse_answer","is_collasped="+e+"&answer_id="+c)
}
;

t.xk=function()
{
this.Ak=new V(n);
P(this.g(),this.Ak,"success",this.Gx);
this.Ak.ajax("/reviewq/sidebar?queue_id="+this.Kb,k,"GET")
}
;
t.Gx=function()
{
var b=Ie(this.Ak);
if(!b||!b.r)
{
var c=b.msg,b=Xb("zm-review-queue-live-udatable-num");
z.forEach(b,function(b)
{
var e=b.getAttribute("data-key");
e&&(e=c[e],e!=k&&(b.innerHTML=e))
}
);
setTimeout(v(this.xk,this),1E4)
}

}
;

t.v=function()
{
var b=I("zh-queue-wrap");
if(b)
{
var c=new Ny(b,window.location.href,"queue",["zg-btn-follow","zg-btn-unfollow"],j);
this.g().c(b,"click",this.VG);
c.v()
}
(b=I("zh-review-queue-online-reviewers"))&&(new Ny(b,window.location.href,k,k,j)).v();
if(b=I("zh-queue-content-list"))this.aV=b,this.g().c(Y,et.oY,this.WO),b=new Ny(b,window.location.href,"queue",["zg-btn-follow","zg-btn-unfollow"],j),b.Lm(Hy),b.v(),this.g().c(I("zh-queue-outer-wrap"),"click",this.VG);
(b=I("zh-queue-content-list-v2"))&&
(new Uy).v(b);
if(b=I("zh-image-queue-list-wrap"))this.Kb=(c=I("queue_id"))?c.value:0,this.xk(),b=Xb("zm-item",b),z.forEach(b,function(b)
{
(new $y).n(b)
}
);
if(b=I("zh-video-queue-list-wrap"))this.Kb=(c=I("queue_id"))?c.value:0,this.xk(),b=Xb("zm-item",b),z.forEach(b,function(b)
{
(new $y("/reviewq/video")).n(b)
}
);
if(b=I("zh-inferiority-queue-list-wrap"))this.Kb=(c=I("queue_id"))?c.value:0,this.xk(),b=Xb("zm-item",b),z.forEach(b,function(b)
{
(new $y("/reviewq/inferiority")).n(b)
}
);
if(Lg)
{
b=Lg;
this.vt=b[0];

var d=[];
z.forEach(b[1],function(b)
{
d.push(b)
}
);
this.Yk=d
}
if(b=I("zh-queue-create-wrap"))this.ai=b,this.g().c(this.ai,"click",this.ga),(b=I("zh-queue-delete"))&&this.g().c(b,"click",this.cN),(new bz(I("add-desc"),I("add-desc-toggle-wrap"))).v(),(new bz(I("zh-queue-add-admin"),I("zh-queue-add-admin-toggle-wrap"))).v(),this.fI=I("zh-queue-rules-wrap"),this.FV=I("zh-queue-name-input"),this.eN=I("zh-queue-desc-input"),this.Dw=I("zh-queue-error-message"),this.SK=I("zh-queue-admin-selector"),this.mC=I("zh-queue-admin-members-wrap"),
this.L=new go("/people/autocomplete",this.SK,k,k,I("zh-queue-add-admin-toogle-wrap"),j),this.L.Jf(j),this.g().c(this.L,"select",this.jp),this.oU=I("zh-queue-rule-template").innerHTML;
if(b=I("zh-queue-delete"))this.aN=b,this.g().c(b,"click",this.Ul)
}
;
t.Ul=function()
{
Ei("/review/queues/delete",function()
{
window.location.href="/review"
}
,"POST","queue_id="+this.aN.name)
}
;

t.jp=function()
{
var b=z.slice(this.L.kg(),1),c=b[3],d=1;
z.forEach(this.Yk,function(b)
{
b===c&&(d=n)
}
);
d&&this.Yk.push(c);
b=['<div class="zm-item" id="adm-',b[3],'"><a class="zg-right" name="remove_admin" href="javascript:;
">删除</a><a class="zm-item-link-avatar" href="/people/',b[1],'" style="float:none"><img title="',b[0],'" src="',b[2],'" class="zm-item-img-avatar" /></a></div>'].join("");
this.mC.innerHTML+=b
}
;

t.ga=function(b)
{
if((b=sk(this.ai,b.target))&&b.name)switch(b.name)
{
case "remove_rule":b=Kc(b,k,"zg-section");
L(b);
break;
case "zh-queue-add-rule-button":b=K("div");
b.innerHTML=this.oU;
this.fI.appendChild(b);
break;
case "add_queue":this.xhr=new V(j);
P(this.g(),this.xhr,"success",this.oC);
b=new tk(j);
b.add("id",this.vt);
b.add("title",this.FV.value);
b.add("bio",this.eN.value);
var c=[],d=Wb("SELECT",k,this.fI);
d&&d.length&&z.forEach(d,function(b)
{
(b=Dx(b))&&c.push(b)
}
);
b.add("subscrible",c.join(","));

b.add("maintainer",this.Yk.join(","));
this.vt?this.xhr.ajax("/review/queues/update",b.Kc()):this.xhr.ajax("/review/queues/new",b.Kc());
break;
case "remove_admin":var b=Kc(b,k,"zm-item"),e=b.id.split("-")[1];
L(b);
var g=[];
z.forEach(this.Yk,function(b)
{
b!==e&&g.push(b)
}
);
this.Yk=g
}

}
;
t.cN=function()
{
this.xhr=new V(j);
P(this.g(),this.xhr,"success",this.oC);
this.xhr.ajax("/review/queues/delete","id="+this.vt)
}
;

t.oC=function()
{
var b=Ie(this.xhr);
b&&!b.r?(R(this.Dw,n),b.msg&&(window.location.href=b.msg)):(b=b.msg,this.Dw.innerHTML=ma(b)?b.join("<br />"):b,R(this.Dw,j))
}
;
t.WO=function(b)
{
this.Hy++;
300<this.Hy&&window.location.reload();
var b=b.mb,c=K("div");
c.innerHTML=b;
lc(c,sc(this.aV));
ok(c)
}
;
t.VG=function(b)
{
if((b=sk(I("zh-queue-outer-wrap"),b.target))&&b.name)switch(b.name)
{
case "collapse":this.Gf(b,1);
break;
case "uncollapse":this.Gf(b,0)
}

}
;
a.dz=function()
{
this.GV=$("#tmpl-feedback-form").text()
}
;
ia(dz);
a.ez=Jn("Report"+S.Xj)||Kn("Report"+S.Xj);
dz.prototype.Q=
{
title:"建议和反馈"
}
;
dz.prototype.rv=function(b)
{
var c=$("#zh-feedback-form"),d=$("select",c),c=$("textarea",c);
new Po(c[0]);
d.toggle(!b.type);
c.html(ez.get("content")||"");
c.on("input change",function()
{
ez.set("content",this.value)
}
)
}
;

dz.prototype.create=function(b)
{
var c=$.extend(this.Q,b||
{

}
);
Ci(c.title,this.GV,function(b)
{
if(b)
{
var e=$("#zh-feedback-form"),b=$(".zg-report-msg",e),g=$("textarea",e),e=$("select",e),e=c.type||e.val(),h=$.trim(g.val());
h?(b.hide(),b=new V(j),g=new Si,b.on("success",function()
{
U("建议发送成功，我们会尽快处理，感谢您的帮助");
ez.remove("content")
}
),g.add("type",e).add("content",h),b.ajax("/feedback/report",g.toString()),b=i):(b.html("请填写反馈内容").show(),g.focus(),b=n);
return b
}

}
,this);
this.rv(c)
}
;
$(function()
{
$("#js-feedback-button").click(function()
{
dz.D().create()
}
)
}
);
a.fz=function()
{
M.call(this)
}
;
y(fz,Rk);

fz.prototype.v=function()
{
var b=I("zh-search-result-more");
b&&this.g().c(b,"click",function(c)
{
(c=sk(b,c.target))&&c.name&&c.id&&"focus"===c.name&&wk(c,c.id.split("-")[0])
}
);
var c=I("zm-search-result-topic-info");
c&&this.g().c(c,"click",function(b)
{
(b=sk(c,b.target))&&b.name&&b.id&&"focus"===b.name&&wk(b,"topic",k,["zg-btn-follow","zg-btn-unfollow"])
}
);
var d=I("zm-search-result-people-info");
d&&this.g().c(d,"click",function(b)
{
(b=sk(d,b.target))&&b.name&&b.id&&"focus"===b.name&&wk(b,"people",k,["zg-btn-follow",
"zg-btn-unfollow"])
}
);
var e=I("zm-search-result-answers");
e&&(e=Xb("feed-item-hook",e),z.forEach(e,function(b)
{
(new Cx).n(b)
}
));
e=$("#zh-search3-list > .zh-general-list");
e.length&&((new Wt(
{
Oa:["nodeSource"],zA:20<=e.children().length
}
)).n(e[0]),$(".search-debug-all-btn").click(function()
{
$("#zh-search3-list").toggleClass("debug")
}
));
$("#zh-search-report").click(function()
{
dz.D().create(
{
type:"search_suggest",title:"新搜索建议反馈"
}
)
}
);
var g=this;
$("#zh-search3-list").on("click",".zm-search3-item",function(b)
{
b=
$(b.delegateTarget).find(".zm-search3-item").index(this)+1;
Nf.set("s-q",encodeURIComponent(gs(new vf(location.href),"q")));
Nf.set("s-i",b);
Nf.set("sid",g.$U())
}
)
}
;
fz.prototype.$U=Ur(function()
{
return(+new Date).toString(32).slice(-5)+Math.random().toString(32).slice(-3)
}
);
a.gz=function()
{
T.call(this);
this.da=k
}
;
y(gz,T);
gz.prototype.z=function()
{
gz.m.z.call(this);
this.g().c(this.e,"submit",function(b)
{
b.preventDefault();
this.save()
}
)
}
;
gz.prototype.save=function()
{
this.update(hz(this))
}
;
gz.prototype.update=function(b)
{
if(!(this.da&&"pending"===this.da.state()))
{
var c=$(this.e).data("init"),b=
{
method:"save",params:$.extend(
{

}
,c.params||
{

}
,
{
settings:b
}
)
}
;
this.da=$.post("/node/"+c.nodename,b,v(this.Af,this))
}

}
;

gz.prototype.Af=function(b)
{
b&&(b[0]?this.dispatchEvent(
{
type:"success",data:b
}
):this.dispatchEvent(
{
type:"error",data:b
}
))
}
;
a.hz=function(b)
{
b=$(b.e);
b=b.serializeArray().concat($("input:checkbox",b).map(function()
{
return
{
name:this.name,value:this.checked?this.value:0
}

}
).get());
return z.reduce(b,function(b,d)
{
b[d.name]=d.value;
return b
}
,
{

}
)
}
;
a.iz=function()
{
T.call(this);
this.OZ=[];
this.N_="/profile/validate";
this.VV="/settings/unblockuser"
}
;
y(iz,T);

iz.prototype.v=function()
{
var b=this,c=$("#zh-settings-noti-form-wrapper>form")[0];
if(c)
{
var d=new gz;
d.n(c);
d.addEventListener(["success","error"],function(b)
{
window.scrollTo(0,0);
Lr(E.Ja(b.data),3E3)
}
)
}
var e=$(".js-ajax-form");
e.submit(function(b)
{
var c=$(b.target),b=c.attr("action")||location.href;
$.post(b,c.serialize()).done(function(b)
{
Lr(E.Ja(b),5E3);
c.hasClass("unsubscribe")&&(e.remove(),$(".settings-section").remove())
}
);
return n
}
);
$(".js-unsubscribe-other-reason").on("change",function(b)
{
$(b.target).parent().siblings().find(".zg-form-text-input").toggle()
}
);

$("#weibopageenable").on("change",function(b)
{
b=$(b.target);
$.post("/node/SettingsWeiboPageV2",
{
method:b.is(":checked")?"enable":"disable"
}
).done(function(b)
{
b.r?U(b.msg):Lr([n,"保存成功"])
}
);
return n
}
);
c=$("#js-settings-account-form");
if(c.length)
{
var g=fk(function()
{
new ql(I("password"))
}
),d=$("#url_token"),h=$("#js-url-preview .token");
d.on("input change keyup",function()
{
h.text($.trim(this.value))
}
);
var l=$("#email"),m=function()
{
$("#js-email-confirm").show();
l.off("focus",m);
g()
}
;
l.one("focus",m);

$(function()
{
document.activeElement===l.get(0)&&m()
}
);
$(".resend-mail",c).click(function()
{
var b=$(this);
Ki.dispatchEvent("/activation/resend-email");
$.post("/reactive",function(c)
{
c.r?U(c.msg):b.replaceWith("已发送")
}
);
return n
}
);
jz(c);
var d=new Un,p=$(".rename-tab",c);
d.n(p.get(0));
var r=function()
{
$("input[placeholder]:visible",p).placeholder()
}
;
d.on("select",r);
var x=$(".rename-button",c),c=function()
{
x.remove();
p.show();
r()
}
;
x.one("click",c);
"#rename-section"===location.hash&&c()
}
c=$("#js-form-account-password");

c.length&&($("input[placeholder]",c).each(function()
{
new ql(this)
}
),jz(c));
(c=I("zh-topic-block-editor"))&&(new Rs(Jg)).n(c);
(c=I("zh-setting-page-bind-wrap"))&&(new ny).n(c);
if(c=$(".zh-general-list").get(0))d=new Wt(
{
Oa:["autoload","nodeSource"]
}
),this.H(d),d.n(c),this.g().c(c,"click",this.NR);
$(".zu-main-content-inner form").on("change","input, textarea, select",function()
{
b.vw("SettingsPage")
}
).on("submit",function()
{
b.ew("SettingsPage")
}
)
}
;

iz.prototype.vw=function()
{
$(window).on("beforeunload.SettingsPage",v(s("你的修改还未保存，确认离开该页面吗？"),this))
}
;
iz.prototype.ew=function()
{
$(window).off("beforeunload.SettingsPage")
}
;
a.jz=function(b)
{
$(".zg-form-text-input",b).each(function()
{
function b()
{
this.value!==this.defaultValue&&(e.hide(),d.off("change input keyup",b))
}
var d=$(this),e=d.next(".validate-error");
if(e.length)d.on("change input keyup",b)
}
)
}
;

iz.prototype.NR=function(b)
{
var c=b.target;
if(c&&c.name)
{
var d=c.id.split("-")[1];
Ci("取消黑名单","取消黑名单之后，对方将可以：关注你、给你发私信、向你提问、评论你的答案、邀请你回答问题。",function(b)
{
if(b)
{
var b=Kc(c,k,"zm-item"),g=xa(L,b),b=new V(j);
P(this.g(),b,"success",function()
{
g&&g();
var b=Xb("zm-item",I("zh-setting-page-black-list-wrap"));
(!b||!b.length)&&window.location.reload()
}
);
b.ajax(this.VV,"uid="+d)
}

}
,this)
}

}
;
a.kz=function()
{
M.call(this);
this.T=k;
this.Pj=0;
this.$J="/oauth/friends/sina";
this.nK="/invitation/sina";
this.Ac=new Jd(200)
}
;
y(kz,Rk);
t=kz.prototype;
t.v=function()
{
this.ji||(this.ji=j,this.o(),this.Da(),lz(this))
}
;
t.show=function()
{
this.v();
this.T.w(j);
var b=new Ob(this.T.h().offsetLeft,this.T.h().offsetTop);
b.y=102;
$f(this.T.h(),b)
}
;
t.o=function()
{
var b=I("zh-invitation-sina-diag");
b&&(this.e=b,this.T=new yi(k,n),this.T.eb("邀请微博好友"),Ih(this.T,k),this.T.aa().appendChild(this.e))
}
;

t.ga=function(b)
{
if("cancel"===b.target.name)this.T.w(n);
else if("invite"===b.target.name)
{
var b=Xb("zm-item-checkbox-right",this.Tj),c=[];
z.forEach(b,function(b)
{
b.checked&&(c.push(b.value),b.checked="")
}
,this);
c&&c.length&&(this.Mz=new V(j),this.g().c(this.Mz,"complete",this.aL),this.Mz.ajax(this.nK,"sinaids="+c.join(",")))
}

}
;

a.mz=function(b,c)
{
b.Pj=c?b.Pj+1:b.Pj-1;
b.FF.innerHTML=b.Pj+""
}
,a.lz=function(b,c)
{
b.lG||(b.lG=j,b.xhr=new V(j),P(b.g(),b.xhr,"complete",b.zf),b.xhr.ajax(b.$J,c?"force=1":""))
}
;
t.zf=function()
{
this.lG=n;
var b=Ie(this.xhr);
b&&!b.r?this.setData(b):U(b.msg)
}
;

t.setData=function(b)
{
this.UM=j;
this.rW.innerHTML=+b[0];
this.Pj=+b[1];
this.FF.innerHTML=this.Pj+"";
this.data=b=b[3];
var c=[];
z.forEach(b,function(b)
{
c.push(['<div class="zm-item zm-item-h50"><input type="checkbox" value="',b[0],'" class="zm-item-checkbox-right" /><img class="zm-list-avatar-medium" src="',b[2],'" /><div class="zm-list-content"><strong class="zg-gray-normal">',b[1],'</strong><div class="zg-gray-normal">',b[3],"</div></div></div>"].join(""))
}
,this);
this.Tj.innerHTML=c.join("")
}
;

t.Da=function()
{
this.Lt=J("zg-form-text-input",this.e);
(new gp("搜索微博好友")).n(this.Lt);
this.aj=J("zm-command",this.e);
this.Tj=I("zh-invitation-sina-friends-list");
this.MT=I("zh-invitation-sina-force-refresh");
this.g().c(this.MT,"click",function()
{
this.Tj.innerHTML="列表刷新中，请稍侯...";
lz(this,j)
}
);
this.g().c(this.Tj,"click",this.FR);
var b=Wb("strong",k,this.e);
this.rW=b[0];
this.FF=b[1];
this.g().c(this.Lt,"focus",this.SA).c(this.Lt,"blur",this.WA).c(this.Ac,Kd,this.JS);
this.g().c(this.aj,"click",this.ga)
}
;

t.FR=function(b)
{
var c=Kc(b.target,k,"zm-item");
if(c)
{
var d=k,e=Wb("input",k,c)[0];
if(D.has(c,"zm-item-active"))D.remove(c,"zm-item-active"),mz(this,j),d=n;
else
{
var g;
0>=this.Pj?(U("您的邀请码已经用完"),g=n):g=j;
g?(D.add(c,"zm-item-active"),mz(this,n),d=j):"INPUT"===b.target.tagName&&b.preventDefault()
}
"INPUT"!==b.target.tagName&&(e.checked=d);
b.stopPropagation()
}

}
;
t.SA=function()
{
this.Ac.start()
}
;
t.WA=function()
{
this.Ac.stop()
}
;

t.JS=function()
{
if(this.UM)
{
this.items||(this.items=Xb("zm-item",this.Tj));
var b=this.Lt.value;
b==k||""===b?z.forEach(this.items,function(b)
{
R(b,j)
}
):z.forEach(this.data,function(c,d)
{
this.items[d]&&(b===c[0]||-1<c[1].indexOf(b)?R(this.items[d],j):R(this.items[d],n))
}
,this)
}

}
;
t.aL=function()
{
var b=Ie(this.Mz);
b&&!b.r?(U("邀请发送完毕"),this.T.w(n)):U(b.msg)
}
;
a.nz=function()
{
M.call(this);
this.SJ="/oauth/unbind/sina"
}
;
y(nz,Rk);
nz.prototype.v=function()
{
var b=I("zh-invite-send-invite-sina");
b&&this.g().c(b,"click",this.XU);
(b=I("zh-invitation-cancel-bind-sina"))&&this.g().c(b,"click",this.PS)
}
;
nz.prototype.XU=function()
{
this.II||(this.II=new kz);
this.II.show()
}
;

nz.prototype.PS=function()
{
Ci("解除绑定","你确定要解除与新浪微博的绑定吗？",function(b)
{
if(b)
{
var c=new V(j);
P(this.g(),c,"success",function()
{
var b=Ie(c);
b&&!b.r?window.location.reload():U(b.msg)
}
);
c.ajax(this.SJ)
}

}
,this)
}
;
a.oz=function(b)
{
M.call(this);
this.url=b||"/topic"
}
;
y(oz,Rk);
t=oz.prototype;
t.n=function(b)
{
this.element=b;
var c=$("<ul>");
this.eJ=$("<li>");
c.append(this.eJ);
$(b).append(c);
this.fJ||(this.fJ=j,this.pB=new V(j),P(this.g(),this.pB,"success",this.$R),this.pB.ajax(this.url,k,"POST"))
}
;
t.$R=function()
{
var b=Ie(this.pB);
b&&(b&&b.r?U(b.msg):(pz(this,this.eJ,b.msg),this.fJ=n,this.z()))
}
;
t.z=function()
{
this.g().c(this.element,"click",this.bp)
}
;

t.bp=function(b)
{
var c=(b=b.target)?b.name:"";
if(c)switch(c)
{
case "load":case "loadmore":if(!this.Qo)
{
var c=b.getAttribute("data-token"),d=b.getAttribute("data-parent");
this.Qo=j;
this.Wj=new V(j);
P(this.g(),this.Wj,"success",this.Dq);
this.lA=b.parentNode;
this.lA.innerHTML='<span class="zg-gray">加载中...</a>';
this.Wj.ajax(this.url+"?child="+c+"&parent="+d,k,"POST")
}
break;
case "topic":window.location.href=b.href
}

}
;

a.pz=function(b,c,d)
{
var e=d[0],g="";
"topic"!==e[0]&&e[3]&&(g='data-parent="'+e[3]+'"');
c.html('<a href="'+("topic"===e[0]?"/topic/"+e[2]+"/organize/entire":"javascript:;
")+'" data-token="'+e[2]+'" '+g+' name="'+e[0]+'">'+e[1]+"</a><ul class='zm-topic-organize-list'></ul>");
"topic"!==d[0][0]&&c.addClass("zm-topic-organize-loadmore");
c=$("ul",$(c));
if(1<d.length)
{
d=d[1];
for(e=0;
e<d.length;
e++)
{
var g=d[e],h=$("<li>").addClass("zm-topic-organize-item");
c.append(h);
pz(b,h,g)
}

}

}
;

t.Dq=function()
{
var b=Ie(this.Wj);
if(b)if(b&&b.r)U(b.msg);
else if(b=b.msg,b[1])
{
$(this.lA).hide();
for(var c=$(this.lA.parentNode),d=0;
d<b[1].length;
d++)
{
var e=b[1][d],g=$("<li>").addClass("zm-topic-organize-item");
"topic"!==e[0][0]&&g.addClass("zm-topic-organize-loadmore");
c.append(g);
pz(this,g,e)
}
this.Qo=n
}

}
;
a.qz=function(b,c,d)
{
kr.call(this,b,c,d)
}
;
y(qz,kr);
qz.prototype.Af=function(b)
{
Gg[0][0]===b?this.uh():qz.m.Af.apply(this,arguments)
}
;
qz.prototype.nC=function(b)
{
if(b=Ie(b.target))b.r?U(b.msg):b.msg&&(window.location.href=b.msg)
}
;
a.rz=function(b)
{
this.Dc=this.Du=k;
E.extend(this.C=
{

}
,this.Q,b||
{

}
)
}
;
y(rz,T);
rz.prototype.Q=
{
options:
{

}
,WL:".zh-answers-filter",tT:".zh-answers-filter-popup"
}
;

rz.prototype.z=function()
{
rz.m.z.call(this);
var b=this,c=this.C,d=$(this.e),e=$(c.WL,d),g=$(c.tT,d);
b.Du=g;
e&&(A&&e.add(g).css("line-height","25px"),e.attr("tabindex",0),this.Du.html(sz(this)),e.add(g).hover(function()
{
g.show()
}
,function()
{
g.hide()
}
),g.on("click",".selectable",function()
{
var c=$(this),d=c.text(),c=c.data("key");
g.hide();
$(".lbl",e).text(d);
b.Dc=c;
b.Du.html(sz(b));
b.dispatchEvent(
{
type:"change",data:
{
key:c
}

}
);
Y.U(
{
type:"ga_click_sorter_item",target:b,data:
{
key:c
}

}
)
}
))
}
;

rz.prototype.W=q("Dc");
rz.prototype.ta=ca("Dc");
a.sz=function(b)
{
var c=b.Dc;
return $.map(b.C.options,function(b,e)
{
return'<div tabindex="0" class="'+(e===c?"active":"selectable")+'" data-key="'+e+'"><span class="lbl">'+b+'</span><i class="zg-icon zg-icon-double-arrow"></i></div>'
}
).sort(function(b)
{
return 0<=b.indexOf("active")?-1:1
}
).join("")
}
;
a.tz=function()
{
T.call(this);
var b=Gg;
this.Nf=b[0][3];
this.lu=b[0];
this.R_=b[1];
this.i_=b[2];
this.q_=b[3];
this.xn=b[4];
this.Ho=b[5];
this.nh="topic"
}
;
y(tz,T);
t=tz.prototype;
t.v=function()
{
kl.H(this);
this.n(document.body)
}
;

t.z=function()
{
function b(b)
{
b&&b.msg&&U(b.msg)
}
tz.m.z.call(this);
var c=I("zh-topic-side-head");
if(c)
{
var d=J("zu-entry-focus-button",c);
(this.CN=d)&&this.g().c(d,"click",function()
{
wk(d,"topic","",["zg-btn-green","zg-btn-white"])
}
);
(this.ug=I("zh-topic-operation-menu"))&&this.g().c(this.ug,"click",this.CA)
}
if(c=I("zh-current-topic-bio"))
{
var e=new kr(j,"/topic/bio/update","bio");
e.qd=["tid="+this.Nf];
e.Ab='<a href="javascript:;
" name="edit">你在 '+this.lu[0]+" 话题中的经验</a>";
e.ur=j;
e.n(c)
}
(c=I("zh-topic-top-answerer"))&&
(new Tn(c,"people",["zg-follow","zg-unfollow"])).v();
if(c=I("zh-topic-direct-question-list"))c=new Ny(c,k,"question",k,j),c.Hf("question-item"),c.v();
if(c=I("zh-topic-log-list"))c=new Ny(c,k,k,k,j),c.Lm(Hy),c.v();
if(c=I("zh-topic-title"))this.Md=new qz(n,"/topic/update","title"),this.Md.qd=["tid="+this.Nf],this.Md.n(c),$(c).on("click",".js-pin",function()
{
var b=$(this),c=b.attr("data-action");
$.post(c,
{
tid:Gg[0][3]
}
).done(function(c)
{
c.r?U(c.msg):b.replaceWith(b.hasClass("pin")?'<a href="javascript:;
" data-action="/pin-topic/remove" class="js-pin zg-gray unpin topic-hover-content"><i class="z-icon-unpin"></i>取消固定</a>':
'<a href="javascript:;
" data-action="/pin-topic/add" class="js-pin zg-gray pin topic-hover-content"><i class="z-icon-pin"></i>固定话题</a>')
}
)
}
);
if(c=I("zh-topic-desc"))e=$(c).find(".zm-editable-content").data("editable-maxlength"),this.Sn=new nr(j,"/topic/update","description",e),this.Sn.Ab='<a href="javascript:;
" name="edit">添加话题描述</a></div>',this.Sn.qd=["tid="+this.Nf],this.Sn.Vq=n,this.Sn.qJ=n,this.Sn.n(c);
if(c=I("zh-topic-faq"))this.Ir=new nr(j,"/topic/"+encodeURIComponent(Gg[0][1])+"/faq","content",
400),this.Ir.Ab='<div class="zm-topic-faq-container"><div class="zg-gray-normal">常见问题是该话题下经常会提到的问题的整理，以便后来者查阅（<a href="http://www.zhihu.com/question/20388061" class="zg-link-litblue">如何创建？</a>）</div><a href="javascript:;
" name="edit" class="zg-link-litblue"><span class="zg-blue-edit"></span>为「'+Gg[0][0]+"」添加常见问题</a></div>",this.Ir.l0=function(b)
{
return!b?"":b.replace(/(<\/?(?!ul|li|a|br)[^>\/]*)\/?>/gi,"")
}
,this.Ir.Vq=n,this.Ir.n(c);
if(Og)$("div.topic-avatar").addClass("disabled");
else if(c=J("zm-entry-head-avatar-edit-button"))
{
var e=
new ly(2,Gg[0][3]),g=J("zm-avatar-editor-preview");
e.n(c);
N(e,"beforepost",function()
{
$("<div class='avatar-edit-preview-loading topic'><span></span></div>").appendTo(g.parentNode)
}
);
N(e,"success",function(b)
{
g&&(g.src=b.src);
$(".avatar-edit-preview-loading").remove()
}
)
}
if(c=I("zh-topic-feed-list"))e=new Wt,this.H(e),e.Oa("locationSource",
{
Fy:0,offset:function(b)
{
return z.Cf(b).getAttribute("data-score")
}

}
),e.Oa("childConstructor",
{
Sg:Cx
}
),e.n(c),this.g().c(e,"click!",function(b)
{
"comment"===b.namespace&&
b.Cc.fill("category",this.nh).fill("label","topic_activity")
}
);
if(c=I("zh-topic-top-page-list"))e=new Wt(
{
zA:n
}
),this.H(e),e.Oa("childConstructor",
{
Sg:Cx
}
),e.n(c),this.g().c(e,"click!",function(b)
{
"comment"===b.namespace&&b.Cc.fill("category",this.nh).fill("label","topic_activity")
}
);
var h=this;
h.ab&&h.g().c(h.ab,"afterload",function(b)
{
Y.U(
{
type:"ga_click_topic_more",data:b.data,target:h.ab.ac
}
)
}
);
if(c=I("zh-topic-followers-list-wrap"))c=new Ny(c,["/topic",encodeURI(this.lu[1]),"followers"].join("/"),
k,["zg-btn-follow","zg-btn-unfollow"],j),c.Hf("zm-person-item"),c.v();
if(I("zh-topic-organize-page-wrap"))
{
if(c=I("zh-topic-organize-parent-editor"))e=new As(k,this.Nf,j),e.at=j,e.n(c),e.qC=n,e.addEventListener("remove_tag",function(b)
{
(b=b.data&&b.data.id)&&$("#wedge-"+b).remove()
}
);
if(c=I("zh-topic-organize-child-editor"))e=new As(k,this.Nf,n),e.at=j,e.n(c),$("a.entire-link").insertAfter(e.Tn).show();
$("#zm-topic-manage-relation").on("change",'[type="checkbox"]',function()
{
var b=$(this).closest("li").attr("id").split("-")[1];

$.post("/topic/update",
{
action:"set_topic_edge",parent_topic_id:b,topic_id:Gg[0][3],edge:this.checked^0
}
).done(function(b)
{
b&&b.msg&&U(b.msg)
}
)
}
);
this.dv=I("zh-topic-alias-input");
new ql(this.dv,"输入话题别名");
this.ev=I("zh-topic-alias-list");
this.g().c(I("zh-topic-alias-container"),"click",this.MS);
if(c=I("zh-topic-merge"))this.Pa=new Ss,this.Pa.n(c);
(c=I("zh-topic-merge-btn"))&&this.g().c(c,"click",this.oS)
}
(c=I("zh-topic-organize-page-children"))&&(new oz("/topic/"+encodeURIComponent(Gg[0][1])+"/organize/entire")).n(c);

if(c=I("zh-topic-side-related-topics"))this.PT=c,this.Vz=new V(n),this.g().c(this.Vz,"complete",this.yS),this.Vz.ajax("/topic/related?tid="+this.Nf);
I("zh-topic-admin-page-wrap")&&(c=I("zh-topic-del-btn"))&&this.g().c(c,"click",this.WR);
if(c=I("zh-topic-log-list-wrap"))c=new Ny(c,["/topic",encodeURI(this.lu[1]),"log"].join("/"),k,["zg-btn-follow","zg-btn-unfollow"],j),c.Lm(Hy),c.v();
this.ey();
Ir();
(c=J("zm-topic-search-input-new"))&&new ql(c,"在话题中搜索");
var l=$(c);
Dg.Nc||l.focus(function()
{
l.addClass("stretch-to")
}
).blur(function()
{
l.removeClass("stretch-to")
}
);

(c=J("zm-topic-ask-in-topic"))&&this.g().c(c,"click",this.Ut);
(c=J("zm-topic-feed-container"))&&(new Tn(c,"question",["zg-follow","zg-unfollow"])).v();
(c=I("zh-topic-side-children-list"))&&(new Tn(c,"topic",["zg-follow","zg-unfollow"])).v();
(this.rs=I("zh-topic-info-add"))&&this.g().c(this.rs,"submit",this.jS);
(this.sF=J("zm-topic-info-content-main",this.e))&&this.g().c(this.sF,"click",this.hS);
$("#zh-topic-manage-info-form").on("change",'input[type="radio"]',function()
{
$.post("/topic/"+Gg[0][1]+
"/information/manage",
{
info:$(this).val(),action:"change"
}
).done(b)
}
);
$("#zh-topic-manage-relation-form").on("change",'input[type="radio"]',function()
{
$.post("/topic/update",
{
action:"set_topic_weaknode",topic_id:Gg[0][3],weak:$(this).val()
}
).done(b)
}
);
$("#zh-topic-manage-lock-form").on("change",'[type="checkbox"]',function()
{
$.post("/topic/lock",
{
url_token:Gg[0][1],lock_type:this.name,lock_value:$(this).is(":checked")?1:0
}
).done(b)
}
);
(c=I("zh-topic-info-add"))&&z.forEach(qc(c),function(b)
{
var c;
b&&
(b.getAttribute&&(c=b.getAttribute("data-placeholder")))&&new ql(b,c)
}
);
S.xe||$(".js-may-disable").click(function()
{
ll.D().w(j);
return n
}
)
}
;

t.oS=function()
{
this.mr=this.Pa.xD;
if(!this.vG&&this.mr)
{
this.vG=j;
this.Uy=new V(j);
P(this.g(),this.Uy,"success",this.bL);
this.Uy.ajax("/topic/"+encodeURIComponent(Gg[0][1])+"/demand","action=merge&target_topic_id="+this.mr[3]);
var b=I("zh-topic-merged-msg");
R(I("zh-topic-merge"),n);
R(b,j);
b=Wb("a",k,b)[0];
b.href="/topic/"+this.mr[1];
b.innerHTML=this.mr[0];
this.Pa&&(this.Pa.Qa.value="")
}

}
;
t.bL=function()
{
var b=Ie(this.Uy);
b&&b.r?U(b.msg):this.vG=n
}
;

t.WR=function()
{
this.ID||(this.ID=j,this.aw=new V(j),P(this.g(),this.aw,"success",this.XK),this.aw.ajax("/topic/"+encodeURIComponent(Gg[0][1])+"/demand","action=remove"))
}
;
t.XK=function()
{
var b=Ie(this.aw);
b&&b.r?U(b.msg):(b=I("zh-topic-del-msg"),R(I("zh-topic-del-btn"),n),R(b,j),this.Pa&&(this.Pa.Qa.value=""),this.ID=n)
}
;

t.MS=function(b)
{
if((b=b.target)&&b.name)if("add"===b.name)
{
if(b=this.dv.value)this.fv=new V(j),P(this.g(),this.fv,"complete",this.UK),this.fv.ajax(window.location.href,"action=add_alias&alias="+encodeURIComponent(b))
}
else"remove"===b.name?(this.Wz=new V(j),b=b.parentNode.getAttribute("data-token"),P(this.g(),this.Wz,"complete",this.gL),this.Wz.ajax(window.location.href,"action=remove_alias&alias_token="+b)):"remove-merged"===b.name&&(this.Zz=new V(j),b=b.parentNode.getAttribute("data-token"),P(this.g(),
this.Zz,"complete",this.hL),this.Zz.ajax("/topic/"+encodeURIComponent(Gg[0][1]+"/demand"),"action=remove&target_topic_id="+b))
}
;
t.hL=function()
{
var b=Ie(this.Zz);
b&&b.r?U(b.msg):uz(this,b.msg)
}
;
t.gL=function()
{
var b=Ie(this.Wz);
b&&b.r?U(b.msg):uz(this,b.msg)
}
;
a.uz=function(b,c)
{
var d=Wb("li",k,b.ev);
z.forEach(d,function(b)
{
b.getAttribute("data-token")===c[1]&&R(b,n)
}
)
}
;

t.UK=function()
{
var b=Ie(this.fv);
if(b&&b.r)U(b.msg);
else
{
var b=b.msg,c=K("li");
c.setAttribute("data-token",b[1]);
c.innerHTML=b[0]+' <a name="remove" href="javascript:;
" class="zg-link-gray">移除</a>';
this.ev.appendChild(c);
this.dv.value="";
R(this.ev.parentNode,j)
}

}
;
t.CA=function(b)
{
this.xz?this.ib.R()?this.ib.w(n):(this.ib.w(j),b.stopPropagation(),b.preventDefault(),this.fl()):(b.stopPropagation(),b.preventDefault(),this.Mj(),this.fl());
this.xz=j
}
;
t.fl=function()
{
P(this.g(),document,"click",function()
{
this.ib.w(n)
}
)
}
;

t.Mj=function()
{
var b=I("zh-topic-side-head"),c=this.ug.getAttribute("data-auth");
this.ib=new ou;
this.Mx=j;
"f-topic-manage"===c&&this.ib.Ea(this.TS=new lu("管理话题"));
this.ib.Ea(this.US=new lu("组织话题"));
this.ib.Ea(this.SS=new lu("话题日志"));
this.Mx&&(this.ib.Y(b),this.g().c(this.ib,"action",this.Bj))
}
;
t.Bj=function(b)
{
var c="";
b.target===this.TS?c="admin":b.target===this.US?c="organize":b.target===this.SS&&(c="log");
window.location.href=["/topic",this.lu[1],c].join("/")
}
;

t.yS=function()
{
var b=Ie(this.Vz);
if(b&&!b.r)
{
var c=[];
z.forEach(b,function(b)
{
c.push(ik(b,k,j))
}
);
this.PT.innerHTML=c.join("")+'<div class="zg-clear"></div>';
b.length&&R(I("zh-topic-side-related-topics-wrap"),j)
}

}
;
t.ey=function()
{
var b=I("zh-topic-search-list");
b&&(this.ab=new Bx(b,k,j),this.ab.Hf("zm-search-result-item"),this.ab.ct=function(b)
{
if(b&&0!==b.length)return b[b.length-1].getAttribute("data-offset")
}
,this.ab.v())
}
;

t.hS=function(b)
{
var c=b.target;
c&&c.name&&"remove"===c.name&&(this.VP=c,this.tF||(this.tF=j,this.Yx=new V(j),this.g().c(this.Yx,"success",this.iS),b="token="+this.VP.parentNode.getAttribute("data-token")+"&action=remove&element="+encodeURIComponent($(b.target).prev("[data-element]").text()),this.Yx.ajax("/topic/"+Gg[0][1]+"/information/manage",b,"POST")))
}
;
t.iS=function()
{
this.tF=n;
var b=Ie(this.Yx);
b&&(b.r?U(b.msg):b.msg&&(b=b.msg,J("zm-topic-info-content-main",this.e).innerHTML=$(b).html()))
}
;

t.jS=function(b)
{
b.preventDefault();
this.uF||(this.uF=j,this.$x=new V(j),this.g().c(this.$x,"success",this.gS),b=qc(this.rs),this.$x.ajax("/topic/"+Gg[0][1]+"/information/manage","title="+b[0].value+"&content="+b[1].value+"&url="+b[2].value+"&action=add","POST"))
}
;
t.gS=function()
{
this.uF=n;
var b=Ie(this.$x);
b&&(b.r?U(b.msg):b.msg&&(b=b.msg,J("zm-topic-info-content-main",this.e).innerHTML=$(b).html(),b=qc(this.rs),z.forEach(b,function(b,d)
{
3>d&&(b.value="")
}
)))
}
;

t.Ut=function()
{
if(!xn())if(S.xe)
{
var b=qr.D();
b.show();
var c=J("zm-topic-search-input-new");
c.value&&tr(b,c.value);
b.Pa.data.length||b.Pa.vk(Gg[0])
}
else ll.D().w(j)
}
;
a.vz=function(b)
{
T.call(this,b)
}
;
y(vz,T);
vz.prototype.o=function()
{
this.e=this.J().o("FORM",
{
method:"POST",style:"display:none"
}
)
}
;
vz.prototype.post=function(b,c,d)
{
var e=this.h();
e||(this.Y(),e=this.h());
e.action=c||"";
e.target=d||"";
var c=e,g,h=new Zr;
for(g in b)d=b[g],na(d)?z.forEach(d,v(this.yC,this,h,g)):this.yC(h,g,d);
c.innerHTML=h.toString();
e.submit()
}
;
vz.prototype.yC=function(b,c,d)
{
b.append('<input type="hidden" name="',Ua(c),'" value="',Ua(d),'">')
}
;
a.wz=function()
{
M.call(this)
}
;
y(wz,Rk);
wz.prototype.v=function()
{
var b=gs(new vf(window.location.href),"group_id");
b&&(this.$j=new V(n),P(this.g(),this.$j,"success",this.Gz),b&&this.$j.ajax("/noti7/read","group_id="+b,"POST"))
}
;
wz.prototype.Gz=function()
{
var b=Ie(this.$j);
if(b&&!b.r&&b.msg)
{
var c=b.msg;
if(c===j||"true"===c||"True"===c)return;
this.AR=b.msg;
this.dispatchEvent("change")
}
(b=Rm)&&Sm(b)
}
;
a.xz=function()
{
T.call(this);
var b=Ig||[0,0];
this.Ls=b[0];
this.visible=!!b[1];
this.nh="collection"
}
;
y(xz,T);
t=xz.prototype;
t.v=function()
{
kl.H(this);
this.n(document.body)
}
;

t.z=function()
{
xz.m.z.call(this);
var b=I("zh-list-side-head");
if(b)
{
var c=J("zu-entry-focus-button",b);
(this.CN=c)&&this.g().c(c,"click",function()
{
wk(c,"favlist","",["zg-btn-green","zg-btn-white"])
}
);
(this.ug=I("zh-list-operation-menu"))&&this.g().c(this.ug,"click",this.CA)
}
(b=I("zh-single-answer-author-info"))&&(new Tn(b)).v();
(b=I("zh-list-create-new-list"))&&this.g().c(b,"click",this.QU);
(b=I("zh-fav-list-side-bar-creator"))&&(new Tn(b)).v();
(b=I("zh-fav-list-side-bar-report"))&&this.g().c(b,
"click",this.om);
(this.Nk=I("zh-favlist-webshare-container"))&&this.g().c(this.Nk,"click",this.FA);
if(this.Pb=I("zh-list-meta-wrap"))this.g().c(this.Pb,"click",this.om),this.qZ=I("zh-list-comment-num"),gs(new vf(location.href),"fc")&&yz(this);
(b=I("zh-favlists-wrap"))&&(new Ny(b,k,"favlist",k,j)).v();
if(b=I("zh-list-answer-wrap"))$(b).on("click","a[name=unfavo]",$.proxy(this.tP,this)),b=new Bx(b,k,j),this.H(b),this.g().c(b,"click!",function(b)
{
"comment"===b.namespace&&b.Cc.fill("category",this.nh).fill("label",
"collection_answer")
}
),b.Hf("zm-item-fav"),b.v();
(b=I("zh-favlist-log-list-wrap"))&&(new Ny(b,k,"favlist",k,j)).v();
(b=I("zh-favlist-following-wrap"))&&(new Ny(b,k,"favlist",k,j)).v();
if(b=I("zh-favlist-followers-wrap"))b=new Ny(b,k,"people",["zg-btn-follow","zg-btn-unfollow"],j),b.Hf("zm-profile-section-item"),b.yB(j),b.v();
this.g().c(window,"hashchange",this.J_);
this.Yo=new wz;
this.Yo.v()
}
;

t.tP=function(b)
{
var b=b.target,c=b.id.split("-"),d=c[1],c=c[2];
(new V(j)).ajax("/collection/remove","answer_id="+d+"&favlist_id="+c);
if(c=Kc(b,"div","zm-item"))b=Xb("zm-item-answer",c),1===b.length?L(c):(b=z.find(b,function(b)
{
return b.getAttribute("data-aid")===d
}
))&&L(b.parentNode)
}
;
t.FA=function(b)
{
var b=sk(this.Nk,b.target),c=location.pathname.match(/^\/collection\/(\w+)/);
if(b&&b.name&&c)
{
var c=c[1],d=Ig[0],e=Cu.D();
e.wk("分享收藏夹","collection",c,
{
fid:d
}
);
e.show();
Du(e,"tb-webshare-"+b.name)
}

}
;

t.QU=function()
{
av().show()
}
;
t.CA=function(b)
{
this.xz?this.ib.R()?this.ib.w(n):(this.ib.w(j),b.stopPropagation(),b.preventDefault(),this.fl()):(b.stopPropagation(),b.preventDefault(),this.Mj(),this.fl());
this.xz=j
}
;
t.fl=function()
{
P(this.g(),document,"click",function()
{
this.ib.w(n)
}
)
}
;
t.Mj=function()
{
var b=I("zh-list-side-head");
this.ib=new ou;
this.Mx=j;
this.visible||this.ib.Ea(this.WS=new lu("设置为公开"));
this.ib.Ea(this.RS=new lu("删除此收藏夹"));
this.Mx&&(this.ib.Y(b),this.g().c(this.ib,"action",this.Bj))
}
;

t.om=function(b)
{
b=b.target;
switch(b&&b.name)
{
case "report-favlist":bu.Dm("favlist",this.Ls);
break;
case "edit":gv(av());
break;
case "addcomment":yz(this);
this.ma.oe();
this.ma.$b()&&this.ma.Ji("view_comments",parseInt(Hc(b),10)||0);
break;
case "remove":zz(this)
}

}
;

t.Bj=function(b)
{
b.target===this.WS?Ci("确定设置收藏夹为公开？","收藏夹设置为公开后，将不能再设置为私密。",function(b)
{
b&&(this.y_=!this.visible,this.nJ=new V(j),this.g().c(this.nJ,"complete",function()
{
window.location.reload()
}
),this.nJ.ajax("/collection/update","favlist_id="+this.Ls+"&is_public=1"))
}
,this):b.target===this.RS&&zz(this)
}
;

a.zz=function(b)
{
Ci("删除收藏夹","你确定要删除这个收藏夹吗？",function(b)
{
b&&(b=new tk,b.add("favlist_id",this.Ls),b.add("_xsrf",(new Kf(document)).get("_xsrf")),(new vz).post(es(b),"/collection/delete"))
}
,b)
}
,a.yz=function(b)
{
b.ma||(b.ma=new Qw(b.Ls,"favlist"),b.H(b.ma),b.g().c(b.ma,"click!",function(b)
{
"comment"===b.namespace&&(b.Cc.fill("category",this.nh).fill("label","collection"),b.Cc.action=b.Cc.action.replace("favlist","collection"))
}
),Tw(b.ma,b.Pb,$(".toggle-comment",b.Pb)[0]))
}
;
a.Az=function(b,c)
{
T.call(this);
this.kd=b;
this.entryType=c;
this.Zn="zm-item-expanded"
}
;
y(Az,T);
t=Az.prototype;
t.$k=k;

t.z=function()
{
Az.m.z.call(this);
this.kd=this.e.getAttribute("data-entry-id");
this.bE=this.e.getAttribute("data-entry-token");
E.forEach(
{
'a[name="expand"]':function(b)
{
this.Ka(j);
this.cm&&(b.currentTarget.name="toggleExpanded")
}
,'a[name="collapse"]':function()
{
this.Ka(n)
}
,'a[name="toggleExpanded"]':this.oe,'a[name="toggle-comment"]':function(b)
{
this.Ii();
this.ma.$b()&&(b=parseInt(Hc(b.currentTarget),10)||0,this.ma.Ji("view_comments",b))
}
,'a[name="share"]':this.ce,'a[name="ignore"]':this.HO,".js-close":this.UE,
".js-unhide":this.uP,".js-hiderelated":this.cP
}
,function(b,c)
{
$(this.e).on("click",c,$.proxy(b,this))
}
,this);
var b=this.Vp=new nx;
this.H(b);
Tc(this,b);
this.g().c(b,"expand",function()
{
this.Ka(j)
}
);
b.n(this.e);
b.Xc()&&P(this.g(),b,"expand",this.Py);
Vt(this.e,this.Qy,this);
if(b=J("zm-votebar",this.e))this.rc=new kv(this.kd,this.entryType),Tc(this,this.rc),this.rc.n(b),(b=J("votenum-mobile",this.e))&&(new ox(this.rc)).n(b);
if(b=J("zm-item-vote-info",this.e))
{
var c=this.p0=new nv(this.kd,this.entryType);

Tc(this,c);
c.n(b);
this.rc&&this.g().c(this.rc,"change",function()
{
c.lk()
}
).c(c,"change",function()
{
var b=J("zm-item-vote-count",this.e),e=$(".zm-votebar .count",this.e)[0];
b&&gk(b,c.Va());
e&&gk(e,c.Va())
}
)
}
this.Lh()
}
;
t.mv=function(b)
{
var c=b.getBoundingClientRect().bottom;
c<$b().height&&setTimeout(function()
{
var d=b.getBoundingClientRect().bottom,e=ys(document);
window.scrollTo(e.x,e.y+d-c)
}
)
}
;
t.Py=function()
{
Fu(this.entryType,this.bE,"read")
}
;
t.Qy=function()
{
Fu(this.entryType,this.bE,"touch")
}
;

t.$b=function()
{
return D.has(this.e,this.Zn)
}
;
t.oe=function()
{
this.Ka(!this.$b())
}
;
t.Ka=function(b)
{
if(b===this.$b())return n;
b&&At(this.e).height<$b().height&&1<$("a.collapse",this.e).length&&$("a.collapse",this.e).eq(0).remove();
b||this.mv(this.e);
D.enable(this.e,this.Zn,b);
this.Vp&&this.Vp.Ka(b);
this.dispatchEvent(b?"expand":"collapse");
return j
}
;

t.Lh=function()
{
var b=this.$_=ek.CB(this.e);
dk(ck(b,"v",function()
{
this.rc&&this.rc.lB()
}
,this),
{
group:"操作",name:"赞同"
}
);
dk(ck(b,"d",function()
{
this.rc&&this.rc.kB()
}
,this),
{
group:"操作",name:"反对"
}
);
dk(ck(dk(ck(dk(ck(dk(ck(dk(ck(b,"o",this.oe,this),
{
group:"操作",name:"显示全部/收起"
}
),"c",this.Ii,this),
{
group:"操作",name:"打开评论"
}
),"f x",this.ce,this),
{
group:"操作",name:"分享"
}
),"shift+c",this.Ax,this),
{
group:"操作",name:"定位到评论框"
}
),"shift+o",this.XS,this),
{
group:"操作",name:"新窗口打开条目"
}
)
}
;

t.UE=function()
{
$(this.e).fadeOut(150,function()
{
$(this).remove()
}
)
}
;
t.HO=function()
{
$(".feed-hide-options",this.e).show().siblings().hide();
$.post(St("/%s/uninterest",this.entryType),
{
id:this.kd
}
)
}
;
t.uP=function()
{
$(".feed-hide-options",this.e).hide().siblings().show();
$.post(St("/%s/undo_uninterest",this.entryType),
{
id:this.kd
}
)
}
;

t.cP=function(b)
{
var b=$(b.currentTarget),c=b.data();
Ci(b.attr("title"),St("确定%s吗？",b.text()),function(b)
{
b&&(this.UE(),$.post(St("/%s/uninterest",c.type),
{
id:c.id
}
))
}
,this)
}
;
t.ce=function()
{
var b=Cu.D();
b.wk.apply(b,arguments);
b.show();
Du(b,"tb-webshare-sina")
}
;
t.Ii=function()
{
this.zw();
this.ma.oe()
}
;
t.Ax=function()
{
this.ma?this.ma.field.focus():this.Ii()
}
;

t.zw=function()
{
if(!this.ma)
{
var b=$(".toggle-comment",this.e)[0];
this.ma=new Qw(this.kd,this.entryType);
this.H(this.ma);
Tw(this.ma,$(".zm-item-meta",this.e).get(0),b)
}

}
;
a.Bz=function()
{
Az.call(this);
this.entryType="post"
}
;
y(Bz,Az);
t=Bz.prototype;
t.ce=function()
{
Bz.m.ce.call(this,"分享文章","post",this.kd,
{
post_id:this.kd
}
)
}
;
t.XS=function()
{
window.open($(".post-link",this.e).attr("href"))
}
;
t.Ka=function(b)
{
Bz.m.Ka.call(this,b)&&this.vA(b)
}
;
t.vA=function(b)
{
var c=this.zo();
c&&Uq(c,b)
}
;

t.zo=function()
{
if(this.iq)return this.iq;
var b=!ub,c=J("zm-editable-content",this.e),d=this.rc&&this.rc.h();
b&&(d&&$(d).is(":visible")&&c&&230<$(c).height())&&(b=this.iq=new Xq(k,c),this.H(b),b.Gi="votebar",b.Cz=50,b.n(d))
}
;
a.Cz=function(b,c,d)
{
pu.call(this,b,c,d)
}
;
y(Cz,pu);
Cz.prototype.zf=function(b)
{
b&&!b.r&&(b=b.msg,b.length?(R(this.ac,0<b.length),this.offset+=b.length,this.lv(b),su(this,n),vu(this)):this.Tk.hide())
}
;
a.Dz=
{
ROUNDTABLE_ADD_RELATED:"roundtable",ARTICLE_VOTE_UP:"post_vote",ARTICLE_CREATE:"post_create",RECOMMENDED:"feed_recommended",QUESTION_FOLLOW:"feed_question_follow",QUESTION_CREATE:"feed_question",ANSWER_VOTE_UP:"feed_answer_vote",ANSWER_CREATE:"feed_answer_answer"
}
;

Cz.prototype.BP=function(b)
{
var c=b.currentTarget.e.getAttribute("data-feedtype"),c=Dz[c];
"comment"===b.namespace&&c&&b.Cc.fill("category","feed").fill("label",c)
}
;
Cz.prototype.bk=function(b)
{
var c;
c="p"===b.getAttribute("data-type")?new Bz:new Cx;
this.H(c);
this.g().c(c,"click!",this.BP);
c.n(b);
N(c,"ignore",v(function(b)
{
this.dispatchEvent(
{
type:"ignore",X:b.X
}
)
}
,this));
return c
}
;
Cz.prototype.DH=function(b)
{
return
{
params:b,method:"next"
}

}
;
Cz.prototype.p=function()
{
Cz.m.p.call(this)
}
;
a.Ez=function()
{
this.interval=3E4
}
;
ia(Ez);
a.Gz=function(b,c)
{
if(!b.Ac||c)c&&clearInterval(b.Ac),b.Ac=setInterval(v(function()
{
Fz(this)
}
,b),b.interval)
}
,a.Fz=function(b,c)
{
$(".feed-item-hook .time").each(function()
{
$(this).text(gt($(this).data("timestamp")))
}
);
c&&Gz(b,c)
}
;
a.Hz=function()
{
T.call(this);
this.sy=
{

}
;
this.$s=[];
this.xQ="old"===$("#feed-ver").val()?j:n;
this.QF=0<$("#is-topstory").length?j:n;
this.gE=this.xQ?"zm-item":"feed-item-hook";
window._gaq=window._gaq||[];
this.QF?window._gaq.push(["_setCustomVar",5,"is_topstory",j,3]):window._gaq.push(["_setCustomVar",5,"is_topstory",n,3])
}
;
y(Hz,T);
t=Hz.prototype;

t.z=function()
{
Hz.m.z.call(this);
this.K=$(this.e);
if(this.qf=I("zh-main-feed-fresh-button"))this.HB=$(this.qf),this.QF?(this.g().c(this.qf,"click",this.NT),this.g().c(Y,"topstory",this.sP)):(this.g().c(this.qf,"click",this.VU),this.g().c(Y,"homefeed",this.VO));
this.ab=new Cz(this.e,k,j);
this.getParent()&&this.getParent().H(this.ab);
var b="/node/"+$(this.e).data("init").nodename;
this.ab.url=b;
this.ab.Hf("feed-item-hook");
this.g().c(this.ab,"itemcreated",function(b)
{
Iz(this,b.data.MQ)
}
).c(this.ab,"afterload",
function(b)
{
Y.U(
{
type:"ga_click_feed_more",data:b.data
}
)
}
).c(this.ab,"ignore",function(b)
{
var c=b.X;
E.forEach(this.sy,function(b)
{
b.X===c&&$(b.e).fadeOut(150)
}
)
}
);
this.ab.v();
this.K.on("click",".js-more-similar",function()
{
$(this).parent().slideUp("fast").nextUntil(":not(.hidden)").slideDown("fast")
}
);
var c=this;
this.K.on("click",".js-change-some",function()
{
zk("feed","intrests-change");
var b=$(this),e=$(this).parent().parent();
$.post("/node/HomeExtraFeedList",
{
method:"next",params:
{

}

}
).done(function(g)
{
!g.r&&
g.msg&&(0<g.msg.length?(e.find(".feed-item-hook").remove(),e.append(g.msg).find(".feed-item-hook").each(function()
{
c.ab.bk(this)
}
)):b.replaceWith('<span class="zg-right zg-gray">没有更多内容了</span>'))
}
)
}
)
}
;
t.NT=function()
{
this.HB.text("加载中…");
this.Vm=0;
var b=this;
this.ab.offset=0;
this.ab.Fi=0;
uu(this.ab,j,function()
{
oh(b.ab,function(b)
{
$(b.h()).remove()
}
)
}
).done(function()
{
b.HB.hide();
ru(b.ab)
}
)
}
;

t.VU=function()
{
var b=J("zm-home-question-list-devider",this.e);
b&&D.remove(b,"zm-home-question-list-devider");
var b=this.$s.length,c=$("."+this.gE,this.e)[0];
c&&5<=b&&($(".feed-separator-hook",this.e).next(".feed-item-hook").css("border-top","1px solid #eee").end().remove(),$(c).css("border-top","none").before('<div class="feed-item-hook feed-separator-hook feed-separator"><span>上次你看到这里</span></div>'));
z.forEach(this.$s,function(b)
{
var c=$("."+this.gE,this.e)[0];
c?lc(b,c):this.e.appendChild(b)
}
,
this);
this.$s=[];
R(this.qf,n);
c=Ez.D();
Fz(c,j);
Y.U(
{
type:"ga_click_feed_fresh",data:
{
count:b
}

}
)
}
;

t.VO=function(b)
{
var c=La(b.mb),b=this.$s,d=b.length;
if(c&&!(500<d))
{
var e=hc(c),c=this.sy;
if(!E.Mr(c,function(b)
{
return b.h().id===e.id
}
))
{
var g=this.ab.bk(e);
if(g.pa)
{
if(E.Mr(c,function(b)
{
return b.pa===g.pa
}
))return
}
else if(g.X)
{
if(E.Mr(c,function(b)
{
return b.X===g.X
}
))return
}
else if(g.kd&&E.Mr(c,function(b)
{
return b.kd===g.kd
}
))return;
Iz(this,g);
b.push(e);
d+=1;
this.qf&&(this.qf.innerHTML=(99<d?"99+":d)+" 条新动态",R(this.qf,j))
}

}

}
;

t.sP=function(b)
{
this.Vm=this.Vm||0;
this.Vm+=+b.mb;
this.qf&&(this.qf.innerHTML=(99<this.Vm?"99+":this.Vm)+" 条新动态",R(this.qf,j))
}
;
a.Iz=function(b,c)
{
var d=ih(hh.D());
b.sy[d]=c;
$(c.e).attr("data-fid",d)
}
;
a.Jz=function()
{

}
;
y(Jz,T);
t=Jz.prototype;
t.z=function()
{
Jz.m.z.call(this);
var b=I("zh-invite-select");
b&&this.g().c(b,"change",this.qz);
(b=J("zm-invite-list"))&&this.g().c(b,"click",this.ga);
(this.Sx=I("zh-invite-ignore-all-btn"))&&this.g().c(this.Sx,"click",this.RP)
}
;

t.ga=function(b)
{
if((b=b.target)&&b.name)
{
if("ignore"===b.name)
{
this.a_=b;
this.b_=j;
D.add(b,"zg-btn-disabled");
this.SP=new V(n);
var c="qid="+b.getAttribute("data-qid")+"&uid="+S[3]+"&op=pass";
this.SP.ajax("/question/askpeople",c,"POST");
(c=b.parentNode)&&hk(c,j)
}
"recover"===b.name&&!this.RH&&(this.PH=b,this.RH=j,D.add(b,"zg-btn-disabled"),b.innerHTML="...",this.QH=new V(n),this.g().c(this.QH,"success",this.fL),b="qid="+b.getAttribute("data-qid")+"&uid="+S[3]+"&op=recover",this.QH.ajax("/question/askpeople",
b,"POST"))
}

}
;
t.qz=function(b)
{
var c=gs(new vf(location.href),"filter_by");
if((b=b.target)&&b.value)b=b.value,b!==c&&(window.location.href="/question/invited?filter_by="+b)
}
;
t.fL=function()
{
this.RH=n;
this.bc(this.PH,"ignore");
this.PH.name="ignore"
}
;

t.bc=function(b,c)
{
var d=b.parentNode,e=J("zm-invite-item-info-label",d);
"ignore"===c?(D.remove(b,"zg-btn-disabled"),D.remove(b,"recover"),D.add(b,"ignore"),D.add(d,"invite"),D.remove(d,"ignore"),e.innerHTML="新邀请",b.name="ignore",b.innerHTML="忽略"):(D.remove(b,"zg-btn-disabled"),D.remove(b,"ignore"),D.add(b,"recover"),D.remove(d,"invite"),D.remove(d,"draft"),D.add(d,"ignore"),e.innerHTML="已忽略",b.name="recover",b.innerHTML="恢复")
}
;

t.RP=function()
{
this.Tx||(this.Tx=j,this.mF=new V(n),this.g().c(this.mF,"success",this.$K),this.mF.ajax("/question/askpeople","uid="+S[3]+"&op=ignore_all","POST"))
}
;
t.$K=function()
{
this.Tx=n;
R(this.Sx);
this.Tx=n;
z.forEach(Xb("zm-invite-item-control"),v(function(b)
{
this.bc(b,"recover")
}
,this))
}
;
a.Kz=function()
{
T.call(this)
}
;
y(Kz,T);
Kz.prototype.z=function()
{
Kz.m.z.call(this);
this.Nl();
this.g().c(this.e,"click",this.ga)
}
;
Kz.prototype.ga=function(b)
{
b=b.target;
if(b.name)switch(b.name)
{
case "fold":$(b).parent().hide().prev().animate(
{
height:"show"
}
,200);
break;
case "fold-follow":$(b).parent().hide().prev().show();
break;
case "unfold-item":$(b).parent(".author-list").hide().siblings(".hidden").show()
}

}
;

Kz.prototype.Nl=function()
{
this.Qo||(this.Qo=j,this.Wj=new V(n),this.g().c(this.Wj,"success",this.mz),this.Wj.ajax("/noti7/calendar","","GET"))
}
;
Kz.prototype.mz=function()
{
this.Qo=n;
var b=He(this.Wj);
if(b)
{
var c=I("zh-noti7-list-inner");
/category/.test(b)?(c.innerHTML=b,c&&(b=new pu(c,"/noti7/calendar",j),b.lv=function(b)
{
var c=K("div","zm-item-more-wrap");
c.innerHTML=b;
lc(c,this.ac)
}
,b.cs=function(b)
{
this.Fi=this.ac.getAttribute("data-next");
return!b||b.msg[0]&&b.msg[1]
}
,b.v())):c.innerHTML='<div class="empty"><span class="zg-gray-normal">您收到的消息会显示在这里</span></div>'
}

}
;
a.Lz=function()
{
M.call(this);
this.Qx=[];
this.DD=[]
}
;
y(Lz,Rk);
Lz.prototype.v=function()
{
var b=I("home-suggest-block");
b&&(this.e=b,b=I("home-suggest-close-button"),P(this.g(),b,"click",function()
{
(new V(j)).ajax("/option","key=no_show_lookup&value=1");
R(this.e,n)
}
),b=I("home-suggest-refresh-button"),this.g().c(b,"click",this.xS),this.Ps=I("home-suggest-list"),Mz(this))
}
;
Lz.prototype.xS=function()
{
Nz(this);
return j
}
;

a.Nz=function(b)
{
for(var c=[],d=0;
3>d;
d++)
{
var e=b.DD.shift();
e&&c.push(e)
}
3===c.length?(b.Ps.innerHTML=c.join(""),c=Xb("suggest-item",b.Ps),z.forEach(c,function(b)
{
this.Qx.push(b.id.split("-")[1])
}
,b)):Mz(b)
}
,a.Mz=function(b)
{
b.Ps.innerHTML='<img class="bubble-loading" src="/static/img/noti-loading.gif">';
$.post("/lookup/suggest_member",
{
ids:b.Qx.join(",")
}
).done(v(b.UR,b))
}
;
Lz.prototype.UR=function(b)
{
b.r||((b=b.msg)&&ma(b)&&b.length?(this.Qx=[],this.DD=b,Nz(this)):this.Ps.innerHTML="下面没有了")
}
;
a.Oz=function()
{
T.call(this)
}
;
y(Oz,T);
Oz.prototype.v=function()
{
kl.H(this);
this.n(document.body)
}
;

Oz.prototype.z=function()
{
Oz.m.z.call(this);
var b=I("js-home-feed-list");
if(b)
{
var c=new Hz;
this.H(c);
c.n(b)
}
(b=J("zm-invite-container"))&&(new Jz).n(b);
I("home-settings-page-wrap")&&(b=I("zh-topic-block-editor"))&&(new Rs(Jg)).n(b);
(b=I("zh-noti7"))&&(new Kz).n(b);
if(b=I("zh-plazza-topic-search-wrap"))c=I("zh-plazza-topic-search-input"),(new gp("搜索话题")).n(c),this.L=new go("/topic-reg/autocomplete",c,k,k,b,n),this.L.Jf(j),this.g().c(this.L,"select",function()
{
var b=z.slice(this.L.kg(),1);
window.location.href=
"/topic/"+b[1]
}
);
if(c=I("zm-home-sidebar-domain-entry-link"))b=!!c.getAttribute("data-expanded"),c=new Ko(c,I("zm-home-sidebar-domain-entry-nav"),b),b&&xd(c,"toggle",function()
{
Ei("/notifeature?feature=4",k,"GET");
return j
}
);
$(".zm-side-pinned-topics").on("click",".unpin",function()
{
var b=$(this).parent();
$.post("/pin-topic/remove",
{
tid:$(this).attr("data-tid")
}
).done(function(c)
{
c.r||b.fadeOut()
}
)
}
);
if(b=$("#zh-virgin-answer-list > .zh-general-list").get(0))c=new Wt,this.H(c),c.Oa("nodeSource").Oa("childConstructor",

{
Sg:Cx
}
),c.n(b),this.g().c(c,"click!",function(b)
{
"comment"===b.namespace&&b.Cc.fill("category","debuts").fill("label","debuts")
}
);
(new Lz).v();
var b=S[1],d=I("zu-welcome-once");
d&&("welcome"===location.hash.slice(1)?(R(d,j),Nf.set("reg_noti_",b,86400)):b===Nf.get("reg_noti_")&&R(d,j),N(J("x-m",d),"click",function()
{
location.hash="";
L(d);
Nf.remove("reg_noti_")
}
));
var e=$("#js-global-notify");
if(e.length)
{
var g=new Pq;
g.n(e[0]);
as(g);
$(".zu-global-notify-close",e).click(function()
{
var b=$(this).data("id");

$.post("/notice/read",
{
nid:b
}
);
g.F();
e.remove()
}
)
}
b=Ez.D();
Gz(b);
var h=$("#js-debuts-entry .tour");
h.length&&$(".close-button",h).click(function()
{
var b=$(this).data("feature");
$.get("/notifeature",
{
feature:b
}
);
h.fadeOut(100,function()
{
h.remove()
}
)
}
)
}
;
a.Pz=function()
{
wh.call(this,k,n);
this.OC="zh-lightbox-showing";
this.BV="zh-lightbox-thumb";
this.vf()
}
;
y(Pz,wh);
ia(Pz);
t=Pz.prototype;
t.vf=function()
{
this.g().c(document,"click",this.Vr)
}
;

t.Vr=function(b)
{
b=b.target;
if("IMG"===b.tagName&&D.has(b,this.BV))
{
var c=b.getAttribute("data-original");
if(c)if(ub)window.open(c);
else if(!Kc(b,k,"editable"))
{
this.Na('<div class="zm-light-box-x1" id="zm-light-box-x1"><div class="zm-light-box-x2" id="zm-light-box-x2"><img src="'+c+'" class="zm-light-box-img-el" /><div class="zm-light-box-footer"><a class="zm-light-box-show-origin" href="'+c+'" target="_blank">查看原图</a></div></div></div>');
this.w(j);
D.add(this.h(),"zm-light-box-fullscreen-image");

var c=$b(),d=I("zm-light-box-x1"),e=I("zm-light-box-x2"),g=b.getAttribute("data-rawheight"),h=b.getAttribute("data-rawwidth"),h=h?+h:0;
(g?+g:0)>c.height-80?e.style.marginTop="40px":d.style.lineHeight=c.height+"px";
e.style.width=h>c.width-80?c.width-80+"px":h+"px";
Y.U(
{
type:"ga_click_enlarge_image",target:b
}
)
}

}

}
;
t.na=ha;
t.focus=ha;
t.Bx=function()
{
this.w(n);
D.remove(document.body,this.OC)
}
;
t.ti=function()
{
Pz.m.ti.call(this);
D.add(document.body,this.OC);
P(this.g(),document,"click",this.Bx)
}
;

t.o=function()
{
Pz.m.o.call(this);
D.add(this.h(),"zm-light-box")
}
;
t.Ny=function()
{
this.Uc=this.J().o("div",this.Gc+"-bg zm-light-box-background");
R(this.Uc,n)
}
;
Pz.D();
a.Qz=function(b,c,d)
{
lu.call(this,b,c,d);
this.Di(j)
}
;
y(Qz,lu);
Qz.prototype.ke=function()
{
return this.dispatchEvent("action")
}
;
po("goog-option",function()
{
return new Qz(k)
}
);
a.Rz=function()
{

}
;
y(Rz,Qo);
ia(Rz);
Rz.prototype.o=function(b)
{
return b.J().o("div",this.N()+" goog-inline-block"," ")
}
;
Rz.prototype.n=function(b,c)
{
c=Rz.m.n.call(this,b,c);
D.add(c,"goog-inline-block");
return c
}
;
Rz.prototype.N=s("goog-toolbar-separator");
a.Sz=function()
{

}
;
y(Sz,So);
ia(Sz);
Sz.prototype.vc=function()
{
return Xc.CK
}
;
Sz.prototype.fo=function(b)
{
return"HR"==b.tagName?new Ro(Rz.D()):Sz.m.fo.call(this,b)
}
;
Sz.prototype.N=s("goog-toolbar");
Sz.prototype.Yw=function()
{
return Uo
}
;
a.Tz=function()
{

}
;
y(Tz,Ku);
ia(Tz);
Tz.prototype.N=s("goog-toolbar-button");
a.Uz=function(b,c,d)
{
yo.call(this,b,c||Tz.D(),d)
}
;
y(Uz,yo);
po("goog-toolbar-button",function()
{
return new Uz(k)
}
);
a.Vz=function()
{

}
;
y(Vz,Mu);
ia(Vz);
Vz.prototype.createCaption=function(b,c)
{
return Vz.m.createCaption.call(this,Wz(b,c),c)
}
;
a.Wz=function(b,c)
{
return c.o("div","goog-color-menu-button-indicator",b)
}
;
Vz.prototype.ta=function(b,c)
{
b&&Xz(this.aa(b),c)
}
;
a.Xz=function(b,c)
{
if(b&&b.firstChild)
{
var d;
d=c&&(rs.test("#"==c.charAt(0)?c:"#"+c)||Es(c).length||Gs&&Gs[c.toLowerCase()])?vt(c).ds:k;
b.firstChild.style.borderBottomColor=d||(A?"":"transparent")
}

}
;

Vz.prototype.Oe=function(b)
{
this.ta(b.h(),b.W());
D.add(b.h(),"goog-color-menu-button");
Vz.m.Oe.call(this,b)
}
;
a.Yz=function()
{

}
;
y(Yz,ho);
ia(Yz);
a.Zz=0;
t=Yz.prototype;
t.o=function(b)
{
var c=this.rf(b);
return b.J().o("div",c?c.join(" "):k,$z(this,b.hb(),b.Ql(),b.J()))
}
;
a.$z=function(b,c,d,e)
{
for(var g=[],h=0,l=0;
h<d.height;
h++)
{
for(var m=[],p=0;
p<d.width;
p++)
{
var r=c&&c[l++];
m.push(aA(b,r,e))
}
g.push(e.o("tr",b.N()+"-row",m))
}
return b.Rv(g,e)
}
;
t.Rv=function(b,c)
{
var d=c.o("table",this.N()+"-table",c.o("tbody",this.N()+"-body",b));
d.cellSpacing=0;
d.cellPadding=0;
Oc(d,"grid");
return d
}
;

a.aA=function(b,c,d)
{
b=d.o("td",
{
"class":b.N()+"-cell",id:b.N()+"-cell-"+Zz++
}
,c);
Oc(b,"gridcell");
return b
}
;
t.Vc=s(n);
t.n=s(k);

t.Na=function(b,c)
{
if(b)
{
var d=Wb("tbody",this.N()+"-body",b)[0];
if(d)
{
var e=0;
z.forEach(d.rows,function(b)
{
z.forEach(b.cells,function(b)
{
kc(b);
if(c)
{
var d=c[e++];
d&&b.appendChild(d)
}

}
)
}
);
if(e<c.length)
{
for(var g=[],h=Ub(b),l=d.rows[0].cells.length;
e<c.length;
)
{
var m=c[e++];
g.push(aA(this,m,h));
g.length==l&&(m=h.o("tr",this.N()+"-row",g),d.appendChild(m),g.length=0)
}
if(0<g.length)
{
for(;
g.length<l;
)g.push(aA(this,"",h));
m=h.o("tr",this.N()+"-row",g);
d.appendChild(m)
}

}

}
tg(b,j,B)
}

}
;

a.bA=function(b,c,d)
{
for(c=c.h();
d&&1==d.nodeType&&d!=c;
)
{
if("TD"==d.tagName&&D.has(d,b.N()+"-cell"))return d.firstChild;
d=d.parentNode
}
return k
}
,a.cA=function(b,c,d,e)
{
d&&(d=d.parentNode,D.enable(d,b.N()+"-cell-hover",e),Pc(c.h().firstChild,"activedescendent",d.id))
}
;
t.N=s("goog-palette");
a.eA=function(b)
{
M.call(this);
this.Id=[];
dA(this,b)
}
;
y(eA,Hd);
t=eA.prototype;
t.Bg=k;
t.Ff=k;
t.Ml=function()
{
return this.Id.length
}
;
t.ei=function(b)
{
return this.Id[b]||k
}
;
a.dA=function(b,c)
{
c&&(z.forEach(c,function(b)
{
this.Jm(b,n)
}
,b),z.extend(b.Id,c))
}
;
t.Ea=function(b)
{
this.Si(b,this.Ml())
}
;
t.Si=function(b,c)
{
b&&(this.Jm(b,n),z.Ao(this.Id,b,c))
}
;
t.removeItem=function(b)
{
b&&z.remove(this.Id,b)&&b==this.Bg&&(this.Bg=k,this.dispatchEvent("select"))
}
;
t.Zg=q("Bg");
t.Eb=function()
{
return z.clone(this.Id)
}
;

t.If=function(b)
{
b!=this.Bg&&(this.Jm(this.Bg,n),this.Bg=b,this.Jm(b,j));
this.dispatchEvent("select")
}
;
t.Pl=function()
{
return this.Bg?z.indexOf(this.Id,this.Bg):-1
}
;
t.Jp=function(b)
{
this.If(this.ei(b))
}
;
t.clear=function()
{
z.clear(this.Id);
this.Bg=k
}
;
t.p=function()
{
eA.m.p.call(this);
delete this.Id;
this.Bg=k
}
;
t.Jm=function(b,c)
{
b&&("function"==typeof this.Ff?this.Ff(b,c):"function"==typeof b.Om&&b.Om(c))
}
;
a.fA=function(b,c,d)
{
ro.call(this,b,c||Yz.D(),d);
this.Wi&=-89
}
;
y(fA,ro);
t=fA.prototype;
t.nc=k;
t.sb=-1;
t.oa=k;
t.p=function()
{
fA.m.p.call(this);
this.oa&&(this.oa.F(),this.oa=k);
this.nc=k
}
;
t.Mm=function(b)
{
fA.m.Mm.call(this,b);
gA(this);
this.oa?(this.oa.clear(),dA(this.oa,b)):(this.oa=new eA(b),b=v(this.Jm,this),this.oa.Ff=b,this.g().c(this.oa,"select",this.Cj));
this.sb=-1
}
;
t.Xg=s("");
t.Km=ba();

t.nd=function(b)
{
fA.m.nd.call(this,b);
var c=bA(this.M,this,b.target);
(!c||!b.relatedTarget||!uc(c,b.relatedTarget))&&c!=hA(this)&&iA(this,c)
}
;
t.gi=function(b)
{
fA.m.gi.call(this,b);
var c=bA(this.M,this,b.target);
(!c||!b.relatedTarget||!uc(c,b.relatedTarget))&&c==hA(this)&&cA(this.M,this,c,n)
}
;
t.Le=function(b)
{
fA.m.Le.call(this,b);
this.Gb()&&(b=bA(this.M,this,b.target),b!=hA(this)&&iA(this,b))
}
;
t.ke=function(b)
{
var c=hA(this);
return c?(this.If(c),fA.m.ke.call(this,b)):n
}
;

t.Zb=function(b)
{
var c=this.hb(),c=c?c.length:0,d=this.nc.width;
if(0==c||!this.isEnabled())return n;
if(13==b.keyCode||32==b.keyCode)return this.ke(b);
if(36==b.keyCode)return this.Sb(0),j;
if(35==b.keyCode)return this.Sb(c-1),j;
var e=0>this.sb?this.Pl():this.sb;
switch(b.keyCode)
{
case 37:-1==e&&(e=c);
if(0<e)return this.Sb(e-1),b.preventDefault(),j;
break;
case 39:if(e<c-1)return this.Sb(e+1),b.preventDefault(),j;
break;
case 38:-1==e&&(e=c+d-1);
if(e>=d)return this.Sb(e-d),b.preventDefault(),j;
break;
case 40:if(-1==
e&&(e=-d),e<c-d)return this.Sb(e+d),b.preventDefault(),j
}
return n
}
;
t.Cj=ba();
t.Ql=q("nc");
a.jA=function(b,c)
{
b.h()&&f(Error("Component already rendered"));
b.nc=pa(c)?new Qb(c,i):c;
gA(b)
}
,a.hA=function(b)
{
var c=b.hb();
return c&&c[b.sb]
}
;
t.Sb=function(b)
{
b!=this.sb&&(kA(this,this.sb,n),this.sb=b,kA(this,b,j))
}
;
a.iA=function(b,c)
{
var d=b.hb();
b.Sb(d?z.indexOf(d,c):-1)
}
;
t.Pl=function()
{
return this.oa?this.oa.Pl():-1
}
;
t.Zg=function()
{
return this.oa?this.oa.Zg():k
}
;
t.Jp=function(b)
{
this.oa&&this.oa.Jp(b)
}
;

t.If=function(b)
{
this.oa&&this.oa.If(b)
}
;
a.kA=function(b,c,d)
{
if(b.h())
{
var e=b.hb();
e&&(0<=c&&c<e.length)&&cA(b.M,b,e[c],d)
}

}
;
t.Jm=function(b,c)
{
this.h()&&b&&D.enable(b.parentNode,this.M.N()+"-cell-selected",c)
}
;
a.gA=function(b)
{
var c=b.hb();
if(c)if(b.nc&&b.nc.width)
{
if(c=Math.ceil(c.length/b.nc.width),!pa(b.nc.height)||b.nc.height<c)b.nc.height=c
}
else c=Math.ceil(Math.sqrt(c.length)),b.nc=new Qb(c,c);
else b.nc=new Qb(0,0)
}
;
a.lA=function(b,c,d)
{
this.cr=b||[];
fA.call(this,k,c||Yz.D(),d);
this.cr=this.cr;
this.bt=k;
this.Na(z.map(this.cr,function(b)
{
var c=this.J().o("div",
{
"class":this.M.N()+"-colorswatch",style:"background-color:"+b
}
);
"#"==b.charAt(0)&&(b=Fs(b),b="RGB ("+[parseInt(b.substr(1,2),16),parseInt(b.substr(3,2),16),parseInt(b.substr(5,2),16)].join(", ")+")");
c.title=b;
return c
}
,this))
}
;
y(lA,fA);
lA.prototype.bt=k;
lA.prototype.ix=function()
{
var b=this.Zg();
return b?(b=Ct(b,"background-color"),mA(b)):k
}
;

lA.prototype.Ip=function(b)
{
b=mA(b);
this.bt||(this.bt=z.map(this.cr,function(b)
{
return mA(b)
}
));
this.Jp(b?z.indexOf(this.bt,b):-1)
}
;
a.mA=function(b)
{
if(b)try
{
return vt(b).ds
}
catch(c)
{

}
return k
}
;
a.nA=function(b,c,d,e)
{
Ou.call(this,b,c,d||Vz.D(),e)
}
;
y(nA,Ou);

a.oA=
{
pX:"#000 #444 #666 #999 #ccc #eee #f3f3f3 #fff".split(" "),zY:"#f00 #f90 #ff0 #0f0 #0ff #00f #90f #f0f".split(" "),cY:"#f4cccc #fce5cd #fff2cc #d9ead3 #d0e0e3 #cfe2f3 #d9d2e9 #ead1dc #ea9999 #f9cb9c #ffe599 #b6d7a8 #a2c4c9 #9fc5e8 #b4a7d6 #d5a6bd #e06666 #f6b26b #ffd966 #93c47d #76a5af #6fa8dc #8e7cc3 #c27ba0 #cc0000 #e69138 #f1c232 #6aa84f #45818e #3d85c6 #674ea7 #a64d79 #990000 #b45f06 #bf9000 #38761d #134f5c #0b5394 #351c75 #741b47 #660000 #783f04 #7f6000 #274e13 #0c343d #073763 #20124d #4c1130".split(" ")
}
,a.pA=
function(b)
{
var c=new ou(b);
E.forEach(oA,function(d)
{
d=new lA(d,k,b);
jA(d,8);
c.H(d,j)
}
);
return c
}
;
t=nA.prototype;
t.ix=function()
{
return this.W()
}
;
t.Ip=function(b)
{
this.ta(b)
}
;
t.ta=function(b)
{
for(var c=0,d;
d=this.ei(c);
c++)"function"==typeof d.Ip&&d.Ip(b);
nA.m.ta.call(this,b)
}
;
t.qo=function(b)
{
"function"==typeof b.target.ix?this.ta(b.target.ix()):"none"==b.target.W()&&this.ta(k);
nA.m.qo.call(this,b);
b.stopPropagation();
this.dispatchEvent("action")
}
;

t.vb=function(b,c)
{
b&&0==this.Ml()&&(this.sh(pA(this.J())),this.ta(this.W()));
nA.m.vb.call(this,b,c)
}
;
po("goog-color-menu-button",function()
{
return new nA(k)
}
);
a.qA=function()
{

}
;
y(qA,Mu);
ia(qA);
qA.prototype.N=s("goog-toolbar-menu-button");
a.rA=function()
{

}
;
y(rA,qA);
ia(rA);
rA.prototype.createCaption=function(b,c)
{
return Nu(Wz(b,c),this.N(),c)
}
;
rA.prototype.ta=function(b,c)
{
b&&Xz(this.aa(b),c)
}
;
rA.prototype.Oe=function(b)
{
this.ta(b.h(),b.W());
D.add(b.h(),"goog-toolbar-color-menu-button");
rA.m.Oe.call(this,b)
}
;
a.sA=function(b,c,d,e)
{
nA.call(this,b,c,d||rA.D(),e)
}
;
y(sA,nA);
po("goog-toolbar-color-menu-button",function()
{
return new sA(k)
}
);
a.tA=function(b,c,d,e)
{
Ou.call(this,b,c,d||qA.D(),e)
}
;
y(tA,Ou);
po("goog-toolbar-menu-button",function()
{
return new tA(k)
}
);
a.vA=function(b,c,d,e)
{
Ou.call(this,b,c,d,e);
uA(this,b);
this.Gp(Xc.SB)
}
;
y(vA,Ou);
t=vA.prototype;
t.oa=k;
t.$v=k;
t.z=function()
{
vA.m.z.call(this);
wA(this);
xA(this);
Pc(this.h(),Wc.Vk,"false")
}
;
t.Z=function(b)
{
vA.m.Z.call(this,b);
(b=this.Xg())?uA(this,b):this.Jp(0)
}
;
t.p=function()
{
vA.m.p.call(this);
this.oa&&(this.oa.F(),this.oa=k);
this.$v=k
}
;
t.qo=function(b)
{
this.If(b.target);
vA.m.qo.call(this,b);
b.stopPropagation();
this.dispatchEvent("action")
}
;

t.Cj=function()
{
var b=this.Zg();
vA.m.ta.call(this,b&&b.W());
wA(this)
}
;
t.sh=function(b)
{
var c=vA.m.sh.call(this,b);
b!=c&&(this.oa&&this.oa.clear(),b&&(this.oa?oh(b,function(b)
{
yA(b);
this.oa.Ea(b)
}
,this):zA(this,b)));
return c
}
;
a.uA=function(b,c)
{
b.$v=c;
wA(b)
}
;
t.Ea=function(b)
{
yA(b);
vA.m.Ea.call(this,b);
this.oa?this.oa.Ea(b):zA(this,this.$a())
}
;
t.Si=function(b,c)
{
yA(b);
vA.m.Si.call(this,b,c);
this.oa?this.oa.Si(b,c):zA(this,this.$a())
}
;
t.removeItem=function(b)
{
vA.m.removeItem.call(this,b);
this.oa&&this.oa.removeItem(b)
}
;

t.If=function(b)
{
if(this.oa)
{
var c=this.Zg();
this.oa.If(b);
b!=c&&this.dispatchEvent("change")
}

}
;
t.Jp=function(b)
{
this.oa&&this.If(this.oa.ei(b))
}
;
t.ta=function(b)
{
if(b!=k&&this.oa)for(var c=0,d;
d=this.oa.ei(c);
c++)if(d&&"function"==typeof d.W&&d.W()==b)
{
this.If(d);
return
}
this.If(k)
}
;
t.Zg=function()
{
return this.oa?this.oa.Zg():k
}
;
t.Pl=function()
{
return this.oa?this.oa.Pl():-1
}
;

a.zA=function(b,c)
{
b.oa=new eA;
c&&oh(c,function(b)
{
yA(b);
this.oa.Ea(b)
}
,b);
xA(b)
}
,a.xA=function(b)
{
b.oa&&b.g().c(b.oa,"select",b.Cj)
}
,a.wA=function(b)
{
var c=b.Zg();
b.Na(c?c.Xg():b.$v)
}
,a.yA=function(b)
{
b.Gp(b instanceof lu?Xc.WB:Xc.oK)
}
;
t.vb=function(b,c)
{
vA.m.vb.call(this,b,c);
this.tb()&&this.$a().Sb(this.Pl())
}
;
po("goog-select",function()
{
return new vA(k)
}
);
a.AA=function(b,c,d,e)
{
vA.call(this,b,c,d||qA.D(),e)
}
;
y(AA,vA);
po("goog-toolbar-select",function()
{
return new AA(k)
}
);
a.BA=function(b)
{
var c=b.indexOf(",");
a:
{
b=(-1!=c?b.substring(0,c):b).toLowerCase();
for(c=0;
2>c;
c++)
{
var d="\"'".charAt(c);
if(b.charAt(0)==d&&b.charAt(b.length-1)==d)
{
b=b.substring(1,b.length-1);
break a
}

}

}
return b
}
,a.CA=function(b,c)
{
z.forEach(c,function(c)
{
var e=c.caption,c=c.value,g=BA(c),e=new Qz(e,c,b.J());
lh(e,g);
b.Ea(e);
e.aa().style.fontFamily=c
}
)
}
,a.DA=[10,10,13,16,18,24,32,48],a.FA=function(b,c,d,e,g,h)
{
d=new Uz(EA(d,e,h),g,h);
lh(d,b);
d.Tc(c);
return d
}
,a.GA=function(b,c,d,e,g,h)
{
b=FA(b,c,
d,e,g,h);
uo(b,16,j);
return b
}
,a.HA=function(b,c,d,e,g,h)
{
g=new AA(k,k,g,h);
e&&z.forEach(e.split(/\s+/),g.Kh,g);
g.Kh("goog-toolbar-select");
uA(g,d);
lh(g,b);
g.Tc(c);
return g
}
,a.IA=function(b,c,d,e,g,h)
{
d=new sA(EA(d,e,h),k,g,h);
lh(d,b);
d.Tc(c);
return d
}
,a.EA=function(b,c,d)
{
if((!b||""==b)&&B&&!Gb("1.9a"))b=" ";
return(d||Ub()).o("DIV",c?
{
"class":c
}
:k,b)
}
;
a.JA=w("Link");
w("Edit Link");
w("Text to display:");
a.KA=w("Link to:");
w("Web address");
w("Link to a page or file somewhere else on the web");
w("Test this link");

w("
{
$startBold
}
Not sure what to put in the box?
{
$endBold
}
 First, find the page on the web that you want to link to. (A 
{
$searchEngineLink
}
search engine
{
$endLink
}
 might be useful.) Then, copy the web address from the box in your browser's address bar, and paste it into the box above.",
{
startBold:"<b>",endBold:"</b>",searchEngineLink:"<a href='http://www.google.com/' target='_new'>",endLink:"</a>"
}
);
w("To what URL should this link go?");
w("Email address");
w("Link to an email address");
w("Invalid email address");

w("To what email address should this link?");
w("
{
$preb
}
Be careful.
{
$postb
}
 Remember that any time you include an email address on a web page, nasty spammers can find it too.",
{
preb:"<b>",postb:"</b>"
}
);
w("Open this link in a new window");
w("Image");
a.LA=
{

}
,a.MA=w("Normal"),a.NA=w("Normal / serif"),a.OA=[
{
caption:MA,value:"arial,sans-serif"
}
,
{
caption:NA,value:"times new roman,serif"
}
,
{
caption:"Courier New",value:"courier new,monospace"
}
,
{
caption:"Georgia",value:"georgia,serif"
}
,
{
caption:"Trebuchet",value:"trebuchet ms,sans-serif"
}
,
{
caption:"Verdana",value:"verdana,sans-serif"
}
],a.PA=
{
ja:[
{
caption:"ＭＳ Ｐゴシック",value:"ms pgothic,sans-serif"
}
,
{
caption:"ＭＳ Ｐ明朝",value:"ms pmincho,serif"
}
,
{
caption:"ＭＳ ゴシック",value:"ms gothic,monospace"
}
],ko:[
{
caption:"굴림",
value:"gulim,sans-serif"
}
,
{
caption:"바탕",value:"batang,serif"
}
,
{
caption:"굴림체",value:"gulimche,monospace"
}
],"zh-tw":[
{
caption:"新細明體",value:"pmingliu,serif"
}
,
{
caption:"細明體",value:"mingliu,serif"
}
],"zh-cn":[
{
caption:"宋体",value:"simsun,serif"
}
,
{
caption:"黑体",value:"simhei,sans-serif"
}
,
{
caption:"MS Song",value:"ms song,monospace"
}
]
}
,a.QA=w("Small"),a.RA=w("Normal"),a.SA=w("Large"),a.TA=w("Huge"),a.UA=[
{
caption:QA,value:1
}
,
{
caption:RA,value:2
}
,
{
caption:SA,value:4
}
,
{
caption:TA,value:6
}
],a.VA=w("Heading"),
a.WA=w("Subheading"),a.XA=w("Minor heading"),a.YA=w("Normal"),a.ZA=[
{
caption:VA,xa:"H2"
}
,
{
caption:WA,xa:"H3"
}
,
{
caption:XA,xa:"H4"
}
,
{
caption:YA,xa:"P"
}
],a.$A=function(b,c,d,e,g,h)
{
var l=FA(b,c,d,e,g,h);
l.Mi=function(b)
{
l.cb(b)
}
;
return l
}
,a.aB=function(b,c)
{
var d=c;
try
{
if(A)var e="000000"+d.toString(16),g=e.substr(e.length-6,6),d="#"+g.substring(4,6)+g.substring(2,4)+g.substring(0,2);
d!=b.W()&&b.ta(d)
}
catch(h)
{

}

}
,a.bB=w("Format"),a.cB=w("Format"),a.dB=w("Undo"),a.eB=w("Redo"),a.fB=w("Font"),a.gB=w("Font size"),
a.hB=w("Text color"),a.iB=w("Bold"),a.jB=w("Italic"),a.kB=w("Underline"),a.lB=w("Text background color"),a.mB=w("Add or remove link"),a.nB=w("Numbered list"),a.oB=w("Bullet list"),a.pB=w("Decrease indent"),a.qB=w("Increase indent"),a.rB=w("Align left"),a.sB=w("Align center"),a.tB=w("Align right"),a.uB=w("Justify"),a.vB=w("Remove formatting"),a.wB=w("Insert image"),a.xB=w("Strikethrough"),a.yB=w("Left-to-right"),a.zB=w("Right-to-left"),a.AB=w("Quote"),a.BB=w("Edit HTML source"),a.CB=w("Subscript"),
a.DB=w("Superscript"),a.EB=w("Edit HTML"),a.FB=
{

}
;

LA.PB=[
{
xa:"+undo",S:dB,La:"tr-icon tr-undo",factory:$A,jb:j
}
,
{
xa:"+redo",S:eB,La:"tr-icon tr-redo",factory:$A,jb:j
}
,
{
xa:"+fontName",S:fB,La:"tr-fontName",factory:function(b,c,d,e,g,h)
{
var l=HA(b,c,d,e,g,h),b="en-us".replace(/_/,"-").toLowerCase(),c=[];
b in PA&&(c=PA[b]);
c.length&&CA(l,c);
CA(l,OA);
uA(l,MA);
D.add(l.$a().aa(),"goog-menu-noaccel");
l.Mi=function(b)
{
var c=k;
b&&0<b.length&&(c=mh(l.$a(),BA(b)));
c!=l.Zg()&&l.If(c)
}
;
return l
}
,jb:j
}
,
{
xa:"+fontSize",S:gB,La:"tr-fontSize",factory:function(b,
c,d,e,g,h)
{
var l=HA(b,c,d,e,g,h);
z.forEach(UA,function(b)
{
var c=b.value,b=new Qz(b.caption,c,l.J());
l.Ea(b);
b=b.aa();
b.style.fontSize=(DA[c]||10)+"px";
b.firstChild.style.height="1.1em"
}
);
uA(l,RA);
D.add(l.$a().aa(),"goog-menu-noaccel");
l.Mi=function(b)
{
var c;
if(c=oa(b))c=b.match(Js),c="px"==(c&&c[0]||k);
c&&(b=z.lastIndexOf(DA,parseInt(b,10)));
b=0<b?b:k;
b!=l.W()&&l.ta(b)
}
;
return l
}
,jb:j
}
,
{
xa:"+bold",S:iB,La:"tr-icon tr-bold",jb:j
}
,
{
xa:"+italic",S:jB,La:"tr-icon tr-italic",jb:j
}
,
{
xa:"+underline",S:kB,
La:"tr-icon tr-underline",jb:j
}
,
{
xa:"+foreColor",S:hB,La:"tr-icon tr-foreColor",factory:function(b,c,d,e,g,h)
{
b=IA(b,c,d,e,g,h);
b.Ip("#000");
b.Mi=xa(aB,b);
return b
}
,jb:j
}
,
{
xa:"+backColor",S:lB,La:"tr-icon tr-backColor",factory:function(b,c,d,e,g,h)
{
b=IA(b,c,d,e,g,h);
b.Ip("#FFF");
b.Mi=xa(aB,b);
return b
}
,jb:j
}
,
{
xa:"+link",S:mB,caption:JA,La:"tr-link",jb:j
}
,
{
xa:"+insertOrderedList",S:nB,La:"tr-icon tr-insertOrderedList",jb:j
}
,
{
xa:"+insertUnorderedList",S:oB,La:"tr-icon tr-insertUnorderedList",jb:j
}
,

{
xa:"+outdent",S:pB,La:"tr-icon tr-outdent",factory:FA
}
,
{
xa:"+indent",S:qB,La:"tr-icon tr-indent",factory:FA
}
,
{
xa:"+justifyLeft",S:rB,La:"tr-icon tr-justifyLeft",jb:j
}
,
{
xa:"+justifyCenter",S:sB,La:"tr-icon tr-justifyCenter",jb:j
}
,
{
xa:"+justifyRight",S:tB,La:"tr-icon tr-justifyRight",jb:j
}
,
{
xa:"+justifyFull",S:uB,La:"tr-icon tr-justifyFull",jb:j
}
,
{
xa:"+removeFormat",S:vB,La:"tr-icon tr-removeFormat",factory:FA
}
,
{
xa:"image",S:wB,La:"tr-icon tr-image",factory:FA
}
,
{
xa:"+strikeThrough",S:xB,La:"tr-icon tr-strikeThrough",
jb:j
}
,
{
xa:"+subscript",S:CB,La:"tr-icon tr-subscript",jb:j
}
,
{
xa:"+superscript",S:DB,La:"tr-icon tr-superscript",jb:j
}
,
{
xa:"ltr",S:yB,La:"tr-icon tr-ltr",jb:j
}
,
{
xa:"rtl",S:zB,La:"tr-icon tr-rtl",factory:function(b,c,d,e,g,h)
{
var l=GA(b,c,d,e,g,h);
l.Mi=function(b)
{
b=!!b;
D.enable(l.getParent().h(),"tr-rtl-mode",b);
l.Rc(b)
}
;
return l
}
,jb:j
}
,
{
xa:"+BLOCKQUOTE",S:AB,La:"tr-icon tr-BLOCKQUOTE",jb:j
}
,
{
xa:"+formatBlock",S:bB,caption:cB,La:"tr-formatBlock",factory:function(b,c,d,e,g,h)
{
var l=HA(b,c,d,e,g,h);

z.forEach(ZA,function(b)
{
var c=b.caption,b=b.xa,d=l.J(),c=new Qz(d.o("DIV",k,c),b,d);
lh(c,b);
l.Ea(c)
}
);
uA(l,YA);
D.add(l.$a().aa(),"goog-menu-noaccel");
l.Mi=function(b)
{
b=b&&0<b.length?b:k;
b!=l.W()&&l.ta(b)
}
;
return l
}
,jb:j
}
,
{
xa:"editHtml",S:BB,caption:EB,La:"tr-editHtml",factory:FA
}
];
for(var GB=0,HB;
HB=LA.PB[GB];
GB++)FB[HB.xa]=HB;
delete LA.PB;
a.IB=
{

}
;
IB.TV=zk;
a.JB=function(b)
{
wv.call(this);
this.ha=new me(this);
this.hF=K("div",
{
style:"display:none"
}
);
this.e=this.uc=k;
this.C=
{

}
;
E.extend(this.C,this.Q,b||
{

}
)
}
;
y(JB,wv);
ya(JB.prototype,IB);
JB.prototype.Q=
{
Jk:k,title:"Distraction Free Mode",LL:"back",qU:"publish",Tw:"zu-editing-distraction-free",kV:"sticky-goog-scrollfloater",OV:"goog-scrollfloater"
}
;
JB.prototype.md=lf("FullScreenPlugin");
FB.toggleFullScreen=
{
xa:"toggleFullScreen",S:"写作模式",La:"tr-icon tr-max",factory:FA
}
;
t=JB.prototype;

t.Qe=xa(E.Ng,
{
KY:"toggleFullScreen",fX:"enterFullScreen",gX:"exitFullScreen"
}
);
t.p=function()
{
this.ha.F();
L(this.e);
this.C=this.Yp=this.uc=this.wb=this.e=k;
JB.m.p.call(this)
}
;

t.zv=function()
{
var b=this.C,c=document.createElement("div");
c.id="zu-distraction-free-editor";
c.innerHTML='<div class="header"><div class="wrapper"><h1 class="title">'+b.title+'</h1><a href="#" class="'+b.LL+'" name="return">返回</a><a href="#" class="'+b.qU+'" name="save">发布</a></div></div><div class="toolbar"><div class="tools"></div></div><div class="content" class="grid"></div>';
document.body.appendChild(c);
this.ha.c(J("back",c),"click",function(b)
{
b.preventDefault();
KB(this)
}
,n,this);
this.ha.c(J("publish",
c),"click",function(b)
{
b.preventDefault();
this.dispatchEvent("save")&&KB(this)
}
,n,this);
this.e=c;
this.uc=J("content",c);
this.Yp=K("div",
{
className:"toolbar-info"
}
);
this.C.Jk||(this.C.Jk=this.B.field)
}
;
t.nf=function(b)
{
this.e||this.zv();
switch(b)
{
case "enterFullScreen":LB(this);
break;
case "exitFullScreen":KB(this);
break;
case "toggleFullScreen":this.ny()?KB(this):LB(this)
}

}
;
t.ny=function()
{
return D.has(document.body,this.C.Tw)
}
;

a.LB=function(b)
{
if(b.dispatchEvent("willEnterFullScreen"))
{
b.aE||(b.MP=history.length);
b.aE=j;
MB(b,"writing");
b.DJ=Nc(Ub((fa||window).document));
oc(b.hF,b.C.Jk);
b.uc.appendChild(b.C.Jk);
D.add(document.body,b.C.Tw);
b.wb=J(b.C.OV,b.e);
b.wb.appendChild(b.Yp);
var c=b.e;
c.scrollTop=0;
var d=b.wb.getBoundingClientRect().top;
c.onscroll=pf(v(b.wI,b),function()
{
return c.scrollTop>d
}
);
b.ha.c(document,"keydown",b.fp,n,b);
La(Hc(b.B.field))||b.B.ig();
b.dispatchEvent("enterFullScreen")
}

}
,a.KB=function(b)
{
b.aE&&
b.MP!==history.length?history.back():MB(b,"");
b.wb.removeChild(b.Yp);
b.wI(n);
b.e.onscroll=k;
b.ha.va(document,"keydown",b.fp,n,b);
oc(b.C.Jk,b.hF);
D.remove(document.body,b.C.Tw);
window.scrollTo(b.DJ.x,b.DJ.y);
b.dispatchEvent("exitFullScreen")
}
,a.MB=function(b,c)
{
yd(window,"hashchange",b.$G,n,b);
location.hash=c||"";
setTimeout(v(function()
{
this.ha.c(window,"hashchange",this.$G,n,this)
}
,b))
}
;
t.$G=function()
{
this.ny()?KB(this):"writing"===location.hash.slice(1)&&LB(this)
}
;

t.fp=function(b)
{
27===b.keyCode&&this.dispatchEvent("shouldExitFullScreenOnEscape")&&KB(this)
}
;
t.wI=function(b)
{
D[b?"add":"remove"](this.wb,this.C.kV)
}
;
a.OB=function(b,c)
{
M.call(this);
this.HG=b;
this.xA=c||NB;
b.Wb||(this.show=ha)
}
;
y(OB,Rk);
a.NB="加载中...";
t=OB.prototype;

t.show=function()
{
mc(this.e=K("div","zg-mt10",[K("h3",
{
style:"margin:0 0 5px;
"
}
,"分享到微博"),K("div","zm-tab-content",[this.gZ=K("div",
{
className:"zg-section zg-clear",innerHTML:'<label><input data-bindurl="/oauth/auth/sina?next=/oauth/callback" class="sina-checkbox" type="checkbox"><i class="zg-ico-sina"></i> 新浪微博</label> <label><input data-bindurl="/oauth/auth/qq?next=/oauth/callback" class="qq-checkbox" type="checkbox"><i class="zg-ico-qq"></i> 腾讯微博</label>'
}
),K("div","zg-section",K("div","zg-form-text-input",
this.Kp=K("textarea",
{
style:"width:100%;
height: 66px;
"
}
,"加载中..."))),K("div","zm-command",[K("div",["zm-item-meta","zg-left"],this.IU=K("span")),this.mV=K("a",
{
"class":"zg-btn-blue weibo-share-button",href:"javascript:;
"
}
,"分享到微博")])])]),I("zh-question-answer-form-wrap"));
this.g().c(Y,"sina_callback",function(b)
{
this.tA(b.mb.id,b.mb.name)
}
).c(Y,"qq_callback",function(b)
{
this.sA(b.mb.id,b.mb.name)
}
);
this.pv();
this.Bf();
Mo.D().refresh();
var b=this;
this.xA===NB?Ei("/answer/"+b.HG.Wb+"/sharetext",function(c)
{
if((c=
Ie(c.target))&&c.sina)b.xA=c.sina,b.Da()
}
,"GET"):this.Da()
}
;
t.tA=function(b,c)
{
Sg.name=c;
this.JI=Sg.id=b;
this.zc.checked=j;
this.Bf()
}
;
t.sA=function(b,c)
{
Tg.name=c;
this.FT=Tg.id=b;
this.xc.checked=j;
this.Bf()
}
;
t.Bf=function()
{
var b=J("weibo-share-button",this.e),c=this.zc.checked||this.xc.checked;
D.enable(b,"zg-btn-blue",c);
D.enable(b,"zg-btn-disabled",!c)
}
;
t.Da=function()
{
this.Kp.value=this.xA;
this.MA=new Po(this.Kp);
this.HI=new Bu(this.Kp,this.IU,140,zu);
this.g().c(this.mV,"click",this.ga)
}
;

t.pv=function()
{
this.zc=J("sina-checkbox",this.e);
this.g().c(this.zc,"change",this.kp);
this.xc=J("qq-checkbox",this.e);
this.g().c(this.xc,"change",this.kp)
}
;
t.kp=function(b)
{
var b=b.target,c=b.getAttribute("data-bindurl");
b===this.zc&&!this.JI||b===this.xc&&!this.FT?(window.open(c),b.checked=n):this.Bf()
}
;

t.ga=function(b)
{
if((b=b.target)&&D.has(b,"zg-btn-blue")&&this.Kp.value)
{
b=new tk(j);
b.add("content",this.Kp.value);
var c=[];
this.zc.checked&&c.push("sina");
this.xc.checked&&c.push("qq");
b.add("via",c.join(","));
this.fk(b);
zk("share",this.e_?"answer_weibo":"question_weibo")
}
else U("请您选择或绑定微博后再进行分享！")
}
;
t.fk=function(b)
{
b.add("aid",this.HG.pa);
this.xhr=new V(j);
P(this.g(),this.xhr,"complete",this.cv);
this.xhr.ajax("/answer/share",b.Kc())
}
;

t.cv=function()
{
var b=Ie(this.xhr);
b&&b.r?U(b.msg):(U("分享发送完毕"),R(this.e,n))
}
;
a.wx=function(b,c,d)
{
lu.call(this,b,c,d);
this.Bp(j)
}
;
y(wx,lu);
po("goog-checkbox-menuitem",function()
{
return new wx(k)
}
);
a.PB=function(b,c)
{
M.call(this);
this.X=b;
this.sc=c;
this.data=Eg
}
;
y(PB,Rk);
t=PB.prototype;

t.v=function()
{
this.Bm=I("zh-question-redirect-info");
this.Bm.innerHTML&&(this.Jo=j);
this.g().c(this.Bm,"click",function(b)
{
"cancel"===b.target.name&&QB(this)
}
);
var b=I("zh-question-side-header-wrap");
if(Dg.Nc&&!Dg.RF&&b)
{
var c=I("zh-question-filter-wrap");
c?lc(b,c):b.style[A?"styleFloat":"cssFloat"]="none"
}
(this.ug=I("zh-question-operation-menu"))&&this.Mj();
this.g().c(Ki,"anon_change",function(b)
{
var c=I("zh-question-side-invitation-anon");
c&&R(c,b.lb);
(c=I("zh-question-side-invitation-notanon"))&&
R(c,!b.lb);
this.rm&&this.rm.cb(lt(this.data.wi)||!b.lb)
}
);
(this.Nk=I("zh-question-webshare-container"))&&this.g().c(this.Nk,"click",this.FA)
}
;

t.Mj=function()
{
this.ib=new ou;
var b=this.data.nn,c=this.ug.getAttribute("data-auth"),c=c?c.split(","):[];
if(b==k||0===b)
{
this.ib.Ea(this.ft=RB("使用匿名身份",j));
this.ft.Rc(this.data.lb);
if((!Mg||!z.contains(Mg,"question_op_redirect"))&&"close"!==Eg.status)this.ib.Ea(this.rm=RB(this.Jo?"撤消重定向":"问题重定向")),this.rm.cb(lt(this.data.wi)||!this.data.lb);
z.contains(c,"auth-f-manage")&&this.ib.Ea(this.VS=RB("更新话题页显示",n));
this.g().c(this.ib,"action",this.Bj);
this.ft&&this.g().c(Ki,"anon_change",function(b)
{
this.ft.Rc(!!b.lb)
}
);

this.sc&&z.contains(c,"auth-f-manage")&&(this.ib.Ea(this.wz=RB("优质回答",j)),this.wz.Rc(this.sc.zQ));
b=new Ou("Settings",this.ib);
b.rp=j;
Qu(b);
b.n(this.ug)
}

}
;
a.RB=function(b,c)
{
return!b?new nu:c?new wx(b):new lu(b)
}
;

t.Bj=function(b)
{
var c=this.ft;
b.target===c?hs(c.de()?1:0,function(b)
{
b||c.Rc(!c.de())
}
):b.target===this.rm?(this.pp||(this.pp=new Cy(this.X),this.g().c(this.pp,"change",this.cR)),this.ib.w(n),this.Jo?QB(this):this.pp.show()):b.target===this.QS?Ei("/question/"+this.data.Wb+(this.QS.de()?"/unlock_summary":"/lock_summary"),function()
{
top!==window?top.location.href="/question/"+Eg.Wb:window.location.reload()
}
,"POST"):b.target===this.VS?$.post("/refresh_topic_feeds",
{
q:Eg.Wb
}
).done(function(b)
{
b.r||U("操作成功！")
}
):
b.target===this.wz&&$.post("/answer/"+this.sc.Wb+(this.wz.de()?"/good_mark":"/good_unmark")).done(function(b)
{
b.r||U("操作成功！")
}
)
}
;
t.cR=function()
{
this.Bm.innerHTML='<div class="zg-wrap"><div class="zu-global-nitify-inner"><span class="zu-global-notify-icon"></span>此问题将跳转至 <a href="/question/'+this.pp.It+'">'+this.pp.HH+'</a> （<a href="javascript:;
" name="cancel">撤消重定向</a>）</div></div>';
R(this.Bm,j);
this.Jo=j;
this.rm.Km("撤消重定向")
}
;

a.QB=function(b)
{
b.Bm.innerHTML="";
R(b.Bm,n);
b.Jo=n;
b.rm.Km("问题重定向");
Ei("/question/unredirect",k,"POST","qid="+b.X+"&rqid="+b.It)
}
;
t.FA=function(b)
{
if((b=sk(this.Nk,b.target))&&b.name)
{
var c=Cu.D(),d=$("#zh-question-webshare-container").data();
c.wk(d.title,d.type,d.urlToken,
{
answer:
{
aid:d.id
}
,question:
{
qid:d.id
}

}
[d.type]);
c.show();
Du(c,"tb-webshare-"+b.name);
Y.U(
{
type:"ga_click_share_question_box",target:b,data:
{
type:b.name
}

}
)
}

}
;
a.SB=function()
{
T.call(this)
}
;
y(SB,T);
SB.prototype.H=function(b,c)
{
SB.m.H.call(this,b,c);
this.g().c(b,"beforeexpand",this.qP)
}
;
SB.prototype.qP=function(b)
{
var c=b.target;
oh(this,function(b)
{
c!==b&&b.$b()&&b.Ka(n)
}
)
}
;
SB.prototype.F=function()
{
this.g().F();
SB.m.F.call(this)
}
;
a.TB=function(b,c)
{
T.call(this);
this.ET=b;
this.st=c;
this.rQ=this.ba=k;
this.ld=n;
this.Co=k;
this.bm=[];
this.SI=[];
this.yg=n;
this.XQ="loading";
this.GF="zg-btn-white";
this.sQ="invite-button"
}
;
y(TB,T);
t=TB.prototype;
t.o=function()
{
this.e=K("div",
{
style:"display:none",className:"question-invite-panel"
}
)
}
;
t.Y=function()
{
this.yg=j;
TB.m.Y.call(this)
}
;

t.z=function()
{
TB.m.z.call(this);
var b=this.e,c=this.g();
if(!this.yg)
{
c.c(Ki,"anon_change",this.reload);
var d=J("cancel-anon",b);
d&&c.c(d,"click",this.fO);
if(!J("error-message"))
{
var d=J("search-input",b),e=J("invite-title",b);
this.iy=J("invite-status",b);
c.c(this.iy,"click",this.gO);
var g=J("suggest-persons",b);
g&&(c.c(g,"click",this.Dx),this.RI=g);
$(b).on("hover",".invited-shortlist",function()
{
$(".invited-hovercard",b).toggleClass("in")
}
);
this.ay(d,e);
this.SI=$(this.RI).children().map(this.wH).get();

this.bm=$(".invited-fulllist",this.iy).children().map(this.wH).get();
var h=function(b)
{
0>b||b>m-1||(x.find("li").hide().slice(4*b,4*(b+1)).show(),0===b?p.addClass("link-disabled"):p.removeClass("link-disabled"),b===m-1?r.addClass("link-disabled"):r.removeClass("link-disabled"),l=b)
}
,c=this.e,l=0,m,p,r,x;
x=$(".suggest-persons",c);
m=x.find("li").length/4;
p=$(".js-prev",c).on("click",function()
{
h(l-1)
}
);
r=$(".js-next",c).on("click",function()
{
h(l+1)
}
);
h(0);
R(this.e,this.ld)
}

}

}
;

t.Za=function()
{
TB.m.Za.call(this);
this.g().F()
}
;
t.dj=s('<i class="icon icon-spike"></i><div class="spinner">正在加载，请稍等 <i class="spinner-gray"></i></div>');
t.reload=function()
{
this.$b()?this.lk():this.yg=j
}
;
t.lk=function()
{
var b=this,c=this.XQ;
this.Za();
D.add(this.e,c);
this.e.innerHTML=this.dj();
return $.get("/node/QuestionInvitePanelV2",
{
params:
{
question_id:this.ET
}

}
).done(function(d)
{
b.yg=n;
D.remove(b.e,c);
d=hc(La(d));
R(d,b.$b());
oc(d,b.e);
b.e=d;
b.z()
}
)
}
;

t.p=function()
{
TB.m.p.call(this);
this.rQ=k;
this.ba.F()
}
;
t.$b=q("ld");
t.expand=function()
{
this.Ka(j)
}
;
t.collapse=function()
{
this.Ka(n)
}
;
t.Ka=function(b)
{
if(b!==this.ld)
{
this.dispatchEvent(b?"beforeexpand":"beforecollapse");
var c=v(function()
{
this.dispatchEvent(b?"expand":"collapse")
}
,this);
b&&this.yg?this.lk().done(c):c();
this.ld=b;
R(this.e,b)
}

}
;
t.oe=function()
{
this.Ka(!this.ld)
}
;

t.ay=function(b)
{
var c=this,d=Bk('<img class="zm-item-img-avatar zg-left" src="<%=avatar%>"><span class="zu-autocomplete-row-name" title="<%-fullname%>"><%-fullname%></span><span class="zg-gray-normal zu-autocomplete-row-description"><%=headline%></span>');
this.ba=new Xo(b,
{
ie:8,source:"/people/autocomplete",nk:b.offsetParent,placeholder:"搜索你想邀请的人",cd:function(b,c,h)
{
h.innerHTML=d(b.data)
}
,filter:function(b)
{
return z.filter(b,function(b)
{
var d=b.id;
return!z.find(c.bm,function(b)
{
return b.id===d
}
)
}
)
}
,
select:function(b)
{
UB(c,"ask_to_answer_search");
pt(c.st,b.id,"search").done(function(d)
{
if(d.r)return U(d.msg);
VB(c,b);
WB(c,b.id,j)
}
);
return""
}

}
)
}
;
a.XB=function(b,c,d)
{
b=b.GF;
d?(D.add(c,b),zc(c,"收回邀请")):(D.remove(c,b),zc(c,"邀请回答"))
}
;
t.fO=function()
{
hs(0)
}
;
a.UB=function(b,c)
{
var d=Eg;
b.dispatchEvent(new Hw("click!invitation",
{
category:"invitation",action:"ask_to_answer",label:c,value:d.NF?k:d.Jq
}
))
}
;

t.Dx=function(b)
{
var c=b.target;
if("BUTTON"===c.tagName||D.has(c,this.sQ))
{
this.Co&&"pending"===this.Co.state()&&this.Co.abort();
b="related"===c.getAttribute("data-type")?"recommended_relative_questions":"recommended_top_answerers";
UB(this,b);
var d=c.getAttribute("data-uid"),e=this.GF,g=v(function(b)
{
b?(XB(this,c,j),b=z.find(this.SI,function(b)
{
return b.id===d
}
),VB(this,b)):(XB(this,c,n),YB(this,d))
}
,this);
D.has(c,e)?(this.Co=ot(this.st,d),g(n)):(this.Co=pt(this.st,d,b).done(function(b)
{
b.r&&(U(b.msg),
g(n))
}
),g(j))
}

}
;
t.gO=function(b)
{
b=b.target;
"BUTTON"===b.tagName&&(b=b.getAttribute("data-uid"),ot(this.st,b),WB(this,b,n),YB(this,b))
}
;
a.WB=function(b,c,d)
{
var e=$(".invite-button",b.RI).filter(function()
{
return this.getAttribute("data-uid")===c
}
).get(0);
e&&XB(b,e,d)
}
;
t.wH=function()
{
var b=$(this),c=$(".zm-item-link-avatar",b);
return
{
id:String($("button",b).data("uid")),avatar:$("img",c).attr("src"),fullname:c.attr("title"),url_token:c.attr("href").split("/").slice(-1)[0]
}

}
;

a.VB=function(b,c)
{
b.bm.unshift(c);
ZB(b);
$(".ignore-invite-hint").css("display","none")
}
,a.YB=function(b,c)
{
b.bm&&z.TT(b.bm,function(b)
{
return b.id===c
}
)&&(ZB(b),$(".ignore-invite-hint").css("display","none"))
}
;
t.JU='您已邀请 <span class="invited-shortlist"><% helper.each(persons.slice(0, 2), function(person, i, sliced) 
{
 %><a href="/people/<%=person.url_token%>" class="zg-link-gray"><%=person.fullname%></a><%= i !== sliced.length - 1 ? "、" : ""%><% 
}
);
 %><%=helper.fullList()%></span><% if (persons.length > 2) 
{
 %> 等 <%=persons.length%> 人 <% 
}
 %>';

t.MN='<div class="invited-hovercard"><i class="icon icon-spike"></i><ul class="invited-fulllist"><% helper.each(persons, function(person, i) 
{
 %><li><a title="<%-person.fullname%>" class="zm-item-link-avatar" href="/people/<%=person.url_token%>"><img src="<%=person.avatar%>" class="zm-item-img-avatar"></a><a href="/people/<%=person.url_token%>" class="zg-link-gray" title="<%-person.fullname%>"><%=person.fullname%></a><button class="cancel-button zg-link-btn zg-link-gray" data-uid="<%=person.id%>">收回邀请</button></li><% 
}
) %></ul></div>';

a.ZB=function(b)
{
var c=b.bm,d=
{
each:z.forEach,fullList:function()
{
return Bk(b.MN,
{
persons:c,helper:d
}
)
}

}
;
b.iy.innerHTML=c.length?Bk(b.JU,
{
persons:c,helper:d
}
):""
}
;
a.$B=function(b)
{
this.data=b;
this.ma=k
}
;
y($B,T);
t=$B.prototype;
t.z=function()
{
$B.m.z.call(this);
this.g().c(this.e,"click",this.om);
var b=J("panel-container",this.e);
b&&(this.Yj=new SB,this.H(this.Yj),this.Yj.n(b),this.ma=new Qw(this.data.X,"question"),this.Yj.H(this.ma),Tw(this.ma,this.Yj.h(),$(".toggle-comment",this.e)[0]),aC(this));
this.g().c(this,"click!",function(b)
{
"comment"===b.namespace&&b.Cc.fill("label","question")
}
)
}
;

t.om=function(b)
{
var c=(b=sk(this.e,b.target))&&b.name;
if(c)switch(c)
{
case "report-question":bu.Dm("question",this.data.X);
break;
case "addcomment":if("添加评论"===$.trim($(b).text())&&this.pi(0,"question_add_comment_start"))break;
this.ma.oe();
this.ma.$b()&&this.ma.Ji("view_comments",parseInt(Hc(b),10)||0);
break;
case "remove":Ci("删除问题","你确定要删除这个问题吗？相关的评论也将被删除。",function(b)
{
if(b)
{
var c=new V(j);
N(c,"complete",function()
{
var b=Ie(c);
b&&!b.r?window.location.href="/":U(b.msg)
}
);
c.ajax("/question/delete/"+
this.data.X)
}

}
,this);
break;
case "admin":c=this.QK;
c||(c=new Su,c.n(I("zh-question-admin-menu")),oh(c,function(b)
{
b.ta(b.h().getAttribute("data-action"))
}
),this.g().c(c,"action",function(b)
{
var b=this.eC=b.target,c=ov.D();
c.Al=
{
id:this.data.X,type:"question"
}
;
vv(c,b.h(),v(this.DM,this));
c.w(j)
}
),this.QK=c);
c.R()?c.w(n):Tu(c,new ct(b,1,j),0,new Of(5,0,5,0));
break;
case "share":Y.U(
{
type:"ga_click_share_question_box",target:b
}
);
this.ce();
break;
case "invite":this.Dx()
}

}
;

t.pi=function(b,c)
{
return!S.Ha()?(vk.D().Ga=c,vk.D().w(j),vk.D().Sc(),j):n
}
;
a.aC=function(b)
{
if("normal"===Eg.status)
{
var c=new TB(b.data.X,b.data.Wb),d=I("question-invite-panel");
d?(c.n(d),b.Yj.H(c),c.Ka(!b.ma.$b()),b.dispatchEvent(new Hw("show!invitation",
{
category:"invitation",action:"ask_to_answer_card",label:""
}
))):(c.Y(b.Yj.h()),b.Yj.H(c));
b.hy=c
}

}
;

t.Dx=function()
{
if(this.hy)
{
this.hy.oe();
var b=this.hy.$b();
this.dispatchEvent(new Hw("click!invitation",
{
category:"invitation",action:(b?"show":"hide")+"_ask_to_answer_card",label:"?",value:this.data.Jq
}
))
}
else aC(this)
}
;
t.ce=function()
{
if(S.Ha())
{
var b=Cu.D();
b.wk("分享问题","question",this.data.Wb,
{
qid:this.data.X
}
);
b.show();
Du(b,"tb-webshare-sina")
}
else vk.D().w(j),vk.D().Sc("share","加入知乎，即可和朋友分享精彩内容","分享到新浪微博、腾讯微博或通过私信分享")
}
;
t.DM=function(b)
{
this.eC.W(b.msg.action);
this.eC.Km(b.msg.caption)
}
;
a.bC=function(b,c,d)
{
px.call(this,b,c,d)
}
;
y(bC,px);
bC.prototype.n=function(b)
{
bC.m.n.call(this,b);
this.Ue&&this.zp(this.QM.lb)
}
;
bC.prototype.R=function()
{
return $(this.e).is(":visible")
}
;
a.cC=function()
{
T.call(this);
this.data=Eg||
{

}
;
this.X=this.data.X;
this.Jo=n;
this.Uf=
{

}
;
this.bl=[];
this.al=[];
this.oi=0;
this.Iq=k
}
;
y(cC,T);
a.dC=
{
Iu:"vote",OJ:"added_time"
}
;
t=cC.prototype;
t.$k="zm-item-answer";
t.v=function()
{
kl.H(this);
this.n(document.body)
}
;

t.z=function()
{
cC.m.z.call(this);
var b=I("zh-question-meta-wrap");
b&&(this.KH=new $B(this.data),this.H(this.KH),this.KH.n(b));
this.yo();
var c=this;
$(".js-ignore-invite").click(function()
{
$(".question-invited-by").hide();
$.post("/question/askpeople",
{
qid:c.data.Wb,uid:S.Xj,op:"pass"
}
)
}
);
this.Yo=new wz;
this.g().c(this.Yo,"change",this.Gz);
this.Yo.v();
this.xI();
Ir()
}
;

t.xI=function()
{
this.kv=dC.Iu;
this.data.Wb=Eg.Wb;
eC(this,j);
if(S.Ha()&&("close"!==Eg.status&&(this.Pa=new lp(this.data.Xm,this.data.X),this.Pa.Ts=5,this.Pa.Ws=1,this.Pa.at=j,this.Pa.n(J("zm-tag-editor",this.e)),this.g().c(this.Pa,["remove_tag","add_tag"],function()
{
Y.U("ga_edit_question_topic_changed")
}
),this.g().c(this.Pa,"start_editing",function()
{
Y.U("ga_question_topic_edit_finish_changed")
}
)),"close"!==Eg.status))
{
this.Md=new Sy(this.data.X,"/question/title","content",n,j);
this.Md.ur=j;
this.Md.Dd=
j;
this.Md.qk=j;
var b=lt(this.data.wi);
this.Md.cm=b;
this.Md.n(I("zh-question-title"));
this.g().c(this.Md,"change",function()
{
Ki.dispatchEvent("question_title_change");
document.title=this.Md.hb()+" - 知乎"
}
);
this.g().c(this.Md,"click_edit",function()
{
Y.U("ga_question_title_edit_start")
}
);
this.g().c(this.Md,"cancel_edit",function()
{
Y.U("ga_question_title_edit_cancel")
}
);
this.g().c(this.Md,"save_changed",function()
{
Y.U("ga_question_title_edit_save_changed")
}
);
this.g().c(this.Md,"save_unchanged",function()
{
Y.U("ga_question_title_edit_save_unchanged")
}
)
}
this.wC=
I("zh-question-answer-num");
this.mn=I("zh-question-answer-wrap");
this.Rh=I("zh-question-collapsed-link");
this.Hn=I("zh-question-collapsed-wrap");
this.uM=I("zh-question-collapsed-num");
this.uL=I("zh-question-answer-form-wrap");
this.Ek=I("zh-question-notification-summary");
this.LI=I("zh-answers-filter");
this.ut=I("zh-add-question-sug");
this.Rh&&this.g().c(this.Rh,"click",this.rV);
this.ut&&this.g().c(this.ut,"click",this.IE);
P(this.g(),this,"answers_inited",this.JR);
(this.Kv=I("zg-question-suggested-topics"))&&
this.g().c(this.Kv,"click",this.HR);
this.xo();
this.g().c(window,"hashchange",function(b)
{
b=b.Yb;
b.oldURL&&"writing"===b.oldURL.split("#")[1]||fC(this)
}
);
this.Iq=new T;
this.H(this.Iq);
this.Iq.n(this.mn);
this.wF()
}
;
t.yo=function()
{
Fu("question",this.data.Wb,"read");
this.g().c(this,["click!","show!"],function(b)
{
"comment"===b.namespace&&b.Cc.fill("category","question_answer").fill("label","question_answer");
"invitation"===b.namespace&&b.Cc.fill("label","question_page")
}
)
}
;

t.JR=function()
{
var b=S[4];
Fg&&Fg.length&&(b=Fg[0][1]);
this.rb=new jw(this.data.lb,S,b);
this.H(this.rb);
this.rb.n(this.uL);
Kg&&Kg.length?this.rb.Na(Kg[0]):!Dg.Nc&&B&&this.rb.Na("<p></p>");
if(!this.data.Ho&&!this.oi)if(this.data.nn&&this.data.nn.length&&this.data.nn[3]!==S[3])this.rb.cb(n,"只有 "+it(this.data.nn)+" 能回答此问题");
else if("normal"===Eg.status||Kg)S.wi||this.rb.ud();
this.g().c(this.rb,"change",this.IR);
this.g().c(this.rb,"cancel_delete_answer",this.RR);
this.rb.ready(function()
{
var b=this.Pr();

b&&"writing"===location.hash.slice(1)&&b.execCommand("toggleFullScreen")
}
);
gC(this);
fC(this,k);
hC(this);
this.g().c(Ki,"anon_change",function(b)
{
this.data.lb=b.lb
}
);
if(b=$("#zh-question-filter-wrap")[0])
{
var c=this,d=new rz(
{
options:
{
vote:"按票数排序",added_time:"按时间排序"
}

}
);
d.ta("vote");
d.n(b);
c.g().c(d,"change",function(b)
{
b=b.data.key;
if(b!==c.kv)
{
c.kv=b;
var d=function(b,c)
{
return b-c
}
,h=function(b,c)
{
return c-b
}
;
b===dC.Iu?z.KI(c.bl,"vote",h):b===dC.OJ&&z.KI(c.bl,"added_time",d);
z.forEach(c.bl,function(b)
{
b=
this.Uf[b.aid];
b.eh||lc(b.h(),this.mn.firstChild)
}
,c)
}
$(window).trigger("updatelazy")
}
)
}
this.g().c(Ki,"answer_reorder",this.yP)
}
;
t.Gz=function()
{
this.DP=j;
this.Ek=$(this.Yo.AR)[0];
mc(this.Ek,I("zh-question-redirect-info"));
R(this.Ek,j);
Dg.Nc||(this.sj=new Pq,this.sj.n(this.Ek),as(this.sj));
this.g().c(this.Ek,"click",this.IE);
fC(this)
}
;

a.eC=function(b,c)
{
!S.Ha()||!c?(iC(b,"zh-question-detail",ha),iC(b,"zh-question-answer-summary",ha)):(iC(b,"zh-question-detail",b.ZP),iC(b,"zh-question-answer-summary",b.cQ))
}
,a.iC=function(b,c,d)
{
if(c=I(c))
{
var e=new nx;
b.g().c(e,"expand",d).c(e,"invalid",d);
e.n(c)
}

}
;

t.ZP=function(b)
{
if("close"!==Eg.status)
{
b=b.target.h();
this.Lb=new Sy(this.data.X,"/question/detail","content",j,k,600);
var c=lt(this.data.wi);
this.Lb.cm=c;
this.Lb.oZ=xk;
J("zm-editable-content",b).innerHTML&&(this.Lb.qk=j);
this.Lb.n(b);
this.g().c(this.Lb,"click_edit",function()
{
Y.U("ga_question_supplement_edit_start")
}
);
this.g().c(this.Lb,"cancel_edit",function()
{
Y.U("ga_question_supplement_edit_cancel")
}
);
this.g().c(this.Lb,"save_changed",function()
{
Y.U("ga_question_supplement_edit_save_changed")
}
);

this.g().c(this.Lb,"save_unchanged",function()
{
Y.U("ga_question_supplement_edit_save_unchanged")
}
)
}

}
;
t.cQ=function(b)
{
var b=b.target.h(),c=I("zh-question-answer-summary-link"),d;
if(b&&(Dg.HF||!this.data.oV))d=new nr(j,"/question/summary","content"),d.qd=["id="+this.data.X],d.Vq=n,d.n(b);
if(c)
{
var e=I("zh-question-answer-summary-wrap");
this.g().c(c,"click",function()
{
d&&(R(e,j),d.ud())
}
).c(e,"click",function(b)
{
"cancel"===b.target.name&&(b=!d.jg(),R(e,!b))
}
)
}
this.e0=d
}
;

t.IE=function(b)
{
if("close"===b.target.name)
{
if(this.sj&&(Vq(this.sj),Uq(this.sj,n),history.replaceState))
{
var b=new vf(location.href),c=b.Kc();
c.remove("q");
c.remove("psq");
history.replaceState(
{

}
,"",b.xg+"?"+c.toString())
}
R(this.Ek,n);
R(this.ut,n)
}
else if("A"===b.target.tagName&&"zh-question-suggest-reask"===b.target.id&&(R(this.ut,n),Y.fireEvent("query_string_change")),c="a"===$(b.target).prop("tagName").toLowerCase()?b.target:this.pf(b.target,"A"))b.preventDefault(),b.stopPropagation(),b=c.getAttribute("data-source")||
c.href,c=b.indexOf("#"),b=0>c?k:b.substr(c+1),fC(this,b&&decodeURIComponent(b))
}
;
a.hC=function(b)
{
var c=0,d=0,e=0;
z.forEach(b.al,function(b)
{
b=this.Uf[b];
b.og||(b.eh?d++:e++,c++)
}
,b);
b.data.ar=+b.uM.innerHTML;
S.Ha()||(b.data.ar=0);
b.data.Jq=e;
R(b.Rh,0<b.data.ar);
b.wC&&zc(b.wC,e?e+" 个回答":"还没有回答");
b.LI&&R(b.LI,1<b.data.Jq);
R(b.Rh,0<b.data.ar)
}
;

t.wF=function()
{
this.YP||(this.xC=Xb(this.$k,this.mn),this.BL=this.xC.length,this.wL=200,this.qD=0);
this.YP=j;
for(var b=this.qD,c=this.wL,d=this.BL,e=b;
e<d&&e<b+c;
)jC(this,this.xC[e],e),e++;
e<d?(this.qD=e,setTimeout(v(this.wF,this),30)):this.dispatchEvent("answers_inited")
}
;

a.jC=function(b,c,d,e)
{
e=new bC(b.X,k,e);
b.Iq.H(e);
e.n(c);
b.Uf[e.pa]=e;
b.al.push(e.pa);
b.g().c(e,"change",b.hz);
e.Ue&&(b.oi=e.pa,e.FL=S,b.g().c(e.ze,"change",b.UO),b.bf=e);
e.eh?e.Ue&&b.Hn.appendChild(e.h()):b.bl.push(
{
added_time:e.Sv,vote:d,aid:e.pa
}
);
e.og&&R(e.h(),n)
}
;

t.UO=function()
{
var b=this.bf,c=b.h(),d=b.ze.hb()[0];
R(c,n);
d=hc(La(d));
lc(d,c);
this.Uf[b.pa]=k;
this.al=z.filter(this.al,function(c)
{
return c!==b.pa
}
,this);
var e=999;
this.bl=z.filter(this.bl,function(c)
{
c.aid===b.pa&&(e=c.vote);
return c.aid!==b.pa
}
,this);
L(c);
b.F();
jC(this,d,e,n)
}
;
t.yP=function(b)
{
1>=this.al.length||this.kv!==dC.Iu||ok(this.Uf[b.vL].h())
}
;

t.hz=function(b)
{
b=b.target;
if(b instanceof bC)
{
var c=b.h();
switch(b.Ru)
{
case "collap":this.Hn.appendChild(c);
D.add(c,"zm-item-collapsed");
hC(this);
break;
case "cancel_collap":this.mn.appendChild(c);
D.remove(c,"zm-item-collapsed");
kC(this,c);
hC(this);
break;
case "set_delete":gC(this);
hC(this);
break;
case "cancel_delete":kC(this,this.Uf[this.oi].h()),gC(this),hC(this)
}

}

}
;

a.gC=function(b)
{
var c=k,c=k,d=
{
suggest:"建议修改",evaluate:"建议修改",close:"关闭"
}
;
!Kg&&"normal"!==Eg.status&&(c="被"+d[Eg.status]+'的问题不允许添加新的回答。<a data-tip="s$b$为什么部分问题会被「关闭」「建议修改」？" href="//www.zhihu.com/question/21290061 "><i class="zg-icon zg-icon-question-mark"></i></a>');
b.oi&&(c=b.Uf[b.oi],c=c.og?'你已经删除了对该问题的回答，如果需要修改，请先 <a href="javascript:;
" name="cancel_delete">撤消删除</a>':'一个问题你只能回答一次，但你可以对 <a href="#answer-'+c.pa+'">现有的回答</a> 进行修改');
S.wi&&!b.oi&&(c='添加回答：<a href="javascript:;
" name="answer_my_question">回答自己的提问</a>');

b.data.Ho&&(c='该问题目前已经被锁定，无法添加新答案。<a href="http://www.zhihu.com/question/19604313" target="_blank">问题为什么会被锁定？</a>');
c&&!b.rb.$f&&b.rb.cb(n,c)
}
,a.lC=function(b,c)
{
var d=I("zh-question-collapsed-switcher");
c?(d.name="collap",b.bD=j,R(b.Hn,j),D.add(b.Rh,"zu-question-collap-title-active")):(b.bD=n,d.name="expand",R(b.Hn,n),D.remove(b.Rh,"zu-question-collap-title-active"))
}
;

t.rV=function(b)
{
if((b=sk(this.Rh,b.target))&&b.name)if("expand"===b.name)
{
if(!this.wM)
{
this.wM=j;
var c=this,d=this.Hn,b=$.get("/node/QuestionCollapsedAnswerListV2",
{
params:
{
question_id:this.data.X
}

}
);
b.done(function(b)
{
b=hc(b);
lC(c,j);
D.remove(d,"zm-question-collapsed-list-loading");
d.appendChild(b);
z.forEach(qc(d),function(b)
{
b!==e&&jC(c,b,99999)
}
);
$("img.lazy",d).lazyload(
{
data_attribute:"actualsrc",threshold:400
}
)
}
);
var e=qc(d)[0];
e&&(R(e,n),b.done(function()
{
R(e,j)
}
));
R(d,j);
D.add(d,"zm-question-collapsed-list-loading")
}
lC(this,
j)
}
else lC(this,n)
}
;
t.RR=function()
{
var b=this.Uf[this.oi];
b.og=n;
b.status=0;
xx(b);
kC(this,b.h())
}
;

t.IR=function()
{
var b=this.rb.Hq.checked,c=
{
AG:j,title:"确认放弃匿名身份？",content:"你在该问题下的赞同和关注行为将以实名显示。"
}
,d=v(function()
{
if(!this.xhr||!this.xhr.Gb())
{
var c=this.rb.jg();
if(c)
{
var d=new V(j),h=new Si,l=b?1:0;
h.add("id",this.X).add("content",c).add("anon",l);
d.on("success",function()
{
Eg.lb!==l&&Ki.dispatchEvent(new $r(l));
var b=Ie(this.xhr);
b&&!b.r?(b=hc(La(b.msg[0])),this.mn.appendChild(b),jC(this,b,this.al.length,j),gC(this),Eg.lb||(this.vR=new OB(this.Uf[this.oi]),this.vR.show()),S.wi&&$("#answer-my-question-tip").insertAfter($("#zh-question-answer-form-wrap")).show(),
hC(this),this.rb.F()):U(b.msg)
}
,n,this);
d.ajax("/answer/add",h.toString());
this.xhr=d
}

}

}
,this);
Eg.lb&&!b?Ci(c,function(b)
{
b&&d()
}
):d()
}
;
t.pf=ba();
t.HR=function(b)
{
if((b=this.pf(b.target))&&b.name)
{
var c=b.name;
"close"===c?R(this.Kv,n):"addtag"===c&&(this.Pa.af(b.id.split("-")[1],b.innerHTML),R(b,n))
}

}
;
t.xo=function()
{
this.IA=new PB(this.X);
this.IA.v()
}
;

a.fC=function(b,c)
{
if(c=c||location.hash.slice(1))
{
var d=c.split("-"),e=d[1];
"answer"===d[0]&&(d=b.Uf[e])&&(d.eh&&!b.bD?kC(b,b.Rh):kC(b,d.h()))
}

}
,a.kC=function(b,c)
{
if(c)
{
var d=xg(document.body).top,e=b.DP?og(b.Ek).height:0,d=
{
paddingTop:d+e
}
;
"number"===$.type(d)&&(d=
{
offsetTop:d
}
);
d.yJ=Ds;
Cs(c,d);
ok(c);
b.sj&&b.sj.dq()
}

}
;
a.mC=function()
{
cC.call(this);
this.data=Eg;
this.X=this.data.X
}
;
y(mC,cC);
t=mC.prototype;
t.xI=function()
{
(this.vr=I("zh-single-answer-disable-wrap"))&&this.g().c(this.vr,"click",this.lU);
this.am();
this.xo();
var b=$("#zh-question-answer-collestions");
b.length&&$("a[name=focus]",b).click(function()
{
wk(this,"favlist")
}
);
eC(this,n)
}
;
t.yo=function()
{
this.g().c(this,["click!","show!"],function(b)
{
"invitation"===b.namespace&&b.Cc.fill("label","answer_page")
}
);
mC.m.yo.call(this)
}
;

t.lU=function(b)
{
b.target&&b.target.name&&(b=this.sc,b.og=n,b.status=0,xx(b))
}
;

t.am=function()
{
var b=J("zm-item-answer",I("zh-question-answer-wrap"));
if(b)
{
this.sc=new bC(this.X);
this.H(this.sc);
this.sc.n(b);
b=this.g();
b.c(this.sc,"change",this.hz);
if(this.sc.AQ)
{
b.c(Ki,"anon_change",function(b)
{
var c=b.lb,b=$("#js-sidebar-author-info");
if(!$("a[name=focus]",b).length)
{
var g=
{
"0":"fullname",1:"url_token",2:"avatar_path",3:"hash",4:"headline"
}
,h=z.reduce(S,function(b,c,d)
{
b[g[d]]=c;
return b
}
,
{

}
),c=Bk(this.GL,
{
author:!c&&h
}
);
b.html(c)
}

}
);
var c=this.sc.ze;
c&&b.c(c,"change",function()
{
var b=
La(c.hb()[0]),b=hc(b);
oc(b,this.sc.e);
this.am(b)
}
)
}
nC(this);
tx(this.sc,
{
autofocus:n,gG:j
}
)
}

}
;
t.GL='<h3>关于作者</h3><% if (author) 
{
 %>    <a class="zm-list-avatar-link" href="/people/<%= author.url_token %>" tabindex="-1">        <img class="zm-list-avatar-medium" src="<%= author.avatar_path.replace("_s.","_m.") %>"/>    </a>    <div class="zm-list-content-medium">        <h2 class="zm-list-content-title">            <a href="/people/<%= author.url_token %>"><%= author.fullname %></a>        </h2>        <div class="zg-gray-normal"><%= author.headline || "" %></div>    </div><% 
}
 else 
{
 %>    <a class="zm-list-avatar-link" href="javascript:;
">        <img class="zm-list-avatar-medium" src="http://img.zhihu.dev:4080/66/6b/666b0abfc_m.jpg"/>    </a>    <div class="zm-list-content-medium">        <h2 class="zm-list-content-title">匿名用户</h2>    </div><% 
}
 %>';

t.xo=function()
{
this.IA=new PB(this.X,this.sc);
this.IA.v();
var b=I("js-sidebar-author-info");
b&&(new Tn(b)).v()
}
;
t.hz=function(b)
{
b=b.target;
if(b instanceof bC)switch(b.Ru)
{
case "collap":D.add(b.h(),"zm-item-collapsed");
break;
case "cancel_collap":D.remove(b.h(),"zm-item-collapsed");
break;
case "set_delete":case "cancel_delete":nC(this),location.reload()
}

}
;

a.nC=function(b)
{
b.sc?b.sc.og?(b.vr.innerHTML=b.sc.Ue?'你已经删除了对该问题的回答，如果需要修改，请先 <a href="javascript:;
" name="cancel_delete">撤消删除</a>':"此答案已经被作者删除",R(b.sc.h(),n)):R(b.sc.h(),j):b.vr.innerHTML="此答案已经被作者删除"
}
;
a.oC=function()
{
T.call(this);
this.page=1
}
;
y(oC,T);
oC.prototype.v=function()
{
var b=J("js-topic-feed-page");
this.n(b)
}
;

oC.prototype.z=function()
{
oC.m.z.call(this);
var b=this;
this.FB=$(".js-topic-feed-container",this.e);
this.FB.find(".js-topic-item").each(function()
{
var c=new pC;
b.H(c);
c.n(this)
}
);
this.mt=new qC;
this.mt.n($(".js-pinned-topics",this.element)[0]);
(this.ac=I("js-load-more"))&&this.g().c(this.ac,"click",this.rz);
$(".instruction .close-normal").click(function()
{
var b=new V(n);
b.ajax("/notifeature?feature=6",k,"GET");
xd(b,"success",function()
{
$(".instruction").fadeOut()
}
)
}
);
this.g().c(this.mt,"change",function(b)
{
$("#tf-"+
b.$I).find(".js-pin").replaceWith('<a href="javascript:;
" data-action="pin-topic" class="zg-gray pin topic-hover-content" style=""><i class="z-icon-pin"></i>固定话题</a>')
}
)
}
;
a.rC=function(b,c)
{
zc(b,c?"加载中...":"更多")
}
;
oC.prototype.rz=function()
{
rC(this.ac,j);
this.xhr=new V(j);
P(this.g(),this.xhr,"complete",v(this.zf,this));
var b=new tk;
b.add("page",++this.page);
this.xhr.ajax(location.pathname,b.Kc())
}
;

oC.prototype.zf=function()
{
var b=this,c=Ie(this.xhr);
c&&!c.r&&(0<c.msg.length?($(c.msg).each(function(c,e)
{
var g=new pC;
b.H(g);
g.n($(e)[0]);
b.FB.append(g.h())
}
),rC(this.ac,n)):$(this.ac).hide())
}
;
a.pC=function()
{
T.call(this)
}
;
y(pC,T);
pC.prototype.z=function()
{
pC.m.z.call(this);
this.g().c(this.e,"click",v(this.fz,this))
}
;

pC.prototype.fz=function(b)
{
var c=b.target,b=$(c).attr("data-action"),d=$(this.e).find(".topic-avatar img"),e=d.clone(),g,h=$(this.e).data("id");
if("pin-topic"===b)g=this.getParent().mt,$.post("/pin-topic/add",
{
tid:h
}
,$.proxy(function(b)
{
!b.r&&b.msg?($(this.e).append($(this.aU(
{
topic:b.msg
}
)).hide().fadeIn()),sC(this)):U(b.msg,2E3)
}
,g)).done(function(b)
{
if(!b.r&&b.msg)
{
ok(c);
$(c).replaceWith('<a href="javascript:;
" data-action="unpin-topic" class="zg-gray unpin topic-hover-content" style=""><i class="z-icon-unpin"></i>取消固定</a>');

var b=d.offset(),h=$(g.e).offset();
1E3<b.top-h.top?(h=$(".top-nav-topic-selector.current a").offset(),h=
{
top:h.top+20,left:h.left+15,width:"25px",height:"25px",opacity:0.1
}
,e.css(
{
position:"absolute","z-index":"999"
}
).css("top",b.top).css("left",b.left).appendTo("body").animate(h,300,function()
{
e.remove()
}
)):e.css(
{
position:"absolute","z-index":"999"
}
).appendTo("body").css("top",b.top).css("left",b.left).animate(
{
top:h.top-63+$(g.e).height(),left:h.left,width:"-=50px",height:"-=50px",opacity:0.5
}
,
300,function()
{
e.remove()
}
)
}

}
);
else if("unpin-topic"===b)
{
var l=this.getParent().mt,m=function()
{
var b=$(c).replaceWith('<a href="javascript:;
" data-action="pin-topic" class="zg-gray pin topic-hover-content" style=""><i class="z-icon-pin"></i>固定话题</a>')[0];
ok(b)
}
,p=$(l.e).find("[data-topicid="+h+"]");
p.fadeOut(function()
{
p.remove();
l.cu().done(function()
{
m&&m()
}
);
l.dispatchEvent(
{
type:"change",$I:p.attr("data-topicid")
}
)
}
)
}
else if("follow"===b||"unfollow"===b)wk(c,"topic",k,["follow","unfollow"]),
$(this.e).fadeOut()
}
;
a.qC=function()
{
T.call(this)
}
;
y(qC,T);
qC.prototype.aU=Bk('<div class="side-topic-item js-pin-item  cursor-move" data-topicid="<%=topic.id%>" >    <a href="/topic/<%=topic.url_token%>" class="pin-topic-avatar-link">        <img src="<%=topic.avatar_path%>" alt="" title="拖动以排序" class="side-topic-avatar js-topic-avatar">    </a>    <div class="side-topic-content ellipsis">        <a href="/topic/<%=topic.url_token%>" class="topic-link side-topic-title"><%=topic.name%></a>        <div class="side-topic-meta">        <% if (topic.children_num > 0) 
{
 %>            <span class="zg-gray"><%=topic.children_num%> 个子话题</span>            <span class="bull">&bull;
</span>        <% 
}
 %>            <span class="zg-gray"><%=topic.followers_num%> 人关注</span>        </div>        <% if (topic.feed_num > 0) 
{
 %>            <a class="side-topic-more" href="/topic/<%=topic.url_token%>"><%=topic.feed_num %> 条动态&nbsp;
&raquo;
</a>        <% 
}
else
{
 %>            <a class="side-topic-more" href="/topic/<%=topic.url_token%>">进入话题 &raquo;
</a>        <% 
}
 %>    </div>    <a href="javascript:;
" data-action="up" class="up" data-tip="s$b$置顶"></a>    <a href="javascript:;
" data-action="remove" class="delete"></a></div>');

qC.prototype.z=function()
{
qC.m.z.call(this);
this.g().c(this.e,"click",v(this.fz,this));
sC(this)
}
;
a.sC=function(b)
{
b.ag&&b.ag.F();
var c=new vl;
c.zr="pin-topic-moving";
wl(c,b.e,0);
c.v();
b.g().c(c,"dragend",v(b.cu,b));
b.ag=c;
$("a",b.e).each(function()
{
b.g().c(this,"mousedown",function(b)
{
b.stopPropagation()
}
)
}
)
}
;

qC.prototype.fz=function(b)
{
var c=this,d=b.target,e=$(d).attr("data-action");
if(e)
{
var g=$(d).parents(".js-pin-item");
if("up"===e)
{
var b=g.position(),h=g.clone();
g.before(h).css(
{
position:"absolute","z-index":"999"
}
).css("top",b.top).animate(
{
top:$(c.e).position().top
}
,200,function()
{
h.remove();
g.css(
{
position:"relative",top:0
}
).prependTo(c.e);
c.cu()
}
);
h.css("opacity",0)
}
else"remove"===e&&g.fadeOut(function()
{
g.remove();
c.cu();
c.dispatchEvent(
{
type:"change",$I:g.attr("data-topicid")
}
)
}
)
}
else b.stopPropagation()
}
;

qC.prototype.cu=function()
{
var b=[];
$(this.e).find("div.js-pin-item").each(function()
{
b.push($(this).attr("data-topicid"))
}
);
return $.post("/pin-topic",
{
topic_ids:b.join(",")
}
,ba())
}
;
a.tC=function()
{
T.call(this);
this.cE="even";
this.Nn="current"
}
;
y(tC,T);
t=tC.prototype;
t.v=function()
{
kl.H(this);
this.n(document.body)
}
;

t.z=function()
{
tC.m.z.call(this);
this.zu=$("ul.zm-topic-cat-main").children();
var b=this.xd=$("div.zh-general-list"),c=new Wt(
{
Oa:["autoload","nodeSource"]
}
);
this.H(c);
c.n(b.get(0));
this.g().c(c,"next",this.Dq);
this.bG=c;
b.on("click","a.follow",function()
{
wk(this,"topic",xa(ok,this),k,
{
follow_text:"关注"
}
)
}
);
N(window,"hashchange",this.aH,n,this);
this.aH()||(b.show(),this.Dq())
}
;

t.Dq=function()
{
var b=this.xd.show().children();
if(!b.length)return this.xd.html('<p class="zg-gray-normal" style="text-align:center;
line-height:4;
">没有子话题。</p>');
b.removeClass("no-border "+this.cE);
b.filter(":odd").addClass(this.cE);
b=b.last();
b.index()%2?b.add(b.prev()).addClass("no-border"):b.addClass("no-border");
var b=this.Sr(),c=b.params&&b.params.topic_id,b=this.zu.filter(function()
{
return $(this).attr("data-id")===String(c)
}
);
b.length&&b.addClass(this.Nn).siblings().removeClass(this.Nn)
}
;

t.Sr=function()
{
return this.xd.data("init")
}
;
t.aH=function()
{
var b;
a:
{
var c=decodeURIComponent(location.hash.slice(1));
if(c&&(b=this.zu.filter(function()
{
return $(this).text()===c
}
),b.length&&this.zu.filter("."+this.Nn).text()!==c))
{
b.addClass(this.Nn).siblings().removeClass(this.Nn);
b=
{
params:
{
topic_id:b.data("id")
}

}
;
var d=this.Sr();
$.extend(j,d,b);
this.xd.attr("data-init",JSON.stringify(d));
this.xd.empty();
this.bG.bj();
this.bG.Jy();
b=j;
break a
}
b=i
}
return b
}
;
a.uC=function()
{
T.call(this)
}
;
y(uC,T);
uC.prototype.v=function()
{
kl.H(this);
this.n(document.body)
}
;
uC.prototype.z=function()
{
uC.m.z.call(this);
vC(this,"zh-global-logs-wrap");
vC(this,"zh-global-logs-questions-wrap");
vC(this,"zh-question-log-list-wrap")
}
;
a.vC=function(b,c)
{
var d=I(c);
if(d)
{
var e=new Wt;
b.H(e);
e.Oa("locationSource",
{
jt:j
}
);
e.n(d);
Iy(d)
}

}
;
a.wC=function()
{
T.call(this)
}
;
y(wC,T);
wC.prototype.v=function()
{
kl.H(this);
this.n(document.body)
}
;
wC.prototype.z=function()
{
wC.m.z.call(this);
this.wo("zh-question-followers-list-wrap")
}
;
wC.prototype.wo=function(b)
{
if(b=I(b))
{
var c=new Wt;
this.H(c);
c.Oa("locationSource");
c.n(b)
}

}
;
a.xC=function()
{

}
;
xC.prototype.v=function()
{
var b=I("zh-invited-member-list");
b&&(new Ny(b,"/invitation/more","people",["zg-btn-follow","zg-btn-unfollow"],j)).v();
(b=I("zh-invited-sina-member-list"))&&(new Ny(b,k,"people",["zg-btn-follow","zg-btn-unfollow"],j)).v();
I("zh-sina-invite")&&(new nz).v();
new ql(I("invite_friend"))
}
;
a.yC=function(b,c)
{
var d=this.C=
{

}
;
E.extend(d,this.Q,c||
{

}
);
this.input=b;
this.Jb=d.Jb;
this.yh=this.lT();
this.Av=[];
this.Av.push(
{
action:"remove",method:this.UT,LM:d.RT,S:"删除"
}
);
setTimeout(v(this.Jg,this))
}
;
y(yC,Hd);

ya(yC.prototype,
{
Q:
{
source:"/topic/autocomplete",Jb:k,YM:"",Xq:n,pJ:"/topic/%s",zh:'<li data-id="<%=id%>"><a class="tag-link" href="<%=url%>"><%=name%></a></li>',parse:function(b)
{
var c=$(b);
return
{
Ct:j,id:c.data("id"),url:b.href,name:c.text()
}

}
,OU:nf,nN:"canedit",sw:"empty",Bn:"button",RT:"remove-button"
}
,uV:function(b)
{
return St(this.C.pJ,b.url_token)
}
,has:function(b)
{
return!!z.find(this.yh,function(c)
{
return c.name===b.name||c.id===b.id
}
)
}
,jE:function(b)
{
return z.find(this.yh,function(c)
{
return c.name===
b
}
)
}
,JZ:function(b)
{
return z.find(this.yh,function(c)
{
return c.id===b
}
)
}
,Te:function()
{
var b=!!qc(this.Jb).length;
D.enable(this.Jb,this.C.sw,!b);
this.dispatchEvent("change")
}
,add:function(b,c)
{
if(b&&(this.has(b)||this.yh.push(b),b.Ct=n,c||this.C.OU.call(this,b)))this.ZT(b),b.Ct=j,this.dispatchEvent("add"),this.Te()
}
,remove:function(b)
{
this.yh=z.filter(this.yh,function(c)
{
return b!==c.id
}
,this);
this.dispatchEvent("remove");
this.Te()
}
,XN:function()
{
return z.filter(this.yh,function(b)
{
return b.Ct!==
n
}
)
}
,lx:function()
{
return z.map(this.XN(),function(b)
{
return b.id
}
)
}
,ZT:function(b)
{
b=hc(this.YH(b));
this.Jb.appendChild(b);
this.he(b)
}
,YH:function(b)
{
return Bk(this.C.zh,b)
}
,Y:function()
{
this.Jb.innerHTML=z.map(this.yh,this.YH,this).join("")
}
,lT:function()
{
return z.map(this.DE(),this.C.parse)
}
,DE:function()
{
return qc(this.Jb)
}
,Jg:function()
{
var b=this,c=b.C,d=this.input,e=
{
source:c.source,nk:Jc(b.input,function(b)
{
return"static"!==$.css(b,"position")
}
),placeholder:this.input.getAttribute("placeholder"),
select:function(d)
{
b.add(
{
id:d.id,name:d.id?d.label:b.input.value,url:b.uV(d),avatar:d.avatar,url_token:d.url_token
}
);
return c.YM
}
,filter:function(d)
{
return z.filter(d,function(d)
{
return c.Xq&&!d.id?n:!z.find(b.yh,function(b)
{
return b.Ct&&b.id===d.id
}
)
}
)
}

}
,g=
{
cd:function(b,c,d)
{
d.innerHTML=l(b.data)
}

}
;
E.extend(g,e||
{

}
);
var h=new Xo(d,g);
N(h,"show",function()
{
1<h.bb.length&&!h.bb[0].id&&Ol(h)
}
);
var l=Bk('<% if (data.avatar) 
{
 %><img class="zm-item-img-avatar zg-left" src="<%=avatar%>"><% 
}
 %><% if(data.type === "search_link" || !data.id)
{
 %><span class="zu-autocomplete-row-name zu-autocomplete-row-name-info"><%=data.type === "search_link"?("添加 "+label+" 话题"):label%></span><% 
}
 else 
{
 %><span class="zu-autocomplete-row-name"><%=label%></span><% 
}
 %><span class="zg-gray-normal zu-autocomplete-row-description"><% if (data.alias && data.followers) 
{
 %><% if ( data.alias ) 
{
 %>又称 <%=alias%><% 
}
 %><% if ( data.alias && data.followers )
{
 %>，<% 
}
 %><% if ( data.followers )
{
 %><%=followers%> 人关注<% 
}
 %><% 
}
else
{
 %>&nbsp;
<% 
}
 %></span>');

this.ba=h;
z.forEach(this.DE(),this.he,this);
N(this.input,"keypress",function(d)
{
var e;
if(13===d.keyCode&&!c.Xq&&(e=La(this.value))&&!b.ba.tb())b.add(b.jE(e)||
{
id:k,name:e,url:"/topic/"+e
}
)
}
);
this.Te()
}
,UT:function(b)
{
this.remove($(b).remove().data("id"))
}
,oT:function(b,c)
{
var d=z.find(this.Av,function(c)
{
return c.action===b
}
);
d&&d.method&&d.method.call(this,c);
this.input.focus()
}
,he:function(b)
{
var c=this.C;
D.add(b,c.nN);
z.forEach(this.Av,function(d)
{
var e=new yo(" ",Ho.D());
e.Kh([c.Bn,d.LM].join(" "));

e.Y(b);
e.cb(j);
e.Tc(d.S);
e.addEventListener("action",function()
{
this.oT(d.action,b)
}
,n,this)
}
,this)
}

}
);
a.zC=function()
{
this.IB=this.JB=k
}
;

zC.prototype.v=function()
{
function b(b,c)
{
var g=K("li"),h=K("span","item-label",b);
g.appendChild(h);
var l=new yo("",Ho.D());
l.Kh("zm-profile-tag-btn zm-profile-tag-btn-del");
l.cb(j);
l.Tc("移除动作");
l.ta(c);
l.addEventListener("action",function()
{
var b=l.W();
e(b,n);
L(g);
X.zt(j);
d()
}
);
l.Y(g);
Ma.appendChild(g)
}
function c()
{
ka.w(X.Ml()!==z.filter(X.Eb(),function(b)
{
return!!(b.ca&8)
}
).length)
}
function d()
{
z.forEach(Q,function(b)
{
b.selected||(b=new Qz(b.text,b.value),X.Ea(b))
}
);
c()
}
function e(b,c)
{
var d=z.find(Q,
function(c)
{
return c.value===b
}
);
d&&(d.selected=c)
}
function g()
{
var b=$.grep(m.get(0).options,function(b)
{
return b.selected
}
);
$.map(b,function(b)
{
return b.value
}
)
}
function h()
{
p=H.lx();
G.val(p.join(","))
}
var l=$("#rq-settings-ui"),m=$("select.select",l);
$(".topics-num",l);
$(".actions-num",l);
var p=[];
this.IB=$("#rq-info-block");
l.on("click",".beginedit-button",function(b)
{
b.preventDefault();
l.addClass("expanded-view")
}
).on("click",".exitedit-button",function(b)
{
b.preventDefault();
l.removeClass("expanded-view")
}
).on("click",
".endedit-button",function(b)
{
b.preventDefault();
l.get(0).submit()
}
);
var r=$(".topic-editor",l),x=$("input.topic-input",r).get(0),F=$("ul.tag-list",r).get(0),H=new yC(x,
{
Xq:j,Jb:F
}
),G=$('input[name="topics"]',r);
H.on("change",h);
m.on("change",g);
h();
g();
r=m.get(0);
R(r,n);
var Q=r.options,X=new ou;
X.on("action",function(d)
{
d=d.target;
b(d.Xg(),d.W());
e(d.W(),j);
X.removeItem(d);
c()
}
);
var ka=new Ou("添加动作",X);
ka.Kh("menu-button");
ka.Y(r.parentNode);
ka.rp=j;
Qu(ka);
var Ma=K("ul","display-list");
d();
z.forEach(Q,
function(c)
{
c.selected&&b(c.text,c.value)
}
);
r.parentNode.insertBefore(Ma,ka.h());
var Ea=this,r=$("#rq3-item-list"),Va=
{
zV:function(b)
{
return $.post("/watch/thank",
{
id:b,rq_type:"thank"
}
)
}
,HT:function(b)
{
return $.post("/watch/seen",
{
id:b,rq_type:"seen"
}
)
}

}
;
r.on("click",".read-button",function()
{
var b=$(this).closest(".rq-item"),c=b.data("id");
Va.HT(c);
c=ne.text()||0;
0<c&&ne.text(c-1);
var d=Ea.IB,e=Number(Ea.JB.text());
setTimeout(function()
{
d.toggleClass("hidden",!!e)
}
,210);
b.slideUp(function()
{
b.remove()
}
)
}
).on("click",
".thank-button",function(b)
{
b.preventDefault();
var b=$(this),c=b.closest(".rq-item").data("id");
b.hasClass("thanked")||(Va.zV(c),b.addClass("thanked").text("已感谢"))
}
);
Iy(r);
r=new pu(r.get(0),location.href,j);
r.xH=function(b)
{
return b.getAttribute("data-id")
}
;
r.Hf("rq-item");
r.v();
var r=$("#rq3-sidenav-link"),ne=$(".zg-num",r);
this.JB=ne
}
;
a.AC=function()
{

}
;
AC.prototype.v=function()
{
$("a.js-obfuscate-email").each(function()
{
var b=$(this),c=b.data("email").split("").reverse().join("");
b.attr("href","mailto:"+c).text(c)
}
)
}
;
a.BC=function()
{

}
;
y(BC,T);
BC.prototype.v=function()
{
kl.H(this);
this.n(document.body)
}
;
BC.prototype.z=function()
{
BC.m.z.call(this);
var b=$("#zh-following-question-item-list").children(".zh-general-list");
if(b.length)
{
var c=new Wt;
this.H(c);
c.Oa("nodeSource");
c.n(b.get(0))
}
Ir()
}
;
a.CC=function()
{
T.call(this)
}
;
y(CC,T);
CC.prototype.z=function()
{
this.g().c(this.e,"click",this.bp)
}
;
CC.prototype.bp=function(b)
{
var c=b.target;
c&&"rmdraft"===c.name&&Ci("删除草稿","你确定要删除这个草稿吗？",function(b)
{
b&&(Ei("/answer/draft/delete",k,"POST","qid="+c.id.split("-")[1]),L(this.e))
}
,this)
}
;
a.DC=function()
{

}
;
y(DC,T);
DC.prototype.v=function()
{
var b=I("zh-draft-page-wrap");
b&&this.n(b)
}
;

DC.prototype.z=function()
{
N(I("zh-clear-all-draft"),"click",function()
{
Ci("删除所有草稿","你确定要删除所有草稿吗？删除后将无法恢复",function(b)
{
b&&(window.location.href="/draft/clear")
}
);
return n
}
);
this.wo()
}
;
DC.prototype.wo=function()
{
var b=I("zh-draft-item-list");
if(b)
{
var c=new Wt;
c.Oa("locationSource",
{
jt:j
}
).Oa("childConstructor",
{
Sg:CC
}
);
c.n(b)
}

}
;
a.EC=function(b)
{
return $.post("/node/ExploreAnswerListV2",
{
method:"get_feeds",params:
{
offset:b
}

}
)
}
;
a.FC=function()
{
this.nh="explore";
this.zN="explore_feed"
}
;
y(FC,T);
FC.prototype.v=function()
{
kl.H(this);
this.n(document.body)
}
;
FC.prototype.z=function()
{
FC.m.z.call(this);
var b=I("zh-explore-list"),c=new GC;
this.H(c);
c.n(b);
this.g().c(this,"click!",function(b)
{
"comment"===b.namespace&&b.Cc.fill("category",this.nh).fill("label",this.zN)
}
)
}
;
a.GC=function()
{
Ot.call(this,
{
source:this.source
}
);
this.qT=3E5
}
;
y(GC,Wt);

GC.prototype.z=function()
{
GC.m.z.call(this);
this.Oa("childConstructor",
{
Sg:zx
}
).Oa("activeSource",
{
RC:"%d 条新热门内容",source:v(this.NK,this)
}
)
}
;
GC.prototype.NK=function(b,c)
{
var d=this,e=setInterval(function()
{
var e;
e=c()[0]||d.Eb()[0];
e=$(e).data("offset");
EC(-e).done(function(c)
{
c.r||b(c.msg)
}
)
}
,this.qT);
return
{
F:function()
{
clearInterval(e)
}

}

}
;
GC.prototype.source=function()
{
return EC($(this.Eb()).last().data("offset")).then(function(b)
{
return!b.r&&
{
results:b.msg
}

}
)
}
;
a.HC=function()
{
T.call(this)
}
;
y(HC,T);
HC.prototype.v=function()
{
kl.H(this);
this.n(document.body)
}
;
HC.prototype.z=function()
{
HC.m.z.call(this);
this.wo()
}
;
HC.prototype.wo=function()
{
var b=I("js-suggest-people");
if(b)
{
var c=0,d=new Wt(
{
source:function()
{
return $.get("",
{
start:c+20,limit:20
}
).then(function(b)
{
if(!b.r)return b=b.msg,b.hasmore&&(c+=20),
{
results:b.htmls,next:Boolean(b.hasmore)
}

}
)
}

}
);
this.H(d);
d.n(b)
}

}
;
a.JC=function(b,c,d)
{
T.call(this,d);
this.Kf=c||dj;
this.BJ=this.Kf.$B;
this.$=new gj(b);
this.$.El=this.Kf.Ku;
this.$.Vg=this.Kf.Ju;
this.Ec=this.$.clone();
this.Ec.setDate(1);
this.tu="      ".split(" ");
this.tu[this.Kf.Pu[0]]=IC()+"-wkend-start";
this.tu[this.Kf.Pu[1]]=IC()+"-wkend-end";
this.dm=
{

}

}
;
y(JC,T);
t=JC.prototype;
t.AA=j;
t.WU=j;
t.xN=j;
t.GA=j;
t.DI=j;
t.Fq=j;
t.EA=j;
t.FI=n;
t.GD=k;
t.Cr=k;
t.mw=k;
t.bM=hh.D();

a.IC=function()
{
return"goog-date-picker"
}
,a.KC=function(b)
{
R(b.pw,b.EA);
R(b.ow,b.Fq);
R(b.TI,b.EA||b.Fq)
}
;
t.EH=function()
{
this.Ec.add(new ps("m",-1));
LC(this)
}
;
t.LG=function()
{
this.Ec.add(new ps("m",1));
LC(this)
}
;
t.AT=function()
{
this.Ec.add(new ps("y",-1));
LC(this)
}
;
t.zR=function()
{
this.Ec.add(new ps("y",1));
LC(this)
}
;
t.mI=function()
{
this.setDate(new gj)
}
;
t.kI=function()
{
this.Fq&&this.setDate(k)
}
;
t.getDate=function()
{
return this.$&&this.$.clone()
}
;

t.setDate=function(b)
{
var c=b!=this.$&&!(b&&this.$&&b.getFullYear()==this.$.getFullYear()&&b.getMonth()==this.$.getMonth()&&b.getDate()==this.$.getDate());
this.$=b&&new gj(b);
b&&(this.Ec.set(this.$),this.Ec.setDate(1));
LC(this);
this.dispatchEvent(new MC("select",this,this.$));
c&&this.dispatchEvent(new MC("change",this,this.$))
}
;

a.OC=function(b)
{
if(b.Cr)
{
for(var c=b.Cr;
c.firstChild;
)c.removeChild(c.firstChild);
var d,e;
if(b.FI)d=b.G.createElement("td"),d.colSpan=b.GA?1:2,NC(b,d,"«",b.EH),c.appendChild(d),d=b.G.createElement("td"),d.colSpan=b.GA?6:5,d.className=IC()+"-monthyear",c.appendChild(d),b.nw=d,d=b.G.createElement("td"),NC(b,d,"»",b.LG),c.appendChild(d);
else
{
var g=b.Kf.QB[0].toLowerCase();
d=b.G.createElement("td");
d.colSpan=5;
NC(b,d,"«",b.EH);
b.oj=NC(b,d,"",b.UU,IC()+"-month");
NC(b,d,"»",b.LG);
e=b.G.createElement("td");

e.colSpan=3;
NC(b,e,"«",b.AT);
b.Vn=NC(b,e,"",b.YU,IC()+"-year");
NC(b,e,"»",b.zR);
g.indexOf("y")<g.indexOf("m")?(c.appendChild(e),c.appendChild(d)):(c.appendChild(d),c.appendChild(e))
}

}

}
;

t.Z=function(b)
{
JC.m.Z.call(this,b);
b.className=IC();
var c=this.G.createElement("table"),d=this.G.createElement("thead"),e=this.G.createElement("tbody"),g=this.G.createElement("tfoot");
Oc(e,"grid");
e.tabIndex="0";
this.aB=e;
this.TI=g;
var h=this.G.createElement("tr");
h.className=IC()+"-head";
this.Cr=h;
OC(this);
d.appendChild(h);
var l;
this.lf=[];
for(var m=0;
7>m;
m++)
{
h=this.G.createElement("tr");
this.lf[m]=[];
for(var p=0;
8>p;
p++)
{
l=this.G.createElement(0==p||0==m?"th":"td");
if((0==p||0==m)&&p!=m)l.className=
0==p?IC()+"-week":IC()+"-wday",Oc(l,0==p?"rowheader":"columnheader");
h.appendChild(l);
this.lf[m][p]=l
}
e.appendChild(h)
}
h=this.G.createElement("tr");
h.className=IC()+"-foot";
l=this.mw=h;
kc(l);
m=this.G.createElement("td");
m.colSpan=2;
m.className=IC()+"-today-cont";
p=w("Today");
this.pw=NC(this,m,p,this.mI);
l.appendChild(m);
m=this.G.createElement("td");
m.colSpan=4;
l.appendChild(m);
m=this.G.createElement("td");
m.colSpan=2;
m.className=IC()+"-none-cont";
p=w("None");
this.ow=NC(this,m,p,this.kI);
l.appendChild(m);

KC(this);
g.appendChild(h);
c.cellSpacing="0";
c.cellPadding="0";
c.appendChild(d);
c.appendChild(e);
c.appendChild(g);
b.appendChild(c);
PC(this);
LC(this);
b.tabIndex=0
}
;
t.o=function()
{
JC.m.o.call(this);
this.Z(this.h())
}
;
t.z=function()
{
JC.m.z.call(this);
var b=this.g();
b.c(this.aB,"click",this.EO);
b.c(QC(this,this.h()),"key",this.FO)
}
;
t.Za=function()
{
JC.m.Za.call(this);
this.tl();
for(var b in this.dm)this.dm[b].F();
this.dm=
{

}

}
;
t.create=JC.prototype.n;

t.p=function()
{
JC.m.p.call(this);
this.ow=this.pw=this.Vn=this.nw=this.oj=this.mw=this.Cr=this.TI=this.aB=this.lf=k
}
;
t.EO=function(b)
{
if("TD"==b.target.tagName)
{
var c,d=-2,e=-2;
for(c=b.target;
c;
c=c.previousSibling,d++);
for(c=b.target.parentNode;
c;
c=c.previousSibling,e++);
this.setDate(this.Sl[e][d].clone())
}

}
;

t.FO=function(b)
{
var c,d;
switch(b.keyCode)
{
case 33:b.preventDefault();
c=-1;
break;
case 34:b.preventDefault();
c=1;
break;
case 37:b.preventDefault();
d=-1;
break;
case 39:b.preventDefault();
d=1;
break;
case 38:b.preventDefault();
d=-7;
break;
case 40:b.preventDefault();
d=7;
break;
case 36:b.preventDefault(),this.mI();
case 46:b.preventDefault(),this.kI();
default:return
}
this.$?(b=this.$.clone(),b.add(new ps(0,c,d))):(b=this.Ec.clone(),b.setDate(1));
this.setDate(b)
}
;

t.UU=function(b)
{
b.stopPropagation();
for(var b=[],c=0;
12>c;
c++)b.push(this.Kf.gn[c]);
RC(this,this.oj,b,this.RO,this.Kf.gn[this.Ec.getMonth()])
}
;
t.YU=function(b)
{
b.stopPropagation();
for(var b=[],c=this.Ec.getFullYear()-5,d=0;
11>d;
d++)b.push(String(c+d));
RC(this,this.Vn,b,this.xP,String(this.Ec.getFullYear()))
}
;
t.RO=function(b)
{
for(var c=-1;
b;
b=tc(b),c++);
this.Ec.setMonth(c);
LC(this);
this.oj.focus&&this.oj.focus()
}
;

t.xP=function(b)
{
3==b.firstChild.nodeType&&(this.Ec.setFullYear(Number(b.firstChild.nodeValue)),LC(this));
this.Vn.focus()
}
;

a.RC=function(b,c,d,e,g)
{
b.tl();
var h=b.G.createElement("div");
h.className=IC()+"-menu";
b.jm=k;
for(var l=b.G.createElement("ul"),m=0;
m<d.length;
m++)
{
var p=b.G.o("li",k,d[m]);
d[m]==g&&(b.jm=p);
l.appendChild(p)
}
h.appendChild(l);
h.style.left=c.offsetLeft+c.parentNode.offsetLeft+"px";
h.style.top=c.offsetTop+"px";
h.style.width=c.clientWidth+"px";
b.oj.parentNode.appendChild(h);
b.ka=h;
b.jm||(b.jm=l.firstChild);
b.jm.className=IC()+"-menu-selected";
b.Ty=e;
c=b.g();
c.c(b.ka,"click",b.LE);
c.c(QC(b,b.ka),"key",
b.ME);
c.c(b.G.wa(),"click",b.tl);
h.tabIndex=0;
h.focus()
}
;
t.LE=function(b)
{
b.stopPropagation();
this.tl();
this.Ty&&this.Ty(b.target)
}
;

t.ME=function(b)
{
b.stopPropagation();
var c,d=this.jm;
switch(b.keyCode)
{
case 35:b.preventDefault();
c=d.parentNode.lastChild;
break;
case 36:b.preventDefault();
c=d.parentNode.firstChild;
break;
case 38:b.preventDefault();
c=d.previousSibling;
break;
case 40:b.preventDefault();
c=d.nextSibling;
break;
case 13:case 9:case 0:b.preventDefault(),this.tl(),this.Ty(d)
}
c&&c!=d&&(d.className="",c.className=IC()+"-menu-selected",this.jm=c)
}
;

t.tl=function()
{
if(this.ka)
{
var b=this.g();
b.va(this.ka,"click",this.LE);
b.va(QC(this,this.ka),"key",this.ME);
b.va(this.G.wa(),"click",this.tl);
L(this.ka);
delete this.ka
}

}
;

a.NC=function(b,c,d,e,g)
{
var h=[IC()+"-btn"];
g&&h.push(g);
g=b.G.createElement("button");
g.className=h.join(" ");
g.appendChild(b.G.createTextNode(d));
c.appendChild(g);
b.g().c(g,"click",function(b)
{
b.preventDefault();
e.call(this,b)
}
);
return g
}
,a.LC=function(b)
{
if(b.h())
{
var c=b.Ec.clone();
c.setDate(1);
b.nw&&zc(b.nw,w("
{
$monthName
}
 
{
$yearNum
}
",
{
monthName:b.Kf.gn[c.getMonth()],yearNum:c.getFullYear()
}
));
b.oj&&zc(b.oj,b.Kf.gn[c.getMonth()]);
b.Vn&&zc(b.Vn,String(c.getFullYear()));
var d=((c.getDay()+6)%
7-c.Vg+7)%7,e=ej(c.getFullYear(),c.getMonth());
c.add(new ps("m",-1));
c.setDate(ej(c.getFullYear(),c.getMonth())-(d-1));
b.AA&&(!b.xN&&33>e+d)&&c.add(new ps("d",-7));
d=new ps("d",1);
b.Sl=[];
for(e=0;
6>e;
e++)
{
b.Sl[e]=[];
for(var g=0;
7>g;
g++)b.Sl[e][g]=c.clone(),c.add(d)
}
if(b.h())for(var c=b.Ec.getMonth(),g=new gj,d=g.getFullYear(),e=g.getMonth(),g=g.getDate(),h=0;
6>h;
h++)
{
if(b.GA)
{
var l=b.lf[h+1][0],m;
m=b.Sl[h][0];
var p=m.getDate(),p=new Date(m.getFullYear(),m.getMonth(),p),r=m.Vg||0;
m=p.valueOf()+864E5*
(((m.El||3)-r+7)%7-((p.getDay()+6)%7-r+7)%7);
m=Math.floor(Math.round((m-(new Date((new Date(m)).getFullYear(),0,1)).valueOf())/864E5)/7)+1;
zc(l,m);
D.set(b.lf[h+1][0],IC()+"-week")
}
else zc(b.lf[h+1][0],""),D.set(b.lf[h+1][0],"");
for(l=0;
7>l;
l++)
{
m=b.Sl[h][l];
p=b.lf[h+1][l+1];
p.id||(p.id=ih(b.bM));
Oc(p,"gridcell");
r=[IC()+"-date"];
if(b.WU||m.getMonth()==c)
{
m.getMonth()!=c&&r.push(IC()+"-other-month");
var x=(l+b.Ec.Vg+7)%7;
b.tu[x]&&r.push(b.tu[x]);
m.getDate()==g&&(m.getMonth()==e&&m.getFullYear()==d)&&
r.push(IC()+"-today");
b.$&&(m.getDate()==b.$.getDate()&&m.getMonth()==b.$.getMonth()&&m.getFullYear()==b.$.getFullYear())&&(r.push(IC()+"-selected"),Pc(b.aB,"activedescendant",p.id));
b.GD&&(x=b.GD(m))&&r.push(x);
zc(p,m.getDate())
}
else zc(p,"");
D.set(p,r.join(" "))
}
4<=h&&R(b.lf[h+1][0].parentNode,b.Sl[h][0].getMonth()==c||b.AA)
}

}

}
,a.PC=function(b)
{
if(b.h())
{
if(b.DI)for(var c=0;
7>c;
c++)zc(b.lf[0][c+1],b.BJ[((c+b.Ec.Vg+7)%7+1)%7]);
R(b.lf[0][0].parentNode,b.DI)
}

}
,a.QC=function(b,c)
{
var d=ua(c);
d in b.dm||
(b.dm[d]=new Vl(c));
return b.dm[d]
}
,a.MC=function(b,c,d)
{
id.call(this,b,c);
this.VM=d
}
;
y(MC,id);
a.SC=function(b)
{
T.call(this);
E.extend(this.C=
{

}
,this.Q,b||
{

}
);
this.Zf=new Hs
}
;
y(SC,T);
a.TC=void 0;
a.UC=document.createElement("input");
try
{
UC.type="datetime",TC="datetime"===UC.type
}
catch(VC)
{
TC=n
}
t=SC.prototype;
t.Q=
{
pR:5,hW:j,jW:n
}
;
t.Te=function()
{
if(this.lt)
{
var b;
(b=wt(this.Qn.value))?(b.setHours(this.js.value),b.setMinutes(this.Xs.value)):b=k;
this.Zf=b;
WC(this)
}
this.dispatchEvent("change")
}
;
a.WC=function(b)
{
b.e.value=b.Zf?Is(b.Zf):"null"
}
;
t.rB='<div class="ui-datetime-picker"><input id="date" class="date text" type="text"><select class="hour"></select><span class="colon">:</span><select class="minute"></select></div>';

t.O=function(b,c,d)
{
return O.toArray(O.zm(b,c,d))
}
;
t.qv=function()
{
this.g().c(this.rl,"change",function(b)
{
if(b=b.VM)this.Qn.value=b.Gk(j),this.Te(),R(this.rl.h(),n)
}
).c(this.Qn,"focus",function()
{
R(this.rl.h(),j)
}
).c(this.Qn,"blur",function()
{
var b=this;
setTimeout(function()
{
b.rl.h().contains(document.activeElement)||R(b.rl.h(),n)
}
)
}
).c(this.js,"change",function()
{
this.Te()
}
).c(this.Xs,"change",function()
{
this.Te()
}
)
}
;
t.p=function()
{
L(this.lt);
R(this.e);
SC.m.p.call(this)
}
;

t.Z=function(b)
{
SC.m.Z.call(this,b);
if(!this.C.hW||!TC)
{
R(b,n);
var c=this.lt=hc(this.rB),d=this.G.bi;
this.Qn=d("date",c);
this.js=d("hour",c);
this.Xs=d("minute",c);
c=this.lt;
dj=xt;
d=this.rl=new JC;
d.setDate(this.Zf);
d.Fq=n;
d.ow&&KC(d);
d.EA=n;
d.pw&&KC(d);
d.AA=n;
LC(d);
d.BJ=d.Kf.TB;
PC(d);
d.FI=j;
OC(d);
LC(d);
d.Y(c);
R(this.rl.h(),n);
var e=this.js;
z.forEach(this.O(0,24,i),function(b)
{
b=this.G.o("option",
{
value:b
}
,String(b));
e.appendChild(b)
}
,this);
var g=this.Xs;
z.forEach(this.O(0,60,this.C.pR),function(b)
{
b=
this.G.o("option",
{
value:b
}
,bb(b));
g.appendChild(b)
}
,this);
this.qv();
c=b.value;
this.Zf=oa(c)?wt(c):new Hs(c||za());
this.C.jW||this.Zf.setSeconds(0);
this.Zf&&(this.js.value=this.Zf.getHours(),this.Xs.value=this.Zf.getMinutes(),c=Is(this.Zf),this.Qn.value=c.slice(0,10));
WC(this);
this.dispatchEvent("change");
lc(this.lt,b)
}

}
;
$.validator.addMethod("datetime",function(b,c)
{
return this.optional(c)||moment(b,"YYYY-MM-DDTHH:mm:ss").isValid()
}
,"时间格式不正确");
$.validator.addMethod("dateGreaterThan",function(b,c,d)
{
return new Date(b)>new Date($(d).val())
}
,"时间范围不正确");
a.XC=function(b,c)
{
T.call(this);
this.me=b||
{

}
;
this.Vy=c||
{

}
;
this.Xm=this.Vy.topics||[];
this.ZL=this.Vy.canAdminister;
this.GT=this.Vy.questions||[];
this.nh="roundtable"
}
;
y(XC,T);
t=XC.prototype;

t.v=function()
{
kl.H(this);
this.n(document.body);
this.yo();
var b=v(function()
{
var b=z.toArray(arguments),c=b.shift(),d=b.shift(),d=$(d);
b.unshift(d);
d.length&&c.apply(this,b)
}
,this);
b(this.aQ,"#js-rt-pending-questions");
b(this.bQ,"#js-roundtable-search-box");
b(this.xF,"#js-roundtable-followers > .zh-general-list");
b(this.xF,"#js-rt-question-paged > .zh-general-list",this.yF);
var c=this;
$("#js-personal-answers .zm-item, #js-hot-answers .zm-item").each(function()
{
var b=new zx;
c.H(b);
b.n(this);
c.vF(this)
}
);

if(b=$("#js-hot-answers-paged > .zh-general-list")[0])
{
var d=new Wt;
this.H(d);
d.Oa("nodeSource");
d.Oa("childConstructor",
{
Sg:zx
}
);
Pt(d,this.vF,this);
d.n(b)
}
b=$("#js-rt-webshare-links");
b.data();
var e=this.me;
$("a",b).click(function()
{
var b=Cu.D();
b.wk("分享活动","roundtable",e.url_token,
{
roundtable_id:e.id
}
);
b.show();
Du(b,"tb-webshare-"+this.name);
Y.U(
{
type:"ga_click_share_roundtable_box",target:this,data:
{
type:this.name
}

}
)
}
);
b=$(".rt-comment-box");
b.length&&(d=new Qw(this.me.id,"roundtable"),this.H(d),
this.g().c(this,"click!",function(b)
{
"comment"===b.namespace&&b.Cc.fill("label","roundtable")
}
),d.n(b[0]));
b=$("#js-roundtable-menu-button");
if(b.length)
{
var g=this.me.url_token,d=new ou;
d.n(b.next(".goog-menu")[0]);
this.g().c(d,"action",function(b)
{
b=$(b.target.h());
if("addHotAnswer"===b.data("action"))var b=b.text(),c=Ci(b,'<input class="text" name="url" placeholder="请输入回答地址" style="width:90%">',function(b)
{
if(b)
{
var b=$("input",c.h()).val(),d=b.match(we),e=d[1],h=d[2],l=d[3],d=d[4],G="";
e&&(G+=
e+":");
l&&(G+="//",h&&(G+=h+"@"),G+=l,d&&(G+=":"+d));
if(!G)return n;
$.post("/roundtable/"+g,
{
action:"add_hot_answer",answer_url:b
}
).done(function()
{
U("添加成功")
}
)
}

}
)
}
);
d=new Ou("Settings",d);
d.rp=j;
Qu(d);
d.n(b[0])
}
this.Lj();
var h=this;
$("#js-questions-home .roundtable-question-item").each(function()
{
h.yF(this)
}
)
}
;

t.vF=function(b)
{
var c=this.me.url_token,d=$(b);
if(this.ZL)
{
var e=$(".answer-actions",d),g=$('<span class="zg-bull zu-autohide">•</span><span>\n</span>'),h=$('<a href="javascript:;
" class="zu-autohide meta-item">移除</a>');
e.append(g).append(h);
h.on("click",function()
{
Ci("移除回答","你确认要从活动中移除这个回答？",function(e)
{
e&&(e=$(".zm-item-answer",b).data("atoken"),$.post("/roundtable/"+c,
{
action:"remove_hot_answer",url_token:e
}
),d.fadeOut(function()
{
d.remove()
}
))
}
)
}
)
}

}
;

t.yF=function(b)
{
var c=this.me.url_token;
$(b).on("click",".remove-button",function(b)
{
Ci("移除问题","你确认要从活动中移除这个问题？",function(e)
{
if(e)
{
var g=$(b.delegateTarget),e=g.data("token");
$.post("/roundtable/"+c,
{
action:"remove_question",url_token:e
}
);
g.fadeOut(function()
{
g.remove()
}
)
}

}
)
}
)
}
;

t.yo=function()
{
this.g().c(this,"click!",function(b)
{
"comment"===b.namespace&&b.Cc.fill("category",this.nh).fill("label","roundtable_answer")
}
);
var b=this.me&&this.me.url_token;
location.pathname==="/roundtable/"+b&&W(/expand=1/.test(location.search)?"notification":"navigation","visit_roundtable","roundtable_home");
$(".roundtable-header .follow-button").on("click",function()
{
W("roundtable","click_follow_roundtable","roundtable_home")
}
);
$(".roundtable-search-box .add-button").on("click",function()
{
W("roundtable",
"click_apply_question","roundtable_add_quesiton")
}
);
$('a[data-follow="m:link"]').on("click",function()
{
W("roundtable","click_follow_people","roundtable_sidebar_follow")
}
);
$('a[data-follow="t:link"]').on("click",function()
{
W("roundtable","click_follow_topic","roundtable_sidebar_follow")
}
);
b&&Fu("roundtable",b,"read")
}
;

t.bQ=function(b)
{
function c(b)
{
return
{
none:'<i class="plus">+</i>',pending:"已申请",approved:"已添加"
}
[d(b)]
}
function d(b)
{
var c=z.find(m,function(c)
{
return c[0]===b
}
);
return c?c[1]?"approved":"pending":"none"
}
var e=this,g=$(".search-input",b).placeholder(),h=g[0],l=this.me.url_token,m=this.GT,p=this.Xm,r=Bk('<span class="title"><%=question.title%></span><span class="count"><%=question.answer_count%> 个回答</span><span class="status"><%= statusLabel(question.url_token) %></span>');
(new Xo(h,
{
source:"/question/autocomplete",
nk:h.offsetParent,cd:function(b,d,e)
{
e.innerHTML=r(
{
question:b.data,statusLabel:c
}
)
}

}
)).zi=function()
{
var b=this.bb[Ql(this,this.Mc)].url_token;
"none"===d(b)&&(mt(l,b),m.push([b,n]),$(this.M.Ag[this.M.Fj]).find(".status").text("已申请"),W("roundtable","click_apply_question","roundtable_searchbox"))
}
;
g.on("keydown",function()
{
return e.dispatchEvent("requestLogin")
}
);
$(".add-button",b).click(function()
{
var b=g.val();
if(e.dispatchEvent("requestLogin"))
{
var c=qr.D(),d=
{
Xm:z.map(p,function(b)
{
return[b.name,
b.url_token,"",b.id]
}
),cp:function(b)
{
mt(l,b.Wb).always(function()
{
location.href=b.url
}
)
}

}
;
c.show(d);
tr(c,b)
}

}
)
}
;

t.Lj=function()
{
var b=$("#js-roundtable-form");
if(b.length)
{
var c=this,d=this.g();
$("input[placeholder]").placeholder();
$('input[type="datetime"]',b).each(function()
{
var b=$(this),c=new SC;
c.n(this);
d.c(c,"change",function()
{
b.valid()
}
)
}
);
$("input[data-suggest]",b).each(function()
{
var b=$(this),c=b.data("suggest"),e=b.closest(".controls"),g=e.find('input[type="hidden"]'),e=e.find("ul").get(0),h=b.data("maxTags"),l=new yC(this,
{
pJ:
{
topic:"/topic/%s",user:"/people/%s"
}
[c],source:
{
topic:"/topic/autocomplete",
user:"/people/autocomplete"
}
[c],Xq:j,Jb:e
}
);
d.c(l,"change",function()
{
var c=l.lx();
h&&b.prop("disabled",c.length>=h);
g.val(c.join(","))
}
);
c=l.lx();
g.val(c.join(","))
}
);
var e=$('input[name="logo"]',b),g=$("#js-avatar-container"),h=$("img.avatar",g),g=$(".upload-button",g),l=new ly(4,this.me&&this.me.id,"xl");
l.n(g[0]);
d.c(l,"success",function(b)
{
h.attr("src",b.src);
e.val(l.getData())
}
);
b.validate(
{
ignore:[],submitHandler:function()
{
var d=$("#url_token").val(),e=c.me&&c.me.url_token;
$.post(b.attr("action"),
b.serialize(),function(b)
{
b.success?(U(e?"活动修改成功":"活动创建成功"),setTimeout(function()
{
location.href="/roundtable/"+d
}
,3E3)):U(b.message)
}
)
}
,rules:
{
url_token:
{
pattern:/^[-A-Za-z0-9]+$/
}
,beginTime:"datetime",endTime:
{
datetime:j,dateGreaterThan:"#beginTime"
}

}
,messages:
{
url_token:
{
pattern:"仅限数字、字母和短横线"
}
,name:
{
maxlength:"活动名称不能超过 30 个字"
}
,endTime:
{
dateGreaterThan:"结束时间必须大于开始时间"
}

}

}
)
}

}
;

t.aQ=function(b)
{
function c()
{
d().length||($(".ignore-button").remove(),location.reload())
}
function d()
{
return $(".roundtable-question-item",b)
}
var e=d(),g=this.me.url_token;
e.on("click",".approve-button",function(b)
{
var d=$(b.delegateTarget),b=$(b.target),e=d.data("token");
$.post("/roundtable/"+g,
{
action:"approve_question",url_token:e
}
);
b.text("添加成功");
d.fadeOut(400,function()
{
d.remove();
c()
}
)
}
);
b.on("click",".ignore-button",function()
{
var b=d().map(function()
{
return $(this).data("token")
}
).get();

$.post("/roundtable/"+g,
{
action:"ignore_questions",url_tokens:b.join(",")
}
);
e.fadeOut(400,function()
{
$(this).remove();
c()
}
)
}
)
}
;
t.xF=function(b,c)
{
var d=new Wt;
this.H(d);
d.Oa("nodeSource");
d.n(b[0]);
c&&Pt(d,c,this)
}
;
Ca("ZH.entryQuestionLog",function()
{
(new uC).v()
}
);
Ca("ZH.entryQuestionFollowersPage",function()
{
(new wC).v()
}
);
Ca("ZH.entrySQ",function()
{
(new cC).v()
}
);
Ca("ZH.entrySA",function()
{
(new mC).v()
}
);
Ca("ZH.entryL",function()
{
(new xz).v()
}
);
Ca("ZH.entryT",function()
{
(new tz).v()
}
);
Ca("ZH.entryTS",function()
{
(new tC).v()
}
);
Ca("ZH.entryP",function()
{
(new Jy).v()
}
);
Ca("ZH.entryM",function()
{
(new fz).v()
}
);
Ca("ZH.entryPM",function()
{
(new cu).v()
}
);
Ca("ZH.entryPMDetail",function()
{
(new du).v()
}
);

Ca("ZH.entryHelp",function()
{
(new Ft).v()
}
);
Ca("ZH.entryInvite",function()
{
(new xC).v()
}
);
Ca("ZH.entryQueue",function()
{
(new cz).v()
}
);
Ca("ZH.entryTest",ba());
Ca("ZH.entrySettings",function()
{
(new iz).v()
}
);
Ca("ZH.entryTopicFeed",function()
{
(new oC).v()
}
);
Ca("ZH.entryTest",function()
{
(new ft.PY).v()
}
);
Ca("ZH.entryRQ3",function()
{
(new zC).v()
}
);
Ca("ZH.entryTerms",function()
{
(new AC).v()
}
);
Ca("ZH.entryHome",function()
{
(new Oz).v()
}
);
Ca("ZH.entryQuestionFollowing",function()
{
(new BC).v()
}
);

Ca("ZH.entryDraft",function()
{
(new DC).v()
}
);
Ca("ZH.entryExplore",function()
{
(new FC).v()
}
);
Ca("ZH.entryLookup",function()
{
(new HC).v()
}
);
Ca("ZH.entryCC",function()
{
$(function()
{
$("#js-apply-button").click(function()
{
if(S.Ha())
{
$.post("/classical-chinese");
var b=$(this),c=b.data("num");
b.text("您已申請使用").addClass("disabled");
$(".apply-num").text("已有 "+(c+1)+" 人申請")
}
else vk.D().w(j)
}
)
}
)
}
);
Ca("ZH.entryRT",function(b,c)
{
(new XC(b,c)).v()
}
);
If("app");

}

}
)(zhihu);

//@ sourceURL=http://static.zhihu.com/static/compiled/app.js