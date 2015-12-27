"console"in window&&"firebug"in console||!function(){function toggleConsole(e){frameVisible=e||!frameVisible,consoleFrame?consoleFrame.style.visibility=frameVisible?"visible":"hidden":waitForBody()
}function focusCommandLine(){toggleConsole(!0),commandLine&&commandLine.focus()}function waitForBody(){document.body?createFrame():setTimeout(waitForBody,200)
}function createFrame(){if(!consoleFrame){window.onFirebugReady=function(e){window.onFirebugReady=null;
var o=e.getElementById("toolbar");o.onmousedown=onSplitterMouseDown,commandLine=e.getElementById("commandLine"),addEvent(commandLine,"keydown",onCommandLineKeyDown),addEvent(e,isIE||isSafari?"keydown":"keypress",onKeyDown),consoleBody=e.getElementById("log"),layout(),flush()
};var e=getFirebugURL();consoleFrame=document.createElement("iframe"),consoleFrame.setAttribute("src",e+"/firebug.html"),consoleFrame.setAttribute("frameBorder","0"),consoleFrame.style.visibility=frameVisible?"visible":"hidden",consoleFrame.style.zIndex="2147483647",consoleFrame.style.position="fixed",consoleFrame.style.width="100%",consoleFrame.style.left="0",consoleFrame.style.bottom="0",consoleFrame.style.height="200px",document.body.appendChild(consoleFrame)
}}function getFirebugURL(){for(var e=document.getElementsByTagName("script"),o=0;o<e.length;++o)if(-1!=e[o].src.indexOf("firebug.js")){var n=e[o].src.lastIndexOf("/");
return e[o].src.substr(0,n)}}function evalCommandLine(){var text=commandLine.value;
commandLine.value="",logRow([clPrefix,text],"command");var value;try{value=eval(text)
}catch(exc){}console.log(value)}function layout(){var e=consoleBody.ownerDocument.getElementById("toolbar"),o=consoleFrame.offsetHeight-(e.offsetHeight+commandLine.offsetHeight);
consoleBody.style.top=e.offsetHeight+"px",consoleBody.style.height=o+"px",commandLine.style.top=consoleFrame.offsetHeight-commandLine.offsetHeight+"px"
}function logRow(e,o,n){consoleBody?writeMessage(e,o,n):(messageQueue.push([e,o,n]),waitForBody())
}function flush(){var e=messageQueue;messageQueue=[];for(var o=0;o<e.length;++o)writeMessage(e[o][0],e[o][1],e[o][2])
}function writeMessage(e,o,n){var t=consoleBody.scrollTop+consoleBody.offsetHeight>=consoleBody.scrollHeight;
n||(n=writeRow),n(e,o),t&&(consoleBody.scrollTop=consoleBody.scrollHeight-consoleBody.offsetHeight)
}function appendRow(e){var o=groupStack.length?groupStack[groupStack.length-1]:consoleBody;
o.appendChild(e)}function writeRow(e,o){var n=consoleBody.ownerDocument.createElement("div");
n.className="logRow"+(o?" logRow-"+o:""),n.innerHTML=e.join(""),appendRow(n)}function pushGroup(e,o){logFormatted(e,o);
var n=consoleBody.ownerDocument.createElement("div");n.className="logGroup";var t=consoleBody.ownerDocument.createElement("div");
t.className="logGroupBox",n.appendChild(t),appendRow(t),groupStack.push(t)}function popGroup(){groupStack.pop()
}function logFormatted(e,o){var n=[],t=e[0],a=0;"string"!=typeof t&&(t="",a=-1);for(var s=parseFormat(t),r=0;r<s.length;++r){var i=s[r];
if(i&&"object"==typeof i){var c=e[++a];i.appender(c,n)}else appendText(i,n)}for(var r=a+1;r<e.length;++r){appendText(" ",n);
var c=e[r];"string"==typeof c?appendText(c,n):appendObject(c,n)}logRow(n,o)}function parseFormat(e){for(var o=[],n=/((^%|[^\\]%)(\d+)?(\.)([a-zA-Z]))|((^%|[^\\]%)([a-zA-Z]))/,t={s:appendText,d:appendInteger,i:appendInteger,f:appendFloat},a=n.exec(e);a;a=n.exec(e)){var s=a[8]?a[8]:a[5],r=s in t?t[s]:appendObject,i=a[3]?parseInt(a[3]):"."==a[4]?-1:0;
o.push(e.substr(0,"%"==a[0][0]?a.index:a.index+1)),o.push({appender:r,precision:i}),e=e.substr(a.index+a[0].length)
}return o.push(e),o}function escapeHTML(e){function o(e){switch(e){case"<":return"&lt;";
case">":return"&gt;";case"&":return"&amp;";case"'":return"&#39;";case'"':return"&quot;"
}return"?"}return String(e).replace(/[<>&"']/g,o)}function objectToString(e){try{return e+""
}catch(o){return null}}function appendText(e,o){o.push(escapeHTML(objectToString(e)))
}function appendNull(e,o){o.push('<span class="objectBox-null">',escapeHTML(objectToString(e)),"</span>")
}function appendString(e,o){o.push('<span class="objectBox-string">&quot;',escapeHTML(objectToString(e)),"&quot;</span>")
}function appendInteger(e,o){o.push('<span class="objectBox-number">',escapeHTML(objectToString(e)),"</span>")
}function appendFloat(e,o){o.push('<span class="objectBox-number">',escapeHTML(objectToString(e)),"</span>")
}function appendFunction(e,o){var n=/function ?(.*?)\(/,t=n.exec(objectToString(e)),a=t?t[1]:"function";
o.push('<span class="objectBox-function">',escapeHTML(a),"()</span>")}function appendObject(e,o){try{void 0==e?appendNull("undefined",o):null==e?appendNull("null",o):"string"==typeof e?appendString(e,o):"number"==typeof e?appendInteger(e,o):"function"==typeof e?appendFunction(e,o):1==e.nodeType?appendSelector(e,o):"object"==typeof e?appendObjectFormatted(e,o):appendText(e,o)
}catch(n){}}function appendObjectFormatted(e,o){var n=objectToString(e),t=/\[object (.*?)\]/,a=t.exec(n);
o.push('<span class="objectBox-object">',a?a[1]:n,"</span>")}function appendSelector(e,o){o.push('<span class="objectBox-selector">'),o.push('<span class="selectorTag">',escapeHTML(e.nodeName.toLowerCase()),"</span>"),e.id&&o.push('<span class="selectorId">#',escapeHTML(e.id),"</span>"),e.className&&o.push('<span class="selectorClass">.',escapeHTML(e.className),"</span>"),o.push("</span>")
}function appendNode(e,o){if(1==e.nodeType){o.push('<div class="objectBox-element">','&lt;<span class="nodeTag">',e.nodeName.toLowerCase(),"</span>");
for(var n=0;n<e.attributes.length;++n){var t=e.attributes[n];t.specified&&o.push('&nbsp;<span class="nodeName">',t.nodeName.toLowerCase(),'</span>=&quot;<span class="nodeValue">',escapeHTML(t.nodeValue),"</span>&quot;")
}if(e.firstChild){o.push('&gt;</div><div class="nodeChildren">');for(var a=e.firstChild;a;a=a.nextSibling)appendNode(a,o);
o.push('</div><div class="objectBox-element">&lt;/<span class="nodeTag">',e.nodeName.toLowerCase(),"&gt;</span></div>")
}else o.push("/&gt;</div>")}else 3==e.nodeType&&o.push('<div class="nodeText">',escapeHTML(e.nodeValue),"</div>")
}function addEvent(e,o,n){document.all?e.attachEvent("on"+o,n):e.addEventListener(o,n,!1)
}function removeEvent(e,o,n){document.all?e.detachEvent("on"+o,n):e.removeEventListener(o,n,!1)
}function cancelEvent(e){document.all?e.cancelBubble=!0:e.stopPropagation()}function onError(e,o,n){var t=[],a=o.lastIndexOf("/"),s=-1==a?o:o.substr(a+1);
t.push('<span class="errorMessage">',e,"</span>",'<div class="objectBox-sourceLink">',s," (line ",n,")</div>"),logRow(t,"error")
}function onKeyDown(e){if(123==e.keyCode)toggleConsole();else{if(108!=e.keyCode&&76!=e.keyCode||!e.shiftKey||!e.metaKey&&!e.ctrlKey)return;
focusCommandLine()}cancelEvent(e)}function onSplitterMouseDown(){if(!isSafari&&!isOpera){addEvent(document,"mousemove",onSplitterMouseMove),addEvent(document,"mouseup",onSplitterMouseUp);
for(var e=0;e<frames.length;++e)addEvent(frames[e].document,"mousemove",onSplitterMouseMove),addEvent(frames[e].document,"mouseup",onSplitterMouseUp)
}}function onSplitterMouseMove(e){var o=document.all?e.srcElement.ownerDocument.parentWindow:e.target.ownerDocument.defaultView,n=e.clientY;
o!=o.parent&&(n+=o.frameElement?o.frameElement.offsetTop:0);var t=consoleFrame.offsetTop+consoleFrame.clientHeight,a=t-n;
consoleFrame.style.height=a+"px",layout()}function onSplitterMouseUp(){removeEvent(document,"mousemove",onSplitterMouseMove),removeEvent(document,"mouseup",onSplitterMouseUp);
for(var e=0;e<frames.length;++e)removeEvent(frames[e].document,"mousemove",onSplitterMouseMove),removeEvent(frames[e].document,"mouseup",onSplitterMouseUp)
}function onCommandLineKeyDown(e){13==e.keyCode?evalCommandLine():27==e.keyCode&&(commandLine.value="")
}window.console={log:function(){logFormatted(arguments,"")},debug:function(){logFormatted(arguments,"debug")
},info:function(){logFormatted(arguments,"info")},warn:function(){logFormatted(arguments,"warning")
},error:function(){logFormatted(arguments,"error")},assert:function(e,o){if(!e){for(var n=[],t=1;t<arguments.length;++t)n.push(arguments[t]);
throw logFormatted(n.length?n:["Assertion Failure"],"error"),o?o:"Assertion Failure"
}},dir:function(e){var o=[],n=[];for(var t in e)try{n.push([t,e[t]])}catch(a){}n.sort(function(e,o){return e[0]<o[0]?-1:1
}),o.push("<table>");for(var s=0;s<n.length;++s){var t=n[s][0],r=n[s][1];o.push("<tr>",'<td class="propertyNameCell"><span class="propertyName">',escapeHTML(t),"</span></td>",'<td><span class="propertyValue">'),appendObject(r,o),o.push("</span></td></tr>")
}o.push("</table>"),logRow(o,"dir")},dirxml:function(e){var o=[];appendNode(e,o),logRow(o,"dirxml")
},group:function(){logRow(arguments,"group",pushGroup)},groupEnd:function(){logRow(arguments,"",popGroup)
},time:function(e){timeMap[e]=(new Date).getTime()},timeEnd:function(e){if(e in timeMap){var o=(new Date).getTime()-timeMap[e];
logFormatted([e+":",o+"ms"]),delete timeMap[e]}},count:function(){this.warn(["count() not supported."])
},trace:function(){this.warn(["trace() not supported."])},profile:function(){this.warn(["profile() not supported."])
},profileEnd:function(){},clear:function(){consoleBody.innerHTML=""},open:function(){toggleConsole(!0)
},close:function(){frameVisible&&toggleConsole()}};var consoleFrame=null,consoleBody=null,commandLine=null,frameVisible=!1,messageQueue=[],groupStack=[],timeMap={},clPrefix=">>> ",isFirefox=-1!=navigator.userAgent.indexOf("Firefox"),isIE=-1!=navigator.userAgent.indexOf("MSIE"),isOpera=-1!=navigator.userAgent.indexOf("Opera"),isSafari=-1!=navigator.userAgent.indexOf("AppleWebKit");
window.onerror=onError,addEvent(document,isIE||isSafari?"keydown":"keypress",onKeyDown),"true"==document.documentElement.getAttribute("debug")&&toggleConsole(!0)
}();