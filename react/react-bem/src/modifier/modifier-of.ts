import type { ModifierKeyOf } from "./modifier-key-of";
import type { ModifierPick } from "./modifier-pick";

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
> = ModifierPick<TProps>[TKey];
