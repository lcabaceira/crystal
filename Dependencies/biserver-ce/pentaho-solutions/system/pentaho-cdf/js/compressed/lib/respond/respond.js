!function(e){function t(){E(!0)}var a={};e.respond=a,a.update=function(){};var n=[],r=function(){var t=!1;
try{t=new e.XMLHttpRequest}catch(a){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t
}}(),s=function(e,t){var a=r();a&&(a.open("GET",e,!0),a.onreadystatechange=function(){4!==a.readyState||200!==a.status&&304!==a.status||t(a.responseText)
},4!==a.readyState&&a.send(null))};if(a.ajax=s,a.queue=n,a.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,maxw:/\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/},a.mediaQueriesSupported=e.matchMedia&&null!==e.matchMedia("only all")&&e.matchMedia("only all").matches,!a.mediaQueriesSupported){var i,o,l,m=e.document,d=m.documentElement,h=[],u=[],f=[],c={},p=30,g=m.getElementsByTagName("head")[0]||d,y=m.getElementsByTagName("base")[0],x=g.getElementsByTagName("link"),v=function(){var e,t=m.createElement("div"),a=m.body,n=d.style.fontSize,r=a&&a.style.fontSize,s=!1;
return t.style.cssText="position:absolute;font-size:1em;width:1em",a||(a=s=m.createElement("body"),a.style.background="none"),d.style.fontSize="100%",a.style.fontSize="100%",a.appendChild(t),s&&d.insertBefore(a,d.firstChild),e=t.offsetWidth,s?d.removeChild(a):a.removeChild(t),d.style.fontSize=n,r&&(a.style.fontSize=r),e=l=parseFloat(e)
},E=function(t){var a="clientWidth",n=d[a],r="CSS1Compat"===m.compatMode&&n||m.body[a]||n,s={},c=x[x.length-1],y=(new Date).getTime();
if(t&&i&&p>y-i)return e.clearTimeout(o),o=e.setTimeout(E,p),void 0;i=y;for(var w in h)if(h.hasOwnProperty(w)){var S=h[w],T=S.minw,$=S.maxw,z=null===T,b=null===$,C="em";
T&&(T=parseFloat(T)*(T.indexOf(C)>-1?l||v():1)),$&&($=parseFloat($)*($.indexOf(C)>-1?l||v():1)),S.hasquery&&(z&&b||!(z||r>=T)||!(b||$>=r))||(s[S.media]||(s[S.media]=[]),s[S.media].push(u[S.rules]))
}for(var R in f)f.hasOwnProperty(R)&&f[R]&&f[R].parentNode===g&&g.removeChild(f[R]);
f.length=0;for(var O in s)if(s.hasOwnProperty(O)){var M=m.createElement("style"),k=s[O].join("\n");
M.type="text/css",M.media=O,g.insertBefore(M,c.nextSibling),M.styleSheet?M.styleSheet.cssText=k:M.appendChild(m.createTextNode(k)),f.push(M)
}},w=function(e,t,n){var r=e.replace(a.regex.keyframes,"").match(a.regex.media),s=r&&r.length||0;
t=t.substring(0,t.lastIndexOf("/"));var i=function(e){return e.replace(a.regex.urls,"$1"+t+"$2$3")
},o=!s&&n;t.length&&(t+="/"),o&&(s=1);for(var l=0;s>l;l++){var m,d,f,c;o?(m=n,u.push(i(e))):(m=r[l].match(a.regex.findStyles)&&RegExp.$1,u.push(RegExp.$2&&i(RegExp.$2))),f=m.split(","),c=f.length;
for(var p=0;c>p;p++)d=f[p],h.push({media:d.split("(")[0].match(a.regex.only)&&RegExp.$2||"all",rules:u.length-1,hasquery:d.indexOf("(")>-1,minw:d.match(a.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:d.match(a.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})
}E()},S=function(){if(n.length){var t=n.shift();s(t.href,function(a){w(a,t.href,t.media),c[t.href]=!0,e.setTimeout(function(){S()
},0)})}},T=function(){for(var t=0;t<x.length;t++){var a=x[t],r=a.href,s=a.media,i=a.rel&&"stylesheet"===a.rel.toLowerCase();
r&&i&&!c[r]&&(a.styleSheet&&a.styleSheet.rawCssText?(w(a.styleSheet.rawCssText,r,s),c[r]=!0):(!/^([a-zA-Z:]*\/\/)/.test(r)&&!y||r.replace(RegExp.$1,"").split("/")[0]===e.location.host)&&("//"===r.substring(0,2)&&(r=e.location.protocol+r),n.push({href:r,media:s})))
}S()};T(),a.update=T,a.getEmValue=v,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t)
}}(this);