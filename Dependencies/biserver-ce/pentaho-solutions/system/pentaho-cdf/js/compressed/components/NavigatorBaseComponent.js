define(["../dashboard/Utils","../Logger","./BaseComponent"],function(t,e,n){var o=n.extend({},{path:t.getQueryParameter("path"),solution:t.getQueryParameter("solution"),template:t.getQueryParameter("template"),navigatorResponse:-1,getSolutionJSON:function(t){for(var n=o.navigatorResponse,r=n.solution.folders,a=0,i=0;i<r.length;i++){var u=r[i];
if(""==o.solution||u.solution==o.solution){var l=[],s=u.folders;void 0!=s&&void 0==s.length?l.push(s):void 0!=s&&s.length>0&&(l=l.concat(s));
var h=u.files;return void 0!=h&&void 0==h.length?l.push(h):void 0!=h&&h.length>0&&(l=l.concat(h)),l
}}return 0==a?(e.error("Fatal: Solution "+t+" not found in navigation object"),void 0):void 0
},browseContent:function(n,r){for(var a=0;a<n.length;a++){var i=n[a];if("FOLDER"==i.type&&i.path==r)return n=i.folders,void 0==n?[]:(void 0==n.length&&(n=[n]),n)
}e.error("Fatal: path "+(o.path||t.getPathParameter(o.path))+" not found in navigation object")
},getParentSolution:function(){return(o.path||t.getPathParameter(o.path)).length>0?o.solution:""
},getParentPath:function(){var e=o.path||t.getPathParameter(o.path),n=e.lastIndexOf("/");
if(-1==n)return"";var r=e.substring(0,n);return r},isAncestor:function(t){return t!=o.solution?!1:!0
}});return o});