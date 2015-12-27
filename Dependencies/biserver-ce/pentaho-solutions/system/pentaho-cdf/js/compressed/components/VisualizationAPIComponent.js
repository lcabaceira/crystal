define(["amd!../lib/underscore","./UnmanagedComponent","pentaho/visual/Wrapper"],function(e,i,t){var n=i.extend({update:function(){this.beginQuery(this.queryDefinition,this.render)
},render:function(i){var n=this.placeholder()[0],a=new t(n);a.data=i,a.visualSpec=this.getVisualSpec(),a.update().then(e.bind(this.endExec,this),e.bind(this.failExec,this))
},getVisualSpec:function(){var i={};return e.each(this.vizOptions,function(e){i[e[0]]=this.getParameterValue(e[1])
},this.dashboard),i.type=this.vizId,i}});return n});