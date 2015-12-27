define(["./ChartComponent","../lib/CCC/pvc","../lib/modernizr","../lib/jquery","../lib/CCC/protovis-compat!"],function(t,e,i,n,r){e.defaultCompatVersion(2);
var o=t.extend({query:null,chart:null,_preProcessChartDefinition:function(){var t=this.chartDefinition;
if(t){var i=t.compatVersion;if(null==i&&(i="function"==typeof e.defaultCompatVersion?e.defaultCompatVersion():1),1>=i){"showLegend"in t&&(t.legend=t.showLegend,delete t.showLegend);
for(var n in t){var r=/^barLine(.*)$/.exec(n);r&&(t["secondAxis"+(r[1]||"")]=t[n],delete t[n])
}}}},update:function(){null==this.parameters&&(this.parameters=[]);var t=n("#"+this.htmlObject).empty(),e=this;
"undefined"==typeof this.chartDefinition.width&&(this.chartDefinition.width=t.width()),"undefined"==typeof this.chartDefinition.height&&(this.chartDefinition.height=t.height()),"undefined"!=typeof i&&i.svg?this.renderChart():r.listenForPageLoad(function(){e.renderChart()
})},render:function(t){n("#"+this.htmlObject).append('<div id="'+this.htmlObject+'protovis"></div>'),this._preProcessChartDefinition();
var e=n.extend({},this.chartDefinition);if(e.canvas=this.htmlObject+"protovis","undefined"!=typeof e.extensionPoints){var i={};
e.extensionPoints.forEach(function(t){i[t[0]]=t[1]}),e.extensionPoints=i}this.chart=new this.cccType(e),arguments.length>0&&this.chart.setData(t,{crosstabMode:this.crosstabMode,seriesInRows:this.seriesInRows}),this.chart.render()
}});return o});