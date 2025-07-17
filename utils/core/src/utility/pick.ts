import type { PropertyKeyOf } from "../property";

import { hasOwnProperty } from "../property";

/**
 * Function {@link pick} TBD
 * @param value
 * @param keys
 */
export function pick<TValue, TKey extends PropertyKeyOf<TValue>>(
  value: TValue,
  ...keys: TKey[]
): Pick<TValue, TKey> {
  return keys.reduce(
    (current, key) => {
      if (hasOwnProperty(value, key)) {
        current[key] = value[key];
      }

      return current;
    },
    {} as Pick<TValue, TKey>,
  );
}
