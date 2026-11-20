import { Token } from "./token";
import { TokenType } from "./token-type";

export class LeftParenToken extends Token {
  public get type(): TokenType {
    return TokenType.LeftParen;
  }
}
