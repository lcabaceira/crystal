define(["jquery","css!./tipsy"],function(t){return!function(t){function i(t){var i=t.attr("title");
(i||"string"!=typeof t.attr("original-title"))&&t.attr("original-title",i||"").removeAttr("title")
}function e(e,n){this.$element=t(e),this.options=n,this.enabled=!0,i(this.$element)
}e.prototype={enter:function(){var t=this,i=this.options;0==i.delayIn?(t.hoverState=null,t.show()):(t.hoverState="in",setTimeout(function(){"in"===t.hoverState&&(t.hoverState=null,t.show())
},i.delayIn))},leave:function(){var t=this,i=this.options;0==i.delayOut?t.hide():(t.hoverState="out",setTimeout(function(){"out"===t.hoverState&&t.hide()
},i.delayOut))},visible:function(){var t;return"in"===this.hoverState||"out"!==this.hoverState&&!(!this.$tip||!(t=this.$tip[0].parentNode)||11===t.nodeType)
},update:function(){this.visible()?this.show(!0):this.enter()},show:function(i){function e(t){var i;
switch(t.charAt(0)){case"n":i={top:r.top+r.height+v,left:r.left+r.width/2-u/2};break;
case"s":i={top:r.top-c-v,left:r.left+r.width/2-u/2};break;case"e":i={top:r.top+r.height/2-c/2,left:r.left-u-v};
break;case"w":i={top:r.top+r.height/2-c/2,left:r.left+r.width+v}}return 2===t.length&&(i.left="w"==t.charAt(1)?y?r.left+r.width+v:r.left+r.width/2-15:y?r.left-u-v:r.left+r.width/2-u+15),i
}if("in"!==this.hoverState){var n=this.getTitle();if(this.enabled&&n){var s=this.tip(),o=s[0];
s.find(".tipsy-inner")[this.options.html?"html":"text"](n);var l=this.options.className;
o.className="tipsy"+(l?" "+l:""),i||s.remove();var a=o.parentNode;a&&11!==a.nodeType||s.css({top:0,left:0,visibility:"hidden",display:"block"}).appendTo(document.body);
var r,h=this.$element,f=h[0];if("getBoundingClientRect"in f){var p=f.getBoundingClientRect(),d=t(document);
r={left:p.left+d.scrollLeft(),top:p.top+d.scrollTop(),width:p.right-p.left,height:p.bottom-p.top}
}else r=t.extend({},h.offset()),r.width=f.offsetWidth,r.height=f.offsetHeight;var u,c,v=this.options.offset,y=this.options.useCorners,g=this.options.arrowVisible;
if("getBoundingClientRect"in o){var m=o.getBoundingClientRect();u=m.right-m.left,c=m.bottom-m.top
}else u=o.offsetWidth,c=o.offsetHeight;g||(v-=4);var b=this.options.gravity;"function"==typeof b&&(b=b.call(f,{width:u,height:c},e));
var w=e(b);s.addClass("tipsy-"+b+(y&&b.length>1?b.charAt(1):""));var $,S,T=this.options.animate;
if(i&&T>0?S=w:$=w,g){var C=y&&2===b.length;s.find(".tipsy-arrow")[C?"hide":"show"]()
}var N=this.options.fade&&!i;N?($=t.extend($||{},{opacity:0,display:"block",visibility:"visible"}),S=t.extend(S||{},{opacity:this.options.opacity})):$=t.extend($||{},{visibility:"visible",opacity:this.options.opacity}),$&&s.css($),S&&s.stop().animate(S,T>0?T:400),this._prevGravity=b,this.hoverState=null
}else this.hoverState=null,this.hide()}},hide:function(){this.options.fade?this.tip().stop().fadeOut(function(){t(this).remove()
}):this.$tip&&this.tip().remove(),this.hoverState=null},setTitle:function(t){t=null==t?"":""+t,this.$element.attr("original-title",t).removeAttr("title")
},getTitle:function(){var t,e=this.$element,n=this.options;return i(e),"string"==typeof n.title?t=e.attr("title"==n.title?"original-title":n.title):"function"==typeof n.title&&(t=n.title.call(e[0])),t=(""+t).replace(/(^\s*|\s*$)/,""),t||n.fallback
},tip:function(){if(!this.$tip){var i=this.options.className;this.$tip=t('<div class="tipsy'+(i?" "+i:"")+'"></div>'),this.$tip.html(this.options.arrowVisible?'<div class="tipsy-arrow"></div><div class="tipsy-inner"/></div>':'<div class="tipsy-inner"/></div>'),this.$tip.remove()
}return this.$tip},validate:function(){var t=this.$element[0].parentNode;t&&11!==t.nodeType||(this.hide(),this.$element=null,this.options=null)
},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled
}},t.fn.tipsy=function(i,n){function s(n){var s=t.data(n,"tipsy");return s||(s=new e(n,t.fn.tipsy.elementOptions(n,i)),t.data(n,"tipsy",s)),s
}function o(){s(this).enter()}function l(){s(this).leave()}if(i===!0)return this.data("tipsy");
if("string"==typeof i)return this.data("tipsy")[i](n);if(i=t.extend({},t.fn.tipsy.defaults,i),null==i.arrowVisible&&(i.arrowVisible=!i.useCorners),i.live||this.each(function(){s(this)
}),"manual"!=i.trigger){var a=i.live?"live":"bind",r="hover"==i.trigger?"mouseenter":"focus",h="hover"==i.trigger?"mouseleave":"blur";
this[a](r,o)[a](h,l)}return this},t.fn.tipsy.defaults={delayIn:0,delayOut:0,animate:0,fade:!1,fallback:"",gravity:"n",html:!1,live:!1,offset:0,opacity:.8,title:"title",trigger:"hover",useCorners:!1,arrowVisible:null,className:""},t.fn.tipsy.elementOptions=function(i,e){return t.metadata?t.extend({},e,t(i).metadata()):e
},t.fn.tipsy.autoNS=function(){return t(this).offset().top>t(document).scrollTop()+t(window).height()/2?"s":"n"
},t.fn.tipsy.autoWE=function(){return t(this).offset().left>t(document).scrollLeft()+t(window).width()/2?"e":"w"
}}(t),t});