SimileAjax.Set=function(t){if(this._hash={},this._count=0,t instanceof Array)for(var e=0;e<t.length;e++)this.add(t[e]);
else t instanceof SimileAjax.Set&&this.addSet(t)},SimileAjax.Set.prototype.add=function(t){return t in this._hash?!1:(this._hash[t]=!0,this._count++,!0)
},SimileAjax.Set.prototype.addSet=function(t){for(var e in t._hash)this.add(e)},SimileAjax.Set.prototype.remove=function(t){return t in this._hash?(delete this._hash[t],this._count--,!0):!1
},SimileAjax.Set.prototype.removeSet=function(t){for(var e in t._hash)this.remove(e)
},SimileAjax.Set.prototype.retainSet=function(t){for(var e in this._hash)t.contains(e)||(delete this._hash[e],this._count--)
},SimileAjax.Set.prototype.contains=function(t){return t in this._hash},SimileAjax.Set.prototype.size=function(){return this._count
},SimileAjax.Set.prototype.toArray=function(){var t=[];for(var e in this._hash)t.push(e);
return t},SimileAjax.Set.prototype.visit=function(t){for(var e in this._hash)if(1==t(e))break
},SimileAjax.SortedArray=function(t,e){this._a=e instanceof Array?e:[],this._compare=t
},SimileAjax.SortedArray.prototype.add=function(t){var e=this,n=this.find(function(n){return e._compare(n,t)
});n<this._a.length?this._a.splice(n,0,t):this._a.push(t)},SimileAjax.SortedArray.prototype.remove=function(t){for(var e=this,n=this.find(function(n){return e._compare(n,t)
});n<this._a.length&&0==this._compare(this._a[n],t);){if(this._a[n]==t)return this._a.splice(n,1),!0;
n++}return!1},SimileAjax.SortedArray.prototype.removeAll=function(){this._a=[]},SimileAjax.SortedArray.prototype.elementAt=function(t){return this._a[t]
},SimileAjax.SortedArray.prototype.length=function(){return this._a.length},SimileAjax.SortedArray.prototype.find=function(t){for(var e=0,n=this._a.length;n>e;){var i=Math.floor((e+n)/2),r=t(this._a[i]);
if(i==e)return 0>r?e+1:e;0>r?e=i:n=i}return e},SimileAjax.SortedArray.prototype.getFirst=function(){return this._a.length>0?this._a[0]:null
},SimileAjax.SortedArray.prototype.getLast=function(){return this._a.length>0?this._a[this._a.length-1]:null
},SimileAjax.EventIndex=function(t){var e=this;this._unit=null!=t?t:SimileAjax.NativeDateUnit,this._events=new SimileAjax.SortedArray(function(t,n){return e._unit.compare(t.getStart(),n.getStart())
}),this._idToEvent={},this._indexed=!0},SimileAjax.EventIndex.prototype.getUnit=function(){return this._unit
},SimileAjax.EventIndex.prototype.getEvent=function(t){return this._idToEvent[t]},SimileAjax.EventIndex.prototype.add=function(t){this._events.add(t),this._idToEvent[t.getID()]=t,this._indexed=!1
},SimileAjax.EventIndex.prototype.removeAll=function(){this._events.removeAll(),this._idToEvent={},this._indexed=!1
},SimileAjax.EventIndex.prototype.getCount=function(){return this._events.length()
},SimileAjax.EventIndex.prototype.getIterator=function(t,e){return this._indexed||this._index(),new SimileAjax.EventIndex._Iterator(this._events,t,e,this._unit)
},SimileAjax.EventIndex.prototype.getReverseIterator=function(t,e){return this._indexed||this._index(),new SimileAjax.EventIndex._ReverseIterator(this._events,t,e,this._unit)
},SimileAjax.EventIndex.prototype.getAllIterator=function(){return new SimileAjax.EventIndex._AllIterator(this._events)
},SimileAjax.EventIndex.prototype.getEarliestDate=function(){var t=this._events.getFirst();
return null==t?null:t.getStart()},SimileAjax.EventIndex.prototype.getLatestDate=function(){var t=this._events.getLast();
if(null==t)return null;this._indexed||this._index();for(var e=t._earliestOverlapIndex,n=this._events.elementAt(e).getEnd(),i=e+1;i<this._events.length();i++)n=this._unit.later(n,this._events.elementAt(i).getEnd());
return n},SimileAjax.EventIndex.prototype._index=function(){for(var t=this._events.length(),e=0;t>e;e++){var n=this._events.elementAt(e);
n._earliestOverlapIndex=e}for(var i=1,e=0;t>e;e++){var n=this._events.elementAt(e),r=n.getEnd();
for(i=Math.max(i,e+1);t>i;){var s=this._events.elementAt(i),a=s.getStart();if(!(this._unit.compare(a,r)<0))break;
s._earliestOverlapIndex=e,i++}}this._indexed=!0},SimileAjax.EventIndex._Iterator=function(t,e,n,i){this._events=t,this._startDate=e,this._endDate=n,this._unit=i,this._currentIndex=t.find(function(t){return i.compare(t.getStart(),e)
}),this._currentIndex-1>=0&&(this._currentIndex=this._events.elementAt(this._currentIndex-1)._earliestOverlapIndex),this._currentIndex--,this._maxIndex=t.find(function(t){return i.compare(t.getStart(),n)
}),this._hasNext=!1,this._next=null,this._findNext()},SimileAjax.EventIndex._Iterator.prototype={hasNext:function(){return this._hasNext
},next:function(){if(this._hasNext){var t=this._next;return this._findNext(),t}return null
},_findNext:function(){for(var t=this._unit;++this._currentIndex<this._maxIndex;){var e=this._events.elementAt(this._currentIndex);
if(t.compare(e.getStart(),this._endDate)<0&&t.compare(e.getEnd(),this._startDate)>0)return this._next=e,this._hasNext=!0,void 0
}this._next=null,this._hasNext=!1}},SimileAjax.EventIndex._ReverseIterator=function(t,e,n,i){this._events=t,this._startDate=e,this._endDate=n,this._unit=i,this._minIndex=t.find(function(t){return i.compare(t.getStart(),e)
}),this._minIndex-1>=0&&(this._minIndex=this._events.elementAt(this._minIndex-1)._earliestOverlapIndex),this._maxIndex=t.find(function(t){return i.compare(t.getStart(),n)
}),this._currentIndex=this._maxIndex,this._hasNext=!1,this._next=null,this._findNext()
},SimileAjax.EventIndex._ReverseIterator.prototype={hasNext:function(){return this._hasNext
},next:function(){if(this._hasNext){var t=this._next;return this._findNext(),t}return null
},_findNext:function(){for(var t=this._unit;--this._currentIndex>=this._minIndex;){var e=this._events.elementAt(this._currentIndex);
if(t.compare(e.getStart(),this._endDate)<0&&t.compare(e.getEnd(),this._startDate)>0)return this._next=e,this._hasNext=!0,void 0
}this._next=null,this._hasNext=!1}},SimileAjax.EventIndex._AllIterator=function(t){this._events=t,this._index=0
},SimileAjax.EventIndex._AllIterator.prototype={hasNext:function(){return this._index<this._events.length()
},next:function(){return this._index<this._events.length()?this._events.elementAt(this._index++):null
}};