import type { KeyOf } from "@positron/lang";

import type { Prefix } from "./prefix";
import type { PrefixedKey } from "./prefixed-key";

/**
 * The {@link Prefixed} type constructs a type by adding to the all string keys
 * of `TTarget` the prefix specified by `TPrefix`.
 *
 * @example
 * ```ts
 *  type Props = { bar: unknown, baz: unknown }
 *
 *  type PropsPrefixedByBaz = Prefixed<"foo", Props>
 *  // { "foo-bar": unknown, "foo-baz": unknown }
 * ```
 *
 * @typeParam TPrefix - The prefix.
 * @typeParam TTarget - The type to add prefix to.
 *
 * @public
 */
export type Prefixed<TPrefix extends Prefix, TTarget extends object> = {
  [
    TKey in KeyOf<TTarget, number | string> as PrefixedKey<TPrefix, TKey>
  ]: TTarget[TKey];
};
