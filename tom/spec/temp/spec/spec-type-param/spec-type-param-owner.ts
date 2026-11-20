import type { StringLike } from "../../../../../../shared/lang";
import type { SpecCode } from "../spec-code";

import type { SpecTypeParam } from "./spec-type-param";
import type { SpecTypeParamList } from "./spec-type-param-list";

/**
 * The {@link SpecParamOwner} interface describes an object that can have
 * parameters list.
 *
 * @public
 */
export interface SpecTypeParamOwner {
  /**
   * The {@link SpecTypeParamOwner.typeParams} property represents a list of
   * contained parameters.
   */
  readonly typeParams: SpecTypeParamList;

  /**
   * The {@link SpecParamOwner.typeParam} method appends a type param with the
   * specified name to `this` params list.
   *
   * @param name - The param name to be added.
   * @param type - The param type.
   * @param value - The parameter default value.
   */
  typeParam(
    name: string,
    type?: SpecCode | StringLike,
    value?: SpecCode | StringLike,
  ): SpecTypeParam;
}
