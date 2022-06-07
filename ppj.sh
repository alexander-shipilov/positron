#!/bin/sh

directories=(
  './config'
  './core'
  './hooks'
)

find ${directories[@]} -name 'package.json' -exec prettier-package-json {} $@ \;
