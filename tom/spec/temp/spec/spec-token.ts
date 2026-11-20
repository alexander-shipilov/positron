import { SpecEntity } from "./spec-entity/spec-entity";
import { SpecEntityType } from "./spec-entity/spec-entity-type";

/**
 *
 * @public
 */
export class SpecToken extends SpecEntity {
  /**
   *
   */
  public readonly value: unknown;

  /**
   * @param value
   */
  public constructor(value: unknown) {
    super(SpecEntityType.Token);

    this.value = value;
  }
}
