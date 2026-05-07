import { isUndefined } from "@positron/core";

import type {
  Entity,
  OperandArg,
  OperandType,
  Operation1Type,
  Operation2Type,
} from "../../entity";
import type { ExceptionType } from "../../exception";
import type { Calculator } from "../calculator";

import type { CachingCalculatorCache } from "./caching-calculator-cache";

/**
 * @public
 */
export class CachingCalculator<TValue> implements Calculator<TValue> {
  /**
   * @param calculator -
   * @param cache -
   */
  constructor(
    protected readonly calculator: Calculator<TValue>,
    protected readonly cache: CachingCalculatorCache<TValue>,
  ) {}

  /**
   * @param entity -
   * @param arg -
   */
  calcOperand(
    entity: Entity<OperandType>,
    arg: OperandArg,
  ): ExceptionType | TValue {
    return this.calc(entity, () => this.calculator.calcOperand(entity, arg));
  }

  /**
   * @param entity -
   * @param arg -
   */
  calcOperation1(
    entity: Entity<Operation1Type>,
    arg: TValue,
  ): ExceptionType | TValue {
    return this.calc(entity, () => this.calculator.calcOperation1(entity, arg));
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
    return this.calc(entity, () =>
      this.calculator.calcOperation2(entity, arg1, arg2),
    );
  }

  /**
   * @param entity -
   * @param fn -
   */
  protected calc(
    entity: Entity,
    fn: () => ExceptionType | TValue,
  ): ExceptionType | TValue {
    let value = this.cache.get(entity);

    if (isUndefined(value)) {
      this.cache.set(entity, (value = fn()));
    }

    return value;
  }
}
