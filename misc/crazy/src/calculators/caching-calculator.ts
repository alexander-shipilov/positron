import type {
  BinaryOperation,
  EntityCalculator,
  EntityValue,
  Operand,
  UnaryOperation,
} from "../core";

import type { CachingCalculatorCache } from "./caching-calculator-cache";

/**
 * @public
 */
export class CachingCalculator<
  TValue extends EntityValue,
> implements EntityCalculator<TValue> {
  /**
   * @param calculator
   * @param cache
   */
  constructor(
    protected readonly calculator: EntityCalculator<TValue>,
    protected readonly cache: CachingCalculatorCache<TValue>,
  ) {}

  /**
   * @param arg
   */
  calcOperand(arg: Operand): TValue {
    return this.calculator.calcOperand(arg);
  }

  /**
   * @param entity
   * @param arg
   */
  calcOperation1(entity: UnaryOperation, arg: TValue): TValue {
    return this.calculator.calcOperation1(entity, arg);
  }

  /**
   * @param entity
   * @param arg1
   * @param arg2
   */
  calcOperation2(entity: BinaryOperation, arg1: TValue, arg2: TValue): TValue {
    return this.calculator.calcOperation2(entity, arg1, arg2);
  }
}
