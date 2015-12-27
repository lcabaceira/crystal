Timeline.GregorianDateLabeller.monthNames.de=["Jan","Feb","Mrz","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],Timeline.GregorianDateLabeller.labelIntervalFunctions.de=function(e,t){var a,i=!1,n=Timeline.DateTime.removeTimeZoneOffset(e,this._timeZone);
switch(t){case Timeline.DateTime.DAY:case Timeline.DateTime.WEEK:a=n.getUTCDate()+". "+Timeline.GregorianDateLabeller.getMonthName(n.getUTCMonth(),this._locale);
break;default:return this.defaultLabelInterval(e,t)}return{text:a,emphasized:i}};
