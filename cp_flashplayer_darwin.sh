#!/bin/bash

dest=$(cd $(dirname $0) && pwd)/src
pushd /Applications/Google\ Chrome.app/Contents/Versions
cd `ls -t1F | head -1`Google\ Chrome\ Framework.framework/Internet\ Plug-Ins/PepperFlash/
cp -r PepperFlashPlayer.plugin "${dest}"
popd
unset dest

