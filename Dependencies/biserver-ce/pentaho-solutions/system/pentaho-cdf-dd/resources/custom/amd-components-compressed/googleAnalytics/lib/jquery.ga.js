!function(t){t.ga={},t.ga.load=function(n,o){jQuery.ajax({type:"GET",url:("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js",cache:!0,success:function(){if(void 0==typeof _gat)throw"_gat has not been defined";
a=_gat._createTracker(n),e(),t.isFunction(o)&&o(a),a._trackPageview()},dataType:"script",data:null})
};var a,e=function(){if(n())throw"pageTracker has not been defined";for(var e in a)"_"==e.charAt(0)&&(t.ga[e.substr(1)]=a[e])
},n=function(){return void 0==a}}(jQuery);