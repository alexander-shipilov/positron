import type { AnyObject } from "../object";

import type { PropertyKeyOf } from "./property-key-of";
import type { PropertyName } from "./property-name";

/**
 * The {@link propertyNames } function returns an array of enumerable
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
export function propertyNames<TObject extends AnyObject>(
  object: TObject,
): PropertyKeyOf<TObject, PropertyName>[] {
  return Object.keys(object) as PropertyKeyOf<TObject, PropertyName>[];
}
