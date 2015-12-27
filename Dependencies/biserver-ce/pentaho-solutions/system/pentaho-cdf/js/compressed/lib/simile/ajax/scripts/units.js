SimileAjax.NativeDateUnit=new Object,SimileAjax.NativeDateUnit.makeDefaultValue=function(){return new Date
},SimileAjax.NativeDateUnit.cloneValue=function(e){return new Date(e.getTime())},SimileAjax.NativeDateUnit.getParser=function(e){return"string"==typeof e&&(e=e.toLowerCase()),"iso8601"==e||"iso 8601"==e?SimileAjax.DateTime.parseIso8601DateTime:SimileAjax.DateTime.parseGregorianDateTime
},SimileAjax.NativeDateUnit.parseFromObject=function(e){return SimileAjax.DateTime.parseGregorianDateTime(e)
},SimileAjax.NativeDateUnit.toNumber=function(e){return e.getTime()},SimileAjax.NativeDateUnit.fromNumber=function(e){return new Date(e)
},SimileAjax.NativeDateUnit.compare=function(e,t){var i,a;return i="object"==typeof e?e.getTime():Number(e),a="object"==typeof t?t.getTime():Number(t),i-a
},SimileAjax.NativeDateUnit.earlier=function(e,t){return SimileAjax.NativeDateUnit.compare(e,t)<0?e:t
},SimileAjax.NativeDateUnit.later=function(e,t){return SimileAjax.NativeDateUnit.compare(e,t)>0?e:t
},SimileAjax.NativeDateUnit.change=function(e,t){return new Date(e.getTime()+t)};
