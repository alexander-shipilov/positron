import { Token } from "./token";
import { TokenType } from "./token-type";

/**
 * @public
 */
export class RightCurlyBracketToken extends Token<TokenType.RightCurlyBracket> {
  public get type(): TokenType.RightCurlyBracket {
    return TokenType.RightCurlyBracket;
  }
}
