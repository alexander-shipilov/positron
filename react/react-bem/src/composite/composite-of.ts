import type { CompositeKeyOf } from "./composite-key-of";
import type { PickComposites } from "./pick-composites";

/**
 * The {@link CompositeOf} type returns composite descriptors of the passed
 * `TProps`.
 *
 * @typeParam TProps - The properties to collect composite descriptors from.
 * @typeParam TKey - The composite descriptor key.
 *
 * @public
 */
export type CompositeOf<
  TProps,
  TKey extends CompositeKeyOf<TProps> = CompositeKeyOf<TProps>,
> = PickComposites<TProps>[TKey];
