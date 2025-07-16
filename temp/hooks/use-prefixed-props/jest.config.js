module.exports = {
  moduleNameMapper: {
    "^fixtures/(.*)$": "<rootDir>/fixtures/$1",
    "^src/(.*)$": "<rootDir>/src/$1",
  },
  preset: "ts-jest",
  testEnvironment: "node",
};
