SimileAjax.DateTime=new Object,SimileAjax.DateTime.MILLISECOND=0,SimileAjax.DateTime.SECOND=1,SimileAjax.DateTime.MINUTE=2,SimileAjax.DateTime.HOUR=3,SimileAjax.DateTime.DAY=4,SimileAjax.DateTime.WEEK=5,SimileAjax.DateTime.MONTH=6,SimileAjax.DateTime.YEAR=7,SimileAjax.DateTime.DECADE=8,SimileAjax.DateTime.CENTURY=9,SimileAjax.DateTime.MILLENNIUM=10,SimileAjax.DateTime.EPOCH=-1,SimileAjax.DateTime.ERA=-2,SimileAjax.DateTime.gregorianUnitLengths=[],function(){var e=SimileAjax.DateTime,i=e.gregorianUnitLengths;
i[e.MILLISECOND]=1,i[e.SECOND]=1e3,i[e.MINUTE]=60*i[e.SECOND],i[e.HOUR]=60*i[e.MINUTE],i[e.DAY]=24*i[e.HOUR],i[e.WEEK]=7*i[e.DAY],i[e.MONTH]=31*i[e.DAY],i[e.YEAR]=365*i[e.DAY],i[e.DECADE]=10*i[e.YEAR],i[e.CENTURY]=100*i[e.YEAR],i[e.MILLENNIUM]=1e3*i[e.YEAR]
}(),SimileAjax.DateTime._dateRegexp=new RegExp("^(-?)([0-9]{4})("+["(-?([0-9]{2})(-?([0-9]{2}))?)","(-?([0-9]{3}))","(-?W([0-9]{2})(-?([1-7]))?)"].join("|")+")?$"),SimileAjax.DateTime._timezoneRegexp=new RegExp("Z|(([-+])([0-9]{2})(:?([0-9]{2}))?)$"),SimileAjax.DateTime._timeRegexp=new RegExp("^([0-9]{2})(:?([0-9]{2})(:?([0-9]{2})(.([0-9]+))?)?)?$"),SimileAjax.DateTime.setIso8601Date=function(e,i){var t=i.match(SimileAjax.DateTime._dateRegexp);
if(!t)throw new Error("Invalid date string: "+i);var a="-"==t[1]?-1:1,m=a*t[2],T=t[5],l=t[7],n=t[9],s=t[11],r=t[13]?t[13]:1;
if(e.setUTCFullYear(m),n)e.setUTCMonth(0),e.setUTCDate(Number(n));else if(s){e.setUTCMonth(0),e.setUTCDate(1);
var D=e.getUTCDay(),U=D?D:7,A=Number(r)+7*Number(s);4>=U?e.setUTCDate(A+1-U):e.setUTCDate(A+8-U)
}else T&&(e.setUTCDate(1),e.setUTCMonth(T-1)),l&&e.setUTCDate(l);return e},SimileAjax.DateTime.setIso8601Time=function(e,i){var t=i.match(SimileAjax.DateTime._timeRegexp);
if(!t)return SimileAjax.Debug.warn("Invalid time string: "+i),!1;var a=t[1],m=Number(t[3]?t[3]:0),T=t[5]?t[5]:0,l=t[7]?1e3*Number("0."+t[7]):0;
return e.setUTCHours(a),e.setUTCMinutes(m),e.setUTCSeconds(T),e.setUTCMilliseconds(l),e
},SimileAjax.DateTime.timezoneOffset=(new Date).getTimezoneOffset(),SimileAjax.DateTime.setIso8601=function(e,i){var t=null,a=-1==i.indexOf("T")?i.split(" "):i.split("T");
if(SimileAjax.DateTime.setIso8601Date(e,a[0]),2==a.length){var m=a[1].match(SimileAjax.DateTime._timezoneRegexp);
m&&("Z"==m[0]?t=0:(t=60*Number(m[3])+Number(m[5]),t*="-"==m[2]?1:-1),a[1]=a[1].substr(0,a[1].length-m[0].length)),SimileAjax.DateTime.setIso8601Time(e,a[1])
}return null==t&&(t=e.getTimezoneOffset()),e.setTime(e.getTime()+6e4*t),e},SimileAjax.DateTime.parseIso8601DateTime=function(e){try{return SimileAjax.DateTime.setIso8601(new Date(0),e)
}catch(i){return null}},SimileAjax.DateTime.parseGregorianDateTime=function(e){if(null==e)return null;
if(e instanceof Date)return e;var i=e.toString();if(i.length>0&&i.length<8){var t=i.indexOf(" ");
if(t>0){var a=parseInt(i.substr(0,t)),m=i.substr(t+1);"bc"==m.toLowerCase()&&(a=1-a)
}else var a=parseInt(i);var T=new Date(0);return T.setUTCFullYear(a),T}try{return new Date(Date.parse(i))
}catch(l){return null}},SimileAjax.DateTime.roundDownToInterval=function(e,i,t,a,m){var T=t*SimileAjax.DateTime.gregorianUnitLengths[SimileAjax.DateTime.HOUR],l=new Date(e.getTime()+T),n=function(e){e.setUTCMilliseconds(0),e.setUTCSeconds(0),e.setUTCMinutes(0),e.setUTCHours(0)
},s=function(e){n(e),e.setUTCDate(1),e.setUTCMonth(0)};switch(i){case SimileAjax.DateTime.MILLISECOND:var r=l.getUTCMilliseconds();
l.setUTCMilliseconds(r-r%a);break;case SimileAjax.DateTime.SECOND:l.setUTCMilliseconds(0);
var r=l.getUTCSeconds();l.setUTCSeconds(r-r%a);break;case SimileAjax.DateTime.MINUTE:l.setUTCMilliseconds(0),l.setUTCSeconds(0);
var r=l.getUTCMinutes();l.setTime(l.getTime()-r%a*SimileAjax.DateTime.gregorianUnitLengths[SimileAjax.DateTime.MINUTE]);
break;case SimileAjax.DateTime.HOUR:l.setUTCMilliseconds(0),l.setUTCSeconds(0),l.setUTCMinutes(0);
var r=l.getUTCHours();l.setUTCHours(r-r%a);break;case SimileAjax.DateTime.DAY:n(l);
break;case SimileAjax.DateTime.WEEK:n(l);var D=(l.getUTCDay()+7-m)%7;l.setTime(l.getTime()-D*SimileAjax.DateTime.gregorianUnitLengths[SimileAjax.DateTime.DAY]);
break;case SimileAjax.DateTime.MONTH:n(l),l.setUTCDate(1);var r=l.getUTCMonth();l.setUTCMonth(r-r%a);
break;case SimileAjax.DateTime.YEAR:s(l);var r=l.getUTCFullYear();l.setUTCFullYear(r-r%a);
break;case SimileAjax.DateTime.DECADE:s(l),l.setUTCFullYear(10*Math.floor(l.getUTCFullYear()/10));
break;case SimileAjax.DateTime.CENTURY:s(l),l.setUTCFullYear(100*Math.floor(l.getUTCFullYear()/100));
break;case SimileAjax.DateTime.MILLENNIUM:s(l),l.setUTCFullYear(1e3*Math.floor(l.getUTCFullYear()/1e3))
}e.setTime(l.getTime()-T)},SimileAjax.DateTime.roundUpToInterval=function(e,i,t,a,m){var T=e.getTime();
SimileAjax.DateTime.roundDownToInterval(e,i,t,a,m),e.getTime()<T&&e.setTime(e.getTime()+SimileAjax.DateTime.gregorianUnitLengths[i]*a)
},SimileAjax.DateTime.incrementByInterval=function(e,i,t){t="undefined"==typeof t?0:t;
var a=t*SimileAjax.DateTime.gregorianUnitLengths[SimileAjax.DateTime.HOUR],m=new Date(e.getTime()+a);
switch(i){case SimileAjax.DateTime.MILLISECOND:m.setTime(m.getTime()+1);break;case SimileAjax.DateTime.SECOND:m.setTime(m.getTime()+1e3);
break;case SimileAjax.DateTime.MINUTE:m.setTime(m.getTime()+SimileAjax.DateTime.gregorianUnitLengths[SimileAjax.DateTime.MINUTE]);
break;case SimileAjax.DateTime.HOUR:m.setTime(m.getTime()+SimileAjax.DateTime.gregorianUnitLengths[SimileAjax.DateTime.HOUR]);
break;case SimileAjax.DateTime.DAY:m.setUTCDate(m.getUTCDate()+1);break;case SimileAjax.DateTime.WEEK:m.setUTCDate(m.getUTCDate()+7);
break;case SimileAjax.DateTime.MONTH:m.setUTCMonth(m.getUTCMonth()+1);break;case SimileAjax.DateTime.YEAR:m.setUTCFullYear(m.getUTCFullYear()+1);
break;case SimileAjax.DateTime.DECADE:m.setUTCFullYear(m.getUTCFullYear()+10);break;
case SimileAjax.DateTime.CENTURY:m.setUTCFullYear(m.getUTCFullYear()+100);break;case SimileAjax.DateTime.MILLENNIUM:m.setUTCFullYear(m.getUTCFullYear()+1e3)
}e.setTime(m.getTime()-a)},SimileAjax.DateTime.removeTimeZoneOffset=function(e,i){return new Date(e.getTime()+i*SimileAjax.DateTime.gregorianUnitLengths[SimileAjax.DateTime.HOUR])
},SimileAjax.DateTime.getTimezone=function(){var e=(new Date).getTimezoneOffset();
return e/-60};