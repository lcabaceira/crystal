Timeline.GregorianDateLabeller.monthNames.vi=["Th�ng 1","Th�ng 2","Th�ng 3","Th�ng 4","Th�ng 5","Th�ng 6","Th�ng 7","Th�ng 8","Th�ng 9","Th�ng 10","Th�ng 11","Th�ng 12"],Timeline.GregorianDateLabeller.labelIntervalFunctions.vi=function(e,n){var i,t=!1,T=Timeline.DateTime.removeTimeZoneOffset(e,this._timeZone);
switch(n){case Timeline.DateTime.DAY:case Timeline.DateTime.WEEK:i=T.getUTCDate()+"/"+(T.getUTCMonth()+1);
break;default:return this.defaultLabelInterval(e,n)}return{text:i,emphasized:t}};
