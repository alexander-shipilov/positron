import type { OmitPrefixedArray } from "./OmitPrefixedArray";
import type { PickPrefixedArray } from "./PickPrefixedArray";
import type { Prefix } from "./Prefix";

/**
 * Constructs a tuple type of `TProps` without specified `TPrefixes` and picked
 * prefixed properties for each prefix specified by the `TPrefixes`.
 * This is a return type of hook {@link usePrefixedProps}.
 * @public
 *
 * @example
 * ```ts
 *  type Props = { foo: unknown, "foo-bar": unknown, "bar-baz": unknown }
 *
 *  type PropsTuple = PrefixedProps<Props, ["foo", "bar"]>
 *  // [ { foo: unknown }, { bar: unknown }, { baz: unknown } ]
 * ```
 *
 * @typeParam TKey - Type to extract prefixed props
 * @typeParam TPrefixes - Prefixes
 */
export type PrefixedProps<TProps, TPrefixes extends Prefix[]> = [
  OmitPrefixedArray<TProps, TPrefixes>,
  ...PickPrefixedArray<TProps, TPrefixes>,
];
