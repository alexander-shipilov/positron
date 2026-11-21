import { Type } from "./type";

/**
 * The {@link typeOf} function returns the type of the passed `value`.
 *
 * This function acts the same way as the `typeof` operator, except for `null`,
 * for which it returns {@link Type.Null}.
 *
 * @example
 * ```ts
 * import { typeOf } from "@positron/lang";
 *
 * console.log(typeOf(""));
 * // >> "string"
 *
 * console.log(typeOf(null));
 * // >> "null"
 * ```
 *
 * @param value - The value to inspect.
 *
 * @returns The {@link Type} member corresponding to `value`.
 *
 * @public
 */
export function typeOf(value: unknown): Type {
  return value === null ? Type.Null : (typeof value as unknown as Type);
}
