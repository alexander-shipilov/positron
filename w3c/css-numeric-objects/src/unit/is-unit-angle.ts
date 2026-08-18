import type { UnitAngle } from "./unit-angle";
import { UNIT_DEG } from "./unit-deg";
import { UNIT_GRAD } from "./unit-grad";
import { UNIT_RAD } from "./unit-rad";
import { UNIT_TURN } from "./unit-turn";

export function isUnitAngle(
  maybeUnitAngle: unknown,
): maybeUnitAngle is UnitAngle {
  return (
    maybeUnitAngle === UNIT_DEG ||
    maybeUnitAngle === UNIT_GRAD ||
    maybeUnitAngle === UNIT_RAD ||
    maybeUnitAngle === UNIT_TURN
  );
}
