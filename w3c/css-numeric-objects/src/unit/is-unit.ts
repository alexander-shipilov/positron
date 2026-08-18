import type { Unit } from "./unit";
import { isUnitAngle } from "./is-unit-angle";
import { isUnitFlex } from "./is-unit-flex";
import { isUnitFrequency } from "./is-unit-frequency";
import { isUnitLength } from "./is-unit-length";
import { isUnitNumber } from "./is-unit-number";
import { isUnitPercent } from "./is-unit-percent";
import { isUnitResolution } from "./is-unit-resolution";
import { isUnitTime } from "./is-unit-time";

export function isUnit(maybeUnit: unknown): maybeUnit is Unit {
  // "length",
  // "angle",
  // "time",
  // "frequency",
  // "resolution",
  // "flex",
  // "percent",
  return (
    isUnitLength(maybeUnit) ||
    isUnitAngle(maybeUnit) ||
    isUnitTime(maybeUnit) ||
    isUnitFrequency(maybeUnit) ||
    isUnitResolution(maybeUnit) ||
    isUnitFlex(maybeUnit) ||
    isUnitPercent(maybeUnit) ||
    isUnitNumber(maybeUnit)
  );
}
