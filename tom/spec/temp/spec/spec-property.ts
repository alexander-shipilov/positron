import type { SpecMemberName } from "./spec-member-name";
import { SpecEntityType } from "./spec-entity/spec-entity-type";
import { SpecMember } from "./spec-member";

export class SpecProperty extends SpecMember {
  public constructor(name: SpecMemberName) {
    super(SpecEntityType.Property, name);
  }
}
