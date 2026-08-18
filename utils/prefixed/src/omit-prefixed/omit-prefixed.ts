import type { UnknownObject } from "@positron/core";

import type { Prefix } from "../prefix";
import type { PrefixedKey } from "../prefixed";

/**
 * The {@link OmitPrefixed} type constructs a type with the properties of
 * `TProps` except for those which has the passed prefix `TPrefix`.
 *
 * @example
 * ```ts
 *  type PropsWithoutFooPrefixed = OmitPrefixed<
 *    { foo: unknown; "foo-bar": unknown, bar: unknown },
 *    "foo"
 *  >;
 *  // { foo: unknown, bar: unknown }
 * ```
 *
 * @typeParam TProps - Type to omit prefixed props
 * @typeParam TPrefix - String type of prefix
 *
 * @public
 */
export type OmitPrefixed<
  TProps extends UnknownObject,
  TPrefix extends Prefix,
> = Omit<TProps, PrefixedKey<TPrefix>> & {};
