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
 *  type PropsTuple = ExtractPrefixed<"foo", Props>
 *  // [ { foo: unknown, "bar-baz": unknown }, { bar: unknown } ]
 * ```
 *
 * @typeParam TKey - Type to extract prefixed props
 * @typeParam TPrefix - Prefix
 *
 * @public
 */
export type ExtractPrefixed<
  TPrefix extends Prefix,
  TProps extends UnknownObject,
> = [
  OmitPrefixed<TPrefix, TProps>, //
  PickPrefixed<TPrefix, TProps>,
];

/**
 * The {@link extractPrefixed } function extracts properties from the passed
 * `props` prefixed by the specified `prefix`
 *
 * @example
 * ```ts
 *  const props = { foo: 1, "ted-bar": 2 }
 *
 *  console.log(unprefix('ted', props))
 *  // [ { foo: 1 }, { bar: 2 } ]
 *
 *  console.log(unprefix('baz', props))
 *  // [ { foo: 1, "ted-bar": 2 }, {} ]
 * ```
 *
 * @param prefix - A prefix to extract
 * @param props - Props object
 *
 * @returns - Returns an array of props without `prefix`.
 *    Zero-indexed item contains props which have no the specified `prefix`
 *
 * @public
 */
export function extractPrefixed<
  TPrefix extends Prefix,
  TProps extends UnknownObject,
>(prefix: TPrefix, props: TProps): ExtractPrefixed<TPrefix, TProps> {
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
  ) as ExtractPrefixed<TPrefix, TProps>;
}
