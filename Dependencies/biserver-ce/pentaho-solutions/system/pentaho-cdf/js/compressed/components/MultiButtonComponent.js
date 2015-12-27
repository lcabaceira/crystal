define(["./MultiButtonComponent.ext","../lib/jquery","./ToggleButtonBaseComponent","../dashboard/Utils"],function(e,t,n,i){var l=n.extend({indexes:[],draw:function(n){this.cachedArray=n;
var l,a=this,s=e.getCssWrapperClass(a.verticalOrientation),r="",o=a.valueAsId?1:0,u=1;
void 0==a.isMultiple&&(a.isMultiple=!1);var c=t("<div>");c.appendTo(a.placeholder().empty());
for(var d=0,g=n.length;g>d;d++){var h,p=n[d][o],v=n[d][u],f=s+e.getExtraCss(d,g,a.verticalOrientation);
p=null==p?null:p.replace('"',"&quot;"),v=null==v?null:v.replace('"',"&quot;"),0==d&&(l=p),r="<div class='"+f+"'><button type='button' name='"+a.name+"'>"+v+"</button  ></div>",h=t(r),function(e){h.click(function(){a.clickButton(a.htmlObject,a.name,e,a.isMultiple,a.verticalOrientation)
})}(d),c.append(h);var x=a.separator;void 0!=x&&null!=x&&"null"!=x&&d!=n.length-1&&c.append(x)
}var m,C=i.ev(a.dashboard.getParameterValue(a.parameter)),b=!1;m=null==C||void 0==C?[]:C instanceof Array||"object"==typeof C&&C.join?C:C.toString().split("|");
var y=!1;a.clearSelections(a.htmlObject,a.name,a.verticalOrientation);for(var d=0;d<n.length;d++){b=!1;
for(var B=0,A=m.length;A>B&&!(b=m[B]==n[d][o]);B++);if((t.isArray(C)&&b||b||n[d][o]==C||n[d][u]==C)&&(a.clickButton(a.htmlObject,a.name,d,a.isMultiple,a.verticalOrientation,!0),y=!0,!a.isMultiple))break
}(!y&&!a.isMultiple||!y&&a.isMultiple&&a.defaultIfEmpty)&&n.length>0&&((null==C||""==C||"object"==typeof C&&0==C.length)&&a.parameter&&a.dashboard.fireChange(a.parameter,a.isMultiple?[l]:l),a.clickButton(a.htmlObject,a.name,0,a.isMultiple,a.verticalOrientation,!0)),t("."+e.getToggleButtonClass()).hover(function(){t(a).addClass(e.getToggleButtonHoveringClass())
},function(){t(a).removeClass(e.getToggleButtonHoveringClass())}),t("."+e.getToggleButtonClass()+" button").hover(function(){t(a).parent().addClass(e.getToggleButtonHoveringClass())
},function(){}),a._doAutoFocus()},getValue:function(){var e=this;if(e.isMultiple){var t=e.getSelectedIndex(e.name),n=new Array;
if(void 0==t.length)n.push(e.getValueByIdx(t));else for(var i=0;i<t.length;i++)n.push(e.getValueByIdx(t[i]));
return n}return e.getValueByIdx(e.getSelectedIndex(e.name))},getValueByIdx:function(e){return this.cachedArray[e][this.valueAsId?1:0]
},clickButton:function(n,i,l,a,s,r){var o=e.getUnselectedCss(s),u=e.getSelectedCss(s),c=t("#"+n+" button");
if(a){void 0==this.indexes[i]?this.indexes[i]=[]:t.isArray(this.indexes[i])||(this.indexes[i]=[this.indexes[i]]);
for(var d=!1,g=0;g<this.indexes[i].length;++g)if(this.indexes[i][g]==l){d=!0,this.indexes[i].splice(g,1);
break}d?c[l].parentNode.className=o+e.getExtraCss(l,c.length,s):(c[l].parentNode.className=u+e.getExtraCss(l,c.length,s),this.indexes[i].push(l))
}else{if(this.indexes[i]===l)return!1;this.clearSelections(n,i,s),this.indexes[i]=l,c[l].parentNode.className=u+e.getExtraCss(l,c.length,s)
}r||this.callAjaxAfterRender(this,i)},clearSelections:function(n,i,l){for(var a=t("#"+n+" button"),s=e.getUnselectedCss(l),r=0;r<a.length;r++)a[r].parentNode.className=s+e.getExtraCss(r,a.length,l);
this.indexes[i]=[]},getSelectedIndex:function(e){return this.indexes[e]}});return l
});