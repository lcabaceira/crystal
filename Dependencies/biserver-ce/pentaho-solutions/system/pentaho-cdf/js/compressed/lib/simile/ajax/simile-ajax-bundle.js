!function(){function evalScript(e,t){t.src?jQuery.ajax({url:t.src,async:!1,dataType:"script"}):jQuery.globalEval(t.text||t.textContent||t.innerHTML||""),t.parentNode&&t.parentNode.removeChild(t)
}function bindReady(){if(!readyBound){if(readyBound=!0,document.addEventListener&&!jQuery.browser.opera&&document.addEventListener("DOMContentLoaded",jQuery.ready,!1),jQuery.browser.msie&&window==top&&function(){if(!jQuery.isReady){try{document.documentElement.doScroll("left")
}catch(e){return setTimeout(arguments.callee,0),void 0}jQuery.ready()}}(),jQuery.browser.opera&&document.addEventListener("DOMContentLoaded",function(){if(!jQuery.isReady){for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].disabled)return setTimeout(arguments.callee,0),void 0;
jQuery.ready()}},!1),jQuery.browser.safari){var e;!function(){return jQuery.isReady?void 0:"loaded"!=document.readyState&&"complete"!=document.readyState?(setTimeout(arguments.callee,0),void 0):(void 0===e&&(e=jQuery("style, link[rel=stylesheet]").length),document.styleSheets.length!=e?(setTimeout(arguments.callee,0),void 0):(jQuery.ready(),void 0))
}()}jQuery.event.add(window,"load",jQuery.ready)}}if(window.jQuery)var _jQuery=window.jQuery;
var jQuery=window.jQuery=function(e,t){return new jQuery.prototype.init(e,t)};if(window.$)var _$=window.$;
window.$=jQuery;var quickExpr=/^[^<]*(<(.|\s)+>)[^>]*$|^#(\w+)$/,isSimple=/^.[^:#\[\.]*$/;
jQuery.fn=jQuery.prototype={init:function(e,t){if(e=e||document,e.nodeType)return this[0]=e,this.length=1,this;
if("string"==typeof e){var i=quickExpr.exec(e);if(!i||!i[1]&&t)return new jQuery(t).find(e);
if(i[1])e=jQuery.clean([i[1]],t);else{var r=document.getElementById(i[3]);if(r)return r.id!=i[3]?jQuery().find(e):(this[0]=r,this.length=1,this);
e=[]}}else if(jQuery.isFunction(e))return new jQuery(document)[jQuery.fn.ready?"ready":"load"](e);
return this.setArray(e.constructor==Array&&e||(e.jquery||e.length&&e!=window&&!e.nodeType&&void 0!=e[0]&&e[0].nodeType)&&jQuery.makeArray(e)||[e])
},jquery:"1.2.3",size:function(){return this.length},length:0,get:function(e){return void 0==e?jQuery.makeArray(this):this[e]
},pushStack:function(e){var t=jQuery(e);return t.prevObject=this,t},setArray:function(e){return this.length=0,Array.prototype.push.apply(this,e),this
},each:function(e,t){return jQuery.each(this,e,t)},index:function(e){var t=-1;return this.each(function(i){this==e&&(t=i)
}),t},attr:function(e,t,i){var r=e;if(e.constructor==String){if(void 0==t)return this.length&&jQuery[i||"attr"](this[0],e)||void 0;
r={},r[e]=t}return this.each(function(t){for(e in r)jQuery.attr(i?this.style:this,e,jQuery.prop(this,r[e],i,t,e))
})},css:function(e,t){return("width"==e||"height"==e)&&parseFloat(t)<0&&(t=void 0),this.attr(e,t,"curCSS")
},text:function(e){if("object"!=typeof e&&null!=e)return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(e));
var t="";return jQuery.each(e||this,function(){jQuery.each(this.childNodes,function(){8!=this.nodeType&&(t+=1!=this.nodeType?this.nodeValue:jQuery.fn.text([this]))
})}),t},wrapAll:function(e){return this[0]&&jQuery(e,this[0].ownerDocument).clone().insertBefore(this[0]).map(function(){for(var e=this;e.firstChild;)e=e.firstChild;
return e}).append(this),this},wrapInner:function(e){return this.each(function(){jQuery(this).contents().wrapAll(e)
})},wrap:function(e){return this.each(function(){jQuery(this).wrapAll(e)})},append:function(){return this.domManip(arguments,!0,!1,function(e){1==this.nodeType&&this.appendChild(e)
})},prepend:function(){return this.domManip(arguments,!0,!0,function(e){1==this.nodeType&&this.insertBefore(e,this.firstChild)
})},before:function(){return this.domManip(arguments,!1,!1,function(e){this.parentNode.insertBefore(e,this)
})},after:function(){return this.domManip(arguments,!1,!0,function(e){this.parentNode.insertBefore(e,this.nextSibling)
})},end:function(){return this.prevObject||jQuery([])},find:function(e){var t=jQuery.map(this,function(t){return jQuery.find(e,t)
});return this.pushStack(/[^+>] [^+>]/.test(e)||e.indexOf("..")>-1?jQuery.unique(t):t)
},clone:function(e){var t=this.map(function(){if(jQuery.browser.msie&&!jQuery.isXMLDoc(this)){var e=this.cloneNode(!0),t=document.createElement("div");
return t.appendChild(e),jQuery.clean([t.innerHTML])[0]}return this.cloneNode(!0)}),i=t.find("*").andSelf().each(function(){void 0!=this[expando]&&(this[expando]=null)
});return e===!0&&this.find("*").andSelf().each(function(e){if(3!=this.nodeType){var t=jQuery.data(this,"events");
for(var r in t)for(var n in t[r])jQuery.event.add(i[e],r,t[r][n],t[r][n].data)}}),t
},filter:function(e){return this.pushStack(jQuery.isFunction(e)&&jQuery.grep(this,function(t,i){return e.call(t,i)
})||jQuery.multiFilter(e,this))},not:function(e){if(e.constructor==String){if(isSimple.test(e))return this.pushStack(jQuery.multiFilter(e,this,!0));
e=jQuery.multiFilter(e,this)}var t=e.length&&void 0!==e[e.length-1]&&!e.nodeType;
return this.filter(function(){return t?jQuery.inArray(this,e)<0:this!=e})},add:function(e){return e?this.pushStack(jQuery.merge(this.get(),e.constructor==String?jQuery(e).get():void 0==e.length||e.nodeName&&!jQuery.nodeName(e,"form")?[e]:e)):this
},is:function(e){return e?jQuery.multiFilter(e,this).length>0:!1},hasClass:function(e){return this.is("."+e)
},val:function(e){if(void 0==e){if(this.length){var t=this[0];if(jQuery.nodeName(t,"select")){var i=t.selectedIndex,r=[],n=t.options,a="select-one"==t.type;
if(0>i)return null;for(var o=a?i:0,l=a?i+1:n.length;l>o;o++){var s=n[o];if(s.selected){if(e=jQuery.browser.msie&&!s.attributes.value.specified?s.text:s.value,a)return e;
r.push(e)}}return r}return(this[0].value||"").replace(/\r/g,"")}return void 0}return this.each(function(){if(1==this.nodeType)if(e.constructor==Array&&/radio|checkbox/.test(this.type))this.checked=jQuery.inArray(this.value,e)>=0||jQuery.inArray(this.name,e)>=0;
else if(jQuery.nodeName(this,"select")){var t=e.constructor==Array?e:[e];jQuery("option",this).each(function(){this.selected=jQuery.inArray(this.value,t)>=0||jQuery.inArray(this.text,t)>=0
}),t.length||(this.selectedIndex=-1)}else this.value=e})},html:function(e){return void 0==e?this.length?this[0].innerHTML:null:this.empty().append(e)
},replaceWith:function(e){return this.after(e).remove()},eq:function(e){return this.slice(e,e+1)
},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments))
},map:function(e){return this.pushStack(jQuery.map(this,function(t,i){return e.call(t,i,t)
}))},andSelf:function(){return this.add(this.prevObject)},data:function(e,t){var i=e.split(".");
if(i[1]=i[1]?"."+i[1]:"",null==t){var r=this.triggerHandler("getData"+i[1]+"!",[i[0]]);
return void 0==r&&this.length&&(r=jQuery.data(this[0],e)),null==r&&i[1]?this.data(i[0]):r
}return this.trigger("setData"+i[1]+"!",[i[0],t]).each(function(){jQuery.data(this,e,t)
})},removeData:function(e){return this.each(function(){jQuery.removeData(this,e)})
},domManip:function(e,t,i,r){var n,a=this.length>1;return this.each(function(){n||(n=jQuery.clean(e,this.ownerDocument),i&&n.reverse());
var o=this;t&&jQuery.nodeName(this,"table")&&jQuery.nodeName(n[0],"tr")&&(o=this.getElementsByTagName("tbody")[0]||this.appendChild(this.ownerDocument.createElement("tbody")));
var l=jQuery([]);jQuery.each(n,function(){var e=a?jQuery(this).clone(!0)[0]:this;
jQuery.nodeName(e,"script")?l=l.add(e):(1==e.nodeType&&(l=l.add(jQuery("script",e).remove())),r.call(o,e))
}),l.each(evalScript)})}},jQuery.prototype.init.prototype=jQuery.prototype,jQuery.extend=jQuery.fn.extend=function(){var e,t=arguments[0]||{},i=1,r=arguments.length,n=!1;
for(t.constructor==Boolean&&(n=t,t=arguments[1]||{},i=2),"object"!=typeof t&&"function"!=typeof t&&(t={}),1==r&&(t=this,i=0);r>i;i++)if(null!=(e=arguments[i]))for(var a in e)t!==e[a]&&(n&&e[a]&&"object"==typeof e[a]&&t[a]&&!e[a].nodeType?t[a]=jQuery.extend(t[a],e[a]):void 0!=e[a]&&(t[a]=e[a]));
return t};var expando="jQuery"+(new Date).getTime(),uuid=0,windowData={},exclude=/z-?index|font-?weight|opacity|zoom|line-?height/i;
jQuery.extend({noConflict:function(e){return window.$=_$,e&&(window.jQuery=_jQuery),jQuery
},isFunction:function(e){return!!e&&"string"!=typeof e&&!e.nodeName&&e.constructor!=Array&&/function/i.test(e+"")
},isXMLDoc:function(e){return e.documentElement&&!e.body||e.tagName&&e.ownerDocument&&!e.ownerDocument.body
},globalEval:function(e){if(e=jQuery.trim(e)){var t=document.getElementsByTagName("head")[0]||document.documentElement,i=document.createElement("script");
i.type="text/javascript",jQuery.browser.msie?i.text=e:i.appendChild(document.createTextNode(e)),t.appendChild(i),t.removeChild(i)
}},nodeName:function(e,t){return e.nodeName&&e.nodeName.toUpperCase()==t.toUpperCase()
},cache:{},data:function(e,t,i){e=e==window?windowData:e;var r=e[expando];return r||(r=e[expando]=++uuid),t&&!jQuery.cache[r]&&(jQuery.cache[r]={}),void 0!=i&&(jQuery.cache[r][t]=i),t?jQuery.cache[r][t]:r
},removeData:function(e,t){e=e==window?windowData:e;var i=e[expando];if(t){if(jQuery.cache[i]){delete jQuery.cache[i][t],t="";
for(t in jQuery.cache[i])break;t||jQuery.removeData(e)}}else{try{delete e[expando]
}catch(r){e.removeAttribute&&e.removeAttribute(expando)}delete jQuery.cache[i]}},each:function(e,t,i){if(i)if(void 0==e.length){for(var r in e)if(t.apply(e[r],i)===!1)break
}else for(var n=0,a=e.length;a>n&&t.apply(e[n],i)!==!1;n++);else if(void 0==e.length){for(var r in e)if(t.call(e[r],r,e[r])===!1)break
}else for(var n=0,a=e.length,o=e[0];a>n&&t.call(o,n,o)!==!1;o=e[++n]);return e},prop:function(e,t,i,r,n){return jQuery.isFunction(t)&&(t=t.call(e,r)),t&&t.constructor==Number&&"curCSS"==i&&!exclude.test(n)?t+"px":t
},className:{add:function(e,t){jQuery.each((t||"").split(/\s+/),function(t,i){1!=e.nodeType||jQuery.className.has(e.className,i)||(e.className+=(e.className?" ":"")+i)
})},remove:function(e,t){1==e.nodeType&&(e.className=void 0!=t?jQuery.grep(e.className.split(/\s+/),function(e){return!jQuery.className.has(t,e)
}).join(" "):"")},has:function(e,t){return jQuery.inArray(t,(e.className||e).toString().split(/\s+/))>-1
}},swap:function(e,t,i){var r={};for(var n in t)r[n]=e.style[n],e.style[n]=t[n];i.call(e);
for(var n in t)e.style[n]=r[n]},css:function(e,t,i){function r(){n="width"==t?e.offsetWidth:e.offsetHeight;
var i=0,r=0;jQuery.each(o,function(){i+=parseFloat(jQuery.curCSS(e,"padding"+this,!0))||0,r+=parseFloat(jQuery.curCSS(e,"border"+this+"Width",!0))||0
}),n-=Math.round(i+r)}if("width"==t||"height"==t){var n,a={position:"absolute",visibility:"hidden",display:"block"},o="width"==t?["Left","Right"]:["Top","Bottom"];
return jQuery(e).is(":visible")?r():jQuery.swap(e,a,r),Math.max(0,n)}return jQuery.curCSS(e,t,i)
},curCSS:function(e,t,i){function r(e){if(!jQuery.browser.safari)return!1;var t=document.defaultView.getComputedStyle(e,null);
return!t||""==t.getPropertyValue("color")}var n;if("opacity"==t&&jQuery.browser.msie)return n=jQuery.attr(e.style,"opacity"),""==n?"1":n;
if(jQuery.browser.opera&&"display"==t){var a=e.style.outline;e.style.outline="0 solid black",e.style.outline=a
}if(t.match(/float/i)&&(t=styleFloat),!i&&e.style&&e.style[t])n=e.style[t];else if(document.defaultView&&document.defaultView.getComputedStyle){t.match(/float/i)&&(t="float"),t=t.replace(/([A-Z])/g,"-$1").toLowerCase();
var o=document.defaultView.getComputedStyle(e,null);if(o&&!r(e))n=o.getPropertyValue(t);
else{for(var l=[],s=[],u=e;u&&r(u);u=u.parentNode)s.unshift(u);for(var d=0;d<s.length;d++)r(s[d])&&(l[d]=s[d].style.display,s[d].style.display="block");
n="display"==t&&null!=l[s.length-1]?"none":o&&o.getPropertyValue(t)||"";for(var d=0;d<l.length;d++)null!=l[d]&&(s[d].style.display=l[d])
}"opacity"==t&&""==n&&(n="1")}else if(e.currentStyle){var c=t.replace(/\-(\w)/g,function(e,t){return t.toUpperCase()
});if(n=e.currentStyle[t]||e.currentStyle[c],!/^\d+(px)?$/i.test(n)&&/^\d/.test(n)){var m=e.style.left,h=e.runtimeStyle.left;
e.runtimeStyle.left=e.currentStyle.left,e.style.left=n||0,n=e.style.pixelLeft+"px",e.style.left=m,e.runtimeStyle.left=h
}}return n},clean:function(e,t){var i=[];return t=t||document,"undefined"==typeof t.createElement&&(t=t.ownerDocument||t[0]&&t[0].ownerDocument||document),jQuery.each(e,function(e,r){if(r){if(r.constructor==Number&&(r=r.toString()),"string"==typeof r){r=r.replace(/(<(\w+)[^>]*?)\/>/g,function(e,t,i){return i.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?e:t+"></"+i+">"
});var n=jQuery.trim(r).toLowerCase(),a=t.createElement("div"),o=!n.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!n.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||n.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!n.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!n.indexOf("<td")||!n.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!n.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||jQuery.browser.msie&&[1,"div<div>","</div>"]||[0,"",""];
for(a.innerHTML=o[1]+r+o[2];o[0]--;)a=a.lastChild;if(jQuery.browser.msie){for(var l=!n.indexOf("<table")&&n.indexOf("<tbody")<0?a.firstChild&&a.firstChild.childNodes:"<table>"==o[1]&&n.indexOf("<tbody")<0?a.childNodes:[],s=l.length-1;s>=0;--s)jQuery.nodeName(l[s],"tbody")&&!l[s].childNodes.length&&l[s].parentNode.removeChild(l[s]);
/^\s/.test(r)&&a.insertBefore(t.createTextNode(r.match(/^\s*/)[0]),a.firstChild)}r=jQuery.makeArray(a.childNodes)
}(0!==r.length||jQuery.nodeName(r,"form")||jQuery.nodeName(r,"select"))&&(void 0==r[0]||jQuery.nodeName(r,"form")||r.options?i.push(r):i=jQuery.merge(i,r))
}}),i},attr:function(e,t,i){if(!e||3==e.nodeType||8==e.nodeType)return void 0;var r=jQuery.isXMLDoc(e)?{}:jQuery.props;
if("selected"==t&&jQuery.browser.safari&&e.parentNode.selectedIndex,r[t])return void 0!=i&&(e[r[t]]=i),e[r[t]];
if(jQuery.browser.msie&&"style"==t)return jQuery.attr(e.style,"cssText",i);if(void 0==i&&jQuery.browser.msie&&jQuery.nodeName(e,"form")&&("action"==t||"method"==t))return e.getAttributeNode(t).nodeValue;
if(e.tagName){if(void 0!=i){if("type"==t&&jQuery.nodeName(e,"input")&&e.parentNode)throw"type property can't be changed";
e.setAttribute(t,""+i)}return jQuery.browser.msie&&/href|src/.test(t)&&!jQuery.isXMLDoc(e)?e.getAttribute(t,2):e.getAttribute(t)
}return"opacity"==t&&jQuery.browser.msie?(void 0!=i&&(e.zoom=1,e.filter=(e.filter||"").replace(/alpha\([^)]*\)/,"")+("NaN"==parseFloat(i).toString()?"":"alpha(opacity="+100*i+")")),e.filter&&e.filter.indexOf("opacity=")>=0?(parseFloat(e.filter.match(/opacity=([^)]*)/)[1])/100).toString():""):(t=t.replace(/-([a-z])/gi,function(e,t){return t.toUpperCase()
}),void 0!=i&&(e[t]=i),e[t])},trim:function(e){return(e||"").replace(/^\s+|\s+$/g,"")
},makeArray:function(e){var t=[];if("array"!=typeof e)for(var i=0,r=e.length;r>i;i++)t.push(e[i]);
else t=e.slice(0);return t},inArray:function(e,t){for(var i=0,r=t.length;r>i;i++)if(t[i]==e)return i;
return-1},merge:function(e,t){if(jQuery.browser.msie)for(var i=0;t[i];i++)8!=t[i].nodeType&&e.push(t[i]);
else for(var i=0;t[i];i++)e.push(t[i]);return e},unique:function(e){var t=[],i={};
try{for(var r=0,n=e.length;n>r;r++){var a=jQuery.data(e[r]);i[a]||(i[a]=!0,t.push(e[r]))
}}catch(o){t=e}return t},grep:function(e,t,i){for(var r=[],n=0,a=e.length;a>n;n++)(!i&&t(e[n],n)||i&&!t(e[n],n))&&r.push(e[n]);
return r},map:function(e,t){for(var i=[],r=0,n=e.length;n>r;r++){var a=t(e[r],r);
null!==a&&void 0!=a&&(a.constructor!=Array&&(a=[a]),i=i.concat(a))}return i}});var userAgent=navigator.userAgent.toLowerCase();
jQuery.browser={version:(userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[])[1],safari:/webkit/.test(userAgent),opera:/opera/.test(userAgent),msie:/msie/.test(userAgent)&&!/opera/.test(userAgent),mozilla:/mozilla/.test(userAgent)&&!/(compatible|webkit)/.test(userAgent)};
var styleFloat=jQuery.browser.msie?"styleFloat":"cssFloat";jQuery.extend({boxModel:!jQuery.browser.msie||"CSS1Compat"==document.compatMode,props:{"for":"htmlFor","class":"className","float":styleFloat,cssFloat:styleFloat,styleFloat:styleFloat,innerHTML:"innerHTML",className:"className",value:"value",disabled:"disabled",checked:"checked",readonly:"readOnly",selected:"selected",maxlength:"maxLength",selectedIndex:"selectedIndex",defaultValue:"defaultValue",tagName:"tagName",nodeName:"nodeName"}}),jQuery.each({parent:function(e){return e.parentNode
},parents:function(e){return jQuery.dir(e,"parentNode")},next:function(e){return jQuery.nth(e,2,"nextSibling")
},prev:function(e){return jQuery.nth(e,2,"previousSibling")},nextAll:function(e){return jQuery.dir(e,"nextSibling")
},prevAll:function(e){return jQuery.dir(e,"previousSibling")},siblings:function(e){return jQuery.sibling(e.parentNode.firstChild,e)
},children:function(e){return jQuery.sibling(e.firstChild)},contents:function(e){return jQuery.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:jQuery.makeArray(e.childNodes)
}},function(e,t){jQuery.fn[e]=function(e){var i=jQuery.map(this,t);return e&&"string"==typeof e&&(i=jQuery.multiFilter(e,i)),this.pushStack(jQuery.unique(i))
}}),jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){jQuery.fn[e]=function(){var e=arguments;
return this.each(function(){for(var i=0,r=e.length;r>i;i++)jQuery(e[i])[t](this)})
}}),jQuery.each({removeAttr:function(e){jQuery.attr(this,e,""),1==this.nodeType&&this.removeAttribute(e)
},addClass:function(e){jQuery.className.add(this,e)},removeClass:function(e){jQuery.className.remove(this,e)
},toggleClass:function(e){jQuery.className[jQuery.className.has(this,e)?"remove":"add"](this,e)
},remove:function(e){(!e||jQuery.filter(e,[this]).r.length)&&(jQuery("*",this).add(this).each(function(){jQuery.event.remove(this),jQuery.removeData(this)
}),this.parentNode&&this.parentNode.removeChild(this))},empty:function(){for(jQuery(">*",this).remove();this.firstChild;)this.removeChild(this.firstChild)
}},function(e,t){jQuery.fn[e]=function(){return this.each(t,arguments)}}),jQuery.each(["Height","Width"],function(e,t){var i=t.toLowerCase();
jQuery.fn[i]=function(e){return this[0]==window?jQuery.browser.opera&&document.body["client"+t]||jQuery.browser.safari&&window["inner"+t]||"CSS1Compat"==document.compatMode&&document.documentElement["client"+t]||document.body["client"+t]:this[0]==document?Math.max(Math.max(document.body["scroll"+t],document.documentElement["scroll"+t]),Math.max(document.body["offset"+t],document.documentElement["offset"+t])):void 0==e?this.length?jQuery.css(this[0],i):null:this.css(i,e.constructor==String?e:e+"px")
}});var chars=jQuery.browser.safari&&parseInt(jQuery.browser.version)<417?"(?:[\\w*_-]|\\\\.)":"(?:[\\wĨ-￿*_-]|\\\\.)",quickChild=new RegExp("^>\\s*("+chars+"+)"),quickID=new RegExp("^("+chars+"+)(#)("+chars+"+)"),quickClass=new RegExp("^([#.]?)("+chars+"*)");
jQuery.extend({expr:{"":function(e,t,i){return"*"==i[2]||jQuery.nodeName(e,i[2])},"#":function(e,t,i){return e.getAttribute("id")==i[2]
},":":{lt:function(e,t,i){return t<i[3]-0},gt:function(e,t,i){return t>i[3]-0},nth:function(e,t,i){return i[3]-0==t
},eq:function(e,t,i){return i[3]-0==t},first:function(e,t){return 0==t},last:function(e,t,i,r){return t==r.length-1
},even:function(e,t){return t%2==0},odd:function(e,t){return t%2},"first-child":function(e){return e.parentNode.getElementsByTagName("*")[0]==e
},"last-child":function(e){return jQuery.nth(e.parentNode.lastChild,1,"previousSibling")==e
},"only-child":function(e){return!jQuery.nth(e.parentNode.lastChild,2,"previousSibling")
},parent:function(e){return e.firstChild},empty:function(e){return!e.firstChild},contains:function(e,t,i){return(e.textContent||e.innerText||jQuery(e).text()||"").indexOf(i[3])>=0
},visible:function(e){return"hidden"!=e.type&&"none"!=jQuery.css(e,"display")&&"hidden"!=jQuery.css(e,"visibility")
},hidden:function(e){return"hidden"==e.type||"none"==jQuery.css(e,"display")||"hidden"==jQuery.css(e,"visibility")
},enabled:function(e){return!e.disabled},disabled:function(e){return e.disabled},checked:function(e){return e.checked
},selected:function(e){return e.selected||jQuery.attr(e,"selected")},text:function(e){return"text"==e.type
},radio:function(e){return"radio"==e.type},checkbox:function(e){return"checkbox"==e.type
},file:function(e){return"file"==e.type},password:function(e){return"password"==e.type
},submit:function(e){return"submit"==e.type},image:function(e){return"image"==e.type
},reset:function(e){return"reset"==e.type},button:function(e){return"button"==e.type||jQuery.nodeName(e,"button")
},input:function(e){return/input|select|textarea|button/i.test(e.nodeName)},has:function(e,t,i){return jQuery.find(i[3],e).length
},header:function(e){return/h\d/i.test(e.nodeName)},animated:function(e){return jQuery.grep(jQuery.timers,function(t){return e==t.elem
}).length}}},parse:[new RegExp("^([) *@?([w-]+) *([!*$^~=]*) *('?\"?)(.*?) *]"),new RegExp("^(:)([w-]+)(\"?'?(.*?((.*?))?[^(]*?)\"?'?)"),new RegExp("^([:.#]*)("+chars+"+)")],multiFilter:function(e,t,i){for(var r,n=[];e&&e!=r;){r=e;
var a=jQuery.filter(e,t,i);e=a.t.replace(/^\s*,\s*/,""),n=i?t=a.r:jQuery.merge(n,a.r)
}return n},find:function(e,t){if("string"!=typeof e)return[e];if(t&&1!=t.nodeType&&9!=t.nodeType)return[];
t=t||document;for(var i,r,n=[t],a=[];e&&i!=e;){var o=[];i=e,e=jQuery.trim(e);var l=!1,s=quickChild,u=s.exec(e);
if(u){r=u[1].toUpperCase();for(var d=0;n[d];d++)for(var c=n[d].firstChild;c;c=c.nextSibling)1!=c.nodeType||"*"!=r&&c.nodeName.toUpperCase()!=r||o.push(c);
if(n=o,e=e.replace(s,""),0==e.indexOf(" "))continue;l=!0}else if(s=/^([>+~])\s*(\w*)/i,null!=(u=s.exec(e))){o=[];
var m={};r=u[2].toUpperCase(),u=u[1];for(var h=0,f=n.length;f>h;h++)for(var p="~"==u||"+"==u?n[h].nextSibling:n[h].firstChild;p;p=p.nextSibling)if(1==p.nodeType){var y=jQuery.data(p);
if("~"==u&&m[y])break;if(r&&p.nodeName.toUpperCase()!=r||("~"==u&&(m[y]=!0),o.push(p)),"+"==u)break
}n=o,e=jQuery.trim(e.replace(s,"")),l=!0}if(e&&!l)if(e.indexOf(",")){var g=quickID,u=g.exec(e);
u?u=[0,u[2],u[3],u[1]]:(g=quickClass,u=g.exec(e)),u[2]=u[2].replace(/\\/g,"");var x=n[n.length-1];
if("#"==u[1]&&x&&x.getElementById&&!jQuery.isXMLDoc(x)){var j=x.getElementById(u[2]);
(jQuery.browser.msie||jQuery.browser.opera)&&j&&"string"==typeof j.id&&j.id!=u[2]&&(j=jQuery('[@id="'+u[2]+'"]',x)[0]),n=o=!j||u[3]&&!jQuery.nodeName(j,u[3])?[]:[j]
}else{for(var d=0;n[d];d++){var v="#"==u[1]&&u[3]?u[3]:""!=u[1]||""==u[0]?"*":u[2];
"*"==v&&"object"==n[d].nodeName.toLowerCase()&&(v="param"),o=jQuery.merge(o,n[d].getElementsByTagName(v))
}if("."==u[1]&&(o=jQuery.classFilter(o,u[2])),"#"==u[1]){for(var S=[],d=0;o[d];d++)if(o[d].getAttribute("id")==u[2]){S=[o[d]];
break}o=S}n=o}e=e.replace(g,"")}else t==n[0]&&n.shift(),a=jQuery.merge(a,n),o=n=[t],e=" "+e.substr(1,e.length);
if(e){var A=jQuery.filter(e,o);n=o=A.r,e=jQuery.trim(A.t)}}return e&&(n=[]),n&&t==n[0]&&n.shift(),a=jQuery.merge(a,n)
},classFilter:function(e,t,i){t=" "+t+" ";for(var r=[],n=0;e[n];n++){var a=(" "+e[n].className+" ").indexOf(t)>=0;
(!i&&a||i&&!a)&&r.push(e[n])}return r},filter:function(t,r,not){for(var last;t&&t!=last;){last=t;
for(var p=jQuery.parse,m,i=0;p[i];i++)if(m=p[i].exec(t)){t=t.substring(m[0].length),m[2]=m[2].replace(/\\/g,"");
break}if(!m)break;if(":"==m[1]&&"not"==m[2])r=isSimple.test(m[3])?jQuery.filter(m[3],r,!0).r:jQuery(r).not(m[3]);
else if("."==m[1])r=jQuery.classFilter(r,m[2],not);else if("["==m[1]){for(var tmp=[],type=m[3],i=0,rl=r.length;rl>i;i++){var a=r[i],z=a[jQuery.props[m[2]]||m[2]];
(null==z||/href|src|selected/.test(m[2]))&&(z=jQuery.attr(a,m[2])||""),(""==type&&!!z||"="==type&&z==m[5]||"!="==type&&z!=m[5]||"^="==type&&z&&!z.indexOf(m[5])||"$="==type&&z.substr(z.length-m[5].length)==m[5]||("*="==type||"~="==type)&&z.indexOf(m[5])>=0)^not&&tmp.push(a)
}r=tmp}else if(":"==m[1]&&"nth-child"==m[2]){for(var merge={},tmp=[],test=/(-?)(\d*)n((?:\+|-)?\d*)/.exec("even"==m[3]&&"2n"||"odd"==m[3]&&"2n+1"||!/\D/.test(m[3])&&"0n+"+m[3]||m[3]),first=test[1]+(test[2]||1)-0,last=test[3]-0,i=0,rl=r.length;rl>i;i++){var node=r[i],parentNode=node.parentNode,id=jQuery.data(parentNode);
if(!merge[id]){for(var c=1,n=parentNode.firstChild;n;n=n.nextSibling)1==n.nodeType&&(n.nodeIndex=c++);
merge[id]=!0}var add=!1;0==first?node.nodeIndex==last&&(add=!0):(node.nodeIndex-last)%first==0&&(node.nodeIndex-last)/first>=0&&(add=!0),add^not&&tmp.push(node)
}r=tmp}else{var fn=jQuery.expr[m[1]];"object"==typeof fn&&(fn=fn[m[2]]),"string"==typeof fn&&(fn=eval("false||function(a,i){return "+fn+";}")),r=jQuery.grep(r,function(e,t){return fn(e,t,m,r)
},not)}}return{r:r,t:t}},dir:function(e,t){for(var i=[],r=e[t];r&&r!=document;)1==r.nodeType&&i.push(r),r=r[t];
return i},nth:function(e,t,i){t=t||1;for(var r=0;e&&(1!=e.nodeType||++r!=t);e=e[i]);return e
},sibling:function(e,t){for(var i=[];e;e=e.nextSibling)1!=e.nodeType||t&&e==t||i.push(e);
return i}}),jQuery.event={add:function(e,t,i,r){if(3!=e.nodeType&&8!=e.nodeType){if(jQuery.browser.msie&&void 0!=e.setInterval&&(e=window),i.guid||(i.guid=this.guid++),void 0!=r){var n=i;
i=function(){return n.apply(this,arguments)},i.data=r,i.guid=n.guid}var a=jQuery.data(e,"events")||jQuery.data(e,"events",{}),o=jQuery.data(e,"handle")||jQuery.data(e,"handle",function(){var e;
return"undefined"==typeof jQuery||jQuery.event.triggered?e:e=jQuery.event.handle.apply(arguments.callee.elem,arguments)
});o.elem=e,jQuery.each(t.split(/\s+/),function(t,r){var n=r.split(".");r=n[0],i.type=n[1];
var l=a[r];l||(l=a[r]={},jQuery.event.special[r]&&jQuery.event.special[r].setup.call(e)!==!1||(e.addEventListener?e.addEventListener(r,o,!1):e.attachEvent&&e.attachEvent("on"+r,o))),l[i.guid]=i,jQuery.event.global[r]=!0
}),e=null}},guid:1,global:{},remove:function(e,t,i){if(3!=e.nodeType&&8!=e.nodeType){var r,n=jQuery.data(e,"events");
if(n){if(void 0==t||"string"==typeof t&&"."==t.charAt(0))for(var a in n)this.remove(e,a+(t||""));
else t.type&&(i=t.handler,t=t.type),jQuery.each(t.split(/\s+/),function(t,a){var o=a.split(".");
if(a=o[0],n[a]){if(i)delete n[a][i.guid];else for(i in n[a])o[1]&&n[a][i].type!=o[1]||delete n[a][i];
for(r in n[a])break;r||(jQuery.event.special[a]&&jQuery.event.special[a].teardown.call(e)!==!1||(e.removeEventListener?e.removeEventListener(a,jQuery.data(e,"handle"),!1):e.detachEvent&&e.detachEvent("on"+a,jQuery.data(e,"handle"))),r=null,delete n[a])
}});for(r in n)break;if(!r){var o=jQuery.data(e,"handle");o&&(o.elem=null),jQuery.removeData(e,"events"),jQuery.removeData(e,"handle")
}}}},trigger:function(e,t,i,r,n){if(t=jQuery.makeArray(t||[]),e.indexOf("!")>=0){e=e.slice(0,-1);
var a=!0}if(i){if(3==i.nodeType||8==i.nodeType)return void 0;var o,l,s=jQuery.isFunction(i[e]||null),u=!t[0]||!t[0].preventDefault;
if(u&&t.unshift(this.fix({type:e,target:i})),t[0].type=e,a&&(t[0].exclusive=!0),jQuery.isFunction(jQuery.data(i,"handle"))&&(o=jQuery.data(i,"handle").apply(i,t)),!s&&i["on"+e]&&i["on"+e].apply(i,t)===!1&&(o=!1),u&&t.shift(),n&&jQuery.isFunction(n)&&(l=n.apply(i,null==o?t:t.concat(o)),void 0!==l&&(o=l)),s&&r!==!1&&o!==!1&&(!jQuery.nodeName(i,"a")||"click"!=e)){this.triggered=!0;
try{i[e]()}catch(d){}}this.triggered=!1}else this.global[e]&&jQuery("*").add([window,document]).trigger(e,t);
return o},handle:function(e){var t;e=jQuery.event.fix(e||window.event||{});var i=e.type.split(".");
e.type=i[0];var r=jQuery.data(this,"events")&&jQuery.data(this,"events")[e.type],n=Array.prototype.slice.call(arguments,1);
n.unshift(e);for(var a in r){var o=r[a];if(n[0].handler=o,n[0].data=o.data,!i[1]&&!e.exclusive||o.type==i[1]){var l=o.apply(this,n);
t!==!1&&(t=l),l===!1&&(e.preventDefault(),e.stopPropagation())}}return jQuery.browser.msie&&(e.target=e.preventDefault=e.stopPropagation=e.handler=e.data=null),t
},fix:function(e){var t=e;if(e=jQuery.extend({},t),e.preventDefault=function(){t.preventDefault&&t.preventDefault(),t.returnValue=!1
},e.stopPropagation=function(){t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0
},e.target||(e.target=e.srcElement||document),3==e.target.nodeType&&(e.target=t.target.parentNode),!e.relatedTarget&&e.fromElement&&(e.relatedTarget=e.fromElement==e.target?e.toElement:e.fromElement),null==e.pageX&&null!=e.clientX){var i=document.documentElement,r=document.body;
e.pageX=e.clientX+(i&&i.scrollLeft||r&&r.scrollLeft||0)-(i.clientLeft||0),e.pageY=e.clientY+(i&&i.scrollTop||r&&r.scrollTop||0)-(i.clientTop||0)
}return!e.which&&(e.charCode||0===e.charCode?e.charCode:e.keyCode)&&(e.which=e.charCode||e.keyCode),!e.metaKey&&e.ctrlKey&&(e.metaKey=e.ctrlKey),!e.which&&e.button&&(e.which=1&e.button?1:2&e.button?3:4&e.button?2:0),e
},special:{ready:{setup:function(){bindReady()},teardown:function(){}},mouseenter:{setup:function(){return jQuery.browser.msie?!1:(jQuery(this).bind("mouseover",jQuery.event.special.mouseenter.handler),!0)
},teardown:function(){return jQuery.browser.msie?!1:(jQuery(this).unbind("mouseover",jQuery.event.special.mouseenter.handler),!0)
},handler:function(e){return withinElement(e,this)?!0:(arguments[0].type="mouseenter",jQuery.event.handle.apply(this,arguments))
}},mouseleave:{setup:function(){return jQuery.browser.msie?!1:(jQuery(this).bind("mouseout",jQuery.event.special.mouseleave.handler),!0)
},teardown:function(){return jQuery.browser.msie?!1:(jQuery(this).unbind("mouseout",jQuery.event.special.mouseleave.handler),!0)
},handler:function(e){return withinElement(e,this)?!0:(arguments[0].type="mouseleave",jQuery.event.handle.apply(this,arguments))
}}}},jQuery.fn.extend({bind:function(e,t,i){return"unload"==e?this.one(e,t,i):this.each(function(){jQuery.event.add(this,e,i||t,i&&t)
})},one:function(e,t,i){return this.each(function(){jQuery.event.add(this,e,function(e){return jQuery(this).unbind(e),(i||t).apply(this,arguments)
},i&&t)})},unbind:function(e,t){return this.each(function(){jQuery.event.remove(this,e,t)
})},trigger:function(e,t,i){return this.each(function(){jQuery.event.trigger(e,t,this,!0,i)
})},triggerHandler:function(e,t,i){return this[0]?jQuery.event.trigger(e,t,this[0],!1,i):void 0
},toggle:function(){var e=arguments;return this.click(function(t){return this.lastToggle=0==this.lastToggle?1:0,t.preventDefault(),e[this.lastToggle].apply(this,arguments)||!1
})},hover:function(e,t){return this.bind("mouseenter",e).bind("mouseleave",t)},ready:function(e){return bindReady(),jQuery.isReady?e.call(document,jQuery):jQuery.readyList.push(function(){return e.call(this,jQuery)
}),this}}),jQuery.extend({isReady:!1,readyList:[],ready:function(){jQuery.isReady||(jQuery.isReady=!0,jQuery.readyList&&(jQuery.each(jQuery.readyList,function(){this.apply(document)
}),jQuery.readyList=null),jQuery(document).triggerHandler("ready"))}});var readyBound=!1;
jQuery.each("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,change,select,submit,keydown,keypress,keyup,error".split(","),function(e,t){jQuery.fn[t]=function(e){return e?this.bind(t,e):this.trigger(t)
}});var withinElement=function(e,t){for(var i=e.relatedTarget;i&&i!=t;)try{i=i.parentNode
}catch(r){i=t}return i==t};jQuery(window).bind("unload",function(){jQuery("*").add(document).unbind()
}),jQuery.fn.extend({load:function(e,t,i){if(jQuery.isFunction(e))return this.bind("load",e);
var r=e.indexOf(" ");if(r>=0){var n=e.slice(r,e.length);e=e.slice(0,r)}i=i||function(){};
var a="GET";t&&(jQuery.isFunction(t)?(i=t,t=null):(t=jQuery.param(t),a="POST"));var o=this;
return jQuery.ajax({url:e,type:a,dataType:"html",data:t,complete:function(e,t){("success"==t||"notmodified"==t)&&o.html(n?jQuery("<div/>").append(e.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(n):e.responseText),o.each(i,[e.responseText,t,e])
}}),this},serialize:function(){return jQuery.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return jQuery.nodeName(this,"form")?jQuery.makeArray(this.elements):this
}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password/i.test(this.type))
}).map(function(e,t){var i=jQuery(this).val();return null==i?null:i.constructor==Array?jQuery.map(i,function(e){return{name:t.name,value:e}
}):{name:t.name,value:i}}).get()}}),jQuery.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(e,t){jQuery.fn[t]=function(e){return this.bind(t,e)
}});var jsc=(new Date).getTime();jQuery.extend({get:function(e,t,i,r){return jQuery.isFunction(t)&&(i=t,t=null),jQuery.ajax({type:"GET",url:e,data:t,success:i,dataType:r})
},getScript:function(e,t){return jQuery.get(e,null,t,"script")},getJSON:function(e,t,i){return jQuery.get(e,t,i,"json")
},post:function(e,t,i,r){return jQuery.isFunction(t)&&(i=t,t={}),jQuery.ajax({type:"POST",url:e,data:t,success:i,dataType:r})
},ajaxSetup:function(e){jQuery.extend(jQuery.ajaxSettings,e)},ajaxSettings:{global:!0,type:"GET",timeout:0,contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,data:null,username:null,password:null,accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(e){function t(){e.success&&e.success(a,n),e.global&&jQuery.event.trigger("ajaxSuccess",[h,e])
}function i(){e.complete&&e.complete(h,n),e.global&&jQuery.event.trigger("ajaxComplete",[h,e]),e.global&&!--jQuery.active&&jQuery.event.trigger("ajaxStop")
}var r,n,a,o=/=\?(&|$)/g;if(e=jQuery.extend(!0,e,jQuery.extend(!0,{},jQuery.ajaxSettings,e)),e.data&&e.processData&&"string"!=typeof e.data&&(e.data=jQuery.param(e.data)),"jsonp"==e.dataType&&("get"==e.type.toLowerCase()?e.url.match(o)||(e.url+=(e.url.match(/\?/)?"&":"?")+(e.jsonp||"callback")+"=?"):e.data&&e.data.match(o)||(e.data=(e.data?e.data+"&":"")+(e.jsonp||"callback")+"=?"),e.dataType="json"),"json"==e.dataType&&(e.data&&e.data.match(o)||e.url.match(o))&&(r="jsonp"+jsc++,e.data&&(e.data=(e.data+"").replace(o,"="+r+"$1")),e.url=e.url.replace(o,"="+r+"$1"),e.dataType="script",window[r]=function(e){a=e,t(),i(),window[r]=void 0;
try{delete window[r]}catch(n){}u&&u.removeChild(d)}),"script"==e.dataType&&null==e.cache&&(e.cache=!1),e.cache===!1&&"get"==e.type.toLowerCase()){var l=(new Date).getTime(),s=e.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+l+"$2");
e.url=s+(s==e.url?(e.url.match(/\?/)?"&":"?")+"_="+l:"")}if(e.data&&"get"==e.type.toLowerCase()&&(e.url+=(e.url.match(/\?/)?"&":"?")+e.data,e.data=null),e.global&&!jQuery.active++&&jQuery.event.trigger("ajaxStart"),!(e.url.indexOf("http")&&e.url.indexOf("//")||"script"!=e.dataType||"get"!=e.type.toLowerCase())){var u=document.getElementsByTagName("head")[0],d=document.createElement("script");
if(d.src=e.url,e.scriptCharset&&(d.charset=e.scriptCharset),!r){var c=!1;d.onload=d.onreadystatechange=function(){c||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(c=!0,t(),i(),u.removeChild(d))
}}return u.appendChild(d),void 0}var m=!1,h=window.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest;
h.open(e.type,e.url,e.async,e.username,e.password);try{e.data&&h.setRequestHeader("Content-Type",e.contentType),e.ifModified&&h.setRequestHeader("If-Modified-Since",jQuery.lastModified[e.url]||"Thu, 01 Jan 1970 00:00:00 GMT"),h.setRequestHeader("X-Requested-With","XMLHttpRequest"),h.setRequestHeader("Accept",e.dataType&&e.accepts[e.dataType]?e.accepts[e.dataType]+", */*":e.accepts._default)
}catch(f){}e.beforeSend&&e.beforeSend(h),e.global&&jQuery.event.trigger("ajaxSend",[h,e]);
var p=function(o){if(!m&&h&&(4==h.readyState||"timeout"==o)){if(m=!0,y&&(clearInterval(y),y=null),n="timeout"==o&&"timeout"||!jQuery.httpSuccess(h)&&"error"||e.ifModified&&jQuery.httpNotModified(h,e.url)&&"notmodified"||"success","success"==n)try{a=jQuery.httpData(h,e.dataType)
}catch(l){n="parsererror"}if("success"==n){var s;try{s=h.getResponseHeader("Last-Modified")
}catch(l){}e.ifModified&&s&&(jQuery.lastModified[e.url]=s),r||t()}else jQuery.handleError(e,h,n);
i(),e.async&&(h=null)}};if(e.async){var y=setInterval(p,13);e.timeout>0&&setTimeout(function(){h&&(h.abort(),m||p("timeout"))
},e.timeout)}try{h.send(e.data)}catch(f){jQuery.handleError(e,h,null,f)}return e.async||p(),h
},handleError:function(e,t,i,r){e.error&&e.error(t,i,r),e.global&&jQuery.event.trigger("ajaxError",[t,e,r])
},active:0,httpSuccess:function(e){try{return!e.status&&"file:"==location.protocol||e.status>=200&&e.status<300||304==e.status||1223==e.status||jQuery.browser.safari&&void 0==e.status
}catch(t){}return!1},httpNotModified:function(e,t){try{var i=e.getResponseHeader("Last-Modified");
return 304==e.status||i==jQuery.lastModified[t]||jQuery.browser.safari&&void 0==e.status
}catch(r){}return!1},httpData:function(r,type){var ct=r.getResponseHeader("content-type"),xml="xml"==type||!type&&ct&&ct.indexOf("xml")>=0,data=xml?r.responseXML:r.responseText;
if(xml&&"parsererror"==data.documentElement.tagName)throw"parsererror";return"script"==type&&jQuery.globalEval(data),"json"==type&&(data=eval("("+data+")")),data
},param:function(e){var t=[];if(e.constructor==Array||e.jquery)jQuery.each(e,function(){t.push(encodeURIComponent(this.name)+"="+encodeURIComponent(this.value))
});else for(var i in e)e[i]&&e[i].constructor==Array?jQuery.each(e[i],function(){t.push(encodeURIComponent(i)+"="+encodeURIComponent(this))
}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(e[i]));return t.join("&").replace(/%20/g,"+")
}}),jQuery.fn.extend({show:function(e,t){return e?this.animate({height:"show",width:"show",opacity:"show"},e,t):this.filter(":hidden").each(function(){if(this.style.display=this.oldblock||"","none"==jQuery.css(this,"display")){var e=jQuery("<"+this.tagName+" />").appendTo("body");
this.style.display=e.css("display"),"none"==this.style.display&&(this.style.display="block"),e.remove()
}}).end()},hide:function(e,t){return e?this.animate({height:"hide",width:"hide",opacity:"hide"},e,t):this.filter(":visible").each(function(){this.oldblock=this.oldblock||jQuery.css(this,"display"),this.style.display="none"
}).end()},_toggle:jQuery.fn.toggle,toggle:function(e,t){return jQuery.isFunction(e)&&jQuery.isFunction(t)?this._toggle(e,t):e?this.animate({height:"toggle",width:"toggle",opacity:"toggle"},e,t):this.each(function(){jQuery(this)[jQuery(this).is(":hidden")?"show":"hide"]()
})},slideDown:function(e,t){return this.animate({height:"show"},e,t)},slideUp:function(e,t){return this.animate({height:"hide"},e,t)
},slideToggle:function(e,t){return this.animate({height:"toggle"},e,t)},fadeIn:function(e,t){return this.animate({opacity:"show"},e,t)
},fadeOut:function(e,t){return this.animate({opacity:"hide"},e,t)},fadeTo:function(e,t,i){return this.animate({opacity:t},e,i)
},animate:function(e,t,i,r){var n=jQuery.speed(t,i,r);return this[n.queue===!1?"each":"queue"](function(){if(1!=this.nodeType)return!1;
var t=jQuery.extend({},n),i=jQuery(this).is(":hidden"),r=this;for(var a in e){if("hide"==e[a]&&i||"show"==e[a]&&!i)return jQuery.isFunction(t.complete)&&t.complete.apply(this);
("height"==a||"width"==a)&&(t.display=jQuery.css(this,"display"),t.overflow=this.style.overflow)
}return null!=t.overflow&&(this.style.overflow="hidden"),t.curAnim=jQuery.extend({},e),jQuery.each(e,function(n,a){var o=new jQuery.fx(r,t,n);
if(/toggle|show|hide/.test(a))o["toggle"==a?i?"show":"hide":a](e);else{var l=a.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),s=o.cur(!0)||0;
if(l){var u=parseFloat(l[2]),d=l[3]||"px";"px"!=d&&(r.style[n]=(u||1)+d,s=(u||1)/o.cur(!0)*s,r.style[n]=s+d),l[1]&&(u=("-="==l[1]?-1:1)*u+s),o.custom(s,u,d)
}else o.custom(s,a,"")}}),!0})},queue:function(e,t){return(jQuery.isFunction(e)||e&&e.constructor==Array)&&(t=e,e="fx"),!e||"string"==typeof e&&!t?queue(this[0],e):this.each(function(){t.constructor==Array?queue(this,e,t):(queue(this,e).push(t),1==queue(this,e).length&&t.apply(this))
})},stop:function(e,t){var i=jQuery.timers;return e&&this.queue([]),this.each(function(){for(var e=i.length-1;e>=0;e--)i[e].elem==this&&(t&&i[e](!0),i.splice(e,1))
}),t||this.dequeue(),this}});var queue=function(e,t,i){if(!e)return void 0;t=t||"fx";
var r=jQuery.data(e,t+"queue");return(!r||i)&&(r=jQuery.data(e,t+"queue",i?jQuery.makeArray(i):[])),r
};jQuery.fn.dequeue=function(e){return e=e||"fx",this.each(function(){var t=queue(this,e);
t.shift(),t.length&&t[0].apply(this)})},jQuery.extend({speed:function(e,t,i){var r=e&&e.constructor==Object?e:{complete:i||!i&&t||jQuery.isFunction(e)&&e,duration:e,easing:i&&t||t&&t.constructor!=Function&&t};
return r.duration=(r.duration&&r.duration.constructor==Number?r.duration:{slow:600,fast:200}[r.duration])||400,r.old=r.complete,r.complete=function(){r.queue!==!1&&jQuery(this).dequeue(),jQuery.isFunction(r.old)&&r.old.apply(this)
},r},easing:{linear:function(e,t,i,r){return i+r*e},swing:function(e,t,i,r){return(-Math.cos(e*Math.PI)/2+.5)*r+i
}},timers:[],timerId:null,fx:function(e,t,i){this.options=t,this.elem=e,this.prop=i,t.orig||(t.orig={})
}}),jQuery.fx.prototype={update:function(){this.options.step&&this.options.step.apply(this.elem,[this.now,this]),(jQuery.fx.step[this.prop]||jQuery.fx.step._default)(this),("height"==this.prop||"width"==this.prop)&&(this.elem.style.display="block")
},cur:function(e){if(null!=this.elem[this.prop]&&null==this.elem.style[this.prop])return this.elem[this.prop];
var t=parseFloat(jQuery.css(this.elem,this.prop,e));return t&&t>-1e4?t:parseFloat(jQuery.curCSS(this.elem,this.prop))||0
},custom:function(e,t,i){function r(e){return n.step(e)}this.startTime=(new Date).getTime(),this.start=e,this.end=t,this.unit=i||this.unit||"px",this.now=this.start,this.pos=this.state=0,this.update();
var n=this;r.elem=this.elem,jQuery.timers.push(r),null==jQuery.timerId&&(jQuery.timerId=setInterval(function(){for(var e=jQuery.timers,t=0;t<e.length;t++)e[t]()||e.splice(t--,1);
e.length||(clearInterval(jQuery.timerId),jQuery.timerId=null)},13))},show:function(){this.options.orig[this.prop]=jQuery.attr(this.elem.style,this.prop),this.options.show=!0,this.custom(0,this.cur()),("width"==this.prop||"height"==this.prop)&&(this.elem.style[this.prop]="1px"),jQuery(this.elem).show()
},hide:function(){this.options.orig[this.prop]=jQuery.attr(this.elem.style,this.prop),this.options.hide=!0,this.custom(this.cur(),0)
},step:function(e){var t=(new Date).getTime();if(e||t>this.options.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),this.options.curAnim[this.prop]=!0;
var i=!0;for(var r in this.options.curAnim)this.options.curAnim[r]!==!0&&(i=!1);if(i&&(null!=this.options.display&&(this.elem.style.overflow=this.options.overflow,this.elem.style.display=this.options.display,"none"==jQuery.css(this.elem,"display")&&(this.elem.style.display="block")),this.options.hide&&(this.elem.style.display="none"),this.options.hide||this.options.show))for(var n in this.options.curAnim)jQuery.attr(this.elem.style,n,this.options.orig[n]);
return i&&jQuery.isFunction(this.options.complete)&&this.options.complete.apply(this.elem),!1
}var a=t-this.startTime;return this.state=a/this.options.duration,this.pos=jQuery.easing[this.options.easing||(jQuery.easing.swing?"swing":"linear")](this.state,a,0,1,this.options.duration),this.now=this.start+(this.end-this.start)*this.pos,this.update(),!0
}},jQuery.fx.step={scrollLeft:function(e){e.elem.scrollLeft=e.now},scrollTop:function(e){e.elem.scrollTop=e.now
},opacity:function(e){jQuery.attr(e.elem.style,"opacity",e.now)},_default:function(e){e.elem.style[e.prop]=e.now+e.unit
}},jQuery.fn.offset=function(){function border(e){add(jQuery.curCSS(e,"borderLeftWidth",!0),jQuery.curCSS(e,"borderTopWidth",!0))
}function add(e,t){left+=parseInt(e)||0,top+=parseInt(t)||0}var results,left=0,top=0,elem=this[0];
if(elem)with(jQuery.browser){var parent=elem.parentNode,offsetChild=elem,offsetParent=elem.offsetParent,doc=elem.ownerDocument,safari2=safari&&parseInt(version)<522&&!/adobeair/i.test(userAgent),fixed="fixed"==jQuery.css(elem,"position");
if(elem.getBoundingClientRect){var box=elem.getBoundingClientRect();add(box.left+Math.max(doc.documentElement.scrollLeft,doc.body.scrollLeft),box.top+Math.max(doc.documentElement.scrollTop,doc.body.scrollTop)),add(-doc.documentElement.clientLeft,-doc.documentElement.clientTop)
}else{for(add(elem.offsetLeft,elem.offsetTop);offsetParent;)add(offsetParent.offsetLeft,offsetParent.offsetTop),(mozilla&&!/^t(able|d|h)$/i.test(offsetParent.tagName)||safari&&!safari2)&&border(offsetParent),fixed||"fixed"!=jQuery.css(offsetParent,"position")||(fixed=!0),offsetChild=/^body$/i.test(offsetParent.tagName)?offsetChild:offsetParent,offsetParent=offsetParent.offsetParent;
for(;parent&&parent.tagName&&!/^body|html$/i.test(parent.tagName);)/^inline|table.*$/i.test(jQuery.css(parent,"display"))||add(-parent.scrollLeft,-parent.scrollTop),mozilla&&"visible"!=jQuery.css(parent,"overflow")&&border(parent),parent=parent.parentNode;
(safari2&&(fixed||"absolute"==jQuery.css(offsetChild,"position"))||mozilla&&"absolute"!=jQuery.css(offsetChild,"position"))&&add(-doc.body.offsetLeft,-doc.body.offsetTop),fixed&&add(Math.max(doc.documentElement.scrollLeft,doc.body.scrollLeft),Math.max(doc.documentElement.scrollTop,doc.body.scrollTop))
}results={top:top,left:left}}return results}}(),SimileAjax.jQuery=jQuery.noConflict(!0),"undefined"==typeof window.$&&(window.$=SimileAjax.jQuery),SimileAjax.Platform.os={isMac:!1,isWin:!1,isWin32:!1,isUnix:!1},SimileAjax.Platform.browser={isIE:!1,isNetscape:!1,isMozilla:!1,isFirefox:!1,isOpera:!1,isSafari:!1,majorVersion:0,minorVersion:0},function(){var e=navigator.appName.toLowerCase(),t=navigator.userAgent.toLowerCase();
SimileAjax.Platform.os.isMac=-1!=t.indexOf("mac"),SimileAjax.Platform.os.isWin=-1!=t.indexOf("win"),SimileAjax.Platform.os.isWin32=SimileAjax.Platform.isWin&&(-1!=t.indexOf("95")||-1!=t.indexOf("98")||-1!=t.indexOf("nt")||-1!=t.indexOf("win32")||-1!=t.indexOf("32bit")),SimileAjax.Platform.os.isUnix=-1!=t.indexOf("x11"),SimileAjax.Platform.browser.isIE=-1!=e.indexOf("microsoft"),SimileAjax.Platform.browser.isNetscape=-1!=e.indexOf("netscape"),SimileAjax.Platform.browser.isMozilla=-1!=t.indexOf("mozilla"),SimileAjax.Platform.browser.isFirefox=-1!=t.indexOf("firefox"),SimileAjax.Platform.browser.isOpera=-1!=e.indexOf("opera"),SimileAjax.Platform.browser.isSafari=-1!=e.indexOf("safari");
var i=function(e){var t=e.split(".");SimileAjax.Platform.browser.majorVersion=parseInt(t[0]),SimileAjax.Platform.browser.minorVersion=parseInt(t[1])
},r=function(e,t,i){var r=e.indexOf(t,i);return r>=0?r:e.length};if(SimileAjax.Platform.browser.isMozilla){var n=t.indexOf("mozilla/");
n>=0&&i(t.substring(n+8,r(t," ",n)))}if(SimileAjax.Platform.browser.isIE){var n=t.indexOf("msie ");
n>=0&&i(t.substring(n+5,r(t,";",n)))}if(SimileAjax.Platform.browser.isNetscape){var n=t.indexOf("rv:");
n>=0&&i(t.substring(n+3,r(t,")",n)))}if(SimileAjax.Platform.browser.isFirefox){var n=t.indexOf("firefox/");
n>=0&&i(t.substring(n+8,r(t," ",n)))}"localeCompare"in String.prototype||(String.prototype.localeCompare=function(e){return e>this?-1:this>e?1:0
})}(),SimileAjax.Platform.getDefaultLocale=function(){return SimileAjax.Platform.clientLocale
},SimileAjax.ListenerQueue=function(e){this._listeners=[],this._wildcardHandlerName=e
},SimileAjax.ListenerQueue.prototype.add=function(e){this._listeners.push(e)},SimileAjax.ListenerQueue.prototype.remove=function(e){for(var t=this._listeners,i=0;i<t.length;i++)if(t[i]==e){t.splice(i,1);
break}},SimileAjax.ListenerQueue.prototype.fire=function(e,t){for(var i=[].concat(this._listeners),r=0;r<i.length;r++){var n=i[r];
if(e in n)try{n[e].apply(n,t)}catch(a){SimileAjax.Debug.exception("Error firing event of name "+e,a)
}else if(null!=this._wildcardHandlerName&&this._wildcardHandlerName in n)try{n[this._wildcardHandlerName].apply(n,[e])
}catch(a){SimileAjax.Debug.exception("Error firing event of name "+e+" to wildcard handler",a)
}}},SimileAjax.Set=function(e){if(this._hash={},this._count=0,e instanceof Array)for(var t=0;t<e.length;t++)this.add(e[t]);
else e instanceof SimileAjax.Set&&this.addSet(e)},SimileAjax.Set.prototype.add=function(e){return e in this._hash?!1:(this._hash[e]=!0,this._count++,!0)
},SimileAjax.Set.prototype.addSet=function(e){for(var t in e._hash)this.add(t)},SimileAjax.Set.prototype.remove=function(e){return e in this._hash?(delete this._hash[e],this._count--,!0):!1
},SimileAjax.Set.prototype.removeSet=function(e){for(var t in e._hash)this.remove(t)
},SimileAjax.Set.prototype.retainSet=function(e){for(var t in this._hash)e.contains(t)||(delete this._hash[t],this._count--)
},SimileAjax.Set.prototype.contains=function(e){return e in this._hash},SimileAjax.Set.prototype.size=function(){return this._count
},SimileAjax.Set.prototype.toArray=function(){var e=[];for(var t in this._hash)e.push(t);
return e},SimileAjax.Set.prototype.visit=function(e){for(var t in this._hash)if(1==e(t))break
},SimileAjax.SortedArray=function(e,t){this._a=t instanceof Array?t:[],this._compare=e
},SimileAjax.SortedArray.prototype.add=function(e){var t=this,i=this.find(function(i){return t._compare(i,e)
});i<this._a.length?this._a.splice(i,0,e):this._a.push(e)},SimileAjax.SortedArray.prototype.remove=function(e){for(var t=this,i=this.find(function(i){return t._compare(i,e)
});i<this._a.length&&0==this._compare(this._a[i],e);){if(this._a[i]==e)return this._a.splice(i,1),!0;
i++}return!1},SimileAjax.SortedArray.prototype.removeAll=function(){this._a=[]},SimileAjax.SortedArray.prototype.elementAt=function(e){return this._a[e]
},SimileAjax.SortedArray.prototype.length=function(){return this._a.length},SimileAjax.SortedArray.prototype.find=function(e){for(var t=0,i=this._a.length;i>t;){var r=Math.floor((t+i)/2),n=e(this._a[r]);
if(r==t)return 0>n?t+1:t;0>n?t=r:i=r}return t},SimileAjax.SortedArray.prototype.getFirst=function(){return this._a.length>0?this._a[0]:null
},SimileAjax.SortedArray.prototype.getLast=function(){return this._a.length>0?this._a[this._a.length-1]:null
},SimileAjax.EventIndex=function(e){var t=this;this._unit=null!=e?e:SimileAjax.NativeDateUnit,this._events=new SimileAjax.SortedArray(function(e,i){return t._unit.compare(e.getStart(),i.getStart())
}),this._idToEvent={},this._indexed=!0},SimileAjax.EventIndex.prototype.getUnit=function(){return this._unit
},SimileAjax.EventIndex.prototype.getEvent=function(e){return this._idToEvent[e]},SimileAjax.EventIndex.prototype.add=function(e){this._events.add(e),this._idToEvent[e.getID()]=e,this._indexed=!1
},SimileAjax.EventIndex.prototype.removeAll=function(){this._events.removeAll(),this._idToEvent={},this._indexed=!1
},SimileAjax.EventIndex.prototype.getCount=function(){return this._events.length()
},SimileAjax.EventIndex.prototype.getIterator=function(e,t){return this._indexed||this._index(),new SimileAjax.EventIndex._Iterator(this._events,e,t,this._unit)
},SimileAjax.EventIndex.prototype.getReverseIterator=function(e,t){return this._indexed||this._index(),new SimileAjax.EventIndex._ReverseIterator(this._events,e,t,this._unit)
},SimileAjax.EventIndex.prototype.getAllIterator=function(){return new SimileAjax.EventIndex._AllIterator(this._events)
},SimileAjax.EventIndex.prototype.getEarliestDate=function(){var e=this._events.getFirst();
return null==e?null:e.getStart()},SimileAjax.EventIndex.prototype.getLatestDate=function(){var e=this._events.getLast();
if(null==e)return null;this._indexed||this._index();for(var t=e._earliestOverlapIndex,i=this._events.elementAt(t).getEnd(),r=t+1;r<this._events.length();r++)i=this._unit.later(i,this._events.elementAt(r).getEnd());
return i},SimileAjax.EventIndex.prototype._index=function(){for(var e=this._events.length(),t=0;e>t;t++){var i=this._events.elementAt(t);
i._earliestOverlapIndex=t}for(var r=1,t=0;e>t;t++){var i=this._events.elementAt(t),n=i.getEnd();
for(r=Math.max(r,t+1);e>r;){var a=this._events.elementAt(r),o=a.getStart();if(!(this._unit.compare(o,n)<0))break;
a._earliestOverlapIndex=t,r++}}this._indexed=!0},SimileAjax.EventIndex._Iterator=function(e,t,i,r){this._events=e,this._startDate=t,this._endDate=i,this._unit=r,this._currentIndex=e.find(function(e){return r.compare(e.getStart(),t)
}),this._currentIndex-1>=0&&(this._currentIndex=this._events.elementAt(this._currentIndex-1)._earliestOverlapIndex),this._currentIndex--,this._maxIndex=e.find(function(e){return r.compare(e.getStart(),i)
}),this._hasNext=!1,this._next=null,this._findNext()},SimileAjax.EventIndex._Iterator.prototype={hasNext:function(){return this._hasNext
},next:function(){if(this._hasNext){var e=this._next;return this._findNext(),e}return null
},_findNext:function(){for(var e=this._unit;++this._currentIndex<this._maxIndex;){var t=this._events.elementAt(this._currentIndex);
if(e.compare(t.getStart(),this._endDate)<0&&e.compare(t.getEnd(),this._startDate)>0)return this._next=t,this._hasNext=!0,void 0
}this._next=null,this._hasNext=!1}},SimileAjax.EventIndex._ReverseIterator=function(e,t,i,r){this._events=e,this._startDate=t,this._endDate=i,this._unit=r,this._minIndex=e.find(function(e){return r.compare(e.getStart(),t)
}),this._minIndex-1>=0&&(this._minIndex=this._events.elementAt(this._minIndex-1)._earliestOverlapIndex),this._maxIndex=e.find(function(e){return r.compare(e.getStart(),i)
}),this._currentIndex=this._maxIndex,this._hasNext=!1,this._next=null,this._findNext()
},SimileAjax.EventIndex._ReverseIterator.prototype={hasNext:function(){return this._hasNext
},next:function(){if(this._hasNext){var e=this._next;return this._findNext(),e}return null
},_findNext:function(){for(var e=this._unit;--this._currentIndex>=this._minIndex;){var t=this._events.elementAt(this._currentIndex);
if(e.compare(t.getStart(),this._endDate)<0&&e.compare(t.getEnd(),this._startDate)>0)return this._next=t,this._hasNext=!0,void 0
}this._next=null,this._hasNext=!1}},SimileAjax.EventIndex._AllIterator=function(e){this._events=e,this._index=0
},SimileAjax.EventIndex._AllIterator.prototype={hasNext:function(){return this._index<this._events.length()
},next:function(){return this._index<this._events.length()?this._events.elementAt(this._index++):null
}},SimileAjax.DateTime=new Object,SimileAjax.DateTime.MILLISECOND=0,SimileAjax.DateTime.SECOND=1,SimileAjax.DateTime.MINUTE=2,SimileAjax.DateTime.HOUR=3,SimileAjax.DateTime.DAY=4,SimileAjax.DateTime.WEEK=5,SimileAjax.DateTime.MONTH=6,SimileAjax.DateTime.YEAR=7,SimileAjax.DateTime.DECADE=8,SimileAjax.DateTime.CENTURY=9,SimileAjax.DateTime.MILLENNIUM=10,SimileAjax.DateTime.EPOCH=-1,SimileAjax.DateTime.ERA=-2,SimileAjax.DateTime.gregorianUnitLengths=[],function(){var e=SimileAjax.DateTime,t=e.gregorianUnitLengths;
t[e.MILLISECOND]=1,t[e.SECOND]=1e3,t[e.MINUTE]=60*t[e.SECOND],t[e.HOUR]=60*t[e.MINUTE],t[e.DAY]=24*t[e.HOUR],t[e.WEEK]=7*t[e.DAY],t[e.MONTH]=31*t[e.DAY],t[e.YEAR]=365*t[e.DAY],t[e.DECADE]=10*t[e.YEAR],t[e.CENTURY]=100*t[e.YEAR],t[e.MILLENNIUM]=1e3*t[e.YEAR]
}(),SimileAjax.DateTime._dateRegexp=new RegExp("^(-?)([0-9]{4})("+["(-?([0-9]{2})(-?([0-9]{2}))?)","(-?([0-9]{3}))","(-?W([0-9]{2})(-?([1-7]))?)"].join("|")+")?$"),SimileAjax.DateTime._timezoneRegexp=new RegExp("Z|(([-+])([0-9]{2})(:?([0-9]{2}))?)$"),SimileAjax.DateTime._timeRegexp=new RegExp("^([0-9]{2})(:?([0-9]{2})(:?([0-9]{2})(.([0-9]+))?)?)?$"),SimileAjax.DateTime.setIso8601Date=function(e,t){var i=t.match(SimileAjax.DateTime._dateRegexp);
if(!i)throw new Error("Invalid date string: "+t);var r="-"==i[1]?-1:1,n=r*i[2],a=i[5],o=i[7],l=i[9],s=i[11],u=i[13]?i[13]:1;
if(e.setUTCFullYear(n),l)e.setUTCMonth(0),e.setUTCDate(Number(l));else if(s){e.setUTCMonth(0),e.setUTCDate(1);
var d=e.getUTCDay(),c=d?d:7,m=Number(u)+7*Number(s);4>=c?e.setUTCDate(m+1-c):e.setUTCDate(m+8-c)
}else a&&(e.setUTCDate(1),e.setUTCMonth(a-1)),o&&e.setUTCDate(o);return e},SimileAjax.DateTime.setIso8601Time=function(e,t){var i=t.match(SimileAjax.DateTime._timeRegexp);
if(!i)return SimileAjax.Debug.warn("Invalid time string: "+t),!1;var r=i[1],n=Number(i[3]?i[3]:0),a=i[5]?i[5]:0,o=i[7]?1e3*Number("0."+i[7]):0;
return e.setUTCHours(r),e.setUTCMinutes(n),e.setUTCSeconds(a),e.setUTCMilliseconds(o),e
},SimileAjax.DateTime.timezoneOffset=(new Date).getTimezoneOffset(),SimileAjax.DateTime.setIso8601=function(e,t){var i=null,r=-1==t.indexOf("T")?t.split(" "):t.split("T");
if(SimileAjax.DateTime.setIso8601Date(e,r[0]),2==r.length){var n=r[1].match(SimileAjax.DateTime._timezoneRegexp);
n&&("Z"==n[0]?i=0:(i=60*Number(n[3])+Number(n[5]),i*="-"==n[2]?1:-1),r[1]=r[1].substr(0,r[1].length-n[0].length)),SimileAjax.DateTime.setIso8601Time(e,r[1])
}return null==i&&(i=e.getTimezoneOffset()),e.setTime(e.getTime()+6e4*i),e},SimileAjax.DateTime.parseIso8601DateTime=function(e){try{return SimileAjax.DateTime.setIso8601(new Date(0),e)
}catch(t){return null}},SimileAjax.DateTime.parseGregorianDateTime=function(e){if(null==e)return null;
if(e instanceof Date)return e;var t=e.toString();if(t.length>0&&t.length<8){var i=t.indexOf(" ");
if(i>0){var r=parseInt(t.substr(0,i)),n=t.substr(i+1);"bc"==n.toLowerCase()&&(r=1-r)
}else var r=parseInt(t);var a=new Date(0);return a.setUTCFullYear(r),a}try{return new Date(Date.parse(t))
}catch(o){return null}},SimileAjax.DateTime.roundDownToInterval=function(e,t,i,r,n){var a=i*SimileAjax.DateTime.gregorianUnitLengths[SimileAjax.DateTime.HOUR],o=new Date(e.getTime()+a),l=function(e){e.setUTCMilliseconds(0),e.setUTCSeconds(0),e.setUTCMinutes(0),e.setUTCHours(0)
},s=function(e){l(e),e.setUTCDate(1),e.setUTCMonth(0)};switch(t){case SimileAjax.DateTime.MILLISECOND:var u=o.getUTCMilliseconds();
o.setUTCMilliseconds(u-u%r);break;case SimileAjax.DateTime.SECOND:o.setUTCMilliseconds(0);
var u=o.getUTCSeconds();o.setUTCSeconds(u-u%r);break;case SimileAjax.DateTime.MINUTE:o.setUTCMilliseconds(0),o.setUTCSeconds(0);
var u=o.getUTCMinutes();o.setTime(o.getTime()-u%r*SimileAjax.DateTime.gregorianUnitLengths[SimileAjax.DateTime.MINUTE]);
break;case SimileAjax.DateTime.HOUR:o.setUTCMilliseconds(0),o.setUTCSeconds(0),o.setUTCMinutes(0);
var u=o.getUTCHours();o.setUTCHours(u-u%r);break;case SimileAjax.DateTime.DAY:l(o);
break;case SimileAjax.DateTime.WEEK:l(o);var d=(o.getUTCDay()+7-n)%7;o.setTime(o.getTime()-d*SimileAjax.DateTime.gregorianUnitLengths[SimileAjax.DateTime.DAY]);
break;case SimileAjax.DateTime.MONTH:l(o),o.setUTCDate(1);var u=o.getUTCMonth();o.setUTCMonth(u-u%r);
break;case SimileAjax.DateTime.YEAR:s(o);var u=o.getUTCFullYear();o.setUTCFullYear(u-u%r);
break;case SimileAjax.DateTime.DECADE:s(o),o.setUTCFullYear(10*Math.floor(o.getUTCFullYear()/10));
break;case SimileAjax.DateTime.CENTURY:s(o),o.setUTCFullYear(100*Math.floor(o.getUTCFullYear()/100));
break;case SimileAjax.DateTime.MILLENNIUM:s(o),o.setUTCFullYear(1e3*Math.floor(o.getUTCFullYear()/1e3))
}e.setTime(o.getTime()-a)},SimileAjax.DateTime.roundUpToInterval=function(e,t,i,r,n){var a=e.getTime();
SimileAjax.DateTime.roundDownToInterval(e,t,i,r,n),e.getTime()<a&&e.setTime(e.getTime()+SimileAjax.DateTime.gregorianUnitLengths[t]*r)
},SimileAjax.DateTime.incrementByInterval=function(e,t,i){i="undefined"==typeof i?0:i;
var r=i*SimileAjax.DateTime.gregorianUnitLengths[SimileAjax.DateTime.HOUR],n=new Date(e.getTime()+r);
switch(t){case SimileAjax.DateTime.MILLISECOND:n.setTime(n.getTime()+1);break;case SimileAjax.DateTime.SECOND:n.setTime(n.getTime()+1e3);
break;case SimileAjax.DateTime.MINUTE:n.setTime(n.getTime()+SimileAjax.DateTime.gregorianUnitLengths[SimileAjax.DateTime.MINUTE]);
break;case SimileAjax.DateTime.HOUR:n.setTime(n.getTime()+SimileAjax.DateTime.gregorianUnitLengths[SimileAjax.DateTime.HOUR]);
break;case SimileAjax.DateTime.DAY:n.setUTCDate(n.getUTCDate()+1);break;case SimileAjax.DateTime.WEEK:n.setUTCDate(n.getUTCDate()+7);
break;case SimileAjax.DateTime.MONTH:n.setUTCMonth(n.getUTCMonth()+1);break;case SimileAjax.DateTime.YEAR:n.setUTCFullYear(n.getUTCFullYear()+1);
break;case SimileAjax.DateTime.DECADE:n.setUTCFullYear(n.getUTCFullYear()+10);break;
case SimileAjax.DateTime.CENTURY:n.setUTCFullYear(n.getUTCFullYear()+100);break;case SimileAjax.DateTime.MILLENNIUM:n.setUTCFullYear(n.getUTCFullYear()+1e3)
}e.setTime(n.getTime()-r)},SimileAjax.DateTime.removeTimeZoneOffset=function(e,t){return new Date(e.getTime()+t*SimileAjax.DateTime.gregorianUnitLengths[SimileAjax.DateTime.HOUR])
},SimileAjax.DateTime.getTimezone=function(){var e=(new Date).getTimezoneOffset();
return e/-60},SimileAjax.Debug={silent:!1},SimileAjax.Debug.log=function(e){var t;
t="console"in window&&"log"in window.console?function(e){console.log(e)}:function(e){SimileAjax.Debug.silent||alert(e)
},SimileAjax.Debug.log=t,t(e)},SimileAjax.Debug.warn=function(e){var t;t="console"in window&&"warn"in window.console?function(e){console.warn(e)
}:function(e){SimileAjax.Debug.silent||alert(e)},SimileAjax.Debug.warn=t,t(e)},SimileAjax.Debug.exception=function(e,t){var i,r=SimileAjax.parseURLParameters();
i="throw"==r.errors||"throw"==SimileAjax.params.errors?function(e){throw e}:"console"in window&&"error"in window.console?function(e,t){throw null!=t?console.error(t+" %o",e):console.error(e),e
}:function(e,t){throw SimileAjax.Debug.silent||alert("Caught exception: "+t+"\n\nDetails: "+("description"in e?e.description:e)),e
},SimileAjax.Debug.exception=i,i(e,t)},SimileAjax.Debug.objectToString=function(e){return SimileAjax.Debug._objectToString(e,"")
},SimileAjax.Debug._objectToString=function(e,t){var i=t+" ";if("object"==typeof e){var r="{";
for(n in e)r+=i+n+": "+SimileAjax.Debug._objectToString(e[n],i)+"\n";return r+=t+"}"
}if("array"==typeof e){for(var r="[",n=0;n<e.length;n++)r+=SimileAjax.Debug._objectToString(e[n],i)+"\n";
return r+=t+"]"}return e},SimileAjax.DOM=new Object,SimileAjax.DOM.registerEventWithObject=function(e,t,i,r){SimileAjax.DOM.registerEvent(e,t,function(e,t,n){return i[r].call(i,e,t,n)
})},SimileAjax.DOM.registerEvent=function(e,t,i){var r=function(t){if(t=t?t:event?event:null){var r=t.target?t.target:t.srcElement?t.srcElement:null;
return r&&(r=1==r.nodeType||9==r.nodeType?r:r.parentNode),i(e,t,r)}return!0};SimileAjax.Platform.browser.isIE?e.attachEvent("on"+t,r):e.addEventListener(t,r,!1)
},SimileAjax.DOM.getPageCoordinates=function(e){var t=0,i=0;1!=e.nodeType&&(e=e.parentNode);
for(var r=e;null!=r;)t+=r.offsetLeft,i+=r.offsetTop,r=r.offsetParent;for(var n=document.body;null!=e&&e!=n;)"scrollLeft"in e&&(t-=e.scrollLeft,i-=e.scrollTop),e=e.parentNode;
return{left:t,top:i}},SimileAjax.DOM.getSize=function(e){var t=this.getStyle(e,"width"),i=this.getStyle(e,"height");
return t.indexOf("px")>-1&&(t=t.replace("px","")),i.indexOf("px")>-1&&(i=i.replace("px","")),{w:t,h:i}
},SimileAjax.DOM.getStyle=function(e,t){if(e.currentStyle)var i=e.currentStyle[t];
else if(window.getComputedStyle)var i=document.defaultView.getComputedStyle(e,null).getPropertyValue(t);
else var i="";return i},SimileAjax.DOM.getEventRelativeCoordinates=function(e,t){if(SimileAjax.Platform.browser.isIE){if("mousewheel"==e.type){var i=SimileAjax.DOM.getPageCoordinates(t);
return{x:e.clientX-i.left,y:e.clientY-i.top}}return{x:e.offsetX,y:e.offsetY}}var i=SimileAjax.DOM.getPageCoordinates(t);
return"DOMMouseScroll"==e.type&&SimileAjax.Platform.browser.isFirefox&&2==SimileAjax.Platform.browser.majorVersion?{x:e.screenX-i.left,y:e.screenY-i.top}:{x:e.pageX-i.left,y:e.pageY-i.top}
},SimileAjax.DOM.getEventPageCoordinates=function(e){return SimileAjax.Platform.browser.isIE?{x:e.clientX+document.body.scrollLeft,y:e.clientY+document.body.scrollTop}:{x:e.pageX,y:e.pageY}
},SimileAjax.DOM.hittest=function(e,t,i){return SimileAjax.DOM._hittest(document.body,e,t,i)
},SimileAjax.DOM._hittest=function(e,t,i,r){var n=e.childNodes;e:for(var a=0;a<n.length;a++){for(var o=n[a],l=0;l<r.length;l++)if(o==r[l])continue e;
if(0==o.offsetWidth&&0==o.offsetHeight){var s=SimileAjax.DOM._hittest(o,t,i,r);if(s!=o)return s
}else{for(var u=0,d=0,c=o;c;)u+=c.offsetTop,d+=c.offsetLeft,c=c.offsetParent;if(t>=d&&i>=u&&t-d<o.offsetWidth&&i-u<o.offsetHeight)return SimileAjax.DOM._hittest(o,t,i,r);
if(1==o.nodeType&&"TR"==o.tagName){var m=SimileAjax.DOM._hittest(o,t,i,r);if(m!=o)return m
}}}return e},SimileAjax.DOM.cancelEvent=function(e){e.returnValue=!1,e.cancelBubble=!0,"preventDefault"in e&&e.preventDefault()
},SimileAjax.DOM.appendClassName=function(e,t){for(var i=e.className.split(" "),r=0;r<i.length;r++)if(i[r]==t)return;
i.push(t),e.className=i.join(" ")},SimileAjax.DOM.createInputElement=function(e){var t=document.createElement("div");
return t.innerHTML="<input type='"+e+"' />",t.firstChild},SimileAjax.DOM.createDOMFromTemplate=function(e){var t={};
return t.elmt=SimileAjax.DOM._createDOMFromTemplate(e,t,null),t},SimileAjax.DOM._createDOMFromTemplate=function(e,t,i){if(null==e)return null;
if("object"!=typeof e){var r=document.createTextNode(e);return null!=i&&i.appendChild(r),r
}var a=null;if("tag"in e){var o=e.tag;null!=i&&("tr"==o?a=i.insertRow(i.rows.length):"td"==o&&(a=i.insertCell(i.cells.length))),null==a&&(a="input"==o?SimileAjax.DOM.createInputElement(e.type):document.createElement(o),null!=i&&i.appendChild(a))
}else a=e.elmt,null!=i&&i.appendChild(a);for(var l in e){var s=e[l];if("field"==l)t[s]=a;
else if("className"==l)a.className=s;else if("id"==l)a.id=s;else if("title"==l)a.title=s;
else if("type"==l&&"input"==a.tagName);else if("style"==l)for(n in s){var u=s[n];
"float"==n&&(n=SimileAjax.Platform.browser.isIE?"styleFloat":"cssFloat"),a.style[n]=u
}else if("children"==l)for(var d=0;d<s.length;d++)SimileAjax.DOM._createDOMFromTemplate(s[d],t,a);
else"tag"!=l&&"elmt"!=l&&a.setAttribute(l,s)}return a},SimileAjax.DOM._cachedParent=null,SimileAjax.DOM.createElementFromString=function(e){return null==SimileAjax.DOM._cachedParent&&(SimileAjax.DOM._cachedParent=document.createElement("div")),SimileAjax.DOM._cachedParent.innerHTML=e,SimileAjax.DOM._cachedParent.firstChild
},SimileAjax.DOM.createDOMFromString=function(e,t,i){var r="string"==typeof e?document.createElement(e):e;
r.innerHTML=t;var n={elmt:r};return SimileAjax.DOM._processDOMChildrenConstructedFromString(n,r,null!=i?i:{}),n
},SimileAjax.DOM._processDOMConstructedFromString=function(e,t,i){var r=t.id;if(null!=r&&r.length>0){if(t.removeAttribute("id"),r in i){var n=t.parentNode;
return n.insertBefore(i[r],t),n.removeChild(t),e[r]=i[r],void 0}e[r]=t}t.hasChildNodes()&&SimileAjax.DOM._processDOMChildrenConstructedFromString(e,t,i)
},SimileAjax.DOM._processDOMChildrenConstructedFromString=function(e,t,i){for(var r=t.firstChild;null!=r;){var n=r.nextSibling;
1==r.nodeType&&SimileAjax.DOM._processDOMConstructedFromString(e,r,i),r=n}},SimileAjax.Graphics=new Object,SimileAjax.Graphics.pngIsTranslucent=!SimileAjax.Platform.browser.isIE||SimileAjax.Platform.browser.majorVersion>6,SimileAjax.Graphics._createTranslucentImage1=function(e,t){var i=document.createElement("img");
return i.setAttribute("src",e),null!=t&&(i.style.verticalAlign=t),i},SimileAjax.Graphics._createTranslucentImage2=function(e,t){var i=document.createElement("img");
return i.style.width="1px",i.style.height="1px",i.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+e+"', sizingMethod='image')",i.style.verticalAlign=null!=t?t:"middle",i
},SimileAjax.Graphics.createTranslucentImage=SimileAjax.Graphics.pngIsTranslucent?SimileAjax.Graphics._createTranslucentImage1:SimileAjax.Graphics._createTranslucentImage2,SimileAjax.Graphics._createTranslucentImageHTML1=function(e,t){return'<img src="'+e+'"'+(null!=t?' style="vertical-align: '+t+';"':"")+" />"
},SimileAjax.Graphics._createTranslucentImageHTML2=function(e,t){var i="width: 1px; height: 1px; filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+e+"', sizingMethod='image');"+(null!=t?" vertical-align: "+t+";":"");
return"<img src='"+e+"' style=\""+i+'" />'},SimileAjax.Graphics.createTranslucentImageHTML=SimileAjax.Graphics.pngIsTranslucent?SimileAjax.Graphics._createTranslucentImageHTML1:SimileAjax.Graphics._createTranslucentImageHTML2,SimileAjax.Graphics.setOpacity=function(e,t){if(SimileAjax.Platform.browser.isIE)e.style.filter="progid:DXImageTransform.Microsoft.Alpha(Style=0,Opacity="+t+")";
else{var i=(t/100).toString();e.style.opacity=i,e.style.MozOpacity=i}},SimileAjax.Graphics._bubbleMargins={top:33,bottom:42,left:33,right:40},SimileAjax.Graphics._arrowOffsets={top:0,bottom:9,left:1,right:8},SimileAjax.Graphics._bubblePadding=15,SimileAjax.Graphics._bubblePointOffset=6,SimileAjax.Graphics._halfArrowWidth=18,SimileAjax.Graphics.createBubbleForContentAndPoint=function(e,t,i,r,n){"number"!=typeof r&&(r=300),e.style.position="absolute",e.style.left="-5000px",e.style.top="0px",e.style.width=r+"px",document.body.appendChild(e),window.setTimeout(function(){var r=e.scrollWidth+10,a=e.scrollHeight+10,o=SimileAjax.Graphics.createBubbleForPoint(t,i,r,a,n);
document.body.removeChild(e),e.style.position="static",e.style.left="",e.style.top="",e.style.width=r+"px",o.content.appendChild(e)
},200)},SimileAjax.Graphics.createBubbleForPoint=function(e,t,i,r,n){function a(){return"number"==typeof window.innerHeight?{w:window.innerWidth,h:window.innerHeight}:document.documentElement&&document.documentElement.clientHeight?{w:document.documentElement.clientWidth,h:document.documentElement.clientHeight}:document.body&&document.body.clientHeight?{w:document.body.clientWidth,h:document.body.clientHeight}:void 0
}var o=function(){l._closed||(document.body.removeChild(l._div),l._doc=null,l._div=null,l._content=null,l._closed=!0)
},l={_closed:!1},s=a(),u=s.w,d=s.h,c=SimileAjax.Graphics._bubbleMargins;i=parseInt(i,10),r=parseInt(r,10);
var m=c.left+i+c.right,h=c.top+r+c.bottom,f=SimileAjax.Graphics.pngIsTranslucent,p=SimileAjax.urlPrefix,y=function(e,t,i,r){e.style.position="absolute",e.style.width=i+"px",e.style.height=r+"px",f?e.style.background="url("+t+")":e.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+t+"', sizingMethod='crop')"
},g=document.createElement("div");g.style.width=m+"px",g.style.height=h+"px",g.style.position="absolute",g.style.zIndex=1e3;
var x=SimileAjax.WindowManager.pushLayer(o,!0,g);l._div=g,l.close=function(){SimileAjax.WindowManager.popLayer(x)
};var j=document.createElement("div");j.style.width="100%",j.style.height="100%",j.style.position="relative",g.appendChild(j);
var v=function(e,t,i,r,n){var a=document.createElement("div");a.style.left=t+"px",a.style.top=i+"px",y(a,e,r,n),j.appendChild(a)
};v(p+"images/bubble-top-left.png",0,0,c.left,c.top),v(p+"images/bubble-top.png",c.left,0,i,c.top),v(p+"images/bubble-top-right.png",c.left+i,0,c.right,c.top),v(p+"images/bubble-left.png",0,c.top,c.left,r),v(p+"images/bubble-right.png",c.left+i,c.top,c.right,r),v(p+"images/bubble-bottom-left.png",0,c.top+r,c.left,c.bottom),v(p+"images/bubble-bottom.png",c.left,c.top+r,i,c.bottom),v(p+"images/bubble-bottom-right.png",c.left+i,c.top+r,c.right,c.bottom);
var S=document.createElement("div");S.style.left=m-c.right+SimileAjax.Graphics._bubblePadding-16-2+"px",S.style.top=c.top-SimileAjax.Graphics._bubblePadding+1+"px",S.style.cursor="pointer",y(S,p+"images/close-button.png",16,16),SimileAjax.WindowManager.registerEventWithObject(S,"click",l,"close"),j.appendChild(S);
var A=document.createElement("div");return A.style.position="absolute",A.style.left=c.left+"px",A.style.top=c.top+"px",A.style.width=i+"px",A.style.height=r+"px",A.style.overflow="auto",A.style.background="white",j.appendChild(A),l.content=A,function(){if(e-SimileAjax.Graphics._halfArrowWidth-SimileAjax.Graphics._bubblePadding>0&&e+SimileAjax.Graphics._halfArrowWidth+SimileAjax.Graphics._bubblePadding<u){var a=e-Math.round(i/2)-c.left;
if(a=u/2>e?Math.max(a,-(c.left-SimileAjax.Graphics._bubblePadding)):Math.min(a,u+(c.right-SimileAjax.Graphics._bubblePadding)-m),n&&"top"==n||!n&&t-SimileAjax.Graphics._bubblePointOffset-h>0){var o=document.createElement("div");
return o.style.left=e-SimileAjax.Graphics._halfArrowWidth-a+"px",o.style.top=c.top+r+"px",y(o,p+"images/bubble-bottom-arrow.png",37,c.bottom),j.appendChild(o),g.style.left=a+"px",g.style.top=t-SimileAjax.Graphics._bubblePointOffset-h+SimileAjax.Graphics._arrowOffsets.bottom+"px",void 0
}if(n&&"bottom"==n||!n&&t+SimileAjax.Graphics._bubblePointOffset+h<d){var o=document.createElement("div");
return o.style.left=e-SimileAjax.Graphics._halfArrowWidth-a+"px",o.style.top="0px",y(o,p+"images/bubble-top-arrow.png",37,c.top),j.appendChild(o),g.style.left=a+"px",g.style.top=t+SimileAjax.Graphics._bubblePointOffset-SimileAjax.Graphics._arrowOffsets.top+"px",void 0
}}var l=t-Math.round(r/2)-c.top;if(l=d/2>t?Math.max(l,-(c.top-SimileAjax.Graphics._bubblePadding)):Math.min(l,d+(c.bottom-SimileAjax.Graphics._bubblePadding)-h),n&&"left"==n||!n&&e-SimileAjax.Graphics._bubblePointOffset-m>0){var o=document.createElement("div");
o.style.left=c.left+i+"px",o.style.top=t-SimileAjax.Graphics._halfArrowWidth-l+"px",y(o,p+"images/bubble-right-arrow.png",c.right,37),j.appendChild(o),g.style.left=e-SimileAjax.Graphics._bubblePointOffset-m+SimileAjax.Graphics._arrowOffsets.right+"px",g.style.top=l+"px"
}else if(n&&"right"==n||!n&&e-SimileAjax.Graphics._bubblePointOffset-m<u){var o=document.createElement("div");
o.style.left="0px",o.style.top=t-SimileAjax.Graphics._halfArrowWidth-l+"px",y(o,p+"images/bubble-left-arrow.png",c.left,37),j.appendChild(o),g.style.left=e+SimileAjax.Graphics._bubblePointOffset-SimileAjax.Graphics._arrowOffsets.left+"px",g.style.top=l+"px"
}}(),document.body.appendChild(g),l},SimileAjax.Graphics.createMessageBubble=function(e){var t=e.createElement("div");
if(SimileAjax.Graphics.pngIsTranslucent){var i=e.createElement("div");i.style.height="33px",i.style.background="url("+SimileAjax.urlPrefix+"images/message-top-left.png) top left no-repeat",i.style.paddingLeft="44px",t.appendChild(i);
var r=e.createElement("div");r.style.height="33px",r.style.background="url("+SimileAjax.urlPrefix+"images/message-top-right.png) top right no-repeat",i.appendChild(r);
var n=e.createElement("div");n.style.background="url("+SimileAjax.urlPrefix+"images/message-left.png) top left repeat-y",n.style.paddingLeft="44px",t.appendChild(n);
var a=e.createElement("div");a.style.background="url("+SimileAjax.urlPrefix+"images/message-right.png) top right repeat-y",a.style.paddingRight="44px",n.appendChild(a);
var o=e.createElement("div");a.appendChild(o);var l=e.createElement("div");l.style.height="55px",l.style.background="url("+SimileAjax.urlPrefix+"images/message-bottom-left.png) bottom left no-repeat",l.style.paddingLeft="44px",t.appendChild(l);
var s=e.createElement("div");s.style.height="55px",s.style.background="url("+SimileAjax.urlPrefix+"images/message-bottom-right.png) bottom right no-repeat",l.appendChild(s)
}else{t.style.border="2px solid #7777AA",t.style.padding="20px",t.style.background="white",SimileAjax.Graphics.setOpacity(t,90);
var o=e.createElement("div");t.appendChild(o)}return{containerDiv:t,contentDiv:o}
},SimileAjax.Graphics.createAnimation=function(e,t,i,r,n){return new SimileAjax.Graphics._Animation(e,t,i,r,n)
},SimileAjax.Graphics._Animation=function(e,t,i,r,n){this.f=e,this.cont="function"==typeof n?n:function(){},this.from=t,this.to=i,this.current=t,this.duration=r,this.start=(new Date).getTime(),this.timePassed=0
},SimileAjax.Graphics._Animation.prototype.run=function(){var e=this;window.setTimeout(function(){e.step()
},50)},SimileAjax.Graphics._Animation.prototype.step=function(){this.timePassed+=50;
var e=this.timePassed/this.duration,t=-Math.cos(e*Math.PI)/2+.5,i=t*(this.to-this.from)+this.from;
try{this.f(i,i-this.current)}catch(r){}this.current=i,this.timePassed<this.duration?this.run():(this.f(this.to,0),this.cont())
},SimileAjax.Graphics.createStructuredDataCopyButton=function(e,t,i,r){var n=document.createElement("div");
n.style.position="relative",n.style.display="inline",n.style.width=t+"px",n.style.height=i+"px",n.style.overflow="hidden",n.style.margin="2px",SimileAjax.Graphics.pngIsTranslucent?n.style.background="url("+e+") no-repeat":n.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+e+"', sizingMethod='image')";
var a;a=SimileAjax.Platform.browser.isIE?"filter:alpha(opacity=0)":"opacity: 0",n.innerHTML="<textarea rows='1' autocomplete='off' value='none' style='"+a+"' />";
var o=n.firstChild;return o.style.width=t+"px",o.style.height=i+"px",o.onmousedown=function(e){e=e?e:event?event:null,2==e.button&&(o.value=r(),o.select())
},n},SimileAjax.Graphics.getFontRenderingContext=function(e,t){return new SimileAjax.Graphics._FontRenderingContext(e,t)
},SimileAjax.Graphics._FontRenderingContext=function(e,t){this._elmt=e,this._elmt.style.visibility="hidden","string"==typeof t?this._elmt.style.width=t:"number"==typeof t&&(this._elmt.style.width=t+"px")
},SimileAjax.Graphics._FontRenderingContext.prototype.dispose=function(){this._elmt=null
},SimileAjax.Graphics._FontRenderingContext.prototype.update=function(){this._elmt.innerHTML="A",this._lineHeight=this._elmt.offsetHeight
},SimileAjax.Graphics._FontRenderingContext.prototype.computeSize=function(e){return this._elmt.innerHTML=e,{width:this._elmt.offsetWidth,height:this._elmt.offsetHeight}
},SimileAjax.Graphics._FontRenderingContext.prototype.getLineHeight=function(){return this._lineHeight
},SimileAjax.History={maxHistoryLength:10,historyFile:"__history__.html",enabled:!0,_initialized:!1,_listeners:new SimileAjax.ListenerQueue,_actions:[],_baseIndex:0,_currentIndex:0,_plainDocumentTitle:document.title},SimileAjax.History.formatHistoryEntryTitle=function(e){return SimileAjax.History._plainDocumentTitle+" {"+e+"}"
},SimileAjax.History.initialize=function(){if(!SimileAjax.History._initialized){if(SimileAjax.History.enabled){var e=document.createElement("iframe");
e.id="simile-ajax-history",e.style.position="absolute",e.style.width="10px",e.style.height="10px",e.style.top="0px",e.style.left="0px",e.style.visibility="hidden",e.src=SimileAjax.History.historyFile+"?0",document.body.appendChild(e),SimileAjax.DOM.registerEvent(e,"load",SimileAjax.History._handleIFrameOnLoad),SimileAjax.History._iframe=e
}SimileAjax.History._initialized=!0}},SimileAjax.History.addListener=function(e){SimileAjax.History.initialize(),SimileAjax.History._listeners.add(e)
},SimileAjax.History.removeListener=function(e){SimileAjax.History.initialize(),SimileAjax.History._listeners.remove(e)
},SimileAjax.History.addAction=function(e){SimileAjax.History.initialize(),SimileAjax.History._listeners.fire("onBeforePerform",[e]),window.setTimeout(function(){try{if(e.perform(),SimileAjax.History._listeners.fire("onAfterPerform",[e]),SimileAjax.History.enabled){SimileAjax.History._actions=SimileAjax.History._actions.slice(0,SimileAjax.History._currentIndex-SimileAjax.History._baseIndex),SimileAjax.History._actions.push(e),SimileAjax.History._currentIndex++;
var t=SimileAjax.History._actions.length-SimileAjax.History.maxHistoryLength;t>0&&(SimileAjax.History._actions=SimileAjax.History._actions.slice(t),SimileAjax.History._baseIndex+=t);
try{SimileAjax.History._iframe.contentWindow.location.search="?"+SimileAjax.History._currentIndex
}catch(i){var r=SimileAjax.History.formatHistoryEntryTitle(e.label);document.title=r
}}}catch(i){SimileAjax.Debug.exception(i,"Error adding action {"+e.label+"} to history")
}},0)},SimileAjax.History.addLengthyAction=function(e,t,i){SimileAjax.History.addAction({perform:e,undo:t,label:i,uiLayer:SimileAjax.WindowManager.getBaseLayer(),lengthy:!0})
},SimileAjax.History._handleIFrameOnLoad=function(){try{var e=SimileAjax.History._iframe.contentWindow.location.search,t=0==e.length?0:Math.max(0,parseInt(e.substr(1))),i=function(){var e=t-SimileAjax.History._currentIndex;
SimileAjax.History._currentIndex+=e,SimileAjax.History._baseIndex+=e,SimileAjax.History._iframe.contentWindow.location.search="?"+t
};if(t<SimileAjax.History._currentIndex)SimileAjax.History._listeners.fire("onBeforeUndoSeveral",[]),window.setTimeout(function(){for(;SimileAjax.History._currentIndex>t&&SimileAjax.History._currentIndex>SimileAjax.History._baseIndex;){SimileAjax.History._currentIndex--;
var e=SimileAjax.History._actions[SimileAjax.History._currentIndex-SimileAjax.History._baseIndex];
try{e.undo()}catch(r){SimileAjax.Debug.exception(r,"History: Failed to undo action {"+e.label+"}")
}}SimileAjax.History._listeners.fire("onAfterUndoSeveral",[]),i()},0);else if(t>SimileAjax.History._currentIndex)SimileAjax.History._listeners.fire("onBeforeRedoSeveral",[]),window.setTimeout(function(){for(;SimileAjax.History._currentIndex<t&&SimileAjax.History._currentIndex-SimileAjax.History._baseIndex<SimileAjax.History._actions.length;){var e=SimileAjax.History._actions[SimileAjax.History._currentIndex-SimileAjax.History._baseIndex];
try{e.perform()}catch(r){SimileAjax.Debug.exception(r,"History: Failed to redo action {"+e.label+"}")
}SimileAjax.History._currentIndex++}SimileAjax.History._listeners.fire("onAfterRedoSeveral",[]),i()
},0);else{var r=SimileAjax.History._currentIndex-SimileAjax.History._baseIndex-1,n=r>=0&&r<SimileAjax.History._actions.length?SimileAjax.History.formatHistoryEntryTitle(SimileAjax.History._actions[r].label):SimileAjax.History._plainDocumentTitle;
SimileAjax.History._iframe.contentWindow.document.title=n,document.title=n}}catch(a){}},SimileAjax.History.getNextUndoAction=function(){try{var e=SimileAjax.History._currentIndex-SimileAjax.History._baseIndex-1;
return SimileAjax.History._actions[e]}catch(t){return null}},SimileAjax.History.getNextRedoAction=function(){try{var e=SimileAjax.History._currentIndex-SimileAjax.History._baseIndex;
return SimileAjax.History._actions[e]}catch(t){return null}},SimileAjax.HTML=new Object,SimileAjax.HTML._e2uHash={},function(){var e=SimileAjax.HTML._e2uHash;
e.nbsp=" [space]",e.iexcl="¡",e.cent="¢",e.pound="£",e.curren="¤",e.yen="¥",e.brvbar="¦",e.sect="§",e.uml="¨",e.copy="©",e.ordf="ª",e.laquo="«",e.not="¬",e.shy="­",e.reg="®",e.macr="¯",e.deg="°",e.plusmn="±",e.sup2="²",e.sup3="³",e.acute="´",e.micro="µ",e.para="¶",e.middot="·",e.cedil="¸",e.sup1="¹",e.ordm="º",e.raquo="»",e.frac14="¼",e.frac12="½",e.frac34="¾",e.iquest="¿",e.Agrave="À",e.Aacute="Á",e.Acirc="Â",e.Atilde="Ã",e.Auml="Ä",e.Aring="Å",e.AElig="Æ",e.Ccedil="Ç",e.Egrave="È",e.Eacute="É",e.Ecirc="Ê",e.Euml="Ë",e.Igrave="Ì",e.Iacute="Í",e.Icirc="Î",e.Iuml="Ï",e.ETH="Ð",e.Ntilde="Ñ",e.Ograve="Ò",e.Oacute="Ó",e.Ocirc="Ô",e.Otilde="Õ",e.Ouml="Ö",e.times="×",e.Oslash="Ø",e.Ugrave="Ù",e.Uacute="Ú",e.Ucirc="Û",e.Uuml="Ü",e.Yacute="Ý",e.THORN="Þ",e.szlig="ß",e.agrave="à",e.aacute="á",e.acirc="â",e.atilde="ã",e.auml="ä",e.aring="å",e.aelig="æ",e.ccedil="ç",e.egrave="è",e.eacute="é",e.ecirc="ê",e.euml="ë",e.igrave="ì",e.iacute="í",e.icirc="î",e.iuml="ï",e.eth="ð",e.ntilde="ñ",e.ograve="ò",e.oacute="ó",e.ocirc="ô",e.otilde="õ",e.ouml="ö",e.divide="÷",e.oslash="ø",e.ugrave="ù",e.uacute="ú",e.ucirc="û",e.uuml="ü",e.yacute="ý",e.thorn="þ",e.yuml="ÿ",e.quot='"',e.amp="&",e.lt="<",e.gt=">",e.OElig="",e.oelig="œ",e.Scaron="Š",e.scaron="š",e.Yuml="Ÿ",e.circ="ˆ",e.tilde="˜",e.ensp=" ",e.emsp=" ",e.thinsp=" ",e.zwnj="‌",e.zwj="‍",e.lrm="‎",e.rlm="‏",e.ndash="–",e.mdash="—",e.lsquo="‘",e.rsquo="’",e.sbquo="‚",e.ldquo="“",e.rdquo="”",e.bdquo="„",e.dagger="†",e.Dagger="‡",e.permil="‰",e.lsaquo="‹",e.rsaquo="›",e.euro="€",e.fnof="ƒ",e.Alpha="Α",e.Beta="Β",e.Gamma="Γ",e.Delta="Δ",e.Epsilon="Ε",e.Zeta="Ζ",e.Eta="Η",e.Theta="Θ",e.Iota="Ι",e.Kappa="Κ",e.Lambda="Λ",e.Mu="Μ",e.Nu="Ν",e.Xi="Ξ",e.Omicron="Ο",e.Pi="Π",e.Rho="Ρ",e.Sigma="Σ",e.Tau="Τ",e.Upsilon="Υ",e.Phi="Φ",e.Chi="Χ",e.Psi="Ψ",e.Omega="Ω",e.alpha="α",e.beta="β",e.gamma="γ",e.delta="δ",e.epsilon="ε",e.zeta="ζ",e.eta="η",e.theta="θ",e.iota="ι",e.kappa="κ",e.lambda="λ",e.mu="μ",e.nu="ν",e.xi="ξ",e.omicron="ο",e.pi="π",e.rho="ρ",e.sigmaf="ς",e.sigma="σ",e.tau="τ",e.upsilon="υ",e.phi="φ",e.chi="χ",e.psi="ψ",e.omega="ω",e.thetasym="ϑ",e.upsih="ϒ",e.piv="ϖ",e.bull="•",e.hellip="…",e.prime="′",e.Prime="″",e.oline="‾",e.frasl="⁄",e.weierp="℘",e.image="ℑ",e.real="ℜ",e.trade="™",e.alefsym="ℵ",e.larr="←",e.uarr="↑",e.rarr="→",e.darr="↓",e.harr="↔",e.crarr="↵",e.lArr="⇐",e.uArr="⇑",e.rArr="⇒",e.dArr="⇓",e.hArr="⇔",e.forall="∀",e.part="∂",e.exist="∃",e.empty="∅",e.nabla="∇",e.isin="∈",e.notin="∉",e.ni="∋",e.prod="∏",e.sum="∑",e.minus="−",e.lowast="∗",e.radic="√",e.prop="∝",e.infin="∞",e.ang="∠",e.and="∧",e.or="∨",e.cap="∩",e.cup="∪",e["int"]="∫",e.there4="∴",e.sim="∼",e.cong="≅",e.asymp="≈",e.ne="≠",e.equiv="≡",e.le="≤",e.ge="≥",e.sub="⊂",e.sup="⊃",e.nsub="⊄",e.sube="⊆",e.supe="⊇",e.oplus="⊕",e.otimes="⊗",e.perp="⊥",e.sdot="⋅",e.lceil="⌈",e.rceil="⌉",e.lfloor="⌊",e.rfloor="⌋",e.lang="〈",e.rang="〉",e.loz="◊",e.spades="♠",e.clubs="♣",e.hearts="♥",e.diams="♦"
}(),SimileAjax.HTML.deEntify=function(e){for(var t=SimileAjax.HTML._e2uHash,i=/&(\w+?);/;i.test(e);){var r=e.match(i);
e=e.replace(i,t[r[1]])}return e},SimileAjax.JSON=new Object,function(){var m={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},s={array:function(e){var t,i,r,n,a=["["],o=e.length;
for(r=0;o>r;r+=1)n=e[r],i=s[typeof n],i&&(n=i(n),"string"==typeof n&&(t&&(a[a.length]=","),a[a.length]=n,t=!0));
return a[a.length]="]",a.join("")},"boolean":function(e){return String(e)},"null":function(){return"null"
},number:function(e){return isFinite(e)?String(e):"null"},object:function(e){if(e){if(e instanceof Array)return s.array(e);
var t,i,r,n,a=["{"];for(r in e)n=e[r],i=s[typeof n],i&&(n=i(n),"string"==typeof n&&(t&&(a[a.length]=","),a.push(s.string(r),":",n),t=!0));
return a[a.length]="}",a.join("")}return"null"},string:function(e){return/["\\\x00-\x1f]/.test(e)&&(e=e.replace(/([\x00-\x1f\\"])/g,function(e,t){var i=m[t];
return i?i:(i=t.charCodeAt(),"\\u00"+Math.floor(i/16).toString(16)+(i%16).toString(16))
})),'"'+e+'"'}};SimileAjax.JSON.toJSONString=function(e){return e instanceof Object?s.object(e):e instanceof Array?s.array(e):e.toString()
},SimileAjax.JSON.parseJSON=function(){try{return!/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(this.replace(/"(\\.|[^"\\])*"/g,""))&&eval("("+this+")")
}catch(e){return!1}}}(),String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")
},String.prototype.startsWith=function(e){return this.length>=e.length&&this.substr(0,e.length)==e
},String.prototype.endsWith=function(e){return this.length>=e.length&&this.substr(this.length-e.length)==e
},String.substitute=function(e,t){for(var i="",r=0;r<e.length-1;){var n=e.indexOf("%",r);
if(0>n||n==e.length-1)break;if(n>r&&"\\"==e.charAt(n-1))i+=e.substring(r,n-1)+"%",r=n+1;
else{var a=parseInt(e.charAt(n+1));i+=isNaN(a)||a>=t.length?e.substring(r,n+2):e.substring(r,n)+t[a].toString(),r=n+2
}}return r<e.length&&(i+=e.substring(r)),i},SimileAjax.NativeDateUnit=new Object,SimileAjax.NativeDateUnit.makeDefaultValue=function(){return new Date
},SimileAjax.NativeDateUnit.cloneValue=function(e){return new Date(e.getTime())},SimileAjax.NativeDateUnit.getParser=function(e){return"string"==typeof e&&(e=e.toLowerCase()),"iso8601"==e||"iso 8601"==e?SimileAjax.DateTime.parseIso8601DateTime:SimileAjax.DateTime.parseGregorianDateTime
},SimileAjax.NativeDateUnit.parseFromObject=function(e){return SimileAjax.DateTime.parseGregorianDateTime(e)
},SimileAjax.NativeDateUnit.toNumber=function(e){return e.getTime()},SimileAjax.NativeDateUnit.fromNumber=function(e){return new Date(e)
},SimileAjax.NativeDateUnit.compare=function(e,t){var i,r;return i="object"==typeof e?e.getTime():Number(e),r="object"==typeof t?t.getTime():Number(t),i-r
},SimileAjax.NativeDateUnit.earlier=function(e,t){return SimileAjax.NativeDateUnit.compare(e,t)<0?e:t
},SimileAjax.NativeDateUnit.later=function(e,t){return SimileAjax.NativeDateUnit.compare(e,t)>0?e:t
},SimileAjax.NativeDateUnit.change=function(e,t){return new Date(e.getTime()+t)},SimileAjax.WindowManager={_initialized:!1,_listeners:[],_draggedElement:null,_draggedElementCallback:null,_dropTargetHighlightElement:null,_lastCoords:null,_ghostCoords:null,_draggingMode:"",_dragging:!1,_layers:[]},SimileAjax.WindowManager.initialize=function(){SimileAjax.WindowManager._initialized||(SimileAjax.DOM.registerEvent(document.body,"mousedown",SimileAjax.WindowManager._onBodyMouseDown),SimileAjax.DOM.registerEvent(document.body,"mousemove",SimileAjax.WindowManager._onBodyMouseMove),SimileAjax.DOM.registerEvent(document.body,"mouseup",SimileAjax.WindowManager._onBodyMouseUp),SimileAjax.DOM.registerEvent(document,"keydown",SimileAjax.WindowManager._onBodyKeyDown),SimileAjax.DOM.registerEvent(document,"keyup",SimileAjax.WindowManager._onBodyKeyUp),SimileAjax.WindowManager._layers.push({index:0}),SimileAjax.WindowManager._historyListener={onBeforeUndoSeveral:function(){},onAfterUndoSeveral:function(){},onBeforeUndo:function(){},onAfterUndo:function(){},onBeforeRedoSeveral:function(){},onAfterRedoSeveral:function(){},onBeforeRedo:function(){},onAfterRedo:function(){}},SimileAjax.History.addListener(SimileAjax.WindowManager._historyListener),SimileAjax.WindowManager._initialized=!0)
},SimileAjax.WindowManager.getBaseLayer=function(){return SimileAjax.WindowManager.initialize(),SimileAjax.WindowManager._layers[0]
},SimileAjax.WindowManager.getHighestLayer=function(){return SimileAjax.WindowManager.initialize(),SimileAjax.WindowManager._layers[SimileAjax.WindowManager._layers.length-1]
},SimileAjax.WindowManager.registerEventWithObject=function(e,t,i,r,n){SimileAjax.WindowManager.registerEvent(e,t,function(e,t,n){return i[r].call(i,e,t,n)
},n)},SimileAjax.WindowManager.registerEvent=function(e,t,i,r){null==r&&(r=SimileAjax.WindowManager.getHighestLayer());
var n=function(e,t,n){if(SimileAjax.WindowManager._canProcessEventAtLayer(r)){SimileAjax.WindowManager._popToLayer(r.index);
try{i(e,t,n)}catch(a){SimileAjax.Debug.exception(a)}}return SimileAjax.DOM.cancelEvent(t),!1
};SimileAjax.DOM.registerEvent(e,t,n)},SimileAjax.WindowManager.pushLayer=function(e,t,i){var r={onPop:e,index:SimileAjax.WindowManager._layers.length,ephemeral:t,elmt:i};
return SimileAjax.WindowManager._layers.push(r),r},SimileAjax.WindowManager.popLayer=function(e){for(var t=1;t<SimileAjax.WindowManager._layers.length;t++)if(SimileAjax.WindowManager._layers[t]==e){SimileAjax.WindowManager._popToLayer(t-1);
break}},SimileAjax.WindowManager.popAllLayers=function(){SimileAjax.WindowManager._popToLayer(0)
},SimileAjax.WindowManager.registerForDragging=function(e,t,i){SimileAjax.WindowManager.registerEvent(e,"mousedown",function(e,i){SimileAjax.WindowManager._handleMouseDown(e,i,t)
},i)},SimileAjax.WindowManager._popToLayer=function(e){for(;e+1<SimileAjax.WindowManager._layers.length;)try{var t=SimileAjax.WindowManager._layers.pop();
null!=t.onPop&&t.onPop()}catch(i){}},SimileAjax.WindowManager._canProcessEventAtLayer=function(e){if(e.index==SimileAjax.WindowManager._layers.length-1)return!0;
for(var t=e.index+1;t<SimileAjax.WindowManager._layers.length;t++)if(!SimileAjax.WindowManager._layers[t].ephemeral)return!1;
return!0},SimileAjax.WindowManager.cancelPopups=function(e){for(var t=e?SimileAjax.DOM.getEventPageCoordinates(e):{x:-1,y:-1},i=SimileAjax.WindowManager._layers.length-1;i>0&&SimileAjax.WindowManager._layers[i].ephemeral;){var r=SimileAjax.WindowManager._layers[i];
if(null!=r.elmt){var n=r.elmt,a=SimileAjax.DOM.getPageCoordinates(n);if(t.x>=a.left&&t.x<a.left+n.offsetWidth&&t.y>=a.top&&t.y<a.top+n.offsetHeight)break
}i--}SimileAjax.WindowManager._popToLayer(i)},SimileAjax.WindowManager._onBodyMouseDown=function(e,t){"eventPhase"in t&&t.eventPhase!=t.BUBBLING_PHASE||SimileAjax.WindowManager.cancelPopups(t)
},SimileAjax.WindowManager._handleMouseDown=function(e,t,i){return SimileAjax.WindowManager._draggedElement=e,SimileAjax.WindowManager._draggedElementCallback=i,SimileAjax.WindowManager._lastCoords={x:t.clientX,y:t.clientY},SimileAjax.DOM.cancelEvent(t),!1
},SimileAjax.WindowManager._onBodyKeyDown=function(e,t){if(SimileAjax.WindowManager._dragging)if(27==t.keyCode)SimileAjax.WindowManager._cancelDragging();
else if((17==t.keyCode||16==t.keyCode)&&"copy"!=SimileAjax.WindowManager._draggingMode){SimileAjax.WindowManager._draggingMode="copy";
var i=SimileAjax.Graphics.createTranslucentImage(SimileAjax.urlPrefix+"images/copy.png");
i.style.position="absolute",i.style.left=SimileAjax.WindowManager._ghostCoords.left-16+"px",i.style.top=SimileAjax.WindowManager._ghostCoords.top+"px",document.body.appendChild(i),SimileAjax.WindowManager._draggingModeIndicatorElmt=i
}},SimileAjax.WindowManager._onBodyKeyUp=function(e,t){SimileAjax.WindowManager._dragging&&(17==t.keyCode||16==t.keyCode)&&(SimileAjax.WindowManager._draggingMode="",null!=SimileAjax.WindowManager._draggingModeIndicatorElmt&&(document.body.removeChild(SimileAjax.WindowManager._draggingModeIndicatorElmt),SimileAjax.WindowManager._draggingModeIndicatorElmt=null))
},SimileAjax.WindowManager._onBodyMouseMove=function(e,t,i){if(null!=SimileAjax.WindowManager._draggedElement){var r=SimileAjax.WindowManager._draggedElementCallback,n=SimileAjax.WindowManager._lastCoords,a=t.clientX-n.x,o=t.clientY-n.y;
if(SimileAjax.WindowManager._dragging)try{if(SimileAjax.WindowManager._lastCoords={x:t.clientX,y:t.clientY},"onDragBy"in r&&r.onDragBy(a,o),"_ghostElmt"in r){var l=r._ghostElmt;
if(SimileAjax.WindowManager._ghostCoords.left+=a,SimileAjax.WindowManager._ghostCoords.top+=o,l.style.left=SimileAjax.WindowManager._ghostCoords.left+"px",l.style.top=SimileAjax.WindowManager._ghostCoords.top+"px",null!=SimileAjax.WindowManager._draggingModeIndicatorElmt){var s=SimileAjax.WindowManager._draggingModeIndicatorElmt;
s.style.left=SimileAjax.WindowManager._ghostCoords.left-16+"px",s.style.top=SimileAjax.WindowManager._ghostCoords.top+"px"
}if("droppable"in r&&r.droppable){var u=SimileAjax.DOM.getEventPageCoordinates(t),i=SimileAjax.DOM.hittest(u.x,u.y,[SimileAjax.WindowManager._ghostElmt,SimileAjax.WindowManager._dropTargetHighlightElement]);
if(i=SimileAjax.WindowManager._findDropTarget(i),i!=SimileAjax.WindowManager._potentialDropTarget){null!=SimileAjax.WindowManager._dropTargetHighlightElement&&(document.body.removeChild(SimileAjax.WindowManager._dropTargetHighlightElement),SimileAjax.WindowManager._dropTargetHighlightElement=null,SimileAjax.WindowManager._potentialDropTarget=null);
var d=!1;if(null!=i&&("canDropOn"in r&&!r.canDropOn(i)||"canDrop"in i&&!i.canDrop(SimileAjax.WindowManager._draggedElement)||(d=!0)),d){var c=4,m=SimileAjax.DOM.getPageCoordinates(i),h=document.createElement("div");
h.style.border=c+"px solid yellow",h.style.backgroundColor="yellow",h.style.position="absolute",h.style.left=m.left+"px",h.style.top=m.top+"px",h.style.width=i.offsetWidth-2*c+"px",h.style.height=i.offsetHeight-2*c+"px",SimileAjax.Graphics.setOpacity(h,30),document.body.appendChild(h),SimileAjax.WindowManager._potentialDropTarget=i,SimileAjax.WindowManager._dropTargetHighlightElement=h
}}}}}catch(f){SimileAjax.Debug.exception("WindowManager: Error handling mouse move",f),SimileAjax.WindowManager._cancelDragging()
}else if(Math.abs(a)>5||Math.abs(o)>5)try{if("onDragStart"in r&&r.onDragStart(),"ghost"in r&&r.ghost){var p=SimileAjax.WindowManager._draggedElement;
SimileAjax.WindowManager._ghostCoords=SimileAjax.DOM.getPageCoordinates(p),SimileAjax.WindowManager._ghostCoords.left+=a,SimileAjax.WindowManager._ghostCoords.top+=o;
var l=p.cloneNode(!0);l.style.position="absolute",l.style.left=SimileAjax.WindowManager._ghostCoords.left+"px",l.style.top=SimileAjax.WindowManager._ghostCoords.top+"px",l.style.zIndex=1e3,SimileAjax.Graphics.setOpacity(l,50),document.body.appendChild(l),r._ghostElmt=l
}SimileAjax.WindowManager._dragging=!0,SimileAjax.WindowManager._lastCoords={x:t.clientX,y:t.clientY},document.body.focus()
}catch(f){SimileAjax.Debug.exception("WindowManager: Error handling mouse down",f),SimileAjax.WindowManager._cancelDragging()
}return SimileAjax.DOM.cancelEvent(t),!1}},SimileAjax.WindowManager._onBodyMouseUp=function(e,t,i){if(null!=SimileAjax.WindowManager._draggedElement){try{if(SimileAjax.WindowManager._dragging){var r=SimileAjax.WindowManager._draggedElementCallback;
if("onDragEnd"in r&&r.onDragEnd(),"droppable"in r&&r.droppable){var n=!1,i=SimileAjax.WindowManager._potentialDropTarget;
null!=i&&("canDropOn"in r&&!r.canDropOn(i)||"canDrop"in i&&!i.canDrop(SimileAjax.WindowManager._draggedElement)||("onDropOn"in r&&r.onDropOn(i),i.ondrop(SimileAjax.WindowManager._draggedElement,SimileAjax.WindowManager._draggingMode),n=!0))
}}}finally{SimileAjax.WindowManager._cancelDragging()}return SimileAjax.DOM.cancelEvent(t),!1
}},SimileAjax.WindowManager._cancelDragging=function(){var e=SimileAjax.WindowManager._draggedElementCallback;
if("_ghostElmt"in e){var t=e._ghostElmt;document.body.removeChild(t),delete e._ghostElmt
}null!=SimileAjax.WindowManager._dropTargetHighlightElement&&(document.body.removeChild(SimileAjax.WindowManager._dropTargetHighlightElement),SimileAjax.WindowManager._dropTargetHighlightElement=null),null!=SimileAjax.WindowManager._draggingModeIndicatorElmt&&(document.body.removeChild(SimileAjax.WindowManager._draggingModeIndicatorElmt),SimileAjax.WindowManager._draggingModeIndicatorElmt=null),SimileAjax.WindowManager._draggedElement=null,SimileAjax.WindowManager._draggedElementCallback=null,SimileAjax.WindowManager._potentialDropTarget=null,SimileAjax.WindowManager._dropTargetHighlightElement=null,SimileAjax.WindowManager._lastCoords=null,SimileAjax.WindowManager._ghostCoords=null,SimileAjax.WindowManager._draggingMode="",SimileAjax.WindowManager._dragging=!1
},SimileAjax.WindowManager._findDropTarget=function(e){for(;null!=e&&!("ondrop"in e&&"function"==typeof e.ondrop);)e=e.parentNode;
return e},SimileAjax.XmlHttp=new Object,SimileAjax.XmlHttp._onReadyStateChange=function(e,t,i){switch(e.readyState){case 4:try{0==e.status||200==e.status?i&&i(e):t&&t(e.statusText,e.status,e)
}catch(r){SimileAjax.Debug.exception("XmlHttp: Error handling onReadyStateChange",r)
}}},SimileAjax.XmlHttp._createRequest=function(){if(SimileAjax.Platform.browser.isIE)for(var e=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],t=0;t<e.length;t++)try{var i=e[t],r=function(){return new ActiveXObject(i)
},n=r();return SimileAjax.XmlHttp._createRequest=r,n}catch(a){}try{var r=function(){return new XMLHttpRequest
},n=r();return SimileAjax.XmlHttp._createRequest=r,n}catch(a){throw new Error("Failed to create an XMLHttpRequest object")
}},SimileAjax.XmlHttp.get=function(e,t,i){var r=SimileAjax.XmlHttp._createRequest();
r.open("GET",e,!0),r.onreadystatechange=function(){SimileAjax.XmlHttp._onReadyStateChange(r,t,i)
},r.send(null)},SimileAjax.XmlHttp.post=function(e,t,i,r){var n=SimileAjax.XmlHttp._createRequest();
n.open("POST",e,!0),n.onreadystatechange=function(){SimileAjax.XmlHttp._onReadyStateChange(n,i,r)
},n.send(t)},SimileAjax.XmlHttp._forceXML=function(e){try{e.overrideMimeType("text/xml")
}catch(t){e.setrequestheader("Content-Type","text/xml")}};