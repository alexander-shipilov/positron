import { Token } from "./token";
import { TokenType } from "./token-type";

/**
 * @public
 */
export class ColonToken extends Token<TokenType.Colon> {
  public get type(): TokenType.Colon {
    return TokenType.Colon;
  }
}
