import type { CssNumberish } from "@positron/css-numeric";

import type { MathValueImpl } from "../math-value";

import type { MathClamp } from "./math-clamp";
import type { MathClampClass } from "./math-clamp-class";

export interface MathClampImpl extends MathValueImpl {
  readonly MathClamp: MathClampClass;

  initMathClamp(
    $this: MathClamp,
    lower: CssNumberish,
    value: CssNumberish,
    upper: CssNumberish,
  ): void;
}
