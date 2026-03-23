import { Operand } from "./operand";

/**
 * @param maybeOperand
 *
 * @public
 */
export function isOperand(maybeOperand: unknown): maybeOperand is Operand {
  return maybeOperand instanceof Operand;
}
