import type { Point } from "./point";
import { ASCII } from "./ascii";
import { getCharFlagsNonASCII } from "./get-char-flags-non-ascii";

/**
 * @internal
 */
export function getCharFlags(code: Point): number {
  return code >= 0x80 ? getCharFlagsNonASCII(code) : ASCII[code];
}
