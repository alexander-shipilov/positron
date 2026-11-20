import { Token } from "./token";
import { TokenType } from "./token-type";

export class CommaToken extends Token {
  public get type(): TokenType {
    return TokenType.Comma;
  }
}
