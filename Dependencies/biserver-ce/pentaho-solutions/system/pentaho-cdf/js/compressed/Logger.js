define([],function(){var e={loglevels:["debug","log","info","warn","error","exception"],loglevel:"debug",log:function(e,o,n){if(o=o||"info",!(this.loglevels.indexOf(o)<this.loglevels.indexOf(this.loglevel))&&"undefined"!=typeof console){if(console[o]||("exception"===o?(o="error",e=e.stack||e):o="log"),n)try{return console[o]("%c["+o+"] WD: "+e,n),void 0
}catch(r){}console[o]("["+o+"] WD: "+e)}},debug:function(e){return this.log(e,"debug")
},info:function(e){return this.log(e,"info")},warn:function(e){return this.log(e,"warn")
},error:function(e){return this.log(e,"error")},exception:function(e){return this.log(e,"exception")
}};return e});