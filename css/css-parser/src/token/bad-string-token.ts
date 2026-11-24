import { Token } from "./token";
import { TokenType } from "./token-type";

/**
 * @public
 */
export class BadStringToken extends Token<TokenType.BadString> {
  public get type(): TokenType.BadString {
    return TokenType.BadString;
  }
}
