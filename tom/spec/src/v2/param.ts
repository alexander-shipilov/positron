import type { Identifier } from "../identifier";
import type { ParamType } from "../param";

import type { EntityObject } from "./entity-object";
import type { EntityType } from "./entity-type";
import type { Named } from "./named";

export interface Param<TParamType extends ParamType = ParamType>
  extends EntityObject<EntityType.Param>, Named<Identifier> {
  paramType: TParamType;
}
