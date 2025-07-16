import { hasOwnProperty } from "../property";

/**
 * Function {@link omit} TBD
 * @param value
 * @param keys
 */
export function omit<TValue, TKey extends PropertyKey>(
  value: TValue,
  keys: TKey[],
): Omit<TValue, TKey> {
  return keys.reduce(
    (current, key) => {
      if (hasOwnProperty(current, key)) {
        delete current[key];
      }

      return current;
    },
    { ...value },
  );
}
