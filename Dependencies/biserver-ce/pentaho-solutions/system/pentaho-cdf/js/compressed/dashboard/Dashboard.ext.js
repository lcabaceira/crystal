define(["common-ui/util/URLEncoder"],function(t){var e={pluginName:"pentaho-cdf",samplesBasePath:"/public/plugin-samples/",getPluginBase:function(t){return CONTEXT_PATH+"plugin/"+t+"/api"
},getCdfBase:function(){return this.getPluginBase(this.pluginName)},getFilePathFromUrl:function(){var t=window.location.pathname;
if(-1==t.indexOf("/:")&&(t=decodeURIComponent(window.location.pathname)),t.indexOf("/:")>0){var e=t.match("(/:)(.*)(/)");
if(e[2])return"/"+e[2].replace(new RegExp(":","g"),"/")}},getTimestamp:function(){return"ts="+(new Date).getTime()
},getFullPath:function(t,e){t=t||"",e=e||"";var n=0==t.indexOf(this.pluginName)?this.samplesBasePath+t:t;
return n+=(e?"/"+e:"").replace(/\/\//g,"/")},composePath:function(t){var e=function(t){return"/"==t.charAt(0)&&(t=t.substring(1,t.length)),"/"==t.charAt(t.length-1)&&(t=t.substring(0,t.length-1)),t
},n="/";return t.solution&&(n+=e(t.solution)+"/"),t.path&&(n+=e(t.path)),t.action&&(n+="/"+e(t.action)),n
},getSettings:function(t,e){return e?this.getCdfBase()+"/settings/"+t+"?"+$.param({key:e}):this.getCdfBase()+"/settings/"+t
},getServiceAction:function(e,n,i,r){var a={};return a.wrapper=!1,a.action=r,a.url=t.encode(CONTEXT_PATH+"api/repos/{0}/generatedContent",t.encodeRepositoryPath(this.getFullPath(i,r))),a
},getStaticResource:function(t){return this.getCdfBase()+"/resources/"+t},getCaptifyZoom:function(){return this.getStaticResource("js/lib/captify/zoom.html")
},getExport:function(){return this.getCdfBase()+"/export"},getPluginEndpoint:function(t,e){return this.getPluginBase(t)+"/"+e
},getJSONSolution:function(){return this.getCdfBase()+"/getJSONSolution"},getRenderHTML:function(){return this.getCdfBase()+"/RenderHtml"
}};return e});