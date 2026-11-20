import type { Entity } from "./entity";
import type { MemberEntityType } from "./member-entity-type";

export interface Member<
  TEntityType extends MemberEntityType,
> extends Entity<TEntityType> {
  readonly parent: Entity;
}
