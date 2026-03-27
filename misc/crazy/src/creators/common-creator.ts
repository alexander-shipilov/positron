import type {
  BinaryOperation,
  BinaryOperationType,
  Entity,
  EntityCreator,
  OperandArg,
  UnaryOperation,
  UnaryOperationType,
} from "../core";
import { Add, Div, EntityType, Mul, Neg, Operand, Pow, Sub } from "../core";

/**
 * @public
 */
export const CommonCreator: EntityCreator = {
  /**
   * @param type
   * @param arg1
   * @param arg2
   */
  createBinaryOperation(
    type: BinaryOperationType,
    arg1: Entity,
    arg2: Entity,
  ): BinaryOperation {
    switch (type) {
      case EntityType.Add:
        return new Add(arg1, arg2);
      case EntityType.Div:
        return new Div(arg1, arg2);
      case EntityType.Mul:
        return new Mul(arg1, arg2);
      case EntityType.Pow:
        return new Pow(arg1, arg2);
      case EntityType.Sub:
        return new Sub(arg1, arg2);
      default:
        throw new TypeError("Unknown entity");
    }
  },

  /**
   * @param arg
   */
  createOperand(arg: OperandArg): Operand {
    return new Operand(arg);
  },

  /**
   * @param type
   * @param arg
   */
  createUnaryOperation(type: UnaryOperationType, arg: Entity): UnaryOperation {
    switch (type) {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      case EntityType.Neg:
        return new Neg(arg);
      default:
        throw new TypeError("Unknown entity");
    }
  },
};
