import type { NumericValueImpl } from "../numeric-value";

import type { UnitValue } from "./unit-value";
import type { UnitValueClass } from "./unit-value-class";

export interface UnitValueImpl extends NumericValueImpl {
  readonly UnitValue: UnitValueClass;

  initUnitValue($this: UnitValue, value: number, unit: string): void;

  setUnitValue($this: UnitValue, value: number): void;
}
