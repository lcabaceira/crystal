Timeline.DefaultEventSource=function(e){this._events=e instanceof Object?e:new SimileAjax.EventIndex,this._listeners=[]
},Timeline.DefaultEventSource.prototype.addListener=function(e){this._listeners.push(e)
},Timeline.DefaultEventSource.prototype.removeListener=function(e){for(var t=0;t<this._listeners.length;t++)if(this._listeners[t]==e){this._listeners.splice(t,1);
break}},Timeline.DefaultEventSource.prototype.loadXML=function(e,t){for(var i=this._getBaseURL(t),n=e.documentElement.getAttribute("wiki-url"),r=e.documentElement.getAttribute("wiki-section"),l=e.documentElement.getAttribute("date-time-format"),s=this._events.getUnit().getParser(l),o=e.documentElement.firstChild,a=!1;null!=o;){if(1==o.nodeType){var u="";
null!=o.firstChild&&3==o.firstChild.nodeType&&(u=o.firstChild.nodeValue);var d=new Timeline.DefaultEventSource.Event(o.getAttribute("id"),s(o.getAttribute("start")),s(o.getAttribute("end")),s(o.getAttribute("latestStart")),s(o.getAttribute("earliestEnd")),"true"!=o.getAttribute("isDuration"),o.getAttribute("title"),u,this._resolveRelativeURL(o.getAttribute("image"),i),this._resolveRelativeURL(o.getAttribute("link"),i),this._resolveRelativeURL(o.getAttribute("icon"),i),o.getAttribute("color"),o.getAttribute("textColor"),o.getAttribute("classname"));
d._node=o,d.getProperty=function(e){return this._node.getAttribute(e)},d.setWikiInfo(n,r),this._events.add(d),a=!0
}o=o.nextSibling}a&&this._fire("onAddMany",[])},Timeline.DefaultEventSource.prototype.loadJSON=function(e,t){var i=this._getBaseURL(t),n=!1;
if(e&&e.events)for(var r=("wikiURL"in e?e.wikiURL:null),l=("wikiSection"in e?e.wikiSection:null),s=("dateTimeFormat"in e?e.dateTimeFormat:null),o=this._events.getUnit().getParser(s),a=0;a<e.events.length;a++){var u=e.events[a],d=new Timeline.DefaultEventSource.Event("id"in u?u.id:void 0,o(u.start),o(u.end),o(u.latestStart),o(u.earliestEnd),u.isDuration||!1,u.title,u.description,this._resolveRelativeURL(u.image,i),this._resolveRelativeURL(u.link,i),this._resolveRelativeURL(u.icon,i),u.color,u.textColor,u.classname);
d._obj=u,d.getProperty=function(e){return this._obj[e]},d.setWikiInfo(r,l),this._events.add(d),n=!0
}n&&this._fire("onAddMany",[])},Timeline.DefaultEventSource.prototype.loadSPARQL=function(e,t){var i=this._getBaseURL(t),n="iso8601",r=this._events.getUnit().getParser(n);
if(null!=e){for(var l=e.documentElement.firstChild;null!=l&&(1!=l.nodeType||"results"!=l.nodeName);)l=l.nextSibling;
var s=null,o=null;null!=l&&(s=l.getAttribute("wiki-url"),o=l.getAttribute("wiki-section"),l=l.firstChild);
for(var a=!1;null!=l;){if(1==l.nodeType){for(var u={},d=l.firstChild;null!=d;)1==d.nodeType&&null!=d.firstChild&&1==d.firstChild.nodeType&&null!=d.firstChild.firstChild&&3==d.firstChild.firstChild.nodeType&&(u[d.getAttribute("name")]=d.firstChild.firstChild.nodeValue),d=d.nextSibling;
null==u.start&&null!=u.date&&(u.start=u.date);var c=new Timeline.DefaultEventSource.Event(u.id,r(u.start),r(u.end),r(u.latestStart),r(u.earliestEnd),"true"!=u.isDuration,u.title,u.description,this._resolveRelativeURL(u.image,i),this._resolveRelativeURL(u.link,i),this._resolveRelativeURL(u.icon,i),u.color,u.textColor,u.classname);
c._bindings=u,c.getProperty=function(e){return this._bindings[e]},c.setWikiInfo(s,o),this._events.add(c),a=!0
}l=l.nextSibling}a&&this._fire("onAddMany",[])}},Timeline.DefaultEventSource.prototype.add=function(e){this._events.add(e),this._fire("onAddOne",[e])
},Timeline.DefaultEventSource.prototype.addMany=function(e){for(var t=0;t<e.length;t++)this._events.add(e[t]);
this._fire("onAddMany",[])},Timeline.DefaultEventSource.prototype.clear=function(){this._events.removeAll(),this._fire("onClear",[])
},Timeline.DefaultEventSource.prototype.getEvent=function(e){return this._events.getEvent(e)
},Timeline.DefaultEventSource.prototype.getEventIterator=function(e,t){return this._events.getIterator(e,t)
},Timeline.DefaultEventSource.prototype.getEventReverseIterator=function(e,t){return this._events.getReverseIterator(e,t)
},Timeline.DefaultEventSource.prototype.getAllEventIterator=function(){return this._events.getAllIterator()
},Timeline.DefaultEventSource.prototype.getCount=function(){return this._events.getCount()
},Timeline.DefaultEventSource.prototype.getEarliestDate=function(){return this._events.getEarliestDate()
},Timeline.DefaultEventSource.prototype.getLatestDate=function(){return this._events.getLatestDate()
},Timeline.DefaultEventSource.prototype._fire=function(e,t){for(var i=0;i<this._listeners.length;i++){var n=this._listeners[i];
if(e in n)try{n[e].apply(n,t)}catch(r){SimileAjax.Debug.exception(r)}}},Timeline.DefaultEventSource.prototype._getBaseURL=function(e){if(e.indexOf("://")<0){var t=this._getBaseURL(document.location.href);
e="/"==e.substr(0,1)?t.substr(0,t.indexOf("/",t.indexOf("://")+3))+e:t+e}var i=e.lastIndexOf("/");
return 0>i?"":e.substr(0,i+1)},Timeline.DefaultEventSource.prototype._resolveRelativeURL=function(e,t){return null==e||""==e?e:e.indexOf("://")>0?e:"/"==e.substr(0,1)?t.substr(0,t.indexOf("/",t.indexOf("://")+3))+e:t+e
},Timeline.DefaultEventSource.Event=function(e,t,i,n,r,l,s,o,a,u,d,c,h,f,v){e=e?e.trim():"",this._id=e.length>0?e:"e"+Math.floor(1e6*Math.random()),this._instant=l||null==i,this._start=t,this._end=null!=i?i:t,this._latestStart=null!=n?n:l?this._end:this._start,this._earliestEnd=null!=r?r:l?this._start:this._end,this._text=SimileAjax.HTML.deEntify(s),this._description=SimileAjax.HTML.deEntify(o),this._image=null!=a&&""!=a?a:null,this._link=null!=u&&""!=u?u:null,this._title=null!=f?f:null,this._icon=null!=d&&""!=d?d:null,this._color=null!=c&&""!=c?c:null,this._textColor=null!=h&&""!=h?h:null,this._classname=null!=v&&""!=v?v:null,this._wikiURL=null,this._wikiSection=null
},Timeline.DefaultEventSource.Event.prototype={getID:function(){return this._id},isInstant:function(){return this._instant
},isImprecise:function(){return this._start!=this._latestStart||this._end!=this._earliestEnd
},getStart:function(){return this._start},getEnd:function(){return this._end},getLatestStart:function(){return this._latestStart
},getEarliestEnd:function(){return this._earliestEnd},getText:function(){return this._text
},getDescription:function(){return this._description},getImage:function(){return this._image
},getLink:function(){return this._link},getIcon:function(){return this._icon},getColor:function(){return this._color
},getTextColor:function(){return this._textColor},getClassName:function(){return this._classname
},getProperty:function(){return null},getWikiURL:function(){return this._wikiURL},getWikiSection:function(){return this._wikiSection
},setWikiInfo:function(e,t){this._wikiURL=e,this._wikiSection=t},fillDescription:function(e){e.innerHTML=this._description
},fillWikiInfo:function(e){if(null!=this._wikiURL&&null!=this._wikiSection){var t=this.getProperty("wikiID");
(null==t||0==t.length)&&(t=this.getText()),t=t.replace(/\s/g,"_");var i=this._wikiURL+this._wikiSection.replace(/\s/g,"_")+"/"+t,n=document.createElement("a");
n.href=i,n.target="new",n.innerHTML=Timeline.strings[Timeline.clientLocale].wikiLinkLabel,e.appendChild(document.createTextNode("[")),e.appendChild(n),e.appendChild(document.createTextNode("]"))
}else e.style.display="none"},fillTime:function(e,t){this._instant?this.isImprecise()?(e.appendChild(e.ownerDocument.createTextNode(t.labelPrecise(this._start))),e.appendChild(e.ownerDocument.createElement("br")),e.appendChild(e.ownerDocument.createTextNode(t.labelPrecise(this._end)))):e.appendChild(e.ownerDocument.createTextNode(t.labelPrecise(this._start))):this.isImprecise()?(e.appendChild(e.ownerDocument.createTextNode(t.labelPrecise(this._start)+" ~ "+t.labelPrecise(this._latestStart))),e.appendChild(e.ownerDocument.createElement("br")),e.appendChild(e.ownerDocument.createTextNode(t.labelPrecise(this._earliestEnd)+" ~ "+t.labelPrecise(this._end)))):(e.appendChild(e.ownerDocument.createTextNode(t.labelPrecise(this._start))),e.appendChild(e.ownerDocument.createElement("br")),e.appendChild(e.ownerDocument.createTextNode(t.labelPrecise(this._end))))
},fillInfoBubble:function(e,t,i){var n=e.ownerDocument,r=this.getText(),l=this.getLink(),s=this.getImage();
if(null!=s){var o=n.createElement("img");o.src=s,t.event.bubble.imageStyler(o),e.appendChild(o)
}var a=n.createElement("div"),u=n.createTextNode(r);if(null!=l){var d=n.createElement("a");
d.href=l,d.appendChild(u),a.appendChild(d)}else a.appendChild(u);t.event.bubble.titleStyler(a),e.appendChild(a);
var c=n.createElement("div");this.fillDescription(c),t.event.bubble.bodyStyler(c),e.appendChild(c);
var h=n.createElement("div");this.fillTime(h,i),t.event.bubble.timeStyler(h),e.appendChild(h);
var f=n.createElement("div");this.fillWikiInfo(f),t.event.bubble.wikiStyler(f),e.appendChild(f)
}};