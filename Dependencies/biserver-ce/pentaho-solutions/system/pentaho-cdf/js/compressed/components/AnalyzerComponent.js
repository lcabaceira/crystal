define(["./AnalyzerComponent.ext","../lib/jquery","./BaseComponent"],function(t,e,i){var s=i.extend({update:function(){this.clear();
var i=this.getOptions(),s={solution:i.solution,path:i.path,action:i.action};delete i.solution,delete i.path,delete i.action;
var o=this.isEditMode()?"editor":"viewer";e.extend(i,{ts:(new Date).getTime()});var h=t.getAnalyzer(s,o,i),n=this.generateIframe(h);
e("#"+this.htmlObject).html(n)},getOptions:function(){var t={solution:this.solution,path:this.path,action:this.action,command:void 0==this.command?"open":this.command,showFieldList:void 0==this.showFieldList?!1:this.showFieldList,showRepositoryButtons:void 0==this.showRepositoryButtons?!1:this.showRepositoryButtons,frameless:void 0==this.frameless?!1:this.frameless},i=this.dashboard;
return e.map(this.parameters,function(e){t[e[0]]=3==e.length?e[2]:i.getParameterValue(e[1])
}),t},isEditMode:function(){return void 0!=this.viewOnly?!this.viewOnly||this.editMode:this.editMode
},generateIframe:function(t){var e=(this.height?this.height:"480px",this.width?this.width:"100%","<iframe id ='iframe_"+this.htmlObject+"' style='height:100%;width:100%;border:0px' frameborder='0' src='"+t+"'/>");
return e}});return s});