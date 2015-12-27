if("undefined"==typeof SimileAjax){var SimileAjax={loaded:!1,loadingScriptsCount:0,error:null,params:{bundle:"true"}};
SimileAjax.Platform=new Object;var getHead=function(e){return e.getElementsByTagName("head")[0]
};SimileAjax.findScript=function(e,i){for(var r=e.documentElement.getElementsByTagName("head"),t=0;t<r.length;t++)for(var a=r[t].firstChild;null!=a;){if(1==a.nodeType&&"script"==a.tagName.toLowerCase()){var l=a.src,n=l.indexOf(i);
if(n>=0)return l}a=a.nextSibling}return null},SimileAjax.includeJavascriptFile=function(e,i,r,t){if(r=r||"",null==e.body)try{var a="'"+r.replace(/'/g,"&apos")+"'";
return e.write("<script src='"+i+"' onerror="+a+(t?" charset='"+t+"'":"")+" type='text/javascript'>"+r+"</script>"),void 0
}catch(l){}var n=e.createElement("script");if(r){try{n.innerHTML=r}catch(l){}n.setAttribute("onerror",r)
}return t&&n.setAttribute("charset",t),n.type="text/javascript",n.language="JavaScript",n.src=i,getHead(e).appendChild(n)
},SimileAjax.includeJavascriptFiles=function(e,i,r){for(var t=0;t<r.length;t++)SimileAjax.includeJavascriptFile(e,i+r[t]);
SimileAjax.loadingScriptsCount+=r.length,SimileAjax.includeJavascriptFile(e,SimileAjax.urlPrefix+"scripts/signal.js?"+r.length)
},SimileAjax.includeCssFile=function(e,i){if(null==e.body)try{return e.write("<link rel='stylesheet' href='"+i+"' type='text/css'/>"),void 0
}catch(r){}var t=e.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("type","text/css"),t.setAttribute("href",i),getHead(e).appendChild(t)
},SimileAjax.includeCssFiles=function(e,i,r){for(var t=0;t<r.length;t++)SimileAjax.includeCssFile(e,i+r[t])
},SimileAjax.prefixURLs=function(e,i,r){for(var t=0;t<r.length;t++)e.push(i+r[t])
},SimileAjax.parseURLParameters=function(e,i,r){i=i||{},r=r||{},"undefined"==typeof e&&(e=location.href);
var t=e.indexOf("?");if(0>t)return i;e=(e+"#").slice(t+1,e.indexOf("#"));for(var a,l=e.split("&"),n={},s=window.decodeURIComponent||unescape,c=0;a=l[c];c++){var u=a.indexOf("="),o=s(a.slice(0,u)),d=n[o];
"undefined"==typeof d?d=[]:d instanceof Array||(d=[d]),n[o]=d.concat(s(a.slice(u+1)))
}for(var c in n)if(n.hasOwnProperty(c)){var f=r[c]||String,m=n[c];m instanceof Array||(m=[m]),i[c]=f===Boolean&&"false"==m[0]?!1:f.apply(this,m)
}return i},function(){var e=["jquery-1.2.3.js","platform.js","debug.js","xmlhttp.js","json.js","dom.js","graphics.js","date-time.js","string.js","html.js","data-structure.js","units.js","ajax.js","history.js","window-manager.js"],i=[];
if("string"==typeof SimileAjax_urlPrefix)SimileAjax.urlPrefix=SimileAjax_urlPrefix;
else{var r=SimileAjax.findScript(document,"simile-ajax-api.js");if(null==r)return SimileAjax.error=new Error("Failed to derive URL prefix for Simile Ajax API code files"),void 0;
SimileAjax.urlPrefix=r.substr(0,r.indexOf("simile-ajax-api.js"))}SimileAjax.parseURLParameters(r,SimileAjax.params,{bundle:Boolean}),SimileAjax.params.bundle?SimileAjax.includeJavascriptFiles(document,SimileAjax.urlPrefix,["simile-ajax-bundle.js"]):SimileAjax.includeJavascriptFiles(document,SimileAjax.urlPrefix+"scripts/",e),SimileAjax.includeCssFiles(document,SimileAjax.urlPrefix+"styles/",i),SimileAjax.loaded=!0
}()}