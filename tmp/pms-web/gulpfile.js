"use strict";

require("babel-register")();
require("graceful-fs").gracefulify(require("fs"));
require("app-module-path/register");

require("src/pms/gulpfile");
