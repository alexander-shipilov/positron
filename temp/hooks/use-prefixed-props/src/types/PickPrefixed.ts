import type { UnprefixedKey } from "./UnprefixedKey";

/**
 * Constructs a type by picking the set of properties with prefix specified by
 * `TPrefix` (string literal) from `TProps`.
 * @public
 *
 * @example
 * ```ts
 *  type Props = { foo: unknown, "foo-bar": unknown }
 *
 *  type FooProps = PickPrefixed<Props, "foo">
 *  // { bar: unknown }
 * ```
 */
export type PickPrefixed<TProps, TPrefix> = {
  [TKey in keyof TProps as UnprefixedKey<TKey, TPrefix>]: TProps[TKey];
};
