SimileAjax.ListenerQueue=function(e){this._listeners=[],this._wildcardHandlerName=e
},SimileAjax.ListenerQueue.prototype.add=function(e){this._listeners.push(e)},SimileAjax.ListenerQueue.prototype.remove=function(e){for(var i=this._listeners,r=0;r<i.length;r++)if(i[r]==e){i.splice(r,1);
break}},SimileAjax.ListenerQueue.prototype.fire=function(e,i){for(var r=[].concat(this._listeners),t=0;t<r.length;t++){var n=r[t];
if(e in n)try{n[e].apply(n,i)}catch(a){SimileAjax.Debug.exception("Error firing event of name "+e,a)
}else if(null!=this._wildcardHandlerName&&this._wildcardHandlerName in n)try{n[this._wildcardHandlerName].apply(n,[e])
}catch(a){SimileAjax.Debug.exception("Error firing event of name "+e+" to wildcard handler",a)
}}};