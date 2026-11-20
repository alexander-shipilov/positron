import type { CssNumberish } from "@positron/css-numeric";

import type { MathValueImpl } from "../math-value";

import type { MathVariadic } from "./math-variadic";
import type { MathVariadicClass } from "./math-variadic-class";

export interface MathVariadicImpl extends MathValueImpl {
  readonly MathVariadic: MathVariadicClass;

  initMathVariadic($this: MathVariadic, ...args: CssNumberish[]): void;
}
