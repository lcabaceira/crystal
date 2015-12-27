define(["cdf/lib/jquery","amd!cdf/lib/underscore","cdf/components/BaseComponent","../base/filter-base-implementation"],function(e,t,n,c){return c.SelectionStrategies.AbstractSelect=n.extend(c.Logger).extend({ID:"BaseFilter.SelectionStrategies.AbstractSelect",constructor:function(){return this.isLogicGlobal=!0
},getNewState:function(e){switch(e){case c.Enum.select.NONE:return c.Enum.select.ALL;
case c.Enum.select.ALL:return c.Enum.select.NONE;case c.Enum.select.SOME:return c.Enum.select.NONE
}},inferSelectionFromChildren:function(e){var n,r;return n=t.every(e,function(e){return e===c.Enum.select.ALL
}),r=t.every(e,function(e){return e===c.Enum.select.NONE}),n?c.Enum.select.ALL:r?c.Enum.select.NONE:c.Enum.select.SOME
},setSelection:function(){throw new Error("NotImplemented")},changeSelection:function(n){var r,o,s,i;
return o=e.now(),r=c.count,s=this.getNewState(n.getSelection()),s=this.setSelection(s,n),i=this,t.delay(function(){return i.debug("Switching "+n.get("label")+" to "+s+" took "+(e.now()-o)+" ms and "+(c.count-r)+" renders")
},0),this},applySelection:function(e){return e.updateSelectedItems(),e.root().set("isCollapsed",!0),this
},getSelectedItems:function(e,t){return e.getSelectedItems(t)}}),c});