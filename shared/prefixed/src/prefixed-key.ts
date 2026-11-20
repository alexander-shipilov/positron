import type { Prefix } from "./prefix";
import type { PrefixSeparator } from "./prefix-separator";

/**
 * The {@link PrefixedKey} type constructs a string type by adding the
 * specified `TPrefix` to the given `TKey`.
 *
 * @example
 * ```ts
 *  type BarKey = PrefixedKey<"bar", "foo">
 *  // "bar-foo"
 * ```
 *
 * @typeParam TPrefix - The prefix.
 * @typeParam TKey - The key to add prefix.
 *
 * @public
 */
export type PrefixedKey<
  TPrefix extends Prefix,
  TKey extends number | string = string,
> = `${TPrefix}${PrefixSeparator}${TKey}`;
