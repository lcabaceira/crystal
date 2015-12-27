var OpenLayers={VERSION_NUMBER:"Release 2.13.1",singleFile:!0,_getScriptLocation:function(){for(var e,t=/(^|(.*?\/))(OpenLayers[^\/]*?\.js)(\?|$)/,i=document.getElementsByTagName("script"),r="",s=0,n=i.length;n>s;s++)if((e=i[s].getAttribute("src"))&&(e=e.match(t))){r=e[1];
break}return function(){return r}}(),ImgPath:""};OpenLayers.Class=function(){var e=arguments.length,t=arguments[0],i=arguments[e-1],r="function"==typeof i.initialize?i.initialize:function(){t.prototype.initialize.apply(this,arguments)
};return e>1?(e=[r,t].concat(Array.prototype.slice.call(arguments).slice(1,e-1),i),OpenLayers.inherit.apply(null,e)):r.prototype=i,r
},OpenLayers.inherit=function(e,t){var i=function(){};i.prototype=t.prototype,e.prototype=new i;
var r,s,i=2;for(r=arguments.length;r>i;i++)s=arguments[i],"function"==typeof s&&(s=s.prototype),OpenLayers.Util.extend(e.prototype,s)
},OpenLayers.Util=OpenLayers.Util||{},OpenLayers.Util.extend=function(e,t){if(e=e||{},t){for(var i in t){var r=t[i];
void 0!==r&&(e[i]=r)}"function"==typeof window.Event&&t instanceof window.Event||!t.hasOwnProperty||!t.hasOwnProperty("toString")||(e.toString=t.toString)
}return e},OpenLayers.String={startsWith:function(e,t){return 0==e.indexOf(t)},contains:function(e,t){return-1!=e.indexOf(t)
},trim:function(e){return e.replace(/^\s\s*/,"").replace(/\s\s*$/,"")},camelize:function(e){e=e.split("-");
for(var t=e[0],i=1,r=e.length;r>i;i++)var s=e[i],t=t+(s.charAt(0).toUpperCase()+s.substring(1));
return t},format:function(e,t,i){return t||(t=window),e.replace(OpenLayers.String.tokenRegEx,function(e,r){for(var s,n=r.split(/\.+/),a=0;a<n.length&&(0==a&&(s=t),void 0!==s);a++)s=s[n[a]];
return"function"==typeof s&&(s=i?s.apply(null,i):s()),"undefined"==typeof s?"undefined":s
})},tokenRegEx:/\$\{([\w.]+?)\}/g,numberRegEx:/^([+-]?)(?=\d|\.\d)\d*(\.\d*)?([Ee]([+-]?\d+))?$/,isNumeric:function(e){return OpenLayers.String.numberRegEx.test(e)
},numericIf:function(e,t){var i=e;return!0===t&&null!=e&&e.replace&&(e=e.replace(/^\s*|\s*$/g,"")),OpenLayers.String.isNumeric(e)?parseFloat(e):i
}},OpenLayers.Number={decimalSeparator:".",thousandsSeparator:",",limitSigDigs:function(e,t){var i=0;
return t>0&&(i=parseFloat(e.toPrecision(t))),i},format:function(e,t,i,r){t="undefined"!=typeof t?t:0,i="undefined"!=typeof i?i:OpenLayers.Number.thousandsSeparator,r="undefined"!=typeof r?r:OpenLayers.Number.decimalSeparator,null!=t&&(e=parseFloat(e.toFixed(t)));
var s=e.toString().split(".");if(1==s.length&&null==t&&(t=0),e=s[0],i)for(var n=/(-?[0-9]+)([0-9]{3})/;n.test(e);)e=e.replace(n,"$1"+i+"$2");
return 0==t?t=e:(i=1<s.length?s[1]:"0",null!=t&&(i+=Array(t-i.length+1).join("0")),t=e+r+i),t
},zeroPad:function(e,t,i){for(e=e.toString(i||10);e.length<t;)e="0"+e;return e}},OpenLayers.Function={bind:function(e,t){var i=Array.prototype.slice.apply(arguments,[2]);
return function(){var r=i.concat(Array.prototype.slice.apply(arguments,[0]));return e.apply(t,r)
}},bindAsEventListener:function(e,t){return function(i){return e.call(t,i||window.event)
}},False:function(){return!1},True:function(){return!0},Void:function(){}},OpenLayers.Array={filter:function(e,t,i){var r=[];
if(Array.prototype.filter)r=e.filter(t,i);else{var s=e.length;if("function"!=typeof t)throw new TypeError;
for(var n=0;s>n;n++)if(n in e){var a=e[n];t.call(i,a,n,e)&&r.push(a)}}return r}},OpenLayers.Bounds=OpenLayers.Class({left:null,bottom:null,right:null,top:null,centerLonLat:null,initialize:function(e,t,i,r){OpenLayers.Util.isArray(e)&&(r=e[3],i=e[2],t=e[1],e=e[0]),null!=e&&(this.left=OpenLayers.Util.toFloat(e)),null!=t&&(this.bottom=OpenLayers.Util.toFloat(t)),null!=i&&(this.right=OpenLayers.Util.toFloat(i)),null!=r&&(this.top=OpenLayers.Util.toFloat(r))
},clone:function(){return new OpenLayers.Bounds(this.left,this.bottom,this.right,this.top)
},equals:function(e){var t=!1;return null!=e&&(t=this.left==e.left&&this.right==e.right&&this.top==e.top&&this.bottom==e.bottom),t
},toString:function(){return[this.left,this.bottom,this.right,this.top].join()},toArray:function(e){return!0===e?[this.bottom,this.left,this.top,this.right]:[this.left,this.bottom,this.right,this.top]
},toBBOX:function(e,t){null==e&&(e=6);var i=Math.pow(10,e),r=Math.round(this.left*i)/i,s=Math.round(this.bottom*i)/i,n=Math.round(this.right*i)/i,i=Math.round(this.top*i)/i;
return!0===t?s+","+r+","+i+","+n:r+","+s+","+n+","+i},toGeometry:function(){return new OpenLayers.Geometry.Polygon([new OpenLayers.Geometry.LinearRing([new OpenLayers.Geometry.Point(this.left,this.bottom),new OpenLayers.Geometry.Point(this.right,this.bottom),new OpenLayers.Geometry.Point(this.right,this.top),new OpenLayers.Geometry.Point(this.left,this.top)])])
},getWidth:function(){return this.right-this.left},getHeight:function(){return this.top-this.bottom
},getSize:function(){return new OpenLayers.Size(this.getWidth(),this.getHeight())
},getCenterPixel:function(){return new OpenLayers.Pixel((this.left+this.right)/2,(this.bottom+this.top)/2)
},getCenterLonLat:function(){return this.centerLonLat||(this.centerLonLat=new OpenLayers.LonLat((this.left+this.right)/2,(this.bottom+this.top)/2)),this.centerLonLat
},scale:function(e,t){null==t&&(t=this.getCenterLonLat());var i,r;return"OpenLayers.LonLat"==t.CLASS_NAME?(i=t.lon,r=t.lat):(i=t.x,r=t.y),new OpenLayers.Bounds((this.left-i)*e+i,(this.bottom-r)*e+r,(this.right-i)*e+i,(this.top-r)*e+r)
},add:function(e,t){if(null==e||null==t)throw new TypeError("Bounds.add cannot receive null values");
return new OpenLayers.Bounds(this.left+e,this.bottom+t,this.right+e,this.top+t)},extend:function(e){if(e)switch(e.CLASS_NAME){case"OpenLayers.LonLat":this.extendXY(e.lon,e.lat);
break;case"OpenLayers.Geometry.Point":this.extendXY(e.x,e.y);break;case"OpenLayers.Bounds":this.centerLonLat=null,(null==this.left||e.left<this.left)&&(this.left=e.left),(null==this.bottom||e.bottom<this.bottom)&&(this.bottom=e.bottom),(null==this.right||e.right>this.right)&&(this.right=e.right),(null==this.top||e.top>this.top)&&(this.top=e.top)
}},extendXY:function(e,t){this.centerLonLat=null,(null==this.left||e<this.left)&&(this.left=e),(null==this.bottom||t<this.bottom)&&(this.bottom=t),(null==this.right||e>this.right)&&(this.right=e),(null==this.top||t>this.top)&&(this.top=t)
},containsLonLat:function(e,t){"boolean"==typeof t&&(t={inclusive:t}),t=t||{};var i=this.contains(e.lon,e.lat,t.inclusive),r=t.worldBounds;
return r&&!i&&(i=r.getWidth(),r=Math.round((e.lon-(r.left+r.right)/2)/i),i=this.containsLonLat({lon:e.lon-r*i,lat:e.lat},{inclusive:t.inclusive})),i
},containsPixel:function(e,t){return this.contains(e.x,e.y,t)},contains:function(e,t,i){if(null==i&&(i=!0),null==e||null==t)return!1;
e=OpenLayers.Util.toFloat(e),t=OpenLayers.Util.toFloat(t);var r=!1;return r=i?e>=this.left&&e<=this.right&&t>=this.bottom&&t<=this.top:e>this.left&&e<this.right&&t>this.bottom&&t<this.top
},intersectsBounds:function(e,t){if("boolean"==typeof t&&(t={inclusive:t}),t=t||{},t.worldBounds){var i=this.wrapDateLine(t.worldBounds);
e=e.wrapDateLine(t.worldBounds)}else i=this;null==t.inclusive&&(t.inclusive=!0);var r=!1,s=i.left==e.right||i.right==e.left||i.top==e.bottom||i.bottom==e.top;
if(t.inclusive||!s)var r=e.top>=i.bottom&&e.top<=i.top||i.top>e.bottom&&i.top<e.top,s=e.left>=i.left&&e.left<=i.right||i.left>=e.left&&i.left<=e.right,n=e.right>=i.left&&e.right<=i.right||i.right>=e.left&&i.right<=e.right,r=(e.bottom>=i.bottom&&e.bottom<=i.top||i.bottom>=e.bottom&&i.bottom<=e.top||r)&&(s||n);
if(t.worldBounds&&!r){var a=t.worldBounds,s=a.getWidth(),n=!a.containsBounds(i),a=!a.containsBounds(e);
n&&!a?(e=e.add(-s,0),r=i.intersectsBounds(e,{inclusive:t.inclusive})):a&&!n&&(i=i.add(-s,0),r=e.intersectsBounds(i,{inclusive:t.inclusive}))
}return r},containsBounds:function(e,t,i){null==t&&(t=!1),null==i&&(i=!0);var r=this.contains(e.left,e.bottom,i),s=this.contains(e.right,e.bottom,i),n=this.contains(e.left,e.top,i);
return e=this.contains(e.right,e.top,i),t?r||s||n||e:r&&s&&n&&e},determineQuadrant:function(e){var t="",i=this.getCenterLonLat(),t=t+(e.lat<i.lat?"b":"t");
return t+=e.lon<i.lon?"l":"r"},transform:function(e,t){this.centerLonLat=null;var i=OpenLayers.Projection.transform({x:this.left,y:this.bottom},e,t),r=OpenLayers.Projection.transform({x:this.right,y:this.bottom},e,t),s=OpenLayers.Projection.transform({x:this.left,y:this.top},e,t),n=OpenLayers.Projection.transform({x:this.right,y:this.top},e,t);
return this.left=Math.min(i.x,s.x),this.bottom=Math.min(i.y,r.y),this.right=Math.max(r.x,n.x),this.top=Math.max(s.y,n.y),this
},wrapDateLine:function(e,t){t=t||{};var i=t.leftTolerance||0,r=t.rightTolerance||0,s=this.clone();
if(e){for(var n=e.getWidth();s.left<e.left&&s.right-r<=e.left;)s=s.add(n,0);for(;s.left+i>=e.right&&s.right>e.right;)s=s.add(-n,0);
i=s.left+i,i<e.right&&i>e.left&&s.right-r>e.right&&(s=s.add(-n,0))}return s},CLASS_NAME:"OpenLayers.Bounds"}),OpenLayers.Bounds.fromString=function(e,t){var i=e.split(",");
return OpenLayers.Bounds.fromArray(i,t)},OpenLayers.Bounds.fromArray=function(e,t){return!0===t?new OpenLayers.Bounds(e[1],e[0],e[3],e[2]):new OpenLayers.Bounds(e[0],e[1],e[2],e[3])
},OpenLayers.Bounds.fromSize=function(e){return new OpenLayers.Bounds(0,e.h,e.w,0)
},OpenLayers.Bounds.oppositeQuadrant=function(e){var t;return t=""+("t"==e.charAt(0)?"b":"t"),t+="l"==e.charAt(1)?"r":"l"
},OpenLayers.Element={visible:function(e){return"none"!=OpenLayers.Util.getElement(e).style.display
},toggle:function(){for(var e=0,t=arguments.length;t>e;e++){var i=OpenLayers.Util.getElement(arguments[e]),r=OpenLayers.Element.visible(i)?"none":"";
i.style.display=r}},remove:function(e){e=OpenLayers.Util.getElement(e),e.parentNode.removeChild(e)
},getHeight:function(e){return e=OpenLayers.Util.getElement(e),e.offsetHeight},hasClass:function(e,t){var i=e.className;
return!!i&&RegExp("(^|\\s)"+t+"(\\s|$)").test(i)},addClass:function(e,t){return OpenLayers.Element.hasClass(e,t)||(e.className+=(e.className?" ":"")+t),e
},removeClass:function(e,t){var i=e.className;return i&&(e.className=OpenLayers.String.trim(i.replace(RegExp("(^|\\s+)"+t+"(\\s+|$)")," "))),e
},toggleClass:function(e,t){return OpenLayers.Element.hasClass(e,t)?OpenLayers.Element.removeClass(e,t):OpenLayers.Element.addClass(e,t),e
},getStyle:function(e,t){e=OpenLayers.Util.getElement(e);var i=null;if(e&&e.style){i=e.style[OpenLayers.String.camelize(t)],i||(document.defaultView&&document.defaultView.getComputedStyle?i=(i=document.defaultView.getComputedStyle(e,null))?i.getPropertyValue(t):null:e.currentStyle&&(i=e.currentStyle[OpenLayers.String.camelize(t)]));
var r=["left","top","right","bottom"];window.opera&&-1!=OpenLayers.Util.indexOf(r,t)&&"static"==OpenLayers.Element.getStyle(e,"position")&&(i="auto")
}return"auto"==i?null:i}},OpenLayers.LonLat=OpenLayers.Class({lon:0,lat:0,initialize:function(e,t){OpenLayers.Util.isArray(e)&&(t=e[1],e=e[0]),this.lon=OpenLayers.Util.toFloat(e),this.lat=OpenLayers.Util.toFloat(t)
},toString:function(){return"lon="+this.lon+",lat="+this.lat},toShortString:function(){return this.lon+", "+this.lat
},clone:function(){return new OpenLayers.LonLat(this.lon,this.lat)},add:function(e,t){if(null==e||null==t)throw new TypeError("LonLat.add cannot receive null values");
return new OpenLayers.LonLat(this.lon+OpenLayers.Util.toFloat(e),this.lat+OpenLayers.Util.toFloat(t))
},equals:function(e){var t=!1;return null!=e&&(t=this.lon==e.lon&&this.lat==e.lat||isNaN(this.lon)&&isNaN(this.lat)&&isNaN(e.lon)&&isNaN(e.lat)),t
},transform:function(e,t){var i=OpenLayers.Projection.transform({x:this.lon,y:this.lat},e,t);
return this.lon=i.x,this.lat=i.y,this},wrapDateLine:function(e){var t=this.clone();
if(e){for(;t.lon<e.left;)t.lon+=e.getWidth();for(;t.lon>e.right;)t.lon-=e.getWidth()
}return t},CLASS_NAME:"OpenLayers.LonLat"}),OpenLayers.LonLat.fromString=function(e){return e=e.split(","),new OpenLayers.LonLat(e[0],e[1])
},OpenLayers.LonLat.fromArray=function(e){var t=OpenLayers.Util.isArray(e);return new OpenLayers.LonLat(t&&e[0],t&&e[1])
},OpenLayers.Pixel=OpenLayers.Class({x:0,y:0,initialize:function(e,t){this.x=parseFloat(e),this.y=parseFloat(t)
},toString:function(){return"x="+this.x+",y="+this.y},clone:function(){return new OpenLayers.Pixel(this.x,this.y)
},equals:function(e){var t=!1;return null!=e&&(t=this.x==e.x&&this.y==e.y||isNaN(this.x)&&isNaN(this.y)&&isNaN(e.x)&&isNaN(e.y)),t
},distanceTo:function(e){return Math.sqrt(Math.pow(this.x-e.x,2)+Math.pow(this.y-e.y,2))
},add:function(e,t){if(null==e||null==t)throw new TypeError("Pixel.add cannot receive null values");
return new OpenLayers.Pixel(this.x+e,this.y+t)},offset:function(e){var t=this.clone();
return e&&(t=this.add(e.x,e.y)),t},CLASS_NAME:"OpenLayers.Pixel"}),OpenLayers.Size=OpenLayers.Class({w:0,h:0,initialize:function(e,t){this.w=parseFloat(e),this.h=parseFloat(t)
},toString:function(){return"w="+this.w+",h="+this.h},clone:function(){return new OpenLayers.Size(this.w,this.h)
},equals:function(e){var t=!1;return null!=e&&(t=this.w==e.w&&this.h==e.h||isNaN(this.w)&&isNaN(this.h)&&isNaN(e.w)&&isNaN(e.h)),t
},CLASS_NAME:"OpenLayers.Size"}),OpenLayers.Console={log:function(){},debug:function(){},info:function(){},warn:function(){},error:function(){},userError:function(e){alert(e)
},assert:function(){},dir:function(){},dirxml:function(){},trace:function(){},group:function(){},groupEnd:function(){},time:function(){},timeEnd:function(){},profile:function(){},profileEnd:function(){},count:function(){},CLASS_NAME:"OpenLayers.Console"},function(){for(var e=document.getElementsByTagName("script"),t=0,i=e.length;i>t;++t)if(-1!=e[t].src.indexOf("firebug.js")&&console){OpenLayers.Util.extend(OpenLayers.Console,console);
break}}(),OpenLayers.Lang={code:null,defaultCode:"en",getCode:function(){return OpenLayers.Lang.code||OpenLayers.Lang.setCode(),OpenLayers.Lang.code
},setCode:function(e){var t;if(e||(e="msie"==OpenLayers.BROWSER_NAME?navigator.userLanguage:navigator.language),e=e.split("-"),e[0]=e[0].toLowerCase(),"object"==typeof OpenLayers.Lang[e[0]]&&(t=e[0]),e[1]){var i=e[0]+"-"+e[1].toUpperCase();
"object"==typeof OpenLayers.Lang[i]&&(t=i)}t||(OpenLayers.Console.warn("Failed to find OpenLayers.Lang."+e.join("-")+" dictionary, falling back to default language"),t=OpenLayers.Lang.defaultCode),OpenLayers.Lang.code=t
},translate:function(e,t){var i=OpenLayers.Lang[OpenLayers.Lang.getCode()];return(i=i&&i[e])||(i=e),t&&(i=OpenLayers.String.format(i,t)),i
}},OpenLayers.i18n=OpenLayers.Lang.translate,OpenLayers.Util=OpenLayers.Util||{},OpenLayers.Util.getElement=function(){for(var e=[],t=0,i=arguments.length;i>t;t++){var r=arguments[t];
if("string"==typeof r&&(r=document.getElementById(r)),1==arguments.length)return r;
e.push(r)}return e},OpenLayers.Util.isElement=function(e){return!(!e||1!==e.nodeType)
},OpenLayers.Util.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)
},OpenLayers.Util.removeItem=function(e,t){for(var i=e.length-1;i>=0;i--)e[i]==t&&e.splice(i,1);
return e},OpenLayers.Util.indexOf=function(e,t){if("function"==typeof e.indexOf)return e.indexOf(t);
for(var i=0,r=e.length;r>i;i++)if(e[i]==t)return i;return-1},OpenLayers.Util.dotless=/\./g,OpenLayers.Util.modifyDOMElement=function(e,t,i,r,s,n,a,o){t&&(e.id=t.replace(OpenLayers.Util.dotless,"_")),i&&(e.style.left=i.x+"px",e.style.top=i.y+"px"),r&&(e.style.width=r.w+"px",e.style.height=r.h+"px"),s&&(e.style.position=s),n&&(e.style.border=n),a&&(e.style.overflow=a),0<=parseFloat(o)&&1>parseFloat(o)?(e.style.filter="alpha(opacity="+100*o+")",e.style.opacity=o):1==parseFloat(o)&&(e.style.filter="",e.style.opacity="")
},OpenLayers.Util.createDiv=function(e,t,i,r,s,n,a,o){var l=document.createElement("div");
return r&&(l.style.backgroundImage="url("+r+")"),e||(e=OpenLayers.Util.createUniqueID("OpenLayersDiv")),s||(s="absolute"),OpenLayers.Util.modifyDOMElement(l,e,t,i,s,n,a,o),l
},OpenLayers.Util.createImage=function(e,t,i,r,s,n,a,o){var l=document.createElement("img");
return e||(e=OpenLayers.Util.createUniqueID("OpenLayersDiv")),s||(s="relative"),OpenLayers.Util.modifyDOMElement(l,e,t,i,s,n,null,a),o&&(l.style.display="none",t=function(){l.style.display="",OpenLayers.Event.stopObservingElement(l)
},OpenLayers.Event.observe(l,"load",t),OpenLayers.Event.observe(l,"error",t)),l.style.alt=e,l.galleryImg="no",r&&(l.src=r),l
},OpenLayers.IMAGE_RELOAD_ATTEMPTS=0,OpenLayers.Util.alphaHackNeeded=null,OpenLayers.Util.alphaHack=function(){if(null==OpenLayers.Util.alphaHackNeeded){var e=navigator.appVersion.split("MSIE"),e=parseFloat(e[1]),t=!1;
try{t=!!document.body.filters}catch(i){}OpenLayers.Util.alphaHackNeeded=t&&e>=5.5&&7>e
}return OpenLayers.Util.alphaHackNeeded},OpenLayers.Util.modifyAlphaImageDiv=function(e,t,i,r,s,n,a,o,l){OpenLayers.Util.modifyDOMElement(e,t,i,r,n,null,null,l),t=e.childNodes[0],s&&(t.src=s),OpenLayers.Util.modifyDOMElement(t,e.id+"_innerImage",null,r,"relative",a),OpenLayers.Util.alphaHack()&&("none"!=e.style.display&&(e.style.display="inline-block"),null==o&&(o="scale"),e.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+t.src+"', sizingMethod='"+o+"')",0<=parseFloat(e.style.opacity)&&1>parseFloat(e.style.opacity)&&(e.style.filter+=" alpha(opacity="+100*e.style.opacity+")"),t.style.filter="alpha(opacity=0)")
},OpenLayers.Util.createAlphaImageDiv=function(e,t,i,r,s,n,a,o,l){var h=OpenLayers.Util.createDiv();
return l=OpenLayers.Util.createImage(null,null,null,null,null,null,null,l),l.className="olAlphaImg",h.appendChild(l),OpenLayers.Util.modifyAlphaImageDiv(h,e,t,i,r,s,n,a,o),h
},OpenLayers.Util.upperCaseObject=function(e){var t,i={};for(t in e)i[t.toUpperCase()]=e[t];
return i},OpenLayers.Util.applyDefaults=function(e,t){e=e||{};var i,r="function"==typeof window.Event&&t instanceof window.Event;
for(i in t)(void 0===e[i]||!r&&t.hasOwnProperty&&t.hasOwnProperty(i)&&!e.hasOwnProperty(i))&&(e[i]=t[i]);
return!r&&t&&t.hasOwnProperty&&t.hasOwnProperty("toString")&&!e.hasOwnProperty("toString")&&(e.toString=t.toString),e
},OpenLayers.Util.getParameterString=function(e){var t,i=[];for(t in e){var r=e[t];
if(null!=r&&"function"!=typeof r){if("object"==typeof r&&r.constructor==Array){for(var s,n=[],a=0,o=r.length;o>a;a++)s=r[a],n.push(encodeURIComponent(null===s||void 0===s?"":s));
r=n.join(",")}else r=encodeURIComponent(r);i.push(encodeURIComponent(t)+"="+r)}}return i.join("&")
},OpenLayers.Util.urlAppend=function(e,t){var i=e;if(t)var r=(e+" ").split(/[?&]/),i=i+(" "===r.pop()?t:r.length?"&"+t:"?"+t);
return i},OpenLayers.Util.getImagesLocation=function(){return OpenLayers.ImgPath||OpenLayers._getScriptLocation()+"img/"
},OpenLayers.Util.getImageLocation=function(e){return OpenLayers.Util.getImagesLocation()+e
},OpenLayers.Util.Try=function(){for(var e=null,t=0,i=arguments.length;i>t;t++){var r=arguments[t];
try{e=r();break}catch(s){}}return e},OpenLayers.Util.getXmlNodeValue=function(e){var t=null;
return OpenLayers.Util.Try(function(){t=e.text,t||(t=e.textContent),t||(t=e.firstChild.nodeValue)
},function(){t=e.textContent}),t},OpenLayers.Util.mouseLeft=function(e,t){for(var i=e.relatedTarget?e.relatedTarget:e.toElement;i!=t&&null!=i;)i=i.parentNode;
return i!=t},OpenLayers.Util.DEFAULT_PRECISION=14,OpenLayers.Util.toFloat=function(e,t){return null==t&&(t=OpenLayers.Util.DEFAULT_PRECISION),"number"!=typeof e&&(e=parseFloat(e)),0===t?e:parseFloat(e.toPrecision(t))
},OpenLayers.Util.rad=function(e){return e*Math.PI/180},OpenLayers.Util.deg=function(e){return 180*e/Math.PI
},OpenLayers.Util.VincentyConstants={a:6378137,b:6356752.3142,f:1/298.257223563},OpenLayers.Util.distVincenty=function(e,t){for(var i=OpenLayers.Util.VincentyConstants,r=i.a,s=i.b,i=i.f,n=OpenLayers.Util.rad(t.lon-e.lon),a=Math.atan((1-i)*Math.tan(OpenLayers.Util.rad(e.lat))),o=Math.atan((1-i)*Math.tan(OpenLayers.Util.rad(t.lat))),l=Math.sin(a),a=Math.cos(a),h=Math.sin(o),o=Math.cos(o),p=n,u=2*Math.PI,c=20;1e-12<Math.abs(p-u)&&0<--c;){var y=Math.sin(p),d=Math.cos(p),m=Math.sqrt(o*y*o*y+(a*h-l*o*d)*(a*h-l*o*d));
if(0==m)return 0;var d=l*h+a*o*d,f=Math.atan2(m,d),g=Math.asin(a*o*y/m),L=Math.cos(g)*Math.cos(g),y=d-2*l*h/L,v=i/16*L*(4+i*(4-3*L)),u=p,p=n+(1-v)*i*Math.sin(g)*(f+v*m*(y+v*d*(-1+2*y*y)))
}return 0==c?0/0:(r=L*(r*r-s*s)/(s*s),i=r/1024*(256+r*(-128+r*(74-47*r))),(s*(1+r/16384*(4096+r*(-768+r*(320-175*r))))*(f-i*m*(y+i/4*(d*(-1+2*y*y)-i/6*y*(-3+4*m*m)*(-3+4*y*y))))).toFixed(3)/1e3)
},OpenLayers.Util.destinationVincenty=function(e,t,i){var r=OpenLayers.Util,s=r.VincentyConstants,n=s.a,a=s.b,o=s.f,s=e.lon;
e=e.lat;var l=r.rad(t);t=Math.sin(l),l=Math.cos(l),e=(1-o)*Math.tan(r.rad(e));var h=1/Math.sqrt(1+e*e),p=e*h,u=Math.atan2(e,l);
e=h*t;for(var c=1-e*e,n=c*(n*n-a*a)/(a*a),y=1+n/16384*(4096+n*(-768+n*(320-175*n))),d=n/1024*(256+n*(-128+n*(74-47*n))),n=i/(a*y),m=2*Math.PI;1e-12<Math.abs(n-m);)var f=Math.cos(2*u+n),g=Math.sin(n),L=Math.cos(n),v=d*g*(f+d/4*(L*(-1+2*f*f)-d/6*f*(-3+4*g*g)*(-3+4*f*f))),m=n,n=i/(a*y)+v;
return i=p*g-h*L*l,a=Math.atan2(p*L+h*g*l,(1-o)*Math.sqrt(e*e+i*i)),t=Math.atan2(g*t,h*L-p*g*l),l=o/16*c*(4+o*(4-3*c)),f=t-(1-l)*o*e*(n+l*g*(f+l*L*(-1+2*f*f))),Math.atan2(e,-i),new OpenLayers.LonLat(s+r.deg(f),r.deg(a))
},OpenLayers.Util.getParameters=function(e,t){t=t||{},e=null===e||void 0===e?window.location.href:e;
var i="";if(OpenLayers.String.contains(e,"?"))var r=e.indexOf("?")+1,i=OpenLayers.String.contains(e,"#")?e.indexOf("#"):e.length,i=e.substring(r,i);
for(var r={},i=i.split(/[&;]/),s=0,n=i.length;n>s;++s){var a=i[s].split("=");if(a[0]){var o=a[0];
try{o=decodeURIComponent(o)}catch(l){o=unescape(o)}a=(a[1]||"").replace(/\+/g," ");
try{a=decodeURIComponent(a)}catch(h){a=unescape(a)}!1!==t.splitArgs&&(a=a.split(",")),1==a.length&&(a=a[0]),r[o]=a
}}return r},OpenLayers.Util.lastSeqID=0,OpenLayers.Util.createUniqueID=function(e){return e=null==e?"id_":e.replace(OpenLayers.Util.dotless,"_"),OpenLayers.Util.lastSeqID+=1,e+OpenLayers.Util.lastSeqID
},OpenLayers.INCHES_PER_UNIT={inches:1,ft:12,mi:63360,m:39.37,km:39370,dd:4374754,yd:36},OpenLayers.INCHES_PER_UNIT["in"]=OpenLayers.INCHES_PER_UNIT.inches,OpenLayers.INCHES_PER_UNIT.degrees=OpenLayers.INCHES_PER_UNIT.dd,OpenLayers.INCHES_PER_UNIT.nmi=1852*OpenLayers.INCHES_PER_UNIT.m,OpenLayers.METERS_PER_INCH=.0254000508001016,OpenLayers.Util.extend(OpenLayers.INCHES_PER_UNIT,{Inch:OpenLayers.INCHES_PER_UNIT.inches,Meter:1/OpenLayers.METERS_PER_INCH,Foot:.3048006096012192/OpenLayers.METERS_PER_INCH,IFoot:.3048/OpenLayers.METERS_PER_INCH,ClarkeFoot:.3047972651151/OpenLayers.METERS_PER_INCH,SearsFoot:.30479947153867626/OpenLayers.METERS_PER_INCH,GoldCoastFoot:.3047997101815088/OpenLayers.METERS_PER_INCH,IInch:.0254/OpenLayers.METERS_PER_INCH,MicroInch:254e-7/OpenLayers.METERS_PER_INCH,Mil:2.54e-8/OpenLayers.METERS_PER_INCH,Centimeter:.01/OpenLayers.METERS_PER_INCH,Kilometer:1e3/OpenLayers.METERS_PER_INCH,Yard:.9144018288036576/OpenLayers.METERS_PER_INCH,SearsYard:.914398414616029/OpenLayers.METERS_PER_INCH,IndianYard:.9143985307444408/OpenLayers.METERS_PER_INCH,IndianYd37:.91439523/OpenLayers.METERS_PER_INCH,IndianYd62:.9143988/OpenLayers.METERS_PER_INCH,IndianYd75:.9143985/OpenLayers.METERS_PER_INCH,IndianFoot:.30479951/OpenLayers.METERS_PER_INCH,IndianFt37:.30479841/OpenLayers.METERS_PER_INCH,IndianFt62:.3047996/OpenLayers.METERS_PER_INCH,IndianFt75:.3047995/OpenLayers.METERS_PER_INCH,Mile:1609.3472186944373/OpenLayers.METERS_PER_INCH,IYard:.9144/OpenLayers.METERS_PER_INCH,IMile:1609.344/OpenLayers.METERS_PER_INCH,NautM:1852/OpenLayers.METERS_PER_INCH,"Lat-66":110943.31648893273/OpenLayers.METERS_PER_INCH,"Lat-83":110946.25736872235/OpenLayers.METERS_PER_INCH,Decimeter:.1/OpenLayers.METERS_PER_INCH,Millimeter:.001/OpenLayers.METERS_PER_INCH,Dekameter:10/OpenLayers.METERS_PER_INCH,Decameter:10/OpenLayers.METERS_PER_INCH,Hectometer:100/OpenLayers.METERS_PER_INCH,GermanMeter:1.0000135965/OpenLayers.METERS_PER_INCH,CaGrid:.999738/OpenLayers.METERS_PER_INCH,ClarkeChain:20.1166194976/OpenLayers.METERS_PER_INCH,GunterChain:20.11684023368047/OpenLayers.METERS_PER_INCH,BenoitChain:20.116782494375872/OpenLayers.METERS_PER_INCH,SearsChain:20.11676512155/OpenLayers.METERS_PER_INCH,ClarkeLink:.201166194976/OpenLayers.METERS_PER_INCH,GunterLink:.2011684023368047/OpenLayers.METERS_PER_INCH,BenoitLink:.20116782494375873/OpenLayers.METERS_PER_INCH,SearsLink:.2011676512155/OpenLayers.METERS_PER_INCH,Rod:5.02921005842012/OpenLayers.METERS_PER_INCH,IntnlChain:20.1168/OpenLayers.METERS_PER_INCH,IntnlLink:.201168/OpenLayers.METERS_PER_INCH,Perch:5.02921005842012/OpenLayers.METERS_PER_INCH,Pole:5.02921005842012/OpenLayers.METERS_PER_INCH,Furlong:201.1684023368046/OpenLayers.METERS_PER_INCH,Rood:3.778266898/OpenLayers.METERS_PER_INCH,CapeFoot:.3047972615/OpenLayers.METERS_PER_INCH,Brealey:375/OpenLayers.METERS_PER_INCH,ModAmFt:.304812252984506/OpenLayers.METERS_PER_INCH,Fathom:1.8288/OpenLayers.METERS_PER_INCH,"NautM-UK":1853.184/OpenLayers.METERS_PER_INCH,"50kilometers":5e4/OpenLayers.METERS_PER_INCH,"150kilometers":15e4/OpenLayers.METERS_PER_INCH}),OpenLayers.Util.extend(OpenLayers.INCHES_PER_UNIT,{mm:OpenLayers.INCHES_PER_UNIT.Meter/1e3,cm:OpenLayers.INCHES_PER_UNIT.Meter/100,dm:100*OpenLayers.INCHES_PER_UNIT.Meter,km:1e3*OpenLayers.INCHES_PER_UNIT.Meter,kmi:OpenLayers.INCHES_PER_UNIT.nmi,fath:OpenLayers.INCHES_PER_UNIT.Fathom,ch:OpenLayers.INCHES_PER_UNIT.IntnlChain,link:OpenLayers.INCHES_PER_UNIT.IntnlLink,"us-in":OpenLayers.INCHES_PER_UNIT.inches,"us-ft":OpenLayers.INCHES_PER_UNIT.Foot,"us-yd":OpenLayers.INCHES_PER_UNIT.Yard,"us-ch":OpenLayers.INCHES_PER_UNIT.GunterChain,"us-mi":OpenLayers.INCHES_PER_UNIT.Mile,"ind-yd":OpenLayers.INCHES_PER_UNIT.IndianYd37,"ind-ft":OpenLayers.INCHES_PER_UNIT.IndianFt37,"ind-ch":20.11669506/OpenLayers.METERS_PER_INCH}),OpenLayers.DOTS_PER_INCH=72,OpenLayers.Util.normalizeScale=function(e){return e>1?1/e:e
},OpenLayers.Util.getResolutionFromScale=function(e,t){var i;return e&&(null==t&&(t="degrees"),i=1/(OpenLayers.Util.normalizeScale(e)*OpenLayers.INCHES_PER_UNIT[t]*OpenLayers.DOTS_PER_INCH)),i
},OpenLayers.Util.getScaleFromResolution=function(e,t){return null==t&&(t="degrees"),e*OpenLayers.INCHES_PER_UNIT[t]*OpenLayers.DOTS_PER_INCH
},OpenLayers.Util.pagePosition=function(e){var t=[0,0],i=OpenLayers.Util.getViewportElement();
if(!e||e==window||e==i)return t;var r=OpenLayers.IS_GECKO&&document.getBoxObjectFor&&"absolute"==OpenLayers.Element.getStyle(e,"position")&&(""==e.style.top||""==e.style.left),s=null;
if(e.getBoundingClientRect)e=e.getBoundingClientRect(),s=window.pageYOffset||i.scrollTop,t[0]=e.left+(window.pageXOffset||i.scrollLeft),t[1]=e.top+s;
else if(document.getBoxObjectFor&&!r)e=document.getBoxObjectFor(e),i=document.getBoxObjectFor(i),t[0]=e.screenX-i.screenX,t[1]=e.screenY-i.screenY;
else{if(t[0]=e.offsetLeft,t[1]=e.offsetTop,s=e.offsetParent,s!=e)for(;s;)t[0]+=s.offsetLeft,t[1]+=s.offsetTop,s=s.offsetParent;
for(i=OpenLayers.BROWSER_NAME,("opera"==i||"safari"==i&&"absolute"==OpenLayers.Element.getStyle(e,"position"))&&(t[1]-=document.body.offsetTop),s=e.offsetParent;s&&s!=document.body;)t[0]-=s.scrollLeft,("opera"!=i||"TR"!=s.tagName)&&(t[1]-=s.scrollTop),s=s.offsetParent
}return t},OpenLayers.Util.getViewportElement=function(){var e=arguments.callee.viewportElement;
return void 0==e&&(e="msie"==OpenLayers.BROWSER_NAME&&"CSS1Compat"!=document.compatMode?document.body:document.documentElement,arguments.callee.viewportElement=e),e
},OpenLayers.Util.isEquivalentUrl=function(e,t,i){i=i||{},OpenLayers.Util.applyDefaults(i,{ignoreCase:!0,ignorePort80:!0,ignoreHash:!0,splitArgs:!1}),e=OpenLayers.Util.createUrlObject(e,i),t=OpenLayers.Util.createUrlObject(t,i);
for(var r in e)if("args"!==r&&e[r]!=t[r])return!1;for(r in e.args){if(e.args[r]!=t.args[r])return!1;
delete t.args[r]}for(r in t.args)return!1;return!0},OpenLayers.Util.createUrlObject=function(e,t){if(t=t||{},!/^\w+:\/\//.test(e)){var i=window.location,r=i.port?":"+i.port:"",r=i.protocol+"//"+i.host.split(":").shift()+r;
0===e.indexOf("/")?e=r+e:(i=i.pathname.split("/"),i.pop(),e=r+i.join("/")+"/"+e)}t.ignoreCase&&(e=e.toLowerCase()),i=document.createElement("a"),i.href=e,r={},r.host=i.host.split(":").shift(),r.protocol=i.protocol,r.port=t.ignorePort80?"80"==i.port||"0"==i.port?"":i.port:""==i.port||"0"==i.port?"80":i.port,r.hash=t.ignoreHash||"#"===i.hash?"":i.hash;
var s=i.search;return s||(s=e.indexOf("?"),s=-1!=s?e.substr(s):""),r.args=OpenLayers.Util.getParameters(s,{splitArgs:t.splitArgs}),r.pathname="/"==i.pathname.charAt(0)?i.pathname:"/"+i.pathname,r
},OpenLayers.Util.removeTail=function(e){var t=null,t=e.indexOf("?"),i=e.indexOf("#");
return t=-1==t?-1!=i?e.substr(0,i):e:-1!=i?e.substr(0,Math.min(t,i)):e.substr(0,t)
},OpenLayers.IS_GECKO=function(){var e=navigator.userAgent.toLowerCase();return-1==e.indexOf("webkit")&&-1!=e.indexOf("gecko")
}(),OpenLayers.CANVAS_SUPPORTED=function(){var e=document.createElement("canvas");
return!(!e.getContext||!e.getContext("2d"))}(),OpenLayers.BROWSER_NAME=function(){var e="",t=navigator.userAgent.toLowerCase();
return-1!=t.indexOf("opera")?e="opera":-1!=t.indexOf("msie")?e="msie":-1!=t.indexOf("safari")?e="safari":-1!=t.indexOf("mozilla")&&(e=-1!=t.indexOf("firefox")?"firefox":"mozilla"),e
}(),OpenLayers.Util.getBrowserName=function(){return OpenLayers.BROWSER_NAME},OpenLayers.Util.getRenderedDimensions=function(e,t,i){var r,s,n=document.createElement("div");
n.style.visibility="hidden";for(var a=i&&i.containerElement?i.containerElement:document.body,o=!1,l=null,h=a;h&&"body"!=h.tagName.toLowerCase();){var p=OpenLayers.Element.getStyle(h,"position");
if("absolute"==p){o=!0;break}if(p&&"static"!=p)break;h=h.parentNode}if(!o||0!==a.clientHeight&&0!==a.clientWidth||(l=document.createElement("div"),l.style.visibility="hidden",l.style.position="absolute",l.style.overflow="visible",l.style.width=document.body.clientWidth+"px",l.style.height=document.body.clientHeight+"px",l.appendChild(n)),n.style.position="absolute",t&&(t.w?(r=t.w,n.style.width=r+"px"):t.h&&(s=t.h,n.style.height=s+"px")),i&&i.displayClass&&(n.className=i.displayClass),t=document.createElement("div"),t.innerHTML=e,t.style.overflow="visible",t.childNodes)for(e=0,i=t.childNodes.length;i>e;e++)t.childNodes[e].style&&(t.childNodes[e].style.overflow="visible");
return n.appendChild(t),l?a.appendChild(l):a.appendChild(n),r||(r=parseInt(t.scrollWidth),n.style.width=r+"px"),s||(s=parseInt(t.scrollHeight)),n.removeChild(t),l?(l.removeChild(n),a.removeChild(l)):a.removeChild(n),new OpenLayers.Size(r,s)
},OpenLayers.Util.getScrollbarWidth=function(){var e=OpenLayers.Util._scrollbarWidth;
if(null==e){var t=null,i=null,t=e=0,t=document.createElement("div");t.style.position="absolute",t.style.top="-1000px",t.style.left="-1000px",t.style.width="100px",t.style.height="50px",t.style.overflow="hidden",i=document.createElement("div"),i.style.width="100%",i.style.height="200px",t.appendChild(i),document.body.appendChild(t),e=i.offsetWidth,t.style.overflow="scroll",t=i.offsetWidth,document.body.removeChild(document.body.lastChild),OpenLayers.Util._scrollbarWidth=e-t,e=OpenLayers.Util._scrollbarWidth
}return e},OpenLayers.Util.getFormattedLonLat=function(e,t,i){i||(i="dms"),e=(e+540)%360-180;
var r=Math.abs(e),s=Math.floor(r),n=r=(r-s)/(1/60),r=Math.floor(r),n=Math.round(10*((n-r)/(1/60))),n=n/10;
return n>=60&&(n-=60,r+=1,r>=60&&(r-=60,s+=1)),10>s&&(s="0"+s),s+="°",0<=i.indexOf("dm")&&(10>r&&(r="0"+r),s+=r+"'",0<=i.indexOf("dms")&&(10>n&&(n="0"+n),s+=n+'"')),s="lon"==t?s+(0>e?OpenLayers.i18n("W"):OpenLayers.i18n("E")):s+(0>e?OpenLayers.i18n("S"):OpenLayers.i18n("N"))
},OpenLayers.Format=OpenLayers.Class({options:null,externalProjection:null,internalProjection:null,data:null,keepData:!1,initialize:function(e){OpenLayers.Util.extend(this,e),this.options=e
},destroy:function(){},read:function(){throw Error("Read not implemented.")},write:function(){throw Error("Write not implemented.")
},CLASS_NAME:"OpenLayers.Format"}),OpenLayers.Format.CSWGetRecords=function(e){e=OpenLayers.Util.applyDefaults(e,OpenLayers.Format.CSWGetRecords.DEFAULTS);
var t=OpenLayers.Format.CSWGetRecords["v"+e.version.replace(/\./g,"_")];if(!t)throw"Unsupported CSWGetRecords version: "+e.version;
return new t(e)},OpenLayers.Format.CSWGetRecords.DEFAULTS={version:"2.0.2"},OpenLayers.Control=OpenLayers.Class({id:null,map:null,div:null,type:null,allowSelection:!1,displayClass:"",title:"",autoActivate:!1,active:null,handlerOptions:null,handler:null,eventListeners:null,events:null,initialize:function(e){this.displayClass=this.CLASS_NAME.replace("OpenLayers.","ol").replace(/\./g,""),OpenLayers.Util.extend(this,e),this.events=new OpenLayers.Events(this),this.eventListeners instanceof Object&&this.events.on(this.eventListeners),null==this.id&&(this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_"))
},destroy:function(){if(this.events&&(this.eventListeners&&this.events.un(this.eventListeners),this.events.destroy(),this.events=null),this.eventListeners=null,this.handler&&(this.handler.destroy(),this.handler=null),this.handlers){for(var e in this.handlers)this.handlers.hasOwnProperty(e)&&"function"==typeof this.handlers[e].destroy&&this.handlers[e].destroy();
this.handlers=null}this.map&&(this.map.removeControl(this),this.map=null),this.div=null
},setMap:function(e){this.map=e,this.handler&&this.handler.setMap(e)},draw:function(e){return null==this.div&&(this.div=OpenLayers.Util.createDiv(this.id),this.div.className=this.displayClass,this.allowSelection||(this.div.className+=" olControlNoSelect",this.div.setAttribute("unselectable","on",0),this.div.onselectstart=OpenLayers.Function.False),""!=this.title&&(this.div.title=this.title)),null!=e&&(this.position=e.clone()),this.moveTo(this.position),this.div
},moveTo:function(e){null!=e&&null!=this.div&&(this.div.style.left=e.x+"px",this.div.style.top=e.y+"px")
},activate:function(){return this.active?!1:(this.handler&&this.handler.activate(),this.active=!0,this.map&&OpenLayers.Element.addClass(this.map.viewPortDiv,this.displayClass.replace(/ /g,"")+"Active"),this.events.triggerEvent("activate"),!0)
},deactivate:function(){return this.active?(this.handler&&this.handler.deactivate(),this.active=!1,this.map&&OpenLayers.Element.removeClass(this.map.viewPortDiv,this.displayClass.replace(/ /g,"")+"Active"),this.events.triggerEvent("deactivate"),!0):!1
},CLASS_NAME:"OpenLayers.Control"}),OpenLayers.Control.TYPE_BUTTON=1,OpenLayers.Control.TYPE_TOGGLE=2,OpenLayers.Control.TYPE_TOOL=3,OpenLayers.Event={observers:!1,KEY_SPACE:32,KEY_BACKSPACE:8,KEY_TAB:9,KEY_RETURN:13,KEY_ESC:27,KEY_LEFT:37,KEY_UP:38,KEY_RIGHT:39,KEY_DOWN:40,KEY_DELETE:46,element:function(e){return e.target||e.srcElement
},isSingleTouch:function(e){return e.touches&&1==e.touches.length},isMultiTouch:function(e){return e.touches&&1<e.touches.length
},isLeftClick:function(e){return e.which&&1==e.which||e.button&&1==e.button},isRightClick:function(e){return e.which&&3==e.which||e.button&&2==e.button
},stop:function(e,t){t||OpenLayers.Event.preventDefault(e),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0
},preventDefault:function(e){e.preventDefault?e.preventDefault():e.returnValue=!1
},findElement:function(e,t){for(var i=OpenLayers.Event.element(e);i.parentNode&&(!i.tagName||i.tagName.toUpperCase()!=t.toUpperCase());)i=i.parentNode;
return i},observe:function(e,t,i,r){if(e=OpenLayers.Util.getElement(e),r=r||!1,"keypress"==t&&(navigator.appVersion.match(/Konqueror|Safari|KHTML/)||e.attachEvent)&&(t="keydown"),this.observers||(this.observers={}),!e._eventCacheID){var s="eventCacheID_";
e.id&&(s=e.id+"_"+s),e._eventCacheID=OpenLayers.Util.createUniqueID(s)}s=e._eventCacheID,this.observers[s]||(this.observers[s]=[]),this.observers[s].push({element:e,name:t,observer:i,useCapture:r}),e.addEventListener?e.addEventListener(t,i,r):e.attachEvent&&e.attachEvent("on"+t,i)
},stopObservingElement:function(e){e=OpenLayers.Util.getElement(e)._eventCacheID,this._removeElementObservers(OpenLayers.Event.observers[e])
},_removeElementObservers:function(e){if(e)for(var t=e.length-1;t>=0;t--){var i=e[t];
OpenLayers.Event.stopObserving.apply(this,[i.element,i.name,i.observer,i.useCapture])
}},stopObserving:function(e,t,i,r){r=r||!1,e=OpenLayers.Util.getElement(e);var s=e._eventCacheID;
"keypress"==t&&(navigator.appVersion.match(/Konqueror|Safari|KHTML/)||e.detachEvent)&&(t="keydown");
var n=!1,a=OpenLayers.Event.observers[s];if(a)for(var o=0;!n&&o<a.length;){var l=a[o];
if(l.name==t&&l.observer==i&&l.useCapture==r){a.splice(o,1),0==a.length&&delete OpenLayers.Event.observers[s],n=!0;
break}o++}return n&&(e.removeEventListener?e.removeEventListener(t,i,r):e&&e.detachEvent&&e.detachEvent("on"+t,i)),n
},unloadCache:function(){if(OpenLayers.Event&&OpenLayers.Event.observers){for(var e in OpenLayers.Event.observers)OpenLayers.Event._removeElementObservers.apply(this,[OpenLayers.Event.observers[e]]);
OpenLayers.Event.observers=!1}},CLASS_NAME:"OpenLayers.Event"},OpenLayers.Event.observe(window,"unload",OpenLayers.Event.unloadCache,!1),OpenLayers.Events=OpenLayers.Class({BROWSER_EVENTS:"mouseover mouseout mousedown mouseup mousemove click dblclick rightclick dblrightclick resize focus blur touchstart touchmove touchend keydown".split(" "),listeners:null,object:null,element:null,eventHandler:null,fallThrough:null,includeXY:!1,extensions:null,extensionCount:null,clearMouseListener:null,initialize:function(e,t,i,r,s){OpenLayers.Util.extend(this,s),this.object=e,this.fallThrough=r,this.listeners={},this.extensions={},this.extensionCount={},this._msTouches=[],null!=t&&this.attachToElement(t)
},destroy:function(){for(var e in this.extensions)"boolean"!=typeof this.extensions[e]&&this.extensions[e].destroy();
this.extensions=null,this.element&&(OpenLayers.Event.stopObservingElement(this.element),this.element.hasScrollEvent&&OpenLayers.Event.stopObserving(window,"scroll",this.clearMouseListener)),this.eventHandler=this.fallThrough=this.object=this.listeners=this.element=null
},addEventType:function(){},attachToElement:function(e){this.element?OpenLayers.Event.stopObservingElement(this.element):(this.eventHandler=OpenLayers.Function.bindAsEventListener(this.handleBrowserEvent,this),this.clearMouseListener=OpenLayers.Function.bind(this.clearMouseCache,this)),this.element=e;
for(var t,i=!!window.navigator.msMaxTouchPoints,r=0,s=this.BROWSER_EVENTS.length;s>r;r++)t=this.BROWSER_EVENTS[r],OpenLayers.Event.observe(e,t,this.eventHandler),i&&0===t.indexOf("touch")&&this.addMsTouchListener(e,t,this.eventHandler);
OpenLayers.Event.observe(e,"dragstart",OpenLayers.Event.stop)},on:function(e){for(var t in e)"scope"!=t&&e.hasOwnProperty(t)&&this.register(t,e.scope,e[t])
},register:function(e,t,i,r){if(e in OpenLayers.Events&&!this.extensions[e]&&(this.extensions[e]=new OpenLayers.Events[e](this)),null!=i){null==t&&(t=this.object);
var s=this.listeners[e];s||(s=[],this.listeners[e]=s,this.extensionCount[e]=0),t={obj:t,func:i},r?(s.splice(this.extensionCount[e],0,t),"object"==typeof r&&r.extension&&this.extensionCount[e]++):s.push(t)
}},registerPriority:function(e,t,i){this.register(e,t,i,!0)},un:function(e){for(var t in e)"scope"!=t&&e.hasOwnProperty(t)&&this.unregister(t,e.scope,e[t])
},unregister:function(e,t,i){if(null==t&&(t=this.object),e=this.listeners[e],null!=e)for(var r=0,s=e.length;s>r;r++)if(e[r].obj==t&&e[r].func==i){e.splice(r,1);
break}},remove:function(e){null!=this.listeners[e]&&(this.listeners[e]=[])},triggerEvent:function(e,t){var i=this.listeners[e];
if(i&&0!=i.length){null==t&&(t={}),t.object=this.object,t.element=this.element,t.type||(t.type=e);
for(var r,i=i.slice(),s=0,n=i.length;n>s&&(r=i[s],r=r.func.apply(r.obj,[t]),void 0==r||0!=r);s++);return this.fallThrough||OpenLayers.Event.stop(t,!0),r
}},handleBrowserEvent:function(e){var t=e.type,i=this.listeners[t];if(i&&0!=i.length){if((i=e.touches)&&i[0]){for(var r,s=0,n=0,a=i.length,o=0;a>o;++o)r=this.getTouchClientXY(i[o]),s+=r.clientX,n+=r.clientY;
e.clientX=s/a,e.clientY=n/a}this.includeXY&&(e.xy=this.getMousePosition(e)),this.triggerEvent(t,e)
}},getTouchClientXY:function(e){var t=window.olMockWin||window,i=t.pageXOffset,t=t.pageYOffset,r=e.clientX,s=e.clientY;
return 0===e.pageY&&Math.floor(s)>Math.floor(e.pageY)||0===e.pageX&&Math.floor(r)>Math.floor(e.pageX)?(r-=i,s-=t):(s<e.pageY-t||r<e.pageX-i)&&(r=e.pageX-i,s=e.pageY-t),e.olClientX=r,e.olClientY=s,{clientX:r,clientY:s}
},clearMouseCache:function(){this.element.scrolls=null,this.element.lefttop=null,this.element.offsets=null
},getMousePosition:function(e){if(this.includeXY?this.element.hasScrollEvent||(OpenLayers.Event.observe(window,"scroll",this.clearMouseListener),this.element.hasScrollEvent=!0):this.clearMouseCache(),!this.element.scrolls){var t=OpenLayers.Util.getViewportElement();
this.element.scrolls=[window.pageXOffset||t.scrollLeft,window.pageYOffset||t.scrollTop]
}return this.element.lefttop||(this.element.lefttop=[document.documentElement.clientLeft||0,document.documentElement.clientTop||0]),this.element.offsets||(this.element.offsets=OpenLayers.Util.pagePosition(this.element)),new OpenLayers.Pixel(e.clientX+this.element.scrolls[0]-this.element.offsets[0]-this.element.lefttop[0],e.clientY+this.element.scrolls[1]-this.element.offsets[1]-this.element.lefttop[1])
},addMsTouchListener:function(e,t,i){function r(e){i(OpenLayers.Util.applyDefaults({stopPropagation:function(){for(var e=s.length-1;e>=0;--e)s[e].stopPropagation()
},preventDefault:function(){for(var e=s.length-1;e>=0;--e)s[e].preventDefault()},type:t},e))
}var s=this._msTouches;switch(t){case"touchstart":return this.addMsTouchListenerStart(e,t,r);
case"touchend":return this.addMsTouchListenerEnd(e,t,r);case"touchmove":return this.addMsTouchListenerMove(e,t,r);
default:throw"Unknown touch event type"}},addMsTouchListenerStart:function(e,t,i){var r=this._msTouches;
OpenLayers.Event.observe(e,"MSPointerDown",function(e){for(var t=!1,s=0,n=r.length;n>s;++s)if(r[s].pointerId==e.pointerId){t=!0;
break}t||r.push(e),e.touches=r.slice(),i(e)}),OpenLayers.Event.observe(e,"MSPointerUp",function(e){for(var t=0,i=r.length;i>t;++t)if(r[t].pointerId==e.pointerId){r.splice(t,1);
break}})},addMsTouchListenerMove:function(e,t,i){var r=this._msTouches;OpenLayers.Event.observe(e,"MSPointerMove",function(e){if(!(e.pointerType==e.MSPOINTER_TYPE_MOUSE&&0==e.buttons||1==r.length&&r[0].pageX==e.pageX&&r[0].pageY==e.pageY)){for(var t=0,s=r.length;s>t;++t)if(r[t].pointerId==e.pointerId){r[t]=e;
break}e.touches=r.slice(),i(e)}})},addMsTouchListenerEnd:function(e,t,i){var r=this._msTouches;
OpenLayers.Event.observe(e,"MSPointerUp",function(e){for(var t=0,s=r.length;s>t;++t)if(r[t].pointerId==e.pointerId){r.splice(t,1);
break}e.touches=r.slice(),i(e)})},CLASS_NAME:"OpenLayers.Events"}),OpenLayers.Events.buttonclick=OpenLayers.Class({target:null,events:"mousedown mouseup click dblclick touchstart touchmove touchend keydown".split(" "),startRegEx:/^mousedown|touchstart$/,cancelRegEx:/^touchmove$/,completeRegEx:/^mouseup|touchend$/,initialize:function(e){for(this.target=e,e=this.events.length-1;e>=0;--e)this.target.register(this.events[e],this,this.buttonClick,{extension:!0})
},destroy:function(){for(var e=this.events.length-1;e>=0;--e)this.target.unregister(this.events[e],this,this.buttonClick);
delete this.target},getPressedButton:function(e){var t,i=3;do{if(OpenLayers.Element.hasClass(e,"olButton")){t=e;
break}e=e.parentNode}while(0<--i&&e);return t},ignore:function(e){var t=3,i=!1;do{if("a"===e.nodeName.toLowerCase()){i=!0;
break}e=e.parentNode}while(0<--t&&e);return i},buttonClick:function(e){var t=!0,i=OpenLayers.Event.element(e);
if(i&&(OpenLayers.Event.isLeftClick(e)||!~e.type.indexOf("mouse")))if(i=this.getPressedButton(i)){if("keydown"===e.type)switch(e.keyCode){case OpenLayers.Event.KEY_RETURN:case OpenLayers.Event.KEY_SPACE:this.target.triggerEvent("buttonclick",{buttonElement:i}),OpenLayers.Event.stop(e),t=!1
}else if(this.startEvt){if(this.completeRegEx.test(e.type)){var t=OpenLayers.Util.pagePosition(i),r=OpenLayers.Util.getViewportElement(),s=window.pageYOffset||r.scrollTop;
t[0]-=window.pageXOffset||r.scrollLeft,t[1]-=s,this.target.triggerEvent("buttonclick",{buttonElement:i,buttonXY:{x:this.startEvt.clientX-t[0],y:this.startEvt.clientY-t[1]}})
}this.cancelRegEx.test(e.type)&&delete this.startEvt,OpenLayers.Event.stop(e),t=!1
}this.startRegEx.test(e.type)&&(this.startEvt=e,OpenLayers.Event.stop(e),t=!1)}else t=!this.ignore(OpenLayers.Event.element(e)),delete this.startEvt;
return t}}),OpenLayers.Util=OpenLayers.Util||{},OpenLayers.Util.vendorPrefix=function(){function e(e){return e?e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()
}).replace(/^ms-/,"-ms-"):null}function t(e,t){if(void 0===a[t]){var i,s=0,n=r.length,o="undefined"!=typeof e.cssText;
for(a[t]=null;n>s;s++)if((i=r[s])?(o||(i=i.toLowerCase()),i=i+t.charAt(0).toUpperCase()+t.slice(1)):i=t,void 0!==e[i]){a[t]=i;
break}}return a[t]}function i(e){return t(s,e)}var r=["","O","ms","Moz","Webkit"],s=document.createElement("div").style,n={},a={};
return{css:function(t){if(void 0===n[t]){var r=t.replace(/(-[\s\S])/g,function(e){return e.charAt(1).toUpperCase()
}),r=i(r);n[t]=e(r)}return n[t]},js:t,style:i,cssCache:n,jsCache:a}}(),OpenLayers.Animation=function(e){var t=OpenLayers.Util.vendorPrefix.js(e,"requestAnimationFrame"),i=!!t,r=function(){var i=e[t]||function(t){e.setTimeout(t,16)
};return function(t,r){i.apply(e,[t,r])}}(),s=0,n={};return{isNative:i,requestFrame:r,start:function(e,t,i){t=t>0?t:Number.POSITIVE_INFINITY;
var a=++s,o=+new Date;return n[a]=function(){n[a]&&+new Date-o<=t?(e(),n[a]&&r(n[a],i)):delete n[a]
},r(n[a],i),a},stop:function(e){delete n[e]}}}(window),OpenLayers.Tween=OpenLayers.Class({easing:null,begin:null,finish:null,duration:null,callbacks:null,time:null,minFrameRate:null,startTime:null,animationId:null,playing:!1,initialize:function(e){this.easing=e?e:OpenLayers.Easing.Expo.easeOut
},start:function(e,t,i,r){this.playing=!0,this.begin=e,this.finish=t,this.duration=i,this.callbacks=r.callbacks,this.minFrameRate=r.minFrameRate||30,this.time=0,this.startTime=(new Date).getTime(),OpenLayers.Animation.stop(this.animationId),this.animationId=null,this.callbacks&&this.callbacks.start&&this.callbacks.start.call(this,this.begin),this.animationId=OpenLayers.Animation.start(OpenLayers.Function.bind(this.play,this))
},stop:function(){this.playing&&(this.callbacks&&this.callbacks.done&&this.callbacks.done.call(this,this.finish),OpenLayers.Animation.stop(this.animationId),this.animationId=null,this.playing=!1)
},play:function(){var e,t={};for(e in this.begin){var i=this.begin[e],r=this.finish[e];
if(null==i||null==r||isNaN(i)||isNaN(r))throw new TypeError("invalid value for Tween");
t[e]=this.easing.apply(this,[this.time,i,r-i,this.duration])}this.time++,this.callbacks&&this.callbacks.eachStep&&((new Date).getTime()-this.startTime)/this.time<=1e3/this.minFrameRate&&this.callbacks.eachStep.call(this,t),this.time>this.duration&&this.stop()
},CLASS_NAME:"OpenLayers.Tween"}),OpenLayers.Easing={CLASS_NAME:"OpenLayers.Easing"},OpenLayers.Easing.Linear={easeIn:function(e,t,i,r){return i*e/r+t
},easeOut:function(e,t,i,r){return i*e/r+t},easeInOut:function(e,t,i,r){return i*e/r+t
},CLASS_NAME:"OpenLayers.Easing.Linear"},OpenLayers.Easing.Expo={easeIn:function(e,t,i,r){return 0==e?t:i*Math.pow(2,10*(e/r-1))+t
},easeOut:function(e,t,i,r){return e==r?t+i:i*(-Math.pow(2,-10*e/r)+1)+t},easeInOut:function(e,t,i,r){return 0==e?t:e==r?t+i:1>(e/=r/2)?i/2*Math.pow(2,10*(e-1))+t:i/2*(-Math.pow(2,-10*--e)+2)+t
},CLASS_NAME:"OpenLayers.Easing.Expo"},OpenLayers.Easing.Quad={easeIn:function(e,t,i,r){return i*(e/=r)*e+t
},easeOut:function(e,t,i,r){return-i*(e/=r)*(e-2)+t},easeInOut:function(e,t,i,r){return 1>(e/=r/2)?i/2*e*e+t:-i/2*(--e*(e-2)-1)+t
},CLASS_NAME:"OpenLayers.Easing.Quad"},OpenLayers.Projection=OpenLayers.Class({proj:null,projCode:null,titleRegEx:/\+title=[^\+]*/,initialize:function(e,t){OpenLayers.Util.extend(this,t),this.projCode=e,"object"==typeof Proj4js&&(this.proj=new Proj4js.Proj(e))
},getCode:function(){return this.proj?this.proj.srsCode:this.projCode},getUnits:function(){return this.proj?this.proj.units:null
},toString:function(){return this.getCode()},equals:function(e){var t=!1;return e&&(e instanceof OpenLayers.Projection||(e=new OpenLayers.Projection(e)),"object"==typeof Proj4js&&this.proj.defData&&e.proj.defData?t=this.proj.defData.replace(this.titleRegEx,"")==e.proj.defData.replace(this.titleRegEx,""):e.getCode&&(t=this.getCode(),e=e.getCode(),t=t==e||!!OpenLayers.Projection.transforms[t]&&OpenLayers.Projection.transforms[t][e]===OpenLayers.Projection.nullTransform)),t
},destroy:function(){delete this.proj,delete this.projCode},CLASS_NAME:"OpenLayers.Projection"}),OpenLayers.Projection.transforms={},OpenLayers.Projection.defaults={"EPSG:4326":{units:"degrees",maxExtent:[-180,-90,180,90],yx:!0},"CRS:84":{units:"degrees",maxExtent:[-180,-90,180,90]},"EPSG:900913":{units:"m",maxExtent:[-20037508.34,-20037508.34,20037508.34,20037508.34]}},OpenLayers.Projection.addTransform=function(e,t,i){if(i===OpenLayers.Projection.nullTransform){var r=OpenLayers.Projection.defaults[e];
r&&!OpenLayers.Projection.defaults[t]&&(OpenLayers.Projection.defaults[t]=r)}OpenLayers.Projection.transforms[e]||(OpenLayers.Projection.transforms[e]={}),OpenLayers.Projection.transforms[e][t]=i
},OpenLayers.Projection.transform=function(e,t,i){if(t&&i)if(t instanceof OpenLayers.Projection||(t=new OpenLayers.Projection(t)),i instanceof OpenLayers.Projection||(i=new OpenLayers.Projection(i)),t.proj&&i.proj)e=Proj4js.transform(t.proj,i.proj,e);
else{t=t.getCode(),i=i.getCode();var r=OpenLayers.Projection.transforms;r[t]&&r[t][i]&&r[t][i](e)
}return e},OpenLayers.Projection.nullTransform=function(e){return e},function(){function e(e){return e.x=180*e.x/s,e.y=180/Math.PI*(2*Math.atan(Math.exp(e.y/s*Math.PI))-Math.PI/2),e
}function t(e){e.x=e.x*s/180;var t=Math.log(Math.tan((90+e.y)*Math.PI/360))/Math.PI*s;
return e.y=Math.max(-20037508.34,Math.min(t,20037508.34)),e}function i(i,r){var s,n,a,o,l,h=OpenLayers.Projection.addTransform,p=OpenLayers.Projection.nullTransform;
for(s=0,n=r.length;n>s;++s)for(a=r[s],h(i,a,t),h(a,i,e),l=s+1;n>l;++l)o=r[l],h(a,o,p),h(o,a,p)
}var r,s=20037508.34,n=["EPSG:900913","EPSG:3857","EPSG:102113","EPSG:102100"],a=["CRS:84","urn:ogc:def:crs:EPSG:6.6:4326","EPSG:4326"];
for(r=n.length-1;r>=0;--r)i(n[r],a);for(r=a.length-1;r>=0;--r)i(a[r],n)}(),OpenLayers.Map=OpenLayers.Class({Z_INDEX_BASE:{BaseLayer:100,Overlay:325,Feature:725,Popup:750,Control:1e3},id:null,fractionalZoom:!1,events:null,allOverlays:!1,div:null,dragging:!1,size:null,viewPortDiv:null,layerContainerOrigin:null,layerContainerDiv:null,layers:null,controls:null,popups:null,baseLayer:null,center:null,resolution:null,zoom:0,panRatio:1.5,options:null,tileSize:null,projection:"EPSG:4326",units:null,resolutions:null,maxResolution:null,minResolution:null,maxScale:null,minScale:null,maxExtent:null,minExtent:null,restrictedExtent:null,numZoomLevels:16,theme:null,displayProjection:null,fallThrough:!1,autoUpdateSize:!0,eventListeners:null,panTween:null,panMethod:OpenLayers.Easing.Expo.easeOut,panDuration:50,zoomTween:null,zoomMethod:OpenLayers.Easing.Quad.easeOut,zoomDuration:20,paddingForPopups:null,layerContainerOriginPx:null,minPx:null,maxPx:null,initialize:function(e,t){1===arguments.length&&"object"==typeof e&&(e=(t=e)&&t.div),this.tileSize=new OpenLayers.Size(OpenLayers.Map.TILE_WIDTH,OpenLayers.Map.TILE_HEIGHT),this.paddingForPopups=new OpenLayers.Bounds(15,15,15,15),this.theme=OpenLayers._getScriptLocation()+"theme/default/style.css",this.options=OpenLayers.Util.extend({},t),OpenLayers.Util.extend(this,t),OpenLayers.Util.applyDefaults(this,OpenLayers.Projection.defaults[this.projection instanceof OpenLayers.Projection?this.projection.projCode:this.projection]),!this.maxExtent||this.maxExtent instanceof OpenLayers.Bounds||(this.maxExtent=new OpenLayers.Bounds(this.maxExtent)),!this.minExtent||this.minExtent instanceof OpenLayers.Bounds||(this.minExtent=new OpenLayers.Bounds(this.minExtent)),!this.restrictedExtent||this.restrictedExtent instanceof OpenLayers.Bounds||(this.restrictedExtent=new OpenLayers.Bounds(this.restrictedExtent)),!this.center||this.center instanceof OpenLayers.LonLat||(this.center=new OpenLayers.LonLat(this.center)),this.layers=[],this.id=OpenLayers.Util.createUniqueID("OpenLayers.Map_"),this.div=OpenLayers.Util.getElement(e),this.div||(this.div=document.createElement("div"),this.div.style.height="1px",this.div.style.width="1px"),OpenLayers.Element.addClass(this.div,"olMap");
var i=this.id+"_OpenLayers_ViewPort";if(this.viewPortDiv=OpenLayers.Util.createDiv(i,null,null,null,"relative",null,"hidden"),this.viewPortDiv.style.width="100%",this.viewPortDiv.style.height="100%",this.viewPortDiv.className="olMapViewport",this.div.appendChild(this.viewPortDiv),this.events=new OpenLayers.Events(this,this.viewPortDiv,null,this.fallThrough,{includeXY:!0}),OpenLayers.TileManager&&null!==this.tileManager&&(this.tileManager instanceof OpenLayers.TileManager||(this.tileManager=new OpenLayers.TileManager(this.tileManager)),this.tileManager.addMap(this)),i=this.id+"_OpenLayers_Container",this.layerContainerDiv=OpenLayers.Util.createDiv(i),this.layerContainerDiv.style.zIndex=this.Z_INDEX_BASE.Popup-1,this.layerContainerOriginPx={x:0,y:0},this.applyTransform(),this.viewPortDiv.appendChild(this.layerContainerDiv),this.updateSize(),this.eventListeners instanceof Object&&this.events.on(this.eventListeners),!0===this.autoUpdateSize&&(this.updateSizeDestroy=OpenLayers.Function.bind(this.updateSize,this),OpenLayers.Event.observe(window,"resize",this.updateSizeDestroy)),this.theme){for(var i=!0,r=document.getElementsByTagName("link"),s=0,n=r.length;n>s;++s)if(OpenLayers.Util.isEquivalentUrl(r.item(s).href,this.theme)){i=!1;
break}i&&(i=document.createElement("link"),i.setAttribute("rel","stylesheet"),i.setAttribute("type","text/css"),i.setAttribute("href",this.theme),document.getElementsByTagName("head")[0].appendChild(i))
}for(null==this.controls&&(this.controls=[],null!=OpenLayers.Control&&(OpenLayers.Control.Navigation?this.controls.push(new OpenLayers.Control.Navigation):OpenLayers.Control.TouchNavigation&&this.controls.push(new OpenLayers.Control.TouchNavigation),OpenLayers.Control.Zoom?this.controls.push(new OpenLayers.Control.Zoom):OpenLayers.Control.PanZoom&&this.controls.push(new OpenLayers.Control.PanZoom),OpenLayers.Control.ArgParser&&this.controls.push(new OpenLayers.Control.ArgParser),OpenLayers.Control.Attribution&&this.controls.push(new OpenLayers.Control.Attribution))),s=0,n=this.controls.length;n>s;s++)this.addControlToMap(this.controls[s]);
this.popups=[],this.unloadDestroy=OpenLayers.Function.bind(this.destroy,this),OpenLayers.Event.observe(window,"unload",this.unloadDestroy),t&&t.layers&&(delete this.center,delete this.zoom,this.addLayers(t.layers),t.center&&!this.getCenter()&&this.setCenter(t.center,t.zoom)),this.panMethod&&(this.panTween=new OpenLayers.Tween(this.panMethod)),this.zoomMethod&&this.applyTransform.transform&&(this.zoomTween=new OpenLayers.Tween(this.zoomMethod))
},getViewport:function(){return this.viewPortDiv},render:function(e){this.div=OpenLayers.Util.getElement(e),OpenLayers.Element.addClass(this.div,"olMap"),this.viewPortDiv.parentNode.removeChild(this.viewPortDiv),this.div.appendChild(this.viewPortDiv),this.updateSize()
},unloadDestroy:null,updateSizeDestroy:null,destroy:function(){if(!this.unloadDestroy)return!1;
if(this.panTween&&(this.panTween.stop(),this.panTween=null),this.zoomTween&&(this.zoomTween.stop(),this.zoomTween=null),OpenLayers.Event.stopObserving(window,"unload",this.unloadDestroy),this.unloadDestroy=null,this.updateSizeDestroy&&OpenLayers.Event.stopObserving(window,"resize",this.updateSizeDestroy),this.paddingForPopups=null,null!=this.controls){for(var e=this.controls.length-1;e>=0;--e)this.controls[e].destroy();
this.controls=null}if(null!=this.layers){for(e=this.layers.length-1;e>=0;--e)this.layers[e].destroy(!1);
this.layers=null}this.viewPortDiv&&this.viewPortDiv.parentNode&&this.viewPortDiv.parentNode.removeChild(this.viewPortDiv),this.viewPortDiv=null,this.tileManager&&(this.tileManager.removeMap(this),this.tileManager=null),this.eventListeners&&(this.events.un(this.eventListeners),this.eventListeners=null),this.events.destroy(),this.options=this.events=null
},setOptions:function(e){var t=this.minPx&&e.restrictedExtent!=this.restrictedExtent;
OpenLayers.Util.extend(this,e),t&&this.moveTo(this.getCachedCenter(),this.zoom,{forceZoomChange:!0})
},getTileSize:function(){return this.tileSize},getBy:function(e,t,i){var r="function"==typeof i.test;
return OpenLayers.Array.filter(this[e],function(e){return e[t]==i||r&&i.test(e[t])
})},getLayersBy:function(e,t){return this.getBy("layers",e,t)},getLayersByName:function(e){return this.getLayersBy("name",e)
},getLayersByClass:function(e){return this.getLayersBy("CLASS_NAME",e)},getControlsBy:function(e,t){return this.getBy("controls",e,t)
},getControlsByClass:function(e){return this.getControlsBy("CLASS_NAME",e)},getLayer:function(e){for(var t=null,i=0,r=this.layers.length;r>i;i++){var s=this.layers[i];
if(s.id==e){t=s;break}}return t},setLayerZIndex:function(e,t){e.setZIndex(this.Z_INDEX_BASE[e.isBaseLayer?"BaseLayer":"Overlay"]+5*t)
},resetLayersZIndex:function(){for(var e=0,t=this.layers.length;t>e;e++)this.setLayerZIndex(this.layers[e],e)
},addLayer:function(e){for(var t=0,i=this.layers.length;i>t;t++)if(this.layers[t]==e)return!1;
return!1===this.events.triggerEvent("preaddlayer",{layer:e})?!1:(this.allOverlays&&(e.isBaseLayer=!1),e.div.className="olLayerDiv",e.div.style.overflow="",this.setLayerZIndex(e,this.layers.length),e.isFixed?this.viewPortDiv.appendChild(e.div):this.layerContainerDiv.appendChild(e.div),this.layers.push(e),e.setMap(this),e.isBaseLayer||this.allOverlays&&!this.baseLayer?null==this.baseLayer?this.setBaseLayer(e):e.setVisibility(!1):e.redraw(),this.events.triggerEvent("addlayer",{layer:e}),e.events.triggerEvent("added",{map:this,layer:e}),e.afterAdd(),!0)
},addLayers:function(e){for(var t=0,i=e.length;i>t;t++)this.addLayer(e[t])},removeLayer:function(e,t){if(!1!==this.events.triggerEvent("preremovelayer",{layer:e})){if(null==t&&(t=!0),e.isFixed?this.viewPortDiv.removeChild(e.div):this.layerContainerDiv.removeChild(e.div),OpenLayers.Util.removeItem(this.layers,e),e.removeMap(this),e.map=null,this.baseLayer==e&&(this.baseLayer=null,t))for(var i=0,r=this.layers.length;r>i;i++){var s=this.layers[i];
if(s.isBaseLayer||this.allOverlays){this.setBaseLayer(s);break}}this.resetLayersZIndex(),this.events.triggerEvent("removelayer",{layer:e}),e.events.triggerEvent("removed",{map:this,layer:e})
}},getNumLayers:function(){return this.layers.length},getLayerIndex:function(e){return OpenLayers.Util.indexOf(this.layers,e)
},setLayerIndex:function(e,t){var i=this.getLayerIndex(e);if(0>t?t=0:t>this.layers.length&&(t=this.layers.length),i!=t){this.layers.splice(i,1),this.layers.splice(t,0,e);
for(var i=0,r=this.layers.length;r>i;i++)this.setLayerZIndex(this.layers[i],i);this.events.triggerEvent("changelayer",{layer:e,property:"order"}),this.allOverlays&&(0===t?this.setBaseLayer(e):this.baseLayer!==this.layers[0]&&this.setBaseLayer(this.layers[0]))
}},raiseLayer:function(e,t){var i=this.getLayerIndex(e)+t;this.setLayerIndex(e,i)
},setBaseLayer:function(e){if(e!=this.baseLayer&&-1!=OpenLayers.Util.indexOf(this.layers,e)){var t=this.getCachedCenter(),i=OpenLayers.Util.getResolutionFromScale(this.getScale(),e.units);
null==this.baseLayer||this.allOverlays||this.baseLayer.setVisibility(!1),this.baseLayer=e,(!this.allOverlays||this.baseLayer.visibility)&&(this.baseLayer.setVisibility(!0),!1===this.baseLayer.inRange&&this.baseLayer.redraw()),null!=t&&(e=this.getZoomForResolution(i||this.resolution,!0),this.setCenter(t,e,!1,!0)),this.events.triggerEvent("changebaselayer",{layer:this.baseLayer})
}},addControl:function(e,t){this.controls.push(e),this.addControlToMap(e,t)},addControls:function(e,t){for(var i=1===arguments.length?[]:t,r=0,s=e.length;s>r;r++)this.addControl(e[r],i[r]?i[r]:null)
},addControlToMap:function(e,t){e.outsideViewport=null!=e.div,this.displayProjection&&!e.displayProjection&&(e.displayProjection=this.displayProjection),e.setMap(this);
var i=e.draw(t);i&&!e.outsideViewport&&(i.style.zIndex=this.Z_INDEX_BASE.Control+this.controls.length,this.viewPortDiv.appendChild(i)),e.autoActivate&&e.activate()
},getControl:function(e){for(var t=null,i=0,r=this.controls.length;r>i;i++){var s=this.controls[i];
if(s.id==e){t=s;break}}return t},removeControl:function(e){e&&e==this.getControl(e.id)&&(e.div&&e.div.parentNode==this.viewPortDiv&&this.viewPortDiv.removeChild(e.div),OpenLayers.Util.removeItem(this.controls,e))
},addPopup:function(e,t){if(t)for(var i=this.popups.length-1;i>=0;--i)this.removePopup(this.popups[i]);
e.map=this,this.popups.push(e),(i=e.draw())&&(i.style.zIndex=this.Z_INDEX_BASE.Popup+this.popups.length,this.layerContainerDiv.appendChild(i))
},removePopup:function(e){if(OpenLayers.Util.removeItem(this.popups,e),e.div)try{this.layerContainerDiv.removeChild(e.div)
}catch(t){}e.map=null},getSize:function(){var e=null;return null!=this.size&&(e=this.size.clone()),e
},updateSize:function(){var e=this.getCurrentSize();if(e&&!isNaN(e.h)&&!isNaN(e.w)){this.events.clearMouseCache();
var t=this.getSize();if(null==t&&(this.size=t=e),!e.equals(t)){for(this.size=e,e=0,t=this.layers.length;t>e;e++)this.layers[e].onMapResize();
e=this.getCachedCenter(),null!=this.baseLayer&&null!=e&&(t=this.getZoom(),this.zoom=null,this.setCenter(e,t))
}}this.events.triggerEvent("updatesize")},getCurrentSize:function(){var e=new OpenLayers.Size(this.div.clientWidth,this.div.clientHeight);
return(0==e.w&&0==e.h||isNaN(e.w)&&isNaN(e.h))&&(e.w=this.div.offsetWidth,e.h=this.div.offsetHeight),(0==e.w&&0==e.h||isNaN(e.w)&&isNaN(e.h))&&(e.w=parseInt(this.div.style.width),e.h=parseInt(this.div.style.height)),e
},calculateBounds:function(e,t){var i=null;if(null==e&&(e=this.getCachedCenter()),null==t&&(t=this.getResolution()),null!=e&&null!=t)var i=this.size.w*t/2,r=this.size.h*t/2,i=new OpenLayers.Bounds(e.lon-i,e.lat-r,e.lon+i,e.lat+r);
return i},getCenter:function(){var e=null,t=this.getCachedCenter();return t&&(e=t.clone()),e
},getCachedCenter:function(){return!this.center&&this.size&&(this.center=this.getLonLatFromViewPortPx({x:this.size.w/2,y:this.size.h/2})),this.center
},getZoom:function(){return this.zoom},pan:function(e,t,i){if(i=OpenLayers.Util.applyDefaults(i,{animate:!0,dragging:!1}),i.dragging)0==e&&0==t||this.moveByPx(e,t);
else{var r=this.getViewPortPxFromLonLat(this.getCachedCenter());e=r.add(e,t),(this.dragging||!e.equals(r))&&(r=this.getLonLatFromViewPortPx(e),i.animate?this.panTo(r):(this.moveTo(r),this.dragging&&(this.dragging=!1,this.events.triggerEvent("moveend"))))
}},panTo:function(e){if(this.panTween&&this.getExtent().scale(this.panRatio).containsLonLat(e)){var t=this.getCachedCenter();
if(!e.equals(t)){var t=this.getPixelFromLonLat(t),i=this.getPixelFromLonLat(e),r=0,s=0;
this.panTween.start({x:0,y:0},{x:i.x-t.x,y:i.y-t.y},this.panDuration,{callbacks:{eachStep:OpenLayers.Function.bind(function(e){this.moveByPx(e.x-r,e.y-s),r=Math.round(e.x),s=Math.round(e.y)
},this),done:OpenLayers.Function.bind(function(){this.moveTo(e),this.dragging=!1,this.events.triggerEvent("moveend")
},this)}})}}else this.setCenter(e)},setCenter:function(e,t,i,r){this.panTween&&this.panTween.stop(),this.zoomTween&&this.zoomTween.stop(),this.moveTo(e,t,{dragging:i,forceZoomChange:r})
},moveByPx:function(e,t){var i=this.size.w/2,r=this.size.h/2,s=i+e,n=r+t,a=this.baseLayer.wrapDateLine,o=0,l=0;
if(this.restrictedExtent&&(o=i,l=r,a=!1),e=a||s<=this.maxPx.x-o&&s>=this.minPx.x+o?Math.round(e):0,t=n<=this.maxPx.y-l&&n>=this.minPx.y+l?Math.round(t):0,e||t){for(this.dragging||(this.dragging=!0,this.events.triggerEvent("movestart")),this.center=null,e&&(this.layerContainerOriginPx.x-=e,this.minPx.x-=e,this.maxPx.x-=e),t&&(this.layerContainerOriginPx.y-=t,this.minPx.y-=t,this.maxPx.y-=t),this.applyTransform(),r=0,s=this.layers.length;s>r;++r)i=this.layers[r],i.visibility&&(i===this.baseLayer||i.inRange)&&(i.moveByPx(e,t),i.events.triggerEvent("move"));
this.events.triggerEvent("move")}},adjustZoom:function(e){if(this.baseLayer&&this.baseLayer.wrapDateLine){var t=this.baseLayer.resolutions,i=this.getMaxExtent().getWidth()/this.size.w;
if(this.getResolutionForZoom(e)>i)if(this.fractionalZoom)e=this.getZoomForResolution(i);
else for(var r=0|e,s=t.length;s>r;++r)if(t[r]<=i){e=r;break}}return e},getMinZoom:function(){return this.adjustZoom(0)
},moveTo:function(e,t,i){null==e||e instanceof OpenLayers.LonLat||(e=new OpenLayers.LonLat(e)),i||(i={}),null!=t&&(t=parseFloat(t),this.fractionalZoom||(t=Math.round(t)));
var r=t;t=this.adjustZoom(t),t!==r&&(e=this.getCenter());var r=i.dragging||this.dragging,s=i.forceZoomChange;
if(this.getCachedCenter()||this.isValidLonLat(e)||(e=this.maxExtent.getCenterLonLat(),this.center=e.clone()),null!=this.restrictedExtent){null==e&&(e=this.center),null==t&&(t=this.getZoom());
var n=this.getResolutionForZoom(t),n=this.calculateBounds(e,n);if(!this.restrictedExtent.containsBounds(n)){var a=this.restrictedExtent.getCenterLonLat();
n.getWidth()>this.restrictedExtent.getWidth()?e=new OpenLayers.LonLat(a.lon,e.lat):n.left<this.restrictedExtent.left?e=e.add(this.restrictedExtent.left-n.left,0):n.right>this.restrictedExtent.right&&(e=e.add(this.restrictedExtent.right-n.right,0)),n.getHeight()>this.restrictedExtent.getHeight()?e=new OpenLayers.LonLat(e.lon,a.lat):n.bottom<this.restrictedExtent.bottom?e=e.add(0,this.restrictedExtent.bottom-n.bottom):n.top>this.restrictedExtent.top&&(e=e.add(0,this.restrictedExtent.top-n.top))
}}if(s=s||this.isValidZoomLevel(t)&&t!=this.getZoom(),n=this.isValidLonLat(e)&&!e.equals(this.center),s||n||r){if(r||this.events.triggerEvent("movestart",{zoomChanged:s}),n&&(!s&&this.center&&this.centerLayerContainer(e),this.center=e.clone()),e=s?this.getResolutionForZoom(t):this.getResolution(),s||null==this.layerContainerOrigin){this.layerContainerOrigin=this.getCachedCenter(),this.layerContainerOriginPx.x=0,this.layerContainerOriginPx.y=0,this.applyTransform();
var n=this.getMaxExtent({restricted:!0}),o=n.getCenterLonLat(),a=this.center.lon-o.lon,o=o.lat-this.center.lat,l=Math.round(n.getWidth()/e),h=Math.round(n.getHeight()/e);
this.minPx={x:(this.size.w-l)/2-a/e,y:(this.size.h-h)/2-o/e},this.maxPx={x:this.minPx.x+Math.round(n.getWidth()/e),y:this.minPx.y+Math.round(n.getHeight()/e)}
}for(s&&(this.zoom=t,this.resolution=e),e=this.getExtent(),this.baseLayer.visibility&&(this.baseLayer.moveTo(e,s,i.dragging),i.dragging||this.baseLayer.events.triggerEvent("moveend",{zoomChanged:s})),e=this.baseLayer.getExtent(),t=this.layers.length-1;t>=0;--t)n=this.layers[t],n===this.baseLayer||n.isBaseLayer||(a=n.calculateInRange(),n.inRange!=a&&((n.inRange=a)||n.display(!1),this.events.triggerEvent("changelayer",{layer:n,property:"visibility"})),a&&n.visibility&&(n.moveTo(e,s,i.dragging),i.dragging||n.events.triggerEvent("moveend",{zoomChanged:s})));
if(this.events.triggerEvent("move"),r||this.events.triggerEvent("moveend"),s){for(t=0,i=this.popups.length;i>t;t++)this.popups[t].updatePosition();
this.events.triggerEvent("zoomend")}}},centerLayerContainer:function(e){var t=this.getViewPortPxFromLonLat(this.layerContainerOrigin),i=this.getViewPortPxFromLonLat(e);
if(null!=t&&null!=i){var r=this.layerContainerOriginPx.x;e=this.layerContainerOriginPx.y;
var s=Math.round(t.x-i.x),t=Math.round(t.y-i.y);this.applyTransform(this.layerContainerOriginPx.x=s,this.layerContainerOriginPx.y=t),r-=s,e-=t,this.minPx.x-=r,this.maxPx.x-=r,this.minPx.y-=e,this.maxPx.y-=e
}},isValidZoomLevel:function(e){return null!=e&&e>=0&&e<this.getNumZoomLevels()},isValidLonLat:function(e){var t=!1;
return null!=e&&(t=this.getMaxExtent(),t=t.containsLonLat(e,{worldBounds:this.baseLayer.wrapDateLine&&t})),t
},getProjection:function(){var e=this.getProjectionObject();return e?e.getCode():null
},getProjectionObject:function(){var e=null;return null!=this.baseLayer&&(e=this.baseLayer.projection),e
},getMaxResolution:function(){var e=null;return null!=this.baseLayer&&(e=this.baseLayer.maxResolution),e
},getMaxExtent:function(e){var t=null;return e&&e.restricted&&this.restrictedExtent?t=this.restrictedExtent:null!=this.baseLayer&&(t=this.baseLayer.maxExtent),t
},getNumZoomLevels:function(){var e=null;return null!=this.baseLayer&&(e=this.baseLayer.numZoomLevels),e
},getExtent:function(){var e=null;return null!=this.baseLayer&&(e=this.baseLayer.getExtent()),e
},getResolution:function(){var e=null;return null!=this.baseLayer?e=this.baseLayer.getResolution():!0===this.allOverlays&&0<this.layers.length&&(e=this.layers[0].getResolution()),e
},getUnits:function(){var e=null;return null!=this.baseLayer&&(e=this.baseLayer.units),e
},getScale:function(){var e=null;return null!=this.baseLayer&&(e=this.getResolution(),e=OpenLayers.Util.getScaleFromResolution(e,this.baseLayer.units)),e
},getZoomForExtent:function(e,t){var i=null;return null!=this.baseLayer&&(i=this.baseLayer.getZoomForExtent(e,t)),i
},getResolutionForZoom:function(e){var t=null;return this.baseLayer&&(t=this.baseLayer.getResolutionForZoom(e)),t
},getZoomForResolution:function(e,t){var i=null;return null!=this.baseLayer&&(i=this.baseLayer.getZoomForResolution(e,t)),i
},zoomTo:function(e,t){var i=this;if(i.isValidZoomLevel(e))if(i.baseLayer.wrapDateLine&&(e=i.adjustZoom(e)),i.zoomTween){var r=i.getResolution(),s=i.getResolutionForZoom(e),n={scale:1},r={scale:r/s};
i.zoomTween.playing&&i.zoomTween.duration<3*i.zoomDuration?i.zoomTween.finish={scale:i.zoomTween.finish.scale*r.scale}:(t||(s=i.getSize(),t={x:s.w/2,y:s.h/2}),i.zoomTween.start(n,r,i.zoomDuration,{minFrameRate:50,callbacks:{eachStep:function(e){var r=i.layerContainerOriginPx;
e=e.scale,i.applyTransform(r.x+((e-1)*(r.x-t.x)|0),r.y+((e-1)*(r.y-t.y)|0),e)},done:function(e){i.applyTransform(),e=i.getResolution()/e.scale;
var r=i.getZoomForResolution(e,!0);i.moveTo(i.getZoomTargetCenter(t,e),r,!0)}}}))
}else n=t?i.getZoomTargetCenter(t,i.getResolutionForZoom(e)):null,i.setCenter(n,e)
},zoomIn:function(){this.zoomTo(this.getZoom()+1)},zoomOut:function(){this.zoomTo(this.getZoom()-1)
},zoomToExtent:function(e,t){e instanceof OpenLayers.Bounds||(e=new OpenLayers.Bounds(e));
var i=e.getCenterLonLat();if(this.baseLayer.wrapDateLine){for(i=this.getMaxExtent(),e=e.clone();e.right<e.left;)e.right+=i.getWidth();
i=e.getCenterLonLat().wrapDateLine(i)}this.setCenter(i,this.getZoomForExtent(e,t))
},zoomToMaxExtent:function(e){e=this.getMaxExtent({restricted:e?e.restricted:!0}),this.zoomToExtent(e)
},zoomToScale:function(e,t){var i=OpenLayers.Util.getResolutionFromScale(e,this.baseLayer.units),r=this.size.w*i/2,i=this.size.h*i/2,s=this.getCachedCenter(),r=new OpenLayers.Bounds(s.lon-r,s.lat-i,s.lon+r,s.lat+i);
this.zoomToExtent(r,t)},getLonLatFromViewPortPx:function(e){var t=null;return null!=this.baseLayer&&(t=this.baseLayer.getLonLatFromViewPortPx(e)),t
},getViewPortPxFromLonLat:function(e){var t=null;return null!=this.baseLayer&&(t=this.baseLayer.getViewPortPxFromLonLat(e)),t
},getZoomTargetCenter:function(e,t){var i=null,r=this.getSize(),s=r.w/2-e.x,r=e.y-r.h/2,n=this.getLonLatFromPixel(e);
return n&&(i=new OpenLayers.LonLat(n.lon+s*t,n.lat+r*t)),i},getLonLatFromPixel:function(e){return this.getLonLatFromViewPortPx(e)
},getPixelFromLonLat:function(e){return e=this.getViewPortPxFromLonLat(e),e.x=Math.round(e.x),e.y=Math.round(e.y),e
},getGeodesicPixelSize:function(e){var t=e?this.getLonLatFromPixel(e):this.getCachedCenter()||new OpenLayers.LonLat(0,0),i=this.getResolution();
e=t.add(-i/2,0);var r=t.add(i/2,0),s=t.add(0,-i/2),t=t.add(0,i/2),i=new OpenLayers.Projection("EPSG:4326"),n=this.getProjectionObject()||i;
return n.equals(i)||(e.transform(n,i),r.transform(n,i),s.transform(n,i),t.transform(n,i)),new OpenLayers.Size(OpenLayers.Util.distVincenty(e,r),OpenLayers.Util.distVincenty(s,t))
},getViewPortPxFromLayerPx:function(e){var t=null;return null!=e&&(t=e.add(this.layerContainerOriginPx.x,this.layerContainerOriginPx.y)),t
},getLayerPxFromViewPortPx:function(e){var t=null;return null!=e&&(t=e.add(-this.layerContainerOriginPx.x,-this.layerContainerOriginPx.y),isNaN(t.x)||isNaN(t.y))&&(t=null),t
},getLonLatFromLayerPx:function(e){return e=this.getViewPortPxFromLayerPx(e),this.getLonLatFromViewPortPx(e)
},getLayerPxFromLonLat:function(e){return e=this.getPixelFromLonLat(e),this.getLayerPxFromViewPortPx(e)
},applyTransform:function(e,t,i){i=i||1;var r=this.layerContainerOriginPx,s=1!==i;
e=e||r.x,t=t||r.y;var n=this.layerContainerDiv.style,a=this.applyTransform.transform,o=this.applyTransform.template;
if(void 0===a&&(a=OpenLayers.Util.vendorPrefix.style("transform"),this.applyTransform.transform=a)){var l=OpenLayers.Element.getStyle(this.viewPortDiv,OpenLayers.Util.vendorPrefix.css("transform"));
l&&"none"===l||(o=["translate3d(",",0) ","scale3d(",",1)"],n[a]=[o[0],"0,0",o[1]].join("")),o&&~n[a].indexOf(o[0])||(o=["translate(",") ","scale(",")"]),this.applyTransform.template=o
}null===a||"translate3d("!==o[0]&&!0!==s?(n.left=e+"px",n.top=t+"px",null!==a&&(n[a]="")):(!0===s&&"translate("===o[0]&&(e-=r.x,t-=r.y,n.left=r.x+"px",n.top=r.y+"px"),n[a]=[o[0],e,"px,",t,"px",o[1],o[2],i,",",i,o[3]].join(""))
},CLASS_NAME:"OpenLayers.Map"}),OpenLayers.Map.TILE_WIDTH=256,OpenLayers.Map.TILE_HEIGHT=256,OpenLayers.Handler=OpenLayers.Class({id:null,control:null,map:null,keyMask:null,active:!1,evt:null,touch:!1,initialize:function(e,t,i){OpenLayers.Util.extend(this,i),this.control=e,this.callbacks=t,(e=this.map||e.map)&&this.setMap(e),this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_")
},setMap:function(e){this.map=e},checkModifiers:function(e){return null==this.keyMask?!0:((e.shiftKey?OpenLayers.Handler.MOD_SHIFT:0)|(e.ctrlKey?OpenLayers.Handler.MOD_CTRL:0)|(e.altKey?OpenLayers.Handler.MOD_ALT:0)|(e.metaKey?OpenLayers.Handler.MOD_META:0))==this.keyMask
},activate:function(){if(this.active)return!1;for(var e=OpenLayers.Events.prototype.BROWSER_EVENTS,t=0,i=e.length;i>t;t++)this[e[t]]&&this.register(e[t],this[e[t]]);
return this.active=!0},deactivate:function(){if(!this.active)return!1;for(var e=OpenLayers.Events.prototype.BROWSER_EVENTS,t=0,i=e.length;i>t;t++)this[e[t]]&&this.unregister(e[t],this[e[t]]);
return this.active=this.touch=!1,!0},startTouch:function(){if(!this.touch){this.touch=!0;
for(var e="mousedown mouseup mousemove click dblclick mouseout".split(" "),t=0,i=e.length;i>t;t++)this[e[t]]&&this.unregister(e[t],this[e[t]])
}},callback:function(e,t){e&&this.callbacks[e]&&this.callbacks[e].apply(this.control,t)
},register:function(e,t){this.map.events.registerPriority(e,this,t),this.map.events.registerPriority(e,this,this.setEvent)
},unregister:function(e,t){this.map.events.unregister(e,this,t),this.map.events.unregister(e,this,this.setEvent)
},setEvent:function(e){return this.evt=e,!0},destroy:function(){this.deactivate(),this.control=this.map=null
},CLASS_NAME:"OpenLayers.Handler"}),OpenLayers.Handler.MOD_NONE=0,OpenLayers.Handler.MOD_SHIFT=1,OpenLayers.Handler.MOD_CTRL=2,OpenLayers.Handler.MOD_ALT=4,OpenLayers.Handler.MOD_META=8,OpenLayers.Handler.Click=OpenLayers.Class(OpenLayers.Handler,{delay:300,single:!0,"double":!1,pixelTolerance:0,dblclickTolerance:13,stopSingle:!1,stopDouble:!1,timerId:null,down:null,last:null,first:null,rightclickTimerId:null,touchstart:function(e){return this.startTouch(),this.down=this.getEventInfo(e),this.last=this.getEventInfo(e),!0
},touchmove:function(e){return this.last=this.getEventInfo(e),!0},touchend:function(e){return this.down&&(e.xy=this.last.xy,e.lastTouches=this.last.touches,this.handleSingle(e),this.down=null),!0
},mousedown:function(e){return this.down=this.getEventInfo(e),this.last=this.getEventInfo(e),!0
},mouseup:function(e){var t=!0;return this.checkModifiers(e)&&this.control.handleRightClicks&&OpenLayers.Event.isRightClick(e)&&(t=this.rightclick(e)),t
},rightclick:function(e){if(this.passesTolerance(e)){if(null!=this.rightclickTimerId)return this.clearTimer(),this.callback("dblrightclick",[e]),!this.stopDouble;
e=this["double"]?OpenLayers.Util.extend({},e):this.callback("rightclick",[e]),e=OpenLayers.Function.bind(this.delayedRightCall,this,e),this.rightclickTimerId=window.setTimeout(e,this.delay)
}return!this.stopSingle},delayedRightCall:function(e){this.rightclickTimerId=null,e&&this.callback("rightclick",[e])
},click:function(e){return this.last||(this.last=this.getEventInfo(e)),this.handleSingle(e),!this.stopSingle
},dblclick:function(e){return this.handleDouble(e),!this.stopDouble},handleDouble:function(e){this.passesDblclickTolerance(e)&&(this["double"]&&this.callback("dblclick",[e]),this.clearTimer())
},handleSingle:function(e){this.passesTolerance(e)&&(null!=this.timerId?(this.last.touches&&1===this.last.touches.length&&(this["double"]&&OpenLayers.Event.preventDefault(e),this.handleDouble(e)),this.last.touches&&2===this.last.touches.length||this.clearTimer()):(this.first=this.getEventInfo(e),e=this.single?OpenLayers.Util.extend({},e):null,this.queuePotentialClick(e)))
},queuePotentialClick:function(e){this.timerId=window.setTimeout(OpenLayers.Function.bind(this.delayedCall,this,e),this.delay)
},passesTolerance:function(e){var t=!0;if(null!=this.pixelTolerance&&this.down&&this.down.xy&&(t=this.pixelTolerance>=this.down.xy.distanceTo(e.xy))&&this.touch&&this.down.touches.length===this.last.touches.length){e=0;
for(var i=this.down.touches.length;i>e;++e)if(this.getTouchDistance(this.down.touches[e],this.last.touches[e])>this.pixelTolerance){t=!1;
break}}return t},getTouchDistance:function(e,t){return Math.sqrt(Math.pow(e.clientX-t.clientX,2)+Math.pow(e.clientY-t.clientY,2))
},passesDblclickTolerance:function(e){return e=!0,this.down&&this.first&&(e=this.down.xy.distanceTo(this.first.xy)<=this.dblclickTolerance),e
},clearTimer:function(){null!=this.timerId&&(window.clearTimeout(this.timerId),this.timerId=null),null!=this.rightclickTimerId&&(window.clearTimeout(this.rightclickTimerId),this.rightclickTimerId=null)
},delayedCall:function(e){this.timerId=null,e&&this.callback("click",[e])},getEventInfo:function(e){var t;
if(e.touches){var i=e.touches.length;t=Array(i);for(var r,s=0;i>s;s++)r=e.touches[s],t[s]={clientX:r.olClientX,clientY:r.olClientY}
}return{xy:e.xy,touches:t}},deactivate:function(){var e=!1;return OpenLayers.Handler.prototype.deactivate.apply(this,arguments)&&(this.clearTimer(),this.last=this.first=this.down=null,e=!0),e
},CLASS_NAME:"OpenLayers.Handler.Click"}),OpenLayers.Handler.Drag=OpenLayers.Class(OpenLayers.Handler,{started:!1,stopDown:!0,dragging:!1,last:null,start:null,lastMoveEvt:null,oldOnselectstart:null,interval:0,timeoutId:null,documentDrag:!1,documentEvents:null,initialize:function(){if(OpenLayers.Handler.prototype.initialize.apply(this,arguments),!0===this.documentDrag){var e=this;
this._docMove=function(t){e.mousemove({xy:{x:t.clientX,y:t.clientY},element:document})
},this._docUp=function(t){e.mouseup({xy:{x:t.clientX,y:t.clientY}})}}},dragstart:function(e){var t=!0;
return this.dragging=!1,this.checkModifiers(e)&&(OpenLayers.Event.isLeftClick(e)||OpenLayers.Event.isSingleTouch(e))?(this.started=!0,this.last=this.start=e.xy,OpenLayers.Element.addClass(this.map.viewPortDiv,"olDragDown"),this.down(e),this.callback("down",[e.xy]),OpenLayers.Event.preventDefault(e),this.oldOnselectstart||(this.oldOnselectstart=document.onselectstart?document.onselectstart:OpenLayers.Function.True),document.onselectstart=OpenLayers.Function.False,t=!this.stopDown):(this.started=!1,this.last=this.start=null),t
},dragmove:function(e){return this.lastMoveEvt=e,!this.started||this.timeoutId||e.xy.x==this.last.x&&e.xy.y==this.last.y||(!0===this.documentDrag&&this.documentEvents&&(e.element===document?(this.adjustXY(e),this.setEvent(e)):this.removeDocumentEvents()),0<this.interval&&(this.timeoutId=setTimeout(OpenLayers.Function.bind(this.removeTimeout,this),this.interval)),this.dragging=!0,this.move(e),this.callback("move",[e.xy]),this.oldOnselectstart||(this.oldOnselectstart=document.onselectstart,document.onselectstart=OpenLayers.Function.False),this.last=e.xy),!0
},dragend:function(e){if(this.started){!0===this.documentDrag&&this.documentEvents&&(this.adjustXY(e),this.removeDocumentEvents());
var t=this.start!=this.last;this.dragging=this.started=!1,OpenLayers.Element.removeClass(this.map.viewPortDiv,"olDragDown"),this.up(e),this.callback("up",[e.xy]),t&&this.callback("done",[e.xy]),document.onselectstart=this.oldOnselectstart
}return!0},down:function(){},move:function(){},up:function(){},out:function(){},mousedown:function(e){return this.dragstart(e)
},touchstart:function(e){return this.startTouch(),this.dragstart(e)},mousemove:function(e){return this.dragmove(e)
},touchmove:function(e){return this.dragmove(e)},removeTimeout:function(){this.timeoutId=null,this.dragging&&this.mousemove(this.lastMoveEvt)
},mouseup:function(e){return this.dragend(e)},touchend:function(e){return e.xy=this.last,this.dragend(e)
},mouseout:function(e){if(this.started&&OpenLayers.Util.mouseLeft(e,this.map.viewPortDiv))if(!0===this.documentDrag)this.addDocumentEvents();
else{var t=this.start!=this.last;this.dragging=this.started=!1,OpenLayers.Element.removeClass(this.map.viewPortDiv,"olDragDown"),this.out(e),this.callback("out",[]),t&&this.callback("done",[e.xy]),document.onselectstart&&(document.onselectstart=this.oldOnselectstart)
}return!0},click:function(){return this.start==this.last},activate:function(){var e=!1;
return OpenLayers.Handler.prototype.activate.apply(this,arguments)&&(this.dragging=!1,e=!0),e
},deactivate:function(){var e=!1;return OpenLayers.Handler.prototype.deactivate.apply(this,arguments)&&(this.dragging=this.started=!1,this.last=this.start=null,e=!0,OpenLayers.Element.removeClass(this.map.viewPortDiv,"olDragDown")),e
},adjustXY:function(e){var t=OpenLayers.Util.pagePosition(this.map.viewPortDiv);e.xy.x-=t[0],e.xy.y-=t[1]
},addDocumentEvents:function(){OpenLayers.Element.addClass(document.body,"olDragDown"),this.documentEvents=!0,OpenLayers.Event.observe(document,"mousemove",this._docMove),OpenLayers.Event.observe(document,"mouseup",this._docUp)
},removeDocumentEvents:function(){OpenLayers.Element.removeClass(document.body,"olDragDown"),this.documentEvents=!1,OpenLayers.Event.stopObserving(document,"mousemove",this._docMove),OpenLayers.Event.stopObserving(document,"mouseup",this._docUp)
},CLASS_NAME:"OpenLayers.Handler.Drag"}),OpenLayers.Control.OverviewMap=OpenLayers.Class(OpenLayers.Control,{element:null,ovmap:null,size:{w:180,h:90},layers:null,minRectSize:15,minRectDisplayClass:"RectReplacement",minRatio:8,maxRatio:32,mapOptions:null,autoPan:!1,handlers:null,resolutionFactor:1,maximized:!1,maximizeTitle:"",minimizeTitle:"",initialize:function(e){this.layers=[],this.handlers={},OpenLayers.Control.prototype.initialize.apply(this,[e])
},destroy:function(){this.mapDiv&&(this.handlers.click&&this.handlers.click.destroy(),this.handlers.drag&&this.handlers.drag.destroy(),this.ovmap&&this.ovmap.viewPortDiv.removeChild(this.extentRectangle),this.extentRectangle=null,this.rectEvents&&(this.rectEvents.destroy(),this.rectEvents=null),this.ovmap&&(this.ovmap.destroy(),this.ovmap=null),this.element.removeChild(this.mapDiv),this.mapDiv=null,this.div.removeChild(this.element),this.element=null,this.maximizeDiv&&(this.div.removeChild(this.maximizeDiv),this.maximizeDiv=null),this.minimizeDiv&&(this.div.removeChild(this.minimizeDiv),this.minimizeDiv=null),this.map.events.un({buttonclick:this.onButtonClick,moveend:this.update,changebaselayer:this.baseLayerDraw,scope:this}),OpenLayers.Control.prototype.destroy.apply(this,arguments))
},draw:function(){if(OpenLayers.Control.prototype.draw.apply(this,arguments),0===this.layers.length){if(!this.map.baseLayer)return this.map.events.register("changebaselayer",this,this.baseLayerDraw),this.div;
this.layers=[this.map.baseLayer.clone()]}if(this.element=document.createElement("div"),this.element.className=this.displayClass+"Element",this.element.style.display="none",this.mapDiv=document.createElement("div"),this.mapDiv.style.width=this.size.w+"px",this.mapDiv.style.height=this.size.h+"px",this.mapDiv.style.position="relative",this.mapDiv.style.overflow="hidden",this.mapDiv.id=OpenLayers.Util.createUniqueID("overviewMap"),this.extentRectangle=document.createElement("div"),this.extentRectangle.style.position="absolute",this.extentRectangle.style.zIndex=1e3,this.extentRectangle.className=this.displayClass+"ExtentRectangle",this.element.appendChild(this.mapDiv),this.div.appendChild(this.element),this.outsideViewport)this.element.style.display="";
else{this.div.className+=" "+this.displayClass+"Container";var e=OpenLayers.Util.getImageLocation("layer-switcher-maximize.png");
this.maximizeDiv=OpenLayers.Util.createAlphaImageDiv(this.displayClass+"MaximizeButton",null,null,e,"absolute"),this.maximizeDiv.style.display="none",this.maximizeDiv.className=this.displayClass+"MaximizeButton olButton",this.maximizeTitle&&(this.maximizeDiv.title=this.maximizeTitle),this.div.appendChild(this.maximizeDiv),e=OpenLayers.Util.getImageLocation("layer-switcher-minimize.png"),this.minimizeDiv=OpenLayers.Util.createAlphaImageDiv("OpenLayers_Control_minimizeDiv",null,null,e,"absolute"),this.minimizeDiv.style.display="none",this.minimizeDiv.className=this.displayClass+"MinimizeButton olButton",this.minimizeTitle&&(this.minimizeDiv.title=this.minimizeTitle),this.div.appendChild(this.minimizeDiv),this.minimizeControl()
}return this.map.getExtent()&&this.update(),this.map.events.on({buttonclick:this.onButtonClick,moveend:this.update,scope:this}),this.maximized&&this.maximizeControl(),this.div
},baseLayerDraw:function(){this.draw(),this.map.events.unregister("changebaselayer",this,this.baseLayerDraw)
},rectDrag:function(e){var t=this.handlers.drag.last.x-e.x,i=this.handlers.drag.last.y-e.y;
if(0!=t||0!=i){var r=this.rectPxBounds.top,s=this.rectPxBounds.left;e=Math.abs(this.rectPxBounds.getHeight());
var n=this.rectPxBounds.getWidth(),i=Math.max(0,r-i),i=Math.min(i,this.ovmap.size.h-this.hComp-e),t=Math.max(0,s-t),t=Math.min(t,this.ovmap.size.w-this.wComp-n);
this.setRectPxBounds(new OpenLayers.Bounds(t,i+e,t+n,i))}},mapDivClick:function(e){var t=this.rectPxBounds.getCenterPixel(),i=e.xy.x-t.x,r=e.xy.y-t.y,s=this.rectPxBounds.top,n=this.rectPxBounds.left;
e=Math.abs(this.rectPxBounds.getHeight()),t=this.rectPxBounds.getWidth(),r=Math.max(0,s+r),r=Math.min(r,this.ovmap.size.h-e),i=Math.max(0,n+i),i=Math.min(i,this.ovmap.size.w-t),this.setRectPxBounds(new OpenLayers.Bounds(i,r+e,i+t,r)),this.updateMapToRect()
},onButtonClick:function(e){e.buttonElement===this.minimizeDiv?this.minimizeControl():e.buttonElement===this.maximizeDiv&&this.maximizeControl()
},maximizeControl:function(e){this.element.style.display="",this.showToggle(!1),null!=e&&OpenLayers.Event.stop(e)
},minimizeControl:function(e){this.element.style.display="none",this.showToggle(!0),null!=e&&OpenLayers.Event.stop(e)
},showToggle:function(e){this.maximizeDiv&&(this.maximizeDiv.style.display=e?"":"none"),this.minimizeDiv&&(this.minimizeDiv.style.display=e?"none":"")
},update:function(){null==this.ovmap&&this.createMap(),!this.autoPan&&this.isSuitableOverview()||this.updateOverview(),this.updateRectToMap()
},isSuitableOverview:function(){var e=this.map.getExtent(),t=this.map.getMaxExtent(),e=new OpenLayers.Bounds(Math.max(e.left,t.left),Math.max(e.bottom,t.bottom),Math.min(e.right,t.right),Math.min(e.top,t.top));
return this.ovmap.getProjection()!=this.map.getProjection()&&(e=e.transform(this.map.getProjectionObject(),this.ovmap.getProjectionObject())),t=this.ovmap.getResolution()/this.map.getResolution(),t>this.minRatio&&t<=this.maxRatio&&this.ovmap.getExtent().containsBounds(e)
},updateOverview:function(){var e=this.map.getResolution(),t=this.ovmap.getResolution(),i=t/e;
i>this.maxRatio?t=this.minRatio*e:i<=this.minRatio&&(t=this.maxRatio*e),this.ovmap.getProjection()!=this.map.getProjection()?(e=this.map.center.clone(),e.transform(this.map.getProjectionObject(),this.ovmap.getProjectionObject())):e=this.map.center,this.ovmap.setCenter(e,this.ovmap.getZoomForResolution(t*this.resolutionFactor)),this.updateRectToMap()
},createMap:function(){var e=OpenLayers.Util.extend({controls:[],maxResolution:"auto",fallThrough:!1},this.mapOptions);
if(this.ovmap=new OpenLayers.Map(this.mapDiv,e),this.ovmap.viewPortDiv.appendChild(this.extentRectangle),OpenLayers.Event.stopObserving(window,"unload",this.ovmap.unloadDestroy),this.ovmap.addLayers(this.layers),this.ovmap.zoomToMaxExtent(),this.wComp=(this.wComp=parseInt(OpenLayers.Element.getStyle(this.extentRectangle,"border-left-width"))+parseInt(OpenLayers.Element.getStyle(this.extentRectangle,"border-right-width")))?this.wComp:2,this.hComp=(this.hComp=parseInt(OpenLayers.Element.getStyle(this.extentRectangle,"border-top-width"))+parseInt(OpenLayers.Element.getStyle(this.extentRectangle,"border-bottom-width")))?this.hComp:2,this.handlers.drag=new OpenLayers.Handler.Drag(this,{move:this.rectDrag,done:this.updateMapToRect},{map:this.ovmap}),this.handlers.click=new OpenLayers.Handler.Click(this,{click:this.mapDivClick},{single:!0,"double":!1,stopSingle:!0,stopDouble:!0,pixelTolerance:1,map:this.ovmap}),this.handlers.click.activate(),this.rectEvents=new OpenLayers.Events(this,this.extentRectangle,null,!0),this.rectEvents.register("mouseover",this,function(){this.handlers.drag.active||this.map.dragging||this.handlers.drag.activate()
}),this.rectEvents.register("mouseout",this,function(){this.handlers.drag.dragging||this.handlers.drag.deactivate()
}),this.ovmap.getProjection()!=this.map.getProjection()){var e=this.map.getProjectionObject().getUnits()||this.map.units||this.map.baseLayer.units,t=this.ovmap.getProjectionObject().getUnits()||this.ovmap.units||this.ovmap.baseLayer.units;
this.resolutionFactor=e&&t?OpenLayers.INCHES_PER_UNIT[e]/OpenLayers.INCHES_PER_UNIT[t]:1
}},updateRectToMap:function(){var e;e=this.ovmap.getProjection()!=this.map.getProjection()?this.map.getExtent().transform(this.map.getProjectionObject(),this.ovmap.getProjectionObject()):this.map.getExtent(),(e=this.getRectBoundsFromMapBounds(e))&&this.setRectPxBounds(e)
},updateMapToRect:function(){var e=this.getMapBoundsFromRectBounds(this.rectPxBounds);
this.ovmap.getProjection()!=this.map.getProjection()&&(e=e.transform(this.ovmap.getProjectionObject(),this.map.getProjectionObject())),this.map.panTo(e.getCenterLonLat())
},setRectPxBounds:function(e){var t=Math.max(e.top,0),i=Math.max(e.left,0),r=Math.min(e.top+Math.abs(e.getHeight()),this.ovmap.size.h-this.hComp);
e=Math.min(e.left+e.getWidth(),this.ovmap.size.w-this.wComp);var s=Math.max(e-i,0),n=Math.max(r-t,0);
s<this.minRectSize||n<this.minRectSize?(this.extentRectangle.className=this.displayClass+this.minRectDisplayClass,s=i+s/2-this.minRectSize/2,this.extentRectangle.style.top=Math.round(t+n/2-this.minRectSize/2)+"px",this.extentRectangle.style.left=Math.round(s)+"px",this.extentRectangle.style.height=this.minRectSize+"px",this.extentRectangle.style.width=this.minRectSize+"px"):(this.extentRectangle.className=this.displayClass+"ExtentRectangle",this.extentRectangle.style.top=Math.round(t)+"px",this.extentRectangle.style.left=Math.round(i)+"px",this.extentRectangle.style.height=Math.round(n)+"px",this.extentRectangle.style.width=Math.round(s)+"px"),this.rectPxBounds=new OpenLayers.Bounds(Math.round(i),Math.round(r),Math.round(e),Math.round(t))
},getRectBoundsFromMapBounds:function(e){var t=this.getOverviewPxFromLonLat({lon:e.left,lat:e.bottom});
e=this.getOverviewPxFromLonLat({lon:e.right,lat:e.top});var i=null;return t&&e&&(i=new OpenLayers.Bounds(t.x,t.y,e.x,e.y)),i
},getMapBoundsFromRectBounds:function(e){var t=this.getLonLatFromOverviewPx({x:e.left,y:e.bottom});
return e=this.getLonLatFromOverviewPx({x:e.right,y:e.top}),new OpenLayers.Bounds(t.lon,t.lat,e.lon,e.lat)
},getLonLatFromOverviewPx:function(e){var t=this.ovmap.size,i=this.ovmap.getResolution(),r=this.ovmap.getExtent().getCenterLonLat();
return{lon:r.lon+(e.x-t.w/2)*i,lat:r.lat-(e.y-t.h/2)*i}},getOverviewPxFromLonLat:function(e){var t=this.ovmap.getResolution(),i=this.ovmap.getExtent();
return i?{x:Math.round(1/t*(e.lon-i.left)),y:Math.round(1/t*(i.top-e.lat))}:void 0
},CLASS_NAME:"OpenLayers.Control.OverviewMap"}),OpenLayers.Layer=OpenLayers.Class({id:null,name:null,div:null,opacity:1,alwaysInRange:null,RESOLUTION_PROPERTIES:"scales resolutions maxScale minScale maxResolution minResolution numZoomLevels maxZoomLevel".split(" "),events:null,map:null,isBaseLayer:!1,alpha:!1,displayInLayerSwitcher:!0,visibility:!0,attribution:null,inRange:!1,imageSize:null,options:null,eventListeners:null,gutter:0,projection:null,units:null,scales:null,resolutions:null,maxExtent:null,minExtent:null,maxResolution:null,minResolution:null,numZoomLevels:null,minScale:null,maxScale:null,displayOutsideMaxExtent:!1,wrapDateLine:!1,metadata:null,initialize:function(e,t){this.metadata={},t=OpenLayers.Util.extend({},t),null!=this.alwaysInRange&&(t.alwaysInRange=this.alwaysInRange),this.addOptions(t),this.name=e,null==this.id&&(this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_"),this.div=OpenLayers.Util.createDiv(this.id),this.div.style.width="100%",this.div.style.height="100%",this.div.dir="ltr",this.events=new OpenLayers.Events(this,this.div),this.eventListeners instanceof Object)&&this.events.on(this.eventListeners)
},destroy:function(e){null==e&&(e=!0),null!=this.map&&this.map.removeLayer(this,e),this.options=this.div=this.name=this.map=this.projection=null,this.events&&(this.eventListeners&&this.events.un(this.eventListeners),this.events.destroy()),this.events=this.eventListeners=null
},clone:function(e){return null==e&&(e=new OpenLayers.Layer(this.name,this.getOptions())),OpenLayers.Util.applyDefaults(e,this),e.map=null,e
},getOptions:function(){var e,t={};for(e in this.options)t[e]=this[e];return t},setName:function(e){e!=this.name&&(this.name=e,null!=this.map&&this.map.events.triggerEvent("changelayer",{layer:this,property:"name"}))
},addOptions:function(e,t){if(null==this.options&&(this.options={}),e&&("string"==typeof e.projection&&(e.projection=new OpenLayers.Projection(e.projection)),e.projection&&OpenLayers.Util.applyDefaults(e,OpenLayers.Projection.defaults[e.projection.getCode()]),!e.maxExtent||e.maxExtent instanceof OpenLayers.Bounds||(e.maxExtent=new OpenLayers.Bounds(e.maxExtent)),!e.minExtent||e.minExtent instanceof OpenLayers.Bounds||(e.minExtent=new OpenLayers.Bounds(e.minExtent))),OpenLayers.Util.extend(this.options,e),OpenLayers.Util.extend(this,e),this.projection&&this.projection.getUnits()&&(this.units=this.projection.getUnits()),this.map){var i,r=this.map.getResolution(),s=this.RESOLUTION_PROPERTIES.concat(["projection","units","minExtent","maxExtent"]);
for(i in e)if(e.hasOwnProperty(i)&&0<=OpenLayers.Util.indexOf(s,i)){this.initResolutions(),t&&this.map.baseLayer===this&&(this.map.setCenter(this.map.getCenter(),this.map.getZoomForResolution(r),!1,!0),this.map.events.triggerEvent("changebaselayer",{layer:this}));
break}}},onMapResize:function(){},redraw:function(){var e=!1;if(this.map){this.inRange=this.calculateInRange();
var t=this.getExtent();t&&this.inRange&&this.visibility&&(this.moveTo(t,!0,!1),this.events.triggerEvent("moveend",{zoomChanged:!0}),e=!0)
}return e},moveTo:function(e){e=this.visibility,this.isBaseLayer||(e=e&&this.inRange),this.display(e)
},moveByPx:function(){},setMap:function(e){null==this.map&&(this.map=e,this.maxExtent=this.maxExtent||this.map.maxExtent,this.minExtent=this.minExtent||this.map.minExtent,this.projection=this.projection||this.map.projection,"string"==typeof this.projection&&(this.projection=new OpenLayers.Projection(this.projection)),this.units=this.projection.getUnits()||this.units||this.map.units,this.initResolutions(),this.isBaseLayer||(this.inRange=this.calculateInRange(),this.div.style.display=this.visibility&&this.inRange?"":"none"),this.setTileSize())
},afterAdd:function(){},removeMap:function(){},getImageSize:function(){return this.imageSize||this.tileSize
},setTileSize:function(e){this.tileSize=e=e?e:this.tileSize?this.tileSize:this.map.getTileSize(),this.gutter&&(this.imageSize=new OpenLayers.Size(e.w+2*this.gutter,e.h+2*this.gutter))
},getVisibility:function(){return this.visibility},setVisibility:function(e){e!=this.visibility&&(this.visibility=e,this.display(e),this.redraw(),null!=this.map&&this.map.events.triggerEvent("changelayer",{layer:this,property:"visibility"}),this.events.triggerEvent("visibilitychanged"))
},display:function(e){e!=("none"!=this.div.style.display)&&(this.div.style.display=e&&this.calculateInRange()?"block":"none")
},calculateInRange:function(){var e=!1;return this.alwaysInRange?e=!0:this.map&&(e=this.map.getResolution(),e=e>=this.minResolution&&e<=this.maxResolution),e
},setIsBaseLayer:function(e){e!=this.isBaseLayer&&(this.isBaseLayer=e,null!=this.map&&this.map.events.triggerEvent("changebaselayer",{layer:this}))
},initResolutions:function(){var e,t,i,r={},s=!0;for(e=0,t=this.RESOLUTION_PROPERTIES.length;t>e;e++)i=this.RESOLUTION_PROPERTIES[e],r[i]=this.options[i],s&&this.options[i]&&(s=!1);
if(null==this.options.alwaysInRange&&(this.alwaysInRange=s),null==r.resolutions&&(r.resolutions=this.resolutionsFromScales(r.scales)),null==r.resolutions&&(r.resolutions=this.calculateResolutions(r)),null==r.resolutions){for(e=0,t=this.RESOLUTION_PROPERTIES.length;t>e;e++)i=this.RESOLUTION_PROPERTIES[e],r[i]=null!=this.options[i]?this.options[i]:this.map[i];
null==r.resolutions&&(r.resolutions=this.resolutionsFromScales(r.scales)),null==r.resolutions&&(r.resolutions=this.calculateResolutions(r))
}var n;this.options.maxResolution&&"auto"!==this.options.maxResolution&&(n=this.options.maxResolution),this.options.minScale&&(n=OpenLayers.Util.getResolutionFromScale(this.options.minScale,this.units));
var a;if(this.options.minResolution&&"auto"!==this.options.minResolution&&(a=this.options.minResolution),this.options.maxScale&&(a=OpenLayers.Util.getResolutionFromScale(this.options.maxScale,this.units)),r.resolutions&&(r.resolutions.sort(function(e,t){return t-e
}),n||(n=r.resolutions[0]),a||(a=r.resolutions[r.resolutions.length-1])),this.resolutions=r.resolutions){for(t=this.resolutions.length,this.scales=Array(t),e=0;t>e;e++)this.scales[e]=OpenLayers.Util.getScaleFromResolution(this.resolutions[e],this.units);
this.numZoomLevels=t}(this.minResolution=a)&&(this.maxScale=OpenLayers.Util.getScaleFromResolution(a,this.units)),(this.maxResolution=n)&&(this.minScale=OpenLayers.Util.getScaleFromResolution(n,this.units))
},resolutionsFromScales:function(e){if(null!=e){var t,i,r;for(r=e.length,t=Array(r),i=0;r>i;i++)t[i]=OpenLayers.Util.getResolutionFromScale(e[i],this.units);
return t}},calculateResolutions:function(e){var t,i,r=e.maxResolution;if(null!=e.minScale?r=OpenLayers.Util.getResolutionFromScale(e.minScale,this.units):"auto"==r&&null!=this.maxExtent&&(t=this.map.getSize(),i=this.maxExtent.getWidth()/t.w,t=this.maxExtent.getHeight()/t.h,r=Math.max(i,t)),i=e.minResolution,null!=e.maxScale?i=OpenLayers.Util.getResolutionFromScale(e.maxScale,this.units):"auto"==e.minResolution&&null!=this.minExtent&&(t=this.map.getSize(),i=this.minExtent.getWidth()/t.w,t=this.minExtent.getHeight()/t.h,i=Math.max(i,t)),"number"!=typeof r&&"number"!=typeof i&&null!=this.maxExtent&&(r=this.map.getTileSize(),r=Math.max(this.maxExtent.getWidth()/r.w,this.maxExtent.getHeight()/r.h)),t=e.maxZoomLevel,e=e.numZoomLevels,"number"==typeof i&&"number"==typeof r&&void 0===e?e=Math.floor(Math.log(r/i)/Math.log(2))+1:void 0===e&&null!=t&&(e=t+1),!("number"!=typeof e||0>=e||"number"!=typeof r&&"number"!=typeof i)){t=Array(e);
var s=2;"number"==typeof i&&"number"==typeof r&&(s=Math.pow(r/i,1/(e-1)));var n;if("number"==typeof r)for(n=0;e>n;n++)t[n]=r/Math.pow(s,n);
else for(n=0;e>n;n++)t[e-1-n]=i*Math.pow(s,n);return t}},getResolution:function(){var e=this.map.getZoom();
return this.getResolutionForZoom(e)},getExtent:function(){return this.map.calculateBounds()
},getZoomForExtent:function(e,t){var i=this.map.getSize(),i=Math.max(e.getWidth()/i.w,e.getHeight()/i.h);
return this.getZoomForResolution(i,t)},getDataExtent:function(){},getResolutionForZoom:function(e){if(e=Math.max(0,Math.min(e,this.resolutions.length-1)),this.map.fractionalZoom){var t=Math.floor(e),i=Math.ceil(e);
e=this.resolutions[t]-(e-t)*(this.resolutions[t]-this.resolutions[i])}else e=this.resolutions[Math.round(e)];
return e},getZoomForResolution:function(e,t){var i,r;if(this.map.fractionalZoom){var s,n=0,a=this.resolutions[n],o=this.resolutions[this.resolutions.length-1];
for(i=0,r=this.resolutions.length;r>i;++i)if(s=this.resolutions[i],s>=e&&(a=s,n=i),e>=s){o=s;
break}i=a-o,i=i>0?n+(a-e)/i:n}else{for(a=Number.POSITIVE_INFINITY,i=0,r=this.resolutions.length;r>i;i++)if(t){if(n=Math.abs(this.resolutions[i]-e),n>a)break;
a=n}else if(this.resolutions[i]<e)break;i=Math.max(0,i-1)}return i},getLonLatFromViewPortPx:function(e){var t=null,i=this.map;
if(null!=e&&i.minPx){var t=i.getResolution(),r=i.getMaxExtent({restricted:!0}),t=new OpenLayers.LonLat((e.x-i.minPx.x)*t+r.left,(i.minPx.y-e.y)*t+r.top);
this.wrapDateLine&&(t=t.wrapDateLine(this.maxExtent))}return t},getViewPortPxFromLonLat:function(e,t){var i=null;
return null!=e&&(t=t||this.map.getResolution(),i=this.map.calculateBounds(null,t),i=new OpenLayers.Pixel(1/t*(e.lon-i.left),1/t*(i.top-e.lat))),i
},setOpacity:function(e){if(e!=this.opacity){this.opacity=e;for(var t=this.div.childNodes,i=0,r=t.length;r>i;++i){var s=t[i].firstChild||t[i],n=t[i].lastChild;
n&&"iframe"===n.nodeName.toLowerCase()&&(s=n.parentNode),OpenLayers.Util.modifyDOMElement(s,null,null,null,null,null,null,e)
}null!=this.map&&this.map.events.triggerEvent("changelayer",{layer:this,property:"opacity"})
}},getZIndex:function(){return this.div.style.zIndex},setZIndex:function(e){this.div.style.zIndex=e
},adjustBounds:function(e){if(this.gutter){var t=this.gutter*this.map.getResolution();
e=new OpenLayers.Bounds(e.left-t,e.bottom-t,e.right+t,e.top+t)}return this.wrapDateLine&&(t={rightTolerance:this.getResolution(),leftTolerance:this.getResolution()},e=e.wrapDateLine(this.maxExtent,t)),e
},CLASS_NAME:"OpenLayers.Layer"}),OpenLayers.Layer.SphericalMercator={getExtent:function(){var e=null;
return e=this.sphericalMercator?this.map.calculateBounds():OpenLayers.Layer.FixedZoomLevels.prototype.getExtent.apply(this)
},getLonLatFromViewPortPx:function(){return OpenLayers.Layer.prototype.getLonLatFromViewPortPx.apply(this,arguments)
},getViewPortPxFromLonLat:function(){return OpenLayers.Layer.prototype.getViewPortPxFromLonLat.apply(this,arguments)
},initMercatorParameters:function(){this.RESOLUTIONS=[];for(var e=0;e<=this.MAX_ZOOM_LEVEL;++e)this.RESOLUTIONS[e]=156543.03390625/Math.pow(2,e);
this.units="m",this.projection=this.projection||"EPSG:900913"},forwardMercator:function(){var e=new OpenLayers.Projection("EPSG:4326"),t=new OpenLayers.Projection("EPSG:900913");
return function(i,r){var s=OpenLayers.Projection.transform({x:i,y:r},e,t);return new OpenLayers.LonLat(s.x,s.y)
}}(),inverseMercator:function(){var e=new OpenLayers.Projection("EPSG:4326"),t=new OpenLayers.Projection("EPSG:900913");
return function(i,r){var s=OpenLayers.Projection.transform({x:i,y:r},t,e);return new OpenLayers.LonLat(s.x,s.y)
}}()},OpenLayers.Layer.EventPane=OpenLayers.Class(OpenLayers.Layer,{smoothDragPan:!0,isBaseLayer:!0,isFixed:!0,pane:null,mapObject:null,initialize:function(){OpenLayers.Layer.prototype.initialize.apply(this,arguments),null==this.pane&&(this.pane=OpenLayers.Util.createDiv(this.div.id+"_EventPane"))
},destroy:function(){this.pane=this.mapObject=null,OpenLayers.Layer.prototype.destroy.apply(this,arguments)
},setMap:function(){OpenLayers.Layer.prototype.setMap.apply(this,arguments),this.pane.style.zIndex=parseInt(this.div.style.zIndex)+1,this.pane.style.display=this.div.style.display,this.pane.style.width="100%",this.pane.style.height="100%","msie"==OpenLayers.BROWSER_NAME&&(this.pane.style.background="url("+OpenLayers.Util.getImageLocation("blank.gif")+")"),this.isFixed?this.map.viewPortDiv.appendChild(this.pane):this.map.layerContainerDiv.appendChild(this.pane),this.loadMapObject(),null==this.mapObject&&this.loadWarningMessage()
},removeMap:function(){this.pane&&this.pane.parentNode&&this.pane.parentNode.removeChild(this.pane),OpenLayers.Layer.prototype.removeMap.apply(this,arguments)
},loadWarningMessage:function(){this.div.style.backgroundColor="darkblue";var e=this.map.getSize(),t=Math.min(e.w,300),i=Math.min(e.h,200),t=new OpenLayers.Size(t,i),e=new OpenLayers.Pixel(e.w/2,e.h/2).add(-t.w/2,-t.h/2),e=OpenLayers.Util.createDiv(this.name+"_warning",e,t,null,null,null,"auto");
e.style.padding="7px",e.style.backgroundColor="yellow",e.innerHTML=this.getWarningHTML(),this.div.appendChild(e)
},getWarningHTML:function(){return""},display:function(){OpenLayers.Layer.prototype.display.apply(this,arguments),this.pane.style.display=this.div.style.display
},setZIndex:function(){OpenLayers.Layer.prototype.setZIndex.apply(this,arguments),this.pane.style.zIndex=parseInt(this.div.style.zIndex)+1
},moveByPx:function(e,t){OpenLayers.Layer.prototype.moveByPx.apply(this,arguments),this.dragPanMapObject?this.dragPanMapObject(e,-t):this.moveTo(this.map.getCachedCenter())
},moveTo:function(e,t,i){if(OpenLayers.Layer.prototype.moveTo.apply(this,arguments),null!=this.mapObject){var r=this.map.getCenter(),s=this.map.getZoom();
if(null!=r){var n=this.getMapObjectCenter(),n=this.getOLLonLatFromMapObjectLonLat(n),a=this.getMapObjectZoom(),a=this.getOLZoomFromMapObjectZoom(a);
r.equals(n)&&s==a||(!t&&n&&this.dragPanMapObject&&this.smoothDragPan?(s=this.map.getViewPortPxFromLonLat(n),r=this.map.getViewPortPxFromLonLat(r),this.dragPanMapObject(r.x-s.x,s.y-r.y)):(r=this.getMapObjectLonLatFromOLLonLat(r),s=this.getMapObjectZoomFromOLZoom(s),this.setMapObjectCenter(r,s,i)))
}}},getLonLatFromViewPortPx:function(e){var t=null;return null!=this.mapObject&&null!=this.getMapObjectCenter()&&(e=this.getMapObjectPixelFromOLPixel(e),e=this.getMapObjectLonLatFromMapObjectPixel(e),t=this.getOLLonLatFromMapObjectLonLat(e)),t
},getViewPortPxFromLonLat:function(e){var t=null;return null!=this.mapObject&&null!=this.getMapObjectCenter()&&(e=this.getMapObjectLonLatFromOLLonLat(e),e=this.getMapObjectPixelFromMapObjectLonLat(e),t=this.getOLPixelFromMapObjectPixel(e)),t
},getOLLonLatFromMapObjectLonLat:function(e){var t=null;return null!=e&&(t=this.getLongitudeFromMapObjectLonLat(e),e=this.getLatitudeFromMapObjectLonLat(e),t=new OpenLayers.LonLat(t,e)),t
},getMapObjectLonLatFromOLLonLat:function(e){var t=null;return null!=e&&(t=this.getMapObjectLonLatFromLonLat(e.lon,e.lat)),t
},getOLPixelFromMapObjectPixel:function(e){var t=null;return null!=e&&(t=this.getXFromMapObjectPixel(e),e=this.getYFromMapObjectPixel(e),t=new OpenLayers.Pixel(t,e)),t
},getMapObjectPixelFromOLPixel:function(e){var t=null;return null!=e&&(t=this.getMapObjectPixelFromXY(e.x,e.y)),t
},CLASS_NAME:"OpenLayers.Layer.EventPane"}),OpenLayers.Layer.FixedZoomLevels=OpenLayers.Class({initialize:function(){},initResolutions:function(){for(var e=["minZoomLevel","maxZoomLevel","numZoomLevels"],t=0,i=e.length;i>t;t++){var r=e[t];
this[r]=null!=this.options[r]?this.options[r]:this.map[r]}if((null==this.minZoomLevel||this.minZoomLevel<this.MIN_ZOOM_LEVEL)&&(this.minZoomLevel=this.MIN_ZOOM_LEVEL),e=this.MAX_ZOOM_LEVEL-this.minZoomLevel+1,t=null==this.options.numZoomLevels&&null!=this.options.maxZoomLevel||null==this.numZoomLevels&&null!=this.maxZoomLevel?this.maxZoomLevel-this.minZoomLevel+1:this.numZoomLevels,this.numZoomLevels=null!=t?Math.min(t,e):e,this.maxZoomLevel=this.minZoomLevel+this.numZoomLevels-1,null!=this.RESOLUTIONS){for(e=0,this.resolutions=[],t=this.minZoomLevel;t<=this.maxZoomLevel;t++)this.resolutions[e++]=this.RESOLUTIONS[t];
this.maxResolution=this.resolutions[0],this.minResolution=this.resolutions[this.resolutions.length-1]
}},getResolution:function(){if(null!=this.resolutions)return OpenLayers.Layer.prototype.getResolution.apply(this,arguments);
var e=null,t=this.map.getSize(),i=this.getExtent();return null!=t&&null!=i&&(e=Math.max(i.getWidth()/t.w,i.getHeight()/t.h)),e
},getExtent:function(){var e=this.map.getSize(),t=this.getLonLatFromViewPortPx({x:0,y:0}),e=this.getLonLatFromViewPortPx({x:e.w,y:e.h});
return null!=t&&null!=e?new OpenLayers.Bounds(t.lon,e.lat,e.lon,t.lat):null},getZoomForResolution:function(){if(null!=this.resolutions)return OpenLayers.Layer.prototype.getZoomForResolution.apply(this,arguments);
var e=OpenLayers.Layer.prototype.getExtent.apply(this,[]);return this.getZoomForExtent(e)
},getOLZoomFromMapObjectZoom:function(e){var t=null;return null!=e&&(t=e-this.minZoomLevel,this.map.baseLayer!==this&&(t=this.map.baseLayer.getZoomForResolution(this.getResolutionForZoom(t)))),t
},getMapObjectZoomFromOLZoom:function(e){var t=null;return null!=e&&(t=e+this.minZoomLevel,this.map.baseLayer!==this&&(t=this.getZoomForResolution(this.map.baseLayer.getResolutionForZoom(t)))),t
},CLASS_NAME:"OpenLayers.Layer.FixedZoomLevels"}),OpenLayers.Layer.Google=OpenLayers.Class(OpenLayers.Layer.EventPane,OpenLayers.Layer.FixedZoomLevels,{MIN_ZOOM_LEVEL:0,MAX_ZOOM_LEVEL:21,RESOLUTIONS:[1.40625,.703125,.3515625,.17578125,.087890625,.0439453125,.02197265625,.010986328125,.0054931640625,.00274658203125,.001373291015625,.0006866455078125,.00034332275390625,.000171661376953125,858306884765625e-19,4291534423828125e-20,2145767211914062e-20,1072883605957031e-20,536441802978515e-20,268220901489257e-20,1341104507446289e-21,6.705522537231445e-7],type:null,wrapDateLine:!0,sphericalMercator:!1,version:null,initialize:function(e,t){t=t||{},t.version||(t.version="function"==typeof GMap2?"2":"3");
var i=OpenLayers.Layer.Google["v"+t.version.replace(/\./g,"_")];if(!i)throw"Unsupported Google Maps API version: "+t.version;
OpenLayers.Util.applyDefaults(t,i),OpenLayers.Util.applyDefaults(t,i.DEFAULTS),t.maxExtent&&(t.maxExtent=t.maxExtent.clone()),OpenLayers.Layer.EventPane.prototype.initialize.apply(this,[e,t]),OpenLayers.Layer.FixedZoomLevels.prototype.initialize.apply(this,[e,t]),this.sphericalMercator&&(OpenLayers.Util.extend(this,OpenLayers.Layer.SphericalMercator),this.initMercatorParameters())
},clone:function(){return new OpenLayers.Layer.Google(this.name,this.getOptions())
},setVisibility:function(){var e=null==this.opacity?1:this.opacity;OpenLayers.Layer.EventPane.prototype.setVisibility.apply(this,arguments),this.setOpacity(e)
},display:function(e){this._dragging||this.setGMapVisibility(e),OpenLayers.Layer.EventPane.prototype.display.apply(this,arguments)
},moveTo:function(e,t,i){this._dragging=i,OpenLayers.Layer.EventPane.prototype.moveTo.apply(this,arguments),delete this._dragging
},setOpacity:function(e){if(e!==this.opacity&&(null!=this.map&&this.map.events.triggerEvent("changelayer",{layer:this,property:"opacity"}),this.opacity=e),this.getVisibility()){var t=this.getMapContainer();
OpenLayers.Util.modifyDOMElement(t,null,null,null,null,null,null,e)}},destroy:function(){if(this.map){this.setGMapVisibility(!1);
var e=OpenLayers.Layer.Google.cache[this.map.id];e&&1>=e.count&&this.removeGMapElements()
}OpenLayers.Layer.EventPane.prototype.destroy.apply(this,arguments)},removeGMapElements:function(){var e=OpenLayers.Layer.Google.cache[this.map.id];
if(e){var t=this.mapObject&&this.getMapContainer();t&&t.parentNode&&t.parentNode.removeChild(t),(t=e.termsOfUse)&&t.parentNode&&t.parentNode.removeChild(t),(e=e.poweredBy)&&e.parentNode&&e.parentNode.removeChild(e),this.mapObject&&window.google&&google.maps&&google.maps.event&&google.maps.event.clearListeners&&google.maps.event.clearListeners(this.mapObject,"tilesloaded")
}},removeMap:function(e){this.visibility&&this.mapObject&&this.setGMapVisibility(!1);
var t=OpenLayers.Layer.Google.cache[e.id];t&&(1>=t.count?(this.removeGMapElements(),delete OpenLayers.Layer.Google.cache[e.id]):--t.count),delete this.termsOfUse,delete this.poweredBy,delete this.mapObject,delete this.dragObject,OpenLayers.Layer.EventPane.prototype.removeMap.apply(this,arguments)
},getOLBoundsFromMapObjectBounds:function(e){var t=null;return null!=e&&(t=e.getSouthWest(),e=e.getNorthEast(),this.sphericalMercator?(t=this.forwardMercator(t.lng(),t.lat()),e=this.forwardMercator(e.lng(),e.lat())):(t=new OpenLayers.LonLat(t.lng(),t.lat()),e=new OpenLayers.LonLat(e.lng(),e.lat())),t=new OpenLayers.Bounds(t.lon,t.lat,e.lon,e.lat)),t
},getWarningHTML:function(){return OpenLayers.i18n("googleWarning")},getMapObjectCenter:function(){return this.mapObject.getCenter()
},getMapObjectZoom:function(){return this.mapObject.getZoom()},getLongitudeFromMapObjectLonLat:function(e){return this.sphericalMercator?this.forwardMercator(e.lng(),e.lat()).lon:e.lng()
},getLatitudeFromMapObjectLonLat:function(e){return this.sphericalMercator?this.forwardMercator(e.lng(),e.lat()).lat:e.lat()
},getXFromMapObjectPixel:function(e){return e.x},getYFromMapObjectPixel:function(e){return e.y
},CLASS_NAME:"OpenLayers.Layer.Google"}),OpenLayers.Layer.Google.cache={},OpenLayers.Layer.Google.v2={termsOfUse:null,poweredBy:null,dragObject:null,loadMapObject:function(){this.type||(this.type=G_NORMAL_MAP);
var e,t,i,r=OpenLayers.Layer.Google.cache[this.map.id];if(r)e=r.mapObject,t=r.termsOfUse,i=r.poweredBy,++r.count;
else{var r=this.map.viewPortDiv,s=document.createElement("div");s.id=this.map.id+"_GMap2Container",s.style.position="absolute",s.style.width="100%",s.style.height="100%",r.appendChild(s);
try{e=new GMap2(s),t=s.lastChild,r.appendChild(t),t.style.zIndex="1100",t.style.right="",t.style.bottom="",t.className="olLayerGoogleCopyright",i=s.lastChild,r.appendChild(i),i.style.zIndex="1100",i.style.right="",i.style.bottom="",i.className="olLayerGooglePoweredBy gmnoprint"
}catch(n){throw n}OpenLayers.Layer.Google.cache[this.map.id]={mapObject:e,termsOfUse:t,poweredBy:i,count:1}
}this.mapObject=e,this.termsOfUse=t,this.poweredBy=i,-1===OpenLayers.Util.indexOf(this.mapObject.getMapTypes(),this.type)&&this.mapObject.addMapType(this.type),"function"==typeof e.getDragObject?this.dragObject=e.getDragObject():this.dragPanMapObject=null,!1===this.isBaseLayer&&this.setGMapVisibility("none"!==this.div.style.display)
},onMapResize:function(){if(this.visibility&&this.mapObject.isLoaded())this.mapObject.checkResize();
else{if(!this._resized)var e=this,t=GEvent.addListener(this.mapObject,"load",function(){GEvent.removeListener(t),delete e._resized,e.mapObject.checkResize(),e.moveTo(e.map.getCenter(),e.map.getZoom())
});this._resized=!0}},setGMapVisibility:function(e){var t=OpenLayers.Layer.Google.cache[this.map.id];
if(t){var i=this.mapObject.getContainer();!0===e?(this.mapObject.setMapType(this.type),i.style.display="",this.termsOfUse.style.left="",this.termsOfUse.style.display="",this.poweredBy.style.display="",t.displayed=this.id):(t.displayed===this.id&&delete t.displayed,t.displayed||(i.style.display="none",this.termsOfUse.style.display="none",this.termsOfUse.style.left="-9999px",this.poweredBy.style.display="none"))
}},getMapContainer:function(){return this.mapObject.getContainer()},getMapObjectBoundsFromOLBounds:function(e){var t=null;
return null!=e&&(t=this.sphericalMercator?this.inverseMercator(e.bottom,e.left):new OpenLayers.LonLat(e.bottom,e.left),e=this.sphericalMercator?this.inverseMercator(e.top,e.right):new OpenLayers.LonLat(e.top,e.right),t=new GLatLngBounds(new GLatLng(t.lat,t.lon),new GLatLng(e.lat,e.lon))),t
},setMapObjectCenter:function(e,t){this.mapObject.setCenter(e,t)},dragPanMapObject:function(e,t){this.dragObject.moveBy(new GSize(-e,t))
},getMapObjectLonLatFromMapObjectPixel:function(e){return this.mapObject.fromContainerPixelToLatLng(e)
},getMapObjectPixelFromMapObjectLonLat:function(e){return this.mapObject.fromLatLngToContainerPixel(e)
},getMapObjectZoomFromMapObjectBounds:function(e){return this.mapObject.getBoundsZoomLevel(e)
},getMapObjectLonLatFromLonLat:function(e,t){var i;return this.sphericalMercator?(i=this.inverseMercator(e,t),i=new GLatLng(i.lat,i.lon)):i=new GLatLng(t,e),i
},getMapObjectPixelFromXY:function(e,t){return new GPoint(e,t)}},OpenLayers.Format.XML=OpenLayers.Class(OpenLayers.Format,{namespaces:null,namespaceAlias:null,defaultPrefix:null,readers:{},writers:{},xmldom:null,initialize:function(e){window.ActiveXObject&&(this.xmldom=new ActiveXObject("Microsoft.XMLDOM")),OpenLayers.Format.prototype.initialize.apply(this,[e]),this.namespaces=OpenLayers.Util.extend({},this.namespaces),this.namespaceAlias={};
for(var t in this.namespaces)this.namespaceAlias[this.namespaces[t]]=t},destroy:function(){this.xmldom=null,OpenLayers.Format.prototype.destroy.apply(this,arguments)
},setNamespace:function(e,t){this.namespaces[e]=t,this.namespaceAlias[t]=e},read:function(e){var t=e.indexOf("<");
return t>0&&(e=e.substring(t)),t=OpenLayers.Util.Try(OpenLayers.Function.bind(function(){var t;
return t=window.ActiveXObject&&!this.xmldom?new ActiveXObject("Microsoft.XMLDOM"):this.xmldom,t.loadXML(e),t
},this),function(){return(new DOMParser).parseFromString(e,"text/xml")},function(){var t=new XMLHttpRequest;
return t.open("GET","data:text/xml;charset=utf-8,"+encodeURIComponent(e),!1),t.overrideMimeType&&t.overrideMimeType("text/xml"),t.send(null),t.responseXML
}),this.keepData&&(this.data=t),t},write:function(e){if(this.xmldom)e=e.xml;else{var t=new XMLSerializer;
if(1==e.nodeType){var i=document.implementation.createDocument("","",null);i.importNode&&(e=i.importNode(e,!0)),i.appendChild(e),e=t.serializeToString(i)
}else e=t.serializeToString(e)}return e},createElementNS:function(e,t){return this.xmldom?"string"==typeof e?this.xmldom.createNode(1,t,e):this.xmldom.createNode(1,t,""):document.createElementNS(e,t)
},createDocumentFragment:function(){return this.xmldom?this.xmldom.createDocumentFragment():document.createDocumentFragment()
},createTextNode:function(e){return"string"!=typeof e&&(e=String(e)),this.xmldom?this.xmldom.createTextNode(e):document.createTextNode(e)
},getElementsByTagNameNS:function(e,t,i){var r=[];if(e.getElementsByTagNameNS)r=e.getElementsByTagNameNS(t,i);
else{e=e.getElementsByTagName("*");for(var s,n,a=0,o=e.length;o>a;++a)s=e[a],n=s.prefix?s.prefix+":"+i:i,("*"==i||n==s.nodeName)&&("*"!=t&&t!=s.namespaceURI||r.push(s))
}return r},getAttributeNodeNS:function(e,t,i){var r=null;if(e.getAttributeNodeNS)r=e.getAttributeNodeNS(t,i);
else{e=e.attributes;for(var s,n,a=0,o=e.length;o>a;++a)if(s=e[a],s.namespaceURI==t&&(n=s.prefix?s.prefix+":"+i:i,n==s.nodeName)){r=s;
break}}return r},getAttributeNS:function(e,t,i){var r="";return e.getAttributeNS?r=e.getAttributeNS(t,i)||"":(e=this.getAttributeNodeNS(e,t,i))&&(r=e.nodeValue),r
},getChildValue:function(e,t){var i=t||"";if(e)for(var r=e.firstChild;r;r=r.nextSibling)switch(r.nodeType){case 3:case 4:i+=r.nodeValue
}return i},isSimpleContent:function(e){var t=!0;for(e=e.firstChild;e;e=e.nextSibling)if(1===e.nodeType){t=!1;
break}return t},contentType:function(e){var t=!1,i=!1,r=OpenLayers.Format.XML.CONTENT_TYPE.EMPTY;
for(e=e.firstChild;e;e=e.nextSibling){switch(e.nodeType){case 1:i=!0;break;case 8:break;
default:t=!0}if(i&&t)break}if(i&&t)r=OpenLayers.Format.XML.CONTENT_TYPE.MIXED;else{if(i)return OpenLayers.Format.XML.CONTENT_TYPE.COMPLEX;
if(t)return OpenLayers.Format.XML.CONTENT_TYPE.SIMPLE}return r},hasAttributeNS:function(e,t,i){var r=!1;
return r=e.hasAttributeNS?e.hasAttributeNS(t,i):!!this.getAttributeNodeNS(e,t,i)},setAttributeNS:function(e,t,i,r){if(e.setAttributeNS)e.setAttributeNS(t,i,r);
else{if(!this.xmldom)throw"setAttributeNS not implemented";t?(t=e.ownerDocument.createNode(2,i,t),t.nodeValue=r,e.setAttributeNode(t)):e.setAttribute(i,r)
}},createElementNSPlus:function(e,t){t=t||{};var i=t.uri||this.namespaces[t.prefix];
i||(i=e.indexOf(":"),i=this.namespaces[e.substring(0,i)]),i||(i=this.namespaces[this.defaultPrefix]),i=this.createElementNS(i,e),t.attributes&&this.setAttributes(i,t.attributes);
var r=t.value;return null!=r&&i.appendChild(this.createTextNode(r)),i},setAttributes:function(e,t){var i,r,s;
for(s in t)null!=t[s]&&t[s].toString&&(i=t[s].toString(),r=this.namespaces[s.substring(0,s.indexOf(":"))]||null,this.setAttributeNS(e,r,s,i))
},readNode:function(e,t){t||(t={});var i=this.readers[e.namespaceURI?this.namespaceAlias[e.namespaceURI]:this.defaultPrefix];
if(i){var r=e.localName||e.nodeName.split(":").pop();(i=i[r]||i["*"])&&i.apply(this,[e,t])
}return t},readChildNodes:function(e,t){t||(t={});for(var i,r=e.childNodes,s=0,n=r.length;n>s;++s)i=r[s],1==i.nodeType&&this.readNode(i,t);
return t},writeNode:function(e,t,i){var r,s=e.indexOf(":");return s>0?(r=e.substring(0,s),e=e.substring(s+1)):r=i?this.namespaceAlias[i.namespaceURI]:this.defaultPrefix,t=this.writers[r][e].apply(this,[t]),i&&i.appendChild(t),t
},getChildEl:function(e,t,i){return e&&this.getThisOrNextEl(e.firstChild,t,i)},getNextEl:function(e,t,i){return e&&this.getThisOrNextEl(e.nextSibling,t,i)
},getThisOrNextEl:function(e,t,i){e:for(;e;e=e.nextSibling)switch(e.nodeType){case 1:if(!(t&&t!==(e.localName||e.nodeName.split(":").pop())||i&&i!==e.namespaceURI))break e;
e=null;break e;case 3:if(/^\s*$/.test(e.nodeValue))break;case 4:case 6:case 12:case 10:case 11:e=null;
break e}return e||null},lookupNamespaceURI:function(e,t){var i=null;if(e)if(e.lookupNamespaceURI)i=e.lookupNamespaceURI(t);
else e:switch(e.nodeType){case 1:if(null!==e.namespaceURI&&e.prefix===t){i=e.namespaceURI;
break e}if(i=e.attributes.length)for(var r,s=0;i>s;++s){if(r=e.attributes[s],"xmlns"===r.prefix&&r.name==="xmlns:"+t){i=r.value||null;
break e}if("xmlns"===r.name&&null===t){i=r.value||null;break e}}i=this.lookupNamespaceURI(e.parentNode,t);
break e;case 2:i=this.lookupNamespaceURI(e.ownerElement,t);break e;case 9:i=this.lookupNamespaceURI(e.documentElement,t);
break e;case 6:case 12:case 10:case 11:break e;default:i=this.lookupNamespaceURI(e.parentNode,t)
}return i},getXMLDoc:function(){return OpenLayers.Format.XML.document||this.xmldom||(document.implementation&&document.implementation.createDocument?OpenLayers.Format.XML.document=document.implementation.createDocument("","",null):!this.xmldom&&window.ActiveXObject&&(this.xmldom=new ActiveXObject("Microsoft.XMLDOM"))),OpenLayers.Format.XML.document||this.xmldom
},CLASS_NAME:"OpenLayers.Format.XML"}),OpenLayers.Format.XML.CONTENT_TYPE={EMPTY:0,SIMPLE:1,COMPLEX:2,MIXED:3},OpenLayers.Format.XML.lookupNamespaceURI=OpenLayers.Function.bind(OpenLayers.Format.XML.prototype.lookupNamespaceURI,OpenLayers.Format.XML.prototype),OpenLayers.Format.XML.document=null,OpenLayers.Format.WFST=function(e){e=OpenLayers.Util.applyDefaults(e,OpenLayers.Format.WFST.DEFAULTS);
var t=OpenLayers.Format.WFST["v"+e.version.replace(/\./g,"_")];if(!t)throw"Unsupported WFST version: "+e.version;
return new t(e)},OpenLayers.Format.WFST.DEFAULTS={version:"1.0.0"},OpenLayers.Feature=OpenLayers.Class({layer:null,id:null,lonlat:null,data:null,marker:null,popupClass:null,popup:null,initialize:function(e,t,i){this.layer=e,this.lonlat=t,this.data=null!=i?i:{},this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_")
},destroy:function(){null!=this.layer&&null!=this.layer.map&&null!=this.popup&&this.layer.map.removePopup(this.popup),null!=this.layer&&null!=this.marker&&this.layer.removeMarker(this.marker),this.data=this.lonlat=this.id=this.layer=null,null!=this.marker&&(this.destroyMarker(this.marker),this.marker=null),null!=this.popup&&(this.destroyPopup(this.popup),this.popup=null)
},onScreen:function(){var e=!1;return null!=this.layer&&null!=this.layer.map&&(e=this.layer.map.getExtent().containsLonLat(this.lonlat)),e
},createMarker:function(){return null!=this.lonlat&&(this.marker=new OpenLayers.Marker(this.lonlat,this.data.icon)),this.marker
},destroyMarker:function(){this.marker.destroy()},createPopup:function(e){return null!=this.lonlat&&(this.popup||(this.popup=new(this.popupClass?this.popupClass:OpenLayers.Popup.Anchored)(this.id+"_popup",this.lonlat,this.data.popupSize,this.data.popupContentHTML,this.marker?this.marker.icon:null,e)),null!=this.data.overflow&&(this.popup.contentDiv.style.overflow=this.data.overflow),this.popup.feature=this),this.popup
},destroyPopup:function(){this.popup&&(this.popup.feature=null,this.popup.destroy(),this.popup=null)
},CLASS_NAME:"OpenLayers.Feature"}),OpenLayers.State={UNKNOWN:"Unknown",INSERT:"Insert",UPDATE:"Update",DELETE:"Delete"},OpenLayers.Feature.Vector=OpenLayers.Class(OpenLayers.Feature,{fid:null,geometry:null,attributes:null,bounds:null,state:null,style:null,url:null,renderIntent:"default",modified:null,initialize:function(e,t,i){OpenLayers.Feature.prototype.initialize.apply(this,[null,null,t]),this.lonlat=null,this.geometry=e?e:null,this.state=null,this.attributes={},t&&(this.attributes=OpenLayers.Util.extend(this.attributes,t)),this.style=i?i:null
},destroy:function(){this.layer&&(this.layer.removeFeatures(this),this.layer=null),this.modified=this.geometry=null,OpenLayers.Feature.prototype.destroy.apply(this,arguments)
},clone:function(){return new OpenLayers.Feature.Vector(this.geometry?this.geometry.clone():null,this.attributes,this.style)
},onScreen:function(e){var t=!1;return this.layer&&this.layer.map&&(t=this.layer.map.getExtent(),e?(e=this.geometry.getBounds(),t=t.intersectsBounds(e)):t=t.toGeometry().intersects(this.geometry)),t
},getVisibility:function(){return!(this.style&&"none"==this.style.display||!this.layer||this.layer&&this.layer.styleMap&&"none"==this.layer.styleMap.createSymbolizer(this,this.renderIntent).display||this.layer&&!this.layer.getVisibility())
},createMarker:function(){return null},destroyMarker:function(){},createPopup:function(){return null
},atPoint:function(e,t,i){var r=!1;return this.geometry&&(r=this.geometry.atPoint(e,t,i)),r
},destroyPopup:function(){},move:function(e){if(this.layer&&this.geometry.move){e="OpenLayers.LonLat"==e.CLASS_NAME?this.layer.getViewPortPxFromLonLat(e):e;
var t=this.layer.getViewPortPxFromLonLat(this.geometry.getBounds().getCenterLonLat()),i=this.layer.map.getResolution();
return this.geometry.move(i*(e.x-t.x),i*(t.y-e.y)),this.layer.drawFeature(this),t
}},toState:function(e){if(e==OpenLayers.State.UPDATE)switch(this.state){case OpenLayers.State.UNKNOWN:case OpenLayers.State.DELETE:this.state=e
}else if(e==OpenLayers.State.INSERT)switch(this.state){case OpenLayers.State.UNKNOWN:break;
default:this.state=e}else if(e==OpenLayers.State.DELETE)switch(this.state){case OpenLayers.State.UNKNOWN:case OpenLayers.State.UPDATE:this.state=e
}else e==OpenLayers.State.UNKNOWN&&(this.state=e)},CLASS_NAME:"OpenLayers.Feature.Vector"}),OpenLayers.Feature.Vector.style={"default":{fillColor:"#ee9900",fillOpacity:.4,hoverFillColor:"white",hoverFillOpacity:.8,strokeColor:"#ee9900",strokeOpacity:1,strokeWidth:1,strokeLinecap:"round",strokeDashstyle:"solid",hoverStrokeColor:"red",hoverStrokeOpacity:1,hoverStrokeWidth:.2,pointRadius:6,hoverPointRadius:1,hoverPointUnit:"%",pointerEvents:"visiblePainted",cursor:"inherit",fontColor:"#000000",labelAlign:"cm",labelOutlineColor:"white",labelOutlineWidth:3},select:{fillColor:"blue",fillOpacity:.4,hoverFillColor:"white",hoverFillOpacity:.8,strokeColor:"blue",strokeOpacity:1,strokeWidth:2,strokeLinecap:"round",strokeDashstyle:"solid",hoverStrokeColor:"red",hoverStrokeOpacity:1,hoverStrokeWidth:.2,pointRadius:6,hoverPointRadius:1,hoverPointUnit:"%",pointerEvents:"visiblePainted",cursor:"pointer",fontColor:"#000000",labelAlign:"cm",labelOutlineColor:"white",labelOutlineWidth:3},temporary:{fillColor:"#66cccc",fillOpacity:.2,hoverFillColor:"white",hoverFillOpacity:.8,strokeColor:"#66cccc",strokeOpacity:1,strokeLinecap:"round",strokeWidth:2,strokeDashstyle:"solid",hoverStrokeColor:"red",hoverStrokeOpacity:1,hoverStrokeWidth:.2,pointRadius:6,hoverPointRadius:1,hoverPointUnit:"%",pointerEvents:"visiblePainted",cursor:"inherit",fontColor:"#000000",labelAlign:"cm",labelOutlineColor:"white",labelOutlineWidth:3},"delete":{display:"none"}},OpenLayers.Style=OpenLayers.Class({id:null,name:null,title:null,description:null,layerName:null,isDefault:!1,rules:null,context:null,defaultStyle:null,defaultsPerSymbolizer:!1,propertyStyles:null,initialize:function(e,t){OpenLayers.Util.extend(this,t),this.rules=[],t&&t.rules&&this.addRules(t.rules),this.setDefaultStyle(e||OpenLayers.Feature.Vector.style["default"]),this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_")
},destroy:function(){for(var e=0,t=this.rules.length;t>e;e++)this.rules[e].destroy(),this.rules[e]=null;
this.defaultStyle=this.rules=null},createSymbolizer:function(e){for(var t,i=this.defaultsPerSymbolizer?{}:this.createLiterals(OpenLayers.Util.extend({},this.defaultStyle),e),r=this.rules,s=[],n=!1,a=0,o=r.length;o>a;a++)t=r[a],t.evaluate(e)&&(t instanceof OpenLayers.Rule&&t.elseFilter?s.push(t):(n=!0,this.applySymbolizer(t,i,e)));
if(0==n&&0<s.length)for(n=!0,a=0,o=s.length;o>a;a++)this.applySymbolizer(s[a],i,e);
return 0<r.length&&0==n&&(i.display="none"),null!=i.label&&"string"!=typeof i.label&&(i.label=String(i.label)),i
},applySymbolizer:function(e,t,i){var r=i.geometry?this.getSymbolizerPrefix(i.geometry):OpenLayers.Style.SYMBOLIZER_PREFIXES[0];
return e=e.symbolizer[r]||e.symbolizer,!0===this.defaultsPerSymbolizer&&(r=this.defaultStyle,OpenLayers.Util.applyDefaults(e,{pointRadius:r.pointRadius}),!0!==e.stroke&&!0!==e.graphic||OpenLayers.Util.applyDefaults(e,{strokeWidth:r.strokeWidth,strokeColor:r.strokeColor,strokeOpacity:r.strokeOpacity,strokeDashstyle:r.strokeDashstyle,strokeLinecap:r.strokeLinecap}),!0!==e.fill&&!0!==e.graphic||OpenLayers.Util.applyDefaults(e,{fillColor:r.fillColor,fillOpacity:r.fillOpacity}),!0===e.graphic&&OpenLayers.Util.applyDefaults(e,{pointRadius:this.defaultStyle.pointRadius,externalGraphic:this.defaultStyle.externalGraphic,graphicName:this.defaultStyle.graphicName,graphicOpacity:this.defaultStyle.graphicOpacity,graphicWidth:this.defaultStyle.graphicWidth,graphicHeight:this.defaultStyle.graphicHeight,graphicXOffset:this.defaultStyle.graphicXOffset,graphicYOffset:this.defaultStyle.graphicYOffset})),this.createLiterals(OpenLayers.Util.extend(t,e),i)
},createLiterals:function(e,t){var i=OpenLayers.Util.extend({},t.attributes||t.data);
OpenLayers.Util.extend(i,this.context);for(var r in this.propertyStyles)e[r]=OpenLayers.Style.createLiteral(e[r],i,t,r);
return e},findPropertyStyles:function(){var e={};this.addPropertyStyles(e,this.defaultStyle);
for(var t,i,r=this.rules,s=0,n=r.length;n>s;s++){t=r[s].symbolizer;for(var a in t){if(i=t[a],"object"!=typeof i){this.addPropertyStyles(e,t);
break}this.addPropertyStyles(e,i)}}return e},addPropertyStyles:function(e,t){var i,r;
for(r in t)i=t[r],"string"==typeof i&&i.match(/\$\{\w+\}/)&&(e[r]=!0);return e},addRules:function(e){Array.prototype.push.apply(this.rules,e),this.propertyStyles=this.findPropertyStyles()
},setDefaultStyle:function(e){this.defaultStyle=e,this.propertyStyles=this.findPropertyStyles()
},getSymbolizerPrefix:function(e){for(var t=OpenLayers.Style.SYMBOLIZER_PREFIXES,i=0,r=t.length;r>i;i++)if(-1!=e.CLASS_NAME.indexOf(t[i]))return t[i]
},clone:function(){var e=OpenLayers.Util.extend({},this);if(this.rules){e.rules=[];
for(var t=0,i=this.rules.length;i>t;++t)e.rules.push(this.rules[t].clone())}return e.context=this.context&&OpenLayers.Util.extend({},this.context),t=OpenLayers.Util.extend({},this.defaultStyle),new OpenLayers.Style(t,e)
},CLASS_NAME:"OpenLayers.Style"}),OpenLayers.Style.createLiteral=function(e,t,i,r){return"string"==typeof e&&-1!=e.indexOf("${")&&(e=OpenLayers.String.format(e,t,[i,r]),e=isNaN(e)||!e?e:parseFloat(e)),e
},OpenLayers.Style.SYMBOLIZER_PREFIXES=["Point","Line","Polygon","Text","Raster"],OpenLayers.Filter=OpenLayers.Class({initialize:function(e){OpenLayers.Util.extend(this,e)
},destroy:function(){},evaluate:function(){return!0},clone:function(){return null
},toString:function(){return OpenLayers.Format&&OpenLayers.Format.CQL?OpenLayers.Format.CQL.prototype.write(this):Object.prototype.toString.call(this)
},CLASS_NAME:"OpenLayers.Filter"}),OpenLayers.Filter.Spatial=OpenLayers.Class(OpenLayers.Filter,{type:null,property:null,value:null,distance:null,distanceUnits:null,evaluate:function(e){var t=!1;
switch(this.type){case OpenLayers.Filter.Spatial.BBOX:case OpenLayers.Filter.Spatial.INTERSECTS:if(e.geometry){var i=this.value;
"OpenLayers.Bounds"==this.value.CLASS_NAME&&(i=this.value.toGeometry()),e.geometry.intersects(i)&&(t=!0)
}break;default:throw Error("evaluate is not implemented for this filter type.")}return t
},clone:function(){var e=OpenLayers.Util.applyDefaults({value:this.value&&this.value.clone&&this.value.clone()},this);
return new OpenLayers.Filter.Spatial(e)},CLASS_NAME:"OpenLayers.Filter.Spatial"}),OpenLayers.Filter.Spatial.BBOX="BBOX",OpenLayers.Filter.Spatial.INTERSECTS="INTERSECTS",OpenLayers.Filter.Spatial.DWITHIN="DWITHIN",OpenLayers.Filter.Spatial.WITHIN="WITHIN",OpenLayers.Filter.Spatial.CONTAINS="CONTAINS",OpenLayers.Filter.FeatureId=OpenLayers.Class(OpenLayers.Filter,{fids:null,type:"FID",initialize:function(e){this.fids=[],OpenLayers.Filter.prototype.initialize.apply(this,[e])
},evaluate:function(e){for(var t=0,i=this.fids.length;i>t;t++)if((e.fid||e.id)==this.fids[t])return!0;
return!1},clone:function(){var e=new OpenLayers.Filter.FeatureId;return OpenLayers.Util.extend(e,this),e.fids=this.fids.slice(),e
},CLASS_NAME:"OpenLayers.Filter.FeatureId"}),OpenLayers.Format.WFST.v1=OpenLayers.Class(OpenLayers.Format.XML,{namespaces:{xlink:"http://www.w3.org/1999/xlink",xsi:"http://www.w3.org/2001/XMLSchema-instance",wfs:"http://www.opengis.net/wfs",gml:"http://www.opengis.net/gml",ogc:"http://www.opengis.net/ogc",ows:"http://www.opengis.net/ows"},defaultPrefix:"wfs",version:null,schemaLocations:null,srsName:null,extractAttributes:!0,xy:!0,stateName:null,initialize:function(e){this.stateName={},this.stateName[OpenLayers.State.INSERT]="wfs:Insert",this.stateName[OpenLayers.State.UPDATE]="wfs:Update",this.stateName[OpenLayers.State.DELETE]="wfs:Delete",OpenLayers.Format.XML.prototype.initialize.apply(this,[e])
},getSrsName:function(e,t){var i=t&&t.srsName;return i||(i=e&&e.layer?e.layer.projection.getCode():this.srsName),i
},read:function(e,t){t=t||{},OpenLayers.Util.applyDefaults(t,{output:"features"}),"string"==typeof e&&(e=OpenLayers.Format.XML.prototype.read.apply(this,[e])),e&&9==e.nodeType&&(e=e.documentElement);
var i={};return e&&this.readNode(e,i,!0),i.features&&"features"===t.output&&(i=i.features),i
},readers:{wfs:{FeatureCollection:function(e,t){t.features=[],this.readChildNodes(e,t)
}}},write:function(e,t){var i=this.writeNode("wfs:Transaction",{features:e,options:t}),r=this.schemaLocationAttr();
return r&&this.setAttributeNS(i,this.namespaces.xsi,"xsi:schemaLocation",r),OpenLayers.Format.XML.prototype.write.apply(this,[i])
},writers:{wfs:{GetFeature:function(e){var t=this.createElementNSPlus("wfs:GetFeature",{attributes:{service:"WFS",version:this.version,handle:e&&e.handle,outputFormat:e&&e.outputFormat,maxFeatures:e&&e.maxFeatures,"xsi:schemaLocation":this.schemaLocationAttr(e)}});
if("string"==typeof this.featureType)this.writeNode("Query",e,t);else for(var i=0,r=this.featureType.length;r>i;i++)e.featureType=this.featureType[i],this.writeNode("Query",e,t);
return t},Transaction:function(e){e=e||{};var t,i=e.options||{},r=this.createElementNSPlus("wfs:Transaction",{attributes:{service:"WFS",version:this.version,handle:i.handle}}),s=e.features;
if(s){!0===i.multi&&OpenLayers.Util.extend(this.geometryTypes,{"OpenLayers.Geometry.Point":"MultiPoint","OpenLayers.Geometry.LineString":!0===this.multiCurve?"MultiCurve":"MultiLineString","OpenLayers.Geometry.Polygon":!0===this.multiSurface?"MultiSurface":"MultiPolygon"});
var n,a;for(e=0,t=s.length;t>e;++e)a=s[e],(n=this.stateName[a.state])&&this.writeNode(n,{feature:a,options:i},r);
!0===i.multi&&this.setGeometryTypes()}if(i.nativeElements)for(e=0,t=i.nativeElements.length;t>e;++e)this.writeNode("wfs:Native",i.nativeElements[e],r);
return r},Native:function(e){return this.createElementNSPlus("wfs:Native",{attributes:{vendorId:e.vendorId,safeToIgnore:e.safeToIgnore},value:e.value})
},Insert:function(e){var t=e.feature;return e=e.options,e=this.createElementNSPlus("wfs:Insert",{attributes:{handle:e&&e.handle}}),this.srsName=this.getSrsName(t),this.writeNode("feature:_typeName",t,e),e
},Update:function(e){var t=e.feature;e=e.options,e=this.createElementNSPlus("wfs:Update",{attributes:{handle:e&&e.handle,typeName:(this.featureNS?this.featurePrefix+":":"")+this.featureType}}),this.featureNS&&e.setAttribute("xmlns:"+this.featurePrefix,this.featureNS);
var i=t.modified;null===this.geometryName||i&&void 0===i.geometry||(this.srsName=this.getSrsName(t),this.writeNode("Property",{name:this.geometryName,value:t.geometry},e));
for(var r in t.attributes)void 0===t.attributes[r]||i&&i.attributes&&(!i.attributes||void 0===i.attributes[r])||this.writeNode("Property",{name:r,value:t.attributes[r]},e);
return this.writeNode("ogc:Filter",new OpenLayers.Filter.FeatureId({fids:[t.fid]}),e),e
},Property:function(e){var t=this.createElementNSPlus("wfs:Property");return this.writeNode("Name",e.name,t),null!==e.value&&this.writeNode("Value",e.value,t),t
},Name:function(e){return this.createElementNSPlus("wfs:Name",{value:e})},Value:function(e){var t;
return e instanceof OpenLayers.Geometry?(t=this.createElementNSPlus("wfs:Value"),e=this.writeNode("feature:_geometry",e).firstChild,t.appendChild(e)):t=this.createElementNSPlus("wfs:Value",{value:e}),t
},Delete:function(e){var t=e.feature;return e=e.options,e=this.createElementNSPlus("wfs:Delete",{attributes:{handle:e&&e.handle,typeName:(this.featureNS?this.featurePrefix+":":"")+this.featureType}}),this.featureNS&&e.setAttribute("xmlns:"+this.featurePrefix,this.featureNS),this.writeNode("ogc:Filter",new OpenLayers.Filter.FeatureId({fids:[t.fid]}),e),e
}}},schemaLocationAttr:function(e){e=OpenLayers.Util.extend({featurePrefix:this.featurePrefix,schema:this.schema},e);
var t=OpenLayers.Util.extend({},this.schemaLocations);e.schema&&(t[e.featurePrefix]=e.schema),e=[];
var i,r;for(r in t)(i=this.namespaces[r])&&e.push(i+" "+t[r]);return e.join(" ")||void 0
},setFilterProperty:function(e){if(e.filters)for(var t=0,i=e.filters.length;i>t;++t)OpenLayers.Format.WFST.v1.prototype.setFilterProperty.call(this,e.filters[t]);
else e instanceof OpenLayers.Filter.Spatial&&!e.property&&(e.property=this.geometryName)
},CLASS_NAME:"OpenLayers.Format.WFST.v1"}),OpenLayers.Format.OGCExceptionReport=OpenLayers.Class(OpenLayers.Format.XML,{namespaces:{ogc:"http://www.opengis.net/ogc"},regExes:{trimSpace:/^\s*|\s*$/g,removeSpace:/\s*/g,splitSpace:/\s+/,trimComma:/\s*,\s*/g},defaultPrefix:"ogc",read:function(e){"string"==typeof e&&(e=OpenLayers.Format.XML.prototype.read.apply(this,[e]));
var t={exceptionReport:null};return e.documentElement&&(this.readChildNodes(e,t),null===t.exceptionReport&&(t=(new OpenLayers.Format.OWSCommon).read(e))),t
},readers:{ogc:{ServiceExceptionReport:function(e,t){t.exceptionReport={exceptions:[]},this.readChildNodes(e,t.exceptionReport)
},ServiceException:function(e,t){var i={code:e.getAttribute("code"),locator:e.getAttribute("locator"),text:this.getChildValue(e)};
t.exceptions.push(i)}}},CLASS_NAME:"OpenLayers.Format.OGCExceptionReport"}),OpenLayers.Format.XML.VersionedOGC=OpenLayers.Class(OpenLayers.Format.XML,{defaultVersion:null,version:null,profile:null,allowFallback:!1,name:null,stringifyOutput:!1,parser:null,initialize:function(e){OpenLayers.Format.XML.prototype.initialize.apply(this,[e]),e=this.CLASS_NAME,this.name=e.substring(e.lastIndexOf(".")+1)
},getVersion:function(e,t){var i;return e?(i=this.version,i||(i=e.getAttribute("version"),i||(i=this.defaultVersion))):i=t&&t.version||this.version||this.defaultVersion,i
},getParser:function(e){e=e||this.defaultVersion;var t=this.profile?"_"+this.profile:"";
if(!this.parser||this.parser.VERSION!=e){var i=OpenLayers.Format[this.name]["v"+e.replace(/\./g,"_")+t];
if(!i&&(""!==t&&this.allowFallback&&(t="",i=OpenLayers.Format[this.name]["v"+e.replace(/\./g,"_")]),!i))throw"Can't find a "+this.name+" parser for version "+e+t;
this.parser=new i(this.options)}return this.parser},write:function(e,t){var i=this.getVersion(null,t);
return this.parser=this.getParser(i),i=this.parser.write(e,t),!1===this.stringifyOutput?i:OpenLayers.Format.XML.prototype.write.apply(this,[i])
},read:function(e,t){"string"==typeof e&&(e=OpenLayers.Format.XML.prototype.read.apply(this,[e]));
var i=this.getVersion(e.documentElement);this.parser=this.getParser(i);var r=this.parser.read(e,t),s=this.parser.errorProperty||null;
return null!==s&&void 0===r[s]&&(s=new OpenLayers.Format.OGCExceptionReport,r.error=s.read(e)),r.version=i,r
},CLASS_NAME:"OpenLayers.Format.XML.VersionedOGC"}),OpenLayers.Filter.Logical=OpenLayers.Class(OpenLayers.Filter,{filters:null,type:null,initialize:function(e){this.filters=[],OpenLayers.Filter.prototype.initialize.apply(this,[e])
},destroy:function(){this.filters=null,OpenLayers.Filter.prototype.destroy.apply(this)
},evaluate:function(e){var t,i;switch(this.type){case OpenLayers.Filter.Logical.AND:for(t=0,i=this.filters.length;i>t;t++)if(0==this.filters[t].evaluate(e))return!1;
return!0;case OpenLayers.Filter.Logical.OR:for(t=0,i=this.filters.length;i>t;t++)if(1==this.filters[t].evaluate(e))return!0;
return!1;case OpenLayers.Filter.Logical.NOT:return!this.filters[0].evaluate(e)}},clone:function(){for(var e=[],t=0,i=this.filters.length;i>t;++t)e.push(this.filters[t].clone());
return new OpenLayers.Filter.Logical({type:this.type,filters:e})},CLASS_NAME:"OpenLayers.Filter.Logical"}),OpenLayers.Filter.Logical.AND="&&",OpenLayers.Filter.Logical.OR="||",OpenLayers.Filter.Logical.NOT="!",OpenLayers.Filter.Comparison=OpenLayers.Class(OpenLayers.Filter,{type:null,property:null,value:null,matchCase:!0,lowerBoundary:null,upperBoundary:null,initialize:function(e){OpenLayers.Filter.prototype.initialize.apply(this,[e]),this.type===OpenLayers.Filter.Comparison.LIKE&&void 0===e.matchCase&&(this.matchCase=null)
},evaluate:function(e){e instanceof OpenLayers.Feature.Vector&&(e=e.attributes);var t=!1;
switch(e=e[this.property],this.type){case OpenLayers.Filter.Comparison.EQUAL_TO:t=this.value,t=this.matchCase||"string"!=typeof e||"string"!=typeof t?e==t:e.toUpperCase()==t.toUpperCase();
break;case OpenLayers.Filter.Comparison.NOT_EQUAL_TO:t=this.value,t=this.matchCase||"string"!=typeof e||"string"!=typeof t?e!=t:e.toUpperCase()!=t.toUpperCase();
break;case OpenLayers.Filter.Comparison.LESS_THAN:t=e<this.value;break;case OpenLayers.Filter.Comparison.GREATER_THAN:t=e>this.value;
break;case OpenLayers.Filter.Comparison.LESS_THAN_OR_EQUAL_TO:t=e<=this.value;break;
case OpenLayers.Filter.Comparison.GREATER_THAN_OR_EQUAL_TO:t=e>=this.value;break;
case OpenLayers.Filter.Comparison.BETWEEN:t=e>=this.lowerBoundary&&e<=this.upperBoundary;
break;case OpenLayers.Filter.Comparison.LIKE:t=RegExp(this.value,"gi").test(e);break;
case OpenLayers.Filter.Comparison.IS_NULL:t=null===e}return t},value2regex:function(e,t,i){if("."==e)throw Error("'.' is an unsupported wildCard character for OpenLayers.Filter.Comparison");
return e=e?e:"*",t=t?t:".",this.value=this.value.replace(RegExp("\\"+(i?i:"!")+"(.|$)","g"),"\\$1"),this.value=this.value.replace(RegExp("\\"+t,"g"),"."),this.value=this.value.replace(RegExp("\\"+e,"g"),".*"),this.value=this.value.replace(RegExp("\\\\.\\*","g"),"\\"+e),this.value=this.value.replace(RegExp("\\\\\\.","g"),"\\"+t)
},regex2value:function(){var e=this.value,e=e.replace(/!/g,"!!"),e=e.replace(/(\\)?\\\./g,function(e,t){return t?e:"!."
}),e=e.replace(/(\\)?\\\*/g,function(e,t){return t?e:"!*"}),e=e.replace(/\\\\/g,"\\");
return e=e.replace(/\.\*/g,"*")},clone:function(){return OpenLayers.Util.extend(new OpenLayers.Filter.Comparison,this)
},CLASS_NAME:"OpenLayers.Filter.Comparison"}),OpenLayers.Filter.Comparison.EQUAL_TO="==",OpenLayers.Filter.Comparison.NOT_EQUAL_TO="!=",OpenLayers.Filter.Comparison.LESS_THAN="<",OpenLayers.Filter.Comparison.GREATER_THAN=">",OpenLayers.Filter.Comparison.LESS_THAN_OR_EQUAL_TO="<=",OpenLayers.Filter.Comparison.GREATER_THAN_OR_EQUAL_TO=">=",OpenLayers.Filter.Comparison.BETWEEN="..",OpenLayers.Filter.Comparison.LIKE="~",OpenLayers.Filter.Comparison.IS_NULL="NULL",OpenLayers.Format.Filter=OpenLayers.Class(OpenLayers.Format.XML.VersionedOGC,{defaultVersion:"1.0.0",CLASS_NAME:"OpenLayers.Format.Filter"}),OpenLayers.Filter.Function=OpenLayers.Class(OpenLayers.Filter,{name:null,params:null,CLASS_NAME:"OpenLayers.Filter.Function"}),OpenLayers.Date={dateRegEx:/^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:(?:T(\d{1,2}):(\d{2}):(\d{2}(?:\.\d+)?)(Z|(?:[+-]\d{1,2}(?::(\d{2}))?)))|Z)?$/,toISOString:function(){return"toISOString"in Date.prototype?function(e){return e.toISOString()
}:function(e){return isNaN(e.getTime())?"Invalid Date":e.getUTCFullYear()+"-"+OpenLayers.Number.zeroPad(e.getUTCMonth()+1,2)+"-"+OpenLayers.Number.zeroPad(e.getUTCDate(),2)+"T"+OpenLayers.Number.zeroPad(e.getUTCHours(),2)+":"+OpenLayers.Number.zeroPad(e.getUTCMinutes(),2)+":"+OpenLayers.Number.zeroPad(e.getUTCSeconds(),2)+"."+OpenLayers.Number.zeroPad(e.getUTCMilliseconds(),3)+"Z"
}}(),parse:function(e){var t;if((e=e.match(this.dateRegEx))&&(e[1]||e[7])){t=parseInt(e[1],10)||0;
var i=parseInt(e[2],10)-1||0,r=parseInt(e[3],10)||1;if(t=new Date(Date.UTC(t,i,r)),i=e[7]){var r=parseInt(e[4],10),s=parseInt(e[5],10),n=parseFloat(e[6]),a=0|n,n=Math.round(1e3*(n-a));
t.setUTCHours(r,s,a,n),"Z"!==i&&(i=parseInt(i,10),e=parseInt(e[8],10)||0,e=-1e3*(3600*i+60*e),t=new Date(t.getTime()+e))
}}else t=new Date("invalid");return t}},OpenLayers.Format.Filter.v1=OpenLayers.Class(OpenLayers.Format.XML,{namespaces:{ogc:"http://www.opengis.net/ogc",gml:"http://www.opengis.net/gml",xlink:"http://www.w3.org/1999/xlink",xsi:"http://www.w3.org/2001/XMLSchema-instance"},defaultPrefix:"ogc",schemaLocation:null,initialize:function(e){OpenLayers.Format.XML.prototype.initialize.apply(this,[e])
},read:function(e){var t={};return this.readers.ogc.Filter.apply(this,[e,t]),t.filter
},readers:{ogc:{_expression:function(e){for(var t="",i=e.firstChild;i;i=i.nextSibling)switch(i.nodeType){case 1:e=this.readNode(i),e.property?t+="${"+e.property+"}":void 0!==e.value&&(t+=e.value);
break;case 3:case 4:t+=i.nodeValue}return t},Filter:function(e,t){var i={fids:[],filters:[]};
this.readChildNodes(e,i),0<i.fids.length?t.filter=new OpenLayers.Filter.FeatureId({fids:i.fids}):0<i.filters.length&&(t.filter=i.filters[0])
},FeatureId:function(e,t){var i=e.getAttribute("fid");i&&t.fids.push(i)},And:function(e,t){var i=new OpenLayers.Filter.Logical({type:OpenLayers.Filter.Logical.AND});
this.readChildNodes(e,i),t.filters.push(i)},Or:function(e,t){var i=new OpenLayers.Filter.Logical({type:OpenLayers.Filter.Logical.OR});
this.readChildNodes(e,i),t.filters.push(i)},Not:function(e,t){var i=new OpenLayers.Filter.Logical({type:OpenLayers.Filter.Logical.NOT});
this.readChildNodes(e,i),t.filters.push(i)},PropertyIsLessThan:function(e,t){var i=new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.LESS_THAN});
this.readChildNodes(e,i),t.filters.push(i)},PropertyIsGreaterThan:function(e,t){var i=new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.GREATER_THAN});
this.readChildNodes(e,i),t.filters.push(i)},PropertyIsLessThanOrEqualTo:function(e,t){var i=new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.LESS_THAN_OR_EQUAL_TO});
this.readChildNodes(e,i),t.filters.push(i)},PropertyIsGreaterThanOrEqualTo:function(e,t){var i=new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.GREATER_THAN_OR_EQUAL_TO});
this.readChildNodes(e,i),t.filters.push(i)},PropertyIsBetween:function(e,t){var i=new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.BETWEEN});
this.readChildNodes(e,i),t.filters.push(i)},Literal:function(e,t){t.value=OpenLayers.String.numericIf(this.getChildValue(e),!0)
},PropertyName:function(e,t){t.property=this.getChildValue(e)},LowerBoundary:function(e,t){t.lowerBoundary=OpenLayers.String.numericIf(this.readers.ogc._expression.call(this,e),!0)
},UpperBoundary:function(e,t){t.upperBoundary=OpenLayers.String.numericIf(this.readers.ogc._expression.call(this,e),!0)
},Intersects:function(e,t){this.readSpatial(e,t,OpenLayers.Filter.Spatial.INTERSECTS)
},Within:function(e,t){this.readSpatial(e,t,OpenLayers.Filter.Spatial.WITHIN)},Contains:function(e,t){this.readSpatial(e,t,OpenLayers.Filter.Spatial.CONTAINS)
},DWithin:function(e,t){this.readSpatial(e,t,OpenLayers.Filter.Spatial.DWITHIN)},Distance:function(e,t){t.distance=parseInt(this.getChildValue(e)),t.distanceUnits=e.getAttribute("units")
},Function:function(){},PropertyIsNull:function(e,t){var i=new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.IS_NULL});
this.readChildNodes(e,i),t.filters.push(i)}}},readSpatial:function(e,t,i){i=new OpenLayers.Filter.Spatial({type:i}),this.readChildNodes(e,i),i.value=i.components[0],delete i.components,t.filters.push(i)
},encodeLiteral:function(e){return e instanceof Date&&(e=OpenLayers.Date.toISOString(e)),e
},writeOgcExpression:function(e,t){return e instanceof OpenLayers.Filter.Function?this.writeNode("Function",e,t):this.writeNode("Literal",e,t),t
},write:function(e){return this.writers.ogc.Filter.apply(this,[e])},writers:{ogc:{Filter:function(e){var t=this.createElementNSPlus("ogc:Filter");
return this.writeNode(this.getFilterType(e),e,t),t},_featureIds:function(e){for(var t=this.createDocumentFragment(),i=0,r=e.fids.length;r>i;++i)this.writeNode("ogc:FeatureId",e.fids[i],t);
return t},FeatureId:function(e){return this.createElementNSPlus("ogc:FeatureId",{attributes:{fid:e}})
},And:function(e){for(var t,i=this.createElementNSPlus("ogc:And"),r=0,s=e.filters.length;s>r;++r)t=e.filters[r],this.writeNode(this.getFilterType(t),t,i);
return i},Or:function(e){for(var t,i=this.createElementNSPlus("ogc:Or"),r=0,s=e.filters.length;s>r;++r)t=e.filters[r],this.writeNode(this.getFilterType(t),t,i);
return i},Not:function(e){var t=this.createElementNSPlus("ogc:Not");return e=e.filters[0],this.writeNode(this.getFilterType(e),e,t),t
},PropertyIsLessThan:function(e){var t=this.createElementNSPlus("ogc:PropertyIsLessThan");
return this.writeNode("PropertyName",e,t),this.writeOgcExpression(e.value,t),t},PropertyIsGreaterThan:function(e){var t=this.createElementNSPlus("ogc:PropertyIsGreaterThan");
return this.writeNode("PropertyName",e,t),this.writeOgcExpression(e.value,t),t},PropertyIsLessThanOrEqualTo:function(e){var t=this.createElementNSPlus("ogc:PropertyIsLessThanOrEqualTo");
return this.writeNode("PropertyName",e,t),this.writeOgcExpression(e.value,t),t},PropertyIsGreaterThanOrEqualTo:function(e){var t=this.createElementNSPlus("ogc:PropertyIsGreaterThanOrEqualTo");
return this.writeNode("PropertyName",e,t),this.writeOgcExpression(e.value,t),t},PropertyIsBetween:function(e){var t=this.createElementNSPlus("ogc:PropertyIsBetween");
return this.writeNode("PropertyName",e,t),this.writeNode("LowerBoundary",e,t),this.writeNode("UpperBoundary",e,t),t
},PropertyName:function(e){return this.createElementNSPlus("ogc:PropertyName",{value:e.property})
},Literal:function(e){return this.createElementNSPlus("ogc:Literal",{value:(this.encodeLiteral||OpenLayers.Format.Filter.v1.prototype.encodeLiteral)(e)})
},LowerBoundary:function(e){var t=this.createElementNSPlus("ogc:LowerBoundary");return this.writeOgcExpression(e.lowerBoundary,t),t
},UpperBoundary:function(e){var t=this.createElementNSPlus("ogc:UpperBoundary");return this.writeNode("Literal",e.upperBoundary,t),t
},INTERSECTS:function(e){return this.writeSpatial(e,"Intersects")},WITHIN:function(e){return this.writeSpatial(e,"Within")
},CONTAINS:function(e){return this.writeSpatial(e,"Contains")},DWITHIN:function(e){var t=this.writeSpatial(e,"DWithin");
return this.writeNode("Distance",e,t),t},Distance:function(e){return this.createElementNSPlus("ogc:Distance",{attributes:{units:e.distanceUnits},value:e.distance})
},Function:function(e){var t=this.createElementNSPlus("ogc:Function",{attributes:{name:e.name}});
e=e.params;for(var i=0,r=e.length;r>i;i++)this.writeOgcExpression(e[i],t);return t
},PropertyIsNull:function(e){var t=this.createElementNSPlus("ogc:PropertyIsNull");
return this.writeNode("PropertyName",e,t),t}}},getFilterType:function(e){var t=this.filterMap[e.type];
if(!t)throw"Filter writing not supported for rule type: "+e.type;return t},filterMap:{"&&":"And","||":"Or","!":"Not","==":"PropertyIsEqualTo","!=":"PropertyIsNotEqualTo","<":"PropertyIsLessThan",">":"PropertyIsGreaterThan","<=":"PropertyIsLessThanOrEqualTo",">=":"PropertyIsGreaterThanOrEqualTo","..":"PropertyIsBetween","~":"PropertyIsLike",NULL:"PropertyIsNull",BBOX:"BBOX",DWITHIN:"DWITHIN",WITHIN:"WITHIN",CONTAINS:"CONTAINS",INTERSECTS:"INTERSECTS",FID:"_featureIds"},CLASS_NAME:"OpenLayers.Format.Filter.v1"}),OpenLayers.Geometry=OpenLayers.Class({id:null,parent:null,bounds:null,initialize:function(){this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_")
},destroy:function(){this.bounds=this.id=null},clone:function(){return new OpenLayers.Geometry
},setBounds:function(e){e&&(this.bounds=e.clone())},clearBounds:function(){this.bounds=null,this.parent&&this.parent.clearBounds()
},extendBounds:function(e){this.getBounds()?this.bounds.extend(e):this.setBounds(e)
},getBounds:function(){return null==this.bounds&&this.calculateBounds(),this.bounds
},calculateBounds:function(){},distanceTo:function(){},getVertices:function(){},atPoint:function(e,t,i){var r=!1;
return null!=this.getBounds()&&null!=e&&(t=null!=t?t:0,i=null!=i?i:0,r=new OpenLayers.Bounds(this.bounds.left-t,this.bounds.bottom-i,this.bounds.right+t,this.bounds.top+i).containsLonLat(e)),r
},getLength:function(){return 0},getArea:function(){return 0},getCentroid:function(){return null
},toString:function(){return OpenLayers.Format&&OpenLayers.Format.WKT?OpenLayers.Format.WKT.prototype.write(new OpenLayers.Feature.Vector(this)):Object.prototype.toString.call(this)
},CLASS_NAME:"OpenLayers.Geometry"}),OpenLayers.Geometry.fromWKT=function(e){var t;
if(OpenLayers.Format&&OpenLayers.Format.WKT){var i=OpenLayers.Geometry.fromWKT.format;
if(i||(i=new OpenLayers.Format.WKT,OpenLayers.Geometry.fromWKT.format=i),e=i.read(e),e instanceof OpenLayers.Feature.Vector)t=e.geometry;
else if(OpenLayers.Util.isArray(e)){t=e.length;for(var i=Array(t),r=0;t>r;++r)i[r]=e[r].geometry;
t=new OpenLayers.Geometry.Collection(i)}}return t},OpenLayers.Geometry.segmentsIntersect=function(e,t,i){var r=i&&i.point;
i=i&&i.tolerance;var s=!1,n=e.x1-t.x1,a=e.y1-t.y1,o=e.x2-e.x1,l=e.y2-e.y1,h=t.y2-t.y1,p=t.x2-t.x1,u=h*o-p*l,h=p*a-h*n,a=o*a-l*n;
if(0==u?0==h&&0==a&&(s=!0):(n=h/u,u=a/u,n>=0&&1>=n&&u>=0&&1>=u&&(r?(o=e.x1+n*o,u=e.y1+n*l,s=new OpenLayers.Geometry.Point(o,u)):s=!0)),i)if(s){if(r)e:for(e=[e,t],t=0;2>t;++t)for(n=e[t],l=1;3>l;++l)if(o=n["x"+l],u=n["y"+l],r=Math.sqrt(Math.pow(o-s.x,2)+Math.pow(u-s.y,2)),i>r){s.x=o,s.y=u;
break e}}else e:for(e=[e,t],t=0;2>t;++t)for(o=e[t],u=e[(t+1)%2],l=1;3>l;++l)if(n={x:o["x"+l],y:o["y"+l]},a=OpenLayers.Geometry.distanceToSegment(n,u),a.distance<i){s=r?new OpenLayers.Geometry.Point(n.x,n.y):!0;
break e}return s},OpenLayers.Geometry.distanceToSegment=function(e,t){var i=OpenLayers.Geometry.distanceSquaredToSegment(e,t);
return i.distance=Math.sqrt(i.distance),i},OpenLayers.Geometry.distanceSquaredToSegment=function(e,t){var i=e.x,r=e.y,s=t.x1,n=t.y1,a=t.x2,o=t.y2,l=a-s,h=o-n,p=(l*(i-s)+h*(r-n))/(Math.pow(l,2)+Math.pow(h,2));
return 0>=p||(p>=1?(s=a,n=o):(s+=p*l,n+=p*h)),{distance:Math.pow(s-i,2)+Math.pow(n-r,2),x:s,y:n,along:p}
},OpenLayers.Geometry.Point=OpenLayers.Class(OpenLayers.Geometry,{x:null,y:null,initialize:function(e,t){OpenLayers.Geometry.prototype.initialize.apply(this,arguments),this.x=parseFloat(e),this.y=parseFloat(t)
},clone:function(e){return null==e&&(e=new OpenLayers.Geometry.Point(this.x,this.y)),OpenLayers.Util.applyDefaults(e,this),e
},calculateBounds:function(){this.bounds=new OpenLayers.Bounds(this.x,this.y,this.x,this.y)
},distanceTo:function(e,t){var i,r,s,n,a,o=!(t&&!1===t.edge)&&t&&t.details;return e instanceof OpenLayers.Geometry.Point?(r=this.x,s=this.y,n=e.x,a=e.y,i=Math.sqrt(Math.pow(r-n,2)+Math.pow(s-a,2)),i=o?{x0:r,y0:s,x1:n,y1:a,distance:i}:i):(i=e.distanceTo(this,t),o&&(i={x0:i.x1,y0:i.y1,x1:i.x0,y1:i.y0,distance:i.distance})),i
},equals:function(e){var t=!1;return null!=e&&(t=this.x==e.x&&this.y==e.y||isNaN(this.x)&&isNaN(this.y)&&isNaN(e.x)&&isNaN(e.y)),t
},toShortString:function(){return this.x+", "+this.y},move:function(e,t){this.x+=e,this.y+=t,this.clearBounds()
},rotate:function(e,t){e*=Math.PI/180;var i=this.distanceTo(t),r=e+Math.atan2(this.y-t.y,this.x-t.x);
this.x=t.x+i*Math.cos(r),this.y=t.y+i*Math.sin(r),this.clearBounds()},getCentroid:function(){return new OpenLayers.Geometry.Point(this.x,this.y)
},resize:function(e,t,i){return this.x=t.x+e*(void 0==i?1:i)*(this.x-t.x),this.y=t.y+e*(this.y-t.y),this.clearBounds(),this
},intersects:function(e){var t=!1;return t="OpenLayers.Geometry.Point"==e.CLASS_NAME?this.equals(e):e.intersects(this)
},transform:function(e,t){return e&&t&&(OpenLayers.Projection.transform(this,e,t),this.bounds=null),this
},getVertices:function(){return[this]},CLASS_NAME:"OpenLayers.Geometry.Point"}),OpenLayers.Geometry.Collection=OpenLayers.Class(OpenLayers.Geometry,{components:null,componentTypes:null,initialize:function(e){OpenLayers.Geometry.prototype.initialize.apply(this,arguments),this.components=[],null!=e&&this.addComponents(e)
},destroy:function(){this.components.length=0,this.components=null,OpenLayers.Geometry.prototype.destroy.apply(this,arguments)
},clone:function(){for(var a=eval("new "+this.CLASS_NAME+"()"),b=0,c=this.components.length;c>b;b++)a.addComponent(this.components[b].clone());
return OpenLayers.Util.applyDefaults(a,this),a},getComponentsString:function(){for(var e=[],t=0,i=this.components.length;i>t;t++)e.push(this.components[t].toShortString());
return e.join(",")},calculateBounds:function(){this.bounds=null;var e=new OpenLayers.Bounds,t=this.components;
if(t)for(var i=0,r=t.length;r>i;i++)e.extend(t[i].getBounds());null!=e.left&&null!=e.bottom&&null!=e.right&&null!=e.top&&this.setBounds(e)
},addComponents:function(e){OpenLayers.Util.isArray(e)||(e=[e]);for(var t=0,i=e.length;i>t;t++)this.addComponent(e[t])
},addComponent:function(e,t){var i=!1;if(e&&(null==this.componentTypes||-1<OpenLayers.Util.indexOf(this.componentTypes,e.CLASS_NAME))){if(null!=t&&t<this.components.length){var i=this.components.slice(0,t),r=this.components.slice(t,this.components.length);
i.push(e),this.components=i.concat(r)}else this.components.push(e);e.parent=this,this.clearBounds(),i=!0
}return i},removeComponents:function(e){var t=!1;OpenLayers.Util.isArray(e)||(e=[e]);
for(var i=e.length-1;i>=0;--i)t=this.removeComponent(e[i])||t;return t},removeComponent:function(e){return OpenLayers.Util.removeItem(this.components,e),this.clearBounds(),!0
},getLength:function(){for(var e=0,t=0,i=this.components.length;i>t;t++)e+=this.components[t].getLength();
return e},getArea:function(){for(var e=0,t=0,i=this.components.length;i>t;t++)e+=this.components[t].getArea();
return e},getGeodesicArea:function(e){for(var t=0,i=0,r=this.components.length;r>i;i++)t+=this.components[i].getGeodesicArea(e);
return t},getCentroid:function(e){if(!e)return this.components.length&&this.components[0].getCentroid();
if(e=this.components.length,!e)return!1;for(var t,i=[],r=[],s=0,n=Number.MAX_VALUE,a=0;e>a;++a){t=this.components[a];
var o=t.getArea();t=t.getCentroid(!0),isNaN(o)||isNaN(t.x)||isNaN(t.y)||(i.push(o),s+=o,n=n>o&&o>0?o:n,r.push(t))
}if(e=i.length,0===s){for(a=0;e>a;++a)i[a]=1;s=i.length}else{for(a=0;e>a;++a)i[a]/=n;
s/=n}for(var l=n=0,a=0;e>a;++a)t=r[a],o=i[a],n+=t.x*o,l+=t.y*o;return new OpenLayers.Geometry.Point(n/s,l/s)
},getGeodesicLength:function(e){for(var t=0,i=0,r=this.components.length;r>i;i++)t+=this.components[i].getGeodesicLength(e);
return t},move:function(e,t){for(var i=0,r=this.components.length;r>i;i++)this.components[i].move(e,t)
},rotate:function(e,t){for(var i=0,r=this.components.length;r>i;++i)this.components[i].rotate(e,t)
},resize:function(e,t,i){for(var r=0;r<this.components.length;++r)this.components[r].resize(e,t,i);
return this},distanceTo:function(e,t){for(var i,r,s,n=!(t&&!1===t.edge)&&t&&t.details,a=Number.POSITIVE_INFINITY,o=0,l=this.components.length;l>o&&(i=this.components[o].distanceTo(e,t),s=n?i.distance:i,!(a>s&&(a=s,r=i,0==a)));++o);return r
},equals:function(e){var t=!0;if(e&&e.CLASS_NAME&&this.CLASS_NAME==e.CLASS_NAME)if(OpenLayers.Util.isArray(e.components)&&e.components.length==this.components.length){for(var i=0,r=this.components.length;r>i;++i)if(!this.components[i].equals(e.components[i])){t=!1;
break}}else t=!1;else t=!1;return t},transform:function(e,t){if(e&&t){for(var i=0,r=this.components.length;r>i;i++)this.components[i].transform(e,t);
this.bounds=null}return this},intersects:function(e){for(var t=!1,i=0,r=this.components.length;r>i&&!(t=e.intersects(this.components[i]));++i);return t
},getVertices:function(e){for(var t=[],i=0,r=this.components.length;r>i;++i)Array.prototype.push.apply(t,this.components[i].getVertices(e));
return t},CLASS_NAME:"OpenLayers.Geometry.Collection"}),OpenLayers.Geometry.MultiPoint=OpenLayers.Class(OpenLayers.Geometry.Collection,{componentTypes:["OpenLayers.Geometry.Point"],addPoint:function(e,t){this.addComponent(e,t)
},removePoint:function(e){this.removeComponent(e)},CLASS_NAME:"OpenLayers.Geometry.MultiPoint"}),OpenLayers.Geometry.Curve=OpenLayers.Class(OpenLayers.Geometry.MultiPoint,{componentTypes:["OpenLayers.Geometry.Point"],getLength:function(){var e=0;
if(this.components&&1<this.components.length)for(var t=1,i=this.components.length;i>t;t++)e+=this.components[t-1].distanceTo(this.components[t]);
return e},getGeodesicLength:function(e){var t=this;if(e){var i=new OpenLayers.Projection("EPSG:4326");
i.equals(e)||(t=this.clone().transform(e,i))}if(e=0,t.components&&1<t.components.length)for(var r,s=1,n=t.components.length;n>s;s++)i=t.components[s-1],r=t.components[s],e+=OpenLayers.Util.distVincenty({lon:i.x,lat:i.y},{lon:r.x,lat:r.y});
return 1e3*e},CLASS_NAME:"OpenLayers.Geometry.Curve"}),OpenLayers.Geometry.LineString=OpenLayers.Class(OpenLayers.Geometry.Curve,{removeComponent:function(){var e=this.components&&2<this.components.length;
return e&&OpenLayers.Geometry.Collection.prototype.removeComponent.apply(this,arguments),e
},intersects:function(e){var t=!1,i=e.CLASS_NAME;if("OpenLayers.Geometry.LineString"==i||"OpenLayers.Geometry.LinearRing"==i||"OpenLayers.Geometry.Point"==i){var r=this.getSortedSegments();
e="OpenLayers.Geometry.Point"==i?[{x1:e.x,y1:e.y,x2:e.x,y2:e.y}]:e.getSortedSegments();
var s,n,a,o,l,h,p,u=0,c=r.length;e:for(;c>u;++u){i=r[u],s=i.x1,n=i.x2,a=i.y1,o=i.y2;
for(var y=0,d=e.length;d>y&&(l=e[y],!(l.x1>n));++y)if(!(l.x2<s||(h=l.y1,p=l.y2,Math.min(h,p)>Math.max(a,o)||Math.max(h,p)<Math.min(a,o)||!OpenLayers.Geometry.segmentsIntersect(i,l)))){t=!0;
break e}}}else t=e.intersects(this);return t},getSortedSegments:function(){for(var e,t,i=this.components.length-1,r=Array(i),s=0;i>s;++s)e=this.components[s],t=this.components[s+1],r[s]=e.x<t.x?{x1:e.x,y1:e.y,x2:t.x,y2:t.y}:{x1:t.x,y1:t.y,x2:e.x,y2:e.y};
return r.sort(function(e,t){return e.x1-t.x1})},splitWithSegment:function(e,t){for(var i,r,s,n=!(t&&!1===t.edge),a=t&&t.tolerance,o=[],l=this.getVertices(),h=[],p=[],u=!1,c={point:!0,tolerance:a},y=null,d=0,m=l.length-2;m>=d;++d)a=l[d],h.push(a.clone()),i=l[d+1],r={x1:a.x,y1:a.y,x2:i.x,y2:i.y},r=OpenLayers.Geometry.segmentsIntersect(e,r,c),r instanceof OpenLayers.Geometry.Point&&((s=r.x===e.x1&&r.y===e.y1||r.x===e.x2&&r.y===e.y2||r.equals(a)||r.equals(i)?!0:!1)||n)&&(r.equals(p[p.length-1])||p.push(r.clone()),0===d&&r.equals(a)||r.equals(i)||(u=!0,r.equals(a)||h.push(r),o.push(new OpenLayers.Geometry.LineString(h)),h=[r.clone()]));
if(u&&(h.push(i.clone()),o.push(new OpenLayers.Geometry.LineString(h))),0<p.length)var f=e.x1<e.x2?1:-1,g=e.y1<e.y2?1:-1,y={lines:o,points:p.sort(function(e,t){return f*e.x-f*t.x||g*e.y-g*t.y
})};return y},split:function(e,t){var i,r,s,n,a=null,o=t&&t.mutual;if(e instanceof OpenLayers.Geometry.LineString){var l,h,p,u,c,y=this.getVertices(),d=[];
s=[];for(var m=0,f=y.length-2;f>=m;++m){l=y[m],h=y[m+1],p={x1:l.x,y1:l.y,x2:h.x,y2:h.y},n=n||[e],o&&d.push(l.clone());
for(var g=0;g<n.length;++g)if((u=n[g].splitWithSegment(p,t))&&(c=u.lines,0<c.length&&(c.unshift(g,1),Array.prototype.splice.apply(n,c),g+=c.length-2),o))for(var L=0,v=u.points.length;v>L;++L)c=u.points[L],c.equals(l)||(d.push(c),s.push(new OpenLayers.Geometry.LineString(d)),d=c.equals(h)?[]:[c.clone()])
}o&&0<s.length&&0<d.length&&(d.push(h.clone()),s.push(new OpenLayers.Geometry.LineString(d)))
}else a=e.splitWith(this,t);return n&&1<n.length?r=!0:n=[],s&&1<s.length?i=!0:s=[],(r||i)&&(a=o?[s,n]:n),a
},splitWith:function(e,t){return e.split(this,t)},getVertices:function(e){return!0===e?[this.components[0],this.components[this.components.length-1]]:!1===e?this.components.slice(1,this.components.length-1):this.components.slice()
},distanceTo:function(e,t){var i,r=!(t&&!1===t.edge)&&t&&t.details,s={},n=Number.POSITIVE_INFINITY;
if(e instanceof OpenLayers.Geometry.Point){for(var a,o=this.getSortedSegments(),l=e.x,h=e.y,p=0,u=o.length;u>p;++p)if(a=o[p],i=OpenLayers.Geometry.distanceToSegment(e,a),i.distance<n){if(n=i.distance,s=i,0===n)break
}else if(a.x2>l&&(h>a.y1&&h<a.y2||h<a.y1&&h>a.y2))break;s=r?{distance:s.distance,x0:s.x,y0:s.y,x1:l,y1:h}:s.distance
}else if(e instanceof OpenLayers.Geometry.LineString){var c,y,o=this.getSortedSegments(),l=e.getSortedSegments(),d=l.length,m={point:!0},p=0,u=o.length;
e:for(;u>p;++p){h=o[p],a=h.x1,y=h.y1;for(var f=0;d>f;++f){if(i=l[f],c=OpenLayers.Geometry.segmentsIntersect(h,i,m)){n=0,s={distance:0,x0:c.x,y0:c.y,x1:c.x,y1:c.y};
break e}i=OpenLayers.Geometry.distanceToSegment({x:a,y:y},i),i.distance<n&&(n=i.distance,s={distance:n,x0:a,y0:y,x1:i.x,y1:i.y})
}}r||(s=s.distance),0!==n&&h&&(i=e.distanceTo(new OpenLayers.Geometry.Point(h.x2,h.y2),t),p=r?i.distance:i,n>p&&(s=r?{distance:n,x0:i.x1,y0:i.y1,x1:i.x0,y1:i.y0}:p))
}else s=e.distanceTo(this,t),r&&(s={distance:s.distance,x0:s.x1,y0:s.y1,x1:s.x0,y1:s.y0});
return s},simplify:function(e){if(this&&null!==this){var t=this.getVertices();if(3>t.length)return this;
var i=function(e,t,r,n){for(var a,o=0,l=0,h=t;r>h;h++){a=e[t];var p=e[r],u=e[h],u=Math.abs(.5*(a.x*p.y+p.x*u.y+u.x*a.y-p.x*a.y-u.x*p.y-a.x*u.y));
a=Math.sqrt(Math.pow(a.x-p.x,2)+Math.pow(a.y-p.y,2)),a=2*(u/a),a>o&&(o=a,l=h)}o>n&&l!=t&&(s.push(l),i(e,t,l,n),i(e,l,r,n))
},r=t.length-1,s=[];for(s.push(0),s.push(r);t[0].equals(t[r]);)r--,s.push(r);for(i(t,0,r,e),e=[],s.sort(function(e,t){return e-t
}),r=0;r<s.length;r++)e.push(t[s[r]]);return new OpenLayers.Geometry.LineString(e)
}return this},CLASS_NAME:"OpenLayers.Geometry.LineString"}),OpenLayers.Geometry.MultiLineString=OpenLayers.Class(OpenLayers.Geometry.Collection,{componentTypes:["OpenLayers.Geometry.LineString"],split:function(e,t){for(var i,r,s,n,a=null,o=t&&t.mutual,l=[],h=[e],p=0,u=this.components.length;u>p;++p){r=this.components[p],s=!1;
for(var c=0;c<h.length;++c)if(i=r.split(h[c],t)){if(o){s=i[0];for(var y=0,d=s.length;d>y;++y)0===y&&l.length?l[l.length-1].addComponent(s[y]):l.push(new OpenLayers.Geometry.MultiLineString([s[y]]));
s=!0,i=i[1]}if(i.length){i.unshift(c,1),Array.prototype.splice.apply(h,i);break}}s||(l.length?l[l.length-1].addComponent(r.clone()):l=[new OpenLayers.Geometry.MultiLineString(r.clone())])
}return l&&1<l.length?s=!0:l=[],h&&1<h.length?n=!0:h=[],(s||n)&&(a=o?[l,h]:h),a},splitWith:function(e,t){var i,r,s,n,a,o,l=null,h=t&&t.mutual;
if(e instanceof OpenLayers.Geometry.LineString){o=[],a=[e];for(var p=0,u=this.components.length;u>p;++p){s=!1,r=this.components[p];
for(var c=0;c<a.length;++c)if(i=a[c].split(r,t)){h&&(s=i[0],s.length&&(s.unshift(c,1),Array.prototype.splice.apply(a,s),c+=s.length-2),i=i[1],0===i.length&&(i=[r.clone()])),s=0;
for(var y=i.length;y>s;++s)0===s&&o.length?o[o.length-1].addComponent(i[s]):o.push(new OpenLayers.Geometry.MultiLineString([i[s]]));
s=!0}s||(o.length?o[o.length-1].addComponent(r.clone()):o=[new OpenLayers.Geometry.MultiLineString([r.clone()])])
}}else l=e.split(this);return a&&1<a.length?n=!0:a=[],o&&1<o.length?s=!0:o=[],(n||s)&&(l=h?[a,o]:o),l
},CLASS_NAME:"OpenLayers.Geometry.MultiLineString"}),OpenLayers.Geometry.LinearRing=OpenLayers.Class(OpenLayers.Geometry.LineString,{componentTypes:["OpenLayers.Geometry.Point"],addComponent:function(e,t){var i=!1,r=this.components.pop();
return null==t&&e.equals(r)||(i=OpenLayers.Geometry.Collection.prototype.addComponent.apply(this,arguments)),OpenLayers.Geometry.Collection.prototype.addComponent.apply(this,[this.components[0]]),i
},removeComponent:function(){var e=this.components&&3<this.components.length;return e&&(this.components.pop(),OpenLayers.Geometry.Collection.prototype.removeComponent.apply(this,arguments),OpenLayers.Geometry.Collection.prototype.addComponent.apply(this,[this.components[0]])),e
},move:function(e,t){for(var i=0,r=this.components.length;r-1>i;i++)this.components[i].move(e,t)
},rotate:function(e,t){for(var i=0,r=this.components.length;r-1>i;++i)this.components[i].rotate(e,t)
},resize:function(e,t,i){for(var r=0,s=this.components.length;s-1>r;++r)this.components[r].resize(e,t,i);
return this},transform:function(e,t){if(e&&t){for(var i=0,r=this.components.length;r-1>i;i++)this.components[i].transform(e,t);
this.bounds=null}return this},getCentroid:function(){if(this.components){var e=this.components.length;
if(e>0&&2>=e)return this.components[0].clone();if(e>2){var t=0,i=0,r=this.components[0].x,s=this.components[0].y,n=-1*this.getArea();
if(0!=n){for(var a=0;e-1>a;a++)var o=this.components[a],l=this.components[a+1],t=t+(o.x+l.x-2*r)*((o.x-r)*(l.y-s)-(l.x-r)*(o.y-s)),i=i+(o.y+l.y-2*s)*((o.x-r)*(l.y-s)-(l.x-r)*(o.y-s));
t=r+t/(6*n),e=s+i/(6*n)}else{for(a=0;e-1>a;a++)t+=this.components[a].x,i+=this.components[a].y;
t/=e-1,e=i/(e-1)}return new OpenLayers.Geometry.Point(t,e)}return null}},getArea:function(){var e=0;
if(this.components&&2<this.components.length){for(var t=e=0,i=this.components.length;i-1>t;t++)var r=this.components[t],s=this.components[t+1],e=e+(r.x+s.x)*(s.y-r.y);
e=-e/2}return e},getGeodesicArea:function(e){var t=this;if(e){var i=new OpenLayers.Projection("EPSG:4326");
i.equals(e)||(t=this.clone().transform(e,i))}if(e=0,i=t.components&&t.components.length,i>2){for(var r,s,n=0;i-1>n;n++)r=t.components[n],s=t.components[n+1],e+=OpenLayers.Util.rad(s.x-r.x)*(2+Math.sin(OpenLayers.Util.rad(r.y))+Math.sin(OpenLayers.Util.rad(s.y)));
e=40680631590769*e/2}return e},containsPoint:function(e){var t=OpenLayers.Number.limitSigDigs,i=t(e.x,14);
e=t(e.y,14);for(var r,s,n,a,o,l=this.components.length-1,h=0,p=0;l>p;++p)if(r=this.components[p],n=t(r.x,14),r=t(r.y,14),s=this.components[p+1],a=t(s.x,14),s=t(s.y,14),r==s){if(e==r&&(a>=n&&i>=n&&a>=i||n>=a&&n>=i&&i>=a)){h=-1;
break}}else{if(o=t((e-s)*((a-n)/(s-r))+a,14),o==i&&(s>r&&e>=r&&s>=e||r>s&&r>=e&&e>=s)){h=-1;
break}i>=o||n!=a&&(o<Math.min(n,a)||o>Math.max(n,a))||(s>r&&e>=r&&s>e||r>s&&r>e&&e>=s)&&++h
}return-1==h?1:!!(1&h)},intersects:function(e){var t=!1;if("OpenLayers.Geometry.Point"==e.CLASS_NAME)t=this.containsPoint(e);
else if("OpenLayers.Geometry.LineString"==e.CLASS_NAME)t=e.intersects(this);else if("OpenLayers.Geometry.LinearRing"==e.CLASS_NAME)t=OpenLayers.Geometry.LineString.prototype.intersects.apply(this,[e]);
else for(var i=0,r=e.components.length;r>i&&!(t=e.components[i].intersects(this));++i);return t
},getVertices:function(e){return!0===e?[]:this.components.slice(0,this.components.length-1)
},CLASS_NAME:"OpenLayers.Geometry.LinearRing"}),OpenLayers.Geometry.Polygon=OpenLayers.Class(OpenLayers.Geometry.Collection,{componentTypes:["OpenLayers.Geometry.LinearRing"],getArea:function(){var e=0;
if(this.components&&0<this.components.length)for(var e=e+Math.abs(this.components[0].getArea()),t=1,i=this.components.length;i>t;t++)e-=Math.abs(this.components[t].getArea());
return e},getGeodesicArea:function(e){var t=0;if(this.components&&0<this.components.length)for(var t=t+Math.abs(this.components[0].getGeodesicArea(e)),i=1,r=this.components.length;r>i;i++)t-=Math.abs(this.components[i].getGeodesicArea(e));
return t},containsPoint:function(e){var t=this.components.length,i=!1;if(t>0&&(i=this.components[0].containsPoint(e),1!==i&&i&&t>1))for(var r,s=1;t>s;++s)if(r=this.components[s].containsPoint(e)){i=1===r?1:!1;
break}return i},intersects:function(e){var t,i,r=!1;if("OpenLayers.Geometry.Point"==e.CLASS_NAME)r=this.containsPoint(e);
else if("OpenLayers.Geometry.LineString"==e.CLASS_NAME||"OpenLayers.Geometry.LinearRing"==e.CLASS_NAME){for(t=0,i=this.components.length;i>t&&!(r=e.intersects(this.components[t]));++t);if(!r)for(t=0,i=e.components.length;i>t&&!(r=this.containsPoint(e.components[t]));++t);}else for(t=0,i=e.components.length;i>t&&!(r=this.intersects(e.components[t]));++t);if(!r&&"OpenLayers.Geometry.Polygon"==e.CLASS_NAME){var s=this.components[0];
for(t=0,i=s.components.length;i>t&&!(r=e.containsPoint(s.components[t]));++t);}return r
},distanceTo:function(e,t){return t&&!1===t.edge&&this.intersects(e)?0:OpenLayers.Geometry.Collection.prototype.distanceTo.apply(this,[e,t])
},CLASS_NAME:"OpenLayers.Geometry.Polygon"}),OpenLayers.Geometry.Polygon.createRegularPolygon=function(e,t,i,r){var s=Math.PI*(1/i-.5);
r&&(s+=r/180*Math.PI);for(var n,a=[],o=0;i>o;++o)n=s+2*o*Math.PI/i,r=e.x+t*Math.cos(n),n=e.y+t*Math.sin(n),a.push(new OpenLayers.Geometry.Point(r,n));
return e=new OpenLayers.Geometry.LinearRing(a),new OpenLayers.Geometry.Polygon([e])
},OpenLayers.Geometry.MultiPolygon=OpenLayers.Class(OpenLayers.Geometry.Collection,{componentTypes:["OpenLayers.Geometry.Polygon"],CLASS_NAME:"OpenLayers.Geometry.MultiPolygon"}),OpenLayers.Format.GML=OpenLayers.Class(OpenLayers.Format.XML,{featureNS:"http://mapserver.gis.umn.edu/mapserver",featurePrefix:"feature",featureName:"featureMember",layerName:"features",geometryName:"geometry",collectionName:"FeatureCollection",gmlns:"http://www.opengis.net/gml",extractAttributes:!0,xy:!0,initialize:function(e){this.regExes={trimSpace:/^\s*|\s*$/g,removeSpace:/\s*/g,splitSpace:/\s+/,trimComma:/\s*,\s*/g},OpenLayers.Format.XML.prototype.initialize.apply(this,[e])
},read:function(e){"string"==typeof e&&(e=OpenLayers.Format.XML.prototype.read.apply(this,[e])),e=this.getElementsByTagNameNS(e.documentElement,this.gmlns,this.featureName);
for(var t=[],i=0;i<e.length;i++){var r=this.parseFeature(e[i]);r&&t.push(r)}return t
},parseFeature:function(e){for(var t,i,r,s="MultiPolygon Polygon MultiLineString LineString MultiPoint Point Envelope".split(" "),n=0;n<s.length;++n)if(t=s[n],i=this.getElementsByTagNameNS(e,this.gmlns,t),0<i.length){if(!(r=this.parseGeometry[t.toLowerCase()]))throw new TypeError("Unsupported geometry type: "+t);
r=r.apply(this,[i[0]]),this.internalProjection&&this.externalProjection&&r.transform(this.externalProjection,this.internalProjection);
break}var a;for(t=this.getElementsByTagNameNS(e,this.gmlns,"Box"),n=0;n<t.length;++n)s=t[n],i=this.parseGeometry.box.apply(this,[s]),s=s.parentNode,"boundedBy"===(s.localName||s.nodeName.split(":").pop())?a=i:r=i.toGeometry();
var o;this.extractAttributes&&(o=this.parseAttributes(e)),o=new OpenLayers.Feature.Vector(r,o),o.bounds=a,o.gml={featureType:e.firstChild.nodeName.split(":")[1],featureNS:e.firstChild.namespaceURI,featureNSPrefix:e.firstChild.prefix},e=e.firstChild;
for(var l;e&&(1!=e.nodeType||!(l=e.getAttribute("fid")||e.getAttribute("id")));)e=e.nextSibling;
return o.fid=l,o},parseGeometry:{point:function(e){var t,i;return i=[],t=this.getElementsByTagNameNS(e,this.gmlns,"pos"),0<t.length&&(i=t[0].firstChild.nodeValue,i=i.replace(this.regExes.trimSpace,""),i=i.split(this.regExes.splitSpace)),0==i.length&&(t=this.getElementsByTagNameNS(e,this.gmlns,"coordinates"),0<t.length&&(i=t[0].firstChild.nodeValue,i=i.replace(this.regExes.removeSpace,""),i=i.split(","))),0==i.length&&(t=this.getElementsByTagNameNS(e,this.gmlns,"coord"),0<t.length&&(e=this.getElementsByTagNameNS(t[0],this.gmlns,"X"),t=this.getElementsByTagNameNS(t[0],this.gmlns,"Y"),0<e.length&&0<t.length&&(i=[e[0].firstChild.nodeValue,t[0].firstChild.nodeValue]))),2==i.length&&(i[2]=null),this.xy?new OpenLayers.Geometry.Point(i[0],i[1],i[2]):new OpenLayers.Geometry.Point(i[1],i[0],i[2])
},multipoint:function(e){e=this.getElementsByTagNameNS(e,this.gmlns,"Point");var t=[];
if(0<e.length)for(var i,r=0;r<e.length;++r)(i=this.parseGeometry.point.apply(this,[e[r]]))&&t.push(i);
return new OpenLayers.Geometry.MultiPoint(t)},linestring:function(e,t){var i,r;r=[];
var s=[];if(i=this.getElementsByTagNameNS(e,this.gmlns,"posList"),0<i.length){r=this.getChildValue(i[0]),r=r.replace(this.regExes.trimSpace,""),r=r.split(this.regExes.splitSpace);
var n,a,o,l=parseInt(i[0].getAttribute("dimension"));for(i=0;i<r.length/l;++i)n=i*l,a=r[n],o=r[n+1],n=2==l?null:r[n+2],this.xy?s.push(new OpenLayers.Geometry.Point(a,o,n)):s.push(new OpenLayers.Geometry.Point(o,a,n))
}if(0==r.length&&(i=this.getElementsByTagNameNS(e,this.gmlns,"coordinates"),0<i.length))for(r=this.getChildValue(i[0]),r=r.replace(this.regExes.trimSpace,""),r=r.replace(this.regExes.trimComma,","),l=r.split(this.regExes.splitSpace),i=0;i<l.length;++i)r=l[i].split(","),2==r.length&&(r[2]=null),this.xy?s.push(new OpenLayers.Geometry.Point(r[0],r[1],r[2])):s.push(new OpenLayers.Geometry.Point(r[1],r[0],r[2]));
return r=null,0!=s.length&&(r=t?new OpenLayers.Geometry.LinearRing(s):new OpenLayers.Geometry.LineString(s)),r
},multilinestring:function(e){e=this.getElementsByTagNameNS(e,this.gmlns,"LineString");
var t=[];if(0<e.length)for(var i,r=0;r<e.length;++r)(i=this.parseGeometry.linestring.apply(this,[e[r]]))&&t.push(i);
return new OpenLayers.Geometry.MultiLineString(t)},polygon:function(e){e=this.getElementsByTagNameNS(e,this.gmlns,"LinearRing");
var t=[];if(0<e.length)for(var i,r=0;r<e.length;++r)(i=this.parseGeometry.linestring.apply(this,[e[r],!0]))&&t.push(i);
return new OpenLayers.Geometry.Polygon(t)},multipolygon:function(e){e=this.getElementsByTagNameNS(e,this.gmlns,"Polygon");
var t=[];if(0<e.length)for(var i,r=0;r<e.length;++r)(i=this.parseGeometry.polygon.apply(this,[e[r]]))&&t.push(i);
return new OpenLayers.Geometry.MultiPolygon(t)},envelope:function(e){var t,i,r=[],s=this.getElementsByTagNameNS(e,this.gmlns,"lowerCorner");
if(0<s.length){t=[],0<s.length&&(t=s[0].firstChild.nodeValue,t=t.replace(this.regExes.trimSpace,""),t=t.split(this.regExes.splitSpace)),2==t.length&&(t[2]=null);
var n=this.xy?new OpenLayers.Geometry.Point(t[0],t[1],t[2]):new OpenLayers.Geometry.Point(t[1],t[0],t[2])
}if(e=this.getElementsByTagNameNS(e,this.gmlns,"upperCorner"),0<e.length){t=[],0<e.length&&(t=e[0].firstChild.nodeValue,t=t.replace(this.regExes.trimSpace,""),t=t.split(this.regExes.splitSpace)),2==t.length&&(t[2]=null);
var a=this.xy?new OpenLayers.Geometry.Point(t[0],t[1],t[2]):new OpenLayers.Geometry.Point(t[1],t[0],t[2])
}return n&&a&&(r.push(new OpenLayers.Geometry.Point(n.x,n.y)),r.push(new OpenLayers.Geometry.Point(a.x,n.y)),r.push(new OpenLayers.Geometry.Point(a.x,a.y)),r.push(new OpenLayers.Geometry.Point(n.x,a.y)),r.push(new OpenLayers.Geometry.Point(n.x,n.y)),r=new OpenLayers.Geometry.LinearRing(r),i=new OpenLayers.Geometry.Polygon([r])),i
},box:function(e){var t=this.getElementsByTagNameNS(e,this.gmlns,"coordinates"),i=e=null;
return 0<t.length&&(t=t[0].firstChild.nodeValue,t=t.split(" "),2==t.length&&(e=t[0].split(","),i=t[1].split(","))),null!==e&&null!==i?new OpenLayers.Bounds(parseFloat(e[0]),parseFloat(e[1]),parseFloat(i[0]),parseFloat(i[1])):void 0
}},parseAttributes:function(e){var t={};e=e.firstChild;for(var i,r,s;e;){if(1==e.nodeType){for(e=e.childNodes,i=0;i<e.length;++i)r=e[i],1==r.nodeType&&(s=r.childNodes,1==s.length?(s=s[0],(3==s.nodeType||4==s.nodeType)&&(r=r.prefix?r.nodeName.split(":")[1]:r.nodeName,s=s.nodeValue.replace(this.regExes.trimSpace,""),t[r]=s)):t[r.nodeName.split(":").pop()]=null);
break}e=e.nextSibling}return t},write:function(e){OpenLayers.Util.isArray(e)||(e=[e]);
for(var t=this.createElementNS("http://www.opengis.net/wfs","wfs:"+this.collectionName),i=0;i<e.length;i++)t.appendChild(this.createFeatureXML(e[i]));
return OpenLayers.Format.XML.prototype.write.apply(this,[t])},createFeatureXML:function(e){var t=this.buildGeometryNode(e.geometry),i=this.createElementNS(this.featureNS,this.featurePrefix+":"+this.geometryName);
i.appendChild(t);var t=this.createElementNS(this.gmlns,"gml:"+this.featureName),r=this.createElementNS(this.featureNS,this.featurePrefix+":"+this.layerName);
r.setAttribute("fid",e.fid||e.id),r.appendChild(i);for(var s in e.attributes){var i=this.createTextNode(e.attributes[s]),n=s.substring(s.lastIndexOf(":")+1),n=this.createElementNS(this.featureNS,this.featurePrefix+":"+n);
n.appendChild(i),r.appendChild(n)}return t.appendChild(r),t},buildGeometryNode:function(e){this.externalProjection&&this.internalProjection&&(e=e.clone(),e.transform(this.internalProjection,this.externalProjection));
var t=e.CLASS_NAME,t=t.substring(t.lastIndexOf(".")+1);return this.buildGeometry[t.toLowerCase()].apply(this,[e])
},buildGeometry:{point:function(e){var t=this.createElementNS(this.gmlns,"gml:Point");
return t.appendChild(this.buildCoordinatesNode(e)),t},multipoint:function(e){var t=this.createElementNS(this.gmlns,"gml:MultiPoint");
e=e.components;for(var i,r,s=0;s<e.length;s++)i=this.createElementNS(this.gmlns,"gml:pointMember"),r=this.buildGeometry.point.apply(this,[e[s]]),i.appendChild(r),t.appendChild(i);
return t},linestring:function(e){var t=this.createElementNS(this.gmlns,"gml:LineString");
return t.appendChild(this.buildCoordinatesNode(e)),t},multilinestring:function(e){var t=this.createElementNS(this.gmlns,"gml:MultiLineString");
e=e.components;for(var i,r,s=0;s<e.length;++s)i=this.createElementNS(this.gmlns,"gml:lineStringMember"),r=this.buildGeometry.linestring.apply(this,[e[s]]),i.appendChild(r),t.appendChild(i);
return t},linearring:function(e){var t=this.createElementNS(this.gmlns,"gml:LinearRing");
return t.appendChild(this.buildCoordinatesNode(e)),t},polygon:function(e){var t=this.createElementNS(this.gmlns,"gml:Polygon");
e=e.components;for(var i,r,s=0;s<e.length;++s)i=0==s?"outerBoundaryIs":"innerBoundaryIs",i=this.createElementNS(this.gmlns,"gml:"+i),r=this.buildGeometry.linearring.apply(this,[e[s]]),i.appendChild(r),t.appendChild(i);
return t},multipolygon:function(e){var t=this.createElementNS(this.gmlns,"gml:MultiPolygon");
e=e.components;for(var i,r,s=0;s<e.length;++s)i=this.createElementNS(this.gmlns,"gml:polygonMember"),r=this.buildGeometry.polygon.apply(this,[e[s]]),i.appendChild(r),t.appendChild(i);
return t},bounds:function(e){var t=this.createElementNS(this.gmlns,"gml:Box");return t.appendChild(this.buildCoordinatesNode(e)),t
}},buildCoordinatesNode:function(e){var t=this.createElementNS(this.gmlns,"gml:coordinates");
t.setAttribute("decimal","."),t.setAttribute("cs",","),t.setAttribute("ts"," ");var i=[];
if(e instanceof OpenLayers.Bounds)i.push(e.left+","+e.bottom),i.push(e.right+","+e.top);
else{e=e.components?e.components:[e];for(var r=0;r<e.length;r++)i.push(e[r].x+","+e[r].y)
}return i=this.createTextNode(i.join(" ")),t.appendChild(i),t},CLASS_NAME:"OpenLayers.Format.GML"}),OpenLayers.Format.GML||(OpenLayers.Format.GML={}),OpenLayers.Format.GML.Base=OpenLayers.Class(OpenLayers.Format.XML,{namespaces:{gml:"http://www.opengis.net/gml",xlink:"http://www.w3.org/1999/xlink",xsi:"http://www.w3.org/2001/XMLSchema-instance",wfs:"http://www.opengis.net/wfs"},defaultPrefix:"gml",schemaLocation:null,featureType:null,featureNS:null,geometryName:"geometry",extractAttributes:!0,srsName:null,xy:!0,geometryTypes:null,singleFeatureType:null,regExes:{trimSpace:/^\s*|\s*$/g,removeSpace:/\s*/g,splitSpace:/\s+/,trimComma:/\s*,\s*/g,featureMember:/^(.*:)?featureMembers?$/},initialize:function(e){OpenLayers.Format.XML.prototype.initialize.apply(this,[e]),this.setGeometryTypes(),e&&e.featureNS&&this.setNamespace("feature",e.featureNS),this.singleFeatureType=!e||"string"==typeof e.featureType
},read:function(e){"string"==typeof e&&(e=OpenLayers.Format.XML.prototype.read.apply(this,[e])),e&&9==e.nodeType&&(e=e.documentElement);
var t=[];if(this.readNode(e,{features:t},!0),0==t.length){var i=this.getElementsByTagNameNS(e,this.namespaces.gml,"featureMember");
if(i.length){e=0;for(var r=i.length;r>e;++e)this.readNode(i[e],{features:t},!0)}else i=this.getElementsByTagNameNS(e,this.namespaces.gml,"featureMembers"),i.length&&this.readNode(i[0],{features:t},!0)
}return t},readNode:function(e,t,i){return!0===i&&!0===this.autoConfig&&(this.featureType=null,delete this.namespaceAlias[this.featureNS],delete this.namespaces.feature,this.featureNS=null),this.featureNS||e.prefix in this.namespaces||e.parentNode.namespaceURI!=this.namespaces.gml||!this.regExes.featureMember.test(e.parentNode.nodeName)||(this.featureType=e.nodeName.split(":").pop(),this.setNamespace("feature",e.namespaceURI),this.featureNS=e.namespaceURI,this.autoConfig=!0),OpenLayers.Format.XML.prototype.readNode.apply(this,[e,t])
},readers:{gml:{_inherit:function(){},featureMember:function(e,t){this.readChildNodes(e,t)
},featureMembers:function(e,t){this.readChildNodes(e,t)},name:function(e,t){t.name=this.getChildValue(e)
},boundedBy:function(e,t){var i={};this.readChildNodes(e,i),i.components&&0<i.components.length&&(t.bounds=i.components[0])
},Point:function(e,t){var i={points:[]};this.readChildNodes(e,i),t.components||(t.components=[]),t.components.push(i.points[0])
},coordinates:function(e,t){for(var i,r=this.getChildValue(e).replace(this.regExes.trimSpace,""),r=r.replace(this.regExes.trimComma,","),r=r.split(this.regExes.splitSpace),s=r.length,n=Array(s),a=0;s>a;++a)i=r[a].split(","),n[a]=this.xy?new OpenLayers.Geometry.Point(i[0],i[1],i[2]):new OpenLayers.Geometry.Point(i[1],i[0],i[2]);
t.points=n},coord:function(e,t){var i={};this.readChildNodes(e,i),t.points||(t.points=[]),t.points.push(new OpenLayers.Geometry.Point(i.x,i.y,i.z))
},X:function(e,t){t.x=this.getChildValue(e)},Y:function(e,t){t.y=this.getChildValue(e)
},Z:function(e,t){t.z=this.getChildValue(e)},MultiPoint:function(e,t){var i={components:[]};
this.readers.gml._inherit.apply(this,[e,i,t]),this.readChildNodes(e,i),t.components=[new OpenLayers.Geometry.MultiPoint(i.components)]
},pointMember:function(e,t){this.readChildNodes(e,t)},LineString:function(e,t){var i={};
this.readers.gml._inherit.apply(this,[e,i,t]),this.readChildNodes(e,i),t.components||(t.components=[]),t.components.push(new OpenLayers.Geometry.LineString(i.points))
},MultiLineString:function(e,t){var i={components:[]};this.readers.gml._inherit.apply(this,[e,i,t]),this.readChildNodes(e,i),t.components=[new OpenLayers.Geometry.MultiLineString(i.components)]
},lineStringMember:function(e,t){this.readChildNodes(e,t)},Polygon:function(e,t){var i={outer:null,inner:[]};
this.readers.gml._inherit.apply(this,[e,i,t]),this.readChildNodes(e,i),i.inner.unshift(i.outer),t.components||(t.components=[]),t.components.push(new OpenLayers.Geometry.Polygon(i.inner))
},LinearRing:function(e,t){var i={};this.readers.gml._inherit.apply(this,[e,i]),this.readChildNodes(e,i),t.components=[new OpenLayers.Geometry.LinearRing(i.points)]
},MultiPolygon:function(e,t){var i={components:[]};this.readers.gml._inherit.apply(this,[e,i,t]),this.readChildNodes(e,i),t.components=[new OpenLayers.Geometry.MultiPolygon(i.components)]
},polygonMember:function(e,t){this.readChildNodes(e,t)},GeometryCollection:function(e,t){var i={components:[]};
this.readers.gml._inherit.apply(this,[e,i,t]),this.readChildNodes(e,i),t.components=[new OpenLayers.Geometry.Collection(i.components)]
},geometryMember:function(e,t){this.readChildNodes(e,t)}},feature:{"*":function(e,t){var i,r=e.localName||e.nodeName.split(":").pop();
t.features?this.singleFeatureType||-1===OpenLayers.Util.indexOf(this.featureType,r)?r===this.featureType&&(i="_typeName"):i="_typeName":0==e.childNodes.length||1==e.childNodes.length&&3==e.firstChild.nodeType?this.extractAttributes&&(i="_attribute"):i="_geometry",i&&this.readers.feature[i].apply(this,[e,t])
},_typeName:function(e,t){var i={components:[],attributes:{}};this.readChildNodes(e,i),i.name&&(i.attributes.name=i.name);
var r=new OpenLayers.Feature.Vector(i.components[0],i.attributes);this.singleFeatureType||(r.type=e.nodeName.split(":").pop(),r.namespace=e.namespaceURI);
var s=e.getAttribute("fid")||this.getAttributeNS(e,this.namespaces.gml,"id");s&&(r.fid=s),this.internalProjection&&this.externalProjection&&r.geometry&&r.geometry.transform(this.externalProjection,this.internalProjection),i.bounds&&(r.bounds=i.bounds),t.features.push(r)
},_geometry:function(e,t){this.geometryName||(this.geometryName=e.nodeName.split(":").pop()),this.readChildNodes(e,t)
},_attribute:function(e,t){var i=e.localName||e.nodeName.split(":").pop(),r=this.getChildValue(e);
t.attributes[i]=r}},wfs:{FeatureCollection:function(e,t){this.readChildNodes(e,t)
}}},write:function(e){var t;return t=OpenLayers.Util.isArray(e)?"featureMembers":"featureMember",e=this.writeNode("gml:"+t,e),this.setAttributeNS(e,this.namespaces.xsi,"xsi:schemaLocation",this.schemaLocation),OpenLayers.Format.XML.prototype.write.apply(this,[e])
},writers:{gml:{featureMember:function(e){var t=this.createElementNSPlus("gml:featureMember");
return this.writeNode("feature:_typeName",e,t),t},MultiPoint:function(e){var t=this.createElementNSPlus("gml:MultiPoint");
e=e.components||[e];for(var i=0,r=e.length;r>i;++i)this.writeNode("pointMember",e[i],t);
return t},pointMember:function(e){var t=this.createElementNSPlus("gml:pointMember");
return this.writeNode("Point",e,t),t},MultiLineString:function(e){var t=this.createElementNSPlus("gml:MultiLineString");
e=e.components||[e];for(var i=0,r=e.length;r>i;++i)this.writeNode("lineStringMember",e[i],t);
return t},lineStringMember:function(e){var t=this.createElementNSPlus("gml:lineStringMember");
return this.writeNode("LineString",e,t),t},MultiPolygon:function(e){var t=this.createElementNSPlus("gml:MultiPolygon");
e=e.components||[e];for(var i=0,r=e.length;r>i;++i)this.writeNode("polygonMember",e[i],t);
return t},polygonMember:function(e){var t=this.createElementNSPlus("gml:polygonMember");
return this.writeNode("Polygon",e,t),t},GeometryCollection:function(e){for(var t=this.createElementNSPlus("gml:GeometryCollection"),i=0,r=e.components.length;r>i;++i)this.writeNode("geometryMember",e.components[i],t);
return t},geometryMember:function(e){var t=this.createElementNSPlus("gml:geometryMember");
return e=this.writeNode("feature:_geometry",e),t.appendChild(e.firstChild),t}},feature:{_typeName:function(e){var t=this.createElementNSPlus("feature:"+this.featureType,{attributes:{fid:e.fid}});
e.geometry&&this.writeNode("feature:_geometry",e.geometry,t);for(var i in e.attributes){var r=e.attributes[i];
null!=r&&this.writeNode("feature:_attribute",{name:i,value:r},t)}return t},_geometry:function(e){this.externalProjection&&this.internalProjection&&(e=e.clone().transform(this.internalProjection,this.externalProjection));
var t=this.createElementNSPlus("feature:"+this.geometryName);return e=this.writeNode("gml:"+this.geometryTypes[e.CLASS_NAME],e,t),this.srsName&&e.setAttribute("srsName",this.srsName),t
},_attribute:function(e){return this.createElementNSPlus("feature:"+e.name,{value:e.value})
}},wfs:{FeatureCollection:function(e){for(var t=this.createElementNSPlus("wfs:FeatureCollection"),i=0,r=e.length;r>i;++i)this.writeNode("gml:featureMember",e[i],t);
return t}}},setGeometryTypes:function(){this.geometryTypes={"OpenLayers.Geometry.Point":"Point","OpenLayers.Geometry.MultiPoint":"MultiPoint","OpenLayers.Geometry.LineString":"LineString","OpenLayers.Geometry.MultiLineString":"MultiLineString","OpenLayers.Geometry.Polygon":"Polygon","OpenLayers.Geometry.MultiPolygon":"MultiPolygon","OpenLayers.Geometry.Collection":"GeometryCollection"}
},CLASS_NAME:"OpenLayers.Format.GML.Base"}),OpenLayers.Format.GML.v3=OpenLayers.Class(OpenLayers.Format.GML.Base,{schemaLocation:"http://www.opengis.net/gml http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd",curve:!1,multiCurve:!0,surface:!1,multiSurface:!0,initialize:function(e){OpenLayers.Format.GML.Base.prototype.initialize.apply(this,[e])
},readers:{gml:OpenLayers.Util.applyDefaults({_inherit:function(e,t,i){(e=parseInt(e.getAttribute("srsDimension"),10)||i&&i.srsDimension)&&(t.srsDimension=e)
},featureMembers:function(e,t){this.readChildNodes(e,t)},Curve:function(e,t){var i={points:[]};
this.readers.gml._inherit.apply(this,[e,i,t]),this.readChildNodes(e,i),t.components||(t.components=[]),t.components.push(new OpenLayers.Geometry.LineString(i.points))
},segments:function(e,t){this.readChildNodes(e,t)},LineStringSegment:function(e,t){var i={};
this.readChildNodes(e,i),i.points&&Array.prototype.push.apply(t.points,i.points)},pos:function(e,t){var i=this.getChildValue(e).replace(this.regExes.trimSpace,"").split(this.regExes.splitSpace),i=this.xy?new OpenLayers.Geometry.Point(i[0],i[1],i[2]):new OpenLayers.Geometry.Point(i[1],i[0],i[2]);
t.points=[i]},posList:function(e,t){for(var i,r,s,n=this.getChildValue(e).replace(this.regExes.trimSpace,"").split(this.regExes.splitSpace),a=t.srsDimension||parseInt(e.getAttribute("srsDimension")||e.getAttribute("dimension"),10)||2,o=Array(n.length/a),l=0,h=n.length;h>l;l+=a)i=n[l],r=n[l+1],s=2==a?void 0:n[l+2],o[l/a]=this.xy?new OpenLayers.Geometry.Point(i,r,s):new OpenLayers.Geometry.Point(r,i,s);
t.points=o},Surface:function(e,t){this.readChildNodes(e,t)},patches:function(e,t){this.readChildNodes(e,t)
},PolygonPatch:function(e,t){this.readers.gml.Polygon.apply(this,[e,t])},exterior:function(e,t){var i={};
this.readChildNodes(e,i),t.outer=i.components[0]},interior:function(e,t){var i={};
this.readChildNodes(e,i),t.inner.push(i.components[0])},MultiCurve:function(e,t){var i={components:[]};
this.readers.gml._inherit.apply(this,[e,i,t]),this.readChildNodes(e,i),0<i.components.length&&(t.components=[new OpenLayers.Geometry.MultiLineString(i.components)])
},curveMember:function(e,t){this.readChildNodes(e,t)},MultiSurface:function(e,t){var i={components:[]};
this.readers.gml._inherit.apply(this,[e,i,t]),this.readChildNodes(e,i),0<i.components.length&&(t.components=[new OpenLayers.Geometry.MultiPolygon(i.components)])
},surfaceMember:function(e,t){this.readChildNodes(e,t)},surfaceMembers:function(e,t){this.readChildNodes(e,t)
},pointMembers:function(e,t){this.readChildNodes(e,t)},lineStringMembers:function(e,t){this.readChildNodes(e,t)
},polygonMembers:function(e,t){this.readChildNodes(e,t)},geometryMembers:function(e,t){this.readChildNodes(e,t)
},Envelope:function(e,t){var i={points:Array(2)};this.readChildNodes(e,i),t.components||(t.components=[]);
var r=i.points[0],i=i.points[1];t.components.push(new OpenLayers.Bounds(r.x,r.y,i.x,i.y))
},lowerCorner:function(e,t){var i={};this.readers.gml.pos.apply(this,[e,i]),t.points[0]=i.points[0]
},upperCorner:function(e,t){var i={};this.readers.gml.pos.apply(this,[e,i]),t.points[1]=i.points[0]
}},OpenLayers.Format.GML.Base.prototype.readers.gml),feature:OpenLayers.Format.GML.Base.prototype.readers.feature,wfs:OpenLayers.Format.GML.Base.prototype.readers.wfs},write:function(e){var t;
return t=OpenLayers.Util.isArray(e)?"featureMembers":"featureMember",e=this.writeNode("gml:"+t,e),this.setAttributeNS(e,this.namespaces.xsi,"xsi:schemaLocation",this.schemaLocation),OpenLayers.Format.XML.prototype.write.apply(this,[e])
},writers:{gml:OpenLayers.Util.applyDefaults({featureMembers:function(e){for(var t=this.createElementNSPlus("gml:featureMembers"),i=0,r=e.length;r>i;++i)this.writeNode("feature:_typeName",e[i],t);
return t},Point:function(e){var t=this.createElementNSPlus("gml:Point");return this.writeNode("pos",e,t),t
},pos:function(e){return this.createElementNSPlus("gml:pos",{value:this.xy?e.x+" "+e.y:e.y+" "+e.x})
},LineString:function(e){var t=this.createElementNSPlus("gml:LineString");return this.writeNode("posList",e.components,t),t
},Curve:function(e){var t=this.createElementNSPlus("gml:Curve");return this.writeNode("segments",e,t),t
},segments:function(e){var t=this.createElementNSPlus("gml:segments");return this.writeNode("LineStringSegment",e,t),t
},LineStringSegment:function(e){var t=this.createElementNSPlus("gml:LineStringSegment");
return this.writeNode("posList",e.components,t),t},posList:function(e){for(var t,i=e.length,r=Array(i),s=0;i>s;++s)t=e[s],r[s]=this.xy?t.x+" "+t.y:t.y+" "+t.x;
return this.createElementNSPlus("gml:posList",{value:r.join(" ")})},Surface:function(e){var t=this.createElementNSPlus("gml:Surface");
return this.writeNode("patches",e,t),t},patches:function(e){var t=this.createElementNSPlus("gml:patches");
return this.writeNode("PolygonPatch",e,t),t},PolygonPatch:function(e){var t=this.createElementNSPlus("gml:PolygonPatch",{attributes:{interpolation:"planar"}});
this.writeNode("exterior",e.components[0],t);for(var i=1,r=e.components.length;r>i;++i)this.writeNode("interior",e.components[i],t);
return t},Polygon:function(e){var t=this.createElementNSPlus("gml:Polygon");this.writeNode("exterior",e.components[0],t);
for(var i=1,r=e.components.length;r>i;++i)this.writeNode("interior",e.components[i],t);
return t},exterior:function(e){var t=this.createElementNSPlus("gml:exterior");return this.writeNode("LinearRing",e,t),t
},interior:function(e){var t=this.createElementNSPlus("gml:interior");return this.writeNode("LinearRing",e,t),t
},LinearRing:function(e){var t=this.createElementNSPlus("gml:LinearRing");return this.writeNode("posList",e.components,t),t
},MultiCurve:function(e){var t=this.createElementNSPlus("gml:MultiCurve");e=e.components||[e];
for(var i=0,r=e.length;r>i;++i)this.writeNode("curveMember",e[i],t);return t},curveMember:function(e){var t=this.createElementNSPlus("gml:curveMember");
return this.curve?this.writeNode("Curve",e,t):this.writeNode("LineString",e,t),t},MultiSurface:function(e){var t=this.createElementNSPlus("gml:MultiSurface");
e=e.components||[e];for(var i=0,r=e.length;r>i;++i)this.writeNode("surfaceMember",e[i],t);
return t},surfaceMember:function(e){var t=this.createElementNSPlus("gml:surfaceMember");
return this.surface?this.writeNode("Surface",e,t):this.writeNode("Polygon",e,t),t
},Envelope:function(e){var t=this.createElementNSPlus("gml:Envelope");return this.writeNode("lowerCorner",e,t),this.writeNode("upperCorner",e,t),this.srsName&&t.setAttribute("srsName",this.srsName),t
},lowerCorner:function(e){return this.createElementNSPlus("gml:lowerCorner",{value:this.xy?e.left+" "+e.bottom:e.bottom+" "+e.left})
},upperCorner:function(e){return this.createElementNSPlus("gml:upperCorner",{value:this.xy?e.right+" "+e.top:e.top+" "+e.right})
}},OpenLayers.Format.GML.Base.prototype.writers.gml),feature:OpenLayers.Format.GML.Base.prototype.writers.feature,wfs:OpenLayers.Format.GML.Base.prototype.writers.wfs},setGeometryTypes:function(){this.geometryTypes={"OpenLayers.Geometry.Point":"Point","OpenLayers.Geometry.MultiPoint":"MultiPoint","OpenLayers.Geometry.LineString":!0===this.curve?"Curve":"LineString","OpenLayers.Geometry.MultiLineString":!1===this.multiCurve?"MultiLineString":"MultiCurve","OpenLayers.Geometry.Polygon":!0===this.surface?"Surface":"Polygon","OpenLayers.Geometry.MultiPolygon":!1===this.multiSurface?"MultiPolygon":"MultiSurface","OpenLayers.Geometry.Collection":"GeometryCollection"}
},CLASS_NAME:"OpenLayers.Format.GML.v3"}),OpenLayers.Format.Filter.v1_1_0=OpenLayers.Class(OpenLayers.Format.GML.v3,OpenLayers.Format.Filter.v1,{VERSION:"1.1.0",schemaLocation:"http://www.opengis.net/ogc/filter/1.1.0/filter.xsd",initialize:function(e){OpenLayers.Format.GML.v3.prototype.initialize.apply(this,[e])
},readers:{ogc:OpenLayers.Util.applyDefaults({PropertyIsEqualTo:function(e,t){var i=e.getAttribute("matchCase"),i=new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.EQUAL_TO,matchCase:!("false"===i||"0"===i)});
this.readChildNodes(e,i),t.filters.push(i)},PropertyIsNotEqualTo:function(e,t){var i=e.getAttribute("matchCase"),i=new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.NOT_EQUAL_TO,matchCase:!("false"===i||"0"===i)});
this.readChildNodes(e,i),t.filters.push(i)},PropertyIsLike:function(e,t){var i=new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.LIKE});
this.readChildNodes(e,i);var r=e.getAttribute("wildCard"),s=e.getAttribute("singleChar"),n=e.getAttribute("escapeChar");
i.value2regex(r,s,n),t.filters.push(i)}},OpenLayers.Format.Filter.v1.prototype.readers.ogc),gml:OpenLayers.Format.GML.v3.prototype.readers.gml,feature:OpenLayers.Format.GML.v3.prototype.readers.feature},writers:{ogc:OpenLayers.Util.applyDefaults({PropertyIsEqualTo:function(e){var t=this.createElementNSPlus("ogc:PropertyIsEqualTo",{attributes:{matchCase:e.matchCase}});
return this.writeNode("PropertyName",e,t),this.writeOgcExpression(e.value,t),t},PropertyIsNotEqualTo:function(e){var t=this.createElementNSPlus("ogc:PropertyIsNotEqualTo",{attributes:{matchCase:e.matchCase}});
return this.writeNode("PropertyName",e,t),this.writeOgcExpression(e.value,t),t},PropertyIsLike:function(e){var t=this.createElementNSPlus("ogc:PropertyIsLike",{attributes:{matchCase:e.matchCase,wildCard:"*",singleChar:".",escapeChar:"!"}});
return this.writeNode("PropertyName",e,t),this.writeNode("Literal",e.regex2value(),t),t
},BBOX:function(e){var t=this.createElementNSPlus("ogc:BBOX");e.property&&this.writeNode("PropertyName",e,t);
var i=this.writeNode("gml:Envelope",e.value);return e.projection&&i.setAttribute("srsName",e.projection),t.appendChild(i),t
},SortBy:function(e){for(var t=this.createElementNSPlus("ogc:SortBy"),i=0,r=e.length;r>i;i++)this.writeNode("ogc:SortProperty",e[i],t);
return t},SortProperty:function(e){var t=this.createElementNSPlus("ogc:SortProperty");
return this.writeNode("ogc:PropertyName",e,t),this.writeNode("ogc:SortOrder","DESC"==e.order?"DESC":"ASC",t),t
},SortOrder:function(e){return this.createElementNSPlus("ogc:SortOrder",{value:e})
}},OpenLayers.Format.Filter.v1.prototype.writers.ogc),gml:OpenLayers.Format.GML.v3.prototype.writers.gml,feature:OpenLayers.Format.GML.v3.prototype.writers.feature},writeSpatial:function(e,t){var i=this.createElementNSPlus("ogc:"+t);
if(this.writeNode("PropertyName",e,i),e.value instanceof OpenLayers.Filter.Function)this.writeNode("Function",e.value,i);
else{var r;r=e.value instanceof OpenLayers.Geometry?this.writeNode("feature:_geometry",e.value).firstChild:this.writeNode("gml:Envelope",e.value),e.projection&&r.setAttribute("srsName",e.projection),i.appendChild(r)
}return i},CLASS_NAME:"OpenLayers.Format.Filter.v1_1_0"}),OpenLayers.Format.OWSCommon=OpenLayers.Class(OpenLayers.Format.XML.VersionedOGC,{defaultVersion:"1.0.0",getVersion:function(e){var t=this.version;
if(!t){var i=e.getAttribute("xmlns:ows");i&&"1.1"===i.substring(i.lastIndexOf("/")+1)&&(t="1.1.0"),t||(t=this.defaultVersion)
}return t},CLASS_NAME:"OpenLayers.Format.OWSCommon"}),OpenLayers.Format.OWSCommon.v1=OpenLayers.Class(OpenLayers.Format.XML,{regExes:{trimSpace:/^\s*|\s*$/g,removeSpace:/\s*/g,splitSpace:/\s+/,trimComma:/\s*,\s*/g},read:function(e,t){OpenLayers.Util.applyDefaults(t,this.options);
var i={};return this.readChildNodes(e,i),i},readers:{ows:{Exception:function(e,t){var i={code:e.getAttribute("exceptionCode"),locator:e.getAttribute("locator"),texts:[]};
t.exceptions.push(i),this.readChildNodes(e,i)},ExceptionText:function(e,t){var i=this.getChildValue(e);
t.texts.push(i)},ServiceIdentification:function(e,t){t.serviceIdentification={},this.readChildNodes(e,t.serviceIdentification)
},Title:function(e,t){t.title=this.getChildValue(e)},Abstract:function(e,t){t["abstract"]=this.getChildValue(e)
},Keywords:function(e,t){t.keywords={},this.readChildNodes(e,t.keywords)},Keyword:function(e,t){t[this.getChildValue(e)]=!0
},ServiceType:function(e,t){t.serviceType={codeSpace:e.getAttribute("codeSpace"),value:this.getChildValue(e)}
},ServiceTypeVersion:function(e,t){t.serviceTypeVersion=this.getChildValue(e)},Fees:function(e,t){t.fees=this.getChildValue(e)
},AccessConstraints:function(e,t){t.accessConstraints=this.getChildValue(e)},ServiceProvider:function(e,t){t.serviceProvider={},this.readChildNodes(e,t.serviceProvider)
},ProviderName:function(e,t){t.providerName=this.getChildValue(e)},ProviderSite:function(e,t){t.providerSite=this.getAttributeNS(e,this.namespaces.xlink,"href")
},ServiceContact:function(e,t){t.serviceContact={},this.readChildNodes(e,t.serviceContact)
},IndividualName:function(e,t){t.individualName=this.getChildValue(e)},PositionName:function(e,t){t.positionName=this.getChildValue(e)
},ContactInfo:function(e,t){t.contactInfo={},this.readChildNodes(e,t.contactInfo)
},Phone:function(e,t){t.phone={},this.readChildNodes(e,t.phone)},Voice:function(e,t){t.voice=this.getChildValue(e)
},Address:function(e,t){t.address={},this.readChildNodes(e,t.address)},DeliveryPoint:function(e,t){t.deliveryPoint=this.getChildValue(e)
},City:function(e,t){t.city=this.getChildValue(e)},AdministrativeArea:function(e,t){t.administrativeArea=this.getChildValue(e)
},PostalCode:function(e,t){t.postalCode=this.getChildValue(e)},Country:function(e,t){t.country=this.getChildValue(e)
},ElectronicMailAddress:function(e,t){t.electronicMailAddress=this.getChildValue(e)
},Role:function(e,t){t.role=this.getChildValue(e)},OperationsMetadata:function(e,t){t.operationsMetadata={},this.readChildNodes(e,t.operationsMetadata)
},Operation:function(e,t){var i=e.getAttribute("name");t[i]={},this.readChildNodes(e,t[i])
},DCP:function(e,t){t.dcp={},this.readChildNodes(e,t.dcp)},HTTP:function(e,t){t.http={},this.readChildNodes(e,t.http)
},Get:function(e,t){t.get||(t.get=[]);var i={url:this.getAttributeNS(e,this.namespaces.xlink,"href")};
this.readChildNodes(e,i),t.get.push(i)},Post:function(e,t){t.post||(t.post=[]);var i={url:this.getAttributeNS(e,this.namespaces.xlink,"href")};
this.readChildNodes(e,i),t.post.push(i)},Parameter:function(e,t){t.parameters||(t.parameters={});
var i=e.getAttribute("name");t.parameters[i]={},this.readChildNodes(e,t.parameters[i])
},Constraint:function(e,t){t.constraints||(t.constraints={});var i=e.getAttribute("name");
t.constraints[i]={},this.readChildNodes(e,t.constraints[i])},Value:function(e,t){t[this.getChildValue(e)]=!0
},OutputFormat:function(e,t){t.formats.push({value:this.getChildValue(e)}),this.readChildNodes(e,t)
},WGS84BoundingBox:function(e,t){var i={};i.crs=e.getAttribute("crs"),t.BoundingBox?t.BoundingBox.push(i):(t.projection=i.crs,i=t),this.readChildNodes(e,i)
},BoundingBox:function(e,t){this.readers.ows.WGS84BoundingBox.apply(this,[e,t])},LowerCorner:function(e,t){var i=this.getChildValue(e).replace(this.regExes.trimSpace,""),i=i.replace(this.regExes.trimComma,","),i=i.split(this.regExes.splitSpace);
t.left=i[0],t.bottom=i[1]},UpperCorner:function(e,t){var i=this.getChildValue(e).replace(this.regExes.trimSpace,""),i=i.replace(this.regExes.trimComma,","),i=i.split(this.regExes.splitSpace);
t.right=i[0],t.top=i[1],t.bounds=new OpenLayers.Bounds(t.left,t.bottom,t.right,t.top),delete t.left,delete t.bottom,delete t.right,delete t.top
},Language:function(e,t){t.language=this.getChildValue(e)}}},writers:{ows:{BoundingBox:function(e,t){var i=this.createElementNSPlus(t||"ows:BoundingBox",{attributes:{crs:e.projection}});
return this.writeNode("ows:LowerCorner",e,i),this.writeNode("ows:UpperCorner",e,i),i
},LowerCorner:function(e){return this.createElementNSPlus("ows:LowerCorner",{value:e.bounds.left+" "+e.bounds.bottom})
},UpperCorner:function(e){return this.createElementNSPlus("ows:UpperCorner",{value:e.bounds.right+" "+e.bounds.top})
},Identifier:function(e){return this.createElementNSPlus("ows:Identifier",{value:e})
},Title:function(e){return this.createElementNSPlus("ows:Title",{value:e})},Abstract:function(e){return this.createElementNSPlus("ows:Abstract",{value:e})
},OutputFormat:function(e){return this.createElementNSPlus("ows:OutputFormat",{value:e})
}}},CLASS_NAME:"OpenLayers.Format.OWSCommon.v1"}),OpenLayers.Format.OWSCommon.v1_0_0=OpenLayers.Class(OpenLayers.Format.OWSCommon.v1,{namespaces:{ows:"http://www.opengis.net/ows",xlink:"http://www.w3.org/1999/xlink"},readers:{ows:OpenLayers.Util.applyDefaults({ExceptionReport:function(e,t){t.success=!1,t.exceptionReport={version:e.getAttribute("version"),language:e.getAttribute("language"),exceptions:[]},this.readChildNodes(e,t.exceptionReport)
}},OpenLayers.Format.OWSCommon.v1.prototype.readers.ows)},writers:{ows:OpenLayers.Format.OWSCommon.v1.prototype.writers.ows},CLASS_NAME:"OpenLayers.Format.OWSCommon.v1_0_0"}),OpenLayers.Format.WFST.v1_1_0=OpenLayers.Class(OpenLayers.Format.Filter.v1_1_0,OpenLayers.Format.WFST.v1,{version:"1.1.0",schemaLocations:{wfs:"http://schemas.opengis.net/wfs/1.1.0/wfs.xsd"},initialize:function(e){OpenLayers.Format.Filter.v1_1_0.prototype.initialize.apply(this,[e]),OpenLayers.Format.WFST.v1.prototype.initialize.apply(this,[e])
},readNode:function(){return OpenLayers.Format.GML.v3.prototype.readNode.apply(this,arguments)
},readers:{wfs:OpenLayers.Util.applyDefaults({FeatureCollection:function(e,t){t.numberOfFeatures=parseInt(e.getAttribute("numberOfFeatures")),OpenLayers.Format.WFST.v1.prototype.readers.wfs.FeatureCollection.apply(this,arguments)
},TransactionResponse:function(e,t){t.insertIds=[],t.success=!1,this.readChildNodes(e,t)
},TransactionSummary:function(e,t){t.success=!0},InsertResults:function(e,t){this.readChildNodes(e,t)
},Feature:function(e,t){var i={fids:[]};this.readChildNodes(e,i),t.insertIds.push(i.fids[0])
}},OpenLayers.Format.WFST.v1.prototype.readers.wfs),gml:OpenLayers.Format.GML.v3.prototype.readers.gml,feature:OpenLayers.Format.GML.v3.prototype.readers.feature,ogc:OpenLayers.Format.Filter.v1_1_0.prototype.readers.ogc,ows:OpenLayers.Format.OWSCommon.v1_0_0.prototype.readers.ows},writers:{wfs:OpenLayers.Util.applyDefaults({GetFeature:function(e){var t=OpenLayers.Format.WFST.v1.prototype.writers.wfs.GetFeature.apply(this,arguments);
return e&&this.setAttributes(t,{resultType:e.resultType,startIndex:e.startIndex,count:e.count}),t
},Query:function(e){e=OpenLayers.Util.extend({featureNS:this.featureNS,featurePrefix:this.featurePrefix,featureType:this.featureType,srsName:this.srsName},e);
var t=e.featurePrefix,i=this.createElementNSPlus("wfs:Query",{attributes:{typeName:(t?t+":":"")+e.featureType,srsName:e.srsName}});
if(e.featureNS&&i.setAttribute("xmlns:"+t,e.featureNS),e.propertyNames)for(var t=0,r=e.propertyNames.length;r>t;t++)this.writeNode("wfs:PropertyName",{property:e.propertyNames[t]},i);
return e.filter&&(OpenLayers.Format.WFST.v1_1_0.prototype.setFilterProperty.call(this,e.filter),this.writeNode("ogc:Filter",e.filter,i)),i
},PropertyName:function(e){return this.createElementNSPlus("wfs:PropertyName",{value:e.property})
}},OpenLayers.Format.WFST.v1.prototype.writers.wfs),gml:OpenLayers.Format.GML.v3.prototype.writers.gml,feature:OpenLayers.Format.GML.v3.prototype.writers.feature,ogc:OpenLayers.Format.Filter.v1_1_0.prototype.writers.ogc},CLASS_NAME:"OpenLayers.Format.WFST.v1_1_0"}),OpenLayers.Protocol=OpenLayers.Class({format:null,options:null,autoDestroy:!0,defaultFilter:null,initialize:function(e){e=e||{},OpenLayers.Util.extend(this,e),this.options=e
},mergeWithDefaultFilter:function(e){return e&&this.defaultFilter?new OpenLayers.Filter.Logical({type:OpenLayers.Filter.Logical.AND,filters:[this.defaultFilter,e]}):e||this.defaultFilter||void 0
},destroy:function(){this.format=this.options=null},read:function(e){e=e||{},e.filter=this.mergeWithDefaultFilter(e.filter)
},create:function(){},update:function(){},"delete":function(){},commit:function(){},abort:function(){},createCallback:function(e,t,i){return OpenLayers.Function.bind(function(){e.apply(this,[t,i])
},this)},CLASS_NAME:"OpenLayers.Protocol"}),OpenLayers.Protocol.Response=OpenLayers.Class({code:null,requestType:null,last:!0,features:null,data:null,reqFeatures:null,priv:null,error:null,initialize:function(e){OpenLayers.Util.extend(this,e)
},success:function(){return 0<this.code},CLASS_NAME:"OpenLayers.Protocol.Response"}),OpenLayers.Protocol.Response.SUCCESS=1,OpenLayers.Protocol.Response.FAILURE=0,OpenLayers.Format.JSON=OpenLayers.Class(OpenLayers.Format,{indent:"    ",space:" ",newline:"\n",level:0,pretty:!1,nativeJSON:function(){return!(!window.JSON||"function"!=typeof JSON.parse||"function"!=typeof JSON.stringify)
}(),read:function(a,b){var c;if(this.nativeJSON)c=JSON.parse(a,b);else try{if(/^[\],:{}\s]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))&&(c=eval("("+a+")"),"function"==typeof b)){var d=function(e,t){if(t&&"object"==typeof t)for(var i in t)t.hasOwnProperty(i)&&(t[i]=d(i,t[i]));
return b(e,t)};c=d("",c)}}catch(e){}return this.keepData&&(this.data=c),c},write:function(e,t){this.pretty=!!t;
var i=null,r=typeof e;if(this.serialize[r])try{i=!this.pretty&&this.nativeJSON?JSON.stringify(e):this.serialize[r].apply(this,[e])
}catch(s){OpenLayers.Console.error("Trouble serializing: "+s)}return i},writeIndent:function(){var e=[];
if(this.pretty)for(var t=0;t<this.level;++t)e.push(this.indent);return e.join("")
},writeNewline:function(){return this.pretty?this.newline:""},writeSpace:function(){return this.pretty?this.space:""
},serialize:{object:function(e){if(null==e)return"null";if(e.constructor==Date)return this.serialize.date.apply(this,[e]);
if(e.constructor==Array)return this.serialize.array.apply(this,[e]);var t=["{"];this.level+=1;
var i,r,s,n=!1;for(i in e)e.hasOwnProperty(i)&&(r=OpenLayers.Format.JSON.prototype.write.apply(this,[i,this.pretty]),s=OpenLayers.Format.JSON.prototype.write.apply(this,[e[i],this.pretty]),null!=r&&null!=s&&(n&&t.push(","),t.push(this.writeNewline(),this.writeIndent(),r,":",this.writeSpace(),s),n=!0));
return this.level-=1,t.push(this.writeNewline(),this.writeIndent(),"}"),t.join("")
},array:function(e){var t,i=["["];this.level+=1;for(var r=0,s=e.length;s>r;++r)t=OpenLayers.Format.JSON.prototype.write.apply(this,[e[r],this.pretty]),null!=t&&(r>0&&i.push(","),i.push(this.writeNewline(),this.writeIndent(),t));
return this.level-=1,i.push(this.writeNewline(),this.writeIndent(),"]"),i.join("")
},string:function(e){var t={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};
return/["\\\x00-\x1f]/.test(e)?'"'+e.replace(/([\x00-\x1f\\"])/g,function(e,i){var r=t[i];
return r?r:(r=i.charCodeAt(),"\\u00"+Math.floor(r/16).toString(16)+(r%16).toString(16))
})+'"':'"'+e+'"'},number:function(e){return isFinite(e)?String(e):"null"},"boolean":function(e){return String(e)
},date:function(e){function t(e){return 10>e?"0"+e:e}return'"'+e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())+"T"+t(e.getHours())+":"+t(e.getMinutes())+":"+t(e.getSeconds())+'"'
}},CLASS_NAME:"OpenLayers.Format.JSON"}),OpenLayers.Format.GeoJSON=OpenLayers.Class(OpenLayers.Format.JSON,{ignoreExtraDims:!1,read:function(e,t,i){t=t?t:"FeatureCollection";
var r=null,s=null,s="string"==typeof e?OpenLayers.Format.JSON.prototype.read.apply(this,[e,i]):e;
if(s){if("string"!=typeof s.type)OpenLayers.Console.error("Bad GeoJSON - no type: "+e);
else if(this.isValidType(s,t))switch(t){case"Geometry":try{r=this.parseGeometry(s)
}catch(n){OpenLayers.Console.error(n)}break;case"Feature":try{r=this.parseFeature(s),r.type="Feature"
}catch(a){OpenLayers.Console.error(a)}break;case"FeatureCollection":switch(r=[],s.type){case"Feature":try{r.push(this.parseFeature(s))
}catch(o){r=null,OpenLayers.Console.error(o)}break;case"FeatureCollection":for(e=0,t=s.features.length;t>e;++e)try{r.push(this.parseFeature(s.features[e]))
}catch(l){r=null,OpenLayers.Console.error(l)}break;default:try{var h=this.parseGeometry(s);
r.push(new OpenLayers.Feature.Vector(h))}catch(p){r=null,OpenLayers.Console.error(p)
}}}}else OpenLayers.Console.error("Bad JSON: "+e);return r},isValidType:function(e,t){var i=!1;
switch(t){case"Geometry":-1==OpenLayers.Util.indexOf("Point MultiPoint LineString MultiLineString Polygon MultiPolygon Box GeometryCollection".split(" "),e.type)?OpenLayers.Console.error("Unsupported geometry type: "+e.type):i=!0;
break;case"FeatureCollection":i=!0;break;default:e.type==t?i=!0:OpenLayers.Console.error("Cannot convert types from "+e.type+" to "+t)
}return i},parseFeature:function(e){var t,i,r;i=e.properties?e.properties:{},r=e.geometry&&e.geometry.bbox||e.bbox;
try{t=this.parseGeometry(e.geometry)}catch(s){throw s}return t=new OpenLayers.Feature.Vector(t,i),r&&(t.bounds=OpenLayers.Bounds.fromArray(r)),e.id&&(t.fid=e.id),t
},parseGeometry:function(e){if(null==e)return null;var t,i=!1;if("GeometryCollection"==e.type){if(!OpenLayers.Util.isArray(e.geometries))throw"GeometryCollection must have geometries array: "+e;
t=e.geometries.length;for(var i=Array(t),r=0;t>r;++r)i[r]=this.parseGeometry.apply(this,[e.geometries[r]]);
t=new OpenLayers.Geometry.Collection(i),i=!0}else{if(!OpenLayers.Util.isArray(e.coordinates))throw"Geometry must have coordinates array: "+e;
if(!this.parseCoords[e.type.toLowerCase()])throw"Unsupported geometry type: "+e.type;
try{t=this.parseCoords[e.type.toLowerCase()].apply(this,[e.coordinates])}catch(s){throw s
}}return this.internalProjection&&this.externalProjection&&!i&&t.transform(this.externalProjection,this.internalProjection),t
},parseCoords:{point:function(e){if(0==this.ignoreExtraDims&&2!=e.length)throw"Only 2D points are supported: "+e;
return new OpenLayers.Geometry.Point(e[0],e[1])},multipoint:function(e){for(var t=[],i=null,r=0,s=e.length;s>r;++r){try{i=this.parseCoords.point.apply(this,[e[r]])
}catch(n){throw n}t.push(i)}return new OpenLayers.Geometry.MultiPoint(t)},linestring:function(e){for(var t=[],i=null,r=0,s=e.length;s>r;++r){try{i=this.parseCoords.point.apply(this,[e[r]])
}catch(n){throw n}t.push(i)}return new OpenLayers.Geometry.LineString(t)},multilinestring:function(e){for(var t=[],i=null,r=0,s=e.length;s>r;++r){try{i=this.parseCoords.linestring.apply(this,[e[r]])
}catch(n){throw n}t.push(i)}return new OpenLayers.Geometry.MultiLineString(t)},polygon:function(e){for(var t,i,r=[],s=0,n=e.length;n>s;++s){try{i=this.parseCoords.linestring.apply(this,[e[s]])
}catch(a){throw a}t=new OpenLayers.Geometry.LinearRing(i.components),r.push(t)}return new OpenLayers.Geometry.Polygon(r)
},multipolygon:function(e){for(var t=[],i=null,r=0,s=e.length;s>r;++r){try{i=this.parseCoords.polygon.apply(this,[e[r]])
}catch(n){throw n}t.push(i)}return new OpenLayers.Geometry.MultiPolygon(t)},box:function(e){if(2!=e.length)throw"GeoJSON box coordinates must have 2 elements";
return new OpenLayers.Geometry.Polygon([new OpenLayers.Geometry.LinearRing([new OpenLayers.Geometry.Point(e[0][0],e[0][1]),new OpenLayers.Geometry.Point(e[1][0],e[0][1]),new OpenLayers.Geometry.Point(e[1][0],e[1][1]),new OpenLayers.Geometry.Point(e[0][0],e[1][1]),new OpenLayers.Geometry.Point(e[0][0],e[0][1])])])
}},write:function(e,t){var i={type:null};if(OpenLayers.Util.isArray(e)){i.type="FeatureCollection";
var r=e.length;i.features=Array(r);for(var s=0;r>s;++s){var n=e[s];if(!n instanceof OpenLayers.Feature.Vector)throw"FeatureCollection only supports collections of features: "+n;
i.features[s]=this.extract.feature.apply(this,[n])}}else 0==e.CLASS_NAME.indexOf("OpenLayers.Geometry")?i=this.extract.geometry.apply(this,[e]):e instanceof OpenLayers.Feature.Vector&&(i=this.extract.feature.apply(this,[e]),e.layer&&e.layer.projection&&(i.crs=this.createCRSObject(e)));
return OpenLayers.Format.JSON.prototype.write.apply(this,[i,t])},createCRSObject:function(e){e=e.layer.projection.toString();
var t={};return e.match(/epsg:/i)&&(e=parseInt(e.substring(e.indexOf(":")+1)),t=4326==e?{type:"name",properties:{name:"urn:ogc:def:crs:OGC:1.3:CRS84"}}:{type:"name",properties:{name:"EPSG:"+e}}),t
},extract:{feature:function(e){var t=this.extract.geometry.apply(this,[e.geometry]),t={type:"Feature",properties:e.attributes,geometry:t};
return null!=e.fid&&(t.id=e.fid),t},geometry:function(e){if(null==e)return null;this.internalProjection&&this.externalProjection&&(e=e.clone(),e.transform(this.internalProjection,this.externalProjection));
var t=e.CLASS_NAME.split(".")[2];return e=this.extract[t.toLowerCase()].apply(this,[e]),"Collection"==t?{type:"GeometryCollection",geometries:e}:{type:t,coordinates:e}
},point:function(e){return[e.x,e.y]},multipoint:function(e){for(var t=[],i=0,r=e.components.length;r>i;++i)t.push(this.extract.point.apply(this,[e.components[i]]));
return t},linestring:function(e){for(var t=[],i=0,r=e.components.length;r>i;++i)t.push(this.extract.point.apply(this,[e.components[i]]));
return t},multilinestring:function(e){for(var t=[],i=0,r=e.components.length;r>i;++i)t.push(this.extract.linestring.apply(this,[e.components[i]]));
return t},polygon:function(e){for(var t=[],i=0,r=e.components.length;r>i;++i)t.push(this.extract.linestring.apply(this,[e.components[i]]));
return t},multipolygon:function(e){for(var t=[],i=0,r=e.components.length;r>i;++i)t.push(this.extract.polygon.apply(this,[e.components[i]]));
return t},collection:function(e){for(var t=e.components.length,i=Array(t),r=0;t>r;++r)i[r]=this.extract.geometry.apply(this,[e.components[r]]);
return i}},CLASS_NAME:"OpenLayers.Format.GeoJSON"}),OpenLayers.Protocol.Script=OpenLayers.Class(OpenLayers.Protocol,{url:null,params:null,callback:null,callbackTemplate:"OpenLayers.Protocol.Script.registry.${id}",callbackKey:"callback",callbackPrefix:"",scope:null,format:null,pendingRequests:null,srsInBBOX:!1,initialize:function(e){if(e=e||{},this.params={},this.pendingRequests={},OpenLayers.Protocol.prototype.initialize.apply(this,arguments),this.format||(this.format=new OpenLayers.Format.GeoJSON),!this.filterToParams&&OpenLayers.Format.QueryStringFilter){var t=new OpenLayers.Format.QueryStringFilter({srsInBBOX:this.srsInBBOX});
this.filterToParams=function(e,i){return t.write(e,i)}}},read:function(e){OpenLayers.Protocol.prototype.read.apply(this,arguments),e=OpenLayers.Util.applyDefaults(e,this.options),e.params=OpenLayers.Util.applyDefaults(e.params,this.options.params),e.filter&&this.filterToParams&&(e.params=this.filterToParams(e.filter,e.params));
var t=new OpenLayers.Protocol.Response({requestType:"read"}),i=this.createRequest(e.url,e.params,OpenLayers.Function.bind(function(i){t.data=i,this.handleRead(t,e)
},this));return t.priv=i,t},createRequest:function(e,t,i){i=OpenLayers.Protocol.Script.register(i);
var r=OpenLayers.String.format(this.callbackTemplate,{id:i});return t=OpenLayers.Util.extend({},t),t[this.callbackKey]=this.callbackPrefix+r,e=OpenLayers.Util.urlAppend(e,OpenLayers.Util.getParameterString(t)),t=document.createElement("script"),t.type="text/javascript",t.src=e,t.id="OpenLayers_Protocol_Script_"+i,this.pendingRequests[t.id]=t,document.getElementsByTagName("head")[0].appendChild(t),t
},destroyRequest:function(e){OpenLayers.Protocol.Script.unregister(e.id.split("_").pop()),delete this.pendingRequests[e.id],e.parentNode&&e.parentNode.removeChild(e)
},handleRead:function(e,t){this.handleResponse(e,t)},handleResponse:function(e,t){t.callback&&(e.data?(e.features=this.parseFeatures(e.data),e.code=OpenLayers.Protocol.Response.SUCCESS):e.code=OpenLayers.Protocol.Response.FAILURE,this.destroyRequest(e.priv),t.callback.call(t.scope,e))
},parseFeatures:function(e){return this.format.read(e)},abort:function(e){if(e)this.destroyRequest(e.priv);
else for(var t in this.pendingRequests)this.destroyRequest(this.pendingRequests[t])
},destroy:function(){this.abort(),delete this.params,delete this.format,OpenLayers.Protocol.prototype.destroy.apply(this)
},CLASS_NAME:"OpenLayers.Protocol.Script"}),function(){var e=OpenLayers.Protocol.Script,t=0;
e.registry={},e.register=function(i){var r="c"+ ++t;return e.registry[r]=function(){i.apply(this,arguments)
},r},e.unregister=function(t){delete e.registry[t]}}(),OpenLayers.Format.EncodedPolyline=OpenLayers.Class(OpenLayers.Format,{geometryType:"linestring",initialize:function(e){OpenLayers.Format.prototype.initialize.apply(this,[e])
},read:function(e){var t;if("linestring"==this.geometryType)t=OpenLayers.Geometry.LineString;
else if("linearring"==this.geometryType)t=OpenLayers.Geometry.LinearRing;else if("multipoint"==this.geometryType)t=OpenLayers.Geometry.MultiPoint;
else if("point"!=this.geometryType&&"polygon"!=this.geometryType)return null;e=this.decodeDeltas(e,2);
for(var i=e.length,r=[],s=0;i>s+1;){var n=e[s++],a=e[s++];r.push(new OpenLayers.Geometry.Point(a,n))
}return"point"==this.geometryType?new OpenLayers.Feature.Vector(r[0]):"polygon"==this.geometryType?new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Polygon([new OpenLayers.Geometry.LinearRing(r)])):new OpenLayers.Feature.Vector(new t(r))
},decode:function(e,t,i){e=this.decodeDeltas(e,t,i||1e5),i=e.length;for(var r=[],s=0;i>s+(t-1);){for(var n=[],a=0;t>a;++a)n.push(e[s++]);
r.push(n)}return r},write:function(e){e=(e.constructor==Array?e[0]:e).geometry;var t=e.CLASS_NAME.split(".")[2].toLowerCase();
if("point"==t)e=Array(e);else if("linestring"==t||"linearring"==t||"multipoint"==t)e=e.components;
else{if("polygon"!=t)return null;e=e.components[0].components}for(var t=[],i=e.length,r=0;i>r;++r){var s=e[r];
t.push(s.y),t.push(s.x)}return this.encodeDeltas(t,2)},encode:function(e,t,i){i=i||1e5;
for(var r=[],s=e.length,n=0;s>n;++n)for(var a=e[n],o=0;t>o;++o)r.push(a[o]);return this.encodeDeltas(r,t,i)
},encodeDeltas:function(e,t,i){var r,s=Array(t);for(r=0;t>r;++r)s[r]=0;for(var n=e.length,a=0;n>a;)for(r=0;t>r;++r,++a){var o=e[a],l=o-s[r];
s[r]=o,e[a]=l}return this.encodeFloats(e,i||1e5)},decodeDeltas:function(e,t,i){var r,s=Array(t);
for(r=0;t>r;++r)s[r]=0;e=this.decodeFloats(e,i||1e5),i=e.length;for(var n=0;i>n;)for(r=0;t>r;++r,++n)s[r]+=e[n],e[n]=s[r];
return e},encodeFloats:function(e,t){for(var i=t||1e5,r=e.length,s=0;r>s;++s)e[s]=Math.round(e[s]*i);
return this.encodeSignedIntegers(e)},decodeFloats:function(e,t){for(var i=t||1e5,r=this.decodeSignedIntegers(e),s=r.length,n=0;s>n;++n)r[n]/=i;
return r},encodeSignedIntegers:function(e){for(var t=e.length,i=0;t>i;++i){var r=e[i],s=r<<1;
0>r&&(s=~s),e[i]=s}return this.encodeUnsignedIntegers(e)},decodeSignedIntegers:function(e){e=this.decodeUnsignedIntegers(e);
for(var t=e.length,i=0;t>i;++i){var r=e[i];e[i]=1&r?~(r>>1):r>>1}return e},encodeUnsignedIntegers:function(e){for(var t="",i=e.length,r=0;i>r;++r)t+=this.encodeUnsignedInteger(e[r]);
return t},decodeUnsignedIntegers:function(e){for(var t=[],i=0,r=0,s=e.length,n=0;s>n;++n){var a=e.charCodeAt(n)-63,i=i|(31&a)<<r;
32>a?(t.push(i),r=i=0):r+=5}return t},encodeFloat:function(e,t){return e=Math.round(e*(t||1e5)),this.encodeSignedInteger(e)
},decodeFloat:function(e,t){return this.decodeSignedInteger(e)/(t||1e5)},encodeSignedInteger:function(e){var t=e<<1;
return 0>e&&(t=~t),this.encodeUnsignedInteger(t)},decodeSignedInteger:function(e){return e=this.decodeUnsignedInteger(e),1&e?~(e>>1):e>>1
},encodeUnsignedInteger:function(e){for(var t,i="";e>=32;)t=(32|31&e)+63,i+=String.fromCharCode(t),e>>=5;
return i+=String.fromCharCode(e+63)},decodeUnsignedInteger:function(e){for(var t=0,i=0,r=e.length,s=0;r>s;++s){var n=e.charCodeAt(s)-63,t=t|(31&n)<<i;
if(32>n)break;i+=5}return t},CLASS_NAME:"OpenLayers.Format.EncodedPolyline"}),OpenLayers.Control.Panel=OpenLayers.Class(OpenLayers.Control,{controls:null,autoActivate:!0,defaultControl:null,saveState:!1,allowDepress:!1,activeState:null,initialize:function(e){OpenLayers.Control.prototype.initialize.apply(this,[e]),this.controls=[],this.activeState={}
},destroy:function(){this.map&&this.map.events.unregister("buttonclick",this,this.onButtonClick),OpenLayers.Control.prototype.destroy.apply(this,arguments);
for(var e,t=this.controls.length-1;t>=0;t--)e=this.controls[t],e.events&&e.events.un({activate:this.iconOn,deactivate:this.iconOff}),e.panel_div=null;
this.activeState=null},activate:function(){if(OpenLayers.Control.prototype.activate.apply(this,arguments)){for(var e,t=0,i=this.controls.length;i>t;t++)e=this.controls[t],(e===this.defaultControl||this.saveState&&this.activeState[e.id])&&e.activate();
return!0===this.saveState&&(this.defaultControl=null),this.redraw(),!0}return!1},deactivate:function(){if(OpenLayers.Control.prototype.deactivate.apply(this,arguments)){for(var e,t=0,i=this.controls.length;i>t;t++)e=this.controls[t],this.activeState[e.id]=e.deactivate();
return this.redraw(),!0}return!1},draw:function(){return OpenLayers.Control.prototype.draw.apply(this,arguments),this.outsideViewport?(this.events.attachToElement(this.div),this.events.register("buttonclick",this,this.onButtonClick)):this.map.events.register("buttonclick",this,this.onButtonClick),this.addControlsToMap(this.controls),this.div
},redraw:function(){for(var e=this.div.childNodes.length-1;e>=0;e--)this.div.removeChild(this.div.childNodes[e]);
if(this.div.innerHTML="",this.active)for(var e=0,t=this.controls.length;t>e;e++)this.div.appendChild(this.controls[e].panel_div)
},activateControl:function(e){if(!this.active)return!1;if(e.type==OpenLayers.Control.TYPE_BUTTON)e.trigger();
else if(e.type==OpenLayers.Control.TYPE_TOGGLE)e.active?e.deactivate():e.activate();
else if(this.allowDepress&&e.active)e.deactivate();else{for(var t,i=0,r=this.controls.length;r>i;i++)t=this.controls[i],t==e||t.type!==OpenLayers.Control.TYPE_TOOL&&null!=t.type||t.deactivate();
e.activate()}},addControls:function(e){OpenLayers.Util.isArray(e)||(e=[e]),this.controls=this.controls.concat(e);
for(var t=0,i=e.length;i>t;t++){var r=e[t],s=this.createControlMarkup(r);OpenLayers.Element.addClass(s,r.displayClass+"ItemInactive"),OpenLayers.Element.addClass(s,"olButton"),""==r.title||s.title||(s.title=r.title),r.panel_div=s
}this.map&&(this.addControlsToMap(e),this.redraw())},createControlMarkup:function(){return document.createElement("div")
},addControlsToMap:function(e){for(var t,i=0,r=e.length;r>i;i++)t=e[i],!0===t.autoActivate?(t.autoActivate=!1,this.map.addControl(t),t.autoActivate=!0):(this.map.addControl(t),t.deactivate()),t.events.on({activate:this.iconOn,deactivate:this.iconOff})
},iconOn:function(){var e=this.panel_div;e.className=e.className.replace(RegExp("\\b("+this.displayClass+"Item)Inactive\\b"),"$1Active")
},iconOff:function(){var e=this.panel_div;e.className=e.className.replace(RegExp("\\b("+this.displayClass+"Item)Active\\b"),"$1Inactive")
},onButtonClick:function(e){var t=this.controls;e=e.buttonElement;for(var i=t.length-1;i>=0;--i)if(t[i].panel_div===e){this.activateControl(t[i]);
break}},getControlsBy:function(e,t){var i="function"==typeof t.test;return OpenLayers.Array.filter(this.controls,function(r){return r[e]==t||i&&t.test(r[e])
})},getControlsByName:function(e){return this.getControlsBy("name",e)},getControlsByClass:function(e){return this.getControlsBy("CLASS_NAME",e)
},CLASS_NAME:"OpenLayers.Control.Panel"}),OpenLayers.Control.Button=OpenLayers.Class(OpenLayers.Control,{type:OpenLayers.Control.TYPE_BUTTON,trigger:function(){},CLASS_NAME:"OpenLayers.Control.Button"}),OpenLayers.Control.ZoomIn=OpenLayers.Class(OpenLayers.Control.Button,{trigger:function(){this.map&&this.map.zoomIn()
},CLASS_NAME:"OpenLayers.Control.ZoomIn"}),OpenLayers.Control.ZoomOut=OpenLayers.Class(OpenLayers.Control.Button,{trigger:function(){this.map&&this.map.zoomOut()
},CLASS_NAME:"OpenLayers.Control.ZoomOut"}),OpenLayers.Control.ZoomToMaxExtent=OpenLayers.Class(OpenLayers.Control.Button,{trigger:function(){this.map&&this.map.zoomToMaxExtent()
},CLASS_NAME:"OpenLayers.Control.ZoomToMaxExtent"}),OpenLayers.Control.ZoomPanel=OpenLayers.Class(OpenLayers.Control.Panel,{initialize:function(e){OpenLayers.Control.Panel.prototype.initialize.apply(this,[e]),this.addControls([new OpenLayers.Control.ZoomIn,new OpenLayers.Control.ZoomToMaxExtent,new OpenLayers.Control.ZoomOut])
},CLASS_NAME:"OpenLayers.Control.ZoomPanel"}),OpenLayers.Layer.HTTPRequest=OpenLayers.Class(OpenLayers.Layer,{URL_HASH_FACTOR:(Math.sqrt(5)-1)/2,url:null,params:null,reproject:!1,initialize:function(e,t,i,r){OpenLayers.Layer.prototype.initialize.apply(this,[e,r]),this.url=t,this.params||(this.params=OpenLayers.Util.extend({},i))
},destroy:function(){this.params=this.url=null,OpenLayers.Layer.prototype.destroy.apply(this,arguments)
},clone:function(e){return null==e&&(e=new OpenLayers.Layer.HTTPRequest(this.name,this.url,this.params,this.getOptions())),e=OpenLayers.Layer.prototype.clone.apply(this,[e])
},setUrl:function(e){this.url=e},mergeNewParams:function(e){return this.params=OpenLayers.Util.extend(this.params,e),e=this.redraw(),null!=this.map&&this.map.events.triggerEvent("changelayer",{layer:this,property:"params"}),e
},redraw:function(e){return e?this.mergeNewParams({_olSalt:Math.random()}):OpenLayers.Layer.prototype.redraw.apply(this,[])
},selectUrl:function(e,t){for(var i=1,r=0,s=e.length;s>r;r++)i*=e.charCodeAt(r)*this.URL_HASH_FACTOR,i-=Math.floor(i);
return t[Math.floor(i*t.length)]},getFullRequestString:function(e,t){var i=t||this.url,r=OpenLayers.Util.extend({},this.params),r=OpenLayers.Util.extend(r,e),s=OpenLayers.Util.getParameterString(r);
OpenLayers.Util.isArray(i)&&(i=this.selectUrl(s,i));var n,s=OpenLayers.Util.upperCaseObject(OpenLayers.Util.getParameters(i));
for(n in r)n.toUpperCase()in s&&delete r[n];return s=OpenLayers.Util.getParameterString(r),OpenLayers.Util.urlAppend(i,s)
},CLASS_NAME:"OpenLayers.Layer.HTTPRequest"}),OpenLayers.Tile=OpenLayers.Class({events:null,eventListeners:null,id:null,layer:null,url:null,bounds:null,size:null,position:null,isLoading:!1,initialize:function(e,t,i,r,s,n){this.layer=e,this.position=t.clone(),this.setBounds(i),this.url=r,s&&(this.size=s.clone()),this.id=OpenLayers.Util.createUniqueID("Tile_"),OpenLayers.Util.extend(this,n),this.events=new OpenLayers.Events(this),this.eventListeners instanceof Object&&this.events.on(this.eventListeners)
},unload:function(){this.isLoading&&(this.isLoading=!1,this.events.triggerEvent("unload"))
},destroy:function(){this.position=this.size=this.bounds=this.layer=null,this.eventListeners&&this.events.un(this.eventListeners),this.events.destroy(),this.events=this.eventListeners=null
},draw:function(e){e||this.clear();var t=this.shouldDraw();return t&&!e&&!1===this.events.triggerEvent("beforedraw")&&(t=null),t
},shouldDraw:function(){var e=!1,t=this.layer.maxExtent;if(t){var i=this.layer.map,i=i.baseLayer.wrapDateLine&&i.getMaxExtent();
this.bounds.intersectsBounds(t,{inclusive:!1,worldBounds:i})&&(e=!0)}return e||this.layer.displayOutsideMaxExtent
},setBounds:function(e){if(e=e.clone(),this.layer.map.baseLayer.wrapDateLine){var t=this.layer.map.getMaxExtent(),i=this.layer.map.getResolution();
e=e.wrapDateLine(t,{leftTolerance:i,rightTolerance:i})}this.bounds=e},moveTo:function(e,t,i){null==i&&(i=!0),this.setBounds(e),this.position=t.clone(),i&&this.draw()
},clear:function(){},CLASS_NAME:"OpenLayers.Tile"}),OpenLayers.Tile.Image=OpenLayers.Class(OpenLayers.Tile,{url:null,imgDiv:null,frame:null,imageReloadAttempts:null,layerAlphaHack:null,asyncRequestId:null,maxGetUrlLength:null,canvasContext:null,crossOriginKeyword:null,initialize:function(e,t,i,r){OpenLayers.Tile.prototype.initialize.apply(this,arguments),this.url=r,this.layerAlphaHack=this.layer.alpha&&OpenLayers.Util.alphaHack(),(null!=this.maxGetUrlLength||this.layer.gutter||this.layerAlphaHack)&&(this.frame=document.createElement("div"),this.frame.style.position="absolute",this.frame.style.overflow="hidden"),null!=this.maxGetUrlLength&&OpenLayers.Util.extend(this,OpenLayers.Tile.Image.IFrame)
},destroy:function(){this.imgDiv&&(this.clear(),this.frame=this.imgDiv=null),this.asyncRequestId=null,OpenLayers.Tile.prototype.destroy.apply(this,arguments)
},draw:function(){var e=OpenLayers.Tile.prototype.draw.apply(this,arguments);return e?(this.layer!=this.layer.map.baseLayer&&this.layer.reproject&&(this.bounds=this.getBoundsFromBaseLayer(this.position)),this.isLoading?this._loadEvent="reload":(this.isLoading=!0,this._loadEvent="loadstart"),this.renderTile(),this.positionTile()):!1===e&&this.unload(),e
},renderTile:function(){if(this.layer.async){var e=this.asyncRequestId=(this.asyncRequestId||0)+1;
this.layer.getURLasync(this.bounds,function(t){e==this.asyncRequestId&&(this.url=t,this.initImage())
},this)}else this.url=this.layer.getURL(this.bounds),this.initImage()},positionTile:function(){var e=this.getTile().style,t=this.frame?this.size:this.layer.getImageSize(this.bounds),i=1;
this.layer instanceof OpenLayers.Layer.Grid&&(i=this.layer.getServerResolution()/this.layer.map.getResolution()),e.left=this.position.x+"px",e.top=this.position.y+"px",e.width=Math.round(i*t.w)+"px",e.height=Math.round(i*t.h)+"px"
},clear:function(){OpenLayers.Tile.prototype.clear.apply(this,arguments);var e=this.imgDiv;
if(e){var t=this.getTile();t.parentNode===this.layer.div&&this.layer.div.removeChild(t),this.setImgSrc(),!0===this.layerAlphaHack&&(e.style.filter=""),OpenLayers.Element.removeClass(e,"olImageLoadError")
}this.canvasContext=null},getImage:function(){if(!this.imgDiv){this.imgDiv=OpenLayers.Tile.Image.IMAGE.cloneNode(!1);
var e=this.imgDiv.style;if(this.frame){var t=0,i=0;this.layer.gutter&&(t=100*(this.layer.gutter/this.layer.tileSize.w),i=100*(this.layer.gutter/this.layer.tileSize.h)),e.left=-t+"%",e.top=-i+"%",e.width=2*t+100+"%",e.height=2*i+100+"%"
}e.visibility="hidden",e.opacity=0,1>this.layer.opacity&&(e.filter="alpha(opacity="+100*this.layer.opacity+")"),e.position="absolute",this.layerAlphaHack&&(e.paddingTop=e.height,e.height="0",e.width="100%"),this.frame&&this.frame.appendChild(this.imgDiv)
}return this.imgDiv},setImage:function(e){this.imgDiv=e},initImage:function(){if(this.url||this.imgDiv){this.events.triggerEvent("beforeload"),this.layer.div.appendChild(this.getTile()),this.events.triggerEvent(this._loadEvent);
var e=this.getImage(),t=e.getAttribute("src")||"";this.url&&OpenLayers.Util.isEquivalentUrl(t,this.url)?this._loadTimeout=window.setTimeout(OpenLayers.Function.bind(this.onImageLoad,this),0):(this.stopLoading(),this.crossOriginKeyword&&e.removeAttribute("crossorigin"),OpenLayers.Event.observe(e,"load",OpenLayers.Function.bind(this.onImageLoad,this)),OpenLayers.Event.observe(e,"error",OpenLayers.Function.bind(this.onImageError,this)),this.imageReloadAttempts=0,this.setImgSrc(this.url))
}else this.isLoading=!1},setImgSrc:function(e){var t=this.imgDiv;e?(t.style.visibility="hidden",t.style.opacity=0,this.crossOriginKeyword&&("data:"!==e.substr(0,5)?t.setAttribute("crossorigin",this.crossOriginKeyword):t.removeAttribute("crossorigin")),t.src=e):(this.stopLoading(),this.imgDiv=null,t.parentNode&&t.parentNode.removeChild(t))
},getTile:function(){return this.frame?this.frame:this.getImage()},createBackBuffer:function(){if(this.imgDiv&&!this.isLoading){var e;
return this.frame?(e=this.frame.cloneNode(!1),e.appendChild(this.imgDiv)):e=this.imgDiv,this.imgDiv=null,e
}},onImageLoad:function(){var e=this.imgDiv;this.stopLoading(),e.style.visibility="inherit",e.style.opacity=this.layer.opacity,this.isLoading=!1,this.canvasContext=null,this.events.triggerEvent("loadend"),!0===this.layerAlphaHack&&(e.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+e.src+"', sizingMethod='scale')")
},onImageError:function(){var e=this.imgDiv;null!=e.src&&(this.imageReloadAttempts++,this.imageReloadAttempts<=OpenLayers.IMAGE_RELOAD_ATTEMPTS?this.setImgSrc(this.layer.getURL(this.bounds)):(OpenLayers.Element.addClass(e,"olImageLoadError"),this.events.triggerEvent("loaderror"),this.onImageLoad()))
},stopLoading:function(){OpenLayers.Event.stopObservingElement(this.imgDiv),window.clearTimeout(this._loadTimeout),delete this._loadTimeout
},getCanvasContext:function(){if(OpenLayers.CANVAS_SUPPORTED&&this.imgDiv&&!this.isLoading){if(!this.canvasContext){var e=document.createElement("canvas");
e.width=this.size.w,e.height=this.size.h,this.canvasContext=e.getContext("2d"),this.canvasContext.drawImage(this.imgDiv,0,0)
}return this.canvasContext}},CLASS_NAME:"OpenLayers.Tile.Image"}),OpenLayers.Tile.Image.IMAGE=function(){var e=new Image;
return e.className="olTileImage",e.galleryImg="no",e}(),OpenLayers.Layer.Grid=OpenLayers.Class(OpenLayers.Layer.HTTPRequest,{tileSize:null,tileOriginCorner:"bl",tileOrigin:null,tileOptions:null,tileClass:OpenLayers.Tile.Image,grid:null,singleTile:!1,ratio:1.5,buffer:0,transitionEffect:"resize",numLoadingTiles:0,serverResolutions:null,loading:!1,backBuffer:null,gridResolution:null,backBufferResolution:null,backBufferLonLat:null,backBufferTimerId:null,removeBackBufferDelay:null,className:null,gridLayout:null,rowSign:null,transitionendEvents:["transitionend","webkitTransitionEnd","otransitionend","oTransitionEnd"],initialize:function(){OpenLayers.Layer.HTTPRequest.prototype.initialize.apply(this,arguments),this.grid=[],this._removeBackBuffer=OpenLayers.Function.bind(this.removeBackBuffer,this),this.initProperties(),this.rowSign="t"===this.tileOriginCorner.substr(0,1)?1:-1
},initProperties:function(){void 0===this.options.removeBackBufferDelay&&(this.removeBackBufferDelay=this.singleTile?0:2500),void 0===this.options.className&&(this.className=this.singleTile?"olLayerGridSingleTile":"olLayerGrid")
},setMap:function(e){OpenLayers.Layer.HTTPRequest.prototype.setMap.call(this,e),OpenLayers.Element.addClass(this.div,this.className)
},removeMap:function(){this.removeBackBuffer()},destroy:function(){this.removeBackBuffer(),this.clearGrid(),this.tileSize=this.grid=null,OpenLayers.Layer.HTTPRequest.prototype.destroy.apply(this,arguments)
},clearGrid:function(){if(this.grid){for(var e=0,t=this.grid.length;t>e;e++)for(var i=this.grid[e],r=0,s=i.length;s>r;r++)this.destroyTile(i[r]);
this.grid=[],this.gridLayout=this.gridResolution=null}},addOptions:function(e){var t=void 0!==e.singleTile&&e.singleTile!==this.singleTile;
OpenLayers.Layer.HTTPRequest.prototype.addOptions.apply(this,arguments),this.map&&t&&(this.initProperties(),this.clearGrid(),this.tileSize=this.options.tileSize,this.setTileSize(),this.moveTo(null,!0))
},clone:function(e){return null==e&&(e=new OpenLayers.Layer.Grid(this.name,this.url,this.params,this.getOptions())),e=OpenLayers.Layer.HTTPRequest.prototype.clone.apply(this,[e]),null!=this.tileSize&&(e.tileSize=this.tileSize.clone()),e.grid=[],e.gridResolution=null,e.backBuffer=null,e.backBufferTimerId=null,e.loading=!1,e.numLoadingTiles=0,e
},moveTo:function(e,t,i){if(OpenLayers.Layer.HTTPRequest.prototype.moveTo.apply(this,arguments),e=e||this.map.getExtent(),null!=e){var r=!this.grid.length||t,s=this.getTilesBounds(),n=this.map.getResolution();
this.getServerResolution(n),this.singleTile?(r||!i&&!s.containsBounds(e))&&(t&&"resize"!==this.transitionEffect&&this.removeBackBuffer(),t&&"resize"!==this.transitionEffect||this.applyBackBuffer(n),this.initSingleTile(e)):(r=r||!s.intersectsBounds(e,{worldBounds:this.map.baseLayer.wrapDateLine&&this.map.getMaxExtent()}))?(!t||"resize"!==this.transitionEffect&&this.gridResolution!==n||this.applyBackBuffer(n),this.initGriddedTiles(e)):this.moveGriddedTiles()
}},getTileData:function(e){var t=null,i=e.lon,r=e.lat,s=this.grid.length;if(this.map&&s){var n=this.map.getResolution();
e=this.tileSize.w;var a=this.tileSize.h,o=this.grid[0][0].bounds,l=o.left,o=o.top;
if(l>i&&this.map.baseLayer.wrapDateLine)var h=this.map.getMaxExtent().getWidth(),p=Math.ceil((l-i)/h),i=i+h*p;
i=(i-l)/(n*e),r=(o-r)/(n*a),n=Math.floor(i),l=Math.floor(r),l>=0&&s>l&&(s=this.grid[l][n])&&(t={tile:s,i:Math.floor((i-n)*e),j:Math.floor((r-l)*a)})
}return t},destroyTile:function(e){this.removeTileMonitoringHooks(e),e.destroy()},getServerResolution:function(e){var t=Number.POSITIVE_INFINITY;
if(e=e||this.map.getResolution(),this.serverResolutions&&-1===OpenLayers.Util.indexOf(this.serverResolutions,e)){var i,r,s,n;
for(i=this.serverResolutions.length-1;i>=0&&(s=this.serverResolutions[i],r=Math.abs(s-e),!(r>t));i--)t=r,n=s;
e=n}return e},getServerZoom:function(){var e=this.getServerResolution();return this.serverResolutions?OpenLayers.Util.indexOf(this.serverResolutions,e):this.map.getZoomForResolution(e)+(this.zoomOffset||0)
},applyBackBuffer:function(e){null!==this.backBufferTimerId&&this.removeBackBuffer();
var t=this.backBuffer;if(!t){if(t=this.createBackBuffer(),!t)return;e===this.gridResolution?this.div.insertBefore(t,this.div.firstChild):this.map.baseLayer.div.parentNode.insertBefore(t,this.map.baseLayer.div),this.backBuffer=t;
var i=this.grid[0][0].bounds;this.backBufferLonLat={lon:i.left,lat:i.top},this.backBufferResolution=this.gridResolution
}for(var r,i=this.backBufferResolution/e,s=t.childNodes,n=s.length-1;n>=0;--n)r=s[n],r.style.top=(i*r._i*r._h|0)+"px",r.style.left=(i*r._j*r._w|0)+"px",r.style.width=Math.round(i*r._w)+"px",r.style.height=Math.round(i*r._h)+"px";
e=this.getViewPortPxFromLonLat(this.backBufferLonLat,e),i=this.map.layerContainerOriginPx.y,t.style.left=Math.round(e.x-this.map.layerContainerOriginPx.x)+"px",t.style.top=Math.round(e.y-i)+"px"
},createBackBuffer:function(){var e;if(0<this.grid.length){e=document.createElement("div"),e.id=this.div.id+"_bb",e.className="olBackBuffer",e.style.position="absolute";
var t=this.map;e.style.zIndex="resize"===this.transitionEffect?this.getZIndex()-1:t.Z_INDEX_BASE.BaseLayer-(t.getNumLayers()-t.getLayerIndex(this));
for(var t=0,i=this.grid.length;i>t;t++)for(var r=0,s=this.grid[t].length;s>r;r++){var n=this.grid[t][r],a=this.grid[t][r].createBackBuffer();
a&&(a._i=t,a._j=r,a._w=n.size.w,a._h=n.size.h,a.id=n.id+"_bb",e.appendChild(a))}}return e
},removeBackBuffer:function(){if(this._transitionElement){for(var e=this.transitionendEvents.length-1;e>=0;--e)OpenLayers.Event.stopObserving(this._transitionElement,this.transitionendEvents[e],this._removeBackBuffer);
delete this._transitionElement}this.backBuffer&&(this.backBuffer.parentNode&&this.backBuffer.parentNode.removeChild(this.backBuffer),this.backBufferResolution=this.backBuffer=null,null!==this.backBufferTimerId&&(window.clearTimeout(this.backBufferTimerId),this.backBufferTimerId=null))
},moveByPx:function(){this.singleTile||this.moveGriddedTiles()},setTileSize:function(e){this.singleTile&&(e=this.map.getSize(),e.h=parseInt(e.h*this.ratio,10),e.w=parseInt(e.w*this.ratio,10)),OpenLayers.Layer.HTTPRequest.prototype.setTileSize.apply(this,[e])
},getTilesBounds:function(){var e=null,t=this.grid.length;if(t)var e=this.grid[t-1][0].bounds,t=this.grid[0].length*e.getWidth(),i=this.grid.length*e.getHeight(),e=new OpenLayers.Bounds(e.left,e.bottom,e.left+t,e.bottom+i);
return e},initSingleTile:function(e){this.events.triggerEvent("retile");var t=e.getCenterLonLat(),i=e.getWidth()*this.ratio;
e=e.getHeight()*this.ratio,t=new OpenLayers.Bounds(t.lon-i/2,t.lat-e/2,t.lon+i/2,t.lat+e/2),i=this.map.getLayerPxFromLonLat({lon:t.left,lat:t.top}),this.grid.length||(this.grid[0]=[]),(e=this.grid[0][0])?e.moveTo(t,i):(e=this.addTile(t,i),this.addTileMonitoringHooks(e),e.draw(),this.grid[0][0]=e),this.removeExcessTiles(1,1),this.gridResolution=this.getServerResolution()
},calculateGridLayout:function(e,t,i){var r=i*this.tileSize.w;i*=this.tileSize.h;
var s=Math.floor((e.left-t.lon)/r)-this.buffer,n=this.rowSign;return e=Math[~n?"floor":"ceil"](n*(t.lat-e.top+i)/i)-this.buffer*n,{tilelon:r,tilelat:i,startcol:s,startrow:e}
},getTileOrigin:function(){var e=this.tileOrigin;if(!e)var e=this.getMaxExtent(),t={tl:["left","top"],tr:["right","top"],bl:["left","bottom"],br:["right","bottom"]}[this.tileOriginCorner],e=new OpenLayers.LonLat(e[t[0]],e[t[1]]);
return e},getTileBoundsForGridIndex:function(e,t){var i=this.getTileOrigin(),r=this.gridLayout,s=r.tilelon,n=r.tilelat,a=r.startcol,r=r.startrow,o=this.rowSign;
return new OpenLayers.Bounds(i.lon+(a+t)*s,i.lat-(r+e*o)*n*o,i.lon+(a+t+1)*s,i.lat-(r+(e-1)*o)*n*o)
},initGriddedTiles:function(e){this.events.triggerEvent("retile");var t=this.map.getSize(),i=this.getTileOrigin(),r=this.map.getResolution(),s=this.getServerResolution(),n=r/s,r=this.tileSize.w/n,n=this.tileSize.h/n,a=Math.ceil(t.h/n)+2*this.buffer+1,t=Math.ceil(t.w/r)+2*this.buffer+1;
this.gridLayout=s=this.calculateGridLayout(e,i,s);var i=s.tilelon,o=s.tilelat,s=this.map.layerContainerOriginPx.x,l=this.map.layerContainerOriginPx.y,h=this.getTileBoundsForGridIndex(0,0),p=this.map.getViewPortPxFromLonLat(new OpenLayers.LonLat(h.left,h.top));
p.x=Math.round(p.x)-s,p.y=Math.round(p.y)-l;var s=[],l=this.map.getCenter(),u=0;do{var c=this.grid[u];
c||(c=[],this.grid.push(c));var y=0;do{var h=this.getTileBoundsForGridIndex(u,y),d=p.clone();
d.x+=y*Math.round(r),d.y+=u*Math.round(n);var m=c[y];m?m.moveTo(h,d,!1):(m=this.addTile(h,d),this.addTileMonitoringHooks(m),c.push(m)),d=h.getCenterLonLat(),s.push({tile:m,distance:Math.pow(d.lon-l.lon,2)+Math.pow(d.lat-l.lat,2)}),y+=1
}while(h.right<=e.right+i*this.buffer||t>y);u+=1}while(h.bottom>=e.bottom-o*this.buffer||a>u);
for(this.removeExcessTiles(u,y),this.gridResolution=r=this.getServerResolution(),s.sort(function(e,t){return e.distance-t.distance
}),e=0,r=s.length;r>e;++e)s[e].tile.draw()},getMaxExtent:function(){return this.maxExtent
},addTile:function(e,t){var i=new this.tileClass(this,t,e,null,this.tileSize,this.tileOptions);
return this.events.triggerEvent("addtile",{tile:i}),i},addTileMonitoringHooks:function(e){e.onLoadStart=function(){!1===this.loading&&(this.loading=!0,this.events.triggerEvent("loadstart")),this.events.triggerEvent("tileloadstart",{tile:e}),this.numLoadingTiles++,!this.singleTile&&this.backBuffer&&this.gridResolution===this.backBufferResolution&&OpenLayers.Element.addClass(e.getTile(),"olTileReplacing")
},e.onLoadEnd=function(t){if(this.numLoadingTiles--,t="unload"===t.type,this.events.triggerEvent("tileloaded",{tile:e,aborted:t}),!this.singleTile&&!t&&this.backBuffer&&this.gridResolution===this.backBufferResolution){var i=e.getTile();
if("none"===OpenLayers.Element.getStyle(i,"display")){var r=document.getElementById(e.id+"_bb");
r&&r.parentNode.removeChild(r)}OpenLayers.Element.removeClass(i,"olTileReplacing")
}if(0===this.numLoadingTiles){if(this.backBuffer)if(0===this.backBuffer.childNodes.length)this.removeBackBuffer();
else{for(this._transitionElement=t?this.div.lastChild:e.imgDiv,t=this.transitionendEvents,i=t.length-1;i>=0;--i)OpenLayers.Event.observe(this._transitionElement,t[i],this._removeBackBuffer);
this.backBufferTimerId=window.setTimeout(this._removeBackBuffer,this.removeBackBufferDelay)
}this.loading=!1,this.events.triggerEvent("loadend")}},e.onLoadError=function(){this.events.triggerEvent("tileerror",{tile:e})
},e.events.on({loadstart:e.onLoadStart,loadend:e.onLoadEnd,unload:e.onLoadEnd,loaderror:e.onLoadError,scope:this})
},removeTileMonitoringHooks:function(e){e.unload(),e.events.un({loadstart:e.onLoadStart,loadend:e.onLoadEnd,unload:e.onLoadEnd,loaderror:e.onLoadError,scope:this})
},moveGriddedTiles:function(){for(var e=this.buffer+1;;){var t=this.grid[0][0],i=t.position.x+this.map.layerContainerOriginPx.x,t=t.position.y+this.map.layerContainerOriginPx.y,r=this.getServerResolution()/this.map.getResolution(),r={w:Math.round(this.tileSize.w*r),h:Math.round(this.tileSize.h*r)};
if(i>-r.w*(e-1))this.shiftColumn(!0,r);else if(i<-r.w*e)this.shiftColumn(!1,r);else if(t>-r.h*(e-1))this.shiftRow(!0,r);
else{if(!(t<-r.h*e))break;this.shiftRow(!1,r)}}},shiftRow:function(e,t){var i=this.grid,r=e?0:i.length-1,s=e?-1:1;
this.gridLayout.startrow+=s*this.rowSign;for(var n=i[r],a=i[e?"pop":"shift"](),o=0,l=a.length;l>o;o++){var h=a[o],p=n[o].position.clone();
p.y+=t.h*s,h.moveTo(this.getTileBoundsForGridIndex(r,o),p)}i[e?"unshift":"push"](a)
},shiftColumn:function(e,t){var i=this.grid,r=e?0:i[0].length-1,s=e?-1:1;this.gridLayout.startcol+=s;
for(var n=0,a=i.length;a>n;n++){var o=i[n],l=o[r].position.clone(),h=o[e?"pop":"shift"]();
l.x+=t.w*s,h.moveTo(this.getTileBoundsForGridIndex(n,r),l),o[e?"unshift":"push"](h)
}},removeExcessTiles:function(e,t){for(var i,r;this.grid.length>e;){var s=this.grid.pop();
for(i=0,r=s.length;r>i;i++){var n=s[i];this.destroyTile(n)}}for(i=0,r=this.grid.length;r>i;i++)for(;this.grid[i].length>t;)s=this.grid[i],n=s.pop(),this.destroyTile(n)
},onMapResize:function(){this.singleTile&&(this.clearGrid(),this.setTileSize())},getTileBounds:function(e){var t=this.maxExtent,i=this.getResolution(),r=i*this.tileSize.w,i=i*this.tileSize.h,s=this.getLonLatFromViewPortPx(e);
return e=t.left+r*Math.floor((s.lon-t.left)/r),t=t.bottom+i*Math.floor((s.lat-t.bottom)/i),new OpenLayers.Bounds(e,t,e+r,t+i)
},CLASS_NAME:"OpenLayers.Layer.Grid"}),OpenLayers.Format.ArcXML=OpenLayers.Class(OpenLayers.Format.XML,{fontStyleKeys:"antialiasing blockout font fontcolor fontsize fontstyle glowing interval outline printmode shadow transparency".split(" "),request:null,response:null,initialize:function(e){if(this.request=new OpenLayers.Format.ArcXML.Request,this.response=new OpenLayers.Format.ArcXML.Response,e)if("feature"==e.requesttype){this.request.get_image=null;
var t=this.request.get_feature.query;this.addCoordSys(t.featurecoordsys,e.featureCoordSys),this.addCoordSys(t.filtercoordsys,e.filterCoordSys),e.polygon?(t.isspatial=!0,t.spatialfilter.polygon=e.polygon):e.envelope&&(t.isspatial=!0,t.spatialfilter.envelope={minx:0,miny:0,maxx:0,maxy:0},this.parseEnvelope(t.spatialfilter.envelope,e.envelope))
}else"image"==e.requesttype?(this.request.get_feature=null,t=this.request.get_image.properties,this.parseEnvelope(t.envelope,e.envelope),this.addLayers(t.layerlist,e.layers),this.addImageSize(t.imagesize,e.tileSize),this.addCoordSys(t.featurecoordsys,e.featureCoordSys),this.addCoordSys(t.filtercoordsys,e.filterCoordSys)):this.request=null;
OpenLayers.Format.XML.prototype.initialize.apply(this,[e])},parseEnvelope:function(e,t){t&&4==t.length&&(e.minx=t[0],e.miny=t[1],e.maxx=t[2],e.maxy=t[3])
},addLayers:function(e,t){for(var i=0,r=t.length;r>i;i++)e.push(t[i])},addImageSize:function(e,t){null!==t&&(e.width=t.w,e.height=t.h,e.printwidth=t.w,e.printheight=t.h)
},addCoordSys:function(e,t){"string"==typeof t?(e.id=parseInt(t),e.string=t):"object"==typeof t&&null!==t.proj&&(e.id=t.proj.srsProjNumber,e.string=t.proj.srsCode)
},iserror:function(e){var t=null;return e?(e=OpenLayers.Format.XML.prototype.read.apply(this,[e]),e=e.documentElement.getElementsByTagName("ERROR"),t=null!==e&&0<e.length):t=""!==this.response.error,t
},read:function(e){"string"==typeof e&&(e=OpenLayers.Format.XML.prototype.read.apply(this,[e]));
var t=null;if(e&&e.documentElement&&(t="ARCXML"==e.documentElement.nodeName?e.documentElement:e.documentElement.getElementsByTagName("ARCXML")[0]),!t||"parsererror"===t.firstChild.nodeName){var i,r;
try{i=e.firstChild.nodeValue,r=e.firstChild.childNodes[1].firstChild.nodeValue}catch(s){}throw{message:"Error parsing the ArcXML request",error:i,source:r}
}return this.parseResponse(t)},write:function(e){e||(e=this.request);var t=this.createElementNS("","ARCXML");
t.setAttribute("version","1.1");var i=this.createElementNS("","REQUEST");if(null!=e.get_image){var r=this.createElementNS("","GET_IMAGE");
i.appendChild(r);var s=this.createElementNS("","PROPERTIES");if(r.appendChild(s),e=e.get_image.properties,null!=e.featurecoordsys&&(r=this.createElementNS("","FEATURECOORDSYS"),s.appendChild(r),0===e.featurecoordsys.id?r.setAttribute("string",e.featurecoordsys.string):r.setAttribute("id",e.featurecoordsys.id)),null!=e.filtercoordsys&&(r=this.createElementNS("","FILTERCOORDSYS"),s.appendChild(r),0===e.filtercoordsys.id?r.setAttribute("string",e.filtercoordsys.string):r.setAttribute("id",e.filtercoordsys.id)),null!=e.envelope&&(r=this.createElementNS("","ENVELOPE"),s.appendChild(r),r.setAttribute("minx",e.envelope.minx),r.setAttribute("miny",e.envelope.miny),r.setAttribute("maxx",e.envelope.maxx),r.setAttribute("maxy",e.envelope.maxy)),r=this.createElementNS("","IMAGESIZE"),s.appendChild(r),r.setAttribute("height",e.imagesize.height),r.setAttribute("width",e.imagesize.width),(e.imagesize.height!=e.imagesize.printheight||e.imagesize.width!=e.imagesize.printwidth)&&(r.setAttribute("printheight",e.imagesize.printheight),r.setArrtibute("printwidth",e.imagesize.printwidth)),null!=e.background&&(r=this.createElementNS("","BACKGROUND"),s.appendChild(r),r.setAttribute("color",e.background.color.r+","+e.background.color.g+","+e.background.color.b),null!==e.background.transcolor&&r.setAttribute("transcolor",e.background.transcolor.r+","+e.background.transcolor.g+","+e.background.transcolor.b)),null!=e.layerlist&&0<e.layerlist.length)for(r=this.createElementNS("","LAYERLIST"),s.appendChild(r),s=0;s<e.layerlist.length;s++){var n=this.createElementNS("","LAYERDEF");
if(r.appendChild(n),n.setAttribute("id",e.layerlist[s].id),n.setAttribute("visible",e.layerlist[s].visible),"object"==typeof e.layerlist[s].query){var a=e.layerlist[s].query;
if(0>a.where.length)continue;var o=null,o="boolean"==typeof a.spatialfilter&&a.spatialfilter?this.createElementNS("","SPATIALQUERY"):this.createElementNS("","QUERY");
o.setAttribute("where",a.where),"number"==typeof a.accuracy&&0<a.accuracy&&o.setAttribute("accuracy",a.accuracy),"number"==typeof a.featurelimit&&2e3>a.featurelimit&&o.setAttribute("featurelimit",a.featurelimit),"string"==typeof a.subfields&&"#ALL#"!=a.subfields&&o.setAttribute("subfields",a.subfields),"string"==typeof a.joinexpression&&0<a.joinexpression.length&&o.setAttribute("joinexpression",a.joinexpression),"string"==typeof a.jointables&&0<a.jointables.length&&o.setAttribute("jointables",a.jointables),n.appendChild(o)
}"object"==typeof e.layerlist[s].renderer&&this.addRenderer(n,e.layerlist[s].renderer)
}}else null!=e.get_feature&&(r=this.createElementNS("","GET_FEATURES"),r.setAttribute("outputmode","newxml"),r.setAttribute("checkesc","true"),e.get_feature.geometry?r.setAttribute("geometry",e.get_feature.geometry):r.setAttribute("geometry","false"),e.get_feature.compact&&r.setAttribute("compact",e.get_feature.compact),"number"==e.get_feature.featurelimit&&r.setAttribute("featurelimit",e.get_feature.featurelimit),r.setAttribute("globalenvelope","true"),i.appendChild(r),null!=e.get_feature.layer&&0<e.get_feature.layer.length&&(s=this.createElementNS("","LAYER"),s.setAttribute("id",e.get_feature.layer),r.appendChild(s)),e=e.get_feature.query,null!=e&&(s=null,s=e.isspatial?this.createElementNS("","SPATIALQUERY"):this.createElementNS("","QUERY"),r.appendChild(s),"number"==typeof e.accuracy&&s.setAttribute("accuracy",e.accuracy),null!=e.featurecoordsys&&(r=this.createElementNS("","FEATURECOORDSYS"),0==e.featurecoordsys.id?r.setAttribute("string",e.featurecoordsys.string):r.setAttribute("id",e.featurecoordsys.id),s.appendChild(r)),null!=e.filtercoordsys&&(r=this.createElementNS("","FILTERCOORDSYS"),0===e.filtercoordsys.id?r.setAttribute("string",e.filtercoordsys.string):r.setAttribute("id",e.filtercoordsys.id),s.appendChild(r)),0<e.buffer&&(r=this.createElementNS("","BUFFER"),r.setAttribute("distance",e.buffer),s.appendChild(r)),e.isspatial&&(r=this.createElementNS("","SPATIALFILTER"),r.setAttribute("relation",e.spatialfilter.relation),s.appendChild(r),e.spatialfilter.envelope?(n=this.createElementNS("","ENVELOPE"),n.setAttribute("minx",e.spatialfilter.envelope.minx),n.setAttribute("miny",e.spatialfilter.envelope.miny),n.setAttribute("maxx",e.spatialfilter.envelope.maxx),n.setAttribute("maxy",e.spatialfilter.envelope.maxy),r.appendChild(n)):"object"==typeof e.spatialfilter.polygon&&r.appendChild(this.writePolygonGeometry(e.spatialfilter.polygon))),null!=e.where&&0<e.where.length&&s.setAttribute("where",e.where)));
return t.appendChild(i),OpenLayers.Format.XML.prototype.write.apply(this,[t])},addGroupRenderer:function(e,t){var i=this.createElementNS("","GROUPRENDERER");
e.appendChild(i);for(var r=0;r<t.length;r++)this.addRenderer(i,t[r])},addRenderer:function(e,t){if(OpenLayers.Util.isArray(t))this.addGroupRenderer(e,t);
else{var i=this.createElementNS("",t.type.toUpperCase()+"RENDERER");e.appendChild(i),"VALUEMAPRENDERER"==i.tagName?this.addValueMapRenderer(i,t):"VALUEMAPLABELRENDERER"==i.tagName?this.addValueMapLabelRenderer(i,t):"SIMPLELABELRENDERER"==i.tagName?this.addSimpleLabelRenderer(i,t):"SCALEDEPENDENTRENDERER"==i.tagName&&this.addScaleDependentRenderer(i,t)
}},addScaleDependentRenderer:function(e,t){"string"!=typeof t.lower&&"number"!=typeof t.lower||e.setAttribute("lower",t.lower),"string"!=typeof t.upper&&"number"!=typeof t.upper||e.setAttribute("upper",t.upper),this.addRenderer(e,t.renderer)
},addValueMapLabelRenderer:function(e,t){if(e.setAttribute("lookupfield",t.lookupfield),e.setAttribute("labelfield",t.labelfield),"object"==typeof t.exacts)for(var i=0,r=t.exacts.length;r>i;i++){var s=t.exacts[i],n=this.createElementNS("","EXACT");
if("string"==typeof s.value&&n.setAttribute("value",s.value),"string"==typeof s.label&&n.setAttribute("label",s.label),"string"==typeof s.method&&n.setAttribute("method",s.method),e.appendChild(n),"object"==typeof s.symbol){var a=null;
if("text"==s.symbol.type&&(a=this.createElementNS("","TEXTSYMBOL")),null!=a){for(var o=this.fontStyleKeys,l=0,h=o.length;h>l;l++){var p=o[l];
s.symbol[p]&&a.setAttribute(p,s.symbol[p])}n.appendChild(a)}}}},addValueMapRenderer:function(e,t){if(e.setAttribute("lookupfield",t.lookupfield),"object"==typeof t.ranges)for(var i=0,r=t.ranges.length;r>i;i++){var s=t.ranges[i],n=this.createElementNS("","RANGE");
if(n.setAttribute("lower",s.lower),n.setAttribute("upper",s.upper),e.appendChild(n),"object"==typeof s.symbol){var a=null;
"simplepolygon"==s.symbol.type&&(a=this.createElementNS("","SIMPLEPOLYGONSYMBOL")),null!=a&&("string"==typeof s.symbol.boundarycolor&&a.setAttribute("boundarycolor",s.symbol.boundarycolor),"string"==typeof s.symbol.fillcolor&&a.setAttribute("fillcolor",s.symbol.fillcolor),"number"==typeof s.symbol.filltransparency&&a.setAttribute("filltransparency",s.symbol.filltransparency),n.appendChild(a))
}}else if("object"==typeof t.exacts)for(i=0,r=t.exacts.length;r>i;i++)s=t.exacts[i],n=this.createElementNS("","EXACT"),"string"==typeof s.value&&n.setAttribute("value",s.value),"string"==typeof s.label&&n.setAttribute("label",s.label),"string"==typeof s.method&&n.setAttribute("method",s.method),e.appendChild(n),"object"==typeof s.symbol&&(a=null,"simplemarker"==s.symbol.type&&(a=this.createElementNS("","SIMPLEMARKERSYMBOL")),null!=a&&("string"==typeof s.symbol.antialiasing&&a.setAttribute("antialiasing",s.symbol.antialiasing),"string"==typeof s.symbol.color&&a.setAttribute("color",s.symbol.color),"string"==typeof s.symbol.outline&&a.setAttribute("outline",s.symbol.outline),"string"==typeof s.symbol.overlap&&a.setAttribute("overlap",s.symbol.overlap),"string"==typeof s.symbol.shadow&&a.setAttribute("shadow",s.symbol.shadow),"number"==typeof s.symbol.transparency&&a.setAttribute("transparency",s.symbol.transparency),"string"==typeof s.symbol.usecentroid&&a.setAttribute("usecentroid",s.symbol.usecentroid),"number"==typeof s.symbol.width&&a.setAttribute("width",s.symbol.width),n.appendChild(a)))
},addSimpleLabelRenderer:function(e,t){e.setAttribute("field",t.field);for(var i="featureweight howmanylabels labelbufferratio labelpriorities labelweight linelabelposition rotationalangles".split(" "),r=0,s=i.length;s>r;r++){var n=i[r];
t[n]&&e.setAttribute(n,t[n])}if("text"==t.symbol.type){var a=t.symbol,o=this.createElementNS("","TEXTSYMBOL");
for(e.appendChild(o),i=this.fontStyleKeys,r=0,s=i.length;s>r;r++)n=i[r],a[n]&&o.setAttribute(n,t[n])
}},writePolygonGeometry:function(e){if(!(e instanceof OpenLayers.Geometry.Polygon))throw{message:"Cannot write polygon geometry to ArcXML with an "+e.CLASS_NAME+" object.",geometry:e};
for(var t=this.createElementNS("","POLYGON"),i=0,r=e.components.length;r>i;i++){for(var s=e.components[i],n=this.createElementNS("","RING"),a=0,o=s.components.length;o>a;a++){var l=s.components[a],h=this.createElementNS("","POINT");
h.setAttribute("x",l.x),h.setAttribute("y",l.y),n.appendChild(h)}t.appendChild(n)
}return t},parseResponse:function(e){"string"==typeof e&&(e=(new OpenLayers.Format.XML).read(e));
var t=new OpenLayers.Format.ArcXML.Response,i=e.getElementsByTagName("ERROR");if(null!=i&&0<i.length)t.error=this.getChildValue(i,"Unknown error.");
else{if(i=e.getElementsByTagName("RESPONSE"),null==i||0==i.length)return t.error="No RESPONSE tag found in ArcXML response.",t;
var r=i[0].firstChild.nodeName;if("#text"==r&&(r=i[0].firstChild.nextSibling.nodeName),"IMAGE"==r)i=e.getElementsByTagName("ENVELOPE"),e=e.getElementsByTagName("OUTPUT"),null==i||0==i.length?t.error="No ENVELOPE tag found in ArcXML response.":null==e||0==e.length?t.error="No OUTPUT tag found in ArcXML response.":(i=this.parseAttributes(i[0]),r=this.parseAttributes(e[0]),t.image="string"==typeof r.type?{envelope:i,output:{type:r.type,data:this.getChildValue(e[0])}}:{envelope:i,output:r});
else if("FEATURES"==r){if(e=i[0].getElementsByTagName("FEATURES"),i=e[0].getElementsByTagName("FEATURECOUNT"),t.features.featurecount=i[0].getAttribute("count"),0<t.features.featurecount)for(i=e[0].getElementsByTagName("ENVELOPE"),t.features.envelope=this.parseAttributes(i[0],"number"),e=e[0].getElementsByTagName("FEATURE"),i=0;i<e.length;i++){for(var r=new OpenLayers.Feature.Vector,s=e[i].getElementsByTagName("FIELD"),n=0;n<s.length;n++){var a=s[n].getAttribute("name"),o=s[n].getAttribute("value");
r.attributes[a]=o}if(s=e[i].getElementsByTagName("POLYGON"),0<s.length){for(s=s[0].getElementsByTagName("RING"),n=[],a=0;a<s.length;a++){o=[],o.push(this.parsePointGeometry(s[a]));
for(var l=s[a].getElementsByTagName("HOLE"),h=0;h<l.length;h++)o.push(this.parsePointGeometry(l[h]));
n.push(new OpenLayers.Geometry.Polygon(o))}r.geometry=1==n.length?n[0]:new OpenLayers.Geometry.MultiPolygon(n)
}t.features.feature.push(r)}}else t.error="Unidentified response type."}return t},parseAttributes:function(e,t){for(var i={},r=0;r<e.attributes.length;r++)i[e.attributes[r].nodeName]="number"==t?parseFloat(e.attributes[r].nodeValue):e.attributes[r].nodeValue;
return i},parsePointGeometry:function(e){var t=[],i=e.getElementsByTagName("COORDS");
if(0<i.length)for(e=this.getChildValue(i[0]),e=e.split(/;/),i=0;i<e.length;i++){var r=e[i].split(/ /);
t.push(new OpenLayers.Geometry.Point(r[0],r[1]))}else if(e=e.getElementsByTagName("POINT"),0<e.length)for(i=0;i<e.length;i++)t.push(new OpenLayers.Geometry.Point(parseFloat(e[i].getAttribute("x")),parseFloat(e[i].getAttribute("y"))));
return new OpenLayers.Geometry.LinearRing(t)},CLASS_NAME:"OpenLayers.Format.ArcXML"}),OpenLayers.Format.ArcXML.Request=OpenLayers.Class({initialize:function(){return OpenLayers.Util.extend(this,{get_image:{properties:{background:null,draw:!0,envelope:{minx:0,miny:0,maxx:0,maxy:0},featurecoordsys:{id:0,string:"",datumtransformid:0,datumtransformstring:""},filtercoordsys:{id:0,string:"",datumtransformid:0,datumtransformstring:""},imagesize:{height:0,width:0,dpi:96,printheight:0,printwidth:0,scalesymbols:!1},layerlist:[],output:{baseurl:"",legendbaseurl:"",legendname:"",legendpath:"",legendurl:"",name:"",path:"",type:"jpg",url:""}}},get_feature:{layer:"",query:{isspatial:!1,featurecoordsys:{id:0,string:"",datumtransformid:0,datumtransformstring:""},filtercoordsys:{id:0,string:"",datumtransformid:0,datumtransformstring:""},buffer:0,where:"",spatialfilter:{relation:"envelope_intersection",envelope:null}}},environment:{separators:{cs:" ",ts:";"}},layer:[],workspaces:[]})
},CLASS_NAME:"OpenLayers.Format.ArcXML.Request"}),OpenLayers.Format.ArcXML.Response=OpenLayers.Class({initialize:function(){return OpenLayers.Util.extend(this,{image:{envelope:null,output:""},features:{featurecount:0,envelope:null,feature:[]},error:""})
},CLASS_NAME:"OpenLayers.Format.ArcXML.Response"}),function(){function e(){this._object=n&&!l?new n:new window.ActiveXObject("Microsoft.XMLHTTP"),this._listeners=[]
}function t(){return new e}function i(e){t.onreadystatechange&&t.onreadystatechange.apply(e),e.dispatchEvent({type:"readystatechange",bubbles:!1,cancelable:!1,timeStamp:new Date+0})
}function r(e){try{e.responseText=e._object.responseText}catch(t){}try{var i,r=e._object,s=r.responseXML,n=r.responseText;
o&&n&&s&&!s.documentElement&&r.getResponseHeader("Content-Type").match(/[^\/]+\/[^\+]+\+xml/)&&(s=new window.ActiveXObject("Microsoft.XMLDOM"),s.async=!1,s.validateOnParse=!1,s.loadXML(n)),i=s&&(o&&0!=s.parseError||!s.documentElement||s.documentElement&&"parsererror"==s.documentElement.tagName)?null:s,e.responseXML=i
}catch(a){}try{e.status=e._object.status}catch(l){}try{e.statusText=e._object.statusText
}catch(h){}}function s(e){e._object.onreadystatechange=new window.Function}var n=window.XMLHttpRequest,a=!!window.controllers,o=window.document.all&&!window.opera,l=o&&window.navigator.userAgent.match(/MSIE 7.0/);
t.prototype=e.prototype,a&&n.wrapped&&(t.wrapped=n.wrapped),t.UNSENT=0,t.OPENED=1,t.HEADERS_RECEIVED=2,t.LOADING=3,t.DONE=4,t.prototype.readyState=t.UNSENT,t.prototype.responseText="",t.prototype.responseXML=null,t.prototype.status=0,t.prototype.statusText="",t.prototype.priority="NORMAL",t.prototype.onreadystatechange=null,t.onreadystatechange=null,t.onopen=null,t.onsend=null,t.onabort=null,t.prototype.open=function(e,n,l,h,p){delete this._headers,3>arguments.length&&(l=!0),this._async=l;
var u,c=this,y=this.readyState;o&&l&&(u=function(){y!=t.DONE&&(s(c),c.abort())},window.attachEvent("onunload",u)),t.onopen&&t.onopen.apply(this,arguments),4<arguments.length?this._object.open(e,n,l,h,p):3<arguments.length?this._object.open(e,n,l,h):this._object.open(e,n,l),this.readyState=t.OPENED,i(this),this._object.onreadystatechange=function(){(!a||l)&&(c.readyState=c._object.readyState,r(c),c._aborted?c.readyState=t.UNSENT:(c.readyState==t.DONE&&(delete c._data,s(c),o&&l&&window.detachEvent("onunload",u)),y!=c.readyState&&i(c),y=c.readyState))
}},t.prototype.send=function(e){t.onsend&&t.onsend.apply(this,arguments),arguments.length||(e=null),e&&e.nodeType&&(e=window.XMLSerializer?(new window.XMLSerializer).serializeToString(e):e.xml,this._headers["Content-Type"]||this._object.setRequestHeader("Content-Type","application/xml")),this._data=e;
e:if(this._object.send(this._data),a&&!this._async)for(this.readyState=t.OPENED,r(this);this.readyState<t.DONE;)if(this.readyState++,i(this),this._aborted)break e
},t.prototype.abort=function(){t.onabort&&t.onabort.apply(this,arguments),this.readyState>t.UNSENT&&(this._aborted=!0),this._object.abort(),s(this),this.readyState=t.UNSENT,delete this._data
},t.prototype.getAllResponseHeaders=function(){return this._object.getAllResponseHeaders()
},t.prototype.getResponseHeader=function(e){return this._object.getResponseHeader(e)
},t.prototype.setRequestHeader=function(e,t){return this._headers||(this._headers={}),this._headers[e]=t,this._object.setRequestHeader(e,t)
},t.prototype.addEventListener=function(e,t,i){for(var r,s=0;r=this._listeners[s];s++)if(r[0]==e&&r[1]==t&&r[2]==i)return;
this._listeners.push([e,t,i])},t.prototype.removeEventListener=function(e,t,i){for(var r,s=0;(r=this._listeners[s])&&(r[0]!=e||r[1]!=t||r[2]!=i);s++);r&&this._listeners.splice(s,1)
},t.prototype.dispatchEvent=function(e){e={type:e.type,target:this,currentTarget:this,eventPhase:2,bubbles:e.bubbles,cancelable:e.cancelable,timeStamp:e.timeStamp,stopPropagation:function(){},preventDefault:function(){},initEvent:function(){}},"readystatechange"==e.type&&this.onreadystatechange&&(this.onreadystatechange.handleEvent||this.onreadystatechange).apply(this,[e]);
for(var t,i=0;t=this._listeners[i];i++)t[0]!=e.type||t[2]||(t[1].handleEvent||t[1]).apply(this,[e])
},t.prototype.toString=function(){return"[object XMLHttpRequest]"},t.toString=function(){return"[XMLHttpRequest]"
},window.Function.prototype.apply||(window.Function.prototype.apply=function(e,t){t||(t=[]),e.__func=this,e.__func(t[0],t[1],t[2],t[3],t[4]),delete e.__func
}),OpenLayers.Request||(OpenLayers.Request={}),OpenLayers.Request.XMLHttpRequest=t
}(),OpenLayers.ProxyHost="",OpenLayers.Request||(OpenLayers.Request={}),OpenLayers.Util.extend(OpenLayers.Request,{DEFAULT_CONFIG:{method:"GET",url:window.location.href,async:!0,user:void 0,password:void 0,params:null,proxy:OpenLayers.ProxyHost,headers:{},data:null,callback:function(){},success:null,failure:null,scope:null},URL_SPLIT_REGEX:/([^:]*:)\/\/([^:]*:?[^@]*@)?([^:\/\?]*):?([^\/\?]*)/,events:new OpenLayers.Events(this),makeSameOrigin:function(e,t){var i=0!==e.indexOf("http"),r=!i&&e.match(this.URL_SPLIT_REGEX);
if(r){var s=window.location,i=r[1]==s.protocol&&r[3]==s.hostname,r=r[4],s=s.port;
(80!=r&&""!=r||"80"!=s&&""!=s)&&(i=i&&r==s)}return i||t&&(e="function"==typeof t?t(e):t+encodeURIComponent(e)),e
},issue:function(e){var t=OpenLayers.Util.extend(this.DEFAULT_CONFIG,{proxy:OpenLayers.ProxyHost});
e=e||{},e.headers=e.headers||{},e=OpenLayers.Util.applyDefaults(e,t),e.headers=OpenLayers.Util.applyDefaults(e.headers,t.headers);
var i,t=!1;for(i in e.headers)e.headers.hasOwnProperty(i)&&"x-requested-with"===i.toLowerCase()&&(t=!0);
!1===t&&(e.headers["X-Requested-With"]="XMLHttpRequest");var r=new OpenLayers.Request.XMLHttpRequest,s=OpenLayers.Util.urlAppend(e.url,OpenLayers.Util.getParameterString(e.params||{})),s=OpenLayers.Request.makeSameOrigin(s,e.proxy);
r.open(e.method,s,e.async,e.user,e.password);for(var n in e.headers)r.setRequestHeader(n,e.headers[n]);
var a=this.events,o=this;return r.onreadystatechange=function(){r.readyState==OpenLayers.Request.XMLHttpRequest.DONE&&!1!==a.triggerEvent("complete",{request:r,config:e,requestUrl:s})&&o.runCallbacks({request:r,config:e,requestUrl:s})
},!1===e.async?r.send(e.data):window.setTimeout(function(){0!==r.readyState&&r.send(e.data)
},0),r},runCallbacks:function(e){var t,i=e.request,r=e.config,s=r.scope?OpenLayers.Function.bind(r.callback,r.scope):r.callback;
r.success&&(t=r.scope?OpenLayers.Function.bind(r.success,r.scope):r.success);var n;
r.failure&&(n=r.scope?OpenLayers.Function.bind(r.failure,r.scope):r.failure),"file:"==OpenLayers.Util.createUrlObject(r.url).protocol&&i.responseText&&(i.status=200),s(i),(!i.status||200<=i.status&&300>i.status)&&(this.events.triggerEvent("success",e),t&&t(i)),i.status&&(200>i.status||300<=i.status)&&(this.events.triggerEvent("failure",e),n&&n(i))
},GET:function(e){return e=OpenLayers.Util.extend(e,{method:"GET"}),OpenLayers.Request.issue(e)
},POST:function(e){return e=OpenLayers.Util.extend(e,{method:"POST"}),e.headers=e.headers?e.headers:{},"CONTENT-TYPE"in OpenLayers.Util.upperCaseObject(e.headers)||(e.headers["Content-Type"]="application/xml"),OpenLayers.Request.issue(e)
},PUT:function(e){return e=OpenLayers.Util.extend(e,{method:"PUT"}),e.headers=e.headers?e.headers:{},"CONTENT-TYPE"in OpenLayers.Util.upperCaseObject(e.headers)||(e.headers["Content-Type"]="application/xml"),OpenLayers.Request.issue(e)
},DELETE:function(e){return e=OpenLayers.Util.extend(e,{method:"DELETE"}),OpenLayers.Request.issue(e)
},HEAD:function(e){return e=OpenLayers.Util.extend(e,{method:"HEAD"}),OpenLayers.Request.issue(e)
},OPTIONS:function(e){return e=OpenLayers.Util.extend(e,{method:"OPTIONS"}),OpenLayers.Request.issue(e)
}}),OpenLayers.Layer.ArcIMS=OpenLayers.Class(OpenLayers.Layer.Grid,{DEFAULT_PARAMS:{ClientVersion:"9.2",ServiceName:""},featureCoordSys:"4326",filterCoordSys:"4326",layers:null,async:!0,name:"ArcIMS",isBaseLayer:!0,DEFAULT_OPTIONS:{tileSize:new OpenLayers.Size(512,512),featureCoordSys:"4326",filterCoordSys:"4326",layers:null,isBaseLayer:!0,async:!0,name:"ArcIMS"},initialize:function(e,t,i){this.tileSize=new OpenLayers.Size(512,512),this.params=OpenLayers.Util.applyDefaults({ServiceName:i.serviceName},this.DEFAULT_PARAMS),this.options=OpenLayers.Util.applyDefaults(i,this.DEFAULT_OPTIONS),OpenLayers.Layer.Grid.prototype.initialize.apply(this,[e,t,this.params,i]),this.transparent&&(this.isBaseLayer||(this.isBaseLayer=!1),"image/jpeg"==this.format&&(this.format=OpenLayers.Util.alphaHack()?"image/gif":"image/png")),null===this.options.layers&&(this.options.layers=[])
},getURL:function(e){var t="";return e=this.adjustBounds(e),e=new OpenLayers.Format.ArcXML(OpenLayers.Util.extend(this.options,{requesttype:"image",envelope:e.toArray(),tileSize:this.tileSize})),e=new OpenLayers.Request.POST({url:this.getFullRequestString(),data:e.write(),async:!1}),null!=e&&(t=e.responseXML,t&&t.documentElement||(t=e.responseText),t=(new OpenLayers.Format.ArcXML).read(t),t=this.getUrlOrImage(t.image.output)),t
},getURLasync:function(e,t,i){e=this.adjustBounds(e),e=new OpenLayers.Format.ArcXML(OpenLayers.Util.extend(this.options,{requesttype:"image",envelope:e.toArray(),tileSize:this.tileSize})),OpenLayers.Request.POST({url:this.getFullRequestString(),async:!0,data:e.write(),callback:function(e){var r=e.responseXML;
r&&r.documentElement||(r=e.responseText),e=(new OpenLayers.Format.ArcXML).read(r),t.call(i,this.getUrlOrImage(e.image.output))
},scope:this})},getUrlOrImage:function(e){var t="";return e.url?t=e.url:e.data&&(t="data:image/"+e.type+";base64,"+e.data),t
},setLayerQuery:function(e,t){for(var i=0;i<this.options.layers.length;i++)if(e==this.options.layers[i].id)return this.options.layers[i].query=t,void 0;
this.options.layers.push({id:e,visible:!0,query:t})},getFeatureInfo:function(e,t,i){var r=i.buffer||1,s=i.callback||function(){},n=i.scope||window,a={};
OpenLayers.Util.extend(a,this.options),a.requesttype="feature",e instanceof OpenLayers.LonLat?(a.polygon=null,a.envelope=[e.lon-r,e.lat-r,e.lon+r,e.lat+r]):e instanceof OpenLayers.Geometry.Polygon&&(a.envelope=null,a.polygon=e);
var o=new OpenLayers.Format.ArcXML(a);OpenLayers.Util.extend(o.request.get_feature,i),o.request.get_feature.layer=t.id,"number"==typeof t.query.accuracy?o.request.get_feature.query.accuracy=t.query.accuracy:(e=this.map.getCenter(),i=this.map.getViewPortPxFromLonLat(e),i.x++,i=this.map.getLonLatFromPixel(i),o.request.get_feature.query.accuracy=i.lon-e.lon),o.request.get_feature.query.where=t.query.where,o.request.get_feature.query.spatialfilter.relation="area_intersection",OpenLayers.Request.POST({url:this.getFullRequestString({CustomService:"Query"}),data:o.write(),callback:function(e){e=o.parseResponse(e.responseText),o.iserror()?s.call(n,null):s.call(n,e.features)
}})},clone:function(e){return null==e&&(e=new OpenLayers.Layer.ArcIMS(this.name,this.url,this.getOptions())),e=OpenLayers.Layer.Grid.prototype.clone.apply(this,[e])
},CLASS_NAME:"OpenLayers.Layer.ArcIMS"}),OpenLayers.Control.PanZoom=OpenLayers.Class(OpenLayers.Control,{slideFactor:50,slideRatio:null,buttons:null,position:null,initialize:function(){this.position=new OpenLayers.Pixel(OpenLayers.Control.PanZoom.X,OpenLayers.Control.PanZoom.Y),OpenLayers.Control.prototype.initialize.apply(this,arguments)
},destroy:function(){this.map&&this.map.events.unregister("buttonclick",this,this.onButtonClick),this.removeButtons(),this.position=this.buttons=null,OpenLayers.Control.prototype.destroy.apply(this,arguments)
},setMap:function(){OpenLayers.Control.prototype.setMap.apply(this,arguments),this.map.events.register("buttonclick",this,this.onButtonClick)
},draw:function(e){OpenLayers.Control.prototype.draw.apply(this,arguments),e=this.position,this.buttons=[];
var t={w:18,h:18},i=new OpenLayers.Pixel(e.x+t.w/2,e.y);return this._addButton("panup","north-mini.png",i,t),e.y=i.y+t.h,this._addButton("panleft","west-mini.png",e,t),this._addButton("panright","east-mini.png",e.add(t.w,0),t),this._addButton("pandown","south-mini.png",i.add(0,2*t.h),t),this._addButton("zoomin","zoom-plus-mini.png",i.add(0,3*t.h+5),t),this._addButton("zoomworld","zoom-world-mini.png",i.add(0,4*t.h+5),t),this._addButton("zoomout","zoom-minus-mini.png",i.add(0,5*t.h+5),t),this.div
},_addButton:function(e,t,i,r){return t=OpenLayers.Util.getImageLocation(t),i=OpenLayers.Util.createAlphaImageDiv(this.id+"_"+e,i,r,t,"absolute"),i.style.cursor="pointer",this.div.appendChild(i),i.action=e,i.className="olButton",this.buttons.push(i),i
},_removeButton:function(e){this.div.removeChild(e),OpenLayers.Util.removeItem(this.buttons,e)
},removeButtons:function(){for(var e=this.buttons.length-1;e>=0;--e)this._removeButton(this.buttons[e])
},onButtonClick:function(e){switch(e.buttonElement.action){case"panup":this.map.pan(0,-this.getSlideFactor("h"));
break;case"pandown":this.map.pan(0,this.getSlideFactor("h"));break;case"panleft":this.map.pan(-this.getSlideFactor("w"),0);
break;case"panright":this.map.pan(this.getSlideFactor("w"),0);break;case"zoomin":this.map.zoomIn();
break;case"zoomout":this.map.zoomOut();break;case"zoomworld":this.map.zoomToMaxExtent()
}},getSlideFactor:function(e){return this.slideRatio?this.map.getSize()[e]*this.slideRatio:this.slideFactor
},CLASS_NAME:"OpenLayers.Control.PanZoom"}),OpenLayers.Control.PanZoom.X=4,OpenLayers.Control.PanZoom.Y=4,OpenLayers.Control.PanZoomBar=OpenLayers.Class(OpenLayers.Control.PanZoom,{zoomStopWidth:18,zoomStopHeight:11,slider:null,sliderEvents:null,zoombarDiv:null,zoomWorldIcon:!1,panIcons:!0,forceFixedZoomLevel:!1,mouseDragStart:null,deltaY:null,zoomStart:null,destroy:function(){this._removeZoomBar(),this.map.events.un({changebaselayer:this.redraw,updatesize:this.redraw,scope:this}),OpenLayers.Control.PanZoom.prototype.destroy.apply(this,arguments),delete this.mouseDragStart,delete this.zoomStart
},setMap:function(){OpenLayers.Control.PanZoom.prototype.setMap.apply(this,arguments),this.map.events.on({changebaselayer:this.redraw,updatesize:this.redraw,scope:this})
},redraw:function(){null!=this.div&&(this.removeButtons(),this._removeZoomBar()),this.draw()
},draw:function(e){OpenLayers.Control.prototype.draw.apply(this,arguments),e=this.position.clone(),this.buttons=[];
var t={w:18,h:18};if(this.panIcons){var i=new OpenLayers.Pixel(e.x+t.w/2,e.y),r=t.w;
this.zoomWorldIcon&&(i=new OpenLayers.Pixel(e.x+t.w,e.y)),this._addButton("panup","north-mini.png",i,t),e.y=i.y+t.h,this._addButton("panleft","west-mini.png",e,t),this.zoomWorldIcon&&(this._addButton("zoomworld","zoom-world-mini.png",e.add(t.w,0),t),r*=2),this._addButton("panright","east-mini.png",e.add(r,0),t),this._addButton("pandown","south-mini.png",i.add(0,2*t.h),t),this._addButton("zoomin","zoom-plus-mini.png",i.add(0,3*t.h+5),t),i=this._addZoomBar(i.add(0,4*t.h+5)),this._addButton("zoomout","zoom-minus-mini.png",i,t)
}else this._addButton("zoomin","zoom-plus-mini.png",e,t),i=this._addZoomBar(e.add(0,t.h)),this._addButton("zoomout","zoom-minus-mini.png",i,t),this.zoomWorldIcon&&(i=i.add(0,t.h+3),this._addButton("zoomworld","zoom-world-mini.png",i,t));
return this.div},_addZoomBar:function(e){var t=OpenLayers.Util.getImageLocation("slider.png"),i=this.id+"_"+this.map.id,r=this.map.getMinZoom(),s=this.map.getNumZoomLevels()-1-this.map.getZoom(),s=OpenLayers.Util.createAlphaImageDiv(i,e.add(-1,s*this.zoomStopHeight),{w:20,h:9},t,"absolute");
s.style.cursor="move",this.slider=s,this.sliderEvents=new OpenLayers.Events(this,s,null,!0,{includeXY:!0}),this.sliderEvents.on({touchstart:this.zoomBarDown,touchmove:this.zoomBarDrag,touchend:this.zoomBarUp,mousedown:this.zoomBarDown,mousemove:this.zoomBarDrag,mouseup:this.zoomBarUp});
var n={w:this.zoomStopWidth,h:this.zoomStopHeight*(this.map.getNumZoomLevels()-r)},t=OpenLayers.Util.getImageLocation("zoombar.png"),i=null;
return OpenLayers.Util.alphaHack()?(i=this.id+"_"+this.map.id,i=OpenLayers.Util.createAlphaImageDiv(i,e,{w:n.w,h:this.zoomStopHeight},t,"absolute",null,"crop"),i.style.height=n.h+"px"):i=OpenLayers.Util.createDiv("OpenLayers_Control_PanZoomBar_Zoombar"+this.map.id,e,n,t),i.style.cursor="pointer",i.className="olButton",this.zoombarDiv=i,this.div.appendChild(i),this.startTop=parseInt(i.style.top),this.div.appendChild(s),this.map.events.register("zoomend",this,this.moveZoomBar),e=e.add(0,this.zoomStopHeight*(this.map.getNumZoomLevels()-r))
},_removeZoomBar:function(){this.sliderEvents.un({touchstart:this.zoomBarDown,touchmove:this.zoomBarDrag,touchend:this.zoomBarUp,mousedown:this.zoomBarDown,mousemove:this.zoomBarDrag,mouseup:this.zoomBarUp}),this.sliderEvents.destroy(),this.div.removeChild(this.zoombarDiv),this.zoombarDiv=null,this.div.removeChild(this.slider),this.slider=null,this.map.events.unregister("zoomend",this,this.moveZoomBar)
},onButtonClick:function(e){if(OpenLayers.Control.PanZoom.prototype.onButtonClick.apply(this,arguments),e.buttonElement===this.zoombarDiv){var t=e.buttonXY.y/this.zoomStopHeight;
(this.forceFixedZoomLevel||!this.map.fractionalZoom)&&(t=Math.floor(t)),t=this.map.getNumZoomLevels()-1-t,t=Math.min(Math.max(t,0),this.map.getNumZoomLevels()-1),this.map.zoomTo(t)
}},passEventToSlider:function(e){this.sliderEvents.handleBrowserEvent(e)},zoomBarDown:function(e){(OpenLayers.Event.isLeftClick(e)||OpenLayers.Event.isSingleTouch(e))&&(this.map.events.on({touchmove:this.passEventToSlider,mousemove:this.passEventToSlider,mouseup:this.passEventToSlider,scope:this}),this.mouseDragStart=e.xy.clone(),this.zoomStart=e.xy.clone(),this.div.style.cursor="move",this.zoombarDiv.offsets=null,OpenLayers.Event.stop(e))
},zoomBarDrag:function(e){if(null!=this.mouseDragStart){var t=this.mouseDragStart.y-e.xy.y,i=OpenLayers.Util.pagePosition(this.zoombarDiv);
0<e.clientY-i[1]&&e.clientY-i[1]<parseInt(this.zoombarDiv.style.height)-2&&(t=parseInt(this.slider.style.top)-t,this.slider.style.top=t+"px",this.mouseDragStart=e.xy.clone()),this.deltaY=this.zoomStart.y-e.xy.y,OpenLayers.Event.stop(e)
}},zoomBarUp:function(e){if((OpenLayers.Event.isLeftClick(e)||"touchend"===e.type)&&this.mouseDragStart){this.div.style.cursor="",this.map.events.un({touchmove:this.passEventToSlider,mouseup:this.passEventToSlider,mousemove:this.passEventToSlider,scope:this});
var t=this.map.zoom;!this.forceFixedZoomLevel&&this.map.fractionalZoom?(t+=this.deltaY/this.zoomStopHeight,t=Math.min(Math.max(t,0),this.map.getNumZoomLevels()-1)):(t+=this.deltaY/this.zoomStopHeight,t=Math.max(Math.round(t),0)),this.map.zoomTo(t),this.zoomStart=this.mouseDragStart=null,this.deltaY=0,OpenLayers.Event.stop(e)
}},moveZoomBar:function(){var e=(this.map.getNumZoomLevels()-1-this.map.getZoom())*this.zoomStopHeight+this.startTop+1;
this.slider.style.top=e+"px"},CLASS_NAME:"OpenLayers.Control.PanZoomBar"}),OpenLayers.Format.WFSCapabilities=OpenLayers.Class(OpenLayers.Format.XML.VersionedOGC,{defaultVersion:"1.1.0",CLASS_NAME:"OpenLayers.Format.WFSCapabilities"}),OpenLayers.Format.WFSCapabilities.v1=OpenLayers.Class(OpenLayers.Format.XML,{namespaces:{wfs:"http://www.opengis.net/wfs",xlink:"http://www.w3.org/1999/xlink",xsi:"http://www.w3.org/2001/XMLSchema-instance",ows:"http://www.opengis.net/ows"},errorProperty:"featureTypeList",defaultPrefix:"wfs",read:function(e){"string"==typeof e&&(e=OpenLayers.Format.XML.prototype.read.apply(this,[e])),e&&9==e.nodeType&&(e=e.documentElement);
var t={};return this.readNode(e,t),t},readers:{wfs:{WFS_Capabilities:function(e,t){this.readChildNodes(e,t)
},FeatureTypeList:function(e,t){t.featureTypeList={featureTypes:[]},this.readChildNodes(e,t.featureTypeList)
},FeatureType:function(e,t){var i={};this.readChildNodes(e,i),t.featureTypes.push(i)
},Name:function(e,t){var i=this.getChildValue(e);i&&(i=i.split(":"),t.name=i.pop(),0<i.length&&(t.featureNS=this.lookupNamespaceURI(e,i[0])))
},Title:function(e,t){var i=this.getChildValue(e);i&&(t.title=i)},Abstract:function(e,t){var i=this.getChildValue(e);
i&&(t["abstract"]=i)}}},CLASS_NAME:"OpenLayers.Format.WFSCapabilities.v1"}),OpenLayers.Format.WFSCapabilities.v1_1_0=OpenLayers.Class(OpenLayers.Format.WFSCapabilities.v1,{regExes:{trimSpace:/^\s*|\s*$/g,removeSpace:/\s*/g,splitSpace:/\s+/,trimComma:/\s*,\s*/g},readers:{wfs:OpenLayers.Util.applyDefaults({DefaultSRS:function(e,t){var i=this.getChildValue(e);
i&&(t.srs=i)}},OpenLayers.Format.WFSCapabilities.v1.prototype.readers.wfs),ows:OpenLayers.Format.OWSCommon.v1.prototype.readers.ows},CLASS_NAME:"OpenLayers.Format.WFSCapabilities.v1_1_0"}),OpenLayers.Layer.Image=OpenLayers.Class(OpenLayers.Layer,{isBaseLayer:!0,url:null,extent:null,size:null,tile:null,aspectRatio:null,initialize:function(e,t,i,r,s){this.url=t,this.maxExtent=this.extent=i,this.size=r,OpenLayers.Layer.prototype.initialize.apply(this,[e,s]),this.aspectRatio=this.extent.getHeight()/this.size.h/(this.extent.getWidth()/this.size.w)
},destroy:function(){this.tile&&(this.removeTileMonitoringHooks(this.tile),this.tile.destroy(),this.tile=null),OpenLayers.Layer.prototype.destroy.apply(this,arguments)
},clone:function(e){return null==e&&(e=new OpenLayers.Layer.Image(this.name,this.url,this.extent,this.size,this.getOptions())),e=OpenLayers.Layer.prototype.clone.apply(this,[e])
},setMap:function(){null==this.options.maxResolution&&(this.options.maxResolution=this.aspectRatio*this.extent.getWidth()/this.size.w),OpenLayers.Layer.prototype.setMap.apply(this,arguments)
},moveTo:function(e,t){OpenLayers.Layer.prototype.moveTo.apply(this,arguments);var i=null==this.tile;
if(t||i){this.setTileSize();var r=this.map.getLayerPxFromLonLat({lon:this.extent.left,lat:this.extent.top});
i?(this.tile=new OpenLayers.Tile.Image(this,r,this.extent,null,this.tileSize),this.addTileMonitoringHooks(this.tile)):(this.tile.size=this.tileSize.clone(),this.tile.position=r.clone()),this.tile.draw()
}},setTileSize:function(){var e=this.extent.getWidth()/this.map.getResolution(),t=this.extent.getHeight()/this.map.getResolution();
this.tileSize=new OpenLayers.Size(e,t)},addTileMonitoringHooks:function(e){e.onLoadStart=function(){this.events.triggerEvent("loadstart")
},e.events.register("loadstart",this,e.onLoadStart),e.onLoadEnd=function(){this.events.triggerEvent("loadend")
},e.events.register("loadend",this,e.onLoadEnd),e.events.register("unload",this,e.onLoadEnd)
},removeTileMonitoringHooks:function(e){e.unload(),e.events.un({loadstart:e.onLoadStart,loadend:e.onLoadEnd,unload:e.onLoadEnd,scope:this})
},setUrl:function(e){this.url=e,this.tile.draw()},getURL:function(){return this.url
},CLASS_NAME:"OpenLayers.Layer.Image"}),OpenLayers.Strategy=OpenLayers.Class({layer:null,options:null,active:null,autoActivate:!0,autoDestroy:!0,initialize:function(e){OpenLayers.Util.extend(this,e),this.options=e,this.active=!1
},destroy:function(){this.deactivate(),this.options=this.layer=null},setLayer:function(e){this.layer=e
},activate:function(){return this.active?!1:this.active=!0},deactivate:function(){return this.active?(this.active=!1,!0):!1
},CLASS_NAME:"OpenLayers.Strategy"}),OpenLayers.Strategy.Save=OpenLayers.Class(OpenLayers.Strategy,{events:null,auto:!1,timer:null,initialize:function(e){OpenLayers.Strategy.prototype.initialize.apply(this,[e]),this.events=new OpenLayers.Events(this)
},activate:function(){var e=OpenLayers.Strategy.prototype.activate.call(this);return e&&this.auto&&("number"==typeof this.auto?this.timer=window.setInterval(OpenLayers.Function.bind(this.save,this),1e3*this.auto):this.layer.events.on({featureadded:this.triggerSave,afterfeaturemodified:this.triggerSave,scope:this})),e
},deactivate:function(){var e=OpenLayers.Strategy.prototype.deactivate.call(this);
return e&&this.auto&&("number"==typeof this.auto?window.clearInterval(this.timer):this.layer.events.un({featureadded:this.triggerSave,afterfeaturemodified:this.triggerSave,scope:this})),e
},triggerSave:function(e){var t=e.feature;t.state!==OpenLayers.State.INSERT&&t.state!==OpenLayers.State.UPDATE&&t.state!==OpenLayers.State.DELETE||this.save([e.feature])
},save:function(e){e||(e=this.layer.features),this.events.triggerEvent("start",{features:e});
var t=this.layer.projection,i=this.layer.map.getProjectionObject();if(!i.equals(t)){for(var r,s,n=e.length,a=Array(n),o=0;n>o;++o)r=e[o],s=r.clone(),s.fid=r.fid,s.state=r.state,r.url&&(s.url=r.url),s._original=r,s.geometry.transform(i,t),a[o]=s;
e=a}this.layer.protocol.commit(e,{callback:this.onCommit,scope:this})},onCommit:function(e){var t={response:e};
if(e.success()){for(var i,r=e.reqFeatures,s=[],n=e.insertIds||[],a=0,o=0,l=r.length;l>o;++o)i=r[o],i=i._original||i,(e=i.state)&&(e==OpenLayers.State.DELETE?s.push(i):e==OpenLayers.State.INSERT&&(i.fid=n[a],++a),i.state=null);
0<s.length&&this.layer.destroyFeatures(s),this.events.triggerEvent("success",t)}else this.events.triggerEvent("fail",t)
},CLASS_NAME:"OpenLayers.Strategy.Save"}),OpenLayers.Events.featureclick=OpenLayers.Class({cache:null,map:null,provides:["featureclick","nofeatureclick","featureover","featureout"],initialize:function(e){if(this.target=e,e.object instanceof OpenLayers.Map)this.setMap(e.object);
else{if(!(e.object instanceof OpenLayers.Layer.Vector))throw"Listeners for '"+this.provides.join("', '")+"' events can only be registered for OpenLayers.Layer.Vector or OpenLayers.Map instances";
e.object.map?this.setMap(e.object.map):e.object.events.register("added",this,function(){this.setMap(e.object.map)
})}for(var t=this.provides.length-1;t>=0;--t)e.extensions[this.provides[t]]=!0},setMap:function(e){this.map=e,this.cache={},e.events.register("mousedown",this,this.start,{extension:!0}),e.events.register("mouseup",this,this.onClick,{extension:!0}),e.events.register("touchstart",this,this.start,{extension:!0}),e.events.register("touchmove",this,this.cancel,{extension:!0}),e.events.register("touchend",this,this.onClick,{extension:!0}),e.events.register("mousemove",this,this.onMousemove,{extension:!0})
},start:function(e){this.startEvt=e},cancel:function(){delete this.startEvt},onClick:function(e){if(this.startEvt&&("touchend"===e.type||OpenLayers.Event.isLeftClick(e))){e=this.getFeatures(this.startEvt),delete this.startEvt;
for(var t,i,r={},s=0,n=e.length;n>s&&(t=e[s],i=t.layer,r[i.id]=!0,t=this.triggerEvent("featureclick",{feature:t}),!1!==t);++s);for(s=0,n=this.map.layers.length;n>s;++s)i=this.map.layers[s],i instanceof OpenLayers.Layer.Vector&&!r[i.id]&&this.triggerEvent("nofeatureclick",{layer:i})
}},onMousemove:function(e){delete this.startEvt;var t=this.getFeatures(e),i={};e=[];
for(var r,s=0,n=t.length;n>s;++s)r=t[s],i[r.id]=r,this.cache[r.id]||e.push(r);var a,t=[];
for(a in this.cache)r=this.cache[a],r.layer&&r.layer.map?i[r.id]||t.push(r):delete this.cache[a];
for(s=0,n=e.length;n>s&&(r=e[s],this.cache[r.id]=r,a=this.triggerEvent("featureover",{feature:r}),!1!==a);++s);for(s=0,n=t.length;n>s&&(r=t[s],delete this.cache[r.id],a=this.triggerEvent("featureout",{feature:r}),!1!==a);++s);},triggerEvent:function(e,t){var i=t.feature?t.feature.layer:t.layer,r=this.target.object;
return r instanceof OpenLayers.Map||r===i?this.target.triggerEvent(e,t):void 0},getFeatures:function(e){var t,i,r,s,n=e.clientX,a=e.clientY,o=[],l=[],h=[];
for(s=this.map.layers.length-1;s>=0;--s)if(t=this.map.layers[s],"none"!==t.div.style.display)if(t.renderer instanceof OpenLayers.Renderer.Elements){if(t instanceof OpenLayers.Layer.Vector)for(i=document.elementFromPoint(n,a);i&&i._featureId;)(r=t.getFeatureById(i._featureId))?(o.push(r),i.style.display="none",l.push(i),i=document.elementFromPoint(n,a)):i=!1;
h.push(t),t.div.style.display="none"}else t.renderer instanceof OpenLayers.Renderer.Canvas&&(r=t.renderer.getFeatureIdFromEvent(e))&&(o.push(r),h.push(t));
for(s=0,e=l.length;e>s;++s)l[s].style.display="";for(s=h.length-1;s>=0;--s)h[s].div.style.display="block";
return o},destroy:function(){for(var e=this.provides.length-1;e>=0;--e)delete this.target.extensions[this.provides[e]];
this.map.events.un({mousemove:this.onMousemove,mousedown:this.start,mouseup:this.onClick,touchstart:this.start,touchmove:this.cancel,touchend:this.onClick,scope:this}),delete this.cache,delete this.map,delete this.target
}}),OpenLayers.Events.nofeatureclick=OpenLayers.Events.featureclick,OpenLayers.Events.featureover=OpenLayers.Events.featureclick,OpenLayers.Events.featureout=OpenLayers.Events.featureclick,OpenLayers.Format.GPX=OpenLayers.Class(OpenLayers.Format.XML,{defaultDesc:"No description available",extractWaypoints:!0,extractTracks:!0,extractRoutes:!0,extractAttributes:!0,namespaces:{gpx:"http://www.topografix.com/GPX/1/1",xsi:"http://www.w3.org/2001/XMLSchema-instance"},schemaLocation:"http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd",creator:"OpenLayers",initialize:function(e){this.externalProjection=new OpenLayers.Projection("EPSG:4326"),OpenLayers.Format.XML.prototype.initialize.apply(this,[e])
},read:function(e){"string"==typeof e&&(e=OpenLayers.Format.XML.prototype.read.apply(this,[e]));
var t=[];if(this.extractTracks)for(var i=e.getElementsByTagName("trk"),r=0,s=i.length;s>r;r++){var n={};
this.extractAttributes&&(n=this.parseAttributes(i[r]));for(var a=this.getElementsByTagNameNS(i[r],i[r].namespaceURI,"trkseg"),o=0,l=a.length;l>o;o++){var h=this.extractSegment(a[o],"trkpt");
t.push(new OpenLayers.Feature.Vector(h,n))}}if(this.extractRoutes)for(s=e.getElementsByTagName("rte"),i=0,r=s.length;r>i;i++)n={},this.extractAttributes&&(n=this.parseAttributes(s[i])),a=this.extractSegment(s[i],"rtept"),t.push(new OpenLayers.Feature.Vector(a,n));
if(this.extractWaypoints)for(e=e.getElementsByTagName("wpt"),i=0,s=e.length;s>i;i++)n={},this.extractAttributes&&(n=this.parseAttributes(e[i])),r=new OpenLayers.Geometry.Point(e[i].getAttribute("lon"),e[i].getAttribute("lat")),t.push(new OpenLayers.Feature.Vector(r,n));
if(this.internalProjection&&this.externalProjection)for(n=0,e=t.length;e>n;n++)t[n].geometry.transform(this.externalProjection,this.internalProjection);
return t},extractSegment:function(e,t){for(var i=this.getElementsByTagNameNS(e,e.namespaceURI,t),r=[],s=0,n=i.length;n>s;s++)r.push(new OpenLayers.Geometry.Point(i[s].getAttribute("lon"),i[s].getAttribute("lat")));
return new OpenLayers.Geometry.LineString(r)},parseAttributes:function(e){var t={};
e=e.firstChild;for(var i,r;e;)1==e.nodeType&&e.firstChild&&(i=e.firstChild,3==i.nodeType||4==i.nodeType)&&(r=e.prefix?e.nodeName.split(":")[1]:e.nodeName,"trkseg"!=r&&"rtept"!=r&&(t[r]=i.nodeValue)),e=e.nextSibling;
return t},write:function(e,t){e=OpenLayers.Util.isArray(e)?e:[e];var i=this.createElementNS(this.namespaces.gpx,"gpx");
i.setAttribute("version","1.1"),i.setAttribute("creator",this.creator),this.setAttributes(i,{"xsi:schemaLocation":this.schemaLocation}),t&&"object"==typeof t&&i.appendChild(this.buildMetadataNode(t));
for(var r=0,s=e.length;s>r;r++)i.appendChild(this.buildFeatureNode(e[r]));return OpenLayers.Format.XML.prototype.write.apply(this,[i])
},buildMetadataNode:function(e){for(var t=["name","desc","author"],i=this.createElementNS(this.namespaces.gpx,"metadata"),r=0;r<t.length;r++){var s=t[r];
if(e[s]){var n=this.createElementNS(this.namespaces.gpx,s);n.appendChild(this.createTextNode(e[s])),i.appendChild(n)
}}return i},buildFeatureNode:function(e){var t=e.geometry,t=t.clone();if(this.internalProjection&&this.externalProjection&&t.transform(this.internalProjection,this.externalProjection),"OpenLayers.Geometry.Point"==t.CLASS_NAME){var i=this.buildWptNode(t);
return this.appendAttributesNode(i,e),i}i=this.createElementNS(this.namespaces.gpx,"trk"),this.appendAttributesNode(i,e),e=this.buildTrkSegNode(t),e=OpenLayers.Util.isArray(e)?e:[e];
for(var t=0,r=e.length;r>t;t++)i.appendChild(e[t]);return i},buildTrkSegNode:function(e){var t,i,r,s;
if("OpenLayers.Geometry.LineString"==e.CLASS_NAME||"OpenLayers.Geometry.LinearRing"==e.CLASS_NAME){for(t=this.createElementNS(this.namespaces.gpx,"trkseg"),i=0,r=e.components.length;r>i;i++)s=e.components[i],t.appendChild(this.buildTrkPtNode(s));
return t}for(t=[],i=0,r=e.components.length;r>i;i++)t.push(this.buildTrkSegNode(e.components[i]));
return t},buildTrkPtNode:function(e){var t=this.createElementNS(this.namespaces.gpx,"trkpt");
return t.setAttribute("lon",e.x),t.setAttribute("lat",e.y),t},buildWptNode:function(e){var t=this.createElementNS(this.namespaces.gpx,"wpt");
return t.setAttribute("lon",e.x),t.setAttribute("lat",e.y),t},appendAttributesNode:function(e,t){var i=this.createElementNS(this.namespaces.gpx,"name");
i.appendChild(this.createTextNode(t.attributes.name||t.id)),e.appendChild(i),i=this.createElementNS(this.namespaces.gpx,"desc"),i.appendChild(this.createTextNode(t.attributes.description||this.defaultDesc)),e.appendChild(i)
},CLASS_NAME:"OpenLayers.Format.GPX"}),OpenLayers.Format.WMSDescribeLayer=OpenLayers.Class(OpenLayers.Format.XML.VersionedOGC,{defaultVersion:"1.1.1",CLASS_NAME:"OpenLayers.Format.WMSDescribeLayer"}),OpenLayers.Format.WMSDescribeLayer.v1_1_1=OpenLayers.Class(OpenLayers.Format.WMSDescribeLayer,{initialize:function(e){OpenLayers.Format.WMSDescribeLayer.prototype.initialize.apply(this,[e])
},read:function(e){"string"==typeof e&&(e=OpenLayers.Format.XML.prototype.read.apply(this,[e]));
for(var t,i,r=e.documentElement.childNodes,s={layerDescriptions:[]},n=0;n<r.length;++n)if(t=r[n],i=t.nodeName,"LayerDescription"==i){i=t.getAttribute("name");
var a="",o="",l="";t.getAttribute("owsType")?(a=t.getAttribute("owsType"),o=t.getAttribute("owsURL")):""!=t.getAttribute("wfs")?(a="WFS",o=t.getAttribute("wfs")):""!=t.getAttribute("wcs")&&(a="WCS",o=t.getAttribute("wcs")),t=t.getElementsByTagName("Query"),0<t.length&&((l=t[0].getAttribute("typeName"))||(l=t[0].getAttribute("typename"))),t={layerName:i,owsType:a,owsURL:o,typeName:l},s.layerDescriptions.push(t),s.length=s.layerDescriptions.length,s[s.length-1]=t
}else if("ServiceException"==i)return{error:(new OpenLayers.Format.OGCExceptionReport).read(e)};
return s},CLASS_NAME:"OpenLayers.Format.WMSDescribeLayer.v1_1_1"}),OpenLayers.Format.WMSDescribeLayer.v1_1_0=OpenLayers.Format.WMSDescribeLayer.v1_1_1,OpenLayers.Layer.XYZ=OpenLayers.Class(OpenLayers.Layer.Grid,{isBaseLayer:!0,sphericalMercator:!1,zoomOffset:0,serverResolutions:null,initialize:function(e,t,i){(i&&i.sphericalMercator||this.sphericalMercator)&&(i=OpenLayers.Util.extend({projection:"EPSG:900913",numZoomLevels:19},i)),OpenLayers.Layer.Grid.prototype.initialize.apply(this,[e||this.name,t||this.url,{},i])
},clone:function(e){return null==e&&(e=new OpenLayers.Layer.XYZ(this.name,this.url,this.getOptions())),e=OpenLayers.Layer.Grid.prototype.clone.apply(this,[e])
},getURL:function(e){e=this.getXYZ(e);var t=this.url;return OpenLayers.Util.isArray(t)&&(t=this.selectUrl(""+e.x+e.y+e.z,t)),OpenLayers.String.format(t,e)
},getXYZ:function(e){var t=this.getServerResolution(),i=Math.round((e.left-this.maxExtent.left)/(t*this.tileSize.w));
if(e=Math.round((this.maxExtent.top-e.top)/(t*this.tileSize.h)),t=this.getServerZoom(),this.wrapDateLine)var r=Math.pow(2,t),i=(i%r+r)%r;
return{x:i,y:e,z:t}},setMap:function(){OpenLayers.Layer.Grid.prototype.setMap.apply(this,arguments),this.tileOrigin||(this.tileOrigin=new OpenLayers.LonLat(this.maxExtent.left,this.maxExtent.bottom))
},CLASS_NAME:"OpenLayers.Layer.XYZ"}),OpenLayers.Layer.OSM=OpenLayers.Class(OpenLayers.Layer.XYZ,{name:"OpenStreetMap",url:["http://a.tile.openstreetmap.org/${z}/${x}/${y}.png","http://b.tile.openstreetmap.org/${z}/${x}/${y}.png","http://c.tile.openstreetmap.org/${z}/${x}/${y}.png"],attribution:"&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors",sphericalMercator:!0,wrapDateLine:!0,tileOptions:null,initialize:function(){OpenLayers.Layer.XYZ.prototype.initialize.apply(this,arguments),this.tileOptions=OpenLayers.Util.extend({crossOriginKeyword:"anonymous"},this.options&&this.options.tileOptions)
},clone:function(e){return null==e&&(e=new OpenLayers.Layer.OSM(this.name,this.url,this.getOptions())),e=OpenLayers.Layer.XYZ.prototype.clone.apply(this,[e])
},CLASS_NAME:"OpenLayers.Layer.OSM"}),OpenLayers.Renderer=OpenLayers.Class({container:null,root:null,extent:null,locked:!1,size:null,resolution:null,map:null,featureDx:0,initialize:function(e,t){this.container=OpenLayers.Util.getElement(e),OpenLayers.Util.extend(this,t)
},destroy:function(){this.map=this.resolution=this.size=this.extent=this.container=null
},supported:function(){return!1},setExtent:function(e,t){if(this.extent=e.clone(),this.map.baseLayer&&this.map.baseLayer.wrapDateLine){var i=e.getWidth()/this.map.getExtent().getWidth();
e=e.scale(1/i),this.extent=e.wrapDateLine(this.map.getMaxExtent()).scale(i)}return t&&(this.resolution=null),!0
},setSize:function(e){this.size=e.clone(),this.resolution=null},getResolution:function(){return this.resolution=this.resolution||this.map.getResolution()
},drawFeature:function(e,t){if(null==t&&(t=e.style),e.geometry){var i=e.geometry.getBounds();
if(i){var r;if(this.map.baseLayer&&this.map.baseLayer.wrapDateLine&&(r=this.map.getMaxExtent()),i.intersectsBounds(this.extent,{worldBounds:r})?this.calculateFeatureDx(i,r):t={display:"none"},i=this.drawGeometry(e.geometry,t,e.id),"none"!=t.display&&t.label&&!1!==i){if(r=e.geometry.getCentroid(),t.labelXOffset||t.labelYOffset){var s=isNaN(t.labelXOffset)?0:t.labelXOffset,n=isNaN(t.labelYOffset)?0:t.labelYOffset,a=this.getResolution();
r.move(s*a,n*a)}this.drawText(e.id,t,r)}else this.removeText(e.id);return i}}},calculateFeatureDx:function(e,t){if(this.featureDx=0,t){var i=t.getWidth();
this.featureDx=Math.round(((e.left+e.right)/2-(this.extent.left+this.extent.right)/2)/i)*i
}},drawGeometry:function(){},drawText:function(){},removeText:function(){},clear:function(){},getFeatureIdFromEvent:function(){},eraseFeatures:function(e){OpenLayers.Util.isArray(e)||(e=[e]);
for(var t=0,i=e.length;i>t;++t){var r=e[t];this.eraseGeometry(r.geometry,r.id),this.removeText(r.id)
}},eraseGeometry:function(){},moveRoot:function(){},getRenderLayerId:function(){return this.container.id
},applyDefaultSymbolizer:function(e){var t=OpenLayers.Util.extend({},OpenLayers.Renderer.defaultSymbolizer);
return!1===e.stroke&&(delete t.strokeWidth,delete t.strokeColor),!1===e.fill&&delete t.fillColor,OpenLayers.Util.extend(t,e),t
},CLASS_NAME:"OpenLayers.Renderer"}),OpenLayers.Renderer.defaultSymbolizer={fillColor:"#000000",strokeColor:"#000000",strokeWidth:2,fillOpacity:1,strokeOpacity:1,pointRadius:0,labelAlign:"cm"},OpenLayers.Renderer.symbol={star:[350,75,379,161,469,161,397,215,423,301,350,250,277,301,303,215,231,161,321,161,350,75],cross:[4,0,6,0,6,4,10,4,10,6,6,6,6,10,4,10,4,6,0,6,0,4,4,4,4,0],x:[0,0,25,0,50,35,75,0,100,0,65,50,100,100,75,100,50,65,25,100,0,100,35,50,0,0],square:[0,0,0,1,1,1,1,0,0,0],triangle:[0,10,10,10,5,0,0,10]},OpenLayers.Renderer.Canvas=OpenLayers.Class(OpenLayers.Renderer,{hitDetection:!0,hitOverflow:0,canvas:null,features:null,pendingRedraw:!1,cachedSymbolBounds:{},initialize:function(){OpenLayers.Renderer.prototype.initialize.apply(this,arguments),this.root=document.createElement("canvas"),this.container.appendChild(this.root),this.canvas=this.root.getContext("2d"),this.features={},this.hitDetection&&(this.hitCanvas=document.createElement("canvas"),this.hitContext=this.hitCanvas.getContext("2d"))
},setExtent:function(){return OpenLayers.Renderer.prototype.setExtent.apply(this,arguments),!1
},eraseGeometry:function(e,t){this.eraseFeatures(this.features[t][0])},supported:function(){return OpenLayers.CANVAS_SUPPORTED
},setSize:function(e){this.size=e.clone();var t=this.root;t.style.width=e.w+"px",t.style.height=e.h+"px",t.width=e.w,t.height=e.h,this.resolution=null,this.hitDetection&&(t=this.hitCanvas,t.style.width=e.w+"px",t.style.height=e.h+"px",t.width=e.w,t.height=e.h)
},drawFeature:function(e,t){var i;if(e.geometry){t=this.applyDefaultSymbolizer(t||e.style),i=e.geometry.getBounds();
var r;this.map.baseLayer&&this.map.baseLayer.wrapDateLine&&(r=this.map.getMaxExtent()),r=i&&i.intersectsBounds(this.extent,{worldBounds:r}),(i="none"!==t.display&&!!i&&r)?this.features[e.id]=[e,t]:delete this.features[e.id],this.pendingRedraw=!0
}return this.pendingRedraw&&!this.locked&&(this.redraw(),this.pendingRedraw=!1),i
},drawGeometry:function(e,t,i){var r=e.CLASS_NAME;if("OpenLayers.Geometry.Collection"==r||"OpenLayers.Geometry.MultiPoint"==r||"OpenLayers.Geometry.MultiLineString"==r||"OpenLayers.Geometry.MultiPolygon"==r)for(r=0;r<e.components.length;r++)this.drawGeometry(e.components[r],t,i);
else switch(e.CLASS_NAME){case"OpenLayers.Geometry.Point":this.drawPoint(e,t,i);break;
case"OpenLayers.Geometry.LineString":this.drawLineString(e,t,i);break;case"OpenLayers.Geometry.LinearRing":this.drawLinearRing(e,t,i);
break;case"OpenLayers.Geometry.Polygon":this.drawPolygon(e,t,i)}},drawExternalGraphic:function(e,t,i){var r=new Image,s=t.title||t.graphicTitle;
s&&(r.title=s);var n=t.graphicWidth||t.graphicHeight,a=t.graphicHeight||t.graphicWidth,n=n?n:2*t.pointRadius,a=a?a:2*t.pointRadius,o=void 0!=t.graphicXOffset?t.graphicXOffset:-(.5*n),l=void 0!=t.graphicYOffset?t.graphicYOffset:-(.5*a),h=t.graphicOpacity||t.fillOpacity;
r.onload=OpenLayers.Function.bind(function(){if(this.features[i]){var t=this.getLocalXY(e),s=t[0],t=t[1];
if(!isNaN(s)&&!isNaN(t)){var s=s+o|0,t=t+l|0,p=this.canvas;p.globalAlpha=h;var u=OpenLayers.Renderer.Canvas.drawImageScaleFactor||(OpenLayers.Renderer.Canvas.drawImageScaleFactor=/android 2.1/.test(navigator.userAgent.toLowerCase())?320/window.screen.width:1);
p.drawImage(r,s*u,t*u,n*u,a*u),this.hitDetection&&(this.setHitContextStyle("fill",i),this.hitContext.fillRect(s,t,n,a))
}}},this),r.src=t.externalGraphic},drawNamedSymbol:function(e,t,i){var r,s,n,a;n=Math.PI/180;
var o=OpenLayers.Renderer.symbol[t.graphicName];if(!o)throw Error(t.graphicName+" is not a valid symbol name");
if(!(!o.length||2>o.length||(e=this.getLocalXY(e),s=e[0],a=e[1],isNaN(s)||isNaN(a)))){if(this.canvas.lineCap="round",this.canvas.lineJoin="round",this.hitDetection&&(this.hitContext.lineCap="round",this.hitContext.lineJoin="round"),t.graphicName in this.cachedSymbolBounds)r=this.cachedSymbolBounds[t.graphicName];
else{for(r=new OpenLayers.Bounds,e=0;e<o.length;e+=2)r.extend(new OpenLayers.LonLat(o[e],o[e+1]));
this.cachedSymbolBounds[t.graphicName]=r}if(this.canvas.save(),this.hitDetection&&this.hitContext.save(),this.canvas.translate(s,a),this.hitDetection&&this.hitContext.translate(s,a),e=n*t.rotation,isNaN(e)||(this.canvas.rotate(e),this.hitDetection&&this.hitContext.rotate(e)),n=2*t.pointRadius/Math.max(r.getWidth(),r.getHeight()),this.canvas.scale(n,n),this.hitDetection&&this.hitContext.scale(n,n),e=r.getCenterLonLat().lon,r=r.getCenterLonLat().lat,this.canvas.translate(-e,-r),this.hitDetection&&this.hitContext.translate(-e,-r),a=t.strokeWidth,t.strokeWidth=a/n,!1!==t.fill){for(this.setCanvasStyle("fill",t),this.canvas.beginPath(),e=0;e<o.length;e+=2)r=o[e],s=o[e+1],0==e&&this.canvas.moveTo(r,s),this.canvas.lineTo(r,s);
if(this.canvas.closePath(),this.canvas.fill(),this.hitDetection){for(this.setHitContextStyle("fill",i,t),this.hitContext.beginPath(),e=0;e<o.length;e+=2)r=o[e],s=o[e+1],0==e&&this.canvas.moveTo(r,s),this.hitContext.lineTo(r,s);
this.hitContext.closePath(),this.hitContext.fill()}}if(!1!==t.stroke){for(this.setCanvasStyle("stroke",t),this.canvas.beginPath(),e=0;e<o.length;e+=2)r=o[e],s=o[e+1],0==e&&this.canvas.moveTo(r,s),this.canvas.lineTo(r,s);
if(this.canvas.closePath(),this.canvas.stroke(),this.hitDetection){for(this.setHitContextStyle("stroke",i,t,n),this.hitContext.beginPath(),e=0;e<o.length;e+=2)r=o[e],s=o[e+1],0==e&&this.hitContext.moveTo(r,s),this.hitContext.lineTo(r,s);
this.hitContext.closePath(),this.hitContext.stroke()}}t.strokeWidth=a,this.canvas.restore(),this.hitDetection&&this.hitContext.restore(),this.setCanvasStyle("reset")
}},setCanvasStyle:function(e,t){"fill"===e?(this.canvas.globalAlpha=t.fillOpacity,this.canvas.fillStyle=t.fillColor):"stroke"===e?(this.canvas.globalAlpha=t.strokeOpacity,this.canvas.strokeStyle=t.strokeColor,this.canvas.lineWidth=t.strokeWidth):(this.canvas.globalAlpha=0,this.canvas.lineWidth=1)
},featureIdToHex:function(e){e=Number(e.split("_").pop())+1,e>=16777216&&(this.hitOverflow=e-16777215,e=e%16777216+1),e="000000"+e.toString(16);
var t=e.length;return e="#"+e.substring(t-6,t)},setHitContextStyle:function(e,t,i,r){t=this.featureIdToHex(t),"fill"==e?(this.hitContext.globalAlpha=1,this.hitContext.fillStyle=t):"stroke"==e?(this.hitContext.globalAlpha=1,this.hitContext.strokeStyle=t,"undefined"==typeof r?this.hitContext.lineWidth=i.strokeWidth+2:isNaN(r)||(this.hitContext.lineWidth=i.strokeWidth+2/r)):(this.hitContext.globalAlpha=0,this.hitContext.lineWidth=1)
},drawPoint:function(e,t,i){if(!1!==t.graphic)if(t.externalGraphic)this.drawExternalGraphic(e,t,i);
else if(t.graphicName&&"circle"!=t.graphicName)this.drawNamedSymbol(e,t,i);else{var r=this.getLocalXY(e);
if(e=r[0],r=r[1],!isNaN(e)&&!isNaN(r)){var s=2*Math.PI,n=t.pointRadius;!1!==t.fill&&(this.setCanvasStyle("fill",t),this.canvas.beginPath(),this.canvas.arc(e,r,n,0,s,!0),this.canvas.fill(),this.hitDetection&&(this.setHitContextStyle("fill",i,t),this.hitContext.beginPath(),this.hitContext.arc(e,r,n,0,s,!0),this.hitContext.fill())),!1!==t.stroke&&(this.setCanvasStyle("stroke",t),this.canvas.beginPath(),this.canvas.arc(e,r,n,0,s,!0),this.canvas.stroke(),this.hitDetection&&(this.setHitContextStyle("stroke",i,t),this.hitContext.beginPath(),this.hitContext.arc(e,r,n,0,s,!0),this.hitContext.stroke()),this.setCanvasStyle("reset"))
}}},drawLineString:function(e,t,i){t=OpenLayers.Util.applyDefaults({fill:!1},t),this.drawLinearRing(e,t,i)
},drawLinearRing:function(e,t,i){!1!==t.fill&&(this.setCanvasStyle("fill",t),this.renderPath(this.canvas,e,t,i,"fill"),this.hitDetection&&(this.setHitContextStyle("fill",i,t),this.renderPath(this.hitContext,e,t,i,"fill"))),!1!==t.stroke&&(this.setCanvasStyle("stroke",t),this.renderPath(this.canvas,e,t,i,"stroke"),this.hitDetection&&(this.setHitContextStyle("stroke",i,t),this.renderPath(this.hitContext,e,t,i,"stroke"))),this.setCanvasStyle("reset")
},renderPath:function(e,t,i,r,s){t=t.components,i=t.length,e.beginPath(),r=this.getLocalXY(t[0]);
var n=r[1];if(!isNaN(r[0])&&!isNaN(n)){for(e.moveTo(r[0],r[1]),r=1;i>r;++r)n=this.getLocalXY(t[r]),e.lineTo(n[0],n[1]);
"fill"===s?e.fill():e.stroke()}},drawPolygon:function(e,t,i){e=e.components;var r=e.length;
this.drawLinearRing(e[0],t,i);for(var s=1;r>s;++s)this.canvas.globalCompositeOperation="destination-out",this.hitDetection&&(this.hitContext.globalCompositeOperation="destination-out"),this.drawLinearRing(e[s],OpenLayers.Util.applyDefaults({stroke:!1,fillOpacity:1},t),i),this.canvas.globalCompositeOperation="source-over",this.hitDetection&&(this.hitContext.globalCompositeOperation="source-over"),this.drawLinearRing(e[s],OpenLayers.Util.applyDefaults({fill:!1},t),i)
},drawText:function(e,t){var i=this.getLocalXY(e);this.setCanvasStyle("reset"),this.canvas.fillStyle=t.fontColor,this.canvas.globalAlpha=t.fontOpacity||1;
var r=[t.fontStyle?t.fontStyle:"normal","normal",t.fontWeight?t.fontWeight:"normal",t.fontSize?t.fontSize:"1em",t.fontFamily?t.fontFamily:"sans-serif"].join(" "),s=t.label.split("\n"),n=s.length;
if(this.canvas.fillText){this.canvas.font=r,this.canvas.textAlign=OpenLayers.Renderer.Canvas.LABEL_ALIGN[t.labelAlign[0]]||"center",this.canvas.textBaseline=OpenLayers.Renderer.Canvas.LABEL_ALIGN[t.labelAlign[1]]||"middle";
var a=OpenLayers.Renderer.Canvas.LABEL_FACTOR[t.labelAlign[1]];for(null==a&&(a=-.5),r=this.canvas.measureText("Mg").height||this.canvas.measureText("xx").width,i[1]+=r*a*(n-1),a=0;n>a;a++)t.labelOutlineWidth&&(this.canvas.save(),this.canvas.globalAlpha=t.labelOutlineOpacity||t.fontOpacity||1,this.canvas.strokeStyle=t.labelOutlineColor,this.canvas.lineWidth=t.labelOutlineWidth,this.canvas.strokeText(s[a],i[0],i[1]+r*a+1),this.canvas.restore()),this.canvas.fillText(s[a],i[0],i[1]+r*a)
}else if(this.canvas.mozDrawText){this.canvas.mozTextStyle=r;var o=OpenLayers.Renderer.Canvas.LABEL_FACTOR[t.labelAlign[0]];
for(null==o&&(o=-.5),a=OpenLayers.Renderer.Canvas.LABEL_FACTOR[t.labelAlign[1]],null==a&&(a=-.5),r=this.canvas.mozMeasureText("xx"),i[1]+=r*(1+a*n),a=0;n>a;a++){var l=i[0]+o*this.canvas.mozMeasureText(s[a]),h=i[1]+a*r;
this.canvas.translate(l,h),this.canvas.mozDrawText(s[a]),this.canvas.translate(-l,-h)
}}this.setCanvasStyle("reset")},getLocalXY:function(e){var t=this.getResolution(),i=this.extent;
return[(e.x-this.featureDx)/t+-i.left/t,i.top/t-e.y/t]},clear:function(){var e=this.root.height,t=this.root.width;
this.canvas.clearRect(0,0,t,e),this.features={},this.hitDetection&&this.hitContext.clearRect(0,0,t,e)
},getFeatureIdFromEvent:function(e){var t;if(this.hitDetection&&"none"!==this.root.style.display&&!this.map.dragging&&(e=e.xy,e=this.hitContext.getImageData(0|e.x,0|e.y,1,1).data,255===e[3]&&(e=e[2]+256*(e[1]+256*e[0])))){e="OpenLayers_Feature_Vector_"+(e-1+this.hitOverflow);
try{t=this.features[e][0]}catch(i){}}return t},eraseFeatures:function(e){OpenLayers.Util.isArray(e)||(e=[e]);
for(var t=0;t<e.length;++t)delete this.features[e[t].id];this.redraw()},redraw:function(){if(!this.locked){var e=this.root.height,t=this.root.width;
this.canvas.clearRect(0,0,t,e),this.hitDetection&&this.hitContext.clearRect(0,0,t,e);
var i,r,s,e=[],n=this.map.baseLayer&&this.map.baseLayer.wrapDateLine&&this.map.getMaxExtent();
for(s in this.features)this.features.hasOwnProperty(s)&&(t=this.features[s][0],i=t.geometry,this.calculateFeatureDx(i.getBounds(),n),r=this.features[s][1],this.drawGeometry(i,r,t.id),r.label&&e.push([t,r]));
for(t=0,i=e.length;i>t;++t)s=e[t],this.drawText(s[0].geometry.getCentroid(),s[1])
}},CLASS_NAME:"OpenLayers.Renderer.Canvas"}),OpenLayers.Renderer.Canvas.LABEL_ALIGN={l:"left",r:"right",t:"top",b:"bottom"},OpenLayers.Renderer.Canvas.LABEL_FACTOR={l:0,r:-1,t:0,b:-1},OpenLayers.Renderer.Canvas.drawImageScaleFactor=null,OpenLayers.Format.OSM=OpenLayers.Class(OpenLayers.Format.XML,{checkTags:!1,interestingTagsExclude:null,areaTags:null,initialize:function(e){var t={interestingTagsExclude:"source source_ref source:ref history attribution created_by".split(" "),areaTags:"area building leisure tourism ruins historic landuse military natural sport".split(" ")},t=OpenLayers.Util.extend(t,e),i={};
for(e=0;e<t.interestingTagsExclude.length;e++)i[t.interestingTagsExclude[e]]=!0;for(t.interestingTagsExclude=i,i={},e=0;e<t.areaTags.length;e++)i[t.areaTags[e]]=!0;
t.areaTags=i,this.externalProjection=new OpenLayers.Projection("EPSG:4326"),OpenLayers.Format.XML.prototype.initialize.apply(this,[t])
},read:function(e){"string"==typeof e&&(e=OpenLayers.Format.XML.prototype.read.apply(this,[e]));
var t=this.getNodes(e),i=this.getWays(e);e=Array(i.length);for(var r=0;r<i.length;r++){for(var s=Array(i[r].nodes.length),n=this.isWayArea(i[r])?1:0,a=0;a<i[r].nodes.length;a++){var o=t[i[r].nodes[a]],l=new OpenLayers.Geometry.Point(o.lon,o.lat);
l.osm_id=parseInt(i[r].nodes[a]),s[a]=l,o.used=!0}o=null,o=n?new OpenLayers.Geometry.Polygon(new OpenLayers.Geometry.LinearRing(s)):new OpenLayers.Geometry.LineString(s),this.internalProjection&&this.externalProjection&&o.transform(this.externalProjection,this.internalProjection),s=new OpenLayers.Feature.Vector(o,i[r].tags),s.osm_id=parseInt(i[r].id),s.fid="way."+s.osm_id,e[r]=s
}for(var h in t){if(o=t[h],!o.used||this.checkTags){if(i=null,this.checkTags){if(i=this.getTags(o.node,!0),o.used&&!i[1])continue;
i=i[0]}else i=this.getTags(o.node);s=new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(o.lon,o.lat),i),this.internalProjection&&this.externalProjection&&s.geometry.transform(this.externalProjection,this.internalProjection),s.osm_id=parseInt(h),s.fid="node."+s.osm_id,e.push(s)
}o.node=null}return e},getNodes:function(e){e=e.getElementsByTagName("node");for(var t={},i=0;i<e.length;i++){var r=e[i],s=r.getAttribute("id");
t[s]={lat:r.getAttribute("lat"),lon:r.getAttribute("lon"),node:r}}return t},getWays:function(e){e=e.getElementsByTagName("way");
for(var t=[],i=0;i<e.length;i++){var r=e[i],s={id:r.getAttribute("id")};s.tags=this.getTags(r),r=r.getElementsByTagName("nd"),s.nodes=Array(r.length);
for(var n=0;n<r.length;n++)s.nodes[n]=r[n].getAttribute("ref");t.push(s)}return t
},getTags:function(e,t){for(var i=e.getElementsByTagName("tag"),r={},s=!1,n=0;n<i.length;n++){var a=i[n].getAttribute("k");
r[a]=i[n].getAttribute("v"),t&&(this.interestingTagsExclude[a]||(s=!0))}return t?[r,s]:r
},isWayArea:function(e){var t=!1,i=!1;if(e.nodes[0]==e.nodes[e.nodes.length-1]&&(t=!0),this.checkTags)for(var r in e.tags)if(this.areaTags[r]){i=!0;
break}return t&&(this.checkTags?i:!0)},write:function(e){OpenLayers.Util.isArray(e)||(e=[e]),this.osm_id=1,this.created_nodes={};
var t=this.createElementNS(null,"osm");t.setAttribute("version","0.5"),t.setAttribute("generator","OpenLayers "+OpenLayers.VERSION_NUMBER);
for(var i=e.length-1;i>=0;i--)for(var r=this.createFeatureNodes(e[i]),s=0;s<r.length;s++)t.appendChild(r[s]);
return OpenLayers.Format.XML.prototype.write.apply(this,[t])},createFeatureNodes:function(e){var t=[],i=e.geometry.CLASS_NAME,i=i.substring(i.lastIndexOf(".")+1),i=i.toLowerCase();
return(i=this.createXML[i])&&(t=i.apply(this,[e])),t},createXML:{point:function(e){var t=null,i=e.geometry?e.geometry:e;
this.internalProjection&&this.externalProjection&&(i=i.clone(),i.transform(this.internalProjection,this.externalProjection));
var r=!1;e.osm_id?(t=e.osm_id,this.created_nodes[t]&&(r=!0)):(t=-this.osm_id,this.osm_id++);
var s=r?this.created_nodes[t]:this.createElementNS(null,"node");return this.created_nodes[t]=s,s.setAttribute("id",t),s.setAttribute("lon",i.x),s.setAttribute("lat",i.y),e.attributes&&this.serializeTags(e,s),this.setState(e,s),r?[]:[s]
},linestring:function(e){var t,i=[],r=e.geometry;e.osm_id?t=e.osm_id:(t=-this.osm_id,this.osm_id++);
var s=this.createElementNS(null,"way");for(s.setAttribute("id",t),t=0;t<r.components.length;t++){var n=this.createXML.point.apply(this,[r.components[t]]);
if(n.length){var n=n[0],a=n.getAttribute("id");i.push(n)}else a=r.components[t].osm_id,n=this.created_nodes[a];
this.setState(e,n),n=this.createElementNS(null,"nd"),n.setAttribute("ref",a),s.appendChild(n)
}return this.serializeTags(e,s),i.push(s),i},polygon:function(e){var t=OpenLayers.Util.extend({area:"yes"},e.attributes),t=new OpenLayers.Feature.Vector(e.geometry.components[0],t);
return t.osm_id=e.osm_id,this.createXML.linestring.apply(this,[t])}},serializeTags:function(e,t){for(var i in e.attributes){var r=this.createElementNS(null,"tag");
r.setAttribute("k",i),r.setAttribute("v",e.attributes[i]),t.appendChild(r)}},setState:function(e,t){if(e.state){var i=null;
switch(e.state){case OpenLayers.State.UPDATE:case OpenLayers.State.DELETE:i="delete"
}i&&t.setAttribute("action",i)}},CLASS_NAME:"OpenLayers.Format.OSM"}),OpenLayers.Handler.Keyboard=OpenLayers.Class(OpenLayers.Handler,{KEY_EVENTS:["keydown","keyup"],eventListener:null,observeElement:null,initialize:function(){OpenLayers.Handler.prototype.initialize.apply(this,arguments),this.eventListener=OpenLayers.Function.bindAsEventListener(this.handleKeyEvent,this)
},destroy:function(){this.deactivate(),this.eventListener=null,OpenLayers.Handler.prototype.destroy.apply(this,arguments)
},activate:function(){if(OpenLayers.Handler.prototype.activate.apply(this,arguments)){this.observeElement=this.observeElement||document;
for(var e=0,t=this.KEY_EVENTS.length;t>e;e++)OpenLayers.Event.observe(this.observeElement,this.KEY_EVENTS[e],this.eventListener);
return!0}return!1},deactivate:function(){var e=!1;if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){for(var e=0,t=this.KEY_EVENTS.length;t>e;e++)OpenLayers.Event.stopObserving(this.observeElement,this.KEY_EVENTS[e],this.eventListener);
e=!0}return e},handleKeyEvent:function(e){this.checkModifiers(e)&&this.callback(e.type,[e])
},CLASS_NAME:"OpenLayers.Handler.Keyboard"}),OpenLayers.Control.ModifyFeature=OpenLayers.Class(OpenLayers.Control,{documentDrag:!1,geometryTypes:null,clickout:!0,toggle:!0,standalone:!1,layer:null,feature:null,vertex:null,vertices:null,virtualVertices:null,handlers:null,deleteCodes:null,virtualStyle:null,vertexRenderIntent:null,mode:null,createVertices:!0,modified:!1,radiusHandle:null,dragHandle:null,onModificationStart:function(){},onModification:function(){},onModificationEnd:function(){},initialize:function(e,t){t=t||{},this.layer=e,this.vertices=[],this.virtualVertices=[],this.virtualStyle=OpenLayers.Util.extend({},this.layer.style||this.layer.styleMap.createSymbolizer(null,t.vertexRenderIntent)),this.virtualStyle.fillOpacity=.3,this.virtualStyle.strokeOpacity=.3,this.deleteCodes=[46,68],this.mode=OpenLayers.Control.ModifyFeature.RESHAPE,OpenLayers.Control.prototype.initialize.apply(this,[t]),OpenLayers.Util.isArray(this.deleteCodes)||(this.deleteCodes=[this.deleteCodes]);
var i={documentDrag:this.documentDrag,stopDown:!1};this.handlers={keyboard:new OpenLayers.Handler.Keyboard(this,{keydown:this.handleKeypress}),drag:new OpenLayers.Handler.Drag(this,{down:function(e){this.vertex=null,(e=this.layer.getFeatureFromEvent(this.handlers.drag.evt))?this.dragStart(e):this.clickout&&(this._unselect=this.feature)
},move:function(e){delete this._unselect,this.vertex&&this.dragVertex(this.vertex,e)
},up:function(){this.handlers.drag.stopDown=!1,this._unselect&&(this.unselectFeature(this._unselect),delete this._unselect)
},done:function(){this.vertex&&this.dragComplete(this.vertex)}},i)}},destroy:function(){this.map&&this.map.events.un({removelayer:this.handleMapEvents,changelayer:this.handleMapEvents,scope:this}),this.layer=null,OpenLayers.Control.prototype.destroy.apply(this,[])
},activate:function(){return this.moveLayerToTop(),this.map.events.on({removelayer:this.handleMapEvents,changelayer:this.handleMapEvents,scope:this}),this.handlers.keyboard.activate()&&this.handlers.drag.activate()&&OpenLayers.Control.prototype.activate.apply(this,arguments)
},deactivate:function(){var e=!1;return OpenLayers.Control.prototype.deactivate.apply(this,arguments)&&(this.moveLayerBack(),this.map.events.un({removelayer:this.handleMapEvents,changelayer:this.handleMapEvents,scope:this}),this.layer.removeFeatures(this.vertices,{silent:!0}),this.layer.removeFeatures(this.virtualVertices,{silent:!0}),this.vertices=[],this.handlers.drag.deactivate(),this.handlers.keyboard.deactivate(),(e=this.feature)&&e.geometry&&e.layer&&this.unselectFeature(e),e=!0),e
},beforeSelectFeature:function(e){return this.layer.events.triggerEvent("beforefeaturemodified",{feature:e})
},selectFeature:function(e){if(!(this.feature===e||this.geometryTypes&&-1==OpenLayers.Util.indexOf(this.geometryTypes,e.geometry.CLASS_NAME))){!1!==this.beforeSelectFeature(e)&&(this.feature&&this.unselectFeature(this.feature),this.feature=e,this.layer.selectedFeatures.push(e),this.layer.drawFeature(e,"select"),this.modified=!1,this.resetVertices(),this.onModificationStart(this.feature));
var t=e.modified;!e.geometry||t&&t.geometry||(this._originalGeometry=e.geometry.clone())
}},unselectFeature:function(e){this.layer.removeFeatures(this.vertices,{silent:!0}),this.vertices=[],this.layer.destroyFeatures(this.virtualVertices,{silent:!0}),this.virtualVertices=[],this.dragHandle&&(this.layer.destroyFeatures([this.dragHandle],{silent:!0}),delete this.dragHandle),this.radiusHandle&&(this.layer.destroyFeatures([this.radiusHandle],{silent:!0}),delete this.radiusHandle),this.layer.drawFeature(this.feature,"default"),this.feature=null,OpenLayers.Util.removeItem(this.layer.selectedFeatures,e),this.onModificationEnd(e),this.layer.events.triggerEvent("afterfeaturemodified",{feature:e,modified:this.modified}),this.modified=!1
},dragStart:function(e){var t="OpenLayers.Geometry.Point"==e.geometry.CLASS_NAME;
this.standalone||(e._sketch||!t)&&e._sketch||(this.toggle&&this.feature===e&&(this._unselect=e),this.selectFeature(e)),(e._sketch||t)&&(this.vertex=e,this.handlers.drag.stopDown=!0)
},dragVertex:function(e,t){var i=this.map.getLonLatFromViewPortPx(t),r=e.geometry;
r.move(i.lon-r.x,i.lat-r.y),this.modified=!0,"OpenLayers.Geometry.Point"==this.feature.geometry.CLASS_NAME?this.layer.events.triggerEvent("vertexmodified",{vertex:e.geometry,feature:this.feature,pixel:t}):(e._index?(e.geometry.parent.addComponent(e.geometry,e._index),delete e._index,OpenLayers.Util.removeItem(this.virtualVertices,e),this.vertices.push(e)):e==this.dragHandle?(this.layer.removeFeatures(this.vertices,{silent:!0}),this.vertices=[],this.radiusHandle&&(this.layer.destroyFeatures([this.radiusHandle],{silent:!0}),this.radiusHandle=null)):e!==this.radiusHandle&&this.layer.events.triggerEvent("vertexmodified",{vertex:e.geometry,feature:this.feature,pixel:t}),0<this.virtualVertices.length&&(this.layer.destroyFeatures(this.virtualVertices,{silent:!0}),this.virtualVertices=[]),this.layer.drawFeature(this.feature,this.standalone?void 0:"select")),this.layer.drawFeature(e)
},dragComplete:function(){this.resetVertices(),this.setFeatureState(),this.onModification(this.feature),this.layer.events.triggerEvent("featuremodified",{feature:this.feature})
},setFeatureState:function(){if(this.feature.state!=OpenLayers.State.INSERT&&this.feature.state!=OpenLayers.State.DELETE&&(this.feature.state=OpenLayers.State.UPDATE,this.modified&&this._originalGeometry)){var e=this.feature;
e.modified=OpenLayers.Util.extend(e.modified,{geometry:this._originalGeometry}),delete this._originalGeometry
}},resetVertices:function(){0<this.vertices.length&&(this.layer.removeFeatures(this.vertices,{silent:!0}),this.vertices=[]),0<this.virtualVertices.length&&(this.layer.removeFeatures(this.virtualVertices,{silent:!0}),this.virtualVertices=[]),this.dragHandle&&(this.layer.destroyFeatures([this.dragHandle],{silent:!0}),this.dragHandle=null),this.radiusHandle&&(this.layer.destroyFeatures([this.radiusHandle],{silent:!0}),this.radiusHandle=null),this.feature&&"OpenLayers.Geometry.Point"!=this.feature.geometry.CLASS_NAME&&(this.mode&OpenLayers.Control.ModifyFeature.DRAG&&this.collectDragHandle(),this.mode&(OpenLayers.Control.ModifyFeature.ROTATE|OpenLayers.Control.ModifyFeature.RESIZE)&&this.collectRadiusHandle(),this.mode&OpenLayers.Control.ModifyFeature.RESHAPE&&(this.mode&OpenLayers.Control.ModifyFeature.RESIZE||this.collectVertices()))
},handleKeypress:function(e){var t=e.keyCode;this.feature&&-1!=OpenLayers.Util.indexOf(this.deleteCodes,t)&&(t=this.layer.getFeatureFromEvent(this.handlers.drag.evt))&&-1!=OpenLayers.Util.indexOf(this.vertices,t)&&!this.handlers.drag.dragging&&t.geometry.parent&&(t.geometry.parent.removeComponent(t.geometry),this.layer.events.triggerEvent("vertexremoved",{vertex:t.geometry,feature:this.feature,pixel:e.xy}),this.layer.drawFeature(this.feature,this.standalone?void 0:"select"),this.modified=!0,this.resetVertices(),this.setFeatureState(),this.onModification(this.feature),this.layer.events.triggerEvent("featuremodified",{feature:this.feature}))
},collectVertices:function(){function e(i){var r,s,n;if("OpenLayers.Geometry.Point"==i.CLASS_NAME)s=new OpenLayers.Feature.Vector(i),s._sketch=!0,s.renderIntent=t.vertexRenderIntent,t.vertices.push(s);
else{for(n=i.components.length,"OpenLayers.Geometry.LinearRing"==i.CLASS_NAME&&(n-=1),r=0;n>r;++r)s=i.components[r],"OpenLayers.Geometry.Point"==s.CLASS_NAME?(s=new OpenLayers.Feature.Vector(s),s._sketch=!0,s.renderIntent=t.vertexRenderIntent,t.vertices.push(s)):e(s);
if(t.createVertices&&"OpenLayers.Geometry.MultiPoint"!=i.CLASS_NAME)for(r=0,n=i.components.length;n-1>r;++r){s=i.components[r];
var a=i.components[r+1];"OpenLayers.Geometry.Point"==s.CLASS_NAME&&"OpenLayers.Geometry.Point"==a.CLASS_NAME&&(s=new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point((s.x+a.x)/2,(s.y+a.y)/2),null,t.virtualStyle),s.geometry.parent=i,s._index=r+1,s._sketch=!0,t.virtualVertices.push(s))
}}}this.vertices=[],this.virtualVertices=[];var t=this;e.call(this,this.feature.geometry),this.layer.addFeatures(this.virtualVertices,{silent:!0}),this.layer.addFeatures(this.vertices,{silent:!0})
},collectDragHandle:function(){var e=this.feature.geometry,t=e.getBounds().getCenterLonLat(),t=new OpenLayers.Geometry.Point(t.lon,t.lat),i=new OpenLayers.Feature.Vector(t);
t.move=function(t,i){OpenLayers.Geometry.Point.prototype.move.call(this,t,i),e.move(t,i)
},i._sketch=!0,this.dragHandle=i,this.dragHandle.renderIntent=this.vertexRenderIntent,this.layer.addFeatures([this.dragHandle],{silent:!0})
},collectRadiusHandle:function(){var e=this.feature.geometry,t=e.getBounds(),i=t.getCenterLonLat(),r=new OpenLayers.Geometry.Point(i.lon,i.lat),t=new OpenLayers.Geometry.Point(t.right,t.bottom),i=new OpenLayers.Feature.Vector(t),s=this.mode&OpenLayers.Control.ModifyFeature.RESIZE,n=this.mode&OpenLayers.Control.ModifyFeature.RESHAPE,a=this.mode&OpenLayers.Control.ModifyFeature.ROTATE;
t.move=function(t,i){OpenLayers.Geometry.Point.prototype.move.call(this,t,i);var o=this.x-r.x,l=this.y-r.y,h=o-t,p=l-i;
if(a){var u=Math.atan2(p,h),u=Math.atan2(l,o)-u,u=u*(180/Math.PI);e.rotate(u,r)}if(s){var c;
n?(l/=p,c=o/h/l):(h=Math.sqrt(h*h+p*p),l=Math.sqrt(o*o+l*l)/h),e.resize(l,r,c)}},i._sketch=!0,this.radiusHandle=i,this.radiusHandle.renderIntent=this.vertexRenderIntent,this.layer.addFeatures([this.radiusHandle],{silent:!0})
},setMap:function(e){this.handlers.drag.setMap(e),OpenLayers.Control.prototype.setMap.apply(this,arguments)
},handleMapEvents:function(e){"removelayer"!=e.type&&"order"!=e.property||this.moveLayerToTop()
},moveLayerToTop:function(){var e=Math.max(this.map.Z_INDEX_BASE.Feature-1,this.layer.getZIndex())+1;
this.layer.setZIndex(e)},moveLayerBack:function(){var e=this.layer.getZIndex()-1;
e>=this.map.Z_INDEX_BASE.Feature?this.layer.setZIndex(e):this.map.setLayerZIndex(this.layer,this.map.getLayerIndex(this.layer))
},CLASS_NAME:"OpenLayers.Control.ModifyFeature"}),OpenLayers.Control.ModifyFeature.RESHAPE=1,OpenLayers.Control.ModifyFeature.RESIZE=2,OpenLayers.Control.ModifyFeature.ROTATE=4,OpenLayers.Control.ModifyFeature.DRAG=8,OpenLayers.Layer.Bing=OpenLayers.Class(OpenLayers.Layer.XYZ,{key:null,serverResolutions:[156543.03390625,78271.516953125,39135.7584765625,19567.87923828125,9783.939619140625,4891.9698095703125,2445.9849047851562,1222.9924523925781,611.4962261962891,305.74811309814453,152.87405654907226,76.43702827453613,38.218514137268066,19.109257068634033,9.554628534317017,4.777314267158508,2.388657133579254,1.194328566789627,.5971642833948135,.29858214169740677,.14929107084870338,.07464553542435169],attributionTemplate:'<span class="olBingAttribution ${type}"><div><a target="_blank" href="http://www.bing.com/maps/"><img src="${logo}" /></a></div>${copyrights}<a style="white-space: nowrap" target="_blank" href="http://www.microsoft.com/maps/product/terms.html">Terms of Use</a></span>',metadata:null,protocolRegex:/^http:/i,type:"Road",culture:"en-US",metadataParams:null,tileOptions:null,protocol:~window.location.href.indexOf("http")?"":"http:",initialize:function(e){e=OpenLayers.Util.applyDefaults({sphericalMercator:!0},e),OpenLayers.Layer.XYZ.prototype.initialize.apply(this,[e.name||"Bing "+(e.type||this.type),null,e]),this.tileOptions=OpenLayers.Util.extend({crossOriginKeyword:"anonymous"},this.options.tileOptions),this.loadMetadata()
},loadMetadata:function(){this._callbackId="_callback_"+this.id.replace(/\./g,"_"),window[this._callbackId]=OpenLayers.Function.bind(OpenLayers.Layer.Bing.processMetadata,this);
var e=OpenLayers.Util.applyDefaults({key:this.key,jsonp:this._callbackId,include:"ImageryProviders"},this.metadataParams),e=this.protocol+"//dev.virtualearth.net/REST/v1/Imagery/Metadata/"+this.type+"?"+OpenLayers.Util.getParameterString(e),t=document.createElement("script");
t.type="text/javascript",t.src=e,t.id=this._callbackId,document.getElementsByTagName("head")[0].appendChild(t)
},initLayer:function(){var e=this.metadata.resourceSets[0].resources[0],t=e.imageUrl.replace("{quadkey}","${quadkey}"),t=t.replace("{culture}",this.culture),t=t.replace(this.protocolRegex,this.protocol);
this.url=[];for(var i=0;i<e.imageUrlSubdomains.length;++i)this.url.push(t.replace("{subdomain}",e.imageUrlSubdomains[i]));
this.addOptions({maxResolution:Math.min(this.serverResolutions[e.zoomMin],this.maxResolution||Number.POSITIVE_INFINITY),numZoomLevels:Math.min(e.zoomMax+1-e.zoomMin,this.numZoomLevels)},!0),this.isBaseLayer||this.redraw(),this.updateAttribution()
},getURL:function(e){if(this.url){var t=this.getXYZ(e);e=t.x;for(var i=t.y,t=t.z,r=[],s=t;s>0;--s){var n="0",a=1<<s-1;
0!=(e&a)&&n++,0!=(i&a)&&(n++,n++),r.push(n)}return r=r.join(""),e=this.selectUrl(""+e+i+t,this.url),OpenLayers.String.format(e,{quadkey:r})
}},updateAttribution:function(){var e=this.metadata;if(e.resourceSets&&this.map&&this.map.center){var t,i,r,s,n,a,o,l=e.resourceSets[0].resources[0],h=this.map.getExtent().transform(this.map.getProjectionObject(),new OpenLayers.Projection("EPSG:4326")),p=l.imageryProviders||[],u=OpenLayers.Util.indexOf(this.serverResolutions,this.getServerResolution()),l="";
for(i=0,r=p.length;r>i;++i)for(t=p[i],s=0,n=t.coverageAreas.length;n>s;++s)o=t.coverageAreas[s],a=OpenLayers.Bounds.fromArray(o.bbox,!0),h.intersectsBounds(a)&&u<=o.zoomMax&&u>=o.zoomMin&&(l+=t.attribution+" ");
e=e.brandLogoUri.replace(this.protocolRegex,this.protocol),this.attribution=OpenLayers.String.format(this.attributionTemplate,{type:this.type.toLowerCase(),logo:e,copyrights:l}),this.map&&this.map.events.triggerEvent("changelayer",{layer:this,property:"attribution"})
}},setMap:function(){OpenLayers.Layer.XYZ.prototype.setMap.apply(this,arguments),this.map.events.register("moveend",this,this.updateAttribution)
},clone:function(e){return null==e&&(e=new OpenLayers.Layer.Bing(this.options)),e=OpenLayers.Layer.XYZ.prototype.clone.apply(this,[e])
},destroy:function(){this.map&&this.map.events.unregister("moveend",this,this.updateAttribution),OpenLayers.Layer.XYZ.prototype.destroy.apply(this,arguments)
},CLASS_NAME:"OpenLayers.Layer.Bing"}),OpenLayers.Layer.Bing.processMetadata=function(e){this.metadata=e,this.initLayer(),e=document.getElementById(this._callbackId),e.parentNode.removeChild(e),window[this._callbackId]=void 0,delete this._callbackId
},OpenLayers.StyleMap=OpenLayers.Class({styles:null,extendDefault:!0,initialize:function(e,t){if(this.styles={"default":new OpenLayers.Style(OpenLayers.Feature.Vector.style["default"]),select:new OpenLayers.Style(OpenLayers.Feature.Vector.style.select),temporary:new OpenLayers.Style(OpenLayers.Feature.Vector.style.temporary),"delete":new OpenLayers.Style(OpenLayers.Feature.Vector.style["delete"])},e instanceof OpenLayers.Style)this.styles["default"]=e,this.styles.select=e,this.styles.temporary=e,this.styles["delete"]=e;
else if("object"==typeof e)for(var i in e)if(e[i]instanceof OpenLayers.Style)this.styles[i]=e[i];
else{if("object"!=typeof e[i]){this.styles["default"]=new OpenLayers.Style(e),this.styles.select=new OpenLayers.Style(e),this.styles.temporary=new OpenLayers.Style(e),this.styles["delete"]=new OpenLayers.Style(e);
break}this.styles[i]=new OpenLayers.Style(e[i])}OpenLayers.Util.extend(this,t)},destroy:function(){for(var e in this.styles)this.styles[e].destroy();
this.styles=null},createSymbolizer:function(e,t){e||(e=new OpenLayers.Feature.Vector),this.styles[t]||(t="default"),e.renderIntent=t;
var i={};return this.extendDefault&&"default"!=t&&(i=this.styles["default"].createSymbolizer(e)),OpenLayers.Util.extend(i,this.styles[t].createSymbolizer(e))
},addUniqueValueRules:function(e,t,i,r){var s,n=[];for(s in i)n.push(new OpenLayers.Rule({symbolizer:i[s],context:r,filter:new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.EQUAL_TO,property:t,value:s})}));
this.styles[e].addRules(n)},CLASS_NAME:"OpenLayers.StyleMap"}),OpenLayers.Layer.Vector=OpenLayers.Class(OpenLayers.Layer,{isBaseLayer:!1,isFixed:!1,features:null,filter:null,selectedFeatures:null,unrenderedFeatures:null,reportError:!0,style:null,styleMap:null,strategies:null,protocol:null,renderers:["SVG","VML","Canvas"],renderer:null,rendererOptions:null,geometryType:null,drawn:!1,ratio:1,initialize:function(){if(OpenLayers.Layer.prototype.initialize.apply(this,arguments),this.renderer&&this.renderer.supported()||this.assignRenderer(),this.renderer&&this.renderer.supported()||(this.renderer=null,this.displayError()),this.styleMap||(this.styleMap=new OpenLayers.StyleMap),this.features=[],this.selectedFeatures=[],this.unrenderedFeatures={},this.strategies)for(var e=0,t=this.strategies.length;t>e;e++)this.strategies[e].setLayer(this)
},destroy:function(){if(this.strategies){var e,t,i;for(t=0,i=this.strategies.length;i>t;t++)e=this.strategies[t],e.autoDestroy&&e.destroy();
this.strategies=null}this.protocol&&(this.protocol.autoDestroy&&this.protocol.destroy(),this.protocol=null),this.destroyFeatures(),this.unrenderedFeatures=this.selectedFeatures=this.features=null,this.renderer&&this.renderer.destroy(),this.drawn=this.geometryType=this.renderer=null,OpenLayers.Layer.prototype.destroy.apply(this,arguments)
},clone:function(e){null==e&&(e=new OpenLayers.Layer.Vector(this.name,this.getOptions())),e=OpenLayers.Layer.prototype.clone.apply(this,[e]);
for(var t=this.features,i=t.length,r=Array(i),s=0;i>s;++s)r[s]=t[s].clone();return e.features=r,e
},refresh:function(e){this.calculateInRange()&&this.visibility&&this.events.triggerEvent("refresh",e)
},assignRenderer:function(){for(var e=0,t=this.renderers.length;t>e;e++){var i=this.renderers[e];
if((i="function"==typeof i?i:OpenLayers.Renderer[i])&&i.prototype.supported()){this.renderer=new i(this.div,this.rendererOptions);
break}}},displayError:function(){this.reportError&&OpenLayers.Console.userError(OpenLayers.i18n("browserNotSupported",{renderers:this.renderers.join("\n")}))
},setMap:function(){if(OpenLayers.Layer.prototype.setMap.apply(this,arguments),this.renderer){this.renderer.map=this.map;
var e=this.map.getSize();e.w*=this.ratio,e.h*=this.ratio,this.renderer.setSize(e)
}else this.map.removeLayer(this)},afterAdd:function(){if(this.strategies){var e,t,i;
for(t=0,i=this.strategies.length;i>t;t++)e=this.strategies[t],e.autoActivate&&e.activate()
}},removeMap:function(e){if(this.drawn=!1,this.strategies){var t,i;for(t=0,i=this.strategies.length;i>t;t++)e=this.strategies[t],e.autoActivate&&e.deactivate()
}},onMapResize:function(){OpenLayers.Layer.prototype.onMapResize.apply(this,arguments);
var e=this.map.getSize();e.w*=this.ratio,e.h*=this.ratio,this.renderer.setSize(e)
},moveTo:function(e,t,i){OpenLayers.Layer.prototype.moveTo.apply(this,arguments);
var r=!0;if(!i){this.renderer.root.style.visibility="hidden";var r=this.map.getSize(),s=r.w,r=r.h,s=s/2*this.ratio-s/2,r=r/2*this.ratio-r/2,s=s+this.map.layerContainerOriginPx.x,s=-Math.round(s),r=r+this.map.layerContainerOriginPx.y,r=-Math.round(r);
if(this.div.style.left=s+"px",this.div.style.top=r+"px",s=this.map.getExtent().scale(this.ratio),r=this.renderer.setExtent(s,t),this.renderer.root.style.visibility="visible",!0===OpenLayers.IS_GECKO&&(this.div.scrollLeft=this.div.scrollLeft),!t&&r)for(var n in this.unrenderedFeatures)s=this.unrenderedFeatures[n],this.drawFeature(s)
}if(!this.drawn||t||!r)for(this.drawn=!0,n=0,r=this.features.length;r>n;n++)this.renderer.locked=n!==r-1,s=this.features[n],this.drawFeature(s)
},display:function(){OpenLayers.Layer.prototype.display.apply(this,arguments);var e=this.div.style.display;
e!=this.renderer.root.style.display&&(this.renderer.root.style.display=e)},addFeatures:function(e,t){OpenLayers.Util.isArray(e)||(e=[e]);
var i=!t||!t.silent;if(i){var r={features:e};if(!1===this.events.triggerEvent("beforefeaturesadded",r))return;
e=r.features}for(var r=[],s=0,n=e.length;n>s;s++){this.renderer.locked=s!=e.length-1?!0:!1;
var a=e[s];if(this.geometryType&&!(a.geometry instanceof this.geometryType))throw new TypeError("addFeatures: component should be an "+this.geometryType.prototype.CLASS_NAME);
if(a.layer=this,!a.style&&this.style&&(a.style=OpenLayers.Util.extend({},this.style)),i){if(!1===this.events.triggerEvent("beforefeatureadded",{feature:a}))continue;
this.preFeatureInsert(a)}r.push(a),this.features.push(a),this.drawFeature(a),i&&(this.events.triggerEvent("featureadded",{feature:a}),this.onFeatureInsert(a))
}i&&this.events.triggerEvent("featuresadded",{features:r})},removeFeatures:function(e,t){if(e&&0!==e.length){if(e===this.features)return this.removeAllFeatures(t);
OpenLayers.Util.isArray(e)||(e=[e]),e===this.selectedFeatures&&(e=e.slice());var i=!t||!t.silent;
i&&this.events.triggerEvent("beforefeaturesremoved",{features:e});for(var r=e.length-1;r>=0;r--){this.renderer.locked=0!=r&&e[r-1].geometry?!0:!1;
var s=e[r];delete this.unrenderedFeatures[s.id],i&&this.events.triggerEvent("beforefeatureremoved",{feature:s}),this.features=OpenLayers.Util.removeItem(this.features,s),s.layer=null,s.geometry&&this.renderer.eraseFeatures(s),-1!=OpenLayers.Util.indexOf(this.selectedFeatures,s)&&OpenLayers.Util.removeItem(this.selectedFeatures,s),i&&this.events.triggerEvent("featureremoved",{feature:s})
}i&&this.events.triggerEvent("featuresremoved",{features:e})}},removeAllFeatures:function(e){e=!e||!e.silent;
var t=this.features;e&&this.events.triggerEvent("beforefeaturesremoved",{features:t});
for(var i,r=t.length-1;r>=0;r--)i=t[r],e&&this.events.triggerEvent("beforefeatureremoved",{feature:i}),i.layer=null,e&&this.events.triggerEvent("featureremoved",{feature:i});
this.renderer.clear(),this.features=[],this.unrenderedFeatures={},this.selectedFeatures=[],e&&this.events.triggerEvent("featuresremoved",{features:t})
},destroyFeatures:function(e,t){if(void 0==e&&(e=this.features),e){this.removeFeatures(e,t);
for(var i=e.length-1;i>=0;i--)e[i].destroy()}},drawFeature:function(e,t){if(this.drawn){if("object"!=typeof t){t||e.state!==OpenLayers.State.DELETE||(t="delete");
var i=t||e.renderIntent;(t=e.style||this.style)||(t=this.styleMap.createSymbolizer(e,i))
}i=this.renderer.drawFeature(e,t),!1===i||null===i?this.unrenderedFeatures[e.id]=e:delete this.unrenderedFeatures[e.id]
}},eraseFeatures:function(e){this.renderer.eraseFeatures(e)},getFeatureFromEvent:function(e){if(!this.renderer)throw Error("getFeatureFromEvent called on layer with no renderer. This usually means you destroyed a layer, but not some handler which is associated with it.");
var t=null;return(e=this.renderer.getFeatureIdFromEvent(e))&&(t="string"==typeof e?this.getFeatureById(e):e),t
},getFeatureBy:function(e,t){for(var i=null,r=0,s=this.features.length;s>r;++r)if(this.features[r][e]==t){i=this.features[r];
break}return i},getFeatureById:function(e){return this.getFeatureBy("id",e)},getFeatureByFid:function(e){return this.getFeatureBy("fid",e)
},getFeaturesByAttribute:function(e,t){var i,r,s=this.features.length,n=[];for(i=0;s>i;i++)(r=this.features[i])&&r.attributes&&r.attributes[e]===t&&n.push(r);
return n},onFeatureInsert:function(){},preFeatureInsert:function(){},getDataExtent:function(){var e=null,t=this.features;
if(t&&0<t.length)for(var i=null,r=0,s=t.length;s>r;r++)(i=t[r].geometry)&&(null===e&&(e=new OpenLayers.Bounds),e.extend(i.getBounds()));
return e},CLASS_NAME:"OpenLayers.Layer.Vector"}),OpenLayers.Layer.PointGrid=OpenLayers.Class(OpenLayers.Layer.Vector,{dx:null,dy:null,ratio:1.5,maxFeatures:250,rotation:0,origin:null,gridBounds:null,initialize:function(e){e=e||{},OpenLayers.Layer.Vector.prototype.initialize.apply(this,[e.name,e])
},setMap:function(e){OpenLayers.Layer.Vector.prototype.setMap.apply(this,arguments),e.events.register("moveend",this,this.onMoveEnd)
},removeMap:function(e){e.events.unregister("moveend",this,this.onMoveEnd),OpenLayers.Layer.Vector.prototype.removeMap.apply(this,arguments)
},setRatio:function(e){this.ratio=e,this.updateGrid(!0)},setMaxFeatures:function(e){this.maxFeatures=e,this.updateGrid(!0)
},setSpacing:function(e,t){this.dx=e,this.dy=t||e,this.updateGrid(!0)},setOrigin:function(e){this.origin=e,this.updateGrid(!0)
},getOrigin:function(){return this.origin||(this.origin=this.map.getExtent().getCenterLonLat()),this.origin
},setRotation:function(e){this.rotation=e,this.updateGrid(!0)},onMoveEnd:function(){this.updateGrid()
},getViewBounds:function(){var e=this.map.getExtent();if(this.rotation){var t=this.getOrigin(),t=new OpenLayers.Geometry.Point(t.lon,t.lat),e=e.toGeometry();
e.rotate(-this.rotation,t),e=e.getBounds()}return e},updateGrid:function(e){if(e||this.invalidBounds()){var t=this.getViewBounds(),i=this.getOrigin();
e=new OpenLayers.Geometry.Point(i.lon,i.lat);var r=t.getWidth(),s=t.getHeight(),n=r/s,a=Math.sqrt(this.dx*this.dy*this.maxFeatures/n),r=Math.min(r*this.ratio,a*n),s=Math.min(s*this.ratio,a),t=t.getCenterLonLat();
this.gridBounds=new OpenLayers.Bounds(t.lon-r/2,t.lat-s/2,t.lon+r/2,t.lat+s/2);for(var o,t=Math.floor(s/this.dy),r=Math.floor(r/this.dx),s=i.lon+this.dx*Math.ceil((this.gridBounds.left-i.lon)/this.dx),i=i.lat+this.dy*Math.ceil((this.gridBounds.bottom-i.lat)/this.dy),a=Array(t*r),l=0;r>l;++l)for(var n=s+l*this.dx,h=0;t>h;++h)o=i+h*this.dy,o=new OpenLayers.Geometry.Point(n,o),this.rotation&&o.rotate(this.rotation,e),a[l*t+h]=new OpenLayers.Feature.Vector(o);
this.destroyFeatures(this.features,{silent:!0}),this.addFeatures(a,{silent:!0})}},invalidBounds:function(){return!this.gridBounds||!this.gridBounds.containsBounds(this.getViewBounds())
},CLASS_NAME:"OpenLayers.Layer.PointGrid"}),OpenLayers.Handler.MouseWheel=OpenLayers.Class(OpenLayers.Handler,{wheelListener:null,interval:0,maxDelta:Number.POSITIVE_INFINITY,delta:0,cumulative:!0,initialize:function(){OpenLayers.Handler.prototype.initialize.apply(this,arguments),this.wheelListener=OpenLayers.Function.bindAsEventListener(this.onWheelEvent,this)
},destroy:function(){OpenLayers.Handler.prototype.destroy.apply(this,arguments),this.wheelListener=null
},onWheelEvent:function(e){if(this.map&&this.checkModifiers(e)){for(var t=!1,i=!1,r=!1,s=OpenLayers.Event.element(e);null!=s&&!r&&!t;){if(!t)try{var n,t=(n=s.currentStyle?s.currentStyle.overflow:document.defaultView.getComputedStyle(s,null).getPropertyValue("overflow"))&&"auto"==n||"scroll"==n
}catch(a){}if(!i&&(i=OpenLayers.Element.hasClass(s,"olScrollable"),!i))for(var r=0,o=this.map.layers.length;o>r;r++){var l=this.map.layers[r];
if(s==l.div||s==l.pane){i=!0;break}}r=s==this.map.div,s=s.parentNode}if(!t&&r){if(i)if(t=0,e.wheelDelta?(t=e.wheelDelta,0===t%160&&(t*=.75),t/=120):e.detail&&(t=-(e.detail/Math.abs(e.detail))),this.delta+=t,window.clearTimeout(this._timeoutId),this.interval&&Math.abs(this.delta)<this.maxDelta){var h=OpenLayers.Util.extend({},e);
this._timeoutId=window.setTimeout(OpenLayers.Function.bind(function(){this.wheelZoom(h)
},this),this.interval)}else this.wheelZoom(e);OpenLayers.Event.stop(e)}}},wheelZoom:function(e){var t=this.delta;
this.delta=0,t&&(e.xy=this.map.events.getMousePosition(e),0>t?this.callback("down",[e,this.cumulative?Math.max(-this.maxDelta,t):-1]):this.callback("up",[e,this.cumulative?Math.min(this.maxDelta,t):1]))
},activate:function(){if(OpenLayers.Handler.prototype.activate.apply(this,arguments)){var e=this.wheelListener;
return OpenLayers.Event.observe(window,"DOMMouseScroll",e),OpenLayers.Event.observe(window,"mousewheel",e),OpenLayers.Event.observe(document,"mousewheel",e),!0
}return!1},deactivate:function(){if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){var e=this.wheelListener;
return OpenLayers.Event.stopObserving(window,"DOMMouseScroll",e),OpenLayers.Event.stopObserving(window,"mousewheel",e),OpenLayers.Event.stopObserving(document,"mousewheel",e),!0
}return!1},CLASS_NAME:"OpenLayers.Handler.MouseWheel"}),OpenLayers.Symbolizer=OpenLayers.Class({zIndex:0,initialize:function(e){OpenLayers.Util.extend(this,e)
},clone:function(){return new(eval(this.CLASS_NAME))(OpenLayers.Util.extend({},this))
},CLASS_NAME:"OpenLayers.Symbolizer"}),OpenLayers.Symbolizer.Raster=OpenLayers.Class(OpenLayers.Symbolizer,{initialize:function(){OpenLayers.Symbolizer.prototype.initialize.apply(this,arguments)
},CLASS_NAME:"OpenLayers.Symbolizer.Raster"}),OpenLayers.Rule=OpenLayers.Class({id:null,name:null,title:null,description:null,context:null,filter:null,elseFilter:!1,symbolizer:null,symbolizers:null,minScaleDenominator:null,maxScaleDenominator:null,initialize:function(e){this.symbolizer={},OpenLayers.Util.extend(this,e),this.symbolizers&&delete this.symbolizer,this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_")
},destroy:function(){for(var e in this.symbolizer)this.symbolizer[e]=null;this.symbolizer=null,delete this.symbolizers
},evaluate:function(e){var t=this.getContext(e),i=!0;if(this.minScaleDenominator||this.maxScaleDenominator)var r=e.layer.map.getScale();
return this.minScaleDenominator&&(i=r>=OpenLayers.Style.createLiteral(this.minScaleDenominator,t)),i&&this.maxScaleDenominator&&(i=r<OpenLayers.Style.createLiteral(this.maxScaleDenominator,t)),i&&this.filter&&(i="OpenLayers.Filter.FeatureId"==this.filter.CLASS_NAME?this.filter.evaluate(e):this.filter.evaluate(t)),i
},getContext:function(e){var t=this.context;return t||(t=e.attributes||e.data),"function"==typeof this.context&&(t=this.context(e)),t
},clone:function(){var e=OpenLayers.Util.extend({},this);if(this.symbolizers){var t=this.symbolizers.length;
e.symbolizers=Array(t);for(var i=0;t>i;++i)e.symbolizers[i]=this.symbolizers[i].clone()
}else{e.symbolizer={};for(var r in this.symbolizer)t=this.symbolizer[r],i=typeof t,"object"===i?e.symbolizer[r]=OpenLayers.Util.extend({},t):"string"===i&&(e.symbolizer[r]=t)
}return e.filter=this.filter&&this.filter.clone(),e.context=this.context&&OpenLayers.Util.extend({},this.context),new OpenLayers.Rule(e)
},CLASS_NAME:"OpenLayers.Rule"}),OpenLayers.Format.SLD=OpenLayers.Class(OpenLayers.Format.XML.VersionedOGC,{profile:null,defaultVersion:"1.0.0",stringifyOutput:!0,namedLayersAsArray:!1,CLASS_NAME:"OpenLayers.Format.SLD"}),OpenLayers.Symbolizer.Polygon=OpenLayers.Class(OpenLayers.Symbolizer,{initialize:function(){OpenLayers.Symbolizer.prototype.initialize.apply(this,arguments)
},CLASS_NAME:"OpenLayers.Symbolizer.Polygon"}),OpenLayers.Format.GML.v2=OpenLayers.Class(OpenLayers.Format.GML.Base,{schemaLocation:"http://www.opengis.net/gml http://schemas.opengis.net/gml/2.1.2/feature.xsd",initialize:function(e){OpenLayers.Format.GML.Base.prototype.initialize.apply(this,[e])
},readers:{gml:OpenLayers.Util.applyDefaults({outerBoundaryIs:function(e,t){var i={};
this.readChildNodes(e,i),t.outer=i.components[0]},innerBoundaryIs:function(e,t){var i={};
this.readChildNodes(e,i),t.inner.push(i.components[0])},Box:function(e,t){var i={};
this.readChildNodes(e,i),t.components||(t.components=[]);var r=i.points[0],i=i.points[1];
t.components.push(new OpenLayers.Bounds(r.x,r.y,i.x,i.y))}},OpenLayers.Format.GML.Base.prototype.readers.gml),feature:OpenLayers.Format.GML.Base.prototype.readers.feature,wfs:OpenLayers.Format.GML.Base.prototype.readers.wfs},write:function(e){var t;
return t=OpenLayers.Util.isArray(e)?"wfs:FeatureCollection":"gml:featureMember",e=this.writeNode(t,e),this.setAttributeNS(e,this.namespaces.xsi,"xsi:schemaLocation",this.schemaLocation),OpenLayers.Format.XML.prototype.write.apply(this,[e])
},writers:{gml:OpenLayers.Util.applyDefaults({Point:function(e){var t=this.createElementNSPlus("gml:Point");
return this.writeNode("coordinates",[e],t),t},coordinates:function(e){for(var t,i=e.length,r=Array(i),s=0;i>s;++s)t=e[s],r[s]=this.xy?t.x+","+t.y:t.y+","+t.x,void 0!=t.z&&(r[s]+=","+t.z);
return this.createElementNSPlus("gml:coordinates",{attributes:{decimal:".",cs:",",ts:" "},value:1==i?r[0]:r.join(" ")})
},LineString:function(e){var t=this.createElementNSPlus("gml:LineString");return this.writeNode("coordinates",e.components,t),t
},Polygon:function(e){var t=this.createElementNSPlus("gml:Polygon");this.writeNode("outerBoundaryIs",e.components[0],t);
for(var i=1;i<e.components.length;++i)this.writeNode("innerBoundaryIs",e.components[i],t);
return t},outerBoundaryIs:function(e){var t=this.createElementNSPlus("gml:outerBoundaryIs");
return this.writeNode("LinearRing",e,t),t},innerBoundaryIs:function(e){var t=this.createElementNSPlus("gml:innerBoundaryIs");
return this.writeNode("LinearRing",e,t),t},LinearRing:function(e){var t=this.createElementNSPlus("gml:LinearRing");
return this.writeNode("coordinates",e.components,t),t},Box:function(e){var t=this.createElementNSPlus("gml:Box");
return this.writeNode("coordinates",[{x:e.left,y:e.bottom},{x:e.right,y:e.top}],t),this.srsName&&t.setAttribute("srsName",this.srsName),t
}},OpenLayers.Format.GML.Base.prototype.writers.gml),feature:OpenLayers.Format.GML.Base.prototype.writers.feature,wfs:OpenLayers.Format.GML.Base.prototype.writers.wfs},CLASS_NAME:"OpenLayers.Format.GML.v2"}),OpenLayers.Format.Filter.v1_0_0=OpenLayers.Class(OpenLayers.Format.GML.v2,OpenLayers.Format.Filter.v1,{VERSION:"1.0.0",schemaLocation:"http://www.opengis.net/ogc/filter/1.0.0/filter.xsd",initialize:function(e){OpenLayers.Format.GML.v2.prototype.initialize.apply(this,[e])
},readers:{ogc:OpenLayers.Util.applyDefaults({PropertyIsEqualTo:function(e,t){var i=new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.EQUAL_TO});
this.readChildNodes(e,i),t.filters.push(i)},PropertyIsNotEqualTo:function(e,t){var i=new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.NOT_EQUAL_TO});
this.readChildNodes(e,i),t.filters.push(i)},PropertyIsLike:function(e,t){var i=new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.LIKE});
this.readChildNodes(e,i);var r=e.getAttribute("wildCard"),s=e.getAttribute("singleChar"),n=e.getAttribute("escape");
i.value2regex(r,s,n),t.filters.push(i)}},OpenLayers.Format.Filter.v1.prototype.readers.ogc),gml:OpenLayers.Format.GML.v2.prototype.readers.gml,feature:OpenLayers.Format.GML.v2.prototype.readers.feature},writers:{ogc:OpenLayers.Util.applyDefaults({PropertyIsEqualTo:function(e){var t=this.createElementNSPlus("ogc:PropertyIsEqualTo");
return this.writeNode("PropertyName",e,t),this.writeOgcExpression(e.value,t),t},PropertyIsNotEqualTo:function(e){var t=this.createElementNSPlus("ogc:PropertyIsNotEqualTo");
return this.writeNode("PropertyName",e,t),this.writeOgcExpression(e.value,t),t},PropertyIsLike:function(e){var t=this.createElementNSPlus("ogc:PropertyIsLike",{attributes:{wildCard:"*",singleChar:".",escape:"!"}});
return this.writeNode("PropertyName",e,t),this.writeNode("Literal",e.regex2value(),t),t
},BBOX:function(e){var t=this.createElementNSPlus("ogc:BBOX");e.property&&this.writeNode("PropertyName",e,t);
var i=this.writeNode("gml:Box",e.value,t);return e.projection&&i.setAttribute("srsName",e.projection),t
}},OpenLayers.Format.Filter.v1.prototype.writers.ogc),gml:OpenLayers.Format.GML.v2.prototype.writers.gml,feature:OpenLayers.Format.GML.v2.prototype.writers.feature},writeSpatial:function(e,t){var i=this.createElementNSPlus("ogc:"+t);
if(this.writeNode("PropertyName",e,i),e.value instanceof OpenLayers.Filter.Function)this.writeNode("Function",e.value,i);
else{var r;r=e.value instanceof OpenLayers.Geometry?this.writeNode("feature:_geometry",e.value).firstChild:this.writeNode("gml:Box",e.value),e.projection&&r.setAttribute("srsName",e.projection),i.appendChild(r)
}return i},CLASS_NAME:"OpenLayers.Format.Filter.v1_0_0"}),OpenLayers.Format.WFST.v1_0_0=OpenLayers.Class(OpenLayers.Format.Filter.v1_0_0,OpenLayers.Format.WFST.v1,{version:"1.0.0",srsNameInQuery:!1,schemaLocations:{wfs:"http://schemas.opengis.net/wfs/1.0.0/WFS-transaction.xsd"},initialize:function(e){OpenLayers.Format.Filter.v1_0_0.prototype.initialize.apply(this,[e]),OpenLayers.Format.WFST.v1.prototype.initialize.apply(this,[e])
},readNode:function(){return OpenLayers.Format.GML.v2.prototype.readNode.apply(this,arguments)
},readers:{wfs:OpenLayers.Util.applyDefaults({WFS_TransactionResponse:function(e,t){t.insertIds=[],t.success=!1,this.readChildNodes(e,t)
},InsertResult:function(e,t){var i={fids:[]};this.readChildNodes(e,i),t.insertIds=t.insertIds.concat(i.fids)
},TransactionResult:function(e,t){this.readChildNodes(e,t)},Status:function(e,t){this.readChildNodes(e,t)
},SUCCESS:function(e,t){t.success=!0}},OpenLayers.Format.WFST.v1.prototype.readers.wfs),gml:OpenLayers.Format.GML.v2.prototype.readers.gml,feature:OpenLayers.Format.GML.v2.prototype.readers.feature,ogc:OpenLayers.Format.Filter.v1_0_0.prototype.readers.ogc},writers:{wfs:OpenLayers.Util.applyDefaults({Query:function(e){e=OpenLayers.Util.extend({featureNS:this.featureNS,featurePrefix:this.featurePrefix,featureType:this.featureType,srsName:this.srsName,srsNameInQuery:this.srsNameInQuery},e);
var t=e.featurePrefix,i=this.createElementNSPlus("wfs:Query",{attributes:{typeName:(t?t+":":"")+e.featureType}});
if(e.srsNameInQuery&&e.srsName&&i.setAttribute("srsName",e.srsName),e.featureNS&&i.setAttribute("xmlns:"+t,e.featureNS),e.propertyNames)for(var t=0,r=e.propertyNames.length;r>t;t++)this.writeNode("ogc:PropertyName",{property:e.propertyNames[t]},i);
return e.filter&&(this.setFilterProperty(e.filter),this.writeNode("ogc:Filter",e.filter,i)),i
}},OpenLayers.Format.WFST.v1.prototype.writers.wfs),gml:OpenLayers.Format.GML.v2.prototype.writers.gml,feature:OpenLayers.Format.GML.v2.prototype.writers.feature,ogc:OpenLayers.Format.Filter.v1_0_0.prototype.writers.ogc},CLASS_NAME:"OpenLayers.Format.WFST.v1_0_0"}),OpenLayers.ElementsIndexer=OpenLayers.Class({maxZIndex:null,order:null,indices:null,compare:null,initialize:function(e){this.compare=e?OpenLayers.ElementsIndexer.IndexingMethods.Z_ORDER_Y_ORDER:OpenLayers.ElementsIndexer.IndexingMethods.Z_ORDER_DRAWING_ORDER,this.clear()
},insert:function(e){this.exists(e)&&this.remove(e);var t=e.id;this.determineZIndex(e);
for(var i,r=-1,s=this.order.length;s-r>1;)i=parseInt((r+s)/2),0<this.compare(this,e,OpenLayers.Util.getElement(this.order[i]))?r=i:s=i;
return this.order.splice(s,0,t),this.indices[t]=this.getZIndex(e),this.getNextElement(s)
},remove:function(e){e=e.id;var t=OpenLayers.Util.indexOf(this.order,e);t>=0&&(this.order.splice(t,1),delete this.indices[e],this.maxZIndex=0<this.order.length?this.indices[this.order[this.order.length-1]]:0)
},clear:function(){this.order=[],this.indices={},this.maxZIndex=0},exists:function(e){return null!=this.indices[e.id]
},getZIndex:function(e){return e._style.graphicZIndex},determineZIndex:function(e){var t=e._style.graphicZIndex;
null==t?(t=this.maxZIndex,e._style.graphicZIndex=t):t>this.maxZIndex&&(this.maxZIndex=t)
},getNextElement:function(e){if(e+=1,e<this.order.length){var t=OpenLayers.Util.getElement(this.order[e]);
return void 0==t&&(t=this.getNextElement(e)),t}return null},CLASS_NAME:"OpenLayers.ElementsIndexer"}),OpenLayers.ElementsIndexer.IndexingMethods={Z_ORDER:function(e,t,i){t=e.getZIndex(t);
var r=0;return i&&(e=e.getZIndex(i),r=t-e),r},Z_ORDER_DRAWING_ORDER:function(e,t,i){return e=OpenLayers.ElementsIndexer.IndexingMethods.Z_ORDER(e,t,i),i&&0==e&&(e=1),e
},Z_ORDER_Y_ORDER:function(e,t,i){return e=OpenLayers.ElementsIndexer.IndexingMethods.Z_ORDER(e,t,i),i&&0===e&&(t=i._boundsBottom-t._boundsBottom,e=0===t?1:t),e
}},OpenLayers.Renderer.Elements=OpenLayers.Class(OpenLayers.Renderer,{rendererRoot:null,root:null,vectorRoot:null,textRoot:null,xmlns:null,xOffset:0,indexer:null,BACKGROUND_ID_SUFFIX:"_background",LABEL_ID_SUFFIX:"_label",LABEL_OUTLINE_SUFFIX:"_outline",initialize:function(e,t){OpenLayers.Renderer.prototype.initialize.apply(this,arguments),this.rendererRoot=this.createRenderRoot(),this.root=this.createRoot("_root"),this.vectorRoot=this.createRoot("_vroot"),this.textRoot=this.createRoot("_troot"),this.root.appendChild(this.vectorRoot),this.root.appendChild(this.textRoot),this.rendererRoot.appendChild(this.root),this.container.appendChild(this.rendererRoot),t&&(t.zIndexing||t.yOrdering)&&(this.indexer=new OpenLayers.ElementsIndexer(t.yOrdering))
},destroy:function(){this.clear(),this.xmlns=this.root=this.rendererRoot=null,OpenLayers.Renderer.prototype.destroy.apply(this,arguments)
},clear:function(){var e,t=this.vectorRoot;if(t)for(;e=t.firstChild;)t.removeChild(e);
if(t=this.textRoot)for(;e=t.firstChild;)t.removeChild(e);this.indexer&&this.indexer.clear()
},setExtent:function(e,t){var i=OpenLayers.Renderer.prototype.setExtent.apply(this,arguments),r=this.getResolution();
if(this.map.baseLayer&&this.map.baseLayer.wrapDateLine){var s,n=e.getWidth()/this.map.getExtent().getWidth();
e=e.scale(1/n),n=this.map.getMaxExtent(),n.right>e.left&&n.right<e.right?s=!0:n.left>e.left&&n.left<e.right&&(s=!1),(s!==this.rightOfDateLine||t)&&(i=!1,this.xOffset=!0===s?n.getWidth()/r:0),this.rightOfDateLine=s
}return i},getNodeType:function(){},drawGeometry:function(e,t,i){var r=e.CLASS_NAME,s=!0;
if("OpenLayers.Geometry.Collection"==r||"OpenLayers.Geometry.MultiPoint"==r||"OpenLayers.Geometry.MultiLineString"==r||"OpenLayers.Geometry.MultiPolygon"==r){for(var r=0,n=e.components.length;n>r;r++)s=this.drawGeometry(e.components[r],t,i)&&s;
return s}return r=s=!1,"none"!=t.display&&(t.backgroundGraphic?this.redrawBackgroundNode(e.id,e,t,i):r=!0,s=this.redrawNode(e.id,e,t,i)),0==s&&(t=document.getElementById(e.id))&&(t._style.backgroundGraphic&&(r=!0),t.parentNode.removeChild(t)),r&&(t=document.getElementById(e.id+this.BACKGROUND_ID_SUFFIX))&&t.parentNode.removeChild(t),s
},redrawNode:function(e,t,i,r){return i=this.applyDefaultSymbolizer(i),e=this.nodeFactory(e,this.getNodeType(t,i)),e._featureId=r,e._boundsBottom=t.getBounds().bottom,e._geometryClass=t.CLASS_NAME,e._style=i,t=this.drawGeometryNode(e,t,i),!1===t?!1:(e=t.node,this.indexer?(i=this.indexer.insert(e))?this.vectorRoot.insertBefore(e,i):this.vectorRoot.appendChild(e):e.parentNode!==this.vectorRoot&&this.vectorRoot.appendChild(e),this.postDraw(e),t.complete)
},redrawBackgroundNode:function(e,t,i){return i=OpenLayers.Util.extend({},i),i.externalGraphic=i.backgroundGraphic,i.graphicXOffset=i.backgroundXOffset,i.graphicYOffset=i.backgroundYOffset,i.graphicZIndex=i.backgroundGraphicZIndex,i.graphicWidth=i.backgroundWidth||i.graphicWidth,i.graphicHeight=i.backgroundHeight||i.graphicHeight,i.backgroundGraphic=null,i.backgroundXOffset=null,i.backgroundYOffset=null,i.backgroundGraphicZIndex=null,this.redrawNode(e+this.BACKGROUND_ID_SUFFIX,t,i,null)
},drawGeometryNode:function(e,t,i){i=i||e._style;var r,s={isFilled:void 0===i.fill?!0:i.fill,isStroked:void 0===i.stroke?!!i.strokeWidth:i.stroke};
switch(t.CLASS_NAME){case"OpenLayers.Geometry.Point":!1===i.graphic&&(s.isFilled=!1,s.isStroked=!1),r=this.drawPoint(e,t);
break;case"OpenLayers.Geometry.LineString":s.isFilled=!1,r=this.drawLineString(e,t);
break;case"OpenLayers.Geometry.LinearRing":r=this.drawLinearRing(e,t);break;case"OpenLayers.Geometry.Polygon":r=this.drawPolygon(e,t);
break;case"OpenLayers.Geometry.Rectangle":r=this.drawRectangle(e,t)}return e._options=s,0!=r?{node:this.setStyle(e,i,s,t),complete:r}:!1
},postDraw:function(){},drawPoint:function(){},drawLineString:function(){},drawLinearRing:function(){},drawPolygon:function(){},drawRectangle:function(){},drawCircle:function(){},removeText:function(e){var t=document.getElementById(e+this.LABEL_ID_SUFFIX);
t&&this.textRoot.removeChild(t),(e=document.getElementById(e+this.LABEL_OUTLINE_SUFFIX))&&this.textRoot.removeChild(e)
},getFeatureIdFromEvent:function(e){var t=e.target,i=t&&t.correspondingUseElement;
return(i?i:t||e.srcElement)._featureId},eraseGeometry:function(e,t){if("OpenLayers.Geometry.MultiPoint"==e.CLASS_NAME||"OpenLayers.Geometry.MultiLineString"==e.CLASS_NAME||"OpenLayers.Geometry.MultiPolygon"==e.CLASS_NAME||"OpenLayers.Geometry.Collection"==e.CLASS_NAME)for(var i=0,r=e.components.length;r>i;i++)this.eraseGeometry(e.components[i],t);
else(i=OpenLayers.Util.getElement(e.id))&&i.parentNode&&(i.geometry&&(i.geometry.destroy(),i.geometry=null),i.parentNode.removeChild(i),this.indexer&&this.indexer.remove(i),i._style.backgroundGraphic&&(i=OpenLayers.Util.getElement(e.id+this.BACKGROUND_ID_SUFFIX))&&i.parentNode&&i.parentNode.removeChild(i))
},nodeFactory:function(e,t){var i=OpenLayers.Util.getElement(e);return i?this.nodeTypeCompare(i,t)||(i.parentNode.removeChild(i),i=this.nodeFactory(e,t)):i=this.createNode(t,e),i
},nodeTypeCompare:function(){},createNode:function(){},moveRoot:function(e){var t=this.root;
e.root.parentNode==this.rendererRoot&&(t=e.root),t.parentNode.removeChild(t),e.rendererRoot.appendChild(t)
},getRenderLayerId:function(){return this.root.parentNode.parentNode.id},isComplexSymbol:function(e){return"circle"!=e&&!!e
},CLASS_NAME:"OpenLayers.Renderer.Elements"}),OpenLayers.Control.ArgParser=OpenLayers.Class(OpenLayers.Control,{center:null,zoom:null,layers:null,displayProjection:null,getParameters:function(e){e=e||window.location.href;
var t=OpenLayers.Util.getParameters(e),i=e.indexOf("#");return i>0&&(e="?"+e.substring(i+1,e.length),OpenLayers.Util.extend(t,OpenLayers.Util.getParameters(e))),t
},setMap:function(){OpenLayers.Control.prototype.setMap.apply(this,arguments);for(var e=0,t=this.map.controls.length;t>e;e++){var i=this.map.controls[e];
if(i!=this&&"OpenLayers.Control.ArgParser"==i.CLASS_NAME){i.displayProjection!=this.displayProjection&&(this.displayProjection=i.displayProjection);
break}}e==this.map.controls.length&&(e=this.getParameters(),e.layers&&(this.layers=e.layers,this.map.events.register("addlayer",this,this.configureLayers),this.configureLayers()),e.lat&&e.lon&&(this.center=new OpenLayers.LonLat(parseFloat(e.lon),parseFloat(e.lat)),e.zoom&&(this.zoom=parseFloat(e.zoom)),this.map.events.register("changebaselayer",this,this.setCenter),this.setCenter()))
},setCenter:function(){this.map.baseLayer&&(this.map.events.unregister("changebaselayer",this,this.setCenter),this.displayProjection&&this.center.transform(this.displayProjection,this.map.getProjectionObject()),this.map.setCenter(this.center,this.zoom))
},configureLayers:function(){if(this.layers.length==this.map.layers.length){this.map.events.unregister("addlayer",this,this.configureLayers);
for(var e=0,t=this.layers.length;t>e;e++){var i=this.map.layers[e],r=this.layers.charAt(e);
"B"==r?this.map.setBaseLayer(i):"T"!=r&&"F"!=r||i.setVisibility("T"==r)}}},CLASS_NAME:"OpenLayers.Control.ArgParser"}),OpenLayers.Control.Permalink=OpenLayers.Class(OpenLayers.Control,{argParserClass:OpenLayers.Control.ArgParser,element:null,anchor:!1,base:"",displayProjection:null,initialize:function(e,t,i){null===e||"object"!=typeof e||OpenLayers.Util.isElement(e)?(OpenLayers.Control.prototype.initialize.apply(this,[i]),this.element=OpenLayers.Util.getElement(e),this.base=t||document.location.href):(this.base=document.location.href,OpenLayers.Control.prototype.initialize.apply(this,[e]),null!=this.element&&(this.element=OpenLayers.Util.getElement(this.element)))
},destroy:function(){this.element&&this.element.parentNode==this.div&&(this.div.removeChild(this.element),this.element=null),this.map&&this.map.events.unregister("moveend",this,this.updateLink),OpenLayers.Control.prototype.destroy.apply(this,arguments)
},setMap:function(){OpenLayers.Control.prototype.setMap.apply(this,arguments);for(var e=0,t=this.map.controls.length;t>e;e++){var i=this.map.controls[e];
if(i.CLASS_NAME==this.argParserClass.CLASS_NAME){i.displayProjection!=this.displayProjection&&(this.displayProjection=i.displayProjection);
break}}e==this.map.controls.length&&this.map.addControl(new this.argParserClass({displayProjection:this.displayProjection}))
},draw:function(){return OpenLayers.Control.prototype.draw.apply(this,arguments),this.element||this.anchor||(this.element=document.createElement("a"),this.element.innerHTML=OpenLayers.i18n("Permalink"),this.element.href="",this.div.appendChild(this.element)),this.map.events.on({moveend:this.updateLink,changelayer:this.updateLink,changebaselayer:this.updateLink,scope:this}),this.updateLink(),this.div
},updateLink:function(){var e=this.anchor?"#":"?",t=this.base,i=null;-1!=t.indexOf("#")&&0==this.anchor&&(i=t.substring(t.indexOf("#"),t.length)),-1!=t.indexOf(e)&&(t=t.substring(0,t.indexOf(e))),t=t.split("#")[0]+e+OpenLayers.Util.getParameterString(this.createParams()),i&&(t+=i),this.anchor&&!this.element?window.location.href=t:this.element.href=t
},createParams:function(e,t,i){e=e||this.map.getCenter();var r=OpenLayers.Util.getParameters(this.base);
if(e)for(r.zoom=t||this.map.getZoom(),t=e.lat,e=e.lon,this.displayProjection&&(t=OpenLayers.Projection.transform({x:e,y:t},this.map.getProjectionObject(),this.displayProjection),e=t.x,t=t.y),r.lat=Math.round(1e5*t)/1e5,r.lon=Math.round(1e5*e)/1e5,i=i||this.map.layers,r.layers="",e=0,t=i.length;t>e;e++){var s=i[e];
r.layers=s.isBaseLayer?r.layers+(s==this.map.baseLayer?"B":"0"):r.layers+(s.getVisibility()?"T":"F")
}return r},CLASS_NAME:"OpenLayers.Control.Permalink"}),OpenLayers.Layer.TMS=OpenLayers.Class(OpenLayers.Layer.Grid,{serviceVersion:"1.0.0",layername:null,type:null,isBaseLayer:!0,tileOrigin:null,serverResolutions:null,zoomOffset:0,initialize:function(e,t,i){var r=[];
r.push(e,t,{},i),OpenLayers.Layer.Grid.prototype.initialize.apply(this,r)},clone:function(e){return null==e&&(e=new OpenLayers.Layer.TMS(this.name,this.url,this.getOptions())),e=OpenLayers.Layer.Grid.prototype.clone.apply(this,[e])
},getURL:function(e){e=this.adjustBounds(e);var t=this.getServerResolution(),i=Math.round((e.left-this.tileOrigin.lon)/(t*this.tileSize.w));
return e=Math.round((e.bottom-this.tileOrigin.lat)/(t*this.tileSize.h)),t=this.getServerZoom(),i=this.serviceVersion+"/"+this.layername+"/"+t+"/"+i+"/"+e+"."+this.type,e=this.url,OpenLayers.Util.isArray(e)&&(e=this.selectUrl(i,e)),e+i
},setMap:function(){OpenLayers.Layer.Grid.prototype.setMap.apply(this,arguments),this.tileOrigin||(this.tileOrigin=new OpenLayers.LonLat(this.map.maxExtent.left,this.map.maxExtent.bottom))
},CLASS_NAME:"OpenLayers.Layer.TMS"}),OpenLayers.Format.WCSCapabilities=OpenLayers.Class(OpenLayers.Format.XML.VersionedOGC,{defaultVersion:"1.1.0",CLASS_NAME:"OpenLayers.Format.WCSCapabilities"}),OpenLayers.Format.WCSCapabilities.v1=OpenLayers.Class(OpenLayers.Format.XML,{regExes:{trimSpace:/^\s*|\s*$/g,splitSpace:/\s+/},defaultPrefix:"wcs",read:function(e){"string"==typeof e&&(e=OpenLayers.Format.XML.prototype.read.apply(this,[e])),e&&9==e.nodeType&&(e=e.documentElement);
var t={};return this.readNode(e,t),t},CLASS_NAME:"OpenLayers.Format.WCSCapabilities.v1"}),OpenLayers.Format.WCSCapabilities.v1_0_0=OpenLayers.Class(OpenLayers.Format.WCSCapabilities.v1,{namespaces:{wcs:"http://www.opengis.net/wcs",xlink:"http://www.w3.org/1999/xlink",xsi:"http://www.w3.org/2001/XMLSchema-instance",ows:"http://www.opengis.net/ows"},errorProperty:"service",readers:{wcs:{WCS_Capabilities:function(e,t){this.readChildNodes(e,t)
},Service:function(e,t){t.service={},this.readChildNodes(e,t.service)},name:function(e,t){t.name=this.getChildValue(e)
},label:function(e,t){t.label=this.getChildValue(e)},keywords:function(e,t){t.keywords=[],this.readChildNodes(e,t.keywords)
},keyword:function(e,t){t.push(this.getChildValue(e))},responsibleParty:function(e,t){t.responsibleParty={},this.readChildNodes(e,t.responsibleParty)
},individualName:function(e,t){t.individualName=this.getChildValue(e)},organisationName:function(e,t){t.organisationName=this.getChildValue(e)
},positionName:function(e,t){t.positionName=this.getChildValue(e)},contactInfo:function(e,t){t.contactInfo={},this.readChildNodes(e,t.contactInfo)
},phone:function(e,t){t.phone={},this.readChildNodes(e,t.phone)},voice:function(e,t){t.voice=this.getChildValue(e)
},facsimile:function(e,t){t.facsimile=this.getChildValue(e)},address:function(e,t){t.address={},this.readChildNodes(e,t.address)
},deliveryPoint:function(e,t){t.deliveryPoint=this.getChildValue(e)},city:function(e,t){t.city=this.getChildValue(e)
},postalCode:function(e,t){t.postalCode=this.getChildValue(e)},country:function(e,t){t.country=this.getChildValue(e)
},electronicMailAddress:function(e,t){t.electronicMailAddress=this.getChildValue(e)
},fees:function(e,t){t.fees=this.getChildValue(e)},accessConstraints:function(e,t){t.accessConstraints=this.getChildValue(e)
},ContentMetadata:function(e,t){t.contentMetadata=[],this.readChildNodes(e,t.contentMetadata)
},CoverageOfferingBrief:function(e,t){var i={};this.readChildNodes(e,i),t.push(i)
},name:function(e,t){t.name=this.getChildValue(e)},label:function(e,t){t.label=this.getChildValue(e)
},lonLatEnvelope:function(e,t){var i=this.getElementsByTagNameNS(e,"http://www.opengis.net/gml","pos");
if(2==i.length){var r={},s={};OpenLayers.Format.GML.v3.prototype.readers.gml.pos.apply(this,[i[0],r]),OpenLayers.Format.GML.v3.prototype.readers.gml.pos.apply(this,[i[1],s]),t.lonLatEnvelope={},t.lonLatEnvelope.srsName=e.getAttribute("srsName"),t.lonLatEnvelope.min=r.points[0],t.lonLatEnvelope.max=s.points[0]
}}}},CLASS_NAME:"OpenLayers.Format.WCSCapabilities.v1_0_0"}),OpenLayers.Strategy.Fixed=OpenLayers.Class(OpenLayers.Strategy,{preload:!1,activate:function(){var e=OpenLayers.Strategy.prototype.activate.apply(this,arguments);
return e&&(this.layer.events.on({refresh:this.load,scope:this}),1==this.layer.visibility||this.preload?this.load():this.layer.events.on({visibilitychanged:this.load,scope:this})),e
},deactivate:function(){var e=OpenLayers.Strategy.prototype.deactivate.call(this);
return e&&this.layer.events.un({refresh:this.load,visibilitychanged:this.load,scope:this}),e
},load:function(e){var t=this.layer;t.events.triggerEvent("loadstart",{filter:t.filter}),t.protocol.read(OpenLayers.Util.applyDefaults({callback:this.merge,filter:t.filter,scope:this},e)),t.events.un({visibilitychanged:this.load,scope:this})
},merge:function(e){var t=this.layer;t.destroyFeatures();var i=e.features;if(i&&0<i.length){var r=t.projection,s=t.map.getProjectionObject();
if(!s.equals(r))for(var n,a=0,o=i.length;o>a;++a)(n=i[a].geometry)&&n.transform(r,s);
t.addFeatures(i)}t.events.triggerEvent("loadend",{response:e})},CLASS_NAME:"OpenLayers.Strategy.Fixed"}),OpenLayers.Control.Zoom=OpenLayers.Class(OpenLayers.Control,{zoomInText:"+",zoomInId:"olZoomInLink",zoomOutText:"−",zoomOutId:"olZoomOutLink",draw:function(){var e=OpenLayers.Control.prototype.draw.apply(this),t=this.getOrCreateLinks(e),i=t.zoomIn,t=t.zoomOut,r=this.map.events;
return t.parentNode!==e&&(r=this.events,r.attachToElement(t.parentNode)),r.register("buttonclick",this,this.onZoomClick),this.zoomInLink=i,this.zoomOutLink=t,e
},getOrCreateLinks:function(e){var t=document.getElementById(this.zoomInId),i=document.getElementById(this.zoomOutId);
return t||(t=document.createElement("a"),t.href="#zoomIn",t.appendChild(document.createTextNode(this.zoomInText)),t.className="olControlZoomIn",e.appendChild(t)),OpenLayers.Element.addClass(t,"olButton"),i||(i=document.createElement("a"),i.href="#zoomOut",i.appendChild(document.createTextNode(this.zoomOutText)),i.className="olControlZoomOut",e.appendChild(i)),OpenLayers.Element.addClass(i,"olButton"),{zoomIn:t,zoomOut:i}
},onZoomClick:function(e){e=e.buttonElement,e===this.zoomInLink?this.map.zoomIn():e===this.zoomOutLink&&this.map.zoomOut()
},destroy:function(){this.map&&this.map.events.unregister("buttonclick",this,this.onZoomClick),delete this.zoomInLink,delete this.zoomOutLink,OpenLayers.Control.prototype.destroy.apply(this)
},CLASS_NAME:"OpenLayers.Control.Zoom"}),OpenLayers.Layer.PointTrack=OpenLayers.Class(OpenLayers.Layer.Vector,{dataFrom:null,styleFrom:null,addNodes:function(e,t){if(2>e.length)throw Error("At least two point features have to be added to create a line from");
for(var i,r,s,n=Array(e.length-1),a=0,o=e.length;o>a;a++){if(i=e[a],s=i.geometry){if("OpenLayers.Geometry.Point"!=s.CLASS_NAME)throw new TypeError("Only features with point geometries are supported.")
}else s=i.lonlat,s=new OpenLayers.Geometry.Point(s.lon,s.lat);if(a>0){i=null!=this.dataFrom?e[a+this.dataFrom].data||e[a+this.dataFrom].attributes:null;
var l=null!=this.styleFrom?e[a+this.styleFrom].style:null;r=new OpenLayers.Geometry.LineString([r,s]),n[a-1]=new OpenLayers.Feature.Vector(r,i,l)
}r=s}this.addFeatures(n,t)},CLASS_NAME:"OpenLayers.Layer.PointTrack"}),OpenLayers.Layer.PointTrack.SOURCE_NODE=-1,OpenLayers.Layer.PointTrack.TARGET_NODE=0,OpenLayers.Layer.PointTrack.dataFrom={SOURCE_NODE:-1,TARGET_NODE:0},OpenLayers.Protocol.WFS=function(e){e=OpenLayers.Util.applyDefaults(e,OpenLayers.Protocol.WFS.DEFAULTS);
var t=OpenLayers.Protocol.WFS["v"+e.version.replace(/\./g,"_")];if(!t)throw"Unsupported WFS version: "+e.version;
return new t(e)},OpenLayers.Protocol.WFS.fromWMSLayer=function(e,t){var i,r;return i=e.params.LAYERS,i=(OpenLayers.Util.isArray(i)?i[0]:i).split(":"),1<i.length&&(r=i[0]),i=i.pop(),r={url:e.url,featureType:i,featurePrefix:r,srsName:e.projection&&e.projection.getCode()||e.map&&e.map.getProjectionObject().getCode(),version:"1.1.0"},new OpenLayers.Protocol.WFS(OpenLayers.Util.applyDefaults(t,r))
},OpenLayers.Protocol.WFS.DEFAULTS={version:"1.0.0"},OpenLayers.Layer.Markers=OpenLayers.Class(OpenLayers.Layer,{isBaseLayer:!1,markers:null,drawn:!1,initialize:function(){OpenLayers.Layer.prototype.initialize.apply(this,arguments),this.markers=[]
},destroy:function(){this.clearMarkers(),this.markers=null,OpenLayers.Layer.prototype.destroy.apply(this,arguments)
},setOpacity:function(e){if(e!=this.opacity){this.opacity=e,e=0;for(var t=this.markers.length;t>e;e++)this.markers[e].setOpacity(this.opacity)
}},moveTo:function(e,t){if(OpenLayers.Layer.prototype.moveTo.apply(this,arguments),t||!this.drawn){for(var i=0,r=this.markers.length;r>i;i++)this.drawMarker(this.markers[i]);
this.drawn=!0}},addMarker:function(e){this.markers.push(e),1>this.opacity&&e.setOpacity(this.opacity),this.map&&this.map.getExtent()&&(e.map=this.map,this.drawMarker(e))
},removeMarker:function(e){this.markers&&this.markers.length&&(OpenLayers.Util.removeItem(this.markers,e),e.erase())
},clearMarkers:function(){if(null!=this.markers)for(;0<this.markers.length;)this.removeMarker(this.markers[0])
},drawMarker:function(e){var t=this.map.getLayerPxFromLonLat(e.lonlat);null==t?e.display(!1):e.isDrawn()?e.icon&&e.icon.moveTo(t):(e=e.draw(t),this.div.appendChild(e))
},getDataExtent:function(){var e=null;if(this.markers&&0<this.markers.length)for(var e=new OpenLayers.Bounds,t=0,i=this.markers.length;i>t;t++)e.extend(this.markers[t].lonlat);
return e},CLASS_NAME:"OpenLayers.Layer.Markers"}),OpenLayers.Control.Pan=OpenLayers.Class(OpenLayers.Control.Button,{slideFactor:50,slideRatio:null,direction:null,initialize:function(e,t){this.direction=e,this.CLASS_NAME+=this.direction,OpenLayers.Control.prototype.initialize.apply(this,[t])
},trigger:function(){if(this.map){var e=OpenLayers.Function.bind(function(e){return this.slideRatio?this.map.getSize()[e]*this.slideRatio:this.slideFactor
},this);switch(this.direction){case OpenLayers.Control.Pan.NORTH:this.map.pan(0,-e("h"));
break;case OpenLayers.Control.Pan.SOUTH:this.map.pan(0,e("h"));break;case OpenLayers.Control.Pan.WEST:this.map.pan(-e("w"),0);
break;case OpenLayers.Control.Pan.EAST:this.map.pan(e("w"),0)}}},CLASS_NAME:"OpenLayers.Control.Pan"}),OpenLayers.Control.Pan.NORTH="North",OpenLayers.Control.Pan.SOUTH="South",OpenLayers.Control.Pan.EAST="East",OpenLayers.Control.Pan.WEST="West",OpenLayers.Format.CSWGetDomain=function(e){e=OpenLayers.Util.applyDefaults(e,OpenLayers.Format.CSWGetDomain.DEFAULTS);
var t=OpenLayers.Format.CSWGetDomain["v"+e.version.replace(/\./g,"_")];if(!t)throw"Unsupported CSWGetDomain version: "+e.version;
return new t(e)},OpenLayers.Format.CSWGetDomain.DEFAULTS={version:"2.0.2"},OpenLayers.Format.CSWGetDomain.v2_0_2=OpenLayers.Class(OpenLayers.Format.XML,{namespaces:{xlink:"http://www.w3.org/1999/xlink",xsi:"http://www.w3.org/2001/XMLSchema-instance",csw:"http://www.opengis.net/cat/csw/2.0.2"},defaultPrefix:"csw",version:"2.0.2",schemaLocation:"http://www.opengis.net/cat/csw/2.0.2 http://schemas.opengis.net/csw/2.0.2/CSW-discovery.xsd",PropertyName:null,ParameterName:null,read:function(e){"string"==typeof e&&(e=OpenLayers.Format.XML.prototype.read.apply(this,[e])),e&&9==e.nodeType&&(e=e.documentElement);
var t={};return this.readNode(e,t),t},readers:{csw:{GetDomainResponse:function(e,t){this.readChildNodes(e,t)
},DomainValues:function(e,t){OpenLayers.Util.isArray(t.DomainValues)||(t.DomainValues=[]);
for(var i=e.attributes,r={},s=0,n=i.length;n>s;++s)r[i[s].name]=i[s].nodeValue;this.readChildNodes(e,r),t.DomainValues.push(r)
},PropertyName:function(e,t){t.PropertyName=this.getChildValue(e)},ParameterName:function(e,t){t.ParameterName=this.getChildValue(e)
},ListOfValues:function(e,t){OpenLayers.Util.isArray(t.ListOfValues)||(t.ListOfValues=[]),this.readChildNodes(e,t.ListOfValues)
},Value:function(e,t){for(var i=e.attributes,r={},s=0,n=i.length;n>s;++s)r[i[s].name]=i[s].nodeValue;
r.value=this.getChildValue(e),t.push({Value:r})},ConceptualScheme:function(e,t){t.ConceptualScheme={},this.readChildNodes(e,t.ConceptualScheme)
},Name:function(e,t){t.Name=this.getChildValue(e)},Document:function(e,t){t.Document=this.getChildValue(e)
},Authority:function(e,t){t.Authority=this.getChildValue(e)},RangeOfValues:function(e,t){t.RangeOfValues={},this.readChildNodes(e,t.RangeOfValues)
},MinValue:function(e,t){for(var i=e.attributes,r={},s=0,n=i.length;n>s;++s)r[i[s].name]=i[s].nodeValue;
r.value=this.getChildValue(e),t.MinValue=r},MaxValue:function(e,t){for(var i=e.attributes,r={},s=0,n=i.length;n>s;++s)r[i[s].name]=i[s].nodeValue;
r.value=this.getChildValue(e),t.MaxValue=r}}},write:function(e){return e=this.writeNode("csw:GetDomain",e),OpenLayers.Format.XML.prototype.write.apply(this,[e])
},writers:{csw:{GetDomain:function(e){var t=this.createElementNSPlus("csw:GetDomain",{attributes:{service:"CSW",version:this.version}});
return e.PropertyName||this.PropertyName?this.writeNode("csw:PropertyName",e.PropertyName||this.PropertyName,t):(e.ParameterName||this.ParameterName)&&this.writeNode("csw:ParameterName",e.ParameterName||this.ParameterName,t),this.readChildNodes(t,e),t
},PropertyName:function(e){return this.createElementNSPlus("csw:PropertyName",{value:e})
},ParameterName:function(e){return this.createElementNSPlus("csw:ParameterName",{value:e})
}}},CLASS_NAME:"OpenLayers.Format.CSWGetDomain.v2_0_2"}),OpenLayers.Format.ArcXML.Features=OpenLayers.Class(OpenLayers.Format.XML,{read:function(e){return(new OpenLayers.Format.ArcXML).read(e).features.feature
}}),OpenLayers.Control.Snapping=OpenLayers.Class(OpenLayers.Control,{DEFAULTS:{tolerance:10,node:!0,edge:!0,vertex:!0},greedy:!0,precedence:["node","vertex","edge"],resolution:null,geoToleranceCache:null,layer:null,feature:null,point:null,initialize:function(e){OpenLayers.Control.prototype.initialize.apply(this,[e]),this.options=e||{},this.options.layer&&this.setLayer(this.options.layer),e=OpenLayers.Util.extend({},this.options.defaults),this.defaults=OpenLayers.Util.applyDefaults(e,this.DEFAULTS),this.setTargets(this.options.targets),0===this.targets.length&&this.layer&&this.addTargetLayer(this.layer),this.geoToleranceCache={}
},setLayer:function(e){this.active?(this.deactivate(),this.layer=e,this.activate()):this.layer=e
},setTargets:function(e){if(this.targets=[],e&&e.length)for(var t,i=0,r=e.length;r>i;++i)t=e[i],t instanceof OpenLayers.Layer.Vector?this.addTargetLayer(t):this.addTarget(t)
},addTargetLayer:function(e){this.addTarget({layer:e})},addTarget:function(e){e=OpenLayers.Util.applyDefaults(e,this.defaults),e.nodeTolerance=e.nodeTolerance||e.tolerance,e.vertexTolerance=e.vertexTolerance||e.tolerance,e.edgeTolerance=e.edgeTolerance||e.tolerance,this.targets.push(e)
},removeTargetLayer:function(e){for(var t,i=this.targets.length-1;i>=0;--i)t=this.targets[i],t.layer===e&&this.removeTarget(t)
},removeTarget:function(e){return OpenLayers.Util.removeItem(this.targets,e)},activate:function(){var e=OpenLayers.Control.prototype.activate.call(this);
return e&&this.layer&&this.layer.events&&this.layer.events.on({sketchstarted:this.onSketchModified,sketchmodified:this.onSketchModified,vertexmodified:this.onVertexModified,scope:this}),e
},deactivate:function(){var e=OpenLayers.Control.prototype.deactivate.call(this);
return e&&this.layer&&this.layer.events&&this.layer.events.un({sketchstarted:this.onSketchModified,sketchmodified:this.onSketchModified,vertexmodified:this.onVertexModified,scope:this}),this.point=this.feature=null,e
},onSketchModified:function(e){this.feature=e.feature,this.considerSnapping(e.vertex,e.vertex)
},onVertexModified:function(e){this.feature=e.feature;var t=this.layer.map.getLonLatFromViewPortPx(e.pixel);
this.considerSnapping(e.vertex,new OpenLayers.Geometry.Point(t.lon,t.lat))},considerSnapping:function(e,t){for(var i,r,s={rank:Number.POSITIVE_INFINITY,dist:Number.POSITIVE_INFINITY,x:null,y:null},n=!1,a=0,o=this.targets.length;o>a;++a)if(r=this.targets[a],i=this.testTarget(r,t)){if(this.greedy){s=i,s.target=r,n=!0;
break}(i.rank<s.rank||i.rank===s.rank&&i.dist<s.dist)&&(s=i,s.target=r,n=!0)}n&&(!1!==this.events.triggerEvent("beforesnap",{point:e,x:s.x,y:s.y,distance:s.dist,layer:s.target.layer,snapType:this.precedence[s.rank]})?(e.x=s.x,e.y=s.y,this.point=e,this.events.triggerEvent("snap",{point:e,snapType:this.precedence[s.rank],layer:s.target.layer,distance:s.dist})):n=!1),this.point&&!n&&(e.x=t.x,e.y=t.y,this.point=null,this.events.triggerEvent("unsnap",{point:e}))
},testTarget:function(e,t){var i=this.layer.map.getResolution();if("minResolution"in e&&i<e.minResolution||"maxResolution"in e&&i>=e.maxResolution)return null;
for(var r,s,n,a,o,l,i={node:this.getGeoTolerance(e.nodeTolerance,i),vertex:this.getGeoTolerance(e.vertexTolerance,i),edge:this.getGeoTolerance(e.edgeTolerance,i)},h=Math.max(i.node,i.vertex,i.edge),p={rank:Number.POSITIVE_INFINITY,dist:Number.POSITIVE_INFINITY},u=!1,c=e.layer.features,y=this.precedence.length,d=new OpenLayers.LonLat(t.x,t.y),m=0,f=c.length;f>m;++m)if(r=c[m],r!==this.feature&&!r._sketch&&r.state!==OpenLayers.State.DELETE&&(!e.filter||e.filter.evaluate(r))&&r.atPoint(d,h,h))for(var g=0,L=Math.min(p.rank+1,y);L>g;++g)if(s=this.precedence[g],e[s])if("edge"===s){if(n=r.geometry.distanceTo(t,{details:!0}),o=n.distance,o<=i[s]&&o<p.dist){p={rank:g,dist:o,x:n.x0,y:n.y0},u=!0;
break}}else{n=r.geometry.getVertices("node"===s),l=!1;for(var v=0,O=n.length;O>v;++v)a=n[v],o=a.distanceTo(t),o<=i[s]&&(g<p.rank||g===p.rank&&o<p.dist)&&(p={rank:g,dist:o,x:a.x,y:a.y},l=u=!0);
if(l)break}return u?p:null},getGeoTolerance:function(e,t){t!==this.resolution&&(this.resolution=t,this.geoToleranceCache={});
var i=this.geoToleranceCache[e];return void 0===i&&(i=e*t,this.geoToleranceCache[e]=i),i
},destroy:function(){this.active&&this.deactivate(),delete this.layer,delete this.targets,OpenLayers.Control.prototype.destroy.call(this)
},CLASS_NAME:"OpenLayers.Control.Snapping"}),OpenLayers.Format.OWSCommon.v1_1_0=OpenLayers.Class(OpenLayers.Format.OWSCommon.v1,{namespaces:{ows:"http://www.opengis.net/ows/1.1",xlink:"http://www.w3.org/1999/xlink"},readers:{ows:OpenLayers.Util.applyDefaults({ExceptionReport:function(e,t){t.exceptionReport={version:e.getAttribute("version"),language:e.getAttribute("xml:lang"),exceptions:[]},this.readChildNodes(e,t.exceptionReport)
},AllowedValues:function(e,t){t.allowedValues={},this.readChildNodes(e,t.allowedValues)
},AnyValue:function(e,t){t.anyValue=!0},DataType:function(e,t){t.dataType=this.getChildValue(e)
},Range:function(e,t){t.range={},this.readChildNodes(e,t.range)},MinimumValue:function(e,t){t.minValue=this.getChildValue(e)
},MaximumValue:function(e,t){t.maxValue=this.getChildValue(e)},Identifier:function(e,t){t.identifier=this.getChildValue(e)
},SupportedCRS:function(e,t){t.supportedCRS=this.getChildValue(e)}},OpenLayers.Format.OWSCommon.v1.prototype.readers.ows)},writers:{ows:OpenLayers.Util.applyDefaults({Range:function(e){var t=this.createElementNSPlus("ows:Range",{attributes:{"ows:rangeClosure":e.closure}});
return this.writeNode("ows:MinimumValue",e.minValue,t),this.writeNode("ows:MaximumValue",e.maxValue,t),t
},MinimumValue:function(e){return this.createElementNSPlus("ows:MinimumValue",{value:e})
},MaximumValue:function(e){return this.createElementNSPlus("ows:MaximumValue",{value:e})
},Value:function(e){return this.createElementNSPlus("ows:Value",{value:e})}},OpenLayers.Format.OWSCommon.v1.prototype.writers.ows)},CLASS_NAME:"OpenLayers.Format.OWSCommon.v1_1_0"}),OpenLayers.Format.WCSGetCoverage=OpenLayers.Class(OpenLayers.Format.XML,{namespaces:{ows:"http://www.opengis.net/ows/1.1",wcs:"http://www.opengis.net/wcs/1.1",xlink:"http://www.w3.org/1999/xlink",xsi:"http://www.w3.org/2001/XMLSchema-instance"},regExes:{trimSpace:/^\s*|\s*$/g,removeSpace:/\s*/g,splitSpace:/\s+/,trimComma:/\s*,\s*/g},VERSION:"1.1.2",schemaLocation:"http://www.opengis.net/wcs/1.1 http://schemas.opengis.net/wcs/1.1/wcsGetCoverage.xsd",write:function(e){return e=this.writeNode("wcs:GetCoverage",e),this.setAttributeNS(e,this.namespaces.xsi,"xsi:schemaLocation",this.schemaLocation),OpenLayers.Format.XML.prototype.write.apply(this,[e])
},writers:{wcs:{GetCoverage:function(e){var t=this.createElementNSPlus("wcs:GetCoverage",{attributes:{version:e.version||this.VERSION,service:"WCS"}});
return this.writeNode("ows:Identifier",e.identifier,t),this.writeNode("wcs:DomainSubset",e.domainSubset,t),this.writeNode("wcs:Output",e.output,t),t
},DomainSubset:function(e){var t=this.createElementNSPlus("wcs:DomainSubset",{});
return this.writeNode("ows:BoundingBox",e.boundingBox,t),e.temporalSubset&&this.writeNode("wcs:TemporalSubset",e.temporalSubset,t),t
},TemporalSubset:function(e){for(var t=this.createElementNSPlus("wcs:TemporalSubset",{}),i=0,r=e.timePeriods.length;r>i;++i)this.writeNode("wcs:TimePeriod",e.timePeriods[i],t);
return t},TimePeriod:function(e){var t=this.createElementNSPlus("wcs:TimePeriod",{});
return this.writeNode("wcs:BeginPosition",e.begin,t),this.writeNode("wcs:EndPosition",e.end,t),e.resolution&&this.writeNode("wcs:TimeResolution",e.resolution,t),t
},BeginPosition:function(e){return this.createElementNSPlus("wcs:BeginPosition",{value:e})
},EndPosition:function(e){return this.createElementNSPlus("wcs:EndPosition",{value:e})
},TimeResolution:function(e){return this.createElementNSPlus("wcs:TimeResolution",{value:e})
},Output:function(e){var t=this.createElementNSPlus("wcs:Output",{attributes:{format:e.format,store:e.store}});
return e.gridCRS&&this.writeNode("wcs:GridCRS",e.gridCRS,t),t},GridCRS:function(e){var t=this.createElementNSPlus("wcs:GridCRS",{});
return this.writeNode("wcs:GridBaseCRS",e.baseCRS,t),e.type&&this.writeNode("wcs:GridType",e.type,t),e.origin&&this.writeNode("wcs:GridOrigin",e.origin,t),this.writeNode("wcs:GridOffsets",e.offsets,t),e.CS&&this.writeNode("wcs:GridCS",e.CS,t),t
},GridBaseCRS:function(e){return this.createElementNSPlus("wcs:GridBaseCRS",{value:e})
},GridOrigin:function(e){return this.createElementNSPlus("wcs:GridOrigin",{value:e})
},GridType:function(e){return this.createElementNSPlus("wcs:GridType",{value:e})},GridOffsets:function(e){return this.createElementNSPlus("wcs:GridOffsets",{value:e})
},GridCS:function(e){return this.createElementNSPlus("wcs:GridCS",{value:e})}},ows:OpenLayers.Format.OWSCommon.v1_1_0.prototype.writers.ows},CLASS_NAME:"OpenLayers.Format.WCSGetCoverage"}),OpenLayers.Format.KML=OpenLayers.Class(OpenLayers.Format.XML,{namespaces:{kml:"http://www.opengis.net/kml/2.2",gx:"http://www.google.com/kml/ext/2.2"},kmlns:"http://earth.google.com/kml/2.0",placemarksDesc:"No description available",foldersName:"OpenLayers export",foldersDesc:"Exported on "+new Date,extractAttributes:!0,kvpAttributes:!1,extractStyles:!1,extractTracks:!1,trackAttributes:null,internalns:null,features:null,styles:null,styleBaseUrl:"",fetched:null,maxDepth:0,initialize:function(e){this.regExes={trimSpace:/^\s*|\s*$/g,removeSpace:/\s*/g,splitSpace:/\s+/,trimComma:/\s*,\s*/g,kmlColor:/(\w{2})(\w{2})(\w{2})(\w{2})/,kmlIconPalette:/root:\/\/icons\/palette-(\d+)(\.\w+)/,straightBracket:/\$\[(.*?)\]/g},this.externalProjection=new OpenLayers.Projection("EPSG:4326"),OpenLayers.Format.XML.prototype.initialize.apply(this,[e])
},read:function(e){return this.features=[],this.styles={},this.fetched={},this.parseData(e,{depth:0,styleBaseUrl:this.styleBaseUrl})
},parseData:function(e,t){"string"==typeof e&&(e=OpenLayers.Format.XML.prototype.read.apply(this,[e]));
for(var i=["Link","NetworkLink","Style","StyleMap","Placemark"],r=0,s=i.length;s>r;++r){var n=i[r],a=this.getElementsByTagNameNS(e,"*",n);
if(0!=a.length)switch(n.toLowerCase()){case"link":case"networklink":this.parseLinks(a,t);
break;case"style":this.extractStyles&&this.parseStyles(a,t);break;case"stylemap":this.extractStyles&&this.parseStyleMaps(a,t);
break;case"placemark":this.parseFeatures(a,t)}}return this.features},parseLinks:function(e,t){if(t.depth>=this.maxDepth)return!1;
var i=OpenLayers.Util.extend({},t);i.depth++;for(var r=0,s=e.length;s>r;r++){var n=this.parseProperty(e[r],"*","href");
n&&!this.fetched[n]&&(this.fetched[n]=!0,(n=this.fetchLink(n))&&this.parseData(n,i))
}},fetchLink:function(e){return(e=OpenLayers.Request.GET({url:e,async:!1}))?e.responseText:void 0
},parseStyles:function(e,t){for(var i=0,r=e.length;r>i;i++){var s=this.parseStyle(e[i]);
s&&(this.styles[(t.styleBaseUrl||"")+"#"+s.id]=s)}},parseKmlColor:function(e){var t=null;
return e&&(e=e.match(this.regExes.kmlColor))&&(t={color:"#"+e[4]+e[3]+e[2],opacity:parseInt(e[1],16)/255}),t
},parseStyle:function(e){for(var t,i,r={},s=["LineStyle","PolyStyle","IconStyle","BalloonStyle","LabelStyle"],n=0,a=s.length;a>n;++n)if(t=s[n],i=this.getElementsByTagNameNS(e,"*",t)[0])switch(t.toLowerCase()){case"linestyle":t=this.parseProperty(i,"*","color"),(t=this.parseKmlColor(t))&&(r.strokeColor=t.color,r.strokeOpacity=t.opacity),(t=this.parseProperty(i,"*","width"))&&(r.strokeWidth=t);
break;case"polystyle":t=this.parseProperty(i,"*","color"),(t=this.parseKmlColor(t))&&(r.fillOpacity=t.opacity,r.fillColor=t.color),"0"==this.parseProperty(i,"*","fill")&&(r.fillColor="none"),"0"==this.parseProperty(i,"*","outline")&&(r.strokeWidth="0");
break;case"iconstyle":var o=parseFloat(this.parseProperty(i,"*","scale")||1);t=32*o;
var l=32*o,h=this.getElementsByTagNameNS(i,"*","Icon")[0];if(h){var p=this.parseProperty(h,"*","href");
if(p){var u=this.parseProperty(h,"*","w"),c=this.parseProperty(h,"*","h");!OpenLayers.String.startsWith(p,"http://maps.google.com/mapfiles/kml")||u||c||(c=u=64,o/=2),u=u||c,c=c||u,u&&(t=parseInt(u)*o),c&&(l=parseInt(c)*o),(c=p.match(this.regExes.kmlIconPalette))&&(u=c[1],c=c[2],p=this.parseProperty(h,"*","x"),h=this.parseProperty(h,"*","y"),p="http://maps.google.com/mapfiles/kml/pal"+u+"/icon"+(8*(h?7-h/32:7)+(p?p/32:0))+c),r.graphicOpacity=1,r.externalGraphic=p
}}(i=this.getElementsByTagNameNS(i,"*","hotSpot")[0])&&(p=parseFloat(i.getAttribute("x")),h=parseFloat(i.getAttribute("y")),u=i.getAttribute("xunits"),"pixels"==u?r.graphicXOffset=-p*o:"insetPixels"==u?r.graphicXOffset=-t+p*o:"fraction"==u&&(r.graphicXOffset=-t*p),i=i.getAttribute("yunits"),"pixels"==i?r.graphicYOffset=-l+h*o+1:"insetPixels"==i?r.graphicYOffset=-(h*o)+1:"fraction"==i&&(r.graphicYOffset=-l*(1-h)+1)),r.graphicWidth=t,r.graphicHeight=l;
break;case"balloonstyle":(i=OpenLayers.Util.getXmlNodeValue(i))&&(r.balloonStyle=i.replace(this.regExes.straightBracket,"${$1}"));
break;case"labelstyle":t=this.parseProperty(i,"*","color"),(t=this.parseKmlColor(t))&&(r.fontColor=t.color,r.fontOpacity=t.opacity)
}return!r.strokeColor&&r.fillColor&&(r.strokeColor=r.fillColor),(e=e.getAttribute("id"))&&r&&(r.id=e),r
},parseStyleMaps:function(e,t){for(var i=0,r=e.length;r>i;i++)for(var s=e[i],n=this.getElementsByTagNameNS(s,"*","Pair"),s=s.getAttribute("id"),a=0,o=n.length;o>a;a++){var l=n[a],h=this.parseProperty(l,"*","key");
(l=this.parseProperty(l,"*","styleUrl"))&&"normal"==h&&(this.styles[(t.styleBaseUrl||"")+"#"+s]=this.styles[(t.styleBaseUrl||"")+l])
}},parseFeatures:function(e,t){for(var i=[],r=0,s=e.length;s>r;r++){var n=e[r],a=this.parseFeature.apply(this,[n]);
if(!a)throw"Bad Placemark: "+r;if(this.extractStyles&&a.attributes&&a.attributes.styleUrl&&(a.style=this.getStyle(a.attributes.styleUrl,t)),this.extractStyles){var o=this.getElementsByTagNameNS(n,"*","Style")[0];
o&&(o=this.parseStyle(o))&&(a.style=OpenLayers.Util.extend(a.style,o))}this.extractTracks?(n=this.getElementsByTagNameNS(n,this.namespaces.gx,"Track"))&&0<n.length&&(a={features:[],feature:a},this.readNode(n[0],a),0<a.features.length&&i.push.apply(i,a.features)):i.push(a)
}this.features=this.features.concat(i)},readers:{kml:{when:function(e,t){t.whens.push(OpenLayers.Date.parse(this.getChildValue(e)))
},_trackPointAttribute:function(e,t){var i=e.nodeName.split(":").pop();t.attributes[i].push(this.getChildValue(e))
}},gx:{Track:function(e,t){var i={whens:[],points:[],angles:[]};if(this.trackAttributes){var r;
i.attributes={};for(var s=0,n=this.trackAttributes.length;n>s;++s)r=this.trackAttributes[s],i.attributes[r]=[],r in this.readers.kml||(this.readers.kml[r]=this.readers.kml._trackPointAttribute)
}if(this.readChildNodes(e,i),i.whens.length!==i.points.length)throw Error("gx:Track with unequal number of when ("+i.whens.length+") and gx:coord ("+i.points.length+") elements.");
var a=0<i.angles.length;if(a&&i.whens.length!==i.angles.length)throw Error("gx:Track with unequal number of when ("+i.whens.length+") and gx:angles ("+i.angles.length+") elements.");
for(var o,s=0,n=i.whens.length;n>s;++s){if(o=t.feature.clone(),o.fid=t.feature.fid||t.feature.id,r=i.points[s],o.geometry=r,"z"in r&&(o.attributes.altitude=r.z),this.internalProjection&&this.externalProjection&&o.geometry.transform(this.externalProjection,this.internalProjection),this.trackAttributes)for(var l=0,h=this.trackAttributes.length;h>l;++l)r=this.trackAttributes[l],o.attributes[r]=i.attributes[r][s];
o.attributes.when=i.whens[s],o.attributes.trackId=t.feature.id,a&&(r=i.angles[s],o.attributes.heading=parseFloat(r[0]),o.attributes.tilt=parseFloat(r[1]),o.attributes.roll=parseFloat(r[2])),t.features.push(o)
}},coord:function(e,t){var i=this.getChildValue(e).replace(this.regExes.trimSpace,"").split(/\s+/),r=new OpenLayers.Geometry.Point(i[0],i[1]);
2<i.length&&(r.z=parseFloat(i[2])),t.points.push(r)},angles:function(e,t){var i=this.getChildValue(e).replace(this.regExes.trimSpace,"").split(/\s+/);
t.angles.push(i)}}},parseFeature:function(e){for(var t,i,r,s=["MultiGeometry","Polygon","LineString","Point"],n=0,a=s.length;a>n;++n)if(t=s[n],this.internalns=e.namespaceURI?e.namespaceURI:this.kmlns,i=this.getElementsByTagNameNS(e,this.internalns,t),0<i.length){if(!(s=this.parseGeometry[t.toLowerCase()]))throw new TypeError("Unsupported geometry type: "+t);
r=s.apply(this,[i[0]]),this.internalProjection&&this.externalProjection&&r.transform(this.externalProjection,this.internalProjection);
break}var o;return this.extractAttributes&&(o=this.parseAttributes(e)),t=new OpenLayers.Feature.Vector(r,o),e=e.getAttribute("id")||e.getAttribute("name"),null!=e&&(t.fid=e),t
},getStyle:function(e,t){var i=OpenLayers.Util.removeTail(e),r=OpenLayers.Util.extend({},t);
return r.depth++,r.styleBaseUrl=i,!this.styles[e]&&!OpenLayers.String.startsWith(e,"#")&&r.depth<=this.maxDepth&&!this.fetched[i]&&(i=this.fetchLink(i))&&this.parseData(i,r),OpenLayers.Util.extend({},this.styles[e])
},parseGeometry:{point:function(e){var t=this.getElementsByTagNameNS(e,this.internalns,"coordinates");
if(e=[],0<t.length){var i=t[0].firstChild.nodeValue,i=i.replace(this.regExes.removeSpace,"");
e=i.split(",")}if(t=null,!(1<e.length))throw"Bad coordinate string: "+i;return 2==e.length&&(e[2]=null),t=new OpenLayers.Geometry.Point(e[0],e[1],e[2])
},linestring:function(e,t){var i=this.getElementsByTagNameNS(e,this.internalns,"coordinates"),r=null;
if(0<i.length){for(var s,n,i=this.getChildValue(i[0]),i=i.replace(this.regExes.trimSpace,""),i=i.replace(this.regExes.trimComma,","),r=i.split(this.regExes.splitSpace),a=r.length,o=Array(a),l=0;a>l;++l){if(s=r[l].split(","),n=s.length,!(n>1))throw"Bad LineString point coordinates: "+r[l];
2==s.length&&(s[2]=null),o[l]=new OpenLayers.Geometry.Point(s[0],s[1],s[2])}if(!a)throw"Bad LineString coordinates: "+i;
r=t?new OpenLayers.Geometry.LinearRing(o):new OpenLayers.Geometry.LineString(o)}return r
},polygon:function(e){e=this.getElementsByTagNameNS(e,this.internalns,"LinearRing");
var t=e.length,i=Array(t);if(t>0)for(var r=0,s=e.length;s>r;++r){if(!(t=this.parseGeometry.linestring.apply(this,[e[r],!0])))throw"Bad LinearRing geometry: "+r;
i[r]=t}return new OpenLayers.Geometry.Polygon(i)},multigeometry:function(e){for(var t,i=[],r=e.childNodes,s=0,n=r.length;n>s;++s)e=r[s],1==e.nodeType&&(t=e.prefix?e.nodeName.split(":")[1]:e.nodeName,(t=this.parseGeometry[t.toLowerCase()])&&i.push(t.apply(this,[e])));
return new OpenLayers.Geometry.Collection(i)}},parseAttributes:function(e){var t={},i=e.getElementsByTagName("ExtendedData");
i.length&&(t=this.parseExtendedData(i[0]));var r,s,n;e=e.childNodes;for(var i=0,a=e.length;a>i;++i)if(r=e[i],1==r.nodeType&&(s=r.childNodes,1<=s.length&&3>=s.length)){switch(s.length){case 1:n=s[0];
break;case 2:n=s[0],s=s[1],n=3==n.nodeType||4==n.nodeType?n:s;break;default:n=s[1]
}(3==n.nodeType||4==n.nodeType)&&(r=r.prefix?r.nodeName.split(":")[1]:r.nodeName,(n=OpenLayers.Util.getXmlNodeValue(n))&&(n=n.replace(this.regExes.trimSpace,""),t[r]=n))
}return t},parseExtendedData:function(e){var t,i,r,s,n={},a=e.getElementsByTagName("Data");
for(t=0,i=a.length;i>t;t++){r=a[t],s=r.getAttribute("name");var o={},l=r.getElementsByTagName("value");
l.length&&(o.value=this.getChildValue(l[0])),this.kvpAttributes?n[s]=o.value:(r=r.getElementsByTagName("displayName"),r.length&&(o.displayName=this.getChildValue(r[0])),n[s]=o)
}for(e=e.getElementsByTagName("SimpleData"),t=0,i=e.length;i>t;t++)o={},r=e[t],s=r.getAttribute("name"),o.value=this.getChildValue(r),this.kvpAttributes?n[s]=o.value:(o.displayName=s,n[s]=o);
return n},parseProperty:function(e,t,i){var r;e=this.getElementsByTagNameNS(e,t,i);
try{r=OpenLayers.Util.getXmlNodeValue(e[0])}catch(s){r=null}return r},write:function(e){OpenLayers.Util.isArray(e)||(e=[e]);
for(var t=this.createElementNS(this.kmlns,"kml"),i=this.createFolderXML(),r=0,s=e.length;s>r;++r)i.appendChild(this.createPlacemarkXML(e[r]));
return t.appendChild(i),OpenLayers.Format.XML.prototype.write.apply(this,[t])},createFolderXML:function(){var e=this.createElementNS(this.kmlns,"Folder");
if(this.foldersName){var t=this.createElementNS(this.kmlns,"name"),i=this.createTextNode(this.foldersName);
t.appendChild(i),e.appendChild(t)}return this.foldersDesc&&(t=this.createElementNS(this.kmlns,"description"),i=this.createTextNode(this.foldersDesc),t.appendChild(i),e.appendChild(t)),e
},createPlacemarkXML:function(e){var t=this.createElementNS(this.kmlns,"name"),i=e.style&&e.style.label?e.style.label:e.id;
t.appendChild(this.createTextNode(e.attributes.name||i));var r=this.createElementNS(this.kmlns,"description");
return r.appendChild(this.createTextNode(e.attributes.description||this.placemarksDesc)),i=this.createElementNS(this.kmlns,"Placemark"),null!=e.fid&&i.setAttribute("id",e.fid),i.appendChild(t),i.appendChild(r),t=this.buildGeometryNode(e.geometry),i.appendChild(t),e.attributes&&(e=this.buildExtendedData(e.attributes))&&i.appendChild(e),i
},buildGeometryNode:function(e){var t=e.CLASS_NAME,t=t.substring(t.lastIndexOf(".")+1),t=this.buildGeometry[t.toLowerCase()],i=null;
return t&&(i=t.apply(this,[e])),i},buildGeometry:{point:function(e){var t=this.createElementNS(this.kmlns,"Point");
return t.appendChild(this.buildCoordinatesNode(e)),t},multipoint:function(e){return this.buildGeometry.collection.apply(this,[e])
},linestring:function(e){var t=this.createElementNS(this.kmlns,"LineString");return t.appendChild(this.buildCoordinatesNode(e)),t
},multilinestring:function(e){return this.buildGeometry.collection.apply(this,[e])
},linearring:function(e){var t=this.createElementNS(this.kmlns,"LinearRing");return t.appendChild(this.buildCoordinatesNode(e)),t
},polygon:function(e){var t=this.createElementNS(this.kmlns,"Polygon");e=e.components;
for(var i,r,s=0,n=e.length;n>s;++s)i=0==s?"outerBoundaryIs":"innerBoundaryIs",i=this.createElementNS(this.kmlns,i),r=this.buildGeometry.linearring.apply(this,[e[s]]),i.appendChild(r),t.appendChild(i);
return t},multipolygon:function(e){return this.buildGeometry.collection.apply(this,[e])
},collection:function(e){for(var t,i=this.createElementNS(this.kmlns,"MultiGeometry"),r=0,s=e.components.length;s>r;++r)(t=this.buildGeometryNode.apply(this,[e.components[r]]))&&i.appendChild(t);
return i}},buildCoordinatesNode:function(e){var t,i=this.createElementNS(this.kmlns,"coordinates");
if(t=e.components){for(var r=t.length,s=Array(r),n=0;r>n;++n)e=t[n],s[n]=this.buildCoordinates(e);
t=s.join(" ")}else t=this.buildCoordinates(e);return t=this.createTextNode(t),i.appendChild(t),i
},buildCoordinates:function(e){return this.internalProjection&&this.externalProjection&&(e=e.clone(),e.transform(this.internalProjection,this.externalProjection)),e.x+","+e.y
},buildExtendedData:function(e){var t,i=this.createElementNS(this.kmlns,"ExtendedData");
for(t in e)if(e[t]&&"name"!=t&&"description"!=t&&"styleUrl"!=t){var r=this.createElementNS(this.kmlns,"Data");
r.setAttribute("name",t);var s=this.createElementNS(this.kmlns,"value");if("object"==typeof e[t]){if(e[t].value&&s.appendChild(this.createTextNode(e[t].value)),e[t].displayName){var n=this.createElementNS(this.kmlns,"displayName");
n.appendChild(this.getXMLDoc().createCDATASection(e[t].displayName)),r.appendChild(n)
}}else s.appendChild(this.createTextNode(e[t]));r.appendChild(s),i.appendChild(r)
}return this.isSimpleContent(i)?null:i},CLASS_NAME:"OpenLayers.Format.KML"}),OpenLayers.Format.WMSCapabilities=OpenLayers.Class(OpenLayers.Format.XML.VersionedOGC,{defaultVersion:"1.1.1",profile:null,CLASS_NAME:"OpenLayers.Format.WMSCapabilities"}),OpenLayers.Format.WMSCapabilities.v1=OpenLayers.Class(OpenLayers.Format.XML,{namespaces:{wms:"http://www.opengis.net/wms",xlink:"http://www.w3.org/1999/xlink",xsi:"http://www.w3.org/2001/XMLSchema-instance"},defaultPrefix:"wms",read:function(e){"string"==typeof e&&(e=OpenLayers.Format.XML.prototype.read.apply(this,[e]));
var t=e;e&&9==e.nodeType&&(e=e.documentElement);var i={};return this.readNode(e,i),void 0===i.service&&(e=new OpenLayers.Format.OGCExceptionReport,i.error=e.read(t)),i
},readers:{wms:{Service:function(e,t){t.service={},this.readChildNodes(e,t.service)
},Name:function(e,t){t.name=this.getChildValue(e)},Title:function(e,t){t.title=this.getChildValue(e)
},Abstract:function(e,t){t["abstract"]=this.getChildValue(e)},BoundingBox:function(e){var t={};
t.bbox=[parseFloat(e.getAttribute("minx")),parseFloat(e.getAttribute("miny")),parseFloat(e.getAttribute("maxx")),parseFloat(e.getAttribute("maxy"))];
var i={x:parseFloat(e.getAttribute("resx")),y:parseFloat(e.getAttribute("resy"))};
return isNaN(i.x)&&isNaN(i.y)||(t.res=i),t},OnlineResource:function(e,t){t.href=this.getAttributeNS(e,this.namespaces.xlink,"href")
},ContactInformation:function(e,t){t.contactInformation={},this.readChildNodes(e,t.contactInformation)
},ContactPersonPrimary:function(e,t){t.personPrimary={},this.readChildNodes(e,t.personPrimary)
},ContactPerson:function(e,t){t.person=this.getChildValue(e)},ContactOrganization:function(e,t){t.organization=this.getChildValue(e)
},ContactPosition:function(e,t){t.position=this.getChildValue(e)},ContactAddress:function(e,t){t.contactAddress={},this.readChildNodes(e,t.contactAddress)
},AddressType:function(e,t){t.type=this.getChildValue(e)},Address:function(e,t){t.address=this.getChildValue(e)
},City:function(e,t){t.city=this.getChildValue(e)},StateOrProvince:function(e,t){t.stateOrProvince=this.getChildValue(e)
},PostCode:function(e,t){t.postcode=this.getChildValue(e)},Country:function(e,t){t.country=this.getChildValue(e)
},ContactVoiceTelephone:function(e,t){t.phone=this.getChildValue(e)},ContactFacsimileTelephone:function(e,t){t.fax=this.getChildValue(e)
},ContactElectronicMailAddress:function(e,t){t.email=this.getChildValue(e)},Fees:function(e,t){var i=this.getChildValue(e);
i&&"none"!=i.toLowerCase()&&(t.fees=i)},AccessConstraints:function(e,t){var i=this.getChildValue(e);
i&&"none"!=i.toLowerCase()&&(t.accessConstraints=i)},Capability:function(e,t){t.capability={nestedLayers:[],layers:[]},this.readChildNodes(e,t.capability)
},Request:function(e,t){t.request={},this.readChildNodes(e,t.request)},GetCapabilities:function(e,t){t.getcapabilities={formats:[]},this.readChildNodes(e,t.getcapabilities)
},Format:function(e,t){OpenLayers.Util.isArray(t.formats)?t.formats.push(this.getChildValue(e)):t.format=this.getChildValue(e)
},DCPType:function(e,t){this.readChildNodes(e,t)},HTTP:function(e,t){this.readChildNodes(e,t)
},Get:function(e,t){t.get={},this.readChildNodes(e,t.get),t.href||(t.href=t.get.href)
},Post:function(e,t){t.post={},this.readChildNodes(e,t.post),t.href||(t.href=t.get.href)
},GetMap:function(e,t){t.getmap={formats:[]},this.readChildNodes(e,t.getmap)},GetFeatureInfo:function(e,t){t.getfeatureinfo={formats:[]},this.readChildNodes(e,t.getfeatureinfo)
},Exception:function(e,t){t.exception={formats:[]},this.readChildNodes(e,t.exception)
},Layer:function(e,t){var i,r;t.capability?(r=t.capability,i=t):r=t;var s=e.getAttributeNode("queryable"),n=s&&s.specified?e.getAttribute("queryable"):null,a=(s=e.getAttributeNode("cascaded"))&&s.specified?e.getAttribute("cascaded"):null,s=(s=e.getAttributeNode("opaque"))&&s.specified?e.getAttribute("opaque"):null,o=e.getAttribute("noSubsets"),l=e.getAttribute("fixedWidth"),h=e.getAttribute("fixedHeight"),p=i||{},u=OpenLayers.Util.extend;
i={nestedLayers:[],styles:i?[].concat(i.styles):[],srs:i?u({},p.srs):{},metadataURLs:[],bbox:i?u({},p.bbox):{},llbbox:p.llbbox,dimensions:i?u({},p.dimensions):{},authorityURLs:i?u({},p.authorityURLs):{},identifiers:{},keywords:[],queryable:n&&""!==n?"1"===n||"true"===n:p.queryable||!1,cascaded:null!==a?parseInt(a):p.cascaded||0,opaque:s?"1"===s||"true"===s:p.opaque||!1,noSubsets:null!==o?"1"===o||"true"===o:p.noSubsets||!1,fixedWidth:null!=l?parseInt(l):p.fixedWidth||0,fixedHeight:null!=h?parseInt(h):p.fixedHeight||0,minScale:p.minScale,maxScale:p.maxScale,attribution:p.attribution},t.nestedLayers.push(i),i.capability=r,this.readChildNodes(e,i),delete i.capability,i.name&&(n=i.name.split(":"),a=r.request,s=a.getfeatureinfo,0<n.length&&(i.prefix=n[0]),r.layers.push(i),void 0===i.formats&&(i.formats=a.getmap.formats),void 0===i.infoFormats&&s&&(i.infoFormats=s.formats))
},Attribution:function(e,t){t.attribution={},this.readChildNodes(e,t.attribution)
},LogoURL:function(e,t){t.logo={width:e.getAttribute("width"),height:e.getAttribute("height")},this.readChildNodes(e,t.logo)
},Style:function(e,t){var i={};t.styles.push(i),this.readChildNodes(e,i)},LegendURL:function(e,t){var i={width:e.getAttribute("width"),height:e.getAttribute("height")};
t.legend=i,this.readChildNodes(e,i)},MetadataURL:function(e,t){var i={type:e.getAttribute("type")};
t.metadataURLs.push(i),this.readChildNodes(e,i)},DataURL:function(e,t){t.dataURL={},this.readChildNodes(e,t.dataURL)
},FeatureListURL:function(e,t){t.featureListURL={},this.readChildNodes(e,t.featureListURL)
},AuthorityURL:function(e,t){var i=e.getAttribute("name"),r={};this.readChildNodes(e,r),t.authorityURLs[i]=r.href
},Identifier:function(e,t){var i=e.getAttribute("authority");t.identifiers[i]=this.getChildValue(e)
},KeywordList:function(e,t){this.readChildNodes(e,t)},SRS:function(e,t){t.srs[this.getChildValue(e)]=!0
}}},CLASS_NAME:"OpenLayers.Format.WMSCapabilities.v1"}),OpenLayers.Format.WMSCapabilities.v1_1=OpenLayers.Class(OpenLayers.Format.WMSCapabilities.v1,{readers:{wms:OpenLayers.Util.applyDefaults({WMT_MS_Capabilities:function(e,t){this.readChildNodes(e,t)
},Keyword:function(e,t){t.keywords&&t.keywords.push(this.getChildValue(e))},DescribeLayer:function(e,t){t.describelayer={formats:[]},this.readChildNodes(e,t.describelayer)
},GetLegendGraphic:function(e,t){t.getlegendgraphic={formats:[]},this.readChildNodes(e,t.getlegendgraphic)
},GetStyles:function(e,t){t.getstyles={formats:[]},this.readChildNodes(e,t.getstyles)
},PutStyles:function(e,t){t.putstyles={formats:[]},this.readChildNodes(e,t.putstyles)
},UserDefinedSymbolization:function(e,t){var i={supportSLD:1==parseInt(e.getAttribute("SupportSLD")),userLayer:1==parseInt(e.getAttribute("UserLayer")),userStyle:1==parseInt(e.getAttribute("UserStyle")),remoteWFS:1==parseInt(e.getAttribute("RemoteWFS"))};
t.userSymbols=i},LatLonBoundingBox:function(e,t){t.llbbox=[parseFloat(e.getAttribute("minx")),parseFloat(e.getAttribute("miny")),parseFloat(e.getAttribute("maxx")),parseFloat(e.getAttribute("maxy"))]
},BoundingBox:function(e,t){var i=OpenLayers.Format.WMSCapabilities.v1.prototype.readers.wms.BoundingBox.apply(this,[e,t]);
i.srs=e.getAttribute("SRS"),t.bbox[i.srs]=i},ScaleHint:function(e,t){var i=e.getAttribute("min"),r=e.getAttribute("max"),s=Math.pow(2,.5),n=OpenLayers.INCHES_PER_UNIT.m;
0!=i&&(t.maxScale=parseFloat((i/s*n*OpenLayers.DOTS_PER_INCH).toPrecision(13))),r!=Number.POSITIVE_INFINITY&&(t.minScale=parseFloat((r/s*n*OpenLayers.DOTS_PER_INCH).toPrecision(13)))
},Dimension:function(e,t){var i={name:e.getAttribute("name").toLowerCase(),units:e.getAttribute("units"),unitsymbol:e.getAttribute("unitSymbol")};
t.dimensions[i.name]=i},Extent:function(e,t){var i=e.getAttribute("name").toLowerCase();
if(i in t.dimensions){i=t.dimensions[i],i.nearestVal="1"===e.getAttribute("nearestValue"),i.multipleVal="1"===e.getAttribute("multipleValues"),i.current="1"===e.getAttribute("current"),i["default"]=e.getAttribute("default")||"";
var r=this.getChildValue(e);i.values=r.split(",")}}},OpenLayers.Format.WMSCapabilities.v1.prototype.readers.wms)},CLASS_NAME:"OpenLayers.Format.WMSCapabilities.v1_1"}),OpenLayers.Format.WMSCapabilities.v1_1_0=OpenLayers.Class(OpenLayers.Format.WMSCapabilities.v1_1,{version:"1.1.0",readers:{wms:OpenLayers.Util.applyDefaults({SRS:function(e,t){for(var i=this.getChildValue(e).split(/ +/),r=0,s=i.length;s>r;r++)t.srs[i[r]]=!0
}},OpenLayers.Format.WMSCapabilities.v1_1.prototype.readers.wms)},CLASS_NAME:"OpenLayers.Format.WMSCapabilities.v1_1_0"}),OpenLayers.Protocol.WFS.v1=OpenLayers.Class(OpenLayers.Protocol,{version:null,srsName:"EPSG:4326",featureType:null,featureNS:null,geometryName:"the_geom",schema:null,featurePrefix:"feature",formatOptions:null,readFormat:null,readOptions:null,initialize:function(e){OpenLayers.Protocol.prototype.initialize.apply(this,[e]),e.format||(this.format=OpenLayers.Format.WFST(OpenLayers.Util.extend({version:this.version,featureType:this.featureType,featureNS:this.featureNS,featurePrefix:this.featurePrefix,geometryName:this.geometryName,srsName:this.srsName,schema:this.schema},this.formatOptions))),!e.geometryName&&1<parseFloat(this.format.version)&&this.setGeometryName(null)
},destroy:function(){this.options&&!this.options.format&&this.format.destroy(),this.format=null,OpenLayers.Protocol.prototype.destroy.apply(this)
},read:function(e){OpenLayers.Protocol.prototype.read.apply(this,arguments),e=OpenLayers.Util.extend({},e),OpenLayers.Util.applyDefaults(e,this.options||{});
var t=new OpenLayers.Protocol.Response({requestType:"read"}),i=OpenLayers.Format.XML.prototype.write.apply(this.format,[this.format.writeNode("wfs:GetFeature",e)]);
return t.priv=OpenLayers.Request.POST({url:e.url,callback:this.createCallback(this.handleRead,t,e),params:e.params,headers:e.headers,data:i}),t
},setFeatureType:function(e){this.featureType=e,this.format.featureType=e},setGeometryName:function(e){this.geometryName=e,this.format.geometryName=e
},handleRead:function(e,t){if(t=OpenLayers.Util.extend({},t),OpenLayers.Util.applyDefaults(t,this.options),t.callback){var i=e.priv;
200<=i.status&&300>i.status?(i=this.parseResponse(i,t.readOptions))&&!1!==i.success?(t.readOptions&&"object"==t.readOptions.output?OpenLayers.Util.extend(e,i):e.features=i,e.code=OpenLayers.Protocol.Response.SUCCESS):(e.code=OpenLayers.Protocol.Response.FAILURE,e.error=i):e.code=OpenLayers.Protocol.Response.FAILURE,t.callback.call(t.scope,e)
}},parseResponse:function(e,t){var i=e.responseXML;if(i&&i.documentElement||(i=e.responseText),!i||0>=i.length)return null;
if(i=null!==this.readFormat?this.readFormat.read(i):this.format.read(i,t),!this.featureNS){var r=this.readFormat||this.format;
this.featureNS=r.featureNS,r.autoConfig=!1,this.geometryName||this.setGeometryName(r.geometryName)
}return i},commit:function(e,t){t=OpenLayers.Util.extend({},t),OpenLayers.Util.applyDefaults(t,this.options);
var i=new OpenLayers.Protocol.Response({requestType:"commit",reqFeatures:e});return i.priv=OpenLayers.Request.POST({url:t.url,headers:t.headers,data:this.format.write(e,t),callback:this.createCallback(this.handleCommit,i,t)}),i
},handleCommit:function(e,t){if(t.callback){var i=e.priv,r=i.responseXML;r&&r.documentElement||(r=i.responseText),i=this.format.read(r)||{},e.insertIds=i.insertIds||[],i.success?e.code=OpenLayers.Protocol.Response.SUCCESS:(e.code=OpenLayers.Protocol.Response.FAILURE,e.error=i),t.callback.call(t.scope,e)
}},filterDelete:function(e,t){t=OpenLayers.Util.extend({},t),OpenLayers.Util.applyDefaults(t,this.options),new OpenLayers.Protocol.Response({requestType:"commit"});
var i=this.format.createElementNSPlus("wfs:Transaction",{attributes:{service:"WFS",version:this.version}}),r=this.format.createElementNSPlus("wfs:Delete",{attributes:{typeName:(t.featureNS?this.featurePrefix+":":"")+t.featureType}});
t.featureNS&&r.setAttribute("xmlns:"+this.featurePrefix,t.featureNS);var s=this.format.writeNode("ogc:Filter",e);
return r.appendChild(s),i.appendChild(r),i=OpenLayers.Format.XML.prototype.write.apply(this.format,[i]),OpenLayers.Request.POST({url:this.url,callback:t.callback||function(){},data:i})
},abort:function(e){e&&e.priv.abort()},CLASS_NAME:"OpenLayers.Protocol.WFS.v1"}),OpenLayers.Handler.Feature=OpenLayers.Class(OpenLayers.Handler,{EVENTMAP:{click:{"in":"click",out:"clickout"},mousemove:{"in":"over",out:"out"},dblclick:{"in":"dblclick",out:null},mousedown:{"in":null,out:null},mouseup:{"in":null,out:null},touchstart:{"in":"click",out:"clickout"}},feature:null,lastFeature:null,down:null,up:null,clickTolerance:4,geometryTypes:null,stopClick:!0,stopDown:!0,stopUp:!1,initialize:function(e,t,i,r){OpenLayers.Handler.prototype.initialize.apply(this,[e,i,r]),this.layer=t
},touchstart:function(e){return this.startTouch(),OpenLayers.Event.isMultiTouch(e)?!0:this.mousedown(e)
},touchmove:function(e){OpenLayers.Event.preventDefault(e)},mousedown:function(e){return(OpenLayers.Event.isLeftClick(e)||OpenLayers.Event.isSingleTouch(e))&&(this.down=e.xy),this.handle(e)?!this.stopDown:!0
},mouseup:function(e){return this.up=e.xy,this.handle(e)?!this.stopUp:!0},click:function(e){return this.handle(e)?!this.stopClick:!0
},mousemove:function(e){return this.callbacks.over||this.callbacks.out?(this.handle(e),!0):!0
},dblclick:function(e){return!this.handle(e)},geometryTypeMatches:function(e){return null==this.geometryTypes||-1<OpenLayers.Util.indexOf(this.geometryTypes,e.geometry.CLASS_NAME)
},handle:function(e){this.feature&&!this.feature.layer&&(this.feature=null);var t=e.type,i=!1,r=!!this.feature,s="click"==t||"dblclick"==t||"touchstart"==t;
return(this.feature=this.layer.getFeatureFromEvent(e))&&!this.feature.layer&&(this.feature=null),this.lastFeature&&!this.lastFeature.layer&&(this.lastFeature=null),this.feature?("touchstart"===t&&OpenLayers.Event.preventDefault(e),e=this.feature!=this.lastFeature,this.geometryTypeMatches(this.feature)?(r&&e?(this.lastFeature&&this.triggerCallback(t,"out",[this.lastFeature]),this.triggerCallback(t,"in",[this.feature])):r&&!s||this.triggerCallback(t,"in",[this.feature]),this.lastFeature=this.feature,i=!0):(this.lastFeature&&(r&&e||s)&&this.triggerCallback(t,"out",[this.lastFeature]),this.feature=null)):this.lastFeature&&(r||s)&&this.triggerCallback(t,"out",[this.lastFeature]),i
},triggerCallback:function(e,t,i){(t=this.EVENTMAP[e][t])&&("click"==e&&this.up&&this.down?(Math.sqrt(Math.pow(this.up.x-this.down.x,2)+Math.pow(this.up.y-this.down.y,2))<=this.clickTolerance&&this.callback(t,i),this.up=this.down=null):this.callback(t,i))
},activate:function(){var e=!1;return OpenLayers.Handler.prototype.activate.apply(this,arguments)&&(this.moveLayerToTop(),this.map.events.on({removelayer:this.handleMapEvents,changelayer:this.handleMapEvents,scope:this}),e=!0),e
},deactivate:function(){var e=!1;return OpenLayers.Handler.prototype.deactivate.apply(this,arguments)&&(this.moveLayerBack(),this.up=this.down=this.lastFeature=this.feature=null,this.map.events.un({removelayer:this.handleMapEvents,changelayer:this.handleMapEvents,scope:this}),e=!0),e
},handleMapEvents:function(e){"removelayer"!=e.type&&"order"!=e.property||this.moveLayerToTop()
},moveLayerToTop:function(){var e=Math.max(this.map.Z_INDEX_BASE.Feature-1,this.layer.getZIndex())+1;
this.layer.setZIndex(e)},moveLayerBack:function(){var e=this.layer.getZIndex()-1;
e>=this.map.Z_INDEX_BASE.Feature?this.layer.setZIndex(e):this.map.setLayerZIndex(this.layer,this.map.getLayerIndex(this.layer))
},CLASS_NAME:"OpenLayers.Handler.Feature"}),OpenLayers.Layer.Vector.RootContainer=OpenLayers.Class(OpenLayers.Layer.Vector,{displayInLayerSwitcher:!1,layers:null,display:function(){},getFeatureFromEvent:function(e){for(var t,i=this.layers,r=0;r<i.length;r++)if(t=i[r].getFeatureFromEvent(e))return t
},setMap:function(e){OpenLayers.Layer.Vector.prototype.setMap.apply(this,arguments),this.collectRoots(),e.events.register("changelayer",this,this.handleChangeLayer)
},removeMap:function(e){e.events.unregister("changelayer",this,this.handleChangeLayer),this.resetRoots(),OpenLayers.Layer.Vector.prototype.removeMap.apply(this,arguments)
},collectRoots:function(){for(var e,t=0;t<this.map.layers.length;++t)e=this.map.layers[t],-1!=OpenLayers.Util.indexOf(this.layers,e)&&e.renderer.moveRoot(this.renderer)
},resetRoots:function(){for(var e,t=0;t<this.layers.length;++t)e=this.layers[t],this.renderer&&e.renderer.getRenderLayerId()==this.id&&this.renderer.moveRoot(e.renderer)
},handleChangeLayer:function(e){var t=e.layer;"order"==e.property&&-1!=OpenLayers.Util.indexOf(this.layers,t)&&(this.resetRoots(),this.collectRoots())
},CLASS_NAME:"OpenLayers.Layer.Vector.RootContainer"}),OpenLayers.Control.SelectFeature=OpenLayers.Class(OpenLayers.Control,{multipleKey:null,toggleKey:null,multiple:!1,clickout:!0,toggle:!1,hover:!1,highlightOnly:!1,box:!1,onBeforeSelect:function(){},onSelect:function(){},onUnselect:function(){},scope:null,geometryTypes:null,layer:null,layers:null,callbacks:null,selectStyle:null,renderIntent:"select",handlers:null,initialize:function(e,t){OpenLayers.Control.prototype.initialize.apply(this,[t]),null===this.scope&&(this.scope=this),this.initLayer(e);
var i={click:this.clickFeature,clickout:this.clickoutFeature};this.hover&&(i.over=this.overFeature,i.out=this.outFeature),this.callbacks=OpenLayers.Util.extend(i,this.callbacks),this.handlers={feature:new OpenLayers.Handler.Feature(this,this.layer,this.callbacks,{geometryTypes:this.geometryTypes})},this.box&&(this.handlers.box=new OpenLayers.Handler.Box(this,{done:this.selectBox},{boxDivClassName:"olHandlerBoxSelectFeature"}))
},initLayer:function(e){OpenLayers.Util.isArray(e)?(this.layers=e,this.layer=new OpenLayers.Layer.Vector.RootContainer(this.id+"_container",{layers:e})):this.layer=e
},destroy:function(){this.active&&this.layers&&this.map.removeLayer(this.layer),OpenLayers.Control.prototype.destroy.apply(this,arguments),this.layers&&this.layer.destroy()
},activate:function(){return this.active||(this.layers&&this.map.addLayer(this.layer),this.handlers.feature.activate(),this.box&&this.handlers.box&&this.handlers.box.activate()),OpenLayers.Control.prototype.activate.apply(this,arguments)
},deactivate:function(){return this.active&&(this.handlers.feature.deactivate(),this.handlers.box&&this.handlers.box.deactivate(),this.layers&&this.map.removeLayer(this.layer)),OpenLayers.Control.prototype.deactivate.apply(this,arguments)
},unselectAll:function(e){var t,i,r,s,n=this.layers||[this.layer];for(r=0;r<n.length;++r)if(t=n[r],s=0,null!=t.selectedFeatures)for(;t.selectedFeatures.length>s;)i=t.selectedFeatures[s],e&&e.except==i?++s:this.unselect(i)
},clickFeature:function(e){this.hover||(-1<OpenLayers.Util.indexOf(e.layer.selectedFeatures,e)?this.toggleSelect()?this.unselect(e):this.multipleSelect()||this.unselectAll({except:e}):(this.multipleSelect()||this.unselectAll({except:e}),this.select(e)))
},multipleSelect:function(){return this.multiple||this.handlers.feature.evt&&this.handlers.feature.evt[this.multipleKey]
},toggleSelect:function(){return this.toggle||this.handlers.feature.evt&&this.handlers.feature.evt[this.toggleKey]
},clickoutFeature:function(){!this.hover&&this.clickout&&this.unselectAll()},overFeature:function(e){var t=e.layer;
this.hover&&(this.highlightOnly?this.highlight(e):-1==OpenLayers.Util.indexOf(t.selectedFeatures,e)&&this.select(e))
},outFeature:function(e){if(this.hover)if(this.highlightOnly){if(e._lastHighlighter==this.id)if(e._prevHighlighter&&e._prevHighlighter!=this.id){delete e._lastHighlighter;
var t=this.map.getControl(e._prevHighlighter);t&&t.highlight(e)}else this.unhighlight(e)
}else this.unselect(e)},highlight:function(e){var t=e.layer;!1!==this.events.triggerEvent("beforefeaturehighlighted",{feature:e})&&(e._prevHighlighter=e._lastHighlighter,e._lastHighlighter=this.id,t.drawFeature(e,this.selectStyle||this.renderIntent),this.events.triggerEvent("featurehighlighted",{feature:e}))
},unhighlight:function(e){var t=e.layer;void 0==e._prevHighlighter?delete e._lastHighlighter:(e._prevHighlighter!=this.id&&(e._lastHighlighter=e._prevHighlighter),delete e._prevHighlighter),t.drawFeature(e,e.style||e.layer.style||"default"),this.events.triggerEvent("featureunhighlighted",{feature:e})
},select:function(e){var t=this.onBeforeSelect.call(this.scope,e),i=e.layer;!1!==t&&(t=i.events.triggerEvent("beforefeatureselected",{feature:e}),!1!==t&&(i.selectedFeatures.push(e),this.highlight(e),this.handlers.feature.lastFeature||(this.handlers.feature.lastFeature=i.selectedFeatures[0]),i.events.triggerEvent("featureselected",{feature:e}),this.onSelect.call(this.scope,e)))
},unselect:function(e){var t=e.layer;this.unhighlight(e),OpenLayers.Util.removeItem(t.selectedFeatures,e),t.events.triggerEvent("featureunselected",{feature:e}),this.onUnselect.call(this.scope,e)
},selectBox:function(e){if(e instanceof OpenLayers.Bounds){var t=this.map.getLonLatFromPixel({x:e.left,y:e.bottom});
e=this.map.getLonLatFromPixel({x:e.right,y:e.top}),t=new OpenLayers.Bounds(t.lon,t.lat,e.lon,e.lat),this.multipleSelect()||this.unselectAll(),e=this.multiple,this.multiple=!0;
var i=this.layers||[this.layer];this.events.triggerEvent("boxselectionstart",{layers:i});
for(var r,s=0;s<i.length;++s){r=i[s];for(var n=0,a=r.features.length;a>n;++n){var o=r.features[n];
o.getVisibility()&&(null==this.geometryTypes||-1<OpenLayers.Util.indexOf(this.geometryTypes,o.geometry.CLASS_NAME))&&t.toGeometry().intersects(o.geometry)&&-1==OpenLayers.Util.indexOf(r.selectedFeatures,o)&&this.select(o)
}}this.multiple=e,this.events.triggerEvent("boxselectionend",{layers:i})}},setMap:function(e){this.handlers.feature.setMap(e),this.box&&this.handlers.box.setMap(e),OpenLayers.Control.prototype.setMap.apply(this,arguments)
},setLayer:function(e){var t=this.active;this.unselectAll(),this.deactivate(),this.layers&&(this.layer.destroy(),this.layers=null),this.initLayer(e),this.handlers.feature.layer=this.layer,t&&this.activate()
},CLASS_NAME:"OpenLayers.Control.SelectFeature"}),OpenLayers.Handler.Point=OpenLayers.Class(OpenLayers.Handler,{point:null,layer:null,multi:!1,citeCompliant:!1,mouseDown:!1,stoppedDown:null,lastDown:null,lastUp:null,persist:!1,stopDown:!1,stopUp:!1,layerOptions:null,pixelTolerance:5,lastTouchPx:null,initialize:function(e,t,i){i&&i.layerOptions&&i.layerOptions.styleMap||(this.style=OpenLayers.Util.extend(OpenLayers.Feature.Vector.style["default"],{})),OpenLayers.Handler.prototype.initialize.apply(this,arguments)
},activate:function(){if(!OpenLayers.Handler.prototype.activate.apply(this,arguments))return!1;
var e=OpenLayers.Util.extend({displayInLayerSwitcher:!1,calculateInRange:OpenLayers.Function.True,wrapDateLine:this.citeCompliant},this.layerOptions);
return this.layer=new OpenLayers.Layer.Vector(this.CLASS_NAME,e),this.map.addLayer(this.layer),!0
},createFeature:function(e){e=this.layer.getLonLatFromViewPortPx(e),e=new OpenLayers.Geometry.Point(e.lon,e.lat),this.point=new OpenLayers.Feature.Vector(e),this.callback("create",[this.point.geometry,this.point]),this.point.geometry.clearBounds(),this.layer.addFeatures([this.point],{silent:!0})
},deactivate:function(){return OpenLayers.Handler.prototype.deactivate.apply(this,arguments)?(this.cancel(),null!=this.layer.map&&(this.destroyFeature(!0),this.layer.destroy(!1)),this.layer=null,!0):!1
},destroyFeature:function(e){!this.layer||!e&&this.persist||this.layer.destroyFeatures(),this.point=null
},destroyPersistedFeature:function(){var e=this.layer;e&&1<e.features.length&&this.layer.features[0].destroy()
},finalize:function(e){this.mouseDown=!1,this.lastTouchPx=this.lastUp=this.lastDown=null,this.callback(e?"cancel":"done",[this.geometryClone()]),this.destroyFeature(e)
},cancel:function(){this.finalize(!0)},click:function(e){return OpenLayers.Event.stop(e),!1
},dblclick:function(e){return OpenLayers.Event.stop(e),!1},modifyFeature:function(e){this.point||this.createFeature(e),e=this.layer.getLonLatFromViewPortPx(e),this.point.geometry.x=e.lon,this.point.geometry.y=e.lat,this.callback("modify",[this.point.geometry,this.point,!1]),this.point.geometry.clearBounds(),this.drawFeature()
},drawFeature:function(){this.layer.drawFeature(this.point,this.style)},getGeometry:function(){var e=this.point&&this.point.geometry;
return e&&this.multi&&(e=new OpenLayers.Geometry.MultiPoint([e])),e},geometryClone:function(){var e=this.getGeometry();
return e&&e.clone()},mousedown:function(e){return this.down(e)},touchstart:function(e){return this.startTouch(),this.lastTouchPx=e.xy,this.down(e)
},mousemove:function(e){return this.move(e)},touchmove:function(e){return this.lastTouchPx=e.xy,this.move(e)
},mouseup:function(e){return this.up(e)},touchend:function(e){return e.xy=this.lastTouchPx,this.up(e)
},down:function(e){return this.mouseDown=!0,this.lastDown=e.xy,this.touch||this.modifyFeature(e.xy),this.stoppedDown=this.stopDown,!this.stopDown
},move:function(e){return this.touch||this.mouseDown&&!this.stoppedDown||this.modifyFeature(e.xy),!0
},up:function(e){return this.mouseDown=!1,this.stoppedDown=this.stopDown,!this.checkModifiers(e)||this.lastUp&&this.lastUp.equals(e.xy)||!this.lastDown||!this.passesTolerance(this.lastDown,e.xy,this.pixelTolerance)?!0:(this.touch&&this.modifyFeature(e.xy),this.persist&&this.destroyPersistedFeature(),this.lastUp=e.xy,this.finalize(),!this.stopUp)
},mouseout:function(e){OpenLayers.Util.mouseLeft(e,this.map.viewPortDiv)&&(this.stoppedDown=this.stopDown,this.mouseDown=!1)
},passesTolerance:function(e,t,i){var r=!0;return null!=i&&e&&t&&e.distanceTo(t)>i&&(r=!1),r
},CLASS_NAME:"OpenLayers.Handler.Point"}),OpenLayers.Handler.Path=OpenLayers.Class(OpenLayers.Handler.Point,{line:null,maxVertices:null,doubleTouchTolerance:20,freehand:!1,freehandToggle:"shiftKey",timerId:null,redoStack:null,createFeature:function(e){e=this.layer.getLonLatFromViewPortPx(e),e=new OpenLayers.Geometry.Point(e.lon,e.lat),this.point=new OpenLayers.Feature.Vector(e),this.line=new OpenLayers.Feature.Vector(new OpenLayers.Geometry.LineString([this.point.geometry])),this.callback("create",[this.point.geometry,this.getSketch()]),this.point.geometry.clearBounds(),this.layer.addFeatures([this.line,this.point],{silent:!0})
},destroyFeature:function(e){OpenLayers.Handler.Point.prototype.destroyFeature.call(this,e),this.line=null
},destroyPersistedFeature:function(){var e=this.layer;e&&2<e.features.length&&this.layer.features[0].destroy()
},removePoint:function(){this.point&&this.layer.removeFeatures([this.point])},addPoint:function(e){this.layer.removeFeatures([this.point]),e=this.layer.getLonLatFromViewPortPx(e),this.point=new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(e.lon,e.lat)),this.line.geometry.addComponent(this.point.geometry,this.line.geometry.components.length),this.layer.addFeatures([this.point]),this.callback("point",[this.point.geometry,this.getGeometry()]),this.callback("modify",[this.point.geometry,this.getSketch()]),this.drawFeature(),delete this.redoStack
},insertXY:function(e,t){this.line.geometry.addComponent(new OpenLayers.Geometry.Point(e,t),this.getCurrentPointIndex()),this.drawFeature(),delete this.redoStack
},insertDeltaXY:function(e,t){var i=this.getCurrentPointIndex()-1,i=this.line.geometry.components[i];
!i||isNaN(i.x)||isNaN(i.y)||this.insertXY(i.x+e,i.y+t)},insertDirectionLength:function(e,t){e*=Math.PI/180;
var i=t*Math.cos(e),r=t*Math.sin(e);this.insertDeltaXY(i,r)},insertDeflectionLength:function(e,t){var i=this.getCurrentPointIndex()-1;
if(i>0){var r=this.line.geometry.components[i],i=this.line.geometry.components[i-1],r=Math.atan2(r.y-i.y,r.x-i.x);
this.insertDirectionLength(180*r/Math.PI+e,t)}},getCurrentPointIndex:function(){return this.line.geometry.components.length-1
},undo:function(){var e=this.line.geometry,t=e.components,i=this.getCurrentPointIndex()-1,r=t[i],s=e.removeComponent(r);
return s&&(this.touch&&i>0&&(t=e.components,e=t[i-1],i=this.getCurrentPointIndex(),t=t[i],t.x=e.x,t.y=e.y),this.redoStack||(this.redoStack=[]),this.redoStack.push(r),this.drawFeature()),s
},redo:function(){var e=this.redoStack&&this.redoStack.pop();return e&&(this.line.geometry.addComponent(e,this.getCurrentPointIndex()),this.drawFeature()),!!e
},freehandMode:function(e){return this.freehandToggle&&e[this.freehandToggle]?!this.freehand:this.freehand
},modifyFeature:function(e,t){this.line||this.createFeature(e);var i=this.layer.getLonLatFromViewPortPx(e);
this.point.geometry.x=i.lon,this.point.geometry.y=i.lat,this.callback("modify",[this.point.geometry,this.getSketch(),t]),this.point.geometry.clearBounds(),this.drawFeature()
},drawFeature:function(){this.layer.drawFeature(this.line,this.style),this.layer.drawFeature(this.point,this.style)
},getSketch:function(){return this.line},getGeometry:function(){var e=this.line&&this.line.geometry;
return e&&this.multi&&(e=new OpenLayers.Geometry.MultiLineString([e])),e},touchstart:function(e){return this.timerId&&this.passesTolerance(this.lastTouchPx,e.xy,this.doubleTouchTolerance)?(this.finishGeometry(),window.clearTimeout(this.timerId),this.timerId=null,!1):(this.timerId&&(window.clearTimeout(this.timerId),this.timerId=null),this.timerId=window.setTimeout(OpenLayers.Function.bind(function(){this.timerId=null
},this),300),OpenLayers.Handler.Point.prototype.touchstart.call(this,e))},down:function(e){var t=this.stopDown;
return this.freehandMode(e)&&(t=!0,this.touch&&(this.modifyFeature(e.xy,!!this.lastUp),OpenLayers.Event.stop(e))),this.touch||this.lastDown&&this.passesTolerance(this.lastDown,e.xy,this.pixelTolerance)||this.modifyFeature(e.xy,!!this.lastUp),this.mouseDown=!0,this.lastDown=e.xy,this.stoppedDown=t,!t
},move:function(e){return this.stoppedDown&&this.freehandMode(e)?(this.persist&&this.destroyPersistedFeature(),this.maxVertices&&this.line&&this.line.geometry.components.length===this.maxVertices?(this.removePoint(),this.finalize()):this.addPoint(e.xy),!1):(this.touch||this.mouseDown&&!this.stoppedDown||this.modifyFeature(e.xy,!!this.lastUp),!0)
},up:function(e){return!this.mouseDown||this.lastUp&&this.lastUp.equals(e.xy)||(this.stoppedDown&&this.freehandMode(e)?(this.persist&&this.destroyPersistedFeature(),this.removePoint(),this.finalize()):this.passesTolerance(this.lastDown,e.xy,this.pixelTolerance)&&(this.touch&&this.modifyFeature(e.xy),null==this.lastUp&&this.persist&&this.destroyPersistedFeature(),this.addPoint(e.xy),this.lastUp=e.xy,this.line.geometry.components.length===this.maxVertices+1&&this.finishGeometry())),this.stoppedDown=this.stopDown,this.mouseDown=!1,!this.stopUp
},finishGeometry:function(){this.line.geometry.removeComponent(this.line.geometry.components[this.line.geometry.components.length-1]),this.removePoint(),this.finalize()
},dblclick:function(e){return this.freehandMode(e)||this.finishGeometry(),!1},CLASS_NAME:"OpenLayers.Handler.Path"}),OpenLayers.Spherical=OpenLayers.Spherical||{},OpenLayers.Spherical.DEFAULT_RADIUS=6378137,OpenLayers.Spherical.computeDistanceBetween=function(e,t,i){i=i||OpenLayers.Spherical.DEFAULT_RADIUS;
var r=Math.sin(Math.PI*(t.lon-e.lon)/360),s=Math.sin(Math.PI*(t.lat-e.lat)/360);return e=s*s+r*r*Math.cos(Math.PI*e.lat/180)*Math.cos(Math.PI*t.lat/180),2*i*Math.atan2(Math.sqrt(e),Math.sqrt(1-e))
},OpenLayers.Spherical.computeHeading=function(e,t){var i=Math.sin(Math.PI*(e.lon-t.lon)/180)*Math.cos(Math.PI*t.lat/180),r=Math.cos(Math.PI*e.lat/180)*Math.sin(Math.PI*t.lat/180)-Math.sin(Math.PI*e.lat/180)*Math.cos(Math.PI*t.lat/180)*Math.cos(Math.PI*(e.lon-t.lon)/180);
return 180*Math.atan2(i,r)/Math.PI},OpenLayers.Control.CacheWrite=OpenLayers.Class(OpenLayers.Control,{layers:null,imageFormat:"image/png",quotaRegEx:/quota/i,setMap:function(e){OpenLayers.Control.prototype.setMap.apply(this,arguments);
var t,i=this.layers||e.layers;for(t=i.length-1;t>=0;--t)this.addLayer({layer:i[t]});
this.layers||e.events.on({addlayer:this.addLayer,removeLayer:this.removeLayer,scope:this})
},addLayer:function(e){e.layer.events.on({tileloadstart:this.makeSameOrigin,tileloaded:this.onTileLoaded,scope:this})
},removeLayer:function(e){e.layer.events.un({tileloadstart:this.makeSameOrigin,tileloaded:this.onTileLoaded,scope:this})
},makeSameOrigin:function(e){if(this.active&&(e=e.tile,e instanceof OpenLayers.Tile.Image&&!e.crossOriginKeyword&&"data:"!==e.url.substr(0,5))){var t=OpenLayers.Request.makeSameOrigin(e.url,OpenLayers.ProxyHost);
OpenLayers.Control.CacheWrite.urlMap[t]=e.url,e.url=t}},onTileLoaded:function(e){this.active&&!e.aborted&&e.tile instanceof OpenLayers.Tile.Image&&"data:"!==e.tile.url.substr(0,5)&&(this.cache({tile:e.tile}),delete OpenLayers.Control.CacheWrite.urlMap[e.tile.url])
},cache:function(e){if(window.localStorage){e=e.tile;try{var t=e.getCanvasContext();
t&&window.localStorage.setItem("olCache_"+(OpenLayers.Control.CacheWrite.urlMap[e.url]||e.url),t.canvas.toDataURL(this.imageFormat))
}catch(i){(t=i.name||i.message)&&this.quotaRegEx.test(t)?this.events.triggerEvent("cachefull",{tile:e}):OpenLayers.Console.error(i.toString())
}}},destroy:function(){if(this.layers||this.map){var e,t=this.layers||this.map.layers;
for(e=t.length-1;e>=0;--e)this.removeLayer({layer:t[e]})}this.map&&this.map.events.un({addlayer:this.addLayer,removeLayer:this.removeLayer,scope:this}),OpenLayers.Control.prototype.destroy.apply(this,arguments)
},CLASS_NAME:"OpenLayers.Control.CacheWrite"}),OpenLayers.Control.CacheWrite.clearCache=function(){if(window.localStorage){var e,t;
for(e=window.localStorage.length-1;e>=0;--e)t=window.localStorage.key(e),"olCache_"===t.substr(0,8)&&window.localStorage.removeItem(t)
}},OpenLayers.Control.CacheWrite.urlMap={},OpenLayers.Format.Context=OpenLayers.Class(OpenLayers.Format.XML.VersionedOGC,{layerOptions:null,layerParams:null,read:function(e,t){var i=OpenLayers.Format.XML.VersionedOGC.prototype.read.apply(this,arguments);
if(t&&t.map)if(this.context=i,t.map instanceof OpenLayers.Map)i=this.mergeContextToMap(i,t.map);
else{var r=t.map;(OpenLayers.Util.isElement(r)||"string"==typeof r)&&(r={div:r}),i=this.contextToMap(i,r)
}return i},getLayerFromContext:function(e){var t,i,r={queryable:e.queryable,visibility:e.visibility,maxExtent:e.maxExtent,metadata:OpenLayers.Util.applyDefaults(e.metadata,{styles:e.styles,formats:e.formats,"abstract":e["abstract"],dataURL:e.dataURL}),numZoomLevels:e.numZoomLevels,units:e.units,isBaseLayer:e.isBaseLayer,opacity:e.opacity,displayInLayerSwitcher:e.displayInLayerSwitcher,singleTile:e.singleTile,tileSize:e.tileSize?new OpenLayers.Size(e.tileSize.width,e.tileSize.height):void 0,minScale:e.minScale||e.maxScaleDenominator,maxScale:e.maxScale||e.minScaleDenominator,srs:e.srs,dimensions:e.dimensions,metadataURL:e.metadataURL};
this.layerOptions&&OpenLayers.Util.applyDefaults(r,this.layerOptions);var s={layers:e.name,transparent:e.transparent,version:e.version};
if(e.formats&&0<e.formats.length)for(s.format=e.formats[0].value,t=0,i=e.formats.length;i>t;t++){var n=e.formats[t];
if(1==n.current){s.format=n.value;break}}if(e.styles&&0<e.styles.length)for(t=0,i=e.styles.length;i>t;t++)if(n=e.styles[t],1==n.current){n.href?s.sld=n.href:n.body?s.sld_body=n.body:s.styles=n.name;
break}return this.layerParams&&OpenLayers.Util.applyDefaults(s,this.layerParams),t=null,i=e.service,i==OpenLayers.Format.Context.serviceTypes.WFS?(r.strategies=[new OpenLayers.Strategy.BBOX],r.protocol=new OpenLayers.Protocol.WFS({url:e.url,featurePrefix:e.name.split(":")[0],featureType:e.name.split(":").pop()}),t=new OpenLayers.Layer.Vector(e.title||e.name,r)):i==OpenLayers.Format.Context.serviceTypes.KML?(r.strategies=[new OpenLayers.Strategy.Fixed],r.protocol=new OpenLayers.Protocol.HTTP({url:e.url,format:new OpenLayers.Format.KML}),t=new OpenLayers.Layer.Vector(e.title||e.name,r)):i==OpenLayers.Format.Context.serviceTypes.GML?(r.strategies=[new OpenLayers.Strategy.Fixed],r.protocol=new OpenLayers.Protocol.HTTP({url:e.url,format:new OpenLayers.Format.GML}),t=new OpenLayers.Layer.Vector(e.title||e.name,r)):e.features?(t=new OpenLayers.Layer.Vector(e.title||e.name,r),t.addFeatures(e.features)):!0!==e.categoryLayer&&(t=new OpenLayers.Layer.WMS(e.title||e.name,e.url,s,r)),t
},getLayersFromContext:function(e){for(var t=[],i=0,r=e.length;r>i;i++){var s=this.getLayerFromContext(e[i]);
null!==s&&t.push(s)}return t},contextToMap:function(e,t){t=OpenLayers.Util.applyDefaults({maxExtent:e.maxExtent,projection:e.projection,units:e.units},t),t.maxExtent&&(t.maxResolution=t.maxExtent.getWidth()/OpenLayers.Map.TILE_WIDTH),t.metadata={contactInformation:e.contactInformation,"abstract":e["abstract"],keywords:e.keywords,logo:e.logo,descriptionURL:e.descriptionURL};
var i=new OpenLayers.Map(t);return i.addLayers(this.getLayersFromContext(e.layersContext)),i.setCenter(e.bounds.getCenterLonLat(),i.getZoomForExtent(e.bounds,!0)),i
},mergeContextToMap:function(e,t){return t.addLayers(this.getLayersFromContext(e.layersContext)),t
},write:function(e){return e=this.toContext(e),OpenLayers.Format.XML.VersionedOGC.prototype.write.apply(this,arguments)
},CLASS_NAME:"OpenLayers.Format.Context"}),OpenLayers.Format.Context.serviceTypes={WMS:"urn:ogc:serviceType:WMS",WFS:"urn:ogc:serviceType:WFS",WCS:"urn:ogc:serviceType:WCS",GML:"urn:ogc:serviceType:GML",SLD:"urn:ogc:serviceType:SLD",FES:"urn:ogc:serviceType:FES",KML:"urn:ogc:serviceType:KML"},OpenLayers.Format.WMC=OpenLayers.Class(OpenLayers.Format.Context,{defaultVersion:"1.1.0",layerToContext:function(e){var t=this.getParser(),i={queryable:e.queryable,visibility:e.visibility,name:e.params.LAYERS,title:e.name,"abstract":e.metadata["abstract"],dataURL:e.metadata.dataURL,metadataURL:e.metadataURL,server:{version:e.params.VERSION,url:e.url},maxExtent:e.maxExtent,transparent:e.params.TRANSPARENT,numZoomLevels:e.numZoomLevels,units:e.units,isBaseLayer:e.isBaseLayer,opacity:1==e.opacity?void 0:e.opacity,displayInLayerSwitcher:e.displayInLayerSwitcher,singleTile:e.singleTile,tileSize:e.singleTile||!e.tileSize?void 0:{width:e.tileSize.w,height:e.tileSize.h},minScale:e.options.resolutions||e.options.scales||e.options.maxResolution||e.options.minScale?e.minScale:void 0,maxScale:e.options.resolutions||e.options.scales||e.options.minResolution||e.options.maxScale?e.maxScale:void 0,formats:[],styles:[],srs:e.srs,dimensions:e.dimensions};
if(e.metadata.servertitle&&(i.server.title=e.metadata.servertitle),e.metadata.formats&&0<e.metadata.formats.length)for(var r=0,s=e.metadata.formats.length;s>r;r++){var n=e.metadata.formats[r];
i.formats.push({value:n.value,current:n.value==e.params.FORMAT})}else i.formats.push({value:e.params.FORMAT,current:!0});
if(e.metadata.styles&&0<e.metadata.styles.length)for(r=0,s=e.metadata.styles.length;s>r;r++)t=e.metadata.styles[r],t.current=t.href==e.params.SLD||t.body==e.params.SLD_BODY||t.name==e.params.STYLES?!0:!1,i.styles.push(t);
else i.styles.push({href:e.params.SLD,body:e.params.SLD_BODY,name:e.params.STYLES||t.defaultStyleName,title:t.defaultStyleTitle,current:!0});
return i},toContext:function(e){var t={},i=e.layers;if("OpenLayers.Map"==e.CLASS_NAME){var r=e.metadata||{};
t.size=e.getSize(),t.bounds=e.getExtent(),t.projection=e.projection,t.title=e.title,t.keywords=r.keywords,t["abstract"]=r["abstract"],t.logo=r.logo,t.descriptionURL=r.descriptionURL,t.contactInformation=r.contactInformation,t.maxExtent=e.maxExtent
}else OpenLayers.Util.applyDefaults(t,e),void 0!=t.layers&&delete t.layers;if(void 0==t.layersContext&&(t.layersContext=[]),void 0!=i&&OpenLayers.Util.isArray(i))for(e=0,r=i.length;r>e;e++){var s=i[e];
s instanceof OpenLayers.Layer.WMS&&t.layersContext.push(this.layerToContext(s))}return t
},CLASS_NAME:"OpenLayers.Format.WMC"}),OpenLayers.Format.WMC.v1=OpenLayers.Class(OpenLayers.Format.XML,{namespaces:{ol:"http://openlayers.org/context",wmc:"http://www.opengis.net/context",sld:"http://www.opengis.net/sld",xlink:"http://www.w3.org/1999/xlink",xsi:"http://www.w3.org/2001/XMLSchema-instance"},schemaLocation:"",getNamespacePrefix:function(e){var t=null;
if(null==e)t=this.namespaces[this.defaultPrefix];else for(t in this.namespaces)if(this.namespaces[t]==e)break;
return t},defaultPrefix:"wmc",rootPrefix:null,defaultStyleName:"",defaultStyleTitle:"Default",initialize:function(e){OpenLayers.Format.XML.prototype.initialize.apply(this,[e])
},read:function(e){"string"==typeof e&&(e=OpenLayers.Format.XML.prototype.read.apply(this,[e])),e=e.documentElement,this.rootPrefix=e.prefix;
var t={version:e.getAttribute("version")};return this.runChildNodes(t,e),t},runChildNodes:function(e,t){for(var i,r,s,n=t.childNodes,a=0,o=n.length;o>a;++a)i=n[a],1==i.nodeType&&(r=this.getNamespacePrefix(i.namespaceURI),s=i.nodeName.split(":").pop(),(r=this["read_"+r+"_"+s])&&r.apply(this,[e,i]))
},read_wmc_General:function(e,t){this.runChildNodes(e,t)},read_wmc_BoundingBox:function(e,t){e.projection=t.getAttribute("SRS"),e.bounds=new OpenLayers.Bounds(t.getAttribute("minx"),t.getAttribute("miny"),t.getAttribute("maxx"),t.getAttribute("maxy"))
},read_wmc_LayerList:function(e,t){e.layersContext=[],this.runChildNodes(e,t)},read_wmc_Layer:function(e,t){var i={visibility:"1"!=t.getAttribute("hidden"),queryable:"1"==t.getAttribute("queryable"),formats:[],styles:[],metadata:{}};
this.runChildNodes(i,t),e.layersContext.push(i)},read_wmc_Extension:function(e,t){this.runChildNodes(e,t)
},read_ol_units:function(e,t){e.units=this.getChildValue(t)},read_ol_maxExtent:function(e,t){var i=new OpenLayers.Bounds(t.getAttribute("minx"),t.getAttribute("miny"),t.getAttribute("maxx"),t.getAttribute("maxy"));
e.maxExtent=i},read_ol_transparent:function(e,t){e.transparent=this.getChildValue(t)
},read_ol_numZoomLevels:function(e,t){e.numZoomLevels=parseInt(this.getChildValue(t))
},read_ol_opacity:function(e,t){e.opacity=parseFloat(this.getChildValue(t))},read_ol_singleTile:function(e,t){e.singleTile="true"==this.getChildValue(t)
},read_ol_tileSize:function(e,t){var i={width:t.getAttribute("width"),height:t.getAttribute("height")};
e.tileSize=i},read_ol_isBaseLayer:function(e,t){e.isBaseLayer="true"==this.getChildValue(t)
},read_ol_displayInLayerSwitcher:function(e,t){e.displayInLayerSwitcher="true"==this.getChildValue(t)
},read_wmc_Server:function(e,t){e.version=t.getAttribute("version"),e.url=this.getOnlineResource_href(t),e.metadata.servertitle=t.getAttribute("title")
},read_wmc_FormatList:function(e,t){this.runChildNodes(e,t)},read_wmc_Format:function(e,t){var i={value:this.getChildValue(t)};
"1"==t.getAttribute("current")&&(i.current=!0),e.formats.push(i)},read_wmc_StyleList:function(e,t){this.runChildNodes(e,t)
},read_wmc_Style:function(e,t){var i={};this.runChildNodes(i,t),"1"==t.getAttribute("current")&&(i.current=!0),e.styles.push(i)
},read_wmc_SLD:function(e,t){this.runChildNodes(e,t)},read_sld_StyledLayerDescriptor:function(e,t){var i=OpenLayers.Format.XML.prototype.write.apply(this,[t]);
e.body=i},read_sld_FeatureTypeStyle:function(e,t){var i=OpenLayers.Format.XML.prototype.write.apply(this,[t]);
e.body=i},read_wmc_OnlineResource:function(e,t){e.href=this.getAttributeNS(t,this.namespaces.xlink,"href")
},read_wmc_Name:function(e,t){var i=this.getChildValue(t);i&&(e.name=i)},read_wmc_Title:function(e,t){var i=this.getChildValue(t);
i&&(e.title=i)},read_wmc_MetadataURL:function(e,t){e.metadataURL=this.getOnlineResource_href(t)
},read_wmc_KeywordList:function(e,t){e.keywords=[],this.runChildNodes(e.keywords,t)
},read_wmc_Keyword:function(e,t){e.push(this.getChildValue(t))},read_wmc_Abstract:function(e,t){var i=this.getChildValue(t);
i&&(e["abstract"]=i)},read_wmc_LogoURL:function(e,t){e.logo={width:t.getAttribute("width"),height:t.getAttribute("height"),format:t.getAttribute("format"),href:this.getOnlineResource_href(t)}
},read_wmc_DescriptionURL:function(e,t){e.descriptionURL=this.getOnlineResource_href(t)
},read_wmc_ContactInformation:function(e,t){var i={};this.runChildNodes(i,t),e.contactInformation=i
},read_wmc_ContactPersonPrimary:function(e,t){var i={};this.runChildNodes(i,t),e.personPrimary=i
},read_wmc_ContactPerson:function(e,t){var i=this.getChildValue(t);i&&(e.person=i)
},read_wmc_ContactOrganization:function(e,t){var i=this.getChildValue(t);i&&(e.organization=i)
},read_wmc_ContactPosition:function(e,t){var i=this.getChildValue(t);i&&(e.position=i)
},read_wmc_ContactAddress:function(e,t){var i={};this.runChildNodes(i,t),e.contactAddress=i
},read_wmc_AddressType:function(e,t){var i=this.getChildValue(t);i&&(e.type=i)},read_wmc_Address:function(e,t){var i=this.getChildValue(t);
i&&(e.address=i)},read_wmc_City:function(e,t){var i=this.getChildValue(t);i&&(e.city=i)
},read_wmc_StateOrProvince:function(e,t){var i=this.getChildValue(t);i&&(e.stateOrProvince=i)
},read_wmc_PostCode:function(e,t){var i=this.getChildValue(t);i&&(e.postcode=i)},read_wmc_Country:function(e,t){var i=this.getChildValue(t);
i&&(e.country=i)},read_wmc_ContactVoiceTelephone:function(e,t){var i=this.getChildValue(t);
i&&(e.phone=i)},read_wmc_ContactFacsimileTelephone:function(e,t){var i=this.getChildValue(t);
i&&(e.fax=i)},read_wmc_ContactElectronicMailAddress:function(e,t){var i=this.getChildValue(t);
i&&(e.email=i)},read_wmc_DataURL:function(e,t){e.dataURL=this.getOnlineResource_href(t)
},read_wmc_LegendURL:function(e,t){var i={width:t.getAttribute("width"),height:t.getAttribute("height"),format:t.getAttribute("format"),href:this.getOnlineResource_href(t)};
e.legend=i},read_wmc_DimensionList:function(e,t){e.dimensions={},this.runChildNodes(e.dimensions,t)
},read_wmc_Dimension:function(e,t){var i={name:t.getAttribute("name").toLowerCase(),units:t.getAttribute("units")||"",unitSymbol:t.getAttribute("unitSymbol")||"",userValue:t.getAttribute("userValue")||"",nearestValue:"1"===t.getAttribute("nearestValue"),multipleValues:"1"===t.getAttribute("multipleValues"),current:"1"===t.getAttribute("current"),"default":t.getAttribute("default")||""},r=this.getChildValue(t);
i.values=r.split(","),e[i.name]=i},write:function(e,t){var i=this.createElementDefaultNS("ViewContext");
return this.setAttributes(i,{version:this.VERSION,id:t&&"string"==typeof t.id?t.id:OpenLayers.Util.createUniqueID("OpenLayers_Context_")}),this.setAttributeNS(i,this.namespaces.xsi,"xsi:schemaLocation",this.schemaLocation),i.appendChild(this.write_wmc_General(e)),i.appendChild(this.write_wmc_LayerList(e)),OpenLayers.Format.XML.prototype.write.apply(this,[i])
},createElementDefaultNS:function(e,t,i){return e=this.createElementNS(this.namespaces[this.defaultPrefix],e),t&&e.appendChild(this.createTextNode(t)),i&&this.setAttributes(e,i),e
},setAttributes:function(e,t){var i,r;for(r in t)i=t[r].toString(),i.match(/[A-Z]/)?this.setAttributeNS(e,null,r,i):e.setAttribute(r,i)
},write_wmc_General:function(e){var t=this.createElementDefaultNS("General");e.size&&t.appendChild(this.createElementDefaultNS("Window",null,{width:e.size.w,height:e.size.h}));
var i=e.bounds;return t.appendChild(this.createElementDefaultNS("BoundingBox",null,{minx:i.left.toPrecision(18),miny:i.bottom.toPrecision(18),maxx:i.right.toPrecision(18),maxy:i.top.toPrecision(18),SRS:e.projection})),t.appendChild(this.createElementDefaultNS("Title",e.title)),e.keywords&&t.appendChild(this.write_wmc_KeywordList(e.keywords)),e["abstract"]&&t.appendChild(this.createElementDefaultNS("Abstract",e["abstract"])),e.logo&&t.appendChild(this.write_wmc_URLType("LogoURL",e.logo.href,e.logo)),e.descriptionURL&&t.appendChild(this.write_wmc_URLType("DescriptionURL",e.descriptionURL)),e.contactInformation&&t.appendChild(this.write_wmc_ContactInformation(e.contactInformation)),t.appendChild(this.write_ol_MapExtension(e)),t
},write_wmc_KeywordList:function(e){for(var t=this.createElementDefaultNS("KeywordList"),i=0,r=e.length;r>i;i++)t.appendChild(this.createElementDefaultNS("Keyword",e[i]));
return t},write_wmc_ContactInformation:function(e){var t=this.createElementDefaultNS("ContactInformation");
return e.personPrimary&&t.appendChild(this.write_wmc_ContactPersonPrimary(e.personPrimary)),e.position&&t.appendChild(this.createElementDefaultNS("ContactPosition",e.position)),e.contactAddress&&t.appendChild(this.write_wmc_ContactAddress(e.contactAddress)),e.phone&&t.appendChild(this.createElementDefaultNS("ContactVoiceTelephone",e.phone)),e.fax&&t.appendChild(this.createElementDefaultNS("ContactFacsimileTelephone",e.fax)),e.email&&t.appendChild(this.createElementDefaultNS("ContactElectronicMailAddress",e.email)),t
},write_wmc_ContactPersonPrimary:function(e){var t=this.createElementDefaultNS("ContactPersonPrimary");
return e.person&&t.appendChild(this.createElementDefaultNS("ContactPerson",e.person)),e.organization&&t.appendChild(this.createElementDefaultNS("ContactOrganization",e.organization)),t
},write_wmc_ContactAddress:function(e){var t=this.createElementDefaultNS("ContactAddress");
return e.type&&t.appendChild(this.createElementDefaultNS("AddressType",e.type)),e.address&&t.appendChild(this.createElementDefaultNS("Address",e.address)),e.city&&t.appendChild(this.createElementDefaultNS("City",e.city)),e.stateOrProvince&&t.appendChild(this.createElementDefaultNS("StateOrProvince",e.stateOrProvince)),e.postcode&&t.appendChild(this.createElementDefaultNS("PostCode",e.postcode)),e.country&&t.appendChild(this.createElementDefaultNS("Country",e.country)),t
},write_ol_MapExtension:function(e){var t=this.createElementDefaultNS("Extension");
if(e=e.maxExtent){var i=this.createElementNS(this.namespaces.ol,"ol:maxExtent");this.setAttributes(i,{minx:e.left.toPrecision(18),miny:e.bottom.toPrecision(18),maxx:e.right.toPrecision(18),maxy:e.top.toPrecision(18)}),t.appendChild(i)
}return t},write_wmc_LayerList:function(e){for(var t=this.createElementDefaultNS("LayerList"),i=0,r=e.layersContext.length;r>i;++i)t.appendChild(this.write_wmc_Layer(e.layersContext[i]));
return t},write_wmc_Layer:function(e){var t=this.createElementDefaultNS("Layer",null,{queryable:e.queryable?"1":"0",hidden:e.visibility?"0":"1"});
return t.appendChild(this.write_wmc_Server(e)),t.appendChild(this.createElementDefaultNS("Name",e.name)),t.appendChild(this.createElementDefaultNS("Title",e.title)),e["abstract"]&&t.appendChild(this.createElementDefaultNS("Abstract",e["abstract"])),e.dataURL&&t.appendChild(this.write_wmc_URLType("DataURL",e.dataURL)),e.metadataURL&&t.appendChild(this.write_wmc_URLType("MetadataURL",e.metadataURL)),t
},write_wmc_LayerExtension:function(e){var t=this.createElementDefaultNS("Extension"),i=e.maxExtent,r=this.createElementNS(this.namespaces.ol,"ol:maxExtent");
this.setAttributes(r,{minx:i.left.toPrecision(18),miny:i.bottom.toPrecision(18),maxx:i.right.toPrecision(18),maxy:i.top.toPrecision(18)}),t.appendChild(r),e.tileSize&&!e.singleTile&&(i=this.createElementNS(this.namespaces.ol,"ol:tileSize"),this.setAttributes(i,e.tileSize),t.appendChild(i));
for(var i="transparent numZoomLevels units isBaseLayer opacity displayInLayerSwitcher singleTile".split(" "),s=0,n=i.length;n>s;++s)(r=this.createOLPropertyNode(e,i[s]))&&t.appendChild(r);
return t},createOLPropertyNode:function(e,t){var i=null;return null!=e[t]&&(i=this.createElementNS(this.namespaces.ol,"ol:"+t),i.appendChild(this.createTextNode(e[t].toString()))),i
},write_wmc_Server:function(e){e=e.server;var t=this.createElementDefaultNS("Server"),i={service:"OGC:WMS",version:e.version};
return e.title&&(i.title=e.title),this.setAttributes(t,i),t.appendChild(this.write_wmc_OnlineResource(e.url)),t
},write_wmc_URLType:function(e,t,i){if(e=this.createElementDefaultNS(e),e.appendChild(this.write_wmc_OnlineResource(t)),i){t=["width","height","format"];
for(var r=0;r<t.length;r++)t[r]in i&&e.setAttribute(t[r],i[t[r]])}return e},write_wmc_DimensionList:function(e){var t,i=this.createElementDefaultNS("DimensionList");
for(t in e.dimensions){var r,s={},n=e.dimensions[t];for(r in n)s[r]="boolean"==typeof n[r]?Number(n[r]):n[r];
n="",s.values&&(n=s.values.join(","),delete s.values),i.appendChild(this.createElementDefaultNS("Dimension",n,s))
}return i},write_wmc_FormatList:function(e){for(var t=this.createElementDefaultNS("FormatList"),i=0,r=e.formats.length;r>i;i++){var s=e.formats[i];
t.appendChild(this.createElementDefaultNS("Format",s.value,s.current&&1==s.current?{current:"1"}:null))
}return t},write_wmc_StyleList:function(e){var t=this.createElementDefaultNS("StyleList");
if((e=e.styles)&&OpenLayers.Util.isArray(e))for(var i,r=0,s=e.length;s>r;r++){var n=e[r],a=this.createElementDefaultNS("Style",null,n.current&&1==n.current?{current:"1"}:null);
n.href?(i=this.createElementDefaultNS("SLD"),n.name&&i.appendChild(this.createElementDefaultNS("Name",n.name)),n.title&&i.appendChild(this.createElementDefaultNS("Title",n.title)),n.legend&&i.appendChild(this.write_wmc_URLType("LegendURL",n.legend.href,n.legend)),n=this.write_wmc_OnlineResource(n.href),i.appendChild(n),a.appendChild(i)):n.body?(i=this.createElementDefaultNS("SLD"),n.name&&i.appendChild(this.createElementDefaultNS("Name",n.name)),n.title&&i.appendChild(this.createElementDefaultNS("Title",n.title)),n.legend&&i.appendChild(this.write_wmc_URLType("LegendURL",n.legend.href,n.legend)),n=OpenLayers.Format.XML.prototype.read.apply(this,[n.body]).documentElement,i.ownerDocument&&i.ownerDocument.importNode&&(n=i.ownerDocument.importNode(n,!0)),i.appendChild(n),a.appendChild(i)):(a.appendChild(this.createElementDefaultNS("Name",n.name)),a.appendChild(this.createElementDefaultNS("Title",n.title)),n["abstract"]&&a.appendChild(this.createElementDefaultNS("Abstract",n["abstract"])),n.legend&&a.appendChild(this.write_wmc_URLType("LegendURL",n.legend.href,n.legend))),t.appendChild(a)
}return t},write_wmc_OnlineResource:function(e){var t=this.createElementDefaultNS("OnlineResource");
return this.setAttributeNS(t,this.namespaces.xlink,"xlink:type","simple"),this.setAttributeNS(t,this.namespaces.xlink,"xlink:href",e),t
},getOnlineResource_href:function(e){var t={};return e=e.getElementsByTagName("OnlineResource"),0<e.length&&this.read_wmc_OnlineResource(t,e[0]),t.href
},CLASS_NAME:"OpenLayers.Format.WMC.v1"}),OpenLayers.Control.PanPanel=OpenLayers.Class(OpenLayers.Control.Panel,{slideFactor:50,slideRatio:null,initialize:function(e){OpenLayers.Control.Panel.prototype.initialize.apply(this,[e]),e={slideFactor:this.slideFactor,slideRatio:this.slideRatio},this.addControls([new OpenLayers.Control.Pan(OpenLayers.Control.Pan.NORTH,e),new OpenLayers.Control.Pan(OpenLayers.Control.Pan.SOUTH,e),new OpenLayers.Control.Pan(OpenLayers.Control.Pan.EAST,e),new OpenLayers.Control.Pan(OpenLayers.Control.Pan.WEST,e)])
},CLASS_NAME:"OpenLayers.Control.PanPanel"}),OpenLayers.Control.Attribution=OpenLayers.Class(OpenLayers.Control,{separator:", ",template:"${layers}",destroy:function(){this.map.events.un({removelayer:this.updateAttribution,addlayer:this.updateAttribution,changelayer:this.updateAttribution,changebaselayer:this.updateAttribution,scope:this}),OpenLayers.Control.prototype.destroy.apply(this,arguments)
},draw:function(){return OpenLayers.Control.prototype.draw.apply(this,arguments),this.map.events.on({changebaselayer:this.updateAttribution,changelayer:this.updateAttribution,addlayer:this.updateAttribution,removelayer:this.updateAttribution,scope:this}),this.updateAttribution(),this.div
},updateAttribution:function(){var e=[];if(this.map&&this.map.layers){for(var t=0,i=this.map.layers.length;i>t;t++){var r=this.map.layers[t];
r.attribution&&r.getVisibility()&&-1===OpenLayers.Util.indexOf(e,r.attribution)&&e.push(r.attribution)
}this.div.innerHTML=OpenLayers.String.format(this.template,{layers:e.join(this.separator)})
}},CLASS_NAME:"OpenLayers.Control.Attribution"}),OpenLayers.Kinetic=OpenLayers.Class({threshold:0,deceleration:.0035,nbPoints:100,delay:200,points:void 0,timerId:void 0,initialize:function(e){OpenLayers.Util.extend(this,e)
},begin:function(){OpenLayers.Animation.stop(this.timerId),this.timerId=void 0,this.points=[]
},update:function(e){this.points.unshift({xy:e,tick:(new Date).getTime()}),this.points.length>this.nbPoints&&this.points.pop()
},end:function(e){for(var t,i,r=(new Date).getTime(),s=0,n=this.points.length;n>s&&(i=this.points[s],!(r-i.tick>this.delay));s++)t=i;
return!t||(s=(new Date).getTime()-t.tick,r=Math.sqrt(Math.pow(e.x-t.xy.x,2)+Math.pow(e.y-t.xy.y,2)),s=r/s,0==s||s<this.threshold)?void 0:(r=Math.asin((e.y-t.xy.y)/r),t.xy.x<=e.x&&(r=Math.PI-r),{speed:s,theta:r})
},move:function(e,t){var i=e.speed,r=Math.cos(e.theta),s=-Math.sin(e.theta),n=(new Date).getTime(),a=0,o=0;
this.timerId=OpenLayers.Animation.start(OpenLayers.Function.bind(function(){if(null!=this.timerId){var e,l,h=(new Date).getTime()-n,p=-this.deceleration*Math.pow(h,2)/2+i*h,u=p*r,p=p*s;
e=!1,0>=-this.deceleration*h+i&&(OpenLayers.Animation.stop(this.timerId),this.timerId=null,e=!0),h=u-a,l=p-o,a=u,o=p,t(h,l,e)
}},this))},CLASS_NAME:"OpenLayers.Kinetic"}),OpenLayers.Format.WPSExecute=OpenLayers.Class(OpenLayers.Format.XML,OpenLayers.Format.Filter.v1_1_0,{namespaces:{ows:"http://www.opengis.net/ows/1.1",gml:"http://www.opengis.net/gml",wps:"http://www.opengis.net/wps/1.0.0",wfs:"http://www.opengis.net/wfs",ogc:"http://www.opengis.net/ogc",wcs:"http://www.opengis.net/wcs",xlink:"http://www.w3.org/1999/xlink",xsi:"http://www.w3.org/2001/XMLSchema-instance"},regExes:{trimSpace:/^\s*|\s*$/g,removeSpace:/\s*/g,splitSpace:/\s+/,trimComma:/\s*,\s*/g},VERSION:"1.0.0",schemaLocation:"http://www.opengis.net/wps/1.0.0 http://schemas.opengis.net/wps/1.0.0/wpsAll.xsd",schemaLocationAttr:function(){},write:function(e){var t;
return window.ActiveXObject?this.xmldom=t=new ActiveXObject("Microsoft.XMLDOM"):t=document.implementation.createDocument("","",null),e=this.writeNode("wps:Execute",e,t),this.setAttributeNS(e,this.namespaces.xsi,"xsi:schemaLocation",this.schemaLocation),OpenLayers.Format.XML.prototype.write.apply(this,[e])
},read:function(e){"string"==typeof e&&(e=OpenLayers.Format.XML.prototype.read.apply(this,[e])),e&&9==e.nodeType&&(e=e.documentElement);
var t={};return this.readNode(e,t),t},writers:{wps:{Execute:function(e){var t=this.createElementNSPlus("wps:Execute",{attributes:{version:this.VERSION,service:"WPS"}});
return this.writeNode("ows:Identifier",e.identifier,t),this.writeNode("wps:DataInputs",e.dataInputs,t),this.writeNode("wps:ResponseForm",e.responseForm,t),t
},ResponseForm:function(e){var t=this.createElementNSPlus("wps:ResponseForm",{});
return e.rawDataOutput&&this.writeNode("wps:RawDataOutput",e.rawDataOutput,t),e.responseDocument&&this.writeNode("wps:ResponseDocument",e.responseDocument,t),t
},ResponseDocument:function(e){var t=this.createElementNSPlus("wps:ResponseDocument",{attributes:{storeExecuteResponse:e.storeExecuteResponse,lineage:e.lineage,status:e.status}});
if(e.outputs)for(var i=0,r=e.outputs.length;r>i;i++)this.writeNode("wps:Output",e.outputs[i],t);
return t},Output:function(e){var t=this.createElementNSPlus("wps:Output",{attributes:{asReference:e.asReference,mimeType:e.mimeType,encoding:e.encoding,schema:e.schema}});
return this.writeNode("ows:Identifier",e.identifier,t),this.writeNode("ows:Title",e.title,t),this.writeNode("ows:Abstract",e["abstract"],t),t
},RawDataOutput:function(e){var t=this.createElementNSPlus("wps:RawDataOutput",{attributes:{mimeType:e.mimeType,encoding:e.encoding,schema:e.schema}});
return this.writeNode("ows:Identifier",e.identifier,t),t},DataInputs:function(e){for(var t=this.createElementNSPlus("wps:DataInputs",{}),i=0,r=e.length;r>i;++i)this.writeNode("wps:Input",e[i],t);
return t},Input:function(e){var t=this.createElementNSPlus("wps:Input",{});return this.writeNode("ows:Identifier",e.identifier,t),e.title&&this.writeNode("ows:Title",e.title,t),e.data&&this.writeNode("wps:Data",e.data,t),e.reference&&this.writeNode("wps:Reference",e.reference,t),e.boundingBoxData&&this.writeNode("wps:BoundingBoxData",e.boundingBoxData,t),t
},Data:function(e){var t=this.createElementNSPlus("wps:Data",{});return e.literalData?this.writeNode("wps:LiteralData",e.literalData,t):e.complexData?this.writeNode("wps:ComplexData",e.complexData,t):e.boundingBoxData&&this.writeNode("ows:BoundingBox",e.boundingBoxData,t),t
},LiteralData:function(e){return this.createElementNSPlus("wps:LiteralData",{attributes:{uom:e.uom},value:e.value})
},ComplexData:function(e){var t=this.createElementNSPlus("wps:ComplexData",{attributes:{mimeType:e.mimeType,encoding:e.encoding,schema:e.schema}}),i=e.value;
return"string"==typeof i?t.appendChild(this.getXMLDoc().createCDATASection(e.value)):t.appendChild(i),t
},Reference:function(e){var t=this.createElementNSPlus("wps:Reference",{attributes:{mimeType:e.mimeType,"xlink:href":e.href,method:e.method,encoding:e.encoding,schema:e.schema}});
return e.body&&this.writeNode("wps:Body",e.body,t),t},BoundingBoxData:function(e,t){this.writers.ows.BoundingBox.apply(this,[e,t,"wps:BoundingBoxData"])
},Body:function(e){var t=this.createElementNSPlus("wps:Body",{});return e.wcs?this.writeNode("wcs:GetCoverage",e.wcs,t):e.wfs?(this.featureType=e.wfs.featureType,this.version=e.wfs.version,this.writeNode("wfs:GetFeature",e.wfs,t)):this.writeNode("wps:Execute",e,t),t
}},wcs:OpenLayers.Format.WCSGetCoverage.prototype.writers.wcs,wfs:OpenLayers.Format.WFST.v1_1_0.prototype.writers.wfs,ogc:OpenLayers.Format.Filter.v1_1_0.prototype.writers.ogc,ows:OpenLayers.Format.OWSCommon.v1_1_0.prototype.writers.ows},readers:{wps:{ExecuteResponse:function(e,t){t.executeResponse={lang:e.getAttribute("lang"),statusLocation:e.getAttribute("statusLocation"),serviceInstance:e.getAttribute("serviceInstance"),service:e.getAttribute("service")},this.readChildNodes(e,t.executeResponse)
},Process:function(e,t){t.process={},this.readChildNodes(e,t.process)},Status:function(e,t){t.status={creationTime:e.getAttribute("creationTime")},this.readChildNodes(e,t.status)
},ProcessSucceeded:function(e,t){t.processSucceeded=!0},ProcessOutputs:function(e,t){t.processOutputs=[],this.readChildNodes(e,t.processOutputs)
},Output:function(e,t){var i={};this.readChildNodes(e,i),t.push(i)},Reference:function(e,t){t.reference={href:e.getAttribute("href"),mimeType:e.getAttribute("mimeType"),encoding:e.getAttribute("encoding"),schema:e.getAttribute("schema")}
},Data:function(e,t){t.data={},this.readChildNodes(e,t)},LiteralData:function(e,t){t.literalData={dataType:e.getAttribute("dataType"),uom:e.getAttribute("uom"),value:this.getChildValue(e)}
},ComplexData:function(e,t){if(t.complexData={mimeType:e.getAttribute("mimeType"),schema:e.getAttribute("schema"),encoding:e.getAttribute("encoding"),value:""},this.isSimpleContent(e)){var i;
for(i=e.firstChild;i;i=i.nextSibling)switch(i.nodeType){case 3:case 4:t.complexData.value+=i.nodeValue
}}else for(i=e.firstChild;i;i=i.nextSibling)1==i.nodeType&&(t.complexData.value=i)
},BoundingBox:function(e,t){t.boundingBoxData={dimensions:e.getAttribute("dimensions"),crs:e.getAttribute("crs")},this.readChildNodes(e,t.boundingBoxData)
}},ows:OpenLayers.Format.OWSCommon.v1_1_0.prototype.readers.ows},CLASS_NAME:"OpenLayers.Format.WPSExecute"}),OpenLayers.Layer.GeoRSS=OpenLayers.Class(OpenLayers.Layer.Markers,{location:null,features:null,formatOptions:null,selectedFeature:null,icon:null,popupSize:null,useFeedTitle:!0,initialize:function(e,t,i){OpenLayers.Layer.Markers.prototype.initialize.apply(this,[e,i]),this.location=t,this.features=[]
},destroy:function(){OpenLayers.Layer.Markers.prototype.destroy.apply(this,arguments),this.clearFeatures(),this.features=null
},loadRSS:function(){this.loaded||(this.events.triggerEvent("loadstart"),OpenLayers.Request.GET({url:this.location,success:this.parseData,scope:this}),this.loaded=!0)
},moveTo:function(){OpenLayers.Layer.Markers.prototype.moveTo.apply(this,arguments),this.visibility&&!this.loaded&&this.loadRSS()
},parseData:function(e){var t=e.responseXML;if(t&&t.documentElement||(t=OpenLayers.Format.XML.prototype.read(e.responseText)),this.useFeedTitle){e=null;
try{e=t.getElementsByTagNameNS("*","title")[0].firstChild.nodeValue}catch(i){e=t.getElementsByTagName("title")[0].firstChild.nodeValue
}e&&this.setName(e)}e={},OpenLayers.Util.extend(e,this.formatOptions),this.map&&!this.projection.equals(this.map.getProjectionObject())&&(e.externalProjection=this.projection,e.internalProjection=this.map.getProjectionObject()),t=new OpenLayers.Format.GeoRSS(e).read(t),e=0;
for(var r=t.length;r>e;e++){var s={},n=t[e];if(n.geometry){var a=n.attributes.title?n.attributes.title:"Untitled",o=n.attributes.description?n.attributes.description:"No description.",l=n.attributes.link?n.attributes.link:"",n=n.geometry.getBounds().getCenterLonLat();
if(s.icon=null==this.icon?OpenLayers.Marker.defaultIcon():this.icon.clone(),s.popupSize=this.popupSize?this.popupSize.clone():new OpenLayers.Size(250,120),a||o){s.title=a,s.description=o;
var h='<div class="olLayerGeoRSSClose">[x]</div>',h=h+'<div class="olLayerGeoRSSTitle">';
l&&(h+='<a class="link" href="'+l+'" target="_blank">'),h+=a,l&&(h+="</a>"),h+="</div>",h+='<div style="" class="olLayerGeoRSSDescription">',h+=o,h+="</div>",s.popupContentHTML=h
}n=new OpenLayers.Feature(this,n,s),this.features.push(n),s=n.createMarker(),s.events.register("click",n,this.markerClick),this.addMarker(s)
}}this.events.triggerEvent("loadend")},markerClick:function(e){var t=this==this.layer.selectedFeature;
this.layer.selectedFeature=t?null:this;for(var i=0,r=this.layer.map.popups.length;r>i;i++)this.layer.map.removePopup(this.layer.map.popups[i]);
t||(t=this.createPopup(),OpenLayers.Event.observe(t.div,"click",OpenLayers.Function.bind(function(){for(var e=0,t=this.layer.map.popups.length;t>e;e++)this.layer.map.removePopup(this.layer.map.popups[e])
},this)),this.layer.map.addPopup(t)),OpenLayers.Event.stop(e)},clearFeatures:function(){if(null!=this.features)for(;0<this.features.length;){var e=this.features[0];
OpenLayers.Util.removeItem(this.features,e),e.destroy()}},CLASS_NAME:"OpenLayers.Layer.GeoRSS"}),OpenLayers.Symbolizer.Point=OpenLayers.Class(OpenLayers.Symbolizer,{initialize:function(){OpenLayers.Symbolizer.prototype.initialize.apply(this,arguments)
},CLASS_NAME:"OpenLayers.Symbolizer.Point"}),OpenLayers.Symbolizer.Line=OpenLayers.Class(OpenLayers.Symbolizer,{initialize:function(){OpenLayers.Symbolizer.prototype.initialize.apply(this,arguments)
},CLASS_NAME:"OpenLayers.Symbolizer.Line"}),OpenLayers.Symbolizer.Text=OpenLayers.Class(OpenLayers.Symbolizer,{initialize:function(){OpenLayers.Symbolizer.prototype.initialize.apply(this,arguments)
},CLASS_NAME:"OpenLayers.Symbolizer.Text"}),OpenLayers.Format.SLD.v1=OpenLayers.Class(OpenLayers.Format.Filter.v1_0_0,{namespaces:{sld:"http://www.opengis.net/sld",ogc:"http://www.opengis.net/ogc",gml:"http://www.opengis.net/gml",xlink:"http://www.w3.org/1999/xlink",xsi:"http://www.w3.org/2001/XMLSchema-instance"},defaultPrefix:"sld",schemaLocation:null,multipleSymbolizers:!1,featureTypeCounter:null,defaultSymbolizer:{fillColor:"#808080",fillOpacity:1,strokeColor:"#000000",strokeOpacity:1,strokeWidth:1,strokeDashstyle:"solid",pointRadius:3,graphicName:"square"},read:function(e,t){t=OpenLayers.Util.applyDefaults(t,this.options);
var i={namedLayers:!0===t.namedLayersAsArray?[]:{}};return this.readChildNodes(e,i),i
},readers:OpenLayers.Util.applyDefaults({sld:{StyledLayerDescriptor:function(e,t){t.version=e.getAttribute("version"),this.readChildNodes(e,t)
},Name:function(e,t){t.name=this.getChildValue(e)},Title:function(e,t){t.title=this.getChildValue(e)
},Abstract:function(e,t){t.description=this.getChildValue(e)},NamedLayer:function(e,t){var i={userStyles:[],namedStyles:[]};
this.readChildNodes(e,i);for(var r=0,s=i.userStyles.length;s>r;++r)i.userStyles[r].layerName=i.name;
OpenLayers.Util.isArray(t.namedLayers)?t.namedLayers.push(i):t.namedLayers[i.name]=i
},NamedStyle:function(e,t){t.namedStyles.push(this.getChildName(e.firstChild))},UserStyle:function(e,t){var i={defaultsPerSymbolizer:!0,rules:[]};
this.featureTypeCounter=-1,this.readChildNodes(e,i),this.multipleSymbolizers?(delete i.defaultsPerSymbolizer,i=new OpenLayers.Style2(i)):i=new OpenLayers.Style(this.defaultSymbolizer,i),t.userStyles.push(i)
},IsDefault:function(e,t){"1"==this.getChildValue(e)&&(t.isDefault=!0)},FeatureTypeStyle:function(e,t){++this.featureTypeCounter;
var i={rules:this.multipleSymbolizers?t.rules:[]};this.readChildNodes(e,i),this.multipleSymbolizers||(t.rules=i.rules)
},Rule:function(e,t){var i;this.multipleSymbolizers&&(i={symbolizers:[]}),i=new OpenLayers.Rule(i),this.readChildNodes(e,i),t.rules.push(i)
},ElseFilter:function(e,t){t.elseFilter=!0},MinScaleDenominator:function(e,t){t.minScaleDenominator=parseFloat(this.getChildValue(e))
},MaxScaleDenominator:function(e,t){t.maxScaleDenominator=parseFloat(this.getChildValue(e))
},TextSymbolizer:function(e,t){var i={};this.readChildNodes(e,i),this.multipleSymbolizers?(i.zIndex=this.featureTypeCounter,t.symbolizers.push(new OpenLayers.Symbolizer.Text(i))):t.symbolizer.Text=OpenLayers.Util.applyDefaults(i,t.symbolizer.Text)
},LabelPlacement:function(e,t){this.readChildNodes(e,t)},PointPlacement:function(e,t){var i={};
this.readChildNodes(e,i),i.labelRotation=i.rotation,delete i.rotation;var r,s=t.labelAnchorPointX,n=t.labelAnchorPointY;
1/3>=s?r="l":s>1/3&&2/3>s?r="c":s>=2/3&&(r="r"),1/3>=n?r+="b":n>1/3&&2/3>n?r+="m":n>=2/3&&(r+="t"),i.labelAlign=r,OpenLayers.Util.applyDefaults(t,i)
},AnchorPoint:function(e,t){this.readChildNodes(e,t)},AnchorPointX:function(e,t){var i=this.readers.ogc._expression.call(this,e);
i&&(t.labelAnchorPointX=i)},AnchorPointY:function(e,t){var i=this.readers.ogc._expression.call(this,e);
i&&(t.labelAnchorPointY=i)},Displacement:function(e,t){this.readChildNodes(e,t)},DisplacementX:function(e,t){var i=this.readers.ogc._expression.call(this,e);
i&&(t.labelXOffset=i)},DisplacementY:function(e,t){var i=this.readers.ogc._expression.call(this,e);
i&&(t.labelYOffset=i)},LinePlacement:function(e,t){this.readChildNodes(e,t)},PerpendicularOffset:function(e,t){var i=this.readers.ogc._expression.call(this,e);
i&&(t.labelPerpendicularOffset=i)},Label:function(e,t){var i=this.readers.ogc._expression.call(this,e);
i&&(t.label=i)},Font:function(e,t){this.readChildNodes(e,t)},Halo:function(e,t){var i={};
this.readChildNodes(e,i),t.haloRadius=i.haloRadius,t.haloColor=i.fillColor,t.haloOpacity=i.fillOpacity
},Radius:function(e,t){var i=this.readers.ogc._expression.call(this,e);null!=i&&(t.haloRadius=i)
},RasterSymbolizer:function(e,t){var i={};this.readChildNodes(e,i),this.multipleSymbolizers?(i.zIndex=this.featureTypeCounter,t.symbolizers.push(new OpenLayers.Symbolizer.Raster(i))):t.symbolizer.Raster=OpenLayers.Util.applyDefaults(i,t.symbolizer.Raster)
},Geometry:function(e,t){t.geometry={},this.readChildNodes(e,t.geometry)},ColorMap:function(e,t){t.colorMap=[],this.readChildNodes(e,t.colorMap)
},ColorMapEntry:function(e,t){var i=e.getAttribute("quantity"),r=e.getAttribute("opacity");
t.push({color:e.getAttribute("color"),quantity:null!==i?parseFloat(i):void 0,label:e.getAttribute("label")||void 0,opacity:null!==r?parseFloat(r):void 0})
},LineSymbolizer:function(e,t){var i={};this.readChildNodes(e,i),this.multipleSymbolizers?(i.zIndex=this.featureTypeCounter,t.symbolizers.push(new OpenLayers.Symbolizer.Line(i))):t.symbolizer.Line=OpenLayers.Util.applyDefaults(i,t.symbolizer.Line)
},PolygonSymbolizer:function(e,t){var i={fill:!1,stroke:!1};this.multipleSymbolizers||(i=t.symbolizer.Polygon||i),this.readChildNodes(e,i),this.multipleSymbolizers?(i.zIndex=this.featureTypeCounter,t.symbolizers.push(new OpenLayers.Symbolizer.Polygon(i))):t.symbolizer.Polygon=i
},PointSymbolizer:function(e,t){var i={fill:!1,stroke:!1,graphic:!1};this.multipleSymbolizers||(i=t.symbolizer.Point||i),this.readChildNodes(e,i),this.multipleSymbolizers?(i.zIndex=this.featureTypeCounter,t.symbolizers.push(new OpenLayers.Symbolizer.Point(i))):t.symbolizer.Point=i
},Stroke:function(e,t){t.stroke=!0,this.readChildNodes(e,t)},Fill:function(e,t){t.fill=!0,this.readChildNodes(e,t)
},CssParameter:function(e,t){var i=e.getAttribute("name"),r=this.cssMap[i];t.label&&("fill"===i?r="fontColor":"fill-opacity"===i&&(r="fontOpacity")),r&&(i=this.readers.ogc._expression.call(this,e))&&(t[r]=i)
},Graphic:function(e,t){t.graphic=!0;var i={};this.readChildNodes(e,i);for(var r,s,n="stroke strokeColor strokeWidth strokeOpacity strokeLinecap fill fillColor fillOpacity graphicName rotation graphicFormat".split(" "),a=0,o=n.length;o>a;++a)r=n[a],s=i[r],void 0!=s&&(t[r]=s);
void 0!=i.opacity&&(t.graphicOpacity=i.opacity),void 0!=i.size&&(isNaN(i.size/2)?t.graphicWidth=i.size:t.pointRadius=i.size/2),void 0!=i.href&&(t.externalGraphic=i.href),void 0!=i.rotation&&(t.rotation=i.rotation)
},ExternalGraphic:function(e,t){this.readChildNodes(e,t)},Mark:function(e,t){this.readChildNodes(e,t)
},WellKnownName:function(e,t){t.graphicName=this.getChildValue(e)},Opacity:function(e,t){var i=this.readers.ogc._expression.call(this,e);
i&&(t.opacity=i)},Size:function(e,t){var i=this.readers.ogc._expression.call(this,e);
i&&(t.size=i)},Rotation:function(e,t){var i=this.readers.ogc._expression.call(this,e);
i&&(t.rotation=i)},OnlineResource:function(e,t){t.href=this.getAttributeNS(e,this.namespaces.xlink,"href")
},Format:function(e,t){t.graphicFormat=this.getChildValue(e)}}},OpenLayers.Format.Filter.v1_0_0.prototype.readers),cssMap:{stroke:"strokeColor","stroke-opacity":"strokeOpacity","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-dasharray":"strokeDashstyle",fill:"fillColor","fill-opacity":"fillOpacity","font-family":"fontFamily","font-size":"fontSize","font-weight":"fontWeight","font-style":"fontStyle"},getCssProperty:function(e){var t,i=null;
for(t in this.cssMap)if(this.cssMap[t]==e){i=t;break}return i},getGraphicFormat:function(e){var t,i;
for(i in this.graphicFormats)if(this.graphicFormats[i].test(e)){t=i;break}return t||this.defaultGraphicFormat
},defaultGraphicFormat:"image/png",graphicFormats:{"image/jpeg":/\.jpe?g$/i,"image/gif":/\.gif$/i,"image/png":/\.png$/i},write:function(e){return this.writers.sld.StyledLayerDescriptor.apply(this,[e])
},writers:OpenLayers.Util.applyDefaults({sld:{_OGCExpression:function(e,t){var i=this.createElementNSPlus(e),r="string"==typeof t?t.split("${"):[t];
i.appendChild(this.createTextNode(r[0]));for(var s,n,a=1,o=r.length;o>a;a++)s=r[a],n=s.indexOf("}"),n>0?(this.writeNode("ogc:PropertyName",{property:s.substring(0,n)},i),i.appendChild(this.createTextNode(s.substring(++n)))):i.appendChild(this.createTextNode("${"+s));
return i},StyledLayerDescriptor:function(e){var t=this.createElementNSPlus("sld:StyledLayerDescriptor",{attributes:{version:this.VERSION,"xsi:schemaLocation":this.schemaLocation}});
if(t.setAttribute("xmlns:ogc",this.namespaces.ogc),t.setAttribute("xmlns:gml",this.namespaces.gml),e.name&&this.writeNode("Name",e.name,t),e.title&&this.writeNode("Title",e.title,t),e.description&&this.writeNode("Abstract",e.description,t),OpenLayers.Util.isArray(e.namedLayers))for(var i=0,r=e.namedLayers.length;r>i;++i)this.writeNode("NamedLayer",e.namedLayers[i],t);
else for(i in e.namedLayers)this.writeNode("NamedLayer",e.namedLayers[i],t);return t
},Name:function(e){return this.createElementNSPlus("sld:Name",{value:e})},Title:function(e){return this.createElementNSPlus("sld:Title",{value:e})
},Abstract:function(e){return this.createElementNSPlus("sld:Abstract",{value:e})},NamedLayer:function(e){var t=this.createElementNSPlus("sld:NamedLayer");
if(this.writeNode("Name",e.name,t),e.namedStyles)for(var i=0,r=e.namedStyles.length;r>i;++i)this.writeNode("NamedStyle",e.namedStyles[i],t);
if(e.userStyles)for(i=0,r=e.userStyles.length;r>i;++i)this.writeNode("UserStyle",e.userStyles[i],t);
return t},NamedStyle:function(e){var t=this.createElementNSPlus("sld:NamedStyle");
return this.writeNode("Name",e,t),t},UserStyle:function(e){var t=this.createElementNSPlus("sld:UserStyle");
if(e.name&&this.writeNode("Name",e.name,t),e.title&&this.writeNode("Title",e.title,t),e.description&&this.writeNode("Abstract",e.description,t),e.isDefault&&this.writeNode("IsDefault",e.isDefault,t),this.multipleSymbolizers&&e.rules){for(var i,r,s,n,a,o={0:[]},l=[0],h=0,p=e.rules.length;p>h;++h)if(i=e.rules[h],i.symbolizers){r={};
for(var u=0,c=i.symbolizers.length;c>u;++u)s=i.symbolizers[u],n=s.zIndex,n in r||(a=i.clone(),a.symbolizers=[],r[n]=a),r[n].symbolizers.push(s.clone());
for(n in r)n in o||(l.push(n),o[n]=[]),o[n].push(r[n])}else o[0].push(i.clone());
for(l.sort(),h=0,p=l.length;p>h;++h)i=o[l[h]],0<i.length&&(a=e.clone(),a.rules=o[l[h]],this.writeNode("FeatureTypeStyle",a,t))
}else this.writeNode("FeatureTypeStyle",e,t);return t},IsDefault:function(e){return this.createElementNSPlus("sld:IsDefault",{value:e?"1":"0"})
},FeatureTypeStyle:function(e){for(var t=this.createElementNSPlus("sld:FeatureTypeStyle"),i=0,r=e.rules.length;r>i;++i)this.writeNode("Rule",e.rules[i],t);
return t},Rule:function(e){var t=this.createElementNSPlus("sld:Rule");e.name&&this.writeNode("Name",e.name,t),e.title&&this.writeNode("Title",e.title,t),e.description&&this.writeNode("Abstract",e.description,t),e.elseFilter?this.writeNode("ElseFilter",null,t):e.filter&&this.writeNode("ogc:Filter",e.filter,t),void 0!=e.minScaleDenominator&&this.writeNode("MinScaleDenominator",e.minScaleDenominator,t),void 0!=e.maxScaleDenominator&&this.writeNode("MaxScaleDenominator",e.maxScaleDenominator,t);
var i,r;if(this.multipleSymbolizers&&e.symbolizers)for(var s=0,n=e.symbolizers.length;n>s;++s)r=e.symbolizers[s],i=r.CLASS_NAME.split(".").pop(),this.writeNode(i+"Symbolizer",r,t);
else for(var n=OpenLayers.Style.SYMBOLIZER_PREFIXES,s=0,a=n.length;a>s;++s)i=n[s],(r=e.symbolizer[i])&&this.writeNode(i+"Symbolizer",r,t);
return t},ElseFilter:function(){return this.createElementNSPlus("sld:ElseFilter")
},MinScaleDenominator:function(e){return this.createElementNSPlus("sld:MinScaleDenominator",{value:e})
},MaxScaleDenominator:function(e){return this.createElementNSPlus("sld:MaxScaleDenominator",{value:e})
},LineSymbolizer:function(e){var t=this.createElementNSPlus("sld:LineSymbolizer");
return this.writeNode("Stroke",e,t),t},Stroke:function(e){var t=this.createElementNSPlus("sld:Stroke");
return void 0!=e.strokeColor&&this.writeNode("CssParameter",{symbolizer:e,key:"strokeColor"},t),void 0!=e.strokeOpacity&&this.writeNode("CssParameter",{symbolizer:e,key:"strokeOpacity"},t),void 0!=e.strokeWidth&&this.writeNode("CssParameter",{symbolizer:e,key:"strokeWidth"},t),void 0!=e.strokeDashstyle&&"solid"!==e.strokeDashstyle&&this.writeNode("CssParameter",{symbolizer:e,key:"strokeDashstyle"},t),void 0!=e.strokeLinecap&&this.writeNode("CssParameter",{symbolizer:e,key:"strokeLinecap"},t),t
},CssParameter:function(e){return this.createElementNSPlus("sld:CssParameter",{attributes:{name:this.getCssProperty(e.key)},value:e.symbolizer[e.key]})
},TextSymbolizer:function(e){var t=this.createElementNSPlus("sld:TextSymbolizer");
return null!=e.label&&this.writeNode("Label",e.label,t),null==e.fontFamily&&null==e.fontSize&&null==e.fontWeight&&null==e.fontStyle||this.writeNode("Font",e,t),null==e.labelAnchorPointX&&null==e.labelAnchorPointY&&null==e.labelAlign&&null==e.labelXOffset&&null==e.labelYOffset&&null==e.labelRotation&&null==e.labelPerpendicularOffset||this.writeNode("LabelPlacement",e,t),null==e.haloRadius&&null==e.haloColor&&null==e.haloOpacity||this.writeNode("Halo",e,t),null==e.fontColor&&null==e.fontOpacity||this.writeNode("Fill",{fillColor:e.fontColor,fillOpacity:e.fontOpacity},t),t
},LabelPlacement:function(e){var t=this.createElementNSPlus("sld:LabelPlacement");
return null==e.labelAnchorPointX&&null==e.labelAnchorPointY&&null==e.labelAlign&&null==e.labelXOffset&&null==e.labelYOffset&&null==e.labelRotation||null!=e.labelPerpendicularOffset||this.writeNode("PointPlacement",e,t),null!=e.labelPerpendicularOffset&&this.writeNode("LinePlacement",e,t),t
},LinePlacement:function(e){var t=this.createElementNSPlus("sld:LinePlacement");return this.writeNode("PerpendicularOffset",e.labelPerpendicularOffset,t),t
},PerpendicularOffset:function(e){return this.createElementNSPlus("sld:PerpendicularOffset",{value:e})
},PointPlacement:function(e){var t=this.createElementNSPlus("sld:PointPlacement");
return null==e.labelAnchorPointX&&null==e.labelAnchorPointY&&null==e.labelAlign||this.writeNode("AnchorPoint",e,t),null==e.labelXOffset&&null==e.labelYOffset||this.writeNode("Displacement",e,t),null!=e.labelRotation&&this.writeNode("Rotation",e.labelRotation,t),t
},AnchorPoint:function(e){var t=this.createElementNSPlus("sld:AnchorPoint"),i=e.labelAnchorPointX,r=e.labelAnchorPointY;
if(null!=i&&this.writeNode("AnchorPointX",i,t),null!=r&&this.writeNode("AnchorPointY",r,t),null==i&&null==r){var s=e.labelAlign.substr(0,1);
e=e.labelAlign.substr(1,1),"l"===s?i=0:"c"===s?i=.5:"r"===s&&(i=1),"b"===e?r=0:"m"===e?r=.5:"t"===e&&(r=1),this.writeNode("AnchorPointX",i,t),this.writeNode("AnchorPointY",r,t)
}return t},AnchorPointX:function(e){return this.createElementNSPlus("sld:AnchorPointX",{value:e})
},AnchorPointY:function(e){return this.createElementNSPlus("sld:AnchorPointY",{value:e})
},Displacement:function(e){var t=this.createElementNSPlus("sld:Displacement");return null!=e.labelXOffset&&this.writeNode("DisplacementX",e.labelXOffset,t),null!=e.labelYOffset&&this.writeNode("DisplacementY",e.labelYOffset,t),t
},DisplacementX:function(e){return this.createElementNSPlus("sld:DisplacementX",{value:e})
},DisplacementY:function(e){return this.createElementNSPlus("sld:DisplacementY",{value:e})
},Font:function(e){var t=this.createElementNSPlus("sld:Font");return e.fontFamily&&this.writeNode("CssParameter",{symbolizer:e,key:"fontFamily"},t),e.fontSize&&this.writeNode("CssParameter",{symbolizer:e,key:"fontSize"},t),e.fontWeight&&this.writeNode("CssParameter",{symbolizer:e,key:"fontWeight"},t),e.fontStyle&&this.writeNode("CssParameter",{symbolizer:e,key:"fontStyle"},t),t
},Label:function(e){return this.writers.sld._OGCExpression.call(this,"sld:Label",e)
},Halo:function(e){var t=this.createElementNSPlus("sld:Halo");return e.haloRadius&&this.writeNode("Radius",e.haloRadius,t),(e.haloColor||e.haloOpacity)&&this.writeNode("Fill",{fillColor:e.haloColor,fillOpacity:e.haloOpacity},t),t
},Radius:function(e){return this.createElementNSPlus("sld:Radius",{value:e})},RasterSymbolizer:function(e){var t=this.createElementNSPlus("sld:RasterSymbolizer");
return e.geometry&&this.writeNode("Geometry",e.geometry,t),e.opacity&&this.writeNode("Opacity",e.opacity,t),e.colorMap&&this.writeNode("ColorMap",e.colorMap,t),t
},Geometry:function(e){var t=this.createElementNSPlus("sld:Geometry");return e.property&&this.writeNode("ogc:PropertyName",e,t),t
},ColorMap:function(e){for(var t=this.createElementNSPlus("sld:ColorMap"),i=0,r=e.length;r>i;++i)this.writeNode("ColorMapEntry",e[i],t);
return t},ColorMapEntry:function(e){var t=this.createElementNSPlus("sld:ColorMapEntry");
return t.setAttribute("color",e.color),void 0!==e.opacity&&t.setAttribute("opacity",parseFloat(e.opacity)),void 0!==e.quantity&&t.setAttribute("quantity",parseFloat(e.quantity)),void 0!==e.label&&t.setAttribute("label",e.label),t
},PolygonSymbolizer:function(e){var t=this.createElementNSPlus("sld:PolygonSymbolizer");
return!1!==e.fill&&this.writeNode("Fill",e,t),!1!==e.stroke&&this.writeNode("Stroke",e,t),t
},Fill:function(e){var t=this.createElementNSPlus("sld:Fill");return e.fillColor&&this.writeNode("CssParameter",{symbolizer:e,key:"fillColor"},t),null!=e.fillOpacity&&this.writeNode("CssParameter",{symbolizer:e,key:"fillOpacity"},t),t
},PointSymbolizer:function(e){var t=this.createElementNSPlus("sld:PointSymbolizer");
return this.writeNode("Graphic",e,t),t},Graphic:function(e){var t=this.createElementNSPlus("sld:Graphic");
return void 0!=e.externalGraphic?this.writeNode("ExternalGraphic",e,t):this.writeNode("Mark",e,t),void 0!=e.graphicOpacity&&this.writeNode("Opacity",e.graphicOpacity,t),void 0!=e.pointRadius?this.writeNode("Size",2*e.pointRadius,t):void 0!=e.graphicWidth&&this.writeNode("Size",e.graphicWidth,t),void 0!=e.rotation&&this.writeNode("Rotation",e.rotation,t),t
},ExternalGraphic:function(e){var t=this.createElementNSPlus("sld:ExternalGraphic");
return this.writeNode("OnlineResource",e.externalGraphic,t),e=e.graphicFormat||this.getGraphicFormat(e.externalGraphic),this.writeNode("Format",e,t),t
},Mark:function(e){var t=this.createElementNSPlus("sld:Mark");return e.graphicName&&this.writeNode("WellKnownName",e.graphicName,t),!1!==e.fill&&this.writeNode("Fill",e,t),!1!==e.stroke&&this.writeNode("Stroke",e,t),t
},WellKnownName:function(e){return this.createElementNSPlus("sld:WellKnownName",{value:e})
},Opacity:function(e){return this.createElementNSPlus("sld:Opacity",{value:e})},Size:function(e){return this.writers.sld._OGCExpression.call(this,"sld:Size",e)
},Rotation:function(e){return this.createElementNSPlus("sld:Rotation",{value:e})},OnlineResource:function(e){return this.createElementNSPlus("sld:OnlineResource",{attributes:{"xlink:type":"simple","xlink:href":e}})
},Format:function(e){return this.createElementNSPlus("sld:Format",{value:e})}}},OpenLayers.Format.Filter.v1_0_0.prototype.writers),CLASS_NAME:"OpenLayers.Format.SLD.v1"}),OpenLayers.Layer.WMS=OpenLayers.Class(OpenLayers.Layer.Grid,{DEFAULT_PARAMS:{service:"WMS",version:"1.1.1",request:"GetMap",styles:"",format:"image/jpeg"},isBaseLayer:!0,encodeBBOX:!1,noMagic:!1,yx:{},initialize:function(e,t,i,r){var s=[];
i=OpenLayers.Util.upperCaseObject(i),1.3<=parseFloat(i.VERSION)&&!i.EXCEPTIONS&&(i.EXCEPTIONS="INIMAGE"),s.push(e,t,i,r),OpenLayers.Layer.Grid.prototype.initialize.apply(this,s),OpenLayers.Util.applyDefaults(this.params,OpenLayers.Util.upperCaseObject(this.DEFAULT_PARAMS)),!this.noMagic&&this.params.TRANSPARENT&&"true"==this.params.TRANSPARENT.toString().toLowerCase()&&(null!=r&&r.isBaseLayer||(this.isBaseLayer=!1),"image/jpeg"==this.params.FORMAT&&(this.params.FORMAT=OpenLayers.Util.alphaHack()?"image/gif":"image/png"))
},clone:function(e){return null==e&&(e=new OpenLayers.Layer.WMS(this.name,this.url,this.params,this.getOptions())),e=OpenLayers.Layer.Grid.prototype.clone.apply(this,[e])
},reverseAxisOrder:function(){var e=this.projection.getCode();return 1.3<=parseFloat(this.params.VERSION)&&!!(this.yx[e]||OpenLayers.Projection.defaults[e]&&OpenLayers.Projection.defaults[e].yx)
},getURL:function(e){e=this.adjustBounds(e);var t=this.getImageSize(),i={},r=this.reverseAxisOrder();
return i.BBOX=this.encodeBBOX?e.toBBOX(null,r):e.toArray(r),i.WIDTH=t.w,i.HEIGHT=t.h,this.getFullRequestString(i)
},mergeNewParams:function(e){return e=[OpenLayers.Util.upperCaseObject(e)],OpenLayers.Layer.Grid.prototype.mergeNewParams.apply(this,e)
},getFullRequestString:function(e){var t=this.map.getProjectionObject(),t=this.projection&&this.projection.equals(t)?this.projection.getCode():t.getCode(),t="none"==t?null:t;
return 1.3<=parseFloat(this.params.VERSION)?this.params.CRS=t:this.params.SRS=t,"boolean"==typeof this.params.TRANSPARENT&&(e.TRANSPARENT=this.params.TRANSPARENT?"TRUE":"FALSE"),OpenLayers.Layer.Grid.prototype.getFullRequestString.apply(this,arguments)
},CLASS_NAME:"OpenLayers.Layer.WMS"}),OpenLayers.Layer.KaMap=OpenLayers.Class(OpenLayers.Layer.Grid,{isBaseLayer:!0,DEFAULT_PARAMS:{i:"jpeg",map:""},initialize:function(){OpenLayers.Layer.Grid.prototype.initialize.apply(this,arguments),this.params=OpenLayers.Util.applyDefaults(this.params,this.DEFAULT_PARAMS)
},getURL:function(e){e=this.adjustBounds(e);var t=this.map.getResolution(),i=Math.round(1e4*this.map.getScale())/1e4,r=Math.round(e.left/t);
return e=-Math.round(e.top/t),this.getFullRequestString({t:e,l:r,s:i})},calculateGridLayout:function(e,t,i){return t=i*this.tileSize.w,i*=this.tileSize.h,{tilelon:t,tilelat:i,startcol:Math.floor(e.left/t)-this.buffer,startrow:Math.floor(e.top/i)+this.buffer}
},getTileBoundsForGridIndex:function(e,t){this.getTileOrigin();var i=this.gridLayout,r=i.tilelon,s=i.tilelat,n=(i.startcol+t)*r,i=(i.startrow-e)*s;
return new OpenLayers.Bounds(n,i,n+r,i+s)},clone:function(e){return null==e&&(e=new OpenLayers.Layer.KaMap(this.name,this.url,this.params,this.getOptions())),e=OpenLayers.Layer.Grid.prototype.clone.apply(this,[e]),null!=this.tileSize&&(e.tileSize=this.tileSize.clone()),e.grid=[],e
},getTileBounds:function(e){var t=this.getResolution(),i=t*this.tileSize.w,t=t*this.tileSize.h,r=this.getLonLatFromViewPortPx(e);
return e=i*Math.floor(r.lon/i),r=t*Math.floor(r.lat/t),new OpenLayers.Bounds(e,r,e+i,r+t)
},CLASS_NAME:"OpenLayers.Layer.KaMap"}),OpenLayers.Format.WMC.v1_1_0=OpenLayers.Class(OpenLayers.Format.WMC.v1,{VERSION:"1.1.0",schemaLocation:"http://www.opengis.net/context http://schemas.opengis.net/context/1.1.0/context.xsd",initialize:function(e){OpenLayers.Format.WMC.v1.prototype.initialize.apply(this,[e])
},read_sld_MinScaleDenominator:function(e,t){var i=parseFloat(this.getChildValue(t));
i>0&&(e.maxScale=i)},read_sld_MaxScaleDenominator:function(e,t){e.minScale=parseFloat(this.getChildValue(t))
},read_wmc_SRS:function(e,t){"srs"in e||(e.srs={}),e.srs[this.getChildValue(t)]=!0
},write_wmc_Layer:function(e){var t=OpenLayers.Format.WMC.v1.prototype.write_wmc_Layer.apply(this,[e]);
if(e.maxScale){var i=this.createElementNS(this.namespaces.sld,"sld:MinScaleDenominator");
i.appendChild(this.createTextNode(e.maxScale.toPrecision(16))),t.appendChild(i)}if(e.minScale&&(i=this.createElementNS(this.namespaces.sld,"sld:MaxScaleDenominator"),i.appendChild(this.createTextNode(e.minScale.toPrecision(16))),t.appendChild(i)),e.srs)for(var r in e.srs)t.appendChild(this.createElementDefaultNS("SRS",r));
return t.appendChild(this.write_wmc_FormatList(e)),t.appendChild(this.write_wmc_StyleList(e)),e.dimensions&&t.appendChild(this.write_wmc_DimensionList(e)),t.appendChild(this.write_wmc_LayerExtension(e)),t
},CLASS_NAME:"OpenLayers.Format.WMC.v1_1_0"}),OpenLayers.Format.XLS=OpenLayers.Class(OpenLayers.Format.XML.VersionedOGC,{defaultVersion:"1.1.0",stringifyOutput:!0,CLASS_NAME:"OpenLayers.Format.XLS"}),OpenLayers.Format.XLS.v1=OpenLayers.Class(OpenLayers.Format.XML,{namespaces:{xls:"http://www.opengis.net/xls",gml:"http://www.opengis.net/gml",xsi:"http://www.w3.org/2001/XMLSchema-instance"},regExes:{trimSpace:/^\s*|\s*$/g,removeSpace:/\s*/g,splitSpace:/\s+/,trimComma:/\s*,\s*/g},xy:!0,defaultPrefix:"xls",schemaLocation:null,read:function(e,t){OpenLayers.Util.applyDefaults(t,this.options);
var i={};return this.readChildNodes(e,i),i},readers:{xls:{XLS:function(e,t){t.version=e.getAttribute("version"),this.readChildNodes(e,t)
},Response:function(e,t){this.readChildNodes(e,t)},GeocodeResponse:function(e,t){t.responseLists=[],this.readChildNodes(e,t)
},GeocodeResponseList:function(e,t){var i={features:[],numberOfGeocodedAddresses:parseInt(e.getAttribute("numberOfGeocodedAddresses"))};
t.responseLists.push(i),this.readChildNodes(e,i)},GeocodedAddress:function(e,t){var i=new OpenLayers.Feature.Vector;
t.features.push(i),this.readChildNodes(e,i),i.geometry=i.components[0]},GeocodeMatchCode:function(e,t){t.attributes.matchCode={accuracy:parseFloat(e.getAttribute("accuracy")),matchType:e.getAttribute("matchType")}
},Address:function(e,t){var i={countryCode:e.getAttribute("countryCode"),addressee:e.getAttribute("addressee"),street:[],place:[]};
t.attributes.address=i,this.readChildNodes(e,i)},freeFormAddress:function(e,t){t.freeFormAddress=this.getChildValue(e)
},StreetAddress:function(e,t){this.readChildNodes(e,t)},Building:function(e,t){t.building={number:e.getAttribute("number"),subdivision:e.getAttribute("subdivision"),buildingName:e.getAttribute("buildingName")}
},Street:function(e,t){t.street.push(this.getChildValue(e))},Place:function(e,t){t.place[e.getAttribute("type")]=this.getChildValue(e)
},PostalCode:function(e,t){t.postalCode=this.getChildValue(e)}},gml:OpenLayers.Format.GML.v3.prototype.readers.gml},write:function(e){return this.writers.xls.XLS.apply(this,[e])
},writers:{xls:{XLS:function(e){var t=this.createElementNSPlus("xls:XLS",{attributes:{version:this.VERSION,"xsi:schemaLocation":this.schemaLocation}});
return this.writeNode("RequestHeader",e.header,t),this.writeNode("Request",e,t),t
},RequestHeader:function(){return this.createElementNSPlus("xls:RequestHeader")},Request:function(e){var t=this.createElementNSPlus("xls:Request",{attributes:{methodName:"GeocodeRequest",requestID:e.requestID||"",version:this.VERSION}});
return this.writeNode("GeocodeRequest",e.addresses,t),t},GeocodeRequest:function(e){for(var t=this.createElementNSPlus("xls:GeocodeRequest"),i=0,r=e.length;r>i;i++)this.writeNode("Address",e[i],t);
return t},Address:function(e){var t=this.createElementNSPlus("xls:Address",{attributes:{countryCode:e.countryCode}});
return e.freeFormAddress?this.writeNode("freeFormAddress",e.freeFormAddress,t):(e.street&&this.writeNode("StreetAddress",e,t),e.municipality&&this.writeNode("Municipality",e.municipality,t),e.countrySubdivision&&this.writeNode("CountrySubdivision",e.countrySubdivision,t),e.postalCode&&this.writeNode("PostalCode",e.postalCode,t)),t
},freeFormAddress:function(e){return this.createElementNSPlus("freeFormAddress",{value:e})
},StreetAddress:function(e){var t=this.createElementNSPlus("xls:StreetAddress");e.building&&this.writeNode(t,"Building",e.building),e=e.street,OpenLayers.Util.isArray(e)||(e=[e]);
for(var i=0,r=e.length;r>i;i++)this.writeNode("Street",e[i],t);return t},Building:function(e){return this.createElementNSPlus("xls:Building",{attributes:{number:e.number,subdivision:e.subdivision,buildingName:e.buildingName}})
},Street:function(e){return this.createElementNSPlus("xls:Street",{value:e})},Municipality:function(e){return this.createElementNSPlus("xls:Place",{attributes:{type:"Municipality"},value:e})
},CountrySubdivision:function(e){return this.createElementNSPlus("xls:Place",{attributes:{type:"CountrySubdivision"},value:e})
},PostalCode:function(e){return this.createElementNSPlus("xls:PostalCode",{value:e})
}}},CLASS_NAME:"OpenLayers.Format.XLS.v1"}),OpenLayers.Format.XLS.v1_1_0=OpenLayers.Class(OpenLayers.Format.XLS.v1,{VERSION:"1.1",schemaLocation:"http://www.opengis.net/xls http://schemas.opengis.net/ols/1.1.0/LocationUtilityService.xsd",CLASS_NAME:"OpenLayers.Format.XLS.v1_1_0"}),OpenLayers.Format.XLS.v1_1=OpenLayers.Format.XLS.v1_1_0,OpenLayers.Renderer.SVG=OpenLayers.Class(OpenLayers.Renderer.Elements,{xmlns:"http://www.w3.org/2000/svg",xlinkns:"http://www.w3.org/1999/xlink",MAX_PIXEL:15e3,translationParameters:null,symbolMetrics:null,initialize:function(){this.supported()&&(OpenLayers.Renderer.Elements.prototype.initialize.apply(this,arguments),this.translationParameters={x:0,y:0},this.symbolMetrics={})
},supported:function(){return document.implementation&&(document.implementation.hasFeature("org.w3c.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#SVG","1.1")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"))
},inValidRange:function(e,t,i){return e+=i?0:this.translationParameters.x,t+=i?0:this.translationParameters.y,e>=-this.MAX_PIXEL&&e<=this.MAX_PIXEL&&t>=-this.MAX_PIXEL&&t<=this.MAX_PIXEL
},setExtent:function(e,t){var i=OpenLayers.Renderer.Elements.prototype.setExtent.apply(this,arguments),r=this.getResolution(),s=-e.left/r,r=e.top/r;
return t?(this.left=s,this.top=r,this.rendererRoot.setAttributeNS(null,"viewBox","0 0 "+this.size.w+" "+this.size.h),this.translate(this.xOffset,0),!0):((s=this.translate(s-this.left+this.xOffset,r-this.top))||this.setExtent(e,!0),i&&s)
},translate:function(e,t){if(this.inValidRange(e,t,!0)){var i="";return(e||t)&&(i="translate("+e+","+t+")"),this.root.setAttributeNS(null,"transform",i),this.translationParameters={x:e,y:t},!0
}return!1},setSize:function(){OpenLayers.Renderer.prototype.setSize.apply(this,arguments),this.rendererRoot.setAttributeNS(null,"width",this.size.w),this.rendererRoot.setAttributeNS(null,"height",this.size.h)
},getNodeType:function(e,t){var i=null;switch(e.CLASS_NAME){case"OpenLayers.Geometry.Point":i=t.externalGraphic?"image":this.isComplexSymbol(t.graphicName)?"svg":"circle";
break;case"OpenLayers.Geometry.Rectangle":i="rect";break;case"OpenLayers.Geometry.LineString":i="polyline";
break;case"OpenLayers.Geometry.LinearRing":i="polygon";break;case"OpenLayers.Geometry.Polygon":case"OpenLayers.Geometry.Curve":i="path"
}return i},setStyle:function(e,t,i){t=t||e._style,i=i||e._options;var r=t.title||t.graphicTitle;
if(r){e.setAttributeNS(null,"title",r);var s=e.getElementsByTagName("title");0<s.length?s[0].firstChild.textContent=r:(s=this.nodeFactory(null,"title"),s.textContent=r,e.appendChild(s))
}var n,s=parseFloat(e.getAttributeNS(null,"r")),r=1;if("OpenLayers.Geometry.Point"==e._geometryClass&&s){if(e.style.visibility="",!1===t.graphic)e.style.visibility="hidden";
else if(t.externalGraphic){n=this.getPosition(e),t.graphicWidth&&t.graphicHeight&&e.setAttributeNS(null,"preserveAspectRatio","none");
var s=t.graphicWidth||t.graphicHeight,a=t.graphicHeight||t.graphicWidth,s=s?s:2*t.pointRadius,a=a?a:2*t.pointRadius,o=void 0!=t.graphicYOffset?t.graphicYOffset:-(.5*a),l=t.graphicOpacity||t.fillOpacity;
e.setAttributeNS(null,"x",(n.x+(void 0!=t.graphicXOffset?t.graphicXOffset:-(.5*s))).toFixed()),e.setAttributeNS(null,"y",(n.y+o).toFixed()),e.setAttributeNS(null,"width",s),e.setAttributeNS(null,"height",a),e.setAttributeNS(this.xlinkns,"xlink:href",t.externalGraphic),e.setAttributeNS(null,"style","opacity: "+l),e.onclick=OpenLayers.Event.preventDefault
}else if(this.isComplexSymbol(t.graphicName)){var s=3*t.pointRadius,a=2*s,h=this.importSymbol(t.graphicName);
n=this.getPosition(e),r=3*this.symbolMetrics[h.id][0]/a,o=e.parentNode,l=e.nextSibling,o&&o.removeChild(e),e.firstChild&&e.removeChild(e.firstChild),e.appendChild(h.firstChild.cloneNode(!0)),e.setAttributeNS(null,"viewBox",h.getAttributeNS(null,"viewBox")),e.setAttributeNS(null,"width",a),e.setAttributeNS(null,"height",a),e.setAttributeNS(null,"x",n.x-s),e.setAttributeNS(null,"y",n.y-s),l?o.insertBefore(e,l):o&&o.appendChild(e)
}else e.setAttributeNS(null,"r",t.pointRadius);s=t.rotation,void 0===s&&void 0===e._rotation||!n||(e._rotation=s,s|=0,"svg"!==e.nodeName?e.setAttributeNS(null,"transform","rotate("+s+" "+n.x+" "+n.y+")"):(n=this.symbolMetrics[h.id],e.firstChild.setAttributeNS(null,"transform","rotate("+s+" "+n[1]+" "+n[2]+")")))
}return i.isFilled?(e.setAttributeNS(null,"fill",t.fillColor),e.setAttributeNS(null,"fill-opacity",t.fillOpacity)):e.setAttributeNS(null,"fill","none"),i.isStroked?(e.setAttributeNS(null,"stroke",t.strokeColor),e.setAttributeNS(null,"stroke-opacity",t.strokeOpacity),e.setAttributeNS(null,"stroke-width",t.strokeWidth*r),e.setAttributeNS(null,"stroke-linecap",t.strokeLinecap||"round"),e.setAttributeNS(null,"stroke-linejoin","round"),t.strokeDashstyle&&e.setAttributeNS(null,"stroke-dasharray",this.dashStyle(t,r))):e.setAttributeNS(null,"stroke","none"),t.pointerEvents&&e.setAttributeNS(null,"pointer-events",t.pointerEvents),null!=t.cursor&&e.setAttributeNS(null,"cursor",t.cursor),e
},dashStyle:function(e,t){var i=e.strokeWidth*t,r=e.strokeDashstyle;switch(r){case"solid":return"none";
case"dot":return[1,4*i].join();case"dash":return[4*i,4*i].join();case"dashdot":return[4*i,4*i,1,4*i].join();
case"longdash":return[8*i,4*i].join();case"longdashdot":return[8*i,4*i,1,4*i].join();
default:return OpenLayers.String.trim(r).replace(/\s+/g,",")}},createNode:function(e,t){var i=document.createElementNS(this.xmlns,e);
return t&&i.setAttributeNS(null,"id",t),i},nodeTypeCompare:function(e,t){return t==e.nodeName
},createRenderRoot:function(){var e=this.nodeFactory(this.container.id+"_svgRoot","svg");
return e.style.display="block",e},createRoot:function(e){return this.nodeFactory(this.container.id+e,"g")
},createDefs:function(){var e=this.nodeFactory(this.container.id+"_defs","defs");
return this.rendererRoot.appendChild(e),e},drawPoint:function(e,t){return this.drawCircle(e,t,1)
},drawCircle:function(e,t,i){var r=this.getResolution(),s=(t.x-this.featureDx)/r+this.left;
return t=this.top-t.y/r,this.inValidRange(s,t)?(e.setAttributeNS(null,"cx",s),e.setAttributeNS(null,"cy",t),e.setAttributeNS(null,"r",i),e):!1
},drawLineString:function(e,t){var i=this.getComponentsString(t.components);return i.path?(e.setAttributeNS(null,"points",i.path),i.complete?e:null):!1
},drawLinearRing:function(e,t){var i=this.getComponentsString(t.components);return i.path?(e.setAttributeNS(null,"points",i.path),i.complete?e:null):!1
},drawPolygon:function(e,t){for(var i,r,s="",n=!0,a=!0,o=0,l=t.components.length;l>o;o++)s+=" M",i=this.getComponentsString(t.components[o].components," "),(r=i.path)?(s+=" "+r,a=i.complete&&a):n=!1;
return n?(e.setAttributeNS(null,"d",s+" z"),e.setAttributeNS(null,"fill-rule","evenodd"),a?e:null):!1
},drawRectangle:function(e,t){var i=this.getResolution(),r=(t.x-this.featureDx)/i+this.left,s=this.top-t.y/i;
return this.inValidRange(r,s)?(e.setAttributeNS(null,"x",r),e.setAttributeNS(null,"y",s),e.setAttributeNS(null,"width",t.width/i),e.setAttributeNS(null,"height",t.height/i),e):!1
},drawText:function(e,t,i){var r=!!t.labelOutlineWidth;if(r){var s=OpenLayers.Util.extend({},t);
s.fontColor=s.labelOutlineColor,s.fontStrokeColor=s.labelOutlineColor,s.fontStrokeWidth=t.labelOutlineWidth,t.labelOutlineOpacity&&(s.fontOpacity=t.labelOutlineOpacity),delete s.labelOutlineWidth,this.drawText(e,s,i)
}var n=this.getResolution(),s=(i.x-this.featureDx)/n+this.left,a=i.y/n-this.top,r=r?this.LABEL_OUTLINE_SUFFIX:this.LABEL_ID_SUFFIX,n=this.nodeFactory(e+r,"text");
n.setAttributeNS(null,"x",s),n.setAttributeNS(null,"y",-a),t.fontColor&&n.setAttributeNS(null,"fill",t.fontColor),t.fontStrokeColor&&n.setAttributeNS(null,"stroke",t.fontStrokeColor),t.fontStrokeWidth&&n.setAttributeNS(null,"stroke-width",t.fontStrokeWidth),t.fontOpacity&&n.setAttributeNS(null,"opacity",t.fontOpacity),t.fontFamily&&n.setAttributeNS(null,"font-family",t.fontFamily),t.fontSize&&n.setAttributeNS(null,"font-size",t.fontSize),t.fontWeight&&n.setAttributeNS(null,"font-weight",t.fontWeight),t.fontStyle&&n.setAttributeNS(null,"font-style",t.fontStyle),!0===t.labelSelect?(n.setAttributeNS(null,"pointer-events","visible"),n._featureId=e):n.setAttributeNS(null,"pointer-events","none"),a=t.labelAlign||OpenLayers.Renderer.defaultSymbolizer.labelAlign,n.setAttributeNS(null,"text-anchor",OpenLayers.Renderer.SVG.LABEL_ALIGN[a[0]]||"middle"),!0===OpenLayers.IS_GECKO&&n.setAttributeNS(null,"dominant-baseline",OpenLayers.Renderer.SVG.LABEL_ALIGN[a[1]]||"central");
for(var o=t.label.split("\n"),l=o.length;n.childNodes.length>l;)n.removeChild(n.lastChild);
for(var h=0;l>h;h++){var p=this.nodeFactory(e+r+"_tspan_"+h,"tspan");if(!0===t.labelSelect&&(p._featureId=e,p._geometry=i,p._geometryClass=i.CLASS_NAME),!1===OpenLayers.IS_GECKO&&p.setAttributeNS(null,"baseline-shift",OpenLayers.Renderer.SVG.LABEL_VSHIFT[a[1]]||"-35%"),p.setAttribute("x",s),0==h){var u=OpenLayers.Renderer.SVG.LABEL_VFACTOR[a[1]];
null==u&&(u=-.5),p.setAttribute("dy",u*(l-1)+"em")}else p.setAttribute("dy","1em");
p.textContent=""===o[h]?" ":o[h],p.parentNode||n.appendChild(p)}n.parentNode||this.textRoot.appendChild(n)
},getComponentsString:function(e,t){for(var i,r=[],s=!0,n=e.length,a=[],o=0;n>o;o++)i=e[o],r.push(i),(i=this.getShortString(i))?a.push(i):(o>0&&this.getShortString(e[o-1])&&a.push(this.clipLine(e[o],e[o-1])),n-1>o&&this.getShortString(e[o+1])&&a.push(this.clipLine(e[o],e[o+1])),s=!1);
return{path:a.join(t||","),complete:s}},clipLine:function(e,t){if(t.equals(e))return"";
var i,r=this.getResolution(),s=this.MAX_PIXEL-this.translationParameters.x,n=this.MAX_PIXEL-this.translationParameters.y,a=(t.x-this.featureDx)/r+this.left,o=this.top-t.y/r,l=(e.x-this.featureDx)/r+this.left,r=this.top-e.y/r;
return(-s>l||l>s)&&(i=(r-o)/(l-a),l=0>l?-s:s,r=o+(l-a)*i),(-n>r||r>n)&&(i=(l-a)/(r-o),r=0>r?-n:n,l=a+(r-o)*i),l+","+r
},getShortString:function(e){var t=this.getResolution(),i=(e.x-this.featureDx)/t+this.left;
return e=this.top-e.y/t,this.inValidRange(i,e)?i+","+e:!1},getPosition:function(e){return{x:parseFloat(e.getAttributeNS(null,"cx")),y:parseFloat(e.getAttributeNS(null,"cy"))}
},importSymbol:function(e){this.defs||(this.defs=this.createDefs());var t=this.container.id+"-"+e,i=document.getElementById(t);
if(null!=i)return i;var r=OpenLayers.Renderer.symbol[e];if(!r)throw Error(e+" is not a valid symbol name");
e=this.nodeFactory(t,"symbol");var s=this.nodeFactory(null,"polygon");e.appendChild(s);
for(var n,a,i=new OpenLayers.Bounds(Number.MAX_VALUE,Number.MAX_VALUE,0,0),o=[],l=0;l<r.length;l+=2)n=r[l],a=r[l+1],i.left=Math.min(i.left,n),i.bottom=Math.min(i.bottom,a),i.right=Math.max(i.right,n),i.top=Math.max(i.top,a),o.push(n,",",a);
return s.setAttributeNS(null,"points",o.join(" ")),r=i.getWidth(),s=i.getHeight(),e.setAttributeNS(null,"viewBox",[i.left-r,i.bottom-s,3*r,3*s].join(" ")),this.symbolMetrics[t]=[Math.max(r,s),i.getCenterLonLat().lon,i.getCenterLonLat().lat],this.defs.appendChild(e),e
},getFeatureIdFromEvent:function(e){var t=OpenLayers.Renderer.Elements.prototype.getFeatureIdFromEvent.apply(this,arguments);
return t||(t=e.target,t=t.parentNode&&t!=this.rendererRoot?t.parentNode._featureId:void 0),t
},CLASS_NAME:"OpenLayers.Renderer.SVG"}),OpenLayers.Renderer.SVG.LABEL_ALIGN={l:"start",r:"end",b:"bottom",t:"hanging"},OpenLayers.Renderer.SVG.LABEL_VSHIFT={t:"-70%",b:"0"},OpenLayers.Renderer.SVG.LABEL_VFACTOR={t:0,b:-1},OpenLayers.Renderer.SVG.preventDefault=function(e){OpenLayers.Event.preventDefault(e)
},OpenLayers.Format.SLD.v1_0_0=OpenLayers.Class(OpenLayers.Format.SLD.v1,{VERSION:"1.0.0",schemaLocation:"http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd",CLASS_NAME:"OpenLayers.Format.SLD.v1_0_0"}),OpenLayers.Format.OWSContext=OpenLayers.Class(OpenLayers.Format.Context,{defaultVersion:"0.3.1",getVersion:function(){var e=OpenLayers.Format.XML.VersionedOGC.prototype.getVersion.apply(this,arguments);
return"0.3.0"===e&&(e=this.defaultVersion),e},toContext:function(e){var t={};return"OpenLayers.Map"==e.CLASS_NAME&&(t.bounds=e.getExtent(),t.maxExtent=e.maxExtent,t.projection=e.projection,t.size=e.getSize(),t.layers=e.layers),t
},CLASS_NAME:"OpenLayers.Format.OWSContext"}),OpenLayers.Format.OWSContext.v0_3_1=OpenLayers.Class(OpenLayers.Format.XML,{namespaces:{owc:"http://www.opengis.net/ows-context",gml:"http://www.opengis.net/gml",kml:"http://www.opengis.net/kml/2.2",ogc:"http://www.opengis.net/ogc",ows:"http://www.opengis.net/ows",sld:"http://www.opengis.net/sld",xlink:"http://www.w3.org/1999/xlink",xsi:"http://www.w3.org/2001/XMLSchema-instance"},VERSION:"0.3.1",schemaLocation:"http://www.opengis.net/ows-context http://www.ogcnetwork.net/schemas/owc/0.3.1/owsContext.xsd",defaultPrefix:"owc",extractAttributes:!0,xy:!0,regExes:{trimSpace:/^\s*|\s*$/g,removeSpace:/\s*/g,splitSpace:/\s+/,trimComma:/\s*,\s*/g},featureNS:"http://mapserver.gis.umn.edu/mapserver",featureType:"vector",geometryName:"geometry",nestingLayerLookup:null,initialize:function(e){OpenLayers.Format.XML.prototype.initialize.apply(this,[e]),OpenLayers.Format.GML.v2.prototype.setGeometryTypes.call(this)
},setNestingPath:function(e){if(e.layersContext)for(var t=0,i=e.layersContext.length;i>t;t++){var r=e.layersContext[t],s=[],n=e.title||"";
e.metadata&&e.metadata.nestingPath&&(s=e.metadata.nestingPath.slice()),""!=n&&s.push(n),r.metadata.nestingPath=s,r.layersContext&&this.setNestingPath(r)
}},decomposeNestingPath:function(e){var t=[];if(OpenLayers.Util.isArray(e)){for(e=e.slice();0<e.length;)t.push(e.slice()),e.pop();
t.reverse()}return t},read:function(e){"string"==typeof e&&(e=OpenLayers.Format.XML.prototype.read.apply(this,[e])),e&&9==e.nodeType&&(e=e.documentElement);
var t={};return this.readNode(e,t),this.setNestingPath({layersContext:t.layersContext}),e=[],this.processLayer(e,t),delete t.layersContext,t.layersContext=e,t
},processLayer:function(e,t){if(t.layersContext)for(var i=0,r=t.layersContext.length;r>i;i++){var s=t.layersContext[i];
e.push(s),s.layersContext&&this.processLayer(e,s)}},write:function(e,t){this.nestingLayerLookup={},t=t||{},OpenLayers.Util.applyDefaults(t,e);
var i=this.writeNode("OWSContext",t);return this.nestingLayerLookup=null,this.setAttributeNS(i,this.namespaces.xsi,"xsi:schemaLocation",this.schemaLocation),OpenLayers.Format.XML.prototype.write.apply(this,[i])
},readers:{kml:{Document:function(e,t){t.features=new OpenLayers.Format.KML({kmlns:this.namespaces.kml,extractStyles:!0}).read(e)
}},owc:{OWSContext:function(e,t){this.readChildNodes(e,t)},General:function(e,t){this.readChildNodes(e,t)
},ResourceList:function(e,t){this.readChildNodes(e,t)},Layer:function(e,t){var i={metadata:{},visibility:"1"!=e.getAttribute("hidden"),queryable:"1"==e.getAttribute("queryable"),opacity:null!=e.getAttribute("opacity")?parseFloat(e.getAttribute("opacity")):null,name:e.getAttribute("name"),categoryLayer:null==e.getAttribute("name"),formats:[],styles:[]};
t.layersContext||(t.layersContext=[]),t.layersContext.push(i),this.readChildNodes(e,i)
},InlineGeometry:function(e,t){t.features=[];var i,r=this.getElementsByTagNameNS(e,this.namespaces.gml,"featureMember");
1<=r.length&&(i=r[0]),i&&i.firstChild&&(r=i.firstChild.nextSibling?i.firstChild.nextSibling:i.firstChild,this.setNamespace("feature",r.namespaceURI),this.featureType=r.localName||r.nodeName.split(":").pop(),this.readChildNodes(e,t))
},Server:function(e,t){(!t.service&&!t.version||t.service!=OpenLayers.Format.Context.serviceTypes.WMS)&&(t.service=e.getAttribute("service"),t.version=e.getAttribute("version"),this.readChildNodes(e,t))
},Name:function(e,t){t.name=this.getChildValue(e),this.readChildNodes(e,t)},Title:function(e,t){t.title=this.getChildValue(e),this.readChildNodes(e,t)
},StyleList:function(e,t){this.readChildNodes(e,t.styles)},Style:function(e,t){var i={};
t.push(i),this.readChildNodes(e,i)},LegendURL:function(e,t){var i={};t.legend=i,this.readChildNodes(e,i)
},OnlineResource:function(e,t){t.url=this.getAttributeNS(e,this.namespaces.xlink,"href"),this.readChildNodes(e,t)
}},ows:OpenLayers.Format.OWSCommon.v1_0_0.prototype.readers.ows,gml:OpenLayers.Format.GML.v2.prototype.readers.gml,sld:OpenLayers.Format.SLD.v1_0_0.prototype.readers.sld,feature:OpenLayers.Format.GML.v2.prototype.readers.feature},writers:{owc:{OWSContext:function(e){var t=this.createElementNSPlus("OWSContext",{attributes:{version:this.VERSION,id:e.id||OpenLayers.Util.createUniqueID("OpenLayers_OWSContext_")}});
return this.writeNode("General",e,t),this.writeNode("ResourceList",e,t),t},General:function(e){var t=this.createElementNSPlus("General");
return this.writeNode("ows:BoundingBox",e,t),this.writeNode("ows:Title",e.title||"OpenLayers OWSContext",t),t
},ResourceList:function(e){for(var t=this.createElementNSPlus("ResourceList"),i=0,r=e.layers.length;r>i;i++){var s=e.layers[i],n=this.decomposeNestingPath(s.metadata.nestingPath);
this.writeNode("_Layer",{layer:s,subPaths:n},t)}return t},Server:function(e){var t=this.createElementNSPlus("Server",{attributes:{version:e.version,service:e.service}});
return this.writeNode("OnlineResource",e,t),t},OnlineResource:function(e){return this.createElementNSPlus("OnlineResource",{attributes:{"xlink:href":e.url}})
},InlineGeometry:function(e){var t=this.createElementNSPlus("InlineGeometry"),i=e.getDataExtent();
null!==i&&this.writeNode("gml:boundedBy",i,t);for(var i=0,r=e.features.length;r>i;i++)this.writeNode("gml:featureMember",e.features[i],t);
return t},StyleList:function(e){for(var t=this.createElementNSPlus("StyleList"),i=0,r=e.length;r>i;i++)this.writeNode("Style",e[i],t);
return t},Style:function(e){var t=this.createElementNSPlus("Style");return this.writeNode("Name",e,t),this.writeNode("Title",e,t),e.legend&&this.writeNode("LegendURL",e,t),t
},Name:function(e){return this.createElementNSPlus("Name",{value:e.name})},Title:function(e){return this.createElementNSPlus("Title",{value:e.title})
},LegendURL:function(e){var t=this.createElementNSPlus("LegendURL");return this.writeNode("OnlineResource",e.legend,t),t
},_WMS:function(e){var t=this.createElementNSPlus("Layer",{attributes:{name:e.params.LAYERS,queryable:e.queryable?"1":"0",hidden:e.visibility?"0":"1",opacity:e.hasOwnProperty("opacity")?e.opacity:null}});
return this.writeNode("ows:Title",e.name,t),this.writeNode("ows:OutputFormat",e.params.FORMAT,t),this.writeNode("Server",{service:OpenLayers.Format.Context.serviceTypes.WMS,version:e.params.VERSION,url:e.url},t),e.metadata.styles&&0<e.metadata.styles.length&&this.writeNode("StyleList",e.metadata.styles,t),t
},_Layer:function(e){var t,i,r;return t=e.layer,i=e.subPaths,r=null,0<i.length?(t=i[0].join("/"),i=t.lastIndexOf("/"),r=this.nestingLayerLookup[t],i=i>0?t.substring(i+1,t.length):t,r||(r=this.createElementNSPlus("Layer"),this.writeNode("ows:Title",i,r),this.nestingLayerLookup[t]=r),e.subPaths.shift(),this.writeNode("_Layer",e,r)):(t instanceof OpenLayers.Layer.WMS?r=this.writeNode("_WMS",t):t instanceof OpenLayers.Layer.Vector&&(t.protocol instanceof OpenLayers.Protocol.WFS.v1?r=this.writeNode("_WFS",t):t.protocol instanceof OpenLayers.Protocol.HTTP?t.protocol.format instanceof OpenLayers.Format.GML?(t.protocol.format.version="2.1.2",r=this.writeNode("_GML",t)):t.protocol.format instanceof OpenLayers.Format.KML&&(t.protocol.format.version="2.2",r=this.writeNode("_KML",t)):(this.setNamespace("feature",this.featureNS),r=this.writeNode("_InlineGeometry",t))),t.options.maxScale&&this.writeNode("sld:MinScaleDenominator",t.options.maxScale,r),t.options.minScale&&this.writeNode("sld:MaxScaleDenominator",t.options.minScale,r),this.nestingLayerLookup[t.name]=r),r
},_WFS:function(e){var t=this.createElementNSPlus("Layer",{attributes:{name:e.protocol.featurePrefix+":"+e.protocol.featureType,hidden:e.visibility?"0":"1"}});
return this.writeNode("ows:Title",e.name,t),this.writeNode("Server",{service:OpenLayers.Format.Context.serviceTypes.WFS,version:e.protocol.version,url:e.protocol.url},t),t
},_InlineGeometry:function(e){var t=this.createElementNSPlus("Layer",{attributes:{name:this.featureType,hidden:e.visibility?"0":"1"}});
return this.writeNode("ows:Title",e.name,t),this.writeNode("InlineGeometry",e,t),t
},_GML:function(e){var t=this.createElementNSPlus("Layer");return this.writeNode("ows:Title",e.name,t),this.writeNode("Server",{service:OpenLayers.Format.Context.serviceTypes.GML,url:e.protocol.url,version:e.protocol.format.version},t),t
},_KML:function(e){var t=this.createElementNSPlus("Layer");return this.writeNode("ows:Title",e.name,t),this.writeNode("Server",{service:OpenLayers.Format.Context.serviceTypes.KML,version:e.protocol.format.version,url:e.protocol.url},t),t
}},gml:OpenLayers.Util.applyDefaults({boundedBy:function(e){var t=this.createElementNSPlus("gml:boundedBy");
return this.writeNode("gml:Box",e,t),t}},OpenLayers.Format.GML.v2.prototype.writers.gml),ows:OpenLayers.Format.OWSCommon.v1_0_0.prototype.writers.ows,sld:OpenLayers.Format.SLD.v1_0_0.prototype.writers.sld,feature:OpenLayers.Format.GML.v2.prototype.writers.feature},CLASS_NAME:"OpenLayers.Format.OWSContext.v0_3_1"}),OpenLayers.Popup=OpenLayers.Class({events:null,id:"",lonlat:null,div:null,contentSize:null,size:null,contentHTML:null,backgroundColor:"",opacity:"",border:"",contentDiv:null,groupDiv:null,closeDiv:null,autoSize:!1,minSize:null,maxSize:null,displayClass:"olPopup",contentDisplayClass:"olPopupContent",padding:0,disableFirefoxOverflowHack:!1,fixPadding:function(){"number"==typeof this.padding&&(this.padding=new OpenLayers.Bounds(this.padding,this.padding,this.padding,this.padding))
},panMapIfOutOfView:!1,keepInMap:!1,closeOnMove:!1,map:null,initialize:function(e,t,i,r,s,n){null==e&&(e=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_")),this.id=e,this.lonlat=t,this.contentSize=null!=i?i:new OpenLayers.Size(OpenLayers.Popup.WIDTH,OpenLayers.Popup.HEIGHT),null!=r&&(this.contentHTML=r),this.backgroundColor=OpenLayers.Popup.COLOR,this.opacity=OpenLayers.Popup.OPACITY,this.border=OpenLayers.Popup.BORDER,this.div=OpenLayers.Util.createDiv(this.id,null,null,null,null,null,"hidden"),this.div.className=this.displayClass,this.groupDiv=OpenLayers.Util.createDiv(this.id+"_GroupDiv",null,null,null,"relative",null,"hidden"),e=this.div.id+"_contentDiv",this.contentDiv=OpenLayers.Util.createDiv(e,null,this.contentSize.clone(),null,"relative"),this.contentDiv.className=this.contentDisplayClass,this.groupDiv.appendChild(this.contentDiv),this.div.appendChild(this.groupDiv),s&&this.addCloseBox(n),this.registerEvents()
},destroy:function(){this.border=this.opacity=this.backgroundColor=this.contentHTML=this.size=this.lonlat=this.id=null,this.closeOnMove&&this.map&&this.map.events.unregister("movestart",this,this.hide),this.events.destroy(),this.events=null,this.closeDiv&&(OpenLayers.Event.stopObservingElement(this.closeDiv),this.groupDiv.removeChild(this.closeDiv)),this.closeDiv=null,this.div.removeChild(this.groupDiv),this.groupDiv=null,null!=this.map&&this.map.removePopup(this),this.panMapIfOutOfView=this.padding=this.maxSize=this.minSize=this.autoSize=this.div=this.map=null
},draw:function(e){return null==e&&null!=this.lonlat&&null!=this.map&&(e=this.map.getLayerPxFromLonLat(this.lonlat)),this.closeOnMove&&this.map.events.register("movestart",this,this.hide),this.disableFirefoxOverflowHack||"firefox"!=OpenLayers.BROWSER_NAME||(this.map.events.register("movestart",this,function(){var e=document.defaultView.getComputedStyle(this.contentDiv,null).getPropertyValue("overflow");
"hidden"!=e&&(this.contentDiv._oldOverflow=e,this.contentDiv.style.overflow="hidden")
}),this.map.events.register("moveend",this,function(){var e=this.contentDiv._oldOverflow;
e&&(this.contentDiv.style.overflow=e,this.contentDiv._oldOverflow=null)})),this.moveTo(e),this.autoSize||this.size||this.setSize(this.contentSize),this.setBackgroundColor(),this.setOpacity(),this.setBorder(),this.setContentHTML(),this.panMapIfOutOfView&&this.panIntoView(),this.div
},updatePosition:function(){if(this.lonlat&&this.map){var e=this.map.getLayerPxFromLonLat(this.lonlat);
e&&this.moveTo(e)}},moveTo:function(e){null!=e&&null!=this.div&&(this.div.style.left=e.x+"px",this.div.style.top=e.y+"px")
},visible:function(){return OpenLayers.Element.visible(this.div)},toggle:function(){this.visible()?this.hide():this.show()
},show:function(){this.div.style.display="",this.panMapIfOutOfView&&this.panIntoView()
},hide:function(){this.div.style.display="none"},setSize:function(e){this.size=e.clone();
var t=this.getContentDivPadding(),i=t.left+t.right,r=t.top+t.bottom;if(this.fixPadding(),i+=this.padding.left+this.padding.right,r+=this.padding.top+this.padding.bottom,this.closeDiv)var s=parseInt(this.closeDiv.style.width),i=i+(s+t.right);
this.size.w+=i,this.size.h+=r,"msie"==OpenLayers.BROWSER_NAME&&(this.contentSize.w+=t.left+t.right,this.contentSize.h+=t.bottom+t.top),null!=this.div&&(this.div.style.width=this.size.w+"px",this.div.style.height=this.size.h+"px"),null!=this.contentDiv&&(this.contentDiv.style.width=e.w+"px",this.contentDiv.style.height=e.h+"px")
},updateSize:function(){var e="<div class='"+this.contentDisplayClass+"'>"+this.contentDiv.innerHTML+"</div>",t=this.map?this.map.div:document.body,i=OpenLayers.Util.getRenderedDimensions(e,null,{displayClass:this.displayClass,containerElement:t}),r=this.getSafeContentSize(i),s=null;
r.equals(i)?s=i:(i={w:r.w<i.w?r.w:null,h:r.h<i.h?r.h:null},i.w&&i.h?s=r:(e=OpenLayers.Util.getRenderedDimensions(e,i,{displayClass:this.contentDisplayClass,containerElement:t}),"hidden"!=OpenLayers.Element.getStyle(this.contentDiv,"overflow")&&e.equals(r)&&(r=OpenLayers.Util.getScrollbarWidth(),i.w?e.h+=r:e.w+=r),s=this.getSafeContentSize(e))),this.setSize(s)
},setBackgroundColor:function(e){void 0!=e&&(this.backgroundColor=e),null!=this.div&&(this.div.style.backgroundColor=this.backgroundColor)
},setOpacity:function(e){void 0!=e&&(this.opacity=e),null!=this.div&&(this.div.style.opacity=this.opacity,this.div.style.filter="alpha(opacity="+100*this.opacity+")")
},setBorder:function(e){void 0!=e&&(this.border=e),null!=this.div&&(this.div.style.border=this.border)
},setContentHTML:function(e){null!=e&&(this.contentHTML=e),null!=this.contentDiv&&null!=this.contentHTML&&this.contentHTML!=this.contentDiv.innerHTML&&(this.contentDiv.innerHTML=this.contentHTML,this.autoSize&&(this.registerImageListeners(),this.updateSize()))
},registerImageListeners:function(){for(var e=function(){null!==this.popup.id&&(this.popup.updateSize(),this.popup.visible()&&this.popup.panMapIfOutOfView&&this.popup.panIntoView(),OpenLayers.Event.stopObserving(this.img,"load",this.img._onImgLoad))
},t=this.contentDiv.getElementsByTagName("img"),i=0,r=t.length;r>i;i++){var s=t[i];
(0==s.width||0==s.height)&&(s._onImgLoad=OpenLayers.Function.bind(e,{popup:this,img:s}),OpenLayers.Event.observe(s,"load",s._onImgLoad))
}},getSafeContentSize:function(e){e=e.clone();var t=this.getContentDivPadding(),i=t.left+t.right,r=t.top+t.bottom;
if(this.fixPadding(),i+=this.padding.left+this.padding.right,r+=this.padding.top+this.padding.bottom,this.closeDiv)var s=parseInt(this.closeDiv.style.width),i=i+(s+t.right);
if(this.minSize&&(e.w=Math.max(e.w,this.minSize.w-i),e.h=Math.max(e.h,this.minSize.h-r)),this.maxSize&&(e.w=Math.min(e.w,this.maxSize.w-i),e.h=Math.min(e.h,this.maxSize.h-r)),this.map&&this.map.size){if(s=t=0,this.keepInMap&&!this.panMapIfOutOfView)switch(s=this.map.getPixelFromLonLat(this.lonlat),this.relativePosition){case"tr":t=s.x,s=this.map.size.h-s.y;
break;case"tl":t=this.map.size.w-s.x,s=this.map.size.h-s.y;break;case"bl":t=this.map.size.w-s.x,s=s.y;
break;case"br":t=s.x,s=s.y;break;default:t=s.x,s=this.map.size.h-s.y}r=this.map.size.h-this.map.paddingForPopups.top-this.map.paddingForPopups.bottom-r-s,e.w=Math.min(e.w,this.map.size.w-this.map.paddingForPopups.left-this.map.paddingForPopups.right-i-t),e.h=Math.min(e.h,r)
}return e},getContentDivPadding:function(){var e=this._contentDivPadding;return e||(null==this.div.parentNode&&(this.div.style.display="none",document.body.appendChild(this.div)),this._contentDivPadding=e=new OpenLayers.Bounds(OpenLayers.Element.getStyle(this.contentDiv,"padding-left"),OpenLayers.Element.getStyle(this.contentDiv,"padding-bottom"),OpenLayers.Element.getStyle(this.contentDiv,"padding-right"),OpenLayers.Element.getStyle(this.contentDiv,"padding-top")),this.div.parentNode==document.body&&(document.body.removeChild(this.div),this.div.style.display="")),e
},addCloseBox:function(e){this.closeDiv=OpenLayers.Util.createDiv(this.id+"_close",null,{w:17,h:17}),this.closeDiv.className="olPopupCloseBox";
var t=this.getContentDivPadding();this.closeDiv.style.right=t.right+"px",this.closeDiv.style.top=t.top+"px",this.groupDiv.appendChild(this.closeDiv),e=e||function(e){this.hide(),OpenLayers.Event.stop(e)
},OpenLayers.Event.observe(this.closeDiv,"touchend",OpenLayers.Function.bindAsEventListener(e,this)),OpenLayers.Event.observe(this.closeDiv,"click",OpenLayers.Function.bindAsEventListener(e,this))
},panIntoView:function(){var e=this.map.getSize(),t=this.map.getViewPortPxFromLayerPx(new OpenLayers.Pixel(parseInt(this.div.style.left),parseInt(this.div.style.top))),i=t.clone();
t.x<this.map.paddingForPopups.left?i.x=this.map.paddingForPopups.left:t.x+this.size.w>e.w-this.map.paddingForPopups.right&&(i.x=e.w-this.map.paddingForPopups.right-this.size.w),t.y<this.map.paddingForPopups.top?i.y=this.map.paddingForPopups.top:t.y+this.size.h>e.h-this.map.paddingForPopups.bottom&&(i.y=e.h-this.map.paddingForPopups.bottom-this.size.h),this.map.pan(t.x-i.x,t.y-i.y)
},registerEvents:function(){this.events=new OpenLayers.Events(this,this.div,null,!0),this.events.on({mousedown:this.onmousedown,mousemove:this.onmousemove,mouseup:this.onmouseup,click:this.onclick,mouseout:this.onmouseout,dblclick:this.ondblclick,touchstart:function(e){OpenLayers.Event.stop(e,!0)
},scope:this})},onmousedown:function(e){this.mousedown=!0,OpenLayers.Event.stop(e,!0)
},onmousemove:function(e){this.mousedown&&OpenLayers.Event.stop(e,!0)},onmouseup:function(e){this.mousedown&&(this.mousedown=!1,OpenLayers.Event.stop(e,!0))
},onclick:function(e){OpenLayers.Event.stop(e,!0)},onmouseout:function(){this.mousedown=!1
},ondblclick:function(e){OpenLayers.Event.stop(e,!0)},CLASS_NAME:"OpenLayers.Popup"}),OpenLayers.Popup.WIDTH=200,OpenLayers.Popup.HEIGHT=200,OpenLayers.Popup.COLOR="white",OpenLayers.Popup.OPACITY=1,OpenLayers.Popup.BORDER="0px",OpenLayers.Control.ScaleLine=OpenLayers.Class(OpenLayers.Control,{maxWidth:100,topOutUnits:"km",topInUnits:"m",bottomOutUnits:"mi",bottomInUnits:"ft",eTop:null,eBottom:null,geodesic:!1,draw:function(){return OpenLayers.Control.prototype.draw.apply(this,arguments),this.eTop||(this.eTop=document.createElement("div"),this.eTop.className=this.displayClass+"Top",this.div.appendChild(this.eTop),this.eTop.style.visibility=""==this.topOutUnits||""==this.topInUnits?"hidden":"visible",this.eBottom=document.createElement("div"),this.eBottom.className=this.displayClass+"Bottom",this.div.appendChild(this.eBottom),this.eBottom.style.visibility=""==this.bottomOutUnits||""==this.bottomInUnits?"hidden":"visible"),this.map.events.register("moveend",this,this.update),this.update(),this.div
},getBarLen:function(e){var t=parseInt(Math.log(e)/Math.log(10)),t=Math.pow(10,t);
return e=parseInt(e/t),(e>5?5:e>2?2:1)*t},update:function(){var e=this.map.getResolution();
if(e){var t=this.map.getUnits(),i=OpenLayers.INCHES_PER_UNIT,r=this.maxWidth*e*i[t],s=1;
!0===this.geodesic&&(s=(this.map.getGeodesicPixelSize().w||1e-6)*this.maxWidth/(r/i.km),r*=s);
var n,a;r>1e5?(n=this.topOutUnits,a=this.bottomOutUnits):(n=this.topInUnits,a=this.bottomInUnits);
var o=r/i[n],l=r/i[a],r=this.getBarLen(o),h=this.getBarLen(l),o=r/i[t]*i[n],l=h/i[t]*i[a],t=o/e/s,e=l/e/s;
"visible"==this.eBottom.style.visibility&&(this.eBottom.style.width=Math.round(e)+"px",this.eBottom.innerHTML=h+" "+a),"visible"==this.eTop.style.visibility&&(this.eTop.style.width=Math.round(t)+"px",this.eTop.innerHTML=r+" "+n)
}},CLASS_NAME:"OpenLayers.Control.ScaleLine"}),OpenLayers.Icon=OpenLayers.Class({url:null,size:null,offset:null,calculateOffset:null,imageDiv:null,px:null,initialize:function(e,t,i,r){this.url=e,this.size=t||{w:20,h:20},this.offset=i||{x:-(this.size.w/2),y:-(this.size.h/2)},this.calculateOffset=r,e=OpenLayers.Util.createUniqueID("OL_Icon_"),this.imageDiv=OpenLayers.Util.createAlphaImageDiv(e)
},destroy:function(){this.erase(),OpenLayers.Event.stopObservingElement(this.imageDiv.firstChild),this.imageDiv.innerHTML="",this.imageDiv=null
},clone:function(){return new OpenLayers.Icon(this.url,this.size,this.offset,this.calculateOffset)
},setSize:function(e){null!=e&&(this.size=e),this.draw()},setUrl:function(e){null!=e&&(this.url=e),this.draw()
},draw:function(e){return OpenLayers.Util.modifyAlphaImageDiv(this.imageDiv,null,null,this.size,this.url,"absolute"),this.moveTo(e),this.imageDiv
},erase:function(){null!=this.imageDiv&&null!=this.imageDiv.parentNode&&OpenLayers.Element.remove(this.imageDiv)
},setOpacity:function(e){OpenLayers.Util.modifyAlphaImageDiv(this.imageDiv,null,null,null,null,null,null,null,e)
},moveTo:function(e){null!=e&&(this.px=e),null!=this.imageDiv&&(null==this.px?this.display(!1):(this.calculateOffset&&(this.offset=this.calculateOffset(this.size)),OpenLayers.Util.modifyAlphaImageDiv(this.imageDiv,null,{x:this.px.x+this.offset.x,y:this.px.y+this.offset.y})))
},display:function(e){this.imageDiv.style.display=e?"":"none"},isDrawn:function(){return this.imageDiv&&this.imageDiv.parentNode&&11!=this.imageDiv.parentNode.nodeType
},CLASS_NAME:"OpenLayers.Icon"}),OpenLayers.Marker=OpenLayers.Class({icon:null,lonlat:null,events:null,map:null,initialize:function(e,t){this.lonlat=e;
var i=t?t:OpenLayers.Marker.defaultIcon();null==this.icon?this.icon=i:(this.icon.url=i.url,this.icon.size=i.size,this.icon.offset=i.offset,this.icon.calculateOffset=i.calculateOffset),this.events=new OpenLayers.Events(this,this.icon.imageDiv)
},destroy:function(){this.erase(),this.map=null,this.events.destroy(),this.events=null,null!=this.icon&&(this.icon.destroy(),this.icon=null)
},draw:function(e){return this.icon.draw(e)},erase:function(){null!=this.icon&&this.icon.erase()
},moveTo:function(e){null!=e&&null!=this.icon&&this.icon.moveTo(e),this.lonlat=this.map.getLonLatFromLayerPx(e)
},isDrawn:function(){return this.icon&&this.icon.isDrawn()},onScreen:function(){var e=!1;
return this.map&&(e=this.map.getExtent().containsLonLat(this.lonlat)),e},inflate:function(e){this.icon&&this.icon.setSize({w:this.icon.size.w*e,h:this.icon.size.h*e})
},setOpacity:function(e){this.icon.setOpacity(e)},setUrl:function(e){this.icon.setUrl(e)
},display:function(e){this.icon.display(e)},CLASS_NAME:"OpenLayers.Marker"}),OpenLayers.Marker.defaultIcon=function(){return new OpenLayers.Icon(OpenLayers.Util.getImageLocation("marker.png"),{w:21,h:25},{x:-10.5,y:-25})
},OpenLayers.Layer.TileCache=OpenLayers.Class(OpenLayers.Layer.Grid,{isBaseLayer:!0,format:"image/png",serverResolutions:null,initialize:function(e,t,i,r){this.layername=i,OpenLayers.Layer.Grid.prototype.initialize.apply(this,[e,t,{},r]),this.extension=this.format.split("/")[1].toLowerCase(),this.extension="jpg"==this.extension?"jpeg":this.extension
},clone:function(e){return null==e&&(e=new OpenLayers.Layer.TileCache(this.name,this.url,this.layername,this.getOptions())),e=OpenLayers.Layer.Grid.prototype.clone.apply(this,[e])
},getURL:function(e){var t=this.getServerResolution(),i=this.maxExtent,r=this.tileSize,s=Math.round((e.left-i.left)/(t*r.w));
return e=Math.round((e.bottom-i.bottom)/(t*r.h)),t=null!=this.serverResolutions?OpenLayers.Util.indexOf(this.serverResolutions,t):this.map.getZoom(),s=[this.layername,OpenLayers.Number.zeroPad(t,2),OpenLayers.Number.zeroPad(parseInt(s/1e6),3),OpenLayers.Number.zeroPad(parseInt(s/1e3)%1e3,3),OpenLayers.Number.zeroPad(parseInt(s)%1e3,3),OpenLayers.Number.zeroPad(parseInt(e/1e6),3),OpenLayers.Number.zeroPad(parseInt(e/1e3)%1e3,3),OpenLayers.Number.zeroPad(parseInt(e)%1e3,3)+"."+this.extension].join("/"),t=this.url,OpenLayers.Util.isArray(t)&&(t=this.selectUrl(s,t)),t="/"==t.charAt(t.length-1)?t:t+"/",t+s
},CLASS_NAME:"OpenLayers.Layer.TileCache"}),OpenLayers.Strategy.Paging=OpenLayers.Class(OpenLayers.Strategy,{features:null,length:10,num:null,paging:!1,activate:function(){var e=OpenLayers.Strategy.prototype.activate.call(this);
return e&&this.layer.events.on({beforefeaturesadded:this.cacheFeatures,scope:this}),e
},deactivate:function(){var e=OpenLayers.Strategy.prototype.deactivate.call(this);
return e&&(this.clearCache(),this.layer.events.un({beforefeaturesadded:this.cacheFeatures,scope:this})),e
},cacheFeatures:function(e){this.paging||(this.clearCache(),this.features=e.features,this.pageNext(e))
},clearCache:function(){if(this.features)for(var e=0;e<this.features.length;++e)this.features[e].destroy();
this.num=this.features=null},pageCount:function(){return Math.ceil((this.features?this.features.length:0)/this.length)
},pageNum:function(){return this.num},pageLength:function(e){return e&&e>0&&(this.length=e),this.length
},pageNext:function(e){var t=!1;return this.features&&(null===this.num&&(this.num=-1),t=this.page((this.num+1)*this.length,e)),t
},pagePrevious:function(){var e=!1;return this.features&&(null===this.num&&(this.num=this.pageCount()),e=this.page((this.num-1)*this.length)),e
},page:function(e,t){var i=!1;if(this.features&&e>=0&&e<this.features.length){var r=Math.floor(e/this.length);
r!=this.num&&(this.paging=!0,i=this.features.slice(e,e+this.length),this.layer.removeFeatures(this.layer.features),this.num=r,t&&t.features?t.features=i:this.layer.addFeatures(i),this.paging=!1,i=!0)
}return i},CLASS_NAME:"OpenLayers.Strategy.Paging"}),OpenLayers.Control.DragFeature=OpenLayers.Class(OpenLayers.Control,{geometryTypes:null,onStart:function(){},onDrag:function(){},onComplete:function(){},onEnter:function(){},onLeave:function(){},documentDrag:!1,layer:null,feature:null,dragCallbacks:{},featureCallbacks:{},lastPixel:null,initialize:function(e,t){OpenLayers.Control.prototype.initialize.apply(this,[t]),this.layer=e,this.handlers={drag:new OpenLayers.Handler.Drag(this,OpenLayers.Util.extend({down:this.downFeature,move:this.moveFeature,up:this.upFeature,out:this.cancel,done:this.doneDragging},this.dragCallbacks),{documentDrag:this.documentDrag}),feature:new OpenLayers.Handler.Feature(this,this.layer,OpenLayers.Util.extend({click:this.clickFeature,clickout:this.clickoutFeature,over:this.overFeature,out:this.outFeature},this.featureCallbacks),{geometryTypes:this.geometryTypes})}
},clickFeature:function(e){this.handlers.feature.touch&&!this.over&&this.overFeature(e)&&(this.handlers.drag.dragstart(this.handlers.feature.evt),this.handlers.drag.stopDown=!1)
},clickoutFeature:function(e){this.handlers.feature.touch&&this.over&&(this.outFeature(e),this.handlers.drag.stopDown=!0)
},destroy:function(){this.layer=null,OpenLayers.Control.prototype.destroy.apply(this,[])
},activate:function(){return this.handlers.feature.activate()&&OpenLayers.Control.prototype.activate.apply(this,arguments)
},deactivate:function(){return this.handlers.drag.deactivate(),this.handlers.feature.deactivate(),this.feature=null,this.dragging=!1,this.lastPixel=null,OpenLayers.Element.removeClass(this.map.viewPortDiv,this.displayClass+"Over"),OpenLayers.Control.prototype.deactivate.apply(this,arguments)
},overFeature:function(e){var t=!1;return this.handlers.drag.dragging?this.over=this.feature.id==e.id?!0:!1:(this.feature=e,this.handlers.drag.activate(),this.over=t=!0,OpenLayers.Element.addClass(this.map.viewPortDiv,this.displayClass+"Over"),this.onEnter(e)),t
},downFeature:function(e){this.lastPixel=e,this.onStart(this.feature,e)},moveFeature:function(e){var t=this.map.getResolution();
this.feature.geometry.move(t*(e.x-this.lastPixel.x),t*(this.lastPixel.y-e.y)),this.layer.drawFeature(this.feature),this.lastPixel=e,this.onDrag(this.feature,e)
},upFeature:function(){this.over||this.handlers.drag.deactivate()},doneDragging:function(e){this.onComplete(this.feature,e)
},outFeature:function(e){this.handlers.drag.dragging?this.feature.id==e.id&&(this.over=!1):(this.over=!1,this.handlers.drag.deactivate(),OpenLayers.Element.removeClass(this.map.viewPortDiv,this.displayClass+"Over"),this.onLeave(e),this.feature=null)
},cancel:function(){this.handlers.drag.deactivate(),this.over=!1},setMap:function(e){this.handlers.drag.setMap(e),this.handlers.feature.setMap(e),OpenLayers.Control.prototype.setMap.apply(this,arguments)
},CLASS_NAME:"OpenLayers.Control.DragFeature"}),OpenLayers.Control.TransformFeature=OpenLayers.Class(OpenLayers.Control,{geometryTypes:null,layer:null,preserveAspectRatio:!1,rotate:!0,feature:null,renderIntent:"temporary",rotationHandleSymbolizer:null,box:null,center:null,scale:1,ratio:1,rotation:0,handles:null,rotationHandles:null,dragControl:null,irregular:!1,initialize:function(e,t){OpenLayers.Control.prototype.initialize.apply(this,[t]),this.layer=e,this.rotationHandleSymbolizer||(this.rotationHandleSymbolizer={stroke:!1,pointRadius:10,fillOpacity:0,cursor:"pointer"}),this.createBox(),this.createControl()
},activate:function(){var e=!1;return OpenLayers.Control.prototype.activate.apply(this,arguments)&&(this.dragControl.activate(),this.layer.addFeatures([this.box]),this.rotate&&this.layer.addFeatures(this.rotationHandles),this.layer.addFeatures(this.handles),e=!0),e
},deactivate:function(){var e=!1;return OpenLayers.Control.prototype.deactivate.apply(this,arguments)&&(this.layer.removeFeatures(this.handles),this.rotate&&this.layer.removeFeatures(this.rotationHandles),this.layer.removeFeatures([this.box]),this.dragControl.deactivate(),e=!0),e
},setMap:function(e){this.dragControl.setMap(e),OpenLayers.Control.prototype.setMap.apply(this,arguments)
},setFeature:function(e,t){t=OpenLayers.Util.applyDefaults(t,{rotation:0,scale:1,ratio:1});
var i=this.rotation,r=this.center;if(OpenLayers.Util.extend(this,t),!1!==this.events.triggerEvent("beforesetfeature",{feature:e})){this.feature=e,this.activate(),this._setfeature=!0;
var s=this.feature.geometry.getBounds();this.box.move(s.getCenterLonLat()),this.box.geometry.rotate(-i,r),this._angle=0,this.rotation?(i=e.geometry.clone(),i.rotate(-this.rotation,this.center),i=new OpenLayers.Feature.Vector(i.getBounds().toGeometry()),i.geometry.rotate(this.rotation,this.center),this.box.geometry.rotate(this.rotation,this.center),this.box.move(i.geometry.getBounds().getCenterLonLat()),i=i.geometry.components[0].components[0].getBounds().getCenterLonLat()):i=new OpenLayers.LonLat(s.left,s.bottom),this.handles[0].move(i),delete this._setfeature,this.events.triggerEvent("setfeature",{feature:e})
}},unsetFeature:function(){this.active?this.deactivate():(this.feature=null,this.rotation=0,this.ratio=this.scale=1)
},createBox:function(){var e=this;this.center=new OpenLayers.Geometry.Point(0,0),this.box=new OpenLayers.Feature.Vector(new OpenLayers.Geometry.LineString([new OpenLayers.Geometry.Point(-1,-1),new OpenLayers.Geometry.Point(0,-1),new OpenLayers.Geometry.Point(1,-1),new OpenLayers.Geometry.Point(1,0),new OpenLayers.Geometry.Point(1,1),new OpenLayers.Geometry.Point(0,1),new OpenLayers.Geometry.Point(-1,1),new OpenLayers.Geometry.Point(-1,0),new OpenLayers.Geometry.Point(-1,-1)]),null,"string"==typeof this.renderIntent?null:this.renderIntent),this.box.geometry.move=function(t,i){e._moving=!0,OpenLayers.Geometry.LineString.prototype.move.apply(this,arguments),e.center.move(t,i),delete e._moving
};for(var t,i,r,s=function(e,t){OpenLayers.Geometry.Point.prototype.move.apply(this,arguments),this._rotationHandle&&this._rotationHandle.geometry.move(e,t),this._handle.geometry.move(e,t)
},n=function(e,t,i){OpenLayers.Geometry.Point.prototype.resize.apply(this,arguments),this._rotationHandle&&this._rotationHandle.geometry.resize(e,t,i),this._handle.geometry.resize(e,t,i)
},a=function(e,t){OpenLayers.Geometry.Point.prototype.rotate.apply(this,arguments),this._rotationHandle&&this._rotationHandle.geometry.rotate(e,t),this._handle.geometry.rotate(e,t)
},o=function(t,i){var r=this.x,s=this.y;if(OpenLayers.Geometry.Point.prototype.move.call(this,t,i),!e._moving){var n=e.dragControl.handlers.drag.evt,a=!(!e._setfeature&&e.preserveAspectRatio||n&&n.shiftKey),o=new OpenLayers.Geometry.Point(r,s),n=e.center;
this.rotate(-e.rotation,n),o.rotate(-e.rotation,n);var l=this.x-n.x,h=this.y-n.y,p=l-(this.x-o.x),u=h-(this.y-o.y);
e.irregular&&!e._setfeature&&(l-=(this.x-o.x)/2,h-=(this.y-o.y)/2),this.x=r,this.y=s,o=1,a?(h=1e-5>Math.abs(u)?1:h/u,o=(1e-5>Math.abs(p)?1:l/p)/h):(p=Math.sqrt(p*p+u*u),h=Math.sqrt(l*l+h*h)/p),e._moving=!0,e.box.geometry.rotate(-e.rotation,n),delete e._moving,e.box.geometry.resize(h,n,o),e.box.geometry.rotate(e.rotation,n),e.transformFeature({scale:h,ratio:o}),e.irregular&&!e._setfeature&&(l=n.clone(),l.x+=1e-5>Math.abs(r-n.x)?0:this.x-r,l.y+=1e-5>Math.abs(s-n.y)?0:this.y-s,e.box.geometry.move(this.x-r,this.y-s),e.transformFeature({center:l}))
}},l=function(t,i){var r=this.x,s=this.y;if(OpenLayers.Geometry.Point.prototype.move.call(this,t,i),!e._moving){var n=e.dragControl.handlers.drag.evt,n=n&&n.shiftKey?45:1,a=e.center,o=this.x-a.x,l=this.y-a.y;
this.x=r,this.y=s,r=Math.atan2(l-i,o-t),r=Math.atan2(l,o)-r,r*=180/Math.PI,e._angle=(e._angle+r)%360,r=e.rotation%n,(Math.abs(e._angle)>=n||0!==r)&&(r=Math.round(e._angle/n)*n-r,e._angle=0,e.box.geometry.rotate(r,a),e.transformFeature({rotation:r}))
}},h=Array(8),p=Array(4),u="sw s se e ne n nw w".split(" "),c=0;8>c;++c)t=this.box.geometry.components[c],i=new OpenLayers.Feature.Vector(t.clone(),{role:u[c]+"-resize"},"string"==typeof this.renderIntent?null:this.renderIntent),0==c%2&&(r=new OpenLayers.Feature.Vector(t.clone(),{role:u[c]+"-rotate"},"string"==typeof this.rotationHandleSymbolizer?null:this.rotationHandleSymbolizer),r.geometry.move=l,t._rotationHandle=r,p[c/2]=r),t.move=s,t.resize=n,t.rotate=a,i.geometry.move=o,t._handle=i,h[c]=i;
this.rotationHandles=p,this.handles=h},createControl:function(){var e=this;this.dragControl=new OpenLayers.Control.DragFeature(this.layer,{documentDrag:!0,moveFeature:function(){this.feature===e.feature&&(this.feature=e.box),OpenLayers.Control.DragFeature.prototype.moveFeature.apply(this,arguments)
},onDrag:function(t){t===e.box&&e.transformFeature({center:e.center})},onStart:function(t){var i=!e.geometryTypes||-1!==OpenLayers.Util.indexOf(e.geometryTypes,t.geometry.CLASS_NAME),r=OpenLayers.Util.indexOf(e.handles,t),r=r+OpenLayers.Util.indexOf(e.rotationHandles,t);
t!==e.feature&&t!==e.box&&-2==r&&i&&e.setFeature(t)},onComplete:function(){e.events.triggerEvent("transformcomplete",{feature:e.feature})
}})},drawHandles:function(){for(var e=this.layer,t=0;8>t;++t)this.rotate&&0===t%2&&e.drawFeature(this.rotationHandles[t/2],this.rotationHandleSymbolizer),e.drawFeature(this.handles[t],this.renderIntent)
},transformFeature:function(e){if(!this._setfeature){this.scale*=e.scale||1,this.ratio*=e.ratio||1;
var t=this.rotation;if(this.rotation=(this.rotation+(e.rotation||0))%360,!1!==this.events.triggerEvent("beforetransform",e)){var i=this.feature,r=i.geometry,s=this.center;
r.rotate(-t,s),e.scale||e.ratio?r.resize(e.scale,s,e.ratio):e.center&&i.move(e.center.getBounds().getCenterLonLat()),r.rotate(this.rotation,s),this.layer.drawFeature(i),i.toState(OpenLayers.State.UPDATE),this.events.triggerEvent("transform",e)
}}this.layer.drawFeature(this.box,this.renderIntent),this.drawHandles()},destroy:function(){for(var e,t=0;8>t;++t)e=this.box.geometry.components[t],e._handle.destroy(),e._handle=null,e._rotationHandle&&e._rotationHandle.destroy(),e._rotationHandle=null;
this.rotationHandles=this.rotationHandleSymbolizer=this.handles=this.feature=this.center=null,this.box.destroy(),this.layer=this.box=null,this.dragControl.destroy(),this.dragControl=null,OpenLayers.Control.prototype.destroy.apply(this,arguments)
},CLASS_NAME:"OpenLayers.Control.TransformFeature"}),OpenLayers.Handler.Box=OpenLayers.Class(OpenLayers.Handler,{dragHandler:null,boxDivClassName:"olHandlerBoxZoomBox",boxOffsets:null,initialize:function(){OpenLayers.Handler.prototype.initialize.apply(this,arguments),this.dragHandler=new OpenLayers.Handler.Drag(this,{down:this.startBox,move:this.moveBox,out:this.removeBox,up:this.endBox},{keyMask:this.keyMask})
},destroy:function(){OpenLayers.Handler.prototype.destroy.apply(this,arguments),this.dragHandler&&(this.dragHandler.destroy(),this.dragHandler=null)
},setMap:function(e){OpenLayers.Handler.prototype.setMap.apply(this,arguments),this.dragHandler&&this.dragHandler.setMap(e)
},startBox:function(){this.callback("start",[]),this.zoomBox=OpenLayers.Util.createDiv("zoomBox",{x:-9999,y:-9999}),this.zoomBox.className=this.boxDivClassName,this.zoomBox.style.zIndex=this.map.Z_INDEX_BASE.Popup-1,this.map.viewPortDiv.appendChild(this.zoomBox),OpenLayers.Element.addClass(this.map.viewPortDiv,"olDrawBox")
},moveBox:function(e){var t=this.dragHandler.start.x,i=this.dragHandler.start.y,r=Math.abs(t-e.x),s=Math.abs(i-e.y),n=this.getBoxOffsets();
this.zoomBox.style.width=r+n.width+1+"px",this.zoomBox.style.height=s+n.height+1+"px",this.zoomBox.style.left=(e.x<t?t-r-n.left:t-n.left)+"px",this.zoomBox.style.top=(e.y<i?i-s-n.top:i-n.top)+"px"
},endBox:function(e){var t;if(5<Math.abs(this.dragHandler.start.x-e.x)||5<Math.abs(this.dragHandler.start.y-e.y)){var i=this.dragHandler.start;
t=Math.min(i.y,e.y);var r=Math.max(i.y,e.y),s=Math.min(i.x,e.x);e=Math.max(i.x,e.x),t=new OpenLayers.Bounds(s,r,e,t)
}else t=this.dragHandler.start.clone();this.removeBox(),this.callback("done",[t])
},removeBox:function(){this.map.viewPortDiv.removeChild(this.zoomBox),this.boxOffsets=this.zoomBox=null,OpenLayers.Element.removeClass(this.map.viewPortDiv,"olDrawBox")
},activate:function(){return OpenLayers.Handler.prototype.activate.apply(this,arguments)?(this.dragHandler.activate(),!0):!1
},deactivate:function(){return OpenLayers.Handler.prototype.deactivate.apply(this,arguments)?(this.dragHandler.deactivate()&&this.zoomBox&&this.removeBox(),!0):!1
},getBoxOffsets:function(){if(!this.boxOffsets){var e=document.createElement("div");
e.style.position="absolute",e.style.border="1px solid black",e.style.width="3px",document.body.appendChild(e);
var t=3==e.clientWidth;document.body.removeChild(e);var e=parseInt(OpenLayers.Element.getStyle(this.zoomBox,"border-left-width")),i=parseInt(OpenLayers.Element.getStyle(this.zoomBox,"border-right-width")),r=parseInt(OpenLayers.Element.getStyle(this.zoomBox,"border-top-width")),s=parseInt(OpenLayers.Element.getStyle(this.zoomBox,"border-bottom-width"));
this.boxOffsets={left:e,right:i,top:r,bottom:s,width:!1===t?e+i:0,height:!1===t?r+s:0}
}return this.boxOffsets},CLASS_NAME:"OpenLayers.Handler.Box"}),OpenLayers.Control.ZoomBox=OpenLayers.Class(OpenLayers.Control,{type:OpenLayers.Control.TYPE_TOOL,out:!1,keyMask:null,alwaysZoom:!1,zoomOnClick:!0,draw:function(){this.handler=new OpenLayers.Handler.Box(this,{done:this.zoomBox},{keyMask:this.keyMask})
},zoomBox:function(e){if(e instanceof OpenLayers.Bounds){var t,i=e.getCenterPixel();
if(this.out){t=Math.min(this.map.size.h/(e.bottom-e.top),this.map.size.w/(e.right-e.left));
var r=this.map.getExtent(),s=this.map.getLonLatFromPixel(i),n=s.lon-r.getWidth()/2*t;
e=s.lon+r.getWidth()/2*t;var a=s.lat-r.getHeight()/2*t;t=s.lat+r.getHeight()/2*t,t=new OpenLayers.Bounds(n,a,e,t)
}else n=this.map.getLonLatFromPixel({x:e.left,y:e.bottom}),e=this.map.getLonLatFromPixel({x:e.right,y:e.top}),t=new OpenLayers.Bounds(n.lon,n.lat,e.lon,e.lat);
n=this.map.getZoom(),a=this.map.getSize(),e=a.w/2,a=a.h/2,t=this.map.getZoomForExtent(t),r=this.map.getResolution(),s=this.map.getResolutionForZoom(t),r==s?this.map.setCenter(this.map.getLonLatFromPixel(i)):this.map.zoomTo(t,{x:(r*i.x-s*e)/(r-s),y:(r*i.y-s*a)/(r-s)}),n==this.map.getZoom()&&1==this.alwaysZoom&&this.map.zoomTo(n+(this.out?-1:1))
}else this.zoomOnClick&&(this.out?this.map.zoomTo(this.map.getZoom()-1,e):this.map.zoomTo(this.map.getZoom()+1,e))
},CLASS_NAME:"OpenLayers.Control.ZoomBox"}),OpenLayers.Control.DragPan=OpenLayers.Class(OpenLayers.Control,{type:OpenLayers.Control.TYPE_TOOL,panned:!1,interval:0,documentDrag:!1,kinetic:null,enableKinetic:!0,kineticInterval:10,draw:function(){if(this.enableKinetic&&OpenLayers.Kinetic){var e={interval:this.kineticInterval};
"object"==typeof this.enableKinetic&&(e=OpenLayers.Util.extend(e,this.enableKinetic)),this.kinetic=new OpenLayers.Kinetic(e)
}this.handler=new OpenLayers.Handler.Drag(this,{move:this.panMap,done:this.panMapDone,down:this.panMapStart},{interval:this.interval,documentDrag:this.documentDrag})
},panMapStart:function(){this.kinetic&&this.kinetic.begin()},panMap:function(e){this.kinetic&&this.kinetic.update(e),this.panned=!0,this.map.pan(this.handler.last.x-e.x,this.handler.last.y-e.y,{dragging:!0,animate:!1})
},panMapDone:function(e){if(this.panned){var t=null;if(this.kinetic&&(t=this.kinetic.end(e)),this.map.pan(this.handler.last.x-e.x,this.handler.last.y-e.y,{dragging:!!t,animate:!1}),t){var i=this;
this.kinetic.move(t,function(e,t,r){i.map.pan(e,t,{dragging:!r,animate:!1})})}this.panned=!1
}},CLASS_NAME:"OpenLayers.Control.DragPan"}),OpenLayers.Control.Navigation=OpenLayers.Class(OpenLayers.Control,{dragPan:null,dragPanOptions:null,pinchZoom:null,pinchZoomOptions:null,documentDrag:!1,zoomBox:null,zoomBoxEnabled:!0,zoomWheelEnabled:!0,mouseWheelOptions:null,handleRightClicks:!1,zoomBoxKeyMask:OpenLayers.Handler.MOD_SHIFT,autoActivate:!0,initialize:function(){this.handlers={},OpenLayers.Control.prototype.initialize.apply(this,arguments)
},destroy:function(){this.deactivate(),this.dragPan&&this.dragPan.destroy(),this.dragPan=null,this.zoomBox&&this.zoomBox.destroy(),this.zoomBox=null,this.pinchZoom&&this.pinchZoom.destroy(),this.pinchZoom=null,OpenLayers.Control.prototype.destroy.apply(this,arguments)
},activate:function(){return this.dragPan.activate(),this.zoomWheelEnabled&&this.handlers.wheel.activate(),this.handlers.click.activate(),this.zoomBoxEnabled&&this.zoomBox.activate(),this.pinchZoom&&this.pinchZoom.activate(),OpenLayers.Control.prototype.activate.apply(this,arguments)
},deactivate:function(){return this.pinchZoom&&this.pinchZoom.deactivate(),this.zoomBox.deactivate(),this.dragPan.deactivate(),this.handlers.click.deactivate(),this.handlers.wheel.deactivate(),OpenLayers.Control.prototype.deactivate.apply(this,arguments)
},draw:function(){this.handleRightClicks&&(this.map.viewPortDiv.oncontextmenu=OpenLayers.Function.False),this.handlers.click=new OpenLayers.Handler.Click(this,{click:this.defaultClick,dblclick:this.defaultDblClick,dblrightclick:this.defaultDblRightClick},{"double":!0,stopDouble:!0}),this.dragPan=new OpenLayers.Control.DragPan(OpenLayers.Util.extend({map:this.map,documentDrag:this.documentDrag},this.dragPanOptions)),this.zoomBox=new OpenLayers.Control.ZoomBox({map:this.map,keyMask:this.zoomBoxKeyMask}),this.dragPan.draw(),this.zoomBox.draw(),this.handlers.wheel=new OpenLayers.Handler.MouseWheel(this,{up:this.wheelUp,down:this.wheelDown},OpenLayers.Util.extend(this.map.fractionalZoom?{}:{cumulative:!1,interval:50,maxDelta:6},this.mouseWheelOptions)),OpenLayers.Control.PinchZoom&&(this.pinchZoom=new OpenLayers.Control.PinchZoom(OpenLayers.Util.extend({map:this.map},this.pinchZoomOptions)))
},defaultClick:function(e){e.lastTouches&&2==e.lastTouches.length&&this.map.zoomOut()
},defaultDblClick:function(e){this.map.zoomTo(this.map.zoom+1,e.xy)},defaultDblRightClick:function(e){this.map.zoomTo(this.map.zoom-1,e.xy)
},wheelChange:function(e,t){this.map.fractionalZoom||(t=Math.round(t));var i,r=this.map.getZoom();
i=Math.max(r+t,0),i=Math.min(i,this.map.getNumZoomLevels()),i!==r&&this.map.zoomTo(i,e.xy)
},wheelUp:function(e,t){this.wheelChange(e,t||1)},wheelDown:function(e,t){this.wheelChange(e,t||-1)
},disableZoomBox:function(){this.zoomBoxEnabled=!1,this.zoomBox.deactivate()},enableZoomBox:function(){this.zoomBoxEnabled=!0,this.active&&this.zoomBox.activate()
},disableZoomWheel:function(){this.zoomWheelEnabled=!1,this.handlers.wheel.deactivate()
},enableZoomWheel:function(){this.zoomWheelEnabled=!0,this.active&&this.handlers.wheel.activate()
},CLASS_NAME:"OpenLayers.Control.Navigation"}),OpenLayers.Control.DrawFeature=OpenLayers.Class(OpenLayers.Control,{layer:null,callbacks:null,multi:!1,featureAdded:function(){},initialize:function(e,t,i){OpenLayers.Control.prototype.initialize.apply(this,[i]),this.callbacks=OpenLayers.Util.extend({done:this.drawFeature,modify:function(e,t){this.layer.events.triggerEvent("sketchmodified",{vertex:e,feature:t})
},create:function(e,t){this.layer.events.triggerEvent("sketchstarted",{vertex:e,feature:t})
}},this.callbacks),this.layer=e,this.handlerOptions=this.handlerOptions||{},this.handlerOptions.layerOptions=OpenLayers.Util.applyDefaults(this.handlerOptions.layerOptions,{renderers:e.renderers,rendererOptions:e.rendererOptions}),"multi"in this.handlerOptions||(this.handlerOptions.multi=this.multi),(e=this.layer.styleMap&&this.layer.styleMap.styles.temporary)&&(this.handlerOptions.layerOptions=OpenLayers.Util.applyDefaults(this.handlerOptions.layerOptions,{styleMap:new OpenLayers.StyleMap({"default":e})})),this.handler=new t(this,this.callbacks,this.handlerOptions)
},drawFeature:function(e){e=new OpenLayers.Feature.Vector(e),!1!==this.layer.events.triggerEvent("sketchcomplete",{feature:e})&&(e.state=OpenLayers.State.INSERT,this.layer.addFeatures([e]),this.featureAdded(e),this.events.triggerEvent("featureadded",{feature:e}))
},insertXY:function(e,t){this.handler&&this.handler.line&&this.handler.insertXY(e,t)
},insertDeltaXY:function(e,t){this.handler&&this.handler.line&&this.handler.insertDeltaXY(e,t)
},insertDirectionLength:function(e,t){this.handler&&this.handler.line&&this.handler.insertDirectionLength(e,t)
},insertDeflectionLength:function(e,t){this.handler&&this.handler.line&&this.handler.insertDeflectionLength(e,t)
},undo:function(){return this.handler.undo&&this.handler.undo()},redo:function(){return this.handler.redo&&this.handler.redo()
},finishSketch:function(){this.handler.finishGeometry()},cancel:function(){this.handler.cancel()
},CLASS_NAME:"OpenLayers.Control.DrawFeature"}),OpenLayers.Handler.Polygon=OpenLayers.Class(OpenLayers.Handler.Path,{holeModifier:null,drawingHole:!1,polygon:null,createFeature:function(e){e=this.layer.getLonLatFromViewPortPx(e),e=new OpenLayers.Geometry.Point(e.lon,e.lat),this.point=new OpenLayers.Feature.Vector(e),this.line=new OpenLayers.Feature.Vector(new OpenLayers.Geometry.LinearRing([this.point.geometry])),this.polygon=new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Polygon([this.line.geometry])),this.callback("create",[this.point.geometry,this.getSketch()]),this.point.geometry.clearBounds(),this.layer.addFeatures([this.polygon,this.point],{silent:!0})
},addPoint:function(){if(!this.drawingHole&&this.holeModifier&&this.evt&&this.evt[this.holeModifier])for(var e,t=this.point.geometry,i=this.control.layer.features,r=i.length-1;r>=0;--r)if(e=i[r].geometry,(e instanceof OpenLayers.Geometry.Polygon||e instanceof OpenLayers.Geometry.MultiPolygon)&&e.intersects(t)){t=i[r],this.control.layer.removeFeatures([t],{silent:!0}),this.control.layer.events.registerPriority("sketchcomplete",this,this.finalizeInteriorRing),this.control.layer.events.registerPriority("sketchmodified",this,this.enforceTopology),t.geometry.addComponent(this.line.geometry),this.polygon=t,this.drawingHole=!0;
break}OpenLayers.Handler.Path.prototype.addPoint.apply(this,arguments)},getCurrentPointIndex:function(){return this.line.geometry.components.length-2
},enforceTopology:function(e){e=e.vertex;var t=this.line.geometry.components;this.polygon.geometry.intersects(e)||(t=t[t.length-3],e.x=t.x,e.y=t.y)
},finishGeometry:function(){this.line.geometry.removeComponent(this.line.geometry.components[this.line.geometry.components.length-2]),this.removePoint(),this.finalize()
},finalizeInteriorRing:function(){var e=this.line.geometry,t=0!==e.getArea();if(t){for(var i=this.polygon.geometry.components,r=i.length-2;r>=0;--r)if(e.intersects(i[r])){t=!1;
break}if(t)e:for(r=i.length-2;r>0;--r)for(var s=i[r].components,n=0,a=s.length;a>n;++n)if(e.containsPoint(s[n])){t=!1;
break e}}return t?this.polygon.state!==OpenLayers.State.INSERT&&(this.polygon.state=OpenLayers.State.UPDATE):this.polygon.geometry.removeComponent(e),this.restoreFeature(),!1
},cancel:function(){return this.drawingHole&&(this.polygon.geometry.removeComponent(this.line.geometry),this.restoreFeature(!0)),OpenLayers.Handler.Path.prototype.cancel.apply(this,arguments)
},restoreFeature:function(e){this.control.layer.events.unregister("sketchcomplete",this,this.finalizeInteriorRing),this.control.layer.events.unregister("sketchmodified",this,this.enforceTopology),this.layer.removeFeatures([this.polygon],{silent:!0}),this.control.layer.addFeatures([this.polygon],{silent:!0}),this.drawingHole=!1,e||this.control.layer.events.triggerEvent("sketchcomplete",{feature:this.polygon})
},destroyFeature:function(e){OpenLayers.Handler.Path.prototype.destroyFeature.call(this,e),this.polygon=null
},drawFeature:function(){this.layer.drawFeature(this.polygon,this.style),this.layer.drawFeature(this.point,this.style)
},getSketch:function(){return this.polygon},getGeometry:function(){var e=this.polygon&&this.polygon.geometry;
return e&&this.multi&&(e=new OpenLayers.Geometry.MultiPolygon([e])),e},CLASS_NAME:"OpenLayers.Handler.Polygon"}),OpenLayers.Control.EditingToolbar=OpenLayers.Class(OpenLayers.Control.Panel,{citeCompliant:!1,initialize:function(e,t){OpenLayers.Control.Panel.prototype.initialize.apply(this,[t]),this.addControls([new OpenLayers.Control.Navigation]);
var i=[new OpenLayers.Control.DrawFeature(e,OpenLayers.Handler.Point,{displayClass:"olControlDrawFeaturePoint",handlerOptions:{citeCompliant:this.citeCompliant}}),new OpenLayers.Control.DrawFeature(e,OpenLayers.Handler.Path,{displayClass:"olControlDrawFeaturePath",handlerOptions:{citeCompliant:this.citeCompliant}}),new OpenLayers.Control.DrawFeature(e,OpenLayers.Handler.Polygon,{displayClass:"olControlDrawFeaturePolygon",handlerOptions:{citeCompliant:this.citeCompliant}})];
this.addControls(i)},draw:function(){var e=OpenLayers.Control.Panel.prototype.draw.apply(this,arguments);
return null===this.defaultControl&&(this.defaultControl=this.controls[0]),e},CLASS_NAME:"OpenLayers.Control.EditingToolbar"}),OpenLayers.Strategy.BBOX=OpenLayers.Class(OpenLayers.Strategy,{bounds:null,resolution:null,ratio:2,resFactor:null,response:null,activate:function(){var e=OpenLayers.Strategy.prototype.activate.call(this);
return e&&(this.layer.events.on({moveend:this.update,refresh:this.update,visibilitychanged:this.update,scope:this}),this.update()),e
},deactivate:function(){var e=OpenLayers.Strategy.prototype.deactivate.call(this);
return e&&this.layer.events.un({moveend:this.update,refresh:this.update,visibilitychanged:this.update,scope:this}),e
},update:function(e){var t=this.getMapBounds();null!==t&&(e&&e.force||this.layer.visibility&&this.layer.calculateInRange()&&this.invalidBounds(t))&&(this.calculateBounds(t),this.resolution=this.layer.map.getResolution(),this.triggerRead(e))
},getMapBounds:function(){if(null===this.layer.map)return null;var e=this.layer.map.getExtent();
return e&&!this.layer.projection.equals(this.layer.map.getProjectionObject())&&(e=e.clone().transform(this.layer.map.getProjectionObject(),this.layer.projection)),e
},invalidBounds:function(e){return e||(e=this.getMapBounds()),e=!this.bounds||!this.bounds.containsBounds(e),!e&&this.resFactor&&(e=this.resolution/this.layer.map.getResolution(),e=e>=this.resFactor||e<=1/this.resFactor),e
},calculateBounds:function(e){e||(e=this.getMapBounds());var t=e.getCenterLonLat(),i=e.getWidth()*this.ratio;
e=e.getHeight()*this.ratio,this.bounds=new OpenLayers.Bounds(t.lon-i/2,t.lat-e/2,t.lon+i/2,t.lat+e/2)
},triggerRead:function(e){!this.response||e&&!0===e.noAbort||(this.layer.protocol.abort(this.response),this.layer.events.triggerEvent("loadend"));
var t={filter:this.createFilter()};this.layer.events.triggerEvent("loadstart",t),this.response=this.layer.protocol.read(OpenLayers.Util.applyDefaults({filter:t.filter,callback:this.merge,scope:this},e))
},createFilter:function(){var e=new OpenLayers.Filter.Spatial({type:OpenLayers.Filter.Spatial.BBOX,value:this.bounds,projection:this.layer.projection});
return this.layer.filter&&(e=new OpenLayers.Filter.Logical({type:OpenLayers.Filter.Logical.AND,filters:[this.layer.filter,e]})),e
},merge:function(e){if(this.layer.destroyFeatures(),e.success()){var t=e.features;
if(t&&0<t.length){var i=this.layer.projection,r=this.layer.map.getProjectionObject();
if(!r.equals(i))for(var s,n=0,a=t.length;a>n;++n)(s=t[n].geometry)&&s.transform(i,r);
this.layer.addFeatures(t)}}else this.bounds=null;this.response=null,this.layer.events.triggerEvent("loadend",{response:e})
},CLASS_NAME:"OpenLayers.Strategy.BBOX"}),OpenLayers.Layer.WorldWind=OpenLayers.Class(OpenLayers.Layer.Grid,{DEFAULT_PARAMS:{},isBaseLayer:!0,lzd:null,zoomLevels:null,initialize:function(e,t,i,r,s,n){this.lzd=i,this.zoomLevels=r,i=[],i.push(e,t,s,n),OpenLayers.Layer.Grid.prototype.initialize.apply(this,i),this.params=OpenLayers.Util.applyDefaults(this.params,this.DEFAULT_PARAMS)
},getZoom:function(){var e=this.map.getZoom();return this.map.getMaxExtent(),e-=Math.log(this.maxResolution/(this.lzd/512))/Math.log(2)
},getURL:function(e){e=this.adjustBounds(e);var t=this.getZoom(),i=this.map.getMaxExtent(),r=this.lzd/Math.pow(2,this.getZoom()),s=Math.floor((e.left-i.left)/r);
return e=Math.floor((e.bottom-i.bottom)/r),this.map.getResolution()<=this.lzd/512&&this.getZoom()<=this.zoomLevels?this.getFullRequestString({L:t,X:s,Y:e}):OpenLayers.Util.getImageLocation("blank.gif")
},CLASS_NAME:"OpenLayers.Layer.WorldWind"}),OpenLayers.Protocol.CSW=function(e){e=OpenLayers.Util.applyDefaults(e,OpenLayers.Protocol.CSW.DEFAULTS);
var t=OpenLayers.Protocol.CSW["v"+e.version.replace(/\./g,"_")];if(!t)throw"Unsupported CSW version: "+e.version;
return new t(e)},OpenLayers.Protocol.CSW.DEFAULTS={version:"2.0.2"},OpenLayers.Format.WMTSCapabilities=OpenLayers.Class(OpenLayers.Format.XML.VersionedOGC,{defaultVersion:"1.0.0",yx:{"urn:ogc:def:crs:EPSG::4326":!0},createLayer:function(e,t){if(!("layer"in t))throw Error("Missing property 'layer' in configuration.");
for(var i,r=e.contents,s=0,n=r.layers.length;n>s;++s)if(r.layers[s].identifier===t.layer){i=r.layers[s];
break}if(!i)throw Error("Layer not found");var a=t.format;!a&&i.formats&&i.formats.length&&(a=i.formats[0]);
var o;if(t.matrixSet?o=r.tileMatrixSets[t.matrixSet]:1<=i.tileMatrixSetLinks.length&&(o=r.tileMatrixSets[i.tileMatrixSetLinks[0].tileMatrixSet]),!o)throw Error("matrixSet not found");
for(var l,s=0,n=i.styles.length;n>s&&(l=i.styles[s],!l.isDefault);++s);if(r=t.requestEncoding,!r&&(r="KVP",e.operationsMetadata.GetTile.dcp.http)){var h=e.operationsMetadata.GetTile.dcp.http;
h.get[0].constraints&&(h=h.get[0].constraints.GetEncoding.allowedValues,h.KVP||!h.REST&&!h.RESTful||(r="REST"))
}var h=[],p=t.params||{};delete t.params;for(var u=0,c=i.dimensions.length;c>u;u++){var y=i.dimensions[u];
h.push(y.identifier),p.hasOwnProperty(y.identifier)||(p[y.identifier]=y["default"])
}var d,u=t.projection||o.supportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/,"$1:$3"),c=t.units||("EPSG:4326"===u?"degrees":"m"),y=[];
for(d in o.matrixIds)o.matrixIds.hasOwnProperty(d)&&y.push(28e-5*o.matrixIds[d].scaleDenominator/OpenLayers.METERS_PER_INCH/OpenLayers.INCHES_PER_UNIT[c]);
if("REST"===r&&i.resourceUrls){d=[];for(var n=0,m=i.resourceUrls.length;m>n;++n)s=i.resourceUrls[n],s.format===a&&"tile"===s.resourceType&&d.push(s.template)
}else{m=e.operationsMetadata.GetTile.dcp.http.get,d=[];for(var f,s=0,n=m.length;n>s;s++)f=m[s].constraints,(!f||f&&f.GetEncoding.allowedValues[r])&&d.push(m[s].url)
}return new OpenLayers.Layer.WMTS(OpenLayers.Util.applyDefaults(t,{url:d,requestEncoding:r,name:i.title,style:l.identifier,format:a,matrixIds:o.matrixIds,matrixSet:o.identifier,projection:u,units:c,resolutions:!1===t.isBaseLayer?void 0:y,serverResolutions:y,tileFullExtent:o.bounds,dimensions:h,params:p}))
},CLASS_NAME:"OpenLayers.Format.WMTSCapabilities"}),OpenLayers.Layer.Google.v3={DEFAULTS:{sphericalMercator:!0,projection:"EPSG:900913"},animationEnabled:!0,loadMapObject:function(){this.type||(this.type=google.maps.MapTypeId.ROADMAP);
var e,t=OpenLayers.Layer.Google.cache[this.map.id];t?(e=t.mapObject,++t.count):(e=this.map.getCenter(),t=document.createElement("div"),t.className="olForeignContainer",t.style.width="100%",t.style.height="100%",e=new google.maps.Map(t,{center:e?new google.maps.LatLng(e.lat,e.lon):new google.maps.LatLng(0,0),zoom:this.map.getZoom()||0,mapTypeId:this.type,disableDefaultUI:!0,keyboardShortcuts:!1,draggable:!1,disableDoubleClickZoom:!0,scrollwheel:!1,streetViewControl:!1}),t=document.createElement("div"),t.style.width="100%",t.style.height="100%",e.controls[google.maps.ControlPosition.TOP_LEFT].push(t),t={googleControl:t,mapObject:e,count:1},OpenLayers.Layer.Google.cache[this.map.id]=t),this.mapObject=e,this.setGMapVisibility(this.visibility)
},onMapResize:function(){this.visibility&&google.maps.event.trigger(this.mapObject,"resize")
},setGMapVisibility:function(e){var t=OpenLayers.Layer.Google.cache[this.map.id],i=this.map;
if(t){for(var r,s=this.type,n=i.layers,a=n.length-1;a>=0;--a)if(r=n[a],r instanceof OpenLayers.Layer.Google&&!0===r.visibility&&!0===r.inRange){s=r.type,e=!0;
break}if(n=this.mapObject.getDiv(),!0===e){if(n.parentNode!==i.div)if(t.rendered)i.div.appendChild(n),t.googleControl.appendChild(i.viewPortDiv),google.maps.event.trigger(this.mapObject,"resize");
else{var o=this;google.maps.event.addListenerOnce(this.mapObject,"tilesloaded",function(){t.rendered=!0,o.setGMapVisibility(o.getVisibility()),o.moveTo(o.map.getCenter())
})}this.mapObject.setMapTypeId(s)}else t.googleControl.hasChildNodes()&&(i.div.appendChild(i.viewPortDiv),i.div.removeChild(n))
}},getMapContainer:function(){return this.mapObject.getDiv()},getMapObjectBoundsFromOLBounds:function(e){var t=null;
return null!=e&&(t=this.sphericalMercator?this.inverseMercator(e.bottom,e.left):new OpenLayers.LonLat(e.bottom,e.left),e=this.sphericalMercator?this.inverseMercator(e.top,e.right):new OpenLayers.LonLat(e.top,e.right),t=new google.maps.LatLngBounds(new google.maps.LatLng(t.lat,t.lon),new google.maps.LatLng(e.lat,e.lon))),t
},getMapObjectLonLatFromMapObjectPixel:function(e){var t=this.map.getSize(),i=this.getLongitudeFromMapObjectLonLat(this.mapObject.center),r=this.getLatitudeFromMapObjectLonLat(this.mapObject.center),s=this.map.getResolution();
return e=new OpenLayers.LonLat(i+(e.x-t.w/2)*s,r-(e.y-t.h/2)*s),this.wrapDateLine&&(e=e.wrapDateLine(this.maxExtent)),this.getMapObjectLonLatFromLonLat(e.lon,e.lat)
},getMapObjectPixelFromMapObjectLonLat:function(e){var t=this.getLongitudeFromMapObjectLonLat(e);
e=this.getLatitudeFromMapObjectLonLat(e);var i=this.map.getResolution(),r=this.map.getExtent();
return this.getMapObjectPixelFromXY(1/i*(t-r.left),1/i*(r.top-e))},setMapObjectCenter:function(e,t){if(!1===this.animationEnabled&&t!=this.mapObject.zoom){var i=this.getMapContainer();
google.maps.event.addListenerOnce(this.mapObject,"idle",function(){i.style.visibility=""
}),i.style.visibility="hidden"}this.mapObject.setOptions({center:e,zoom:t})},getMapObjectZoomFromMapObjectBounds:function(e){return this.mapObject.getBoundsZoomLevel(e)
},getMapObjectLonLatFromLonLat:function(e,t){var i;return this.sphericalMercator?(i=this.inverseMercator(e,t),i=new google.maps.LatLng(i.lat,i.lon)):i=new google.maps.LatLng(t,e),i
},getMapObjectPixelFromXY:function(e,t){return new google.maps.Point(e,t)}},OpenLayers.Format.WPSDescribeProcess=OpenLayers.Class(OpenLayers.Format.XML,{VERSION:"1.0.0",namespaces:{wps:"http://www.opengis.net/wps/1.0.0",ows:"http://www.opengis.net/ows/1.1",xsi:"http://www.w3.org/2001/XMLSchema-instance"},schemaLocation:"http://www.opengis.net/wps/1.0.0 http://schemas.opengis.net/wps/1.0.0/wpsAll.xsd",defaultPrefix:"wps",regExes:{trimSpace:/^\s*|\s*$/g,removeSpace:/\s*/g,splitSpace:/\s+/,trimComma:/\s*,\s*/g},read:function(e){"string"==typeof e&&(e=OpenLayers.Format.XML.prototype.read.apply(this,[e])),e&&9==e.nodeType&&(e=e.documentElement);
var t={};return this.readNode(e,t),t},readers:{wps:{ProcessDescriptions:function(e,t){t.processDescriptions={},this.readChildNodes(e,t.processDescriptions)
},ProcessDescription:function(e,t){var i={processVersion:this.getAttributeNS(e,this.namespaces.wps,"processVersion"),statusSupported:"true"===e.getAttribute("statusSupported"),storeSupported:"true"===e.getAttribute("storeSupported")};
this.readChildNodes(e,i),t[i.identifier]=i},DataInputs:function(e,t){t.dataInputs=[],this.readChildNodes(e,t.dataInputs)
},ProcessOutputs:function(e,t){t.processOutputs=[],this.readChildNodes(e,t.processOutputs)
},Output:function(e,t){var i={};this.readChildNodes(e,i),t.push(i)},ComplexOutput:function(e,t){t.complexOutput={},this.readChildNodes(e,t.complexOutput)
},LiteralOutput:function(e,t){t.literalOutput={},this.readChildNodes(e,t.literalOutput)
},Input:function(e,t){var i={maxOccurs:parseInt(e.getAttribute("maxOccurs")),minOccurs:parseInt(e.getAttribute("minOccurs"))};
this.readChildNodes(e,i),t.push(i)},BoundingBoxData:function(e,t){t.boundingBoxData={},this.readChildNodes(e,t.boundingBoxData)
},CRS:function(e,t){t.CRSs||(t.CRSs={}),t.CRSs[this.getChildValue(e)]=!0},LiteralData:function(e,t){t.literalData={},this.readChildNodes(e,t.literalData)
},ComplexData:function(e,t){t.complexData={},this.readChildNodes(e,t.complexData)
},Default:function(e,t){t["default"]={},this.readChildNodes(e,t["default"])},Supported:function(e,t){t.supported={},this.readChildNodes(e,t.supported)
},Format:function(e,t){var i={};this.readChildNodes(e,i),t.formats||(t.formats={}),t.formats[i.mimeType]=!0
},MimeType:function(e,t){t.mimeType=this.getChildValue(e)}},ows:OpenLayers.Format.OWSCommon.v1_1_0.prototype.readers.ows},CLASS_NAME:"OpenLayers.Format.WPSDescribeProcess"}),OpenLayers.Format.WKT=OpenLayers.Class(OpenLayers.Format,{initialize:function(e){this.regExes={typeStr:/^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/,spaces:/\s+/,parenComma:/\)\s*,\s*\(/,doubleParenComma:/\)\s*\)\s*,\s*\(\s*\(/,trimParens:/^\s*\(?(.*?)\)?\s*$/},OpenLayers.Format.prototype.initialize.apply(this,[e])
},read:function(e){var t,i;if(e=e.replace(/[\n\r]/g," "),(i=this.regExes.typeStr.exec(e))&&(e=i[1].toLowerCase(),i=i[2],this.parse[e]&&(t=this.parse[e].apply(this,[i])),this.internalProjection&&this.externalProjection))if(t&&"OpenLayers.Feature.Vector"==t.CLASS_NAME)t.geometry.transform(this.externalProjection,this.internalProjection);
else if(t&&"geometrycollection"!=e&&"object"==typeof t)for(e=0,i=t.length;i>e;e++)t[e].geometry.transform(this.externalProjection,this.internalProjection);
return t},write:function(e){var t,i;e.constructor==Array?i=!0:(e=[e],i=!1);var r=[];
i&&r.push("GEOMETRYCOLLECTION(");for(var s=0,n=e.length;n>s;++s)i&&s>0&&r.push(","),t=e[s].geometry,r.push(this.extractGeometry(t));
return i&&r.push(")"),r.join("")},extractGeometry:function(e){var t=e.CLASS_NAME.split(".")[2].toLowerCase();
return this.extract[t]?(this.internalProjection&&this.externalProjection&&(e=e.clone(),e.transform(this.internalProjection,this.externalProjection)),("collection"==t?"GEOMETRYCOLLECTION":t.toUpperCase())+"("+this.extract[t].apply(this,[e])+")"):null
},extract:{point:function(e){return e.x+" "+e.y},multipoint:function(e){for(var t=[],i=0,r=e.components.length;r>i;++i)t.push("("+this.extract.point.apply(this,[e.components[i]])+")");
return t.join(",")},linestring:function(e){for(var t=[],i=0,r=e.components.length;r>i;++i)t.push(this.extract.point.apply(this,[e.components[i]]));
return t.join(",")},multilinestring:function(e){for(var t=[],i=0,r=e.components.length;r>i;++i)t.push("("+this.extract.linestring.apply(this,[e.components[i]])+")");
return t.join(",")},polygon:function(e){for(var t=[],i=0,r=e.components.length;r>i;++i)t.push("("+this.extract.linestring.apply(this,[e.components[i]])+")");
return t.join(",")},multipolygon:function(e){for(var t=[],i=0,r=e.components.length;r>i;++i)t.push("("+this.extract.polygon.apply(this,[e.components[i]])+")");
return t.join(",")},collection:function(e){for(var t=[],i=0,r=e.components.length;r>i;++i)t.push(this.extractGeometry.apply(this,[e.components[i]]));
return t.join(",")}},parse:{point:function(e){return e=OpenLayers.String.trim(e).split(this.regExes.spaces),new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(e[0],e[1]))
},multipoint:function(e){for(var t=OpenLayers.String.trim(e).split(","),i=[],r=0,s=t.length;s>r;++r)e=t[r].replace(this.regExes.trimParens,"$1"),i.push(this.parse.point.apply(this,[e]).geometry);
return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.MultiPoint(i))},linestring:function(e){e=OpenLayers.String.trim(e).split(",");
for(var t=[],i=0,r=e.length;r>i;++i)t.push(this.parse.point.apply(this,[e[i]]).geometry);
return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.LineString(t))},multilinestring:function(e){for(var t=OpenLayers.String.trim(e).split(this.regExes.parenComma),i=[],r=0,s=t.length;s>r;++r)e=t[r].replace(this.regExes.trimParens,"$1"),i.push(this.parse.linestring.apply(this,[e]).geometry);
return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.MultiLineString(i))},polygon:function(e){var t;
e=OpenLayers.String.trim(e).split(this.regExes.parenComma);for(var i=[],r=0,s=e.length;s>r;++r)t=e[r].replace(this.regExes.trimParens,"$1"),t=this.parse.linestring.apply(this,[t]).geometry,t=new OpenLayers.Geometry.LinearRing(t.components),i.push(t);
return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Polygon(i))},multipolygon:function(e){for(var t=OpenLayers.String.trim(e).split(this.regExes.doubleParenComma),i=[],r=0,s=t.length;s>r;++r)e=t[r].replace(this.regExes.trimParens,"$1"),i.push(this.parse.polygon.apply(this,[e]).geometry);
return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.MultiPolygon(i))},geometrycollection:function(e){e=e.replace(/,\s*([A-Za-z])/g,"|$1"),e=OpenLayers.String.trim(e).split("|");
for(var t=[],i=0,r=e.length;r>i;++i)t.push(OpenLayers.Format.WKT.prototype.read.apply(this,[e[i]]));
return t}},CLASS_NAME:"OpenLayers.Format.WKT"}),OpenLayers.WPSProcess=OpenLayers.Class({client:null,server:null,identifier:null,description:null,localWPS:"http://geoserver/wps",formats:null,chained:0,executeCallbacks:null,initialize:function(e){OpenLayers.Util.extend(this,e),this.executeCallbacks=[],this.formats={"application/wkt":new OpenLayers.Format.WKT,"application/json":new OpenLayers.Format.GeoJSON}
},describe:function(e){if(e=e||{},this.description){if(e.callback){var t=this.description;
window.setTimeout(function(){e.callback.call(e.scope,t)},0)}}else this.client.describeProcess(this.server,this.identifier,function(t){this.description||this.parseDescription(t),e.callback&&e.callback.call(e.scope,this.description)
},this)},configure:function(e){return this.describe({callback:function(){var t,i,r,s=this.description,n=e.inputs;
for(i=0,r=s.dataInputs.length;r>i;++i)t=s.dataInputs[i],this.setInputData(t,n[t.identifier]);
e.callback&&e.callback.call(e.scope)},scope:this}),this},execute:function(e){this.configure({inputs:e.inputs,callback:function(){var t=this,i=this.getOutputIndex(t.description.processOutputs,e.output);
t.setResponseForm({outputIndex:i}),function r(){OpenLayers.Util.removeItem(t.executeCallbacks,r),0!==t.chained?t.executeCallbacks.push(r):OpenLayers.Request.POST({url:t.client.servers[t.server].url,data:(new OpenLayers.Format.WPSExecute).write(t.description),success:function(r){var s=t.findMimeType(t.description.processOutputs[i].complexOutput.supported.formats);
r=t.formats[s].read(r.responseText),r instanceof OpenLayers.Feature.Vector&&(r=[r]),e.success&&(s={},s[e.output||"result"]=r,e.success.call(e.scope,s))
},scope:t})}()},scope:this})},output:function(e){return new OpenLayers.WPSProcess.ChainLink({process:this,output:e})
},parseDescription:function(e){e=this.client.servers[this.server],this.description=(new OpenLayers.Format.WPSDescribeProcess).read(e.processDescription[this.identifier]).processDescriptions[this.identifier]
},setInputData:function(e,t){if(delete e.data,delete e.reference,t instanceof OpenLayers.WPSProcess.ChainLink)++this.chained,e.reference={method:"POST",href:t.process.server===this.server?this.localWPS:this.client.servers[t.process.server].url},t.process.describe({callback:function(){--this.chained,this.chainProcess(e,t)
},scope:this});else{e.data={};var i=e.complexData;i?(i=this.findMimeType(i.supported.formats),e.data.complexData={mimeType:i,value:this.formats[i].write(this.toFeatures(t))}):e.data.literalData={value:t}
}},setResponseForm:function(e){e=e||{};var t=this.description.processOutputs[e.outputIndex||0];
this.description.responseForm={rawDataOutput:{identifier:t.identifier,mimeType:this.findMimeType(t.complexOutput.supported.formats,e.supportedFormats)}}
},getOutputIndex:function(e,t){var i;if(t){for(var r=e.length-1;r>=0;--r)if(e[r].identifier===t){i=r;
break}}else i=0;return i},chainProcess:function(e,t){var i=this.getOutputIndex(t.process.description.processOutputs,t.output);
e.reference.mimeType=this.findMimeType(e.complexData.supported.formats,t.process.description.processOutputs[i].complexOutput.supported.formats);
var r={};for(r[e.reference.mimeType]=!0,t.process.setResponseForm({outputIndex:i,supportedFormats:r}),e.reference.body=t.process.description;0<this.executeCallbacks.length;)this.executeCallbacks[0]()
},toFeatures:function(e){var t=OpenLayers.Util.isArray(e);t||(e=[e]);for(var i,r=Array(e.length),s=0,n=e.length;n>s;++s)i=e[s],r[s]=i instanceof OpenLayers.Feature.Vector?i:new OpenLayers.Feature.Vector(i);
return t?r:r[0]},findMimeType:function(e,t){t=t||this.formats;for(var i in e)if(i in t)return i
},CLASS_NAME:"OpenLayers.WPSProcess"}),OpenLayers.WPSProcess.ChainLink=OpenLayers.Class({process:null,output:null,initialize:function(e){OpenLayers.Util.extend(this,e)
},CLASS_NAME:"OpenLayers.WPSProcess.ChainLink"}),OpenLayers.WPSClient=OpenLayers.Class({servers:null,version:"1.0.0",lazy:!1,events:null,initialize:function(e){OpenLayers.Util.extend(this,e),this.events=new OpenLayers.Events(this),this.servers={};
for(var t in e.servers)this.servers[t]="string"==typeof e.servers[t]?{url:e.servers[t],version:this.version,processDescription:{}}:e.servers[t]
},execute:function(e){this.getProcess(e.server,e.process).execute({inputs:e.inputs,success:e.success,scope:e.scope})
},getProcess:function(e,t){var i=new OpenLayers.WPSProcess({client:this,server:e,identifier:t});
return this.lazy||i.describe(),i},describeProcess:function(e,t,i,r){var s=this.servers[e];
s.processDescription[t]?window.setTimeout(function(){i.call(r,s.processDescription[t])
},0):t in s.processDescription?this.events.register("describeprocess",this,function n(e){e.identifier===t&&(this.events.unregister("describeprocess",this,n),i.call(r,e.raw))
}):(s.processDescription[t]=null,OpenLayers.Request.GET({url:s.url,params:{SERVICE:"WPS",VERSION:s.version,REQUEST:"DescribeProcess",IDENTIFIER:t},success:function(e){s.processDescription[t]=e.responseText,this.events.triggerEvent("describeprocess",{identifier:t,raw:e.responseText})
},scope:this}))},destroy:function(){this.events.destroy(),this.servers=this.events=null
},CLASS_NAME:"OpenLayers.WPSClient"}),OpenLayers.Format.CSWGetRecords.v2_0_2=OpenLayers.Class(OpenLayers.Format.XML,{namespaces:{csw:"http://www.opengis.net/cat/csw/2.0.2",dc:"http://purl.org/dc/elements/1.1/",dct:"http://purl.org/dc/terms/",gmd:"http://www.isotc211.org/2005/gmd",geonet:"http://www.fao.org/geonetwork",ogc:"http://www.opengis.net/ogc",ows:"http://www.opengis.net/ows",xlink:"http://www.w3.org/1999/xlink",xsi:"http://www.w3.org/2001/XMLSchema-instance"},defaultPrefix:"csw",version:"2.0.2",schemaLocation:"http://www.opengis.net/cat/csw/2.0.2 http://schemas.opengis.net/csw/2.0.2/CSW-discovery.xsd",requestId:null,resultType:null,outputFormat:null,outputSchema:null,startPosition:null,maxRecords:null,DistributedSearch:null,ResponseHandler:null,Query:null,regExes:{trimSpace:/^\s*|\s*$/g,removeSpace:/\s*/g,splitSpace:/\s+/,trimComma:/\s*,\s*/g},initialize:function(e){OpenLayers.Format.XML.prototype.initialize.apply(this,[e])
},read:function(e){"string"==typeof e&&(e=OpenLayers.Format.XML.prototype.read.apply(this,[e])),e&&9==e.nodeType&&(e=e.documentElement);
var t={};return this.readNode(e,t),t},readers:{csw:{GetRecordsResponse:function(e,t){t.records=[],this.readChildNodes(e,t);
var i=this.getAttributeNS(e,"","version");""!=i&&(t.version=i)},RequestId:function(e,t){t.RequestId=this.getChildValue(e)
},SearchStatus:function(e,t){t.SearchStatus={};var i=this.getAttributeNS(e,"","timestamp");
""!=i&&(t.SearchStatus.timestamp=i)},SearchResults:function(e,t){this.readChildNodes(e,t);
for(var i=e.attributes,r={},s=0,n=i.length;n>s;++s)r[i[s].name]="numberOfRecordsMatched"==i[s].name||"numberOfRecordsReturned"==i[s].name||"nextRecord"==i[s].name?parseInt(i[s].nodeValue):i[s].nodeValue;
t.SearchResults=r},SummaryRecord:function(e,t){var i={type:"SummaryRecord"};this.readChildNodes(e,i),t.records.push(i)
},BriefRecord:function(e,t){var i={type:"BriefRecord"};this.readChildNodes(e,i),t.records.push(i)
},DCMIRecord:function(e,t){var i={type:"DCMIRecord"};this.readChildNodes(e,i),t.records.push(i)
},Record:function(e,t){var i={type:"Record"};this.readChildNodes(e,i),t.records.push(i)
},"*":function(e,t){var i=e.localName||e.nodeName.split(":").pop();t[i]=this.getChildValue(e)
}},geonet:{info:function(e,t){var i={};this.readChildNodes(e,i),t.gninfo=i}},dc:{"*":function(e,t){var i=e.localName||e.nodeName.split(":").pop();
OpenLayers.Util.isArray(t[i])||(t[i]=[]);for(var r={},s=e.attributes,n=0,a=s.length;a>n;++n)r[s[n].name]=s[n].nodeValue;
r.value=this.getChildValue(e),""!=r.value&&t[i].push(r)}},dct:{"*":function(e,t){var i=e.localName||e.nodeName.split(":").pop();
OpenLayers.Util.isArray(t[i])||(t[i]=[]),t[i].push(this.getChildValue(e))}},ows:OpenLayers.Util.applyDefaults({BoundingBox:function(e,t){t.bounds&&(t.BoundingBox=[{crs:t.projection,value:[t.bounds.left,t.bounds.bottom,t.bounds.right,t.bounds.top]}],delete t.projection,delete t.bounds),OpenLayers.Format.OWSCommon.v1_0_0.prototype.readers.ows.BoundingBox.apply(this,arguments)
}},OpenLayers.Format.OWSCommon.v1_0_0.prototype.readers.ows)},write:function(e){return e=this.writeNode("csw:GetRecords",e),e.setAttribute("xmlns:gmd",this.namespaces.gmd),OpenLayers.Format.XML.prototype.write.apply(this,[e])
},writers:{csw:{GetRecords:function(e){e||(e={});var t=this.createElementNSPlus("csw:GetRecords",{attributes:{service:"CSW",version:this.version,requestId:e.requestId||this.requestId,resultType:e.resultType||this.resultType,outputFormat:e.outputFormat||this.outputFormat,outputSchema:e.outputSchema||this.outputSchema,startPosition:e.startPosition||this.startPosition,maxRecords:e.maxRecords||this.maxRecords}});
(e.DistributedSearch||this.DistributedSearch)&&this.writeNode("csw:DistributedSearch",e.DistributedSearch||this.DistributedSearch,t);
var i=e.ResponseHandler||this.ResponseHandler;if(OpenLayers.Util.isArray(i)&&0<i.length)for(var r=0,s=i.length;s>r;r++)this.writeNode("csw:ResponseHandler",i[r],t);
return this.writeNode("Query",e.Query||this.Query,t),t},DistributedSearch:function(e){return this.createElementNSPlus("csw:DistributedSearch",{attributes:{hopCount:e.hopCount}})
},ResponseHandler:function(e){return this.createElementNSPlus("csw:ResponseHandler",{value:e.value})
},Query:function(e){e||(e={});var t=this.createElementNSPlus("csw:Query",{attributes:{typeNames:e.typeNames||"csw:Record"}}),i=e.ElementName;
if(OpenLayers.Util.isArray(i)&&0<i.length)for(var r=0,s=i.length;s>r;r++)this.writeNode("csw:ElementName",i[r],t);
else this.writeNode("csw:ElementSetName",e.ElementSetName||{value:"summary"},t);return e.Constraint&&this.writeNode("csw:Constraint",e.Constraint,t),e.SortBy&&this.writeNode("ogc:SortBy",e.SortBy,t),t
},ElementName:function(e){return this.createElementNSPlus("csw:ElementName",{value:e.value})
},ElementSetName:function(e){return this.createElementNSPlus("csw:ElementSetName",{attributes:{typeNames:e.typeNames},value:e.value})
},Constraint:function(e){var t=this.createElementNSPlus("csw:Constraint",{attributes:{version:e.version}});
if(e.Filter){var i=new OpenLayers.Format.Filter({version:e.version});t.appendChild(i.write(e.Filter))
}else e.CqlText&&(e=this.createElementNSPlus("CqlText",{value:e.CqlText.value}),t.appendChild(e));
return t}},ogc:OpenLayers.Format.Filter.v1_1_0.prototype.writers.ogc},CLASS_NAME:"OpenLayers.Format.CSWGetRecords.v2_0_2"}),OpenLayers.Marker.Box=OpenLayers.Class(OpenLayers.Marker,{bounds:null,div:null,initialize:function(e,t,i){this.bounds=e,this.div=OpenLayers.Util.createDiv(),this.div.style.overflow="hidden",this.events=new OpenLayers.Events(this,this.div),this.setBorder(t,i)
},destroy:function(){this.div=this.bounds=null,OpenLayers.Marker.prototype.destroy.apply(this,arguments)
},setBorder:function(e,t){e||(e="red"),t||(t=2),this.div.style.border=t+"px solid "+e
},draw:function(e,t){return OpenLayers.Util.modifyDOMElement(this.div,null,e,t),this.div
},onScreen:function(){var e=!1;return this.map&&(e=this.map.getExtent().containsBounds(this.bounds,!0,!0)),e
},display:function(e){this.div.style.display=e?"":"none"},CLASS_NAME:"OpenLayers.Marker.Box"}),OpenLayers.Format.Text=OpenLayers.Class(OpenLayers.Format,{defaultStyle:null,extractStyles:!0,initialize:function(e){e=e||{},!1!==e.extractStyles&&(e.defaultStyle={externalGraphic:OpenLayers.Util.getImageLocation("marker.png"),graphicWidth:21,graphicHeight:25,graphicXOffset:-10.5,graphicYOffset:-12.5}),OpenLayers.Format.prototype.initialize.apply(this,[e])
},read:function(e){e=e.split("\n");for(var t,i=[],r=0;r<e.length-1;r++){var s=e[r].replace(/^\s*/,"").replace(/\s*$/,"");
if("#"!=s.charAt(0))if(t){for(var s=s.split("	"),n=new OpenLayers.Geometry.Point(0,0),a={},o=this.defaultStyle?OpenLayers.Util.applyDefaults({},this.defaultStyle):null,l=!1,h=0;h<s.length;h++)if(s[h])if("point"==t[h])l=s[h].split(","),n.y=parseFloat(l[0]),n.x=parseFloat(l[1]),l=!0;
else if("lat"==t[h])n.y=parseFloat(s[h]),l=!0;else if("lon"==t[h])n.x=parseFloat(s[h]),l=!0;
else if("title"==t[h])a.title=s[h];else if("image"==t[h]||"icon"==t[h]&&o)o.externalGraphic=s[h];
else if("iconSize"==t[h]&&o){var p=s[h].split(",");o.graphicWidth=parseFloat(p[0]),o.graphicHeight=parseFloat(p[1])
}else"iconOffset"==t[h]&&o?(p=s[h].split(","),o.graphicXOffset=parseFloat(p[0]),o.graphicYOffset=parseFloat(p[1])):"description"==t[h]?a.description=s[h]:"overflow"==t[h]?a.overflow=s[h]:a[t[h]]=s[h];
l&&(this.internalProjection&&this.externalProjection&&n.transform(this.externalProjection,this.internalProjection),s=new OpenLayers.Feature.Vector(n,a,o),i.push(s))
}else t=s.split("	")}return i},CLASS_NAME:"OpenLayers.Format.Text"}),OpenLayers.Layer.Text=OpenLayers.Class(OpenLayers.Layer.Markers,{location:null,features:null,formatOptions:null,selectedFeature:null,initialize:function(){OpenLayers.Layer.Markers.prototype.initialize.apply(this,arguments),this.features=[]
},destroy:function(){OpenLayers.Layer.Markers.prototype.destroy.apply(this,arguments),this.clearFeatures(),this.features=null
},loadText:function(){this.loaded||null==this.location||(this.events.triggerEvent("loadstart"),OpenLayers.Request.GET({url:this.location,success:this.parseData,failure:function(){this.events.triggerEvent("loadend")
},scope:this}),this.loaded=!0)},moveTo:function(){OpenLayers.Layer.Markers.prototype.moveTo.apply(this,arguments),this.visibility&&!this.loaded&&this.loadText()
},parseData:function(e){e=e.responseText;var t={};OpenLayers.Util.extend(t,this.formatOptions),this.map&&!this.projection.equals(this.map.getProjectionObject())&&(t.externalProjection=this.projection,t.internalProjection=this.map.getProjectionObject()),e=new OpenLayers.Format.Text(t).read(e);
for(var t=0,i=e.length;i>t;t++){var r,s,n,a={},o=e[t];r=new OpenLayers.LonLat(o.geometry.x,o.geometry.y),o.style.graphicWidth&&o.style.graphicHeight&&(s=new OpenLayers.Size(o.style.graphicWidth,o.style.graphicHeight)),void 0!==o.style.graphicXOffset&&void 0!==o.style.graphicYOffset&&(n=new OpenLayers.Pixel(o.style.graphicXOffset,o.style.graphicYOffset)),null!=o.style.externalGraphic?a.icon=new OpenLayers.Icon(o.style.externalGraphic,s,n):(a.icon=OpenLayers.Marker.defaultIcon(),null!=s&&a.icon.setSize(s)),null!=o.attributes.title&&null!=o.attributes.description&&(a.popupContentHTML="<h2>"+o.attributes.title+"</h2><p>"+o.attributes.description+"</p>"),a.overflow=o.attributes.overflow||"auto",a=new OpenLayers.Feature(this,r,a),this.features.push(a),r=a.createMarker(),null!=o.attributes.title&&null!=o.attributes.description&&r.events.register("click",a,this.markerClick),this.addMarker(r)
}this.events.triggerEvent("loadend")},markerClick:function(e){var t=this==this.layer.selectedFeature;
this.layer.selectedFeature=t?null:this;for(var i=0,r=this.layer.map.popups.length;r>i;i++)this.layer.map.removePopup(this.layer.map.popups[i]);
t||this.layer.map.addPopup(this.createPopup()),OpenLayers.Event.stop(e)},clearFeatures:function(){if(null!=this.features)for(;0<this.features.length;){var e=this.features[0];
OpenLayers.Util.removeItem(this.features,e),e.destroy()}},CLASS_NAME:"OpenLayers.Layer.Text"}),OpenLayers.Handler.RegularPolygon=OpenLayers.Class(OpenLayers.Handler.Drag,{sides:4,radius:null,snapAngle:null,snapToggle:"shiftKey",layerOptions:null,persist:!1,irregular:!1,citeCompliant:!1,angle:null,fixedRadius:!1,feature:null,layer:null,origin:null,initialize:function(e,t,i){i&&i.layerOptions&&i.layerOptions.styleMap||(this.style=OpenLayers.Util.extend(OpenLayers.Feature.Vector.style["default"],{})),OpenLayers.Handler.Drag.prototype.initialize.apply(this,[e,t,i]),this.options=i?i:{}
},setOptions:function(e){OpenLayers.Util.extend(this.options,e),OpenLayers.Util.extend(this,e)
},activate:function(){var e=!1;return OpenLayers.Handler.Drag.prototype.activate.apply(this,arguments)&&(e=OpenLayers.Util.extend({displayInLayerSwitcher:!1,calculateInRange:OpenLayers.Function.True,wrapDateLine:this.citeCompliant},this.layerOptions),this.layer=new OpenLayers.Layer.Vector(this.CLASS_NAME,e),this.map.addLayer(this.layer),e=!0),e
},deactivate:function(){var e=!1;return OpenLayers.Handler.Drag.prototype.deactivate.apply(this,arguments)&&(this.dragging&&this.cancel(),null!=this.layer.map&&(this.layer.destroy(!1),this.feature&&this.feature.destroy()),this.feature=this.layer=null,e=!0),e
},down:function(e){this.fixedRadius=!!this.radius,e=this.layer.getLonLatFromViewPortPx(e.xy),this.origin=new OpenLayers.Geometry.Point(e.lon,e.lat),(!this.fixedRadius||this.irregular)&&(this.radius=this.map.getResolution()),this.persist&&this.clear(),this.feature=new OpenLayers.Feature.Vector,this.createGeometry(),this.callback("create",[this.origin,this.feature]),this.layer.addFeatures([this.feature],{silent:!0}),this.layer.drawFeature(this.feature,this.style)
},move:function(e){var t=this.layer.getLonLatFromViewPortPx(e.xy),t=new OpenLayers.Geometry.Point(t.lon,t.lat);
if(this.irregular?(e=Math.sqrt(2)*Math.abs(t.y-this.origin.y)/2,this.radius=Math.max(this.map.getResolution()/2,e)):this.fixedRadius?this.origin=t:(this.calculateAngle(t,e),this.radius=Math.max(this.map.getResolution()/2,t.distanceTo(this.origin))),this.modifyGeometry(),this.irregular){e=t.x-this.origin.x;
var i,t=t.y-this.origin.y;i=0==t?e/(this.radius*Math.sqrt(2)):e/t,this.feature.geometry.resize(1,this.origin,i),this.feature.geometry.move(e/2,t/2)
}this.layer.drawFeature(this.feature,this.style)},up:function(e){this.finalize(),this.start==this.last&&this.callback("done",[e.xy])
},out:function(){this.finalize()},createGeometry:function(){this.angle=Math.PI*(1/this.sides-.5),this.snapAngle&&(this.angle+=this.snapAngle*(Math.PI/180)),this.feature.geometry=OpenLayers.Geometry.Polygon.createRegularPolygon(this.origin,this.radius,this.sides,this.snapAngle)
},modifyGeometry:function(){var e,t,i=this.feature.geometry.components[0];i.components.length!=this.sides+1&&(this.createGeometry(),i=this.feature.geometry.components[0]);
for(var r=0;r<this.sides;++r)t=i.components[r],e=this.angle+2*r*Math.PI/this.sides,t.x=this.origin.x+this.radius*Math.cos(e),t.y=this.origin.y+this.radius*Math.sin(e),t.clearBounds()
},calculateAngle:function(e,t){var i=Math.atan2(e.y-this.origin.y,e.x-this.origin.x);
if(this.snapAngle&&this.snapToggle&&!t[this.snapToggle]){var r=Math.PI/180*this.snapAngle;
this.angle=Math.round(i/r)*r}else this.angle=i},cancel:function(){this.callback("cancel",null),this.finalize()
},finalize:function(){this.origin=null,this.radius=this.options.radius},clear:function(){this.layer&&(this.layer.renderer.clear(),this.layer.destroyFeatures())
},callback:function(e){this.callbacks[e]&&this.callbacks[e].apply(this.control,[this.feature.geometry.clone()]),this.persist||"done"!=e&&"cancel"!=e||this.clear()
},CLASS_NAME:"OpenLayers.Handler.RegularPolygon"}),OpenLayers.Control.SLDSelect=OpenLayers.Class(OpenLayers.Control,{clearOnDeactivate:!1,layers:null,callbacks:null,selectionSymbolizer:{Polygon:{fillColor:"#FF0000",stroke:!1},Line:{strokeColor:"#FF0000",strokeWidth:2},Point:{graphicName:"square",fillColor:"#FF0000",pointRadius:5}},layerOptions:null,sketchStyle:null,wfsCache:{},layerCache:{},initialize:function(e,t){OpenLayers.Control.prototype.initialize.apply(this,[t]),this.callbacks=OpenLayers.Util.extend({done:this.select,click:this.select},this.callbacks),this.handlerOptions=this.handlerOptions||{},this.layerOptions=OpenLayers.Util.applyDefaults(this.layerOptions,{displayInLayerSwitcher:!1,tileOptions:{maxGetUrlLength:2048}}),this.sketchStyle&&(this.handlerOptions.layerOptions=OpenLayers.Util.applyDefaults(this.handlerOptions.layerOptions,{styleMap:new OpenLayers.StyleMap({"default":this.sketchStyle})})),this.handler=new e(this,this.callbacks,this.handlerOptions)
},destroy:function(){for(var e in this.layerCache)delete this.layerCache[e];for(e in this.wfsCache)delete this.wfsCache[e];
OpenLayers.Control.prototype.destroy.apply(this,arguments)},coupleLayerVisiblity:function(e){this.setVisibility(e.object.getVisibility())
},createSelectionLayer:function(e){var t;return this.layerCache[e.id]?t=this.layerCache[e.id]:(t=new OpenLayers.Layer.WMS(e.name,e.url,e.params,OpenLayers.Util.applyDefaults(this.layerOptions,e.getOptions())),this.layerCache[e.id]=t,!1===this.layerOptions.displayInLayerSwitcher&&e.events.on({visibilitychanged:this.coupleLayerVisiblity,scope:t}),this.map.addLayer(t)),t
},createSLD:function(e,t,i){for(var r={version:"1.0.0",namedLayers:{}},s=(""+e.params.LAYERS).split(","),n=0,a=s.length;a>n;n++){var o=s[n];
r.namedLayers[o]={name:o,userStyles:[]};var l=this.selectionSymbolizer,h=i[n];0<=h.type.indexOf("Polygon")?l={Polygon:this.selectionSymbolizer.Polygon}:0<=h.type.indexOf("LineString")?l={Line:this.selectionSymbolizer.Line}:0<=h.type.indexOf("Point")&&(l={Point:this.selectionSymbolizer.Point}),r.namedLayers[o].userStyles.push({name:"default",rules:[new OpenLayers.Rule({symbolizer:l,filter:t[n],maxScaleDenominator:e.options.minScale})]})
}return new OpenLayers.Format.SLD({srsName:this.map.getProjection()}).write(r)},parseDescribeLayer:function(e){var t=new OpenLayers.Format.WMSDescribeLayer,i=e.responseXML;
i&&i.documentElement||(i=e.responseText),e=t.read(i);for(var t=[],i=null,r=0,s=e.length;s>r;r++)"WFS"==e[r].owsType&&(t.push(e[r].typeName),i=e[r].owsURL);
OpenLayers.Request.GET({url:i,params:{SERVICE:"WFS",TYPENAME:t.toString(),REQUEST:"DescribeFeatureType",VERSION:"1.0.0"},callback:function(e){var t=new OpenLayers.Format.WFSDescribeFeatureType,i=e.responseXML;
i&&i.documentElement||(i=e.responseText),e=t.read(i),this.control.wfsCache[this.layer.id]=e,this.control._queue&&this.control.applySelection()
},scope:this})},getGeometryAttributes:function(e){var t=[];e=this.wfsCache[e.id];
for(var i=0,r=e.featureTypes.length;r>i;i++)for(var s=e.featureTypes[i].properties,n=0,a=s.length;a>n;n++){var o=s[n],l=o.type;
(0<=l.indexOf("LineString")||0<=l.indexOf("GeometryAssociationType")||0<=l.indexOf("GeometryPropertyType")||0<=l.indexOf("Point")||0<=l.indexOf("Polygon"))&&t.push(o)
}return t},activate:function(){var e=OpenLayers.Control.prototype.activate.call(this);
if(e)for(var t=0,i=this.layers.length;i>t;t++){var r=this.layers[t];r&&!this.wfsCache[r.id]&&OpenLayers.Request.GET({url:r.url,params:{SERVICE:"WMS",VERSION:r.params.VERSION,LAYERS:r.params.LAYERS,REQUEST:"DescribeLayer"},callback:this.parseDescribeLayer,scope:{layer:r,control:this}})
}return e},deactivate:function(){var e=OpenLayers.Control.prototype.deactivate.call(this);
if(e)for(var t=0,i=this.layers.length;i>t;t++){var r=this.layers[t];if(r&&!0===this.clearOnDeactivate){var s=this.layerCache,n=s[r.id];
n&&(r.events.un({visibilitychanged:this.coupleLayerVisiblity,scope:n}),n.destroy(),delete s[r.id])
}}return e},setLayers:function(e){this.active?(this.deactivate(),this.layers=e,this.activate()):this.layers=e
},createFilter:function(e,t){var i=null;return this.handler instanceof OpenLayers.Handler.RegularPolygon?i=!0===this.handler.irregular?new OpenLayers.Filter.Spatial({type:OpenLayers.Filter.Spatial.BBOX,property:e.name,value:t.getBounds()}):new OpenLayers.Filter.Spatial({type:OpenLayers.Filter.Spatial.INTERSECTS,property:e.name,value:t}):this.handler instanceof OpenLayers.Handler.Polygon?i=new OpenLayers.Filter.Spatial({type:OpenLayers.Filter.Spatial.INTERSECTS,property:e.name,value:t}):this.handler instanceof OpenLayers.Handler.Path?i=0<=e.type.indexOf("Point")?new OpenLayers.Filter.Spatial({type:OpenLayers.Filter.Spatial.DWITHIN,property:e.name,distance:.01*this.map.getExtent().getWidth(),distanceUnits:this.map.getUnits(),value:t}):new OpenLayers.Filter.Spatial({type:OpenLayers.Filter.Spatial.INTERSECTS,property:e.name,value:t}):this.handler instanceof OpenLayers.Handler.Click&&(i=0<=e.type.indexOf("Polygon")?new OpenLayers.Filter.Spatial({type:OpenLayers.Filter.Spatial.INTERSECTS,property:e.name,value:t}):new OpenLayers.Filter.Spatial({type:OpenLayers.Filter.Spatial.DWITHIN,property:e.name,distance:.01*this.map.getExtent().getWidth(),distanceUnits:this.map.getUnits(),value:t})),i
},select:function(e){this._queue=function(){for(var t=0,i=this.layers.length;i>t;t++){for(var r=this.layers[t],s=this.getGeometryAttributes(r),n=[],a=0,o=s.length;o>a;a++){var l=s[a];
if(null!==l){if(!(e instanceof OpenLayers.Geometry)){var h=this.map.getLonLatFromPixel(e.xy);
e=new OpenLayers.Geometry.Point(h.lon,h.lat)}l=this.createFilter(l,e),null!==l&&n.push(l)
}}a=this.createSelectionLayer(r),this.events.triggerEvent("selected",{layer:r,filters:n}),r=this.createSLD(r,n,s),a.mergeNewParams({SLD_BODY:r}),delete this._queue
}},this.applySelection()},applySelection:function(){for(var e=!0,t=0,i=this.layers.length;i>t;t++)if(!this.wfsCache[this.layers[t].id]){e=!1;
break}e&&this._queue.call(this)},CLASS_NAME:"OpenLayers.Control.SLDSelect"}),OpenLayers.Control.Scale=OpenLayers.Class(OpenLayers.Control,{element:null,geodesic:!1,initialize:function(e,t){OpenLayers.Control.prototype.initialize.apply(this,[t]),this.element=OpenLayers.Util.getElement(e)
},draw:function(){return OpenLayers.Control.prototype.draw.apply(this,arguments),this.element||(this.element=document.createElement("div"),this.div.appendChild(this.element)),this.map.events.register("moveend",this,this.updateScale),this.updateScale(),this.div
},updateScale:function(){var e;if(!0===this.geodesic){if(!this.map.getUnits())return;
e=OpenLayers.INCHES_PER_UNIT,e=(this.map.getGeodesicPixelSize().w||1e-6)*e.km*OpenLayers.DOTS_PER_INCH
}else e=this.map.getScale();e&&(e=e>=9500&&95e4>=e?Math.round(e/1e3)+"K":e>=95e4?Math.round(e/1e6)+"M":Math.round(e),this.element.innerHTML=OpenLayers.i18n("Scale = 1 : ${scaleDenom}",{scaleDenom:e}))
},CLASS_NAME:"OpenLayers.Control.Scale"}),OpenLayers.Layer.MapGuide=OpenLayers.Class(OpenLayers.Layer.Grid,{isBaseLayer:!0,useHttpTile:!1,singleTile:!1,useOverlay:!1,useAsyncOverlay:!0,TILE_PARAMS:{operation:"GETTILEIMAGE",version:"1.2.0"},SINGLE_TILE_PARAMS:{operation:"GETMAPIMAGE",format:"PNG",locale:"en",clip:"1",version:"1.0.0"},OVERLAY_PARAMS:{operation:"GETDYNAMICMAPOVERLAYIMAGE",format:"PNG",locale:"en",clip:"1",version:"2.0.0"},FOLDER_PARAMS:{tileColumnsPerFolder:30,tileRowsPerFolder:30,format:"png",querystring:null},defaultSize:new OpenLayers.Size(300,300),tileOriginCorner:"tl",initialize:function(e,t,i,r){OpenLayers.Layer.Grid.prototype.initialize.apply(this,arguments),(null==r||null==r.isBaseLayer)&&(this.isBaseLayer="true"!=this.transparent&&1!=this.transparent),r&&null!=r.useOverlay&&(this.useOverlay=r.useOverlay),this.singleTile?this.useOverlay?(OpenLayers.Util.applyDefaults(this.params,this.OVERLAY_PARAMS),this.useAsyncOverlay||(this.params.version="1.0.0")):OpenLayers.Util.applyDefaults(this.params,this.SINGLE_TILE_PARAMS):(this.useHttpTile?OpenLayers.Util.applyDefaults(this.params,this.FOLDER_PARAMS):OpenLayers.Util.applyDefaults(this.params,this.TILE_PARAMS),this.setTileSize(this.defaultSize))
},clone:function(e){return null==e&&(e=new OpenLayers.Layer.MapGuide(this.name,this.url,this.params,this.getOptions())),e=OpenLayers.Layer.Grid.prototype.clone.apply(this,[e])
},getURL:function(e){var t;t=e.getCenterLonLat();var i=this.map.getSize();return this.singleTile?(e={setdisplaydpi:OpenLayers.DOTS_PER_INCH,setdisplayheight:i.h*this.ratio,setdisplaywidth:i.w*this.ratio,setviewcenterx:t.lon,setviewcentery:t.lat,setviewscale:this.map.getScale()},this.useOverlay&&!this.useAsyncOverlay&&(t={},t=OpenLayers.Util.extend(t,e),t.operation="GETVISIBLEMAPEXTENT",t.version="1.0.0",t.session=this.params.session,t.mapName=this.params.mapName,t.format="text/xml",t=this.getFullRequestString(t),OpenLayers.Request.GET({url:t,async:!1})),t=this.getFullRequestString(e)):(i=this.map.getResolution(),t=Math.floor((e.left-this.maxExtent.left)/i),t=Math.round(t/this.tileSize.w),e=Math.floor((this.maxExtent.top-e.top)/i),e=Math.round(e/this.tileSize.h),t=this.useHttpTile?this.getImageFilePath({tilecol:t,tilerow:e,scaleindex:this.resolutions.length-this.map.zoom-1}):this.getFullRequestString({tilecol:t,tilerow:e,scaleindex:this.resolutions.length-this.map.zoom-1})),t
},getFullRequestString:function(e,t){var i=null==t?this.url:t;"object"==typeof i&&(i=i[Math.floor(Math.random()*i.length)]);
var r,s=i,n=OpenLayers.Util.extend({},this.params),n=OpenLayers.Util.extend(n,e),a=OpenLayers.Util.upperCaseObject(OpenLayers.Util.getParameters(i));
for(r in n)r.toUpperCase()in a&&delete n[r];return n=OpenLayers.Util.getParameterString(n),n=n.replace(/,/g,"+"),""!=n&&(a=i.charAt(i.length-1),s="&"==a||"?"==a?s+n:-1==i.indexOf("?")?s+("?"+n):s+("&"+n)),s
},getImageFilePath:function(e,t){var i=null==t?this.url:t;"object"==typeof i&&(i=i[Math.floor(Math.random()*i.length)]);
var r="",s="";return 0>e.tilerow&&(r="-"),r=0==e.tilerow?r+"0":r+Math.floor(Math.abs(e.tilerow/this.params.tileRowsPerFolder))*this.params.tileRowsPerFolder,0>e.tilecol&&(s="-"),s=0==e.tilecol?s+"0":s+Math.floor(Math.abs(e.tilecol/this.params.tileColumnsPerFolder))*this.params.tileColumnsPerFolder,r="/S"+Math.floor(e.scaleindex)+"/"+this.params.basemaplayergroupname+"/R"+r+"/C"+s+"/"+e.tilerow%this.params.tileRowsPerFolder+"_"+e.tilecol%this.params.tileColumnsPerFolder+"."+this.params.format,this.params.querystring&&(r+="?"+this.params.querystring),i+r
},CLASS_NAME:"OpenLayers.Layer.MapGuide"}),OpenLayers.Control.Measure=OpenLayers.Class(OpenLayers.Control,{callbacks:null,displaySystem:"metric",geodesic:!1,displaySystemUnits:{geographic:["dd"],english:["mi","ft","in"],metric:["km","m"]},partialDelay:300,delayedTrigger:null,persist:!1,immediate:!1,initialize:function(e,t){OpenLayers.Control.prototype.initialize.apply(this,[t]);
var i={done:this.measureComplete,point:this.measurePartial};this.immediate&&(i.modify=this.measureImmediate),this.callbacks=OpenLayers.Util.extend(i,this.callbacks),this.handlerOptions=OpenLayers.Util.extend({persist:this.persist},this.handlerOptions),this.handler=new e(this,this.callbacks,this.handlerOptions)
},deactivate:function(){return this.cancelDelay(),OpenLayers.Control.prototype.deactivate.apply(this,arguments)
},cancel:function(){this.cancelDelay(),this.handler.cancel()},setImmediate:function(e){(this.immediate=e)?this.callbacks.modify=this.measureImmediate:delete this.callbacks.modify
},updateHandler:function(e,t){var i=this.active;i&&this.deactivate(),this.handler=new e(this,this.callbacks,t),i&&this.activate()
},measureComplete:function(e){this.cancelDelay(),this.measure(e,"measure")},measurePartial:function(e,t){this.cancelDelay(),t=t.clone(),this.handler.freehandMode(this.handler.evt)?this.measure(t,"measurepartial"):this.delayedTrigger=window.setTimeout(OpenLayers.Function.bind(function(){this.delayedTrigger=null,this.measure(t,"measurepartial")
},this),this.partialDelay)},measureImmediate:function(e,t,i){i&&!this.handler.freehandMode(this.handler.evt)&&(this.cancelDelay(),this.measure(t.geometry,"measurepartial"))
},cancelDelay:function(){null!==this.delayedTrigger&&(window.clearTimeout(this.delayedTrigger),this.delayedTrigger=null)
},measure:function(e,t){var i,r;-1<e.CLASS_NAME.indexOf("LineString")?(i=this.getBestLength(e),r=1):(i=this.getBestArea(e),r=2),this.events.triggerEvent(t,{measure:i[0],units:i[1],order:r,geometry:e})
},getBestArea:function(e){for(var t,i,r=this.displaySystemUnits[this.displaySystem],s=0,n=r.length;n>s&&(t=r[s],i=this.getArea(e,t),!(i>1));++s);return[i,t]
},getArea:function(e,t){var i,r;this.geodesic?(i=e.getGeodesicArea(this.map.getProjectionObject()),r="m"):(i=e.getArea(),r=this.map.getUnits());
var s=OpenLayers.INCHES_PER_UNIT[t];return s&&(i*=Math.pow(OpenLayers.INCHES_PER_UNIT[r]/s,2)),i
},getBestLength:function(e){for(var t,i,r=this.displaySystemUnits[this.displaySystem],s=0,n=r.length;n>s&&(t=r[s],i=this.getLength(e,t),!(i>1));++s);return[i,t]
},getLength:function(e,t){var i,r;this.geodesic?(i=e.getGeodesicLength(this.map.getProjectionObject()),r="m"):(i=e.getLength(),r=this.map.getUnits());
var s=OpenLayers.INCHES_PER_UNIT[t];return s&&(i*=OpenLayers.INCHES_PER_UNIT[r]/s),i
},CLASS_NAME:"OpenLayers.Control.Measure"}),OpenLayers.Format.WMC.v1_0_0=OpenLayers.Class(OpenLayers.Format.WMC.v1,{VERSION:"1.0.0",schemaLocation:"http://www.opengis.net/context http://schemas.opengis.net/context/1.0.0/context.xsd",initialize:function(e){OpenLayers.Format.WMC.v1.prototype.initialize.apply(this,[e])
},read_wmc_SRS:function(e,t){var i=this.getChildValue(t);"object"!=typeof e.projections&&(e.projections={});
for(var i=i.split(/ +/),r=0,s=i.length;s>r;r++)e.projections[i[r]]=!0},write_wmc_Layer:function(e){var t=OpenLayers.Format.WMC.v1.prototype.write_wmc_Layer.apply(this,[e]);
if(e.srs){var i,r=[];for(i in e.srs)r.push(i);t.appendChild(this.createElementDefaultNS("SRS",r.join(" ")))
}t.appendChild(this.write_wmc_FormatList(e)),t.appendChild(this.write_wmc_StyleList(e)),e.dimensions&&t.appendChild(this.write_wmc_DimensionList(e)),t.appendChild(this.write_wmc_LayerExtension(e))
},CLASS_NAME:"OpenLayers.Format.WMC.v1_0_0"}),OpenLayers.Popup.Anchored=OpenLayers.Class(OpenLayers.Popup,{relativePosition:null,keepInMap:!0,anchor:null,initialize:function(e,t,i,r,s,n,a){OpenLayers.Popup.prototype.initialize.apply(this,[e,t,i,r,n,a]),this.anchor=null!=s?s:{size:new OpenLayers.Size(0,0),offset:new OpenLayers.Pixel(0,0)}
},destroy:function(){this.relativePosition=this.anchor=null,OpenLayers.Popup.prototype.destroy.apply(this,arguments)
},show:function(){this.updatePosition(),OpenLayers.Popup.prototype.show.apply(this,arguments)
},moveTo:function(e){var t=this.relativePosition;this.relativePosition=this.calculateRelativePosition(e),OpenLayers.Popup.prototype.moveTo.call(this,this.calculateNewPx(e)),this.relativePosition!=t&&this.updateRelativePosition()
},setSize:function(){if(OpenLayers.Popup.prototype.setSize.apply(this,arguments),this.lonlat&&this.map){var e=this.map.getLayerPxFromLonLat(this.lonlat);
this.moveTo(e)}},calculateRelativePosition:function(e){return e=this.map.getLonLatFromLayerPx(e),e=this.map.getExtent().determineQuadrant(e),OpenLayers.Bounds.oppositeQuadrant(e)
},updateRelativePosition:function(){},calculateNewPx:function(e){e=e.offset(this.anchor.offset);
var t=this.size||this.contentSize,i="t"==this.relativePosition.charAt(0);return e.y+=i?-t.h:this.anchor.size.h,i="l"==this.relativePosition.charAt(1),e.x+=i?-t.w:this.anchor.size.w,e
},CLASS_NAME:"OpenLayers.Popup.Anchored"}),OpenLayers.Popup.Framed=OpenLayers.Class(OpenLayers.Popup.Anchored,{imageSrc:null,imageSize:null,isAlphaImage:!1,positionBlocks:null,blocks:null,fixedRelativePosition:!1,initialize:function(e,t,i,r,s,n){OpenLayers.Popup.Anchored.prototype.initialize.apply(this,arguments),this.fixedRelativePosition&&(this.updateRelativePosition(),this.calculateRelativePosition=function(){return this.relativePosition
}),this.contentDiv.style.position="absolute",this.contentDiv.style.zIndex=1,n&&(this.closeDiv.style.zIndex=1),this.groupDiv.style.position="absolute",this.groupDiv.style.top="0px",this.groupDiv.style.left="0px",this.groupDiv.style.height="100%",this.groupDiv.style.width="100%"
},destroy:function(){this.isAlphaImage=this.imageSize=this.imageSrc=null,this.fixedRelativePosition=!1,this.positionBlocks=null;
for(var e=0;e<this.blocks.length;e++){var t=this.blocks[e];t.image&&t.div.removeChild(t.image),t.image=null,t.div&&this.groupDiv.removeChild(t.div),t.div=null
}this.blocks=null,OpenLayers.Popup.Anchored.prototype.destroy.apply(this,arguments)
},setBackgroundColor:function(){},setBorder:function(){},setOpacity:function(){},setSize:function(){OpenLayers.Popup.Anchored.prototype.setSize.apply(this,arguments),this.updateBlocks()
},updateRelativePosition:function(){if(this.padding=this.positionBlocks[this.relativePosition].padding,this.closeDiv){var e=this.getContentDivPadding();
this.closeDiv.style.right=e.right+this.padding.right+"px",this.closeDiv.style.top=e.top+this.padding.top+"px"
}this.updateBlocks()},calculateNewPx:function(){var e=OpenLayers.Popup.Anchored.prototype.calculateNewPx.apply(this,arguments);
return e=e.offset(this.positionBlocks[this.relativePosition].offset)},createBlocks:function(){this.blocks=[];
var e,t=null;for(e in this.positionBlocks){t=e;break}for(t=this.positionBlocks[t],e=0;e<t.blocks.length;e++){var i={};
this.blocks.push(i),i.div=OpenLayers.Util.createDiv(this.id+"_FrameDecorationDiv_"+e,null,null,null,"absolute",null,"hidden",null),i.image=(this.isAlphaImage?OpenLayers.Util.createAlphaImageDiv:OpenLayers.Util.createImage)(this.id+"_FrameDecorationImg_"+e,null,this.imageSize,this.imageSrc,"absolute",null,null,null),i.div.appendChild(i.image),this.groupDiv.appendChild(i.div)
}},updateBlocks:function(){if(this.blocks||this.createBlocks(),this.size&&this.relativePosition){for(var e=this.positionBlocks[this.relativePosition],t=0;t<e.blocks.length;t++){var i=e.blocks[t],r=this.blocks[t],s=i.anchor.left,n=i.anchor.bottom,a=i.anchor.right,o=i.anchor.top,l=isNaN(i.size.w)?this.size.w-(a+s):i.size.w,h=isNaN(i.size.h)?this.size.h-(n+o):i.size.h;
r.div.style.width=(0>l?0:l)+"px",r.div.style.height=(0>h?0:h)+"px",r.div.style.left=null!=s?s+"px":"",r.div.style.bottom=null!=n?n+"px":"",r.div.style.right=null!=a?a+"px":"",r.div.style.top=null!=o?o+"px":"",r.image.style.left=i.position.x+"px",r.image.style.top=i.position.y+"px"
}this.contentDiv.style.left=this.padding.left+"px",this.contentDiv.style.top=this.padding.top+"px"
}},CLASS_NAME:"OpenLayers.Popup.Framed"}),OpenLayers.Popup.FramedCloud=OpenLayers.Class(OpenLayers.Popup.Framed,{contentDisplayClass:"olFramedCloudPopupContent",autoSize:!0,panMapIfOutOfView:!0,imageSize:new OpenLayers.Size(1276,736),isAlphaImage:!1,fixedRelativePosition:!1,positionBlocks:{tl:{offset:new OpenLayers.Pixel(44,0),padding:new OpenLayers.Bounds(8,40,8,9),blocks:[{size:new OpenLayers.Size("auto","auto"),anchor:new OpenLayers.Bounds(0,51,22,0),position:new OpenLayers.Pixel(0,0)},{size:new OpenLayers.Size(22,"auto"),anchor:new OpenLayers.Bounds(null,50,0,0),position:new OpenLayers.Pixel(-1238,0)},{size:new OpenLayers.Size("auto",19),anchor:new OpenLayers.Bounds(0,32,22,null),position:new OpenLayers.Pixel(0,-631)},{size:new OpenLayers.Size(22,18),anchor:new OpenLayers.Bounds(null,32,0,null),position:new OpenLayers.Pixel(-1238,-632)},{size:new OpenLayers.Size(81,35),anchor:new OpenLayers.Bounds(null,0,0,null),position:new OpenLayers.Pixel(0,-688)}]},tr:{offset:new OpenLayers.Pixel(-45,0),padding:new OpenLayers.Bounds(8,40,8,9),blocks:[{size:new OpenLayers.Size("auto","auto"),anchor:new OpenLayers.Bounds(0,51,22,0),position:new OpenLayers.Pixel(0,0)},{size:new OpenLayers.Size(22,"auto"),anchor:new OpenLayers.Bounds(null,50,0,0),position:new OpenLayers.Pixel(-1238,0)},{size:new OpenLayers.Size("auto",19),anchor:new OpenLayers.Bounds(0,32,22,null),position:new OpenLayers.Pixel(0,-631)},{size:new OpenLayers.Size(22,19),anchor:new OpenLayers.Bounds(null,32,0,null),position:new OpenLayers.Pixel(-1238,-631)},{size:new OpenLayers.Size(81,35),anchor:new OpenLayers.Bounds(0,0,null,null),position:new OpenLayers.Pixel(-215,-687)}]},bl:{offset:new OpenLayers.Pixel(45,0),padding:new OpenLayers.Bounds(8,9,8,40),blocks:[{size:new OpenLayers.Size("auto","auto"),anchor:new OpenLayers.Bounds(0,21,22,32),position:new OpenLayers.Pixel(0,0)},{size:new OpenLayers.Size(22,"auto"),anchor:new OpenLayers.Bounds(null,21,0,32),position:new OpenLayers.Pixel(-1238,0)},{size:new OpenLayers.Size("auto",21),anchor:new OpenLayers.Bounds(0,0,22,null),position:new OpenLayers.Pixel(0,-629)},{size:new OpenLayers.Size(22,21),anchor:new OpenLayers.Bounds(null,0,0,null),position:new OpenLayers.Pixel(-1238,-629)},{size:new OpenLayers.Size(81,33),anchor:new OpenLayers.Bounds(null,null,0,0),position:new OpenLayers.Pixel(-101,-674)}]},br:{offset:new OpenLayers.Pixel(-44,0),padding:new OpenLayers.Bounds(8,9,8,40),blocks:[{size:new OpenLayers.Size("auto","auto"),anchor:new OpenLayers.Bounds(0,21,22,32),position:new OpenLayers.Pixel(0,0)},{size:new OpenLayers.Size(22,"auto"),anchor:new OpenLayers.Bounds(null,21,0,32),position:new OpenLayers.Pixel(-1238,0)},{size:new OpenLayers.Size("auto",21),anchor:new OpenLayers.Bounds(0,0,22,null),position:new OpenLayers.Pixel(0,-629)},{size:new OpenLayers.Size(22,21),anchor:new OpenLayers.Bounds(null,0,0,null),position:new OpenLayers.Pixel(-1238,-629)},{size:new OpenLayers.Size(81,33),anchor:new OpenLayers.Bounds(0,null,null,0),position:new OpenLayers.Pixel(-311,-674)}]}},minSize:new OpenLayers.Size(105,10),maxSize:new OpenLayers.Size(1200,660),initialize:function(){this.imageSrc=OpenLayers.Util.getImageLocation("cloud-popup-relative.png"),OpenLayers.Popup.Framed.prototype.initialize.apply(this,arguments),this.contentDiv.className=this.contentDisplayClass
},CLASS_NAME:"OpenLayers.Popup.FramedCloud"}),OpenLayers.Tile.Image.IFrame={useIFrame:null,blankImageUrl:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAQAIBRAA7",draw:function(){if(OpenLayers.Tile.Image.prototype.shouldDraw.call(this)){var e=this.layer.getURL(this.bounds),t=this.useIFrame;
this.useIFrame=null!==this.maxGetUrlLength&&!this.layer.async&&e.length>this.maxGetUrlLength,e=t&&!this.useIFrame,t=!t&&this.useIFrame,(e||t)&&(this.imgDiv&&this.imgDiv.parentNode===this.frame&&this.frame.removeChild(this.imgDiv),this.imgDiv=null,e&&this.frame.removeChild(this.frame.firstChild))
}return OpenLayers.Tile.Image.prototype.draw.apply(this,arguments)},getImage:function(){if(!0===this.useIFrame){if(!this.frame.childNodes.length){var e=document.createElement("div"),t=e.style;
t.position="absolute",t.width="100%",t.height="100%",t.zIndex=1,t.backgroundImage="url("+this.blankImageUrl+")",this.frame.appendChild(e)
}return e=this.id+"_iFrame",9>parseFloat(navigator.appVersion.split("MSIE")[1])?(t=document.createElement('<iframe name="'+e+'">'),t.style.backgroundColor="#FFFFFF",t.style.filter="chroma(color=#FFFFFF)"):(t=document.createElement("iframe"),t.style.backgroundColor="transparent",t.name=e),t.scrolling="no",t.marginWidth="0px",t.marginHeight="0px",t.frameBorder="0",t.style.position="absolute",t.style.width="100%",t.style.height="100%",1>this.layer.opacity&&OpenLayers.Util.modifyDOMElement(t,null,null,null,null,null,null,this.layer.opacity),this.frame.appendChild(t),this.imgDiv=t
}return OpenLayers.Tile.Image.prototype.getImage.apply(this,arguments)},createRequestForm:function(){var e=document.createElement("form");
e.method="POST";var t=this.layer.params._OLSALT,t=(t?t+"_":"")+this.bounds.toBBOX();
e.action=OpenLayers.Util.urlAppend(this.layer.url,t),e.target=this.id+"_iFrame",this.layer.getImageSize();
var i,r,t=OpenLayers.Util.getParameters(this.url);for(r in t)i=document.createElement("input"),i.type="hidden",i.name=r,i.value=t[r],e.appendChild(i);
return e},setImgSrc:function(e){if(!0===this.useIFrame)if(e){var t=this.createRequestForm();
this.frame.appendChild(t),t.submit(),this.frame.removeChild(t)}else this.imgDiv.parentNode===this.frame&&(this.frame.removeChild(this.imgDiv),this.imgDiv=null);
else OpenLayers.Tile.Image.prototype.setImgSrc.apply(this,arguments)},onImageLoad:function(){OpenLayers.Tile.Image.prototype.onImageLoad.apply(this,arguments),!0===this.useIFrame&&(this.imgDiv.style.opacity=1,this.frame.style.opacity=this.layer.opacity)
},createBackBuffer:function(){var e;return!1===this.useIFrame&&(e=OpenLayers.Tile.Image.prototype.createBackBuffer.call(this)),e
}},OpenLayers.Format.SOSCapabilities=OpenLayers.Class(OpenLayers.Format.XML.VersionedOGC,{defaultVersion:"1.0.0",CLASS_NAME:"OpenLayers.Format.SOSCapabilities"}),OpenLayers.Format.SOSCapabilities.v1_0_0=OpenLayers.Class(OpenLayers.Format.SOSCapabilities,{namespaces:{ows:"http://www.opengis.net/ows/1.1",sos:"http://www.opengis.net/sos/1.0",gml:"http://www.opengis.net/gml",xlink:"http://www.w3.org/1999/xlink"},regExes:{trimSpace:/^\s*|\s*$/g,removeSpace:/\s*/g,splitSpace:/\s+/,trimComma:/\s*,\s*/g},initialize:function(e){OpenLayers.Format.XML.prototype.initialize.apply(this,[e]),this.options=e
},read:function(e){"string"==typeof e&&(e=OpenLayers.Format.XML.prototype.read.apply(this,[e])),e&&9==e.nodeType&&(e=e.documentElement);
var t={};return this.readNode(e,t),t},readers:{gml:OpenLayers.Util.applyDefaults({name:function(e,t){t.name=this.getChildValue(e)
},TimePeriod:function(e,t){t.timePeriod={},this.readChildNodes(e,t.timePeriod)},beginPosition:function(e,t){t.beginPosition=this.getChildValue(e)
},endPosition:function(e,t){t.endPosition=this.getChildValue(e)}},OpenLayers.Format.GML.v3.prototype.readers.gml),sos:{Capabilities:function(e,t){this.readChildNodes(e,t)
},Contents:function(e,t){t.contents={},this.readChildNodes(e,t.contents)},ObservationOfferingList:function(e,t){t.offeringList={},this.readChildNodes(e,t.offeringList)
},ObservationOffering:function(e,t){var i=this.getAttributeNS(e,this.namespaces.gml,"id");
t[i]={procedures:[],observedProperties:[],featureOfInterestIds:[],responseFormats:[],resultModels:[],responseModes:[]},this.readChildNodes(e,t[i])
},time:function(e,t){t.time={},this.readChildNodes(e,t.time)},procedure:function(e,t){t.procedures.push(this.getAttributeNS(e,this.namespaces.xlink,"href"))
},observedProperty:function(e,t){t.observedProperties.push(this.getAttributeNS(e,this.namespaces.xlink,"href"))
},featureOfInterest:function(e,t){t.featureOfInterestIds.push(this.getAttributeNS(e,this.namespaces.xlink,"href"))
},responseFormat:function(e,t){t.responseFormats.push(this.getChildValue(e))},resultModel:function(e,t){t.resultModels.push(this.getChildValue(e))
},responseMode:function(e,t){t.responseModes.push(this.getChildValue(e))}},ows:OpenLayers.Format.OWSCommon.v1_1_0.prototype.readers.ows},CLASS_NAME:"OpenLayers.Format.SOSCapabilities.v1_0_0"}),OpenLayers.Handler.Pinch=OpenLayers.Class(OpenLayers.Handler,{started:!1,stopDown:!1,pinching:!1,last:null,start:null,touchstart:function(e){var t=!0;
if(this.pinching=!1,OpenLayers.Event.isMultiTouch(e))this.started=!0,this.last=this.start={distance:this.getDistance(e.touches),delta:0,scale:1},this.callback("start",[e,this.start]),t=!this.stopDown;
else{if(this.started)return!1;this.started=!1,this.last=this.start=null}return OpenLayers.Event.preventDefault(e),t
},touchmove:function(e){if(this.started&&OpenLayers.Event.isMultiTouch(e)){this.pinching=!0;
var t=this.getPinchData(e);this.callback("move",[e,t]),this.last=t,OpenLayers.Event.stop(e)
}else if(this.started)return!1;return!0},touchend:function(e){return this.started&&!OpenLayers.Event.isMultiTouch(e)?(this.pinching=this.started=!1,this.callback("done",[e,this.start,this.last]),this.last=this.start=null,!1):!0
},activate:function(){var e=!1;return OpenLayers.Handler.prototype.activate.apply(this,arguments)&&(this.pinching=!1,e=!0),e
},deactivate:function(){var e=!1;return OpenLayers.Handler.prototype.deactivate.apply(this,arguments)&&(this.pinching=this.started=!1,this.last=this.start=null,e=!0),e
},getDistance:function(e){var t=e[0];return e=e[1],Math.sqrt(Math.pow(t.olClientX-e.olClientX,2)+Math.pow(t.olClientY-e.olClientY,2))
},getPinchData:function(e){return e=this.getDistance(e.touches),{distance:e,delta:this.last.distance-e,scale:e/this.start.distance}
},CLASS_NAME:"OpenLayers.Handler.Pinch"}),OpenLayers.Control.NavToolbar=OpenLayers.Class(OpenLayers.Control.Panel,{initialize:function(e){OpenLayers.Control.Panel.prototype.initialize.apply(this,[e]),this.addControls([new OpenLayers.Control.Navigation,new OpenLayers.Control.ZoomBox])
},draw:function(){var e=OpenLayers.Control.Panel.prototype.draw.apply(this,arguments);
return null===this.defaultControl&&(this.defaultControl=this.controls[0]),e},CLASS_NAME:"OpenLayers.Control.NavToolbar"}),OpenLayers.Strategy.Refresh=OpenLayers.Class(OpenLayers.Strategy,{force:!1,interval:0,timer:null,activate:function(){var e=OpenLayers.Strategy.prototype.activate.call(this);
return e&&(!0===this.layer.visibility&&this.start(),this.layer.events.on({visibilitychanged:this.reset,scope:this})),e
},deactivate:function(){var e=OpenLayers.Strategy.prototype.deactivate.call(this);
return e&&(this.stop(),this.layer.events.un({visibilitychanged:this.reset,scope:this})),e
},reset:function(){!0===this.layer.visibility?this.start():this.stop()},start:function(){this.interval&&"number"==typeof this.interval&&0<this.interval&&(this.timer=window.setInterval(OpenLayers.Function.bind(this.refresh,this),this.interval))
},refresh:function(){this.layer&&this.layer.refresh&&"function"==typeof this.layer.refresh&&this.layer.refresh({force:this.force})
},stop:function(){null!==this.timer&&(window.clearInterval(this.timer),this.timer=null)
},CLASS_NAME:"OpenLayers.Strategy.Refresh"}),OpenLayers.Layer.ArcGIS93Rest=OpenLayers.Class(OpenLayers.Layer.Grid,{DEFAULT_PARAMS:{format:"png"},isBaseLayer:!0,initialize:function(e,t,i,r){var s=[];
i=OpenLayers.Util.upperCaseObject(i),s.push(e,t,i,r),OpenLayers.Layer.Grid.prototype.initialize.apply(this,s),OpenLayers.Util.applyDefaults(this.params,OpenLayers.Util.upperCaseObject(this.DEFAULT_PARAMS)),this.params.TRANSPARENT&&"true"==this.params.TRANSPARENT.toString().toLowerCase()&&(null!=r&&r.isBaseLayer||(this.isBaseLayer=!1),"jpg"==this.params.FORMAT&&(this.params.FORMAT=OpenLayers.Util.alphaHack()?"gif":"png"))
},clone:function(e){return null==e&&(e=new OpenLayers.Layer.ArcGIS93Rest(this.name,this.url,this.params,this.getOptions())),e=OpenLayers.Layer.Grid.prototype.clone.apply(this,[e])
},getURL:function(e){e=this.adjustBounds(e);var t=this.projection.getCode().split(":"),t=t[t.length-1],i=this.getImageSize();
if(e={BBOX:e.toBBOX(),SIZE:i.w+","+i.h,F:"image",BBOXSR:t,IMAGESR:t},this.layerDefs){var r,t=[];
for(r in this.layerDefs)this.layerDefs.hasOwnProperty(r)&&this.layerDefs[r]&&(t.push(r),t.push(":"),t.push(this.layerDefs[r]),t.push(";"));
0<t.length&&(e.LAYERDEFS=t.join(""))}return this.getFullRequestString(e)},setLayerFilter:function(e,t){this.layerDefs||(this.layerDefs={}),t?this.layerDefs[e]=t:delete this.layerDefs[e]
},clearLayerFilter:function(e){e?delete this.layerDefs[e]:delete this.layerDefs},mergeNewParams:function(e){return e=[OpenLayers.Util.upperCaseObject(e)],OpenLayers.Layer.Grid.prototype.mergeNewParams.apply(this,e)
},CLASS_NAME:"OpenLayers.Layer.ArcGIS93Rest"}),OpenLayers.Handler.Hover=OpenLayers.Class(OpenLayers.Handler,{delay:500,pixelTolerance:null,stopMove:!1,px:null,timerId:null,mousemove:function(e){return this.passesTolerance(e.xy)&&(this.clearTimer(),this.callback("move",[e]),this.px=e.xy,e=OpenLayers.Util.extend({},e),this.timerId=window.setTimeout(OpenLayers.Function.bind(this.delayedCall,this,e),this.delay)),!this.stopMove
},mouseout:function(e){return OpenLayers.Util.mouseLeft(e,this.map.viewPortDiv)&&(this.clearTimer(),this.callback("move",[e])),!0
},passesTolerance:function(e){var t=!0;return this.pixelTolerance&&this.px&&Math.sqrt(Math.pow(this.px.x-e.x,2)+Math.pow(this.px.y-e.y,2))<this.pixelTolerance&&(t=!1),t
},clearTimer:function(){null!=this.timerId&&(window.clearTimeout(this.timerId),this.timerId=null)
},delayedCall:function(e){this.callback("pause",[e])},deactivate:function(){var e=!1;
return OpenLayers.Handler.prototype.deactivate.apply(this,arguments)&&(this.clearTimer(),e=!0),e
},CLASS_NAME:"OpenLayers.Handler.Hover"}),OpenLayers.Control.GetFeature=OpenLayers.Class(OpenLayers.Control,{protocol:null,multipleKey:null,toggleKey:null,modifiers:null,multiple:!1,click:!0,single:!0,clickout:!0,toggle:!1,clickTolerance:5,hover:!1,box:!1,maxFeatures:10,features:null,hoverFeature:null,handlers:null,hoverResponse:null,filterType:OpenLayers.Filter.Spatial.BBOX,initialize:function(e){e.handlerOptions=e.handlerOptions||{},OpenLayers.Control.prototype.initialize.apply(this,[e]),this.features={},this.handlers={},this.click&&(this.handlers.click=new OpenLayers.Handler.Click(this,{click:this.selectClick},this.handlerOptions.click||{})),this.box&&(this.handlers.box=new OpenLayers.Handler.Box(this,{done:this.selectBox},OpenLayers.Util.extend(this.handlerOptions.box,{boxDivClassName:"olHandlerBoxSelectFeature"}))),this.hover&&(this.handlers.hover=new OpenLayers.Handler.Hover(this,{move:this.cancelHover,pause:this.selectHover},OpenLayers.Util.extend(this.handlerOptions.hover,{delay:250,pixelTolerance:2})))
},activate:function(){if(!this.active)for(var e in this.handlers)this.handlers[e].activate();
return OpenLayers.Control.prototype.activate.apply(this,arguments)},deactivate:function(){if(this.active)for(var e in this.handlers)this.handlers[e].deactivate();
return OpenLayers.Control.prototype.deactivate.apply(this,arguments)},selectClick:function(e){var t=this.pixelToBounds(e.xy);
this.setModifiers(e),this.request(t,{single:this.single})},selectBox:function(e){var t;
if(e instanceof OpenLayers.Bounds)t=this.map.getLonLatFromPixel({x:e.left,y:e.bottom}),e=this.map.getLonLatFromPixel({x:e.right,y:e.top}),t=new OpenLayers.Bounds(t.lon,t.lat,e.lon,e.lat);
else{if(this.click)return;t=this.pixelToBounds(e)}this.setModifiers(this.handlers.box.dragHandler.evt),this.request(t)
},selectHover:function(e){e=this.pixelToBounds(e.xy),this.request(e,{single:!0,hover:!0})
},cancelHover:function(){this.hoverResponse&&(this.protocol.abort(this.hoverResponse),this.hoverResponse=null,OpenLayers.Element.removeClass(this.map.viewPortDiv,"olCursorWait"))
},request:function(e,t){t=t||{};var i=new OpenLayers.Filter.Spatial({type:this.filterType,value:e});
OpenLayers.Element.addClass(this.map.viewPortDiv,"olCursorWait"),i=this.protocol.read({maxFeatures:1==t.single?this.maxFeatures:void 0,filter:i,callback:function(i){i.success()&&(i.features.length?1==t.single?this.selectBestFeature(i.features,e.getCenterLonLat(),t):this.select(i.features):t.hover?this.hoverSelect():(this.events.triggerEvent("clickout"),this.clickout&&this.unselectAll())),OpenLayers.Element.removeClass(this.map.viewPortDiv,"olCursorWait")
},scope:this}),1==t.hover&&(this.hoverResponse=i)},selectBestFeature:function(e,t,i){if(i=i||{},e.length){t=new OpenLayers.Geometry.Point(t.lon,t.lat);
for(var r,s,n,a=Number.MAX_VALUE,o=0;o<e.length&&(r=e[o],!(r.geometry&&(n=t.distanceTo(r.geometry,{edge:!1}),a>n&&(a=n,s=r,0==a))));++o);1==i.hover?this.hoverSelect(s):this.select(s||e)
}},setModifiers:function(e){this.modifiers={multiple:this.multiple||this.multipleKey&&e[this.multipleKey],toggle:this.toggle||this.toggleKey&&e[this.toggleKey]}
},select:function(e){this.modifiers.multiple||this.modifiers.toggle||this.unselectAll(),OpenLayers.Util.isArray(e)||(e=[e]);
var t=this.events.triggerEvent("beforefeaturesselected",{features:e});if(!1!==t){for(var i,r=[],s=0,n=e.length;n>s;++s)i=e[s],this.features[i.fid||i.id]?this.modifiers.toggle&&this.unselect(this.features[i.fid||i.id]):(t=this.events.triggerEvent("beforefeatureselected",{feature:i}),!1!==t&&(this.features[i.fid||i.id]=i,r.push(i),this.events.triggerEvent("featureselected",{feature:i})));
this.events.triggerEvent("featuresselected",{features:r})}},hoverSelect:function(e){var t=e?e.fid||e.id:null,i=this.hoverFeature?this.hoverFeature.fid||this.hoverFeature.id:null;
i&&i!=t&&(this.events.triggerEvent("outfeature",{feature:this.hoverFeature}),this.hoverFeature=null),t&&t!=i&&(this.events.triggerEvent("hoverfeature",{feature:e}),this.hoverFeature=e)
},unselect:function(e){delete this.features[e.fid||e.id],this.events.triggerEvent("featureunselected",{feature:e})
},unselectAll:function(){for(var e in this.features)this.unselect(this.features[e])
},setMap:function(e){for(var t in this.handlers)this.handlers[t].setMap(e);OpenLayers.Control.prototype.setMap.apply(this,arguments)
},pixelToBounds:function(e){var t=e.add(-this.clickTolerance/2,this.clickTolerance/2);
return e=e.add(this.clickTolerance/2,-this.clickTolerance/2),t=this.map.getLonLatFromPixel(t),e=this.map.getLonLatFromPixel(e),new OpenLayers.Bounds(t.lon,t.lat,e.lon,e.lat)
},CLASS_NAME:"OpenLayers.Control.GetFeature"}),OpenLayers.Format.QueryStringFilter=function(){function e(e){return e=e.replace(/%/g,"\\%"),e=e.replace(/\\\\\.(\*)?/g,function(e,t){return t?e:"\\\\_"
}),e=e.replace(/\\\\\.\*/g,"\\\\%"),e=e.replace(/(\\)?\.(\*)?/g,function(e,t,i){return t||i?e:"_"
}),e=e.replace(/(\\)?\.\*/g,function(e,t){return t?e:"%"}),e=e.replace(/\\\./g,"."),e=e.replace(/(\\)?\\\*/g,function(e,t){return t?e:"*"
})}var t={};return t[OpenLayers.Filter.Comparison.EQUAL_TO]="eq",t[OpenLayers.Filter.Comparison.NOT_EQUAL_TO]="ne",t[OpenLayers.Filter.Comparison.LESS_THAN]="lt",t[OpenLayers.Filter.Comparison.LESS_THAN_OR_EQUAL_TO]="lte",t[OpenLayers.Filter.Comparison.GREATER_THAN]="gt",t[OpenLayers.Filter.Comparison.GREATER_THAN_OR_EQUAL_TO]="gte",t[OpenLayers.Filter.Comparison.LIKE]="ilike",OpenLayers.Class(OpenLayers.Format,{wildcarded:!1,srsInBBOX:!1,write:function(i,r){r=r||{};
var s=i.CLASS_NAME,s=s.substring(s.lastIndexOf(".")+1);switch(s){case"Spatial":switch(i.type){case OpenLayers.Filter.Spatial.BBOX:r.bbox=i.value.toArray(),this.srsInBBOX&&i.projection&&r.bbox.push(i.projection.getCode());
break;case OpenLayers.Filter.Spatial.DWITHIN:r.tolerance=i.distance;case OpenLayers.Filter.Spatial.WITHIN:r.lon=i.value.x,r.lat=i.value.y;
break;default:OpenLayers.Console.warn("Unknown spatial filter type "+i.type)}break;
case"Comparison":if(s=t[i.type],void 0!==s){var n=i.value;i.type==OpenLayers.Filter.Comparison.LIKE&&(n=e(n),this.wildcarded&&(n="%"+n+"%")),r[i.property+"__"+s]=n,r.queryable=r.queryable||[],r.queryable.push(i.property)
}else OpenLayers.Console.warn("Unknown comparison filter type "+i.type);break;case"Logical":if(i.type===OpenLayers.Filter.Logical.AND)for(s=0,n=i.filters.length;n>s;s++)r=this.write(i.filters[s],r);
else OpenLayers.Console.warn("Unsupported logical filter type "+i.type);break;default:OpenLayers.Console.warn("Unknown filter type "+s)
}return r},CLASS_NAME:"OpenLayers.Format.QueryStringFilter"})}(),OpenLayers.Control.MousePosition=OpenLayers.Class(OpenLayers.Control,{autoActivate:!0,element:null,prefix:"",separator:", ",suffix:"",numDigits:5,granularity:10,emptyString:null,lastXy:null,displayProjection:null,destroy:function(){this.deactivate(),OpenLayers.Control.prototype.destroy.apply(this,arguments)
},activate:function(){return OpenLayers.Control.prototype.activate.apply(this,arguments)?(this.map.events.register("mousemove",this,this.redraw),this.map.events.register("mouseout",this,this.reset),this.redraw(),!0):!1
},deactivate:function(){return OpenLayers.Control.prototype.deactivate.apply(this,arguments)?(this.map.events.unregister("mousemove",this,this.redraw),this.map.events.unregister("mouseout",this,this.reset),this.element.innerHTML="",!0):!1
},draw:function(){return OpenLayers.Control.prototype.draw.apply(this,arguments),this.element||(this.div.left="",this.div.top="",this.element=this.div),this.div
},redraw:function(e){var t;null==e?this.reset():null==this.lastXy||Math.abs(e.xy.x-this.lastXy.x)>this.granularity||Math.abs(e.xy.y-this.lastXy.y)>this.granularity?this.lastXy=e.xy:(t=this.map.getLonLatFromPixel(e.xy))&&(this.displayProjection&&t.transform(this.map.getProjectionObject(),this.displayProjection),this.lastXy=e.xy,e=this.formatOutput(t),e!=this.element.innerHTML&&(this.element.innerHTML=e))
},reset:function(){null!=this.emptyString&&(this.element.innerHTML=this.emptyString)
},formatOutput:function(e){var t=parseInt(this.numDigits);return this.prefix+e.lon.toFixed(t)+this.separator+e.lat.toFixed(t)+this.suffix
},CLASS_NAME:"OpenLayers.Control.MousePosition"}),OpenLayers.Control.Geolocate=OpenLayers.Class(OpenLayers.Control,{geolocation:null,available:"geolocation"in navigator,bind:!0,watch:!1,geolocationOptions:null,destroy:function(){this.deactivate(),OpenLayers.Control.prototype.destroy.apply(this,arguments)
},activate:function(){return this.available&&!this.geolocation&&(this.geolocation=navigator.geolocation),this.geolocation?OpenLayers.Control.prototype.activate.apply(this,arguments)?(this.watch?this.watchId=this.geolocation.watchPosition(OpenLayers.Function.bind(this.geolocate,this),OpenLayers.Function.bind(this.failure,this),this.geolocationOptions):this.getCurrentLocation(),!0):!1:(this.events.triggerEvent("locationuncapable"),!1)
},deactivate:function(){return this.active&&null!==this.watchId&&this.geolocation.clearWatch(this.watchId),OpenLayers.Control.prototype.deactivate.apply(this,arguments)
},geolocate:function(e){var t=new OpenLayers.LonLat(e.coords.longitude,e.coords.latitude).transform(new OpenLayers.Projection("EPSG:4326"),this.map.getProjectionObject());
this.bind&&this.map.setCenter(t),this.events.triggerEvent("locationupdated",{position:e,point:new OpenLayers.Geometry.Point(t.lon,t.lat)})
},getCurrentLocation:function(){return!this.active||this.watch?!1:(this.geolocation.getCurrentPosition(OpenLayers.Function.bind(this.geolocate,this),OpenLayers.Function.bind(this.failure,this),this.geolocationOptions),!0)
},failure:function(e){this.events.triggerEvent("locationfailed",{error:e})},CLASS_NAME:"OpenLayers.Control.Geolocate"}),OpenLayers.Tile.UTFGrid=OpenLayers.Class(OpenLayers.Tile,{url:null,utfgridResolution:2,json:null,format:null,destroy:function(){this.clear(),OpenLayers.Tile.prototype.destroy.apply(this,arguments)
},draw:function(){var e=OpenLayers.Tile.prototype.draw.apply(this,arguments);if(e)if(this.isLoading?(this.abortLoading(),this.events.triggerEvent("reload")):(this.isLoading=!0,this.events.triggerEvent("loadstart")),this.url=this.layer.getURL(this.bounds),this.layer.useJSONP){var t=new OpenLayers.Protocol.Script({url:this.url,callback:function(e){this.isLoading=!1,this.events.triggerEvent("loadend"),this.json=e.data
},scope:this});t.read(),this.request=t}else this.request=OpenLayers.Request.GET({url:this.url,callback:function(e){this.isLoading=!1,this.events.triggerEvent("loadend"),200===e.status&&this.parseData(e.responseText)
},scope:this});else this.unload();return e},abortLoading:function(){this.request&&(this.request.abort(),delete this.request),this.isLoading=!1
},getFeatureInfo:function(e,t){var i=null;if(this.json){var r=this.getFeatureId(e,t);
null!==r&&(i={id:r,data:this.json.data[r]})}return i},getFeatureId:function(e,t){var i=null;
if(this.json){var r=this.utfgridResolution,r=this.json.grid[Math.floor(t/r)].charCodeAt(Math.floor(e/r)),r=this.indexFromCharCode(r),s=this.json.keys;
!isNaN(r)&&r in s&&(i=s[r])}return i},indexFromCharCode:function(e){return e>=93&&e--,e>=35&&e--,e-32
},parseData:function(e){this.format||(this.format=new OpenLayers.Format.JSON),this.json=this.format.read(e)
},clear:function(){this.json=null},CLASS_NAME:"OpenLayers.Tile.UTFGrid"}),OpenLayers.Protocol.HTTP=OpenLayers.Class(OpenLayers.Protocol,{url:null,headers:null,params:null,callback:null,scope:null,readWithPOST:!1,updateWithPOST:!1,deleteWithPOST:!1,wildcarded:!1,srsInBBOX:!1,initialize:function(e){if(e=e||{},this.params={},this.headers={},OpenLayers.Protocol.prototype.initialize.apply(this,arguments),!this.filterToParams&&OpenLayers.Format.QueryStringFilter){var t=new OpenLayers.Format.QueryStringFilter({wildcarded:this.wildcarded,srsInBBOX:this.srsInBBOX});
this.filterToParams=function(e,i){return t.write(e,i)}}},destroy:function(){this.headers=this.params=null,OpenLayers.Protocol.prototype.destroy.apply(this)
},read:function(e){OpenLayers.Protocol.prototype.read.apply(this,arguments),e=e||{},e.params=OpenLayers.Util.applyDefaults(e.params,this.options.params),e=OpenLayers.Util.applyDefaults(e,this.options),e.filter&&this.filterToParams&&(e.params=this.filterToParams(e.filter,e.params));
var t=void 0!==e.readWithPOST?e.readWithPOST:this.readWithPOST,i=new OpenLayers.Protocol.Response({requestType:"read"});
return t?(t=e.headers||{},t["Content-Type"]="application/x-www-form-urlencoded",i.priv=OpenLayers.Request.POST({url:e.url,callback:this.createCallback(this.handleRead,i,e),data:OpenLayers.Util.getParameterString(e.params),headers:t})):i.priv=OpenLayers.Request.GET({url:e.url,callback:this.createCallback(this.handleRead,i,e),params:e.params,headers:e.headers}),i
},handleRead:function(e,t){this.handleResponse(e,t)},create:function(e,t){t=OpenLayers.Util.applyDefaults(t,this.options);
var i=new OpenLayers.Protocol.Response({reqFeatures:e,requestType:"create"});return i.priv=OpenLayers.Request.POST({url:t.url,callback:this.createCallback(this.handleCreate,i,t),headers:t.headers,data:this.format.write(e)}),i
},handleCreate:function(e,t){this.handleResponse(e,t)},update:function(e,t){t=t||{};
var i=t.url||e.url||this.options.url+"/"+e.fid;t=OpenLayers.Util.applyDefaults(t,this.options);
var r=new OpenLayers.Protocol.Response({reqFeatures:e,requestType:"update"});return r.priv=OpenLayers.Request[this.updateWithPOST?"POST":"PUT"]({url:i,callback:this.createCallback(this.handleUpdate,r,t),headers:t.headers,data:this.format.write(e)}),r
},handleUpdate:function(e,t){this.handleResponse(e,t)},"delete":function(e,t){t=t||{};
var i=t.url||e.url||this.options.url+"/"+e.fid;t=OpenLayers.Util.applyDefaults(t,this.options);
var r=new OpenLayers.Protocol.Response({reqFeatures:e,requestType:"delete"}),s=this.deleteWithPOST?"POST":"DELETE",i={url:i,callback:this.createCallback(this.handleDelete,r,t),headers:t.headers};
return this.deleteWithPOST&&(i.data=this.format.write(e)),r.priv=OpenLayers.Request[s](i),r
},handleDelete:function(e,t){this.handleResponse(e,t)},handleResponse:function(e,t){var i=e.priv;
t.callback&&(200<=i.status&&300>i.status?("delete"!=e.requestType&&(e.features=this.parseFeatures(i)),e.code=OpenLayers.Protocol.Response.SUCCESS):e.code=OpenLayers.Protocol.Response.FAILURE,t.callback.call(t.scope,e))
},parseFeatures:function(e){var t=e.responseXML;return t&&t.documentElement||(t=e.responseText),!t||0>=t.length?null:this.format.read(t)
},commit:function(e,t){function i(e){for(var t=e.features?e.features.length:0,i=Array(t),s=0;t>s;++s)i[s]=e.features[s].fid;
d.insertIds=i,r.apply(this,[e])}function r(e){this.callUserCallback(e,t),y=y&&e.success(),n++,n>=c&&t.callback&&(d.code=y?OpenLayers.Protocol.Response.SUCCESS:OpenLayers.Protocol.Response.FAILURE,t.callback.apply(t.scope,[d]))
}t=OpenLayers.Util.applyDefaults(t,this.options);var s=[],n=0,a={};a[OpenLayers.State.INSERT]=[],a[OpenLayers.State.UPDATE]=[],a[OpenLayers.State.DELETE]=[];
for(var o,l,h=[],p=0,u=e.length;u>p;++p)o=e[p],(l=a[o.state])&&(l.push(o),h.push(o));
var c=(0<a[OpenLayers.State.INSERT].length?1:0)+a[OpenLayers.State.UPDATE].length+a[OpenLayers.State.DELETE].length,y=!0,d=new OpenLayers.Protocol.Response({reqFeatures:h});
for(o=a[OpenLayers.State.INSERT],0<o.length&&s.push(this.create(o,OpenLayers.Util.applyDefaults({callback:i,scope:this},t.create))),o=a[OpenLayers.State.UPDATE],p=o.length-1;p>=0;--p)s.push(this.update(o[p],OpenLayers.Util.applyDefaults({callback:r,scope:this},t.update)));
for(o=a[OpenLayers.State.DELETE],p=o.length-1;p>=0;--p)s.push(this["delete"](o[p],OpenLayers.Util.applyDefaults({callback:r,scope:this},t["delete"])));
return s},abort:function(e){e&&e.priv.abort()},callUserCallback:function(e,t){var i=t[e.requestType];
i&&i.callback&&i.callback.call(i.scope,e)},CLASS_NAME:"OpenLayers.Protocol.HTTP"}),OpenLayers.Strategy.Cluster=OpenLayers.Class(OpenLayers.Strategy,{distance:20,threshold:null,features:null,clusters:null,clustering:!1,resolution:null,activate:function(){var e=OpenLayers.Strategy.prototype.activate.call(this);
return e&&this.layer.events.on({beforefeaturesadded:this.cacheFeatures,featuresremoved:this.clearCache,moveend:this.cluster,scope:this}),e
},deactivate:function(){var e=OpenLayers.Strategy.prototype.deactivate.call(this);
return e&&(this.clearCache(),this.layer.events.un({beforefeaturesadded:this.cacheFeatures,featuresremoved:this.clearCache,moveend:this.cluster,scope:this})),e
},cacheFeatures:function(e){var t=!0;return this.clustering||(this.clearCache(),this.features=e.features,this.cluster(),t=!1),t
},clearCache:function(){this.clustering||(this.features=null)},cluster:function(e){if((!e||e.zoomChanged)&&this.features&&(e=this.layer.map.getResolution(),e!=this.resolution||!this.clustersExist())){this.resolution=e,e=[];
for(var t,i,r,s=0;s<this.features.length;++s)if(t=this.features[s],t.geometry){i=!1;
for(var n=e.length-1;n>=0;--n)if(r=e[n],this.shouldCluster(r,t)){this.addToCluster(r,t),i=!0;
break}i||e.push(this.createCluster(this.features[s]))}if(this.clustering=!0,this.layer.removeAllFeatures(),this.clustering=!1,0<e.length){if(1<this.threshold)for(t=e.slice(),e=[],s=0,r=t.length;r>s;++s)i=t[s],i.attributes.count<this.threshold?Array.prototype.push.apply(e,i.cluster):e.push(i);
this.clustering=!0,this.layer.addFeatures(e),this.clustering=!1}this.clusters=e}},clustersExist:function(){var e=!1;
if(this.clusters&&0<this.clusters.length&&this.clusters.length==this.layer.features.length)for(var e=!0,t=0;t<this.clusters.length;++t)if(this.clusters[t]!=this.layer.features[t]){e=!1;
break}return e},shouldCluster:function(e,t){var i=e.geometry.getBounds().getCenterLonLat(),r=t.geometry.getBounds().getCenterLonLat();
return Math.sqrt(Math.pow(i.lon-r.lon,2)+Math.pow(i.lat-r.lat,2))/this.resolution<=this.distance
},addToCluster:function(e,t){e.cluster.push(t),e.attributes.count+=1},createCluster:function(e){var t=e.geometry.getBounds().getCenterLonLat(),t=new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(t.lon,t.lat),{count:1});
return t.cluster=[e],t},CLASS_NAME:"OpenLayers.Strategy.Cluster"}),OpenLayers.Strategy.Filter=OpenLayers.Class(OpenLayers.Strategy,{filter:null,cache:null,caching:!1,activate:function(){var e=OpenLayers.Strategy.prototype.activate.apply(this,arguments);
return e&&(this.cache=[],this.layer.events.on({beforefeaturesadded:this.handleAdd,beforefeaturesremoved:this.handleRemove,scope:this})),e
},deactivate:function(){return this.cache=null,this.layer&&this.layer.events&&this.layer.events.un({beforefeaturesadded:this.handleAdd,beforefeaturesremoved:this.handleRemove,scope:this}),OpenLayers.Strategy.prototype.deactivate.apply(this,arguments)
},handleAdd:function(e){if(!this.caching&&this.filter){var t=e.features;e.features=[];
for(var i,r=0,s=t.length;s>r;++r)i=t[r],this.filter.evaluate(i)?e.features.push(i):this.cache.push(i)
}},handleRemove:function(){this.caching||(this.cache=[])},setFilter:function(e){this.filter=e,e=this.cache,this.cache=[],this.handleAdd({features:this.layer.features}),0<this.cache.length&&(this.caching=!0,this.layer.removeFeatures(this.cache.slice()),this.caching=!1),0<e.length&&(e={features:e},this.handleAdd(e),0<e.features.length&&(this.caching=!0,this.layer.addFeatures(e.features),this.caching=!1))
},CLASS_NAME:"OpenLayers.Strategy.Filter"}),OpenLayers.Protocol.SOS=function(e){e=OpenLayers.Util.applyDefaults(e,OpenLayers.Protocol.SOS.DEFAULTS);
var t=OpenLayers.Protocol.SOS["v"+e.version.replace(/\./g,"_")];if(!t)throw"Unsupported SOS version: "+e.version;
return new t(e)},OpenLayers.Protocol.SOS.DEFAULTS={version:"1.0.0"},OpenLayers.Format.WFSDescribeFeatureType=OpenLayers.Class(OpenLayers.Format.XML,{regExes:{trimSpace:/^\s*|\s*$/g},namespaces:{xsd:"http://www.w3.org/2001/XMLSchema"},readers:{xsd:{schema:function(e,t){var i,r,s=[],n={};
this.readChildNodes(e,{complexTypes:s,customTypes:n});var a,o,l=e.attributes;for(i=0,r=l.length;r>i;++i)a=l[i],o=a.name,0===o.indexOf("xmlns")?this.setNamespace(o.split(":")[1]||"",a.value):t[o]=a.value;
for(t.featureTypes=s,t.targetPrefix=this.namespaceAlias[t.targetNamespace],i=0,r=s.length;r>i;++i)l=s[i],a=n[l.typeName],n[l.typeName]&&(l.typeName=a.name)
},complexType:function(e,t){var i={typeName:e.getAttribute("name")};this.readChildNodes(e,i),t.complexTypes.push(i)
},complexContent:function(e,t){this.readChildNodes(e,t)},extension:function(e,t){this.readChildNodes(e,t)
},sequence:function(e,t){var i={elements:[]};this.readChildNodes(e,i),t.properties=i.elements
},element:function(e,t){var i;if(t.elements){var r={};i=e.attributes;for(var s,n=0,a=i.length;a>n;++n)s=i[n],r[s.name]=s.value;
i=r.type,i||(i={},this.readChildNodes(e,i),r.restriction=i,r.type=i.base),r.localType=(i.base||i).split(":").pop(),t.elements.push(r),this.readChildNodes(e,r)
}t.complexTypes&&(i=e.getAttribute("type"),r=i.split(":").pop(),t.customTypes[r]={name:e.getAttribute("name"),type:i})
},annotation:function(e,t){t.annotation={},this.readChildNodes(e,t.annotation)},appinfo:function(e,t){t.appinfo||(t.appinfo=[]),t.appinfo.push(this.getChildValue(e))
},documentation:function(e,t){t.documentation||(t.documentation=[]);var i=this.getChildValue(e);
t.documentation.push({lang:e.getAttribute("xml:lang"),textContent:i.replace(this.regExes.trimSpace,"")})
},simpleType:function(e,t){this.readChildNodes(e,t)},restriction:function(e,t){t.base=e.getAttribute("base"),this.readRestriction(e,t)
}}},readRestriction:function(e,t){for(var i,r,s=e.childNodes,n=0,a=s.length;a>n;++n)i=s[n],1==i.nodeType&&(r=i.nodeName.split(":").pop(),i=i.getAttribute("value"),t[r]?("string"==typeof t[r]&&(t[r]=[t[r]]),t[r].push(i)):t[r]=i)
},read:function(e){"string"==typeof e&&(e=OpenLayers.Format.XML.prototype.read.apply(this,[e])),e&&9==e.nodeType&&(e=e.documentElement);
var t={};if("ExceptionReport"===e.nodeName.split(":").pop()){var i=new OpenLayers.Format.OGCExceptionReport;
t.error=i.read(e)}else this.readNode(e,t);return t},CLASS_NAME:"OpenLayers.Format.WFSDescribeFeatureType"}),OpenLayers.Format.GeoRSS=OpenLayers.Class(OpenLayers.Format.XML,{rssns:"http://backend.userland.com/rss2",featureNS:"http://mapserver.gis.umn.edu/mapserver",georssns:"http://www.georss.org/georss",geons:"http://www.w3.org/2003/01/geo/wgs84_pos#",featureTitle:"Untitled",featureDescription:"No Description",gmlParser:null,xy:!1,createGeometryFromItem:function(e){var t=this.getElementsByTagNameNS(e,this.georssns,"point"),i=this.getElementsByTagNameNS(e,this.geons,"lat"),r=this.getElementsByTagNameNS(e,this.geons,"long"),s=this.getElementsByTagNameNS(e,this.georssns,"line"),n=this.getElementsByTagNameNS(e,this.georssns,"polygon"),a=this.getElementsByTagNameNS(e,this.georssns,"where");
if(e=this.getElementsByTagNameNS(e,this.georssns,"box"),0<t.length||0<i.length&&0<r.length){0<t.length?(i=OpenLayers.String.trim(t[0].firstChild.nodeValue).split(/\s+/),2!=i.length&&(i=OpenLayers.String.trim(t[0].firstChild.nodeValue).split(/\s*,\s*/))):i=[parseFloat(i[0].firstChild.nodeValue),parseFloat(r[0].firstChild.nodeValue)];
var o=new OpenLayers.Geometry.Point(i[1],i[0])}else if(0<s.length){for(i=OpenLayers.String.trim(this.getChildValue(s[0])).split(/\s+/),r=[],s=0,n=i.length;n>s;s+=2)t=new OpenLayers.Geometry.Point(i[s+1],i[s]),r.push(t);
o=new OpenLayers.Geometry.LineString(r)}else if(0<n.length){for(i=OpenLayers.String.trim(this.getChildValue(n[0])).split(/\s+/),r=[],s=0,n=i.length;n>s;s+=2)t=new OpenLayers.Geometry.Point(i[s+1],i[s]),r.push(t);
o=new OpenLayers.Geometry.Polygon([new OpenLayers.Geometry.LinearRing(r)])}else 0<a.length?(this.gmlParser||(this.gmlParser=new OpenLayers.Format.GML({xy:this.xy})),o=this.gmlParser.parseFeature(a[0]).geometry):0<e.length&&(i=OpenLayers.String.trim(e[0].firstChild.nodeValue).split(/\s+/),r=[],3<i.length&&(t=new OpenLayers.Geometry.Point(i[1],i[0]),r.push(t),t=new OpenLayers.Geometry.Point(i[1],i[2]),r.push(t),t=new OpenLayers.Geometry.Point(i[3],i[2]),r.push(t),t=new OpenLayers.Geometry.Point(i[3],i[0]),r.push(t),t=new OpenLayers.Geometry.Point(i[1],i[0]),r.push(t)),o=new OpenLayers.Geometry.Polygon([new OpenLayers.Geometry.LinearRing(r)]));
return o&&this.internalProjection&&this.externalProjection&&o.transform(this.externalProjection,this.internalProjection),o
},createFeatureFromItem:function(e){var t=this.createGeometryFromItem(e),i=this._getChildValue(e,"*","title",this.featureTitle),r=this._getChildValue(e,"*","description",this._getChildValue(e,"*","content",this._getChildValue(e,"*","summary",this.featureDescription))),s=this._getChildValue(e,"*","link");
if(!s)try{s=this.getElementsByTagNameNS(e,"*","link")[0].getAttribute("href")}catch(n){s=null
}return e=this._getChildValue(e,"*","id",null),t=new OpenLayers.Feature.Vector(t,{title:i,description:r,link:s}),t.fid=e,t
},_getChildValue:function(e,t,i,r){return(e=this.getElementsByTagNameNS(e,t,i))&&e[0]&&e[0].firstChild&&e[0].firstChild.nodeValue?this.getChildValue(e[0]):void 0==r?"":r
},read:function(e){"string"==typeof e&&(e=OpenLayers.Format.XML.prototype.read.apply(this,[e]));
var t=null,t=this.getElementsByTagNameNS(e,"*","item");0==t.length&&(t=this.getElementsByTagNameNS(e,"*","entry")),e=t.length;
for(var i=Array(e),r=0;e>r;r++)i[r]=this.createFeatureFromItem(t[r]);return i},write:function(e){var t;
if(OpenLayers.Util.isArray(e)){t=this.createElementNS(this.rssns,"rss");for(var i=0,r=e.length;r>i;i++)t.appendChild(this.createFeatureXML(e[i]))
}else t=this.createFeatureXML(e);return OpenLayers.Format.XML.prototype.write.apply(this,[t])
},createFeatureXML:function(e){var t=this.buildGeometryNode(e.geometry),i=this.createElementNS(this.rssns,"item"),r=this.createElementNS(this.rssns,"title");
r.appendChild(this.createTextNode(e.attributes.title?e.attributes.title:""));var s=this.createElementNS(this.rssns,"description");
s.appendChild(this.createTextNode(e.attributes.description?e.attributes.description:"")),i.appendChild(r),i.appendChild(s),e.attributes.link&&(r=this.createElementNS(this.rssns,"link"),r.appendChild(this.createTextNode(e.attributes.link)),i.appendChild(r));
for(var n in e.attributes)"link"!=n&&"title"!=n&&"description"!=n&&(r=this.createTextNode(e.attributes[n]),s=n,-1!=n.search(":")&&(s=n.split(":")[1]),s=this.createElementNS(this.featureNS,"feature:"+s),s.appendChild(r),i.appendChild(s));
return i.appendChild(t),i},buildGeometryNode:function(e){this.internalProjection&&this.externalProjection&&(e=e.clone(),e.transform(this.internalProjection,this.externalProjection));
var t;if("OpenLayers.Geometry.Polygon"==e.CLASS_NAME)t=this.createElementNS(this.georssns,"georss:polygon"),t.appendChild(this.buildCoordinatesNode(e.components[0]));
else if("OpenLayers.Geometry.LineString"==e.CLASS_NAME)t=this.createElementNS(this.georssns,"georss:line"),t.appendChild(this.buildCoordinatesNode(e));
else{if("OpenLayers.Geometry.Point"!=e.CLASS_NAME)throw"Couldn't parse "+e.CLASS_NAME;
t=this.createElementNS(this.georssns,"georss:point"),t.appendChild(this.buildCoordinatesNode(e))
}return t},buildCoordinatesNode:function(e){var t=null;if(e.components&&(t=e.components),t){e=t.length;
for(var i=Array(e),r=0;e>r;r++)i[r]=t[r].y+" "+t[r].x;t=i.join(" ")}else t=e.y+" "+e.x;
return this.createTextNode(t)},CLASS_NAME:"OpenLayers.Format.GeoRSS"}),OpenLayers.Format.WPSCapabilities=OpenLayers.Class(OpenLayers.Format.XML.VersionedOGC,{defaultVersion:"1.0.0",CLASS_NAME:"OpenLayers.Format.WPSCapabilities"}),OpenLayers.Format.WPSCapabilities.v1_0_0=OpenLayers.Class(OpenLayers.Format.XML,{namespaces:{ows:"http://www.opengis.net/ows/1.1",wps:"http://www.opengis.net/wps/1.0.0",xlink:"http://www.w3.org/1999/xlink"},regExes:{trimSpace:/^\s*|\s*$/g,removeSpace:/\s*/g,splitSpace:/\s+/,trimComma:/\s*,\s*/g},initialize:function(e){OpenLayers.Format.XML.prototype.initialize.apply(this,[e])
},read:function(e){"string"==typeof e&&(e=OpenLayers.Format.XML.prototype.read.apply(this,[e])),e&&9==e.nodeType&&(e=e.documentElement);
var t={};return this.readNode(e,t),t},readers:{wps:{Capabilities:function(e,t){this.readChildNodes(e,t)
},ProcessOfferings:function(e,t){t.processOfferings={},this.readChildNodes(e,t.processOfferings)
},Process:function(e,t){var i={processVersion:this.getAttributeNS(e,this.namespaces.wps,"processVersion")};
this.readChildNodes(e,i),t[i.identifier]=i},Languages:function(e,t){t.languages=[],this.readChildNodes(e,t.languages)
},Default:function(e,t){var i={isDefault:!0};this.readChildNodes(e,i),t.push(i)},Supported:function(e,t){var i={};
this.readChildNodes(e,i),t.push(i)}},ows:OpenLayers.Format.OWSCommon.v1_1_0.prototype.readers.ows},CLASS_NAME:"OpenLayers.Format.WPSCapabilities.v1_0_0"}),OpenLayers.Control.PinchZoom=OpenLayers.Class(OpenLayers.Control,{type:OpenLayers.Control.TYPE_TOOL,pinchOrigin:null,currentCenter:null,autoActivate:!0,preserveCenter:!1,initialize:function(){OpenLayers.Control.prototype.initialize.apply(this,arguments),this.handler=new OpenLayers.Handler.Pinch(this,{start:this.pinchStart,move:this.pinchMove,done:this.pinchDone},this.handlerOptions)
},pinchStart:function(e){var t=this.preserveCenter?this.map.getPixelFromLonLat(this.map.getCenter()):e.xy;
this.currentCenter=this.pinchOrigin=t},pinchMove:function(e,t){var i=t.scale,r=this.map.layerContainerOriginPx,s=this.pinchOrigin,n=this.preserveCenter?this.map.getPixelFromLonLat(this.map.getCenter()):e.xy,a=Math.round(r.x+n.x-s.x+(i-1)*(r.x-s.x)),r=Math.round(r.y+n.y-s.y+(i-1)*(r.y-s.y));
this.map.applyTransform(a,r,i),this.currentCenter=n},pinchDone:function(e,t,i){if(this.map.applyTransform(),e=this.map.getZoomForResolution(this.map.getResolution()/i.scale,!0),e!==this.map.getZoom()||!this.currentCenter.equals(this.pinchOrigin)){t=this.map.getResolutionForZoom(e),i=this.map.getLonLatFromPixel(this.pinchOrigin);
var r=this.currentCenter,s=this.map.getSize();i.lon+=t*(s.w/2-r.x),i.lat-=t*(s.h/2-r.y),this.map.div.clientWidth=this.map.div.clientWidth,this.map.setCenter(i,e)
}},CLASS_NAME:"OpenLayers.Control.PinchZoom"}),OpenLayers.Control.TouchNavigation=OpenLayers.Class(OpenLayers.Control,{dragPan:null,dragPanOptions:null,pinchZoom:null,pinchZoomOptions:null,clickHandlerOptions:null,documentDrag:!1,autoActivate:!0,initialize:function(){this.handlers={},OpenLayers.Control.prototype.initialize.apply(this,arguments)
},destroy:function(){this.deactivate(),this.dragPan&&this.dragPan.destroy(),this.dragPan=null,this.pinchZoom&&(this.pinchZoom.destroy(),delete this.pinchZoom),OpenLayers.Control.prototype.destroy.apply(this,arguments)
},activate:function(){return OpenLayers.Control.prototype.activate.apply(this,arguments)?(this.dragPan.activate(),this.handlers.click.activate(),this.pinchZoom.activate(),!0):!1
},deactivate:function(){return OpenLayers.Control.prototype.deactivate.apply(this,arguments)?(this.dragPan.deactivate(),this.handlers.click.deactivate(),this.pinchZoom.deactivate(),!0):!1
},draw:function(){var e={click:this.defaultClick,dblclick:this.defaultDblClick},t=OpenLayers.Util.extend({"double":!0,stopDouble:!0,pixelTolerance:2},this.clickHandlerOptions);
this.handlers.click=new OpenLayers.Handler.Click(this,e,t),this.dragPan=new OpenLayers.Control.DragPan(OpenLayers.Util.extend({map:this.map,documentDrag:this.documentDrag},this.dragPanOptions)),this.dragPan.draw(),this.pinchZoom=new OpenLayers.Control.PinchZoom(OpenLayers.Util.extend({map:this.map},this.pinchZoomOptions))
},defaultClick:function(e){e.lastTouches&&2==e.lastTouches.length&&this.map.zoomOut()
},defaultDblClick:function(e){this.map.zoomTo(this.map.zoom+1,e.xy)},CLASS_NAME:"OpenLayers.Control.TouchNavigation"}),OpenLayers.Console.warn("OpenLayers.Rico is deprecated"),OpenLayers.Rico=OpenLayers.Rico||{},OpenLayers.Rico.Color=OpenLayers.Class({initialize:function(e,t,i){this.rgb={r:e,g:t,b:i}
},setRed:function(e){this.rgb.r=e},setGreen:function(e){this.rgb.g=e},setBlue:function(e){this.rgb.b=e
},setHue:function(e){var t=this.asHSB();t.h=e,this.rgb=OpenLayers.Rico.Color.HSBtoRGB(t.h,t.s,t.b)
},setSaturation:function(e){var t=this.asHSB();t.s=e,this.rgb=OpenLayers.Rico.Color.HSBtoRGB(t.h,t.s,t.b)
},setBrightness:function(e){var t=this.asHSB();t.b=e,this.rgb=OpenLayers.Rico.Color.HSBtoRGB(t.h,t.s,t.b)
},darken:function(e){var t=this.asHSB();this.rgb=OpenLayers.Rico.Color.HSBtoRGB(t.h,t.s,Math.max(t.b-e,0))
},brighten:function(e){var t=this.asHSB();this.rgb=OpenLayers.Rico.Color.HSBtoRGB(t.h,t.s,Math.min(t.b+e,1))
},blend:function(e){this.rgb.r=Math.floor((this.rgb.r+e.rgb.r)/2),this.rgb.g=Math.floor((this.rgb.g+e.rgb.g)/2),this.rgb.b=Math.floor((this.rgb.b+e.rgb.b)/2)
},isBright:function(){return this.asHSB(),.5<this.asHSB().b},isDark:function(){return!this.isBright()
},asRGB:function(){return"rgb("+this.rgb.r+","+this.rgb.g+","+this.rgb.b+")"},asHex:function(){return"#"+this.rgb.r.toColorPart()+this.rgb.g.toColorPart()+this.rgb.b.toColorPart()
},asHSB:function(){return OpenLayers.Rico.Color.RGBtoHSB(this.rgb.r,this.rgb.g,this.rgb.b)
},toString:function(){return this.asHex()}}),OpenLayers.Rico.Color.createFromHex=function(e){if(4==e.length){var t=e;
e="#";for(var i=1;4>i;i++)e+=t.charAt(i)+t.charAt(i)}return 0==e.indexOf("#")&&(e=e.substring(1)),t=e.substring(0,2),i=e.substring(2,4),e=e.substring(4,6),new OpenLayers.Rico.Color(parseInt(t,16),parseInt(i,16),parseInt(e,16))
},OpenLayers.Rico.Color.createColorFromBackground=function(e){var t=OpenLayers.Element.getStyle(OpenLayers.Util.getElement(e),"backgroundColor");
return"transparent"==t&&e.parentNode?OpenLayers.Rico.Color.createColorFromBackground(e.parentNode):null==t?new OpenLayers.Rico.Color(255,255,255):0==t.indexOf("rgb(")?(e=t.substring(4,t.length-1).split(","),new OpenLayers.Rico.Color(parseInt(e[0]),parseInt(e[1]),parseInt(e[2]))):0==t.indexOf("#")?OpenLayers.Rico.Color.createFromHex(t):new OpenLayers.Rico.Color(255,255,255)
},OpenLayers.Rico.Color.HSBtoRGB=function(e,t,i){var r=0,s=0,n=0;if(0==t)n=s=r=parseInt(255*i+.5);
else{e=6*(e-Math.floor(e));var a=e-Math.floor(e),o=i*(1-t),l=i*(1-t*a);switch(t=i*(1-t*(1-a)),parseInt(e)){case 0:r=255*i+.5,s=255*t+.5,n=255*o+.5;
break;case 1:r=255*l+.5,s=255*i+.5,n=255*o+.5;break;case 2:r=255*o+.5,s=255*i+.5,n=255*t+.5;
break;case 3:r=255*o+.5,s=255*l+.5,n=255*i+.5;break;case 4:r=255*t+.5,s=255*o+.5,n=255*i+.5;
break;case 5:r=255*i+.5,s=255*o+.5,n=255*l+.5}}return{r:parseInt(r),g:parseInt(s),b:parseInt(n)}
},OpenLayers.Rico.Color.RGBtoHSB=function(e,t,i){var r,s=e>t?e:t;i>s&&(s=i);var n=t>e?e:t;
if(n>i&&(n=i),r=0!=s?(s-n)/s:0,0==r)e=0;else{var a=(s-e)/(s-n),o=(s-t)/(s-n);i=(s-i)/(s-n),e=(e==s?i-o:t==s?2+a-i:4+o-a)/6,0>e&&(e+=1)
}return{h:e,s:r,b:s/255}},OpenLayers.Style2=OpenLayers.Class({id:null,name:null,title:null,description:null,layerName:null,isDefault:!1,rules:null,initialize:function(e){OpenLayers.Util.extend(this,e),this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_")
},destroy:function(){for(var e=0,t=this.rules.length;t>e;e++)this.rules[e].destroy();
delete this.rules},clone:function(){var e=OpenLayers.Util.extend({},this);if(this.rules){e.rules=[];
for(var t=0,i=this.rules.length;i>t;++t)e.rules.push(this.rules[t].clone())}return new OpenLayers.Style2(e)
},CLASS_NAME:"OpenLayers.Style2"}),OpenLayers.Format.WFS=OpenLayers.Class(OpenLayers.Format.GML,{layer:null,wfsns:"http://www.opengis.net/wfs",ogcns:"http://www.opengis.net/ogc",initialize:function(e,t){OpenLayers.Format.GML.prototype.initialize.apply(this,[e]),this.layer=t,this.layer.featureNS&&(this.featureNS=this.layer.featureNS),this.layer.options.geometry_column&&(this.geometryName=this.layer.options.geometry_column),this.layer.options.typename&&(this.featureName=this.layer.options.typename)
},write:function(e){var t=this.createElementNS(this.wfsns,"wfs:Transaction");t.setAttribute("version","1.0.0"),t.setAttribute("service","WFS");
for(var i=0;i<e.length;i++)switch(e[i].state){case OpenLayers.State.INSERT:t.appendChild(this.insert(e[i]));
break;case OpenLayers.State.UPDATE:t.appendChild(this.update(e[i]));break;case OpenLayers.State.DELETE:t.appendChild(this.remove(e[i]))
}return OpenLayers.Format.XML.prototype.write.apply(this,[t])},createFeatureXML:function(e){var t=this.buildGeometryNode(e.geometry),i=this.createElementNS(this.featureNS,"feature:"+this.geometryName);
i.appendChild(t),t=this.createElementNS(this.featureNS,"feature:"+this.featureName),t.appendChild(i);
for(var r in e.attributes){var i=this.createTextNode(e.attributes[r]),s=r;-1!=r.search(":")&&(s=r.split(":")[1]),s=this.createElementNS(this.featureNS,"feature:"+s),s.appendChild(i),t.appendChild(s)
}return t},insert:function(e){var t=this.createElementNS(this.wfsns,"wfs:Insert");
return t.appendChild(this.createFeatureXML(e)),t},update:function(e){e.fid||OpenLayers.Console.userError(OpenLayers.i18n("noFID"));
var t=this.createElementNS(this.wfsns,"wfs:Update");t.setAttribute("typeName",this.featurePrefix+":"+this.featureName),t.setAttribute("xmlns:"+this.featurePrefix,this.featureNS);
var i=this.createElementNS(this.wfsns,"wfs:Property"),r=this.createElementNS(this.wfsns,"wfs:Name"),s=this.createTextNode(this.geometryName);
r.appendChild(s),i.appendChild(r),r=this.createElementNS(this.wfsns,"wfs:Value"),s=this.buildGeometryNode(e.geometry),e.layer&&s.setAttribute("srsName",e.layer.projection.getCode()),r.appendChild(s),i.appendChild(r),t.appendChild(i);
for(var n in e.attributes)i=this.createElementNS(this.wfsns,"wfs:Property"),r=this.createElementNS(this.wfsns,"wfs:Name"),r.appendChild(this.createTextNode(n)),i.appendChild(r),r=this.createElementNS(this.wfsns,"wfs:Value"),r.appendChild(this.createTextNode(e.attributes[n])),i.appendChild(r),t.appendChild(i);
return i=this.createElementNS(this.ogcns,"ogc:Filter"),n=this.createElementNS(this.ogcns,"ogc:FeatureId"),n.setAttribute("fid",e.fid),i.appendChild(n),t.appendChild(i),t
},remove:function(e){if(!e.fid)return OpenLayers.Console.userError(OpenLayers.i18n("noFID")),!1;
var t=this.createElementNS(this.wfsns,"wfs:Delete");t.setAttribute("typeName",this.featurePrefix+":"+this.featureName),t.setAttribute("xmlns:"+this.featurePrefix,this.featureNS);
var i=this.createElementNS(this.ogcns,"ogc:Filter"),r=this.createElementNS(this.ogcns,"ogc:FeatureId");
return r.setAttribute("fid",e.fid),i.appendChild(r),t.appendChild(i),t},destroy:function(){this.layer=null
},CLASS_NAME:"OpenLayers.Format.WFS"}),OpenLayers.Format.SLD.v1_0_0_GeoServer=OpenLayers.Class(OpenLayers.Format.SLD.v1_0_0,{version:"1.0.0",profile:"GeoServer",readers:OpenLayers.Util.applyDefaults({sld:OpenLayers.Util.applyDefaults({Priority:function(e,t){var i=this.readers.ogc._expression.call(this,e);
i&&(t.priority=i)},VendorOption:function(e,t){t.vendorOptions||(t.vendorOptions={}),t.vendorOptions[e.getAttribute("name")]=this.getChildValue(e)
},TextSymbolizer:function(e,t){OpenLayers.Format.SLD.v1_0_0.prototype.readers.sld.TextSymbolizer.apply(this,arguments);
var i=this.multipleSymbolizers?t.symbolizers[t.symbolizers.length-1]:t.symbolizer.Text;
void 0===i.graphic&&(i.graphic=!1)}},OpenLayers.Format.SLD.v1_0_0.prototype.readers.sld)},OpenLayers.Format.SLD.v1_0_0.prototype.readers),writers:OpenLayers.Util.applyDefaults({sld:OpenLayers.Util.applyDefaults({Priority:function(e){return this.writers.sld._OGCExpression.call(this,"sld:Priority",e)
},VendorOption:function(e){return this.createElementNSPlus("sld:VendorOption",{attributes:{name:e.name},value:e.value})
},TextSymbolizer:function(e){var t=OpenLayers.Format.SLD.v1_0_0.prototype.writers.sld.TextSymbolizer.apply(this,arguments);
return!1!==e.graphic&&(e.externalGraphic||e.graphicName)&&this.writeNode("Graphic",e,t),"priority"in e&&this.writeNode("Priority",e.priority,t),this.addVendorOptions(t,e)
},PointSymbolizer:function(e){var t=OpenLayers.Format.SLD.v1_0_0.prototype.writers.sld.PointSymbolizer.apply(this,arguments);
return this.addVendorOptions(t,e)},LineSymbolizer:function(e){var t=OpenLayers.Format.SLD.v1_0_0.prototype.writers.sld.LineSymbolizer.apply(this,arguments);
return this.addVendorOptions(t,e)},PolygonSymbolizer:function(e){var t=OpenLayers.Format.SLD.v1_0_0.prototype.writers.sld.PolygonSymbolizer.apply(this,arguments);
return this.addVendorOptions(t,e)}},OpenLayers.Format.SLD.v1_0_0.prototype.writers.sld)},OpenLayers.Format.SLD.v1_0_0.prototype.writers),addVendorOptions:function(e,t){if(t.vendorOptions)for(var i in t.vendorOptions)this.writeNode("VendorOption",{name:i,value:t.vendorOptions[i]},e);
return e},CLASS_NAME:"OpenLayers.Format.SLD.v1_0_0_GeoServer"}),OpenLayers.Layer.Boxes=OpenLayers.Class(OpenLayers.Layer.Markers,{drawMarker:function(e){var t=this.map.getLayerPxFromLonLat({lon:e.bounds.left,lat:e.bounds.top}),i=this.map.getLayerPxFromLonLat({lon:e.bounds.right,lat:e.bounds.bottom});
null==i||null==t?e.display(!1):(t=e.draw(t,{w:Math.max(1,i.x-t.x),h:Math.max(1,i.y-t.y)}),e.drawn||(this.div.appendChild(t),e.drawn=!0))
},removeMarker:function(e){OpenLayers.Util.removeItem(this.markers,e),null!=e.div&&e.div.parentNode==this.div&&this.div.removeChild(e.div)
},CLASS_NAME:"OpenLayers.Layer.Boxes"}),OpenLayers.Format.WFSCapabilities.v1_0_0=OpenLayers.Class(OpenLayers.Format.WFSCapabilities.v1,{readers:{wfs:OpenLayers.Util.applyDefaults({Service:function(e,t){t.service={},this.readChildNodes(e,t.service)
},Fees:function(e,t){var i=this.getChildValue(e);i&&"none"!=i.toLowerCase()&&(t.fees=i)
},AccessConstraints:function(e,t){var i=this.getChildValue(e);i&&"none"!=i.toLowerCase()&&(t.accessConstraints=i)
},OnlineResource:function(e,t){var i=this.getChildValue(e);i&&"none"!=i.toLowerCase()&&(t.onlineResource=i)
},Keywords:function(e,t){var i=this.getChildValue(e);i&&"none"!=i.toLowerCase()&&(t.keywords=i.split(", "))
},Capability:function(e,t){t.capability={},this.readChildNodes(e,t.capability)},Request:function(e,t){t.request={},this.readChildNodes(e,t.request)
},GetFeature:function(e,t){t.getfeature={href:{},formats:[]},this.readChildNodes(e,t.getfeature)
},ResultFormat:function(e,t){for(var i,r=e.childNodes,s=0;s<r.length;s++)i=r[s],1==i.nodeType&&t.formats.push(i.nodeName)
},DCPType:function(e,t){this.readChildNodes(e,t)},HTTP:function(e,t){this.readChildNodes(e,t.href)
},Get:function(e,t){t.get=e.getAttribute("onlineResource")},Post:function(e,t){t.post=e.getAttribute("onlineResource")
},SRS:function(e,t){var i=this.getChildValue(e);i&&(t.srs=i)}},OpenLayers.Format.WFSCapabilities.v1.prototype.readers.wfs)},CLASS_NAME:"OpenLayers.Format.WFSCapabilities.v1_0_0"}),OpenLayers.Format.WMSCapabilities.v1_3=OpenLayers.Class(OpenLayers.Format.WMSCapabilities.v1,{readers:{wms:OpenLayers.Util.applyDefaults({WMS_Capabilities:function(e,t){this.readChildNodes(e,t)
},LayerLimit:function(e,t){t.layerLimit=parseInt(this.getChildValue(e))},MaxWidth:function(e,t){t.maxWidth=parseInt(this.getChildValue(e))
},MaxHeight:function(e,t){t.maxHeight=parseInt(this.getChildValue(e))},BoundingBox:function(e,t){var i=OpenLayers.Format.WMSCapabilities.v1.prototype.readers.wms.BoundingBox.apply(this,[e,t]);
i.srs=e.getAttribute("CRS"),t.bbox[i.srs]=i},CRS:function(e,t){this.readers.wms.SRS.apply(this,[e,t])
},EX_GeographicBoundingBox:function(e,t){t.llbbox=[],this.readChildNodes(e,t.llbbox)
},westBoundLongitude:function(e,t){t[0]=this.getChildValue(e)},eastBoundLongitude:function(e,t){t[2]=this.getChildValue(e)
},southBoundLatitude:function(e,t){t[1]=this.getChildValue(e)},northBoundLatitude:function(e,t){t[3]=this.getChildValue(e)
},MinScaleDenominator:function(e,t){t.maxScale=parseFloat(this.getChildValue(e)).toPrecision(16)
},MaxScaleDenominator:function(e,t){t.minScale=parseFloat(this.getChildValue(e)).toPrecision(16)
},Dimension:function(e,t){var i={name:e.getAttribute("name").toLowerCase(),units:e.getAttribute("units"),unitsymbol:e.getAttribute("unitSymbol"),nearestVal:"1"===e.getAttribute("nearestValue"),multipleVal:"1"===e.getAttribute("multipleValues"),"default":e.getAttribute("default")||"",current:"1"===e.getAttribute("current"),values:this.getChildValue(e).split(",")};
t.dimensions[i.name]=i},Keyword:function(e,t){var i={value:this.getChildValue(e),vocabulary:e.getAttribute("vocabulary")};
t.keywords&&t.keywords.push(i)}},OpenLayers.Format.WMSCapabilities.v1.prototype.readers.wms),sld:{UserDefinedSymbolization:function(e,t){this.readers.wms.UserDefinedSymbolization.apply(this,[e,t]),t.userSymbols.inlineFeature=1==parseInt(e.getAttribute("InlineFeature")),t.userSymbols.remoteWCS=1==parseInt(e.getAttribute("RemoteWCS"))
},DescribeLayer:function(e,t){this.readers.wms.DescribeLayer.apply(this,[e,t])},GetLegendGraphic:function(e,t){this.readers.wms.GetLegendGraphic.apply(this,[e,t])
}}},CLASS_NAME:"OpenLayers.Format.WMSCapabilities.v1_3"}),OpenLayers.Layer.Zoomify=OpenLayers.Class(OpenLayers.Layer.Grid,{size:null,isBaseLayer:!0,standardTileSize:256,tileOriginCorner:"tl",numberOfTiers:0,tileCountUpToTier:null,tierSizeInTiles:null,tierImageSize:null,initialize:function(e,t,i,r){this.initializeZoomify(i),OpenLayers.Layer.Grid.prototype.initialize.apply(this,[e,t,i,{},r])
},initializeZoomify:function(e){var t=e.clone();for(this.size=e.clone(),e=new OpenLayers.Size(Math.ceil(t.w/this.standardTileSize),Math.ceil(t.h/this.standardTileSize)),this.tierSizeInTiles=[e],this.tierImageSize=[t];t.w>this.standardTileSize||t.h>this.standardTileSize;)t=new OpenLayers.Size(Math.floor(t.w/2),Math.floor(t.h/2)),e=new OpenLayers.Size(Math.ceil(t.w/this.standardTileSize),Math.ceil(t.h/this.standardTileSize)),this.tierSizeInTiles.push(e),this.tierImageSize.push(t);
for(this.tierSizeInTiles.reverse(),this.tierImageSize.reverse(),this.numberOfTiers=this.tierSizeInTiles.length,t=[1],this.tileCountUpToTier=[0],e=1;e<this.numberOfTiers;e++)t.unshift(Math.pow(2,e)),this.tileCountUpToTier.push(this.tierSizeInTiles[e-1].w*this.tierSizeInTiles[e-1].h+this.tileCountUpToTier[e-1]);
this.serverResolutions||(this.serverResolutions=t)},destroy:function(){OpenLayers.Layer.Grid.prototype.destroy.apply(this,arguments),this.tileCountUpToTier.length=0,this.tierSizeInTiles.length=0,this.tierImageSize.length=0
},clone:function(e){return null==e&&(e=new OpenLayers.Layer.Zoomify(this.name,this.url,this.size,this.options)),e=OpenLayers.Layer.Grid.prototype.clone.apply(this,[e])
},getURL:function(e){e=this.adjustBounds(e);var t=this.getServerResolution(),i=Math.round((e.left-this.tileOrigin.lon)/(t*this.tileSize.w));
return e=Math.round((this.tileOrigin.lat-e.top)/(t*this.tileSize.h)),t=this.getZoomForResolution(t),i="TileGroup"+Math.floor((i+e*this.tierSizeInTiles[t].w+this.tileCountUpToTier[t])/256)+"/"+t+"-"+i+"-"+e+".jpg",t=this.url,OpenLayers.Util.isArray(t)&&(t=this.selectUrl(i,t)),t+i
},getImageSize:function(){if(0<arguments.length){var e=this.adjustBounds(arguments[0]),t=this.getServerResolution(),i=Math.round((e.left-this.tileOrigin.lon)/(t*this.tileSize.w)),e=Math.round((this.tileOrigin.lat-e.top)/(t*this.tileSize.h)),t=this.getZoomForResolution(t),r=this.standardTileSize,s=this.standardTileSize;
return i==this.tierSizeInTiles[t].w-1&&(r=this.tierImageSize[t].w%this.standardTileSize),e==this.tierSizeInTiles[t].h-1&&(s=this.tierImageSize[t].h%this.standardTileSize),new OpenLayers.Size(r,s)
}return this.tileSize},setMap:function(){OpenLayers.Layer.Grid.prototype.setMap.apply(this,arguments),this.tileOrigin=new OpenLayers.LonLat(this.map.maxExtent.left,this.map.maxExtent.top)
},CLASS_NAME:"OpenLayers.Layer.Zoomify"}),OpenLayers.Layer.MapServer=OpenLayers.Class(OpenLayers.Layer.Grid,{DEFAULT_PARAMS:{mode:"map",map_imagetype:"png"},initialize:function(e,t,i,r){OpenLayers.Layer.Grid.prototype.initialize.apply(this,arguments),this.params=OpenLayers.Util.applyDefaults(this.params,this.DEFAULT_PARAMS),(null==r||null==r.isBaseLayer)&&(this.isBaseLayer="true"!=this.params.transparent&&1!=this.params.transparent)
},clone:function(e){return null==e&&(e=new OpenLayers.Layer.MapServer(this.name,this.url,this.params,this.getOptions())),e=OpenLayers.Layer.Grid.prototype.clone.apply(this,[e])
},getURL:function(e){e=this.adjustBounds(e),e=[e.left,e.bottom,e.right,e.top];var t=this.getImageSize();
return this.getFullRequestString({mapext:e,imgext:e,map_size:[t.w,t.h],imgx:t.w/2,imgy:t.h/2,imgxy:[t.w,t.h]})
},getFullRequestString:function(e,t){var i=null==t?this.url:t,r=OpenLayers.Util.extend({},this.params),r=OpenLayers.Util.extend(r,e),s=OpenLayers.Util.getParameterString(r);
OpenLayers.Util.isArray(i)&&(i=this.selectUrl(s,i));var n,s=OpenLayers.Util.upperCaseObject(OpenLayers.Util.getParameters(i));
for(n in r)n.toUpperCase()in s&&delete r[n];return s=OpenLayers.Util.getParameterString(r),r=i,s=s.replace(/,/g,"+"),""!=s&&(n=i.charAt(i.length-1),r="&"==n||"?"==n?r+s:-1==i.indexOf("?")?r+("?"+s):r+("&"+s)),r
},CLASS_NAME:"OpenLayers.Layer.MapServer"}),OpenLayers.Renderer.VML=OpenLayers.Class(OpenLayers.Renderer.Elements,{xmlns:"urn:schemas-microsoft-com:vml",symbolCache:{},offset:null,initialize:function(){if(this.supported()){if(!document.namespaces.olv){document.namespaces.add("olv",this.xmlns);
for(var e=document.createStyleSheet(),t="shape rect oval fill stroke imagedata group textbox".split(" "),i=0,r=t.length;r>i;i++)e.addRule("olv\\:"+t[i],"behavior: url(#default#VML); position: absolute; display: inline-block;")
}OpenLayers.Renderer.Elements.prototype.initialize.apply(this,arguments)}},supported:function(){return!!document.namespaces
},setExtent:function(e,t){var i=OpenLayers.Renderer.Elements.prototype.setExtent.apply(this,arguments),r=this.getResolution(),s=e.left/r|0,r=e.top/r-this.size.h|0;
t||!this.offset?(this.offset={x:s,y:r},r=s=0):(s-=this.offset.x,r-=this.offset.y),this.root.coordorigin=s-this.xOffset+" "+r;
for(var s=[this.root,this.vectorRoot,this.textRoot],n=0,a=s.length;a>n;++n)r=s[n],r.coordsize=this.size.w+" "+this.size.h;
return this.root.style.flip="y",i},setSize:function(){OpenLayers.Renderer.prototype.setSize.apply(this,arguments);
for(var e,t=[this.rendererRoot,this.root,this.vectorRoot,this.textRoot],i=this.size.w+"px",r=this.size.h+"px",s=0,n=t.length;n>s;++s)e=t[s],e.style.width=i,e.style.height=r
},getNodeType:function(e,t){var i=null;switch(e.CLASS_NAME){case"OpenLayers.Geometry.Point":i=t.externalGraphic?"olv:rect":this.isComplexSymbol(t.graphicName)?"olv:shape":"olv:oval";
break;case"OpenLayers.Geometry.Rectangle":i="olv:rect";break;case"OpenLayers.Geometry.LineString":case"OpenLayers.Geometry.LinearRing":case"OpenLayers.Geometry.Polygon":case"OpenLayers.Geometry.Curve":i="olv:shape"
}return i},setStyle:function(e,t,i,r){t=t||e._style,i=i||e._options;var s=t.fillColor,n=t.title||t.graphicTitle;
if(n&&(e.title=n),"OpenLayers.Geometry.Point"===e._geometryClass)if(t.externalGraphic){i.isFilled=!0;
var s=t.graphicWidth||t.graphicHeight,n=t.graphicHeight||t.graphicWidth,s=s?s:2*t.pointRadius,n=n?n:2*t.pointRadius,a=this.getResolution(),o=void 0!=t.graphicXOffset?t.graphicXOffset:-(.5*s),l=void 0!=t.graphicYOffset?t.graphicYOffset:-(.5*n);
e.style.left=((r.x-this.featureDx)/a-this.offset.x+o|0)+"px",e.style.top=(r.y/a-this.offset.y-(l+n)|0)+"px",e.style.width=s+"px",e.style.height=n+"px",e.style.flip="y",s="none",i.isStroked=!1
}else this.isComplexSymbol(t.graphicName)?(n=this.importSymbol(t.graphicName),e.path=n.path,e.coordorigin=n.left+","+n.bottom,n=n.size,e.coordsize=n+","+n,this.drawCircle(e,r,t.pointRadius),e.style.flip="y"):this.drawCircle(e,r,t.pointRadius);
return i.isFilled?e.fillcolor=s:e.filled="false",r=e.getElementsByTagName("fill"),r=0==r.length?null:r[0],i.isFilled?(r||(r=this.createNode("olv:fill",e.id+"_fill")),r.opacity=t.fillOpacity,"OpenLayers.Geometry.Point"===e._geometryClass&&t.externalGraphic&&(t.graphicOpacity&&(r.opacity=t.graphicOpacity),r.src=t.externalGraphic,r.type="frame",t.graphicWidth&&t.graphicHeight||(r.aspect="atmost")),r.parentNode!=e&&e.appendChild(r)):r&&e.removeChild(r),s=t.rotation,(void 0!==s||void 0!==e._rotation)&&(e._rotation=s,t.externalGraphic?(this.graphicRotate(e,o,l,t),r.opacity=0):"OpenLayers.Geometry.Point"===e._geometryClass&&(e.style.rotation=s||0)),o=e.getElementsByTagName("stroke"),o=0==o.length?null:o[0],i.isStroked?(o||(o=this.createNode("olv:stroke",e.id+"_stroke"),e.appendChild(o)),o.on=!0,o.color=t.strokeColor,o.weight=t.strokeWidth+"px",o.opacity=t.strokeOpacity,o.endcap="butt"==t.strokeLinecap?"flat":t.strokeLinecap||"round",t.strokeDashstyle&&(o.dashstyle=this.dashStyle(t))):(e.stroked=!1,o&&(o.on=!1)),"inherit"!=t.cursor&&null!=t.cursor&&(e.style.cursor=t.cursor),e
},graphicRotate:function(e,t,i,r){r=r||e._style;var s,n,a=r.rotation||0;if(r.graphicWidth&&r.graphicHeight){n=Math.max(r.graphicWidth,r.graphicHeight),s=r.graphicWidth/r.graphicHeight;
var o=Math.round(r.graphicWidth||n*s),l=Math.round(r.graphicHeight||n);e.style.width=o+"px",e.style.height=l+"px";
var h=document.getElementById(e.id+"_image");h||(h=this.createNode("olv:imagedata",e.id+"_image"),e.appendChild(h)),h.style.width=o+"px",h.style.height=l+"px",h.src=r.externalGraphic,h.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='', sizingMethod='scale')",h=a*Math.PI/180,a=Math.sin(h),h=Math.cos(h),a="progid:DXImageTransform.Microsoft.Matrix(M11="+h+",M12="+-a+",M21="+a+",M22="+h+",SizingMethod='auto expand')\n",(h=r.graphicOpacity||r.fillOpacity)&&1!=h&&(a+="progid:DXImageTransform.Microsoft.BasicImage(opacity="+h+")\n"),e.style.filter=a,a=new OpenLayers.Geometry.Point(-t,-i),o=new OpenLayers.Bounds(0,0,o,l).toGeometry(),o.rotate(r.rotation,a),o=o.getBounds(),e.style.left=Math.round(parseInt(e.style.left)+o.left)+"px",e.style.top=Math.round(parseInt(e.style.top)-o.bottom)+"px"
}else{var p=new Image;p.onreadystatechange=OpenLayers.Function.bind(function(){("complete"==p.readyState||"interactive"==p.readyState)&&(s=p.width/p.height,n=Math.max(2*r.pointRadius,r.graphicWidth||0,r.graphicHeight||0),t*=s,r.graphicWidth=n*s,r.graphicHeight=n,this.graphicRotate(e,t,i,r))
},this),p.src=r.externalGraphic}},postDraw:function(e){e.style.visibility="visible";
var t=e._style.fillColor,i=e._style.strokeColor;"none"==t&&e.fillcolor!=t&&(e.fillcolor=t),"none"==i&&e.strokecolor!=i&&(e.strokecolor=i)
},setNodeDimension:function(e,t){var i=t.getBounds();if(i){var r=this.getResolution(),i=new OpenLayers.Bounds((i.left-this.featureDx)/r-this.offset.x|0,i.bottom/r-this.offset.y|0,(i.right-this.featureDx)/r-this.offset.x|0,i.top/r-this.offset.y|0);
e.style.left=i.left+"px",e.style.top=i.top+"px",e.style.width=i.getWidth()+"px",e.style.height=i.getHeight()+"px",e.coordorigin=i.left+" "+i.top,e.coordsize=i.getWidth()+" "+i.getHeight()
}},dashStyle:function(e){switch(e=e.strokeDashstyle){case"solid":case"dot":case"dash":case"dashdot":case"longdash":case"longdashdot":return e;
default:return e=e.split(/[ ,]/),2==e.length?1*e[0]>=2*e[1]?"longdash":1==e[0]||1==e[1]?"dot":"dash":4==e.length?1*e[0]>=2*e[1]?"longdashdot":"dashdot":"solid"
}},createNode:function(e,t){var i=document.createElement(e);return t&&(i.id=t),i.unselectable="on",i.onselectstart=OpenLayers.Function.False,i
},nodeTypeCompare:function(e,t){var i=t,r=i.indexOf(":");-1!=r&&(i=i.substr(r+1));
var s=e.nodeName,r=s.indexOf(":");return-1!=r&&(s=s.substr(r+1)),i==s},createRenderRoot:function(){return this.nodeFactory(this.container.id+"_vmlRoot","div")
},createRoot:function(e){return this.nodeFactory(this.container.id+e,"olv:group")
},drawPoint:function(e,t){return this.drawCircle(e,t,1)},drawCircle:function(e,t,i){if(!isNaN(t.x)&&!isNaN(t.y)){var r=this.getResolution();
return e.style.left=((t.x-this.featureDx)/r-this.offset.x|0)-i+"px",e.style.top=(t.y/r-this.offset.y|0)-i+"px",t=2*i,e.style.width=t+"px",e.style.height=t+"px",e
}return!1},drawLineString:function(e,t){return this.drawLine(e,t,!1)},drawLinearRing:function(e,t){return this.drawLine(e,t,!0)
},drawLine:function(e,t,i){this.setNodeDimension(e,t);for(var r,s,n=this.getResolution(),a=t.components.length,o=Array(a),l=0;a>l;l++)r=t.components[l],s=(r.x-this.featureDx)/n-this.offset.x|0,r=r.y/n-this.offset.y|0,o[l]=" "+s+","+r+" l ";
return t=i?" x e":" e",e.path="m"+o.join("")+t,e},drawPolygon:function(e,t){this.setNodeDimension(e,t);
var i,r,s,n,a,o,l,h,p,u,c=this.getResolution(),y=[];for(i=0,r=t.components.length;r>i;i++){for(y.push("m"),s=t.components[i].components,n=0===i,o=a=null,l=0,h=s.length;h>l;l++)p=s[l],u=(p.x-this.featureDx)/c-this.offset.x|0,p=p.y/c-this.offset.y|0,u=" "+u+","+p,y.push(u),0==l&&y.push(" l"),n||(a?a!=u&&(o?o!=u&&(n=!0):o=u):a=u);
y.push(n?" x ":" ")}return y.push("e"),e.path=y.join(""),e},drawRectangle:function(e,t){var i=this.getResolution();
return e.style.left=((t.x-this.featureDx)/i-this.offset.x|0)+"px",e.style.top=(t.y/i-this.offset.y|0)+"px",e.style.width=(t.width/i|0)+"px",e.style.height=(t.height/i|0)+"px",e
},drawText:function(e,t,i){var r=this.nodeFactory(e+this.LABEL_ID_SUFFIX,"olv:rect"),s=this.nodeFactory(e+this.LABEL_ID_SUFFIX+"_textbox","olv:textbox"),n=this.getResolution();
r.style.left=((i.x-this.featureDx)/n-this.offset.x|0)+"px",r.style.top=(i.y/n-this.offset.y|0)+"px",r.style.flip="y",s.innerText=t.label,"inherit"!=t.cursor&&null!=t.cursor&&(s.style.cursor=t.cursor),t.fontColor&&(s.style.color=t.fontColor),t.fontOpacity&&(s.style.filter="alpha(opacity="+100*t.fontOpacity+")"),t.fontFamily&&(s.style.fontFamily=t.fontFamily),t.fontSize&&(s.style.fontSize=t.fontSize),t.fontWeight&&(s.style.fontWeight=t.fontWeight),t.fontStyle&&(s.style.fontStyle=t.fontStyle),!0===t.labelSelect&&(r._featureId=e,s._featureId=e,s._geometry=i,s._geometryClass=i.CLASS_NAME),s.style.whiteSpace="nowrap",s.inset="1px,0px,0px,0px",r.parentNode||(r.appendChild(s),this.textRoot.appendChild(r)),t=t.labelAlign||"cm",1==t.length&&(t+="m"),e=s.clientWidth*OpenLayers.Renderer.VML.LABEL_SHIFT[t.substr(0,1)],s=s.clientHeight*OpenLayers.Renderer.VML.LABEL_SHIFT[t.substr(1,1)],r.style.left=parseInt(r.style.left)-e-1+"px",r.style.top=parseInt(r.style.top)+s+"px"
},moveRoot:function(e){var t=this.map.getLayer(e.container.id);t instanceof OpenLayers.Layer.Vector.RootContainer&&(t=this.map.getLayer(this.container.id)),t&&t.renderer.clear(),OpenLayers.Renderer.Elements.prototype.moveRoot.apply(this,arguments),t&&t.redraw()
},importSymbol:function(e){var t=this.container.id+"-"+e,i=this.symbolCache[t];if(i)return i;
if(i=OpenLayers.Renderer.symbol[e],!i)throw Error(e+" is not a valid symbol name");
e=new OpenLayers.Bounds(Number.MAX_VALUE,Number.MAX_VALUE,0,0);for(var r=["m"],s=0;s<i.length;s+=2){var n=i[s],a=i[s+1];
e.left=Math.min(e.left,n),e.bottom=Math.min(e.bottom,a),e.right=Math.max(e.right,n),e.top=Math.max(e.top,a),r.push(n),r.push(a),0==s&&r.push("l")
}return r.push("x e"),i=r.join(" "),r=(e.getWidth()-e.getHeight())/2,r>0?(e.bottom-=r,e.top+=r):(e.left+=r,e.right-=r),i={path:i,size:e.getWidth(),left:e.left,bottom:e.bottom},this.symbolCache[t]=i
},CLASS_NAME:"OpenLayers.Renderer.VML"}),OpenLayers.Renderer.VML.LABEL_SHIFT={l:0,c:.5,r:1,t:0,m:.5,b:1},OpenLayers.Control.CacheRead=OpenLayers.Class(OpenLayers.Control,{fetchEvent:"tileloadstart",layers:null,autoActivate:!0,setMap:function(e){OpenLayers.Control.prototype.setMap.apply(this,arguments);
var t,i=this.layers||e.layers;for(t=i.length-1;t>=0;--t)this.addLayer({layer:i[t]});
this.layers||e.events.on({addlayer:this.addLayer,removeLayer:this.removeLayer,scope:this})
},addLayer:function(e){e.layer.events.register(this.fetchEvent,this,this.fetch)},removeLayer:function(e){e.layer.events.unregister(this.fetchEvent,this,this.fetch)
},fetch:function(e){if(this.active&&window.localStorage&&e.tile instanceof OpenLayers.Tile.Image){var t=e.tile,i=t.url;
!t.layer.crossOriginKeyword&&OpenLayers.ProxyHost&&0===i.indexOf(OpenLayers.ProxyHost)&&(i=OpenLayers.Control.CacheWrite.urlMap[i]),(i=window.localStorage.getItem("olCache_"+i))&&(t.url=i,"tileerror"===e.type&&t.setImgSrc(i))
}},destroy:function(){if(this.layers||this.map){var e,t=this.layers||this.map.layers;
for(e=t.length-1;e>=0;--e)this.removeLayer({layer:t[e]})}this.map&&this.map.events.un({addlayer:this.addLayer,removeLayer:this.removeLayer,scope:this}),OpenLayers.Control.prototype.destroy.apply(this,arguments)
},CLASS_NAME:"OpenLayers.Control.CacheRead"}),OpenLayers.Protocol.WFS.v1_0_0=OpenLayers.Class(OpenLayers.Protocol.WFS.v1,{version:"1.0.0",CLASS_NAME:"OpenLayers.Protocol.WFS.v1_0_0"}),OpenLayers.Format.WMSGetFeatureInfo=OpenLayers.Class(OpenLayers.Format.XML,{layerIdentifier:"_layer",featureIdentifier:"_feature",regExes:{trimSpace:/^\s*|\s*$/g,removeSpace:/\s*/g,splitSpace:/\s+/,trimComma:/\s*,\s*/g},gmlFormat:null,read:function(e){"string"==typeof e&&(e=OpenLayers.Format.XML.prototype.read.apply(this,[e]));
var t=e.documentElement;if(t){var i=this["read_"+t.nodeName];e=i?i.call(this,t):new OpenLayers.Format.GML(this.options?this.options:{}).read(e)
}return e},read_msGMLOutput:function(e){var t=[];if(e=this.getSiblingNodesByTagCriteria(e,this.layerIdentifier))for(var i=0,r=e.length;r>i;++i){var s=e[i],n=s.nodeName;
if(s.prefix&&(n=n.split(":")[1]),n=n.replace(this.layerIdentifier,""),s=this.getSiblingNodesByTagCriteria(s,this.featureIdentifier))for(var a=0;a<s.length;a++){var o=s[a],l=this.parseGeometry(o),o=this.parseAttributes(o),o=new OpenLayers.Feature.Vector(l.geometry,o,null);
o.bounds=l.bounds,o.type=n,t.push(o)}}return t},read_FeatureInfoResponse:function(e){var t=[];
e=this.getElementsByTagNameNS(e,"*","FIELDS");for(var i=0,r=e.length;r>i;i++){var s,n=e[i],a={},o=n.attributes.length;
if(o>0)for(s=0;o>s;s++){var l=n.attributes[s];a[l.nodeName]=l.nodeValue}else for(n=n.childNodes,s=0,o=n.length;o>s;++s)l=n[s],3!=l.nodeType&&(a[l.getAttribute("name")]=l.getAttribute("value"));
t.push(new OpenLayers.Feature.Vector(null,a,null))}return t},getSiblingNodesByTagCriteria:function(e,t){var i,r,s,n,a=[];
if(e&&e.hasChildNodes()){i=e.childNodes,s=i.length;for(var o=0;s>o;o++){for(n=i[o];n&&1!=n.nodeType;)n=n.nextSibling,o++;
r=n?n.nodeName:"",0<r.length&&-1<r.indexOf(t)?a.push(n):(r=this.getSiblingNodesByTagCriteria(n,t),0<r.length&&(0==a.length?a=r:a.push(r)))
}}return a},parseAttributes:function(e){var t={};if(1==e.nodeType){e=e.childNodes;
for(var i=e.length,r=0;i>r;++r){var s=e[r];if(1==s.nodeType){var n=s.childNodes,s=s.prefix?s.nodeName.split(":")[1]:s.nodeName;
0==n.length?t[s]=null:1==n.length&&(n=n[0],3==n.nodeType||4==n.nodeType)&&(n=n.nodeValue.replace(this.regExes.trimSpace,""),t[s]=n)
}}}return t},parseGeometry:function(e){this.gmlFormat||(this.gmlFormat=new OpenLayers.Format.GML),e=this.gmlFormat.parseFeature(e);
var t,i=null;return e&&(t=e.geometry&&e.geometry.clone(),i=e.bounds&&e.bounds.clone(),e.destroy()),{geometry:t,bounds:i}
},CLASS_NAME:"OpenLayers.Format.WMSGetFeatureInfo"}),OpenLayers.Control.WMTSGetFeatureInfo=OpenLayers.Class(OpenLayers.Control,{hover:!1,requestEncoding:"KVP",drillDown:!1,maxFeatures:10,clickCallback:"click",layers:null,queryVisible:!0,infoFormat:"text/html",vendorParams:{},format:null,formatOptions:null,handler:null,hoverRequest:null,pending:0,initialize:function(e){e=e||{},e.handlerOptions=e.handlerOptions||{},OpenLayers.Control.prototype.initialize.apply(this,[e]),this.format||(this.format=new OpenLayers.Format.WMSGetFeatureInfo(e.formatOptions)),!0===this.drillDown&&(this.hover=!1),this.hover?this.handler=new OpenLayers.Handler.Hover(this,{move:this.cancelHover,pause:this.getInfoForHover},OpenLayers.Util.extend(this.handlerOptions.hover||{},{delay:250})):(e={},e[this.clickCallback]=this.getInfoForClick,this.handler=new OpenLayers.Handler.Click(this,e,this.handlerOptions.click||{}))
},getInfoForClick:function(e){this.request(e.xy,{})},getInfoForHover:function(e){this.request(e.xy,{hover:!0})
},cancelHover:function(){this.hoverRequest&&(--this.pending,0>=this.pending&&(OpenLayers.Element.removeClass(this.map.viewPortDiv,"olCursorWait"),this.pending=0),this.hoverRequest.abort(),this.hoverRequest=null)
},findLayers:function(){for(var e,t=this.layers||this.map.layers,i=[],r=t.length-1;r>=0&&(e=t[r],!(e instanceof OpenLayers.Layer.WMTS)||e.requestEncoding!==this.requestEncoding||this.queryVisible&&!e.getVisibility()||(i.push(e),this.drillDown&&!this.hover));--r);return i
},buildRequestOptions:function(e,t){var i=this.map.getLonLatFromPixel(t),r=e.getURL(new OpenLayers.Bounds(i.lon,i.lat,i.lon,i.lat)),r=OpenLayers.Util.getParameters(r),i=e.getTileInfo(i);
return OpenLayers.Util.extend(r,{service:"WMTS",version:e.version,request:"GetFeatureInfo",infoFormat:this.infoFormat,i:i.i,j:i.j}),OpenLayers.Util.applyDefaults(r,this.vendorParams),{url:OpenLayers.Util.isArray(e.url)?e.url[0]:e.url,params:OpenLayers.Util.upperCaseObject(r),callback:function(i){this.handleResponse(t,i,e)
},scope:this}},request:function(e,t){t=t||{};var i=this.findLayers();if(0<i.length){for(var r,s,n=0,a=i.length;a>n;n++)s=i[n],r=this.events.triggerEvent("beforegetfeatureinfo",{xy:e,layer:s}),!1!==r&&(++this.pending,r=this.buildRequestOptions(s,e),r=OpenLayers.Request.GET(r),!0===t.hover&&(this.hoverRequest=r));
0<this.pending&&OpenLayers.Element.addClass(this.map.viewPortDiv,"olCursorWait")}},handleResponse:function(e,t,i){if(--this.pending,0>=this.pending&&(OpenLayers.Element.removeClass(this.map.viewPortDiv,"olCursorWait"),this.pending=0),t.status&&(200>t.status||300<=t.status))this.events.triggerEvent("exception",{xy:e,request:t,layer:i});
else{var r=t.responseXML;r&&r.documentElement||(r=t.responseText);var s,n;try{s=this.format.read(r)
}catch(a){n=!0,this.events.triggerEvent("exception",{xy:e,request:t,error:a,layer:i})
}n||this.events.triggerEvent("getfeatureinfo",{text:t.responseText,features:s,request:t,xy:e,layer:i})
}},CLASS_NAME:"OpenLayers.Control.WMTSGetFeatureInfo"}),OpenLayers.Protocol.CSW.v2_0_2=OpenLayers.Class(OpenLayers.Protocol,{formatOptions:null,initialize:function(e){OpenLayers.Protocol.prototype.initialize.apply(this,[e]),e.format||(this.format=new OpenLayers.Format.CSWGetRecords.v2_0_2(OpenLayers.Util.extend({},this.formatOptions)))
},destroy:function(){this.options&&!this.options.format&&this.format.destroy(),this.format=null,OpenLayers.Protocol.prototype.destroy.apply(this)
},read:function(e){e=OpenLayers.Util.extend({},e),OpenLayers.Util.applyDefaults(e,this.options||{});
var t=new OpenLayers.Protocol.Response({requestType:"read"}),i=this.format.write(e.params||e);
return t.priv=OpenLayers.Request.POST({url:e.url,callback:this.createCallback(this.handleRead,t,e),params:e.params,headers:e.headers,data:i}),t
},handleRead:function(e,t){if(t.callback){var i=e.priv;200<=i.status&&300>i.status?(e.data=this.parseData(i),e.code=OpenLayers.Protocol.Response.SUCCESS):e.code=OpenLayers.Protocol.Response.FAILURE,t.callback.call(t.scope,e)
}},parseData:function(e){var t=e.responseXML;return t&&t.documentElement||(t=e.responseText),!t||0>=t.length?null:this.format.read(t)
},CLASS_NAME:"OpenLayers.Protocol.CSW.v2_0_2"}),OpenLayers.Format.WCSCapabilities.v1_1_0=OpenLayers.Class(OpenLayers.Format.WCSCapabilities.v1,{namespaces:{wcs:"http://www.opengis.net/wcs/1.1",xlink:"http://www.w3.org/1999/xlink",xsi:"http://www.w3.org/2001/XMLSchema-instance",ows:"http://www.opengis.net/ows/1.1"},errorProperty:"operationsMetadata",readers:{wcs:OpenLayers.Util.applyDefaults({Capabilities:function(e,t){this.readChildNodes(e,t)
},Contents:function(e,t){t.contentMetadata=[],this.readChildNodes(e,t.contentMetadata)
},CoverageSummary:function(e,t){var i={};this.readChildNodes(e,i),t.push(i)},Identifier:function(e,t){t.identifier=this.getChildValue(e)
},Title:function(e,t){t.title=this.getChildValue(e)},Abstract:function(e,t){t["abstract"]=this.getChildValue(e)
},SupportedCRS:function(e,t){var i=this.getChildValue(e);i&&(t.supportedCRS||(t.supportedCRS=[]),t.supportedCRS.push(i))
},SupportedFormat:function(e,t){var i=this.getChildValue(e);i&&(t.supportedFormat||(t.supportedFormat=[]),t.supportedFormat.push(i))
}},OpenLayers.Format.WCSCapabilities.v1.prototype.readers.wcs),ows:OpenLayers.Format.OWSCommon.v1_1_0.prototype.readers.ows},CLASS_NAME:"OpenLayers.Format.WCSCapabilities.v1_1_0"}),OpenLayers.Control.Graticule=OpenLayers.Class(OpenLayers.Control,{autoActivate:!0,intervals:[45,30,20,10,5,2,1,.5,.2,.1,.05,.01,.005,.002,.001],displayInLayerSwitcher:!0,visible:!0,numPoints:50,targetSize:200,layerName:null,labelled:!0,labelFormat:"dm",lineSymbolizer:{strokeColor:"#333",strokeWidth:1,strokeOpacity:.5},labelSymbolizer:{},gratLayer:null,initialize:function(e){e=e||{},e.layerName=e.layerName||OpenLayers.i18n("Graticule"),OpenLayers.Control.prototype.initialize.apply(this,[e]),this.labelSymbolizer.stroke=!1,this.labelSymbolizer.fill=!1,this.labelSymbolizer.label="${label}",this.labelSymbolizer.labelAlign="${labelAlign}",this.labelSymbolizer.labelXOffset="${xOffset}",this.labelSymbolizer.labelYOffset="${yOffset}"
},destroy:function(){this.deactivate(),OpenLayers.Control.prototype.destroy.apply(this,arguments),this.gratLayer&&(this.gratLayer.destroy(),this.gratLayer=null)
},draw:function(){if(OpenLayers.Control.prototype.draw.apply(this,arguments),!this.gratLayer){var e=new OpenLayers.Style({},{rules:[new OpenLayers.Rule({symbolizer:{Point:this.labelSymbolizer,Line:this.lineSymbolizer}})]});
this.gratLayer=new OpenLayers.Layer.Vector(this.layerName,{styleMap:new OpenLayers.StyleMap({"default":e}),visibility:this.visible,displayInLayerSwitcher:this.displayInLayerSwitcher})
}return this.div},activate:function(){return OpenLayers.Control.prototype.activate.apply(this,arguments)?(this.map.addLayer(this.gratLayer),this.map.events.register("moveend",this,this.update),this.update(),!0):!1
},deactivate:function(){return OpenLayers.Control.prototype.deactivate.apply(this,arguments)?(this.map.events.unregister("moveend",this,this.update),this.map.removeLayer(this.gratLayer),!0):!1
},update:function(){var e=this.map.getExtent();if(e){this.gratLayer.destroyFeatures();
var t=new OpenLayers.Projection("EPSG:4326"),i=this.map.getProjectionObject(),r=this.map.getResolution();
i.proj&&"longlat"==i.proj.projName&&(this.numPoints=1);var s=this.map.getCenter(),n=new OpenLayers.Pixel(s.lon,s.lat);
OpenLayers.Projection.transform(n,i,t);for(var a,s=this.targetSize*r,s=s*s,r=0;r<this.intervals.length;++r){a=this.intervals[r];
var o=a/2,l=n.offset({x:-o,y:-o}),o=n.offset({x:o,y:o});if(OpenLayers.Projection.transform(l,t,i),OpenLayers.Projection.transform(o,t,i),(l.x-o.x)*(l.x-o.x)+(l.y-o.y)*(l.y-o.y)<=s)break
}n.x=Math.floor(n.x/a)*a,n.y=Math.floor(n.y/a)*a;var h,r=0,s=[n.clone()],o=n.clone();
do o=o.offset({x:0,y:a}),h=OpenLayers.Projection.transform(o.clone(),t,i),s.unshift(o);
while(e.containsPixel(h)&&1e3>++r);o=n.clone();do o=o.offset({x:0,y:-a}),h=OpenLayers.Projection.transform(o.clone(),t,i),s.push(o);
while(e.containsPixel(h)&&1e3>++r);r=0,l=[n.clone()],o=n.clone();do o=o.offset({x:-a,y:0}),h=OpenLayers.Projection.transform(o.clone(),t,i),l.unshift(o);
while(e.containsPixel(h)&&1e3>++r);o=n.clone();do o=o.offset({x:a,y:0}),h=OpenLayers.Projection.transform(o.clone(),t,i),l.push(o);
while(e.containsPixel(h)&&1e3>++r);for(a=[],r=0;r<l.length;++r){h=l[r].x;for(var n=[],p=null,u=Math.min(s[0].y,90),o=Math.max(s[s.length-1].y,-90),c=(u-o)/this.numPoints,u=o,o=0;o<=this.numPoints;++o){var y=new OpenLayers.Geometry.Point(h,u);
y.transform(t,i),n.push(y),u+=c,y.y>=e.bottom&&!p&&(p=y)}this.labelled&&(p=new OpenLayers.Geometry.Point(p.x,e.bottom),h={value:h,label:this.labelled?OpenLayers.Util.getFormattedLonLat(h,"lon",this.labelFormat):"",labelAlign:"cb",xOffset:0,yOffset:2},this.gratLayer.addFeatures(new OpenLayers.Feature.Vector(p,h))),n=new OpenLayers.Geometry.LineString(n),a.push(new OpenLayers.Feature.Vector(n))
}for(o=0;o<s.length;++o)if(u=s[o].y,!(-90>u||u>90)){for(n=[],r=l[0].x,c=(l[l.length-1].x-r)/this.numPoints,h=r,p=null,r=0;r<=this.numPoints;++r)y=new OpenLayers.Geometry.Point(h,u),y.transform(t,i),n.push(y),h+=c,y.x<e.right&&(p=y);
this.labelled&&(p=new OpenLayers.Geometry.Point(e.right,p.y),h={value:u,label:this.labelled?OpenLayers.Util.getFormattedLonLat(u,"lat",this.labelFormat):"",labelAlign:"rb",xOffset:-2,yOffset:2},this.gratLayer.addFeatures(new OpenLayers.Feature.Vector(p,h))),n=new OpenLayers.Geometry.LineString(n),a.push(new OpenLayers.Feature.Vector(n))
}this.gratLayer.addFeatures(a)}},CLASS_NAME:"OpenLayers.Control.Graticule"}),OpenLayers.Console.warn("OpenLayers.Rico is deprecated"),OpenLayers.Rico=OpenLayers.Rico||{},OpenLayers.Rico.Corner={round:function(e,t){e=OpenLayers.Util.getElement(e),this._setOptions(t);
var i=this.options.color;"fromElement"==this.options.color&&(i=this._background(e));
var r=this.options.bgColor;"fromParent"==this.options.bgColor&&(r=this._background(e.offsetParent)),this._roundCornersImpl(e,i,r)
},changeColor:function(e,t){e.style.backgroundColor=t;for(var i=e.parentNode.getElementsByTagName("span"),r=0;r<i.length;r++)i[r].style.backgroundColor=t
},changeOpacity:function(e,t){var i="alpha(opacity="+100*t+")";e.style.opacity=t,e.style.filter=i;
for(var r=e.parentNode.getElementsByTagName("span"),s=0;s<r.length;s++)r[s].style.opacity=t,r[s].style.filter=i
},reRound:function(e,t){var i=e.parentNode.childNodes[2];e.parentNode.removeChild(e.parentNode.childNodes[0]),e.parentNode.removeChild(i),this.round(e.parentNode,t)
},_roundCornersImpl:function(e,t,i){this.options.border&&this._renderBorder(e,i),this._isTopRounded()&&this._roundTopCorners(e,t,i),this._isBottomRounded()&&this._roundBottomCorners(e,t,i)
},_renderBorder:function(e,t){var i="1px solid "+this._borderColor(t);e.innerHTML="<div "+("style='border-left: "+i+";border-right: "+i+"'")+">"+e.innerHTML+"</div>"
},_roundTopCorners:function(e,t,i){for(var r=this._createCorner(i),s=0;s<this.options.numSlices;s++)r.appendChild(this._createCornerSlice(t,i,s,"top"));
e.style.paddingTop=0,e.insertBefore(r,e.firstChild)},_roundBottomCorners:function(e,t,i){for(var r=this._createCorner(i),s=this.options.numSlices-1;s>=0;s--)r.appendChild(this._createCornerSlice(t,i,s,"bottom"));
e.style.paddingBottom=0,e.appendChild(r)},_createCorner:function(e){var t=document.createElement("div");
return t.style.backgroundColor=this._isTransparent()?"transparent":e,t},_createCornerSlice:function(e,t,i,r){var s=document.createElement("span"),n=s.style;
return n.backgroundColor=e,n.display="block",n.height="1px",n.overflow="hidden",n.fontSize="1px",e=this._borderColor(e,t),this.options.border&&0==i?(n.borderTopStyle="solid",n.borderTopWidth="1px",n.borderLeftWidth="0px",n.borderRightWidth="0px",n.borderBottomWidth="0px",n.height="0px",n.borderColor=e):e&&(n.borderColor=e,n.borderStyle="solid",n.borderWidth="0px 1px"),this.options.compact||i!=this.options.numSlices-1||(n.height="2px"),this._setMargin(s,i,r),this._setBorder(s,i,r),s
},_setOptions:function(e){this.options={corners:"all",color:"fromElement",bgColor:"fromParent",blend:!0,border:!1,compact:!1},OpenLayers.Util.extend(this.options,e||{}),this.options.numSlices=this.options.compact?2:4,this._isTransparent()&&(this.options.blend=!1)
},_whichSideTop:function(){return this._hasString(this.options.corners,"all","top")||0<=this.options.corners.indexOf("tl")&&0<=this.options.corners.indexOf("tr")?"":0<=this.options.corners.indexOf("tl")?"left":0<=this.options.corners.indexOf("tr")?"right":""
},_whichSideBottom:function(){return this._hasString(this.options.corners,"all","bottom")||0<=this.options.corners.indexOf("bl")&&0<=this.options.corners.indexOf("br")?"":0<=this.options.corners.indexOf("bl")?"left":0<=this.options.corners.indexOf("br")?"right":""
},_borderColor:function(e,t){return"transparent"==e?t:this.options.border?this.options.border:this.options.blend?this._blend(t,e):""
},_setMargin:function(e,t,i){t=this._marginSize(t),i="top"==i?this._whichSideTop():this._whichSideBottom(),"left"==i?(e.style.marginLeft=t+"px",e.style.marginRight="0px"):"right"==i?(e.style.marginRight=t+"px",e.style.marginLeft="0px"):(e.style.marginLeft=t+"px",e.style.marginRight=t+"px")
},_setBorder:function(e,t,i){t=this._borderSize(t),i="top"==i?this._whichSideTop():this._whichSideBottom(),"left"==i?(e.style.borderLeftWidth=t+"px",e.style.borderRightWidth="0px"):"right"==i?(e.style.borderRightWidth=t+"px",e.style.borderLeftWidth="0px"):(e.style.borderLeftWidth=t+"px",e.style.borderRightWidth=t+"px"),0!=this.options.border&&(e.style.borderLeftWidth=t+"px",e.style.borderRightWidth=t+"px")
},_marginSize:function(e){if(this._isTransparent())return 0;var t=[5,3,2,1],i=[3,2,1,0],r=[2,1],s=[1,0];
return this.options.compact&&this.options.blend?s[e]:this.options.compact?r[e]:this.options.blend?i[e]:t[e]
},_borderSize:function(e){var t=[5,3,2,1],i=[2,1,1,1],r=[1,0],s=[0,2,0,0];return this.options.compact&&(this.options.blend||this._isTransparent())?1:this.options.compact?r[e]:this.options.blend?i[e]:this.options.border?s[e]:this._isTransparent()?t[e]:0
},_hasString:function(e){for(var t=1;t<arguments.length;t++)if(0<=e.indexOf(arguments[t]))return!0;
return!1},_blend:function(e,t){var i=OpenLayers.Rico.Color.createFromHex(e);return i.blend(OpenLayers.Rico.Color.createFromHex(t)),i
},_background:function(e){try{return OpenLayers.Rico.Color.createColorFromBackground(e).asHex()
}catch(t){return"#ffffff"}},_isTransparent:function(){return"transparent"==this.options.color
},_isTopRounded:function(){return this._hasString(this.options.corners,"all","top","tl","tr")
},_isBottomRounded:function(){return this._hasString(this.options.corners,"all","bottom","bl","br")
},_hasSingleTextChild:function(e){return 1==e.childNodes.length&&3==e.childNodes[0].nodeType
}},OpenLayers.Control.NavigationHistory=OpenLayers.Class(OpenLayers.Control,{type:OpenLayers.Control.TYPE_TOGGLE,previous:null,previousOptions:null,next:null,nextOptions:null,limit:50,autoActivate:!0,clearOnDeactivate:!1,registry:null,nextStack:null,previousStack:null,listeners:null,restoring:!1,initialize:function(e){OpenLayers.Control.prototype.initialize.apply(this,[e]),this.registry=OpenLayers.Util.extend({moveend:this.getState},this.registry),e={trigger:OpenLayers.Function.bind(this.previousTrigger,this),displayClass:this.displayClass+" "+this.displayClass+"Previous"},OpenLayers.Util.extend(e,this.previousOptions),this.previous=new OpenLayers.Control.Button(e),e={trigger:OpenLayers.Function.bind(this.nextTrigger,this),displayClass:this.displayClass+" "+this.displayClass+"Next"},OpenLayers.Util.extend(e,this.nextOptions),this.next=new OpenLayers.Control.Button(e),this.clear()
},onPreviousChange:function(e){e&&!this.previous.active?this.previous.activate():!e&&this.previous.active&&this.previous.deactivate()
},onNextChange:function(e){e&&!this.next.active?this.next.activate():!e&&this.next.active&&this.next.deactivate()
},destroy:function(){OpenLayers.Control.prototype.destroy.apply(this),this.previous.destroy(),this.next.destroy(),this.deactivate();
for(var e in this)this[e]=null},setMap:function(e){this.map=e,this.next.setMap(e),this.previous.setMap(e)
},draw:function(){OpenLayers.Control.prototype.draw.apply(this,arguments),this.next.draw(),this.previous.draw()
},previousTrigger:function(){var e=this.previousStack.shift(),t=this.previousStack.shift();
return void 0!=t?(this.nextStack.unshift(e),this.previousStack.unshift(t),this.restoring=!0,this.restore(t),this.restoring=!1,this.onNextChange(this.nextStack[0],this.nextStack.length),this.onPreviousChange(this.previousStack[1],this.previousStack.length-1)):this.previousStack.unshift(e),t
},nextTrigger:function(){var e=this.nextStack.shift();return void 0!=e&&(this.previousStack.unshift(e),this.restoring=!0,this.restore(e),this.restoring=!1,this.onNextChange(this.nextStack[0],this.nextStack.length),this.onPreviousChange(this.previousStack[1],this.previousStack.length-1)),e
},clear:function(){this.previousStack=[],this.previous.deactivate(),this.nextStack=[],this.next.deactivate()
},getState:function(){return{center:this.map.getCenter(),resolution:this.map.getResolution(),projection:this.map.getProjectionObject(),units:this.map.getProjectionObject().getUnits()||this.map.units||this.map.baseLayer.units}
},restore:function(e){var t,i;if(this.map.getProjectionObject()==e.projection)i=this.map.getZoomForResolution(e.resolution),t=e.center;
else{t=e.center.clone(),t.transform(e.projection,this.map.getProjectionObject()),i=e.units;
var r=this.map.getProjectionObject().getUnits()||this.map.units||this.map.baseLayer.units;
i=this.map.getZoomForResolution((i&&r?OpenLayers.INCHES_PER_UNIT[i]/OpenLayers.INCHES_PER_UNIT[r]:1)*e.resolution)
}this.map.setCenter(t,i)},setListeners:function(){this.listeners={};for(var e in this.registry)this.listeners[e]=OpenLayers.Function.bind(function(){if(!this.restoring){var t=this.registry[e].apply(this,arguments);
this.previousStack.unshift(t),1<this.previousStack.length&&this.onPreviousChange(this.previousStack[1],this.previousStack.length-1),this.previousStack.length>this.limit+1&&this.previousStack.pop(),0<this.nextStack.length&&(this.nextStack=[],this.onNextChange(null,0))
}return!0},this)},activate:function(){var e=!1;if(this.map&&OpenLayers.Control.prototype.activate.apply(this)){null==this.listeners&&this.setListeners();
for(var t in this.listeners)this.map.events.register(t,this,this.listeners[t]);e=!0,0==this.previousStack.length&&this.initStack()
}return e},initStack:function(){this.map.getCenter()&&this.listeners.moveend()},deactivate:function(){var e=!1;
if(this.map&&OpenLayers.Control.prototype.deactivate.apply(this)){for(var t in this.listeners)this.map.events.unregister(t,this,this.listeners[t]);
this.clearOnDeactivate&&this.clear(),e=!0}return e},CLASS_NAME:"OpenLayers.Control.NavigationHistory"}),OpenLayers.Layer.UTFGrid=OpenLayers.Class(OpenLayers.Layer.XYZ,{isBaseLayer:!1,projection:new OpenLayers.Projection("EPSG:900913"),useJSONP:!1,tileClass:OpenLayers.Tile.UTFGrid,initialize:function(e){OpenLayers.Layer.Grid.prototype.initialize.apply(this,[e.name,e.url,{},e]),this.tileOptions=OpenLayers.Util.extend({utfgridResolution:this.utfgridResolution},this.tileOptions)
},createBackBuffer:function(){},clone:function(e){return null==e&&(e=new OpenLayers.Layer.UTFGrid(this.getOptions())),e=OpenLayers.Layer.Grid.prototype.clone.apply(this,[e])
},getFeatureInfo:function(e){var t=null;return(e=this.getTileData(e))&&e.tile&&(t=e.tile.getFeatureInfo(e.i,e.j)),t
},getFeatureId:function(e){var t=null;return e=this.getTileData(e),e.tile&&(t=e.tile.getFeatureId(e.i,e.j)),t
},CLASS_NAME:"OpenLayers.Layer.UTFGrid"}),OpenLayers.TileManager=OpenLayers.Class({cacheSize:256,tilesPerFrame:2,frameDelay:16,moveDelay:100,zoomDelay:200,maps:null,tileQueueId:null,tileQueue:null,tileCache:null,tileCacheIndex:null,initialize:function(e){OpenLayers.Util.extend(this,e),this.maps=[],this.tileQueueId={},this.tileQueue={},this.tileCache={},this.tileCacheIndex=[]
},addMap:function(e){if(!this._destroyed&&OpenLayers.Layer.Grid){this.maps.push(e),this.tileQueue[e.id]=[];
for(var t=0,i=e.layers.length;i>t;++t)this.addLayer({layer:e.layers[t]});e.events.on({move:this.move,zoomend:this.zoomEnd,changelayer:this.changeLayer,addlayer:this.addLayer,preremovelayer:this.removeLayer,scope:this})
}},removeMap:function(e){if(!this._destroyed&&OpenLayers.Layer.Grid){if(window.clearTimeout(this.tileQueueId[e.id]),e.layers)for(var t=0,i=e.layers.length;i>t;++t)this.removeLayer({layer:e.layers[t]});
e.events&&e.events.un({move:this.move,zoomend:this.zoomEnd,changelayer:this.changeLayer,addlayer:this.addLayer,preremovelayer:this.removeLayer,scope:this}),delete this.tileQueue[e.id],delete this.tileQueueId[e.id],OpenLayers.Util.removeItem(this.maps,e)
}},move:function(e){this.updateTimeout(e.object,this.moveDelay,!0)},zoomEnd:function(e){this.updateTimeout(e.object,this.zoomDelay)
},changeLayer:function(e){"visibility"!==e.property&&"params"!==e.property||this.updateTimeout(e.object,0)
},addLayer:function(e){if(e=e.layer,e instanceof OpenLayers.Layer.Grid){e.events.on({addtile:this.addTile,retile:this.clearTileQueue,scope:this});
var t,i,r;for(t=e.grid.length-1;t>=0;--t)for(i=e.grid[t].length-1;i>=0;--i)r=e.grid[t][i],this.addTile({tile:r}),r.url&&!r.imgDiv&&this.manageTileCache({object:r})
}},removeLayer:function(e){if(e=e.layer,e instanceof OpenLayers.Layer.Grid&&(this.clearTileQueue({object:e}),e.events&&e.events.un({addtile:this.addTile,retile:this.clearTileQueue,scope:this}),e.grid)){var t,i,r;
for(t=e.grid.length-1;t>=0;--t)for(i=e.grid[t].length-1;i>=0;--i)r=e.grid[t][i],this.unloadTile({object:r})
}},updateTimeout:function(e,t,i){window.clearTimeout(this.tileQueueId[e.id]);var r=this.tileQueue[e.id];
(!i||r.length)&&(this.tileQueueId[e.id]=window.setTimeout(OpenLayers.Function.bind(function(){this.drawTilesFromQueue(e),r.length&&this.updateTimeout(e,this.frameDelay)
},this),t))},addTile:function(e){e.tile instanceof OpenLayers.Tile.Image?e.tile.events.on({beforedraw:this.queueTileDraw,beforeload:this.manageTileCache,loadend:this.addToCache,unload:this.unloadTile,scope:this}):this.removeLayer({layer:e.tile.layer})
},unloadTile:function(e){e=e.object,e.events.un({beforedraw:this.queueTileDraw,beforeload:this.manageTileCache,loadend:this.addToCache,unload:this.unloadTile,scope:this}),OpenLayers.Util.removeItem(this.tileQueue[e.layer.map.id],e)
},queueTileDraw:function(e){e=e.object;var t=!1,i=e.layer,r=i.getURL(e.bounds),s=this.tileCache[r];
return s&&"olTileImage"!==s.className&&(delete this.tileCache[r],OpenLayers.Util.removeItem(this.tileCacheIndex,r),s=null),!i.url||!i.async&&s||(t=this.tileQueue[i.map.id],~OpenLayers.Util.indexOf(t,e)||t.push(e),t=!0),!t
},drawTilesFromQueue:function(e){var t=this.tileQueue[e.id],i=this.tilesPerFrame;
for(e=e.zoomTween&&e.zoomTween.playing;!e&&t.length&&i;)t.shift().draw(!0),--i},manageTileCache:function(e){e=e.object;
var t=this.tileCache[e.url];t&&(t.parentNode&&OpenLayers.Element.hasClass(t.parentNode,"olBackBuffer")&&(t.parentNode.removeChild(t),t.id=null),t.parentNode||(t.style.visibility="hidden",t.style.opacity=0,e.setImage(t),OpenLayers.Util.removeItem(this.tileCacheIndex,e.url),this.tileCacheIndex.push(e.url)))
},addToCache:function(e){e=e.object,this.tileCache[e.url]||OpenLayers.Element.hasClass(e.imgDiv,"olImageLoadError")||(this.tileCacheIndex.length>=this.cacheSize&&(delete this.tileCache[this.tileCacheIndex[0]],this.tileCacheIndex.shift()),this.tileCache[e.url]=e.imgDiv,this.tileCacheIndex.push(e.url))
},clearTileQueue:function(e){e=e.object;for(var t=this.tileQueue[e.map.id],i=t.length-1;i>=0;--i)t[i].layer===e&&t.splice(i,1)
},destroy:function(){for(var e=this.maps.length-1;e>=0;--e)this.removeMap(this.maps[e]);
this.tileCacheIndex=this.tileCache=this.tileQueueId=this.tileQueue=this.maps=null,this._destroyed=!0
}}),OpenLayers.Layer.ArcGISCache=OpenLayers.Class(OpenLayers.Layer.XYZ,{url:null,tileOrigin:null,tileSize:new OpenLayers.Size(256,256),useArcGISServer:!0,type:"png",useScales:!1,overrideDPI:!1,initialize:function(){if(OpenLayers.Layer.XYZ.prototype.initialize.apply(this,arguments),this.resolutions&&(this.serverResolutions=this.resolutions,this.maxExtent=this.getMaxExtentForResolution(this.resolutions[0])),this.layerInfo){var e=this.layerInfo,t=new OpenLayers.Bounds(e.fullExtent.xmin,e.fullExtent.ymin,e.fullExtent.xmax,e.fullExtent.ymax);
if(this.projection="EPSG:"+e.spatialReference.wkid,this.sphericalMercator=102100==e.spatialReference.wkid,this.units="esriFeet"==e.units?"ft":"m",e.tileInfo){this.tileSize=new OpenLayers.Size(e.tileInfo.width||e.tileInfo.cols,e.tileInfo.height||e.tileInfo.rows),this.tileOrigin=new OpenLayers.LonLat(e.tileInfo.origin.x,e.tileInfo.origin.y);
var i=new OpenLayers.Geometry.Point(t.left,t.top),t=new OpenLayers.Geometry.Point(t.right,t.bottom);
this.useScales?this.scales=[]:this.resolutions=[],this.lods=[];for(var r in e.tileInfo.lods)if(e.tileInfo.lods.hasOwnProperty(r)){var s=e.tileInfo.lods[r];
this.useScales?this.scales.push(s.scale):this.resolutions.push(s.resolution);var n=this.getContainingTileCoords(i,s.resolution);
s.startTileCol=n.x,s.startTileRow=n.y,n=this.getContainingTileCoords(t,s.resolution),s.endTileCol=n.x,s.endTileRow=n.y,this.lods.push(s)
}this.maxExtent=this.calculateMaxExtentWithLOD(this.lods[0]),this.serverResolutions=this.resolutions,this.overrideDPI&&e.tileInfo.dpi&&(OpenLayers.DOTS_PER_INCH=e.tileInfo.dpi)
}}},getContainingTileCoords:function(e,t){return new OpenLayers.Pixel(Math.max(Math.floor((e.x-this.tileOrigin.lon)/(this.tileSize.w*t)),0),Math.max(Math.floor((this.tileOrigin.lat-e.y)/(this.tileSize.h*t)),0))
},calculateMaxExtentWithLOD:function(e){var t=this.tileOrigin.lon+e.startTileCol*this.tileSize.w*e.resolution,i=this.tileOrigin.lat-e.startTileRow*this.tileSize.h*e.resolution;
return new OpenLayers.Bounds(t,i-(e.endTileRow-e.startTileRow+1)*this.tileSize.h*e.resolution,t+(e.endTileCol-e.startTileCol+1)*this.tileSize.w*e.resolution,i)
},calculateMaxExtentWithExtent:function(e,t){var i=new OpenLayers.Geometry.Point(e.left,e.top),r=new OpenLayers.Geometry.Point(e.right,e.bottom),i=this.getContainingTileCoords(i,t),r=this.getContainingTileCoords(r,t);
return this.calculateMaxExtentWithLOD({resolution:t,startTileCol:i.x,startTileRow:i.y,endTileCol:r.x,endTileRow:r.y})
},getUpperLeftTileCoord:function(e){var t=new OpenLayers.Geometry.Point(this.maxExtent.left,this.maxExtent.top);
return this.getContainingTileCoords(t,e)},getLowerRightTileCoord:function(e){var t=new OpenLayers.Geometry.Point(this.maxExtent.right,this.maxExtent.bottom);
return this.getContainingTileCoords(t,e)},getMaxExtentForResolution:function(e){var t=this.getUpperLeftTileCoord(e),i=this.getLowerRightTileCoord(e),r=this.tileOrigin.lon+t.x*this.tileSize.w*e,s=this.tileOrigin.lat-t.y*this.tileSize.h*e;
return new OpenLayers.Bounds(r,s-(i.y-t.y+1)*this.tileSize.h*e,r+(i.x-t.x+1)*this.tileSize.w*e,s)
},clone:function(e){return null==e&&(e=new OpenLayers.Layer.ArcGISCache(this.name,this.url,this.options)),OpenLayers.Layer.XYZ.prototype.clone.apply(this,[e])
},initGriddedTiles:function(){delete this._tileOrigin,OpenLayers.Layer.XYZ.prototype.initGriddedTiles.apply(this,arguments)
},getMaxExtent:function(){var e=this.map.getResolution();return this.maxExtent=this.getMaxExtentForResolution(e)
},getTileOrigin:function(){if(!this._tileOrigin){var e=this.getMaxExtent();this._tileOrigin=new OpenLayers.LonLat(e.left,e.bottom)
}return this._tileOrigin},getURL:function(e){var t=this.getResolution(),i=this.tileOrigin.lon+t*this.tileSize.w/2,r=this.tileOrigin.lat-t*this.tileSize.h/2;
if(e=e.getCenterLonLat(),i=Math.round(Math.abs((e.lon-i)/(t*this.tileSize.w))),r=Math.round(Math.abs((r-e.lat)/(t*this.tileSize.h))),e=this.map.getZoom(),this.lods){if(t=this.lods[this.map.getZoom()],i<t.startTileCol||i>t.endTileCol||r<t.startTileRow||r>t.endTileRow)return null
}else{var s=this.getUpperLeftTileCoord(t),t=this.getLowerRightTileCoord(t);if(i<s.x||i>=t.x||r<s.y||r>=t.y)return null
}return t=this.url,s=""+i+r+e,OpenLayers.Util.isArray(t)&&(t=this.selectUrl(s,t)),this.useArcGISServer?t+="/tile/${z}/${y}/${x}":(i="C"+OpenLayers.Number.zeroPad(i,8,16),r="R"+OpenLayers.Number.zeroPad(r,8,16),e="L"+OpenLayers.Number.zeroPad(e,2,10),t=t+"/${z}/${y}/${x}."+this.type),t=OpenLayers.String.format(t,{x:i,y:r,z:e}),OpenLayers.Util.urlAppend(t,OpenLayers.Util.getParameterString(this.params))
},CLASS_NAME:"OpenLayers.Layer.ArcGISCache"}),OpenLayers.Control.WMSGetFeatureInfo=OpenLayers.Class(OpenLayers.Control,{hover:!1,drillDown:!1,maxFeatures:10,clickCallback:"click",output:"features",layers:null,queryVisible:!1,url:null,layerUrls:null,infoFormat:"text/html",vendorParams:{},format:null,formatOptions:null,handler:null,hoverRequest:null,initialize:function(e){e=e||{},e.handlerOptions=e.handlerOptions||{},OpenLayers.Control.prototype.initialize.apply(this,[e]),this.format||(this.format=new OpenLayers.Format.WMSGetFeatureInfo(e.formatOptions)),!0===this.drillDown&&(this.hover=!1),this.hover?this.handler=new OpenLayers.Handler.Hover(this,{move:this.cancelHover,pause:this.getInfoForHover},OpenLayers.Util.extend(this.handlerOptions.hover||{},{delay:250})):(e={},e[this.clickCallback]=this.getInfoForClick,this.handler=new OpenLayers.Handler.Click(this,e,this.handlerOptions.click||{}))
},getInfoForClick:function(e){this.events.triggerEvent("beforegetfeatureinfo",{xy:e.xy}),OpenLayers.Element.addClass(this.map.viewPortDiv,"olCursorWait"),this.request(e.xy,{})
},getInfoForHover:function(e){this.events.triggerEvent("beforegetfeatureinfo",{xy:e.xy}),this.request(e.xy,{hover:!0})
},cancelHover:function(){this.hoverRequest&&(this.hoverRequest.abort(),this.hoverRequest=null)
},findLayers:function(){for(var e,t,i=this.layers||this.map.layers,r=[],s=i.length-1;s>=0;--s)e=i[s],e instanceof OpenLayers.Layer.WMS&&(!this.queryVisible||e.getVisibility())&&(t=OpenLayers.Util.isArray(e.url)?e.url[0]:e.url,!1!==this.drillDown||this.url||(this.url=t),(!0===this.drillDown||this.urlMatches(t))&&r.push(e));
return r},urlMatches:function(e){var t=OpenLayers.Util.isEquivalentUrl(this.url,e);
if(!t&&this.layerUrls)for(var i=0,r=this.layerUrls.length;r>i;++i)if(OpenLayers.Util.isEquivalentUrl(this.layerUrls[i],e)){t=!0;
break}return t},buildWMSOptions:function(e,t,i,r){for(var s=[],n=[],a=0,o=t.length;o>a;a++)null!=t[a].params.LAYERS&&(s=s.concat(t[a].params.LAYERS),n=n.concat(this.getStyleNames(t[a])));
return t=t[0],a=this.map.getProjection(),(o=t.projection)&&o.equals(this.map.getProjectionObject())&&(a=o.getCode()),r=OpenLayers.Util.extend({service:"WMS",version:t.params.VERSION,request:"GetFeatureInfo",exceptions:t.params.EXCEPTIONS,bbox:this.map.getExtent().toBBOX(null,t.reverseAxisOrder()),feature_count:this.maxFeatures,height:this.map.getSize().h,width:this.map.getSize().w,format:r,info_format:t.params.INFO_FORMAT||this.infoFormat},1.3<=parseFloat(t.params.VERSION)?{crs:a,i:parseInt(i.x),j:parseInt(i.y)}:{srs:a,x:parseInt(i.x),y:parseInt(i.y)}),0!=s.length&&(r=OpenLayers.Util.extend({layers:s,query_layers:s,styles:n},r)),OpenLayers.Util.applyDefaults(r,this.vendorParams),{url:e,params:OpenLayers.Util.upperCaseObject(r),callback:function(t){this.handleResponse(i,t,e)
},scope:this}},getStyleNames:function(e){return e.params.STYLES?e.params.STYLES:OpenLayers.Util.isArray(e.params.LAYERS)?Array(e.params.LAYERS.length):e.params.LAYERS.replace(/[^,]/g,"")
},request:function(e,t){var i=this.findLayers();if(0==i.length)this.events.triggerEvent("nogetfeatureinfo"),OpenLayers.Element.removeClass(this.map.viewPortDiv,"olCursorWait");
else if(t=t||{},!1===this.drillDown){var i=this.buildWMSOptions(this.url,i,e,i[0].params.FORMAT),r=OpenLayers.Request.GET(i);
!0===t.hover&&(this.hoverRequest=r)}else{this._numRequests=this._requestCount=0,this.features=[];
for(var s,r={},n=0,a=i.length;a>n;n++){var o=i[n];s=OpenLayers.Util.isArray(o.url)?o.url[0]:o.url,s in r?r[s].push(o):(this._numRequests++,r[s]=[o])
}for(s in r)i=r[s],i=this.buildWMSOptions(s,i,e,i[0].params.FORMAT),OpenLayers.Request.GET(i)
}},triggerGetFeatureInfo:function(e,t,i){this.events.triggerEvent("getfeatureinfo",{text:e.responseText,features:i,request:e,xy:t}),OpenLayers.Element.removeClass(this.map.viewPortDiv,"olCursorWait")
},handleResponse:function(e,t,i){var r=t.responseXML;r&&r.documentElement||(r=t.responseText),r=this.format.read(r),!1===this.drillDown?this.triggerGetFeatureInfo(t,e,r):(this._requestCount++,this._features="object"===this.output?(this._features||[]).concat({url:i,features:r}):(this._features||[]).concat(r),this._requestCount===this._numRequests&&(this.triggerGetFeatureInfo(t,e,this._features.concat()),delete this._features,delete this._requestCount,delete this._numRequests))
},CLASS_NAME:"OpenLayers.Control.WMSGetFeatureInfo"}),OpenLayers.Format.WMSCapabilities.v1_3_0=OpenLayers.Class(OpenLayers.Format.WMSCapabilities.v1_3,{version:"1.3.0",CLASS_NAME:"OpenLayers.Format.WMSCapabilities.v1_3_0"}),OpenLayers.Format.SOSGetFeatureOfInterest=OpenLayers.Class(OpenLayers.Format.XML,{VERSION:"1.0.0",namespaces:{sos:"http://www.opengis.net/sos/1.0",gml:"http://www.opengis.net/gml",sa:"http://www.opengis.net/sampling/1.0",xsi:"http://www.w3.org/2001/XMLSchema-instance"},schemaLocation:"http://www.opengis.net/sos/1.0 http://schemas.opengis.net/sos/1.0.0/sosAll.xsd",defaultPrefix:"sos",regExes:{trimSpace:/^\s*|\s*$/g,removeSpace:/\s*/g,splitSpace:/\s+/,trimComma:/\s*,\s*/g},read:function(e){"string"==typeof e&&(e=OpenLayers.Format.XML.prototype.read.apply(this,[e])),e&&9==e.nodeType&&(e=e.documentElement);
var t={features:[]};this.readNode(e,t),e=[];for(var i=0,r=t.features.length;r>i;i++){var s=t.features[i];
this.internalProjection&&this.externalProjection&&s.components[0]&&s.components[0].transform(this.externalProjection,this.internalProjection),s=new OpenLayers.Feature.Vector(s.components[0],s.attributes),e.push(s)
}return e},readers:{sa:{SamplingPoint:function(e,t){if(!t.attributes){var i={attributes:{}};
t.features.push(i),t=i}t.attributes.id=this.getAttributeNS(e,this.namespaces.gml,"id"),this.readChildNodes(e,t)
},position:function(e,t){this.readChildNodes(e,t)}},gml:OpenLayers.Util.applyDefaults({FeatureCollection:function(e,t){this.readChildNodes(e,t)
},featureMember:function(e,t){var i={attributes:{}};t.features.push(i),this.readChildNodes(e,i)
},name:function(e,t){t.attributes.name=this.getChildValue(e)},pos:function(e,t){this.externalProjection||(this.externalProjection=new OpenLayers.Projection(e.getAttribute("srsName"))),OpenLayers.Format.GML.v3.prototype.readers.gml.pos.apply(this,[e,t])
}},OpenLayers.Format.GML.v3.prototype.readers.gml)},writers:{sos:{GetFeatureOfInterest:function(e){for(var t=this.createElementNSPlus("GetFeatureOfInterest",{attributes:{version:this.VERSION,service:"SOS","xsi:schemaLocation":this.schemaLocation}}),i=0,r=e.fois.length;r>i;i++)this.writeNode("FeatureOfInterestId",{foi:e.fois[i]},t);
return t},FeatureOfInterestId:function(e){return this.createElementNSPlus("FeatureOfInterestId",{value:e.foi})
}}},CLASS_NAME:"OpenLayers.Format.SOSGetFeatureOfInterest"}),OpenLayers.Format.SOSGetObservation=OpenLayers.Class(OpenLayers.Format.XML,{namespaces:{ows:"http://www.opengis.net/ows",gml:"http://www.opengis.net/gml",sos:"http://www.opengis.net/sos/1.0",ogc:"http://www.opengis.net/ogc",om:"http://www.opengis.net/om/1.0",sa:"http://www.opengis.net/sampling/1.0",xlink:"http://www.w3.org/1999/xlink",xsi:"http://www.w3.org/2001/XMLSchema-instance"},regExes:{trimSpace:/^\s*|\s*$/g,removeSpace:/\s*/g,splitSpace:/\s+/,trimComma:/\s*,\s*/g},VERSION:"1.0.0",schemaLocation:"http://www.opengis.net/sos/1.0 http://schemas.opengis.net/sos/1.0.0/sosGetObservation.xsd",defaultPrefix:"sos",read:function(e){"string"==typeof e&&(e=OpenLayers.Format.XML.prototype.read.apply(this,[e])),e&&9==e.nodeType&&(e=e.documentElement);
var t={measurements:[],observations:[]};return this.readNode(e,t),t},write:function(e){return e=this.writeNode("sos:GetObservation",e),e.setAttribute("xmlns:om",this.namespaces.om),e.setAttribute("xmlns:ogc",this.namespaces.ogc),this.setAttributeNS(e,this.namespaces.xsi,"xsi:schemaLocation",this.schemaLocation),OpenLayers.Format.XML.prototype.write.apply(this,[e])
},readers:{om:{ObservationCollection:function(e,t){t.id=this.getAttributeNS(e,this.namespaces.gml,"id"),this.readChildNodes(e,t)
},member:function(e,t){this.readChildNodes(e,t)},Measurement:function(e,t){var i={};
t.measurements.push(i),this.readChildNodes(e,i)},Observation:function(e,t){var i={};
t.observations.push(i),this.readChildNodes(e,i)},samplingTime:function(e,t){var i={};
t.samplingTime=i,this.readChildNodes(e,i)},observedProperty:function(e,t){t.observedProperty=this.getAttributeNS(e,this.namespaces.xlink,"href"),this.readChildNodes(e,t)
},procedure:function(e,t){t.procedure=this.getAttributeNS(e,this.namespaces.xlink,"href"),this.readChildNodes(e,t)
},featureOfInterest:function(e,t){var i={features:[]};t.fois=[],t.fois.push(i),this.readChildNodes(e,i);
for(var r=[],s=0,n=i.features.length;n>s;s++){var a=i.features[s];r.push(new OpenLayers.Feature.Vector(a.components[0],a.attributes))
}i.features=r},result:function(e,t){var i={};t.result=i,""!==this.getChildValue(e)?(i.value=this.getChildValue(e),i.uom=e.getAttribute("uom")):this.readChildNodes(e,i)
}},sa:OpenLayers.Format.SOSGetFeatureOfInterest.prototype.readers.sa,gml:OpenLayers.Util.applyDefaults({TimeInstant:function(e,t){var i={};
t.timeInstant=i,this.readChildNodes(e,i)},timePosition:function(e,t){t.timePosition=this.getChildValue(e)
}},OpenLayers.Format.SOSGetFeatureOfInterest.prototype.readers.gml)},writers:{sos:{GetObservation:function(e){var t=this.createElementNSPlus("GetObservation",{attributes:{version:this.VERSION,service:"SOS"}});
this.writeNode("offering",e,t),e.eventTime&&this.writeNode("eventTime",e,t);for(var i in e.procedures)this.writeNode("procedure",e.procedures[i],t);
for(var r in e.observedProperties)this.writeNode("observedProperty",e.observedProperties[r],t);
return e.foi&&this.writeNode("featureOfInterest",e.foi,t),this.writeNode("responseFormat",e,t),e.resultModel&&this.writeNode("resultModel",e,t),e.responseMode&&this.writeNode("responseMode",e,t),t
},featureOfInterest:function(e){var t=this.createElementNSPlus("featureOfInterest");
return this.writeNode("ObjectID",e.objectId,t),t},ObjectID:function(e){return this.createElementNSPlus("ObjectID",{value:e})
},responseFormat:function(e){return this.createElementNSPlus("responseFormat",{value:e.responseFormat})
},procedure:function(e){return this.createElementNSPlus("procedure",{value:e})},offering:function(e){return this.createElementNSPlus("offering",{value:e.offering})
},observedProperty:function(e){return this.createElementNSPlus("observedProperty",{value:e})
},eventTime:function(e){var t=this.createElementNSPlus("eventTime");return"latest"===e.eventTime&&this.writeNode("ogc:TM_Equals",e,t),t
},resultModel:function(e){return this.createElementNSPlus("resultModel",{value:e.resultModel})
},responseMode:function(e){return this.createElementNSPlus("responseMode",{value:e.responseMode})
}},ogc:{TM_Equals:function(e){var t=this.createElementNSPlus("ogc:TM_Equals");return this.writeNode("ogc:PropertyName",{property:"urn:ogc:data:time:iso8601"},t),"latest"===e.eventTime&&this.writeNode("gml:TimeInstant",{value:"latest"},t),t
},PropertyName:function(e){return this.createElementNSPlus("ogc:PropertyName",{value:e.property})
}},gml:{TimeInstant:function(e){var t=this.createElementNSPlus("gml:TimeInstant");
return this.writeNode("gml:timePosition",e,t),t},timePosition:function(e){return this.createElementNSPlus("gml:timePosition",{value:e.value})
}}},CLASS_NAME:"OpenLayers.Format.SOSGetObservation"}),OpenLayers.Control.UTFGrid=OpenLayers.Class(OpenLayers.Control,{autoActivate:!0,layers:null,defaultHandlerOptions:{delay:300,pixelTolerance:4,stopMove:!1,single:!0,"double":!1,stopSingle:!1,stopDouble:!1},handlerMode:"click",setHandler:function(e){this.handlerMode=e,this.resetHandler()
},resetHandler:function(){return this.handler&&(this.handler.deactivate(),this.handler.destroy(),this.handler=null),"hover"==this.handlerMode?this.handler=new OpenLayers.Handler.Hover(this,{pause:this.handleEvent,move:this.reset},this.handlerOptions):"click"==this.handlerMode?this.handler=new OpenLayers.Handler.Click(this,{click:this.handleEvent},this.handlerOptions):"move"==this.handlerMode&&(this.handler=new OpenLayers.Handler.Hover(this,{pause:this.handleEvent,move:this.handleEvent},this.handlerOptions)),this.handler?!0:!1
},initialize:function(e){e=e||{},e.handlerOptions=e.handlerOptions||this.defaultHandlerOptions,OpenLayers.Control.prototype.initialize.apply(this,[e]),this.resetHandler()
},handleEvent:function(e){if(null==e)this.reset();else{var t=this.map.getLonLatFromPixel(e.xy);
if(t){var i=this.findLayers();if(0<i.length){for(var r,s,n={},a=0,o=i.length;o>a;a++)r=i[a],s=OpenLayers.Util.indexOf(this.map.layers,r),n[s]=r.getFeatureInfo(t);
this.callback(n,t,e.xy)}}}},callback:function(){},reset:function(){this.callback(null)
},findLayers:function(){for(var e,t=this.layers||this.map.layers,i=[],r=t.length-1;r>=0;--r)e=t[r],e instanceof OpenLayers.Layer.UTFGrid&&i.push(e);
return i},CLASS_NAME:"OpenLayers.Control.UTFGrid"}),OpenLayers.Format.CQL=function(){function e(e){function t(){var e=r.pop();
switch(e.type){case"LOGICAL":var i=t(),n=t();return new OpenLayers.Filter.Logical({filters:[n,i],type:a[e.text.toUpperCase()]});
case"NOT":return e=t(),new OpenLayers.Filter.Logical({filters:[e],type:OpenLayers.Filter.Logical.NOT});
case"BETWEEN":return r.pop(),n=t(),e=t(),i=t(),new OpenLayers.Filter.Comparison({property:i,lowerBoundary:e,upperBoundary:n,type:OpenLayers.Filter.Comparison.BETWEEN});
case"COMPARISON":return n=t(),i=t(),new OpenLayers.Filter.Comparison({property:i,value:n,type:s[e.text.toUpperCase()]});
case"IS_NULL":return i=t(),new OpenLayers.Filter.Comparison({property:i,type:s[e.text.toUpperCase()]});
case"VALUE":return(i=e.text.match(/^'(.*)'$/))?i[1].replace(/''/g,"'"):Number(e.text);
case"SPATIAL":switch(e.text.toUpperCase()){case"BBOX":var e=t(),i=t(),n=t(),o=t(),l=t();
return new OpenLayers.Filter.Spatial({type:OpenLayers.Filter.Spatial.BBOX,property:l,value:OpenLayers.Bounds.fromArray([o,n,i,e])});
case"INTERSECTS":return n=t(),i=t(),new OpenLayers.Filter.Spatial({type:OpenLayers.Filter.Spatial.INTERSECTS,property:i,value:n});
case"WITHIN":return n=t(),i=t(),new OpenLayers.Filter.Spatial({type:OpenLayers.Filter.Spatial.WITHIN,property:i,value:n});
case"CONTAINS":return n=t(),i=t(),new OpenLayers.Filter.Spatial({type:OpenLayers.Filter.Spatial.CONTAINS,property:i,value:n});
case"DWITHIN":return e=t(),n=t(),i=t(),new OpenLayers.Filter.Spatial({type:OpenLayers.Filter.Spatial.DWITHIN,value:n,property:i,distance:Number(e)})
}case"GEOMETRY":return OpenLayers.Geometry.fromWKT(e.text);default:return e.text}}for(var i=[],r=[];e.length;){var n=e.shift();
switch(n.type){case"PROPERTY":case"GEOMETRY":case"VALUE":r.push(n);break;case"COMPARISON":case"BETWEEN":case"IS_NULL":case"LOGICAL":for(var o=l[n.type];0<i.length&&l[i[i.length-1].type]<=o;)r.push(i.pop());
i.push(n);break;case"SPATIAL":case"NOT":case"LPAREN":i.push(n);break;case"RPAREN":for(;0<i.length&&"LPAREN"!=i[i.length-1].type;)r.push(i.pop());
i.pop(),0<i.length&&"SPATIAL"==i[i.length-1].type&&r.push(i.pop());case"COMMA":case"END":break;
default:throw Error("Unknown token type "+n.type)}}for(;0<i.length;)r.push(i.pop());
if(e=t(),0<r.length){for(e="Remaining tokens after building AST: \n",i=r.length-1;i>=0;i--)e+=r[i].type+": "+r[i].text+"\n";
throw Error(e)}return e}var t,i={PROPERTY:/^[_a-zA-Z]\w*/,COMPARISON:/^(=|<>|<=|<|>=|>|LIKE)/i,IS_NULL:/^IS NULL/i,COMMA:/^,/,LOGICAL:/^(AND|OR)/i,VALUE:/^('([^']|'')*'|\d+(\.\d*)?|\.\d+)/,LPAREN:/^\(/,RPAREN:/^\)/,SPATIAL:/^(BBOX|INTERSECTS|DWITHIN|WITHIN|CONTAINS)/i,NOT:/^NOT/i,BETWEEN:/^BETWEEN/i,GEOMETRY:function(e){var t=/^(POINT|LINESTRING|POLYGON|MULTIPOINT|MULTILINESTRING|MULTIPOLYGON|GEOMETRYCOLLECTION)/.exec(e);
if(t){var i=e.length,t=e.indexOf("(",t[0].length);if(t>-1)for(var r=1;i>t&&r>0;)switch(t++,e.charAt(t)){case"(":r++;
break;case")":r--}return[e.substr(0,t+1)]}},END:/^$/},r={LPAREN:["GEOMETRY","SPATIAL","PROPERTY","VALUE","LPAREN"],RPAREN:["NOT","LOGICAL","END","RPAREN"],PROPERTY:["COMPARISON","BETWEEN","COMMA","IS_NULL"],BETWEEN:["VALUE"],IS_NULL:["END"],COMPARISON:["VALUE"],COMMA:["GEOMETRY","VALUE","PROPERTY"],VALUE:["LOGICAL","COMMA","RPAREN","END"],SPATIAL:["LPAREN"],LOGICAL:["NOT","VALUE","SPATIAL","PROPERTY","LPAREN"],NOT:["PROPERTY","LPAREN"],GEOMETRY:["COMMA","RPAREN"]},s={"=":OpenLayers.Filter.Comparison.EQUAL_TO,"<>":OpenLayers.Filter.Comparison.NOT_EQUAL_TO,"<":OpenLayers.Filter.Comparison.LESS_THAN,"<=":OpenLayers.Filter.Comparison.LESS_THAN_OR_EQUAL_TO,">":OpenLayers.Filter.Comparison.GREATER_THAN,">=":OpenLayers.Filter.Comparison.GREATER_THAN_OR_EQUAL_TO,LIKE:OpenLayers.Filter.Comparison.LIKE,BETWEEN:OpenLayers.Filter.Comparison.BETWEEN,"IS NULL":OpenLayers.Filter.Comparison.IS_NULL},n={},a={AND:OpenLayers.Filter.Logical.AND,OR:OpenLayers.Filter.Logical.OR},o={},l={RPAREN:3,LOGICAL:2,COMPARISON:1};
for(t in s)s.hasOwnProperty(t)&&(n[s[t]]=t);for(t in a)a.hasOwnProperty(t)&&(o[a[t]]=t);
return OpenLayers.Class(OpenLayers.Format,{read:function(t){var s=t;t=[];var n,a=["NOT","GEOMETRY","SPATIAL","PROPERTY","LPAREN"];
do{e:{n=a;for(var o=void 0,a=void 0,l=n.length,o=0;l>o;o++){var a=n[o],h=i[a]instanceof RegExp?i[a].exec(s):i[a](s);
if(h){n=h[0],s=s.substr(n.length).replace(/^\s*/,""),n={type:a,text:n,remainder:s};
break e}}for(t="ERROR: In parsing: ["+s+"], expected one of: ",o=0;l>o;o++)a=n[o],t+="\n    "+a+": "+i[a];
throw Error(t)}if(s=n.remainder,a=r[n.type],"END"!=n.type&&!a)throw Error("No follows list for "+n.type);
t.push(n)}while("END"!=n.type);return t=e(t),this.keepData&&(this.data=t),t},write:function(e){if(e instanceof OpenLayers.Geometry)return e.toString();
switch(e.CLASS_NAME){case"OpenLayers.Filter.Spatial":switch(e.type){case OpenLayers.Filter.Spatial.BBOX:return"BBOX("+e.property+","+e.value.toBBOX()+")";
case OpenLayers.Filter.Spatial.DWITHIN:return"DWITHIN("+e.property+", "+this.write(e.value)+", "+e.distance+")";
case OpenLayers.Filter.Spatial.WITHIN:return"WITHIN("+e.property+", "+this.write(e.value)+")";
case OpenLayers.Filter.Spatial.INTERSECTS:return"INTERSECTS("+e.property+", "+this.write(e.value)+")";
case OpenLayers.Filter.Spatial.CONTAINS:return"CONTAINS("+e.property+", "+this.write(e.value)+")";
default:throw Error("Unknown spatial filter type: "+e.type)}case"OpenLayers.Filter.Logical":if(e.type==OpenLayers.Filter.Logical.NOT)return"NOT ("+this.write(e.filters[0])+")";
for(var t="(",i=!0,r=0;r<e.filters.length;r++)i?i=!1:t+=") "+o[e.type]+" (",t+=this.write(e.filters[r]);
return t+")";case"OpenLayers.Filter.Comparison":return e.type==OpenLayers.Filter.Comparison.BETWEEN?e.property+" BETWEEN "+this.write(e.lowerBoundary)+" AND "+this.write(e.upperBoundary):null!==e.value?e.property+" "+n[e.type]+" "+this.write(e.value):e.property+" "+n[e.type];
case void 0:if("string"==typeof e)return"'"+e.replace(/'/g,"''")+"'";if("number"==typeof e)return String(e);
default:throw Error("Can't encode: "+e.CLASS_NAME+" "+e)}},CLASS_NAME:"OpenLayers.Format.CQL"})
}(),OpenLayers.Control.Split=OpenLayers.Class(OpenLayers.Control,{layer:null,source:null,sourceOptions:null,tolerance:null,edge:!0,deferDelete:!1,mutual:!0,targetFilter:null,sourceFilter:null,handler:null,initialize:function(e){OpenLayers.Control.prototype.initialize.apply(this,[e]),this.options=e||{},this.options.source&&this.setSource(this.options.source)
},setSource:function(e){this.active?(this.deactivate(),this.handler&&(this.handler.destroy(),delete this.handler),this.source=e,this.activate()):this.source=e
},activate:function(){var e=OpenLayers.Control.prototype.activate.call(this);return e&&(this.source?this.source.events&&this.source.events.on({sketchcomplete:this.onSketchComplete,afterfeaturemodified:this.afterFeatureModified,scope:this}):(this.handler||(this.handler=new OpenLayers.Handler.Path(this,{done:function(e){this.onSketchComplete({feature:new OpenLayers.Feature.Vector(e)})
}},{layerOptions:this.sourceOptions})),this.handler.activate())),e},deactivate:function(){var e=OpenLayers.Control.prototype.deactivate.call(this);
return e&&this.source&&this.source.events&&this.source.events.un({sketchcomplete:this.onSketchComplete,afterfeaturemodified:this.afterFeatureModified,scope:this}),e
},onSketchComplete:function(e){return this.feature=null,!this.considerSplit(e.feature)
},afterFeatureModified:function(e){e.modified&&"function"==typeof e.feature.geometry.split&&(this.feature=e.feature,this.considerSplit(e.feature))
},removeByGeometry:function(e,t){for(var i=0,r=e.length;r>i;++i)if(e[i].geometry===t){e.splice(i,1);
break}},isEligible:function(e){return e.geometry?e.state!==OpenLayers.State.DELETE&&"function"==typeof e.geometry.split&&this.feature!==e&&(!this.targetFilter||this.targetFilter.evaluate(e.attributes)):!1
},considerSplit:function(e){var t=!1,i=!1;if(!this.sourceFilter||this.sourceFilter.evaluate(e.attributes)){for(var r,s,n,a,o,l=this.layer&&this.layer.features||[],h=[],p=[],u=this.layer===this.source&&this.mutual,c={edge:this.edge,tolerance:this.tolerance,mutual:u},y=[e.geometry],d=0,m=l.length;m>d;++d)if(n=l[d],this.isEligible(n)){a=[n.geometry];
for(var f=0;f<y.length;++f){o=y[f];for(var g=0;g<a.length;++g)r=a[g],o.getBounds().intersectsBounds(r.getBounds())&&(r=o.split(r,c))&&(s=this.events.triggerEvent("beforesplit",{source:e,target:n}),!1!==s&&(u&&(s=r[0],1<s.length&&(s.unshift(f,1),Array.prototype.splice.apply(y,s),f+=s.length-3),r=r[1]),1<r.length&&(r.unshift(g,1),Array.prototype.splice.apply(a,r),g+=r.length-3)))
}a&&1<a.length&&(this.geomsToFeatures(n,a),this.events.triggerEvent("split",{original:n,features:a}),Array.prototype.push.apply(h,a),p.push(n),i=!0)
}if(y&&1<y.length&&(this.geomsToFeatures(e,y),this.events.triggerEvent("split",{original:e,features:y}),Array.prototype.push.apply(h,y),p.push(e),t=!0),t||i){if(this.deferDelete){for(l=[],d=0,m=p.length;m>d;++d)i=p[d],i.state===OpenLayers.State.INSERT?l.push(i):(i.state=OpenLayers.State.DELETE,this.layer.drawFeature(i));
for(this.layer.destroyFeatures(l,{silent:!0}),d=0,m=h.length;m>d;++d)h[d].state=OpenLayers.State.INSERT
}else this.layer.destroyFeatures(p,{silent:!0});this.layer.addFeatures(h,{silent:!0}),this.events.triggerEvent("aftersplit",{source:e,features:h})
}}return t},geomsToFeatures:function(e,t){var i=e.clone();delete i.geometry;for(var r,s=0,n=t.length;n>s;++s)r=i.clone(),r.geometry=t[s],r.state=OpenLayers.State.INSERT,t[s]=r
},destroy:function(){this.active&&this.deactivate(),OpenLayers.Control.prototype.destroy.call(this)
},CLASS_NAME:"OpenLayers.Control.Split"}),OpenLayers.Layer.WMTS=OpenLayers.Class(OpenLayers.Layer.Grid,{isBaseLayer:!0,version:"1.0.0",requestEncoding:"KVP",url:null,layer:null,matrixSet:null,style:null,format:"image/jpeg",tileOrigin:null,tileFullExtent:null,formatSuffix:null,matrixIds:null,dimensions:null,params:null,zoomOffset:0,serverResolutions:null,formatSuffixMap:{"image/png":"png","image/png8":"png","image/png24":"png","image/png32":"png",png:"png","image/jpeg":"jpg","image/jpg":"jpg",jpeg:"jpg",jpg:"jpg"},matrix:null,initialize:function(e){var t,i={url:!0,layer:!0,style:!0,matrixSet:!0};
for(t in i)if(!(t in e))throw Error("Missing property '"+t+"' in layer configuration.");
if(e.params=OpenLayers.Util.upperCaseObject(e.params),OpenLayers.Layer.Grid.prototype.initialize.apply(this,[e.name,e.url,e.params,e]),this.formatSuffix||(this.formatSuffix=this.formatSuffixMap[this.format]||this.format.split("/").pop()),this.matrixIds&&(e=this.matrixIds.length)&&"string"==typeof this.matrixIds[0])for(i=this.matrixIds,this.matrixIds=Array(e),t=0;e>t;++t)this.matrixIds[t]={identifier:i[t]}
},setMap:function(){OpenLayers.Layer.Grid.prototype.setMap.apply(this,arguments)},updateMatrixProperties:function(){(this.matrix=this.getMatrix())&&(this.matrix.topLeftCorner&&(this.tileOrigin=this.matrix.topLeftCorner),this.matrix.tileWidth&&this.matrix.tileHeight&&(this.tileSize=new OpenLayers.Size(this.matrix.tileWidth,this.matrix.tileHeight)),this.tileOrigin||(this.tileOrigin=new OpenLayers.LonLat(this.maxExtent.left,this.maxExtent.top)),this.tileFullExtent||(this.tileFullExtent=this.maxExtent))
},moveTo:function(e,t){return!t&&this.matrix||this.updateMatrixProperties(),OpenLayers.Layer.Grid.prototype.moveTo.apply(this,arguments)
},clone:function(e){return null==e&&(e=new OpenLayers.Layer.WMTS(this.options)),e=OpenLayers.Layer.Grid.prototype.clone.apply(this,[e])
},getIdentifier:function(){return this.getServerZoom()},getMatrix:function(){var e;
if(this.matrixIds&&0!==this.matrixIds.length)if("scaleDenominator"in this.matrixIds[0])for(var t,i=OpenLayers.METERS_PER_INCH*OpenLayers.INCHES_PER_UNIT[this.units]*this.getServerResolution()/28e-5,r=Number.POSITIVE_INFINITY,s=0,n=this.matrixIds.length;n>s;++s)t=Math.abs(1-this.matrixIds[s].scaleDenominator/i),r>t&&(r=t,e=this.matrixIds[s]);
else e=this.matrixIds[this.getIdentifier()];else e={identifier:this.getIdentifier()};
return e},getTileInfo:function(e){var t=this.getServerResolution(),i=(e.lon-this.tileOrigin.lon)/(t*this.tileSize.w);
e=(this.tileOrigin.lat-e.lat)/(t*this.tileSize.h);var t=Math.floor(i),r=Math.floor(e);
return{col:t,row:r,i:Math.floor((i-t)*this.tileSize.w),j:Math.floor((e-r)*this.tileSize.h)}
},getURL:function(e){e=this.adjustBounds(e);var t="";if(!this.tileFullExtent||this.tileFullExtent.intersectsBounds(e)){e=e.getCenterLonLat();
var i=this.getTileInfo(e);e=this.dimensions;var r,t=OpenLayers.Util.isArray(this.url)?this.selectUrl([this.version,this.style,this.matrixSet,this.matrix.identifier,i.row,i.col].join(),this.url):this.url;
if("REST"===this.requestEncoding.toUpperCase())if(r=this.params,-1!==t.indexOf("{")){if(t=t.replace(/\{/g,"${"),i={style:this.style,Style:this.style,TileMatrixSet:this.matrixSet,TileMatrix:this.matrix.identifier,TileRow:i.row,TileCol:i.col},e){var s,n;
for(n=e.length-1;n>=0;--n)s=e[n],i[s]=r[s.toUpperCase()]}t=OpenLayers.String.format(t,i)
}else{if(s=this.version+"/"+this.layer+"/"+this.style+"/",e)for(n=0;n<e.length;n++)r[e[n]]&&(s=s+r[e[n]]+"/");
s=s+this.matrixSet+"/"+this.matrix.identifier+"/"+i.row+"/"+i.col+"."+this.formatSuffix,t.match(/\/$/)||(t+="/"),t+=s
}else"KVP"===this.requestEncoding.toUpperCase()&&(r={SERVICE:"WMTS",REQUEST:"GetTile",VERSION:this.version,LAYER:this.layer,STYLE:this.style,TILEMATRIXSET:this.matrixSet,TILEMATRIX:this.matrix.identifier,TILEROW:i.row,TILECOL:i.col,FORMAT:this.format},t=OpenLayers.Layer.Grid.prototype.getFullRequestString.apply(this,[r]))
}return t},mergeNewParams:function(e){return"KVP"===this.requestEncoding.toUpperCase()?OpenLayers.Layer.Grid.prototype.mergeNewParams.apply(this,[OpenLayers.Util.upperCaseObject(e)]):void 0
},CLASS_NAME:"OpenLayers.Layer.WMTS"}),OpenLayers.Protocol.SOS.v1_0_0=OpenLayers.Class(OpenLayers.Protocol,{fois:null,formatOptions:null,initialize:function(e){OpenLayers.Protocol.prototype.initialize.apply(this,[e]),e.format||(this.format=new OpenLayers.Format.SOSGetFeatureOfInterest(this.formatOptions))
},destroy:function(){this.options&&!this.options.format&&this.format.destroy(),this.format=null,OpenLayers.Protocol.prototype.destroy.apply(this)
},read:function(e){e=OpenLayers.Util.extend({},e),OpenLayers.Util.applyDefaults(e,this.options||{});
var t=new OpenLayers.Protocol.Response({requestType:"read"}),i=this.format,i=OpenLayers.Format.XML.prototype.write.apply(i,[i.writeNode("sos:GetFeatureOfInterest",{fois:this.fois})]);
return t.priv=OpenLayers.Request.POST({url:e.url,callback:this.createCallback(this.handleRead,t,e),data:i}),t
},handleRead:function(e,t){if(t.callback){var i=e.priv;200<=i.status&&300>i.status?(e.features=this.parseFeatures(i),e.code=OpenLayers.Protocol.Response.SUCCESS):e.code=OpenLayers.Protocol.Response.FAILURE,t.callback.call(t.scope,e)
}},parseFeatures:function(e){var t=e.responseXML;return t&&t.documentElement||(t=e.responseText),!t||0>=t.length?null:this.format.read(t)
},CLASS_NAME:"OpenLayers.Protocol.SOS.v1_0_0"}),OpenLayers.Layer.KaMapCache=OpenLayers.Class(OpenLayers.Layer.KaMap,{IMAGE_EXTENSIONS:{jpeg:"jpg",gif:"gif",png:"png",png8:"png",png24:"png",dithered:"png"},DEFAULT_FORMAT:"jpeg",initialize:function(){OpenLayers.Layer.KaMap.prototype.initialize.apply(this,arguments),this.extension=this.IMAGE_EXTENSIONS[this.params.i.toLowerCase()||this.DEFAULT_FORMAT]
},getURL:function(e){e=this.adjustBounds(e);var t=this.map.getResolution(),i=Math.round(1e4*this.map.getScale())/1e4,r=Math.round(e.left/t);
e=-Math.round(e.top/t);var t=Math.floor(r/this.tileSize.w/this.params.metaTileSize.w)*this.tileSize.w*this.params.metaTileSize.w,s=Math.floor(e/this.tileSize.h/this.params.metaTileSize.h)*this.tileSize.h*this.params.metaTileSize.h,i=["/",this.params.map,"/",i,"/",this.params.g.replace(/\s/g,"_"),"/def/t",s,"/l",t,"/t",e,"l",r,".",this.extension],r=this.url;
return OpenLayers.Util.isArray(r)&&(r=this.selectUrl(i.join(""),r)),r+i.join("")},CLASS_NAME:"OpenLayers.Layer.KaMapCache"}),OpenLayers.Protocol.WFS.v1_1_0=OpenLayers.Class(OpenLayers.Protocol.WFS.v1,{version:"1.1.0",initialize:function(){OpenLayers.Protocol.WFS.v1.prototype.initialize.apply(this,arguments),this.outputFormat&&!this.readFormat&&("gml2"==this.outputFormat.toLowerCase()?this.readFormat=new OpenLayers.Format.GML.v2({featureType:this.featureType,featureNS:this.featureNS,geometryName:this.geometryName}):"json"==this.outputFormat.toLowerCase()&&(this.readFormat=new OpenLayers.Format.GeoJSON))
},CLASS_NAME:"OpenLayers.Protocol.WFS.v1_1_0"}),OpenLayers.Format.WMSCapabilities.v1_1_1=OpenLayers.Class(OpenLayers.Format.WMSCapabilities.v1_1,{version:"1.1.1",readers:{wms:OpenLayers.Util.applyDefaults({SRS:function(e,t){t.srs[this.getChildValue(e)]=!0
}},OpenLayers.Format.WMSCapabilities.v1_1.prototype.readers.wms)},CLASS_NAME:"OpenLayers.Format.WMSCapabilities.v1_1_1"}),OpenLayers.Format.WMSCapabilities.v1_1_1_WMSC=OpenLayers.Class(OpenLayers.Format.WMSCapabilities.v1_1_1,{version:"1.1.1",profile:"WMSC",readers:{wms:OpenLayers.Util.applyDefaults({VendorSpecificCapabilities:function(e,t){t.vendorSpecific={tileSets:[]},this.readChildNodes(e,t.vendorSpecific)
},TileSet:function(e,t){var i={srs:{},bbox:{},resolutions:[]};this.readChildNodes(e,i),t.tileSets.push(i)
},Resolutions:function(e,t){for(var i=this.getChildValue(e).split(" "),r=0,s=i.length;s>r;r++)""!=i[r]&&t.resolutions.push(parseFloat(i[r]))
},Width:function(e,t){t.width=parseInt(this.getChildValue(e))},Height:function(e,t){t.height=parseInt(this.getChildValue(e))
},Layers:function(e,t){t.layers=this.getChildValue(e)},Styles:function(e,t){t.styles=this.getChildValue(e)
}},OpenLayers.Format.WMSCapabilities.v1_1_1.prototype.readers.wms)},CLASS_NAME:"OpenLayers.Format.WMSCapabilities.v1_1_1_WMSC"}),OpenLayers.Control.LayerSwitcher=OpenLayers.Class(OpenLayers.Control,{layerStates:null,layersDiv:null,baseLayersDiv:null,baseLayers:null,dataLbl:null,dataLayersDiv:null,dataLayers:null,minimizeDiv:null,maximizeDiv:null,ascending:!0,initialize:function(){OpenLayers.Control.prototype.initialize.apply(this,arguments),this.layerStates=[]
},destroy:function(){this.clearLayersArray("base"),this.clearLayersArray("data"),this.map.events.un({buttonclick:this.onButtonClick,addlayer:this.redraw,changelayer:this.redraw,removelayer:this.redraw,changebaselayer:this.redraw,scope:this}),this.events.unregister("buttonclick",this,this.onButtonClick),OpenLayers.Control.prototype.destroy.apply(this,arguments)
},setMap:function(){OpenLayers.Control.prototype.setMap.apply(this,arguments),this.map.events.on({addlayer:this.redraw,changelayer:this.redraw,removelayer:this.redraw,changebaselayer:this.redraw,scope:this}),this.outsideViewport?(this.events.attachToElement(this.div),this.events.register("buttonclick",this,this.onButtonClick)):this.map.events.register("buttonclick",this,this.onButtonClick)
},draw:function(){return OpenLayers.Control.prototype.draw.apply(this),this.loadContents(),this.outsideViewport||this.minimizeControl(),this.redraw(),this.div
},onButtonClick:function(e){e=e.buttonElement,e===this.minimizeDiv?this.minimizeControl():e===this.maximizeDiv?this.maximizeControl():e._layerSwitcher===this.id&&(e["for"]&&(e=document.getElementById(e["for"])),e.disabled||("radio"==e.type?(e.checked=!0,this.map.setBaseLayer(this.map.getLayer(e._layer))):(e.checked=!e.checked,this.updateMap())))
},clearLayersArray:function(e){this[e+"LayersDiv"].innerHTML="",this[e+"Layers"]=[]
},checkRedraw:function(){if(!this.layerStates.length||this.map.layers.length!=this.layerStates.length)return!0;
for(var e=0,t=this.layerStates.length;t>e;e++){var i=this.layerStates[e],r=this.map.layers[e];
if(i.name!=r.name||i.inRange!=r.inRange||i.id!=r.id||i.visibility!=r.visibility)return!0
}return!1},redraw:function(){if(!this.checkRedraw())return this.div;this.clearLayersArray("base"),this.clearLayersArray("data");
var e=!1,t=!1,i=this.map.layers.length;this.layerStates=Array(i);for(var r=0;i>r;r++){var s=this.map.layers[r];
this.layerStates[r]={name:s.name,visibility:s.visibility,inRange:s.inRange,id:s.id}
}var n=this.map.layers.slice();for(this.ascending||n.reverse(),r=0,i=n.length;i>r;r++){var s=n[r],a=s.isBaseLayer;
if(s.displayInLayerSwitcher){a?t=!0:e=!0;var o=a?s==this.map.baseLayer:s.getVisibility(),l=document.createElement("input"),h=OpenLayers.Util.createUniqueID(this.id+"_input_");
l.id=h,l.name=a?this.id+"_baseLayers":s.name,l.type=a?"radio":"checkbox",l.value=s.name,l.checked=o,l.defaultChecked=o,l.className="olButton",l._layer=s.id,l._layerSwitcher=this.id,a||s.inRange||(l.disabled=!0),o=document.createElement("label"),o["for"]=l.id,OpenLayers.Element.addClass(o,"labelSpan olButton"),o._layer=s.id,o._layerSwitcher=this.id,a||s.inRange||(o.style.color="gray"),o.innerHTML=s.name,o.style.verticalAlign=a?"bottom":"baseline",h=document.createElement("br"),(a?this.baseLayers:this.dataLayers).push({layer:s,inputElem:l,labelSpan:o}),s=a?this.baseLayersDiv:this.dataLayersDiv,s.appendChild(l),s.appendChild(o),s.appendChild(h)
}}return this.dataLbl.style.display=e?"":"none",this.baseLbl.style.display=t?"":"none",this.div
},updateMap:function(){for(var e=0,t=this.baseLayers.length;t>e;e++){var i=this.baseLayers[e];
i.inputElem.checked&&this.map.setBaseLayer(i.layer,!1)}for(e=0,t=this.dataLayers.length;t>e;e++)i=this.dataLayers[e],i.layer.setVisibility(i.inputElem.checked)
},maximizeControl:function(e){this.div.style.width="",this.div.style.height="",this.showControls(!1),null!=e&&OpenLayers.Event.stop(e)
},minimizeControl:function(e){this.div.style.width="0px",this.div.style.height="0px",this.showControls(!0),null!=e&&OpenLayers.Event.stop(e)
},showControls:function(e){this.maximizeDiv.style.display=e?"":"none",this.minimizeDiv.style.display=e?"none":"",this.layersDiv.style.display=e?"none":""
},loadContents:function(){this.layersDiv=document.createElement("div"),this.layersDiv.id=this.id+"_layersDiv",OpenLayers.Element.addClass(this.layersDiv,"layersDiv"),this.baseLbl=document.createElement("div"),this.baseLbl.innerHTML=OpenLayers.i18n("Base Layer"),OpenLayers.Element.addClass(this.baseLbl,"baseLbl"),this.baseLayersDiv=document.createElement("div"),OpenLayers.Element.addClass(this.baseLayersDiv,"baseLayersDiv"),this.dataLbl=document.createElement("div"),this.dataLbl.innerHTML=OpenLayers.i18n("Overlays"),OpenLayers.Element.addClass(this.dataLbl,"dataLbl"),this.dataLayersDiv=document.createElement("div"),OpenLayers.Element.addClass(this.dataLayersDiv,"dataLayersDiv"),this.ascending?(this.layersDiv.appendChild(this.baseLbl),this.layersDiv.appendChild(this.baseLayersDiv),this.layersDiv.appendChild(this.dataLbl),this.layersDiv.appendChild(this.dataLayersDiv)):(this.layersDiv.appendChild(this.dataLbl),this.layersDiv.appendChild(this.dataLayersDiv),this.layersDiv.appendChild(this.baseLbl),this.layersDiv.appendChild(this.baseLayersDiv)),this.div.appendChild(this.layersDiv);
var e=OpenLayers.Util.getImageLocation("layer-switcher-maximize.png");this.maximizeDiv=OpenLayers.Util.createAlphaImageDiv("OpenLayers_Control_MaximizeDiv",null,null,e,"absolute"),OpenLayers.Element.addClass(this.maximizeDiv,"maximizeDiv olButton"),this.maximizeDiv.style.display="none",this.div.appendChild(this.maximizeDiv),e=OpenLayers.Util.getImageLocation("layer-switcher-minimize.png"),this.minimizeDiv=OpenLayers.Util.createAlphaImageDiv("OpenLayers_Control_MinimizeDiv",null,null,e,"absolute"),OpenLayers.Element.addClass(this.minimizeDiv,"minimizeDiv olButton"),this.minimizeDiv.style.display="none",this.div.appendChild(this.minimizeDiv)
},CLASS_NAME:"OpenLayers.Control.LayerSwitcher"}),OpenLayers.Format.Atom=OpenLayers.Class(OpenLayers.Format.XML,{namespaces:{atom:"http://www.w3.org/2005/Atom",georss:"http://www.georss.org/georss"},feedTitle:"untitled",defaultEntryTitle:"untitled",gmlParser:null,xy:!1,read:function(e){return"string"==typeof e&&(e=OpenLayers.Format.XML.prototype.read.apply(this,[e])),this.parseFeatures(e)
},write:function(e){var t;if(OpenLayers.Util.isArray(e)){t=this.createElementNSPlus("atom:feed"),t.appendChild(this.createElementNSPlus("atom:title",{value:this.feedTitle}));
for(var i=0,r=e.length;r>i;i++)t.appendChild(this.buildEntryNode(e[i]))}else t=this.buildEntryNode(e);
return OpenLayers.Format.XML.prototype.write.apply(this,[t])},buildContentNode:function(e){var t=this.createElementNSPlus("atom:content",{attributes:{type:e.type||null}});
if(e.src)t.setAttribute("src",e.src);else if("text"==e.type||null==e.type)t.appendChild(this.createTextNode(e.value));
else if("html"==e.type){if("string"!=typeof e.value)throw"HTML content must be in form of an escaped string";
t.appendChild(this.createTextNode(e.value))}else"xhtml"==e.type?t.appendChild(e.value):"xhtml"==e.type||e.type.match(/(\+|\/)xml$/)?t.appendChild(e.value):t.appendChild(this.createTextNode(e.value));
return t},buildEntryNode:function(e){var t=e.attributes,i=t.atom||{},r=this.createElementNSPlus("atom:entry");
if(i.authors)for(var s=OpenLayers.Util.isArray(i.authors)?i.authors:[i.authors],n=0,a=s.length;a>n;n++)r.appendChild(this.buildPersonConstructNode("author",s[n]));
if(i.categories)for(var o,s=OpenLayers.Util.isArray(i.categories)?i.categories:[i.categories],n=0,a=s.length;a>n;n++)o=s[n],r.appendChild(this.createElementNSPlus("atom:category",{attributes:{term:o.term,scheme:o.scheme||null,label:o.label||null}}));
if(i.content&&r.appendChild(this.buildContentNode(i.content)),i.contributors)for(s=OpenLayers.Util.isArray(i.contributors)?i.contributors:[i.contributors],n=0,a=s.length;a>n;n++)r.appendChild(this.buildPersonConstructNode("contributor",s[n]));
if(e.fid&&r.appendChild(this.createElementNSPlus("atom:id",{value:e.fid})),i.links)for(s=OpenLayers.Util.isArray(i.links)?i.links:[i.links],n=0,a=s.length;a>n;n++)o=s[n],r.appendChild(this.createElementNSPlus("atom:link",{attributes:{href:o.href,rel:o.rel||null,type:o.type||null,hreflang:o.hreflang||null,title:o.title||null,length:o.length||null}}));
return i.published&&r.appendChild(this.createElementNSPlus("atom:published",{value:i.published})),i.rights&&r.appendChild(this.createElementNSPlus("atom:rights",{value:i.rights})),(i.summary||t.description)&&r.appendChild(this.createElementNSPlus("atom:summary",{value:i.summary||t.description})),r.appendChild(this.createElementNSPlus("atom:title",{value:i.title||t.title||this.defaultEntryTitle})),i.updated&&r.appendChild(this.createElementNSPlus("atom:updated",{value:i.updated})),e.geometry&&(t=this.createElementNSPlus("georss:where"),t.appendChild(this.buildGeometryNode(e.geometry)),r.appendChild(t)),r
},initGmlParser:function(){this.gmlParser=new OpenLayers.Format.GML.v3({xy:this.xy,featureNS:"http://example.com#feature",internalProjection:this.internalProjection,externalProjection:this.externalProjection})
},buildGeometryNode:function(e){return this.gmlParser||this.initGmlParser(),this.gmlParser.writeNode("feature:_geometry",e).firstChild
},buildPersonConstructNode:function(e,t){var i=["uri","email"],r=this.createElementNSPlus("atom:"+e);
r.appendChild(this.createElementNSPlus("atom:name",{value:t.name}));for(var s=0,n=i.length;n>s;s++)t[i[s]]&&r.appendChild(this.createElementNSPlus("atom:"+i[s],{value:t[i[s]]}));
return r},getFirstChildValue:function(e,t,i,r){return(e=this.getElementsByTagNameNS(e,t,i))&&0<e.length?this.getChildValue(e[0],r):r
},parseFeature:function(e){var t={},i=null,r=null,s=null,n=this.namespaces.atom;this.parsePersonConstructs(e,"author",t),r=this.getElementsByTagNameNS(e,n,"category"),0<r.length&&(t.categories=[]);
for(var a=0,o=r.length;o>a;a++)i={},i.term=r[a].getAttribute("term"),(s=r[a].getAttribute("scheme"))&&(i.scheme=s),(s=r[a].getAttribute("label"))&&(i.label=s),t.categories.push(i);
r=this.getElementsByTagNameNS(e,n,"content"),0<r.length&&(i={},(s=r[0].getAttribute("type"))&&(i.type=s),(s=r[0].getAttribute("src"))?i.src=s:(i.value="text"==i.type||"html"==i.type||null==i.type?this.getFirstChildValue(e,n,"content",null):"xhtml"==i.type||i.type.match(/(\+|\/)xml$/)?this.getChildEl(r[0]):this.getFirstChildValue(e,n,"content",null),t.content=i)),this.parsePersonConstructs(e,"contributor",t),t.id=this.getFirstChildValue(e,n,"id",null),r=this.getElementsByTagNameNS(e,n,"link"),0<r.length&&(t.links=Array(r.length));
for(var l=["rel","type","hreflang","title","length"],a=0,o=r.length;o>a;a++){i={},i.href=r[a].getAttribute("href");
for(var h=0,p=l.length;p>h;h++)(s=r[a].getAttribute(l[h]))&&(i[l[h]]=s);t.links[a]=i
}return(i=this.getFirstChildValue(e,n,"published",null))&&(t.published=i),(i=this.getFirstChildValue(e,n,"rights",null))&&(t.rights=i),(i=this.getFirstChildValue(e,n,"summary",null))&&(t.summary=i),t.title=this.getFirstChildValue(e,n,"title",null),t.updated=this.getFirstChildValue(e,n,"updated",null),i={title:t.title,description:t.summary,atom:t},e=this.parseLocations(e)[0],e=new OpenLayers.Feature.Vector(e,i),e.fid=t.id,e
},parseFeatures:function(e){var t=[],i=this.getElementsByTagNameNS(e,this.namespaces.atom,"entry");
0==i.length&&(i=[e]),e=0;for(var r=i.length;r>e;e++)t.push(this.parseFeature(i[e]));
return t},parseLocations:function(e){var t=this.namespaces.georss,i={components:[]},r=this.getElementsByTagNameNS(e,t,"where");
if(r&&0<r.length){this.gmlParser||this.initGmlParser();for(var s=0,n=r.length;n>s;s++)this.gmlParser.readChildNodes(r[s],i)
}if(i=i.components,(r=this.getElementsByTagNameNS(e,t,"point"))&&0<r.length)for(s=0,n=r.length;n>s;s++){var a=OpenLayers.String.trim(r[s].firstChild.nodeValue).split(/\s+/);
2!=a.length&&(a=OpenLayers.String.trim(r[s].firstChild.nodeValue).split(/\s*,\s*/)),i.push(new OpenLayers.Geometry.Point(a[1],a[0]))
}var o=this.getElementsByTagNameNS(e,t,"line");if(o&&0<o.length)for(var l,s=0,n=o.length;n>s;s++){r=OpenLayers.String.trim(o[s].firstChild.nodeValue).split(/\s+/),l=[];
for(var h=0,p=r.length;p>h;h+=2)a=new OpenLayers.Geometry.Point(r[h+1],r[h]),l.push(a);
i.push(new OpenLayers.Geometry.LineString(l))}if((e=this.getElementsByTagNameNS(e,t,"polygon"))&&0<e.length)for(s=0,n=e.length;n>s;s++){for(r=OpenLayers.String.trim(e[s].firstChild.nodeValue).split(/\s+/),l=[],h=0,p=r.length;p>h;h+=2)a=new OpenLayers.Geometry.Point(r[h+1],r[h]),l.push(a);
i.push(new OpenLayers.Geometry.Polygon([new OpenLayers.Geometry.LinearRing(l)]))}if(this.internalProjection&&this.externalProjection)for(s=0,n=i.length;n>s;s++)i[s]&&i[s].transform(this.externalProjection,this.internalProjection);
return i},parsePersonConstructs:function(e,t,i){var r=[],s=this.namespaces.atom;e=this.getElementsByTagNameNS(e,s,t);
for(var n=["uri","email"],a=0,o=e.length;o>a;a++){var l={};l.name=this.getFirstChildValue(e[a],s,"name",null);
for(var h=0,p=n.length;p>h;h++){var u=this.getFirstChildValue(e[a],s,n[h],null);u&&(l[n[h]]=u)
}r.push(l)}0<r.length&&(i[t+"s"]=r)},CLASS_NAME:"OpenLayers.Format.Atom"}),OpenLayers.Control.KeyboardDefaults=OpenLayers.Class(OpenLayers.Control,{autoActivate:!0,slideFactor:75,observeElement:null,draw:function(){this.handler=new OpenLayers.Handler.Keyboard(this,{keydown:this.defaultKeyPress},{observeElement:this.observeElement||document})
},defaultKeyPress:function(e){var t,i=!0;if(t=OpenLayers.Event.element(e),!t||"INPUT"!=t.tagName&&"TEXTAREA"!=t.tagName&&"SELECT"!=t.tagName){switch(e.keyCode){case OpenLayers.Event.KEY_LEFT:this.map.pan(-this.slideFactor,0);
break;case OpenLayers.Event.KEY_RIGHT:this.map.pan(this.slideFactor,0);break;case OpenLayers.Event.KEY_UP:this.map.pan(0,-this.slideFactor);
break;case OpenLayers.Event.KEY_DOWN:this.map.pan(0,this.slideFactor);break;case 33:t=this.map.getSize(),this.map.pan(0,-.75*t.h);
break;case 34:t=this.map.getSize(),this.map.pan(0,.75*t.h);break;case 35:t=this.map.getSize(),this.map.pan(.75*t.w,0);
break;case 36:t=this.map.getSize(),this.map.pan(-.75*t.w,0);break;case 43:case 61:case 187:case 107:this.map.zoomIn();
break;case 45:case 109:case 189:case 95:this.map.zoomOut();break;default:i=!1}i&&OpenLayers.Event.stop(e)
}},CLASS_NAME:"OpenLayers.Control.KeyboardDefaults"}),OpenLayers.Format.WMTSCapabilities.v1_0_0=OpenLayers.Class(OpenLayers.Format.OWSCommon.v1_1_0,{version:"1.0.0",namespaces:{ows:"http://www.opengis.net/ows/1.1",wmts:"http://www.opengis.net/wmts/1.0",xlink:"http://www.w3.org/1999/xlink"},yx:null,defaultPrefix:"wmts",initialize:function(e){OpenLayers.Format.XML.prototype.initialize.apply(this,[e]),this.options=e,e=OpenLayers.Util.extend({},OpenLayers.Format.WMTSCapabilities.prototype.yx),this.yx=OpenLayers.Util.extend(e,this.yx)
},read:function(e){"string"==typeof e&&(e=OpenLayers.Format.XML.prototype.read.apply(this,[e])),e&&9==e.nodeType&&(e=e.documentElement);
var t={};return this.readNode(e,t),t.version=this.version,t},readers:{wmts:{Capabilities:function(e,t){this.readChildNodes(e,t)
},Contents:function(e,t){t.contents={},t.contents.layers=[],t.contents.tileMatrixSets={},this.readChildNodes(e,t.contents)
},Layer:function(e,t){var i={styles:[],formats:[],dimensions:[],tileMatrixSetLinks:[],layers:[]};
this.readChildNodes(e,i),t.layers.push(i)},Style:function(e,t){var i={};i.isDefault="true"===e.getAttribute("isDefault"),this.readChildNodes(e,i),t.styles.push(i)
},Format:function(e,t){t.formats.push(this.getChildValue(e))},TileMatrixSetLink:function(e,t){var i={};
this.readChildNodes(e,i),t.tileMatrixSetLinks.push(i)},TileMatrixSet:function(e,t){if(t.layers){var i={matrixIds:[]};
this.readChildNodes(e,i),t.tileMatrixSets[i.identifier]=i}else t.tileMatrixSet=this.getChildValue(e)
},TileMatrix:function(e,t){var i={supportedCRS:t.supportedCRS};this.readChildNodes(e,i),t.matrixIds.push(i)
},ScaleDenominator:function(e,t){t.scaleDenominator=parseFloat(this.getChildValue(e))
},TopLeftCorner:function(e,t){var i,r=this.getChildValue(e).split(" ");t.supportedCRS&&(i=t.supportedCRS.replace(/urn:ogc:def:crs:(\w+):.+:(\w+)$/,"urn:ogc:def:crs:$1::$2"),i=!!this.yx[i]),t.topLeftCorner=i?new OpenLayers.LonLat(r[1],r[0]):new OpenLayers.LonLat(r[0],r[1])
},TileWidth:function(e,t){t.tileWidth=parseInt(this.getChildValue(e))},TileHeight:function(e,t){t.tileHeight=parseInt(this.getChildValue(e))
},MatrixWidth:function(e,t){t.matrixWidth=parseInt(this.getChildValue(e))},MatrixHeight:function(e,t){t.matrixHeight=parseInt(this.getChildValue(e))
},ResourceURL:function(e,t){t.resourceUrl=t.resourceUrl||{};var i=e.getAttribute("resourceType");
t.resourceUrls||(t.resourceUrls=[]),i=t.resourceUrl[i]={format:e.getAttribute("format"),template:e.getAttribute("template"),resourceType:i},t.resourceUrls.push(i)
},WSDL:function(e,t){t.wsdl={},t.wsdl.href=e.getAttribute("xlink:href")},ServiceMetadataURL:function(e,t){t.serviceMetadataUrl={},t.serviceMetadataUrl.href=e.getAttribute("xlink:href")
},LegendURL:function(e,t){t.legend={},t.legend.href=e.getAttribute("xlink:href"),t.legend.format=e.getAttribute("format")
},Dimension:function(e,t){var i={values:[]};this.readChildNodes(e,i),t.dimensions.push(i)
},Default:function(e,t){t["default"]=this.getChildValue(e)},Value:function(e,t){t.values.push(this.getChildValue(e))
}},ows:OpenLayers.Format.OWSCommon.v1_1_0.prototype.readers.ows},CLASS_NAME:"OpenLayers.Format.WMTSCapabilities.v1_0_0"});
