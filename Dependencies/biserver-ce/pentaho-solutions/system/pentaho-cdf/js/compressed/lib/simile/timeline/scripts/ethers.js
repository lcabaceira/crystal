Timeline.LinearEther=function(t){this._params=t,this._interval=t.interval,this._pixelsPerInterval=t.pixelsPerInterval
},Timeline.LinearEther.prototype.initialize=function(t,e){this._band=t,this._timeline=e,this._unit=e.getUnit(),"startsOn"in this._params?this._start=this._unit.parseFromObject(this._params.startsOn):"endsOn"in this._params?(this._start=this._unit.parseFromObject(this._params.endsOn),this.shiftPixels(-this._timeline.getPixelLength())):"centersOn"in this._params?(this._start=this._unit.parseFromObject(this._params.centersOn),this.shiftPixels(-this._timeline.getPixelLength()/2)):(this._start=this._unit.makeDefaultValue(),this.shiftPixels(-this._timeline.getPixelLength()/2))
},Timeline.LinearEther.prototype.setDate=function(t){this._start=this._unit.cloneValue(t)
},Timeline.LinearEther.prototype.shiftPixels=function(t){var e=this._interval*t/this._pixelsPerInterval;
this._start=this._unit.change(this._start,e)},Timeline.LinearEther.prototype.dateToPixelOffset=function(t){var e=this._unit.compare(t,this._start);
return this._pixelsPerInterval*e/this._interval},Timeline.LinearEther.prototype.pixelOffsetToDate=function(t){var e=t*this._interval/this._pixelsPerInterval;
return this._unit.change(this._start,e)},Timeline.LinearEther.prototype.zoom=function(t){var e=0,i=this._band._zoomIndex,s=i;
return t&&i>0&&(s=i-1),!t&&i<this._band._zoomSteps.length-1&&(s=i+1),this._band._zoomIndex=s,this._interval=SimileAjax.DateTime.gregorianUnitLengths[this._band._zoomSteps[s].unit],this._pixelsPerInterval=this._band._zoomSteps[s].pixelsPerInterval,e=this._band._zoomSteps[s].unit-this._band._zoomSteps[i].unit
},Timeline.HotZoneEther=function(t){this._params=t,this._interval=t.interval,this._pixelsPerInterval=t.pixelsPerInterval,this._theme=t.theme
},Timeline.HotZoneEther.prototype.initialize=function(t,e){this._band=t,this._timeline=e,this._unit=e.getUnit(),this._zones=[{startTime:Number.NEGATIVE_INFINITY,endTime:Number.POSITIVE_INFINITY,magnify:1}];
for(var i=this._params,s=0;s<i.zones.length;s++)for(var n=i.zones[s],r=this._unit.parseFromObject(n.start),a=this._unit.parseFromObject(n.end),h=0;h<this._zones.length&&this._unit.compare(a,r)>0;h++){var o=this._zones[h];
this._unit.compare(r,o.endTime)<0&&(this._unit.compare(r,o.startTime)>0&&(this._zones.splice(h,0,{startTime:o.startTime,endTime:r,magnify:o.magnify}),h++,o.startTime=r),this._unit.compare(a,o.endTime)<0?(this._zones.splice(h,0,{startTime:r,endTime:a,magnify:n.magnify*o.magnify}),h++,o.startTime=a,r=a):(o.magnify*=n.magnify,r=o.endTime))
}"startsOn"in this._params?this._start=this._unit.parseFromObject(this._params.startsOn):"endsOn"in this._params?(this._start=this._unit.parseFromObject(this._params.endsOn),this.shiftPixels(-this._timeline.getPixelLength())):"centersOn"in this._params?(this._start=this._unit.parseFromObject(this._params.centersOn),this.shiftPixels(-this._timeline.getPixelLength()/2)):(this._start=this._unit.makeDefaultValue(),this.shiftPixels(-this._timeline.getPixelLength()/2))
},Timeline.HotZoneEther.prototype.setDate=function(t){this._start=this._unit.cloneValue(t)
},Timeline.HotZoneEther.prototype.shiftPixels=function(t){this._start=this.pixelOffsetToDate(t)
},Timeline.HotZoneEther.prototype.dateToPixelOffset=function(t){return this._dateDiffToPixelOffset(this._start,t)
},Timeline.HotZoneEther.prototype.pixelOffsetToDate=function(t){return this._pixelOffsetToDate(t,this._start)
},Timeline.HotZoneEther.prototype.zoom=function(t){var e=0,i=this._band._zoomIndex,s=i;
return t&&i>0&&(s=i-1),!t&&i<this._band._zoomSteps.length-1&&(s=i+1),this._band._zoomIndex=s,this._interval=SimileAjax.DateTime.gregorianUnitLengths[this._band._zoomSteps[s].unit],this._pixelsPerInterval=this._band._zoomSteps[s].pixelsPerInterval,e=this._band._zoomSteps[s].unit-this._band._zoomSteps[i].unit
},Timeline.HotZoneEther.prototype._dateDiffToPixelOffset=function(t,e){var i=this._getScale(),s=t,n=e,r=0;
if(this._unit.compare(s,n)<0){for(var a=0;a<this._zones.length&&!(this._unit.compare(s,this._zones[a].endTime)<0);)a++;
for(;this._unit.compare(s,n)<0;){var h=this._zones[a],o=this._unit.earlier(n,h.endTime);
r+=this._unit.compare(o,s)/(i/h.magnify),s=o,a++}}else{for(var a=this._zones.length-1;a>=0&&!(this._unit.compare(s,this._zones[a].startTime)>0);)a--;
for(;this._unit.compare(s,n)>0;){var h=this._zones[a],o=this._unit.later(n,h.startTime);
r+=this._unit.compare(o,s)/(i/h.magnify),s=o,a--}}return r},Timeline.HotZoneEther.prototype._pixelOffsetToDate=function(t,e){var i=this._getScale(),s=e;
if(t>0){for(var n=0;n<this._zones.length&&!(this._unit.compare(s,this._zones[n].endTime)<0);)n++;
for(;t>0;){var r=this._zones[n],a=i/r.magnify;if(r.endTime==Number.POSITIVE_INFINITY)s=this._unit.change(s,t*a),t=0;
else{var h=this._unit.compare(r.endTime,s)/a;h>t?(s=this._unit.change(s,t*a),t=0):(s=r.endTime,t-=h)
}n++}}else{for(var n=this._zones.length-1;n>=0&&!(this._unit.compare(s,this._zones[n].startTime)>0);)n--;
for(t=-t;t>0;){var r=this._zones[n],a=i/r.magnify;if(r.startTime==Number.NEGATIVE_INFINITY)s=this._unit.change(s,-t*a),t=0;
else{var h=this._unit.compare(s,r.startTime)/a;h>t?(s=this._unit.change(s,-t*a),t=0):(s=r.startTime,t-=h)
}n--}}return s},Timeline.HotZoneEther.prototype._getScale=function(){return this._interval/this._pixelsPerInterval
};