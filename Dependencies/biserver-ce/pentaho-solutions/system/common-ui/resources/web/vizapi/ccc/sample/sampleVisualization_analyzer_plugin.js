/*!
* Copyright 2010 - 2015 Pentaho Corporation.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

var analyzerPlugins = analyzerPlugins || [];
analyzerPlugins.push(
    {
      init:function () {

        // Register visualizations to display in Analyzer
        cv.pentahoVisualizations.push(pentaho.visualizations.getById("sample_calc"));



        /* 
         Helpers contain code that knows about the Analyzer specific context. The one function that's required
         "generateOptionsFromAnalyzerState" is called so the visualization can set it's own options based on
         Analyzers current report.
         */
        cv.pentahoVisualizationHelpers["sample_calc"] = {
          // use one of Analyzer's stock placeholder images
          placeholderImageSrc: CONTEXT_PATH + "content/analyzer/images/viz/VERTICAL_BAR.png",
          // set visualization options based on analyzer's state.
          generateOptionsFromAnalyzerState:function (report) {
            return {}; // perform no work
          }
        };

        /*
         LayoutConfig objects manage the interaction between Analyzer's Layout Panel and the visualization's settings.
         */

        // Declare a new class which extends the built-in version from Analyzer
        dojo.declare("SampleConfig", [analyzer.LayoutConfig], {


          /**
           * @param config    The parse Configuration object which serves as the model of of the Panel
           * @param item      The item in the panel which originated the event.
           * @param eventName The name of the event (clicked, value, etc)
           * @param args      A Hash Object containing relevent values (prevVal, newVal, etc)
           */
          onModelEvent: function(config, item, eventName, args) {
            if(eventName === "value") {
              this.report.visualization.args["calc"] = config.byId("calc").value;

              this.report.history.add(new cv.ReportState("actionChartProps"));
              this.report.refreshReport();
              return;
            }

            this.inherited(arguments); // Let super class handle the insertAt and removedGem events
          },

          /**
           * Return the JSON configuration object which the panel will use to create the UI and it's model
           */
          getConfiguration: function() {
            var config = this.inherited(arguments);

            dojo.forEach(config.properties, function (item) {
              if (this.report.visualization.args[item.id] !== "undefined") {
                item.value = this.report.visualization.args[item.id];
              }
            }, this);

            return config;

          }
        });

        // Register the Layout Panel Configuration Manager
        analyzer.LayoutPanel.configurationManagers["JSON_sample_calc"] = SampleConfig;
      }
    }
);
