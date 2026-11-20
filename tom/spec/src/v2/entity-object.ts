import type { Entity } from "./entity";
import type { EntityType } from "./entity-type";

export abstract class EntityObject<
  TEntityType extends EntityType = EntityType,
> implements Entity<TEntityType> {
  public abstract readonly entityType: TEntityType;

  public readonly parent: Entity | null;

  protected constructor(parent: EntityObject | null = null) {
    this.parent = parent;
  }
}
