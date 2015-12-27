Timeline.strings={},Timeline.getDefaultLocale=function(){return Timeline.clientLocale
},Timeline.create=function(e,t,i,n){return new Timeline._Impl(e,t,i,n)},Timeline.HORIZONTAL=0,Timeline.VERTICAL=1,Timeline._defaultTheme=null,Timeline.createBandInfo=function(e){var t="theme"in e?e.theme:Timeline.getDefaultTheme(),i="eventSource"in e?e.eventSource:null,n=new Timeline.LinearEther({centersOn:"date"in e?e.date:new Date,interval:SimileAjax.DateTime.gregorianUnitLengths[e.intervalUnit],pixelsPerInterval:e.intervalPixels,theme:t}),o=new Timeline.GregorianEtherPainter({unit:e.intervalUnit,multiple:"multiple"in e?e.multiple:1,theme:t,align:"align"in e?e.align:void 0}),s={showText:"showEventText"in e?e.showEventText:!0,theme:t};
if("eventPainterParams"in e)for(var r in e.eventPainterParams)s[r]=e.eventPainterParams[r];
"trackHeight"in e&&(s.trackHeight=e.trackHeight),"trackGap"in e&&(s.trackGap=e.trackGap);
var a,l="overview"in e&&e.overview?"overview":"layout"in e?e.layout:"original";if("eventPainter"in e)a=new e.eventPainter(s);
else switch(l){case"overview":a=new Timeline.OverviewEventPainter(s);break;case"detailed":a=new Timeline.DetailedEventPainter(s);
break;default:a=new Timeline.OriginalEventPainter(s)}return{width:e.width,eventSource:i,timeZone:"timeZone"in e?e.timeZone:0,ether:n,etherPainter:o,eventPainter:a,theme:t,zoomIndex:"zoomIndex"in e?e.zoomIndex:0,zoomSteps:"zoomSteps"in e?e.zoomSteps:null}
},Timeline.createHotZoneBandInfo=function(e){var t="theme"in e?e.theme:Timeline.getDefaultTheme(),i="eventSource"in e?e.eventSource:null,n=new Timeline.HotZoneEther({centersOn:"date"in e?e.date:new Date,interval:SimileAjax.DateTime.gregorianUnitLengths[e.intervalUnit],pixelsPerInterval:e.intervalPixels,zones:e.zones,theme:t}),o=new Timeline.HotZoneGregorianEtherPainter({unit:e.intervalUnit,zones:e.zones,theme:t,align:"align"in e?e.align:void 0}),s={showText:"showEventText"in e?e.showEventText:!0,theme:t};
if("eventPainterParams"in e)for(var r in e.eventPainterParams)s[r]=e.eventPainterParams[r];
"trackHeight"in e&&(s.trackHeight=e.trackHeight),"trackGap"in e&&(s.trackGap=e.trackGap);
var a,l="overview"in e&&e.overview?"overview":"layout"in e?e.layout:"original";if("eventPainter"in e)a=new e.eventPainter(s);
else switch(l){case"overview":a=new Timeline.OverviewEventPainter(s);break;case"detailed":a=new Timeline.DetailedEventPainter(s);
break;default:a=new Timeline.OriginalEventPainter(s)}return{width:e.width,eventSource:i,timeZone:"timeZone"in e?e.timeZone:0,ether:n,etherPainter:o,eventPainter:a,theme:t,zoomIndex:"zoomIndex"in e?e.zoomIndex:0,zoomSteps:"zoomSteps"in e?e.zoomSteps:null}
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
},o=function(n){try{var o=n.responseXML;!o.documentElement&&n.responseStream&&o.load(n.responseStream),t(o,e)
}finally{i.hideLoadingMessage()}};this.showLoadingMessage(),window.setTimeout(function(){SimileAjax.XmlHttp.get(e,n,o)
},0)},Timeline._Impl.prototype.loadJSON=function(url,f){var tl=this,fError=function(e){alert("Failed to load json data from "+url+"\n"+e),tl.hideLoadingMessage()
},fDone=function(xmlhttp){try{f(eval("("+xmlhttp.responseText+")"),url)}finally{tl.hideLoadingMessage()
}};this.showLoadingMessage(),window.setTimeout(function(){SimileAjax.XmlHttp.get(url,fError,fDone)
},0)},Timeline._Impl.prototype._initialize=function(){var e=this._containerDiv,t=e.ownerDocument;
e.className=e.className.split(" ").concat("timeline-container").join(" ");var i=this.isHorizontal()?"horizontal":"vertical";
for(e.className+=" timeline-"+i;e.firstChild;)e.removeChild(e.firstChild);var n=SimileAjax.Graphics.createTranslucentImage(Timeline.urlPrefix+(this.isHorizontal()?"images/copyright-vertical.png":"images/copyright.png"));
n.className="timeline-copyright",n.title="Timeline (c) SIMILE - http://simile.mit.edu/timeline/",SimileAjax.DOM.registerEvent(n,"click",function(){window.location="http://simile.mit.edu/timeline/"
}),e.appendChild(n),this._bands=[];for(var o=0;o<this._bandInfos.length;o++){var s=new Timeline._Band(this,this._bandInfos[o],o);
this._bands.push(s)}this._distributeWidths();for(var o=0;o<this._bandInfos.length;o++){var r=this._bandInfos[o];
"syncWith"in r&&this._bands[o].setSyncWithBand(this._bands[r.syncWith],"highlight"in r?r.highlight:!1)
}var a=SimileAjax.Graphics.createMessageBubble(t);a.containerDiv.className="timeline-message-container",e.appendChild(a.containerDiv),a.contentDiv.className="timeline-message",a.contentDiv.innerHTML="<img src='"+Timeline.urlPrefix+"images/progress-running.gif' /> Loading...",this.showLoadingMessage=function(){a.containerDiv.style.display="block"
},this.hideLoadingMessage=function(){a.containerDiv.style.display="none"}},Timeline._Impl.prototype._distributeWidths=function(){for(var e=this.getPixelLength(),t=this.getPixelWidth(),i=0,n=0;n<this._bands.length;n++){var o=this._bands[n],s=this._bandInfos[n],r=s.width,a=r.indexOf("%");
if(a>0)var l=parseInt(r.substr(0,a)),h=l*t/100;else var h=parseInt(r);o.setBandShiftAndWidth(i,h),o.setViewLength(e),i+=h
}},Timeline._Impl.prototype.zoom=function(e,t,i,n){var o=new RegExp("^timeline-band-([0-9]+)$"),s=null,r=o.exec(n.id);
r&&(s=parseInt(r[1])),null!=s&&this._bands[s].zoom(e,t,i,n),this.paint()},Timeline._Band=function(e,t,i){this._timeline=e,this._bandInfo=t,this._index=i,this._locale="locale"in t?t.locale:Timeline.getDefaultLocale(),this._timeZone="timeZone"in t?t.timeZone:0,this._labeller="labeller"in t?t.labeller:"createLabeller"in e.getUnit()?e.getUnit().createLabeller(this._locale,this._timeZone):new Timeline.GregorianDateLabeller(this._locale,this._timeZone),this._theme=t.theme,this._zoomIndex="zoomIndex"in t?t.zoomIndex:0,this._zoomSteps="zoomSteps"in t?t.zoomSteps:null,this._dragging=!1,this._changing=!1,this._originalScrollSpeed=5,this._scrollSpeed=this._originalScrollSpeed,this._onScrollListeners=[];
var n=this;this._syncWithBand=null,this._syncWithBandHandler=function(){n._onHighlightBandScroll()
},this._selectorListener=function(){n._onHighlightBandScroll()};var o=this._timeline.getDocument().createElement("div");
o.className="timeline-band-input",this._timeline.addDiv(o),this._keyboardInput=document.createElement("input"),this._keyboardInput.type="text",o.appendChild(this._keyboardInput),SimileAjax.DOM.registerEventWithObject(this._keyboardInput,"keydown",this,"_onKeyDown"),SimileAjax.DOM.registerEventWithObject(this._keyboardInput,"keyup",this,"_onKeyUp"),this._div=this._timeline.getDocument().createElement("div"),this._div.id="timeline-band-"+i,this._div.className="timeline-band timeline-band-"+i,this._timeline.addDiv(this._div),SimileAjax.DOM.registerEventWithObject(this._div,"mousedown",this,"_onMouseDown"),SimileAjax.DOM.registerEventWithObject(this._div,"mousemove",this,"_onMouseMove"),SimileAjax.DOM.registerEventWithObject(this._div,"mouseup",this,"_onMouseUp"),SimileAjax.DOM.registerEventWithObject(this._div,"mouseout",this,"_onMouseOut"),SimileAjax.DOM.registerEventWithObject(this._div,"dblclick",this,"_onDblClick"),SimileAjax.Platform.browser.isFirefox?SimileAjax.DOM.registerEventWithObject(this._div,"DOMMouseScroll",this,"_onMouseScroll"):SimileAjax.DOM.registerEventWithObject(this._div,"mousewheel",this,"_onMouseScroll"),this._innerDiv=this._timeline.getDocument().createElement("div"),this._innerDiv.className="timeline-band-inner",this._div.appendChild(this._innerDiv),this._ether=t.ether,t.ether.initialize(this,e),this._etherPainter=t.etherPainter,t.etherPainter.initialize(this,e),this._eventSource=t.eventSource,this._eventSource&&(this._eventListener={onAddMany:function(){n._onAddMany()
},onClear:function(){n._onClear()}},this._eventSource.addListener(this._eventListener)),this._eventPainter=t.eventPainter,t.eventPainter.initialize(this,e),this._decorators="decorators"in t?t.decorators:[];
for(var s=0;s<this._decorators.length;s++)this._decorators[s].initialize(this,e)},Timeline._Band.SCROLL_MULTIPLES=5,Timeline._Band.prototype.dispose=function(){this.closeBubble(),this._eventSource&&(this._eventSource.removeListener(this._eventListener),this._eventListener=null,this._eventSource=null),this._timeline=null,this._bandInfo=null,this._labeller=null,this._ether=null,this._etherPainter=null,this._eventPainter=null,this._decorators=null,this._onScrollListeners=null,this._syncWithBandHandler=null,this._selectorListener=null,this._div=null,this._innerDiv=null,this._keyboardInput=null
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
var n=0;t.wheelDelta?n=t.wheelDelta/120:t.detail&&(n=-t.detail/3);var o=SimileAjax.DOM.getEventRelativeCoordinates(t,e);
if(0!=n){var s;n>0&&(s=!0),0>n&&(s=!1),this._timeline.zoom(s,o.x,o.y,e)}}t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0,t.preventDefault&&t.preventDefault(),t.returnValue=!1
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
};