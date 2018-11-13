const path = require("path");

module.exports = {
  rootDir: "./src",
  testRegex: "\\.spec\\.js$",
  setupFiles: [
    path.resolve(__dirname, "src/__tests__/setup.js")
  ],
  transform: {
    "\\.js$": "babel-jest"
  }
};
