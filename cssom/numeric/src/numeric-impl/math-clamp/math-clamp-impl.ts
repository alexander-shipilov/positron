import type {
  CssMathClamp,
  CssMathClampClass,
  CssNumberish,
} from "@positron/css-numeric";

import type { MathValueImpl } from "../math-value";

export interface MathClampImpl extends MathValueImpl {
  readonly MathClamp: CssMathClampClass;

  initMathClamp(
    $this: CssMathClamp,
    lower: CssNumberish,
    value: CssNumberish,
    upper: CssNumberish,
  ): void;
}
