import { Token } from "./token";
import { TokenType } from "./token-type";

export class RightCurlyBracketToken extends Token {
  public get type(): TokenType {
    return TokenType.RightCurlyBracket;
  }
}
