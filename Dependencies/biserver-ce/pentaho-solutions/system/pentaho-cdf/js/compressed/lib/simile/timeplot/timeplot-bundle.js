Timeline.Debug=SimileAjax.Debug;var log=SimileAjax.Debug.log;Object.extend=function(t,e){for(var i in e)t[i]=e[i];
return t},Timeplot.create=function(t,e){return new Timeplot._Impl(t,e)},Timeplot.createPlotInfo=function(t){return{id:"id"in t?t.id:"p"+Math.round(1e6*Math.random()),dataSource:"dataSource"in t?t.dataSource:null,eventSource:"eventSource"in t?t.eventSource:null,timeGeometry:"timeGeometry"in t?t.timeGeometry:new Timeplot.DefaultTimeGeometry,valueGeometry:"valueGeometry"in t?t.valueGeometry:new Timeplot.DefaultValueGeometry,timeZone:"timeZone"in t?t.timeZone:0,fillColor:"fillColor"in t?"string"==t.fillColor?new Timeplot.Color(t.fillColor):t.fillColor:null,fillGradient:"fillGradient"in t?t.fillGradient:!0,fillFrom:"fillFrom"in t?t.fillFrom:Number.NEGATIVE_INFINITY,lineColor:"lineColor"in t?"string"==t.lineColor?new Timeplot.Color(t.lineColor):t.lineColor:new Timeplot.Color("#606060"),lineWidth:"lineWidth"in t?t.lineWidth:1,dotRadius:"dotRadius"in t?t.dotRadius:2,dotColor:"dotColor"in t?t.dotColor:null,eventLineWidth:"eventLineWidth"in t?t.eventLineWidth:1,showValues:"showValues"in t?t.showValues:!1,roundValues:"roundValues"in t?t.roundValues:!0,valuesOpacity:"valuesOpacity"in t?t.valuesOpacity:75,bubbleWidth:"bubbleWidth"in t?t.bubbleWidth:300,bubbleHeight:"bubbleHeight"in t?t.bubbleHeight:200}
},Timeplot._Impl=function(t,e){this._id="t"+Math.round(1e6*Math.random()),this._containerDiv=t,this._plotInfos=e,this._painters={background:[],foreground:[]},this._painter=null,this._active=!1,this._upright=!1,this._initialize()
},Timeplot._Impl.prototype={dispose:function(){for(var t=0;t<this._plots.length;t++)this._plots[t].dispose();
this._plots=null,this._plotsInfos=null,this._containerDiv.innerHTML=""},getElement:function(){return this._containerDiv
},getDocument:function(){return this._containerDiv.ownerDocument},add:function(t){this._containerDiv.appendChild(t)
},remove:function(t){this._containerDiv.removeChild(t)},addPainter:function(t,e){var i=this._painters[t];
if(i){for(var a=0;a<i.length;a++)if(i[a].context._id==e.context._id)return;i.push(e)
}},removePainter:function(t,e){var i=this._painters[t];if(i)for(var a=0;a<i.length;a++)if(i[a].context._id==e.context._id){i.splice(a,1);
break}},getWidth:function(){return this._containerDiv.clientWidth},getHeight:function(){return this._containerDiv.clientHeight
},getCanvas:function(){return this._canvas},loadText:function(t,e,i,a,n){if(this._active){var o=this,s=function(e){alert("Failed to load data xml from "+t+"\n"+e),o.hideLoadingMessage()
},r=function(s){try{i.loadText(s.responseText,e,t,a,n)}catch(r){SimileAjax.Debug.exception(r)
}finally{o.hideLoadingMessage()}};this.showLoadingMessage(),window.setTimeout(function(){SimileAjax.XmlHttp.get(t,s,r)
},0)}},loadXML:function(t,e){if(this._active){var i=this,a=function(e){alert("Failed to load data xml from "+t+"\n"+e),i.hideLoadingMessage()
},n=function(a){try{var n=a.responseXML;!n.documentElement&&a.responseStream&&n.load(a.responseStream),e.loadXML(n,t)
}finally{i.hideLoadingMessage()}};this.showLoadingMessage(),window.setTimeout(function(){SimileAjax.XmlHttp.get(t,a,n)
},0)}},putText:function(t,e,i,a){var n=this.putDiv(t,"timeplot-div "+i,a);return n.innerHTML=e,n
},putDiv:function(t,e,i){var a=this._id+"-"+t,n=document.getElementById(a);if(!n){var o=this._containerDiv.firstChild;
n=document.createElement("div"),n.setAttribute("id",a),o.appendChild(n)}return n.setAttribute("class","timeplot-div "+e),n.setAttribute("className","timeplot-div "+e),this.placeDiv(n,i),n
},placeDiv:function(t,e){if(e)for(style in e)"left"==style?(e[style]+=this._paddingX,e[style]+="px"):"right"==style?(e[style]+=this._paddingX,e[style]+="px"):"top"==style?(e[style]+=this._paddingY,e[style]+="px"):"bottom"==style?(e[style]+=this._paddingY,e[style]+="px"):"width"==style?(e[style]<0&&(e[style]=0),e[style]+="px"):"height"==style&&(e[style]<0&&(e[style]=0),e[style]+="px"),t.style[style]=e[style]
},locate:function(t){return{x:t.offsetLeft-this._paddingX,y:t.offsetTop-this._paddingY}
},update:function(){if(this._active){for(var t=0;t<this._plots.length;t++){var e=this._plots[t],i=e.getDataSource();
if(i){var a=i.getRange();a&&(e._valueGeometry.setRange(a),e._timeGeometry.setRange(a))
}e.hideValues()}this.paint()}},repaint:function(){if(this._active){this._prepareCanvas();
for(var t=0;t<this._plots.length;t++){var e=this._plots[t];e._timeGeometry&&e._timeGeometry.reset(),e._valueGeometry&&e._valueGeometry.reset()
}this.paint()}},paint:function(){if(this._active&&null==this._painter){var t=this;
this._painter=window.setTimeout(function(){t._clearCanvas();for(var e=function(e,i){try{i.setTimeplot&&i.setTimeplot(t),e.apply(i,[])
}catch(a){SimileAjax.Debug.exception(a)}},i=t._painters.background,a=0;a<i.length;a++)e(i[a].action,i[a].context);
for(var n=t._painters.foreground,a=0;a<n.length;a++)e(n[a].action,n[a].context);t._painter=null
},20)}},_clearCanvas:function(){var t=this.getCanvas(),e=t.getContext("2d");e.clearRect(0,0,t.width,t.height)
},_clearLabels:function(){var t=this._containerDiv.firstChild;t&&this._containerDiv.removeChild(t),t=document.createElement("div"),this._containerDiv.appendChild(t)
},_prepareCanvas:function(){var t=this.getCanvas(),e=SimileAjax.jQuery(this._containerDiv);
this._paddingX=(parseInt(e.css("paddingLeft"))+parseInt(e.css("paddingRight")))/2,this._paddingY=(parseInt(e.css("paddingTop"))+parseInt(e.css("paddingBottom")))/2,t.width=this.getWidth()-2*this._paddingX,t.height=this.getHeight()-2*this._paddingY;
var i=t.getContext("2d");this._setUpright(i,t),i.globalCompositeOperation="source-over"
},_setUpright:function(t,e){SimileAjax.Platform.browser.isIE||(this._upright=!1),this._upright||(this._upright=!0,t.translate(0,e.height),t.scale(1,-1))
},_isBrowserSupported:function(t){var e=SimileAjax.Platform.browser;return t.getContext&&window.getComputedStyle||e.isIE&&e.majorVersion>=6?!0:!1
},_initialize:function(){SimileAjax.WindowManager.initialize();var t=this._containerDiv,e=t.ownerDocument;
for(t.className="timeplot-container "+t.className;t.firstChild;)t.removeChild(t.firstChild);
var i=e.createElement("canvas");if(this._isBrowserSupported(i)){this._clearLabels(),this._canvas=i,i.className="timeplot-canvas",t.appendChild(i),!i.getContext&&G_vmlCanvasManager&&(i=G_vmlCanvasManager.initElement(this._canvas),this._canvas=i),this._prepareCanvas();
var a=SimileAjax.Graphics.createTranslucentImage(Timeplot.urlPrefix+"images/copyright.png");
a.className="timeplot-copyright",a.title="Timeplot (c) SIMILE - http://simile.mit.edu/timeplot/",SimileAjax.DOM.registerEvent(a,"click",function(){window.location="http://simile.mit.edu/timeplot/"
}),t.appendChild(a);var n=this,o={onAddMany:function(){n.update()},onClear:function(){n.update()
}};if(this._plots=[],this._plotInfos)for(var s=0;s<this._plotInfos.length;s++){var r=new Timeplot.Plot(this,this._plotInfos[s]),l=r.getDataSource();
l&&l.addListener(o),this.addPainter("background",{context:r.getTimeGeometry(),action:r.getTimeGeometry().paint}),this.addPainter("background",{context:r.getValueGeometry(),action:r.getValueGeometry().paint}),this.addPainter("foreground",{context:r,action:r.paint}),this._plots.push(r),r.initialize()
}var h=SimileAjax.Graphics.createMessageBubble(e);h.containerDiv.className="timeplot-message-container",t.appendChild(h.containerDiv),h.contentDiv.className="timeplot-message",h.contentDiv.innerHTML="<img src='"+Timeplot.urlPrefix+"images/progress-running.gif' /> Loading...",this.showLoadingMessage=function(){h.containerDiv.style.display="block"
},this.hideLoadingMessage=function(){h.containerDiv.style.display="none"},this._active=!0
}else this._message=SimileAjax.Graphics.createMessageBubble(e),this._message.containerDiv.className="timeplot-message-container",this._message.containerDiv.style.top="15%",this._message.containerDiv.style.left="20%",this._message.containerDiv.style.right="20%",this._message.containerDiv.style.minWidth="20em",this._message.contentDiv.className="timeplot-message",this._message.contentDiv.innerHTML="We're terribly sorry, but your browser is not currently supported by <a href='http://simile.mit.edu/timeplot/'>Timeplot</a>.<br><br> We are working on supporting it in the near future but, for now, see the <a href='http://simile.mit.edu/wiki/Timeplot_Limitations'>list of currently supported browsers</a>.",this._message.containerDiv.style.display="block",t.appendChild(this._message.containerDiv)
}},Timeplot.Plot=function(t,e){this._timeplot=t,this._canvas=t.getCanvas(),this._plotInfo=e,this._id=e.id,this._timeGeometry=e.timeGeometry,this._valueGeometry=e.valueGeometry,this._theme=new Timeline.getDefaultTheme,this._dataSource=e.dataSource,this._eventSource=e.eventSource,this._bubble=null
},Timeplot.Plot.prototype={initialize:function(){if(this._dataSource&&this._dataSource.getValue){this._timeFlag=this._timeplot.putDiv("timeflag","timeplot-timeflag"),this._valueFlag=this._timeplot.putDiv(this._id+"valueflag","timeplot-valueflag"),this._valueFlagLineLeft=this._timeplot.putDiv(this._id+"valueflagLineLeft","timeplot-valueflag-line"),this._valueFlagLineRight=this._timeplot.putDiv(this._id+"valueflagLineRight","timeplot-valueflag-line"),this._valueFlagLineLeft.firstChild||(this._valueFlagLineLeft.appendChild(SimileAjax.Graphics.createTranslucentImage(Timeplot.urlPrefix+"images/line_left.png")),this._valueFlagLineRight.appendChild(SimileAjax.Graphics.createTranslucentImage(Timeplot.urlPrefix+"images/line_right.png"))),this._valueFlagPole=this._timeplot.putDiv(this._id+"valuepole","timeplot-valueflag-pole");
var t=this._plotInfo.valuesOpacity;SimileAjax.Graphics.setOpacity(this._timeFlag,t),SimileAjax.Graphics.setOpacity(this._valueFlag,t),SimileAjax.Graphics.setOpacity(this._valueFlagLineLeft,t),SimileAjax.Graphics.setOpacity(this._valueFlagLineRight,t),SimileAjax.Graphics.setOpacity(this._valueFlagPole,t);
var e=this,i=function(t,i,a){e._plotInfo.showValues&&(e._valueFlag.style.display="block",o(t,i,a))
},a=864e5,n=30*a,o=function(t,i){if("undefined"!=typeof SimileAjax&&e._plotInfo.showValues){var o=e._canvas,s=Math.round(SimileAjax.DOM.getEventRelativeCoordinates(i,e._canvas).x);
s>o.width&&(s=o.width),(isNaN(s)||0>s)&&(s=0);var r=e._timeGeometry.fromScreen(s);
if(0==r)return e._valueFlag.style.display="none",void 0;var l=e._dataSource.getValue(r);
e._plotInfo.roundValues&&(l=Math.round(l)),e._valueFlag.innerHTML=new String(l);var h=new Date(r),u=e._timeGeometry.getPeriod();
e._timeFlag.innerHTML=a>u?h.toLocaleTimeString():u>n?h.toLocaleDateString():h.toLocaleString();
var c=e._timeFlag.clientWidth,m=e._timeFlag.clientHeight,_=Math.round(c/2),p=e._valueFlag.clientWidth,g=e._valueFlag.clientHeight,d=e._valueGeometry.toScreen(l);
if(s+_>o.width)var v=o.width-_;else if(0>s-_)var v=_;else var v=s;"top"==e._timeGeometry._timeValuePosition?(e._timeplot.placeDiv(e._valueFlagPole,{left:s,top:m-5,height:o.height-d-m+6,display:"block"}),e._timeplot.placeDiv(e._timeFlag,{left:v-_,top:-6,display:"block"})):(e._timeplot.placeDiv(e._valueFlagPole,{left:s,bottom:m-5,height:d-m+6,display:"block"}),e._timeplot.placeDiv(e._timeFlag,{left:v-_,bottom:-6,display:"block"})),s+p+14>o.width&&d+g+4>o.height?(e._valueFlagLineLeft.style.display="none",e._timeplot.placeDiv(e._valueFlagLineRight,{left:s-14,bottom:d-14,display:"block"}),e._timeplot.placeDiv(e._valueFlag,{left:s-p-13,bottom:d-g-13,display:"block"})):s+p+14>o.width&&d+g+4<o.height?(e._valueFlagLineRight.style.display="none",e._timeplot.placeDiv(e._valueFlagLineLeft,{left:s-14,bottom:d,display:"block"}),e._timeplot.placeDiv(e._valueFlag,{left:s-p-13,bottom:d+13,display:"block"})):s+p+14<o.width&&d+g+4>o.height?(e._valueFlagLineRight.style.display="none",e._timeplot.placeDiv(e._valueFlagLineLeft,{left:s,bottom:d-13,display:"block"}),e._timeplot.placeDiv(e._valueFlag,{left:s+13,bottom:d-13,display:"block"})):(e._valueFlagLineLeft.style.display="none",e._timeplot.placeDiv(e._valueFlagLineRight,{left:s,bottom:d,display:"block"}),e._timeplot.placeDiv(e._valueFlag,{left:s+13,bottom:d+13,display:"block"}))
}},s=this._timeplot.getElement();SimileAjax.DOM.registerEvent(s,"mouseover",i),SimileAjax.DOM.registerEvent(s,"mousemove",o)
}},dispose:function(){this._dataSource&&(this._dataSource.removeListener(this._paintingListener),this._paintingListener=null,this._dataSource.dispose(),this._dataSource=null)
},hideValues:function(){this._valueFlag&&(this._valueFlag.style.display="none"),this._timeFlag&&(this._timeFlag.style.display="none"),this._valueFlagLineLeft&&(this._valueFlagLineLeft.style.display="none"),this._valueFlagLineRight&&(this._valueFlagLineRight.style.display="none"),this._valueFlagPole&&(this._valueFlagPole.style.display="none")
},getDataSource:function(){return this._dataSource?this._dataSource:this._eventSource
},getTimeGeometry:function(){return this._timeGeometry},getValueGeometry:function(){return this._valueGeometry
},paint:function(){var t=this._canvas.getContext("2d");if(t.lineWidth=this._plotInfo.lineWidth,t.lineJoin="miter",this._dataSource){if(this._plotInfo.fillColor){if(this._plotInfo.fillGradient){var e=t.createLinearGradient(0,this._canvas.height,0,0);
e.addColorStop(0,this._plotInfo.fillColor.toString()),e.addColorStop(.5,this._plotInfo.fillColor.toString()),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e
}else t.fillStyle=this._plotInfo.fillColor.toString();t.beginPath(),t.moveTo(0,0),this._plot(function(e,i){t.lineTo(e,i)
}),this._plotInfo.fillFrom==Number.NEGATIVE_INFINITY?t.lineTo(this._canvas.width,0):this._plotInfo.fillFrom==Number.POSITIVE_INFINITY?(t.lineTo(this._canvas.width,this._canvas.height),t.lineTo(0,this._canvas.height)):(t.lineTo(this._canvas.width,this._valueGeometry.toScreen(this._plotInfo.fillFrom)),t.lineTo(0,this._valueGeometry.toScreen(this._plotInfo.fillFrom))),t.fill()
}if(this._plotInfo.lineColor){t.strokeStyle=this._plotInfo.lineColor.toString(),t.beginPath();
var i=!0;this._plot(function(e,a){i&&(i=!1,t.moveTo(e,a)),t.lineTo(e,a)}),t.stroke()
}if(this._plotInfo.dotColor){t.fillStyle=this._plotInfo.dotColor.toString();var a=this._plotInfo.dotRadius;
this._plot(function(e,i){t.beginPath(),t.arc(e,i,a,0,2*Math.PI,!0),t.fill()})}}if(this._eventSource){var e=t.createLinearGradient(0,0,0,this._canvas.height);
e.addColorStop(1,"rgba(255,255,255,0)"),t.strokeStyle=e,t.fillStyle=e,t.lineWidth=this._plotInfo.eventLineWidth,t.lineJoin="miter";
for(var n=this._eventSource.getAllEventIterator();n.hasNext();){var o=n.next(),s=o.getColor();
s=s?new Timeplot.Color(s):this._plotInfo.lineColor;var r=o.getStart().getTime(),l=o.getEnd().getTime();
if(r==l){var h=s.toString();e.addColorStop(0,h);var u=this._timeGeometry.toScreen(r);
u=Math.floor(u)+.5;var c=u;t.beginPath(),t.moveTo(u,0),t.lineTo(u,this._canvas.height),t.stroke();
var m=u-4,_=7}else{var h=s.toString(.5);e.addColorStop(0,h);var u=this._timeGeometry.toScreen(r);
u=Math.floor(u)+.5;var c=this._timeGeometry.toScreen(l);c=Math.floor(c)+.5,t.fillRect(u,0,c-u,this._canvas.height);
var m=u,_=c-u-1}var p=this._timeplot.putDiv(o.getID(),"timeplot-event-box",{left:Math.round(m),width:Math.round(_),top:0,height:this._canvas.height-1}),g=this,d=function(t){return function(e,i){g._timeplot.getDocument();
g._closeBubble();var a=SimileAjax.DOM.getEventPageCoordinates(i),n=SimileAjax.DOM.getPageCoordinates(e);
g._bubble=SimileAjax.Graphics.createBubbleForPoint(a.x,n.top+g._canvas.height,g._plotInfo.bubbleWidth,g._plotInfo.bubbleHeight,"bottom"),t.fillInfoBubble(g._bubble.content,g._theme,g._timeGeometry.getLabeler())
}},v=function(t){t.oldClass=t.className,t.className=t.className+" timeplot-event-box-highlight"
},f=function(t){t.className=t.oldClass,t.oldClass=null};p.instrumented||(SimileAjax.DOM.registerEvent(p,"click",d(o)),SimileAjax.DOM.registerEvent(p,"mouseover",v),SimileAjax.DOM.registerEvent(p,"mouseout",f),p.instrumented=!0)
}}},_plot:function(t){var e=this._dataSource.getData();if(e)for(var i=e.times,a=e.values,n=i.length,o=0;n>o;o++){var s=this._timeGeometry.toScreen(i[o]),r=this._valueGeometry.toScreen(a[o]);
t(s,r)}},_closeBubble:function(){null!=this._bubble&&(this._bubble.close(),this._bubble=null)
}},Timeplot.DefaultEventSource=function(){Timeline.DefaultEventSource.apply(this,arguments)
},Object.extend(Timeplot.DefaultEventSource.prototype,Timeline.DefaultEventSource.prototype),Timeplot.DefaultEventSource.prototype.loadText=function(t,e,i,a,n){if(null!=t){this._events.maxValues=new Array;
{this._getBaseURL(i)}n||(n="iso8601");var o=this._events.getUnit().getParser(n),s=this._parseText(t,e),r=!1;
if(a&&(s=a(s)),s)for(var l=0;l<s.length;l++){var h=s[l];if(h.length>1){var u=SimileAjax.jQuery.trim(h[0]),c=o(u);
if(c){var m=new Timeplot.DefaultEventSource.NumericEvent(c,h.slice(1));this._events.add(m),r=!0
}}}r&&this._fire("onAddMany",[])}},Timeplot.DefaultEventSource.prototype._parseText=function(t,e){t=t.replace(/\r\n?/g,"\n");
for(var i=0,a=t.length,n=[];a>i;){var o=[];if("#"!=t.charAt(i))for(;a>i;){if('"'==t.charAt(i)){for(var s=t.indexOf('"',i+1);a>s&&s>-1&&'"'==t.charAt(s+1);)s=t.indexOf('"',s+2);
if(0>s);else{if(t.charAt(s+1)==e){var r=t.substr(i+1,s-i-1);r=r.replace(/""/g,'"'),o[o.length]=r,i=s+2;
continue}if("\n"==t.charAt(s+1)||a==s+1){var r=t.substr(i+1,s-i-1);r=r.replace(/""/g,'"'),o[o.length]=r,i=s+2;
break}}}var l=t.indexOf(e,i),h=t.indexOf("\n",i);if(0>h&&(h=a),!(l>-1&&h>l)){o[o.length]=t.substr(i,h-i),i=h+1;
break}o[o.length]=t.substr(i,l-i),i=l+1}else{var h=t.indexOf("\n",i);i=h>-1?h+1:cur
}o.length>0&&(n[n.length]=o)}return n.length<0?void 0:n},Timeplot.DefaultEventSource.prototype.getRange=function(){var t=this.getEarliestDate(),e=this.getLatestDate();
return{earliestDate:t?t:null,latestDate:e?e:null,min:0,max:0}},Timeplot.DefaultEventSource.NumericEvent=function(t,e){this._id="e"+Math.round(1e6*Math.random()),this._time=t,this._values=e
},Timeplot.DefaultEventSource.NumericEvent.prototype={getID:function(){return this._id
},getTime:function(){return this._time},getValues:function(){return this._values},getStart:function(){return this._time
},getEnd:function(){return this._time}},Timeplot.DataSource=function(t){this._eventSource=t;
var e=this;this._processingListener={onAddMany:function(){e._process()},onClear:function(){e._clear()
}},this.addListener(this._processingListener),this._listeners=[],this._data=null,this._range=null
},Timeplot.DataSource.prototype={_clear:function(){this._data=null,this._range=null
},_process:function(){this._data={times:new Array,values:new Array},this._range={earliestDate:null,latestDate:null,min:0,max:0}
},getRange:function(){return this._range},getData:function(){return this._data},getValue:function(t){if(this._data)for(var e=0;e<this._data.times.length;e++){var i=this._data.times[e];
if(i>=t)return this._data.values[e]}return 0},addListener:function(t){this._eventSource.addListener(t)
},removeListener:function(t){this._eventSource.removeListener(t)},replaceListener:function(t,e){this.removeListener(t),this.addListener(e)
}},Timeplot.ColumnSource=function(t,e){Timeplot.DataSource.apply(this,arguments),this._column=e-1
},Object.extend(Timeplot.ColumnSource.prototype,Timeplot.DataSource.prototype),Timeplot.ColumnSource.prototype.dispose=function(){this.removeListener(this._processingListener),this._clear()
},Timeplot.ColumnSource.prototype._process=function(){for(var t=this._eventSource.getCount(),e=new Array(t),i=new Array(t),a=Number.MAX_VALUE,n=Number.MIN_VALUE,o=0,s=this._eventSource.getAllEventIterator();s.hasNext();){var r=s.next(),l=r.getTime();
e[o]=l;var h=this._getValue(r);isNaN(h)||(a>h&&(a=h),h>n&&(n=h),i[o]=h),o++}this._data={times:e,values:i},n==Number.MIN_VALUE&&(n=1),this._range={earliestDate:this._eventSource.getEarliestDate(),latestDate:this._eventSource.getLatestDate(),min:a,max:n}
},Timeplot.ColumnSource.prototype._getValue=function(t){return parseFloat(t.getValues()[this._column])
},Timeplot.ColumnDiffSource=function(t,e,i){Timeplot.ColumnSource.apply(this,arguments),this._column2=i-1
},Object.extend(Timeplot.ColumnDiffSource.prototype,Timeplot.ColumnSource.prototype),Timeplot.ColumnDiffSource.prototype._getValue=function(t){var e=parseFloat(t.getValues()[this._column]),i=parseFloat(t.getValues()[this._column2]);
return e-i},Timeplot.DefaultValueGeometry=function(t){t||(t={}),this._id="id"in t?t.id:"g"+Math.round(1e6*Math.random()),this._axisColor="axisColor"in t?"string"==typeof t.axisColor?new Timeplot.Color(t.axisColor):t.axisColor:new Timeplot.Color("#606060"),this._gridColor="gridColor"in t?"string"==typeof t.gridColor?new Timeplot.Color(t.gridColor):t.gridColor:null,this._gridLineWidth="gridLineWidth"in t?t.gridLineWidth:.5,this._axisLabelsPlacement="axisLabelsPlacement"in t?t.axisLabelsPlacement:"right",this._gridSpacing="gridSpacing"in t?t.gridStep:50,this._gridType="gridType"in t?t.gridType:"short",this._gridShortSize="gridShortSize"in t?t.gridShortSize:10,this._minValue="min"in t?t.min:null,this._maxValue="max"in t?t.max:null,this._linMap={direct:function(t){return t
},inverse:function(t){return t}},this._map=this._linMap,this._labels=[],this._grid=[]
},Timeplot.DefaultValueGeometry.prototype={setTimeplot:function(t){this._timeplot=t,this._canvas=t.getCanvas(),this.reset()
},setRange:function(t){(null==this._minValue||null!=this._minValue&&t.min<this._minValue)&&(this._minValue=t.min),(null==this._maxValue||null!=this._maxValue&&1.05*t.max>this._maxValue)&&(this._maxValue=1.05*t.max),this._updateMappedValues(),(0!=this._minValue||0!=this._maxValue)&&(this._grid=this._calculateGrid())
},reset:function(){this._clearLabels(),this._updateMappedValues(),this._grid=this._calculateGrid()
},toScreen:function(t){if(this._canvas&&this._maxValue){var e=t-this._minValue;return this._canvas.height*this._map.direct(e)/this._mappedRange
}return-50},fromScreen:function(t){return this._canvas?this._map.inverse(this._mappedRange*t/this._canvas.height)+this._minValue:0
},paint:function(){if(this._timeplot){var t=this._canvas.getContext("2d");if(t.lineJoin="miter",this._gridColor){var e=t.createLinearGradient(0,0,0,this._canvas.height);
e.addColorStop(0,this._gridColor.toHexString()),e.addColorStop(.3,this._gridColor.toHexString()),e.addColorStop(1,"rgba(255,255,255,0.5)"),t.lineWidth=this._gridLineWidth,t.strokeStyle=e;
for(var i=0;i<this._grid.length;i++){var a=this._grid[i],n=Math.floor(a.y)+.5;if("undefined"!=typeof a.label){if("left"==this._axisLabelsPlacement)var o=this._timeplot.putText(this._id+"-"+i,a.label,"timeplot-grid-label",{left:4,bottom:n+2,color:this._gridColor.toHexString(),visibility:"hidden"});
else if("right"==this._axisLabelsPlacement)var o=this._timeplot.putText(this._id+"-"+i,a.label,"timeplot-grid-label",{right:4,bottom:n+2,color:this._gridColor.toHexString(),visibility:"hidden"});
n+o.clientHeight<this._canvas.height+10&&(o.style.visibility="visible")}t.beginPath(),"long"==this._gridType||0==a.label?(t.moveTo(0,n),t.lineTo(this._canvas.width,n)):"short"==this._gridType&&("left"==this._axisLabelsPlacement?(t.moveTo(0,n),t.lineTo(this._gridShortSize,n)):"right"==this._axisLabelsPlacement&&(t.moveTo(this._canvas.width,n),t.lineTo(this._canvas.width-this._gridShortSize,n))),t.stroke()
}}var s=t.createLinearGradient(0,0,0,this._canvas.height);s.addColorStop(0,this._axisColor.toString()),s.addColorStop(.5,this._axisColor.toString()),s.addColorStop(1,"rgba(255,255,255,0.5)"),t.lineWidth=1,t.strokeStyle=s,t.beginPath(),t.moveTo(0,this._canvas.height),t.lineTo(0,0),t.stroke(),t.beginPath(),t.moveTo(this._canvas.width,0),t.lineTo(this._canvas.width,this._canvas.height),t.stroke()
}},_clearLabels:function(){for(var t=0;t<this._labels.length;t++){var e=this._labels[t],i=e.parentNode;
i&&i.removeChild(e)}},_calculateGrid:function(){var t=[];if(!this._canvas||0==this._valueRange)return t;
var e=0;if(this._valueRange>1){for(;Math.pow(10,e)<this._valueRange;)e++;e--}else for(;Math.pow(10,e)>this._valueRange;)e--;
for(var i=Math.pow(10,e),a=i;;){for(var n=this.toScreen(this._minValue+a);n<this._gridSpacing;)a+=i,n=this.toScreen(this._minValue+a);
if(!(n>2*this._gridSpacing))break;i/=10,a=i}var o=0,s=this.toScreen(o);if(this._minValue>=0)for(;s<this._canvas.height;)s>0&&t.push({y:s,label:o}),o+=a,s=this.toScreen(o);
else if(this._maxValue<=0)for(;s>0;)s<this._canvas.height&&t.push({y:s,label:o}),o-=a,s=this.toScreen(o);
else{for(;s<this._canvas.height;)s>0&&t.push({y:s,label:o}),o+=a,s=this.toScreen(o);
for(o=-a,s=this.toScreen(o);s>0;)s<this._canvas.height&&t.push({y:s,label:o}),o-=a,s=this.toScreen(o)
}return t},_updateMappedValues:function(){this._valueRange=Math.abs(this._maxValue-this._minValue),this._mappedRange=this._map.direct(this._valueRange)
}},Timeplot.LogarithmicValueGeometry=function(){Timeplot.DefaultValueGeometry.apply(this,arguments),this._logMap={direct:function(t){return Math.log(t+1)/Math.log(10)
},inverse:function(t){return Math.exp(Math.log(10)*t)-1}},this._mode="log",this._map=this._logMap,this._calculateGrid=this._logarithmicCalculateGrid
},Timeplot.LogarithmicValueGeometry.prototype._linearCalculateGrid=Timeplot.DefaultValueGeometry.prototype._calculateGrid,Object.extend(Timeplot.LogarithmicValueGeometry.prototype,Timeplot.DefaultValueGeometry.prototype),Timeplot.LogarithmicValueGeometry.prototype._logarithmicCalculateGrid=function(){var t=[];
if(!this._canvas||0==this._valueRange)return t;for(var e=1,i=this.toScreen(e);i<this._canvas.height||isNaN(i);)i>0&&t.push({y:i,label:e}),e*=10,i=this.toScreen(e);
return t},Timeplot.LogarithmicValueGeometry.prototype.actLinear=function(){this._mode="lin",this._map=this._linMap,this._calculateGrid=this._linearCalculateGrid,this.reset()
},Timeplot.LogarithmicValueGeometry.prototype.actLogarithmic=function(){this._mode="log",this._map=this._logMap,this._calculateGrid=this._logarithmicCalculateGrid,this.reset()
},Timeplot.LogarithmicValueGeometry.prototype.toggle=function(){"log"==this._mode?this.actLinear():this.actLogarithmic()
},Timeplot.DefaultTimeGeometry=function(t){t||(t={}),this._id="id"in t?t.id:"g"+Math.round(1e6*Math.random()),this._locale="locale"in t?t.locale:"en",this._timeZone="timeZone"in t?t.timeZone:SimileAjax.DateTime.getTimezone(),this._labeller="labeller"in t?t.labeller:null,this._axisColor="axisColor"in t?"string"==t.axisColor?new Timeplot.Color(t.axisColor):t.axisColor:new Timeplot.Color("#606060"),this._gridColor="gridColor"in t?"string"==t.gridColor?new Timeplot.Color(t.gridColor):t.gridColor:null,this._gridLineWidth="gridLineWidth"in t?t.gridLineWidth:.5,this._axisLabelsPlacement="axisLabelsPlacement"in t?t.axisLabelsPlacement:"bottom",this._gridStep="gridStep"in t?t.gridStep:100,this._gridStepRange="gridStepRange"in t?t.gridStepRange:20,this._min="min"in t?t.min:null,this._max="max"in t?t.max:null,this._timeValuePosition="timeValuePosition"in t?t.timeValuePosition:"bottom",this._unit="unit"in t?t.unit:Timeline.NativeDateUnit,this._linMap={direct:function(t){return t
},inverse:function(t){return t}},this._map=this._linMap,this._labeler=this._unit.createLabeller(this._locale,this._timeZone);
var e=this._unit.getParser("iso8601");this._min&&!this._min.getTime&&(this._min=e(this._min)),this._max&&!this._max.getTime&&(this._max=e(this._max)),this._grid=[]
},Timeplot.DefaultTimeGeometry.prototype={setTimeplot:function(t){this._timeplot=t,this._canvas=t.getCanvas(),this.reset()
},setRange:function(t){this._min?this._earliestDate=this._min:t.earliestDate&&(null==this._earliestDate||null!=this._earliestDate&&t.earliestDate.getTime()<this._earliestDate.getTime())&&(this._earliestDate=t.earliestDate),this._max?this._latestDate=this._max:t.latestDate&&(null==this._latestDate||null!=this._latestDate&&t.latestDate.getTime()>this._latestDate.getTime())&&(this._latestDate=t.latestDate),this._earliestDate||this._latestDate?this.reset():this._grid=[]
},reset:function(){this._updateMappedValues(),this._canvas&&(this._grid=this._calculateGrid())
},toScreen:function(t){if(this._canvas&&this._latestDate){var e=t-this._earliestDate.getTime();
return this._canvas.width*this._map.direct(e)/this._mappedPeriod}return-50},fromScreen:function(t){return this._canvas?this._map.inverse(this._mappedPeriod*t/this._canvas.width)+this._earliestDate.getTime():0
},getPeriod:function(){return this._period},getLabeler:function(){return this._labeler
},getUnit:function(){return this._unit},paint:function(){if(this._canvas){var t=(this._unit,this._canvas.getContext("2d")),e=t.createLinearGradient(0,0,0,this._canvas.height);
if(t.strokeStyle=e,t.lineWidth=this._gridLineWidth,t.lineJoin="miter",this._gridColor){e.addColorStop(0,this._gridColor.toString()),e.addColorStop(1,"rgba(255,255,255,0.9)");
for(var i=0;i<this._grid.length;i++){var a=this._grid[i],n=Math.floor(a.x)+.5;if("top"==this._axisLabelsPlacement)var o=this._timeplot.putText(this._id+"-"+i,a.label,"timeplot-grid-label",{left:n+4,top:2,visibility:"hidden"});
else if("bottom"==this._axisLabelsPlacement)var o=this._timeplot.putText(this._id+"-"+i,a.label,"timeplot-grid-label",{left:n+4,bottom:2,visibility:"hidden"});
n+o.clientWidth<this._canvas.width+10&&(o.style.visibility="visible"),t.beginPath(),t.moveTo(n,0),t.lineTo(n,this._canvas.height),t.stroke()
}}e.addColorStop(0,this._axisColor.toString()),e.addColorStop(1,"rgba(255,255,255,0.5)"),t.lineWidth=1,e.addColorStop(0,this._axisColor.toString()),t.beginPath(),t.moveTo(0,0),t.lineTo(this._canvas.width,0),t.stroke()
}},_calculateGrid:function(){var t=[],e=SimileAjax.DateTime,i=this._unit,a=this._period;
if(0==a)return t;if(a>e.gregorianUnitLengths[e.MILLENNIUM])n=e.MILLENNIUM;else for(var n=e.MILLENNIUM;n>0;n--)if(e.gregorianUnitLengths[n-1]<=a&&a<e.gregorianUnitLengths[n]){n--;
break}var o=i.cloneValue(this._earliestDate);do{e.roundDownToInterval(o,n,this._timeZone,1,0);
var s=this.toScreen(i.toNumber(o));switch(n){case e.SECOND:var r=o.toLocaleTimeString();
break;case e.MINUTE:var l=o.getMinutes(),r=o.getHours()+":"+(10>l?"0":"")+l;break;
case e.HOUR:var r=o.getHours()+":00";break;case e.DAY:case e.WEEK:case e.MONTH:var r=o.toLocaleDateString();
break;case e.YEAR:case e.DECADE:case e.CENTURY:case e.MILLENNIUM:var r=o.getUTCFullYear()
}s>0&&t.push({x:s,label:r}),e.incrementByInterval(o,n,this._timeZone)}while(o.getTime()<this._latestDate.getTime());
return t},_updateMappedValues:function(){this._latestDate&&this._earliestDate?(this._period=this._latestDate.getTime()-this._earliestDate.getTime(),this._mappedPeriod=this._map.direct(this._period)):(this._period=0,this._mappedPeriod=0)
}},Timeplot.MagnifyingTimeGeometry=function(){Timeplot.DefaultTimeGeometry.apply(this,arguments);
var t=this;this._MagnifyingMap={direct:function(e){if(e<t._leftTimeMargin)var i=e*t._leftRate;
else if(t._leftTimeMargin<e&&e<t._rightTimeMargin)var i=e*t._expandedRate+t._expandedTimeTranslation;
else var i=e*t._rightRate+t._rightTimeTranslation;return i},inverse:function(e){if(e<t._leftScreenMargin)var i=e/t._leftRate;
else if(t._leftScreenMargin<e&&e<t._rightScreenMargin)var i=e/t._expandedRate+t._expandedScreenTranslation;
else var i=e/t._rightRate+t._rightScreenTranslation;return i}},this._mode="lin",this._map=this._linMap
},Object.extend(Timeplot.MagnifyingTimeGeometry.prototype,Timeplot.DefaultTimeGeometry.prototype),Timeplot.MagnifyingTimeGeometry.prototype.initialize=function(){Timeplot.DefaultTimeGeometry.prototype.initialize.apply(this,arguments),this._lens||(this._lens=this._timeplot.putDiv("lens","timeplot-lens"));
var t=2592e6,e=this,i=function(i){var a=i.clientWidth,n=e._timeplot.locate(i);e.setMagnifyingParams(n.x+a/2,a,t),e.actMagnifying(),e._timeplot.paint()
},a=function(t,i){e._canvas.startCoords=SimileAjax.DOM.getEventRelativeCoordinates(i,t),e._canvas.pressed=!0
},n=function(t,a){e._canvas.pressed=!1;var n=SimileAjax.DOM.getEventRelativeCoordinates(a,t);
Timeplot.Math.isClose(n,e._canvas.startCoords,5)?(e._lens.style.display="none",e.actLinear(),e._timeplot.paint()):(e._lens.style.cursor="move",i(e._lens))
},o=function(t,i){if(e._canvas.pressed){var a=SimileAjax.DOM.getEventRelativeCoordinates(i,t);
a.x<0&&(a.x=0),a.x>e._canvas.width&&(a.x=e._canvas.width),e._timeplot.placeDiv(e._lens,{left:e._canvas.startCoords.x,width:a.x-e._canvas.startCoords.x,bottom:0,height:e._canvas.height,display:"block"})
}},s=function(t,i){e._lens.startCoords=SimileAjax.DOM.getEventRelativeCoordinates(i,t),e._lens.pressed=!0
},r=function(){e._lens.pressed=!1},l=function(t,a){if(e._lens.pressed){var n=SimileAjax.DOM.getEventRelativeCoordinates(a,t),o=e._lens,s=o.offsetLeft+n.x-o.startCoords.x;
s<e._timeplot._paddingX&&(s=e._timeplot._paddingX),s+o.clientWidth>e._canvas.width-e._timeplot._paddingX&&(s=e._canvas.width-o.clientWidth+e._timeplot._paddingX),o.style.left=s,i(o)
}};this._canvas.instrumented||(SimileAjax.DOM.registerEvent(this._canvas,"mousedown",a),SimileAjax.DOM.registerEvent(this._canvas,"mousemove",o),SimileAjax.DOM.registerEvent(this._canvas,"mouseup",n),SimileAjax.DOM.registerEvent(this._canvas,"mouseup",r),this._canvas.instrumented=!0),this._lens.instrumented||(SimileAjax.DOM.registerEvent(this._lens,"mousedown",s),SimileAjax.DOM.registerEvent(this._lens,"mousemove",l),SimileAjax.DOM.registerEvent(this._lens,"mouseup",r),SimileAjax.DOM.registerEvent(this._lens,"mouseup",n),this._lens.instrumented=!0)
},Timeplot.MagnifyingTimeGeometry.prototype.setMagnifyingParams=function(t,e,i){e/=2,i/=2;
var a=this._canvas.width,n=this._period;0>t&&(t=0),t>a&&(t=a),0>t-e&&(e=t),t+e>a&&(e=a-t);
var o=this.fromScreen(t)-this._earliestDate.getTime();0>o-i&&(i=o),o+i>n&&(i=n-o),this._centerX=t,this._centerTime=o,this._aperture=e,this._aperturePeriod=i,this._leftScreenMargin=this._centerX-this._aperture,this._rightScreenMargin=this._centerX+this._aperture,this._leftTimeMargin=this._centerTime-this._aperturePeriod,this._rightTimeMargin=this._centerTime+this._aperturePeriod,this._leftRate=(t-e)/(o-i),this._expandedRate=e/i,this._rightRate=(a-t-e)/(n-o-i),this._expandedTimeTranslation=this._centerX-this._centerTime*this._expandedRate,this._expandedScreenTranslation=this._centerTime-this._centerX/this._expandedRate,this._rightTimeTranslation=t+e-(o+i)*this._rightRate,this._rightScreenTranslation=o+i-(t+e)/this._rightRate,this._updateMappedValues()
},Timeplot.MagnifyingTimeGeometry.prototype.actLinear=function(){this._mode="lin",this._map=this._linMap,this.reset()
},Timeplot.MagnifyingTimeGeometry.prototype.actMagnifying=function(){this._mode="Magnifying",this._map=this._MagnifyingMap,this.reset()
},Timeplot.MagnifyingTimeGeometry.prototype.toggle=function(){"Magnifying"==this._mode?this.actLinear():this.actMagnifying()
},Timeplot.Color=function(t){this._fromHex(t)},Timeplot.Color.prototype={set:function(t,e,i,a){return this.r=t,this.g=e,this.b=i,this.a=a?a:1,this.check()
},transparency:function(t){return this.a=t,this.check()},lighten:function(t){var e=new Timeplot.Color;
return e.set(this.r+=parseInt(t,10),this.g+=parseInt(t,10),this.b+=parseInt(t,10))
},darken:function(t){var e=new Timeplot.Color;return e.set(this.r-=parseInt(t,10),this.g-=parseInt(t,10),this.b-=parseInt(t,10))
},check:function(){return this.r>255?this.r=255:this.r<0&&(this.r=0),this.g>255?this.g=255:this.g<0&&(this.g=0),this.b>255?this.b=255:this.b<0&&(this.b=0),this.a>1?this.a=1:this.a<0&&(this.a=0),this
},toString:function(t){var e=t?t:this.a?this.a:1;return"rgba("+this.r+","+this.g+","+this.b+","+e+")"
},toHexString:function(){return"#"+this._toHex(this.r)+this._toHex(this.g)+this._toHex(this.b)
},_fromHex:function(t){return/^#?([\da-f]{3}|[\da-f]{6})$/i.test(t)?(t=t.replace(/^#/,"").replace(/^([\da-f])([\da-f])([\da-f])$/i,"$1$1$2$2$3$3"),this.r=parseInt(t.substr(0,2),16),this.g=parseInt(t.substr(2,2),16),this.b=parseInt(t.substr(4,2),16)):/^rgb *\( *\d{0,3} *, *\d{0,3} *, *\d{0,3} *\)$/i.test(t)&&(t=t.match(/^rgb *\( *(\d{0,3}) *, *(\d{0,3}) *, *(\d{0,3}) *\)$/i),this.r=parseInt(t[1],10),this.g=parseInt(t[2],10),this.b=parseInt(t[3],10)),this.a=1,this.check()
},_toHex:function(t){var e="0123456789ABCDEF";if(0>t)return"00";if(t>255)return"FF";
var i=Math.floor(t/16),a=t%16;return e.charAt(i)+e.charAt(a)}},Timeplot.Math={range:function(t){for(var e=t.length,i=Number.MAX_VALUE,a=Number.MIN_VALUE,n=0;e>n;n++){var o=t[n];
i>o&&(i=o),o>a&&(a=o)}return{min:i,max:a}},movingAverage:function(t,e){for(var i=t.length,a=new Array(i),n=0;i>n;n++){for(var o=0,s=n-e;n+e>s;s++){if(0>s)var r=t[0];
else if(s>=i)var r=a[n-1];else var r=t[s];o+=r}a[n]=o/(2*e)}return a},integral:function(t){for(var e=t.length,i=new Array(e),a=0,n=0;e>n;n++)a+=t[n],i[n]=a;
return i},normalize:function(t){for(var e=t.length,i=0,a=0;e>a;a++)i+=t[a];for(var a=0;e>a;a++)t[a]/=i;
return t},convolution:function(t,e){for(var i=t.length,a=e.length,n=new Array(i),o=0;i>o;o++){for(var s=0,r=i>o+a?o+a:i,l=o;r>l;l++){var h=t[l-a],u=e[l-o];
s+=h*u}n[o]=s}return n},heavyside:function(t){for(var e=new Array(t),i=1/t,a=0;t>a;a++)e[a]=i;
return e},gaussian:function(size,threshold){with(Math)for(var radius=size/2,variance=radius*radius/log(threshold),g=new Array(size),t=0;size>t;t++){var l=t-radius;
g[t]=exp(-variance*l*l)}return this.normalize(g)},round:function(x,n){with(Math){if(abs(x)>1){var l=floor(log(x)/log(10)),d=round(exp((l-n+1)*log(10))),y=round(round(x/d)*d);
return y}return log("FIXME(SM): still to implement for 0 < abs(x) < 1"),x}},tanh:function(t){if(t>5)return 1;
if(5>t)return-1;var e=Math.exp(2*t);return(e-1)/(e+1)},isClose:function(t,e,i){return t&&e&&Math.abs(t.x-e.x)<i&&Math.abs(t.y-e.y)<i
}},Timeplot.Operator={sum:function(t){return Timeplot.Math.integral(t.values)},average:function(t,e){var i="size"in e?e.size:30,a=Timeplot.Math.movingAverage(t.values,i);
return a}},Timeplot.Processor=function(t,e,i){this._dataSource=t,this._operator=e,this._params=i,this._data={times:new Array,values:new Array},this._range={earliestDate:null,latestDate:null,min:0,max:0};
var a=this;this._processingListener={onAddMany:function(){a._process()},onClear:function(){a._clear()
}},this.addListener(this._processingListener)},Timeplot.Processor.prototype={_clear:function(){this.removeListener(this._processingListener),this._dataSource._clear()
},_process:function(){var t=this._dataSource.getData(),e=this._dataSource.getRange(),i=this._operator(t,this._params),a=Timeplot.Math.range(i);
this._data={times:t.times,values:i},this._range={earliestDate:e.earliestDate,latestDate:e.latestDate,min:a.min,max:a.max}
},getRange:function(){return this._range},getData:function(){return this._data},getValue:Timeplot.DataSource.prototype.getValue,addListener:function(t){this._dataSource.addListener(t)
},removeListener:function(t){this._dataSource.removeListener(t)}};