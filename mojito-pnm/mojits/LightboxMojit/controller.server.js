/*
 * Copyright (c) 2011-2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

/*jslint anon:true, sloppy:true, nomen:true*/

YUI.add('LightboxMojit', function (Y, NAME) {

    /**
    * Constructor for the Controller class.
    * @class Controller     
    * @constructor     
    */
    Y.namespace('mojito.controllers')[NAME] = {
        init: function(config) {
            this.config = config;
        },
        index: function(actionContext) {
            console.log('foo');
            actionContext.done()
        }
    };
    // Generate the link to the next page based on:   
    // - mojit id 
    // - action 
    // - params

}, '0.0.1', {requires: ['dump']});