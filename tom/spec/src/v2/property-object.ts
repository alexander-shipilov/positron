import type { Entity } from "./entity";
import type { Property } from "./property";
import type { SignatureKey } from "./signature-key";
import { EntityType } from "./entity-type";
import { MemberObject } from "./member-object";

export class PropertyObject<TKey extends SignatureKey>
  extends MemberObject<EntityType.Property>
  implements Property<TKey>
{
  public readonly name: TKey;

  public get entityType(): EntityType.Property {
    return EntityType.Property;
  }

  public constructor(parent: Entity, name: TKey) {
    super(parent);

    this.name = name;
  }
}
