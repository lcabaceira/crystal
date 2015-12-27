Timeline.PlanningLabeller=function(e){this._locale=e},Timeline.PlanningLabeller.labels=[],Timeline.PlanningLabeller.prototype.labelInterval=function(e,n){var i=Timeline.PlanningUnit.toNumber(e),l="",a=1,r=7,t=Timeline.PlanningLabeller.labels[this._locale];
switch(n){case Timeline.PlanningUnit.DAY:l=t.dayPrefix;break;case Timeline.PlanningUnit.WEEK:l=t.weekPrefix,a=7,r=4*a;
break;case Timeline.PlanningUnit.MONTH:l=t.monthPrefix,a=28,r=3*a;break;case Timeline.PlanningUnit.QUARTER:l=t.quarterPrefix,a=84,r=4*a;
break;case Timeline.PlanningUnit.YEAR:l=t.yearPrefix,a=336,r=5*a}return{text:l+Math.floor(i/a),emphasized:i%r==0}
},Timeline.PlanningLabeller.prototype.labelPrecise=function(e){return Timeline.PlanningLabeller.labels[this._locale].dayPrefix+Timeline.PlanningUnit.toNumber(e)
};