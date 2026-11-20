import type { Nullish } from "@positron/lang";

import type { Numerical } from "./numerical";
import type { NumericalSign } from "./numerical-sign";
import { NumericalToken } from "./numerical-token";
import { NumericalType } from "./numerical-type";

/**
 * <number-token> and <dimension-token> additionally have a type flag set to
 * either "integer" or "number". The type flag defaults to "integer" if not
 * otherwise set.
 */
export abstract class TypedNumericalToken extends NumericalToken {
  public readonly numericalType: NumericalType;

  public constructor(
    value: Numerical,
    sign: Nullish<NumericalSign> = null,
    numericalType: NumericalType = NumericalType.Integer,
  ) {
    super(value, sign);

    this.numericalType = numericalType;
  }
}
