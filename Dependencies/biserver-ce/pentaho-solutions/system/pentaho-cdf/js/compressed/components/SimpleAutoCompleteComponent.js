define(["./BaseComponent","../lib/jquery"],function(t,e){var n=t.extend({ph:void 0,completionCallback:void 0,update:function(){var t=this;
void 0==t.ph&&(t.ph=e("#"+t.htmlObject).empty(),t.input=e("<input type='text'>").appendTo(t.ph),t.query=t.dashboard.getQuery(t.queryDefinition),t.input.autocomplete({source:function(e,n){return t.triggerQuery(e.term,n)
}}),t.input.change(function(){t.dashboard.processChange(t.name)}).keyup(function(e){13==e.keyCode&&t.dashboard.processChange(t.name)
}))},getList:function(t){if("function"==typeof this.postFetch){var e=this.postFetch(t);
t=e||t}return t.resultset.map(function(t){return t[0]})},handleQuery:function(t){var e=this;
return function(n){var r=e.getList(n);t(r)}},triggerQuery:function(t,n){var r=e.extend([],this.parameters),i=this.searchParam||"searchBox";
"searchBox"==i?this.query.setSearchPattern(t):r.push([this.searchParam,t]),t.length>=this.minTextLength?this.query.fetchData(r,this.handleQuery(n)):n([])
},getValue:function(){return this.input.val()}});return n});