/**
 * The {@link uppercase} function converts the given string to uppercase. Added
 * for compatibility with the `Uppercase` type.
 *
 * @example
 * ```ts
 * import { uppercase } from "@positron/lang";
 *
 * console.log(uppercase("fooBar"));
 * // >> "FOOBAR"
 * ```
 *
 * @param value - The string to convert to uppercase.
 *
 * @returns The uppercased string.
 *
 * @public
 */
export function uppercase<TValue extends string>(
  value: TValue,
): Uppercase<TValue> {
  return value.toUpperCase() as Uppercase<TValue>;
}
