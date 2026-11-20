import type { Entity } from "./entity";
import type { Member } from "./member";
import type { MemberEntityType } from "./member-entity-type";
import { EntityObject } from "./entity-object";

export abstract class MemberObject<TEntityType extends MemberEntityType>
  extends EntityObject<TEntityType>
  implements Member<TEntityType>
{
  declare public readonly parent: Entity;

  protected constructor(parent: Entity) {
    super(parent);
  }
}
