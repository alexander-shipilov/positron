import type { Entity } from "../entity";

import type { Operation2Type } from "./operation2-type";

/**
 * @public
 */
export abstract class Operation2 implements Entity<Operation2Type> {
  /**
   *
   */
  public abstract readonly type: Operation2Type;

  /**
   *
   */
  public get length(): number {
    return this.arg1.length + this.arg2.length + 1;
  }

  /**
   * @param arg1 - The first argument
   *
   * @param arg2 - The second argument
   */
  public constructor(
    public readonly arg1: Entity,
    public readonly arg2: Entity,
  ) {}
}
