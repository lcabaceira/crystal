Timeline.GregorianDateLabeller.monthNames.cs=["Leden","�nor","B�ezen","Duben","Kv�ten","�erven","�ervenec","Srpen","Z���","��jen","Listopad","Prosinec"],Timeline.GregorianDateLabeller.dayNames.cs=["Ne","Po","�t","St","�t","P�","So"],Timeline.GregorianDateLabeller.labelIntervalFunctions.cs=function(e,n){var t,a=!1,i=Timeline.DateTime.removeTimeZoneOffset(e,this._timeZone);
switch(n){case Timeline.DateTime.DAY:case Timeline.DateTime.WEEK:t=i.getUTCDate()+". "+(i.getUTCMonth()+1)+".";
break;default:return this.defaultLabelInterval(e,n)}return{text:t,emphasized:a}};
