SimileAjax.XmlHttp=new Object,SimileAjax.XmlHttp._onReadyStateChange=function(t,e,a){switch(t.readyState){case 4:try{0==t.status||200==t.status?a&&a(t):e&&e(t.statusText,t.status,t)
}catch(n){SimileAjax.Debug.exception("XmlHttp: Error handling onReadyStateChange",n)
}}},SimileAjax.XmlHttp._createRequest=function(){if(SimileAjax.Platform.browser.isIE)for(var t=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],e=0;e<t.length;e++)try{var a=t[e],n=function(){return new ActiveXObject(a)
},i=n();return SimileAjax.XmlHttp._createRequest=n,i}catch(r){}try{var n=function(){return new XMLHttpRequest
},i=n();return SimileAjax.XmlHttp._createRequest=n,i}catch(r){throw new Error("Failed to create an XMLHttpRequest object")
}},SimileAjax.XmlHttp.get=function(t,e,a){var n=SimileAjax.XmlHttp._createRequest();
n.open("GET",t,!0),n.onreadystatechange=function(){SimileAjax.XmlHttp._onReadyStateChange(n,e,a)
},n.send(null)},SimileAjax.XmlHttp.post=function(t,e,a,n){var i=SimileAjax.XmlHttp._createRequest();
i.open("POST",t,!0),i.onreadystatechange=function(){SimileAjax.XmlHttp._onReadyStateChange(i,a,n)
},i.send(e)},SimileAjax.XmlHttp._forceXML=function(t){try{t.overrideMimeType("text/xml")
}catch(e){t.setrequestheader("Content-Type","text/xml")}};