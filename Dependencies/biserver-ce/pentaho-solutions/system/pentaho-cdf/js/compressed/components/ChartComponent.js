define(["../dashboard/Utils","./UnmanagedComponent","./ChartComponent.ext","./CggComponent.ext","../lib/jquery","amd!../lib/underscore"],function(e,r,t,a,n,i){var o=r.extend({exportChart:function(r,i){var o=this,d=function(r){r=r||{};
var a={},i=o.parameters;if(i&&i.length){var d=n.extend({},e.propertiesArrayToObject(i),r);
for(var s in d)if(d.hasOwnProperty(s)){var c=this.dashboard.getParameterValue(d[s]);
n.isArray(c)&&1==c.length&&(""+c[0]).indexOf(";")>=0&&(c=e.doCsvQuoting(c[0],";")),"function"==typeof c&&(c=c()),a["param"+s]=c
}}var h=o.dashboard.debug;h>1&&(a.paramdebug=!0,a.paramdebugLevel=h);var u=o.name.replace(/render_/,"");
return a.script=t.getCccScriptPath(u),a.attachmentName=u,a},s=d(i);s.outputType=r||"png";
var c=a.getCggDrawUrl()+"?"+n.param(s),h=n("#cccExportIFrame");h.length?h[0].src=c:(h=n('<iframe id="cccExportIFrame" style="display:none">'),h[0].src=c,h.appendTo(n("body")))
},renderChart:function(){var e=this.chartDefinition;i.isString(e.dataSource)&&!i.isEmpty(e.dataSource)&&(e=i.extend({},this.dashboard.getDataSource(e.dataSource),e),delete e.dataSource),e.dataAccessId||e.query||e.endpoint?this.triggerQuery(e,i.bind(this.render,this)):void 0!=this.valuesArray?this.synchronous(i.bind(function(){this.render(this.valuesArray)
},this)):this.synchronous(i.bind(this.render,this))}});return o});