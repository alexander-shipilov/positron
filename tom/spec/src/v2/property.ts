import type { EntityType } from "./entity-type";
import type { KeyedMember } from "./keyed-member";
import type { SignatureKey } from "./signature-key";

export interface Property<TKey extends SignatureKey> extends KeyedMember<
  EntityType.Property,
  TKey
> {}
