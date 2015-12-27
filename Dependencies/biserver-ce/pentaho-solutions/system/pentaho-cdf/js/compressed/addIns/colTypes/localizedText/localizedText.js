define(["../../../AddIn","../../../Dashboard","../../../lib/jquery","amd!../../../lib/datatables"],function(a,t,e){var n=new a({name:"localizedText",label:"Localized Text",defaults:{localize:function(a){return dashboard.i18nSupport.prop(a)
}},init:function(){e.fn.dataTableExt.oSort[this.name+"-asc"]=e.fn.dataTableExt.oSort["string-asc"],e.fn.dataTableExt.oSort[this.name+"-desc"]=e.fn.dataTableExt.oSort["string-desc"]
},implementation:function(a,t,n){if("undefined"!=typeof dashboard.i18nSupport&&null!=dashboard.i18nSupport){var o=this.defaults.localize(t.value,t,n);
e(a).empty().append(o),t.tableData[t.rowIdx][t.colIdx]=o}}});return t.registerGlobalAddIn("Table","colType",n),n
});