Timeplot.Operator={sum:function(e){return Timeplot.Math.integral(e.values)},average:function(e,t){var a="size"in t?t.size:30,r=Timeplot.Math.movingAverage(e.values,a);
return r}},Timeplot.Processor=function(e,t,a){this._dataSource=e,this._operator=t,this._params=a,this._data={times:new Array,values:new Array},this._range={earliestDate:null,latestDate:null,min:0,max:0};
var r=this;this._processingListener={onAddMany:function(){r._process()},onClear:function(){r._clear()
}},this.addListener(this._processingListener)},Timeplot.Processor.prototype={_clear:function(){this.removeListener(this._processingListener),this._dataSource._clear()
},_process:function(){var e=this._dataSource.getData(),t=this._dataSource.getRange(),a=this._operator(e,this._params),r=Timeplot.Math.range(a);
this._data={times:e.times,values:a},this._range={earliestDate:t.earliestDate,latestDate:t.latestDate,min:r.min,max:r.max}
},getRange:function(){return this._range},getData:function(){return this._data},getValue:Timeplot.DataSource.prototype.getValue,addListener:function(e){this._dataSource.addListener(e)
},removeListener:function(e){this._dataSource.removeListener(e)}};