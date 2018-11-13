module.exports = {
  rootDir: "./src",

  testRegex: "\\.spec\\.js$",
  testEnvironment: "jsdom",
  transform: {
    "\\.js$": "babel-jest"
  }
};
