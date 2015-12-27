define("cde/components/ExportButtonComponent",["cdf/components/BaseComponent","cdf/dashboard/Utils","cdf/Logger","cdf/lib/jquery","css!./ExportButtonComponent"],function(e,t,n,o){var a=e.extend({ph:void 0,tc:void 0,queryObjectNames:{queryState:null,query:null},update:function(){var e=this;
o.extend(this.options,this),e.ph=o("#"+e.htmlObject),e.ph.empty();var a=o('<span class="exportButton"></span>').appendTo(e.ph),r=(0==e.componentName.indexOf("render_")?"":"render_")+e.componentName,p=this.dashboard.getComponentByName(r),i=t.propertiesArrayToObject(e.parameters);
a.text(e.label).click(function(){var t=!1;for(var o in e.queryObjectNames)if(p[o]){p[o].exportData(e.outputType,i,e.getFilterSettings(p)),t=!0;
break}t||n.log(e.name+": could not find a query object on "+e.compName)})},getFilterSettings:function(e){var t={};
if("Table"==e.type){var n=e.ph.dataTableSettings[0];if(n.oFeatures.bFilter){var o=e.ph.find("input");
if(o&&(t.dtFilter=o.val(),n.aoColumns)){for(var a=[],r=0;r<n.aoColumns.length;r++)n.aoColumns[r].bSearchable&&a.push(r);
t.dtSearchableColumns=a.join(",")}}}return t}});return a});