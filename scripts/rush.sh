#!/bin/bash

. ./env.sh

find "${directories[@]}" -name 'package.json' -print0 | while IFS= read -r -d '' file
do
  pushd "$(dirname $file)" > /dev/null || exit
  echo "Package: $(pwd)"
  rush $@
  popd > /dev/null || exit
done

