import { Token } from "./token";
import { TokenType } from "./token-type";

export class SemicolonToken extends Token {
  public get type(): TokenType {
    return TokenType.Semicolon;
  }
}
