String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")},String.prototype.startsWith=function(t){return this.length>=t.length&&this.substr(0,t.length)==t
},String.prototype.endsWith=function(t){return this.length>=t.length&&this.substr(this.length-t.length)==t
},String.substitute=function(t,n){for(var r="",s=0;s<t.length-1;){var e=t.indexOf("%",s);
if(0>e||e==t.length-1)break;if(e>s&&"\\"==t.charAt(e-1))r+=t.substring(s,e-1)+"%",s=e+1;
else{var i=parseInt(t.charAt(e+1));r+=isNaN(i)||i>=n.length?t.substring(s,e+2):t.substring(s,e)+n[i].toString(),s=e+2
}}return s<t.length&&(r+=t.substring(s)),r};