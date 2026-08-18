import type { Calculator } from "../../calculator";
import type { Entity } from "../../entity";
import type { ExceptionType } from "../../exception";
import type { Resolver } from "../resolver";
import { Operand, Operation1, Operation2 } from "../../entity";
import { isExceptionType } from "../../exception";

/**
 * @public
 */
export class CalculatorResolver<TValue> implements Resolver<TValue> {
  /**
   * @param calculator -
   */
  constructor(protected readonly calculator: Calculator<TValue>) {}

  /**
   * @param entity -
   */
  resolve(entity: Entity): ExceptionType | TValue {
    if (entity instanceof Operand) {
      return this.resolveOperand(entity);
    } else if (entity instanceof Operation1) {
      return this.resolveOperation1(entity);
    } else if (entity instanceof Operation2) {
      return this.resolveOperation2(entity);
    }

    throw new TypeError("Unknown entity");
  }

  /**
   * @param entity -
   */
  protected resolveOperand(entity: Operand): ExceptionType | TValue {
    return this.calculator.calcOperand(entity, entity.arg);
  }

  /**
   * @param entity -
   */
  protected resolveOperation1(entity: Operation1): ExceptionType | TValue {
    const arg = this.resolve(entity.arg);

    if (isExceptionType(arg)) {
      return arg;
    }

    return this.calculator.calcOperation1(entity, arg);
  }

  /**
   * @param entity -
   */
  protected resolveOperation2(entity: Operation2): ExceptionType | TValue {
    const arg1 = this.resolve(entity.arg1);

    if (isExceptionType(arg1)) {
      return arg1;
    } else {
      const arg2 = this.resolve(entity.arg2);

      if (isExceptionType(arg2)) {
        return arg2;
      }

      return this.calculator.calcOperation2(entity, arg1, arg2);
    }
  }
}
