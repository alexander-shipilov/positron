import { Token } from "./token";
import { TokenType } from "./token-type";

/**
 * @public
 */
export class LeftSquareBracketToken extends Token<TokenType.LeftSquareBracket> {
  public get type(): TokenType.LeftSquareBracket {
    return TokenType.LeftSquareBracket;
  }
}
