module.exports = {
  moduleNameMapper: {
    "^types/(.*)$": "<rootDir>/src/types/$1",
    "^utils/(.*)$": "<rootDir>/src/utils/$1",
  },
  preset: "ts-jest",
  roots: ["<rootDir>/specs/"],
  testEnvironment: "node",
};
