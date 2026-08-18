import type { StringType } from "./string-type";
import { STRING_TYPE } from "./string-type";

/**
 * The {@link isStringType} function checks if the passed
 * `maybeStringType` is a {@link StringType}.
 *
 * @param maybeStringType - The value to be tested for being
 *   a {@link StringType}.
 *
 * @returns The string value `true` if the passed `maybeStringType`
 *   value is a {@link StringType}.
 * @public
 */
export function isStringType(
  maybeStringType: unknown,
): maybeStringType is StringType {
  return maybeStringType === STRING_TYPE;
}
