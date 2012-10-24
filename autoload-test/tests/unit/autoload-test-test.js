/*
 * Copyright (c) 2011-2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var YUITest = require('yuitest'),
    Assert = YUITest.Assert,
    suite = new YUITest.TestSuite("Autoload Test Suite"),

    Y = require("./../../lib/index.js").module();

    suite.add(new YUITest.TestCase({
        "unit test": function() {
            var verfiedValue = 100;
            var returnValue = Y.AutoLoadTest(verfiedValue);
            console.log("verfiy the value:" + verfiedValue + ":and:" + returnValue);
            Assert.areEqual(verfiedValue,returnValue);
        }}));
    
    YUITest.TestRunner.add(suite);
    YUITest.TestRunner.run();

