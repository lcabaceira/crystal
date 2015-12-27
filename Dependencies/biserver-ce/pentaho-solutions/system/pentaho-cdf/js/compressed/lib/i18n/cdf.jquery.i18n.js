define(["../lib/jquery","amd!./jquery.i18n"],function(n){var a,e=n.i18n.properties,r=n.i18n.browserLang;
n.i18n.properties=function(n){(null===n.language||""==n.language||void 0==n.language)&&(n.language=r()),(null===n.language||void 0==n.language)&&(n.language=""),n.language=t(n),a&&e(n)
},n.i18n.browserLang=function(){return null};var t=function(e){var r;return n.ajax({url:(void 0!=e.path?e.path:"")+e.name+"_supported_languages.properties",async:!1,cache:e.cache,contentType:"text/plain;charset="+e.encoding,dataType:"text",success:function(n){r=u(n,e.language),a=!0
},error:function(n){a=!1,404==n.status&&(r=e.language)}}),r},u=function(n,a){var e,r,t;
if(a.length>=2&&(e=a.substring(0,2)),a.length>=5&&(r=a.substring(0,5)),void 0!=n){for(var u=n.split(/\n/),g=0;g<u.length;g++){var i=u[g].substr(0,u[g].indexOf("="));
i==e&&void 0==t&&(t=e),i==r&&(t=r)}return void 0==t&&(t=""),t}};return n});