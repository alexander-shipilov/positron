import type { BinaryOperation, BinaryOperationType } from "./binary-operation";
import type { Entity } from "./entity";
import type { Operand, OperandArg } from "./operand";
import type { UnaryOperation, UnaryOperationType } from "./unary-operation";

/**
 * @public
 */
export interface EntityCreator {
  /**
   * @param type
   * @param arg1
   * @param arg2
   */
  createBinaryOperation(
    type: BinaryOperationType,
    arg1: Entity,
    arg2: Entity,
  ): BinaryOperation;

  /**
   * @param arg
   */
  createOperand(arg: OperandArg): Operand;

  /**
   * @param type
   * @param arg
   */
  createUnaryOperation(type: UnaryOperationType, arg: Entity): UnaryOperation;
}
