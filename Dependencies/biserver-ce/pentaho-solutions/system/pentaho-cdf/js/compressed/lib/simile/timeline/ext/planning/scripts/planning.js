Timeline.Planning=new Object,Timeline.Planning.createBandInfo=function(e){var n="theme"in e?e.theme:Timeline.getDefaultTheme(),i="eventSource"in e?e.eventSource:null,t=new Timeline.LinearEther({centersOn:"date"in e?e.date:Timeline.PlanningUnit.makeDefaultValue(),interval:1,pixelsPerInterval:e.intervalPixels}),a=new Timeline.PlanningEtherPainter({intervalUnit:e.intervalUnit,multiple:"multiple"in e?e.multiple:1,align:e.align,theme:n}),r={theme:n};
"trackHeight"in e&&(r.trackHeight=e.trackHeight),"trackGap"in e&&(r.trackGap=e.trackGap);
var l="overview"in e&&e.overview?new Timeline.OverviewEventPainter(r):new Timeline.DetailedEventPainter(r);
return{width:e.width,eventSource:i,timeZone:"timeZone"in e?e.timeZone:0,ether:t,etherPainter:a,eventPainter:l}
};