define(["./MapBaseComponent"],function(MapBaseComponent){var MapComponent=MapBaseComponent.extend({initMap:!0,update:function(){var div="map";
null!=this.mapDiv&&(div=this.mapDiv);var b_layer_control=!0,b_custom_map=!1,b_use_mercator=!0,str_custom_map="";
0==this.showLayerSelector&&(b_layer_control=this.showLayerSelector),this.showCustomMap&&(b_custom_map="true",str_custom_map=this.customMapCode),0==this.useMercator&&(b_use_mercator="false",this.useMercator="false"),this.showToolTip=1==this.showToolTip?"true":"false",this.initMap&&(this.init_map(div,this.initPosLon,this.initPosLat,this.initZoom,b_use_mercator,b_layer_control,b_custom_map,str_custom_map),this.initMap=!1),this.resetSearch();
for(var p=new Array(this.parameters.length),i=0,len=p.length;len>i;i++){var key=this.parameters[i][0],value=this.dashboard.getParameterValue(this.parameters[i][1]);
p[i]=[key,value]}var myArray=this.parseArray(this.dashboard.pentahoAction(this.solution,this.path,this.action,p,null),!0),len=myArray.length;
if(len>1)for(var cols=myArray[0],colslength=cols.length,data=this.dashboard.getParameterValue("mapData")||new Array,i=1;len>i;i++){var details;
if(colslength>4){details=new Array(colslength-4);for(var j=4;colslength>j;j++)details[j-4]=[cols[j],myArray[i][j]]
}var value=myArray[i][4],markers=this.markers;this.mapExpression=this.expression(),this.mapMarkers=markers;
var icon=eval(this.expression());data.push(new Array(myArray[i][0],new Array(myArray[i][1],myArray[i][2],myArray[i][3]),value,details,null,icon,null,null)),this.dashboard.setParameter("mapData",data),this.search()
}}});return MapComponent});