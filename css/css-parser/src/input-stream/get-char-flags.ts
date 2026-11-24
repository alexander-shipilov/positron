import type { Point } from "./point";
import { ASCII } from "./ascii";
import { getCharFlagsNonAscii } from "./get-char-flags-non-ascii";

/**
 * The {@link getCharFlags} function computes the {@link CharFlag} bitmask for
 * any Unicode code point `code`.
 *
 * @param code - The Unicode code point value.
 *
 * @returns The matching {@link CharFlag} bitmask.
 *
 * @internal
 */
export function getCharFlags(code: Point): number {
  return code >= 0x80 ? getCharFlagsNonAscii(code) : ASCII[code];
}
