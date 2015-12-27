define("cde/components/TextEditorComponentExt",[],function(){var t={getUrl:function(){return CONTEXT_PATH+"plugin/pentaho-cdf-dd/api/editor/getExternalEditor?"
}};return t}),define("cde/components/TextEditorComponent",["cdf/components/BaseComponent","cdf/Logger","cdf/lib/jquery","amd!cdf/lib/underscore","cdf/lib/mustache","./TextEditorComponentExt","css!./TextEditorComponent"],function(t,i,e,n,o,a){var s=t.extend({$ph:void 0,$rightPanel:void 0,isRightPanelShown:!1,isInitialized:!1,externalEditor:void 0,defaultButtons:[{clazz:"save",label:"Save",callback:function(){this.save(),"function"==typeof this.saveCallback&&this.saveCallback()
}}],template:function(){return"<div class='textEditorComponent'><div class='textEditorControls'><div class='textEditorFile'><span class='fileLabel'>File: </span>{{file}}</div><div class='textEditorButtons'>{{#buttons}}<button class='{{clazz}}'>{{label}}</button>{{/buttons}}</div></div><div class='textEditorNotification'><span class='textEditorNotificationMsg'>Test</span></div><div class='textEditorRightPanel'></div><div class='textEditorIframeContainer'><div class='textEditorIframe'><iframe seamless='true' marginheight='0'></iframe></div></div>"
},initialize:function(){i.log("Initializing TextEditorComponent"),this.isInitialized=!0,this.$ph=this.htmlObject?e("#"+this.htmlObject):e("<div id='textEditorDefautlId'></div>").appendTo("body")
},update:function(){var t=this;t.parameter&&t.setFile(t.dashboard.getParameterValue(t.parameter)),t.isInitialized||t.initialize(),t.isRightPanelShown=!1;
var i=t.getButtons();t.$ph.html(o.render(t.template(),{file:t.file||"Unknown file",buttons:i})),t.$ph.find(".textEditorControls").on("click","button",function(){var t=e(this),n=t.prevAll("button").length;
i[n].callback(arguments)}),t.file&&t.loadFile()},getButtons:function(){var t=this,i=t.extraButtons||[];
return n.chain(t.defaultButtons).each(function(i){i.callback=n.bind(i.callback,t)
}),t.defaultButtons.concat(i)},setFile:function(t){this.file=t},getFile:function(){return this.file
},loadFile:function(){var t=this;e("button.save",t.$ph).attr("disabled",!0),t.externalEditor=e("iframe",t.$ph);
var i=e(".textEditorControls",t.$ph).height()+e(".textEditorNotification",t.$ph).height(),n=t.$ph.height()-i-5;
t.externalEditor.height(n),t.externalEditor.load(function(){var i=t.getEditorWindow();
i.listeners.onStatusUpdate=t.setDirty,i.listeners.notify=function(i){t.notify(i)},e("#notifications").hide()
}),t.externalEditor.attr("src",a.getUrl()+"path="+this.file+"&theme=ace/theme/eclipse&editorOnly=true")
},notify:function(t){var i=this.$ph.find(".textEditorNotificationMsg");i.text(t),i.show().delay(4e3).fadeOut("slow")
},setDirty:function(t){e("button.save",this.$ph).attr("disabled",!t)},getEditorWindow:function(){return this.externalEditor[0].contentWindow
},save:function(){this.getEditorWindow().save()},getRightPanel:function(){return this.$ph.find(".textEditorRightPanel")
},toggleRightPanel:function(){return this.getRightPanel().toggle(),this.isRightPanelShown=!this.isRightPanelShown,this.getEditorWindow().editor.getEditor().resize(),this.isRightPanelShown
}});return s});