import { Type } from "../type/type";
import { typeOf } from "../type/type-of";

/**
 * The {@link isObject} type-guard function determines whether the passed
 * `maybeObject` is an `object`.
 *
 * @param maybeObject - The value to be tested for being an `object`.
 *
 * @returns The boolean value `true` if the given `maybeObject` is an
 *   `object`. Otherwise, `false`.
 *
 * @public
 */
export function isObject(maybeObject: unknown): maybeObject is object {
  return typeOf(maybeObject) === Type.Object;
}
