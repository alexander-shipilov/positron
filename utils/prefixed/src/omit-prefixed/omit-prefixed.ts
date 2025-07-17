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
 *    "foo",
 *    { foo: unknown; "foo-bar": unknown }
 *  >;
 *  // { foo: unknown }
 * ```
 *
 * @typeParam TPrefix - String type of prefix
 * @typeParam TProps - Type to omit prefixed props
 *
 * @public
 */
export type OmitPrefixed<
  TPrefix extends Prefix,
  TProps extends UnknownObject,
> = Omit<TProps, PrefixedKey<TPrefix>> & {};
