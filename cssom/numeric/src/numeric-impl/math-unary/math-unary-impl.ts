import type { CssNumberish } from "@positron/css-numeric";

import type { MathValueImpl } from "../math-value";

import type { MathUnary } from "./math-unary";
import type { MathUnaryClass } from "./math-unary-class";

export interface MathUnaryImpl extends MathValueImpl {
  readonly MathUnary: MathUnaryClass;

  initMathUnary($this: MathUnary, ...args: CssNumberish[]): void;
}
