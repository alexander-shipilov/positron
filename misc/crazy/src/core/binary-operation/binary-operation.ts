import type { Entity } from "../entity";

import type { BinaryOperationType } from "./binary-operation-type";

/**
 * @public
 */
export abstract class BinaryOperation implements Entity {
  /**
   *
   */
  abstract readonly type: BinaryOperationType;

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
