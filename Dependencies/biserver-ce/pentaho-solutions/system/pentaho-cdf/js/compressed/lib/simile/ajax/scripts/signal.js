!function(){for(var substring=SimileAjax.urlPrefix+"scripts/signal.js",heads=document.documentElement.getElementsByTagName("head"),h=0;h<heads.length;h++)for(var node=heads[h].firstChild;null!=node;){if(1==node.nodeType&&"script"==node.tagName.toLowerCase()){var url=node.src,i=url.indexOf(substring);
if(i>=0){heads[h].removeChild(node);var count=parseInt(url.substr(substring.length+1));
if(SimileAjax.loadingScriptsCount-=count,0==SimileAjax.loadingScriptsCount){var f=null;
"string"==typeof SimileAjax_onLoad?(f=eval(SimileAjax_onLoad),SimileAjax_onLoad=null):"function"==typeof SimileAjax_onLoad&&(f=SimileAjax_onLoad,SimileAjax_onLoad=null),null!=f&&f()
}return}}node=node.nextSibling}}();