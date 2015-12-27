define(["../../../AddIn","../../../Dashboard","../../../dashboard/Sprintf","../../../lib/jquery","amd!../../../lib/datatables","css!./trendArrow"],function(a,e,n,t){var d=new a({name:"trendArrow",label:"Trend Arrows",defaults:{good:!0,includeValue:!1,valueFormat:function(a,e){return n(e||"%.1f",a)
},thresholds:{up:0,down:0}},init:function(){t.fn.dataTableExt.oSort[this.name+"-asc"]=t.fn.dataTableExt.oSort["numeric-asc"],t.fn.dataTableExt.oSort[this.name+"-desc"]=t.fn.dataTableExt.oSort["numeric-desc"]
},implementation:function(a,e,n){var d=t(a),o=n.good?"good":"bad",r="number"==typeof e.value||"string"==typeof e.value&&"NaN"!=Number(e.value).toString(),l=r?e.value>n.thresholds.up?"up":e.value<n.thresholds.down?"down":"neutral":"invalid",u=t("<div>&nbsp;</div>");
if(u.addClass("trend "+l+" "+o),d.empty(),n.includeValue){var i=t("<div class='value'></div>").append(n.valueFormat(e.value,e.colFormat,e,n));
i.appendTo(d)}d.append(u)}});return e.registerGlobalAddIn("Table","colType",d),d});
