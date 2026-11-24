import type { Nullish } from "@positron/lang";

import type { Numerical } from "./numerical";
import type { NumericalSign } from "./numerical-sign";
import type { TokenType } from "./token-type";
import { ValueToken } from "./value-token";

/**
 * The {@link NumericalToken} abstract class represents a {@link Token} with a
 * numeric value and an optional explicit {@link NumericalSign}.
 *
 * @typeParam TType - The specific {@link TokenType} discriminant of the token.
 *
 * @public
 */
export abstract class NumericalToken<
  TType extends TokenType,
> extends ValueToken<TType, Numerical> {
  /**
   * The {@link NumericalToken.sign} read-only property returns the explicit
   * {@link NumericalSign} character, or `null` if omitted.
   */
  public readonly sign: Nullish<NumericalSign>;

  /**
   * The {@link NumericalToken} constructor initializes the token with `value`
   * and an optional `sign`.
   *
   * @param value - The numeric value of the token.
   *
   * @param sign - The explicit sign character, defaulting to `null`.
   */
  public constructor(value: Numerical, sign: Nullish<NumericalSign> = null) {
    super(value);

    this.sign = sign;
  }
}
