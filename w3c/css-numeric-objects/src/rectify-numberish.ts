import type { Numberish } from "./numberish";
import type { Unit } from "./unit";
import { NumericValue } from "./numeric-value";
import { UNIT_NUMBER } from "./unit";
import { UnitValue } from "./unit-value";

// To rectify a `numberish` value `num`, optionally to a given
// unit `unit` (defaulting to "number"), perform the following steps:
export function rectifyNumberish(
  num: Numberish,
  unit: Unit = UNIT_NUMBER,
): NumericValue {
  // If `num` is a `NumericValue`, return `num`.
  // If `num` is a `number`, return a new `UnitValue` with its [value] internal
  // slot set to `num` and its [unit] internal slot set to `unit`.
  return num instanceof NumericValue ? num : new UnitValue(num, unit);
}
