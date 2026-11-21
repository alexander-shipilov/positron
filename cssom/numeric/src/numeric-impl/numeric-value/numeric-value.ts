import type { CssNumericValue } from "@positron/css-numeric";

import type { $type } from "../internal";
import type { Type } from "../type";

export interface NumericValue extends CssNumericValue {
  [$type]: Type;
}
