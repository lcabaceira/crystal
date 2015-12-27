Timeline.GeochronoEtherPainter=function(e){this._params=e,this._intervalUnit=e.intervalUnit,this._multiple="multiple"in e?e.multiple:1,this._theme=e.theme
},Timeline.GeochronoEtherPainter.prototype.initialize=function(e,t){this._band=e,this._timeline=t,this._backgroundLayer=e.createLayerDiv(0),this._backgroundLayer.setAttribute("name","ether-background"),this._backgroundLayer.style.background=this._theme.ether.backgroundColors[e.getIndex()],this._markerLayer=null,this._lineLayer=null;
var i="align"in this._params&&"string"==typeof this._params.align?this._params.align:this._theme.ether.interval.marker[t.isHorizontal()?"hAlign":"vAlign"],r="showLine"in this._params?this._params.showLine:this._theme.ether.interval.line.show;
this._intervalMarkerLayout=new Timeline.GeochronoEtherMarkerLayout(this._timeline,this._band,this._theme,i,r),this._highlight=new Timeline.EtherHighlight(this._timeline,this._band,this._theme,this._backgroundLayer)
},Timeline.GeochronoEtherPainter.prototype.setHighlight=function(e,t){this._highlight.position(e,t)
},Timeline.GeochronoEtherPainter.prototype.paint=function(){this._markerLayer&&this._band.removeLayerDiv(this._markerLayer),this._markerLayer=this._band.createLayerDiv(100),this._markerLayer.setAttribute("name","ether-markers"),this._markerLayer.style.display="none",this._lineLayer&&this._band.removeLayerDiv(this._lineLayer),this._lineLayer=this._band.createLayerDiv(1),this._lineLayer.setAttribute("name","ether-lines"),this._lineLayer.style.display="none";
var e,t,i=Math.ceil(Timeline.GeochronoUnit.toNumber(this._band.getMinDate())),r=Math.floor(Timeline.GeochronoUnit.toNumber(this._band.getMaxDate()));
!function(n,a){var o;switch(n){case Timeline.GeochronoUnit.AGE:o=Timeline.Geochrono.ages;
break;case Timeline.GeochronoUnit.EPOCH:o=Timeline.Geochrono.epoches;break;case Timeline.GeochronoUnit.PERIOD:o=Timeline.Geochrono.periods;
break;case Timeline.GeochronoUnit.ERA:o=Timeline.Geochrono.eras;break;case Timeline.GeochronoUnit.EON:o=Timeline.Geochrono.eons;
break;default:return t=function(){return i>0&&i>r},e=function(){i-=a},void 0}for(var h=o.length-1;h>0&&!(i<=o[h].start);)h--;
i=o[h].start,t=function(){return h<o.length-1&&i>r},e=function(){h++,i=o[h].start
}}(this._intervalUnit,this._multiple);for(var n=this._band.getLabeller();;){if(this._intervalMarkerLayout.createIntervalMarker(Timeline.GeochronoUnit.fromNumber(i),n,this._intervalUnit,this._markerLayer,this._lineLayer),!t())break;
e()}this._markerLayer.style.display="block",this._lineLayer.style.display="block"
},Timeline.GeochronoEtherPainter.prototype.softPaint=function(){},Timeline.GeochronoEtherMarkerLayout=function(e,t,i,r,n){var a=e.isHorizontal();
this.positionDiv=a?"Top"==r?function(e,t){e.style.left=t+"px",e.style.top="0px"}:function(e,t){e.style.left=t+"px",e.style.bottom="0px"
}:"Left"==r?function(e,t){e.style.top=t+"px",e.style.left="0px"}:function(e,t){e.style.top=t+"px",e.style.right="0px"
};var o=i.ether.interval.marker,h=i.ether.interval.line,s=(a?"h":"v")+r,l=o[s+"Styler"],m=o[s+"EmphasizedStyler"];
this.createIntervalMarker=function(i,r,o,s,c){var y=Math.round(t.dateToPixelOffset(i));
if(n){var p=e.getDocument().createElement("div");p.style.position="absolute",h.opacity<100&&SimileAjax.Graphics.setOpacity(p,h.opacity),a?(p.style.borderLeft="1px solid "+h.color,p.style.left=y+"px",p.style.width="1px",p.style.top="0px",p.style.height="100%"):(p.style.borderTop="1px solid "+h.color,p.style.top=y+"px",p.style.height="1px",p.style.left="0px",p.style.width="100%"),c.appendChild(p)
}var _=r.labelInterval(i,o),u=e.getDocument().createElement("div");return u.innerHTML=_.text,u.style.position="absolute",(_.emphasized?m:l)(u),this.positionDiv(u,y),s.appendChild(u),u
}};