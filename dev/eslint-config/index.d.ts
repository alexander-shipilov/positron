import type { Config } from "eslint/config";

/**
 * The `Configs` namespace represents the flat ESLint configuration presets
 * exported by `@positron/eslint-config`.
 *
 * @public
 */
declare namespace Configs {
  /**
   * The `Configs.core` read-only property provides core TypeScript and JavaScript
   * lint rules.
   *
   * @public
   */
  const core: Config[];

  /**
   * The `Configs.docs` read-only property provides TSDoc and `@example` lint
   * rules.
   *
   * @public
   */
  const docs: Config[];

  /**
   * The `Configs.jest` read-only property provides Jest test lint rules.
   *
   * @public
   */
  const jest: Config[];

  /**
   * The `Configs.perfectionist` read-only property provides deterministic AST
   * sorting rules.
   *
   * @public
   */
  const perfectionist: Config[];

  /**
   * The `Configs.prettier` read-only property provides Prettier formatting
   * integration.
   *
   * @public
   */
  const prettier: Config[];

  /**
   * The `Configs.stylistic` read-only property provides stylistic code layout
   * rules.
   *
   * @public
   */
  const stylistic: Config[];
}

export default Configs;
