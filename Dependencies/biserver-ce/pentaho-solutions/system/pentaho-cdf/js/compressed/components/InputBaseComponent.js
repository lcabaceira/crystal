define(["./UnmanagedComponent","amd!../lib/underscore","../dashboard/Utils"],function(e,t,r){var a=e.extend({update:function(){var e=this.queryDefinition;
if(this.valuesArray&&this.valuesArray.length>0){var r=t.bind(function(){this.draw(this.valuesArray)
},this);this.synchronous(r)}else if(e){var r=t.bind(function(e){var t;t=this.valueAsId?e.resultset.map(function(e){return[e[0],e[0]]
}):e.resultset,this.draw(t)},this);this.triggerQuery(e,r)}else{var r=t.bind(function(){var e=this.getValuesArray();
this.draw(e)},this);this.synchronous(r)}},_getParameterValue:function(){return r.normalizeValue(r.ev(this.dashboard.getParameterValue(this.parameter)))
}});return a});