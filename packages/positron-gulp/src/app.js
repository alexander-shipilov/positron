import gulp from "gulp";
import * as builders from "./builders";

class Tasks {
  constructor(tasks) {
    this.reset(tasks);
  }

  append(tasks) {
    if (tasks) {
      this.build = this.build.concat(tasks.build);
      this.watch = this.watch.concat(tasks.watch);
    }
  }

  reset(tasks) {
    this.build = [];
    this.watch = [];

    this.append(tasks);
  }
}

function appTasks(type, appName, config, deps) {
  let tasks = {};

  if (!builders.hasOwnProperty(type)) {
    throw new Error("Unknown task type " + type);
  }

  if (config[type]) {
    const builder = builders[type];
    const build = appName + "-" + type;
    const watch = build + "-watch";

    if (deps) {
      gulp.task(build, deps.build, builder.build(config[type]));
      gulp.task(watch, deps.watch, builder.watch(config[type]));
    } else {
      gulp.task(build, builder.build(config[type]));
      gulp.task(watch, builder.watch(config[type]));
    }

    tasks = new Tasks({ build, watch });
  }

  return tasks;
}

export default function app(appName, config) {
  const htmlTasks = new Tasks();
  const jsTasks = appTasks("js", appName, config);
  const { copy, server } = builders;

  htmlTasks.append(appTasks("icons", appName, config));
  htmlTasks.append(appTasks("sprites", appName, config));
  htmlTasks.append(appTasks("copy", appName, config));

  if (config.sass) {
    htmlTasks.reset(appTasks("sass", appName, config, htmlTasks));
  }

  gulp.task(appName + "-build", [...jsTasks.build, ...htmlTasks.build], copy.build(config.html));
  gulp.task(appName + "-watch", [...jsTasks.watch, ...htmlTasks.watch], copy.watch(config.html));

  if (config.server) {
    const buildServer = server.start(config.dest, Object.assign({}, config.server, { liveReload: void 0 }));
    const watchServer = server.start(config.dest, config.server);

    gulp.task(appName + "-server", buildServer);
    gulp.task(appName + "-server-watch", watchServer);

    gulp.task(appName + "-server-build", [appName + "-build"], buildServer);
    gulp.task(appName + "-server-build-watch", [appName + "-build", appName + "-watch"], watchServer);
  }
}
