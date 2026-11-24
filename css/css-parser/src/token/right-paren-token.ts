import { Token } from "./token";
import { TokenType } from "./token-type";

/**
 * @public
 */
export class RightParenToken extends Token<TokenType.RightParen> {
  public get type(): TokenType.RightParen {
    return TokenType.RightParen;
  }
}
