define(["amd!cdf/lib/underscore","../models/Tree"],function(e,t){return t.Models.SelectionTree=t.Models.Tree.extend({defaults:{id:void 0,label:"Label",isSelected:!1,isVisible:!0,isCollapsed:!0,numberOfSelectedItems:0,numberOfItems:0,page:0},constructor:function(e,t){return null!=(null!=e?e.label:void 0)&&(null==e.id||(null!=t?t.useValueAsId:void 0)===!0)&&(e.id=e.label),this.base(e,t)
},initialize:function(){return this.base.apply(this,arguments),this.on("add remove",this.update)
},sync:function(t,n){return this.log("Please "+t+" item "+n.get("label")),e.each(n.where({isSelected:!0}),function(e){return this.log("Processing "+t+" on item "+e.get("label"))
})},setSelection:function(e){return this.getSelection()===e?this:(this.set("isSelected",e),e!==t.Enum.select.SOME&&this.children()&&this.children().each(function(t){return t.setSelection(e)
}),this.parent()&&this.parent().updateSelection(),this)},getSelection:function(){return this.get("isSelected")
},setAndUpdateSelection:function(e){return this.setSelection(e),this.update(),this.trigger("selection",this)
},setVisibility:function(e){var t;return t=this.get("isVisible"),t!==e?this.set("isVisible",e):void 0
},getVisibility:function(){return this.get("isVisible")},getSelectedItems:function(n){var i,r;
switch(i=function(e){return function(){var t;return t=e.get(n||"id")}}(this),r=this.getSelection()){case t.Enum.select.SOME:case void 0:return this.children()?e.flatten(this.children().map(function(e){return e.getSelectedItems(n)||[]
})):i();case t.Enum.select.ALL:return i();case t.Enum.select.NONE:return[];default:return[]
}},setSelectedItems:function(n){var i;return i=this.flatten(),i.filter(function(e){return null==e.children()
}).each(function(i){var r;return r=i.get("id"),e.contains(n,r)?i.setSelection(t.Enum.select.ALL):i.setSelection(t.Enum.select.NONE)
}),i.filter(function(e){return null!=e.children()}).each(function(i){var r;return r=i.get("id"),e.contains(n,r)?i.setSelection(t.Enum.select.ALL):void 0
}),this.update(),this.root().updateSelectedItems({silent:!0})},updateSelectedItems:function(e){return this.root().set("selectedItems",this._getSelectionSnapshot(),e)
},restoreSelectedItems:function(){var e;return e=this.root().get("selectedItems"),null==e&&(e={none:this.flatten()}),e.none.each(function(e){return e.setSelection(t.Enum.select.NONE)
}),null!=e.all&&e.all.each(function(e){return e.setSelection(t.Enum.select.ALL)}),this.update()
},_getSelectionSnapshot:function(){var e,n;return e=this.flatten(),n={none:e.filter(function(e){return e.getSelection()===t.Enum.select.NONE
}),some:e.filter(function(e){return e.getSelection()===t.Enum.select.SOME}),all:e.filter(function(e){return e.getSelection()===t.Enum.select.ALL
})}},update:function(){var e;return this.root().updateSelection(),e=this.root().get("numberOfItemsAtServer"),null!=e?this.root().set("numberOfItems",e):this.root().updateCountOfItems("numberOfItems",function(){return 1
}),this.root().updateCountOfItems("numberOfSelectedItems",function(e){return e.getSelection()===t.Enum.select.ALL?1:0
}),this},updateSelection:function(){var n;return n=function(n){var i,r;return i=e.every(n,function(e){return e===t.Enum.select.ALL
}),r=e.every(n,function(e){return e===t.Enum.select.NONE}),i?t.Enum.select.ALL:r?t.Enum.select.NONE:t.Enum.select.SOME
},this.inferSelection(n,function(e,t){return e.children()&&e.getSelection()!==t?e.setSelection(t):void 0
})},inferSelection:function(t,n){var i,r;return r=function(e){return e.getSelection()
},i=function(t,i){return e.isFunction(n)&&n(t,i),i},this.walkDown(r,t,i)},countItems:function(e){var t;
return t=this.children()?this.children().reduce(function(t,n){return t+n.countItems(e)
},0):e(this)},updateCountOfItems:function(t,n){var i,r,u;return i=function(e){return n(e)
},u=function(t){return e.reduce(t,function(e,t){return e+t},0)},r=function(e,n){return e.children()&&e.set(t,n),n
},this.walkDown(i,u,r)},countSelectedItems:function(){return this.countItems(function(e){return e.getSelection()===t.Enum.select.ALL?1:0
})},updateCountOfSelectedItems:function(){var n,i,r;return n=function(e){return e.getSelection()===t.Enum.select.ALL?1:0
},r=function(t){return e.reduce(t,function(e,t){return e+t},0)},i=function(e,t){return e.children()&&e.set("numberOfSelectedItems",t),t
},this.walkDown(n,r,i)},hasChanged:function(){var t,n;return n=this.get("selectedItems"),t=null!=n?e.any(e.map(this._getSelectionSnapshot(),function(e,t){var i,r;
return r=n[t],i=e.intersection(r.value()).value(),!(e.isEqual(i).value()&&r.isEqual(i).value())
})):!1},setBusy:function(e){return this.root().set("isBusy",e),this},isBusy:function(){return this.root().get("isBusy")
}}),t});