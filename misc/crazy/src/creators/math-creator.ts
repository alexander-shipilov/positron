import type {
  BinaryOperation,
  BinaryOperationType,
  Entity,
  EntityValue,
  EntityCreator,
  EntityMath,
  UnaryOperation,
  UnaryOperationType,
  OperandArg,
} from "../core";
import { Add, Div, Pow, Mul, Sub, EntityType, Operand, Neg } from "../core";

/**
 * @public
 */
export class MathCreator<
  TValue extends EntityValue,
> implements EntityCreator<TValue> {
  constructor(protected readonly math: EntityMath<TValue>) {}

  /**
   * @param type
   * @param arg1
   * @param arg2
   */
  createBinaryOperation(
    type: BinaryOperationType,
    arg1: Entity<TValue>,
    arg2: Entity<TValue>,
  ): BinaryOperation<TValue> {
    switch (type) {
      case EntityType.Add:
        return new Add(arg1, arg2, this.math.add);
      case EntityType.Div:
        return new Div(arg1, arg2, this.math.div);
      case EntityType.Mul:
        return new Mul(arg1, arg2, this.math.mul);
      case EntityType.Pow:
        return new Pow(arg1, arg2, this.math.pow);
      case EntityType.Sub:
        return new Sub(arg1, arg2, this.math.sub);
      default:
        throw new TypeError("Unrecognized entity type");
    }
  }

  /**
   * @param arg
   */
  createOperand(arg: OperandArg): Operand<TValue> {
    return new Operand(arg, this.math.operand);
  }

  /**
   * @param type
   * @param arg
   */
  createUnaryOperation(
    type: UnaryOperationType,
    arg: Entity<TValue>,
  ): UnaryOperation<TValue> {
    switch (type) {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      case EntityType.Neg:
        return new Neg(arg, this.math.neg);
      default:
        throw new TypeError("Unrecognized entity type");
    }
  }
}
