import type { UnknownObject } from "../object";

import type { PropertyKeyOf } from "./property-key-of";
import type { PropertyName } from "./property-name";

/**
 * Function {@link propertyNames } returns an array of enumerable
 * string-keyed properties found directly in a given `object`.
 *
 * @param object - The object whose enumerable string-keyed properties are to be
 *   returned.
 *
 * @returns An array of enumerable string-keyed properties found directly
 *   upon the given `object`.
 *
 * @public
 */
export function propertyNames<TObject extends UnknownObject>(
  object: TObject,
): PropertyKeyOf<TObject, PropertyName>[] {
  return Object.keys(object);
}
