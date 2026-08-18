import { isNonNullable } from "../null";

import type { PropertyOwner } from "./property-owner";

/**
 * The {@link hasProperty} function determines whether the passed
 * `value` has the property keyed by the given `key`.
 *
 * @param value - TBD
 * @param key - TBD
 *
 * @returns `true` if `value` has the property `key`; otherwise, `false`.
 *
 * @public
 */
export function hasProperty<TKey extends PropertyKey>(
  value: unknown,
  key: TKey,
): value is PropertyOwner<TKey> {
  return isNonNullable(value) && key in Object(value);
}
