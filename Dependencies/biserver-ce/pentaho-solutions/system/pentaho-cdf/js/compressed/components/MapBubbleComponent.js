define(["./MapBaseComponent"],function(t){var e=t.extend({update:function(){this.selectedPointDetails=null;
var t=this.dashboard.getParameterValue("mapData");if(t){for(var e=t.length,a=0;e>a;a++)if(this.dashboard.getParameterValue("selectedPoint")==t[a][0]){this.selectedPointDetails=t[a][3];
break}this.selectedPointDetails&&this.updateInfoWindow(this.dashboard.pentahoAction(this.solution,this.path,this.action,this.selectedPointDetails,null))
}}});return e});