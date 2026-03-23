import { EntityType } from "../entity";

import type { BinaryOperationType } from "./binary-operation-type";

/**
 * @param maybeBinaryOperationType
 *
 * @public
 */
export function isBinaryOperationType(
  maybeBinaryOperationType: unknown,
): maybeBinaryOperationType is BinaryOperationType {
  return (
    maybeBinaryOperationType === EntityType.Add ||
    maybeBinaryOperationType === EntityType.Div ||
    maybeBinaryOperationType === EntityType.Pow ||
    maybeBinaryOperationType === EntityType.Mul ||
    maybeBinaryOperationType === EntityType.Sub
  );
}
