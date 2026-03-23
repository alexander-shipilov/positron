import { EntityType } from "../entity";

import type { OperandType } from "./operand-type";

/**
 * @param maybeOperandType
 *
 * @public
 */
export function isOperandType(
  maybeOperandType: unknown,
): maybeOperandType is OperandType {
  return maybeOperandType === EntityType.Operand;
}
