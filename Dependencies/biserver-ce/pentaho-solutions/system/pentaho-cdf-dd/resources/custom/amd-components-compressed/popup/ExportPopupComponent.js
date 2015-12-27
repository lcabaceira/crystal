define("cde/components/PopupComponent",["cdf/components/BaseComponent","cdf/lib/jquery","css!./PopupComponent"],function(t,e){var a=1,o=t.extend({ph:void 0,arrow:void 0,content:void 0,cancel:void 0,$overlay:void 0,popupClass:void 0,popupOverlayClass:void 0,horizontalScroll:void 0,verticalScroll:void 0,update:function(){var t=this;
this.content=e("#"+this.htmlObject).detach(),this.ph=this.ph?this.ph.empty():e("<div>").appendTo(e("body")),this.content.appendTo(this.ph),this.ph.hide(),this.ph.addClass("popupComponent"),this.popupClass&&this.ph.addClass(this.popupClass),this.cancel=e("<a>&nbsp;</a>"),this.cancel.addClass("close").click(function(){t.hide()
}),this.cancel.appendTo(this.ph),this.arrow=e("<div class='arrow'>").appendTo(this.ph),this.content.removeClass("hidePopup")
},clone:function(t,o,i){var n=this.base(t,o,i);return n.ph=this.ph.clone(),n.ph.insertAfter(this.ph),n.ph.hide(),n.ph.find("[id]").each(function(t,o){var n=e(o),r=n.attr("id");
r&&r in i?n.attr("id",i[r]):n.attr("id",r+"_"+a++)}),n},popup:function(t,a){var o,i=t.offset(),n={top:"auto",bottom:"auto",left:"auto",right:"auto"},r=20,h=12,p=45,s=this.ph.outerHeight(),c=this.ph.outerWidth();
a=a||this.gravity;var d="undefined"==typeof this.draggable?!0:this.draggable;this.horizontalScroll&&e("#"+this.htmlObject).css("overflow-x","scroll"),this.verticalScroll&&e("#"+this.htmlObject).css("overflow-y","scroll");
var l="undefined"==typeof this.closeOnClickOutside?!1:this.closeOnClickOutside;this.arrow.css({top:"",left:"",bottom:"",right:""}),this.arrow.show(),this.ph.removeClass("north south east west");
var u,C,m,f=r,v=e(document).width()-r,g=r,x=e(document).height()-r;switch(a){case"N":m=parseInt(t.css("padding-top").replace(/(.*)px/,"$1"),10),n.left=this.center(t.outerWidth(),c,i.left,f,v),C="ownerSVGElement"in t[0]?t.attr("height")?t.attr("height")-0:0:t.height(),o=i.left-n.left-this.ph.css("border-top-width").replace(/(.*)px/,"$1"),n.top=this.offset(C,s,i.top+m,h,g,x,"near"),this.arrow.css("left",this.center(t.outerWidth(),p,o,0,c)),this.ph.addClass(n.top<i.top?"north":"south");
break;case"S":m=parseInt(t.css("padding-top").replace(/(.*)px/,"$1"),10),C="ownerSVGElement"in t[0]?t.attr("height")?t.attr("height")-0:0:t.height(),n.left=this.center(t.outerWidth(),c,i.left,f,v),n.top=this.offset(C,s,i.top+m,h,g,x,"far"),o=i.left-n.left-this.ph.css("border-top-width").replace(/(.*)px/,"$1"),this.arrow.css("left",this.center(t.outerWidth(),p,o,0,c)),this.ph.addClass(n.top<i.top?"north":"south");
break;case"W":m=parseInt(t.css("padding-left").replace(/(.*)px/,"$1"),10),n.top=this.center(t.outerHeight(),s,i.top,g,x),u="ownerSVGElement"in t[0]?t.attr("width")?t.attr("width")-0:0:t.width(),n.left=this.offset(t.width(),c,i.left+m,h,f,v,"near"),o=i.top-n.top-this.ph.css("border-left-width").replace(/(.*)px/,"$1"),this.arrow.css("top",this.center(t.outerHeight(),p,o,0,s)),this.ph.addClass(n.left<i.left?"west":"east");
break;case"E":m=parseInt(t.css("padding-left").replace(/(.*)px/,"$1"),10),n.top=this.center(t.outerHeight(),s,i.top,g,x),u="ownerSVGElement"in t[0]?t.attr("width")?t.attr("width")-0:0:t.width(),n.left=this.offset(u,c,i.left+m,h,f,v,"far"),o=i.top-n.top-this.ph.css("border-left-width").replace(/(.*)px/,"$1"),this.arrow.css("top",this.center(t.outerHeight(),p,o,0,s)),this.ph.addClass(n.left<i.left?"west":"east")
}this.ph.css(n),this.ph.show();var b,w=this;b=function(t){27==t.which&&(w.ph.hide(),e(document).unbind("keydown",b))
},e(document).keydown(b);var y=function(){w.arrow.hide()};this.ph.bind("drag",y),d&&this.ph.draggable({cancel:"#"+this.htmlObject});
var E,k;this.ph.bind("touchstart",function(t){E=w.ph.offset(),k={left:t.originalEvent.touches[0].pageX,top:t.originalEvent.touches[0].pageY}
}),this.ph.bind("touchmove",function(t){var e={top:E.top+t.originalEvent.touches[0].pageY-k.top,left:E.left+t.originalEvent.touches[0].pageX-k.left};
w.ph.offset(e),w.arrow.hide(),t.preventDefault()}),l&&(this.$overlay||(this.$overlay=e('<div id="popupComponentOverlay"></div>'),this.popupOverlayClass&&this.$overlay.addClass(this.popupOverlayClass)),this.$overlay.appendTo("body").click(function(t){t.stopPropagation(),w.hide()
})),e("body").addClass("draggable-popup-fix")},hide:function(){this.ph.hide(),this.$overlay&&(this.$overlay.unbind("click"),this.$overlay.detach()),e("body").removeClass("draggable-popup-fix")
},center:function(t,e,a,o,i){var n=a+t/2-e/2;return n+e>i?i-e:o>n?o:n},offset:function(t,e,a,o,i,n,r){var h=a-e-o,p=a+t+o,s=h>i,c=n>p+e;
return"near"==r?s||!c?h:p:"far"==r?c||!s?p:h:h}});return o}),define("cdf/components/CggComponent.ext",[],function(){var t={getCggDrawUrl:function(){return CONTEXT_PATH+"plugin/cgg/api/services/draw"
}};return t}),define("cde/components/ExportPopupComponent",["./PopupComponent","cdf/components/CggComponent.ext","cdf/dashboard/Utils","cdf/Logger","cdf/lib/jquery","amd!cdf/lib/jquery.fancybox","css!./ExportPopupComponent"],function(t,e,a,o,i){var n=t.extend({ph:void 0,arrow:void 0,content:void 0,cancel:void 0,dataComponent:void 0,chartComponent:void 0,baseSize:200,scalingFactor:1.5,clone:function(t,e,a){var o=this.dataComponent,i=this.chartComponent;
delete this.dataComponent,delete this.chartComponent;var n=this.base(t,e,a);if(o&&(this.dataComponent=o,n.dataComponent=e[o.name]||o),i){this.chartComponent=i;
var r=/render_(.*)/.test(i.name)?i.name.match(/render_(.*)/)[1]:null;e[i.name]?(n.chartComponent=this.dashboard.getComponentByName(e[i.name]),n.chartExportComponent=e[i.name]):r&&e[r]?(n.chartComponent=this.dashboard.getComponentByName("render_"+e[r]),n.chartExportComponent=e[r]):n.chartComponent=i,n.chartComponent=e[i.name]||i
}return n},update:function(){var t=this;t.ph&&t.ph.remove(),t.chartComponent=t.dashboard.getComponentByName("render_"+t.chartExportComponent),t.dataComponent=t.dashboard.getComponentByName("render_"+t.dataExportComponent),t.ph=i("<div>"),i("#"+t.htmlObject).empty();
var e=i('<div class="popupTitle">');if(e.text(t.title||"Export"),e.click(function(a){t.popup(e),a.stopPropagation()
}),i("#"+t.htmlObject).append(e),t.chartComponent){var a="Export Chart";t.chartExportLabel&&t.chartExportLabel.length>0&&(a=t.chartExportLabel);
var o=i('<div class="exportElement">');o.text(a),o.click(function(){t.exportChart()
}),o.appendTo(t.ph)}if(t.dataComponent){var n="Export Data";t.dataExportLabel&&t.dataExportLabel.length>0&&(n=t.dataExportLabel);
var r=i('<div class="exportElement">');r.text(n),r.click(function(){t.exportData()
}),r.appendTo(t.ph)}i(t.contentLinks).each(function(e,a){var o=i('<div class="exportElement">');
o.text(a[0]),o.click(a[1]),o.appendTo(t.ph)}),t.ph.hide().appendTo(i("body")),t.ph.addClass("popupComponent"),t.ph.addClass("exportOptions"),t.cancel=i("<a>&nbsp;</a>"),t.cancel.addClass("close").click(function(){t.hide()
}),t.cancel.appendTo(t.ph),t.arrow=i("<div class='arrow'>").appendTo(t.ph)},popup:function(t,e){var a=this;
a.base(t,e);var o=function(t){var e=t.pageX,n=t.pageY,r=i("#"+a.htmlObject).position();
(e<r.left||e>r.left+i("#"+a.htmlObject).width()||n<r.top||n>r.top+i("#"+a.htmlObject).height())&&(a.hide(),i(document).unbind("click",o))
};i(document).click(o)},exportData:function(t){var e=void 0==t?this.dataExportType:t;
o.log("Exporting to "+e);for(var a=this.dataComponent.parameters.slice(),i=0;i<a.length;i++)if("metadata"===a[i][0]){a[i]=a[i].slice(),a[i][1]="false";
break}var n=this.dataComponent.chartDefinition||this.dataComponent.queryDefinition,r=this.dashboard.getQuery(n);
r.exportData(e,a,{filename:this.dataExportAttachmentName+"."+e})},getExportChartOptions:function(){for(var t=this.dashboard.context.fullPath?this.dashboard.context.fullPath.replace(/[^\/]+$/,""):this.dashboard.context.path.replace(/[^\/]+$/,""),e={outputType:this.chartExportType,script:t+this.chartExportComponent+".js"},i=this.chartComponent.parameters,n=0,r=i.length;r>n;n++){var h=i[n][0],p=i[n][1],s=a.ev(this.dashboard.getParameterValue(p));
void 0!==s&&(e["param"+h]="metadata"!=h?s:"false")}var c=o.debug;return c>1&&(e.paramdebug=!0,e.paramdebugLevel=c),e
},getExportChartUrl:function(t){return e.getCggDrawUrl()+"?"+i.param(t)},exportChart:function(){var t=this.getExportChartOptions();
o.log("Exporting to "+t.outputType);var e=this.getExportChartUrl(t),a=this,n=i('<div class="exportChartMasterDiv">'),r=Math.max(800,this.chartComponent.chartDefinition.width),h=i("<div class='exportChartPopupButtons'>");
n.append(h);var p=i("<div class='exportChartTitle'>Export Options</div>");h.append(p);
var s=i("<div class='exportChartPopupButton exportChartButtonNotLast'>Small</div>");
s.click(function(){i(".exportChartPopupButtonClicked").each(function(t,e){i(e).removeClass("exportChartPopupButtonClicked")
}),i(this).addClass("exportChartPopupButtonClicked"),i("#width").attr("disabled",!0),i("#height").attr("disabled",!0),i("#width").val(a.baseSize),i("#height").val(a.baseSize*(a.chartComponent.chartDefinition.height/a.chartComponent.chartDefinition.width))
}),h.append(s);var c=i("<div class='exportChartPopupButton exportChartButtonNotLast exportChartButtonMiddle'>Medium</div>");
c.click(function(){i(".exportChartPopupButtonClicked").each(function(t,e){i(e).removeClass("exportChartPopupButtonClicked")
}),i(this).addClass("exportChartPopupButtonClicked"),i("#width").attr("disabled",!0),i("#height").attr("disabled",!0);
var t=a.baseSize*a.scalingFactor;i("#width").val(t),i("#height").val(t*(a.chartComponent.chartDefinition.height/a.chartComponent.chartDefinition.width))
}),c.getComponentData=function(){return[a.chartComponent.chartDefinition.width,a.chartComponent.chartDefinition.height]
},h.append(c);var d=i("<div class='exportChartPopupButton exportChartButtonNotLast exportChartButtonMiddle'>Large</div>");
d.click(function(){i(".exportChartPopupButtonClicked").each(function(t,e){i(e).removeClass("exportChartPopupButtonClicked")
}),i(this).addClass("exportChartPopupButtonClicked"),i("#width").attr("disabled",!0),i("#height").attr("disabled",!0);
var t=a.baseSize*a.scalingFactor*a.scalingFactor;i("#width").val(t),i("#height").val(t*(a.chartComponent.chartDefinition.height/a.chartComponent.chartDefinition.width))
}),h.append(d);var l=i("<div class='exportChartPopupButton exportChartButtonMiddle'>Custom</div>");
l.click(function(){i(".exportChartPopupButtonClicked").each(function(t,e){i(e).removeClass("exportChartPopupButtonClicked")
}),i(this).addClass("exportChartPopupButtonClicked"),i("#width").removeAttr("disabled"),i("#height").removeAttr("disabled"),i("#width").val(a.chartComponent.chartDefinition.width),i("#height").val(a.chartComponent.chartDefinition.height)
}),h.append(l);var u=i("<div class='exportChartInput'>&nbsp;&nbsp;&gt;&nbsp;&nbsp;&nbsp;Width:&nbsp;<input id='width' disabled='true' value='"+this.chartComponent.chartDefinition.width+'\' onChange=\'javascript:$("#height").val($("#width").val() * '+a.chartComponent.chartDefinition.height/a.chartComponent.chartDefinition.width+");' type='text'></div>");
h.append(u);var C=i("<div class='exportChartInput'>Height:&nbsp;</span><input id='height' disabled='true' value='"+this.chartComponent.chartDefinition.height+"' type='text'></div>");
h.append(C);var m=i("<div class='exportChartPopupButton exportChartOkButton'>Export</div>");
m.click(function(){var t,o;switch(i(".exportChartPopupButtonClicked").text()){case"Small":t=[a.baseSize,a.BaseSize*(a.chartComponent.chartDefinition.height/a.chartComponent.chartDefinition.width)];
break;case"Medium":o=a.baseSize*a.scalingFactor,t=[o,o*(a.chartComponent.chartDefinition.height/a.chartComponent.chartDefinition.width)];
break;case"Large":o=a.baseSize*a.scalingFactor*a.scalingFactor,t=[o,o*(a.chartComponent.chartDefinition.height/a.chartComponent.chartDefinition.width)];
break;case"Custom":default:t=[i("#width").val(),i("#height").val()]}var n=i('<iframe style="display:none">');
n.detach(),n[0].src=e+"&attachmentName="+a.dataExportAttachmentName+"."+a.chartExportType+"&paramwidth="+t[0]+"&paramheight="+t[1],n.appendTo(i("body"))
}),h.append(m);var f=i("<img src='"+e+"&paramwidth="+this.chartComponent.chartDefinition.width+"&paramheight="+this.chartComponent.chartDefinition.height+"'/>"),v=i("<div class='exportChartImageDiv'>");
v.append(f),v.append("&nbsp;"),n.append(v);var g=i('<div class="exportChartMasterDivHolder">');
g.append(n),i.fancybox({type:"html",closeBtn:!0,content:g,width:r,height:this.chartComponent.chartDefinition.height+60,autoDimensions:!1})
}});return n});