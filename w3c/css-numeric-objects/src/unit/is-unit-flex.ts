import type { UnitFlex } from "./unit-flex";
import { UNIT_FR } from "./unit-fr";

export function isUnitFlex(maybeUnitFlex: unknown): maybeUnitFlex is UnitFlex {
  return maybeUnitFlex === UNIT_FR;
}
