import type { UnitPercent } from "./unit-percent";
import { UNIT_PERCENT } from "./unit-percent";

export function isUnitPercent(
  maybeUnitPercent: unknown,
): maybeUnitPercent is UnitPercent {
  return maybeUnitPercent === UNIT_PERCENT;
}
