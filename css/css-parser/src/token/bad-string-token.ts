import { Token } from "./token";
import { TokenType } from "./token-type";

export class BadStringToken extends Token {
  public get type(): TokenType {
    return TokenType.BadString;
  }
}
