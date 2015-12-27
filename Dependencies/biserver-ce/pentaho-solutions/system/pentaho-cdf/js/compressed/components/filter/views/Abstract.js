define(["amd!cdf/lib/underscore","cdf/lib/mustache","../baseevents/baseeventsView","../base/filter-base-implementation","cdf/lib/jquery","amd!cdf/lib/jquery.mCustomScrollbar"],function(t,i,e,n,o){return n.Views.AbstractView=e.extend(n.Logger).extend({initialize:function(t){return this.configuration=t.configuration,this.config=this.configuration[this.type],null!=this.config.view.templates&&o.extend(!0,this.template,this.config.view.templates),this.model&&this.bindToModel(this.model),this.setElement(t.target),this.render(),this
},bindToModel:function(t){return this.onChange(t,"isVisible",this.updateVisibility),this
},onChange:function(i,e,n){var o,r;return r=e.split(" "),o=t.map(r,function(t){return"change:"+t
}).join(" "),this.config.view.throttleTimeMilliseconds>=0?this.listenTo(i,o,t.throttle(n,this.config.view.throttleTime,{leading:!1})):this.listenTo(i,o,n),this
},updateSlot:function(){return t.bind(function(){var t,i;return i=this.getViewModel(),t=this.renderSlot("slot"),t.call(this,i)
},this)},renderSlot:function(e){return t.bind(function(t){var o;return this.template[e]&&(o=i.render(this.template[e],t),this.$(this.config.view.slots[e]).replaceWith(o)),this.injectContent(e),n.count++
},this)},getViewModel:function(){var i;return i=t.result(this.config,"options"),o.extend(!0,this.model.toJSON(),i,{strings:t.result(this.config,"strings"),selectionStrategy:t.omit(this.configuration.selectionStrategy,"strategy"),isPartiallySelected:this.model.getSelection()===n.Enum.select.SOME,numberOfChildren:this.model.children()?this.model.children().length:0})
},injectContent:function(i){var e,n,o,r;return o=null!=(e=this.config)?null!=(n=e.renderers)?n[i]:void 0:void 0,null!=o?(this.debug("injecting"),t.isArray(o)||(o=[o]),r=this,t.each(o,function(i){return t.isFunction(i)?i.call(r,r.$el,r.model,r.configuration):void 0
}),this):void 0},render:function(){var t;return t=this.getViewModel(),this.renderSkeleton(t),this.renderSelection(t),this.updateVisibility(t),this
},renderSkeleton:function(t){return this.$el.html(i.render(this.template.skeleton,t)),n.count++,this
},updateSelection:function(t){var i;return t===this.model&&(i=this.getViewModel(),this.renderSelection(i)),this
},renderSelection:function(t){var e;return e=i.render(this.template.selection,t),this.$(this.config.view.slots.selection).replaceWith(e),this.injectContent("selection"),n.count++
},updateVisibility:function(){return this.model.getVisibility()?this.$el.show():this.$el.hide()
},getChildrenContainer:function(){return this.$(this.config.view.slots.children)},createChildNode:function(){var t,i;
return t=o("<div/>").addClass(this.config.view.childConfig.className),i=this.$(this.config.view.slots.children),t.appendTo(i),t
},appendChildNode:function(t){var i;return i=this.$(this.config.view.slots.children),t.appendTo(i),t
},updateScrollBar:function(){var i,e;return i=this.config.options.scrollThreshold,e=t.isFinite(this.configuration.pagination.pageSize)&&this.configuration.pagination.pageSize>0,e=e||"Item"!==this.type&&this.model.flatten().size().value()>i,e?(this.log("There are more than "+i+" items, adding scroll bar"),this.addScrollBar()):void 0
},addScrollBar:function(){var i,e,n;if(null!=this._scrollBar)return this;switch(this.debug("Adding a scrollbar to "+this.model.get("label")),n=this,this.config.view.scrollbar.engine){case"optiscroll":this._scrollBar=this.$(this.config.view.slots.children).addClass("optiscroll-content").parent().addClass("optiscroll").optiscroll().off("scrollreachbottom").on("scrollreachbottom",function(t){return n.trigger("scroll:reached:bottom",n.model,t)
}).off("scrollreachtop").on("scrollreachtop",function(t){return n.trigger("scroll:reached:top",n.model,t)
}).data("optiscroll");break;case"mCustomScrollbar":e=o.extend(!0,{},this.config.view.scrollbar.options,{callbacks:{onTotalScroll:function(){return n.trigger("scroll:reached:bottom",n.model)
},onTotalScrollBack:function(){return n.trigger("scroll:reached:top",n.model)}}}),this._scrollBar=this.$(this.config.view.slots.children).parent().mCustomScrollbar(e)
}return this.config.options.isResizable&&(i=this.$(this.config.view.slots.children).parent(),t.isFunction(i.resizable)&&i.resizable({handles:"s"})),this
},setScrollBarAt:function(t){return null!=this._scrollBar&&this._scrollBar.scrollIntoView(t),this
},onMouseOver:function(){var t;return t=this.$(this.config.view.slots.selection),t=this.$("div:eq(0)"),this.trigger("mouseover",this.model),this
},onMouseOut:function(){var t;return t=this.$(this.config.view.slots.selection),t=this.$("div:eq(0)"),this.trigger("mouseout",this.model),this
},onSelection:function(){return this.trigger("selected",this.model),this},onApply:function(){return this.trigger("control:apply",this.model),this
},onCancel:function(){return this.debug("triggered Cancel"),this.trigger("control:cancel",this.model),this
},onFilterChange:function(t){var i;return i=o(t.target).val(),this.trigger("filter",i,this.model),this
},onFilterClear:function(){var t;return t="",this.$(".filter-filter-input:eq(0)").val(t),this.trigger("filter",t,this.model),this
},onToggleCollapse:function(t){return this.debug("triggered collapse"),this.trigger("toggleCollapse",this.model,t),this
},close:function(){return this.remove(),this.unbind()}}),n});