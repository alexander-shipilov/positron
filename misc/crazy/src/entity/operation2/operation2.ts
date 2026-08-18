import type { Entity } from "../entity";

import type { Operation2Type } from "./operation2-type";

/**
 * @public
 */
export abstract class Operation2 implements Entity<Operation2Type> {
  /**
   *
   */
  abstract readonly type: Operation2Type;

  /**
   *
   */
  get length(): number {
    return this.arg1.length + this.arg2.length + 1;
  }

  /**
   * @param arg1 - The first argument
   * @param arg2 - The second argument
   */
  constructor(
    readonly arg1: Entity,
    readonly arg2: Entity,
  ) {}
}
