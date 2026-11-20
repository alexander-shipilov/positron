import type { Member } from "./member";
import type { MemberEntityType } from "./member-entity-type";
import type { Named } from "./named";
import type { SignatureKey } from "./signature-key";

export interface KeyedMember<
  TEntityType extends MemberEntityType,
  TKey extends SignatureKey,
>
  extends Member<TEntityType>, Named<TKey> {
  optional: boolean;
}
