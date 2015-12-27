define(["../dashboard/Dashboard.ext","common-ui/util/URLEncoder"],function(n,t){var e={getPivot:function(e,o,i){var a=0==o.indexOf(n.pluginName)?n.samplesBasePath+o:o;
return t.encode(CONTEXT_PATH+"plugin/jpivot/Pivot",null,{solution:e||"system",path:a,action:i})
}};return e});