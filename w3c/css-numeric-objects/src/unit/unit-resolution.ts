import type { UnitDpcm } from "./unit-dpcm";
import type { UnitDpi } from "./unit-dpi";
import type { UnitDppx } from "./unit-dppx";

export type UnitResolution =
  | UnitDpcm //
  | UnitDpi
  | UnitDppx;
