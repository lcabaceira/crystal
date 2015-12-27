Timeplot.DefaultEventSource=function(){Timeline.DefaultEventSource.apply(this,arguments)
},Object.extend(Timeplot.DefaultEventSource.prototype,Timeline.DefaultEventSource.prototype),Timeplot.DefaultEventSource.prototype.loadText=function(e,t,n,r,i){if(null!=e){this._events.maxValues=new Array;
{this._getBaseURL(n)}i||(i="iso8601");var a=this._events.getUnit().getParser(i),o=this._parseText(e,t),s=!1;
if(r&&(o=r(o)),o)for(var u=0;u<o.length;u++){var l=o[u];if(l.length>1){var c=SimileAjax.jQuery.trim(l[0]),h=a(c);
if(h){var m=new Timeplot.DefaultEventSource.NumericEvent(h,l.slice(1));this._events.add(m),s=!0
}}}s&&this._fire("onAddMany",[])}},Timeplot.DefaultEventSource.prototype._parseText=function(e,t){e=e.replace(/\r\n?/g,"\n");
for(var n=0,r=e.length,i=[];r>n;){var a=[];if("#"!=e.charAt(n))for(;r>n;){if('"'==e.charAt(n)){for(var o=e.indexOf('"',n+1);r>o&&o>-1&&'"'==e.charAt(o+1);)o=e.indexOf('"',o+2);
if(0>o);else{if(e.charAt(o+1)==t){var s=e.substr(n+1,o-n-1);s=s.replace(/""/g,'"'),a[a.length]=s,n=o+2;
continue}if("\n"==e.charAt(o+1)||r==o+1){var s=e.substr(n+1,o-n-1);s=s.replace(/""/g,'"'),a[a.length]=s,n=o+2;
break}}}var u=e.indexOf(t,n),l=e.indexOf("\n",n);if(0>l&&(l=r),!(u>-1&&l>u)){a[a.length]=e.substr(n,l-n),n=l+1;
break}a[a.length]=e.substr(n,u-n),n=u+1}else{var l=e.indexOf("\n",n);n=l>-1?l+1:cur
}a.length>0&&(i[i.length]=a)}return i.length<0?void 0:i},Timeplot.DefaultEventSource.prototype.getRange=function(){var e=this.getEarliestDate(),t=this.getLatestDate();
return{earliestDate:e?e:null,latestDate:t?t:null,min:0,max:0}},Timeplot.DefaultEventSource.NumericEvent=function(e,t){this._id="e"+Math.round(1e6*Math.random()),this._time=e,this._values=t
},Timeplot.DefaultEventSource.NumericEvent.prototype={getID:function(){return this._id
},getTime:function(){return this._time},getValues:function(){return this._values},getStart:function(){return this._time
},getEnd:function(){return this._time}},Timeplot.DataSource=function(e){this._eventSource=e;
var t=this;this._processingListener={onAddMany:function(){t._process()},onClear:function(){t._clear()
}},this.addListener(this._processingListener),this._listeners=[],this._data=null,this._range=null
},Timeplot.DataSource.prototype={_clear:function(){this._data=null,this._range=null
},_process:function(){this._data={times:new Array,values:new Array},this._range={earliestDate:null,latestDate:null,min:0,max:0}
},getRange:function(){return this._range},getData:function(){return this._data},getValue:function(e){if(this._data){for(var t=0;t<this._data.times.length;t++){var n=this._data.times[t];
if(n==e)return this._data.values[t];if(n>e)return this._data.values[t-1]}if(this._data.times.length>0)return this._data.values[this._data.times.length-1]
}return 0},addListener:function(e){this._eventSource.addListener(e)},removeListener:function(e){this._eventSource.removeListener(e)
},replaceListener:function(e,t){this.removeListener(e),this.addListener(t)}},Timeplot.ColumnSource=function(e,t){Timeplot.DataSource.apply(this,arguments),this._column=t-1
},Object.extend(Timeplot.ColumnSource.prototype,Timeplot.DataSource.prototype),Timeplot.ColumnSource.prototype.dispose=function(){this.removeListener(this._processingListener),this._clear()
},Timeplot.ColumnSource.prototype._process=function(){for(var e=this._eventSource.getCount(),t=new Array(e),n=new Array(e),r=Number.MAX_VALUE,i=Number.MIN_VALUE,a=0,o=this._eventSource.getAllEventIterator();o.hasNext();){var s=o.next(),u=s.getTime();
t[a]=u;var l=this._getValue(s);isNaN(l)||(r>l&&(r=l),l>i&&(i=l),n[a]=l),a++}this._data={times:t,values:n},i==Number.MIN_VALUE&&(i=1),this._range={earliestDate:this._eventSource.getEarliestDate(),latestDate:this._eventSource.getLatestDate(),min:r,max:i}
},Timeplot.ColumnSource.prototype._getValue=function(e){return parseFloat(e.getValues()[this._column])
},Timeplot.ColumnDiffSource=function(e,t,n){Timeplot.ColumnSource.apply(this,arguments),this._column2=n-1
},Object.extend(Timeplot.ColumnDiffSource.prototype,Timeplot.ColumnSource.prototype),Timeplot.ColumnDiffSource.prototype._getValue=function(e){var t=parseFloat(e.getValues()[this._column]),n=parseFloat(e.getValues()[this._column2]);
return t-n};