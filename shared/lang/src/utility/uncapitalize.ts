/**
 * The {@link uncapitalize} function converts the first letter of the passed
 * string to lower case. Added for compatibility with the `Uncapitalize` type.
 *
 * @example
 * ```ts
 * import { uncapitalize } from "@positron/lang";
 *
 * console.log(uncapitalize("FooBar"));
 * // >> "fooBar"
 * ```
 *
 * @param value - The string to uncapitalize.
 *
 * @returns The uncapitalized string.
 *
 * @public
 */
export function uncapitalize<TValue extends string>(
  value: TValue,
): Uncapitalize<TValue> {
  return (
    value.length > 0 ? value.charAt(0).toLowerCase() + value.slice(1) : value
  ) as Uncapitalize<TValue>;
}
