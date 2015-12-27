define([],function(){var t={getCssWrapperClass:function(t){return"pentaho-toggle-button pentaho-toggle-button-up "+(t?"pentaho-toggle-button-vertical":"pentaho-toggle-button-horizontal")
},getSelectedCss:function(t){return"pentaho-toggle-button pentaho-toggle-button-down "+(t?"pentaho-toggle-button-vertical":"pentaho-toggle-button-horizontal")
},getUnselectedCss:function(t){return"pentaho-toggle-button pentaho-toggle-button-up "+(t?"pentaho-toggle-button-vertical":"pentaho-toggle-button-horizontal")
},getExtraCss:function(t,o,n){var e="";return 0==t&&1==o?" pentaho-toggle-button-single":(0==t?e+=" "+(n?" pentaho-toggle-button-vertical-first":" pentaho-toggle-button-horizontal-first"):t==o-1&&(e+=" "+(n?" pentaho-toggle-button-vertical-last":" pentaho-toggle-button-horizontal-last")),e)
},getToggleButtonClass:function(){return"pentaho-toggle-button"},getToggleButtonHoveringClass:function(){return"pentaho-toggle-button-up-hovering"
}};return t});