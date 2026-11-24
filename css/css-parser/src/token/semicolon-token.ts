import { Token } from "./token";
import { TokenType } from "./token-type";

/**
 * @public
 */
export class SemicolonToken extends Token<TokenType.Semicolon> {
  public get type(): TokenType.Semicolon {
    return TokenType.Semicolon;
  }
}
