import type { EntityType } from "./entity-type";

export interface Entity<TEntityType extends EntityType = EntityType> {
  readonly entityType: TEntityType;

  readonly parent: Entity | null;
}
