!function(){var e=["planning.js","units.js","ether-painters.js","labellers.js"],r=[],n=["labellers.js"],t=[],l=["en"];
try{for(var i=function(e){document.write("<script src='"+Timeline.urlPrefix+"ext/planning/scripts/"+e+"' type='text/javascript'></script>")
},s=function(e){document.write("<link rel='stylesheet' href='"+Timeline.urlPrefix+"ext/planning/styles/"+e+"' type='text/css'/>")
},a=0;a<e.length;a++)i(e[a]);for(var a=0;a<r.length;a++)s(r[a]);var c=[],f=function(e){for(var r=0;r<l.length;r++)if(e==l[r])return c[e]=!0,!0;
return!1},u=function(e){if(f(e))return e;var r=e.indexOf("-");return r>0&&f(e.substr(0,r))?e.substr(0,r):null
};u(Timeline.serverLocale),u(Timeline.clientLocale);for(var o=0;o<l.length;o++){var v=l[o];
if(c[v]){for(var a=0;a<n.length;a++)i("l10n/"+v+"/"+n[a]);for(var a=0;a<t.length;a++)s("l10n/"+v+"/"+t[a])
}}}catch(h){alert(h)}}();