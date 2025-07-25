import { isNumberType } from "../number-type";
import { isStringType } from "../string-type";
import { isSymbolType } from "../symbol-type";
import { typeOf } from "../type-of";

/**
 * The {@link isPropertyKey} function determines whether the passed
 * {@link maybePropertyKey} is a `PropertyKey`
 *
 * @param maybePropertyKey - The value to be checked.
 *
 * @returns `true` if value is a `PropertyKey`; otherwise, `false`.
 *
 * @public
 */
export function isPropertyKey(
  maybePropertyKey: unknown,
): maybePropertyKey is PropertyKey {
  const type = typeOf(maybePropertyKey);

  return (
    isNumberType(type) || //
    isStringType(type) ||
    isSymbolType(type)
  );
}
