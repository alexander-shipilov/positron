import { Token } from "./token";
import { TokenType } from "./token-type";

/**
 * @public
 */
export class CommaToken extends Token<TokenType.Comma> {
  public get type(): TokenType.Comma {
    return TokenType.Comma;
  }
}
