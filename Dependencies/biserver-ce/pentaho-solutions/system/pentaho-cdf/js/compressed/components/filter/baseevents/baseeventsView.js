define(["cdf/lib/jquery","amd!cdf/lib/backbone","cdf/lib/mustache","./baseevents"],function(e,t,i,n){var o=n.convertClass(t.View,{initialize:function(t){this.setModel(t.model),this.setElement(e(t.target))
},getModel:function(){return this.model},setModel:function(e){this.stopListening(),this.model=e,this.bindToModel()
},bindToModel:function(){this.listenTo(this.getModel(),"change",this.render)},render:function(){return this.$el.html(i.render(this.template,this.model.toJSON()))
}});return o});