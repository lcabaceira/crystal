!function(t){var e,r,i="0.4.2",n="hasOwnProperty",a=/[\.\/]/,s="*",o=function(){},l=function(t,e){return t-e
},h={n:{}},u=function(t,i){t=String(t);var n,a=r,s=Array.prototype.slice.call(arguments,2),o=u.listeners(t),h=0,c=[],f={},p=[],d=e;
e=t,r=0;for(var g=0,v=o.length;v>g;g++)"zIndex"in o[g]&&(c.push(o[g].zIndex),o[g].zIndex<0&&(f[o[g].zIndex]=o[g]));
for(c.sort(l);c[h]<0;)if(n=f[c[h++]],p.push(n.apply(i,s)),r)return r=a,p;for(g=0;v>g;g++)if(n=o[g],"zIndex"in n)if(n.zIndex==c[h]){if(p.push(n.apply(i,s)),r)break;
do if(h++,n=f[c[h]],n&&p.push(n.apply(i,s)),r)break;while(n)}else f[n.zIndex]=n;else if(p.push(n.apply(i,s)),r)break;
return r=a,e=d,p.length?p:null};u._events=h,u.listeners=function(t){var e,r,i,n,o,l,u,c,f=t.split(a),p=h,d=[p],g=[];
for(n=0,o=f.length;o>n;n++){for(c=[],l=0,u=d.length;u>l;l++)for(p=d[l].n,r=[p[f[n]],p[s]],i=2;i--;)e=r[i],e&&(c.push(e),g=g.concat(e.f||[]));
d=c}return g},u.on=function(t,e){if(t=String(t),"function"!=typeof e)return function(){};
for(var r=t.split(a),i=h,n=0,s=r.length;s>n;n++)i=i.n,i=i.hasOwnProperty(r[n])&&i[r[n]]||(i[r[n]]={n:{}});
for(i.f=i.f||[],n=0,s=i.f.length;s>n;n++)if(i.f[n]==e)return o;return i.f.push(e),function(t){+t==+t&&(e.zIndex=+t)
}},u.f=function(t){var e=[].slice.call(arguments,1);return function(){u.apply(null,[t,null].concat(e).concat([].slice.call(arguments,0)))
}},u.stop=function(){r=1},u.nt=function(t){return t?new RegExp("(?:\\.|\\/|^)"+t+"(?:\\.|\\/|$)").test(e):e
},u.nts=function(){return e.split(a)},u.off=u.unbind=function(t,e){if(!t)return u._events=h={n:{}},void 0;
var r,i,o,l,c,f,p,d=t.split(a),g=[h];for(l=0,c=d.length;c>l;l++)for(f=0;f<g.length;f+=o.length-2){if(o=[f,1],r=g[f].n,d[l]!=s)r[d[l]]&&o.push(r[d[l]]);
else for(i in r)r[n](i)&&o.push(r[i]);g.splice.apply(g,o)}for(l=0,c=g.length;c>l;l++)for(r=g[l];r.n;){if(e){if(r.f){for(f=0,p=r.f.length;p>f;f++)if(r.f[f]==e){r.f.splice(f,1);
break}!r.f.length&&delete r.f}for(i in r.n)if(r.n[n](i)&&r.n[i].f){var v=r.n[i].f;
for(f=0,p=v.length;p>f;f++)if(v[f]==e){v.splice(f,1);break}!v.length&&delete r.n[i].f
}}else{delete r.f;for(i in r.n)r.n[n](i)&&r.n[i].f&&delete r.n[i].f}r=r.n}},u.once=function(t,e){var r=function(){return u.unbind(t,r),e.apply(this,arguments)
};return u.on(t,r)},u.version=i,u.toString=function(){return"You are running Eve "+i
},"undefined"!=typeof module&&module.exports?module.exports=u:"undefined"!=typeof define?define("eve",[],function(){return u
}):t.eve=u}(window||this),function(t,e){"function"==typeof define&&define.amd?define("cdf/lib/raphael",["eve"],function(r){return e(t,r)
}):e(t,t.eve)}(this,function(t,e){function r(t){if(r.is(t,"function"))return b?t():e.on("raphael.DOMload",t);
if(r.is(t,H))return r._engine.create[N](r,t.splice(0,3+r.is(t[0],W))).add(t);var i=Array.prototype.slice.call(arguments,0);
if(r.is(i[i.length-1],"function")){var n=i.pop();return b?n.call(r._engine.create[N](r,i)):e.on("raphael.DOMload",function(){n.call(r._engine.create[N](r,i))
})}return r._engine.create[N](r,arguments)}function i(t){if("function"==typeof t||Object(t)!==t)return t;
var e=new t.constructor;for(var r in t)t[B](r)&&(e[r]=i(t[r]));return e}function n(t,e){for(var r=0,i=t.length;i>r;r++)if(t[r]===e)return t.push(t.splice(r,1)[0])
}function a(t,e,r){function i(){var a=Array.prototype.slice.call(arguments,0),s=a.join("␀"),o=i.cache=i.cache||{},l=i.count=i.count||[];
return o[B](s)?(n(l,s),r?r(o[s]):o[s]):(l.length>=1e3&&delete o[l.shift()],l.push(s),o[s]=t[N](e,a),r?r(o[s]):o[s])
}return i}function s(){return this.hex}function o(t,e){for(var r=[],i=0,n=t.length;n-2*!e>i;i+=2){var a=[{x:+t[i-2],y:+t[i-1]},{x:+t[i],y:+t[i+1]},{x:+t[i+2],y:+t[i+3]},{x:+t[i+4],y:+t[i+5]}];
e?i?n-4==i?a[3]={x:+t[0],y:+t[1]}:n-2==i&&(a[2]={x:+t[0],y:+t[1]},a[3]={x:+t[2],y:+t[3]}):a[0]={x:+t[n-2],y:+t[n-1]}:n-4==i?a[3]=a[2]:i||(a[0]={x:+t[i],y:+t[i+1]}),r.push(["C",(-a[0].x+6*a[1].x+a[2].x)/6,(-a[0].y+6*a[1].y+a[2].y)/6,(a[1].x+6*a[2].x-a[3].x)/6,(a[1].y+6*a[2].y-a[3].y)/6,a[2].x,a[2].y])
}return r}function l(t,e,r,i,n){var a=-3*e+9*r-9*i+3*n,s=t*a+6*e-12*r+6*i;return t*s-3*e+3*r
}function h(t,e,r,i,n,a,s,o,h){null==h&&(h=1),h=h>1?1:0>h?0:h;for(var u=h/2,c=12,f=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],p=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],d=0,g=0;c>g;g++){var v=u*f[g]+u,x=l(v,t,r,n,s),m=l(v,e,i,a,o),y=x*x+m*m;
d+=p[g]*q.sqrt(y)}return u*d}function u(t,e,r,i,n,a,s,o,l){if(!(0>l||h(t,e,r,i,n,a,s,o)<l)){var u,c=1,f=c/2,p=c-f,d=.01;
for(u=h(t,e,r,i,n,a,s,o,p);O(u-l)>d;)f/=2,p+=(l>u?1:-1)*f,u=h(t,e,r,i,n,a,s,o,p);
return p}}function c(t,e,r,i,n,a,s,o){if(!(D(t,r)<V(n,s)||V(t,r)>D(n,s)||D(e,i)<V(a,o)||V(e,i)>D(a,o))){var l=(t*i-e*r)*(n-s)-(t-r)*(n*o-a*s),h=(t*i-e*r)*(a-o)-(e-i)*(n*o-a*s),u=(t-r)*(a-o)-(e-i)*(n-s);
if(u){var c=l/u,f=h/u,p=+c.toFixed(2),d=+f.toFixed(2);if(!(p<+V(t,r).toFixed(2)||p>+D(t,r).toFixed(2)||p<+V(n,s).toFixed(2)||p>+D(n,s).toFixed(2)||d<+V(e,i).toFixed(2)||d>+D(e,i).toFixed(2)||d<+V(a,o).toFixed(2)||d>+D(a,o).toFixed(2)))return{x:c,y:f}
}}}function f(t,e,i){var n=r.bezierBBox(t),a=r.bezierBBox(e);if(!r.isBBoxIntersect(n,a))return i?0:[];
for(var s=h.apply(0,t),o=h.apply(0,e),l=D(~~(s/5),1),u=D(~~(o/5),1),f=[],p=[],d={},g=i?0:[],v=0;l+1>v;v++){var x=r.findDotsAtSegment.apply(r,t.concat(v/l));
f.push({x:x.x,y:x.y,t:v/l})}for(v=0;u+1>v;v++)x=r.findDotsAtSegment.apply(r,e.concat(v/u)),p.push({x:x.x,y:x.y,t:v/u});
for(v=0;l>v;v++)for(var m=0;u>m;m++){var y=f[v],b=f[v+1],_=p[m],w=p[m+1],k=O(b.x-y.x)<.001?"y":"x",C=O(w.x-_.x)<.001?"y":"x",B=c(y.x,y.y,b.x,b.y,_.x,_.y,w.x,w.y);
if(B){if(d[B.x.toFixed(4)]==B.y.toFixed(4))continue;d[B.x.toFixed(4)]=B.y.toFixed(4);
var S=y.t+O((B[k]-y[k])/(b[k]-y[k]))*(b.t-y.t),T=_.t+O((B[C]-_[C])/(w[C]-_[C]))*(w.t-_.t);
S>=0&&1.001>=S&&T>=0&&1.001>=T&&(i?g++:g.push({x:B.x,y:B.y,t1:V(S,1),t2:V(T,1)}))
}}return g}function p(t,e,i){t=r._path2curve(t),e=r._path2curve(e);for(var n,a,s,o,l,h,u,c,p,d,g=i?0:[],v=0,x=t.length;x>v;v++){var m=t[v];
if("M"==m[0])n=l=m[1],a=h=m[2];else{"C"==m[0]?(p=[n,a].concat(m.slice(1)),n=p[6],a=p[7]):(p=[n,a,n,a,l,h,l,h],n=l,a=h);
for(var y=0,b=e.length;b>y;y++){var _=e[y];if("M"==_[0])s=u=_[1],o=c=_[2];else{"C"==_[0]?(d=[s,o].concat(_.slice(1)),s=d[6],o=d[7]):(d=[s,o,s,o,u,c,u,c],s=u,o=c);
var w=f(p,d,i);if(i)g+=w;else{for(var k=0,C=w.length;C>k;k++)w[k].segment1=v,w[k].segment2=y,w[k].bez1=p,w[k].bez2=d;
g=g.concat(w)}}}}}return g}function d(t,e,r,i,n,a){null!=t?(this.a=+t,this.b=+e,this.c=+r,this.d=+i,this.e=+n,this.f=+a):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)
}function g(){return this.x+P+this.y+P+this.width+" × "+this.height}function v(t,e,r,i,n,a){function s(t){return((c*t+u)*t+h)*t
}function o(t,e){var r=l(t,e);return((d*r+p)*r+f)*r}function l(t,e){var r,i,n,a,o,l;
for(n=t,l=0;8>l;l++){if(a=s(n)-t,O(a)<e)return n;if(o=(3*c*n+2*u)*n+h,O(o)<1e-6)break;
n-=a/o}if(r=0,i=1,n=t,r>n)return r;if(n>i)return i;for(;i>r;){if(a=s(n),O(a-t)<e)return n;
t>a?r=n:i=n,n=(i-r)/2+r}return n}var h=3*e,u=3*(i-e)-h,c=1-h-u,f=3*r,p=3*(n-r)-f,d=1-f-p;
return o(t,1/(200*a))}function x(t,e){var r=[],i={};if(this.ms=e,this.times=1,t){for(var n in t)t[B](n)&&(i[K(n)]=t[n],r.push(K(n)));
r.sort(ce)}this.anim=i,this.top=r[r.length-1],this.percents=r}function m(t,i,n,a,s,o){n=K(n);
var l,h,u,c,f,p,g=t.ms,x={},m={},y={};if(a)for(_=0,k=lr.length;k>_;_++){var b=lr[_];
if(b.el.id==i.id&&b.anim==t){b.percent!=n?(lr.splice(_,1),u=1):h=b,i.attr(b.totalOrigin);
break}}else a=+m;for(var _=0,k=t.percents.length;k>_;_++){if(t.percents[_]==n||t.percents[_]>a*t.top){n=t.percents[_],f=t.percents[_-1]||0,g=g/t.top*(n-f),c=t.percents[_+1],l=t.anim[n];
break}a&&i.attr(t.anim[t.percents[_]])}if(l){if(h)h.initstatus=a,h.start=new Date-h.ms*a;
else{for(var C in l)if(l[B](C)&&(ie[B](C)||i.paper.customAttributes[B](C)))switch(x[C]=i.attr(C),null==x[C]&&(x[C]=re[C]),m[C]=l[C],ie[C]){case W:y[C]=(m[C]-x[C])/g;
break;case"colour":x[C]=r.getRGB(x[C]);var S=r.getRGB(m[C]);y[C]={r:(S.r-x[C].r)/g,g:(S.g-x[C].g)/g,b:(S.b-x[C].b)/g};
break;case"path":var T=Re(x[C],m[C]),A=T[1];for(x[C]=T[0],y[C]=[],_=0,k=x[C].length;k>_;_++){y[C][_]=[0];
for(var N=1,L=x[C][_].length;L>N;N++)y[C][_][N]=(A[_][N]-x[C][_][N])/g}break;case"transform":var M=i._,P=Ve(M[C],m[C]);
if(P)for(x[C]=P.from,m[C]=P.to,y[C]=[],y[C].real=!0,_=0,k=x[C].length;k>_;_++)for(y[C][_]=[x[C][_][0]],N=1,L=x[C][_].length;L>N;N++)y[C][_][N]=(m[C][_][N]-x[C][_][N])/g;
else{var R=i.matrix||new d,I={_:{transform:M.transform},getBBox:function(){return i.getBBox(1)
}};x[C]=[R.a,R.b,R.c,R.d,R.e,R.f],qe(I,m[C]),m[C]=I._.transform,y[C]=[(I.matrix.a-R.a)/g,(I.matrix.b-R.b)/g,(I.matrix.c-R.c)/g,(I.matrix.d-R.d)/g,(I.matrix.e-R.e)/g,(I.matrix.f-R.f)/g]
}break;case"csv":var j=z(l[C])[F](w),q=z(x[C])[F](w);if("clip-rect"==C)for(x[C]=q,y[C]=[],_=q.length;_--;)y[C][_]=(j[_]-x[C][_])/g;
m[C]=j;break;default:for(j=[][E](l[C]),q=[][E](x[C]),y[C]=[],_=i.paper.customAttributes[C].length;_--;)y[C][_]=((j[_]||0)-(q[_]||0))/g
}var D=l.easing,V=r.easing_formulas[D];if(!V)if(V=z(D).match(Q),V&&5==V.length){var O=V;
V=function(t){return v(t,+O[1],+O[2],+O[3],+O[4],g)}}else V=pe;if(p=l.start||t.start||+new Date,b={anim:t,percent:n,timestamp:p,start:p+(t.del||0),status:0,initstatus:a||0,stop:!1,ms:g,easing:V,from:x,diff:y,to:m,el:i,callback:l.callback,prev:f,next:c,repeat:o||t.times,origin:i.attr(),totalOrigin:s},lr.push(b),a&&!h&&!u&&(b.stop=!0,b.start=new Date-g*a,1==lr.length))return ur();
u&&(b.start=new Date-b.ms*a),1==lr.length&&hr(ur)}e("raphael.anim.start."+i.id,i,t)
}}function y(t){for(var e=0;e<lr.length;e++)lr[e].el.paper==t&&lr.splice(e--,1)}r.version="2.1.2",r.eve=e;
var b,_,w=/[, ]+/,k={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},C=/\{(\d+)\}/g,B="hasOwnProperty",S={doc:document,win:t},T={was:Object.prototype[B].call(S.win,"Raphael"),is:S.win.Raphael},A=function(){this.ca=this.customAttributes={}
},N="apply",E="concat",L="ontouchstart"in S.win||S.win.DocumentTouch&&S.doc instanceof DocumentTouch,M="",P=" ",z=String,F="split",R="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[F](P),I={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},j=z.prototype.toLowerCase,q=Math,D=q.max,V=q.min,O=q.abs,Y=q.pow,G=q.PI,W="number",X="string",H="array",U=Object.prototype.toString,$=(r._ISURL=/^url\(['"]?([^\)]+?)['"]?\)$/i,/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),Z={NaN:1,Infinity:1,"-Infinity":1},Q=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,J=q.round,K=parseFloat,te=parseInt,ee=z.prototype.toUpperCase,re=r._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0},ie=r._availableAnimAttrs={blur:W,"clip-rect":"csv",cx:W,cy:W,fill:"colour","fill-opacity":W,"font-size":W,height:W,opacity:W,path:"path",r:W,rx:W,ry:W,stroke:"colour","stroke-opacity":W,"stroke-width":W,transform:"transform",width:W,x:W,y:W},ne=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,ae={hs:1,rg:1},se=/,?([achlmqrstvxz]),?/gi,oe=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,le=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,he=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,ue=(r._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,{}),ce=function(t,e){return K(t)-K(e)
},fe=function(){},pe=function(t){return t},de=r._rectPath=function(t,e,r,i,n){return n?[["M",t+n,e],["l",r-2*n,0],["a",n,n,0,0,1,n,n],["l",0,i-2*n],["a",n,n,0,0,1,-n,n],["l",2*n-r,0],["a",n,n,0,0,1,-n,-n],["l",0,2*n-i],["a",n,n,0,0,1,n,-n],["z"]]:[["M",t,e],["l",r,0],["l",0,i],["l",-r,0],["z"]]
},ge=function(t,e,r,i){return null==i&&(i=r),[["M",t,e],["m",0,-i],["a",r,i,0,1,1,0,2*i],["a",r,i,0,1,1,0,-2*i],["z"]]
},ve=r._getPath={path:function(t){return t.attr("path")},circle:function(t){var e=t.attrs;
return ge(e.cx,e.cy,e.r)},ellipse:function(t){var e=t.attrs;return ge(e.cx,e.cy,e.rx,e.ry)
},rect:function(t){var e=t.attrs;return de(e.x,e.y,e.width,e.height,e.r)},image:function(t){var e=t.attrs;
return de(e.x,e.y,e.width,e.height)},text:function(t){var e=t._getBBox();return de(e.x,e.y,e.width,e.height)
},set:function(t){var e=t._getBBox();return de(e.x,e.y,e.width,e.height)}},xe=r.mapPath=function(t,e){if(!e)return t;
var r,i,n,a,s,o,l;for(t=Re(t),n=0,s=t.length;s>n;n++)for(l=t[n],a=1,o=l.length;o>a;a+=2)r=e.x(l[a],l[a+1]),i=e.y(l[a],l[a+1]),l[a]=r,l[a+1]=i;
return t};if(r._g=S,r.type=S.win.SVGAngle||S.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML","VML"==r.type){var me,ye=S.doc.createElement("div");
if(ye.innerHTML='<v:shape adj="1"/>',me=ye.firstChild,me.style.behavior="url(#default#VML)",!me||"object"!=typeof me.adj)return r.type=M;
ye=null}r.svg=!(r.vml="VML"==r.type),r._Paper=A,r.fn=_=A.prototype=r.prototype,r._id=0,r._oid=0,r.is=function(t,e){return e=j.call(e),"finite"==e?!Z[B](+t):"array"==e?t instanceof Array:"null"==e&&null===t||e==typeof t&&null!==t||"object"==e&&t===Object(t)||"array"==e&&Array.isArray&&Array.isArray(t)||U.call(t).slice(8,-1).toLowerCase()==e
},r.angle=function(t,e,i,n,a,s){if(null==a){var o=t-i,l=e-n;return o||l?(180+180*q.atan2(-l,-o)/G+360)%360:0
}return r.angle(t,e,a,s)-r.angle(i,n,a,s)},r.rad=function(t){return t%360*G/180},r.deg=function(t){return 180*t/G%360
},r.snapTo=function(t,e,i){if(i=r.is(i,"finite")?i:10,r.is(t,H)){for(var n=t.length;n--;)if(O(t[n]-e)<=i)return t[n]
}else{t=+t;var a=e%t;if(i>a)return e-a;if(a>t-i)return e-a+t}return e};r.createUUID=function(t,e){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(t,e).toUpperCase()
}}(/[xy]/g,function(t){var e=16*q.random()|0,r="x"==t?e:3&e|8;return r.toString(16)
});r.setWindow=function(t){e("raphael.setWindow",r,S.win,t),S.win=t,S.doc=S.win.document,r._engine.initWin&&r._engine.initWin(S.win)
};var be=function(t){if(r.vml){var e,i=/^\s+|\s+$/g;try{var n=new ActiveXObject("htmlfile");
n.write("<body>"),n.close(),e=n.body}catch(s){e=createPopup().document.body}var o=e.createTextRange();
be=a(function(t){try{e.style.color=z(t).replace(i,M);var r=o.queryCommandValue("ForeColor");
return r=(255&r)<<16|65280&r|(16711680&r)>>>16,"#"+("000000"+r.toString(16)).slice(-6)
}catch(n){return"none"}})}else{var l=S.doc.createElement("i");l.title="Raphaël Colour Picker",l.style.display="none",S.doc.body.appendChild(l),be=a(function(t){return l.style.color=t,S.doc.defaultView.getComputedStyle(l,M).getPropertyValue("color")
})}return be(t)},_e=function(){return"hsb("+[this.h,this.s,this.b]+")"},we=function(){return"hsl("+[this.h,this.s,this.l]+")"
},ke=function(){return this.hex},Ce=function(t,e,i){if(null==e&&r.is(t,"object")&&"r"in t&&"g"in t&&"b"in t&&(i=t.b,e=t.g,t=t.r),null==e&&r.is(t,X)){var n=r.getRGB(t);
t=n.r,e=n.g,i=n.b}return(t>1||e>1||i>1)&&(t/=255,e/=255,i/=255),[t,e,i]},Be=function(t,e,i,n){t*=255,e*=255,i*=255;
var a={r:t,g:e,b:i,hex:r.rgb(t,e,i),toString:ke};return r.is(n,"finite")&&(a.opacity=n),a
};r.color=function(t){var e;return r.is(t,"object")&&"h"in t&&"s"in t&&"b"in t?(e=r.hsb2rgb(t),t.r=e.r,t.g=e.g,t.b=e.b,t.hex=e.hex):r.is(t,"object")&&"h"in t&&"s"in t&&"l"in t?(e=r.hsl2rgb(t),t.r=e.r,t.g=e.g,t.b=e.b,t.hex=e.hex):(r.is(t,"string")&&(t=r.getRGB(t)),r.is(t,"object")&&"r"in t&&"g"in t&&"b"in t?(e=r.rgb2hsl(t),t.h=e.h,t.s=e.s,t.l=e.l,e=r.rgb2hsb(t),t.v=e.b):(t={hex:"none"},t.r=t.g=t.b=t.h=t.s=t.v=t.l=-1)),t.toString=ke,t
},r.hsb2rgb=function(t,e,r,i){this.is(t,"object")&&"h"in t&&"s"in t&&"b"in t&&(r=t.b,e=t.s,t=t.h,i=t.o),t*=360;
var n,a,s,o,l;return t=t%360/60,l=r*e,o=l*(1-O(t%2-1)),n=a=s=r-l,t=~~t,n+=[l,o,0,0,o,l][t],a+=[o,l,l,o,0,0][t],s+=[0,0,o,l,l,o][t],Be(n,a,s,i)
},r.hsl2rgb=function(t,e,r,i){this.is(t,"object")&&"h"in t&&"s"in t&&"l"in t&&(r=t.l,e=t.s,t=t.h),(t>1||e>1||r>1)&&(t/=360,e/=100,r/=100),t*=360;
var n,a,s,o,l;return t=t%360/60,l=2*e*(.5>r?r:1-r),o=l*(1-O(t%2-1)),n=a=s=r-l/2,t=~~t,n+=[l,o,0,0,o,l][t],a+=[o,l,l,o,0,0][t],s+=[0,0,o,l,l,o][t],Be(n,a,s,i)
},r.rgb2hsb=function(t,e,r){r=Ce(t,e,r),t=r[0],e=r[1],r=r[2];var i,n,a,s;return a=D(t,e,r),s=a-V(t,e,r),i=0==s?null:a==t?(e-r)/s:a==e?(r-t)/s+2:(t-e)/s+4,i=(i+360)%6*60/360,n=0==s?0:s/a,{h:i,s:n,b:a,toString:_e}
},r.rgb2hsl=function(t,e,r){r=Ce(t,e,r),t=r[0],e=r[1],r=r[2];var i,n,a,s,o,l;return s=D(t,e,r),o=V(t,e,r),l=s-o,i=0==l?null:s==t?(e-r)/l:s==e?(r-t)/l+2:(t-e)/l+4,i=(i+360)%6*60/360,a=(s+o)/2,n=0==l?0:.5>a?l/(2*a):l/(2-2*a),{h:i,s:n,l:a,toString:we}
},r._path2string=function(){return this.join(",").replace(se,"$1")};r._preload=function(t,e){var r=S.doc.createElement("img");
r.style.cssText="position:absolute;left:-9999em;top:-9999em",r.onload=function(){e.call(this),this.onload=null,S.doc.body.removeChild(this)
},r.onerror=function(){S.doc.body.removeChild(this)},S.doc.body.appendChild(r),r.src=t
};r.getRGB=a(function(t){if(!t||(t=z(t)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:s};
if("none"==t)return{r:-1,g:-1,b:-1,hex:"none",toString:s};!(ae[B](t.toLowerCase().substring(0,2))||"#"==t.charAt())&&(t=be(t));
var e,i,n,a,o,l,h=t.match($);return h?(h[2]&&(n=te(h[2].substring(5),16),i=te(h[2].substring(3,5),16),e=te(h[2].substring(1,3),16)),h[3]&&(n=te((o=h[3].charAt(3))+o,16),i=te((o=h[3].charAt(2))+o,16),e=te((o=h[3].charAt(1))+o,16)),h[4]&&(l=h[4][F](ne),e=K(l[0]),"%"==l[0].slice(-1)&&(e*=2.55),i=K(l[1]),"%"==l[1].slice(-1)&&(i*=2.55),n=K(l[2]),"%"==l[2].slice(-1)&&(n*=2.55),"rgba"==h[1].toLowerCase().slice(0,4)&&(a=K(l[3])),l[3]&&"%"==l[3].slice(-1)&&(a/=100)),h[5]?(l=h[5][F](ne),e=K(l[0]),"%"==l[0].slice(-1)&&(e*=2.55),i=K(l[1]),"%"==l[1].slice(-1)&&(i*=2.55),n=K(l[2]),"%"==l[2].slice(-1)&&(n*=2.55),("deg"==l[0].slice(-3)||"°"==l[0].slice(-1))&&(e/=360),"hsba"==h[1].toLowerCase().slice(0,4)&&(a=K(l[3])),l[3]&&"%"==l[3].slice(-1)&&(a/=100),r.hsb2rgb(e,i,n,a)):h[6]?(l=h[6][F](ne),e=K(l[0]),"%"==l[0].slice(-1)&&(e*=2.55),i=K(l[1]),"%"==l[1].slice(-1)&&(i*=2.55),n=K(l[2]),"%"==l[2].slice(-1)&&(n*=2.55),("deg"==l[0].slice(-3)||"°"==l[0].slice(-1))&&(e/=360),"hsla"==h[1].toLowerCase().slice(0,4)&&(a=K(l[3])),l[3]&&"%"==l[3].slice(-1)&&(a/=100),r.hsl2rgb(e,i,n,a)):(h={r:e,g:i,b:n,toString:s},h.hex="#"+(16777216|n|i<<8|e<<16).toString(16).slice(1),r.is(a,"finite")&&(h.opacity=a),h)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:s}
},r),r.hsb=a(function(t,e,i){return r.hsb2rgb(t,e,i).hex}),r.hsl=a(function(t,e,i){return r.hsl2rgb(t,e,i).hex
}),r.rgb=a(function(t,e,r){return"#"+(16777216|r|e<<8|t<<16).toString(16).slice(1)
}),r.getColor=function(t){var e=this.getColor.start=this.getColor.start||{h:0,s:1,b:t||.75},r=this.hsb2rgb(e.h,e.s,e.b);
return e.h+=.075,e.h>1&&(e.h=0,e.s-=.2,e.s<=0&&(this.getColor.start={h:0,s:1,b:e.b})),r.hex
},r.getColor.reset=function(){delete this.start},r.parsePathString=function(t){if(!t)return null;
var e=Se(t);if(e.arr)return Ae(e.arr);var i={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},n=[];
return r.is(t,H)&&r.is(t[0],H)&&(n=Ae(t)),n.length||z(t).replace(oe,function(t,e,r){var a=[],s=e.toLowerCase();
if(r.replace(he,function(t,e){e&&a.push(+e)}),"m"==s&&a.length>2&&(n.push([e][E](a.splice(0,2))),s="l",e="m"==e?"l":"L"),"r"==s)n.push([e][E](a));
else for(;a.length>=i[s]&&(n.push([e][E](a.splice(0,i[s]))),i[s]););}),n.toString=r._path2string,e.arr=Ae(n),n
},r.parseTransformString=a(function(t){if(!t)return null;var e=[];return r.is(t,H)&&r.is(t[0],H)&&(e=Ae(t)),e.length||z(t).replace(le,function(t,r,i){{var n=[];
j.call(r)}i.replace(he,function(t,e){e&&n.push(+e)}),e.push([r][E](n))}),e.toString=r._path2string,e
});var Se=function(t){var e=Se.ps=Se.ps||{};return e[t]?e[t].sleep=100:e[t]={sleep:100},setTimeout(function(){for(var r in e)e[B](r)&&r!=t&&(e[r].sleep--,!e[r].sleep&&delete e[r])
}),e[t]};r.findDotsAtSegment=function(t,e,r,i,n,a,s,o,l){var h=1-l,u=Y(h,3),c=Y(h,2),f=l*l,p=f*l,d=u*t+3*c*l*r+3*h*l*l*n+p*s,g=u*e+3*c*l*i+3*h*l*l*a+p*o,v=t+2*l*(r-t)+f*(n-2*r+t),x=e+2*l*(i-e)+f*(a-2*i+e),m=r+2*l*(n-r)+f*(s-2*n+r),y=i+2*l*(a-i)+f*(o-2*a+i),b=h*t+l*r,_=h*e+l*i,w=h*n+l*s,k=h*a+l*o,C=90-180*q.atan2(v-m,x-y)/G;
return(v>m||y>x)&&(C+=180),{x:d,y:g,m:{x:v,y:x},n:{x:m,y:y},start:{x:b,y:_},end:{x:w,y:k},alpha:C}
},r.bezierBBox=function(t,e,i,n,a,s,o,l){r.is(t,"array")||(t=[t,e,i,n,a,s,o,l]);var h=Fe.apply(null,t);
return{x:h.min.x,y:h.min.y,x2:h.max.x,y2:h.max.y,width:h.max.x-h.min.x,height:h.max.y-h.min.y}
},r.isPointInsideBBox=function(t,e,r){return e>=t.x&&e<=t.x2&&r>=t.y&&r<=t.y2},r.isBBoxIntersect=function(t,e){var i=r.isPointInsideBBox;
return i(e,t.x,t.y)||i(e,t.x2,t.y)||i(e,t.x,t.y2)||i(e,t.x2,t.y2)||i(t,e.x,e.y)||i(t,e.x2,e.y)||i(t,e.x,e.y2)||i(t,e.x2,e.y2)||(t.x<e.x2&&t.x>e.x||e.x<t.x2&&e.x>t.x)&&(t.y<e.y2&&t.y>e.y||e.y<t.y2&&e.y>t.y)
},r.pathIntersection=function(t,e){return p(t,e)},r.pathIntersectionNumber=function(t,e){return p(t,e,1)
},r.isPointInsidePath=function(t,e,i){var n=r.pathBBox(t);return r.isPointInsideBBox(n,e,i)&&p(t,[["M",e,i],["H",n.x2+10]],1)%2==1
},r._removedFactory=function(t){return function(){e("raphael.log",null,"Raphaël: you are calling to method “"+t+"” of removed object",t)
}};var Te=r.pathBBox=function(t){var e=Se(t);if(e.bbox)return i(e.bbox);if(!t)return{x:0,y:0,width:0,height:0,x2:0,y2:0};
t=Re(t);for(var r,n=0,a=0,s=[],o=[],l=0,h=t.length;h>l;l++)if(r=t[l],"M"==r[0])n=r[1],a=r[2],s.push(n),o.push(a);
else{var u=Fe(n,a,r[1],r[2],r[3],r[4],r[5],r[6]);s=s[E](u.min.x,u.max.x),o=o[E](u.min.y,u.max.y),n=r[5],a=r[6]
}var c=V[N](0,s),f=V[N](0,o),p=D[N](0,s),d=D[N](0,o),g=p-c,v=d-f,x={x:c,y:f,x2:p,y2:d,width:g,height:v,cx:c+g/2,cy:f+v/2};
return e.bbox=i(x),x},Ae=function(t){var e=i(t);return e.toString=r._path2string,e
},Ne=r._pathToRelative=function(t){var e=Se(t);if(e.rel)return Ae(e.rel);r.is(t,H)&&r.is(t&&t[0],H)||(t=r.parsePathString(t));
var i=[],n=0,a=0,s=0,o=0,l=0;"M"==t[0][0]&&(n=t[0][1],a=t[0][2],s=n,o=a,l++,i.push(["M",n,a]));
for(var h=l,u=t.length;u>h;h++){var c=i[h]=[],f=t[h];if(f[0]!=j.call(f[0]))switch(c[0]=j.call(f[0]),c[0]){case"a":c[1]=f[1],c[2]=f[2],c[3]=f[3],c[4]=f[4],c[5]=f[5],c[6]=+(f[6]-n).toFixed(3),c[7]=+(f[7]-a).toFixed(3);
break;case"v":c[1]=+(f[1]-a).toFixed(3);break;case"m":s=f[1],o=f[2];default:for(var p=1,d=f.length;d>p;p++)c[p]=+(f[p]-(p%2?n:a)).toFixed(3)
}else{c=i[h]=[],"m"==f[0]&&(s=f[1]+n,o=f[2]+a);for(var g=0,v=f.length;v>g;g++)i[h][g]=f[g]
}var x=i[h].length;switch(i[h][0]){case"z":n=s,a=o;break;case"h":n+=+i[h][x-1];break;
case"v":a+=+i[h][x-1];break;default:n+=+i[h][x-2],a+=+i[h][x-1]}}return i.toString=r._path2string,e.rel=Ae(i),i
},Ee=r._pathToAbsolute=function(t){var e=Se(t);if(e.abs)return Ae(e.abs);if(r.is(t,H)&&r.is(t&&t[0],H)||(t=r.parsePathString(t)),!t||!t.length)return[["M",0,0]];
var i=[],n=0,a=0,s=0,l=0,h=0;"M"==t[0][0]&&(n=+t[0][1],a=+t[0][2],s=n,l=a,h++,i[0]=["M",n,a]);
for(var u,c,f=3==t.length&&"M"==t[0][0]&&"R"==t[1][0].toUpperCase()&&"Z"==t[2][0].toUpperCase(),p=h,d=t.length;d>p;p++){if(i.push(u=[]),c=t[p],c[0]!=ee.call(c[0]))switch(u[0]=ee.call(c[0]),u[0]){case"A":u[1]=c[1],u[2]=c[2],u[3]=c[3],u[4]=c[4],u[5]=c[5],u[6]=+(c[6]+n),u[7]=+(c[7]+a);
break;case"V":u[1]=+c[1]+a;break;case"H":u[1]=+c[1]+n;break;case"R":for(var g=[n,a][E](c.slice(1)),v=2,x=g.length;x>v;v++)g[v]=+g[v]+n,g[++v]=+g[v]+a;
i.pop(),i=i[E](o(g,f));break;case"M":s=+c[1]+n,l=+c[2]+a;default:for(v=1,x=c.length;x>v;v++)u[v]=+c[v]+(v%2?n:a)
}else if("R"==c[0])g=[n,a][E](c.slice(1)),i.pop(),i=i[E](o(g,f)),u=["R"][E](c.slice(-2));
else for(var m=0,y=c.length;y>m;m++)u[m]=c[m];switch(u[0]){case"Z":n=s,a=l;break;
case"H":n=u[1];break;case"V":a=u[1];break;case"M":s=u[u.length-2],l=u[u.length-1];
default:n=u[u.length-2],a=u[u.length-1]}}return i.toString=r._path2string,e.abs=Ae(i),i
},Le=function(t,e,r,i){return[t,e,r,i,r,i]},Me=function(t,e,r,i,n,a){var s=1/3,o=2/3;
return[s*t+o*r,s*e+o*i,s*n+o*r,s*a+o*i,n,a]},Pe=function(t,e,r,i,n,s,o,l,h,u){var c,f=120*G/180,p=G/180*(+n||0),d=[],g=a(function(t,e,r){var i=t*q.cos(r)-e*q.sin(r),n=t*q.sin(r)+e*q.cos(r);
return{x:i,y:n}});if(u)C=u[0],B=u[1],w=u[2],k=u[3];else{c=g(t,e,-p),t=c.x,e=c.y,c=g(l,h,-p),l=c.x,h=c.y;
var v=(q.cos(G/180*n),q.sin(G/180*n),(t-l)/2),x=(e-h)/2,m=v*v/(r*r)+x*x/(i*i);m>1&&(m=q.sqrt(m),r=m*r,i=m*i);
var y=r*r,b=i*i,_=(s==o?-1:1)*q.sqrt(O((y*b-y*x*x-b*v*v)/(y*x*x+b*v*v))),w=_*r*x/i+(t+l)/2,k=_*-i*v/r+(e+h)/2,C=q.asin(((e-k)/i).toFixed(9)),B=q.asin(((h-k)/i).toFixed(9));
C=w>t?G-C:C,B=w>l?G-B:B,0>C&&(C=2*G+C),0>B&&(B=2*G+B),o&&C>B&&(C-=2*G),!o&&B>C&&(B-=2*G)
}var S=B-C;if(O(S)>f){var T=B,A=l,N=h;B=C+f*(o&&B>C?1:-1),l=w+r*q.cos(B),h=k+i*q.sin(B),d=Pe(l,h,r,i,n,0,o,A,N,[B,T,w,k])
}S=B-C;var L=q.cos(C),M=q.sin(C),P=q.cos(B),z=q.sin(B),R=q.tan(S/4),I=4/3*r*R,j=4/3*i*R,D=[t,e],V=[t+I*M,e-j*L],Y=[l+I*z,h-j*P],W=[l,h];
if(V[0]=2*D[0]-V[0],V[1]=2*D[1]-V[1],u)return[V,Y,W][E](d);d=[V,Y,W][E](d).join()[F](",");
for(var X=[],H=0,U=d.length;U>H;H++)X[H]=H%2?g(d[H-1],d[H],p).y:g(d[H],d[H+1],p).x;
return X},ze=function(t,e,r,i,n,a,s,o,l){var h=1-l;return{x:Y(h,3)*t+3*Y(h,2)*l*r+3*h*l*l*n+Y(l,3)*s,y:Y(h,3)*e+3*Y(h,2)*l*i+3*h*l*l*a+Y(l,3)*o}
},Fe=a(function(t,e,r,i,n,a,s,o){var l,h=n-2*r+t-(s-2*n+r),u=2*(r-t)-2*(n-r),c=t-r,f=(-u+q.sqrt(u*u-4*h*c))/2/h,p=(-u-q.sqrt(u*u-4*h*c))/2/h,d=[e,o],g=[t,s];
return O(f)>"1e12"&&(f=.5),O(p)>"1e12"&&(p=.5),f>0&&1>f&&(l=ze(t,e,r,i,n,a,s,o,f),g.push(l.x),d.push(l.y)),p>0&&1>p&&(l=ze(t,e,r,i,n,a,s,o,p),g.push(l.x),d.push(l.y)),h=a-2*i+e-(o-2*a+i),u=2*(i-e)-2*(a-i),c=e-i,f=(-u+q.sqrt(u*u-4*h*c))/2/h,p=(-u-q.sqrt(u*u-4*h*c))/2/h,O(f)>"1e12"&&(f=.5),O(p)>"1e12"&&(p=.5),f>0&&1>f&&(l=ze(t,e,r,i,n,a,s,o,f),g.push(l.x),d.push(l.y)),p>0&&1>p&&(l=ze(t,e,r,i,n,a,s,o,p),g.push(l.x),d.push(l.y)),{min:{x:V[N](0,g),y:V[N](0,d)},max:{x:D[N](0,g),y:D[N](0,d)}}
}),Re=r._path2curve=a(function(t,e){var r=!e&&Se(t);if(!e&&r.curve)return Ae(r.curve);
for(var i=Ee(t),n=e&&Ee(e),a={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},s={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},o=(function(t,e,r){var i,n,a={T:1,Q:1};
if(!t)return["C",e.x,e.y,e.x,e.y,e.x,e.y];switch(!(t[0]in a)&&(e.qx=e.qy=null),t[0]){case"M":e.X=t[1],e.Y=t[2];
break;case"A":t=["C"][E](Pe[N](0,[e.x,e.y][E](t.slice(1))));break;case"S":"C"==r||"S"==r?(i=2*e.x-e.bx,n=2*e.y-e.by):(i=e.x,n=e.y),t=["C",i,n][E](t.slice(1));
break;case"T":"Q"==r||"T"==r?(e.qx=2*e.x-e.qx,e.qy=2*e.y-e.qy):(e.qx=e.x,e.qy=e.y),t=["C"][E](Me(e.x,e.y,e.qx,e.qy,t[1],t[2]));
break;case"Q":e.qx=t[1],e.qy=t[2],t=["C"][E](Me(e.x,e.y,t[1],t[2],t[3],t[4]));break;
case"L":t=["C"][E](Le(e.x,e.y,t[1],t[2]));break;case"H":t=["C"][E](Le(e.x,e.y,t[1],e.y));
break;case"V":t=["C"][E](Le(e.x,e.y,e.x,t[1]));break;case"Z":t=["C"][E](Le(e.x,e.y,e.X,e.Y))
}return t}),l=function(t,e){if(t[e].length>7){t[e].shift();for(var r=t[e];r.length;)t.splice(e++,0,["C"][E](r.splice(0,6)));
t.splice(e,1),c=D(i.length,n&&n.length||0)}},h=function(t,e,r,a,s){t&&e&&"M"==t[s][0]&&"M"!=e[s][0]&&(e.splice(s,0,["M",a.x,a.y]),r.bx=0,r.by=0,r.x=t[s][1],r.y=t[s][2],c=D(i.length,n&&n.length||0))
},u=0,c=D(i.length,n&&n.length||0);c>u;u++){i[u]=o(i[u],a),l(i,u),n&&(n[u]=o(n[u],s)),n&&l(n,u),h(i,n,a,s,u),h(n,i,s,a,u);
var f=i[u],p=n&&n[u],d=f.length,g=n&&p.length;a.x=f[d-2],a.y=f[d-1],a.bx=K(f[d-4])||a.x,a.by=K(f[d-3])||a.y,s.bx=n&&(K(p[g-4])||s.x),s.by=n&&(K(p[g-3])||s.y),s.x=n&&p[g-2],s.y=n&&p[g-1]
}return n||(r.curve=Ae(i)),n?[i,n]:i},null,Ae),Ie=(r._parseDots=a(function(t){for(var e=[],i=0,n=t.length;n>i;i++){var a={},s=t[i].match(/^([^:]*):?([\d\.]*)/);
if(a.color=r.getRGB(s[1]),a.color.error)return null;a.color=a.color.hex,s[2]&&(a.offset=s[2]+"%"),e.push(a)
}for(i=1,n=e.length-1;n>i;i++)if(!e[i].offset){for(var o=K(e[i-1].offset||0),l=0,h=i+1;n>h;h++)if(e[h].offset){l=e[h].offset;
break}l||(l=100,h=n),l=K(l);for(var u=(l-o)/(h-i+1);h>i;i++)o+=u,e[i].offset=o+"%"
}return e}),r._tear=function(t,e){t==e.top&&(e.top=t.prev),t==e.bottom&&(e.bottom=t.next),t.next&&(t.next.prev=t.prev),t.prev&&(t.prev.next=t.next)
}),je=(r._tofront=function(t,e){e.top!==t&&(Ie(t,e),t.next=null,t.prev=e.top,e.top.next=t,e.top=t)
},r._toback=function(t,e){e.bottom!==t&&(Ie(t,e),t.next=e.bottom,t.prev=null,e.bottom.prev=t,e.bottom=t)
},r._insertafter=function(t,e,r){Ie(t,r),e==r.top&&(r.top=t),e.next&&(e.next.prev=t),t.next=e.next,t.prev=e,e.next=t
},r._insertbefore=function(t,e,r){Ie(t,r),e==r.bottom&&(r.bottom=t),e.prev&&(e.prev.next=t),t.prev=e.prev,e.prev=t,t.next=e
},r.toMatrix=function(t,e){var r=Te(t),i={_:{transform:M},getBBox:function(){return r
}};return qe(i,e),i.matrix}),qe=(r.transformPath=function(t,e){return xe(t,je(t,e))
},r._extractTransform=function(t,e){if(null==e)return t._.transform;e=z(e).replace(/\.{3}|\u2026/g,t._.transform||M);
var i=r.parseTransformString(e),n=0,a=0,s=0,o=1,l=1,h=t._,u=new d;if(h.transform=i||[],i)for(var c=0,f=i.length;f>c;c++){var p,g,v,x,m,y=i[c],b=y.length,_=z(y[0]).toLowerCase(),w=y[0]!=_,k=w?u.invert():0;
"t"==_&&3==b?w?(p=k.x(0,0),g=k.y(0,0),v=k.x(y[1],y[2]),x=k.y(y[1],y[2]),u.translate(v-p,x-g)):u.translate(y[1],y[2]):"r"==_?2==b?(m=m||t.getBBox(1),u.rotate(y[1],m.x+m.width/2,m.y+m.height/2),n+=y[1]):4==b&&(w?(v=k.x(y[2],y[3]),x=k.y(y[2],y[3]),u.rotate(y[1],v,x)):u.rotate(y[1],y[2],y[3]),n+=y[1]):"s"==_?2==b||3==b?(m=m||t.getBBox(1),u.scale(y[1],y[b-1],m.x+m.width/2,m.y+m.height/2),o*=y[1],l*=y[b-1]):5==b&&(w?(v=k.x(y[3],y[4]),x=k.y(y[3],y[4]),u.scale(y[1],y[2],v,x)):u.scale(y[1],y[2],y[3],y[4]),o*=y[1],l*=y[2]):"m"==_&&7==b&&u.add(y[1],y[2],y[3],y[4],y[5],y[6]),h.dirtyT=1,t.matrix=u
}t.matrix=u,h.sx=o,h.sy=l,h.deg=n,h.dx=a=u.e,h.dy=s=u.f,1==o&&1==l&&!n&&h.bbox?(h.bbox.x+=+a,h.bbox.y+=+s):h.dirtyT=1
}),De=function(t){var e=t[0];switch(e.toLowerCase()){case"t":return[e,0,0];case"m":return[e,1,0,0,1,0,0];
case"r":return 4==t.length?[e,0,t[2],t[3]]:[e,0];case"s":return 5==t.length?[e,1,1,t[3],t[4]]:3==t.length?[e,1,1]:[e,1]
}},Ve=r._equaliseTransform=function(t,e){e=z(e).replace(/\.{3}|\u2026/g,t),t=r.parseTransformString(t)||[],e=r.parseTransformString(e)||[];
for(var i,n,a,s,o=D(t.length,e.length),l=[],h=[],u=0;o>u;u++){if(a=t[u]||De(e[u]),s=e[u]||De(a),a[0]!=s[0]||"r"==a[0].toLowerCase()&&(a[2]!=s[2]||a[3]!=s[3])||"s"==a[0].toLowerCase()&&(a[3]!=s[3]||a[4]!=s[4]))return;
for(l[u]=[],h[u]=[],i=0,n=D(a.length,s.length);n>i;i++)i in a&&(l[u][i]=a[i]),i in s&&(h[u][i]=s[i])
}return{from:l,to:h}};r._getContainer=function(t,e,i,n){var a;return a=null!=n||r.is(t,"object")?t:S.doc.getElementById(t),null!=a?a.tagName?null==e?{container:a,width:a.style.pixelWidth||a.offsetWidth,height:a.style.pixelHeight||a.offsetHeight}:{container:a,width:e,height:i}:{container:1,x:t,y:e,width:i,height:n}:void 0
},r.pathToRelative=Ne,r._engine={},r.path2curve=Re,r.matrix=function(t,e,r,i,n,a){return new d(t,e,r,i,n,a)
},function(t){function e(t){return t[0]*t[0]+t[1]*t[1]}function i(t){var r=q.sqrt(e(t));
t[0]&&(t[0]/=r),t[1]&&(t[1]/=r)}t.add=function(t,e,r,i,n,a){var s,o,l,h,u=[[],[],[]],c=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],f=[[t,r,n],[e,i,a],[0,0,1]];
for(t&&t instanceof d&&(f=[[t.a,t.c,t.e],[t.b,t.d,t.f],[0,0,1]]),s=0;3>s;s++)for(o=0;3>o;o++){for(h=0,l=0;3>l;l++)h+=c[s][l]*f[l][o];
u[s][o]=h}this.a=u[0][0],this.b=u[1][0],this.c=u[0][1],this.d=u[1][1],this.e=u[0][2],this.f=u[1][2]
},t.invert=function(){var t=this,e=t.a*t.d-t.b*t.c;return new d(t.d/e,-t.b/e,-t.c/e,t.a/e,(t.c*t.f-t.d*t.e)/e,(t.b*t.e-t.a*t.f)/e)
},t.clone=function(){return new d(this.a,this.b,this.c,this.d,this.e,this.f)},t.translate=function(t,e){this.add(1,0,0,1,t,e)
},t.scale=function(t,e,r,i){null==e&&(e=t),(r||i)&&this.add(1,0,0,1,r,i),this.add(t,0,0,e,0,0),(r||i)&&this.add(1,0,0,1,-r,-i)
},t.rotate=function(t,e,i){t=r.rad(t),e=e||0,i=i||0;var n=+q.cos(t).toFixed(9),a=+q.sin(t).toFixed(9);
this.add(n,a,-a,n,e,i),this.add(1,0,0,1,-e,-i)},t.x=function(t,e){return t*this.a+e*this.c+this.e
},t.y=function(t,e){return t*this.b+e*this.d+this.f},t.get=function(t){return+this[z.fromCharCode(97+t)].toFixed(4)
},t.toString=function(){return r.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()
},t.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"
},t.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},t.split=function(){var t={};
t.dx=this.e,t.dy=this.f;var n=[[this.a,this.c],[this.b,this.d]];t.scalex=q.sqrt(e(n[0])),i(n[0]),t.shear=n[0][0]*n[1][0]+n[0][1]*n[1][1],n[1]=[n[1][0]-n[0][0]*t.shear,n[1][1]-n[0][1]*t.shear],t.scaley=q.sqrt(e(n[1])),i(n[1]),t.shear/=t.scaley;
var a=-n[0][1],s=n[1][1];return 0>s?(t.rotate=r.deg(q.acos(s)),0>a&&(t.rotate=360-t.rotate)):t.rotate=r.deg(q.asin(a)),t.isSimple=!(+t.shear.toFixed(9)||t.scalex.toFixed(9)!=t.scaley.toFixed(9)&&t.rotate),t.isSuperSimple=!+t.shear.toFixed(9)&&t.scalex.toFixed(9)==t.scaley.toFixed(9)&&!t.rotate,t.noRotation=!+t.shear.toFixed(9)&&!t.rotate,t
},t.toTransformString=function(t){var e=t||this[F]();return e.isSimple?(e.scalex=+e.scalex.toFixed(4),e.scaley=+e.scaley.toFixed(4),e.rotate=+e.rotate.toFixed(4),(e.dx||e.dy?"t"+[e.dx,e.dy]:M)+(1!=e.scalex||1!=e.scaley?"s"+[e.scalex,e.scaley,0,0]:M)+(e.rotate?"r"+[e.rotate,0,0]:M)):"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]
}}(d.prototype);var Oe=navigator.userAgent.match(/Version\/(.*?)\s/)||navigator.userAgent.match(/Chrome\/(\d+)/);
_.safari="Apple Computer, Inc."==navigator.vendor&&(Oe&&Oe[1]<4||"iP"==navigator.platform.slice(0,2))||"Google Inc."==navigator.vendor&&Oe&&Oe[1]<8?function(){var t=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:"none"});
setTimeout(function(){t.remove()})}:fe;for(var Ye=function(){this.returnValue=!1},Ge=function(){return this.originalEvent.preventDefault()
},We=function(){this.cancelBubble=!0},Xe=function(){return this.originalEvent.stopPropagation()
},He=function(t){var e=S.doc.documentElement.scrollTop||S.doc.body.scrollTop,r=S.doc.documentElement.scrollLeft||S.doc.body.scrollLeft;
return{x:t.clientX+r,y:t.clientY+e}},Ue=function(){return S.doc.addEventListener?function(t,e,r,i){var n=function(t){var e=He(t);
return r.call(i,t,e.x,e.y)};if(t.addEventListener(e,n,!1),L&&I[e]){var a=function(e){for(var n=He(e),a=e,s=0,o=e.targetTouches&&e.targetTouches.length;o>s;s++)if(e.targetTouches[s].target==t){e=e.targetTouches[s],e.originalEvent=a,e.preventDefault=Ge,e.stopPropagation=Xe;
break}return r.call(i,e,n.x,n.y)};t.addEventListener(I[e],a,!1)}return function(){return t.removeEventListener(e,n,!1),L&&I[e]&&t.removeEventListener(I[e],n,!1),!0
}}:S.doc.attachEvent?function(t,e,r,i){var n=function(t){t=t||S.win.event;var e=S.doc.documentElement.scrollTop||S.doc.body.scrollTop,n=S.doc.documentElement.scrollLeft||S.doc.body.scrollLeft,a=t.clientX+n,s=t.clientY+e;
return t.preventDefault=t.preventDefault||Ye,t.stopPropagation=t.stopPropagation||We,r.call(i,t,a,s)
};t.attachEvent("on"+e,n);var a=function(){return t.detachEvent("on"+e,n),!0};return a
}:void 0}(),$e=[],Ze=function(t){for(var r,i=t.clientX,n=t.clientY,a=S.doc.documentElement.scrollTop||S.doc.body.scrollTop,s=S.doc.documentElement.scrollLeft||S.doc.body.scrollLeft,o=$e.length;o--;){if(r=$e[o],L&&t.touches){for(var l,h=t.touches.length;h--;)if(l=t.touches[h],l.identifier==r.el._drag.id){i=l.clientX,n=l.clientY,(t.originalEvent?t.originalEvent:t).preventDefault();
break}}else t.preventDefault();var u,c=r.el.node,f=c.nextSibling,p=c.parentNode,d=c.style.display;
S.win.opera&&p.removeChild(c),c.style.display="none",u=r.el.paper.getElementByPoint(i,n),c.style.display=d,S.win.opera&&(f?p.insertBefore(c,f):p.appendChild(c)),u&&e("raphael.drag.over."+r.el.id,r.el,u),i+=s,n+=a,e("raphael.drag.move."+r.el.id,r.move_scope||r.el,i-r.el._drag.x,n-r.el._drag.y,i,n,t)
}},Qe=function(t){r.unmousemove(Ze).unmouseup(Qe);for(var i,n=$e.length;n--;)i=$e[n],i.el._drag={},e("raphael.drag.end."+i.el.id,i.end_scope||i.start_scope||i.move_scope||i.el,t);
$e=[]},Je=r.el={},Ke=R.length;Ke--;)!function(t){r[t]=Je[t]=function(e,i){return r.is(e,"function")&&(this.events=this.events||[],this.events.push({name:t,f:e,unbind:Ue(this.shape||this.node||S.doc,t,e,i||this)})),this
},r["un"+t]=Je["un"+t]=function(e){for(var i=this.events||[],n=i.length;n--;)i[n].name!=t||!r.is(e,"undefined")&&i[n].f!=e||(i[n].unbind(),i.splice(n,1),!i.length&&delete this.events);
return this}}(R[Ke]);Je.data=function(t,i){var n=ue[this.id]=ue[this.id]||{};if(0==arguments.length)return n;
if(1==arguments.length){if(r.is(t,"object")){for(var a in t)t[B](a)&&this.data(a,t[a]);
return this}return e("raphael.data.get."+this.id,this,n[t],t),n[t]}return n[t]=i,e("raphael.data.set."+this.id,this,i,t),this
},Je.removeData=function(t){return null==t?ue[this.id]={}:ue[this.id]&&delete ue[this.id][t],this
},Je.getData=function(){return i(ue[this.id]||{})},Je.hover=function(t,e,r,i){return this.mouseover(t,r).mouseout(e,i||r)
},Je.unhover=function(t,e){return this.unmouseover(t).unmouseout(e)};var tr=[];Je.drag=function(t,i,n,a,s,o){function l(l){(l.originalEvent||l).preventDefault();
var h=l.clientX,u=l.clientY,c=S.doc.documentElement.scrollTop||S.doc.body.scrollTop,f=S.doc.documentElement.scrollLeft||S.doc.body.scrollLeft;
if(this._drag.id=l.identifier,L&&l.touches)for(var p,d=l.touches.length;d--;)if(p=l.touches[d],this._drag.id=p.identifier,p.identifier==this._drag.id){h=p.clientX,u=p.clientY;
break}this._drag.x=h+f,this._drag.y=u+c,!$e.length&&r.mousemove(Ze).mouseup(Qe),$e.push({el:this,move_scope:a,start_scope:s,end_scope:o}),i&&e.on("raphael.drag.start."+this.id,i),t&&e.on("raphael.drag.move."+this.id,t),n&&e.on("raphael.drag.end."+this.id,n),e("raphael.drag.start."+this.id,s||a||this,l.clientX+f,l.clientY+c,l)
}return this._drag={},tr.push({el:this,start:l}),this.mousedown(l),this},Je.onDragOver=function(t){t?e.on("raphael.drag.over."+this.id,t):e.unbind("raphael.drag.over."+this.id)
},Je.undrag=function(){for(var t=tr.length;t--;)tr[t].el==this&&(this.unmousedown(tr[t].start),tr.splice(t,1),e.unbind("raphael.drag.*."+this.id));
!tr.length&&r.unmousemove(Ze).unmouseup(Qe),$e=[]},_.circle=function(t,e,i){var n=r._engine.circle(this,t||0,e||0,i||0);
return this.__set__&&this.__set__.push(n),n},_.rect=function(t,e,i,n,a){var s=r._engine.rect(this,t||0,e||0,i||0,n||0,a||0);
return this.__set__&&this.__set__.push(s),s},_.ellipse=function(t,e,i,n){var a=r._engine.ellipse(this,t||0,e||0,i||0,n||0);
return this.__set__&&this.__set__.push(a),a},_.path=function(t){t&&!r.is(t,X)&&!r.is(t[0],H)&&(t+=M);
var e=r._engine.path(r.format[N](r,arguments),this);return this.__set__&&this.__set__.push(e),e
},_.image=function(t,e,i,n,a){var s=r._engine.image(this,t||"about:blank",e||0,i||0,n||0,a||0);
return this.__set__&&this.__set__.push(s),s},_.text=function(t,e,i){var n=r._engine.text(this,t||0,e||0,z(i));
return this.__set__&&this.__set__.push(n),n},_.set=function(t){!r.is(t,"array")&&(t=Array.prototype.splice.call(arguments,0,arguments.length));
var e=new fr(t);return this.__set__&&this.__set__.push(e),e.paper=this,e.type="set",e
},_.setStart=function(t){this.__set__=t||this.set()},_.setFinish=function(){var t=this.__set__;
return delete this.__set__,t},_.setSize=function(t,e){return r._engine.setSize.call(this,t,e)
},_.setViewBox=function(t,e,i,n,a){return r._engine.setViewBox.call(this,t,e,i,n,a)
},_.top=_.bottom=null,_.raphael=r;var er=function(t){var e=t.getBoundingClientRect(),r=t.ownerDocument,i=r.body,n=r.documentElement,a=n.clientTop||i.clientTop||0,s=n.clientLeft||i.clientLeft||0,o=e.top+(S.win.pageYOffset||n.scrollTop||i.scrollTop)-a,l=e.left+(S.win.pageXOffset||n.scrollLeft||i.scrollLeft)-s;
return{y:o,x:l}};_.getElementByPoint=function(t,e){var r=this,i=r.canvas,n=S.doc.elementFromPoint(t,e);
if(S.win.opera&&"svg"==n.tagName){var a=er(i),s=i.createSVGRect();s.x=t-a.x,s.y=e-a.y,s.width=s.height=1;
var o=i.getIntersectionList(s,null);o.length&&(n=o[o.length-1])}if(!n)return null;
for(;n.parentNode&&n!=i.parentNode&&!n.raphael;)n=n.parentNode;return n==r.canvas.parentNode&&(n=i),n=n&&n.raphael?r.getById(n.raphaelid):null
},_.getElementsByBBox=function(t){var e=this.set();return this.forEach(function(i){r.isBBoxIntersect(i.getBBox(),t)&&e.push(i)
}),e},_.getById=function(t){for(var e=this.bottom;e;){if(e.id==t)return e;e=e.next
}return null},_.forEach=function(t,e){for(var r=this.bottom;r;){if(t.call(e,r)===!1)return this;
r=r.next}return this},_.getElementsByPoint=function(t,e){var r=this.set();return this.forEach(function(i){i.isPointInside(t,e)&&r.push(i)
}),r},Je.isPointInside=function(t,e){var i=this.realPath=ve[this.type](this);return this.attr("transform")&&this.attr("transform").length&&(i=r.transformPath(i,this.attr("transform"))),r.isPointInsidePath(i,t,e)
},Je.getBBox=function(t){if(this.removed)return{};var e=this._;return t?((e.dirty||!e.bboxwt)&&(this.realPath=ve[this.type](this),e.bboxwt=Te(this.realPath),e.bboxwt.toString=g,e.dirty=0),e.bboxwt):((e.dirty||e.dirtyT||!e.bbox)&&((e.dirty||!this.realPath)&&(e.bboxwt=0,this.realPath=ve[this.type](this)),e.bbox=Te(xe(this.realPath,this.matrix)),e.bbox.toString=g,e.dirty=e.dirtyT=0),e.bbox)
},Je.clone=function(){if(this.removed)return null;var t=this.paper[this.type]().attr(this.attr());
return this.__set__&&this.__set__.push(t),t},Je.glow=function(t){if("text"==this.type)return null;
t=t||{};var e={width:(t.width||10)+(+this.attr("stroke-width")||1),fill:t.fill||!1,opacity:t.opacity||.5,offsetx:t.offsetx||0,offsety:t.offsety||0,color:t.color||"#000"},r=e.width/2,i=this.paper,n=i.set(),a=this.realPath||ve[this.type](this);
a=this.matrix?xe(a,this.matrix):a;for(var s=1;r+1>s;s++)n.push(i.path(a).attr({stroke:e.color,fill:e.fill?e.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(e.width/r*s).toFixed(3),opacity:+(e.opacity/r).toFixed(3)}));
return n.insertBefore(this).translate(e.offsetx,e.offsety)};var rr=function(t,e,i,n,a,s,o,l,c){return null==c?h(t,e,i,n,a,s,o,l):r.findDotsAtSegment(t,e,i,n,a,s,o,l,u(t,e,i,n,a,s,o,l,c))
},ir=function(t,e){return function(i,n,a){i=Re(i);for(var s,o,l,h,u,c="",f={},p=0,d=0,g=i.length;g>d;d++){if(l=i[d],"M"==l[0])s=+l[1],o=+l[2];
else{if(h=rr(s,o,l[1],l[2],l[3],l[4],l[5],l[6]),p+h>n){if(e&&!f.start){if(u=rr(s,o,l[1],l[2],l[3],l[4],l[5],l[6],n-p),c+=["C"+u.start.x,u.start.y,u.m.x,u.m.y,u.x,u.y],a)return c;
f.start=c,c=["M"+u.x,u.y+"C"+u.n.x,u.n.y,u.end.x,u.end.y,l[5],l[6]].join(),p+=h,s=+l[5],o=+l[6];
continue}if(!t&&!e)return u=rr(s,o,l[1],l[2],l[3],l[4],l[5],l[6],n-p),{x:u.x,y:u.y,alpha:u.alpha}
}p+=h,s=+l[5],o=+l[6]}c+=l.shift()+l}return f.end=c,u=t?p:e?f:r.findDotsAtSegment(s,o,l[0],l[1],l[2],l[3],l[4],l[5],1),u.alpha&&(u={x:u.x,y:u.y,alpha:u.alpha}),u
}},nr=ir(1),ar=ir(),sr=ir(0,1);r.getTotalLength=nr,r.getPointAtLength=ar,r.getSubpath=function(t,e,r){if(this.getTotalLength(t)-r<1e-6)return sr(t,e).end;
var i=sr(t,r,1);return e?sr(i,e).end:i},Je.getTotalLength=function(){var t=this.getPath();
if(t)return this.node.getTotalLength?this.node.getTotalLength():nr(t)},Je.getPointAtLength=function(t){var e=this.getPath();
if(e)return ar(e,t)},Je.getPath=function(){var t,e=r._getPath[this.type];if("text"!=this.type&&"set"!=this.type)return e&&(t=e(this)),t
},Je.getSubpath=function(t,e){var i=this.getPath();if(i)return r.getSubpath(i,t,e)
};var or=r.easing_formulas={linear:function(t){return t},"<":function(t){return Y(t,1.7)
},">":function(t){return Y(t,.48)},"<>":function(t){var e=.48-t/1.04,r=q.sqrt(.1734+e*e),i=r-e,n=Y(O(i),1/3)*(0>i?-1:1),a=-r-e,s=Y(O(a),1/3)*(0>a?-1:1),o=n+s+.5;
return 3*(1-o)*o*o+o*o*o},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)
},backOut:function(t){t-=1;var e=1.70158;return t*t*((e+1)*t+e)+1},elastic:function(t){return t==!!t?t:Y(2,-10*t)*q.sin(2*(t-.075)*G/.3)+1
},bounce:function(t){var e,r=7.5625,i=2.75;return 1/i>t?e=r*t*t:2/i>t?(t-=1.5/i,e=r*t*t+.75):2.5/i>t?(t-=2.25/i,e=r*t*t+.9375):(t-=2.625/i,e=r*t*t+.984375),e
}};or.easeIn=or["ease-in"]=or["<"],or.easeOut=or["ease-out"]=or[">"],or.easeInOut=or["ease-in-out"]=or["<>"],or["back-in"]=or.backIn,or["back-out"]=or.backOut;
var lr=[],hr=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(t){setTimeout(t,16)
},ur=function(){for(var t=+new Date,i=0;i<lr.length;i++){var n=lr[i];if(!n.el.removed&&!n.paused){var a,s,o=t-n.start,l=n.ms,h=n.easing,u=n.from,c=n.diff,f=n.to,p=(n.t,n.el),d={},g={};
if(n.initstatus?(o=(n.initstatus*n.anim.top-n.prev)/(n.percent-n.prev)*l,n.status=n.initstatus,delete n.initstatus,n.stop&&lr.splice(i--,1)):n.status=(n.prev+(n.percent-n.prev)*(o/l))/n.anim.top,!(0>o))if(l>o){var v=h(o/l);
for(var x in u)if(u[B](x)){switch(ie[x]){case W:a=+u[x]+v*l*c[x];break;case"colour":a="rgb("+[cr(J(u[x].r+v*l*c[x].r)),cr(J(u[x].g+v*l*c[x].g)),cr(J(u[x].b+v*l*c[x].b))].join(",")+")";
break;case"path":a=[];for(var y=0,b=u[x].length;b>y;y++){a[y]=[u[x][y][0]];for(var _=1,w=u[x][y].length;w>_;_++)a[y][_]=+u[x][y][_]+v*l*c[x][y][_];
a[y]=a[y].join(P)}a=a.join(P);break;case"transform":if(c[x].real)for(a=[],y=0,b=u[x].length;b>y;y++)for(a[y]=[u[x][y][0]],_=1,w=u[x][y].length;w>_;_++)a[y][_]=u[x][y][_]+v*l*c[x][y][_];
else{var k=function(t){return+u[x][t]+v*l*c[x][t]};a=[["m",k(0),k(1),k(2),k(3),k(4),k(5)]]
}break;case"csv":if("clip-rect"==x)for(a=[],y=4;y--;)a[y]=+u[x][y]+v*l*c[x][y];break;
default:var C=[][E](u[x]);for(a=[],y=p.paper.customAttributes[x].length;y--;)a[y]=+C[y]+v*l*c[x][y]
}d[x]=a}p.attr(d),function(t,r,i){setTimeout(function(){e("raphael.anim.frame."+t,r,i)
})}(p.id,p,n.anim)}else{if(function(t,i,n){setTimeout(function(){e("raphael.anim.frame."+i.id,i,n),e("raphael.anim.finish."+i.id,i,n),r.is(t,"function")&&t.call(i)
})}(n.callback,p,n.anim),p.attr(f),lr.splice(i--,1),n.repeat>1&&!n.next){for(s in f)f[B](s)&&(g[s]=n.totalOrigin[s]);
n.el.attr(g),m(n.anim,n.el,n.anim.percents[0],null,n.totalOrigin,n.repeat-1)}n.next&&!n.stop&&m(n.anim,n.el,n.next,null,n.totalOrigin,n.repeat)
}}}r.svg&&p&&p.paper&&p.paper.safari(),lr.length&&hr(ur)},cr=function(t){return t>255?255:0>t?0:t
};Je.animateWith=function(t,e,i,n,a,s){var o=this;if(o.removed)return s&&s.call(o),o;
var l=i instanceof x?i:r.animation(i,n,a,s);m(l,o,l.percents[0],null,o.attr());for(var h=0,u=lr.length;u>h;h++)if(lr[h].anim==e&&lr[h].el==t){lr[u-1].start=lr[h].start;
break}return o},Je.onAnimation=function(t){return t?e.on("raphael.anim.frame."+this.id,t):e.unbind("raphael.anim.frame."+this.id),this
},x.prototype.delay=function(t){var e=new x(this.anim,this.ms);return e.times=this.times,e.del=+t||0,e
},x.prototype.repeat=function(t){var e=new x(this.anim,this.ms);return e.del=this.del,e.times=q.floor(D(t,0))||1,e
},r.animation=function(t,e,i,n){if(t instanceof x)return t;(r.is(i,"function")||!i)&&(n=n||i||null,i=null),t=Object(t),e=+e||0;
var a,s,o={};for(s in t)t[B](s)&&K(s)!=s&&K(s)+"%"!=s&&(a=!0,o[s]=t[s]);return a?(i&&(o.easing=i),n&&(o.callback=n),new x({100:o},e)):new x(t,e)
},Je.animate=function(t,e,i,n){var a=this;if(a.removed)return n&&n.call(a),a;var s=t instanceof x?t:r.animation(t,e,i,n);
return m(s,a,s.percents[0],null,a.attr()),a},Je.setTime=function(t,e){return t&&null!=e&&this.status(t,V(e,t.ms)/t.ms),this
},Je.status=function(t,e){var r,i,n=[],a=0;if(null!=e)return m(t,this,-1,V(e,1)),this;
for(r=lr.length;r>a;a++)if(i=lr[a],i.el.id==this.id&&(!t||i.anim==t)){if(t)return i.status;
n.push({anim:i.anim,status:i.status})}return t?0:n},Je.pause=function(t){for(var r=0;r<lr.length;r++)lr[r].el.id!=this.id||t&&lr[r].anim!=t||e("raphael.anim.pause."+this.id,this,lr[r].anim)!==!1&&(lr[r].paused=!0);
return this},Je.resume=function(t){for(var r=0;r<lr.length;r++)if(lr[r].el.id==this.id&&(!t||lr[r].anim==t)){var i=lr[r];
e("raphael.anim.resume."+this.id,this,i.anim)!==!1&&(delete i.paused,this.status(i.anim,i.status))
}return this},Je.stop=function(t){for(var r=0;r<lr.length;r++)lr[r].el.id!=this.id||t&&lr[r].anim!=t||e("raphael.anim.stop."+this.id,this,lr[r].anim)!==!1&&lr.splice(r--,1);
return this},e.on("raphael.remove",y),e.on("raphael.clear",y),Je.toString=function(){return"Raphaël’s object"
};var fr=function(t){if(this.items=[],this.length=0,this.type="set",t)for(var e=0,r=t.length;r>e;e++)!t[e]||t[e].constructor!=Je.constructor&&t[e].constructor!=fr||(this[this.items.length]=this.items[this.items.length]=t[e],this.length++)
},pr=fr.prototype;pr.push=function(){for(var t,e,r=0,i=arguments.length;i>r;r++)t=arguments[r],!t||t.constructor!=Je.constructor&&t.constructor!=fr||(e=this.items.length,this[e]=this.items[e]=t,this.length++);
return this},pr.pop=function(){return this.length&&delete this[this.length--],this.items.pop()
},pr.forEach=function(t,e){for(var r=0,i=this.items.length;i>r;r++)if(t.call(e,this.items[r],r)===!1)return this;
return this};for(var dr in Je)Je[B](dr)&&(pr[dr]=function(t){return function(){var e=arguments;
return this.forEach(function(r){r[t][N](r,e)})}}(dr));return pr.attr=function(t,e){if(t&&r.is(t,H)&&r.is(t[0],"object"))for(var i=0,n=t.length;n>i;i++)this.items[i].attr(t[i]);
else for(var a=0,s=this.items.length;s>a;a++)this.items[a].attr(t,e);return this},pr.clear=function(){for(;this.length;)this.pop()
},pr.splice=function(t,e){t=0>t?D(this.length+t,0):t,e=D(0,V(this.length-t,e));var r,i=[],n=[],a=[];
for(r=2;r<arguments.length;r++)a.push(arguments[r]);for(r=0;e>r;r++)n.push(this[t+r]);
for(;r<this.length-t;r++)i.push(this[t+r]);var s=a.length;for(r=0;r<s+i.length;r++)this.items[t+r]=this[t+r]=s>r?a[r]:i[r-s];
for(r=this.items.length=this.length-=e-s;this[r];)delete this[r++];return new fr(n)
},pr.exclude=function(t){for(var e=0,r=this.length;r>e;e++)if(this[e]==t)return this.splice(e,1),!0
},pr.animate=function(t,e,i,n){(r.is(i,"function")||!i)&&(n=i||null);var a,s,o=this.items.length,l=o,h=this;
if(!o)return this;n&&(s=function(){!--o&&n.call(h)}),i=r.is(i,X)?i:s;var u=r.animation(t,e,i,s);
for(a=this.items[--l].animate(u);l--;)this.items[l]&&!this.items[l].removed&&this.items[l].animateWith(a,u,u),this.items[l]&&!this.items[l].removed||o--;
return this},pr.insertAfter=function(t){for(var e=this.items.length;e--;)this.items[e].insertAfter(t);
return this},pr.getBBox=function(){for(var t=[],e=[],r=[],i=[],n=this.items.length;n--;)if(!this.items[n].removed){var a=this.items[n].getBBox();
t.push(a.x),e.push(a.y),r.push(a.x+a.width),i.push(a.y+a.height)}return t=V[N](0,t),e=V[N](0,e),r=D[N](0,r),i=D[N](0,i),{x:t,y:e,x2:r,y2:i,width:r-t,height:i-e}
},pr.clone=function(t){t=this.paper.set();for(var e=0,r=this.items.length;r>e;e++)t.push(this.items[e].clone());
return t},pr.toString=function(){return"Raphaël‘s set"},pr.glow=function(t){var e=this.paper.set();
return this.forEach(function(r){var i=r.glow(t);null!=i&&i.forEach(function(t){e.push(t)
})}),e},pr.isPointInside=function(t,e){var r=!1;return this.forEach(function(i){return i.isPointInside(t,e)?(r=!0,!1):void 0
}),r},r.registerFont=function(t){if(!t.face)return t;this.fonts=this.fonts||{};var e={w:t.w,face:{},glyphs:{}},r=t.face["font-family"];
for(var i in t.face)t.face[B](i)&&(e.face[i]=t.face[i]);if(this.fonts[r]?this.fonts[r].push(e):this.fonts[r]=[e],!t.svg){e.face["units-per-em"]=te(t.face["units-per-em"],10);
for(var n in t.glyphs)if(t.glyphs[B](n)){var a=t.glyphs[n];if(e.glyphs[n]={w:a.w,k:{},d:a.d&&"M"+a.d.replace(/[mlcxtrv]/g,function(t){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[t]||"M"
})+"z"},a.k)for(var s in a.k)a[B](s)&&(e.glyphs[n].k[s]=a.k[s])}}return t},_.getFont=function(t,e,i,n){if(n=n||"normal",i=i||"normal",e=+e||{normal:400,bold:700,lighter:300,bolder:800}[e]||400,r.fonts){var a=r.fonts[t];
if(!a){var s=new RegExp("(^|\\s)"+t.replace(/[^\w\d\s+!~.:_-]/g,M)+"(\\s|$)","i");
for(var o in r.fonts)if(r.fonts[B](o)&&s.test(o)){a=r.fonts[o];break}}var l;if(a)for(var h=0,u=a.length;u>h&&(l=a[h],l.face["font-weight"]!=e||l.face["font-style"]!=i&&l.face["font-style"]||l.face["font-stretch"]!=n);h++);return l
}},_.print=function(t,e,i,n,a,s,o,l){s=s||"middle",o=D(V(o||0,1),-1),l=D(V(l||1,3),1);
var h,u=z(i)[F](M),c=0,f=0,p=M;if(r.is(n,"string")&&(n=this.getFont(n)),n){h=(a||16)/n.face["units-per-em"];
for(var d=n.face.bbox[F](w),g=+d[0],v=d[3]-d[1],x=0,m=+d[1]+("baseline"==s?v+ +n.face.descent:v/2),y=0,b=u.length;b>y;y++){if("\n"==u[y])c=0,k=0,f=0,x+=v*l;
else{var _=f&&n.glyphs[u[y-1]]||{},k=n.glyphs[u[y]];c+=f?(_.w||n.w)+(_.k&&_.k[u[y]]||0)+n.w*o:0,f=1
}k&&k.d&&(p+=r.transformPath(k.d,["t",c*h,x*h,"s",h,h,g,m,"t",(t-g)/h,(e-m)/h]))}}return this.path(p).attr({fill:"#000",stroke:"none"})
},_.add=function(t){if(r.is(t,"array"))for(var e,i=this.set(),n=0,a=t.length;a>n;n++)e=t[n]||{},k[B](e.type)&&i.push(this[e.type]().attr(e));
return i},r.format=function(t,e){var i=r.is(e,H)?[0][E](e):arguments;return t&&r.is(t,X)&&i.length-1&&(t=t.replace(C,function(t,e){return null==i[++e]?M:i[e]
})),t||M},r.fullfill=function(){var t=/\{([^\}]+)\}/g,e=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,r=function(t,r,i){var n=i;
return r.replace(e,function(t,e,r,i,a){e=e||i,n&&(e in n&&(n=n[e]),"function"==typeof n&&a&&(n=n()))
}),n=(null==n||n==i?t:n)+""};return function(e,i){return String(e).replace(t,function(t,e){return r(t,e,i)
})}}(),r.ninja=function(){return T.was?S.win.Raphael=T.is:delete Raphael,r},r.st=pr,function(t,e,i){function n(){/in/.test(t.readyState)?setTimeout(n,9):r.eve("raphael.DOMload")
}null==t.readyState&&t.addEventListener&&(t.addEventListener(e,i=function(){t.removeEventListener(e,i,!1),t.readyState="complete"
},!1),t.readyState="loading"),n()}(document,"DOMContentLoaded"),e.on("raphael.DOMload",function(){b=!0
}),function(){if(r.svg){var t="hasOwnProperty",e=String,i=parseFloat,n=parseInt,a=Math,s=a.max,o=a.abs,l=a.pow,h=/[, ]+/,u=r.eve,c="",f=" ",p="http://www.w3.org/1999/xlink",d={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},g={};
r.toString=function(){return"Your browser supports SVG.\nYou are running Raphaël "+this.version
};var v=function(i,n){if(n){"string"==typeof i&&(i=v(i));for(var a in n)n[t](a)&&("xlink:"==a.substring(0,6)?i.setAttributeNS(p,a.substring(6),e(n[a])):i.setAttribute(a,e(n[a])))
}else i=r._g.doc.createElementNS("http://www.w3.org/2000/svg",i),i.style&&(i.style.webkitTapHighlightColor="rgba(0,0,0,0)");
return i},x=function(t,n){var h="linear",u=t.id+n,f=.5,p=.5,d=t.node,g=t.paper,x=d.style,m=r._g.doc.getElementById(u);
if(!m){if(n=e(n).replace(r._radial_gradient,function(t,e,r){if(h="radial",e&&r){f=i(e),p=i(r);
var n=2*(p>.5)-1;l(f-.5,2)+l(p-.5,2)>.25&&(p=a.sqrt(.25-l(f-.5,2))*n+.5)&&.5!=p&&(p=p.toFixed(5)-1e-5*n)
}return c}),n=n.split(/\s*\-\s*/),"linear"==h){var y=n.shift();if(y=-i(y),isNaN(y))return null;
var b=[0,0,a.cos(r.rad(y)),a.sin(r.rad(y))],_=1/(s(o(b[2]),o(b[3]))||1);b[2]*=_,b[3]*=_,b[2]<0&&(b[0]=-b[2],b[2]=0),b[3]<0&&(b[1]=-b[3],b[3]=0)
}var w=r._parseDots(n);if(!w)return null;if(u=u.replace(/[\(\)\s,\xb0#]/g,"_"),t.gradient&&u!=t.gradient.id&&(g.defs.removeChild(t.gradient),delete t.gradient),!t.gradient){m=v(h+"Gradient",{id:u}),t.gradient=m,v(m,"radial"==h?{fx:f,fy:p}:{x1:b[0],y1:b[1],x2:b[2],y2:b[3],gradientTransform:t.matrix.invert()}),g.defs.appendChild(m);
for(var k=0,C=w.length;C>k;k++)m.appendChild(v("stop",{offset:w[k].offset?w[k].offset:k?"100%":"0%","stop-color":w[k].color||"#fff"}))
}}return v(d,{fill:"url(#"+u+")",opacity:1,"fill-opacity":1}),x.fill=c,x.opacity=1,x.fillOpacity=1,1
},m=function(t){var e=t.getBBox(1);v(t.pattern,{patternTransform:t.matrix.invert()+" translate("+e.x+","+e.y+")"})
},y=function(i,n,a){if("path"==i.type){for(var s,o,l,h,u,f=e(n).toLowerCase().split("-"),p=i.paper,x=a?"end":"start",m=i.node,y=i.attrs,b=y["stroke-width"],_=f.length,w="classic",k=3,C=3,B=5;_--;)switch(f[_]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":w=f[_];
break;case"wide":C=5;break;case"narrow":C=2;break;case"long":k=5;break;case"short":k=2
}if("open"==w?(k+=2,C+=2,B+=2,l=1,h=a?4:1,u={fill:"none",stroke:y.stroke}):(h=l=k/2,u={fill:y.stroke,stroke:"none"}),i._.arrows?a?(i._.arrows.endPath&&g[i._.arrows.endPath]--,i._.arrows.endMarker&&g[i._.arrows.endMarker]--):(i._.arrows.startPath&&g[i._.arrows.startPath]--,i._.arrows.startMarker&&g[i._.arrows.startMarker]--):i._.arrows={},"none"!=w){var S="raphael-marker-"+w,T="raphael-marker-"+x+w+k+C;
r._g.doc.getElementById(S)?g[S]++:(p.defs.appendChild(v(v("path"),{"stroke-linecap":"round",d:d[w],id:S})),g[S]=1);
var A,N=r._g.doc.getElementById(T);N?(g[T]++,A=N.getElementsByTagName("use")[0]):(N=v(v("marker"),{id:T,markerHeight:C,markerWidth:k,orient:"auto",refX:h,refY:C/2}),A=v(v("use"),{"xlink:href":"#"+S,transform:(a?"rotate(180 "+k/2+" "+C/2+") ":c)+"scale("+k/B+","+C/B+")","stroke-width":(1/((k/B+C/B)/2)).toFixed(4)}),N.appendChild(A),p.defs.appendChild(N),g[T]=1),v(A,u);
var E=l*("diamond"!=w&&"oval"!=w);a?(s=i._.arrows.startdx*b||0,o=r.getTotalLength(y.path)-E*b):(s=E*b,o=r.getTotalLength(y.path)-(i._.arrows.enddx*b||0)),u={},u["marker-"+x]="url(#"+T+")",(o||s)&&(u.d=r.getSubpath(y.path,s,o)),v(m,u),i._.arrows[x+"Path"]=S,i._.arrows[x+"Marker"]=T,i._.arrows[x+"dx"]=E,i._.arrows[x+"Type"]=w,i._.arrows[x+"String"]=n
}else a?(s=i._.arrows.startdx*b||0,o=r.getTotalLength(y.path)-s):(s=0,o=r.getTotalLength(y.path)-(i._.arrows.enddx*b||0)),i._.arrows[x+"Path"]&&v(m,{d:r.getSubpath(y.path,s,o)}),delete i._.arrows[x+"Path"],delete i._.arrows[x+"Marker"],delete i._.arrows[x+"dx"],delete i._.arrows[x+"Type"],delete i._.arrows[x+"String"];
for(u in g)if(g[t](u)&&!g[u]){var L=r._g.doc.getElementById(u);L&&L.parentNode.removeChild(L)
}}},b={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},_=function(t,r,i){if(r=b[e(r).toLowerCase()]){for(var n=t.attrs["stroke-width"]||"1",a={round:n,square:n,butt:0}[t.attrs["stroke-linecap"]||i["stroke-linecap"]]||0,s=[],o=r.length;o--;)s[o]=r[o]*n+(o%2?1:-1)*a;
v(t.node,{"stroke-dasharray":s.join(",")})}},w=function(i,a){var l=i.node,u=i.attrs,f=l.style.visibility;
l.style.visibility="hidden";for(var d in a)if(a[t](d)){if(!r._availableAttrs[t](d))continue;
var g=a[d];switch(u[d]=g,d){case"blur":i.blur(g);break;case"title":var b=l.getElementsByTagName("title");
if(b.length&&(b=b[0]))b.firstChild.nodeValue=g;else{b=v("title");var w=r._g.doc.createTextNode(g);
b.appendChild(w),l.appendChild(b)}break;case"href":case"target":var k=l.parentNode;
if("a"!=k.tagName.toLowerCase()){var B=v("a");k.insertBefore(B,l),B.appendChild(l),k=B
}"target"==d?k.setAttributeNS(p,"show","blank"==g?"new":g):k.setAttributeNS(p,d,g);
break;case"cursor":l.style.cursor=g;break;case"transform":i.transform(g);break;case"arrow-start":y(i,g);
break;case"arrow-end":y(i,g,1);break;case"clip-rect":var S=e(g).split(h);if(4==S.length){i.clip&&i.clip.parentNode.parentNode.removeChild(i.clip.parentNode);
var T=v("clipPath"),A=v("rect");T.id=r.createUUID(),v(A,{x:S[0],y:S[1],width:S[2],height:S[3]}),T.appendChild(A),i.paper.defs.appendChild(T),v(l,{"clip-path":"url(#"+T.id+")"}),i.clip=A
}if(!g){var N=l.getAttribute("clip-path");if(N){var E=r._g.doc.getElementById(N.replace(/(^url\(#|\)$)/g,c));
E&&E.parentNode.removeChild(E),v(l,{"clip-path":c}),delete i.clip}}break;case"path":"path"==i.type&&(v(l,{d:g?u.path=r._pathToAbsolute(g):"M0,0"}),i._.dirty=1,i._.arrows&&("startString"in i._.arrows&&y(i,i._.arrows.startString),"endString"in i._.arrows&&y(i,i._.arrows.endString,1)));
break;case"width":if(l.setAttribute(d,g),i._.dirty=1,!u.fx)break;d="x",g=u.x;case"x":u.fx&&(g=-u.x-(u.width||0));
case"rx":if("rx"==d&&"rect"==i.type)break;case"cx":l.setAttribute(d,g),i.pattern&&m(i),i._.dirty=1;
break;case"height":if(l.setAttribute(d,g),i._.dirty=1,!u.fy)break;d="y",g=u.y;case"y":u.fy&&(g=-u.y-(u.height||0));
case"ry":if("ry"==d&&"rect"==i.type)break;case"cy":l.setAttribute(d,g),i.pattern&&m(i),i._.dirty=1;
break;case"r":"rect"==i.type?v(l,{rx:g,ry:g}):l.setAttribute(d,g),i._.dirty=1;break;
case"src":"image"==i.type&&l.setAttributeNS(p,"href",g);break;case"stroke-width":(1!=i._.sx||1!=i._.sy)&&(g/=s(o(i._.sx),o(i._.sy))||1),i.paper._vbSize&&(g*=i.paper._vbSize),l.setAttribute(d,g),u["stroke-dasharray"]&&_(i,u["stroke-dasharray"],a),i._.arrows&&("startString"in i._.arrows&&y(i,i._.arrows.startString),"endString"in i._.arrows&&y(i,i._.arrows.endString,1));
break;case"stroke-dasharray":_(i,g,a);break;case"fill":var L=e(g).match(r._ISURL);
if(L){T=v("pattern");var M=v("image");T.id=r.createUUID(),v(T,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),v(M,{x:0,y:0,"xlink:href":L[1]}),T.appendChild(M),function(t){r._preload(L[1],function(){var e=this.offsetWidth,r=this.offsetHeight;
v(t,{width:e,height:r}),v(M,{width:e,height:r}),i.paper.safari()})}(T),i.paper.defs.appendChild(T),v(l,{fill:"url(#"+T.id+")"}),i.pattern=T,i.pattern&&m(i);
break}var P=r.getRGB(g);if(P.error){if(("circle"==i.type||"ellipse"==i.type||"r"!=e(g).charAt())&&x(i,g)){if("opacity"in u||"fill-opacity"in u){var z=r._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g,c));
if(z){var F=z.getElementsByTagName("stop");v(F[F.length-1],{"stop-opacity":("opacity"in u?u.opacity:1)*("fill-opacity"in u?u["fill-opacity"]:1)})
}}u.gradient=g,u.fill="none";break}}else delete a.gradient,delete u.gradient,!r.is(u.opacity,"undefined")&&r.is(a.opacity,"undefined")&&v(l,{opacity:u.opacity}),!r.is(u["fill-opacity"],"undefined")&&r.is(a["fill-opacity"],"undefined")&&v(l,{"fill-opacity":u["fill-opacity"]});
P[t]("opacity")&&v(l,{"fill-opacity":P.opacity>1?P.opacity/100:P.opacity});case"stroke":P=r.getRGB(g),l.setAttribute(d,P.hex),"stroke"==d&&P[t]("opacity")&&v(l,{"stroke-opacity":P.opacity>1?P.opacity/100:P.opacity}),"stroke"==d&&i._.arrows&&("startString"in i._.arrows&&y(i,i._.arrows.startString),"endString"in i._.arrows&&y(i,i._.arrows.endString,1));
break;case"gradient":("circle"==i.type||"ellipse"==i.type||"r"!=e(g).charAt())&&x(i,g);
break;case"opacity":u.gradient&&!u[t]("stroke-opacity")&&v(l,{"stroke-opacity":g>1?g/100:g});
case"fill-opacity":if(u.gradient){z=r._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g,c)),z&&(F=z.getElementsByTagName("stop"),v(F[F.length-1],{"stop-opacity":g}));
break}default:"font-size"==d&&(g=n(g,10)+"px");var R=d.replace(/(\-.)/g,function(t){return t.substring(1).toUpperCase()
});l.style[R]=g,i._.dirty=1,l.setAttribute(d,g)}}C(i,a),l.style.visibility=f},k=1.2,C=function(i,a){if("text"==i.type&&(a[t]("text")||a[t]("font")||a[t]("font-size")||a[t]("x")||a[t]("y"))){var s=i.attrs,o=i.node,l=o.firstChild?n(r._g.doc.defaultView.getComputedStyle(o.firstChild,c).getPropertyValue("font-size"),10):10;
if(a[t]("text")){for(s.text=a.text;o.firstChild;)o.removeChild(o.firstChild);for(var h,u=e(a.text).split("\n"),f=[],p=0,d=u.length;d>p;p++)h=v("tspan"),p&&v(h,{dy:l*k,x:s.x}),h.appendChild(r._g.doc.createTextNode(u[p])),o.appendChild(h),f[p]=h
}else for(f=o.getElementsByTagName("tspan"),p=0,d=f.length;d>p;p++)p?v(f[p],{dy:l*k,x:s.x}):v(f[0],{dy:0});
v(o,{x:s.x,y:s.y}),i._.dirty=1;var g=i._getBBox(),x=s.y-(g.y+g.height/2);x&&r.is(x,"finite")&&v(f[0],{dy:x})
}},B=function(t,e){this[0]=this.node=t,t.raphael=!0,this.id=r._oid++,t.raphaelid=this.id,this.matrix=r.matrix(),this.realPath=null,this.paper=e,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!e.bottom&&(e.bottom=this),this.prev=e.top,e.top&&(e.top.next=this),e.top=this,this.next=null
},S=r.el;B.prototype=S,S.constructor=B,r._engine.path=function(t,e){var r=v("path");
e.canvas&&e.canvas.appendChild(r);var i=new B(r,e);return i.type="path",w(i,{fill:"none",stroke:"#000",path:t}),i
},S.rotate=function(t,r,n){if(this.removed)return this;if(t=e(t).split(h),t.length-1&&(r=i(t[1]),n=i(t[2])),t=i(t[0]),null==n&&(r=n),null==r||null==n){var a=this.getBBox(1);
r=a.x+a.width/2,n=a.y+a.height/2}return this.transform(this._.transform.concat([["r",t,r,n]])),this
},S.scale=function(t,r,n,a){if(this.removed)return this;if(t=e(t).split(h),t.length-1&&(r=i(t[1]),n=i(t[2]),a=i(t[3])),t=i(t[0]),null==r&&(r=t),null==a&&(n=a),null==n||null==a)var s=this.getBBox(1);
return n=null==n?s.x+s.width/2:n,a=null==a?s.y+s.height/2:a,this.transform(this._.transform.concat([["s",t,r,n,a]])),this
},S.translate=function(t,r){return this.removed?this:(t=e(t).split(h),t.length-1&&(r=i(t[1])),t=i(t[0])||0,r=+r||0,this.transform(this._.transform.concat([["t",t,r]])),this)
},S.transform=function(e){var i=this._;if(null==e)return i.transform;if(r._extractTransform(this,e),this.clip&&v(this.clip,{transform:this.matrix.invert()}),this.pattern&&m(this),this.node&&v(this.node,{transform:this.matrix}),1!=i.sx||1!=i.sy){var n=this.attrs[t]("stroke-width")?this.attrs["stroke-width"]:1;
this.attr({"stroke-width":n})}return this},S.hide=function(){return!this.removed&&this.paper.safari(this.node.style.display="none"),this
},S.show=function(){return!this.removed&&this.paper.safari(this.node.style.display=""),this
},S.remove=function(){if(!this.removed&&this.node.parentNode){var t=this.paper;t.__set__&&t.__set__.exclude(this),u.unbind("raphael.*.*."+this.id),this.gradient&&t.defs.removeChild(this.gradient),r._tear(this,t),"a"==this.node.parentNode.tagName.toLowerCase()?this.node.parentNode.parentNode.removeChild(this.node.parentNode):this.node.parentNode.removeChild(this.node);
for(var e in this)this[e]="function"==typeof this[e]?r._removedFactory(e):null;this.removed=!0
}},S._getBBox=function(){if("none"==this.node.style.display){this.show();var t=!0
}var e={};try{e=this.node.getBBox()}catch(r){}finally{e=e||{}}return t&&this.hide(),e
},S.attr=function(e,i){if(this.removed)return this;if(null==e){var n={};for(var a in this.attrs)this.attrs[t](a)&&(n[a]=this.attrs[a]);
return n.gradient&&"none"==n.fill&&(n.fill=n.gradient)&&delete n.gradient,n.transform=this._.transform,n
}if(null==i&&r.is(e,"string")){if("fill"==e&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;
if("transform"==e)return this._.transform;for(var s=e.split(h),o={},l=0,c=s.length;c>l;l++)e=s[l],o[e]=e in this.attrs?this.attrs[e]:r.is(this.paper.customAttributes[e],"function")?this.paper.customAttributes[e].def:r._availableAttrs[e];
return c-1?o:o[s[0]]}if(null==i&&r.is(e,"array")){for(o={},l=0,c=e.length;c>l;l++)o[e[l]]=this.attr(e[l]);
return o}if(null!=i){var f={};f[e]=i}else null!=e&&r.is(e,"object")&&(f=e);for(var p in f)u("raphael.attr."+p+"."+this.id,this,f[p]);
for(p in this.paper.customAttributes)if(this.paper.customAttributes[t](p)&&f[t](p)&&r.is(this.paper.customAttributes[p],"function")){var d=this.paper.customAttributes[p].apply(this,[].concat(f[p]));
this.attrs[p]=f[p];for(var g in d)d[t](g)&&(f[g]=d[g])}return w(this,f),this},S.toFront=function(){if(this.removed)return this;
"a"==this.node.parentNode.tagName.toLowerCase()?this.node.parentNode.parentNode.appendChild(this.node.parentNode):this.node.parentNode.appendChild(this.node);
var t=this.paper;return t.top!=this&&r._tofront(this,t),this},S.toBack=function(){if(this.removed)return this;
var t=this.node.parentNode;"a"==t.tagName.toLowerCase()?t.parentNode.insertBefore(this.node.parentNode,this.node.parentNode.parentNode.firstChild):t.firstChild!=this.node&&t.insertBefore(this.node,this.node.parentNode.firstChild),r._toback(this,this.paper);
this.paper;return this},S.insertAfter=function(t){if(this.removed)return this;var e=t.node||t[t.length-1].node;
return e.nextSibling?e.parentNode.insertBefore(this.node,e.nextSibling):e.parentNode.appendChild(this.node),r._insertafter(this,t,this.paper),this
},S.insertBefore=function(t){if(this.removed)return this;var e=t.node||t[0].node;
return e.parentNode.insertBefore(this.node,e),r._insertbefore(this,t,this.paper),this
},S.blur=function(t){var e=this;if(0!==+t){var i=v("filter"),n=v("feGaussianBlur");
e.attrs.blur=t,i.id=r.createUUID(),v(n,{stdDeviation:+t||1.5}),i.appendChild(n),e.paper.defs.appendChild(i),e._blur=i,v(e.node,{filter:"url(#"+i.id+")"})
}else e._blur&&(e._blur.parentNode.removeChild(e._blur),delete e._blur,delete e.attrs.blur),e.node.removeAttribute("filter");
return e},r._engine.circle=function(t,e,r,i){var n=v("circle");t.canvas&&t.canvas.appendChild(n);
var a=new B(n,t);return a.attrs={cx:e,cy:r,r:i,fill:"none",stroke:"#000"},a.type="circle",v(n,a.attrs),a
},r._engine.rect=function(t,e,r,i,n,a){var s=v("rect");t.canvas&&t.canvas.appendChild(s);
var o=new B(s,t);return o.attrs={x:e,y:r,width:i,height:n,r:a||0,rx:a||0,ry:a||0,fill:"none",stroke:"#000"},o.type="rect",v(s,o.attrs),o
},r._engine.ellipse=function(t,e,r,i,n){var a=v("ellipse");t.canvas&&t.canvas.appendChild(a);
var s=new B(a,t);return s.attrs={cx:e,cy:r,rx:i,ry:n,fill:"none",stroke:"#000"},s.type="ellipse",v(a,s.attrs),s
},r._engine.image=function(t,e,r,i,n,a){var s=v("image");v(s,{x:r,y:i,width:n,height:a,preserveAspectRatio:"none"}),s.setAttributeNS(p,"href",e),t.canvas&&t.canvas.appendChild(s);
var o=new B(s,t);return o.attrs={x:r,y:i,width:n,height:a,src:e},o.type="image",o
},r._engine.text=function(t,e,i,n){var a=v("text");t.canvas&&t.canvas.appendChild(a);
var s=new B(a,t);return s.attrs={x:e,y:i,"text-anchor":"middle",text:n,font:r._availableAttrs.font,stroke:"none",fill:"#000"},s.type="text",w(s,s.attrs),s
},r._engine.setSize=function(t,e){return this.width=t||this.width,this.height=e||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox),this
},r._engine.create=function(){var t=r._getContainer.apply(0,arguments),e=t&&t.container,i=t.x,n=t.y,a=t.width,s=t.height;
if(!e)throw new Error("SVG container not found.");var o,l=v("svg"),h="overflow:hidden;";
return i=i||0,n=n||0,a=a||512,s=s||342,v(l,{height:s,version:1.1,width:a,xmlns:"http://www.w3.org/2000/svg"}),1==e?(l.style.cssText=h+"position:absolute;left:"+i+"px;top:"+n+"px",r._g.doc.body.appendChild(l),o=1):(l.style.cssText=h+"position:relative",e.firstChild?e.insertBefore(l,e.firstChild):e.appendChild(l)),e=new r._Paper,e.width=a,e.height=s,e.canvas=l,e.clear(),e._left=e._top=0,o&&(e.renderfix=function(){}),e.renderfix(),e
},r._engine.setViewBox=function(t,e,r,i,n){u("raphael.setViewBox",this,this._viewBox,[t,e,r,i,n]);
var a,o,l=s(r/this.width,i/this.height),h=this.top,c=n?"meet":"xMinYMin";for(null==t?(this._vbSize&&(l=1),delete this._vbSize,a="0 0 "+this.width+f+this.height):(this._vbSize=l,a=t+f+e+f+r+f+i),v(this.canvas,{viewBox:a,preserveAspectRatio:c});l&&h;)o="stroke-width"in h.attrs?h.attrs["stroke-width"]:1,h.attr({"stroke-width":o}),h._.dirty=1,h._.dirtyT=1,h=h.prev;
return this._viewBox=[t,e,r,i,!!n],this},r.prototype.renderfix=function(){var t,e=this.canvas,r=e.style;
try{t=e.getScreenCTM()||e.createSVGMatrix()}catch(i){t=e.createSVGMatrix()}var n=-t.e%1,a=-t.f%1;
(n||a)&&(n&&(this._left=(this._left+n)%1,r.left=this._left+"px"),a&&(this._top=(this._top+a)%1,r.top=this._top+"px"))
},r.prototype.clear=function(){r.eve("raphael.clear",this);for(var t=this.canvas;t.firstChild;)t.removeChild(t.firstChild);
this.bottom=this.top=null,(this.desc=v("desc")).appendChild(r._g.doc.createTextNode("Created with Raphaël "+r.version)),t.appendChild(this.desc),t.appendChild(this.defs=v("defs"))
},r.prototype.remove=function(){u("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);
for(var t in this)this[t]="function"==typeof this[t]?r._removedFactory(t):null};var T=r.st;
for(var A in S)S[t](A)&&!T[t](A)&&(T[A]=function(t){return function(){var e=arguments;
return this.forEach(function(r){r[t].apply(r,e)})}}(A))}}(),function(){if(r.vml){var t="hasOwnProperty",e=String,i=parseFloat,n=Math,a=n.round,s=n.max,o=n.min,l=n.abs,h="fill",u=/[, ]+/,c=r.eve,f=" progid:DXImageTransform.Microsoft",p=" ",d="",g={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},v=/([clmz]),?([^clmz]*)/gi,x=/ progid:\S+Blur\([^\)]+\)/g,m=/-?[^,\s-]+/g,y="position:absolute;left:0;top:0;width:1px;height:1px",b=21600,_={path:1,rect:1,image:1},w={circle:1,ellipse:1},k=function(t){var i=/[ahqstv]/gi,n=r._pathToAbsolute;
if(e(t).match(i)&&(n=r._path2curve),i=/[clmz]/g,n==r._pathToAbsolute&&!e(t).match(i)){var s=e(t).replace(v,function(t,e,r){var i=[],n="m"==e.toLowerCase(),s=g[e];
return r.replace(m,function(t){n&&2==i.length&&(s+=i+g["m"==e?"l":"L"],i=[]),i.push(a(t*b))
}),s+i});return s}var o,l,h=n(t);s=[];for(var u=0,c=h.length;c>u;u++){o=h[u],l=h[u][0].toLowerCase(),"z"==l&&(l="x");
for(var f=1,x=o.length;x>f;f++)l+=a(o[f]*b)+(f!=x-1?",":d);s.push(l)}return s.join(p)
},C=function(t,e,i){var n=r.matrix();return n.rotate(-t,.5,.5),{dx:n.x(e,i),dy:n.y(e,i)}
},B=function(t,e,r,i,n,a){var s=t._,o=t.matrix,u=s.fillpos,c=t.node,f=c.style,d=1,g="",v=b/e,x=b/r;
if(f.visibility="hidden",e&&r){if(c.coordsize=l(v)+p+l(x),f.rotation=a*(0>e*r?-1:1),a){var m=C(a,i,n);
i=m.dx,n=m.dy}if(0>e&&(g+="x"),0>r&&(g+=" y")&&(d=-1),f.flip=g,c.coordorigin=i*-v+p+n*-x,u||s.fillsize){var y=c.getElementsByTagName(h);
y=y&&y[0],c.removeChild(y),u&&(m=C(a,o.x(u[0],u[1]),o.y(u[0],u[1])),y.position=m.dx*d+p+m.dy*d),s.fillsize&&(y.size=s.fillsize[0]*l(e)+p+s.fillsize[1]*l(r)),c.appendChild(y)
}f.visibility="visible"}};r.toString=function(){return"Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël "+this.version
};var S=function(t,r,i){for(var n=e(r).toLowerCase().split("-"),a=i?"end":"start",s=n.length,o="classic",l="medium",h="medium";s--;)switch(n[s]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":o=n[s];
break;case"wide":case"narrow":h=n[s];break;case"long":case"short":l=n[s]}var u=t.node.getElementsByTagName("stroke")[0];
u[a+"arrow"]=o,u[a+"arrowlength"]=l,u[a+"arrowwidth"]=h},T=function(n,l){n.attrs=n.attrs||{};
var c=n.node,f=n.attrs,g=c.style,v=_[n.type]&&(l.x!=f.x||l.y!=f.y||l.width!=f.width||l.height!=f.height||l.cx!=f.cx||l.cy!=f.cy||l.rx!=f.rx||l.ry!=f.ry||l.r!=f.r),x=w[n.type]&&(f.cx!=l.cx||f.cy!=l.cy||f.r!=l.r||f.rx!=l.rx||f.ry!=l.ry),m=n;
for(var y in l)l[t](y)&&(f[y]=l[y]);if(v&&(f.path=r._getPath[n.type](n),n._.dirty=1),l.href&&(c.href=l.href),l.title&&(c.title=l.title),l.target&&(c.target=l.target),l.cursor&&(g.cursor=l.cursor),"blur"in l&&n.blur(l.blur),(l.path&&"path"==n.type||v)&&(c.path=k(~e(f.path).toLowerCase().indexOf("r")?r._pathToAbsolute(f.path):f.path),"image"==n.type&&(n._.fillpos=[f.x,f.y],n._.fillsize=[f.width,f.height],B(n,1,1,0,0,0))),"transform"in l&&n.transform(l.transform),x){var C=+f.cx,T=+f.cy,N=+f.rx||+f.r||0,E=+f.ry||+f.r||0;
c.path=r.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",a((C-N)*b),a((T-E)*b),a((C+N)*b),a((T+E)*b),a(C*b)),n._.dirty=1
}if("clip-rect"in l){var M=e(l["clip-rect"]).split(u);if(4==M.length){M[2]=+M[2]+ +M[0],M[3]=+M[3]+ +M[1];
var P=c.clipRect||r._g.doc.createElement("div"),z=P.style;z.clip=r.format("rect({1}px {2}px {3}px {0}px)",M),c.clipRect||(z.position="absolute",z.top=0,z.left=0,z.width=n.paper.width+"px",z.height=n.paper.height+"px",c.parentNode.insertBefore(P,c),P.appendChild(c),c.clipRect=P)
}l["clip-rect"]||c.clipRect&&(c.clipRect.style.clip="auto")}if(n.textpath){var F=n.textpath.style;
l.font&&(F.font=l.font),l["font-family"]&&(F.fontFamily='"'+l["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,d)+'"'),l["font-size"]&&(F.fontSize=l["font-size"]),l["font-weight"]&&(F.fontWeight=l["font-weight"]),l["font-style"]&&(F.fontStyle=l["font-style"])
}if("arrow-start"in l&&S(m,l["arrow-start"]),"arrow-end"in l&&S(m,l["arrow-end"],1),null!=l.opacity||null!=l["stroke-width"]||null!=l.fill||null!=l.src||null!=l.stroke||null!=l["stroke-width"]||null!=l["stroke-opacity"]||null!=l["fill-opacity"]||null!=l["stroke-dasharray"]||null!=l["stroke-miterlimit"]||null!=l["stroke-linejoin"]||null!=l["stroke-linecap"]){var R=c.getElementsByTagName(h),I=!1;
if(R=R&&R[0],!R&&(I=R=L(h)),"image"==n.type&&l.src&&(R.src=l.src),l.fill&&(R.on=!0),(null==R.on||"none"==l.fill||null===l.fill)&&(R.on=!1),R.on&&l.fill){var j=e(l.fill).match(r._ISURL);
if(j){R.parentNode==c&&c.removeChild(R),R.rotate=!0,R.src=j[1],R.type="tile";var q=n.getBBox(1);
R.position=q.x+p+q.y,n._.fillpos=[q.x,q.y],r._preload(j[1],function(){n._.fillsize=[this.offsetWidth,this.offsetHeight]
})}else R.color=r.getRGB(l.fill).hex,R.src=d,R.type="solid",r.getRGB(l.fill).error&&(m.type in{circle:1,ellipse:1}||"r"!=e(l.fill).charAt())&&A(m,l.fill,R)&&(f.fill="none",f.gradient=l.fill,R.rotate=!1)
}if("fill-opacity"in l||"opacity"in l){var D=((+f["fill-opacity"]+1||2)-1)*((+f.opacity+1||2)-1)*((+r.getRGB(l.fill).o+1||2)-1);
D=o(s(D,0),1),R.opacity=D,R.src&&(R.color="none")}c.appendChild(R);var V=c.getElementsByTagName("stroke")&&c.getElementsByTagName("stroke")[0],O=!1;
!V&&(O=V=L("stroke")),(l.stroke&&"none"!=l.stroke||l["stroke-width"]||null!=l["stroke-opacity"]||l["stroke-dasharray"]||l["stroke-miterlimit"]||l["stroke-linejoin"]||l["stroke-linecap"])&&(V.on=!0),("none"==l.stroke||null===l.stroke||null==V.on||0==l.stroke||0==l["stroke-width"])&&(V.on=!1);
var Y=r.getRGB(l.stroke);V.on&&l.stroke&&(V.color=Y.hex),D=((+f["stroke-opacity"]+1||2)-1)*((+f.opacity+1||2)-1)*((+Y.o+1||2)-1);
var G=.75*(i(l["stroke-width"])||1);if(D=o(s(D,0),1),null==l["stroke-width"]&&(G=f["stroke-width"]),l["stroke-width"]&&(V.weight=G),G&&1>G&&(D*=G)&&(V.weight=1),V.opacity=D,l["stroke-linejoin"]&&(V.joinstyle=l["stroke-linejoin"]||"miter"),V.miterlimit=l["stroke-miterlimit"]||8,l["stroke-linecap"]&&(V.endcap="butt"==l["stroke-linecap"]?"flat":"square"==l["stroke-linecap"]?"square":"round"),"stroke-dasharray"in l){var W={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};
V.dashstyle=W[t](l["stroke-dasharray"])?W[l["stroke-dasharray"]]:d}O&&c.appendChild(V)
}if("text"==m.type){m.paper.canvas.style.display=d;var X=m.paper.span,H=100,U=f.font&&f.font.match(/\d+(?:\.\d*)?(?=px)/);
g=X.style,f.font&&(g.font=f.font),f["font-family"]&&(g.fontFamily=f["font-family"]),f["font-weight"]&&(g.fontWeight=f["font-weight"]),f["font-style"]&&(g.fontStyle=f["font-style"]),U=i(f["font-size"]||U&&U[0])||10,g.fontSize=U*H+"px",m.textpath.string&&(X.innerHTML=e(m.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));
var $=X.getBoundingClientRect();m.W=f.w=($.right-$.left)/H,m.H=f.h=($.bottom-$.top)/H,m.X=f.x,m.Y=f.y+m.H/2,("x"in l||"y"in l)&&(m.path.v=r.format("m{0},{1}l{2},{1}",a(f.x*b),a(f.y*b),a(f.x*b)+1));
for(var Z=["x","y","text","font","font-family","font-weight","font-style","font-size"],Q=0,J=Z.length;J>Q;Q++)if(Z[Q]in l){m._.dirty=1;
break}switch(f["text-anchor"]){case"start":m.textpath.style["v-text-align"]="left",m.bbx=m.W/2;
break;case"end":m.textpath.style["v-text-align"]="right",m.bbx=-m.W/2;break;default:m.textpath.style["v-text-align"]="center",m.bbx=0
}m.textpath.style["v-text-kern"]=!0}},A=function(t,a,s){t.attrs=t.attrs||{};var o=(t.attrs,Math.pow),l="linear",h=".5 .5";
if(t.attrs.gradient=a,a=e(a).replace(r._radial_gradient,function(t,e,r){return l="radial",e&&r&&(e=i(e),r=i(r),o(e-.5,2)+o(r-.5,2)>.25&&(r=n.sqrt(.25-o(e-.5,2))*(2*(r>.5)-1)+.5),h=e+p+r),d
}),a=a.split(/\s*\-\s*/),"linear"==l){var u=a.shift();if(u=-i(u),isNaN(u))return null
}var c=r._parseDots(a);if(!c)return null;if(t=t.shape||t.node,c.length){t.removeChild(s),s.on=!0,s.method="none",s.color=c[0].color,s.color2=c[c.length-1].color;
for(var f=[],g=0,v=c.length;v>g;g++)c[g].offset&&f.push(c[g].offset+p+c[g].color);
s.colors=f.length?f.join():"0% "+s.color,"radial"==l?(s.type="gradientTitle",s.focus="100%",s.focussize="0 0",s.focusposition=h,s.angle=0):(s.type="gradient",s.angle=(270-u)%360),t.appendChild(s)
}return 1},N=function(t,e){this[0]=this.node=t,t.raphael=!0,this.id=r._oid++,t.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=e,this.matrix=r.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!e.bottom&&(e.bottom=this),this.prev=e.top,e.top&&(e.top.next=this),e.top=this,this.next=null
},E=r.el;N.prototype=E,E.constructor=N,E.transform=function(t){if(null==t)return this._.transform;
var i,n=this.paper._viewBoxShift,a=n?"s"+[n.scale,n.scale]+"-1-1t"+[n.dx,n.dy]:d;
n&&(i=t=e(t).replace(/\.{3}|\u2026/g,this._.transform||d)),r._extractTransform(this,a+t);
var s,o=this.matrix.clone(),l=this.skew,h=this.node,u=~e(this.attrs.fill).indexOf("-"),c=!e(this.attrs.fill).indexOf("url(");
if(o.translate(1,1),c||u||"image"==this.type)if(l.matrix="1 0 0 1",l.offset="0 0",s=o.split(),u&&s.noRotation||!s.isSimple){h.style.filter=o.toFilter();
var f=this.getBBox(),g=this.getBBox(1),v=f.x-g.x,x=f.y-g.y;h.coordorigin=v*-b+p+x*-b,B(this,1,1,v,x,0)
}else h.style.filter=d,B(this,s.scalex,s.scaley,s.dx,s.dy,s.rotate);else h.style.filter=d,l.matrix=e(o),l.offset=o.offset();
return i&&(this._.transform=i),this},E.rotate=function(t,r,n){if(this.removed)return this;
if(null!=t){if(t=e(t).split(u),t.length-1&&(r=i(t[1]),n=i(t[2])),t=i(t[0]),null==n&&(r=n),null==r||null==n){var a=this.getBBox(1);
r=a.x+a.width/2,n=a.y+a.height/2}return this._.dirtyT=1,this.transform(this._.transform.concat([["r",t,r,n]])),this
}},E.translate=function(t,r){return this.removed?this:(t=e(t).split(u),t.length-1&&(r=i(t[1])),t=i(t[0])||0,r=+r||0,this._.bbox&&(this._.bbox.x+=t,this._.bbox.y+=r),this.transform(this._.transform.concat([["t",t,r]])),this)
},E.scale=function(t,r,n,a){if(this.removed)return this;if(t=e(t).split(u),t.length-1&&(r=i(t[1]),n=i(t[2]),a=i(t[3]),isNaN(n)&&(n=null),isNaN(a)&&(a=null)),t=i(t[0]),null==r&&(r=t),null==a&&(n=a),null==n||null==a)var s=this.getBBox(1);
return n=null==n?s.x+s.width/2:n,a=null==a?s.y+s.height/2:a,this.transform(this._.transform.concat([["s",t,r,n,a]])),this._.dirtyT=1,this
},E.hide=function(){return!this.removed&&(this.node.style.display="none"),this},E.show=function(){return!this.removed&&(this.node.style.display=d),this
},E._getBBox=function(){return this.removed?{}:{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}
},E.remove=function(){if(!this.removed&&this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),r.eve.unbind("raphael.*.*."+this.id),r._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);
for(var t in this)this[t]="function"==typeof this[t]?r._removedFactory(t):null;this.removed=!0
}},E.attr=function(e,i){if(this.removed)return this;if(null==e){var n={};for(var a in this.attrs)this.attrs[t](a)&&(n[a]=this.attrs[a]);
return n.gradient&&"none"==n.fill&&(n.fill=n.gradient)&&delete n.gradient,n.transform=this._.transform,n
}if(null==i&&r.is(e,"string")){if(e==h&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;
for(var s=e.split(u),o={},l=0,f=s.length;f>l;l++)e=s[l],o[e]=e in this.attrs?this.attrs[e]:r.is(this.paper.customAttributes[e],"function")?this.paper.customAttributes[e].def:r._availableAttrs[e];
return f-1?o:o[s[0]]}if(this.attrs&&null==i&&r.is(e,"array")){for(o={},l=0,f=e.length;f>l;l++)o[e[l]]=this.attr(e[l]);
return o}var p;null!=i&&(p={},p[e]=i),null==i&&r.is(e,"object")&&(p=e);for(var d in p)c("raphael.attr."+d+"."+this.id,this,p[d]);
if(p){for(d in this.paper.customAttributes)if(this.paper.customAttributes[t](d)&&p[t](d)&&r.is(this.paper.customAttributes[d],"function")){var g=this.paper.customAttributes[d].apply(this,[].concat(p[d]));
this.attrs[d]=p[d];for(var v in g)g[t](v)&&(p[v]=g[v])}p.text&&"text"==this.type&&(this.textpath.string=p.text),T(this,p)
}return this},E.toFront=function(){return!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&r._tofront(this,this.paper),this
},E.toBack=function(){return this.removed?this:(this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),r._toback(this,this.paper)),this)
},E.insertAfter=function(t){return this.removed?this:(t.constructor==r.st.constructor&&(t=t[t.length-1]),t.node.nextSibling?t.node.parentNode.insertBefore(this.node,t.node.nextSibling):t.node.parentNode.appendChild(this.node),r._insertafter(this,t,this.paper),this)
},E.insertBefore=function(t){return this.removed?this:(t.constructor==r.st.constructor&&(t=t[0]),t.node.parentNode.insertBefore(this.node,t.node),r._insertbefore(this,t,this.paper),this)
},E.blur=function(t){var e=this.node.runtimeStyle,i=e.filter;return i=i.replace(x,d),0!==+t?(this.attrs.blur=t,e.filter=i+p+f+".Blur(pixelradius="+(+t||1.5)+")",e.margin=r.format("-{0}px 0 0 -{0}px",a(+t||1.5))):(e.filter=i,e.margin=0,delete this.attrs.blur),this
},r._engine.path=function(t,e){var r=L("shape");r.style.cssText=y,r.coordsize=b+p+b,r.coordorigin=e.coordorigin;
var i=new N(r,e),n={fill:"none",stroke:"#000"};t&&(n.path=t),i.type="path",i.path=[],i.Path=d,T(i,n),e.canvas.appendChild(r);
var a=L("skew");return a.on=!0,r.appendChild(a),i.skew=a,i.transform(d),i},r._engine.rect=function(t,e,i,n,a,s){var o=r._rectPath(e,i,n,a,s),l=t.path(o),h=l.attrs;
return l.X=h.x=e,l.Y=h.y=i,l.W=h.width=n,l.H=h.height=a,h.r=s,h.path=o,l.type="rect",l
},r._engine.ellipse=function(t,e,r,i,n){{var a=t.path();a.attrs}return a.X=e-i,a.Y=r-n,a.W=2*i,a.H=2*n,a.type="ellipse",T(a,{cx:e,cy:r,rx:i,ry:n}),a
},r._engine.circle=function(t,e,r,i){{var n=t.path();n.attrs}return n.X=e-i,n.Y=r-i,n.W=n.H=2*i,n.type="circle",T(n,{cx:e,cy:r,r:i}),n
},r._engine.image=function(t,e,i,n,a,s){var o=r._rectPath(i,n,a,s),l=t.path(o).attr({stroke:"none"}),u=l.attrs,c=l.node,f=c.getElementsByTagName(h)[0];
return u.src=e,l.X=u.x=i,l.Y=u.y=n,l.W=u.width=a,l.H=u.height=s,u.path=o,l.type="image",f.parentNode==c&&c.removeChild(f),f.rotate=!0,f.src=e,f.type="tile",l._.fillpos=[i,n],l._.fillsize=[a,s],c.appendChild(f),B(l,1,1,0,0,0),l
},r._engine.text=function(t,i,n,s){var o=L("shape"),l=L("path"),h=L("textpath");i=i||0,n=n||0,s=s||"",l.v=r.format("m{0},{1}l{2},{1}",a(i*b),a(n*b),a(i*b)+1),l.textpathok=!0,h.string=e(s),h.on=!0,o.style.cssText=y,o.coordsize=b+p+b,o.coordorigin="0 0";
var u=new N(o,t),c={fill:"#000",stroke:"none",font:r._availableAttrs.font,text:s};
u.shape=o,u.path=l,u.textpath=h,u.type="text",u.attrs.text=e(s),u.attrs.x=i,u.attrs.y=n,u.attrs.w=1,u.attrs.h=1,T(u,c),o.appendChild(h),o.appendChild(l),t.canvas.appendChild(o);
var f=L("skew");return f.on=!0,o.appendChild(f),u.skew=f,u.transform(d),u},r._engine.setSize=function(t,e){var i=this.canvas.style;
return this.width=t,this.height=e,t==+t&&(t+="px"),e==+e&&(e+="px"),i.width=t,i.height=e,i.clip="rect(0 "+t+" "+e+" 0)",this._viewBox&&r._engine.setViewBox.apply(this,this._viewBox),this
},r._engine.setViewBox=function(t,e,i,n,a){r.eve("raphael.setViewBox",this,this._viewBox,[t,e,i,n,a]);
var o,l,h=this.width,u=this.height,c=1/s(i/h,n/u);return a&&(o=u/n,l=h/i,h>i*o&&(t-=(h-i*o)/2/o),u>n*l&&(e-=(u-n*l)/2/l)),this._viewBox=[t,e,i,n,!!a],this._viewBoxShift={dx:-t,dy:-e,scale:c},this.forEach(function(t){t.transform("...")
}),this};var L;r._engine.initWin=function(t){var e=t.document;e.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");
try{!e.namespaces.rvml&&e.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),L=function(t){return e.createElement("<rvml:"+t+' class="rvml">')
}}catch(r){L=function(t){return e.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
}}},r._engine.initWin(r._g.win),r._engine.create=function(){var t=r._getContainer.apply(0,arguments),e=t.container,i=t.height,n=t.width,a=t.x,s=t.y;
if(!e)throw new Error("VML container not found.");var o=new r._Paper,l=o.canvas=r._g.doc.createElement("div"),h=l.style;
return a=a||0,s=s||0,n=n||512,i=i||342,o.width=n,o.height=i,n==+n&&(n+="px"),i==+i&&(i+="px"),o.coordsize=1e3*b+p+1e3*b,o.coordorigin="0 0",o.span=r._g.doc.createElement("span"),o.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",l.appendChild(o.span),h.cssText=r.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",n,i),1==e?(r._g.doc.body.appendChild(l),h.left=a+"px",h.top=s+"px",h.position="absolute"):e.firstChild?e.insertBefore(l,e.firstChild):e.appendChild(l),o.renderfix=function(){},o
},r.prototype.clear=function(){r.eve("raphael.clear",this),this.canvas.innerHTML=d,this.span=r._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null
},r.prototype.remove=function(){r.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas);
for(var t in this)this[t]="function"==typeof this[t]?r._removedFactory(t):null;return!0
};var M=r.st;for(var P in E)E[t](P)&&!M[t](P)&&(M[P]=function(t){return function(){var e=arguments;
return this.forEach(function(r){r[t].apply(r,e)})}}(P))}}(),T.was?S.win.Raphael=r:Raphael=r,r
}),define("cde/components/RaphaelComponent",["cdf/components/BaseComponent","cdf/lib/raphael"],function(t){var e=t.extend({update:function(){var t=this,e=t.parameters;
t.customfunction.apply(t,e?e:[])}});return e});