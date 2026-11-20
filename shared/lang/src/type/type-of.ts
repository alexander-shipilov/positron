import { Type } from "./type";

/**
 * The {@link typeOf} function returns the type of the passed `value`.
 *
 * This function acts the same way as the `typeof` operator, except for
 * `null`, for which it returns "null".
 *
 * @example
 * ```ts
 *  console.log(typeOf(""));
 *  // >> "string"
 *
 *  console.log(typeOf(null));
 *  // >> "null"
 * ```
 *
 * @param value - The value
 *
 * @public
 */
export function typeOf(value: unknown): Type {
  return value === null ? Type.Null : (typeof value as unknown as Type);
}
