define(["module"],function(n){var i=n.config?n.config():{};return{version:"0.0.1",load:function(n,o,e,f){f=f||{},f.isBuild?e():o([i.endpoint+n],function(n){e(n)
})}}});