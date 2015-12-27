define(["cdf/lib/jquery","amd!cdf/lib/underscore","cdf/lib/mustache","cdf/Dashboard.Clean","cdf/AddIn","../extensions/renderers"],function(e,t,n,o,r,l){!function(e,t,n){var o;
o=new t({name:"notificationSelectionLimit",label:"Notification that the selection limit has been reached",help:"Acts on the footer of the Root view",defaults:{hook:"footer"},implementation:function(e,t){return n.notificationSelectionLimit.call(this,e,t.model,t.configuration)
}}),e.registerGlobalAddIn("FilterComponent","renderRootSelection",o)}(o,r,l.Extensions.Renderers),function(e,t,n){var o;
o=new t({name:"sumSelected",label:"Sum the values of the selected items",implementation:function(e,t){return n.sumSelected.call(this,e,t.model,t.configuration)
}}),e.registerGlobalAddIn("FilterComponent","renderRootSelection",o),e.registerGlobalAddIn("FilterComponent","renderGroupSelection",o)
}(o,r,l.Extensions.Renderers),function(e,n){var o;o=new n({name:"randomColor",label:"Programmatically sets a random color",defaults:{filter:".filter-item-body"},implementation:function(e,n,o){return e.find(o.filter).css({color:"rgb("+t.random(255)+","+t.random(255)+","+t.random(255)+")"})
}}),e.registerGlobalAddIn("FilterComponent","renderItemSelection",o)}(o,r),function(e,t){var n;
n=new t({name:"selectedOnTop",label:"Keep selected items on top ",implementation:function(e,t){var n;
return n=t.model.getSelection()?"A":"Z",n+=t.model.index()}}),e.registerGlobalAddIn("FilterComponent","sortItem",n),e.registerGlobalAddIn("FilterComponent","sortGroup",n)
}(o,r,l.Extensions.Sorters),function(e,t){var n;n=new t({name:"insertionOrder",label:"Keep insertion order",implementation:function(e,t){var n;
return n=t.model.index()}}),e.registerGlobalAddIn("FilterComponent","sortItem",n),e.registerGlobalAddIn("FilterComponent","sortGroup",n)
}(o,r,l.Extensions.Sorters),function(e,t){var n;n=new t({name:"sortByLabel",label:"Sort items by label, alphabetically",defaults:{ascending:!0},implementation:function(e,t){var n;
return n=t.model.get("label")}}),e.registerGlobalAddIn("FilterComponent","sortItem",n),e.registerGlobalAddIn("FilterComponent","sortGroup",n)
}(o,r),function(e,t){var n;n=new t({name:"sortByValue",label:"Sort items by value",defaults:{ascending:!1},implementation:function(e,t,n){var o;
return o=t.model.get("value"),n.ascending?o:-1*o}}),e.registerGlobalAddIn("FilterComponent","sortItem",n),e.registerGlobalAddIn("FilterComponent","sortGroup",n)
}(o,r),function(e,n,o){var r;r=new o({name:"sumValues",label:"Sums the values of the selected items",defaults:{formatValue:function(e){return n.render("{{total}}",{total:e})
}},implementation:function(e,n,o){var r,l,i;return i=n.model.flatten().filter(function(e){return null==e.children()
}).filter(function(e){return e.getSelection()===!0}).reduce(function(e,t){return e+t.get("value")
},0).value(),l=n.model.isRoot()?".filter-root-selection-value":".filter-group-selection-value",r=t.isFinite(i)?o.formatValue(i):"",e.find(l+":eq(0)").html(r)
}}),e.registerGlobalAddIn("FilterComponent","renderRootSelection",r),e.registerGlobalAddIn("FilterComponent","renderGroupSelection",r)
}(o,n,r),function(e,n,o){var r;r=new o({name:"template",label:"Mustache template",defaults:{template:"{{label}}",filter:"",postRender:void 0},implementation:function(e,o,r){var l,i;
return!t.isEmpty(r.template)&&(i=n.render(r.template,o.model.toJSON()),l=e,t.isEmpty(r.filter)||(l=e.find(r.filter+":eq(0)")),l.html(i),t.isFunction(r.postRender))?r.postRender.call(this,e,o,r):void 0
}}),e.registerGlobalAddIn("FilterComponent","renderRootHeader",r),e.registerGlobalAddIn("FilterComponent","renderRootFooter",r),e.registerGlobalAddIn("FilterComponent","renderRootSelection",r),e.registerGlobalAddIn("FilterComponent","renderGroupSelection",r),e.registerGlobalAddIn("FilterComponent","renderItemSelection",r)
}(o,n,r),function(e,t){var n;n=new t({name:"accordion",label:"Makes all filters behave as an accordion",defaults:{group:"filters"},implementation:function(e,t,n){t.model.on("change:isCollapsed",function(e,o){return o===!1?t.dashboard.trigger("filters:close",e,n):void 0
}),t.model.listenTo(t.dashboard,"filters:close",function(e,o){return o.group===n.group&&e!==t.model&&t.model.get("isDisabled")===!1?t.model.set("isCollapsed",!0):void 0
})}}),e.registerGlobalAddIn("FilterComponent","postUpdate",n)}(o,r)});