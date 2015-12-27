define(["amd!cdf/lib/underscore","amd!cdf/lib/backbone","cdf/components/BaseComponent"],function(n,e,t){function r(n){return t.extend.apply(n,d(arguments))
}function u(n){return r(n,{},{extend:t.extend})}function s(n){return r(n,e.Events)
}function c(n){return r(s(u(n)),arguments[1],arguments[2])}var d=n.rest,o=c(t);return o.extendClass=r,o.convertClass=c,o.extendWithEvents=c,o
});