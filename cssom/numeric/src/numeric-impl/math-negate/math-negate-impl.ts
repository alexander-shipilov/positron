import type { MathUnaryImpl } from "../math-unary";

import type { MathNegateClass } from "./math-negate-class";

export interface MathNegateImpl extends MathUnaryImpl {
  readonly MathNegate: MathNegateClass;
}
