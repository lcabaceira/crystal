define(["../dashboard/Dashboard.ext","../lib/jquery"],function(e,r){var n={getDoQuery:function(){return e.getPluginBase("cda")+"/doQuery?"
},getUnwrapQuery:function(n){return e.getPluginBase("cda")+"/unwrapQuery?"+r.param(n)
}};return n});