import type { CssNumericTypePercentHint } from "@positron/css-numeric";
import type { Nullish } from "@positron/lang";

import type { Unit, UnitMap } from "../unit";

import type { Type } from "./type";
import type { TypeEntries } from "./type-entries";

export interface TypeClass {
  new (
    entries?: Readonly<TypeEntries>,
    percentHint?: Nullish<CssNumericTypePercentHint>,
  ): Type;

  fromUnit(unit: Unit, power?: number): Type;

  fromUnitMap(unitMap: UnitMap): Type;
}
