define(["../../../AddIn","../../../Dashboard","../../../lib/jquery","amd!../../../lib/datatables","css!./hyperlink"],function(e,t,a){var n=new e({name:"hyperlink",label:"Hyperlink",defaults:{openInNewTab:!0,prependHttpIfNeeded:!0,regexp:null,pattern:null,urlReference:2,labelReference:1},init:function(){a.fn.dataTableExt.oSort[this.name+"-asc"]=a.fn.dataTableExt.oSort["string-asc"],a.fn.dataTableExt.oSort[this.name+"-desc"]=a.fn.dataTableExt.oSort["string-desc"]
},implementation:function(e,t,n){var l,r,p=a(e);if(n.pattern){var d=new RegExp(n.pattern),i=d.exec(t.value);
l=i[n.urlReference],r=i[n.labelReference]}else l=t.value,r=t.value;if(n.prependHttpIfNeeded&&!/^https?:\/\//.test(l)&&(l="http://"+l),null==n.regexp||new RegExp(n.regexp).test(t.value)){var s=a("<a></a>").attr("href",l).addClass("hyperlinkAddIn");
s.text(r),n.openInNewTab&&s.attr("target","_blank"),p.empty().append(s)}}});return t.registerGlobalAddIn("Table","colType",n),n
});