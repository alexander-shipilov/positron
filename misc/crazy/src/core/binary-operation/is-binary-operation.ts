import { BinaryOperation } from "./binary-operation";

/**
 * @param maybeBinaryOperation
 *
 * @public
 */
export function isBinaryOperation(
  maybeBinaryOperation: unknown,
): maybeBinaryOperation is BinaryOperation {
  return maybeBinaryOperation instanceof BinaryOperation;
}
