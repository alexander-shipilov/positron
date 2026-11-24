import { Token } from "./token";
import { TokenType } from "./token-type";

/**
 * @public
 */
export class LeftParenToken extends Token<TokenType.LeftParen> {
  public get type(): TokenType.LeftParen {
    return TokenType.LeftParen;
  }
}
