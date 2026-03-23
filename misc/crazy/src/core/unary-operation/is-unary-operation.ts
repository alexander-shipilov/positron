import { UnaryOperation } from "./unary-operation";

/**
 * @param maybeUnaryOperation
 *
 * @public
 */
export function isUnaryOperation(
  maybeUnaryOperation: unknown,
): maybeUnaryOperation is UnaryOperation {
  return maybeUnaryOperation instanceof UnaryOperation;
}
