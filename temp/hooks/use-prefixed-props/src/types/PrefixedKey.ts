import type { Property } from "@positron/lang";

import type { Prefix } from "./Prefix";

/**
 * Construct a string type by adding the specified `TPrefix` (string literal)
 * to the given `TKey` (string literal)
 * @public
 *
 * @example
 * ```ts
 *  type BarKey = PrefixedKey<"foo", "bar">
 *  // "bar-foo"
 * ```
 */
export type PrefixedKey<TKey extends Property, TPrefix> = TKey extends string
  ? TPrefix extends Prefix
    ? `${TPrefix}-${TKey}`
    : TKey
  : TKey;
