import type { UnitAngle } from "./unit-angle";
import type { UnitFlex } from "./unit-flex";
import type { UnitFrequency } from "./unit-frequency";
import type { UnitLength } from "./unit-length";
import type { UnitNumber } from "./unit-number";
import type { UnitPercent } from "./unit-percent";
import type { UnitResolution } from "./unit-resolution";
import type { UnitTime } from "./unit-time";

export type Unit =
  | UnitAngle
  | UnitFlex
  | UnitFrequency
  | UnitLength
  | UnitNumber
  | UnitPercent
  | UnitResolution
  | UnitTime;
