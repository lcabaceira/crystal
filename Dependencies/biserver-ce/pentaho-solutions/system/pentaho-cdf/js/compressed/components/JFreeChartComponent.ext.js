define(["../dashboard/Dashboard.ext","common-ui/util/URLEncoder","../Logger"],function(DashboardExt,Encoder,Logger){var JFreeChartComponentExt={getOpenFlashChart:function(e){return e
},getCaption:function(cd,myself,exportFile,cdfComponent){return{title:{title:void 0!=cd.title?cd.title:"Details",oclass:"title"},chartType:{title:"Chart Type",show:function(){return"function"!=cd.chartType&&("BarChart"==cd.chartType||"PieChart"==cd.chartType)
},icon:function(){return"BarChart"==cd.chartType?"jfPieIcon":"jfBarIcon"},oclass:"options",callback:function(){cd.chartType="BarChart"==cd.chartType?"PieChart":"BarChart",myself.update()
}},zoom:{title:"Zoom",icon:"jfMagnifyIcon",oclass:"options",callback:function(){myself.dashboard.incrementRunningCalls();
var parameters=myself.getParameters(),width=200,height=200,urlTemplate,parameterName="";
for(var p in parameters)"width"==parameters[p][0]&&(width+=parameters[p][1],parameters[p]=["width",width]),"height"==parameters[p][0]&&(height+=parameters[p][1],parameters[p]=["height",height]),"parameterName"==parameters[p][0]&&(parameterName=parameters[p][1],parameters[p]=["parameterName","parameterValue"]),"urlTemplate"==parameters[p][0]&&(urlTemplate=parameters[p][1],parameters[p]=["urlTemplate","javascript:chartClick('"+myself.name+"','{parameterValue}');"]);
myself.zoomCallBack=function(value){eval(urlTemplate.replace("{"+parameterName+"}",value))
},myself.dashboard.callPentahoAction(myself,"system","pentaho-cdf/actions",cdfComponent,parameters,function(e){if(null!=e){var a=window.open(DashboardExt.getCaptifyZoom(),"_blank","width="+(width+17)+",height="+(height+20));
if(a){var t=10,r=function(){"undefined"!=typeof a.loadChart?a.loadChart(e.find("ExecuteActivityResponse:first-child").text()):t>0&&(t-=1,setTimeout(r,500))
};r()}else Logger.log("Please disable popup blockers and try again.")}myself.dashboard.decrementRunningCalls()
})}}}}};return JFreeChartComponentExt});