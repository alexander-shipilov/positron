import type { UnknownObject, EmptyObject } from "@positron/core";
import { propertyKeys } from "@positron/core";

import type { Prefix } from "../prefix";
import type { PrefixedKey, UnprefixedKey } from "../prefixed";
import { isPrefixedKey } from "../prefixed";

/**
 * The {@link PickPrefixed} type constructs a type by picking the set of
 * properties from `TProps` whose prefixed by the specified `TPrefix`.
 *
 * @example
 * ```ts
 *  type FooPrefixedProps = PickPrefixed<
 *    { foo: unknown, "foo-bar": unknown, bar: unknown },
 *    "foo"
 *  >
 *  // { bar: unknown }
 * ```
 *
 * @typeParam TPrefix - String type of prefix
 * @typeParam TProps - Type to pick prefixed props
 *
 * @public
 */
export type PickPrefixed<
  TProps extends UnknownObject,
  TPrefix extends Prefix,
> = {
  [TKey in keyof TProps as TKey extends PrefixedKey<TPrefix>
    ? UnprefixedKey<TPrefix, TKey>
    : never]: TProps[TKey];
};

/**
 * The function {@link pickPrefixed} extracts props prefixed by `prefix` from
 *   the passed `props`
 *
 * @param prefix - The prefix
 * @param props - The props to pick
 *
 * @public
 */
export function pickPrefixed<
  TProps extends UnknownObject,
  TPrefix extends Prefix,
>(props: TProps, prefix: TPrefix): PickPrefixed<TProps, TPrefix> {
  const { length } = prefix;

  return propertyKeys(props).reduce(
    (prefixed: EmptyObject, key: keyof TProps) =>
      isPrefixedKey(prefix, key)
        ? Object.assign(prefixed, { [key.substring(length + 1)]: props[key] })
        : prefixed,
    {},
  ) as PickPrefixed<TProps, TPrefix>;
}
