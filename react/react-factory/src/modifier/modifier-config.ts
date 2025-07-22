import type { ModifierMeta } from "./modifier-meta";
import type { ModifierValue } from "./modifier-value";

/**
 * The {@link ModifierConfig} describes the configuration object used to render
 * the element.
 *
 * @public
 */
export interface ModifierConfig<
  TValue extends ModifierValue,
  TMeta extends ModifierMeta,
> {
  /**
   * The {@link meta} property contains additional metadata about the element
   * (className, etc.). You can specify any metadata by passing the appropriate
   * parameter to the {@link Modifier} type.
   */
  readonly meta: TMeta;

  /**
   * The {@link props} property contains a value of element.
   */
  readonly value: TValue;
}
