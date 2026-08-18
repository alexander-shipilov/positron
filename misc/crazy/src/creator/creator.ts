import type {
  Entity,
  Operand,
  OperandArg,
  Operation1,
  Operation1Type,
  Operation2,
  Operation2Type,
} from "../entity";

/**
 * @public
 */
export interface Creator {
  /**
   * @param arg -
   */
  createOperand(arg: OperandArg): Operand;

  /**
   * @param type -
   * @param arg -
   */
  createOperation1(type: Operation1Type, arg: Entity): Operation1;

  /**
   * @param type -
   * @param arg1 -
   * @param arg2 -
   */
  createOperation2(
    type: Operation2Type,
    arg1: Entity,
    arg2: Entity,
  ): Operation2;
}
