import type { Prefix } from "./prefix";
import type { PrefixedKey } from "./prefixed-key";

/**
 * The {@link OmitPrefixed} type creates a type containing the properties of
 * `TTarget`, excluding those that have the given prefix `TPrefix`.
 *
 * @example
 * ```ts
 *  type Props = { foo: unknown; "foo-bar": unknown, bar: unknown };
 *
 *  type PropsWithoutPrefixedByFoo = OmitPrefixed<"foo", Props>;
 *  // { foo: unknown, bar: unknown }
 * ```
 *
 * @typeParam TPrefix - The prefix.
 * @typeParam TProps - The type to exclude prefixed by `TPrefix` props from.
 *
 * @public
 */
export type OmitPrefixed<TPrefix extends Prefix, TTarget extends object> = Omit<
  TTarget,
  PrefixedKey<TPrefix>
>;
