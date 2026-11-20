import type { TokenType } from "./token-type";

export abstract class Token<Type extends TokenType> {
  public abstract readonly type: Type;
}
