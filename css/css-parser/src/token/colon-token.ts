import { Token } from "./token";
import { TokenType } from "./token-type";

export class ColonToken extends Token {
  public get type(): TokenType {
    return TokenType.Colon;
  }
}
