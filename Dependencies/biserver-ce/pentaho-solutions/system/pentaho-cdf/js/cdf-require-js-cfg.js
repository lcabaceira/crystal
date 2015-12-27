/*!
 * Copyright 2002 - 2015 Webdetails, a Pentaho company. All rights reserved.
 *
 * This software was developed by Webdetails and is provided under the terms
 * of the Mozilla Public License, Version 2.0, or any later version. You may not use
 * this file except in compliance with the license. If you need a copy of the license,
 * please go to http://mozilla.org/MPL/2.0/. The Initial Developer is Webdetails.
 *
 * Software distributed under the Mozilla Public License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. Please refer to
 * the license for the specific language governing your rights and limitations.
 */

/*
 * Configuration file for cdf core
 */
(function() {

  var requirePaths = requireCfg.paths;

  var isDebug = typeof document == "undefined" || document.location.href.indexOf("debug=true") > 0;

  var prefix;
  if(typeof ENVIRONMENT_CONFIG !== "undefined" && ENVIRONMENT_CONFIG.paths !== "undefined" &&  ENVIRONMENT_CONFIG.paths["cdf"] !== "undefined") { // environment is configured, checking
    prefix = requirePaths['cdf'] = ENVIRONMENT_CONFIG.paths["cdf"];
  } else if(typeof KARMA_RUN !== "undefined") { // unit tests
    prefix = requirePaths['cdf'] = 'bin/test-js/cdf/js';
  } else if(typeof CONTEXT_PATH !== "undefined") { // production

    //if(!isDebug) { requireCfg.urlArgs = "ts=" + (new Date()).getTime(); } // enable cache buster

    prefix = requirePaths['cdf'] = CONTEXT_PATH + 'plugin/pentaho-cdf/api/resources/js' + (isDebug ? '' : '/compressed');
  } else if(typeof FULL_QUALIFIED_URL != "undefined") { // embedded

    //if(!isDebug) { requireCfg.urlArgs = "ts=" + (new Date()).getTime(); } // enable cache buster

    prefix = requirePaths['cdf'] = FULL_QUALIFIED_URL + 'plugin/pentaho-cdf/api/resources/js' + (isDebug ? '' : '/compressed');
  } else { // build
    prefix = requirePaths['cdf'] = "cdf/js";
  }

  /*
   * Because CCC components are in a subfolder named "ccc", we need to set each component path so the
   * same path prefix ("cdf/components") can be used. Avoid specific path preprocessing (e.g. CDE renderer).
   */
  requirePaths['cdf/components/BaseCccComponent'] = prefix + '/components/ccc/BaseCccComponent';
  requirePaths['cdf/components/CccAreaChartComponent'] = prefix + '/components/ccc/CccAreaChartComponent';
  requirePaths['cdf/components/CccBarChartComponent'] = prefix + '/components/ccc/CccBarChartComponent';
  requirePaths['cdf/components/CccBoxplotChartComponent'] = prefix + '/components/ccc/CccBoxplotChartComponent';
  requirePaths['cdf/components/CccBulletChartComponent'] = prefix + '/components/ccc/CccBulletChartComponent';
  requirePaths['cdf/components/CccDotChartComponent'] = prefix + '/components/ccc/CccDotChartComponent';
  requirePaths['cdf/components/CccHeatGridChartComponent'] = prefix + '/components/ccc/CccHeatGridChartComponent';
  requirePaths['cdf/components/CccLineChartComponent'] = prefix + '/components/ccc/CccLineChartComponent';
  requirePaths['cdf/components/CccMetricDotChartComponent'] = prefix + '/components/ccc/CccMetricDotChartComponent';
  requirePaths['cdf/components/CccMetricLineChartComponent'] = prefix + '/components/ccc/CccMetricLineChartComponent';
  requirePaths['cdf/components/CccNormalizedBarChartComponent'] = prefix + '/components/ccc/CccNormalizedBarChartComponent';
  requirePaths['cdf/components/CccParCoordComponent'] = prefix + '/components/ccc/CccParCoordComponent';
  requirePaths['cdf/components/CccPieChartComponent'] = prefix + '/components/ccc/CccPieChartComponent';
  requirePaths['cdf/components/CccStackedAreaChartComponent'] = prefix + '/components/ccc/CccStackedAreaChartComponent';
  requirePaths['cdf/components/CccStackedDotChartComponent'] = prefix + '/components/ccc/CccStackedDotChartComponent';
  requirePaths['cdf/components/CccStackedLineChartComponent'] = prefix + '/components/ccc/CccStackedLineChartComponent';
  requirePaths['cdf/components/CccTreemapChartComponent'] = prefix + '/components/ccc/CccTreemapChartComponent';
  requirePaths['cdf/components/CccWaterfallChartComponent'] = prefix + '/components/ccc/CccWaterfallChartComponent';
  requirePaths['cdf/components/CccSunburstChartComponent'] = prefix + '/components/ccc/CccSunburstChartComponent';

  /*
   * Filter component is in a subfolder of its own
   */
  requirePaths['cdf/components/FilterComponent'] = prefix + '/components/filter/FilterComponent';

})();
/*!
 * Copyright 2002 - 2015 Webdetails, a Pentaho company. All rights reserved.
 *
 * This software was developed by Webdetails and is provided under the terms
 * of the Mozilla Public License, Version 2.0, or any later version. You may not use
 * this file except in compliance with the license. If you need a copy of the license,
 * please go to http://mozilla.org/MPL/2.0/. The Initial Developer is Webdetails.
 *
 * Software distributed under the Mozilla Public License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. Please refer to
 * the license for the specific language governing your rights and limitations.
 */

/**
 * Configuration file for cdf core libs
 */

(function() {
  if(!requireCfg.map) requireCfg.map = {};
  if(!requireCfg.map['*']) requireCfg.map['*'] = {};

  //RequireJS css! loader plugin 0.1.2
  requireCfg.map['*']['css'] = 'cdf/lib/require-css/css';

  requireCfg.config = requireCfg.config || {};

  var requirePaths = requireCfg.paths,
      requireShims = requireCfg.shim,
      requireConfig = requireCfg.config;

  if(!requireConfig['amd']) {
    requireConfig['amd'] = {};
  }
  if(!requireConfig['amd']['shim']) {
    requireConfig['amd']['shim'] = {};
  }
  var amdShim = requireConfig['amd']['shim'];

  var isDebug = typeof document == "undefined" || document.location.href.indexOf("debug=true") > 0;

  var prefix = "";
  if(typeof ENVIRONMENT_CONFIG !== "undefined" && ENVIRONMENT_CONFIG.paths !== "undefined" && ENVIRONMENT_CONFIG.paths["cdf/lib"] !== "undefined") { // environment is configured, checking
    prefix = requirePaths['cdf/lib'] = ENVIRONMENT_CONFIG.paths["cdf/lib"];
  } else if(typeof KARMA_RUN !== "undefined") { // unit tests
    prefix = requirePaths['cdf/lib'] = 'bin/test-js/cdf/js/lib';
  } else if(typeof CONTEXT_PATH !== "undefined") { // production

    //if(!isDebug) { requireCfg.urlArgs = "ts=" + (new Date()).getTime(); } // enable cache buster

    prefix = requirePaths['cdf/lib'] = CONTEXT_PATH + 'plugin/pentaho-cdf/api/resources/js' + (isDebug ? '/lib' : '/compressed/lib');
  } else if(typeof FULL_QUALIFIED_URL != "undefined") { // embedded

    //if(!isDebug) { requireCfg.urlArgs = "ts=" + (new Date()).getTime(); } // enable cache buster

    prefix = requirePaths['cdf/lib'] = FULL_QUALIFIED_URL + 'plugin/pentaho-cdf/api/resources/js' + (isDebug ? '/lib' : '/compressed/lib');
  } else { // build
    prefix = requirePaths['cdf/lib'] = "cdf/js/lib";
  }

  //RequireJS text! loader plugin 2.0.14
  requirePaths['text'] = prefix + '/require-text/text';
  // configure text! plugin for usage in embedded environments (CORS)
  requireConfig['text'] = {
    onXhr: function(xhr, url) {
      //Called after the XHR has been created and after the
      //xhr.open() call, but before the xhr.send() call.
      //Useful time to set headers.
      xhr.withCredentials = true;
    }
  };

  // RequireJS amd! loader plugin. Wraps non-AMD scripts as AMD modules on the fly,
  // to be used when a shim isn't enough (see plugin prescript and postscript).
  requirePaths['amd'] = prefix + '/require-amd/nonamd';

  // RequireJS dash! loader plugin 0.0.1
  requirePaths['dash'] = prefix + '/require-dashboard/dashboard';

  //modernizr 2.8.3
  requirePaths['cdf/lib/modernizr'] = prefix + '/modernizr/modernizr-2.8.3';

  //jquery migration tool 1.2.1 (this is helpful while the migration to jquery 1.9.1 isn't completely stable)
  requirePaths['cdf/lib/jquery'] = prefix + "/jquery-migrate-1.2.1";
  requireShims['cdf/lib/jquery'] = {
    deps: ['cdf/lib/jQuery/jquery'],
    exports: "$",
    init: function() {
      return $.noConflict(true);
    }
  };

  //mapping all jquery requests from inside cdf to 'cdf/lib/jquery'
  requireCfg.map['cdf'] = requireCfg.map['cdf'] || {};
  requireCfg.map['cdf']['jquery'] = 'cdf/lib/jquery';

  //jquery.ui 1.10.4
  requirePaths['cdf/lib/jquery.ui'] = prefix + "/jQuery/jquery.ui";
  amdShim["cdf/lib/jquery.ui"] = {
    exports: "jQuery",
    deps: {
      "cdf/lib/jquery": "jQuery",
      "css!cdf/lib/theme/cupertino/jquery-ui-1.10.4.custom": ""
    }
  };

  //jquery.blockUI 2.66.0
  requirePaths['cdf/lib/jquery.blockUI'] = prefix + "/blockUI/jquery.blockUI";
  amdShim["cdf/lib/jquery.blockUI"] = {
    exports: "jQuery",
    deps: {
      "cdf/lib/jquery": "jQuery",
      "amd!cdf/lib/jquery.ui": ""
    }
  };

  //jquery-impromptu 5.2.4
  requirePaths['cdf/lib/jquery.impromptu'] = prefix + "/impromptu/jquery-impromptu";
  amdShim["cdf/lib/jquery.impromptu"] = {
    exports: "jQuery",
    deps: {
      "cdf/lib/jquery": "jQuery",
      "css!cdf/lib/impromptu/jquery-impromptu": ""
    }
  };

  //jquery.fancybox 2.1.5
  requirePaths['cdf/lib/jquery.fancybox'] = prefix + "/fancybox/jquery.fancybox";
  amdShim["cdf/lib/jquery.fancybox"] = {
    exports: "jQuery",
    deps: {
      "cdf/lib/jquery": "jQuery",
      "css!cdf/lib/fancybox/jquery.fancybox": ""
    }
  };

  //daterangepicker.jQuery 01.19.2008
  requirePaths['cdf/lib/daterangepicker.jQuery'] = prefix + "/daterangepicker/daterangepicker.jQuery";
  amdShim["cdf/lib/daterangepicker.jQuery"] = {
    exports: "jQuery",
    deps: {
      "amd!cdf/lib/jquery.ui": "jQuery",
      "css!cdf/lib/daterangepicker/ui.daterangepicker": ""
    },
    prescript: "define = function(arr, setup) { setup(jQuery) };"
  };

  //underscore 1.6.0
  requirePaths['cdf/lib/underscore'] = prefix + "/underscore/underscore";
  amdShim['cdf/lib/underscore'] = {
    postscript: "return _.noConflict();"
  };

  //backbone 1.1.2
  requirePaths['cdf/lib/backbone'] = prefix + "/backbone/backbone";
  amdShim["cdf/lib/backbone"] = {
    deps: {
      "cdf/lib/jquery": "jQuery",
      "amd!cdf/lib/underscore" : "_"
    },
    prescript: "var root = {jQuery: jQuery, _: _};\n"
      + "(function() {\n",
    postscript: "}.call(root));\n"
      + "return root.Backbone;"
  };

  //mustache 0.8.1
  requirePaths['cdf/lib/mustache'] = prefix + "/mustache/mustache";

  //mustache-wax 0.9.0
  requirePaths['cdf/lib/mustache-wax'] = prefix + "/mustacheWax/mustache-wax";
  amdShim["cdf/lib/mustache-wax"] = {
    exports: "Mustache",
    deps: {
      "cdf/lib/mustache": "Mustache"
    },
    prescript: "var root = {Mustache: Mustache};\n"
      + "(function() {\n",
    postscript: "}.call(root));\n"
      + "return root.Mustache;"
  };

  //Base 1.1a
  requirePaths['cdf/lib/Base'] = prefix + "/base/Base";

  //datatables 1.10.1
  requirePaths['cdf/lib/datatables'] = prefix + "/dataTables/js/jquery.dataTables";
  amdShim["cdf/lib/datatables"] = {
    exports: "jQuery",
    deps: {
      "cdf/lib/jquery": "jQuery",
      "css!cdf/lib/dataTables/css/jquery.dataTables_themeroller": "",
      "css!cdf/lib/dataTables/css/jquery.dataTables": ""
    }
  };

  //captify
  requirePaths['cdf/lib/captify'] = prefix + "/captify/captify";
  amdShim["cdf/lib/captify"] = {
    exports: "$",
    deps: {
      "cdf/lib/jquery": "$",
      "css!cdf/lib/captify": ""
    }
  };

  //bgiframe 3.0.1
  requirePaths['cdf/lib/jquery.bgiframe'] = prefix + "/bgiframe/jquery.bgiframe";
  amdShim["cdf/lib/jquery.bgiframe"] = {
    exports: "jQuery",
    deps: {
      "cdf/lib/jquery": "jQuery"
    }
  };

  //positionBy 1.0.7 (2008-01-29)
  requirePaths['cdf/lib/jquery.positionBy'] = prefix + "/positionBy/jquery.positionBy";
  amdShim["cdf/lib/jquery.positionBy"] = {
    exports: "jQuery",
    deps: {
      "cdf/lib/jquery": "jQuery"
    }
  };

  //jdMenu 1.4.1 (2008-03-31)
  requirePaths['cdf/lib/jquery.jdMenu'] = prefix + "/jdMenu/jquery.jdMenu";
  amdShim["cdf/lib/jquery.jdMenu"] = {
    exports: "jQuery",
    deps: {
      "cdf/lib/jquery": "jQuery",
      "amd!cdf/lib/jquery.positionBy": "",
      "amd!cdf/lib/jquery.bgiframe": "",
      "css!cdf/lib/jquery.jdMenu": "",
      "css!cdf/lib/jdMenu/jquery.jdMenu.slate": ""
    },
    prescript: "var $ = jQuery;"
  };

  //jquery i18n
  requirePaths['cdf/lib/cdf.jquery.i18n'] = prefix + "/i18n/cdf.jquery.i18n";
  requirePaths['cdf/lib/jquery.i18n'] = prefix + "/i18n/jquery.i18n.properties";
  amdShim["cdf/lib/jquery.i18n"] = {
    exports: "jQuery",
    deps: {
      "cdf/lib/jquery": "jQuery"
    }
  };

  //OpenLayers 2.13.1
  requirePaths['cdf/lib/OpenLayers'] = prefix + "/OpenMap/OpenLayers/OpenLayers";
  requireShims['cdf/lib/OpenLayers'] = {
    exports: 'OpenLayers',
    deps: ['css!cdf/lib/OpenMap/OpenLayers/theme/default/style']
  };

  //OpenStreetMap
  requirePaths['cdf/lib/OpenStreetMap'] = prefix + "/OpenStreetMap";
  requireShims['cdf/lib/OpenStreetMap'] = ['cdf/lib/OpenLayers'];

  //jQuery uriQueryParser 2013
  requirePaths['cdf/lib/queryParser'] = prefix + "/uriQueryParser/jquery-queryParser";
  amdShim["cdf/lib/queryParser"] = {
    exports: "jQuery",
    deps: {
      "cdf/lib/jquery": "jQuery"
    }
  };

  //jQuery sparkline 2.1.2
  requirePaths['cdf/lib/jquery.sparkline'] = prefix + "/sparkline/jquery.sparkline";
  amdShim["cdf/lib/jquery.sparkline"] = {
    exports: "jQuery",
    deps: {
      "cdf/lib/jquery": "jQuery"
    }
  };

  //jQuery corner 2.13
  requirePaths['cdf/lib/jquery.corner'] = prefix + "/corner/jquery.corner";
  amdShim["cdf/lib/jquery.corner"] = {
    exports: "jQuery",
    deps: {
      "cdf/lib/jquery": "jQuery"
    }
  };

  //jQuery Select2 3.5.0
  requirePaths['cdf/lib/jquery.select2'] = prefix + "/select2/select2";
  amdShim["cdf/lib/jquery.select2"] = {
    exports: "jQuery",
    deps: {
      "cdf/lib/jquery": "jQuery",
      "css!cdf/lib/select2/select2": "",
      "css!cdf/lib/select2/select2-bootstrap": ""
    }
  };

  //jQuery Chosen 0.9.1
  requirePaths['cdf/lib/jquery.chosen'] = prefix + "/chosen/chosen.jquery";
  amdShim['cdf/lib/jquery.chosen'] = {
    exports: "jQuery",
    deps: {
      "cdf/lib/jquery": "jQuery",
      "css!cdf/lib/chosen/chosen": ""
    }
  };

  //jQuery MultiSelect UI Widget 1.12
  requirePaths['cdf/lib/jquery.multiselect'] = prefix + "/hynds/jquery.multiselect";
  amdShim['cdf/lib/jquery.multiselect'] = {
    exports: "jQuery",
    deps: {
      "cdf/lib/jquery": "jQuery",
      "amd!cdf/lib/jquery.ui": "",
      "css!cdf/lib/hynds/jquery.multiselect": ""
    }
  };

  //shims
  requirePaths['cdf/lib/shims'] = prefix + "/shims";

  /*
   * Dashboard types shims (Bootstrap)
   */

  //HTML5 Shiv 3.7.2 (IE8)
  requirePaths['cdf/lib/html5shiv'] = prefix + '/html5shiv/html5shiv';

  //Respond.js v1.4.0 (IE8, load after bootstrap.css)
  requirePaths['cdf/lib/respond'] = prefix + '/respond/respond';
  requireShims['cdf/lib/respond'] = ['amd!cdf/lib/bootstrap'];

  //bootstrap 3.1.1
  requirePaths['cdf/lib/bootstrap'] = prefix + '/Bootstrap/js/bootstrap';
  amdShim["cdf/lib/bootstrap"] = {
    exports: "jQuery",
    deps: {
      "cdf/lib/jquery": "jQuery",
      "css!cdf/lib/Bootstrap/css/bootstrap.css": ""
    }
  };

  //Font Awesome 4.0.3 (CSS only)

  // Raphaël 2.1.2 ( + Eve 0.4.2) AMD compatible
  requirePaths['cdf/lib/raphael'] = prefix + '/Raphael/raphael';

  // Base64
  requirePaths['cdf/lib/base64'] = prefix + '/base64';
  requireShims['cdf/lib/base64'] = {
    exports: 'Base64'
  };

  // Moment 2.9.0
  requirePaths['cdf/lib/moment'] = prefix + '/moment/moment';
  requireConfig['cdf/lib/moment'] = {
    noGlobal: true
  };

  //xmla4js
  requirePaths['cdf/lib/xmla'] = prefix + "/xmla/Xmla";
  amdShim["cdf/lib/xmla"] = {
    exports: "Xmla"
  };

  // backbone.treeModel
  requirePaths['cdf/lib/backbone.treemodel'] = prefix + "/backboneTreemodel/backbone.treemodel";
  amdShim["cdf/lib/backbone.treemodel"] = {
    exports: "Backbone",
    deps: {
      "amd!cdf/lib/underscore" : "_",
      "amd!cdf/lib/backbone" : "Backbone"
    },
    prescript: "var root = { Backbone: Backbone, _: _ };\n"
      + "(function() {\n",
    postscript: "}.call(root));\n"
      + "return root.Backbone;"
  };

  // mCustomScrollbar: jquery mousewheel plugin v3.1.12, MIT License
  requirePaths['cdf/lib/jquery.mCustomScrollbar'] = prefix + "/mCustomScrollbar/jquery.mCustomScrollbar.concat.min";
  amdShim["cdf/lib/jquery.mCustomScrollbar"] = {
    exports: "jQuery",
    deps: {
      "cdf/lib/jquery": "jQuery",
      "css!cdf/lib/mCustomScrollbar/jquery.mCustomScrollbar.min": ""
    }
  };

})();
/*!
 * Copyright 2002 - 2015 Webdetails, a Pentaho company. All rights reserved.
 *
 * This software was developed by Webdetails and is provided under the terms
 * of the Mozilla Public License, Version 2.0, or any later version. You may not use
 * this file except in compliance with the license. If you need a copy of the license,
 * please go to http://mozilla.org/MPL/2.0/. The Initial Developer is Webdetails.
 *
 * Software distributed under the Mozilla Public License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. Please refer to
 * the license for the specific language governing your rights and limitations.
 */

/**
 * Configuration file for cdf base
 */
/*!
 * Copyright 2002 - 2015 Webdetails, a Pentaho company. All rights reserved.
 *
 * This software was developed by Webdetails and is provided under the terms
 * of the Mozilla Public License, Version 2.0, or any later version. You may not use
 * this file except in compliance with the license. If you need a copy of the license,
 * please go to http://mozilla.org/MPL/2.0/. The Initial Developer is Webdetails.
 *
 * Software distributed under the Mozilla Public License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. Please refer to
 * the license for the specific language governing your rights and limitations.
 */

/**
 * Configuration file for cdf pentaho version 5
 */
/*!
 * Copyright 2002 - 2015 Webdetails, a Pentaho company. All rights reserved.
 *
 * This software was developed by Webdetails and is provided under the terms
 * of the Mozilla Public License, Version 2.0, or any later version. You may not use
 * this file except in compliance with the license. If you need a copy of the license,
 * please go to http://mozilla.org/MPL/2.0/. The Initial Developer is Webdetails.
 *
 * Software distributed under the Mozilla Public License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. Please refer to
 * the license for the specific language governing your rights and limitations.
 */

/* this file allows platform plugins to use the non-RequireJS version of CDF */

if(typeof CONTEXT_PATH != 'undefined') { // production
  requireCfg['paths']['cdf-legacy'] = CONTEXT_PATH + 'plugin/pentaho-cdf/api/resources/js-legacy';
} else { // build / unit tests
  requireCfg['paths']['cdf-legacy'] = 'cdf/js-legacy';
}

if(!requireCfg.map) requireCfg.map = {};
if(!requireCfg.map['*']) requireCfg.map['*'] = {};

requireCfg.map['*']['cdf/cdf-module'] = 'cdf-legacy/cdf-module';

requireCfg['shim']['cdf-legacy/cdf-module'] = [
  'cdf-legacy/lib/jQuery/jquery.ui',
  'cdf-legacy/lib/impromptu/jquery-impromptu',
  'cdf-legacy/lib/jquery-ui-datepicker-i18n',
  'cdf-legacy/lib/bgiframe/jquery.bgiframe',
  'cdf-legacy/lib/blockUI/jquery.blockUI',
  'cdf-legacy/lib/corner/jquery.corner',
  'cdf-legacy/lib/eventstack/jquery.eventstack',
  'cdf-legacy/lib/i18n/jquery.i18n.properties',
  'cdf-legacy/lib/jdMenu/jquery.jdMenu',
  'cdf-legacy/lib/positionBy/jquery.positionBy',
  'cdf-legacy/lib/simile/ajax/scripts/json',
  'cdf-legacy/lib/json',
  'cdf-legacy/CoreComponents'
];

requireCfg['shim']['cdf-legacy/CoreComponents'] = [
  'cdf-legacy/components/core',
  'cdf-legacy/components/ccc',
  'cdf-legacy/components/input',
  'cdf-legacy/components/jfreechart',    
  'cdf-legacy/components/maps',
  'cdf-legacy/components/navigation',
  'cdf-legacy/components/pentaho',
  'cdf-legacy/components/simpleautocomplete',
  'cdf-legacy/components/table'
];

requireCfg['shim']['cdf-legacy/Dashboards'] = [
  'cdf-legacy/Dashboards.Main',
  'cdf-legacy/Dashboards.Query',
  'cdf-legacy/Dashboards.AddIns',
  'cdf-legacy/Dashboards.Bookmarks',
  'cdf-legacy/Dashboards.Legacy',
  'cdf-legacy/Dashboards.Notifications',
  'cdf-legacy/Dashboards.RefreshEngine',
  'cdf-legacy/Dashboards.Utils'
];

requireCfg['shim']['cdf-legacy/Dashboards.Main'] = [
  'cdf-legacy/lib/base/Base',
  'cdf-legacy/lib/underscore/underscore',
  'cdf-legacy/lib/backbone/backbone',
  'cdf-legacy/lib/mustache/mustache',
  'cdf-legacy/lib/shims',
  'cdf-legacy/lib/blockUI/jquery.blockUI',
  'cdf-legacy/lib/uriQueryParser/jquery-queryParser',
  'cdf-legacy/Dashboards.Startup',
  'cdf-legacy/cdf-base'
];

requireCfg['shim']['cdf-legacy/cdf-base'] = ['cdf-legacy/wd'];

requireCfg['shim']['cdf-legacy/lib/backbone/backbone']    = ['cdf-legacy/lib/underscore/underscore'];

requireCfg['shim']['cdf-legacy/Dashboards.Startup']       = ['cdf-legacy/lib/shims'];
requireCfg['shim']['cdf-legacy/Dashboards.AddIns']        = ['cdf-legacy/Dashboards.Main', 'cdf-legacy/Dashboards.Query'];
requireCfg['shim']['cdf-legacy/Dashboards.Bookmarks']     = ['cdf-legacy/Dashboards.Main'];
requireCfg['shim']['cdf-legacy/Dashboards.Legacy']        = ['cdf-legacy/Dashboards.Main'];
requireCfg['shim']['cdf-legacy/Dashboards.Notifications'] = ['cdf-legacy/Dashboards.Main'];
requireCfg['shim']['cdf-legacy/Dashboards.Query']         = ['cdf-legacy/Dashboards.Main'];
requireCfg['shim']['cdf-legacy/Dashboards.RefreshEngine'] = ['cdf-legacy/Dashboards.Main'];
requireCfg['shim']['cdf-legacy/Dashboards.Utils']         = ['cdf-legacy/Dashboards.Main'];

requireCfg['shim']['cdf-legacy/components/core']          = ['cdf-legacy/Dashboards'];
requireCfg['shim']['cdf-legacy/components/input']         = [
  'cdf-legacy/components/core',
  'cdf-legacy/inputHelper'
];
requireCfg['shim']['cdf-legacy/components/jfreechart'] = ['cdf-legacy/components/core'];
requireCfg['shim']['cdf-legacy/components/maps']       = ['cdf-legacy/components/core'];
requireCfg['shim']['cdf-legacy/components/navigation'] = ['cdf-legacy/components/core'];
requireCfg['shim']['cdf-legacy/components/pentaho']    = [
  'cdf-legacy/components/core',
  'cdf-legacy/components/Pentaho.Analyzer',
  'cdf-legacy/components/Pentaho.JPivot',
  'cdf-legacy/components/Pentaho.Reporting',
  'cdf-legacy/components/Pentaho.XAction'
];
requireCfg['shim']['cdf-legacy/components/simpleautocomplete'] = ['cdf-legacy/components/core'];
requireCfg['shim']['cdf-legacy/components/table']              = ['cdf-legacy/components/core'];
requireCfg['shim']['cdf-legacy/components/Pentaho.Analyzer']   = ['cdf-legacy/components/core'];
requireCfg['shim']['cdf-legacy/components/Pentaho.JPivot']     = ['cdf-legacy/components/core'];
requireCfg['shim']['cdf-legacy/components/Pentaho.Reporting']  = ['cdf-legacy/components/core'];
requireCfg['shim']['cdf-legacy/components/Pentaho.XAction']    = ['cdf-legacy/components/core'];

requireCfg['shim']['cdf-legacy/lib/jQuery/jquery'] = {
  exports: '$'
}

// AMD compatible libs already define themselves anonymously, yet depend on 
// module "jquery", which is defined by jQuery.js
requireCfg.map['cdf-legacy'] = { 'jquery': 'cdf-legacy/lib/jQuery/jquery' };
requireCfg.map['*']['cdf-legacy/jquery'] = 'cdf-legacy/lib/jQuery/jquery';

//requireCfg['shim']['cdf/lib/blockUI/jquery.blockUI']     = ['cdf/lib/jQuery/jquery'];
//requireCfg['shim']['cdf/lib/bgiframe/jquery.bgiframe']   = ['cdf/lib/jQuery/jquery'];
//requireCfg['shim']['cdf/lib/sparkline/jquery.sparkline'] = ['cdf/lib/jQuery/jquery'];

requireCfg['shim']['cdf-legacy/lib/jQuery/jquery.ui']             = ['cdf-legacy/lib/jQuery/jquery'];
requireCfg['shim']['cdf-legacy/lib/impromptu/jquery-impromptu']   = ['cdf-legacy/lib/jQuery/jquery'];
requireCfg['shim']['cdf-legacy/lib/jquery-ui-datepicker-i18n']    = ['cdf-legacy/lib/jQuery/jquery.ui'];
requireCfg['shim']['cdf-legacy/lib/corner/jquery.corner']         = ['cdf-legacy/lib/jQuery/jquery'];
requireCfg['shim']['cdf-legacy/lib/eventstack/jquery.eventstack'] = ['cdf-legacy/lib/jQuery/jquery'];
requireCfg['shim']['cdf-legacy/lib/i18n/jquery.i18n.properties']  = ['cdf-legacy/lib/jQuery/jquery'];
requireCfg['shim']['cdf-legacy/lib/jdMenu/jquery.jdMenu']         = ['cdf-legacy/lib/jQuery/jquery'];
requireCfg['shim']['cdf-legacy/lib/positionBy/jquery.positionBy'] = ['cdf-legacy/lib/jQuery/jquery'];

requireCfg['shim']['cdf-legacy/lib/uriQueryParser/jquery-queryParser'] = ['cdf-legacy/lib/jQuery/jquery'];

requireCfg['shim']['cdf-legacy/lib/simile/ajax/scripts/json'] = ['cdf-legacy/lib/simile/ajax/simile-ajax-api'];

requireCfg['shim']['cdf-legacy/lib/json'] = ['cdf-legacy/lib/simile/ajax/simile-ajax-api'];

requireCfg['shim']['cdf-legacy/components/FilterComponent'] = [
  'cdf-legacy/lib/backboneTreemodel/backbone.treemodel',
  'cdf-legacy/lib/mCustomScrollbar/jquery.mCustomScrollbar.concat.min',
  'cdf-legacy/lib/mCustomScrollbar/jquery.mCustomScrollbar.min',
  'cdf-legacy/components/filter/lib/baseevents',
  'cdf-legacy/components/filter/js/TreeFilter/TreeFilter',
  'cdf-legacy/components/filter/js/TreeFilter/defaults',
  'cdf-legacy/components/filter/js/TreeFilter/Logger',
  'cdf-legacy/components/filter/js/TreeFilter/models/Tree',
  'cdf-legacy/components/filter/js/TreeFilter/models/SelectionTree',
  'cdf-legacy/components/filter/js/TreeFilter/templates',
  'cdf-legacy/components/filter/js/TreeFilter/views/Abstract',
  'cdf-legacy/components/filter/js/TreeFilter/views/Root',
  'cdf-legacy/components/filter/js/TreeFilter/views/Group',
  'cdf-legacy/components/filter/js/TreeFilter/views/Item',
  'cdf-legacy/components/filter/js/TreeFilter/controllers/Manager',
  'cdf-legacy/components/filter/js/TreeFilter/controllers/RootCtrl',
  'cdf-legacy/components/filter/js/TreeFilter/strategies/AbstractSelect',
  'cdf-legacy/components/filter/js/TreeFilter/strategies/MultiSelect',
  'cdf-legacy/components/filter/js/TreeFilter/strategies/SingleSelect',
  'cdf-legacy/components/filter/js/TreeFilter/extensions/renderers',
  'cdf-legacy/components/filter/js/TreeFilter/extensions/sorters',
  'cdf-legacy/components/filter/js/TreeFilter/data-handlers/InputDataHandler',
  'cdf-legacy/components/filter/js/TreeFilter/data-handlers/OutputDataHandler',
  'cdf-legacy/components/filter/js/TreeFilter/addIns/addIns',
  'cdf-legacy/components/filter/styles/filter',
  'cdf-legacy/components/filter/js/filter'];
