jQuery.fn.extend({reverse:function(e){var r;if((r=$._data(this[0],"events"))&&r[e]){var s=new Array;
for(var t in r[e])s.unshift(r[e][t]);r[e]=s}return this},stack:function(e,r,s){return this.reverse(e).bind(e,r,s).reverse(e)
},hover:function(e,r,s){return s?this.stack("mouseenter",e).stack("mouseout",r):this.bind("mouseenter",e).bind("mouseout",r)
}}),jQuery.each("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,change,select,submit,keydown,keypress,keyup,error".split(","),function(e,r){jQuery.fn[r]=function(e,s){return e?s?this.stack(r,e):this.bind(r,e):this.trigger(r)
}});