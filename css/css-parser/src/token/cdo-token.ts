import { Token } from "./token";
import { TokenType } from "./token-type";

export class CDOToken extends Token {
  public get type(): TokenType {
    return TokenType.CDO;
  }
}
