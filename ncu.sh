#!/usr/bin/env bash

ncu -a;

for package in `ls ./packages`; do
    if [ -f "./packages/${package}/package.json" ]; then
        ncu --packageFile ./packages/${package}/package.json -a;
    fi
done;

npm run bootstrap
