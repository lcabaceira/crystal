define(["../../../AddIn","../../../Dashboard","../../../dashboard/Sprintf","../../../lib/jquery","amd!../../../lib/datatables"],function(t,a,e,n){var o=new t({name:"formattedText",label:"Formatted Text",defaults:{textFormat:function(t,a){return a.colFormat?e(a.colFormat,t):t
}},init:function(){n.fn.dataTableExt.oSort[this.name+"-asc"]=n.fn.dataTableExt.oSort["string-asc"],n.fn.dataTableExt.oSort[this.name+"-desc"]=n.fn.dataTableExt.oSort["string-desc"]
},implementation:function(t,a,e){var o=e.textFormat.call(this,a.value,a,e);n(t).empty().append(o)
}});return a.registerGlobalAddIn("Table","colType",o),o});