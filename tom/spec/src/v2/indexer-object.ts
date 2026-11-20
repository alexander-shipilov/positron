import type { Identifier } from "../identifier";
import { toIdentifier } from "../identifier";

import type { Entity } from "./entity";
import type { Indexer } from "./indexer";
import { EntityType } from "./entity-type";
import { MemberObject } from "./member-object";

export class IndexerObject
  extends MemberObject<EntityType.Indexer>
  implements Indexer
{
  public readonly name: Identifier;

  public get entityType(): EntityType.Indexer {
    return EntityType.Indexer;
  }

  public constructor(parent: Entity, name: string) {
    super(parent);

    this.name = toIdentifier(name);
  }
}
