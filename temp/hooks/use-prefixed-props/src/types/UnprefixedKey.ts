import type { Property } from "@positron/lang";

import type { PrefixedKey } from "./PrefixedKey";

/**
 * Returns a string literal type by stripping the specified `TPrefix` from
 * literal `TKey` or `never` if `TKey` is not prefixed by the `TPrefix`
 * @public
 *
 * @example
 * ```ts
 *  type FooBarWithoutFoo = UnprefixedKey<"foo-bar", "foo">
 *  // "foo"
 *
 *  type FooBarWithoutBaz = UnprefixedKey<"foo-bar", "baz">
 *  // never
 * ```
 *
 * @typeParam TKey - Key to remove prefix
 * @typeParam TPrefix - Prefix
 */
export type UnprefixedKey<TKey extends Property, TPrefix> =
  TKey extends PrefixedKey<infer TUnprefixed, TPrefix> ? TUnprefixed : never;
