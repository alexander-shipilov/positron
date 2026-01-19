import type { UnitFrequency } from "./unit-frequency";
import { UNIT_HZ } from "./unit-hz";
import { UNIT_KHZ } from "./unit-khz";

export function isUnitFrequency(
  maybeUnitFrequency: unknown,
): maybeUnitFrequency is UnitFrequency {
  return (
    maybeUnitFrequency === UNIT_HZ || //
    maybeUnitFrequency === UNIT_KHZ
  );
}
