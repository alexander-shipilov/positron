import type { Nullish, Nullable } from "@positron/core";
import { isNull, isUndefined } from "@positron/core";

import type { EntityValue } from "../entity";
import { Entity } from "../entity";

import type { UnaryOperationResolver } from "./unary-operation-resolver";
import type { UnaryOperationType } from "./unary-operation-type";

export abstract class UnaryOperation<
  TValue extends EntityValue = EntityValue,
> extends Entity<TValue> {
  /**
   *
   */
  abstract readonly type: UnaryOperationType;

  /**
   *
   */
  protected value: Nullable<TValue>;

  /**
   * @param arg - The argument
   * @param resolver
   */
  constructor(
    readonly arg: Entity<TValue>,
    protected readonly resolver: UnaryOperationResolver<TValue>,
  ) {
    super();
  }

  /**
   *
   */
  resolve(): Nullish<TValue> {
    if (isUndefined(this.value)) {
      const arg = this.arg.resolve();

      this.value = isNull(arg) ? null : this.resolver(arg);
    }

    return this.value;
  }
}
