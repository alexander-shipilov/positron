import type { NullType } from "./null-type";
import { NULL_TYPE } from "./null-type";

/**
 * The {@link isNullType} function checks if the passed
 * {@link maybeNullType} is a {@link NullType}.
 *
 * @param maybeNullType - The value to be tested for being
 *   a {@link NullType}.
 *
 * @returns The null value `true` if the passed {@link maybeNullType}
 *   value is a {@link NullType}.
 * @public
 */
export function isNullType(maybeNullType: unknown): maybeNullType is NullType {
  return maybeNullType === NULL_TYPE;
}
