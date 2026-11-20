import { NumericalToken } from "./numerical-token";
import { TokenType } from "./token-type";

/**
 * <number-token>, <percentage-token>, and <dimension-token> have a numeric
 * value, and an optional sign character set to either "+" or "-" (or nothing).
 */
export class PercentageToken extends NumericalToken {
  public get type(): TokenType {
    return TokenType.Percentage;
  }
}
