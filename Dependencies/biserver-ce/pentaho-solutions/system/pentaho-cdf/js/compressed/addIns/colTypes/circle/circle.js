define(["../../../AddIn","../../../Dashboard","../../../lib/raphael","../../../lib/jquery","amd!../../../lib/datatables"],function(a,e,l,i){var t=new a({name:"circle",label:"Circle",defaults:{canvasSize:10,radius:4,color:"black",title:function(a){return"Value: "+a.value
}},implementation:function(a,e,t){var n,r,c,o=(i(a).empty(),e.value,{});for(var s in t)t.hasOwnProperty(s)&&(n=t[s],o[s]="function"==typeof n?n.call(this,e,t):n);
r=o.canvasSize,c=l(a,o.canvasSize,o.canvasSize);var u=c.circle(r/2,r/2,o.radius);
u.attr({fill:o.color,opacity:1,stroke:"none",title:o.title})}});return e.registerGlobalAddIn("Table","colType",t),t
});