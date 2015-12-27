define(["./Dashboard","./dashboard/Utf8Encoder","./dashboard/Utils"],function(e,t,i){var r={mdxGroups:{},evolutionType:"Week"};
return r.initMdxQueryGroup=function(e){var t=new r.mdxQueryGroup(e.name);for(m in e.mdxQueries)t.addMdxQuery(e.mdxQueries[m].name,e.mdxQueries[m].query,e.mdxQueries[m].dimension,e.mdxQueries[m].axis,e.mdxQueries[m].chart);
return r.mdxGroups[e.name]=t,"#"+e.htmlObject+"_evolutionType"!=void 0&&$("#"+e.htmlObject+"_evolutionType").html(t.printEvolutionType(e.htmlObject+"_evolutionType")),t
},r.updateMdxQueryGroup=function(e){var t=r.mdxGroups[e.name];void 0==t&&(t=r.initMdxQueryGroup(e)),$("#"+e.htmlObject).html(t.printConditions())
},r.buttonsDescription={"Drill Down":"Drill down to the selected value and add the condition to the other charts","Drill Up":"Drill up and add the condition to the other charts",Focus:"Focus on this value, adding the conditions to the other charts",Exclude:"Exclude this value from the chart",Expand:"Expand the depth of the chart, showing an extra sublevel",Collapse:"Collapse all previous expansions to the top most level","Reset All":"Reset all filters and conditions from this chart group, returning to the original conditions",Cancel:"Cancel"},r.fireMdxGroupAction=function(e,s,n,o,a){void 0!=o&&void 0!=a?(cType=i.ev(n.chartType),value="AreaChart"==cType?t.encode_prepare(a):t.encode_prepare(o)):value=t.encode_prepare(n);
var e=r.mdxGroups[e];if("Others"!=value){r.lastClickedMdxQueryGroup=e,e.clickedIdx=s,e.clickedValue=value;
var u=e.mdxQueries[s],l={"Drill Down":"drilldown","Drill Up":"drillup",Focus:"focus",Exclude:"filter",Expand:"expand",Collapse:"collapse","Reset All":"resetall",Cancel:"cancel"};
0==u.mdxQuery.axisDepth&&delete l.Collapse;var d=u.mdxQuery.query.rowLevels,c="function"==typeof d?d():d;
u.mdxQuery.axisPos+u.mdxQuery.axisDepth>=c.length-1?(delete l["Drill Down"],delete l.Expand):delete l.Focus,0==u.mdxQuery.axisPos&&delete l["Drill Up"],u.mdxQuery.axisDepth>0&&(delete l["Drill Down"],delete l.Focus,delete l.Exclude);
var m="Available conditions: <br/> <ul>";$.each(l,function(e){m+="<li>"+r.buttonsDescription[e]+"</li>"
}),m+="</ul>",$.prompt(m,{buttons:l,submit:r.mdxQueryGroupActionCallback})}},r.mdxQuery=function(e){this.query={},this.originalHash={},this.update(e),this.axisPos=0,this.axisDepth=0
},r.mdxQuery.prototype.reset=function(){this.update(this.originalHash)},r.mdxQuery.prototype.resetFilter=function(e){var t=this.query.filters.rows,i=t.indexOf(e);
return t.splice(i,1),i},r.mdxQuery.prototype.resetFilters=function(){this.query.filters=i.clone(this.originalHash.filters||{rows:[],columns:[]})
},r.mdxQuery.prototype.resetCondition=function(e){delete this.query.members[e],delete this.query.sets[e],void 0!=this.query.conditions[e+"InitialValue"]?this.query.where[e]=this.query.conditions[e+"InitialValue"]:delete this.query.where[e]
},r.mdxQuery.prototype.update=function(e){this.originalHash=i.clone(e),this.query.members=e.members||[],this.query.sets=e.sets||[],this.query.rows=e.rows||"",this.query.rowDrill=e.rowDrill||!1,this.query.rowLevels=e.rowLevels||[],this.query.orderBy=e.orderBy||"",this.query.from=e.from||"",this.query.columns=e.columns,this.query.columnDrill=e.columnDrill||!1,this.query.columnLevels=e.columnLevels||[],this.query.nonEmptyRows=e.nonEmptyRows&&!0,this.query.nonEmptyColumns=e.nonEmptyColumns&&!0,this.query.swapRowsAndColumns=e.swapRowsAndColumns||!1,this.query.filters=e.filters||{rows:[],columns:[]},this.query.where=e.where||{},this.query.extra=e.extra||{},this.query.conditions=[],this.query.drills=[]
},r.mdxQuery.prototype.clone=function(){var e=i.clone(this);return e},r.mdxQuery.prototype.generateAxisPart=function(e,t,i,r){if(0==e)return t;
var s=-1==t.indexOf("].")?t:t.substr(0,t.indexOf("].")+1),n=this.axisPos+this.axisDepth;
n>i.length-1&&(n=i.length-1);var o="Descendants("+t+", "+s+".["+i[n]+"],SELF)";return""==r?o:"Order("+o+", "+r+" , BDESC)"
},r.mdxQuery.prototype.getQuery=function(){var e="with ",t=[];for(p in this.query){var i=p,r="function"==typeof this.query[p]?this.query[p]():this.query[p];
t[i]=r}if("object"==typeof t.sets||"object"==typeof t.members){for(s in t.sets){var r="function"==typeof t.sets[s]?t.sets[s]():t.sets[s];
e+=" set "+r+" \n"}for(m in t.members){var r="function"==typeof t.members[m]?t.members[m]():t.members[m];
e+=" member "+r+" \n"}}var n=t.swapRowsAndColumns?t.rows:t.columns,o=t.swapRowsAndColumns?t.rowLevels:t.columnLevels,a=t.swapRowsAndColumns?t.rowDrill:t.columnDrill,u=t.swapRowsAndColumns?t.columns:t.rows,l=t.swapRowsAndColumns?t.columnLevels:t.rowLevels,d=t.swapRowsAndColumns?t.columnDrill:t.rowDrill;
e+=" set rowSet as {"+this.generateAxisPart(d,u,l,t.orderBy)+"} \n",e+=" set colSet as {"+this.generateAxisPart(a,n,o,t.orderBy)+"} \n";
var c=[],h=[];$.each(t.filters.rows,function(e,i){h.push(t.rows+".Dimension.currentMember.Name <> '"+i+"' ")
}),t.swapRowsAndColumns?(e+=" set rowFilter as "+(c.length>0?"Filter(rowSet,"+c.join(" and ")+" )":"rowSet")+"\n",e+=" set colFilter as "+(h.length>0?"Filter(colSet,"+h.join(" and ")+" )":"colSet")+"\n"):(e+=" set rowFilter as "+(h.length>0?"Filter(rowSet,"+h.join(" and ")+" )":"rowSet")+"\n",e+=" set colFilter as "+(c.length>0?"Filter(colSet,"+c.join(" and ")+" )":"colSet")+"\n"),e+="select "+(t.nonEmptyRows?" NON EMPTY ":"")+" rowFilter on rows,\n ",e+=" "+(t.nonEmptyColumns?" NON EMPTY ":"")+" colFilter on columns\n ",e+=" from "+t.from+"\n";
var y=[];return $.each(t.where,function(e,t){var i="function"==typeof t?t():t;i.length>0&&y.push(i)
}),y.length>0&&(e+=" where ( "+y.join(" , ")+" )"),e},r.mdxQuery.prototype.exclude=function(e){this.query.filters.rows.push(e)
},r.mdxQuery.prototype.drillDown=function(e){this.resetFilters(),this.query.drills.push(this.query.rows),this.query.rows=e,this.axisPos++
},r.mdxQuery.prototype.drillUp=function(){return this.axisPos--,this.query.rows=this.query.drills.pop()
},r.mdxQuery.prototype.addCondition=function(e,t){return this.addConditionAux(e,t,"focus")
},r.mdxQuery.prototype.addInitialCondition=function(e,t){this.addConditionAux(e,t)
},r.mdxQuery.prototype.removeFilter=function(e,t){this.removeCondition(e,t,"exclude");
var i=!0;for(v in this.query.conditions[e]){i=!1;break}i&&void 0!=this.query.conditions[e+"previousDrillValue"]&&(this.addCondition(e,this.query.conditions[e+"previousDrillValue"]),delete this.query.conditions[e+"previousDrillValue"])
},r.mdxQuery.prototype.removeCondition=function(e,t,i){if(void 0!=this.query.conditions[e]){if(void 0==this.query.conditions[e][t])return delete this.query.conditions[e],this.resetCondition(e),!0;
delete this.query.conditions[e][t]}var r=t.substr(0,t.indexOf("]")+1)+".[Filter]";
return this.setCondition(e,r,i),!1},r.mdxQuery.prototype.removeConditions=function(e){this.query.conditions[e]=[],this.resetCondition(e)
},r.mdxQuery.prototype.replaceConditionsByDrill=function(e,t){return void 0!=this.query.conditions[e]&&(this.query.conditions[e]=[]),this.addConditionAux(e,t,"drill")
},r.mdxQuery.prototype.replaceConditionByExclude=function(e,t){return this.addConditionAux(e,t,"exclude")
},r.mdxQuery.prototype.addConditionAux=function(e,t,i){if(void 0==i)return this.query.where[e]=t,void 0;
var r=t.substr(0,t.indexOf("]")+1)+".[Filter]";if(void 0==this.query.conditions[e]&&(this.query.conditions[e]=[],void 0!=this.query.where[e]&&(this.query.conditions[e+"InitialValue"]=this.query.where[e])),void 0==this.query.members[e]&&("exclude"==i||this.addMember(e,r+" as Aggregate("+e+"Filter)")),this.query.conditions[e][t]=i,"exclude"!=i&&delete this.query.conditions[e+"previousDrillValue"],"drill"!=i){var s=[];
for(v in this.query.conditions[e])"exclude"==i&&void 0==this.query.conditions[e+"previousDrillValue"]&&"drill"==this.query.conditions[e][v]&&(this.query.conditions[e+"previousDrillValue"]=v),this.query.conditions[e][v]==i&&(s[v]=i);
this.query.conditions[e]=s}return this.setCondition(e,r,i)},r.mdxQuery.prototype.setCondition=function(e,t,i){var r=[];
for(v in this.query.conditions[e])r.push(v);return r.length>0?("focus"==i||"drill"==i?this.addSet(e,e+"Filter as {"+r.join(",")+"}"):this.addMember(e,t+" as ( ( "+r[0]+".parent) - ("+r.join(") - (")+"))"),void 0!=t&&(this.query.where[e]=t)):this.resetCondition(e),r
},r.mdxQuery.prototype.addSet=function(e,t){this.query.sets[e]=t},r.mdxQuery.prototype.addMember=function(e,t){this.query.members[e]=t
},r.lastClickedMdxQueryGroup,r.mdxQueryGroup=function(e){this.name=e,this.mdxQueries={},this.clickedIdx=-1,this.clickedValue="",this.activeFilters={},this.activeConditions={}
},r.mdxQueryGroup.prototype.addMdxQuery=function(e,t,i,r,s){this.mdxQueries[e]={mdxQuery:t,filterDimension:i,filterAxis:r,chartObject:s}
},r.mdxQueryGroup.prototype.removeMdxQuery=function(){delete this.mdxQueries.idx},r.mdxQueryGroup.prototype.printConditions=function(){var e,t="",i=0,r=0;
for(e in this.activeFilters){var s=this.activeFilters[e];s.length>0&&1==++i&&(t+="<i>Exclusions: </i>");
var n=this.name,o=[];$.each(s,function(t,r){o.push(r[1]+' <a class="resetFilterButton" href=\'javascript:OlapUtils.mdxGroups["'+n+'"].removeFilter("'+e+'","'+r[0]+"\")'>X</a>"),++i
}),o.length>0&&(t+=o.join(" , ")+" ;")}for(e in this.activeConditions){var s=this.activeConditions[e];
s.length>0&&1==++r&&(t+=" <i>Focus: </i>");var n=this.name,o=[];$.each(s,function(t,i){o.push(i+' <a class="resetFilterButton" href=\'javascript:OlapUtils.mdxGroups["'+n+'"].removeCondition("'+e+'","'+i+"\")'>X</a>"),++r
}),o.length>0&&(t+=o.join(" , ")+"; ")}return r+i>2&&(t+=' <a  style="padding-left:15px;" href=\'javascript:OlapUtils.mdxGroups["'+this.name+"\"].resetAll()'>Reset All</a>"),t
},r.mdxQueryGroup.prototype.printEvolutionType=function(e){for(var t="",i=[["Week","Week"],["Month","Month"],["Year","Year"]],r=0,s=i.length;s>r;r++)t+="<input onclick='OlapUtils.changeEvolutionType(\""+e+"radio\")'",0==r&&(t+=" CHECKED "),t+="type='radio' id='"+e+"radio' name='"+e+"radio' value="+i[r][1]+" /> "+i[r][1]+(void 0==e.separator?"":e.separator);
return t},r.mdxQueryGroup.prototype.drillDown=function(t,i){e.incrementRunningCalls();
var r=[];void 0!=this.activeFilters&&delete this.activeFilters[t],void 0!=this.activeConditions&&delete this.activeConditions[t];
for(var s in this.mdxQueries){var n=this.mdxQueries[s];s==t?n.mdxQuery.drillDown(i):r=n.mdxQuery.replaceConditionsByDrill(t,i),e.update(n.chartObject)
}r.length>0&&(this.activeConditions[t]=r),e.update(e.getComponent(this.name)),e.decrementRunningCalls()
},r.mdxQueryGroup.prototype.drillUp=function(t){e.incrementRunningCalls();var i=[];
void 0!=this.activeFilters&&delete this.activeFilters[t],void 0!=this.activeConditions&&delete this.activeConditions[t];
var r=this.mdxQueries[t],s=r.mdxQuery.drillUp();for(var n in this.mdxQueries){var o=this.mdxQueries[n];
n!=t&&(r.mdxQuery.axisPos>0?i=o.mdxQuery.replaceConditionsByDrill(t,s):o.mdxQuery.removeCondition(t,s,"drill")),e.update(o.chartObject)
}i.length>0&&(this.activeConditions[t]=i),e.update(e.getComponent(this.name)),e.decrementRunningCalls()
},r.mdxQueryGroup.prototype.replaceFocus=function(e,t){var i;for(i in this.mdxQueries)i!=e&&this.mdxQueries[i].mdxQuery.removeConditions(e);
this.focus(e,t)},r.mdxQueryGroup.prototype.focus=function(t,i){var r,s=[];e.incrementRunningCalls(),void 0!=this.activeFilters&&delete this.activeFilters[t],void 0!=this.activeConditions&&delete this.activeConditions[t];
for(r in this.mdxQueries)if(r!=t){var n=this.mdxQueries[r];for(r=0;r<i.length;r++)s=n.mdxQuery.addCondition(t,i[r]);
e.update(n.chartObject)}s.length>0&&(this.activeConditions[t]=s),e.update(e.getComponent(this.name)),e.decrementRunningCalls()
},r.mdxQueryGroup.prototype.exclude=function(t,i){e.incrementRunningCalls();var r=i.split("].["),s=r[r.length-1].replace("]","");
this.mdxQueries[t].mdxQuery.exclude(s),e.update(this.mdxQueries[t].chartObject);var n=this.activeFilters[t]||[];
n.push([s,i]),this.activeFilters[t]=n;var o;for(o in this.mdxQueries){var a=this.mdxQueries[o];
o!=t&&(a.mdxQuery.replaceConditionByExclude(t,i),e.update(a.chartObject))}if(void 0!=this.activeConditions[t])var u=this.activeConditions[t].indexOf(i);
u>=0&&this.activeConditions[t].splice(u,1),e.decrementRunningCalls()},r.mdxQueryGroup.prototype.expand=function(t){this.mdxQueries[t].mdxQuery.axisDepth++,e.update(this.mdxQueries[t].chartObject)
},r.mdxQueryGroup.prototype.collapse=function(t){this.mdxQueries[t].mdxQuery.axisDepth--,e.update(this.mdxQueries[t].chartObject)
},r.mdxQueryGroup.prototype.resetAll=function(){e.incrementRunningCalls();for(var t in this.mdxQueries){var i=this.mdxQueries[t];
i.mdxQuery.reset(),i.mdxQuery.axisPos=0,i.mdxQuery.axisDepth=0,e.update(i.chartObject)
}this.activeFilters={},this.activeConditions={},e.update(e.getComponent(this.name)),e.decrementRunningCalls()
},r.mdxQueryGroup.prototype.removeCondition=function(t,i){e.incrementRunningCalls();
for(var r in this.mdxQueries){var s=this.mdxQueries[r];r!=t?s.mdxQuery.removeCondition(t,i,"focus")&&void 0!=this.activeFilters[t]&&delete this.activeFilters[t]:(s.mdxQuery.query.rows="function"==typeof s.mdxQuery.originalHash.rows?s.mdxQuery.originalHash.rows():s.mdxQuery.originalHash.rows,s.mdxQuery.axisPos=0,s.mdxQuery.resetFilters()),e.update(s.chartObject)
}this.activeConditions[t].splice(this.activeConditions[t].indexOf(i),1),e.update(e.getComponent(this.name)),e.decrementRunningCalls()
},r.mdxQueryGroup.prototype.removeFilter=function(t,i){e.incrementRunningCalls();
var r=this.mdxQueries[t].mdxQuery.resetFilter(i);for(var s in this.mdxQueries){var n=this.mdxQueries[s];
s!=t&&n.mdxQuery.removeFilter(t,this.activeFilters[t][r][1]),e.update(n.chartObject)
}this.activeFilters[t].splice(r,1),0==this.activeFilters[t].length&&delete this.activeFilters[t],e.update(e.getComponent(this.name)),e.decrementRunningCalls()
},r.mdxQueryGroupActionCallback=function(t,i){if("cancel"!=i){e.incrementRunningCalls();
var s=r.lastClickedMdxQueryGroup,n=s.mdxQueries[s.clickedIdx],o="function"==typeof n.mdxQuery.query.rows?n.mdxQuery.query.rows():n.mdxQuery.query.rows;
"drilldown"==i?s.drillDown(s.clickedIdx,o+".["+s.clickedValue+"]"):"drillup"==i?s.drillUp(s.clickedIdx,o+".["+s.clickedValue+"]"):"focus"==i?s.focus(s.clickedIdx,[o+".["+s.clickedValue+"]"]):"filter"==i?s.exclude(s.clickedIdx,o+".["+s.clickedValue+"]"):"expand"==i?s.expand(s.clickedIdx):"collapse"==i?s.collapse(s.clickedIdx):"resetall"==i&&s.resetAll(),e.update(e.getComponent(s.name)),e.decrementRunningCalls()
}},r.getAxisPathString=function(e,t){var i=[];return $.each(t,function(e,t){i.push("["+t+"]")
}),e+"."+i.join(".")},r.changeEvolutionType=function(e){for(var t="",i=document.getElementsByName(e),r=0,s=i.length;s>r;r++)i[r].checked&&(t=i[r].value);
this.fireChange("OlapUtils.evolutionType",t)},r.GenericMdxQuery=Base.extend({mdxQuery:void 0,options:{},tableDefaults:{},chartDefaults:{},genericDefaults:{dateDim:"[Date]",dateLevel:"[Date]",dateLevelMonth:"[Month]",from:"[CubeName]",nonEmptyRows:!0,rowDrill:!0,measuresDim:"[Measures]",orderBy:void 0,debug:!1},constructor:function(){},getQuery:function(){return this.query=this.mdxQuery.getQuery(),1==this.options.debug&&alert(this.query),this.query
},getDataTableOptions:function(e){return $.extend(this.tableDefaults,e),TableComponent.getDataTableOptions(this.tableDefaults)
},getChartOptions:function(e){return $.extend(this.chartDefaults,e),this.chartDefaults
}}),r.EvolutionQuery=r.GenericMdxQuery.extend({mdxQuery:void 0,thisMonth:"",lastMonth:"",lastYearMonth:"",specificDefaults:{baseDate:"2008-10-01",rows:"[Locale Codes]",rowLevels:["Code"],measure:"[Total Month Requests]",debug:!1},tableDefaults:{colHeaders:["Dimension","Total","% m/m","% m/m-12","Last 12 months"],colTypes:["string","numeric","numeric","numeric","sparkline"],colFormats:[null,"%.0f","%.2f","%.2f",null],colWidths:["100px","50px","50px","50px","80px"],displayLength:10,sparklineType:"line",sortBy:[[1,"desc"]]},constructor:function(e){this.options=jQuery.extend({},this.genericDefaults,this.specificDefaults,e);
var e=this.options,t=(e.dateDim+".[This Period]",e.dateDim+".[Previous Period]",e.dateDim+".[Last Year Period]",".[Not Null Measure]");
this.queryBase={from:e.from,rows:e.rows,rowLevels:e.rowLevels,rowDrill:e.rowDrill,nonEmptyRows:e.nonEmptyRows,columns:""+e.measuresDim+t+","+e.measuresDim+".[% m/m],"+e.measuresDim+".[% m/m-12],"+e.measuresDim+".[sparkdatamonths]",swapRowsAndColumns:!1,orderBy:e.orderBy,sets:{now:function(){return"now as [Date].[Date].["+i.ev(e.baseDate)+"].Lag(30.0): [Date].[Date].["+i.ev(e.baseDate)+"]"
},oneMonthAgo:function(){return"oneMonthAgo as [Date].[Date].["+i.ev(e.baseDate)+"].Lag(60.0): [Date].[Date].["+i.ev(e.baseDate)+"].Lag(30.0)"
},oneYearAgo:function(){return"oneYearAgo as [Date].[Date].["+i.ev(e.baseDate)+"].Lag(395.0): [Date].[Date].["+i.ev(e.baseDate)+"].Lag(365.0)"
},last12Months:function(){return"last12Months as LastPeriods(12.0, Ancestor("+e.dateDim+"."+e.dateLevel+".["+i.ev(e.baseDate)+"],"+e.dateDim+"."+e.dateLevelMonth+")) "
}},members:{todaysMonth:function(){return"[Date].[TodaysMonth] as Aggregate( now )"
},notNullMeasure:function(){return""+e.measuresDim+t+" as Iif(isEmpty("+e.measuresDim+"."+e.measure+"), 0 , "+e.measuresDim+"."+e.measure+") "
},thisPeriodMeasure:function(){return""+e.measuresDim+".[This Period] as Aggregate(now*"+e.measuresDim+t+") "
},previousPeriodMeasure:function(){return""+e.measuresDim+".[Previous Period] as Aggregate(oneMonthAgo*"+e.measuresDim+t+") "
},lastYearPeriodMeasure:function(){return""+e.measuresDim+".[Last Year Period] as Aggregate(oneYearAgo*"+e.measuresDim+t+") "
},mmMeasure:function(){return""+e.measuresDim+".[% m/m] as 100.0*("+e.measuresDim+t+" / "+e.measuresDim+".[Previous Period] - 1.0)  "
},mm12Measure:function(){return""+e.measuresDim+".[% m/m-12] as 100.0*("+e.measuresDim+t+" / "+e.measuresDim+".[Last Year Period] - 1.0)  "
},sparkdatamonths:function(){return""+e.measuresDim+".[sparkdatamonths] as Generate([last12Months], Cast(("+e.measuresDim+t+') + 0.0 as String), " , ") '
}},where:{dateBase:""+e.dateDim+".[TodaysMonth]"}},this.mdxQuery=new r.mdxQuery(this.queryBase)
},queryBase:{}}),r.DimensionAnalysisQuery=r.GenericMdxQuery.extend({chartTypesTranslation:{},translationHash:{},mdxQuery:void 0,thisMonth:"",lastMonth:"",lastYearMonth:"",specificDefaults:{startDate:"2008-10-01",endDate:"2008-11-01",rows:"[Product Operating Systems]",rowLevels:["Platform","Version"],measure:"[Total Requests]",defaultChartType:"bar",debug:!1,where:{}},tableDefaults:{colHeaders:["Name","Value"],colTypes:["string","numeric"],colFormats:[null,"%.0f"],sortBy:[[1,"desc"]],lengthChange:!1},chartDefaults:{domainLabelRotationDir:"up",domainLabelRotation:"0",orientation:"horizontal",title:"",isStacked:"true",is3d:!1,foregroundAlpha:.8,showValues:!0,chartType:function(){return this.parent.queryBase.extra.translationHash.chartType
},datasetType:function(){return this.parent.queryBase.extra.translationHash.datasetType
},includeLegend:function(){return this.parent.queryBase.extra.translationHash.includeLegend
},topCountAxis:function(){return this.parent.queryBase.extra.translationHash.axis[1]
}},constructor:function(e){this.options=jQuery.extend({},this.genericDefaults,this.specificDefaults,e);
var e=this.options;this.chartTypesTranslation={pie:{type:"jFreeChartComponent",chartType:"PieChart",datasetType:"CategoryDataset",axis:["columns","rows"],member:"("+e.dateDim+".[Date Range], "+e.measuresDim+".[Avg])",includeLegend:!1},bar:{type:"jFreeChartComponent",chartType:"BarChart",datasetType:"CategoryDataset",axis:["columns","rows"],member:"("+e.dateDim+".[Date Range], "+e.measuresDim+".[Avg])",includeLegend:!1},table:{type:"tableComponent",chartType:"PieChart",datasetType:"CategoryDataset",axis:["columns","rows"],member:"("+e.dateDim+".[Date Range], "+e.measuresDim+".[Avg])",includeLegend:!1},trend:{type:"jFreeChartComponent",chartType:"AreaChart",datasetType:"TimeSeriesCollection",axis:["rows","columns"],member:"a",includeLegend:!0}},this.queryBase={from:e.from,rows:e.rows,rowLevels:e.rowLevels,rowDrill:e.rowDrill,nonEmptyRows:e.nonEmptyRows,columns:function(){return this.extra.translationHash.member
},swapRowsAndColumns:function(){return"rows"==this.extra.translationHash.axis[0]},orderBy:"Avg(a,"+e.measuresDim+"."+e.measure+")",sets:{a:function(){return"a as '("+e.dateDim+"."+e.dateLevel+".["+i.ev(e.startDate)+"]:"+e.dateDim+"."+e.dateLevel+".["+i.ev(e.endDate)+"])'"
}},members:{daterange:""+e.dateDim+".[Date Range] as Aggregate(a)",average:""+e.measuresDim+".[Avg] as 'Avg(a,"+e.measuresDim+"."+e.measure+")'"},where:e.where,extra:{}};
var t=i.clone(this);delete t.chartDefaults,this.chartDefaults.parent=t,this.setChartType(e.defaultChartType),this.mdxQuery=new r.mdxQuery(this.queryBase)
},setChartType:function(e){this.queryBase.extra.translationHash=this.chartTypesTranslation[e],this.chartDefaults.parent.queryBase.extra.translationHash=this.chartTypesTranslation[e]
},getComponentType:function(){return this.chartDefaults.parent.queryBase.extra.translationHash.type
},queryBase:{}}),r});