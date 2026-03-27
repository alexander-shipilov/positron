import type { EntityType } from "./entity-type";

/**
 *
 * @public
 */
export interface Entity {
  /**
   * The `type` property represents an entity type.
   */
  readonly type: EntityType;

  /**
   *
   */
  readonly length: number;
}
