import type { CodePoint } from "../input-stream";

import { TokenType } from "./token-type";
import { ValueToken } from "./value-token";

export class DelimToken extends ValueToken<CodePoint> {
  public get type(): TokenType {
    return TokenType.Delim;
  }
}
