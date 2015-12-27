Timeline.Debug=SimileAjax.Debug;var log=SimileAjax.Debug.log;Object.extend=function(e,t){for(var i in t)e[i]=t[i];
return e},Timeplot.create=function(e,t){return new Timeplot._Impl(e,t)},Timeplot.createPlotInfo=function(e){return{id:"id"in e?e.id:"p"+Math.round(1e6*Math.random()),name:"name"in e?e.name:"",dataSource:"dataSource"in e?e.dataSource:null,eventSource:"eventSource"in e?e.eventSource:null,timeGeometry:"timeGeometry"in e?e.timeGeometry:new Timeplot.DefaultTimeGeometry,valueGeometry:"valueGeometry"in e?e.valueGeometry:new Timeplot.DefaultValueGeometry,timeZone:"timeZone"in e?e.timeZone:0,fillColor:"fillColor"in e?"string"==e.fillColor?new Timeplot.Color(e.fillColor):e.fillColor:null,fillGradient:"fillGradient"in e?e.fillGradient:!0,fillFrom:"fillFrom"in e?e.fillFrom:Number.NEGATIVE_INFINITY,lineColor:"lineColor"in e?"string"==e.lineColor?new Timeplot.Color(e.lineColor):e.lineColor:new Timeplot.Color("#606060"),lineWidth:"lineWidth"in e?e.lineWidth:1,dotRadius:"dotRadius"in e?e.dotRadius:2,dotColor:"dotColor"in e?e.dotColor:null,eventLineWidth:"eventLineWidth"in e?e.eventLineWidth:1,showValues:"showValues"in e?e.showValues:!1,roundValues:"roundValues"in e?e.roundValues:!0,valuesOpacity:"valuesOpacity"in e?e.valuesOpacity:75,bubbleWidth:"bubbleWidth"in e?e.bubbleWidth:300,bubbleHeight:"bubbleHeight"in e?e.bubbleHeight:200,toolTipFormat:"toolTipFormat"in e?e.toolTipFormat:void 0,headerFormat:"headerFormat"in e?e.headerFormat:void 0,getSelectedRegion:"getSelectedRegion"in e?e.getSelectedRegion:void 0,hideZeroToolTipValues:"hideZeroToolTipValues"in e?e.hideZeroToolTipValues:void 0,showValuesMode:"showValuesMode"in e?e.showValuesMode:void 0,rangeColor:"rangeColor"in e?e.rangeColor:"#00FF00"}
},Timeplot._Impl=function(e,t){this._id="t"+Math.round(1e6*Math.random()),this._containerDiv=e,this._plotInfos=t,this._painters={background:[],foreground:[]},this._painter=null,this._active=!1,this._upright=!1,this._initialize()
},Timeplot._Impl.prototype={dispose:function(){for(var e=0;e<this._plots.length;e++)this._plots[e].dispose();
this._plots=null,this._plotsInfos=null,this._containerDiv.innerHTML=""},getElement:function(){return this._containerDiv
},getDocument:function(){return this._containerDiv.ownerDocument},add:function(e){this._containerDiv.appendChild(e)
},remove:function(e){this._containerDiv.removeChild(e)},addPainter:function(e,t){var i=this._painters[e];
if(i){for(var n=0;n<i.length;n++)if(i[n].context._id==t.context._id)return;i.push(t)
}},removePainter:function(e,t){var i=this._painters[e];if(i)for(var n=0;n<i.length;n++)if(i[n].context._id==t.context._id){i.splice(n,1);
break}},getWidth:function(){return this._containerDiv.clientWidth},getHeight:function(){return this._containerDiv.clientHeight
},getCanvas:function(){return this._canvas},loadText:function(e,t,i,n,o,a){if(this._active){var s=this,r=function(t){alert("Failed to load data xml from "+e+"\n"+t),s.hideLoadingMessage()
},l=function(r){try{i.loadText(r.responseText,t,e,n,o),void 0!=a&&a(i.getRange())
}catch(l){SimileAjax.Debug.exception(l)}finally{s.hideLoadingMessage()}};this.showLoadingMessage(),window.setTimeout(function(){SimileAjax.XmlHttp.get(e,r,l)
},0)}},loadXML:function(e,t){if(this._active){var i=this,n=function(t){alert("Failed to load data xml from "+e+"\n"+t),i.hideLoadingMessage()
},o=function(n){try{var o=n.responseXML;!o.documentElement&&n.responseStream&&o.load(n.responseStream),t.loadXML(o,e)
}finally{i.hideLoadingMessage()}};this.showLoadingMessage(),window.setTimeout(function(){SimileAjax.XmlHttp.get(e,n,o)
},0)}},loadJSON:function(url,eventSource,eventFunction){if(this._active){var tl=this,fError=function(e){alert("Failed to load data json from "+url+"\n"+e),tl.hideLoadingMessage()
},fDone=function(xmlhttp){try{var data=eval("("+xmlhttp.responseText+")");void 0!=eventFunction&&eventFunction(data),eventSource.loadJSON(data,url)
}finally{tl.hideLoadingMessage()}};this.showLoadingMessage(),window.setTimeout(function(){SimileAjax.XmlHttp.get(url,fError,fDone)
},0)}},putText:function(e,t,i,n){var o=this.putDiv(e,"timeplot-div "+i,n);return o.innerHTML=t,o
},putDiv:function(e,t,i){var n=this._id+"-"+e,o=document.getElementById(n);if(!o){var a=this._containerDiv.firstChild;
o=document.createElement("div"),o.setAttribute("id",n),a.appendChild(o)}return o.setAttribute("class","timeplot-div "+t),o.setAttribute("className","timeplot-div "+t),this.placeDiv(o,i),o
},placeDiv:function(e,t){if(t)for(style in t)"left"==style?(t[style]+=this._paddingX,t[style]+="px"):"right"==style?(t[style]+=this._paddingX,t[style]+="px"):"top"==style?(t[style]+=this._paddingY,t[style]+="px"):"bottom"==style?(t[style]+=this._paddingY,t[style]+="px"):"width"==style?(t[style]<0&&(t[style]=0),t[style]+="px"):"height"==style&&(t[style]<0&&(t[style]=0),t[style]+="px"),e.style[style]=t[style]
},locate:function(e){return{x:e.offsetLeft-this._paddingX,y:e.offsetTop-this._paddingY}
},update:function(){if(this._active){for(var e=0;e<this._plots.length;e++){var t=this._plots[e],i=t.getDataSource();
if(i){var n=i.getRange();n&&(t._valueGeometry.setRange(n),t._timeGeometry.setRange(n))
}t.hideValues()}this.paint()}},repaint:function(){if(this._active){this._prepareCanvas();
for(var e=0;e<this._plots.length;e++){var t=this._plots[e];t._timeGeometry&&t._timeGeometry.reset(),t._valueGeometry&&t._valueGeometry.reset()
}this.paint()}},paint:function(){if(this._active&&null==this._painter){var e=this;
this._painter=window.setTimeout(function(){e._clearCanvas();for(var t=function(t,i){try{i.setTimeplot&&i.setTimeplot(e),t.apply(i,[])
}catch(n){SimileAjax.Debug.exception(n)}},i=e._painters.background,n=0;n<i.length;n++)t(i[n].action,i[n].context);
for(var o=e._painters.foreground,n=0;n<o.length;n++)t(o[n].action,o[n].context);e._painter=null
},20)}},_clearCanvas:function(){var e=this.getCanvas(),t=e.getContext("2d");t.clearRect(0,0,e.width,e.height)
},_clearLabels:function(){var e=this._containerDiv.firstChild;e&&this._containerDiv.removeChild(e),e=document.createElement("div"),this._containerDiv.appendChild(e)
},_prepareCanvas:function(){var e=this.getCanvas(),t=SimileAjax.jQuery(this._containerDiv);
this._paddingX=(parseInt(t.css("paddingLeft"))+parseInt(t.css("paddingRight")))/2,this._paddingY=(parseInt(t.css("paddingTop"))+parseInt(t.css("paddingBottom")))/2,e.width=this.getWidth()-2*this._paddingX,e.height=this.getHeight()-2*this._paddingY;
var i=e.getContext("2d");this._setUpright(i,e),i.globalCompositeOperation="source-over"
},_setUpright:function(e,t){SimileAjax.Platform.browser.isIE||(this._upright=!1),this._upright||(this._upright=!0,e.translate(0,t.height),e.scale(1,-1))
},_isBrowserSupported:function(e){var t=SimileAjax.Platform.browser;return e.getContext&&window.getComputedStyle||t.isIE&&t.majorVersion>=6?!0:!1
},_initialize:function(){SimileAjax.WindowManager.initialize();var e=this._containerDiv,t=e.ownerDocument;
for(e.className="timeplot-container "+e.className;e.firstChild;)e.removeChild(e.firstChild);
var i=t.createElement("canvas");if(this._isBrowserSupported(i)){this._clearLabels(),this._canvas=i,i.className="timeplot-canvas",e.appendChild(i),!i.getContext&&G_vmlCanvasManager&&(i=G_vmlCanvasManager.initElement(this._canvas),this._canvas=i),this._prepareCanvas();
var n=SimileAjax.Graphics.createTranslucentImage(Timeplot.urlPrefix+"images/copyright.png");
n.className="timeplot-copyright",n.title="Timeplot (c) SIMILE - http://simile.mit.edu/timeplot/",SimileAjax.DOM.registerEvent(n,"click",function(){window.location="http://simile.mit.edu/timeplot/"
}),e.appendChild(n);var o=this,a={onAddMany:function(){o.update()},onAddOne:function(){o.update()
},onClear:function(){o.update()}};if(this._plots=[],this._plotInfos)for(var s=0;s<this._plotInfos.length;s++){var r=new Timeplot.Plot(this,this._plotInfos[s]),l=r.getDataSource();
l&&l.addListener(a),this.addPainter("background",{context:r.getTimeGeometry(),action:r.getTimeGeometry().paint}),this.addPainter("background",{context:r.getValueGeometry(),action:r.getValueGeometry().paint}),this.addPainter("foreground",{context:r,action:r.paint}),this._plots.push(r),r.initialize()
}var d=SimileAjax.Graphics.createMessageBubble(t);d.containerDiv.className="timeplot-message-container",e.appendChild(d.containerDiv),d.contentDiv.className="timeplot-message",d.contentDiv.innerHTML="<img src='"+Timeplot.urlPrefix+"images/progress-running.gif' /> Loading...",this.showLoadingMessage=function(){d.containerDiv.style.display="block"
},this.hideLoadingMessage=function(){d.containerDiv.style.display="none"},this._active=!0
}else this._message=SimileAjax.Graphics.createMessageBubble(t),this._message.containerDiv.className="timeplot-message-container",this._message.containerDiv.style.top="15%",this._message.containerDiv.style.left="20%",this._message.containerDiv.style.right="20%",this._message.containerDiv.style.minWidth="20em",this._message.contentDiv.className="timeplot-message",this._message.contentDiv.innerHTML="We're terribly sorry, but your browser is not currently supported by <a href='http://simile.mit.edu/timeplot/'>Timeplot</a>.<br><br> We are working on supporting it in the near future but, for now, see the <a href='http://simile.mit.edu/wiki/Timeplot_Limitations'>list of currently supported browsers</a>.",this._message.containerDiv.style.display="block",e.appendChild(this._message.containerDiv)
}};