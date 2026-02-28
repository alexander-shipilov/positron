import type { UnknownObject } from "@positron/core";
import { propertyKeys } from "@positron/core";

import type { OmitPrefixed } from "../omit-prefixed";
import type { PickPrefixed } from "../pick-prefixed";
import type { Prefix } from "../prefix";
import { isPrefixedKey } from "../prefixed";

/**
 * The {@link ExtractPrefixed} type constructs a tuple type of `TProps` without
 * properties prefixed by the specified `TPrefix` and picked prefixed
 * properties specified by the `TPrefix`.
 *
 * This is a return type of the function {@link extractPrefixed}.
 *
 * @example
 * ```ts
 *  type Props = { foo: unknown, "foo-bar": unknown, "bar-baz": unknown }
 *
 *  type PropsTuple = ExtractPrefixed<Props, "foo">
 *  // [ { foo: unknown, "bar-baz": unknown }, { bar: unknown } ]
 * ```
 *
 * @typeParam TPrefix - Prefix
 * @typeParam TKey - Type to extract prefixed props
 *
 * @public
 */
export type ExtractPrefixed<
  TProps extends UnknownObject,
  TPrefix extends Prefix,
> = [
  OmitPrefixed<TProps, TPrefix>, //
  PickPrefixed<TProps, TPrefix>,
];

/**
 * The {@link extractPrefixed } function extracts properties from the passed
 * `props` prefixed by the specified `prefix`
 *
 * @example
 * ```ts
 *  const props = { foo: 1, "ted-bar": 2 }
 *
 *  console.log(extractPrefixed(props, 'ted'))
 *  // [ { foo: 1 }, { bar: 2 } ]
 *
 *  console.log(extractPrefixed(props, 'baz'))
 *  // [ { foo: 1, "ted-bar": 2 }, {} ]
 * ```
 *
 * @param props - Props object
 * @param prefix - A prefix to extract
 *
 * @returns - Returns an array of props without `prefix`.
 *    Zero-indexed item contains props which have no the specified `prefix`
 *
 * @public
 */
export function extractPrefixed<
  TProps extends UnknownObject,
  TPrefix extends Prefix,
>(props: TProps, prefix: TPrefix): ExtractPrefixed<TProps, TPrefix> {
  const { length } = prefix;

  return propertyKeys(props).reduce(
    (extracted: [UnknownObject, UnknownObject], key: keyof TProps) => {
      if (isPrefixedKey(prefix, key)) {
        extracted[1][key.substring(length + 1)] = props[key];
      } else {
        extracted[0][key] = props[key];
      }

      return extracted;
    },
    [{}, {}],
  ) as ExtractPrefixed<TProps, TPrefix>;
}
