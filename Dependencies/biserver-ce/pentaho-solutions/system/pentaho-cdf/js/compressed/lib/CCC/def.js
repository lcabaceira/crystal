define([],function(){function n(r,e,i){if(r&&!(r instanceof n.QualifiedName)){var u=typeof r;
if("object"===u){for(var o in r)t(o,r[o],e);return n}if("array"===u){for(var o in r)t(r[o],e);
return n}}return t(r,e,i),e}function t(t,r,e){t=n.qualName(t),e=n.space(t.namespace,e),t.name&&(e[t.name]=r,r instanceof Object&&n.qualNameOf(r,t))
}function r(t){n.log=n.logger("[DEF]"),lt&&lt.forEach(function(n){n(t)})}function e(){return n.debug
}function i(n,t){n=u(n,t);var r=c("log",n);return r.log=r,r.level=e,pt.forEach(function(t){r[t]=c(yt[t]||t,n)
}),r}function u(t,r){return t&&(n.fun.is(t)?t.call(r):t)}function o(t,r,o){var a=function(e){if(n.debug>1){var a=t[r||"log"]=i(o,t);
a[e||"log"].apply(a,ut.call(arguments,1))}else"error"===e&&s.apply(null,n.array.append([u(o,t)],arguments,1))
},c=a.bind("log");return c.log=c,c.level=e,pt.forEach(function(n){c[n]=a.bind(n)}),c
}function a(){function n(){}return n.log=n,n.level=e,pt.forEach(function(t){n[t]=n
}),n}function s(t,r,e){throw r&&"object"==typeof r&&r.message&&(r=r.message),r=(t?t+": ":"")+n.nullyTo(r,"")+(e?" "+e:""),new Error(r)
}function c(t,r){var e,i=console,u=i[t]||i.log;if(u){var o=r?r+": %s":"%s";if(n.fun.is(u))e=u.bind(i,o);
else{var a=Function.prototype.apply;e=function(){a.call(u,i,n.array.append([o],arguments))
}}}return e}function f(){function n(n){function t(){r=n}return t.toString=l,t}function t(n){if(void 0!==r)throw new Error("Access denied.");
var t=(n(),r);return r=void 0,t}var r;return t.safe=n,t.property=h,t}function l(){return"SAFE"
}function h(t,r){function e(r,e){return n.setNonEnum(r,t,u.safe(e)),e}function i(n){return u(n[t])
}t||(t=vt(r));var u=this;return i.init=e,i.propertyName=t,i}function p(n){var t;n&&(n instanceof Array?(t=n,n=t.join(".")):t=n.split(".")),t&&t.length>1?(this.name=t.pop(),this.namespace=t.join(".")):(this.name=n||null,this.namespace=null)
}function y(t,r){var e=r||gt;if(t){var i=t.split("."),u=i.length;if(u){var o,a=0;
if(e===n.global){o=i[0];var s=n.getOwn(mt,o);s&&(e=s,a++)}for(;u>a;)o=i[a++],e=e[o]||(e[o]={})
}}return e}function v(n){return function(t){return d(t,ut.call(arguments,1),n)}}function d(t,r,e){for(var i,u=0,o=r.length;o>u;)(i=r[u++])&&(i=n.object.as(i.prototype||i),i&&g(t,i,e));
return t}function g(n,t,r){for(var e in t)m(n,e,t[e],r)}function m(t,r,e,i){if(void 0!==e){var u,o=n.object.asNative(t[r]);
o?(u=n.object.as(e),u?(et.call(t,r)||(t[r]=o=Object.create(o)),g(o,u,i)):t[r]=e):(u=n.object.asNative(e),u&&(e=(i||Object.create)(u)),t[r]=e)
}}function _(t){var r,e;for(r in t)(e=n.object.asNative(t[r]))&&_(t[r]=Object.create(e))
}function b(t,r){if(r){var e=t.configure;n.fun.is(e)?e.call(t,r):b.generic(t,r)}return t
}function w(t,r){function e(t){var e={};i.push(e);for(var u in t)if(u){var o=t[u];
if(void 0===o)continue;var a,s,c,f,l=e,h=u.indexOf("."),p=null;if(h>=0)for(r?(p=[u.substr(0,h)],u=u.substr(h+1)):(p=u.split("."),u=p.pop()),a=p.length,s=-1;++s<a;)(c=p[s])&&(f=l[c],void 0===f?l[c]=f={}:null!==f&&n.object.is(f)&&f.constructor===Object||(i.push(e=f={}),s=-1),l=f);
var y=l[u];if(y!==o){if(void 0!==y){if(!x(o)||!x(y))continue;if(i.push(e=l={}),p)for(s=-1;++s<a;)(c=p[s])&&(l=l[c]={})
}l[u]=o}}}if(!t)return[];var i=[];return n.array.each(t,e),i}function x(t){return t&&n.object.is(t)&&!O(t)
}function O(n){return n.constructor!==Object&&!(n instanceof Array)}function j(t,r){if(r){var e=r.prototype,i=t.prototype=Object.create(e);
n.setNonEnum(i,"constructor",t),"__proto__"in i||n.setNonEnum(i,"__proto__",e)}return t
}function A(t,r,e){function i(){var n=e.base;e.base=r;try{return t.apply(this,arguments)
}finally{e.base=n}}function u(){var n=Q(this),e=n.base;n.base=r;try{return t.apply(this,arguments)
}finally{n.base=e}}return t?r&&r!==t&&S(t)?(N(e),n.fun.wraps(e?i:u,t)):t:r}function S(n){return wt.test(n)
}function N(t){if(t===rt)throw n.error.invalidArgument("proto","Cannot change Object.prototype.");
return t}function Q(t){N(n.protoOf(t))}function C(t,r){var e=n.fun.as(t[r]);return e===rt[r]?null:e
}function E(t,r,e){t=ct(t);var i=n.protoOf(t),u=n.rootProtoOf(t),o=n.get(e,"enumerable",!0);
return n.array.each(r,function(r){(r=ct(r))&&(st?n.ownKeys(r).forEach(function(n){I(t,n,st(r,n),i,u,o)
}):n.eachOwn(r,function(n,r){M(t,r,n,i,u,o)}))}),n}function T(t,r,e,i){t=ct(t);var u=n.get(i,"enumerable",!0);
return M(t,r,e,n.protoOf(t),n.rootProtoOf(t),u)}function k(n){return"base"!==n&&"constructor"!==n
}function M(t,r,e,i,u,o){return void 0!==e&&i[r]!==e&&k(r)&&P(t,r,e,u,o),n}function P(t,r,e,i,u){var o;
e&&(o=n.fun.as(e))?(e=n.overrides(o,C(t,r),i),u?t[r]=e:n.setNonEnum(t,r,e)):m(t,r,e,n.identity)
}function I(t,r,e,i,u,o){var a;if(k(r))if(e.get||e.set){var s=q(i,r);s&&((e.get||s.get)&&(e.get=n.overrides(e.get,s.get,u)),(e.set||s.set)&&(e.set=n.overrides(e.set,s.set,u))),o||(e.enumerable=!1),at(t,r,e)
}else void 0!==(a=e.value)&&P(t,r,a,u,o);return n}function q(t,r){var e;if(r in t)for(;t=n.protoOf(t);)if(e=st(t,r))return e
}function R(t,r){this.baseType=r||null;var e=this.constructor;if(e.Ctor)throw n.error.operationInvalid("MetaType already has an associated type constructor.");
if(t&&t.Meta)throw n.error.argumentInvalid("TypeCtor","Specified type constructor already has an associated MetaType.");
this.external=!!t,this.rootType=r?r.rootType:this,this._init=r?r._init:null,this._post=r?r._post:null;
var i=r&&r._mixins;this._mixins=i?i.slice():null,this.steps=void 0,t=this._initConstructor(t||this._createConstructor()),this.Ctor=e.Ctor=t
}function D(t){return n.fun.is(t)&&t.meta instanceof R}function F(t,r){n.methods(this,t,r);
var e=this.Ctor;return e&&L.call(this,e,t),this}function L(t,r){var e=this.prototype;
n.array.each(r,function(r){n.each(ct(r),function(r,i){n.isPropPrivate(i)||(r=e[i],n.fun.is(r)?z(t,i,r):t[i]=r)
})})}function z(t,r,e){function i(){var n=this.meta,t=e.apply(n,arguments);return t===n?this:t
}t[r]=n.fun.wraps(i,e)}function K(t){var r=n.classOf(this);return r(t,this)}function B(t,r){function e(r,e){if(void 0!==e){var o=r[t];
if(null===e)r.___proto&&et.call(r,t)&&(delete r[t],e=r[t],s&&e!==o&&s(e,o,this,t));
else if(e!==o){if(f&&(u=f(e)))throw new n.error.argumentInvalid(t,n.string.is(u)?u:"");
c&&(e=i.call(this,r,e,o)),null!=e&&(r[t]=e,s&&s(e,o,this,t))}}return this}function i(r,e,i){var u=c(e);
if(null==u){if(!a)return;if(et.call(r,t))return n.configure(i,e),void 0;if(!o)return;
u=o(e,i)}return u}n.fun.is(r)&&(r={factory:r});var u,o=n.get(r,"factory"),a=n.get(r,"configurable",!!o),s=n.get(r,"change"),c=n.get(r,"cast"),f=n.get(r,"fail");
return r=null,e}function J(t,r,e){n.MetaType.apply(this,arguments);var r=this.baseType;
r&&(this.fieldsPrivProp=r.constructor===J?n.get(e,"fieldsPrivProp")||jt:r.fieldsPrivProp)
}function U(t,r,e,i){var u,o=n.lazy(t,"__eventz"),a=o[r]||(o[r]={before:[],after:[],count:0});
if(n.fun.is(e))u={handler:e,_handler:null,_filter:null};else{if(!(e instanceof Object))throw n.error.argumentInvalid("handler","Invalid type.");
if(u=e,!u.handler)throw n.error.argumentRequired("handler.handler");u._filter=null
}u._handler=u.handler,a[i?"before":"after"].push(u),a.count++,t._on&&t._on(r,u,!!i)
}function $(t,r,e){var i,u,o;if(null!=e)if(n.fun.is(e))o=e;else{if(!(e instanceof Object))throw n.error.argumentInvalid("handler","Invalid type.");
o=e.handler}if((i=t.__eventz)&&(u=i[r])&&u.count){var a,s,c,f;if(o){if(a=u.before,c=X(a,o),f=0>c,f&&(a=u.after,c=X(a,o),0>c))return;
s=a[c],0===--u.count?i[r]=null:(a=a.slice(),a.splice(c,1),u[f?"after":"before"]=a),W(t,r,s,!f)
}else{var l=u.before,h=u.after;for(i[r]=null,c=l.length;c--;)W(t,r,l[c],!0);for(c=h.length;c--;)W(t,r,h[c],!1)
}}}function W(n,t,r,e){n._off&&n._off(t,r,e),r._filter=r._handler=null}function G(t,r,e){var i,u,o,a,s,c;
if((i=t.__eventz)&&(u=i[r])&&(s=(o=u.before).length,c=(a=u.after).length),!c&&!s&&!e)return null;
var f=!1,l=!1,h={type:r,phase:null,source:t,result:void 0,cancelable:!1,defaultPrevented:l,preventDefault:function(){f&&(this.defaultPrevented=l=!0)
},trigger:function(r,i){if(this.phase)throw n.error.operationInvalid("Event can only be triggered once.");
r||(r=t),i||(i=[this]),f=!!this.cancelable;var u;return s&&Z(r,this,i,o,s,!0),f&&this.defaultPrevented||(e&&(this.phase="default",this.result=u=e.apply(r,i)),c&&Z(r,this,i,a,c,!1)),this.phase="done",u
}};return h}function Z(n,t,r,e,i,u){var o,a=-1;for(t.phase=u?"before":"after";++a<i;)o=e[a],(!o._filter||o._filter.apply(n,r))&&o._handler.apply(n,r)
}function H(t,r,e,i,u,o){if(n.string.is(e))V(t,r,e,i,u,o);else if(n.array.is(e))e.forEach(function(e){if(!n.string.is(e))throw n.error.argumentInvalid("type");
V(t,r,e,i,u,o)});else{if(!n.object.is(e))throw n.error.argumentInvalid("type");n.eachOwn(e,function(n,e){V(t,r,e,n,u,o)
})}}function V(t,r,e,i,u,o){if(!o&&!i)throw n.error.argumentRequired("handler");n.array.is(i)?i.forEach(function(n){t(r,e,n,u)
}):t(r,e,i,u)}function X(n,t){for(var r=0,e=n.length;e>r;r++)if(n[r].handler===t)return r;
return-1}function Y(){for(;this._source.next();){var t=this._selectMany?this._selectMany.call(this._ctx,this._source.item,this._source.index):this._source.item;
if(null!=t)return this._manySource=n.query(t),!0}}function nt(n,t){return t?(n=n.toString().split("e"),+(n[0]+"e"+(n[1]?+n[1]+t:t))):n
}var tt=function(){for(var n in{toString:1})if("toString"===n)return!1;return!0}(),rt=Object.prototype,et=rt.hasOwnProperty,it=tt?["toString","valueOf"]:null;
Object.keys||(Object.keys=function(n){if(n!==Object(n))throw new TypeError("Object.keys called on non-object");
var t=[];for(var r in n)et.call(n,r)&&t.push(r);return it&&it.forEach(function(r){et.call(n,r)&&t.push(r)
}),t}),Array.prototype.some||(Array.prototype.some=function(n){for(var t=Object(this),r=t.length>>>0,e=arguments.length>=2?arguments[1]:void 0,i=0;r>i;i++)if(i in t&&n.call(e,t[i],i,t))return!0;
return!1}),Array.prototype.map||(Array.prototype.map=function(n,t){for(var r=this.length,e=new Array(r),i=0;r>i;i++)i in this&&(e[i]=n.call(t,this[i],i,this));
return e}),Array.prototype.filter||(Array.prototype.filter=function(n,t){for(var r=this.length,e=new Array,i=0;r>i;i++)if(i in this){var u=this[i];
n.call(t,u,i,this)&&e.push(u)}return e}),Array.prototype.forEach||(Array.prototype.forEach=function(n,t){for(var r=this.length>>>0,e=0;r>e;e++)e in this&&n.call(t,this[e],e,this)
}),Object.create||(Object.create=function(){function n(n){t.prototype=n||{};var e=new t;
return t.prototype=r,e}var t=function(){},r=t.prototype;return n}()),Function.prototype.bind||(Function.prototype.bind=function(n){return function(t){var r=n.call(arguments,1),e=this;
return function(){return e.apply(t,r.concat(n.call(arguments)))}}}(Array.prototype.slice)),this.JSON||(this.JSON={}),this.JSON.stringify||(this.JSON.stringify=function(n){return String(n)
});var ut=Array.prototype.slice,ot=[],at=function(){var n=Object.defineProperty;if(n)try{n({},"test",{})
}catch(t){return null}return n}(),st=function(){var n=at&&Object.getOwnPropertyDescriptor;
return n&&null===n({value:null},"value").value?n:void 0}(),ct=function(n){return n.prototype||n
};n.global=this,n.copyOwn=function(n,t){var r,e;arguments.length>=2?(r=n||{},e=t):(r={},e=n);
for(var i in e)et.call(e,i)&&(r[i]=e[i]);return r},n.copyOwn(n,{get:function(n,t,r){var e;
return n&&null!=(e=n[t])?e:r},gets:function(n,t){return t.map(function(t){return n[t]
})},getPath:function(t,r,e,i){if(!t)return e;if(null!=r){var u=n.array.is(r)?r:r.split("."),o=u.length;
if(o)for(var a=0;o>a;){var s=u[a++],c=t[s];if(null==c){if(!i)return e;c=t[s]=null==e||isNaN(+e)?{}:[]
}t=c}}return t},setPath:function(t,r,e){if(t&&null!=r){var i=n.array.is(r)?r:r.split(".");
if(i.length){var u=i.pop();t=n.getPath(t,i,u,!0),null!=t&&(t[u]=e)}}return t},propGet:function(n,t){return n=""+n,function(r){return r?r[n]:t
}},getOwn:function(n,t,r){var e;return n&&et.call(n,t)&&null!=(e=n[t])?e:r},hasOwn:function(n,t){return!!n&&et.call(n,t)
},protoOf:Object.getPrototypeOf||function(n){return n.__proto__||n.constructor&&n.constructor.prototype
},rootProtoOf:function(t){for(var r=null,e=n.protoOf(t);e&&e!==rt&&e!==r;)e=n.protoOf(r=e);
return r},hasOwnProp:et,set:function(n){for(var t=n||{},r=arguments,e=1,i=r.length-1;i>e;e+=2)t[r[e]]=r[e+1];
return t},setDefaults:function(t,r){var e,i=t||{},u=arguments,o=u.length;if(2===o&&n.object.is(r))n.each(r,function(n,t){null==i[t]&&(i[t]=n)
});else{o--;for(var a=1;o>a;a+=2)e=u[a],null==i[e]&&(i[e]=u[a+1])}return i},setUDefaults:function(t,r){var e,i=t||{},u=arguments,o=u.length;
if(2===o&&n.object.is(r))n.each(r,function(n,t){void 0===i[t]&&(i[t]=n)});else{o--;
for(var a=1;o>a;a+=2)e=u[a],void 0===i[e]&&(i[e]=u[a+1])}return i},setNonEnum:function(){if(!at)return function(n,t,r){return n[t]=r,n
};var n={enumerable:!1,configurable:!0,writable:!0,value:void 0};return function(t,r,e){return n.value=e,at(t,r,n),n.value=null,t
}}(),setConst:function(){if(!at)return function(n,t,r){return n[t]=r,n};var n={enumerable:!1,configurable:!1,writable:!1,value:void 0};
return function(t,r,e){return n.value=e,at(t,r,n),n.value=null,t}}(),eachOwn:function(n,t,r){for(var e in n)et.call(n,e)&&t.call(r,n[e],e,n);
n&&it&&it.forEach(function(e){et.call(n,e)&&t.call(r,n[e],e,n)})},each:function(n,t,r){for(var e in n)t.call(r,n[e],e,n);
n&&it&&it.forEach(function(e){et.call(n,e)&&t.call(r,n[e],e,n)})},copy:function(t,r){var e,i;
return arguments.length>=2?(e=t||{},i=r):(e={},i=t),n.each(i,function(n,t){e[t]=n
}),e},copyx:function(t,r,e){var i=n.get(e,"where"),u=n.get(e,"set");return n.each(r,function(n,e){(!i||i(r,e,t))&&(u?u(t,e,n):t[e]=n)
}),t},copyProps:function(n,t,r){var e,i;return arguments.length>=3?(e=n||{},i=t):(e={},i=n,r=t),r&&r.forEach(i?function(n){e[n]=i[n]
}:function(n){e[n]=void 0}),e},keys:function(n){var t=[];for(var r in n)t.push(r);
return n&&it&&it.forEach(function(n){t.push(n)}),t},values:function(t){var r=[];return n.each(t,function(n){r.push(n)
}),r},uniqueIndex:function(t,r,e){var i={};return n.each(t,function(n,t){r&&(n=r.call(e,n)),null==n||et.call(i,n)||(i[n]=t)
}),i},ownKeys:Object.keys,own:function(n,t,r){var e=Object.keys(n);return e.map(t?function(e){return t.call(r,n[e],e)
}:function(t){return n[t]})},make:function(n,t){var r=Object.create(n.prototype);
return n.apply(r,t||ot)||r},isPropPrivate:function(n){return!!n&&"_"===n.charAt(0)
}}),n.object={is:function(n){return!!n&&"object"==typeof n},isNative:function(n){return!!n&&n.constructor===Object
},as:function(n){return n&&"object"==typeof n?n:null},asNative:function(n){return n&&n.constructor===Object?n:null
},lazy:function(n,t,r,e){return n[t]||(n[t]=r?r.call(e,t):{})}},n.lazy=n.object.lazy,n.info=function(t,r){var e;
if(t&&r){if(e=t.__info__,arguments.length<2)return e;e||n.setNonEnum(t,"__info__",e={}),n.copyOwn(e,r)
}return t},n.info.get=function(t,r,e){return n.get(t&&t.__info__,r,e)},n.copyOwn(n,{bit:{set:function(n,t,r){return r||null==r?n|t:n&~t
}}}),n.copyOwn(n,{compare:function(n,t){return n===t?0:n>t?1:-1},compareReverse:function(n,t){return n===t?0:n>t?-1:1
},methodCaller:function(n,t){return t?function(){return t[n].apply(t,arguments)}:function(){return this[n].apply(this,arguments)
}},identity:function(n){return n},add:function(n,t){return n+t},negate:function(n){return function(){return!n.apply(this,arguments)
}},sqr:function(n){return n*n},noop:function(){},retTrue:function(){return!0},retFalse:function(){return!1
},fun:{is:function(n){return"function"==typeof n},as:function(n){return"function"==typeof n?n:null
},to:function(t){return"function"==typeof t?t:n.fun.constant(t)},constant:function(n){return function(){return n
}},wraps:function(t,r){return t.valueOf=n.fun.constant(r),t},typeFactory:function(t){function r(){return n.make(t,arguments)
}return r.of=t,r}}}),n.ascending=n.compare,n.descending=n.compareReverse,n.number={is:function(n){return"number"==typeof n
},as:function(n,t){return"number"==typeof n?n:t},to:function(n,t){if(null==n)return t;
var r=+n;return isNaN(r)?t:r},toPositive:function(t,r){return t=n.number.to(t),null==t||t>0?t:r
},toNonNegative:function(t,r){return t=n.number.to(t),null!=t&&0>t?r:t}},n.array={empty:function(n){return!(n&&n.length)
},is:function(n){return n instanceof Array},isLike:function(n){return n&&null!=n.length&&"string"!=typeof n
},as:function(n){return n instanceof Array?n:null!=n?[n]:null},to:function(n){return n instanceof Array?n:null!=n?[n]:null
},lazy:function(n,t,r,e){return n[t]||(n[t]=r?r.call(e,t):[])},copy:function(n){return ut.apply(n,ut.call(arguments,1))
},each:function(t,r,e){null!=t&&(n.array.is(t)?t.forEach(r,e):r.call(e,t,0))},eachReverse:function(t,r,e){if(null!=t)if(n.array.is(t)){for(var i=t.length;i--;)if(r.call(e,t[i],i)===!1)return!1
}else if(r.call(e,t,0)===!1)return!1;return!0},like:n.copyOwn(function(n){return ft.is(n)?n:[n]
},{is:function(n){return!!n&&null!=n.length&&"string"!=typeof n},as:function(n){return ft.is(n)?n:null
}}),create:function(n,t){var r=n>=0?new Array(n):[];if(void 0!==t)for(var e=0;n>e;e++)r[e]=t;
return r},append:function(n,t,r){null==r&&(r=0);for(var e=0,i=t.length,u=n.length;i>e;e++)n[u+e]=t[r+e];
return n},appendMany:function(t){var r,e=arguments,i=e.length;if(i>1)for(var u=1;i>u;u++)if(r=n.array.to(e[u]))for(var o=0,a=r.length;a>o;)t.push(r[o++]);
return t},prepend:function(n,t,r){null==r&&(r=0);for(var e=0,i=t.length;i>e;e++)n.unshift(t[r+e]);
return n},removeAt:function(n,t){return n.splice(t,1)[0]},insertAt:function(n,t,r){return n.splice(t,0,r),n
},removeIf:function(n,t,r){for(var e=0,i=n.length;i>e;)t.call(r,n[e],e)?(i--,n.splice(e,1)):e++;
return n},binarySearch:function(t,r,e,i){e||(e=n.compare);for(var u=0,o=t.length-1;o>=u;){var a=u+o>>1,s=e(r,i?i(t[a]):t[a]);
if(0>s)o=a-1;else{if(!(s>0))return a;u=a+1}}return~u},insert:function(t,r,e){var i=n.array.binarySearch(t,r,e);
return 0>i&&t.splice(~i,0,r),i},remove:function(t,r,e){var i=n.array.binarySearch(t,r,e);
return i>=0?t.splice(i,1)[0]:void 0}};var ft=n.array.like;ft.to=ft,n.string={is:function(n){return"string"==typeof n
},to:function(n,t){return null!=n?String(n):t||""},join:function(n){var t,r,e=arguments,i=e.length;
switch(i){case 3:return t=e[1],r=e[2],null!=t&&""!==t?null!=r&&""!==r?""+t+n+(""+r):""+t:null!=r&&""!==r?""+r:"";
case 2:return t=e[1],null!=t?""+t:"";case 1:case 0:return""}for(var u=[],o=1;i>o;o++)t=e[o],null!=t&&""!==t&&u.push(""+t);
return u.join(n)},padRight:function(n,t,r){n||(n=""),null==r&&(r=" ");var e=~~((t-n.length)/r.length);
return e>0?n+new Array(e+1).join(r):n}},n.copyOwn(n,{firstUpperCase:function(n){if(n){var t=n.charAt(0),r=t.toUpperCase();
t!==r&&(n=r+n.substr(1))}return n},firstLowerCase:function(n){if(n){var t=n.charAt(0),r=t.toLowerCase();
t!==r&&(n=r+n.substr(1))}return n},titleFromName:function(t){return n.firstUpperCase(t).replace(/([a-z\d])([A-Z])/,"$1 $2")
},format:function(t,r,e){if(null==t||""===t)return"";var i=r&&n.fun.is(r);return t.replace(/(^|[^{])\{([^{}]+)\}/g,function(n,t,u){var o=r?i?r.call(e,u):r[u]:null;
return t+(null==o?"":String(o))})}}),n.copyOwn(n,{nullyTo:function(n,t){return null!=n?n:t
}}),n.copyOwn(n,{between:function(n,t,r){return Math.max(t,Math.min(n,r))},nully:function(n){return null==n
},notNully:function(n){return null!=n},notUndef:function(n){return void 0!==n},empty:function(n){return null==n||""===n
},notEmpty:function(n){return null!=n&&""!==n},truthy:function(n){return!!n},falsy:function(n){return!n
}}),n.copyOwn(n,{error:function(n){return n instanceof Error?n:new Error(n)},fail:function(t){throw n.error(t)
},assert:function(t,r){throw n.error.assertionFailed(t,r)}}),n.eachOwn({operationInvalid:function(t,r){return n.error(n.string.join(" ","Invalid operation.",n.format(t,r)))
},notImplemented:function(){return n.error("Not implemented.")},argumentRequired:function(t){return n.error(n.format("Required argument '{0}'.",[t]))
},argumentInvalid:function(t,r,e){return n.error(n.string.join(" ",n.format("Invalid argument '{0}'.",[t]),n.format(r,e)))
},assertionFailed:function(t,r){return n.error(n.string.join(" ","Assertion failed.",n.format(t,r)))
}},function(t,r){n.error[r]=t,n.fail[r]=function(){throw t.apply(null,arguments)}
}),n.debug=0,!function(){if("undefined"!=typeof window&&window.location){var t=function(n){return n&&/\bdebug=true\b/.test(n)?n:null
},r=t(window.location.href);if(!r)try{r=t(window.top.location.href)}catch(e){}if(r){var i=/\bdebugLevel=(\d+)/.exec(r);
n.debug=i?+i[1]:3}}}(),n.logSeparator="------------------------------------------",n.setDebug=function(t){return t=+t,t=isNaN(t)?0:t,t>1&&"undefined"==typeof console&&(t=1),n.log&&n.debug==t||(n.debug=t,r(t)),n.debug
};var lt=null;n.addOnDebugChanged=function(n){lt||(lt=[]).push(n)};var ht,pt=["info","debug","error","warn","group","groupEnd"],yt={group:"groupCollapsed"};
n.logger=function(t,r,e){return n.debug>1?i(t,r):r?o(r,e,t):ht||(ht=a())},n.setDebug(n.debug),n.priv={key:f};
var vt=function(t){return"_"+n.nullyTo(t,"safe")+(new Date).getTime()+Math.round(1e3*Math.random())
},dt=n.priv.key();n.copyOwn(n,{scope:function(n,t){return n.call(t)},firstDefined:function(n,t,r){var e,i=0,u=n.length;
for(t||(t=[]);u>i;)if(void 0!==(e=n[i++].apply(r,t)))return e},indexedId:function(n,t){return t>0?n+""+(t+1):n
},splitIndexedId:function(n){var t=/^(.*?)(\d*)$/.exec(n),r=null;return t[2]&&(r=Number(t[2]),1>=r?r=1:r--),[t[1],r]
},parseDistinctIndexArray:function(t,r,e){if(t=n.array.as(t),null==t)return null;
null==r&&(r=0),null==e&&(e=1/0);var i=n.query(t).select(function(n){return+n}).where(function(n){return!isNaN(n)&&n>=r&&e>=n
}).distinct().array();return i.length?i:null},argumentsTypeBind:function(n,t){var r,e=n.length,i=new Array(e);
if(e&&t&&(r=t.length)){var u=0,o=0;do{var a=t[u];(null==a||typeof a===n[o])&&(i[o]=a,u++),o++
}while(e>o&&r>u)}return i},argumentsTypeBound:function(t,r){return function(){var e=n.argumentsTypeBind(t,arguments);
return r.apply(this,e)}}}),n.qualName=function(n){return n instanceof p?n:new p(n)
},n.QualifiedName=p,p.prototype.toString=function(){return n.string.join(".",this.namespace,this.name)
},n.qualNameOf=function(t,r){return arguments.length>1?(t.__qname__=n.qualName(r),t):t.__qname__
};var gt=n,mt={},_t=[];n.globalSpace=function(n,t){return mt[n]=t},n.space=function(t,r,e){n.fun.is(r)&&(e=r,r=null),n.string.is(r)&&(r=y(r));
var i=y(t,r);if(e){_t.push(gt);try{e(i)}finally{gt=_t.pop()}}return i},n.describe=function(t,r){var e=n.get(r,"maxLevel")||5,i=[];
return n.describeRecursive(i,t,e,r),i.join("")},n.describeRecursive=function(t,r,e,i){if(e>0){switch(e--,typeof r){case"undefined":return t.push("undefined");
case"object":if(!r)return t.push("null"),!0;if(n.fun.is(r.describe))return r.describe(t,e,i);
if(r instanceof Array)t.push("["),r.forEach(function(r,u){u&&t.push(", "),n.describeRecursive(t,r,e,i)||t.pop()
}),t.push("]");else{var u=n.get(i,"ownOnly",!0);if(r===n.global)return t.push("<window>"),!0;
if(n.fun.is(r.cloneNode))return t.push("<dom #"+(r.id||r.name||"?")+">"),!0;e>1&&r.constructor!==Object&&(e=1,u=!0),t.push("{");
var o=!0;for(var a in r)(!u||n.hasOwnProp.call(r,a))&&(o||t.push(", "),t.push(a+": "),n.describeRecursive(t,r[a],e,i)?o&&(o=!1):(t.pop(),o||t.pop()));
if(o){var s=""+r;"[object Object]"!==s&&t.push("{"+s+"}")}t.push("}")}return!0;case"number":return t.push(""+Math.round(1e5*r)/1e5),!0;
case"boolean":return t.push(""+r),!0;case"string":return t.push(JSON.stringify(r)),!0;
case"function":return n.get(i,"funs",!1)?(t.push(JSON.stringify(r.toString().substr(0,13)+"...")),!0):!1
}return t.push("'new ???'"),!0}},n.mixin=v(Object.create),n.copyOwn(n.mixin,{custom:v,inherit:n.mixin,copy:v(n.copy),share:v(n.identity)}),n.create=function(){var t=ut.call(arguments),r=!0,e=t.shift();
"boolean"==typeof e&&(r=e,e=t.shift());var i;return e?(i=Object.create(e),r&&_(i)):i={},t.length>0&&(t.unshift(i),n.mixin.apply(n,t)),i
},n.attached=function(t,r,e){var i=t.__attached__;return arguments.length>2?(void 0!==e&&(i||n.setNonEnum(t,"__attached__",i={}),i[r]=e),t):i&&i[r]
},n.attached.is=function(n){return!(!n||n.indexOf("$")<0)};var bt={tryConfigure:1,configure:1,$type:1};
n.configure=n.config=b,n.configurable=function(t,r){return n.info(r,{configurable:!!t})
},n.copyOwn(b,{generic:function(t,r){return r&&n.array.each(r,function(r){var e;r.constructor===Object?b.setters(t,r):t!==r&&(e=t.tryConfigure)&&n.fun.is(e)&&e.call(t,r)
}),t},isPropConfigurable:function(n){return!!n&&"_"!==n.charAt(0)&&!et.call(bt,n)
},setters:function(t,r){return r&&b.expand1(r).forEach(function(r){n.each(r,function(n,r){b.setter(t,r,n)
})}),t},setter:function(t,r,e){var i,u,o,a;return void 0!==e&&b.isPropConfigurable(r)&&n.fun.is(i=t[r])&&(u=i.valueOf())&&n.info.get(u,"configurable",(o=u.length)>=1)&&(n.attached.is(r)?n.attached(t,r,e):o?i.call(t,e):(a=i.call(t),(n.object.is(a)||n.fun.is(a))&&b(a,e))),t
},expand1:function(n){return w(n,!0)},expand:w}),n.fun.inherit=j,n.overrides=A,n.fun.callsBase=S;
var wt=/\.\s*base\b/;n.methods=E,n.method=T,n.abstractMethod=n.fail.notImplemented,n("MetaType",R);
var xt={Ctor:1,BaseType:1,prototype:1};n.copyOwn(R,{methods:F,add:n.configurable(!1,function(){return F.apply(this,arguments)
}),inst:n.configurable(!1,function(){return this.Ctor}),subType:n.configurable(!1,function(t,r,e){var i=this,u=i.Ctor,o=u&&u.meta||n.fail.operationInvalid("MetaType is not yet instantiated.");
return n.fun.inherit(t,i),n.copyx(t,i,{where:function(n,t){return et.call(n,t)&&"_"!==t.charAt(0)&&!et.call(xt,t)
}}),t.BaseType=i,new t(null,o,e),r&&n.configure(t,r),t}),extend:n.configurable(!1,function(t,r){function e(){return i.apply(this,arguments)
}var i=this;return n.fun.wraps(e,i),i.subType(e,t,r)})}),R.add({closed:function(){return!!this.steps
},close:function(){return this.steps||this._closeCore(this.steps=[]),this},_assertOpened:function(){if(this.closed())throw n.error.operationInvalid("MetaType is closed.")
},_closeCore:function(n){this._addPostSteps(n),this._addInitSteps(n)},_createConstructor:function(){function n(){for(var n=t;n--;)e[n].apply(this,arguments)===!0&&(n=t)
}var t=1,r=this,e=[function(){return e=r.close().steps,t=e.length,!0}];return n},_initConstructor:function(t){var r=this.constructor;
return L.call(r,t,r),t.meta=this,this.baseType&&n.fun.inherit(t,this.baseType.close().Ctor),t.MetaType=r,t
},_addPostSteps:function(t){n.array.eachReverse(this._mixins,function(n){n._post&&t.push(n._post)
}),this._post&&t.push(this._post)},_addInitSteps:function(t){n.array.eachReverse(this._mixins,function(n){n._init&&t.push(n._init)
}),this._init&&t.push(this._init)},init:function(t){if(!t)throw n.error.argumentRequired("init");
return this._assertOpened(),this._init=n.overrides(t,this._init,this.rootType.Ctor.prototype),this
},postInit:function(t){if(!t)throw n.error.argumentRequired("postInit");return this._assertOpened(),this._post=n.overrides(t,this._post,this.rootType.Ctor.prototype),this
},type:n.configurable(!0,function(){return this.constructor}),add:n.configurable(!1,function(t,r){return D(t)&&this._mixMetaType(t.meta),n.methods(this.Ctor,t,r),this
}),_mixMetaType:function(t){n.array.lazy(this,"_mixins").push(t)},methods:function(t){return n.array.each(t,this.add,this),this
},method:n.configurable(!1,function(t,r,e){return n.method(this.Ctor,t,r,e),this}),configure:function(t){return n.configure.generic(this,t),this
},extend:n.configurable(!1,function(n,t){var r=this.constructor.extend(null,t).Ctor;
return r.configure(n)})});var Ot=(new R).close().Ctor.add({override:function(t,r){return M(this,t,r,n.protoOf(this),Ot.prototype,!0),this
},toString:function(){return"[object "+String(n.qualNameOf(n.classOf(this)))+"]"}},{enumerable:!1});
n("Object",Ot),n.type=n.argumentsTypeBound(["string","function","object"],function(t,r,e){var i=r?r.MetaType:R,u=i.extend().Ctor;
return n(t,u,e)}),n.makeEnum=function(t,r){var e=1,i=0,u={},o=n.get(r,"all");return t.forEach(function(n){u[n]=e,o&&(i|=e),e<<=1
}),o&&(u[o]=i),u},n.copyOwn(n,{classify:function(t,r){return n.setNonEnum(t,"_class",r),t
},classOf:function(n){return n&&(n._class||n.constructor)||void 0},is:function(n,t){return!!n&&(n._class&&n._class===t||n instanceof(t.of||t))
},as:function(t,r,e){return n.is(t,r)?t:e},createIs:function(t){function r(r){return n.is(r,t)
}return r},createAs:function(t){function r(r,e){return n.as(r,t,e)}return r},isSubClassOf:function(t,r){return!(!t||!r||t!==r&&!n.is(ct(t),r))
}});var jt=dt.property();n.copyOwn(n,{instance:function(t,r,e,i,u){var o=n.fields(t,e,u);
return i&&n.instanceAccessors(t,o,i),t.createChild=K,r&&n.configure(t,r),o},fields:function(t,r,e){var i=n.classOf(t);
r&&n.is(r,i)||(r=i.defaults),void 0===e&&(e=jt);var u=r&&e&&e(r),o=u?Object.create(u):{};
return o.___proto=r,e&&e.init(t,o),o},classAccessors:function(t,r,e){var i=ct(t);
for(var u in r)i[u]=n.classAccessor(u,r[u],e);return n},classAccessor:function(n,t,r){function e(t){var e=r(this);
return arguments.length?i.call(this,e,t):e[n]}var i=B(n,t);return r||(r=jt),e},instanceAccessors:function(t,r,e){for(var i in e)t[i]=n.instanceAccessor(t,i,e[i],r);
return n},instanceAccessor:function(n,t,r,e){function i(r){return arguments.length?u.call(n,e,r):e[t]
}var u=B(t,r);return i}}),n.MetaType.subType(J,{methods:{fields:function(t){var r={};
for(var e in t)r[e]=n.classAccessor(e,t[e],this.fieldsPrivProp);return this.methods(r)
},_addInitSteps:function(t){function r(t){t&&n.configure(this,t)}function e(t,r){n.fields(this,r,i.fieldsPrivProp)
}t.push(r),this.base(t);var i=this;t.push(e)}}}),n("FieldsBase",J.Ctor);var At=1,St={},Nt="__def_id__";
return n.nextId=function(t){if(t){var r=n.getOwn(St,t)||1;return St[t]=r+1,r}return At++
},n.id=function(t){var r=n.getOwn(t,Nt);return r||n.setConst(t,Nt,r=n.nextId()),r
},n.hashKey=function(t){var r=(typeof t).charAt(0);switch(r){case"n":case"b":case"s":return r+":"+t
}return r+":"+(t?t:n.id(t))},n("Set",n.Object.extend({init:function(t,r){this.source=t||{},this.count=t?null!=r?r:n.ownKeys(t).length:0
},methods:{has:function(n){return et.call(this.source,n)},add:function(n){var t=this.source;
return et.call(t,n)||(this.count++,t[n]=!0),this},rem:function(n){return et.call(this.source,n)&&(delete this.source[n],this.count--),this
},clear:function(){return this.count&&(this.source={},this.count=0),this},members:function(){return n.ownKeys(this.source)
}}})),n("Map",n.Object.extend({init:function(t,r){this.source=t||{},this.count=t?null!=r?r:n.ownKeys(t).length:0
},methods:{has:function(n){return et.call(this.source,n)},get:function(n){return et.call(this.source,n)?this.source[n]:void 0
},set:function(n,t){var r=this.source;return et.call(r,n)||this.count++,r[n]=t,this
},rem:function(n){return et.call(this.source,n)&&(delete this.source[n],this.count--),this
},clear:function(){return this.count&&(this.source={},this.count=0),this},copy:function(t){n.eachOwn(t.source,function(n,t){this.set(t,n)
},this)},values:function(){return n.own(this.source)},keys:function(){return n.ownKeys(this.source)
},clone:function(){return new n.Map(n.copy(this.source),this.count)},symmetricDifference:function(t){if(!this.count)return t.clone();
if(!t.count)return this.clone();var r={},e=0,i=this.source,u=t.source;return n.eachOwn(i,function(n,t){et.call(u,t)||(r[t]=n,e++)
}),n.eachOwn(u,function(n,t){et.call(i,t)||(r[t]=n,e++)}),new n.Map(r,e)},intersect:function(t,r){return r||(r=new n.Map),n.eachOwn(this.source,function(n,e){t.has(e)&&r.set(e,n)
}),r}}})),n("OrderedMap",n.Object.extend({init:function(t){t instanceof n.OrderedMap?(this._list=t._list.slice(),this._map=n.copy(t._map)):(this._list=[],this._map={})
},methods:{has:function(n){return et.call(this._map,n)},count:function(){return this._list.length
},get:function(n){var t=this._map;return et.call(t,n)?t[n].value:void 0},at:function(n){var t=this._list[n];
return t?t.value:void 0},add:function(t,r,e){var i=this._map,u=et.call(i,t)&&i[t];
return u?u.value!==r&&(u.value=r):(u=i[t]={key:t,value:r},null==e?this._list.push(u):n.array.insertAt(this._list,e,u)),this
},rem:function(n){var t=this._map,r=et.call(t,n)&&t[n];if(r){var e=this._list.indexOf(r);
this._list.splice(e,1),delete this._map[n]}return this},clear:function(){return this._list.length&&(this._map={},this._list.length=0),this
},keys:function(){return n.ownKeys(this._map)},forEach:function(n,t){return this._list.forEach(function(r){n.call(t,r.value,r.key)
})}}})),n("EventSource",n.Object.extend({methods:{on:function(n,t){return H(U,this,n,t,!0),this
},before:function(n,t){return H(U,this,n,t,!0),this},after:function(n,t){return H(U,this,n,t,!1),this
},off:function(n,t){return H($,this,n,t,null,!0),this},_acting:function(t,r){if(!t)throw n.error.argumentRequired("type");
return G(this,t,r)}}})),n.html={escape:function(t){return n.string.to(t).replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/"/gm,"&quot;")
},tag:function(t,r){r=r?n.ownKeys(r).map(function(t){var e=r[t];return n.empty(e)?"":" "+t+'="'+String(e)+'"'
}).join(""):"";var e=arguments.length>2?ut.call(arguments,2).map(function(t){return null!=t&&(n.fun.is(t)&&(t=t()),t=n.array.is(t)?t.map(n.string.to).join(""):n.string.to(t)),t||""
}).join(""):"";return"<"+t+r+">"+e+"</"+t+">"},classes:function(t){t=t?t+"-":"";var r=[];
return ut.call(arguments,1).forEach(function(e){n.empty(e)||r.push(t+n.css.escapeClass(e))
}),r.join(" ")}},n.css={escapeClass:function(n){return(n||"").replace(/\s/g,"_")}},n.type("Query").add({index:-1,item:void 0,next:function(){var n=this,t=n.index;
return-2===t?!1:(t++,n._next(t)?(n.index=t,!0):(n._finish(),!1))},_next:n.abstractMethod,_finish:function(){var t=this;
t.index>-2&&(t.next=n.retFalse,t.index=-2,delete t.item)},each:function(n,t){for(var r=this;r.next();)if(n.call(t,r.item,r.index)===!1)return!0;
return!1},array:function(n){for(var t=n||[],r=this;r.next();)t.push(r.item);return t
},sort:function(t,r){if(t||(t=n.compare),r){var e=t;t=function(n,t){return e(r(n),r(t))
}}var i=this.array().sort(t);return new n.ArrayLikeQuery(i)},object:function(t){for(var r=n.get(t,"target")||{},e=n.get(t,"name"),i=n.get(t,"value"),u=n.get(t,"context");this.next();){var o=""+(e?e.call(u,this.item,this.index):this.item);
r[o]=i?i.call(u,this.item,this.index):this.item}return r},reduce:function(n){var t,r=0;
if(arguments.length<2){if(!this.next())throw new TypeError("Length is 0 and no second argument");
t=this.item}else t=arguments[1];for(;this.next();)t=n(t,this.item,this.index),++r;
return t},count:function(){for(var n=0;this.next();)n++;return n},first:function(n,t,r){for(;this.next();)if(!n||n.call(t,this.item,this.index)){var e=this.item;
return this._finish(),e}return r},last:function(n,t,r){for(var e=r;this.next();)(!n||n.call(t,this.item,this.index))&&(e=this.item);
return e},any:function(n,t){for(;this.next();)if(!n||n.call(t,this.item,this.index))return this._finish(),!0;
return!1},all:function(n,t){for(;this.next();)if(!n.call(t,this.item,this.index))return this._finish(),!1;
return!0},min:function(){for(var n=null;this.next();)(null===n||this.item<n)&&(n=this.item);
return n},max:function(){for(var n=null;this.next();)(null===n||this.item>n)&&(n=this.item);
return n},range:function(){for(var n=null,t=null;this.next();){var r=this.item;null===n?n=t=r:(n>r&&(n=r),r>t&&(t=r))
}return null!=n?{min:n,max:t}:null},multipleIndex:function(t,r){var e={};return this.each(function(i){var u=t?t.call(r,i):i;
if(null!=u){var o=n.getOwn(e,u)||(e[u]=[]);o.push(i)}}),e},uniqueIndex:function(n,t){var r={};
return this.each(function(e){var i=n?n.call(t,e):e;null==i||et.call(r,i)||(r[i]=e)
}),r},select:function(t,r){return new n.SelectQuery(this,t,r)},prop:function(t){return new n.SelectQuery(this,function(n){return n?n[t]:void 0
})},selectMany:function(t,r){return new n.SelectManyQuery(this,t,r)},union:function(){var t=n.array.append([this],arguments);
return new n.SelectManyQuery(new n.ArrayLikeQuery(t))},where:function(t,r){return new n.WhereQuery(this,t,r)
},distinct:function(t,r){return new n.DistinctQuery(this,t,r)},skip:function(t){return new n.SkipQuery(this,t)
},take:function(t){return 0>=t?new n.NullQuery:isFinite(t)?new n.TakeQuery(this,t):this
},whayl:function(t,r){return new n.WhileQuery(this,t,r)},reverse:function(){return new n.ReverseQuery(this)
}}),n.type("NullQuery",n.Query).add({next:n.retFalse}),n.type("AdhocQuery",n.Query).init(function(n){this._next=n
}),n.type("ArrayLikeQuery",n.Query).init(function(t){function r(){for(;++i<u;)if(et.call(t,i))return e.index=i,e.item=t[i],!0;
return e._finish(),!1}var e=this;n.array.isLike(t)||(t=[t]),e._list=t,e._count=t.length;
var i=-1,u=t.length;e.next=r}).add({count:function(){var n=this._count;return this.index>=0&&(n-=this.index+1),this._finish(),n
}}),n.type("RangeQuery",n.Query).init(function(n,t,r){this._index=n,this._count=t,this._step=null==r?1:r
}).add({_next:function(n){return n<this._count?(this.item=this._index,this._index+=this._step,!0):void 0
},count:function(){var n=this._count;return this.index>=0&&(n-=this.index+1),this._finish(),n
}}),n.type("WhereQuery",n.Query).init(function(n,t,r){function e(){for(;n.next();){var e=n.item;
if(t.call(r,e,n.index))return i.item=e,i.index=++u,!0}return i._finish(),!1}var i=this,u=-1;
i.next=e}),n.type("WhileQuery",n.Query).init(function(n,t,r){function e(){if(n.next()){var e=n.item;
if(t.call(r,e,n.index))return i.item=e,i.index=++u,!0}return i._finish(),!1}var i=this,u=-1;
i.next=e}),n.type("SelectQuery",n.Query).init(function(n,t,r){function e(){return n.next()?(i.item=t.call(r,n.item,n.index),i.index=++u,!0):(i._finish(),!1)
}var i=this,u=-1;i.next=e}),n.type("SelectManyQuery",n.Query).init(function(n,t,r){this._selectMany=t,this._ctx=r,this._source=n,this._manySource=null
}).add({_next:function(){for(;;){if(this._manySource){if(this._manySource.next())return this.item=this._manySource.item,!0;
this._manySource=null}if(!Y.call(this))break}}}),n.type("DistinctQuery",n.Query).init(function(n,t,r){function e(){for(;n.next();){var e=n.item,a=t?t.call(r,e,n.index):e;
if(null!=a&&!et.call(o,a))return i.item=e,i.index=++u,o[a]=!0}return i._finish(),!1
}var i=this,u=-1,o={};i.next=e}),n.type("SkipQuery",n.Query).init(function(n,t){this._source=n,this._skip=t
}).add({_next:function(){for(;this._source.next();){if(!(this._skip>0))return this.item=this._source.item,!0;
this._skip--}}}),n.type("TakeQuery",n.Query).init(function(n,t){this._source=n,this._take=t
}).add({_next:function(){return this._take>0&&this._source.next()?(this._take--,this.item=this._source.item,!0):void 0
}}),n.type("ReverseQuery",n.Query).init(function(n){this._source=n}).add({_next:function(t){t||(this._source instanceof n.Query&&(this._source=this._source instanceof n.ArrayLikeQuery?this._source._list:this._source.array()),this._count=this._source.length);
var r=this._count;if(r>t){for(var e=r-t-1,i=this._source;!et.call(i,e);){if(--e<0)return!1;
this._count--}return this.item=i[e],!0}}}),n.query=function(t){return void 0===t?new n.NullQuery:t instanceof n.Query?t:n.fun.is(t)?new n.AdhocQuery(t):new n.ArrayLikeQuery(t)
},n.range=function(t,r,e){return new n.RangeQuery(t,r,e)},n.textTable=function(t){function r(){return u.map(function(n){switch(n){case s:return e(n,"╤","═","╔","╗");
case c:return i||(i=e(n,"┼","─","╟","╢"));case f:return e(n,"╧","═","╚","╝")}return e(n,"│"," ","║","║")
}).join("\n")}function e(t,r,e,i,u){return i+t.map(function(t,r){return n.string.padRight(t||"",a[r],e)
}).join(r)+u}var i,u=[],o=" ",a=new Array(t),s=n.array.create(t,""),c=s.slice(),f=s.slice();
return r.row=function(){for(var n,e,i=arguments,s=-1,c=new Array(t);++s<t;)n=i[s],e=c[s]=o+(void 0===n?"":String(n))+o,a[s]=Math.max(a[s]||0,e.length);
return u.push(c),r},r.rowSep=function(n){return u.push(u.length?n?f:c:s),r},r},n.round10=function(n,t){return t?(n=+n,isNaN(n)||"number"!=typeof t||t%1!==0?0/0:(n=Math.round(nt(n,t)),nt(n,-t))):Math.round(n)
},n.mult10=function(n,t){return t?nt(+n,t):n},n.delta=function(n,t){if(n===t)return 0;
var r=n-t;return 0>r?-r:r},gt=n.global,n});