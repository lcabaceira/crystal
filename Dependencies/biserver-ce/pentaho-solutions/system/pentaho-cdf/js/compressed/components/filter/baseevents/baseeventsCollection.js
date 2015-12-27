define(["./baseevents"],function(t){var e=t.convertClass(Array,{push:function(){for(var t=this.base.apply(this,arguments),e=[].slice.call(arguments),r=0,s=e.length;s>r;r++)this.trigger("add",e[r],t-s+r);
return this.trigger("change"),t},pop:function(){var t=this.base.apply(this,arguments);
return this.trigger("remove",t,this.length),this.trigger("change"),t}});return e});
