import type { CssUnitValue } from "@positron/css-numeric";

import type { $unit, $value } from "../-internal";
import type { NumericValue } from "../numeric-value";
import type { Unit } from "../unit";

export interface UnitValue extends CssUnitValue, NumericValue {
  [$unit]: Unit;

  [$value]: number;
}
