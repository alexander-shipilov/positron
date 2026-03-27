import type { Entity } from "../entity";
import { EntityType } from "../entity";

import type { OperandArg } from "./operand-arg";
import type { OperandType } from "./operand-type";

/**
 * @public
 */
export class Operand implements Entity {
  /**
   *
   */
  get length(): number {
    return 1;
  }

  /**
   *
   */
  get type(): OperandType {
    return EntityType.Operand;
  }

  /**
   * @param arg
   */
  constructor(readonly arg: OperandArg) {}
}
