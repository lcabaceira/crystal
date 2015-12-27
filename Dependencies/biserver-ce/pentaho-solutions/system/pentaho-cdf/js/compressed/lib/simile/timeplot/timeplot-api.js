!function(){var debug=!1,local=!0;if(document.location.search.length>0)for(var params=document.location.search.substr(1).split("&"),i=0;i<params.length;i++)"local"==params[i]&&(local=!0);
if(!local)for(var heads=document.documentElement.getElementsByTagName("head"),h=0;h<heads.length;h++)for(var node=heads[h].firstChild;null!=node;){if(1==node.nodeType&&"script"==node.tagName.toLowerCase()){var url=node.src;
url.indexOf("timeplot-api")>=0&&(local=url.indexOf("local")>=0)}node=node.nextSibling
}var loadTimeplot=function(){if("undefined"==typeof window.Timeplot){window.Timeplot={loaded:!1,params:{bundle:!0,autoCreate:!0},namespace:"http://simile.mit.edu/2007/06/timeplot#",importers:{}};
for(var javascriptFiles=["timeplot.js","plot.js","sources.js","geometry.js","color.js","math.js","processor.js"],cssFiles=["timeplot.css"],locales=["en"],defaultClientLocales=(("language"in navigator?navigator.language:navigator.browserLanguage).split(";")),l=0;l<defaultClientLocales.length;l++){var locale=defaultClientLocales[l];
if("en"!=locale){var segments=locale.split("-");segments.length>1&&"en"!=segments[0]&&locales.push(segments[0]),locales.push(locale)
}}var paramTypes={bundle:Boolean,js:Array,css:Array,autoCreate:Boolean};if("string"==typeof Timeplot_urlPrefix)Timeplot.urlPrefix=Timeplot_urlPrefix,"Timeplot_parameters"in window&&SimileAjax.parseURLParameters(Timeplot_parameters,Timeplot.params,paramTypes);
else{var url=SimileAjax.findScript(document,"/timeplot-api.js");if(null==url)return Timeplot.error=new Error("Failed to derive URL prefix for Simile Timeplot API code files"),void 0;
Timeplot.urlPrefix=url.substr(0,url.indexOf("timeplot-api.js")),SimileAjax.parseURLParameters(url,Timeplot.params,paramTypes)
}if(Timeplot.params.locale&&"en"!=Timeplot.params.locale){var segments=Timeplot.params.locale.split("-");
segments.length>1&&"en"!=segments[0]&&locales.push(segments[0]),locales.push(Timeplot.params.locale)
}var timeplotURLPrefix=local?"/pentaho/api/repos/pentaho-cdf/js/lib/simile/timeplot/":Timeplot.urlPrefix;
if(debug&&local&&!("console"in window)){var firebug=[timeplotURLPrefix+"lib/firebug/firebug.js"];
SimileAjax.includeJavascriptFiles(document,"",firebug)}var canvas=document.createElement("canvas");
if(!canvas.getContext){var excanvas=[timeplotURLPrefix+"lib/excanvas.js"];SimileAjax.includeJavascriptFiles(document,"",excanvas)
}var scriptURLs=Timeplot.params.js||[],cssURLs=Timeplot.params.css||[];Timeplot.params.bundle?(scriptURLs.push(timeplotURLPrefix+"timeplot-bundle.js"),cssURLs.push(timeplotURLPrefix+"timeplot-bundle.css")):(SimileAjax.prefixURLs(scriptURLs,timeplotURLPrefix+"scripts/",javascriptFiles),SimileAjax.prefixURLs(cssURLs,timeplotURLPrefix+"styles/",cssFiles)),window.SimileAjax_onLoad=function(){debug&&local&&window.console.open&&window.console.open(),Timeplot.params.callback&&eval(Timeplot.params.callback+"()")
},SimileAjax.includeJavascriptFiles(document,"",scriptURLs),SimileAjax.includeCssFiles(document,"",cssURLs),Timeplot.loaded=!0
}},loadTimeline=function(){if("undefined"!=typeof Timeline)loadTimeplot();else{var e=local?"/pentaho/api/repos/pentaho-cdf/js/lib/simile/timeline/timeline-api.js?bundle=true":"http://static.simile.mit.edu/timeline/api-2.0/timeline-api.js?bundle=true";
window.SimileAjax_onLoad=loadTimeplot,SimileAjax.includeJavascriptFile(document,e)
}};if("undefined"==typeof SimileAjax){window.SimileAjax_onLoad=loadTimeline;var url=local?"/pentaho/api/repos/pentaho-cdf/js/lib/simile/ajax/simile-ajax-api.js?bundle=true":"http://static.simile.mit.edu/ajax/api-2.0/simile-ajax-api.js?bundle=true",createScriptElement=function(){var e=document.createElement("script");
e.type="text/javascript",e.language="JavaScript",e.src=url,document.getElementsByTagName("head")[0].appendChild(e)
};if(null==document.body)try{document.write("<script src='"+url+"' type='text/javascript'></script>")
}catch(e){createScriptElement()}else createScriptElement()}else loadTimeline()}();
