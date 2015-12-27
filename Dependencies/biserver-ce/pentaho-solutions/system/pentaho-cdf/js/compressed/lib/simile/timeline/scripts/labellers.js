Timeline.GregorianDateLabeller=function(e,a){this._locale=e,this._timeZone=a},Timeline.GregorianDateLabeller.monthNames=[],Timeline.GregorianDateLabeller.dayNames=[],Timeline.GregorianDateLabeller.labelIntervalFunctions=[],Timeline.GregorianDateLabeller.getMonthName=function(e,a){return Timeline.GregorianDateLabeller.monthNames[a][e]
},Timeline.GregorianDateLabeller.prototype.labelInterval=function(e,a){var i=Timeline.GregorianDateLabeller.labelIntervalFunctions[this._locale];
return null==i&&(i=Timeline.GregorianDateLabeller.prototype.defaultLabelInterval),i.call(this,e,a)
},Timeline.GregorianDateLabeller.prototype.labelPrecise=function(e){return SimileAjax.DateTime.removeTimeZoneOffset(e,this._timeZone).toUTCString()
},Timeline.GregorianDateLabeller.prototype.defaultLabelInterval=function(e,a){var i,t=!1;
switch(e=SimileAjax.DateTime.removeTimeZoneOffset(e,this._timeZone),a){case SimileAjax.DateTime.MILLISECOND:i=e.getUTCMilliseconds();
break;case SimileAjax.DateTime.SECOND:i=e.getUTCSeconds();break;case SimileAjax.DateTime.MINUTE:var l=e.getUTCMinutes();
0==l?(i=e.getUTCHours()+":00",t=!0):i=l;break;case SimileAjax.DateTime.HOUR:i=e.getUTCHours()+"hr";
break;case SimileAjax.DateTime.DAY:i=Timeline.GregorianDateLabeller.getMonthName(e.getUTCMonth(),this._locale)+" "+e.getUTCDate();
break;case SimileAjax.DateTime.WEEK:i=Timeline.GregorianDateLabeller.getMonthName(e.getUTCMonth(),this._locale)+" "+e.getUTCDate();
break;case SimileAjax.DateTime.MONTH:var l=e.getUTCMonth();if(0!=l){i=Timeline.GregorianDateLabeller.getMonthName(l,this._locale);
break}case SimileAjax.DateTime.YEAR:case SimileAjax.DateTime.DECADE:case SimileAjax.DateTime.CENTURY:case SimileAjax.DateTime.MILLENNIUM:var r=e.getUTCFullYear();
i=r>0?e.getUTCFullYear():1-r+"BC",t=a==SimileAjax.DateTime.MONTH||a==SimileAjax.DateTime.DECADE&&r%100==0||a==SimileAjax.DateTime.CENTURY&&r%1e3==0;
break;default:i=e.toUTCString()}return{text:i,emphasized:t}};