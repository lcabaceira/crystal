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
 * <h2>The Submit Prompt Component class</h2>
 *
 * <p>The SubmitPromptComponent renders a necessary elements for submitting prompt panel and consists of submit button, special label and checkbox for auto submitting option.</p>
 *
 * To use the SubmitPromptComponent you should require the appropriate file from common-ui:
 *
 * <pre><code>
 *   require([ 'common-ui/prompting/components/SubmitPromptComponent' ],
 *     function(SubmitPromptComponent) {
 *       var promptPanel = ...;
 *       var paramDefn = ...;
 *       var args = {
 *         promptType: 'submit',
 *         type: 'SubmitPromptComponent',
 *         name: 'component_name',
 *         htmlObject: 'dom_element_id',
 *         label: 'Submit label',
 *         autoSubmitLabel: 'Auto-Submit label',
 *         promptPanel: promptPanel,
 *         paramDefn: paramDefn,
 *         executeAtStart: true
 *       };
 *       var submitPromptComponent = new SubmitPromptComponent(args);
 *     }
 *   );
 * </code></pre>
 *
 * where 'args' is an object that contains the parameters necessary for base CDF component and special options:
 * <ul>
 *   <li>label - the title for submit button</li>
 *   <li>autoSubmitLabel - the title for auto-submit checkbox label</li>
 *   <li>promptPanel - {@link PromptPanel} used to check 'autoSubmit' and 'forceAutoSubmit' properties</li>
 *   <li>paramDefn - {@link ParameterDefinition} used to check 'autoSubmit' property</li>
 * </ul>
 *
 * @name SubmitPromptComponent
 * @class
 * @extends ScopedPentahoButtonComponent
 */
define(['./ScopedPentahoButtonComponent'], function(ScopedPentahoButtonComponent){
  return ScopedPentahoButtonComponent.extend({

    /**
     * Creates a label and a checkbox elements for auto-submit option. Moreover uses parent's functional to render a submit button element.
     *
     * @method
     * @name SubmitPromptComponent#update
     */
    update: function () {

      this.base();

      var promptPanel = this.promptPanel;

      // BISERVER-3821 Provide ability to remove Auto-Submit check box from report viewer
      // only show the UI for the auto-submit check-box if no preference exists
      // TODO: true/false is irrelevant?
      if (this.paramDefn.autoSubmit == undefined) {
        var checkboxStr = '<label class="auto-complete-checkbox">' +
            '<input type="checkbox"' +
            (promptPanel.autoSubmit ? ' checked="checked"' : '') +
            ' />' +
            this.autoSubmitLabel +
            '</label>';

        $(checkboxStr)
            .appendTo($('#' + this.htmlObject))
            .bind('click', function (ev) {
              promptPanel.autoSubmit = ev.target.checked;
            });
      }

      // BISERVER-6915 Should not request pagination when auto-submit is set to false
      if (promptPanel.forceAutoSubmit || promptPanel.autoSubmit) {
        this.expression(/*isInit*/true);
      }
    },

    /**
     * Called when the submit button is clicked to submit prompt panel.
     *
     * @name SubmitPromptComponent#expression
     * @method
     * @param {Boolean} isInit
     */
    expression: function (isInit) {
      this.promptPanel._submit({isInit: isInit});
    },

    /**
     * Called when the submit button is pressed to start submitting prompt panel.
     *
     * @name SubmitPromptComponent#expressionStart
     * @method
     */
    expressionStart: function () {
      this.promptPanel._submitStart();
    }
  });

});
