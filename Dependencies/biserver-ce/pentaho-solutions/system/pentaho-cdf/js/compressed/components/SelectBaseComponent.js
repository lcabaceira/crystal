define(["./InputBaseComponent","../Logger","../lib/jquery","amd!../lib/underscore","../dashboard/Utils","amd!../lib/jquery.chosen","amd!../lib/jquery.multiselect","amd!../lib/jquery.select2"],function(e,t,a,s,n){var i=e.extend({visible:!1,draw:function(e){var s=this.placeholder();
if(0===s.length)return t.warn("Placeholder not in DOM - Will not draw"),!1;var i=this.name,l="<select",r=this._allowMultipleValues();
r&&(l+=" multiple");var o=this._getPlaceholderText();o&&(l+=" data-placeholder='"+o+"'");
var u=this._getListSize(e);null!=u&&(l+=" size='"+u+"'",e.length>u&&(l+=" style='overflow-y: scroll;' "));
var c=this.externalPlugin;switch(c){case"chosen":l+=" class='chzn-select'";break;
case"hynds":l+=" class='hynds-select'";break;case"select2":l+=" class='select2-container'"
}l+=">";var h,d=this._getParameterValue(),g=n.parseMultipleValues(d),p={};n.eachValuesArray(e,{valueAsId:this.valueAsId},function(e,t,a,s){l+="<option value = '"+n.escapeHtml(e)+"' >"+n.escapeHtml(t)+"</option>",s||(h=e),p[e]=!0
},this),l+="</select>",s.html(l);var f=!0;if(null!=g){for(var m=g.length;m--;)p[g[m]]!==!0&&(f=!1,g.splice(m,1));
g.length||(g=null)}var v=null==g,b=!f;switch(v&&this.defaultIfEmpty&&null!=h&&(g=[h],b=!0),a("select",s).val(null==g?[]:g),r&&(null!=this.autoTopValue?(this.topValue(this.autoTopValue),delete this.autoTopValue):null!=this.autoTopIndex&&(this.topIndex(this.autoTopIndex),delete this.autoTopIndex)),this._doAutoFocus(),b&&(this.dashboard.setParameter(this.parameter,g),this.dashboard.processChange(i)),c){case"chosen":var w=a.browser;
a.browser="",s.find("select.chzn-select").chosen(this._readExtraOptions()),a.browser=w;
break;case"hynds":s.find("select.hynds-select").multiselect({multiple:r});break;case"select2":var x=this._readExtraOptions()||{};
"undefined"==typeof x.dropdownAutoWidth&&(x.dropdownAutoWidth=!0),x.width||(x.width="off"),s.find("select.select2-container").select2(x)
}this._listenElement(s)},_allowMultipleValues:function(){return!1},_getPlaceholderText:function(){var e=this.placeholderText;
return s.isString(e)&&!s.isEmpty(e)&&e||!1},_getListSize:function(){return this.size
},_readExtraOptions:function(){return this.externalPlugin&&this.extraOptions?n.propertiesArrayToObject(this.extraOptions):void 0
},_listenElement:function(e){var t,s=this,i=s.getValue(),l=function(){t&&t();var e=s.dashboard;
if(e){var a=s.getValue();n.equalValues(i,a)||(i=a,e.processChange(s.name))}},r=a("select",e);
r.keypress(function(e){13===e.which&&l()});var o=this._getChangeMode();if("timeout-focus"!==o)r.on(s._changeTrigger(),l);
else{var u=s.changeTimeoutScrollFraction;u=Math.max(0,null!=u?u:1);var c=s.changeTimeoutChangeFraction;
c=Math.max(0,null!=c?c:5/8);var h,d=Math.max(100,s.changeTimeout||2e3),g=u*d,p=c*d;
t=function(){null!=h&&(clearTimeout(h),h=null)};var f=function(e){t(),s.dashboard&&(h=setTimeout(l,e||d))
};r.change(function(){f(p)}).scroll(function(){f(g)}).focusout(l)}},_getChangeMode:function(){var e=this.changeMode;
if(e)switch(e=e.toLowerCase()){case"immediate":case"focus":return e;case"timeout-focus":return/android|ipad|iphone/i.test(navigator.userAgent)?"focus":e;
default:t.log("Invalid 'changeMode' value: '"+e+"'.","warn")}return"immediate"},_changeTrigger:function(){return"immediate"===this._getChangeMode()?"change":/android/i.test(navigator.userAgent)?"change":"focusout"
}});return i});