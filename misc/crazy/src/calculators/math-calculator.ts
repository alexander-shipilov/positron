import type {
  BinaryOperation,
  EntityCalculator,
  EntityMath,
  EntityValue,
  Operand,
  UnaryOperation,
} from "../core";
import { Add, Div, Mul, Neg, Pow, Sub } from "../core";

/**
 * @public
 */
export class MathCalculator<
  TValue extends EntityValue,
> implements EntityCalculator<TValue> {
  /**
   * @param math
   */
  constructor(protected readonly math: EntityMath<TValue>) {}

  /**
   * @param entity
   */
  calcOperand(entity: Operand): TValue {
    return this.math.operand(entity.arg);
  }

  /**
   * @param entity
   * @param arg
   */
  calcOperation1(entity: UnaryOperation, arg: TValue): TValue {
    switch (true) {
      case entity instanceof Neg:
        return this.math.neg(arg);
      default:
        throw new TypeError("Unknown operation");
    }
  }

  /**
   * @param entity
   * @param arg1
   * @param arg2
   */
  calcOperation2(entity: BinaryOperation, arg1: TValue, arg2: TValue): TValue {
    switch (true) {
      case entity instanceof Add:
        return this.math.add(arg1, arg2);
      case entity instanceof Sub:
        return this.math.sub(arg1, arg2);
      case entity instanceof Mul:
        return this.math.mul(arg1, arg2);
      case entity instanceof Div:
        return this.math.div(arg1, arg2);
      case entity instanceof Pow:
        return this.math.pow(arg1, arg2);
      default:
        throw new TypeError("Unknown operation");
    }
  }
}
