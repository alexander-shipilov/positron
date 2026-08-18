import type { Entity } from "../entity";

import type { Operation1Type } from "./operation1-type";

/**
 * @public
 */
export abstract class Operation1 implements Entity<Operation1Type> {
  /**
   *
   */
  abstract readonly type: Operation1Type;

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
