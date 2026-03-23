import type { BinaryOperation, BinaryOperationType } from "./binary-operation";
import type { Entity, EntityValue } from "./entity";
import type { Operand, OperandArg } from "./operand";
import type { UnaryOperation, UnaryOperationType } from "./unary-operation";

/**
 * @public
 */
export interface EntityCreator<TValue extends EntityValue> {
  /**
   * @param type
   * @param arg1
   * @param arg2
   */
  createBinaryOperation(
    type: BinaryOperationType,
    arg1: Entity<TValue>,
    arg2: Entity<TValue>,
  ): BinaryOperation<TValue>;

  /**
   * @param arg
   */
  createOperand(arg: OperandArg): Operand<TValue>;

  /**
   * @param type
   * @param arg
   */
  createUnaryOperation(
    type: UnaryOperationType,
    arg: Entity<TValue>,
  ): UnaryOperation<TValue>;
}
