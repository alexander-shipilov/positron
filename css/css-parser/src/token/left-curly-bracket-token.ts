import { Token } from "./token";
import { TokenType } from "./token-type";

/**
 * @public
 */
export class LeftCurlyBracketToken extends Token<TokenType.LeftCurlyBracket> {
  public get type(): TokenType.LeftCurlyBracket {
    return TokenType.LeftCurlyBracket;
  }
}
