import path from "path";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";

export default {
    input: path.resolve(__dirname, "src/index.js"),
    output: {
        file: path.resolve(__dirname, "index.js"),
        format: "cjs"
    },
    plugins: [
        babel({ include: path.resolve(__dirname, "src/**") }),
        commonjs({ include: path.resolve(__dirname, "node_modules/**") })
    ]
};
