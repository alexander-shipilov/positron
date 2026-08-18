import type { UnitResolution } from "./unit-resolution";
import { UNIT_DPCM } from "./unit-dpcm";
import { UNIT_DPI } from "./unit-dpi";
import { UNIT_DPPX } from "./unit-dppx";

export function isUnitResolution(
  maybeUnitResolution: unknown,
): maybeUnitResolution is UnitResolution {
  return (
    maybeUnitResolution === UNIT_DPCM ||
    maybeUnitResolution === UNIT_DPI ||
    maybeUnitResolution === UNIT_DPPX
  );
}
