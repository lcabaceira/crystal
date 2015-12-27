define(["./UnmanagedComponent","../Logger","amd!../lib/underscore"],function(e,t,r){var n=e.extend({visible:!1,update:function(){var e=this;
e.warnOnce&&e.warnOnce();var o=e.queryDefinition,a=e.asynchronousMode||!1,i=r.bind(e.render,e);
return void 0==o?(t.error("Fatal - No query definition passed"),void 0):(a?e.triggerQuery(o,i):n.makeQuery(e,function(t){var r=void 0;
"function"==typeof e.postFetch&&(r=e.postFetch(t)),void 0!=r&&(t=r),e.result=void 0!=t.resultset?t.resultset:t,"undefined"!=typeof t.resultset&&(e.metadata=t.metadata,e.queryInfo=t.queryInfo),e.synchronous(i,t)
}),void 0)},render:function(e){null!=this.resultvar&&this.dashboard.setParameter(this.resultvar,e.resultset)
},warnOnce:function(){t.log("Warning: QueryComponent behaviour is due to change. See http://www.webdetails.org/redmine/projects/cdf/wiki/QueryComponent for more information"),delete this.warnOnce
}},{makeQuery:function(e,r){this.warnOnce&&this.warnOnce();var n=e.queryDefinition;
if(void 0==n)return t.error("Fatal - No query definition passed"),void 0;var o=e.dashboard.getQuery(n);
e.queryState=o,o.setAjaxOptions({async:!1}),r||(r=function(t){var r;"function"==typeof e.postFetch&&(r=e.postFetch(t)),void 0!=r&&(t=r),void 0!=e.resultvar&&e.dashboard.setParameter(e.resultvar,e.result),"undefined"!=typeof t.resultset?(e.metadata=t.metadata,e.queryInfo=t.queryInfo,e.result=t.resultset):e.result=t
}),o.fetchData(e.parameters,r)}});return n});