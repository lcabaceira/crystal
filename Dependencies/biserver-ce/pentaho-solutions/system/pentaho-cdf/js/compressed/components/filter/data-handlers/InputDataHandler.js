define(["cdf/lib/jquery","amd!cdf/lib/underscore","../baseevents/baseeventsModel","../base/filter-base-implementation"],function(e,t,n,a){var r,i,o;
return r=function(e,t){var n;return n={},null!=(null!=e?e.pageStart:void 0)&&(n={page:Math.floor(parseInt(e.pageStart)/t)}),n
},o=function(n,a){var r;return t.isObject(a)||(a={}),r=function(r){return t.map(r,function(r){var i;
return i={id:r[n.id],label:r[n.label]},t.isFinite(n.value)&&n.value>=0&&(i.value=r[n.value]),i=e.extend(!0,i,a)
})}},i=function(e,t){var n;return n=function(n,a){var r;return r={id:null!=a?n[0][e.parentId]:void 0,label:n[0][e.parentLabel],nodes:o(e,t)(n)}
}},a.DataHandlers.Input=n.extend(a.Logger).extend({ID:"BaseFilter.DataHandlers.Input",getModel:function(){return this.get("model")
},updateModel:function(e){var n,a,r;return t.isArray(e)?this._updateModelFromBidimensionalArray(e):this.isCdaJson(e)?this._updateModelFromCdaJson(e):this._updateModelJson(e),n=this.get("model"),n.set("isBusy",!1),n.set("isDisabled",null===this.get("model").children()),a=this.get("options"),(null!=(r=a.hooks)?r.postUpdate:void 0)&&t.each(a.hooks.postUpdate,function(e){return e.call(null,null,n,a)
}),this.trigger("postUpdate",n),this},_updateModelFromCdaJson:function(n){var a,l,s,d,u,p,h;
return s=e.extend(!0,{},this.get("options")),d=r(n.queryInfo,s.query.getOption("pageSize")),t.chain(s.indexes).map(t.identity).max().value()<n.metadata.length?a=t.chain(n.resultset).groupBy(function(e){return e[s.indexes.parentId]
}).map(i(s.indexes,d)).value():(a=o(s.indexes,d)(n.resultset),null!=(null!=(u=s.root)?u.id:void 0)&&(this.info("Setting root id to: "+s.root.id),this.get("model").set("id",s.root.id))),this.get("model").add(a),l=null!=(null!=(p=n.queryInfo)?p.pageStart:void 0)?parseInt(n.queryInfo.totalRows):void 0,h=s.query.getOption("searchPattern"),t.isEmpty(h)&&this.get("model").set("numberOfItemsAtServer",l),this
},_updateModelFromJson:function(){return this},_updateModelFromBidimensionalArray:function(e){var t,n;
return n={id:0,label:1,value:void 0},t=o(n)(e),this.get("model").add(t),this},isCdaJson:function(e){var n;
return n=!1,t.isObject(e)&&t.isArray(e.resultset)&&t.isArray(e.metadata)&&(n=!0),n
},setValue:function(e){return this.get("model").setSelectedItems(e),this.trigger("setValue",e),this
},injectFakeData:function(e,n){var a;return a=function(e,n){return[{label:e,id:n+".all",value:Math.pow(10,n-1)+t.random(Math.pow(10,n)),nodes:t.map(t.range(Math.pow(10,n)),function(e){var a;
return a={label:"Item "+n+"."+e,value:t.random(100),id:n+"."+e}})}]},this.get("model").add(a(e,n))
}}),a});