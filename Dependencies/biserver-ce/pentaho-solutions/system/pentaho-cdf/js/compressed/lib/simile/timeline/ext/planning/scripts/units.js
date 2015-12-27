Timeline.PlanningUnit=new Object,Timeline.PlanningUnit.DAY=0,Timeline.PlanningUnit.WEEK=1,Timeline.PlanningUnit.MONTH=2,Timeline.PlanningUnit.QUARTER=3,Timeline.PlanningUnit.YEAR=4,Timeline.PlanningUnit.getParser=function(){return Timeline.PlanningUnit.parseFromObject
},Timeline.PlanningUnit.createLabeller=function(n){return new Timeline.PlanningLabeller(n)
},Timeline.PlanningUnit.makeDefaultValue=function(){return 0},Timeline.PlanningUnit.cloneValue=function(n){return n
},Timeline.PlanningUnit.parseFromObject=function(n){if(null==n)return null;if("number"==typeof n)return n;
try{return parseInt(n)}catch(i){return null}},Timeline.PlanningUnit.toNumber=function(n){return n
},Timeline.PlanningUnit.fromNumber=function(n){return n},Timeline.PlanningUnit.compare=function(n,i){return n-i
},Timeline.PlanningUnit.earlier=function(n,i){return Timeline.PlanningUnit.compare(n,i)<0?n:i
},Timeline.PlanningUnit.later=function(n,i){return Timeline.PlanningUnit.compare(n,i)>0?n:i
},Timeline.PlanningUnit.change=function(n,i){return n+i};