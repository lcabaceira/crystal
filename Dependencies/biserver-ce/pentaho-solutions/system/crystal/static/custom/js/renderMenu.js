function renderMenu () {

  // Urls and paths.
  var basePath = "/pentaho/plugin";
  var crystalPath = basePath + "/crystal";
  var crystalApiPath = crystalPath + "/api";

  // Current page path.
  var pagePaths = "/main|/activethreadsovertime|/hitspersecond|/responsetimesovertime|/resultsintable|/transactionspersecond";
  var pagePath = location.pathname;
  pagePath = pagePath.substring(crystalApiPath.length);
  pagePath = pagePath.toLowerCase();

  //alert(pagePath);
 
  document.write("<ul class=\"nav nav-tabs\">");

  // Analytics.
  document.write(" <li class=\"" + (pagePath.match(pagePaths)  ? "active" : "") + " dropdown\">");
  document.write("  <a " + (!pagePath.match(pagePaths)  ? "href=\"" +  crystalApiPath +  "/main\"" : "") + " class=\"dropdown-toggle\" data-toggle=\"dropdown\"><span class=\"glyphicon glyphicon-stats\" aria-hidden=\"true\"></span> Analytics <span class=\"caret\"></span></a>");
  document.write("  <ul class=\"dropdown-menu\">");
  document.write("   <li " + (pagePath == "/main"  ? "class=\"active\"" : "") + "><a " + (pagePath != "/main"  ? "href=\"" +  crystalApiPath +  "/main\"" : "") + "><span class=\"glyphicon glyphicon-stats\" aria-hidden=\"true\"></span> Main dashboard</a></li>");
  document.write("   <li role=\"separator\" class=\"divider\"></li>");
  document.write("   <li class=\"dropdown-header\">Results</li>");
  document.write("   <li " + (pagePath == "/activethreadsovertime"  ? "class=\"active\"" : "") + "><a " + (pagePath != "/activethreadsovertime"  ? "href=\"" + crystalApiPath + "/activeThreadsOverTime\"" : "") + "><span class=\"glyphicon glyphicon-stats\" aria-hidden=\"true\"></span> Active threads over time</a></li>");
  document.write("   <li " + (pagePath == "/hitspersecond"  ? "class=\"active\"" : "") + "><a " + (pagePath != "/hitspersecond"  ? "href=\"" + crystalApiPath + "/hitsPerSecond\"" : "") + "><span class=\"glyphicon glyphicon-stats\" aria-hidden=\"true\"></span> Hits per second</a></li>");
  document.write("   <li " + (pagePath == "/responsetimesovertime"  ? "class=\"active\"" : "") + "><a " + (pagePath != "/responsetimesovertime"  ? "href=\"" + crystalApiPath + "/responseTimesOverTime\"" : "") + "><span class=\"glyphicon glyphicon-stats\" aria-hidden=\"true\"></span> Response times over time</a></li>");
  document.write("   <li " + (pagePath == "/resultsintable"  ? "class=\"active\"" : "") + "><a " + (pagePath != "/resultsintable"  ? "href=\"" + crystalApiPath + "/resultsInTable\"" : "") + "><span class=\"glyphicon glyphicon-save\" aria-hidden=\"true\"></span> Results in table</a></li>");
  document.write("   <li " + (pagePath == "/transactionspersecond"  ? "class=\"active\"" : "") + "><a " + (pagePath != "/transactionspersecond"  ? "href=\"" + crystalApiPath + "/transactionsPerSecond\"" : "") + "><span class=\"glyphicon glyphicon-stats\" aria-hidden=\"true\"></span> Transactions per second</a></li>");
  document.write("  </ul>");
  document.write(" </li>");

  // Import.
  document.write(" <li " + (pagePath == "/import"  ? "class=\"active\"" : "") + "><a " + (pagePath != "/import"  ? "href=\"" + crystalApiPath + "/import\"" : "") + "><span class=\"glyphicon glyphicon-import\" aria-hidden=\"true\"></span> Import</a></li>");

  // About.
  document.write(" <li " + (pagePath == "/about"  ? "class=\"active\"" : "") + "><a " + (pagePath != "/about"  ? "href=\"" + crystalApiPath + "/about\"" : "") + "><span class=\"glyphicon glyphicon-briefcase\" aria-hidden=\"true\"></span> About</a></li>");

  document.write("</ul>");

} 
