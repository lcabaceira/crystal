define(["./jquery","./jquery.ui"],function(t){t.fn.daterangepicker=function(n){function i(e){if(!e.getDate())return"";
{var n=(e.getDate(),e.getMonth());e.getFullYear()}n++;var i=u.dateFormat;return t.datepicker.formatDate(i,e)
}function r(){"closed"==y.data("state")&&(y.data("state","open"),y.fadeIn(300),"none"==y.find(".ui-datepicker").css("display")&&y.find(".ui-datepicker").css("display","block"),u.onOpen())
}function s(){"open"==y.data("state")&&(y.data("state","closed"),y.fadeOut(300),u.onClose())
}function a(){"open"==y.data("state")?s():r()}var o=t(this),u=t.extend({presetRanges:[{text:"Today",dateStart:"today",dateEnd:"today"},{text:"Last 7 days",dateStart:"today-7days",dateEnd:"today"},{text:"Month to date",dateStart:function(){return Date.parse("today").moveToFirstDayOfMonth()
},dateEnd:"today"},{text:"Year to date",dateStart:function(){var t=Date.parse("today");
return t.setMonth(0),t.setDate(1),t},dateEnd:"today"},{text:"The previous Month",dateStart:function(){return Date.parse("1 month ago").moveToFirstDayOfMonth()
},dateEnd:function(){return Date.parse("1 month ago").moveToLastDayOfMonth()}}],presets:{specificDate:"Specific Date",allDatesBefore:"All Dates Before",allDatesAfter:"All Dates After",dateRange:"Date Range"},rangeStartTitle:"Start date",rangeEndTitle:"End date",nextLinkText:"Next",prevLinkText:"Prev",doneButtonText:"Done",earliestDate:Date.parse("-15years"),latestDate:Date.parse("+15years"),rangeSplitter:"-",dateFormat:"m/d/yy",closeOnSelect:!0,arrows:!1,posX:o.offset().left,posY:o.offset().top+o.outerHeight(),appendTo:"body",onClose:function(){},onOpen:function(){},onChange:function(){var t=i(y.find(".range-start").datepicker("getDate")),e=i(y.find(".range-end").datepicker("getDate"));
n.onDateSelect(t,e)},onDateSelect:function(){},datepickerOptions:null},n),h={onSelect:function(){y.find(".ui-daterangepicker-specificDate").is(".ui-state-active")&&y.find(".range-end").datepicker("setDate",y.find(".range-start").datepicker("getDate"));
var t=i(y.find(".range-start").datepicker("getDate")),e=i(y.find(".range-end").datepicker("getDate"));
2==o.length?(o.eq(0).val(t),o.eq(1).val(e)):o.val(t!=e?t+" "+u.rangeSplitter+" "+e:t),u.closeOnSelect&&(y.find("li.ui-state-active").is(".ui-daterangepicker-dateRange")||y.is(":animated")||s()),u.onChange()
},defaultDate:0};o.change(u.onChange),u.datepickerOptions=n?t.extend(h,n.datepickerOptions):h;
var c,d,l,f=Date.parse("today");2==o.size()?(d=Date.parse(o.eq(0).val()),l=Date.parse(o.eq(1).val()),null==d&&(d=l),null==l&&(l=d)):(d=Date.parse(o.val().split(u.rangeSplitter)[0]),l=Date.parse(o.val().split(u.rangeSplitter)[1]),null==l&&(l=d)),null!=d&&(c=d),null!=l&&(f=l);
{var y=t('<div class="ui-daterangepicker ui-widget ui-helper-clearfix ui-widget-content ui-corner-all"></div>');
!function(){var e=t('<ul class="ui-widget-content"></ul>').appendTo(y);t.each(u.presetRanges,function(){t('<li class="ui-daterangepicker-'+this.text.replace(/ /g,"")+' ui-corner-all"><a href="#">'+this.text+"</a></li>").data("dateStart",this.dateStart).data("dateEnd",this.dateEnd).appendTo(e)
});var n=0;return t.each(u.presets,function(i,r){t('<li class="ui-daterangepicker-'+i+" preset_"+n+' ui-helper-clearfix ui-corner-all"><span class="ui-icon ui-icon-triangle-1-e"></span><a href="#">'+r+"</a></li>").appendTo(e),n++
}),e.find("li").hover(function(){t(this).addClass("ui-state-hover")},function(){t(this).removeClass("ui-state-hover")
}).click(function(){return y.find(".ui-state-active").removeClass("ui-state-active"),t(this).addClass("ui-state-active"),m(t(this),y,g,p),!1
}),e}()}t.fn.restoreDateFromData=function(){return t(this).data("saveDate")&&t(this).datepicker("setDate",t(this).data("saveDate")).removeData("saveDate"),this
},t.fn.saveDateToData=function(){return t(this).data("saveDate")||t(this).data("saveDate",t(this).datepicker("getDate")),this
},y.data("state","closed");var m=function(t,e,n,i){if(t.is(".ui-daterangepicker-specificDate"))i.hide(),n.show(),e.find(".title-start").text(u.presets.specificDate),e.find(".range-start").restoreDateFromData().show(400),e.find(".range-end").restoreDateFromData().hide(400),setTimeout(function(){i.fadeIn()
},400);else if(t.is(".ui-daterangepicker-allDatesBefore"))i.hide(),n.show(),e.find(".title-end").text(u.presets.allDatesBefore),e.find(".range-start").saveDateToData().datepicker("setDate",u.earliestDate).hide(400),e.find(".range-end").restoreDateFromData().show(400),setTimeout(function(){i.fadeIn()
},400);else if(t.is(".ui-daterangepicker-allDatesAfter"))i.hide(),n.show(),e.find(".title-start").text(u.presets.allDatesAfter),e.find(".range-start").restoreDateFromData().show(400),e.find(".range-end").saveDateToData().datepicker("setDate",u.latestDate).hide(400),setTimeout(function(){i.fadeIn()
},400);else if(t.is(".ui-daterangepicker-dateRange"))i.hide(),n.show(),e.find(".title-start").text(u.rangeStartTitle),e.find(".title-end").text(u.rangeEndTitle),e.find(".range-start").restoreDateFromData().show(400),e.find(".range-end").restoreDateFromData().show(400),setTimeout(function(){i.fadeIn()
},400);else{i.hide(),e.find(".range-start, .range-end").hide(400,function(){n.hide()
});var r="string"==typeof t.data("dateStart")?Date.parse(t.data("dateStart")):t.data("dateStart")(),s="string"==typeof t.data("dateEnd")?Date.parse(t.data("dateEnd")):t.data("dateEnd")();
e.find(".range-start").datepicker("setDate",r).find(".ui-datepicker-current-day"),e.find(".range-end").datepicker("setDate",s).find(".ui-datepicker-current-day").trigger("click")
}return!1},g=t('<div class="ranges ui-widget-header ui-corner-all ui-helper-clearfix"><div class="range-start"><span class="title-start">Start Date</span></div><div class="range-end"><span class="title-end">End Date</span></div></div>').appendTo(y);
g.find(".range-start, .range-end").datepicker(u.datepickerOptions),g.find(".range-start").datepicker("setDate",c),g.find(".range-end").datepicker("setDate",f);
var p=t('<button class="btnDone ui-state-default ui-corner-all">'+u.doneButtonText+"</button>").click(function(){y.find(".ui-datepicker-current-day").trigger("click"),s()
}).hover(function(){t(this).addClass("ui-state-hover")},function(){t(this).removeClass("ui-state-hover")
}).appendTo(g);if(t(this).click(function(){return a(),!1}),g.css("display","none").find(".range-start, .range-end, .btnDone").css("display","none"),t(u.appendTo).append(y),y.wrap('<div class="ui-daterangepickercontain"></div>'),u.posX&&y.parent().css("left",u.posX),u.posY&&y.parent().css("top",u.posY),u.arrows&&1==o.size()){var D=t('<a href="#" class="ui-daterangepicker-prev ui-corner-all" title="'+u.prevLinkText+'"><span class="ui-icon ui-icon-circle-triangle-w">'+u.prevLinkText+"</span></a>"),v=t('<a href="#" class="ui-daterangepicker-next ui-corner-all" title="'+u.nextLinkText+'"><span class="ui-icon ui-icon-circle-triangle-e">'+u.nextLinkText+"</span></a>");
t(this).addClass("ui-rangepicker-input ui-widget-content").wrap('<div class="ui-daterangepicker-arrows ui-widget ui-widget-header ui-helper-clearfix ui-corner-all"></div>').before(D).before(v).parent().find("a").click(function(){var n=g.find(".range-start").datepicker("getDate"),i=g.find(".range-end").datepicker("getDate"),r=Math.abs(new e(n-i).getTotalMilliseconds())+864e5;
return t(this).is(".ui-daterangepicker-prev")&&(r=-r),g.find(".range-start, .range-end ").each(function(){var e=t(this).datepicker("getDate");
return null==e?!1:(t(this).datepicker("setDate",e.add({milliseconds:r})).find(".ui-datepicker-current-day").trigger("click"),void 0)
}),!1}).hover(function(){t(this).addClass("ui-state-hover")},function(){t(this).removeClass("ui-state-hover")
})}return t(document).click(function(){y.is(":visible")&&s()}),y.click(function(){return!1
}).hide(),this},Date.CultureInfo={name:"en-US",englishName:"English (United States)",nativeName:"English (United States)",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],abbreviatedDayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shortestDayNames:["Su","Mo","Tu","We","Th","Fr","Sa"],firstLetterDayNames:["S","M","T","W","T","F","S"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],abbreviatedMonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],amDesignator:"AM",pmDesignator:"PM",firstDayOfWeek:0,twoDigitYearMax:2029,dateElementOrder:"mdy",formatPatterns:{shortDate:"M/d/yyyy",longDate:"dddd, MMMM dd, yyyy",shortTime:"h:mm tt",longTime:"h:mm:ss tt",fullDateTime:"dddd, MMMM dd, yyyy h:mm:ss tt",sortableDateTime:"yyyy-MM-ddTHH:mm:ss",universalSortableDateTime:"yyyy-MM-dd HH:mm:ssZ",rfc1123:"ddd, dd MMM yyyy HH:mm:ss GMT",monthDay:"MMMM dd",yearMonth:"MMMM, yyyy"},regexPatterns:{jan:/^jan(uary)?/i,feb:/^feb(ruary)?/i,mar:/^mar(ch)?/i,apr:/^apr(il)?/i,may:/^may/i,jun:/^jun(e)?/i,jul:/^jul(y)?/i,aug:/^aug(ust)?/i,sep:/^sep(t(ember)?)?/i,oct:/^oct(ober)?/i,nov:/^nov(ember)?/i,dec:/^dec(ember)?/i,sun:/^su(n(day)?)?/i,mon:/^mo(n(day)?)?/i,tue:/^tu(e(s(day)?)?)?/i,wed:/^we(d(nesday)?)?/i,thu:/^th(u(r(s(day)?)?)?)?/i,fri:/^fr(i(day)?)?/i,sat:/^sa(t(urday)?)?/i,future:/^next/i,past:/^last|past|prev(ious)?/i,add:/^(\+|aft(er)?|from|hence)/i,subtract:/^(\-|bef(ore)?|ago)/i,yesterday:/^yes(terday)?/i,today:/^t(od(ay)?)?/i,tomorrow:/^tom(orrow)?/i,now:/^n(ow)?/i,millisecond:/^ms|milli(second)?s?/i,second:/^sec(ond)?s?/i,minute:/^mn|min(ute)?s?/i,hour:/^h(our)?s?/i,week:/^w(eek)?s?/i,month:/^m(onth)?s?/i,day:/^d(ay)?s?/i,year:/^y(ear)?s?/i,shortMeridian:/^(a|p)/i,longMeridian:/^(a\.?m?\.?|p\.?m?\.?)/i,timezone:/^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,ordinalSuffix:/^\s*(st|nd|rd|th)/i,timeContext:/^\s*(\:|a(?!u|p)|p)/i},timezones:[{name:"UTC",offset:"-000"},{name:"GMT",offset:"-000"},{name:"EST",offset:"-0500"},{name:"EDT",offset:"-0400"},{name:"CST",offset:"-0600"},{name:"CDT",offset:"-0500"},{name:"MST",offset:"-0700"},{name:"MDT",offset:"-0600"},{name:"PST",offset:"-0800"},{name:"PDT",offset:"-0700"}]},function(){var t=Date,e=t.prototype,n=t.CultureInfo,i=function(t,e){return e||(e=2),("000"+t).slice(-1*e)
};e.clearTime=function(){return this.setHours(0),this.setMinutes(0),this.setSeconds(0),this.setMilliseconds(0),this
},e.setTimeToNow=function(){var t=new Date;return this.setHours(t.getHours()),this.setMinutes(t.getMinutes()),this.setSeconds(t.getSeconds()),this.setMilliseconds(t.getMilliseconds()),this
},t.today=function(){return(new Date).clearTime()},t.compare=function(t,e){if(isNaN(t)||isNaN(e))throw new Error(t+" - "+e);
if(t instanceof Date&&e instanceof Date)return e>t?-1:t>e?1:0;throw new TypeError(t+" - "+e)
},t.equals=function(t,e){return 0===t.compareTo(e)},t.getDayNumberFromName=function(t){for(var e=n.dayNames,i=n.abbreviatedDayNames,r=n.shortestDayNames,s=t.toLowerCase(),a=0;a<e.length;a++)if(e[a].toLowerCase()==s||i[a].toLowerCase()==s||r[a].toLowerCase()==s)return a;
return-1},t.getMonthNumberFromName=function(t){for(var e=n.monthNames,i=n.abbreviatedMonthNames,r=t.toLowerCase(),s=0;s<e.length;s++)if(e[s].toLowerCase()==r||i[s].toLowerCase()==r)return s;
return-1},t.isLeapYear=function(t){return t%4===0&&t%100!==0||t%400===0},t.getDaysInMonth=function(e,n){return[31,t.isLeapYear(e)?29:28,31,30,31,30,31,31,30,31,30,31][n]
},t.getTimezoneAbbreviation=function(t){for(var e=n.timezones,i=0;i<e.length;i++)if(e[i].offset===t)return e[i].name;
return null},t.getTimezoneOffset=function(t){for(var e=n.timezones,i=0;i<e.length;i++)if(e[i].name===t.toUpperCase())return e[i].offset;
return null},e.clone=function(){return new Date(this.getTime())},e.compareTo=function(t){return Date.compare(this,t)
},e.equals=function(t){return Date.equals(this,t||new Date)},e.between=function(t,e){return this.getTime()>=t.getTime()&&this.getTime()<=e.getTime()
},e.isAfter=function(t){return 1===this.compareTo(t||new Date)},e.isBefore=function(t){return-1===this.compareTo(t||new Date)
},e.isToday=function(){return this.isSameDay(new Date)},e.isSameDay=function(t){return this.clone().clearTime().equals(t.clone().clearTime())
},e.addMilliseconds=function(t){return this.setMilliseconds(this.getMilliseconds()+t),this
},e.addSeconds=function(t){return this.addMilliseconds(1e3*t)},e.addMinutes=function(t){return this.addMilliseconds(6e4*t)
},e.addHours=function(t){return this.addMilliseconds(36e5*t)},e.addDays=function(t){return this.setDate(this.getDate()+t),this
},e.addWeeks=function(t){return this.addDays(7*t)},e.addMonths=function(e){var n=this.getDate();
return this.setDate(1),this.setMonth(this.getMonth()+e),this.setDate(Math.min(n,t.getDaysInMonth(this.getFullYear(),this.getMonth()))),this
},e.addYears=function(t){return this.addMonths(12*t)},e.add=function(t){if("number"==typeof t)return this._orient=t,this;
var e=t;return e.milliseconds&&this.addMilliseconds(e.milliseconds),e.seconds&&this.addSeconds(e.seconds),e.minutes&&this.addMinutes(e.minutes),e.hours&&this.addHours(e.hours),e.weeks&&this.addWeeks(e.weeks),e.months&&this.addMonths(e.months),e.years&&this.addYears(e.years),e.days&&this.addDays(e.days),this
};var r,s,a;e.getWeek=function(){var t,e,n,i,o,u,h,c,d,l;return r=r?r:this.getFullYear(),s=s?s:this.getMonth()+1,a=a?a:this.getDate(),2>=s?(t=r-1,e=(t/4|0)-(t/100|0)+(t/400|0),n=((t-1)/4|0)-((t-1)/100|0)+((t-1)/400|0),d=e-n,o=0,u=a-1+31*(s-1)):(t=r,e=(t/4|0)-(t/100|0)+(t/400|0),n=((t-1)/4|0)-((t-1)/100|0)+((t-1)/400|0),d=e-n,o=d+1,u=a+(153*(s-3)+2)/5+58+d),h=(t+e)%7,i=(u+h-o)%7,c=u+3-i|0,l=0>c?53-((h-d)/5|0):c>364+d?1:(c/7|0)+1,r=s=a=null,l
},e.getISOWeek=function(){return r=this.getUTCFullYear(),s=this.getUTCMonth()+1,a=this.getUTCDate(),i(this.getWeek())
},e.setWeek=function(t){return this.moveToDayOfWeek(1).addWeeks(t-this.getWeek())
},t._validate=function(t,e,n,i){if("undefined"==typeof t)return!1;if("number"!=typeof t)throw new TypeError(t+" is not a Number.");
if(e>t||t>n)throw new RangeError(t+" is not a valid value for "+i+".");return!0},t.validateMillisecond=function(e){return t._validate(e,0,999,"millisecond")
},t.validateSecond=function(e){return t._validate(e,0,59,"second")},t.validateMinute=function(e){return t._validate(e,0,59,"minute")
},t.validateHour=function(e){return t._validate(e,0,23,"hour")},t.validateDay=function(e,n,i){return t._validate(e,1,t.getDaysInMonth(n,i),"day")
},t.validateMonth=function(e){return t._validate(e,0,11,"month")},t.validateYear=function(e){return t._validate(e,0,9999,"year")
},e.set=function(e){return t.validateMillisecond(e.millisecond)&&this.addMilliseconds(e.millisecond-this.getMilliseconds()),t.validateSecond(e.second)&&this.addSeconds(e.second-this.getSeconds()),t.validateMinute(e.minute)&&this.addMinutes(e.minute-this.getMinutes()),t.validateHour(e.hour)&&this.addHours(e.hour-this.getHours()),t.validateMonth(e.month)&&this.addMonths(e.month-this.getMonth()),t.validateYear(e.year)&&this.addYears(e.year-this.getFullYear()),t.validateDay(e.day,this.getFullYear(),this.getMonth())&&this.addDays(e.day-this.getDate()),e.timezone&&this.setTimezone(e.timezone),e.timezoneOffset&&this.setTimezoneOffset(e.timezoneOffset),e.week&&t._validate(e.week,0,53,"week")&&this.setWeek(e.week),this
},e.moveToFirstDayOfMonth=function(){return this.set({day:1})},e.moveToLastDayOfMonth=function(){return this.set({day:t.getDaysInMonth(this.getFullYear(),this.getMonth())})
},e.moveToNthOccurrence=function(t,e){var n=0;if(e>0)n=e-1;else if(-1===e)return this.moveToLastDayOfMonth(),this.getDay()!==t&&this.moveToDayOfWeek(t,-1),this;
return this.moveToFirstDayOfMonth().addDays(-1).moveToDayOfWeek(t,1).addWeeks(n)},e.moveToDayOfWeek=function(t,e){var n=(t-this.getDay()+7*(e||1))%7;
return this.addDays(0===n?n+=7*(e||1):n)},e.moveToMonth=function(t,e){var n=(t-this.getMonth()+12*(e||1))%12;
return this.addMonths(0===n?n+=12*(e||1):n)},e.getOrdinalNumber=function(){return Math.ceil((this.clone().clearTime()-new Date(this.getFullYear(),0,1))/864e5)+1
},e.getTimezone=function(){return t.getTimezoneAbbreviation(this.getUTCOffset())},e.setTimezoneOffset=function(t){var e=this.getTimezoneOffset(),n=-6*Number(t)/10;
return this.addMinutes(n-e)},e.setTimezone=function(e){return this.setTimezoneOffset(t.getTimezoneOffset(e))
},e.hasDaylightSavingTime=function(){return Date.today().set({month:0,day:1}).getTimezoneOffset()!==Date.today().set({month:6,day:1}).getTimezoneOffset()
},e.isDaylightSavingTime=function(){return this.hasDaylightSavingTime()&&(new Date).getTimezoneOffset()===Date.today().set({month:6,day:1}).getTimezoneOffset()
},e.getUTCOffset=function(){var t,e=-10*this.getTimezoneOffset()/6;return 0>e?(t=(e-1e4).toString(),t.charAt(0)+t.substr(2)):(t=(e+1e4).toString(),"+"+t.substr(1))
},e.getElapsed=function(t){return(t||new Date)-this},e.toISOString||(e.toISOString=function(){function t(t){return 10>t?"0"+t:t
}return'"'+this.getUTCFullYear()+"-"+t(this.getUTCMonth()+1)+"-"+t(this.getUTCDate())+"T"+t(this.getUTCHours())+":"+t(this.getUTCMinutes())+":"+t(this.getUTCSeconds())+'Z"'
}),e._toString=e.toString,e.toString=function(t){var e=this;if(t&&1==t.length){var r=n.formatPatterns;
switch(e.t=e.toString,t){case"d":return e.t(r.shortDate);case"D":return e.t(r.longDate);
case"F":return e.t(r.fullDateTime);case"m":return e.t(r.monthDay);case"r":return e.t(r.rfc1123);
case"s":return e.t(r.sortableDateTime);case"t":return e.t(r.shortTime);case"T":return e.t(r.longTime);
case"u":return e.t(r.universalSortableDateTime);case"y":return e.t(r.yearMonth)}}var s=function(t){switch(1*t){case 1:case 21:case 31:return"st";
case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th"}};return t?t.replace(/(\\)?(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|S)/g,function(t){if("\\"===t.charAt(0))return t.replace("\\","");
switch(e.h=e.getHours,t){case"hh":return i(e.h()<13?0===e.h()?12:e.h():e.h()-12);
case"h":return e.h()<13?0===e.h()?12:e.h():e.h()-12;case"HH":return i(e.h());case"H":return e.h();
case"mm":return i(e.getMinutes());case"m":return e.getMinutes();case"ss":return i(e.getSeconds());
case"s":return e.getSeconds();case"yyyy":return i(e.getFullYear(),4);case"yy":return i(e.getFullYear());
case"dddd":return n.dayNames[e.getDay()];case"ddd":return n.abbreviatedDayNames[e.getDay()];
case"dd":return i(e.getDate());case"d":return e.getDate();case"MMMM":return n.monthNames[e.getMonth()];
case"MMM":return n.abbreviatedMonthNames[e.getMonth()];case"MM":return i(e.getMonth()+1);
case"M":return e.getMonth()+1;case"t":return e.h()<12?n.amDesignator.substring(0,1):n.pmDesignator.substring(0,1);
case"tt":return e.h()<12?n.amDesignator:n.pmDesignator;case"S":return s(e.getDate());
default:return t}}):this._toString()}}(),function(){var t=Date,e=t.prototype,n=t.CultureInfo,i=Number.prototype;
e._orient=1,e._nth=null,e._is=!1,e._same=!1,e._isSecond=!1,i._dateElement="day",e.next=function(){return this._orient=1,this
},t.next=function(){return t.today().next()},e.last=e.prev=e.previous=function(){return this._orient=-1,this
},t.last=t.prev=t.previous=function(){return t.today().last()},e.is=function(){return this._is=!0,this
},e.same=function(){return this._same=!0,this._isSecond=!1,this},e.today=function(){return this.same().day()
},e.weekday=function(){return this._is?(this._is=!1,!this.is().sat()&&!this.is().sun()):!1
},e.at=function(e){return"string"==typeof e?t.parse(this.toString("d")+" "+e):this.set(e)
},i.fromNow=i.after=function(t){var e={};return e[this._dateElement]=this,(t?t.clone():new Date).add(e)
},i.ago=i.before=function(t){var e={};return e[this._dateElement]=-1*this,(t?t.clone():new Date).add(e)
};var r,s="sunday monday tuesday wednesday thursday friday saturday".split(/\s/),a="january february march april may june july august september october november december".split(/\s/),o="Millisecond Second Minute Hour Day Week Month Year".split(/\s/),u="Milliseconds Seconds Minutes Hours Date Week Month FullYear".split(/\s/),h="final first second third fourth fifth".split(/\s/);
e.toObject=function(){for(var t={},e=0;e<o.length;e++)t[o[e].toLowerCase()]=this["get"+u[e]]();
return t},t.fromObject=function(t){return t.week=null,Date.today().set(t)};for(var c=function(e){return function(){if(this._is)return this._is=!1,this.getDay()==e;
if(null!==this._nth){this._isSecond&&this.addSeconds(-1*this._orient),this._isSecond=!1;
var n=this._nth;this._nth=null;var i=this.clone().moveToLastDayOfMonth();if(this.moveToNthOccurrence(e,n),this>i)throw new RangeError(t.getDayName(e)+" does not occur "+n+" times in the month of "+t.getMonthName(i.getMonth())+" "+i.getFullYear()+".");
return this}return this.moveToDayOfWeek(e,this._orient)}},d=function(e){return function(){var i=t.today(),r=e-i.getDay();
return 0===e&&1===n.firstDayOfWeek&&0!==i.getDay()&&(r+=7),i.addDays(r)}},l=0;l<s.length;l++)t[s[l].toUpperCase()]=t[s[l].toUpperCase().substring(0,3)]=l,t[s[l]]=t[s[l].substring(0,3)]=d(l),e[s[l]]=e[s[l].substring(0,3)]=c(l);
for(var f=function(t){return function(){return this._is?(this._is=!1,this.getMonth()===t):this.moveToMonth(t,this._orient)
}},y=function(e){return function(){return t.today().set({month:e,day:1})}},m=0;m<a.length;m++)t[a[m].toUpperCase()]=t[a[m].toUpperCase().substring(0,3)]=m,t[a[m]]=t[a[m].substring(0,3)]=y(m),e[a[m]]=e[a[m].substring(0,3)]=f(m);
for(var g=function(t){return function(){if(this._isSecond)return this._isSecond=!1,this;
if(this._same){this._same=this._is=!1;for(var e=this.toObject(),n=(arguments[0]||new Date).toObject(),i="",r=t.toLowerCase(),s=o.length-1;s>-1;s--){if(i=o[s].toLowerCase(),e[i]!=n[i])return!1;
if(r==i)break}return!0}return"s"!=t.substring(t.length-1)&&(t+="s"),this["add"+t](this._orient)
}},p=function(t){return function(){return this._dateElement=t,this}},D=0;D<o.length;D++)r=o[D].toLowerCase(),e[r]=e[r+"s"]=g(o[D]),i[r]=i[r+"s"]=p(r);
e._ss=g("Second");for(var v=function(t){return function(e){return this._same?this._ss(arguments[0]):e||0===e?this.moveToNthOccurrence(e,t):(this._nth=t,2!==t||void 0!==e&&null!==e?this:(this._isSecond=!0,this.addSeconds(this._orient)))
}},M=0;M<h.length;M++)e[h[M]]=0===M?v(-1):v(M)}(),function(){Date.Parsing={Exception:function(t){this.message="Parse error at '"+t.substring(0,10)+" ...'"
}};for(var t=Date.Parsing,e=t.Operators={rtoken:function(e){return function(n){var i=n.match(e);
if(i)return[i[0],n.substring(i[0].length)];throw new t.Exception(n)}},token:function(){return function(t){return e.rtoken(new RegExp("^s*"+t+"s*"))(t)
}},stoken:function(t){return e.rtoken(new RegExp("^"+t))},until:function(t){return function(e){for(var n=[],i=null;e.length;){try{i=t.call(this,e)
}catch(r){n.push(i[0]),e=i[1];continue}break}return[n,e]}},many:function(t){return function(e){for(var n=[],i=null;e.length;){try{i=t.call(this,e)
}catch(r){return[n,e]}n.push(i[0]),e=i[1]}return[n,e]}},optional:function(t){return function(e){var n=null;
try{n=t.call(this,e)}catch(i){return[null,e]}return[n[0],n[1]]}},not:function(e){return function(n){try{e.call(this,n)
}catch(i){return[null,n]}throw new t.Exception(n)}},ignore:function(t){return t?function(e){var n=null;
return n=t.call(this,e),[null,n[1]]}:null},product:function(){for(var t=arguments[0],n=Array.prototype.slice.call(arguments,1),i=[],r=0;r<t.length;r++)i.push(e.each(t[r],n));
return i},cache:function(e){var n={},i=null;return function(r){try{i=n[r]=n[r]||e.call(this,r)
}catch(s){i=n[r]=s}if(i instanceof t.Exception)throw i;return i}},any:function(){var e=arguments;
return function(n){for(var i=null,r=0;r<e.length;r++)if(null!=e[r]){try{i=e[r].call(this,n)
}catch(s){i=null}if(i)return i}throw new t.Exception(n)}},each:function(){var e=arguments;
return function(n){for(var i=[],r=null,s=0;s<e.length;s++)if(null!=e[s]){try{r=e[s].call(this,n)
}catch(a){throw new t.Exception(n)}i.push(r[0]),n=r[1]}return[i,n]}},all:function(){var t=arguments,e=e;
return e.each(e.optional(t))},sequence:function(n,i,r){return i=i||e.rtoken(/^\s*/),r=r||null,1==n.length?n[0]:function(e){for(var s=null,a=null,o=[],u=0;u<n.length;u++){try{s=n[u].call(this,e)
}catch(h){break}o.push(s[0]);try{a=i.call(this,s[1])}catch(c){a=null;break}e=a[1]
}if(!s)throw new t.Exception(e);if(a)throw new t.Exception(a[1]);if(r)try{s=r.call(this,s[1])
}catch(d){throw new t.Exception(s[1])}return[o,s?s[1]:e]}},between:function(t,n,i){i=i||t;
var s=e.each(e.ignore(t),n,e.ignore(i));return function(t){var e=s.call(this,t);return[[e[0][0],r[0][2]],e[1]]
}},list:function(t,n,i){return n=n||e.rtoken(/^\s*/),i=i||null,t instanceof Array?e.each(e.product(t.slice(0,-1),e.ignore(n)),t.slice(-1),e.ignore(i)):e.each(e.many(e.each(t,e.ignore(n))),px,e.ignore(i))
},set:function(n,i,r){return i=i||e.rtoken(/^\s*/),r=r||null,function(s){for(var a=null,o=null,u=null,h=null,c=[[],s],d=!1,l=0;l<n.length;l++){u=null,o=null,a=null,d=1==n.length;
try{a=n[l].call(this,s)}catch(f){continue}if(h=[[a[0]],a[1]],a[1].length>0&&!d)try{u=i.call(this,a[1])
}catch(y){d=!0}else d=!0;if(d||0!==u[1].length||(d=!0),!d){for(var m=[],g=0;g<n.length;g++)l!=g&&m.push(n[g]);
o=e.set(m,i).call(this,u[1]),o[0].length>0&&(h[0]=h[0].concat(o[0]),h[1]=o[1])}if(h[1].length<c[1].length&&(c=h),0===c[1].length)break
}if(0===c[0].length)return c;if(r){try{u=r.call(this,c[1])}catch(p){throw new t.Exception(c[1])
}c[1]=u[1]}return c}},forward:function(t,e){return function(n){return t[e].call(this,n)
}},replace:function(t,e){return function(n){var i=t.call(this,n);return[e,i[1]]}},process:function(t,e){return function(n){var i=t.call(this,n);
return[e.call(this,i[0]),i[1]]}},min:function(e,n){return function(i){var r=n.call(this,i);
if(r[0].length<e)throw new t.Exception(i);return r}}},n=function(t){return function(){var e=null,n=[];
if(arguments.length>1?e=Array.prototype.slice.call(arguments):arguments[0]instanceof Array&&(e=arguments[0]),!e)return t.apply(null,arguments);
for(var i=0,r=e.shift();i<r.length;i++)return e.unshift(r[i]),n.push(t.apply(null,e)),e.shift(),n
}},i="optional not ignore cache".split(/\s/),s=0;s<i.length;s++)e[i[s]]=n(e[i[s]]);
for(var a=function(t){return function(){return arguments[0]instanceof Array?t.apply(null,arguments[0]):t.apply(null,arguments)
}},o="each any all".split(/\s/),u=0;u<o.length;u++)e[o[u]]=a(e[o[u]])}(),function(){var t=Date,e=(t.prototype,t.CultureInfo),n=function(t){for(var e=[],i=0;i<t.length;i++)t[i]instanceof Array?e=e.concat(n(t[i])):t[i]&&e.push(t[i]);
return e};t.Grammar={},t.Translator={hour:function(t){return function(){this.hour=Number(t)
}},minute:function(t){return function(){this.minute=Number(t)}},second:function(t){return function(){this.second=Number(t)
}},meridian:function(t){return function(){this.meridian=t.slice(0,1).toLowerCase()
}},timezone:function(t){return function(){var e=t.replace(/[^\d\+\-]/g,"");e.length?this.timezoneOffset=Number(e):this.timezone=t.toLowerCase()
}},day:function(t){var e=t[0];return function(){this.day=Number(e.match(/\d+/)[0])
}},month:function(t){return function(){this.month=3==t.length?"jan feb mar apr may jun jul aug sep oct nov dec".indexOf(t)/4:Number(t)-1
}},year:function(t){return function(){var n=Number(t);this.year=t.length>2?n:n+(n+2e3<e.twoDigitYearMax?2e3:1900)
}},rday:function(t){return function(){switch(t){case"yesterday":this.days=-1;break;
case"tomorrow":this.days=1;break;case"today":this.days=0;break;case"now":this.days=0,this.now=!0
}}},finishExact:function(e){e=e instanceof Array?e:[e];for(var n=0;n<e.length;n++)e[n]&&e[n].call(this);
var i=new Date;if(!this.hour&&!this.minute||this.month||this.year||this.day||(this.day=i.getDate()),this.year||(this.year=i.getFullYear()),this.month||0===this.month||(this.month=i.getMonth()),this.day||(this.day=1),this.hour||(this.hour=0),this.minute||(this.minute=0),this.second||(this.second=0),this.meridian&&this.hour&&("p"==this.meridian&&this.hour<12?this.hour=this.hour+12:"a"==this.meridian&&12==this.hour&&(this.hour=0)),this.day>t.getDaysInMonth(this.year,this.month))throw new RangeError(this.day+" is not a valid value for days.");
var r=new Date(this.year,this.month,this.day,this.hour,this.minute,this.second);return this.timezone?r.set({timezone:this.timezone}):this.timezoneOffset&&r.set({timezoneOffset:this.timezoneOffset}),r
},finish:function(e){if(e=e instanceof Array?n(e):[e],0===e.length)return null;for(var i=0;i<e.length;i++)"function"==typeof e[i]&&e[i].call(this);
var r=t.today();if(this.now&&!this.unit&&!this.operator)return new Date;this.now&&(r=new Date);
var s,a,o,u=!!(this.days&&null!==this.days||this.orient||this.operator);if(o="past"==this.orient||"subtract"==this.operator?-1:1,this.now||-1=="hour minute second".indexOf(this.unit)||r.setTimeToNow(),(this.month||0===this.month)&&-1!="year day hour minute second".indexOf(this.unit)&&(this.value=this.month+1,this.month=null,u=!0),!u&&this.weekday&&!this.day&&!this.days){var h=Date[this.weekday]();
this.day=h.getDate(),this.month||(this.month=h.getMonth()),this.year=h.getFullYear()
}if(u&&this.weekday&&"month"!=this.unit&&(this.unit="day",s=t.getDayNumberFromName(this.weekday)-r.getDay(),a=7,this.days=s?(s+o*a)%a:o*a),this.month&&"day"==this.unit&&this.operator&&(this.value=this.month+1,this.month=null),null!=this.value&&null!=this.month&&null!=this.year&&(this.day=1*this.value),this.month&&!this.day&&this.value&&(r.set({day:1*this.value}),u||(this.day=1*this.value)),this.month||!this.value||"month"!=this.unit||this.now||(this.month=this.value,u=!0),u&&(this.month||0===this.month)&&"year"!=this.unit&&(this.unit="month",s=this.month-r.getMonth(),a=12,this.months=s?(s+o*a)%a:o*a,this.month=null),this.unit||(this.unit="day"),!this.value&&this.operator&&null!==this.operator&&this[this.unit+"s"]&&null!==this[this.unit+"s"]?this[this.unit+"s"]=this[this.unit+"s"]+("add"==this.operator?1:-1)+(this.value||0)*o:(null==this[this.unit+"s"]||null!=this.operator)&&(this.value||(this.value=1),this[this.unit+"s"]=this.value*o),this.meridian&&this.hour&&("p"==this.meridian&&this.hour<12?this.hour=this.hour+12:"a"==this.meridian&&12==this.hour&&(this.hour=0)),this.weekday&&!this.day&&!this.days){var h=Date[this.weekday]();
this.day=h.getDate(),h.getMonth()!==r.getMonth()&&(this.month=h.getMonth())}return!this.month&&0!==this.month||this.day||(this.day=1),this.orient||this.operator||"week"!=this.unit||!this.value||this.day||this.month?(u&&this.timezone&&this.day&&this.days&&(this.day=this.days),u?r.add(this):r.set(this)):Date.today().setWeek(this.value)
}};var i,r=t.Parsing.Operators,s=t.Grammar,a=t.Translator;s.datePartDelimiter=r.rtoken(/^([\s\-\.\,\/\x27]+)/),s.timePartDelimiter=r.stoken(":"),s.whiteSpace=r.rtoken(/^\s*/),s.generalDelimiter=r.rtoken(/^(([\s\,]|at|@|on)+)/);
var o={};s.ctoken=function(t){var n=o[t];if(!n){for(var i=e.regexPatterns,s=t.split(/\s+/),a=[],u=0;u<s.length;u++)a.push(r.replace(r.rtoken(i[s[u]]),s[u]));
n=o[t]=r.any.apply(null,a)}return n},s.ctoken2=function(t){return r.rtoken(e.regexPatterns[t])
},s.h=r.cache(r.process(r.rtoken(/^(0[0-9]|1[0-2]|[1-9])/),a.hour)),s.hh=r.cache(r.process(r.rtoken(/^(0[0-9]|1[0-2])/),a.hour)),s.H=r.cache(r.process(r.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/),a.hour)),s.HH=r.cache(r.process(r.rtoken(/^([0-1][0-9]|2[0-3])/),a.hour)),s.m=r.cache(r.process(r.rtoken(/^([0-5][0-9]|[0-9])/),a.minute)),s.mm=r.cache(r.process(r.rtoken(/^[0-5][0-9]/),a.minute)),s.s=r.cache(r.process(r.rtoken(/^([0-5][0-9]|[0-9])/),a.second)),s.ss=r.cache(r.process(r.rtoken(/^[0-5][0-9]/),a.second)),s.hms=r.cache(r.sequence([s.H,s.m,s.s],s.timePartDelimiter)),s.t=r.cache(r.process(s.ctoken2("shortMeridian"),a.meridian)),s.tt=r.cache(r.process(s.ctoken2("longMeridian"),a.meridian)),s.z=r.cache(r.process(r.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/),a.timezone)),s.zz=r.cache(r.process(r.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/),a.timezone)),s.zzz=r.cache(r.process(s.ctoken2("timezone"),a.timezone)),s.timeSuffix=r.each(r.ignore(s.whiteSpace),r.set([s.tt,s.zzz])),s.time=r.each(r.optional(r.ignore(r.stoken("T"))),s.hms,s.timeSuffix),s.d=r.cache(r.process(r.each(r.rtoken(/^([0-2]\d|3[0-1]|\d)/),r.optional(s.ctoken2("ordinalSuffix"))),a.day)),s.dd=r.cache(r.process(r.each(r.rtoken(/^([0-2]\d|3[0-1])/),r.optional(s.ctoken2("ordinalSuffix"))),a.day)),s.ddd=s.dddd=r.cache(r.process(s.ctoken("sun mon tue wed thu fri sat"),function(t){return function(){this.weekday=t
}})),s.M=r.cache(r.process(r.rtoken(/^(1[0-2]|0\d|\d)/),a.month)),s.MM=r.cache(r.process(r.rtoken(/^(1[0-2]|0\d)/),a.month)),s.MMM=s.MMMM=r.cache(r.process(s.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"),a.month)),s.y=r.cache(r.process(r.rtoken(/^(\d\d?)/),a.year)),s.yy=r.cache(r.process(r.rtoken(/^(\d\d)/),a.year)),s.yyy=r.cache(r.process(r.rtoken(/^(\d\d?\d?\d?)/),a.year)),s.yyyy=r.cache(r.process(r.rtoken(/^(\d\d\d\d)/),a.year)),i=function(){return r.each(r.any.apply(null,arguments),r.not(s.ctoken2("timeContext")))
},s.day=i(s.d,s.dd),s.month=i(s.M,s.MMM),s.year=i(s.yyyy,s.yy),s.orientation=r.process(s.ctoken("past future"),function(t){return function(){this.orient=t
}}),s.operator=r.process(s.ctoken("add subtract"),function(t){return function(){this.operator=t
}}),s.rday=r.process(s.ctoken("yesterday tomorrow today now"),a.rday),s.unit=r.process(s.ctoken("second minute hour day week month year"),function(t){return function(){this.unit=t
}}),s.value=r.process(r.rtoken(/^\d\d?(st|nd|rd|th)?/),function(t){return function(){this.value=t.replace(/\D/g,"")
}}),s.expression=r.set([s.rday,s.operator,s.value,s.unit,s.orientation,s.ddd,s.MMM]),i=function(){return r.set(arguments,s.datePartDelimiter)
},s.mdy=i(s.ddd,s.month,s.day,s.year),s.ymd=i(s.ddd,s.year,s.month,s.day),s.dmy=i(s.ddd,s.day,s.month,s.year),s.date=function(t){return(s[e.dateElementOrder]||s.mdy).call(this,t)
},s.format=r.process(r.many(r.any(r.process(r.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/),function(e){if(s[e])return s[e];
throw t.Parsing.Exception(e)}),r.process(r.rtoken(/^[^dMyhHmstz]+/),function(t){return r.ignore(r.stoken(t))
}))),function(t){return r.process(r.each.apply(null,t),a.finishExact)});var u={},h=function(t){return u[t]=u[t]||s.format(t)[0]
};s.formats=function(t){if(t instanceof Array){for(var e=[],n=0;n<t.length;n++)e.push(h(t[n]));
return r.any.apply(null,e)}return h(t)},s._formats=s.formats(['"yyyy-MM-ddTHH:mm:ssZ"',"yyyy-MM-ddTHH:mm:ssZ","yyyy-MM-ddTHH:mm:ssz","yyyy-MM-ddTHH:mm:ss","yyyy-MM-ddTHH:mmZ","yyyy-MM-ddTHH:mmz","yyyy-MM-ddTHH:mm","ddd, MMM dd, yyyy H:mm:ss tt","ddd MMM d yyyy HH:mm:ss zzz","MMddyyyy","ddMMyyyy","Mddyyyy","ddMyyyy","Mdyyyy","dMyyyy","yyyy","Mdyy","dMyy","d"]),s._start=r.process(r.set([s.date,s.time,s.expression],s.generalDelimiter,s.whiteSpace),a.finish),s.start=function(t){try{var e=s._formats.call({},t);
if(0===e[1].length)return e}catch(n){}return s._start.call({},t)},t._parse=t.parse,t.parse=function(e){var n=null;
if(!e)return null;if(e instanceof Date)return e;try{n=t.Grammar.start.call({},e.replace(/^\s*(\S*(\s+\S+)*)\s*$/,"$1"))
}catch(i){return null}return 0===n[1].length?n[0]:null},t.getParseFunction=function(e){var n=t.Grammar.formats(e);
return function(t){var e=null;try{e=n.call({},t)}catch(i){return null}return 0===e[1].length?e[0]:null
}},t.parseExact=function(e,n){return t.getParseFunction(n)(e)}}();var e=function(t,n,i,r,s){for(var a="days hours minutes seconds milliseconds".split(/\s+/),o=function(t){return function(){return this[t]
}},u=function(t){return function(e){return this[t]=e,this}},h=0;h<a.length;h++){var c=a[h],d=c.slice(0,1).toUpperCase()+c.slice(1);
e.prototype[c]=0,e.prototype["get"+d]=o(c),e.prototype["set"+d]=u(c)}if(4==arguments.length)this.setDays(t),this.setHours(n),this.setMinutes(i),this.setSeconds(r);
else if(5==arguments.length)this.setDays(t),this.setHours(n),this.setMinutes(i),this.setSeconds(r),this.setMilliseconds(s);
else if(1==arguments.length&&"number"==typeof t){var l=0>t?-1:1;this.setMilliseconds(Math.abs(t)),this.setDays(Math.floor(this.getMilliseconds()/864e5)*l),this.setMilliseconds(this.getMilliseconds()%864e5),this.setHours(Math.floor(this.getMilliseconds()/36e5)*l),this.setMilliseconds(this.getMilliseconds()%36e5),this.setMinutes(Math.floor(this.getMilliseconds()/6e4)*l),this.setMilliseconds(this.getMilliseconds()%6e4),this.setSeconds(Math.floor(this.getMilliseconds()/1e3)*l),this.setMilliseconds(this.getMilliseconds()%1e3),this.setMilliseconds(this.getMilliseconds()*l)
}return this.getTotalMilliseconds=function(){return 864e5*this.getDays()+36e5*this.getHours()+6e4*this.getMinutes()+1e3*this.getSeconds()
},this.compareTo=function(t){var e,n=new Date(1970,1,1,this.getHours(),this.getMinutes(),this.getSeconds());
return e=null===t?new Date(1970,1,1,0,0,0):new Date(1970,1,1,t.getHours(),t.getMinutes(),t.getSeconds()),e>n?-1:n>e?1:0
},this.equals=function(t){return 0===this.compareTo(t)},this.add=function(t){return null===t?this:this.addSeconds(t.getTotalMilliseconds()/1e3)
},this.subtract=function(t){return null===t?this:this.addSeconds(-t.getTotalMilliseconds()/1e3)
},this.addDays=function(t){return new e(this.getTotalMilliseconds()+864e5*t)},this.addHours=function(t){return new e(this.getTotalMilliseconds()+36e5*t)
},this.addMinutes=function(t){return new e(this.getTotalMilliseconds()+6e4*t)},this.addSeconds=function(t){return new e(this.getTotalMilliseconds()+1e3*t)
},this.addMilliseconds=function(t){return new e(this.getTotalMilliseconds()+t)},this.get12HourHour=function(){return this.getHours()>12?this.getHours()-12:0===this.getHours()?12:this.getHours()
},this.getDesignator=function(){return this.getHours()<12?Date.CultureInfo.amDesignator:Date.CultureInfo.pmDesignator
},this.toString=function(t){this._toString=function(){return null!==this.getDays()&&this.getDays()>0?this.getDays()+"."+this.getHours()+":"+this.p(this.getMinutes())+":"+this.p(this.getSeconds()):this.getHours()+":"+this.p(this.getMinutes())+":"+this.p(this.getSeconds())
},this.p=function(t){return t.toString().length<2?"0"+t:t};var e=this;return t?t.replace(/dd?|HH?|hh?|mm?|ss?|tt?/g,function(t){switch(t){case"d":return e.getDays();
case"dd":return e.p(e.getDays());case"H":return e.getHours();case"HH":return e.p(e.getHours());
case"h":return e.get12HourHour();case"hh":return e.p(e.get12HourHour());case"m":return e.getMinutes();
case"mm":return e.p(e.getMinutes());case"s":return e.getSeconds();case"ss":return e.p(e.getSeconds());
case"t":return(e.getHours()<12?Date.CultureInfo.amDesignator:Date.CultureInfo.pmDesignator).substring(0,1);
case"tt":return e.getHours()<12?Date.CultureInfo.amDesignator:Date.CultureInfo.pmDesignator
}}):this._toString()},this};Date.prototype.getTimeOfDay=function(){return new e(0,this.getHours(),this.getMinutes(),this.getSeconds(),this.getMilliseconds())
}});