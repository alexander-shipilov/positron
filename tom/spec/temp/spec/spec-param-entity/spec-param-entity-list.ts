import { assert } from "@positron/lang";

import { SpecNamedList } from "../spec-named-list";

import type { SpecParamEntity } from "./spec-param-entity";

/**
 * @public
 */
export class SpecParamEntityList<
  TEntity extends SpecParamEntity,
> extends SpecNamedList<TEntity> {
  /**
   * The `[_last]` property stores last appended parameter.
   */
  protected _last: null | TEntity = null;

  /**
   * The {@link SpecParamEntityList.append} method appends the passed `param`
   * to the end of `this` list.
   *
   * @param param - The parameter to be appended to the ane of `this` list.
   *
   * @returns The passed `param`.
   *
   * @throws {@link @positron/lang#AssertExeption} if `this` list already
   *   contains a parameter with the same name.
   * @throws {@link @positron/lang#AssertExeption} when attempting to add a
   *   required parameter after an optional one.
   */
  public override append<TParam extends TEntity>(param: TParam): TParam {
    assert(
      this._last === null || this._last.isRequired || !param.isRequired,
      "A required parameter cannot follow an optional parameter",
    );

    this._last = param;

    return super.append(param);
  }
}
