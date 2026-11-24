import { Token } from "./token";
import { TokenType } from "./token-type";

/**
 * @public
 */
export class CdcToken extends Token<TokenType.CDC> {
  public get type(): TokenType.CDC {
    return TokenType.CDC;
  }
}
