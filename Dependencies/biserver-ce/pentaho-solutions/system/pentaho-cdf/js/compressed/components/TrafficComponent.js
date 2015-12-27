define(["../dashboard/Utils","../Logger","amd!../lib/underscore","./UnmanagedComponent","../lib/jquery","css!./TrafficComponent"],function(t,i,a,e,r){var n=e.extend({trafficLight:function(t,i){var a,e=this.trafficDefinition;
a=i?r(t).find("VALUE").text():t[0][0];var n="img trafficGreen",o="img trafficYellow",s="img trafficRed",d=r("<div>").attr("class",a<=e.intervals[0]?s:a>=e.intervals[1]?n:o),l=r("#"+this.htmlObject);
if(l.html(d),void 0!=e.showValue&&1==e.showValue){var c="Value: "+a+" <br /><div align='middle' class='"+s+"'/> &le; "+e.intervals[0]+" &lt; <div align='middle' class='"+o+"'/> &lt; "+e.intervals[1]+" &le; <div align='middle' class='"+n+"'/>"+(void 0!=c?"<br/>"+c:"");
l.tooltip.Constructor?l.tooltip({delay:0,html:!0,title:c,placement:"auto top"}):(l.tooltip({delay:0,track:!0,fade:250,content:c}),l.attr("title",c))
}},doQuery:function(){var i=this,e=i.trafficDefinition;if(a.isString(e.dataSource)&&!a.isEmpty(e.dataSource)&&(e=a.extend({},i.dashboard.getDataSource(e.dataSource),e),delete e.dataSource),e.path&&e.dataAccessId){var r=a.bind(function(t){var a;
a=i.valueAsId?t.resultset.map(function(t){return[t[0],t[0]]}):t.resultset,i.trafficLight(a)
},i);i.triggerQuery(e,r)}else{var n=[];for(var o in e)e.hasOwnProperty(o)&&n.push([o,t.ev(e[o])]);
var r=a.bind(function(){i.dashboard.callPentahoAction(i,"system","pentaho-cdf/actions","traffic.xaction",n,function(t){i.trafficLight(t,!0)
})},i);i.synchronous(r)}},update:function(){var t=this.trafficDefinition;if(void 0==t)return i.error("Fatal - No trafficDefinition passed"),void 0;
var a=t.intervals;void 0==a&&(t.intervals=[-1,1]),this.doQuery()}});return n});