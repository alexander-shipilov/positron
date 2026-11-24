import type { Point } from "./point";
import { CharFlag } from "./char-flag";
import { NON_ASCII } from "./non-ascii";

/**
 * The {@link getCharFlagsNonAscii} function computes the {@link CharFlag}
 * bitmask for a non-ASCII Unicode code point (`code >= 0x80`).
 *
 * @param code - The non-ASCII Unicode code point value.
 *
 * @returns The matching {@link CharFlag} bitmask.
 *
 * @internal
 */
export function getCharFlagsNonAscii(code: Point): number {
  let flags: number = CharFlag.No;

  let lo = 0;
  let hi = NON_ASCII.length - 1;

  while (lo <= hi) {
    const md = (lo + hi) >>> 1;

    if (NON_ASCII[md][0] <= code) {
      flags = NON_ASCII[md][1];
      lo = md + 1;
    } else {
      hi = md - 1;
    }
  }

  return flags;
}
