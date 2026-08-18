import type { UnitDeg } from "./unit-deg";
import type { UnitGrad } from "./unit-grad";
import type { UnitRad } from "./unit-rad";
import type { UnitTurn } from "./unit-turn";

export type UnitAngle =
  | UnitDeg //
  | UnitGrad
  | UnitRad
  | UnitTurn;
