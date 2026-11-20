import type { CssNumericTypePercentHint } from "@positron/css-numeric";
import type { Nullish } from "@positron/lang";

import type { Unit, UnitMap } from "../unit";

import type { TypeEntries } from "./type-entries";
import type { TypeImpl } from "./type-impl";

export interface TypeImplClass {
  new (
    entries?: Readonly<TypeEntries>,
    percentHint?: Nullish<CssNumericTypePercentHint>,
  ): TypeImpl;

  fromUnit(unit: Unit, power?: number): TypeImpl;

  fromUnitMap(unitMap: UnitMap): TypeImpl;
