#!/bin/sh
PATH_SCRIPT=$(cd "$(dirname "$0")"; pwd)

jsduck --config $PATH_SCRIPT/docs.json