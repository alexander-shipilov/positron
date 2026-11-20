import { Token } from "./token";
import { TokenType } from "./token-type";

export class LeftSquareBracketToken extends Token {
  public get type(): TokenType {
    return TokenType.LeftSquareBracket;
  }
}
