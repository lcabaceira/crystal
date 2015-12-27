define(["./BaseComponent","../lib/jquery","../lib/OpenLayers","../lib/OpenStreetMap"],function(BaseComponent,$,OpenLayers){var MapBaseComponent=BaseComponent.extend({map:null,slayer:null,layerMapnik:null,layerTah:null,center_point:null,markers:null,show_layer_control:null,popup:null,feature:null,marker:null,zoom_level:null,show_custom_map:null,custom_map_code:null,use_mercator:!1,lonLatToMercator:function(e){var a=20037508.34*e.lon/180,t=Math.log(Math.tan((90+e.lat)*Math.PI/360))/(Math.PI/180);
return t=20037508.34*t/180,new OpenLayers.LonLat(a,t)},init_map:function(e,a,t,r,n,o,s,l){map_div=e,oDiv=document.getElementById(map_div),oDiv&&(oDiv.innerHTML="",center_lon=a,center_lat=t,show_layer_control=o,zoom_level=r,use_mercator=n,center_point="true"==use_mercator?lonLatToMercator(new OpenLayers.LonLat(a,t)):new OpenLayers.LonLat(a,t),show_custom_map=s,custom_map_code=l,this.show_map(zoom_level),"true"==o&&this.show_layers())
},show_map:function(){var map=this.map;"true"==show_custom_map?eval(custom_map_code):(map=new OpenLayers.Map(map_div,{maxExtent:new OpenLayers.Bounds(-20037508,-20037508,20037508,20037508),numZoomLevels:18,maxResolution:156543,units:"m",projection:"EPSG:41001"}),layer=new OpenLayers.Layer.TMS("OpenStreetMap","http://tile.openstreetmap.org/",{type:"png",getURL:this.osm_getTileURL,transparent:"true",displayOutsideMaxExtent:!0}),map.addLayer(layer)),markers=new OpenLayers.Layer.Markers("Markers"),map.addLayer(markers),map.setCenter(center_point,zoom_level),this.map=map
},add_marker:function(){},delete_marker:function(){},change_marker:function(){},show_bubble:function(e){var a=this.popup;
null!=a&&(markers.map.removePopup(a),a.destroy(),a=null);var t=this.dashboard.getParameterValue("mapLonLat");
feature=new OpenLayers.Feature(markers,t),feature.popupClass=OpenLayers.Popup.FramedCloud,a=feature.createPopup(!0),a.setContentHTML(e),markers.map.addPopup(a),this.popup=a
},show_positon:function(){this.map.addControl(new OpenLayers.Control.MousePosition)
},show_layers:function(){this.map.addControl(new OpenLayers.Control.LayerSwitcher)
},osm_getTileURL:function(e){var a=this.map.getResolution(),t=Math.round((e.left-this.maxExtent.left)/(a*this.tileSize.w)),r=Math.round((this.maxExtent.top-e.top)/(a*this.tileSize.h)),n=this.map.getZoom(),o=Math.pow(2,n);
return 0>r||r>=o?OpenLayers.Util.getImagesLocation()+"404.png":(t=(t%o+o)%o,this.url+n+"/"+t+"/"+r+"."+this.type)
},markers:null,dataIdx:0,messageElementId:null,selectedPointDetails:null,mapExpression:null,useMercator:"true",showToolTip:"true",ttips:null,search:function(e,a){var t=e||this,r=t.dashboard.getParameterValue("mapData"),a=a||r.length-1,n=r[a][1],o=n[0],s=n[1],l=n[2];
if(""!=o&&""!=s)return t.getLocation({totalResultsCount:1,geonames:[{lat:o,lng:s}]});
var i="http://nominatim.openstreetmap.org/search",r={format:"json",limit:"1",q:l},m=function(e){var a;
a=e&&e.length>0?{totalResultsCount:e.length,geonames:[{lng:e[0].lon,lat:e[0].lat}]}:{totalResultsCount:0,geonames:[]},t.getLocation(a)
};$.getJSON(i,r,m)},resetSearch:function(){this.map&&(this.map.removeLayer(markers),markers.destroy(),markers=new OpenLayers.Layer.Markers("Markers"),this.map.addLayer(markers)),this.cleanMessages(),this.dashboard.setParameter("mapData",new Array),this.dataIdx=0
},getLocation:function(e){var a=this,t=a.dashboard.getParameterValue("mapData"),r=t[a.dataIdx];
if(null==e||0==e.totalResultsCount){var n=r[0];a.addMessage(n)}else{{var o=e.geonames[0],s=r[4];
r[5]}r[6]=o.lng,r[7]=o.lat;var s=a.showMarker(s,r);r[4]=s,t[a.dataIdx]=r,a.dashboard.setParameter("mapData",t),a.dataIdx++
}if(a.dataIdx>=t.length&&a.dataIdx>0){var l=markers.getDataExtent();a.map.zoomToExtent(l)
}a.dataIdx>=t.length&&1==a.dataIdx&&a.map.setCenter(markers.markers[0].lonlat,4,!1,!1)
},showMarker:function(e,a){var t,r,n=this,o=a[6],s=a[7];if(a[5]instanceof Array){var l=a[5];
t=l[0],r=new OpenLayers.Size(l[1],l[2])}else t=a[5],r=new OpenLayers.Size(21,25);
var i=new OpenLayers.Pixel(-(r.w/2),-r.h),m=new OpenLayers.Icon(t,r,i);return"true"==n.useMercator?(marker=new OpenLayers.Marker(n.lonLatToMercator(new OpenLayers.LonLat(o,s)),m),feature=new OpenLayers.Feature(markers,n.lonLatToMercator(new OpenLayers.LonLat(o,s)),a)):(marker=new OpenLayers.Marker(new OpenLayers.LonLat(o,s),m),feature=new OpenLayers.Feature(markers,new OpenLayers.LonLat(o,s),a)),feature.marker=marker,marker.events.register("mousedown",feature,function(){n.dashboard.setParameter("mapLonLat",this.lonlat),"true"==n.showToolTip&&n.ttips.hide(),n.dashboard.fireChange("selectedPoint",this.data[0])
}),"true"==n.showToolTip&&(marker.events.register("mouseover",feature,function(){n.ttips.show({html:this.data[0]+": "+this.data[2]})
}),marker.events.register("mouseout",feature,function(){n.ttips.hide()}),n.ttips=new OpenLayers.Control.ToolTips({bgColor:"black",textColor:"white",bold:!0,opacity:.5}),n.map.addControl(n.ttips)),markers.addMarker(marker),marker
},updateInfoWindow:function(e){null!=e&&this.show_bubble($(e).text())},updateMap:function(){var data=this.dashboard.getParameterValue("mapData"),L=data.length,idx;
for(idx=0;L>idx;idx++){var value=data[idx][2],markers=this.mapMarkers,icon=eval(this.mapExpression),marker=data[idx][4];
data[idx][5]=icon,data[idx][4]=this.showMarker(marker,data[idx])}},addMessage:function(e){var a=this.messageElementId;
void 0!=a&&(document.getElementById(a).innerHTML=document.getElementById(a).innerHTML+e+"\n <br />")
},cleanMessages:function(){var e=this.messageElementId;if(void 0!=e&&a){var a=document.getElementById(e);
a&&(a.innerHTML="")}}});return MapBaseComponent});