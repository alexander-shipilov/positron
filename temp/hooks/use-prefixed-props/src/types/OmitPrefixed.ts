import type { UnprefixedKey } from "./UnprefixedKey";

/**
 * Construct a type with the properties of `TProps` except for those which has
 * prefix `TPrefix` (string literal).
 * @public
 *
 * @example
 * ```ts
 *  type Props = { foo: unknown, "foo-bar": unknown }
 *  type ExceptFoo = OmitPrefixed<Props, "foo">
 *  // { foo: unknown }
 * ```
 *
 * @typeParam TProps - Type to omit prefixed props
 * @typeParam TPrefix - String type of prefix
 */
export type OmitPrefixed<TProps, TPrefix> = {
  [TKey in keyof TProps as UnprefixedKey<TKey, TPrefix> extends never
    ? TKey
    : never]: TProps[TKey];
};
