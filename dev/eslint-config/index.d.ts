import type { Config } from "eslint/config";

declare namespace Configs {
  /**
   * Core configs.
   */
  const core: Config[];

  /**
   * TSDoc / JSDoc config.
   */
  const doc: Config[];

  /**
   * Jest config.
   */
  const jest: Config[];

  /**
   * Perfectionist config.
   */
  const perfectionist: Config[];

  /**
   * Stylistic configs.
   */
  const prettier: Config[];

  /**
   * Stylistic configs.
   */
  const stylistic: Config[];

  /**
   * React configs.
   */
  const react: Config[];
}

export default Configs;
