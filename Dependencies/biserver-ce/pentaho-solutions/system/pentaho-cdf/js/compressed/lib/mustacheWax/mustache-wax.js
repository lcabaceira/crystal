!function(t,e){if("function"==typeof define&&define.amd)define(["mustache"],function(t){e(t)
});else if("undefined"!=typeof exports){var o=require("mustache");e(o)}else e(t.Mustache)
}(this,function(t){t.Formatters={},t.Context.prototype.parseParam=function(t){var e,o,r;
return e=/^[\'\"](.*)[\'\"]$/g,o=/^[+-]?\d+$/g,r=/^[+-]?\d*\.\d+$/g,e.test(t)?t.replace(e,"$1"):o.test(t)?parseInt(t,10):r.test(t)?parseFloat(t):this._lookup(t)
},t.Context.prototype.applyFilter=function(e,o){var r,p,n,s,i=[e];for(r=/^\s*([^\:]+)/g,p=/\:\s*([\'][^\']*[\']|[\"][^\"]*[\"]|[^\:]+)\s*/g,n=r.exec(o),s=n[1].trim();n=p.exec(o);)i.push(this.parseParam(n[1].trim()));
return t.Formatters.hasOwnProperty(s)?(o=t.Formatters[s],o.apply(o,i)):e},t.Context.prototype._lookup=t.Context.prototype.lookup,t.Context.prototype.lookup=function(t){var e,o,r,p;
for(p=t.split("|"),r=p.shift().trim(),r=this._lookup(r),e=0,o=p.length;o>e;++e)r=this.applyFilter(r,p[e]);
return r}});