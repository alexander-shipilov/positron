import type { BinaryOperation } from "./binary-operation";
import type { EntityValue } from "./entity";
import type { Operand } from "./operand";
import type { UnaryOperation } from "./unary-operation";

/**
 * @public
 */
export interface EntityCalculator<TValue extends EntityValue> {
  /**
   * @param entity
   */
  calcOperand(entity: Operand): TValue;

  /**
   * @param entity
   * @param arg
   */
  calcOperation1(entity: UnaryOperation, arg: TValue): TValue;

  /**
   * @param entity
   * @param arg1
   * @param arg2
   */
  calcOperation2(entity: BinaryOperation, arg1: TValue, arg2: TValue): TValue;
}
