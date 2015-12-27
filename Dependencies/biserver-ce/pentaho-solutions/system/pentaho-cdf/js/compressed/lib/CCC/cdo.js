define(["./def","./protovis-compat!"],function(e,t){function i(e,t){var i=e&&e.length;
if(i){for(var n=0;i>n;n++){var s=e[n];t&&(s[t]=null),s.dispose()}e.length=0}}function n(e,t,i,n,s){i[n]=e;
var r=e[t]||(e[t]=[]);null==s||s>=r.length?r.push(i):r.splice(s,0,i)}function s(t,i,n,s){var r,a=t[i];
a&&(r=a.indexOf(n))>=0&&e.array.removeAt(a,r),n[s]=null}function r(e,t){return e.id-t.id
}function a(e,t){return t.id-e.id}function o(){delete this.isSelected}function l(e){return e.isNull||e.isSelected
}function u(e){return e.isSelected===!0}function c(e){return e.isSelected===!1}function h(e){return e.isVisible===!0
}function d(e){return e.isVisible===!1}function m(e){return e.isNull===!0}function f(e){return e.isNull===!1
}function p(t,i,n,s,r,a){var o;if(this.owner===this){if(null==r){var l=t._formatter;
r=l?l(s,i):s}r=e.string.to(r),!r&&e.debug>=2&&e.log("Only the null value should have an empty label."),o=new xt.Atom(this,s,r,i,n),a&&(o.isVirtual=!0)
}else{var u=this.parent||this.linkParent;o=u._atomsByKey[n]||p.call(u,t,i,n,s,r,a)
}return e.array.insert(this._atoms,o,this._atomComparer),D.call(this),this._atomsByKey[n]=o,o
}function v(t){var i=t.key,n=this;if(t.dimension===n)return n.owner===n||e.assert("Should be an owner dimension"),i||t!==n._virtualNullAtom||(t=n.intern(null)),t;
var s=!n._lazyInit;if(s){var r=n._atomsByKey[i];if(r){if(r!==t)throw e.error.operationInvalid("Atom is from a different root data.");
return t}if(n.owner===n)throw e.error.operationInvalid("Atom is from a different root data.")
}return v.call(n.parent||n.linkParent,t),s&&(n._atomsByKey[i]=t,i?e.array.insert(n._atoms,t,n._atomComparer):(n._nullAtom=t,n._atoms.unshift(t)),D.call(n)),t
}function g(t){var i=e.get(t,"visible"),n=e.get(t,"selected");return(null==i?null:!!i)+":"+(null==n?null:!!n)
}function _(t){var i=this._nullAtom;if(!i){if(this.owner===this){var n=this.type._formatter,s=n?e.string.to(n.call(null,null,t)):"";
i=new xt.Atom(this,null,s,null,""),this.data._atomsBase[this.name]=i}else i=_.call(this.parent||this.linkParent,t);
this._atomsByKey[""]=this._nullAtom=i,this._atoms.unshift(i)}return i}function y(){return this.owner===this||e.assert("Can only create atoms on an owner dimension."),this._virtualNullAtom||(this._virtualNullAtom=new xt.Atom(this,null,"",null,""),this.data._atomsBase[this.name]=this._virtualNullAtom),this._virtualNullAtom
}function b(){this.owner===this||e.assert("Can only unintern atoms of an owner dimension.");
var t=this._atoms;if(t){for(var i=this._atomsByKey,n=0,s=t.length;s>n;){var r=t[n];
if(r.visited)delete r.visited,n++;else if(r!==this._virtualNullAtom){t.splice(n,1),s--;
var a=r.key;delete i[a],a||(delete this._nullAtom,this.data._atomsBase[this.name]=this._virtualNullAtom)
}}D.call(this)}}function w(){var t=this._atoms;if(t){for(var i,n=this._atomsByKey,s=0,r=t.length;r>s;){var a=t[s];
if(a.isVirtual){t.splice(s,1),r--,i=!0;var o=a.key||e.assert("Cannot be the null or virtual null atom.");
delete n[o]}else s++}i&&D.call(this)}}function D(){this._atomVisibleDatumsCount=this._sumCache=this._visibleAtoms=this._visibleIndexes=null
}function N(e){n(this,"childNodes",e,"parent"),e.owner=this.owner}function C(e){n(this,"_linkChildren",e,"linkParent"),e.owner=this.owner
}function S(e,t){var i;if(!this._disposed&&(i=this._atomVisibleDatumsCount)){var n=e.atoms[this.name],s=n.key,r=i[s];
i[s]=(r||0)+(t?1:-1),this._visibleAtoms=this._sumCache=this._visibleIndexes=null}}function x(){var e=this._atomVisibleDatumsCount;
return e||(e={},this.data.datums(null,{visible:!0}).each(function(t){var i=t.atoms[this.name],n=i.key;
e[n]=(e[n]||0)+1},this),this._atomVisibleDatumsCount=e),e}function I(e){var t=[];
return this._atoms.forEach(function(i,n){this.isVisible(i)===e&&t.push(n)},this),t
}function R(t){return e.query(this._atoms).where(function(e){return this.isVisible(e)===t
},this).array()}function L(t,i){this.insertAt(t,i),e.lazy(this,"_childrenByKey")[t.key]=t
}function k(e,t){n(this,"_linkChildren",e,"linkParent",t)}function T(e){s(this,"_linkChildren",e,"linkParent")
}function A(){i(this.childNodes,"parent"),this._childrenByKey=null,i(this._linkChildren,"linkParent"),this._groupByCache=null,this._sumAbsCache=null
}function O(){this.isOwner()||e.fail("Can only be called on the owner data.")}function G(t,i){!t.isNull||e.assert("Null datums do not notify selected changes"),i?this._selectedNotNullDatums.set(t.id,t):this._selectedNotNullDatums.rem(t.id),this._sumAbsCache=null
}function M(t,i){var n=t.id,s=this,r=e.hasOwnProp;if(r.call(s._datumsById,n)){!t.isNull||e.assert("Null datums do not notify visible changes"),i?s._visibleNotNullDatums.set(n,t):s._visibleNotNullDatums.rem(n),s._sumAbsCache=null;
for(var a=s._dimensionsList,o=0,l=a.length;l>o;)S.call(a[o++],t,i);for(a=s.childNodes,o=0,l=a.length;l>o;)M.call(a[o++],t,i);
if(a=s._linkChildren,a&&(l=a.length))for(o=0;l>o;)M.call(a[o++],t,i)}}function P(e){for(var t,i=[e];t=e.parent||e.linkParent;)i.unshift(e=t);
return i}function V(e,t){for(var i,n=0,s=Math.min(e.length,t.length),r=null;s>n&&(i=e[n])===t[n];)r=i,n++;
return r}function B(t,i){function n(t){if(t){var i=t.key;if(!e.hasOwnProp.call(c,i)){!m&&a&&e.hasOwnProp.call(a,i)&&(t=a[i]);
var n=t.id;u.push(t),c[i]=t,h[n]=t,l&&l.push(t),q.call(this,t,f,d),t.isNull||(v&&t.isSelected&&v.set(n,t),t.isVisible&&p.set(n,t))
}}}t||e.fail.argumentRequired("addDatums");var s,r,a,o,l,u,c,h,d=e.get(i,"doAtomGC",!1),m=e.get(i,"isAdditive",!1),f=!!this._dimensions,p=this._visibleNotNullDatums,v=this._selectedNotNullDatums,g=this._datums;
if(g?(a=this._datumsByKey,o=this._datumsById,m&&d&&g.forEach(function(e){q.call(this,e,!1,!0)
},this)):m=!1,m?(l=[],u=g,h=o,c=a,this._sumAbsCache=null):(this._datums=u=[],this._datumsById=h={},this._datumsByKey=c={},g&&(A.call(this),p.clear(),v&&v.clear())),e.array.is(t))for(s=0,r=t.length;r>s;)n.call(this,t[s++]);
else{if(!(t instanceof e.Query))throw e.error.argumentInvalid("addDatums","Argument is of invalid type.");
t.each(n,this)}if(d){var _=this._dimensionsList;for(s=0,r=_.length;r>s;)b.call(_[s++])
}if(m){var y=this._linkChildren;if(y)for(s=0,r=y.length;r>s;)E.call(y[s++],l)}}function q(e,t,i){var n=this._dimensionsList;
if(n||(t=!1),t||i){var s,r,a,o=e.atoms,l=0;if(n)for(s=n.length;s>l;)a=n[l++],r=o[a.name],r&&(t&&v.call(a,r),i&&(r.visited=!0));
else{var u=this.type.dimensionsNames();for(s=u.length;s>l;)r=o[u[l++]],r&&(r.visited=!0)
}}}function E(t){t||e.fail.argumentRequired("newDatums");var i=this._groupOper;if(i)t=i.executeAdd(this,t);
else{var n=this._wherePred;n&&(t=t.filter(n)),F.call(this,t)}var s=this._linkChildren,r=s&&s.length;
if(r)for(var a=0;r>a;a++)E.call(s[a],t)}function F(e){var t=this,i=t._datums,n=t._visibleNotNullDatums,s=t._selectedNotNullDatums,r=t._datumsById;
t._sumAbsCache=null;for(var a=0,o=e.length;o>a;a++){var l=e[a],u=l.id;r[u]=l,q.call(t,l,!0,!1),l.isNull||(s&&l.isSelected&&s.set(u,l),l.isVisible&&n.set(u,l)),i.push(l)
}}function K(t){function i(t){if(null!=t){"object"==typeof t||e.fail.invalidArgument("datumFilter");
var i={},s=!1;for(var r in t){var a=this.dimensions(r).getDistinctAtoms(e.array.as(t[r]));
a.length&&(s=!0,i[r]=a)}s&&n.push(i)}}var n=[];return t=e.array.as(t),t&&t.forEach(i,this),n
}function j(t,i){var n=e.get(i,"visible"),s=e.get(i,"isNull"),r=e.get(i,"selected"),a=e.get(i,"where");
return null!=n&&(t=t.where(n?h:d)),null!=s&&(t=t.where(s?m:f)),null!=r&&(t=t.where(r?u:c)),a&&(t=t.where(a)),t
}function z(t,i){var n=e.get(i,"visible"),s=e.get(i,"isNull"),r=e.get(i,"selected"),a=e.get(i,"where"),o=[];
null!=n&&o.unshift(n?h:d),null!=s&&o.unshift(s?m:f),null!=r&&o.unshift(r?u:c),a&&o.unshift(a),t&&o.unshift(Q(t));
var l=o.length;if(l){if(1===l)return o[0];var p=function(e){for(var t=l;t;)if(!o[--t](e))return!1;
return!0};return p}}function Q(e){function t(t){for(var s=t.atoms,r=0;n>r;r++)if(i(s,e[r]))return!0;
return!1}function i(e,t){for(var i in t)if(t[i].indexOf(e[i])<0)return!1;return!0
}var n=e.length;return t}function U(t,i){var n=e.array.as(e.get(i,"orderBy")),s=e.create(i||{},{orderBy:null}),r=e.query(t).selectMany(function(e,t){return n&&(s.orderBy=n[t]),H.call(this,e,s)
},this);return r.distinct(e.propGet("id"))}function H(t,i){var n=i.orderBy;if(n){if(n.indexOf("|")>=0)throw e.error.argumentInvalid("keyArgs.orderBy","Multi-dimension order by is not supported.")
}else n=Object.keys(t).sort().join(",");var s=this.groupBy(n,i),r=s.treeHeight,a=[];
return e.query(function(){var i;if(this._data){if(this._datumsQuery){if(this._data||e.assert("Must have a current data"),a.length||e.assert("Must have a parent data"),!this._dimAtomsOrQuery||e.assert(),this._datumsQuery.next())return this.item=this._datumsQuery.item,1;
this._datumsQuery=null,i=a.pop(),this._data=i.data,this._dimAtomsOrQuery=i.dimAtomsOrQuery
}}else this._data=s,this._dimAtomsOrQuery=e.query(t[s._groupLevelSpec.dimensions[0].name]);
this._dimAtomsOrQuery||e.assert("Invalid programmer"),this._data||e.assert("Must have a current data");
for(var n=a.length;;){for(;this._dimAtomsOrQuery.next();){var o=this._dimAtomsOrQuery.item,l=this._data.child(o.key);
if(l&&(r-1>n||l._datums.length)){if(a.push({data:this._data,dimAtomsOrQuery:this._dimAtomsOrQuery}),this._data=l,!(r-1>n))return this._dimAtomsOrQuery=null,this._datumsQuery=e.query(l._datums),this._datumsQuery.next(),this.item=this._datumsQuery.item,1;
this._dimAtomsOrQuery=e.query(t[l._groupLevelSpec.dimensions[0].name]),n++}}if(!n)return 0;
i=a.pop(),this._data=i.data,this._dimAtomsOrQuery=i.dimAtomsOrQuery,n--}return 0})
}function $(t,i){return e.string.is(t)||e.fail.argumentInvalid("groupLevelText","Invalid grouping specification."),e.query(t.split(/\s*\|\s*/)).where(e.truthy).select(function(t){var n=kt.exec(t)||e.fail.argumentInvalid("groupLevelText","Invalid grouping level syntax '{0}'.",[t]),s=n[1],r=(n[2]||"").toLowerCase(),a="desc"===r;
return new xt.GroupingDimensionSpec(s,a,i)})}function Y(t,i){function n(){var n={},r=e.query(s.source).select(function(e){i(e,n);
var t=n.series;return null!=t&&null!=t.v&&(t=t.v),t||null}).distinct().array();return s._createPlot2SeriesKeySet(t,r)
}var s=this;this._dataPartGet(n)}function J(t){return e.string.is(t)?!!this.mask(t):e.is(t,Gt)?!!this.mask(t.mask()).style(t.style()):void 0
}function Z(e){e||(e="");var t="_"+e,i=Mt[t];return i||(Pt===Gt.cacheLimit&&(Mt={},Pt=0),Mt[t]=i=W(e),Pt++),i
}function W(e){function t(e,t){return null==e?a?a(t):"":(e=+e,isNaN(e)||!isFinite(e)?"":n?0===e?r?r(t):n(t,e,null,!1):e>0?n(t,e,r,!1):s?s(t,-e,r||n):n(t,-e,r,!0):String(e))
}function i(){var t,i,o,l=X(e);if(l.forEach(et),t=l.length,n=a=s=r=null,t&&(n=rt(o=l[0]),t>1&&(i=l[1],s=rt(i.empty?o:i),t>2&&(i=l[2],r=nt(i.empty?o:i),t>3&&(i=l[3],a=st(i.empty?o:i),t>4)))))throw new Error("Invalid mask. More than 4 sections.")
}var n,s,r,a;return i(),t}function X(e){var t=[];if(e){var i,n,s,r,a=-1,o=e.length,l="",u=1,c=1,h=0,d=0,m=function(e){u=0,s.list.push(e)
},f=function(e){u=0,l+=e},p=function(){l&&(y(),m({type:0,text:l}),l="")},v=function(e){p(),m(e)
},g=function(){p(),!h&&d&&m({type:2}),s.digits=r,r=0,c=0,s=n.fractional},_=function(){!n||u&&t.length||(c?g():p(),s.digits=r,t.push(n)),u=c=1,d=r=h=0,n={empty:0,scale:0,groupOn:0,scientific:0,abbreviationOn:0,integer:{list:[],digits:0},fractional:{list:[],digits:0}},s=n.integer
},y=function(){"A"===l?(l="",v({type:6})):"C"===l?(l="",v({type:4})):"AC"===l?(l="",v({type:6}),v({type:4})):"CA"===l&&(l="",v({type:4}),v({type:6}))
},b=function(){var t,s=a+1,r=!1,l=0;if(o>s){if(t=e.charAt(s),"-"===t||"+"===t){if(r="+"===t,!(++s<o))return 0;
t=e.charAt(s)}for(;"0"===t&&++l&&++s<o&&(t=e.charAt(s)););if(l)return a=s-1,v({type:5,text:i,digits:l,positive:r}),n.scientific=1,1
}return 0};for(_();++a<o;)if(i=e.charAt(a),"0"===i)v({type:1}),h=1,r++;else if("#"===i)v({type:2}),h=1,r++;
else if(","===i)c&&v({type:3});else if("."===i)c&&(d=1,g());else if("¤"===i)v({type:4});
else if("C"===i&&"Currency"===e.substring(a,a+8))v({type:4}),a+=7;else if("A"===i&&"Abbreviation"===e.substring(a,a+12))v({type:6}),a+=11;
else if(";"===i)_(),(a+1>=o||";"===e.charAt(a+1))&&(a++,t.push({empty:1}));else if("\\"===i)a++,o>a&&f(e.charAt(a));
else if('"'===i){a++;var w=e.indexOf(i,a);0>w&&(w=o),f(e.substring(a,w)),a=w}else" "===i?v({type:7}):("e"!==i&&"E"!==i||!b())&&("%"===i?n.scale+=2:"‰"===i?n.scale+=3:"‱"===i&&(n.scale+=4),f(i));
_()}return t}function et(e){e.empty||(tt(e,!0),tt(e,!1))}function tt(e,t){function i(e){l[r](e)
}for(var n,s,r=t?"push":"unshift",a=e[t?"integer":"fractional"],o=a.list,l=a.list=[],u=a.digits-1,c=0,h=0,d=o.length,m=t?0:d,f=t?function(){return d>m?o[m++]:null
}:function(){return m>0?o[--m]:null};n=f();)switch(s=n.type){case 0:i(lt(n.text));
break;case 1:case 2:h&&2===s&&(s=1),i(ut(t,u,1===s,!c)),u--,c=1,h||1!==s||(h=1);break;
case 3:it(o,m,d)?c&&(e.groupOn=1):e.scale-=3;break;case 4:i(ft);break;case 5:i(ht(e,n));
break;case 6:e.abbreviationOn=1,i(pt);break;case 7:i(lt(" "))}!t&&a.digits&&l.unshift(ct(h))
}function it(e,t,i){for(;i>t;){var n=e[t++].type;if(1===n||2===n)return 1}return 0
}function nt(e){function t(t){return at(e,t,0,!1)}return t}function st(e){function t(t){return at(e,t,"",!1)
}return t}function rt(t){function i(i,n,s,r){var a,o,l=n,u=0,c=t.scale;if(t.abbreviationOn)for(var h=i.abbreviations.length,d=h;d>0;d--){var m=3*d;
if(Math.pow(10,m)<=n){c-=m,o=d-1;break}}return t.scientific&&(a=Math.floor(Math.log(n)/Math.LN10),u=c+a-t.integer.digits+1,c-=u),c&&(n=e.mult10(n,c)),n=e.round10(n,t.fractional.digits),!n&&s?s(i,l):at(t,i,n,r,u,o)
}return i}function at(e,t,i,n,s,r){var a=""+i,o=a.indexOf("."),l=0>o?a:a.substr(0,o),u=0>o?"":a.substr(o+1);
"0"===l&&(l=""),s||(s=0);var c=[];return n&&c.push(t.negativeSign),l=l.split(""),u=u.split(""),t.group&&e.groupOn&&ot(t,l),e.integer.list.forEach(function(e){c.push(e(t,l,s,r))
}),e.fractional.list.forEach(function(e){c.push(e(t,u,s,r))}),c.join("")}function ot(e,t){for(var i,n=e.group,s=function(){t[r-l-1]+=n
},r=t.length,a=e.groupSizes,o=a.length,l=0,u=-1;++u<o;){if(l+=i=a[u],!(r>l))return;
s()}for(;(l+=i)<r;)s()}function lt(e){function t(){return e}return t}function ut(e,t,i,n){function s(t){return t[e?"integerPad":"fractionPad"]
}function r(e,i){var s=i.length;if(s>t){var r=s-1-t;return n?i.slice(0,r+1).join(""):i[r]
}return o?o(e):""}function a(e,i){return t<i.length?i[t]:o?o(e):""}var o=i?s:null;
return e?r:a}function ct(e){return e?dt:mt}function ht(e,t){function i(e,i,n){var s=0>n?e.negativeSign:t.positive?"+":"",r=""+Math.abs(n),a=t.digits-r.length;
return a>0&&(r=new Array(a+1).join("0")+r),t.text+s+r}return i}function dt(e){return e.decimal
}function mt(e,t){return t.length?e.decimal:""}function ft(e){return e.currency}function pt(e,t,i,n){return null!=n?e.abbreviations[n]:void 0
}function vt(t){return e.string.is(t)?!!this.mask(t):e.is(t,Vt)?!!this.mask(t.mask()):void 0
}function gt(i){return i?t.Format.createFormatter(t.Format.date(i)):e.string.to}function _t(t){return e.is(t,Bt)?!!this.formatter(t.formatter()):e.fun.is(t)?!!this.formatter(t):void 0
}function yt(e){return null!=e?String(e):""}function bt(t){function i(i){return e.is(i,t)||e.is(i,Bt)?i:null
}function n(i,n){var s=e.fun.is(i)?Bt:t;return s(i,n)}return{cast:i,factory:n}}function wt(t){switch(e.classOf(t)){case Et:return!!this.number(t.number()).percent(t.percent()).date(t.date()).any(t.any());
case Gt:return!!this.number(t);case Vt:return!!this.date(t);case Bt:return!!this.any(t)
}if(e.string.is(t)){var i=jt(t);if(i)return!!e.configure(this,i)}}function Dt(t,i){t=Ct(t);
var n=e.getOwn(Ft,t);return n?e.configure(n,i):(n=Ft[t]=Et(i),n.languageCode=t),n
}function Nt(e){var t=/^([a-z]{2,8})(?:[-_]([a-z]{2}|\d{3}))?$/i,i=t.exec(e);if(!i)return null;
var n=i[1]?i[1].toLowerCase():"",s=i[2]?i[2].toLowerCase():"";return{code:n+(s?"-"+s:""),primary:n,region:s}
}function Ct(e){return e?e.toLowerCase():""}function St(t,i){t=Ct(t);var n=e.getOwn(Ft,t);
if(n)return n;if(!i)return null;var s=Nt(t);if(s){if(s.code!==t&&(n=e.getOwn(Ft,s.code)))return n;
if(s.region&&(n=e.getOwn(Ft,s.primary)))return n}return e.getOwn(Ft,qt,null)}var xt=e.globalSpace("cdo",{});
e.type("cdo.DimensionType").init(function(i,n,s){this.complexType=i,this.name=n,this.label=e.get(s,"label")||e.titleFromName(n);
var r=e.splitIndexedId(n);this.group=r[0],this.groupLevel=e.nullyTo(r[1],0),this.label.indexOf("{")>=0&&(this.label=e.format(this.label,[this.groupLevel+1])),this.isHidden=!!e.get(s,"isHidden");
var a=e.get(s,"valueType")||null,o=xt.DimensionType.valueTypeName(a),l=e.getOwn(xt.DimensionType.cast,o,null);
this.valueType=a,this.valueTypeName=o,this.cast=l;var u=this.valueType===Number,c=!u&&this.valueType===Date;
if(this.isDiscreteValueType=!u&&!c,this.isDiscrete=e.get(s,"isDiscrete"),null==this.isDiscrete)this.isDiscrete=this.isDiscreteValueType;
else if(this.isDiscrete=!!this.isDiscrete,!this.isDiscrete&&this.isDiscreteValueType)throw e.error.argumentInvalid("isDiscrete","The only supported continuous value types are Number and Date.");
if(this._converter=e.get(s,"converter")||null,!this._converter){var h=e.get(s,"rawFormat");
if(h)switch(this.valueType){case Date:this._converter=t.Format.createParser(t.Format.date(h))
}}if(this._key=e.get(s,"key")||null,this._comparer=e.get(s,"comparer"),void 0===this._comparer)switch(this.valueType){case Number:case Date:this._comparer=e.compare;
break;default:this._comparer=null}this.isComparable=null!=this._comparer;var d,m=e.get(s,"formatter"),f=e.get(s,"formatProto"),p=u?"number":c?"date":"any";
m?d=xt.format(e.set({},p,m),f):this.isDiscreteValueType?d=Et(null,f):(d=e.get(s,"format"),d||u||(d=e.get(s,"rawFormat"),d&&(d=d.replace(/-/g,"/"))),d?e.is(d,Et)||((e.string.is(d)||e.fun.is(d)&&!e.classOf(d))&&(d=e.set({},p,d)),d=Et(d,f)):d=Et(null,f),m=d[p]()),this._formatter=m||null,this._format=d||null
}).add({isCalculated:!1,compare:function(e,t){return null==e?null==t?0:-1:null==t?1:this._comparer.call(null,e,t)
},comparer:function(e){var t=this;return t.isComparable?e?t._rc||(t._rc=function(e,i){return t.compare(i,e)
}):t._dc||(t._dc=function(e,i){return t.compare(e,i)}):null},atomComparer:function(e){return e?this._rac||(this._rac=this._createReverseAtomComparer()):this._dac||(this._dac=this._createDirectAtomComparer())
},_toDiscrete:function(){this.isDiscrete=!0},_toCalculated:function(){this.isCalculated=!0
},_createReverseAtomComparer:function(){function e(e,i){return e===i?0:t.compare(i.value,e.value)
}if(!this.isComparable)return a;var t=this;return e},_createDirectAtomComparer:function(){function e(e,i){return e===i?0:t.compare(e.value,i.value)
}if(!this.isComparable)return r;var t=this;return e},format:function(){return this._format
},formatter:function(){return this._formatter},converter:function(){return this._converter
}}),xt.DimensionType.cast={Date:function(e){return e instanceof Date?e:new Date(e)
},Number:function(e){return e=Number(e),isNaN(e)?null:e},String:String,Boolean:Boolean,Object:Object,Any:null},xt.DimensionType.dimensionGroupName=function(e){return e.replace(/^(.*?)(\d*)$/,"$1")
},xt.DimensionType.valueTypeName=function(t){if(null==t)return"Any";switch(t){case Boolean:return"Boolean";
case Number:return"Number";case String:return"String";case Object:return"Object";
case Date:return"Date";default:throw e.error.argumentInvalid("valueType","Invalid valueType function: '{0}'.",[t])
}},xt.DimensionType.extendSpec=function(t,i,n){var s=xt.DimensionType.dimensionGroupName(t),r=e.get(n,"dimensionGroups");
if(r){var a=r[s];a&&(i=e.create(a,i))}switch(i||(i={}),s){case"category":var o=e.get(n,"isCategoryTimeSeries",!1);
o&&void 0===i.valueType&&(i.valueType=Date);break;case"value":void 0===i.valueType&&(i.valueType=Number)
}return void 0!==i.converter||i.valueType!==Date||i.rawFormat||(i.rawFormat=e.get(n,"timeSeriesFormat")),i.formatProto=e.get(n,"formatProto"),i
},e.type("cdo.ComplexType").init(function(e){if(this._dims={},this._dimsList=[],this._dimsNames=[],this._calculations=[],this._calculatedDimNames={},this._dimsIndexByName=null,this._dimsByGroup={},this._dimsNamesByGroup={},e)for(var t in e)this.addDimension(t,e[t])
}).add({describe:function(){var t=e.textTable(2).rowSep().row("Dimension","Properties").rowSep();
return this._dimsList.forEach(function(e){var i=[];i.push('"'+e.label+'"'),i.push(e.valueTypeName),e.isComparable&&i.push("comparable"),e.isDiscrete||i.push("continuous"),e.isHidden&&i.push("hidden"),t.row(e.name,i.join(", "))
}),t.rowSep(!0),"COMPLEX TYPE INFORMATION\n"+t()+"\n"},dimensions:function(t,i){if(null==t)return this._dims;
var n=e.getOwn(this._dims,t,null);if(!n&&e.get(i,"assertExists",!0))throw e.error.argumentInvalid("name","Undefined dimension '{0}'",[t]);
return n},dimensionsList:function(){return this._dimsList},calculatedDimensionsList:function(){return this._calcDimsList
},dimensionsNames:function(){return this._dimsNames},groupDimensions:function(t,i){var n=e.getOwn(this._dimsByGroup,t);
if(!n&&e.get(i,"assertExists",!0))throw e.error.operationInvalid("There is no dimension type group with name '{0}'.",[t]);
return n},groupDimensionsNames:function(t,i){var n=e.getOwn(this._dimsNamesByGroup,t);
if(!n&&e.get(i,"assertExists",!0))throw e.error.operationInvalid("There is no dimension type group with name '{0}'.",[t]);
return n},addDimension:function(t,i){t||e.fail.argumentRequired("name"),!e.hasOwn(this._dims,t)||e.fail.operationInvalid("A dimension type with name '{0}' is already defined.",[t]);
var n=new xt.DimensionType(this,t,i);this._dims[t]=n,this._dimsIndexByName=null;var s,r=n.group;
if(r){var a,o=e.getOwn(this._dimsByGroup,r);o?a=this._dimsNamesByGroup[r]:(o=this._dimsByGroup[r]=[],a=this._dimsNamesByGroup[r]=[]),s=e.array.insert(a,t,e.compare),s=~s,e.array.insertAt(o,s,n)
}var l,u=this._dimsList.length;if(r){s=n.groupLevel;for(var c=0;u>c;c++){var h=this._dimsList[c];
if(h.group===r){if(h.groupLevel>s){l=c;break}l=c+1}}null==l&&(l=u)}else l=u;return e.array.insertAt(this._dimsList,l,n),e.array.insertAt(this._dimsNames,l,t),n._calculate&&(l=e.array.binarySearch(this._calcDimsList,n._calculationOrder,e.compare,function(e){return e._calculationOrder
}),l>=0?l++:l=~l,e.array.insertAt(this._calcDimsList,l,n)),n},addCalculation:function(t,i){t||e.fail.argumentRequired("calcSpec");
var n=t.calculation||e.fail.argumentRequired("calculations[i].calculation"),s=t.names;
if(s=e.string.is(s)?s.split(/\s*\,\s*/):e.array.as(s),s&&s.length){var r=this._calculatedDimNames;
s.forEach(function(t){if(t){t=t.replace(/^\s*(.+?)\s*$/,"$1"),!e.hasOwn(r,t)||e.fail.argumentInvalid("calculations[i].names","Dimension name '{0}' is already being calculated.",[t]);
var n=this._dims[t];if(!n){var s=xt.DimensionType.extendSpec(t,null,i);this.addDimension(t,s)
}r[t]=!0,n._toCalculated()}},this)}this._calculations.push(n)},isCalculated:function(t){return e.hasOwn(this._calculatedDimNames,t)
},_calculate:function(e){var t=this._calculations,i=t.length;if(i){for(var n={},s=0;i>s;s++){var r=t[s];
r(e,n)}return n}},sortDimensionNames:function(t,i){var n=this._dimsIndexByName;return n||(n=e.query(this._dimsList).object({name:function(e){return e.name
},value:function(e,t){return t}}),this._dimsIndexByName=n),t.sort(function(t,s){return e.compare(n[i?i(t):t],n[i?i(s):s])
}),t}}),e.type("cdo.ComplexTypeProject").init(function(e){this._dims={},this._dimList=[],this._dimGroupsDims={},this._dimGroupSpecs=e||{},this._calcList=[]
}).add({_ensureDim:function(t,i){t||e.fail.argumentInvalid("name","Invalid dimension name '{0}'.",[t]);
var n=e.getOwn(this._dims,t);if(n)i&&e.setUDefaults(n.spec,i);else{n=this._dims[t]=this._createDim(t,i),this._dimList.push(n);
var s=e.array.lazy(this._dimGroupsDims,n.groupName);e.array.insert(s,t,e.compare)
}return n},hasDim:function(t){return e.hasOwn(this._dims,t)},setDim:function(t,i){var n=this._ensureDim(t).spec;
return i&&e.copy(n,i),this},setDimDefaults:function(t,i){return e.setUDefaults(this._ensureDim(t).spec,i),this
},_createDim:function(t,i){var n=xt.DimensionType.dimensionGroupName(t),s=this._dimGroupSpecs[n];
return s&&(i=e.create(s,i)),{name:t,groupName:n,spec:i||{}}},readDim:function(t,i){var n=this._ensureDim(t,i);
if(n.isRead)throw e.error.operationInvalid("Dimension '{0}' already is the target of a reader.",[t]);
if(n.isCalc)throw e.error.operationInvalid("Dimension '{0}' is being calculated, so it cannot be the target of a reader.",[t]);
n.isRead=!0},calcDim:function(t,i){var n=this._ensureDim(t,i);if(n.isCalc)throw e.error.operationInvalid("Dimension '{0}' already is being calculated.",[t]);
if(n.isRead)throw e.error.operationInvalid("Dimension '{0}' is the target of a reader, so it cannot be calculated.",[t]);
n.isCalc=!0},isReadOrCalc:function(t){if(t){var i=e.getOwn(this._dims,t);if(i)return i.isRead||i.isCalc
}return!1},groupDimensionsNames:function(e){return this._dimGroupsDims[e]},setCalc:function(t){t||e.fail.argumentRequired("calculations[i]"),t.calculation||e.fail.argumentRequired("calculations[i].calculation");
var i=t.names;i=e.string.is(i)?i.split(/\s*\,\s*/):e.array.as(i),i&&i.length&&i.forEach(this.calcDim,this),this._calcList.push(t)
},configureComplexType:function(e,t){this._dimList.forEach(function(i){var n=i.name,s=i.spec;
s=xt.DimensionType.extendSpec(n,s,t),e.addDimension(n,s)}),this._calcList.forEach(function(i){e.addCalculation(i,t)
})}}),e.type("cdo.Atom").init(function(t,i,n,s,r){this.dimension=t,this.id=null==i?-e.nextId():e.nextId(),this.value=i,this.label=n,void 0!==s&&(this.rawValue=s),this.key=r
}).add({isVirtual:!1,rawValue:void 0,toString:function(){var e=this.label;return null!=e?e:(e=this.value,null!=e?""+e:"")
}});var It=1;e.type("cdo.Complex").init(function(t,i,n,s,r,a){var o=this;o.id=It++;
var l;t&&(l=t.owner,s||(s=t.atoms)),o.owner=l=l||o;var u=l.type||e.fail.argumentRequired("owner.type");
o.atoms=s?Object.create(s):{};var c=!!n;n||(n=u._dimsNames);var h,d,m=o.atoms,f=n.length;
if(i){var p=l._dimensions,v=function(e){var t=i[e],n=p[e].intern(t);null==t||s&&n===s[e]||(m[e]=n)
};if(c)for(h=f;h--;)v(n[h]);else for(d in i)v(d);if(a){i=u._calculate(o);for(d in i)e.hasOwnProp.call(m,d)||v(d)
}}var g;if(f)if(1===f)g=m[n[0]],o.value=g.value,o.rawValue=g.rawValue,o.key=g.key,r&&(o.label=g.label);
else{var _,y,b,w=l.keySep,D=l.labelSep;for(h=0;f>h;h++)g=m[n[h]],h?_+=w+g.key:_=g.key,r&&(b=g.label)&&(y?y+=D+b:y=b);
o.value=o.rawValue=o.key=_,r&&(o.label=y)}else o.value=null,o.key="",r&&(o.label="")
}).add({labelSep:" ~ ",keySep:"~",value:null,label:null,rawValue:void 0,ensureLabel:function(){var t=this.label;
if(null==t){t="";var i=this.owner.labelSep;e.eachOwn(this.atoms,function(e){var n=e.label;
n&&(t?t+=i+n:t=n)}),this.label=t}return t},view:function(e){return new xt.ComplexView(this,e)
},toString:function(){var t=[""+e.qualNameOf(this.constructor)];return null!=this.index&&t.push("#"+this.index),this.owner.type.dimensionsNames().forEach(function(i){t.push(i+": "+e.describe(this.atoms[i].value))
},this),t.join(" ")},rightTrimKeySep:function(e){return e&&xt.Complex.rightTrimKeySep(e,this.owner.keySep)
},absKeyTrimmed:function(){return this.rightTrimKeySep(this.absKey)},keyTrimmed:function(){return this.rightTrimKeySep(this.key)
}}),xt.Complex.rightTrimKeySep=function(e,t){if(e&&t)for(var i,n=t.length;e.lastIndexOf(t)===(i=e.length-n)&&i>=0;)e=e.substr(0,i);
return e},xt.Complex.values=function(e,t){var i=e.atoms;return t.map(function(e){return i[e].value
})},xt.Complex.compositeKey=function(e,t){var i=e.atoms;return t.map(function(e){return i[e].key
}).join(e.owner.keySep)},xt.Complex.labels=function(e,t){var i=e.atoms;return t.map(function(e){return i[e].label
})};var Rt=e.propGet("id");e.type("cdo.ComplexView",xt.Complex).init(function(e,t){this.source=e,this.viewDimNames=t,this.base(e,e.atoms,t,e.owner.atoms,!0)
}).add({values:function(){return xt.Complex.values(this,this.viewDimNames)},labels:function(){return xt.Complex.labels(this,this.viewDimNames)
}}),e.type("cdo.Datum",xt.Complex).init(function(e,t){this.base(e,t,null,null,!1,!0)
}).add({isSelected:!1,isVisible:!0,isNull:!1,isVirtual:!1,isTrend:!1,trend:null,isInterpolated:!1,interpolation:null,setSelected:function(e){if(this.isNull)return!1;
e=null==e||!!e;var t=this.isSelected!==e;return t&&(e?this.isSelected=!0:delete this.isSelected,G.call(this.owner,this,e)),t
},toggleSelected:function(){return this.setSelected(!this.isSelected)},setVisible:function(e){if(this.isNull)return!1;
e=null==e||!!e;var t=this.isVisible!==e;return t&&(this.isVisible=e,M.call(this.owner,this,e)),t
},toggleVisible:function(){return this.setVisible(!this.isVisible)}});var Lt=xt.Datum.isSelected=e.propGet("isSelected");
xt.Datum.isSelectedT=u,xt.Datum.isSelectedF=c,xt.Datum.isVisibleT=h,xt.Datum.isVisibleF=d,xt.Datum.isNullT=m,xt.Datum.isNullF=f,e.type("cdo.TrendDatum",xt.Datum).init(function(e,t,i){this.base(e,t),this.trend=i
}).add({isVirtual:!0,isTrend:!0}),e.type("cdo.InterpolationDatum",xt.Datum).init(function(e,t,i,n){this.base(e,t),this.interpolation=i,this.interpDimName=n
}).add({isVirtual:!0,isInterpolated:!0}),e.type("cdo.Dimension").init(function(t,i){this.data=t,this.type=i,this.root=this,this.owner=this;
var n=i.name;if(this.name=n,this._atomComparer=i.atomComparer(),this._atomsByKey={},t.isOwner())this._atoms=[],y.call(this);
else{var s,r=t.parent;r?(s=r._dimensions[n],N.call(s,this),this.root=t.parent.root):(r=t.linkParent,r||e.assert("Data must have a linkParent"),s=r._dimensions[n],C.call(s,this)),this._nullAtom=this.owner._nullAtom,this._lazyInit=function(){this._lazyInit=null;
for(var t=this.data._datums,i=t.length,r=this._atomsByKey,a=0;i>a;a++){var o=t[a].atoms[n];
r[o.key]=o}this._atoms=s.atoms().filter(function(t){return e.hasOwnProp.call(r,t.key)
})}}}).add({parent:null,linkParent:null,_linkChildren:null,_atomsByKey:null,_atomVisibleDatumsCount:null,_disposed:!1,_nullAtom:null,_virtualNullAtom:null,_visibleAtoms:null,_visibleIndexes:null,_atomComparer:null,_atoms:null,_sumCache:null,count:function(){return this._lazyInit&&this._lazyInit(),this._atoms.length
},isVisible:function(t){return this._lazyInit&&this._lazyInit(),e.hasOwn(this._atomsByKey,t.key)||e.assert("Atom must exist in this dimension."),x.call(this)[t.key]>0
},atoms:function(t){this._lazyInit&&this._lazyInit();var i=e.get(t,"visible");return null==i?this._atoms:(i=!!i,this._visibleAtoms||(this._visibleAtoms={}),this._visibleAtoms[i]||(this._visibleAtoms[i]=R.call(this,i)))
},indexes:function(i){this._lazyInit&&this._lazyInit();var n=e.get(i,"visible");return null==n?t.range(0,this._atoms.length):(n=!!n,this._visibleIndexes||(this._visibleIndexes={}),this._visibleIndexes[n]||(this._visibleIndexes[n]=I.call(this,n)))
},atom:function(e){if(null==e||""===e)return this._nullAtom;if(e instanceof xt.Atom)return e;
this._lazyInit&&this._lazyInit();var t=this.type._key,i=t?t.call(null,e):e;return this._atomsByKey[i]||null
},getDistinctAtoms:function(e){var t,i,n,s=[],r=e?e.length:0;if(r){n={};for(var a=0;r>a;a++)(t=this.atom(e[a]))&&!n[i="\x00"+t.key]&&(n[i]=t,s.push(t))
}return s},extent:function(t){var i,n=this.atoms(t),s=n.length;if(!s)return void 0;
var r=this._nullAtom&&null==n[0].value?1:0,a=s-r;if(a>0){var o=n[r],l=n[s-1];if(o!==l&&e.get(t,"abs",!1)){var u=o.value<0?-1:1,c=l.value<0?-1:1;
if(u===c)0>c&&(i=l,l=o,o=i);else if(a>2){l.value<-o.value&&(l=o);var h=e.array.binarySearch(n,0,this.type.comparer(),function(e){return e.value
});if(0>h){h=~h;var d=n[h-1],m=n[h];o=-d.value<m.value?d:m}else o=n[h]}else l.value<-o.value&&(i=l,l=o,o=i)
}return{min:o,max:l}}return void 0},min:function(e){var t=this.atoms(e),i=t.length;
if(!i)return void 0;var n=this._nullAtom&&null==t[0].value?1:0;return i>n?t[n]:void 0
},max:function(e){var t=this.atoms(e),i=t.length;return i&&null!=t[i-1].value?t[i-1]:void 0
},sumAbs:function(t){return this.sum(e.create(t,{abs:!0}))},value:function(t){return this.sum(t&&t.abs?e.create(t,{abs:!1}):t)
},valueAbs:function(e){var t=this.value(e);return t?Math.abs(t):t},sum:function(t){var i=!!e.get(t,"abs",!1),n=e.get(t,"zeroIfNone",!0),s=g(t)+":"+i,r=e.getOwn(this._sumCache,s);
if(void 0===r){var a=this.name;r=this.data.datums(null,t).reduce(function(e,t){var n=t.atoms[a].value;
return i&&0>n&&(n=-n),null!=e?e+n:n},null),(this._sumCache||(this._sumCache={}))[s]=r
}return n?r||0:r},percent:function(e,t){var i=e instanceof xt.Atom?e.value:e;if(!i)return 0;
var n=this.sumAbs(t);return n?Math.abs(i)/n:0},valuePercent:function(e){var t=this.valueAbs(e);
if(!t)return 0;var i=this.data.parent;if(!i)return 1;var n=i.dimensionsSumAbs(this.name,e);
return t/n},percentOverParent:function(e){return this.valuePercent(e)},format:function(t,i){return e.string.to(this.type._formatter?this.type._formatter.call(null,t,i):t)
},intern:function(t,i){if(null==t||""===t)return this._nullAtom||_.call(this,t);if(t instanceof xt.Atom){if(t.dimension!==this)throw e.error.operationInvalid("Atom is of a different dimension.");
return t}var n,s,r=this.type;if("object"==typeof t&&"v"in t&&(s=t.f,t=t.v,null==t||""===t))return this._nullAtom||_.call(this);
if(i)n=t;else{var a=r._converter;if(a){if(n=a(t),null==n||""===n)return this._nullAtom||_.call(this,t);
s=void 0}else n=t}var o=r.cast;if(o&&(n=o(n),null==n||""===n))return this._nullAtom||_.call(this);
var l=r._key,u=""+(l?l(n):n);u||e.fail.operationInvalid("Only a null value can have an empty key.");
var c=this._atomsByKey[u];return c?(!i&&c.isVirtual&&delete c.isVirtual,c):p.call(this,r,t,u,n,s,i)
},read:function(t,i){if(null==t||""===t)return null;var n,s=this.type,r=null!=i;if("object"==typeof t&&"v"in t&&(i=t.f,t=t.v,null==t||""===t))return null;
var a=s._converter;if(n=a?a(t):t,null==n||""===n)return null;!r&&a&&(i=null);var o=s.cast;
if(o&&(n=o(n),null==n||""===n))return null;var l=s._key,u=""+(l?l(n):n),c=this._atomsByKey[u];
if(c)return{rawValue:t,key:u,value:c.value,label:""+(null==i?c.label:i)};if(null==i){var h=s._formatter;
i=h?h(n,t):n}return i=e.string.to(i),{rawValue:t,key:u,value:n,label:i}},dispose:function(){var e,t=this;
t._disposed||(i(t.childNodes,"parent"),i(t._linkChildren,"linkParent"),(e=t.parent)&&s(e,"childNodes",t,"parent"),(e=t.linkParent)&&s(e,"_linkChildren",t,"linkParent"),D.call(t),t._lazyInit=t._atoms=t._nullAtom=t._virtualNullAtom=null,t._disposed=!0)
}}),e.type("cdo.Data",xt.Complex).init(function(i){i||e.fail.argumentRequired("keyArgs"),this._visibleNotNullDatums=new e.Map;
var n,s,r,a,o,l,u=this.parent=i.parent||null;if(u)this.root=u.root,this.depth=u.depth+1,this.type=u.type,o=i.datums||e.fail.argumentRequired("datums"),n=u.owner,s=i.atoms||e.fail.argumentRequired("atoms"),a=i.atomsDimNames||e.fail.argumentRequired("atomsDimNames"),r=u.atoms;
else{this.root=this,a=[];var c=i.linkParent||null;c?(n=c.owner,this.type=n.type,o=i.datums||e.fail.argumentRequired("datums"),this._leafs=[],this._wherePred=i.where||null,r=c.atoms,l=e.get(i,"index",null),k.call(c,this,l)):(n=this,r={},i.labelSep&&(this.labelSep=i.labelSep),i.keySep&&(this.keySep=i.keySep),this.type=i.type||e.fail.argumentRequired("type"),this._selectedNotNullDatums=new e.Map)
}o&&B.call(this,o),this.owner=n,this._atomsBase=r,this._dimensions={},this._dimensionsList=[],this.type.dimensionsList().forEach(this._initDimension,this),this.base(n,s,a,r,!0),t.Dom.Node.call(this),u?(l=e.get(i,"index",null),L.call(u,this,l),this.absLabel=u.absLabel?e.string.join(n.labelSep,u.absLabel,this.label):this.label,this.absKey=u.absKey?e.string.join(n.keySep,u.absKey,this.key):this.key):(this.absLabel=this.label,this.absKey=this.key)
}).add(t.Dom.Node).add({parent:null,linkParent:null,_dimensions:null,_dimensionsList:null,_freeDimensionNames:null,_linkChildren:null,_leafs:null,_childrenByKey:null,_visibleNotNullDatums:null,_selectedNotNullDatums:null,_groupByCache:null,_sumAbsCache:null,treeHeight:null,_groupOper:null,_wherePred:null,_groupSpec:null,_groupLevel:null,_datums:null,_datumsById:null,_datumsByKey:null,depth:0,label:"",absLabel:"",_disposed:!1,_isFlattenGroup:!1,_isDegenerateFlattenGroup:!1,_initDimension:function(e){var t=new xt.Dimension(this,e);
this._dimensions[e.name]=t,this._dimensionsList.push(t)},dimensions:function(t,i){if(null==t)return this._dimensions;
var n=e.getOwn(this._dimensions,t);if(!n&&e.get(i,"assertExists",!0))throw e.error.argumentInvalid("name","Undefined dimension '{0}'.",[t]);
return n},dimensionsList:function(){return this._dimensionsList},freeDimensionsNames:function(){var e=this._freeDimensionNames;
return e||(this._freeDimensionNames=e=this.type.dimensionsNames().filter(function(e){var t=this.atoms[e];
return!(t instanceof xt.Atom)||null==t.value},this)),e},isOwner:function(){return this.owner===this
},children:function(){var t=this.childNodes;return t.length?e.query(t):e.query()},child:function(t){return e.getOwn(this._childrenByKey,t,null)
},childCount:function(){return this.childNodes.length},contains:function(t){var i=this._datumsById;
return!!i&&e.hasOwn(i,t.id)},leafs:function(){return e.query(this._leafs)},count:function(){return this._datums.length
},firstDatum:function(){return this._datums.length?this._datums[0]:null},firstAtoms:function(){return(this.firstDatum()||this).atoms
},singleDatum:function(){var e=this._datums;return 1===e.length?e[0]:null},dispose:function(){var e=this;
if(!e._disposed){A.call(e);var t;(t=e._selectedNotNullDatums)&&t.clear(),e._visibleNotNullDatums.clear(),t=e._dimensionsList;
for(var i=0,n=t.length;n>i;i++)t[i].dispose();e._dimensions=null,e._dimensionsList=null,(t=e.parent)&&(t.removeChild(e),e.parent=null),(t=e.linkParent)&&T.call(t,e),e._disposed=!0
}},disposeChildren:function(){A.call(this)}}),xt.Data.add({selectedCount:function(){return this.isOwner()?this._selectedNotNullDatums.count:this.datums(null,{selected:!0}).count()
},selectedDatums:function(){return this.isOwner()?this._selectedNotNullDatums.values():this.datums(null,{selected:!0}).array()
},selectedDatumMap:function(){if(this.isOwner())return this._selectedNotNullDatums.clone();
var t=this.datums(null,{selected:!0}).object({name:e.propGet("id")});return new e.Set(t)
},visibleCount:function(){return this._visibleNotNullDatums.count},replaceSelected:function(t){e.array.is(t)||(t=t.array());
var i=e.query(t).where(Lt).object({name:Rt}),n=this.owner.clearSelected(function(t){return!e.hasOwn(i,t.id)
});return n|=xt.Data.setSelected(t,!0)},clearSelected:function(e){if(this.owner!==this)return this.owner.clearSelected(e);
if(!this._selectedNotNullDatums.count)return!1;var t;return e?(t=!1,this._selectedNotNullDatums.values().filter(e).forEach(function(e){t=!0,o.call(e),this._selectedNotNullDatums.rem(e.id)
},this)):(t=!0,this._selectedNotNullDatums.values().forEach(function(e){o.call(e)
}),this._selectedNotNullDatums.clear()),t}}),xt.Data.setSelected=function(t,i){var n=0;
return t&&e.query(t).each(function(e){n|=e.setSelected(i)}),!!n},xt.Data.toggleSelected=function(t,i){e.array.isLike(t)||(t=e.query(t).array());
var n=e.query(t),s=i?n.any(Lt):n.all(l);return this.setSelected(t,!s)},xt.Data.setVisible=function(t,i){var n=0;
return t&&e.query(t).each(function(e){n|=e.setVisible(i)}),!!n},xt.Data.toggleVisible=function(t){e.array.isLike(t)||(t=e.query(t).array());
var i=e.query(t).all(e.propGet("isVisible"));return xt.Data.setVisible(t,!i)},xt.Data.add({load:function(t,i){O.call(this);
var n=e.get(i,"where"),s=e.get(i,"isNull"),r=e.query(t).select(function(e){var t=new xt.Datum(this,e);
return s&&s(t)&&(t.isNull=!0),n&&!n(t)?null:t},this);B.call(this,r,{isAdditive:!1,doAtomGC:!0})
},clearVirtuals:function(){var t=this._datums;if(t){this._sumAbsCache=null;for(var i,n=this._visibleNotNullDatums,s=this._selectedNotNullDatums,r=this._datumsByKey,a=this._datumsById,o=0,l=t.length;l>o;){var u=t[o];
if(u.isVirtual){var c=u.id,h=u.key;t.splice(o,1),delete a[c],delete r[h],s&&u.isSelected&&s.rem(c),u.isVisible&&n.rem(c),l--,i=!0
}else o++}if(i){if(!t.length&&this.parent)return void this.dispose();var d=this.childNodes;
if(d)for(o=0,l=d.length;l>o;){var m=d[o];m.clearVirtuals(),m.parent?o++:l--}this._linkChildren&&this._linkChildren.forEach(function(e){e.clearVirtuals()
})}}e.eachOwn(this._dimensions,function(e){w.call(e)})},add:function(e){O.call(this),B.call(this,e,{isAdditive:!0,doAtomGC:!0})
},groupBy:function(t,i){var n,s,r=new xt.GroupingOper(this,t,i),a=r.key;return a&&(n=this._groupByCache,s=n&&n[a]),s?e.debug>=7&&e.log("[GroupBy] Cache key hit '"+a+"'"):(e.debug>=7&&e.log("[GroupBy] "+(a?"Cache key not found: '"+a+"'":"No Cache key")),s=r.execute(),a&&((n||(this._groupByCache={}))[a]=s)),s
},where:function(t,i){var n;if(t)t=K.call(this,t,i),n=U.call(this,t,i);else{if(!i)return e.query(this._datums);
n=j(e.query(this._datums),i)}var s=z(t,i);return new xt.Data({linkParent:this,datums:n,where:s})
},datums:function(t,i){return t?(t=K.call(this,t,i),U.call(this,t,i)):i?j(e.query(this._datums),i):e.query(this._datums)
},datum:function(t,i){return t||e.fail.argumentRequired("whereSpec"),t=K.call(this,t,i),U.call(this,t,i).first()||null
},dimensionsSumAbs:function(t,i){var n=t+":"+g(i),s=e.getOwn(this._sumAbsCache,n);
return null==s&&(s=this.children().where(function(e){return!e._isFlattenGroup||e._isDegenerateFlattenGroup
}).select(function(e){return e.dimensions(t).valueAbs(i)||0},this).reduce(e.add,0),(this._sumAbsCache||(this._sumAbsCache={}))[n]=s),s
}}).type().add({lca:function(e){var t,i,n,s,r=e.length,a=null;if(r){if(1===r)return e[0];
var o=1;n=P(e[0]);do{if(i=e[o],s=P(i),!(a=V(n,s)))return null;t=i,n=s}while(++o<r)
}return a}}),xt.whereSpecPredicate=Q,xt.Data.add({getInfo:function(){var t=["DATA SUMMARY",e.logSeparator,"  Dimension",e.logSeparator];
return e.eachOwn(this.dimensions(),function(e,i){var n=e.count(),s=e.type,r=[];r.push(),r.push(s.valueTypeName),s.isComparable&&r.push("comparable"),s.isDiscrete||r.push("continuous"),s.isHidden&&r.push("hidden"),t.push("  "+i+' ("'+s.label+'", #'+n+")\n	"+e.atoms().slice(0,10).map(function(e){return e.label
}).join(", ")+(n>10?"...":""))}),t.join("\n")},getValues:function(){return t.range(0,this.getCategoriesSize()).map(function(e){return this._getValuesForCategoryIndex(e)
},this)},_getDimensionValues:function(e){return this.dimensions(e).atoms().map(function(e){return e.value
})},_getDimensionVisibleValues:function(e){return this.dimensions(e).atoms({visible:!0}).map(function(e){return e.value
})},getSeries:function(){return this._getDimensionValues("series")},getVisibleSeriesIndexes:function(){return this.dimensions("series").indexes({visible:!0})
},getVisibleCategoriesIndexes:function(){return this.dimensions("category").indexes({visible:!0})
},getVisibleSeries:function(){return this._getDimensionVisibleValues("series")},getCategories:function(){return this._getDimensionValues("category")
},getVisibleCategories:function(){return this._getDimensionVisibleValues("category")
},_getValuesForCategoryIndex:function(t){var i=this.dimensions("category").atoms()[t],n=this.datums({category:i}).uniqueIndex(function(e){return e.atoms.series.key
});return this.dimensions("series").atoms().map(function(t){var i=e.getOwn(n,t.key);
return i?i.atoms.value.value:null})},getSeriesSize:function(){var e=this.dimensions("series",{assertExists:!1});
return e?e.count():0},getCategoriesSize:function(){var e=this.dimensions("category",{assertExists:!1});
return e?e.count():0}}),e.type("cdo.DataOper").init(function(t){t||e.fail.argumentRequired("linkParent"),this._linkParent=t
}).add({key:null,execute:e.abstractMethod}),e.type("cdo.GroupingOper",xt.DataOper).init(function(t,i,n){i||e.fail.argumentRequired("groupingSpecs"),this.base(t,n),this._where=e.get(n,"where"),this._visible=e.get(n,"visible",null),this._selected=e.get(n,"selected",null);
var s=this._isNull=e.get(n,"isNull",null);this._postFilter=null!=s?function(e){return e.isNull===s
}:null;var r=null==this._selected,a="";this._where&&(a=e.get(n,"whereKey"),a||(n&&null!==a?(a=""+e.nextId("dataOperWhereKey"),n.whereKey=a):r=!1));
var o=[];this._groupSpecs=e.array.as(i).map(function(i){if(i instanceof xt.GroupingSpec){if(i.type!==t.type)throw e.error.argumentInvalid("groupingSpecText","Invalid associated complex type.")
}else i=xt.GroupingSpec.parse(i,t.type);return o.push(i.id),i}),r&&(this.key=o.join("!!")+"$"+[this._visible,this._isNull,a].join("||"))
}).add({execute:function(){var t=j(e.query(this._linkParent._datums),{visible:this._visible,selected:this._selected,where:this._where}),i=this._group(t);
return this._generateData(i,null,this._linkParent)},executeAdd:function(t,i){var n=j(e.query(i),{visible:this._visible,selected:this._selected,where:this._where}),s=this._group(n);
return this._generateData(s,null,this._linkParent,t),s.datums},_group:function(t){var i={isRoot:!0,treeHeight:e.query(this._groupSpecs).select(function(e){var t=e.levels.length;
return t?e.flatteningMode?1:t:0}).reduce(e.add,0),datums:[]};return i.treeHeight>0&&this._groupSpecRecursive(i,e.query(t).array(),0),i
},_groupSpecRecursive:function(e,t,i){var n=this._groupSpecs[i];n.flatteningMode?this._groupSpecRecursiveFlattened(e,t,n,i):this._groupSpecRecursiveNormal(e,t,n,i)
},_groupSpecRecursiveNormal:function(t,i,n,s){function r(t,i,u){var c=a[u],h=u===o-1,d=l&&h;
t.groupSpec=n,t.groupLevelSpec=c;for(var m=t.children=this._groupLevelDatums(c,t,i,!1),f=0,p=m.length;p>f;f++){var v=m[f];
if(!d){var g=v.datums;v.datums=[],h?this._groupSpecRecursive(v,g,s+1):r.call(this,v,g,u+1)
}e.array.append(t.datums,v.datums)}}var a=n.levels,o=a.length,l=s===this._groupSpecs.length-1;
t.isRoot&&(t.label=n.rootLabel),r.call(this,t,i,0)},_groupSpecRecursiveFlattened:function(t,i,n,s){function r(t,i,n){for(var d=o[n],f=n===l-1,p=u&&f,v=this._groupLevelDatums(d,t,i,!0),g=u?t.datums:[],_=0,y=v.length;y>_;_++){var b=v[_],w=b.datums;
if(e.array.lazy(t,"_children").push(b),e.hasOwn(h,b.key))e.array.append(g,w);else{var D=c.length;
a||(m(b),t.isFlattenGroup=!0),p||(b.datums=[],f?this._groupSpecRecursive(b,w,s+1):r.call(this,b,w,n+1)),e.array.append(g,b.datums),a&&(e.hasOwn(h,b.key)&&(b.isFlattenGroup||e.assert("Must be a parent for duplicate keys to exist."),1===b._children.length&&(c.splice(D,c.length-D),b.isDegenerateFlattenGroup=!0)),m(b),t.isFlattenGroup=!0)
}}u||this._groupSpecRecursive(t,g,s+1)}var a=n.flatteningMode===xt.FlatteningMode.DfsPost,o=n.levels,l=o.length,u=s===this._groupSpecs.length-1,c=[],h={},d={key:"",absKey:"",atoms:{},datums:[],label:n.rootLabel,dimNames:[]},m=function(e){c.push(e),h[e.key]=e
};t.children=c,t.childrenByKey=h,a||m(d),r.call(this,d,i,0),a&&m(d),t.datums=d.datums
},_groupLevelDatums:function(t,i,n,s){for(var r,a=[],o={},l=this._postFilter,u=t.comparer,c=function(e,t){return u(e.firstDatum,t.firstDatum)
},h=0,d=n.length;d>h;h++){var m=n[h],f=t.key(m),p=e.hasOwnProp.call(o,f)&&o[f];p?(!l||l(m))&&p.datums.push(m):(p=t.atomsInfo(m),p.key=f,p.firstDatum=m,p.datums=!l||l(m)?[m]:[],s&&(r||(r=m.owner.keySep),this._onNewChildNodeFlattened(f,r,p,t,i)),e.array.insert(a,p,c),o[f]=p)
}if(l)for(h=a.length;h--;)a[h].datums.length||a.splice(h,1);return a},_onNewChildNodeFlattened:function(t,i,n,s,r){if(e.copy(n.atoms,r.atoms),n.dimNames=s.accDimensionNames(),r.dimNames.length){var a=r.absKey+i+t;
n.absKey=a,n.key=xt.Complex.rightTrimKeySep(a,i)}else n.absKey=t},_generateData:function(t,i,n,s){var r,a;
if(t.isRoot)s?(r=s,F.call(r,t.datums)):(a=!0,r=new xt.Data({linkParent:n,datums:t.datums}),r.treeHeight=t.treeHeight,r._groupOper=this);
else if(s&&(r=n.child(t.key),r&&E.call(r,t.datums)),!r){a=!0;var o,l;s&&(l=n.childNodes)&&(o=~e.array.binarySearch(l,t.datums[0],i.groupLevelSpec.comparer)),r=new xt.Data({parent:n,atoms:t.atoms,atomsDimNames:t.dimNames,datums:t.datums,index:o})
}if(a){t.isFlattenGroup&&(r._isFlattenGroup=!0,r._isDegenerateFlattenGroup=!!t.isDegenerateFlattenGroup);
var u=t.label;u&&(r.label+=u,r.absLabel+=u)}var c=t.children,h=c&&c.length;if(h){a&&(r._groupSpec=t.groupSpec,r._groupLevelSpec=t.groupLevelSpec);
for(var d=0;h>d;d++)this._generateData(c[d],t,r,s)}else if(a&&!t.isRoot){var m=r.root._leafs;
r.leafIndex=m.length,m.push(r)}return r}}),e.space("cdo").FlatteningMode=e.set(e.makeEnum(["DfsPre","DfsPost"]),"None",0),e.type("cdo.GroupingSpec").init(function(t,i,n){this.type=i||null;
var s=[],r=[];this.hasCompositeLevels=!1,this.levels=e.query(t||void 0).where(function(e){return e.dimensions.length>0
}).select(function(t){return s.push(t.id),e.array.append(r,t.dimensionNames()),!this.hasCompositeLevels&&t.dimensions.length>1&&(this.hasCompositeLevels=!0),t._setAccDimNames(r.slice(0)),t
},this).array(),this._dimNames=r,this.depth=this.levels.length,this.isSingleLevel=1===this.depth,this.isSingleDimension=this.isSingleLevel&&!this.hasCompositeLevels,this.firstDimension=this.depth>0?this.levels[0].dimensions[0]:null,this.lastDimension=this.depth>0?this.levels[this.depth-1].lastDimension():null,this.rootLabel=e.get(n,"rootLabel")||"",this.flatteningMode=e.get(n,"flatteningMode")||xt.FlatteningMode.None,this._cacheKey=this._calcCacheKey(),this.id=this._cacheKey+"##"+s.join("||")
}).add({_calcCacheKey:function(t){return[e.get(t,"flatteningMode")||this.flatteningMode,e.get(t,"reverse")||"false",e.get(t,"isSingleLevel")||this.isSingleLevel,e.get(t,"rootLabel")||this.rootLabel].join("#")
},bind:function(t){this.type=t||e.fail.argumentRequired("type"),this.levels.forEach(function(e){e.bind(t)
})},dimensions:function(){return e.query(this.levels).prop("dimensions").selectMany()
},dimensionNames:function(){return this._dimNames},view:function(e){return e.view(this.dimensionNames())
},isDiscrete:function(){var e;return!this.isSingleDimension||!!(e=this.lastDimension)&&e.type.isDiscrete
},firstDimensionType:function(){var e=this.firstDimension;return e&&e.type},firstDimensionName:function(){var e=this.firstDimensionType();
return e&&e.name},firstDimensionValueType:function(){var e=this.firstDimensionType();
return e&&e.valueType},lastDimensionType:function(){var e=this.lastDimension;return e&&e.type
},lastDimensionName:function(){var e=this.lastDimensionType();return e&&e.name},lastDimensionValueType:function(){var e=this.lastDimensionType();
return e&&e.valueType},isNull:function(){return!this.levels.length},ensure:function(t){var i;
if(t){var n=this._calcCacheKey(t);if(n!==this._cacheKey){var s=e.lazy(this,"_groupingCache");
i=e.getOwn(s,n),i||(i=s[n]=this._ensure(t))}}return i||this},_ensure:function(t){var i=this;
if(e.get(t,"isSingleLevel")&&!i.isSingleLevel)return i._singleLevelGrouping(t);if(e.get(t,"reverse"))return i._reverse(t);
var n=e.get(t,"flatteningMode")||i.flatteningMode,s=e.get(t,"rootLabel")||i.rootLabel;
return n!==i.flatteningMode||s!==i.rootLabel?new xt.GroupingSpec(i.levels,i.type,{flatteningMode:n,rootLabel:s}):i
},_singleLevelGrouping:function(t){var i=!!e.get(t,"reverse"),n=this.dimensions().select(function(e){return i?new xt.GroupingDimensionSpec(e.name,!e.reverse,e.type.complexType):e
}),s=new xt.GroupingLevelSpec(n,this.type);return new xt.GroupingSpec([s],this.type,{flatteningMode:null,rootLabel:e.get(t,"rootLabel")||this.rootLabel})
},_reverse:function(t){var i=e.query(this.levels).select(function(t){var i=e.query(t.dimensions).select(function(e){return new xt.GroupingDimensionSpec(e.name,!e.reverse,e.type.complexType)
});return new xt.GroupingLevelSpec(i,this.type)},this);return new xt.GroupingSpec(i,this.type,{flatteningMode:e.get(t,"flatteningMode")||this.flatteningMode,rootLabel:e.get(t,"rootLabel")||this.rootLabel})
},toString:function(){return this.levels.map(String).join(", ")}}),e.type("cdo.GroupingLevelSpec").init(function(t,i){var n=[],s=[];
this.dimensions=e.query(t).select(function(e){return n.push(e.id),s.push(e.name),e
}).array(),this._dimNames=s,this.dimensionsInDefOrder=this.dimensions.slice(0),i&&this._sortDimensions(i),this.id=n.join(","),this.depth=this.dimensions.length;
var r=this;this.comparer=function(e,t){return r.compare(e,t)}}).add({_sortDimensions:function(e){e.sortDimensionNames(this.dimensionsInDefOrder,function(e){return e.name
})},_setAccDimNames:function(e){this._accDimNames=e},accDimensionNames:function(){return this._accDimNames
},dimensionNames:function(){return this._dimNames},lastDimension:function(){return this.dimensions[this.depth-1]
},bind:function(e){this._sortDimensions(e),this.dimensions.forEach(function(t){t.bind(e)
})},compare:function(e,t){for(var i,n=this.dimensions,s=this.depth,r=0;s>r;r++)if(i=n[r].compareDatums(e,t))return i;
return 0},key:function(e){for(var t="",i=this._dimNames,n=this.depth,s=e.owner.keySep,r=e.atoms,a=0;n>a;a++){var o=r[i[a]].key;
a?t+=s+o:t=o}return t},atomsInfo:function(e){for(var t={},i=this._dimNames,n=this.depth,s=e.atoms,r=0;n>r;r++){var a=i[r];
t[a]=s[a]}return{atoms:t,dimNames:i}},toString:function(){return e.query(this.dimensions).select(String).array().join("|")
}}),e.type("cdo.GroupingDimensionSpec").init(function(e,t,i){this.name=e,this.reverse=!!t,this.id=e+":"+(t?"0":"1"),i&&this.bind(i)
}).add({type:null,comparer:null,bind:function(t){t||e.fail.argumentRequired("type"),this.type=t.dimensions(this.name),this.comparer=this.type.atomComparer(this.reverse)
},compareDatums:function(e,t){if(this.type.isComparable){var i=this.name;return this.comparer(e.atoms[i],t.atoms[i])
}return this.reverse?t.id-e.id:e.id-t.id},toString:function(){return this.name+(this.type?' ("'+this.type.label+'")':"")+(this.reverse?" desc":"")
}}),xt.GroupingSpec.parse=function(t,i){if(!t)return new xt.GroupingSpec(null,i);
var n=e.string.is(t)?t.split(/\s*,\s*/):e.array.as(t),s=e.query(n).select(function(e){var t=$(e,i);
return new xt.GroupingLevelSpec(t,i)});return new xt.GroupingSpec(s,i)};var kt=/^\s*(.+?)(?:\s+(asc|desc))?\s*$/i;
e.type("cdo.LinearInterpolationOper").init(function(t,i,n,s,r,a,o){this._newDatums=[],this._data=n;
var l=s.flatten(t).children(),u=r.isBound()?r.flatten(i,{visible:!0,isNull:!1}).children().array():[null],c=this._valDim=t.owner.dimensions(a.lastDimensionName()),h={visible:!0,zeroIfNone:!1};
this._isCatDiscrete=s.grouping.isDiscrete(),this._stretchEnds=o,this._catInfos=l.select(function(e,t){var i=n.child(e.key),s={data:i||e,value:e.value,isInterpolated:!1,serInfos:null,index:t};
return s.serInfos=u.map(function(e){var t=i;t&&e&&(t=t.child(e.key));var n=t?t.dimensions(c.name).value(h):null;
return{data:e,group:t,value:n,isNull:null==n,catInfo:s}}),s}).array(),this._serCount=u.length,this._serStates=e.range(0,this._serCount).select(function(e){return new xt.LinearInterpolationOperSeriesState(this,e)
},this).array()}).add({interpolate:function(){for(var e;e=this._catInfos.shift();)e.serInfos.forEach(this._visitSeries,this);
var t=this._newDatums;t.length&&this._data.owner.add(t)},_visitSeries:function(e,t){this._serStates[t].visit(e)
},nextUnprocessedNonNullCategOfSeries:function(e){for(var t=0,i=this._catInfos.length;i>t;){var n=this._catInfos[t++],s=n.serInfos[e];
if(!s.isNull)return s}}}),e.type("cdo.LinearInterpolationOperSeriesState").init(function(e,t){this.interpolation=e,this.index=t,this._lastNonNull(null)
}).add({visit:function(e){e.isNull?this._interpolate(e):this._lastNonNull(e)},_lastNonNull:function(e){return arguments.length&&(this.__lastNonNull=e,this.__nextNonNull=void 0),this.__lastNonNull
},_nextNonNull:function(){return this.__nextNonNull},_initInterpData:function(){if(void 0===this.__nextNonNull){var t=this.__lastNonNull,i=this.__nextNonNull=this.interpolation.nextUnprocessedNonNullCategOfSeries(this.index)||null;
if(i&&t){var n=t.value,s=i.value,r=s-n;if(this.interpolation._isCatDiscrete){var a=i.catInfo.index-t.catInfo.index;
a>=2||e.assert("Must have at least one interpolation point."),this._stepValue=r/a,this._middleIndex=~~(a/2);
var o=a-1;this._isOdd=o%2>0}else{var l=+t.catInfo.value,u=+i.catInfo.value,c=u-l;
this._steep=r/c,this._middleCat=(u+l)/2}}}},_interpolate:function(t){this._initInterpData();
var i=this.__nextNonNull,n=this.__lastNonNull,s=i||n;if(s){var r,a,o=this.interpolation,l=t.catInfo;
if(i&&n)if(o._isCatDiscrete){var u=l.index-n.catInfo.index;r=n.value+this._stepValue*u,a=(this._isOdd?u<this._middleIndex:u<=this._middleIndex)?n.group:i.group
}else{var c=+l.value,h=+n.catInfo.value;r=n.value+this._steep*(c-h),a=c<this._middleCat?n.group:i.group
}else{if(!o._stretchEnds)return;r=s.value,a=s.group}var d=Object.create(a.atoms);
e.copyOwn(d,l.data.atoms);var m=o._valDim,f=m.intern(r,!0);d[m.name]=f,o._newDatums.push(new xt.InterpolationDatum(a.owner,d,"linear",m.name))
}}}),e.type("cdo.ZeroInterpolationOper").init(function(t,i,n,s,r,a,o){this._newDatums=[],this._data=n;
var l=s.flatten(t).children(),u=r.isBound()?r.flatten(i,{visible:!0,isNull:!1}).children().array():[null],c=this._valDim=t.owner.dimensions(a.lastDimensionName()),h={visible:!0,zeroIfNone:!1};
this._isCatDiscrete=s.grouping.isDiscrete(),this._stretchEnds=o,this._catInfos=l.select(function(e,t){var i=n.child(e.key),s={data:i||e,value:e.value,isInterpolated:!1,serInfos:null,index:t};
return s.serInfos=u.map(function(e){var t=i;t&&e&&(t=t.child(e.key));var n=t?t.dimensions(c.name).value(h):null;
return{data:e,group:t,value:n,isNull:null==n,catInfo:s}}),s}).array(),this._serCount=u.length,this._serStates=e.range(0,this._serCount).select(function(e){return new xt.ZeroInterpolationOperSeriesState(this,e)
},this).array()}).add({interpolate:function(){for(var e;e=this._catInfos.shift();)e.serInfos.forEach(this._visitSeries,this);
var t=this._newDatums;t.length&&this._data.owner.add(t)},_visitSeries:function(e,t){this._serStates[t].visit(e)
},nextUnprocessedNonNullCategOfSeries:function(e){for(var t=0,i=this._catInfos.length;i>t;){var n=this._catInfos[t++],s=n.serInfos[e];
if(!s.isNull)return s}}}),e.type("cdo.ZeroInterpolationOperSeriesState").init(function(e,t){this.interpolation=e,this.index=t,this._lastNonNull(null)
}).add({visit:function(e){e.isNull?this._interpolate(e):this._lastNonNull(e)},_lastNonNull:function(e){return arguments.length&&(this.__lastNonNull=e,this.__nextNonNull=void 0),this.__lastNonNull
},_nextNonNull:function(){return this.__nextNonNull},_initInterpData:function(){if(void 0===this.__nextNonNull){var t=this.__lastNonNull,i=this.__nextNonNull=this.interpolation.nextUnprocessedNonNullCategOfSeries(this.index)||null;
if(i&&t)if(this.interpolation._isCatDiscrete){var n=i.catInfo.index-t.catInfo.index;
n>=2||e.assert("Must have at least one interpolation point."),this._middleIndex=~~(n/2);
var s=n-1;this._isOdd=s%2>0}else{var r=+t.catInfo.value,a=+i.catInfo.value;this._middleCat=(a+r)/2
}}},_interpolate:function(t){this._initInterpData();var i=this.__nextNonNull,n=this.__lastNonNull,s=i||n;
if(s){var r,a=this.interpolation,o=t.catInfo;if(i&&n)if(a._isCatDiscrete){var l=o.index-n.catInfo.index;
r=this._isOdd?l<this._middleIndex?n.group:i.group:l<=this._middleIndex?n.group:i.group
}else{var u=+o.value;r=u<this._middleCat?n.group:i.group}else{if(!a._stretchEnds)return;
r=s.group}var c=Object.create(r.atoms);e.copyOwn(c,o.data.atoms);var h=a._valDim,d=a._zeroAtom||(a._zeroAtom=h.intern(0,!0));
c[h.name]=d,a._newDatums.push(new xt.InterpolationDatum(r.owner,c,"zero",h.name))
}}}),e.type("cdo.TranslationOper").init(function(t,i,n,s){this.complexTypeProj=t||e.fail.argumentRequired("complexTypeProj"),this.source=i||e.fail.argumentRequired("source"),this.metadata=n||e.fail.argumentRequired("metadata"),this.options=s||{},this._initType(),e.debug>=4&&(this._logLogicalRows=!0,this._logLogicalRowCount=0)
}).add({_logLogicalRows:!1,logSource:e.abstractMethod,logLogicalRow:e.abstractMethod,_translType:"Unknown",logTranslatorType:function(){return this._translType+" data source translator"
},logicalColumnCount:function(){return this.metadata.length},setSource:function(t){if(!t)throw e.error.argumentRequired("source");
this.source=t},defReader:function(t){t||e.fail.argumentRequired("readerSpec");var i=e.string.is(t)?t:t.names;
i=e.string.is(i)?i.split(/\s*\,\s*/):e.array.as(i);var n=e.array.as(t.indexes);n&&n.forEach(this._userUseIndex,this);
var s=!(!i||!i.length),r=t.reader;if(r)s||e.fail.argumentRequired("reader.names","Required argument when a reader function is specified."),this._userRead(r,i);
else{if(s)return this._userCreateReaders(i,n);n&&n.forEach(function(e){this._userIndexesToSingleDim[e]=null
},this)}return n},configureType:function(){this._configureTypeCore()},_configureTypeCore:e.abstractMethod,_initType:function(){this._userDimsReaders=[],this._userDimsReadersByDim={},this._userUsedIndexes={},this._userIndexesToSingleDim=[];
var t=this.options.readers;t&&e.array.each(t,this.defReader,this);var i=e.parseDistinctIndexArray(this.options.multiChartIndexes);
i&&(this._multiChartIndexes=this.defReader({names:"multiChart",indexes:i}))},_userUseIndex:function(t){if(t=+t,0>t)throw e.error.argumentInvalid("index","Invalid reader index: '{0}'.",[t]);
if(e.hasOwn(this._userUsedIndexes,t))throw e.error.argumentInvalid("index","Column '{0}' of the logical table is already assigned.",[t]);
return this._userUsedIndexes[t]=!0,t},_userCreateReaders:function(t,i){i?i.forEach(function(e,t){i[t]=+e
}):i=[];var n,s=i.length,r=t.length;if(r>s){var a=s>0?i[s-1]+1:0;do a=this._getNextFreeLogicalColumnIndex(a),i[s]=a,this._userUseIndex(a),s++;
while(r>s)}for(var o,l=s===r?r:r-1,u=0;l>u;u++)n=t[u],o=i[u],this._userIndexesToSingleDim[o]=n,this._userRead(this._propGet(n,o),n);
if(r>l)for(var c=e.splitIndexedId(t[r-1]),h=c[0],d=e.nullyTo(c[1],0),m=l;s>m;m++,d++)n=e.indexedId(h,d),o=i[m],this._userIndexesToSingleDim[o]=n,this._userRead(this._propGet(n,o),n);
return i},_userRead:function(t,i){e.fun.is(t)||e.fail.argumentInvalid("reader","Reader must be a function."),e.array.is(i)?i.forEach(function(e){this._readDim(e,t)
},this):this._readDim(i,t),this._userDimsReaders.push(t)},_readDim:function(t,i){var n,s,r=this._userIndexesToSingleDim.indexOf(t);
if(r>=0&&(n=this._logicalRowInfos[r],n&&!this.options.ignoreMetadataLabels)){var a=n.label||n.name&&e.titleFromName(n.name);
a&&(s={label:a})}this.complexTypeProj.readDim(t,s),this._userDimsReadersByDim[t]=i
},execute:function(e){return this.data=e,this._executeCore()},_executeCore:function(){var t=this._getDimensionsReaders();
return e.query(this._getLogicalRows()).select(function(e){return this._readLogicalRow(e,t)
},this)},_getLogicalRows:function(){return this.source},_getDimensionsReaders:function(){return this._userDimsReaders.slice().reverse()
},_readLogicalRow:function(e,t){for(var i=this._logLogicalRows&&this._logLogicalRowBefore(e),n=t.length,s=this.data,r={};n--;)t[n].call(s,e,r);
return i&&this._logLogicalRowAfter(r),r},_logLogicalRowBefore:function(t){return this._logLogicalRowCount<10?(e.log("logical row ["+this._logLogicalRowCount++ +"]: "+e.describe(t)),!0):(e.log("..."),this._logLogicalRows=!1)
},_logLogicalRowAfter:function(t){var i={};for(var n in t){var s=t[n];e.object.is(s)&&(s="v"in s?s.v:"value"in s?s.value:"..."),i[n]=s
}e.log("-> read: "+e.describe(i))},_propGet:function(e,t){function i(i,n){n[e]=i[t]
}return i},_getNextFreeLogicalColumnIndex:function(t,i){for(null==t&&(t=0),null==i&&(i=1/0);i>t&&e.hasOwn(this._userUsedIndexes,t);)t++;
return i>t?t:-1},_getPhysicalGroupStartIndex:function(t){return e.getOwn(this._logicalRowPhysicalGroupIndex,t)
},_getPhysicalGroupLength:function(t){return e.getOwn(this._logicalRowPhysicalGroupsLength,t)
},_configureTypeByPhysicalGroup:function(t,i,n,s){var r=this._logicalRowPhysicalGroupIndex[t],a=this._logicalRowPhysicalGroupsLength[t],o=r+a-1,l=r;
if(n=null==n?a:Math.min(a,n),n&&o>=l){i||(i=t),s||(s=1/0);for(var u,c=0;n&&s>c;)if(u=e.indexedId(i,c++),!this.complexTypeProj.isReadOrCalc(u)){if(l=this._getNextFreeLogicalColumnIndex(l),l>o)return l;
this.defReader({names:u,indexes:l}),l++,n--}}return l},_configureTypeByOrgLevel:function(e,t){var i=[],n=[];
this._logicalRowInfos.forEach(function(e,t){if(!this[t]){var s=1===e.type?i:n;s&&s.push(t)
}},this._userUsedIndexes),this._configureTypeByDimGroups(n,this._processDimGroupSpecs(e,!0,1/0)),this._configureTypeByDimGroups(i,this._processDimGroupSpecs(t,!1,1))
},_processDimGroupSpecs:function(t,i,n){return t.map(function(t){return e.string.is(t)?{name:t,greedy:i,maxCount:n}:e.setDefaults(t,{greedy:i,maxCount:n})
})},_configureTypeByDimGroups:function(e,t){if(t)for(var i,n=-1,s=t.length;++n<s&&(i=e.length);){var r=t[n],a=Math.min(r.maxCount,i),o=this._getFreeDimGroupNames(r.name,a,r.greedy);
o&&(o.length,this.defReader({names:o,indexes:e.splice(0,o.length)}))}},_getFreeDimGroupNames:function(t,i,n){if(!t)return null;
var s=[],r=0;for(null==i&&(i=1);i;){var a=e.indexedId(t,r++);this.complexTypeProj.isReadOrCalc(a)?n||i--:(s.push(a),i--)
}return s.length?s:null}}),e.type("cdo.MatrixTranslationOper",xt.TranslationOper).add({_initType:function(){this.J=this.metadata.length,this.I=this.source.length,this._processMetadata(),this.base()
},setSource:function(e){this.base(e),this.I=this.source.length},_knownContinuousColTypes:{numeric:1,number:1,integer:1},_processMetadata:function(){var t,i=this.options.typeCheckingMode,n=this._knownContinuousColTypes;
if("none"===i)t=e.query(this.metadata).select(function(e,t){e.colIndex=t;var i=e.colType;
return i&&1===n[i.toLowerCase()]?1:0}).array();else{var s="extended"===i,r=e.query(this.metadata).select(function(e,t){return e.colIndex=t,e
}).where(function(e){var t=e.colType;return!t||1!==n[t.toLowerCase()]}).select(function(e){return e.colIndex
}).array(),a=this.I,o=this.source,l=r.length;t=e.array.create(this.J,1);for(var u=0;a>u&&l>0;u++)for(var c=o[u],h=0;l>h;){var d=r[h],m=c[d];
null!=m?(t[d]=this._getSourceValueType(m,s),r.splice(h,1),l--):h++}}this._columnTypes=t
},_buildLogicalColumnInfoFromMetadata:function(e){var t=this.metadata[e];return{type:this._columnTypes[e],name:t.colName,label:t.colLabel}
},_getSourceValueType:function(e,t){switch(typeof e){case"number":return 1;case"string":return t&&""!==e&&!isNaN(+e)?1:0;
case"object":return e instanceof Date?1:0}return 0},logSource:function(){var t=xt.previewRowsMax,i=xt.previewColsMax,n=this.metadata,s=n.length,r=e.array.prepend;
s>i&&(n=n.slice(0,i),n.push({colName:"("+i+"/"+s+")",colType:"..."}));var a=e.textTable(n.length+1).rowSep().row.apply(a,r(n.map(function(e){return e.colName
}),["Name"])).rowSep().row.apply(a,r(n.map(function(e){return e.colLabel?'"'+e.colLabel+'"':""
}),["Label"])).rowSep().row.apply(a,r(n.map(function(e){return e.colType}),["Type"])).rowSep();
return e.query(this.source).take(t).each(function(t,n){s>i&&(t=t.slice(0,i)),a.row.apply(a,r(t.map(function(t){return e.describe(t)
}),[n+1]))}),a.rowSep().row("("+Math.min(t,this.I)+"/"+this.I+")").rowSep(!0),"DATA SOURCE SUMMARY\n"+a()+"\n"
},_logLogicalRow:function(t,i){var n=e.textTable(6).rowSep().row("Index","Kind","Type","Name","Label","Dimension").rowSep(),s=0;
return t.forEach(function(e){for(var t=0,r=i[e];r>t;t++){var a=this._logicalRowInfos[s];
n.row(s,e,a.type?"number":"string",a.name||"",a.label||"",this._userIndexesToSingleDim[s]||""),s++
}},this),n.rowSep(!0),"LOGICAL TABLE\n"+n()+"\n"},_createPlot2SeriesKeySet:function(t,i){var n=null,s=i.length;
return e.query(t).each(function(t){var r=+t;if(isNaN(r))throw e.error.argumentInvalid("plot2SeriesIndexes","Element is not a number '{0}'.",[t]);
if(0>r){if(-s>=r)throw e.error.argumentInvalid("plot2SeriesIndexes","Index is out of range '{0}'.",[r]);
r=s+r}else if(r>=s)throw e.error.argumentInvalid("plot2SeriesIndexes","Index is out of range '{0}'.",[r]);
n||(n={}),n[i[r]]=!0}),n},_dataPartGet:function(t){function i(t,i){i[l]=e.hasOwn(s,t)?a||(a=n.intern("1")):r||(r=n.intern("0"))
}var n,s,r,a,o=this,l=this.options.dataPartDimName,u=function(){s=t(),n=o.data.dimensions(l),e.debug>=3&&s&&e.log("Second axis series values: "+e.describe(e.keys(s))),u=null
};this.complexTypeProj.setCalc({names:l,calculation:function(e,t){u&&u(),i(e.atoms.series.value,t)
}})},_configureTypeCore:function(){["series","category","value"].forEach(function(e){this._configureTypeByPhysicalGroup(e)
},this)}}),xt.previewRowsMax=15,xt.previewColsMax=6,e.type("cdo.CrosstabTranslationOper",xt.MatrixTranslationOper).add({_translType:"Crosstab",logicalColumnCount:function(){return this.R+this.C+this.M
},_executeCore:function(){function t(e,t){for(var i=r[e],n=0,o=a[e];o-->0;)s[i++]=t[n++]
}function i(e,t){for(var i=r.M,n=a._colGroupsIndexes[t],o=a.M,l=0;o>l;l++){var u=n[l];
s[i++]=null!=u?e[u]:null}}if(!this.metadata.length)return e.query();var n=this._getDimensionsReaders(),s=new Array(this.logicalColumnCount()),r=this._logicalRowCrossGroupIndex,a=this,o=e.query(this.source);
if(this._colGroups&&this._colGroups.length){var l=function(r){return t("R",r),e.query(this._colGroups).select(function(e,a){return t("C",e),i(r,a),this._readLogicalRow(s,n)
},this)};return o.selectMany(l,this)}return o.select(function(e){return t("R",e),this._readLogicalRow(s,n)
},this)},_processMetadata:function(){this.base(),this._separator=this.options.separator||"~";
var t=this.R=1;this.C=1,this.M=1,this.measuresDirection=null;var i=this.options.seriesInRows,n=this.metadata,s=this.options.compatVersion<=1,r=function(){var e=i?function(e){return e.colName
}:s?function(e){return{v:e.colName}}:function(e){return{v:e.colName,f:e.colLabel}
};return n.map(e)}(),a=this._logicalRowCrossGroupInfos={};if(this.options.isMultiValued){var o=e.get(this.options,"measuresInColumns",!0);
if(o||null==this.options.measuresIndex){t=this.R=this._getCategoriesCount();var l=r.slice(t),u=l.length;
u>0?(o?(this.measuresDirection="columns",this._processEncodedColGroups(l)):(this._colGroups=l,this._colGroupsIndexes=[],this._colGroups.forEach(function(e,t){this._colGroups[t]=this._splitEncodedColGroupCell(e),this._colGroupsIndexes[t]=[this.R+t]
},this),a.M=[this._buildLogicalColumnInfoFromMetadata(t)]),this.C=this._colGroups[0].length,a.C=e.range(0,this.C).select(function(){return{type:0}
}).array()):(this.C=this.M=0,a.M=[],a.C=[])}else{this.measuresDirection="rows",this.R=+this.options.measuresIndex;
var c=this.options.measuresCount;null==c&&(c=1),this.M=c,this._colGroups=r.slice(this.R+1),this._colGroups.forEach(function(e,t){this._colGroups[t]=[e]
},this)}}else t=this.R=this._getCategoriesCount(),this._colGroups=r.slice(t),this._colGroupsIndexes=new Array(this._colGroups.length),this._colGroups.forEach(function(e,i){this._colGroups[i]=[e],this._colGroupsIndexes[i]=[t+i]
},this),a.C=[{type:0}],a.M=[{type:this._columnTypes[t]}];a.R=e.range(0,this.R).select(this._buildLogicalColumnInfoFromMetadata,this).array();
var h=this._logicalRowCrossGroupIndex={C:i?this.R:0,R:i?0:this.C,M:this.C+this.R},d=this._logicalRowInfos=new Array(this.logicalColumnCount());
e.eachOwn(h,function(e,t){a[t].forEach(function(t,i){d[e+i]=t})}),this._logicalRowPhysicalGroupsLength={series:i?this.R:this.C,category:i?this.C:this.R,value:this.M},this._logicalRowPhysicalGroupIndex={series:0,category:this._logicalRowPhysicalGroupsLength.series,value:this.C+this.R}
},logLogicalRow:function(){return this._logLogicalRow(["C","R","M"],{C:this.C,R:this.R,M:this.M})
},_getCategoriesCount:function(){var t=this.options.categoriesCount;return null!=t&&(!isFinite(t)||0>t)&&(t=null),null==t&&(t=e.query(this._columnTypes).whayl(function(e){return 0===e
}).count(),t||(t=1)),t},_splitEncodedColGroupCell:function(e){var t,i=e.v;return null==i?i=[]:(i=i.split(this._separator),t=e.f,t&&(t=t.split(this._separator))),i.map(function(e,i){return{v:e,f:t&&t[i]}
})},_processEncodedColGroups:function(t){for(var i,n=t.length||e.assert("Must have columns"),s=this.R,r=[],a={},o=[],l=0;n>l;l++){var u,c,h,d,m=t[l],f=m.v,p=m.f,v=f.lastIndexOf(this._separator);
0>v?(u=f,c=p,f="",h=[]):(u=f.substring(v+1),f=f.substring(0,v),h=f.split(this._separator),null!=p&&(d=p.split(this._separator),c=d.pop()),h.forEach(function(e,t){var i=d&&d[t];
h[t]={v:e,f:i}})),i&&i.encValues===f?i.measureNames.push(u):(i={startIndex:l,encValues:f,values:h,measureNames:[u]},r.push(i));
var g=l-i.startIndex,_=e.getOwn(a,u);_?g>_.groupIndex&&(_.groupIndex=g):(a[u]=_={name:u,label:c,type:this._columnTypes[s+l],groupIndex:g,index:l},o.push(_))
}o.sort(function(t,i){return e.compare(t.groupIndex,i.groupIndex)||e.compare(t.index,i.index)
}),o.forEach(function(e,t){e.groupIndex=t});var y=r.length,b=new Array(y),w=new Array(y),D=o.length;
r.map(function(e,t){b[t]=e.values;var i=e.startIndex,n=w[t]=new Array(D);e.measureNames.forEach(function(e,t){var r=a[e].groupIndex;
n[r]=s+i+t})}),this._colGroups=b,this._colGroupsIndexes=w,this._logicalRowCrossGroupInfos.M=o,this.M=D
},configureType:function(){if("rows"===this.measuresDirection)throw e.error.notImplemented();
var t=this.options.dataPartDimName;if(t&&1===this.C&&!this.complexTypeProj.isReadOrCalc(t)){var i=this.options.plot2DataSeriesIndexes;
if(null!=i){var n=this._colGroups.map(function(e){return""+e[0].v});this._plot2SeriesKeySet=this._createPlot2SeriesKeySet(i,n)
}}if(this.base(),this._plot2SeriesKeySet){var s=this._userDimsReadersByDim.series;
if(s){var r=e.fun.constant(this._plot2SeriesKeySet);this._dataPartGet(r)}}}}),e.type("cdo.RelationalTranslationOper",xt.MatrixTranslationOper).add({M:0,C:0,S:0,_translType:"Relational",_processMetadata:function(){this.base();
var t,i,n,s,r=this.metadata,a=this.J,o=this.options.categoriesCount;if(null!=o&&(!isFinite(o)||0>o)&&(o=0),this.options.isMultiValued&&(i=e.parseDistinctIndexArray(this.options.measuresIndexes,0,a-1),n=i?i.length:0),null==n)if(a>0&&3>=a&&(null==o||1===o))n=1,i=[a-1],o=a>=2?1:0,t=a>=3?1:0,s=o+t;
else if(null!=o&&o>=a)s=o=a,t=n=0;else{var l=null!=o?a-o:1/0;i=e.query(r).where(function(e,t){return 0!==this._columnTypes[t]
},this).select(function(e){return e.colIndex}).take(l).array(),n=i.length}null==s&&(s=a-n,0===s?t=o=0:null!=o?o>s?(o=s,t=0):t=s-o:(t=s>1?1:0,o=s-t));
var u=this.options.seriesInRows,c=[];s&&(t&&!u&&c.push({name:"S",count:t}),o&&c.push({name:"C",count:o}),t&&u&&c.push({name:"S",count:t})),n&&c.push({name:"M",count:n});
var h=e.range(0,a).array();i&&i.slice().sort(e.descending).forEach(function(e){h.splice(e,1)
});var d={};c.forEach(function(e){var t=e.count,n=e.name;d[n]=e,e.indexes=i&&"M"===n?i:h.splice(0,t)
}),this.M=n,this.S=t,this.C=o;var m=[];["S","C","M"].forEach(function(t){var i=d[t];
i&&e.array.append(m,i.indexes)}),this._logicalRowInfos=m.map(this._buildLogicalColumnInfoFromMetadata,this),this._logicalRowPerm=m,this._logicalRowPhysicalGroupsLength={series:this.S,category:this.C,value:this.M},this._logicalRowPhysicalGroupIndex={series:0,category:this._logicalRowPhysicalGroupsLength.series,value:this.S+this.C}
},logLogicalRow:function(){return this._logLogicalRow(["S","C","M"],{S:this.S,C:this.C,M:this.M})
},configureType:function(){this.base();var e=this.options.dataPartDimName;if(e&&!this.complexTypeProj.isReadOrCalc(e)){var t=this.options.plot2DataSeriesIndexes;
if(null!=t){var i=this._userDimsReadersByDim.series;i&&Y.call(this,t,i)}}},_executeCore:function(){var i=this._getDimensionsReaders(),n=this._logicalRowPerm;
return e.query(this._getLogicalRows()).select(function(e){return e=t.permute(e,n),this._readLogicalRow(e,i)
},this)}});var Tt=xt.numberFormatStyle=function(e,t){return new Ot(e,t)},At=e.priv.key().property(),Ot=Tt.of=e("cdo.NumberFormatStyle",e.FieldsBase.extend({init:function(){e.classify(this,Tt)
},fields:{decimal:{cast:String,fail:e.falsy},group:{cast:String},groupSizes:{fail:e.array.empty},negativeSign:{cast:String,fail:e.falsy},currency:{cast:String,fail:e.falsy},integerPad:{cast:String,fail:e.falsy},fractionPad:{cast:String,fail:e.falsy},abbreviations:{fail:e.array.empty}},methods:{tryConfigure:function(t){if(e.is(t,Tt))return!!this.integerPad(t.integerPad()).fractionPad(t.fractionPad()).decimal(t.decimal()).group(t.group()).groupSizes(t.groupSizes()).negativeSign(t.negativeSign()).currency(t.currency()).abbreviations(t.abbreviations());
if(e.string.is(t)){var i=jt(t);if(i)return!!e.configure(this,i.number().style())}}}},{fieldsPrivProp:At}));
e.classify(Ot.prototype,Tt),Tt.defaults=Tt({integerPad:"0",fractionPad:"0",decimal:".",group:",",groupSizes:[3],abbreviations:["k","m","b","t"],negativeSign:"-",currency:"$"});
var Gt=xt.numberFormat=function(t,i){function n(e){return r||(r=Z(s.mask)),r(e,At(s.style))
}var s,r;return n.format=n,n.tryConfigure=J,e.classify(n,Gt),s=e.instance(n,t,i,{mask:{cast:String,change:function(){r=null
}},style:{cast:e.createAs(Ot),factory:Tt}}),n};Gt.defaults=Gt().style(Tt()),Gt.cacheLimit=20;
var Mt={},Pt=0,Vt=xt.dateFormat=function(t,i){function n(e){return r||(r=gt(s.mask)),r(e)
}var s,r;return n.format=n,n.tryConfigure=vt,e.classify(n,Vt),s=e.instance(n,t,i,{mask:{cast:String,change:function(){r=null
}}}),arguments.length&&e.configure(n,arguments[0]),n};Vt.defaults=Vt();var Bt=xt.customFormat=function(t,i){function n(){var e=s.formatter;
return String(e&&e.apply(null,arguments))}var s;return n.format=n,n.tryConfigure=_t,e.classify(n,Bt),s=e.instance(n,t,i,{formatter:{cast:e.fun.as}}),n
};Bt.defaults=Bt().formatter(yt);var qt="en-us",Et=xt.format=function(t,i){function n(){}n.tryConfigure=wt;
var s;if(!i&&e.string.is(t)){var r=jt(t);s=r.languageCode,r&&(i=r,t=null)}return n.languageCode=s?s:qt,e.classify(n,Et),e.instance(n,t,i,{number:bt(Gt),percent:bt(Gt),date:bt(Vt),any:{cast:e.createAs(Bt),factory:Bt}}),n
};Et.defaults=Et({number:"#,0.##",percent:"#,0.#%",date:"%Y/%m/%d",any:Bt()});var Ft={},Kt=Ft[qt]=Et.defaults,jt=xt.format.language=function(t,i){var n=arguments.length;
if(!n)return Kt;if(1==n){if(void 0===t)throw e.error.operationInvalid("Undefined 'style' value.");
if(null===t||""===t)t=qt;else{if(e.is(t,Et))return Kt=t;if("object"==typeof t){for(var s in t)Dt(s,e.getOwn(t,s));
return xt.format}}return St(t,!0)}if(2==n)return Dt(t,i);throw e.error.operationInvalid("Wrong number of arguments")
};return jt({"en-gb":{number:{mask:"#,0.##",style:{integerPad:"0",fractionPad:"0",decimal:".",group:",",groupSizes:[3],abbreviations:["k","m","b","t"],negativeSign:"-",currency:"£"}},date:{mask:"%d/%m/%Y"}},"pt-pt":{number:{mask:"#,0.##",style:{integerPad:"0",fractionPad:"0",decimal:",",group:" ",groupSizes:[3],abbreviations:["k","m","b","t"],negativeSign:"-",currency:"€"}},date:{mask:"%d/%m/%Y"}}}),xt
});