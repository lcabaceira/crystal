define("cde/components/PopupComponent",["cdf/components/BaseComponent","cdf/lib/jquery","css!./PopupComponent"],function(t,e){var s=1,i=t.extend({ph:void 0,arrow:void 0,content:void 0,cancel:void 0,$overlay:void 0,popupClass:void 0,popupOverlayClass:void 0,horizontalScroll:void 0,verticalScroll:void 0,update:function(){var t=this;
this.content=e("#"+this.htmlObject).detach(),this.ph=this.ph?this.ph.empty():e("<div>").appendTo(e("body")),this.content.appendTo(this.ph),this.ph.hide(),this.ph.addClass("popupComponent"),this.popupClass&&this.ph.addClass(this.popupClass),this.cancel=e("<a>&nbsp;</a>"),this.cancel.addClass("close").click(function(){t.hide()
}),this.cancel.appendTo(this.ph),this.arrow=e("<div class='arrow'>").appendTo(this.ph),this.content.removeClass("hidePopup")
},clone:function(t,i,o){var h=this.base(t,i,o);return h.ph=this.ph.clone(),h.ph.insertAfter(this.ph),h.ph.hide(),h.ph.find("[id]").each(function(t,i){var h=e(i),a=h.attr("id");
a&&a in o?h.attr("id",o[a]):h.attr("id",a+"_"+s++)}),h},popup:function(t,s){var i,o=t.offset(),h={top:"auto",bottom:"auto",left:"auto",right:"auto"},a=20,p=12,r=45,n=this.ph.outerHeight(),l=this.ph.outerWidth();
s=s||this.gravity;var d="undefined"==typeof this.draggable?!0:this.draggable;this.horizontalScroll&&e("#"+this.htmlObject).css("overflow-x","scroll"),this.verticalScroll&&e("#"+this.htmlObject).css("overflow-y","scroll");
var c="undefined"==typeof this.closeOnClickOutside?!1:this.closeOnClickOutside;this.arrow.css({top:"",left:"",bottom:"",right:""}),this.arrow.show(),this.ph.removeClass("north south east west");
var f,u,v,g=a,w=e(document).width()-a,b=a,m=e(document).height()-a;switch(s){case"N":v=parseInt(t.css("padding-top").replace(/(.*)px/,"$1"),10),h.left=this.center(t.outerWidth(),l,o.left,g,w),u="ownerSVGElement"in t[0]?t.attr("height")?t.attr("height")-0:0:t.height(),i=o.left-h.left-this.ph.css("border-top-width").replace(/(.*)px/,"$1"),h.top=this.offset(u,n,o.top+v,p,b,m,"near"),this.arrow.css("left",this.center(t.outerWidth(),r,i,0,l)),this.ph.addClass(h.top<o.top?"north":"south");
break;case"S":v=parseInt(t.css("padding-top").replace(/(.*)px/,"$1"),10),u="ownerSVGElement"in t[0]?t.attr("height")?t.attr("height")-0:0:t.height(),h.left=this.center(t.outerWidth(),l,o.left,g,w),h.top=this.offset(u,n,o.top+v,p,b,m,"far"),i=o.left-h.left-this.ph.css("border-top-width").replace(/(.*)px/,"$1"),this.arrow.css("left",this.center(t.outerWidth(),r,i,0,l)),this.ph.addClass(h.top<o.top?"north":"south");
break;case"W":v=parseInt(t.css("padding-left").replace(/(.*)px/,"$1"),10),h.top=this.center(t.outerHeight(),n,o.top,b,m),f="ownerSVGElement"in t[0]?t.attr("width")?t.attr("width")-0:0:t.width(),h.left=this.offset(t.width(),l,o.left+v,p,g,w,"near"),i=o.top-h.top-this.ph.css("border-left-width").replace(/(.*)px/,"$1"),this.arrow.css("top",this.center(t.outerHeight(),r,i,0,n)),this.ph.addClass(h.left<o.left?"west":"east");
break;case"E":v=parseInt(t.css("padding-left").replace(/(.*)px/,"$1"),10),h.top=this.center(t.outerHeight(),n,o.top,b,m),f="ownerSVGElement"in t[0]?t.attr("width")?t.attr("width")-0:0:t.width(),h.left=this.offset(f,l,o.left+v,p,g,w,"far"),i=o.top-h.top-this.ph.css("border-left-width").replace(/(.*)px/,"$1"),this.arrow.css("top",this.center(t.outerHeight(),r,i,0,n)),this.ph.addClass(h.left<o.left?"west":"east")
}this.ph.css(h),this.ph.show();var C,y=this;C=function(t){27==t.which&&(y.ph.hide(),e(document).unbind("keydown",C))
},e(document).keydown(C);var $=function(){y.arrow.hide()};this.ph.bind("drag",$),d&&this.ph.draggable({cancel:"#"+this.htmlObject});
var x,O;this.ph.bind("touchstart",function(t){x=y.ph.offset(),O={left:t.originalEvent.touches[0].pageX,top:t.originalEvent.touches[0].pageY}
}),this.ph.bind("touchmove",function(t){var e={top:x.top+t.originalEvent.touches[0].pageY-O.top,left:x.left+t.originalEvent.touches[0].pageX-O.left};
y.ph.offset(e),y.arrow.hide(),t.preventDefault()}),c&&(this.$overlay||(this.$overlay=e('<div id="popupComponentOverlay"></div>'),this.popupOverlayClass&&this.$overlay.addClass(this.popupOverlayClass)),this.$overlay.appendTo("body").click(function(t){t.stopPropagation(),y.hide()
})),e("body").addClass("draggable-popup-fix")},hide:function(){this.ph.hide(),this.$overlay&&(this.$overlay.unbind("click"),this.$overlay.detach()),e("body").removeClass("draggable-popup-fix")
},center:function(t,e,s,i,o){var h=s+t/2-e/2;return h+e>o?o-e:i>h?i:h},offset:function(t,e,s,i,o,h,a){var p=s-e-i,r=s+t+i,n=p>o,l=h>r+e;
return"near"==a?n||!l?p:r:"far"==a?l||!n?r:p:p}});return i});