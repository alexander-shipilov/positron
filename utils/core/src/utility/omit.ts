import { isOwnPropertyOf } from "../property";

/**
 * The {@link omit} function TBD
 * @param value
 * @param keys
 */
export function omit<TValue, TKey extends PropertyKey>(
  value: TValue,
  keys: TKey[],
): Omit<TValue, TKey> {
  return keys.reduce(
    (current, key) => {
      if (isOwnPropertyOf(key, current)) {
        delete current[key];
      }

      return current;
    },
    { ...value },
  );
}
