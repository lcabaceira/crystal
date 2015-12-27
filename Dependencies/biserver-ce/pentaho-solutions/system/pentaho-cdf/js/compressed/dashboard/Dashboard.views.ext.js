define(["./Dashboard.ext"],function(e){var r={getView:function(r){return e.getCdfBase()+"/views/"+r
},getViewIdFromUrl:function(){var e=window.location.search;if(-1==e.indexOf("viewId"))return"";
var r=e.match("[?|&]viewId=([^&]+)");return r[1]?r[1]:void 0}};return r});