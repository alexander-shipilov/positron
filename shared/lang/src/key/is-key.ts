import { Type } from "../type/type";
import { typeOf } from "../type/type-of";

/**
 * The {@link isKey} type-guard function determines whether the passed
 * `maybeKey` is a `PropertyKey`.
 *
 * @param maybeKey - The value to be tested for being a `PropertyKey`.
 *
 * @returns The boolean value `true` if the given `maybeKey` is a
 *   `PropertyKey`. Otherwise, `false`.
 *
 * @public
 */
export function isKey(maybeKey: unknown): maybeKey is PropertyKey {
  const maybeKeyType = typeOf(maybeKey);

  return (
    maybeKeyType === Type.Number ||
    maybeKeyType === Type.String ||
    maybeKeyType === Type.Symbol
  );
}
