import { isObjectType } from "../object-type";
import { typeOf } from "../type-of";

import type { AnyObject } from "./any-object";

/**
 * The {@link isObject} function determines whether the passed
 * {@link maybeObject} is an `object`.
 *
 * @param maybeObject - The value to be tested for being an `object`.
 *
 * @returns The boolean value `true` if the given {@link maybeObject} is an
 *   `object`. Otherwise, `false`.
 *
 * @public
 */
export function isObject(maybeObject: unknown): maybeObject is AnyObject {
  return isObjectType(typeOf(maybeObject));
}
