import { Token } from "./token";
import { TokenType } from "./token-type";

export class RightSquareBracketToken extends Token {
  public get type(): TokenType {
    return TokenType.RightSquareBracket;
  }
}
