import type { SpecMemberName } from "./spec-member-name";
import type { SpecParam } from "./spec-param/spec-param";
import type { SpecParamOwner } from "./spec-param/spec-param-owner";
import type { SpecParams } from "./spec-params";
import { SpecEntityType } from "./spec-entity/spec-entity-type";
import { SpecMember } from "./spec-member";

export class SpecMethod extends SpecMember implements SpecParamOwner {
  public constructor(
    name: SpecMemberName,
    public readonly params: SpecParams,
  ) {
    super(SpecEntityType.Method, name);
  }

  public param(param: SpecParam): this {
    this.params.append(param);
    return this;
  }
}
