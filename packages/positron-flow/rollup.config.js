import path from "path";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";

export default {
    input: path.resolve(__dirname, "./src/index.js"),
    output: {
        file: path.resolve(__dirname, "./index.js"),
        format: "cjs"
    },
    plugins: [
        babel({ include: "src/**" }),
        commonjs({ include: "node_modules/**" }),
        resolve({
            "jsnext": true
        })
    ]
};
