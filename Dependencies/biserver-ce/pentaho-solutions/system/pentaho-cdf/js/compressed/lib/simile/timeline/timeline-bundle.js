Timeline.SpanHighlightDecorator=function(e){this._unit="unit"in e?e.unit:SimileAjax.NativeDateUnit,this._startDate="string"==typeof e.startDate?this._unit.parseFromObject(e.startDate):e.startDate,this._endDate="string"==typeof e.endDate?this._unit.parseFromObject(e.endDate):e.endDate,this._startLabel=e.startLabel,this._endLabel=e.endLabel,this._color=e.color,this._cssClass="cssClass"in e?e.cssClass:null,this._opacity="opacity"in e?e.opacity:100
},Timeline.SpanHighlightDecorator.prototype.initialize=function(e,t){this._band=e,this._timeline=t,this._layerDiv=null
},Timeline.SpanHighlightDecorator.prototype.paint=function(){null!=this._layerDiv&&this._band.removeLayerDiv(this._layerDiv),this._layerDiv=this._band.createLayerDiv(10),this._layerDiv.setAttribute("name","span-highlight-decorator"),this._layerDiv.style.display="none";
var e=this._band.getMinDate(),t=this._band.getMaxDate();if(this._unit.compare(this._startDate,t)<0&&this._unit.compare(this._endDate,e)>0){e=this._unit.later(e,this._startDate),t=this._unit.earlier(t,this._endDate);
var i=this._band.dateToPixelOffset(e),n=this._band.dateToPixelOffset(t),a=this._timeline.getDocument(),r=function(){var e=a.createElement("table");
return e.insertRow(0).insertCell(0),e},s=a.createElement("div");s.className="timeline-highlight-decorator",this._cssClass&&(s.className+=" "+this._cssClass),this._opacity<100&&SimileAjax.Graphics.setOpacity(s,this._opacity),this._layerDiv.appendChild(s);
var l=r();l.className="timeline-highlight-label timeline-highlight-label-start";var o=l.rows[0].cells[0];
o.innerHTML=this._startLabel,this._cssClass&&(o.className="label_"+this._cssClass),this._layerDiv.appendChild(l);
var h=r();h.className="timeline-highlight-label timeline-highlight-label-end";var m=h.rows[0].cells[0];
m.innerHTML=this._endLabel,this._cssClass&&(m.className="label_"+this._cssClass),this._layerDiv.appendChild(h),this._timeline.isHorizontal()?(s.style.left=i+"px",s.style.width=n-i+"px",l.style.right=this._band.getTotalViewLength()-i+"px",l.style.width=this._startLabel.length+"em",h.style.left=n+"px",h.style.width=this._endLabel.length+"em"):(s.style.top=i+"px",s.style.height=n-i+"px",l.style.bottom=i+"px",l.style.height="1.5px",h.style.top=n+"px",h.style.height="1.5px")
}this._layerDiv.style.display="block"},Timeline.SpanHighlightDecorator.prototype.softPaint=function(){},Timeline.PointHighlightDecorator=function(e){this._unit="unit"in e?e.unit:SimileAjax.NativeDateUnit,this._date="string"==typeof e.date?this._unit.parseFromObject(e.date):e.date,this._width="width"in e?e.width:10,this._color=e.color,this._cssClass="cssClass"in e?e.cssClass:"",this._opacity="opacity"in e?e.opacity:100
},Timeline.PointHighlightDecorator.prototype.initialize=function(e,t){this._band=e,this._timeline=t,this._layerDiv=null
},Timeline.PointHighlightDecorator.prototype.paint=function(){null!=this._layerDiv&&this._band.removeLayerDiv(this._layerDiv),this._layerDiv=this._band.createLayerDiv(10),this._layerDiv.setAttribute("name","span-highlight-decorator"),this._layerDiv.style.display="none";
var e=this._band.getMinDate(),t=this._band.getMaxDate();if(this._unit.compare(this._date,t)<0&&this._unit.compare(this._date,e)>0){var i=this._band.dateToPixelOffset(this._date),n=i-Math.round(this._width/2),a=this._timeline.getDocument(),r=a.createElement("div");
r.className="timeline-highlight-point-decorator",r.className+=" "+this._cssClass,this._opacity<100&&SimileAjax.Graphics.setOpacity(r,this._opacity),this._layerDiv.appendChild(r),this._timeline.isHorizontal()?r.style.left=n+"px":r.style.top=n+"px"
}this._layerDiv.style.display="block"},Timeline.PointHighlightDecorator.prototype.softPaint=function(){},Timeline.DetailedEventPainter=function(e){this._params=e,this._onSelectListeners=[],this._filterMatcher=null,this._highlightMatcher=null,this._frc=null,this._eventIdToElmt={}
},Timeline.DetailedEventPainter.prototype.initialize=function(e,t){this._band=e,this._timeline=t,this._backLayer=null,this._eventLayer=null,this._lineLayer=null,this._highlightLayer=null,this._eventIdToElmt=null
},Timeline.DetailedEventPainter.prototype.addOnSelectListener=function(e){this._onSelectListeners.push(e)
},Timeline.DetailedEventPainter.prototype.removeOnSelectListener=function(e){for(var t=0;t<this._onSelectListeners.length;t++)if(this._onSelectListeners[t]==e){this._onSelectListeners.splice(t,1);
break}},Timeline.DetailedEventPainter.prototype.getFilterMatcher=function(){return this._filterMatcher
},Timeline.DetailedEventPainter.prototype.setFilterMatcher=function(e){this._filterMatcher=e
},Timeline.DetailedEventPainter.prototype.getHighlightMatcher=function(){return this._highlightMatcher
},Timeline.DetailedEventPainter.prototype.setHighlightMatcher=function(e){this._highlightMatcher=e
},Timeline.DetailedEventPainter.prototype.paint=function(){var e=this._band.getEventSource();
if(null!=e){this._eventIdToElmt={},this._prepareForPainting();for(var t=this._params.theme.event,i=Math.max(t.track.height,this._frc.getLineHeight()),n={trackOffset:Math.round(this._band.getViewWidth()/2-i/2),trackHeight:i,trackGap:t.track.gap,trackIncrement:i+t.track.gap,icon:t.instant.icon,iconWidth:t.instant.iconWidth,iconHeight:t.instant.iconHeight,labelWidth:t.label.width},a=this._band.getMinDate(),r=this._band.getMaxDate(),s=null!=this._filterMatcher?this._filterMatcher:function(){return!0
},l=null!=this._highlightMatcher?this._highlightMatcher:function(){return-1},o=e.getEventReverseIterator(a,r);o.hasNext();){var h=o.next();
s(h)&&this.paintEvent(h,n,this._params.theme,l(h))}this._highlightLayer.style.display="block",this._lineLayer.style.display="block",this._eventLayer.style.display="block"
}},Timeline.DetailedEventPainter.prototype.softPaint=function(){},Timeline.DetailedEventPainter.prototype._prepareForPainting=function(){var e=this._band;
if(null==this._backLayer){this._backLayer=this._band.createLayerDiv(0,"timeline-band-events"),this._backLayer.style.visibility="hidden";
var t=document.createElement("span");t.className="timeline-event-label",this._backLayer.appendChild(t),this._frc=SimileAjax.Graphics.getFontRenderingContext(t)
}this._frc.update(),this._lowerTracks=[],this._upperTracks=[],null!=this._highlightLayer&&e.removeLayerDiv(this._highlightLayer),this._highlightLayer=e.createLayerDiv(105,"timeline-band-highlights"),this._highlightLayer.style.display="none",null!=this._lineLayer&&e.removeLayerDiv(this._lineLayer),this._lineLayer=e.createLayerDiv(110,"timeline-band-lines"),this._lineLayer.style.display="none",null!=this._eventLayer&&e.removeLayerDiv(this._eventLayer),this._eventLayer=e.createLayerDiv(110,"timeline-band-events"),this._eventLayer.style.display="none"
},Timeline.DetailedEventPainter.prototype.paintEvent=function(e,t,i,n){e.isInstant()?this.paintInstantEvent(e,t,i,n):this.paintDurationEvent(e,t,i,n)
},Timeline.DetailedEventPainter.prototype.paintInstantEvent=function(e,t,i,n){e.isImprecise()?this.paintImpreciseInstantEvent(e,t,i,n):this.paintPreciseInstantEvent(e,t,i,n)
},Timeline.DetailedEventPainter.prototype.paintDurationEvent=function(e,t,i,n){e.isImprecise()?this.paintImpreciseDurationEvent(e,t,i,n):this.paintPreciseDurationEvent(e,t,i,n)
},Timeline.DetailedEventPainter.prototype.paintPreciseInstantEvent=function(e,t,i,n){var a=(this._timeline.getDocument(),e.getText()),r=e.getStart(),s=Math.round(this._band.dateToPixelOffset(r)),l=Math.round(s+t.iconWidth/2),o=Math.round(s-t.iconWidth/2),h=this._frc.computeSize(a),m=this._findFreeTrackForSolid(l,s),c=this._paintEventIcon(e,m,o,t,i),_=l+i.event.label.offsetFromLine,p=m,u=this._getTrackData(m);
Math.min(u.solid,u.text)>=_+h.width?(u.solid=o,u.text=_):(u.solid=o,_=s+i.event.label.offsetFromLine,p=this._findFreeTrackForText(m,_+h.width,function(e){e.line=s-2
}),this._getTrackData(p).text=o,this._paintEventLine(e,s,m,p,t,i));var d=Math.round(t.trackOffset+p*t.trackIncrement+t.trackHeight/2-h.height/2),v=this._paintEventLabel(e,a,_,d,h.width,h.height,i),g=this,f=function(t,i){return g._onClickInstantEvent(c.elmt,i,e)
};SimileAjax.DOM.registerEvent(c.elmt,"mousedown",f),SimileAjax.DOM.registerEvent(v.elmt,"mousedown",f),this._createHighlightDiv(n,c,i),this._eventIdToElmt[e.getID()]=c.elmt
},Timeline.DetailedEventPainter.prototype.paintImpreciseInstantEvent=function(e,t,i,n){var a=(this._timeline.getDocument(),e.getText()),r=e.getStart(),s=e.getEnd(),l=Math.round(this._band.dateToPixelOffset(r)),o=Math.round(this._band.dateToPixelOffset(s)),h=Math.round(l+t.iconWidth/2),m=Math.round(l-t.iconWidth/2),c=this._frc.computeSize(a),_=this._findFreeTrackForSolid(o,l),p=this._paintEventTape(e,_,l,o,i.event.instant.impreciseColor,i.event.instant.impreciseOpacity,t,i),u=this._paintEventIcon(e,_,m,t,i),d=this._getTrackData(_);
d.solid=m;var v,g=h+i.event.label.offsetFromLine,f=g+c.width;o>f?v=_:(g=l+i.event.label.offsetFromLine,f=g+c.width,v=this._findFreeTrackForText(_,f,function(e){e.line=l-2
}),this._getTrackData(v).text=m,this._paintEventLine(e,l,_,v,t,i));var y=Math.round(t.trackOffset+v*t.trackIncrement+t.trackHeight/2-c.height/2),T=this._paintEventLabel(e,a,g,y,c.width,c.height,i),b=this,D=function(t,i){return b._onClickInstantEvent(u.elmt,i,e)
};SimileAjax.DOM.registerEvent(u.elmt,"mousedown",D),SimileAjax.DOM.registerEvent(p.elmt,"mousedown",D),SimileAjax.DOM.registerEvent(T.elmt,"mousedown",D),this._createHighlightDiv(n,u,i),this._eventIdToElmt[e.getID()]=u.elmt
},Timeline.DetailedEventPainter.prototype.paintPreciseDurationEvent=function(e,t,i,n){var a=(this._timeline.getDocument(),e.getText()),r=e.getStart(),s=e.getEnd(),l=Math.round(this._band.dateToPixelOffset(r)),o=Math.round(this._band.dateToPixelOffset(s)),h=this._frc.computeSize(a),m=this._findFreeTrackForSolid(o),c=e.getColor();
c=null!=c?c:i.event.duration.color;var _=this._paintEventTape(e,m,l,o,c,100,t,i),p=this._getTrackData(m);
p.solid=l;var u=l+i.event.label.offsetFromLine,d=this._findFreeTrackForText(m,u+h.width,function(e){e.line=l-2
});this._getTrackData(d).text=l-2,this._paintEventLine(e,l,m,d,t,i);var v=Math.round(t.trackOffset+d*t.trackIncrement+t.trackHeight/2-h.height/2),g=this._paintEventLabel(e,a,u,v,h.width,h.height,i),f=this,y=function(t,i){return f._onClickDurationEvent(_.elmt,i,e)
};SimileAjax.DOM.registerEvent(_.elmt,"mousedown",y),SimileAjax.DOM.registerEvent(g.elmt,"mousedown",y),this._createHighlightDiv(n,_,i),this._eventIdToElmt[e.getID()]=_.elmt
},Timeline.DetailedEventPainter.prototype.paintImpreciseDurationEvent=function(e,t,i,n){var a=(this._timeline.getDocument(),e.getText()),r=e.getStart(),s=e.getLatestStart(),l=e.getEnd(),o=e.getEarliestEnd(),h=Math.round(this._band.dateToPixelOffset(r)),m=Math.round(this._band.dateToPixelOffset(s)),c=Math.round(this._band.dateToPixelOffset(l)),_=Math.round(this._band.dateToPixelOffset(o)),p=this._frc.computeSize(a),u=this._findFreeTrackForSolid(c),d=e.getColor();
d=null!=d?d:i.event.duration.color;var v=(this._paintEventTape(e,u,h,c,i.event.duration.impreciseColor,i.event.duration.impreciseOpacity,t,i),this._paintEventTape(e,u,m,_,d,100,t,i)),g=this._getTrackData(u);
g.solid=h;var f=m+i.event.label.offsetFromLine,y=this._findFreeTrackForText(u,f+p.width,function(e){e.line=m-2
});this._getTrackData(y).text=m-2,this._paintEventLine(e,m,u,y,t,i);var T=Math.round(t.trackOffset+y*t.trackIncrement+t.trackHeight/2-p.height/2),b=this._paintEventLabel(e,a,f,T,p.width,p.height,i),D=this,L=function(t,i){return D._onClickDurationEvent(v.elmt,i,e)
};SimileAjax.DOM.registerEvent(v.elmt,"mousedown",L),SimileAjax.DOM.registerEvent(b.elmt,"mousedown",L),this._createHighlightDiv(n,v,i),this._eventIdToElmt[e.getID()]=v.elmt
},Timeline.DetailedEventPainter.prototype._findFreeTrackForSolid=function(e,t){for(var i=0;!0;i++){if(!(i<this._lowerTracks.length))return this._lowerTracks.push({solid:Number.POSITIVE_INFINITY,text:Number.POSITIVE_INFINITY,line:Number.POSITIVE_INFINITY}),i;
var n=this._lowerTracks[i];if(Math.min(n.solid,n.text)>e&&(!t||n.line>t))return i;
if(!(i<this._upperTracks.length))return this._upperTracks.push({solid:Number.POSITIVE_INFINITY,text:Number.POSITIVE_INFINITY,line:Number.POSITIVE_INFINITY}),-1-i;
var n=this._upperTracks[i];if(Math.min(n.solid,n.text)>e&&(!t||n.line>t))return-1-i
}},Timeline.DetailedEventPainter.prototype._findFreeTrackForText=function(e,t,i){var n,a,r,s;
if(0>e)n=!0,r=-e,a=this._findFreeUpperTrackForText(r,t),s=-1-a;else if(e>0)n=!1,r=e+1,a=this._findFreeLowerTrackForText(r,t),s=a;
else{var l=this._findFreeUpperTrackForText(0,t),o=this._findFreeLowerTrackForText(1,t);
l>=o-1?(n=!1,r=1,a=o,s=a):(n=!0,r=0,a=l,s=-1-a)}if(n){a==this._upperTracks.length&&this._upperTracks.push({solid:Number.POSITIVE_INFINITY,text:Number.POSITIVE_INFINITY,line:Number.POSITIVE_INFINITY});
for(var h=r;a>h;h++)i(this._upperTracks[h])}else{a==this._lowerTracks.length&&this._lowerTracks.push({solid:Number.POSITIVE_INFINITY,text:Number.POSITIVE_INFINITY,line:Number.POSITIVE_INFINITY});
for(var h=r;a>h;h++)i(this._lowerTracks[h])}return s},Timeline.DetailedEventPainter.prototype._findFreeLowerTrackForText=function(e,t){for(;e<this._lowerTracks.length;e++){var i=this._lowerTracks[e];
if(Math.min(i.solid,i.text)>=t)break}return e},Timeline.DetailedEventPainter.prototype._findFreeUpperTrackForText=function(e,t){for(;e<this._upperTracks.length;e++){var i=this._upperTracks[e];
if(Math.min(i.solid,i.text)>=t)break}return e},Timeline.DetailedEventPainter.prototype._getTrackData=function(e){return 0>e?this._upperTracks[-e-1]:this._lowerTracks[e]
},Timeline.DetailedEventPainter.prototype._paintEventLine=function(e,t,i,n,a,r){var s=Math.round(a.trackOffset+i*a.trackIncrement+a.trackHeight/2),l=Math.round(Math.abs(n-i)*a.trackIncrement),o="1px solid "+r.event.label.lineColor,h=this._timeline.getDocument().createElement("div");
h.style.position="absolute",h.style.left=t+"px",h.style.width=r.event.label.offsetFromLine+"px",h.style.height=l+"px",i>n?(h.style.top=s-l+"px",h.style.borderTop=o):(h.style.top=s+"px",h.style.borderBottom=o),h.style.borderLeft=o,this._lineLayer.appendChild(h)
},Timeline.DetailedEventPainter.prototype._paintEventIcon=function(e,t,i,n){var a=e.getIcon();
a=null!=a?a:n.icon;var r=n.trackOffset+t*n.trackIncrement+n.trackHeight/2,s=Math.round(r-n.iconHeight/2),l=SimileAjax.Graphics.createTranslucentImage(a),o=this._timeline.getDocument().createElement("div");
return o.style.position="absolute",o.style.left=i+"px",o.style.top=s+"px",o.appendChild(l),o.style.cursor="pointer",null!=e._title&&(o.title=e._title),this._eventLayer.appendChild(o),{left:i,top:s,width:n.iconWidth,height:n.iconHeight,elmt:o}
},Timeline.DetailedEventPainter.prototype._paintEventLabel=function(e,t,i,n,a,r,s){var l=this._timeline.getDocument(),o=l.createElement("div");
o.style.position="absolute",o.style.left=i+"px",o.style.width=a+"px",o.style.top=n+"px",o.style.height=r+"px",o.style.backgroundColor=s.event.label.backgroundColor,SimileAjax.Graphics.setOpacity(o,s.event.label.backgroundOpacity),this._eventLayer.appendChild(o);
var h=l.createElement("div");h.style.position="absolute",h.style.left=i+"px",h.style.width=a+"px",h.style.top=n+"px",h.innerHTML=t,h.style.cursor="pointer",null!=e._title&&(h.title=e._title);
var m=e.getTextColor();return null==m&&(m=e.getColor()),null!=m&&(h.style.color=m),this._eventLayer.appendChild(h),{left:i,top:n,width:a,height:r,elmt:h}
},Timeline.DetailedEventPainter.prototype._paintEventTape=function(e,t,i,n,a,r,s,l){var o=n-i,h=l.event.tape.height,m=s.trackOffset+t*s.trackIncrement+s.trackHeight/2,c=Math.round(m-h/2),_=this._timeline.getDocument().createElement("div");
return _.style.position="absolute",_.style.left=i+"px",_.style.width=o+"px",_.style.top=c+"px",_.style.height=h+"px",_.style.backgroundColor=a,_.style.overflow="hidden",_.style.cursor="pointer",null!=e._title&&(_.title=e._title),SimileAjax.Graphics.setOpacity(_,r),this._eventLayer.appendChild(_),{left:i,top:c,width:o,height:h,elmt:_}
},Timeline.DetailedEventPainter.prototype._createHighlightDiv=function(e,t,i){if(e>=0){var n=this._timeline.getDocument(),a=i.event,r=a.highlightColors[Math.min(e,a.highlightColors.length-1)],s=n.createElement("div");
s.style.position="absolute",s.style.overflow="hidden",s.style.left=t.left-2+"px",s.style.width=t.width+4+"px",s.style.top=t.top-2+"px",s.style.height=t.height+4+"px",s.style.background=r,this._highlightLayer.appendChild(s)
}},Timeline.DetailedEventPainter.prototype._onClickInstantEvent=function(e,t,i){var n=SimileAjax.DOM.getPageCoordinates(e);
return this._showBubble(n.left+Math.ceil(e.offsetWidth/2),n.top+Math.ceil(e.offsetHeight/2),i),this._fireOnSelect(i.getID()),t.cancelBubble=!0,SimileAjax.DOM.cancelEvent(t),!1
},Timeline.DetailedEventPainter.prototype._onClickDurationEvent=function(e,t,i){if("pageX"in t)var n=t.pageX,a=t.pageY;
else var r=SimileAjax.DOM.getPageCoordinates(e),n=t.offsetX+r.left,a=t.offsetY+r.top;
return this._showBubble(n,a,i),this._fireOnSelect(i.getID()),t.cancelBubble=!0,SimileAjax.DOM.cancelEvent(t),!1
},Timeline.DetailedEventPainter.prototype.showBubble=function(e){var t=this._eventIdToElmt[e.getID()];
if(t){var i=SimileAjax.DOM.getPageCoordinates(t);this._showBubble(i.left+t.offsetWidth/2,i.top+t.offsetHeight/2,e)
}},Timeline.DetailedEventPainter.prototype._showBubble=function(e,t,i){var n=document.createElement("div");
i.fillInfoBubble(n,this._params.theme,this._band.getLabeller()),SimileAjax.WindowManager.cancelPopups(),SimileAjax.Graphics.createBubbleForContentAndPoint(n,e,t,this._params.theme.event.bubble.width)
},Timeline.DetailedEventPainter.prototype._fireOnSelect=function(e){for(var t=0;t<this._onSelectListeners.length;t++)this._onSelectListeners[t](e)
},Timeline.GregorianEtherPainter=function(e){this._params=e,this._theme=e.theme,this._unit=e.unit,this._multiple="multiple"in e?e.multiple:1
},Timeline.GregorianEtherPainter.prototype.initialize=function(e,t){this._band=e,this._timeline=t,this._backgroundLayer=e.createLayerDiv(0),this._backgroundLayer.setAttribute("name","ether-background"),this._backgroundLayer.className="timeline-ether-bg",this._markerLayer=null,this._lineLayer=null;
var i="align"in this._params&&void 0!=this._params.align?this._params.align:this._theme.ether.interval.marker[t.isHorizontal()?"hAlign":"vAlign"],n="showLine"in this._params?this._params.showLine:this._theme.ether.interval.line.show;
this._intervalMarkerLayout=new Timeline.EtherIntervalMarkerLayout(this._timeline,this._band,this._theme,i,n),this._highlight=new Timeline.EtherHighlight(this._timeline,this._band,this._theme,this._backgroundLayer)
},Timeline.GregorianEtherPainter.prototype.setHighlight=function(e,t){this._highlight.position(e,t)
},Timeline.GregorianEtherPainter.prototype.paint=function(){this._markerLayer&&this._band.removeLayerDiv(this._markerLayer),this._markerLayer=this._band.createLayerDiv(100),this._markerLayer.setAttribute("name","ether-markers"),this._markerLayer.style.display="none",this._lineLayer&&this._band.removeLayerDiv(this._lineLayer),this._lineLayer=this._band.createLayerDiv(1),this._lineLayer.setAttribute("name","ether-lines"),this._lineLayer.style.display="none";
var e=this._band.getMinDate(),t=this._band.getMaxDate(),i=this._band.getTimeZone(),n=this._band.getLabeller();
SimileAjax.DateTime.roundDownToInterval(e,this._unit,i,this._multiple,this._theme.firstDayOfWeek);
for(var a=this,r=function(e){for(var t=0;t<a._multiple;t++)SimileAjax.DateTime.incrementByInterval(e,a._unit)
};e.getTime()<t.getTime();)this._intervalMarkerLayout.createIntervalMarker(e,n,this._unit,this._markerLayer,this._lineLayer),r(e);
this._markerLayer.style.display="block",this._lineLayer.style.display="block"},Timeline.GregorianEtherPainter.prototype.softPaint=function(){},Timeline.GregorianEtherPainter.prototype.zoom=function(e){0!=e&&(this._unit+=e)
},Timeline.HotZoneGregorianEtherPainter=function(e){this._params=e,this._theme=e.theme,this._zones=[{startTime:Number.NEGATIVE_INFINITY,endTime:Number.POSITIVE_INFINITY,unit:e.unit,multiple:1}];
for(var t=0;t<e.zones.length;t++)for(var i=e.zones[t],n=SimileAjax.DateTime.parseGregorianDateTime(i.start).getTime(),a=SimileAjax.DateTime.parseGregorianDateTime(i.end).getTime(),r=0;r<this._zones.length&&a>n;r++){var s=this._zones[r];
n<s.endTime&&(n>s.startTime&&(this._zones.splice(r,0,{startTime:s.startTime,endTime:n,unit:s.unit,multiple:s.multiple}),r++,s.startTime=n),a<s.endTime?(this._zones.splice(r,0,{startTime:n,endTime:a,unit:i.unit,multiple:i.multiple?i.multiple:1}),r++,s.startTime=a,n=a):(s.multiple=i.multiple,s.unit=i.unit,n=s.endTime))
}},Timeline.HotZoneGregorianEtherPainter.prototype.initialize=function(e,t){this._band=e,this._timeline=t,this._backgroundLayer=e.createLayerDiv(0),this._backgroundLayer.setAttribute("name","ether-background"),this._backgroundLayer.className="timeline-ether-bg",this._markerLayer=null,this._lineLayer=null;
var i="align"in this._params&&void 0!=this._params.align?this._params.align:this._theme.ether.interval.marker[t.isHorizontal()?"hAlign":"vAlign"],n="showLine"in this._params?this._params.showLine:this._theme.ether.interval.line.show;
this._intervalMarkerLayout=new Timeline.EtherIntervalMarkerLayout(this._timeline,this._band,this._theme,i,n),this._highlight=new Timeline.EtherHighlight(this._timeline,this._band,this._theme,this._backgroundLayer)
},Timeline.HotZoneGregorianEtherPainter.prototype.setHighlight=function(e,t){this._highlight.position(e,t)
},Timeline.HotZoneGregorianEtherPainter.prototype.paint=function(){this._markerLayer&&this._band.removeLayerDiv(this._markerLayer),this._markerLayer=this._band.createLayerDiv(100),this._markerLayer.setAttribute("name","ether-markers"),this._markerLayer.style.display="none",this._lineLayer&&this._band.removeLayerDiv(this._lineLayer),this._lineLayer=this._band.createLayerDiv(1),this._lineLayer.setAttribute("name","ether-lines"),this._lineLayer.style.display="none";
for(var e=this._band.getMinDate(),t=this._band.getMaxDate(),i=this._band.getTimeZone(),n=this._band.getLabeller(),a=function(e,t){for(var i=0;i<t.multiple;i++)SimileAjax.DateTime.incrementByInterval(e,t.unit)
},r=0;r<this._zones.length&&!(e.getTime()<this._zones[r].endTime);)r++;for(var s=this._zones.length-1;s>=0&&!(t.getTime()>this._zones[s].startTime);)s--;
for(var l=r;s>=l;l++){var o=this._zones[l],h=new Date(Math.max(e.getTime(),o.startTime)),m=new Date(Math.min(t.getTime(),o.endTime));
for(SimileAjax.DateTime.roundDownToInterval(h,o.unit,i,o.multiple,this._theme.firstDayOfWeek),SimileAjax.DateTime.roundUpToInterval(m,o.unit,i,o.multiple,this._theme.firstDayOfWeek);h.getTime()<m.getTime();)this._intervalMarkerLayout.createIntervalMarker(h,n,o.unit,this._markerLayer,this._lineLayer),a(h,o)
}this._markerLayer.style.display="block",this._lineLayer.style.display="block"},Timeline.HotZoneGregorianEtherPainter.prototype.softPaint=function(){},Timeline.HotZoneGregorianEtherPainter.prototype.zoom=function(e){if(0!=e)for(var t=0;t<this._zones.length;++t)this._zones[t]&&(this._zones[t].unit+=e)
},Timeline.YearCountEtherPainter=function(e){this._params=e,this._theme=e.theme,this._startDate=SimileAjax.DateTime.parseGregorianDateTime(e.startDate),this._multiple="multiple"in e?e.multiple:1
},Timeline.YearCountEtherPainter.prototype.initialize=function(e,t){this._band=e,this._timeline=t,this._backgroundLayer=e.createLayerDiv(0),this._backgroundLayer.setAttribute("name","ether-background"),this._backgroundLayer.className="timeline-ether-bg",this._markerLayer=null,this._lineLayer=null;
var i="align"in this._params?this._params.align:this._theme.ether.interval.marker[t.isHorizontal()?"hAlign":"vAlign"],n="showLine"in this._params?this._params.showLine:this._theme.ether.interval.line.show;
this._intervalMarkerLayout=new Timeline.EtherIntervalMarkerLayout(this._timeline,this._band,this._theme,i,n),this._highlight=new Timeline.EtherHighlight(this._timeline,this._band,this._theme,this._backgroundLayer)
},Timeline.YearCountEtherPainter.prototype.setHighlight=function(e,t){this._highlight.position(e,t)
},Timeline.YearCountEtherPainter.prototype.paint=function(){this._markerLayer&&this._band.removeLayerDiv(this._markerLayer),this._markerLayer=this._band.createLayerDiv(100),this._markerLayer.setAttribute("name","ether-markers"),this._markerLayer.style.display="none",this._lineLayer&&this._band.removeLayerDiv(this._lineLayer),this._lineLayer=this._band.createLayerDiv(1),this._lineLayer.setAttribute("name","ether-lines"),this._lineLayer.style.display="none";
var e=new Date(this._startDate.getTime()),t=this._band.getMaxDate(),i=this._band.getMinDate().getUTCFullYear()-this._startDate.getUTCFullYear();
e.setUTCFullYear(this._band.getMinDate().getUTCFullYear()-i%this._multiple);for(var n=this,a=function(e){for(var t=0;t<n._multiple;t++)SimileAjax.DateTime.incrementByInterval(e,SimileAjax.DateTime.YEAR)
},r={labelInterval:function(e){var t=e.getUTCFullYear()-n._startDate.getUTCFullYear();
return{text:t,emphasized:0==t}}};e.getTime()<t.getTime();)this._intervalMarkerLayout.createIntervalMarker(e,r,SimileAjax.DateTime.YEAR,this._markerLayer,this._lineLayer),a(e);
this._markerLayer.style.display="block",this._lineLayer.style.display="block"},Timeline.YearCountEtherPainter.prototype.softPaint=function(){},Timeline.QuarterlyEtherPainter=function(e){this._params=e,this._theme=e.theme,this._startDate=SimileAjax.DateTime.parseGregorianDateTime(e.startDate)
},Timeline.QuarterlyEtherPainter.prototype.initialize=function(e,t){this._band=e,this._timeline=t,this._backgroundLayer=e.createLayerDiv(0),this._backgroundLayer.setAttribute("name","ether-background"),this._backgroundLayer.className="timeline-ether-bg",this._markerLayer=null,this._lineLayer=null;
var i="align"in this._params?this._params.align:this._theme.ether.interval.marker[t.isHorizontal()?"hAlign":"vAlign"],n="showLine"in this._params?this._params.showLine:this._theme.ether.interval.line.show;
this._intervalMarkerLayout=new Timeline.EtherIntervalMarkerLayout(this._timeline,this._band,this._theme,i,n),this._highlight=new Timeline.EtherHighlight(this._timeline,this._band,this._theme,this._backgroundLayer)
},Timeline.QuarterlyEtherPainter.prototype.setHighlight=function(e,t){this._highlight.position(e,t)
},Timeline.QuarterlyEtherPainter.prototype.paint=function(){this._markerLayer&&this._band.removeLayerDiv(this._markerLayer),this._markerLayer=this._band.createLayerDiv(100),this._markerLayer.setAttribute("name","ether-markers"),this._markerLayer.style.display="none",this._lineLayer&&this._band.removeLayerDiv(this._lineLayer),this._lineLayer=this._band.createLayerDiv(1),this._lineLayer.setAttribute("name","ether-lines"),this._lineLayer.style.display="none";
var e=new Date(0),t=this._band.getMaxDate();e.setUTCFullYear(Math.max(this._startDate.getUTCFullYear(),this._band.getMinDate().getUTCFullYear())),e.setUTCMonth(this._startDate.getUTCMonth());
for(var i=this,n=function(e){e.setUTCMonth(e.getUTCMonth()+3)},a={labelInterval:function(e){var t=(4+(e.getUTCMonth()-i._startDate.getUTCMonth())/3)%4;
return 0!=t?{text:"Q"+(t+1),emphasized:!1}:{text:"Y"+(e.getUTCFullYear()-i._startDate.getUTCFullYear()+1),emphasized:!0}
}};e.getTime()<t.getTime();)this._intervalMarkerLayout.createIntervalMarker(e,a,SimileAjax.DateTime.YEAR,this._markerLayer,this._lineLayer),n(e);
this._markerLayer.style.display="block",this._lineLayer.style.display="block"},Timeline.QuarterlyEtherPainter.prototype.softPaint=function(){},Timeline.EtherIntervalMarkerLayout=function(e,t,i,n,a){var r=e.isHorizontal();
this.positionDiv=r?"Top"==n?function(e,t){e.style.left=t+"px",e.style.top="0px"}:function(e,t){e.style.left=t+"px",e.style.bottom="0px"
}:"Left"==n?function(e,t){e.style.top=t+"px",e.style.left="0px"}:function(e,t){e.style.top=t+"px",e.style.right="0px"
};var s=i.ether.interval.marker,l=i.ether.interval.line,o=i.ether.interval.weekend,h=(r?"h":"v")+n,m=(s[h+"Styler"],s[h+"EmphasizedStyler"],SimileAjax.DateTime.gregorianUnitLengths[SimileAjax.DateTime.DAY]);
this.createIntervalMarker=function(n,s,h,c,_){var p=Math.round(t.dateToPixelOffset(n));
if(a&&h!=SimileAjax.DateTime.WEEK){var u=e.getDocument().createElement("div");u.className="timeline-ether-lines",l.opacity<100&&SimileAjax.Graphics.setOpacity(u,l.opacity),r?u.style.left=p+"px":u.style.top=p+"px",_.appendChild(u)
}if(h==SimileAjax.DateTime.WEEK){var d=i.firstDayOfWeek,v=new Date(n.getTime()+(6-d-7)*m),g=new Date(v.getTime()+2*m),f=Math.round(t.dateToPixelOffset(v)),y=Math.round(t.dateToPixelOffset(g)),T=Math.max(1,y-f),b=e.getDocument().createElement("div");
b.className="timeline-ether-weekends",o.opacity<100&&SimileAjax.Graphics.setOpacity(b,o.opacity),r?(b.style.left=f+"px",b.style.width=T+"px"):(b.style.top=f+"px",b.style.height=T+"px"),_.appendChild(b)
}var D=s.labelInterval(n,h),L=e.getDocument().createElement("div");return L.innerHTML=D.text,L.className="timeline-date-label",D.emphasized&&(L.className+=" timeline-date-label-em"),this.positionDiv(L,p),c.appendChild(L),L
}},Timeline.EtherHighlight=function(e,t,i,n){var a=e.isHorizontal();this._highlightDiv=null,this._createHighlightDiv=function(){if(null==this._highlightDiv){this._highlightDiv=e.getDocument().createElement("div"),this._highlightDiv.setAttribute("name","ether-highlight"),this._highlightDiv.className="timeline-ether-highlight";
var t=i.ether.highlightOpacity;100>t&&SimileAjax.Graphics.setOpacity(this._highlightDiv,t),n.appendChild(this._highlightDiv)
}},this.position=function(e,i){this._createHighlightDiv();var n=Math.round(t.dateToPixelOffset(e)),r=Math.round(t.dateToPixelOffset(i)),s=Math.max(r-n,3);
a?(this._highlightDiv.style.left=n+"px",this._highlightDiv.style.width=s+"px",this._highlightDiv.style.height=t.getViewWidth()-4+"px"):(this._highlightDiv.style.top=n+"px",this._highlightDiv.style.height=s+"px",this._highlightDiv.style.width=t.getViewWidth()-4+"px")
}},Timeline.LinearEther=function(e){this._params=e,this._interval=e.interval,this._pixelsPerInterval=e.pixelsPerInterval
},Timeline.LinearEther.prototype.initialize=function(e,t){this._band=e,this._timeline=t,this._unit=t.getUnit(),"startsOn"in this._params?this._start=this._unit.parseFromObject(this._params.startsOn):"endsOn"in this._params?(this._start=this._unit.parseFromObject(this._params.endsOn),this.shiftPixels(-this._timeline.getPixelLength())):"centersOn"in this._params?(this._start=this._unit.parseFromObject(this._params.centersOn),this.shiftPixels(-this._timeline.getPixelLength()/2)):(this._start=this._unit.makeDefaultValue(),this.shiftPixels(-this._timeline.getPixelLength()/2))
},Timeline.LinearEther.prototype.setDate=function(e){this._start=this._unit.cloneValue(e)
},Timeline.LinearEther.prototype.shiftPixels=function(e){var t=this._interval*e/this._pixelsPerInterval;
this._start=this._unit.change(this._start,t)},Timeline.LinearEther.prototype.dateToPixelOffset=function(e){var t=this._unit.compare(e,this._start);
return this._pixelsPerInterval*t/this._interval},Timeline.LinearEther.prototype.pixelOffsetToDate=function(e){var t=e*this._interval/this._pixelsPerInterval;
return this._unit.change(this._start,t)},Timeline.LinearEther.prototype.zoom=function(e){var t=0,i=this._band._zoomIndex,n=i;
return e&&i>0&&(n=i-1),!e&&i<this._band._zoomSteps.length-1&&(n=i+1),this._band._zoomIndex=n,this._interval=SimileAjax.DateTime.gregorianUnitLengths[this._band._zoomSteps[n].unit],this._pixelsPerInterval=this._band._zoomSteps[n].pixelsPerInterval,t=this._band._zoomSteps[n].unit-this._band._zoomSteps[i].unit
},Timeline.HotZoneEther=function(e){this._params=e,this._interval=e.interval,this._pixelsPerInterval=e.pixelsPerInterval,this._theme=e.theme
},Timeline.HotZoneEther.prototype.initialize=function(e,t){this._band=e,this._timeline=t,this._unit=t.getUnit(),this._zones=[{startTime:Number.NEGATIVE_INFINITY,endTime:Number.POSITIVE_INFINITY,magnify:1}];
for(var i=this._params,n=0;n<i.zones.length;n++)for(var a=i.zones[n],r=this._unit.parseFromObject(a.start),s=this._unit.parseFromObject(a.end),l=0;l<this._zones.length&&this._unit.compare(s,r)>0;l++){var o=this._zones[l];
this._unit.compare(r,o.endTime)<0&&(this._unit.compare(r,o.startTime)>0&&(this._zones.splice(l,0,{startTime:o.startTime,endTime:r,magnify:o.magnify}),l++,o.startTime=r),this._unit.compare(s,o.endTime)<0?(this._zones.splice(l,0,{startTime:r,endTime:s,magnify:a.magnify*o.magnify}),l++,o.startTime=s,r=s):(o.magnify*=a.magnify,r=o.endTime))
}"startsOn"in this._params?this._start=this._unit.parseFromObject(this._params.startsOn):"endsOn"in this._params?(this._start=this._unit.parseFromObject(this._params.endsOn),this.shiftPixels(-this._timeline.getPixelLength())):"centersOn"in this._params?(this._start=this._unit.parseFromObject(this._params.centersOn),this.shiftPixels(-this._timeline.getPixelLength()/2)):(this._start=this._unit.makeDefaultValue(),this.shiftPixels(-this._timeline.getPixelLength()/2))
},Timeline.HotZoneEther.prototype.setDate=function(e){this._start=this._unit.cloneValue(e)
},Timeline.HotZoneEther.prototype.shiftPixels=function(e){this._start=this.pixelOffsetToDate(e)
},Timeline.HotZoneEther.prototype.dateToPixelOffset=function(e){return this._dateDiffToPixelOffset(this._start,e)
},Timeline.HotZoneEther.prototype.pixelOffsetToDate=function(e){return this._pixelOffsetToDate(e,this._start)
},Timeline.HotZoneEther.prototype.zoom=function(e){var t=0,i=this._band._zoomIndex,n=i;
return e&&i>0&&(n=i-1),!e&&i<this._band._zoomSteps.length-1&&(n=i+1),this._band._zoomIndex=n,this._interval=SimileAjax.DateTime.gregorianUnitLengths[this._band._zoomSteps[n].unit],this._pixelsPerInterval=this._band._zoomSteps[n].pixelsPerInterval,t=this._band._zoomSteps[n].unit-this._band._zoomSteps[i].unit
},Timeline.HotZoneEther.prototype._dateDiffToPixelOffset=function(e,t){var i=this._getScale(),n=e,a=t,r=0;
if(this._unit.compare(n,a)<0){for(var s=0;s<this._zones.length&&!(this._unit.compare(n,this._zones[s].endTime)<0);)s++;
for(;this._unit.compare(n,a)<0;){var l=this._zones[s],o=this._unit.earlier(a,l.endTime);
r+=this._unit.compare(o,n)/(i/l.magnify),n=o,s++}}else{for(var s=this._zones.length-1;s>=0&&!(this._unit.compare(n,this._zones[s].startTime)>0);)s--;
for(;this._unit.compare(n,a)>0;){var l=this._zones[s],o=this._unit.later(a,l.startTime);
r+=this._unit.compare(o,n)/(i/l.magnify),n=o,s--}}return r},Timeline.HotZoneEther.prototype._pixelOffsetToDate=function(e,t){var i=this._getScale(),n=t;
if(e>0){for(var a=0;a<this._zones.length&&!(this._unit.compare(n,this._zones[a].endTime)<0);)a++;
for(;e>0;){var r=this._zones[a],s=i/r.magnify;if(r.endTime==Number.POSITIVE_INFINITY)n=this._unit.change(n,e*s),e=0;
else{var l=this._unit.compare(r.endTime,n)/s;l>e?(n=this._unit.change(n,e*s),e=0):(n=r.endTime,e-=l)
}a++}}else{for(var a=this._zones.length-1;a>=0&&!(this._unit.compare(n,this._zones[a].startTime)>0);)a--;
for(e=-e;e>0;){var r=this._zones[a],s=i/r.magnify;if(r.startTime==Number.NEGATIVE_INFINITY)n=this._unit.change(n,-e*s),e=0;
else{var l=this._unit.compare(n,r.startTime)/s;l>e?(n=this._unit.change(n,-e*s),e=0):(n=r.startTime,e-=l)
}a--}}return n},Timeline.HotZoneEther.prototype._getScale=function(){return this._interval/this._pixelsPerInterval
},Timeline.GregorianDateLabeller=function(e,t){this._locale=e,this._timeZone=t},Timeline.GregorianDateLabeller.monthNames=[],Timeline.GregorianDateLabeller.dayNames=[],Timeline.GregorianDateLabeller.labelIntervalFunctions=[],Timeline.GregorianDateLabeller.getMonthName=function(e,t){return Timeline.GregorianDateLabeller.monthNames[t][e]
},Timeline.GregorianDateLabeller.prototype.labelInterval=function(e,t){var i=Timeline.GregorianDateLabeller.labelIntervalFunctions[this._locale];
return null==i&&(i=Timeline.GregorianDateLabeller.prototype.defaultLabelInterval),i.call(this,e,t)
},Timeline.GregorianDateLabeller.prototype.labelPrecise=function(e){return SimileAjax.DateTime.removeTimeZoneOffset(e,this._timeZone).toUTCString()
},Timeline.GregorianDateLabeller.prototype.defaultLabelInterval=function(e,t){var i,n=!1;
switch(e=SimileAjax.DateTime.removeTimeZoneOffset(e,this._timeZone),t){case SimileAjax.DateTime.MILLISECOND:i=e.getUTCMilliseconds();
break;case SimileAjax.DateTime.SECOND:i=e.getUTCSeconds();break;case SimileAjax.DateTime.MINUTE:var a=e.getUTCMinutes();
0==a?(i=e.getUTCHours()+":00",n=!0):i=a;break;case SimileAjax.DateTime.HOUR:i=e.getUTCHours()+"hr";
break;case SimileAjax.DateTime.DAY:i=Timeline.GregorianDateLabeller.getMonthName(e.getUTCMonth(),this._locale)+" "+e.getUTCDate();
break;case SimileAjax.DateTime.WEEK:i=Timeline.GregorianDateLabeller.getMonthName(e.getUTCMonth(),this._locale)+" "+e.getUTCDate();
break;case SimileAjax.DateTime.MONTH:var a=e.getUTCMonth();if(0!=a){i=Timeline.GregorianDateLabeller.getMonthName(a,this._locale);
break}case SimileAjax.DateTime.YEAR:case SimileAjax.DateTime.DECADE:case SimileAjax.DateTime.CENTURY:case SimileAjax.DateTime.MILLENNIUM:var r=e.getUTCFullYear();
i=r>0?e.getUTCFullYear():1-r+"BC",n=t==SimileAjax.DateTime.MONTH||t==SimileAjax.DateTime.DECADE&&r%100==0||t==SimileAjax.DateTime.CENTURY&&r%1e3==0;
break;default:i=e.toUTCString()}return{text:i,emphasized:n}},Timeline.OriginalEventPainter=function(e){this._params=e,this._onSelectListeners=[],this._filterMatcher=null,this._highlightMatcher=null,this._frc=null,this._eventIdToElmt={}
},Timeline.OriginalEventPainter.prototype.initialize=function(e,t){this._band=e,this._timeline=t,this._backLayer=null,this._eventLayer=null,this._lineLayer=null,this._highlightLayer=null,this._eventIdToElmt=null
},Timeline.OriginalEventPainter.prototype.addOnSelectListener=function(e){this._onSelectListeners.push(e)
},Timeline.OriginalEventPainter.prototype.removeOnSelectListener=function(e){for(var t=0;t<this._onSelectListeners.length;t++)if(this._onSelectListeners[t]==e){this._onSelectListeners.splice(t,1);
break}},Timeline.OriginalEventPainter.prototype.getFilterMatcher=function(){return this._filterMatcher
},Timeline.OriginalEventPainter.prototype.setFilterMatcher=function(e){this._filterMatcher=e
},Timeline.OriginalEventPainter.prototype.getHighlightMatcher=function(){return this._highlightMatcher
},Timeline.OriginalEventPainter.prototype.setHighlightMatcher=function(e){this._highlightMatcher=e
},Timeline.OriginalEventPainter.prototype.paint=function(){var e=this._band.getEventSource();
if(null!=e){this._eventIdToElmt={},this._prepareForPainting();for(var t=this._params.theme.event,i=Math.max(t.track.height,t.tape.height+this._frc.getLineHeight()),n={trackOffset:t.track.gap,trackHeight:i,trackGap:t.track.gap,trackIncrement:i+t.track.gap,icon:t.instant.icon,iconWidth:t.instant.iconWidth,iconHeight:t.instant.iconHeight,labelWidth:t.label.width},a=this._band.getMinDate(),r=this._band.getMaxDate(),s=null!=this._filterMatcher?this._filterMatcher:function(){return!0
},l=null!=this._highlightMatcher?this._highlightMatcher:function(){return-1},o=e.getEventReverseIterator(a,r);o.hasNext();){var h=o.next();
s(h)&&this.paintEvent(h,n,this._params.theme,l(h))}this._highlightLayer.style.display="block",this._lineLayer.style.display="block",this._eventLayer.style.display="block"
}},Timeline.OriginalEventPainter.prototype.softPaint=function(){},Timeline.OriginalEventPainter.prototype._prepareForPainting=function(){var e=this._band;
if(null==this._backLayer){this._backLayer=this._band.createLayerDiv(0,"timeline-band-events"),this._backLayer.style.visibility="hidden";
var t=document.createElement("span");t.className="timeline-event-label",this._backLayer.appendChild(t),this._frc=SimileAjax.Graphics.getFontRenderingContext(t)
}this._frc.update(),this._tracks=[],null!=this._highlightLayer&&e.removeLayerDiv(this._highlightLayer),this._highlightLayer=e.createLayerDiv(105,"timeline-band-highlights"),this._highlightLayer.style.display="none",null!=this._lineLayer&&e.removeLayerDiv(this._lineLayer),this._lineLayer=e.createLayerDiv(110,"timeline-band-lines"),this._lineLayer.style.display="none",null!=this._eventLayer&&e.removeLayerDiv(this._eventLayer),this._eventLayer=e.createLayerDiv(115,"timeline-band-events"),this._eventLayer.style.display="none"
},Timeline.OriginalEventPainter.prototype.paintEvent=function(e,t,i,n){e.isInstant()?this.paintInstantEvent(e,t,i,n):this.paintDurationEvent(e,t,i,n)
},Timeline.OriginalEventPainter.prototype.paintInstantEvent=function(e,t,i,n){e.isImprecise()?this.paintImpreciseInstantEvent(e,t,i,n):this.paintPreciseInstantEvent(e,t,i,n)
},Timeline.OriginalEventPainter.prototype.paintDurationEvent=function(e,t,i,n){e.isImprecise()?this.paintImpreciseDurationEvent(e,t,i,n):this.paintPreciseDurationEvent(e,t,i,n)
},Timeline.OriginalEventPainter.prototype.paintPreciseInstantEvent=function(e,t,i,n){var a=(this._timeline.getDocument(),e.getText()),r=e.getStart(),s=Math.round(this._band.dateToPixelOffset(r)),l=Math.round(s+t.iconWidth/2),o=Math.round(s-t.iconWidth/2),h=this._frc.computeSize(a),m=l+i.event.label.offsetFromLine,c=m+h.width,_=c,p=this._findFreeTrack(_),u=Math.round(t.trackOffset+p*t.trackIncrement+t.trackHeight/2-h.height/2),d=this._paintEventIcon(e,p,o,t,i),v=this._paintEventLabel(e,a,m,u,h.width,h.height,i),g=this,f=function(t,i){return g._onClickInstantEvent(d.elmt,i,e)
};SimileAjax.DOM.registerEvent(d.elmt,"mousedown",f),SimileAjax.DOM.registerEvent(v.elmt,"mousedown",f),this._createHighlightDiv(n,d,i),this._eventIdToElmt[e.getID()]=d.elmt,this._tracks[p]=o
},Timeline.OriginalEventPainter.prototype.paintImpreciseInstantEvent=function(e,t,i,n){var a=(this._timeline.getDocument(),e.getText()),r=e.getStart(),s=e.getEnd(),l=Math.round(this._band.dateToPixelOffset(r)),o=Math.round(this._band.dateToPixelOffset(s)),h=Math.round(l+t.iconWidth/2),m=Math.round(l-t.iconWidth/2),c=this._frc.computeSize(a),_=h+i.event.label.offsetFromLine,p=_+c.width,u=Math.max(p,o),d=this._findFreeTrack(u),v=Math.round(t.trackOffset+d*t.trackIncrement+t.trackHeight/2-c.height/2),g=this._paintEventIcon(e,d,m,t,i),f=this._paintEventLabel(e,a,_,v,c.width,c.height,i),y=this._paintEventTape(e,d,l,o,i.event.instant.impreciseColor,i.event.instant.impreciseOpacity,t,i),T=this,b=function(t,i){return T._onClickInstantEvent(g.elmt,i,e)
};SimileAjax.DOM.registerEvent(g.elmt,"mousedown",b),SimileAjax.DOM.registerEvent(y.elmt,"mousedown",b),SimileAjax.DOM.registerEvent(f.elmt,"mousedown",b),this._createHighlightDiv(n,g,i),this._eventIdToElmt[e.getID()]=g.elmt,this._tracks[d]=m
},Timeline.OriginalEventPainter.prototype.paintPreciseDurationEvent=function(e,t,i,n){var a=(this._timeline.getDocument(),e.getText()),r=e.getStart(),s=e.getEnd(),l=Math.round(this._band.dateToPixelOffset(r)),o=Math.round(this._band.dateToPixelOffset(s)),h=this._frc.computeSize(a),m=l,c=m+h.width,_=Math.max(c,o),p=this._findFreeTrack(_),u=Math.round(t.trackOffset+p*t.trackIncrement+i.event.tape.height),d=e.getColor();
d=null!=d?d:i.event.duration.color;var v=this._paintEventTape(e,p,l,o,d,100,t,i),g=this._paintEventLabel(e,a,m,u,h.width,h.height,i),f=this,y=function(t,i){return f._onClickDurationEvent(v.elmt,i,e)
};SimileAjax.DOM.registerEvent(v.elmt,"mousedown",y),SimileAjax.DOM.registerEvent(g.elmt,"mousedown",y),this._createHighlightDiv(n,v,i),this._eventIdToElmt[e.getID()]=v.elmt,this._tracks[p]=l
},Timeline.OriginalEventPainter.prototype.paintImpreciseDurationEvent=function(e,t,i,n){var a=(this._timeline.getDocument(),e.getText()),r=e.getStart(),s=e.getLatestStart(),l=e.getEnd(),o=e.getEarliestEnd(),h=Math.round(this._band.dateToPixelOffset(r)),m=Math.round(this._band.dateToPixelOffset(s)),c=Math.round(this._band.dateToPixelOffset(l)),_=Math.round(this._band.dateToPixelOffset(o)),p=this._frc.computeSize(a),u=m,d=u+p.width,v=Math.max(d,c),g=this._findFreeTrack(v),f=Math.round(t.trackOffset+g*t.trackIncrement+i.event.tape.height),y=e.getColor();
y=null!=y?y:i.event.duration.color;var T=(this._paintEventTape(e,g,h,c,i.event.duration.impreciseColor,i.event.duration.impreciseOpacity,t,i),this._paintEventTape(e,g,m,_,y,100,t,i)),b=this._paintEventLabel(e,a,u,f,p.width,p.height,i),D=this,L=function(t,i){return D._onClickDurationEvent(T.elmt,i,e)
};SimileAjax.DOM.registerEvent(T.elmt,"mousedown",L),SimileAjax.DOM.registerEvent(b.elmt,"mousedown",L),this._createHighlightDiv(n,T,i),this._eventIdToElmt[e.getID()]=T.elmt,this._tracks[g]=h
},Timeline.OriginalEventPainter.prototype._findFreeTrack=function(e){for(var t=0;t<this._tracks.length;t++){var i=this._tracks[t];
if(i>e)break}return t},Timeline.OriginalEventPainter.prototype._paintEventIcon=function(e,t,i,n){var a=e.getIcon();
a=null!=a?a:n.icon;var r=n.trackOffset+t*n.trackIncrement+n.trackHeight/2,s=Math.round(r-n.iconHeight/2),l=SimileAjax.Graphics.createTranslucentImage(a),o=this._timeline.getDocument().createElement("div");
return o.className="timeline-event-icon",o.style.left=i+"px",o.style.top=s+"px",o.appendChild(l),null!=e._title&&(o.title=e._title),this._eventLayer.appendChild(o),{left:i,top:s,width:n.iconWidth,height:n.iconHeight,elmt:o}
},Timeline.OriginalEventPainter.prototype._paintEventLabel=function(e,t,i,n,a,r){var s=this._timeline.getDocument(),l=s.createElement("div");
l.className="timeline-event-label",l.style.left=i+"px",l.style.width=a+"px",l.style.top=n+"px",l.innerHTML=t,null!=e._title&&(l.title=e._title);
var o=e.getTextColor();null==o&&(o=e.getColor()),null!=o&&(l.style.color=o);var h=e.getClassName();
return h&&(l.className+=" "+h),this._eventLayer.appendChild(l),{left:i,top:n,width:a,height:r,elmt:l}
},Timeline.OriginalEventPainter.prototype._paintEventTape=function(e,t,i,n,a,r,s,l){var o=n-i,h=l.event.tape.height,m=s.trackOffset+t*s.trackIncrement,c=this._timeline.getDocument().createElement("div");
return c.className="timeline-event-tape",c.style.left=i+"px",c.style.width=o+"px",c.style.top=m+"px",null!=e._title&&(c.title=e._title),SimileAjax.Graphics.setOpacity(c,r),this._eventLayer.appendChild(c),{left:i,top:m,width:o,height:h,elmt:c}
},Timeline.OriginalEventPainter.prototype._createHighlightDiv=function(e,t,i){if(e>=0){var n=this._timeline.getDocument(),a=i.event,r=(a.highlightColors[Math.min(e,a.highlightColors.length-1)],n.createElement("div"));
r.style.position="absolute",r.style.overflow="hidden",r.style.left=t.left-2+"px",r.style.width=t.width+4+"px",r.style.top=t.top-2+"px",r.style.height=t.height+4+"px",this._highlightLayer.appendChild(r)
}},Timeline.OriginalEventPainter.prototype._onClickInstantEvent=function(e,t,i){var n=SimileAjax.DOM.getPageCoordinates(e);
return this._showBubble(n.left+Math.ceil(e.offsetWidth/2),n.top+Math.ceil(e.offsetHeight/2),i),this._fireOnSelect(i.getID()),t.cancelBubble=!0,SimileAjax.DOM.cancelEvent(t),!1
},Timeline.OriginalEventPainter.prototype._onClickDurationEvent=function(e,t,i){if("pageX"in t)var n=t.pageX,a=t.pageY;
else var r=SimileAjax.DOM.getPageCoordinates(e),n=t.offsetX+r.left,a=t.offsetY+r.top;
return this._showBubble(n,a,i),this._fireOnSelect(i.getID()),t.cancelBubble=!0,SimileAjax.DOM.cancelEvent(t),!1
},Timeline.OriginalEventPainter.prototype.showBubble=function(e){var t=this._eventIdToElmt[e.getID()];
if(t){var i=SimileAjax.DOM.getPageCoordinates(t);this._showBubble(i.left+t.offsetWidth/2,i.top+t.offsetHeight/2,e)
}},Timeline.OriginalEventPainter.prototype._showBubble=function(e,t,i){var n=document.createElement("div");
i.fillInfoBubble(n,this._params.theme,this._band.getLabeller()),SimileAjax.WindowManager.cancelPopups(),SimileAjax.Graphics.createBubbleForContentAndPoint(n,e,t,this._params.theme.event.bubble.width)
},Timeline.OriginalEventPainter.prototype._fireOnSelect=function(e){for(var t=0;t<this._onSelectListeners.length;t++)this._onSelectListeners[t](e)
},Timeline.OverviewEventPainter=function(e){this._params=e,this._onSelectListeners=[],this._filterMatcher=null,this._highlightMatcher=null
},Timeline.OverviewEventPainter.prototype.initialize=function(e,t){this._band=e,this._timeline=t,this._eventLayer=null,this._highlightLayer=null
},Timeline.OverviewEventPainter.prototype.addOnSelectListener=function(e){this._onSelectListeners.push(e)
},Timeline.OverviewEventPainter.prototype.removeOnSelectListener=function(e){for(var t=0;t<this._onSelectListeners.length;t++)if(this._onSelectListeners[t]==e){this._onSelectListeners.splice(t,1);
break}},Timeline.OverviewEventPainter.prototype.getFilterMatcher=function(){return this._filterMatcher
},Timeline.OverviewEventPainter.prototype.setFilterMatcher=function(e){this._filterMatcher=e
},Timeline.OverviewEventPainter.prototype.getHighlightMatcher=function(){return this._highlightMatcher
},Timeline.OverviewEventPainter.prototype.setHighlightMatcher=function(e){this._highlightMatcher=e
},Timeline.OverviewEventPainter.prototype.paint=function(){var e=this._band.getEventSource();
if(null!=e){this._prepareForPainting();for(var t=this._params.theme.event,i={trackOffset:t.overviewTrack.offset,trackHeight:t.overviewTrack.height,trackGap:t.overviewTrack.gap,trackIncrement:t.overviewTrack.height+t.overviewTrack.gap},n=this._band.getMinDate(),a=this._band.getMaxDate(),r=null!=this._filterMatcher?this._filterMatcher:function(){return!0
},s=null!=this._highlightMatcher?this._highlightMatcher:function(){return-1},l=e.getEventReverseIterator(n,a);l.hasNext();){var o=l.next();
r(o)&&this.paintEvent(o,i,this._params.theme,s(o))}this._highlightLayer.style.display="block",this._eventLayer.style.display="block"
}},Timeline.OverviewEventPainter.prototype.softPaint=function(){},Timeline.OverviewEventPainter.prototype._prepareForPainting=function(){var e=this._band;
this._tracks=[],null!=this._highlightLayer&&e.removeLayerDiv(this._highlightLayer),this._highlightLayer=e.createLayerDiv(105,"timeline-band-highlights"),this._highlightLayer.style.display="none",null!=this._eventLayer&&e.removeLayerDiv(this._eventLayer),this._eventLayer=e.createLayerDiv(110,"timeline-band-events"),this._eventLayer.style.display="none"
},Timeline.OverviewEventPainter.prototype.paintEvent=function(e,t,i,n){e.isInstant()?this.paintInstantEvent(e,t,i,n):this.paintDurationEvent(e,t,i,n)
},Timeline.OverviewEventPainter.prototype.paintInstantEvent=function(e,t,i,n){var a=e.getStart(),r=Math.round(this._band.dateToPixelOffset(a)),s=e.getColor();
s=null!=s?s:i.event.duration.color;var l=this._paintEventTick(e,r,s,100,t,i);this._createHighlightDiv(n,l,i)
},Timeline.OverviewEventPainter.prototype.paintDurationEvent=function(e,t,i,n){for(var a=e.getLatestStart(),r=e.getEarliestEnd(),s=Math.round(this._band.dateToPixelOffset(a)),l=Math.round(this._band.dateToPixelOffset(r)),o=0;o<this._tracks.length&&!(l<this._tracks[o]);o++);this._tracks[o]=l;
var h=e.getColor();h=null!=h?h:i.event.duration.color;var m=this._paintEventTape(e,o,s,l,h,100,t,i);
this._createHighlightDiv(n,m,i)},Timeline.OverviewEventPainter.prototype._paintEventTape=function(e,t,i,n,a,r,s){var l=s.trackOffset+t*s.trackIncrement,o=n-i,h=s.trackHeight,m=this._timeline.getDocument().createElement("div");
return m.className="timeline-small-event-tape",m.style.left=i+"px",m.style.width=o+"px",m.style.top=l+"px",100>r&&SimileAjax.Graphics.setOpacity(m,r),this._eventLayer.appendChild(m),{left:i,top:l,width:o,height:h,elmt:m}
},Timeline.OverviewEventPainter.prototype._paintEventTick=function(e,t,i,n,a,r){var s=r.event.overviewTrack.tickHeight,l=a.trackOffset-s,o=1,h=this._timeline.getDocument().createElement("div");
h.className="timeline-small-event-icon",h.style.left=t+"px",h.style.top=l+"px";var m=e.getClassName();
return m&&(h.className+=" small-"+m),100>n&&SimileAjax.Graphics.setOpacity(h,n),this._eventLayer.appendChild(h),{left:t,top:l,width:o,height:s,elmt:h}
},Timeline.OverviewEventPainter.prototype._createHighlightDiv=function(e,t,i){if(e>=0){var n=this._timeline.getDocument(),a=i.event,r=a.highlightColors[Math.min(e,a.highlightColors.length-1)],s=n.createElement("div");
s.style.position="absolute",s.style.overflow="hidden",s.style.left=t.left-1+"px",s.style.width=t.width+2+"px",s.style.top=t.top-1+"px",s.style.height=t.height+2+"px",s.style.background=r,this._highlightLayer.appendChild(s)
}},Timeline.OverviewEventPainter.prototype.showBubble=function(){},Timeline.DefaultEventSource=function(e){this._events=e instanceof Object?e:new SimileAjax.EventIndex,this._listeners=[]
},Timeline.DefaultEventSource.prototype.addListener=function(e){this._listeners.push(e)
},Timeline.DefaultEventSource.prototype.removeListener=function(e){for(var t=0;t<this._listeners.length;t++)if(this._listeners[t]==e){this._listeners.splice(t,1);
break}},Timeline.DefaultEventSource.prototype.loadXML=function(e,t){for(var i=this._getBaseURL(t),n=e.documentElement.getAttribute("wiki-url"),a=e.documentElement.getAttribute("wiki-section"),r=e.documentElement.getAttribute("date-time-format"),s=this._events.getUnit().getParser(r),l=e.documentElement.firstChild,o=!1;null!=l;){if(1==l.nodeType){var h="";
null!=l.firstChild&&3==l.firstChild.nodeType&&(h=l.firstChild.nodeValue);var m=new Timeline.DefaultEventSource.Event(l.getAttribute("id"),s(l.getAttribute("start")),s(l.getAttribute("end")),s(l.getAttribute("latestStart")),s(l.getAttribute("earliestEnd")),"true"!=l.getAttribute("isDuration"),l.getAttribute("title"),h,this._resolveRelativeURL(l.getAttribute("image"),i),this._resolveRelativeURL(l.getAttribute("link"),i),this._resolveRelativeURL(l.getAttribute("icon"),i),l.getAttribute("color"),l.getAttribute("textColor"),l.getAttribute("classname"));
m._node=l,m.getProperty=function(e){return this._node.getAttribute(e)},m.setWikiInfo(n,a),this._events.add(m),o=!0
}l=l.nextSibling}o&&this._fire("onAddMany",[])},Timeline.DefaultEventSource.prototype.loadJSON=function(e,t){var i=this._getBaseURL(t),n=!1;
if(e&&e.events)for(var a=("wikiURL"in e?e.wikiURL:null),r=("wikiSection"in e?e.wikiSection:null),s=("dateTimeFormat"in e?e.dateTimeFormat:null),l=this._events.getUnit().getParser(s),o=0;o<e.events.length;o++){var h=e.events[o],m=new Timeline.DefaultEventSource.Event("id"in h?h.id:void 0,l(h.start),l(h.end),l(h.latestStart),l(h.earliestEnd),h.isDuration||!1,h.title,h.description,this._resolveRelativeURL(h.image,i),this._resolveRelativeURL(h.link,i),this._resolveRelativeURL(h.icon,i),h.color,h.textColor,h.classname);
m._obj=h,m.getProperty=function(e){return this._obj[e]},m.setWikiInfo(a,r),this._events.add(m),n=!0
}n&&this._fire("onAddMany",[])},Timeline.DefaultEventSource.prototype.loadSPARQL=function(e,t){var i=this._getBaseURL(t),n="iso8601",a=this._events.getUnit().getParser(n);
if(null!=e){for(var r=e.documentElement.firstChild;null!=r&&(1!=r.nodeType||"results"!=r.nodeName);)r=r.nextSibling;
var s=null,l=null;null!=r&&(s=r.getAttribute("wiki-url"),l=r.getAttribute("wiki-section"),r=r.firstChild);
for(var o=!1;null!=r;){if(1==r.nodeType){for(var h={},m=r.firstChild;null!=m;)1==m.nodeType&&null!=m.firstChild&&1==m.firstChild.nodeType&&null!=m.firstChild.firstChild&&3==m.firstChild.firstChild.nodeType&&(h[m.getAttribute("name")]=m.firstChild.firstChild.nodeValue),m=m.nextSibling;
null==h.start&&null!=h.date&&(h.start=h.date);var c=new Timeline.DefaultEventSource.Event(h.id,a(h.start),a(h.end),a(h.latestStart),a(h.earliestEnd),"true"!=h.isDuration,h.title,h.description,this._resolveRelativeURL(h.image,i),this._resolveRelativeURL(h.link,i),this._resolveRelativeURL(h.icon,i),h.color,h.textColor,h.classname);
c._bindings=h,c.getProperty=function(e){return this._bindings[e]},c.setWikiInfo(s,l),this._events.add(c),o=!0
}r=r.nextSibling}o&&this._fire("onAddMany",[])}},Timeline.DefaultEventSource.prototype.add=function(e){this._events.add(e),this._fire("onAddOne",[e])
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
if(e in n)try{n[e].apply(n,t)}catch(a){SimileAjax.Debug.exception(a)}}},Timeline.DefaultEventSource.prototype._getBaseURL=function(e){if(e.indexOf("://")<0){var t=this._getBaseURL(document.location.href);
e="/"==e.substr(0,1)?t.substr(0,t.indexOf("/",t.indexOf("://")+3))+e:t+e}var i=e.lastIndexOf("/");
return 0>i?"":e.substr(0,i+1)},Timeline.DefaultEventSource.prototype._resolveRelativeURL=function(e,t){return null==e||""==e?e:e.indexOf("://")>0?e:"/"==e.substr(0,1)?t.substr(0,t.indexOf("/",t.indexOf("://")+3))+e:t+e
},Timeline.DefaultEventSource.Event=function(e,t,i,n,a,r,s,l,o,h,m,c,_,p,u){e=e?e.trim():"",this._id=e.length>0?e:"e"+Math.floor(1e6*Math.random()),this._instant=r||null==i,this._start=t,this._end=null!=i?i:t,this._latestStart=null!=n?n:r?this._end:this._start,this._earliestEnd=null!=a?a:r?this._start:this._end,this._text=SimileAjax.HTML.deEntify(s),this._description=SimileAjax.HTML.deEntify(l),this._image=null!=o&&""!=o?o:null,this._link=null!=h&&""!=h?h:null,this._title=null!=p?p:null,this._icon=null!=m&&""!=m?m:null,this._color=null!=c&&""!=c?c:null,this._textColor=null!=_&&""!=_?_:null,this._classname=null!=u&&""!=u?u:null,this._wikiURL=null,this._wikiSection=null
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
},fillInfoBubble:function(e,t,i){var n=e.ownerDocument,a=this.getText(),r=this.getLink(),s=this.getImage();
if(null!=s){var l=n.createElement("img");l.src=s,t.event.bubble.imageStyler(l),e.appendChild(l)
}var o=n.createElement("div"),h=n.createTextNode(a);if(null!=r){var m=n.createElement("a");
m.href=r,m.appendChild(h),o.appendChild(m)}else o.appendChild(h);t.event.bubble.titleStyler(o),e.appendChild(o);
var c=n.createElement("div");this.fillDescription(c),t.event.bubble.bodyStyler(c),e.appendChild(c);
var _=n.createElement("div");this.fillTime(_,i),t.event.bubble.timeStyler(_),e.appendChild(_);
var p=n.createElement("div");this.fillWikiInfo(p),t.event.bubble.wikiStyler(p),e.appendChild(p)
}},Timeline.ClassicTheme=new Object,Timeline.ClassicTheme.implementations=[],Timeline.ClassicTheme.create=function(e){null==e&&(e=Timeline.getDefaultLocale());
var t=Timeline.ClassicTheme.implementations[e];return null==t&&(t=Timeline.ClassicTheme._Impl),new t
},Timeline.ClassicTheme._Impl=function(){this.firstDayOfWeek=0,this.ether={backgroundColors:[],highlightOpacity:50,interval:{line:{show:!0,opacity:25},weekend:{opacity:30},marker:{hAlign:"Bottom",vAlign:"Right"}}},this.event={track:{height:10,gap:2},overviewTrack:{offset:20,tickHeight:6,height:2,gap:1},tape:{height:4},instant:{icon:Timeline.urlPrefix+"images/dull-blue-circle.png",iconWidth:10,iconHeight:10,impreciseOpacity:20},duration:{impreciseOpacity:20},label:{backgroundOpacity:50,offsetFromLine:3},highlightColors:[],bubble:{width:250,height:125,titleStyler:function(e){e.className="timeline-event-bubble-title"
},bodyStyler:function(e){e.className="timeline-event-bubble-body"},imageStyler:function(e){e.className="timeline-event-bubble-image"
},wikiStyler:function(e){e.className="timeline-event-bubble-wiki"},timeStyler:function(e){e.className="timeline-event-bubble-time"
}}},this.zoom=!0},Timeline.strings={},Timeline.getDefaultLocale=function(){return Timeline.clientLocale
},Timeline.create=function(e,t,i,n){return new Timeline._Impl(e,t,i,n)},Timeline.HORIZONTAL=0,Timeline.VERTICAL=1,Timeline._defaultTheme=null,Timeline.createBandInfo=function(e){var t="theme"in e?e.theme:Timeline.getDefaultTheme(),i="eventSource"in e?e.eventSource:null,n=new Timeline.LinearEther({centersOn:"date"in e?e.date:new Date,interval:SimileAjax.DateTime.gregorianUnitLengths[e.intervalUnit],pixelsPerInterval:e.intervalPixels,theme:t}),a=new Timeline.GregorianEtherPainter({unit:e.intervalUnit,multiple:"multiple"in e?e.multiple:1,theme:t,align:"align"in e?e.align:void 0}),r={showText:"showEventText"in e?e.showEventText:!0,theme:t};
if("eventPainterParams"in e)for(var s in e.eventPainterParams)r[s]=e.eventPainterParams[s];
"trackHeight"in e&&(r.trackHeight=e.trackHeight),"trackGap"in e&&(r.trackGap=e.trackGap);
var l,o="overview"in e&&e.overview?"overview":"layout"in e?e.layout:"original";if("eventPainter"in e)l=new e.eventPainter(r);
else switch(o){case"overview":l=new Timeline.OverviewEventPainter(r);break;case"detailed":l=new Timeline.DetailedEventPainter(r);
break;default:l=new Timeline.OriginalEventPainter(r)}return{width:e.width,eventSource:i,timeZone:"timeZone"in e?e.timeZone:0,ether:n,etherPainter:a,eventPainter:l,theme:t,zoomIndex:"zoomIndex"in e?e.zoomIndex:0,zoomSteps:"zoomSteps"in e?e.zoomSteps:null}
},Timeline.createHotZoneBandInfo=function(e){var t="theme"in e?e.theme:Timeline.getDefaultTheme(),i="eventSource"in e?e.eventSource:null,n=new Timeline.HotZoneEther({centersOn:"date"in e?e.date:new Date,interval:SimileAjax.DateTime.gregorianUnitLengths[e.intervalUnit],pixelsPerInterval:e.intervalPixels,zones:e.zones,theme:t}),a=new Timeline.HotZoneGregorianEtherPainter({unit:e.intervalUnit,zones:e.zones,theme:t,align:"align"in e?e.align:void 0}),r={showText:"showEventText"in e?e.showEventText:!0,theme:t};
if("eventPainterParams"in e)for(var s in e.eventPainterParams)r[s]=e.eventPainterParams[s];
"trackHeight"in e&&(r.trackHeight=e.trackHeight),"trackGap"in e&&(r.trackGap=e.trackGap);
var l,o="overview"in e&&e.overview?"overview":"layout"in e?e.layout:"original";if("eventPainter"in e)l=new e.eventPainter(r);
else switch(o){case"overview":l=new Timeline.OverviewEventPainter(r);break;case"detailed":l=new Timeline.DetailedEventPainter(r);
break;default:l=new Timeline.OriginalEventPainter(r)}return{width:e.width,eventSource:i,timeZone:"timeZone"in e?e.timeZone:0,ether:n,etherPainter:a,eventPainter:l,theme:t,zoomIndex:"zoomIndex"in e?e.zoomIndex:0,zoomSteps:"zoomSteps"in e?e.zoomSteps:null}
},Timeline.getDefaultTheme=function(){return null==Timeline._defaultTheme&&(Timeline._defaultTheme=Timeline.ClassicTheme.create(Timeline.getDefaultLocale())),Timeline._defaultTheme
},Timeline.setDefaultTheme=function(e){Timeline._defaultTheme=e},Timeline.loadXML=function(e,t){var i=function(t){alert("Failed to load data xml from "+e+"\n"+t)
},n=function(i){var n=i.responseXML;!n.documentElement&&i.responseStream&&n.load(i.responseStream),t(n,e)
};SimileAjax.XmlHttp.get(e,i,n)},Timeline.loadJSON=function(url,f){var fError=function(e){alert("Failed to load json data from "+url+"\n"+e)
},fDone=function(xmlhttp){f(eval("("+xmlhttp.responseText+")"),url)};SimileAjax.XmlHttp.get(url,fError,fDone)
},Timeline._Impl=function(e,t,i,n){SimileAjax.WindowManager.initialize(),this._containerDiv=e,this._bandInfos=t,this._orientation=null==i?Timeline.HORIZONTAL:i,this._unit=null!=n?n:SimileAjax.NativeDateUnit,this._initialize()
},Timeline._Impl.prototype.dispose=function(){for(var e=0;e<this._bands.length;e++)this._bands[e].dispose();
this._bands=null,this._bandInfos=null,this._containerDiv.innerHTML=""},Timeline._Impl.prototype.getBandCount=function(){return this._bands.length
},Timeline._Impl.prototype.getBand=function(e){return this._bands[e]},Timeline._Impl.prototype.layout=function(){this._distributeWidths()
},Timeline._Impl.prototype.paint=function(){for(var e=0;e<this._bands.length;e++)this._bands[e].paint()
},Timeline._Impl.prototype.getDocument=function(){return this._containerDiv.ownerDocument
},Timeline._Impl.prototype.addDiv=function(e){this._containerDiv.appendChild(e)},Timeline._Impl.prototype.removeDiv=function(e){this._containerDiv.removeChild(e)
},Timeline._Impl.prototype.isHorizontal=function(){return this._orientation==Timeline.HORIZONTAL
},Timeline._Impl.prototype.isVertical=function(){return this._orientation==Timeline.VERTICAL
},Timeline._Impl.prototype.getPixelLength=function(){return this._orientation==Timeline.HORIZONTAL?this._containerDiv.offsetWidth:this._containerDiv.offsetHeight
},Timeline._Impl.prototype.getPixelWidth=function(){return this._orientation==Timeline.VERTICAL?this._containerDiv.offsetWidth:this._containerDiv.offsetHeight
},Timeline._Impl.prototype.getUnit=function(){return this._unit},Timeline._Impl.prototype.loadXML=function(e,t){var i=this,n=function(t){alert("Failed to load data xml from "+e+"\n"+t),i.hideLoadingMessage()
},a=function(n){try{var a=n.responseXML;!a.documentElement&&n.responseStream&&a.load(n.responseStream),t(a,e)
}finally{i.hideLoadingMessage()}};this.showLoadingMessage(),window.setTimeout(function(){SimileAjax.XmlHttp.get(e,n,a)
},0)},Timeline._Impl.prototype.loadJSON=function(url,f){var tl=this,fError=function(e){alert("Failed to load json data from "+url+"\n"+e),tl.hideLoadingMessage()
},fDone=function(xmlhttp){try{f(eval("("+xmlhttp.responseText+")"),url)}finally{tl.hideLoadingMessage()
}};this.showLoadingMessage(),window.setTimeout(function(){SimileAjax.XmlHttp.get(url,fError,fDone)
},0)},Timeline._Impl.prototype._initialize=function(){var e=this._containerDiv,t=e.ownerDocument;
e.className=e.className.split(" ").concat("timeline-container").join(" ");var i=this.isHorizontal()?"horizontal":"vertical";
for(e.className+=" timeline-"+i;e.firstChild;)e.removeChild(e.firstChild);var n=SimileAjax.Graphics.createTranslucentImage(Timeline.urlPrefix+(this.isHorizontal()?"images/copyright-vertical.png":"images/copyright.png"));
n.className="timeline-copyright",n.title="Timeline (c) SIMILE - http://simile.mit.edu/timeline/",SimileAjax.DOM.registerEvent(n,"click",function(){window.location="http://simile.mit.edu/timeline/"
}),e.appendChild(n),this._bands=[];for(var a=0;a<this._bandInfos.length;a++){var r=new Timeline._Band(this,this._bandInfos[a],a);
this._bands.push(r)}this._distributeWidths();for(var a=0;a<this._bandInfos.length;a++){var s=this._bandInfos[a];
"syncWith"in s&&this._bands[a].setSyncWithBand(this._bands[s.syncWith],"highlight"in s?s.highlight:!1)
}var l=SimileAjax.Graphics.createMessageBubble(t);l.containerDiv.className="timeline-message-container",e.appendChild(l.containerDiv),l.contentDiv.className="timeline-message",l.contentDiv.innerHTML="<img src='"+Timeline.urlPrefix+"images/progress-running.gif' /> Loading...",this.showLoadingMessage=function(){l.containerDiv.style.display="block"
},this.hideLoadingMessage=function(){l.containerDiv.style.display="none"}},Timeline._Impl.prototype._distributeWidths=function(){for(var e=this.getPixelLength(),t=this.getPixelWidth(),i=0,n=0;n<this._bands.length;n++){var a=this._bands[n],r=this._bandInfos[n],s=r.width,l=s.indexOf("%");
if(l>0)var o=parseInt(s.substr(0,l)),h=o*t/100;else var h=parseInt(s);a.setBandShiftAndWidth(i,h),a.setViewLength(e),i+=h
}},Timeline._Impl.prototype.zoom=function(e,t,i,n){var a=new RegExp("^timeline-band-([0-9]+)$"),r=null,s=a.exec(n.id);
s&&(r=parseInt(s[1])),null!=r&&this._bands[r].zoom(e,t,i,n),this.paint()},Timeline._Band=function(e,t,i){this._timeline=e,this._bandInfo=t,this._index=i,this._locale="locale"in t?t.locale:Timeline.getDefaultLocale(),this._timeZone="timeZone"in t?t.timeZone:0,this._labeller="labeller"in t?t.labeller:"createLabeller"in e.getUnit()?e.getUnit().createLabeller(this._locale,this._timeZone):new Timeline.GregorianDateLabeller(this._locale,this._timeZone),this._theme=t.theme,this._zoomIndex="zoomIndex"in t?t.zoomIndex:0,this._zoomSteps="zoomSteps"in t?t.zoomSteps:null,this._dragging=!1,this._changing=!1,this._originalScrollSpeed=5,this._scrollSpeed=this._originalScrollSpeed,this._onScrollListeners=[];
var n=this;this._syncWithBand=null,this._syncWithBandHandler=function(){n._onHighlightBandScroll()
},this._selectorListener=function(){n._onHighlightBandScroll()};var a=this._timeline.getDocument().createElement("div");
a.className="timeline-band-input",this._timeline.addDiv(a),this._keyboardInput=document.createElement("input"),this._keyboardInput.type="text",a.appendChild(this._keyboardInput),SimileAjax.DOM.registerEventWithObject(this._keyboardInput,"keydown",this,"_onKeyDown"),SimileAjax.DOM.registerEventWithObject(this._keyboardInput,"keyup",this,"_onKeyUp"),this._div=this._timeline.getDocument().createElement("div"),this._div.id="timeline-band-"+i,this._div.className="timeline-band timeline-band-"+i,this._timeline.addDiv(this._div),SimileAjax.DOM.registerEventWithObject(this._div,"mousedown",this,"_onMouseDown"),SimileAjax.DOM.registerEventWithObject(this._div,"mousemove",this,"_onMouseMove"),SimileAjax.DOM.registerEventWithObject(this._div,"mouseup",this,"_onMouseUp"),SimileAjax.DOM.registerEventWithObject(this._div,"mouseout",this,"_onMouseOut"),SimileAjax.DOM.registerEventWithObject(this._div,"dblclick",this,"_onDblClick"),SimileAjax.Platform.browser.isFirefox?SimileAjax.DOM.registerEventWithObject(this._div,"DOMMouseScroll",this,"_onMouseScroll"):SimileAjax.DOM.registerEventWithObject(this._div,"mousewheel",this,"_onMouseScroll"),this._innerDiv=this._timeline.getDocument().createElement("div"),this._innerDiv.className="timeline-band-inner",this._div.appendChild(this._innerDiv),this._ether=t.ether,t.ether.initialize(this,e),this._etherPainter=t.etherPainter,t.etherPainter.initialize(this,e),this._eventSource=t.eventSource,this._eventSource&&(this._eventListener={onAddMany:function(){n._onAddMany()
},onClear:function(){n._onClear()}},this._eventSource.addListener(this._eventListener)),this._eventPainter=t.eventPainter,t.eventPainter.initialize(this,e),this._decorators="decorators"in t?t.decorators:[];
for(var r=0;r<this._decorators.length;r++)this._decorators[r].initialize(this,e)},Timeline._Band.SCROLL_MULTIPLES=5,Timeline._Band.prototype.dispose=function(){this.closeBubble(),this._eventSource&&(this._eventSource.removeListener(this._eventListener),this._eventListener=null,this._eventSource=null),this._timeline=null,this._bandInfo=null,this._labeller=null,this._ether=null,this._etherPainter=null,this._eventPainter=null,this._decorators=null,this._onScrollListeners=null,this._syncWithBandHandler=null,this._selectorListener=null,this._div=null,this._innerDiv=null,this._keyboardInput=null
},Timeline._Band.prototype.addOnScrollListener=function(e){this._onScrollListeners.push(e)
},Timeline._Band.prototype.removeOnScrollListener=function(e){for(var t=0;t<this._onScrollListeners.length;t++)if(this._onScrollListeners[t]==e){this._onScrollListeners.splice(t,1);
break}},Timeline._Band.prototype.setSyncWithBand=function(e,t){this._syncWithBand&&this._syncWithBand.removeOnScrollListener(this._syncWithBandHandler),this._syncWithBand=e,this._syncWithBand.addOnScrollListener(this._syncWithBandHandler),this._highlight=t,this._positionHighlight()
},Timeline._Band.prototype.getLocale=function(){return this._locale},Timeline._Band.prototype.getTimeZone=function(){return this._timeZone
},Timeline._Band.prototype.getLabeller=function(){return this._labeller},Timeline._Band.prototype.getIndex=function(){return this._index
},Timeline._Band.prototype.getEther=function(){return this._ether},Timeline._Band.prototype.getEtherPainter=function(){return this._etherPainter
},Timeline._Band.prototype.getEventSource=function(){return this._eventSource},Timeline._Band.prototype.getEventPainter=function(){return this._eventPainter
},Timeline._Band.prototype.layout=function(){this.paint()},Timeline._Band.prototype.paint=function(){this._etherPainter.paint(),this._paintDecorators(),this._paintEvents()
},Timeline._Band.prototype.softLayout=function(){this.softPaint()},Timeline._Band.prototype.softPaint=function(){this._etherPainter.softPaint(),this._softPaintDecorators(),this._softPaintEvents()
},Timeline._Band.prototype.setBandShiftAndWidth=function(e,t){var i=this._keyboardInput.parentNode,n=e+Math.floor(t/2);
this._timeline.isHorizontal()?(this._div.style.top=e+"px",this._div.style.height=t+"px",i.style.top=n+"px",i.style.left="-1em"):(this._div.style.left=e+"px",this._div.style.width=t+"px",i.style.left=n+"px",i.style.top="-1em")
},Timeline._Band.prototype.getViewWidth=function(){return this._timeline.isHorizontal()?this._div.offsetHeight:this._div.offsetWidth
},Timeline._Band.prototype.setViewLength=function(e){this._viewLength=e,this._recenterDiv(),this._onChanging()
},Timeline._Band.prototype.getViewLength=function(){return this._viewLength},Timeline._Band.prototype.getTotalViewLength=function(){return Timeline._Band.SCROLL_MULTIPLES*this._viewLength
},Timeline._Band.prototype.getViewOffset=function(){return this._viewOffset},Timeline._Band.prototype.getMinDate=function(){return this._ether.pixelOffsetToDate(this._viewOffset)
},Timeline._Band.prototype.getMaxDate=function(){return this._ether.pixelOffsetToDate(this._viewOffset+Timeline._Band.SCROLL_MULTIPLES*this._viewLength)
},Timeline._Band.prototype.getMinVisibleDate=function(){return this._ether.pixelOffsetToDate(0)
},Timeline._Band.prototype.getMaxVisibleDate=function(){return this._ether.pixelOffsetToDate(this._viewLength)
},Timeline._Band.prototype.getCenterVisibleDate=function(){return this._ether.pixelOffsetToDate(this._viewLength/2)
},Timeline._Band.prototype.setMinVisibleDate=function(e){this._changing||this._moveEther(Math.round(-this._ether.dateToPixelOffset(e)))
},Timeline._Band.prototype.setMaxVisibleDate=function(e){this._changing||this._moveEther(Math.round(this._viewLength-this._ether.dateToPixelOffset(e)))
},Timeline._Band.prototype.setCenterVisibleDate=function(e){this._changing||this._moveEther(Math.round(this._viewLength/2-this._ether.dateToPixelOffset(e)))
},Timeline._Band.prototype.dateToPixelOffset=function(e){return this._ether.dateToPixelOffset(e)-this._viewOffset
},Timeline._Band.prototype.pixelOffsetToDate=function(e){return this._ether.pixelOffsetToDate(e+this._viewOffset)
},Timeline._Band.prototype.createLayerDiv=function(e,t){var i=this._timeline.getDocument().createElement("div");
i.className="timeline-band-layer"+("string"==typeof t?" "+t:""),i.style.zIndex=e,this._innerDiv.appendChild(i);
var n=this._timeline.getDocument().createElement("div");return n.className="timeline-band-layer-inner",n.style.cursor=SimileAjax.Platform.browser.isIE?"move":"-moz-grab",i.appendChild(n),n
},Timeline._Band.prototype.removeLayerDiv=function(e){this._innerDiv.removeChild(e.parentNode)
},Timeline._Band.prototype.scrollToCenter=function(e,t){var i=this._ether.dateToPixelOffset(e);
i<-this._viewLength/2?this.setCenterVisibleDate(this.pixelOffsetToDate(i+this._viewLength)):i>3*this._viewLength/2&&this.setCenterVisibleDate(this.pixelOffsetToDate(i-this._viewLength)),this._autoScroll(Math.round(this._viewLength/2-this._ether.dateToPixelOffset(e)),t)
},Timeline._Band.prototype.showBubbleForEvent=function(e){var t=this.getEventSource().getEvent(e);
if(t){var i=this;this.scrollToCenter(t.getStart(),function(){i._eventPainter.showBubble(t)
})}},Timeline._Band.prototype.zoom=function(e,t){if(this._theme.zoom&&this._zoomSteps){t+=this._viewOffset;
var i=this._ether.pixelOffsetToDate(t),n=this._ether.zoom(e);this._etherPainter.zoom(n),this._moveEther(Math.round(-this._ether.dateToPixelOffset(i))),this._moveEther(t)
}},Timeline._Band.prototype._onMouseDown=function(e,t){this.closeBubble(),this._dragging=!0,this._dragX=t.clientX,this._dragY=t.clientY
},Timeline._Band.prototype._onMouseMove=function(e,t){if(this._dragging){var i=t.clientX-this._dragX,n=t.clientY-this._dragY;
this._dragX=t.clientX,this._dragY=t.clientY,this._moveEther(this._timeline.isHorizontal()?i:n),this._positionHighlight()
}},Timeline._Band.prototype._onMouseUp=function(){this._dragging=!1,this._keyboardInput.focus()
},Timeline._Band.prototype._onMouseOut=function(e,t){var i=SimileAjax.DOM.getEventRelativeCoordinates(t,e);
i.x+=this._viewOffset,(i.x<0||i.x>e.offsetWidth||i.y<0||i.y>e.offsetHeight)&&(this._dragging=!1)
},Timeline._Band.prototype._onMouseScroll=function(e,t){var i=new Date;if(i=i.getTime(),!this._lastScrollTime||i-this._lastScrollTime>50){this._lastScrollTime=i;
var n=0;t.wheelDelta?n=t.wheelDelta/120:t.detail&&(n=-t.detail/3);var a=SimileAjax.DOM.getEventRelativeCoordinates(t,e);
if(0!=n){var r;n>0&&(r=!0),0>n&&(r=!1),this._timeline.zoom(r,a.x,a.y,e)}}t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0,t.preventDefault&&t.preventDefault(),t.returnValue=!1
},Timeline._Band.prototype._onDblClick=function(e,t){var i=SimileAjax.DOM.getEventRelativeCoordinates(t,e),n=i.x-(this._viewLength/2-this._viewOffset);
this._autoScroll(-n)},Timeline._Band.prototype._onKeyDown=function(e,t){if(!this._dragging){switch(t.keyCode){case 27:break;
case 37:case 38:this._scrollSpeed=Math.min(50,Math.abs(1.05*this._scrollSpeed)),this._moveEther(this._scrollSpeed);
break;case 39:case 40:this._scrollSpeed=-Math.min(50,Math.abs(1.05*this._scrollSpeed)),this._moveEther(this._scrollSpeed);
break;default:return!0}return this.closeBubble(),SimileAjax.DOM.cancelEvent(t),!1
}return!0},Timeline._Band.prototype._onKeyUp=function(e,t){if(!this._dragging){switch(this._scrollSpeed=this._originalScrollSpeed,t.keyCode){case 35:this.setCenterVisibleDate(this._eventSource.getLatestDate());
break;case 36:this.setCenterVisibleDate(this._eventSource.getEarliestDate());break;
case 33:this._autoScroll(this._timeline.getPixelLength());break;case 34:this._autoScroll(-this._timeline.getPixelLength());
break;default:return!0}return this.closeBubble(),SimileAjax.DOM.cancelEvent(t),!1
}return!0},Timeline._Band.prototype._autoScroll=function(e,t){var i=this,n=SimileAjax.Graphics.createAnimation(function(e,t){i._moveEther(t)
},0,e,1e3,t);n.run()},Timeline._Band.prototype._moveEther=function(e){this.closeBubble(),this._viewOffset+=e,this._ether.shiftPixels(-e),this._timeline.isHorizontal()?this._div.style.left=this._viewOffset+"px":this._div.style.top=this._viewOffset+"px",this._viewOffset>.5*-this._viewLength||this._viewOffset<-this._viewLength*(Timeline._Band.SCROLL_MULTIPLES-1.5)?this._recenterDiv():this.softLayout(),this._onChanging()
},Timeline._Band.prototype._onChanging=function(){this._changing=!0,this._fireOnScroll(),this._setSyncWithBandDate(),this._changing=!1
},Timeline._Band.prototype._fireOnScroll=function(){for(var e=0;e<this._onScrollListeners.length;e++)this._onScrollListeners[e](this)
},Timeline._Band.prototype._setSyncWithBandDate=function(){if(this._syncWithBand){var e=this._ether.pixelOffsetToDate(this.getViewLength()/2);
this._syncWithBand.setCenterVisibleDate(e)}},Timeline._Band.prototype._onHighlightBandScroll=function(){if(this._syncWithBand){var e=this._syncWithBand.getCenterVisibleDate(),t=this._ether.dateToPixelOffset(e);
this._moveEther(Math.round(this._viewLength/2-t)),this._highlight&&this._etherPainter.setHighlight(this._syncWithBand.getMinVisibleDate(),this._syncWithBand.getMaxVisibleDate())
}},Timeline._Band.prototype._onAddMany=function(){this._paintEvents()},Timeline._Band.prototype._onClear=function(){this._paintEvents()
},Timeline._Band.prototype._positionHighlight=function(){if(this._syncWithBand){var e=this._syncWithBand.getMinVisibleDate(),t=this._syncWithBand.getMaxVisibleDate();
this._highlight&&this._etherPainter.setHighlight(e,t)}},Timeline._Band.prototype._recenterDiv=function(){this._viewOffset=-this._viewLength*(Timeline._Band.SCROLL_MULTIPLES-1)/2,this._timeline.isHorizontal()?(this._div.style.left=this._viewOffset+"px",this._div.style.width=Timeline._Band.SCROLL_MULTIPLES*this._viewLength+"px"):(this._div.style.top=this._viewOffset+"px",this._div.style.height=Timeline._Band.SCROLL_MULTIPLES*this._viewLength+"px"),this.layout()
},Timeline._Band.prototype._paintEvents=function(){this._eventPainter.paint()},Timeline._Band.prototype._softPaintEvents=function(){this._eventPainter.softPaint()
},Timeline._Band.prototype._paintDecorators=function(){for(var e=0;e<this._decorators.length;e++)this._decorators[e].paint()
},Timeline._Band.prototype._softPaintDecorators=function(){for(var e=0;e<this._decorators.length;e++)this._decorators[e].softPaint()
},Timeline._Band.prototype.closeBubble=function(){SimileAjax.WindowManager.cancelPopups()
},Timeline.NativeDateUnit=new Object,Timeline.NativeDateUnit.createLabeller=function(e,t){return new Timeline.GregorianDateLabeller(e,t)
},Timeline.NativeDateUnit.makeDefaultValue=function(){return new Date},Timeline.NativeDateUnit.cloneValue=function(e){return new Date(e.getTime())
},Timeline.NativeDateUnit.getParser=function(e){return"string"==typeof e&&(e=e.toLowerCase()),"iso8601"==e||"iso 8601"==e?Timeline.DateTime.parseIso8601DateTime:Timeline.DateTime.parseGregorianDateTime
},Timeline.NativeDateUnit.parseFromObject=function(e){return Timeline.DateTime.parseGregorianDateTime(e)
},Timeline.NativeDateUnit.toNumber=function(e){return e.getTime()},Timeline.NativeDateUnit.fromNumber=function(e){return new Date(e)
},Timeline.NativeDateUnit.compare=function(e,t){var i,n;return i="object"==typeof e?e.getTime():Number(e),n="object"==typeof t?t.getTime():Number(t),i-n
},Timeline.NativeDateUnit.earlier=function(e,t){return Timeline.NativeDateUnit.compare(e,t)<0?e:t
},Timeline.NativeDateUnit.later=function(e,t){return Timeline.NativeDateUnit.compare(e,t)>0?e:t
},Timeline.NativeDateUnit.change=function(e,t){return new Date(e.getTime()+t)};