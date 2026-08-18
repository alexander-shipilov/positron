import type { PropertyKeyOf } from "./property-key-of";
import { hasProperty } from "./has-property";

/**
 * @param key - TBD
 * @param target - TBD
 *
 * @public
 */
export function isPropertyOf<TTarget>(
  key: PropertyKey,
  target: TTarget,
): key is PropertyKeyOf<TTarget> {
  return hasProperty(target, key);
}
