import type { ElementKeyOf } from "./element-key-of";
import type { PickElements } from "./pick-elements";

/**
 * The {@link ElementOf} type returns element descriptors of the passed
 * `TProps`.
 *
 * @typeParam TProps - The properties to collect element descriptors from.
 * @typeParam TKey - The element descriptor key.
 *
 * @public
 */
export type ElementOf<
  TProps,
  TKey extends ElementKeyOf<TProps> = ElementKeyOf<TProps>,
> = PickElements<TProps>[TKey];
