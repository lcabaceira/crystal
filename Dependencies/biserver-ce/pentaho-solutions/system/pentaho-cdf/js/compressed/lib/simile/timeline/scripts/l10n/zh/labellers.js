Timeline.GregorianDateLabeller.monthNames.zh=["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],Timeline.GregorianDateLabeller.labelIntervalFunctions.zh=function(e,t){var a,i=!1,n=Timeline.DateTime.removeTimeZoneOffset(e,this._timeZone);
switch(t){case Timeline.DateTime.DAY:case Timeline.DateTime.WEEK:a=Timeline.GregorianDateLabeller.getMonthName(n.getUTCMonth(),this._locale)+n.getUTCDate()+"日";
break;default:return this.defaultLabelInterval(e,t)}return{text:a,emphasized:i}};
