import { Token } from "./token";
import { TokenType } from "./token-type";

/**
 * @public
 */
export class RightSquareBracketToken extends Token<TokenType.RightSquareBracket> {
  public get type(): TokenType.RightSquareBracket {
    return TokenType.RightSquareBracket;
  }
}
