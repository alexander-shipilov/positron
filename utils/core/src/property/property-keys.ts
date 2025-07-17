import type { UnknownObject } from "../object";

import type { PropertyKeyOf } from "./property-key-of";
import { propertyNames } from "./property-names";
import { propertySymbols } from "./property-symbols";

/**
 * The {@link propertyKeys } function returns an array of enumerable
 *   property keys found directly in a given `object`.
 *
 * @param object - The object whose enumerable properties are to be
 *   returned.
 *
 * @returns An array of all properties found directly upon the given `object`.
 *
 * @public
 */
export function propertyKeys<TValue extends UnknownObject>(
  object: TValue,
): PropertyKeyOf<TValue>[] {
  return [...propertyNames(object), ...propertySymbols(object)];
}
