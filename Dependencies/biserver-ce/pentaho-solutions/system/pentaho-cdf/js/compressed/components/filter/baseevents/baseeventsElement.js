define(["amd!cdf/lib/underscore","./baseevents"],function(n){var t=n.isFunction,e=n.isArray,i=n.reduce,r=Base.extend({initialize:function(n){this.base(n),this._normalizeInputHandlers(n.inputHandlers)
},_normalizeInputHandlers:function(){this._inputHandlers=e(this.inputHandlers)?this.inputHandlers:t(this.inputHandlers)?[this.inputHandlers]:[]
},_bindOutputHandlers:function(){},_inputController:function(n){var t=this.model,e=i(this._inputHandlers,function(n,e){return e(n,t)
},n);t.set(e)},_getViewElement:function(){return this.view.$el},update:function(n){return this._inputController(n),this._getViewElement()
}});return r});