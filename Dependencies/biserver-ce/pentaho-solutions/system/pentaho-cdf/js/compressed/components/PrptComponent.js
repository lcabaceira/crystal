define(["./PrptComponent.ext","../Logger","../lib/jquery","amd!../lib/underscore","./BaseComponent"],function(t,e,a,i,r){var o=r.extend({getIframeName:function(){return this.htmlObject+"_prptFrame"
},getIframe:function(){return'<iframe name="'+this.getIframeName()+'" style="width:100%;height:100%;border:0px" frameborder="0"/>'
},setIframeUrl:function(t,e){t[0]&&(t[0].contentWindow.location=e)},startLoading:function(){this.loading||(this.loading=!0,this.dashboard.incrementRunningCalls())
},stopLoading:function(){this.loading&&(this.loading=!1,this.dashboard.decrementRunningCalls())
},update:function(){this.clear();var i=this.getOptions(),r=this.getParams(),o=this.getReportOptions();
a.each(o,function(t){void 0!=r[t]&&delete t});var s={solution:i.solution,path:i.path,action:i.action};
delete i.solution,delete i.path,delete i.action,delete o.solution,delete o.path,delete o.action;
var n=this.downloadMode,h=i.showParameters?"viewer":"report";if(null==n){var u=i["output-target"];
n=!(-1!=u.indexOf("html")&&-1==u.indexOf("mime-message")||-1!=u.indexOf("text"))}if(i["dashboard-mode"]){i.showParameters&&e.log("showParameters not supported with IFrame = False");
var d=this.usePost?"POST":"GET",l=t.getReport(s,"report",{ts:(new Date).getTime()});
a.each(o,function(t,e){void 0==r[t]&&(r[t]=e)});var m=this;a.ajax({url:l,type:d,data:r,dataType:"html",success:function(t){a("#"+m.htmlObject).html(t)
}})}else{var p=a(this.getIframe()),c=a("#"+this.htmlObject);if(c.empty(),p=p.appendTo(c),this.autoResize&&(null==this._sHeight?(this._sHeight=c.height(),this._sWidth=c.width()):(c.height(this._sHeight),c.width(this._sWidth))),this.usePost){a.each(i,function(t,e){void 0==r[t]&&(r[t]=e)
});var l=t.getReport(s,h,{ts:(new Date).getTime()});this._postToUrl(c,p,l,r,this.getIframeName())
}else{a.extend(i,{ts:(new Date).getTime()});var l=t.getReport(s,h,i);i.showParameters&&this.autoResize&&(e.log("PrptComponent: autoResize disabled because showParameters=true"),this.autoResize=!1),this.startLoading();
var m=this;p.load(function(){if(i.showParameters){var t=a(this.contentWindow.document.body),e=t.find("#reportContent");
e.load(function(){m.autoResize&&m._resizeToReportFrame(e[0],c,i)})}m.stopLoading()
}),this.setIframeUrl(p,l)}n&&this.stopLoading()}},getOptions:function(){var t={paginate:this.paginate||!1,showParameters:this.showParameters||!1,autoSubmit:this.autoSubmit||this.executeAtStart||!1,"dashboard-mode":void 0==this.iframe?!1:!this.iframe,solution:this.solution,path:this.path,action:this.action,renderMode:"REPORT",htmlProportionalWidth:!1};
this.paginate?(t["output-target"]="table/html;page-mode=page",t["accept-page"]=0):(t["output-target"]="table/html;page-mode=stream",t["accept-page"]=-1);
var a=this;return i.each(this.parameters,function(r){var o,s=r[0],n=r[1];try{o=a.dashboard.getParameterValue(n)
}catch(h){var u;u=!i.isObject(n)||i.isFunction(n)?n:JSON.stringify(n),e.log("GetOptions detected static parameter "+s+"="+u+". The parameter will be used as value instead its value obtained from getParameterValue"),o=n
}null==o&&3==r.length?o=r[2]:void 0===o&&(o=n),i.isFunction(o)&&(o=o()),t[s]=o}),t
},getParams:function(){var t={};this.paginate?(t["output-target"]="table/html;page-mode=page",t["accept-page"]=0):(t["output-target"]="table/html;page-mode=stream",t["accept-page"]=-1);
var a=this;return i.each(this.parameters,function(r){var o,s=r[0],n=r[1];try{o=a.dashboard.getParameterValue(n)
}catch(h){printValue=!i.isObject(n)||i.isFunction(n)?n:JSON.stringify(n),e.log("GetParams detected static parameter "+s+"="+printValue+". The parameter will be used as value instead its value obtained from getParameterValue"),o=n
}null==o&&3==r.length?o=r[2]:void 0===o&&(o=n),i.isFunction(o)&&(o=o()),t[s]=o}),t
},getReportOptions:function(){var t={paginate:this.paginate||!1,showParameters:this.showParameters||!1,autoSubmit:this.autoSubmit||this.executeAtStart||!1,"dashboard-mode":void 0==this.iframe?!1:!this.iframe,solution:this.solution,path:this.path,name:this.action,renderMode:"REPORT",htmlProportionalWidth:!1,"accepted-page":-1};
return this.paginate?(t["output-target"]="table/html;page-mode=page",t["accept-page"]=0):(t["output-target"]="table/html;page-mode=stream",t["accept-page"]=-1),t
},_postToUrl:function(t,e,a,i){this.startLoading();var r=this._getParamsAsForm(document,a,i,this.getIframeName());
t[0].appendChild(r);var o=this;e.load(function(){o.autoResize&&o._resizeToReportFrame(e[0],t,i),o.stopLoading()
}),r.submit()},_resizeToReportFrame:function(t,i,r){var o=r["output-target"],s=function(t){return-1!=t.indexOf("html")&&-1==t.indexOf("mime")
},n=function(t){return-1!=t.indexOf("text")},h=function(t){return-1!=t.indexOf("xml")
};try{var u=t.contentWindow.document;if(t.contentWindow.document){var d=null;if(s(o)||n(o)?d=u.body:h(o)&&(d=u.firstChild),null!=d){var l=0,m=0;
if(s(o)){var p=a(d);l=p.outerHeight(!0)-p.outerHeight(!1),m=p.outerWidth(!0)-p.outerWidth(!1)
}i.height(d.scrollHeight+l),i.width(d.scrollWidth+m)}}}catch(c){e.log(c)}},_getParamsAsForm:function(t,e,i,r){var o=t.createElement("form");
o.setAttribute("method","post"),o.setAttribute("action",e),o.setAttribute("target",r);
for(var s in i)if(i.hasOwnProperty(s)){var n=i[s];if(a.isArray(n))for(var h=0;h<n.length;h++){var u=t.createElement("input");
u.setAttribute("type","hidden"),u.setAttribute("name",s),u.setAttribute("value",n[h]),o.appendChild(u)
}else{var u=t.createElement("input");u.setAttribute("type","hidden"),u.setAttribute("name",s),u.setAttribute("value",n),o.appendChild(u)
}}return o}});return o});