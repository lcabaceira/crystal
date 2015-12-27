define(["../lib/jquery","./BaseComponent","../Logger"],function(e,a,t){var r=a.extend({update:function(){var a=this,r=a.name,n="<input type='text' id='"+r+"' name='"+r+"' value='"+a.dashboard.getParameterValue(a.parameter)+(a.size?"' size='"+a.size:a.charWidth?"' size='"+a.charWidth:"")+(a.maxLength?"' maxlength='"+a.maxLength:a.maxChars?"' maxlength='"+a.maxChars:"")+"'>";
a.size&&t.warn("Attribute 'size' is deprecated"),a.maxLength&&t.warn("Attribute 'maxLength' is deprecated"),a.placeholder().html(n);
var h=e("#"+r);h.change(function(){a.dashboard.getParameterValue(a.parameter)!==h.val()&&a.dashboard.processChange(r)
}).keyup(function(e){13==e.keyCode&&a.dashboard.getParameterValue(a.parameter)!==h.val()&&a.dashboard.processChange(r)
}),a._doAutoFocus()},getValue:function(){return e("#"+this.name).val()}});return r
});