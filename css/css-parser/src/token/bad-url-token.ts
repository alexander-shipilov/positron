import { Token } from "./token";
import { TokenType } from "./token-type";

/**
 * @public
 */
export class BadUrlToken extends Token<TokenType.BadUrl> {
  public get type(): TokenType.BadUrl {
    return TokenType.BadUrl;
  }
}
