import type { Nullish } from "@positron/lang";

import type { Numerical } from "./numerical";
import type { NumericalSign } from "./numerical-sign";
import type { TokenType } from "./token-type";
import { NumericalToken } from "./numerical-token";
import { NumericalType } from "./numerical-type";

/**
 * The {@link TypedNumericalToken} abstract class represents a
 * {@link NumericalToken} carrying a {@link NumericalType} flag (`"integer"`
 * or `"number"`).
 *
 * @typeParam TType - The specific {@link TokenType} discriminant of the token.
 *
 * @public
 */
export abstract class TypedNumericalToken<
  TType extends TokenType,
> extends NumericalToken<TType> {
  /**
   * The {@link TypedNumericalToken.numericalType} read-only property returns
   * the {@link NumericalType} flag of this token.
   */
  public readonly numericalType: NumericalType;

  /**
   * The {@link TypedNumericalToken} constructor initializes the token with
   * `value`, `sign`, and `numericalType`.
   *
   * @param value - The numeric value of the token.
   *
   * @param sign - The explicit sign character, defaulting to `null`.
   *
   * @param numericalType - The numeric type flag, defaulting to
   *   {@link NumericalType.Integer}.
   */
  public constructor(
    value: Numerical,
    sign: Nullish<NumericalSign> = null,
    numericalType: NumericalType = NumericalType.Integer,
  ) {
    super(value, sign);

    this.numericalType = numericalType;
  }
}
