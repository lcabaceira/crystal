Object.create||(Object.create=function(){function t(t){r.prototype=t||{};var n=new r;
return r.prototype=e,n}var r=function(){},e=r.prototype;return t}()),Function.prototype.method=Function.prototype.method||function(t,r){return this.prototype[t]=r,this
},String.prototype.endsWith||(String.prototype.endsWith=function(t){return this.match(t+"$")==t
}),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+/,"").replace(/\s+$/,"")
}),Object.keys||(Object.keys=function(){var t=Object.prototype.hasOwnProperty,r=!{toString:null}.propertyIsEnumerable("toString"),e=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],n=e.length;
return function(o){if("object"!=typeof o&&"function"!=typeof o||null===o)throw new TypeError("Object.keys called on non-object");
var i=[];for(var a in o)t.call(o,a)&&i.push(a);if(r)for(var u=0;n>u;u++)t.call(o,e[u])&&i.push(e[u]);
return i}}()),Array.prototype.map||(Array.prototype.map=function(t,r){var e,n,o;if(null==this)throw new TypeError(" this is null or not defined");
var i=Object(this),a=i.length>>>0;if("[object Function]"!={}.toString.call(t))throw new TypeError(t+" is not a function");
for(r&&(e=r),n=new Array(a),o=0;a>o;){var u,p;o in i&&(u=i[o],p=t.call(e,u,o,i),n[o]=p),o++
}return n}),Array.prototype.indexOf||(Array.prototype.indexOf=function(t){if(null==this)throw new TypeError;
var r=Object(this),e=r.length>>>0;if(0===e)return-1;var n=0;if(arguments.length>0&&(n=Number(arguments[1]),n!=n?n=0:0!=n&&1/0!=n&&n!=-1/0&&(n=(n>0||-1)*Math.floor(Math.abs(n)))),n>=e)return-1;
for(var o=n>=0?n:Math.max(e-Math.abs(n),0);e>o;o++)if(o in r&&r[o]===t)return o;return-1
}),Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(t){if(null==this)throw new TypeError;
var r=Object(this),e=r.length>>>0;if(0===e)return-1;var n=e;arguments.length>1&&(n=Number(arguments[1]),n!=n?n=0:0!=n&&n!=1/0&&n!=-(1/0)&&(n=(n>0||-1)*Math.floor(Math.abs(n))));
for(var o=n>=0?Math.min(n,e-1):e-Math.abs(n);o>=0;o--)if(o in r&&r[o]===t)return o;
return-1}),Array.prototype.reduce||(Array.prototype.reduce=function(t){var r,e,n=this.length;
if("function"!=typeof t)throw new TypeError("First argument is not callable");if((0==n||null===n)&&arguments.length<=1)throw new TypeError("Array length is 0 and no second argument");
for(arguments.length<=1?(e=this[0],r=1):e=arguments[1],r=r||0;n>r;++r)r in this&&(e=t.call(void 0,e,this[r],r,this));
return e}),Date.prototype.toISOString||!function(){function t(t){return 10>t?"0"+t:t
}Date.prototype.toISOString=function(){return this.getUTCFullYear()+"-"+t(this.getUTCMonth()+1)+"-"+t(this.getUTCDate())+"T"+t(this.getUTCHours())+":"+t(this.getUTCMinutes())+":"+t(this.getUTCSeconds())+"."+(this.getUTCMilliseconds()/1e3).toFixed(3).slice(2,5)+"Z"
}}(),Array.prototype.forEach||(Array.prototype.forEach=function(t,r){for(var e=this.length>>>0,n=0;e>n;n++)n in this&&t.call(r,this[n],n,this)
}),Date.now||(Date.now=function(){return(new Date).valueOf()});