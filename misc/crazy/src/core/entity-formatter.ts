import type { Entity } from "./entity";

/**
 * The {@link EntityFormatter} interface describes an object to format
 * {@link Entity} objects.
 */
export interface EntityFormatter {
  /**
   * The {@link EntityFormatter#format} method of the {@link EntityFormatter}
   * formats the passed `entity`.
   *
   * @param entity - The entity to format
   */
  format: (entity: Entity) => string;
}
