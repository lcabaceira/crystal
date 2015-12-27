SimileAjax.History={maxHistoryLength:10,historyFile:"__history__.html",enabled:!1,_initialized:!1,_listeners:new SimileAjax.ListenerQueue,_actions:[],_baseIndex:0,_currentIndex:0,_plainDocumentTitle:document.title},SimileAjax.History.formatHistoryEntryTitle=function(i){return SimileAjax.History._plainDocumentTitle+" {"+i+"}"
},SimileAjax.History.initialize=function(){if(!SimileAjax.History._initialized){if(SimileAjax.History.enabled){var i=document.createElement("iframe");
i.id="simile-ajax-history",i.style.position="absolute",i.style.width="10px",i.style.height="10px",i.style.top="0px",i.style.left="0px",i.style.visibility="hidden",i.src=SimileAjax.History.historyFile+"?0",document.body.appendChild(i),SimileAjax.DOM.registerEvent(i,"load",SimileAjax.History._handleIFrameOnLoad),SimileAjax.History._iframe=i
}SimileAjax.History._initialized=!0}},SimileAjax.History.addListener=function(i){SimileAjax.History.initialize(),SimileAjax.History._listeners.add(i)
},SimileAjax.History.removeListener=function(i){SimileAjax.History.initialize(),SimileAjax.History._listeners.remove(i)
},SimileAjax.History.addAction=function(i){SimileAjax.History.initialize(),SimileAjax.History._listeners.fire("onBeforePerform",[i]),window.setTimeout(function(){try{if(i.perform(),SimileAjax.History._listeners.fire("onAfterPerform",[i]),SimileAjax.History.enabled){SimileAjax.History._actions=SimileAjax.History._actions.slice(0,SimileAjax.History._currentIndex-SimileAjax.History._baseIndex),SimileAjax.History._actions.push(i),SimileAjax.History._currentIndex++;
var e=SimileAjax.History._actions.length-SimileAjax.History.maxHistoryLength;e>0&&(SimileAjax.History._actions=SimileAjax.History._actions.slice(e),SimileAjax.History._baseIndex+=e);
try{SimileAjax.History._iframe.contentWindow.location.search="?"+SimileAjax.History._currentIndex
}catch(t){var r=SimileAjax.History.formatHistoryEntryTitle(i.label);document.title=r
}}}catch(t){SimileAjax.Debug.exception(t,"Error adding action {"+i.label+"} to history")
}},0)},SimileAjax.History.addLengthyAction=function(i,e,t){SimileAjax.History.addAction({perform:i,undo:e,label:t,uiLayer:SimileAjax.WindowManager.getBaseLayer(),lengthy:!0})
},SimileAjax.History._handleIFrameOnLoad=function(){try{var i=SimileAjax.History._iframe.contentWindow.location.search,e=0==i.length?0:Math.max(0,parseInt(i.substr(1))),t=function(){var i=e-SimileAjax.History._currentIndex;
SimileAjax.History._currentIndex+=i,SimileAjax.History._baseIndex+=i,SimileAjax.History._iframe.contentWindow.location.search="?"+e
};if(e<SimileAjax.History._currentIndex)SimileAjax.History._listeners.fire("onBeforeUndoSeveral",[]),window.setTimeout(function(){for(;SimileAjax.History._currentIndex>e&&SimileAjax.History._currentIndex>SimileAjax.History._baseIndex;){SimileAjax.History._currentIndex--;
var i=SimileAjax.History._actions[SimileAjax.History._currentIndex-SimileAjax.History._baseIndex];
try{i.undo()}catch(r){SimileAjax.Debug.exception(r,"History: Failed to undo action {"+i.label+"}")
}}SimileAjax.History._listeners.fire("onAfterUndoSeveral",[]),t()},0);else if(e>SimileAjax.History._currentIndex)SimileAjax.History._listeners.fire("onBeforeRedoSeveral",[]),window.setTimeout(function(){for(;SimileAjax.History._currentIndex<e&&SimileAjax.History._currentIndex-SimileAjax.History._baseIndex<SimileAjax.History._actions.length;){var i=SimileAjax.History._actions[SimileAjax.History._currentIndex-SimileAjax.History._baseIndex];
try{i.perform()}catch(r){SimileAjax.Debug.exception(r,"History: Failed to redo action {"+i.label+"}")
}SimileAjax.History._currentIndex++}SimileAjax.History._listeners.fire("onAfterRedoSeveral",[]),t()
},0);else{var r=SimileAjax.History._currentIndex-SimileAjax.History._baseIndex-1,o=r>=0&&r<SimileAjax.History._actions.length?SimileAjax.History.formatHistoryEntryTitle(SimileAjax.History._actions[r].label):SimileAjax.History._plainDocumentTitle;
SimileAjax.History._iframe.contentWindow.document.title=o,document.title=o}}catch(a){}},SimileAjax.History.getNextUndoAction=function(){try{var i=SimileAjax.History._currentIndex-SimileAjax.History._baseIndex-1;
return SimileAjax.History._actions[i]}catch(e){return null}},SimileAjax.History.getNextRedoAction=function(){try{var i=SimileAjax.History._currentIndex-SimileAjax.History._baseIndex;
return SimileAjax.History._actions[i]}catch(e){return null}};