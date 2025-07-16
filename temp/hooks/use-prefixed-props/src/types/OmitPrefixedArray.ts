import type { OmitPrefixed } from "./OmitPrefixed";

/**
 * Construct a type with the properties of `TProps` except for those which has
 * prefixes specified by `TPrefixes` (a tuple of string literals).
 * @public
 *
 * @example
 * ```ts
 *  type Props = { foo: unknown, "foo-bar": unknown, "bar-baz": unknown }
 *
 *  type PropsExceptFoo = OmitPrefixedArray<Props, ["foo", "bar"]>
 *  // { foo: unknown }
 * ```
 *
 * @typeParam TProps - Type to omit prefixed props
 * @typeParam TPrefix - Array type of prefixes
 */
export type OmitPrefixedArray<TProps, TPrefixes> = TPrefixes extends [
  infer TFirst,
  ...infer TRest,
]
  ? OmitPrefixedArray<OmitPrefixed<TProps, TFirst>, TRest>
  : TProps;
