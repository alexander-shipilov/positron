import chalk from "chalk";
import connect from "connect";
import serveStatic from "connect-gzip-static";
import connectLiveReload from "connect-livereload";
import gulp from "gulp";
import path from "path";
import proxy from "proxy-middleware";
import tinylr from "tiny-lr";
import url from "url";
import { throttle } from "../utils";

const LIVE_RELOAD_OPTS = {
  port: 35729,
  timeout: 3000
};

const CONNECT_OPTS = {
  port: 9000,
  liveReload: false
};

class Server {
  constructor(server, opts) {
    Object.assign(this, opts);

    this.server = server;
    if (this.port) {
      this.start();
    }
  }

  start(name) {
    this.server.listen(this.port);

    console.info("[%s] %s", chalk.green(name), "started at " + this.port);
  }

  stop() {
    return this.server.close();
  }
}

class LiveReloadServer extends Server {
  constructor(path, opts) {
    super(tinylr(), Object.assign({}, LIVE_RELOAD_OPTS, opts));

    this._changes = [];

    if (this.timeout > 0) {
      this._handleChange = throttle(this._handleChange, this.timeout, this);
    }

    this.watch(path);
  }

  _handleChange() {
    const changes = this._changes;

    if (changes.length) {
      this.server.changed({ body: { files: changes.concat() } });
      this._changes = [];
    }
  }

  _handleWatch(dir, event) {
    this._changes.push(path.relative(event.path, dir));
    this._handleChange();
  }

  watch(dir) {
    gulp.watch(dir + "/**/*", { timeout: 5000, debounceDelay: 2000 }, this._handleWatch.bind(this, dir));
  }

  start() {
    super.start("LiveReload");
  }
}

class ConnectServer extends Server {
  constructor(path, opts) {
    super(connect(), Object.assign({}, CONNECT_OPTS, opts));

    if (this.liveReload) {
      this.liveReload = new LiveReloadServer(path, this.liveReload);

      if (this.liveReload.port) {
        this.use(connectLiveReload({ port: this.liveReload.port }));
      }
    }

    if (this.middlewares) {
      this.middlewares.forEach((middleware) => this.use(middleware()));
    }

    this.serveStatic("/", path);

    if (this.proxy) {
      Object.keys(this.proxy).forEach((url) => this.useProxy(url, this.proxy[url]));
    }
  }

  use(...args) {
    this.server.use(...args);

    return this;
  }

  serveStatic(path, dir) {
    return this.use(path, serveStatic(dir));
  }

  useProxy(src, dest) {
    let opts;

    if (typeof dest !== "string") {
      dest = dest.dest;
      opts = dest;
    }

    return this.use(src, proxy(Object.assign(url.parse(dest), opts)));
  }

  start() {
    super.start("Connect");
  }
}

export default {
  start: (path, opts) => () => new ConnectServer(path, opts)
};
