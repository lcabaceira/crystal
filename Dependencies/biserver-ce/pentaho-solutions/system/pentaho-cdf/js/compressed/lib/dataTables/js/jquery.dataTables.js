!function(t,e,n){!function(t){"function"==typeof define&&define.amd?define("datatables",["jquery"],t):"object"==typeof exports?t(require("jquery")):jQuery&&!jQuery.fn.dataTable&&t(jQuery)
}(function(a){function r(t){var e,n,o="a aa ai ao as b fn i m o s ",i={};a.each(t,function(a){e=a.match(/^([^A-Z]+?)([A-Z])/),e&&-1!==o.indexOf(e[1]+" ")&&(n=a.replace(e[0],e[2].toLowerCase()),i[n]=a,"o"===e[1]&&r(t[a]))
}),t._hungarianMap=i}function o(t,e,i){t._hungarianMap||r(t);var s;a.each(e,function(r){s=t._hungarianMap[r],s===n||!i&&e[s]!==n||("o"===s.charAt(0)?(e[s]||(e[s]={}),a.extend(!0,e[s],e[r]),o(t[s],e[s],i)):e[s]=e[r])
})}function i(t){var e=$e.defaults.oLanguage,n=t.sZeroRecords;!t.sEmptyTable&&n&&"No data available in table"===e.sEmptyTable&&ke(t,t,"sZeroRecords","sEmptyTable"),!t.sLoadingRecords&&n&&"Loading..."===e.sLoadingRecords&&ke(t,t,"sZeroRecords","sLoadingRecords"),t.sInfoThousands&&(t.sThousands=t.sInfoThousands);
var a=t.sDecimal;a&&qe(a)}function s(t){Sn(t,"ordering","bSort"),Sn(t,"orderMulti","bSortMulti"),Sn(t,"orderClasses","bSortClasses"),Sn(t,"orderCellsTop","bSortCellsTop"),Sn(t,"order","aaSorting"),Sn(t,"orderFixed","aaSortingFixed"),Sn(t,"paging","bPaginate"),Sn(t,"pagingType","sPaginationType"),Sn(t,"pageLength","iDisplayLength"),Sn(t,"searching","bFilter");
var e=t.aoSearchCols;if(e)for(var n=0,a=e.length;a>n;n++)e[n]&&o($e.models.oSearch,e[n])
}function l(t){Sn(t,"orderable","bSortable"),Sn(t,"orderData","aDataSort"),Sn(t,"orderSequence","asSorting"),Sn(t,"orderDataType","sortDataType")
}function u(t){var e=t.oBrowser,n=a("<div/>").css({position:"absolute",top:0,left:0,height:1,width:1,overflow:"hidden"}).append(a("<div/>").css({position:"absolute",top:1,left:1,width:100,overflow:"scroll"}).append(a('<div class="test"/>').css({width:"100%",height:10}))).appendTo("body"),r=n.find(".test");
e.bScrollOversize=100===r[0].offsetWidth,e.bScrollbarLeft=1!==r.offset().left,n.remove()
}function c(t,e,a,r,o,i){var s,l=r,u=!1;for(a!==n&&(s=a,u=!0);l!==o;)t.hasOwnProperty(l)&&(s=u?e(s,t[l],l,t):t[l],u=!0,l+=i);
return s}function f(t,n){var r=$e.defaults.column,o=t.aoColumns.length,i=a.extend({},$e.models.oColumn,r,{nTh:n?n:e.createElement("th"),sTitle:r.sTitle?r.sTitle:n?n.innerHTML:"",aDataSort:r.aDataSort?r.aDataSort:[o],mData:r.mData?r.mData:o,idx:o});
t.aoColumns.push(i);var s=t.aoPreSearchCols;s[o]=a.extend({},$e.models.oSearch,s[o]),d(t,o,null)
}function d(t,e,r){var i=t.aoColumns[e],s=t.oClasses,u=a(i.nTh);if(!i.sWidthOrig){i.sWidthOrig=u.attr("width")||null;
var c=(u.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);c&&(i.sWidthOrig=c[1])
}r!==n&&null!==r&&(l(r),o($e.defaults.column,r),r.mDataProp===n||r.mData||(r.mData=r.mDataProp),r.sType&&(i._sManualType=r.sType),r.className&&!r.sClass&&(r.sClass=r.className),a.extend(i,r),ke(i,r,"sWidth","sWidthOrig"),"number"==typeof r.iDataSort&&(i.aDataSort=[r.iDataSort]),ke(i,r,"aDataSort"));
var f=i.mData,d=I(f),h=i.mRender?I(i.mRender):null,p=function(t){return"string"==typeof t&&-1!==t.indexOf("@")
};i._bAttrSrc=a.isPlainObject(f)&&(p(f.sort)||p(f.type)||p(f.filter)),i.fnGetData=function(t,e,a){var r=d(t,e,n,a);
return h&&e?h(r,e,t,a):r},i.fnSetData=function(t,e,n){return A(f)(t,e,n)},t.oFeatures.bSort||(i.bSortable=!1,u.addClass(s.sSortableNone));
var g=-1!==a.inArray("asc",i.asSorting),b=-1!==a.inArray("desc",i.asSorting);i.bSortable&&(g||b)?g&&!b?(i.sSortingClass=s.sSortableAsc,i.sSortingClassJUI=s.sSortJUIAscAllowed):!g&&b?(i.sSortingClass=s.sSortableDesc,i.sSortingClassJUI=s.sSortJUIDescAllowed):(i.sSortingClass=s.sSortable,i.sSortingClassJUI=s.sSortJUI):(i.sSortingClass=s.sSortableNone,i.sSortingClassJUI="")
}function h(t){if(t.oFeatures.bAutoWidth!==!1){var e=t.aoColumns;Se(t);for(var n=0,a=e.length;a>n;n++)e[n].nTh.style.width=e[n].sWidth
}var r=t.oScroll;(""!==r.sY||""!==r.sX)&&be(t),Ee(t,null,"column-sizing",[t])}function p(t,e){var n=v(t,"bVisible");
return"number"==typeof n[e]?n[e]:null}function g(t,e){var n=v(t,"bVisible"),r=a.inArray(e,n);
return-1!==r?r:null}function b(t){return v(t,"bVisible").length}function v(t,e){var n=[];
return a.map(t.aoColumns,function(t,a){t[e]&&n.push(a)}),n}function S(t){var e,a,r,o,i,s,l,u,c,f=t.aoColumns,d=t.aoData,h=$e.ext.type.detect;
for(e=0,a=f.length;a>e;e++)if(l=f[e],c=[],!l.sType&&l._sManualType)l.sType=l._sManualType;
else if(!l.sType){for(r=0,o=h.length;o>r;r++){for(i=0,s=d.length;s>i&&(c[i]===n&&(c[i]=T(t,i,e,"type")),u=h[r](c[i],t),u&&"html"!==u);i++);if(u){l.sType=u;
break}}l.sType||(l.sType="string")}}function m(t,e,r,o){var i,s,l,u,c,d,h,p=t.aoColumns;
if(e)for(i=e.length-1;i>=0;i--){h=e[i];var g=h.targets!==n?h.targets:h.aTargets;for(a.isArray(g)||(g=[g]),l=0,u=g.length;u>l;l++)if("number"==typeof g[l]&&g[l]>=0){for(;p.length<=g[l];)f(t);
o(g[l],h)}else if("number"==typeof g[l]&&g[l]<0)o(p.length+g[l],h);else if("string"==typeof g[l])for(c=0,d=p.length;d>c;c++)("_all"==g[l]||a(p[c].nTh).hasClass(g[l]))&&o(c,h)
}if(r)for(i=0,s=r.length;s>i;i++)o(i,r[i])}function D(t,e,n,r){var o=t.aoData.length,i=a.extend(!0,{},$e.models.oRow,{src:n?"dom":"data"});
i._aData=e,t.aoData.push(i);for(var s=t.aoColumns,l=0,u=s.length;u>l;l++)n&&w(t,o,l,T(t,o,l)),s[l].sType=null;
return t.aiDisplayMaster.push(o),(n||!t.oFeatures.bDeferRender)&&H(t,o,n,r),o}function y(t,e){var n;
return e instanceof a||(e=a(e)),e.map(function(e,a){return n=j(t,a),D(t,n.data,a,n.cells)
})}function _(t,e){return e._DT_RowIndex!==n?e._DT_RowIndex:null}function C(t,e,n){return a.inArray(n,t.aoData[e].anCells)
}function T(t,e,a,r){var o=t.iDraw,i=t.aoColumns[a],s=t.aoData[e]._aData,l=i.sDefaultContent,u=i.fnGetData(s,r,{settings:t,row:e,col:a});
if(u===n)return t.iDrawError!=o&&null===l&&(We(t,0,"Requested unknown parameter "+("function"==typeof i.mData?"{function}":"'"+i.mData+"'")+" for row "+e,4),t.iDrawError=o),l;
if(u!==s&&null!==u||null===l){if("function"==typeof u)return u.call(s)}else u=l;return null===u&&"display"==r?"":u
}function w(t,e,n,a){var r=t.aoColumns[n],o=t.aoData[e]._aData;r.fnSetData(o,a,{settings:t,row:e,col:n})
}function x(t){return a.map(t.match(/(\\.|[^\.])+/g),function(t){return t.replace(/\\./g,".")
})}function I(t){if(a.isPlainObject(t)){var e={};return a.each(t,function(t,n){n&&(e[t]=I(n))
}),function(t,a,r,o){var i=e[a]||e._;return i!==n?i(t,a,r,o):t}}if(null===t)return function(t){return t
};if("function"==typeof t)return function(e,n,a,r){return t(e,n,a,r)};if("string"!=typeof t||-1===t.indexOf(".")&&-1===t.indexOf("[")&&-1===t.indexOf("("))return function(e){return e[t]
};var r=function(t,e,a){var o,i,s,l;if(""!==a)for(var u=x(a),c=0,f=u.length;f>c;c++){if(o=u[c].match(mn),i=u[c].match(Dn),o){u[c]=u[c].replace(mn,""),""!==u[c]&&(t=t[u[c]]),s=[],u.splice(0,c+1),l=u.join(".");
for(var d=0,h=t.length;h>d;d++)s.push(r(t[d],e,l));var p=o[0].substring(1,o[0].length-1);
t=""===p?s:s.join(p);break}if(i)u[c]=u[c].replace(Dn,""),t=t[u[c]]();else{if(null===t||t[u[c]]===n)return n;
t=t[u[c]]}}return t};return function(e,n){return r(e,n,t)}}function A(t){if(a.isPlainObject(t))return A(t._);
if(null===t)return function(){};if("function"==typeof t)return function(e,n,a){t(e,"set",n,a)
};if("string"!=typeof t||-1===t.indexOf(".")&&-1===t.indexOf("[")&&-1===t.indexOf("("))return function(e,n){e[t]=n
};var e=function(t,a,r){for(var o,i,s,l,u,c=x(r),f=c[c.length-1],d=0,h=c.length-1;h>d;d++){if(i=c[d].match(mn),s=c[d].match(Dn),i){c[d]=c[d].replace(mn,""),t[c[d]]=[],o=c.slice(),o.splice(0,d+1),u=o.join(".");
for(var p=0,g=a.length;g>p;p++)l={},e(l,a[p],u),t[c[d]].push(l);return}s&&(c[d]=c[d].replace(Dn,""),t=t[c[d]](a)),(null===t[c[d]]||t[c[d]]===n)&&(t[c[d]]={}),t=t[c[d]]
}f.match(Dn)?t=t[f.replace(Dn,"")](a):t[f.replace(mn,"")]=a};return function(n,a){return e(n,a,t)
}}function F(t){return hn(t.aoData,"_aData")}function L(t){t.aoData.length=0,t.aiDisplayMaster.length=0,t.aiDisplay.length=0
}function P(t,e,a){for(var r=-1,o=0,i=t.length;i>o;o++)t[o]==e?r=o:t[o]>e&&t[o]--;
-1!=r&&a===n&&t.splice(r,1)}function R(t,e,a,r){var o,i,s=t.aoData[e];if("dom"!==a&&(a&&"auto"!==a||"dom"!==s.src)){var l,u=s.anCells;
if(u)for(o=0,i=u.length;i>o;o++){for(l=u[o];l.childNodes.length;)l.removeChild(l.firstChild);
u[o].innerHTML=T(t,e,o,"display")}}else s._aData=j(t,s).data;s._aSortData=null,s._aFilterData=null;
var c=t.aoColumns;if(r!==n)c[r].sType=null;else for(o=0,i=c.length;i>o;o++)c[o].sType=null;
N(s)}function j(t,e){var n,r,o,i,s=[],l=[],u=e.firstChild,c=0,f=t.aoColumns,d=function(t,e,n){if("string"==typeof t){var a=t.indexOf("@");
if(-1!==a){var r=t.substring(a+1);o["@"+r]=n.getAttribute(r)}}},h=function(t){r=f[c],i=a.trim(t.innerHTML),r&&r._bAttrSrc?(o={display:i},d(r.mData.sort,o,t),d(r.mData.type,o,t),d(r.mData.filter,o,t),s.push(o)):s.push(i),c++
};if(u)for(;u;)n=u.nodeName.toUpperCase(),("TD"==n||"TH"==n)&&(h(u),l.push(u)),u=u.nextSibling;
else{l=e.anCells;for(var p=0,g=l.length;g>p;p++)h(l[p])}return{data:s,cells:l}}function H(t,n,a,r){var o,i,s,l,u,c=t.aoData[n],f=c._aData,d=[];
if(null===c.nTr){for(o=a||e.createElement("tr"),c.nTr=o,c.anCells=d,o._DT_RowIndex=n,N(c),l=0,u=t.aoColumns.length;u>l;l++)s=t.aoColumns[l],i=a?r[l]:e.createElement(s.sCellType),d.push(i),(!a||s.mRender||s.mData!==l)&&(i.innerHTML=T(t,n,l,"display")),s.sClass&&(i.className+=" "+s.sClass),s.bVisible&&!a?o.appendChild(i):!s.bVisible&&a&&i.parentNode.removeChild(i),s.fnCreatedCell&&s.fnCreatedCell.call(t.oInstance,i,T(t,n,l),f,n,l);
Ee(t,"aoRowCreatedCallback",null,[o,f,n])}c.nTr.setAttribute("role","row")}function N(t){var e=t.nTr,n=t._aData;
if(e){if(n.DT_RowId&&(e.id=n.DT_RowId),n.DT_RowClass){var r=n.DT_RowClass.split(" ");
t.__rowc=t.__rowc?vn(t.__rowc.concat(r)):r,a(e).removeClass(t.__rowc.join(" ")).addClass(n.DT_RowClass)
}n.DT_RowData&&a(e).data(n.DT_RowData)}}function W(t){var e,n,r,o,i,s=t.nTHead,l=t.nTFoot,u=0===a("th, td",s).length,c=t.oClasses,f=t.aoColumns;
for(u&&(o=a("<tr/>").appendTo(s)),e=0,n=f.length;n>e;e++)i=f[e],r=a(i.nTh).addClass(i.sClass),u&&r.appendTo(o),t.oFeatures.bSort&&(r.addClass(i.sSortingClass),i.bSortable!==!1&&(r.attr("tabindex",t.iTabIndex).attr("aria-controls",t.sTableId),Le(t,i.nTh,e))),i.sTitle!=r.html()&&r.html(i.sTitle),Be(t,"header")(t,r,i,c);
if(u&&E(t.aoHeader,s),a(s).find(">tr").attr("role","row"),a(s).find(">tr>th, >tr>td").addClass(c.sHeaderTH),a(l).find(">tr>th, >tr>td").addClass(c.sFooterTH),null!==l){var d=t.aoFooter[0];
for(e=0,n=d.length;n>e;e++)i=f[e],i.nTf=d[e].cell,i.sClass&&a(i.nTf).addClass(i.sClass)
}}function k(t,e,r){var o,i,s,l,u,c,f,d,h,p=[],g=[],b=t.aoColumns.length;if(e){for(r===n&&(r=!1),o=0,i=e.length;i>o;o++){for(p[o]=e[o].slice(),p[o].nTr=e[o].nTr,s=b-1;s>=0;s--)t.aoColumns[s].bVisible||r||p[o].splice(s,1);
g.push([])}for(o=0,i=p.length;i>o;o++){if(f=p[o].nTr)for(;c=f.firstChild;)f.removeChild(c);
for(s=0,l=p[o].length;l>s;s++)if(d=1,h=1,g[o][s]===n){for(f.appendChild(p[o][s].cell),g[o][s]=1;p[o+d]!==n&&p[o][s].cell==p[o+d][s].cell;)g[o+d][s]=1,d++;
for(;p[o][s+h]!==n&&p[o][s].cell==p[o][s+h].cell;){for(u=0;d>u;u++)g[o+u][s+h]=1;
h++}a(p[o][s].cell).attr("rowspan",d).attr("colspan",h)}}}}function O(t){var e=Ee(t,"aoPreDrawCallback","preDraw",[t]);
if(-1!==a.inArray(!1,e))return pe(t,!1),void 0;var r=[],o=0,i=t.asStripeClasses,s=i.length,l=(t.aoOpenRows.length,t.oLanguage),u=t.iInitDisplayStart,c="ssp"==Xe(t),f=t.aiDisplay;
t.bDrawing=!0,u!==n&&-1!==u&&(t._iDisplayStart=c?u:u>=t.fnRecordsDisplay()?0:u,t.iInitDisplayStart=-1);
var d=t._iDisplayStart,h=t.fnDisplayEnd();if(t.bDeferLoading)t.bDeferLoading=!1,t.iDraw++,pe(t,!1);
else if(c){if(!t.bDestroying&&!X(t))return}else t.iDraw++;if(0!==f.length)for(var p=c?0:d,g=c?t.aoData.length:h,v=p;g>v;v++){var S=f[v],m=t.aoData[S];
null===m.nTr&&H(t,S);var D=m.nTr;if(0!==s){var y=i[o%s];m._sRowStripe!=y&&(a(D).removeClass(m._sRowStripe).addClass(y),m._sRowStripe=y)
}Ee(t,"aoRowCallback",null,[D,m._aData,o,v]),r.push(D),o++}else{var _=l.sZeroRecords;
1==t.iDraw&&"ajax"==Xe(t)?_=l.sLoadingRecords:l.sEmptyTable&&0===t.fnRecordsTotal()&&(_=l.sEmptyTable),r[0]=a("<tr/>",{"class":s?i[0]:""}).append(a("<td />",{valign:"top",colSpan:b(t),"class":t.oClasses.sRowEmpty}).html(_))[0]
}Ee(t,"aoHeaderCallback","header",[a(t.nTHead).children("tr")[0],F(t),d,h,f]),Ee(t,"aoFooterCallback","footer",[a(t.nTFoot).children("tr")[0],F(t),d,h,f]);
var C=a(t.nTBody);C.children().detach(),C.append(a(r)),Ee(t,"aoDrawCallback","draw",[t]),t.bSorted=!1,t.bFiltered=!1,t.bDrawing=!1
}function M(t,e){var n=t.oFeatures,a=n.bSort,r=n.bFilter;a&&Ie(t),r?Y(t,t.oPreviousSearch):t.aiDisplay=t.aiDisplayMaster.slice(),e!==!0&&(t._iDisplayStart=0),t._drawHold=e,O(t),t._drawHold=!1
}function U(t){var e=t.oClasses,n=a(t.nTable),r=a("<div/>").insertBefore(n),o=t.oFeatures,i=a("<div/>",{id:t.sTableId+"_wrapper","class":e.sWrapper+(t.nTFoot?"":" "+e.sNoFooter)});
t.nHolding=r[0],t.nTableWrapper=i[0],t.nTableReinsertBefore=t.nTable.nextSibling;
for(var s,l,u,c,f,d,h=t.sDom.split(""),p=0;p<h.length;p++){if(s=null,l=h[p],"<"==l){if(u=a("<div/>")[0],c=h[p+1],"'"==c||'"'==c){for(f="",d=2;h[p+d]!=c;)f+=h[p+d],d++;
if("H"==f?f=e.sJUIHeader:"F"==f&&(f=e.sJUIFooter),-1!=f.indexOf(".")){var g=f.split(".");
u.id=g[0].substr(1,g[0].length-1),u.className=g[1]}else"#"==f.charAt(0)?u.id=f.substr(1,f.length-1):u.className=f;
p+=d}i.append(u),i=a(u)}else if(">"==l)i=i.parent();else if("l"==l&&o.bPaginate&&o.bLengthChange)s=ce(t);
else if("f"==l&&o.bFilter)s=$(t);else if("r"==l&&o.bProcessing)s=he(t);else if("t"==l)s=ge(t);
else if("i"==l&&o.bInfo)s=re(t);else if("p"==l&&o.bPaginate)s=fe(t);else if(0!==$e.ext.feature.length)for(var b=$e.ext.feature,v=0,S=b.length;S>v;v++)if(l==b[v].cFeature){s=b[v].fnInit(t);
break}if(s){var m=t.aanFeatures;m[l]||(m[l]=[]),m[l].push(s),i.append(s)}}r.replaceWith(i)
}function E(t,e){var n,r,o,i,s,l,u,c,f,d,h,p=a(e).children("tr"),g=function(t,e,n){for(var a=t[e];a[n];)n++;
return n};for(t.splice(0,t.length),o=0,l=p.length;l>o;o++)t.push([]);for(o=0,l=p.length;l>o;o++)for(n=p[o],c=0,r=n.firstChild;r;){if("TD"==r.nodeName.toUpperCase()||"TH"==r.nodeName.toUpperCase())for(f=1*r.getAttribute("colspan"),d=1*r.getAttribute("rowspan"),f=f&&0!==f&&1!==f?f:1,d=d&&0!==d&&1!==d?d:1,u=g(t,o,c),h=1===f?!0:!1,s=0;f>s;s++)for(i=0;d>i;i++)t[o+i][u+s]={cell:r,unique:h},t[o+i].nTr=n;
r=r.nextSibling}}function J(t,e,n){var a=[];n||(n=t.aoHeader,e&&(n=[],E(n,e)));for(var r=0,o=n.length;o>r;r++)for(var i=0,s=n[r].length;s>i;i++)!n[r][i].unique||a[i]&&t.bSortCellsTop||(a[i]=n[r][i].cell);
return a}function B(t,e,n){if(Ee(t,"aoServerParams","serverParams",[e]),e&&a.isArray(e)){var r={},o=/(.*?)\[\]$/;
a.each(e,function(t,e){var n=e.name.match(o);if(n){var a=n[0];r[a]||(r[a]=[]),r[a].push(e.value)
}else r[e.name]=e.value}),e=r}var i,s=t.ajax,l=t.oInstance;if(a.isPlainObject(s)&&s.data){i=s.data;
var u=a.isFunction(i)?i(e):i;e=a.isFunction(i)&&u?u:a.extend(!0,e,u),delete s.data
}var c={data:e,success:function(e){var a=e.error||e.sError;a&&t.oApi._fnLog(t,0,a),t.json=e,Ee(t,null,"xhr",[t,e]),n(e)
},dataType:"json",cache:!1,type:t.sServerMethod,error:function(e,n){var a=t.oApi._fnLog;
"parsererror"==n?a(t,0,"Invalid JSON response",1):4===e.readyState&&a(t,0,"Ajax error",7),pe(t,!1)
}};t.oAjaxData=e,Ee(t,null,"preXhr",[t,e]),t.fnServerData?t.fnServerData.call(l,t.sAjaxSource,a.map(e,function(t,e){return{name:e,value:t}
}),n,t):t.sAjaxSource||"string"==typeof s?t.jqXHR=a.ajax(a.extend(c,{url:s||t.sAjaxSource})):a.isFunction(s)?t.jqXHR=s.call(l,e,n,t):(t.jqXHR=a.ajax(a.extend(c,s)),s.data=i)
}function X(t){return t.bAjaxDataGet?(t.iDraw++,pe(t,!0),B(t,V(t),function(e){q(t,e)
}),!1):!0}function V(t){var e,n,r,o,i=t.aoColumns,s=i.length,l=t.oFeatures,u=t.oPreviousSearch,c=t.aoPreSearchCols,f=[],d=xe(t),h=t._iDisplayStart,p=l.bPaginate!==!1?t._iDisplayLength:-1,g=function(t,e){f.push({name:t,value:e})
};g("sEcho",t.iDraw),g("iColumns",s),g("sColumns",hn(i,"sName").join(",")),g("iDisplayStart",h),g("iDisplayLength",p);
var b={draw:t.iDraw,columns:[],order:[],start:h,length:p,search:{value:u.sSearch,regex:u.bRegex}};
for(e=0;s>e;e++)r=i[e],o=c[e],n="function"==typeof r.mData?"function":r.mData,b.columns.push({data:n,name:r.sName,searchable:r.bSearchable,orderable:r.bSortable,search:{value:o.sSearch,regex:o.bRegex}}),g("mDataProp_"+e,n),l.bFilter&&(g("sSearch_"+e,o.sSearch),g("bRegex_"+e,o.bRegex),g("bSearchable_"+e,r.bSearchable)),l.bSort&&g("bSortable_"+e,r.bSortable);
l.bFilter&&(g("sSearch",u.sSearch),g("bRegex",u.bRegex)),l.bSort&&(a.each(d,function(t,e){b.order.push({column:e.col,dir:e.dir}),g("iSortCol_"+t,e.col),g("sSortDir_"+t,e.dir)
}),g("iSortingCols",d.length));var v=$e.ext.legacy.ajax;return null===v?t.sAjaxSource?f:b:v?f:b
}function q(t,e){var a=function(t,a){return e[t]!==n?e[t]:e[a]},r=a("sEcho","draw"),o=a("iTotalRecords","recordsTotal"),i=a("iTotalDisplayRecords","recordsFiltered");
if(r){if(1*r<t.iDraw)return;t.iDraw=1*r}L(t),t._iRecordsTotal=parseInt(o,10),t._iRecordsDisplay=parseInt(i,10);
for(var s=G(t,e),l=0,u=s.length;u>l;l++)D(t,s[l]);t.aiDisplay=t.aiDisplayMaster.slice(),t.bAjaxDataGet=!1,O(t),t._bInitComplete||le(t,e),t.bAjaxDataGet=!0,pe(t,!1)
}function G(t,e){var r=a.isPlainObject(t.ajax)&&t.ajax.dataSrc!==n?t.ajax.dataSrc:t.sAjaxDataProp;
return"data"===r?e.aaData||e[r]:""!==r?I(r)(e):e}function $(t){var n=t.oClasses,r=t.sTableId,o=t.oLanguage,i=t.oPreviousSearch,s=t.aanFeatures,l='<input type="search" class="'+n.sFilterInput+'"/>',u=o.sSearch;
u=u.match(/_INPUT_/)?u.replace("_INPUT_",l):u+l;var c=a("<div/>",{id:s.f?null:r+"_filter","class":n.sFilter}).append(a("<label/>").append(u)),f=function(){var e=(s.f,this.value?this.value:"");
e!=i.sSearch&&(Y(t,{sSearch:e,bRegex:i.bRegex,bSmart:i.bSmart,bCaseInsensitive:i.bCaseInsensitive}),t._iDisplayStart=0,O(t))
},d=a("input",c).val(i.sSearch).attr("placeholder",o.sSearchPlaceholder).bind("keyup.DT search.DT input.DT paste.DT cut.DT","ssp"===Xe(t)?me(f,400):f).bind("keypress.DT",function(t){return 13==t.keyCode?!1:void 0
}).attr("aria-controls",r);return a(t.nTable).on("search.dt.DT",function(n,a){if(t===a)try{d[0]!==e.activeElement&&d.val(i.sSearch)
}catch(r){}}),c[0]}function Y(t,e,a){var r=t.oPreviousSearch,o=t.aoPreSearchCols,i=function(t){r.sSearch=t.sSearch,r.bRegex=t.bRegex,r.bSmart=t.bSmart,r.bCaseInsensitive=t.bCaseInsensitive
},s=function(t){return t.bEscapeRegex!==n?!t.bEscapeRegex:t.bRegex};if(S(t),"ssp"!=Xe(t)){Z(t,e.sSearch,a,s(e),e.bSmart,e.bCaseInsensitive),i(e);
for(var l=0;l<o.length;l++)Q(t,o[l].sSearch,l,s(o[l]),o[l].bSmart,o[l].bCaseInsensitive);
z(t)}else i(e);t.bFiltered=!0,Ee(t,null,"search",[t])}function z(t){for(var e,n,a=$e.ext.search,r=t.aiDisplay,o=0,i=a.length;i>o;o++){for(var s=[],l=0,u=r.length;u>l;l++)n=r[l],e=t.aoData[n],a[o](t,e._aFilterData,n,e._aData,l)&&s.push(n);
r.length=0,r.push.apply(r,s)}}function Q(t,e,n,a,r,o){if(""!==e)for(var i,s=t.aiDisplay,l=K(e,a,r,o),u=s.length-1;u>=0;u--)i=t.aoData[s[u]]._aFilterData[n],l.test(i)||s.splice(u,1)
}function Z(t,e,n,a,r,o){var i,s,l,u=K(e,a,r,o),c=t.oPreviousSearch.sSearch,f=t.aiDisplayMaster;
if(0!==$e.ext.search.length&&(n=!0),s=ee(t),e.length<=0)t.aiDisplay=f.slice();else for((s||n||c.length>e.length||0!==e.indexOf(c)||t.bSorted)&&(t.aiDisplay=f.slice()),i=t.aiDisplay,l=i.length-1;l>=0;l--)u.test(t.aoData[i[l]]._sFilterRow)||i.splice(l,1)
}function K(t,e,n,r){if(t=e?t:te(t),n){var o=a.map(t.match(/"[^"]+"|[^ ]+/g)||"",function(t){return'"'===t.charAt(0)?t.match(/^"(.*)"$/)[1]:t
});t="^(?=.*?"+o.join(")(?=.*?")+").*$"}return new RegExp(t,r?"i":"")}function te(t){return t.replace(rn,"\\$1")
}function ee(t){var e,n,a,r,o,i,s,l,u=t.aoColumns,c=$e.ext.type.search,f=!1;for(n=0,r=t.aoData.length;r>n;n++)if(l=t.aoData[n],!l._aFilterData){for(i=[],a=0,o=u.length;o>a;a++)e=u[a],e.bSearchable?(s=T(t,n,a,"filter"),s=c[e.sType]?c[e.sType](s):null!==s?s:""):s="",s&&(s.indexOf&&-1!==s.indexOf("&")&&(yn.innerHTML=s,s=_n?yn.textContent:yn.innerText),s.replace&&(s=s.replace(/[\r\n]/g,"")),i.push(s));
l._aFilterData=i,l._sFilterRow=i.join("  "),f=!0}return f}function ne(t){return{search:t.sSearch,smart:t.bSmart,regex:t.bRegex,caseInsensitive:t.bCaseInsensitive}
}function ae(t){return{sSearch:t.search,bSmart:t.smart,bRegex:t.regex,bCaseInsensitive:t.caseInsensitive}
}function re(t){var e=t.sTableId,n=t.aanFeatures.i,r=a("<div/>",{"class":t.oClasses.sInfo,id:n?null:e+"_info"});
return n||(t.aoDrawCallback.push({fn:oe,sName:"information"}),r.attr("role","status").attr("aria-live","polite"),a(t.nTable).attr("aria-describedby",e+"_info")),r[0]
}function oe(t){var e=t.aanFeatures.i;if(0!==e.length){var n=t.oLanguage,r=t._iDisplayStart+1,o=t.fnDisplayEnd(),i=t.fnRecordsTotal(),s=t.fnRecordsDisplay(),l=s?n.sInfo:n.sInfoEmpty;
s!==i&&(l+=" "+n.sInfoFiltered),l+=n.sInfoPostFix,l=ie(t,l);var u=n.fnInfoCallback;
null!==u&&(l=u.call(t.oInstance,t,r,o,i,s,l)),a(e).html(l)}}function ie(t,e){var n=t.fnFormatNumber,a=t._iDisplayStart+1,r=t._iDisplayLength,o=t.fnRecordsDisplay(),i=-1===r;
return e.replace(/_START_/g,n.call(t,a)).replace(/_END_/g,n.call(t,t.fnDisplayEnd())).replace(/_MAX_/g,n.call(t,t.fnRecordsTotal())).replace(/_TOTAL_/g,n.call(t,o)).replace(/_PAGE_/g,n.call(t,i?1:Math.ceil(a/r))).replace(/_PAGES_/g,n.call(t,i?1:Math.ceil(o/r)))
}function se(t){var e,n,a,r=t.iInitDisplayStart,o=t.aoColumns,i=t.oFeatures;if(!t.bInitialised)return setTimeout(function(){se(t)
},200),void 0;for(U(t),W(t),k(t,t.aoHeader),k(t,t.aoFooter),pe(t,!0),i.bAutoWidth&&Se(t),e=0,n=o.length;n>e;e++)a=o[e],a.sWidth&&(a.nTh.style.width=Te(a.sWidth));
M(t);var s=Xe(t);"ssp"!=s&&("ajax"==s?B(t,[],function(n){var a=G(t,n);for(e=0;e<a.length;e++)D(t,a[e]);
t.iInitDisplayStart=r,M(t),pe(t,!1),le(t,n)},t):(pe(t,!1),le(t)))}function le(t,e){t._bInitComplete=!0,e&&h(t),Ee(t,"aoInitComplete","init",[t,e])
}function ue(t,e){var n=parseInt(e,10);t._iDisplayLength=n,Je(t),Ee(t,null,"length",[t,n])
}function ce(t){for(var e=t.oClasses,n=t.sTableId,r=t.aLengthMenu,o=a.isArray(r[0]),i=o?r[0]:r,s=o?r[1]:r,l=a("<select/>",{name:n+"_length","aria-controls":n,"class":e.sLengthSelect}),u=0,c=i.length;c>u;u++)l[0][u]=new Option(s[u],i[u]);
var f=a("<div><label/></div>").addClass(e.sLength);return t.aanFeatures.l||(f[0].id=n+"_length"),f.children().append(t.oLanguage.sLengthMenu.replace("_MENU_",l[0].outerHTML)),a("select",f).val(t._iDisplayLength).bind("change.DT",function(){ue(t,a(this).val()),O(t)
}),a(t.nTable).bind("length.dt.DT",function(e,n,r){t===n&&a("select",f).val(r)}),f[0]
}function fe(t){var e=t.sPaginationType,n=$e.ext.pager[e],r="function"==typeof n,o=function(t){O(t)
},i=a("<div/>").addClass(t.oClasses.sPaging+e)[0],s=t.aanFeatures;return r||n.fnInit(t,i,o),s.p||(i.id=t.sTableId+"_paginate",t.aoDrawCallback.push({fn:function(t){if(r){var e,a,i=t._iDisplayStart,l=t._iDisplayLength,u=t.fnRecordsDisplay(),c=-1===l,f=c?0:Math.ceil(i/l),d=c?1:Math.ceil(u/l),h=n(f,d);
for(e=0,a=s.p.length;a>e;e++)Be(t,"pageButton")(t,s.p[e],e,h,f,d)}else n.fnUpdate(t,o)
},sName:"pagination"})),i}function de(t,e,n){var a=t._iDisplayStart,r=t._iDisplayLength,o=t.fnRecordsDisplay();
0===o||-1===r?a=0:"number"==typeof e?(a=e*r,a>o&&(a=0)):"first"==e?a=0:"previous"==e?(a=r>=0?a-r:0,0>a&&(a=0)):"next"==e?o>a+r&&(a+=r):"last"==e?a=Math.floor((o-1)/r)*r:We(t,0,"Unknown paging action: "+e,5);
var i=t._iDisplayStart!==a;return t._iDisplayStart=a,i&&(Ee(t,null,"page",[t]),n&&O(t)),i
}function he(t){return a("<div/>",{id:t.aanFeatures.r?null:t.sTableId+"_processing","class":t.oClasses.sProcessing}).html(t.oLanguage.sProcessing).insertBefore(t.nTable)[0]
}function pe(t,e){t.oFeatures.bProcessing&&a(t.aanFeatures.r).css("display",e?"block":"none"),Ee(t,null,"processing",[t,e])
}function ge(t){var e=a(t.nTable);e.attr("role","grid");var n=t.oScroll;if(""===n.sX&&""===n.sY)return t.nTable;
var r=n.sX,o=n.sY,i=t.oClasses,s=e.children("caption"),l=s.length?s[0]._captionSide:null,u=a(e[0].cloneNode(!1)),c=a(e[0].cloneNode(!1)),f=e.children("tfoot"),d="<div/>",h=function(t){return t?Te(t):null
};n.sX&&"100%"===e.attr("width")&&e.removeAttr("width"),f.length||(f=null);var p=a(d,{"class":i.sScrollWrapper}).append(a(d,{"class":i.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:r?h(r):"100%"}).append(a(d,{"class":i.sScrollHeadInner}).css({"box-sizing":"content-box",width:n.sXInner||"100%"}).append(u.removeAttr("id").css("margin-left",0).append(e.children("thead")))).append("top"===l?s:null)).append(a(d,{"class":i.sScrollBody}).css({overflow:"auto",height:h(o),width:h(r)}).append(e));
f&&p.append(a(d,{"class":i.sScrollFoot}).css({overflow:"hidden",border:0,width:r?h(r):"100%"}).append(a(d,{"class":i.sScrollFootInner}).append(c.removeAttr("id").css("margin-left",0).append(e.children("tfoot")))).append("bottom"===l?s:null));
var g=p.children(),b=g[0],v=g[1],S=f?g[2]:null;return r&&a(v).scroll(function(){var t=this.scrollLeft;
b.scrollLeft=t,f&&(S.scrollLeft=t)}),t.nScrollHead=b,t.nScrollBody=v,t.nScrollFoot=S,t.aoDrawCallback.push({fn:be,sName:"scrolling"}),p[0]
}function be(t){var e,n,r,o,i,s,l,u,c,f=t.oScroll,d=f.sX,h=f.sXInner,g=f.sY,b=f.iBarWidth,v=a(t.nScrollHead),S=v[0].style,m=v.children("div"),D=m[0].style,y=m.children("table"),_=t.nScrollBody,C=a(_),T=_.style,w=a(t.nScrollFoot),x=w.children("div"),I=x.children("table"),A=a(t.nTHead),F=a(t.nTable),L=F[0],P=L.style,R=t.nTFoot?a(t.nTFoot):null,j=t.oBrowser,H=j.bScrollOversize,N=[],W=[],k=[],O=function(t){var e=t.style;
e.paddingTop="0",e.paddingBottom="0",e.borderTopWidth="0",e.borderBottomWidth="0",e.height=0
};if(F.children("thead, tfoot").remove(),i=A.clone().prependTo(F),e=A.find("tr"),r=i.find("tr"),i.find("th, td").removeAttr("tabindex"),R&&(s=R.clone().prependTo(F),n=R.find("tr"),o=s.find("tr")),d||(T.width="100%",v[0].style.width="100%"),a.each(J(t,i),function(e,n){l=p(t,e),n.style.width=t.aoColumns[l].sWidth
}),R&&ve(function(t){t.style.width=""},o),f.bCollapse&&""!==g&&(T.height=C[0].offsetHeight+A[0].offsetHeight+"px"),c=F.outerWidth(),""===d?(P.width="100%",H&&(F.find("tbody").height()>_.offsetHeight||"scroll"==C.css("overflow-y"))&&(P.width=Te(F.outerWidth()-b))):""!==h?P.width=Te(h):c==C.width()&&C.height()<F.height()?(P.width=Te(c-b),F.outerWidth()>c-b&&(P.width=Te(c))):P.width=Te(c),c=F.outerWidth(),ve(O,r),ve(function(t){k.push(t.innerHTML),N.push(Te(a(t).css("width")))
},r),ve(function(t,e){t.style.width=N[e]},e),a(r).height(0),R&&(ve(O,o),ve(function(t){W.push(Te(a(t).css("width")))
},o),ve(function(t,e){t.style.width=W[e]},n),a(o).height(0)),ve(function(t,e){t.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+k[e]+"</div>",t.style.width=N[e]
},r),R&&ve(function(t,e){t.innerHTML="",t.style.width=W[e]},o),F.outerWidth()<c?(u=_.scrollHeight>_.offsetHeight||"scroll"==C.css("overflow-y")?c+b:c,H&&(_.scrollHeight>_.offsetHeight||"scroll"==C.css("overflow-y"))&&(P.width=Te(u-b)),(""===d||""!==h)&&We(t,1,"Possible column misalignment",6)):u="100%",T.width=Te(u),S.width=Te(u),R&&(t.nScrollFoot.style.width=Te(u)),g||H&&(T.height=Te(L.offsetHeight+b)),g&&f.bCollapse){T.height=Te(g);
var M=d&&L.offsetWidth>_.offsetWidth?b:0;L.offsetHeight<_.offsetHeight&&(T.height=Te(L.offsetHeight+M))
}var U=F.outerWidth();y[0].style.width=Te(U),D.width=Te(U);var E=F.height()>_.clientHeight||"scroll"==C.css("overflow-y"),B="padding"+(j.bScrollbarLeft?"Left":"Right");
D[B]=E?b+"px":"0px",R&&(I[0].style.width=Te(U),x[0].style.width=Te(U),x[0].style[B]=E?b+"px":"0px"),C.scroll(),!t.bSorted&&!t.bFiltered||t._drawHold||(_.scrollTop=0)
}function ve(t,e,n){for(var a,r,o=0,i=0,s=e.length;s>i;){for(a=e[i].firstChild,r=n?n[i].firstChild:null;a;)1===a.nodeType&&(n?t(a,r,o):t(a,o),o++),a=a.nextSibling,r=n?r.nextSibling:null;
i++}}function Se(e){var n,r,o,i,s,l=e.nTable,u=e.aoColumns,c=e.oScroll,f=c.sY,d=c.sX,p=c.sXInner,g=u.length,S=v(e,"bVisible"),m=a("th",e.nTHead),D=l.getAttribute("width"),y=l.parentNode,_=!1;
for(n=0;n<S.length;n++)r=u[S[n]],null!==r.sWidth&&(r.sWidth=De(r.sWidthOrig,y),_=!0);
if(_||d||f||g!=b(e)||g!=m.length){var C=a(l).clone().empty().css("visibility","hidden").removeAttr("id").append(a(e.nTHead).clone(!1)).append(a(e.nTFoot).clone(!1)).append(a("<tbody><tr/></tbody>"));
C.find("tfoot th, tfoot td").css("width","");var T=C.find("tbody tr");for(m=J(e,C.find("thead")[0]),n=0;n<S.length;n++)r=u[S[n]],m[n].style.width=null!==r.sWidthOrig&&""!==r.sWidthOrig?Te(r.sWidthOrig):"";
if(e.aoData.length)for(n=0;n<S.length;n++)o=S[n],r=u[o],a(_e(e,o)).clone(!1).append(r.sContentPadding).appendTo(T);
if(C.appendTo(y),d&&p?C.width(p):d?(C.css("width","auto"),C.width()<y.offsetWidth&&C.width(y.offsetWidth)):f?C.width(y.offsetWidth):D&&C.width(D),ye(e,C[0]),d){var w=0;
for(n=0;n<S.length;n++)r=u[S[n]],s=a(m[n]).outerWidth(),w+=null===r.sWidthOrig?s:parseInt(r.sWidth,10)+s-a(m[n]).width();
C.width(Te(w)),l.style.width=Te(w)}for(n=0;n<S.length;n++)r=u[S[n]],i=a(m[n]).width(),i&&(r.sWidth=Te(i));
l.style.width=Te(C.css("width")),C.remove()}else for(n=0;g>n;n++)u[n].sWidth=Te(m.eq(n).width());
D&&(l.style.width=Te(D)),!D&&!d||e._reszEvt||(a(t).bind("resize.DT-"+e.sInstance,me(function(){h(e)
})),e._reszEvt=!0)}function me(t,e){var a,r,o=e||200;return function(){var e=this,i=+new Date,s=arguments;
a&&a+o>i?(clearTimeout(r),r=setTimeout(function(){a=n,t.apply(e,s)},o)):a?(a=i,t.apply(e,s)):a=i
}}function De(t,n){if(!t)return 0;var r=a("<div/>").css("width",Te(t)).appendTo(n||e.body),o=r[0].offsetWidth;
return r.remove(),o}function ye(t,e){var n=t.oScroll;if(n.sX||n.sY){var r=n.sX?0:n.iBarWidth;
e.style.width=Te(a(e).outerWidth()-r)}}function _e(t,e){var n=Ce(t,e);if(0>n)return null;
var r=t.aoData[n];return r.nTr?r.anCells[e]:a("<td/>").html(T(t,n,e,"display"))[0]
}function Ce(t,e){for(var n,a=-1,r=-1,o=0,i=t.aoData.length;i>o;o++)n=T(t,o,e,"display")+"",n=n.replace(Cn,""),n.length>a&&(a=n.length,r=o);
return r}function Te(t){return null===t?"0px":"number"==typeof t?0>t?"0px":t+"px":t.match(/\d$/)?t+"px":t
}function we(){if(!$e.__scrollbarWidth){var t=a("<p/>").css({width:"100%",height:200,padding:0})[0],e=a("<div/>").css({position:"absolute",top:0,left:0,width:200,height:150,padding:0,overflow:"hidden",visibility:"hidden"}).append(t).appendTo("body"),n=t.offsetWidth;
e.css("overflow","scroll");var r=t.offsetWidth;n===r&&(r=e[0].clientWidth),e.remove(),$e.__scrollbarWidth=n-r
}return $e.__scrollbarWidth}function xe(t){var e,n,r,o,i,s,l,u=[],c=t.aoColumns,f=t.aaSortingFixed,d=a.isPlainObject(f),h=[],p=function(t){t.length&&!a.isArray(t[0])?h.push(t):h.push.apply(h,t)
};for(a.isArray(f)&&p(f),d&&f.pre&&p(f.pre),p(t.aaSorting),d&&f.post&&p(f.post),e=0;e<h.length;e++)for(l=h[e][0],o=c[l].aDataSort,n=0,r=o.length;r>n;n++)i=o[n],s=c[i].sType||"string",u.push({src:l,col:i,dir:h[e][1],index:h[e][2],type:s,formatter:$e.ext.type.order[s+"-pre"]});
return u}function Ie(t){var e,n,a,r,o,i=[],s=$e.ext.type.order,l=t.aoData,u=(t.aoColumns,0),c=t.aiDisplayMaster;
for(S(t),o=xe(t),e=0,n=o.length;n>e;e++)r=o[e],r.formatter&&u++,Re(t,r.col);if("ssp"!=Xe(t)&&0!==o.length){for(e=0,a=c.length;a>e;e++)i[c[e]]=e;
u===o.length?c.sort(function(t,e){var n,a,r,s,u,c=o.length,f=l[t]._aSortData,d=l[e]._aSortData;
for(r=0;c>r;r++)if(u=o[r],n=f[u.col],a=d[u.col],s=a>n?-1:n>a?1:0,0!==s)return"asc"===u.dir?s:-s;
return n=i[t],a=i[e],a>n?-1:n>a?1:0}):c.sort(function(t,e){var n,a,r,u,c,f,d=o.length,h=l[t]._aSortData,p=l[e]._aSortData;
for(r=0;d>r;r++)if(c=o[r],n=h[c.col],a=p[c.col],f=s[c.type+"-"+c.dir]||s["string-"+c.dir],u=f(n,a),0!==u)return u;
return n=i[t],a=i[e],a>n?-1:n>a?1:0})}t.bSorted=!0}function Ae(t){for(var e,n,a=t.aoColumns,r=xe(t),o=t.oLanguage.oAria,i=0,s=a.length;s>i;i++){var l=a[i],u=l.asSorting,c=l.sTitle.replace(/<.*?>/g,""),f=l.nTh;
f.removeAttribute("aria-sort"),l.bSortable?(r.length>0&&r[0].col==i?(f.setAttribute("aria-sort","asc"==r[0].dir?"ascending":"descending"),n=u[r[0].index+1]||u[0]):n=u[0],e=c+("asc"===n?o.sSortAscending:o.sSortDescending)):e=c,f.setAttribute("aria-label",e)
}}function Fe(t,e,r,o){var i,s=t.aoColumns[e],l=t.aaSorting,u=s.asSorting,c=function(t){var e=t._idx;
return e===n&&(e=a.inArray(t[1],u)),e+1>=u.length?0:e+1};if("number"==typeof l[0]&&(l=t.aaSorting=[l]),r&&t.oFeatures.bSortMulti){var f=a.inArray(e,hn(l,"0"));
-1!==f?(i=c(l[f]),l[f][1]=u[i],l[f]._idx=i):(l.push([e,u[0],0]),l[l.length-1]._idx=0)
}else l.length&&l[0][0]==e?(i=c(l[0]),l.length=1,l[0][1]=u[i],l[0]._idx=i):(l.length=0,l.push([e,u[0]]),l[0]._idx=0);
M(t),"function"==typeof o&&o(t)}function Le(t,e,n,a){var r=t.aoColumns[n];Me(e,{},function(e){r.bSortable!==!1&&(t.oFeatures.bProcessing?(pe(t,!0),setTimeout(function(){Fe(t,n,e.shiftKey,a),"ssp"!==Xe(t)&&pe(t,!1)
},0)):Fe(t,n,e.shiftKey,a))})}function Pe(t){var e,n,r,o=t.aLastSort,i=t.oClasses.sSortColumn,s=xe(t),l=t.oFeatures;
if(l.bSort&&l.bSortClasses){for(e=0,n=o.length;n>e;e++)r=o[e].src,a(hn(t.aoData,"anCells",r)).removeClass(i+(2>e?e+1:3));
for(e=0,n=s.length;n>e;e++)r=s[e].src,a(hn(t.aoData,"anCells",r)).addClass(i+(2>e?e+1:3))
}t.aLastSort=s}function Re(t,e){var n,a=t.aoColumns[e],r=$e.ext.order[a.sSortDataType];
r&&(n=r.call(t.oInstance,t,e,g(t,e)));for(var o,i,s=$e.ext.type.order[a.sType+"-pre"],l=0,u=t.aoData.length;u>l;l++)o=t.aoData[l],o._aSortData||(o._aSortData=[]),(!o._aSortData[e]||r)&&(i=r?n[l]:T(t,l,e,"sort"),o._aSortData[e]=s?s(i):i)
}function je(t){if(t.oFeatures.bStateSave&&!t.bDestroying){var e={time:+new Date,start:t._iDisplayStart,length:t._iDisplayLength,order:a.extend(!0,[],t.aaSorting),search:ne(t.oPreviousSearch),columns:a.map(t.aoColumns,function(e,n){return{visible:e.bVisible,search:ne(t.aoPreSearchCols[n])}
})};Ee(t,"aoStateSaveParams","stateSaveParams",[t,e]),t.oSavedState=e,t.fnStateSaveCallback.call(t.oInstance,t,e)
}}function He(t){var e,n,r=t.aoColumns;if(t.oFeatures.bStateSave){var o=t.fnStateLoadCallback.call(t.oInstance,t);
if(o&&o.time){var i=Ee(t,"aoStateLoadParams","stateLoadParams",[t,o]);if(-1===a.inArray(!1,i)){var s=t.iStateDuration;
if(!(s>0&&o.time<+new Date-1e3*s)&&r.length===o.columns.length){for(t.oLoadedState=a.extend(!0,{},o),t._iDisplayStart=o.start,t.iInitDisplayStart=o.start,t._iDisplayLength=o.length,t.aaSorting=[],a.each(o.order,function(e,n){t.aaSorting.push(n[0]>=r.length?[0,n[1]]:n)
}),a.extend(t.oPreviousSearch,ae(o.search)),e=0,n=o.columns.length;n>e;e++){var l=o.columns[e];
r[e].bVisible=l.visible,a.extend(t.aoPreSearchCols[e],ae(l.search))}Ee(t,"aoStateLoaded","stateLoaded",[t,o])
}}}}}function Ne(t){var e=$e.settings,n=a.inArray(t,hn(e,"nTable"));return-1!==n?e[n]:null
}function We(e,n,a,r){if(a="DataTables warning: "+(null!==e?"table id="+e.sTableId+" - ":"")+a,r&&(a+=". For more information about this error, please see http://datatables.net/tn/"+r),n)t.console&&console.log&&console.log(a);
else{var o=$e.ext,i=o.sErrMode||o.errMode;if("alert"!=i)throw new Error(a);alert(a)
}}function ke(t,e,r,o){return a.isArray(r)?(a.each(r,function(n,r){a.isArray(r)?ke(t,e,r[0],r[1]):ke(t,e,r)
}),void 0):(o===n&&(o=r),e[r]!==n&&(t[o]=e[r]),void 0)}function Oe(t,e,n){var r;for(var o in e)e.hasOwnProperty(o)&&(r=e[o],a.isPlainObject(r)?(a.isPlainObject(t[o])||(t[o]={}),a.extend(!0,t[o],r)):t[o]=n&&"data"!==o&&"aaData"!==o&&a.isArray(r)?r.slice():r);
return t}function Me(t,e,n){a(t).bind("click.DT",e,function(e){t.blur(),n(e)}).bind("keypress.DT",e,function(t){13===t.which&&(t.preventDefault(),n(t))
}).bind("selectstart.DT",function(){return!1})}function Ue(t,e,n,a){n&&t[e].push({fn:n,sName:a})
}function Ee(t,e,n,r){var o=[];return e&&(o=a.map(t[e].slice().reverse(),function(e){return e.fn.apply(t.oInstance,r)
})),null!==n&&a(t.nTable).trigger(n+".dt",r),o}function Je(t){var e=t._iDisplayStart,n=t.fnDisplayEnd(),a=t._iDisplayLength;
n===t.fnRecordsDisplay()&&(e=n-a),(-1===a||0>e)&&(e=0),t._iDisplayStart=e}function Be(t,e){var n=t.renderer,r=$e.ext.renderer[e];
return a.isPlainObject(n)&&n[e]?r[n[e]]||r._:"string"==typeof n?r[n]||r._:r._}function Xe(t){return t.oFeatures.bServerSide?"ssp":t.ajax||t.sAjaxSource?"ajax":"dom"
}function Ve(t,e){var n=[],a=Vn.numbers_length,r=Math.floor(a/2);return a>=e?n=gn(0,e):r>=t?(n=gn(0,a-2),n.push("ellipsis"),n.push(e-1)):t>=e-1-r?(n=gn(e-(a-2),e),n.splice(0,0,"ellipsis"),n.splice(0,0,0)):(n=gn(t-1,t+2),n.push("ellipsis"),n.push(e-1),n.splice(0,0,"ellipsis"),n.splice(0,0,0)),n.DT_el="span",n
}function qe(t){a.each({num:function(e){return qn(e,t)},"num-fmt":function(e){return qn(e,t,on)
},"html-num":function(e){return qn(e,t,en)},"html-num-fmt":function(e){return qn(e,t,en,on)
}},function(e,n){Ye.type.order[e+t+"-pre"]=n})}function Ge(t){return function(){var e=[Ne(this[$e.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
return $e.ext.internal[t].apply(this,e)}}var $e,Ye,ze,Qe,Ze,Ke={},tn=/[\r\n]/g,en=/<.*?>/g,nn=/^[\w\+\-]/,an=/[\w\+\-]$/,rn=new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^","-"].join("|\\")+")","g"),on=/[',$£€¥%\u2009\u202F]/g,sn=function(t){return t&&t!==!0&&"-"!==t?!1:!0
},ln=function(t){var e=parseInt(t,10);return!isNaN(e)&&isFinite(t)?e:null},un=function(t,e){return Ke[e]||(Ke[e]=new RegExp(te(e),"g")),"string"==typeof t?t.replace(/\./g,"").replace(Ke[e],"."):t
},cn=function(t,e,n){var a="string"==typeof t;return e&&a&&(t=un(t,e)),n&&a&&(t=t.replace(on,"")),sn(t)||!isNaN(parseFloat(t))&&isFinite(t)
},fn=function(t){return sn(t)||"string"==typeof t},dn=function(t,e,n){if(sn(t))return!0;
var a=fn(t);return a?cn(bn(t),e,n)?!0:null:null},hn=function(t,e,a){var r=[],o=0,i=t.length;
if(a!==n)for(;i>o;o++)t[o]&&t[o][e]&&r.push(t[o][e][a]);else for(;i>o;o++)t[o]&&r.push(t[o][e]);
return r},pn=function(t,e,a,r){var o=[],i=0,s=e.length;if(r!==n)for(;s>i;i++)o.push(t[e[i]][a][r]);
else for(;s>i;i++)o.push(t[e[i]][a]);return o},gn=function(t,e){var a,r=[];e===n?(e=0,a=t):(a=e,e=t);
for(var o=e;a>o;o++)r.push(o);return r},bn=function(t){return t.replace(en,"")},vn=function(t){var e,n,a,r=[],o=t.length,i=0;
t:for(n=0;o>n;n++){for(e=t[n],a=0;i>a;a++)if(r[a]===e)continue t;r.push(e),i++}return r
},Sn=function(t,e,a){t[e]!==n&&(t[a]=t[e])},mn=/\[.*?\]$/,Dn=/\(\)$/,yn=a("<div>")[0],_n=yn.textContent!==n,Cn=/<.*?>/g;
$e=function(t){this.$=function(t,e){return this.api(!0).$(t,e)},this._=function(t,e){return this.api(!0).rows(t,e).data()
},this.api=function(t){return t?new ze(Ne(this[Ye.iApiIndex])):new ze(this)},this.fnAddData=function(t,e){var r=this.api(!0),o=a.isArray(t)&&(a.isArray(t[0])||a.isPlainObject(t[0]))?r.rows.add(t):r.row.add(t);
return(e===n||e)&&r.draw(),o.flatten().toArray()},this.fnAdjustColumnSizing=function(t){var e=this.api(!0).columns.adjust(),a=e.settings()[0],r=a.oScroll;
t===n||t?e.draw(!1):(""!==r.sX||""!==r.sY)&&be(a)},this.fnClearTable=function(t){var e=this.api(!0).clear();
(t===n||t)&&e.draw()},this.fnClose=function(t){this.api(!0).row(t).child.hide()},this.fnDeleteRow=function(t,e,a){var r=this.api(!0),o=r.rows(t),i=o.settings()[0],s=i.aoData[o[0][0]];
return o.remove(),e&&e.call(this,i,s),(a===n||a)&&r.draw(),s},this.fnDestroy=function(t){this.api(!0).destroy(t)
},this.fnDraw=function(t){this.api(!0).draw(!t)},this.fnFilter=function(t,e,a,r,o,i){var s=this.api(!0);
null===e||e===n?s.search(t,a,r,i):s.column(e).search(t,a,r,i),s.draw()},this.fnGetData=function(t,e){var a=this.api(!0);
if(t!==n){var r=t.nodeName?t.nodeName.toLowerCase():"";return e!==n||"td"==r||"th"==r?a.cell(t,e).data():a.row(t).data()||null
}return a.data().toArray()},this.fnGetNodes=function(t){var e=this.api(!0);return t!==n?e.row(t).node():e.rows().nodes().flatten().toArray()
},this.fnGetPosition=function(t){var e=this.api(!0),n=t.nodeName.toUpperCase();if("TR"==n)return e.row(t).index();
if("TD"==n||"TH"==n){var a=e.cell(t).index();return[a.row,a.columnVisible,a.column]
}return null},this.fnIsOpen=function(t){return this.api(!0).row(t).child.isShown()
},this.fnOpen=function(t,e,n){return this.api(!0).row(t).child(e,n).show().child()[0]
},this.fnPageChange=function(t,e){var a=this.api(!0).page(t);(e===n||e)&&a.draw(!1)
},this.fnSetColumnVis=function(t,e,a){var r=this.api(!0).column(t).visible(e);(a===n||a)&&r.columns.adjust().draw()
},this.fnSettings=function(){return Ne(this[Ye.iApiIndex])},this.fnSort=function(t){this.api(!0).order(t).draw()
},this.fnSortListener=function(t,e,n){this.api(!0).order.listener(t,e,n)},this.fnUpdate=function(t,e,a,r,o){var i=this.api(!0);
return a===n||null===a?i.row(e).data(t):i.cell(e,a).data(t),(o===n||o)&&i.columns.adjust(),(r===n||r)&&i.draw(),0
},this.fnVersionCheck=Ye.fnVersionCheck;var e=this,r=t===n,c=this.length;r&&(t={}),this.oApi=this.internal=Ye.internal;
for(var h in $e.ext.internal)h&&(this[h]=Ge(h));return this.each(function(){var h,p={},g=c>1?Oe(p,t,!0):t,b=0,v=this.getAttribute("id"),S=!1,_=$e.defaults;
if("table"!=this.nodeName.toLowerCase())return We(null,0,"Non-table node initialisation ("+this.nodeName+")",2),void 0;
s(_),l(_.column),o(_,_,!0),o(_.column,_.column,!0),o(_,g);var C=$e.settings;for(b=0,h=C.length;h>b;b++){if(C[b].nTable==this){var T=g.bRetrieve!==n?g.bRetrieve:_.bRetrieve,w=g.bDestroy!==n?g.bDestroy:_.bDestroy;
if(r||T)return C[b].oInstance;if(w){C[b].oInstance.fnDestroy();break}return We(C[b],0,"Cannot reinitialise DataTable",3),void 0
}if(C[b].sTableId==this.id){C.splice(b,1);break}}(null===v||""===v)&&(v="DataTables_Table_"+$e.ext._unique++,this.id=v);
var x=a.extend(!0,{},$e.models.oSettings,{nTable:this,oApi:e.internal,oInit:g,sDestroyWidth:a(this)[0].style.width,sInstance:v,sTableId:v});
C.push(x),x.oInstance=1===e.length?e:a(this).dataTable(),s(g),g.oLanguage&&i(g.oLanguage),g.aLengthMenu&&!g.iDisplayLength&&(g.iDisplayLength=a.isArray(g.aLengthMenu[0])?g.aLengthMenu[0][0]:g.aLengthMenu[0]),g=Oe(a.extend(!0,{},_),g),ke(x.oFeatures,g,["bPaginate","bLengthChange","bFilter","bSort","bSortMulti","bInfo","bProcessing","bAutoWidth","bSortClasses","bServerSide","bDeferRender"]),ke(x,g,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"],["bJQueryUI","bJUI"]]),ke(x.oScroll,g,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]),ke(x.oLanguage,g,"fnInfoCallback"),Ue(x,"aoDrawCallback",g.fnDrawCallback,"user"),Ue(x,"aoServerParams",g.fnServerParams,"user"),Ue(x,"aoStateSaveParams",g.fnStateSaveParams,"user"),Ue(x,"aoStateLoadParams",g.fnStateLoadParams,"user"),Ue(x,"aoStateLoaded",g.fnStateLoaded,"user"),Ue(x,"aoRowCallback",g.fnRowCallback,"user"),Ue(x,"aoRowCreatedCallback",g.fnCreatedRow,"user"),Ue(x,"aoHeaderCallback",g.fnHeaderCallback,"user"),Ue(x,"aoFooterCallback",g.fnFooterCallback,"user"),Ue(x,"aoInitComplete",g.fnInitComplete,"user"),Ue(x,"aoPreDrawCallback",g.fnPreDrawCallback,"user");
var I=x.oClasses;if(g.bJQueryUI?(a.extend(I,$e.ext.oJUIClasses,g.oClasses),g.sDom===_.sDom&&"lfrtip"===_.sDom&&(x.sDom='<"H"lfr>t<"F"ip>'),x.renderer?a.isPlainObject(x.renderer)&&!x.renderer.header&&(x.renderer.header="jqueryui"):x.renderer="jqueryui"):a.extend(I,$e.ext.classes,g.oClasses),a(this).addClass(I.sTable),(""!==x.oScroll.sX||""!==x.oScroll.sY)&&(x.oScroll.iBarWidth=we()),x.oScroll.sX===!0&&(x.oScroll.sX="100%"),x.iInitDisplayStart===n&&(x.iInitDisplayStart=g.iDisplayStart,x._iDisplayStart=g.iDisplayStart),null!==g.iDeferLoading){x.bDeferLoading=!0;
var A=a.isArray(g.iDeferLoading);x._iRecordsDisplay=A?g.iDeferLoading[0]:g.iDeferLoading,x._iRecordsTotal=A?g.iDeferLoading[1]:g.iDeferLoading
}""!==g.oLanguage.sUrl?(x.oLanguage.sUrl=g.oLanguage.sUrl,a.getJSON(x.oLanguage.sUrl,null,function(t){i(t),o(_.oLanguage,t),a.extend(!0,x.oLanguage,g.oLanguage,t),se(x)
}),S=!0):a.extend(!0,x.oLanguage,g.oLanguage),null===g.asStripeClasses&&(x.asStripeClasses=[I.sStripeOdd,I.sStripeEven]);
var F=x.asStripeClasses,L=a("tbody tr:eq(0)",this);-1!==a.inArray(!0,a.map(F,function(t){return L.hasClass(t)
}))&&(a("tbody tr",this).removeClass(F.join(" ")),x.asDestroyStripes=F.slice());var P,R=[],H=this.getElementsByTagName("thead");
if(0!==H.length&&(E(x.aoHeader,H[0]),R=J(x)),null===g.aoColumns)for(P=[],b=0,h=R.length;h>b;b++)P.push(null);
else P=g.aoColumns;for(b=0,h=P.length;h>b;b++)f(x,R?R[b]:null);if(m(x,g.aoColumnDefs,P,function(t,e){d(x,t,e)
}),L.length){var N=function(t,e){return t.getAttribute("data-"+e)?e:null};a.each(j(x,L[0]).cells,function(t,e){var a=x.aoColumns[t];
if(a.mData===t){var r=N(e,"sort")||N(e,"order"),o=N(e,"filter")||N(e,"search");(null!==r||null!==o)&&(a.mData={_:t+".display",sort:null!==r?t+".@data-"+r:n,type:null!==r?t+".@data-"+r:n,filter:null!==o?t+".@data-"+o:n},d(x,t))
}})}var W=x.oFeatures;if(g.bStateSave&&(W.bStateSave=!0,He(x,g),Ue(x,"aoDrawCallback",je,"state_save")),g.aaSorting===n){var k=x.aaSorting;
for(b=0,h=k.length;h>b;b++)k[b][1]=x.aoColumns[b].asSorting[0]}Pe(x),W.bSort&&Ue(x,"aoDrawCallback",function(){if(x.bSorted){var t=xe(x),e={};
a.each(t,function(t,n){e[n.src]=n.dir}),Ee(x,null,"order",[x,t,e]),Ae(x)}}),Ue(x,"aoDrawCallback",function(){(x.bSorted||"ssp"===Xe(x)||W.bDeferRender)&&Pe(x)
},"sc"),u(x);var O=a(this).children("caption").each(function(){this._captionSide=a(this).css("caption-side")
}),M=a(this).children("thead");0===M.length&&(M=a("<thead/>").appendTo(this)),x.nTHead=M[0];
var U=a(this).children("tbody");0===U.length&&(U=a("<tbody/>").appendTo(this)),x.nTBody=U[0];
var B=a(this).children("tfoot");if(0===B.length&&O.length>0&&(""!==x.oScroll.sX||""!==x.oScroll.sY)&&(B=a("<tfoot/>").appendTo(this)),0===B.length||0===B.children().length?a(this).addClass(I.sNoFooter):B.length>0&&(x.nTFoot=B[0],E(x.aoFooter,x.nTFoot)),g.aaData)for(b=0;b<g.aaData.length;b++)D(x,g.aaData[b]);
else(x.bDeferLoading||"dom"==Xe(x))&&y(x,a(x.nTBody).children("tr"));x.aiDisplay=x.aiDisplayMaster.slice(),x.bInitialised=!0,S===!1&&se(x)
}),e=null,this};var Tn=[],wn=Array.prototype,xn=function(t){var e,n,r=$e.settings,o=a.map(r,function(t){return t.nTable
});return t?t.nTable&&t.oApi?[t]:t.nodeName&&"table"===t.nodeName.toLowerCase()?(e=a.inArray(t,o),-1!==e?[r[e]]:null):t&&"function"==typeof t.settings?t.settings().toArray():("string"==typeof t?n=a(t):t instanceof a&&(n=t),n?n.map(function(){return e=a.inArray(this,o),-1!==e?r[e]:null
}).toArray():void 0):[]};ze=function(t,e){if(!this instanceof ze)throw"DT API must be constructed as a new object";
var n=[],r=function(t){var e=xn(t);e&&n.push.apply(n,e)};if(a.isArray(t))for(var o=0,i=t.length;i>o;o++)r(t[o]);
else r(t);this.context=vn(n),e&&this.push.apply(this,e.toArray?e.toArray():e),this.selector={rows:null,cols:null,opts:null},ze.extend(this,this,Tn)
},$e.Api=ze,ze.prototype={concat:wn.concat,context:[],each:function(t){for(var e=0,n=this.length;n>e;e++)t.call(this,this[e],e,this);
return this},eq:function(t){var e=this.context;return e.length>t?new ze(e[t],this[t]):null
},filter:function(t){var e=[];if(wn.filter)e=wn.filter.call(this,t,this);else for(var n=0,a=this.length;a>n;n++)t.call(this,this[n],n,this)&&e.push(this[n]);
return new ze(this.context,e)},flatten:function(){var t=[];return new ze(this.context,t.concat.apply(t,this.toArray()))
},join:wn.join,indexOf:wn.indexOf||function(t,e){for(var n=e||0,a=this.length;a>n;n++)if(this[n]===t)return n;
return-1},iterator:function(t,e,a){var r,o,i,s,l,u,c,f,d=[],h=this.context,p=this.selector;
for("string"==typeof t&&(a=e,e=t,t=!1),o=0,i=h.length;i>o;o++)if("table"===e)r=a(h[o],o),r!==n&&d.push(r);
else if("columns"===e||"rows"===e)r=a(h[o],this[o],o),r!==n&&d.push(r);else if("column"===e||"column-rows"===e||"row"===e||"cell"===e)for(c=this[o],"column-rows"===e&&(u=Rn(h[o],p.opts)),s=0,l=c.length;l>s;s++)f=c[s],r="cell"===e?a(h[o],f.row,f.column,o,s):a(h[o],f,o,s,u),r!==n&&d.push(r);
if(d.length){var g=new ze(h,t?d.concat.apply([],d):d),b=g.selector;return b.rows=p.rows,b.cols=p.cols,b.opts=p.opts,g
}return this},lastIndexOf:wn.lastIndexOf||function(){return this.indexOf.apply(this.toArray.reverse(),arguments)
},length:0,map:function(t){var e=[];if(wn.map)e=wn.map.call(this,t,this);else for(var n=0,a=this.length;a>n;n++)e.push(t.call(this,this[n],n));
return new ze(this.context,e)},pluck:function(t){return this.map(function(e){return e[t]
})},pop:wn.pop,push:wn.push,reduce:wn.reduce||function(t,e){return c(this,t,e,0,this.length,1)
},reduceRight:wn.reduceRight||function(t,e){return c(this,t,e,this.length-1,-1,-1)
},reverse:wn.reverse,selector:null,shift:wn.shift,sort:wn.sort,splice:wn.splice,toArray:function(){return wn.slice.call(this)
},to$:function(){return a(this)},toJQuery:function(){return a(this)},unique:function(){return new ze(this.context,vn(this))
},unshift:wn.unshift},ze.extend=function(t,e,n){if(e&&(e instanceof ze||e.__dt_wrapper)){var r,o,i,s=function(t,e,n){return function(){var a=e.apply(t,arguments);
return ze.extend(a,a,n.methodExt),a}};for(r=0,o=n.length;o>r;r++)i=n[r],e[i.name]="function"==typeof i.val?s(t,i.val,i):a.isPlainObject(i.val)?{}:i.val,e[i.name].__dt_wrapper=!0,ze.extend(t,e[i.name],i.propExt)
}},ze.register=Qe=function(t,e){if(a.isArray(t))for(var n=0,r=t.length;r>n;n++)ze.register(t[n],e);
else{var o,i,s,l,u=t.split("."),c=Tn,f=function(t,e){for(var n=0,a=t.length;a>n;n++)if(t[n].name===e)return t[n];
return null};for(o=0,i=u.length;i>o;o++){l=-1!==u[o].indexOf("()"),s=l?u[o].replace("()",""):u[o];
var d=f(c,s);d||(d={name:s,val:{},methodExt:[],propExt:[]},c.push(d)),o===i-1?d.val=e:c=l?d.methodExt:d.propExt
}}},ze.registerPlural=Ze=function(t,e,r){ze.register(t,r),ze.register(e,function(){var t=r.apply(this,arguments);
return t===this?this:t instanceof ze?t.length?a.isArray(t[0])?new ze(t.context,t[0]):t[0]:n:t
})};var In=function(t,e){if("number"==typeof t)return[e[t]];var n=a.map(e,function(t){return t.nTable
});return a(n).filter(t).map(function(){var t=a.inArray(this,n);return e[t]}).toArray()
};Qe("tables()",function(t){return t?new ze(In(t,this.context)):this}),Qe("table()",function(t){var e=this.tables(t),n=e.context;
return n.length?new ze(n[0]):e}),Ze("tables().nodes()","table().node()",function(){return this.iterator("table",function(t){return t.nTable
})}),Ze("tables().body()","table().body()",function(){return this.iterator("table",function(t){return t.nTBody
})}),Ze("tables().header()","table().header()",function(){return this.iterator("table",function(t){return t.nTHead
})}),Ze("tables().footer()","table().footer()",function(){return this.iterator("table",function(t){return t.nTFoot
})}),Ze("tables().containers()","table().container()",function(){return this.iterator("table",function(t){return t.nTableWrapper
})}),Qe("draw()",function(t){return this.iterator("table",function(e){M(e,t===!1)
})}),Qe("page()",function(t){return t===n?this.page.info().page:this.iterator("table",function(e){de(e,t)
})}),Qe("page.info()",function(){if(0===this.context.length)return n;var t=this.context[0],e=t._iDisplayStart,a=t._iDisplayLength,r=t.fnRecordsDisplay(),o=-1===a;
return{page:o?0:Math.floor(e/a),pages:o?1:Math.ceil(r/a),start:e,end:t.fnDisplayEnd(),length:a,recordsTotal:t.fnRecordsTotal(),recordsDisplay:r}
}),Qe("page.len()",function(t){return t===n?0!==this.context.length?this.context[0]._iDisplayLength:n:this.iterator("table",function(e){ue(e,t)
})});var An=function(t,e,n){if("ssp"==Xe(t)?M(t,e):(pe(t,!0),B(t,[],function(n){L(t);
for(var a=G(t,n),r=0,o=a.length;o>r;r++)D(t,a[r]);M(t,e),pe(t,!1)})),n){var a=new ze(t);
a.one("draw",function(){n(a.ajax.json())})}};Qe("ajax.json()",function(){var t=this.context;
return t.length>0?t[0].json:void 0}),Qe("ajax.params()",function(){var t=this.context;
return t.length>0?t[0].oAjaxData:void 0}),Qe("ajax.reload()",function(t,e){return this.iterator("table",function(n){An(n,e===!1,t)
})}),Qe("ajax.url()",function(t){var e=this.context;return t===n?0===e.length?n:(e=e[0],e.ajax?a.isPlainObject(e.ajax)?e.ajax.url:e.ajax:e.sAjaxSource):this.iterator("table",function(e){a.isPlainObject(e.ajax)?e.ajax.url=t:e.ajax=t
})}),Qe("ajax.url().load()",function(t,e){return this.iterator("table",function(n){An(n,e===!1,t)
})});var Fn=function(t,e){var r,o,i,s,l,u,c=[];for(t&&"string"!=typeof t&&t.length!==n||(t=[t]),i=0,s=t.length;s>i;i++)for(o=t[i]&&t[i].split?t[i].split(","):[t[i]],l=0,u=o.length;u>l;l++)r=e("string"==typeof o[l]?a.trim(o[l]):o[l]),r&&r.length&&c.push.apply(c,r);
return c},Ln=function(t){return t||(t={}),t.filter&&!t.search&&(t.search=t.filter),{search:t.search||"none",order:t.order||"current",page:t.page||"all"}
},Pn=function(t){for(var e=0,n=t.length;n>e;e++)if(t[e].length>0)return t[0]=t[e],t.length=1,t.context=[t.context[e]],t;
return t.length=0,t},Rn=function(t,e){var n,r,o,i=[],s=t.aiDisplay,l=t.aiDisplayMaster,u=e.search,c=e.order,f=e.page;
if("ssp"==Xe(t))return"removed"===u?[]:gn(0,l.length);if("current"==f)for(n=t._iDisplayStart,r=t.fnDisplayEnd();r>n;n++)i.push(s[n]);
else if("current"==c||"applied"==c)i="none"==u?l.slice():"applied"==u?s.slice():a.map(l,function(t){return-1===a.inArray(t,s)?t:null
});else if("index"==c||"original"==c)for(n=0,r=t.aoData.length;r>n;n++)"none"==u?i.push(n):(o=a.inArray(n,s),(-1===o&&"removed"==u||o>=0&&"applied"==u)&&i.push(n));
return i},jn=function(t,e,n){return Fn(e,function(e){var r=ln(e);if(null!==r&&!n)return[r];
var o=Rn(t,n);if(null!==r&&-1!==a.inArray(r,o))return[r];if(!e)return o;for(var i=[],s=0,l=o.length;l>s;s++)i.push(t.aoData[o[s]].nTr);
return e.nodeName&&-1!==a.inArray(e,i)?[e._DT_RowIndex]:a(i).filter(e).map(function(){return this._DT_RowIndex
}).toArray()})};Qe("rows()",function(t,e){t===n?t="":a.isPlainObject(t)&&(e=t,t=""),e=Ln(e);
var r=this.iterator("table",function(n){return jn(n,t,e)});return r.selector.rows=t,r.selector.opts=e,r
}),Qe("rows().nodes()",function(){return this.iterator("row",function(t,e){return t.aoData[e].nTr||n
})}),Qe("rows().data()",function(){return this.iterator(!0,"rows",function(t,e){return pn(t.aoData,e,"_aData")
})}),Ze("rows().cache()","row().cache()",function(t){return this.iterator("row",function(e,n){var a=e.aoData[n];
return"search"===t?a._aFilterData:a._aSortData})}),Ze("rows().invalidate()","row().invalidate()",function(t){return this.iterator("row",function(e,n){R(e,n,t)
})}),Ze("rows().indexes()","row().index()",function(){return this.iterator("row",function(t,e){return e
})}),Ze("rows().remove()","row().remove()",function(){var t=this;return this.iterator("row",function(e,n,r){var o=e.aoData;
o.splice(n,1);for(var i=0,s=o.length;s>i;i++)null!==o[i].nTr&&(o[i].nTr._DT_RowIndex=i);
a.inArray(n,e.aiDisplay);P(e.aiDisplayMaster,n),P(e.aiDisplay,n),P(t[r],n,!1),Je(e)
})}),Qe("rows.add()",function(t){var e=this.iterator("table",function(e){var n,a,r,o=[];
for(a=0,r=t.length;r>a;a++)n=t[a],n.nodeName&&"TR"===n.nodeName.toUpperCase()?o.push(y(e,n)[0]):o.push(D(e,n));
return o}),n=this.rows(-1);return n.pop(),n.push.apply(n,e.toArray()),n}),Qe("row()",function(t,e){return Pn(this.rows(t,e))
}),Qe("row().data()",function(t){var e=this.context;return t===n?e.length&&this.length?e[0].aoData[this[0]]._aData:n:(e[0].aoData[this[0]]._aData=t,R(e[0],this[0],"data"),this)
}),Qe("row().node()",function(){var t=this.context;return t.length&&this.length?t[0].aoData[this[0]].nTr||null:null
}),Qe("row.add()",function(t){t instanceof a&&t.length&&(t=t[0]);var e=this.iterator("table",function(e){return t.nodeName&&"TR"===t.nodeName.toUpperCase()?y(e,t)[0]:D(e,t)
});return this.row(e[0])});var Hn=function(t,e,n,r){var o=[],i=function(e,n){if(e.nodeName&&"tr"===e.nodeName.toLowerCase())o.push(e);
else{var r=a("<tr><td/></tr>").addClass(n);a("td",r).addClass(n).html(e)[0].colSpan=b(t),o.push(r[0])
}};if(a.isArray(n)||n instanceof a)for(var s=0,l=n.length;l>s;s++)i(n[s],r);else i(n,r);
e._details&&e._details.remove(),e._details=a(o),e._detailsShow&&e._details.insertAfter(e.nTr)
},Nn=function(t){var e=t.context;if(e.length&&t.length){var a=e[0].aoData[t[0]];a._details&&(a._details.remove(),a._detailsShow=n,a._details=n)
}},Wn=function(t,e){var n=t.context;if(n.length&&t.length){var a=n[0].aoData[t[0]];
a._details&&(a._detailsShow=e,e?a._details.insertAfter(a.nTr):a._details.detach(),kn(n[0]))
}},kn=function(t){var e=new ze(t),n=".dt.DT_details",a="draw"+n,r="column-visibility"+n,o="destroy"+n,i=t.aoData;
e.off(a+" "+r+" "+o),hn(i,"_details").length>0&&(e.on(a,function(n,a){t===a&&e.rows({page:"current"}).eq(0).each(function(t){var e=i[t];
e._detailsShow&&e._details.insertAfter(e.nTr)})}),e.on(r,function(e,n){if(t===n)for(var a,r=b(n),o=0,s=i.length;s>o;o++)a=i[o],a._details&&a._details.children("td[colspan]").attr("colspan",r)
}),e.on(o,function(e,n){if(t===n)for(var a=0,r=i.length;r>a;a++)i[a]._details&&Nn(i[a])
}))},On="",Mn=On+"row().child",Un=Mn+"()";Qe(Un,function(t,e){var a=this.context;
return t===n?a.length&&this.length?a[0].aoData[this[0]]._details:n:(t===!0?this.child.show():t===!1?Nn(this):a.length&&this.length&&Hn(a[0],a[0].aoData[this[0]],t,e),this)
}),Qe([Mn+".show()",Un+".show()"],function(){return Wn(this,!0),this}),Qe([Mn+".hide()",Un+".hide()"],function(){return Wn(this,!1),this
}),Qe([Mn+".remove()",Un+".remove()"],function(){return Nn(this),this}),Qe(Mn+".isShown()",function(){var t=this.context;
return t.length&&this.length?t[0].aoData[this[0]]._detailsShow||!1:!1});var En=/^(.*):(name|visIdx|visible)$/,Jn=function(t,e){var n=t.aoColumns,r=hn(n,"sName"),o=hn(n,"nTh");
return Fn(e,function(e){var i=ln(e);if(""===e)return gn(n.length);if(null!==i)return[i>=0?i:n.length+i];
var s="string"==typeof e?e.match(En):"";if(!s)return a(o).filter(e).map(function(){return a.inArray(this,o)
}).toArray();switch(s[2]){case"visIdx":case"visible":var l=parseInt(s[1],10);if(0>l){var u=a.map(n,function(t,e){return t.bVisible?e:null
});return[u[u.length+l]]}return[p(t,l)];case"name":return a.map(r,function(t,e){return t===s[1]?e:null
})}})},Bn=function(t,e,r){var o,i,s,l,u=t.aoColumns,c=u[e],f=t.aoData;if(r===n)return c.bVisible;
if(c.bVisible!==r){if(r){var d=a.inArray(!0,hn(u,"bVisible"),e+1);for(i=0,s=f.length;s>i;i++)l=f[i].nTr,o=f[i].anCells,l&&l.insertBefore(o[e],o[d]||null)
}else a(hn(t.aoData,"anCells",e)).detach();c.bVisible=r,k(t,t.aoHeader),k(t,t.aoFooter),h(t),(t.oScroll.sX||t.oScroll.sY)&&be(t),Ee(t,null,"column-visibility",[t,e,r]),je(t)
}};Qe("columns()",function(t,e){t===n?t="":a.isPlainObject(t)&&(e=t,t=""),e=Ln(e);
var r=this.iterator("table",function(n){return Jn(n,t,e)});return r.selector.cols=t,r.selector.opts=e,r
}),Ze("columns().header()","column().header()",function(){return this.iterator("column",function(t,e){return t.aoColumns[e].nTh
})}),Ze("columns().footer()","column().footer()",function(){return this.iterator("column",function(t,e){return t.aoColumns[e].nTf
})}),Ze("columns().data()","column().data()",function(){return this.iterator("column-rows",function(t,e,n,a,r){for(var o=[],i=0,s=r.length;s>i;i++)o.push(T(t,r[i],e,""));
return o})}),Ze("columns().cache()","column().cache()",function(t){return this.iterator("column-rows",function(e,n,a,r,o){return pn(e.aoData,o,"search"===t?"_aFilterData":"_aSortData",n)
})}),Ze("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(t,e,n,a,r){return pn(t.aoData,r,"anCells",e)
})}),Ze("columns().visible()","column().visible()",function(t){return this.iterator("column",function(e,a){return t===n?e.aoColumns[a].bVisible:Bn(e,a,t)
})}),Ze("columns().indexes()","column().index()",function(t){return this.iterator("column",function(e,n){return"visible"===t?g(e,n):n
})}),Qe("columns.adjust()",function(){return this.iterator("table",function(t){h(t)
})}),Qe("column.index()",function(t,e){if(0!==this.context.length){var n=this.context[0];
if("fromVisible"===t||"toData"===t)return p(n,e);if("fromData"===t||"toVisible"===t)return g(n,e)
}}),Qe("column()",function(t,e){return Pn(this.columns(t,e))});var Xn=function(t,e,r){var o,i,s,l,u,c=t.aoData,f=Rn(t,r),d=pn(c,f,"anCells"),h=a([].concat.apply([],d)),p=t.aoColumns.length;
return Fn(e,function(t){if(null===t||t===n){for(i=[],s=0,l=f.length;l>s;s++)for(o=f[s],u=0;p>u;u++)i.push({row:o,column:u});
return i}return a.isPlainObject(t)?[t]:h.filter(t).map(function(t,e){return o=e.parentNode._DT_RowIndex,{row:o,column:a.inArray(e,c[o].anCells)}
}).toArray()})};Qe("cells()",function(t,e,r){if(a.isPlainObject(t)&&(typeof t.row!==n?(r=e,e=null):(r=t,t=null)),a.isPlainObject(e)&&(r=e,e=null),null===e||e===n)return this.iterator("table",function(e){return Xn(e,t,Ln(r))
});var o,i,s,l,u,c=this.columns(e,r),f=this.rows(t,r),d=this.iterator("table",function(t,e){for(o=[],i=0,s=f[e].length;s>i;i++)for(l=0,u=c[e].length;u>l;l++)o.push({row:f[e][i],column:c[e][l]});
return o});return a.extend(d.selector,{cols:e,rows:t,opts:r}),d}),Ze("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(t,e,n){return t.aoData[e].anCells[n]
})}),Qe("cells().data()",function(){return this.iterator("cell",function(t,e,n){return T(t,e,n)
})}),Ze("cells().cache()","cell().cache()",function(t){return t="search"===t?"_aFilterData":"_aSortData",this.iterator("cell",function(e,n,a){return e.aoData[n][t][a]
})}),Ze("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(t,e,n){return{row:e,column:n,columnVisible:g(t,n)}
})}),Qe(["cells().invalidate()","cell().invalidate()"],function(t){var e=this.selector;
return this.rows(e.rows,e.opts).invalidate(t),this}),Qe("cell()",function(t,e,n){return Pn(this.cells(t,e,n))
}),Qe("cell().data()",function(t){var e=this.context,a=this[0];return t===n?e.length&&a.length?T(e[0],a[0].row,a[0].column):n:(w(e[0],a[0].row,a[0].column,t),R(e[0],a[0].row,"data",a[0].column),this)
}),Qe("order()",function(t,e){var r=this.context;return t===n?0!==r.length?r[0].aaSorting:n:("number"==typeof t?t=[[t,e]]:a.isArray(t[0])||(t=Array.prototype.slice.call(arguments)),this.iterator("table",function(e){e.aaSorting=t.slice()
}))}),Qe("order.listener()",function(t,e,n){return this.iterator("table",function(a){Le(a,t,e,n)
})}),Qe(["columns().order()","column().order()"],function(t){var e=this;return this.iterator("table",function(n,r){var o=[];
a.each(e[r],function(e,n){o.push([n,t])}),n.aaSorting=o})}),Qe("search()",function(t,e,r,o){var i=this.context;
return t===n?0!==i.length?i[0].oPreviousSearch.sSearch:n:this.iterator("table",function(n){n.oFeatures.bFilter&&Y(n,a.extend({},n.oPreviousSearch,{sSearch:t+"",bRegex:null===e?!1:e,bSmart:null===r?!0:r,bCaseInsensitive:null===o?!0:o}),1)
})}),Qe(["columns().search()","column().search()"],function(t,e,r,o){return this.iterator("column",function(i,s){var l=i.aoPreSearchCols;
return t===n?l[s].sSearch:(i.oFeatures.bFilter&&(a.extend(l[s],{sSearch:t+"",bRegex:null===e?!1:e,bSmart:null===r?!0:r,bCaseInsensitive:null===o?!0:o}),Y(i,i.oPreviousSearch,1)),void 0)
})}),Qe("state()",function(){return this.context.length?this.context[0].oSavedState:null
}),Qe("state.clear()",function(){return this.iterator("table",function(t){t.fnStateSaveCallback.call(t.oInstance,t,{})
})}),Qe("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null
}),Qe("state.save()",function(){return this.iterator("table",function(t){je(t)})}),$e.versionCheck=$e.fnVersionCheck=function(t){for(var e,n,a=$e.version.split("."),r=t.split("."),o=0,i=r.length;i>o;o++)if(e=parseInt(a[o],10)||0,n=parseInt(r[o],10)||0,e!==n)return e>n;
return!0},$e.isDataTable=$e.fnIsDataTable=function(t){var e=a(t).get(0),n=!1;return a.each($e.settings,function(t,a){(a.nTable===e||a.nScrollHead===e||a.nScrollFoot===e)&&(n=!0)
}),n},$e.tables=$e.fnTables=function(t){return jQuery.map($e.settings,function(e){return!t||t&&a(e.nTable).is(":visible")?e.nTable:void 0
})},$e.camelToHungarian=o,Qe("$()",function(t,e){var n=this.rows(e).nodes(),r=a(n);
return a([].concat(r.filter(t).toArray(),r.find(t).toArray()))}),a.each(["on","one","off"],function(t,e){Qe(e+"()",function(){var t=Array.prototype.slice.call(arguments);
t[0].match(/\.dt\b/)||(t[0]+=".dt");var n=a(this.tables().nodes());return n[e].apply(n,t),this
})}),Qe("clear()",function(){return this.iterator("table",function(t){L(t)})}),Qe("settings()",function(){return new ze(this.context,this.context)
}),Qe("data()",function(){return this.iterator("table",function(t){return hn(t.aoData,"_aData")
}).flatten()}),Qe("destroy()",function(e){return e=e||!1,this.iterator("table",function(n){var r,o=n.nTableWrapper.parentNode,i=n.oClasses,s=n.nTable,l=n.nTBody,u=n.nTHead,c=n.nTFoot,f=a(s),d=a(l),h=a(n.nTableWrapper),p=a.map(n.aoData,function(t){return t.nTr
});n.bDestroying=!0,Ee(n,"aoDestroyCallback","destroy",[n]),e||new ze(n).columns().visible(!0),h.unbind(".DT").find(":not(tbody *)").unbind(".DT"),a(t).unbind(".DT-"+n.sInstance),s!=u.parentNode&&(f.children("thead").detach(),f.append(u)),c&&s!=c.parentNode&&(f.children("tfoot").detach(),f.append(c)),f.detach(),h.detach(),n.aaSorting=[],n.aaSortingFixed=[],Pe(n),a(p).removeClass(n.asStripeClasses.join(" ")),a("th, td",u).removeClass(i.sSortable+" "+i.sSortableAsc+" "+i.sSortableDesc+" "+i.sSortableNone),n.bJUI&&(a("th span."+i.sSortIcon+", td span."+i.sSortIcon,u).detach(),a("th, td",u).each(function(){var t=a("div."+i.sSortJUIWrapper,this);
a(this).append(t.contents()),t.detach()})),!e&&o&&o.insertBefore(s,n.nTableReinsertBefore),d.children().detach(),d.append(p),f.css("width",n.sDestroyWidth).removeClass(i.sTable),r=n.asDestroyStripes.length,r&&d.children().each(function(t){a(this).addClass(n.asDestroyStripes[t%r])
});var g=a.inArray(n,$e.settings);-1!==g&&$e.settings.splice(g,1)})}),$e.version="1.10.1",$e.settings=[],$e.models={},$e.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0},$e.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null},$e.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null},$e.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bJQueryUI:!1,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)
},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(t){try{return JSON.parse((-1===t.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+t.sInstance+"_"+location.pathname))
}catch(e){}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(t,e){try{(-1===t.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+t.sInstance+"_"+location.pathname,JSON.stringify(e))
}catch(n){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:a.extend({},$e.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null},r($e.defaults),$e.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null},r($e.defaults.column),$e.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,json:n,oAjaxData:n,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,bJUI:null,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==Xe(this)?1*this._iRecordsTotal:this.aiDisplayMaster.length
},fnRecordsDisplay:function(){return"ssp"==Xe(this)?1*this._iRecordsDisplay:this.aiDisplay.length
},fnDisplayEnd:function(){var t=this._iDisplayLength,e=this._iDisplayStart,n=e+t,a=this.aiDisplay.length,r=this.oFeatures,o=r.bPaginate;
return r.bServerSide?o===!1||-1===t?e+a:Math.min(e+t,this._iRecordsDisplay):!o||n>a||-1===t?a:n
},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{}},$e.ext=Ye={classes:{},errMode:"alert",feature:[],search:[],internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:$e.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:$e.version},a.extend(Ye,{afnFiltering:Ye.search,aTypes:Ye.type.detect,ofnSearch:Ye.type.search,oSort:Ye.type.order,afnSortData:Ye.order,aoFeatures:Ye.feature,oApi:Ye.internal,oStdClasses:Ye.classes,oPagination:Ye.pager}),a.extend($e.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""}),function(){var t="";
t="";var e=t+"ui-state-default",n=t+"css_right ui-icon ui-icon-",r=t+"fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";
a.extend($e.ext.oJUIClasses,$e.ext.classes,{sPageButton:"fg-button ui-button "+e,sPageButtonActive:"ui-state-disabled",sPageButtonDisabled:"ui-state-disabled",sPaging:"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",sSortAsc:e+" sorting_asc",sSortDesc:e+" sorting_desc",sSortable:e+" sorting",sSortableAsc:e+" sorting_asc_disabled",sSortableDesc:e+" sorting_desc_disabled",sSortableNone:e+" sorting_disabled",sSortJUIAsc:n+"triangle-1-n",sSortJUIDesc:n+"triangle-1-s",sSortJUI:n+"carat-2-n-s",sSortJUIAscAllowed:n+"carat-1-n",sSortJUIDescAllowed:n+"carat-1-s",sSortJUIWrapper:"DataTables_sort_wrapper",sSortIcon:"DataTables_sort_icon",sScrollHead:"dataTables_scrollHead "+e,sScrollFoot:"dataTables_scrollFoot "+e,sHeaderTH:e,sFooterTH:e,sJUIHeader:r+" ui-corner-tl ui-corner-tr",sJUIFooter:r+" ui-corner-bl ui-corner-br"})
}();var Vn=$e.ext.pager;a.extend(Vn,{simple:function(){return["previous","next"]},full:function(){return["first","previous","next","last"]
},simple_numbers:function(t,e){return["previous",Ve(t,e),"next"]},full_numbers:function(t,e){return["first","previous",Ve(t,e),"next","last"]
},_numbers:Ve,numbers_length:7}),a.extend(!0,$e.ext.renderer,{pageButton:{_:function(t,n,r,o,i,s){var l,u,c=t.oClasses,f=t.oLanguage.oPaginate,d=0,h=function(e,n){var o,p,g,b,v=function(e){de(t,e.data.action,!0)
};for(o=0,p=n.length;p>o;o++)if(b=n[o],a.isArray(b)){var S=a("<"+(b.DT_el||"div")+"/>").appendTo(e);
h(S,b)}else{switch(l="",u="",b){case"ellipsis":e.append("<span>&hellip;</span>");
break;case"first":l=f.sFirst,u=b+(i>0?"":" "+c.sPageButtonDisabled);break;case"previous":l=f.sPrevious,u=b+(i>0?"":" "+c.sPageButtonDisabled);
break;case"next":l=f.sNext,u=b+(s-1>i?"":" "+c.sPageButtonDisabled);break;case"last":l=f.sLast,u=b+(s-1>i?"":" "+c.sPageButtonDisabled);
break;default:l=b+1,u=i===b?c.sPageButtonActive:""}l&&(g=a("<a>",{"class":c.sPageButton+" "+u,"aria-controls":t.sTableId,"data-dt-idx":d,tabindex:t.iTabIndex,id:0===r&&"string"==typeof b?t.sTableId+"_"+b:null}).html(l).appendTo(e),Me(g,{action:b},v),d++)
}};try{var p=a(e.activeElement).data("dt-idx");h(a(n).empty(),o),null!==p&&a(n).find("[data-dt-idx="+p+"]").focus()
}catch(g){}}}});var qn=function(t,e,n,a){return t&&"-"!==t?(e&&(t=un(t,e)),t.replace&&(n&&(t=t.replace(n,"")),a&&(t=t.replace(a,""))),1*t):-1/0
};return a.extend(Ye.type.order,{"date-pre":function(t){return Date.parse(t)||0},"html-pre":function(t){return sn(t)?"":t.replace?t.replace(/<.*?>/g,"").toLowerCase():t+""
},"string-pre":function(t){return sn(t)?"":"string"==typeof t?t.toLowerCase():t.toString?t.toString():""
},"string-asc":function(t,e){return e>t?-1:t>e?1:0},"string-desc":function(t,e){return e>t?1:t>e?-1:0
}}),qe(""),a.extend($e.ext.type.detect,[function(t,e){var n=e.oLanguage.sDecimal;
return cn(t,n)?"num"+n:null},function(t){if(t&&(!nn.test(t)||!an.test(t)))return null;
var e=Date.parse(t);return null!==e&&!isNaN(e)||sn(t)?"date":null},function(t,e){var n=e.oLanguage.sDecimal;
return cn(t,n,!0)?"num-fmt"+n:null},function(t,e){var n=e.oLanguage.sDecimal;return dn(t,n)?"html-num"+n:null
},function(t,e){var n=e.oLanguage.sDecimal;return dn(t,n,!0)?"html-num-fmt"+n:null
},function(t){return sn(t)||"string"==typeof t&&-1!==t.indexOf("<")?"html":null}]),a.extend($e.ext.type.search,{html:function(t){return sn(t)?t:"string"==typeof t?t.replace(tn," ").replace(en,""):""
},string:function(t){return sn(t)?t:"string"==typeof t?t.replace(tn," "):t}}),a.extend(!0,$e.ext.renderer,{header:{_:function(t,e,n,r){a(t.nTable).on("order.dt.DT",function(a,o,i,s){if(t===o){var l=n.idx;
e.removeClass(n.sSortingClass+" "+r.sSortAsc+" "+r.sSortDesc).addClass("asc"==s[l]?r.sSortAsc:"desc"==s[l]?r.sSortDesc:n.sSortingClass)
}})},jqueryui:function(t,e,n,r){var o=n.idx;a("<div/>").addClass(r.sSortJUIWrapper).append(e.contents()).append(a("<span/>").addClass(r.sSortIcon+" "+n.sSortingClassJUI)).appendTo(e),a(t.nTable).on("order.dt.DT",function(a,i,s,l){t===i&&(e.removeClass(r.sSortAsc+" "+r.sSortDesc).addClass("asc"==l[o]?r.sSortAsc:"desc"==l[o]?r.sSortDesc:n.sSortingClass),e.find("span."+r.sSortIcon).removeClass(r.sSortJUIAsc+" "+r.sSortJUIDesc+" "+r.sSortJUI+" "+r.sSortJUIAscAllowed+" "+r.sSortJUIDescAllowed).addClass("asc"==l[o]?r.sSortJUIAsc:"desc"==l[o]?r.sSortJUIDesc:n.sSortingClassJUI))
})}}}),$e.render={number:function(t,e,n,a){return{display:function(r){var o=0>r?"-":"";
r=Math.abs(parseFloat(r));var i=parseInt(r,10),s=n?e+(r-i).toFixed(n).substring(2):"";
return o+(a||"")+i.toString().replace(/\B(?=(\d{3})+(?!\d))/g,t)+s}}}},a.extend($e.ext.internal,{_fnExternApiFunc:Ge,_fnBuildAjax:B,_fnAjaxUpdate:X,_fnAjaxParameters:V,_fnAjaxUpdateDraw:q,_fnAjaxDataSrc:G,_fnAddColumn:f,_fnColumnOptions:d,_fnAdjustColumnSizing:h,_fnVisibleToColumnIndex:p,_fnColumnIndexToVisible:g,_fnVisbleColumns:b,_fnGetColumns:v,_fnColumnTypes:S,_fnApplyColumnDefs:m,_fnHungarianMap:r,_fnCamelToHungarian:o,_fnLanguageCompat:i,_fnBrowserDetect:u,_fnAddData:D,_fnAddTr:y,_fnNodeToDataIndex:_,_fnNodeToColumnIndex:C,_fnGetCellData:T,_fnSetCellData:w,_fnSplitObjNotation:x,_fnGetObjectDataFn:I,_fnSetObjectDataFn:A,_fnGetDataMaster:F,_fnClearTable:L,_fnDeleteIndex:P,_fnInvalidateRow:R,_fnGetRowElements:j,_fnCreateTr:H,_fnBuildHead:W,_fnDrawHead:k,_fnDraw:O,_fnReDraw:M,_fnAddOptionsHtml:U,_fnDetectHeader:E,_fnGetUniqueThs:J,_fnFeatureHtmlFilter:$,_fnFilterComplete:Y,_fnFilterCustom:z,_fnFilterColumn:Q,_fnFilter:Z,_fnFilterCreateSearch:K,_fnEscapeRegex:te,_fnFilterData:ee,_fnFeatureHtmlInfo:re,_fnUpdateInfo:oe,_fnInfoMacros:ie,_fnInitialise:se,_fnInitComplete:le,_fnLengthChange:ue,_fnFeatureHtmlLength:ce,_fnFeatureHtmlPaginate:fe,_fnPageChange:de,_fnFeatureHtmlProcessing:he,_fnProcessingDisplay:pe,_fnFeatureHtmlTable:ge,_fnScrollDraw:be,_fnApplyToChildren:ve,_fnCalculateColumnWidths:Se,_fnThrottle:me,_fnConvertToWidth:De,_fnScrollingWidthAdjust:ye,_fnGetWidestNode:_e,_fnGetMaxLenString:Ce,_fnStringToCss:Te,_fnScrollBarWidth:we,_fnSortFlatten:xe,_fnSort:Ie,_fnSortAria:Ae,_fnSortListener:Fe,_fnSortAttachListener:Le,_fnSortingClasses:Pe,_fnSortData:Re,_fnSaveState:je,_fnLoadState:He,_fnSettingsFromNode:Ne,_fnLog:We,_fnMap:ke,_fnBindAction:Me,_fnCallbackReg:Ue,_fnCallbackFire:Ee,_fnLengthOverflow:Je,_fnRenderer:Be,_fnDataSource:Xe,_fnRowAttributes:N,_fnCalculateEnd:function(){}}),a.fn.dataTable=$e,a.fn.dataTableSettings=$e.settings,a.fn.dataTableExt=$e.ext,a.fn.DataTable=function(t){return a(this).dataTable(t).api()
},a.each($e,function(t,e){a.fn.DataTable[t]=e}),a.fn.dataTable})}(window,document);