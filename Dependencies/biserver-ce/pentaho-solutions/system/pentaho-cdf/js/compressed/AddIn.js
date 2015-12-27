define(["./dashboard/Utils","./Logger","./lib/jquery"],function(t,e,n){return function(i){var r=i;
if("object"!=typeof i)throw TypeError;if(!i.label||!i.name||!i.implementation&&!i.value)throw TypeError;
var o=i.name,a=i.label,l=(i.implementation?"scriptable":"static",i.implementation),f=i.defaults,c=i.options;
"function"==typeof i.init&&i.init.call(r),this.getLabel=function(){return a},this.getName=function(){return o
},this.call=function(i,o,a){if(!l)return t.clone(c);a="function"==typeof a?a(o):a;
var u="function"==typeof f?f(o):f,s=n.extend(!0,{},u,a);try{return l.call(r,i,o,s)
}catch(p){e.log("Addin Error ["+this.getName()+"]: "+p,"error")}},this.setDefaults=function(t){f="function"==typeof t?t:n.extend(!0,{},f,t)
}}});