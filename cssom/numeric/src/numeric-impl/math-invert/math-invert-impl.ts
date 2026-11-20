import type { MathUnaryImpl } from "../math-unary";

import type { MathInvertClass } from "./math-invert-class";

export interface MathInvertImpl extends MathUnaryImpl {
  readonly MathInvert: MathInvertClass;
}
