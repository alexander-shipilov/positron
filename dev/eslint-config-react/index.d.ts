import type { Config } from "eslint/config";

import type BaseConfigs from "@positron/eslint-config";

/**
 * The `Configs` namespace represents the flat ESLint configuration presets
 * exported by `@positron/eslint-config-react`.
 *
 * @public
 */
declare namespace Configs {
  /**
   * The `Configs.core` read-only property provides core TypeScript and
   * JavaScript lint rules.
   *
   * @public
   */
  const core: typeof BaseConfigs.core;

  /**
   * The `Configs.docs` read-only property provides TSDoc and `@example` lint
   * rules.
   *
   * @public
   */
  const docs: typeof BaseConfigs.docs;

  /**
   * The `Configs.jest` read-only property provides Jest test lint rules.
   *
   * @public
   */
  const jest: typeof BaseConfigs.jest;

  /**
   * The `Configs.perfectionist` read-only property provides deterministic AST
   * sorting rules.
   *
   * @public
   */
  const perfectionist: typeof BaseConfigs.perfectionist;

  /**
   * The `Configs.prettier` read-only property provides Prettier formatting
   * integration.
   *
   * @public
   */
  const prettier: typeof BaseConfigs.prettier;

  /**
   * The `Configs.react` read-only property provides React, React Hooks, and
   * JSX lint rules.
   *
   * @public
   */
  const react: Config[];

  /**
   * The `Configs.stylistic` read-only property provides stylistic code layout
   * rules.
   *
   * @public
   */
  const stylistic: typeof BaseConfigs.stylistic;
}

export default Configs;
