define("cde/components/GMapComponentAsyncLoader",["cdf/lib/jquery"],function(e){var t=function(e){var t,n=e.now();
return function(){if(t)return t;var o,a=e.Deferred(),i=function(){a.resolve(window.google&&google.maps?google.maps:!1)
},s="loadGoogleMapsOverlay_"+n++;return window.google&&google.maps?i():window.google&&google.load?google.load("maps","3.exp",{other_params:"sensor=false&libraries=places",callback:i}):(o={v:"3.exp",sensor:!1,libraries:"places",callback:s},window[s]=function(){i(),setTimeout(function(){try{delete window[s]
}catch(e){}},20)},e.ajax({dataType:"script",data:o,url:"http://maps.googleapis.com/maps/api/js"})),t=a.promise()
}}(e);return t}),define("cde/components/GMapEngine",["cdf/lib/Base","cdf/Logger","cdf/lib/jquery","amd!cdf/lib/underscore","./GMapComponentAsyncLoader"],function(e,t,n,o,a){function i(e,t,n,o,a,i,s){this.startPoint_=e,this.width_=t,this.height_=n,this.map_=i,this.htmlContent_=o,this.popupContentDiv_=a,this.borderColor_=s,this.div_=null,this.setMap(i)
}function s(e){return function(){var n;window.event&&(n=window.event.keyCode),13==n&&geocoder.geocode({address:e.value},function(e,n){n==google.maps.GeocoderStatus.OK?map.fitBounds(e[0].geometry.viewport):t.warn("The location entered could not be found")
})}}var l=e.extend({map:void 0,opts:{mapOptions:{styles:[{featureType:"administrative",stylers:[{visibility:"off"}]}],disableDefaultUI:!1,mapTypeControl:!1,streetViewControl:!1}},opened_info:void 0,centered:!1,overlays:[],init:function(e){n.when(a()).then(function(){e.draw()
})},createMap:function(e,t,o,a,i,s){var l=n.extend(!0,{zoom:parseInt(a),center:new google.maps.LatLng(o,t),mapTypeId:google.maps.MapTypeId.TERRAIN},this.opts.mapOptions);
this.map=new google.maps.Map(e,l),this.opened_info=new google.maps.InfoWindow,n(e).css("height",i+"px"),n(e).css("width",s+"px")
},renderMap:function(e,t,n){if(e){var a=this;for(var i in e){for(var s=e[i],l=[],r=0;r<s.length;r++)l.push(new google.maps.LatLng(s[r][0],s[r][1]));
var d={fillColor:t[i]?t[i].fillColor:n,fillOpacity:t[i]?t[i].fillOpacity:0,strokeWeight:t[i]?t[i].strokeWeight:0,strokeColor:"#8c8c8c"},p=new google.maps.Polygon(o.extend({paths:l},d)),g=t[i]?t[i].value:null;
p.infowindow=new google.maps.InfoWindow({content:a.tooltipMessage(i,g),pixelOffset:{width:0,height:-3}}),p.infowindow.dataPayload=o.extend({name:i,value:g,level:t[i]?t[i].level:0},d),t[i]&&(t[i].shape=p),p.setMap(a.map),google.maps.event.addListener(p,"click",function(e){a.clickCallback(this.infowindow,e),a.displayCoordinates(e.latLng)
}),google.maps.event.addListener(p,"click",function(e){this.fillOpacity=1,this.strokeColor="#000000",this.setVisible(!1),this.setVisible(!0),this.infowindow.setOptions({maxWidth:500}),this.infowindow.setPosition(e.latLng),this.infowindow.getMap()||this.infowindow.open(a.map),a.opened_info=this.infowindow
}),google.maps.event.addListener(p,"mouseout",function(){a.opened_info.close(),this.fillOpacity=.6,this.strokeColor="#8c8c8c",this.setVisible(!1),this.setVisible(!0)
})}}},tooltipMessage:function(e,t){var n=e+"</br>"+(t?t:"-");return'<div class="gmapsoverlay-tooltip">'+n+"</div>"
},clickCallback:function(e){t.log(e.dataPayload.name+":"+e.dataPayload.value+":"+100*e.dataPayload.level+"%")
},displayCoordinates:function(e){var n=e.lat();n=n.toFixed(4);var o=e.lng();o=o.toFixed(4),t.log("Lat: "+n+"  Lng: "+o)
},showInfo:function(e,t,n){t.opened_info.close(),n.setPosition(e.latLng),n.open(t.map),t.opened_info=n
},resetButton:function(e,t,n,o){var a=this,i=document.createElement("div"),s=document.createElement("a");
i.appendChild(s),i.setAttribute("id","controlReset_"+e),s.setAttribute("id","linkReset_"+e),s.href="javascript:void(0)",s.className="gmapsoverlay-button",s.onclick=function(){a.map.setZoom(t),a.map.setCenter(new google.maps.LatLng(o,n))
},s.innerHTML="Reset",a.map.controls[google.maps.ControlPosition.TOP_LEFT].push(i)
},searchBox:function(e){var t=this,n=document.createElement("div"),o=document.createElement("input");
n.appendChild(o),n.setAttribute("id","locationField_"+e),o.style.width="250px",o.style.height="100%",o.style.margin="0px",o.style.border="1px solid #A9BBDF",o.style.borderRadius="2px",o.setAttribute("id","locationInput_"+e),t.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(n);
var a=new google.maps.places.Autocomplete(o,{types:["geocode"]});google.maps.event.addListener(a,"place_changed",function(){var e=a.getPlace();
e.geometry.viewport?t.map.fitBounds(e.geometry.viewport):(t.map.setCenter(e.geometry.location),t.map.setZoom(17))
}),google.maps.event.addListener(t.map,"bounds_changed",function(){o.blur(),o.value=""
}),o.onkeyup=s(o)},renderLegend:function(e,t,n,a,i,s,l,r){if(l){var d=function(e,t){if(0==e)return 0;
if(Math.round(e)==e)return e;var n=Math.round(-Math.log(Math.abs(e))/Math.LN10+(t||2));
return 0>n&&(n=0),e.toFixed(n)};if(n&&t){var p=o.map(n,function(e){return e.value
}),g=o.min(p),c=o.max(p),u=a.length,m=1;-5>c&&(m=((c-g)/5).toString().split("."),m=m.length>1?Math.pow(10,Math.max(m[1].length,3)):1);
var f=o.map(i,function(e){var t=(g+e*(c-g)*m)/m;return{value:d(t,1),level:e,fillColor:a[Math.floor(e*u-1)]}
})}this.legend=f}var h=document.createElement("DIV");h.style.padding="5px",h.setAttribute("id","legendDiv_"+e);
var v=document.createElement("DIV");v.setAttribute("id","legendUI_"+e),v.title="Legend",h.appendChild(v);
var y=document.createElement("DIV");if(y.setAttribute("id","legendText_"+e),y.style.fontFamily="Arial,sans-serif",y.style.fontSize="12px",y.style.paddingLeft="4px",y.style.paddingRight="4px",l){var w="";
o.each(f,function(e){var t=0!=e.level?100*e.level+"%":"-1px";w+="<div class='gmapsoverlay-legend-label' style='left:"+t+";position:absolute;'><div>"+e.value+"</div></div>"
}),y.innerHTML="<div class='gmapsoverlay-legend'>  <div class='gmapsoverlay-legend-title'>"+s.text+"</div>  <div class='gmapsoverlay-legend-scale'>    <div class='gmapsoverlay-legend-labels'>"+w+"</div>  </div>  <div class='gmapsoverlay-legend-source'>"+s.source+"</div></div>"
}else{for(var w="",C=Object.keys(s.ranges).length,b=0;C>b;b++)w+=r?"<li><span style='background:"+s.ranges[b].color+";'></span>"+s.ranges[b].desc+"</li>":isNaN(s.ranges[b].min)?"<li><span style='background:"+s.ranges[b].color+";'><= "+s.ranges[b].max+"</span>"+s.ranges[b].desc+"</li>":isNaN(s.ranges[b].max)?"<li><span style='background:"+s.ranges[b].color+";'>>= "+s.ranges[b].min+"</span>"+s.ranges[b].desc+"</li>":"<li><span style='background:"+s.ranges[b].color+";'>"+s.ranges[b].max+"</span>"+s.ranges[b].desc+"</li>";
y.innerHTML="<div class='gmapsoverlay-legend' style='width: auto'>  <div class='gmapsoverlay-legend-title'>"+s.text+"</div>  <div class='gmapsoverlay-legend-scale-range'>    <ul class='gmapsoverlay-legend-labels-range'>"+w+"</ul>  </div>  <div class='gmapsoverlay-legend-source'>"+s.source+"</div></div>"
}v.appendChild(y),this.map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(h)
},showPopup:function(e,t,o,a,s,l,r){var d=new i(t.getPosition(),a,o,s,l,this.map,r);
n(this.overlays).each(function(e,t){t.setMap(null)}),this.overlays.push(d)}});return l
}),define("cde/components/GMapsOverlayComponentExt",[],function(){var e={getResourceUrl:function(){return"res"
},getBaseSolutionPluginRoot:function(){return"/public/"}};return e}),define("cde/components/GMapsOverlayComponent",["cdf/components/UnmanagedComponent","cdf/Logger","cdf/lib/jquery","amd!cdf/lib/underscore","./GMapEngine","./GMapsOverlayComponentExt","css!./GMapsOverlayComponent"],function(e,t,n,o,a,i){var s=e.extend({mapEngineOpts:void 0,colormap:[[0,102,0,255],[255,255,0,255],[255,0,0,255]],getColorLegend:function(e,t){for(var n=Object.keys(t.ranges).length,o=0;n>o;o++)if(isNaN(t.ranges[o].min)&&e<=t.ranges[o].max||isNaN(t.ranges[o].max)&&e>=t.ranges[o].min||e>=t.ranges[o].min&&e<=t.ranges[o].max)return t.ranges[o].color
},getColorMap:function(){for(var e=function(e,t,n){var o,a,i,s=[],l=[];for(o=0;o<e.length;o++)for(s[o]=[],a=0,i=(t[o]-e[o])/n;n>a;a++)s[o][a]=e[o]+a*i;
for(o=0;o<s[0].length;o++)for(l[o]=[],a=0;a<s.length;a++)l[o][a]=Math.round(s[a][o]);
return l},t=[],n=1;n<this.colormap.length;n++)t=t.concat(e(this.colormap[n-1],this.colormap[n],512));
return o.map(t,function(e){return"rgba("+e.join(",")+")"})},_getMapDefinition:function(e,t){if(!!e.mapName&!e.mapDefinition){var o=/\.[a-zA-Z]+$/.test(e.mapName)?i.getResourceUrl()+e.mapName:i.getResourceUrl()+i.getBaseSolutionPluginRoot()+"cde/components/gmapsoverlay/map-def/"+e.mapName+".js";
n.getJSON(o,function(t){t&&(e.mapDefinition=t)})}t(e)},postProcessData:function(e,t){var a=.6,i=.5;
t.queryResult={},t.isContinuousMapColor=n.isEmptyObject(t.legend);var s=e.metadata.length;
for(var l in e.resultset){var r,d,p=e.resultset[l];3>s?(r=parseFloat(p[1]),d="",t.isColorDefinedInDS=!1):(r=p[1],d=p[2],t.isColorDefinedInDS=!0),t.queryResult[p[0]]={value:r,color:d},p.length>2&&(t.queryResult[p[0]].payload=p.slice(2))
}if(t._parseLegend(t.isContinuousMapColor),t.isContinuousMapColor){var g=t.getColorMap(),c=o.map(t.queryResult,function(e){return e.value
}),u=o.min(c),m=o.max(c),f=g.length;o.each(t.queryResult,function(e,n){var s=(e.value-u)/(m-u);
t.queryResult[n]=o.extend({level:s,fillColor:g[Math.floor(s*(f-1))],fillOpacity:a,strokeWeight:i},t.queryResult[n])
})}else o.each(t.queryResult,function(e,n){var s;s=t.isColorDefinedInDS?e.color:t.getColorLegend(e.value,t.legendRanges),t.queryResult[n]=o.extend({fillColor:s,fillOpacity:a,strokeWeight:i},t.queryResult[n])
})},_parseLegend:function(e){if(this.legendRanges=new Object,this.legendRanges.ranges=new Object,this.legendRanges.text=this.legendText?this.legendText:"",this.legendRanges.source=this.sourceText?this.sourceText:" ",!e)for(var t=0;t<this.legend.length;t++){var n=this.legend[t][1].split(";");
this.legendRanges.ranges[t]=new Object,this.legendRanges.ranges[t].min=parseFloat(n[0]),this.legendRanges.ranges[t].max=parseFloat(n[1]),this.legendRanges.ranges[t].color=n[2],this.legendRanges.ranges[t].desc=this.legend[t][0]
}},update:function(){var e=this;return n.isEmptyObject(e.queryDefinition)?(t.error("GMaps - Datasource not defined."),void 0):e.mapName?e.mapHeight&&e.mapWidth?(e._getMapDefinition(e,function(e){e.triggerQuery(e.queryDefinition,function(t){e.postProcessData(t,e),e._initialize()
})}),void 0):(t.error("GMaps - Map Height and/or Width not defined."),void 0):(t.error("GMaps - Map Name not defined."),void 0)
},_initialize:function(){this.mapEngine=new a,this.mapEngine.opts=n.extend(!0,this.mapEngine.opts,this.mapEngineOpts),this.clickCallback&&(this.mapEngine.clickCallback=this.clickCallback),this.mapEngine.init(this)
},draw:function(){var e=this;e.ph=n("#"+e.htmlObject),e.ph.empty(),e.mapEngine.createMap(e.ph[0],e.centerLongitude,e.centerLatitude,e.defaultZoomLevel,e.mapHeight,e.mapWidth),e.mapEngine.renderMap(e.mapDefinition,e.queryResult,e.defaultColor?e.defaultColor:"#EAEAEA",e.legendRanges),e.mapEngine.resetButton(e.ph[0].id,e.defaultZoomLevel,e.centerLongitude,this.centerLatitude),1==e.search&&e.mapEngine.searchBox(e.ph[0].id),e.mapEngine.renderLegend(e.ph[0].id,e.mapDefinition,e.queryResult,e.getColorMap(),[0,.5,1],e.legendRanges,e.isContinuousMapColor,e.isColorDefinedInDS)
}});return s});