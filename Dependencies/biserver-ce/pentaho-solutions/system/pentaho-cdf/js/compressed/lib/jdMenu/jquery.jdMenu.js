!function(e){function i(i){var s=e.data(e(i).parents().andSelf().filter("ul.jd_menu")[0],"jdMenuSettings");
e("> li",i).bind("mouseenter.jdmenu mouseleave.jdmenu",function(i){e(this).toggleClass("jdm_hover");
var a=e("> ul",this);if(1==a.length){clearTimeout(this.$jdTimer);var d="mouseenter"==i.type,l=d?n:t;
this.$jdTimer=setTimeout(function(){l(a[0],s.onAnimate,s.isVertical)},d?s.showDelay:s.hideDelay)
}}).bind("click.jdmenu",function(i){var t=e("> ul",this);if(1==t.length&&(1==s.disableLinks||e(this).hasClass("accessible")))return n(t,s.onAnimate,s.isVertical),!1;
if(i.target==this){var a=e("> a",i.target).not(".accessible");if(a.length>0){var d=a[0];
d.onclick?e(d).trigger("click"):window.open(d.href,d.target||"_self")}}(s.disableLinks||!s.disableLinks&&!e(this).parent().hasClass("jd_menu"))&&(e(this).parent().jdMenuHide(),i.stopPropagation())
}).find("> a").bind("focus.jdmenu blur.jdmenu",function(i){var n=e(this).parents("li:eq(0)");
"focus"==i.type?n.addClass("jdm_hover"):n.removeClass("jdm_hover")}).filter(".accessible").bind("click.jdmenu",function(e){e.preventDefault()
})}function n(n,s,a){var n=e(n);if(!n.is(":visible")){n.bgiframe();var d=n.parent();
n.trigger("jdMenuShow").positionBy({target:d[0],targetPos:a!==!0&&d.parent().hasClass("jd_menu")?3:1,elementPos:0,hideAfterPosition:!0}),n.hasClass("jdm_events")||(n.addClass("jdm_events"),i(n)),d.addClass("jdm_active").siblings("li").find("> ul:eq(0):visible").each(function(){t(this)
}),void 0===s?n.show():s.apply(n[0],[!0])}}function t(i,n){var i=e(i);e(".bgiframe",i).remove(),i.filter(":not(.jd_menu)").find("> li > ul:eq(0):visible").each(function(){t(this)
}).end(),void 0===n?i.hide():n.apply(i[0],[!1]),i.trigger("jdMenuHide").parents("li:eq(0)").removeClass("jdm_active jdm_hover").end().find("> li").removeClass("jdm_active jdm_hover")
}e.fn.jdMenu=function(n){var n=e.extend({showDelay:200,hideDelay:500,disableLinks:!0},n);
return e.isFunction(n.onAnimate)||(n.onAnimate=void 0),this.filter("ul.jd_menu").each(function(){e.data(this,"jdMenuSettings",e.extend({isVertical:e(this).hasClass("jd_menu_vertical")},n)),i(this)
})},e.fn.jdMenuUnbind=function(){e("ul.jdm_events",this).unbind(".jdmenu").find("> a").unbind(".jdmenu")
},e.fn.jdMenuHide=function(){return this.filter("ul").each(function(){t(this)})},e(window).bind("click.jdmenu",function(){e("ul.jd_menu ul:visible").jdMenuHide()
})}(jQuery),$(function(){$("ul.jd_menu").jdMenu()});