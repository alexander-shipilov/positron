import core from "./eslint.config.core.js";
import jest from "./eslint.config.jest.js";
import perfectionist from "./eslint.config.perfectionist.js";
import prettier from "./eslint.config.prettier.js";
import stylistic from "./eslint.config.stylistic.js";

export default [
  ...core, //
  ...jest,
  ...stylistic,
  ...prettier,
  ...perfectionist,
];
