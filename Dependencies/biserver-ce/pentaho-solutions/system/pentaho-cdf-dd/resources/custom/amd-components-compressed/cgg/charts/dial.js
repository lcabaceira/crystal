function decimalPlaces(a){var e=Math.abs(a).toString(),t=-1!=e.lastIndexOf(".")?e.lastIndexOf("."):0;
return e.length-t-1}lib("cgg-env.js"),cgg.init();var pv=require("ccc!protovis-standalone");
cgg.utils.initDocument("dial.svg");var scale=params.get("scale"),colors=params.get("colors"),scale=null!=scale&&scale.length>0?scale:[0,25,50,100],colors=null!=colors&&colors.length>0?colors:["red","yellow","green"],min=parseFloat(scale[0]),max=parseFloat(scale[scale.length-1]),value=parseFloat(params.get("value")),maxPrecision=5;
min=min>value?value:min,max=value>max?value:max,scale[scale.length-1]=max,scale[0]=min;
for(var arcs=[],i=0;i<colors.length;i++)arcs.push({min:scale[i],max:scale[i+1],color:colors[i]});
var w=600,h=300,r=.75*h,a=pv.Scale.linear(min,max).range(0,Math.PI),ticks=a.ticks(),start=-Math.PI,localMax=0,decimals;
for(i=0;i<ticks.length;i++)decimals=decimalPlaces(ticks[i]),maxPrecision>decimals&&decimals>localMax&&(localMax=decimals),decimals>maxPrecision&&(ticks[i]=ticks[i].toFixed(localMax));
var vis=(new pv.Panel).canvas(document.getElementById("escala_cor")).width(w).height(h);
vis.add(pv.Wedge).data(arcs).bottom(25).left(w/2).innerRadius(r-15).outerRadius(r).startAngle(function(e){return-Math.PI+a(e.min)
}).fillStyle(function(a){return a.color}).angle(function(e){return a(e.max)-a(e.min)
}),vis.add(pv.Wedge).data(ticks).bottom(25).left(w/2).innerRadius(r+10.5).outerRadius(r+25).startAngle(function(e){return-Math.PI+a(e)-.0025
}).fillStyle("#66CCFF").angle(.005).add(pv.Wedge).innerRadius(r+39).outerRadius(r+40).angle(0).anchor("outer").add(pv.Label).textAngle(0).font("12.4 sans-serif").textStyle("#626a6e").textAlign("center").textBaseline("middle").text(function(a){return a
}),vis.render();var rotation=(value-min)/(max-min)*180;document.getElementById("ponteiro").setAttribute("transform","rotate("+rotation+",300,275)");
