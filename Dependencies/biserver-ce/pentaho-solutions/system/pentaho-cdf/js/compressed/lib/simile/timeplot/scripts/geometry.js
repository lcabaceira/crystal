Timeplot.DefaultValueGeometry=function(t){t||(t={}),this._id="id"in t?t.id:"g"+Math.round(1e6*Math.random()),this._axisColor="axisColor"in t?"string"==typeof t.axisColor?new Timeplot.Color(t.axisColor):t.axisColor:new Timeplot.Color("#606060"),this._gridColor="gridColor"in t?"string"==typeof t.gridColor?new Timeplot.Color(t.gridColor):t.gridColor:null,this._gridLineWidth="gridLineWidth"in t?t.gridLineWidth:.5,this._axisLabelsPlacement="axisLabelsPlacement"in t?t.axisLabelsPlacement:"right",this._gridSpacing="gridSpacing"in t?t.gridStep:50,this._gridType="gridType"in t?t.gridType:"short",this._gridShortSize="gridShortSize"in t?t.gridShortSize:10,this._minValue="min"in t?t.min:null,this._maxValue="max"in t?t.max:null,this._linMap={direct:function(t){return t
},inverse:function(t){return t}},this._map=this._linMap,this._labels=[],this._grid=[],this._valueFormat="valueFormat"in t?t.valueFormat:void 0
},Timeplot.DefaultValueGeometry.prototype={setTimeplot:function(t){this._timeplot=t,this._canvas=t.getCanvas(),this.reset()
},setRange:function(t){(null==this._minValue||null!=this._minValue&&t.min<this._minValue)&&(this._minValue=t.min),(null==this._maxValue||null!=this._maxValue&&1.05*t.max>this._maxValue)&&(this._maxValue=1.05*t.max),this._updateMappedValues(),(0!=this._minValue||0!=this._maxValue)&&(this._grid=this._calculateGrid())
},reset:function(){this._clearLabels(),this._updateMappedValues(),this._grid=this._calculateGrid()
},toScreen:function(t){if(this._canvas&&this._maxValue){var i=t-this._minValue;return this._canvas.height*this._map.direct(i)/this._mappedRange
}return-50},fromScreen:function(t){return this._canvas?this._map.inverse(this._mappedRange*t/this._canvas.height)+this._minValue:0
},paint:function(){if(this._timeplot){var t=this._canvas.getContext("2d");if(t.lineJoin="miter",this._gridColor){var i=t.createLinearGradient(0,0,0,this._canvas.height);
i.addColorStop(0,this._gridColor.toHexString()),i.addColorStop(.3,this._gridColor.toHexString()),i.addColorStop(1,"rgba(255,255,255,0.5)"),t.lineWidth=this._gridLineWidth,t.strokeStyle=i;
for(var e=0;e<this._grid.length;e++){var a=this._grid[e],s=Math.floor(a.y)+.5;if("undefined"!=typeof a.label){if(void 0!=this._valueFormat&&"function"==typeof this._valueFormat&&(a.label=this._valueFormat(a.label)),"left"==this._axisLabelsPlacement)var n=this._timeplot.putText(this._id+"-"+e,a.label,"timeplot-grid-label",{left:4,bottom:s+2,color:this._gridColor.toHexString(),visibility:"hidden"});
else if("right"==this._axisLabelsPlacement)var n=this._timeplot.putText(this._id+"-"+e,a.label,"timeplot-grid-label",{right:4,bottom:s+2,color:this._gridColor.toHexString(),visibility:"hidden"});
s+n.clientHeight<this._canvas.height+10&&(n.style.visibility="visible")}t.beginPath(),"long"==this._gridType||0==a.label?(t.moveTo(0,s),t.lineTo(this._canvas.width,s)):"short"==this._gridType&&("left"==this._axisLabelsPlacement?(t.moveTo(0,s),t.lineTo(this._gridShortSize,s)):"right"==this._axisLabelsPlacement&&(t.moveTo(this._canvas.width,s),t.lineTo(this._canvas.width-this._gridShortSize,s))),t.stroke()
}}var r=t.createLinearGradient(0,0,0,this._canvas.height);r.addColorStop(0,this._axisColor.toString()),r.addColorStop(.5,this._axisColor.toString()),r.addColorStop(1,"rgba(255,255,255,0.5)"),t.lineWidth=1,t.strokeStyle=r,t.beginPath(),t.moveTo(0,this._canvas.height),t.lineTo(0,0),t.stroke(),t.beginPath(),t.moveTo(this._canvas.width,0),t.lineTo(this._canvas.width,this._canvas.height),t.stroke()
}},_clearLabels:function(){for(var t=0;t<this._labels.length;t++){var i=this._labels[t],e=i.parentNode;
e&&e.removeChild(i)}},_calculateGrid:function(){var t=[];if(!this._canvas||0==this._valueRange)return t;
var i=0;if(this._valueRange>1){for(;Math.pow(10,i)<this._valueRange;)i++;i--}else for(;Math.pow(10,i)>this._valueRange;)i--;
for(var e=Math.pow(10,i),a=e;;){for(var s=this.toScreen(this._minValue+a);s<this._gridSpacing;)a+=e,s=this.toScreen(this._minValue+a);
if(!(s>2*this._gridSpacing))break;e/=10,a=e}var n=0,r=this.toScreen(n);if(this._minValue>=0)for(;r<this._canvas.height;)r>0&&t.push({y:r,label:n}),n+=a,r=this.toScreen(n);
else if(this._maxValue<=0)for(;r>0;)r<this._canvas.height&&t.push({y:r,label:n}),n-=a,r=this.toScreen(n);
else{for(;r<this._canvas.height;)r>0&&t.push({y:r,label:n}),n+=a,r=this.toScreen(n);
for(n=-a,r=this.toScreen(n);r>0;)r<this._canvas.height&&t.push({y:r,label:n}),n-=a,r=this.toScreen(n)
}return t},_updateMappedValues:function(){this._valueRange=Math.abs(this._maxValue-this._minValue),this._mappedRange=this._map.direct(this._valueRange)
}},Timeplot.LogarithmicValueGeometry=function(){Timeplot.DefaultValueGeometry.apply(this,arguments),this._logMap={direct:function(t){return Math.log(t+1)/Math.log(10)
},inverse:function(t){return Math.exp(Math.log(10)*t)-1}},this._mode="log",this._map=this._logMap,this._calculateGrid=this._logarithmicCalculateGrid
},Timeplot.LogarithmicValueGeometry.prototype._linearCalculateGrid=Timeplot.DefaultValueGeometry.prototype._calculateGrid,Object.extend(Timeplot.LogarithmicValueGeometry.prototype,Timeplot.DefaultValueGeometry.prototype),Timeplot.LogarithmicValueGeometry.prototype._logarithmicCalculateGrid=function(){var t=[];
if(!this._canvas||0==this._valueRange)return t;for(var i=1,e=this.toScreen(i);e<this._canvas.height||isNaN(e);)e>0&&t.push({y:e,label:i}),i*=10,e=this.toScreen(i);
return t},Timeplot.LogarithmicValueGeometry.prototype.actLinear=function(){this._mode="lin",this._map=this._linMap,this._calculateGrid=this._linearCalculateGrid,this.reset()
},Timeplot.LogarithmicValueGeometry.prototype.actLogarithmic=function(){this._mode="log",this._map=this._logMap,this._calculateGrid=this._logarithmicCalculateGrid,this.reset()
},Timeplot.LogarithmicValueGeometry.prototype.toggle=function(){"log"==this._mode?this.actLinear():this.actLogarithmic()
},Timeplot.DefaultTimeGeometry=function(t){t||(t={}),this._id="id"in t?t.id:"g"+Math.round(1e6*Math.random()),this._locale="locale"in t?t.locale:"en",this._timeZone="timeZone"in t?t.timeZone:SimileAjax.DateTime.getTimezone(),this._labeller="labeller"in t?t.labeller:null,this._axisColor="axisColor"in t?"string"==t.axisColor?new Timeplot.Color(t.axisColor):t.axisColor:new Timeplot.Color("#606060"),this._gridColor="gridColor"in t?"string"==t.gridColor?new Timeplot.Color(t.gridColor):t.gridColor:null,this._gridLineWidth="gridLineWidth"in t?t.gridLineWidth:.5,this._axisLabelsPlacement="axisLabelsPlacement"in t?t.axisLabelsPlacement:"bottom",this._gridStep="gridStep"in t?t.gridStep:100,this._gridStepRange="gridStepRange"in t?t.gridStepRange:20,this._min="min"in t?t.min:null,this._max="max"in t?t.max:null,this._timeValuePosition="timeValuePosition"in t?t.timeValuePosition:"bottom",this._unit="unit"in t?t.unit:Timeline.NativeDateUnit,this._linMap={direct:function(t){return t
},inverse:function(t){return t}},this._map=this._linMap,this._labeler=this._unit.createLabeller(this._locale,this._timeZone);
var i=this._unit.getParser("iso8601");this._min&&!this._min.getTime&&(this._min=i(this._min)),this._max&&!this._max.getTime&&(this._max=i(this._max)),this._grid=[],this._yAxisColor="yAxisColor"in t?t.yAxisColor:"rgba(255,255,255,0.9)"
},Timeplot.DefaultTimeGeometry.prototype={setTimeplot:function(t){this._timeplot=t,this._canvas=t.getCanvas(),this.reset()
},setRange:function(t){this._min?this._earliestDate=this._min:t.earliestDate&&(null==this._earliestDate||null!=this._earliestDate&&t.earliestDate.getTime()<this._earliestDate.getTime())&&(this._earliestDate=t.earliestDate),this._max?this._latestDate=this._max:t.latestDate&&(null==this._latestDate||null!=this._latestDate&&t.latestDate.getTime()>this._latestDate.getTime())&&(this._latestDate=t.latestDate),this._earliestDate||this._latestDate?this.reset():this._grid=[]
},reset:function(){this._updateMappedValues(),this._canvas&&(this._grid=this._calculateGrid())
},toScreen:function(t){if(this._canvas&&this._latestDate){var i=t-this._earliestDate.getTime();
return this._canvas.width*this._map.direct(i)/this._mappedPeriod}return-50},fromScreen:function(t){return this._canvas?this._map.inverse(this._mappedPeriod*t/this._canvas.width)+this._earliestDate.getTime():0
},getPeriod:function(){return this._period},getLabeler:function(){return this._labeler
},getUnit:function(){return this._unit},paint:function(){if(this._canvas){var t=(this._unit,this._canvas.getContext("2d")),i=t.createLinearGradient(0,0,0,this._canvas.height);
if(t.strokeStyle=i,t.lineWidth=this._gridLineWidth,t.lineJoin="miter",this._gridColor){i.addColorStop(0,this._gridColor.toString()),i.addColorStop(1,this._yAxisColor);
for(var e=0;e<this._grid.length;e++){var a=this._grid[e],s=Math.floor(a.x)+.5;if("top"==this._axisLabelsPlacement)var n=this._timeplot.putText(this._id+"-"+e,a.label,"timeplot-grid-label",{left:s+4,top:2,visibility:"hidden"});
else if("bottom"==this._axisLabelsPlacement)var n=this._timeplot.putText(this._id+"-"+e,a.label,"timeplot-grid-label",{left:s+4,bottom:2,visibility:"hidden"});
s+n.clientWidth<this._canvas.width+10&&(n.style.visibility="visible"),t.beginPath(),t.moveTo(s,0),t.lineTo(s,this._canvas.height),t.stroke()
}}i.addColorStop(0,this._axisColor.toString()),i.addColorStop(1,"rgba(255,255,255,0.5)"),t.lineWidth=1,i.addColorStop(0,this._axisColor.toString()),t.beginPath(),t.moveTo(0,0),t.lineTo(this._canvas.width,0),t.stroke()
}},_calculateGrid:function(){var t=[],i=SimileAjax.DateTime,e=this._unit,a=this._period;
if(0==a)return t;if(a>i.gregorianUnitLengths[i.MILLENNIUM])s=i.MILLENNIUM;else for(var s=i.MILLENNIUM;s>0;s--)if(i.gregorianUnitLengths[s-1]<=a&&a<i.gregorianUnitLengths[s]){s--;
break}var n=e.cloneValue(this._earliestDate);do{i.roundDownToInterval(n,s,this._timeZone,1,0);
var r=this.toScreen(e.toNumber(n));switch(s){case i.SECOND:var o=n.toLocaleTimeString();
break;case i.MINUTE:var l=n.getMinutes(),o=n.getHours()+":"+(10>l?"0":"")+l;break;
case i.HOUR:var o=n.getHours()+":00";break;case i.DAY:case i.WEEK:case i.MONTH:var o=n.toLocaleDateString();
break;case i.YEAR:case i.DECADE:case i.CENTURY:case i.MILLENNIUM:var o=n.getUTCFullYear()
}r>0&&t.push({x:r,label:o}),i.incrementByInterval(n,s,this._timeZone)}while(n.getTime()<this._latestDate.getTime());
return t},_updateMappedValues:function(){this._latestDate&&this._earliestDate?(this._period=this._latestDate.getTime()-this._earliestDate.getTime(),this._mappedPeriod=this._map.direct(this._period)):(this._period=0,this._mappedPeriod=0)
}},Timeplot.MagnifyingTimeGeometry=function(){Timeplot.DefaultTimeGeometry.apply(this,arguments);
var t=this;this._MagnifyingMap={direct:function(i){if(i<t._leftTimeMargin)var e=i*t._leftRate;
else if(t._leftTimeMargin<i&&i<t._rightTimeMargin)var e=i*t._expandedRate+t._expandedTimeTranslation;
else var e=i*t._rightRate+t._rightTimeTranslation;return e},inverse:function(i){if(i<t._leftScreenMargin)var e=i/t._leftRate;
else if(t._leftScreenMargin<i&&i<t._rightScreenMargin)var e=i/t._expandedRate+t._expandedScreenTranslation;
else var e=i/t._rightRate+t._rightScreenTranslation;return e}},this._mode="lin",this._map=this._linMap
},Object.extend(Timeplot.MagnifyingTimeGeometry.prototype,Timeplot.DefaultTimeGeometry.prototype),Timeplot.MagnifyingTimeGeometry.prototype.initialize=function(){Timeplot.DefaultTimeGeometry.prototype.initialize.apply(this,arguments),this._lens||(this._lens=this._timeplot.putDiv("lens","timeplot-lens"));
var t=2592e6,i=this,e=function(e){var a=e.clientWidth,s=i._timeplot.locate(e);i.setMagnifyingParams(s.x+a/2,a,t),i.actMagnifying(),i._timeplot.paint()
},a=function(t,e){i._canvas.startCoords=SimileAjax.DOM.getEventRelativeCoordinates(e,t),i._canvas.pressed=!0
},s=function(t,a){i._canvas.pressed=!1;var s=SimileAjax.DOM.getEventRelativeCoordinates(a,t);
Timeplot.Math.isClose(s,i._canvas.startCoords,5)?(i._lens.style.display="none",i.actLinear(),i._timeplot.paint()):(i._lens.style.cursor="move",e(i._lens))
},n=function(t,e){if(i._canvas.pressed){var a=SimileAjax.DOM.getEventRelativeCoordinates(e,t);
a.x<0&&(a.x=0),a.x>i._canvas.width&&(a.x=i._canvas.width),i._timeplot.placeDiv(i._lens,{left:i._canvas.startCoords.x,width:a.x-i._canvas.startCoords.x,bottom:0,height:i._canvas.height,display:"block"})
}},r=function(t,e){i._lens.startCoords=SimileAjax.DOM.getEventRelativeCoordinates(e,t),i._lens.pressed=!0
},o=function(){i._lens.pressed=!1},l=function(t,a){if(i._lens.pressed){var s=SimileAjax.DOM.getEventRelativeCoordinates(a,t),n=i._lens,r=n.offsetLeft+s.x-n.startCoords.x;
r<i._timeplot._paddingX&&(r=i._timeplot._paddingX),r+n.clientWidth>i._canvas.width-i._timeplot._paddingX&&(r=i._canvas.width-n.clientWidth+i._timeplot._paddingX),n.style.left=r,e(n)
}};this._canvas.instrumented||(SimileAjax.DOM.registerEvent(this._canvas,"mousedown",a),SimileAjax.DOM.registerEvent(this._canvas,"mousemove",n),SimileAjax.DOM.registerEvent(this._canvas,"mouseup",s),SimileAjax.DOM.registerEvent(this._canvas,"mouseup",o),this._canvas.instrumented=!0),this._lens.instrumented||(SimileAjax.DOM.registerEvent(this._lens,"mousedown",r),SimileAjax.DOM.registerEvent(this._lens,"mousemove",l),SimileAjax.DOM.registerEvent(this._lens,"mouseup",o),SimileAjax.DOM.registerEvent(this._lens,"mouseup",s),this._lens.instrumented=!0)
},Timeplot.MagnifyingTimeGeometry.prototype.setMagnifyingParams=function(t,i,e){i/=2,e/=2;
var a=this._canvas.width,s=this._period;0>t&&(t=0),t>a&&(t=a),0>t-i&&(i=t),t+i>a&&(i=a-t);
var n=this.fromScreen(t)-this._earliestDate.getTime();0>n-e&&(e=n),n+e>s&&(e=s-n),this._centerX=t,this._centerTime=n,this._aperture=i,this._aperturePeriod=e,this._leftScreenMargin=this._centerX-this._aperture,this._rightScreenMargin=this._centerX+this._aperture,this._leftTimeMargin=this._centerTime-this._aperturePeriod,this._rightTimeMargin=this._centerTime+this._aperturePeriod,this._leftRate=(t-i)/(n-e),this._expandedRate=i/e,this._rightRate=(a-t-i)/(s-n-e),this._expandedTimeTranslation=this._centerX-this._centerTime*this._expandedRate,this._expandedScreenTranslation=this._centerTime-this._centerX/this._expandedRate,this._rightTimeTranslation=t+i-(n+e)*this._rightRate,this._rightScreenTranslation=n+e-(t+i)/this._rightRate,this._updateMappedValues()
},Timeplot.MagnifyingTimeGeometry.prototype.actLinear=function(){this._mode="lin",this._map=this._linMap,this.reset()
},Timeplot.MagnifyingTimeGeometry.prototype.actMagnifying=function(){this._mode="Magnifying",this._map=this._MagnifyingMap,this.reset()
},Timeplot.MagnifyingTimeGeometry.prototype.toggle=function(){"Magnifying"==this._mode?this.actLinear():this.actMagnifying()
};