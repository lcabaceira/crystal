!function(e){function t(e){var t,r=!1,s=function(){switch(r=!0,t.readyState){case 0:e.aborted(t);
break;case 4:200===t.status?e.complete(t):e.error(f.Exception._newError("HTTP_ERROR","_ajax",{request:e,status:this.status,statusText:this.statusText}))
}};if(XMLHttpRequest?t=new XMLHttpRequest:X&&(t=new ActiveXObject("MSXML2.XMLHTTP.3.0")),e.username&&e.password?t.open("POST",e.url,e.async,e.username,e.password):t.open("POST",e.url,e.async),t.onreadystatechange=s,t.setRequestHeader("Accept","text/xml, application/xml, application/soap+xml"),t.setRequestHeader("Content-Type","text/xml"),e.headers){var i,n=e.headers;
for(i in n)t.setRequestHeader(i,n[i])}return t.send(e.data),e.async||r||s.call(t),t
}function r(e){return"undefined"==typeof e}function s(e){return e&&e.constructor===Array
}function i(e){return"number"==typeof e}function n(e){return"function"==typeof e}function E(e){return"string"==typeof e
}function o(e){return e&&"object"==typeof e}function _(e){return E(e)&&(e=e.replace(/\&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")),e
}function a(e){var t;return t=r(e.innerText)?r(e.textContent)?r(e.nodeTypedValue)?e.normalize?function(e){return e.normalize(),e.firstChild?e.firstChild.data:null
}:function(e){var t,r,s=[],i=e.childNodes,n=i.length;for(r=0;n>r;r++)t=i.item(r),null!==t.data&&s.push(t.data);
return s.length?s.join(""):null}:function(e){return e.nodeTypedValue}:function(e){return e.textContent
}:function(e){return e.innerText},a=t,t(e)}function u(e,t,r,i){i||(i="");var n,E,o,a,u,c="\n"+i+"<"+e+">";
if(r){c+="\n"+i+" <"+t+">";for(a in r)if(r.hasOwnProperty(a)){if(u=r[a],c+="\n"+i+"  <"+a+">",s(u))for(n=u.length,E=0;n>E;E++)o=u[E],c+="<Value>"+_(o)+"</Value>";
else c+=_(u);c+="</"+a+">"}c+="\n"+i+" </"+t+">"}return c+="\n"+i+"</"+e+">"}function c(e){var t=e.method,r='<?xml version="1.0" encoding="UTF-8"?>\n<'+x+":Envelope "+m+" "+L+">\n <"+x+":Body>\n  <"+t+" "+v+" "+L+">";
switch(t){case f.METHOD_DISCOVER:e.requestType||f.Exception._newError("MISSING_REQUEST_TYPE","Xmla._getXmlaSoapMessage",e)._throw(),r+="\n   <"+K+">"+e.requestType+"</"+K+">"+u("Restrictions","RestrictionList",e.restrictions,"   ")+u("Properties","PropertyList",e.properties,"   ");
break;case f.METHOD_EXECUTE:e.statement||f.Exception._newError("MISSING_REQUEST_TYPE","Xmla._getXmlaSoapMessage",e)._throw(),r+="\n   <Command>\n    <Statement>"+_(e.statement)+"</Statement>\n   </Command>"+u("Properties","PropertyList",e.properties,"   ")
}return r+="\n  </"+t+">\n </"+x+":Body>\n</"+x+":Envelope>"}function l(e,t,s){t&&!e&&(e={});
var i;for(i in t)t.hasOwnProperty(i)&&(s||r(e[i]))&&(e[i]=t[i]);return e}function h(e,t){var r,s,i=F(e,H,U,"complexType"),n=i.length;
for(s=0;n>s;s++)if(r=i.item(s),r.getAttribute("name")===t)return r;return null}function A(e){return"true"===e?!0:!1
}function R(e){return parseInt(e,10)}function S(e){return parseFloat(e,10)}function T(e){return e
}function M(e){return Date.parse(e)}function p(e){return e}function N(e,t){var r,s,i=[],n=e.length;
for(r=0;n>r;r++)s=e.item(r),i.push(t(a(s)));return i}function I(e){var t=k[e];return t||(t=T),t
}function d(e){var t,r=a(e),s=q(e,V,G,"type");return s&&(t=k[s])?t(r):r}function C(e){return"get"+(/^[A-Z]+[a-z]+[A-Za-z]*$/g.test(e)?e:e.charAt(0).toUpperCase()+e.substr(1).toLowerCase().replace(/_[a-z]/g,function(e){return e.charAt(1).toUpperCase()
}))}var f,O="http://schemas.xmlsoap.org/soap/",D=O+"envelope/",x="SOAP-ENV",m="xmlns:"+x+'="'+D+'"',L=x+':encodingStyle="'+O+'encoding/"',w="urn:schemas-microsoft-com:",P=w+"xml-analysis",v='xmlns="'+P+'"',y="sql",g=w+"xml-sql",H="http://www.w3.org/2001/XMLSchema",U="xsd",V="http://www.w3.org/2001/XMLSchema-instance",G="xsi",B=P+":rowset",b=P+":mddataset",X=window.ActiveXObject?!0:!1,Y=document.documentElement,F=Y.getElementsByTagNameNS?function(e,t,r,s){return e.getElementsByTagNameNS(t,s)
}:function(e,t,r,s){return r?e.getElementsByTagName(r+":"+s):e.getElementsByTagName(s)
},q=Y.getAttributeNS?function(e,t,r,s){return e.getAttributeNS(t,s)}:function(e,t,r,s){return r?e.getAttribute(r+":"+s):e.getAttribute(s)
},K="RequestType";r(e)&&(e=window),f=e.Xmla=function(e){this.listeners={},this.listeners[f.EVENT_REQUEST]=[],this.listeners[f.EVENT_SUCCESS]=[],this.listeners[f.EVENT_ERROR]=[],this.listeners[f.EVENT_DISCOVER]=[],this.listeners[f.EVENT_DISCOVER_SUCCESS]=[],this.listeners[f.EVENT_DISCOVER_ERROR]=[],this.listeners[f.EVENT_EXECUTE]=[],this.listeners[f.EVENT_EXECUTE_SUCCESS]=[],this.listeners[f.EVENT_EXECUTE_ERROR]=[],this.options=l(l({},f.defaultOptions,!0),e,!0);
var t=this.options.listeners;return t&&this.addListener(t),this},f.defaultOptions={requestTimeout:3e4,async:!1,addFieldGetters:!0},f.METHOD_DISCOVER="Discover",f.METHOD_EXECUTE="Execute";
var j="DISCOVER_",W="MDSCHEMA_",Q="DBSCHEMA_";f.DISCOVER_DATASOURCES=j+"DATASOURCES",f.DISCOVER_PROPERTIES=j+"PROPERTIES",f.DISCOVER_SCHEMA_ROWSETS=j+"SCHEMA_ROWSETS",f.DISCOVER_ENUMERATORS=j+"ENUMERATORS",f.DISCOVER_KEYWORDS=j+"KEYWORDS",f.DISCOVER_LITERALS=j+"LITERALS",f.DBSCHEMA_CATALOGS=Q+"CATALOGS",f.DBSCHEMA_COLUMNS=Q+"COLUMNS",f.DBSCHEMA_PROVIDER_TYPES=Q+"PROVIDER_TYPES",f.DBSCHEMA_SCHEMATA=Q+"SCHEMATA",f.DBSCHEMA_TABLES=Q+"TABLES",f.DBSCHEMA_TABLES_INFO=Q+"TABLES_INFO",f.MDSCHEMA_ACTIONS=W+"ACTIONS",f.MDSCHEMA_CUBES=W+"CUBES",f.MDSCHEMA_DIMENSIONS=W+"DIMENSIONS",f.MDSCHEMA_FUNCTIONS=W+"FUNCTIONS",f.MDSCHEMA_HIERARCHIES=W+"HIERARCHIES",f.MDSCHEMA_LEVELS=W+"LEVELS",f.MDSCHEMA_MEASURES=W+"MEASURES",f.MDSCHEMA_MEMBERS=W+"MEMBERS",f.MDSCHEMA_PROPERTIES=W+"PROPERTIES",f.MDSCHEMA_SETS=W+"SETS",f.EVENT_REQUEST="request",f.EVENT_SUCCESS="success",f.EVENT_ERROR="error",f.EVENT_EXECUTE="execute",f.EVENT_EXECUTE_SUCCESS="executesuccess",f.EVENT_EXECUTE_ERROR="executeerror",f.EVENT_DISCOVER="discover",f.EVENT_DISCOVER_SUCCESS="discoversuccess",f.EVENT_DISCOVER_ERROR="discovererror",f.EVENT_GENERAL=[f.EVENT_REQUEST,f.EVENT_SUCCESS,f.EVENT_ERROR],f.EVENT_DISCOVER_ALL=[f.EVENT_DISCOVER,f.EVENT_DISCOVER_SUCCESS,f.EVENT_DISCOVER_ERROR],f.EVENT_EXECUTE_ALL=[f.EVENT_EXECUTE,f.EVENT_EXECUTE_SUCCESS,f.EVENT_EXECUTE_ERROR],f.EVENT_ALL=[].concat(f.EVENT_GENERAL,f.EVENT_DISCOVER_ALL,f.EVENT_EXECUTE_ALL),f.PROP_DATASOURCEINFO="DataSourceInfo",f.PROP_DATASOURCENAME="DataSourceName",f.PROP_CATALOG="Catalog",f.PROP_CUBE="Cube",f.PROP_FORMAT="Format",f.PROP_FORMAT_TABULAR="Tabular",f.PROP_FORMAT_MULTIDIMENSIONAL="Multidimensional",f.PROP_AXISFORMAT="AxisFormat",f.PROP_AXISFORMAT_TUPLE="TupleFormat",f.PROP_AXISFORMAT_CLUSTER="ClusterFormat",f.PROP_AXISFORMAT_CUSTOM="CustomFormat",f.PROP_CONTENT="Content",f.PROP_CONTENT_DATA="Data",f.PROP_CONTENT_NONE="None",f.PROP_CONTENT_SCHEMA="Schema",f.PROP_CONTENT_SCHEMADATA="SchemaData",f.prototype={listeners:null,soapMessage:null,response:null,responseText:null,responseXML:null,setOptions:function(e){l(this.options,e,!0)
},addListener:function(){var e=arguments.length;switch(e){case 0:f.Exception._newError("NO_EVENTS_SPECIFIED","Xmla.addListener",null)._throw();
case 1:var t=arguments[0];if(o(t)){var i;if(s(t))this._addListeners(t);else if(i=t.events||t.event){E(i)&&(i="all"===i?f.EVENT_ALL:i.split(",")),s(i)||f.Exception._newError("WRONG_EVENTS_FORMAT","Xmla.addListener",t)._throw();
var _,e=i.length;for(_=0;e>_;_++)this._addListener(i[_],t)}else{var a,u=t.scope;r(u)?u=null:delete t.scope;
for(i in t)a=t[i],r(a.scope)&&(a.scope=u),this._addListener(i,a)}}else f.Exception._newError("WRONG_EVENTS_FORMAT","Xmla.addListener",t)._throw();
break;case 2:case 3:var c=arguments[0],a=arguments[1],u=arguments[2];if(E(c)&&(n(a)||o(a)))this._addListener(c,a,u);
else{var l=[c,a];u&&l.push(u),this.addListener(l)}break;default:this._addListeners(arguments)
}},_addListeners:function(e){var t,r=e.length;for(t=0;r>t;t++)this.addListener(e[t])
},_addListener:function(e,t,r){var i=this.listeners[e];switch(i||f.Exception._newError("UNKNOWN_EVENT","Xmla.addListener",{event:e,handler:t,scope:r})._throw(),r||(r=null),typeof t){case"function":i.concat({handler:t,scope:r});
break;case"object":var E=t.handler||t.handlers;if(n(E.handler))E.scope||(E.scope=r),i.concat(t);
else if(s(E)){var o,_=E.length;for(o=0;_>o;o++)this._addListener(e,E[o])}}},_fireEvent:function(e,t,r){var s=this.listeners[e];
s||f.Exception._newError("UNKNOWN_EVENT","Xmla._fireEvent",e)._throw();var i=s.length,E=!0;
if(i){var o,_,a;for(a=0;i>a;a++)if(o=s[a],_=o.handler.call(o.scope,e,t,this),r&&_===!1){E=!1;
break}}else e!==f.EVENT_ERROR||n(t.error)||n(t.callback)||t.exception._throw();return E
},request:function(e){var s,i=this;this.response=null,this.responseText=null,this.responseXML=null,e.url||(this.options.url?e.url=this.options.url:(s=f.Exception._newError("MISSING_URL","Xmla.request",e),s._throw())),e.properties=l(e.properties,this.options.properties,!1),e.restrictions=l(e.restrictions,this.options.restrictions,!1),r(e.async)&&!r(this.options.async)&&(e.async=this.options.async),r(e.requestTimeout)&&!r(this.options.requestTimeout)&&(e.requestTimeout=this.options.requestTimeout),!e.username&&this.options.username&&(e.username=this.options.username),!e.password&&this.options.password&&(e.password=this.options.password),!e.headers&&this.options.headers&&(e.headers=this.options.headers);
var n=c(e);this.soapMessage=n;var E,o={async:e.async,timeout:e.requestTimeout,data:n,error:function(t){e.exception=t,i._requestError(e)
},complete:function(t){e.xhr=t,i._requestSuccess(e)},url:e.url};return e.username&&(o.username=e.username),e.password&&(o.password=e.password),e.headers&&(o.headers=e.headers),this._fireEvent(f.EVENT_REQUEST,e,!0)&&(e.method==f.METHOD_DISCOVER&&this._fireEvent(f.EVENT_DISCOVER,e)||e.method==f.METHOD_EXECUTE&&this._fireEvent(f.EVENT_EXECUTE,e))&&(E=t(o)),this.response
},_requestError:function(e){e.error&&e.error.call(e.scope?e.scope:null,this,e,null),e.callback&&e.callback.call(e.scope?e.scope:null,f.EVENT_ERROR,this,e,null),this._fireEvent(f.EVENT_ERROR,e)
},_requestSuccess:function(e){var t,r=e.xhr;this.responseXML=r.responseXML,this.responseText=r.responseText;
var s=e.method,i=F(this.responseXML,D,x,"Fault");if(i.length){switch(i=i.item(0),e.exception=new f.Exception(f.Exception.TYPE_ERROR,i.getElementsByTagName("faultcode").item(0).childNodes.item(0).data,i.getElementsByTagName("faultstring").item(0).childNodes.item(0).data,null,"_requestSuccess",e),s){case f.METHOD_DISCOVER:this._fireEvent(f.EVENT_DISCOVER_ERROR,e);
break;case f.METHOD_EXECUTE:this._fireEvent(f.EVENT_EXECUTE_ERROR,e)}e.error&&e.error.call(e.scope?e.scope:null,this,e,e.exception),e.callback&&e.callback.call(e.scope?e.scope:null,f.EVENT_ERROR,this,e,e.exception),this._fireEvent(f.EVENT_ERROR,e)
}else{switch(s){case f.METHOD_DISCOVER:e.rowset=this.response=t=new f.Rowset(this.responseXML,e.requestType,this),this._fireEvent(f.EVENT_DISCOVER_SUCCESS,e);
break;case f.METHOD_EXECUTE:var n=null,E=null,o=e.properties[f.PROP_FORMAT];switch(o){case f.PROP_FORMAT_TABULAR:t=n=new f.Rowset(this.responseXML,null,this);
break;case f.PROP_FORMAT_MULTIDIMENSIONAL:t=E=new f.Dataset(this.responseXML)}e.resultset=n,e.dataset=E,this.response=t,this._fireEvent(f.EVENT_EXECUTE_SUCCESS,e)
}e.success&&e.success.call(e.scope?e.scope:null,this,e,t),e.callback&&e.callback.call(e.scope?e.scope:null,f.EVENT_SUCCESS,this,e,t),this._fireEvent(f.EVENT_SUCCESS,e)
}},execute:function(e){var t=e.properties;t||(t={},e.properties=t),l(t,this.options.properties,!1),t[f.PROP_CONTENT]||(t[f.PROP_CONTENT]=f.PROP_CONTENT_SCHEMADATA),t[f.PROP_FORMAT]||(e.properties[f.PROP_FORMAT]=f.PROP_FORMAT_MULTIDIMENSIONAL);
var r=l(e,{method:f.METHOD_EXECUTE},!0);return this.request(r)},executeTabular:function(e){return e.properties||(e.properties={}),e.properties[f.PROP_FORMAT]=f.PROP_FORMAT_TABULAR,this.execute(e)
},executeMultiDimensional:function(e){return e.properties||(e.properties={}),e.properties[f.PROP_FORMAT]=f.PROP_FORMAT_MULTIDIMENSIONAL,this.execute(e)
},discover:function(e){var t=l(e,{method:f.METHOD_DISCOVER},!0);return t.requestType||(t.requestType=this.options.requestType),this.request(t)
},discoverDataSources:function(e){var t=l(e,{requestType:f.DISCOVER_DATASOURCES},!0);
return this.discover(t)},discoverProperties:function(e){var t=l(e,{requestType:f.DISCOVER_PROPERTIES},!0);
return this.discover(t)},discoverSchemaRowsets:function(e){var t=l(e,{requestType:f.DISCOVER_SCHEMA_ROWSETS},!0);
return this.discover(t)},discoverEnumerators:function(e){var t=l(e,{requestType:f.DISCOVER_ENUMERATORS},!0);
return this.discover(t)},discoverKeywords:function(e){var t=l(e,{requestType:f.DISCOVER_KEYWORDS},!0);
return this.discover(t)},discoverLiterals:function(e){var t=l(e,{requestType:f.DISCOVER_LITERALS},!0);
return this.discover(t)},discoverDBCatalogs:function(e){var t=l(e,{requestType:f.DBSCHEMA_CATALOGS},!0);
return this.discover(t)},discoverDBColumns:function(e){var t=l(e,{requestType:f.DBSCHEMA_COLUMNS},!0);
return this.discover(t)},discoverDBProviderTypes:function(e){var t=l(e,{requestType:f.DBSCHEMA_PROVIDER_TYPES},!0);
return this.discover(t)},discoverDBSchemata:function(e){var t=l(e,{requestType:f.DBSCHEMA_SCHEMATA},!0);
return this.discover(t)},discoverDBTables:function(e){var t=l(e,{requestType:f.DBSCHEMA_TABLES},!0);
return this.discover(t)},discoverDBTablesInfo:function(e){var t=l(e,{requestType:f.DBSCHEMA_TABLES_INFO},!0);
return this.discover(t)},discoverMDActions:function(e){var t=l(e,{requestType:f.MDSCHEMA_ACTIONS},!0);
return this.discover(t)},discoverMDCubes:function(e){var t=l(e,{requestType:f.MDSCHEMA_CUBES},!0);
return this.discover(t)},discoverMDDimensions:function(e){var t=l(e,{requestType:f.MDSCHEMA_DIMENSIONS},!0);
return this.discover(t)},discoverMDFunctions:function(e){var t=l(e,{requestType:f.MDSCHEMA_FUNCTIONS},!0);
return this.discover(t)},discoverMDHierarchies:function(e){var t=l(e,{requestType:f.MDSCHEMA_HIERARCHIES},!0);
return this.discover(t)},discoverMDLevels:function(e){var t=l(e,{requestType:f.MDSCHEMA_LEVELS},!0);
return this.discover(t)},discoverMDMeasures:function(e){var t=l(e,{requestType:f.MDSCHEMA_MEASURES},!0);
return this.discover(t)},discoverMDMembers:function(e){var t=l(e,{requestType:f.MDSCHEMA_MEMBERS},!0);
return this.discover(t)},discoverMDProperties:function(e){var t=l(e,{requestType:f.MDSCHEMA_PROPERTIES},!0);
return this.discover(t)},discoverMDSets:function(e){var t=l(e,{requestType:f.MDSCHEMA_SETS},!0);
return this.discover(t)}},f.Rowset=function(e,t,r){return this._node=e,this._type=t,this._xmla=r,this._initData(),this
},f.Rowset.MD_DIMTYPE_UNKNOWN=0,f.Rowset.MD_DIMTYPE_TIME=1,f.Rowset.MD_DIMTYPE_MEASURE=2,f.Rowset.MD_DIMTYPE_OTHER=3,f.Rowset.MD_DIMTYPE_QUANTITATIVE=5,f.Rowset.MD_DIMTYPE_ACCOUNTS=6,f.Rowset.MD_DIMTYPE_CUSTOMERS=7,f.Rowset.MD_DIMTYPE_PRODUCTS=8,f.Rowset.MD_DIMTYPE_SCENARIO=9,f.Rowset.MD_DIMTYPE_UTILIY=10,f.Rowset.MD_DIMTYPE_CURRENCY=11,f.Rowset.MD_DIMTYPE_RATES=12,f.Rowset.MD_DIMTYPE_CHANNEL=13,f.Rowset.MD_DIMTYPE_PROMOTION=14,f.Rowset.MD_DIMTYPE_ORGANIZATION=15,f.Rowset.MD_DIMTYPE_BILL_OF_MATERIALS=16,f.Rowset.MD_DIMTYPE_GEOGRAPHY=17,f.Rowset.MD_STRUCTURE_FULLYBALANCED=0,f.Rowset.MD_STRUCTURE_RAGGEDBALANCED=1,f.Rowset.MD_STRUCTURE_UNBALANCED=2,f.Rowset.MD_STRUCTURE_NETWORK=3,f.Rowset.MD_USER_DEFINED=1,f.Rowset.MD_SYSTEM_ENABLED=2,f.Rowset.MD_SYSTEM_INTERNAL=4,f.Rowset.MDMEMBER_TYPE_REGULAR=1,f.Rowset.MDMEMBER_TYPE_ALL=2,f.Rowset.MDMEMBER_TYPE_FORMULA=3,f.Rowset.MDMEMBER_TYPE_MEASURE=4,f.Rowset.MDMEMBER_TYPE_UNKNOWN=0,f.Rowset.KEYS={},f.Rowset.KEYS[f.DBSCHEMA_CATALOGS]=["CATALOG_NAME"],f.Rowset.KEYS[f.DBSCHEMA_COLUMNS]=["TABLE_CATALOG","TABLE_SCHEMA","TABLE_NAME","COLUMN_NAME"],f.Rowset.KEYS[f.DBSCHEMA_PROVIDER_TYPES]=["TYPE_NAME"],f.Rowset.KEYS[f.DBSCHEMA_SCHEMATA]=["CATALOG_NAME","SCHEMA_NAME"],f.Rowset.KEYS[f.DBSCHEMA_TABLES]=["TABLE_CATALOG","TABLE_SCHEMA","TABLE_NAME"],f.Rowset.KEYS[f.DBSCHEMA_TABLES_INFO]=["TABLE_CATALOG","TABLE_SCHEMA","TABLE_NAME"],f.Rowset.KEYS[f.DISCOVER_DATASOURCES]=["DataSourceName"],f.Rowset.KEYS[f.DISCOVER_ENUMERATORS]=["EnumName","ElementName"],f.Rowset.KEYS[f.DISCOVER_KEYWORDS]=["Keyword"],f.Rowset.KEYS[f.DISCOVER_LITERALS]=["LiteralName"],f.Rowset.KEYS[f.DISCOVER_PROPERTIES]=["PropertyName"],f.Rowset.KEYS[f.DISCOVER_SCHEMA_ROWSETS]=["SchemaName"],f.Rowset.KEYS[f.MDSCHEMA_ACTIONS]=["CATALOG_NAME","SCHEMA_NAME","CUBE_NAME","ACTION_NAME"],f.Rowset.KEYS[f.MDSCHEMA_CUBES]=["CATALOG_NAME","SCHEMA_NAME","CUBE_NAME"],f.Rowset.KEYS[f.MDSCHEMA_DIMENSIONS]=["CATALOG_NAME","SCHEMA_NAME","CUBE_NAME","DIMENSION_UNIQUE_NAME"],f.Rowset.KEYS[f.MDSCHEMA_FUNCTIONS]=["FUNCTION_NAME","PARAMETER_LIST"],f.Rowset.KEYS[f.MDSCHEMA_HIERARCHIES]=["CATALOG_NAME","SCHEMA_NAME","CUBE_NAME","DIMENSION_UNIQUE_NAME","HIERARCHY_UNIQUE_NAME"],f.Rowset.KEYS[f.MDSCHEMA_LEVELS]=["CATALOG_NAME","SCHEMA_NAME","CUBE_NAME","DIMENSION_UNIQUE_NAME","HIERARCHY_UNIQUE_NAME","LEVEL_UNIQUE_NAME"],f.Rowset.KEYS[f.MDSCHEMA_MEASURES]=["CATALOG_NAME","SCHEMA_NAME","CUBE_NAME","MEASURE_NAME"],f.Rowset.KEYS[f.MDSCHEMA_MEMBERS]=["CATALOG_NAME","SCHEMA_NAME","CUBE_NAME","DIMENSION_UNIQUE_NAME","HIERARCHY_UNIQUE_NAME","LEVEL_UNIQUE_NAME","MEMBER_UNIQUE_NAME"],f.Rowset.KEYS[f.MDSCHEMA_PROPERTIES]=["CATALOG_NAME","SCHEMA_NAME","CUBE_NAME","DIMENSION_UNIQUE_NAME","HIERARCHY_UNIQUE_NAME","LEVEL_UNIQUE_NAME","MEMBER_UNIQUE_NAME","PROPERTY_NAME"],f.Rowset.KEYS[f.MDSCHEMA_SETS]=["CATALOG_NAME","SCHEMA_NAME","CUBE_NAME","SET_NAME"],A.jsType="boolean",R.jsType="number",S.jsType="number",T.jsType="string",M.jsType="object",p.jsType="object",N.jsType="object";
var k={"xsd:boolean":A,"xsd:decimal":S,"xsd:double":S,"xsd:float":S,"xsd:int":R,"xsd:integer":R,"xsd:nonPositiveInteger":R,"xsd:negativeInteger":R,"xsd:nonNegativeInteger":R,"xsd:positiveInteger":R,"xsd:short":R,"xsd:byte":R,"xsd:long":R,"xsd:unsignedLong":R,"xsd:unsignedInt":R,"xsd:unsignedShort":R,"xsd:unsignedByte":R,"xsd:string":T,"xsd:dateTime":M,Restrictions:p};
f.Rowset.prototype={_node:null,_type:null,_row:null,_rows:null,numRows:null,fieldOrder:null,fields:null,_fieldCount:null,_initData:function(){this._rows=F(this._node,B,null,"row"),this.numRows=this._rows?this._rows.length:0,this.reset(),this.fieldOrder=[],this.fields={},this._fieldCount=0;
var e=h(this._node,"row");if(e){var t,r,s,i,n,E,o,_,a,u,c=F(e,H,U,"sequence").item(0),l=c.childNodes,A=l.length,R=this._xmla.options.addFieldGetters;
for(a=0;A>a;a++)t=l.item(a),1===t.nodeType&&(r=q(t,g,y,"field"),s=t.getAttribute("name"),E=t.getAttribute("type"),null===E&&this._row&&(u=this._row.getElementsByTagName(s),u.length&&(E=q(u.item(0),V,G,"type"))),E||this._type!=f.DISCOVER_SCHEMA_ROWSETS||"Restrictions"!==s||(E="Restrictions"),i=t.getAttribute("minOccurs"),i=i?parseInt(i,10):1,n=t.getAttribute("maxOccurs"),n?"unbounded"===n?n=1/0:i=parseInt(n,10):n=1,o=I(E),_=this._createFieldGetter(s,o,i,n),R&&(this[C(s)]=_),this.fields[r]={name:s,label:r,index:this._fieldCount++,type:E,jsType:o.jsType,minOccurs:i,maxOccurs:n,getter:_},this.fieldOrder.push(r))
}else f.Exception._newError("ERROR_PARSING_RESPONSE","Xmla.Rowset",this._node)._throw()
},_createFieldGetter:function(e,t,r,s){var i;return 1===s?1===r?i=function(){var r=F(this._row,B,null,e);
return t(a(r.item(0)))}:0===r&&(i=function(){var r=F(this._row,B,null,e);return r.length?t(a(r.item(0))):null
}):1===r?i=function(){var r=F(this._row,B,null,e);return N(r,t)}:0===r&&(i=function(){var r=F(this._row,B,null,e);
return r.length?N(r,t):null}),i},getType:function(){return this._type},getFields:function(){var e,t=[],r=this._fieldCount,s=this.fieldOrder;
for(e=0;r>e;e++)t[e]=this.fieldDef(s[e]);return t},getFieldNames:function(){var e,t=[],r=this._fieldCount;
for(e=0;r>e;e++)t[e]=this.fieldOrder[e];return t},hasMoreRows:function(){return this.numRows>this.rowIndex
},nextRow:function(){return this.rowIndex++,this._row=this._rows.item(this.rowIndex),this.rowIndex
},next:function(){return this.nextRow()},eachRow:function(e,t,i){r(t)&&(t=this);var n=[null];
for(r(i)||(s(i)||(i=[i]),n=n.concat(i));this.hasMoreRows();){if(n[0]=this.readAsObject(),e.apply(t,n)===!1)return!1;
this.nextRow()}return!0},currRow:function(){return this.rowIndex},rowCount:function(){return this.numRows
},reset:function(){this.rowIndex=0,this._row=this.hasMoreRows()?this._rows.item(this.rowIndex):null
},fieldDef:function(e){var t=this.fields[e];return t||f.Exception._newError("INVALID_FIELD","Xmla.Rowset.fieldDef",e)._throw(),t
},fieldIndex:function(e){return this.fieldDef(e).index},fieldName:function(e){var t=this.fieldOrder[e];
return t||f.Exception._newError("INVALID_FIELD","Xmla.Rowset.fieldDef",e)._throw(),t
},fieldVal:function(e){return i(e)&&(e=this.fieldName(e)),this.fieldDef(e).getter.call(this)
},fieldCount:function(){return this._fieldCount},close:function(){this._node=null,this._row=null,this._rows=null
},readAsArray:function(e){var t,r,s=this.fields;e||(e=[]);for(t in s)s.hasOwnProperty(t)&&(r=s[t],e[r.index]=r.getter.call(this));
return e},fetchAsArray:function(e){return this.hasMoreRows()?(e=this.readAsArray(e),this.nextRow()):e=!1,e
},readAsObject:function(e){var t,r,s=this.fields;e||(e={});for(t in s)s.hasOwnProperty(t)&&(r=s[t],e[t]=r.getter.call(this));
return e},fetchAsObject:function(e){return this.hasMoreRows()?(e=this.readAsObject(e),this.nextRow()):e=!1,e
},fetchCustom:function(e,t){var r;return this.hasMoreRows()?(r=e.call(this,t),this.nextRow()):r=!1,r
},fetchAllAsArray:function(e){var t;for(e||(e=[]);t=this.fetchAsArray();)e.push(t);
return e},fetchAllAsObject:function(e){var t;for(e||(e=[]);t=this.fetchAsObject();)e.push(t);
return e},fetchAllCustom:function(e,t,r){var s;for(e||(e=[]);s=this.fetchCustom(t,r);)e.push(s);
return e},mapAsObject:function(e,t,r){var i,n,E,o,_=t.length,a=_-1,u=e;for(o=0;_>o;o++)i=t[o],n=r[i],E=u[n],E?o===a?s(E)?E.push(r):u[n]=[E,r]:u=E:o===a?u[n]=r:u=u[n]={}
},mapAllAsObject:function(e,t){t||(t={}),e||(e=this.getKey());for(var r;r=this.fetchAsObject();)this.mapAsObject(t,e,r);
return t},getKey:function(){return this._type?f.Rowset.KEYS[this._type]:this.getFieldNames()
}},f.Dataset=function(e){return this._initDataset(e),this},f.Dataset.AXIS_COLUMNS=0,f.Dataset.AXIS_ROWS=1,f.Dataset.AXIS_PAGES=2,f.Dataset.AXIS_SECTIONS=3,f.Dataset.AXIS_CHAPTERS=4,f.Dataset.AXIS_SLICER="SlicerAxis",f.Dataset.prototype={_root:null,_axes:null,_axesOrder:null,_numAxes:null,_slicer:null,_cellset:null,_initDataset:function(e){this._initRoot(e),this.cubeName=a(F(this._root,b,"","CubeName").item(0)),this._initAxes(),this._initCells();
var t,r,s,i,n,E="";for(i="var ordinal = 0, a;\nif (arguments.length !== "+this._numAxes+') new Xmla.Exception._newError("ERROR_ILLEGAL_ARGUMENT", "cellOrdinalForTupleIndexes", this)._throw();',t=0,r=this._numAxes-1;r>=0;r--,t++){for(i+="\nif (typeof(a = arguments["+t+'])!=="number") new Xmla.Exception._newError("ERROR_ILLEGAL_ARGUMENT", "cellOrdinalForTupleIndexes", this)._throw();',n=1,s=r-1;s>=0;s--)n*=this._axesOrder[s].tupleCount();
i+="\nordinal += a ",r&&(i+="* "+n+";")}i+=E+"\nreturn ordinal;",this._cellset.cellOrdinalForTupleIndexes=this.cellOrdinalForTupleIndexes=new Function(i)
},_initRoot:function(e){var t=F(e,b,"","root");t.length?this._root=t.item(0):f.Exception._newError("ERROR_PARSING_RESPONSE","Xmla.Dataset._initData",e)._throw()
},_initAxes:function(){var e,t,r,s,i,n,E={};for(this._axes={},this._axesOrder=[],i=F(this._root,b,"","AxisInfo"),n=i.length,e=0;n>e;e++)r=i.item(e),s=r.getAttribute("name"),E[s]=r;
for(i=F(this._root,b,"","Axis"),n=i.length,e=0;n>e;e++)r=i.item(e),s=r.getAttribute("name"),t=new f.Dataset.Axis(E[s],r,s,e),s===f.Dataset.AXIS_SLICER?this._slicer=t:(this._axes[s]=t,this._axesOrder.push(t));
this._numAxes=this._axesOrder.length},_initCells:function(){this._cellset=new f.Dataset.Cellset(this)
},axisCount:function(){return this._numAxes},_getAxis:function(e){var t,r;switch(typeof e){case"number":r=this._axesOrder[e];
break;case"string":r=t===f.Dataset.AXIS_SLICER?this._slicer:this._axes[t]}return r
},getAxis:function(e){if(e===f.Dataset.AXIS_SLICER)return this._slicer;var t=this._getAxis(e);
return t||f.Exception._newError("INVALID_AXIS","Xmla.Dataset.getAxis",e)._throw(),t
},hasAxis:function(e){var t=this._getAxis(e);return!r(t)},getColumnAxis:function(){return this.getAxis(f.Dataset.AXIS_COLUMNS)
},hasColumnAxis:function(){return this.hasAxis(f.Dataset.AXIS_COLUMNS)},getRowAxis:function(){return this.getAxis(f.Dataset.AXIS_ROWS)
},hasRowAxis:function(){return this.hasAxis(f.Dataset.AXIS_ROWS)},getPageAxis:function(){return this.getAxis(f.Dataset.AXIS_PAGES)
},hasPageAxis:function(){return this.hasAxis(f.Dataset.AXIS_PAGES)},getSectionAxis:function(){return this.getAxis(f.Dataset.AXIS_SECTIONS)
},hasSectionAxis:function(){return this.hasAxis(f.Dataset.AXIS_SECTIONS)},getChapterAxis:function(){return this.getAxis(f.Dataset.AXIS_CHAPTERS)
},hasChapterAxis:function(){return this.hasAxis(f.Dataset.AXIS_CHAPTERS)},getSlicerAxis:function(){return this._slicer
},getCellset:function(){return this._cellset},cellOrdinalForTupleIndexes:function(){throw"Not implemented"
},close:function(){this._slicer&&this._slicer.close();var e,t=this._numAxes;for(e=0;t>e;e++)this.getAxis(e).close();
this._cellset.close(),this._root=null,this._axes=null,this._axesOrder=null,this._numAxes=null,this._slicer=null
}},f.Dataset.Axis=function(e,t,r,s){return this._initAxis(e,t),this.name=r,this.id=s,this
},f.Dataset.Axis.MEMBER_UNIQUE_NAME="UName",f.Dataset.Axis.MEMBER_CAPTION="Caption",f.Dataset.Axis.MEMBER_LEVEL_NAME="LName",f.Dataset.Axis.MEMBER_LEVEL_NUMBER="LNum",f.Dataset.Axis.MEMBER_DISPLAY_INFO="DisplayInfo",f.Dataset.Axis.prototype={_tuples:null,_members:null,numTuples:null,numHierarchies:null,_tupleIndex:null,_hierarchyIndex:null,_hierarchyOrder:null,_hierarchyDefs:null,_hierarchyIndexes:null,_initHierarchies:function(e){var t,r,s,i,n,E,o,_,a=F(e,b,"","HierarchyInfo"),u=a.length;
for(this._hierarchyDefs={},this._hierarchyOrder=[],this._hierarchyIndexes={},this.numHierarchies=u,t=0;u>t;t++){for(s=a.item(t),i=s.getAttribute("name"),this._hierarchyOrder[t]=i,this._hierarchyIndexes[i]=t,n={index:t,name:i},o=F(e,b,"","*"),E=o.length,r=0;E>r;r++)_=o.item(r),n[_.tagName]=null;
this._hierarchyDefs[i]=n}},_initAxis:function(e,t){this.name=t.getAttribute("name"),this._initHierarchies(e),this._tuples=F(t,b,"","Tuple"),this.numTuples=this._tuples.length,this.reset()
},_getMembers:function(){return this.hasMoreTuples()?F(this._tuples.item(this._tupleIndex),b,"","Member"):null
},reset:function(){this._hierarchyIndex=0,this._tupleIndex=0,this._members=this._getMembers()
},hasMoreHierarchies:function(){return this.numHierarchies>this._hierarchyIndex},nextHierarchy:function(){return this._hierarchyIndex++
},eachHierarchy:function(e,t,r){var i=[null];for(t||(t=this),r&&(s(r)||(r=[r]),i=i.concat(r));this.hasMoreHierarchies();){if(i[0]=this._hierarchyDefs[this._hierarchyOrder[this._hierarchyIndex]],e.apply(t,i)===!1)return!1;
this.nextHierarchy()}return this._hierarchyIndex=0,!0},hasMoreTuples:function(){return this.numTuples>this._tupleIndex
},nextTuple:function(){return this._tupleIndex++,this._members=this._getMembers(),this._tupleIndex
},tupleCount:function(){return this.numTuples},tupleIndex:function(){return this._tupleIndex
},getTuple:function(){var e,t=this.numHierarchies,r={},s=[],i={index:this._tupleIndex,hierarchies:r,members:s};
for(e=0;t>e;e++)s.push(r[this._hierarchyOrder[e]]=this._member(e));return i},eachTuple:function(e,t,r){var i=[null];
for(t||(t=this),r&&(s(r)?i.concat(r):i.push(r));this.hasMoreTuples();){if(i[0]=this.getTuple(),e.apply(t,i)===!1)return!1;
this.nextTuple()}return this._tupleIndex=0,this._members=this._getMembers(),!0},getHierarchies:function(){return this._hierarchyDefs
},getHierarchyNames:function(){var e,t=[],r=this.numHierarchies;for(e=0;r>e;e++)t[e]=this._hierarchyOrder[e];
return t},hierarchyCount:function(){return this.numHierarchies},hierarchyIndex:function(e){if(r(e))return this._hierarchyIndex;
var t=this._hierarchyIndexes[e];return r(t)&&f.Exception._newError("INVALID_HIERARCHY","Xmla.Dataset.Axis.hierarchyDef",e)._throw(),t
},hierarchyName:function(e){return r(e)&&(e=this._hierarchyIndex),(e!==parseInt(e,10)||e>=this.numHierarchies)&&f.Exception._newError("INVALID_HIERARCHY","Xmla.Dataset.Axis.hierarchyDef",e)._throw(),this._hierarchyOrder[e]
},hierarchy:function(e){r(e)&&(t=this._hierarchyIndex);var t,s,n;return i(e)?((e!==parseInt(e,10)||e>=this.numHierarchies)&&f.Exception._newError("INVALID_HIERARCHY","Xmla.Dataset.Axis.hierarchyDef",e)._throw(),s=this.hierarchyName(e)):s=e,n=this._hierarchyDefs[s],r(n)&&f.Exception._newError("INVALID_HIERARCHY","Xmla.Dataset.Axis.hierarchyDef",s)._throw(),n
},member:function(e){r(e)&&(t=this._hierarchyIndex);var t,s;switch(typeof e){case"string":t=this.hierarchyIndex(e),s=e;
break;case"number":(e!==parseInt(e,10)||e>=this.numHierarchies)&&f.Exception._newError("INVALID_HIERARCHY","Xmla.Dataset.Axis.hierarchyDef",e)._throw(),t=e
}return this._member(t)},_member:function(e){var t,r,s=this._members.item(e),i=this.hierarchyName(e),n=this.hierarchy(i),E={index:e,hierarchy:i};
for(t in n)if("index"!==t&&"name"!==t)switch(r=F(s,b,"",t),r.length){case 0:E[t]=n[t];
break;case 1:E[t]=a(r.item(0));break;default:f.Exception._newError("UNEXPECTED_ERROR_READING_MEMBER","Xmla.Dataset.Axis.member",t)._throw()
}return E},readAsArray:function(e){e||(e=[]);var t,r=this.numHierarchies;for(t=0;r>t;t++)e[t]=this._member(t);
return e},readAsObject:function(e){e||(e={});var t,r=this.numHierarchies;for(t=0;r>t;t++)e[this._hierarchyOrder[t]]=this._member(t);
return e},fetchAsArray:function(e){return this.hasMoreTuples()?(e=this.readAsArray(e),this.nextTuple()):e=!1,e
},fetchAsObject:function(e){return this.hasMoreTuples(e)?(e=this.readAsObject(),this.nextTuple()):e=!1,e
},fetchAllAsArray:function(e){var t;for(e||(e=[]);t=this.fetchAsArray();)e.push(t);
return e},fetchAllAsObject:function(e){var t;for(e||(e=[]);t=this.fetchAsObject();)e.push(t);
return e}},f.Dataset.Cellset=function(e){return this._dataset=e,this._initCellset(),this
},f.Dataset.Cellset.prototype={_dataset:null,_cellNodes:null,_cellCount:null,_cellNode:null,_cellProperties:null,_idx:null,_cellOrd:null,_initCellset:function(){var e,t,r,s,i,n,E,o,_,a,u,c,l,A=this._dataset._root;
for(e=h(A,"CellData"),e||f.Exception._newError("ERROR_PARSING_RESPONSE","Xmla.Rowset",A)._throw(),t=F(e,H,U,"element"),r=t.length,i=F(A,b,"","CellInfo"),i&&0!==i.length||f.Exception._newError("ERROR_PARSING_RESPONSE","Xmla.Rowset",A)._throw(),n=i.item(0),o=F(n,b,"","*"),this._cellProperties={},u=o.length,c=0;u>c;c++)for(_=o.item(c),a=_.tagName,l=0;r>l;l++)if(s=t.item(l),s.getAttribute("name")===a){E=s.getAttribute("type"),this._cellProperties[a]=k[E],this["cell"+a]=new Function('return this.cellProperty("'+a+'")');
break}this._cellNodes=F(A,b,"","Cell"),this._cellCount=this._cellNodes.length,this.reset()
},_getCellNode:function(e){r(e)||(this._idx=e),this._cellNode=this._cellNodes.item(this._idx),this._cellOrd=this._getCellOrdinal(this._cellNode)
},_getCellOrdinal:function(e){return parseInt(e.getAttribute("CellOrdinal"),10)},cellCount:function(){return this._cellNodes.length
},reset:function(e){this._idx=e?e:0,this._getCellNode()},hasMoreCells:function(){return this._idx<this._cellCount
},nextCell:function(){return this._idx+=1,this.hasMoreCells()?(this._getCellNode(),this._cellOrd):(this._idx=0,-1)
},curr:function(){return this._idx},hasCellProperty:function(e){return!r(this._cellProperties[e])
},cellProperty:function(e){var t,r,s,i=F(this._cellNode,b,"",e).item(0);return t=d(i),s=this._cellProperties[e],s||(r=q(i,V,G,"type"),s=I(r)),s(t)
},cellOrdinal:function(){return this._cellOrd},fetchAsArrayOfValues:function(){for(var e=[],t=0,r=this._dataset.getAxis(f.Dataset.AXIS_COLUMNS).numTuples;r>t;t++)e[e.length]=this.cellValue(),this.nextCell();
return e},fetchAllAsArrayOfValues:function(){for(var e,t=[];(e=this.fetchAsArrayOfValues())&&this.hasMoreCells();)t.push(e);
return t},eachRow:function(e,t,i){r(t)&&(t=this);var n=[null];r(i)||(s(i)||(i=[i]),n=n.concat(i));
for(var E;(E=this.fetchAsArrayOfValues())&&this.hasMoreCells();)if(n[0]=E,e.apply(t,n)===!1)return!1;
return!0},_readCell:function(e,t){var r,s,i;for(r in this._cellProperties)s=F(e,b,"",r).item(0),s&&(i=this._cellProperties[r],t[r]=i?i(a(s)):"Value"===r?d(s):a(s));
return t.ordinal=this._getCellOrdinal(e),t},readCell:function(e){return e||(e={}),this._readCell(this._cellNode,e)
},eachCell:function(e,t,r){var i=[null];for(t||(t=this),r&&(s(r)||(r=[r]),i=i.concat(r));this.hasMoreCells();)if(this.nextCell(),i[0]=this.readCell(),e.apply(t,i)===!1)return!1;
return this._idx=0,!0},getByIndex:function(e,t){return this._getCellNode(e),this.readCell(t)
},getByOrdinal:function(e,t){var r,s,i,n=this.cellCount()-1;for(i=e>n?n:e;;){if(r=this._cellNodes.item(i),s=this._getCellOrdinal(r),s===e)return this.getByIndex(i,t);
if(!(s>e))return null;i--}},cellOrdinalForTupleIndexes:function(){throw"Not implemented"
},getByTupleIndexes:function(){return this.getByOrdinal(this.cellOrdinalForTupleIndexes.apply(this,arguments))
},close:function(){this._dataset=null,this._cellNodes=null,this._cellNode=null}},f.Exception=function(e,t,r,s,i,n,E){return this.type=e,this.code=t,this.message=r,this.source=i,this.helpfile=s,this.data=n,this.args=E,this
},f.Exception.TYPE_WARNING="warning",f.Exception.TYPE_ERROR="error";var z="http://code.google.com/p/xmla4js/wiki/ExceptionCodes";
f.Exception.MISSING_REQUEST_TYPE_CDE=-1,f.Exception.MISSING_REQUEST_TYPE_MSG="Missing_Request_Type",f.Exception.MISSING_REQUEST_TYPE_HLP=z+"#"+f.Exception.MISSING_REQUEST_TYPE_CDE+"_"+f.Exception.MISSING_REQUEST_TYPE_MSG,f.Exception.MISSING_STATEMENT_CDE=-2,f.Exception.MISSING_STATEMENT_MSG="Missing_Statement",f.Exception.MISSING_STATEMENT_HLP=z+"#"+f.Exception.MISSING_STATEMENT_CDE+"_"+f.Exception.MISSING_STATEMENT_MSG,f.Exception.MISSING_URL_CDE=-3,f.Exception.MISSING_URL_MSG="Missing_URL",f.Exception.MISSING_URL_HLP=z+"#"+f.Exception.MISSING_URL_CDE+"_"+f.Exception.MISSING_URL_MSG,f.Exception.NO_EVENTS_SPECIFIED_CDE=-4,f.Exception.NO_EVENTS_SPECIFIED_MSG="No_Events_Specified",f.Exception.NO_EVENTS_SPECIFIED_HLP=z+"#"+f.Exception.NO_EVENTS_SPECIFIED_CDE+"_"+f.Exception.NO_EVENTS_SPECIFIED_MSG,f.Exception.WRONG_EVENTS_FORMAT_CDE=-5,f.Exception.WRONG_EVENTS_FORMAT_MSG="Wrong_Events_Format",f.Exception.WRONG_EVENTS_FORMAT_HLP=z+"#"+f.Exception.NO_EVENTS_SPECIFIED_CDE+"_"+f.Exception.NO_EVENTS_SPECIFIED_MSG,f.Exception.UNKNOWN_EVENT_CDE=-6,f.Exception.UNKNOWN_EVENT_MSG="Unknown_Event",f.Exception.UNKNOWN_EVENT_HLP=z+"#"+f.Exception.UNKNOWN_EVENT_CDE+"_"+f.Exception.UNKNOWN_EVENT_MSG,f.Exception.INVALID_EVENT_HANDLER_CDE=-7,f.Exception.INVALID_EVENT_HANDLER_MSG="Invalid_Events_Handler",f.Exception.INVALID_EVENT_HANDLER_HLP=z+"#"+f.Exception.INVALID_EVENT_HANDLER_CDE+"_"+f.Exception.INVALID_EVENT_HANDLER_MSG,f.Exception.ERROR_PARSING_RESPONSE_CDE=-8,f.Exception.ERROR_PARSING_RESPONSE_MSG="Error_Parsing_Response",f.Exception.ERROR_PARSING_RESPONSE_HLP=z+"#"+f.Exception.ERROR_PARSING_RESPONSE_CDE+"_"+f.Exception.ERROR_PARSING_RESPONSE_MSG,f.Exception.INVALID_FIELD_CDE=-9,f.Exception.INVALID_FIELD_MSG="Invalid_Field",f.Exception.INVALID_FIELD_HLP=z+"#"+f.Exception.INVALID_FIELD_CDE+"_"+f.Exception.INVALID_FIELD_MSG,f.Exception.HTTP_ERROR_CDE=-10,f.Exception.HTTP_ERROR_MSG="HTTP Error",f.Exception.HTTP_ERROR_HLP=z+"#"+f.Exception.HTTP_ERROR_CDE+"_"+f.Exception.HTTP_ERROR_MSG,f.Exception.INVALID_HIERARCHY_CDE=-11,f.Exception.INVALID_HIERARCHY_MSG="Invalid_Hierarchy",f.Exception.INVALID_HIERARCHY_HLP=z+"#"+f.Exception.INVALID_HIERARCHY_CDE+"_"+f.Exception.INVALID_HIERARCHY_MSG,f.Exception.UNEXPECTED_ERROR_READING_MEMBER_CDE=-12,f.Exception.UNEXPECTED_ERROR_READING_MEMBER_MSG="Error_Reading_Member",f.Exception.UNEXPECTED_ERROR_READING_MEMBER_HLP=z+"#"+f.Exception.UNEXPECTED_ERROR_READING_MEMBER_CDE+"_"+f.Exception.UNEXPECTED_ERROR_READING_MEMBER_MSG,f.Exception.INVALID_AXIS_CDE=-13,f.Exception.INVALID_AXIS_MSG="The requested axis does not exist.",f.Exception.INVALID_AXIS_HLP=z+"#"+f.Exception.INVALID_AXIS_CDE+"_"+f.Exception.INVALID_AXIS_MSG,f.Exception.ILLEGAL_ARGUMENT_CDE=-14,f.Exception.ILLEGAL_ARGUMENT_MSG="Illegal arguments",f.Exception.ILLEGAL_ARGUMENT_HLP=z+"#"+f.Exception.ILLEGAL_ARGUMENT_CDE+"_"+f.Exception.ILLEGAL_ARGUMENT_MSG,f.Exception._newError=function(e,t,r){return new f.Exception(f.Exception.TYPE_ERROR,f.Exception[e+"_CDE"],f.Exception[e+"_MSG"],f.Exception[e+"_HLP"],t,r)
},f.Exception.prototype={type:null,code:null,message:null,source:null,helpfile:null,data:null,_throw:function(){throw this
},args:null,toString:function(){return this.type+" "+this.code+": "+this.message},getStackTrace:function(){var e,t="";
if(this.args)for(var r=this.args.callee;r;)e=String(r),r=r.caller;return t}}}();