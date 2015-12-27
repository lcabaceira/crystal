define(["../dashboard/Utils","./PivotLinkComponent.ext","./BaseComponent","../lib/jquery","amd!../lib/jquery.fancybox"],function(t,o,e,i){var n=e.extend({update:function(){var t=void 0==this.tooltip?"View details in a Pivot table":this.tooltip,o=i('<a class="pivotLink"> </a>').html(this.content).attr("href","javascript:require(['cdf/components/PivotLinkComponent'],function(PivotLinkComponent){PivotLinkComponent.openPivotLink(this.dashboard.getComponent('"+this.name+"'));});void(0);").attr("title",t);
i("#"+this.htmlObject).empty(),i("#"+this.htmlObject).html(o),i("a.pivotLink").tooltip({showURL:!1,track:!0,delay:1e3,opacity:.5,content:t})
}},{openPivotLink:function(e){var n=o.getPivot("system","pentaho-cdf/actions","jpivot.xaction")+"&",a=e.pivotDefinition;
"string"==typeof a.dataSource&&a.dataSource&&(a=i.extend({},e.dashboard.getDataSource(a.dataSource),a),delete a.dataSource);
var r=[];for(var d in a)a.hasOwnProperty(d)&&r.push(d+"="+encodeURIComponent(t.ev(a[d])));
n+=r.join("&"),n=n.replace(/'/g,"&#39;"),i.fancybox({type:"iframe",href:n,width:i(window).width(),height:i(window).height()})
}});return n});