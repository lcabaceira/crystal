(function(){var t={where:function(t){var n=[];return _.each(this,function(e){n=n.concat(e.where(t))
}),e(_.uniq(n))}},e=function(e){return _.extend(e,t)},n=(Backbone.TreeModel=Backbone.Model.extend({nodesAttribute:"nodes",constructor:function(t){Backbone.Model.prototype.constructor.apply(this,arguments),this._nodes=new n(void 0,{model:this.constructor}),this._nodes.parent=this,t&&t[this.nodesAttribute]&&(this.add(t[this.nodesAttribute]),this.unset(this.nodesAttribute)),this._nodes.on("all",function(){this.root().trigger.apply(this.root(),arguments)
},this)},toJSON:function(){var t=Backbone.Model.prototype.toJSON.apply(this,arguments),e=this._nodes.toJSON();
return e.length&&(t[this.nodesAttribute]=e),t},find:function(t){return this.findWhere({id:t})
},findWhere:function(t){return this.where(t,!0)},where:function(t,n,o){var i,r=[];
if(!o&&_.where([this.toJSON()],t)[0]&&r.push(this),!n)return r=r.concat(this._nodes.where(t)),this._nodes.each(function(e){r=r.concat(e.where(t,!1,!0))
}),e(r);if(r[0])return r[0];if(i=this._nodes.where(t,!0),_.isArray(i)&&(i=i[0]),i instanceof Backbone.Model)return i;
for(var s=0,h=this._nodes.length;h>s;s++)if(i=this._nodes.at(s).where(t,!0,!0))return i
},isRoot:function(){return null===this.parent()},root:function(){return this.parent()&&this.parent().root()||this
},contains:function(t){if(!t||!t.isRoot||!t.parent||t.isRoot())return!1;var e=t.parent();
return e===this||this.contains(e)},parent:function(){return this.collection&&this.collection.parent||null
},nodes:function(){return this._nodes.length&&this._nodes||null},index:function(){return this.isRoot()?null:this.collection.indexOf(this)
},next:function(){if(this.isRoot())return null;var t=this.index();return t<this.collection.length-1?this.collection.at(t+1):null
},prev:function(){if(this.isRoot())return null;var t=this.index();return t>0?this.collection.at(t-1):null
},remove:function(t,e){return t?(e?this.where(t,!0).remove():_.each(this.where(t),function(t){t.collection&&t.remove()
}),this):this.isRoot()?!1:(this.collection.remove(this),!0)},empty:function(){return this._nodes.reset(),this
},add:function(t){return t instanceof Backbone.Model&&t.collection&&t.collection.remove(t),this._nodes.add.apply(this._nodes,arguments),this
},insertBefore:function(t){return this.isRoot()||(t instanceof Backbone.Model&&t.collection&&t.collection.remove(t),this.parent().add(t,{at:this.index()})),this
},insertAfter:function(t){return this.isRoot()||(t instanceof Backbone.Model&&t.collection&&t.collection.remove(t),this.parent().add(t,{at:this.index()+1})),this
},before:function(t){return t?this.insertBefore(t):this.prev()},after:function(t){return t?this.insertAfter(t):this.next()
}}),Backbone.TreeCollection=Backbone.Collection.extend({where:function(t,n){if(n&&n.deep){var o=[];
return this.each(function(e){o=o.concat(e.where(t))}),e(o)}return Backbone.Collection.prototype.where.apply(this,arguments)
}}))}).call(this);