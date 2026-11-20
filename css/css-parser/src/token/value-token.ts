import type { TokenType } from "./token-type";
import { Token } from "./token";

export abstract class ValueToken<
  TType extends TokenType,
  TValue,
> extends Token<TType> {
  public readonly value: TValue;

  public constructor(value: TValue) {
    super();

    this.value = value;
  }
}
