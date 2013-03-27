#!/bin/sh
PATH_SCRIPT=$(cd "$(dirname "$0")"; pwd)
PATH_BASE=`dirname "$PATH_SCRIPT"`

sencha compile --classpath=$PATH_BASE/src/,$PATH_BASE/extjs/ \
    exclude -namespace Ext and \
    exclude -tag core and \
    exclude -tag foundation and \
    concat $PATH_BASE/tq-all-debug-w-comments.js and \
    -debug=true concat -strip $PATH_BASE/tq-all-debug.js and \
    -debug=false concat -yui $PATH_BASE/tq-all.js
