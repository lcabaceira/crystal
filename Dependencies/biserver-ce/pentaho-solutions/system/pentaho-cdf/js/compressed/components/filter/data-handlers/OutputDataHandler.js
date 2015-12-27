define(["amd!cdf/lib/underscore","../baseevents/baseeventsModel","../base/filter-base-implementation"],function(t,e,i){return i.DataHandlers.Output=e.extend(i.Logger).extend({ID:"BaseFilter.DataHandlers.Output",initialize:function(){return this.listenTo(this.get("model"),"change:selectedItems",this.onApply),this
},_processOutput:function(e,i){var n,s;if(s=void 0,t.isFunction(this.attributes.options.outputFormat))n=this.attributes.options.outputFormat.call(this,e,i),s=t.isUndefined(n)?void 0:n;
else if(t.isString(this.attributes.options.outputFormat))switch(this.attributes.options.outputFormat.toLowerCase()){case"lowestid":s=this.getLowestId(i);
break;case"highestid":s=this.getHighestId(i);break;case"selected":s=i}return t.isUndefined(s)&&(s=this.getLowestId(i)),s
},getHighestId:function(e){var i;return i=t.chain(e.all).filter(function(e){return!t.isUndefined(e.get("id"))
}).filter(function(e,i,n){var s;return s=!t.contains(n,e.parent())}).map(function(t){return t.get("id")
}).value()},getLowestId:function(e){var i;return i=t.chain(e.all).filter(function(t){return!t.children()
}).map(function(t){return t.get("id")}).value()},onApply:function(t,e){var i;return null==e?this:(i=this._processOutput(t,e),this.debug("confirmed selection:"+i),this.trigger("changed",i),this)
},onSelection:function(t){return this.debug("onSelection: "+t.get("label")),this},getValue:function(){var t,e,i;
return t=this.get("model"),e=t.root().get("selectedItems"),i=this._processOutput(e,t)
}}),i});