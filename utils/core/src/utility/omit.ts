import { isOwnPropertyOwner } from "../property";

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
      if (isOwnPropertyOwner(current, key)) {
        delete current[key];
      }

      return current;
    },
    { ...value },
  );
}
