$.fn.extend({captify:function(i){var i=$.extend({speedOver:"fast",speedOut:"normal",hideDelay:4e3,animation:"slide",prefix:"",opacity:"0.35",className:"caption-bottom",position:"bottom",spanWidth:"100%"},i);
$(this).each(function(){var t=this;$(this).load(function(){if($this=t,this.hasInit)return!1;
this.hasInit=!0;var a,e=0,n=$("#"+$(this).attr("rel")),s=n.length?n.html():$(this).attr("alt");
n.remove();var o=this.parent&&"a"==this.parent.tagName?this.parent:$(this),d=o.wrap("<div></div>").parent();
d.css({overflow:"hidden",padding:0,fontSize:.1}),d.addClass("caption-wrapper"),d.width($(this).width()),d.height($(this).height()),$.map(["top","right","bottom","left"],function(i){d.css("margin-"+i,$(t).css("margin-"+i)),$.map(["style","width","color"],function(a){var e="border-"+i+"-"+a;
d.css(e,$(t).css(e))})}),$(t).css({border:"0 none"});var r=$("<div></div>").addClass("caption-button");
i.hasButton&&o.parent().parent().prepend(r);var p=$("div:last",d.append("<div></div>")).addClass(i.className),h=$("div:last",d.append("<div></div>")).addClass(i.className).append(i.prefix).append(s);
$("*",d).css({margin:0}).show();var c=-1!=navigator.userAgent.toLowerCase().indexOf("msie")?"static":"relative";
if(p.css({zIndex:1,position:c,opacity:"fade"==i.animation?0:i.opacity,width:i.spanWidth}),"bottom"==i.position){var m=parseInt(p.css("border-top-width").replace("px",""))+parseInt(h.css("padding-top").replace("px",""))-1;
h.css("paddingTop",m)}h.css({position:c,zIndex:2,background:"none",border:"1 none",opacity:"fade"==i.animation?1:1,width:i.spanWidth}),p.width(h.outerWidth()),p.height(h.height()),r.width($(t).outerWidth());
var l="bottom"==i.position&&-1!=navigator.userAgent.toLowerCase().indexOf("msie")?-4:0,v="top"==i.position?{hide:-$(t).height()-p.outerHeight()-1,show:-$(t).height()}:{hide:0,show:-p.outerHeight()+l};
h.css("marginTop",-p.outerHeight()),p.css("marginTop",v["fade"==i.animation||"always-on"==i.animation?"show":"hide"]);
var f=function(){if(e){var t="fade"==i.animation?{opacity:0}:{marginTop:v.hide};p.animate(t,250,null,function(){e=!1
}),a.animate(t,250),"fade"==i.animation&&h.animate({opacity:0},i.speedOver,null,function(){e=!1
})}};"always-on"!=i.animation&&$(this).bind("detailsClick",function(t,n){if(!e){e=!0,a=$(n);
var s="fade"==i.animation?{opacity:i.opacity}:{marginTop:v.show};p.animate(s,i.speedOver),a.animate(s,i.speedOver),"fade"==i.animation&&h.animate({opacity:1},i.speedOver/2),window.setTimeout(f,i.hideDelay)
}}),i.bDetails.trigger("capityFinished",[this])})})}});