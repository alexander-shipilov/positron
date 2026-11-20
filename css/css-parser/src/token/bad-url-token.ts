import { Token } from "./token";
import { TokenType } from "./token-type";

export class BadUrlToken extends Token {
  public get type(): TokenType {
    return TokenType.BadUrl;
  }
}
