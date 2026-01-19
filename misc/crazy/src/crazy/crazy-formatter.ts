import type { CrazyEntity } from "./crazy-entity";

/**
 * The {@link CrazyFormatter} interface describes an object to serialize
 * {@link CrazyEntity} objects.
 */
export interface CrazyFormatter {
  /**
   * The {@link format} method of the {@link CrazyFormatter} serializes the
   * passed `entity`.
   *
   * @param entity - The entity to format
   */
  format: (entity: CrazyEntity) => string;
}
