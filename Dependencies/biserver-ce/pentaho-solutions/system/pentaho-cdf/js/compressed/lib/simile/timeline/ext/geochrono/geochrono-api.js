!function(){var e=["geochrono.js","units.js","ether-painters.js","labellers.js"],r=[],t=["labellers.js"],n=[],l=["en"];
try{for(var i=function(e){document.write("<script src='"+Timeline.urlPrefix+"ext/geochrono/scripts/"+e+"' type='text/javascript'></script>")
},s=function(e){document.write("<link rel='stylesheet' href='"+Timeline.urlPrefix+"ext/geochrono/styles/"+e+"' type='text/css'/>")
},o=0;o<e.length;o++)i(e[o]);for(var o=0;o<r.length;o++)s(r[o]);var c=[],a=function(e){for(var r=0;r<l.length;r++)if(e==l[r])return c[e]=!0,!0;
return!1},f=function(e){if(a(e))return e;var r=e.indexOf("-");return r>0&&a(e.substr(0,r))?e.substr(0,r):null
};f(Timeline.serverLocale),f(Timeline.clientLocale);for(var u=0;u<l.length;u++){var h=l[u];
if(c[h]){for(var o=0;o<t.length;o++)i("l10n/"+h+"/"+t[o]);for(var o=0;o<n.length;o++)s("l10n/"+h+"/"+n[o])
}}}catch(v){alert(v)}}();