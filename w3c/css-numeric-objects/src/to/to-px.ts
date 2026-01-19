import type { UnitLengthAbsolute } from "../unit/unit-length-absolute";
import {
  UNIT_CM,
  UNIT_IN,
  UNIT_MM,
  UNIT_PC,
  UNIT_PT,
  UNIT_PX,
  UNIT_Q,
} from "../unit";

export function toPx(value: number, unit: UnitLengthAbsolute): number {
  switch (unit) {
    case UNIT_CM:
      // 1cm = 1in / 2.54 = 96px / 2.54
      return value * (48 / 1.27);
    case UNIT_IN:
      // 1in = 2.54cm = 96px
      return value * 96;
    case UNIT_MM:
      // 1mm = 1cm / 10 = 96px / 25.4
      return value * (48 / 12.7);
    case UNIT_PC:
      // 1pc = 12pt = 1in / 6 = 96px / 6
      return value * 16;
    case UNIT_PT:
      // 1pt = 1in / 72 = 96px / 72
      return value * (4 / 3);
    case UNIT_PX:
      return value;
    case UNIT_Q:
      // 1Q = 1cm / 40 = 96px / (2.54 * 40).
      return value * (12 / 12.7);
    default:
      throw new TypeError("Unknown unit");
  }
}
