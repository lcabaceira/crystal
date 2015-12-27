define(["../../../AddIn","../../../Dashboard","../../../dashboard/Sprintf","../../../lib/jquery","amd!../../../lib/datatables","css!./groupHeaders"],function(e,a,t,d){var r=new e({name:"groupHeaders",label:"Group Headers",defaults:{hide:!0,columnHeadersInGroups:!1,replaceFirstHeader:!0,textFormat:function(e,a){return a.colFormat?t(a.colFormat,e):e
}},init:function(){d.fn.dataTableExt.oSort[this.name+"-asc"]=d.fn.dataTableExt.oSort["string-asc"],d.fn.dataTableExt.oSort[this.name+"-desc"]=d.fn.dataTableExt.oSort["string-desc"]
},implementation:function(e,a,t){var r=d(e).parents("table").eq(0).dataTable(),n=d(e).index();
if(t.hide&&r.find(".groupHeaders:nth-child("+(n+1)+")").addClass("hiddenCol"),t.columnHeadersInGroups){var s=r.find("thead").eq(0);
s.find("tr").clone}{var l,o=d(r.fnGetNodes(a.rowIdx)),i=o.index();o.children().length
}(0===i||o.prev().hasClass("groupHeader")||a.value!=r.fnGetData(o.prev().get(0))[a.colIdx])&&(l=this.buildHeader(e,a,t),l.insertBefore(o))
},buildHeader:function(e,a,t){var r,n,s=d(e).parents("table").eq(0).dataTable(),l=t.textFormat.call(this,a.value,a,t);
t.columnHeadersInGroups?(n=s.find("thead").eq(0),n.hide(),r=d("<tr>"),n.find("tr th").each(function(e,a){var t=d(a),n=d("<td>").text(t.text()).width(a.style.width);
n.addClass(d(a).hasClass("hiddenCol")?"hiddenCol":""),r.append(n)}),r.find("td").eq(d(e).index()+1).empty().append(l).addClass("groupName")):(r=d("<tr/>"),d("<td/>").addClass("groupName").empty().append(l).attr("colspan",d(e).siblings().length+1).appendTo(r)),r.addClass("groupHeader group"+d(e).index());
var o=d("<td>").attr("colspan",d(e).siblings().length+1).wrap("<tr>").parent().addClass("groupHeader preSpace"),i=d("<td>").attr("colspan",d(e).siblings().length+1).wrap("<tr>").parent().addClass("groupHeader postSpace"),p=o.add(r).add(i);
return p}});return a.registerGlobalAddIn("Table","colType",r),r});