define(["./JFreeChartComponent.ext","../dashboard/Dashboard.ext","../dashboard/Utils","../Logger","../lib/jquery","./BaseComponent","amd!../lib/captify","css!./JFreeChartComponent"],function(t,e,i,a,n,o){var r=o.extend({update:function(){var t="cda"==this.dashboard.detectQueryType(this.chartDefinition)?"jfreechart-cda.xaction":"jfreechart.xaction";
this.callPentahoAction(t)},getParameters:function(){var t=this.chartDefinition;if(void 0==t)return a.log("Fatal - No chartDefinition passed","error"),void 0;
"undefined"!=typeof t.titleKey&&"undefined"!=typeof this.dashboard.i18nSupport&&null!=this.dashboard.i18nSupport&&(t.title=this.dashboard.i18nSupport.prop(t.titleKey));
var e=null;if("cda"==this.dashboard.detectQueryType(t)&&n.isArray(this.parameters))for(var o,r=0;r<this.parameters.length;r++)if(o=this.parameters[r],n.isArray(o)&&o.length>=2){var d=o[0],s=o[1];
s&&(s=i.doCsvQuoting(s,"=")),0==r?e="":e+=";",e+=i.doCsvQuoting(d+"="+s,";")}"string"==typeof t.dataSource&&t.dataSource&&(t=n.extend({},this.dashboard.getDataSource(t.dataSource),t),delete t.dataSource);
var c=void 0!=t.chartOptions?n.extend({},i.ev(t.chartOptions),t):t,h=[];for(var p in c)if(c.hasOwnProperty(p)){var l=p,s=i.ev(c[p]);
h.push([l,s])}return null!=e&&h.push(["cdaParameterString",e]),h},callPentahoAction:function(t){var e=this;
e.dashboard.incrementRunningCalls(),e.dashboard.callPentahoAction(e,"system","pentaho-cdf/actions",t,e.getParameters(),function(i){null!=i&&(void 0!=e.chartDefinition.caption?e.buildCaptionWrapper(n(i.find("ExecuteActivityResponse:first-child").text()),t):n("#"+e.htmlObject).html(i.find("ExecuteActivityResponse:first-child").text())),e.dashboard.decrementRunningCalls()
})},buildCaptionWrapper:function(a,o){var r=this,d=function(t,a){var o="cda"==r.dashboard.detectQueryType(a)?"jtable-cda.xaction":"jtable.xaction",d=n.extend({solution:"system",path:"pentaho-cdf/actions",action:o,exportType:t},a);
i.post(e.getExport(),d)},s=r.chartDefinition,c=n.extend(t.getCaption(s,r,d,o),s.caption),h=r.htmlObject+"caption",p=n('<div id="'+h+'" ></div>');
a.attr("id",r.htmlObject+"image"),a.attr("rel",r.htmlObject+"caption"),a.attr("class","captify");
for(var l in c)if(c.hasOwnProperty(l)){var f=void 0==c[l].show||i.ev(c[l].show)?!0:!1;
if("mdx"!=r.dashboard.detectQueryType(r.chartDefinition)&&"Details"==c[l].title&&(f=!1),f){var u=void 0!=c[l].icon?i.ev(c[l].icon):void 0,v=void 0!=u?n('<div id ="'+h+l+'" class=" img '+u+'"></div>'):n('<span id ="'+h+l+'">'+c[l].title+"</span>");
void 0!=c[l].oclass&&v.addClass(c[l].oclass),v.attr("title",c[l].title),p.append(v)
}}n("#"+r.htmlObject).empty();var b=n('<div class="caption-details">Details</div>');
n("#"+r.htmlObject).append(b),n("#"+r.htmlObject).append(a),n("#"+r.htmlObject).append(p),n("img.captify").captify(n.extend({bDetails:b,spanWidth:"95%",hideDelay:3e3,hasButton:!1,opacity:"0.5"},s.caption)),b.one("capityFinished",function(){a.offset(),b.offset();
a.length>1&&(b.bind("mouseenter",function(){n("#"+r.htmlObject+"image").trigger("detailsClick",[this])
}),b.css("left",b.position().left+n(a[1]).width()-b.width()-5),b.css("top",b.position().top+n(a[1]).height()-b.height()),a[0].id=a[0].id+"Map");
for(var t in c)c.hasOwnProperty(t)&&void 0!=c[t].callback&&n("#"+h+t).bind("click",c[t].callback)
})}});return r});