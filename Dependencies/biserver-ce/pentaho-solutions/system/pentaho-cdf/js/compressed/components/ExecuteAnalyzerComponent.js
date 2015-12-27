define(["./AnalyzerComponent.ext","../lib/jquery","./AnalyzerComponent","amd!../lib/jquery.fancybox"],function(e,t,n){var i=n.extend({update:function(){var e=this,n=t("#"+this.htmlObject);
t.inArray(n[0].tagName.toUpperCase(),["SPAN","DIV"])>-1&&(n=t("<button/>").appendTo(n.empty()),"DIV"==n[0].tagName&&n.wrap("<span/>"),void 0!=this.label&&n.text(this.label),n.button()),n.unbind("click"),n.bind("click",function(){var t="undefined"==typeof e.preChange?!0:e.preChange();
t&&e.executeAnalyzerComponent(),"undefined"==typeof e.postChange?!0:e.postChange()
})},executeAnalyzerComponent:function(){var n=this.isEditMode()?"editor":"viewer",i=this.getOptions(),o={};
i.solution&&t.extend(o,{solution:i.solution}),i.path&&t.extend(o,{path:i.path}),i.action&&t.extend(o,{action:i.action}),delete i.solution,delete i.path,delete i.action,t.extend(i,{ts:(new Date).getTime()}),t.fancybox({type:"iframe",href:e.getAnalyzer(o,n,i),width:t(window).width(),height:t(window).height()-50})
}});return i});