import { Token } from "./token";
import { TokenType } from "./token-type";

/**
 * @public
 */
export class CdoToken extends Token<TokenType.CDO> {
  public get type(): TokenType.CDO {
    return TokenType.CDO;
  }
}
