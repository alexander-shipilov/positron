import { Token } from "./token";
import { TokenType } from "./token-type";

export class RightParenToken extends Token {
  public get type(): TokenType {
    return TokenType.RightParen;
  }
}
