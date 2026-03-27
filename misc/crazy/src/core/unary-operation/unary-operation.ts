import type { Entity } from "../entity";

import type { UnaryOperationType } from "./unary-operation-type";

/**
 * @public
 */
export abstract class UnaryOperation implements Entity {
  /**
   *
   */
  abstract readonly type: UnaryOperationType;

  /**
   *
   */
  get length(): number {
    return this.arg.length + 1;
  }

  /**
   * @param arg - The argument
   */
  constructor(readonly arg: Entity) {}
}
