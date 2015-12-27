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
 * The Prompting API Class
 * This is a simple and concise mechanism for easily plugging prompting.
 *
 * @name PromptingAPI
 * @class
 * @property {OperationAPI} operation The prompting operation API
 * @property {EventAPI} event The prompting event API
 * @property {UiAPI} ui The prompting ui API
 * @property {UtilAPI} util The prompting utility API
 * @property {Object} log The console logger of prompting API
 */
define(["./OperationAPI", "./EventAPI", "./UiAPI", "./UtilAPI"], function(OperationAPI, EventAPI, UiAPI, UtilAPI) {
  var API = function() {
    this.operation = new OperationAPI(this),
    this.util = new UtilAPI(this),
    this.ui = new UiAPI(this),
    this.event = new EventAPI(this),
    this.log = {
      info: function(msg) {
        console.log(msg);
      },
      warn: function(msg) {
        console.warn(msg)
      },
      error: function(msg, throwException) {
        if(throwException) {
          throw msg;
        }
        console.error(msg);
      }
    }
  };

  return API;
});