import type {
  Entity,
  OperandArg,
  Operation1,
  Operation1Type,
  Operation2,
  Operation2Type,
} from "../../entity";
import {
  Add,
  Div,
  EntityType,
  Mul,
  Neg,
  Operand,
  Pow,
  Sub,
} from "../../entity";

/**
 * @public
 */
export const DefaultCreator = {
  /**
   * @param arg -
   */
  createOperand(arg: OperandArg): Operand {
    return new Operand(arg);
  },

  /**
   * @param type -
   * @param arg -
   */
  createOperation1(type: Operation1Type, arg: Entity): Operation1 {
    switch (type) {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      case EntityType.Neg:
        return new Neg(arg);
      default:
        throw new TypeError("Unknown entity");
    }
  },

  /**
   * @param type -
   * @param arg1 -
   * @param arg2 -
   */
  createOperation2(
    type: Operation2Type,
    arg1: Entity,
    arg2: Entity,
  ): Operation2 {
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
};
