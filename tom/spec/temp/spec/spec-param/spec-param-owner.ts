import type { StringLike } from "@positron/lang";

import type { SpecCode } from "../spec-code";

import type { SpecParam } from "./spec-param";
import type { SpecParamList } from "./spec-param-list";

/**
 * The {@link SpecParamOwner} interface describes an object that can have
 * parameters list.
 *
 * @public
 */
export interface SpecParamOwner {
  /**
   * The {@link SpecParamOwner.params} property represents a list of
   * contained parameters.
   */
  readonly params: SpecParamList;

  /**
   * The {@link SpecParamOwner.param} method appends a parameter with the
   * specified name to `this` params list.
   *
   * @param name - The param name to be added.
   * @param type - The param type.
   * @param value - The parameter default value.
   */
  param(
    name: string,
    type?: SpecCode | StringLike,
    value?: SpecCode | StringLike,
  ): SpecParam;
}
