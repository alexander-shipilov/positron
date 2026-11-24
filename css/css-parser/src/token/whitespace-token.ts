import { Token } from "./token";
import { TokenType } from "./token-type";

/**
 * @public
 */
export class WhitespaceToken extends Token<TokenType.Whitespace> {
  public get type(): TokenType.Whitespace {
    return TokenType.Whitespace;
  }
}
