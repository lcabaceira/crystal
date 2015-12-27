define(["../Logger","amd!../lib/underscore","../lib/moment","../lib/CCC/cdo","../lib/jquery","amd!../lib/queryParser"],function(r,e,n,t,a){function i(r){var e={};
for(var n in r)r.hasOwnProperty(n)&&(e[r[n][0]]=r[n][1]);return e}function o(r){var e=[];
for(var n in r)r.hasOwnProperty(n)&&e.push([n,r[n]]);return e}var u={},l=void 0,c=void 0;
return u.escapeHtml=function(r){var e=r.replace(/&(?!amp;)(?!lt;)(?!gt;)(?!#34;)(?!#39;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;").replace(/"/g,"&#34;");
return e},u.getPathParameter=function(r){r=r||window.location.pathname,r=decodeURIComponent(r);
var e=r.match("/:(.[^/]+)(.*)/");return e&&e.length>1?(":"+e[1]).replace(/:/g,"/"):void 0
},u.getLocationSearchString=function(){return window.location.search},u.getQueryParameter=function(r){return void 0===c&&(c=a.parseQuery(this.getLocationSearchString())),c[r]||""
},u.numberFormat=function(r,e,n){if(void 0===l&&(l=t.format.language().createChild()),null!=n){var a=t.format.language(n).createChild();
return a.number({mask:e}),a.number()(r)}return l.number({mask:e}),l.number()(r)},u.configLanguage=function(r,e){var a=e.dateLocale||{},i=n.locale();
delete e.dateLocale,t.format.language(r,e),n.locale(r,a),n.locale(i)},u.dateFormat=function(r,e,t){var a=n(r);
return a.isValid()?(null!=t&&(null===n.localeData(t)&&(t="en-US"),a.locale(t)),a.format(e)):a.toDate()
},u.dateParse=function(r,e){return n(r,e).toDate()},u.propertiesArrayToObject=function(r){return e.isArray(r)&&i(r)||e.isObject(r)&&r||void 0
},u.objectToPropertiesArray=function(r){return e.isArray(r)&&r||e.isObject(r)&&o(r)||void 0
},u.getURLParameters=function(r){if(r.indexOf("?")>0)for(var e=r.split("?"),n=e[1].split("&"),t=[],a=0;a<n.length;a++){var i=n[a].split("=");
if(0==i[0].indexOf("param",0)){var o=[i[0].substring(5,i[0].length),unescape(i[1])];
t.push(o)}}return t},u.toFormatedString=function(r){r+="";for(var e=r.split("."),n=e[0],t=e.length>1?"."+e[1]:"",a=/(\d+)(\d{3})/;a.test(n);)n=n.replace(a,"$1,$2");
return n+t},u.doCsvQuoting=function(r,e,n){var t='"';return null==e?r:null==r?null:(r.indexOf(t)>=0&&(r=r.replace(t,t.concat(t))),(n||r.indexOf(e)>=0)&&(r=t.concat(r,t)),r)
},u.ev=function(r){return"function"==typeof r?r():r},u.post=function(r,e){var n='<form action="'+r+'" method="post">';
for(var t in e){var i=u.ev(e[t]);"string"==typeof i&&(i=i.replace(/"/g,"'")),n+='"<input type="hidden" name="'+t+'" value="'+i+'"/>'
}n+="</form>",a(n).appendTo("body").submit().remove()},u.clone=function(r){var e=r instanceof Array?[]:{};
for(var n in r){var t=r[n];if("object"==typeof t)if(t instanceof Array){e[n]=[];for(var a=0;a<t.length;a++)"object"!=typeof t[a]?e[n].push(t[a]):e[n].push(this.clone(t[a]))
}else e[n]=this.clone(t);else e[n]=t}return e},u.addArgs=function(r){void 0!=r&&(this.args=getURLParameters(r))
},u.getArgValue=function(r){for(var e=0;e<this.args.length;e++)if(this.args[e][0]==r)return this.args[e][1];
return void 0},u.eachValuesArray=function(r,e,n,t){"function"==typeof e&&(t=n,n=e,e=null);
for(var a=!(!e||!e.valueAsId),i=0,o=0,u=r.length;u>i;i++){var l=r[i];if(l&&l.length){var c,s,f=l[0],g=void 0;
if(l.length>1?(a&&(g=f),s=""+l[1],c=a||null==f?s:""+f):c=s=""+f,n.call(t,c,s,g,o,i)===!1)return!1;
o++}}return!0},u.parseMultipleValues=function(r){if(null!=r&&""!==r){if(this.isArray(r))return r;
if("string"==typeof r)return r.split("|")}return null},u.normalizeValue=function(r){return""===r||null==r?null:this.isArray(r)&&!r.length?null:r
},u.isArray=function(r){return!!r&&(r instanceof Array||"object"==typeof r&&r.join&&null!=r.length)
},u.equalValues=function(r,e){if(r=this.normalizeValue(r),e=this.normalizeValue(e),r===e)return!0;
if(this.isArray(r)&&this.isArray(e)){var n=r.length;if(n!==e.length)return!1;for(;n--;)if(!this.equalValues(r[n],e[n]))return!1;
return!0}return r==e},u.hsvToRgb=function(r,e,n){n/=100,e/=100;var t,a=r%360/60,i=n*e,o=n-i,u=Math.abs(a%2-1),l=n*(1-e*u),c=n;
switch(~~a){case 0:t=[c,l,o];break;case 1:t=[l,c,o];break;case 2:t=[o,c,l];break;
case 3:t=[o,l,c];break;case 4:t=[l,o,c];break;case 5:t=[c,o,l]}return t.forEach(function(r,e){t[e]=Math.min(255,Math.round(256*r))
}),"rgb("+t.join(",")+")"},u});