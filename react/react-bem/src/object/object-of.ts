import type { ObjectKeyOf } from "./object-key-of";
import type { ObjectPick } from "./object-pick";

/**
 * The {@link ObjectOf} type returns object descriptors of the passed
 * `TProps`.
 *
 * @typeParam TProps - The properties to collect object descriptors from.
 * @typeParam TKey - The object descriptor key.
 *
 * @public
 */
export type ObjectOf<
  TProps,
  TKey extends ObjectKeyOf<TProps> = ObjectKeyOf<TProps>,
> = ObjectPick<TProps>[TKey];
