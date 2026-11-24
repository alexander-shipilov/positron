import type { CodePoint } from "../input-stream/code-point";

import { TokenType } from "./token-type";
import { ValueToken } from "./value-token";

/**
 * @public
 */
export class DelimToken extends ValueToken<TokenType.Delim, CodePoint> {
  public get type(): TokenType.Delim {
    return TokenType.Delim;
  }
}
