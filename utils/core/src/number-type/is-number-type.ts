import type { NumberType } from "./number-type";
import { NUMBER_TYPE } from "./number-type";

/**
 * The {@link isNumberType} function checks if the passed
 * {@link maybeNumberType} is a {@link NumberType}.
 *
 * @param maybeNumberType - The value to be tested for being
 *   a {@link NumberType}.
 *
 * @returns The number value `true` if the passed {@link maybeNumberType}
 *   value is a {@link NumberType}.
 * @public
 */
export function isNumberType(
  maybeNumberType: unknown,
): maybeNumberType is NumberType {
  return maybeNumberType === NUMBER_TYPE;
}
