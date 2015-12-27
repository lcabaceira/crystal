define(["../../../AddIn","../../../Dashboard","../../../Logger","../../../lib/jquery","amd!../../../lib/datatables","amd!../../../lib/jquery.sparkline","css!./sparkline"],function(r,t,e,i){var n=new r({name:"sparkline",label:"Sparkline",defaults:{type:"line"},init:function(){var r=this;
i.fn.dataTableExt.oSort[this.name+"-asc"]=function(t,e){return r.sort(t,e)},i.fn.dataTableExt.oSort[this.name+"-desc"]=function(t,e){return r.sort(e,t)
}},sort:function(r,t){return this.sumStrArray(r)-this.sumStrArray(t)},sumStrArray:function(r){return r.split(",").reduce(function(r,t){return e.log("Current "+t+"; prev "+r),parseFloat(t)+("number"==typeof r?r:parseFloat(r))
})},implementation:function(r,t,e){var n=i(r),a=t.value.split(/,/);if(e.trim){if("both"==e.trim.type||"right"==e.trim.type)for(var l=a.length-1;l>=0;l--)-1!=i.inArray(a[l].trim(),e.trim.values)&&a.splice(l,1);
if("both"==e.trim.type||"left"==e.trim.type)for(var l=0;l<a.length;l++)-1!=i.inArray(a[l].trim(),e.trim.values)&&a.splice(l,1)
}n.sparkline(a,e),n.removeClass("sparkline")}});return t.registerGlobalAddIn("Table","colType",n),n
});