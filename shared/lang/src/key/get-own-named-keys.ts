import type { KeyOf } from "./key-of";

/**
 * The {@link getOwnNamedKeys } function returns an array of enumerable
 * string-keyed properties found directly in the given `object`.
 *
 * @param object - The object whose enumerable string-keyed properties are to be
 *   returned.
 *
 * @returns An array of enumerable string-keyed properties found directly
 *   upon the given `object`.
 *
 * @public
 */
export function getOwnNamedKeys<TObject extends object>(
  object: TObject,
): KeyOf<TObject, string>[] {
  return Object.keys(object) as KeyOf<TObject, string>[];
}
