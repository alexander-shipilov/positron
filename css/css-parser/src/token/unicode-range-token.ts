import type { CodePoint } from "../input-stream/code-point";

import { Token } from "./token";
import { TokenType } from "./token-type";

/**
 * <unicode-range-token> has a starting and ending code point. It represents an
 * inclusive range of codepoints (including both the start and end). If the
 * ending code point is before the starting code point, it represents an empty
 * range.
 *
 * @public
 */
export class UnicodeRangeToken extends Token<TokenType.UnicodeRange> {
  public readonly end: CodePoint;

  public readonly start: CodePoint;

  public get type(): TokenType.UnicodeRange {
    return TokenType.UnicodeRange;
  }

  public constructor(start: CodePoint, end: CodePoint) {
    super();

    this.start = start;
    this.end = end;
  }
}
