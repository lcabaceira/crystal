define("cdf/dashboard/RefreshEngine",[],function(){return function(e){var t=0,n=new Array,r=null,i=t,a=null,o=function(){return{nextRefresh:0,component:null}
},s=function(n){null!=a&&(clearInterval(a),a=null),i=n>0?n:t,i!=t&&(a=setInterval(e.refreshEngine.fireGlobalRefresh,1e3*i))
},u=function(e){for(var t=0;t<n.length;t++)n[t].component==e&&(n.splice(t,1),t--)
},c=function(){n.length>0&&n.splice(0,n.length)},d=function(e,t){for(var n,r=e.length-1,i=0;r>=i;)if(n=parseInt((i+r)/2),e[n].nextRefresh>t.nextRefresh)r=n-1;
else{if(!(e[n].nextRefresh<t.nextRefresh))return n;i=n+1}return i},l=function(e,t){var n=d(e,t);
e.splice(n,0,t)},h=function(){null!=r&&(clearTimeout(r),r=null)},f=function(){h(),e.refreshEngine.fireRefresh()
},p=function(){return(new Date).getTime()},g=function(e){return n.length>0&&n[0].component==e
},m=function(t){e.update(t)},y=function(e){var r=p();if(e.refreshPeriod>0||(e.refreshPeriod=t),e.refreshPeriod!=t){var i=new o;
i.nextRefresh=r+1e3*e.refreshPeriod,i.component=e,l(n,i)}};return{registerComponent:function(e,n){if(!e)return!1;
e.refreshPeriod=n>0?n:t;var r=g(e);return u(e),r&&f(),!0},getRefreshPeriod:function(e){return e&&e.refreshPeriod>0?e.refreshPeriod:t
},processComponent:function(e){return u(e),y(e),g(e)&&f(),!0},processComponents:function(){c();
for(var t=0;t<e.components.length;t++)y(e.components[t]);return f(),!0},fireRefresh:function(){r=null;
for(var e=p();n.length>0&&n[0].nextRefresh<=e;){var t=n.shift();m(t.component)}n.length>0&&(r=setTimeout(this.fireRefresh,n[0].nextRefresh-e))
},fireGlobalRefresh:function(){for(var t=0;t<e.components.length;t++){var n=e.components[t];
n.refreshPeriod>0||"select"==n.type||m(n)}},setGlobalRefresh:function(e){s(e)},getQueue:function(){return n
}}}}),define("cdf/dashboard/Dashboard",["../lib/Base","../Logger","./RefreshEngine","amd!../lib/underscore","amd!../lib/backbone","../lib/jquery","module","amd!../lib/jquery.impromptu","../lib/shims","css!../lib/cdf.css"],function(e,t,n,r,i,a,o){var s=e.extend({constructor:function(e){function o(e,n){"function"==typeof e?(t.info("Calling init method of module: "+n),e.apply(u)):t.warn("Not calling init method of module: "+n)
}function s(){var e=this;"function"==typeof a?(a.ajaxSetup({async:!1,traditional:!0,scriptCharset:"utf-8",contentType:"application/x-www-form-urlencoded;charset=UTF-8",dataFilter:function(t){return e.lastServerResponse=Date.now?Date.now():(new Date).getTime(),t
}}),a.prompt&&"function"==typeof a.prompt.setDefaults?a.prompt.setDefaults({prefix:"jqi",show:"slideDown"}):t.log("$.prompt plugin not loaded!!"),"function"==typeof a.blockUI?(a.blockUI.defaults.fadeIn=0,a.blockUI.defaults.message='<div class="blockUIDefaultImg"></div>',a.blockUI.defaults.css.left="50%",a.blockUI.defaults.css.top="40%",a.blockUI.defaults.css.marginLeft="-16px",a.blockUI.defaults.css.width="32px",a.blockUI.defaults.css.background="none",a.blockUI.defaults.overlayCSS={backgroundColor:"#FFFFFF",opacity:.8,cursor:"wait"},a.blockUI.defaults.css.border="none"):t.log("$.blockUI plugin not loaded!!")):t.log("jQuery plugin not loaded!!")
}var u=this;e&&(e.context&&(this.context=e.context),e.storage&&(this.context&&"anonymousUser"===this.context.user||(this.storage=e.storage)),e.view&&(this.view=e.view)),r.extend(this,i.Events),s(),"undefined"!=typeof CONTEXT_PATH&&(this.webAppPath=CONTEXT_PATH),void 0===this.webAppPath&&(this.webAppPath="/"+window.location.pathname.split("/")[1]),this.webAppPath.endsWith("/")&&(this.webAppPath=this.webAppPath.substr(0,this.webAppPath.length-1)),o(this._initContext,"Context"),o(this._initStorage,"Storage"),o(this._initViews,"Views"),o(this._initParameters,"Parameters"),o(this._initBookmarkables,"Bookmarkables"),o(this._initI18n,"I18n"),o(this._initComponents,"Components"),o(this._initLifecycle,"Lifecycle"),o(this._initNotifications,"Notifications"),o(this._initDataSources,"DataSources"),o(this._initQuery,"Query"),o(this._initAddIns,"AddIns"),this.refreshEngine=new n(this)
},globalContext:!1,contextObj:o.config().context||{},storageObj:o.config().storage||{},viewObj:o.config().view,legacyPriority:-1e3,logLifecycle:!0,args:[],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],registerEvent:function(e,t){"undefined"==typeof this.events&&(this.events={}),this.events[e]=t
},debug:1,syncDebugLevel:function(){var e=1;try{var t=function(e){return e&&/\bdebug=true\b/.test(e)?e:null
},n=t(window.location.href)||t(window.top.location.href);if(n){var r=/\bdebugLevel=(\d+)/.exec(n);
e=r?+r[1]:3}}catch(i){}return this.debug=e},setGlobalContext:function(e){this.globalContext=e
},getWebAppPath:function(){return this.webAppPath},getWcdfSettings:function(){return t.info("getWcdfSettings was not overriden, returning empty object"),{}
}});return s}),define("cdf/dashboard/Dashboard.context",["../lib/jquery","./Dashboard","./Dashboard.ext","./Dashboard.context.ext"],function(e,t){t.implement({_initContext:function(){this.context||(this.context={},e.extend(this.context,this.contextObj))
}})}),define("cdf/dashboard/Container",[],function(){function e(e,t,r){var i;r||(r="instance"),this.build=function(n,a){if(i&&!a)return i;
var o=t(e,n);return a||"singleton"!==r||(i=o),o},this.dispose=function(){i&&(n(i),i=null)
}}function t(e,t,r){r||(r="external"),this.build=function(){return t},this.dispose=function(){t&&("singleton"===r&&n(t),t=null)
}}function n(e){"function"==typeof e.dispose&&e.dispose()}function r(e){for(var t in e)if(i.call(e,t))return!1;
return!0}var i=Object.prototype.hasOwnProperty;return function(){function n(e,t){if(!e)throw new Error("Argument 'type' is required.");
if("string"!=typeof e)throw new Error("Argument 'type' must be a string.");var n=s[e];
if(!t&&(!n||r(n)))throw new Error("There are no registrations for type '"+e+"'.");
return n}function i(e,t,r){var i,a=n(e,r);if(a&&(i=a[t||""],!i&&!r))throw new Error("There is no registration for type '"+e+"'"+(t?" and name '"+t+"'":"")+".");
return i}function a(e,t,n,r,a){"string"!=typeof t&&(n=t,t="");var o=i(e,t,a);return n?r=!0:r||(n={}),o?o.build(n,r):null
}function o(e,t){var r=n(e,t),i=[];for(var a in r)i.push(r[a].build({},!1));return i
}this.register=function(n,r,i,a){if(!n)throw new Error("Argument 'type' is required.");
if("string"!=typeof n)throw new Error("Argument 'type' must be a string.");if(null!=r&&("string"!=typeof r?(a=i,i=r,r=null):r||(r=null)),!i)throw new Error("Argument 'what' is required.");
var o;switch(typeof i){case"function":o=new e(this,i,a);break;case"object":o=new t(this,i,a);
break;default:throw new Error("Argument 'what' is of an invalid type.")}r||(r="");
var u=s[n]||(s[n]={}),c=u[r];c&&c.dispose(),u[r]=o},this.has=function(e,t){return!!i(e,t,!0)
},this.canNew=function(t,n){return i(t,n,!1)instanceof e},this.get=function(e,t){return a(e,t,null,!1,!1)
},this.tryGet=function(e,t){return a(e,t,null,!1,!0)},this.getNew=function(e,t,n){return a(e,t,n,!0,!1)
},this.tryGetNew=function(e,t,n){return a(e,t,n,!0,!0)},this.getAll=function(e){return o(e,!1)
},this.tryGetAll=function(e){return o(e,!0)},this.listType=function(e){return n(e,!1)
},this.tryListType=function(e){return n(e,!0)},this.dispose=function(){if(s){for(var e in s){var t=s[e];
for(var n in t)t[n].dispose()}s=null}};var s={}}}),define("cdf/dashboard/Dashboard.addIns",["./Dashboard","./Container","./Utils"],function(e,t,n){function r(e,t){return-1!==e.indexOf("Component",e.length-"Component".length)&&(e=e.substring(0,e.length-"Component".length)),e=e.charAt(0).toUpperCase()+e.substring(1),t&&(e+="."+t),e
}var i=new t;e.registerGlobalAddIn=function(e,t,n){var e=r(e,t),a=n.getName?n.getName():null;
i.register(e,a,n)},e.implement({_initAddIns:function(){this.addIns=n.clone(i)},registerGlobalAddIn:function(t,n,r){e.registerGlobalAddIn(t,n,r)
},registerAddIn:function(e,t,n){var e=r(e,t),i=n.getName?n.getName():null;this.addIns.register(e,i,n)
},hasAddIn:function(e,t,n){var e=r(e,t);return Boolean(this.addIns&&this.addIns.has(e,n))
},getAddIn:function(e,t,n){var e=r(e,t);try{var i=this.addIns.get(e,n);return i}catch(a){return null
}},setAddInDefaults:function(e,t,n,r){var i=this.getAddIn(e,t,n);i&&i.setDefaults(r)
},listAddIns:function(e,t){var e=r(e,t);try{return this.addIns.listType(e)}catch(n){return[]
}}})}),define("cdf/dashboard/Dashboard.bookmarkable",["./Dashboard","../Logger","./Utils"],function(e,t,n){e.implement({_initBookmarkables:function(){this.bookmarkables={}
},getHashValue:function(e){var t,n=window.location.hash;try{t=JSON.parse(n.slice(1))
}catch(r){t={}}return 0===arguments.length?t:t[e]},setHashValue:function(e,t){var n,r=this.getHashValue();
1==arguments.length?r=e:r[e]=t,n=JSON.stringify(r),"{}"!=n?window.location.hash=n:window.location.hash&&(window.location.hash="")
},deleteHashValue:function(e){var t=this.getHashValue();0===arguments.length?window.location.hash="":(delete t[e],this.setHashValue(t))
},setBookmarkable:function(e,t){1===arguments.length&&(t=!0),this.bookmarkables[e]=t
},isBookmarkable:function(e){return Boolean(this.bookmarkables[e])},generateBookmarkState:function(){var e={},t=this.bookmarkables;
for(var n in t)t.hasOwnProperty(n)&&t[n]&&(e[n]=this.getParameterValue(n));return e
},persistBookmarkables:function(e){var t=this.bookmarkables,n={};t[e]&&this.finishedInit&&(n=this.generateBookmarkState(),this.setBookmarkState({impl:"client",params:n}))
},setBookmarkState:function(e){if(window.history&&window.history.replaceState){var t,r=window.location.pathname.split("/").pop(),i=window.location.search.slice(1).split("&").map(function(e){var t=e.split("=");
return t[1]=decodeURIComponent(t[1]),t});i=n.propertiesArrayToObject(i),i.bookmarkState=JSON.stringify(e),t=r+"?"+$.param(i),window.history.replaceState({},"",t),this.deleteHashValue("bookmark")
}else this.setHashValue("bookmark",e)},getBookmarkState:function(){if(window.location.hash.length>1)try{return this.getHashValue("bookmark")||{}
}catch(e){}var t=window.location.search.slice(1).split("&").map(function(e){var t=e.split("=");
return t[1]=decodeURIComponent(t[1]),t}),r=n.propertiesArrayToObject(t);return r.bookmarkState?JSON.parse(decodeURIComponent(r.bookmarkState.replace(/\+/g," ")))||{}:{}
},restoreBookmarkables:function(){var e;try{e=this.getBookmarkState().params;for(var n in e)e.hasOwnProperty(n)&&this.setParameter(n,e[n])
}catch(r){t.log(r,"error")}}})}),define("cdf/dashboard/Dashboard.components",["./Dashboard","amd!../lib/backbone","../lib/mustache","../Logger","../lib/jquery"],function(e,t,n,r,i){e.implement({_initComponents:function(){this.components=[]
},getComponent:function(e){if(e)for(var t in this.components)if(this.components[t].name==e)return this.components[t]
},getComp:function(e){return this.getComponent(e)},getComponentByName:function(e){return this.getComponent(e)
},addComponents:function(e){return i.isArray(e)?(e.forEach(function(e){this.addComponent(e)
},this),void 0):(r.warn("addComponents: components in a structure other than an array will not be added!"),void 0)
},addComponent:function(e,t){this.removeComponent(e),this._bindControl(e);var n=t&&t.index,r=this.components.length;
(null==n||0>n||n>r)&&(n=r),this.components[n]=e},getComponentIndex:function(e){if(null!=e)switch(typeof e){case"string":for(var t=0,n=this.components,r=n.length;r>t;t++)if(n[t].name===e)return t;
break;case"number":if(e>=0&&e<this.components.length)return e;break;default:return this.components.indexOf(e)
}return-1},removeComponent:function(e){var t=this.getComponentIndex(e),n=null;if(t>=0){var r=this.components;
n=r[t],r.splice(t,1),n.dashboard=null,n.off("cdf:postExecution"),n.off("cdf:preExecution"),n.off("cdf:error"),n.off("all")
}return n},_bindControl:function(e){return e.dashboard||(e.dashboard=this,this._addLogLifecycleToControl(e)),e
},_bindExistingControl:function(e){return e.dashboard||(e.dashboard=this,delete e.initInstance,"function"==typeof e.off&&e.off("all"),e.on||i.extend(e,t.Events),this._addLogLifecycleToControl(e),(null==e.priority||""===e.priority)&&(e.priority=this.legacyPriority++)),e
},_castControlToClass:function(e,t){if(!(e instanceof t)){var n=this._makeInstance(t);
i.extend(e,n)}},_getControlClass:function(e){var t=e.type;"function"==typeof t&&(t=t.call(e));
for(var n=t.substring(0,1).toUpperCase()+t.substring(1),r=[n+"Component",t,n],i=0,a=r.length;a>i;i++){var o=window[r[i]];
if(o&&"function"==typeof o)return o}},_makeInstance:function(e,t){var n=Object.create(e.prototype);
return t?e.apply(n,t):e.apply(n),n},_castControlToComponent:function(e,t){if(!(e instanceof BaseComponent||t&&t.prototype instanceof BaseComponent)){var n=BaseComponent.prototype;
for(var r in n)if(n.hasOwnProperty(r)&&void 0===e[r]&&"function"==typeof n[r])switch(r){case"base":break;
default:e[r]=n[r]}}},_addLogLifecycleToControl:function(e){e.on("all",function(e){var t=this.dashboard;
if(t&&t.logLifecycle&&"cdf"!==e&&"PostInitMarker"!==this.name&&"undefined"!=typeof console){var i,a=e.substr(4);
switch(a){case"preExecution":i=">Start";break;case"postExecution":i="<End  ";break;
case"error":i="!Error";break;default:i="      "}var o=n.render("Timing: {{elapsedSinceStartDesc}} since start, {{elapsedSinceStartDesc}} since last event",this.splitTimer());
r.log("          [Lifecycle "+i+"] "+this.name+" ["+this.type+"] (P: "+this.priority+" ): "+a+" "+o+" (Running: "+this.dashboard.runningCalls+")","log","color: "+this.getLogColor())
}})}})}),define("cdf/dashboard/Dashboard.i18n",["../Logger","./Dashboard","./Dashboard.ext","../lib/moment","../lib/CCC/cdo","../lib/cdf.jquery.i18n"],function(e,t,n,r,i,a){t.implement({_initI18n:function(){var t=this;
t.i18nCurrentLanguageCode=void 0,t.i18nSupport={prop:function(t){return e.warn("i18n support wasn't properly initiated. Is the file messages_supported_languages.properties present?"),t
}};var o=function(e){if(e){var t=e.split("-");return t.length>1?t.join("_"):e}},s=o(SESSION_LOCALE);
a.i18n.properties({name:"messages",path:n.getStaticResource("resources/languages/"),mode:"map",language:s,callback:function(){a.i18n.properties({name:"messages",mode:"map",type:"GET",language:s,callback:function(){t.setI18nSupport(s,a.i18n)
}})}});var u=i.format.language(s);i.format.language(u),r.locale(s)},setI18nSupport:function(e,t){this.i18nCurrentLanguageCode=e,a.extend(this.i18nSupport,t)
}})}),define("cdf/dashboard/Dashboard.legacy",["../queries/CdaQuery.ext","../components/XactionComponent.ext","./Dashboard.ext","./Dashboard","../Logger","../lib/jquery"],function(e,t,n,r,i,a){r.implement({callPentahoAction:function(e,t,n,r,i,a){var o=this;
return"function"==typeof a?o.pentahoAction(t,n,r,i,function(t){a(o.parseXActionResult(e,t))
}):o.parseXActionResult(e,o.pentahoAction(t,n,r,i,a))},urlAction:function(e,t,n){return this.executeAjax("xml",e,t,n)
},executeAjax:function(e,t,n,r){if("function"==typeof r)return a.ajax({url:t,type:"POST",traditional:!0,dataType:e,async:!0,data:n,complete:function(e){"undefined"==typeof e.responseXML?r(a.parseXML(e.responseText)):r(e.responseXML)
},error:function(e,t,n){i.error("Found error: "+e+" - "+t+", Error: "+n)}});var o=a.ajax({url:t,type:"POST",dataType:e,async:!1,data:n,error:function(e,t,n){i.error("Found error: "+e+" - "+t+", Error: "+n)
}});return"xml"==e?"undefined"==typeof o.responseXML?a.parseXML(o.responseText):o.responseXML:o.responseText
},pentahoAction:function(e,t,n,r,i){return this.pentahoServiceAction("ServiceAction","xml",e,t,n,r,i)
},pentahoServiceAction:function(e,t,r,i,o,s,u){var c=n.getServiceAction(e,r,i,o),d=c.url;
return delete c.url,a.each(s,function(e,t){c[t[0]]=t[1]}),this.executeAjax(t,d,c,u)
},CDF_ERROR_DIV:"cdfErrorDiv",createAndCleanErrorDiv:function(){0==a("#"+this.CDF_ERROR_DIV).length&&a("body").append("<div id='"+this.CDF_ERROR_DIV+"'></div>"),a("#"+this.CDF_ERROR_DIV).empty()
},showErrorTooltip:function(){a(function(){a.tooltip&&a(".cdf_error").tooltip({delay:0,track:!0,fade:250,showBody:" -- "})
})},parseXActionResult:function(e,t){var n=a(t),r=n.find("SOAP-ENV\\:Fault");if(0==r.length)return n;
var i="Error executing component "+e.name,o=new Array;o[0]=" Error details for component execution "+e.name+" -- ",o[1]=r.find("SOAP-ENV\\:faultstring").find("SOAP-ENV\\:Text:eq(0)").text(),r.find("SOAP-ENV\\:Detail").find("message").each(function(){o.push(a(this).text())
}),o.length>8&&(o=o.slice(0,7),o.push("..."));var s="<table class='errorMessageTable' border='0'><tr><td class='errorIcon'></td><td><span class='cdf_error' title=\""+o.join("<br/>").replace(/"/g,"'")+'" >'+i+" </span></td></tr></table/>";
return 0==e.visible?a("#"+this.CDF_ERROR_DIV).append("<br />"+s):a("#"+e.htmlObject).html(s),null
},setSettingsValue:function(e,t){var r={method:"set",key:e,value:JSON.stringify(t)};
a.post(n.getSettings("set",null),r,function(){})},getSettingsValue:function(e,t){a.ajax({type:"GET",dataType:"json",url:n.getSettings("get",e),data:args,async:!0,xhrFields:{withCredentials:!0}}).done("function"==typeof t?t:function(e){t=e
})},fetchData:function(n,r,o){if(i.warn("Dashboard fetchData() is deprecated. Use Query objects instead"),void 0!=n&&void 0!=n.dataAccessId){for(var s in r)n["param"+r[s][0]]=this.getParameterValue(r[s][1]);
a.post(e.getDoQuery(),n,function(e){o(e)},"json").error(this.handleServerError)}else if(void 0!=n){var u="cda"==n.queryType?"jtable-cda.xaction":"jtable.xaction";
a.post(t.getCdfXaction("pentaho-cdf/actions",u),n,function(e){o(e.values)},"json")
}else o([])}})}),define("cdf/dashboard/Dashboard.lifecycle",["./Dashboard","../Logger","amd!../lib/underscore","../components/UnmanagedComponent","../lib/jquery"],function(e,t,n,r,i){e.implement({_initLifecycle:function(){this.initCounter=0,this.runningCalls=0,this.lastServerResponse=Date.now?Date.now():(new Date).getTime(),this.serverCheckResponseTimeout=1/0
},resetRunningCalls:function(){this.runningCalls=0,setTimeout(n.bind(function(){this.hideProgressIndicator()
},this),10)},getRunningCalls:function(){return this.runningCalls},incrementRunningCalls:function(){this.runningCalls++,this.showProgressIndicator(),t.log("+Running calls incremented to: "+this.getRunningCalls())
},decrementRunningCalls:function(){this.runningCalls--,t.log("-Running calls decremented to: "+this.getRunningCalls()),setTimeout(n.bind(function(){this.runningCalls<=0&&(this.hideProgressIndicator(),this.runningCalls=0)
},this),10)},init:function(e){var r=this,a=r.initCounter++;t.log("InitInstance "+a),0==a&&(r.syncDebugLevel(),r.initialStorage?n.extend(r.storage,r.initialStorage):r.loadStorage(),null!=r.context&&null!=r.context.sessionTimeout&&(r.serverCheckResponseTimeout=900*r.context.sessionTimeout),r.restoreBookmarkables(),r.restoreView(),r.syncParametersInit()),n.isArray(e)&&r.addComponents(e),n.chain(r.components).where({initInstance:void 0}).each(function(e){e.initInstance=a
}),i(function(){r._initEngine(a)})},_initEngine:function(e){var a=this;a.waitingForInit&&a.waitingForInit.length&&t.log("Overlapping initEngine!","warn");
var o=null!=e?n.where(a.components,{initInstance:e}):a.components;a.waitingForInit&&0!==a.waitingForInit.length||a.finishedInit||a.incrementRunningCalls(),t.log("          [Lifecycle >Start] Init["+e+"] (Running: "+a.getRunningCalls()+")","log","color: #ddd"),a.createAndCleanErrorDiv(),"function"==typeof a.preInit&&a.preInit(),a.trigger("cdf cdf:preInit",a),i(window).trigger("cdfAboutToLoad");
var s,a=a,u=[];for(s=0;s<o.length;s++)o[s].executeAtStart&&u.push(o[s]);if(!u.length)return a._handlePostInit(),void 0;
var c=new r({name:"PostInitMarker",type:"unmanaged",lifecycle:{silent:!0},executeAtStart:!0,priority:999999999});
a.addComponent(c),u.push(c),a.waitingForInit=u.slice();for(var d=function(t,r){2==arguments.length&&r||(a.waitingForInit=n(a.waitingForInit).without(t),t.off("cdf:postExecution",d),t.off("cdf:preExecution",d),t.off("cdf:error",d),a._handlePostInit(e))
},s=0,l=u.length;l>s;s++){var h=u[s];h.on("cdf:postExecution cdf:preExecution cdf:error",d,a)
}a.updateAll(u),o.length>0&&a._handlePostInit(e)},_handlePostInit:function(e){var r=this,a=function(){var e=n.filter(r.components,function(e){return"duplicate"==e.type
}),t={},a=r.getBookmarkState().params||{};n.map(n.filter(Object.keys(a),function(e){return/(_[0-9]+)+$/.test(e)
}),function(e){var n=e.match(/(.*?)((_[0-9]+)+)$/),r=n[1],i=n[2];return t[i]||(t[i]={}),t[i][r]=a[e],e
});for(var o in t)if(t.hasOwnProperty(o)){var a=t[o];i.each(e,function(e,t){var n;
for(n=0;n<t.parameters.length;n++)if(!a.hasOwnProperty(t.parameters[n])&&r.isBookmarkable(t.parameters[n]))return;
t.duplicate(a)})}};r.waitingForInit&&0!==r.waitingForInit.length||r.finishedInit||(r.trigger("cdf cdf:postInit",r),i(window).trigger("cdfLoaded"),"function"==typeof r.postInit&&r.postInit(),a(),r.finishedInit=!0,r.decrementRunningCalls(),t.log("          [Lifecycle <End  ] Init["+e+"] (Running: "+r.getRunningCalls()+")","log","color: #ddd"))
},updateLifecycle:function(e){var r=e.lifecycle?!!e.lifecycle.silent:!1;if(!e.disabled){r||this.incrementRunningCalls();
var a=n.bind(function(){try{var n;if("undefined"!=typeof e.preExecution&&(n=e.preExecution.apply(e)),n="undefined"!=typeof n?!!n:!0,e.trigger("cdf cdf:preExecution",e,n),!n)return;
void 0!=e.tooltip&&(e._tooltip="function"==typeof e.tooltip?e.tooltip():e.tooltip),void 0!=e.update&&"function"==typeof e.update&&(e.update(),this.refreshEngine.processComponent(e)),"undefined"!=typeof e.postExecution&&e.postExecution.apply(e),void 0!=e._tooltip&&i("#"+e.htmlObject).attr("title",e._tooltip).tooltip({delay:0,track:!0,fade:250})
}catch(a){var o=e.htmlObject?i("#"+e.htmlObject):void 0,s=this.getErrorObj("COMPONENT_ERROR").msg+" ("+e.name.replace("render_","")+")";
this.errorNotification({msg:s},o),t.error("Error updating "+e.name+":"),t.exception(a)
}finally{r||this.decrementRunningCalls()}e.trigger("cdf cdf:postExecution",e)},this);
setTimeout(a,1)}},updateAll:function(e){var t=function(e,t){if(t)for(var r in t)t.hasOwnProperty(r)&&(e[r]=n.isArray(e[r])?n.union(e[r],t[r]):t[r])
};if(this.updating||(this.updating={tiers:{},current:null}),e&&n.isArray(e)&&!n.isArray(e[0])){var r={};
n.each(e,function(e){if(e){var t=e.priority||0;r[t]||(r[t]=[]),r[t].push(e)}}),e=r
}t(this.updating.tiers,e);var i=this.updating.current,a=!1;if(null===i||0==i.components.length||(a=this.othersAwaitExecution(n.clone(this.updating.tiers),this.updating.current))){var o=this.getFirstTier(this.updating.tiers);
if(!o)return;if(a){var s=this.updating.tiers;s[i.priority]=n.difference(s[i.priority],i.components),o.components=n.union(s[i.priority],this.getFirstTier(s).components)
}this.updating.current=o;for(var u=function(e,t){if(2!=arguments.length||"boolean"!=typeof t||!t){e.off("cdf:postExecution",u),e.off("cdf:preExecution",u),e.off("cdf:error",u);
var r=this.updating.current;r.components=n.without(r.components,e);var i=this.updating.tiers;
i[r.priority]=n.without(i[r.priority],e),this.updateAll()}},r=this.updating.current.components.slice(),c=0;c<r.length;c++){var d=r[c];
d.startTimer(),d.on("cdf:postExecution cdf:preExecution cdf:error",u,this),this.updateComponent(d)
}}},update:function(e){this.updateQueue||(this.updateQueue=[]),this.updateQueue.push(e),this.updateTimeout&&clearTimeout(this.updateTimeout);
var t=n.bind(function(){this.updateAll(this.updateQueue),delete this.updateQueue},this);
this.updateTimeout=setTimeout(t,5)},updateComponent:function(e){if((Date.now?Date.now():(new Date).getTime())-this.lastServerResponse>this.serverCheckResponseTimeout&&!this.checkServer())throw this.hideProgressIndicator(),this.loginAlert(),"not logged in";
e.isManaged===!1&&e.update?(e.update(),this.refreshEngine.processComponent(e)):this.updateLifecycle(e)
},getFirstTier:function(e){for(var t,r=n.keys(e).sort(function(e,t){return parseInt(e,10)-parseInt(t,10)
}),i=0;i<r.length;i++)if(t=e[r[i]],t.length>0)return{priority:r[i],components:t.slice()};
return null},resetAll:function(){this.createAndCleanErrorDiv();for(var e=(this.components.length,0),t=this.components.length;t>e;e++)this.components[e].clear();
for(var e=(this.components.length,0),t=this.components.length;t>e;e++)this.components[e].executeAtStart&&this.update(this.components[e])
},processChange:function(e){var t,n=this.getComponentByName(e),r=n.parameter;if("function"==typeof n.getValue&&(t=n.getValue()),null!=t){if("undefined"!=typeof n.preChange){var i=n.preChange(t);
t=void 0!=i?i:t}r&&this.fireChange(r,t),"undefined"!=typeof n.postChange&&n.postChange(t)
}},fireChange:function(e,t){var r=this;r.createAndCleanErrorDiv(),r.setParameter(e,t,!0),r.trigger("cdf "+e+":fireChange",{parameter:e,value:t});
for(var i=[],a=0,o=r.components.length;o>a;a++)if(n.isArray(r.components[a].listeners))for(var s=0;s<r.components[a].listeners.length;s++){var u=r.components[a];
if(u.listeners[s]==e&&!u.disabled){i.push(u);break}}r.updateAll(i)},othersAwaitExecution:function(e,t){if(!e||!t||!t.components)return!1;
e[t.priority]=n.difference(e[t.priority],t.components);var r=this.getFirstTier(e);
return r&&r.components&&0!=r.components.length?parseInt(r.priority)>parseInt(t.priority)?!1:!0:!1
}})}),define("cdf/dashboard/Popups",["../lib/mustache","amd!../lib/underscore","../lib/jquery","amd!../lib/jquery.blockUI"],function(e,t,n){var r={};
return r.okPopup={template:"<div class='cdfPopup'>  <div class='cdfPopupHeader'>{{{header}}}</div>  <div class='cdfPopupBody'>    <div class='cdfPopupDesc'>{{{desc}}}</div>    <div class='cdfPopupButton'>{{{button}}}</div>  </div></div>",defaults:{header:"Title",desc:"Description Text",button:"Button Text",callback:function(){return!0
}},$el:void 0,show:function(e){(e||this.firstRender)&&this.render(e),this.$el.show()
},hide:function(){this.$el.hide()},render:function(r){var i=t.extend({},this.defaults,r),a=this;
this.firstRender&&(this.$el=n("<div/>").addClass("cdfPopupContainer").hide().appendTo("body"),this.firstRender=!1),this.$el.empty().html(e.render(this.template,i)),this.$el.find(".cdfPopupButton").click(function(){i.callback(),a.hide()
})},firstRender:!0},r.notificationsComponent={template:"<div class='cdfNotification component {{#isSmallComponent}}small{{/isSmallComponent}}'>  <div class='cdfNotificationBody'>    <div class='cdfNotificationImg'>&nbsp;</div>    <div class='cdfNotificationTitle' title='{{title}}'>{{{title}}}</div>    <div class='cdfNotificationDesc' title='{{desc}}'>{{{desc}}}</div>  </div></div>",defaults:{title:"Component Error",desc:"Error processing component."},render:function(r,i){var a=t.extend({},this.defaults,i);
a.isSmallComponent=n(r).width()<300,n(r).empty().html(e.render(this.template,a));
var o=n(r).find(".cdfNotification");o.css({"line-height":o.height()+"px"})}},r.notificationsGrowl={template:"<div class='cdfNotification growl'>  <div class='cdfNotificationBody'>    <h1 class='cdfNotificationTitle' title='{{title}}'>{{{title}}}</h1>    <h2 class='cdfNotificationDesc' title='{{desc}}'>{{{desc}}}</h2>  </div></div>",defaults:{title:"Title",desc:"Default CDF notification.",timeout:4e3,onUnblock:function(){return!0
},css:n.extend({},n.blockUI.defaults.growlCSS,{position:"absolute",width:"100%",top:"10px"}),showOverlay:!1,fadeIn:700,fadeOut:1e3,centerY:!1},render:function(r){var i=t.extend({},this.defaults,r),a=n(e.render(this.template,i)),o=this;
i.message=a;var s=i.onUnblock;i.onUnblock=function(){o.$el.hide(),s.call(this)},this.firstRender&&(this.$el=n("<div/>").addClass("cdfNotificationContainer").hide().appendTo("body"),this.firstRender=!1),this.$el.show().block(i)
},firstRender:!0},r}),define("cdf/dashboard/Dashboard.notifications",["./Dashboard","./Dashboard.notifications.ext","./Popups","../Logger","amd!../lib/underscore","../lib/jquery","amd!../lib/jquery.blockUI"],function(e,t,n,r,i,a){e.implement({_initNotifications:function(){this.ERROR_CODES={QUERY_TIMEOUT:{msg:"Query timeout reached"},COMPONENT_ERROR:{msg:"Error processing component"}}
},blockUIwithDrag:function(){"undefined"!=typeof this.i18nSupport&&null!=this.i18nSupport&&(a.blockUI.defaults.message='<div class="img blockUIDefaultImg" style="padding: 0px;"></div>'),a.blockUI();
var e=a('<div id="blockUIDragHandle"></div>');a("div.blockUI.blockMsg").prepend(e),a("div.blockUI.blockMsg").draggable({handle:"#blockUIDragHandle"})
},showProgressIndicator:function(){a.blockUI&&this.blockUIwithDrag()},hideProgressIndicator:function(e){e&&this.resetRunningCalls(),a.unblockUI&&a.unblockUI(),this.showErrorTooltip()
},getErrorObj:function(e){return this.ERROR_CODES[e]||{}},parseServerError:function(e,t,n){var r=[{match:/Query timeout/,msg:this.getErrorObj("QUERY_TIMEOUT").msg}],o={msg:this.getErrorObj("COMPONENT_ERROR").msg,error:n,errorStatus:t},s=a("<div/>").html(e.responseText).find("h1").text();
return i.find(r,function(e){return s.match(e.match)?(o.msg=e.msg,!0):!1}),o},handleServerError:function(){this.errorNotification(this.parseServerError.apply(this,arguments)),this.trigger("cdf cdf:serverError",this),this.resetRunningCalls()
},errorNotification:function(e,t){t?n.notificationsComponent.render(a(t),{title:e.msg,desc:""}):n.notificationsGrowl.render({title:e.msg,desc:""})
},loginAlert:function(e){var t={header:"Warning",desc:"You are no longer logged in or the connection to the server timed out",button:"Click to reload this page",callback:function(){window.location.reload(!0)
}};t=i.extend({},t,e),n.okPopup.show(t),this.trigger("cdf cdf:loginError",this)},checkServer:function(){a.ajax({type:"POST",async:!1,dataType:"json",url:t.getPing(),success:function(e){return e&&"ok"==e.ping
},error:function(){return!1}})}})}),define("cdf/dashboard/Dashboard.parameters",["./Dashboard","../Logger","amd!../lib/backbone","./Utf8Encoder"],function(e,t,n,r){e.implement({LEGACY_STORAGE:"Dashboards.storage.",STORAGE:"storage.",_initParameters:function(){this.parameters=[],this.parameterModel=new n.Model,this.chains=[],this.syncedParameters={},this.escapeParameterValues=!1
},_isParameterInModel:function(e,t){return void 0!==this._getValueFromContext(e,t)
},_getValueFromContext:function(e,t){if(e){if(this.flatParameters)return e[t];if(null!=t){var n,r;
if(t instanceof Array)n=t;else{if(t.indexOf(".")<0)return e[t];n=t.split(".")}r=n.length;
for(var i=0;r>i;i++){if(!e)return;var a=n[i],o=e[a];if(void 0===o)return;e=o}}return e
}},_setValueInContext:function(e,t,n){if(e&&null!=t&&void 0!==n){if(this.flatParameters)e[t]=n;
else{var r,i;if(t instanceof Array)r=t,i=r.pop();else{if(t.indexOf(".")<0)return e[t]=n,e;
r=t.split("."),i=r.pop()}e=this._getValueFromContext(e,r),e&&(e[i]=n)}return e}},_getParameterStore:function(e){var n;
return 0==e.indexOf(this.LEGACY_STORAGE)?(t.warn("Legacy storage access for "+e+". Please use storage instead"),e=e.substr(this.LEGACY_STORAGE.length),n=this.storage):0==e.indexOf(this.STORAGE)?(e=e.substr(this.STORAGE.length),n=this.storage):n=this.parameters,{store:n,name:e}
},addParameter:function(e,n){if(void 0==e||"undefined"==e)return t.warn("Dashboard addParameter: trying to add undefined!!"),void 0;
var r=this._getParameterStore(e);return this._isParameterInModel(r.store,r.name)&&(n=this.getParameterValue(r.name)),this.setParameter(e,n),n
},getParameterValue:function(e){if(void 0==e||"undefined"==e)return t.warn("Dashboard.getParameterValue: trying to get undefined!!"),void 0;
var n=this._getParameterStore(e);return this._getValueFromContext(n.store,n.name)
},getParam:function(e){return this.getParameterValue(e)},setParameter:function(e,n,i){if(void 0==e||"undefined"==e)return t.warn("Dashboard.setParameter: trying to set undefined!!"),void 0;
var a=this._getParameterStore(e);this.escapeParameterValues?this._setValueInContext(a.store,a.name,r.encode_prepare_arr(n)):this._setValueInContext(a.store,a.name,n),void 0!==this._setValueInContext(a.store,a.name,n)&&(this.parameterModel.set(a.name,n,{notify:i}),this.persistBookmarkables(a.name))
},setParam:function(e,t,n){this.setParameter(e,t,n)},syncParameters:function(e,t){this.setParameter(t,this.getParameterValue(e)),this.parameterModel.on("change:"+e,function(e,n,r){this[r.notify?"fireChange":"setParameter"](t,n)
},this),this.parameterModel.on("change:"+t,function(t,n,r){this[r.notify?"fireChange":"setParameter"](e,n)
},this)},syncParametersOnInit:function(e,t){var n,r,i,a,o=this.syncedParameters;o[e]||(o[e]=[]),o[e].push(t);
for(var s=0;s<this.chains.length;s++)n=this.chains[s],n.indexOf(e)>-1&&(r=n),n.indexOf(t)>-1&&(i=n,a=s);
if(i&&r){if(r!=i){var u=i.slice();u.unshift(0),u.unshift(r.length),[].splice.apply(r,u),this.chains.splice(a,1)
}}else i?i.unshift(e):r?r.push(t):this.chains.push([e,t])},syncParametersInit:function(){var e,t,n,r,i,a=this.syncedParameters;
for(n=0;n<this.chains.length;n++)for(r=0;r<this.chains[n].length;r++)if(e=this.chains[n][r],a[e])for(i=0;i<a[e].length;i++)t=a[e][i],this.syncParameters(e,t)
}})}),define("cdf/dashboard/Dashboard.storage",["./Dashboard","../Logger","../lib/jquery","./Dashboard.storage.ext"],function(e,t,n,r){e.implement({_initStorage:function(){this.storage||(this.storage={},n.extend(this.storage,this.storageObj)),this.initialStorage=this.storage
},loadStorage:function(){var e=this;if(!this.context||"anonymousUser"!==this.context.user){var t={user:this.context.user,action:"read",ts:Date.now?Date.now():(new Date).getTime()};
n.ajax({type:"GET",dataType:"json",url:r.getStorage(t.action),data:t,async:!0,xhrFields:{withCredentials:!0},success:function(t){n.extend(e.storage,t)
}})}},saveStorage:function(){if(!this.context||"anonymousUser"!==this.context.user){var e={user:this.context.user,action:"store",storageValue:JSON.stringify(this.storage),ts:Date.now?Date.now():(new Date).getTime()};
n.ajax({type:"GET",dataType:"json",url:r.getStorage(e.action),data:e,async:!0,xhrFields:{withCredentials:!0}}).done(function(e){1!=e.result&&t.log("Error saving storage","error")
})}},cleanStorage:function(){if(this.storage={},!this.context||"anonymousUser"!==this.context.user){var e={user:this.context.user,action:"delete"};
n.ajax({type:"GET",dataType:"json",url:r.getStorage(e.action),data:e,async:!0,xhrFields:{withCredentials:!0}}).done(function(e){1!=e.result&&t.log("Error deleting storage","error")
})}}})}),define("cdf/dashboard/Dashboard.dataSources",["./Dashboard","../Logger","amd!../lib/underscore"],function(e,t,n){e.implement({_initDataSources:function(){this.dataSources={}
},_getDataSourceName:function(e){var r;return r=n.isObject(e)?e.dataSource:e,n.isString(r)&&!n.isEmpty(r)?r:(t.warn("Invalid data source name"),void 0)
},addDataSource:function(e,r,i){if(n.isObject(e)&&(i=r,r=e,e=r.name),!n.isObject(r))return t.error("Invalid data source object"),void 0;
if(!n.isString(e)||n.isEmpty(e))return t.error("Invalid data source name"),void 0;
if(this.dataSources[e]){if(!this.dataSources.hasOwnProperty(e))return t.error("Data source name '"+e+"' is invalid, overwrites an inherited property"),void 0;
if(!i)return t.warn("Data source name '"+e+"' is already defined, set force flag to true to overwrite it"),void 0
}var a=n.extend({},r);a.name&&delete a.name,this.dataSources[e]=a},getDataSource:function(e){var t=this._getDataSourceName(e);
return t&&this.dataSources.hasOwnProperty(t)?this.dataSources[t]:void 0},getDataSourceQuery:function(e){var r=this.getDataSource(e);
return n.isEmpty(r)?(t.error("Invalid data source"),void 0):this.getQuery(r)},setDataSource:function(e,t){n.isObject(e)?this.addDataSource(e,!0):this.addDataSource(e,t,!0)
},removeDataSource:function(e){var n;return(n=this._getDataSourceName(e))?(n in this.dataSources&&this.dataSources.hasOwnProperty(n)?delete this.dataSources[n]:t.warn("Data source name '"+n+"' not found"),void 0):(t.warn("Invalid data source name"),void 0)
}})}),define("cdf/dashboard/Dashboard.query",["../Logger","../lib/Base","./Dashboard","./Container","amd!../lib/underscore","./Utils"],function(e,t,n,r,i,a){var o=t,s=new r;
return n.implement({_initQuery:function(){this.queryFactories=a.clone(s)},getBaseQuery:function(){return o
},registerQuery:function(e,t){var n=this.getBaseQuery();if(!i.isFunction(t)&&i.isObject(t)){var r={};
i.each(n.prototype.deepProperties,function(e){r[e]=i.extend({},n.prototype[e],t[e])
})}var a=i.isFunction(t)&&t||i.isObject(t)&&n.extend(i.extend({},t,r));this.queryFactories.register("Query",e,function(e,t){return new a(t)
})},hasQuery:function(e){return Boolean(this.queryFactories&&this.queryFactories.has("Query",e))
},detectQueryType:function(t){if(t){if(i.isString(t.dataSource)&&!i.isEmpty(t.dataSource)){var n=this.getDataSource(t.dataSource);
if(i.isUndefined(n))return e.error("Invalid data source name '"+t.dataSource+"'"),void 0;
t=n}var r=t.queryType?t.queryType:t.query?"legacy":t.path&&t.dataAccessId?"cda":void 0;
return t.queryType=r,this.hasQuery(r)?r:void 0}},getQuery:function(t,n){if(i.isUndefined(t)?t="cda":i.isObject(t)&&(n=t,t=void 0),i.isString(n.dataSource)&&!i.isEmpty(n.dataSource)){var r=this.getDataSource(n.dataSource);
if(i.isUndefined(r))return e.error("Invalid data source name '"+qd.dataSource+"'"),void 0;
n=i.extend({},r,n),delete n.dataSource}t=t||n.queryType||"cda";var a=this.queryFactories.getNew("Query",t,n);
return a.dashboard=this,a},listQueries:function(){return i.keys(this.queryFactories.listType("Query"))
}}),{setBaseQuery:function(e){i.isFunction(e)&&e.extend&&(o=e)},registerGlobalQuery:function(e,t){var n=o;
if(!i.isFunction(t)&&i.isObject(t)){var r={};i.each(n.prototype.deepProperties,function(e){r[e]=i.extend({},n.prototype[e],t[e])
})}var a=i.isFunction(t)&&t||i.isObject(t)&&n.extend(i.extend({},t,r));s.register("Query",e,function(e,t){return new a(t)
})}}}),define("cdf/dashboard/Dashboard.views",["./Dashboard","../lib/base64","./Dashboard.views.ext","../lib/jquery"],function(e,t,n,r){e.implement({viewFlags:{UNUSED:"unused",UNBOUND:"unbound",VIEW:"view"},_initViews:function(){this.viewParameters={},!this.view&&this.viewObj&&(this.view={},r.extend(this.view,this.viewObj))
},restoreView:function(){var e,n;if(this.view&&this.view.params&&(n=JSON.parse(t.decode(this.view.params))))if(r.isEmptyObject(n))this.view.params=n;
else for(e in n)n.hasOwnProperty(e)&&this.setParameter(e,n[e])},setParameterViewMode:function(e,t){1===arguments.length&&(t=this.viewFlags.VIEW),this.viewParameters[e]=t
},isViewParameter:function(e){return this.viewParameters[e]},getViewParameters:function(){var e=this.viewParameters,t={};
for(var n in e)e.hasOwnProperty(n)&&(e[n]==this.viewFlags.VIEW||e[n]==this.viewFlags.UNBOUND)&&(t[n]=this.getParameterValue(n));
return t},getUnboundParameters:function(){var e=this.viewParameters,t=[];for(var n in e)if(e.hasOwnProperty(n))return e[n]==this.viewFlags.UNBOUND&&t.push(n),t
}})}),define("cdf/dashboard/OptionsManager",["./Utils","amd!../lib/underscore","../lib/jquery"],function(e,t,n){function r(e,t,n,r){return e&&e[t]&&e[t].hasOwnProperty(n)?e[t][n]:r||void 0
}function i(e,t,n,r){e&&t&&n&&(e[t]=e[t]||{},e[t][n]=r)}return function(a){function o(e,t){t=t||{},l(e,t.reader),h(e,t.writer),f(e,t.validator)
}function s(e){return r(g._interfaces,e,"reader",g._libraries.mappers.identity)}function u(e){return r(g._interfaces,e,"writer",g._libraries.mappers.identity)
}function c(e){return r(g._interfaces,e,"validator",g._libraries.predicates.tautology)
}function d(e){return r(g._options,e,"value")}function l(e,n){var r=g._libraries.mappers;
return n=t.isFunction(n)&&n||t.isString(n)&&r[n]||s(e)||r.identity,i(g._interfaces,e,"reader",n)
}function h(e,n){var r=g._libraries.mappers;return n=t.isFunction(n)&&n||t.isString(n)&&r[n]||u(e)||r.identity,i(g._interfaces,e,"writer",n)
}function f(e,n){var r=g._libraries.predicates;return n=t.isFunction(n)&&n||t.isString(n)&&r[n]||c(e)||r.tautology,i(g._interfaces,e,"validator",n)
}function p(e,t){return i(g._options,e,"value",t)}var g=this;this._options={},this._interfaces={},this._libraries={predicates:{tautology:function(){return!0
},isFunction:t.isFunction,isPositive:function(e){return t.isNumber(e)&&e>0},isObjectOrPropertiesArray:function(e){return t.isArray(e)||t.isObject(e)
},isObject:t.isObject,isArray:t.isArray},mappers:{identity:t.identity,propertiesObject:function(n){return t.isArray(n)?e.propertiesArrayToObject(n):n
}}},this.mixin=function(e){e.getOption=this.getOption,e.setOption=this.setOption},this.init=function(e,r,i){e=n.extend(!0,{},e),r=n.extend(!0,{},r),this._libraries=n.extend(!0,{},this._libraries,i),t.each(r,function(e,t){o(t,e)
}),t.each(e,function(e,t){var n=r&&r[t]||{};o(t,n),p(t,e)})},this.setOption=function(e,t,n){o(e,n);
var r=s(e),i=c(e);if(i(t))return t=r(t),p(e,t),!0;throw new Error("Invalid Option "+e.charAt(0).toUpperCase()+e.slice(1))
},this.getOption=function(e){var t=u(e),n=d(e);return t(n)},this.init(a.defaults,a.interfaces,a.libraries)
}}),define("cdf/queries/BaseQuery",["../lib/jquery","../lib/Base","amd!../lib/underscore","../Logger","../dashboard/OptionsManager","../dashboard/Dashboard.query"],function(e,t,n,r,i,a){var o=t.extend({name:"baseQuery",label:"Base Query",deepProperties:["defaults","interfaces"],dashboard:void 0,defaults:{successCallback:function(){r.log("Query callback not defined. Override.")
},errorCallback:function(){void 0!=dashboard&&void 0!=dashboard.handleServerError&&dashboard.handleServerError()
},lastResultSet:null,page:0,pageSize:0,params:{},ajaxOptions:{async:!1,type:"POST"},url:""},interfaces:{params:{reader:"propertiesObject",validator:"isObjectOrPropertiesArray"},successCallback:{validator:"isFunction"},errorCallback:{validator:"isFunction"},pageSize:{validator:"isPositive"}},constructor:function(e){this._optionsManager=new i(this),this._optionsManager.mixin(this),this.init(e)
},getOption:function(e){return this.defaults[e]},setOption:function(e,t){this.defaults[e]=t
},init:function(){},getSuccessHandler:function(t){var n=this;return function(r){n.setOption("lastResultSet",r);
var i=e.extend(!0,{},n.getOption("lastResultSet"));t(i)}},getErrorHandler:function(e){return function(t,n,r){e&&e(t,n,r)
}},doQuery:function(t,i){if("function"!=typeof this.getOption("successCallback"))throw"QueryNotInitialized";
var a=n.extend({},this.getOption("ajaxOptions"),{data:this.buildQueryDefinition(),url:this.getOption("url"),success:this.getSuccessHandler(t?t:this.getOption("successCallback")),error:this.getErrorHandler(i?i:this.getOption("errorCallback"))}),o=null==a.async?e.ajaxSettings.async:a.async;
!o&&a.xhrFields&&a.xhrFields.withCredentials&&(r.log("Cross-domain requests are deprecated for synchronous operations."),delete a.xhrFields.withCredentials),e.ajax(a)
},exportData:function(){},setAjaxOptions:function(e){this.setOption("ajaxOptions",n.extend({},this.getOption("ajaxOptions"),e))
},setSortBy:function(){},sortBy:function(){},fetchData:function(e,t,r){switch(arguments.length){case 0:if(this.getOption("params")&&this.getOption("successCallback"))return this.doQuery();
break;case 1:if("function"==typeof arguments[0])return this.doQuery(arguments[0]);
if(!n.isEmpty(arguments[0])&&(n.isObject(arguments[0])||n.isArray(arguments[0])))return this.setOption("params",arguments[0]||{}),this.doQuery();
break;case 2:return"function"==typeof arguments[0]?(this.setOption("successCallback",arguments[0]),this.setOption("errorCallback",arguments[1]),this.doQuery()):(this.setOption("params",arguments[0]||{}),this.setOption("successCallback",arguments[1]),this.doQuery());
default:return e&&this.setOption("params",e),this.setOption("successCallback",t),this.setOption("errorCallback",r),this.doQuery()
}throw"InvalidInput"},lastResults:function(){if(null!==this.getOption("lastResultSet"))return e.extend(!0,{},this.getOption("lastResultSet"));
throw"NoCachedResults"},reprocessLastResults:function(t){if(null!==this.getOption("lastResultSet")){var n=e.extend(!0,{},this.getOption("lastResultSet")),r=t||this.getOption("successCallback");
return r(n)}throw"NoCachedResults"},reprocessResults:function(e){return this.reprocessLastResults(e)
},setParameters:function(e){this.setOption("params",e)},setCallback:function(e){this.setOption("successCallback",e)
},setErrorCallback:function(e){this.setOption("errorCallback",e)},setSearchPattern:function(e){this.setOption("searchPattern",e)
},nextPage:function(e){var t=this.getOption("page"),n=this.getOption("pageSize");
if(n>0)return t+=n,this.setOption("page",t),this.doQuery(e);throw"InvalidPageSize"
},previousPage:function(e){var t=this.getOption("page"),n=this.getOption("pageSize");
if(t>n)return t-=n,this.setOption("page",t),this.doQuery(e);if(_pageSize>0)return this.setOption("page",0),this.doQuery(e);
throw"AtBeginning"},getPage:function(e,t){var n=this.getOption("page"),r=this.getOption("pageSize");
if(e*r==n)return!1;if("number"==typeof e&&e>=0)return this.setOption("page",e*r),this.doQuery(t);
throw"InvalidPage"},setPageStartingAt:function(e){if(e==this.getOption("page"))return!1;
if(!("number"==typeof e&&e>=0))throw"InvalidPage";this.setOption("page",e)},pageStartingAt:function(e,t){return this.setPageStartingAt(e)!==!1?this.doQuery(t):!1
},setPageSize:function(e){this.setOption("pageSize",e)},initPage:function(e,t){if(e==this.getOption("pageSize")&&0==this.getOption("page"))return!1;
if("number"==typeof e&&e>0)return this.setOption("page",0),this.setOption("pageSize",e),this.doQuery(t);
throw"InvalidPageSize"}});return a.setBaseQuery(o),o}),define("cdf/queries/CpkQuery",["../dashboard/Dashboard.ext","./BaseQuery","../dashboard/Dashboard.query","amd!../lib/underscore","../dashboard/Utils","../Logger","../lib/jquery"],function(e,t,n,r,i,a,o){var s={name:"cpk",label:"CPK Query",defaults:{url:"",pluginId:"",endpoint:"",systemParams:{},ajaxOptions:{dataType:"json",type:"POST",async:!0,xhrFields:{withCredentials:!0}}},init:function(t){r.isString(t.pluginId)&&r.isString(t.endpoint)&&(this.setOption("pluginId",t.pluginId),this.setOption("endpoint",t.endpoint),this.setOption("url",e.getPluginEndpoint(t.pluginId,t.endpoint))),this.setOption("kettleOutput",t.kettleOutput),this.setOption("stepName",t.stepName),this.setOption("systemParams",t.systemParams||{}),this.setOption("ajaxOptions",o.extend({},this.getOption("ajaxOptions"),t.ajaxOptions));
var n=this.getOption("ajaxOptions");"json"==n.dataType&&(n.mimeType="application/json; charset utf-8",this.setOption("ajaxOptions",n))
},buildQueryDefinition:function(e){var t=this;e=e instanceof Array?i.propertiesArrayToObject(e):e||{};
var n={kettleOutput:this.getOption("kettleOutput"),stepName:this.getOption("stepName")};
n=o.extend(!0,{},n,this.getOption("systemParams"));var s=this.getOption("params"),u=o.extend({},s,e);
return r.each(u,function(e,i){var o,s;try{o=t.dashboard.getParameterValue(e)}catch(u){s=!r.isObject(e)||r.isFunction(e)?e:JSON.stringify(e),a.log("BuildQueryDefinition detected static parameter "+i+"="+s+". The parameter will be used as value instead its value obtained from getParameterValue"),o=e
}void 0===o&&(o=e),r.isFunction(o)?o=o():r.isObject(o)&&(o=JSON.stringify(o)),n["param"+i]=o
}),n},getSuccessHandler:function(e){var t=this;return function(n){t.setOption("lastResultSet",n);
var r=o.extend(!0,{},t.getOption("lastResultSet"));if(n&&0==n.result){var i=t.getErrorHandler(t.getOption("errorCallback"));
i(r)}else e(r)}}};n.registerGlobalQuery("cpk",s)}),define("cdf/queries/CdaQuery",["./CdaQuery.ext","./BaseQuery","../dashboard/Dashboard.query","amd!../lib/underscore","../dashboard/Utils","../Logger","../lib/jquery"],function(e,t,n,r,i,a,o){var s={name:"cda",label:"CDA Query",defaults:{url:e.getDoQuery(),file:"",id:"",outputIdx:"1",sortBy:"",ajaxOptions:{async:!0,xhrFields:{withCredentials:!0}},searchPattern:""},init:function(e){if("undefined"==typeof e.path||"undefined"==typeof e.dataAccessId)throw"InvalidQuery";
this.setOption("file",e.path),this.setOption("id",e.dataAccessId),"string"==typeof e.sortBy&&e.sortBy.match("^(?:[0-9]+[adAD]?,?)*$")&&this.setOption("sortBy",e.sortBy),null!=e.pageSize&&this.setOption("pageSize",e.pageSize),null!=e.outputIndexId&&this.setOption("outputIdx",e.outputIndexId)
},buildQueryDefinition:function(e){var t=this;e=e instanceof Array?i.propertiesArrayToObject(e):e||{};
var n={},s=this.getOption("params"),u=o.extend({},s,e);return r.each(u,function(e,s){var u;
try{u=t.dashboard.getParameterValue(e)}catch(c){var d="";d=!r.isObject(e)||r.isFunction(e)?e:JSON.stringify(e),a.log("BuildQueryDefinition detected static parameter "+s+"="+d+". The parameter will be used instead the parameter value"),u=e
}void 0===u&&(u=e),o.isArray(u)&&1==u.length&&(""+u[0]).indexOf(";")>=0&&(u=i.doCsvQuoting(u[0],";")),"function"==typeof u&&(u=u()),n["param"+s]=u
}),n.path=this.getOption("file"),n.dataAccessId=this.getOption("id"),n.outputIndexId=this.getOption("outputIdx"),n.pageSize=this.getOption("pageSize"),n.pageStart=this.getOption("page"),n.sortBy=this.getOption("sortBy"),n.paramsearchBox=this.getOption("searchPattern"),n
},exportData:function(t,n,r){r||(r={});var i=this.buildQueryDefinition(n);i.outputType=t,"csv"==t&&r.separator&&(i.settingcsvSeparator=r.separator),r.filename&&(i.settingattachmentName=r.filename),"xls"==t&&r.template&&(i.settingtemplateName=r.template),r.columnHeaders&&(i.settingcolumnHeaders=r.columnHeaders),null!=r.dtFilter&&(i.settingdtFilter=r.dtFilter,null!=r.dtSearchableColumns&&(i.settingdtSearchableColumns=r.dtSearchableColumns)),i.wrapItUp="true",o.ajax({type:"POST",dataType:"text",async:!0,data:i,url:this.getOption("url"),xhrFields:{withCredentials:!0}}).done(function(t){var n=o('<iframe style="display:none">');
n.detach(),n[0].src=e.getUnwrapQuery({path:i.path,uuid:t}),n.appendTo(o("body"))}).fail(function(e,t,n){a.log("Request failed: "+e.responseText+" :: "+t+" ::: "+n)
})},setSortBy:function(e){var t,n=this;if(null===e||void 0===e||""===e)t="";else if("string"==typeof e){if(!e.match("^(?:[0-9]+[adAD]?,?)*$"))throw"InvalidSortExpression";
t=e.toUpperCase().split(",").filter(function(e){return""!==e})}else if(e instanceof Array){t=e.map(function(e){return e.toUpperCase()
});var r=t.filter(function(e){return!e.match("^[0-9]+[adAD]?,?$")});if(r.length>0)throw"InvalidSortExpression"
}var i;return t instanceof Array?(i=t.length!=n.getOption("sortBy").length,o.each(t,function(e,t){return i=i&&t==n.getOption("sortBy")[e],i?void 0:!1
})):i=t===this.getOption("sortBy"),this.setOption("sortBy",t),!i},sortBy:function(e,t){var n=this.setSortBy(e);
return n?null!==this.getOption("successCallback")?this.doQuery(t):void 0:!1}};n.registerGlobalQuery("cda",s)
}),define("cdf/queries/XmlaQuery",["amd!../lib/xmla","./XmlaQuery.ext","../lib/Base","./BaseQuery","../dashboard/Dashboard.query","../Logger","../lib/jquery"],function(e,t,n,r,i,a,o){var s=n.extend({xmla:null,datasource:null,catalogs:null,getDataSources:function(){var t=[],n=this.xmla.discoverDataSources();
if(!n)return a.warn("XML/A DISCOVER_DATASOURCES request failed"),void 0;if(n.hasMoreRows()){t=n.fetchAllAsObject(),this.datasource=t[0];
var r=this.datasource[e.PROP_DATASOURCENAME];r&&r.length>0&&(this.datasource[e.PROP_DATASOURCEINFO]=r),n.close()
}},getCatalogs:function(){var t={},n={};if(!this.datasource||!this.datasource[e.PROP_DATASOURCEINFO])return a.warn("XML/A DBSCHEMA_CATALOGS request failed, missing "+e.PROP_DATASOURCEINFO),void 0;
t[e.PROP_DATASOURCEINFO]=this.datasource[e.PROP_DATASOURCEINFO];var r=this.xmla.discoverDBCatalogs({properties:t});
if(!r)return a.warn("XML/A DISCOVER_DATASOURCES request failed"),void 0;if(r.hasMoreRows()){for(this.catalogs=[];n=r.fetchAsObject();)this.catalogs[this.catalogs.length]=n;
r.close()}},discover:function(t){var n={},r=t.query();n[e.PROP_DATASOURCEINFO]=this.datasource[e.PROP_DATASOURCEINFO],t.catalog&&(n[e.PROP_CATALOG]=t.catalog);
var i=this.xmla.discover({properties:n,requestType:r});return i},execute:function(t){for(var n=0,r=u.catalogs.length;r>n;n++)if(u.catalogs[n].CATALOG_NAME==t.catalog){var i={};
i[e.PROP_DATASOURCEINFO]=u.datasource[e.PROP_DATASOURCEINFO],i[e.PROP_CATALOG]=t.catalog,i[e.PROP_FORMAT]=u.PROP_FORMAT||e.PROP_FORMAT_TABULAR;
var a=this.xmla.execute({statement:t.query(),properties:i});return a}throw new Error("Catalog: "+t.catalog+" was not found on Pentaho server.")
}}),u=new s,c={name:"xmla",label:"XML/A Query",queryDefinition:{},defaults:{url:t.getXmla()},init:function(t){this.queryDefinition=o.extend({},this.getOption("params"),t),null==u.xmla&&(u.xmla=new e({async:!1,url:this.getOption("url")})),null==u.datasource&&u.getDataSources(),null==u.catalogs&&u.getCatalogs()
},transformXMLAresults:function(t){var n,r,i,a={resultset:[],metadata:[]};t instanceof e.Rowset?(n=t.fetchAllAsArray(),r=t.getFields()):t instanceof e.Dataset;
for(var o=0,s=r.length;s>o;o++)switch(i=r[o],a.metadata[o]={colIndex:i.index,colName:i.label},i.jsType){case"string":a.metadata[o].colType="string";
break;case"number":a.metadata[o].colType="numeric";break;default:a.metadata[o].colType="string"
}return a.resultset=n,t.close(),a},doQuery:function(e){{var t=(this.getOption("url"),e?e:this.getOption("successCallback"));
this.getOption("errorCallback")}try{var n=u.execute(this.queryDefinition)}catch(r){a.error("unable to execute the XML/A query: "+r+" :")
}t(this.transformXMLAresults(n))}};i.registerGlobalQuery("xmla",c);var d={name:"xmlaDiscover",label:"XML/A Discover Query",queryDefinition:{},defaults:{url:t.getXmla()},init:function(t){this.queryDefinition=o.extend({},this.getOption("params"),t),null==u.xmla&&(u.xmla=new e({async:!1,url:this.getOption("url")})),null==u.datasource&&u.getDataSources()
},transformDiscoverresults:function(e){for(var t,n=e.getFields(),r={resultset:[],metadata:[]},i=0,a=n.length;a>i;i++)switch(t=n[i],r.metadata[i]={colIndex:t.index,colName:t.label},t.jsType){case"string":r.metadata[i].colType="string";
break;case"number":r.metadata[i].colType="numeric";break;default:r.metadata[i].colType="string"
}return r.resultset=e.fetchAllAsArray(),e.close(),r},doQuery:function(e){{var t=(this.getOption("url"),e?e:this.getOption("successCallback"));
this.getOption("errorCallback")}try{var n=u.discover(this.queryDefinition)}catch(r){a.error("unable to execute the XML/A Discover query: "+r+" :")
}t(this.transformDiscoverresults(n))}};i.registerGlobalQuery("xmlaDiscover",d)}),define("cdf/queries/LegacyQuery",["../Logger","../components/XactionComponent.ext","./BaseQuery","../dashboard/Dashboard.query","amd!../lib/underscore","../lib/jquery","../dashboard/Utils"],function(Logger,XactionComponentExt,BaseQuery,Dashboard,_,$,Utils){function makeMetadataElement(e,t,n){return{colIndex:e||0,colType:n||"String",colName:t||"Name"}
}var legacyOpts={name:"legacy",label:"Legacy Query",defaults:{url:XactionComponentExt.getCdfXaction("pentaho-cdf/actions","jtable.xaction"),queryDef:{}},interfaces:{lastResultSet:{reader:function(json){json=eval("("+json+")");
var result={metadata:[makeMetadataElement(0)],resultset:json.values||[]};return _.each(json.metadata,function(e,t){return result.metadata.push(makeMetadataElement(t+1,e))
}),result}}},init:function(e){this.setOption("queryDef",e)},getSuccessHandler:function(e){var t=this;
return function(n){try{t.setOption("lastResultSet",n)}catch(r){if(!this.async)throw r;
var i=t.dashboard.getErrorObj("COMPONENT_ERROR").msg+":"+r.message;Logger.error(i),n={metadata:[i],values:[]}
}var a=$.extend(!0,{},t.getOption("lastResultSet"));e(a)}},buildQueryDefinition:function(e){return _.extend({},this.getOption("queryDef"),e)
}};Dashboard.registerGlobalQuery("legacy",legacyOpts),Dashboard.registerGlobalQuery("mdx",legacyOpts),Dashboard.registerGlobalQuery("sql",legacyOpts)
}),define("cdf/Dashboard",["./dashboard/Dashboard","./dashboard/Dashboard.context","./dashboard/Dashboard.addIns","./dashboard/Dashboard.bookmarkable","./dashboard/Dashboard.components","./dashboard/Dashboard.i18n","./dashboard/Dashboard.legacy","./dashboard/Dashboard.lifecycle","./dashboard/Dashboard.notifications","./dashboard/Dashboard.parameters","./dashboard/Dashboard.storage","./dashboard/Dashboard.dataSources","./dashboard/Dashboard.query","./dashboard/Dashboard.views","./queries/BaseQuery","./queries/CpkQuery","./queries/CdaQuery","./queries/XmlaQuery","./queries/LegacyQuery","./components/BaseComponent","./components/UnmanagedComponent","css!./Dashboard"],function(e){return e
}),define("cdf/Dashboard.Clean",["./Dashboard"],function(e){return e}),define("cdf/dashboard/Query",["amd!../lib/underscore","../lib/jquery"],function(e,t){return function(n,r,i){var a,o;
if(e.isObject(n)?(a=t.extend(!0,{},n),o=e.isString(n.queryType)&&n.queryType||!e.isUndefined(n.query)&&"legacy"||!e.isUndefined(n.path)&&!e.isUndefined(n.dataAccessId)&&"cda"||void 0):e.isString(n)&&e.isString(r)&&(o="cda",a={path:n,dataAccessId:r}),!o)throw"InvalidQuery";
return i.getQuery(o,a)}});