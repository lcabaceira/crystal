!function(){var e=!1;if(document.location.search.length>0)for(var i=document.location.search.substr(1).split("&"),r=0;r<i.length;r++)"timeline-use-local-resources"==i[r]&&(e=!0);
var n=function(){if(!("Timeline"in window)){window.Timeline=new Object,window.Timeline.DateTime=window.SimileAjax.DateTime;
var e=!1,i=["timeline.js","themes.js","ethers.js","ether-painters.js","labellers.js","sources.js","original-painter.js","detailed-painter.js","overview-painter.js","decorators.js","units.js"],r=["timeline.css","ethers.css","events.css"],n=["timeline.js","labellers.js"],t=[],l=["cs","de","en","es","fr","it","ru","se","tr","vi","zh"];
try{var a=["en"],s="en",o=function(i){for(var r=i.split("&"),n=0;n<r.length;n++){var t=r[n].split("=");
"locales"==t[0]?a=a.concat(t[1].split(",")):"defaultLocale"==t[0]?s=t[1]:"bundle"==t[0]&&(e="false"!=t[1])
}};!function(){if("string"!=typeof Timeline_urlPrefix){for(var e=document.documentElement.getElementsByTagName("head"),i=0;i<e.length;i++)for(var r=e[i].getElementsByTagName("script"),n=0;n<r.length;n++){var t=r[n].src,l=t.indexOf("timeline-api.js");
if(l>=0){Timeline.urlPrefix=t.substr(0,l);var a=t.indexOf("?");return a>0&&o(t.substr(a+1)),void 0
}}throw new Error("Failed to derive URL prefix for Timeline API code files")}Timeline.urlPrefix=Timeline_urlPrefix,"string"==typeof Timeline_parameters&&o(Timeline_parameters)
}();var c=function(e,i){SimileAjax.includeJavascriptFiles(document,e,i)},u=function(e,i){SimileAjax.includeCssFiles(document,e,i)
};e?(c(Timeline.urlPrefix,["timeline-bundle.js"]),u(Timeline.urlPrefix,["timeline-bundle.css"])):(c(Timeline.urlPrefix+"scripts/",i),u(Timeline.urlPrefix+"styles/",r));
var m=[];m[s]=!0;for(var f=function(e){for(var i=0;i<l.length;i++)if(e==l[i])return m[e]=!0,!0;
return!1},d=function(e){if(f(e))return e;var i=e.indexOf("-");return i>0&&f(e.substr(0,i))?e.substr(0,i):null
},p=0;p<a.length;p++)d(a[p]);for(var v=s,j=(("language"in navigator?navigator.language:navigator.browserLanguage).split(";")),p=0;p<j.length;p++){var g=d(j[p]);
if(null!=g){v=g;break}}for(var p=0;p<l.length;p++){var g=l[p];m[g]&&(c(Timeline.urlPrefix+"scripts/l10n/"+g+"/",n),u(Timeline.urlPrefix+"styles/l10n/"+g+"/",t))
}Timeline.serverLocale=s,Timeline.clientLocale=v}catch(h){alert(h)}}};if("undefined"==typeof SimileAjax){window.SimileAjax_onLoad=n;
var t=e?"/pentaho/api/repos/pentaho-cdf/js/lib/simile/ajax/simile-ajax-api.js?bundle=false":"http://static.simile.mit.edu/ajax/api-2.0/simile-ajax-api.js",l=function(){var e=document.createElement("script");
e.type="text/javascript",e.language="JavaScript",e.src=t,document.getElementsByTagName("head")[0].appendChild(e)
};if(null==document.body)try{document.write("<script src='"+t+"' type='text/javascript'></script>")
}catch(a){l()}else l()}else n()}();