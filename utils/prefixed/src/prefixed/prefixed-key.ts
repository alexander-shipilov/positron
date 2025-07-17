import type { PropertyName } from "@positron/lang-core";

import type { Prefix, PrefixSeparator } from "../prefix";

/**
 * @public
 * Type {@link PrefixedKey} constructs a string type by adding the specified
 *   `TPrefix` (string literal) to the given `TKey` (string literal)
 *
 * @example
 * ```ts
 *  type BarKey = PrefixedKey<"foo", "bar">
 *  // "bar-foo"
 * ```
 */
export type PrefixedKey<
  TPrefix extends Prefix,
  TKey extends PropertyKey = PropertyName,
> = TKey extends PropertyName ? `${TPrefix}${PrefixSeparator}${TKey}` : TKey;
