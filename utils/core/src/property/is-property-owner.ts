import { isNonNullable } from "../null";

import type { PropertyOwner } from "./property-owner";

export function isPropertyOwner<TKey extends PropertyKey>(
  target: unknown,
  key: TKey,
): target is PropertyOwner<TKey> {
  return isNonNullable(target) && key in Object(target);
}
