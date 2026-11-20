import type { EntityType } from "./entity-type";
import type { Member } from "./member";
import type { Param } from "./param";
import type { ParamOwner } from "./param-owner";

export interface Call<TParams extends readonly Param[]>
  extends Member<EntityType.Call>, ParamOwner<TParams> {}
