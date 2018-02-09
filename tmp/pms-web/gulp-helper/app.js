import gulp from "gulp";
import copy from "./copy";
import js from "./js";
import sass from "./sass";
import icons from "./icons";
import server from "./server";

export default function app(appName, config) {
    let jsTasks = [], jsWatchTasks = [];
    let htmlTasks = [], htmlWatchTasks = [];

    if (config.js) {
        gulp.task(appName + "-js", js.build(config.js));
        gulp.task(appName + "-js-watch", js.watch(config.js));

        jsTasks.push(appName + "-js");
        jsWatchTasks.push(appName + "-js-watch");
    }

    if (config.icons) {
        gulp.task(appName + "-icons", icons.build(config.icons));
        gulp.task(appName + "-icons-watch", icons.watch(config.icons));

        htmlTasks.push(appName + "-icons");
        htmlWatchTasks.push(appName + "-icons-watch");
    }

    if (config.copy) {
        gulp.task(appName + "-copy", copy.build(config.copy));
        gulp.task(appName + "-copy-watch", copy.watch(config.copy));

        htmlTasks.push(appName + "-copy");
        htmlWatchTasks.push(appName + "-copy-watch");
    }

    if (config.css) {
        gulp.task(appName + "-css", htmlTasks, sass.build(config.css));
        gulp.task(appName + "-css-watch", htmlWatchTasks, sass.watch(config.css));

        htmlTasks = [appName + "-css"];
        htmlWatchTasks = [appName + "-css-watch"];
    }

    gulp.task(appName + "-html", [...jsTasks, ...htmlTasks], copy.build(config.html));
    gulp.task(appName + "-html-watch", [...jsWatchTasks, ...htmlWatchTasks], copy.watch(config.html));

    gulp.task(appName + "-build", [appName + "-html"]);
    gulp.task(appName + "-watch", [appName + "-html-watch"]);

    if (config.server) {
        let buildServer = server.start(config.dest, Object.assign({}, config.server, { liveReload: void 0 }));
        let watchServer = server.start(config.dest, config.server);

        gulp.task(appName + "-server", buildServer);
        gulp.task(appName + "-server-watch", watchServer);

        gulp.task(appName + "-server-build", [appName + "-build"], buildServer);
        gulp.task(appName + "-server-build-watch", [appName + "-build", appName + "-watch"], watchServer);
    }
};
