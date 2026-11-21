import stylistic from "@stylistic/eslint-plugin";
import { defineConfig } from "eslint/config";

export default defineConfig(
  stylistic.configs.recommended,
  stylistic.configs.customize({
    commaDangle: "always-multiline",
    indent: 2,
    jsx: false,
    quotes: "double",
    semi: true,
  }),
);
