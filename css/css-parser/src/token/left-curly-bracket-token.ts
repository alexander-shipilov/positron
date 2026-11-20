import { Token } from "./token";
import { TokenType } from "./token-type";

export class LeftCurlyBracketToken extends Token {
  public get type(): TokenType {
    return TokenType.LeftCurlyBracket;
  }
}
