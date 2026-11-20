import type { Nullish, Optional } from "@positron/lang";

import { LookaheadStreamObject } from "../stream";

import type { CodePoint } from "./code-point";
import type { Point } from "./point";
import { CodePointObject } from "./code-point-object";

/**
 * The {@link InputStream} class represents an object that sequentially reads
 * Unicode code points from an underlying source.
 *
 * @public
 */
export class InputStream extends LookaheadStreamObject<CodePoint> {
  /**
   * Creates a new {@link InputStream} object.
   *
   * @remarks
   *   https://w3.org
   *
   *   The input stream consists of the filtered code points pushed into it as
   *   the input byte stream is decoded.
   *
   *   To filter code points from a stream of (unfiltered) code points input:
   *
   *   - Replace any U+000D CARRIAGE RETURN (CR) code points, U+000C FORM FEED
   *     (FF) code points, or pairs of U+000D CARRIAGE RETURN (CR) followed by
   *     U+000A LINE FEED (LF) in input by a single U+000A LINE FEED (LF) code
   *     point.
   *
   *   - Replace any U+0000 NULL or surrogate code points in input with
   *     U+FFFD REPLACEMENT CHARACTER (\uFFFD).
   *
   * @param source - The raw input string to preprocess and read code points from.
   */
  public constructor(source: string) {
    let index = 0;

    const normalized = source
      .replace(/\r\n?|[\f]/g, "\n")
      // eslint-disable-next-line no-control-regex
      .replace(/[\0\uD800-\uDFFF]/gu, "\uFFFD");

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
