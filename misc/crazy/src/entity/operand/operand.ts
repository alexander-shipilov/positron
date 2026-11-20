import type { Entity } from "../entity";
import { EntityType } from "../entity-type";

import type { OperandArg } from "./operand-arg";
import type { OperandType } from "./operand-type";

/**
 * @public
 */
export class Operand implements Entity<OperandType> {
  /**
   *
   */
  public get length(): number {
    return 1;
  }

  /**
   *
   */
  public get type(): OperandType {
    return EntityType.Operand;
  }

  /**
   * @param arg -
   */
  public constructor(public readonly arg: OperandArg) {}
}
