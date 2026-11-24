import type { TokenType } from "./token-type";
import { Token } from "./token";

/**
 * The {@link ValueToken} abstract class represents a {@link Token} carrying an
 * associated payload value.
 *
 * @typeParam TType - The specific {@link TokenType} discriminant of the token.
 *
 * @typeParam TValue - The payload value type stored on the token.
 *
 * @public
 */
export abstract class ValueToken<
  TType extends TokenType,
  TValue,
> extends Token<TType> {
  /**
   * The {@link ValueToken.value} read-only property returns the payload value
   * of this token.
   */
  public readonly value: TValue;

  /**
   * The {@link ValueToken} constructor initializes the token with `value`.
   *
   * @param value - The payload value to store on the token.
   */
  public constructor(value: TValue) {
    super();

    this.value = value;
  }
}
