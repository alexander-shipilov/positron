import { getOwnNamedKeys } from "@positron/lang";

import type { OmitPrefixed } from "./omit-prefixed";
import type { PickPrefixed } from "./pick-prefixed";
import type { Prefix } from "./prefix";
import { isPrefixedKey } from "./is-prefixed-key";

/**
 * The {@link extractPrefixed } function extracts properties prefixed by the
 * specified `prefix` from the given `target`.
 *
 * @example
 * ```ts
 *  const props = { foo: 1, "ted-bar": 2 }
 *
 *  console.log(extractPrefixed('ted', props))
 *  // >> [ { foo: 1 }, { bar: 2 } ]
 *
 *  console.log(extractPrefixed('baz', props))
 *  // >> [ { foo: 1, "ted-bar": 2 }, {} ]
 * ```
 *
 * @param prefix - The prefix.
 * @param target - The object to extract the properties prefixed by the
 *   `prefix` from.
 *
 * @returns A tuple consisting of:
 *
 *  - properties of the given `target`, excluding properties that have the
 *    specified `prefix`;
 *
 *  - properties of the given `target` that originally had the specified
 *    `prefix`, but from which that prefix has been removed.
 *
 * @public
 */
export function extractPrefixed<TPrefix extends Prefix, TTarget extends object>(
  prefix: TPrefix,
  target: TTarget,
): [OmitPrefixed<TPrefix, TTarget>, PickPrefixed<TPrefix, TTarget>] {
  const { length } = prefix;

  return getOwnNamedKeys(target).reduce(
    (
      extracted: [Record<PropertyKey, unknown>, Record<string, unknown>],
      key,
    ) => {
      if (isPrefixedKey(prefix, key)) {
        extracted[1][key.substring(length + 1)] = target[key];
      } else {
        extracted[0][key] = target[key];
      }

      return extracted;
    },
    [{}, {}],
  ) as [OmitPrefixed<TPrefix, TTarget>, PickPrefixed<TPrefix, TTarget>];
}
