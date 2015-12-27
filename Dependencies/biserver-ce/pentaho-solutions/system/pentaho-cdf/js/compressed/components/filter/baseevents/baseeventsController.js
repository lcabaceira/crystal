define(["./baseevents","./baseeventsCollection"],function(e,s){function t(e,t){this.views=new s(e),this.models=new s(t)
}var n=e.convertClass(t,{addView:function(){return this.views.push.apply(this.views,arguments)
},removeView:function(){return this.views.pop.apply(this.views,arguments)},addModel:function(){return this.models.push.apply(this.models,arguments)
},removeModel:function(){return this.models.pop.apply(this.models,arguments)}});return n
});