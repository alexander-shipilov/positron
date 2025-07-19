import type { ModifierKeyOf } from "./modifier-key-of";
import type { PickModifiers } from "./pick-modifiers";

/**
 * The {@link ModifierOf} type returns modifier descriptors of the passed
 * `TProps`.
 *
 * @typeParam TProps - The properties to collect modifier descriptors from.
 * @typeParam TKey - The modifier descriptor key.
 *
 * @public
 */
export type ModifierOf<
  TProps,
  TKey extends ModifierKeyOf<TProps> = ModifierKeyOf<TProps>,
> = PickModifiers<TProps>[TKey];
