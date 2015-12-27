define("cde/components/AjaxRequestComponent",["cdf/components/BaseComponent","cdf/Logger","cdf/lib/jquery","cdf/dashboard/Utils"],function(e,r,t,a){var o=e.extend({visible:!1,update:function(){this.executeRequest(this)
},parseXML:function(e){if(!e)return null;var t;try{return parser=new DOMParser,t=parser.parseFromString(e,"text/xml")
}catch(a){try{return t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e),t
}catch(a){}}return r.error("XML is invalid or no XML parser found"),null},executeRequest:function(e){var o=this,n=e.url,s=e.ajaxRequestType,i=e.parameters,d=e.asyncCall;
if(void 0==n)return r.error("Fatal - No url passed"),void 0;if(void 0==s&&(s="json"),void 0!=i){for(var u=!1,c=0;c<i.length;c++){var l;
"time"==i[c][0]?(l=(new Date).getTime(),u=!0):l=o.dashboard.getParameterValue(i[c][0]),i[c][1]=l
}u?i.push(["time",(new Date).getTime()]):0,i=a.propertiesArrayToObject(i)}else i={};
void 0==d&&(d=!0),t.ajax({url:n,type:"GET",dataType:s,async:d,data:i,complete:function(a){var n=a.responseText,s=void 0;
if(void 0==n)return r.error("Found error: Empty Data"),void 0;if("xml"==this.dataType||"html"==this.dataType){var i;
try{parser=new DOMParser,i=parser.parseFromString(n,"text/xml")}catch(d){try{i=new ActiveXObject("Microsoft.XMLDOM"),i.async="false",i.loadXML(n),n=i
}catch(d){r.error("XML is invalid or no XML parser found")}}n=i;var u=n.getElementsByTagName("return");
if(!(u.length>0&&u[0].firstChild))return;n=u[0].firstChild.nodeValue,n=t.parseJSON(n)
}else if("json"==this.dataType)n=t.parseJSON(n);else if("script"!=this.dataType&&"text"!=this.dataType)return r.error("Found error: Unknown returned format"),void 0;
"function"==typeof e.postFetch&&(s=e.postFetch(n)),void 0!=s&&(n=s),void 0!=e.resultvar&&o.dashboard.fireChange(e.resultvar,n)
},error:function(e,t,a){r.error("Found error: "+e+" - "+t+", Error: "+a)}})}});return o
});