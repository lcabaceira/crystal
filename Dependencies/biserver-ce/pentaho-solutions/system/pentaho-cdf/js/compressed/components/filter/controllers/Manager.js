define(["amd!cdf/lib/underscore","./RootCtrl","../models/SelectionTree"],function(t,e){return e.Controllers.Manager=e.Models.Tree.extend({ID:"BaseFilter.Controllers.Manager",defaults:{model:null,view:null,controller:null,configuration:null},constructor:function(){return this.base.apply(this,arguments),this.updateChildren(),this
},initialize:function(){return null==this.get("view")&&this.addViewAndController(this.get("model")),this.applyBindings(),this
},close:function(){return this.get("view").close(),this.get("controller").stopListening().off(),this.stopListening(),this.off(),this.clear(),this
},applyBindings:function(){var e,i,n,r;return i=this,r=function(e){var n;return n=i.get("configuration").pagination.throttleTimeMilliseconds,t.throttle(e,n||0,{trailing:!1})
},n=function(e){var n;return n=i.get("view").config.view.throttleTimeMilliseconds,t.throttle(e,n||0,{leading:!1})
},e={model:{add:this.onNewData,"change:selectedItems":this.onApply,selection:this.sortSiblings},view:{filter:n(this.onFilterChange),"scroll:reached:top":r(this.getPreviousPage),"scroll:reached:bottom":r(this.getNextPage)}},i=this,t.each(e,function(e,n){return t.each(e,function(e,r){return i.listenTo(i.attributes[n],r,t.bind(e,i))
})}),this.on("post:child:selection request:child:sort",this.sortChildren),this.on("post:child:add",t.throttle(this.onUpdateChildren,1e3,{leading:!1})),this
},addViewAndController:function(t){var i,n,r,o,s,l,h,u,a,d;return u=!0,null!=this.parent()?(d=this.parent(),o=d.get("configuration"),r=o[d.get("view").type].view.childConfig,a=d.get("view").createChildNode(),n=t.children()?e.Views[r.withChildrenPrototype]:e.Views[r.withoutChildrenPrototype],i=e.Controllers.RootCtrl,s=d.get("controller")):(o=this.get("configuration"),a=o.target,n=e.Views.Root,i=e.Controllers.RootCtrl,s=null),h=new n({model:t,configuration:o,target:a}),this.set("view",h),u===!0&&null!==s?(l=s,l.bindToView(h)):l=new i({model:t,view:h,configuration:o}),this.set("controller",l),this.debug("addViewAndController is done for "+t.get("id")+" : "+t.get("label")),this
},onNewData:function(t){var e;return this.debug("New data ("+t.get("label")+") caught by "+this.get("model").get("label")),e=this.where({model:t.parent()}),1===e.length?e[0].trigger("post:child:add"):void 0
},onUpdateChildren:function(){return this.debug("New data added to "+this.get("model").get("label")+" : updating children"),this.updateChildren(),this.restoreScroll(),this.trigger("post:update:children",this)
},restoreScroll:function(){return null!=this.get("view")._scrollBar&&(this.debug("This group has a scrollbar"),null!=this.previousPosition)?(this.debug("Scrolling back"),this.get("view").setScrollBarAt(this.previousPosition),this.previousPosition=null):void 0
},getNextPage:function(e,i){var n,r,o;return o=this.getSorter(),t.isFunction(o)&&(n=this.children().sortBy(function(t,e){return o(t.get("model"),e)
}),this.previousPosition=null!=(r=t.last(n,2)[0])?r.get("view").$el:void 0),this.getPage("next",e,i)
},getPreviousPage:function(e,i){var n,r,o;return o=this.getSorter(),t.isFunction(o)&&(n=this.children().sortBy(function(t,e){return o(t.get("model"),e)
}),this.previousPosition=null!=(r=t.first(n,2)[1])?r.get("view").$el:void 0),this.getPage("previous",e,i)
},getPage:function(t,e){var i;return this.debug("Item "+e.get("label")+" requested page "+t),i=this.requestPage(t,this._searchPattern)
},requestPage:function(e,i){var n,r,o;return r=this.get("configuration").pagination.getPage,t.isFunction(r)?(o=this,n=r(e,i).then(function(t){return null!=t.resultset?o.debug("getPage: got "+t.resultset.length+" more items"):o.debug("getPage: no more items")
})):this},updateChildren:function(){var e;return e=this.get("model").children(),null!=e&&(e.each(function(e){return function(i){var n;
return n=e.children()?t.any(e.children().map(function(t){return t.get("model")===i
})):!1,n?void 0:(e.debug("adding child model "+i.get("label")),e.addChild(i))}}(this)),this.sortChildren(),this.get("view").updateScrollBar()),this
},addChild:function(t){var e;return e={model:t,configuration:this.get("configuration")},this.add(e),this
},removeChild:function(){throw new Error("NotImplemented")},sortSiblings:function(t){return this.debug("sortSiblings: "+this.get("model").get("label")+" was triggered from "+t.get("label")+":"+t.getSelection()),this.get("model")!==t?this:this.parent()?this.parent().trigger("request:child:sort"):void 0
},getSorter:function(){var e,i,n;return n=this.children().first().get("view").type,(i=this.get("configuration")[n].sorter)?(e=this.get("configuration"),t.isFunction(i)?function(t){return i(null,t,e)
}:t.isArray(i)?function(n){return t.chain(i).map(function(t){return t(null,n,e)}).join("").value()
}:void 0):void 0},sortChildren:function(){var e,i,n,r,o;return this.children()?(n=this.getSorter(),t.isFunction(n)&&(o=function(t,e){return n(t.item.get("model"),e)
},e=this.get("view").getChildrenContainer(),e.hide(),i=this._detachChildren(),r=t.sortBy(i,o),this._appendChildren(r),e.show()),this):this
},_detachChildren:function(){var t;return t=this.children()?this.children().map(function(t){var e;
return e={item:t,target:t.get("view").$el.detach()}}):null},_appendChildren:function(e){return null!=e&&t.each(e,function(t){return function(e){return t.get("view").appendChildNode(e.target)
}}(this)),this},onFilterChange:function(e){var i,n;this._searchPattern=e.trim().toLowerCase(),i=t.bind(function(){var t;
return t=this.filter(this._searchPattern),this.get("model").setVisibility(!0)},this),this.get("configuration").search.serverSide===!0&&(n=this,this.requestPage(0,this._searchPattern).then(function(){t.defer(i)
})),t.defer(i)},filter:function(e,i){var n,r;return n=t.chain(["label"]).map(function(t){return function(e){return t.get("model").get(e)
}}(this)).compact().value().join(" "),i&&(n=i+n),this.children()?r=t.any(this.children().map(function(t){var i;
return i=t.filter(e,n),t.get("model").setVisibility(i),i})):t.isEmpty(e)?r=!0:(r=null!=n.toLowerCase().match(e.toLowerCase()),this.debug("fullstring  "+n+" match to "+e+": "+r)),this.get("model").setVisibility(r),r
},onApply:function(){return this.onFilterChange("")}}),e});