define(["../../../AddIn","../../../Dashboard","../../../Logger","../../../lib/jquery","../../../lib/CCC/protovis-compat!","amd!../../../lib/datatables"],function(t,e,r,i,a){var n=new t({name:"pvSparkline",label:"Protovis Sparkline",defaults:{height:10,strokeStyle:"#000",lineWidth:1,width:void 0,canvasMargin:2},init:function(){var t=this;
i.fn.dataTableExt.oSort[this.name+"-asc"]=function(e,r){return t.sort(e,r)},i.fn.dataTableExt.oSort[this.name+"-desc"]=function(e,r){return t.sort(r,e)
}},sort:function(t,e){return this.sumStrArray(t)-this.sumStrArray(e)},sumStrArray:function(t){return t.split(",").reduce(function(t,e){return r.log("Current "+e+"; prev "+t),parseFloat(e)+("number"==typeof t?t:parseFloat(t))
})},implementation:function(t,e,r){var n=i(t),l=e.value,o=l.split(",");if(r.trim){if("both"==r.trim.type||"right"==r.trim.type)for(var s=o.length-1;s>=0;s--)-1!=i.inArray(o[s].trim(),r.trim.values)&&o.splice(s,1);
if("both"==r.trim.type||"left"==r.trim.type)for(var s=0;s<o.length;s++)-1!=i.inArray(o[s].trim(),r.trim.values)&&o.splice(s,1)
}{var d=o.length,h=r.width||n.width()-2*r.canvasMargin,m=r.height;a.min.index(o),a.max.index(o)
}n.empty();var u=i("<div></div>").appendTo(n),p=(new a.Panel).canvas(u.get(0)).width(h).height(m).margin(r.canvasMargin);
p.add(a.Line).data(o).left(a.Scale.linear(0,d-1).range(0,h).by(a.index)).bottom(a.Scale.linear(o).range(0,m)).strokeStyle(r.strokeStyle).lineWidth(r.lineWidth),p.render()
}});return e.registerGlobalAddIn("Table","colType",n),n});