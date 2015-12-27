define("cde/components/MapEngine",["cdf/lib/Base","cdf/Logger","cdf/lib/jquery","amd!cdf/lib/underscore"],function(e,t,a,n){var r=e.extend({tileServices:void 0,tileServicesOptions:void 0,tileLayer:function(){},renderMap:function(){},updateViewport:function(){},setMarker:function(){},showPopup:function(){},setShape:function(){},postSetShapes:function(){},toNativeStyle:function(e){var t={};
return n.each(e,function(e,t){switch(t){case"visible":case"zIndex":case"fillColor":case"fillOpacity":case"strokeColor":case"strokeOpacity":case"strokeWidth":}}),t
},wrapEvent:function(e,t){return{latitude:void 0,longitude:void 0,data:void 0,feature:void 0,featureType:t,style:void 0,mapEngineType:"abstract",draw:function(){},raw:void 0}
},_selectUrl:function(e,t){for(var a=1,n=(Math.sqrt(5)-1)/2,r=0,i=e.length;i>r;r++)a*=e.charCodeAt(r)*n,a-=Math.floor(a);
return t[Math.floor(a*t.length)]},_switchUrl:function(e){var t=e.match(/(http[s]?:\/\/[0-9a-z.]*?)\{switch:([a-z0-9,]+)\}(.*)/);
if(!t||0==t.length)return e;for(var a=t[2].split(","),n=[],r=0;r<a.length;r++)n.push(t[1]+a[r]+t[3]);
return n},_getTileServiceURL:function(e){var t=this.tileServices[e];return t||e.length>0&&e.indexOf("{")>-1&&(t=e),t
}});return r}),define("cde/components/MapComponentAsyncLoader",["cdf/lib/jquery"],function(e){var t=function(e){var t,a=e.now();
return function(n,r){if(t)return t;var i,o=e.Deferred(),s=function(){o.resolve(window.google&&google.maps?google.maps:!1)
},p="loadGoogleMaps_"+a++;return window.google&&google.maps?s():window.google&&google.load?google.load("maps",n||3,{other_params:"sensor=false",callback:s}):(i=e.extend({v:n||3,sensor:!1,callback:p},r?{key:r}:{}),window[p]=function(){s(),setTimeout(function(){try{delete window[p]
}catch(e){}},20)},e.ajax({dataType:"script",data:i,url:"http://maps.googleapis.com/maps/api/js"})),t=o.promise()
}}(e);return t}),define("cde/components/GoogleMapEngine",["cdf/lib/jquery","amd!cdf/lib/underscore","./MapEngine","./MapComponentAsyncLoader"],function(e,t,a,n){function r(e,t,a,n,r,i,o){this.startPoint_=e,this.width_=t,this.height_=a,this.map_=i,this.htmlContent_=n,this.popupContentDiv_=r,this.borderColor_=o,this.div_=null,this.setMap(i)
}function i(){function e(){function e(e){var t={latitude:e.lat(),longitude:e.lng()};
return t}function t(t){a=t?{northEast:e(t.getNorthEast()),southWest:e(t.getSouthWest())}:{northEast:{},southWest:{}}
}var a=t(this.map.getBounds()),n={zoomLevel:this.map.getZoom(),center:e(this.map.getCenter()||new google.maps.LatLng),viewport:a,raw:this.map};
return n}var a=this,n={zoom_changed:"map:zoom",center_changed:"map:center"};t.each(n,function(t,n){google.maps.event.addListener(a.map,n,function(){var n=e.call(a);
a.mapComponent.trigger.call(a.mapComponent,t,n)})})}var o=a.extend({map:void 0,centered:!1,overlays:[],API_KEY:!1,selectedFeature:void 0,init:function(t,a){this.tilesets=a,this.mapComponent=t,e.when(n("3",this.API_KEY)).then(function(){r.prototype=new google.maps.OverlayView,r.prototype.onAdd=function(){var t=document.createElement("DIV");
t.id="MapOverlay",t.style.position="absolute",t.style.border=this.borderColor_?"3px solid "+this.borderColor_:"none",this.popupContentDiv_&&this.popupContentDiv_.length>0?e(t).append(e("#"+this.popupContentDiv_)):t.innerHTML=this.htmlContent_,this.div_=t;
var a=this.getPanes();a.overlayLayer.appendChild(t)},r.prototype.draw=function(){var e=this.getProjection(),t=e.fromLatLngToDivPixel(this.startPoint_),a=this.div_;
a.style.left=t.x+"px",a.style.top=t.y+30+"px",a.style.width=this.width_+"px",a.style.height=this.height_+"px"
},r.prototype.onRemove=function(){this.popupContentDiv_,this.div_.style.display="none"
},t.initCallBack()})},toNativeStyle:function(e){var a={};return t.each(e,function(e,t){switch(t){case"strokeWidth":a.strokeWeight=e;
break;case"zIndex":case"visible":case"fillColor":case"fillOpacity":case"strokeColor":case"strokeOpacity":a[t]=e
}}),a},wrapEvent:function(e,a,n,r,i){var o=this;return{latitude:e.latLng.lat(),longitude:e.latLng.lng(),data:i,feature:a,featureType:n,style:t.clone(r),marker:a.marker,mapEngineType:"google3",draw:function(e){var n=o.toNativeStyle(e);
a.setOptions(n),a.setVisible(!1),a.setVisible(t.has(e,"visible")?!!e.visible:!0)},setSelectedStyle:function(e){a.selStyle=e
},getSelectedStyle:function(){return a.selStyle},isSelected:function(){return o.selectedFeature&&o.selectedFeature[0]===i.key
},raw:e}},setShape1:function(e){this.map.data.addGeoJson(e)},setShape:function(e,a,n){function r(e,a,n,r,i){t.each(n,function(t){o.mapComponent.trigger(e,o.wrapEvent(a,t,"shape",r,i))
})}if(e){var i,o=this;switch(e.geometry.type){case"MultiPolygon":i=e.geometry.coordinates;
break;case"Polygon":i=[e.geometry.coordinates];break;case"LineString":i=[[e.geometry.coordinates]];
break;default:return}var e=t.map(i,function(e){var n=t.map(e,function(e){return t.map(e,function(e){return new google.maps.LatLng(e[1],e[0])
})}),r=new google.maps.Polygon(t.extend({paths:n},o.toNativeStyle(a)));return r.setMap(o.map),r
});t.each(e,function(t){google.maps.event.addListener(t,"click",function(t){o.unselectPrevShape(n.key,e,a),r("shape:click",t,e,a,n)
}),google.maps.event.addListener(t,"mousemove",function(t){r("shape:mouseover",t,e,a,n)
}),google.maps.event.addListener(t,"mouseout",function(t){r("shape:mouseout",t,e,a,n)
})})}},postSetShapes:function(){},unselectPrevShape:function(e,a,n){var r=this,i=this.selectedFeature;
if(i&&i[0]!==e){var o=i[1],s=i[2];t.each(o,function(e){var a=r.toNativeStyle(s);e.setOptions(a),e.setVisible(!1),e.setVisible(t.has(s,"visible")?!!s.visible:!0)
})}this.selectedFeature=[e,a,n]},setMarker:function(e,t,a,n,r,i,o,s){var p=new google.maps.LatLng(t,e),l=new google.maps.MarkerImage(a,new google.maps.Size(i,o),new google.maps.Point(0,0),new google.maps.Point(0,0)),c=new google.maps.Marker({marker:s,position:p,map:this.map,icon:l,title:n}),h=this;
google.maps.event.addListener(c,"click",function(e){h.mapComponent.trigger("marker:click",h.wrapEvent(e,c,"marker",s,r))
})},renderMap:function(e){for(var a={mapTypeId:google.maps.MapTypeId.ROADMAP},n=[],r=[],o=[],s=0;s<this.tilesets.length;s++){var p=this.tilesets[s].slice(0);
r.push(p),o.push(t.extend(a,{mapTypeId:p})),this.tileServices[p]?n.push(this.tileLayer(p)):n.push("")
}for(this.map=new google.maps.Map(e,{mapTypeControlOptions:{mapTypeIds:r.concat(t.values(google.maps.MapTypeId))}}),s=0;s<n.length;s++)t.isEmpty(n[s])||(this.map.mapTypes.set(r[s],n[s]),this.map.setMapTypeId(r[s]),this.map.setOptions(o[s]));
i.call(this)},updateViewport:function(e,a,n){n||(n=2),this.map.setZoom(n);var r;t.isFinite(a)&&t.isFinite(e)?(r=new google.maps.LatLng(a,e),this.centered=!0,this.map.panTo(r)):this.map.panTo(new google.maps.LatLng(38,-9))
},tileLayer:function(e){var a=t.extend({tileSize:new google.maps.Size(256,256),minZoom:1,maxZoom:19},this.tileServicesOptions[e]||{}),n=this._switchUrl(this._getTileServiceURL(e)),r=this;
return new google.maps.ImageMapType(t.defaults({name:e.indexOf("/")>=0?"custom":e,getTileUrl:function(e,a){var i=Math.pow(2,a);
if(e.y<0||e.y>=i)return"404.png";e.x=(e.x%i+i)%i;var o;if(t.isArray(n)){var s=t.template("${z}/${x}/${y}",{x:e.x,y:e.y,z:a},{interpolate:/\$\{(.+?)\}/g});
o=r._selectUrl(s,n)}else o=n;return t.template(o,{x:e.x,y:e.y,z:a},{interpolate:/\$\{(.+?)\}/g})
}},a))},showPopup:function(e,a,n,i,o,s,p){var l=new r(a.getPosition(),i,n,o,s,this.map,p);
t.each(this.overlays,function(e){e.setMap(null)}),this.overlays.push(l)}});return o
}),define("cde/components/OpenLayersEngine",["./MapEngine","./MapComponentAsyncLoader","cdf/Logger","cdf/lib/jquery","amd!cdf/lib/underscore","cdf/lib/OpenLayers","cdf/lib/OpenStreetMap"],function(e,t,a,n,r,i){function o(){function e(e){var t=this.map.getProjectionObject(),a=new i.Projection("EPSG:4326"),n=function(e){var n;
if(e){var r=e.clone().transform(t,a);n={latitude:r.lat,longitude:r.lon}}else n={latitude:void 0,longitude:void 0};
return n},r=e.object.getExtent(),o={northEast:{},southWest:{}};if(r){var s=r.transform(t,a);
o={northEast:{latitude:s.top,longitude:s.right},southWest:{latitude:s.bottom,longitude:s.left}}
}var p={zoomLevel:e.object.getZoom(),center:n(e.object.center),viewport:o,raw:e};
return p}var t=this,a={zoomend:"map:zoom",movestart:"map:center"};r.each(a,function(a,n){t.map.events.register(n,t.map,function(n){var r=e.call(t,n);
t.mapComponent.trigger.call(t.mapComponent,a,r)})})}var s=e.extend({map:void 0,markers:void 0,shapes:void 0,API_KEY:0,init:function(e,t){this.tilesets=t,this.mapComponent=e,a.log("Requested tilesets:"+JSON.stringify(t),"debug");
var i=function(e){return r.some(t,function(t){return t.search(e)>=0})};i("googleXXX")?n.when(loadGoogleMaps("3",this.API_KEY)).then(e.initCallBack):e.initCallBack()
},setShape:function(e,t,a){if(e){var r=this._geoJSONParser.parseFeature(e);n.extend(!0,r,{attributes:{data:a,style:t},data:{data:a,style:t},style:this.toNativeStyle(t)}),this.shapes.addFeatures([r])
}},postSetShapes:function(){},toNativeStyle:function(e){var t={};return r.each(e,function(e,a){switch(a){case"visible":t.display=e?!0:"none";
break;case"zIndex":t.graphicZIndex=e;break;case"fillColor":case"fillOpacity":case"strokeColor":case"strokeOpacity":case"strokeWidth":t[a]=e
}}),t},wrapEvent:function(e,t){var a,n=this.map.getControlsByClass("OpenLayers.Control.MousePosition")[0].lastXy;
a=n?this.map.getLonLatFromPixel(n).transform(this.map.getProjectionObject(),new i.Projection("EPSG:4326")):{lat:void 0,lon:void 0};
var r=e.feature.layer.getFeatureById(e.feature.id),o=this;return{latitude:a.lat,longitude:a.lon,data:e.feature.attributes.data,feature:r,featureType:t,style:e.feature.attributes.style,marker:e.feature.attributes.marker,mapEngineType:"openlayers2",draw:function(t){var a=o.toNativeStyle(t);
e.feature.layer.drawFeature(r,a)},setSelectedStyle:function(t){e.feature.attributes.clickSelStyle=t
},getSelectedStyle:function(){return e.feature.attributes.clickSelStyle},isSelected:function(){return e.feature==e.feature.layer.selectedFeatures[0]
},raw:e}},setMarker:function(e,t,a,n,r,o,s,p){var l,c=new i.Size(o,s),h=new i.Pixel(-(c.w/2),-c.h),d=(new i.Icon(a,c,h),new i.Projection("EPSG:4326")),u=this.map.getProjectionObject(),m=new i.LonLat(e,t).transform(d,u),g=new i.Geometry.Point(m.lon,m.lat),f=new i.Feature.Vector(g,{data:r,style:l,marker:p},{externalGraphic:a,graphicWidth:o,graphicHeight:s,fillOpacity:1});
this.markers.addFeatures([f])},showPopup:function(e,t,a,o,s,p,l){var c=t;if(p&&p.length>0){var h=n("<div/>");
h.append(n("#"+p)),s=h.html()}var d="featurePopup";void 0!=l&&(d+=l.substring(1));
var u=t.geometry.getCentroid();c.lonlat=new i.LonLat(u.x,u.y);var m=new i.Popup.Anchored(d,c.lonlat,new i.Size(o,a),s,null,!0,null);
c.popup=m,m.feature=c,r.each(this.map.popups,function(e){e.hide()}),this.map.addPopup(m,!0)
},renderMap:function(e){var t=new i.Projection("EPSG:900913"),n=new i.Projection("EPSG:4326"),r={zoomDuration:10,displayProjection:n,projection:t,controls:[new i.Control.Navigation,new i.Control.ZoomPanel,new i.Control.DragPan,new i.Control.PinchZoom,new i.Control.LayerSwitcher({ascending:!1}),new i.Control.ScaleLine,new i.Control.KeyboardDefaults,new i.Control.MousePosition,new i.Control.Attribution,new i.Control.TouchNavigation]};
i.TileManager&&(r.tileManager=new i.TileManager),this.map=new i.Map(e,r);for(var o,s=0,p=this.tilesets.length;p>s;s++){var l=this.tilesets[s],c=this.tilesets[s].slice(0).split("-")[0],h=this.tilesets[s].slice(0).split("-").slice(1).join("-")||"default";
switch(a.log("Tilesets: "+JSON.stringify(this.tilesets)+", handling now :"+l+", ie tileset "+c+", variant "+h),c){case"googleXXX":o=new i.Layer.Google("Google Streets",{visibility:!0,version:"3"});
break;case"opengeo":o=new i.Layer.WMS(l,"http://maps.opengeo.org/geowebcache/service/wms",{layers:h,bgcolor:"#A1BDC4"},{wrapDateLine:!0,transitionEffect:"resize"});
break;default:o=this.tileLayer(l)}this.map.addLayer(o)}this.shapes=new i.Layer.Vector("Shapes",{rendererOptions:{zIndexing:!0}}),this.shapes.styleMap=new i.StyleMap({"default":{graphicZIndex:0},select:{graphicZIndex:1}}),this.markers=new i.Layer.Vector("Markers"),this.map.addLayers([this.shapes,this.markers]),this.setCallbacks(),this._geoJSONParser=new i.Format.GeoJSON({ignoreExtraDims:!0,internalProjection:this.map.getProjectionObject(),externalProjection:n})
},updateViewport:function(e,t,a){var n=new i.Bounds,o=this.markers.getDataExtent(),s=this.shapes.getDataExtent();
o||s?(n.extend(o),n.extend(s)):n=null,r.isFinite(a)?this.map.zoomTo(a):n?this.map.zoomToExtent(n):this.map.zoomTo(2);
var p,l=new i.Projection("EPSG:4326");r.isFinite(t)&&r.isFinite(e)?(p=new i.LonLat(e,t).transform(l,this.map.getProjectionObject()),this.map.setCenter(p)):n||(p=new i.LonLat(-10,20).transform(l,this.map.getProjectionObject()),this.map.setCenter(p))
},setCallbacks:function(){function e(e){var a;a="Shapes"==e.feature.layer.name?"shape":"marker";
var n={featurehighlighted:"mouseover",featureunhighlighted:"mouseout",featureselected:"click"};
n[e.type]&&t.mapComponent.trigger(a+":"+n[e.type],t.wrapEvent(e))}var t=this;o.call(this);
var a=new i.Control.SelectFeature([this.markers,this.shapes],{hover:!0,highlightOnly:!0,renderIntent:"temporary",eventListeners:{featurehighlighted:e,featureunhighlighted:e,featureselected:e},outFeature:function(e){if(this.hover)if(this.highlightOnly)if(e._lastHighlighter==this.id)if(e._prevHighlighter&&e._prevHighlighter!=this.id){delete e._lastHighlighter;
var t=this.map.getControl(e._prevHighlighter);t&&(t.highlight(e),this.events.triggerEvent("featureunhighlighted",{feature:e}))
}else this.unhighlight(e);else this.events.triggerEvent("featureunhighlighted",{feature:e});
else this.unselect(e)}});this.map.addControl(a),a.activate();var n=new i.Control.SelectFeature([this.markers,this.shapes],{clickout:!1});
this.map.addControl(n),n.activate(),this.markers.events.on({featurehighlighted:function(e){t.mapComponent.trigger("marker:mouseover",t.wrapEvent(e))
},featureunhighlighted:function(e){t.mapComponent.trigger("marker:mouseout",t.wrapEvent(e))
},featureselected:function(e){t.mapComponent.trigger("marker:click",t.wrapEvent(e)),n.unselectAll()
}}),this.shapes.events.on({featureselected:function(e){t.mapComponent.trigger("shape:click",t.wrapEvent(e))
}})},tileLayer:function(e){var t=this._getTileServiceURL(e),a=r.extend({transitionEffect:"resize"},this.tileServicesOptions[e]||{});
return new i.Layer.XYZ(e,this._switchUrl(t),r.extend({},a))}});return s}),define("cde/components/addIns/LocationResolver/geonames/geonames",["cdf/AddIn","cdf/Dashboard.Clean","cdf/lib/jquery"],function(e,t,a){var n=new e({name:"geonames",label:"GeoNames",defaults:{username:""},implementation:function(e,t,n){var r,i,o=t.address;
o||(t.city?(o=t.city,i="P"):t.county?(o=t.county,i="A"):t.region?(o=t.region,i="A"):t.state?(o=t.state,i="A"):t.country&&(o=t.country,i="A"));
var s="http://ws.geonames.org/searchJSON",p={q:o.replace(/&/g,","),maxRows:1,dataType:"json",username:n.username,featureClass:i};
i&&(p.featureClass=i);var l=function(e){e.geonames&&e.geonames.length>0&&(r=[parseFloat(e.geonames[0].lng),parseFloat(e.geonames[0].lat)],t.continuationFunction(r))
};a.getJSON(s,p,l)}});return t.registerGlobalAddIn("NewMapComponent","LocationResolver",n),n
}),define("cde/components/addIns/LocationResolver/nominatim/nominatim",["cdf/AddIn","cdf/Dashboard.Clean","cdf/lib/jquery","amd!cdf/lib/underscore"],function(e,t,a,n){var r=new e({name:"openstreetmap",label:"OpenStreetMap",defaults:{url:"http://nominatim.openstreetmap.org/search",serviceParams:{format:"json",limit:"1"},mapping:{street:"street",postalcode:"postalcode",city:"city",county:"county",state:"state",country:"country"}},implementation:function(e,t,r){if(t.latitude||t.longitude){var i=[parseFloat(t.longitude),parseFloat(t.latitude)];
return t.continuationFunction(i),void 0}var o=a.extend(!0,{},r.serviceParams);n.each(n.keys(t),function(e){if(!n.isFunction(t[e])){var a=e.toLowerCase();
a in r.mapping&&(o[r.mapping[a]]=t[e])}}),o.q&&(o={q:o.q+", "+n.compact(n.map(r.mapping,function(e){return o[e]
})).join(", ")});var s=function(e){if(e&&e.length>0){var a=[parseFloat(e[0].lon),parseFloat(e[0].lat)];
t.continuationFunction(a)}};a.getJSON(r.url,a.extend({},r.serviceParams,o),s)}});
return t.registerGlobalAddIn("NewMapComponent","LocationResolver",r),r}),define("cde/components/addIns/LocationResolver/mapquest/mapquest",["cdf/AddIn","cdf/Dashboard.Clean","cdf/lib/jquery","amd!cdf/lib/underscore"],function(e,t,a,n){var r={name:"openstreetmap",label:"OpenStreetMap",defaults:{url:"http://nominatim.openstreetmap.org/search",serviceParams:{format:"json",limit:"1"},mapping:{street:"street",postalcode:"postalcode",city:"city",county:"county",state:"state",country:"country"}},implementation:function(e,t,r){if(t.latitude||t.longitude){var i=[parseFloat(t.longitude),parseFloat(t.latitude)];
return t.continuationFunction(i),void 0}var o=a.extend(!0,{},r.serviceParams);n.each(n.keys(t),function(e){if(!n.isFunction(t[e])){var a=e.toLowerCase();
a in r.mapping&&(o[r.mapping[a]]=t[e])}}),o.q&&(o={q:o.q+", "+n.compact(n.map(r.mapping,function(e){return o[e]
})).join(", ")});var s=function(e){if(e&&e.length>0){var a=[parseFloat(e[0].lon),parseFloat(e[0].lat)];
t.continuationFunction(a)}};a.getJSON(r.url,a.extend({},r.serviceParams,o),s)}},i={};
return a.extend(!0,i,r,{name:"mapquest",label:"MapQuest",defaults:{url:"http://open.mapquestapi.com/nominatim/v1/search"}}),i=new e(i),t.registerGlobalAddIn("NewMapComponent","LocationResolver",i),i
}),define("cdf/components/CggComponent.ext",[],function(){var e={getCggDrawUrl:function(){return CONTEXT_PATH+"plugin/cgg/api/services/draw"
}};return e}),define("cde/components/addIns/MarkerImage/cggMarker/cggMarker",["cdf/AddIn","cdf/Dashboard.Clean","cdf/components/CggComponent.ext"],function(e,t,a){var n=new e({name:"cggMarker",label:"CGG Marker",defaults:{},implementation:function(e,n){var r=a.getCggDrawUrl()+"?script="+n.cggGraphName,i=(n.width,n.height,{});
n.width&&(i.width=n.width),n.height&&(i.height=n.height),i.noChartBg=!0;var o;for(o in n.parameters)i[o]=n.parameters[o];
var s=t.debug;s>1&&(i.debug=!0,i.debugLevel=s);for(o in i)void 0!==i[o]&&(r+="&param"+o+"="+encodeURIComponent(i[o]));
return r}});return t.registerGlobalAddIn("NewMapComponent","MarkerImage",n),n}),define("cde/components/NewMapComponentExt",[],function(){var e={getMarkerImgPath:function(){return CONTEXT_PATH+"api/repos/pentaho-cdf-dd/resources/custom/amd-components/NewMapComponent/images/"
}};return e}),define("cde/components/addIns/MarkerImage/urlMarker/urlMarker",["cdf/AddIn","cdf/Dashboard.Clean","../../../NewMapComponentExt"],function(e,t,a){var n=new e({name:"urlMarker",label:"Url Marker",defaults:{defaultUrl:a.getMarkerImgPath()+"marker_grey.png",imagePath:a.getMarkerImgPath(),images:["marker_grey.png","marker_blue.png","marker_grey02.png","marker_orange.png","marker_purple.png"]},implementation:function(e,t,a){return t.url?t.url:t.position?a.imagePath+a.images[t.position%a.images.length]||a.defaultUrl:a.defaultUrl
}});return t.registerGlobalAddIn("NewMapComponent","MarkerImage",n),n}),define("cde/components/addIns/ShapeResolver/simpleJSON",["cdf/AddIn","cdf/Dashboard.Clean","cdf/lib/jquery","amd!cdf/lib/underscore"],function(e,t,a,n){function r(e){var t=n.map(e,function(e){return n.map(e,function(e){return n.map(e,function(e){return e.reverse()
})})});return t}var i={name:"simpleJSON",label:"Simple JSON shape resolver",defaults:{url:""},implementation:function(e,t,i){var o=a.Deferred(),s=i.url||t._shapeSource;
return s?a.ajax(s,{async:!0,type:"GET",dataType:"json",success:function(e){var t=n.chain(e).map(function(e,t){return[t,r(e)]
}).object().value();o.resolve(t)},error:function(){o.resolve({})}}):o.resolve(null),o.promise()
}};t.registerGlobalAddIn("NewMapComponent","ShapeResolver",new e(i))}),define("cde/components/addIns/ShapeResolver/kml",["cdf/AddIn","cdf/Dashboard.Clean","cdf/lib/jquery","amd!cdf/lib/underscore"],function(e,t,a,n){function r(e,t){var r={};
return a(e).find("Placemark").each(function(e,o){var s;if(n.isFunction(t))try{s=t(o)
}catch(p){s=a(o).find("name").text()}else s=a(o).find("name").text();var l=n.map(a(o).find("Polygon"),function(e){var t=[];
return n.each(["outerBoundaryIs","innerBoundaryIs"],function(r){var i=a(e).find(r+" LinearRing coordinates");
n.each(i,function(e){var r=a(e).text().trim();if(r.length>0){var i=n.map(r.split(" "),function(e){return n.map(e.split(",").slice(0,2),parseFloat)
});t.push(i)}})}),t});n.isEmpty(l)||r[s]||(r[s]=i(l))}),r}function i(e){var t={type:"Feature",geometry:{type:"MultiPolygon",coordinates:e},properties:{}};
return t}var o={name:"kml",label:"KML shape resolver",defaults:{url:"",parseShapeKey:null},implementation:function(e,t,n){var i=a.Deferred(),o=n.url||t._shapeSource,s=n.parseShapeKey||t._parseShapeKey;
return o?a.ajax(o,{async:!0,type:"GET",processData:!1,success:function(e){var t=r(e,s);
i.resolve(t)},error:function(){i.resolve({})}}):i.resolve(null),i.promise()}};t.registerGlobalAddIn("NewMapComponent","ShapeResolver",new e(o))
}),define("cde/components/addIns/ShapeResolver/geoJSON",["cdf/AddIn","cdf/Dashboard.Clean","cdf/Logger","cdf/lib/jquery","amd!cdf/lib/underscore"],function(e,t,a,n,r){function i(e,t){var a=r.chain(e.features).map(function(e,a){var n=o(e,t)||a;
return[n,e]}).object().value();return a}function o(e,t){var a=e.id;return t&&(a=e.properties[t]||a),a
}var s={name:"geoJSON",label:"GeoJSON shape resolver",defaults:{url:"",idPropertyName:""},implementation:function(e,t,r){var o=n.Deferred(),s=r.url||t._shapeSource;
return s?n.ajax(s,{async:!0,type:"GET",dataType:"json",success:function(e){var t=i(e,r.idPropertyName);
o.resolve(t)},error:function(){a.log("NewMapComponent geoJSON addIn: failed to retrieve data at"+s,"debug"),o.resolve({})
}}):(a.log("NewMapComponent geoJSON addIn: no url is defined","debug"),o.resolve(null)),o.promise()
}};t.registerGlobalAddIn("NewMapComponent","ShapeResolver",new e(s))}),define("cde/components/mapAddIns",["./addIns/LocationResolver/geonames/geonames","./addIns/LocationResolver/nominatim/nominatim","./addIns/LocationResolver/mapquest/mapquest","./addIns/MarkerImage/cggMarker/cggMarker","./addIns/MarkerImage/urlMarker/urlMarker","./addIns/ShapeResolver/simpleJSON","./addIns/ShapeResolver/kml","./addIns/ShapeResolver/geoJSON"],function(){}),define("cde/components/NewMapComponent",["cdf/components/UnmanagedComponent","cdf/Logger","cdf/lib/jquery","amd!cdf/lib/underscore","./GoogleMapEngine","./OpenLayersEngine","./mapAddIns","css!./NewMapComponent"],function(e,t,a,n,r,i){var o={simplifyPoints:function(e,t){function a(e,t){var r=e[0],i=e[e.length-1];
if(e.length<3)return e;for(var o=-1,s=0,p=1;p<e.length-1;p++){var l=n(e[p],r,i);l>s&&(s=l,o=p)
}if(s>t){var c=e.slice(0,o+1),h=e.slice(o),d=a(c,t),u=a(h,t),m=d.slice(0,d.length-1).concat(u);
return m}return[r,i]}function n(e,t,a){var n,r,i;return t[0]==a[0]?n=Math.abs(e[0]-t[0]):(r=(a[1]-t[1])/(a[0]-t[0]),i=t[1]-r*t[0],n=Math.abs(r*e[0]-e[1]+i)/Math.sqrt(Math.pow(r,2)+1)),n
}return 0>t?e:a(e,t/63e5)},exportShapeDefinition:function(){this.shapeDefinition&&window.open("data:text/json;charset=utf-8,"+escape(JSON.stringify(this.shapeDefinition)))
}},s={colormaps:{jet:[],gray:[[0,0,0,255],[255,255,255,255]],"french-flag":[[255,0,0,255],[255,254,255,255],[0,0,255,255]]},getColorMap:function(){var e=[];
if(null==this.colormap||n.isArray(this.colormap)&&!this.colormap.length)e=[[0,102,0,255],[255,255,0,255],[255,0,0,255]];
else for(var t=0,a=this.colormap.length;a>t;t++)e.push(JSON.parse(this.colormap[t]));
var r=function(e,t,a){var n,r,i,o=[],s=[];for(n=0;n<e.length;n++)for(o[n]=[],r=0,i=(t[n]-e[n])/a;a>r;r++)o[n][r]=e[n]+r*i;
for(n=0;n<o[0].length;n++)for(s[n]=[],r=0;r<o.length;r++)s[n][r]=Math.round(o[r][n]);
return s},i=[];for(t=1,a=e.length;a>t;t++)i=i.concat(r(e[t-1],e[t],32));return n.map(i,function(e){return"rgba("+e.join(",")+")"
})},mapColor:function(e,t,a,n){var r=n.length,i=(e-t)/(a-t);return n[Math.floor(i*(r-1))]
}},p={"default":"http://otile{switch:1,2,3,4}.mqcdn.com/tiles/1.0.0/map/${z}/${x}/${y}.png",apple:"http://gsp2.apple.com/tile?api=1&style=slideshow&layers=default&lang=en_US&z=${z}&x=${x}&y=${y}&v=9",google:"http://mt{switch:0,1,2,3}.googleapis.com/vt?x=${x}&y=${y}&z=${z}",mapquest:"http://otile{switch:1,2,3,4}.mqcdn.com/tiles/1.0.0/map/${z}/${x}/${y}.png","mapquest-normal":"http://otile{switch:1,2,3,4}.mqcdn.com/tiles/1.0.0/map/${z}/${x}/${y}.png","mapquest-hybrid":"http://otile{switch:1,2,3,4}.mqcdn.com/tiles/1.0.0/hyb/${z}/${x}/${y}.png","mapquest-sat":"http://otile{switch:1,2,3,4}.mqcdn.com/tiles/1.0.0/sat/${z}/${x}/${y}.jpg","mapbox-world-light":"https://{switch:a,b,c,d}.tiles.mapbox.com/v3/mapbox.world-light/${z}/${x}/${y}.jpg","mapbox-world-dark":"https://{switch:a,b,c,d}.tiles.mapbox.com/v3/mapbox.world-dark/${z}/${x}/${y}.jpg","mapbox-terrain":"https://{switch:a,b,c,d}.tiles.mapbox.com/v3/examples.map-9ijuk24y/${z}/${x}/${y}.jpg","mapbox-satellite":"https://{switch:a,b,c,d}.tiles.mapbox.com/v3/examples.map-qfyrx5r8/${z}/${x}/${y}.png","mapbox-example":"https://{switch:a,b,c,d}.tiles.mapbox.com/v3/examples.c7d2024a/${z}/${x}/${y}.png","mapbox-example2":"https://{switch:a,b,c,d}.tiles.mapbox.com/v3/examples.bc17bb2a/${z}/${x}/${y}.png",openstreetmaps:"http://{switch:a,b,c}.tile.openstreetmap.org/${z}/${x}/${y}.png",openmapsurfer:"http://129.206.74.245:8001/tms_r.ashx?x=${x}&y=${y}&z=${z}","openmapsurfer-roads":"http://129.206.74.245:8001/tms_r.ashx?x=${x}&y=${y}&z=${z}","openmapsurfer-semitransparent":"http://129.206.74.245:8003/tms_h.ashx?x=${x}&y=${y}&z=${z}","openmapsurfer-hillshade":"http://129.206.74.245:8004/tms_hs.ashx?x=${x}&y=${y}&z=${z}","openmapsurfer-contour":"http://129.206.74.245:8006/tms_b.ashx?x=${x}&y=${y}&z=${z}","openmapsurfer-administrative":"http://129.206.74.245:8007/tms_b.ashx?x=${x}&y=${y}&z=${z}","openmapsurfer-roads-grayscale":"http://129.206.74.245:8008/tms_rg.ashx?x=${x}&y=${y}&z=${z}",stamen:"http://{switch:a,b,c,d}.tile.stamen.com/terrain/${z}/${x}/${y}.jpg","stamen-terrain":"http://{switch:a,b,c,d}.tile.stamen.com/terrain/${z}/${x}/${y}.jpg","stamen-terrain-background":"http://{switch:a,b,c,d}.tile.stamen.com/terrain-background/${z}/${x}/${y}.jpg","stamen-terrain-labels":"http://{switch:a,b,c,d}.tile.stamen.com/terrain-labels/${z}/${x}/${y}.jpg","stamen-toner":"http://{switch:a,b,c,d}.tile.stamen.com/toner/${z}/${x}/${y}.png","stamen-toner-lite":"http://{switch:a,b,c,d}.tile.stamen.com/toner-lite/${z}/${x}/${y}.png","stamen-toner-background":"http://{switch:a,b,c,d}.tile.stamen.com/toner-background/${z}/${x}/${y}.png","stamen-toner-hybrid":"http://{switch:a,b,c,d}.tile.stamen.com/toner-hybrid/${z}/${x}/${y}.png","stamen-toner-labels":"http://{switch:a,b,c,d}.tile.stamen.com/toner-labels/${z}/${x}/${y}.png","stamen-toner-lines":"http://{switch:a,b,c,d}.tile.stamen.com/toner-lines/${z}/${x}/${y}.png","stamen-toner-2010":"http://{switch:a,b,c,d}.tile.stamen.com/toner-2010/${z}/${x}/${y}.png","stamen-toner-2011":"http://{switch:a,b,c,d}.tile.stamen.com/toner-2011/${z}/${x}/${y}.png","stamen-watercolor":"http://{switch:a,b,c,d}.tile.stamen.com/watercolor/${z}/${x}/${y}.jpg","nokia-normal":"http://maptile.maps.svc.ovi.com/maptiler/maptile/newest/normal.day/${z}/${x}/${y}/256/png8","nokia-normal-grey":"http://maptile.maps.svc.ovi.com/maptiler/maptile/newest/normal.day.grey/${z}/${x}/${y}/256/png8","nokia-normal-transit":"http://maptile.maps.svc.ovi.com/maptiler/maptile/newest/normal.day.transit/${z}/${x}/${y}/256/png8","nokia-satellite":"http://maptile.maps.svc.ovi.com/maptiler/maptile/newest/satellite.day/${z}/${x}/${y}/256/png8","nokia-terrain":"http://maptile.maps.svc.ovi.com/maptiler/maptile/newest/terrain.day/${z}/${x}/${y}/256/png8","arcgis-street":"http://services.arcgisonline.com/ArcGIS/rest/services/World_street_Map/MapServer/tile/${z}/${y}/${x}","arcgis-topographic":"http://services.arcgisonline.com/ArcGIS/rest/services/World_street_Topo/MapServer/tile/${z}/${y}/${x}","arcgis-natgeo":"http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/${z}/${y}/${x}","arcgis-world":"http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${z}/${y}/${x}","arcgis-lightgray":"http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/${z}/${y}/${x}","arcgis-delorme":"http://services.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/${z}/${y}/${x}"},l=e.extend(s).extend({ph:void 0,mapEngine:void 0,values:void 0,locationResolver:void 0,API_KEY:!1,tileServices:p,otherTileServices:[],tileServicesOptions:{apple:{minZoom:3,maxZoom:14}},update:function(){return this.registerEvents(),n.isString(this.tilesets)&&(this.tilesets=[this.tilesets]),this.testData?(this.render(this.testData),void 0):(t.log("Starting clock of "+this.htmlObject,"debug"),this.clock=new Date,this.queryDefinition&&!n.isEmpty(this.queryDefinition)?this.triggerQuery(this.queryDefinition,n.bind(this.onDataReady,this)):this.synchronous(n.bind(this.render,this),{}),void 0)
},onDataReady:function(e){var t={id:0,value:1},a=this;if("shapes"!=this.mapMode||n.isEmpty(this.shapeSource))this.render(e);
else{var r=n.pluck(e.resultset,t.id);this.dataRequest(this.shapeSource,r).then(function(){a.render.call(a,e)
})}},dataRequest:function(e,t){var r=this.getAddIn("ShapeResolver",this.shapeResolver);
r||(r=this.shapeSource.endsWith("json")?this.getAddIn("ShapeResolver","simpleJSON"):this.getAddIn("ShapeResolver","kml"));
var i=a.Deferred();if(!r)return i.resolve({}),i.promise();var s=this,p={keys:t,_simplifyPoints:o.simplifyPoints,_parseShapeKey:this.parseShapeKey,_shapeSource:e},l=r.call(s,p,this.getAddInOptions("ShapeResolver",r.getName())),c=this;
return l.then(function(e){c.shapeDefinition=n.chain(e).map(function(e,t){return[t,e]
}).object().value(),i.resolve(e)}),i.promise()},render:function(e){t.log("Stopping clock at render in "+this.htmlObject+": took "+(new Date-this.clock)+" ms","debug"),this.shapeDefinition&&t.log("Loaded "+n.keys(this.shapeDefinition).length+" shapes","debug"),this.mapEngine="google"==this.mapEngineType?new r:new i,this.values=e,a.extend(!0,this.mapEngine,{API_KEY:this.API_KEY||window.API_KEY,tileServices:this.tileServices,tileServicesOptions:this.tileServicesOptions}),this.mapEngine.init(this,this.tilesets)
},initCallBack:function(){this.ph=this.placeholder();var e=a("#"+this.popupContentsDiv),n=e.clone();
this.ph.empty(),this.popupContentsDiv&&1!=e.length&&this.ph.append(n.html("None"));
var r=parseFloat(this.centerLatitude),i=parseFloat(this.centerLongitude);switch(this.mapEngine.renderMap(this.ph[0]),this.mapMode){case"shapes":this.setupShapes(this.values);
break;case"markers":this.setupMarkers(this.values)}this.mapEngine.updateViewport(i,r,this.defaultZoomLevel),t.log("Stopping clock: update cycle of "+this.htmlObject+" took "+(new Date-this.clock)+" ms","debug")
},registerEvents:function(){var e=this;this.on("marker:click",function(t){var a;n.isFunction(e.markerClickFunction)&&(a=e.markerClickFunction(t)),a!==!1&&e.markerClickCallback(t)
}),this.on("shape:mouseover",function(t){if(n.isFunction(e.shapeMouseOver)){var a=e.shapeMouseOver(t);
a&&(a=n.isObject(a)?a:{},t.draw(n.defaults(a,{zIndex:1},t.style)))}}),this.on("shape:mouseout",function(t){var a={};
n.isFunction(e.shapeMouseOut)&&(a=e.shapeMouseOut(t)),a=n.isObject(a)?a:{},t.isSelected()?t.draw(n.defaults(a,t.getSelectedStyle())):n.size(a)>0?t.draw(n.defaults(a,t.style)):e.shapeMouseOver&&t.draw(t.style)
}),this.on("shape:click",function(t){if(n.isFunction(e.shapeMouseClick)){var a=e.shapeMouseClick(t);
if(a){a=n.isObject(a)?a:{};var r=n.defaults(a,t.style);t.setSelectedStyle(r),t.draw(r)
}}})},setupShapes:function(e){if(this.shapeDefinition&&e&&e.resultset){var t=this,a=0,r=1,i=n.defaults(this.shapeSettings||{},{strokeWidth:2,strokeColor:"white",zIndex:0}),o=this.getColorMap(),s=n.pluck(e.resultset,r),p=n.min(s),l=n.max(s);
n.each(e.resultset,function(e){var s=t.mapColor(e[r],p,l,o),c={rawData:e,key:e[a],value:e[r],minValue:p,maxValue:l};
t.renderShape(t.shapeDefinition[e[a]],n.defaults({fillColor:s},i),c)}),this.mapEngine.postSetShapes(this)
}},renderShape:function(e,t,a){this.mapEngine.setShape(e,t,a)},setupMarkers:function(e){if(e&&e.resultset){var t=this.getMapping(e),a=this;
"coordinates"!=t.addressType?n.each(e.resultset,function(e,n){var r=void 0!=t.address?e[t.address]:void 0;
a.getAddressLocation(r,t.addressType,e,t,n)}):n.each(e.resultset,function(e,n){var r=[e[t.longitude],e[t.latitude]];
a.renderMarker(r,e,t,n)})}},renderMarker:function(e,a,r,i){var o=this;if(void 0===e)return t.log("Unable to get location for address "+a[r.address]+". Ignoring element.","debug"),!0;
var s,p,l=o.markerWidth;r.markerWidth&&(l=a[r.markerWidth]);var c=o.markerHeight;
r.markerHeight&&(c=a[r.markerHeight]);var h=!1;if(r.marker&&(s=a[r.marker]),void 0==s){var d={data:a,position:i},u=this.markerImageGetter;
this.markerCggGraph?(d.cggGraphName=this.markerCggGraph,d.width=l,d.height=c,d.parameters={},n.each(this.cggGraphParameters,function(e){d.parameters[e[0]]=a[r[e[1]]]
}),u="cggMarker"):(d.url=o.marker,h=void 0==o.marker,u="urlMarker"),u||(u="urlMarker");
var m=this.getAddIn("MarkerImage",u);s=m.call(this.ph,d,this.getAddInOptions("MarkerImage",m.getName()))
}r.description&&(p=a[r.description]),t.log("About to render "+e[0]+" / "+e[1]+" with marker sized "+c+" / "+l+"and description "+p,"debug");
var g={longitude:e[0],latitude:e[1],defaultMarkers:h,position:i,mapping:r};o.mapEngine.setMarker(e[0],e[1],s,p,a,l,c,g)
},markerClickCallback:function(e){var t=e.data,a=e.marker.defaultMarkers,r=e.marker.mapping,i=e.marker.position,o=this;
if(n.each(this.popupParameters,function(t){o.dashboard.fireChange(t[1],e.data[r[t[0].toLowerCase()]])
}),this.popupContentsDiv||r.popupContents){var s;r.popupContents&&(s=t[r.popupContents]);
var p=r.popupContentsHeight?t[r.popupContentsHeight]:void 0,l=r.popupContentsWidth?t[r.popupContentsWidth]:void 0;
p=p||this.popupHeight,l=l||this.popupWidth;var c=void 0;if(a){var h=["#394246","#11b4eb","#7a879a","#e35c15","#674f73"];
c=h[i%5]}this.mapEngine.showPopup(e.data,e.feature,p,l,s,this.popupContentsDiv,c)
}},getAddressLocation:function(e,t,a,r,i){var o=this.locationResolver||"openstreetmap",s=this.getAddIn("LocationResolver",o),p=this.placeholder(),l={address:e,addressType:t,position:i},c=["country","city","county","region","state"];
n.each(n.pick(r,c),function(e,t){void 0!=e&&(l[t]=a[e])});var h=this;l.continuationFunction=function(e){h.renderMarker(e,a,r,i)
},s.call(p,l,this.getAddInOptions("LocationResolver",s.getName()))},getMapping:function(e){var t={};
return e.metadata&&0!=e.metadata.length?(n.each(e.metadata,function(e,a){switch(e.colName.toLowerCase()){case"latitude":t.addressType="coordinates",t.latitude=a;
break;case"longitude":t.addressType="coordinates",t.longitude=a;break;case"description":t.description=a;
break;case"marker":t.marker=a;break;case"markerwidth":t.markerWidth=a;break;case"markerheight":t.markerHeight=a;
break;case"popupcontents":t.popupContents=a;break;case"popupwidth":t.popupWidth=a;
break;case"popupheight":t.popupHeight=a;break;case"address":t.addressType||(t.address=a,t.addressType="address");
break;default:t[e.colName.toLowerCase()]=a}}),t):t}});return l});