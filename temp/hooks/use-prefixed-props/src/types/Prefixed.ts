import type { PrefixedKey } from "./PrefixedKey";

/**
 * Construct a type by adding to the all string keys of `TProps` the prefix
 * specified by `TPrefix` (string literal)
 * @public
 *
 * @example
 * ```ts
 *  type Props = { foo: unknown, bar: unknown }
 *
 *  type BazProps = Prefixed<Props, "baz">
 *  // { "baz-foo": unknown, "baz-bar": unknown }
 * ```
 */
export type Prefixed<TProps, TPrefix> = {
  [TKey in keyof TProps as PrefixedKey<TKey, TPrefix>]: TProps[TKey];
};
