import type { Nullish } from "@positron/lang";

import type { DimensionUnit } from "./dimension-unit";
import type { Numerical } from "./numerical";
import type { NumericalSign } from "./numerical-sign";
import { NumericalType } from "./numerical-type";
import { TokenType } from "./token-type";
import { TypedNumericalToken } from "./typed-numerical-token";

/**
 * <number-token>, <percentage-token>, and <dimension-token> have a numeric
 * value, and an optional sign character set to either "+" or "-" (or nothing).
 *
 * <number-token> and <dimension-token> additionally have a type flag set to
 * either "integer" or "number". The type flag defaults to "integer" if not
 * otherwise set. <dimension-token> additionally have a unit composed of one or
 * more code points.
 */
export class DimensionToken extends TypedNumericalToken {
  public readonly unit: DimensionUnit;

  public get type(): TokenType {
    return TokenType.Dimension;
  }

  public constructor(
    value: Numerical,
    unit: DimensionUnit,
    sign: Nullish<NumericalSign> = null,
    numericalType: NumericalType = NumericalType.Integer,
  ) {
    super(value, sign, numericalType);

    this.unit = unit;
  }
}
