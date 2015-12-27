Timeline.PlanningEtherPainter=function(e){this._params=e,this._intervalUnit=e.intervalUnit,this._multiple="multiple"in e?e.multiple:1,this._theme=e.theme
},Timeline.PlanningEtherPainter.prototype.initialize=function(e,t){this._band=e,this._timeline=t,this._backgroundLayer=e.createLayerDiv(0),this._backgroundLayer.setAttribute("name","ether-background"),this._backgroundLayer.style.background=this._theme.ether.backgroundColors[e.getIndex()],this._markerLayer=null,this._lineLayer=null;
var i="align"in this._params&&"string"==typeof this._params.align?this._params.align:this._theme.ether.interval.marker[t.isHorizontal()?"hAlign":"vAlign"],n="showLine"in this._params?this._params.showLine:this._theme.ether.interval.line.show;
this._intervalMarkerLayout=new Timeline.PlanningEtherMarkerLayout(this._timeline,this._band,this._theme,i,n),this._highlight=new Timeline.EtherHighlight(this._timeline,this._band,this._theme,this._backgroundLayer)
},Timeline.PlanningEtherPainter.prototype.setHighlight=function(e,t){this._highlight.position(e,t)
},Timeline.PlanningEtherPainter.prototype.paint=function(){this._markerLayer&&this._band.removeLayerDiv(this._markerLayer),this._markerLayer=this._band.createLayerDiv(100),this._markerLayer.setAttribute("name","ether-markers"),this._markerLayer.style.display="none",this._lineLayer&&this._band.removeLayerDiv(this._lineLayer),this._lineLayer=this._band.createLayerDiv(1),this._lineLayer.setAttribute("name","ether-lines"),this._lineLayer.style.display="none";
var e=Math.max(0,Math.ceil(Timeline.PlanningUnit.toNumber(this._band.getMinDate()))),t=Math.floor(Timeline.PlanningUnit.toNumber(this._band.getMaxDate())),i=function(){return t>e
},n=1,a=this._multiple;switch(this._intervalUnit){case Timeline.PlanningUnit.DAY:n=1;
break;case Timeline.PlanningUnit.WEEK:n=7;break;case Timeline.PlanningUnit.MONTH:n=28;
break;case Timeline.PlanningUnit.QUARTER:n=84;break;case Timeline.PlanningUnit.YEAR:n=336
}for(var r=function(){e+=n*a},l=this._band.getLabeller();;){if(this._intervalMarkerLayout.createIntervalMarker(Timeline.PlanningUnit.fromNumber(e),l,this._intervalUnit,this._markerLayer,this._lineLayer),!i())break;
r()}this._markerLayer.style.display="block",this._lineLayer.style.display="block"
},Timeline.PlanningEtherPainter.prototype.softPaint=function(){},Timeline.PlanningEtherMarkerLayout=function(e,t,i,n,a){var r=e.isHorizontal();
this.positionDiv=r?"Top"==n?function(e,t){e.style.left=t+"px",e.style.top="0px"}:function(e,t){e.style.left=t+"px",e.style.bottom="0px"
}:"Left"==n?function(e,t){e.style.top=t+"px",e.style.left="0px"}:function(e,t){e.style.top=t+"px",e.style.right="0px"
};var l=i.ether.interval.marker,s=i.ether.interval.line,h=(r?"h":"v")+n,o=l[h+"Styler"],y=l[h+"EmphasizedStyler"];
this.createIntervalMarker=function(i,n,l,h,m){var p=Math.round(t.dateToPixelOffset(i));
if(a){var _=e.getDocument().createElement("div");_.style.position="absolute",s.opacity<100&&Timeline.Graphics.setOpacity(_,s.opacity),r?(_.style.borderLeft="1px solid "+s.color,_.style.left=p+"px",_.style.width="1px",_.style.top="0px",_.style.height="100%"):(_.style.borderTop="1px solid "+s.color,_.style.top=p+"px",_.style.height="1px",_.style.left="0px",_.style.width="100%"),m.appendChild(_)
}var g=n.labelInterval(i,l),c=e.getDocument().createElement("div");return c.innerHTML=g.text,c.style.position="absolute",(g.emphasized?y:o)(c),this.positionDiv(c,p),h.appendChild(c),c
}};