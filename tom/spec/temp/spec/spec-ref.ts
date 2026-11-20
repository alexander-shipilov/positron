import { SpecEntity, SpecEntityType } from "./spec-entity";

/**
 * @public
 */
export class SpecRef extends SpecEntity<SpecEntityType.Ref> {
  public readonly entity: SpecEntity;

  /**
   * @param parent -
   * @param entity -
   */
  public constructor(parent: SpecEntity, entity: SpecEntity) {
    super(SpecEntityType.Ref, parent);

    this.entity = entity;
  }
}
