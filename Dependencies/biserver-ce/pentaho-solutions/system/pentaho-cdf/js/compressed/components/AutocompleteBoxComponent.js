define(["../Logger","./UnmanagedComponent","amd!../lib/underscore","../lib/jquery","css!./AutocompleteBoxComponent"],function(e,t,a,i){var n=t.extend({result:[],selectedValues:[],_queryServer:function(t,a){this.parameters||(this.parameters=[]),this.searchParam?this.parameters=[[this.searchParam,this._getInnerParameterName()]]:this.parameters.length>0&&(this.parameters[0][1]=this._getInnerParameterName()),this.maxResults&&(this.queryDefinition.pageSize=this.maxResults),this.dashboard.setParameter(this._getInnerParameterName(),this._getTextBoxValue()),this.queryDefinition?this.triggerQuery(this.queryDefinition,a):e.error("No query definition found")
},_getTextBoxValue:function(){return this.textbox.val()},_getInnerParameterName:function(){return this.parameter+"_textboxValue"
},_setInitialValue:function(){var e=this.parameter,t=null;if(e&&(t=this.dashboard.getParameterValue(e)),null!=t&&a.isArray(t))for(var i=0,n=t.length;n>i;i++)this._selectValue(t[i])
},update:function(){if(this.lifecycle?this.lifecycle.silent=this.silent===!0:this.lifecycle={silent:this.silent===!0},this.preExec()){this.isSilent()||this.block(),this.placeholder().empty();
var e=this,t=this.selectMulti||!1,a=this._getOptions();this.dashboard.getParameterValue(this._getInnerParameterName())||this.dashboard.setParameter(this._getInnerParameterName(),""),this.textbox=i('<input class="autocomplete-input">');
var n=i('<div class="autocomplete-container">');if(t){var s=this.tooltipMessage||"Click it to Apply",o=i('<input type="button" class="autocomplete-input-apply" style="display: none" title="'+s+'" value="S"/>').click(function(){e._endSearch()
});n.append(o)}n.append(this.textbox).append('<ul class="list-data-selection">').appendTo(this.placeholder()),this.textbox.autocomplete(a),i(".autocomplete-container .ui-autocomplete").off("menuselect"),this.textbox.data("ui-autocomplete")._renderItem=function(a,n){var s=i('<li class="list-item">'),o=i("<a>"+(t?'<input type="checkbox"/>':"")+n.label+"</a>").click(function(a){var s=i(this).find("input");
i(a.srcElement).is("a")&&s.prop("checked",!s.is(":checked")),t?s.is(":checked")?e._selectValue(n.label):e._removeValue(n.label):(e._selectValue(n.label),e._endSearch())
});return o.appendTo(s),s.appendTo(a)},i("#"+this.externalApplyButtonId).click(function(){e._endSearch()
}),this._setInitialValue(),this.postExec(),this.isSilent()||this.unblock()}},getValue:function(){return this.value
},_getOptions:function(){var e=this,t=null==this.processChange?function(){var t=a.extend({},e);
t.value=e.selectedValues,e.dashboard.processChange(t.name)}:function(){e.processChange()
},n={appendTo:".autocomplete-container",minLength:this.minTextLength||0,source:function(t,a){e._search(t,a)
},focus:function(e){e.preventDefault()},open:function(){var t=e.scrollHeight||0;t>0&&i(".autocomplete-container .ui-autocomplete").css({"max-height":t+"px","overflow-y":"auto"}),e._filterData()
},close:function(){t()}};return n},_selectValue:function(e){var t=this,a=null!=this.addTextElements?this.addTextElements:!0,n=null!=this.showApplyButton?this.showApplyButton:!0,s=i(".autocomplete-container .list-data-selection"),o=i('<li id="'+e+'"><input type="button" class="close-button" value="x"/>'+e+"</li>");
this.selectMulti?n&&(i(".autocomplete-container").addClass("show-apply-button"),i(".autocomplete-input-apply").show()):(s.empty(),this.selectedValues=[]),o.find("input").click(function(){t._removeValue(e)
}),a&&o.appendTo(s),this.selectedValues.push(e)},_removeValue:function(e){this.selectedValues=a.without(this.selectedValues,e),i('.autocomplete-container .list-data-selection li[id="'+e+'"]').remove()
},_filterData:function(){var e=i(".autocomplete-container .ui-autocomplete"),t=this.selectedValues||[],a=null!=this.addTextElements?this.addTextElements:!0;
t.length>0&&(e.find("li").each(function(){var e=i(this),n=e.text();t.indexOf(n)>-1&&(a?e.remove():e.find("input").prop("checked",!0))
}),0==e.find("li").length&&e.hide())},_search:function(e,t){var a=this.matchType||"fromStart",i=e.term.toLowerCase();
this._queryServer(i,function(e){var n=e.resultset?e.resultset:e,s=[];for(var o in n)if(n.hasOwnProperty(o)){var l=n[o][0];
(null!=l&&"fromStart"===a&&0==l.toLowerCase().indexOf(i)||"all"===a&&l.toLowerCase().indexOf(i)>-1)&&s.push(l)
}t(s)})},_endSearch:function(){var e=i(".autocomplete-container");e.removeClass("show-apply-button"),e.find(".autocomplete-input-apply").hide(),this.textbox.val(""),this.textbox.autocomplete("close")
},_processAutoBoxChange:function(){this.textbox.autocomplete("change")}});return n
});