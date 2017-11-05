const { BABEL_ENV } = process.env;
const plugins = [];

if (BABEL_ENV === "js") {
    plugins.push("external-helpers");
}

module.exports = {
    presets: [
        [
            "es2015", { modules: BABEL_ENV ? false : "commonjs" }
        ]
    ],
    plugins
};
