define(["./SelectBaseComponent","../lib/jquery"],function(t){var e=t.extend({getValue:function(){var t=this.placeholder("select"),e=t.val();
return null==e?[]:e},_allowMultipleValues:function(){return null==this.isMultiple||!!this.isMultiple
},_getListSize:function(t){var e=this.base(t);return null==e&&(this._allowMultipleValues()||(e=t.length)),e
},topIndex:function(t){var e=this.placeholder("select"),l=e[0],n=l.length;if(!n)return arguments.length?this:0;
var i=Math.max(1,l.scrollHeight),r=Math.max(1,i/n);if(arguments.length){var u=+t;
return u=isNaN(u)?0:Math.max(0,Math.min(u,n-1)),e.scrollTop(Math.ceil(u*r)),this}return Math.round(e.scrollTop()/r)
},indexOf:function(t){if(null!=t){var e=this.placeholder("select option"),l=e.length;
if(l){t=String(t);for(var n=0;l>n;n++)if(e[n].value===t)return n}}return-1},valueAt:function(t){return t>=0?this.placeholder("select :nth-child("+(t+1)+")").val():void 0
},topValue:function(t){if(arguments.length){var e=this.indexOf(t);return e>=0&&this.topIndex(e),this
}return this.valueAt(this.topIndex())}});return e});