import type { Point } from "./point";
import { CharFlag } from "./char-flag";
import { NonASCII } from "./non-ascii";

/**
 * @internal
 */
export function getCharFlagsNonASCII(code: Point): number {
  let flags: number = CharFlag.No;

  let lo = 0;
  let hi = NonASCII.length - 1;

  while (lo <= hi) {
    const md = (lo + hi) >>> 1;

    if (NonASCII[md][0] <= code) {
      flags = NonASCII[md][1];
      lo = md + 1;
    } else {
      hi = md - 1;
    }
  }

  return flags;
}
