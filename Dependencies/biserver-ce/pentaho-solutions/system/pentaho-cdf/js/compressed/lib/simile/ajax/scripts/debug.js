SimileAjax.Debug={silent:!1},SimileAjax.Debug.log=function(e){var i;i="console"in window&&"log"in window.console?function(e){console.log(e)
}:function(e){SimileAjax.Debug.silent||alert(e)},SimileAjax.Debug.log=i,i(e)},SimileAjax.Debug.warn=function(e){var i;
i="console"in window&&"warn"in window.console?function(e){console.warn(e)}:function(e){SimileAjax.Debug.silent||alert(e)
},SimileAjax.Debug.warn=i,i(e)},SimileAjax.Debug.exception=function(e,i){var n,o=SimileAjax.parseURLParameters();
n="throw"==o.errors||"throw"==SimileAjax.params.errors?function(e){throw e}:"console"in window&&"error"in window.console?function(e,i){throw null!=i?console.error(i+" %o",e):console.error(e),e
}:function(e,i){throw SimileAjax.Debug.silent||alert("Caught exception: "+i+"\n\nDetails: "+("description"in e?e.description:e)),e
},SimileAjax.Debug.exception=n,n(e,i)},SimileAjax.Debug.objectToString=function(e){return SimileAjax.Debug._objectToString(e,"")
},SimileAjax.Debug._objectToString=function(e,i){var n=i+" ";if("object"==typeof e){var o="{";
for(r in e)o+=n+r+": "+SimileAjax.Debug._objectToString(e[r],n)+"\n";return o+=i+"}"
}if("array"==typeof e){for(var o="[",r=0;r<e.length;r++)o+=SimileAjax.Debug._objectToString(e[r],n)+"\n";
return o+=i+"]"}return e};