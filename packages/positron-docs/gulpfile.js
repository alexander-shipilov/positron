"use strict";

require("babel-register")();
require("babel-helpers");
require("graceful-fs").gracefulify(require("fs"));
require("app-module-path/register");

require("./src/docs/gulpfile");
