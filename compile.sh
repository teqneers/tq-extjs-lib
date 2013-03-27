#!/bin/sh
sencha compile --classpath=src/,extjs/ \
    exclude -namespace Ext and \
    exclude -tag core and \
    exclude -tag foundation and \
    concat tq-all-debug-w-comments.js and \
    -debug=true concat -strip tq-all-debug.js and \
    -debug=false concat -yui tq-all.js
