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

define(['./TableBasedPromptLayoutComponent'], function (TableBasedPromptLayoutComponent) {

  return TableBasedPromptLayoutComponent.extend({
    getMarkupFor: function (components) {
      var html = '<tr>';
      $.each(components, function (i, c) {
        var _class = this.getClassFor(c);
        // Assume components are contained in panels of components
        html += '<td align="left" style="vertical-align: top;"><div id="' + c.htmlObject + '"';
        if (_class) {
          html += ' class="' + _class + '"';
        }
        html += '></div></td>';
      }.bind(this));
      return html + '</tr>';
    }
  });

});
