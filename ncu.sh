#!/bin/sh

directories=(
  './core'
  './react'
  './react-hooks'
)

find $directories -name 'package.json' -exec ncu $@ --packageFile {} \;
