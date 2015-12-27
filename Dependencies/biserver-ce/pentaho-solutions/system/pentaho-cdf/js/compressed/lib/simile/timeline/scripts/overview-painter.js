Timeline.OverviewEventPainter=function(e){this._params=e,this._onSelectListeners=[],this._filterMatcher=null,this._highlightMatcher=null
},Timeline.OverviewEventPainter.prototype.initialize=function(e,t){this._band=e,this._timeline=t,this._eventLayer=null,this._highlightLayer=null
},Timeline.OverviewEventPainter.prototype.addOnSelectListener=function(e){this._onSelectListeners.push(e)
},Timeline.OverviewEventPainter.prototype.removeOnSelectListener=function(e){for(var t=0;t<this._onSelectListeners.length;t++)if(this._onSelectListeners[t]==e){this._onSelectListeners.splice(t,1);
break}},Timeline.OverviewEventPainter.prototype.getFilterMatcher=function(){return this._filterMatcher
},Timeline.OverviewEventPainter.prototype.setFilterMatcher=function(e){this._filterMatcher=e
},Timeline.OverviewEventPainter.prototype.getHighlightMatcher=function(){return this._highlightMatcher
},Timeline.OverviewEventPainter.prototype.setHighlightMatcher=function(e){this._highlightMatcher=e
},Timeline.OverviewEventPainter.prototype.paint=function(){var e=this._band.getEventSource();
if(null!=e){this._prepareForPainting();for(var t=this._params.theme.event,i={trackOffset:t.overviewTrack.offset,trackHeight:t.overviewTrack.height,trackGap:t.overviewTrack.gap,trackIncrement:t.overviewTrack.height+t.overviewTrack.gap},n=this._band.getMinDate(),r=this._band.getMaxDate(),a=null!=this._filterMatcher?this._filterMatcher:function(){return!0
},h=null!=this._highlightMatcher?this._highlightMatcher:function(){return-1},l=e.getEventReverseIterator(n,r);l.hasNext();){var s=l.next();
a(s)&&this.paintEvent(s,i,this._params.theme,h(s))}this._highlightLayer.style.display="block",this._eventLayer.style.display="block"
}},Timeline.OverviewEventPainter.prototype.softPaint=function(){},Timeline.OverviewEventPainter.prototype._prepareForPainting=function(){var e=this._band;
this._tracks=[],null!=this._highlightLayer&&e.removeLayerDiv(this._highlightLayer),this._highlightLayer=e.createLayerDiv(105,"timeline-band-highlights"),this._highlightLayer.style.display="none",null!=this._eventLayer&&e.removeLayerDiv(this._eventLayer),this._eventLayer=e.createLayerDiv(110,"timeline-band-events"),this._eventLayer.style.display="none"
},Timeline.OverviewEventPainter.prototype.paintEvent=function(e,t,i,n){e.isInstant()?this.paintInstantEvent(e,t,i,n):this.paintDurationEvent(e,t,i,n)
},Timeline.OverviewEventPainter.prototype.paintInstantEvent=function(e,t,i,n){var r=e.getStart(),a=Math.round(this._band.dateToPixelOffset(r)),h=e.getColor();
h=null!=h?h:i.event.duration.color;var l=this._paintEventTick(e,a,h,100,t,i);this._createHighlightDiv(n,l,i)
},Timeline.OverviewEventPainter.prototype.paintDurationEvent=function(e,t,i,n){for(var r=e.getLatestStart(),a=e.getEarliestEnd(),h=Math.round(this._band.dateToPixelOffset(r)),l=Math.round(this._band.dateToPixelOffset(a)),s=0;s<this._tracks.length&&!(l<this._tracks[s]);s++);this._tracks[s]=l;
var v=e.getColor();v=null!=v?v:i.event.duration.color;var o=this._paintEventTape(e,s,h,l,v,100,t,i);
this._createHighlightDiv(n,o,i)},Timeline.OverviewEventPainter.prototype._paintEventTape=function(e,t,i,n,r,a,h){var l=h.trackOffset+t*h.trackIncrement,s=n-i,v=h.trackHeight,o=this._timeline.getDocument().createElement("div");
return o.className="timeline-small-event-tape",o.style.left=i+"px",o.style.width=s+"px",o.style.top=l+"px",100>a&&SimileAjax.Graphics.setOpacity(o,a),this._eventLayer.appendChild(o),{left:i,top:l,width:s,height:v,elmt:o}
},Timeline.OverviewEventPainter.prototype._paintEventTick=function(e,t,i,n,r,a){var h=a.event.overviewTrack.tickHeight,l=r.trackOffset-h,s=1,v=this._timeline.getDocument().createElement("div");
v.className="timeline-small-event-icon",v.style.left=t+"px",v.style.top=l+"px";var o=e.getClassName();
return o&&(v.className+=" small-"+o),100>n&&SimileAjax.Graphics.setOpacity(v,n),this._eventLayer.appendChild(v),{left:t,top:l,width:s,height:h,elmt:v}
},Timeline.OverviewEventPainter.prototype._createHighlightDiv=function(e,t,i){if(e>=0){var n=this._timeline.getDocument(),r=i.event,a=r.highlightColors[Math.min(e,r.highlightColors.length-1)],h=n.createElement("div");
h.style.position="absolute",h.style.overflow="hidden",h.style.left=t.left-1+"px",h.style.width=t.width+2+"px",h.style.top=t.top-1+"px",h.style.height=t.height+2+"px",h.style.background=a,this._highlightLayer.appendChild(h)
}},Timeline.OverviewEventPainter.prototype.showBubble=function(){};