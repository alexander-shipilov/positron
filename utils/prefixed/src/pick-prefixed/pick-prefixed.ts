import type { UnknownObject } from "@positron/core";
import { propertyKeys } from "@positron/core";

import type { Prefix } from "../prefix";
import type { UnprefixedKey } from "../prefixed";
import type { PrefixedKey } from "../prefixed";
import { isPrefixedKey } from "../prefixed";

/**
 * The {@link PickPrefixed} type constructs a type by picking the set of
 * properties from `TProps` whose prefixed by the specified `TPrefix`.
 *
 * @example
 * ```ts
 *  type FooPrefixedProps = PickPrefixed<
 *    "foo",
 *    { foo: unknown, "foo-bar": unknown }
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
  TPrefix extends Prefix,
  TProps extends UnknownObject,
> = {
  [TKey in keyof TProps as TKey extends PrefixedKey<TPrefix>
    ? UnprefixedKey<TPrefix, TKey>
    : never]: TProps[TKey];
};

/**
 * @public
 * The function {@link pickPrefixed} extracts props prefixed by `prefix` from
 *   the passed `props`
 *
 * @param prefix - The prefix
 * @param props - The props to pick
 */
export function pickPrefixed<
  TPrefix extends Prefix,
  TProps extends UnknownObject,
>(prefix: TPrefix, props: TProps): PickPrefixed<TPrefix, TProps> {
  const { length } = prefix;

  return propertyKeys(props).reduce(
    (prefixed: UnknownObject, key: keyof TProps) =>
      isPrefixedKey(prefix, key)
        ? Object.assign(prefixed, { [key.substring(length + 1)]: props[key] })
        : prefixed,
    {},
  ) as PickPrefixed<TPrefix, TProps>;
}
