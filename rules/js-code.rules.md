# JavaScript Code Rules

## 1. Usage Restrictions

- JavaScript files are prohibited in `src/` and MUST only be used for tool
  configuration files in the package root or `config/` directory.

- Any JavaScript configuration file that uses ES module syntax (`import` or
  `export`) MUST use the `.mjs` extension (e.g., `eslint.config.mjs`,
  `jest.config.mjs`).
