#!/bin/bash

. ./env.sh

find "${directories[@]}" -name 'package.json' -exec prettier-package-json {} $@ \;
