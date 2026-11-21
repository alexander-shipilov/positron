import core from "./eslint.config.core.mjs";
import jest from "./eslint.config.jest.mjs";
import perfectionist from "./eslint.config.perfectionist.mjs";
import prettier from "./eslint.config.prettier.mjs";
import stylistic from "./eslint.config.stylistic.mjs";

export default [
  ...core, //
  ...jest,
  ...stylistic,
  ...prettier,
  ...perfectionist,
];
