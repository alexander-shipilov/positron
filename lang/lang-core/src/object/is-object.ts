import { isObjectType } from "@positron/lang-type";

import type { UnknownObject } from "./unknown-object";

import { typeOf } from "../type-of";

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
export function isObject(maybeObject: unknown): maybeObject is UnknownObject {
  return isObjectType(typeOf(maybeObject));
}
