/*!
* Copyright 2010 - 2013 Pentaho Corporation.  All rights reserved.
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
define(["dojo/_base/declare", "dijit/Tooltip", "dojo/dom", "dojo/dom-construct", "dojo/_base/lang", "dojo/_base/array"],
  function(declare, Tooltip, dom, construct, lang, array){

  pentaho.common.ContextHelp = {};

  // Static suffixes for help properties
  pentaho.common.ContextHelp.REF = "_ref";
  pentaho.common.ContextHelp.CONTENT = "_content";
  pentaho.common.ContextHelp.POSITION = "_position";
  pentaho.common.ContextHelp.TARGET = "_target";
  pentaho.common.ContextHelp.suffixes = [pentaho.common.ContextHelp.REF, pentaho.common.ContextHelp.CONTENT, pentaho.common.ContextHelp.POSITION, pentaho.common.ContextHelp.TARGET];

  /**
   * Finds or creates the general-purpose div bucket to store help content elements in.
   */
  pentaho.common.ContextHelp.createHelpContainer = function() {
    var container = dom.byId("pentaho-ctx-help-container");
    if (this.container == undefined) {
      container = construct.create("div");
      container.id = "pentaho-ctx-help-container";
      construct.place(container, dojo.body());
    }
    return container;
  }

  /**
   * Create a trimmed array of strings out of a string.
   *
   * @param positionStr "above, before" becomes ["above", "before"]
   */
  pentaho.common.ContextHelp.parsePosition = function(positionStr) {
    return array.map(positionStr.split(","), function(item) {
      return lang.trim(item);
    });
  }

  /**
   * Builds up help items from a map. See help/messages.properties for format.
   *
   * @param map Object with properties that correspond to contextual help topics.
    */
  pentaho.common.ContextHelp.buildContext = function(map) {
    var context = new pentaho.common.ContextHelp.helpContext();
    // Build context help map
    for (var k in map) {
      if (map.hasOwnProperty(k)) {
        if (k === "defaultPosition") {
          context.defaultPosition = pentaho.common.ContextHelp.parsePosition(map[k]);
          continue;
        }
        var parsed = context.parseProperty(k);
        // Skip illegal property names
        if (parsed == null) {
          continue;
        }
        var help = context.getHelpFor(parsed.id);
        if (parsed.property) {
          context.setHelpProperty(help, parsed.property, map[k]);
        }
      }
    }
    return context;
  }

  pentaho.common.ContextHelp.installHelpFor = function (help, container) {
    var t = {
      connectId: help.target,
      label: help.content,
      position: help.position
    };
    help.widget = new Tooltip(t);
    help.widget.domNode.id = "tt_" + help.target;
    construct.place(help.widget.domNode, container);
  }

  pentaho.common.ContextHelp.helpContext = function() {
    this.context = {}
  }

  /**
   * Installs (creates) all elements required to show contextual help for this context.
   *
   * @param container Container to place all help topics in when they are created
   */
  pentaho.common.ContextHelp.helpContext.prototype.installAll = function(container) {
    if (this.context.defaultPosition) {
      Tooltip.defaultPosition = this.context.defaultPosition;
    }
    if (container == undefined) {
      container = pentaho.common.ContextHelp.createHelpContainer();
    }
    for (var help in this.context) {
      pentaho.common.ContextHelp.installHelpFor(this.context[help], container);
    }
  }

  pentaho.common.ContextHelp.helpContext.prototype.removeAll = function() {
    for (var help in this.context) {
      if (this.context[help].widget) {
        this.context[help].widget.destroyRecursive();
      }
    }
  }

  pentaho.common.ContextHelp.helpContext.createHelpFor = function(target) {
    return {
      target: target,
      content: null,
      ref: null,
      position: null,
      widget: null
    };
  }

  pentaho.common.ContextHelp.helpContext.prototype.parseProperty = function(str) {
    if (str.indexOf("_") > -1) {
      for (var idx = 0; idx < pentaho.common.ContextHelp.suffixes.length; idx ++) {
        var suffix = pentaho.common.ContextHelp.suffixes[idx];
        if (str.indexOf(suffix) > -1) {
          return {
            id: str.substring(0, str.length - suffix.length),
            property: suffix.substring(1)
          };
        }
      }
    }
    return null;
  }

  pentaho.common.ContextHelp.helpContext.prototype.getHelpFor = function(target) {
    var help = this.context[target];
    if (help == undefined) {
      help = this.context[target] = pentaho.common.ContextHelp.helpContext.createHelpFor(target);
    }
    return help;
  }

  pentaho.common.ContextHelp.helpContext.prototype.setHelpProperty = function(help, prop, value) {
    if (prop === "position") {
      value = pentaho.common.ContextHelp.parsePosition(value);
    }
    help[prop] = value;
    return help;
  }
});
