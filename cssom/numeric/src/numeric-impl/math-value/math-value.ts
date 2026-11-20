import type { CssMathValue } from "@positron/css-numeric";

import type { NumericValue } from "../numeric-value";

export interface MathValue extends CssMathValue, NumericValue {}
