define(["amd!cdf/lib/underscore","amd!cdf/lib/backbone.treemodel","../baseevents/baseevents","../base/filter-base-implementation"],function(e,n,t,r){return r.Models.Tree=t.extendWithEvents(n.TreeModel).extend(r.Logger).extend({url:"",children:function(){return this.nodes.apply(this,arguments)
},parse:function(e){return e},walkDown:function(n,t,r){var i;return t||(t=function(e){return e
}),i=this.children()?t(this.children().map(function(e){return e.walkDown(n,t,r)})):n(this),e.isFunction(r)&&(i=r(this,i)),i
},flatten:function(){var n;return n=[this],this.children()&&this.children().each(function(e){return e.flatten().each(function(e){return n.push(e)
})}),e.chain(n)}}),r});