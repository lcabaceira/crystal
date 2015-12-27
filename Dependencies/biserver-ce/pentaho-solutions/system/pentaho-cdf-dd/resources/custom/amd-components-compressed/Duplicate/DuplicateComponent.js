define("cde/components/DuplicateComponent",["cdf/components/BaseComponent","cdf/Logger","cdf/lib/jquery"],function(e,t,a){var r=0,n=e.extend({update:function(){var e=this,t=a("#"+e.htmlObject).empty(),r=a("<a href='javascript:;'>Duplicate</a>");
r.click(function(){e.duplicate()}),r.appendTo(t)},duplicate:function(e){var t=this,n="render_";
e=e||{},r+=1;var o="_"+r,c={};a.each(t.parameters,function(a,r){var n=r+o;t.dashboard.setBookmarkable(n,t.dashboard.isBookmarkable(r)),t.dashboard.setParameter(n,e[r]||t.dashboard.getParameterValue(r)),c[r]=n
});var d={};a.each(t.components,function(e,t){var a=t+o;d[t]=a});var i={};i[t.targetHtmlObject]=(t.targetHtmlObject+o).replace(/([^\\])\$/g,"$1\\$");
var s=a("#"+t.targetHtmlObject).clone();s.attr("id",s.attr("id")+o),s.find("[id]").each(function(e,t){var r=a(t);
r.attr("id",r.attr("id")+o)}),t.targetContainer?s.appendTo("#"+t.targetContainer):s.insertAfter("#"+t.targetHtmlObject);
for(var m in t.components){var p=t.components[m];p=RegExp("^"+n).test(p)?p:n+p;var l=t.dashboard.getComponent(p);
if(l){i[l.htmlObject]=(l.htmlObject+o).replace(/([^\\])\$/g,"$1\\$");var u=l.clone(c,d,i);
u.name=u.name+o,t.dashboard.addComponents([u]),t.dashboard.update(u)}}},clone:function(e,a,r){t.warn("This function is deprecated. Please use targetComponent.clone(...), see BaseComponent.js in CDF for more details.");
var n=this.base(e,a,r);return n.targetHtmlObject=r[n.targetHtmlObject],n.parameters&&(n.parameters=n.parameters.map(function(t){return t in e?e[t]:t
})),n}});return n});