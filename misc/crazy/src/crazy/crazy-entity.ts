import type { CrazyEntityType } from "./crazy-entity-type";

export interface CrazyEntity<TType extends CrazyEntityType = CrazyEntityType> {
  /**
   * The {@link type} property of the {@link CrazyEntity} interface represents
   * an entity type.
   */
  readonly type: TType;
}
