Timeline.NativeDateUnit=new Object,Timeline.NativeDateUnit.createLabeller=function(e,t){return new Timeline.GregorianDateLabeller(e,t)
},Timeline.NativeDateUnit.makeDefaultValue=function(){return new Date},Timeline.NativeDateUnit.cloneValue=function(e){return new Date(e.getTime())
},Timeline.NativeDateUnit.getParser=function(e){return"string"==typeof e&&(e=e.toLowerCase()),"iso8601"==e||"iso 8601"==e?Timeline.DateTime.parseIso8601DateTime:Timeline.DateTime.parseGregorianDateTime
},Timeline.NativeDateUnit.parseFromObject=function(e){return Timeline.DateTime.parseGregorianDateTime(e)
},Timeline.NativeDateUnit.toNumber=function(e){return e.getTime()},Timeline.NativeDateUnit.fromNumber=function(e){return new Date(e)
},Timeline.NativeDateUnit.compare=function(e,t){var i,n;return i="object"==typeof e?e.getTime():Number(e),n="object"==typeof t?t.getTime():Number(t),i-n
},Timeline.NativeDateUnit.earlier=function(e,t){return Timeline.NativeDateUnit.compare(e,t)<0?e:t
},Timeline.NativeDateUnit.later=function(e,t){return Timeline.NativeDateUnit.compare(e,t)>0?e:t
},Timeline.NativeDateUnit.change=function(e,t){return new Date(e.getTime()+t)};