!function($){function loadAndParseFile(filename,language,mode){$.ajax({url:filename,async:!1,contentType:"application/x-www-form-urlencoded",dataType:"text",success:function(data,status){for(var parsed="",parameters=void 0!=data?data.split(/\n/):[],regPlaceHolder=/(\{\d+\})/g,regRepPlaceHolder=/\{(\d+)\}/g,unicodeRE=/(\\u.{4})/gi,i=0;i<parameters.length;i++)if(parameters[i]=parameters[i].replace(/^\s\s*/,"").replace(/\s\s*$/,""),parameters[i].length>0&&"#"!=parameters[i].match("^#")){var pair=parameters[i].split("=");
if(pair.length>0){for(var name=unescape(pair[0]).replace(/^\s\s*/,"").replace(/\s\s*$/,""),value=1==pair.length?"":pair[1],s=2;s<pair.length;s++)value+="="+pair[s];
if(value=value.replace(/"/g,'\\"'),value=value.replace(/^\s\s*/,"").replace(/\s\s*$/,""),"map"==mode||"both"==mode){var unicodeMatches=value.match(unicodeRE);
if(unicodeMatches)for(var u=0;u<unicodeMatches.length;u++)value=value.replace(unicodeMatches[u],unescapeUnicode(unicodeMatches[u]));
$.i18n.map[name]=value}if("vars"==mode||"both"==mode)if(checkKeyNamespace(name),regPlaceHolder.test(value)){for(var parts=value.split(regPlaceHolder),first=!0,fnArgs="",usedArgs=[],p=0;p<parts.length;p++)regPlaceHolder.test(parts[p])&&-1==usedArgs.indexOf(parts[p])&&(first||(fnArgs+=","),fnArgs+=parts[p].replace(regRepPlaceHolder,"v$1"),usedArgs.push(parts[p]),first=!1);
parsed+=name+"=function("+fnArgs+"){";var fnExpr='"'+value.replace(regRepPlaceHolder,'"+v$1+"')+'"';
parsed+="return "+fnExpr+";};"}else parsed+=name+'="'+value+'";'}}eval(parsed)}})
}function checkKeyNamespace(key){var regDot=/\./;if(regDot.test(key))for(var fullname="",names=key.split(/\./),i=0;i<names.length;i++)i>0&&(fullname+="."),fullname+=names[i],eval("typeof "+fullname+' == "undefined"')&&eval(fullname+"={};")
}function getFiles(e){return e&&e.constructor==Array?e:[e]}function normaliseLanguageCode(e){return e=e.toLowerCase(),e.length>3&&(e=e.substring(0,3)+e.substring(3).toUpperCase()),e
}function unescapeUnicode(e){var a=[],r=parseInt(e.substr(2),16);r>=0&&r<Math.pow(2,16)&&a.push(r);
for(var n="",l=0;l<a.length;++l)n+=String.fromCharCode(a[l]);return n}$.i18n={},$.i18n.map={},$.i18n.properties=function(e){var a={name:"Messages",language:"",path:"",mode:"vars",callback:function(){}};
e=$.extend(a,e),(null===e.language||""==e.language)&&(e.language=$.i18n.browserLang()),null===e.language&&(e.language="");
var r=getFiles(e.name);for(i=0;i<r.length;i++)loadAndParseFile(e.path+r[i]+".properties",e.language,e.mode),e.language.length>=2&&loadAndParseFile(e.path+r[i]+"_"+e.language.substring(0,2)+".properties",e.language,e.mode),e.language.length>=5&&loadAndParseFile(e.path+r[i]+"_"+e.language.substring(0,5)+".properties",e.language,e.mode);
e.callback&&e.callback()},$.i18n.prop=function(e,a){var r=$.i18n.map[e];if(null==r)return"["+e+"]";
if(a){for(var n=0;n<a.length;n++){var l=new RegExp("\\{("+n+")\\}","g");r=r.replace(l,a[n])
}return r}return r},$.i18n.browserLang=function(){return normaliseLanguageCode(navigator.language||navigator.userLanguage)
}}(jQuery);