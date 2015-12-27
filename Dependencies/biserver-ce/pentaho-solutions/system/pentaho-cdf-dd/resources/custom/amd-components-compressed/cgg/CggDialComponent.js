define("cdf/components/CggComponent.ext",[],function(){var t={getCggDrawUrl:function(){return CONTEXT_PATH+"plugin/cgg/api/services/draw"
}};return t}),define("cde/components/CggComponent",["cdf/components/UnmanagedComponent","cdf/components/CggComponent.ext","cdf/lib/jquery"],function(t,e,r){var n=t.extend({ph:null,have_SVG:!0,getScriptUrl:function(){return this.resourceFile
},getOutputType:function(){return this.have_SVG?"svg":"png"},detectSvg:function(){this.have_SVG=!(!document.createElementNS||!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect)
},update:function(){this.detectSvg();var t=e.getCggDrawUrl(),n=this.processParams(),a=this.getScriptUrl(),i=this,s=r("#"+this.htmlObject);
this.have_SVG?i.triggerAjax({url:t,data:n,type:"get"},function(e){try{s[0].appendChild(document.importNode(e.lastChild,!0)),s.find("svg").width(i.width).height(i.height)
}catch(r){{i.createObj(t,a,n,i.width,i.height)}s[0].innerHTML=arguments[2].responseText,s.find("svg").width(i.width).height(i.height)
}}):i.synchronous(function(){s.html('<img src="'+t+"?"+r.param(n)+'" width="'+i.width+'" height="'+i.height+'"/>')
})},processParams:function(){var t={};this._processParametersCore(t);var e=this.dashboard.debug;
return e>1&&(t.paramdebug=!0,t.paramdebugLevel=e),t.script=escape(this.getScriptUrl()),t.outputType=this.getOutputType(),t
},_processParametersCore:function(t){for(var e=this.dashboard,n=this.parameters,a=0,i=n.length;i>a;a++){var s=n[a],o=e.getParameterValue(s[1]);
r.isArray(o)&&1==o.length&&(""+o[0]).indexOf(";")>=0&&(o=doCsvQuoting(o[0],";")),t["param"+s[0]]=o
}},objectUrl:function(t,e,r){var n=t+"?",a=[];for(var i in r)r.hasOwnProperty(i)&&a.push(escape(i)+"="+escape(r[i]));
return n+="&"+a.join("&")},createObj:function(t,e,r,n,a){var i=document.createElement("object");
return i.setAttribute("type","image/svg+xml"),i.setAttribute("data",this.objectUrl(t,e,r)),i.setAttribute("width",n),i.setAttribute("height",a),i
}});return n}),define("cde/components/CggDialComponent",["cde/components/CggComponent"],function(t){var e=t.extend({script:"system/pentaho-cdf-dd/resources/custom/amd-components/cgg/charts/dial.js",getScriptUrl:function(){return this.script
},_processParametersCore:function(t){t.paramvalue=this.dashboard.getParameterValue(this.parameter),t.paramcolors=this.colors,t.paramscale=this.intervals
}});return e});