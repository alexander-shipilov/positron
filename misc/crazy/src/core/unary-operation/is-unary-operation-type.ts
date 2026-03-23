import { EntityType } from "../entity";

import type { UnaryOperationType } from "./unary-operation-type";

/**
 * @param maybeUnaryOperationType
 *
 * @public
 */
export function isUnaryOperationType(
  maybeUnaryOperationType: unknown,
): maybeUnaryOperationType is UnaryOperationType {
  return maybeUnaryOperationType === EntityType.Neg;
}
