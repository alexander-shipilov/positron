import type { Nullish, Nullable } from "@positron/core";
import { isUndefined } from "@positron/core";

import type { EntityValue } from "../entity";
import { Entity, EntityType } from "../entity";

import type { OperandArg } from "./operand-arg";
import type { OperandResolver } from "./operand-resolver";
import type { OperandType } from "./operand-type";

/**
 * @public
 */
export class Operand<
  TValue extends EntityValue = EntityValue,
> extends Entity<TValue> {
  /**
   *
   */
  protected result: Nullable<TValue>;

  /**
   *
   */
  get type(): OperandType {
    return EntityType.Operand;
  }

  /**
   * @param arg
   * @param resolver
   */
  constructor(
    readonly arg: OperandArg,
    protected readonly resolver: OperandResolver<TValue>,
  ) {
    super();
  }

  /**
   *
   */
  resolve(): Nullish<TValue> {
    if (isUndefined(this.result)) {
      this.result = this.resolver(this.arg);
    }

    return this.result;
  }
}
