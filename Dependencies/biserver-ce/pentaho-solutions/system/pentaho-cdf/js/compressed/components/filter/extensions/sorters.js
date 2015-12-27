define(["cdf/lib/jquery","../base/filter-base-implementation"],function(e,t){return e.extend(!0,t.Extensions.Sorters,{selectedOnTop:function(e,t){var n;
return n=e.getSelection()?"A":"Z",n+=t},sameOrder:function(e,t){var n;return n=t},sortAlphabetically:function(e){var t;
return t=e.get("label")},sortByValue:function(e){var t;return t=-e.get("value")||0
}}),t});