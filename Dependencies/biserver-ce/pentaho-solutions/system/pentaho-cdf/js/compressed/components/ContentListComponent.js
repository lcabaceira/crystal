define(["../dashboard/Dashboard.ext","../dashboard/Utils","./NavigatorBaseComponent","../lib/jquery","amd!../lib/jquery.fancybox"],function(t,e,i,a){var n=i.extend({update:function(){var t=this,a=4!=this.mode?i.path||e.getPathParameter(i.path):i.getParentPath();
t.draw(a)},draw:function(e){var i=this;a.getJSON(t.getJSONSolution()+"?mode=contentList"+(""!=e?"&path="+e:""),function(t){i.processContentListResponse(t,e)
})},processContentListResponse:function(t,n){a("#"+this.htmlObject).empty();var r=t.content||[];
r.sort(function(t,e){var i=("FOLDER"==t.type?"000":"")+t.name,a=("FOLDER"==e.type?"000":"")+e.name;
return i>a});var s=a("<ul></ul>").attr("id","contentList-"+this.name).appendTo("#"+this.htmlObject);
if(1!=this.mode&&4!=this.mode&&(i.path||e.getPathParameter(i.path))){var h={name:"Up",title:"Up",type:"FOLDER",description:"Go to parent directory",visible:!0,solution:i.getParentSolution(),path:n.substring(0,n.lastIndexOf("/"))};
r.reverse().push(h),r.reverse()}var o=this;a.each(r,function(t,e){if(1==o.mode&&"FOLDER"==this.type)return!0;
if(2==o.mode&&"FOLDER"!=this.type)return!0;if(1==this.visible){{var n,r="",h="",l="";
void 0!=i.template&&void 0!=i.template.length&&i.template.length>0?"&template="+i.template:""
}if("FOLDER"==this.type)r="folder",n=a("<a></a>").attr("target",h).attr("title",this.description).attr("parentPath",e.path).text(this.title).click(function(){o.draw(a(this).attr("parentPath"))
});else{var p=CONTEXT_PATH;void 0!=this.url?(r="action greybox",l="/"==p.substring(p.length-1)?p.substring(0,p.length-1)+this.url:p+this.url):(r="action greybox",l="/"==p.substring(p.length-1)?p.substring(0,p.length-1)+this.link:p+this.link),n=a("<a></a>").attr("target",h).attr("title",this.description).text(this.title).attr("href",l)
}a("<li></li>").attr("class",r).appendTo(s).append(n)}}),a("#contentList-"+this.name+" a").tooltip({showURL:!1}),a("li.greybox a").click(function(){var t=(this.title||this.innerHTML||this.href,this.href.replace(/'/g,"&#39;"));
return a.fancybox({type:"iframe",href:t,width:a(window).width(),height:a(window).height()}),!1
})}});return n});