Timeline.DetailedEventPainter=function(e){this._params=e,this._onSelectListeners=[],this._filterMatcher=null,this._highlightMatcher=null,this._frc=null,this._eventIdToElmt={}
},Timeline.DetailedEventPainter.prototype.initialize=function(e,t){this._band=e,this._timeline=t,this._backLayer=null,this._eventLayer=null,this._lineLayer=null,this._highlightLayer=null,this._eventIdToElmt=null
},Timeline.DetailedEventPainter.prototype.addOnSelectListener=function(e){this._onSelectListeners.push(e)
},Timeline.DetailedEventPainter.prototype.removeOnSelectListener=function(e){for(var t=0;t<this._onSelectListeners.length;t++)if(this._onSelectListeners[t]==e){this._onSelectListeners.splice(t,1);
break}},Timeline.DetailedEventPainter.prototype.getFilterMatcher=function(){return this._filterMatcher
},Timeline.DetailedEventPainter.prototype.setFilterMatcher=function(e){this._filterMatcher=e
},Timeline.DetailedEventPainter.prototype.getHighlightMatcher=function(){return this._highlightMatcher
},Timeline.DetailedEventPainter.prototype.setHighlightMatcher=function(e){this._highlightMatcher=e
},Timeline.DetailedEventPainter.prototype.paint=function(){var e=this._band.getEventSource();
if(null!=e){this._eventIdToElmt={},this._prepareForPainting();for(var t=this._params.theme.event,i=Math.max(t.track.height,this._frc.getLineHeight()),n={trackOffset:Math.round(this._band.getViewWidth()/2-i/2),trackHeight:i,trackGap:t.track.gap,trackIncrement:i+t.track.gap,icon:t.instant.icon,iconWidth:t.instant.iconWidth,iconHeight:t.instant.iconHeight,labelWidth:t.label.width},r=this._band.getMinDate(),a=this._band.getMaxDate(),l=null!=this._filterMatcher?this._filterMatcher:function(){return!0
},s=null!=this._highlightMatcher?this._highlightMatcher:function(){return-1},o=e.getEventReverseIterator(r,a);o.hasNext();){var h=o.next();
l(h)&&this.paintEvent(h,n,this._params.theme,s(h))}this._highlightLayer.style.display="block",this._lineLayer.style.display="block",this._eventLayer.style.display="block"
}},Timeline.DetailedEventPainter.prototype.softPaint=function(){},Timeline.DetailedEventPainter.prototype._prepareForPainting=function(){var e=this._band;
if(null==this._backLayer){this._backLayer=this._band.createLayerDiv(0,"timeline-band-events"),this._backLayer.style.visibility="hidden";
var t=document.createElement("span");t.className="timeline-event-label",this._backLayer.appendChild(t),this._frc=SimileAjax.Graphics.getFontRenderingContext(t)
}this._frc.update(),this._lowerTracks=[],this._upperTracks=[],null!=this._highlightLayer&&e.removeLayerDiv(this._highlightLayer),this._highlightLayer=e.createLayerDiv(105,"timeline-band-highlights"),this._highlightLayer.style.display="none",null!=this._lineLayer&&e.removeLayerDiv(this._lineLayer),this._lineLayer=e.createLayerDiv(110,"timeline-band-lines"),this._lineLayer.style.display="none",null!=this._eventLayer&&e.removeLayerDiv(this._eventLayer),this._eventLayer=e.createLayerDiv(110,"timeline-band-events"),this._eventLayer.style.display="none"
},Timeline.DetailedEventPainter.prototype.paintEvent=function(e,t,i,n){e.isInstant()?this.paintInstantEvent(e,t,i,n):this.paintDurationEvent(e,t,i,n)
},Timeline.DetailedEventPainter.prototype.paintInstantEvent=function(e,t,i,n){e.isImprecise()?this.paintImpreciseInstantEvent(e,t,i,n):this.paintPreciseInstantEvent(e,t,i,n)
},Timeline.DetailedEventPainter.prototype.paintDurationEvent=function(e,t,i,n){e.isImprecise()?this.paintImpreciseDurationEvent(e,t,i,n):this.paintPreciseDurationEvent(e,t,i,n)
},Timeline.DetailedEventPainter.prototype.paintPreciseInstantEvent=function(e,t,i,n){var r=(this._timeline.getDocument(),e.getText()),a=e.getStart(),l=Math.round(this._band.dateToPixelOffset(a)),s=Math.round(l+t.iconWidth/2),o=Math.round(l-t.iconWidth/2),h=this._frc.computeSize(r),c=this._findFreeTrackForSolid(s,l),p=this._paintEventIcon(e,c,o,t,i),d=s+i.event.label.offsetFromLine,u=c,v=this._getTrackData(c);
Math.min(v.solid,v.text)>=d+h.width?(v.solid=o,v.text=d):(v.solid=o,d=l+i.event.label.offsetFromLine,u=this._findFreeTrackForText(c,d+h.width,function(e){e.line=l-2
}),this._getTrackData(u).text=o,this._paintEventLine(e,l,c,u,t,i));var _=Math.round(t.trackOffset+u*t.trackIncrement+t.trackHeight/2-h.height/2),m=this._paintEventLabel(e,r,d,_,h.width,h.height,i),f=this,g=function(t,i){return f._onClickInstantEvent(p.elmt,i,e)
};SimileAjax.DOM.registerEvent(p.elmt,"mousedown",g),SimileAjax.DOM.registerEvent(m.elmt,"mousedown",g),this._createHighlightDiv(n,p,i),this._eventIdToElmt[e.getID()]=p.elmt
},Timeline.DetailedEventPainter.prototype.paintImpreciseInstantEvent=function(e,t,i,n){var r=(this._timeline.getDocument(),e.getText()),a=e.getStart(),l=e.getEnd(),s=Math.round(this._band.dateToPixelOffset(a)),o=Math.round(this._band.dateToPixelOffset(l)),h=Math.round(s+t.iconWidth/2),c=Math.round(s-t.iconWidth/2),p=this._frc.computeSize(r),d=this._findFreeTrackForSolid(o,s),u=this._paintEventTape(e,d,s,o,i.event.instant.impreciseColor,i.event.instant.impreciseOpacity,t,i),v=this._paintEventIcon(e,d,c,t,i),_=this._getTrackData(d);
_.solid=c;var m,f=h+i.event.label.offsetFromLine,g=f+p.width;o>g?m=d:(f=s+i.event.label.offsetFromLine,g=f+p.width,m=this._findFreeTrackForText(d,g,function(e){e.line=s-2
}),this._getTrackData(m).text=c,this._paintEventLine(e,s,d,m,t,i));var T=Math.round(t.trackOffset+m*t.trackIncrement+t.trackHeight/2-p.height/2),y=this._paintEventLabel(e,r,f,T,p.width,p.height,i),E=this,I=function(t,i){return E._onClickInstantEvent(v.elmt,i,e)
};SimileAjax.DOM.registerEvent(v.elmt,"mousedown",I),SimileAjax.DOM.registerEvent(u.elmt,"mousedown",I),SimileAjax.DOM.registerEvent(y.elmt,"mousedown",I),this._createHighlightDiv(n,v,i),this._eventIdToElmt[e.getID()]=v.elmt
},Timeline.DetailedEventPainter.prototype.paintPreciseDurationEvent=function(e,t,i,n){var r=(this._timeline.getDocument(),e.getText()),a=e.getStart(),l=e.getEnd(),s=Math.round(this._band.dateToPixelOffset(a)),o=Math.round(this._band.dateToPixelOffset(l)),h=this._frc.computeSize(r),c=this._findFreeTrackForSolid(o),p=e.getColor();
p=null!=p?p:i.event.duration.color;var d=this._paintEventTape(e,c,s,o,p,100,t,i),u=this._getTrackData(c);
u.solid=s;var v=s+i.event.label.offsetFromLine,_=this._findFreeTrackForText(c,v+h.width,function(e){e.line=s-2
});this._getTrackData(_).text=s-2,this._paintEventLine(e,s,c,_,t,i);var m=Math.round(t.trackOffset+_*t.trackIncrement+t.trackHeight/2-h.height/2),f=this._paintEventLabel(e,r,v,m,h.width,h.height,i),g=this,T=function(t,i){return g._onClickDurationEvent(d.elmt,i,e)
};SimileAjax.DOM.registerEvent(d.elmt,"mousedown",T),SimileAjax.DOM.registerEvent(f.elmt,"mousedown",T),this._createHighlightDiv(n,d,i),this._eventIdToElmt[e.getID()]=d.elmt
},Timeline.DetailedEventPainter.prototype.paintImpreciseDurationEvent=function(e,t,i,n){var r=(this._timeline.getDocument(),e.getText()),a=e.getStart(),l=e.getLatestStart(),s=e.getEnd(),o=e.getEarliestEnd(),h=Math.round(this._band.dateToPixelOffset(a)),c=Math.round(this._band.dateToPixelOffset(l)),p=Math.round(this._band.dateToPixelOffset(s)),d=Math.round(this._band.dateToPixelOffset(o)),u=this._frc.computeSize(r),v=this._findFreeTrackForSolid(p),_=e.getColor();
_=null!=_?_:i.event.duration.color;var m=(this._paintEventTape(e,v,h,p,i.event.duration.impreciseColor,i.event.duration.impreciseOpacity,t,i),this._paintEventTape(e,v,c,d,_,100,t,i)),f=this._getTrackData(v);
f.solid=h;var g=c+i.event.label.offsetFromLine,T=this._findFreeTrackForText(v,g+u.width,function(e){e.line=c-2
});this._getTrackData(T).text=c-2,this._paintEventLine(e,c,v,T,t,i);var y=Math.round(t.trackOffset+T*t.trackIncrement+t.trackHeight/2-u.height/2),E=this._paintEventLabel(e,r,g,y,u.width,u.height,i),I=this,b=function(t,i){return I._onClickDurationEvent(m.elmt,i,e)
};SimileAjax.DOM.registerEvent(m.elmt,"mousedown",b),SimileAjax.DOM.registerEvent(E.elmt,"mousedown",b),this._createHighlightDiv(n,m,i),this._eventIdToElmt[e.getID()]=m.elmt
},Timeline.DetailedEventPainter.prototype._findFreeTrackForSolid=function(e,t){for(var i=0;!0;i++){if(!(i<this._lowerTracks.length))return this._lowerTracks.push({solid:Number.POSITIVE_INFINITY,text:Number.POSITIVE_INFINITY,line:Number.POSITIVE_INFINITY}),i;
var n=this._lowerTracks[i];if(Math.min(n.solid,n.text)>e&&(!t||n.line>t))return i;
if(!(i<this._upperTracks.length))return this._upperTracks.push({solid:Number.POSITIVE_INFINITY,text:Number.POSITIVE_INFINITY,line:Number.POSITIVE_INFINITY}),-1-i;
var n=this._upperTracks[i];if(Math.min(n.solid,n.text)>e&&(!t||n.line>t))return-1-i
}},Timeline.DetailedEventPainter.prototype._findFreeTrackForText=function(e,t,i){var n,r,a,l;
if(0>e)n=!0,a=-e,r=this._findFreeUpperTrackForText(a,t),l=-1-r;else if(e>0)n=!1,a=e+1,r=this._findFreeLowerTrackForText(a,t),l=r;
else{var s=this._findFreeUpperTrackForText(0,t),o=this._findFreeLowerTrackForText(1,t);
s>=o-1?(n=!1,a=1,r=o,l=r):(n=!0,a=0,r=s,l=-1-r)}if(n){r==this._upperTracks.length&&this._upperTracks.push({solid:Number.POSITIVE_INFINITY,text:Number.POSITIVE_INFINITY,line:Number.POSITIVE_INFINITY});
for(var h=a;r>h;h++)i(this._upperTracks[h])}else{r==this._lowerTracks.length&&this._lowerTracks.push({solid:Number.POSITIVE_INFINITY,text:Number.POSITIVE_INFINITY,line:Number.POSITIVE_INFINITY});
for(var h=a;r>h;h++)i(this._lowerTracks[h])}return l},Timeline.DetailedEventPainter.prototype._findFreeLowerTrackForText=function(e,t){for(;e<this._lowerTracks.length;e++){var i=this._lowerTracks[e];
if(Math.min(i.solid,i.text)>=t)break}return e},Timeline.DetailedEventPainter.prototype._findFreeUpperTrackForText=function(e,t){for(;e<this._upperTracks.length;e++){var i=this._upperTracks[e];
if(Math.min(i.solid,i.text)>=t)break}return e},Timeline.DetailedEventPainter.prototype._getTrackData=function(e){return 0>e?this._upperTracks[-e-1]:this._lowerTracks[e]
},Timeline.DetailedEventPainter.prototype._paintEventLine=function(e,t,i,n,r,a){var l=Math.round(r.trackOffset+i*r.trackIncrement+r.trackHeight/2),s=Math.round(Math.abs(n-i)*r.trackIncrement),o="1px solid "+a.event.label.lineColor,h=this._timeline.getDocument().createElement("div");
h.style.position="absolute",h.style.left=t+"px",h.style.width=a.event.label.offsetFromLine+"px",h.style.height=s+"px",i>n?(h.style.top=l-s+"px",h.style.borderTop=o):(h.style.top=l+"px",h.style.borderBottom=o),h.style.borderLeft=o,this._lineLayer.appendChild(h)
},Timeline.DetailedEventPainter.prototype._paintEventIcon=function(e,t,i,n){var r=e.getIcon();
r=null!=r?r:n.icon;var a=n.trackOffset+t*n.trackIncrement+n.trackHeight/2,l=Math.round(a-n.iconHeight/2),s=SimileAjax.Graphics.createTranslucentImage(r),o=this._timeline.getDocument().createElement("div");
return o.style.position="absolute",o.style.left=i+"px",o.style.top=l+"px",o.appendChild(s),o.style.cursor="pointer",null!=e._title&&(o.title=e._title),this._eventLayer.appendChild(o),{left:i,top:l,width:n.iconWidth,height:n.iconHeight,elmt:o}
},Timeline.DetailedEventPainter.prototype._paintEventLabel=function(e,t,i,n,r,a,l){var s=this._timeline.getDocument(),o=s.createElement("div");
o.style.position="absolute",o.style.left=i+"px",o.style.width=r+"px",o.style.top=n+"px",o.style.height=a+"px",o.style.backgroundColor=l.event.label.backgroundColor,SimileAjax.Graphics.setOpacity(o,l.event.label.backgroundOpacity),this._eventLayer.appendChild(o);
var h=s.createElement("div");h.style.position="absolute",h.style.left=i+"px",h.style.width=r+"px",h.style.top=n+"px",h.innerHTML=t,h.style.cursor="pointer",null!=e._title&&(h.title=e._title);
var c=e.getTextColor();return null==c&&(c=e.getColor()),null!=c&&(h.style.color=c),this._eventLayer.appendChild(h),{left:i,top:n,width:r,height:a,elmt:h}
},Timeline.DetailedEventPainter.prototype._paintEventTape=function(e,t,i,n,r,a,l,s){var o=n-i,h=s.event.tape.height,c=l.trackOffset+t*l.trackIncrement+l.trackHeight/2,p=Math.round(c-h/2),d=this._timeline.getDocument().createElement("div");
return d.style.position="absolute",d.style.left=i+"px",d.style.width=o+"px",d.style.top=p+"px",d.style.height=h+"px",d.style.backgroundColor=r,d.style.overflow="hidden",d.style.cursor="pointer",null!=e._title&&(d.title=e._title),SimileAjax.Graphics.setOpacity(d,a),this._eventLayer.appendChild(d),{left:i,top:p,width:o,height:h,elmt:d}
},Timeline.DetailedEventPainter.prototype._createHighlightDiv=function(e,t,i){if(e>=0){var n=this._timeline.getDocument(),r=i.event,a=r.highlightColors[Math.min(e,r.highlightColors.length-1)],l=n.createElement("div");
l.style.position="absolute",l.style.overflow="hidden",l.style.left=t.left-2+"px",l.style.width=t.width+4+"px",l.style.top=t.top-2+"px",l.style.height=t.height+4+"px",l.style.background=a,this._highlightLayer.appendChild(l)
}},Timeline.DetailedEventPainter.prototype._onClickInstantEvent=function(e,t,i){var n=SimileAjax.DOM.getPageCoordinates(e);
return this._showBubble(n.left+Math.ceil(e.offsetWidth/2),n.top+Math.ceil(e.offsetHeight/2),i),this._fireOnSelect(i.getID()),t.cancelBubble=!0,SimileAjax.DOM.cancelEvent(t),!1
},Timeline.DetailedEventPainter.prototype._onClickDurationEvent=function(e,t,i){if("pageX"in t)var n=t.pageX,r=t.pageY;
else var a=SimileAjax.DOM.getPageCoordinates(e),n=t.offsetX+a.left,r=t.offsetY+a.top;
return this._showBubble(n,r,i),this._fireOnSelect(i.getID()),t.cancelBubble=!0,SimileAjax.DOM.cancelEvent(t),!1
},Timeline.DetailedEventPainter.prototype.showBubble=function(e){var t=this._eventIdToElmt[e.getID()];
if(t){var i=SimileAjax.DOM.getPageCoordinates(t);this._showBubble(i.left+t.offsetWidth/2,i.top+t.offsetHeight/2,e)
}},Timeline.DetailedEventPainter.prototype._showBubble=function(e,t,i){var n=document.createElement("div");
i.fillInfoBubble(n,this._params.theme,this._band.getLabeller()),SimileAjax.WindowManager.cancelPopups(),SimileAjax.Graphics.createBubbleForContentAndPoint(n,e,t,this._params.theme.event.bubble.width)
},Timeline.DetailedEventPainter.prototype._fireOnSelect=function(e){for(var t=0;t<this._onSelectListeners.length;t++)this._onSelectListeners[t](e)
};