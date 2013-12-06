/*
 * detectCSS
 * http://github.amexpub.com/modules
 *
 * Copyright (c) 2013 Amex Pub. All rights reserved.
 */

'use strict';

exports.feature = function(style) {
    var b = document.body || document.documentElement;
    var s = b.style;
    var p = style;
    if(typeof s[p] === 'string') {return true; }

    // Tests for vendor specific prop
    var v = ['Moz', 'Webkit', 'Khtml', 'O', 'ms'];
    p = p.charAt(0).toUpperCase() + p.substr(1);
    for(var i=0; i<v.length; i++) {
      if(typeof s[v[i] + p] === 'string') { return true; }
    }
    return false;
};

exports.prefixed = function(style){
    var b = document.body || document.documentElement;
    var s = b.style;
    var p = style;
    if(typeof s[p] === 'string') {return p; }

    // Tests for vendor specific prop
    var v = ['Moz', 'Webkit', 'Khtml', 'O', 'ms',''];
    p = p.charAt(0).toUpperCase() + p.substr(1);
    for(var i=0; i<v.length; i++) {
      if(typeof s[v[i] + p] === 'string') { return v[i] + p; }
    }
    return false;
};