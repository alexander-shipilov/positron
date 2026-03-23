import type { Nullish, Nullable } from "@positron/core";
import { isNull, isUndefined } from "@positron/core";

import type { EntityValue } from "../entity";
import { Entity } from "../entity";

import type { BinaryOperationResolver } from "./binary-operation-resolver";
import type { BinaryOperationType } from "./binary-operation-type";

/**
 * @public
 */
export abstract class BinaryOperation<
  TValue extends EntityValue = EntityValue,
> extends Entity<TValue> {
  /**
   *
   */
  abstract readonly type: BinaryOperationType;

  /**
   *
   */
  protected value: Nullable<TValue>;

  /**
   * @param resolver
   * @param arg1 - The first argument
   * @param arg2 - The second argument
   */
  constructor(
    readonly arg1: Entity<TValue>,
    readonly arg2: Entity<TValue>,
    protected readonly resolver: BinaryOperationResolver<TValue>,
  ) {
    super();
  }

  /**
   *
   */
  resolve(): Nullish<TValue> {
    if (isUndefined(this.value)) {
      const arg1 = this.arg1.resolve();
      const arg2 = this.arg2.resolve();

      this.value =
        isNull(arg1) || isNull(arg2) ? null : this.resolver(arg1, arg2);
    }

    return this.value;
  }
}
