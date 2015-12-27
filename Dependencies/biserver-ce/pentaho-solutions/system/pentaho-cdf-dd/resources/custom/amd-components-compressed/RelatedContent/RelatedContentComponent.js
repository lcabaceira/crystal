define("cde/components/RelatedContentComponent",["cdf/components/BaseComponent","cdf/lib/jquery"],function(e,n){var t=e.extend({update:function(){var e=this.relatedContent;
if("undefined"!=typeof e){var t=n("#"+this.htmlObject);t.empty();var o='<div id="relatedContentMainDiv"><p>Related content</p><ul>';
for(var a in e){var d=e[a];e.hasOwnProperty(a)&&null!=a&&void 0!=a&&(o+="<li><a href='"+d[1]+"'\">"+d[0]+"</a></li>")
}o+="</ul></div>",t.append(o)}}});return t});