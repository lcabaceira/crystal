define(["./UnmanagedComponent","../dashboard/Utils","../Logger","../lib/jquery","amd!../lib/underscore","amd!../lib/mustache-wax","../addIns/templateTypes","css!./TemplateComponent"],function(e,t,s,n,i,a){var r=e.extend({defaults:{templateType:"mustache",template:"<div>{{items}}</div>",rootElement:"items",formatters:{},events:[],postProcess:function(){}},messages:{error:{noData:"No data available.",invalidTemplate:"Invalid template.",invalidTemplateType:"Invalid template type.",generic:"Invalid options defined. Please check the template component properties."},success:{},warning:{},info:{},config:{style:{success:{icon:"comment",type:"success"},error:{icon:"remove-sign",type:"danger"},info:{icon:"info-sign",type:"info"},warning:{icon:"exclamation-sign",style:"warning"}},template:"<div class='alert alert-<%=type%>' role='alert'>   <span class='glyphicon glyphicon-<%=icon%>' aria-hidden='true'></span>    <span> <%=msg%> </span></div>"}},init:function(){n.extend(!0,this,t.ev(this.extendableOptions)),n.extend(!0,this.defaults,t.ev(this.options))
},update:function(){i.bindAll(this,"redraw","init","processData","renderTemplate","attachEvents","processMessage","template","applyFormatter","applyAddin","processAddins"),this.init(),this.triggerQuery(this.chartDefinition,this.redraw)
},redraw:function(e){this.model=this.processData(e);var t=this.renderTemplate(this.template,this.templateType,this.model),s=this.placeholder();
s.empty().append(t),this.processAddins(s),i.isEmpty(this.events)||this.attachEvents(this.eventSelector,this.eventType,this.eventHandler)
},getUID:function(){return"xxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,s="x"===e?t:3&t|8;
return s.toString(16)})},applyFormatter:function(e,s){var n=t.propertiesArrayToObject(this.formatters)[s];
return i.isFunction(n)?n.call(this,e):e},applyAddin:function(e,t){var s=this.name+"_"+t+this.getUID();
return this.addins=this.addins||[],this.addins.push({uid:s,model:e,addin:t}),'<div id="'+s+'" class="'+t+'"/>'
},processAddins:function(e){var t=this;i.each(this.addins,function(s){t.handleAddin(i.first(e.find("#"+s.uid)),s.model,s.addin)
})},handleAddin:function(e,t,s){var n=this.getAddIn("templateType",s),i={value:t};
n.call(e,i,this.getAddInOptions("templateType",n.getName()))},processData:function(e){if(i.isFunction(this.modelHandler))return this.modelHandler(e);
var t=null!=e.queryInfo?e.queryInfo.totalRows>0:e.resultset.length>0;if(t){var s=[];
i.each(e.resultset,function(e){s.push(i.extend({},e))});var n={};return n[this.rootElement]=s,n
}return""},renderTemplate:function(e,n,r){var o="",l=this;if(i.isEmpty(r))o=this.processMessage(this.messages.error.noData,"error"),s.log(this.messages.error.noData,"error");
else{var d={formatter:function(e,t){return l.applyFormatter(e,t)},addin:function(e,t){return l.applyAddin(e,t)
}};try{switch(n.toUpperCase()){case"UNDERSCORE":r=i.defaults({},r,t.propertiesArrayToObject(d)),o=i.template(t.ev(e),r);
break;case"MUSTACHE":a.Formatters=d,o=a.render(t.ev(e),r);break;default:o=this.processMessage(this.messages.error.invalidTemplateType,"error")
}}catch(p){o=this.processMessage(this.messages.error.invalidTemplate,"error"),s.log(this.messages.error.invalidTemplate,"error")
}}return o},attachEvents:function(){var e=this;i.each(this.events,function(t){var s=" ",n=i.first(t).split(s),a=i.last(t),r=i.first(n),o=i.last(n);
i.isFunction(a)&&e.placeholder(o).on(r,i.bind(a,e))})},processMessage:function(e,t){var s={msg:e||"",type:this.messages.config.style[t].type||"info",icon:this.messages.config.style[t].icon||"comment"};
return i.template(this.messages.config.template,s)}});return r});