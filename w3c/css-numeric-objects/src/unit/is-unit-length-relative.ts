import type { UnitLength } from "./unit-length";
import { UNIT_CAP } from "./unit-cap";
import { UNIT_CH } from "./unit-ch";
import { UNIT_EM } from "./unit-em";
import { UNIT_EX } from "./unit-ex";
import { UNIT_IC } from "./unit-ic";
import { UNIT_LH } from "./unit-lh";
import { UNIT_RCAP } from "./unit-rcap";
import { UNIT_RCH } from "./unit-rch";
import { UNIT_REM } from "./unit-rem";
import { UNIT_REX } from "./unit-rex";
import { UNIT_RIC } from "./unit-ric";
import { UNIT_RLH } from "./unit-rlh";
import { UNIT_VB } from "./unit-vb";
import { UNIT_VH } from "./unit-vh";
import { UNIT_VI } from "./unit-vi";
import { UNIT_VMAX } from "./unit-vmax";
import { UNIT_VMIN } from "./unit-vmin";
import { UNIT_VW } from "./unit-vw";

export function isUnitLengthRelative(
  maybeUnitLength: unknown,
): maybeUnitLength is UnitLength {
  return (
    maybeUnitLength === UNIT_CAP ||
    maybeUnitLength === UNIT_CH ||
    maybeUnitLength === UNIT_EM ||
    maybeUnitLength === UNIT_EX ||
    maybeUnitLength === UNIT_IC ||
    maybeUnitLength === UNIT_LH ||
    maybeUnitLength === UNIT_RCAP ||
    maybeUnitLength === UNIT_RCH ||
    maybeUnitLength === UNIT_REM ||
    maybeUnitLength === UNIT_REX ||
    maybeUnitLength === UNIT_RIC ||
    maybeUnitLength === UNIT_RLH ||
    maybeUnitLength === UNIT_VB ||
    maybeUnitLength === UNIT_VH ||
    maybeUnitLength === UNIT_VI ||
    maybeUnitLength === UNIT_VMAX ||
    maybeUnitLength === UNIT_VMIN ||
    maybeUnitLength === UNIT_VW
  );
}
