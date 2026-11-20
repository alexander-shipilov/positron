import type { EntityType } from "./entity-type";
import type { Member } from "./member";
import type { Named } from "./named";

export interface Indexer extends Member<EntityType.Indexer>, Named<string> {}
