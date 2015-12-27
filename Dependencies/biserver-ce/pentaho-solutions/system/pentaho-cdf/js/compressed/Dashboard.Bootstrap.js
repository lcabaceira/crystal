define("cdf/dashboard/RefreshEngine",[],function(){return function(t){var e=0,n=new Array,r=null,i=e,a=null,o=function(){return{nextRefresh:0,component:null}
},s=function(n){null!=a&&(clearInterval(a),a=null),i=n>0?n:e,i!=e&&(a=setInterval(t.refreshEngine.fireGlobalRefresh,1e3*i))
},u=function(t){for(var e=0;e<n.length;e++)n[e].component==t&&(n.splice(e,1),e--)
},c=function(){n.length>0&&n.splice(0,n.length)},d=function(t,e){for(var n,r=t.length-1,i=0;r>=i;)if(n=parseInt((i+r)/2),t[n].nextRefresh>e.nextRefresh)r=n-1;
else{if(!(t[n].nextRefresh<e.nextRefresh))return n;i=n+1}return i},l=function(t,e){var n=d(t,e);
t.splice(n,0,e)},h=function(){null!=r&&(clearTimeout(r),r=null)},f=function(){h(),t.refreshEngine.fireRefresh()
},p=function(){return(new Date).getTime()},g=function(t){return n.length>0&&n[0].component==t
},m=function(e){t.update(e)},y=function(t){var r=p();if(t.refreshPeriod>0||(t.refreshPeriod=e),t.refreshPeriod!=e){var i=new o;
i.nextRefresh=r+1e3*t.refreshPeriod,i.component=t,l(n,i)}};return{registerComponent:function(t,n){if(!t)return!1;
t.refreshPeriod=n>0?n:e;var r=g(t);return u(t),r&&f(),!0},getRefreshPeriod:function(t){return t&&t.refreshPeriod>0?t.refreshPeriod:e
},processComponent:function(t){return u(t),y(t),g(t)&&f(),!0},processComponents:function(){c();
for(var e=0;e<t.components.length;e++)y(t.components[e]);return f(),!0},fireRefresh:function(){r=null;
for(var t=p();n.length>0&&n[0].nextRefresh<=t;){var e=n.shift();m(e.component)}n.length>0&&(r=setTimeout(this.fireRefresh,n[0].nextRefresh-t))
},fireGlobalRefresh:function(){for(var e=0;e<t.components.length;e++){var n=t.components[e];
n.refreshPeriod>0||"select"==n.type||m(n)}},setGlobalRefresh:function(t){s(t)},getQueue:function(){return n
}}}}),define("cdf/dashboard/Dashboard",["../lib/Base","../Logger","./RefreshEngine","amd!../lib/underscore","amd!../lib/backbone","../lib/jquery","module","amd!../lib/jquery.impromptu","../lib/shims","css!../lib/cdf.css"],function(t,e,n,r,i,a,o){var s=t.extend({constructor:function(t){function o(t,n){"function"==typeof t?(e.info("Calling init method of module: "+n),t.apply(u)):e.warn("Not calling init method of module: "+n)
}function s(){var t=this;"function"==typeof a?(a.ajaxSetup({async:!1,traditional:!0,scriptCharset:"utf-8",contentType:"application/x-www-form-urlencoded;charset=UTF-8",dataFilter:function(e){return t.lastServerResponse=Date.now?Date.now():(new Date).getTime(),e
}}),a.prompt&&"function"==typeof a.prompt.setDefaults?a.prompt.setDefaults({prefix:"jqi",show:"slideDown"}):e.log("$.prompt plugin not loaded!!"),"function"==typeof a.blockUI?(a.blockUI.defaults.fadeIn=0,a.blockUI.defaults.message='<div class="blockUIDefaultImg"></div>',a.blockUI.defaults.css.left="50%",a.blockUI.defaults.css.top="40%",a.blockUI.defaults.css.marginLeft="-16px",a.blockUI.defaults.css.width="32px",a.blockUI.defaults.css.background="none",a.blockUI.defaults.overlayCSS={backgroundColor:"#FFFFFF",opacity:.8,cursor:"wait"},a.blockUI.defaults.css.border="none"):e.log("$.blockUI plugin not loaded!!")):e.log("jQuery plugin not loaded!!")
}var u=this;t&&(t.context&&(this.context=t.context),t.storage&&(this.context&&"anonymousUser"===this.context.user||(this.storage=t.storage)),t.view&&(this.view=t.view)),r.extend(this,i.Events),s(),"undefined"!=typeof CONTEXT_PATH&&(this.webAppPath=CONTEXT_PATH),void 0===this.webAppPath&&(this.webAppPath="/"+window.location.pathname.split("/")[1]),this.webAppPath.endsWith("/")&&(this.webAppPath=this.webAppPath.substr(0,this.webAppPath.length-1)),o(this._initContext,"Context"),o(this._initStorage,"Storage"),o(this._initViews,"Views"),o(this._initParameters,"Parameters"),o(this._initBookmarkables,"Bookmarkables"),o(this._initI18n,"I18n"),o(this._initComponents,"Components"),o(this._initLifecycle,"Lifecycle"),o(this._initNotifications,"Notifications"),o(this._initDataSources,"DataSources"),o(this._initQuery,"Query"),o(this._initAddIns,"AddIns"),this.refreshEngine=new n(this)
},globalContext:!1,contextObj:o.config().context||{},storageObj:o.config().storage||{},viewObj:o.config().view,legacyPriority:-1e3,logLifecycle:!0,args:[],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],registerEvent:function(t,e){"undefined"==typeof this.events&&(this.events={}),this.events[t]=e
},debug:1,syncDebugLevel:function(){var t=1;try{var e=function(t){return t&&/\bdebug=true\b/.test(t)?t:null
},n=e(window.location.href)||e(window.top.location.href);if(n){var r=/\bdebugLevel=(\d+)/.exec(n);
t=r?+r[1]:3}}catch(i){}return this.debug=t},setGlobalContext:function(t){this.globalContext=t
},getWebAppPath:function(){return this.webAppPath},getWcdfSettings:function(){return e.info("getWcdfSettings was not overriden, returning empty object"),{}
}});return s}),define("cdf/dashboard/Dashboard.context",["../lib/jquery","./Dashboard","./Dashboard.ext","./Dashboard.context.ext"],function(t,e){e.implement({_initContext:function(){this.context||(this.context={},t.extend(this.context,this.contextObj))
}})}),define("cdf/dashboard/Container",[],function(){function t(t,e,r){var i;r||(r="instance"),this.build=function(n,a){if(i&&!a)return i;
var o=e(t,n);return a||"singleton"!==r||(i=o),o},this.dispose=function(){i&&(n(i),i=null)
}}function e(t,e,r){r||(r="external"),this.build=function(){return e},this.dispose=function(){e&&("singleton"===r&&n(e),e=null)
}}function n(t){"function"==typeof t.dispose&&t.dispose()}function r(t){for(var e in t)if(i.call(t,e))return!1;
return!0}var i=Object.prototype.hasOwnProperty;return function(){function n(t,e){if(!t)throw new Error("Argument 'type' is required.");
if("string"!=typeof t)throw new Error("Argument 'type' must be a string.");var n=s[t];
if(!e&&(!n||r(n)))throw new Error("There are no registrations for type '"+t+"'.");
return n}function i(t,e,r){var i,a=n(t,r);if(a&&(i=a[e||""],!i&&!r))throw new Error("There is no registration for type '"+t+"'"+(e?" and name '"+e+"'":"")+".");
return i}function a(t,e,n,r,a){"string"!=typeof e&&(n=e,e="");var o=i(t,e,a);return n?r=!0:r||(n={}),o?o.build(n,r):null
}function o(t,e){var r=n(t,e),i=[];for(var a in r)i.push(r[a].build({},!1));return i
}this.register=function(n,r,i,a){if(!n)throw new Error("Argument 'type' is required.");
if("string"!=typeof n)throw new Error("Argument 'type' must be a string.");if(null!=r&&("string"!=typeof r?(a=i,i=r,r=null):r||(r=null)),!i)throw new Error("Argument 'what' is required.");
var o;switch(typeof i){case"function":o=new t(this,i,a);break;case"object":o=new e(this,i,a);
break;default:throw new Error("Argument 'what' is of an invalid type.")}r||(r="");
var u=s[n]||(s[n]={}),c=u[r];c&&c.dispose(),u[r]=o},this.has=function(t,e){return!!i(t,e,!0)
},this.canNew=function(e,n){return i(e,n,!1)instanceof t},this.get=function(t,e){return a(t,e,null,!1,!1)
},this.tryGet=function(t,e){return a(t,e,null,!1,!0)},this.getNew=function(t,e,n){return a(t,e,n,!0,!1)
},this.tryGetNew=function(t,e,n){return a(t,e,n,!0,!0)},this.getAll=function(t){return o(t,!1)
},this.tryGetAll=function(t){return o(t,!0)},this.listType=function(t){return n(t,!1)
},this.tryListType=function(t){return n(t,!0)},this.dispose=function(){if(s){for(var t in s){var e=s[t];
for(var n in e)e[n].dispose()}s=null}};var s={}}}),define("cdf/dashboard/Dashboard.addIns",["./Dashboard","./Container","./Utils"],function(t,e,n){function r(t,e){return-1!==t.indexOf("Component",t.length-"Component".length)&&(t=t.substring(0,t.length-"Component".length)),t=t.charAt(0).toUpperCase()+t.substring(1),e&&(t+="."+e),t
}var i=new e;t.registerGlobalAddIn=function(t,e,n){var t=r(t,e),a=n.getName?n.getName():null;
i.register(t,a,n)},t.implement({_initAddIns:function(){this.addIns=n.clone(i)},registerGlobalAddIn:function(e,n,r){t.registerGlobalAddIn(e,n,r)
},registerAddIn:function(t,e,n){var t=r(t,e),i=n.getName?n.getName():null;this.addIns.register(t,i,n)
},hasAddIn:function(t,e,n){var t=r(t,e);return Boolean(this.addIns&&this.addIns.has(t,n))
},getAddIn:function(t,e,n){var t=r(t,e);try{var i=this.addIns.get(t,n);return i}catch(a){return null
}},setAddInDefaults:function(t,e,n,r){var i=this.getAddIn(t,e,n);i&&i.setDefaults(r)
},listAddIns:function(t,e){var t=r(t,e);try{return this.addIns.listType(t)}catch(n){return[]
}}})}),define("cdf/dashboard/Dashboard.bookmarkable",["./Dashboard","../Logger","./Utils"],function(t,e,n){t.implement({_initBookmarkables:function(){this.bookmarkables={}
},getHashValue:function(t){var e,n=window.location.hash;try{e=JSON.parse(n.slice(1))
}catch(r){e={}}return 0===arguments.length?e:e[t]},setHashValue:function(t,e){var n,r=this.getHashValue();
1==arguments.length?r=t:r[t]=e,n=JSON.stringify(r),"{}"!=n?window.location.hash=n:window.location.hash&&(window.location.hash="")
},deleteHashValue:function(t){var e=this.getHashValue();0===arguments.length?window.location.hash="":(delete e[t],this.setHashValue(e))
},setBookmarkable:function(t,e){1===arguments.length&&(e=!0),this.bookmarkables[t]=e
},isBookmarkable:function(t){return Boolean(this.bookmarkables[t])},generateBookmarkState:function(){var t={},e=this.bookmarkables;
for(var n in e)e.hasOwnProperty(n)&&e[n]&&(t[n]=this.getParameterValue(n));return t
},persistBookmarkables:function(t){var e=this.bookmarkables,n={};e[t]&&this.finishedInit&&(n=this.generateBookmarkState(),this.setBookmarkState({impl:"client",params:n}))
},setBookmarkState:function(t){if(window.history&&window.history.replaceState){var e,r=window.location.pathname.split("/").pop(),i=window.location.search.slice(1).split("&").map(function(t){var e=t.split("=");
return e[1]=decodeURIComponent(e[1]),e});i=n.propertiesArrayToObject(i),i.bookmarkState=JSON.stringify(t),e=r+"?"+$.param(i),window.history.replaceState({},"",e),this.deleteHashValue("bookmark")
}else this.setHashValue("bookmark",t)},getBookmarkState:function(){if(window.location.hash.length>1)try{return this.getHashValue("bookmark")||{}
}catch(t){}var e=window.location.search.slice(1).split("&").map(function(t){var e=t.split("=");
return e[1]=decodeURIComponent(e[1]),e}),r=n.propertiesArrayToObject(e);return r.bookmarkState?JSON.parse(decodeURIComponent(r.bookmarkState.replace(/\+/g," ")))||{}:{}
},restoreBookmarkables:function(){var t;try{t=this.getBookmarkState().params;for(var n in t)t.hasOwnProperty(n)&&this.setParameter(n,t[n])
}catch(r){e.log(r,"error")}}})}),define("cdf/dashboard/Dashboard.components",["./Dashboard","amd!../lib/backbone","../lib/mustache","../Logger","../lib/jquery"],function(t,e,n,r,i){t.implement({_initComponents:function(){this.components=[]
},getComponent:function(t){if(t)for(var e in this.components)if(this.components[e].name==t)return this.components[e]
},getComp:function(t){return this.getComponent(t)},getComponentByName:function(t){return this.getComponent(t)
},addComponents:function(t){return i.isArray(t)?(t.forEach(function(t){this.addComponent(t)
},this),void 0):(r.warn("addComponents: components in a structure other than an array will not be added!"),void 0)
},addComponent:function(t,e){this.removeComponent(t),this._bindControl(t);var n=e&&e.index,r=this.components.length;
(null==n||0>n||n>r)&&(n=r),this.components[n]=t},getComponentIndex:function(t){if(null!=t)switch(typeof t){case"string":for(var e=0,n=this.components,r=n.length;r>e;e++)if(n[e].name===t)return e;
break;case"number":if(t>=0&&t<this.components.length)return t;break;default:return this.components.indexOf(t)
}return-1},removeComponent:function(t){var e=this.getComponentIndex(t),n=null;if(e>=0){var r=this.components;
n=r[e],r.splice(e,1),n.dashboard=null,n.off("cdf:postExecution"),n.off("cdf:preExecution"),n.off("cdf:error"),n.off("all")
}return n},_bindControl:function(t){return t.dashboard||(t.dashboard=this,this._addLogLifecycleToControl(t)),t
},_bindExistingControl:function(t){return t.dashboard||(t.dashboard=this,delete t.initInstance,"function"==typeof t.off&&t.off("all"),t.on||i.extend(t,e.Events),this._addLogLifecycleToControl(t),(null==t.priority||""===t.priority)&&(t.priority=this.legacyPriority++)),t
},_castControlToClass:function(t,e){if(!(t instanceof e)){var n=this._makeInstance(e);
i.extend(t,n)}},_getControlClass:function(t){var e=t.type;"function"==typeof e&&(e=e.call(t));
for(var n=e.substring(0,1).toUpperCase()+e.substring(1),r=[n+"Component",e,n],i=0,a=r.length;a>i;i++){var o=window[r[i]];
if(o&&"function"==typeof o)return o}},_makeInstance:function(t,e){var n=Object.create(t.prototype);
return e?t.apply(n,e):t.apply(n),n},_castControlToComponent:function(t,e){if(!(t instanceof BaseComponent||e&&e.prototype instanceof BaseComponent)){var n=BaseComponent.prototype;
for(var r in n)if(n.hasOwnProperty(r)&&void 0===t[r]&&"function"==typeof n[r])switch(r){case"base":break;
default:t[r]=n[r]}}},_addLogLifecycleToControl:function(t){t.on("all",function(t){var e=this.dashboard;
if(e&&e.logLifecycle&&"cdf"!==t&&"PostInitMarker"!==this.name&&"undefined"!=typeof console){var i,a=t.substr(4);
switch(a){case"preExecution":i=">Start";break;case"postExecution":i="<End  ";break;
case"error":i="!Error";break;default:i="      "}var o=n.render("Timing: {{elapsedSinceStartDesc}} since start, {{elapsedSinceStartDesc}} since last event",this.splitTimer());
r.log("          [Lifecycle "+i+"] "+this.name+" ["+this.type+"] (P: "+this.priority+" ): "+a+" "+o+" (Running: "+this.dashboard.runningCalls+")","log","color: "+this.getLogColor())
}})}})}),define("cdf/dashboard/Dashboard.i18n",["../Logger","./Dashboard","./Dashboard.ext","../lib/moment","../lib/CCC/cdo","../lib/cdf.jquery.i18n"],function(t,e,n,r,i,a){e.implement({_initI18n:function(){var e=this;
e.i18nCurrentLanguageCode=void 0,e.i18nSupport={prop:function(e){return t.warn("i18n support wasn't properly initiated. Is the file messages_supported_languages.properties present?"),e
}};var o=function(t){if(t){var e=t.split("-");return e.length>1?e.join("_"):t}},s=o(SESSION_LOCALE);
a.i18n.properties({name:"messages",path:n.getStaticResource("resources/languages/"),mode:"map",language:s,callback:function(){a.i18n.properties({name:"messages",mode:"map",type:"GET",language:s,callback:function(){e.setI18nSupport(s,a.i18n)
}})}});var u=i.format.language(s);i.format.language(u),r.locale(s)},setI18nSupport:function(t,e){this.i18nCurrentLanguageCode=t,a.extend(this.i18nSupport,e)
}})}),define("cdf/dashboard/Dashboard.legacy",["../queries/CdaQuery.ext","../components/XactionComponent.ext","./Dashboard.ext","./Dashboard","../Logger","../lib/jquery"],function(t,e,n,r,i,a){r.implement({callPentahoAction:function(t,e,n,r,i,a){var o=this;
return"function"==typeof a?o.pentahoAction(e,n,r,i,function(e){a(o.parseXActionResult(t,e))
}):o.parseXActionResult(t,o.pentahoAction(e,n,r,i,a))},urlAction:function(t,e,n){return this.executeAjax("xml",t,e,n)
},executeAjax:function(t,e,n,r){if("function"==typeof r)return a.ajax({url:e,type:"POST",traditional:!0,dataType:t,async:!0,data:n,complete:function(t){"undefined"==typeof t.responseXML?r(a.parseXML(t.responseText)):r(t.responseXML)
},error:function(t,e,n){i.error("Found error: "+t+" - "+e+", Error: "+n)}});var o=a.ajax({url:e,type:"POST",dataType:t,async:!1,data:n,error:function(t,e,n){i.error("Found error: "+t+" - "+e+", Error: "+n)
}});return"xml"==t?"undefined"==typeof o.responseXML?a.parseXML(o.responseText):o.responseXML:o.responseText
},pentahoAction:function(t,e,n,r,i){return this.pentahoServiceAction("ServiceAction","xml",t,e,n,r,i)
},pentahoServiceAction:function(t,e,r,i,o,s,u){var c=n.getServiceAction(t,r,i,o),d=c.url;
return delete c.url,a.each(s,function(t,e){c[e[0]]=e[1]}),this.executeAjax(e,d,c,u)
},CDF_ERROR_DIV:"cdfErrorDiv",createAndCleanErrorDiv:function(){0==a("#"+this.CDF_ERROR_DIV).length&&a("body").append("<div id='"+this.CDF_ERROR_DIV+"'></div>"),a("#"+this.CDF_ERROR_DIV).empty()
},showErrorTooltip:function(){a(function(){a.tooltip&&a(".cdf_error").tooltip({delay:0,track:!0,fade:250,showBody:" -- "})
})},parseXActionResult:function(t,e){var n=a(e),r=n.find("SOAP-ENV\\:Fault");if(0==r.length)return n;
var i="Error executing component "+t.name,o=new Array;o[0]=" Error details for component execution "+t.name+" -- ",o[1]=r.find("SOAP-ENV\\:faultstring").find("SOAP-ENV\\:Text:eq(0)").text(),r.find("SOAP-ENV\\:Detail").find("message").each(function(){o.push(a(this).text())
}),o.length>8&&(o=o.slice(0,7),o.push("..."));var s="<table class='errorMessageTable' border='0'><tr><td class='errorIcon'></td><td><span class='cdf_error' title=\""+o.join("<br/>").replace(/"/g,"'")+'" >'+i+" </span></td></tr></table/>";
return 0==t.visible?a("#"+this.CDF_ERROR_DIV).append("<br />"+s):a("#"+t.htmlObject).html(s),null
},setSettingsValue:function(t,e){var r={method:"set",key:t,value:JSON.stringify(e)};
a.post(n.getSettings("set",null),r,function(){})},getSettingsValue:function(t,e){a.ajax({type:"GET",dataType:"json",url:n.getSettings("get",t),data:args,async:!0,xhrFields:{withCredentials:!0}}).done("function"==typeof e?e:function(t){e=t
})},fetchData:function(n,r,o){if(i.warn("Dashboard fetchData() is deprecated. Use Query objects instead"),void 0!=n&&void 0!=n.dataAccessId){for(var s in r)n["param"+r[s][0]]=this.getParameterValue(r[s][1]);
a.post(t.getDoQuery(),n,function(t){o(t)},"json").error(this.handleServerError)}else if(void 0!=n){var u="cda"==n.queryType?"jtable-cda.xaction":"jtable.xaction";
a.post(e.getCdfXaction("pentaho-cdf/actions",u),n,function(t){o(t.values)},"json")
}else o([])}})}),define("cdf/dashboard/Dashboard.lifecycle",["./Dashboard","../Logger","amd!../lib/underscore","../components/UnmanagedComponent","../lib/jquery"],function(t,e,n,r,i){t.implement({_initLifecycle:function(){this.initCounter=0,this.runningCalls=0,this.lastServerResponse=Date.now?Date.now():(new Date).getTime(),this.serverCheckResponseTimeout=1/0
},resetRunningCalls:function(){this.runningCalls=0,setTimeout(n.bind(function(){this.hideProgressIndicator()
},this),10)},getRunningCalls:function(){return this.runningCalls},incrementRunningCalls:function(){this.runningCalls++,this.showProgressIndicator(),e.log("+Running calls incremented to: "+this.getRunningCalls())
},decrementRunningCalls:function(){this.runningCalls--,e.log("-Running calls decremented to: "+this.getRunningCalls()),setTimeout(n.bind(function(){this.runningCalls<=0&&(this.hideProgressIndicator(),this.runningCalls=0)
},this),10)},init:function(t){var r=this,a=r.initCounter++;e.log("InitInstance "+a),0==a&&(r.syncDebugLevel(),r.initialStorage?n.extend(r.storage,r.initialStorage):r.loadStorage(),null!=r.context&&null!=r.context.sessionTimeout&&(r.serverCheckResponseTimeout=900*r.context.sessionTimeout),r.restoreBookmarkables(),r.restoreView(),r.syncParametersInit()),n.isArray(t)&&r.addComponents(t),n.chain(r.components).where({initInstance:void 0}).each(function(t){t.initInstance=a
}),i(function(){r._initEngine(a)})},_initEngine:function(t){var a=this;a.waitingForInit&&a.waitingForInit.length&&e.log("Overlapping initEngine!","warn");
var o=null!=t?n.where(a.components,{initInstance:t}):a.components;a.waitingForInit&&0!==a.waitingForInit.length||a.finishedInit||a.incrementRunningCalls(),e.log("          [Lifecycle >Start] Init["+t+"] (Running: "+a.getRunningCalls()+")","log","color: #ddd"),a.createAndCleanErrorDiv(),"function"==typeof a.preInit&&a.preInit(),a.trigger("cdf cdf:preInit",a),i(window).trigger("cdfAboutToLoad");
var s,a=a,u=[];for(s=0;s<o.length;s++)o[s].executeAtStart&&u.push(o[s]);if(!u.length)return a._handlePostInit(),void 0;
var c=new r({name:"PostInitMarker",type:"unmanaged",lifecycle:{silent:!0},executeAtStart:!0,priority:999999999});
a.addComponent(c),u.push(c),a.waitingForInit=u.slice();for(var d=function(e,r){2==arguments.length&&r||(a.waitingForInit=n(a.waitingForInit).without(e),e.off("cdf:postExecution",d),e.off("cdf:preExecution",d),e.off("cdf:error",d),a._handlePostInit(t))
},s=0,l=u.length;l>s;s++){var h=u[s];h.on("cdf:postExecution cdf:preExecution cdf:error",d,a)
}a.updateAll(u),o.length>0&&a._handlePostInit(t)},_handlePostInit:function(t){var r=this,a=function(){var t=n.filter(r.components,function(t){return"duplicate"==t.type
}),e={},a=r.getBookmarkState().params||{};n.map(n.filter(Object.keys(a),function(t){return/(_[0-9]+)+$/.test(t)
}),function(t){var n=t.match(/(.*?)((_[0-9]+)+)$/),r=n[1],i=n[2];return e[i]||(e[i]={}),e[i][r]=a[t],t
});for(var o in e)if(e.hasOwnProperty(o)){var a=e[o];i.each(t,function(t,e){var n;
for(n=0;n<e.parameters.length;n++)if(!a.hasOwnProperty(e.parameters[n])&&r.isBookmarkable(e.parameters[n]))return;
e.duplicate(a)})}};r.waitingForInit&&0!==r.waitingForInit.length||r.finishedInit||(r.trigger("cdf cdf:postInit",r),i(window).trigger("cdfLoaded"),"function"==typeof r.postInit&&r.postInit(),a(),r.finishedInit=!0,r.decrementRunningCalls(),e.log("          [Lifecycle <End  ] Init["+t+"] (Running: "+r.getRunningCalls()+")","log","color: #ddd"))
},updateLifecycle:function(t){var r=t.lifecycle?!!t.lifecycle.silent:!1;if(!t.disabled){r||this.incrementRunningCalls();
var a=n.bind(function(){try{var n;if("undefined"!=typeof t.preExecution&&(n=t.preExecution.apply(t)),n="undefined"!=typeof n?!!n:!0,t.trigger("cdf cdf:preExecution",t,n),!n)return;
void 0!=t.tooltip&&(t._tooltip="function"==typeof t.tooltip?t.tooltip():t.tooltip),void 0!=t.update&&"function"==typeof t.update&&(t.update(),this.refreshEngine.processComponent(t)),"undefined"!=typeof t.postExecution&&t.postExecution.apply(t),void 0!=t._tooltip&&i("#"+t.htmlObject).attr("title",t._tooltip).tooltip({delay:0,track:!0,fade:250})
}catch(a){var o=t.htmlObject?i("#"+t.htmlObject):void 0,s=this.getErrorObj("COMPONENT_ERROR").msg+" ("+t.name.replace("render_","")+")";
this.errorNotification({msg:s},o),e.error("Error updating "+t.name+":"),e.exception(a)
}finally{r||this.decrementRunningCalls()}t.trigger("cdf cdf:postExecution",t)},this);
setTimeout(a,1)}},updateAll:function(t){var e=function(t,e){if(e)for(var r in e)e.hasOwnProperty(r)&&(t[r]=n.isArray(t[r])?n.union(t[r],e[r]):e[r])
};if(this.updating||(this.updating={tiers:{},current:null}),t&&n.isArray(t)&&!n.isArray(t[0])){var r={};
n.each(t,function(t){if(t){var e=t.priority||0;r[e]||(r[e]=[]),r[e].push(t)}}),t=r
}e(this.updating.tiers,t);var i=this.updating.current,a=!1;if(null===i||0==i.components.length||(a=this.othersAwaitExecution(n.clone(this.updating.tiers),this.updating.current))){var o=this.getFirstTier(this.updating.tiers);
if(!o)return;if(a){var s=this.updating.tiers;s[i.priority]=n.difference(s[i.priority],i.components),o.components=n.union(s[i.priority],this.getFirstTier(s).components)
}this.updating.current=o;for(var u=function(t,e){if(2!=arguments.length||"boolean"!=typeof e||!e){t.off("cdf:postExecution",u),t.off("cdf:preExecution",u),t.off("cdf:error",u);
var r=this.updating.current;r.components=n.without(r.components,t);var i=this.updating.tiers;
i[r.priority]=n.without(i[r.priority],t),this.updateAll()}},r=this.updating.current.components.slice(),c=0;c<r.length;c++){var d=r[c];
d.startTimer(),d.on("cdf:postExecution cdf:preExecution cdf:error",u,this),this.updateComponent(d)
}}},update:function(t){this.updateQueue||(this.updateQueue=[]),this.updateQueue.push(t),this.updateTimeout&&clearTimeout(this.updateTimeout);
var e=n.bind(function(){this.updateAll(this.updateQueue),delete this.updateQueue},this);
this.updateTimeout=setTimeout(e,5)},updateComponent:function(t){if((Date.now?Date.now():(new Date).getTime())-this.lastServerResponse>this.serverCheckResponseTimeout&&!this.checkServer())throw this.hideProgressIndicator(),this.loginAlert(),"not logged in";
t.isManaged===!1&&t.update?(t.update(),this.refreshEngine.processComponent(t)):this.updateLifecycle(t)
},getFirstTier:function(t){for(var e,r=n.keys(t).sort(function(t,e){return parseInt(t,10)-parseInt(e,10)
}),i=0;i<r.length;i++)if(e=t[r[i]],e.length>0)return{priority:r[i],components:e.slice()};
return null},resetAll:function(){this.createAndCleanErrorDiv();for(var t=(this.components.length,0),e=this.components.length;e>t;t++)this.components[t].clear();
for(var t=(this.components.length,0),e=this.components.length;e>t;t++)this.components[t].executeAtStart&&this.update(this.components[t])
},processChange:function(t){var e,n=this.getComponentByName(t),r=n.parameter;if("function"==typeof n.getValue&&(e=n.getValue()),null!=e){if("undefined"!=typeof n.preChange){var i=n.preChange(e);
e=void 0!=i?i:e}r&&this.fireChange(r,e),"undefined"!=typeof n.postChange&&n.postChange(e)
}},fireChange:function(t,e){var r=this;r.createAndCleanErrorDiv(),r.setParameter(t,e,!0),r.trigger("cdf "+t+":fireChange",{parameter:t,value:e});
for(var i=[],a=0,o=r.components.length;o>a;a++)if(n.isArray(r.components[a].listeners))for(var s=0;s<r.components[a].listeners.length;s++){var u=r.components[a];
if(u.listeners[s]==t&&!u.disabled){i.push(u);break}}r.updateAll(i)},othersAwaitExecution:function(t,e){if(!t||!e||!e.components)return!1;
t[e.priority]=n.difference(t[e.priority],e.components);var r=this.getFirstTier(t);
return r&&r.components&&0!=r.components.length?parseInt(r.priority)>parseInt(e.priority)?!1:!0:!1
}})}),define("cdf/dashboard/Popups",["../lib/mustache","amd!../lib/underscore","../lib/jquery","amd!../lib/jquery.blockUI"],function(t,e,n){var r={};
return r.okPopup={template:"<div class='cdfPopup'>  <div class='cdfPopupHeader'>{{{header}}}</div>  <div class='cdfPopupBody'>    <div class='cdfPopupDesc'>{{{desc}}}</div>    <div class='cdfPopupButton'>{{{button}}}</div>  </div></div>",defaults:{header:"Title",desc:"Description Text",button:"Button Text",callback:function(){return!0
}},$el:void 0,show:function(t){(t||this.firstRender)&&this.render(t),this.$el.show()
},hide:function(){this.$el.hide()},render:function(r){var i=e.extend({},this.defaults,r),a=this;
this.firstRender&&(this.$el=n("<div/>").addClass("cdfPopupContainer").hide().appendTo("body"),this.firstRender=!1),this.$el.empty().html(t.render(this.template,i)),this.$el.find(".cdfPopupButton").click(function(){i.callback(),a.hide()
})},firstRender:!0},r.notificationsComponent={template:"<div class='cdfNotification component {{#isSmallComponent}}small{{/isSmallComponent}}'>  <div class='cdfNotificationBody'>    <div class='cdfNotificationImg'>&nbsp;</div>    <div class='cdfNotificationTitle' title='{{title}}'>{{{title}}}</div>    <div class='cdfNotificationDesc' title='{{desc}}'>{{{desc}}}</div>  </div></div>",defaults:{title:"Component Error",desc:"Error processing component."},render:function(r,i){var a=e.extend({},this.defaults,i);
a.isSmallComponent=n(r).width()<300,n(r).empty().html(t.render(this.template,a));
var o=n(r).find(".cdfNotification");o.css({"line-height":o.height()+"px"})}},r.notificationsGrowl={template:"<div class='cdfNotification growl'>  <div class='cdfNotificationBody'>    <h1 class='cdfNotificationTitle' title='{{title}}'>{{{title}}}</h1>    <h2 class='cdfNotificationDesc' title='{{desc}}'>{{{desc}}}</h2>  </div></div>",defaults:{title:"Title",desc:"Default CDF notification.",timeout:4e3,onUnblock:function(){return!0
},css:n.extend({},n.blockUI.defaults.growlCSS,{position:"absolute",width:"100%",top:"10px"}),showOverlay:!1,fadeIn:700,fadeOut:1e3,centerY:!1},render:function(r){var i=e.extend({},this.defaults,r),a=n(t.render(this.template,i)),o=this;
i.message=a;var s=i.onUnblock;i.onUnblock=function(){o.$el.hide(),s.call(this)},this.firstRender&&(this.$el=n("<div/>").addClass("cdfNotificationContainer").hide().appendTo("body"),this.firstRender=!1),this.$el.show().block(i)
},firstRender:!0},r}),define("cdf/dashboard/Dashboard.notifications",["./Dashboard","./Dashboard.notifications.ext","./Popups","../Logger","amd!../lib/underscore","../lib/jquery","amd!../lib/jquery.blockUI"],function(t,e,n,r,i,a){t.implement({_initNotifications:function(){this.ERROR_CODES={QUERY_TIMEOUT:{msg:"Query timeout reached"},COMPONENT_ERROR:{msg:"Error processing component"}}
},blockUIwithDrag:function(){"undefined"!=typeof this.i18nSupport&&null!=this.i18nSupport&&(a.blockUI.defaults.message='<div class="img blockUIDefaultImg" style="padding: 0px;"></div>'),a.blockUI();
var t=a('<div id="blockUIDragHandle"></div>');a("div.blockUI.blockMsg").prepend(t),a("div.blockUI.blockMsg").draggable({handle:"#blockUIDragHandle"})
},showProgressIndicator:function(){a.blockUI&&this.blockUIwithDrag()},hideProgressIndicator:function(t){t&&this.resetRunningCalls(),a.unblockUI&&a.unblockUI(),this.showErrorTooltip()
},getErrorObj:function(t){return this.ERROR_CODES[t]||{}},parseServerError:function(t,e,n){var r=[{match:/Query timeout/,msg:this.getErrorObj("QUERY_TIMEOUT").msg}],o={msg:this.getErrorObj("COMPONENT_ERROR").msg,error:n,errorStatus:e},s=a("<div/>").html(t.responseText).find("h1").text();
return i.find(r,function(t){return s.match(t.match)?(o.msg=t.msg,!0):!1}),o},handleServerError:function(){this.errorNotification(this.parseServerError.apply(this,arguments)),this.trigger("cdf cdf:serverError",this),this.resetRunningCalls()
},errorNotification:function(t,e){e?n.notificationsComponent.render(a(e),{title:t.msg,desc:""}):n.notificationsGrowl.render({title:t.msg,desc:""})
},loginAlert:function(t){var e={header:"Warning",desc:"You are no longer logged in or the connection to the server timed out",button:"Click to reload this page",callback:function(){window.location.reload(!0)
}};e=i.extend({},e,t),n.okPopup.show(e),this.trigger("cdf cdf:loginError",this)},checkServer:function(){a.ajax({type:"POST",async:!1,dataType:"json",url:e.getPing(),success:function(t){return t&&"ok"==t.ping
},error:function(){return!1}})}})}),define("cdf/dashboard/Dashboard.parameters",["./Dashboard","../Logger","amd!../lib/backbone","./Utf8Encoder"],function(t,e,n,r){t.implement({LEGACY_STORAGE:"Dashboards.storage.",STORAGE:"storage.",_initParameters:function(){this.parameters=[],this.parameterModel=new n.Model,this.chains=[],this.syncedParameters={},this.escapeParameterValues=!1
},_isParameterInModel:function(t,e){return void 0!==this._getValueFromContext(t,e)
},_getValueFromContext:function(t,e){if(t){if(this.flatParameters)return t[e];if(null!=e){var n,r;
if(e instanceof Array)n=e;else{if(e.indexOf(".")<0)return t[e];n=e.split(".")}r=n.length;
for(var i=0;r>i;i++){if(!t)return;var a=n[i],o=t[a];if(void 0===o)return;t=o}}return t
}},_setValueInContext:function(t,e,n){if(t&&null!=e&&void 0!==n){if(this.flatParameters)t[e]=n;
else{var r,i;if(e instanceof Array)r=e,i=r.pop();else{if(e.indexOf(".")<0)return t[e]=n,t;
r=e.split("."),i=r.pop()}t=this._getValueFromContext(t,r),t&&(t[i]=n)}return t}},_getParameterStore:function(t){var n;
return 0==t.indexOf(this.LEGACY_STORAGE)?(e.warn("Legacy storage access for "+t+". Please use storage instead"),t=t.substr(this.LEGACY_STORAGE.length),n=this.storage):0==t.indexOf(this.STORAGE)?(t=t.substr(this.STORAGE.length),n=this.storage):n=this.parameters,{store:n,name:t}
},addParameter:function(t,n){if(void 0==t||"undefined"==t)return e.warn("Dashboard addParameter: trying to add undefined!!"),void 0;
var r=this._getParameterStore(t);return this._isParameterInModel(r.store,r.name)&&(n=this.getParameterValue(r.name)),this.setParameter(t,n),n
},getParameterValue:function(t){if(void 0==t||"undefined"==t)return e.warn("Dashboard.getParameterValue: trying to get undefined!!"),void 0;
var n=this._getParameterStore(t);return this._getValueFromContext(n.store,n.name)
},getParam:function(t){return this.getParameterValue(t)},setParameter:function(t,n,i){if(void 0==t||"undefined"==t)return e.warn("Dashboard.setParameter: trying to set undefined!!"),void 0;
var a=this._getParameterStore(t);this.escapeParameterValues?this._setValueInContext(a.store,a.name,r.encode_prepare_arr(n)):this._setValueInContext(a.store,a.name,n),void 0!==this._setValueInContext(a.store,a.name,n)&&(this.parameterModel.set(a.name,n,{notify:i}),this.persistBookmarkables(a.name))
},setParam:function(t,e,n){this.setParameter(t,e,n)},syncParameters:function(t,e){this.setParameter(e,this.getParameterValue(t)),this.parameterModel.on("change:"+t,function(t,n,r){this[r.notify?"fireChange":"setParameter"](e,n)
},this),this.parameterModel.on("change:"+e,function(e,n,r){this[r.notify?"fireChange":"setParameter"](t,n)
},this)},syncParametersOnInit:function(t,e){var n,r,i,a,o=this.syncedParameters;o[t]||(o[t]=[]),o[t].push(e);
for(var s=0;s<this.chains.length;s++)n=this.chains[s],n.indexOf(t)>-1&&(r=n),n.indexOf(e)>-1&&(i=n,a=s);
if(i&&r){if(r!=i){var u=i.slice();u.unshift(0),u.unshift(r.length),[].splice.apply(r,u),this.chains.splice(a,1)
}}else i?i.unshift(t):r?r.push(e):this.chains.push([t,e])},syncParametersInit:function(){var t,e,n,r,i,a=this.syncedParameters;
for(n=0;n<this.chains.length;n++)for(r=0;r<this.chains[n].length;r++)if(t=this.chains[n][r],a[t])for(i=0;i<a[t].length;i++)e=a[t][i],this.syncParameters(t,e)
}})}),define("cdf/dashboard/Dashboard.storage",["./Dashboard","../Logger","../lib/jquery","./Dashboard.storage.ext"],function(t,e,n,r){t.implement({_initStorage:function(){this.storage||(this.storage={},n.extend(this.storage,this.storageObj)),this.initialStorage=this.storage
},loadStorage:function(){var t=this;if(!this.context||"anonymousUser"!==this.context.user){var e={user:this.context.user,action:"read",ts:Date.now?Date.now():(new Date).getTime()};
n.ajax({type:"GET",dataType:"json",url:r.getStorage(e.action),data:e,async:!0,xhrFields:{withCredentials:!0},success:function(e){n.extend(t.storage,e)
}})}},saveStorage:function(){if(!this.context||"anonymousUser"!==this.context.user){var t={user:this.context.user,action:"store",storageValue:JSON.stringify(this.storage),ts:Date.now?Date.now():(new Date).getTime()};
n.ajax({type:"GET",dataType:"json",url:r.getStorage(t.action),data:t,async:!0,xhrFields:{withCredentials:!0}}).done(function(t){1!=t.result&&e.log("Error saving storage","error")
})}},cleanStorage:function(){if(this.storage={},!this.context||"anonymousUser"!==this.context.user){var t={user:this.context.user,action:"delete"};
n.ajax({type:"GET",dataType:"json",url:r.getStorage(t.action),data:t,async:!0,xhrFields:{withCredentials:!0}}).done(function(t){1!=t.result&&e.log("Error deleting storage","error")
})}}})}),define("cdf/dashboard/Dashboard.dataSources",["./Dashboard","../Logger","amd!../lib/underscore"],function(t,e,n){t.implement({_initDataSources:function(){this.dataSources={}
},_getDataSourceName:function(t){var r;return r=n.isObject(t)?t.dataSource:t,n.isString(r)&&!n.isEmpty(r)?r:(e.warn("Invalid data source name"),void 0)
},addDataSource:function(t,r,i){if(n.isObject(t)&&(i=r,r=t,t=r.name),!n.isObject(r))return e.error("Invalid data source object"),void 0;
if(!n.isString(t)||n.isEmpty(t))return e.error("Invalid data source name"),void 0;
if(this.dataSources[t]){if(!this.dataSources.hasOwnProperty(t))return e.error("Data source name '"+t+"' is invalid, overwrites an inherited property"),void 0;
if(!i)return e.warn("Data source name '"+t+"' is already defined, set force flag to true to overwrite it"),void 0
}var a=n.extend({},r);a.name&&delete a.name,this.dataSources[t]=a},getDataSource:function(t){var e=this._getDataSourceName(t);
return e&&this.dataSources.hasOwnProperty(e)?this.dataSources[e]:void 0},getDataSourceQuery:function(t){var r=this.getDataSource(t);
return n.isEmpty(r)?(e.error("Invalid data source"),void 0):this.getQuery(r)},setDataSource:function(t,e){n.isObject(t)?this.addDataSource(t,!0):this.addDataSource(t,e,!0)
},removeDataSource:function(t){var n;return(n=this._getDataSourceName(t))?(n in this.dataSources&&this.dataSources.hasOwnProperty(n)?delete this.dataSources[n]:e.warn("Data source name '"+n+"' not found"),void 0):(e.warn("Invalid data source name"),void 0)
}})}),define("cdf/dashboard/Dashboard.query",["../Logger","../lib/Base","./Dashboard","./Container","amd!../lib/underscore","./Utils"],function(t,e,n,r,i,a){var o=e,s=new r;
return n.implement({_initQuery:function(){this.queryFactories=a.clone(s)},getBaseQuery:function(){return o
},registerQuery:function(t,e){var n=this.getBaseQuery();if(!i.isFunction(e)&&i.isObject(e)){var r={};
i.each(n.prototype.deepProperties,function(t){r[t]=i.extend({},n.prototype[t],e[t])
})}var a=i.isFunction(e)&&e||i.isObject(e)&&n.extend(i.extend({},e,r));this.queryFactories.register("Query",t,function(t,e){return new a(e)
})},hasQuery:function(t){return Boolean(this.queryFactories&&this.queryFactories.has("Query",t))
},detectQueryType:function(e){if(e){if(i.isString(e.dataSource)&&!i.isEmpty(e.dataSource)){var n=this.getDataSource(e.dataSource);
if(i.isUndefined(n))return t.error("Invalid data source name '"+e.dataSource+"'"),void 0;
e=n}var r=e.queryType?e.queryType:e.query?"legacy":e.path&&e.dataAccessId?"cda":void 0;
return e.queryType=r,this.hasQuery(r)?r:void 0}},getQuery:function(e,n){if(i.isUndefined(e)?e="cda":i.isObject(e)&&(n=e,e=void 0),i.isString(n.dataSource)&&!i.isEmpty(n.dataSource)){var r=this.getDataSource(n.dataSource);
if(i.isUndefined(r))return t.error("Invalid data source name '"+qd.dataSource+"'"),void 0;
n=i.extend({},r,n),delete n.dataSource}e=e||n.queryType||"cda";var a=this.queryFactories.getNew("Query",e,n);
return a.dashboard=this,a},listQueries:function(){return i.keys(this.queryFactories.listType("Query"))
}}),{setBaseQuery:function(t){i.isFunction(t)&&t.extend&&(o=t)},registerGlobalQuery:function(t,e){var n=o;
if(!i.isFunction(e)&&i.isObject(e)){var r={};i.each(n.prototype.deepProperties,function(t){r[t]=i.extend({},n.prototype[t],e[t])
})}var a=i.isFunction(e)&&e||i.isObject(e)&&n.extend(i.extend({},e,r));s.register("Query",t,function(t,e){return new a(e)
})}}}),define("cdf/dashboard/Dashboard.views",["./Dashboard","../lib/base64","./Dashboard.views.ext","../lib/jquery"],function(t,e,n,r){t.implement({viewFlags:{UNUSED:"unused",UNBOUND:"unbound",VIEW:"view"},_initViews:function(){this.viewParameters={},!this.view&&this.viewObj&&(this.view={},r.extend(this.view,this.viewObj))
},restoreView:function(){var t,n;if(this.view&&this.view.params&&(n=JSON.parse(e.decode(this.view.params))))if(r.isEmptyObject(n))this.view.params=n;
else for(t in n)n.hasOwnProperty(t)&&this.setParameter(t,n[t])},setParameterViewMode:function(t,e){1===arguments.length&&(e=this.viewFlags.VIEW),this.viewParameters[t]=e
},isViewParameter:function(t){return this.viewParameters[t]},getViewParameters:function(){var t=this.viewParameters,e={};
for(var n in t)t.hasOwnProperty(n)&&(t[n]==this.viewFlags.VIEW||t[n]==this.viewFlags.UNBOUND)&&(e[n]=this.getParameterValue(n));
return e},getUnboundParameters:function(){var t=this.viewParameters,e=[];for(var n in t)if(t.hasOwnProperty(n))return t[n]==this.viewFlags.UNBOUND&&e.push(n),e
}})}),define("cdf/dashboard/OptionsManager",["./Utils","amd!../lib/underscore","../lib/jquery"],function(t,e,n){function r(t,e,n,r){return t&&t[e]&&t[e].hasOwnProperty(n)?t[e][n]:r||void 0
}function i(t,e,n,r){t&&e&&n&&(t[e]=t[e]||{},t[e][n]=r)}return function(a){function o(t,e){e=e||{},l(t,e.reader),h(t,e.writer),f(t,e.validator)
}function s(t){return r(g._interfaces,t,"reader",g._libraries.mappers.identity)}function u(t){return r(g._interfaces,t,"writer",g._libraries.mappers.identity)
}function c(t){return r(g._interfaces,t,"validator",g._libraries.predicates.tautology)
}function d(t){return r(g._options,t,"value")}function l(t,n){var r=g._libraries.mappers;
return n=e.isFunction(n)&&n||e.isString(n)&&r[n]||s(t)||r.identity,i(g._interfaces,t,"reader",n)
}function h(t,n){var r=g._libraries.mappers;return n=e.isFunction(n)&&n||e.isString(n)&&r[n]||u(t)||r.identity,i(g._interfaces,t,"writer",n)
}function f(t,n){var r=g._libraries.predicates;return n=e.isFunction(n)&&n||e.isString(n)&&r[n]||c(t)||r.tautology,i(g._interfaces,t,"validator",n)
}function p(t,e){return i(g._options,t,"value",e)}var g=this;this._options={},this._interfaces={},this._libraries={predicates:{tautology:function(){return!0
},isFunction:e.isFunction,isPositive:function(t){return e.isNumber(t)&&t>0},isObjectOrPropertiesArray:function(t){return e.isArray(t)||e.isObject(t)
},isObject:e.isObject,isArray:e.isArray},mappers:{identity:e.identity,propertiesObject:function(n){return e.isArray(n)?t.propertiesArrayToObject(n):n
}}},this.mixin=function(t){t.getOption=this.getOption,t.setOption=this.setOption},this.init=function(t,r,i){t=n.extend(!0,{},t),r=n.extend(!0,{},r),this._libraries=n.extend(!0,{},this._libraries,i),e.each(r,function(t,e){o(e,t)
}),e.each(t,function(t,e){var n=r&&r[e]||{};o(e,n),p(e,t)})},this.setOption=function(t,e,n){o(t,n);
var r=s(t),i=c(t);if(i(e))return e=r(e),p(t,e),!0;throw new Error("Invalid Option "+t.charAt(0).toUpperCase()+t.slice(1))
},this.getOption=function(t){var e=u(t),n=d(t);return e(n)},this.init(a.defaults,a.interfaces,a.libraries)
}}),define("cdf/queries/BaseQuery",["../lib/jquery","../lib/Base","amd!../lib/underscore","../Logger","../dashboard/OptionsManager","../dashboard/Dashboard.query"],function(t,e,n,r,i,a){var o=e.extend({name:"baseQuery",label:"Base Query",deepProperties:["defaults","interfaces"],dashboard:void 0,defaults:{successCallback:function(){r.log("Query callback not defined. Override.")
},errorCallback:function(){void 0!=dashboard&&void 0!=dashboard.handleServerError&&dashboard.handleServerError()
},lastResultSet:null,page:0,pageSize:0,params:{},ajaxOptions:{async:!1,type:"POST"},url:""},interfaces:{params:{reader:"propertiesObject",validator:"isObjectOrPropertiesArray"},successCallback:{validator:"isFunction"},errorCallback:{validator:"isFunction"},pageSize:{validator:"isPositive"}},constructor:function(t){this._optionsManager=new i(this),this._optionsManager.mixin(this),this.init(t)
},getOption:function(t){return this.defaults[t]},setOption:function(t,e){this.defaults[t]=e
},init:function(){},getSuccessHandler:function(e){var n=this;return function(r){n.setOption("lastResultSet",r);
var i=t.extend(!0,{},n.getOption("lastResultSet"));e(i)}},getErrorHandler:function(t){return function(e,n,r){t&&t(e,n,r)
}},doQuery:function(e,i){if("function"!=typeof this.getOption("successCallback"))throw"QueryNotInitialized";
var a=n.extend({},this.getOption("ajaxOptions"),{data:this.buildQueryDefinition(),url:this.getOption("url"),success:this.getSuccessHandler(e?e:this.getOption("successCallback")),error:this.getErrorHandler(i?i:this.getOption("errorCallback"))}),o=null==a.async?t.ajaxSettings.async:a.async;
!o&&a.xhrFields&&a.xhrFields.withCredentials&&(r.log("Cross-domain requests are deprecated for synchronous operations."),delete a.xhrFields.withCredentials),t.ajax(a)
},exportData:function(){},setAjaxOptions:function(t){this.setOption("ajaxOptions",n.extend({},this.getOption("ajaxOptions"),t))
},setSortBy:function(){},sortBy:function(){},fetchData:function(t,e,r){switch(arguments.length){case 0:if(this.getOption("params")&&this.getOption("successCallback"))return this.doQuery();
break;case 1:if("function"==typeof arguments[0])return this.doQuery(arguments[0]);
if(!n.isEmpty(arguments[0])&&(n.isObject(arguments[0])||n.isArray(arguments[0])))return this.setOption("params",arguments[0]||{}),this.doQuery();
break;case 2:return"function"==typeof arguments[0]?(this.setOption("successCallback",arguments[0]),this.setOption("errorCallback",arguments[1]),this.doQuery()):(this.setOption("params",arguments[0]||{}),this.setOption("successCallback",arguments[1]),this.doQuery());
default:return t&&this.setOption("params",t),this.setOption("successCallback",e),this.setOption("errorCallback",r),this.doQuery()
}throw"InvalidInput"},lastResults:function(){if(null!==this.getOption("lastResultSet"))return t.extend(!0,{},this.getOption("lastResultSet"));
throw"NoCachedResults"},reprocessLastResults:function(e){if(null!==this.getOption("lastResultSet")){var n=t.extend(!0,{},this.getOption("lastResultSet")),r=e||this.getOption("successCallback");
return r(n)}throw"NoCachedResults"},reprocessResults:function(t){return this.reprocessLastResults(t)
},setParameters:function(t){this.setOption("params",t)},setCallback:function(t){this.setOption("successCallback",t)
},setErrorCallback:function(t){this.setOption("errorCallback",t)},setSearchPattern:function(t){this.setOption("searchPattern",t)
},nextPage:function(t){var e=this.getOption("page"),n=this.getOption("pageSize");
if(n>0)return e+=n,this.setOption("page",e),this.doQuery(t);throw"InvalidPageSize"
},previousPage:function(t){var e=this.getOption("page"),n=this.getOption("pageSize");
if(e>n)return e-=n,this.setOption("page",e),this.doQuery(t);if(_pageSize>0)return this.setOption("page",0),this.doQuery(t);
throw"AtBeginning"},getPage:function(t,e){var n=this.getOption("page"),r=this.getOption("pageSize");
if(t*r==n)return!1;if("number"==typeof t&&t>=0)return this.setOption("page",t*r),this.doQuery(e);
throw"InvalidPage"},setPageStartingAt:function(t){if(t==this.getOption("page"))return!1;
if(!("number"==typeof t&&t>=0))throw"InvalidPage";this.setOption("page",t)},pageStartingAt:function(t,e){return this.setPageStartingAt(t)!==!1?this.doQuery(e):!1
},setPageSize:function(t){this.setOption("pageSize",t)},initPage:function(t,e){if(t==this.getOption("pageSize")&&0==this.getOption("page"))return!1;
if("number"==typeof t&&t>0)return this.setOption("page",0),this.setOption("pageSize",t),this.doQuery(e);
throw"InvalidPageSize"}});return a.setBaseQuery(o),o}),define("cdf/queries/CpkQuery",["../dashboard/Dashboard.ext","./BaseQuery","../dashboard/Dashboard.query","amd!../lib/underscore","../dashboard/Utils","../Logger","../lib/jquery"],function(t,e,n,r,i,a,o){var s={name:"cpk",label:"CPK Query",defaults:{url:"",pluginId:"",endpoint:"",systemParams:{},ajaxOptions:{dataType:"json",type:"POST",async:!0,xhrFields:{withCredentials:!0}}},init:function(e){r.isString(e.pluginId)&&r.isString(e.endpoint)&&(this.setOption("pluginId",e.pluginId),this.setOption("endpoint",e.endpoint),this.setOption("url",t.getPluginEndpoint(e.pluginId,e.endpoint))),this.setOption("kettleOutput",e.kettleOutput),this.setOption("stepName",e.stepName),this.setOption("systemParams",e.systemParams||{}),this.setOption("ajaxOptions",o.extend({},this.getOption("ajaxOptions"),e.ajaxOptions));
var n=this.getOption("ajaxOptions");"json"==n.dataType&&(n.mimeType="application/json; charset utf-8",this.setOption("ajaxOptions",n))
},buildQueryDefinition:function(t){var e=this;t=t instanceof Array?i.propertiesArrayToObject(t):t||{};
var n={kettleOutput:this.getOption("kettleOutput"),stepName:this.getOption("stepName")};
n=o.extend(!0,{},n,this.getOption("systemParams"));var s=this.getOption("params"),u=o.extend({},s,t);
return r.each(u,function(t,i){var o,s;try{o=e.dashboard.getParameterValue(t)}catch(u){s=!r.isObject(t)||r.isFunction(t)?t:JSON.stringify(t),a.log("BuildQueryDefinition detected static parameter "+i+"="+s+". The parameter will be used as value instead its value obtained from getParameterValue"),o=t
}void 0===o&&(o=t),r.isFunction(o)?o=o():r.isObject(o)&&(o=JSON.stringify(o)),n["param"+i]=o
}),n},getSuccessHandler:function(t){var e=this;return function(n){e.setOption("lastResultSet",n);
var r=o.extend(!0,{},e.getOption("lastResultSet"));if(n&&0==n.result){var i=e.getErrorHandler(e.getOption("errorCallback"));
i(r)}else t(r)}}};n.registerGlobalQuery("cpk",s)}),define("cdf/queries/CdaQuery",["./CdaQuery.ext","./BaseQuery","../dashboard/Dashboard.query","amd!../lib/underscore","../dashboard/Utils","../Logger","../lib/jquery"],function(t,e,n,r,i,a,o){var s={name:"cda",label:"CDA Query",defaults:{url:t.getDoQuery(),file:"",id:"",outputIdx:"1",sortBy:"",ajaxOptions:{async:!0,xhrFields:{withCredentials:!0}},searchPattern:""},init:function(t){if("undefined"==typeof t.path||"undefined"==typeof t.dataAccessId)throw"InvalidQuery";
this.setOption("file",t.path),this.setOption("id",t.dataAccessId),"string"==typeof t.sortBy&&t.sortBy.match("^(?:[0-9]+[adAD]?,?)*$")&&this.setOption("sortBy",t.sortBy),null!=t.pageSize&&this.setOption("pageSize",t.pageSize),null!=t.outputIndexId&&this.setOption("outputIdx",t.outputIndexId)
},buildQueryDefinition:function(t){var e=this;t=t instanceof Array?i.propertiesArrayToObject(t):t||{};
var n={},s=this.getOption("params"),u=o.extend({},s,t);return r.each(u,function(t,s){var u;
try{u=e.dashboard.getParameterValue(t)}catch(c){var d="";d=!r.isObject(t)||r.isFunction(t)?t:JSON.stringify(t),a.log("BuildQueryDefinition detected static parameter "+s+"="+d+". The parameter will be used instead the parameter value"),u=t
}void 0===u&&(u=t),o.isArray(u)&&1==u.length&&(""+u[0]).indexOf(";")>=0&&(u=i.doCsvQuoting(u[0],";")),"function"==typeof u&&(u=u()),n["param"+s]=u
}),n.path=this.getOption("file"),n.dataAccessId=this.getOption("id"),n.outputIndexId=this.getOption("outputIdx"),n.pageSize=this.getOption("pageSize"),n.pageStart=this.getOption("page"),n.sortBy=this.getOption("sortBy"),n.paramsearchBox=this.getOption("searchPattern"),n
},exportData:function(e,n,r){r||(r={});var i=this.buildQueryDefinition(n);i.outputType=e,"csv"==e&&r.separator&&(i.settingcsvSeparator=r.separator),r.filename&&(i.settingattachmentName=r.filename),"xls"==e&&r.template&&(i.settingtemplateName=r.template),r.columnHeaders&&(i.settingcolumnHeaders=r.columnHeaders),null!=r.dtFilter&&(i.settingdtFilter=r.dtFilter,null!=r.dtSearchableColumns&&(i.settingdtSearchableColumns=r.dtSearchableColumns)),i.wrapItUp="true",o.ajax({type:"POST",dataType:"text",async:!0,data:i,url:this.getOption("url"),xhrFields:{withCredentials:!0}}).done(function(e){var n=o('<iframe style="display:none">');
n.detach(),n[0].src=t.getUnwrapQuery({path:i.path,uuid:e}),n.appendTo(o("body"))}).fail(function(t,e,n){a.log("Request failed: "+t.responseText+" :: "+e+" ::: "+n)
})},setSortBy:function(t){var e,n=this;if(null===t||void 0===t||""===t)e="";else if("string"==typeof t){if(!t.match("^(?:[0-9]+[adAD]?,?)*$"))throw"InvalidSortExpression";
e=t.toUpperCase().split(",").filter(function(t){return""!==t})}else if(t instanceof Array){e=t.map(function(t){return t.toUpperCase()
});var r=e.filter(function(t){return!t.match("^[0-9]+[adAD]?,?$")});if(r.length>0)throw"InvalidSortExpression"
}var i;return e instanceof Array?(i=e.length!=n.getOption("sortBy").length,o.each(e,function(t,e){return i=i&&e==n.getOption("sortBy")[t],i?void 0:!1
})):i=e===this.getOption("sortBy"),this.setOption("sortBy",e),!i},sortBy:function(t,e){var n=this.setSortBy(t);
return n?null!==this.getOption("successCallback")?this.doQuery(e):void 0:!1}};n.registerGlobalQuery("cda",s)
}),define("cdf/queries/XmlaQuery",["amd!../lib/xmla","./XmlaQuery.ext","../lib/Base","./BaseQuery","../dashboard/Dashboard.query","../Logger","../lib/jquery"],function(t,e,n,r,i,a,o){var s=n.extend({xmla:null,datasource:null,catalogs:null,getDataSources:function(){var e=[],n=this.xmla.discoverDataSources();
if(!n)return a.warn("XML/A DISCOVER_DATASOURCES request failed"),void 0;if(n.hasMoreRows()){e=n.fetchAllAsObject(),this.datasource=e[0];
var r=this.datasource[t.PROP_DATASOURCENAME];r&&r.length>0&&(this.datasource[t.PROP_DATASOURCEINFO]=r),n.close()
}},getCatalogs:function(){var e={},n={};if(!this.datasource||!this.datasource[t.PROP_DATASOURCEINFO])return a.warn("XML/A DBSCHEMA_CATALOGS request failed, missing "+t.PROP_DATASOURCEINFO),void 0;
e[t.PROP_DATASOURCEINFO]=this.datasource[t.PROP_DATASOURCEINFO];var r=this.xmla.discoverDBCatalogs({properties:e});
if(!r)return a.warn("XML/A DISCOVER_DATASOURCES request failed"),void 0;if(r.hasMoreRows()){for(this.catalogs=[];n=r.fetchAsObject();)this.catalogs[this.catalogs.length]=n;
r.close()}},discover:function(e){var n={},r=e.query();n[t.PROP_DATASOURCEINFO]=this.datasource[t.PROP_DATASOURCEINFO],e.catalog&&(n[t.PROP_CATALOG]=e.catalog);
var i=this.xmla.discover({properties:n,requestType:r});return i},execute:function(e){for(var n=0,r=u.catalogs.length;r>n;n++)if(u.catalogs[n].CATALOG_NAME==e.catalog){var i={};
i[t.PROP_DATASOURCEINFO]=u.datasource[t.PROP_DATASOURCEINFO],i[t.PROP_CATALOG]=e.catalog,i[t.PROP_FORMAT]=u.PROP_FORMAT||t.PROP_FORMAT_TABULAR;
var a=this.xmla.execute({statement:e.query(),properties:i});return a}throw new Error("Catalog: "+e.catalog+" was not found on Pentaho server.")
}}),u=new s,c={name:"xmla",label:"XML/A Query",queryDefinition:{},defaults:{url:e.getXmla()},init:function(e){this.queryDefinition=o.extend({},this.getOption("params"),e),null==u.xmla&&(u.xmla=new t({async:!1,url:this.getOption("url")})),null==u.datasource&&u.getDataSources(),null==u.catalogs&&u.getCatalogs()
},transformXMLAresults:function(e){var n,r,i,a={resultset:[],metadata:[]};e instanceof t.Rowset?(n=e.fetchAllAsArray(),r=e.getFields()):e instanceof t.Dataset;
for(var o=0,s=r.length;s>o;o++)switch(i=r[o],a.metadata[o]={colIndex:i.index,colName:i.label},i.jsType){case"string":a.metadata[o].colType="string";
break;case"number":a.metadata[o].colType="numeric";break;default:a.metadata[o].colType="string"
}return a.resultset=n,e.close(),a},doQuery:function(t){{var e=(this.getOption("url"),t?t:this.getOption("successCallback"));
this.getOption("errorCallback")}try{var n=u.execute(this.queryDefinition)}catch(r){a.error("unable to execute the XML/A query: "+r+" :")
}e(this.transformXMLAresults(n))}};i.registerGlobalQuery("xmla",c);var d={name:"xmlaDiscover",label:"XML/A Discover Query",queryDefinition:{},defaults:{url:e.getXmla()},init:function(e){this.queryDefinition=o.extend({},this.getOption("params"),e),null==u.xmla&&(u.xmla=new t({async:!1,url:this.getOption("url")})),null==u.datasource&&u.getDataSources()
},transformDiscoverresults:function(t){for(var e,n=t.getFields(),r={resultset:[],metadata:[]},i=0,a=n.length;a>i;i++)switch(e=n[i],r.metadata[i]={colIndex:e.index,colName:e.label},e.jsType){case"string":r.metadata[i].colType="string";
break;case"number":r.metadata[i].colType="numeric";break;default:r.metadata[i].colType="string"
}return r.resultset=t.fetchAllAsArray(),t.close(),r},doQuery:function(t){{var e=(this.getOption("url"),t?t:this.getOption("successCallback"));
this.getOption("errorCallback")}try{var n=u.discover(this.queryDefinition)}catch(r){a.error("unable to execute the XML/A Discover query: "+r+" :")
}e(this.transformDiscoverresults(n))}};i.registerGlobalQuery("xmlaDiscover",d)}),define("cdf/queries/LegacyQuery",["../Logger","../components/XactionComponent.ext","./BaseQuery","../dashboard/Dashboard.query","amd!../lib/underscore","../lib/jquery","../dashboard/Utils"],function(Logger,XactionComponentExt,BaseQuery,Dashboard,_,$,Utils){function makeMetadataElement(t,e,n){return{colIndex:t||0,colType:n||"String",colName:e||"Name"}
}var legacyOpts={name:"legacy",label:"Legacy Query",defaults:{url:XactionComponentExt.getCdfXaction("pentaho-cdf/actions","jtable.xaction"),queryDef:{}},interfaces:{lastResultSet:{reader:function(json){json=eval("("+json+")");
var result={metadata:[makeMetadataElement(0)],resultset:json.values||[]};return _.each(json.metadata,function(t,e){return result.metadata.push(makeMetadataElement(e+1,t))
}),result}}},init:function(t){this.setOption("queryDef",t)},getSuccessHandler:function(t){var e=this;
return function(n){try{e.setOption("lastResultSet",n)}catch(r){if(!this.async)throw r;
var i=e.dashboard.getErrorObj("COMPONENT_ERROR").msg+":"+r.message;Logger.error(i),n={metadata:[i],values:[]}
}var a=$.extend(!0,{},e.getOption("lastResultSet"));t(a)}},buildQueryDefinition:function(t){return _.extend({},this.getOption("queryDef"),t)
}};Dashboard.registerGlobalQuery("legacy",legacyOpts),Dashboard.registerGlobalQuery("mdx",legacyOpts),Dashboard.registerGlobalQuery("sql",legacyOpts)
}),define("cdf/Dashboard",["./dashboard/Dashboard","./dashboard/Dashboard.context","./dashboard/Dashboard.addIns","./dashboard/Dashboard.bookmarkable","./dashboard/Dashboard.components","./dashboard/Dashboard.i18n","./dashboard/Dashboard.legacy","./dashboard/Dashboard.lifecycle","./dashboard/Dashboard.notifications","./dashboard/Dashboard.parameters","./dashboard/Dashboard.storage","./dashboard/Dashboard.dataSources","./dashboard/Dashboard.query","./dashboard/Dashboard.views","./queries/BaseQuery","./queries/CpkQuery","./queries/CdaQuery","./queries/XmlaQuery","./queries/LegacyQuery","./components/BaseComponent","./components/UnmanagedComponent","css!./Dashboard"],function(t){return t
}),define("cdf/Dashboard.Bootstrap",["./Dashboard","amd!./lib/bootstrap","css!cdf/lib/font-awesome/css/font-awesome.css","./lib/html5shiv","./lib/respond"],function(t){return t
}),define("cdf/dashboard/Query",["amd!../lib/underscore","../lib/jquery"],function(t,e){return function(n,r,i){var a,o;
if(t.isObject(n)?(a=e.extend(!0,{},n),o=t.isString(n.queryType)&&n.queryType||!t.isUndefined(n.query)&&"legacy"||!t.isUndefined(n.path)&&!t.isUndefined(n.dataAccessId)&&"cda"||void 0):t.isString(n)&&t.isString(r)&&(o="cda",a={path:n,dataAccessId:r}),!o)throw"InvalidQuery";
return i.getQuery(o,a)}});