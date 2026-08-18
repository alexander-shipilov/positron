import type { UnitNumber } from "./unit-number";
import { UNIT_NUMBER } from "./unit-number";

export function isUnitNumber(
  maybeUnitNumber: unknown,
): maybeUnitNumber is UnitNumber {
  return maybeUnitNumber === UNIT_NUMBER;
}
