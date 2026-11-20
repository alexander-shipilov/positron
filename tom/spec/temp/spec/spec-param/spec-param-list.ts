import { assert } from "@positron/lang";

import { SpecParamEntityList } from "../spec-param-entity";

import type { SpecParam } from "./spec-param";

/**
 * @public
 */
export class SpecParamList extends SpecParamEntityList<SpecParam> {
  /**
   * @param param - The parameter to add.
   *
   * @throws {@link @positron/lang#AssertExeption} when attempting to add a
   *   parameter after a rest parameter.
   */
  public override append<TParam extends SpecParam>(param: TParam): TParam {
    assert(
      this._last === null || !this._last.isRest,
      "A rest parameter must be last in a parameter list.",
    );

    return super.append(param);
  }
}
