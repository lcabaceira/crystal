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

/**
 * <h2>The Submit Component Builder</h2>
 *
 * To use the SubmitComponentBuilder you should require the appropriate file from common-ui:
 *
 * <pre><code>
 *   require([ 'common-ui/prompting/builders/SubmitComponentBuilder' ],
 *     function(SubmitComponentBuilder) {
 *
 *     }
 *   );
 * </code></pre>
 *
 * To get the component you'll have to create a new instance of the builder and call the <code>build</code> method:
 *
 * <pre><code>
 *   var submitComponentBuilder = new SubmitComponentBuilder();
 *
 *   var submitPromptComponent = submitComponentBuilder.build(args);
 * </code></pre>
 *
 * where 'args' is an object that contains the parameters necessary for the {@link SubmitPromptComponent}.
 *
 * @name SubmitComponentBuilder
 * @class
 * @extends Base
 */
define(['cdf/lib/Base', '../components/SubmitPromptComponent'],
    function (Base, SubmitPromptComponent) {

      return Base.extend({

        /**
         * Creates and returns a new instance of SubmitPromptComponent.
         *
         * @method
         * @name SubmitComponentBuilder#build
         * @param {Object}
         *          args The arguments to build the widget in accordance with {@link SubmitPromptComponent}
         * @returns {SubmitPromptComponent} The new instance of SubmitPromptComponent
         */
        build: function (args) {
          var guid = args.promptPanel.generateWidgetGUID();

          return new SubmitPromptComponent({
            promptType: 'submit',
            type: 'SubmitPromptComponent',
            name: guid,
            htmlObject: guid,
            label: args.promptPanel.getString('submitButtonLabel', 'Submit'),
            autoSubmitLabel: args.promptPanel.getString('autoSubmitLabel', 'Auto-Submit'),
            promptPanel: args.promptPanel,
            paramDefn: args.promptPanel.paramDefn,
            executeAtStart: true
          });
        }
      });
    });
