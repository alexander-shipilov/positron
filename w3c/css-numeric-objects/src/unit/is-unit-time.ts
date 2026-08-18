import type { UnitTime } from "./unit-time";
import { UNIT_MS } from "./unit-ms";
import { UNIT_S } from "./unit-s";

export function isUnitTime(maybeUnitTime: unknown): maybeUnitTime is UnitTime {
  return (
    maybeUnitTime === UNIT_MS || //
    maybeUnitTime === UNIT_S
  );
}
