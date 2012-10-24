/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */

/**
 * Followed this best practice by the YUI team:
 * http://yuilibrary.com/yui/docs/yui/nodejs-package.html
 */
var path = require('path');

var meta = {
    'autoload-test': {
        fullpath: path.join(__dirname, 'autoload-test.js')
    }
};

module.exports = {
    module: function() {
        var yinst = require('yui').getInstance();
        yinst.applyConfig({useSync: true, modules: meta});
        return yinst.use(Object.keys(meta));
    },
    
    metadata: function() {
        return meta;
    }
};
