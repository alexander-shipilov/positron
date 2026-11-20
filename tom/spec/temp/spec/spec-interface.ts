import type { SpecTypeParamOwner } from "./spec-type-param/spec-type-param-owner";
import { SpecEntity } from "./spec-entity/spec-entity";
import { SpecEntityType } from "./spec-entity/spec-entity-type";
import { SpecParamEntityList } from "./spec-param-entity/spec-param-entity-list";
import { SpecTypeParam } from "./spec-type-param/spec-type-param";

export class SpecInterface
  extends SpecEntity<SpecEntityType.Interface>
  implements SpecTypeParamOwner
{
  /**
   * {@inheritDoc SpecTypeParamOwner.typeParams}
   */
  public readonly typeParams: SpecParamEntityList<SpecEntityType.TypeParam> =
    new SpecParamEntityList<SpecEntityType.TypeParam>();

  /**
   *
   */
  public constructor() {
    super(SpecEntityType.Interface);
  }

  /**
   * {@inheritDoc SpecTypeParamOwner.typeParam}
   */
  public typeParam(param: string): SpecTypeParam {
    return this.typeParams.append(SpecTypeParam.create(this, param));
  }
}
