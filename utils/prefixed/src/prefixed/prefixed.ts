import type { UnknownObject } from "@positron/core";

import type { Prefix } from "../prefix";
import type { PrefixedKey } from "./prefixed-key";

/**
 * @public
 * Type {@link Prefixed} constructs a type by adding to the all string keys of
 *   `TProps` the prefix specified by `TPrefix` (string literal)
 *
 * @example
 * ```ts
 *  type WithBaz = Prefixed<"baz", { foo: unknown, bar: unknown }>
 *  // { "baz-foo": unknown, "baz-bar": unknown }
 * ```
 *
 * @param TProps - Type to add prefix to
 * @param TPrefix - String type of prefix
 */
export type Prefixed<TPrefix extends Prefix, TProps extends UnknownObject> = {
  [TKey in keyof TProps as PrefixedKey<TPrefix, TKey>]: TProps[TKey];
};
