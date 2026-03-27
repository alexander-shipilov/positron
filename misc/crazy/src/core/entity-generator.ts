import type { Entity } from "./entity";
import type { OperandArg } from "./operand";

/**
 * @public
 */
export interface EntityGenerator {
  /**
   * @param digits
   */
  generate(digits: OperandArg): Generator<Entity>;
}
