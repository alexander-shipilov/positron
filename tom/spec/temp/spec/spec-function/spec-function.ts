import { assertType, template } from "@positron/lang";

import type { SpecCode } from "../spec-code";
import type { SpecNamed } from "../spec-named";
import type { SpecParamOwner } from "../spec-param";
import type { SpecTypeParamOwner } from "../spec-type-param";
import { SpecEntity, SpecEntityType } from "../spec-entity";
import { SpecParam, SpecParamList } from "../spec-param";
import { SpecTypeParam, SpecTypeParamList } from "../spec-type-param";

import type { SpecFunctionName } from "./spec-function-name";
import { isSpecFunctionName } from "./is-spec-function-name";

export class SpecFunction
  extends SpecEntity<SpecEntityType.Function>
  implements SpecNamed<SpecFunctionName>, SpecParamOwner, SpecTypeParamOwner
{
  public readonly name: SpecFunctionName;

  public readonly params: SpecParamList = new SpecParamList();

  public readonly typeParams: SpecTypeParamList = new SpecTypeParamList();

  public constructor(name: string) {
    super(SpecEntityType.Function);

    this.name = assertType(name, isSpecFunctionName, () =>
      template`The function name must be a valid identifier; ${0} given.`(name),
    );
  }

  public param(name: string, type?: SpecCode, value?: SpecCode): SpecParam {
    return this.params.append(new SpecParam(name, type, value));
  }

  public typeParam(
    name: string,
    type?: SpecCode,
    value?: SpecCode,
  ): SpecTypeParam {
    return this.typeParams.append(new SpecTypeParam(name, type, value));
  }
}
