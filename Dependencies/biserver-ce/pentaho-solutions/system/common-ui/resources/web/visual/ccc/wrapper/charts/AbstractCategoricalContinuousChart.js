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
*/
define([
    "./AbstractCartesianChart"
], function(AbstractCartesianChart) {

    return AbstractCartesianChart.extend({
        methods: {
            _options: {
                panelSizeRatio: 0.8,
                dataOptions: {
                    measuresInColumns: false
                }
            },

            _showAxisTitle: function(type) {
                return !this._hasMultiChartColumns || type === 'ortho';
            },

            _getOrthoAxisTitle: function() {
                return this._getMeasureRoleTitle();
            },

            _getBaseAxisTitle: function() {
                return this.axes.row.getAxisLabel();
            },

            _configure: function() {
                this.base();

                this._configureAxisRange(/*isPrimary*/true, 'ortho');

                if(this.options.orientation === 'vertical') {
                    var eps = this.options.extensionPoints;
                    eps.xAxisLabel_textAngle    = -Math.PI/4;
                    eps.xAxisLabel_textAlign    = 'right';
                    eps.xAxisLabel_textBaseline = 'top';
                } else {
                    this.options.xAxisPosition = 'top';
                }
            },

            _configureDisplayUnits: function() {
                this.base();

                this._configureAxisDisplayUnits(/*isPrimary*/true, 'ortho');
            }
        }
    });
});
