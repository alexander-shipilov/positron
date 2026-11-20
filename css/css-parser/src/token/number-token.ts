import { TokenType } from "./token-type";
import { TypedNumericalToken } from "./typed-numerical-token";

/**
 * <number-token>, <percentage-token>, and <dimension-token> have a numeric
 * value, and an optional sign character set to either "+" or "-" (or nothing).
 *
 * <number-token> and <dimension-token> additionally have a type flag set to
 * either "integer" or "number". The type flag defaults to "integer" if not
 * otherwise set.
 */
export class NumberToken extends TypedNumericalToken {
  public get type(): TokenType {
    return TokenType.Number;
  }
}
