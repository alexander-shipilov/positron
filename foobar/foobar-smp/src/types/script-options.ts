import type { ScriptOptionsFeatures } from "./script-options-features";

/**
 * @public
 */
export interface ScriptOptions {
  /**
   * The {@link ScriptOptions.author} property contains script author.
   */
  author: string;

  /**
   * The {@link ScriptOptions.features} property contains additional script
   * features.
   */
  features?: ScriptOptionsFeatures;

  /**
   * The {@link ScriptOptions.version} property contains script version.
   */
  version: string;
}
