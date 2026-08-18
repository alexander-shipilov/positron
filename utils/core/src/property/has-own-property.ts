import { isNonNullable } from "../null";

import type { PropertyOwner } from "./property-owner";

/**
 * The {@link hasOwnProperty} function determines whether the passed
 * `value` has the own property keyed by the given `key`.
 *
 * @param value - TBD
 * @param key - TBD
 *
 * @returns `true` if `value` has the own property `key`; otherwise, `false`.
 *
 * @public
 */
export function hasOwnProperty<TKey extends PropertyKey>(
  value: unknown,
  key: TKey,
): value is PropertyOwner<TKey> {
  return isNonNullable(value) && Object.hasOwn(value, key);
}
