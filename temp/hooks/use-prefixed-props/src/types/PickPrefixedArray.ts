import type { OmitPrefixed } from "./OmitPrefixed";
import type { PickPrefixed } from "./PickPrefixed";

/**
 * Constructs a tuple type by picking the sets of properties with the prefixes
 * specified by `TPrefixes` (a tuple of string literals) from `TProps`.
 * @public
 *
 * @example
 * ```ts
 *  type Props = { foo: unknown, "foo-bar": unknown, "bar-baz": unknown }
 *
 *  type FooBarProps = PickPrefixedArray<Props, ["foo", "bar"]>
 *  // [ { bar: unknown }, { baz: unknown } ]
 * ```
 */
export type PickPrefixedArray<TProps, TPrefixes> = TPrefixes extends [
  infer TFirst,
  ...infer TRest,
]
  ? [
      PickPrefixed<TProps, TFirst>,
      ...PickPrefixedArray<OmitPrefixed<TProps, TFirst>, TRest>,
    ]
  : [];
