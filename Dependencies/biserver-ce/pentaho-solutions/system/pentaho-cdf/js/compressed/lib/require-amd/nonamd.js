define(["module","text"],function(n,r){function i(n,r,i){var t=r.url,u=r.exports,o=r.prescript,f=r.postscript;
return n="define("+e(r)+"  var define = undefined;\n"+(o?"  "+o+"\n":"")+n+"\n"+(f?"  "+f+"\n":"")+(u?"  return "+u+";\n":"")+"});",i||(n+="\n//# sourceURL="+t),n
}function e(n){var r=n.deps;if(r){var i=[],e=[],t=[];for(var u in r)if(r.hasOwnProperty(u)){var o=r[u];
o?(e.push(o),i.push(u)):t.push(u)}for(var f=0;f<t.length;f++)i.push(t[f]);if(i.length)return'["'+i.join('", "')+'"], function('+e.join(", ")+") {\n"
}return"function() {\n"}var t=n.config(),u={};return{load:function(n,e,o,f){var s=e.toUrl(n+".js"),c=t.shim&&t.shim[n]||{};
c.id=n,c.url=s,r.get(s,function(r){r=i(r,c,f.isBuild),f.isBuild&&(u[n]=r),o.fromText(r)
},o.error)},write:function(){}}});