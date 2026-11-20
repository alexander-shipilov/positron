import type { EntityType } from "./entity-type";
import type { KeyedMember } from "./keyed-member";
import type { Param } from "./param";
import type { ParamOwner } from "./param-owner";
import type { SignatureKey } from "./signature-key";

export interface Method<
  TKey extends SignatureKey,
  TParams extends readonly Param[],
>
  extends KeyedMember<EntityType.Method, TKey>, ParamOwner<TParams> {}
