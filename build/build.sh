#!/bin/sh
PATH_SCRIPT=$(cd "$(dirname "$0")"; pwd)

$PATH_SCRIPT/generate-docs.sh
$PATH_SCRIPT/compile.sh