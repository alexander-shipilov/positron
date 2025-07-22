import { isObject } from "../object";

import type { PropertyOwner } from "./property-owner";

export function isPropertyOf<TKey extends PropertyKey>(
  key: TKey,
  target: unknown,
): target is PropertyOwner<TKey> {
  return isObject(target) && key in target;
}
