SimileAjax.DOM=new Object,SimileAjax.DOM.registerEventWithObject=function(e,t,i,r){SimileAjax.DOM.registerEvent(e,t,function(e,t,n){return i[r].call(i,e,t,n)
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
},SimileAjax.DOM._hittest=function(e,t,i,r){var n=e.childNodes;e:for(var l=0;l<n.length;l++){for(var a=n[l],o=0;o<r.length;o++)if(a==r[o])continue e;
if(0==a.offsetWidth&&0==a.offsetHeight){var s=SimileAjax.DOM._hittest(a,t,i,r);if(s!=a)return s
}else{for(var f=0,m=0,u=a;u;)f+=u.offsetTop,m+=u.offsetLeft,u=u.offsetParent;if(t>=m&&i>=f&&t-m<a.offsetWidth&&i-f<a.offsetHeight)return SimileAjax.DOM._hittest(a,t,i,r);
if(1==a.nodeType&&"TR"==a.tagName){var c=SimileAjax.DOM._hittest(a,t,i,r);if(c!=a)return c
}}}return e},SimileAjax.DOM.cancelEvent=function(e){e.returnValue=!1,e.cancelBubble=!0,"preventDefault"in e&&e.preventDefault()
},SimileAjax.DOM.appendClassName=function(e,t){for(var i=e.className.split(" "),r=0;r<i.length;r++)if(i[r]==t)return;
i.push(t),e.className=i.join(" ")},SimileAjax.DOM.createInputElement=function(e){var t=document.createElement("div");
return t.innerHTML="<input type='"+e+"' />",t.firstChild},SimileAjax.DOM.createDOMFromTemplate=function(e){var t={};
return t.elmt=SimileAjax.DOM._createDOMFromTemplate(e,t,null),t},SimileAjax.DOM._createDOMFromTemplate=function(e,t,i){if(null==e)return null;
if("object"!=typeof e){var r=document.createTextNode(e);return null!=i&&i.appendChild(r),r
}var l=null;if("tag"in e){var a=e.tag;null!=i&&("tr"==a?l=i.insertRow(i.rows.length):"td"==a&&(l=i.insertCell(i.cells.length))),null==l&&(l="input"==a?SimileAjax.DOM.createInputElement(e.type):document.createElement(a),null!=i&&i.appendChild(l))
}else l=e.elmt,null!=i&&i.appendChild(l);for(var o in e){var s=e[o];if("field"==o)t[s]=l;
else if("className"==o)l.className=s;else if("id"==o)l.id=s;else if("title"==o)l.title=s;
else if("type"==o&&"input"==l.tagName);else if("style"==o)for(n in s){var f=s[n];
"float"==n&&(n=SimileAjax.Platform.browser.isIE?"styleFloat":"cssFloat"),l.style[n]=f
}else if("children"==o)for(var m=0;m<s.length;m++)SimileAjax.DOM._createDOMFromTemplate(s[m],t,l);
else"tag"!=o&&"elmt"!=o&&l.setAttribute(o,s)}return l},SimileAjax.DOM._cachedParent=null,SimileAjax.DOM.createElementFromString=function(e){return null==SimileAjax.DOM._cachedParent&&(SimileAjax.DOM._cachedParent=document.createElement("div")),SimileAjax.DOM._cachedParent.innerHTML=e,SimileAjax.DOM._cachedParent.firstChild
},SimileAjax.DOM.createDOMFromString=function(e,t,i){var r="string"==typeof e?document.createElement(e):e;
r.innerHTML=t;var n={elmt:r};return SimileAjax.DOM._processDOMChildrenConstructedFromString(n,r,null!=i?i:{}),n
},SimileAjax.DOM._processDOMConstructedFromString=function(e,t,i){var r=t.id;if(null!=r&&r.length>0){if(t.removeAttribute("id"),r in i){var n=t.parentNode;
return n.insertBefore(i[r],t),n.removeChild(t),e[r]=i[r],void 0}e[r]=t}t.hasChildNodes()&&SimileAjax.DOM._processDOMChildrenConstructedFromString(e,t,i)
},SimileAjax.DOM._processDOMChildrenConstructedFromString=function(e,t,i){for(var r=t.firstChild;null!=r;){var n=r.nextSibling;
1==r.nodeType&&SimileAjax.DOM._processDOMConstructedFromString(e,r,i),r=n}};