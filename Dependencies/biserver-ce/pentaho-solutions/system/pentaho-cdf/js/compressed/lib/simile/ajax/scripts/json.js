SimileAjax.JSON=new Object,function(){var m={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},s={array:function(n){var t,r,e,i,o=["["],u=n.length;
for(e=0;u>e;e+=1)i=n[e],r=s[typeof i],r&&(i=r(i),"string"==typeof i&&(t&&(o[o.length]=","),o[o.length]=i,t=!0));
return o[o.length]="]",o.join("")},"boolean":function(n){return String(n)},"null":function(){return"null"
},number:function(n){return isFinite(n)?String(n):"null"},object:function(n){if(n){if(n instanceof Array)return s.array(n);
var t,r,e,i,o=["{"];for(e in n)i=n[e],r=s[typeof i],r&&(i=r(i),"string"==typeof i&&(t&&(o[o.length]=","),o.push(s.string(e),":",i),t=!0));
return o[o.length]="}",o.join("")}return"null"},string:function(n){return/["\\\x00-\x1f]/.test(n)&&(n=n.replace(/([\x00-\x1f\\"])/g,function(n,t){var r=m[t];
return r?r:(r=t.charCodeAt(),"\\u00"+Math.floor(r/16).toString(16)+(r%16).toString(16))
})),'"'+n+'"'}};SimileAjax.JSON.toJSONString=function(n){return n instanceof Object?s.object(n):n instanceof Array?s.array(n):n.toString()
},SimileAjax.JSON.parseJSON=function(){try{return!/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(this.replace(/"(\\.|[^"\\])*"/g,""))&&eval("("+this+")")
}catch(e){return!1}}}();