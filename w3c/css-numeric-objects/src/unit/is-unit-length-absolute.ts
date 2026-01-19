import type { UnitLength } from "./unit-length";
import { UNIT_CM } from "./unit-cm";
import { UNIT_IN } from "./unit-in";
import { UNIT_MM } from "./unit-mm";
import { UNIT_PC } from "./unit-pc";
import { UNIT_PT } from "./unit-pt";
import { UNIT_PX } from "./unit-px";
import { UNIT_Q } from "./unit-q";

export function isUnitLengthAbsolute(
  maybeUnitLength: unknown,
): maybeUnitLength is UnitLength {
  return (
    maybeUnitLength === UNIT_CM ||
    maybeUnitLength === UNIT_IN ||
    maybeUnitLength === UNIT_MM ||
    maybeUnitLength === UNIT_PC ||
    maybeUnitLength === UNIT_PT ||
    maybeUnitLength === UNIT_PX ||
    maybeUnitLength === UNIT_Q
  );
}
