import { isBinaryOperationType } from "../binary-operation/is-binary-operation-type";
import { isOperandType } from "../operand/is-operand-type";
import { isUnaryOperationType } from "../unary-operation/is-unary-operation-type";

import type { EntityType } from "./entity-type";

/**
 * @param maybeEntityType
 *
 * @public
 */
export function isEntityType(
  maybeEntityType: unknown,
): maybeEntityType is EntityType {
  return (
    isOperandType(maybeEntityType) ||
    isUnaryOperationType(maybeEntityType) ||
    isBinaryOperationType(maybeEntityType)
  );
}
