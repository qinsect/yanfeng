/*
 * Copyright (c) 2011-2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var YUITest = require('yuitest'),
    Assert = YUITest.Assert,
    suite = new YUITest.TestSuite("Autoload Test Suite"),

    Y = require("./../../lib/index.js").module();

    YUITest.TestRunner.add(new YUITest.TestCase({
        name: 'Unit test 1',
        "test 1": function() {
            self = this;
            Assert.isTrue("OK", "OK");
        }

}));
