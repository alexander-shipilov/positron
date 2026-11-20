import type { KeyOf } from "./key-of";
import { getOwnNamedKeys } from "./get-own-named-keys";
import { getOwnSymbolKeys } from "./get-own-symbol-keys";

/**
 * The {@link getOwnKeys } function returns an array of enumerable
 * property keys found directly in a given `object`.
 *
 * @param object - The object whose enumerable properties are to be
 *   returned.
 *
 * @returns An array of all properties found directly upon the given `object`.
 *
 * @public
 */
export function getOwnKeys<TValue extends object>(
  object: TValue,
): KeyOf<TValue, string | symbol>[] {
  return [...getOwnNamedKeys(object), ...getOwnSymbolKeys(object)];
}
