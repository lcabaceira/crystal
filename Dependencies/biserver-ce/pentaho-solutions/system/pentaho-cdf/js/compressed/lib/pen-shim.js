var pen={_loadedModulesById:{},define:function(){for(var e,n,r,t=0,i=arguments.length;i>t;){var a=arguments[t++];
switch(typeof a){case"string":e=a;break;case"function":r=a;break;case"object":a instanceof Array&&(n=a)
}}if(r){if(n){var d=[];for(t=0;t<n.length;t++)"cdf/jquery"==n[t]||"cdf-legacy/jquery"==n[t]?d.push($):d.push(this._loadedModulesById[n[t]]);
n=d}else n=[];var o=r.apply(null,n);e&&!this._loadedModulesById[e]&&(this._loadedModulesById[e]=o)
}},require:function(){var e=Array.prototype.slice.apply(arguments);return e.unshift(""),this.define.apply(this,e)
}};"undefined"==typeof define&&(define=function(){return pen.define.apply(pen,arguments)
}),"undefined"==typeof require&&(require=function(){return pen.require.apply(pen,arguments)
}),"undefined"==typeof Encoder&&(Encoder={},Encoder.encode=function(e,n,r){"use strict";
if("undefined"==typeof n)return e;n instanceof Array==!1&&(n=[n]);var t,i,a,d,o=e.match(/{[0-9]+}/g),u="";
if(o&&o.length>0){for(t=0,d=0;d<o.length&&d<n.length;d++)i=e.substring(t,e.indexOf(o[d])-1),a=encodeURIComponent(n[o[d].substring(1,o[d].length-1)]),a=a.replace("%5C","%255C").replace("%2F","%252F"),u+=i+"/"+a,t=e.indexOf(o[d])+o[d].length;
u+=e.substring(e.indexOf(o[o.length-1])+o[o.length-1].length,e.length)}else u=e;return r&&(u+="?"+$.param(r)),u
},Encoder.encodeRepositoryPath=function(e){"use strict";var n=String(e).replace(new RegExp(":","g"),"::").replace(new RegExp("[\\\\/]","g"),":");
return n},Encoder.decodeRepositoryPath=function(e){return String(e).replace(new RegExp(":","g"),"/").replace(new RegExp("//","g"),":")
});