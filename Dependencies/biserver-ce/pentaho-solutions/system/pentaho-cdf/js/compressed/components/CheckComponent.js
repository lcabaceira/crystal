define(["../lib/jquery","./ToggleButtonBaseComponent"],function(e,n){var t=n.extend({getValue:function(){if("undefined"!=this.currentVal&&null!=this.currentVal)return this.currentVal;
var n=new Array;return this.placeholder("."+this.name+":checked").each(function(){n.push(e(this).val())
}),n}});return t});