import core from "./eslint.config.core.js";
import jest from "./eslint.config.jest.js";
import perfectionist from "./eslint.config.perfectionist.js";
import prettier from "./eslint.config.prettier.js";

export default [
  ...core, //
  ...jest,
  ...prettier,
  ...perfectionist,
];
