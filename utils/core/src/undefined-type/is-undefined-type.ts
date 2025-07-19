import type { UndefinedType } from "./undefined-type";
import { UNDEFINED_TYPE } from "./undefined-type";

/**
 * The {@link isUndefinedType} function checks if the passed
 * {@link maybeUndefinedType} is a {@link UndefinedType}.
 *
 * @param maybeUndefinedType - The value to be tested for being
 *   a {@link UndefinedType}.
 *
 * @returns The boolean value `true` if the passed {@link maybeUndefinedType}
 *   value is a {@link UndefinedType}.
 * @public
 */
export function isUndefinedType(
  maybeUndefinedType: unknown,
): maybeUndefinedType is UndefinedType {
  return maybeUndefinedType === UNDEFINED_TYPE;
}
