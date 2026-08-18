import type { Entity } from "../entity";

/**
 * The {@link Formatter} interface describes an object to format
 * {@link Entity} objects.
 *
 * @public
 */
export interface Formatter {
  /**
   * The {@link Formatter#format} method of the {@link Formatter}
   * formats the passed `entity`.
   *
   * @param entity - The entity to format
   */
  format(entity: Entity): string;
}
