import type { StringLike } from "./string-like";
import { isString } from "./is-string";

/**
 * The {@link toString} function converts the passed {@link StringLike}
 * `stringLike` to the `string` type.
 *
 * @param stringLike - The value to be converted.
 *
 * @public
 */
export function toString(stringLike: StringLike): string {
  return isString(stringLike) ? stringLike : String(stringLike);
}
