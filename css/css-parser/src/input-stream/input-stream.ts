import type { Nullish, Optional } from "@positron/lang";

import { LookaheadStreamObject } from "../stream/lookahead-stream-object";

import type { CodePoint } from "./code-point";
import type { Point } from "./point";
import { CodePointObject } from "./code-point-object";

/**
 * The {@link InputStream} class represents a preprocessed Unicode code point
 * stream conforming to CSS Syntax Module Level 3 input stream rules.
 *
 * @public
 */
export class InputStream extends LookaheadStreamObject<CodePoint> {
  /**
   * The {@link InputStream} constructor preprocesses `source` and creates a
   * lookahead stream of {@link CodePoint} objects.
   *
   * @remarks
   *   See https://w3.org.
   *
   *   - Replace any U+000D CARRIAGE RETURN (CR) code points, U+000C FORM FEED
   *     (FF) code points, or pairs of U+000D CARRIAGE RETURN (CR) followed by
   *     U+000A LINE FEED (LF) in input by a single U+000A LINE FEED (LF) code
   *     point.
   *
   *   - Replace any U+0000 NULL or surrogate code points in input with
   *     `U+FFFD` REPLACEMENT CHARACTER.
   *
   * @param source - The raw CSS input string to preprocess and read.
   */
  public constructor(source: string) {
    let index = 0;

    const normalized = source
      .replace(/\r\n?|[\f]/g, "\n")
      // eslint-disable-next-line no-control-regex
      .replace(/[\u0000\uD800-\uDFFF]/gu, "\uFFFD");

    super((): Nullish<CodePoint> => {
      const point = normalized.codePointAt(index) as Optional<Point>;
      let codePoint: Nullish<CodePoint> = null;

      if (point !== undefined) {
        codePoint = new CodePointObject(point);
        index += codePoint.length;
      }

      return codePoint;
    });
  }
}
