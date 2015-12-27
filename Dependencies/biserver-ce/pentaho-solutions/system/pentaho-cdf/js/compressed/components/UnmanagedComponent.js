define(["./BaseComponent","amd!../lib/underscore","../lib/jquery","../Logger"],function(t,i,e,n){var r=t.extend({isManaged:!1,isRunning:!1,preExec:function(){null==this.runCounter&&(this.runCounter=0);
var t=!0;if("function"==typeof this.preExecution)try{var i=this.preExecution();void 0===i||i||(t=!1)
}catch(e){t=!1,this.failExec(e)}return this.trigger("cdf cdf:preExecution",this,t),t
},postExec:function(){"function"==typeof this.postExecution&&this.postExecution(),this.trigger("cdf cdf:postExecution",this)
},postFetchData:function(t){if("function"==typeof this.postFetch){var i=this.postFetch(t);
t=void 0===i?t:i,this.trigger("cdf cdf:postFetch",this,t)}return t},drawTooltip:function(){this.htmlObject&&this.tooltip&&(this._tooltip="function"==typeof this.tooltip?this.tooltip():this.tooltip)
},showTooltip:function(){var t;this.htmlObject&&void 0!==(t=this._tooltip)&&this.placeholder().attr("title",t).tooltip({delay:0,track:!0,fade:250,content:t})
},beginExec:function(){var t=this.preExec();return t&&this._maybeBlock(),t},failExec:function(t){if(t&&"responseText"in t){var i=this.dashboard.parseServerError.apply(this.dashboard,arguments);
this.error(i.msg,i.error)}else this.error(null,t)},endExec:function(){try{this.drawTooltip(),this.postExec(),this.showTooltip(),this._maybeUnblock()
}catch(t){this.failExec(t)}},execute:function(t){if(this.beginExec())try{t.call(this)
}catch(i){this.failExec(i)}},synchronous:function(t,e){function n(){try{t.call(this,e||[])
}catch(i){return this.failExec(i),void 0}this.endExec()}this.beginExec()&&setTimeout(i.bind(n,this),10)
},triggerQuery:function(t,i,e){this.beginQuery(t,function(t){i(t),this.endExec()},e)
},beginQuery:function(t,i,e){this.execute(function(){var n=this._setQuery(t,e);n.fetchData(this.parameters,this.getSuccessHandler(i,void 0,this._maybeUnblock),this.getErrorHandler())
})},triggerAjax:function(t,n,r,s){var o=e.extend({},s);"function"!=typeof r?(r=n,i.extend(o,t)):i.extend(o,{url:t,data:n}),this.beginAjax(o,function(t){r.call(this,t),this.trigger("cdf cdf:render",this,t),this.endExec()
})},beginAjax:function(t,i){this.execute(function(){var n=e.extend({async:!0},t,{success:this.getSuccessHandler(i,void 0,this._maybeUnblock),error:this.getErrorHandler()});
e.ajax(n)})},_setQuery:function(t,e){var n=this.queryState=this.query=this.dashboard.getQuery(t),r={async:!0};
return e&&e.ajax&&i.extend(r,e.ajax),n.setAjaxOptions(r),e&&e.pageSize&&n.setPageSize(e.pageSize),n
},callCounter:function(){return++this.runCounter},getSuccessHandler:function(t,e,n,r){function s(i){if(t>=this.runCounter)try{var s=this.postFetchData(i);
e.call(this,s)}catch(o){this.failExec(o)}else r&&r.call(this,i);"function"==typeof n&&n.call(this)
}return 1===arguments.length?(e=t,t=this.callCounter()):"function"==typeof t&&(r=n,n=e,e=t,t=this.callCounter()),i.bind(s,this)
},getErrorHandler:function(){return i.bind(this.failExec,this)},error:function(t,i){t||(t=this.dashboard.getErrorObj("COMPONENT_ERROR").msg),this._maybeUnblock(),this.errorNotification({msg:t,error:i}),this.trigger("cdf cdf:error",this,t,i||null),i&&n.log(i,"error")
},errorNotification:function(t,i){i||(i=this.htmlObject?this.placeholder():void 0);
var e=this.name.replace("render_","");t.msg=t.msg+" ("+e+")",this.dashboard.errorNotification(t,i)
},block:function(){this.isRunning||(this.dashboard.incrementRunningCalls(),this.isRunning=!0)
},unblock:function(){this.isRunning&&(this.dashboard.decrementRunningCalls(),this.isRunning=!1)
},isSilent:function(){return!(!this.lifecycle||!this.lifecycle.silent)},_maybeBlock:function(){this.isSilent()||this.block()
},_maybeUnblock:function(){this.isSilent()||this.unblock()}});return r});