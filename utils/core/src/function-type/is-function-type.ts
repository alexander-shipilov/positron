import type { FunctionType } from "./function-type";
import { FUNCTION_TYPE } from "./function-type";

/**
 * The {@link isFunctionType} function determines if the passed
 * {@link maybeFunctionType} is the {@link FunctionType}.
 *
 * @param maybeFunctionType - The value to be checked.
 *
 * @public
 */
export function isFunctionType(
  maybeFunctionType: unknown,
): maybeFunctionType is FunctionType {
  return maybeFunctionType === FUNCTION_TYPE;
}
