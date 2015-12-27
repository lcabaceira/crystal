!function(e){var t=0;e.widget("ech.multiselect",{options:{header:!0,height:175,minWidth:225,classes:"",checkAllText:"Marcar tudo",uncheckAllText:"Desmarcar tudo",noneSelectedText:"Selecione",selectedText:"# Selecionado(s)",selectedList:0,show:"",hide:"",autoOpen:!1,multiple:!0,position:{}},_create:function(){var t=this.element.hide(),i=this.options;
this.speed=e.fx.speeds._default,this._isOpen=!1;{var s=(this.button=e('<button type="button"><span class="ui-icon ui-icon-triangle-2-n-s"></span></button>')).addClass("ui-multiselect ui-widget ui-state-default ui-corner-all").addClass(i.classes).attr({title:t.attr("title"),"aria-haspopup":!0,tabIndex:t.attr("tabIndex")}).insertAfter(t),l=((this.buttonlabel=e("<span />")).html(i.noneSelectedText).appendTo(s),(this.menu=e("<div />")).addClass("ui-multiselect-menu ui-widget ui-widget-content ui-corner-all").addClass(i.classes).appendTo(document.body)),a=(this.header=e("<div />")).addClass("ui-widget-header ui-corner-all ui-multiselect-header ui-helper-clearfix").appendTo(l);
(this.headerLinkContainer=e("<ul />")).addClass("ui-helper-reset").html(function(){return i.header===!0?'<li><a class="ui-multiselect-all" href="#"><span class="ui-icon ui-icon-check"></span><span>'+i.checkAllText+'</span></a></li><li><a class="ui-multiselect-none" href="#"><span class="ui-icon ui-icon-closethick"></span><span>'+i.uncheckAllText+"</span></a></li>":"string"==typeof i.header?"<li>"+i.header+"</li>":""
}).append('<li class="ui-multiselect-close"><a href="#" class="ui-multiselect-close"><span class="ui-icon ui-icon-circle-close"></span></a></li>').appendTo(a),(this.checkboxContainer=e("<ul />")).addClass("ui-multiselect-checkboxes ui-helper-reset").appendTo(l)
}this._bindEvents(),this.refresh(!0),i.multiple||l.addClass("ui-multiselect-single")
},_init:function(){this.options.header===!1&&this.header.hide(),this.options.multiple||this.headerLinkContainer.find(".ui-multiselect-all, .ui-multiselect-none").hide(),this.options.autoOpen&&this.open(),this.element.is(":disabled")&&this.disable()
},refresh:function(i){var s=this.element,l=this.options,a=this.menu,n=this.checkboxContainer,o=[],h=[],u=s.attr("id")||t++;
s.find("option").each(function(t){var i,s=(e(this),this.parentNode),a=this.innerHTML,n=this.title,c=this.value,r=this.id||"ui-multiselect-"+u+"-option-"+t,d=this.disabled,p=this.selected,g=["ui-corner-all"];
"optgroup"===s.tagName.toLowerCase()&&(i=s.getAttribute("label"),-1===e.inArray(i,o)&&(h.push('<li class="ui-multiselect-optgroup-label"><a href="#">'+i+"</a></li>"),o.push(i))),d&&g.push("ui-state-disabled"),p&&!l.multiple&&g.push("ui-state-active"),h.push('<li class="'+(d?"ui-multiselect-disabled":"")+'">'),h.push('<label for="'+r+'" title="'+n+'" class="'+g.join(" ")+'">'),h.push('<input id="'+r+'" name="multiselect_'+u+'" type="'+(l.multiple?"checkbox":"radio")+'" value="'+c+'" title="'+a+'"'),p&&(h.push(' checked="checked"'),h.push(' aria-selected="true"')),d&&(h.push(' disabled="disabled"'),h.push(' aria-disabled="true"')),h.push(" /><span>"+a+"</span></label></li>")
}),n.html(h.join("")),this.labels=a.find("label"),this._setButtonWidth(),this._setMenuWidth(),this.button[0].defaultValue=this.update(),i||this._trigger("refresh")
},update:function(){var t,i=this.options,s=this.labels.find("input"),l=s.filter("[checked]"),a=l.length;
return t=0===a?i.noneSelectedText:e.isFunction(i.selectedText)?i.selectedText.call(this,a,s.length,l.get()):/\d/.test(i.selectedList)&&i.selectedList>0&&a<=i.selectedList?l.map(function(){return e(this).next().text()
}).get().join(", "):i.selectedText.replace("#",a).replace("#",s.length),this.buttonlabel.html(t),t
},_bindEvents:function(){function t(){return i[i._isOpen?"close":"open"](),!1}var i=this,s=this.button;
s.find("span").bind("click.multiselect",t),s.bind({click:t,keypress:function(e){switch(e.which){case 27:case 38:case 37:i.close();
break;case 39:case 40:i.open()}},mouseenter:function(){s.hasClass("ui-state-disabled")||e(this).addClass("ui-state-hover")
},mouseleave:function(){e(this).removeClass("ui-state-hover")},focus:function(){s.hasClass("ui-state-disabled")||e(this).addClass("ui-state-focus")
},blur:function(){e(this).removeClass("ui-state-focus")}}),this.header.delegate("a","click.multiselect",function(t){e(this).hasClass("ui-multiselect-close")?i.close():i[e(this).hasClass("ui-multiselect-all")?"checkAll":"uncheckAll"](),t.preventDefault()
}),this.menu.delegate("li.ui-multiselect-optgroup-label a","click.multiselect",function(t){t.preventDefault();
var s=e(this),l=s.parent().nextUntil("li.ui-multiselect-optgroup-label").find("input:visible:not(:disabled)"),a=l.get(),n=s.parent().text();
i._trigger("beforeoptgrouptoggle",t,{inputs:a,label:n})!==!1&&(i._toggleChecked(l.filter("[checked]").length!==l.length,l),i._trigger("optgrouptoggle",t,{inputs:a,label:n,checked:a[0].checked}))
}).delegate("label","mouseenter.multiselect",function(){e(this).hasClass("ui-state-disabled")||(i.labels.removeClass("ui-state-hover"),e(this).addClass("ui-state-hover").find("input").focus())
}).delegate("label","keydown.multiselect",function(t){switch(t.preventDefault(),t.which){case 9:case 27:i.close();
break;case 38:case 40:case 37:case 39:i._traverse(t.which,this);break;case 13:e(this).find("input")[0].click()
}}).delegate('input[type="checkbox"], input[type="radio"]',"click.multiselect",function(t){var s=e(this),l=this.value,a=this.checked,n=i.element.find("option");
return this.disabled||i._trigger("click",t,{value:l,text:this.title,checked:a})===!1?(t.preventDefault(),void 0):(s.focus(),s.attr("aria-selected",a),n.each(function(){this.value===l?this.selected=a:i.options.multiple||(this.selected=!1)
}),i.options.multiple||(i.labels.removeClass("ui-state-active"),s.closest("label").toggleClass("ui-state-active",a),i.close()),i.element.trigger("change"),setTimeout(e.proxy(i.update,i),10),void 0)
}),e(document).bind("mousedown.multiselect",function(t){!i._isOpen||e.contains(i.menu[0],t.target)||e.contains(i.button[0],t.target)||t.target===i.button[0]||i.close()
}),e(this.element[0].form).bind("reset.multiselect",function(){setTimeout(e.proxy(i.refresh,i),10)
})},_setButtonWidth:function(){var e=this.element.outerWidth(),t=this.options;/\d/.test(t.minWidth)&&e<t.minWidth&&(e=t.minWidth),this.button.width(e)
},_setMenuWidth:function(){var e=this.menu,t=this.button.outerWidth()-parseInt(e.css("padding-left"),10)-parseInt(e.css("padding-right"),10)-parseInt(e.css("border-right-width"),10)-parseInt(e.css("border-left-width"),10);
e.width(t||this.button.outerWidth())},_traverse:function(t,i){var s=e(i),l=38===t||37===t,a=s.parent()[l?"prevAll":"nextAll"]("li:not(.ui-multiselect-disabled, .ui-multiselect-optgroup-label)")[l?"last":"first"]();
if(a.length)a.find("label").trigger("mouseover");else{var n=this.menu.find("ul").last();
this.menu.find("label")[l?"last":"first"]().trigger("mouseover"),n.scrollTop(l?n.height():0)
}},_toggleState:function(e,t){return function(){this.disabled||(this[e]=t),t?this.setAttribute("aria-selected",!0):this.removeAttribute("aria-selected")
}},_toggleChecked:function(t,i){var s=i&&i.length?i:this.labels.find("input"),l=this;
s.each(this._toggleState("checked",t)),s.eq(0).focus(),this.update();var a=s.map(function(){return this.value
}).get();this.element.find("option").each(function(){!this.disabled&&e.inArray(this.value,a)>-1&&l._toggleState("selected",t).call(this)
}),s.length&&this.element.trigger("change")},_toggleDisabled:function(e){this.button.attr({disabled:e,"aria-disabled":e})[e?"addClass":"removeClass"]("ui-state-disabled"),this.menu.find("input").attr({disabled:e,"aria-disabled":e}).parent()[e?"addClass":"removeClass"]("ui-state-disabled"),this.element.attr({disabled:e,"aria-disabled":e})
},open:function(){var t=this,i=this.button,s=this.menu,l=this.speed,a=this.options;
if(this._trigger("beforeopen")!==!1&&!i.hasClass("ui-state-disabled")&&!this._isOpen){var n=s.find("ul").last(),o=a.show,h=i.offset();
e.isArray(a.show)&&(o=a.show[0],l=a.show[1]||t.speed),n.scrollTop(0).height(a.height),e.ui.position&&!e.isEmptyObject(a.position)?(a.position.of=a.position.of||i,s.show().position(a.position).hide().show(o,l)):s.css({top:h.top+i.outerHeight(),left:h.left}).show(o,l),this.labels.eq(0).trigger("mouseover").trigger("mouseenter").find("input").trigger("focus"),i.addClass("ui-state-active"),this._isOpen=!0,this._trigger("open")
}},close:function(){if(this._trigger("beforeclose")!==!1){var t=this.options,i=t.hide,s=this.speed;
e.isArray(t.hide)&&(i=t.hide[0],s=t.hide[1]||this.speed),this.menu.hide(i,s),this.button.removeClass("ui-state-active").trigger("blur").trigger("mouseleave"),this._isOpen=!1,this._trigger("close")
}},enable:function(){this._toggleDisabled(!1)},disable:function(){this._toggleDisabled(!0)
},checkAll:function(){this._toggleChecked(!0),this._trigger("checkAll")},uncheckAll:function(){this._toggleChecked(!1),this._trigger("uncheckAll")
},getChecked:function(){return this.menu.find("input").filter("[checked]")},destroy:function(){return e.Widget.prototype.destroy.call(this),this.button.remove(),this.menu.remove(),this.element.show(),this
},isOpen:function(){return this._isOpen},widget:function(){return this.menu},_setOption:function(t,i){var s=this.menu;
switch(t){case"header":s.find("div.ui-multiselect-header")[i?"show":"hide"]();break;
case"checkAllText":s.find("a.ui-multiselect-all span").eq(-1).text(i);break;case"uncheckAllText":s.find("a.ui-multiselect-none span").eq(-1).text(i);
break;case"height":s.find("ul").last().height(parseInt(i,10));break;case"minWidth":this.options[t]=parseInt(i,10),this._setButtonWidth(),this._setMenuWidth();
break;case"selectedText":case"selectedList":case"noneSelectedText":this.options[t]=i,this.update();
break;case"classes":s.add(this.button).removeClass(this.options.classes).addClass(i)
}e.Widget.prototype._setOption.apply(this,arguments)}})}(jQuery);