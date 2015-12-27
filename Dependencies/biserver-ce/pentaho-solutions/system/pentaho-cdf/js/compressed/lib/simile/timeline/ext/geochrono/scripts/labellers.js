Timeline.GeochronoLabeller=function(e){this._locale=e},Timeline.GeochronoLabeller.eonNames=[],Timeline.GeochronoLabeller.eraNames=[],Timeline.GeochronoLabeller.periodNames=[],Timeline.GeochronoLabeller.epochNames=[],Timeline.GeochronoLabeller.ageNames=[],Timeline.GeochronoLabeller.prototype.labelInterval=function(e,o){var n,i,r=Timeline.GeochronoUnit.toNumber(e);
switch(o){case Timeline.GeochronoUnit.AGE:n=Timeline.Geochrono.ages,i=Timeline.GeochronoLabeller.ageNames;
break;case Timeline.GeochronoUnit.EPOCH:n=Timeline.Geochrono.epoches,i=Timeline.GeochronoLabeller.epochNames;
break;case Timeline.GeochronoUnit.PERIOD:n=Timeline.Geochrono.periods,i=Timeline.GeochronoLabeller.periodNames;
break;case Timeline.GeochronoUnit.ERA:n=Timeline.Geochrono.eras,i=Timeline.GeochronoLabeller.eraNames;
break;case Timeline.GeochronoUnit.EON:n=Timeline.Geochrono.eons,i=Timeline.GeochronoLabeller.eonNames;
break;default:return{text:r,emphasized:!1}}for(var l=n.length-1;l>=0;l--)if(r<=n[l].start)return{text:i[this._locale][l].name,emphasized:r==n[l].start};
return{text:r,emphasized:!1}},Timeline.GeochronoLabeller.prototype.labelPrecise=function(e){return Timeline.GeochronoUnit.toNumber(e)+"ma"
};