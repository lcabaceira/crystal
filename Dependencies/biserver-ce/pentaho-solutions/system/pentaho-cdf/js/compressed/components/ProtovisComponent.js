define(["./ChartComponent","../lib/jquery","../lib/CCC/protovis-compat!"],function(t,i,e){var r=t.extend({update:function(){void 0==this.parameters&&(this.parameters=[]),this.renderChart()
},render:function(t){i("#"+this.htmlObject).html('<div id="'+this.htmlObject+'protovis"></div>');
var r=(new e.Panel).canvas(this.htmlObject+"protovis").width(this.width).height(this.height);
this.vis=r,this.customfunction(r,t),r.root.render()},processdata:function(t){this.render(t)
}});return r});