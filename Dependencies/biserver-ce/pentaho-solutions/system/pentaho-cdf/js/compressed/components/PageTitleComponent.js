define(["../dashboard/Dashboard.ext","../dashboard/Utils","../lib/jquery","./NavigatorBaseComponent"],function(e,t,i,n){var o=n.extend({update:function(){var o=this;
-1==n.navigatorResponse?i.getJSON(e.getJSONSolution()+"?mode=contentlist&path="+(n.path||t.getPathParameter()),function(e){o.processPageTitleResponse(e)
}):this.processPageTitleResponse(n.navigatorResponse)},processPageTitleResponse:function(e){n.navigatorResponse=e;
var t=this.findPageTitleObject(e.content,e.id);void 0!=t.title&&void 0!=t.description&&i("#"+this.htmlObject).text(t.title+(""!=t.description?" - "+t.description:""))
},findPageTitleObject:function(e,t){for(var i=0;i<e.length;i++){var n=e[i];if(n.id==t)return n;
if((t+"/").indexOf(n.id+"/")>=0)return this.findPageTitleObject(n.folders,t)}}});
return o});