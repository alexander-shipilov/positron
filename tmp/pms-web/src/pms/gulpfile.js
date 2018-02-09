/** eslint no-console: "off" */

import envify from "gulp-envify";
import app from "gulp-helper/app";
import plugins from "gulp-helper/plugins";

import utils from "gulp-helper/utils";
import uglify from "gulp-uglify";
import rewrite from "http-rewrite-middleware";
import path from "path";


const ROOT = path.resolve(__dirname, "../../");

const PACKAGE = require(path.resolve(ROOT, "package.json"));

const IS_PRODUCTION = utils.IS_PRODUCTION;
const LIBS = Object.keys(PACKAGE.dependencies);

const uglifyify = IS_PRODUCTION ? () => uglify({ mangle: false, compress: false }) : null;
const envifyify = () => envify(process.env.NODE_ENV);
const expandify = () => plugins.expand(config);


const API_ROOT = "https://pms.net/api";

const DEV_ENV = {
    BOTPAD_API: API_ROOT
};

const { BOTPAD_API } = IS_PRODUCTION ? process.env : DEV_ENV;

const config = utils.config.expand({
    src: "src",
    dest: IS_PRODUCTION ? "dest/prod" : "dest/dev",
    version: IS_PRODUCTION ? Math.ceil(Date.now() / 60000) : "",

    common: {
        src: "${src}/common",
        js: "${common.src}/js",
        scss: "${common.src}/scss",
        fonts: "${common.src}/fonts",
        images: "${common.src}/images",
        mock: "${common.src}/mock"
    },

    js: {
        vendors: "js/vendors.js",
        app: "js/app.js"
    },

    css: {
        app: "css/app.css"
    },

    scss: {
        app: "js/app.scss"
    },

    pms: {
        src: "${src}/pms",
        dest: "${dest}/pms",
        js: {
            "${pms.dest}/${js.vendors}": {
                src: [],
                require: LIBS,
                before: [envifyify, uglifyify],
                after: []
            },
            "${pms.dest}/${js.app}": {
                src: "${pms.src}/${js.app}",
                paths: ["${common.js}"],
                external: LIBS.concat("babel-runtime"),
                debug: !IS_PRODUCTION,
                before: [envifyify, uglifyify],
                after: []
            }
        },
        icons: {
            "${common.fonts}": {
                src: "${common.src}/iconfont",
                options: {
                    path: "${common.scss}/iconfont.template",
                    targetPath: "../scss/iconfont.scss",
                    fontPath: "../fonts/",
                    round: 10e10
                }
            }
        },
        css: {
            "${pms.dest}/${css.app}": {
                src: "${pms.src}/${scss.app}",
                watch: [
                    "${pms.src}/scss/**/*.scss",
                    "${pms.src}/js/**/*.scss",
                    "${common.scss}/**/*.scss",
                    "${common.js}/**/*.scss"
                ],
                options: {
                    includePaths: ["${common.scss}", "${common.js}", "${pms.src}/js", ROOT + "/node_modules"]
                }
            }
        },
        copy: {
            "${pms.dest}": [
                {
                    src: [
                        "${common.images}/**/*",
                        "${common.fonts}/**/*"
                    ],
                    base: "${common.src}",
                    after: []
                },
                {
                    src: [
                        "${pms.src}/images/**/*",
                        "${pms.src}/fonts/**/*"
                    ],
                    base: "${pms.src}",
                    after: []
                },
                {
                    src: ["${common.mock}/**/*"],
                    base: "${common.src}"
                }
            ]
        },
        html: {
            "${pms.dest}": {
                src: [
                    "${pms.src}/index.html",
                    "${pms.src}/terms.html",
                    "${pms.src}/privacy.html"
                ],
                before: [
                    expandify,
                    () => plugins.inline({ base: config.pms.dest })
                ]
            }
        },
        server: {
            port: 7000,
            liveReload: { port: 35729 },
            proxy: {
                "/api": BOTPAD_API
            },
            middlewares: [
                () => rewrite.getMiddleware([
                    { from: "^/(client|developer|contacts|login).*$", to: "/index.html" }
                ])
            ]
        }
    }
});

// Build
app("pms", config.pms);
