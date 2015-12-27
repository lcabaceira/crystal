Timeline.GeochronoUnit=new Object,Timeline.GeochronoUnit.MA=0,Timeline.GeochronoUnit.AGE=1,Timeline.GeochronoUnit.EPOCH=2,Timeline.GeochronoUnit.PERIOD=3,Timeline.GeochronoUnit.ERA=4,Timeline.GeochronoUnit.EON=5,Timeline.GeochronoUnit.getParser=function(){return Timeline.GeochronoUnit.parseFromObject
},Timeline.GeochronoUnit.createLabeller=function(e){return new Timeline.GeochronoLabeller(e)
},Timeline.GeochronoUnit.wrapMA=function(e){return new Timeline.GeochronoUnit._MA(e)
},Timeline.GeochronoUnit.makeDefaultValue=function(){return Timeline.GeochronoUnit.wrapMA(0)
},Timeline.GeochronoUnit.cloneValue=function(e){return new Timeline.GeochronoUnit._MA(e._n)
},Timeline.GeochronoUnit.parseFromObject=function(e){return e instanceof Timeline.GeochronoUnit._MA?e:"number"==typeof e?Timeline.GeochronoUnit.wrapMA(e):"string"==typeof e&&e.length>0?Timeline.GeochronoUnit.wrapMA(Number(e)):null
},Timeline.GeochronoUnit.toNumber=function(e){return e._n},Timeline.GeochronoUnit.fromNumber=function(e){return new Timeline.GeochronoUnit._MA(e)
},Timeline.GeochronoUnit.compare=function(e,n){var o,i;return o="object"==typeof e?e._n:Number(e),i="object"==typeof n?n._n:Number(n),i-o
},Timeline.GeochronoUnit.earlier=function(e,n){return Timeline.GeochronoUnit.compare(e,n)<0?e:n
},Timeline.GeochronoUnit.later=function(e,n){return Timeline.GeochronoUnit.compare(e,n)>0?e:n
},Timeline.GeochronoUnit.change=function(e,n){return new Timeline.GeochronoUnit._MA(e._n-n)
},Timeline.GeochronoUnit._MA=function(e){this._n=e};