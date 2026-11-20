import { assertType, template } from "@positron/lang";

import type { SpecCode } from "../spec-code";
import type { SpecEntityType } from "../spec-entity";
import type { SpecNamed } from "../spec-named";
import { SpecEntity } from "../spec-entity";

import type { SpecParamEntityName } from "./spec-param-entity-name";
import { isSpecParamEntityName } from "./is-spec-param-entity-name";

/**
 *
 * @public
 */
export class SpecParamEntity<
  TEntityType extends SpecEntityType = SpecEntityType,
>
  extends SpecEntity<TEntityType>
  implements SpecNamed<SpecParamEntityName>
{
  /**
   *
   */
  public readonly name: SpecParamEntityName;

  /**
   *
   */
  public readonly type: null | SpecCode = null;

  /**
   *
   */
  public readonly value: null | SpecCode = null;

  /**
   *
   */
  public get isRequired(): boolean {
    return this.value === null;
  }

  /**
   * @param entityType
   * @param name
   * @param type
   * @param value
   */
  public constructor(
    entityType: TEntityType,
    name: string,
    type: null | SpecCode = null,
    value: null | SpecCode = null,
  ) {
    super(entityType);

    this.name = assertType(name, isSpecParamEntityName, () =>
      template`The parameter name must be a valid identifier; ${0} given.`(
        name,
      ),
    );
    this.type = type;
    this.value = value;
  }
}
