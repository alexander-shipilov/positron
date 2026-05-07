import type { EntityType } from "./entity-type";

/**
 *
 * @public
 */
export interface Entity<TType extends EntityType = EntityType> {
  /**
   *
   */
  readonly length: number;

  /**
   * The `type` property represents an entity type.
   */
  readonly type: TType;
}
