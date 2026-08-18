import type { Algebra } from "../../algebra";
import type {
  Entity,
  OperandArg,
  OperandType,
  Operation1Type,
  Operation2Type,
} from "../../entity";
import type { ExceptionType } from "../../exception";
import type { Calculator } from "../calculator";
import { EntityType } from "../../entity";
import { Exception } from "../../exception";

/**
 * @public
 */
export class AlgebraCalculator<TValue> implements Calculator<TValue> {
  /**
   * @param algebra -
   */
  constructor(protected readonly algebra: Algebra<TValue>) {}

  /**
   * @param _ -
   * @param arg -
   */
  calcOperand(_: Entity<OperandType>, arg: OperandArg): ExceptionType | TValue {
    return this.calc(() => this.algebra.element(arg.join("")));
  }

  /**
   * @param _ -
   * @param arg -
   */
  calcOperation1(
    _: Entity<Operation1Type>,
    arg: TValue,
  ): ExceptionType | TValue {
    return this.calc(() => this.algebra.neg(arg));
  }

  /**
   * @param entity -
   * @param arg1 -
   * @param arg2 -
   */
  calcOperation2(
    entity: Entity<Operation2Type>,
    arg1: TValue,
    arg2: TValue,
  ): ExceptionType | TValue {
    return this.calc(() => {
      switch (entity.type) {
        case EntityType.Add:
          return this.algebra.add(arg1, arg2);
        case EntityType.Div:
          return this.algebra.div(arg1, arg2);
        case EntityType.Mul:
          return this.algebra.mul(arg1, arg2);
        case EntityType.Pow:
          return this.algebra.pow(arg1, arg2);
        case EntityType.Sub:
          return this.algebra.sub(arg1, arg2);
        default:
          throw new TypeError("Unknown operation");
      }
    });
  }

  /**
   * @param fn -
   */
  protected calc(fn: () => TValue): ExceptionType | TValue {
    try {
      return fn();
    } catch (error) {
      if (error instanceof Exception) {
        return error.type;
      }

      throw error;
    }
  }
}
