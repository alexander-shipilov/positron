import type { CssNumericValue } from "@positron/css-numeric";

import type { Numeric } from "./numeric";
import type { ClassFactory } from "./utility/class-factory";

export type NumericFactory<TValue extends CssNumericValue> = ClassFactory<
  Numeric,
  TValue
>;
