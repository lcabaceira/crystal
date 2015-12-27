Timeplot.Color=function(t){this._fromHex(t)},Timeplot.Color.prototype={set:function(t,s,i,r){return this.r=t,this.g=s,this.b=i,this.a=r?r:1,this.check()
},transparency:function(t){return this.a=t,this.check()},lighten:function(t){var s=new Timeplot.Color;
return s.set(this.r+=parseInt(t,10),this.g+=parseInt(t,10),this.b+=parseInt(t,10))
},darken:function(t){var s=new Timeplot.Color;return s.set(this.r-=parseInt(t,10),this.g-=parseInt(t,10),this.b-=parseInt(t,10))
},check:function(){return this.r>255?this.r=255:this.r<0&&(this.r=0),this.g>255?this.g=255:this.g<0&&(this.g=0),this.b>255?this.b=255:this.b<0&&(this.b=0),this.a>1?this.a=1:this.a<0&&(this.a=0),this
},toString:function(t){var s=t?t:this.a?this.a:1;return"rgba("+this.r+","+this.g+","+this.b+","+s+")"
},toHexString:function(){return"#"+this._toHex(this.r)+this._toHex(this.g)+this._toHex(this.b)
},_fromHex:function(t){return/^#?([\da-f]{3}|[\da-f]{6})$/i.test(t)?(t=t.replace(/^#/,"").replace(/^([\da-f])([\da-f])([\da-f])$/i,"$1$1$2$2$3$3"),this.r=parseInt(t.substr(0,2),16),this.g=parseInt(t.substr(2,2),16),this.b=parseInt(t.substr(4,2),16)):/^rgb *\( *\d{0,3} *, *\d{0,3} *, *\d{0,3} *\)$/i.test(t)&&(t=t.match(/^rgb *\( *(\d{0,3}) *, *(\d{0,3}) *, *(\d{0,3}) *\)$/i),this.r=parseInt(t[1],10),this.g=parseInt(t[2],10),this.b=parseInt(t[3],10)),this.a=1,this.check()
},_toHex:function(t){var s="0123456789ABCDEF";if(0>t)return"00";if(t>255)return"FF";
var i=Math.floor(t/16),r=t%16;return s.charAt(i)+s.charAt(r)}};