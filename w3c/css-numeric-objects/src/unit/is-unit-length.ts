import type { UnitLength } from "./unit-length";
import { isUnitLengthAbsolute } from "./is-unit-length-absolute";
import { isUnitLengthRelative } from "./is-unit-length-relative";

export function isUnitLength(
  maybeUnitLength: unknown,
): maybeUnitLength is UnitLength {
  return (
    isUnitLengthAbsolute(maybeUnitLength) ||
    isUnitLengthRelative(maybeUnitLength)
  );
}
