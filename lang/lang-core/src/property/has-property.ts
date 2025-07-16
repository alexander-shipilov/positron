import { isObject } from "../object";

export function hasProperty<TKey extends PropertyKey, TTarget = unknown>(
  target: Record<TKey, unknown> | TTarget,
  key: TKey,
): target is Record<TKey, unknown> {
  return isObject(target) && key in target;
}
