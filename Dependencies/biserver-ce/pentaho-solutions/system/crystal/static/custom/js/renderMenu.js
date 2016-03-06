function renderMenu () {

  // Urls and paths.
  var basePath = "/pentaho/plugin";
  var crystalPath = basePath + "/crystal";
  var crystalApiPath = crystalPath + "/api";

  // Current page path.
  var pagePaths = "/main|/activethreadsovertime|/hitspersecond|/iodashboard|/jmxconcurrentusersandtickets|/jmxcpuusage|/jmxdashboard|/jmxgarbagecollection|/jmxheapmemory|/jmxintable|/jmxthreads|/responsetimesovertime|/resultsintable|/sampledashboard|/summaryreport|/transactionspersecond";
  var pagePath = location.pathname;
  pagePath = pagePath.substring(crystalApiPath.length);
  pagePath = pagePath.toLowerCase();

  document.write("<ul class=\"nav nav-tabs\">");

  // Analytics.
  document.write(" <li class=\"" + (pagePath.match(pagePaths)  ? "active" : "") + " dropdown\">");
  document.write("  <a " + (!pagePath.match(pagePaths)  ? "href=\"" +  crystalApiPath +  "/main\"" : "") + " class=\"dropdown-toggle\" data-toggle=\"dropdown\"><span class=\"glyphicon glyphicon-stats\" aria-hidden=\"true\"></span> Analytics <span class=\"caret\"></span></a>");
  document.write("  <ul class=\"dropdown-menu\">");

  // Analytics - Main dashboard.
  document.write("   <li " + (pagePath == "/main"  ? "class=\"active\"" : "") + "><a " + (pagePath != "/main"  ? "href=\"" +  crystalApiPath +  "/main\"" : "") + "><span class=\"glyphicon glyphicon-th-large\" aria-hidden=\"true\"></span> Main dashboard</a></li>");

  // Analytics - Input/output.
  document.write("   <li role=\"separator\" class=\"divider\"></li>");
  document.write("   <li class=\"dropdown-header\">Input/output</li>");
  document.write("   <li " + (pagePath == "/iodashboard"  ? "class=\"active\"" : "") + "><a " + (pagePath != "/iodashboard"  ? "href=\"" + crystalApiPath + "/ioDashboard\"" : "") + "><span class=\"glyphicon glyphicon-th-large\" aria-hidden=\"true\"></span> I/O dashboard</a></li>");

  // Analytics - JMX Samples.
  document.write("   <li role=\"separator\" class=\"divider\"></li>");
  document.write("   <li class=\"dropdown-header\">JMX Samples</li>");
  document.write("   <li " + (pagePath == "/jmxdashboard"  ? "class=\"active\"" : "") + "><a " + (pagePath != "/jmxdashboard"  ? "href=\"" + crystalApiPath + "/jmxDashboard\"" : "") + "><span class=\"glyphicon glyphicon-th-large\" aria-hidden=\"true\"></span> JMX dashboard</a></li>");
  document.write("   <li " + (pagePath == "/jmxcpuusage"  ? "class=\"active\"" : "") + "><a " + (pagePath != "/jmxcpuusage"  ? "href=\"" + crystalApiPath + "/jmxCpuUsage\"" : "") + "><span class=\"glyphicon glyphicon-stats\" aria-hidden=\"true\"></span> CPU usage</a></li>");
  document.write("   <li " + (pagePath == "/jmxconcurrentusersandtickets"  ? "class=\"active\"" : "") + "><a " + (pagePath != "/jmxconcurrentusersandtickets"  ? "href=\"" + crystalApiPath + "/jmxConcurrentUsersAndTickets\"" : "") + "><span class=\"glyphicon glyphicon-stats\" aria-hidden=\"true\"></span> Concurrent users and tickets</a></li>");
  document.write("   <li " + (pagePath == "/jmxgarbagecollection"  ? "class=\"active\"" : "") + "><a " + (pagePath != "/jmxgarbagecollection"  ? "href=\"" + crystalApiPath + "/jmxGarbageCollection\"" : "") + "><span class=\"glyphicon glyphicon-stats\" aria-hidden=\"true\"></span> Garbage collection</a></li>");
  document.write("   <li " + (pagePath == "/jmxheapmemory"  ? "class=\"active\"" : "") + "><a " + (pagePath != "/jmxheapmemory"  ? "href=\"" + crystalApiPath + "/jmxHeapMemory\"" : "") + "><span class=\"glyphicon glyphicon-stats\" aria-hidden=\"true\"></span> Heap memory</a></li>");
  document.write("   <li " + (pagePath == "/jmxthreads"  ? "class=\"active\"" : "") + "><a " + (pagePath != "/jmxthreads"  ? "href=\"" + crystalApiPath + "/jmxThreads\"" : "") + "><span class=\"glyphicon glyphicon-stats\" aria-hidden=\"true\"></span> Threads</a></li>");
  document.write("   <li " + (pagePath == "/jmxintable"  ? "class=\"active\"" : "") + "><a " + (pagePath != "/jmxintable"  ? "href=\"" + crystalApiPath + "/jmxInTable\"" : "") + "><span class=\"glyphicon glyphicon-save\" aria-hidden=\"true\"></span> JMX in table</a></li>");


  // Analytics - Samples.
  document.write("   <li role=\"separator\" class=\"divider\"></li>");
  document.write("   <li class=\"dropdown-header\">Samples</li>");
  document.write("   <li " + (pagePath == "/sampledashboard"  ? "class=\"active\"" : "") + "><a " + (pagePath != "/sampledashboard"  ? "href=\"" + crystalApiPath + "/sampleDashboard\"" : "") + "><span class=\"glyphicon glyphicon-th-large\" aria-hidden=\"true\"></span> Sample dashboard</a></li>");
  document.write("   <li " + (pagePath == "/activethreadsovertime"  ? "class=\"active\"" : "") + "><a " + (pagePath != "/activethreadsovertime"  ? "href=\"" + crystalApiPath + "/activeThreadsOverTime\"" : "") + "><span class=\"glyphicon glyphicon-stats\" aria-hidden=\"true\"></span> Active threads over time</a></li>");
  document.write("   <li " + (pagePath == "/hitspersecond"  ? "class=\"active\"" : "") + "><a " + (pagePath != "/hitspersecond"  ? "href=\"" + crystalApiPath + "/hitsPerSecond\"" : "") + "><span class=\"glyphicon glyphicon-stats\" aria-hidden=\"true\"></span> Hits per second</a></li>");
  document.write("   <li " + (pagePath == "/responsetimesovertime"  ? "class=\"active\"" : "") + "><a " + (pagePath != "/responsetimesovertime"  ? "href=\"" + crystalApiPath + "/responseTimesOverTime\"" : "") + "><span class=\"glyphicon glyphicon-stats\" aria-hidden=\"true\"></span> Response times over time</a></li>");
  document.write("   <li " + (pagePath == "/transactionspersecond"  ? "class=\"active\"" : "") + "><a " + (pagePath != "/transactionspersecond"  ? "href=\"" + crystalApiPath + "/transactionsPerSecond\"" : "") + "><span class=\"glyphicon glyphicon-stats\" aria-hidden=\"true\"></span> Transactions per second</a></li>");
  document.write("   <li " + (pagePath == "/summaryreport"  ? "class=\"active\"" : "") + "><a " + (pagePath != "/summaryreport"  ? "href=\"" + crystalApiPath + "/summaryReport\"" : "") + "><span class=\"glyphicon glyphicon-list-alt\" aria-hidden=\"true\"></span> Summary report</a></li>");
  document.write("   <li " + (pagePath == "/resultsintable"  ? "class=\"active\"" : "") + "><a " + (pagePath != "/resultsintable"  ? "href=\"" + crystalApiPath + "/resultsInTable\"" : "") + "><span class=\"glyphicon glyphicon-save\" aria-hidden=\"true\"></span> Results in table</a></li>");
  document.write("  </ul>");
  document.write(" </li>");

  // Import.
  document.write(" <li " + (pagePath == "/import"  ? "class=\"active\"" : "") + "><a " + (pagePath != "/import"  ? "href=\"" + crystalApiPath + "/import\"" : "") + "><span class=\"glyphicon glyphicon-import\" aria-hidden=\"true\"></span> Import</a></li>");

  // About.
  document.write(" <li " + (pagePath == "/about"  ? "class=\"active\"" : "") + "><a " + (pagePath != "/about"  ? "href=\"" + crystalApiPath + "/about\"" : "") + "><span class=\"glyphicon glyphicon-briefcase\" aria-hidden=\"true\"></span> About</a></li>");

  document.write("</ul>");

} 
