import type { SpecContext } from "./spec-context";
import type { SpecMemberName } from "./spec-member-name";
import type { SpecMemberType } from "./spec-member-type";
import type { SpecNamed } from "./spec-named";
import { SpecContextEntity } from "./spec-context-entity";

export class SpecMember<TContext extends SpecContext>
  extends SpecContextEntity
  implements SpecNamed<SpecMemberName>
{
  public constructor(
    type: SpecMemberType,
    context: TContext,
    public readonly name: SpecMemberName,
  ) {
    super(type, context);
  }
}
