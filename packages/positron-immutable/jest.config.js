module.exports = {
    rootDir: "./src",
    testEnvironment: "jsdom",
    testRegex: "\\.spec\\.js$",
    transform: {
        "\\.js$": "babel-jest"
    }
};
