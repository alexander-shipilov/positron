const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: [
        "webpack/hot/only-dev-server",
        "./node_modules/babel-polyfill",
        path.resolve("./src/app.js")
    ],

    devServer: {
        contentBase: ["./src"],
        disableHostCheck: true,
        hot: true,
        host: "0.0.0.0",
        inline: true,
        noInfo: false,
        port: 5000
    },

    devtool: "eval",

    output: {
        path: path.resolve("./build"),
        filename: "app.js"
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.NoEmitOnErrorsPlugin()
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [
                    "babel-loader"
                ],
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.md$/,
                loader: "raw-loader"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader",
                        options: {
                            includePaths: ["./src"]
                        }
                    }
                ]
            }
        ]
    }
};
