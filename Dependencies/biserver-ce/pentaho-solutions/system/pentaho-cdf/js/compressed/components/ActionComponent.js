define(["amd!../lib/underscore","./UnmanagedComponent","../dashboard/Utils"],function(t,i,n){var e=i.extend({_docstring:function(){return"Abstract class for components calling a query/endpoint"
},update:function(){var i=t.bind(this.render,this);t.isUndefined(this.manageCallee)||this.manageCallee?this.synchronous(i):i()
},triggerAction:function(){var i=n.propertiesArrayToObject(this.actionParameters),e=this.failureCallback?this.failureCallback:function(){},a=this.successCallback?this.successCallback:function(){},s=t.bind(function(){this.unblock(),a.apply(this,arguments)
},this),r=t.bind(function(){this.unblock(),e.apply(this,arguments)},this);return this.block(),this.dashboard.getQuery(this.actionDefinition).fetchData(i,s,r)
},hasAction:function(){return this.actionDefinition?this.dashboard.detectQueryType?!!this.dashboard.detectQueryType(this.actionDefinition):!!this.actionDefinition.queryType&&this.dashboard.hasQuery(this.actionDefinition.queryType):!1
}});return e});