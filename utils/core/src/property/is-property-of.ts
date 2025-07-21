import { isObject } from "../object";

import type { PropertyOwner } from "./property-owner";

export function isPropertyOf<TKey extends PropertyKey, TTarget = unknown>(
  target: PropertyOwner<TKey> | TTarget,
  key: TKey,
): target is PropertyOwner<TKey> {
  return isObject(target) && key in target;
}
