import type { Entity, EntityValue } from "./entity";
import type { OperandArg } from "./operand";

/**
 * @public
 */
export interface EntityGenerator<TValue extends EntityValue> {
  generate(digits: OperandArg): Generator<Entity<TValue>>;
}
