import type { Entity, OperandArg } from "../entity";

/**
 * @public
 */
export interface Generator {
  /**
   * @param digits -
   */
  generate(digits: OperandArg): Iterable<Entity>;
}
