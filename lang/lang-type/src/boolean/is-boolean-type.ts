import { BooleanType } from "./boolean-type";

/**
 * The {@link isBooleanType} function checks if the passed
 * {@link maybeBooleanType} is a {@link BooleanType}.
 *
 * @param maybeBooleanType - The value to be tested for being
 *   a {@link BooleanType}.
 *
 * @returns The boolean value `true` if the passed {@link maybeBooleanType}
 *   value is a {@link BooleanType}.
 * @public
 */
export function isBooleanType(
  maybeBooleanType: unknown,
): maybeBooleanType is BooleanType {
  return maybeBooleanType === BooleanType;
}
