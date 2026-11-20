import type { SpecCode } from "../spec-code";
import { SpecEntityType } from "../spec-entity";
import { SpecParamEntity } from "../spec-param-entity";

/**
 * The {@link SpecTypeParam} class represents a type parameter.
 *
 * @public
 */
export class SpecTypeParam extends SpecParamEntity<SpecEntityType.TypeParam> {
  /**
   * @param name
   * @param type
   * @param value
   */
  public constructor(
    name: string,
    type: null | SpecCode = null,
    value: null | SpecCode = null,
  ) {
    super(SpecEntityType.TypeParam, name, type, value);
  }
}
