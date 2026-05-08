import type { Config } from "eslint/config";

declare namespace Configs {
  /**
   * Core configs.
   */
  const core: Config[];

  /**
   * Jest config.
   */
  const jest: Config[];

  /**
   * Perfectionist config.
   */
  const perfectionist: Config[];

  /**
   * Prettier configs.
   */
  const prettier: Config[];

  /**
   * React configs.
   */
  const react: Config[];
}

export default Configs;
