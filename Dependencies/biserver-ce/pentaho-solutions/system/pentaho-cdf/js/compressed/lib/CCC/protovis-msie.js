define(["./protovis"],function(e){return e.have_SVG=!(!document.createElementNS||!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),e.have_VML=function(e,t,a){return t=e.createElement("div"),t.innerHTML='<pvml:shape adj="1" />',a=t.firstChild,a.style.behavior="url(#default#VML)",a?"object"==typeof a.adj:!0
}(document),!e.have_SVG&&e.have_VML&&!function(){"function"!=typeof Date.now&&(Date.now=function(){return 1*new Date
});var t={is64Bit:"x64"===window.navigator.cpuClass,round:function(e){return Math.round(21.6*(e||0))
},styles:null,pre:"<pvml:",post:' class="msvml">',block:{group:1,shape:1,shapetype:1,line:1,polyline:1,curve:1,rect:1,roundrect:1,oval:1,arc:1,image:1},caps:{butt:"flat",round:"round",square:"square"},joins:{bevel:"bevel",round:"round",miter:"miter"},cursorstyles:{hand:"pointer",crosshair:1,pointer:1,move:1,text:1,wait:1,help:1,progress:1,"n-resize":1,"ne-resize":1,"nw-resize":1,"s-resize":1,"se-resize":1,"sw-resize":1,"e-resize":1,"w-resize":1},text_shim:null,text_dims:function(e,a){var i=t.text_shim||(t.init(),t.text_shim);
return i.style.font=t.processFont(a),i.innerText=e,{height:i.offsetHeight,width:i.offsetWidth}
},_fontCache:{},_fontSubst:{"default":"Arial","sans-serif":"Arial",sansserif:"Arial",sans:"Arial",serif:"Times New Roman",dialog:"Arial",monospaced:"Courier New",dialoginput:"Courier New"},_fontWhiteListIE64Bit:{"agency fb":1,aharoni:1,algerian:1,andalus:1,"angsana new":1,angsanaupc:1,aparajita:1,"arabic typesetting":1,arial:1,"arial black":1,"arial narrow":1,"arial rounded mt bold":1,"arial unicode ms":1,"baskerville old face":1,batang:1,batangche:1,"bauhaus 93":1,"bell mt":1,"berlin sans fb":1,"berlin sans fb demi":1,"bernard mt condensed":1,"blackadder itc":1,"bodoni mt":1,"bodoni mt black":1,"bodoni mt condensed":1,"bodoni mt poster compressed":1,"book antiqua":1,"bookman old style":1,"bookshelf symbol 7":1,"bradley hand itc":1,"britannic bold":1,broadway:1,"browallia new":1,browalliaupc:1,"brush script mt":1,calibri:1,"californian fb":1,"calisto mt":1,cambria:1,"cambria math":1,candara:1,castellar:1,centaur:1,century:1,"century gothic":1,"century schoolbook":1,chiller:1,"colonna mt":1,"comic sans ms":1,consolas:1,constantia:1,"cooper black":1,"copperplate gothic bold":1,"copperplate gothic light":1,corbel:1,"cordia new":1,cordiaupc:1,"courier new":1,"curlz mt":1,daunpenh:1,david:1,"dfkai-sb":1,dilleniaupc:1,dokchampa:1,dotum:1,dotumche:1,ebrima:1,"edwardian script itc":1,elephant:1,"engravers mt":1,"eras bold itc":1,"eras demi itc":1,"eras light itc":1,"eras medium itc":1,"estrangelo edessa":1,eucrosiaupc:1,euphemia:1,fangsong:1,"felix titling":1,"footlight mt light":1,forte:1,"franklin gothic book":1,"franklin gothic demi":1,"franklin gothic demi cond":1,"franklin gothic heavy":1,"franklin gothic medium":1,"franklin gothic medium cond":1,frankruehl:1,freesiaupc:1,"freestyle script":1,"french script mt":1,gabriola:1,garamond:1,gautami:1,georgia:1,gigi:1,"gill sans mt":1,"gill sans mt condensed":1,"gill sans mt ext condensed bold":1,"gill sans ultra bold":1,"gill sans ultra bold condensed":1,gisha:1,"gloucester mt extra condensed":1,"goudy old style":1,"goudy stout":1,gulim:1,gulimche:1,gungsuh:1,gungsuhche:1,"guttman adii":1,"guttman adii-light":1,"guttman aharoni":1,"guttman calligraphic":1,"guttman david":1,"guttman drogolin":1,"guttman frank":1,"guttman frnew":1,"guttman haim":1,"guttman haim-condensed":1,"guttman hatzvi":1,"guttman hodes":1,"guttman kav":1,"guttman kav-light":1,"guttman keren":1,"guttman logo1":1,"guttman mantova":1,"guttman mantova-decor":1,"guttman miryam":1,"guttman myamfix":1,"guttman rashi":1,"guttman stam":1,"guttman stam1":1,"guttman vilna":1,"guttman yad":1,"guttman yad-brush":1,"guttman yad-light":1,"guttman-aharoni":1,"guttman-aram":1,"guttman-courmir":1,"guttman-soncino":1,"guttman-toledo":1,haettenschweiler:1,"harlow solid italic":1,harrington:1,"high tower text":1,impact:1,"imprint mt shadow":1,"informal roman":1,irisupc:1,"iskoola pota":1,jasmineupc:1,jokerman:1,"juice itc":1,kaiti:1,kalinga:1,kartika:1,"khmer ui":1,kodchiangupc:1,kokila:1,"kristen itc":1,"kunstler script":1,"lao ui":1,latha:1,leelawadee:1,"levenim mt":1,lilyupc:1,"lucida bright":1,"lucida calligraphy":1,"lucida console":1,"lucida fax":1,"lucida handwriting":1,"lucida sans":1,"lucida sans typewriter":1,"lucida sans unicode":1,magneto:1,"maiandra gd":1,"malgun gothic":1,mangal:1,marlett:1,"matura mt script capitals":1,meiryo:1,"meiryo ui":1,"microsoft himalaya":1,"microsoft jhenghei":1,"microsoft new tai lue":1,"microsoft phagspa":1,"microsoft sans serif":1,"microsoft tai le":1,"microsoft uighur":1,"microsoft yahei":1,"microsoft yi baiti":1,mingliu:1,"mingliu-extb":1,mingliu_hkscs:1,"mingliu_hkscs-extb":1,miriam:1,"miriam fixed":1,mistral:1,"modern no. 20":1,"mongolian baiti":1,"monotype corsiva":1,"monotype hadassah":1,moolboran:1,"ms gothic":1,"ms mincho":1,"ms outlook":1,"ms pgothic":1,"ms pmincho":1,"ms reference sans serif":1,"ms reference specialty":1,"ms ui gothic":1,"mt extra":1,"mv boli":1,narkisim:1,"niagara engraved":1,"niagara solid":1,nsimsun:1,nyala:1,"ocr a extended":1,"old english text mt":1,onyx:1,"palace script mt":1,"palatino linotype":1,papyrus:1,parchment:1,perpetua:1,"perpetua titling mt":1,"plantagenet cherokee":1,playbill:1,pmingliu:1,"pmingliu-extb":1,"poor richard":1,pristina:1,raavi:1,"rage italic":1,ravie:1,rockwell:1,"rockwell condensed":1,"rockwell extra bold":1,rod:1,"sakkal majalla":1,"script mt bold":1,"segoe print":1,"segoe script":1,"segoe ui":1,"segoe ui light":1,"segoe ui semibold":1,"segoe ui symbol":1,"shonar bangla":1,"showcard gothic":1,shruti:1,simhei:1,"simplified arabic":1,"simplified arabic fixed":1,simsun:1,"simsun-extb":1,"snap itc":1,stencil:1,sylfaen:1,symbol:1,tahoma:1,"tempus sans itc":1,"times new roman":1,"toptype soncino":1,"traditional arabic":1,"trebuchet ms":1,tunga:1,"tw cen mt":1,"tw cen mt condensed":1,"tw cen mt condensed extra bold":1,utsaah:1,vani:1,verdana:1,vijaya:1,"viner hand itc":1,vivaldi:1,"vladimir script":1,vrinda:1,webdings:1,"wide latin":1,wingdings:1,"wingdings 2":1,"wingdings 3":1},_defaultFontIE64Bit:"Arial",processFont:function(e){var a=t._fontCache[e];
if(!a){var i=t.text_shim||(t.init(),t.text_shim),n=i.style;n.font=e;var r=n.fontFamily;
'"'===r.charAt(0)&&(r=r.substr(1,r.length-1));var o=r.toLowerCase(),l=t._fontSubst[o];
l?r=l:t.is64Bit&&!t._fontWhiteListIE64Bit[o]&&(r=t._defaultFontIE64Bit),n.fontFamily='"'+r+'"',t._fontCache[e]=a=n.font
}return a},get_dim:function(t,a){var i=a||{};i.rotation=i.tx=i.ty=0,i.sx=i.sy=1;var n=t.transform;
if(n){var r=/translate\((-?\d+(?:\.\d+)?(?:e-?\d+)?)(?:,(-?\d+(?:\.\d+)?(?:e-?\d+)?))?\)/.exec(n);
r&&(r[1]&&(i.tx=+r[1]),r[2]&&(i.ty=+r[2]));var o=/rotate\((-?\d+(?:\.\d+)?(?:e-?\d+)?)\)/.exec(n);
if(o){var o=+o[1]%360;0>o&&(o+=360),o=e.radians(o)}var l=/scale\((-?\d+(?:\.\d+)?(?:e-?\d+)?)(?:,(-?\d+(?:\.\d+)?(?:e-?\d+)?))?\)/.exec(n);
l&&(l[1]&&(i.sx=+l[1]),l[2]&&(i.sy=+l[2])),i.rotation=o||0}return i.x=parseFloat(t.x||0),i.y=parseFloat(t.y||0),"width"in t&&(i.width=parseFloat(t.width)),"height"in t&&(i.height=parseFloat(t.height)),i
},solidFillStyle:{type:"solid"},elm_defaults:{g:{rewrite:"span",attr:function(e,a,i){var n=t.get_dim(e);
i.style.cssText="position:absolute;zoom:1;left:"+(n.tx+n.x)+"px;top:"+(n.ty+n.y)+"px;"
}},line:{rewrite:"shape",attr:function(e,a,i,n,r){var o=parseFloat(e.x1||0),l=parseFloat(e.y1||0),s=parseFloat(e.x2||0),c=parseFloat(e.y2||0),m=t.round;
i.coordorigin="0,0",i.coordsize="21600,21600",t.path(i).v="M "+m(o)+" "+m(l)+" L "+m(s)+" "+m(c)+" E",t.stroke(i,e,n,r)
},css:"top:0px;left:0px;width:1000px;height:1000px"},rect:{rewrite:"shape",attr:function(e,a,i,n,r){var o=t.get_dim(e),l=t.path(i),s=t.round;
i.coordorigin="0,0",i.coordsize="21600,21600";var c=s(o.tx+o.x),m=s(o.ty+o.y),d=s(o.width),p=s(o.height);
l.v="M "+c+" "+m+" L "+(c+d)+" "+m+" L "+(c+d)+" "+(m+p)+" L "+c+" "+(m+p)+" x",t.stroke(i,e,n,r),t.fill(i,e,n,r)
},css:"top:0px;left:0px;width:1000px;height:1000px"},path:{rewrite:"shape",attr:function(e,a,i,n,r){var o=t.get_dim(e),l=i.style;
l.visibility="hidden",l.left=o.tx+o.x+"px",l.top=o.ty+o.y+"px",i.coordorigin="0,0",i.coordsize="21600,21600",i._events=e["pointer-events"]||"none",t.path(i,e.d);
var s=t.rotateAndScale(i,o.rotation&&-o.rotation,o.sx,o.sy);s&&(s.origin="-0.5,-0.5"),t.fill(i,e,n,r),t.stroke(i,e,n,r),l.visibility="visible"
},css:"top:0px;left:0px;width:1000px;height:1000px;"},ellipse:{rewrite:"oval",attr:function(e,a,i,n,r){var o=t.get_dim(e),l=e.rx,s=e.ry,c=i.style;
c.left=o.tx-l+"px",c.top=o.ty-s+"px",c.width=2*l+"px",c.height=2*s+"px";var m=t.rotateAndScale(i,o.rotation&&-o.rotation);
m&&(m.origin="0,0"),t.fill(i,e,n,r),t.stroke(i,e,n,r)}},circle:{rewrite:"oval",attr:function(e,a,i,n,r){var o=t.get_dim(e),l=parseFloat(e.r||0)+.5,s=parseFloat(e.cx||0)+.7,c=parseFloat(e.cy||0)+.7,m=i.style;
m.left=o.tx+s-l+"px",m.top=o.ty+c-l+"px",m.width=m.height=2*l+"px",t.fill(i,e,n,r),t.stroke(i,e,n,r)
}},text:{rewrite:"shape",attr:function(e,a,i,n,r){i.style,i.stroked="False",i.path="m0,0 l1,0 e";
var o=t.textpath(i);o.string=e.string;var l=o.style;l["v-text-align"]=e.textAlign,l.font=e.font,e.textDecoration&&(l.textDecoration=e.textDecoration),t.path(i).textpathok="True",t.rotateAndScale(i,e.rotation&&-e.rotation);
var s=n[r];s.fillStyle=t.solidFillStyle,t.fill(i,e,n,r),s.fillStyle=null},css:"position:absolute;top:0px;left:0px;width:1px;height:1px;"},svg:{rewrite:"span",css:"position:relative;overflow:hidden;display:inline-block;"},"vml:path":{rewrite:"path"},"vml:stroke":{rewrite:"stroke"},"vml:fill":{rewrite:"fill"},"vml:textpath":{rewrite:"textpath"},"vml:skew":{rewrite:"skew"}},_elmcache:{span:document.createElement("span"),div:document.createElement("div")},createElement:function(e){var a,i=t._elmcache,n=t.elm_defaults[e]||{},r=n.rewrite||e;
return r in i?a=i[r].cloneNode(!1):(i[r]=document.createElement(t.pre+r+t.post),r in t.block&&(i[r].className+=" msvml_block"),a=i[r].cloneNode(!1)),n.css&&(a.style.cssText=n.css),a
},_hex:e.range(0,256).map(function(t){return e.Format.pad("0",2,t.toString(16))}),_colorcache:{},color:function(e){var a,i=t._colorcache[e];
return!i&&(a=/^rgb\((\d+),(\d+),(\d+)\)$/i.exec(e))&&(t._colorcache[e]=i="#"+t._hex[a[1]]+t._hex[a[2]]+t._hex[a[3]]),i||e
},fill:function(a,i,n,r){var o=a.getElementsByTagName("fill")[0]||(o=a.appendChild(t.createElement("vml:fill"))),l=n[r].fillStyle,s=l&&l.type;
if(s||(s="solid"),!i.fill||!l||"solid"===s&&"none"===i.fill)o.on="false";else{if(o.on="true","solid"===s)o.type="solid",o.color=t.color(i.fill);
else{var c="lineargradient"===s;o.method="none";var m=l.stops,d=m.length;if(d>0){for(var p=[],r=0;d>r;r++){var h=m[r];
p.push(h.offset+"% "+t.color(h.color.color))}o.colors&&"object"==typeof o.colors?o.colors.value=p.join(","):o.colors=p.join(",")
}if(c){o.type="gradient";var u=-e.degrees(l.angle)%360;o.angle=0>u?u+360:u}else o.type="gradientTitle",o.focus="100%",o.focussize="0 0",o.focusposition="0 0",o.angle=0
}o.opacity=Math.min(parseFloat(i["fill-opacity"]||"1"),1)||"1"}},stroke:function(e,a){var i=e.getElementsByTagName("stroke")[0]||(i=e.appendChild(t.createElement("vml:stroke")));
if(a.stroke&&"none"!==a.stroke){var n=a["stroke-width"];if(n=null==n||""===n?1:+n,1e-10>n?n=0:1>n&&(n=1),n){i.on="true",i.weight=n,i.color=t.color(a.stroke)||"black",i.opacity=Math.min(parseFloat(a["stroke-opacity"]||"1"),1)||"1",i.joinstyle=t.joins[a["stroke-linejoin"]]||"miter",i.miterlimit=a["stroke-miterlimit"]||8,i.endcap=t.caps[a["stroke-linecap"]]||"flat";
var r=a["stroke-dasharray"];r&&"none"!==r||(r="Solid"),i.dashstyle=r}else i.on="false",i.weight=0
}else i.on="false",i.weight=0},path:function(e,a){var i=e.getElementsByTagName("path")[0]||(i=e.appendChild(t.createElement("vml:path")));
return arguments.length>1&&(i.v=t.rewritePath(a)),i},skew:function(e){var a=e.getElementsByTagName("skew")[0]||(a=e.appendChild(t.createElement("vml:skew")));
return a.on="false",a},rotateAndScale:function(a,i,n,r){i&&(i=e.radians(Math.round(e.degrees(i))%360));
var o=n&&1!==n||r&&1!==r;if(i||o){var l=t.skew(a);l.on="true",l.offset="0,0",n||(n=1),r||(r=1);
var s;if(i){var c=Math.cos(i),m=Math.sin(i);s=(n*c).toFixed(8)+","+(r*m).toFixed(8)+","+(n*-m).toFixed(8)+","+(r*c).toFixed(8)+",0,0"
}else s=n.toFixed(8)+",0,0,"+r.toFixed(8)+",0,0";return l.matrix=s,l}},textpath:function(e){var a=e.getElementsByTagName("textpath")[0]||(a=e.appendChild(t.createElement("vml:textpath")));
return a.style["v-text-align"]="center",a.style["v-text-kern"]="true",a.on="true",a
},init:function(){if(t.text_shim||(t.text_shim=document.getElementById("pv_vml_text_shim")||document.createElement("span"),t.text_shim.id="protovisvml_text_shim",t.text_shim.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline-block;white-space:nowrap;",document.body.appendChild(t.text_shim)),!t.styles){t.styles=document.getElementById("protovisvml_styles")||document.createElement("style"),t.styles.id="protovisvml_styles",document.documentElement.firstChild.appendChild(t.styles),t.styles.styleSheet.addRule(".msvml","behavior:url(#default#VML);"),t.styles.styleSheet.addRule(".msvml_block","position:absolute;top:0;left:0;");
try{document.namespaces.pvml||document.namespaces.add("pvml","urn:schemas-microsoft-com:vml")
}catch(e){t.pre="<",t.post=' class="msvml" xmlns="urn:schemas-microsoft.com:vml">'
}}},_pathcache:{},rewritePath:function(e){var a=0,i=0,n=t.round;if(!e)return e;if(e in t._pathcache)return t._pathcache[e];
e=e.replace(/(\d*)((\.*\d*)(e ?-?\d*))/g,"$1");for(var r=e.match(/([MLHVCSQTAZ ][^MLHVCSQTAZ ]*)/gi),o=[],l=[],s="",c=0,m=r.length;m>c;c++){var d=r[c],p=d.charAt(0),h=d.substring(1).split(/[,]/);
switch(" "==p&&(p=s),s=p,p){case"M":p="m",a=n(h[0]),i=n(h[1]),h=[a,i];break;case"m":p="m",a+=n(h[0]),i+=n(h[1]),h=[a,i];
break;case"A":p="l",h=[a=n(h[5]),i=n(h[6])];break;case"L":p="l",h=[a=n(h[0]),i=n(h[1])];
break;case"l":p="l",h=[a+=n(h[0]),i+=n(h[1])];break;case"H":p="l",h=[a=n(h[0]),i];
break;case"h":p="l",h=[a+=n(h[0]),i];break;case"V":p="l",h=[a,i=n(h[0])];break;case"v":p="l",h=[a,i+=n(h[0])];
break;case"C":p="c",l=h=[n(h[0]),n(h[1]),n(h[2]),n(h[3]),a=n(h[4]),i=n(h[5])];break;
case"c":p="c",l=h=[a+n(h[0]),i+n(h[1]),a+n(h[2]),i+n(h[3]),a+=n(h[4]),i+=n(h[5])];
break;case"S":p="c",l=h=[l[4]+(l[4]-l[2]),l[5]+(l[5]-l[3]),n(h[0]),n(h[1]),a=n(h[2]),i=n(h[3])];
break;case"s":p="c",l=h=[l[4]+(l[4]-l[2]),l[5]+(l[5]-l[3]),a+n(h[0]),i+n(h[1]),a+=n(h[2]),i+=n(h[3])];
break;case"Q":p="c";var u=n(h[0]),g=n(h[1]),f=n(h[2]),v=n(h[3]);h=[~~(a+2*(u-a)/3),~~(i+2*(g-i)/3),~~(u+(f-u)/3),~~(g+(v-g)/3),a=f,i=v];
break;case"q":p="l",a+=n(h[2]),i+=n(h[3]),h=[a,i];break;case"Z":case"z":p="xe",h=[];
break;default:p="",h=[]}o.push(p,h.join(","))}return t._pathcache[e]=o.join("")+"e"
}};e.Text.measure=t.text_dims,e.Vml=t,e.VmlScene={scale:1,events:["mousewheel","mousedown","mouseup","mouseover","mouseout","mousemove","click","dblclick","contextmenu"],mousePositionEventSet:e.Scene.mousePositionEventSet,eventsToNumber:e.Scene.eventsToNumber,numberToEvents:e.Scene.numberToEvents,implicit:{css:{}},copy_functions:function(t){for(var a in t)"function"!=typeof t[a]||a in e.VmlScene||(e.VmlScene[a]=t[a])
}},e.VmlScene.copy_functions(e.SvgScene),e.Scene=e.VmlScene,e.renderer=function(){return"vml"
},!function(t){e.VmlScene.minRuleLineWidth=t?1.2:1.1,e.VmlScene.minBarWidth=t?2.2:1.8,e.VmlScene.minBarHeight=t?2.2:1.8,e.VmlScene.minBarLineWidth=t?1.2:1
}(t.is64Bit),e.VmlScene.expect=function(e,a,i,n,r,o){o=o||{};var l=t.elm_defaults[a]||{},s=l.rewrite||a;
if(e){if(e.tagName.toUpperCase()!==s.toUpperCase()){var c=t.createElement(a);e.parentNode.replaceChild(c,e),e=c
}}else e=t.createElement(a);if(r&&("attr"in l&&l.attr(r,o,e,i,n),r.cursor in t.cursorstyles)){var m=t.cursorstyles[r.cursor];
o.cursor=1===m?r.cursor:m}return o&&this.setStyle(e,o),e},e.VmlScene.removeSiblings=function(e){for(;e;){var t=e.nextSibling;
e.parentNode.removeChild(e),e=t}},e.VmlScene.addFillStyleDefinition=function(){},e.VmlScene.setAttributes=function(){},e.VmlScene.setStyle=function(e,t){var a=e.__style__;
a===t&&(a=null);var i=e.style;for(var n in t){var r=t[n];a&&r===a[n]||(null==r?i.removeAttribute(n):i[n]=r)
}e.__style__=t},e.VmlScene.append=function(e,t,a){return e.$scene={scenes:t,index:a},e=this.title(e,t[a]),e.parentNode&&11!==e.parentNode.nodeType||t.$g.appendChild(e),e.nextSibling
},e.VmlScene.title=function(e,t){return e.title=t.title||"",e},e.VmlScene.panel=function(e){for(var a,i=e.$g,n=i&&i.firstChild,r=!1,o=0,l=e.length;l>o;o++){var s=e[o];
if(s.visible){if(!e.parent){var c=s.canvas;if(a=c.style,a.display="inline-block",a.zoom=1,i&&i.parentNode!==c&&(i=c.firstChild,n=i&&i.firstChild),!i){r=!0,t.init(),i=c.appendChild(t.createElement("svg")),i.unselectable="on",i.onselectstart=function(){return!1
};for(var m=this.events,d=this.dispatch,p=0,h=m.length;h>p;p++)i.addEventListener?i.addEventListener(m[p],d,!1):i.attachEvent("on"+m[p],d);
n=i.firstChild}e.$g=i;var u=s.width+s.left+s.right,g=s.height+s.top+s.bottom;a=i.style,a.width=u+"px",a.height=g+"px",a.clip="rect(0px "+u+"px "+g+"px 0px)"
}var f;"hidden"===s.overflow&&(f=this.expect(n,"g",e,o),f.style.position="absolute",f.style.clip="rect("+s.top.toFixed(2)+"px "+(s.left+s.width).toFixed(2)+"px "+(s.top+s.height).toFixed(2)+"px "+s.left.toFixed(2)+"px)",f.parentNode||i.appendChild(f),e.$g=i=f,n=f.firstChild),n=this.fill(n,e,o);
var v=this.scale,y=s.transform,x=s.left+y.x,b=s.top+y.y;if(this.scale*=y.k,s.children.length)for(var k={transform:"translate("+x+","+b+")"+(1!=y.k?" scale("+y.k+")":"")},w=this.getSortedChildScenes(e,o),p=0,S=w.length;S>p;p++){var _=w[p];
_.$g=n=this.expect(n,"g",e,o,k),this.updateAll(_);var E=n.parentNode;if(!E||11===E.nodeType){i.appendChild(n);
var C=t.elm_defaults[n.svgtype];C&&"function"==typeof C.onappend&&C.onappend(n,e[o])
}n=n.nextSibling}this.scale=v,n=this.stroke(n,e,o),f&&(e.$g=i=f.parentNode,n=f.nextSibling)
}}return r&&(this.removeSiblings(n),n=i.appendChild(t.createElement("oval"))),n},e.VmlScene.parseDasharray=function(e){var t=e.strokeDasharray;
if(t&&"none"!==t){var a=this.translateDashStyleAlias(t);this.isStandardDashStyle(a)?t=a:(t=t.split(/[\s,]+/).map(function(e){return+e/this.scale
},this),t.length%2&&(t=t.concat(t)),t=t.join(" "))}else t=null;return t},e.VmlScene.create=function(e){return t.createElement(e)
},!function(){function e(e){e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=i,(e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault())&&(this.isDefaultPrevented=a),this.timeStamp=e.timeStamp||Date.now()):(this.type=e,this.timeStamp=Date.now())
}var a=function(){return!0},i=function(){return!1},n=["altKey","attrChange","attrName","bubbles","button","cancelable","charCode","clientX","clientY","ctrlKey","currentTarget","data","detail","eventPhase","fromElement","handler","keyCode","layerX","layerY","metaKey","newValue","offsetX","offsetY","pageX","pageY","prevValue","relatedNode","relatedTarget","screenX","screenY","shiftKey","srcElement","target","toElement","view","wheelDelta","which"],r=n.length;
e.prototype={preventDefault:function(){this.isDefaultPrevented=a;var e=this.originalEvent;
e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=a;
var e=this.originalEvent;e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=a,this.stopPropagation()
},isDefaultPrevented:i,isPropagationStopped:i,isImmediatePropagationStopped:i};var o=document.compatMode&&"BackCompat"!=document.compatMode?"documentElement":"body";
t.fixEvent=function(t){var a=t;t=new e(a);for(var i=t.type,l="keypress"===i,s=r;s;){var c=n[--s];
t[c]=a[c]}var m=t.target;m||(m=t.srcElement||document,3===m.nodeType&&(m=m.parentNode),t.target=m);
var d;if(!t.relatedTarget&&(d=t.fromElement)&&(t.relatedTarget=d===m?t.toElement:d),!l){var p;
if(null==t.pageX&&null!=(p=t.clientX)){var h=document[o];t.pageX=p+(h.scrollLeft||0)-(h.clientLeft||0),t.pageY=t.clientY+(h.scrollTop||0)-(h.clientTop||0)
}}if(null==t.which){var u,g,f;l?null!=(u=t.charCode)?t.which=u:null!=(g=t.keyCode)&&(t.which=g):null!==(f=t.button)&&(t.which=1&f?1:2&f?3:4&f?2:0)
}return t.metaKey=!!t.metaKey,"mousewheel"===i&&(t.wheel=t.wheelDelta),t}}(),e.fixEvent=function(e){return t.fixEvent(e||window.event)
},e.VmlScene.dispatch=e.listener(function(t){var a=t.target.$scene;if(a){var i=t.target._events;
("none"===i||e.Mark.dispatch(t.type,a.scenes,a.index,t))&&(t.preventDefault(),t.stopPropagation())
}}),e.VmlScene.image=function(e){for(var t=e.$g.firstChild,a=0;a<e.length;a++){var i=e[a];
if(i.visible){if(t=this.fill(t,e,a),i.image);else{t=new Image,t.src=i.url;var n=t.style;
n.position="absolute",n.top=i.top,n.left=i.left,n.width=i.width,n.height=i.height,n.cursor=i.cursor,n.msInterpolationMode="bicubic"
}t=this.append(t,e,a),t=this.stroke(t,e,a)}}return t},e.VmlScene.label=function(e){for(var a=e.$g.firstChild,i=0,n=e.length;n>i;i++){var r=e[i];
if(r.visible){var o=r.textStyle;if(o.opacity&&r.text){var l=r.text.replace(/\s+/g," "),s=t.processFont(r.font),c=t.text_dims(l,s),m=0,d=0;
switch(r.textBaseline){case"middle":d=.1*c.height;break;case"top":d=r.textMargin+.5*c.height;
break;case"bottom":d=-(r.textMargin+.5*c.height)}switch(r.textAlign){case"left":m=r.textMargin;
break;case"right":m=-r.textMargin}var p=r.textAngle;if(p){var h=Math.cos(p),u=Math.sin(p),g=m*h-d*u,f=m*u+d*h;
m=g,d=f}var v=r.left+m,y=r.top+d,x={};r.cursor&&(x.cursor=r.cursor),x.fill=t.color(o.color)||"black",t.is64Bit&&(x["fill-opacity"]=.7),x.x=v,x.y=y,x.rotation=r.textAngle,x.string=l,x.textAlign=r.textAlign,x.font=s,x.textDecoration=r.textDecoration,a=this.expect(a,"text",e,i,x,{display:"block",lineHeight:1,whiteSpace:"nowrap",zoom:1,position:"absolute",cursor:"default",top:y+"px",left:v+"px"}),a=this.append(a,e,i)
}}}return a},e.VmlScene.wedge=function(e){for(var a=e.$g.firstChild,i=t.round,n=0,r=e.length;r>n;n++){var o=e[n];
if(o.visible){var l=o.fillStyle,s=o.strokeStyle;if(l.opacity||s.opacity){a=this.expect(a,"path",e,n,{"pointer-events":o.events,cursor:o.cursor,transform:"translate("+o.left+","+o.top+")",d:"",fill:l.color,"fill-rule":"evenodd","fill-opacity":l.opacity||null,stroke:s.color,"stroke-opacity":s.opacity||null,"stroke-width":s.opacity?o.lineWidth/this.scale:null,"stroke-linecap":o.lineCap,"stroke-linejoin":o.lineJoin,"stroke-miterlimit":o.strokeMiterLimit,"stroke-dasharray":s.opacity?this.parseDasharray(o):null});
var c=a.getElementsByTagName("path")[0];c||(c=t.make("path"),a.appendChild(c));var m,d=i(o.innerRadius),p=i(o.outerRadius);
if(o.angle>=2*Math.PI)m=d?"AE0,0 "+p+","+p+" 0 23592960AL0,0 "+d+","+d+" 0 23592960":"AE0,0 "+p+","+p+" 0 23592960";
else{var h=Math.round(o.startAngle/Math.PI*11796480),u=Math.round(o.angle/Math.PI*11796480);
m=d?"AE 0,0 "+p+","+p+" "+-h+" "+-u+" 0,0 "+d+","+d+" "+-(h+u)+" "+u+"X":"M0,0AE0,0 "+p+","+p+" "+-h+" "+-u+"X"
}c.v=m,a=this.append(a,e,n)}}}return a}}(),e});