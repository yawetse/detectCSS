# detectCSS

Simple module to detect browser CSS feature support, it's a simple alternative to modernizr to quickly test browser support for CSS properties.

## Install
    $ npm install detectcss
    
## Usage
detectCSS is intented to use in a CommonJS module environment, check out [Browserify](http://browserify.org/ "Browserify")

    var detectcss = require('detectcss');
    
    //detect if browser supports CSS transforms
    detectcss.feature("transform"); //returns true if browser supports CSS transforms
    
    //return CSS style with browser prefix
    detectcss.prefixed("transform"); //returns browser prefixed support, example: msTransition
    
### Thanks
http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
