define("cdf/components/CggComponent.ext",[],function(){var t={getCggDrawUrl:function(){return CONTEXT_PATH+"plugin/cgg/api/services/draw"
}};return t}),define("cde/components/CggComponent",["cdf/components/UnmanagedComponent","cdf/components/CggComponent.ext","cdf/lib/jquery"],function(t,e,r){var n=t.extend({ph:null,have_SVG:!0,getScriptUrl:function(){return this.resourceFile
},getOutputType:function(){return this.have_SVG?"svg":"png"},detectSvg:function(){this.have_SVG=!(!document.createElementNS||!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect)
},update:function(){this.detectSvg();var t=e.getCggDrawUrl(),n=this.processParams(),i=this.getScriptUrl(),a=this,s=r("#"+this.htmlObject);
this.have_SVG?a.triggerAjax({url:t,data:n,type:"get"},function(e){try{s[0].appendChild(document.importNode(e.lastChild,!0)),s.find("svg").width(a.width).height(a.height)
}catch(r){{a.createObj(t,i,n,a.width,a.height)}s[0].innerHTML=arguments[2].responseText,s.find("svg").width(a.width).height(a.height)
}}):a.synchronous(function(){s.html('<img src="'+t+"?"+r.param(n)+'" width="'+a.width+'" height="'+a.height+'"/>')
})},processParams:function(){var t={};this._processParametersCore(t);var e=this.dashboard.debug;
return e>1&&(t.paramdebug=!0,t.paramdebugLevel=e),t.script=escape(this.getScriptUrl()),t.outputType=this.getOutputType(),t
},_processParametersCore:function(t){for(var e=this.dashboard,n=this.parameters,i=0,a=n.length;a>i;i++){var s=n[i],h=e.getParameterValue(s[1]);
r.isArray(h)&&1==h.length&&(""+h[0]).indexOf(";")>=0&&(h=doCsvQuoting(h[0],";")),t["param"+s[0]]=h
}},objectUrl:function(t,e,r){var n=t+"?",i=[];for(var a in r)r.hasOwnProperty(a)&&i.push(escape(a)+"="+escape(r[a]));
return n+="&"+i.join("&")},createObj:function(t,e,r,n,i){var a=document.createElement("object");
return a.setAttribute("type","image/svg+xml"),a.setAttribute("data",this.objectUrl(t,e,r)),a.setAttribute("width",n),a.setAttribute("height",i),a
}});return n});