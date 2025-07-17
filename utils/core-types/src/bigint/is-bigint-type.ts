import { BigintType } from "./bigint-type";

/**
 * The {@link isBigintType} function checks if the passed
 * {@link maybeBigintType} is a {@link BigintType}.
 *
 * @param maybeBigintType - The value to be tested for being
 *   a {@link BigintType}.
 *
 * @returns The boolean value `true` if the passed {@link maybeBigintType}
 *   value is a {@link BigintType}.
 * @public
 */
export function isBigintType(
  maybeBigintType: unknown,
): maybeBigintType is BigintType {
  return maybeBigintType === BigintType;
}
