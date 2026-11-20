import type { SpecCode } from "../spec-code";
import { SpecEntityType } from "../spec-entity";
import { SpecParamEntity } from "../spec-param-entity";

/**
 *
 * @public
 */
export class SpecParam extends SpecParamEntity<SpecEntityType.Param> {
  /**
   * The {@link SpecParam.REST_PREFIX} property represents the rest
   * parameter prefix.
   */
  public static readonly REST_PREFIX = "...";

  /**
   * @override
   */
  public readonly isRest: boolean;

  /**
   * @param nameToken
   * @param type
   * @param value
   */
  public constructor(
    nameToken: string,
    type: null | SpecCode = null,
    value: null | SpecCode = null,
  ) {
    const isRest = nameToken.startsWith(SpecParam.REST_PREFIX);

    super(
      SpecEntityType.Param,
      isRest ? nameToken.slice(SpecParam.REST_PREFIX.length) : nameToken,
      type,
      value,
    );

    this.isRest = isRest;
  }
}
