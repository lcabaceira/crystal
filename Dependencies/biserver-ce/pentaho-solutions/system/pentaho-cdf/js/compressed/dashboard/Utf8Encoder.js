define(["../lib/jquery"],function(r){var e={encode:function(r){r=r.replace(/\r\n/g,"\n");
for(var e="",n=0;n<r.length;n++){var o=r.charCodeAt(n);128>o?e+=String.fromCharCode(o):o>127&&2048>o?(e+=String.fromCharCode(o>>6|192),e+=String.fromCharCode(63&o|128)):(e+=String.fromCharCode(o>>12|224),e+=String.fromCharCode(o>>6&63|128),e+=String.fromCharCode(63&o|128))
}return e},decode:function(r){for(var e="",n=0,o=0,t=0,a=0;n<r.length;)o=r.charCodeAt(n),128>o?(e+=String.fromCharCode(o),n++):o>191&&224>o?(t=r.charCodeAt(n+1),e+=String.fromCharCode((31&o)<<6|63&t),n+=2):(t=r.charCodeAt(n+1),a=r.charCodeAt(n+2),e+=String.fromCharCode((15&o)<<12|(63&t)<<6|63&a),n+=3);
return e}},n={encode_prepare:function(r){return null!=r&&(r=r.replace(/\+/g," "),-1!=navigator.userAgent.toLowerCase().indexOf("msie")||-1!=navigator.userAgent.toLowerCase().indexOf("opera"))?e.decode(r):r
},encode_prepare_arr:function(e){var n=this;if("number"==typeof e)return e;if(r.isArray(e)){var o=new Array(e.length);
return r.each(e,function(r,e){o[r]=n.encode_prepare(e)}),o}return n.encode_prepare(e)
}};return n});