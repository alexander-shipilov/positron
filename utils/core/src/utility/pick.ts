import type { PropertyKeyOf } from "../property";
import { isOwnPropertyOwner } from "../property";

/**
 * The {@link pick} function TBD
 * @param value
 * @param keys
 */
export function pick<TValue, TKey extends PropertyKeyOf<TValue>>(
  value: TValue,
  ...keys: TKey[]
): Pick<TValue, TKey> {
  return keys.reduce(
    (current, key) => {
      if (isOwnPropertyOwner(value, key)) {
        current[key] = value[key];
      }

      return current;
    },
    {} as Pick<TValue, TKey>,
  );
}
