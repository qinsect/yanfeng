/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */

/**
 * 
 * @module autoload-test
 */

YUI.add('autoload-test', function(Y, NAME) {
        
        function object(name){
            var _name = name;
        };

        object.prototype = {
            _fn : function(value){
                console.log("enter  _fn value:" + value);
                var returnValue = 0;
                if(value){
                    returnValue = value;
                }
                else{
                    returnValue = 0;
                }
                console.log("leave _fn");
                return returnValue;
            }
        };

        Y.AutoLoadTest = function(value) {
            var instance = new object;
            return instance._fn(value);

        };   
    
}, '0.0.2', {requires: ['base']});
