import type { PropertyName } from "@positron/lang-core";

import type { Prefix } from "../prefix";
import type { PrefixedKey } from "./prefixed-key";

/**
 * Type {@link UnprefixedKey} constructs a literal string type by stripping
 * the specified the `TPrefix` literal from the `TKey` literal. If `TKey` is not
 * prefixed by the `TPrefix` the `TKey` is returned.
 *
 * @example
 * ```ts
 *  type FooBarWithoutFoo = UnprefixedKey<"foo-bar", "foo">
 *  // "foo"
 *
 *  type FooBarWithoutBaz = UnprefixedKey<"foo-bar", "baz">
 *  // "foo-bar"
 * ```
 *
 * @param TKey - Key to remove prefix
 * @param TPrefix - Prefix
 *
 * @public
 */
export type UnprefixedKey<
  TPrefix extends Prefix,
  TKey extends PropertyKey = PropertyName,
> = TKey extends PrefixedKey<TPrefix, infer Unprefixed> ? Unprefixed : TKey;
